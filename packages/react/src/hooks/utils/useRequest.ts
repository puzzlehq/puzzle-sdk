import { GenericRequest } from '@puzzlehq/sdk-core';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';
import { useAsyncAction } from './_useAsyncAction.js';

type UseRequestParams<Result> = {
  queryKey: QueryKey;
  queryOptions?: UseQueryOptions<Result>;
  enabled?: boolean;
  fetchFunction?: (request?: any) => Promise<Result>;
};

export function useInjectedRequestQuery<Result>({
  queryKey,
  enabled,
  queryOptions,
  fetchFunction,
}: UseRequestParams<Result>) {
  return useQuery(
    queryKey,
    async () => fetchFunction!(),
    queryOptions ?? {
      staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
      refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
      refetchIntervalInBackground: true,
      enabled,
      retry: true,
    },
  );
}

export function useInjectedRequest<Result>(
  params: GenericRequest,
  fetchFunction?: (params: GenericRequest) => Promise<Result>,
) {
  const { data, error, loading, setData, setError, setLoading } =
    useAsyncAction<Result>();
  async function request(paramsOverride?: GenericRequest) {
    try {
      setLoading(true);
      setError(undefined);
      console.log('useInjectedRequest sending request', paramsOverride ?? params)
      const response: Result = await fetchFunction!(paramsOverride ?? params);
      setData(response);
      return response;
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
      throw e;
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, request };
}
