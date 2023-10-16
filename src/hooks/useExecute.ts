import { SessionTypes } from '@walletconnect/types';
import { ExecuteReqMessage, ExecuteProgramInputData, ExecuteResMessage } from '../messaging/execute.js';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';

export const useExecuteProgram = (
  executeProgramReqData?: ExecuteProgramInputData
) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  const inputs = executeProgramReqData?.inputs.map(
    (input) => {
      if (typeof input === 'string') {
        return input
      }
      return input.plaintext
    }).join(' ')
  
  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_executeProgram',
      params: {
        type: 'EXECUTE',
        data: {
          data: {
            ...executeProgramReqData,
            inputs: inputs ?? '',
          },
        },
      } as ExecuteReqMessage,
    }
  });

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.type === 'EXECUTE_REJ' ? wc_data.data.error : undefined);
  const puzzleData: ExecuteResMessage | undefined =  wc_data && wc_data.type === 'EXECUTE_RES' ? wc_data : undefined;
  const transactionId: string | undefined = puzzleData?.data.transactionId;
  const transitions = puzzleData?.data.transitions;

  const execute = () => {
    if (!executeProgramReqData) return
    request();
  }

  return { execute, transactionId, transitions, error, loading };
};
