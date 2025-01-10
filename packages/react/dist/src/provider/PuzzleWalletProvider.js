import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
export const queryClient = new QueryClient();
const ConnectionContext = createContext(undefined);
export const PuzzleWalletProvider = ({ children, debugQuery = false, }) => {
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
    return (_jsx(ConnectionContext.Provider, { value: data, children: _jsxs(QueryClientProvider, { client: queryClient, children: [debugQuery && _jsx(ReactQueryDevtools, { initialIsOpen: false }), children] }) }));
};
export const useIsConnected = () => {
    const isConnected = useContext(ConnectionContext);
    return isConnected;
};
