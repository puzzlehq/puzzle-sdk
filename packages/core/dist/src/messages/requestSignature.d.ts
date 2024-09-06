export type SignatureRequest = {
    message: string;
    address?: string;
    network?: string;
};
export type SignatureResponse = {
    signature?: string;
    error?: string;
};
export declare const requestSignature: ({ message, address, network, }: SignatureRequest) => Promise<SignatureResponse>;
