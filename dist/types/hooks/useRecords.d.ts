import { Record, RecordsFilter } from '../messaging/records.js';
export declare const RECORDS_PER_PAGE = 50;
type UseRecordsParams = {
    filter?: RecordsFilter;
    page?: number;
};
export declare const useRecords: ({ filter, page }: UseRecordsParams) => {
    request: () => void;
    records: Record[] | undefined;
    error: string | undefined;
    loading: any;
    totalRecordCount: number;
    getFormattedRecordPlaintext: (data: any) => string;
    getRecordPlaintext: (data: any) => string;
};
export {};
