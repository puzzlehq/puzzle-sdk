import { getMessage } from '@extend-chrome/messages';
import { PuzzleAccount } from './types.js';
import { ProposalTypes } from '@walletconnect/types';

export type ConnectData = {
  wc: {
    uri: string;
    requestId?: string;
    sessionTopic?: string;
    proposal?: ProposalTypes.Struct;
  };
};

export type ConnectMessage = {
  type: 'CONNECT_DAPP';
  data: ConnectData;
  sender?: string;
};

export type ConnectPOMessage = {
  type: 'CONNECT_DAPP_PO';
  data: {
    accepted: boolean;
  };
};

export type ConnectResMessage = {
  type: 'CONNECT_DAPP_RES';
  data: {
    account: PuzzleAccount;
  };
};

export type ConnectRejMessage = {
  type: 'CONNECT_DAPP_REJ';
  data: {
    error: string;
  };
};

// Content script -> Background script
export const [
  sendConnectRequestToBS,
  onConnectRequestToBS,
  waitForConnectRequestToBS,
] = getMessage<ConnectMessage>('CONNECT_BS');

// Background script -> Popup
export const [
  sendConnectRequestToPO,
  onConnectRequestToPO,
  waitForConnectRequestToPO,
] = getMessage<ConnectMessage>('CONNECT_PO');

// Popup -> Background script
export const [
  sendConnectResponseToBS,
  onConnectResponseToBS,
  waitForConnectResponseToBS,
] = getMessage<ConnectPOMessage>('CONNECT_RESPONSE_BS');

// Background script -> Content script
export const [
  sendConnectResponseToCS,
  onConnectResponseToCS,
  waitForConnectResponseToCS,
] = getMessage<ConnectResMessage | ConnectRejMessage>('CONNECT_RESPONSE_CS');
