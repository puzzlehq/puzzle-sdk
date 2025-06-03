import { ProgramIdPermissions } from '../data/types.js';
import { Balance, Network } from '@puzzlehq/types';
export type ConnectRequestParams = {
    dAppInfo: {
        name?: string;
        description?: string;
        iconUrl?: string;
    };
    permissions: {
        programIds: ProgramIdPermissions;
    };
};
export type Connection = ConnectRequestParams & {
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
export type ConnectRequest = {
    method: 'connect';
    params: ConnectRequestParams;
};
export type ConnectResponse = {
    connection: ConnectionWithAccountInfo;
};
export declare const connect: (request: ConnectRequestParams) => Promise<ConnectResponse>;
