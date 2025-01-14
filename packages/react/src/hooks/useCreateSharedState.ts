import {
  CreateSharedStateResponse,
  GenericRequest,
  SdkError
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useCreateSharedState = () => {
  const { isConnected } = useIsConnected();
  
  const query: GenericRequest = {
    method: 'createSharedState',
  };

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<CreateSharedStateResponse | undefined>(
    query,
    async (params) => {
      if (isConnected) {
        const response: CreateSharedStateResponse = await window.aleo.puzzleWalletClient.createSharedState.mutate(params);
        return response
      } else {
        return { error: SdkError.NotConnected }
      }
    },
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: CreateSharedStateResponse | undefined = wc_data;

  const createSharedState = async () => {
    return await request();
  };

  return { createSharedState, data: response?.data, loading, error };
};
