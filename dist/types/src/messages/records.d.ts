import { type RecordWithPlaintext } from '@puzzlehq/types';
export type RecordsFilter = {
    programIds?: string[];
    functionId?: string;
    type: 'all' | 'spent' | 'unspent';
    names?: string[];
};
export type GetRecordsRequest = {
    address?: string;
    filter?: RecordsFilter;
    page?: number;
};
export type GetRecordsResponse = {
    records?: RecordWithPlaintext[];
    pageCount?: number;
    error?: string;
};
export declare const getRecords: ({ address, filter, page, }: GetRecordsRequest) => Promise<GetRecordsResponse>;
