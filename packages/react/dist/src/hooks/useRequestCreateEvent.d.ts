import { CreateEventRequest, CreateEventRequestData, CreateEventResponse } from '@puzzlehq/sdk-core';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: (createEventRequestOverride?: CreateEventRequest) => Promise<CreateEventResponse | undefined> | undefined;
    eventId: string | undefined;
    loading: boolean;
    error: string | undefined;
};
