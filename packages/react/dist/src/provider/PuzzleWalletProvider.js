import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { configureConnection } from '@puzzlehq/sdk-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import EventEmitter from 'events';
import { useWalletStore } from '../store.js';
import { useSession } from '../hooks/wc/useSession.js';
export const queryClient = new QueryClient();
const SessionContext = createContext(undefined);
export const PuzzleWalletProvider = ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children, debugQuery = false, }) => {
    const [session, setSession] = useState(undefined);
    const _session = useSession();
    useEffect(() => {
        setSession(_session);
    }, [_session]);
    useEffect(() => {
        configureConnection({
            dAppName,
            dAppDescription,
            dAppUrl,
            dAppIconURL,
            onDisconnect: useWalletStore.getState().onDisconnect,
        });
        EventEmitter.defaultMaxListeners = 100;
    }, []);
    return (_jsx(SessionContext.Provider, { value: session, children: _jsxs(QueryClientProvider, { client: queryClient, children: [debugQuery && _jsx(ReactQueryDevtools, { initialIsOpen: false }), children] }) }));
};
// Custom hook for accessing the session
export const useWalletSession = () => {
    const session = useContext(SessionContext);
    return session;
};
