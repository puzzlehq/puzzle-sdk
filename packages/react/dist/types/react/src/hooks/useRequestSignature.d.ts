import { SignatureRequest, SignatureResponse } from '@puzzlehq/sdk-core';
export declare const useRequestSignature: ({ message, address, method, network }: SignatureRequest) => {
    requestSignature: () => void;
    response: SignatureResponse | undefined;
    loading: boolean;
    error: string | undefined;
};
