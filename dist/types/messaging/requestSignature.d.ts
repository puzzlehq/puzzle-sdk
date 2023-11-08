export type RequestSignatureRequest = {
    message: string;
    address: string;
};
export type RequestSignatureResponse = {
    signature?: string;
    error?: string;
};
