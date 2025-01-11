import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider } from './connectionProvider.js';
const ConnectionContext = createContext(undefined);
export const PuzzleWalletProvider = ({ children, debugQuery = false, }) => {
    return (_jsx(QueryProvider, { debugQuery: debugQuery, children: _jsx(ConnectionProvider, { children: children }) }));
};
export const useIsConnected = () => {
    const isConnected = useContext(ConnectionContext);
    return isConnected;
};
