import { Network } from '@puzzlehq/types';

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
  'requestNetworkSwitch'
];

export const wc_aleo_chains = [
  'aleo:0', // mainnet
  'aleo:1' // testnet
];

// events originating from wallet
export const wc_events = [
  'accountSelected',
  'selectedAccountSynced',
  'sharedAccountSynced',
];

export const projectId = 'f0aaeffe71b636da453fce042d79d723';

function isAndroid() {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return /Android/i.test(navigator.userAgent);
}

export const web3modal_puzzle_props_android = {
  projectId,
  chains: wc_aleo_chains,
  enableExplorer: true,
  explorerRecommendedWalletIds: [
    '7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a',
  ],
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: 'puzzleapp://',
        universal: '',
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

export const web3modal_puzzle_props_default = {
  projectId,
  chains: wc_aleo_chains,
  enableExplorer: false,
  explorerRecommendedWalletIds: [
    '7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a',
  ],
  mobileWallets: [
    {
      id: 'puzzle',
      name: 'Puzzle Wallet',
      links: {
        native: 'puzzleapp://',
        universal: '',
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

export const networkToChainId = (
  network: Network,
  includePrefix: boolean = true,
) => {
  let chain: string;
  switch (network) {
    case Network.AleoMainnet:
      chain = 'aleo:0';
      break;
    case Network.AleoTestnet:
      chain = 'aleo:1';
      break;
  }
  return includePrefix ? chain : chain.replace('aleo:', '');
};

export const chainIdToNetwork = (chainId: 'aleo:0' | 'aleo:1' | string) => {
  switch (chainId) {
    case 'aleo:0':
      return Network.AleoMainnet;
    case 'aleo:1':
      return Network.AleoTestnet;
  }
};
