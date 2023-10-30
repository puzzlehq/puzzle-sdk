export type DecryptRequest = {
    ciphertexts: string[];
};
export type DecryptResponse = {
    plaintexts?: string[];
    error?: string;
};
