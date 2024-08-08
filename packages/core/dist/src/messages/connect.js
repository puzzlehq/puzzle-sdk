import { wc_aleo_methods, wc_events, wc_optional_aleo_chains, wc_required_aleo_chains, } from '../data/walletconnect.js';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { checkForDesktopConnection } from '../utils/clientInfo.js';
export const connect = async (showModal = true) => {
    const connection = await getWalletConnectModalSignClient();
    if (!connection) {
        throw new Error('call configureConnection() first!');
    }
    const existingSession = await connection.getSession();
    if (existingSession) {
        console.log('Already connected!', existingSession);
        return existingSession;
    }
    try {
        const newSession = await connection.connect({
            requiredNamespaces: {
                aleo: {
                    methods: wc_aleo_methods,
                    chains: wc_required_aleo_chains,
                    events: wc_events,
                },
            },
            optionalNamespaces: {
                aleo: {
                    chains: wc_optional_aleo_chains,
                    methods: wc_aleo_methods,
                    events: wc_events,
                }
            },
        }, showModal);
        emitter.emit('session_change');
        if (newSession) {
            await checkForDesktopConnection(newSession.topic);
        }
        const choice = window.localStorage.getItem('WALLETCONNECT_DEEPLINK_CHOICE');
        if (choice && JSON.parse(choice).name !== 'Android') {
            // remove to prevent walletconnect from redirecting to the wallet page
            window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
        }
        return newSession;
    }
    catch (e) {
        console.error('connect error', e);
    }
};
