import { useRequest } from './wc/useRequest.js';
import { log_sdk, } from '@puzzlehq/sdk-core';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
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
    const [chainIdStr] = useWalletStore((state) => [state.account]);
    const inputs = normalizeInputs(requestData?.inputs);
    const { request, data: wc_data, error: wc_error, loading, } = useRequest({
        topic: session?.topic ?? '',
        chainId: chainIdStr,
        request: {
            jsonrpc: '2.0',
            method: 'requestCreateEvent',
            params: {
                ...requestData,
                inputs,
            },
        },
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const createEvent = (createEventRequestOverride) => {
        if (createEventRequestOverride && session && !loading) {
            log_sdk('useCreateEvent requesting with override...', createEventRequestOverride);
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
                    },
                },
            });
        }
        else if (requestData && session && !loading) {
            log_sdk('useCreateEvent requesting...', requestData);
            return request();
        }
    };
    return { createEvent, eventId: response?.eventId, loading, error };
};
