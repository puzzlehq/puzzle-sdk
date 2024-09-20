import { EventType } from '../index.js';
import { Network, type RecordWithPlaintext } from '@puzzlehq/types';
export type CreateEventRequestData = {
    address?: string;
    type: EventType;
    network?: Network;
    programId: string;
    functionId: string;
    fee: number;
    feeRecord?: RecordWithPlaintext;
    inputs: (RecordWithPlaintext | string)[];
    tokenIds?: string[];
};
export type CreateEventRequest = {
    address?: string;
    type: EventType;
    network?: Network;
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
export declare const requestCreateEvent: (requestData: CreateEventRequestData, network?: Network) => Promise<CreateEventResponse>;
