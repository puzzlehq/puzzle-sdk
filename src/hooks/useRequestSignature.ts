import { SessionTypes } from '@walletconnect/types';
import { SignatureRequest, SignatureResponse, useSession } from '../index.js';
import { useRequest } from './wc/useRequest.js';

export const useRequestSignature = (message: string, address: string) => {
  const session: SessionTypes.Struct | undefined = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest<SignatureResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'requestSignature',
      params: {
        message,
        address
      } as SignatureRequest,
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: SignatureResponse | undefined =  wc_data;

  const requestSignature = () => {
    request();
  };

  return { requestSignature, response, loading, error };
};