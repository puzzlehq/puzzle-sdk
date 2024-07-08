export const checkForDesktopConnection = async (sessionTopic: string) => {
  const injectedConnection = !!window?.aleo?.puzzleWalletClient;
  if (!injectedConnection) {
    console.log('!!window?.aleo?.puzzleWalletClient', injectedConnection);
    localStorage.setItem('puzzle-hasInjectedConnection', 'false');
    return false;
  }

  try {
    const res: boolean = await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic },
    );
    if (res) {
      localStorage.setItem('puzzle-hasInjectedConnection', 'true');
      return true;
    } else {
      localStorage.setItem('puzzle-hasInjectedConnection', 'false');
      return false;
    }
  } catch (e) {
    console.warn(e);
    localStorage.setItem('puzzle-hasInjectedConnection', 'false');
    return false;
  }
};

export const hasInjectedConnection = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const injectedConnection = !!window?.aleo?.puzzleWalletClient;
  if (!injectedConnection) {
    return false;
  }

  const puzzleHasDesktopConnection = localStorage.getItem(
    'puzzle-hasInjectedConnection',
  );
  return puzzleHasDesktopConnection === 'true';
};
