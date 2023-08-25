import { Record, RecordsFilter } from '../messaging/records.js';
export declare const useRecords: (filter?: RecordsFilter) => {
    request: () => void;
    records: Record[] | undefined;
    error: string | undefined;
    loading: any;
};
