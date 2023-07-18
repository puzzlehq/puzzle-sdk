import localforage from 'localforage';

export class Local {
  static getKeys = async (): Promise<string[]> => {
    return await localforage.keys();
  }

  static getEntries = async <T = any>(): Promise<[string, T][]> => {
    let entries: [string, T][] = [];
    const keys = await this.getKeys()

    keys.forEach(async (key) =>
      entries.push(await localforage.getItem(key) as [string, T])
    )

    return entries;
  }

  static getItem = async <T = any>(key: string): Promise<T | undefined> => {
    return await localforage.getItem(key) ?? undefined;
  }

  static setItem = async <T = any>(key: string, value: T): Promise<void> => {
    await localforage.setItem(key, value)
  }

  static removeItem = async (key: string): Promise<void> => {
    await localforage.removeItem(key)
  }
}