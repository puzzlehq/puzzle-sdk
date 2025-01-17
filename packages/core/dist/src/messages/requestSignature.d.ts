import { Network } from '@puzzlehq/types';
export type SignatureRequest = {
    message: string;
    address?: string;
    network?: Network;
};
export type SignatureResponse = {
    signature: string;
};
export declare const requestSignature: ({ message, address, network, }: SignatureRequest) => Promise<SignatureResponse>;
