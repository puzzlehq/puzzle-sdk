import { CreateEventRequestData } from '@puzzlehq/sdk-core';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: () => void;
    eventId: string | undefined;
    loading: boolean;
    error: string | undefined;
};
