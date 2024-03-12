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
export const wc_aleo_chains = ['aleo:1'];

// events originating from wallet
export const wc_events = [
  'chainChanged',
  'accountSelected',
  'selectedAccountSynced',
  'sharedAccountSynced',
];

export const projectId = 'f0aaeffe71b636da453fce042d79d723';

function isAndroid() {
  if (!navigator) {
    return false;
  }
  return /Android/i.test(navigator.userAgent);
}

export const web3modal_puzzle_props_android = {
  chains: wc_aleo_chains,
  enableExplorer: true,
  explorerRecommendedWalletIds: [projectId],
};

export const web3modal_puzzle_props_default = {
  chains: wc_aleo_chains,
  enableExplorer: false,
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
    avail: 'https://i.imgur.com/GxNn8BO.png',
  },
};

export const web3modal_puzzle_props = isAndroid()
  ? web3modal_puzzle_props_android
  : web3modal_puzzle_props_default;

export const signClient_puzzleProps = {
  requiredNamespaces: {
    aleo: {
      methods: wc_aleo_methods,
      chains: wc_aleo_chains,
      events: wc_events,
    },
  },
};
