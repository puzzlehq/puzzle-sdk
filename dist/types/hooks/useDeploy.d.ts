import { DeployMessageInputData } from '../messaging/deploy.js';
export declare const useDeployProgram: (deployProgramReqData?: DeployMessageInputData) => {
    deploy: () => void;
    transactionId: string | undefined;
    loading: any;
    error: string | undefined;
};
