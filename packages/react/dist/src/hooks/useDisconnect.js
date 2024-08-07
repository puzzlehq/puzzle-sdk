import { emitter, getWalletConnectModalSignClient, } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { getSdkError } from '@walletconnect/utils';
import { useAsyncAction } from './wc/_useAsyncAction.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
export function useDisconnect() {
    const session = useWalletSession();
    const [onDisconnect] = useWalletStore((state) => [state.onDisconnect]);
    const { error, loading, setError, setLoading } = useAsyncAction();
    async function disconnect() {
        if (!session || loading) {
            if (!session)
                onDisconnect();
            return;
        }
        try {
            setLoading(true);
            setError(undefined);
            try {
                const client = await getWalletConnectModalSignClient();
                await client.disconnect({
                    topic: session.topic,
                    reason: getSdkError('USER_DISCONNECTED'),
                });
                emitter.emit('session_change');
            }
            catch (e) {
                console.warn(e);
            }
            useWalletStore.getState().onDisconnect();
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
