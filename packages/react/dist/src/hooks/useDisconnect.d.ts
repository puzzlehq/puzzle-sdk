export declare function useDisconnect(): {
    error: unknown;
    loading: boolean;
    disconnect: () => Promise<void>;
};
export declare function useOnDisconnect(callback: () => void, dependencies: React.DependencyList): void;
