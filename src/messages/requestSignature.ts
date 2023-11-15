import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';

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
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  try {
    const response: SignatureResponse = await connection.request({
      topic: session.topic,
      chainId: chainId,
      request: {
        id: 1,
        jsonrpc: '2.0',
        method: 'requestSignature',
        params: {
          message,
          address,
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
