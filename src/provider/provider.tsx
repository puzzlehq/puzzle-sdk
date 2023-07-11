import * as React from 'react';
import { useInitPuzzleWallet } from '../index.js';

type props = {
  children?: React.ReactNode;
};

export const PuzzleWalletProvider = ({ children }: props) => {
  useInitPuzzleWallet();

  return <>{children}</>;
};
