import { SessionTypes } from '@walletconnect/types';
import { ExecuteMessage, ExecuteProgramRequestData, ExecuteResMessage } from '../messaging/execute.js';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';

export const useExecuteProgram = (
  executeProgramRequestData?: ExecuteProgramRequestData
) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

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
      } as ExecuteMessage,
    }
  });

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.type === 'EXECUTE_REJ' ? wc_data.data.error : undefined);
  const puzzleData: ExecuteResMessage | undefined =  wc_data && wc_data.type === 'EXECUTE_RES' ? wc_data : undefined;
  const transactionId: string | undefined = puzzleData?.data.transactionId;
  const transitions = puzzleData?.data.transitions;

  const execute = () => {
    if (!executeProgramRequestData) return
    request();
    console.log('sent execute request')
  }

  return { execute, transactionId, transitions, error, loading };
};
