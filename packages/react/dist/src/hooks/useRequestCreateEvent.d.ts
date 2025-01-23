import { CreateEventRequest, CreateEventRequestData, CreateEventResponse, SettlementStatus } from '@puzzlehq/sdk-core';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: (createEventRequestOverride?: CreateEventRequest) => Promise<CreateEventResponse | undefined> | undefined;
    eventId: string | undefined;
    loading: boolean;
    error: string | undefined;
    settlementStatus: SettlementStatus | undefined;
};
