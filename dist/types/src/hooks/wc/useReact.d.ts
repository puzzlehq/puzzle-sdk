import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html';
export declare function useRequest<Result>(params: WalletConnectModalSignRequestArguments): {
    data: any;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: WalletConnectModalSignRequestArguments) => Promise<any>;
};
