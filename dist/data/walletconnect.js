// methods called from dApp
export const wc_aztec_methods = [
    // aztec methods
    'aztec_connect',
    'aztec_disconnect',
    'aztec_getAccountPublicKey',
    'aztec_getSpendingPublicKey',
    'aztec_requestProofs',
];
export const wc_aztec_chains = ['aztec:1337'];
export const wc_aleo_methods = [
    // aleo methods
    'aleo_connect',
    'aleo_disconnect',
    'aleo_getSelectedAccount',
    'aleo_transfer',
    'aleo_deployProgram',
    'aleo_getBalance',
    'aleo_executeProgram',
    'aleo_getRecords'
];
export const wc_aleo_chains = ['aleo:1']; //placeholder until there are multiple chains
// events originating from wallet
export const wc_events = ['chainChanged', 'accountsChanged', 'balanceChanged', 'recordsChanged'];
export const projectId = '2133b10d21f9fcf851eb9ef8f057acea';
export const walletURL = 'https://walletconnect.puzzle.online/';
export const web3modal_puzzle_props = {
    standaloneChains: wc_aztec_chains.concat(wc_aleo_chains),
    enableExplorer: false,
    enableAccountView: true,
    enableNetworkView: true,
    enableStandaloneMode: true,
    mobileWallets: [
        {
            id: 'puzzle',
            name: 'Puzzle Wallet',
            links: {
                native: '',
                universal: walletURL,
            },
        },
    ],
    desktopWallets: [
        {
            id: 'puzzle',
            name: 'Puzzle Wallet',
            links: {
                native: '',
                universal: walletURL,
            },
        },
    ],
    walletImages: {
        // Override manual wallet image
        puzzle: 'https://i.imgur.com/p9tHaFC.png'
    }
};
export const signClient_puzzleProps = {
    requiredNamespaces: {
        aztec: {
            methods: wc_aztec_methods,
            chains: wc_aztec_chains,
            events: wc_events,
        },
        aleo: {
            methods: wc_aleo_methods,
            chains: wc_aleo_chains,
            events: wc_events,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0Y29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3dhbGxldGNvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0NBQ3RCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUc7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsNkNBQTZDO0FBRXZGLGlDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUVqRyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsa0NBQWtDLENBQUM7QUFDNUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLHNDQUFzQyxDQUFDO0FBRWhFLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHO0lBQ3BDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3hELGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLGFBQWEsRUFBRTtRQUNiO1lBQ0UsRUFBRSxFQUFFLFFBQVE7WUFDWixJQUFJLEVBQUUsZUFBZTtZQUNyQixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLFNBQVM7YUFDckI7U0FDRjtLQUNGO0lBQ0QsY0FBYyxFQUFFO1FBQ2Q7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLElBQUksRUFBRSxlQUFlO1lBQ3JCLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsRUFBRTtnQkFDVixTQUFTLEVBQUUsU0FBUzthQUNyQjtTQUNGO0tBQ0Y7SUFDRCxZQUFZLEVBQUM7UUFDWCwrQkFBK0I7UUFDL0IsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQyxrQkFBa0IsRUFBRTtRQUNsQixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGVBQWU7WUFDeEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFFLFNBQVM7U0FDbEI7S0FDRjtDQUNGLENBQUMifQ==