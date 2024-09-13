import type { WalletConnectModalSignRequestArguments } from '@puzzlehq/walletconnect-modal-sign-html';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';
import { useAsyncAction } from './_useAsyncAction.js';

async function fetchRequest<Result>(
  params: WalletConnectModalSignRequestArguments,
  queryKey?: QueryKey,
): Promise<Result | undefined> {
  const client = await getWalletConnectModalSignClient();
  const result = await client.request<Result>(params);
  if (result === undefined && queryKey) {
    console.error('Result is undefined, retrying...');
    throw new Error('Result is undefined, retrying...');
  }
  return result;
}

type UseRequestParams<Result> = {
  queryKey: QueryKey;
  wcParams: WalletConnectModalSignRequestArguments;
  queryOptions?: UseQueryOptions<Result>;
  enabled?: boolean;
  fetchFunction?: (request: any) => Promise<Result>;
};

export function useRequestQuery<Result>({
  queryKey,
  wcParams,
  enabled,
  queryOptions,
}: UseRequestParams<Result>) {
  return useQuery(
    queryKey,
    async () => fetchRequest<Result>(wcParams, queryKey),
    queryOptions ?? {
      staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
      refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
      refetchIntervalInBackground: true,
      enabled,
      retry: true,
    },
  );
}

export function useInjectedRequestQuery<Result>({
  queryKey,
  wcParams,
  enabled,
  queryOptions,
  fetchFunction,
}: UseRequestParams<Result>) {
  return useQuery(
    queryKey,
    async () => fetchFunction!(wcParams),
    queryOptions ?? {
      staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
      refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
      refetchIntervalInBackground: true,
      enabled,
      retry: true,
    },
  );
}

export function useRequest<Result>(
  params: WalletConnectModalSignRequestArguments,
  fetchFunction?: (params: WalletConnectModalSignRequestArguments) => any,
) {
  const { data, error, loading, setData, setError, setLoading } =
    useAsyncAction<Result>();
  async function request(
    paramsOverride?: WalletConnectModalSignRequestArguments,
  ) {
    try {
      setLoading(true);
      setError(undefined);
      const response = await fetchRequest<Result>(paramsOverride ?? params);
      setData(response);
      return response;
    } catch (e) {
      setError(JSON.stringify(e));
      setLoading(false);
      throw e;
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, request };
}

export function useInjectedRequest<Result>(
  params: WalletConnectModalSignRequestArguments,
  fetchFunction?: (params: WalletConnectModalSignRequestArguments) => any,
) {
  const { data, error, loading, setData, setError, setLoading } =
    useAsyncAction<Result>();
  async function request(
    paramsOverride?: WalletConnectModalSignRequestArguments,
  ) {
    try {
      setLoading(true);
      setError(undefined);
      const response: Result = await fetchFunction!(paramsOverride ?? params);
      setData(response);
      return response;
    } catch (e) {
      setError(e);
      setLoading(false);
      throw e;
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, request };
}
