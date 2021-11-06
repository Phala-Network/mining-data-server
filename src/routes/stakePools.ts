import type {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const stakePools: FastifyPluginAsync = async (app) => {
  app.get<HashQuery>('/stake-pools', async (request) => {
    const api = await getApi(request.query.hash)
    const stakePools = await api.query.phalaStakePool.stakePools.entries()
    return stakePools.map(([key, stakePool]) => stakePool.toJSON())
  })

  app.get<HashQuery>('/pool-stakers', async (request) => {
    const api = await getApi(request.query.hash)
    const poolStakers = await api.query.phalaStakePool.poolStakers.entries()
    return poolStakers.map(([key, poolStaker]) => [
      key.args[0].toJSON(),
      poolStaker.toJSON(),
    ])
  })
}

export default stakePools
