import { Record as RecordWithoutPlaintext } from '@puzzlehq/types';
export type Record = RecordWithoutPlaintext & {
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
