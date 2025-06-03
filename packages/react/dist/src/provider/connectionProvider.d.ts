type Props = {
    children: React.ReactNode;
};
type ConnectionContextType = {
    isConnected?: boolean;
    setIsConnected: (value: boolean) => void;
};
export declare const ConnectionContext: import("react").Context<ConnectionContextType | undefined>;
export declare const useIsConnected: () => {
    isConnected: boolean | undefined;
    setIsConnected: (value: boolean) => void;
};
export declare const ConnectionProvider: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
