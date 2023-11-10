import { Record, RecordsFilter } from '../messaging/records.js';
type UseRecordsOptions = {
    address?: string;
    filter?: RecordsFilter;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, filter }: UseRecordsOptions) => {
    records: Record[];
    error: string;
    loading: boolean;
    refetch: () => void;
};
export {};
