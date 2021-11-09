import type {FastifyPluginAsync} from 'fastify'

const extrinsics: FastifyPluginAsync = async (app) => {
  app.get('/extrinsics', async ({api, rawApi, blockHash}) => {
    const signedBlock = await rawApi.rpc.chain.getBlock(blockHash)
    const allRecords = await api.query.system.events()

    return signedBlock.block.extrinsics.map((ex, index) => {
      const {
        hash,
        signer,
        method: {args, method, section},
      } = ex

      let success = false
      let errorInfo: string | null = null

      allRecords
        .filter(
          ({phase}) =>
            phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index)
        )
        .forEach(({event}) => {
          if (api.events.system.ExtrinsicSuccess.is(event)) {
            success = true
          } else if (api.events.system.ExtrinsicFailed.is(event)) {
            const [dispatchError] = event.data
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(dispatchError.asModule)

              errorInfo = `${decoded.section}.${decoded.name}`
            } else {
              errorInfo = dispatchError.toString()
            }
          }
        })

      return {
        signer,
        hash,
        method: {args, method, section},
        success,
        errorInfo,
      }
    })
  })
}

export default extrinsics
