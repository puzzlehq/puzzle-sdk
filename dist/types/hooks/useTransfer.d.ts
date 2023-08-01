export interface TransferRequestData {
    assetId: String;
    recipient: String;
    value: number;
}
export declare const useTransferCredits: (transferRequestData?: TransferRequestData) => {
    transfer: any;
    data: any;
    error: any;
    loading: any;
};
