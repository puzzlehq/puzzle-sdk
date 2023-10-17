import { SessionTypes } from "@walletconnect/types";

export type Record = {
  id: string;
  height: number;
  ciphertext: string;
  program: string;
  function: string;
  transitionId: string;
  transactionId: string;
  ownerAddress: string;
  eventId: string;
  spent: boolean;
  serialNumber: string | null;
  plaintext: string;
};

export type RecordsFilter = {
  program_id?: string;
  type: 'all' | 'spent' | 'unspent';
};

export type GetRecordsReqMessage = {
  type: 'GET_RECORDS';
  data: {
    data: GetRecordsReqData; 
    wc?: {
      session: SessionTypes.Struct;
    }
  }
};

export type GetRecordsReqData = {
  filter?: RecordsFilter;
  page?: number;
  sender?: string;
}

export type GetRecordsResMessage = {
  type: 'GET_RECORDS_RES';
  data: {
    records: Record[];
    totalRecordCount: number;
  }
};

export type GetRecordsRejMessage = {
  type: 'GET_RECORDS_REJ';
  data: {
    error?: string;
  }
};