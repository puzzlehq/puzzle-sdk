import { DecryptRequest, DecryptResponse } from '@puzzlehq/sdk-core';
export declare const useDecrypt: ({ ciphertexts, address, network, }: DecryptRequest) => {
    decrypt: (requestOverride?: DecryptRequest) => Promise<DecryptResponse | undefined>;
    plaintexts: string[] | undefined;
    loading: boolean;
    error: string | undefined;
};
