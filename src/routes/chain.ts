import type {FastifyPluginAsync} from 'fastify'
import type {ApiPromise} from '@polkadot/api'

const chain: FastifyPluginAsync = async (app) => {
  app.get('/header', async (request) => {
    const header = await (request.api as ApiPromise).rpc.chain.getHeader()
    return header.toJSON()
  })

  app.get<{Querystring: {blockNumber?: string}}>(
    '/block-hash',
    async (request) => {
      const hash = await (request.api as ApiPromise).rpc.chain.getBlockHash(
        request.query.blockNumber
      )
      return hash.toHex()
    }
  )

  app.get('/timestamp', async (request) => {
    const timestamp = await request.api.query.timestamp.now()
    return timestamp.toNumber()
  })
}

export default chain
