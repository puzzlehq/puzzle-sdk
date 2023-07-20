import { ExecuteProgramRequestData, ExecuteRejMessage, ExecuteResMessage } from '../messaging/execute.js';
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
  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_executeProgram',
      params: {
        type: 'EXECUTE',
        data: {
          data: executeProgramRequestData,
        },
      },
    }
  });

  const data: ExecuteResMessage = wc_data;
  const error: ExecuteRejMessage = wc_error;

  const execute = () => {
    if (executeProgramRequestData !== null) {
      request();
    }
  }

  return { execute, data, error, loading };
};
