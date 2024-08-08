import { useRequest } from './wc/useRequest.js';
import { log_sdk, } from '@puzzlehq/sdk-core';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useRequestCreateEvent = (requestData) => {
    const session = useWalletSession();
    const [account] = useWalletStore((state) => [state.account]);
    const inputs = requestData?.inputs.map((input) => {
        if (typeof input === 'string') {
            return input;
        }
        return input.plaintext;
    });
    const { request, data: wc_data, error: wc_error, loading, } = useRequest({
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
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const createEvent = () => {
        if (requestData && session && !loading) {
            log_sdk('useCreateEvent requesting...', requestData);
            request();
        }
    };
    return { createEvent, eventId: response?.eventId, loading, error };
};
