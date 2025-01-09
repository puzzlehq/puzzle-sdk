import { SessionTypes } from '@walletconnect/types';
import { ProgramIdPermissions } from '../data/types.js';
type BaseConnectRequest = {
    dAppInfo: {
        name?: string;
        description?: string;
        iconUrl?: string;
    };
    permissions: {
        programIds: ProgramIdPermissions;
    };
};
export type ConnectRequest = BaseConnectRequest;
export type ConnectRequestForWallet = BaseConnectRequest & {
    dAppInfo: {
        hostname: string;
    };
};
export declare const connect: (showModal?: boolean) => Promise<SessionTypes.Struct | undefined>;
export {};
