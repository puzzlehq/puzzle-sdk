import {
  importSharedState as _importSharedState,
  ImportSharedStateRequest,
  ImportSharedStateResponse,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useImportSharedState = ({ seed }: ImportSharedStateRequest) => {
  const isConnected = useIsConnected();
  const [account] = useWalletStore((state) => [state.account]);

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<ImportSharedStateResponse | undefined>(
    {
      method: 'importSharedState',
      params: {
        seed,
      } as ImportSharedStateRequest,
    },
    async () =>
      await _importSharedState({seed}),
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: ImportSharedStateResponse | undefined = wc_data;

  const importSharedState = async () => {
    if (isConnected && !loading) {
      return await request();
    }
  };

  return { importSharedState, data: response?.data, loading, error };
};
