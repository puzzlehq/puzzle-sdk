import { Event } from '@puzzlehq/types';
export declare const useEvent: (id?: string) => {
    fetchEvent: () => void;
    event: Event | undefined;
    error: string | undefined;
    loading: boolean;
};
