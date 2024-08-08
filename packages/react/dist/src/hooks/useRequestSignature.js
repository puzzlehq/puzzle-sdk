import { log_sdk, } from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useRequestSignature = ({ message, address, method, network }) => {
    const session = useWalletSession();
    const [account] = useWalletStore((state) => [state.account]);
    const { request, data: wc_data, error: wc_error, loading, } = useRequest({
        topic: session?.topic ?? '',
        chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'requestSignature',
            params: {
                message,
                address: aleoAddressRegex.test(address ?? '') ? address : undefined,
                method
            },
        },
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const requestSignature = () => {
        if (session && !loading) {
            log_sdk('useRequestSignature requesting...', [message, address]);
            request();
        }
    };
    return { requestSignature, response, loading, error };
};
