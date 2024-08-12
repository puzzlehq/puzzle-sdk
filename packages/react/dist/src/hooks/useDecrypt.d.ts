import { DecryptRequest, DecryptResponse } from '@puzzlehq/sdk-core';
export declare const useDecrypt: (ciphertexts?: string[]) => {
    decrypt: (decryptRequestOverride?: DecryptRequest) => Promise<DecryptResponse | undefined> | undefined;
    plaintexts: string[] | undefined;
    loading: boolean;
    error: string | undefined;
};
