export type Record = {
    data: any;
    id: string;
    height: number;
    timestamp: string;
    record_ciphertext: string;
    program_id: string;
    function_name: string;
    transition_id: string;
    transaction_id: string;
    output_index: number;
    ownerId: string | null;
    spent: boolean;
    serialNumber: string | null;
};
export type RecordsFilter = {
    program_id?: string;
    type: 'all' | 'spent' | 'unspent';
};
export type GetRecordsMessage = {
    type: 'GET_RECORDS';
    filter?: RecordsFilter;
    page?: number;
    sender?: string;
};
export type GetRecordsResMessage = {
    type: 'GET_RECORDS_RES';
    data: {
        records: Record[];
        totalRecordCount: number;
    };
};
export type GetRecordsRejMessage = {
    type: 'GET_RECORDS_REJ';
    data: {
        error?: string;
    };
};
