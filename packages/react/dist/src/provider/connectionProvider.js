import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { PuzzleWalletSDKEventEmitter, shortenAddress } from '@puzzlehq/sdk-core';
export const ConnectionContext = createContext(undefined);
export const useIsConnected = () => {
    const context = useContext(ConnectionContext);
    if (!context) {
        throw new Error('useIsConnected must be used within a ConnectionProvider');
    }
    useEffect(() => {
        console.log(`isConnected: ${context.isConnected}`);
    }, [context.isConnected]);
    return {
        isConnected: context?.isConnected,
        setIsConnected: context?.setIsConnected,
    };
};
export const ConnectionProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, onDisconnect, setAccount] = useWalletStore((state) => [
        state.account,
        state.onDisconnect,
        state.setAccount,
    ]);
    useEffect(() => {
        PuzzleWalletSDKEventEmitter.on('connectSuccess', (response) => {
            console.log('PuzzleWalletSDKEventEmitter.on(\'connectSuccess\') called!');
            if (response.connection) {
                setIsConnected(true);
                setAccount({
                    address: response.connection.address,
                    network: response.connection.network,
                    shortenedAddress: shortenAddress(response.connection.address)
                });
            }
        });
        PuzzleWalletSDKEventEmitter.on('disconnectSuccess', () => {
            setIsConnected(false);
            onDisconnect();
        });
    }, []);
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
