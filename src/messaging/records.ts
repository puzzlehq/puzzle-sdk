export type Record = {
  id: string;
  height: number;
  ciphertext: string;
  program: string;
  function: string;
  transitionId: string;
  transactionId: string;
  owner: string;
  eventId: string;
  spent: boolean;
  serialNumber: string | null;
  plaintext: string;
};

export type RecordsFilter = {
  programId?: string;
  type: 'all' | 'spent' | 'unspent';
};

export type GetRecordsRequest = {
  filter?: RecordsFilter;
  page?: number;
};

export type GetRecordsResponse = {
  records?: Record[];
  pageCount?: number;
  error?: string;
};
