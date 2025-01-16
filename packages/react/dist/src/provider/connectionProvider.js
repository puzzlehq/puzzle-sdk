import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { useShallow } from 'zustand/react/shallow';
export const ConnectionContext = createContext(undefined);
export const useIsConnected = () => {
    const context = useContext(ConnectionContext);
    if (!context) {
        throw new Error('useIsConnected must be used within a ConnectionProvider');
    }
    return {
        isConnected: context?.isConnected,
        setIsConnected: context?.setIsConnected,
    };
};
export const ConnectionProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, onDisconnect] = useWalletStore(useShallow((state) => [
        state.account,
        state.onDisconnect,
        state.setAccount,
    ]));
    useInjectedRequestQuery({
        queryKey: ['isConnected'],
        enabled: true,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.isConnected.query({
                method: 'isConnected',
            });
            if (response === false && account) {
                console.log(`ConnectionProvider isConnected: false, disconnecting`);
                onDisconnect();
            }
            setIsConnected(response);
            return response;
        },
    });
    return (_jsx(ConnectionContext.Provider, { value: { isConnected, setIsConnected }, children: children }));
};
