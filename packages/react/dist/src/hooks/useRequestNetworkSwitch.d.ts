import { NetworkSwitchRequest, NetworkSwitchResponse } from '@puzzlehq/sdk-core';
export declare const useRequestNetworkSwitch: ({ network, }: NetworkSwitchRequest) => {
    requestNetworkSwitch: (networkSwitchRequestOverride?: NetworkSwitchRequest) => Promise<NetworkSwitchResponse | undefined> | {
        error: string;
    } | undefined;
    response: NetworkSwitchResponse | undefined;
    loading: boolean;
    error: string | undefined;
};
