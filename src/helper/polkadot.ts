import {ApiPromise, WsProvider} from '@polkadot/api'
import {khala} from '@phala/typedefs'
import {memoize} from 'lodash-es'
import type {ApiDecoration} from '@polkadot/api/types'

const createApi = memoize(async () => {
  const provider = new WsProvider('wss://khala-api.phala.network/ws')
  const api = await ApiPromise.create({provider, types: khala})
  return api
})

async function originalGetApi(): Promise<ApiPromise>
async function originalGetApi(hash: string): Promise<ApiDecoration<'promise'>>
async function originalGetApi(
  hash?: string
): Promise<ApiPromise | ApiDecoration<'promise'>>
async function originalGetApi(hash?: string) {
  const api = await createApi()
  if (hash) {
    const hashedApi = await api.at(hash)
    return hashedApi
  }
  return api
}

export const getApi = memoize(originalGetApi)
