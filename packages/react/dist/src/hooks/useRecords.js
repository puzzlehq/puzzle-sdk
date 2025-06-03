import { log_sdk, getRecords, } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const getFormattedRecordPlaintext = (data) => {
    try {
        return JSON.stringify(data, null, 2).replaceAll('"', '') ?? '';
    }
    catch {
        return '';
    }
};
export const useRecords = ({ address, multisig = false, filter, page, network, }) => {
    const { isConnected } = useIsConnected();
    const [account] = useWalletStore((state) => [state.account]);
    const [debouncedFilter] = useDebounce(filter, 500);
    const queryKey = [
        'useRecords',
        account?.address,
        address,
        multisig,
        JSON.stringify(debouncedFilter),
        page,
    ];
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey,
        enabled: (multisig ? !!address : true) && !!isConnected && !!account,
        fetchFunction: async () => {
            return await getRecords({
                filter,
                page,
                address,
                network,
            });
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
    });
    const fetchPage = () => {
        if (readyToRequest && !loading) {
            log_sdk('useRecords refetching...', [address, multisig, filter, page]);
            refetch();
        }
    };
    const error = _error?.message ?? undefined;
    const response = data;
    const records = response?.records;
    const pageCount = response?.pageCount ?? 0;
    return { fetchPage, records, error, loading, page, pageCount };
};
