import { useEffect, useState } from 'react';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession, useOnSessionEvent } from '@walletconnect/modal-sign-react';
export const useAccount = () => {
    const session = useSession();
    const [account, accounts, chainId, setAccount] = useClientWalletStore((state) => [
        state.account,
        state.accounts,
        state.chainId,
        state.setAccount,
    ]);
    const [error, setError] = useState(undefined);
    const { request, data: wc_data, error: wc_error, loading } = useRequest({
        topic: session?.topic,
        chainId: chainId ?? 'aleo:1',
        request: {
            id: 1,
            jsonrpc: '2.0',
            method: 'aleo_getSelectedAccount',
            params: {
                type: 'GET_SELECTED_ACCOUNT',
            }
        },
    });
    // listen for wallet-originated account updates
    useOnSessionEvent(({ params }) => {
        const eventName = params.event.name;
        if (eventName === 'accountsChanged') {
            const address = params.event.data[0];
            const network = params.chainId.split(':')[0];
            const chainId = params.chainId.split(':')[1];
            setAccount({
                network,
                chainId,
                address,
            });
            setError(undefined);
        }
    });
    // send initial account request...
    useEffect(() => {
        if (session) {
            request();
        }
    }, [session]);
    // ...and listen for response
    useEffect(() => {
        if (wc_error) {
            setError(wc_error.message);
        }
        else if (wc_data) {
            const puzzleData = wc_data && wc_data.type === 'GET_SELECTED_ACCOUNT_RES' ? wc_data : undefined;
            const error = wc_data && wc_data.type === 'GET_SELECTED_ACCOUNT_RES' ? wc_data.data.error : undefined;
            const account = puzzleData?.data.account;
            if (account) {
                setAccount(account);
            }
            setError(error);
        }
    }, [wc_data, wc_error]);
    return {
        account,
        accounts,
        isConnected: !!account,
        session,
        error,
        loading
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VBY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzVDLE9BQU8sb0JBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUk1RixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sT0FBTyxHQUF3QixVQUFVLEVBQUUsQ0FBQztJQUVsRCxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQzVDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUMsT0FBTztRQUNiLEtBQUssQ0FBQyxRQUFRO1FBQ2QsS0FBSyxDQUFDLE9BQU87UUFDYixLQUFLLENBQUMsVUFBVTtLQUNqQixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBcUIsU0FBUyxDQUFDLENBQUE7SUFFakUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3RFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSztRQUNyQixPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVE7UUFDNUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxzQkFBc0I7YUFDQTtTQUMvQjtLQUNGLENBQUMsQ0FBQztJQUVMLCtDQUErQztJQUMvQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtRQUMvQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLFNBQVMsS0FBSyxpQkFBaUIsRUFBRTtZQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxVQUFVLENBQUM7Z0JBQ1QsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87YUFDUixDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGtDQUFrQztJQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUViLDZCQUE2QjtJQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxPQUFPLEVBQUU7WUFDbEIsTUFBTSxVQUFVLEdBQTZDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMxSSxNQUFNLEtBQUssR0FBdUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDMUgsTUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFeEIsT0FBTztRQUNMLE9BQU87UUFDUCxRQUFRO1FBQ1IsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ3RCLE9BQU87UUFDUCxLQUFLO1FBQ0wsT0FBTztLQUNSLENBQUM7QUFDSixDQUFDLENBQUMifQ==