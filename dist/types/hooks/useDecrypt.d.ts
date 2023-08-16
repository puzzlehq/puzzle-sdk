export declare const useDecrypt: (transactionId?: string) => {
    decrypt: () => void;
    transitions: import("../index.js").ExecuteData[] | undefined;
    loading: any;
    error: string | undefined;
};
