import { SessionTypes } from "@walletconnect/types";

export type DeployMessage = {
  type: 'DEPLOY';
  data: {
    data: DeployMessageInputData,
    wc?: {
      session: SessionTypes.Struct
    };
  };
};

export type DeployMessageInputData = {
  aleoCode: string;
  programName: string;
}

export type DeployResData = {
  type: "DEPLOYMENT"
  transactionId: string,
  timestamp: number,
  version: number,
  program: string,
}

export type DeployResMessage = {
  type: 'DEPLOY_RES';
  data: DeployResData
};

export type DeployRejMessage = {
  type: 'DEPLOY_REJ';
  data: {
    error?: string;
  }
};

