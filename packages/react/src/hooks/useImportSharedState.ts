import { SessionTypes } from '@walletconnect/types';
import {
  ImportSharedStateRequest,
  ImportSharedStateResponse,
  hasDesktopConnection,
} from '@puzzlehq/sdk-core';
import { useExtensionRequest, useRequest } from './wc/useRequest.js';
import { useSession } from './wc/useSession.js';

export const useImportSharedState = (seed?: string) => {
  const session: SessionTypes.Struct | undefined = useSession();

  const useRequestFunction = hasDesktopConnection()
    ? useExtensionRequest
    : useRequest;

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequestFunction<ImportSharedStateResponse | undefined>(
    {
      topic: session?.topic ?? '',
      chainId: 'aleo:3',
      request: {
        jsonrpc: '2.0',
        method: 'importSharedState',
        params: {
          seed,
        } as ImportSharedStateRequest,
      },
    },
    (params) =>
      window.aleo?.puzzleWalletClient.importSharedState.mutate(params),
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: ImportSharedStateResponse | undefined = wc_data;

  const importSharedState = async () => {
    if (session && !loading) {
      return await request();
    }
  };

  return { importSharedState, data: response?.data, loading, error };
};
