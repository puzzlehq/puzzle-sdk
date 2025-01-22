import { EventType } from '../index.js';
import { Network, type RecordWithPlaintext } from '@puzzlehq/types';
export type SettlementStatus = 'Settled' | 'SettledWithRecords' | 'Pending' | 'Creating' | 'Failed';
export type CreateEventRequestData = {
    address?: string;
    network?: Network;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    feeRecord?: RecordWithPlaintext;
    inputs: (RecordWithPlaintext | string)[];
    tokenIds?: string[];
    settlementInfo?: {
        eventId?: string;
        expectedRecordCount: number;
        currentRecordCount: number;
    };
};
export type CreateEventRequest = {
    address?: string;
    network?: Network;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    feeRecord?: RecordWithPlaintext;
    inputs: string[];
    tokenIds?: string[];
};
export type CreateEventResponse = {
    eventId?: string;
    error?: string;
};
export declare const requestCreateEvent: (requestData: CreateEventRequestData) => Promise<CreateEventResponse>;
