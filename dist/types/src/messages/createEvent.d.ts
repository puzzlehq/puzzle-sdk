import { type RecordWithPlaintext } from './records.js';
import { EventType } from '../data/types.js';
export type CreateEventRequestData = {
    address?: string;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    inputs: (RecordWithPlaintext | string)[];
};
export type CreateEventRequest = {
    address?: string;
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    inputs: string[];
};
export type CreateEventResponse = {
    eventId?: string;
    error?: string;
};
export declare const requestCreateEvent: (requestData?: CreateEventRequestData) => Promise<CreateEventResponse>;
