export declare const useRequestSignature: (message: string, address: string) => Promise<{
    requestSignature: () => void;
    signature: string;
    loading: any;
    error: string;
}>;
