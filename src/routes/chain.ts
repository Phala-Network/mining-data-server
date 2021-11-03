import type {FastifyPluginAsync} from 'fastify'
import {getBlockHash, getHeader, getTimestamp} from '../controllers/chain'
import {HashQuery} from '../types'

const chain: FastifyPluginAsync = async (app) => {
  app.get('/header', getHeader)

  app.get<{Querystring: {blockNumber?: string}}>(
    '/block-hash',
    async ({query: {blockNumber}}) => {
      return getBlockHash(blockNumber)
    }
  )

  app.get<HashQuery>('/timestamp', async ({query: {hash}}) =>
    getTimestamp(hash)
  )
}

export default chain
