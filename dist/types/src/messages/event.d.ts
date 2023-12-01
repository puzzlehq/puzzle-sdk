import { Event } from '../data/types.js';
export type GetEventRequest = {
    id: string;
};
export type GetEventResponse = {
    event?: Event;
    error?: string;
};
export declare const getEvent: (id: string) => Promise<GetEventResponse>;
