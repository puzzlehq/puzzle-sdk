import { useEffect } from 'react';
import { getBalance, } from '@puzzlehq/sdk-core';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useBalance = ({ address, network, multisig, } = {}) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore((state) => [state.account]);
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
            return await getBalance({ address, network });
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
    const error = _error?.message ?? undefined;
    const response = data;
    const balances = response?.balances;
    return { balances, error, loading };
};
