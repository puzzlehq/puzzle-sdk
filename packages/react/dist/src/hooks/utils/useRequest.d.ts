import { GenericRequest } from '@puzzlehq/sdk-core';
import { UseQueryOptions } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';
type UseRequestParams<Result> = {
    queryKey: QueryKey;
    queryOptions?: UseQueryOptions<Result>;
    enabled?: boolean;
    fetchFunction?: (request?: any) => Promise<Result>;
};
export declare function useInjectedRequestQuery<Result>({ queryKey, enabled, queryOptions, fetchFunction, }: UseRequestParams<Result>): import("@tanstack/react-query").UseQueryResult<Result, unknown>;
export declare function useInjectedRequest<Result>(params: GenericRequest, fetchFunction?: (params: GenericRequest) => Promise<Result>): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: GenericRequest) => Promise<Result>;
};
export {};
