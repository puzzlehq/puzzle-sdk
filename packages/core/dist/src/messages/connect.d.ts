import { SessionTypes } from '@walletconnect/types';
import { Network } from '@puzzlehq/types';
export type ConnectProps = {
    networks: Network[];
    programIds: Record<Network, string[]>;
    showModal?: boolean;
};
export declare const getAleoMethods: (networks: Network[], programIds: Record<Network, string[]>) => string[] | undefined;
export declare const getAleoChains: (networks: Network[]) => string[];
export declare const connect: ({ programIds, networks, showModal }: ConnectProps) => Promise<SessionTypes.Struct | undefined>;
