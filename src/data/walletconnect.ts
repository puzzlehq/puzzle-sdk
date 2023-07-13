// methods called from dApp
export const wc_aztec_methods = [
  // aztec methods
  'aztec_connect',
  'aztec_disconnect',
  'aztec_getAccountPublicKey',
  'aztec_getSpendingPublicKey',
  'aztec_requestProofs',
];
export const wc_aztec_chains = ['aztec:1337'];

export const wc_aleo_methods = [
  // aztec methods
  'aleo_connect',
  'aleo_disconnect',
  'aleo_getAccountPublicKey',
  'aleo_getSpendingPublicKey',
  'aleo_transfer',
  'aleo_execute',
  'aleo_deploy',
  'aleo_getBalance',
];
export const wc_aleo_chains = ['aleo:1']; //placeholder

// events originating from wallet
export const wc_events = ['chainChanged', 'accountsChanged'];

export const projectId = '2133b10d21f9fcf851eb9ef8f057acea';
export const walletURL = 'http://localhost:3331/';

export const web3modal_puzzle_props = {
  standaloneChains: wc_aztec_chains.concat(wc_aleo_chains),
  enableExplorer: false,
  enableAccountView: true,
  enableNetworkView: true,
  enableStandaloneMode: true,
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: '',
        universal: walletURL,
      },
    },
  ],
  desktopWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: '',
        universal: walletURL,
      },
    },
  ],
};

export const signClient_puzzleProps = {
  requiredNamespaces: {
    aztec: {
      methods: wc_aztec_methods,
      chains: wc_aztec_chains,
      events: wc_events,
    },
    aleo: {
      methods: wc_aleo_methods,
      chains: wc_aleo_chains,
      events: wc_events,
    },
  },
};
