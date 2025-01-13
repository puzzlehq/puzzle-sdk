import { useEffect } from 'react';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useShallow } from 'zustand/react/shallow';
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
    const { isConnected } = useIsConnected();
    const [account, setAccount] = useWalletStore(useShallow((state) => [
        state.account,
        state.setAccount,
    ]));
    const query = {
        method: 'getSelectedAccount',
    };
    const { refetch, data, error: _error, isLoading: loading, } = useInjectedRequestQuery({
        queryKey: ['useAccount'],
        enabled: !!isConnected,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
            if (response.account) {
                setAccount(response.account);
            }
            return response;
        },
    });
    // send initial account request...
    useEffect(() => {
        if (isConnected && !loading) {
            refetch();
        }
    }, [isConnected]);
    const error = _error
        ? _error.message
        : data && data.error;
    return {
        account,
        error,
        loading,
    };
};
