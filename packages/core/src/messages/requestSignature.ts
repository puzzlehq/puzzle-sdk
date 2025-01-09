import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { aleoAddressRegex } from '@puzzlehq/types';
import { wc_aleo_chains } from '../data/walletconnect.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';

export type SignatureRequest = {
  message: string;
  address?: string;
  network?: string;
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

  if (network && !wc_aleo_chains.includes(network)) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const req = {
    topic: session.topic,
    chainId: network ?? 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'requestSignature',
      params: {
        message,
        address: aleoAddressRegex.test(address ?? '') ? address : undefined,
      } as SignatureRequest,
    }
  }

  if (hasInjectedConnection() && window.aleo.puzzleWalletClient.requestSignature) {
    try {
      const response: SignatureResponse =
        await window.aleo.puzzleWalletClient.requestSignature.mutate(req);
      return response;
    } catch (e) {
      console.error('signature error', e);
      const error = (e as Error).message;
      return { error };
    }
  }

  try {
    const response: SignatureResponse = await connection.request(req);
    return response;
  } catch (e) {
    console.error('signature error', e);
    const error = (e as Error).message;
    return { error };
  }
};
