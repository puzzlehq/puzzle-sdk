import { connect as _connect } from '@puzzlehq/sdk-core';
import { useAsyncAction } from './utils/_useAsyncAction.js';
import { useWalletStore } from '../store.js';
import { shortenAddress } from './useAccount.js';
import { useIsConnected } from '../provider/connectionProvider.js';
import { useShallow } from 'zustand/react/shallow';
export function useConnect(request) {
    const { isConnected, setIsConnected } = useIsConnected();
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    const [setAccount] = useWalletStore(useShallow((state) => [state.setAccount]));
    async function connect() {
        try {
            setLoading(true);
            setError(undefined);
            console.log('connect request', request);
            const response = await _connect(request);
            if (response.connection) {
                setData(response);
                setAccount({
                    address: response.connection.address,
                    network: response.connection.network,
                    shortenedAddress: shortenAddress(response.connection.address)
                });
                setIsConnected?.(true);
            }
            else if (response.error) {
                setError(response.error);
            }
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
