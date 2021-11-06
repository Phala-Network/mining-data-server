import type {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const workers: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/workers', async (request) => {
    const api = await getApi(request.query.hash)
    const workers = await api.query.phalaRegistry.workers.entries()
    return workers.map(([key, worker]) => worker.toJSON())
  })
}

export default workers
