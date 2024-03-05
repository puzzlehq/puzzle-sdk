import { Event } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasDesktopConnection } from '../utils/clientInfo.js';

export type GetEventRequest = {
  id: string;
  address?: string;
};

export type GetEventResponse = {
  event?: Event;
  error?: string;
};

export const getEvent = async ({
  id,
  address,
}: GetEventRequest): Promise<GetEventResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { event: undefined, error: 'no session or connection' };
  }

  const query = {
    topic: session.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'getEvent',
      params: {
        id,
        address,
      } as GetEventRequest,
    },
  };

  if (hasDesktopConnection()) {
    console.log('getEvent: test 1');
    try {
      const response: GetEventResponse =
        await window.aleo.puzzleWalletClient.getEvent.query(query);
      console.log('getEvent: test 2', response);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('getEvents error', error);
      return { error };
    }
  }

  const fetchEvent = async () => {
    const response: GetEventResponse = await connection.request(query);
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
