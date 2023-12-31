import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { aleoAddressRegex } from '../index.js';

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
  address
  }: SignatureRequest
): Promise<SignatureResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  try {
    const response: SignatureResponse = await connection.request({
      topic: session.topic,
      chainId: 'aleo:1',
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
    const error = (e as Error).message;
    console.error('signature error', error);
    return { error };
  }
};
