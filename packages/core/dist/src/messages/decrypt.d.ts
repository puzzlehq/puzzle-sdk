import { Network } from '@puzzlehq/types';
export type DecryptRequest = {
    ciphertexts: string[];
    address?: string;
    network?: Network;
};
export type DecryptResponse = {
    plaintexts?: string[];
    error?: string;
};
export declare const decrypt: ({ ciphertexts, network, address }: DecryptRequest) => Promise<DecryptResponse>;
