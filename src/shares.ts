import {ApiPromise, WsProvider} from '@polkadot/api'
import {BN} from '@polkadot/util'

const ENDPOINT = 'wss://khala-api.phala.network/ws'
const cid = 12468
const nftId = 6
const blockNumber = 1234

const main = async () => {
  const endpoint = process.env.ENDPOINT || ENDPOINT
  const provider = new WsProvider(endpoint, 1000)
  const api = await ApiPromise.create({
    provider,
    types: {NftAttr: {shares: 'Balance'}},
  })
  const blockHash = await api.rpc.chain.getBlockHash(blockNumber)
  const nftStakeInfo = await (
    await api.at(blockHash)
  ).query.rmrkCore.properties(cid, nftId, 'stake-info')
  console.log(nftStakeInfo.unwrap().toString())
  const stakeInfo = api.createType(
    'NftAttr',
    nftStakeInfo.unwrap()
  ) as unknown as {
    shares: BN
  }

  console.log('shares: ', stakeInfo.shares.toString())

  process.exit()
}

main()
