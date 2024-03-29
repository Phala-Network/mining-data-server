import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import humps from 'humps'
import path from 'path'
import {exit} from 'process'
import querystring from 'querystring'
import {getApi} from './helper/polkadot'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

const app = fastify({
  querystringParser: (str) =>
    humps.camelizeKeys(querystring.parse(str)) as Record<string, string>,
  logger: process.env.NODE_ENV ? envToLogger[process.env.NODE_ENV] : true,
})

app.get('/check-health', async () => 'Ok')

app.addHook<{Querystring: {hash?: string; number?: string}}>(
  'onRequest',
  async (request) => {
    let api = await getApi()
    request.rawApi = api
    const finalizedHash = await api.rpc.chain.getFinalizedHead()
    const finalizedHeader = await api.rpc.chain.getHeader(finalizedHash)
    const finalizedNumber = finalizedHeader.number.toNumber()
    const {hash, number} = request.query
    if (hash) {
      const block = await api.rpc.chain.getBlock(hash)
      const blockNumber = block.block.header.number.toNumber()
      if (blockNumber > finalizedNumber) {
        throw new Error('Block is not finalized yet.')
      }
      request.api = await api.at(hash)
      request.blockHash = hash
      request.blockNumber = blockNumber
    } else if (number) {
      const blockNumber = Number(number)
      if (blockNumber > finalizedNumber) {
        throw new Error('Block is not finalized yet.')
      }
      const blockHash = (await api.rpc.chain.getBlockHash(number)).toString()
      request.api = await api.at(blockHash)
      request.blockHash = blockHash
      request.blockNumber = blockNumber
    } else {
      request.api = await api.at(finalizedHash)
      request.blockHash = finalizedHash.toString()
      request.blockNumber = finalizedNumber
    }
  }
)

app.addHook('preSerialization', async (request, reply, payload) => {
  const {blockHash, blockNumber} = request
  const timestamp = (await request.api.query.timestamp.now()).toNumber()
  const statusCode = 200
  return {statusCode, blockHash, blockNumber, timestamp, result: payload}
})

app.addHook('onError', (_req, _reply, error, done) => {
  console.error(error)

  if (error.message.startsWith('Unable to decode storage')) {
    exit(1)
  }

  done()
})

app.register(autoLoad, {
  dir: path.join(__dirname, 'routes'),
})

app.listen({
  port: Number(process.env.PORT) || 3001,
  host: process.env.BIND || '0.0.0.0',
})
