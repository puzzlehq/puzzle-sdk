import { useEffect } from 'react';
import { getEvent, } from '@puzzlehq/sdk-core';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useEvent = ({ id, address, multisig = false, network, }) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore((state) => [state.account]);
    const isEnabled = id !== undefined &&
        id !== '' &&
        !!isConnected &&
        !!account &&
        (multisig ? !!address : true);
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: ['useEvent', account?.address, address, network, multisig, id],
        enabled: isEnabled,
        fetchFunction: async () => {
            return await getEvent({ id, address, network, multisig });
        },
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => !!id && !multisig,
                onData: () => refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [id, multisig],
            },
            {
                subscriptionName: 'onSharedAccountSynced',
                condition: (data) => {
                    return !!id && !!multisig && data?.address === address;
                },
                onData: () => refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [id, multisig, address],
            },
        ],
    });
    // send initial events request
    const readyToRequest = !!isConnected && !!account && !!id && (multisig ? !!address : true);
    useEffect(() => {
        if (readyToRequest && !loading) {
            refetch();
        }
    }, [readyToRequest]);
    const fetchEvent = () => {
        if (readyToRequest && !loading) {
            refetch();
        }
    };
    const error = _error?.message ?? undefined;
    const response = data;
    const event = response?.event;
    return { fetchEvent, event, error, loading };
};
