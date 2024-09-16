import { SessionTypes } from '@walletconnect/types';
import { ConnectProps } from '@puzzlehq/sdk-core';
export declare function useConnect({ programIds, showModal }: ConnectProps): {
    data: any;
    error: unknown;
    loading: boolean;
    isConnected: boolean;
    connect: () => Promise<SessionTypes.Struct>;
};
