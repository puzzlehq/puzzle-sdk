export declare class Local {
    static getKeys: () => Promise<string[]>;
    static getEntries: <T = any>() => Promise<[string, T][]>;
    static getItem: <T = any>(key: string) => Promise<T>;
    static setItem: <T = any>(key: string, value: T) => Promise<void>;
    static removeItem: (key: string) => Promise<void>;
}
