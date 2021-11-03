import {FastifyPluginAsync} from 'fastify'
import {getTokenomicParameters} from '../controllers/tokenomicParameters'
import {HashQuery} from '../types'

const tokenomicParameters: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/tokenomic-parameters', async ({query: {hash}}) =>
    getTokenomicParameters(hash)
  )
}

export default tokenomicParameters
