import { hasInjectedConnection, log_sdk, } from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useRequestSignature = ({ message, address, network, }) => {
    const session = useWalletSession();
    const [account] = useWalletStore((state) => [state.account]);
    const useRequestFunction = hasInjectedConnection()
        ? useInjectedRequest
        : useRequest;
    const req = {
        topic: session?.topic ?? '',
        chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'requestSignature',
            params: {
                message,
                address: aleoAddressRegex.test(address ?? '') ? address : undefined,
            },
        },
    };
    const { request, data: wc_data, error: wc_error, loading, } = useRequestFunction(req, async () => {
        try {
            const response = await window.aleo.puzzleWalletClient.requestSignature.mutate(req);
            return response;
        }
        catch (e) {
            console.error('createSignature error', e);
            const error = e.message;
            return { error };
        }
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const requestSignature = (signatureRequestOverride) => {
        if (signatureRequestOverride && session && !loading) {
            log_sdk('useRequestSignature requesting with override...', signatureRequestOverride);
            return request({
                topic: session?.topic ?? '',
                chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
                request: {
                    jsonrpc: '2.0',
                    method: 'requestSignature',
                    params: {
                        ...signatureRequestOverride,
                    },
                },
            });
        }
        else if (session && !loading) {
            log_sdk('useRequestSignature requesting...', [message, address]);
            return request();
        }
    };
    return { requestSignature, response, loading, error };
};
