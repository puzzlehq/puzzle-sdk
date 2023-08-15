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
export type ExecuteResData = {
    transactionId: string;
    execution: {
        transitionId: string;
        outputPrivate: string;
        outputRecords: string;
        outputPublic: string;
        outputConstant: string;
    }[];
};
export type ExecuteResMessage = {
    type: "EXECUTE_RES";
    data: ExecuteResData;
};
export type ExecuteRejMessage = {
    type: "EXECUTE_REJ";
    data: {
        error?: string;
    };
};
