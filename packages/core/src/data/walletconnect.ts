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

export const wc_required_aleo_chains = ['aleo:1'] // old, incorrect testnet3 - to be phased out
export const wc_optional_aleo_chains = [
  'aleo:0', // mainnet
  'aleo:3', // new, correct testnet3
  'aleo:4' // forthcoming canarynet
]

export const wc_aleo_chains = [
  ...wc_required_aleo_chains,
  ...wc_optional_aleo_chains
];

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
  projectId,
  chains: ['aleo:3'],
  enableExplorer: true,
  explorerRecommendedWalletIds: ['7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a'],
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: 'puzzleapp://',
        universal: ''
      },
    },
  ],
  walletImages: {
    puzzle: 'https://i.imgur.com/p9tHaFC.png',
  },
};

export const web3modal_puzzle_props_default = {
  projectId,
  chains: wc_aleo_chains,
  enableExplorer: false,
  explorerRecommendedWalletIds: ['7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a'],
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: 'puzzleapp://',
        universal: ''
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

export const web3modal_puzzle_props = isAndroid() ? web3modal_puzzle_props_android : web3modal_puzzle_props_default

export const signClient_puzzleProps = {
  requiredNamespaces: {
    aleo: {
      methods: wc_aleo_methods,
      chains: web3modal_puzzle_props.chains,
      events: wc_events,
    },
  },
};
