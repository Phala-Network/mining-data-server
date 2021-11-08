import {FastifyPluginAsync} from 'fastify'

const tokenomicParameters: FastifyPluginAsync = async (app) => {
  app.get('/tokenomic-parameters', async ({api}) => {
    const tokenomicParameters =
      await api.query.phalaMining.tokenomicParameters()

    return tokenomicParameters.toJSON()
  })
}

export default tokenomicParameters
