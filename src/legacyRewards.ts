import {ApiPromise, WsProvider} from '@polkadot/api'
import {ApiDecoration} from '@polkadot/api/types'
import fs from 'fs/promises'
import {groupBy} from 'lodash'

const ENDPOINT = 'wss://priv-api.phala.network/khala/ws'
const BLOCK_NUMBER = 3102746

const getLegacyRewards = async (api: ApiDecoration<'promise'>) => {
  const legacyRewardsEntries =
    await api.query.phalaStakePoolv2.legacyRewards.entries()

  const legacyRewards = legacyRewardsEntries.map(([key, value]) => {
    const rewards = value.unwrap().toString()
    const account = key.args[0][0].toString()
    const pid = key.args[0][1].toString()
    return [account, pid, rewards]
  })

  return groupBy(legacyRewards, (x) => {
    return x.shift()
  })
}

const main = async () => {
  const endpoint = process.env.ENDPOINT || ENDPOINT
  const provider = new WsProvider(endpoint, 1000)
  const api = await ApiPromise.create({provider})
  const blockHash = await api.rpc.chain.getBlockHash(BLOCK_NUMBER)
  const apiDecoration = await api.at(blockHash)

  const json = {
    timestamp: (await apiDecoration.query.timestamp.now()).toNumber(),
    legacyRewards: await getLegacyRewards(apiDecoration),
  }

  await fs.writeFile(
    `./dist/legacyRewards_${BLOCK_NUMBER}.json`,
    JSON.stringify(json)
  )

  process.exit()
}

main()
