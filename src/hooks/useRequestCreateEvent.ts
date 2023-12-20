import { SessionTypes } from '@walletconnect/types';
import { CreateEventResponse } from '../messages/createEvent.js';
import { useRequest } from './wc/useRequest.js';
import { useSession } from './wc/useSession.js';
import { CreateEventRequest, CreateEventRequestData } from '../messages/createEvent.js';
import { log_sdk } from '../utils/logger.js';

export const useRequestCreateEvent = (
  requestData?: CreateEventRequestData
) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const inputs = requestData?.inputs.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });

  const { request, data: wc_data, error: wc_error, loading } = useRequest<CreateEventResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'requestCreateEvent',
      params: {
        ...requestData,
        inputs,
      } as CreateEventRequest,
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: CreateEventResponse | undefined =  wc_data;

  const createEvent = () => {
    if (requestData && session && !loading) {
      log_sdk('useCreateEvent requesting...', requestData);
      request();
    }
  }

  return { createEvent, eventId: response?.eventId, loading, error };
};