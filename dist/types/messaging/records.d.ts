export type Record = {
    id: string;
    height: number;
    timestamp: string;
    record_ciphertext: string;
    program_id: string;
    function_name: string;
    transition_id: string;
    transaction_id: string;
    output_index: number;
    spent: boolean;
    serialNumber: string | null;
    plaintext: string;
};
export type RecordsFilter = {
    program_id?: string;
    type: 'all' | 'spent' | 'unspent';
};
export type GetRecordsMessage = {
    type: 'GET_RECORDS';
    filter?: RecordsFilter;
    sender?: string;
};
export type GetRecordsResMessage = {
    type: 'GET_RECORDS_RES';
    data: {
        records: Record[];
    };
};
export type GetRecordsRejMessage = {
    type: 'GET_RECORDS_REJ';
    data: {
        error?: string;
    };
};
