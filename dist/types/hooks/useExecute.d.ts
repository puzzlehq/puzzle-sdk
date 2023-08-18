import { ExecuteProgramRequestData } from '../messaging/execute.js';
export declare const useExecuteProgram: (executeProgramRequestData?: ExecuteProgramRequestData) => {
    execute: () => void;
    transactionId: string | undefined;
    transitions: import("../messaging/execute.js").ExecuteData[] | undefined;
    error: string | undefined;
    loading: any;
};
