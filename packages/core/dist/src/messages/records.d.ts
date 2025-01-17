import { type RecordWithPlaintext, Network, RecordStatus } from '@puzzlehq/types';
export type RecordStatusFilter = RecordStatus | 'All';
export type RecordsFilter = {
    programIds?: string[];
    functionId?: string;
    status: RecordStatusFilter;
    names?: string[];
};
export type GetRecordsRequest = {
    filter?: RecordsFilter;
    page?: number;
    address?: string;
    network?: Network;
    multisig?: boolean;
};
export type GetRecordsResponse = {
    records: RecordWithPlaintext[];
    pageCount: number;
};
export declare const getRecords: ({ filter, page, address, network, }: GetRecordsRequest) => Promise<GetRecordsResponse>;
