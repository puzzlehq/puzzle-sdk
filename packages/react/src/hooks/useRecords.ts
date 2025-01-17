import {
  GetRecordsRequest,
  GetRecordsResponse,
  log_sdk,
  GenericRequest,
} from '@puzzlehq/sdk-core';
import { type RecordWithPlaintext } from '@puzzlehq/types';
import { useWalletStore } from '../store.js';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const getFormattedRecordPlaintext = (data: any) => {
  try {
    return JSON.stringify(data, null, 2).replaceAll('"', '') ?? '';
  } catch {
    return '';
  }
};

export const useRecords = ({
  address,
  multisig = false,
  filter,
  page,
  network,
}: GetRecordsRequest) => {
  const { isConnected } = useIsConnected();
  const [account] = useWalletStore((state) => [state.account]);

  const query: GenericRequest = {
    method: 'getRecords',
    params: {
      address,
      filter,
      page,
      network,
    } as GetRecordsRequest,
  };

  const [debouncedFilter] = useDebounce(filter, 500);
  const queryKey = [
    'useRecords',
    account?.address,
    address,
    multisig,
    JSON.stringify(debouncedFilter),
    page,
  ];

  const {
    refetch,
    data,
    error: _error,
    isLoading: loading,
  } = useInjectedRequestQuery<GetRecordsResponse | undefined>({
    queryKey,
    enabled: (multisig ? !!address : true) && !!isConnected && !!account,
    fetchFunction: async () => {
      const response: GetRecordsResponse =
        await window.aleo.puzzleWalletClient.getRecords.query(query);
      return response;
    },
  });

  const readyToRequest =
    !!isConnected && !!account && (multisig ? !!address : true);

  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => !multisig,
        onData: () => refetch(),
        onError: (e: Error) => {
          isConnected && console.error(e);
        },
        dependencies: [multisig],
      },
      {
        subscriptionName: 'onSharedAccountSynced',
        condition: (data) => {
          return !!multisig && data?.address === address;
        },
        onData: () => refetch(),
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [multisig, address],
      },
    ],
  });

  const fetchPage = () => {
    if (readyToRequest && !loading) {
      log_sdk('useRecords refetching...', [address, multisig, filter, page]);
      refetch();
    }
  };

  const error: string | undefined = (_error as Error)?.message ?? undefined;
  const response: GetRecordsResponse | undefined = data;
  const records: RecordWithPlaintext[] | undefined = response?.records;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, records, error, loading, page, pageCount };
};
