import { SessionTypes } from '@walletconnect/types';
export declare const useAccount: () => {
    account: import("../index.js").PuzzleAccount | undefined;
    accounts: import("../index.js").PuzzleAccount[];
    isConnected: boolean;
    session: SessionTypes.Struct;
    error: string | undefined;
    loading: any;
};
