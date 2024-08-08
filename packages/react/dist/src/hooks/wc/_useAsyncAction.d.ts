export declare function useAsyncAction<T>(): {
    data: T | undefined;
    error: unknown;
    loading: boolean;
    setData: import("react").Dispatch<import("react").SetStateAction<T | undefined>>;
    setError: import("react").Dispatch<unknown>;
    setLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
