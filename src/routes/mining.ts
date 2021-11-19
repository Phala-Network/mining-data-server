import type {FastifyPluginAsync} from 'fastify'

const mining: FastifyPluginAsync = async (app) => {
  app.get('/miners', async ({api}) => {
    const miners = await api.query.phalaMining.miners.entries()
    const minersEntry = miners.reduce<Record<string, unknown>>(
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
    const stakesEntry = stakes.reduce<Record<string, string>>(
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
    const workerBindingsEntry = workerBindings.reduce<Record<string, string>>(
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
