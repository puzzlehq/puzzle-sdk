import { hasInjectedConnection } from '../utils/clientInfo.js';
import { GenericRequest } from '../data/types.js';
import { SdkError } from '../data/errors.js';

export type CreateSharedStateResponse = {
  data: {
    seed: string;
    address: string;
  };
};

export const createSharedState =
  async (): Promise<CreateSharedStateResponse> => {
    if (!hasInjectedConnection())
      throw new Error(`createSharedState ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.createSharedState?.mutate)
      throw new Error('createSharedState.mutate not found!');

    const query: GenericRequest = {
      method: 'createSharedState',
    };

    try {
      const response: CreateSharedStateResponse =
        await window.aleo.puzzleWalletClient.createSharedState.mutate(query);
      return response;
    } catch (e) {
      console.error('createSharedState error', e);
      throw e
    }
  };
