import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';
import { Network } from '@puzzlehq/types';

export type DecryptRequest = {
  ciphertexts: string[];
};

export type DecryptResponse = {
  plaintexts?: string[];
  error?: string;
};

export const decrypt = async (
  ciphertexts?: string[],
  network?: Network,
): Promise<DecryptResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }
  if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const query = {
    topic: session.topic,
    chainId: network ? networkToChainId(network) : 'aleo:0',
    request: {
      jsonrpc: '2.0',
      method: 'decrypt',
      params: {
        ciphertexts: ciphertexts,
      } as DecryptRequest,
    },
  };

  if (hasInjectedConnection()) {
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
