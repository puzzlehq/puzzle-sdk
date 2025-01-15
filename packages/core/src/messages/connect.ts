import { hasInjectedConnection } from '../utils/clientInfo.js';
import { ProgramIdPermissions } from '../data/types.js';
import { Balance, Network } from '@puzzlehq/types';
import { SdkError } from '../data/errors.js';

export type ConnectRequestParams = {
  dAppInfo: {
    name?: string;
    description?: string;
    iconUrl?: string;
  };
  permissions: {
    programIds: ProgramIdPermissions;
  };
};

export type Connection = ConnectRequestParams & {
  dAppInfo: {
    hostname: string;
  };
  expiry: Date;
};

export type ConnectionWithAccountInfo = Connection & {
  address: string;
  network: Network;
  balances: Balance[];
};

export type ConnectRequest = {
  method: 'connect';
  params: ConnectRequestParams;
};

export type ConnectResponse = {
  connection?: ConnectionWithAccountInfo;
  error?: string;
};

export const connect = async (request: ConnectRequestParams) => {
  if (!hasInjectedConnection())
    throw new Error(SdkError.PuzzleWalletNotDetected);
  if (!window.aleo.puzzleWalletClient.connect?.mutate)
    throw new Error('connect.mutate not found!');

  try {
    const connectRequest: ConnectRequest = {
      method: 'connect',
      params: request,
    };
    const connectResponse: ConnectResponse =
      await window.aleo.puzzleWalletClient.connect.mutate(connectRequest);
    return connectResponse;
  } catch (e) {
    console.error('connect error', e);
    return { error: (e as Error).message };
  }
};
