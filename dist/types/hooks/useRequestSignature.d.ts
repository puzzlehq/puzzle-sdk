export declare const useSignature: (message: string, address: string) => Promise<{
    requestSignature: () => void;
    signature: string;
    loading: any;
    error: string;
}>;
