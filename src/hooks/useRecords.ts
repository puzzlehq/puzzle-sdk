import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect } from 'react';
import { GetRecordsMessage, GetRecordsRejMessage, GetRecordsResMessage, Record, RecordsFilter } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';
import jsyaml from 'js-yaml'

export const RECORDS_PER_PAGE = 50;

type UseRecordsParams = {
  filter?: RecordsFilter,
  page?: number,
  formatted?: boolean
}

export const useRecords = ( {filter, page, formatted }: UseRecordsParams) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  if (filter?.program_id === '') {
    filter.program_id = undefined
  }

  const { request: wc_request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getRecords',
      params: {
        type: 'GET_RECORDS',
        filter: filter,
        page,
        formatted
      } as GetRecordsMessage
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      wc_request();
    }
  });

  // send initial records request...
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      wc_request();
    }
  }, [readyToRequest, account]);


  const request = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      wc_request();
    }
  }

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.type === 'GET_RECORDS_REJ' ? wc_data.data.error : undefined);
  const puzzleData: GetRecordsResMessage | undefined =  wc_data && wc_data.type === 'GET_RECORDS_RES' ? wc_data : undefined;
  const records: Record[] | undefined = puzzleData?.data.records;
  const totalRecordCount = puzzleData?.data.totalRecordCount ?? 0;

  if (records) {
    records.forEach((record) => {
      console.log(record);
      const ob = jsyaml.load(record.plaintext);
      console.log(ob);
    })
  }

  return { request, records, error, loading, totalRecordCount };
};