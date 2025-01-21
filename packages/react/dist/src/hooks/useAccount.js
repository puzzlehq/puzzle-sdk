import { useEffect } from 'react';
import { getAccount } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useAccount = () => {
    const { isConnected } = useIsConnected();
    const [account, setAccount] = useWalletStore((state) => [state.account, state.setAccount]);
    const { refetch, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: ['useAccount'],
        enabled: !!isConnected,
        fetchFunction: async () => {
            const response = await getAccount();
            if (response.account) {
                setAccount(response.account);
            }
            return response;
        },
    });
    // send initial account request...
    useEffect(() => {
        if (isConnected && !loading) {
            refetch();
        }
    }, [isConnected]);
    const error = _error?.message ?? undefined;
    return {
        account,
        error,
        loading,
    };
};
