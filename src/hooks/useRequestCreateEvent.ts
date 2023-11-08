import { SessionTypes } from '@walletconnect/types';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { CreateEventRequestData, CreateEventRequest, CreateEventResponse } from '../messaging/createEvent.js';
import { log_sdk } from '../utils/logger.js';

export const useRequestCreateEvent = (
  requestData?: CreateEventRequestData
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
  
  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'requestCreateEvent',
      params: {
        ...requestData,
        inputs
      } as CreateEventRequest,
    }
  });

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: CreateEventResponse | undefined = wc_data;

  const requestCreateEvent = () => {
    if (requestData) {
      log_sdk('useRequestCreateEvent requesting...', requestData);
      request();
    }
  };

  return { requestCreateEvent, eventId: response?.eventId, error, loading };
};
