export const checkForDesktopConnection = async (sessionTopic: string) => {
  const extensionDownloaded = !!window?.aleo?.puzzleWalletClient;
  if (!extensionDownloaded) {
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
  const extensionDownloaded = !!window?.aleo?.puzzleWalletClient;
  if (!extensionDownloaded) {
    return false;
  }

  const puzzleHasDesktopConnection = localStorage.getItem(
    'puzzle-hasInjectedConnection',
  );
  return puzzleHasDesktopConnection === 'true';
};
