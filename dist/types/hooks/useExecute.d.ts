import { ExecuteProgramRequestData } from '../messaging/execute.js';
export declare const useExecuteProgram: (executeProgramRequestData?: ExecuteProgramRequestData) => {
    execute: () => void;
    transactionId: string | undefined;
    outputs: {
        transitionId: string;
        outputPrivate: string;
        outputRecords: string;
        outputPublic: string;
        outputConstant: string;
    }[] | undefined;
    error: string | undefined;
    loading: any;
};
