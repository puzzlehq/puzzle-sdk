import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html';
export declare function useRequest<Result>(params: WalletConnectModalSignRequestArguments): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: any) => Promise<any>;
};
