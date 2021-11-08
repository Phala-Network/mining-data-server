import type {ApiPromise} from '@polkadot/api'
import type {ApiDecoration} from '@polkadot/api/types'
import type {FastifyRequest} from 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    api: ApiPromise | ApiDecoration<'promise'>
    blockNumber: number
    blockHash: string
  }
}
