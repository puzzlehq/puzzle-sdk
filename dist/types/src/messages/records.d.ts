import { Record } from '@puzzlehq/types';
export type RecordWithPlaintext = Record & {
    plaintext: string;
    data: {
        [key: string]: string;
    };
};
export type RecordsFilter = {
    programIds?: string[];
    functionId?: string;
    type: 'all' | 'spent' | 'unspent';
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
