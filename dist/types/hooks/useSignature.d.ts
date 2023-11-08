export declare const useSignature: (message: string, address: string) => {
    requestSignature: () => void;
    signature: string;
    loading: any;
    error: string;
};
