import type {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import {HashQuery} from '../types'

const chain: FastifyPluginAsync = async (app) => {
  app.get('/header', async () => {
    const api = await getApi()
    const header = await api.rpc.chain.getHeader()
    return header.toJSON()
  })

  app.get<{Querystring: {blockNumber?: string}}>(
    '/block-hash',
    async (request) => {
      const api = await getApi()
      const hash = await api.rpc.chain.getBlockHash(request.query.blockNumber)
      return hash.toHex()
    }
  )

  app.get<HashQuery>('/timestamp', async (request) => {
    const api = await getApi(request.query.hash)
    const timestamp = await api.query.timestamp.now()
    return timestamp.toNumber()
  })
}

export default chain
