import { hasInjectedConnection } from '../utils/clientInfo.js';
import { ProgramIdPermissions } from '../data/types.js';
import { Balance, Network } from '@puzzlehq/types';
import { SdkError } from '../data/errors.js';

export type ConnectRequest = {
  dAppInfo: {
    name?: string,
    description?: string,
    iconUrl?: string,
  },
  permissions: {
    programIds: ProgramIdPermissions 
  }
}

export type Connection = ConnectRequest & {
  dAppInfo: {
    hostname: string
  },
  expiry: Date;
};

export type ConnectionWithAccountInfo = Connection & {
  address: string,
  network: Network,
  balances: Balance[],
}

export type ConnectResponse = {
  connection?: ConnectionWithAccountInfo;
  error?: string
}

export const connect = async (request: ConnectRequest) => {
  if (!hasInjectedConnection()) throw new Error(SdkError.PuzzleWalletNotDetected);
  if (!window.aleo.puzzleWalletClient.connect.mutate) throw new Error('Connect method not found!');

  try {
    const connectResponse: ConnectResponse = await window.aleo.puzzleWalletClient.connect.mutate(request);
    return connectResponse
  } catch (e) {
    console.error('connect error', e);
    return { error: (e as Error).message };
  }
};
