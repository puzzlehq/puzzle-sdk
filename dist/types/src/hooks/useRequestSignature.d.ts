import { SignatureResponse } from '../index.js';
export declare const useRequestSignature: (message: string, address: string) => {
    requestSignature: () => void;
    response: SignatureResponse;
    loading: boolean;
    error: string;
};
