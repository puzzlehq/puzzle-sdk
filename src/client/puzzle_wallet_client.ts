import {
  ConnectData,
  ConnectMessage,
  ConnectRejMessage,
  ConnectResMessage,
} from '../messaging/connect.js';

// Only accessible from the /wc route of the portfolio.
export const connectPuzzle = async (
  connectData: ConnectData
): Promise<ConnectResMessage | ConnectRejMessage> => {
  const messageToPost: ConnectMessage = {
    type: 'CONNECT_DAPP',
    data: connectData,
  };
  postMessageToCS(messageToPost);

  const resMessage = await Promise.race<ConnectResMessage | ConnectRejMessage>([
    new Promise(async (resolve, reject) => {
      try {
        const message = (await awaitMessageFromCS(
          'CONNECT_DAPP_RES'
        )) as ConnectResMessage;
        resolve(message);
      } catch (e) {
        reject();
      }
    }),
    new Promise(async (resolve, reject) => {
      try {
        const message = (await awaitMessageFromCS(
          'CONNECT_DAPP_REJ'
        )) as ConnectRejMessage;
        resolve(message);
      } catch (e) {
        reject();
      }
    }),
  ]);
  console.log('resMessage', resMessage);
  return resMessage;
};

// Injected into the page to verify that the extension has been installed.
export class PuzzleWalletClient {
  constructor() {}
}

let id;

try {
  id = document
    .getElementById('puzzle-extension')
    ?.getAttribute('data-extension-id');
} catch (e) {
  id = process.env.PUZZLE_EXTENSION_ID ?? 'inagmhbmgflceecgfjfhijgkcmefhdlo';
}

export const extensionId = id ?? 'inagmhbmgflceecgfjfhijgkcmefhdlo';

function postMessageToCS(message: ConnectMessage, origin?: string) {
  window.postMessage(
    {
      target: 'puzzle-cs',
      data: message,
    },
    origin ?? window.location.origin
  );
}

async function awaitMessageFromCS(messageToWaitFor: string) {
  const returnMessage = await new Promise<
    ConnectResMessage | ConnectRejMessage
  >((resolve, reject) =>
    window.addEventListener(
      'message',
      async (message) => {
        if (message.data.target !== 'puzzle-inpage') return;
        try {
          const msg = message.data.data as
            | ConnectResMessage
            | ConnectRejMessage;
          const msgType = msg.type;
          if (msgType !== messageToWaitFor) return;

          switch (msgType) {
            case 'CONNECT_DAPP_RES':
              resolve(msg as ConnectResMessage);
              break;
            case 'CONNECT_DAPP_REJ':
              resolve(msg as ConnectRejMessage);
              break;
            default:
              reject(msg as ConnectRejMessage);
          }
        } catch (e) {
          console.error(e);
          reject(e);
        }
      },
      true
    )
  );
  console.log('returnMessage', returnMessage);
  return returnMessage;
}
