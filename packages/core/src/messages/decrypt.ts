import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { GenericRequest } from '../data/types.js';
import { Network } from '@puzzlehq/types';

export type DecryptRequest = {
  ciphertexts: string[];
  address?: string;
  network?: Network;
};

export type DecryptResponse = {
  plaintexts: string[];
};

export const decrypt = async ({
  ciphertexts,
  network,
  address,
}: DecryptRequest): Promise<DecryptResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`decrypt ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.decrypt?.query)
    throw new Error('decrypt.query not found!');

  const query: GenericRequest = {
    method: 'decrypt',
    params: {
      ciphertexts: ciphertexts,
      address,
      network,
    } as DecryptRequest,
  };

  try {
    const response: DecryptResponse =
      await window.aleo.puzzleWalletClient.decrypt.query(query);
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('decrypt error', e);
    throw e
  }
};
