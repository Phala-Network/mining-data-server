// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Null, Option, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, Weight } from '@polkadot/types/interfaces/runtime';
import type { AssetsRegistryAssetRegistryInfo, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletChildBountiesChildBounty, PalletCollatorSelectionCandidateInfo, PalletCollectiveVotes, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReleases, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletLotteryLotteryConfig, PalletMultisigMultisig, PalletPhalaWorldCareerType, PalletPhalaWorldFoodInfo, PalletPhalaWorldNftSaleInfo, PalletPhalaWorldPreorderInfo, PalletPhalaWorldRaceType, PalletPhalaWorldRarityType, PalletPhalaWorldShellParts, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletRmrkMarketListInfo, PalletRmrkMarketOffer, PalletSchedulerScheduledV3, PalletTipsOpenTip, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletUniquesCollectionDetails, PalletUniquesCollectionMetadata, PalletUniquesItemDetails, PalletUniquesItemMetadata, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PhalaMqMessage, PhalaMqMessageOrigin, PhalaPalletsComputeComputationPalletSessionInfo, PhalaPalletsComputePawnShopPalletFinanceAccount, PhalaPalletsComputePoolProxy, PhalaPalletsRegistryPalletWorkerInfo, PhalaPalletsStakePoolPalletPoolInfo, PhalaPalletsStakePoolPalletUserStakeInfo, PhalaTypesContractClusterInfo, PhalaTypesContractContractInfo, PhalaTypesMessagingTokenomicParameters, PhalaTypesVersionedWorkerEndpoints, PhantomType, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, RmrkTraitsBaseBaseInfo, RmrkTraitsCollectionCollectionInfo, RmrkTraitsNftNftChild, RmrkTraitsNftNftInfo, RmrkTraitsPartPartType, RmrkTraitsResourceResourceInfo, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreSr25519Public, SpRuntimeDigest, SpTrieStorageProof, SubbridgePalletsChainbridgePalletBridgeEvent, SubbridgePalletsChainbridgePalletProposalVotes, ThalaParachainRuntimeOpaqueSessionKeys, XcmV1MultiLocation, XcmVersionedMultiLocation } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    assets: {
      /**
       * The holdings of a specific account for a specific asset.
       **/
      account: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsAssetAccount>>, [u32, AccountId32]>;
      /**
       * Approved balance transfers. First balance is the amount approved for transfer. Second
       * is the amount of `T::Currency` reserved for storing this.
       * First key is the asset ID, second key is the owner and third key is the delegate.
       **/
      approvals: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsApproval>>, [u32, AccountId32, AccountId32]>;
      /**
       * Details of an asset.
       **/
      asset: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetsAssetDetails>>, [u32]>;
      /**
       * Metadata of an asset.
       **/
      metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetMetadata>, [u32]>;
    };
    assetsRegistry: {
      /**
       * Mapping fungible asset location to corresponding asset id
       **/
      idByLocations: AugmentedQuery<ApiType, (arg: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<u32>>, [XcmV1MultiLocation]>;
      /**
       * Mapping fungible asset resource id to corresponding asset id
       **/
      idByResourceId: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<u32>>, [U8aFixed]>;
      registryInfoByIds: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<AssetsRegistryAssetRegistryInfo>>, [u32]>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will always
       * be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]>;
    };
    chainBridge: {
      bridgeEvents: AugmentedQuery<ApiType, () => Observable<Vec<SubbridgePalletsChainbridgePalletBridgeEvent>>, []>;
      bridgeFee: AugmentedQuery<ApiType, (arg: u8 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u8]>;
      chainNonces: AugmentedQuery<ApiType, (arg: u8 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [u8]>;
      relayerCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      relayers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]>;
      relayerThreshold: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      votes: AugmentedQuery<ApiType, (arg1: u8 | AnyNumber | Uint8Array, arg2: ITuple<[u64, Call]> | [u64 | AnyNumber | Uint8Array, Call | IMethod | string | Uint8Array]) => Observable<Option<SubbridgePalletsChainbridgePalletProposalVotes>>, [u8, ITuple<[u64, Call]>]>;
    };
    childBounties: {
      /**
       * Child bounties that have been added.
       **/
      childBounties: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletChildBountiesChildBounty>>, [u32, u32]>;
      /**
       * Number of total child bounties.
       **/
      childBountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The description of each child-bounty.
       **/
      childBountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]>;
      /**
       * The cumulative child-bounty curator fee for each parent bounty.
       **/
      childrenCuratorFees: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]>;
      /**
       * Number of child bounties per parent bounty.
       * Map of parent bounty index to number of child bounties.
       **/
      parentChildBounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
    };
    collatorSelection: {
      /**
       * Fixed amount to deposit to become a collator.
       * 
       * When a collator calls `leave_intent` they immediately receive the deposit back.
       **/
      candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * The (community, limited) collation candidates.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorSelectionCandidateInfo>>, []>;
      /**
       * Desired number of candidates.
       * 
       * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
       **/
      desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The invulnerable, fixed collators.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * Last block authored by collator.
       **/
      lastAuthoredBlock: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [H256]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[H256, PalletDemocracyVoteThreshold]>>>, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletDemocracyPreimageStatus>>, [H256]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, H256, AccountId32]>>>, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<PalletDemocracyReleases>>, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]>;
    };
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]>;
    };
    lottery: {
      /**
       * The calls stored in this pallet to be used in an active lottery if configured
       * by `Config::ValidateCall`.
       **/
      callIndices: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u8, u8]>>>, []>;
      /**
       * The configuration for the current lottery.
       **/
      lottery: AugmentedQuery<ApiType, () => Observable<Option<PalletLotteryLotteryConfig>>, []>;
      lotteryIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Users who have purchased a ticket. (Lottery Index, Tickets Purchased)
       **/
      participants: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u32, Vec<ITuple<[u8, u8]>>]>>, [AccountId32]>;
      /**
       * Each ticket's owner.
       * 
       * May have residual storage from previous lotteries. Use `TicketsCount` to see which ones
       * are actually valid ticket mappings.
       **/
      tickets: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>, [u32]>;
      /**
       * Total number of tickets sold.
       **/
      ticketsCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[WrapperKeepOpaque<Call>, AccountId32, u128]>>>, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See [`Pallet::set_custom_validation_head_data`] for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2AbridgedHostConfiguration>>, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []>;
      /**
       * The relay chain block number associated with the last parachain block.
       **/
      lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
       * which will result the next block process with the new validation code. This concludes the upgrade process.
       * 
       * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The state proof for the last relay parent block.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2UpgradeRestriction>>, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2PersistedValidationData>>, []>;
    };
    phalaBasePool: {
      /**
       * Mapping from the next self-increased nft ids to collections
       **/
      nextNftId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * Mapping from the NftId to its internal locking status
       **/
      nftLocks: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Null>>, [ITuple<[u32, u32]>]>;
      /**
       * Mapping for pools that specify certain stakers to contribute stakes
       **/
      poolContributionWhitelists: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Vec<AccountId32>>>, [u64]>;
      /**
       * The number of total pools
       **/
      poolCount: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Mapping for pools that store their descriptions set by owner
       **/
      poolDescriptions: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u64]>;
      /**
       * Mapping from pids to pools (including stake pools and vaults)
       **/
      pools: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PhalaPalletsComputePoolProxy>>, [u64]>;
    };
    phalaComputation: {
      /**
       * The interval of halving (75% decay) in block number.
       **/
      computingHalvingInterval: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The block number when the computing starts. Used to calculate halving.
       **/
      computingStartBlock: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The cool down period (in sec)
       **/
      coolDownPeriod: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The expected heartbeat count at every block (default: 20)
       **/
      expectedHeartbeatCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The next id to assign to a computing session
       **/
      nextSessionId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Total online workers including WorkerIdle and WorkerUnresponsive workers.
       * 
       * Increased when a worker is turned to WorkerIdle; decreased when turned to CoolingDown.
       **/
      onlineWorkers: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The scheduled new tokenomic params to update at the end of this block.
       **/
      scheduledTokenomicUpdate: AugmentedQuery<ApiType, () => Observable<Option<PhalaTypesMessagingTokenomicParameters>>, []>;
      /**
       * The bound worker for a session account
       **/
      sessionBindings: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<U8aFixed>>, [AccountId32]>;
      /**
       * The session state.
       * 
       * The session state is created when a worker is bounded with a session, but it will be kept even
       * if the worker is force unbound. A re-bind of a worker will reset the computing state.
       **/
      sessions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PhalaPalletsComputeComputationPalletSessionInfo>>, [AccountId32]>;
      /**
       * The stakes of session accounts.
       * 
       * Only presents for computing and cooling down sessions.
       **/
      stakes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]>;
      /**
       * Tokenomic parameters used by Gatekeepers to compute the V promote.
       **/
      tokenomicParameters: AugmentedQuery<ApiType, () => Observable<Option<PhalaTypesMessagingTokenomicParameters>>, []>;
      /**
       * The bound worker account for a worker
       **/
      workerBindings: AugmentedQuery<ApiType, (arg: SpCoreSr25519Public | string | Uint8Array) => Observable<Option<AccountId32>>, [SpCoreSr25519Public]>;
    };
    phalaFatContracts: {
      clusterContracts: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<H256>>, [H256]>;
      /**
       * The contract cluster counter, it always equals to the latest cluster id.
       **/
      clusterCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      clusters: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PhalaTypesContractClusterInfo>>, [H256]>;
      clusterWorkers: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<SpCoreSr25519Public>>, [H256]>;
      contracts: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PhalaTypesContractContractInfo>>, [H256]>;
      /**
       * The next pink-system contract code to be applied from the next block
       **/
      nextPinkSystemCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * The pink-system contract code used to deploy new clusters
       **/
      pinkSystemCode: AugmentedQuery<ApiType, () => Observable<ITuple<[u16, Bytes]>>, []>;
      /**
       * The blake2_256 hash of the pink-system contract code.
       **/
      pinkSystemCodeHash: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []>;
    };
    phalaFatTokenomic: {
      /**
       * Map of contracts to their total stakes received
       **/
      contractTotalStakes: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u128>, [H256]>;
      /**
       * Stake of user to contract
       **/
      contractUserStakes: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<u128>, [AccountId32, H256]>;
      /**
       * Minimum allowed stake
       **/
      minStake: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    phalaMq: {
      /**
       * The next expected sequence of a ingress message coming from a certain sender (origin)
       **/
      offchainIngress: AugmentedQuery<ApiType, (arg: PhalaMqMessageOrigin | { Pallet: any } | { Contract: any } | { Worker: any } | { AccountId: any } | { MultiLocation: any } | { Gatekeeper: any } | { Cluster: any } | { Reserved: any } | string | Uint8Array) => Observable<Option<u64>>, [PhalaMqMessageOrigin]>;
      /**
       * Outbound messages at the current block.
       * 
       * It will be cleared at the beginning of every block.
       **/
      outboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PhalaMqMessage>>, []>;
      queuedOutboundMessage: AugmentedQuery<ApiType, () => Observable<Option<Vec<PhalaMqMessage>>>, []>;
    };
    phalaPawnshop: {
      /**
       * Mapping from the accounts and vote ids to the amounts of P-PHA used to approve or oppose to the vote
       **/
      accountVoteMap: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [AccountId32, u32]>;
      /**
       * Mapping for users to their asset status proxys
       **/
      stakerAccounts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PhalaPalletsComputePawnShopPalletFinanceAccount>>, [AccountId32]>;
      /**
       * Mapping from the vote ids and accounts to the amounts of P-PHA used to approve or oppose to the vote
       **/
      voteAccountMap: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>, [u32, AccountId32]>;
    };
    phalaRegistry: {
      /**
       * The number of blocks to run the benchmark
       **/
      benchmarkDuration: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      clusterKeys: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<U8aFixed>>, [H256]>;
      /**
       * Mapping from contract address to pubkey
       **/
      contractKeys: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<U8aFixed>>, [H256]>;
      /**
       * Mapping from worker pubkey to Phala Network identity
       **/
      endpoints: AugmentedQuery<ApiType, (arg: SpCoreSr25519Public | string | Uint8Array) => Observable<Option<PhalaTypesVersionedWorkerEndpoints>>, [SpCoreSr25519Public]>;
      /**
       * Gatekeeper pubkey list
       **/
      gatekeeper: AugmentedQuery<ApiType, () => Observable<Vec<SpCoreSr25519Public>>, []>;
      /**
       * Gatekeeper master pubkey
       **/
      gatekeeperMasterPubkey: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Current rotation info including rotation id
       * 
       * Only one rotation process is allowed at one time.
       * Since the rotation request is broadcasted to all gatekeepers, it should be finished only if there is one functional
       * gatekeeper.
       **/
      masterKeyRotationLock: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * The effective height of pRuntime binary
       **/
      pRuntimeAddedAt: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>, [Bytes]>;
      /**
       * Allow list of pRuntime binary digest
       * 
       * Only pRuntime within the list can register.
       **/
      pRuntimeAllowList: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []>;
      /**
       * Allow list of relaychain genesis
       * 
       * Only genesis within the list can do register.
       **/
      relaychainGenesisBlockHashAllowList: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * The rotation counter starting from 1, it always equals to the latest rotation id.
       * The totation id 0 is reserved for the first master key before we introduce the rotation.
       **/
      rotationCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Pubkey for secret topics.
       **/
      topicKey: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<Bytes>>, [Bytes]>;
      /**
       * Mapping from worker pubkey to WorkerInfo
       **/
      workers: AugmentedQuery<ApiType, (arg: SpCoreSr25519Public | string | Uint8Array) => Observable<Option<PhalaPalletsRegistryPalletWorkerInfo>>, [SpCoreSr25519Public]>;
    };
    phalaStakePool: {
      /**
       * Mapping for pools that specify certain stakers to contribute stakes
       **/
      poolContributionWhitelists: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Vec<AccountId32>>>, [u64]>;
      /**
       * The number of total pools
       **/
      poolCount: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Mapping for pools that store their descriptions set by owner
       **/
      poolDescriptions: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u64]>;
      /**
       * Mapping from (pid, staker) to UserStakeInfo
       **/
      poolStakers: AugmentedQuery<ApiType, (arg: ITuple<[u64, AccountId32]> | [u64 | AnyNumber | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<Option<PhalaPalletsStakePoolPalletUserStakeInfo>>, [ITuple<[u64, AccountId32]>]>;
      /**
       * Mapping staker to it's the balance locked in all pools
       **/
      stakeLedger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]>;
      /**
       * Mapping from pool id to PoolInfo
       **/
      stakePools: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PhalaPalletsStakePoolPalletPoolInfo>>, [u64]>;
      /**
       * (Deprecated)
       **/
      subAccountAssignments: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u64>>, [AccountId32]>;
      /**
       * Helper storage to track the preimage of the mining sub-accounts. Not used in consensus.
       **/
      subAccountPreimages: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u64, SpCoreSr25519Public]>>>, [AccountId32]>;
      /**
       * Mapping from the block timestamp to pools that has withdrawal requests queued in that block
       **/
      withdrawalQueuedPools: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Vec<u64>>>, [u64]>;
      /**
       * Queue that contains all block's timestamp, in that block contains the waiting withdraw reqeust.
       * This queue has a max size of (T::GracePeriod * 8) bytes
       **/
      withdrawalTimestamps: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []>;
      /**
       * Mapping from workers to the pool they belong to
       * 
       * The map entry lasts from `add_worker()` to `remove_worker()` or force unbinding.
       **/
      workerAssignments: AugmentedQuery<ApiType, (arg: SpCoreSr25519Public | string | Uint8Array) => Observable<Option<u64>>, [SpCoreSr25519Public]>;
    };
    phalaStakePoolv2: {
      stakepoolIterateStartPos: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * (Deprecated)
       **/
      subAccountAssignments: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u64>>, [AccountId32]>;
      /**
       * Helper storage to track the preimage of the computing sub-accounts. Not used in consensus.
       **/
      subAccountPreimages: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u64, SpCoreSr25519Public]>>>, [AccountId32]>;
      /**
       * Mapping from workers to the pool they belong to
       * 
       * The map entry lasts from `add_worker()` to `remove_worker()` or force unbinding.
       **/
      workerAssignments: AugmentedQuery<ApiType, (arg: SpCoreSr25519Public | string | Uint8Array) => Observable<Option<u64>>, [SpCoreSr25519Public]>;
      /**
       * Switch to enable the stake pool pallet (disabled by default)
       **/
      workingEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    phalaVault: {
      /**
       * Mapping from the vault pid to its owner authority locking status
       **/
      vaultLocks: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u64]>;
    };
    phragmenElection: {
      /**
       * The present candidate list. A current member or runner-up can never enter this vector
       * and is always implicitly assumed to be a candidate.
       * 
       * Second element is the deposit.
       * 
       * Invariant: Always sorted based on account id.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, u128]>>>, []>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current elected members.
       * 
       * Invariant: Always sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []>;
      /**
       * The current reserved runners-up.
       * 
       * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
       * last (i.e. _best_) runner-up will be replaced.
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []>;
      /**
       * Votes and locked stake of a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
       **/
      voting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletElectionsPhragmenVoter>, [AccountId32]>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedMultiLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedMultiLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, u64, u32]>>>, [u32, XcmVersionedMultiLocation]>;
    };
    preimage: {
      /**
       * The preimages stored by this pallet.
       **/
      preimageFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]>;
    };
    pwIncubation: {
      /**
       * A bool value to determine if accounts can start incubation of Origin of Shells.
       **/
      canStartIncubation: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Info on Origin of Shells that the Owner has fed.
       **/
      foodByOwners: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletPhalaWorldFoodInfo>>, [AccountId32]>;
      /**
       * A bool value to determine if an Origin of Shell has started the incubation process.
       **/
      hasOriginOfShellStartedIncubation: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<bool>, [ITuple<[u32, u32]>]>;
      /**
       * Official hatch time for all Origin of Shells.
       **/
      officialHatchTime: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Total food fed to an Origin of Shell per Era.
       **/
      originOfShellFoodStats: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<u32>, [u64, ITuple<[u32, u32]>]>;
      /**
       * Storage of an account's selected parts during the incubation process.
       **/
      originOfShellsChosenParts: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<PalletPhalaWorldShellParts>>, [ITuple<[u32, u32]>]>;
      /**
       * Collection ID of the Shell NFT.
       **/
      shellCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Collection ID of the Shell Parts NFTs.
       **/
      shellPartsCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
    };
    pwNftSale: {
      /**
       * Spirits can be claimed
       **/
      canClaimSpirits: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Origin of Shells can be preordered
       **/
      canPreorderOriginOfShells: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Origin of Shells can be purchased by whitelist
       **/
      canPurchasePrimeOriginOfShells: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Rare Origin of Shells can be purchased
       **/
      canPurchaseRareOriginOfShells: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Career StorageMap count
       **/
      careerTypeCount: AugmentedQuery<ApiType, (arg: PalletPhalaWorldCareerType | 'HackerWizard' | 'HardwareDruid' | 'RoboWarrior' | 'TradeNegotiator' | 'Web3Monk' | number | Uint8Array) => Observable<u32>, [PalletPhalaWorldCareerType]>;
      /**
       * The current Era from the initial ZeroDay BlockNumber
       **/
      era: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Origin of Shells Inventory has been initialized
       **/
      isOriginOfShellsInventorySet: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Last Day of Sale any Origin of Shell can be purchased
       **/
      lastDayOfSale: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Next available NFT ID
       **/
      nextNftId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * Next available Resource ID
       **/
      nextResourceId: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32, u32]>;
      /**
       * Origin of Shell Collection ID
       **/
      originOfShellCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Origin of Shells inventory
       **/
      originOfShellsInventory: AugmentedQuery<ApiType, (arg1: PalletPhalaWorldRarityType | 'Prime' | 'Magic' | 'Legendary' | number | Uint8Array, arg2: PalletPhalaWorldRaceType | 'Cyborg' | 'AISpectre' | 'XGene' | 'Pandroid' | number | Uint8Array) => Observable<Option<PalletPhalaWorldNftSaleInfo>>, [PalletPhalaWorldRarityType, PalletPhalaWorldRaceType]>;
      /**
       * Origin of Shells Metadata
       **/
      originOfShellsMetadata: AugmentedQuery<ApiType, (arg: PalletPhalaWorldRaceType | 'Cyborg' | 'AISpectre' | 'XGene' | 'Pandroid' | number | Uint8Array) => Observable<Option<Bytes>>, [PalletPhalaWorldRaceType]>;
      /**
       * Overlord Admin account of PhalaWorld
       **/
      overlord: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Owners that have made a preorder during intial preorder phase
       **/
      ownerHasPreorder: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]>;
      /**
       * Payee Multi-Sig account for payables in PhalaWorld
       **/
      payee: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Preorder index that is the key to the Preorders StorageMap
       **/
      preorderIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Preorder info map for user preorders
       **/
      preorders: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPhalaWorldPreorderInfo>>, [u32]>;
      /**
       * Spirit Collection ID
       **/
      spiritCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Spirits Metadata
       **/
      spiritsMetadata: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * Phala World Zero Day `BlockNumber` this will be used to determine Eras
       **/
      zeroDay: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    rmrkCore: {
      /**
       * Stores nft children info
       **/
      children: AugmentedQuery<ApiType, (arg1: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], arg2: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Null>>, [ITuple<[u32, u32]>, ITuple<[u32, u32]>]>;
      collectionIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Stores collections info
       **/
      collections: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<RmrkTraitsCollectionCollectionInfo>>, [u32]>;
      /**
       * This storage is not used by the chain.
       * It is need only for PolkadotJS types generation.
       * 
       * The stored types are use in the RPC interface only,
       * PolkadotJS won't generate TS types for them without this storage.
       **/
      dummyStorage: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[RmrkTraitsNftNftChild, PhantomType]>>>, []>;
      /**
       * Stores the existence of a base for a particular NFT
       * This is populated on `add_composable_resource`, and is
       * used in the rmrk-equip pallet when equipping a resource.
       **/
      equippableBases: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32, u32, u32]>;
      /**
       * Stores the existence of a Base + Slot for a particular
       * NFT's particular resource.  This is populated on
       * `add_slot_resource`, and is used in the rmrk-equip
       * pallet when equipping a resource.
       **/
      equippableSlots: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array, arg4: u32 | AnyNumber | Uint8Array, arg5: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32, u32, u32, u32, u32]>;
      /**
       * Lock for NFTs
       **/
      lock: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<bool>, [ITuple<[u32, u32]>]>;
      /**
       * Stores nft info
       **/
      nfts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<RmrkTraitsNftNftInfo>>, [u32, u32]>;
      /**
       * Stores priority info
       **/
      priorities: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32, u32, u32]>;
      /**
       * Arbitrary properties / metadata of an asset.
       **/
      properties: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: Option<u32> | null | Uint8Array | u32 | AnyNumber, arg3: Bytes | string | Uint8Array) => Observable<Option<Bytes>>, [u32, Option<u32>, Bytes]>;
      /**
       * Stores resource info
       **/
      resources: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<RmrkTraitsResourceResourceInfo>>, [u32, u32, u32]>;
    };
    rmrkEquip: {
      /**
       * Stores Bases info (issuer, base_type, symbol, parts)
       * TODO https://github.com/rmrk-team/rmrk-substrate/issues/98
       * Delete Parts from Bases info, as it's kept in Parts storage
       **/
      bases: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<RmrkTraitsBaseBaseInfo>>, [u32]>;
      /**
       * Stores Equippings info ((equipper, base, slot), equipped_resource)
       **/
      equippings: AugmentedQuery<ApiType, (arg1: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [ITuple<[u32, u32]>, u32, u32]>;
      /**
       * Stores the incrementing NextBaseId
       **/
      nextBaseId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Stores the incrementing NextPartId
       **/
      nextPartId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * Stores Parts (either FixedPart or SlotPart)
       * - SlotPart: id, equippable (list), src, z
       * - FixedPart: id, src, z
       **/
      parts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<RmrkTraitsPartPartType>>, [u32, u32]>;
      /**
       * Stores Theme info ((base, theme name, property key), property value)
       **/
      themes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array, arg3: Bytes | string | Uint8Array) => Observable<Option<Bytes>>, [u32, Bytes, Bytes]>;
    };
    rmrkMarket: {
      /**
       * Stores listed NFT price info
       **/
      listedNfts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletRmrkMarketListInfo>>, [u32, u32]>;
      /**
       * Stores offer on a NFT info
       **/
      offers: AugmentedQuery<ApiType, (arg1: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletRmrkMarketOffer>>, [ITuple<[u32, u32]>, AccountId32]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduledV3>>>, [u32]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [Bytes]>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ThalaParachainRuntimeOpaqueSessionKeys>>, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, ThalaParachainRuntimeOpaqueSessionKeys]>>>, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]>;
    };
    technicalMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    tips: {
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletTipsOpenTip>>, [H256]>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]>;
    };
    uniques: {
      /**
       * The items held by any given account; set out this way so that items owned by a single
       * account can be enumerated.
       **/
      account: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [AccountId32, u32, u32]>;
      /**
       * The items in existence and their ownership details.
       **/
      asset: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUniquesItemDetails>>, [u32, u32]>;
      /**
       * Attributes of a collection.
       **/
      attribute: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: Option<u32> | null | Uint8Array | u32 | AnyNumber, arg3: Bytes | string | Uint8Array) => Observable<Option<ITuple<[Bytes, u128]>>>, [u32, Option<u32>, Bytes]>;
      /**
       * Details of a collection.
       **/
      class: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUniquesCollectionDetails>>, [u32]>;
      /**
       * The collections owned by any given account; set out this way so that collections owned by
       * a single account can be enumerated.
       **/
      classAccount: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [AccountId32, u32]>;
      /**
       * Metadata of a collection.
       **/
      classMetadataOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUniquesCollectionMetadata>>, [u32]>;
      /**
       * Keeps track of the number of items a collection might have.
       **/
      collectionMaxSupply: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]>;
      /**
       * Metadata of an item.
       **/
      instanceMetadataOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUniquesItemMetadata>>, [u32, u32]>;
      /**
       * Price of an asset instance.
       **/
      itemPriceOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, Option<AccountId32>]>>>, [u32, u32]>;
      /**
       * The collection, if any, of which an account is willing to take ownership.
       **/
      ownershipAcceptance: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u32>>, [AccountId32]>;
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingReleases>, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<PalletVestingVestingInfo>>>, [AccountId32]>;
    };
    xcmBridge: {
    };
    xcmpQueue: {
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []>;
      /**
       * The messages that exceeded max individual message weight budget.
       * 
       * These message stay in this storage map until they are manually dispatched via
       * `service_overweight`.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [u64]>;
      /**
       * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
       * available free overweight index.
       **/
      overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
    };
    xTransfer: {
    };
  } // AugmentedQueries
} // declare module
