import { QueryClient } from "@tanstack/react-query";
type PuzzleWalletProviderProps = {
    dAppName: string;
    dAppDescription: string;
    dAppUrl: string;
    dAppIconURL: string;
    children: React.ReactNode;
};
export declare const queryClient: QueryClient;
export declare const PuzzleWalletProvider: ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children }: PuzzleWalletProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
