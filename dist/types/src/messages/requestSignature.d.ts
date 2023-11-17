export type SignatureRequest = {
    message: string;
    address?: string;
};
export type SignatureResponse = {
    signature?: string;
    messageFields?: string;
    error?: string;
};
export declare const requestSignature: ({ message, address }: SignatureRequest) => Promise<SignatureResponse>;
