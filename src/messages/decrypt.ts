import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';

export type DecryptRequest = {
  ciphertexts: string[];
};

export type DecryptResponse = {
  plaintexts?: string[];
  error?: string;
};

export const decrypt = async (
  ciphertexts?: string[]
): Promise<DecryptResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  try {
    const response: DecryptResponse = await connection.request({
      topic: session.topic,
      chainId: 'aleo:1',
      request: {
          jsonrpc: '2.0',
        method: 'decrypt',
        params: {
          ciphertexts: ciphertexts,
        } as DecryptRequest,
      },
    });
    return response;
  } catch (e) {
    console.error('decrypt error', (e as Error).message);
    return { error: (e as Error).message };
  }
};
