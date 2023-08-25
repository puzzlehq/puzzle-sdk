import React from 'react';
import { WalletConnectModalSign } from '@walletconnect/modal-sign-react';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';

type props = {
  dAppName: string,
  dAppDescription: string,
  dAppUrl: string,
  dAppIconURL: string,
}

export const PuzzleWeb3Modal = ({  dAppName, dAppDescription, dAppUrl, dAppIconURL}: props) => {
  return (
    <WalletConnectModalSign
      projectId={projectId}
      metadata={{
        name: dAppName,
        description: dAppDescription,
        url: dAppUrl,
        icons: [
          dAppIconURL
        ],
      }}
      modalOptions={{ ...web3modal_puzzle_props }}
      
    />
  );
};
