export type DeployMessage = {
  type: 'DEPLOY';
  data: DeployMessageInputData;
};

export type DeployMessageInputData = {
    aleoCode: string;
}

export type DeployResMessage = {
  type: 'DEPLOY_RES';
  data: {
    transactionId: string;
  }
};

export type DeployRejMessage = {
  type: 'DEPLOY_REJ';
  data: {
    error?: string;
  }
};