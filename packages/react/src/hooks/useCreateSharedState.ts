import { SessionTypes } from '@walletconnect/types';
import {
  CreateSharedStateResponse,
  hasDesktopConnection,
} from '@puzzlehq/sdk-core';
import { useExtensionRequest, useRequest } from './wc/useRequest.js';
import { useSession } from './wc/useSession.js';

export const useCreateSharedState = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const useRequestFunction = hasDesktopConnection()
    ? useExtensionRequest
    : useRequest;

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequestFunction<CreateSharedStateResponse | undefined>(
    {
      topic: session?.topic ?? '',
      chainId: 'aleo:3',
      request: {
        jsonrpc: '2.0',
        method: 'createSharedState',
        params: {},
      },
    },
    (params) => window.aleo.puzzleWalletClient.createSharedState.mutate(params),
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
