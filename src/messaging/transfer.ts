export type TransferVisibility = 'transfer_private' | 'transfer_public' | 'transfer_private_to_public' | 'transfer_public_to_private' 
export const transferVisibilities: TransferVisibility[] = ['transfer_private', 'transfer_public', 'transfer_private_to_public', 'transfer_public_to_private']

export const isPrivateTransfer = (transferVisibility: TransferVisibility) => {
  return ['transfer_private', 'transfer_private_to_public'].includes(transferVisibility)
}

export interface TransferReqData {
  recipientAddress: string;
  amount: number;
  amountRecord?: string;
  fee: number;
  feeRecord: string;
  visibility?: TransferVisibility // default 'transfer_private'
}

export type TransferReqMessage = {
  type: 'TRANSFER';
  data: TransferReqData;
  sender?: string;
};

// note: message return type is ExecuteResMessage | ExecuteRejMessage