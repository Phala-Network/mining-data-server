// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Permill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: Weight;
    readonly operational: Weight;
    readonly mandatory: Weight;
  }

  /** @name SpRuntimeDigest (12) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (14) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (17) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (19) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (20) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (21) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (22) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (23) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (24) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (25) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (26) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (27) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletUtilityEvent (28) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletMultisigEvent (31) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (32) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletProxyEvent (33) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name KhalaParachainRuntimeProxyType (34) */
  interface KhalaParachainRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isCollator: boolean;
    readonly isStakePoolManager: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Governance' | 'Collator' | 'StakePoolManager';
  }

  /** @name PalletVestingEvent (36) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletSchedulerEvent (37) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<Bytes>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallLookupFailed: boolean;
    readonly asCallLookupFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<Bytes>;
      readonly error: FrameSupportScheduleLookupError;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallLookupFailed';
  }

  /** @name FrameSupportScheduleLookupError (40) */
  interface FrameSupportScheduleLookupError extends Enum {
    readonly isUnknown: boolean;
    readonly isBadFormat: boolean;
    readonly type: 'Unknown' | 'BadFormat';
  }

  /** @name PalletPreimageEvent (41) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name CumulusPalletParachainSystemEvent (42) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed';
  }

  /** @name CumulusPalletXcmpQueueEvent (43) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<H256>;
      readonly weight: Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<H256>;
      readonly error: XcmV2TraitsError;
      readonly weight: Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'UpwardMessageSent' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV2TraitsError (45) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name CumulusPalletXcmEvent (47) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name XcmV2TraitsOutcome (49) */
  interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name CumulusPalletDmpQueueEvent (50) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV2TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: Weight;
      readonly requiredWeight: Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: Weight;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name PalletXcmEvent (51) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV2TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV2Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, Weight, Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV1MultiLocation, u64, XcmV2TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail';
  }

  /** @name XcmV1MultiLocation (52) */
  interface XcmV1MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV1MultilocationJunctions;
  }

  /** @name XcmV1MultilocationJunctions (53) */
  interface XcmV1MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV1Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV1Junction, XcmV1Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV1Junction (54) */
  interface XcmV1Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV0JunctionNetworkId (56) */
  interface XcmV0JunctionNetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV0JunctionBodyId (61) */
  interface XcmV0JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial';
  }

  /** @name XcmV0JunctionBodyPart (62) */
  interface XcmV0JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2Xcm (63) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (65) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV1MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV1MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV1MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV1MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly ticket: XcmV1MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1MultiassetMultiAssets (66) */
  interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {}

  /** @name XcmV1MultiAsset (68) */
  interface XcmV1MultiAsset extends Struct {
    readonly id: XcmV1MultiassetAssetId;
    readonly fun: XcmV1MultiassetFungibility;
  }

  /** @name XcmV1MultiassetAssetId (69) */
  interface XcmV1MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV1MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV1MultiassetFungibility (70) */
  interface XcmV1MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV1MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV1MultiassetAssetInstance (71) */
  interface XcmV1MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (73) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV0OriginKind (76) */
  interface XcmV0OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (77) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV1MultiassetMultiAssetFilter (78) */
  interface XcmV1MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV1MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV1MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV1MultiassetWildMultiAsset (79) */
  interface XcmV1MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV1MultiassetAssetId;
      readonly fun: XcmV1MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV1MultiassetWildFungibility (80) */
  interface XcmV1MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (81) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (83) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV0: boolean;
    readonly asV0: Vec<XcmV0MultiAsset>;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiassetMultiAssets;
    readonly type: 'V0' | 'V1';
  }

  /** @name XcmV0MultiAsset (85) */
  interface XcmV0MultiAsset extends Enum {
    readonly isNone: boolean;
    readonly isAll: boolean;
    readonly isAllFungible: boolean;
    readonly isAllNonFungible: boolean;
    readonly isAllAbstractFungible: boolean;
    readonly asAllAbstractFungible: {
      readonly id: Bytes;
    } & Struct;
    readonly isAllAbstractNonFungible: boolean;
    readonly asAllAbstractNonFungible: {
      readonly class: Bytes;
    } & Struct;
    readonly isAllConcreteFungible: boolean;
    readonly asAllConcreteFungible: {
      readonly id: XcmV0MultiLocation;
    } & Struct;
    readonly isAllConcreteNonFungible: boolean;
    readonly asAllConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
    } & Struct;
    readonly isAbstractFungible: boolean;
    readonly asAbstractFungible: {
      readonly id: Bytes;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAbstractNonFungible: boolean;
    readonly asAbstractNonFungible: {
      readonly class: Bytes;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly isConcreteFungible: boolean;
    readonly asConcreteFungible: {
      readonly id: XcmV0MultiLocation;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isConcreteNonFungible: boolean;
    readonly asConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly type: 'None' | 'All' | 'AllFungible' | 'AllNonFungible' | 'AllAbstractFungible' | 'AllAbstractNonFungible' | 'AllConcreteFungible' | 'AllConcreteNonFungible' | 'AbstractFungible' | 'AbstractNonFungible' | 'ConcreteFungible' | 'ConcreteNonFungible';
  }

  /** @name XcmV0MultiLocation (86) */
  interface XcmV0MultiLocation extends Enum {
    readonly isNull: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV0Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV0Junction, XcmV0Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly type: 'Null' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV0Junction (87) */
  interface XcmV0Junction extends Enum {
    readonly isParent: boolean;
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parent' | 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmVersionedMultiLocation (88) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiLocation;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiLocation;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletBalancesEvent (89) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (90) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (91) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletCollatorSelectionEvent (92) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved';
  }

  /** @name PalletSessionEvent (94) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletIdentityEvent (95) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletDemocracyEvent (96) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
      readonly depositors: Vec<AccountId32>;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly refIndex: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isPreimageNoted: boolean;
    readonly asPreimageNoted: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageUsed: boolean;
    readonly asPreimageUsed: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageInvalid: boolean;
    readonly asPreimageInvalid: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageMissing: boolean;
    readonly asPreimageMissing: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageReaped: boolean;
    readonly asPreimageReaped: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly reaper: AccountId32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Executed' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'PreimageNoted' | 'PreimageUsed' | 'PreimageInvalid' | 'PreimageMissing' | 'PreimageReaped' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled';
  }

  /** @name PalletDemocracyVoteThreshold (97) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (98) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletCollectiveEvent (100) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTreasuryEvent (102) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved';
  }

  /** @name PalletBountiesEvent (103) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletLotteryEvent (104) */
  interface PalletLotteryEvent extends Enum {
    readonly isLotteryStarted: boolean;
    readonly isCallsUpdated: boolean;
    readonly isWinner: boolean;
    readonly asWinner: {
      readonly winner: AccountId32;
      readonly lotteryBalance: u128;
    } & Struct;
    readonly isTicketBought: boolean;
    readonly asTicketBought: {
      readonly who: AccountId32;
      readonly callIndex: ITuple<[u8, u8]>;
    } & Struct;
    readonly type: 'LotteryStarted' | 'CallsUpdated' | 'Winner' | 'TicketBought';
  }

  /** @name PalletMembershipEvent (107) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletElectionsPhragmenEvent (108) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletTipsEvent (111) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletChildBountiesEvent (112) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name SubbridgePalletsChainbridgePalletEvent (113) */
  interface SubbridgePalletsChainbridgePalletEvent extends Enum {
    readonly isRelayerThresholdChanged: boolean;
    readonly asRelayerThresholdChanged: u32;
    readonly isChainWhitelisted: boolean;
    readonly asChainWhitelisted: u8;
    readonly isRelayerAdded: boolean;
    readonly asRelayerAdded: AccountId32;
    readonly isRelayerRemoved: boolean;
    readonly asRelayerRemoved: AccountId32;
    readonly isFungibleTransfer: boolean;
    readonly asFungibleTransfer: ITuple<[u8, u64, U8aFixed, U256, Bytes]>;
    readonly isNonFungibleTransfer: boolean;
    readonly asNonFungibleTransfer: ITuple<[u8, u64, U8aFixed, Bytes, Bytes, Bytes]>;
    readonly isGenericTransfer: boolean;
    readonly asGenericTransfer: ITuple<[u8, u64, U8aFixed, Bytes]>;
    readonly isVoteFor: boolean;
    readonly asVoteFor: ITuple<[u8, u64, AccountId32]>;
    readonly isVoteAgainst: boolean;
    readonly asVoteAgainst: ITuple<[u8, u64, AccountId32]>;
    readonly isProposalApproved: boolean;
    readonly asProposalApproved: ITuple<[u8, u64]>;
    readonly isProposalRejected: boolean;
    readonly asProposalRejected: ITuple<[u8, u64]>;
    readonly isProposalSucceeded: boolean;
    readonly asProposalSucceeded: ITuple<[u8, u64]>;
    readonly isProposalFailed: boolean;
    readonly asProposalFailed: ITuple<[u8, u64]>;
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: {
      readonly destId: u8;
      readonly fee: u128;
    } & Struct;
    readonly type: 'RelayerThresholdChanged' | 'ChainWhitelisted' | 'RelayerAdded' | 'RelayerRemoved' | 'FungibleTransfer' | 'NonFungibleTransfer' | 'GenericTransfer' | 'VoteFor' | 'VoteAgainst' | 'ProposalApproved' | 'ProposalRejected' | 'ProposalSucceeded' | 'ProposalFailed' | 'FeeUpdated';
  }

  /** @name SubbridgePalletsXcmbridgePalletEvent (116) */
  interface SubbridgePalletsXcmbridgePalletEvent extends Enum {
    readonly isAssetTransfered: boolean;
    readonly asAssetTransfered: {
      readonly asset: XcmV1MultiAsset;
      readonly origin: XcmV1MultiLocation;
      readonly dest: XcmV1MultiLocation;
    } & Struct;
    readonly type: 'AssetTransfered';
  }

  /** @name SubbridgePalletsXtransferPalletEvent (117) */
  interface SubbridgePalletsXtransferPalletEvent extends Enum {
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly what: XcmV1MultiAsset;
      readonly who: XcmV1MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly what: XcmV1MultiAsset;
      readonly who: XcmV1MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly isForwarded: boolean;
    readonly asForwarded: {
      readonly what: XcmV1MultiAsset;
      readonly who: XcmV1MultiLocation;
      readonly memo: Bytes;
    } & Struct;
    readonly type: 'Withdrawn' | 'Deposited' | 'Forwarded';
  }

  /** @name PhalaPalletsRegistryPalletEvent (118) */
  interface PhalaPalletsRegistryPalletEvent extends Enum {
    readonly isGatekeeperAdded: boolean;
    readonly asGatekeeperAdded: {
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isGatekeeperRemoved: boolean;
    readonly asGatekeeperRemoved: {
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isWorkerAdded: boolean;
    readonly asWorkerAdded: {
      readonly pubkey: SpCoreSr25519Public;
      readonly confidenceLevel: u8;
    } & Struct;
    readonly isWorkerUpdated: boolean;
    readonly asWorkerUpdated: {
      readonly pubkey: SpCoreSr25519Public;
      readonly confidenceLevel: u8;
    } & Struct;
    readonly isMasterKeyRotated: boolean;
    readonly asMasterKeyRotated: {
      readonly rotationId: u64;
      readonly masterPubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isMasterKeyRotationFailed: boolean;
    readonly asMasterKeyRotationFailed: {
      readonly rotationLock: Option<u64>;
      readonly gatekeeperRotationId: u64;
    } & Struct;
    readonly isInitialScoreSet: boolean;
    readonly asInitialScoreSet: {
      readonly pubkey: SpCoreSr25519Public;
      readonly initScore: u32;
    } & Struct;
    readonly isPRuntimeManagement: boolean;
    readonly asPRuntimeManagement: PhalaTypesMessagingPRuntimeManagementEvent;
    readonly type: 'GatekeeperAdded' | 'GatekeeperRemoved' | 'WorkerAdded' | 'WorkerUpdated' | 'MasterKeyRotated' | 'MasterKeyRotationFailed' | 'InitialScoreSet' | 'PRuntimeManagement';
  }

  /** @name SpCoreSr25519Public (119) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PhalaTypesMessagingPRuntimeManagementEvent (121) */
  interface PhalaTypesMessagingPRuntimeManagementEvent extends Enum {
    readonly isRetirePRuntime: boolean;
    readonly asRetirePRuntime: PhalaTypesMessagingRetireCondition;
    readonly isSetConsensusVersion: boolean;
    readonly asSetConsensusVersion: u32;
    readonly type: 'RetirePRuntime' | 'SetConsensusVersion';
  }

  /** @name PhalaTypesMessagingRetireCondition (122) */
  interface PhalaTypesMessagingRetireCondition extends Enum {
    readonly isVersionLessThan: boolean;
    readonly asVersionLessThan: ITuple<[u32, u32, u32]>;
    readonly isVersionIs: boolean;
    readonly asVersionIs: ITuple<[u32, u32, u32]>;
    readonly type: 'VersionLessThan' | 'VersionIs';
  }

  /** @name PhalaPalletsMiningPalletEvent (123) */
  interface PhalaPalletsMiningPalletEvent extends Enum {
    readonly isCoolDownExpirationChanged: boolean;
    readonly asCoolDownExpirationChanged: {
      readonly period: u64;
    } & Struct;
    readonly isMinerStarted: boolean;
    readonly asMinerStarted: {
      readonly miner: AccountId32;
      readonly initV: u128;
      readonly initP: u32;
    } & Struct;
    readonly isMinerStopped: boolean;
    readonly asMinerStopped: {
      readonly miner: AccountId32;
    } & Struct;
    readonly isMinerReclaimed: boolean;
    readonly asMinerReclaimed: {
      readonly miner: AccountId32;
      readonly originalStake: u128;
      readonly slashed: u128;
    } & Struct;
    readonly isMinerBound: boolean;
    readonly asMinerBound: {
      readonly miner: AccountId32;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isMinerUnbound: boolean;
    readonly asMinerUnbound: {
      readonly miner: AccountId32;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isMinerEnterUnresponsive: boolean;
    readonly asMinerEnterUnresponsive: {
      readonly miner: AccountId32;
    } & Struct;
    readonly isMinerExitUnresponsive: boolean;
    readonly asMinerExitUnresponsive: {
      readonly miner: AccountId32;
    } & Struct;
    readonly isMinerSettled: boolean;
    readonly asMinerSettled: {
      readonly miner: AccountId32;
      readonly vBits: u128;
      readonly payoutBits: u128;
    } & Struct;
    readonly isInternalErrorMinerSettleFailed: boolean;
    readonly asInternalErrorMinerSettleFailed: {
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSubsidyBudgetHalved: boolean;
    readonly isInternalErrorWrongHalvingConfigured: boolean;
    readonly isTokenomicParametersChanged: boolean;
    readonly isMinerSettlementDropped: boolean;
    readonly asMinerSettlementDropped: {
      readonly miner: AccountId32;
      readonly v: u128;
      readonly payout: u128;
    } & Struct;
    readonly isBenchmarkUpdated: boolean;
    readonly asBenchmarkUpdated: {
      readonly miner: AccountId32;
      readonly pInstant: u32;
    } & Struct;
    readonly type: 'CoolDownExpirationChanged' | 'MinerStarted' | 'MinerStopped' | 'MinerReclaimed' | 'MinerBound' | 'MinerUnbound' | 'MinerEnterUnresponsive' | 'MinerExitUnresponsive' | 'MinerSettled' | 'InternalErrorMinerSettleFailed' | 'SubsidyBudgetHalved' | 'InternalErrorWrongHalvingConfigured' | 'TokenomicParametersChanged' | 'MinerSettlementDropped' | 'BenchmarkUpdated';
  }

  /** @name PhalaPalletsStakepoolPalletEvent (124) */
  interface PhalaPalletsStakepoolPalletEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly owner: AccountId32;
      readonly pid: u64;
    } & Struct;
    readonly isPoolCommissionSet: boolean;
    readonly asPoolCommissionSet: {
      readonly pid: u64;
      readonly commission: u32;
    } & Struct;
    readonly isPoolCapacitySet: boolean;
    readonly asPoolCapacitySet: {
      readonly pid: u64;
      readonly cap: u128;
    } & Struct;
    readonly isPoolWorkerAdded: boolean;
    readonly asPoolWorkerAdded: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly miner: AccountId32;
    } & Struct;
    readonly isContribution: boolean;
    readonly asContribution: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
      readonly shares: u128;
    } & Struct;
    readonly isWithdrawal: boolean;
    readonly asWithdrawal: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
      readonly shares: u128;
    } & Struct;
    readonly isRewardsWithdrawn: boolean;
    readonly asRewardsWithdrawn: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isOwnerRewardsWithdrawn: boolean;
    readonly asOwnerRewardsWithdrawn: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStakerRewardsWithdrawn: boolean;
    readonly asStakerRewardsWithdrawn: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isSlashSettled: boolean;
    readonly asSlashSettled: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedNotInPool: boolean;
    readonly asRewardDismissedNotInPool: {
      readonly worker: SpCoreSr25519Public;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedNoShare: boolean;
    readonly asRewardDismissedNoShare: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isRewardDismissedDust: boolean;
    readonly asRewardDismissedDust: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isDustRemoved: boolean;
    readonly asDustRemoved: {
      readonly user: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isPoolWorkerRemoved: boolean;
    readonly asPoolWorkerRemoved: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isWithdrawalQueued: boolean;
    readonly asWithdrawalQueued: {
      readonly pid: u64;
      readonly user: AccountId32;
      readonly shares: u128;
    } & Struct;
    readonly isPoolWhitelistCreated: boolean;
    readonly asPoolWhitelistCreated: {
      readonly pid: u64;
    } & Struct;
    readonly isPoolWhitelistDeleted: boolean;
    readonly asPoolWhitelistDeleted: {
      readonly pid: u64;
    } & Struct;
    readonly isPoolWhitelistStakerAdded: boolean;
    readonly asPoolWhitelistStakerAdded: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isPoolWhitelistStakerRemoved: boolean;
    readonly asPoolWhitelistStakerRemoved: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isWorkerReclaimed: boolean;
    readonly asWorkerReclaimed: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly originalStake: u128;
    } & Struct;
    readonly isRewardReceived: boolean;
    readonly asRewardReceived: {
      readonly pid: u64;
      readonly toOwner: u128;
      readonly toStakers: u128;
    } & Struct;
    readonly isMiningStarted: boolean;
    readonly asMiningStarted: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly amount: u128;
    } & Struct;
    readonly type: 'PoolCreated' | 'PoolCommissionSet' | 'PoolCapacitySet' | 'PoolWorkerAdded' | 'Contribution' | 'Withdrawal' | 'RewardsWithdrawn' | 'OwnerRewardsWithdrawn' | 'StakerRewardsWithdrawn' | 'PoolSlashed' | 'SlashSettled' | 'RewardDismissedNotInPool' | 'RewardDismissedNoShare' | 'RewardDismissedDust' | 'DustRemoved' | 'PoolWorkerRemoved' | 'WithdrawalQueued' | 'PoolWhitelistCreated' | 'PoolWhitelistDeleted' | 'PoolWhitelistStakerAdded' | 'PoolWhitelistStakerRemoved' | 'WorkerReclaimed' | 'RewardReceived' | 'MiningStarted';
  }

  /** @name PalletAssetsEvent (125) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly totalSupply: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged';
  }

  /** @name AssetsRegistryEvent (126) */
  interface AssetsRegistryEvent extends Enum {
    readonly isAssetRegistered: boolean;
    readonly asAssetRegistered: {
      readonly assetId: u32;
      readonly location: XcmV1MultiLocation;
    } & Struct;
    readonly isAssetUnregistered: boolean;
    readonly asAssetUnregistered: {
      readonly assetId: u32;
      readonly location: XcmV1MultiLocation;
    } & Struct;
    readonly isChainbridgeEnabled: boolean;
    readonly asChainbridgeEnabled: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isChainbridgeDisabled: boolean;
    readonly asChainbridgeDisabled: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
    } & Struct;
    readonly isForceMinted: boolean;
    readonly asForceMinted: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceBurnt: boolean;
    readonly asForceBurnt: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'AssetRegistered' | 'AssetUnregistered' | 'ChainbridgeEnabled' | 'ChainbridgeDisabled' | 'ForceMinted' | 'ForceBurnt';
  }

  /** @name PalletUniquesEvent (127) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PalletRmrkCoreEvent (134) */
  interface PalletRmrkCoreEvent extends Enum {
    readonly isCollectionCreated: boolean;
    readonly asCollectionCreated: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isNftMinted: boolean;
    readonly asNftMinted: {
      readonly owner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isNftBurned: boolean;
    readonly asNftBurned: {
      readonly owner: AccountId32;
      readonly nftId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isCollectionDestroyed: boolean;
    readonly asCollectionDestroyed: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isNftSent: boolean;
    readonly asNftSent: {
      readonly sender: AccountId32;
      readonly recipient: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly approvalRequired: bool;
    } & Struct;
    readonly isNftAccepted: boolean;
    readonly asNftAccepted: {
      readonly sender: AccountId32;
      readonly recipient: RmrkTraitsNftAccountIdOrCollectionNftTuple;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isNftRejected: boolean;
    readonly asNftRejected: {
      readonly sender: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isIssuerChanged: boolean;
    readonly asIssuerChanged: {
      readonly oldIssuer: AccountId32;
      readonly newIssuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isPropertySet: boolean;
    readonly asPropertySet: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isPropertyRemoved: boolean;
    readonly asPropertyRemoved: {
      readonly collectionId: u32;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isCollectionLocked: boolean;
    readonly asCollectionLocked: {
      readonly issuer: AccountId32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceAdded: boolean;
    readonly asResourceAdded: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceAccepted: boolean;
    readonly asResourceAccepted: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceRemoval: boolean;
    readonly asResourceRemoval: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isResourceRemovalAccepted: boolean;
    readonly asResourceRemovalAccepted: {
      readonly nftId: u32;
      readonly resourceId: u32;
      readonly collectionId: u32;
    } & Struct;
    readonly isPrioritySet: boolean;
    readonly asPrioritySet: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly type: 'CollectionCreated' | 'NftMinted' | 'NftBurned' | 'CollectionDestroyed' | 'NftSent' | 'NftAccepted' | 'NftRejected' | 'IssuerChanged' | 'PropertySet' | 'PropertyRemoved' | 'CollectionLocked' | 'ResourceAdded' | 'ResourceAccepted' | 'ResourceRemoval' | 'ResourceRemovalAccepted' | 'PrioritySet';
  }

  /** @name RmrkTraitsNftAccountIdOrCollectionNftTuple (135) */
  interface RmrkTraitsNftAccountIdOrCollectionNftTuple extends Enum {
    readonly isAccountId: boolean;
    readonly asAccountId: AccountId32;
    readonly isCollectionAndNftTuple: boolean;
    readonly asCollectionAndNftTuple: ITuple<[u32, u32]>;
    readonly type: 'AccountId' | 'CollectionAndNftTuple';
  }

  /** @name PalletRmrkEquipEvent (136) */
  interface PalletRmrkEquipEvent extends Enum {
    readonly isBaseCreated: boolean;
    readonly asBaseCreated: {
      readonly issuer: AccountId32;
      readonly baseId: u32;
    } & Struct;
    readonly isSlotEquipped: boolean;
    readonly asSlotEquipped: {
      readonly itemCollection: u32;
      readonly itemNft: u32;
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isSlotUnequipped: boolean;
    readonly asSlotUnequipped: {
      readonly itemCollection: u32;
      readonly itemNft: u32;
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isEquippablesUpdated: boolean;
    readonly asEquippablesUpdated: {
      readonly baseId: u32;
      readonly slotId: u32;
    } & Struct;
    readonly isBaseIssuerChanged: boolean;
    readonly asBaseIssuerChanged: {
      readonly oldIssuer: AccountId32;
      readonly newIssuer: AccountId32;
      readonly baseId: u32;
    } & Struct;
    readonly type: 'BaseCreated' | 'SlotEquipped' | 'SlotUnequipped' | 'EquippablesUpdated' | 'BaseIssuerChanged';
  }

  /** @name PalletRmrkMarketEvent (137) */
  interface PalletRmrkMarketEvent extends Enum {
    readonly isTokenPriceUpdated: boolean;
    readonly asTokenPriceUpdated: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: Option<u128>;
    } & Struct;
    readonly isTokenSold: boolean;
    readonly asTokenSold: {
      readonly owner: AccountId32;
      readonly buyer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isTokenListed: boolean;
    readonly asTokenListed: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isTokenUnlisted: boolean;
    readonly asTokenUnlisted: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isOfferPlaced: boolean;
    readonly asOfferPlaced: {
      readonly offerer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly price: u128;
    } & Struct;
    readonly isOfferWithdrawn: boolean;
    readonly asOfferWithdrawn: {
      readonly sender: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isOfferAccepted: boolean;
    readonly asOfferAccepted: {
      readonly owner: AccountId32;
      readonly buyer: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly type: 'TokenPriceUpdated' | 'TokenSold' | 'TokenListed' | 'TokenUnlisted' | 'OfferPlaced' | 'OfferWithdrawn' | 'OfferAccepted';
  }

  /** @name PalletPhalaWorldNftSalePalletEvent (139) */
  interface PalletPhalaWorldNftSalePalletEvent extends Enum {
    readonly isWorldClockStarted: boolean;
    readonly asWorldClockStarted: {
      readonly startTime: u64;
    } & Struct;
    readonly isNewEra: boolean;
    readonly asNewEra: {
      readonly time: u64;
      readonly era: u64;
    } & Struct;
    readonly isSpiritClaimed: boolean;
    readonly asSpiritClaimed: {
      readonly owner: AccountId32;
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isOriginOfShellPreordered: boolean;
    readonly asOriginOfShellPreordered: {
      readonly owner: AccountId32;
      readonly preorderId: u32;
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
    } & Struct;
    readonly isOriginOfShellMinted: boolean;
    readonly asOriginOfShellMinted: {
      readonly rarityType: PalletPhalaWorldRarityType;
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly owner: AccountId32;
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
      readonly generationId: u32;
    } & Struct;
    readonly isSpiritCollectionIdSet: boolean;
    readonly asSpiritCollectionIdSet: {
      readonly collectionId: u32;
    } & Struct;
    readonly isOriginOfShellCollectionIdSet: boolean;
    readonly asOriginOfShellCollectionIdSet: {
      readonly collectionId: u32;
    } & Struct;
    readonly isOriginOfShellInventoryUpdated: boolean;
    readonly asOriginOfShellInventoryUpdated: {
      readonly rarityType: PalletPhalaWorldRarityType;
    } & Struct;
    readonly isClaimSpiritStatusChanged: boolean;
    readonly asClaimSpiritStatusChanged: {
      readonly status: bool;
    } & Struct;
    readonly isPurchaseRareOriginOfShellsStatusChanged: boolean;
    readonly asPurchaseRareOriginOfShellsStatusChanged: {
      readonly status: bool;
    } & Struct;
    readonly isPurchasePrimeOriginOfShellsStatusChanged: boolean;
    readonly asPurchasePrimeOriginOfShellsStatusChanged: {
      readonly status: bool;
    } & Struct;
    readonly isPreorderOriginOfShellsStatusChanged: boolean;
    readonly asPreorderOriginOfShellsStatusChanged: {
      readonly status: bool;
    } & Struct;
    readonly isChosenPreorderMinted: boolean;
    readonly asChosenPreorderMinted: {
      readonly preorderId: u32;
      readonly owner: AccountId32;
      readonly nftId: u32;
    } & Struct;
    readonly isNotChosenPreorderRefunded: boolean;
    readonly asNotChosenPreorderRefunded: {
      readonly preorderId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isLastDayOfSaleStatusChanged: boolean;
    readonly asLastDayOfSaleStatusChanged: {
      readonly status: bool;
    } & Struct;
    readonly isOverlordChanged: boolean;
    readonly asOverlordChanged: {
      readonly oldOverlord: Option<AccountId32>;
      readonly newOverlord: AccountId32;
    } & Struct;
    readonly isOriginOfShellsInventoryWasSet: boolean;
    readonly asOriginOfShellsInventoryWasSet: {
      readonly status: bool;
    } & Struct;
    readonly isOriginOfShellGiftedToOwner: boolean;
    readonly asOriginOfShellGiftedToOwner: {
      readonly owner: AccountId32;
      readonly nftSaleType: PalletPhalaWorldNftSaleType;
    } & Struct;
    readonly isSpiritsMetadataSet: boolean;
    readonly asSpiritsMetadataSet: {
      readonly spiritsMetadata: Bytes;
    } & Struct;
    readonly isOriginOfShellsMetadataSet: boolean;
    readonly asOriginOfShellsMetadataSet: {
      readonly originOfShellsMetadata: Vec<ITuple<[PalletPhalaWorldRaceType, Bytes]>>;
    } & Struct;
    readonly isPayeeChanged: boolean;
    readonly asPayeeChanged: {
      readonly oldPayee: Option<AccountId32>;
      readonly newPayee: AccountId32;
    } & Struct;
    readonly type: 'WorldClockStarted' | 'NewEra' | 'SpiritClaimed' | 'OriginOfShellPreordered' | 'OriginOfShellMinted' | 'SpiritCollectionIdSet' | 'OriginOfShellCollectionIdSet' | 'OriginOfShellInventoryUpdated' | 'ClaimSpiritStatusChanged' | 'PurchaseRareOriginOfShellsStatusChanged' | 'PurchasePrimeOriginOfShellsStatusChanged' | 'PreorderOriginOfShellsStatusChanged' | 'ChosenPreorderMinted' | 'NotChosenPreorderRefunded' | 'LastDayOfSaleStatusChanged' | 'OverlordChanged' | 'OriginOfShellsInventoryWasSet' | 'OriginOfShellGiftedToOwner' | 'SpiritsMetadataSet' | 'OriginOfShellsMetadataSet' | 'PayeeChanged';
  }

  /** @name PalletPhalaWorldRaceType (140) */
  interface PalletPhalaWorldRaceType extends Enum {
    readonly isCyborg: boolean;
    readonly isAiSpectre: boolean;
    readonly isXGene: boolean;
    readonly isPandroid: boolean;
    readonly type: 'Cyborg' | 'AiSpectre' | 'XGene' | 'Pandroid';
  }

  /** @name PalletPhalaWorldCareerType (141) */
  interface PalletPhalaWorldCareerType extends Enum {
    readonly isHackerWizard: boolean;
    readonly isHardwareDruid: boolean;
    readonly isRoboWarrior: boolean;
    readonly isTradeNegotiator: boolean;
    readonly isWeb3Monk: boolean;
    readonly type: 'HackerWizard' | 'HardwareDruid' | 'RoboWarrior' | 'TradeNegotiator' | 'Web3Monk';
  }

  /** @name PalletPhalaWorldRarityType (142) */
  interface PalletPhalaWorldRarityType extends Enum {
    readonly isPrime: boolean;
    readonly isMagic: boolean;
    readonly isLegendary: boolean;
    readonly type: 'Prime' | 'Magic' | 'Legendary';
  }

  /** @name PalletPhalaWorldNftSaleType (143) */
  interface PalletPhalaWorldNftSaleType extends Enum {
    readonly isForSale: boolean;
    readonly isGiveaway: boolean;
    readonly isReserved: boolean;
    readonly type: 'ForSale' | 'Giveaway' | 'Reserved';
  }

  /** @name PalletPhalaWorldIncubationPalletEvent (146) */
  interface PalletPhalaWorldIncubationPalletEvent extends Enum {
    readonly isCanStartIncubationStatusChanged: boolean;
    readonly asCanStartIncubationStatusChanged: {
      readonly status: bool;
      readonly startTime: u64;
      readonly officialHatchTime: u64;
    } & Struct;
    readonly isStartedIncubation: boolean;
    readonly asStartedIncubation: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly owner: AccountId32;
      readonly startTime: u64;
      readonly hatchTime: u64;
    } & Struct;
    readonly isOriginOfShellReceivedFood: boolean;
    readonly asOriginOfShellReceivedFood: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly sender: AccountId32;
      readonly era: u64;
    } & Struct;
    readonly isOriginOfShellChosenPartsUpdated: boolean;
    readonly asOriginOfShellChosenPartsUpdated: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly oldChosenParts: Option<PalletPhalaWorldShellParts>;
      readonly newChosenParts: PalletPhalaWorldShellParts;
    } & Struct;
    readonly isShellCollectionIdSet: boolean;
    readonly asShellCollectionIdSet: {
      readonly collectionId: u32;
    } & Struct;
    readonly isShellPartsCollectionIdSet: boolean;
    readonly asShellPartsCollectionIdSet: {
      readonly collectionId: u32;
    } & Struct;
    readonly isShellPartMinted: boolean;
    readonly asShellPartMinted: {
      readonly shellPartsCollectionId: u32;
      readonly shellPartNftId: u32;
      readonly parentShellCollectionId: u32;
      readonly parentShellNftId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isShellAwakened: boolean;
    readonly asShellAwakened: {
      readonly shellCollectionId: u32;
      readonly shellNftId: u32;
      readonly rarity: PalletPhalaWorldRarityType;
      readonly career: PalletPhalaWorldCareerType;
      readonly race: PalletPhalaWorldRaceType;
      readonly generationId: u32;
      readonly originOfShellCollectionId: u32;
      readonly originOfShellNftId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly type: 'CanStartIncubationStatusChanged' | 'StartedIncubation' | 'OriginOfShellReceivedFood' | 'OriginOfShellChosenPartsUpdated' | 'ShellCollectionIdSet' | 'ShellPartsCollectionIdSet' | 'ShellPartMinted' | 'ShellAwakened';
  }

  /** @name PalletPhalaWorldShellParts (148) */
  interface PalletPhalaWorldShellParts extends Struct {
    readonly parts: BTreeMap<Bytes, PalletPhalaWorldShellPartInfo>;
  }

  /** @name PalletPhalaWorldShellPartInfo (149) */
  interface PalletPhalaWorldShellPartInfo extends Struct {
    readonly shellPart: PalletPhalaWorldPartInfo;
    readonly subParts: Option<Vec<PalletPhalaWorldPartInfo>>;
  }

  /** @name PalletPhalaWorldPartInfo (151) */
  interface PalletPhalaWorldPartInfo extends Struct {
    readonly name: Bytes;
    readonly rarity: PalletPhalaWorldPartRarityType;
    readonly race: Option<PalletPhalaWorldRaceType>;
    readonly career: Option<PalletPhalaWorldCareerType>;
    readonly sizes: Option<Vec<PalletPhalaWorldPartSizeType>>;
    readonly style: Option<Bytes>;
    readonly metadata: Option<Bytes>;
    readonly layer: u32;
    readonly x: u32;
    readonly y: u32;
    readonly tradeable: bool;
  }

  /** @name PalletPhalaWorldPartRarityType (152) */
  interface PalletPhalaWorldPartRarityType extends Enum {
    readonly isNormal: boolean;
    readonly isRare: boolean;
    readonly isEpic: boolean;
    readonly isLegend: boolean;
    readonly type: 'Normal' | 'Rare' | 'Epic' | 'Legend';
  }

  /** @name PalletPhalaWorldPartSizeType (157) */
  interface PalletPhalaWorldPartSizeType extends Enum {
    readonly isMa: boolean;
    readonly isMb: boolean;
    readonly isXa: boolean;
    readonly isXb: boolean;
    readonly isXc: boolean;
    readonly isPa: boolean;
    readonly isPb: boolean;
    readonly isPc: boolean;
    readonly isPd: boolean;
    readonly isAa: boolean;
    readonly type: 'Ma' | 'Mb' | 'Xa' | 'Xb' | 'Xc' | 'Pa' | 'Pb' | 'Pc' | 'Pd' | 'Aa';
  }

  /** @name FrameSystemPhase (165) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (168) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (170) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (175) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: Weight;
    readonly maxBlock: Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (176) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (177) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: Weight;
    readonly maxExtrinsic: Option<Weight>;
    readonly maxTotal: Option<Weight>;
    readonly reserved: Option<Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (179) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (180) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (181) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (182) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (186) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (187) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletUtilityCall (189) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: KhalaParachainRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch';
  }

  /** @name PalletMultisigCall (192) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: WrapperKeepOpaque<Call>;
      readonly storeCall: bool;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletProxyCall (195) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<KhalaParachainRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: KhalaParachainRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<KhalaParachainRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletVestingCall (199) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (200) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletSchedulerCall (201) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name FrameSupportScheduleMaybeHashed (203) */
  interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean;
    readonly asValue: Call;
    readonly isHash: boolean;
    readonly asHash: H256;
    readonly type: 'Value' | 'Hash';
  }

  /** @name PalletPreimageCall (204) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name CumulusPalletParachainSystemCall (205) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (206) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV2PersistedValidationData (207) */
  interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (209) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (212) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (215) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletXcmpQueueCall (218) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: Weight;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name CumulusPalletDmpQueueCall (219) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (220) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV1MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
  }

  /** @name XcmVersionedXcm (221) */
  interface XcmVersionedXcm extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Xcm;
    readonly isV1: boolean;
    readonly asV1: XcmV1Xcm;
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name XcmV0Xcm (222) */
  interface XcmV0Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isReserveAssetDeposit: boolean;
    readonly asReserveAssetDeposit: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTeleportAsset: boolean;
    readonly asTeleportAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV0Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV0MultiLocation;
      readonly message: XcmV0Xcm;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'TeleportAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
  }

  /** @name XcmV0Order (224) */
  interface XcmV0Order extends Enum {
    readonly isNull: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: Vec<XcmV0MultiAsset>;
      readonly receive: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly reserve: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV0MultiLocation;
      readonly assets: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV0MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly xcm: Vec<XcmV0Xcm>;
    } & Struct;
    readonly type: 'Null' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV0Response (226) */
  interface XcmV0Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: Vec<XcmV0MultiAsset>;
    readonly type: 'Assets';
  }

  /** @name XcmV1Xcm (227) */
  interface XcmV1Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV1Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV1MultilocationJunctions;
      readonly message: XcmV1Xcm;
    } & Struct;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1Order (229) */
  interface XcmV1Order extends Enum {
    readonly isNoop: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly instructions: Vec<XcmV1Xcm>;
    } & Struct;
    readonly type: 'Noop' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV1Response (231) */
  interface XcmV1Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Assets' | 'Version';
  }

  /** @name PalletBalancesCall (245) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletAuthorshipCall (246) */
  interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name SpRuntimeHeader (248) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpRuntimeBlakeTwo256 (249) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletCollatorSelectionCall (250) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent';
  }

  /** @name PalletSessionCall (251) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: KhalaParachainRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name KhalaParachainRuntimeOpaqueSessionKeys (252) */
  interface KhalaParachainRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (253) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name PalletIdentityCall (254) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (255) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (291) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (292) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (293) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletDemocracyCall (294) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposalHash: H256;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
      readonly secondsUpperBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isCancelQueued: boolean;
    readonly asCancelQueued: {
      readonly which: u32;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNotePreimageOperational: boolean;
    readonly asNotePreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimage: boolean;
    readonly asNoteImminentPreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimageOperational: boolean;
    readonly asNoteImminentPreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isReapPreimage: boolean;
    readonly asReapPreimage: {
      readonly proposalHash: H256;
      readonly proposalLenUpperBound: Compact<u32>;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isEnactProposal: boolean;
    readonly asEnactProposal: {
      readonly proposalHash: H256;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'CancelQueued' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'NotePreimage' | 'NotePreimageOperational' | 'NoteImminentPreimage' | 'NoteImminentPreimageOperational' | 'ReapPreimage' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'EnactProposal' | 'Blacklist' | 'CancelProposal';
  }

  /** @name PalletDemocracyConviction (295) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (296) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<Weight>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletTreasuryCall (298) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletBountiesCall (299) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletLotteryCall (300) */
  interface PalletLotteryCall extends Enum {
    readonly isBuyTicket: boolean;
    readonly asBuyTicket: {
      readonly call: Call;
    } & Struct;
    readonly isSetCalls: boolean;
    readonly asSetCalls: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isStartLottery: boolean;
    readonly asStartLottery: {
      readonly price: u128;
      readonly length: u32;
      readonly delay: u32;
      readonly repeat: bool;
    } & Struct;
    readonly isStopRepeat: boolean;
    readonly type: 'BuyTicket' | 'SetCalls' | 'StartLottery' | 'StopRepeat';
  }

  /** @name PalletMembershipCall (302) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletElectionsPhragmenCall (303) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (304) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletTipsCall (305) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletChildBountiesCall (306) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name SubbridgePalletsChainbridgePalletCall (307) */
  interface SubbridgePalletsChainbridgePalletCall extends Enum {
    readonly isSetThreshold: boolean;
    readonly asSetThreshold: {
      readonly threshold: u32;
    } & Struct;
    readonly isWhitelistChain: boolean;
    readonly asWhitelistChain: {
      readonly id: u8;
    } & Struct;
    readonly isAddRelayer: boolean;
    readonly asAddRelayer: {
      readonly v: AccountId32;
    } & Struct;
    readonly isRemoveRelayer: boolean;
    readonly asRemoveRelayer: {
      readonly v: AccountId32;
    } & Struct;
    readonly isUpdateFee: boolean;
    readonly asUpdateFee: {
      readonly fee: u128;
      readonly destId: u8;
    } & Struct;
    readonly isAcknowledgeProposal: boolean;
    readonly asAcknowledgeProposal: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly rId: U8aFixed;
      readonly call: Call;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly rId: U8aFixed;
      readonly call: Call;
    } & Struct;
    readonly isEvalVoteState: boolean;
    readonly asEvalVoteState: {
      readonly nonce: u64;
      readonly srcId: u8;
      readonly prop: Call;
    } & Struct;
    readonly isHandleFungibleTransfer: boolean;
    readonly asHandleFungibleTransfer: {
      readonly dest: Bytes;
      readonly amount: u128;
      readonly rid: U8aFixed;
    } & Struct;
    readonly type: 'SetThreshold' | 'WhitelistChain' | 'AddRelayer' | 'RemoveRelayer' | 'UpdateFee' | 'AcknowledgeProposal' | 'RejectProposal' | 'EvalVoteState' | 'HandleFungibleTransfer';
  }

  /** @name SubbridgePalletsXtransferPalletCall (308) */
  interface SubbridgePalletsXtransferPalletCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly asset: XcmV1MultiAsset;
      readonly dest: XcmV1MultiLocation;
      readonly destWeight: Option<u64>;
    } & Struct;
    readonly isTransferGeneric: boolean;
    readonly asTransferGeneric: {
      readonly data: Bytes;
      readonly dest: XcmV1MultiLocation;
      readonly destWeight: Option<u64>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferGeneric';
  }

  /** @name PhalaPalletsMqPalletCall (310) */
  interface PhalaPalletsMqPalletCall extends Enum {
    readonly isSyncOffchainMessage: boolean;
    readonly asSyncOffchainMessage: {
      readonly signedMessage: PhalaMqSignedMessage;
    } & Struct;
    readonly isPushMessage: boolean;
    readonly asPushMessage: {
      readonly destination: Bytes;
      readonly payload: Bytes;
    } & Struct;
    readonly isForcePushPalletMessage: boolean;
    readonly asForcePushPalletMessage: {
      readonly destination: Bytes;
      readonly payload: Bytes;
    } & Struct;
    readonly type: 'SyncOffchainMessage' | 'PushMessage' | 'ForcePushPalletMessage';
  }

  /** @name PhalaMqSignedMessage (311) */
  interface PhalaMqSignedMessage extends Struct {
    readonly message: PhalaMqMessage;
    readonly sequence: u64;
    readonly signature: Bytes;
  }

  /** @name PhalaMqMessage (312) */
  interface PhalaMqMessage extends Struct {
    readonly sender: PhalaMqMessageOrigin;
    readonly destination: Bytes;
    readonly payload: Bytes;
  }

  /** @name PhalaMqMessageOrigin (313) */
  interface PhalaMqMessageOrigin extends Enum {
    readonly isPallet: boolean;
    readonly asPallet: Bytes;
    readonly isContract: boolean;
    readonly asContract: H256;
    readonly isWorker: boolean;
    readonly asWorker: SpCoreSr25519Public;
    readonly isAccountId: boolean;
    readonly asAccountId: H256;
    readonly isMultiLocation: boolean;
    readonly asMultiLocation: Bytes;
    readonly isGatekeeper: boolean;
    readonly isCluster: boolean;
    readonly asCluster: H256;
    readonly isReserved: boolean;
    readonly type: 'Pallet' | 'Contract' | 'Worker' | 'AccountId' | 'MultiLocation' | 'Gatekeeper' | 'Cluster' | 'Reserved';
  }

  /** @name PhalaPalletsRegistryPalletCall (315) */
  interface PhalaPalletsRegistryPalletCall extends Enum {
    readonly isForceSetBenchmarkDuration: boolean;
    readonly asForceSetBenchmarkDuration: {
      readonly value: u32;
    } & Struct;
    readonly isForceRegisterWorker: boolean;
    readonly asForceRegisterWorker: {
      readonly pubkey: SpCoreSr25519Public;
      readonly ecdhPubkey: SpCoreSr25519Public;
      readonly operator: Option<AccountId32>;
    } & Struct;
    readonly isForceRegisterTopicPubkey: boolean;
    readonly asForceRegisterTopicPubkey: {
      readonly topic: Bytes;
      readonly pubkey: Bytes;
    } & Struct;
    readonly isRegisterGatekeeper: boolean;
    readonly asRegisterGatekeeper: {
      readonly gatekeeper: SpCoreSr25519Public;
    } & Struct;
    readonly isUnregisterGatekeeper: boolean;
    readonly asUnregisterGatekeeper: {
      readonly gatekeeper: SpCoreSr25519Public;
    } & Struct;
    readonly isRotateMasterKey: boolean;
    readonly isRegisterWorker: boolean;
    readonly asRegisterWorker: {
      readonly pruntimeInfo: PhalaTypesWorkerRegistrationInfo;
      readonly attestation: PhalaPalletsUtilsAttestation;
    } & Struct;
    readonly isUpdateWorkerEndpoint: boolean;
    readonly asUpdateWorkerEndpoint: {
      readonly endpointPayload: PhalaTypesWorkerEndpointPayload;
      readonly signature: Bytes;
    } & Struct;
    readonly isAddPruntime: boolean;
    readonly asAddPruntime: {
      readonly pruntimeHash: Bytes;
    } & Struct;
    readonly isRemovePruntime: boolean;
    readonly asRemovePruntime: {
      readonly pruntimeHash: Bytes;
    } & Struct;
    readonly isAddRelaychainGenesisBlockHash: boolean;
    readonly asAddRelaychainGenesisBlockHash: {
      readonly genesisBlockHash: H256;
    } & Struct;
    readonly isRemoveRelaychainGenesisBlockHash: boolean;
    readonly asRemoveRelaychainGenesisBlockHash: {
      readonly genesisBlockHash: H256;
    } & Struct;
    readonly isRetirePruntime: boolean;
    readonly asRetirePruntime: {
      readonly condition: PhalaTypesMessagingRetireCondition;
    } & Struct;
    readonly isSetPruntimeConsensusVersion: boolean;
    readonly asSetPruntimeConsensusVersion: {
      readonly version: u32;
    } & Struct;
    readonly type: 'ForceSetBenchmarkDuration' | 'ForceRegisterWorker' | 'ForceRegisterTopicPubkey' | 'RegisterGatekeeper' | 'UnregisterGatekeeper' | 'RotateMasterKey' | 'RegisterWorker' | 'UpdateWorkerEndpoint' | 'AddPruntime' | 'RemovePruntime' | 'AddRelaychainGenesisBlockHash' | 'RemoveRelaychainGenesisBlockHash' | 'RetirePruntime' | 'SetPruntimeConsensusVersion';
  }

  /** @name PhalaTypesWorkerRegistrationInfo (316) */
  interface PhalaTypesWorkerRegistrationInfo extends Struct {
    readonly version: u32;
    readonly machineId: Bytes;
    readonly pubkey: SpCoreSr25519Public;
    readonly ecdhPubkey: SpCoreSr25519Public;
    readonly genesisBlockHash: H256;
    readonly features: Vec<u32>;
    readonly operator: Option<AccountId32>;
  }

  /** @name PhalaPalletsUtilsAttestation (317) */
  interface PhalaPalletsUtilsAttestation extends Enum {
    readonly isSgxIas: boolean;
    readonly asSgxIas: {
      readonly raReport: Bytes;
      readonly signature: Bytes;
      readonly rawSigningCert: Bytes;
    } & Struct;
    readonly type: 'SgxIas';
  }

  /** @name PhalaTypesWorkerEndpointPayload (318) */
  interface PhalaTypesWorkerEndpointPayload extends Struct {
    readonly pubkey: SpCoreSr25519Public;
    readonly versionedEndpoints: PhalaTypesVersionedWorkerEndpoints;
    readonly signingTime: u64;
  }

  /** @name PhalaTypesVersionedWorkerEndpoints (319) */
  interface PhalaTypesVersionedWorkerEndpoints extends Enum {
    readonly isV1: boolean;
    readonly asV1: Vec<Text>;
    readonly type: 'V1';
  }

  /** @name PhalaPalletsMiningPalletCall (321) */
  interface PhalaPalletsMiningPalletCall extends Enum {
    readonly isSetCoolDownExpiration: boolean;
    readonly asSetCoolDownExpiration: {
      readonly period: u64;
    } & Struct;
    readonly isUnbind: boolean;
    readonly asUnbind: {
      readonly miner: AccountId32;
    } & Struct;
    readonly isForceHeartbeat: boolean;
    readonly isForceStartMining: boolean;
    readonly asForceStartMining: {
      readonly miner: AccountId32;
      readonly stake: u128;
    } & Struct;
    readonly isForceStopMining: boolean;
    readonly asForceStopMining: {
      readonly miner: AccountId32;
    } & Struct;
    readonly isUpdateTokenomic: boolean;
    readonly asUpdateTokenomic: {
      readonly newParams: PhalaTypesMessagingTokenomicParameters;
    } & Struct;
    readonly type: 'SetCoolDownExpiration' | 'Unbind' | 'ForceHeartbeat' | 'ForceStartMining' | 'ForceStopMining' | 'UpdateTokenomic';
  }

  /** @name PhalaTypesMessagingTokenomicParameters (322) */
  interface PhalaTypesMessagingTokenomicParameters extends Struct {
    readonly phaRate: u128;
    readonly rho: u128;
    readonly budgetPerBlock: u128;
    readonly vMax: u128;
    readonly costK: u128;
    readonly costB: u128;
    readonly slashRate: u128;
    readonly treasuryRatio: u128;
    readonly heartbeatWindow: u32;
    readonly rigK: u128;
    readonly rigB: u128;
    readonly re: u128;
    readonly k: u128;
    readonly kappa: u128;
  }

  /** @name PhalaPalletsStakepoolPalletCall (323) */
  interface PhalaPalletsStakepoolPalletCall extends Enum {
    readonly isCreate: boolean;
    readonly isAddWorker: boolean;
    readonly asAddWorker: {
      readonly pid: u64;
      readonly pubkey: SpCoreSr25519Public;
    } & Struct;
    readonly isRemoveWorker: boolean;
    readonly asRemoveWorker: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSetCap: boolean;
    readonly asSetCap: {
      readonly pid: u64;
      readonly cap: u128;
    } & Struct;
    readonly isSetPayoutPref: boolean;
    readonly asSetPayoutPref: {
      readonly pid: u64;
      readonly payoutCommission: Permill;
    } & Struct;
    readonly isAddStakerToWhitelist: boolean;
    readonly asAddStakerToWhitelist: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isSetPoolDescription: boolean;
    readonly asSetPoolDescription: {
      readonly pid: u64;
      readonly description: Bytes;
    } & Struct;
    readonly isRemoveStakerFromWhitelist: boolean;
    readonly asRemoveStakerFromWhitelist: {
      readonly pid: u64;
      readonly staker: AccountId32;
    } & Struct;
    readonly isForceAssignReward: boolean;
    readonly asForceAssignReward: {
      readonly rewardArr: Vec<ITuple<[u64, u128]>>;
    } & Struct;
    readonly isClaimOwnerRewards: boolean;
    readonly asClaimOwnerRewards: {
      readonly pid: u64;
      readonly target: AccountId32;
    } & Struct;
    readonly isClaimStakerRewards: boolean;
    readonly asClaimStakerRewards: {
      readonly pid: u64;
      readonly target: AccountId32;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly pid: u64;
      readonly target: AccountId32;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly pid: u64;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly pid: u64;
      readonly shares: u128;
    } & Struct;
    readonly isStartMining: boolean;
    readonly asStartMining: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly stake: u128;
    } & Struct;
    readonly isStopMining: boolean;
    readonly asStopMining: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isReclaimPoolWorker: boolean;
    readonly asReclaimPoolWorker: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
    } & Struct;
    readonly isSetMiningEnable: boolean;
    readonly asSetMiningEnable: {
      readonly enable: bool;
    } & Struct;
    readonly isReconcileWithdrawQueue: boolean;
    readonly asReconcileWithdrawQueue: {
      readonly pid: u64;
      readonly account: AccountId32;
    } & Struct;
    readonly isRestartMining: boolean;
    readonly asRestartMining: {
      readonly pid: u64;
      readonly worker: SpCoreSr25519Public;
      readonly stake: u128;
    } & Struct;
    readonly type: 'Create' | 'AddWorker' | 'RemoveWorker' | 'SetCap' | 'SetPayoutPref' | 'AddStakerToWhitelist' | 'SetPoolDescription' | 'RemoveStakerFromWhitelist' | 'ForceAssignReward' | 'ClaimOwnerRewards' | 'ClaimStakerRewards' | 'ClaimRewards' | 'Contribute' | 'Withdraw' | 'StartMining' | 'StopMining' | 'ReclaimPoolWorker' | 'SetMiningEnable' | 'ReconcileWithdrawQueue' | 'RestartMining';
  }

  /** @name PalletAssetsCall (328) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly id: Compact<u32>;
      readonly witness: PalletAssetsDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund';
  }

  /** @name PalletAssetsDestroyWitness (329) */
  interface PalletAssetsDestroyWitness extends Struct {
    readonly accounts: Compact<u32>;
    readonly sufficients: Compact<u32>;
    readonly approvals: Compact<u32>;
  }

  /** @name AssetsRegistryCall (330) */
  interface AssetsRegistryCall extends Enum {
    readonly isForceWithdrawFund: boolean;
    readonly asForceWithdrawFund: {
      readonly assetId: Option<u32>;
      readonly recipient: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceRegisterAsset: boolean;
    readonly asForceRegisterAsset: {
      readonly location: XcmV1MultiLocation;
      readonly assetId: u32;
      readonly properties: AssetsRegistryAssetProperties;
    } & Struct;
    readonly isForceUnregisterAsset: boolean;
    readonly asForceUnregisterAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly assetId: u32;
      readonly properties: AssetsRegistryAssetProperties;
    } & Struct;
    readonly isForceMint: boolean;
    readonly asForceMint: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceBurn: boolean;
    readonly asForceBurn: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isForceSetPrice: boolean;
    readonly asForceSetPrice: {
      readonly assetId: u32;
      readonly executionPrice: u128;
    } & Struct;
    readonly isForceSetLocation: boolean;
    readonly asForceSetLocation: {
      readonly assetId: u32;
      readonly location: XcmV1MultiLocation;
    } & Struct;
    readonly isForceEnableChainbridge: boolean;
    readonly asForceEnableChainbridge: {
      readonly assetId: u32;
      readonly chainId: u8;
      readonly isMintable: bool;
      readonly metadata: Bytes;
    } & Struct;
    readonly isForceDisableChainbridge: boolean;
    readonly asForceDisableChainbridge: {
      readonly assetId: u32;
      readonly chainId: u8;
    } & Struct;
    readonly type: 'ForceWithdrawFund' | 'ForceRegisterAsset' | 'ForceUnregisterAsset' | 'ForceSetMetadata' | 'ForceMint' | 'ForceBurn' | 'ForceSetPrice' | 'ForceSetLocation' | 'ForceEnableChainbridge' | 'ForceDisableChainbridge';
  }

  /** @name AssetsRegistryAssetProperties (331) */
  interface AssetsRegistryAssetProperties extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
  }

  /** @name PalletUniquesCall (332) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u32;
      readonly admin: MultiAddress;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
      readonly checkOwner: Option<MultiAddress>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: MultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly maybeCheckDelegate: Option<MultiAddress>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<MultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PalletUniquesDestroyWitness (333) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletRmrkCoreCall (335) */
  interface PalletRmrkCoreCall extends Enum {
    readonly isMintNft: boolean;
    readonly asMintNft: {
      readonly owner: Option<AccountId32>;
      readonly nftId: u32;
      readonly collectionId: u32;
      readonly royaltyRecipient: Option<AccountId32>;
      readonly royalty: Option<Permill>;
      readonly metadata: Bytes;
      readonly transferable: bool;
      readonly resources: Option<Vec<RmrkTraitsResourceResourceInfoMin>>;
    } & Struct;
    readonly isMintNftDirectlyToNft: boolean;
    readonly asMintNftDirectlyToNft: {
      readonly owner: ITuple<[u32, u32]>;
      readonly nftId: u32;
      readonly collectionId: u32;
      readonly royaltyRecipient: Option<AccountId32>;
      readonly royalty: Option<Permill>;
      readonly metadata: Bytes;
      readonly transferable: bool;
      readonly resources: Option<Vec<RmrkTraitsResourceResourceInfoMin>>;
    } & Struct;
    readonly isCreateCollection: boolean;
    readonly asCreateCollection: {
      readonly metadata: Bytes;
      readonly max: Option<u32>;
      readonly symbol: Bytes;
    } & Struct;
    readonly isBurnNft: boolean;
    readonly asBurnNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly maxBurns: u32;
    } & Struct;
    readonly isDestroyCollection: boolean;
    readonly asDestroyCollection: {
      readonly collectionId: u32;
    } & Struct;
    readonly isSend: boolean;
    readonly asSend: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly newOwner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    } & Struct;
    readonly isAcceptNft: boolean;
    readonly asAcceptNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly newOwner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    } & Struct;
    readonly isRejectNft: boolean;
    readonly asRejectNft: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isChangeCollectionIssuer: boolean;
    readonly asChangeCollectionIssuer: {
      readonly collectionId: u32;
      readonly newIssuer: MultiAddress;
    } & Struct;
    readonly isSetProperty: boolean;
    readonly asSetProperty: {
      readonly collectionId: Compact<u32>;
      readonly maybeNftId: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isLockCollection: boolean;
    readonly asLockCollection: {
      readonly collectionId: u32;
    } & Struct;
    readonly isAddBasicResource: boolean;
    readonly asAddBasicResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceBasicResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isAddComposableResource: boolean;
    readonly asAddComposableResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceComposableResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isAddSlotResource: boolean;
    readonly asAddSlotResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resource: RmrkTraitsResourceSlotResource;
      readonly resourceId: u32;
    } & Struct;
    readonly isAcceptResource: boolean;
    readonly asAcceptResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isRemoveResource: boolean;
    readonly asRemoveResource: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isAcceptResourceRemoval: boolean;
    readonly asAcceptResourceRemoval: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly resourceId: u32;
    } & Struct;
    readonly isSetPriority: boolean;
    readonly asSetPriority: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly priorities: Vec<u32>;
    } & Struct;
    readonly type: 'MintNft' | 'MintNftDirectlyToNft' | 'CreateCollection' | 'BurnNft' | 'DestroyCollection' | 'Send' | 'AcceptNft' | 'RejectNft' | 'ChangeCollectionIssuer' | 'SetProperty' | 'LockCollection' | 'AddBasicResource' | 'AddComposableResource' | 'AddSlotResource' | 'AcceptResource' | 'RemoveResource' | 'AcceptResourceRemoval' | 'SetPriority';
  }

  /** @name RmrkTraitsResourceResourceInfoMin (339) */
  interface RmrkTraitsResourceResourceInfoMin extends Struct {
    readonly id: u32;
    readonly resource: RmrkTraitsResourceResourceTypes;
  }

  /** @name RmrkTraitsResourceResourceTypes (341) */
  interface RmrkTraitsResourceResourceTypes extends Enum {
    readonly isBasic: boolean;
    readonly asBasic: RmrkTraitsResourceBasicResource;
    readonly isComposable: boolean;
    readonly asComposable: RmrkTraitsResourceComposableResource;
    readonly isSlot: boolean;
    readonly asSlot: RmrkTraitsResourceSlotResource;
    readonly type: 'Basic' | 'Composable' | 'Slot';
  }

  /** @name RmrkTraitsResourceBasicResource (342) */
  interface RmrkTraitsResourceBasicResource extends Struct {
    readonly metadata: Bytes;
  }

  /** @name RmrkTraitsResourceComposableResource (343) */
  interface RmrkTraitsResourceComposableResource extends Struct {
    readonly parts: Vec<u32>;
    readonly base: u32;
    readonly metadata: Option<Bytes>;
    readonly slot: Option<ITuple<[u32, u32]>>;
  }

  /** @name RmrkTraitsResourceSlotResource (344) */
  interface RmrkTraitsResourceSlotResource extends Struct {
    readonly base: u32;
    readonly metadata: Option<Bytes>;
    readonly slot: u32;
  }

  /** @name PalletRmrkEquipCall (348) */
  interface PalletRmrkEquipCall extends Enum {
    readonly isChangeBaseIssuer: boolean;
    readonly asChangeBaseIssuer: {
      readonly baseId: u32;
      readonly newIssuer: MultiAddress;
    } & Struct;
    readonly isEquip: boolean;
    readonly asEquip: {
      readonly item: ITuple<[u32, u32]>;
      readonly equipper: ITuple<[u32, u32]>;
      readonly resourceId: u32;
      readonly base: u32;
      readonly slot: u32;
    } & Struct;
    readonly isUnequip: boolean;
    readonly asUnequip: {
      readonly item: ITuple<[u32, u32]>;
      readonly unequipper: ITuple<[u32, u32]>;
      readonly base: u32;
      readonly slot: u32;
    } & Struct;
    readonly isEquippable: boolean;
    readonly asEquippable: {
      readonly baseId: u32;
      readonly slotId: u32;
      readonly equippables: RmrkTraitsPartEquippableList;
    } & Struct;
    readonly isThemeAdd: boolean;
    readonly asThemeAdd: {
      readonly baseId: u32;
      readonly theme: RmrkTraitsTheme;
    } & Struct;
    readonly isCreateBase: boolean;
    readonly asCreateBase: {
      readonly baseType: Bytes;
      readonly symbol: Bytes;
      readonly parts: Vec<RmrkTraitsPartPartType>;
    } & Struct;
    readonly type: 'ChangeBaseIssuer' | 'Equip' | 'Unequip' | 'Equippable' | 'ThemeAdd' | 'CreateBase';
  }

  /** @name RmrkTraitsPartEquippableList (349) */
  interface RmrkTraitsPartEquippableList extends Enum {
    readonly isAll: boolean;
    readonly isEmpty: boolean;
    readonly isCustom: boolean;
    readonly asCustom: Vec<u32>;
    readonly type: 'All' | 'Empty' | 'Custom';
  }

  /** @name RmrkTraitsTheme (351) */
  interface RmrkTraitsTheme extends Struct {
    readonly name: Bytes;
    readonly properties: Vec<RmrkTraitsThemeThemeProperty>;
    readonly inherit: bool;
  }

  /** @name RmrkTraitsThemeThemeProperty (353) */
  interface RmrkTraitsThemeThemeProperty extends Struct {
    readonly key: Bytes;
    readonly value: Bytes;
  }

  /** @name RmrkTraitsPartPartType (356) */
  interface RmrkTraitsPartPartType extends Enum {
    readonly isFixedPart: boolean;
    readonly asFixedPart: RmrkTraitsPartFixedPart;
    readonly isSlotPart: boolean;
    readonly asSlotPart: RmrkTraitsPartSlotPart;
    readonly type: 'FixedPart' | 'SlotPart';
  }

  /** @name RmrkTraitsPartFixedPart (357) */
  interface RmrkTraitsPartFixedPart extends Struct {
    readonly id: u32;
    readonly z: u32;
    readonly src: Bytes;
  }

  /** @name RmrkTraitsPartSlotPart (358) */
  interface RmrkTraitsPartSlotPart extends Struct {
    readonly id: u32;
    readonly equippable: RmrkTraitsPartEquippableList;
    readonly src: Option<Bytes>;
    readonly z: u32;
  }

  /** @name PalletRmrkMarketCall (360) */
  interface PalletRmrkMarketCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: Option<u128>;
    } & Struct;
    readonly isList: boolean;
    readonly asList: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
      readonly expires: Option<u32>;
    } & Struct;
    readonly isUnlist: boolean;
    readonly asUnlist: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isMakeOffer: boolean;
    readonly asMakeOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly amount: u128;
      readonly expires: Option<u32>;
    } & Struct;
    readonly isWithdrawOffer: boolean;
    readonly asWithdrawOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isAcceptOffer: boolean;
    readonly asAcceptOffer: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly offerer: AccountId32;
    } & Struct;
    readonly type: 'Buy' | 'List' | 'Unlist' | 'MakeOffer' | 'WithdrawOffer' | 'AcceptOffer';
  }

  /** @name PalletPhalaWorldNftSalePalletCall (361) */
  interface PalletPhalaWorldNftSalePalletCall extends Enum {
    readonly isClaimSpirit: boolean;
    readonly isRedeemSpirit: boolean;
    readonly asRedeemSpirit: {
      readonly signature: SpCoreSr25519Signature;
    } & Struct;
    readonly isBuyRareOriginOfShell: boolean;
    readonly asBuyRareOriginOfShell: {
      readonly rarityType: PalletPhalaWorldRarityType;
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
    } & Struct;
    readonly isBuyPrimeOriginOfShell: boolean;
    readonly asBuyPrimeOriginOfShell: {
      readonly signature: SpCoreSr25519Signature;
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
    } & Struct;
    readonly isPreorderOriginOfShell: boolean;
    readonly asPreorderOriginOfShell: {
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
    } & Struct;
    readonly isMintChosenPreorders: boolean;
    readonly asMintChosenPreorders: {
      readonly preorders: Vec<u32>;
    } & Struct;
    readonly isRefundNotChosenPreorders: boolean;
    readonly asRefundNotChosenPreorders: {
      readonly preorders: Vec<u32>;
    } & Struct;
    readonly isMintGiftOriginOfShell: boolean;
    readonly asMintGiftOriginOfShell: {
      readonly owner: AccountId32;
      readonly rarityType: PalletPhalaWorldRarityType;
      readonly race: PalletPhalaWorldRaceType;
      readonly career: PalletPhalaWorldCareerType;
      readonly nftSaleType: PalletPhalaWorldNftSaleType;
    } & Struct;
    readonly isSetOverlord: boolean;
    readonly asSetOverlord: {
      readonly newOverlord: AccountId32;
    } & Struct;
    readonly isInitializeWorldClock: boolean;
    readonly isSetStatusType: boolean;
    readonly asSetStatusType: {
      readonly status: bool;
      readonly statusType: PalletPhalaWorldStatusType;
    } & Struct;
    readonly isInitRarityTypeCounts: boolean;
    readonly isUpdateRarityTypeCounts: boolean;
    readonly asUpdateRarityTypeCounts: {
      readonly rarityType: PalletPhalaWorldRarityType;
      readonly forSaleCount: u32;
      readonly giveawayCount: u32;
    } & Struct;
    readonly isSetSpiritCollectionId: boolean;
    readonly asSetSpiritCollectionId: {
      readonly collectionId: u32;
    } & Struct;
    readonly isSetOriginOfShellCollectionId: boolean;
    readonly asSetOriginOfShellCollectionId: {
      readonly collectionId: u32;
    } & Struct;
    readonly isPwCreateCollection: boolean;
    readonly asPwCreateCollection: {
      readonly metadata: Bytes;
      readonly max: Option<u32>;
      readonly symbol: Bytes;
    } & Struct;
    readonly isSetSpiritsMetadata: boolean;
    readonly asSetSpiritsMetadata: {
      readonly spiritsMetadata: Bytes;
    } & Struct;
    readonly isSetOriginOfShellsMetadata: boolean;
    readonly asSetOriginOfShellsMetadata: {
      readonly originOfShellsMetadata: Vec<ITuple<[PalletPhalaWorldRaceType, Bytes]>>;
    } & Struct;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly newPayee: AccountId32;
    } & Struct;
    readonly type: 'ClaimSpirit' | 'RedeemSpirit' | 'BuyRareOriginOfShell' | 'BuyPrimeOriginOfShell' | 'PreorderOriginOfShell' | 'MintChosenPreorders' | 'RefundNotChosenPreorders' | 'MintGiftOriginOfShell' | 'SetOverlord' | 'InitializeWorldClock' | 'SetStatusType' | 'InitRarityTypeCounts' | 'UpdateRarityTypeCounts' | 'SetSpiritCollectionId' | 'SetOriginOfShellCollectionId' | 'PwCreateCollection' | 'SetSpiritsMetadata' | 'SetOriginOfShellsMetadata' | 'SetPayee';
  }

  /** @name SpCoreSr25519Signature (362) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletPhalaWorldStatusType (364) */
  interface PalletPhalaWorldStatusType extends Enum {
    readonly isClaimSpirits: boolean;
    readonly isPurchaseRareOriginOfShells: boolean;
    readonly isPurchasePrimeOriginOfShells: boolean;
    readonly isPreorderOriginOfShells: boolean;
    readonly isLastDayOfSale: boolean;
    readonly type: 'ClaimSpirits' | 'PurchaseRareOriginOfShells' | 'PurchasePrimeOriginOfShells' | 'PreorderOriginOfShells' | 'LastDayOfSale';
  }

  /** @name PalletPhalaWorldIncubationPalletCall (365) */
  interface PalletPhalaWorldIncubationPalletCall extends Enum {
    readonly isStartIncubation: boolean;
    readonly asStartIncubation: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isFeedOriginOfShell: boolean;
    readonly asFeedOriginOfShell: {
      readonly collectionId: u32;
      readonly nftId: u32;
    } & Struct;
    readonly isHatchOriginOfShell: boolean;
    readonly asHatchOriginOfShell: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly defaultShellMetadata: Bytes;
    } & Struct;
    readonly isSetCanStartIncubationStatus: boolean;
    readonly asSetCanStartIncubationStatus: {
      readonly status: bool;
    } & Struct;
    readonly isSetShellCollectionId: boolean;
    readonly asSetShellCollectionId: {
      readonly collectionId: u32;
    } & Struct;
    readonly isSetShellPartsCollectionId: boolean;
    readonly asSetShellPartsCollectionId: {
      readonly collectionId: u32;
    } & Struct;
    readonly isSetOriginOfShellChosenParts: boolean;
    readonly asSetOriginOfShellChosenParts: {
      readonly collectionId: u32;
      readonly nftId: u32;
      readonly chosenParts: PalletPhalaWorldShellParts;
    } & Struct;
    readonly type: 'StartIncubation' | 'FeedOriginOfShell' | 'HatchOriginOfShell' | 'SetCanStartIncubationStatus' | 'SetShellCollectionId' | 'SetShellPartsCollectionId' | 'SetOriginOfShellChosenParts';
  }

  /** @name KhalaParachainRuntimeOriginCaller (366) */
  interface KhalaParachainRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Void' | 'CumulusXcm' | 'PolkadotXcm' | 'Council' | 'TechnicalCommittee';
  }

  /** @name FrameSupportDispatchRawOrigin (367) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name CumulusPalletXcmOrigin (368) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletXcmOrigin (369) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV1MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name PalletCollectiveRawOrigin (370) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name SpCoreVoid (372) */
  type SpCoreVoid = Null;

  /** @name PalletUtilityError (373) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletMultisigMultisig (375) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (377) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletProxyProxyDefinition (380) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: KhalaParachainRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (384) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (386) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletVestingReleases (389) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (390) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletSchedulerScheduledV3 (393) */
  interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: FrameSupportScheduleMaybeHashed;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: KhalaParachainRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (394) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletPreimageRequestStatus (395) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: Option<ITuple<[AccountId32, u128]>>;
    readonly isRequested: boolean;
    readonly asRequested: u32;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (398) */
  interface PalletPreimageError extends Enum {
    readonly isTooLarge: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooLarge' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PolkadotPrimitivesV2UpgradeRestriction (400) */
  interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (401) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (404) */
  interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (405) */
  interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (411) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (412) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (414) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (415) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (418) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (421) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (422) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (424) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: Weight;
    readonly weightRestrictDecay: Weight;
    readonly xcmpMaxIndividualWeight: Weight;
  }

  /** @name CumulusPalletXcmpQueueError (426) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name CumulusPalletXcmError (427) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (428) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (429) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (432) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (433) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (435) */
  interface XcmVersionedResponse extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Response;
    readonly isV1: boolean;
    readonly asV1: XcmV1Response;
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name PalletXcmVersionMigrationStage (441) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmError (442) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed';
  }

  /** @name PalletBalancesBalanceLock (444) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (445) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (448) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (450) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesError (451) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (453) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletAuthorshipUncleEntryItem (455) */
  interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean;
    readonly asInclusionHeight: u32;
    readonly isUncle: boolean;
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
    readonly type: 'InclusionHeight' | 'Uncle';
  }

  /** @name PalletAuthorshipError (457) */
  interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
  }

  /** @name PalletCollatorSelectionCandidateInfo (460) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (462) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewCandidates: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewCandidates' | 'Unknown' | 'Permission' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered';
  }

  /** @name SpCoreCryptoKeyTypeId (466) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (467) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletIdentityRegistration (471) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (479) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (481) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity';
  }

  /** @name PalletDemocracyPreimageStatus (485) */
  interface PalletDemocracyPreimageStatus extends Enum {
    readonly isMissing: boolean;
    readonly asMissing: u32;
    readonly isAvailable: boolean;
    readonly asAvailable: {
      readonly data: Bytes;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly since: u32;
      readonly expiry: Option<u32>;
    } & Struct;
    readonly type: 'Missing' | 'Available';
  }

  /** @name PalletDemocracyReferendumInfo (486) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (487) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposalHash: H256;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (488) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (489) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (492) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (493) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyReleases (496) */
  interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean;
    readonly type: 'V1';
  }

  /** @name PalletDemocracyError (497) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isDuplicatePreimage: boolean;
    readonly isNotImminent: boolean;
    readonly isTooEarly: boolean;
    readonly isImminent: boolean;
    readonly isPreimageMissing: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isPreimageInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooManyProposals: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'DuplicatePreimage' | 'NotImminent' | 'TooEarly' | 'Imminent' | 'PreimageMissing' | 'ReferendumInvalid' | 'PreimageInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooManyProposals' | 'VotingPeriodLow';
  }

  /** @name PalletCollectiveVotes (499) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (500) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletTreasuryProposal (501) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (503) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (504) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletBountiesBounty (505) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (506) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (508) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletLotteryLotteryConfig (509) */
  interface PalletLotteryLotteryConfig extends Struct {
    readonly price: u128;
    readonly start: u32;
    readonly length: u32;
    readonly delay: u32;
    readonly repeat: bool;
  }

  /** @name PalletLotteryError (513) */
  interface PalletLotteryError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isInProgress: boolean;
    readonly isAlreadyEnded: boolean;
    readonly isInvalidCall: boolean;
    readonly isAlreadyParticipating: boolean;
    readonly isTooManyCalls: boolean;
    readonly isEncodingFailed: boolean;
    readonly type: 'NotConfigured' | 'InProgress' | 'AlreadyEnded' | 'InvalidCall' | 'AlreadyParticipating' | 'TooManyCalls' | 'EncodingFailed';
  }

  /** @name PalletMembershipError (517) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletElectionsPhragmenSeatHolder (519) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (520) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (521) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletTipsOpenTip (522) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (524) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletChildBountiesChildBounty (525) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (526) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (527) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name SubbridgePalletsChainbridgePalletProposalVotes (530) */
  interface SubbridgePalletsChainbridgePalletProposalVotes extends Struct {
    readonly votesFor: Vec<AccountId32>;
    readonly votesAgainst: Vec<AccountId32>;
    readonly status: SubbridgePalletsChainbridgePalletProposalStatus;
    readonly expiry: u32;
  }

  /** @name SubbridgePalletsChainbridgePalletProposalStatus (531) */
  interface SubbridgePalletsChainbridgePalletProposalStatus extends Enum {
    readonly isInitiated: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly type: 'Initiated' | 'Approved' | 'Rejected';
  }

  /** @name SubbridgePalletsChainbridgePalletBridgeEvent (533) */
  interface SubbridgePalletsChainbridgePalletBridgeEvent extends Enum {
    readonly isFungibleTransfer: boolean;
    readonly asFungibleTransfer: ITuple<[u8, u64, U8aFixed, U256, Bytes]>;
    readonly isNonFungibleTransfer: boolean;
    readonly asNonFungibleTransfer: ITuple<[u8, u64, U8aFixed, Bytes, Bytes, Bytes]>;
    readonly isGenericTransfer: boolean;
    readonly asGenericTransfer: ITuple<[u8, u64, U8aFixed, Bytes]>;
    readonly type: 'FungibleTransfer' | 'NonFungibleTransfer' | 'GenericTransfer';
  }

  /** @name SubbridgePalletsChainbridgePalletError (535) */
  interface SubbridgePalletsChainbridgePalletError extends Enum {
    readonly isThresholdNotSet: boolean;
    readonly isInvalidChainId: boolean;
    readonly isInvalidThreshold: boolean;
    readonly isChainNotWhitelisted: boolean;
    readonly isChainAlreadyWhitelisted: boolean;
    readonly isResourceDoesNotExist: boolean;
    readonly isRelayerAlreadyExists: boolean;
    readonly isRelayerInvalid: boolean;
    readonly isMustBeRelayer: boolean;
    readonly isRelayerAlreadyVoted: boolean;
    readonly isProposalAlreadyExists: boolean;
    readonly isProposalDoesNotExist: boolean;
    readonly isProposalNotComplete: boolean;
    readonly isProposalAlreadyComplete: boolean;
    readonly isProposalExpired: boolean;
    readonly isInvalidFeeOption: boolean;
    readonly isExtractAssetFailed: boolean;
    readonly isExtractDestFailed: boolean;
    readonly isCannotPayAsFee: boolean;
    readonly isTransactFailed: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isFeeTooExpensive: boolean;
    readonly isCannotDetermineReservedLocation: boolean;
    readonly isDestUnrecognized: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isAssetConversionFailed: boolean;
    readonly isUnimplemented: boolean;
    readonly isCannotDepositAsset: boolean;
    readonly isBridgeEventOverflow: boolean;
    readonly type: 'ThresholdNotSet' | 'InvalidChainId' | 'InvalidThreshold' | 'ChainNotWhitelisted' | 'ChainAlreadyWhitelisted' | 'ResourceDoesNotExist' | 'RelayerAlreadyExists' | 'RelayerInvalid' | 'MustBeRelayer' | 'RelayerAlreadyVoted' | 'ProposalAlreadyExists' | 'ProposalDoesNotExist' | 'ProposalNotComplete' | 'ProposalAlreadyComplete' | 'ProposalExpired' | 'InvalidFeeOption' | 'ExtractAssetFailed' | 'ExtractDestFailed' | 'CannotPayAsFee' | 'TransactFailed' | 'InsufficientBalance' | 'FeeTooExpensive' | 'CannotDetermineReservedLocation' | 'DestUnrecognized' | 'AssetNotRegistered' | 'AssetConversionFailed' | 'Unimplemented' | 'CannotDepositAsset' | 'BridgeEventOverflow';
  }

  /** @name SubbridgePalletsXcmbridgePalletError (536) */
  interface SubbridgePalletsXcmbridgePalletError extends Enum {
    readonly isUnknownError: boolean;
    readonly isCannotReanchor: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isFeePaymentEmpty: boolean;
    readonly isExecutionFailed: boolean;
    readonly isUnknownTransfer: boolean;
    readonly isAssetNotFound: boolean;
    readonly isLocationInvertFailed: boolean;
    readonly isIllegalDestination: boolean;
    readonly isCannotDepositAsset: boolean;
    readonly isUnknownTransferType: boolean;
    readonly isUnimplemented: boolean;
    readonly type: 'UnknownError' | 'CannotReanchor' | 'UnweighableMessage' | 'FeePaymentEmpty' | 'ExecutionFailed' | 'UnknownTransfer' | 'AssetNotFound' | 'LocationInvertFailed' | 'IllegalDestination' | 'CannotDepositAsset' | 'UnknownTransferType' | 'Unimplemented';
  }

  /** @name SubbridgePalletsXtransferPalletError (537) */
  interface SubbridgePalletsXtransferPalletError extends Enum {
    readonly isTransactFailed: boolean;
    readonly isUnknownAsset: boolean;
    readonly isUnsupportedDest: boolean;
    readonly isUnhandledTransfer: boolean;
    readonly type: 'TransactFailed' | 'UnknownAsset' | 'UnsupportedDest' | 'UnhandledTransfer';
  }

  /** @name PhalaPalletsMqPalletError (539) */
  interface PhalaPalletsMqPalletError extends Enum {
    readonly isBadSender: boolean;
    readonly isBadSequence: boolean;
    readonly isBadDestination: boolean;
    readonly type: 'BadSender' | 'BadSequence' | 'BadDestination';
  }

  /** @name PhalaPalletsRegistryPalletWorkerInfo (541) */
  interface PhalaPalletsRegistryPalletWorkerInfo extends Struct {
    readonly pubkey: SpCoreSr25519Public;
    readonly ecdhPubkey: SpCoreSr25519Public;
    readonly runtimeVersion: u32;
    readonly lastUpdated: u64;
    readonly operator: Option<AccountId32>;
    readonly confidenceLevel: u8;
    readonly initialScore: Option<u32>;
    readonly features: Vec<u32>;
  }

  /** @name PhalaPalletsRegistryPalletError (542) */
  interface PhalaPalletsRegistryPalletError extends Enum {
    readonly isCannotHandleUnknownMessage: boolean;
    readonly isInvalidSender: boolean;
    readonly isInvalidPubKey: boolean;
    readonly isMalformedSignature: boolean;
    readonly isInvalidSignatureLength: boolean;
    readonly isInvalidSignature: boolean;
    readonly isUnknownContract: boolean;
    readonly isInvalidIASSigningCert: boolean;
    readonly isInvalidReport: boolean;
    readonly isInvalidQuoteStatus: boolean;
    readonly isBadIASReport: boolean;
    readonly isOutdatedIASReport: boolean;
    readonly isUnknownQuoteBodyFormat: boolean;
    readonly isInvalidRuntimeInfoHash: boolean;
    readonly isInvalidRuntimeInfo: boolean;
    readonly isInvalidInput: boolean;
    readonly isInvalidBenchReport: boolean;
    readonly isWorkerNotFound: boolean;
    readonly isInvalidGatekeeper: boolean;
    readonly isInvalidMasterPubkey: boolean;
    readonly isMasterKeyMismatch: boolean;
    readonly isMasterKeyUninitialized: boolean;
    readonly isGenesisBlockHashRejected: boolean;
    readonly isGenesisBlockHashAlreadyExists: boolean;
    readonly isGenesisBlockHashNotFound: boolean;
    readonly isPRuntimeRejected: boolean;
    readonly isPRuntimeAlreadyExists: boolean;
    readonly isPRuntimeNotFound: boolean;
    readonly isUnknownCluster: boolean;
    readonly isNotImplemented: boolean;
    readonly isCannotRemoveLastGatekeeper: boolean;
    readonly isMasterKeyInRotation: boolean;
    readonly isInvalidRotatedMasterPubkey: boolean;
    readonly isInvalidEndpointSigningTime: boolean;
    readonly type: 'CannotHandleUnknownMessage' | 'InvalidSender' | 'InvalidPubKey' | 'MalformedSignature' | 'InvalidSignatureLength' | 'InvalidSignature' | 'UnknownContract' | 'InvalidIASSigningCert' | 'InvalidReport' | 'InvalidQuoteStatus' | 'BadIASReport' | 'OutdatedIASReport' | 'UnknownQuoteBodyFormat' | 'InvalidRuntimeInfoHash' | 'InvalidRuntimeInfo' | 'InvalidInput' | 'InvalidBenchReport' | 'WorkerNotFound' | 'InvalidGatekeeper' | 'InvalidMasterPubkey' | 'MasterKeyMismatch' | 'MasterKeyUninitialized' | 'GenesisBlockHashRejected' | 'GenesisBlockHashAlreadyExists' | 'GenesisBlockHashNotFound' | 'PRuntimeRejected' | 'PRuntimeAlreadyExists' | 'PRuntimeNotFound' | 'UnknownCluster' | 'NotImplemented' | 'CannotRemoveLastGatekeeper' | 'MasterKeyInRotation' | 'InvalidRotatedMasterPubkey' | 'InvalidEndpointSigningTime';
  }

  /** @name PhalaPalletsMiningPalletMinerInfo (543) */
  interface PhalaPalletsMiningPalletMinerInfo extends Struct {
    readonly state: PhalaPalletsMiningPalletMinerState;
    readonly ve: u128;
    readonly v: u128;
    readonly vUpdatedAt: u64;
    readonly benchmark: PhalaPalletsMiningPalletBenchmark;
    readonly coolDownStart: u64;
    readonly stats: PhalaPalletsMiningPalletMinerStats;
  }

  /** @name PhalaPalletsMiningPalletMinerState (544) */
  interface PhalaPalletsMiningPalletMinerState extends Enum {
    readonly isReady: boolean;
    readonly isMiningIdle: boolean;
    readonly isUnused: boolean;
    readonly isMiningUnresponsive: boolean;
    readonly isMiningCoolingDown: boolean;
    readonly type: 'Ready' | 'MiningIdle' | 'Unused' | 'MiningUnresponsive' | 'MiningCoolingDown';
  }

  /** @name PhalaPalletsMiningPalletBenchmark (545) */
  interface PhalaPalletsMiningPalletBenchmark extends Struct {
    readonly pInit: u32;
    readonly pInstant: u32;
    readonly iterations: u64;
    readonly miningStartTime: u64;
    readonly challengeTimeLast: u64;
  }

  /** @name PhalaPalletsMiningPalletMinerStats (546) */
  interface PhalaPalletsMiningPalletMinerStats extends Struct {
    readonly totalReward: u128;
  }

  /** @name PhalaPalletsMiningPalletError (547) */
  interface PhalaPalletsMiningPalletError extends Enum {
    readonly isBadSender: boolean;
    readonly isInvalidMessage: boolean;
    readonly isWorkerNotRegistered: boolean;
    readonly isGatekeeperNotRegistered: boolean;
    readonly isDuplicateBoundMiner: boolean;
    readonly isBenchmarkMissing: boolean;
    readonly isMinerNotFound: boolean;
    readonly isMinerNotBound: boolean;
    readonly isMinerNotReady: boolean;
    readonly isMinerNotMining: boolean;
    readonly isWorkerNotBound: boolean;
    readonly isCoolDownNotReady: boolean;
    readonly isInsufficientStake: boolean;
    readonly isTooMuchStake: boolean;
    readonly isInternalErrorBadTokenomicParameters: boolean;
    readonly isDuplicateBoundWorker: boolean;
    readonly isBenchmarkTooLow: boolean;
    readonly isInternalErrorCannotStartWithExistingStake: boolean;
    readonly type: 'BadSender' | 'InvalidMessage' | 'WorkerNotRegistered' | 'GatekeeperNotRegistered' | 'DuplicateBoundMiner' | 'BenchmarkMissing' | 'MinerNotFound' | 'MinerNotBound' | 'MinerNotReady' | 'MinerNotMining' | 'WorkerNotBound' | 'CoolDownNotReady' | 'InsufficientStake' | 'TooMuchStake' | 'InternalErrorBadTokenomicParameters' | 'DuplicateBoundWorker' | 'BenchmarkTooLow' | 'InternalErrorCannotStartWithExistingStake';
  }

  /** @name PhalaPalletsStakepoolPalletPoolInfo (548) */
  interface PhalaPalletsStakepoolPalletPoolInfo extends Struct {
    readonly pid: u64;
    readonly owner: AccountId32;
    readonly payoutCommission: Option<Permill>;
    readonly ownerReward: u128;
    readonly cap: Option<u128>;
    readonly rewardAcc: u128;
    readonly totalShares: u128;
    readonly totalStake: u128;
    readonly freeStake: u128;
    readonly releasingStake: u128;
    readonly workers: Vec<SpCoreSr25519Public>;
    readonly withdrawQueue: Vec<PhalaPalletsStakepoolPalletWithdrawInfo>;
  }

  /** @name PhalaPalletsStakepoolPalletWithdrawInfo (551) */
  interface PhalaPalletsStakepoolPalletWithdrawInfo extends Struct {
    readonly user: AccountId32;
    readonly shares: u128;
    readonly startTime: u64;
  }

  /** @name PhalaPalletsStakepoolPalletUserStakeInfo (553) */
  interface PhalaPalletsStakepoolPalletUserStakeInfo extends Struct {
    readonly user: AccountId32;
    readonly locked: u128;
    readonly shares: u128;
    readonly availableRewards: u128;
    readonly rewardDebt: u128;
  }

  /** @name PhalaPalletsStakepoolPalletError (556) */
  interface PhalaPalletsStakepoolPalletError extends Enum {
    readonly isWorkerNotRegistered: boolean;
    readonly isBenchmarkMissing: boolean;
    readonly isWorkerExists: boolean;
    readonly isWorkerDoesNotExist: boolean;
    readonly isWorkerInAnotherPool: boolean;
    readonly isUnauthorizedOperator: boolean;
    readonly isUnauthorizedPoolOwner: boolean;
    readonly isInadequateCapacity: boolean;
    readonly isStakeExceedsCapacity: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolIsBusy: boolean;
    readonly isInsufficientContribution: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isPoolStakeNotFound: boolean;
    readonly isInsufficientFreeStake: boolean;
    readonly isInvalidWithdrawalAmount: boolean;
    readonly isFailedToBindMinerAndWorker: boolean;
    readonly isInternalSubsidyPoolCannotWithdraw: boolean;
    readonly isPoolBankrupt: boolean;
    readonly isNoRewardToClaim: boolean;
    readonly isFeatureNotEnabled: boolean;
    readonly isWorkersExceedLimit: boolean;
    readonly isCannotRestartWithLessStake: boolean;
    readonly isInvalidForceRewardAmount: boolean;
    readonly isNotInContributeWhitelist: boolean;
    readonly isAlreadyInContributeWhitelist: boolean;
    readonly isExceedWhitelistMaxLen: boolean;
    readonly isNoWhitelistCreated: boolean;
    readonly isExceedMaxDescriptionLen: boolean;
    readonly type: 'WorkerNotRegistered' | 'BenchmarkMissing' | 'WorkerExists' | 'WorkerDoesNotExist' | 'WorkerInAnotherPool' | 'UnauthorizedOperator' | 'UnauthorizedPoolOwner' | 'InadequateCapacity' | 'StakeExceedsCapacity' | 'PoolDoesNotExist' | 'PoolIsBusy' | 'InsufficientContribution' | 'InsufficientBalance' | 'PoolStakeNotFound' | 'InsufficientFreeStake' | 'InvalidWithdrawalAmount' | 'FailedToBindMinerAndWorker' | 'InternalSubsidyPoolCannotWithdraw' | 'PoolBankrupt' | 'NoRewardToClaim' | 'FeatureNotEnabled' | 'WorkersExceedLimit' | 'CannotRestartWithLessStake' | 'InvalidForceRewardAmount' | 'NotInContributeWhitelist' | 'AlreadyInContributeWhitelist' | 'ExceedWhitelistMaxLen' | 'NoWhitelistCreated' | 'ExceedMaxDescriptionLen';
  }

  /** @name PalletAssetsAssetDetails (557) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsAssetAccount (559) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (560) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (562) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (563) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (565) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isNoProvider: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'NoProvider' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn';
  }

  /** @name AssetsRegistryAssetRegistryInfo (566) */
  interface AssetsRegistryAssetRegistryInfo extends Struct {
    readonly location: XcmV1MultiLocation;
    readonly reserveLocation: Option<XcmV1MultiLocation>;
    readonly enabledBridges: Vec<AssetsRegistryXBridge>;
    readonly properties: AssetsRegistryAssetProperties;
    readonly executionPrice: Option<u128>;
  }

  /** @name AssetsRegistryXBridge (568) */
  interface AssetsRegistryXBridge extends Struct {
    readonly config: AssetsRegistryXBridgeConfig;
    readonly metadata: Bytes;
  }

  /** @name AssetsRegistryXBridgeConfig (569) */
  interface AssetsRegistryXBridgeConfig extends Enum {
    readonly isXcmp: boolean;
    readonly isChainBridge: boolean;
    readonly asChainBridge: {
      readonly chainId: u8;
      readonly resourceId: U8aFixed;
      readonly reserveAccount: U8aFixed;
      readonly isMintable: bool;
    } & Struct;
    readonly type: 'Xcmp' | 'ChainBridge';
  }

  /** @name AssetsRegistryError (570) */
  interface AssetsRegistryError extends Enum {
    readonly isAssetAlreadyExist: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isBridgeAlreadyEnabled: boolean;
    readonly isBridgeAlreadyDisabled: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isDuplictedLocation: boolean;
    readonly isLocationTooLong: boolean;
    readonly type: 'AssetAlreadyExist' | 'AssetNotRegistered' | 'BridgeAlreadyEnabled' | 'BridgeAlreadyDisabled' | 'FailedToTransactAsset' | 'DuplictedLocation' | 'LocationTooLong';
  }

  /** @name PalletUniquesCollectionDetails (571) */
  interface PalletUniquesCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemDetails (574) */
  interface PalletUniquesItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approved: Option<AccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PalletUniquesCollectionMetadata (575) */
  interface PalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemMetadata (576) */
  interface PalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesError (580) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name RmrkTraitsCollectionCollectionInfo (581) */
  interface RmrkTraitsCollectionCollectionInfo extends Struct {
    readonly issuer: AccountId32;
    readonly metadata: Bytes;
    readonly max: Option<u32>;
    readonly symbol: Bytes;
    readonly nftsCount: u32;
  }

  /** @name RmrkTraitsNftNftInfo (582) */
  interface RmrkTraitsNftNftInfo extends Struct {
    readonly owner: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    readonly royalty: Option<RmrkTraitsNftRoyaltyInfo>;
    readonly metadata: Bytes;
    readonly equipped: bool;
    readonly pending: bool;
    readonly transferable: bool;
  }

  /** @name RmrkTraitsNftRoyaltyInfo (584) */
  interface RmrkTraitsNftRoyaltyInfo extends Struct {
    readonly recipient: AccountId32;
    readonly amount: Permill;
  }

  /** @name RmrkTraitsResourceResourceInfo (587) */
  interface RmrkTraitsResourceResourceInfo extends Struct {
    readonly id: u32;
    readonly resource: RmrkTraitsResourceResourceTypes;
    readonly pending: bool;
    readonly pendingRemoval: bool;
  }

  /** @name RmrkTraitsNftNftChild (590) */
  interface RmrkTraitsNftNftChild extends Struct {
    readonly collectionId: u32;
    readonly nftId: u32;
  }

  /** @name PhantomType (591) */
  interface PhantomType extends Vec<RmrkTraitsPropertyPropertyInfo> {}

  /** @name RmrkTraitsPropertyPropertyInfo (592) */
  interface RmrkTraitsPropertyPropertyInfo extends Struct {
    readonly key: Bytes;
    readonly value: Bytes;
  }

  /** @name PalletRmrkCoreError (594) */
  interface PalletRmrkCoreError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isTooLong: boolean;
    readonly isNoAvailableCollectionId: boolean;
    readonly isNoAvailableResourceId: boolean;
    readonly isMetadataNotSet: boolean;
    readonly isRecipientNotSet: boolean;
    readonly isNoAvailableNftId: boolean;
    readonly isNotInRange: boolean;
    readonly isRoyaltyNotSet: boolean;
    readonly isCollectionUnknown: boolean;
    readonly isNoPermission: boolean;
    readonly isNoWitness: boolean;
    readonly isCollectionNotEmpty: boolean;
    readonly isCollectionFullOrLocked: boolean;
    readonly isCannotSendToDescendentOrSelf: boolean;
    readonly isResourceAlreadyExists: boolean;
    readonly isNftAlreadyExists: boolean;
    readonly isEmptyResource: boolean;
    readonly isTooManyRecursions: boolean;
    readonly isNftIsLocked: boolean;
    readonly isCannotAcceptNonOwnedNft: boolean;
    readonly isCannotRejectNonOwnedNft: boolean;
    readonly isCannotRejectNonPendingNft: boolean;
    readonly isResourceDoesntExist: boolean;
    readonly isResourceNotPending: boolean;
    readonly isNonTransferable: boolean;
    readonly isCannotSendEquippedItem: boolean;
    readonly isCannotAcceptToNewOwner: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'TooLong' | 'NoAvailableCollectionId' | 'NoAvailableResourceId' | 'MetadataNotSet' | 'RecipientNotSet' | 'NoAvailableNftId' | 'NotInRange' | 'RoyaltyNotSet' | 'CollectionUnknown' | 'NoPermission' | 'NoWitness' | 'CollectionNotEmpty' | 'CollectionFullOrLocked' | 'CannotSendToDescendentOrSelf' | 'ResourceAlreadyExists' | 'NftAlreadyExists' | 'EmptyResource' | 'TooManyRecursions' | 'NftIsLocked' | 'CannotAcceptNonOwnedNft' | 'CannotRejectNonOwnedNft' | 'CannotRejectNonPendingNft' | 'ResourceDoesntExist' | 'ResourceNotPending' | 'NonTransferable' | 'CannotSendEquippedItem' | 'CannotAcceptToNewOwner';
  }

  /** @name RmrkTraitsBaseBaseInfo (595) */
  interface RmrkTraitsBaseBaseInfo extends Struct {
    readonly issuer: AccountId32;
    readonly baseType: Bytes;
    readonly symbol: Bytes;
  }

  /** @name PalletRmrkEquipError (598) */
  interface PalletRmrkEquipError extends Enum {
    readonly isPermissionError: boolean;
    readonly isItemDoesntExist: boolean;
    readonly isEquipperDoesntExist: boolean;
    readonly isNoAvailableBaseId: boolean;
    readonly isNoAvailablePartId: boolean;
    readonly isMustBeDirectParent: boolean;
    readonly isPartDoesntExist: boolean;
    readonly isBaseDoesntExist: boolean;
    readonly isCantEquipFixedPart: boolean;
    readonly isNoResourceForThisBaseFoundOnNft: boolean;
    readonly isCollectionNotEquippable: boolean;
    readonly isItemHasNoResourceToEquipThere: boolean;
    readonly isNoEquippableOnFixedPart: boolean;
    readonly isNeedsDefaultThemeFirst: boolean;
    readonly isItemAlreadyEquipped: boolean;
    readonly isSlotAlreadyEquipped: boolean;
    readonly isSlotNotEquipped: boolean;
    readonly isUnknownError: boolean;
    readonly isExceedsMaxPartsPerBase: boolean;
    readonly isTooManyProperties: boolean;
    readonly isItemNotEquipped: boolean;
    readonly isUnequipperMustOwnEitherItemOrEquipper: boolean;
    readonly type: 'PermissionError' | 'ItemDoesntExist' | 'EquipperDoesntExist' | 'NoAvailableBaseId' | 'NoAvailablePartId' | 'MustBeDirectParent' | 'PartDoesntExist' | 'BaseDoesntExist' | 'CantEquipFixedPart' | 'NoResourceForThisBaseFoundOnNft' | 'CollectionNotEquippable' | 'ItemHasNoResourceToEquipThere' | 'NoEquippableOnFixedPart' | 'NeedsDefaultThemeFirst' | 'ItemAlreadyEquipped' | 'SlotAlreadyEquipped' | 'SlotNotEquipped' | 'UnknownError' | 'ExceedsMaxPartsPerBase' | 'TooManyProperties' | 'ItemNotEquipped' | 'UnequipperMustOwnEitherItemOrEquipper';
  }

  /** @name PalletRmrkMarketListInfo (599) */
  interface PalletRmrkMarketListInfo extends Struct {
    readonly listedBy: AccountId32;
    readonly amount: u128;
    readonly expires: Option<u32>;
  }

  /** @name PalletRmrkMarketOffer (601) */
  interface PalletRmrkMarketOffer extends Struct {
    readonly maker: AccountId32;
    readonly amount: u128;
    readonly expires: Option<u32>;
  }

  /** @name PalletRmrkMarketError (602) */
  interface PalletRmrkMarketError extends Enum {
    readonly isNoPermission: boolean;
    readonly isTokenNotForSale: boolean;
    readonly isCannotWithdrawOffer: boolean;
    readonly isCannotUnlistToken: boolean;
    readonly isCannotOfferOnOwnToken: boolean;
    readonly isCannotBuyOwnToken: boolean;
    readonly isUnknownOffer: boolean;
    readonly isCannotListNftOwnedByNft: boolean;
    readonly isTokenDoesNotExist: boolean;
    readonly isOfferTooLow: boolean;
    readonly isAlreadyOffered: boolean;
    readonly isOfferHasExpired: boolean;
    readonly isListingHasExpired: boolean;
    readonly isPriceDiffersFromExpected: boolean;
    readonly isNonTransferable: boolean;
    readonly type: 'NoPermission' | 'TokenNotForSale' | 'CannotWithdrawOffer' | 'CannotUnlistToken' | 'CannotOfferOnOwnToken' | 'CannotBuyOwnToken' | 'UnknownOffer' | 'CannotListNftOwnedByNft' | 'TokenDoesNotExist' | 'OfferTooLow' | 'AlreadyOffered' | 'OfferHasExpired' | 'ListingHasExpired' | 'PriceDiffersFromExpected' | 'NonTransferable';
  }

  /** @name PalletPhalaWorldPreorderInfo (603) */
  interface PalletPhalaWorldPreorderInfo extends Struct {
    readonly owner: AccountId32;
    readonly race: PalletPhalaWorldRaceType;
    readonly career: PalletPhalaWorldCareerType;
    readonly metadata: Bytes;
  }

  /** @name PalletPhalaWorldNftSaleInfo (605) */
  interface PalletPhalaWorldNftSaleInfo extends Struct {
    readonly raceCount: u32;
    readonly raceForSaleCount: u32;
    readonly raceGiveawayCount: u32;
    readonly raceReservedCount: u32;
  }

  /** @name PalletPhalaWorldNftSalePalletError (606) */
  interface PalletPhalaWorldNftSalePalletError extends Enum {
    readonly isWorldClockAlreadySet: boolean;
    readonly isSpiritClaimNotAvailable: boolean;
    readonly isRareOriginOfShellPurchaseNotAvailable: boolean;
    readonly isPrimeOriginOfShellPurchaseNotAvailable: boolean;
    readonly isPreorderOriginOfShellNotAvailable: boolean;
    readonly isPreorderClaimNotAvailable: boolean;
    readonly isSpiritAlreadyClaimed: boolean;
    readonly isInvalidSpiritClaim: boolean;
    readonly isInvalidMetadata: boolean;
    readonly isMustOwnSpiritToPurchase: boolean;
    readonly isOriginOfShellAlreadyPurchased: boolean;
    readonly isBelowMinimumBalanceThreshold: boolean;
    readonly isWhitelistVerificationFailed: boolean;
    readonly isInvalidPurchase: boolean;
    readonly isNoAvailablePreorderId: boolean;
    readonly isPreorderClaimNotDetected: boolean;
    readonly isRefundClaimNotDetected: boolean;
    readonly isPreorderIsPending: boolean;
    readonly isPreordersCorrupted: boolean;
    readonly isNotPreorderOwner: boolean;
    readonly isRaceMintMaxReached: boolean;
    readonly isOverlordNotSet: boolean;
    readonly isRequireOverlordAccount: boolean;
    readonly isInvalidStatusType: boolean;
    readonly isWrongRarityType: boolean;
    readonly isSpiritCollectionNotSet: boolean;
    readonly isSpiritCollectionIdAlreadySet: boolean;
    readonly isSpiritsMetadataNotSet: boolean;
    readonly isOriginOfShellCollectionNotSet: boolean;
    readonly isOriginOfShellCollectionIdAlreadySet: boolean;
    readonly isOriginOfShellInventoryCorrupted: boolean;
    readonly isOriginOfShellInventoryAlreadySet: boolean;
    readonly isOriginOfShellsMetadataNotSet: boolean;
    readonly isKeyTooLong: boolean;
    readonly isNoAvailableRaceGivewayLeft: boolean;
    readonly isNoAvailableRaceReservedLeft: boolean;
    readonly isWrongNftSaleType: boolean;
    readonly isNoAvailableResourceId: boolean;
    readonly isNoAvailableNftId: boolean;
    readonly isValueNotDetected: boolean;
    readonly isPayeeNotSet: boolean;
    readonly type: 'WorldClockAlreadySet' | 'SpiritClaimNotAvailable' | 'RareOriginOfShellPurchaseNotAvailable' | 'PrimeOriginOfShellPurchaseNotAvailable' | 'PreorderOriginOfShellNotAvailable' | 'PreorderClaimNotAvailable' | 'SpiritAlreadyClaimed' | 'InvalidSpiritClaim' | 'InvalidMetadata' | 'MustOwnSpiritToPurchase' | 'OriginOfShellAlreadyPurchased' | 'BelowMinimumBalanceThreshold' | 'WhitelistVerificationFailed' | 'InvalidPurchase' | 'NoAvailablePreorderId' | 'PreorderClaimNotDetected' | 'RefundClaimNotDetected' | 'PreorderIsPending' | 'PreordersCorrupted' | 'NotPreorderOwner' | 'RaceMintMaxReached' | 'OverlordNotSet' | 'RequireOverlordAccount' | 'InvalidStatusType' | 'WrongRarityType' | 'SpiritCollectionNotSet' | 'SpiritCollectionIdAlreadySet' | 'SpiritsMetadataNotSet' | 'OriginOfShellCollectionNotSet' | 'OriginOfShellCollectionIdAlreadySet' | 'OriginOfShellInventoryCorrupted' | 'OriginOfShellInventoryAlreadySet' | 'OriginOfShellsMetadataNotSet' | 'KeyTooLong' | 'NoAvailableRaceGivewayLeft' | 'NoAvailableRaceReservedLeft' | 'WrongNftSaleType' | 'NoAvailableResourceId' | 'NoAvailableNftId' | 'ValueNotDetected' | 'PayeeNotSet';
  }

  /** @name PalletPhalaWorldFoodInfo (607) */
  interface PalletPhalaWorldFoodInfo extends Struct {
    readonly era: u64;
    readonly originOfShellsFed: Vec<ITuple<[u32, u32]>>;
  }

  /** @name PalletPhalaWorldIncubationPalletError (610) */
  interface PalletPhalaWorldIncubationPalletError extends Enum {
    readonly isStartIncubationNotAvailable: boolean;
    readonly isHatchingInProgress: boolean;
    readonly isCannotHatchOriginOfShell: boolean;
    readonly isCannotSendFoodToOriginOfShell: boolean;
    readonly isDeprecatedMaxFoodFedLimitReached: boolean;
    readonly isCannotSetOriginOfShellChosenParts: boolean;
    readonly isAlreadySentFoodTwice: boolean;
    readonly isDeprecatedNoFoodAvailable: boolean;
    readonly isNotOwner: boolean;
    readonly isNoPermission: boolean;
    readonly isWrongCollectionId: boolean;
    readonly isDeprecatedNoHatchTimeDetected: boolean;
    readonly isShellCollectionIdAlreadySet: boolean;
    readonly isShellCollectionIdNotSet: boolean;
    readonly isRaceNotDetected: boolean;
    readonly isCareerNotDetected: boolean;
    readonly isRarityTypeNotDetected: boolean;
    readonly isGenerationNotDetected: boolean;
    readonly isFoodInfoUpdateError: boolean;
    readonly isShellPartsCollectionIdAlreadySet: boolean;
    readonly isShellPartsCollectionIdNotSet: boolean;
    readonly isChosenPartsNotDetected: boolean;
    readonly isMissingShellPartMetadata: boolean;
    readonly type: 'StartIncubationNotAvailable' | 'HatchingInProgress' | 'CannotHatchOriginOfShell' | 'CannotSendFoodToOriginOfShell' | 'DeprecatedMaxFoodFedLimitReached' | 'CannotSetOriginOfShellChosenParts' | 'AlreadySentFoodTwice' | 'DeprecatedNoFoodAvailable' | 'NotOwner' | 'NoPermission' | 'WrongCollectionId' | 'DeprecatedNoHatchTimeDetected' | 'ShellCollectionIdAlreadySet' | 'ShellCollectionIdNotSet' | 'RaceNotDetected' | 'CareerNotDetected' | 'RarityTypeNotDetected' | 'GenerationNotDetected' | 'FoodInfoUpdateError' | 'ShellPartsCollectionIdAlreadySet' | 'ShellPartsCollectionIdNotSet' | 'ChosenPartsNotDetected' | 'MissingShellPartMetadata';
  }

  /** @name SpRuntimeMultiSignature (612) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (613) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (614) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (617) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (618) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (619) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (620) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (623) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (624) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PhalaPalletsMqCheckSeqCheckMqSequence (625) */
  type PhalaPalletsMqCheckSeqCheckMqSequence = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (626) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name KhalaParachainRuntimeRuntime (627) */
  type KhalaParachainRuntimeRuntime = Null;

} // declare module
