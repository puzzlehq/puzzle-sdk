import { Event } from '../data/types.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export type GetEventRequest = {
  id: string;
  address?: string;
}

export type GetEventResponse = {
  event?: Event;
  error?: string;
};

export const getEvent = async ({
  id,
  address
}: GetEventRequest): Promise<GetEventResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { event: undefined, error: 'no session, chainId, or connection' };
  }

  const fetchEvent = async () => {
    const response: GetEventResponse = await connection.request({
      topic: session?.topic ?? '',
      chainId: chainId,
      request: {
        jsonrpc: '2.0',
        method: 'getEvent',
        params: {
          id,
          address
        } as GetEventRequest,
      },
    });
    return response;
  };

  try {
    const response = await fetchEvent();
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getEvents error', error);
    return { error };
  }
};
