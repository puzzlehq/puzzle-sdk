import { hasInjectedConnection } from '../utils/clientInfo.js';
import { Balance, Network } from '@puzzlehq/types';
import { GenericRequest } from '../data/types.js';
import { SdkError } from '../data/errors.js';

export type GetBalancesRequest = {
  address?: string;
  network?: Network;
  multisig?: boolean;
};

export type GetBalancesResponse = {
  balances: Balance[];
};

export const getBalance = async ({
  address,
  network,
  multisig,
}: GetBalancesRequest): Promise<GetBalancesResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`getBalance ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.getBalance?.query)
    throw new Error('getBalance.query not found!');

  const query: GenericRequest = {
    method: 'getBalance',
    params: {
      address,
      network,
      multisig,
    } as GetBalancesRequest,
  };

  try {
    const response: GetBalancesResponse =
      await window.aleo.puzzleWalletClient.getBalance.query(query);
    return response;
  } catch (e) {
    console.error('getBalance error', e);
    throw e
  }
};
