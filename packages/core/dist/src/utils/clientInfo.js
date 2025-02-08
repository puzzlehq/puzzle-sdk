export const hasInjectedConnection = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const injectedConnection = !!window?.aleo?.puzzleWalletClient;
    return injectedConnection;
};
export const waitForInjectedConnection = async () => {
    const startTime = Date.now();
    while (!hasInjectedConnection()) {
        if (Date.now() - startTime > 5000) {
            throw new Error('Puzzle wallet not detected within 5 seconds');
        }
        console.log('Puzzle wallet not detected! Waiting for 0.25 seconds');
        await new Promise((resolve) => setTimeout(resolve, 250));
    }
};
