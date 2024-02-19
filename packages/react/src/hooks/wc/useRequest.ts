import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html'
import { getWalletConnectModalSignClient } from '../../../../core/src/client.js'
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAsyncAction } from './_useAsyncAction.js';

async function fetchRequest<Result>(params: WalletConnectModalSignRequestArguments, queryKey?: QueryKey): Promise<Result | undefined> {
  const client = await getWalletConnectModalSignClient()
  const result = await client.request<Result>(params);
  if (result === undefined && queryKey) {
    console.error('Result is undefined, retrying...');
    throw new Error('Result is undefined, retrying...');
  }
  return result;
}

type UseRequestParams<Result> = {
  queryKey: QueryKey, 
  wcParams: WalletConnectModalSignRequestArguments, 
  queryOptions?: UseQueryOptions<Result>,
  enabled?: boolean
}

export function useRequestQuery<Result>({ queryKey, wcParams, enabled, queryOptions }: UseRequestParams<Result>) {
  return useQuery(
    queryKey,
    async () => fetchRequest<Result>(wcParams, queryKey),
    queryOptions ??
    {
      staleTime: queryKey[0] === 'getEvent' ? 7_500 : 45_000,
      refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 30_000,
      refetchIntervalInBackground: true,
      enabled,
      retry: true,
    }
  )
}

export function useRequest<Result>(params: WalletConnectModalSignRequestArguments) {
  const { data, error, loading, setData, setError, setLoading } = useAsyncAction<Result>()
  async function request(paramsOverride?: WalletConnectModalSignRequestArguments) {
    try {
      setLoading(true)
      setError(undefined)
      const response = await fetchRequest<Result>(params ?? paramsOverride)
      setData(response)
      return response
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }
  return { data, error, loading, request }
}