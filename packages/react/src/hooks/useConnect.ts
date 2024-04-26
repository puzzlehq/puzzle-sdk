import { SessionTypes } from '@walletconnect/types';
import {
  WalletConnectModalSignInstance,
  emitter,
  getWalletConnectModalSignClient,
  checkForDesktopConnection,
  wc_aleo_methods,
  wc_events,
  wc_required_aleo_chains,
  wc_optional_aleo_chains,
} from '@puzzlehq/sdk-core';
import { useAsyncAction } from './wc/_useAsyncAction.js';
import { useWalletStore } from '../store.js';
import { shortenAddress } from './useAccount.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';

type Data = Awaited<ReturnType<WalletConnectModalSignInstance['connect']>>;

export function useConnect(showModal = false) {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const isConnected = !!session;
  const { data, error, loading, setData, setError, setLoading } =
    useAsyncAction<Data>();
  const [setAccount] = useWalletStore((state) => [state.setAccount]);

  async function connect() {
    try {
      setLoading(true);
      setError(undefined);
      const client = await getWalletConnectModalSignClient();
      const response: SessionTypes.Struct = await client.connect({
        requiredNamespaces: {
          aleo: {
            methods: wc_aleo_methods,
            chains: wc_required_aleo_chains,
            events: wc_events,
          },
        },
        optionalNamespaces: {
          aleo: {
            methods: wc_aleo_methods,
            chains: wc_optional_aleo_chains,
            events: wc_events,
          },
        },
      }, showModal);
      setData(response);
      await checkForDesktopConnection(response.topic);
      const account = response.namespaces['aleo']['accounts'][0].split(':');
      setAccount({
        network: account[0],
        chainId: account[1],
        address: account[2],
        shortenedAddress: shortenAddress(account[2]),
      });
      emitter.emit('session_change');

      const choice = window.localStorage.getItem(
        'WALLETCONNECT_DEEPLINK_CHOICE',
      );
      if (choice && JSON.parse(choice).name !== 'Android') {
        // remove to prevent walletconnect from redirecting to the wallet page
        window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
      }

      return response;
    } catch (err) {
      setError(err);
      localStorage.removeItem('puzzle-hasInjectedConnection');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, isConnected, connect };
}
