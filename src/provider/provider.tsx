import React from 'react';
import { useInitPuzzleWallet } from '../index.js';

type Props = {
  children?: React.ReactNode;
};

export const PuzzleWalletProvider: React.FC<Props> = ({ children }) => {
  useInitPuzzleWallet();

  return <>{children}</>;
};
