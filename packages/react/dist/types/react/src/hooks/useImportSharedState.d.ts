export declare const useImportSharedState: (seed: string) => {
    importSharedState: () => void;
    data: {
        address: string;
        seed: string;
    } | undefined;
    loading: boolean;
    error: string | undefined;
};
