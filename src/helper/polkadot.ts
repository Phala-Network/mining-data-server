import {ApiPromise, WsProvider} from '@polkadot/api'
import {khala} from '@phala/typedefs'
import {memoize} from 'lodash'

export const getApi = memoize(async () => {
  const provider = new WsProvider(
    process.env.ENDPOINT || 'wss://khala-archive.phala.network/ws',
    1000
  )
  const api = await ApiPromise.create({provider, types: khala})
  return api
})
