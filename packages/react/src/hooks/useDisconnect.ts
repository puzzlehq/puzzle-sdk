import { disconnect as _disconnect, SdkError } from '@puzzlehq/sdk-core';
import { useWalletStore } from '../store.js';
import { useAsyncAction } from './utils/_useAsyncAction.js';
import { useIsConnected } from '../provider/connectionProvider.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';

export function useDisconnect() {
  const { isConnected, setIsConnected } = useIsConnected();

  const [onDisconnect] = useWalletStore(
    (state) => [state.onDisconnect],
  );

  const { error, loading, setError, setLoading } = useAsyncAction();

  async function disconnect() {
    if (!isConnected) {
      setError(SdkError.NotConnected);
      console.error(SdkError.NotConnected);
      onDisconnect();
      return;
    }
    try {
      setLoading(true);
      setError(undefined);
      await _disconnect();
      onDisconnect();
      setIsConnected?.(false);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { error, loading, disconnect };
}

export function useOnDisconnect(
  callback: () => void,
  dependencies: React.DependencyList,
) {

  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onDisconnect',
        condition: () => true,
        onData: () => {
          callback();
        },
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [...dependencies],
      },
    ],
  });
}
