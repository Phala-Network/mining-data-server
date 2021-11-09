import fastify from 'fastify'
import autoLoad from 'fastify-autoload'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
import humps from 'humps'
import querystring from 'querystring'
import {getApi} from './helper/polkadot'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify({
  querystringParser: (str) =>
    humps.camelizeKeys(querystring.parse(str)) as Record<string, string>,
  logger: {
    prettyPrint: true,
  },
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
  return {blockHash, blockNumber, result: payload}
})

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  forceESM: true,
})

app.listen(3001)
