import { jsx as _jsx } from "react/jsx-runtime";
import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider, useIsConnected } from './connectionProvider.js';
import { SubscriptionProvider } from './subscriptionProvider.js';
export const PuzzleWalletProvider = ({ children, debugQuery = false, }) => {
    return (_jsx(QueryProvider, { debugQuery: debugQuery, children: _jsx(ConnectionProvider, { children: _jsx(SubscriptionProvider, { children: children }) }) }));
};
export { useIsConnected };
