import { QueryClient } from '@tanstack/query-core';
import { SessionTypes } from '@walletconnect/types';
type PuzzleWalletProviderProps = {
    dAppName: string;
    dAppDescription: string;
    dAppUrl?: string;
    dAppIconURL: string;
    children: React.ReactNode;
    debugQuery?: boolean;
};
export declare const queryClient: QueryClient;
export declare const PuzzleWalletProvider: ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children, debugQuery, }: PuzzleWalletProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useWalletSession: () => SessionTypes.Struct | undefined;
export {};
