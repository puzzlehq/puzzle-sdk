
export type WalletConnectError = {
    type: 'WC_ERROR';
    error: {
      message: string;
      code: number;
    };
  };
  