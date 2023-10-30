// import useClientWalletStore from './clientWalletStore.js';
// import { useRequest, useSession } from '@walletconnect/modal-sign-react';
// import { DeployReqMessage, DeployMessageInputData, DeployResMessage } from '../messaging/deploy.js';
// import { SessionTypes } from '@walletconnect/types';

// export const useDeployProgram = (
//   deployProgramReqData?: DeployMessageInputData
// ) => {
//   const session: SessionTypes.Struct = useSession();
//   const [chainId] = useClientWalletStore((state) => [
//     state.chainId,
//   ]);

//   const { request, data: wc_data, error: wc_error, loading } = useRequest({
//     topic: session?.topic ?? '',
//     chainId: chainId ?? 'aleo:1',
//     request: {
//       id: 1,
//       jsonrpc: '2.0',
//       method: 'aleo_deployProgram',
//       params: {
//         type: 'DEPLOY', 
//         data: {
//           data: deployProgramReqData,
//         },
//       } as DeployReqMessage,
//     },
//   });

//   const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.type === 'DEPLOY_REJ' ? wc_data.data.error : undefined);
//   const puzzleData: DeployResMessage | undefined =  wc_data &&  wc_data.type === 'DEPLOY_RES' ? wc_data : undefined;
//   const transactionId = puzzleData?.data.transactionId;

//   const deploy = () => { 
//     if (!deployProgramReqData) return;
//     request(); 
//   }

//   return { deploy, transactionId, loading, error };
// };
