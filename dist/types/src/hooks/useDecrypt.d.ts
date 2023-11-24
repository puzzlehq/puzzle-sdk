export declare const useDecrypt: (ciphertexts?: string[]) => {
    decrypt: () => void;
    plaintexts: string[];
    loading: boolean;
    error: string;
};
