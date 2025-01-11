import { useEffect } from 'react';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useEvents = ({ filter, page, address, network }) => {
    const isConnected = useIsConnected();
    const [account] = useWalletStore((state) => [state.account]);
    if (filter?.programId === '') {
        filter.programId = undefined;
    }
    const query = {
        method: 'getEvents',
        params: {
            filter,
            page,
            address,
            network
        },
    };
    const [debouncedFilter] = useDebounce(filter, 500);
    const { refetch, data: wc_data, error: wc_error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: [
            'useEvents',
            account?.address,
            JSON.stringify(debouncedFilter),
            page,
        ],
        enabled: !!isConnected,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getEvents.query(query);
            return response;
        },
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => true,
                onData: () => refetch(),
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [],
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
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const events = response?.events;
    const pageCount = response?.pageCount ?? 0;
    return { fetchPage, events, error, loading, page, pageCount };
};
