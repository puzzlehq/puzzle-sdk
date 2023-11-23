export declare const useImportSharedState: (seed: string) => {
    importSharedState: () => void;
    data: {
        address: string;
        seed: string;
    };
    loading: boolean;
    error: string;
};
