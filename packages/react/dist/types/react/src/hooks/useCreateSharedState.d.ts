export declare const useCreateSharedState: () => {
    createSharedState: () => void;
    data: {
        seed: string;
        address: string;
    } | undefined;
    loading: boolean;
    error: string | undefined;
};
