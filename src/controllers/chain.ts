import {getApi} from '../helper/polkadot'

export const getHeader = async () => {
  const api = await getApi()
  const {hash, number} = await api.rpc.chain.getHeader()
  return {
    hash: hash.toHex(),
    number: number.toString(),
  }
}

export const getBlockHash = async (blockNumber) => {
  const api = await getApi()
  const hash = await api.rpc.chain.getBlockHash(blockNumber)
  return hash.toHex()
}

export const getTimestamp = async (hash) => {
  const api = await getApi(hash)
  const timestamp = await api.query.timestamp.now()
  return timestamp.toNumber()
}
