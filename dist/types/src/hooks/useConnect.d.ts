import { SessionTypes } from '@walletconnect/types';
export declare function useConnect(): {
    data: any;
    error: unknown;
    loading: boolean;
    connect: () => Promise<SessionTypes.Struct>;
};
