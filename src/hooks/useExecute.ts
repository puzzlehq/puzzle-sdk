import { ExecuteProgramRequestData } from '../messaging/execute.js';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';

export const useExecuteProgram = (
  executeProgramRequestData?: ExecuteProgramRequestData
) => {
  const [session, chainId] = useClientWalletStore((state) => [
    state.session,
    state.chainId,
  ]);

  // TODO: (darvish) Make this real
  const { request, data, error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1337',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_execute',
      params: executeProgramRequestData,
    },
  });
  return { request, data, error, loading };
};
