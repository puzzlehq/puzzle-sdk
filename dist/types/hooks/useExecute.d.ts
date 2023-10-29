import { ExecuteProgramInputData } from '../messaging/execute.js';
export declare const useExecuteProgram: (executeProgramReqData?: ExecuteProgramInputData) => {
    execute: () => void;
    transactionId: string;
    transitions: import("../messaging/execute.js").ExecuteData[];
    error: string;
    loading: any;
};
