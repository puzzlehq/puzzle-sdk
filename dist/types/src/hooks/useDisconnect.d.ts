export declare function useDisconnect(): {
    error: string | undefined;
    loading: boolean;
    disconnect: () => Promise<void>;
};
