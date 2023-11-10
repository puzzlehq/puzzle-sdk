export type SignatureRequest = {
    message: string;
    address: string;
};
export type SignatureResponse = {
    signature?: string;
    messageFields?: string;
    error?: string;
};
