import {
  ConnectMessage,
  ConnectRejMessage,
  ConnectResMessage,
} from './data/connect.js';

export type MessageType =
  | ConnectMessage
  | ConnectResMessage
  | ConnectRejMessage;

export type WindowMessageType = MessageType & {
  forwarded?: boolean;
  extensionId: string;
};

export * from './web3modal.js';
export * from './provider/provider.js';
export * from './hooks/index.js';
export * from './data/asset.js';
export * from './data/types.js';
export * from './data/walletconnect.js';
export * from './data/coins/dai.js';
export * from './data/connect.js';
export * from './client/puzzle_wallet_client.js'
