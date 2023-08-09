import { TransferRequestData } from "../index.js";

export type TransferMessage = {
  type: 'TRANSFER';
  data: TransferRequestData;
  sender?: string;
};