export declare const useDecrypt: (ciphertexts?: string[]) => {
    decrypt: () => void;
    plaintexts: string[] | undefined;
    loading: boolean;
    error: string | undefined;
};
