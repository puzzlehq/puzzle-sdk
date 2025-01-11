import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
const ConnectionContext = createContext(undefined);
export const ConnectionProvider = ({ children }) => {
    const { data, } = useInjectedRequestQuery({
        queryKey: [
            'isConnected',
        ],
        enabled: true,
        fetchFunction: async () => {
            const response = await window.aleo.puzzleWalletClient.isConnected.query();
            return response;
        },
    });
    return (_jsx(ConnectionContext.Provider, { value: data, children: children }));
};
export const useIsConnected = () => {
    const isConnected = useContext(ConnectionContext);
    return isConnected;
};
