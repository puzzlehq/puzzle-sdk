import { Event } from '@puzzlehq/types';
type UseEventParams = {
    id?: string;
    address?: string;
    multisig?: boolean;
};
export declare const useEvent: ({ id, address, multisig }: UseEventParams) => {
    fetchEvent: () => void;
    event: Event | undefined;
    error: string | undefined;
    loading: boolean;
};
export {};
