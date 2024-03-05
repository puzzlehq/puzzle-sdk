import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html';
import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
type UseRequestParams<Result> = {
    queryKey: QueryKey;
    wcParams: WalletConnectModalSignRequestArguments;
    queryOptions?: UseQueryOptions<Result>;
    enabled?: boolean;
    fetchFunction?: (request: any) => Promise<Result>;
};
export declare function useExtensionRequestQuery<Result>({ queryKey, wcParams, enabled, queryOptions, fetchFunction, }: UseRequestParams<Result>): import("@tanstack/react-query").UseQueryResult<Result, unknown>;
export declare function useRequestQuery<Result>({ queryKey, wcParams, enabled, queryOptions, }: UseRequestParams<Result>): import("@tanstack/react-query").UseQueryResult<Result, unknown>;
export declare function useRequest<Result>(params: WalletConnectModalSignRequestArguments): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: any) => Promise<Result | undefined>;
};
export {};
