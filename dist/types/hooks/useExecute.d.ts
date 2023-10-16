import { ExecuteProgramInputData } from '../messaging/execute.js';
export declare const useExecuteProgram: (executeProgramReqData?: ExecuteProgramInputData) => {
    execute: () => void;
    transactionId: string | undefined;
    transitions: import("../messaging/execute.js").ExecuteData[] | undefined;
    error: string | undefined;
    loading: any;
};
