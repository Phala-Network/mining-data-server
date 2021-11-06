import {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const tokenomicParameters: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/tokenomic-parameters', async (request) => {
    const api = await getApi(request.query.hash)
    const tokenomicParameters =
      await api.query.phalaMining.tokenomicParameters()

    return tokenomicParameters.toJSON()
  })
}

export default tokenomicParameters
