import fastify from 'fastify'
import autoLoad from 'fastify-autoload'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
import humps from 'humps'
import querystring from 'querystring'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify({
  querystringParser: (str) =>
    humps.camelizeKeys(querystring.parse(str)) as Record<string, string>,
  logger: process.env.NODE_ENV === 'development' && {
    prettyPrint: true,
  },
})

app.get('/check-health', async () => 'Ok')

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  forceESM: true,
})

app.setErrorHandler(async (error, request, reply) => {
  reply.send({
    message: error.message,
  })
})

app.listen(3001)
