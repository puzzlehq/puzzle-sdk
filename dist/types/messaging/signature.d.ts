export type SignatureRequest = {
    message: string;
    address: string;
};
export type SignatureResponse = {
    signature?: string;
    error?: string;
};
