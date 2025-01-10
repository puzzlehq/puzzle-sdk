export type DecryptRequest = {
    ciphertexts: string[];
    address?: string;
    network?: string;
};
export type DecryptResponse = {
    plaintexts?: string[];
    error?: string;
};
export declare const decrypt: ({ ciphertexts, network, address }: DecryptRequest) => Promise<DecryptResponse>;
