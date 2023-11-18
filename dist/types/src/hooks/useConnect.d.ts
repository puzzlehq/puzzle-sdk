import { SessionTypes } from '@walletconnect/types';
export declare function useConnect(): {
    data: SessionTypes.Struct;
    error: string;
    loading: boolean;
    connect: () => Promise<any>;
};
