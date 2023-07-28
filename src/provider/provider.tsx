import React from 'react';
import { useInitWallet } from '../index.js';

type Props = {
  children?: React.ReactNode;
};

export const PuzzleWalletProvider: React.FC<Props> = ({ children }) => {
  useInitWallet();

  return <>{children}</>;
};
