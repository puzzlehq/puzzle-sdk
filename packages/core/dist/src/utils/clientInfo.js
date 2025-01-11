export const hasInjectedConnection = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const injectedConnection = !!window?.aleo?.puzzleWalletClient;
    return injectedConnection;
};
