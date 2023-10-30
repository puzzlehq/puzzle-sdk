import { SessionTypes } from "@walletconnect/types";
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
    program_id?: string;
    type: 'all' | 'spent' | 'unspent';
};
export type GetRecordsRequest = {
    filter?: RecordsFilter;
    page?: number;
    wc_session?: SessionTypes.Struct;
};
export type GetRecordsResponse = {
    records?: Record[];
    totalRecordCount?: number;
    error?: string;
};
