import { EventType, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { type RecordWithPlaintext } from '@puzzlehq/types';

/// dapps send this to the sdk
export type CreateEventRequestData = {
  address?: string;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: (RecordWithPlaintext | string)[];
};

/// sdk maps records to ciphertexts
export type CreateEventRequest = {
  address?: string;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: string[];
};

/// wallet passes this back to dapp
export type CreateEventResponse = {
  eventId?: string;
  /// pass in whole event here?
  error?: string;
};

export const requestCreateEvent = async (
  requestData: CreateEventRequestData,
  network?: string
): Promise<CreateEventResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const inputs = requestData?.inputs.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });

  if (network && !wc_aleo_chains.includes(network)) {
    return {error: 'network not in wc_aleo_chains'}
  }

  try {
    const response: CreateEventResponse = await connection.request({
      topic: session.topic,
      chainId: network ?? 'aleo:1',
      request: {
        jsonrpc: '2.0',
        method: 'requestCreateEvent',
        params: {
          ...requestData,
          inputs,
        } as CreateEventRequest,
      },
    });
    return response;
  } catch (e) {
    console.error('createEvent error', e);
    const error = (e as Error).message;
    return { error };
  }
};
