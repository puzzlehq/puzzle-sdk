import { ExecuteProgramRequestData } from '../messaging/execute.js';
export declare const useExecuteProgram: (executeProgramRequestData?: ExecuteProgramRequestData) => {
    execute: () => void;
    transactionId: string | undefined;
    outputConstant: string | undefined;
    outputPrivate: string | undefined;
    outputRecords: string | undefined;
    outputPublic: string | undefined;
    error: string | undefined;
    loading: any;
};
