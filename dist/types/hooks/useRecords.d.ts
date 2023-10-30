import { Record, RecordsFilter } from '../messaging/records.js';
export declare const RECORDS_PER_PAGE = 50;
type UseRecordsParams = {
    filter?: RecordsFilter;
    page?: number;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ filter, page }: UseRecordsParams) => {
    request: () => void;
    records: Record[];
    error: string;
    loading: any;
    totalRecordCount: number;
};
export {};
