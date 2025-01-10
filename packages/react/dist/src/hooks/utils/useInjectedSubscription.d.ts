import { AccountSelectedResponse, AccountSyncedResponse } from '@puzzlehq/sdk-core';
type SubscriptionConfig = {
    subscriptionName: string;
    condition: (data: AccountSelectedResponse | AccountSyncedResponse | void) => boolean;
    onData: (data: AccountSelectedResponse | AccountSyncedResponse | void) => void;
    dependencies: any[];
};
type UseInjectedSubscriptionsParams = {
    configs: SubscriptionConfig[];
};
declare const useInjectedSubscriptions: ({ configs, }: UseInjectedSubscriptionsParams) => void;
export default useInjectedSubscriptions;
