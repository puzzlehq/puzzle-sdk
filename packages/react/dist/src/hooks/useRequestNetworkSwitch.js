import { log_sdk, networkToChainId, wc_aleo_chains, } from '@puzzlehq/sdk-core';
import { useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useRequestNetworkSwitch = ({ network, }) => {
    const session = useWalletSession();
    const [chainIdStr] = useWalletStore((state) => [state.chainIdStr]);
    const { request, data: wc_data, error: wc_error, loading, } = useRequest({
        topic: session?.topic ?? '',
        chainId: chainIdStr,
        request: {
            jsonrpc: '2.0',
            method: 'requestNetworkSwitch',
            params: {
                network
            },
        },
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const requestNetworkSwitch = (networkSwitchRequestOverride) => {
        if (!session)
            return { error: 'No Session!' };
        if (loading)
            return;
        if (!wc_aleo_chains.includes(networkToChainId(network))) {
            return { error: `invalid network to switch to: ${network}` };
        }
        if (!session.namespaces.aleo?.chains?.includes(networkToChainId(network))) {
            console.error(session.namespaces.aleo.chains);
            return { error: `dApp does not have permission to switch to ${network}` };
        }
        if (networkSwitchRequestOverride) {
            log_sdk('useRequestNetworkSwitch requesting with override...', networkSwitchRequestOverride);
            return request({
                topic: session.topic,
                chainId: chainIdStr,
                request: {
                    jsonrpc: '2.0',
                    method: 'requestNetworkSwitch',
                    params: {
                        ...networkSwitchRequestOverride,
                    },
                },
            });
        }
        else {
            log_sdk('useRequestNetworkSwitch requesting...', [network]);
            return request();
        }
    };
    return { requestNetworkSwitch, response, loading, error };
};
