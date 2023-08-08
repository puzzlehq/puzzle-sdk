export type TransferMessage = {
  type: 'TRANSFER';
  data: {
    recipientAddress: string;
    amount: number;
    privateTransfer?: boolean;
  };
  sender?: string;
};