import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { GenericRequest } from '../data/types.js';

export type ImportSharedStateRequest = {
  seed: string;
};

export type ImportSharedStateResponse = {
  data: {
    address: string;
    seed: string;
  };
};

export const importSharedState = async ({
  seed,
}: ImportSharedStateRequest): Promise<ImportSharedStateResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`importSharedState ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.importSharedState?.mutate)
    throw new Error('importSharedState.mutate not found!');

  const query: GenericRequest = {
    method: 'importSharedState',
    params: {
      seed,
    } as ImportSharedStateRequest,
  };

  try {
    const response: ImportSharedStateResponse =
      await window.aleo.puzzleWalletClient.importSharedState.mutate(query);
    return response;
  } catch (e) {
    console.error('importSharedState error', e);
    throw e
  }
};
