import {
  importSharedState as _importSharedState,
  GenericRequest,
  ImportSharedStateRequest,
  ImportSharedStateResponse,
  SdkError,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useImportSharedState = ({ seed }: ImportSharedStateRequest) => {
  const { isConnected } = useIsConnected();

  const req: GenericRequest =     {
    method: 'importSharedState',
    params: {
      seed,
    } as ImportSharedStateRequest,
  }
  
  const {
    request,
    data,
    error: _error,
    loading,
  } = useInjectedRequest<ImportSharedStateResponse | undefined>(req,
    async (req) => {
      if (!isConnected) throw new Error(SdkError.NotConnected);
      const response = await _importSharedState(req.params as ImportSharedStateRequest)
      return response;
    },
  );

  const error: string | undefined = typeof _error === 'string' ? _error : _error instanceof Error ? _error.message : undefined;
  const response: ImportSharedStateResponse | undefined = data;

  const importSharedState = async () => {
    if (isConnected && !loading) {
      return await request();
    }
  };

  return { importSharedState, data: response?.data, loading, error };
};
