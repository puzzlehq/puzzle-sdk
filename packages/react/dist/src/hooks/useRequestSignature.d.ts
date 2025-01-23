import { SignatureRequest, SignatureResponse } from '@puzzlehq/sdk-core';
export declare const useRequestSignature: ({ message, address, network, }: SignatureRequest) => {
    requestSignature: (signatureRequestOverride?: SignatureRequest) => Promise<SignatureResponse | undefined> | undefined;
    response: SignatureResponse | undefined;
    loading: boolean;
    error: string | undefined;
};
