import { disconnect as _disconnect, SdkError } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useAsyncAction } from './utils/_useAsyncAction.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export function useDisconnect() {
    const isConnected = useIsConnected();
    const [onDisconnect] = useWalletStore((state) => [state.onDisconnect]);
    const { error, loading, setError, setLoading } = useAsyncAction();
    async function disconnect() {
        if (!isConnected) {
            setError(SdkError.NotConnected);
            return;
        }
        try {
            setLoading(true);
            setError(undefined);
            const response = await _disconnect();
            if (response.error) {
                setError(response.error);
            }
            onDisconnect();
        }
        catch (err) {
            setError(err);
            throw err;
        }
        finally {
            setLoading(false);
        }
    }
    return { error, loading, disconnect };
}
