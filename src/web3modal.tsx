import { WalletConnectModalSign } from '@walletconnect/modal-sign-react';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';

export const PuzzleWeb3Modal = () => {
  return (
    <WalletConnectModalSign
      projectId={projectId}
      metadata={{
        name: 'Puzzle Portfolio',
        description: 'Your portal to web3 privacy',
        url: 'localhost:3332/',
        icons: [
          'https://www.gonucleo.xyz/static/media/full_logo.2bbf808101dcbe20a648.png',
        ],
      }}
      modalOptions={{ ...web3modal_puzzle_props }}
    />
  );
};
