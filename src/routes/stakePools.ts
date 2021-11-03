import Big from 'big.js'
import type {FastifyPluginAsync} from 'fastify'
import {getApi} from '../helper/polkadot'
import type {HashQuery} from '../types'

const stakePools: FastifyPluginAsync = async (app) => {
  app.get<{Params: {pid: string}} & HashQuery>(
    '/stake-pools/:pid',
    async (request) => {
      const {
        query: {hash},
        params: {pid: pidParam},
      } = request
      let pid: Big
      try {
        pid = Big(pidParam)
      } catch (e) {
        throw new Error('Invalid pid')
      }
      const api = await getApi(hash)
      const stakePool = await api.query.phalaStakePool.stakePools(
        pid.toString()
      )
      return {
        pid,
        ...stakePool.unwrap().toJSON(),
      }
    }
  )
}

export default stakePools
