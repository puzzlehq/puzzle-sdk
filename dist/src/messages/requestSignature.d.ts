export type SignatureRequest = {
    message: string;
    address?: string;
};
export type SignatureResponse = {
    signature?: string;
    messageFields?: string;
    error?: string;
};
export declare const requestSignature: (message: string, address: string) => Promise<SignatureResponse>;
