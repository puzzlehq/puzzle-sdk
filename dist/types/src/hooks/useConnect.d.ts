import { SessionTypes } from '@walletconnect/types';
export declare function useConnect(): {
    data: SessionTypes.Struct | undefined;
    error: string | undefined;
    loading: boolean;
    connect: () => Promise<any>;
};
