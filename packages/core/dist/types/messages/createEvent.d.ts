import { EventType } from '../data/types.js';
import { type RecordWithPlaintext } from '@puzzlehq/types';
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
