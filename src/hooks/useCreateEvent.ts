import { SessionTypes } from '@walletconnect/types';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { CreateEventRequestData, CreateEventRequest } from '../messaging/createEvent.js';

export const useCreateEvent = (
  requestData: CreateEventRequestData
) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  const inputs = requestData.inputs.map(
    (input) => {
      if (typeof input === 'string') {
        return input;
      }
      return input.plaintext;
    });
  
  const { request, data: response, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'createEvent',
      params: {
        type: requestData.type,
        programId: requestData.programId,
        functionId: requestData.functionId,
        fee: requestData.fee,
        inputs
      } as CreateEventRequest,
    }
  });

  const error: string | undefined = wc_error ? wc_error.message : response.error;
  const eventId = response?.data?.eventId;

  const createEvent = () => {
    if (!requestData) return;
    request();
  };

  return { createEvent, eventId, error, loading };
};
