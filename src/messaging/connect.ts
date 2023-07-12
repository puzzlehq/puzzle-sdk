import { getMessage } from '@extend-chrome/messages';
import { PuzzleAccount } from '../data/types.js';
import { ProposalTypes } from '@walletconnect/types';

export type ConnectData = {
  wc: {
    uri: string;
    requestId?: string;
    sessionTopic?: string;
    proposal?: ProposalTypes.Struct;
  };
};

