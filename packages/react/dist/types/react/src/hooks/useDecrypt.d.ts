export declare const useDecrypt: (ciphertexts?: string[]) => {
    decrypt: () => void;
    plaintexts: any;
    loading: boolean;
    error: string | undefined;
};
