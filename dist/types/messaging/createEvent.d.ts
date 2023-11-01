import { type Record } from "./records.js";
import { EventType } from '@puzzlehq/types';
export type CreateEventRequestData = {
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    inputs: (Record | string)[];
};
export type CreateEventRequest = {
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
