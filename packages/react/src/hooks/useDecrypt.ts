import {
  decrypt as _decrypt,
  DecryptRequest,
  DecryptResponse,
  GenericRequest,
  SdkError,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useDecrypt = ({
  ciphertexts,
  address,
  network,
}: DecryptRequest) => {
  const { isConnected } = useIsConnected();

  const req: GenericRequest = {
    method: 'decrypt',
    params: {
      ciphertexts: ciphertexts,
      address,
      network,
    } as DecryptRequest,
  };

  const {
    request,
    data,
    error: _error,
    loading,
  } = useInjectedRequest<DecryptResponse | undefined>(req, async (req) => {
    if (!isConnected) throw new Error(SdkError.NotConnected);
    const response = await _decrypt({
      ciphertexts,
      address,
      network
    })
    return response;
  });

  const error: string | undefined = typeof _error === 'string' ? _error : _error instanceof Error ? _error.message : undefined;
  const response: DecryptResponse | undefined = data;

  const decrypt = async (requestOverride?: DecryptRequest) => {
    return await request({
      method: 'decrypt',
      params: requestOverride ?? req,
    });
  };

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
