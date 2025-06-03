import { useQuery } from '@tanstack/react-query';
import { useAsyncAction } from './_useAsyncAction.js';
export function useInjectedRequestQuery({ queryKey, enabled, queryOptions, fetchFunction, }) {
    return useQuery(queryKey, async () => fetchFunction(), queryOptions ?? {
        staleTime: queryKey[0] === 'getEvent' ? 7_500 : 30_000,
        refetchInterval: queryKey[0] === 'getEvent' ? 5_000 : 15_000,
        refetchIntervalInBackground: true,
        enabled,
        retry: true,
    });
}
export function useInjectedRequest(params, fetchFunction) {
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    async function request(paramsOverride) {
        try {
            setLoading(true);
            setError(undefined);
            console.log('useInjectedRequest sending request', paramsOverride ?? params);
            const response = await fetchFunction(paramsOverride ?? params);
            setData(response);
            return response;
        }
        catch (e) {
            setError(e.message);
            setLoading(false);
            throw e;
        }
        finally {
            setLoading(false);
        }
    }
    return { data, error, loading, request };
}
