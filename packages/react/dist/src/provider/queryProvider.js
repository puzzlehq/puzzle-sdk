import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export const queryClient = new QueryClient();
export const QueryProvider = ({ children, debugQuery }) => {
    return (_jsxs(QueryClientProvider, { client: queryClient, children: [debugQuery && _jsx(ReactQueryDevtools, { initialIsOpen: false }), children] }));
};
