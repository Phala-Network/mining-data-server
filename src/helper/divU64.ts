import Big from 'big.js'

const divU64 = (value: string): Big => {
  const big = Big(value)
  return big.div(Big(2).pow(64))
}

export default divU64
