import { SessionTypes } from '@walletconnect/types';
import { ProgramIdPermissions } from '../data/types.js';
import { Balance, Network } from '@puzzlehq/types';
export type ConnectRequest = {
    dAppInfo: {
        name?: string;
        description?: string;
        iconUrl?: string;
    };
    permissions: {
        programIds: ProgramIdPermissions;
    };
};
export type Connection = ConnectRequest & {
    dAppInfo: {
        hostname: string;
    };
    expiry: Date;
};
export type ConnectionWithAccountInfo = Connection & {
    address: string;
    network: Network;
    balances: Balance[];
};
export type ConnectResponse = {
    connection?: ConnectionWithAccountInfo;
    error?: string;
};
export declare const connect: (showModal?: boolean) => Promise<SessionTypes.Struct | undefined>;
