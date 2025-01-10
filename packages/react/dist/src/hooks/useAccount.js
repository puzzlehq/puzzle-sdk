import { useEffect } from 'react';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
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
    const isConnected = useIsConnected();
    const [account, setAccount, onDisconnect] = useWalletStore((state) => [
        state.account,
        state.setAccount,
        state.onDisconnect,
    ]);
    const query = {
        method: 'getSelectedAccount',
    };
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: ['useAccount'],
        enabled: isConnected,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
            return response;
        },
    });
    // listen for injected wallet-originating account updates
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onAccountSelected',
                condition: () => {
                    return true;
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
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onDisconnect',
                condition: () => true,
                onData: () => {
                    onDisconnect();
                    setAccount(undefined);
                },
                dependencies: [],
            },
        ],
    });
    // send initial account request...
    useEffect(() => {
        if (isConnected && !loading) {
            refetch();
        }
    }, [isConnected]);
    // ...and listen for a response
    useEffect(() => {
        if (data) {
            const puzzleData = data;
            const account = puzzleData?.account;
            if (account) {
                setAccount(account);
            }
        }
    }, [data]);
    const error = _error
        ? _error.message
        : data && data.error;
    return {
        account,
        error,
        loading,
    };
};
