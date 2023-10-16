export type TransferVisibility = 'transfer_private' | 'transfer_public' | 'transfer_private_to_public' | 'transfer_public_to_private';
export declare const transferVisibilities: TransferVisibility[];
export declare const isPrivateTransfer: (transferVisibility: TransferVisibility) => boolean;
export interface TransferReqData {
    recipientAddress: string;
    amount: number;
    amountRecord?: string;
    fee: number;
    feeRecord: string;
    visibility?: TransferVisibility;
}
export type TransferReqMessage = {
    type: 'TRANSFER';
    data: TransferReqData;
    sender?: string;
};
