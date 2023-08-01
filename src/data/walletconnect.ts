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
  // aleo methods
  'aleo_connect',
  'aleo_disconnect',
  'aleo_getSelectedAccount',
  'aleo_transfer',
  'aleo_deployProgram',
  'aleo_getBalance',
  'aleo_executeProgram',
  'aleo_getRecords'
];
export const wc_aleo_chains = ['aleo:1']; //placeholder until there are multiple chains

// events originating from wallet
export const wc_events = ['chainChanged', 'accountSelected', 'accountSynced'];

export const projectId = 'f0aaeffe71b636da453fce042d79d723';
export const walletURL = 'https://walletconnect.puzzle.online/';

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
  walletImages:{
    // Override manual wallet image
    puzzle: 'https://i.imgur.com/p9tHaFC.png'
  }
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
