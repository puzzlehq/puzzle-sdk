import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { aleoAddressRegex } from '@puzzlehq/types';

export type SignatureRequest = {
  message: string;
  address?: string;
};

export type SignatureResponse = {
  signature?: string;
  messageFields?: string;
  error?: string;
};

export const requestSignature = async ({
  message,
  address,
}: SignatureRequest): Promise<SignatureResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  try {
    const response: SignatureResponse = await connection.request({
      topic: session.topic,
      chainId: 'aleo:3',
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
