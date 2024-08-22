import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionUpdate } from './wc/useOnSessionUpdate.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery, useRequestQuery } from './wc/useRequest.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
export const shortenAddress = (address, aleo = true, length = 4, short = true) => {
    if (!address)
        return '';
    if (address.length < length)
        return address;
    if (short) {
        return `(...${address.slice(-length)})`;
    }
    if (address.length < length * 2)
        return address;
    return `${address.slice(0, length + (aleo ? 'aleo1'.length : 0))}...${address.slice(address.length - length, address.length)}`;
};
export const useAccount = () => {
    const session = useWalletSession();
    const [account, setAccount, onDisconnect] = useWalletStore((state) => [
        state.account,
        state.setAccount,
        state.onDisconnect,
    ]);
    const useQueryFunction = hasInjectedConnection()
        ? useInjectedRequestQuery
        : useRequestQuery;
    const query = {
        topic: session?.topic,
        chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'getSelectedAccount',
        },
    };
    const { refetch, data: wc_data, error: wc_error, isLoading: loading, } = useQueryFunction({
        queryKey: ['useAccount', session?.topic],
        enabled: !!session,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
            return response;
        },
        wcParams: query,
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        session,
        configs: [
            {
                subscriptionName: 'onAccountSelected',
                condition: (data) => {
                    return !!data?.address;
                },
                onData: (data) => {
                    const network = data.chain?.split(':')[0] ?? 'aleo';
                    const chainId = data.chain?.split(':')[1] ?? '1';
                    setAccount({
                        network,
                        chainId,
                        address: data.address,
                        shortenedAddress: shortenAddress(data.address),
                    });
                },
                dependencies: [],
            },
        ],
    });
    // listen for mobile wallet-originating account updates
    useOnSessionEvent(({ params, topic }) => {
        const eventName = params.event.name;
        if (!hasInjectedConnection() &&
            eventName === 'accountSelected' &&
            session &&
            session.topic === topic) {
            const address = params.event.address ?? params.event.data.address;
            const network = params.chainId.split(':')[0];
            const chainId = params.chainId.split(':')[1];
            setAccount({
                network,
                chainId,
                address,
                shortenedAddress: shortenAddress(address),
            });
        }
    });
    useOnSessionUpdate(({ params, topic }) => {
        const address = params.event.address ?? params.event.data.address;
        const network = params.chainId.split(':')[0];
        const chainId = params.chainId.split(':')[1];
        setAccount({
            network,
            chainId,
            address,
            shortenedAddress: shortenAddress(address),
        });
    });
    useOnSessionDelete(() => {
        onDisconnect();
    });
    // send initial account request...
    useEffect(() => {
        if (session && !loading) {
            refetch();
        }
    }, [session?.topic]);
    // ...and listen for a response
    useEffect(() => {
        if (wc_data) {
            const puzzleData = wc_data;
            const account = puzzleData?.account;
            if (account) {
                setAccount(account);
            }
        }
    }, [wc_data]);
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    return {
        account,
        error,
        loading,
    };
};
