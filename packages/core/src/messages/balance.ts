import { hasInjectedConnection } from '../utils/clientInfo.js';
import { Balance, Network } from '@puzzlehq/types';
import { GenericRequest } from '../data/types.js';
import { SdkError } from '../data/errors.js';

export type GetBalancesRequest = {
  address?: string;
  network?: Network
};

export type GetBalancesResponse = {
  balances?: Balance[];
  error?: string;
};

export const getBalance = async ({address,network}: GetBalancesRequest): Promise<GetBalancesResponse> => {
  if (!hasInjectedConnection()) throw new Error(SdkError.PuzzleWalletNotDetected);
  if (!window.aleo.puzzleWalletClient.getBalance?.query) throw new Error('getBalance.query not found!')

  const query: GenericRequest = {
    request: {
      method: 'getBalance',
      params: {
        address,
        network,
      } as GetBalancesRequest,
    },
  };
  
  try {
    const response: GetBalancesResponse =
      await window.aleo.puzzleWalletClient.getBalance.query(query);
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getBalance error', e);
    return { error };
  }
}