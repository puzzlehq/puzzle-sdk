import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleWallet } from './useWallet.js';
import { GetRecordsMessage, GetRecordsResMessage } from '../messaging/records.js';
import { RecordPlaintext } from '@aleohq/nodejs';

export const useRecords = () => {
  const { session } = usePuzzleWallet(); 
  const { signClient } = useClientWalletStore();
  const [records, setRecords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const { request, data, error, _ } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getRecords',
      params: {
        type: 'GET_RECORDS',
      } as GetRecordsMessage
    },
  });

  // listen for wallet-originated balance updates
  useEffect(() => {
    if (signClient && session) {
      signClient.events.on('session_event', ({ id, params, topic }) => {
        if (topic !== session.topic) return;
        const eventName = params.event.name;
        if (eventName === 'accountsChanged') {
          setLoading(true)
        } else if (eventName === 'recordsChanged') {
          const newRecords: string[] = params.event.data;
          setRecords(newRecords);
          setLoading(false)
        }
      });
    }
  }, [signClient, session])

  // send initial records request...
  useEffect(() => { 
    if (session) {
      setLoading(true);
      request();
    }
  }, [session]);

  // ...and listen for response
  useEffect(() => { 
    if (error) {
      /// todo -- pipe this to the frontend
    } else if (data) {
      const response = data as GetRecordsResMessage;
      setLoading(false);
      setRecords(response.data.records);
    }
  }, [data, error]);

  return { loading, records };
};