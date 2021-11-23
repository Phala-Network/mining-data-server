import type {FastifyPluginAsync} from 'fastify'

const stakePools: FastifyPluginAsync = async (app) => {
  app.get('/stake_pools', async ({api}) => {
    const stakePools = await api.query.phalaStakePool.stakePools.entries()
    return stakePools.map(([key, stakePool]) => stakePool.toJSON())
  })

  app.get('/pool_stakers', async ({api}) => {
    const poolStakers = await api.query.phalaStakePool.poolStakers.entries()
    return poolStakers.map(([key, poolStaker]) => [
      key.args[0].toJSON(),
      poolStaker.toJSON(),
    ])
  })
}

export default stakePools
