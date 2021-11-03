import type {FastifyPluginAsync} from 'fastify'
import {getAllWorkers} from '../controllers/worker'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const workers: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/workers', async (request) => {
    const {
      query: {hash},
    } = request
    return getAllWorkers(hash)
  })
}

export default workers
