import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { DeployMessage, DeployMessageInputData, DeployRejMessage, DeployResMessage } from '../messaging/deploy.js';

export const useDeployProgram = (
  deployProgramRequestData?: DeployMessageInputData
) => {
  const [session, chainId] = useClientWalletStore((state) => [
    state.session,
    state.chainId,
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_deployProgram',
      params: {
        type: 'DEPLOY', 
        data: {
          data: deployProgramRequestData,
        },
      } as DeployMessage,
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.type === 'DEPLOY_REJ' ? wc_data.data.error : undefined);
  const puzzleData: DeployResMessage | undefined =  wc_data &&  wc_data.type === 'DEPLOY_RES' ? wc_data : undefined;
  const transactionId = puzzleData?.data.transactionId;

  const deploy = () => { 
    if (!deployProgramRequestData) return;
    request(); 
    console.log('deploy request sent')
  }

  return { deploy, transactionId, loading, error };
};
