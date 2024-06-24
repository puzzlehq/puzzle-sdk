export type SignatureRequest = {
    message: string;
    address?: string;
    network?: string;
    method?: 'aleo' | 'puzzle';
};
export type SignatureResponse = {
    signature?: string;
    messageFields?: string;
    error?: string;
};
export declare const requestSignature: ({ message, address, network, method }: SignatureRequest) => Promise<SignatureResponse>;
