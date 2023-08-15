export type DecryptReqMessage = {
  type: 'DECRYPT';
  data: {
    ciphertext: string
  };
};

export type DecryptResMessage = {
  type: 'DECRYPT_RES';
  data: {
    decryptedText: string;
  };
};

export type DecryptRejMessage = {
  type: 'DECRYPT_REJ';
  data: {
    error?: string;
  };
};
