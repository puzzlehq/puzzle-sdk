import { type RecordWithPlaintext, Network, RecordStatus } from '@puzzlehq/types';
export type RecordStatusFilter = RecordStatus | 'All';
export type RecordsFilter = {
    programIds?: string[];
    functionId?: string;
    status: RecordStatusFilter;
    names?: string[];
};
export type GetRecordsRequest = {
    address?: string;
    filter?: RecordsFilter;
    page?: number;
    network?: Network;
};
export type GetRecordsResponse = {
    records?: RecordWithPlaintext[];
    pageCount?: number;
    error?: string;
};
export declare const getRecords: ({ address, filter, page, network, }: GetRecordsRequest) => Promise<GetRecordsResponse>;
