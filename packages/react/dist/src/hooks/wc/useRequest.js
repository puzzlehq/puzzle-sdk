import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';
import { useQuery } from '@tanstack/react-query';
import { useAsyncAction } from './_useAsyncAction.js';
async function fetchRequest(params, queryKey) {
    const client = await getWalletConnectModalSignClient();
    const result = await client.request(params);
    if (result === undefined && queryKey) {
        console.error('Result is undefined, retrying...');
        throw new Error('Result is undefined, retrying...');
    }
    return result;
}
export function useRequestQuery({ queryKey, wcParams, enabled, queryOptions, }) {
    return useQuery(queryKey, async () => fetchRequest(wcParams, queryKey), queryOptions ?? {
        staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
        refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
        refetchIntervalInBackground: true,
        enabled,
        retry: true,
    });
}
export function useInjectedRequestQuery({ queryKey, wcParams, enabled, queryOptions, fetchFunction, }) {
    return useQuery(queryKey, async () => fetchFunction(wcParams), queryOptions ?? {
        staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
        refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
        refetchIntervalInBackground: true,
        enabled,
        retry: true,
    });
}
export function useRequest(params, fetchFunction) {
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    async function request(paramsOverride) {
        try {
            setLoading(true);
            setError(undefined);
            const response = await fetchRequest(paramsOverride ?? params);
            setData(response);
            return response;
        }
        catch (e) {
            setError(JSON.stringify(e));
            setLoading(false);
            throw e;
        }
        finally {
            setLoading(false);
        }
    }
    return { data, error, loading, request };
}
export function useInjectedRequest(params, fetchFunction) {
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    async function request(paramsOverride) {
        try {
            setLoading(true);
            setError(undefined);
            const response = await fetchFunction(paramsOverride ?? params);
            setData(response);
            return response;
        }
        catch (e) {
            setError(e);
            setLoading(false);
            throw e;
        }
        finally {
            setLoading(false);
        }
    }
    return { data, error, loading, request };
}
