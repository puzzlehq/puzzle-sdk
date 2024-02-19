import { SignatureResponse } from '../index.js';
export declare const useRequestSignature: (message: string, address?: string) => {
    requestSignature: () => void;
    response: SignatureResponse | undefined;
    loading: boolean;
    error: string | undefined;
};
