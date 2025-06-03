import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { GenericRequest } from '../data/types.js';
import { Network } from '@puzzlehq/types';

export type SignatureRequest = {
  message: string;
  address?: string;
  network?: Network;
};

export type SignatureResponse = {
  signature: string;
};

export const requestSignature = async ({
  message,
  address,
  network,
}: SignatureRequest): Promise<SignatureResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`requestSignature ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.requestSignature?.mutate)
    throw new Error('requestSignature.mutate not found!');

  const req: GenericRequest = {
    method: 'requestSignature',
    params: {
      message,
      address,
      network,
    } as SignatureRequest,
  };

  try {
    const response: SignatureResponse =
      await window.aleo.puzzleWalletClient.requestSignature.mutate(req);
    return response;
  } catch (e) {
    console.error('signature error', e);
    throw e
  }
};
