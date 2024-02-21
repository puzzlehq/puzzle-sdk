export declare const useRequestSignature: (message: string, address?: string) => {
    requestSignature: () => void;
    response: any;
    loading: boolean;
    error: string | undefined;
};
