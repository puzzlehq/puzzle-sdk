import { Record, RecordsFilter } from '../messaging/records.js';
export declare const useRecords: (filter?: RecordsFilter) => {
    records: Record[];
    error: string | undefined;
    loading: boolean;
};
