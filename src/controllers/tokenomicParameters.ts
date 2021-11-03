import divU64 from '../helper/divU64'
import {getApi} from '../helper/polkadot'

export const getTokenomicParameters = async (hash?: string) => {
  const api = await getApi(hash)
  const tokenomicParameters = await api.query.phalaMining.tokenomicParameters()
  const {phaRate, budgetPerBlock, vMax, re, k} = tokenomicParameters.unwrap()

  return {
    phaRate: divU64(phaRate.toString()),
    budgetPerBlock: divU64(budgetPerBlock.toString()),
    vMax: divU64(vMax.toString()),
    re: divU64(re.toString()),
    k: divU64(k.toString()),
  }
}
