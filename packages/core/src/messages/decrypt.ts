import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasDesktopConnection } from '../utils/clientInfo.js';

export type DecryptRequest = {
  ciphertexts: string[];
};

export type DecryptResponse = {
  plaintexts?: string[];
  error?: string;
};

export const decrypt = async (
  ciphertexts?: string[],
): Promise<DecryptResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const query = {
    topic: session.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'decrypt',
      params: {
        ciphertexts: ciphertexts,
      } as DecryptRequest,
    },
  };

  if (hasDesktopConnection()) {
    try {
      const response: DecryptResponse =
        await window.aleo.puzzleWalletClient.decrypt.query(query);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('decrypt error', e);
      return { error };
    }
  }

  try {
    const response: DecryptResponse = await connection.request(query);
    return response;
  } catch (e) {
    console.error('decrypt error', e);
    return { error: (e as Error).message };
  }
};
