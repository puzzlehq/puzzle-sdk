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

export type TransitionInputs = {
    inputPrivate: string;
    inputRecords: string;
    inputPublic: string;
    inputConstant: string;
}

export type TransitionOutputs = {
    outputPrivate: string;
    outputRecords: string;
    outputPublic: string;
    outputConstant: string;
}

export type ExecuteData = {
    transitionId: string;
    inputs: TransitionInputs;
    outputs: TransitionOutputs;
};

export type ExecuteResData = {
    transactionId: string,
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
