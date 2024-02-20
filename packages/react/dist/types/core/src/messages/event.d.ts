import { Event } from '../index.js';
export type GetEventRequest = {
    id: string;
    address?: string;
};
export type GetEventResponse = {
    event?: Event;
    error?: string;
};
export declare const getEvent: ({ id, address }: GetEventRequest) => Promise<GetEventResponse>;
