import { useInjectedRequest } from './utils/useRequest.js';
import {
  CreateEventRequest,
  CreateEventRequestData,
  CreateEventResponse,
  GenericRequest,
  log_sdk,
  requestCreateEvent,
  SdkError,
  SettlementStatus,
} from '@puzzlehq/sdk-core';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
import { RecordWithPlaintext } from '@puzzlehq/types';
import { useEvent } from './useEvent.js';
import { useCallback, useEffect, useState } from 'react';
import { EventStatus } from '@puzzlehq/types';

const normalizeInputs = (inputs?: (string | RecordWithPlaintext)[]) => {
  return inputs?.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });
};

export const useRequestCreateEvent = (requestData?: CreateEventRequestData) => {
  const { isConnected } = useIsConnected();
  const [account] = useWalletStore((state) => [state.account]);
  const [settlementStatus, setSettlementStatus] = useState<
    SettlementStatus | undefined
  >(undefined);

  const inputs = normalizeInputs(requestData?.inputs);

  const req: GenericRequest = {
    method: 'requestCreateEvent',
    params: {
      ...requestData,
      inputs,
    } as CreateEventRequest,
  };

  const {
    request,
    data,
    error: _error,
    loading,
  } = useInjectedRequest<CreateEventResponse | undefined>(req, async (req) => {
    if (!isConnected) throw new Error(SdkError.NotConnected);
    const response = await requestCreateEvent(req.params as CreateEventRequestData);
    return response;
  });

  const error: string | undefined = (_error as Error)?.message ?? data?.error ?? undefined;
  const response: CreateEventResponse | undefined = data;

  const createEvent = useCallback(
    (createEventRequestOverride?: CreateEventRequest) => {
      setSettlementStatus(undefined);
      if (createEventRequestOverride && isConnected && !loading) {
        const inputs = normalizeInputs(createEventRequestOverride.inputs);
        const _request: GenericRequest = {
          method: 'requestCreateEvent',
          params: {
            ...createEventRequestOverride,
            inputs,
          } as CreateEventRequest,
        }
        log_sdk(
          'useCreateEvent requesting with override...',
          _request,
        );
        return request(_request);
      } else if (requestData && isConnected && !loading) {
        log_sdk('useCreateEvent requesting...', requestData);
        return request();
      }
    },
    [isConnected, JSON.stringify(account), loading, request, JSON.stringify(inputs)],
  );

  const eventId = response?.eventId ?? requestData?.settlementInfo?.eventId;

  const { event, error: eventFetchError } = useEvent({
    id: eventId ?? '',
    address: requestData?.address,
  });

  useEffect(() => {
    console.log('eventId', eventId);
  }, [eventId]);

  useEffect(() => {
    console.log('event', event);
  }, [JSON.stringify(event)]);

  useEffect(() => {
    if (event?.status === EventStatus.Creating || loading)
      setSettlementStatus('Creating');
    else if (event?.status === EventStatus.Pending)
      setSettlementStatus('Pending');
    else if (event?.status === EventStatus.Failed || error)
      setSettlementStatus('Failed');
    else if (event?.status === EventStatus.Settled) {
      if (
        requestData?.settlementInfo &&
        requestData.settlementInfo.currentRecordCount ===
          requestData.settlementInfo.expectedRecordCount
      ) {
        setSettlementStatus('SettledWithRecords');
      } else {
        setSettlementStatus('Settled');
      }
    }
  }, [
    loading,
    JSON.stringify(event),
    JSON.stringify(eventFetchError),
    JSON.stringify(requestData?.settlementInfo),
    error,
  ]);

  return {
    createEvent,
    eventId: response?.eventId,
    loading,
    error,
    settlementStatus,
  };
};
