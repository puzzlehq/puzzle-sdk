import { QueryClient } from '@tanstack/react-query';
type PuzzleWalletProviderProps = {
    dAppName: string;
    dAppDescription: string;
    dAppUrl: string;
    dAppIconURL: string;
    children: React.ReactNode;
    debugQuery?: boolean;
};
export declare const queryClient: QueryClient;
export declare const PuzzleWalletProvider: ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children, debugQuery, }: PuzzleWalletProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
