import { useEffect } from 'react';
import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionDelete, useSession } from '@walletconnect/modal-sign-react';
export const useInitWallet = () => {
    const session = useSession();
    const [setAccount, setAccounts] = useClientWalletStore((state) => [
        state.setAccount, state.setAccounts
    ]);
    useEffect(() => {
        if (session) {
            window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE'); // remove to prevent walletconnect from redirecting to the wallet page
            const accounts = session.namespaces.aleo.accounts.map((account) => {
                const split = account.split(':');
                return {
                    network: split[0],
                    chainId: split[1],
                    address: split[2],
                };
            });
            setAccounts(accounts ?? []);
            accounts[0] && setAccount(accounts[0]);
        }
    }, [session]);
    useOnSessionDelete(({ id, topic }) => {
        console.log('session deleted! topic: ', topic);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZVdhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRWxDLE9BQU8sb0JBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWpGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQXdCLFVBQVUsRUFBRSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2hFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDcEMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLHNFQUFzRTtZQUN2SSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xFLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87b0JBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDRCxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUViLGtCQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDIn0=