import { connect as _connect } from '@puzzlehq/sdk-core';
import { useAsyncAction } from './utils/_useAsyncAction.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export function useConnect(request) {
    const isConnected = useIsConnected();
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    async function connect() {
        try {
            setLoading(true);
            setError(undefined);
            const response = await _connect(request);
            setData(response);
            return response;
        }
        catch (err) {
            setError(err);
            throw err;
        }
        finally {
            setLoading(false);
        }
    }
    return { data, error, loading, isConnected, connect };
}
