import { RecordWithPlaintext, RecordsFilter } from '../messages/records.js';
type UseRecordsOptions = {
    address?: string;
    filter?: RecordsFilter;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, filter }: UseRecordsOptions) => {
    records: RecordWithPlaintext[];
    error: string | undefined;
    loading: boolean;
    refetch: () => void;
};
export {};
