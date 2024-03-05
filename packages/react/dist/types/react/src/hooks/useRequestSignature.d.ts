import { SignatureResponse } from '@puzzlehq/sdk-core';
export declare const useRequestSignature: (message: string, address?: string) => {
    requestSignature: () => void;
    response: SignatureResponse | undefined;
    loading: boolean;
    error: string | undefined;
};
