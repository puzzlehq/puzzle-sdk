import { Record, RecordsFilter } from '../messaging/records.js';
export declare const RECORDS_PER_PAGE = 50;
type UseRecordsParams = {
    filter?: RecordsFilter;
    page?: number;
    formatted?: boolean;
};
export declare const useRecords: ({ filter, page, formatted }: UseRecordsParams) => {
    request: () => void;
    records: Record[] | undefined;
    error: string | undefined;
    loading: any;
    totalRecordCount: number;
};
export {};
