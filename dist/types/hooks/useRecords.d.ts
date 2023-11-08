import { Record, RecordsFilter } from '../messaging/records.js';
type UseRecordsOptions = {
    address?: string;
    filter?: RecordsFilter;
    page?: number;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, filter, page }: UseRecordsOptions) => {
    fetchPage: () => void;
    records: Record[];
    error: string;
    loading: any;
    page: number;
    pageCount: number;
};
export {};
