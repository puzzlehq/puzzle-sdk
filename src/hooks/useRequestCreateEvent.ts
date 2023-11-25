import { SessionTypes } from '@walletconnect/types';
import { CreateEventRequestData, CreateEventRequest, CreateEventResponse } from '../messages/createEvent.js';
import { log_sdk } from '../utils/logger.js';
import { useRequest } from './wc/useReact.js';
import { useSession } from './wc/useSession.js';

export const useRequestCreateEvent = (
  requestData?: CreateEventRequestData
) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const inputs = requestData?.inputs.map(
    (input) => {
      if (typeof input === 'string') {
        return input;
      }
      return input.plaintext;
    });
  
  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
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

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: CreateEventResponse | undefined = wc_data;

  const requestCreateEvent = () => {
    if (requestData) {
      log_sdk('useRequestCreateEvent requesting...', requestData);
      request();
    }
  };

  return { requestCreateEvent, eventId: response?.eventId, error, loading };
};