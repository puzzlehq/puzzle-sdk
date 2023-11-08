export declare const useImportSharedState: (privateKey: string) => Promise<{
    importSharedState: () => void;
    address: string;
    loading: any;
    error: string;
}>;
