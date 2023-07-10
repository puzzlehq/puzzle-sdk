import {
  AssetValue,
  assetValueFromJson,
  AssetValueJson,
  assetValueToJson,
  BridgeCallData,
  EthAddress,
  GrumpkinAddress,
  ProofId,
} from 'barretenberg';

export enum ProofRequestDataType {
  PaymentProofRequestData = 'PaymentProofRequestData',
  AccountProofRequestData = 'AccountProofRequestData',
  DefiProofRequestData = 'DefiProofRequestData',
}

/// Payments

export interface DappPaymentProofRequestData {
  type: ProofRequestDataType.PaymentProofRequestData;
  accountPublicKey: GrumpkinAddress;
  proofId: ProofId.DEPOSIT | ProofId.SEND | ProofId.WITHDRAW;
  assetValue: AssetValue;
  fee: AssetValue;
  publicOwner: EthAddress;
  recipient: GrumpkinAddress;
}

export interface DappPaymentProofRequestDataJSON {
  type: ProofRequestDataType.PaymentProofRequestData;
  accountPublicKey: string;
  proofId: ProofId.DEPOSIT | ProofId.SEND | ProofId.WITHDRAW;
  assetValue: AssetValueJson;
  fee: AssetValueJson;
  publicOwner: string;
  recipient: string;
}

export function dappPaymentProofRequestDataToJSON(
  rd: DappPaymentProofRequestData
): DappPaymentProofRequestDataJSON {
  return {
    type: ProofRequestDataType.PaymentProofRequestData,
    accountPublicKey: rd.accountPublicKey.toString(),
    proofId: rd.proofId,
    assetValue: assetValueToJson(rd.assetValue),
    fee: assetValueToJson(rd.fee),
    publicOwner: rd.publicOwner.toString(),
    recipient: rd.recipient.toString(),
  };
}

export function dappPaymentProofRequestDataFromJSON(
  rd: DappPaymentProofRequestDataJSON
): DappPaymentProofRequestData {
  return {
    type: ProofRequestDataType.PaymentProofRequestData,
    accountPublicKey: GrumpkinAddress.fromString(rd.accountPublicKey),
    proofId: rd.proofId,
    assetValue: assetValueFromJson(rd.assetValue),
    fee: assetValueFromJson(rd.fee),
    publicOwner: EthAddress.fromString(rd.publicOwner),
    recipient: GrumpkinAddress.fromString(rd.recipient),
  };
}

/// Accounts

export interface DappAccountProofRequestData {
  type: ProofRequestDataType.AccountProofRequestData;
  accountPublicKey: GrumpkinAddress;
  deposit: AssetValue;
  fee: AssetValue;
  depositor: EthAddress;
}

export interface DappAccountProofRequestDataJSON {
  type: ProofRequestDataType.AccountProofRequestData;
  accountPublicKey: string;
  deposit: AssetValueJson;
  fee: AssetValueJson;
  depositor: string;
}

export function dappAccountProofRequestDataToJSON(
  rd: DappAccountProofRequestData
): DappAccountProofRequestDataJSON {
  return {
    type: ProofRequestDataType.AccountProofRequestData,
    accountPublicKey: rd.accountPublicKey.toString(),
    deposit: assetValueToJson(rd.deposit),
    fee: assetValueToJson(rd.fee),
    depositor: rd.depositor.toString(),
  };
}

export function dappAccountProofRequestDataFromJSON(
  rd: DappAccountProofRequestDataJSON
): DappAccountProofRequestData {
  return {
    type: ProofRequestDataType.AccountProofRequestData,
    accountPublicKey: GrumpkinAddress.fromString(rd.accountPublicKey),
    deposit: assetValueFromJson(rd.deposit),
    fee: assetValueFromJson(rd.fee),
    depositor: EthAddress.fromString(rd.depositor),
  };
}

/// Defi

export interface DappDefiProofRequestData {
  type: ProofRequestDataType.DefiProofRequestData;
  accountPublicKey: GrumpkinAddress;
  bridgeCallData: BridgeCallData;
  assetValue: AssetValue;
  fee: AssetValue;
}

export interface DappDefiProofRequestDataJSON {
  type: ProofRequestDataType.DefiProofRequestData;
  accountPublicKey: string;
  bridgeCallData: string;
  assetValue: AssetValueJson;
  fee: AssetValueJson;
}

export function dappDefiProofRequestDataToJSON(
  rd: DappDefiProofRequestData
): DappDefiProofRequestDataJSON {
  return {
    type: ProofRequestDataType.DefiProofRequestData,
    accountPublicKey: rd.accountPublicKey.toString(),
    bridgeCallData: rd.bridgeCallData.toString(),
    assetValue: assetValueToJson(rd.assetValue),
    fee: assetValueToJson(rd.fee),
  };
}

export function dappDefiProofRequestDataFromJSON(
  rd: DappDefiProofRequestDataJSON
): DappDefiProofRequestData {
  return {
    type: ProofRequestDataType.DefiProofRequestData,
    accountPublicKey: GrumpkinAddress.fromString(rd.accountPublicKey),
    bridgeCallData: BridgeCallData.fromString(rd.bridgeCallData),
    assetValue: assetValueFromJson(rd.assetValue),
    fee: assetValueFromJson(rd.fee),
  };
}

/// index

export type DappProofRequestData =
  | DappPaymentProofRequestData
  | DappAccountProofRequestData
  | DappDefiProofRequestData;
export type ProofRequestDataJson =
  | DappPaymentProofRequestDataJSON
  | DappAccountProofRequestDataJSON
  | DappDefiProofRequestDataJSON;

export function proofRequestDataToJson(
  rd: DappProofRequestData
): ProofRequestDataJson {
  if (rd.type === ProofRequestDataType.PaymentProofRequestData) {
    return dappPaymentProofRequestDataToJSON(rd);
  } else if (rd.type === ProofRequestDataType.AccountProofRequestData) {
    return dappAccountProofRequestDataToJSON(rd);
  } else {
    return dappDefiProofRequestDataToJSON(rd);
  }
}

export function proofRequestDataFromJson(
  rd: ProofRequestDataJson
): DappProofRequestData {
  if (rd.type === ProofRequestDataType.PaymentProofRequestData) {
    return dappPaymentProofRequestDataFromJSON(rd);
  } else if (rd.type === ProofRequestDataType.AccountProofRequestData) {
    return dappAccountProofRequestDataFromJSON(rd);
  } else {
    return dappDefiProofRequestDataFromJSON(rd);
  }
}
