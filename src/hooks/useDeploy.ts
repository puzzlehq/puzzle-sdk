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

  const data: DeployResMessage = wc_data;
  const error: DeployRejMessage = wc_error;

  const deploy = () => { 
    if (deployProgramRequestData !== null) {
      request(); 
    }
  }

  return { deploy, data, error, loading };
};
