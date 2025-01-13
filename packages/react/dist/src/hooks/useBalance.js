import { useEffect } from 'react';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useShallow } from 'zustand/react/shallow';
export const useBalance = ({ address, network, multisig } = {}) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore(useShallow((state) => [state.account]));
    const query = {
        method: 'getBalance',
        params: {
            address,
        },
    };
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: [
            'useBalance',
            address,
            account?.address ?? '',
            network,
            multisig,
        ],
        enabled: !!isConnected,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
            return response;
        },
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => {
                    return !multisig;
                },
                onData: () => refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [multisig],
            },
            {
                subscriptionName: 'onSharedAccountSynced',
                condition: (data) => {
                    return !!multisig && data?.address === address;
                },
                onData: () => refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [multisig, address],
            },
        ],
    });
    // send initial balance request...
    useEffect(() => {
        if (isConnected && !loading) {
            refetch();
        }
    }, [isConnected]);
    const error = _error
        ? _error.message
        : data && data.error;
    const response = data;
    const balances = response?.balances;
    return { balances, error, loading };
};
