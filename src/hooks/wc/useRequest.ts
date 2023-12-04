import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html'
import { getWalletConnectModalSignClient } from '../../client.js'
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAsyncAction } from './_useAsyncAction.js';

async function fetchRequest<Result>(params: WalletConnectModalSignRequestArguments): Promise<Result> {
  const client = await getWalletConnectModalSignClient()
  return client.request<Result>(params);
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
    () => fetchRequest<Result>(wcParams),
    queryOptions ??
    {
      staleTime: 7_500,
      refetchInterval: 5_000,
      refetchIntervalInBackground: true,
      enabled,
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