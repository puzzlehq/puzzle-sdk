export const checkForDesktopConnection = async (sessionTopic: string) => {
  const extensionDownloaded = !!window?.aleo.puzzleWalletClient;
  if (!extensionDownloaded) {
    localStorage.setItem('puzzle-hasDesktopConnection', 'false');
    return false;
  }

  try {
    const res: boolean = await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic },
    );
    if (res) {
      localStorage.setItem('puzzle-hasDesktopConnection', 'true');
      return true;
    } else {
      localStorage.setItem('puzzle-hasDesktopConnection', 'false');
      return false;
    }
  } catch (e) {
    console.warn(e);
    localStorage.setItem('puzzle-hasDesktopConnection', 'false');
    return false;
  }
};

export const hasDesktopConnection = () => {
  const extensionDownloaded = !!window?.aleo.puzzleWalletClient;
  if (!extensionDownloaded) return false;

  const puzzleHasDesktopConnection = localStorage.getItem(
    'puzzle-hasDesktopConnection',
  );
  return puzzleHasDesktopConnection === 'true';
};
