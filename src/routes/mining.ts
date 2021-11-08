import type {FastifyPluginAsync} from 'fastify'

const mining: FastifyPluginAsync = async (app) => {
  app.get('/miners', async ({api}) => {
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

  app.get('/stakes', async ({api}) => {
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

  app.get('/worker-bindings', async ({api}) => {
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
