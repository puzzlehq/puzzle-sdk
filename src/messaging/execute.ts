import { SessionTypes } from "@walletconnect/types";

export type ExecuteMessage = {
    type: "EXECUTE";
    data: {
        data: ExecuteProgramRequestData;
        wc?: {
            session: SessionTypes.Struct;
        };
    };
};

export type ExecuteProgramRequestData = {
    programId: string;
    functionName: string;
    inputs: string;
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
