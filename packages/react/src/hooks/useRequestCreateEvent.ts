import { SessionTypes } from '@walletconnect/types';
import { useRequest } from './wc/useRequest.js';
import {
  CreateEventRequest,
  CreateEventRequestData,
  CreateEventResponse,
  log_sdk,
} from '@puzzlehq/sdk-core';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
import { RecordWithPlaintext } from '@puzzlehq/types';

const normalizeInputs = (inputs?: (string | RecordWithPlaintext)[]) => {
  return inputs?.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });
};

export const useRequestCreateEvent = (requestData?: CreateEventRequestData) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [chainIdStr] = useWalletStore((state) => [state.account]);

  const inputs = normalizeInputs(requestData?.inputs);

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequest<CreateEventResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: chainIdStr,
    request: {
      jsonrpc: '2.0',
      method: 'requestCreateEvent',
      params: {
        ...requestData,
        inputs,
      } as CreateEventRequest,
    },
  });

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: CreateEventResponse | undefined = wc_data;

  const createEvent = (createEventRequestOverride?: CreateEventRequest) => {
    if (createEventRequestOverride && session && !loading) {
      log_sdk(
        'useCreateEvent requesting with override...',
        createEventRequestOverride,
      );
      const inputs = normalizeInputs(createEventRequestOverride.inputs);
      return request({
        topic: session.topic,
        chainId: chainIdStr,
        request: {
          jsonrpc: '2.0',
          method: 'requestCreateEvent',
          params: {
            ...createEventRequestOverride,
            inputs,
          } as CreateEventRequest,
        },
      });
    } else if (requestData && session && !loading) {
      log_sdk('useCreateEvent requesting...', requestData);
      return request();
    }
  };

  return { createEvent, eventId: response?.eventId, loading, error };
};
