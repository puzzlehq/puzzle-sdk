import { useIsConnected } from './connectionProvider.js';
type PuzzleWalletProviderProps = {
    children: React.ReactNode;
    debugQuery?: boolean;
};
export declare const PuzzleWalletProvider: ({ children, debugQuery, }: PuzzleWalletProviderProps) => import("react/jsx-runtime").JSX.Element;
export { useIsConnected };
