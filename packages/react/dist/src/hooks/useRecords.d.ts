import { GetRecordsRequest } from '@puzzlehq/sdk-core';
import { type RecordWithPlaintext } from '@puzzlehq/types';
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, multisig, filter, page, network, }: GetRecordsRequest) => {
    fetchPage: () => void;
    records: RecordWithPlaintext[] | undefined;
    error: string;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
