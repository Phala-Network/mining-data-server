import {getApi} from '../helper/polkadot'

export const getAllWorkers = async (hash?: string) => {
  const api = await getApi(hash)
  const workerBindings = await api.query.phalaMining.workerBindings.entries()
  const workerBindingsEntry: Record<string, string> = workerBindings.reduce(
    (acc, [key, workerBinding]) => {
      acc[key.args[0].toString()] = workerBinding.toString()
      return acc
    },
    {}
  )
  const miners = await api.query.phalaMining.miners.entries()
  const minersEntry: Record<string, any> = miners.reduce(
    (acc, [key, miner]) => {
      const {ve, v, benchmark, stats, ...rest} = miner.toJSON() as any
      acc[key.args[0].toString()] = {
        ...rest,
        ve: BigInt(ve).toString(),
        v: BigInt(v).toString(),
        benchmark: {
          ...benchmark,
          iterations: BigInt(benchmark.iterations).toString(),
        },
        stats: {
          totalReward: BigInt(stats.totalReward).toString(),
        },
      }
      return acc
    },
    {}
  )
  const stakes = await api.query.phalaMining.stakes.entries()
  const stakesEntry: Record<string, string> = stakes.reduce(
    (acc, [key, stake]) => {
      acc[key.args[0].toString()] = stake.toString()
      return acc
    },
    {}
  )

  console.log(stakesEntry)

  const workers = await api.query.phalaRegistry.workers.entries()
  const workersRawData = workers.map(([key, worker]) => worker.toJSON())
  const workersData = workersRawData.map((worker: any) => {
    const binding = workerBindingsEntry[worker.pubkey as string] || null
    const miner = (binding && minersEntry[binding]) || null
    const stake = (binding && stakesEntry[binding]) || null

    return {
      ...worker,
      binding,
      miner,
      stake,
    }
  })

  return workersData
}
