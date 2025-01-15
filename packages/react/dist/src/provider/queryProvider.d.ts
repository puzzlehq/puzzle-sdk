import { QueryClient } from '@tanstack/query-core';
export declare const queryClient: QueryClient;
type Props = {
    children: React.ReactNode;
    debugQuery?: boolean;
};
export declare const QueryProvider: ({ children, debugQuery }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
