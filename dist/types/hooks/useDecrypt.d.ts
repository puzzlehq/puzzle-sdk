export declare const useDecrypt: (ciphertext?: string) => {
    decrypt: () => void;
    decryptedText: string | undefined;
    loading: any;
    error: string | undefined;
};
