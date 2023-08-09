export interface TransferRequestData {
    recipientAddress: string;
    amount: number;
    privateTransfer?: boolean;
}
export declare const useTransferCredits: (transferRequestData?: TransferRequestData) => {
    transfer: any;
    data: any;
    error: any;
    loading: any;
};
