import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import useInjectedSubscriptions from '../hooks/utils/useInjectedSubscription.js';
import { shortenAddress } from '@puzzlehq/sdk-core';
import { useIsConnected } from './connectionProvider.js';
import { useWalletStore } from '../store.js';
export const SubscriptionProvider = ({ children }) => {
    const { isConnected, setIsConnected } = useIsConnected();
    const [onDisconnect, setAccount] = useWalletStore((state) => [state.onDisconnect, state.setAccount]);
    useInjectedSubscriptions({
        configs: [
            {
                subscriptionName: 'onAccountSelected',
                condition: () => !!isConnected,
                onData: (data) => {
                    setAccount({
                        network: data.network,
                        address: data.address,
                        shortenedAddress: shortenAddress(data.address),
                    });
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [isConnected],
            },
            {
                subscriptionName: 'onSelectedAccountSynced',
                condition: () => !!isConnected,
                onData: (data) => {
                    setIsConnected(true);
                    setAccount({
                        network: data.network,
                        address: data.address,
                        shortenedAddress: shortenAddress(data.address),
                    });
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [isConnected],
            },
            {
                subscriptionName: 'onDisconnect',
                condition: () => !!isConnected,
                onData: () => {
                    console.log('Wallet-originated disconnect');
                    onDisconnect();
                    setIsConnected(false);
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [isConnected],
            },
        ],
    });
    return _jsx(_Fragment, { children: children });
};
