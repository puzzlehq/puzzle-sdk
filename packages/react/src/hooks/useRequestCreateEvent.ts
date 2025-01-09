import { SessionTypes } from '@walletconnect/types';
import { useInjectedRequest, useInjectedRequestQuery, useRequest, useRequestQuery } from './wc/useRequest.js';
import {
  CreateEventRequest,
  CreateEventRequestData,
  CreateEventResponse,
  hasInjectedConnection,
  log_sdk,
  SettlementStatus,
} from '@puzzlehq/sdk-core';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
import { RecordWithPlaintext } from '@puzzlehq/types';
import { useEvent } from './useEvent.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [account] = useWalletStore((state) => [state.account]);
  const [settlementStatus, setSettlementStatus] = useState<SettlementStatus | undefined>(undefined);

  const inputs = normalizeInputs(requestData?.inputs);

  const useRequestFunction = hasInjectedConnection()
    ? useInjectedRequest
    : useRequest;
  
  const req = {
    topic: session?.topic ?? '',
    chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'requestCreateEvent',
      params: {
        ...requestData,
        inputs,
      } as CreateEventRequest,
    },
  }

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequestFunction<CreateEventResponse | undefined>(req, async () => {
    try {
      const response: CreateEventResponse =
        await window.aleo.puzzleWalletClient.requestCreateEvent.mutate(req);
      return response;
    } catch (e) {
      console.error('createEvent error', e);
      const error = (e as Error).message;
      return { error };
    }
  });

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: CreateEventResponse | undefined = wc_data;

  const createEvent = useCallback((createEventRequestOverride?: CreateEventRequest) => {
    setSettlementStatus(undefined);
    if (createEventRequestOverride && session && !loading) {
      log_sdk(
        'useCreateEvent requesting with override...',
        createEventRequestOverride,
      );
      const inputs = normalizeInputs(createEventRequestOverride.inputs);
      return request({
        topic: session?.topic ?? '',
        chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
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
  }, [session?.topic, JSON.stringify(account), loading, request]);

  const eventId = response?.eventId ?? requestData?.settlementInfo?.eventId

  const { event, error: eventFetchError } = useEvent({ id: eventId, address: requestData?.address });

  useEffect(() => {
    console.log('eventId', eventId);
  }, [eventId])

  useEffect(() => {
    console.log('event', event);
  }, [JSON.stringify(event)])

  useEffect(() => {
    if (event?.status === EventStatus.Creating || loading) setSettlementStatus('Creating');
    else if (event?.status === EventStatus.Pending) setSettlementStatus('Pending');
    else if (event?.status === EventStatus.Failed || error) setSettlementStatus('Failed');
    else if (event?.status === EventStatus.Settled) {
      if (requestData?.settlementInfo && requestData.settlementInfo.currentRecordCount === requestData.settlementInfo.expectedRecordCount) {
        setSettlementStatus('SettledWithRecords')
      } else {
        setSettlementStatus('Settled')
      }
    }
  }, [loading, JSON.stringify(event), JSON.stringify(eventFetchError), JSON.stringify(requestData?.settlementInfo), error]);

  return { createEvent, eventId: response?.eventId, loading, error, settlementStatus };
};
