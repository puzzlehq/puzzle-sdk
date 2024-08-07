import type { WalletConnectModalSignRequestArguments } from '@puzzlehq/walletconnect-modal-sign-html';
import { UseQueryOptions } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';
type UseRequestParams<Result> = {
    queryKey: QueryKey;
    wcParams: WalletConnectModalSignRequestArguments;
    queryOptions?: UseQueryOptions<Result>;
    enabled?: boolean;
    fetchFunction?: (request: any) => Promise<Result>;
};
export declare function useRequestQuery<Result>({ queryKey, wcParams, enabled, queryOptions, }: UseRequestParams<Result>): import("@tanstack/react-query").UseQueryResult<Result, unknown>;
export declare function useInjectedRequestQuery<Result>({ queryKey, wcParams, enabled, queryOptions, fetchFunction, }: UseRequestParams<Result>): import("@tanstack/react-query").UseQueryResult<Result, unknown>;
export declare function useRequest<Result>(params: WalletConnectModalSignRequestArguments, fetchFunction?: (params: WalletConnectModalSignRequestArguments) => any): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: any) => Promise<Result | undefined>;
};
export declare function useInjectedRequest<Result>(params: WalletConnectModalSignRequestArguments, fetchFunction?: (params: WalletConnectModalSignRequestArguments) => any): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: any) => Promise<Result>;
};
export {};
