import { Record, RecordsFilter } from '../messaging/records.js';
type UseRecordsOptions = {
    filter?: RecordsFilter;
    page?: number;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ filter, page }: UseRecordsOptions) => {
    fetchPage: () => void;
    records: Record[];
    error: string;
    loading: any;
    page: number;
    pageCount: number;
};
export {};
