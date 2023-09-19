import { SessionTypes } from "@walletconnect/types";
import { type Record } from "./records.js";

export type ExecuteReqMessage = {
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
    fee?: number;
    feeRecord?: string;
};

export type ExecuteProgramInputData = {
    programId: string;
    functionName: string;
    inputs: (Record | string)[];
};

export type TransitionInputs = {
    inputPrivate: string[];
    inputRecords: string[];
    inputPublic: string[];
    inputConstant: string[];
}

export type TransitionOutputs = {
    outputPrivate: string[];
    outputRecords: string[];
    outputPublic: string[];
    outputConstant: string[];
}

export type ExecuteData = {
    transitionId: string;
    program: string;
    function: string;
    inputs: TransitionInputs;
    outputs: TransitionOutputs;
};

export type ExecuteResData = {
    type: "EXECUTION"
    transactionId: string,
    timestamp: number,
    transitions: ExecuteData[]
}

export type ExecuteResMessage = {
    type: "EXECUTE_RES";
    data: ExecuteResData
};

export type ExecuteRejMessage = {
    type: "EXECUTE_REJ";
    data: {
        error?: string;
    };
};
