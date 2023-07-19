import { SessionTypes } from "@walletconnect/types";

export type ExecuteMessage = {
    type: "EXECUTE";
    data: {
        data: ExecuteMessageInputData;
        wc?: {
            session: SessionTypes.Struct;
        };
    };
};

export type ExecuteMessageInputData = {
    aleoCode: string;
    programName: string;
};

export type ExecuteResMessage = {
    type: "EXECUTE_RES";
    data: {
        transactionId: string;
    };
};

export type ExecuteRejMessage = {
    type: "DEPLOY_REJ";
    data: {
        error?: string;
    };
};
