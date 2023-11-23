import { SignatureResponse } from '../index.js';
export declare const useSignature: (message: string, address: string) => {
    requestSignature: () => void;
    response: SignatureResponse;
    loading: boolean;
    error: string;
};
