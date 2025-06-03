import { Network } from '@puzzlehq/types';
export type PuzzleAccount = {
    address: string;
    shortenedAddress: string;
    network: Network;
};
export type ProgramIdPermissions = Partial<Record<Network, string[]>>;
export type GenericRequest = {
    method: string;
    params?: any;
};
