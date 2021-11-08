import {ApiPromise, WsProvider} from '@polkadot/api'
import {khala} from '@phala/typedefs'
import {memoize} from 'lodash-es'

export const getApi = memoize(async () => {
  const provider = new WsProvider('wss://khala-api.phala.network/ws')
  const api = await ApiPromise.create({provider, types: khala})
  return api
})
