import { Event, Network } from '../index.js';
export type GetEventRequest = {
    id: string;
    address?: string;
    network?: Network;
};
export type GetEventResponse = {
    event?: Event;
    error?: string;
};
export declare const getEvent: ({ id, address, network, }: GetEventRequest) => Promise<GetEventResponse>;
