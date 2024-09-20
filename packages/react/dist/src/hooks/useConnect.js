import { emitter, getWalletConnectModalSignClient, checkForDesktopConnection, wc_events, getAleoMethods, getAleoChains, chainIdToNetwork, } from '@puzzlehq/sdk-core';
import { useAsyncAction } from './wc/_useAsyncAction.js';
import { useWalletStore } from '../store.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
export function useConnect({ programIds, showModal }) {
    const networks = Object.keys(programIds);
    const session = useWalletSession();
    const isConnected = !!session;
    const { data, error, loading, setData, setError, setLoading } = useAsyncAction();
    const [setAddress, setNetwork] = useWalletStore((state) => [state.setAddress, state.setNetwork]);
    async function connect() {
        try {
            setLoading(true);
            setError(undefined);
            const client = await getWalletConnectModalSignClient();
            const response = await client.connect({
                requiredNamespaces: {
                    aleo: {
                        methods: getAleoMethods(programIds),
                        chains: getAleoChains(networks),
                        events: wc_events,
                    },
                },
            }, showModal);
            setData(response);
            await checkForDesktopConnection(response.topic);
            const accounts = response.namespaces.aleo.accounts;
            console.log('wc_accounts', accounts);
            const split = accounts[0].split(':');
            const wcNetwork = split[0];
            const chainId = split[1];
            const address = split[2];
            const chainStr = `${wcNetwork}:${chainId}`;
            const network = chainIdToNetwork(chainStr);
            setAddress(address);
            setNetwork(network);
            emitter.emit('session_change');
            const choice = window.localStorage.getItem('WALLETCONNECT_DEEPLINK_CHOICE');
            if (choice && JSON.parse(choice).name !== 'Android') {
                // remove to prevent walletconnect from redirecting to the wallet page
                window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
            }
            return response;
        }
        catch (err) {
            setError(err);
            localStorage.removeItem('puzzle-hasInjectedConnection');
            throw err;
        }
        finally {
            setLoading(false);
        }
    }
    return { data, error, loading, isConnected, connect };
}
