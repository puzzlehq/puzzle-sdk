import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import useInjectedSubscriptions from "../hooks/utils/useInjectedSubscription.js";
import { shortenAddress } from '../hooks/useAccount.js';
import { useIsConnected } from "./connectionProvider.js";
import { useWalletStore } from "../store.js";
import { useShallow } from "zustand/react/shallow";
export const SubscriptionProvider = ({ children }) => {
    const { isConnected, setIsConnected } = useIsConnected();
    const [onDisconnect, setAccount] = useWalletStore(useShallow((state) => [state.onDisconnect, state.setAccount]));
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
                    onDisconnect();
                    setIsConnected(false);
                },
                onError: (e) => {
                    console.error(e);
                },
                dependencies: [isConnected],
            },
        ]
    });
    return _jsx(_Fragment, { children: children });
};
