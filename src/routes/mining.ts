import type {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const mining: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/miners', async (request) => {
    const api = await getApi(request.query.hash)
    const miners = await api.query.phalaMining.miners.entries()
    const minersEntry: Record<string, any> = miners.reduce(
      (acc, [key, miner]) => {
        acc[key.args[0].toString()] = miner.toJSON()
        return acc
      },
      {}
    )

    return minersEntry
  })

  app.get<HashQuery>('/stakes', async (request) => {
    const api = await getApi(request.query.hash)
    const stakes = await api.query.phalaMining.stakes.entries()
    const stakesEntry: Record<string, string> = stakes.reduce(
      (acc, [key, stake]) => {
        acc[key.args[0].toString()] = stake.toString()
        return acc
      },
      {}
    )

    return stakesEntry
  })

  app.get<HashQuery>('/worker-bindings', async (request) => {
    const api = await getApi(request.query.hash)
    const workerBindings = await api.query.phalaMining.workerBindings.entries()
    const workerBindingsEntry: Record<string, string> = workerBindings.reduce(
      (acc, [key, workerBinding]) => {
        acc[key.args[0].toString()] = workerBinding.toString()
        return acc
      },
      {}
    )

    return workerBindingsEntry
  })
}

export default mining
