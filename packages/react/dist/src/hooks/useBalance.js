import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useInjectedRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
export const useBalance = ({ address, multisig, network } = {}) => {
    const session = useWalletSession();
    const [selectedAddress, chainIdStr] = useWalletStore((state) => [state.address, state.chainIdStr]);
    const useQueryFunction = hasInjectedConnection()
        ? useInjectedRequestQuery
        : useRequestQuery;
    const query = {
        topic: session?.topic,
        chainId: chainIdStr,
        request: {
            jsonrpc: '2.0',
            method: 'getBalance',
            params: {
                address,
            },
        },
    };
    const { refetch, data: wc_data, error: wc_error, isLoading: loading, } = useQueryFunction({
        queryKey: [
            'useBalance',
            address,
            chainIdStr,
            selectedAddress,
            multisig,
            session?.topic,
        ],
        enabled: !!session && !!selectedAddress && (multisig ? !!address : true),
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
            return response;
        },
        wcParams: query,
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        session,
        configs: [
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => {
                    return !multisig;
                },
                onData: () => refetch(),
                dependencies: [multisig],
            },
            {
                subscriptionName: 'onSharedAccountSynced',
                condition: (data) => {
                    return !!multisig && data?.address === address;
                },
                onData: () => refetch(),
                dependencies: [multisig, address],
            },
        ],
    });
    // listen for mobile wallet-originating account updates
    useOnSessionEvent(({ params, topic }) => {
        const eventName = params.event.name;
        const _address = params.event.address ?? params.event.data.address;
        if (!hasInjectedConnection() &&
            ((eventName === 'selectedAccountSynced' && !multisig) ||
                (eventName === 'sharedAccountSynced' &&
                    multisig &&
                    _address === address))) {
            refetch();
        }
    });
    // send initial balance request...
    useEffect(() => {
        if (session && !loading) {
            refetch();
        }
    }, [session?.topic]);
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const balances = response?.balances;
    return { balances, error, loading };
};
