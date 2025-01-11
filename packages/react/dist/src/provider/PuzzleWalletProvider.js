import { jsx as _jsx } from "react/jsx-runtime";
import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider, useIsConnected } from './connectionProvider.js';
export const PuzzleWalletProvider = ({ children, debugQuery = false, }) => {
    return (_jsx(QueryProvider, { debugQuery: debugQuery, children: _jsx(ConnectionProvider, { children: children }) }));
};
export { useIsConnected };
