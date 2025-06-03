import { GenericRequest, PuzzleAccount } from '../data/types.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';

export type GetSelectedAccountResponse = {
  account: PuzzleAccount;
};

export const getAccount = async (): Promise<GetSelectedAccountResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`getAccount ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.getSelectedAccount?.query)
    throw new Error('getSelectedAccount not found!');

  const query: GenericRequest = {
    method: 'getSelectedAccount',
  };

  try {
    const response: GetSelectedAccountResponse =
      await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
    return response;
  } catch (e) {
    console.error('getAccount error', e);
    throw e
  }
};
