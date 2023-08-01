import { SessionTypes } from "@walletconnect/types";
export type DeployMessage = {
    type: 'DEPLOY';
    data: {
        data: DeployMessageInputData;
        wc?: {
            session: SessionTypes.Struct;
        };
    };
};
export type DeployMessageInputData = {
    aleoCode: string;
    programName: string;
};
export type DeployResMessage = {
    type: 'DEPLOY_RES';
    data: {
        transactionId: string;
    };
};
export type DeployRejMessage = {
    type: 'DEPLOY_REJ';
    data: {
        error?: string;
    };
};
