import { EventType } from '../index.js';
import { type RecordWithPlaintext } from '@puzzlehq/types';
export type CreateEventRequestData = {
    address?: string;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    feeRecord?: RecordWithPlaintext;
    inputs: (RecordWithPlaintext | string)[];
};
export type CreateEventRequest = {
    address?: string;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    feeRecord?: RecordWithPlaintext;
    inputs: string[];
};
export type CreateEventResponse = {
    eventId?: string;
    error?: string;
};
export declare const requestCreateEvent: (requestData: CreateEventRequestData, network?: string) => Promise<CreateEventResponse>;
