import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { aleoAddressRegex, Network } from '@puzzlehq/types';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';

export type SignatureRequest = {
  message: string;
  address?: string;
  network?: Network;
};

export type SignatureResponse = {
  signature?: string;
  error?: string;
};

export const requestSignature = async ({
  message,
  address,
  network,
}: SignatureRequest): Promise<SignatureResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
    return { error: `${network} not in wc_aleo_chains` };
  }

  try {
    const response: SignatureResponse = await connection.request({
      topic: session.topic,
      chainId: network ? networkToChainId(network) : 'aleo:0',
      request: {
        jsonrpc: '2.0',
        method: 'requestSignature',
        params: {
          message,
          address: aleoAddressRegex.test(address ?? '') ? address : undefined,
        } as SignatureRequest,
      },
    });
    return response;
  } catch (e) {
    console.error('signature error', e);
    const error = (e as Error).message;
    return { error };
  }
};
