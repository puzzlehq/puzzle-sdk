import { log_sdk, } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useShallow } from 'zustand/react/shallow';
export const getFormattedRecordPlaintext = (data) => {
    try {
        return JSON.stringify(data, null, 2).replaceAll('"', '') ?? '';
    }
    catch {
        return '';
    }
};
export const useRecords = ({ address, multisig = false, filter, page, network }) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore(useShallow((state) => [state.account]));
    const query = {
        method: 'getRecords',
        params: {
            address,
            filter,
            page,
            network
        },
    };
    const [debouncedFilter] = useDebounce(filter, 500);
    const queryKey = [
        'useRecords',
        account?.address,
        address,
        multisig,
        JSON.stringify(debouncedFilter),
        page,
    ];
    const { refetch, data: wc_data, error: wc_error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey,
        enabled: (multisig ? !!address : true) && !!isConnected && !!account,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getRecords.query(query);
            return response;
        },
    });
    const readyToRequest = !!isConnected && !!account && (multisig ? !!address : true);
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => !multisig,
                onData: () => refetch(),
                onError: (e) => {
                    isConnected && console.error(e);
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
        isConnected
    });
    const fetchPage = () => {
        if (readyToRequest && !loading) {
            log_sdk('useRecords refetching...', [address, multisig, filter, page]);
            refetch();
        }
    };
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const records = response?.records;
    const pageCount = response?.pageCount ?? 0;
    return { fetchPage, records, error, loading, page, pageCount };
};
