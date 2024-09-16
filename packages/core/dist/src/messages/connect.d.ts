import { SessionTypes } from '@walletconnect/types';
import { Network } from '@puzzlehq/types';
type ProgramIds = Partial<Record<Network, string[]>>;
export type ConnectProps = {
    programIds: ProgramIds;
    showModal?: boolean;
};
export declare const isWcProgramId: (method: string) => boolean;
export declare const getAleoMethods: (programIds: ProgramIds) => string[];
export declare const getProgramIdsFromWcMethods: (networks: Network[], methods: string[]) => ProgramIds;
export declare const getAleoChains: (networks: Network[]) => string[];
export declare const connect: ({ programIds, showModal }: ConnectProps) => Promise<SessionTypes.Struct | undefined>;
export {};
