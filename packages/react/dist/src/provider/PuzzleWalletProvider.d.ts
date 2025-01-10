import { QueryClient } from '@tanstack/query-core';
type PuzzleWalletProviderProps = {
    children: React.ReactNode;
    debugQuery?: boolean;
};
export declare const queryClient: QueryClient;
export declare const PuzzleWalletProvider: ({ children, debugQuery, }: PuzzleWalletProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useIsConnected: () => boolean | undefined;
export {};
