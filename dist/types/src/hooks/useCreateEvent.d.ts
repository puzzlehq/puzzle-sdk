import { CreateEventRequestData } from '../messages/createEvent.js';
export declare const useCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: () => void;
    eventID: string | undefined;
    loading: boolean;
    error: string | undefined;
};
