import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
export const useTransferCredits = (transferRequestData) => {
    const session = useSession();
    const [chainId] = useClientWalletStore((state) => [
        state.chainId,
    ]);
    // TODO: (darvish) Make this real
    const { request: transfer, data, error, loading } = useRequest({
        topic: session?.topic ?? '',
        chainId: chainId ?? 'aleo:1',
        request: {
            id: 1,
            jsonrpc: '2.0',
            method: 'aleo_transfer',
            params: transferRequestData,
        },
    });
    return { transfer, data, error, loading };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvdXNlVHJhbnNmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxvQkFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBU3pFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLG1CQUF5QyxFQUN6QyxFQUFFO0lBQ0YsTUFBTSxPQUFPLEdBQXdCLFVBQVUsRUFBRSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDaEQsS0FBSyxDQUFDLE9BQU87S0FDZCxDQUFDLENBQUM7SUFFSCxpQ0FBaUM7SUFDakMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDN0QsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQixPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVE7UUFDNUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLE1BQU0sRUFBRSxtQkFBbUI7U0FDNUI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFDIn0=