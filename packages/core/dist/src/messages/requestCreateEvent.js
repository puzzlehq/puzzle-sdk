import { hasInjectedConnection } from '../index.js';
import { SdkError } from '../data/errors.js';
export const requestCreateEvent = async (requestData) => {
    if (!hasInjectedConnection())
        throw new Error(`requestCreateEvent ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.requestCreateEvent?.mutate)
        throw new Error('requestCreateEvent.mutate not found!');
    const inputs = requestData?.inputs.map((input) => {
        if (typeof input === 'string') {
            return input;
        }
        return input.plaintext;
    });
    const req = {
        method: 'requestCreateEvent',
        params: {
            ...requestData,
            inputs,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.requestCreateEvent.mutate(req);
        return response;
    }
    catch (e) {
        console.error('createEvent error', e);
        throw e;
    }
};
