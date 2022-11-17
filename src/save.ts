import {ApiPromise, WsProvider} from '@polkadot/api'
import {ApiDecoration} from '@polkadot/api/types'
import {PhalaPalletsComputeBasePoolPalletBasePool} from '@polkadot/types/lookup'
import assert from 'assert'
import fs from 'fs/promises'

const BLOCK_NUMBER = 7000
const ASSET_ID = 1

const getIdentities = async (api: ApiDecoration<'promise'>) => {
  const identityEntries = await api.query.identity.identityOf.entries()
  const identities = identityEntries.map(([key, value]) => {
    const judgements = value.unwrap().judgements
    return {
      id: key.args[0].toString(),
      identity: value.unwrap().info.display.asRaw.toString() as string | null,
      judgement: judgements.length ? judgements[0][1].type : null,
      superId: null as string | null,
      subIdentity: null as string | null,
    }
  })
  const identityMap = new Map(identities.map((i) => [i.id, i]))
  const superEntries = await api.query.identity.superOf.entries()
  for (const [key, value] of superEntries) {
    const id = key.args[0].toString()
    const unwrapped = value.unwrap()
    const superId = unwrapped[0].toString()
    const subIdentity = unwrapped[1].asRaw.toString()
    const identity = identityMap.get(id)
    if (identity) {
      identity.superId = superId
      identity.subIdentity = subIdentity
    } else {
      identities.push({
        id,
        identity: null,
        judgement: null,
        superId,
        subIdentity,
      })
    }
  }

  return identities
}

const getBasePools = async (api: ApiDecoration<'promise'>) => {
  const basePoolEntries = await api.query.phalaBasePool.pools.entries()
  const basePools = basePoolEntries.map(([key, value]) => {
    const pid = key.args[0].toString()
    let commission: string
    let basePool: PhalaPalletsComputeBasePoolPalletBasePool
    let stakePool
    let vault
    const unwrapped = value.unwrap()
    if (unwrapped.isStakePool) {
      const s = unwrapped.asStakePool
      commission = s.payoutCommission.unwrapOr(0).toString()
      basePool = s.basepool
      const workers = s.workers.map((pubkey) => pubkey.toString())
      const capacity = s.cap.unwrapOrDefault().toString()
      stakePool = {
        capacity,
        workers,
      }
    } else {
      const v = unwrapped.asVault
      basePool = v.basepool
      commission = v.commission.unwrapOr(0).toString()
      const lastSharePriceCheckpoint = v.lastSharePriceCheckpoint.toString()
      vault = {lastSharePriceCheckpoint}
    }
    const owner = basePool.owner.toString()
    const cid = basePool.cid.toNumber()
    const totalShares = basePool.totalShares.toString()
    const totalValue = basePool.totalValue.toString()
    const poolAccountId = basePool.poolAccountId.toString()
    return {
      pid,
      cid,
      owner,
      commission,
      totalShares,
      totalValue,
      freeValue: '0',
      poolAccountId,
      vault,
      stakePool,
      whitelists: [] as string[],
    }
  })
  const basePoolMap = new Map(basePools.map((p) => [p.pid, p]))
  const basePoolWhitelistEntries =
    await api.query.phalaBasePool.poolContributionWhitelists.entries()
  for (const [key, value] of basePoolWhitelistEntries) {
    const pool = basePoolMap.get(key.args[0].toString())
    assert(pool)
    pool.whitelists = value.unwrap().map((account) => account.toString())
  }
  const basePoolAccountIds = basePools.map((p) => p.poolAccountId)
  const basePoolBalanceEntries = await api.query.assets.account.multi(
    basePoolAccountIds.map((accountId) => [ASSET_ID, accountId])
  )
  for (let i = 0; i < basePoolAccountIds.length; i++) {
    const pool = basePools[i]
    pool.freeValue = basePoolBalanceEntries[i]
      .unwrapOr({balance: 0})
      .balance.toString()
  }

  return basePools
}

const getWorkers = async (api: ApiDecoration<'promise'>) => {
  const workerEntries = await api.query.phalaRegistry.workers.entries()
  const workers = workerEntries.map(([key, value]) => {
    return {
      id: key.args[0].toString(),
    }
  })

  return workers
}

const getSessions = async (api: ApiDecoration<'promise'>) => {
  const sessionEntries = await api.query.phalaComputation.sessions.entries()
  const sessions = sessionEntries.map(([key, value]) => {
    const unwrapped = value.unwrap()
    const benchmark = unwrapped.benchmark
    return {
      id: key.args[0].toString(),
      v: unwrapped.v.toString(),
      ve: unwrapped.ve.toString(),
      state: unwrapped.state.type,
      pInit: benchmark.pInit.toNumber(),
      pInstant: benchmark.pInstant.toNumber(),
      totalReward: unwrapped.stats.totalReward.toString(),
      coolingDownStartTime: unwrapped.coolDownStart.toString(),
      stake: '0',
      worker: null as string | null,
    }
  })
  const sessionMap = new Map(sessions.map((s) => [s.id, s]))
  const sessionStakeEntries = await api.query.phalaComputation.stakes.entries()
  for (const [key, value] of sessionStakeEntries) {
    const session = sessionMap.get(key.args[0].toString())
    assert(session)
    session.stake = value.unwrap().toString()
  }
  const sessionBindingEntries =
    await api.query.phalaComputation.sessionBindings.entries()
  for (const [key, value] of sessionBindingEntries) {
    const session = sessionMap.get(key.args[0].toString())
    assert(session)
    session.worker = value.unwrap().toString()
  }

  return sessions
}

const main = async () => {
  const endpoint = process.env.ENDPOINT || 'ws://localhost:49944'
  const provider = new WsProvider(endpoint, 1000)
  const api = await ApiPromise.create({provider})
  const blockHash = await api.rpc.chain.getBlockHash(BLOCK_NUMBER)
  const apiDecoration = await api.at(blockHash)

  const json = {
    basePools: await getBasePools(apiDecoration),
    workers: await getWorkers(apiDecoration),
    sessions: await getSessions(apiDecoration),
    identities: await getIdentities(apiDecoration),
  }

  await fs.writeFile(`./dist/dump_${BLOCK_NUMBER}.json`, JSON.stringify(json))

  process.exit()
}

main()
