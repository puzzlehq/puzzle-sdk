import { Record, RecordsFilter } from '../messaging/records.js';
export declare const RECORDS_PER_PAGE = 50;
export declare const useRecords: (filter?: RecordsFilter, page?: number) => {
    request: () => void;
    records: Record[] | undefined;
    error: string | undefined;
    loading: any;
};
