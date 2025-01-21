import { useEffect } from 'react';
import { getEvents, } from '@puzzlehq/sdk-core';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useEvents = ({ filter, page, address, network, }) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore((state) => [state.account]);
    if (filter?.programId === '') {
        filter.programId = undefined;
    }
    const [debouncedFilter] = useDebounce(filter, 500);
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: [
            'useEvents',
            account?.address,
            JSON.stringify(debouncedFilter),
            page,
        ],
        enabled: !!isConnected,
        fetchFunction: async () => {
            return await getEvents({
                filter,
                page,
                address,
                network,
            });
        },
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => true,
                onData: () => isConnected && refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [isConnected],
            },
        ],
    });
    // send initial events request
    const readyToRequest = !!isConnected && !!account;
    useEffect(() => {
        if (readyToRequest && !loading) {
            refetch();
        }
    }, [readyToRequest]);
    const fetchPage = () => {
        if (readyToRequest && !loading) {
            refetch();
        }
    };
    const error = _error?.message ?? undefined;
    const response = data;
    const events = response?.events;
    const pageCount = response?.pageCount ?? 0;
    return { fetchPage, events, error, loading, page, pageCount };
};
