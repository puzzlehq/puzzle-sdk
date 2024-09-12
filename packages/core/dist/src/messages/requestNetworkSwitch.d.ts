import { Network } from '@puzzlehq/types';
export type NetworkSwitchRequest = {
    network: Network;
};
export type NetworkSwitchResponse = {
    network?: Network;
    error?: string;
};
export declare const requestNetworkSwitch: ({ network, }: NetworkSwitchRequest) => Promise<NetworkSwitchResponse>;
