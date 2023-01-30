import {ApiPromise, WsProvider} from '@polkadot/api'
import {ApiDecoration} from '@polkadot/api/types'
import {PhalaPalletsComputeBasePoolPalletBasePool} from '@polkadot/types/lookup'
import {BN} from '@polkadot/util'
import assert from 'assert'
import fs from 'fs/promises'

const ENDPOINT = 'wss://priv-api.phala.network/khala/ws'
const BLOCK_NUMBER = 3010000
const ASSET_ID = 10000

const multiQueryBalance = async (
  api: ApiDecoration<'promise'>,
  accountIds: string[]
) => {
  const res = await api.query.assets.account.multi(
    accountIds.map((accountId) => [ASSET_ID, accountId])
  )
  return res.map((x) => x.unwrapOr({balance: 0}).balance.toString())
}

const getIdentities = async (api: ApiDecoration<'promise'>) => {
  const identityEntries = await api.query.identity.identityOf.entries()
  const identities = identityEntries.map(([key, value]) => {
    const unwrapped = value.unwrap()
    const judgements = unwrapped.judgements
    let identity: string | null = null
    if (unwrapped.info.display.isRaw) {
      identity = unwrapped.info.display.asRaw.toUtf8()
    }
    return {
      id: key.args[0].toString(),
      identity,
      judgement: judgements.length ? judgements[0][1].type : null,
      // superId: null as string | null,
      // subIdentity: null as string | null,
    }
  })
  // const identityMap = new Map(identities.map((i) => [i.id, i]))
  // const superEntries = await api.query.identity.superOf.entries()
  // for (const [key, value] of superEntries) {
  //   const id = key.args[0].toString()
  //   const unwrapped = value.unwrap()
  //   const superId = unwrapped[0].toString()
  //   const subIdentity = unwrapped[1].asRaw.toString()
  //   const identity = identityMap.get(id)
  //   if (identity) {
  //     identity.superId = superId
  //     identity.subIdentity = subIdentity
  //   } else {
  //     identities.push({
  //       id,
  //       identity: null,
  //       judgement: null,
  //       superId,
  //       subIdentity,
  //     })
  //   }
  // }

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
      const ownerRewardAccount = s.ownerRewardAccount.toString()
      commission = s.payoutCommission.unwrapOr(0).toString()
      basePool = s.basepool
      const workers = s.workers.map((pubkey) => pubkey.toString())
      let capacity = null
      try {
        capacity = s.cap.unwrap().toString()
      } catch (e) {
        // noop
      }
      stakePool = {
        capacity,
        workers,
        ownerRewardAccount,
        ownerReward: '0',
      }
    } else {
      const v = unwrapped.asVault
      basePool = v.basepool
      commission = v.commission.unwrapOr(0).toString()
      const lastSharePriceCheckpoint = v.lastSharePriceCheckpoint.toString()
      const ownerShares = v.ownerShares.toString()
      vault = {lastSharePriceCheckpoint, ownerShares}
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
      withdrawQueue: basePool.withdrawQueue.map((x) => ({
        user: x.user.toString(),
        startTime: x.startTime.toNumber(),
        nftId: x.nftId.toNumber(),
      })),
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
  const ownerRewardAccountIdEntries: [string, string][] = basePools
    .filter((p) => p.stakePool)
    .map((p) => {
      assert(p.stakePool)
      return [p.pid, p.stakePool.ownerRewardAccount]
    })
  const ownerRewards = await multiQueryBalance(
    api,
    ownerRewardAccountIdEntries.map((x) => x[1])
  )
  for (let i = 0; i < ownerRewardAccountIdEntries.length; i++) {
    const pool = basePoolMap.get(ownerRewardAccountIdEntries[i][0])
    assert(pool?.stakePool)
    pool.stakePool.ownerReward = ownerRewards[i]
  }

  const basePoolAccountIds = basePools.map((p) => p.poolAccountId)
  const basePoolBalances = await multiQueryBalance(api, basePoolAccountIds)
  for (let i = 0; i < basePoolAccountIds.length; i++) {
    const pool = basePools[i]
    pool.freeValue = basePoolBalances[i]
  }

  return basePools
}

const getWorkers = async (api: ApiDecoration<'promise'>) => {
  const workerEntries = await api.query.phalaRegistry.workers.entries()
  const workers = workerEntries.map(([key, value]) => {
    const worker = value.unwrap()
    let initialScore = null
    try {
      initialScore = worker.initialScore.unwrap().toNumber()
    } catch (err) {
      // noop
    }
    return {
      id: key.args[0].toString(),
      confidenceLevel: worker.confidenceLevel.toNumber(),
      initialScore,
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
      coolingDownStartTime: unwrapped.coolDownStart.toNumber(),
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

const getNfts = async (
  api: ApiPromise,
  apiDecoration: ApiDecoration<'promise'>,
  basePoolCids: number[]
) => {
  const collectionEntries =
    await apiDecoration.query.rmrkCore.collections.entries()
  const cids = collectionEntries.map(([key, value]) => key.args[0].toNumber())
  const nftEntries = (
    await Promise.all(
      cids.map((cid) => apiDecoration.query.rmrkCore.nfts.entries(cid))
    )
  ).flat()
  const nfts = nftEntries.map(([key, value]) => {
    const cid = key.args[0].toNumber()
    const nftId = key.args[1].toNumber()
    return {
      cid,
      nftId,
      owner: value.unwrap().owner.asAccountId.toString(),
      shares: undefined as undefined | string,
      createTime: undefined as undefined | number,
    }
  })
  const delegationNfts = nfts.filter((x) => basePoolCids.includes(x.cid))
  const nftStakeInfo = await apiDecoration.query.rmrkCore.properties.multi(
    delegationNfts.map(({cid, nftId}) => [cid, nftId, 'stake-info'])
  )
  const nftCreateTime = await apiDecoration.query.rmrkCore.properties.multi(
    delegationNfts.map(({cid, nftId}) => [cid, nftId, 'createtime'])
  )
  const nftShares = nftStakeInfo.map((x) => {
    const stakeInfo = api.createType('NftAttr', x.unwrap()) as unknown as {
      shares: BN
    }
    return stakeInfo.shares.toString()
  })

  for (let i = 0; i < delegationNfts.length; i++) {
    delegationNfts[i].shares = nftShares[i]
    delegationNfts[i].createTime =
      (nftCreateTime[i].unwrap().toPrimitive() as number) * 1000
  }
  return nfts
}

const main = async () => {
  const endpoint = process.env.ENDPOINT || ENDPOINT
  const provider = new WsProvider(endpoint, 1000)
  const api = await ApiPromise.create({
    provider,
    types: {
      NftAttr: {
        shares: 'Balance',
      },
    },
  })
  const blockHash = await api.rpc.chain.getBlockHash(BLOCK_NUMBER)
  const apiDecoration = await api.at(blockHash)
  const basePools = await getBasePools(apiDecoration)

  const json = {
    timestamp: (await apiDecoration.query.timestamp.now()).toNumber(),
    basePools,
    workers: await getWorkers(apiDecoration),
    sessions: await getSessions(apiDecoration),
    identities: await getIdentities(apiDecoration),
    nfts: await getNfts(
      api,
      apiDecoration,
      basePools.map((x) => x.cid)
    ),
  }

  await fs.writeFile(
    `./dist/khala/dump_${BLOCK_NUMBER}.json`,
    JSON.stringify(json)
  )

  process.exit()
}

main()
