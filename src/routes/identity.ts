import type {FastifyPluginAsync} from 'fastify'

const identity: FastifyPluginAsync = async (app) => {
  app.get('/identity', async ({api}) => {
    const identity = await api.query.identity.identityOf.entries()
    return identity.map(([key, value]) => [
      key.args[0].toJSON(),
      value.toJSON(),
    ])
  })
}

export default identity
