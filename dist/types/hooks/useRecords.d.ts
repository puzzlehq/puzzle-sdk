import { Record, RecordsFilter } from '../messaging/records.js';
export declare const useRecords: (filter?: RecordsFilter) => {
    request: () => void;
    records: Record[];
    error: string | undefined;
    loading: boolean;
};
