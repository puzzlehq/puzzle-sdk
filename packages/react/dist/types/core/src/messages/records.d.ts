import { type RecordWithPlaintext } from '@puzzlehq/types';
export type RecordsFilter = {
    programIds?: string[];
    functionId?: string;
    type: 'all' | 'spent' | 'unspent' | 'pending';
    names?: string[];
};
export type GetRecordsRequest = {
    address?: string;
    filter?: RecordsFilter;
    page?: number;
    network?: string;
};
export type GetRecordsResponse = {
    records?: RecordWithPlaintext[];
    pageCount?: number;
    error?: string;
};
export declare const getRecords: ({ address, filter, page, network, }: GetRecordsRequest) => Promise<GetRecordsResponse>;
