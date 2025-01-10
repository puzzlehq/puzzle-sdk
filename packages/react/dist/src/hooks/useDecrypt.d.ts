import { DecryptRequest, DecryptResponse } from '@puzzlehq/sdk-core';
export declare const useDecrypt: ({ ciphertexts, address, network }: DecryptRequest) => {
    decrypt: (paramsOverride: DecryptRequest) => Promise<DecryptResponse | undefined>;
    plaintexts: string[] | undefined;
    loading: boolean;
    error: string | undefined;
};
