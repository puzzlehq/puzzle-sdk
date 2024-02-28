// methods called from dApp
export const wc_aleo_methods = [
  'decrypt',
  'disconnect',
  'getSelectedAccount',
  'getBalance',
  'getRecords',
  'requestCreateEvent',
  'getEvent',
  'getEvents',
  'createSharedState',
  'importSharedState',
  'requestSignature',
];
export const wc_aleo_chains = ['aleo:3'];

// events originating from wallet
export const wc_events = ['chainChanged', 'accountSelected', 'selectedAccountSynced', 'sharedAccountSynced'];

export const projectId = 'f0aaeffe71b636da453fce042d79d723';

export const web3modal_puzzle_props = {
  standaloneChains: wc_aleo_chains,
  enableExplorer: false,
  enableAccountView: true,
  enableNetworkView: true,
  enableStandaloneMode: true,
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: 'puzzleapp://',
        universal: '',
      },
    },
  ],
  desktopWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: '',
        universal: 'https://walletconnect.puzzle.online/',
      },
    },
    {
      id: 'avail',
      name: 'Avail Wallet',
      links: {
        native: 'avail://',
        universal: 'https://avail.global',
      },
    },
  ],
  walletImages: {
    puzzle: 'https://i.imgur.com/p9tHaFC.png',
    avail: 'https://i.imgur.com/GxNn8BO.png'
  },
};

export const signClient_puzzleProps = {
  requiredNamespaces: {
    aleo: {
      methods: wc_aleo_methods,
      chains: wc_aleo_chains,
      events: wc_events,
    },
  },
};
