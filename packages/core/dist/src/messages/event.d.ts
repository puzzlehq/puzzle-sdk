import { Event } from '../index.js';
import { Network } from '@puzzlehq/types';
export type GetEventRequest = {
    id: string;
    address?: string;
    network?: Network;
    multisig?: boolean;
};
export type GetEventResponse = {
    event: Event;
};
export declare const getEvent: ({ id, address, network, }: GetEventRequest) => Promise<GetEventResponse>;
