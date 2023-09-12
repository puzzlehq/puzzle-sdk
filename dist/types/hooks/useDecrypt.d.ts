export declare const useDecrypt: (transactionId?: string) => {
    decrypt: () => void;
    data: import("../index.js").DeployResData | import("../index.js").ExecuteResData | undefined;
    loading: any;
    error: string | undefined;
};
