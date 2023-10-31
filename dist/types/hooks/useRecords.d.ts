import { Record, RecordsFilter } from '../messaging/records.js';
export declare const RECORDS_PER_PAGE = 50;
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
