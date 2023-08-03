export type TransferMessage = {
    type: 'TRANSFER';
    data: {
        recipient: string;
        amount: number;
    };
    sender?: string;
};
export type TransferResMessage = {
    type: 'TRANSFER_RES';
    data: {
        transactionId: string;
    };
};
export type TransferRejMessage = {
    type: 'TRANSFER_REJ';
    data: {
        error: string;
    };
};
