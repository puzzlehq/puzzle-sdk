import { useConnect as useWalletConnect } from '@walletconnect/modal-sign-react';
import { wc_aleo_chains, wc_aleo_methods, wc_events, } from '../data/walletconnect.js';
export const useConnect = () => {
    const { connect: wc_connect, data, error, loading } = useWalletConnect({
        requiredNamespaces: {
            aleo: {
                methods: wc_aleo_methods,
                chains: wc_aleo_chains,
                events: wc_events,
            },
        },
    });
    const connect = async () => {
        try {
            await wc_connect();
        }
        catch (e) { }
    };
    return { connect, data, error, loading };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxJQUFJLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakYsT0FBTyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YsU0FBUyxHQUNWLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUM3QixNQUFNLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxHQUFHLGdCQUFnQixDQUFDO1FBQ25FLGtCQUFrQixFQUFFO1lBQ2xCLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsZUFBZTtnQkFDeEIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxVQUFVLEVBQUUsQ0FBQztTQUNwQjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FBQyJ9