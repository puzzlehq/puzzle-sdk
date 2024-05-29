import { SessionTypes } from '@walletconnect/types';
import { AccountSelectedResponse } from '@puzzlehq/sdk-core';
type SubscriptionConfig = {
    subscriptionName: string;
    condition: (data: AccountSelectedResponse) => boolean;
    onData: (data: AccountSelectedResponse) => void;
    dependencies: any[];
};
type UseInjectedSubscriptionsParams = {
    session: SessionTypes.Struct | undefined;
    configs: SubscriptionConfig[];
};
declare const useInjectedSubscriptions: ({ session, configs, }: UseInjectedSubscriptionsParams) => void;
export default useInjectedSubscriptions;
