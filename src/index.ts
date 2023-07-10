import {
  ConnectMessage,
  ConnectRejMessage,
  ConnectResMessage,
} from '../../../apps/wallet/src/messaging/index.js';

export type MessageType =
  | ConnectMessage
  | ConnectResMessage
  | ConnectRejMessage;

export type WindowMessageType = MessageType & {
  forwarded?: boolean;
  extensionId: string;
};

export * from './web3modal.js';
export * from './proof_request_data.js';
export * from './provider/provider.js';
export * from './hooks/index.js';
export * from './data/asset.js';
export * from './data/types.js';
export * from './data/walletconnect.js';
export * from './data/coins/dai.js';

export { type WalletConnectError } from '../../../apps/wallet/src/messaging/dappRequest/index.js';

export {
  GrumpkinAddress,
  type AssetValue,
  EthAddress,
  ProofId,
} from 'barretenberg';
