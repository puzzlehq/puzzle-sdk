import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { hasInjectedConnection, log_sdk, } from '@puzzlehq/sdk-core';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
import { useEvent } from './useEvent.js';
import { useCallback, useEffect, useState } from 'react';
import { EventStatus } from '@puzzlehq/types';
const normalizeInputs = (inputs) => {
    return inputs?.map((input) => {
        if (typeof input === 'string') {
            return input;
        }
        return input.plaintext;
    });
};
export const useRequestCreateEvent = (requestData) => {
    const session = useWalletSession();
    const [account] = useWalletStore((state) => [state.account]);
    const [settlementStatus, setSettlementStatus] = useState(undefined);
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
            },
        },
    };
    const { request, data: wc_data, error: wc_error, loading, } = useRequestFunction(req, async () => {
        try {
            const response = await window.aleo.puzzleWalletClient.requestCreateEvent.mutate(req);
            return response;
        }
        catch (e) {
            console.error('createEvent error', e);
            const error = e.message;
            return { error };
        }
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const createEvent = useCallback((createEventRequestOverride) => {
        setSettlementStatus(undefined);
        if (createEventRequestOverride && session && !loading) {
            log_sdk('useCreateEvent requesting with override...', createEventRequestOverride);
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
                    },
                },
            });
        }
        else if (requestData && session && !loading) {
            log_sdk('useCreateEvent requesting...', requestData);
            return request();
        }
    }, [session?.topic, JSON.stringify(account), loading, request]);
    const eventId = response?.eventId ?? requestData?.settlementInfo?.eventId;
    const { event, error: eventFetchError } = useEvent({ id: eventId, address: requestData?.address });
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
            if (requestData?.settlementInfo && requestData.settlementInfo.currentRecordCount === requestData.settlementInfo.expectedRecordCount) {
                setSettlementStatus('SettledWithRecords');
            }
            else {
                setSettlementStatus('Settled');
            }
        }
    }, [loading, JSON.stringify(event), JSON.stringify(eventFetchError), JSON.stringify(requestData?.settlementInfo), error]);
    return { createEvent, eventId: response?.eventId, loading, error, settlementStatus };
};
