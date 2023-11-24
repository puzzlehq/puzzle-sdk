import { CreateEventRequestData } from '../messages/createEvent.js';
export declare const useCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: () => void;
    eventID: string;
    loading: boolean;
    error: string;
};
