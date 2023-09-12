import { ExecuteResData } from "./execute.js";
export interface TransferRequestData {
    recipientAddress: string;
    amount: number;
    record?: string;
    feeAmount: number;
    recordFee: string;
    visibility?: 'transfer_private' | 'transfer_public' | 'transfer_private_to_public' | 'transfer_public_to_private';
}
export type TransferReqMessage = {
    type: 'TRANSFER';
    data: TransferRequestData;
    sender?: string;
};
export type TransferResMessage = {
    type: 'TRANSFER_RES';
    data: ExecuteResData;
};
export type TransferRejMessage = {
    type: 'TRANSFER_REJ';
    data: {
        error?: string;
    };
};
