import { RecordsFilter } from '@puzzlehq/sdk-core';
import { type RecordWithPlaintext } from '@puzzlehq/types';
type UseRecordsParams = {
    address?: string;
    multisig?: boolean;
    filter?: RecordsFilter;
    page?: number;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, multisig, filter, page, }: UseRecordsParams) => {
    fetchPage: () => void;
    records: RecordWithPlaintext[] | undefined;
    error: string | undefined;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
export {};
