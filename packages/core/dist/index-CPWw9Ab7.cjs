"use strict";
const t = Symbol();
const s = Object.getPrototypeOf, c$2 = /* @__PURE__ */ new WeakMap(), l$2 = (e) => e && (c$2.has(e) ? c$2.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), y$4 = (e) => l$2(e) && e[t] || null, h$4 = (e, t2 = true) => {
  c$2.set(e, t2);
};
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
const isObject = (x2) => typeof x2 === "object" && x2 !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x2) => isObject(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version2, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version2) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h$4(snap, true);
  snapCache.set(target, [version2, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const desc = {
      value,
      enumerable: true,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      h$4(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version2 = versionHolder[0];
  const listeners2 = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version2 !== nextVersion) {
      version2 = nextVersion;
      listeners2.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners2.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version2) {
          version2 = propVersion;
        }
      });
    }
    return version2;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ((define_import_meta_env_default ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners2.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener2 = (listener) => {
    listeners2.add(listener);
    if (listeners2.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((define_import_meta_env_default ? "production" : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener2 = () => {
      listeners2.delete(listener);
      if (listeners2.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener2;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = y$4(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v3) => {
          value.status = "fulfilled";
          value.value = v3;
          notifyUpdate(["resolve", [prop], v3]);
        }).catch((e) => {
          value.status = "rejected";
          value.reason = e;
          notifyUpdate(["reject", [prop], e]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener2
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
const [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((define_import_meta_env_default ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener2 = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener2 = addListener2(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener2();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((define_import_meta_env_default ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}
const o$1 = proxy({
  history: ["ConnectWallet"],
  view: "ConnectWallet",
  data: void 0
}), T$1 = {
  state: o$1,
  subscribe(e) {
    return subscribe(o$1, () => e(o$1));
  },
  push(e, t2) {
    e !== o$1.view && (o$1.view = e, t2 && (o$1.data = t2), o$1.history.push(e));
  },
  reset(e) {
    o$1.view = e, o$1.history = [e];
  },
  replace(e) {
    o$1.history.length > 1 && (o$1.history[o$1.history.length - 1] = e, o$1.view = e);
  },
  goBack() {
    if (o$1.history.length > 1) {
      o$1.history.pop();
      const [e] = o$1.history.slice(-1);
      o$1.view = e;
    }
  },
  setData(e) {
    o$1.data = e;
  }
}, a$3 = {
  WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  WCM_VERSION: "WCM_VERSION",
  RECOMMENDED_WALLET_AMOUNT: 9,
  isMobile() {
    return typeof window < "u" ? Boolean(
      window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
        navigator.userAgent
      )
    ) : false;
  },
  isAndroid() {
    return a$3.isMobile() && navigator.userAgent.toLowerCase().includes("android");
  },
  isIos() {
    const e = navigator.userAgent.toLowerCase();
    return a$3.isMobile() && (e.includes("iphone") || e.includes("ipad"));
  },
  isHttpUrl(e) {
    return e.startsWith("http://") || e.startsWith("https://");
  },
  isArray(e) {
    return Array.isArray(e) && e.length > 0;
  },
  formatNativeUrl(e, t2, s2) {
    if (a$3.isHttpUrl(e))
      return this.formatUniversalUrl(e, t2, s2);
    let n3 = e;
    n3.includes("://") || (n3 = e.replaceAll("/", "").replaceAll(":", ""), n3 = `${n3}://`), n3.endsWith("/") || (n3 = `${n3}/`), this.setWalletConnectDeepLink(n3, s2);
    const i2 = encodeURIComponent(t2);
    return `${n3}wc?uri=${i2}`;
  },
  formatUniversalUrl(e, t2, s2) {
    if (!a$3.isHttpUrl(e))
      return this.formatNativeUrl(e, t2, s2);
    let n3 = e;
    n3.endsWith("/") || (n3 = `${n3}/`), this.setWalletConnectDeepLink(n3, s2);
    const i2 = encodeURIComponent(t2);
    return `${n3}wc?uri=${i2}`;
  },
  async wait(e) {
    return new Promise((t2) => {
      setTimeout(t2, e);
    });
  },
  openHref(e, t2) {
    window.open(e, t2, "noreferrer noopener");
  },
  setWalletConnectDeepLink(e, t2) {
    try {
      localStorage.setItem(
        a$3.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href: e, name: t2 })
      );
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  setWalletConnectAndroidDeepLink(e) {
    try {
      const [t2] = e.split("?");
      localStorage.setItem(
        a$3.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href: t2, name: "Android" })
      );
    } catch {
      console.info("Unable to set WalletConnect android deep link");
    }
  },
  removeWalletConnectDeepLink() {
    try {
      localStorage.removeItem(a$3.WALLETCONNECT_DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to remove WalletConnect deep link");
    }
  },
  setModalVersionInStorage() {
    try {
      typeof localStorage < "u" && localStorage.setItem(a$3.WCM_VERSION, "2.6.2");
    } catch {
      console.info("Unable to set Web3Modal version in storage");
    }
  },
  getWalletRouterData() {
    var e;
    const t2 = (e = T$1.state.data) == null ? void 0 : e.Wallet;
    if (!t2)
      throw new Error('Missing "Wallet" view data');
    return t2;
  }
}, _$3 = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), r$1 = proxy({
  enabled: _$3,
  userSessionId: "",
  events: [],
  connectedWalletId: void 0
}), R$4 = {
  state: r$1,
  subscribe(e) {
    return subscribe(r$1.events, () => e(snapshot(r$1.events[r$1.events.length - 1])));
  },
  initialize() {
    r$1.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (r$1.userSessionId = crypto.randomUUID());
  },
  setConnectedWalletId(e) {
    r$1.connectedWalletId = e;
  },
  click(e) {
    if (r$1.enabled) {
      const t2 = {
        type: "CLICK",
        name: e.name,
        userSessionId: r$1.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      r$1.events.push(t2);
    }
  },
  track(e) {
    if (r$1.enabled) {
      const t2 = {
        type: "TRACK",
        name: e.name,
        userSessionId: r$1.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      r$1.events.push(t2);
    }
  },
  view(e) {
    if (r$1.enabled) {
      const t2 = {
        type: "VIEW",
        name: e.name,
        userSessionId: r$1.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      r$1.events.push(t2);
    }
  }
}, c$1 = proxy({
  chains: void 0,
  walletConnectUri: void 0,
  isAuth: false,
  isCustomDesktop: false,
  isCustomMobile: false,
  isDataLoaded: false,
  isUiLoaded: false
}), p$3 = {
  state: c$1,
  subscribe(e) {
    return subscribe(c$1, () => e(c$1));
  },
  setChains(e) {
    c$1.chains = e;
  },
  setWalletConnectUri(e) {
    c$1.walletConnectUri = e;
  },
  setIsCustomDesktop(e) {
    c$1.isCustomDesktop = e;
  },
  setIsCustomMobile(e) {
    c$1.isCustomMobile = e;
  },
  setIsDataLoaded(e) {
    c$1.isDataLoaded = e;
  },
  setIsUiLoaded(e) {
    c$1.isUiLoaded = e;
  },
  setIsAuth(e) {
    c$1.isAuth = e;
  }
}, W$2 = proxy({
  projectId: "",
  mobileWallets: void 0,
  desktopWallets: void 0,
  walletImages: void 0,
  chains: void 0,
  enableAuthMode: false,
  enableExplorer: true,
  explorerExcludedWalletIds: void 0,
  explorerRecommendedWalletIds: void 0,
  termsOfServiceUrl: void 0,
  privacyPolicyUrl: void 0
}), y$3 = {
  state: W$2,
  subscribe(e) {
    return subscribe(W$2, () => e(W$2));
  },
  setConfig(e) {
    var t2, s2;
    R$4.initialize(), p$3.setChains(e.chains), p$3.setIsAuth(Boolean(e.enableAuthMode)), p$3.setIsCustomMobile(
      Boolean((t2 = e.mobileWallets) == null ? void 0 : t2.length)
    ), p$3.setIsCustomDesktop(
      Boolean((s2 = e.desktopWallets) == null ? void 0 : s2.length)
    ), a$3.setModalVersionInStorage(), Object.assign(W$2, e);
  }
};
var V$2 = Object.defineProperty, D$4 = Object.getOwnPropertySymbols, H$2 = Object.prototype.hasOwnProperty, B$2 = Object.prototype.propertyIsEnumerable, M$1 = (e, t2, s2) => t2 in e ? V$2(e, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e[t2] = s2, K$1 = (e, t2) => {
  for (var s2 in t2 || (t2 = {}))
    H$2.call(t2, s2) && M$1(e, s2, t2[s2]);
  if (D$4)
    for (var s2 of D$4(t2))
      B$2.call(t2, s2) && M$1(e, s2, t2[s2]);
  return e;
};
const L$2 = "https://explorer-api.walletconnect.com", E$2 = "wcm", O$3 = "js-2.6.2";
async function w$5(e, t2) {
  const s2 = K$1({ sdkType: E$2, sdkVersion: O$3 }, t2), n3 = new URL(e, L$2);
  return n3.searchParams.append("projectId", y$3.state.projectId), Object.entries(s2).forEach(([i2, l2]) => {
    l2 && n3.searchParams.append(i2, String(l2));
  }), (await fetch(n3)).json();
}
const m$2 = {
  async getDesktopListings(e) {
    return w$5("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return w$5("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return w$5("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return w$5("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${L$2}/w3m/v1/getWalletImage/${e}?projectId=${y$3.state.projectId}&sdkType=${E$2}&sdkVersion=${O$3}`;
  },
  getAssetImageUrl(e) {
    return `${L$2}/w3m/v1/getAssetImage/${e}?projectId=${y$3.state.projectId}&sdkType=${E$2}&sdkVersion=${O$3}`;
  }
};
var z$3 = Object.defineProperty, j$3 = Object.getOwnPropertySymbols, J$2 = Object.prototype.hasOwnProperty, q$2 = Object.prototype.propertyIsEnumerable, k$2 = (e, t2, s2) => t2 in e ? z$3(e, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e[t2] = s2, F$3 = (e, t2) => {
  for (var s2 in t2 || (t2 = {}))
    J$2.call(t2, s2) && k$2(e, s2, t2[s2]);
  if (j$3)
    for (var s2 of j$3(t2))
      q$2.call(t2, s2) && k$2(e, s2, t2[s2]);
  return e;
};
const N$3 = a$3.isMobile(), d$2 = proxy({
  wallets: { listings: [], total: 0, page: 1 },
  search: { listings: [], total: 0, page: 1 },
  recomendedWallets: []
}), te$2 = {
  state: d$2,
  async getRecomendedWallets() {
    const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t2 } = y$3.state;
    if (e === "NONE" || t2 === "ALL" && !e)
      return d$2.recomendedWallets;
    if (a$3.isArray(e)) {
      const s2 = { recommendedIds: e.join(",") }, { listings: n3 } = await m$2.getAllListings(s2), i2 = Object.values(n3);
      i2.sort && i2.sort((l2, v3) => {
        const b3 = e.indexOf(l2.id), f2 = e.indexOf(v3.id);
        return b3 - f2;
      }), d$2.recomendedWallets = i2;
    } else {
      const { chains: s2, isAuth: n3 } = p$3.state, i2 = s2 == null ? void 0 : s2.join(","), l2 = a$3.isArray(t2), v3 = {
        page: 1,
        sdks: n3 ? "auth_v1" : void 0,
        entries: a$3.RECOMMENDED_WALLET_AMOUNT,
        chains: i2,
        version: 2,
        excludedIds: l2 ? t2.join(",") : void 0
      }, { listings: b3 } = N$3 ? await m$2.getMobileListings(v3) : await m$2.getDesktopListings(v3);
      d$2.recomendedWallets = Object.values(b3);
    }
    return d$2.recomendedWallets;
  },
  async getWallets(e) {
    const t2 = F$3({}, e), { explorerRecommendedWalletIds: s2, explorerExcludedWalletIds: n3 } = y$3.state, { recomendedWallets: i2 } = d$2;
    if (n3 === "ALL")
      return d$2.wallets;
    i2.length ? t2.excludedIds = i2.map((x2) => x2.id).join(",") : a$3.isArray(s2) && (t2.excludedIds = s2.join(",")), a$3.isArray(n3) && (t2.excludedIds = [t2.excludedIds, n3].filter(Boolean).join(",")), p$3.state.isAuth && (t2.sdks = "auth_v1");
    const { page: l2, search: v3 } = e, { listings: b3, total: f2 } = N$3 ? await m$2.getMobileListings(t2) : await m$2.getDesktopListings(t2), A2 = Object.values(b3), U2 = v3 ? "search" : "wallets";
    return d$2[U2] = { listings: [...d$2[U2].listings, ...A2], total: f2, page: l2 ?? 1 }, { listings: A2, total: f2 };
  },
  getWalletImageUrl(e) {
    return m$2.getWalletImageUrl(e);
  },
  getAssetImageUrl(e) {
    return m$2.getAssetImageUrl(e);
  },
  resetSearch() {
    d$2.search = { listings: [], total: 0, page: 1 };
  }
}, I$1 = proxy({ open: false }), se = {
  state: I$1,
  subscribe(e) {
    return subscribe(I$1, () => e(I$1));
  },
  async open(e) {
    return new Promise((t2) => {
      const { isUiLoaded: s2, isDataLoaded: n3 } = p$3.state;
      if (a$3.removeWalletConnectDeepLink(), p$3.setWalletConnectUri(e == null ? void 0 : e.uri), p$3.setChains(e == null ? void 0 : e.chains), T$1.reset("ConnectWallet"), s2 && n3)
        I$1.open = true, t2();
      else {
        const i2 = setInterval(() => {
          const l2 = p$3.state;
          l2.isUiLoaded && l2.isDataLoaded && (clearInterval(i2), I$1.open = true, t2());
        }, 200);
      }
    });
  },
  close() {
    I$1.open = false;
  }
};
var G$2 = Object.defineProperty, $$2 = Object.getOwnPropertySymbols, Q$3 = Object.prototype.hasOwnProperty, X$2 = Object.prototype.propertyIsEnumerable, S$2 = (e, t2, s2) => t2 in e ? G$2(e, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e[t2] = s2, Y = (e, t2) => {
  for (var s2 in t2 || (t2 = {}))
    Q$3.call(t2, s2) && S$2(e, s2, t2[s2]);
  if ($$2)
    for (var s2 of $$2(t2))
      X$2.call(t2, s2) && S$2(e, s2, t2[s2]);
  return e;
};
function Z$2() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const C = proxy({ themeMode: Z$2() ? "dark" : "light" }), ne = {
  state: C,
  subscribe(e) {
    return subscribe(C, () => e(C));
  },
  setThemeConfig(e) {
    const { themeMode: t2, themeVariables: s2 } = e;
    t2 && (C.themeMode = t2), s2 && (C.themeVariables = Y({}, s2));
  }
}, g$5 = proxy({ open: false, message: "", variant: "success" }), oe$1 = {
  state: g$5,
  subscribe(e) {
    return subscribe(g$5, () => e(g$5));
  },
  openToast(e, t2) {
    g$5.open = true, g$5.message = e, g$5.variant = t2;
  },
  closeToast() {
    g$5.open = false;
  }
};
let d$1 = class d {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y$3.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await Promise.resolve().then(() => require("./index-DjXXtQqe.cjs"));
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p$3.setIsUiLoaded(true);
    }
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n3) {
  if (n3.__esModule)
    return n3;
  var f2 = n3.default;
  if (typeof f2 == "function") {
    var a3 = function a4() {
      if (this instanceof a4) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a3.prototype = f2.prototype;
  } else
    a3 = {};
  Object.defineProperty(a3, "__esModule", { value: true });
  Object.keys(n3).forEach(function(k2) {
    var d3 = Object.getOwnPropertyDescriptor(n3, k2);
    Object.defineProperty(a3, k2, d3.get ? d3 : {
      enumerable: true,
      get: function() {
        return n3[k2];
      }
    });
  });
  return a3;
}
var events = { exports: {} };
var R$3 = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R$3 && typeof R$3.apply === "function" ? R$3.apply : function ReflectApply2(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R$3 && typeof R$3.ownKeys === "function") {
  ReflectOwnKeys = R$3.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn)
    console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
events.exports = EventEmitter;
events.exports.once = once2;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = void 0;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = void 0;
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function() {
  if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
    this._events = /* @__PURE__ */ Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || void 0;
};
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n3) {
  if (typeof n3 !== "number" || n3 < 0 || NumberIsNaN(n3)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n3 + ".");
  }
  this._maxListeners = n3;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type2) {
  var args = [];
  for (var i2 = 1; i2 < arguments.length; i2++)
    args.push(arguments[i2]);
  var doError = type2 === "error";
  var events2 = this._events;
  if (events2 !== void 0)
    doError = doError && events2.error === void 0;
  else if (!doError)
    return false;
  if (doError) {
    var er2;
    if (args.length > 0)
      er2 = args[0];
    if (er2 instanceof Error) {
      throw er2;
    }
    var err = new Error("Unhandled error." + (er2 ? " (" + er2.message + ")" : ""));
    err.context = er2;
    throw err;
  }
  var handler = events2[type2];
  if (handler === void 0)
    return false;
  if (typeof handler === "function") {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i2 = 0; i2 < len; ++i2)
      ReflectApply(listeners2[i2], this, args);
  }
  return true;
};
function _addListener(target, type2, listener, prepend) {
  var m2;
  var events2;
  var existing;
  checkListener(listener);
  events2 = target._events;
  if (events2 === void 0) {
    events2 = target._events = /* @__PURE__ */ Object.create(null);
    target._eventsCount = 0;
  } else {
    if (events2.newListener !== void 0) {
      target.emit(
        "newListener",
        type2,
        listener.listener ? listener.listener : listener
      );
      events2 = target._events;
    }
    existing = events2[type2];
  }
  if (existing === void 0) {
    existing = events2[type2] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events2[type2] = prepend ? [listener, existing] : [existing, listener];
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }
    m2 = _getMaxListeners(target);
    if (m2 > 0 && existing.length > m2 && !existing.warned) {
      existing.warned = true;
      var w3 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      w3.name = "MaxListenersExceededWarning";
      w3.emitter = target;
      w3.type = type2;
      w3.count = existing.length;
      ProcessEmitWarning(w3);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type2, listener) {
  return _addListener(this, type2, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type2, listener) {
  return _addListener(this, type2, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type2, listener) {
  var state = { fired: false, wrapFn: void 0, target, type: type2, listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type2, listener) {
  checkListener(listener);
  this.on(type2, _onceWrap(this, type2, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type2, listener) {
  checkListener(listener);
  this.prependListener(type2, _onceWrap(this, type2, listener));
  return this;
};
EventEmitter.prototype.removeListener = function removeListener(type2, listener) {
  var list, events2, position, i2, originalListener;
  checkListener(listener);
  events2 = this._events;
  if (events2 === void 0)
    return this;
  list = events2[type2];
  if (list === void 0)
    return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0)
      this._events = /* @__PURE__ */ Object.create(null);
    else {
      delete events2[type2];
      if (events2.removeListener)
        this.emit("removeListener", type2, list.listener || listener);
    }
  } else if (typeof list !== "function") {
    position = -1;
    for (i2 = list.length - 1; i2 >= 0; i2--) {
      if (list[i2] === listener || list[i2].listener === listener) {
        originalListener = list[i2].listener;
        position = i2;
        break;
      }
    }
    if (position < 0)
      return this;
    if (position === 0)
      list.shift();
    else {
      spliceOne(list, position);
    }
    if (list.length === 1)
      events2[type2] = list[0];
    if (events2.removeListener !== void 0)
      this.emit("removeListener", type2, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type2) {
  var listeners2, events2, i2;
  events2 = this._events;
  if (events2 === void 0)
    return this;
  if (events2.removeListener === void 0) {
    if (arguments.length === 0) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    } else if (events2[type2] !== void 0) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else
        delete events2[type2];
    }
    return this;
  }
  if (arguments.length === 0) {
    var keys2 = Object.keys(events2);
    var key;
    for (i2 = 0; i2 < keys2.length; ++i2) {
      key = keys2[i2];
      if (key === "removeListener")
        continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners("removeListener");
    this._events = /* @__PURE__ */ Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners2 = events2[type2];
  if (typeof listeners2 === "function") {
    this.removeListener(type2, listeners2);
  } else if (listeners2 !== void 0) {
    for (i2 = listeners2.length - 1; i2 >= 0; i2--) {
      this.removeListener(type2, listeners2[i2]);
    }
  }
  return this;
};
function _listeners(target, type2, unwrap) {
  var events2 = target._events;
  if (events2 === void 0)
    return [];
  var evlistener = events2[type2];
  if (evlistener === void 0)
    return [];
  if (typeof evlistener === "function")
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type2) {
  return _listeners(this, type2, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type2) {
  return _listeners(this, type2, false);
};
EventEmitter.listenerCount = function(emitter2, type2) {
  if (typeof emitter2.listenerCount === "function") {
    return emitter2.listenerCount(type2);
  } else {
    return listenerCount.call(emitter2, type2);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type2) {
  var events2 = this._events;
  if (events2 !== void 0) {
    var evlistener = events2[type2];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener !== void 0) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n3) {
  var copy = new Array(n3);
  for (var i2 = 0; i2 < n3; ++i2)
    copy[i2] = arr[i2];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i2 = 0; i2 < ret.length; ++i2) {
    ret[i2] = arr[i2].listener || arr[i2];
  }
  return ret;
}
function once2(emitter2, name2) {
  return new Promise(function(resolve, reject) {
    function errorListener(err) {
      emitter2.removeListener(name2, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter2.removeListener === "function") {
        emitter2.removeListener("error", errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener(emitter2, name2, resolver, { once: true });
    if (name2 !== "error") {
      addErrorHandlerIfEventEmitter(emitter2, errorListener, { once: true });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter2, handler, flags) {
  if (typeof emitter2.on === "function") {
    eventTargetAgnosticAddListener(emitter2, "error", handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter2, name2, listener, flags) {
  if (typeof emitter2.on === "function") {
    if (flags.once) {
      emitter2.once(name2, listener);
    } else {
      emitter2.on(name2, listener);
    }
  } else if (typeof emitter2.addEventListener === "function") {
    emitter2.addEventListener(name2, function wrapListener(arg) {
      if (flags.once) {
        emitter2.removeEventListener(name2, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter2);
  }
}
var eventsExports = events.exports;
const EventEmitter$1 = /* @__PURE__ */ getDefaultExportFromCjs(eventsExports);
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type2 = typeof value;
  return value === null || type2 !== "object" && type2 !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base642 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base642;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function defineDriver(factory) {
  return factory;
}
const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch$2(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys2 = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p3) => key.startsWith(p3)));
        allKeys.push(...keys2);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p3) => !p3.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter((key) => key.startsWith(base3) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m2) => {
          if (m2.driver.clear) {
            return asyncCall(m2.driver.clear, m2.relativeBase, opts);
          }
          if (m2.driver.removeItem) {
            const keys2 = await m2.driver.getKeys(m2.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m2.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a3, b3) => b3.length - a3.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch$2(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m2 = getMount(key);
      return {
        driver: m2.driver,
        base: m2.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m2) => ({
        driver: m2.driver,
        base: m2.mountpoint
      }));
    }
  };
  return storage;
}
function watch$2(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}
const JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}
const x$1 = "idb-keyval";
var z$2 = (i2 = {}) => {
  const t2 = i2.base && i2.base.length > 0 ? `${i2.base}:` : "", e = (s2) => t2 + s2;
  let n3;
  return i2.dbName && i2.storeName && (n3 = createStore(i2.dbName, i2.storeName)), { name: x$1, options: i2, async hasItem(s2) {
    return !(typeof await get(e(s2), n3) > "u");
  }, async getItem(s2) {
    return await get(e(s2), n3) ?? null;
  }, setItem(s2, a3) {
    return set(e(s2), a3, n3);
  }, removeItem(s2) {
    return del(e(s2), n3);
  }, getKeys() {
    return keys(n3);
  }, clear() {
    return clear(n3);
  } };
};
const D$3 = "WALLET_CONNECT_V2_INDEXED_DB", E$1 = "keyvaluestorage";
let _$2 = class _ {
  constructor() {
    this.indexedDb = createStorage({ driver: z$2({ dbName: D$3, storeName: E$1 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t2) => [t2.key, t2.value]);
  }
  async getItem(t2) {
    const e = await this.indexedDb.getItem(t2);
    if (e !== null)
      return e;
  }
  async setItem(t2, e) {
    await this.indexedDb.setItem(t2, safeJsonStringify(e));
  }
  async removeItem(t2) {
    await this.indexedDb.removeItem(t2);
  }
};
var l$1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c = { exports: {} };
(function() {
  let i2;
  function t2() {
  }
  i2 = t2, i2.prototype.getItem = function(e) {
    return this.hasOwnProperty(e) ? String(this[e]) : null;
  }, i2.prototype.setItem = function(e, n3) {
    this[e] = String(n3);
  }, i2.prototype.removeItem = function(e) {
    delete this[e];
  }, i2.prototype.clear = function() {
    const e = this;
    Object.keys(e).forEach(function(n3) {
      e[n3] = void 0, delete e[n3];
    });
  }, i2.prototype.key = function(e) {
    return e = e || 0, Object.keys(this)[e];
  }, i2.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l$1 < "u" && l$1.localStorage ? c.exports = l$1.localStorage : typeof window < "u" && window.localStorage ? c.exports = window.localStorage : c.exports = new t2();
})();
function k$1(i2) {
  var t2;
  return [i2[0], safeJsonParse((t2 = i2[1]) != null ? t2 : "")];
}
class K {
  constructor() {
    this.localStorage = c.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k$1);
  }
  async getItem(t2) {
    const e = this.localStorage.getItem(t2);
    if (e !== null)
      return safeJsonParse(e);
  }
  async setItem(t2, e) {
    this.localStorage.setItem(t2, safeJsonStringify(e));
  }
  async removeItem(t2) {
    this.localStorage.removeItem(t2);
  }
}
const N$2 = "wc_storage_version", y$2 = 1, O$2 = async (i2, t2, e) => {
  const n3 = N$2, s2 = await t2.getItem(n3);
  if (s2 && s2 >= y$2) {
    e(t2);
    return;
  }
  const a3 = await i2.getKeys();
  if (!a3.length) {
    e(t2);
    return;
  }
  const m2 = [];
  for (; a3.length; ) {
    const r2 = a3.shift();
    if (!r2)
      continue;
    const o2 = r2.toLowerCase();
    if (o2.includes("wc@") || o2.includes("walletconnect") || o2.includes("wc_") || o2.includes("wallet_connect")) {
      const f2 = await i2.getItem(r2);
      await t2.setItem(r2, f2), m2.push(r2);
    }
  }
  await t2.setItem(n3, y$2), e(t2), j$2(i2, m2);
}, j$2 = async (i2, t2) => {
  t2.length && t2.forEach(async (e) => {
    await i2.removeItem(e);
  });
};
let h$3 = class h {
  constructor() {
    this.initialized = false, this.setInitialized = (e) => {
      this.storage = e, this.initialized = true;
    };
    const t2 = new K();
    this.storage = t2;
    try {
      const e = new _$2();
      O$2(t2, e, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t2) {
    return await this.initialize(), this.storage.getItem(t2);
  }
  async setItem(t2, e) {
    return await this.initialize(), this.storage.setItem(t2, e);
  }
  async removeItem(t2) {
    return await this.initialize(), this.storage.removeItem(t2);
  }
  async initialize() {
    this.initialized || await new Promise((t2) => {
      const e = setInterval(() => {
        this.initialized && (clearInterval(e), t2());
      }, 20);
    });
  }
};
var cjs$5 = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d3, b3) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
    d4.__proto__ = b4;
  } || function(d4, b4) {
    for (var p3 in b4)
      if (b4.hasOwnProperty(p3))
        d4[p3] = b4[p3];
  };
  return extendStatics(d3, b3);
};
function __extends(d3, b3) {
  extendStatics(d3, b3);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
      s2 = arguments[i2];
      for (var p3 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p3))
          t2[p3] = s2[p3];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e) {
  var t2 = {};
  for (var p3 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p3) && e.indexOf(p3) < 0)
      t2[p3] = s2[p3];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p3 = Object.getOwnPropertySymbols(s2); i2 < p3.length; i2++) {
      if (e.indexOf(p3[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p3[i2]))
        t2[p3[i2]] = s2[p3[i2]];
    }
  return t2;
}
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d3 = decorators[i2])
        r2 = (c2 < 3 ? d3(r2) : c2 > 3 ? d3(target, key, r2) : d3(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y3, t2, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n3) {
    return function(v3) {
      return step([n3, v3]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f2 = 1, y3 && (t2 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t2 = y3["return"]) && t2.call(y3), 0) : y3.next) && !(t2 = t2.call(y3, op[1])).done)
          return t2;
        if (y3 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t2 = _3.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t2[1]) {
              _3.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _3.label < t2[2]) {
              _3.label = t2[2];
              _3.ops.push(op);
              break;
            }
            if (t2[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y3 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o2, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o2[k22] = m2[k2];
}
function __exportStar(m2, exports2) {
  for (var p3 in m2)
    if (p3 !== "default" && !exports2.hasOwnProperty(p3))
      exports2[p3] = m2[p3];
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o2, n3) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar2 = [], e;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r2 = i2.next()).done)
      ar2.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read(arguments[i2]));
  return ar2;
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
    for (var a3 = arguments[i2], j2 = 0, jl = a3.length; j2 < jl; j2++, k2++)
      r2[k2] = a3[j2];
  return r2;
}
function __await(v3) {
  return this instanceof __await ? (this.v = v3, this) : new __await(v3);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n3) {
    if (g3[n3])
      i2[n3] = function(v3) {
        return new Promise(function(a3, b3) {
          q2.push([n3, v3, a3, b3]) > 1 || resume(n3, v3);
        });
      };
  }
  function resume(n3, v3) {
    try {
      step(g3[n3](v3));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v3) {
    if (f2(v3), q2.shift(), q2.length)
      resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o2) {
  var i2, p3;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n3, f2) {
    i2[n3] = o2[n3] ? function(v3) {
      return (p3 = !p3) ? { value: __await(o2[n3](v3)), done: n3 === "return" } : f2 ? f2(v3) : v3;
    } : f2;
  }
}
function __asyncValues(o2) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o2[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n3) {
    i2[n3] = o2[n3] && function(v3) {
      return new Promise(function(resolve, reject) {
        v3 = o2[n3](v3), settle(resolve, reject, v3.done, v3.value);
      });
    };
  }
  function settle(resolve, reject, d3, v3) {
    Promise.resolve(v3).then(function(v4) {
      resolve({ value: v4, done: d3 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (Object.hasOwnProperty.call(mod, k2))
        result[k2] = mod[k2];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
const tslib_es6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __read,
  __rest,
  __spread,
  __spreadArrays,
  __values
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$2 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6);
var heartbeat$2 = {};
var cjs$4 = {};
var utils$1 = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay)
    return delay;
  hasRequiredDelay = 1;
  Object.defineProperty(delay, "__esModule", { value: true });
  delay.delay = void 0;
  function delay$1(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  delay.delay = delay$1;
  return delay;
}
var convert = {};
var constants$2 = {};
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc)
    return misc;
  hasRequiredMisc = 1;
  Object.defineProperty(misc, "__esModule", { value: true });
  misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
  misc.ONE_HUNDRED = 100;
  misc.ONE_THOUSAND = 1e3;
  return misc;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime)
    return time;
  hasRequiredTime = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ONE_YEAR = exports2.FOUR_WEEKS = exports2.THREE_WEEKS = exports2.TWO_WEEKS = exports2.ONE_WEEK = exports2.THIRTY_DAYS = exports2.SEVEN_DAYS = exports2.FIVE_DAYS = exports2.THREE_DAYS = exports2.ONE_DAY = exports2.TWENTY_FOUR_HOURS = exports2.TWELVE_HOURS = exports2.SIX_HOURS = exports2.THREE_HOURS = exports2.ONE_HOUR = exports2.SIXTY_MINUTES = exports2.THIRTY_MINUTES = exports2.TEN_MINUTES = exports2.FIVE_MINUTES = exports2.ONE_MINUTE = exports2.SIXTY_SECONDS = exports2.THIRTY_SECONDS = exports2.TEN_SECONDS = exports2.FIVE_SECONDS = exports2.ONE_SECOND = void 0;
    exports2.ONE_SECOND = 1;
    exports2.FIVE_SECONDS = 5;
    exports2.TEN_SECONDS = 10;
    exports2.THIRTY_SECONDS = 30;
    exports2.SIXTY_SECONDS = 60;
    exports2.ONE_MINUTE = exports2.SIXTY_SECONDS;
    exports2.FIVE_MINUTES = exports2.ONE_MINUTE * 5;
    exports2.TEN_MINUTES = exports2.ONE_MINUTE * 10;
    exports2.THIRTY_MINUTES = exports2.ONE_MINUTE * 30;
    exports2.SIXTY_MINUTES = exports2.ONE_MINUTE * 60;
    exports2.ONE_HOUR = exports2.SIXTY_MINUTES;
    exports2.THREE_HOURS = exports2.ONE_HOUR * 3;
    exports2.SIX_HOURS = exports2.ONE_HOUR * 6;
    exports2.TWELVE_HOURS = exports2.ONE_HOUR * 12;
    exports2.TWENTY_FOUR_HOURS = exports2.ONE_HOUR * 24;
    exports2.ONE_DAY = exports2.TWENTY_FOUR_HOURS;
    exports2.THREE_DAYS = exports2.ONE_DAY * 3;
    exports2.FIVE_DAYS = exports2.ONE_DAY * 5;
    exports2.SEVEN_DAYS = exports2.ONE_DAY * 7;
    exports2.THIRTY_DAYS = exports2.ONE_DAY * 30;
    exports2.ONE_WEEK = exports2.SEVEN_DAYS;
    exports2.TWO_WEEKS = exports2.ONE_WEEK * 2;
    exports2.THREE_WEEKS = exports2.ONE_WEEK * 3;
    exports2.FOUR_WEEKS = exports2.ONE_WEEK * 4;
    exports2.ONE_YEAR = exports2.ONE_DAY * 365;
  })(time);
  return time;
}
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2)
    return constants$2;
  hasRequiredConstants$2 = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireMisc(), exports2);
    tslib_1.__exportStar(requireTime(), exports2);
  })(constants$2);
  return constants$2;
}
var hasRequiredConvert;
function requireConvert() {
  if (hasRequiredConvert)
    return convert;
  hasRequiredConvert = 1;
  Object.defineProperty(convert, "__esModule", { value: true });
  convert.fromMiliseconds = convert.toMiliseconds = void 0;
  const constants_1 = requireConstants$2();
  function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
  }
  convert.toMiliseconds = toMiliseconds;
  function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
  }
  convert.fromMiliseconds = fromMiliseconds;
  return convert;
}
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1)
    return utils$1;
  hasRequiredUtils$1 = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireDelay(), exports2);
    tslib_1.__exportStar(requireConvert(), exports2);
  })(utils$1);
  return utils$1;
}
var watch$1 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1)
    return watch$1;
  hasRequiredWatch$1 = 1;
  Object.defineProperty(watch$1, "__esModule", { value: true });
  watch$1.Watch = void 0;
  class Watch {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(label) {
      if (this.timestamps.has(label)) {
        throw new Error(`Watch already started for label: ${label}`);
      }
      this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
      const timestamp = this.get(label);
      if (typeof timestamp.elapsed !== "undefined") {
        throw new Error(`Watch already stopped for label: ${label}`);
      }
      const elapsed = Date.now() - timestamp.started;
      this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
      const timestamp = this.timestamps.get(label);
      if (typeof timestamp === "undefined") {
        throw new Error(`No timestamp found for label: ${label}`);
      }
      return timestamp;
    }
    elapsed(label) {
      const timestamp = this.get(label);
      const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
      return elapsed;
    }
  }
  watch$1.Watch = Watch;
  watch$1.default = Watch;
  return watch$1;
}
var types$2 = {};
var watch = {};
var hasRequiredWatch;
function requireWatch() {
  if (hasRequiredWatch)
    return watch;
  hasRequiredWatch = 1;
  Object.defineProperty(watch, "__esModule", { value: true });
  watch.IWatch = void 0;
  class IWatch {
  }
  watch.IWatch = IWatch;
  return watch;
}
var hasRequiredTypes$1;
function requireTypes$1() {
  if (hasRequiredTypes$1)
    return types$2;
  hasRequiredTypes$1 = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireWatch(), exports2);
  })(types$2);
  return types$2;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireUtils$1(), exports2);
  tslib_1.__exportStar(requireWatch$1(), exports2);
  tslib_1.__exportStar(requireTypes$1(), exports2);
  tslib_1.__exportStar(requireConstants$2(), exports2);
})(cjs$4);
var types$1 = {};
var heartbeat$1 = {};
let IEvents$1 = class IEvents {
};
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: IEvents$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(esm);
var hasRequiredHeartbeat$2;
function requireHeartbeat$2() {
  if (hasRequiredHeartbeat$2)
    return heartbeat$1;
  hasRequiredHeartbeat$2 = 1;
  Object.defineProperty(heartbeat$1, "__esModule", { value: true });
  heartbeat$1.IHeartBeat = void 0;
  const events_1 = require$$0$1;
  class IHeartBeat extends events_1.IEvents {
    constructor(opts) {
      super();
    }
  }
  heartbeat$1.IHeartBeat = IHeartBeat;
  return heartbeat$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types$1;
  hasRequiredTypes = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireHeartbeat$2(), exports2);
  })(types$1);
  return types$1;
}
var constants$1 = {};
var heartbeat = {};
var hasRequiredHeartbeat$1;
function requireHeartbeat$1() {
  if (hasRequiredHeartbeat$1)
    return heartbeat;
  hasRequiredHeartbeat$1 = 1;
  Object.defineProperty(heartbeat, "__esModule", { value: true });
  heartbeat.HEARTBEAT_EVENTS = heartbeat.HEARTBEAT_INTERVAL = void 0;
  const time_1 = cjs$4;
  heartbeat.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
  heartbeat.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  };
  return heartbeat;
}
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1)
    return constants$1;
  hasRequiredConstants$1 = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireHeartbeat$1(), exports2);
  })(constants$1);
  return constants$1;
}
var hasRequiredHeartbeat;
function requireHeartbeat() {
  if (hasRequiredHeartbeat)
    return heartbeat$2;
  hasRequiredHeartbeat = 1;
  Object.defineProperty(heartbeat$2, "__esModule", { value: true });
  heartbeat$2.HeartBeat = void 0;
  const tslib_1 = require$$0$2;
  const events_1 = eventsExports;
  const time_1 = cjs$4;
  const types_1 = requireTypes();
  const constants_1 = requireConstants$1();
  class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
      super(opts);
      this.events = new events_1.EventEmitter();
      this.interval = constants_1.HEARTBEAT_INTERVAL;
      this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const heartbeat2 = new HeartBeat(opts);
        yield heartbeat2.init();
        return heartbeat2;
      });
    }
    init() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(event, listener) {
      this.events.on(event, listener);
    }
    once(event, listener) {
      this.events.once(event, listener);
    }
    off(event, listener) {
      this.events.off(event, listener);
    }
    removeListener(event, listener) {
      this.events.removeListener(event, listener);
    }
    initialize() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
  }
  heartbeat$2.HeartBeat = HeartBeat;
  return heartbeat$2;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireHeartbeat(), exports2);
  tslib_1.__exportStar(requireTypes(), exports2);
  tslib_1.__exportStar(requireConstants$1(), exports2);
})(cjs$5);
var cjs$3 = {};
var quickFormatUnescaped;
var hasRequiredQuickFormatUnescaped;
function requireQuickFormatUnescaped() {
  if (hasRequiredQuickFormatUnescaped)
    return quickFormatUnescaped;
  hasRequiredQuickFormatUnescaped = 1;
  function tryStringify(o2) {
    try {
      return JSON.stringify(o2);
    } catch (e) {
      return '"[Circular]"';
    }
  }
  quickFormatUnescaped = format;
  function format(f2, args, opts) {
    var ss2 = opts && opts.stringify || tryStringify;
    var offset = 1;
    if (typeof f2 === "object" && f2 !== null) {
      var len = args.length + offset;
      if (len === 1)
        return f2;
      var objects = new Array(len);
      objects[0] = ss2(f2);
      for (var index = 1; index < len; index++) {
        objects[index] = ss2(args[index]);
      }
      return objects.join(" ");
    }
    if (typeof f2 !== "string") {
      return f2;
    }
    var argLen = args.length;
    if (argLen === 0)
      return f2;
    var str = "";
    var a3 = 1 - offset;
    var lastPos = -1;
    var flen = f2 && f2.length || 0;
    for (var i2 = 0; i2 < flen; ) {
      if (f2.charCodeAt(i2) === 37 && i2 + 1 < flen) {
        lastPos = lastPos > -1 ? lastPos : 0;
        switch (f2.charCodeAt(i2 + 1)) {
          case 100:
          case 102:
            if (a3 >= argLen)
              break;
            if (args[a3] == null)
              break;
            if (lastPos < i2)
              str += f2.slice(lastPos, i2);
            str += Number(args[a3]);
            lastPos = i2 + 2;
            i2++;
            break;
          case 105:
            if (a3 >= argLen)
              break;
            if (args[a3] == null)
              break;
            if (lastPos < i2)
              str += f2.slice(lastPos, i2);
            str += Math.floor(Number(args[a3]));
            lastPos = i2 + 2;
            i2++;
            break;
          case 79:
          case 111:
          case 106:
            if (a3 >= argLen)
              break;
            if (args[a3] === void 0)
              break;
            if (lastPos < i2)
              str += f2.slice(lastPos, i2);
            var type2 = typeof args[a3];
            if (type2 === "string") {
              str += "'" + args[a3] + "'";
              lastPos = i2 + 2;
              i2++;
              break;
            }
            if (type2 === "function") {
              str += args[a3].name || "<anonymous>";
              lastPos = i2 + 2;
              i2++;
              break;
            }
            str += ss2(args[a3]);
            lastPos = i2 + 2;
            i2++;
            break;
          case 115:
            if (a3 >= argLen)
              break;
            if (lastPos < i2)
              str += f2.slice(lastPos, i2);
            str += String(args[a3]);
            lastPos = i2 + 2;
            i2++;
            break;
          case 37:
            if (lastPos < i2)
              str += f2.slice(lastPos, i2);
            str += "%";
            lastPos = i2 + 2;
            i2++;
            a3--;
            break;
        }
        ++a3;
      }
      ++i2;
    }
    if (lastPos === -1)
      return f2;
    else if (lastPos < flen) {
      str += f2.slice(lastPos);
    }
    return str;
  }
  return quickFormatUnescaped;
}
var browser$4;
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser$4;
  hasRequiredBrowser = 1;
  const format = requireQuickFormatUnescaped();
  browser$4 = pino;
  const _console = pfGlobalThisOrFallback().console || {};
  const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue
  };
  function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
      const hasToFilter = serialize.filter(function(k2) {
        return k2 !== "!stdSerializers.err";
      });
      return hasToFilter;
    } else if (serialize === true) {
      return Object.keys(serializers);
    }
    return false;
  }
  function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit2 = opts.browser.transmit;
    if (transmit2 && typeof transmit2.send !== "function") {
      throw Error("pino: transmit option must have a send function");
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write)
      opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
      stdErrSerialize = false;
    const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
    if (typeof proto === "function") {
      proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    }
    if (opts.enabled === false)
      opts.level = "silent";
    const level = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log)
      logger.log = noop;
    Object.defineProperty(logger, "levelVal", {
      get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
      get: getLevel,
      set: setLevel
    });
    const setOpts = {
      transmit: transmit2,
      serialize,
      asObject: opts.browser.asObject,
      levels,
      timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit2)
      logger._logEvent = createLogEventShape();
    function getLevelVal() {
      return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
      return this._level;
    }
    function setLevel(level2) {
      if (level2 !== "silent" && !this.levels.values[level2]) {
        throw Error("unknown level " + level2);
      }
      this._level = level2;
      set2(setOpts, logger, "error", "log");
      set2(setOpts, logger, "fatal", "error");
      set2(setOpts, logger, "warn", "error");
      set2(setOpts, logger, "info", "log");
      set2(setOpts, logger, "debug", "log");
      set2(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
      if (!bindings) {
        throw new Error("missing bindings for child Pino");
      }
      childOptions = childOptions || {};
      if (serialize && bindings.serializers) {
        childOptions.serializers = bindings.serializers;
      }
      const childOptionsSerializers = childOptions.serializers;
      if (serialize && childOptionsSerializers) {
        var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
        var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
        delete bindings.serializers;
        applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
      }
      function Child(parent) {
        this._childLevel = (parent._childLevel | 0) + 1;
        this.error = bind(parent, bindings, "error");
        this.fatal = bind(parent, bindings, "fatal");
        this.warn = bind(parent, bindings, "warn");
        this.info = bind(parent, bindings, "info");
        this.debug = bind(parent, bindings, "debug");
        this.trace = bind(parent, bindings, "trace");
        if (childSerializers) {
          this.serializers = childSerializers;
          this._serialize = childSerialize;
        }
        if (transmit2) {
          this._logEvent = createLogEventShape(
            [].concat(parent._logEvent.bindings, bindings)
          );
        }
      }
      Child.prototype = this;
      return new Child(this);
    }
    return logger;
  }
  pino.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  };
  pino.stdSerializers = stdSerializers;
  pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
  function set2(opts, logger, level, fallback) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
    wrap(opts, logger, level);
  }
  function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop)
      return;
    logger[level] = /* @__PURE__ */ function(write) {
      return function LOG() {
        const ts2 = opts.timestamp();
        const args = new Array(arguments.length);
        const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
        for (var i2 = 0; i2 < args.length; i2++)
          args[i2] = arguments[i2];
        if (opts.serialize && !opts.asObject) {
          applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
        }
        if (opts.asObject)
          write.call(proto, asObject(this, level, args, ts2));
        else
          write.apply(proto, args);
        if (opts.transmit) {
          const transmitLevel = opts.transmit.level || logger.level;
          const transmitValue = pino.levels.values[transmitLevel];
          const methodValue = pino.levels.values[level];
          if (methodValue < transmitValue)
            return;
          transmit(this, {
            ts: ts2,
            methodLevel: level,
            methodValue,
            transmitLevel,
            transmitValue: pino.levels.values[opts.transmit.level || logger.level],
            send: opts.transmit.send,
            val: logger.levelVal
          }, args);
        }
      };
    }(logger[level]);
  }
  function asObject(logger, level, args, ts2) {
    if (logger._serialize)
      applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o2 = {};
    if (ts2) {
      o2.time = ts2;
    }
    o2.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1)
      lvl = 1;
    if (msg !== null && typeof msg === "object") {
      while (lvl-- && typeof argsCloned[0] === "object") {
        Object.assign(o2, argsCloned.shift());
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
    } else if (typeof msg === "string")
      msg = format(argsCloned.shift(), argsCloned);
    if (msg !== void 0)
      o2.msg = msg;
    return o2;
  }
  function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for (const i2 in args) {
      if (stdErrSerialize && args[i2] instanceof Error) {
        args[i2] = pino.stdSerializers.err(args[i2]);
      } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
        for (const k2 in args[i2]) {
          if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
            args[i2][k2] = serializers[k2](args[i2][k2]);
          }
        }
      }
    }
  }
  function bind(parent, bindings, level) {
    return function() {
      const args = new Array(1 + arguments.length);
      args[0] = bindings;
      for (var i2 = 1; i2 < args.length; i2++) {
        args[i2] = arguments[i2 - 1];
      }
      return parent[level].apply(this, args);
    };
  }
  function transmit(logger, opts, args) {
    const send = opts.send;
    const ts2 = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
    );
    logger._logEvent.ts = ts2;
    logger._logEvent.messages = args.filter(function(arg) {
      return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
  }
  function createLogEventShape(bindings) {
    return {
      ts: 0,
      messages: [],
      bindings: bindings || [],
      level: { label: "", value: 0 }
    };
  }
  function asErrValue(err) {
    const obj = {
      type: err.constructor.name,
      msg: err.message,
      stack: err.stack
    };
    for (const key in err) {
      if (obj[key] === void 0) {
        obj[key] = err[key];
      }
    }
    return obj;
  }
  function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") {
      return opts.timestamp;
    }
    if (opts.timestamp === false) {
      return nullTime;
    }
    return epochTime;
  }
  function mock() {
    return {};
  }
  function passthrough(a3) {
    return a3;
  }
  function noop() {
  }
  function nullTime() {
    return false;
  }
  function epochTime() {
    return Date.now();
  }
  function unixTime() {
    return Math.round(Date.now() / 1e3);
  }
  function isoTime() {
    return new Date(Date.now()).toISOString();
  }
  function pfGlobalThisOrFallback() {
    function defd(o2) {
      return typeof o2 !== "undefined" && o2;
    }
    try {
      if (typeof globalThis !== "undefined")
        return globalThis;
      Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          delete Object.prototype.globalThis;
          return this.globalThis = this;
        },
        configurable: true
      });
      return globalThis;
    } catch (e) {
      return defd(self) || defd(window) || defd(this) || {};
    }
  }
  return browser$4;
}
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  Object.defineProperty(constants, "__esModule", { value: true });
  constants.PINO_CUSTOM_CONTEXT_KEY = constants.PINO_LOGGER_DEFAULTS = void 0;
  constants.PINO_LOGGER_DEFAULTS = {
    level: "info"
  };
  constants.PINO_CUSTOM_CONTEXT_KEY = "custom_context";
  return constants;
}
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, "__esModule", { value: true });
  utils.generateChildLogger = utils.formatChildLoggerContext = utils.getLoggerContext = utils.setBrowserLoggerContext = utils.getBrowserLoggerContext = utils.getDefaultLoggerOptions = void 0;
  const constants_1 = requireConstants();
  function getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
  }
  utils.getDefaultLoggerOptions = getDefaultLoggerOptions;
  function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
  }
  utils.getBrowserLoggerContext = getBrowserLoggerContext;
  function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
  }
  utils.setBrowserLoggerContext = setBrowserLoggerContext;
  function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") {
      context = getBrowserLoggerContext(logger, customContextKey);
    } else {
      context = logger.bindings().context || "";
    }
    return context;
  }
  utils.getLoggerContext = getLoggerContext;
  function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = getLoggerContext(logger, customContextKey);
    const context = parentContext.trim() ? `${parentContext}/${childContext}` : childContext;
    return context;
  }
  utils.formatChildLoggerContext = formatChildLoggerContext;
  function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const context = formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({ context });
    return setBrowserLoggerContext(child, context, customContextKey);
  }
  utils.generateChildLogger = generateChildLogger;
  return utils;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.pino = void 0;
  const tslib_1 = require$$0$2;
  const pino_1 = tslib_1.__importDefault(requireBrowser());
  Object.defineProperty(exports2, "pino", { enumerable: true, get: function() {
    return pino_1.default;
  } });
  tslib_1.__exportStar(requireConstants(), exports2);
  tslib_1.__exportStar(requireUtils(), exports2);
})(cjs$3);
let n$1 = class n extends IEvents$1 {
  constructor(s2) {
    super(), this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
let h$2 = class h2 extends IEvents$1 {
  constructor(s2, t2) {
    super(), this.core = s2, this.logger = t2, this.records = /* @__PURE__ */ new Map();
  }
};
let a$2 = class a {
  constructor(s2, t2) {
    this.logger = s2, this.core = t2;
  }
};
let u$1 = class u extends IEvents$1 {
  constructor(s2, t2) {
    super(), this.relayer = s2, this.logger = t2;
  }
};
let g$4 = class g extends IEvents$1 {
  constructor(s2) {
    super();
  }
};
let p$2 = class p {
  constructor(s2, t2, o2, M2) {
    this.core = s2, this.logger = t2, this.name = o2;
  }
};
class d2 extends IEvents$1 {
  constructor(s2, t2) {
    super(), this.relayer = s2, this.logger = t2;
  }
}
class E extends IEvents$1 {
  constructor(s2, t2) {
    super(), this.core = s2, this.logger = t2;
  }
}
let y$1 = class y {
  constructor(s2, t2) {
    this.projectId = s2, this.logger = t2;
  }
};
let v$1 = class v {
  constructor(s2, t2) {
    this.projectId = s2, this.logger = t2;
  }
};
let b$1 = class b {
  constructor(s2) {
    this.opts = s2, this.protocol = "wc", this.version = 2;
  }
};
let w$4 = class w {
  constructor(s2) {
    this.client = s2;
  }
};
var ed25519 = {};
var random = {};
var system = {};
var browser$3 = {};
Object.defineProperty(browser$3, "__esModule", { value: true });
browser$3.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
    if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
      this._crypto = browserCrypto;
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Browser random byte generator is not available.");
    }
    const out = new Uint8Array(length);
    for (let i2 = 0; i2 < out.length; i2 += QUOTA) {
      this._crypto.getRandomValues(out.subarray(i2, i2 + Math.min(out.length - i2, QUOTA)));
    }
    return out;
  }
}
browser$3.BrowserRandomSource = BrowserRandomSource;
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var node = {};
var wipe$1 = {};
Object.defineProperty(wipe$1, "__esModule", { value: true });
function wipe(array) {
  for (var i2 = 0; i2 < array.length; i2++) {
    array[i2] = 0;
  }
  return array;
}
wipe$1.wipe = wipe;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
Object.defineProperty(node, "__esModule", { value: true });
node.NodeRandomSource = void 0;
const wipe_1$3 = wipe$1;
class NodeRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    if (typeof commonjsRequire !== "undefined") {
      const nodeCrypto = require$$1;
      if (nodeCrypto && nodeCrypto.randomBytes) {
        this._crypto = nodeCrypto;
        this.isAvailable = true;
        this.isInstantiated = true;
      }
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Node.js random byte generator is not available.");
    }
    let buffer = this._crypto.randomBytes(length);
    if (buffer.length !== length) {
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    }
    const out = new Uint8Array(length);
    for (let i2 = 0; i2 < out.length; i2++) {
      out[i2] = buffer[i2];
    }
    (0, wipe_1$3.wipe)(buffer);
    return out;
  }
}
node.NodeRandomSource = NodeRandomSource;
Object.defineProperty(system, "__esModule", { value: true });
system.SystemRandomSource = void 0;
const browser_1 = browser$3;
const node_1 = node;
class SystemRandomSource {
  constructor() {
    this.isAvailable = false;
    this.name = "";
    this._source = new browser_1.BrowserRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Browser";
      return;
    }
    this._source = new node_1.NodeRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Node";
      return;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    return this._source.randomBytes(length);
  }
}
system.SystemRandomSource = SystemRandomSource;
var binary = {};
var int = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  function imulShim(a3, b3) {
    var ah = a3 >>> 16 & 65535, al = a3 & 65535;
    var bh = b3 >>> 16 & 65535, bl = b3 & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  exports2.mul = Math.imul || imulShim;
  function add(a3, b3) {
    return a3 + b3 | 0;
  }
  exports2.add = add;
  function sub(a3, b3) {
    return a3 - b3 | 0;
  }
  exports2.sub = sub;
  function rotl(x2, n3) {
    return x2 << n3 | x2 >>> 32 - n3;
  }
  exports2.rotl = rotl;
  function rotr(x2, n3) {
    return x2 << 32 - n3 | x2 >>> n3;
  }
  exports2.rotr = rotr;
  function isIntegerShim(n3) {
    return typeof n3 === "number" && isFinite(n3) && Math.floor(n3) === n3;
  }
  exports2.isInteger = Number.isInteger || isIntegerShim;
  exports2.MAX_SAFE_INTEGER = 9007199254740991;
  exports2.isSafeInteger = function(n3) {
    return exports2.isInteger(n3) && (n3 >= -exports2.MAX_SAFE_INTEGER && n3 <= exports2.MAX_SAFE_INTEGER);
  };
})(int);
Object.defineProperty(binary, "__esModule", { value: true });
var int_1 = int;
function readInt16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
binary.readInt16BE = readInt16BE;
function readUint16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
function readInt16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
binary.readInt16LE = readInt16LE;
function readUint16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
function writeUint16BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 8;
  out[offset + 1] = value >>> 0;
  return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
function writeUint16LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
function readInt32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
binary.readInt32BE = readInt32BE;
function readUint32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
function readInt32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
binary.readInt32LE = readInt32LE;
function readUint32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
function writeUint32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 24;
  out[offset + 1] = value >>> 16;
  out[offset + 2] = value >>> 8;
  out[offset + 3] = value >>> 0;
  return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
function writeUint32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  out[offset + 2] = value >>> 16;
  out[offset + 3] = value >>> 24;
  return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
function readInt64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readInt32BE(array, offset);
  var lo = readInt32BE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64BE = readInt64BE;
function readUint64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readUint32BE(array, offset);
  var lo = readUint32BE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64BE = readUint64BE;
function readInt64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readInt32LE(array, offset);
  var hi = readInt32LE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64LE = readInt64LE;
function readUint64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readUint32LE(array, offset);
  var hi = readUint32LE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64LE = readUint64LE;
function writeUint64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32BE(value / 4294967296 >>> 0, out, offset);
  writeUint32BE(value >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
function writeUint64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32LE(value >>> 0, out, offset);
  writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
function readUintBE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintBE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i2 = bitLength / 8 + offset - 1; i2 >= offset; i2--) {
    result += array[i2] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintBE = readUintBE;
function readUintLE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintLE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i2 = offset; i2 < offset + bitLength / 8; i2++) {
    result += array[i2] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintLE = readUintLE;
function writeUintBE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintBE value must be an integer");
  }
  var div = 1;
  for (var i2 = bitLength / 8 + offset - 1; i2 >= offset; i2--) {
    out[i2] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintBE = writeUintBE;
function writeUintLE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintLE value must be an integer");
  }
  var div = 1;
  for (var i2 = offset; i2 < offset + bitLength / 8; i2++) {
    out[i2] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintLE = writeUintLE;
function readFloat32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
function readFloat32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
function readFloat64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
function readFloat64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
function writeFloat32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value);
  return out;
}
binary.writeFloat32BE = writeFloat32BE;
function writeFloat32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value, true);
  return out;
}
binary.writeFloat32LE = writeFloat32LE;
function writeFloat64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value);
  return out;
}
binary.writeFloat64BE = writeFloat64BE;
function writeFloat64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value, true);
  return out;
}
binary.writeFloat64LE = writeFloat64LE;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.randomStringForEntropy = exports2.randomString = exports2.randomUint32 = exports2.randomBytes = exports2.defaultRandomSource = void 0;
  const system_1 = system;
  const binary_12 = binary;
  const wipe_12 = wipe$1;
  exports2.defaultRandomSource = new system_1.SystemRandomSource();
  function randomBytes(length, prng = exports2.defaultRandomSource) {
    return prng.randomBytes(length);
  }
  exports2.randomBytes = randomBytes;
  function randomUint32(prng = exports2.defaultRandomSource) {
    const buf = randomBytes(4, prng);
    const result = (0, binary_12.readUint32LE)(buf);
    (0, wipe_12.wipe)(buf);
    return result;
  }
  exports2.randomUint32 = randomUint32;
  const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomString(length, charset = ALPHANUMERIC, prng = exports2.defaultRandomSource) {
    if (charset.length < 2) {
      throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
      throw new Error("randomString charset is too long");
    }
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while (length > 0) {
      const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
      for (let i2 = 0; i2 < buf.length && length > 0; i2++) {
        const randomByte = buf[i2];
        if (randomByte < maxByte) {
          out += charset.charAt(randomByte % charsLen);
          length--;
        }
      }
      (0, wipe_12.wipe)(buf);
    }
    return out;
  }
  exports2.randomString = randomString;
  function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports2.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
  }
  exports2.randomStringForEntropy = randomStringForEntropy;
})(random);
var sha512 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports2.DIGEST_LENGTH = 64;
  exports2.BLOCK_SIZE = 128;
  var SHA512 = (
    /** @class */
    function() {
      function SHA5122() {
        this.digestLength = exports2.DIGEST_LENGTH;
        this.blockSize = exports2.BLOCK_SIZE;
        this._stateHi = new Int32Array(8);
        this._stateLo = new Int32Array(8);
        this._tempHi = new Int32Array(16);
        this._tempLo = new Int32Array(16);
        this._buffer = new Uint8Array(256);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA5122.prototype._initState = function() {
        this._stateHi[0] = 1779033703;
        this._stateHi[1] = 3144134277;
        this._stateHi[2] = 1013904242;
        this._stateHi[3] = 2773480762;
        this._stateHi[4] = 1359893119;
        this._stateHi[5] = 2600822924;
        this._stateHi[6] = 528734635;
        this._stateHi[7] = 1541459225;
        this._stateLo[0] = 4089235720;
        this._stateLo[1] = 2227873595;
        this._stateLo[2] = 4271175723;
        this._stateLo[3] = 1595750129;
        this._stateLo[4] = 2917565137;
        this._stateLo[5] = 725511199;
        this._stateLo[6] = 4215389547;
        this._stateLo[7] = 327033209;
      };
      SHA5122.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._tempHi);
        wipe_12.wipe(this._tempLo);
        this.reset();
      };
      SHA5122.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < exports2.BLOCK_SIZE && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA5122.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 128 < 112 ? 128 : 256;
          this._buffer[left] = 128;
          for (var i2 = left + 1; i2 < padLength - 8; i2++) {
            this._buffer[i2] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i2 = 0; i2 < this.digestLength / 8; i2++) {
          binary_12.writeUint32BE(this._stateHi[i2], out, i2 * 8);
          binary_12.writeUint32BE(this._stateLo[i2], out, i2 * 8 + 4);
        }
        return this;
      };
      SHA5122.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA5122.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA5122.prototype.restoreState = function(savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.stateHi);
        wipe_12.wipe(savedState.stateLo);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA5122;
    }()
  );
  exports2.SHA512 = SHA512;
  var K2 = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function hashBlocks(wh, wl, hh, hl, m2, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h4, l2;
    var th, tl;
    var a3, b3, c2, d3;
    while (len >= 128) {
      for (var i2 = 0; i2 < 16; i2++) {
        var j2 = 8 * i2 + pos;
        wh[i2] = binary_12.readUint32BE(m2, j2);
        wl[i2] = binary_12.readUint32BE(m2, j2 + 4);
      }
      for (var i2 = 0; i2 < 80; i2++) {
        var bh0 = ah0;
        var bh1 = ah1;
        var bh2 = ah2;
        var bh3 = ah3;
        var bh4 = ah4;
        var bh5 = ah5;
        var bh6 = ah6;
        var bh7 = ah7;
        var bl0 = al0;
        var bl1 = al1;
        var bl2 = al2;
        var bl3 = al3;
        var bl4 = al4;
        var bl5 = al5;
        var bl6 = al6;
        var bl7 = al7;
        h4 = ah7;
        l2 = al7;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        h4 = ah4 & ah5 ^ ~ah4 & ah6;
        l2 = al4 & al5 ^ ~al4 & al6;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        h4 = K2[i2 * 2];
        l2 = K2[i2 * 2 + 1];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        h4 = wh[i2 % 16];
        l2 = wl[i2 % 16];
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d3 += c2 >>> 16;
        th = c2 & 65535 | d3 << 16;
        tl = a3 & 65535 | b3 << 16;
        h4 = th;
        l2 = tl;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        h4 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d3 += c2 >>> 16;
        bh7 = c2 & 65535 | d3 << 16;
        bl7 = a3 & 65535 | b3 << 16;
        h4 = bh3;
        l2 = bl3;
        a3 = l2 & 65535;
        b3 = l2 >>> 16;
        c2 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = th;
        l2 = tl;
        a3 += l2 & 65535;
        b3 += l2 >>> 16;
        c2 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c2 += b3 >>> 16;
        d3 += c2 >>> 16;
        bh3 = c2 & 65535 | d3 << 16;
        bl3 = a3 & 65535 | b3 << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i2 % 16 === 15) {
          for (var j2 = 0; j2 < 16; j2++) {
            h4 = wh[j2];
            l2 = wl[j2];
            a3 = l2 & 65535;
            b3 = l2 >>> 16;
            c2 = h4 & 65535;
            d3 = h4 >>> 16;
            h4 = wh[(j2 + 9) % 16];
            l2 = wl[(j2 + 9) % 16];
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d3 += h4 >>> 16;
            th = wh[(j2 + 1) % 16];
            tl = wl[(j2 + 1) % 16];
            h4 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
            l2 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d3 += h4 >>> 16;
            th = wh[(j2 + 14) % 16];
            tl = wl[(j2 + 14) % 16];
            h4 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
            l2 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
            a3 += l2 & 65535;
            b3 += l2 >>> 16;
            c2 += h4 & 65535;
            d3 += h4 >>> 16;
            b3 += a3 >>> 16;
            c2 += b3 >>> 16;
            d3 += c2 >>> 16;
            wh[j2] = c2 & 65535 | d3 << 16;
            wl[j2] = a3 & 65535 | b3 << 16;
          }
        }
      }
      h4 = ah0;
      l2 = al0;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[0];
      l2 = hl[0];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[0] = ah0 = c2 & 65535 | d3 << 16;
      hl[0] = al0 = a3 & 65535 | b3 << 16;
      h4 = ah1;
      l2 = al1;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[1];
      l2 = hl[1];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[1] = ah1 = c2 & 65535 | d3 << 16;
      hl[1] = al1 = a3 & 65535 | b3 << 16;
      h4 = ah2;
      l2 = al2;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[2];
      l2 = hl[2];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[2] = ah2 = c2 & 65535 | d3 << 16;
      hl[2] = al2 = a3 & 65535 | b3 << 16;
      h4 = ah3;
      l2 = al3;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[3];
      l2 = hl[3];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[3] = ah3 = c2 & 65535 | d3 << 16;
      hl[3] = al3 = a3 & 65535 | b3 << 16;
      h4 = ah4;
      l2 = al4;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[4];
      l2 = hl[4];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[4] = ah4 = c2 & 65535 | d3 << 16;
      hl[4] = al4 = a3 & 65535 | b3 << 16;
      h4 = ah5;
      l2 = al5;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[5];
      l2 = hl[5];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[5] = ah5 = c2 & 65535 | d3 << 16;
      hl[5] = al5 = a3 & 65535 | b3 << 16;
      h4 = ah6;
      l2 = al6;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[6];
      l2 = hl[6];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[6] = ah6 = c2 & 65535 | d3 << 16;
      hl[6] = al6 = a3 & 65535 | b3 << 16;
      h4 = ah7;
      l2 = al7;
      a3 = l2 & 65535;
      b3 = l2 >>> 16;
      c2 = h4 & 65535;
      d3 = h4 >>> 16;
      h4 = hh[7];
      l2 = hl[7];
      a3 += l2 & 65535;
      b3 += l2 >>> 16;
      c2 += h4 & 65535;
      d3 += h4 >>> 16;
      b3 += a3 >>> 16;
      c2 += b3 >>> 16;
      d3 += c2 >>> 16;
      hh[7] = ah7 = c2 & 65535 | d3 << 16;
      hl[7] = al7 = a3 & 65535 | b3 << 16;
      pos += 128;
      len -= 128;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA512();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports2.hash = hash2;
})(sha512);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.convertSecretKeyToX25519 = exports2.convertPublicKeyToX25519 = exports2.verify = exports2.sign = exports2.extractPublicKeyFromSecretKey = exports2.generateKeyPair = exports2.generateKeyPairFromSeed = exports2.SEED_LENGTH = exports2.SECRET_KEY_LENGTH = exports2.PUBLIC_KEY_LENGTH = exports2.SIGNATURE_LENGTH = void 0;
  const random_1 = random;
  const sha512_1 = sha512;
  const wipe_12 = wipe$1;
  exports2.SIGNATURE_LENGTH = 64;
  exports2.PUBLIC_KEY_LENGTH = 32;
  exports2.SECRET_KEY_LENGTH = 64;
  exports2.SEED_LENGTH = 32;
  function gf(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i2 = 0; i2 < init.length; i2++) {
        r2[i2] = init[i2];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const gf0 = gf();
  const gf1 = gf([1]);
  const D2 = gf([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]);
  const D22 = gf([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]);
  const X2 = gf([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]);
  const Y2 = gf([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]);
  const I2 = gf([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function set25519(r2, a3) {
    for (let i2 = 0; i2 < 16; i2++) {
      r2[i2] = a3[i2] | 0;
    }
  }
  function car25519(o2) {
    let c2 = 1;
    for (let i2 = 0; i2 < 16; i2++) {
      let v3 = o2[i2] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o2[i2] = v3 - c2 * 65536;
    }
    o2[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i2 = 0; i2 < 16; i2++) {
      const t2 = c2 & (p3[i2] ^ q2[i2]);
      p3[i2] ^= t2;
      q2[i2] ^= t2;
    }
  }
  function pack25519(o2, n3) {
    const m2 = gf();
    const t2 = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      t2[i2] = n3[i2];
    }
    car25519(t2);
    car25519(t2);
    car25519(t2);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t2[0] - 65517;
      for (let i2 = 1; i2 < 15; i2++) {
        m2[i2] = t2[i2] - 65535 - (m2[i2 - 1] >> 16 & 1);
        m2[i2 - 1] &= 65535;
      }
      m2[15] = t2[15] - 32767 - (m2[14] >> 16 & 1);
      const b3 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t2, m2, 1 - b3);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o2[2 * i2] = t2[i2] & 255;
      o2[2 * i2 + 1] = t2[i2] >> 8;
    }
  }
  function verify32(x2, y3) {
    let d3 = 0;
    for (let i2 = 0; i2 < 32; i2++) {
      d3 |= x2[i2] ^ y3[i2];
    }
    return (1 & d3 - 1 >>> 8) - 1;
  }
  function neq25519(a3, b3) {
    const c2 = new Uint8Array(32);
    const d3 = new Uint8Array(32);
    pack25519(c2, a3);
    pack25519(d3, b3);
    return verify32(c2, d3);
  }
  function par25519(a3) {
    const d3 = new Uint8Array(32);
    pack25519(d3, a3);
    return d3[0] & 1;
  }
  function unpack25519(o2, n3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = n3[2 * i2] + (n3[2 * i2 + 1] << 8);
    }
    o2[15] &= 32767;
  }
  function add(o2, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = a3[i2] + b3[i2];
    }
  }
  function sub(o2, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = a3[i2] - b3[i2];
    }
  }
  function mul(o2, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b0;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b0;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b0;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b0;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b0;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b0;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b0;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b0;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b0;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b0;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b0;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b0;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b0;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b0;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b0;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b0;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o2[0] = t0;
    o2[1] = t1;
    o2[2] = t2;
    o2[3] = t3;
    o2[4] = t4;
    o2[5] = t5;
    o2[6] = t6;
    o2[7] = t7;
    o2[8] = t8;
    o2[9] = t9;
    o2[10] = t10;
    o2[11] = t11;
    o2[12] = t12;
    o2[13] = t13;
    o2[14] = t14;
    o2[15] = t15;
  }
  function square(o2, a3) {
    mul(o2, a3, a3);
  }
  function inv25519(o2, i2) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i2[a3];
    }
    for (a3 = 253; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 2 && a3 !== 4) {
        mul(c2, c2, i2);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o2[a3] = c2[a3];
    }
  }
  function pow2523(o2, i2) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i2[a3];
    }
    for (a3 = 250; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 1) {
        mul(c2, c2, i2);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o2[a3] = c2[a3];
    }
  }
  function edadd(p3, q2) {
    const a3 = gf(), b3 = gf(), c2 = gf(), d3 = gf(), e = gf(), f2 = gf(), g3 = gf(), h4 = gf(), t2 = gf();
    sub(a3, p3[1], p3[0]);
    sub(t2, q2[1], q2[0]);
    mul(a3, a3, t2);
    add(b3, p3[0], p3[1]);
    add(t2, q2[0], q2[1]);
    mul(b3, b3, t2);
    mul(c2, p3[3], q2[3]);
    mul(c2, c2, D22);
    mul(d3, p3[2], q2[2]);
    add(d3, d3, d3);
    sub(e, b3, a3);
    sub(f2, d3, c2);
    add(g3, d3, c2);
    add(h4, b3, a3);
    mul(p3[0], e, f2);
    mul(p3[1], h4, g3);
    mul(p3[2], g3, f2);
    mul(p3[3], e, h4);
  }
  function cswap(p3, q2, b3) {
    for (let i2 = 0; i2 < 4; i2++) {
      sel25519(p3[i2], q2[i2], b3);
    }
  }
  function pack(r2, p3) {
    const tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p3[2]);
    mul(tx, p3[0], zi);
    mul(ty, p3[1], zi);
    pack25519(r2, ty);
    r2[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p3, q2, s2) {
    set25519(p3[0], gf0);
    set25519(p3[1], gf1);
    set25519(p3[2], gf1);
    set25519(p3[3], gf0);
    for (let i2 = 255; i2 >= 0; --i2) {
      const b3 = s2[i2 / 8 | 0] >> (i2 & 7) & 1;
      cswap(p3, q2, b3);
      edadd(q2, p3);
      edadd(p3, p3);
      cswap(p3, q2, b3);
    }
  }
  function scalarbase(p3, s2) {
    const q2 = [gf(), gf(), gf(), gf()];
    set25519(q2[0], X2);
    set25519(q2[1], Y2);
    set25519(q2[2], gf1);
    mul(q2[3], X2, Y2);
    scalarmult(p3, q2, s2);
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports2.SEED_LENGTH) {
      throw new Error(`ed25519: seed must be ${exports2.SEED_LENGTH} bytes`);
    }
    const d3 = (0, sha512_1.hash)(seed);
    d3[0] &= 248;
    d3[31] &= 127;
    d3[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    scalarbase(p3, d3);
    pack(publicKey, p3);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
      publicKey,
      secretKey
    };
  }
  exports2.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports2.generateKeyPair = generateKeyPair2;
  function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports2.SECRET_KEY_LENGTH) {
      throw new Error(`ed25519: secret key must be ${exports2.SECRET_KEY_LENGTH} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
  }
  exports2.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
  const L2 = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function modL(r2, x2) {
    let carry;
    let i2;
    let j2;
    let k2;
    for (i2 = 63; i2 >= 32; --i2) {
      carry = 0;
      for (j2 = i2 - 32, k2 = i2 - 12; j2 < k2; ++j2) {
        x2[j2] += carry - 16 * x2[i2] * L2[j2 - (i2 - 32)];
        carry = Math.floor((x2[j2] + 128) / 256);
        x2[j2] -= carry * 256;
      }
      x2[j2] += carry;
      x2[i2] = 0;
    }
    carry = 0;
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] += carry - (x2[31] >> 4) * L2[j2];
      carry = x2[j2] >> 8;
      x2[j2] &= 255;
    }
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] -= carry * L2[j2];
    }
    for (i2 = 0; i2 < 32; i2++) {
      x2[i2 + 1] += x2[i2] >> 8;
      r2[i2] = x2[i2] & 255;
    }
  }
  function reduce(r2) {
    const x2 = new Float64Array(64);
    for (let i2 = 0; i2 < 64; i2++) {
      x2[i2] = r2[i2];
    }
    for (let i2 = 0; i2 < 64; i2++) {
      r2[i2] = 0;
    }
    modL(r2, x2);
  }
  function sign(secretKey, message) {
    const x2 = new Float64Array(64);
    const p3 = [gf(), gf(), gf(), gf()];
    const d3 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d3[0] &= 248;
    d3[31] &= 127;
    d3[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d3.subarray(32), 32);
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(32));
    hs2.update(message);
    const r2 = hs2.digest();
    hs2.clean();
    reduce(r2);
    scalarbase(p3, r2);
    pack(signature, p3);
    hs2.reset();
    hs2.update(signature.subarray(0, 32));
    hs2.update(secretKey.subarray(32));
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    for (let i2 = 0; i2 < 32; i2++) {
      x2[i2] = r2[i2];
    }
    for (let i2 = 0; i2 < 32; i2++) {
      for (let j2 = 0; j2 < 32; j2++) {
        x2[i2 + j2] += h4[i2] * d3[j2];
      }
    }
    modL(signature.subarray(32), x2);
    return signature;
  }
  exports2.sign = sign;
  function unpackneg(r2, p3) {
    const t2 = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r2[2], gf1);
    unpack25519(r2[1], p3);
    square(num, r2[1]);
    mul(den, num, D2);
    sub(num, num, r2[2]);
    add(den, r2[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t2, den6, num);
    mul(t2, t2, den);
    pow2523(t2, t2);
    mul(t2, t2, num);
    mul(t2, t2, den);
    mul(t2, t2, den);
    mul(r2[0], t2, den);
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      mul(r2[0], r2[0], I2);
    }
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      return -1;
    }
    if (par25519(r2[0]) === p3[31] >> 7) {
      sub(r2[0], gf0, r2[0]);
    }
    mul(r2[3], r2[0], r2[1]);
    return 0;
  }
  function verify(publicKey, message, signature) {
    const t2 = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    const q2 = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports2.SIGNATURE_LENGTH) {
      throw new Error(`ed25519: signature must be ${exports2.SIGNATURE_LENGTH} bytes`);
    }
    if (unpackneg(q2, publicKey)) {
      return false;
    }
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(0, 32));
    hs2.update(publicKey);
    hs2.update(message);
    const h4 = hs2.digest();
    reduce(h4);
    scalarmult(p3, q2, h4);
    scalarbase(q2, signature.subarray(32));
    edadd(p3, q2);
    pack(t2, p3);
    if (verify32(signature, t2)) {
      return false;
    }
    return true;
  }
  exports2.verify = verify;
  function convertPublicKeyToX25519(publicKey) {
    let q2 = [gf(), gf(), gf(), gf()];
    if (unpackneg(q2, publicKey)) {
      throw new Error("Ed25519: invalid public key");
    }
    let a3 = gf();
    let b3 = gf();
    let y3 = q2[1];
    add(a3, gf1, y3);
    sub(b3, gf1, y3);
    inv25519(b3, b3);
    mul(a3, a3, b3);
    let z3 = new Uint8Array(32);
    pack25519(z3, a3);
    return z3;
  }
  exports2.convertPublicKeyToX25519 = convertPublicKeyToX25519;
  function convertSecretKeyToX25519(secretKey) {
    const d3 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d3[0] &= 248;
    d3[31] &= 127;
    d3[31] |= 64;
    const o2 = new Uint8Array(d3.subarray(0, 32));
    (0, wipe_12.wipe)(d3);
    return o2;
  }
  exports2.convertSecretKeyToX25519 = convertSecretKeyToX25519;
})(ed25519);
const JWT_IRIDIUM_ALG = "EdDSA";
const JWT_IRIDIUM_TYP = "JWT";
const JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const DATA_ENCODING = "utf8";
const DID_DELIMITER = ":";
const DID_PREFIX = "did";
const DID_METHOD = "key";
const MULTICODEC_ED25519_ENCODING = "base58btc";
const MULTICODEC_ED25519_BASE = "z";
const MULTICODEC_ED25519_HEADER = "K36";
const KEY_PAIR_SEED_LENGTH = 32;
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x2 = ALPHABET.charAt(i2);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i3;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i3;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce$1 = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2)) {
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString$1 = (b3) => new TextDecoder().decode(b3);
class Encoder {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$2(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or$2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name: name2, prefix, encode: encode2, decode: decode2 }) => new Codec(name2, prefix, encode2, decode2);
const baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name2);
  return from({
    prefix,
    name: name2,
    encode: encode2,
    decode: (text) => coerce$1(decode2(text))
  });
};
const decode$2 = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i2 = 0; i2 < alphabet2.length; ++i2) {
    codes[alphabet2[i2]] = i2;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end; ++i2) {
    const value = codes[string2[i2]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$1 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$2(input, alphabet2, bitsPerChar, name2);
    }
  });
};
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$1(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p3, c2, i2) => {
  p3[i2] = c2;
  return p3;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p3, c2, i2) => {
  p3[c2.codePointAt(0)] = i2;
  return p3;
}, []);
function encode(data) {
  return data.reduce((p3, c2) => {
    p3 += alphabetBytesToChars[c2];
    return p3;
  }, "");
}
function decode$1(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode,
  decode: decode$1
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
function createCodec(name2, prefix, encode2, decode2) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i2 = 0; i2 < buf.length; i2++) {
    string2 += String.fromCharCode(buf[i2]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i2 = 0; i2 < str.length; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function generateKeyPair(seed = random.randomBytes(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = cjs$4.fromMiliseconds(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}
var chacha20poly1305 = {};
var chacha = {};
Object.defineProperty(chacha, "__esModule", { value: true });
var binary_1 = binary;
var wipe_1$2 = wipe$1;
var ROUNDS = 20;
function core(out, input, key) {
  var j0 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
  var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
  var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
  var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
  var x0 = j0;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i2 = 0; i2 < ROUNDS; i2 += 2) {
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
  binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
  binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
  binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
  binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
  binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
  binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
  binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
  binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
  binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
  binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
  binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
  binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
  binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
  binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
  binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  if (key.length !== 32) {
    throw new Error("ChaCha: key size must be 32 bytes");
  }
  if (dst.length < src2.length) {
    throw new Error("ChaCha: destination is shorter than source");
  }
  var nc;
  var counterLength;
  if (nonceInplaceCounterLength === 0) {
    if (nonce.length !== 8 && nonce.length !== 12) {
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    }
    nc = new Uint8Array(16);
    counterLength = nc.length - nonce.length;
    nc.set(nonce, counterLength);
  } else {
    if (nonce.length !== 16) {
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    }
    nc = nonce;
    counterLength = nonceInplaceCounterLength;
  }
  var block = new Uint8Array(64);
  for (var i2 = 0; i2 < src2.length; i2 += 64) {
    core(block, nc, key);
    for (var j2 = i2; j2 < i2 + 64 && j2 < src2.length; j2++) {
      dst[j2] = src2[j2] ^ block[j2 - i2];
    }
    incrementCounter(nc, 0, counterLength);
  }
  wipe_1$2.wipe(block);
  if (nonceInplaceCounterLength === 0) {
    wipe_1$2.wipe(nc);
  }
  return dst;
}
chacha.streamXOR = streamXOR;
function stream(key, nonce, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  wipe_1$2.wipe(dst);
  return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream;
function incrementCounter(counter, pos, len) {
  var carry = 1;
  while (len--) {
    carry = carry + (counter[pos] & 255) | 0;
    counter[pos] = carry & 255;
    carry >>>= 8;
    pos++;
  }
  if (carry > 0) {
    throw new Error("ChaCha: counter overflow");
  }
}
var poly1305 = {};
var constantTime = {};
Object.defineProperty(constantTime, "__esModule", { value: true });
function select(subject, resultIfOne, resultIfZero) {
  return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
constantTime.select = select;
function lessOrEqual(a3, b3) {
  return (a3 | 0) - (b3 | 0) - 1 >>> 31 & 1;
}
constantTime.lessOrEqual = lessOrEqual;
function compare(a3, b3) {
  if (a3.length !== b3.length) {
    return 0;
  }
  var result = 0;
  for (var i2 = 0; i2 < a3.length; i2++) {
    result |= a3[i2] ^ b3[i2];
  }
  return 1 & result - 1 >>> 8;
}
constantTime.compare = compare;
function equal(a3, b3) {
  if (a3.length === 0 || b3.length === 0) {
    return false;
  }
  return compare(a3, b3) !== 0;
}
constantTime.equal = equal;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var constant_time_12 = constantTime;
  var wipe_12 = wipe$1;
  exports2.DIGEST_LENGTH = 16;
  var Poly1305 = (
    /** @class */
    function() {
      function Poly13052(key) {
        this.digestLength = exports2.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 8191;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this._r[5] = t4 >>> 1 & 8190;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this._r[9] = t7 >>> 5 & 127;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
      }
      Poly13052.prototype._blocks = function(m2, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h22 = this._h[2], h32 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
          var t0 = m2[mpos + 0] | m2[mpos + 1] << 8;
          h0 += t0 & 8191;
          var t1 = m2[mpos + 2] | m2[mpos + 3] << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          var t2 = m2[mpos + 4] | m2[mpos + 5] << 8;
          h22 += (t1 >>> 10 | t2 << 6) & 8191;
          var t3 = m2[mpos + 6] | m2[mpos + 7] << 8;
          h32 += (t2 >>> 7 | t3 << 9) & 8191;
          var t4 = m2[mpos + 8] | m2[mpos + 9] << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          var t5 = m2[mpos + 10] | m2[mpos + 11] << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = m2[mpos + 12] | m2[mpos + 13] << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          var t7 = m2[mpos + 14] | m2[mpos + 15] << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          var c2 = 0;
          var d0 = c2;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h22 * (5 * r8);
          d0 += h32 * (5 * r7);
          d0 += h4 * (5 * r6);
          c2 = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c2 += d0 >>> 13;
          d0 &= 8191;
          var d1 = c2;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h22 * (5 * r9);
          d1 += h32 * (5 * r8);
          d1 += h4 * (5 * r7);
          c2 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c2 += d1 >>> 13;
          d1 &= 8191;
          var d22 = c2;
          d22 += h0 * r2;
          d22 += h1 * r1;
          d22 += h22 * r0;
          d22 += h32 * (5 * r9);
          d22 += h4 * (5 * r8);
          c2 = d22 >>> 13;
          d22 &= 8191;
          d22 += h5 * (5 * r7);
          d22 += h6 * (5 * r6);
          d22 += h7 * (5 * r5);
          d22 += h8 * (5 * r4);
          d22 += h9 * (5 * r3);
          c2 += d22 >>> 13;
          d22 &= 8191;
          var d3 = c2;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h22 * r1;
          d3 += h32 * r0;
          d3 += h4 * (5 * r9);
          c2 = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c2 += d3 >>> 13;
          d3 &= 8191;
          var d4 = c2;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h22 * r2;
          d4 += h32 * r1;
          d4 += h4 * r0;
          c2 = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c2 += d4 >>> 13;
          d4 &= 8191;
          var d5 = c2;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h22 * r3;
          d5 += h32 * r2;
          d5 += h4 * r1;
          c2 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c2 += d5 >>> 13;
          d5 &= 8191;
          var d6 = c2;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h22 * r4;
          d6 += h32 * r3;
          d6 += h4 * r2;
          c2 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c2 += d6 >>> 13;
          d6 &= 8191;
          var d7 = c2;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h22 * r5;
          d7 += h32 * r4;
          d7 += h4 * r3;
          c2 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c2 += d7 >>> 13;
          d7 &= 8191;
          var d8 = c2;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h22 * r6;
          d8 += h32 * r5;
          d8 += h4 * r4;
          c2 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c2 += d8 >>> 13;
          d8 &= 8191;
          var d9 = c2;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h22 * r7;
          d9 += h32 * r6;
          d9 += h4 * r5;
          c2 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c2 += d9 >>> 13;
          d9 &= 8191;
          c2 = (c2 << 2) + c2 | 0;
          c2 = c2 + d0 | 0;
          d0 = c2 & 8191;
          c2 = c2 >>> 13;
          d1 += c2;
          h0 = d0;
          h1 = d1;
          h22 = d22;
          h32 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h22;
        this._h[3] = h32;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
      };
      Poly13052.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) {
          macpos = 0;
        }
        var g3 = new Uint16Array(10);
        var c2;
        var mask;
        var f2;
        var i2;
        if (this._leftover) {
          i2 = this._leftover;
          this._buffer[i2++] = 1;
          for (; i2 < 16; i2++) {
            this._buffer[i2] = 0;
          }
          this._fin = 1;
          this._blocks(this._buffer, 0, 16);
        }
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        for (i2 = 2; i2 < 10; i2++) {
          this._h[i2] += c2;
          c2 = this._h[i2] >>> 13;
          this._h[i2] &= 8191;
        }
        this._h[0] += c2 * 5;
        c2 = this._h[0] >>> 13;
        this._h[0] &= 8191;
        this._h[1] += c2;
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        this._h[2] += c2;
        g3[0] = this._h[0] + 5;
        c2 = g3[0] >>> 13;
        g3[0] &= 8191;
        for (i2 = 1; i2 < 10; i2++) {
          g3[i2] = this._h[i2] + c2;
          c2 = g3[i2] >>> 13;
          g3[i2] &= 8191;
        }
        g3[9] -= 1 << 13;
        mask = (c2 ^ 1) - 1;
        for (i2 = 0; i2 < 10; i2++) {
          g3[i2] &= mask;
        }
        mask = ~mask;
        for (i2 = 0; i2 < 10; i2++) {
          this._h[i2] = this._h[i2] & mask | g3[i2];
        }
        this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
        f2 = this._h[0] + this._pad[0];
        this._h[0] = f2 & 65535;
        for (i2 = 1; i2 < 8; i2++) {
          f2 = (this._h[i2] + this._pad[i2] | 0) + (f2 >>> 16) | 0;
          this._h[i2] = f2 & 65535;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
      };
      Poly13052.prototype.update = function(m2) {
        var mpos = 0;
        var bytes = m2.length;
        var want;
        if (this._leftover) {
          want = 16 - this._leftover;
          if (want > bytes) {
            want = bytes;
          }
          for (var i2 = 0; i2 < want; i2++) {
            this._buffer[this._leftover + i2] = m2[mpos + i2];
          }
          bytes -= want;
          mpos += want;
          this._leftover += want;
          if (this._leftover < 16) {
            return this;
          }
          this._blocks(this._buffer, 0, 16);
          this._leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this._blocks(m2, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (var i2 = 0; i2 < bytes; i2++) {
            this._buffer[this._leftover + i2] = m2[mpos + i2];
          }
          this._leftover += bytes;
        }
        return this;
      };
      Poly13052.prototype.digest = function() {
        if (this._finished) {
          throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
      };
      Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._r);
        wipe_12.wipe(this._h);
        wipe_12.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true;
        return this;
      };
      return Poly13052;
    }()
  );
  exports2.Poly1305 = Poly1305;
  function oneTimeAuth(key, data) {
    var h4 = new Poly1305(key);
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports2.oneTimeAuth = oneTimeAuth;
  function equal2(a3, b3) {
    if (a3.length !== exports2.DIGEST_LENGTH || b3.length !== exports2.DIGEST_LENGTH) {
      return false;
    }
    return constant_time_12.equal(a3, b3);
  }
  exports2.equal = equal2;
})(poly1305);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var chacha_1 = chacha;
  var poly1305_1 = poly1305;
  var wipe_12 = wipe$1;
  var binary_12 = binary;
  var constant_time_12 = constantTime;
  exports2.KEY_LENGTH = 32;
  exports2.NONCE_LENGTH = 12;
  exports2.TAG_LENGTH = 16;
  var ZEROS = new Uint8Array(16);
  var ChaCha20Poly1305 = (
    /** @class */
    function() {
      function ChaCha20Poly13052(key) {
        this.nonceLength = exports2.NONCE_LENGTH;
        this.tagLength = exports2.TAG_LENGTH;
        if (key.length !== exports2.KEY_LENGTH) {
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        this._key = new Uint8Array(key);
      }
      ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        if (sealed.length < this.tagLength) {
          return null;
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        if (!constant_time_12.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
          return null;
        }
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._key);
        return this;
      };
      ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        var h4 = new poly1305_1.Poly1305(authKey);
        if (associatedData) {
          h4.update(associatedData);
          if (associatedData.length % 16 > 0) {
            h4.update(ZEROS.subarray(associatedData.length % 16));
          }
        }
        h4.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
          h4.update(ZEROS.subarray(ciphertext.length % 16));
        }
        var length = new Uint8Array(8);
        if (associatedData) {
          binary_12.writeUint64LE(associatedData.length, length);
        }
        h4.update(length);
        binary_12.writeUint64LE(ciphertext.length, length);
        h4.update(length);
        var tag = h4.digest();
        for (var i2 = 0; i2 < tag.length; i2++) {
          tagOut[i2] = tag[i2];
        }
        h4.clean();
        wipe_12.wipe(tag);
        wipe_12.wipe(length);
      };
      return ChaCha20Poly13052;
    }()
  );
  exports2.ChaCha20Poly1305 = ChaCha20Poly1305;
})(chacha20poly1305);
var hkdf = {};
var hmac$1 = {};
var hash = {};
Object.defineProperty(hash, "__esModule", { value: true });
function isSerializableHash(h4) {
  return typeof h4.saveState !== "undefined" && typeof h4.restoreState !== "undefined" && typeof h4.cleanSavedState !== "undefined";
}
hash.isSerializableHash = isSerializableHash;
Object.defineProperty(hmac$1, "__esModule", { value: true });
var hash_1 = hash;
var constant_time_1 = constantTime;
var wipe_1$1 = wipe$1;
var HMAC = (
  /** @class */
  function() {
    function HMAC2(hash2, key) {
      this._finished = false;
      this._inner = new hash2();
      this._outer = new hash2();
      this.blockSize = this._outer.blockSize;
      this.digestLength = this._outer.digestLength;
      var pad = new Uint8Array(this.blockSize);
      if (key.length > this.blockSize) {
        this._inner.update(key).finish(pad).clean();
      } else {
        pad.set(key);
      }
      for (var i2 = 0; i2 < pad.length; i2++) {
        pad[i2] ^= 54;
      }
      this._inner.update(pad);
      for (var i2 = 0; i2 < pad.length; i2++) {
        pad[i2] ^= 54 ^ 92;
      }
      this._outer.update(pad);
      if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
        this._innerKeyedState = this._inner.saveState();
        this._outerKeyedState = this._outer.saveState();
      }
      wipe_1$1.wipe(pad);
    }
    HMAC2.prototype.reset = function() {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      }
      this._inner.restoreState(this._innerKeyedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.clean = function() {
      if (hash_1.isSerializableHash(this._inner)) {
        this._inner.cleanSavedState(this._innerKeyedState);
      }
      if (hash_1.isSerializableHash(this._outer)) {
        this._outer.cleanSavedState(this._outerKeyedState);
      }
      this._inner.clean();
      this._outer.clean();
    };
    HMAC2.prototype.update = function(data) {
      this._inner.update(data);
      return this;
    };
    HMAC2.prototype.finish = function(out) {
      if (this._finished) {
        this._outer.finish(out);
        return this;
      }
      this._inner.finish(out);
      this._outer.update(out.subarray(0, this.digestLength)).finish(out);
      this._finished = true;
      return this;
    };
    HMAC2.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    HMAC2.prototype.saveState = function() {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      }
      return this._inner.saveState();
    };
    HMAC2.prototype.restoreState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      }
      this._inner.restoreState(savedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.cleanSavedState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      }
      this._inner.cleanSavedState(savedState);
    };
    return HMAC2;
  }()
);
hmac$1.HMAC = HMAC;
function hmac(hash2, key, data) {
  var h4 = new HMAC(hash2, key);
  h4.update(data);
  var digest = h4.digest();
  h4.clean();
  return digest;
}
hmac$1.hmac = hmac;
hmac$1.equal = constant_time_1.equal;
Object.defineProperty(hkdf, "__esModule", { value: true });
var hmac_1 = hmac$1;
var wipe_1 = wipe$1;
var HKDF = (
  /** @class */
  function() {
    function HKDF2(hash2, key, salt, info) {
      if (salt === void 0) {
        salt = new Uint8Array(0);
      }
      this._counter = new Uint8Array(1);
      this._hash = hash2;
      this._info = info;
      var okm = hmac_1.hmac(this._hash, salt, key);
      this._hmac = new hmac_1.HMAC(hash2, okm);
      this._buffer = new Uint8Array(this._hmac.digestLength);
      this._bufpos = this._buffer.length;
    }
    HKDF2.prototype._fillBuffer = function() {
      this._counter[0]++;
      var ctr = this._counter[0];
      if (ctr === 0) {
        throw new Error("hkdf: cannot expand more");
      }
      this._hmac.reset();
      if (ctr > 1) {
        this._hmac.update(this._buffer);
      }
      if (this._info) {
        this._hmac.update(this._info);
      }
      this._hmac.update(this._counter);
      this._hmac.finish(this._buffer);
      this._bufpos = 0;
    };
    HKDF2.prototype.expand = function(length) {
      var out = new Uint8Array(length);
      for (var i2 = 0; i2 < out.length; i2++) {
        if (this._bufpos === this._buffer.length) {
          this._fillBuffer();
        }
        out[i2] = this._buffer[this._bufpos++];
      }
      return out;
    };
    HKDF2.prototype.clean = function() {
      this._hmac.clean();
      wipe_1.wipe(this._buffer);
      wipe_1.wipe(this._counter);
      this._bufpos = 0;
    };
    return HKDF2;
  }()
);
var HKDF_1 = hkdf.HKDF = HKDF;
var sha256 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports2.DIGEST_LENGTH = 32;
  exports2.BLOCK_SIZE = 64;
  var SHA256 = (
    /** @class */
    function() {
      function SHA2562() {
        this.digestLength = exports2.DIGEST_LENGTH;
        this.blockSize = exports2.BLOCK_SIZE;
        this._state = new Int32Array(8);
        this._temp = new Int32Array(64);
        this._buffer = new Uint8Array(128);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA2562.prototype._initState = function() {
        this._state[0] = 1779033703;
        this._state[1] = 3144134277;
        this._state[2] = 1013904242;
        this._state[3] = 2773480762;
        this._state[4] = 1359893119;
        this._state[5] = 2600822924;
        this._state[6] = 528734635;
        this._state[7] = 1541459225;
      };
      SHA2562.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._temp);
        this.reset();
      };
      SHA2562.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < this.blockSize && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA2562.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 64 < 56 ? 64 : 128;
          this._buffer[left] = 128;
          for (var i2 = left + 1; i2 < padLength - 8; i2++) {
            this._buffer[i2] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i2 = 0; i2 < this.digestLength / 4; i2++) {
          binary_12.writeUint32BE(this._state[i2], out, i2 * 4);
        }
        return this;
      };
      SHA2562.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA2562.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA2562.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.state);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA2562;
    }()
  );
  exports2.SHA256 = SHA256;
  var K2 = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function hashBlocks(w3, v3, p3, pos, len) {
    while (len >= 64) {
      var a3 = v3[0];
      var b3 = v3[1];
      var c2 = v3[2];
      var d3 = v3[3];
      var e = v3[4];
      var f2 = v3[5];
      var g3 = v3[6];
      var h4 = v3[7];
      for (var i2 = 0; i2 < 16; i2++) {
        var j2 = pos + i2 * 4;
        w3[i2] = binary_12.readUint32BE(p3, j2);
      }
      for (var i2 = 16; i2 < 64; i2++) {
        var u3 = w3[i2 - 2];
        var t1 = (u3 >>> 17 | u3 << 32 - 17) ^ (u3 >>> 19 | u3 << 32 - 19) ^ u3 >>> 10;
        u3 = w3[i2 - 15];
        var t2 = (u3 >>> 7 | u3 << 32 - 7) ^ (u3 >>> 18 | u3 << 32 - 18) ^ u3 >>> 3;
        w3[i2] = (t1 + w3[i2 - 7] | 0) + (t2 + w3[i2 - 16] | 0);
      }
      for (var i2 = 0; i2 < 64; i2++) {
        var t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f2 ^ ~e & g3) | 0) + (h4 + (K2[i2] + w3[i2] | 0) | 0) | 0;
        var t2 = ((a3 >>> 2 | a3 << 32 - 2) ^ (a3 >>> 13 | a3 << 32 - 13) ^ (a3 >>> 22 | a3 << 32 - 22)) + (a3 & b3 ^ a3 & c2 ^ b3 & c2) | 0;
        h4 = g3;
        g3 = f2;
        f2 = e;
        e = d3 + t1 | 0;
        d3 = c2;
        c2 = b3;
        b3 = a3;
        a3 = t1 + t2 | 0;
      }
      v3[0] += a3;
      v3[1] += b3;
      v3[2] += c2;
      v3[3] += d3;
      v3[4] += e;
      v3[5] += f2;
      v3[6] += g3;
      v3[7] += h4;
      pos += 64;
      len -= 64;
    }
    return pos;
  }
  function hash2(data) {
    var h4 = new SHA256();
    h4.update(data);
    var digest = h4.digest();
    h4.clean();
    return digest;
  }
  exports2.hash = hash2;
})(sha256);
var x25519 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.sharedKey = exports2.generateKeyPair = exports2.generateKeyPairFromSeed = exports2.scalarMultBase = exports2.scalarMult = exports2.SHARED_KEY_LENGTH = exports2.SECRET_KEY_LENGTH = exports2.PUBLIC_KEY_LENGTH = void 0;
  const random_1 = random;
  const wipe_12 = wipe$1;
  exports2.PUBLIC_KEY_LENGTH = 32;
  exports2.SECRET_KEY_LENGTH = 32;
  exports2.SHARED_KEY_LENGTH = 32;
  function gf(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i2 = 0; i2 < init.length; i2++) {
        r2[i2] = init[i2];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const _121665 = gf([56129, 1]);
  function car25519(o2) {
    let c2 = 1;
    for (let i2 = 0; i2 < 16; i2++) {
      let v3 = o2[i2] + c2 + 65535;
      c2 = Math.floor(v3 / 65536);
      o2[i2] = v3 - c2 * 65536;
    }
    o2[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b3) {
    const c2 = ~(b3 - 1);
    for (let i2 = 0; i2 < 16; i2++) {
      const t2 = c2 & (p3[i2] ^ q2[i2]);
      p3[i2] ^= t2;
      q2[i2] ^= t2;
    }
  }
  function pack25519(o2, n3) {
    const m2 = gf();
    const t2 = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      t2[i2] = n3[i2];
    }
    car25519(t2);
    car25519(t2);
    car25519(t2);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t2[0] - 65517;
      for (let i2 = 1; i2 < 15; i2++) {
        m2[i2] = t2[i2] - 65535 - (m2[i2 - 1] >> 16 & 1);
        m2[i2 - 1] &= 65535;
      }
      m2[15] = t2[15] - 32767 - (m2[14] >> 16 & 1);
      const b3 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t2, m2, 1 - b3);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o2[2 * i2] = t2[i2] & 255;
      o2[2 * i2 + 1] = t2[i2] >> 8;
    }
  }
  function unpack25519(o2, n3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = n3[2 * i2] + (n3[2 * i2 + 1] << 8);
    }
    o2[15] &= 32767;
  }
  function add(o2, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = a3[i2] + b3[i2];
    }
  }
  function sub(o2, a3, b3) {
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = a3[i2] - b3[i2];
    }
  }
  function mul(o2, a3, b3) {
    let v3, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
    v3 = a3[0];
    t0 += v3 * b0;
    t1 += v3 * b1;
    t2 += v3 * b22;
    t3 += v3 * b32;
    t4 += v3 * b4;
    t5 += v3 * b5;
    t6 += v3 * b6;
    t7 += v3 * b7;
    t8 += v3 * b8;
    t9 += v3 * b9;
    t10 += v3 * b10;
    t11 += v3 * b11;
    t12 += v3 * b12;
    t13 += v3 * b13;
    t14 += v3 * b14;
    t15 += v3 * b15;
    v3 = a3[1];
    t1 += v3 * b0;
    t2 += v3 * b1;
    t3 += v3 * b22;
    t4 += v3 * b32;
    t5 += v3 * b4;
    t6 += v3 * b5;
    t7 += v3 * b6;
    t8 += v3 * b7;
    t9 += v3 * b8;
    t10 += v3 * b9;
    t11 += v3 * b10;
    t12 += v3 * b11;
    t13 += v3 * b12;
    t14 += v3 * b13;
    t15 += v3 * b14;
    t16 += v3 * b15;
    v3 = a3[2];
    t2 += v3 * b0;
    t3 += v3 * b1;
    t4 += v3 * b22;
    t5 += v3 * b32;
    t6 += v3 * b4;
    t7 += v3 * b5;
    t8 += v3 * b6;
    t9 += v3 * b7;
    t10 += v3 * b8;
    t11 += v3 * b9;
    t12 += v3 * b10;
    t13 += v3 * b11;
    t14 += v3 * b12;
    t15 += v3 * b13;
    t16 += v3 * b14;
    t17 += v3 * b15;
    v3 = a3[3];
    t3 += v3 * b0;
    t4 += v3 * b1;
    t5 += v3 * b22;
    t6 += v3 * b32;
    t7 += v3 * b4;
    t8 += v3 * b5;
    t9 += v3 * b6;
    t10 += v3 * b7;
    t11 += v3 * b8;
    t12 += v3 * b9;
    t13 += v3 * b10;
    t14 += v3 * b11;
    t15 += v3 * b12;
    t16 += v3 * b13;
    t17 += v3 * b14;
    t18 += v3 * b15;
    v3 = a3[4];
    t4 += v3 * b0;
    t5 += v3 * b1;
    t6 += v3 * b22;
    t7 += v3 * b32;
    t8 += v3 * b4;
    t9 += v3 * b5;
    t10 += v3 * b6;
    t11 += v3 * b7;
    t12 += v3 * b8;
    t13 += v3 * b9;
    t14 += v3 * b10;
    t15 += v3 * b11;
    t16 += v3 * b12;
    t17 += v3 * b13;
    t18 += v3 * b14;
    t19 += v3 * b15;
    v3 = a3[5];
    t5 += v3 * b0;
    t6 += v3 * b1;
    t7 += v3 * b22;
    t8 += v3 * b32;
    t9 += v3 * b4;
    t10 += v3 * b5;
    t11 += v3 * b6;
    t12 += v3 * b7;
    t13 += v3 * b8;
    t14 += v3 * b9;
    t15 += v3 * b10;
    t16 += v3 * b11;
    t17 += v3 * b12;
    t18 += v3 * b13;
    t19 += v3 * b14;
    t20 += v3 * b15;
    v3 = a3[6];
    t6 += v3 * b0;
    t7 += v3 * b1;
    t8 += v3 * b22;
    t9 += v3 * b32;
    t10 += v3 * b4;
    t11 += v3 * b5;
    t12 += v3 * b6;
    t13 += v3 * b7;
    t14 += v3 * b8;
    t15 += v3 * b9;
    t16 += v3 * b10;
    t17 += v3 * b11;
    t18 += v3 * b12;
    t19 += v3 * b13;
    t20 += v3 * b14;
    t21 += v3 * b15;
    v3 = a3[7];
    t7 += v3 * b0;
    t8 += v3 * b1;
    t9 += v3 * b22;
    t10 += v3 * b32;
    t11 += v3 * b4;
    t12 += v3 * b5;
    t13 += v3 * b6;
    t14 += v3 * b7;
    t15 += v3 * b8;
    t16 += v3 * b9;
    t17 += v3 * b10;
    t18 += v3 * b11;
    t19 += v3 * b12;
    t20 += v3 * b13;
    t21 += v3 * b14;
    t22 += v3 * b15;
    v3 = a3[8];
    t8 += v3 * b0;
    t9 += v3 * b1;
    t10 += v3 * b22;
    t11 += v3 * b32;
    t12 += v3 * b4;
    t13 += v3 * b5;
    t14 += v3 * b6;
    t15 += v3 * b7;
    t16 += v3 * b8;
    t17 += v3 * b9;
    t18 += v3 * b10;
    t19 += v3 * b11;
    t20 += v3 * b12;
    t21 += v3 * b13;
    t22 += v3 * b14;
    t23 += v3 * b15;
    v3 = a3[9];
    t9 += v3 * b0;
    t10 += v3 * b1;
    t11 += v3 * b22;
    t12 += v3 * b32;
    t13 += v3 * b4;
    t14 += v3 * b5;
    t15 += v3 * b6;
    t16 += v3 * b7;
    t17 += v3 * b8;
    t18 += v3 * b9;
    t19 += v3 * b10;
    t20 += v3 * b11;
    t21 += v3 * b12;
    t22 += v3 * b13;
    t23 += v3 * b14;
    t24 += v3 * b15;
    v3 = a3[10];
    t10 += v3 * b0;
    t11 += v3 * b1;
    t12 += v3 * b22;
    t13 += v3 * b32;
    t14 += v3 * b4;
    t15 += v3 * b5;
    t16 += v3 * b6;
    t17 += v3 * b7;
    t18 += v3 * b8;
    t19 += v3 * b9;
    t20 += v3 * b10;
    t21 += v3 * b11;
    t22 += v3 * b12;
    t23 += v3 * b13;
    t24 += v3 * b14;
    t25 += v3 * b15;
    v3 = a3[11];
    t11 += v3 * b0;
    t12 += v3 * b1;
    t13 += v3 * b22;
    t14 += v3 * b32;
    t15 += v3 * b4;
    t16 += v3 * b5;
    t17 += v3 * b6;
    t18 += v3 * b7;
    t19 += v3 * b8;
    t20 += v3 * b9;
    t21 += v3 * b10;
    t22 += v3 * b11;
    t23 += v3 * b12;
    t24 += v3 * b13;
    t25 += v3 * b14;
    t26 += v3 * b15;
    v3 = a3[12];
    t12 += v3 * b0;
    t13 += v3 * b1;
    t14 += v3 * b22;
    t15 += v3 * b32;
    t16 += v3 * b4;
    t17 += v3 * b5;
    t18 += v3 * b6;
    t19 += v3 * b7;
    t20 += v3 * b8;
    t21 += v3 * b9;
    t22 += v3 * b10;
    t23 += v3 * b11;
    t24 += v3 * b12;
    t25 += v3 * b13;
    t26 += v3 * b14;
    t27 += v3 * b15;
    v3 = a3[13];
    t13 += v3 * b0;
    t14 += v3 * b1;
    t15 += v3 * b22;
    t16 += v3 * b32;
    t17 += v3 * b4;
    t18 += v3 * b5;
    t19 += v3 * b6;
    t20 += v3 * b7;
    t21 += v3 * b8;
    t22 += v3 * b9;
    t23 += v3 * b10;
    t24 += v3 * b11;
    t25 += v3 * b12;
    t26 += v3 * b13;
    t27 += v3 * b14;
    t28 += v3 * b15;
    v3 = a3[14];
    t14 += v3 * b0;
    t15 += v3 * b1;
    t16 += v3 * b22;
    t17 += v3 * b32;
    t18 += v3 * b4;
    t19 += v3 * b5;
    t20 += v3 * b6;
    t21 += v3 * b7;
    t22 += v3 * b8;
    t23 += v3 * b9;
    t24 += v3 * b10;
    t25 += v3 * b11;
    t26 += v3 * b12;
    t27 += v3 * b13;
    t28 += v3 * b14;
    t29 += v3 * b15;
    v3 = a3[15];
    t15 += v3 * b0;
    t16 += v3 * b1;
    t17 += v3 * b22;
    t18 += v3 * b32;
    t19 += v3 * b4;
    t20 += v3 * b5;
    t21 += v3 * b6;
    t22 += v3 * b7;
    t23 += v3 * b8;
    t24 += v3 * b9;
    t25 += v3 * b10;
    t26 += v3 * b11;
    t27 += v3 * b12;
    t28 += v3 * b13;
    t29 += v3 * b14;
    t30 += v3 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v3 = t0 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t0 = v3 - c2 * 65536;
    v3 = t1 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t1 = v3 - c2 * 65536;
    v3 = t2 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t2 = v3 - c2 * 65536;
    v3 = t3 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t3 = v3 - c2 * 65536;
    v3 = t4 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t4 = v3 - c2 * 65536;
    v3 = t5 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t5 = v3 - c2 * 65536;
    v3 = t6 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t6 = v3 - c2 * 65536;
    v3 = t7 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t7 = v3 - c2 * 65536;
    v3 = t8 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t8 = v3 - c2 * 65536;
    v3 = t9 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t9 = v3 - c2 * 65536;
    v3 = t10 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t10 = v3 - c2 * 65536;
    v3 = t11 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t11 = v3 - c2 * 65536;
    v3 = t12 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t12 = v3 - c2 * 65536;
    v3 = t13 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t13 = v3 - c2 * 65536;
    v3 = t14 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t14 = v3 - c2 * 65536;
    v3 = t15 + c2 + 65535;
    c2 = Math.floor(v3 / 65536);
    t15 = v3 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o2[0] = t0;
    o2[1] = t1;
    o2[2] = t2;
    o2[3] = t3;
    o2[4] = t4;
    o2[5] = t5;
    o2[6] = t6;
    o2[7] = t7;
    o2[8] = t8;
    o2[9] = t9;
    o2[10] = t10;
    o2[11] = t11;
    o2[12] = t12;
    o2[13] = t13;
    o2[14] = t14;
    o2[15] = t15;
  }
  function square(o2, a3) {
    mul(o2, a3, a3);
  }
  function inv25519(o2, inp) {
    const c2 = gf();
    for (let i2 = 0; i2 < 16; i2++) {
      c2[i2] = inp[i2];
    }
    for (let i2 = 253; i2 >= 0; i2--) {
      square(c2, c2);
      if (i2 !== 2 && i2 !== 4) {
        mul(c2, c2, inp);
      }
    }
    for (let i2 = 0; i2 < 16; i2++) {
      o2[i2] = c2[i2];
    }
  }
  function scalarMult(n3, p3) {
    const z3 = new Uint8Array(32);
    const x2 = new Float64Array(80);
    const a3 = gf(), b3 = gf(), c2 = gf(), d3 = gf(), e = gf(), f2 = gf();
    for (let i2 = 0; i2 < 31; i2++) {
      z3[i2] = n3[i2];
    }
    z3[31] = n3[31] & 127 | 64;
    z3[0] &= 248;
    unpack25519(x2, p3);
    for (let i2 = 0; i2 < 16; i2++) {
      b3[i2] = x2[i2];
    }
    a3[0] = d3[0] = 1;
    for (let i2 = 254; i2 >= 0; --i2) {
      const r2 = z3[i2 >>> 3] >>> (i2 & 7) & 1;
      sel25519(a3, b3, r2);
      sel25519(c2, d3, r2);
      add(e, a3, c2);
      sub(a3, a3, c2);
      add(c2, b3, d3);
      sub(b3, b3, d3);
      square(d3, e);
      square(f2, a3);
      mul(a3, c2, a3);
      mul(c2, b3, e);
      add(e, a3, c2);
      sub(a3, a3, c2);
      square(b3, a3);
      sub(c2, d3, f2);
      mul(a3, c2, _121665);
      add(a3, a3, d3);
      mul(c2, c2, a3);
      mul(a3, d3, f2);
      mul(d3, b3, x2);
      square(b3, e);
      sel25519(a3, b3, r2);
      sel25519(c2, d3, r2);
    }
    for (let i2 = 0; i2 < 16; i2++) {
      x2[i2 + 16] = a3[i2];
      x2[i2 + 32] = c2[i2];
      x2[i2 + 48] = b3[i2];
      x2[i2 + 64] = d3[i2];
    }
    const x32 = x2.subarray(32);
    const x16 = x2.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q2 = new Uint8Array(32);
    pack25519(q2, x16);
    return q2;
  }
  exports2.scalarMult = scalarMult;
  function scalarMultBase(n3) {
    return scalarMult(n3, _9);
  }
  exports2.scalarMultBase = scalarMultBase;
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports2.SECRET_KEY_LENGTH) {
      throw new Error(`x25519: seed must be ${exports2.SECRET_KEY_LENGTH} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
      publicKey,
      secretKey
    };
  }
  exports2.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports2.generateKeyPair = generateKeyPair2;
  function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports2.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports2.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
      let zeros = 0;
      for (let i2 = 0; i2 < result.length; i2++) {
        zeros |= result[i2];
      }
      if (zeros === 0) {
        throw new Error("X25519: invalid shared key");
      }
    }
    return result;
  }
  exports2.sharedKey = sharedKey;
})(x25519);
var __spreadArray = function(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from2.length, ar2; i2 < l2; i2++) {
      if (ar2 || !(i2 in from2)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from2, 0, i2);
        ar2[i2] = from2[i2];
      }
    }
  return to.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name2, version2, os2) {
      this.name = name2;
      this.version = version2;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version2) {
      this.version = version2;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name2, version2, os2, bot) {
      this.name = name2;
      this.version = version2;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser2 = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os2 = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version2, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version2, os2);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os2 = _a[0], regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process !== "undefined" && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
var cjs$2 = {};
Object.defineProperty(cjs$2, "__esModule", { value: true });
cjs$2.getLocalStorage = cjs$2.getLocalStorageOrThrow = cjs$2.getCrypto = cjs$2.getCryptoOrThrow = getLocation_1 = cjs$2.getLocation = cjs$2.getLocationOrThrow = getNavigator_1 = cjs$2.getNavigator = cjs$2.getNavigatorOrThrow = getDocument_1 = cjs$2.getDocument = cjs$2.getDocumentOrThrow = cjs$2.getFromWindowOrThrow = cjs$2.getFromWindow = void 0;
function getFromWindow(name2) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
    res = window[name2];
  }
  return res;
}
cjs$2.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name2) {
  const res = getFromWindow(name2);
  if (!res) {
    throw new Error(`${name2} is not defined in Window`);
  }
  return res;
}
cjs$2.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$2.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
var getDocument_1 = cjs$2.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$2.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
  return getFromWindow("navigator");
}
var getNavigator_1 = cjs$2.getNavigator = getNavigator;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$2.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
  return getFromWindow("location");
}
var getLocation_1 = cjs$2.getLocation = getLocation;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$2.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$2.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$2.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
  return getFromWindow("localStorage");
}
cjs$2.getLocalStorage = getLocalStorage;
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$1.getWindowMetadata = void 0;
const window_getters_1 = cjs$2;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i2 = 0; i2 < links.length; i2++) {
      const link = links[i2];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i2 = 0; i2 < metaTags.length; i2++) {
      const tag = metaTags[i2];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name3) {
      name3 = doc.title;
    }
    return name3;
  }
  function getDescription() {
    const description3 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description3;
  }
  const name2 = getName();
  const description2 = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description: description2,
    url,
    icons,
    name: name2
  };
  return meta;
}
getWindowMetadata_1 = cjs$1.getWindowMetadata = getWindowMetadata;
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher) || [];
    for (var i2 = 1; i2 < tokens.length; i2++) {
      input = decodeComponents(tokens, i2).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "�";
  var entries = Object.keys(replaceMap);
  for (var i2 = 0; i2 < entries.length; i2++) {
    var key = entries[i2];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string2, separator) => {
  if (!(typeof string2 === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string2];
  }
  const separatorIndex = string2.indexOf(separator);
  if (separatorIndex === -1) {
    return [string2];
  }
  return [
    string2.slice(0, separatorIndex),
    string2.slice(separatorIndex + separator.length)
  ];
};
var filterObj = function(obj, predicate) {
  var ret = {};
  var keys2 = Object.keys(obj);
  var isArr = Array.isArray(predicate);
  for (var i2 = 0; i2 < keys2.length; i2++) {
    var key = keys2[i2];
    var val = obj[key];
    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }
  return ret;
};
(function(exports2) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), ":list="].join("")];
          }
          return [...result, [encode2(key, options), ":list=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode2(key, options), keyValueSep, encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a3, b3) => Number(a3) - Number(b3)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports2.extract = extract;
  exports2.parse = parse;
  exports2.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys2 = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys2.sort(options.sort);
    }
    return keys2.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode2(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports2.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash2] = splitOnFirst$1(url, "#");
    return Object.assign(
      {
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
      },
      options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode2(hash2, options) } : {}
    );
  };
  exports2.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports2.extract(object.url);
    const parsedQueryFromUrl = exports2.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports2.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  };
  exports2.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports2.parseUrl(input, options);
    return exports2.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports2.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports2.pick(input, exclusionFilter, options);
  };
})(queryString);
const RELAY_JSONRPC = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
function L$1(e, n3) {
  return e.includes(":") ? [e] : n3.chains || [];
}
const J$1 = "base10", p$1 = "base16", F$2 = "base64pad", H$1 = "utf8", Q$2 = 0, _$1 = 1, Dn = 0, Te = 1, Z$1 = 12, X$1 = 32;
function kn() {
  const e = x25519.generateKeyPair();
  return { privateKey: toString(e.secretKey, p$1), publicKey: toString(e.publicKey, p$1) };
}
function Vn() {
  const e = random.randomBytes(X$1);
  return toString(e, p$1);
}
function Mn(e, n3) {
  const t2 = x25519.sharedKey(fromString(e, p$1), fromString(n3, p$1), true), r2 = new HKDF_1(sha256.SHA256, t2).expand(X$1);
  return toString(r2, p$1);
}
function Kn(e) {
  const n3 = sha256.hash(fromString(e, p$1));
  return toString(n3, p$1);
}
function Ln(e) {
  const n3 = sha256.hash(fromString(e, H$1));
  return toString(n3, p$1);
}
function Pe(e) {
  return fromString(`${e}`, J$1);
}
function j$1(e) {
  return Number(toString(e, J$1));
}
function xn(e) {
  const n3 = Pe(typeof e.type < "u" ? e.type : Q$2);
  if (j$1(n3) === _$1 && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t2 = typeof e.senderPublicKey < "u" ? fromString(e.senderPublicKey, p$1) : void 0, r2 = typeof e.iv < "u" ? fromString(e.iv, p$1) : random.randomBytes(Z$1), o2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, p$1)).seal(r2, fromString(e.message, H$1));
  return Re({ type: n3, sealed: o2, iv: r2, senderPublicKey: t2 });
}
function Fn(e) {
  const n3 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, p$1)), { sealed: t2, iv: r2 } = ee$1(e.encoded), o2 = n3.open(r2, t2);
  if (o2 === null)
    throw new Error("Failed to decrypt");
  return toString(o2, H$1);
}
function Re(e) {
  if (j$1(e.type) === _$1) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e.type, e.senderPublicKey, e.iv, e.sealed]), F$2);
  }
  return toString(concat([e.type, e.iv, e.sealed]), F$2);
}
function ee$1(e) {
  const n3 = fromString(e, F$2), t2 = n3.slice(Dn, Te), r2 = Te;
  if (j$1(t2) === _$1) {
    const d3 = r2 + X$1, l2 = d3 + Z$1, c2 = n3.slice(r2, d3), u3 = n3.slice(d3, l2), a3 = n3.slice(l2);
    return { type: t2, sealed: a3, iv: u3, senderPublicKey: c2 };
  }
  const o2 = r2 + Z$1, s2 = n3.slice(r2, o2), i2 = n3.slice(o2);
  return { type: t2, sealed: i2, iv: s2 };
}
function Hn(e, n3) {
  const t2 = ee$1(e);
  return Ae({ type: j$1(t2.type), senderPublicKey: typeof t2.senderPublicKey < "u" ? toString(t2.senderPublicKey, p$1) : void 0, receiverPublicKey: n3 == null ? void 0 : n3.receiverPublicKey });
}
function Ae(e) {
  const n3 = (e == null ? void 0 : e.type) || Q$2;
  if (n3 === _$1) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: n3, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function qn(e) {
  return e.type === _$1 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Bn = Object.defineProperty, Ue$1 = Object.getOwnPropertySymbols, Gn = Object.prototype.hasOwnProperty, Wn = Object.prototype.propertyIsEnumerable, _e = (e, n3, t2) => n3 in e ? Bn(e, n3, { enumerable: true, configurable: true, writable: true, value: t2 }) : e[n3] = t2, $e$1 = (e, n3) => {
  for (var t2 in n3 || (n3 = {}))
    Gn.call(n3, t2) && _e(e, t2, n3[t2]);
  if (Ue$1)
    for (var t2 of Ue$1(n3))
      Wn.call(n3, t2) && _e(e, t2, n3[t2]);
  return e;
};
const Ce = "ReactNative", m$1 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, De$1 = "js";
function te$1() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function $$1() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === Ce;
}
function D$2() {
  return !te$1() && !!getNavigator_1() && !!getDocument_1();
}
function R$2() {
  return $$1() ? m$1.reactNative : te$1() ? m$1.node : D$2() ? m$1.browser : m$1.unknown;
}
function Jn() {
  var e;
  try {
    return $$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
  } catch {
    return;
  }
}
function ke$1(e, n3) {
  let t2 = queryString.parse(e);
  return t2 = $e$1($e$1({}, t2), n3), e = queryString.stringify(t2), e;
}
function Qn() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function Ve$1() {
  if (R$2() === m$1.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: t2, Version: r2 } = global.Platform;
    return [t2, r2].join("-");
  }
  const e = detect();
  if (e === null)
    return "unknown";
  const n3 = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [n3, e.name, e.version].join("-") : [n3, e.version].join("-");
}
function Me$1() {
  var e;
  const n3 = R$2();
  return n3 === m$1.browser ? [n3, ((e = getLocation_1()) == null ? void 0 : e.host) || "unknown"].join(":") : n3;
}
function Ke$1(e, n3, t2) {
  const r2 = Ve$1(), o2 = Me$1();
  return [[e, n3].join("-"), [De$1, t2].join("-"), r2, o2].join("/");
}
function Xn({ protocol: e, version: n3, relayUrl: t2, sdkVersion: r2, auth: o2, projectId: s2, useOnCloseEvent: i2, bundleId: d3 }) {
  const l2 = t2.split("?"), c2 = Ke$1(e, n3, r2), u3 = { auth: o2, ua: c2, projectId: s2, useOnCloseEvent: i2 || void 0, origin: d3 || void 0 }, a3 = ke$1(l2[1] || "", u3);
  return l2[0] + "?" + a3;
}
function O$1(e, n3) {
  return e.filter((t2) => n3.includes(t2)).length === e.length;
}
function rt$1(e) {
  return Object.fromEntries(e.entries());
}
function ot$1(e) {
  return new Map(Object.entries(e));
}
function at$1(e = cjs$4.FIVE_MINUTES, n3) {
  const t2 = cjs$4.toMiliseconds(e || cjs$4.FIVE_MINUTES);
  let r2, o2, s2;
  return { resolve: (i2) => {
    s2 && r2 && (clearTimeout(s2), r2(i2));
  }, reject: (i2) => {
    s2 && o2 && (clearTimeout(s2), o2(i2));
  }, done: () => new Promise((i2, d3) => {
    s2 = setTimeout(() => {
      d3(new Error(n3));
    }, t2), r2 = i2, o2 = d3;
  }) };
}
function ut$1(e, n3, t2) {
  return new Promise(async (r2, o2) => {
    const s2 = setTimeout(() => o2(new Error(t2)), n3);
    try {
      const i2 = await e;
      r2(i2);
    } catch (i2) {
      o2(i2);
    }
    clearTimeout(s2);
  });
}
function re(e, n3) {
  if (typeof n3 == "string" && n3.startsWith(`${e}:`))
    return n3;
  if (e.toLowerCase() === "topic") {
    if (typeof n3 != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${n3}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof n3 != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${n3}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function lt$1(e) {
  return re("topic", e);
}
function dt$1(e) {
  return re("id", e);
}
function ft$1(e) {
  const [n3, t2] = e.split(":"), r2 = { id: void 0, topic: void 0 };
  if (n3 === "topic" && typeof t2 == "string")
    r2.topic = t2;
  else if (n3 === "id" && Number.isInteger(Number(t2)))
    r2.id = Number(t2);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${n3}:${t2}`);
  return r2;
}
function pt$1(e, n3) {
  return cjs$4.fromMiliseconds((n3 || Date.now()) + cjs$4.toMiliseconds(e));
}
function mt$1(e) {
  return Date.now() >= cjs$4.toMiliseconds(e);
}
function yt$1(e, n3) {
  return `${e}${n3 ? `:${n3}` : ""}`;
}
async function gt$1({ id: e, topic: n3, wcDeepLink: t2 }) {
  try {
    if (!t2)
      return;
    const r2 = typeof t2 == "string" ? JSON.parse(t2) : t2;
    let o2 = r2 == null ? void 0 : r2.href;
    if (typeof o2 != "string")
      return;
    o2.endsWith("/") && (o2 = o2.slice(0, -1));
    const s2 = `${o2}/wc?requestId=${e}&sessionTopic=${n3}`, i2 = R$2();
    i2 === m$1.browser ? s2.startsWith("https://") ? window.open(s2, "_blank", "noreferrer noopener") : window.open(s2, "_self", "noreferrer noopener") : i2 === m$1.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s2);
  } catch (r2) {
    console.error(r2);
  }
}
async function ht$1(e, n3) {
  try {
    return await e.getItem(n3) || (D$2() ? localStorage.getItem(n3) : void 0);
  } catch (t2) {
    console.error(t2);
  }
}
const He$1 = "irn";
function vt$1(e) {
  return (e == null ? void 0 : e.relay) || { protocol: He$1 };
}
function Et$1(e) {
  const n3 = RELAY_JSONRPC[e];
  if (typeof n3 > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return n3;
}
var bt$1 = Object.defineProperty, Nt$1 = Object.defineProperties, Ot$1 = Object.getOwnPropertyDescriptors, qe$1 = Object.getOwnPropertySymbols, St$1 = Object.prototype.hasOwnProperty, wt$1 = Object.prototype.propertyIsEnumerable, Be$1 = (e, n3, t2) => n3 in e ? bt$1(e, n3, { enumerable: true, configurable: true, writable: true, value: t2 }) : e[n3] = t2, It$1 = (e, n3) => {
  for (var t2 in n3 || (n3 = {}))
    St$1.call(n3, t2) && Be$1(e, t2, n3[t2]);
  if (qe$1)
    for (var t2 of qe$1(n3))
      wt$1.call(n3, t2) && Be$1(e, t2, n3[t2]);
  return e;
}, Tt$1 = (e, n3) => Nt$1(e, Ot$1(n3));
function Ge$1(e, n3 = "-") {
  const t2 = {}, r2 = "relay" + n3;
  return Object.keys(e).forEach((o2) => {
    if (o2.startsWith(r2)) {
      const s2 = o2.replace(r2, ""), i2 = e[o2];
      t2[s2] = i2;
    }
  }), t2;
}
function Pt$1(e) {
  e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
  const n3 = e.indexOf(":"), t2 = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r2 = e.substring(0, n3), o2 = e.substring(n3 + 1, t2).split("@"), s2 = typeof t2 < "u" ? e.substring(t2) : "", i2 = queryString.parse(s2);
  return { protocol: r2, topic: We$1(o2[0]), version: parseInt(o2[1], 10), symKey: i2.symKey, relay: Ge$1(i2), expiryTimestamp: i2.expiryTimestamp ? parseInt(i2.expiryTimestamp, 10) : void 0 };
}
function We$1(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function ze(e, n3 = "-") {
  const t2 = "relay", r2 = {};
  return Object.keys(e).forEach((o2) => {
    const s2 = t2 + n3 + o2;
    e[o2] && (r2[s2] = e[o2]);
  }), r2;
}
function Rt$1(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + queryString.stringify(Tt$1(It$1({ symKey: e.symKey }, ze(e.relay)), { expiryTimestamp: e.expiryTimestamp }));
}
function A$1(e) {
  const n3 = [];
  return e.forEach((t2) => {
    const [r2, o2] = t2.split(":");
    n3.push(`${r2}:${o2}`);
  }), n3;
}
function Qe$1(e) {
  const n3 = [];
  return Object.values(e).forEach((t2) => {
    n3.push(...A$1(t2.accounts));
  }), n3;
}
function Ze$1(e, n3) {
  const t2 = [];
  return Object.values(e).forEach((r2) => {
    A$1(r2.accounts).includes(n3) && t2.push(...r2.methods);
  }), t2;
}
function Xe$1(e, n3) {
  const t2 = [];
  return Object.values(e).forEach((r2) => {
    A$1(r2.accounts).includes(n3) && t2.push(...r2.events);
  }), t2;
}
const nn = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, tn = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function N$1(e, n3) {
  const { message: t2, code: r2 } = tn[e];
  return { message: n3 ? `${t2} ${n3}` : t2, code: r2 };
}
function U$2(e, n3) {
  const { message: t2, code: r2 } = nn[e];
  return { message: n3 ? `${t2} ${n3}` : t2, code: r2 };
}
function k(e, n3) {
  return Array.isArray(e) ? typeof n3 < "u" && e.length ? e.every(n3) : true : false;
}
function B$1(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function w$3(e) {
  return typeof e > "u";
}
function g$3(e, n3) {
  return n3 && w$3(e) ? true : typeof e == "string" && !!e.trim().length;
}
function G$1(e, n3) {
  return n3 && w$3(e) ? true : typeof e == "number" && !isNaN(e);
}
function Mt$1(e, n3) {
  const { requiredNamespaces: t2 } = n3, r2 = Object.keys(e.namespaces), o2 = Object.keys(t2);
  let s2 = true;
  return O$1(o2, r2) ? (r2.forEach((i2) => {
    const { accounts: d3, methods: l2, events: c2 } = e.namespaces[i2], u3 = A$1(d3), a3 = t2[i2];
    (!O$1(L$1(i2, a3), u3) || !O$1(a3.methods, l2) || !O$1(a3.events, c2)) && (s2 = false);
  }), s2) : false;
}
function V$1(e) {
  return g$3(e, false) && e.includes(":") ? e.split(":").length === 2 : false;
}
function rn(e) {
  if (g$3(e, false) && e.includes(":")) {
    const n3 = e.split(":");
    if (n3.length === 3) {
      const t2 = n3[0] + ":" + n3[1];
      return !!n3[2] && V$1(t2);
    }
  }
  return false;
}
function Kt$1(e) {
  if (g$3(e, false))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return false;
    }
  return false;
}
function Lt$1(e) {
  var n3;
  return (n3 = e == null ? void 0 : e.proposer) == null ? void 0 : n3.publicKey;
}
function xt$1(e) {
  return e == null ? void 0 : e.topic;
}
function Ft$1(e, n3) {
  let t2 = null;
  return g$3(e == null ? void 0 : e.publicKey, false) || (t2 = N$1("MISSING_OR_INVALID", `${n3} controller public key should be a string`)), t2;
}
function ie(e) {
  let n3 = true;
  return k(e) ? e.length && (n3 = e.every((t2) => g$3(t2, false))) : n3 = false, n3;
}
function on(e, n3, t2) {
  let r2 = null;
  return k(n3) && n3.length ? n3.forEach((o2) => {
    r2 || V$1(o2) || (r2 = U$2("UNSUPPORTED_CHAINS", `${t2}, chain ${o2} should be a string and conform to "namespace:chainId" format`));
  }) : V$1(e) || (r2 = U$2("UNSUPPORTED_CHAINS", `${t2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
}
function sn(e, n3, t2) {
  let r2 = null;
  return Object.entries(e).forEach(([o2, s2]) => {
    if (r2)
      return;
    const i2 = on(o2, L$1(o2, s2), `${n3} ${t2}`);
    i2 && (r2 = i2);
  }), r2;
}
function cn(e, n3) {
  let t2 = null;
  return k(e) ? e.forEach((r2) => {
    t2 || rn(r2) || (t2 = U$2("UNSUPPORTED_ACCOUNTS", `${n3}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : t2 = U$2("UNSUPPORTED_ACCOUNTS", `${n3}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t2;
}
function an(e, n3) {
  let t2 = null;
  return Object.values(e).forEach((r2) => {
    if (t2)
      return;
    const o2 = cn(r2 == null ? void 0 : r2.accounts, `${n3} namespace`);
    o2 && (t2 = o2);
  }), t2;
}
function un(e, n3) {
  let t2 = null;
  return ie(e == null ? void 0 : e.methods) ? ie(e == null ? void 0 : e.events) || (t2 = U$2("UNSUPPORTED_EVENTS", `${n3}, events should be an array of strings or empty array for no events`)) : t2 = U$2("UNSUPPORTED_METHODS", `${n3}, methods should be an array of strings or empty array for no methods`), t2;
}
function ce$2(e, n3) {
  let t2 = null;
  return Object.values(e).forEach((r2) => {
    if (t2)
      return;
    const o2 = un(r2, `${n3}, namespace`);
    o2 && (t2 = o2);
  }), t2;
}
function Ht$1(e, n3, t2) {
  let r2 = null;
  if (e && B$1(e)) {
    const o2 = ce$2(e, n3);
    o2 && (r2 = o2);
    const s2 = sn(e, n3, t2);
    s2 && (r2 = s2);
  } else
    r2 = N$1("MISSING_OR_INVALID", `${n3}, ${t2} should be an object with data`);
  return r2;
}
function ln(e, n3) {
  let t2 = null;
  if (e && B$1(e)) {
    const r2 = ce$2(e, n3);
    r2 && (t2 = r2);
    const o2 = an(e, n3);
    o2 && (t2 = o2);
  } else
    t2 = N$1("MISSING_OR_INVALID", `${n3}, namespaces should be an object with data`);
  return t2;
}
function dn(e) {
  return g$3(e.protocol, true);
}
function qt$1(e, n3) {
  let t2 = false;
  return n3 && !e ? t2 = true : e && k(e) && e.length && e.forEach((r2) => {
    t2 = dn(r2);
  }), t2;
}
function Bt$1(e) {
  return typeof e == "number";
}
function Gt$1(e) {
  return typeof e < "u" && typeof e !== null;
}
function Wt(e) {
  return !(!e || typeof e != "object" || !e.code || !G$1(e.code, false) || !e.message || !g$3(e.message, false));
}
function zt$1(e) {
  return !(w$3(e) || !g$3(e.method, false));
}
function Yt$1(e) {
  return !(w$3(e) || w$3(e.result) && w$3(e.error) || !G$1(e.id, false) || !g$3(e.jsonrpc, false));
}
function Jt$1(e) {
  return !(w$3(e) || !g$3(e.name, false));
}
function Qt(e, n3) {
  return !(!V$1(n3) || !Qe$1(e).includes(n3));
}
function Zt(e, n3, t2) {
  return g$3(t2, false) ? Ze$1(e, n3).includes(t2) : false;
}
function Xt(e, n3, t2) {
  return g$3(t2, false) ? Xe$1(e, n3).includes(t2) : false;
}
function fn(e, n3, t2) {
  let r2 = null;
  const o2 = er$1(e), s2 = nr$1(n3), i2 = Object.keys(o2), d3 = Object.keys(s2), l2 = pn(Object.keys(e)), c2 = pn(Object.keys(n3)), u3 = l2.filter((a3) => !c2.includes(a3));
  return u3.length && (r2 = N$1("NON_CONFORMING_NAMESPACES", `${t2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u3.toString()}
      Received: ${Object.keys(n3).toString()}`)), O$1(i2, d3) || (r2 = N$1("NON_CONFORMING_NAMESPACES", `${t2} namespaces chains don't satisfy required namespaces.
      Required: ${i2.toString()}
      Approved: ${d3.toString()}`)), Object.keys(n3).forEach((a3) => {
    if (!a3.includes(":") || r2)
      return;
    const b3 = A$1(n3[a3].accounts);
    b3.includes(a3) || (r2 = N$1("NON_CONFORMING_NAMESPACES", `${t2} namespaces accounts don't satisfy namespace accounts for ${a3}
        Required: ${a3}
        Approved: ${b3.toString()}`));
  }), i2.forEach((a3) => {
    r2 || (O$1(o2[a3].methods, s2[a3].methods) ? O$1(o2[a3].events, s2[a3].events) || (r2 = N$1("NON_CONFORMING_NAMESPACES", `${t2} namespaces events don't satisfy namespace events for ${a3}`)) : r2 = N$1("NON_CONFORMING_NAMESPACES", `${t2} namespaces methods don't satisfy namespace methods for ${a3}`));
  }), r2;
}
function er$1(e) {
  const n3 = {};
  return Object.keys(e).forEach((t2) => {
    var r2;
    t2.includes(":") ? n3[t2] = e[t2] : (r2 = e[t2].chains) == null || r2.forEach((o2) => {
      n3[o2] = { methods: e[t2].methods, events: e[t2].events };
    });
  }), n3;
}
function pn(e) {
  return [...new Set(e.map((n3) => n3.includes(":") ? n3.split(":")[0] : n3))];
}
function nr$1(e) {
  const n3 = {};
  return Object.keys(e).forEach((t2) => {
    if (t2.includes(":"))
      n3[t2] = e[t2];
    else {
      const r2 = A$1(e[t2].accounts);
      r2 == null ? void 0 : r2.forEach((o2) => {
        n3[o2] = { accounts: e[t2].accounts.filter((s2) => s2.includes(`${o2}:`)), methods: e[t2].methods, events: e[t2].events };
      });
    }
  }), n3;
}
function tr$1(e, n3) {
  return G$1(e, false) && e <= n3.max && e >= n3.min;
}
function rr$1() {
  const e = R$2();
  return new Promise((n3) => {
    switch (e) {
      case m$1.browser:
        n3(mn());
        break;
      case m$1.reactNative:
        n3(yn());
        break;
      case m$1.node:
        n3(gn());
        break;
      default:
        n3(true);
    }
  });
}
function mn() {
  return D$2() && (navigator == null ? void 0 : navigator.onLine);
}
async function yn() {
  if ($$1() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return true;
}
function gn() {
  return true;
}
function or$1(e) {
  switch (R$2()) {
    case m$1.browser:
      hn(e);
      break;
    case m$1.reactNative:
      vn(e);
      break;
  }
}
function hn(e) {
  !$$1() && D$2() && (window.addEventListener("online", () => e(true)), window.addEventListener("offline", () => e(false)));
}
function vn(e) {
  $$1() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((n3) => e(n3 == null ? void 0 : n3.isConnected)));
}
const ae$1 = {};
let sr$1 = class sr {
  static get(n3) {
    return ae$1[n3];
  }
  static set(n3, t2) {
    ae$1[n3] = t2;
  }
  static delete(n3) {
    delete ae$1[n3];
  }
};
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
const DEFAULT_ERROR = SERVER_ERROR;
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function getError(type2) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type2)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type2];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e) => e.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function parseConnectionError(e, url, type2) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type2} RPC url at ${url}`) : e;
}
var cjs = {};
var crypto$1 = {};
var hasRequiredCrypto;
function requireCrypto() {
  if (hasRequiredCrypto)
    return crypto$1;
  hasRequiredCrypto = 1;
  Object.defineProperty(crypto$1, "__esModule", { value: true });
  crypto$1.isBrowserCryptoAvailable = crypto$1.getSubtleCrypto = crypto$1.getBrowerCrypto = void 0;
  function getBrowerCrypto() {
    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
  }
  crypto$1.getBrowerCrypto = getBrowerCrypto;
  function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
  }
  crypto$1.getSubtleCrypto = getSubtleCrypto;
  function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
  }
  crypto$1.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  return crypto$1;
}
var env = {};
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv)
    return env;
  hasRequiredEnv = 1;
  Object.defineProperty(env, "__esModule", { value: true });
  env.isBrowser = env.isNode = env.isReactNative = void 0;
  function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
  }
  env.isReactNative = isReactNative;
  function isNode() {
    return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
  }
  env.isNode = isNode;
  function isBrowser() {
    return !isReactNative() && !isNode();
  }
  env.isBrowser = isBrowser;
  return env;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  const tslib_1 = require$$0$2;
  tslib_1.__exportStar(requireCrypto(), exports2);
  tslib_1.__exportStar(requireEnv(), exports2);
})(cjs);
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}
class IEvents2 {
}
class IBaseJsonRpcProvider extends IEvents2 {
  constructor() {
    super();
  }
}
class IJsonRpcProvider extends IBaseJsonRpcProvider {
  constructor(connection) {
    super();
  }
}
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
class JsonRpcProvider extends IJsonRpcProvider {
  constructor(connection) {
    super(connection);
    this.events = new eventsExports.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
}
const w$2 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {try { return require("ws") } catch (e) { } })(), b2 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", a$1 = (c2) => c2.split("?")[0], h$1 = 10, S$1 = w$2();
class f {
  constructor(e) {
    if (this.url = e, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t2) {
    this.events.on(e, t2);
  }
  once(e, t2) {
    this.events.once(e, t2);
  }
  off(e, t2) {
    this.events.off(e, t2);
  }
  removeListener(e, t2) {
    this.events.removeListener(e, t2);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t2) => {
      if (typeof this.socket > "u") {
        t2(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n3) => {
        this.onClose(n3), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e));
    } catch (t2) {
      this.onError(e.id, t2);
    }
  }
  register(e = this.url) {
    if (!isWsUrl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t2 || this.events.listenerCount("open") >= t2) && this.events.setMaxListeners(t2 + 1), new Promise((n3, o2) => {
        this.events.once("register_error", (s2) => {
          this.resetMaxListeners(), o2(s2);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o2(new Error("WebSocket connection is missing or invalid"));
          n3(this.socket);
        });
      });
    }
    return this.url = e, this.registering = true, new Promise((t2, n3) => {
      const o2 = new URLSearchParams(e).get("origin"), s2 = cjs.isReactNative() ? { headers: { origin: o2 } } : { rejectUnauthorized: !isLocalhostUrl(e) }, i2 = new S$1(e, [], s2);
      b2() ? i2.onerror = (r2) => {
        const l2 = r2;
        n3(this.emitError(l2.error));
      } : i2.on("error", (r2) => {
        n3(this.emitError(r2));
      }), i2.onopen = () => {
        this.onOpen(i2), t2(i2);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t2) => this.onPayload(t2), e.onclose = (t2) => this.onClose(t2), this.socket = e, this.registering = false, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t2 = typeof e.data == "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", t2);
  }
  onError(e, t2) {
    const n3 = this.parseError(t2), o2 = n3.message || n3.toString(), s2 = formatJsonRpcError(e, o2);
    this.events.emit("payload", s2);
  }
  parseError(e, t2 = this.url) {
    return parseConnectionError(e, a$1(t2), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h$1 && this.events.setMaxListeners(h$1);
  }
  emitError(e) {
    const t2 = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${a$1(this.url)}`));
    return this.events.emit("register_error", t2), t2;
  }
}
var lodash_isequal = { exports: {} };
lodash_isequal.exports;
(function(module2, exports2) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert2 = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert2 || (convert2 = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys2, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type2 = typeof value;
    return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type2 = typeof value;
    return value != null && (type2 == "object" || type2 == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys2(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module2.exports = isEqual;
})(lodash_isequal, lodash_isequal.exports);
var lodash_isequalExports = lodash_isequal.exports;
const Gi = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
function unfetch_module(e, n3) {
  return n3 = n3 || {}, new Promise(function(t2, r2) {
    var s2 = new XMLHttpRequest(), o2 = [], u3 = [], i2 = {}, a3 = function() {
      return { ok: 2 == (s2.status / 100 | 0), statusText: s2.statusText, status: s2.status, url: s2.responseURL, text: function() {
        return Promise.resolve(s2.responseText);
      }, json: function() {
        return Promise.resolve(s2.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s2.response]));
      }, clone: a3, headers: { keys: function() {
        return o2;
      }, entries: function() {
        return u3;
      }, get: function(e2) {
        return i2[e2.toLowerCase()];
      }, has: function(e2) {
        return e2.toLowerCase() in i2;
      } } };
    };
    for (var l2 in s2.open(n3.method || "get", e, true), s2.onload = function() {
      s2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n4, t3) {
        o2.push(n4 = n4.toLowerCase()), u3.push([n4, t3]), i2[n4] = i2[n4] ? i2[n4] + "," + t3 : t3;
      }), t2(a3());
    }, s2.onerror = r2, s2.withCredentials = "include" == n3.credentials, n3.headers)
      s2.setRequestHeader(l2, n3.headers[l2]);
    s2.send(n3.body || null);
  });
}
const unfetch_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: unfetch_module
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(unfetch_module$1);
var browser$2 = fetch || (self.fetch = require$$0.default || require$$0);
const Yi = /* @__PURE__ */ getDefaultExportFromCjs(browser$2);
function Hi(n3, e) {
  if (n3.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t2 = new Uint8Array(256), i2 = 0; i2 < t2.length; i2++)
    t2[i2] = 255;
  for (var s2 = 0; s2 < n3.length; s2++) {
    var r2 = n3.charAt(s2), o2 = r2.charCodeAt(0);
    if (t2[o2] !== 255)
      throw new TypeError(r2 + " is ambiguous");
    t2[o2] = s2;
  }
  var a3 = n3.length, h4 = n3.charAt(0), l2 = Math.log(a3) / Math.log(256), d3 = Math.log(256) / Math.log(a3);
  function p3(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u3.length === 0)
      return "";
    for (var m2 = 0, z3 = 0, I2 = 0, _3 = u3.length; I2 !== _3 && u3[I2] === 0; )
      I2++, m2++;
    for (var T2 = (_3 - I2) * d3 + 1 >>> 0, f2 = new Uint8Array(T2); I2 !== _3; ) {
      for (var S2 = u3[I2], A2 = 0, C2 = T2 - 1; (S2 !== 0 || A2 < z3) && C2 !== -1; C2--, A2++)
        S2 += 256 * f2[C2] >>> 0, f2[C2] = S2 % a3 >>> 0, S2 = S2 / a3 >>> 0;
      if (S2 !== 0)
        throw new Error("Non-zero carry");
      z3 = A2, I2++;
    }
    for (var x2 = T2 - z3; x2 !== T2 && f2[x2] === 0; )
      x2++;
    for (var j2 = h4.repeat(m2); x2 < T2; ++x2)
      j2 += n3.charAt(f2[x2]);
    return j2;
  }
  function y3(u3) {
    if (typeof u3 != "string")
      throw new TypeError("Expected String");
    if (u3.length === 0)
      return new Uint8Array();
    var m2 = 0;
    if (u3[m2] !== " ") {
      for (var z3 = 0, I2 = 0; u3[m2] === h4; )
        z3++, m2++;
      for (var _3 = (u3.length - m2) * l2 + 1 >>> 0, T2 = new Uint8Array(_3); u3[m2]; ) {
        var f2 = t2[u3.charCodeAt(m2)];
        if (f2 === 255)
          return;
        for (var S2 = 0, A2 = _3 - 1; (f2 !== 0 || S2 < I2) && A2 !== -1; A2--, S2++)
          f2 += a3 * T2[A2] >>> 0, T2[A2] = f2 % 256 >>> 0, f2 = f2 / 256 >>> 0;
        if (f2 !== 0)
          throw new Error("Non-zero carry");
        I2 = S2, m2++;
      }
      if (u3[m2] !== " ") {
        for (var C2 = _3 - I2; C2 !== _3 && T2[C2] === 0; )
          C2++;
        for (var x2 = new Uint8Array(z3 + (_3 - C2)), j2 = z3; C2 !== _3; )
          x2[j2++] = T2[C2++];
        return x2;
      }
    }
  }
  function M2(u3) {
    var m2 = y3(u3);
    if (m2)
      return m2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p3, decodeUnsafe: y3, decode: M2 };
}
var Ji = Hi, Xi = Ji;
const Ne = (n3) => {
  if (n3 instanceof Uint8Array && n3.constructor.name === "Uint8Array")
    return n3;
  if (n3 instanceof ArrayBuffer)
    return new Uint8Array(n3);
  if (ArrayBuffer.isView(n3))
    return new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Wi = (n3) => new TextEncoder().encode(n3), Qi = (n3) => new TextDecoder().decode(n3);
class Zi {
  constructor(e, t2, i2) {
    this.name = e, this.prefix = t2, this.baseEncode = i2;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class es {
  constructor(e, t2, i2) {
    if (this.name = e, this.prefix = t2, t2.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t2.codePointAt(0), this.baseDecode = i2;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ue(this, e);
  }
}
class ts {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ue(this, e);
  }
  decode(e) {
    const t2 = e[0], i2 = this.decoders[t2];
    if (i2)
      return i2.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ue = (n3, e) => new ts({ ...n3.decoders || { [n3.prefix]: n3 }, ...e.decoders || { [e.prefix]: e } });
class is {
  constructor(e, t2, i2, s2) {
    this.name = e, this.prefix = t2, this.baseEncode = i2, this.baseDecode = s2, this.encoder = new Zi(e, t2, i2), this.decoder = new es(e, t2, s2);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const W$1 = ({ name: n3, prefix: e, encode: t2, decode: i2 }) => new is(n3, e, t2, i2), B = ({ prefix: n3, name: e, alphabet: t2 }) => {
  const { encode: i2, decode: s2 } = Xi(t2, e);
  return W$1({ prefix: n3, name: e, encode: i2, decode: (r2) => Ne(s2(r2)) });
}, ss = (n3, e, t2, i2) => {
  const s2 = {};
  for (let d3 = 0; d3 < e.length; ++d3)
    s2[e[d3]] = d3;
  let r2 = n3.length;
  for (; n3[r2 - 1] === "="; )
    --r2;
  const o2 = new Uint8Array(r2 * t2 / 8 | 0);
  let a3 = 0, h4 = 0, l2 = 0;
  for (let d3 = 0; d3 < r2; ++d3) {
    const p3 = s2[n3[d3]];
    if (p3 === void 0)
      throw new SyntaxError(`Non-${i2} character`);
    h4 = h4 << t2 | p3, a3 += t2, a3 >= 8 && (a3 -= 8, o2[l2++] = 255 & h4 >> a3);
  }
  if (a3 >= t2 || 255 & h4 << 8 - a3)
    throw new SyntaxError("Unexpected end of data");
  return o2;
}, rs = (n3, e, t2) => {
  const i2 = e[e.length - 1] === "=", s2 = (1 << t2) - 1;
  let r2 = "", o2 = 0, a3 = 0;
  for (let h4 = 0; h4 < n3.length; ++h4)
    for (a3 = a3 << 8 | n3[h4], o2 += 8; o2 > t2; )
      o2 -= t2, r2 += e[s2 & a3 >> o2];
  if (o2 && (r2 += e[s2 & a3 << t2 - o2]), i2)
    for (; r2.length * t2 & 7; )
      r2 += "=";
  return r2;
}, g$2 = ({ name: n3, prefix: e, bitsPerChar: t2, alphabet: i2 }) => W$1({ prefix: e, name: n3, encode(s2) {
  return rs(s2, i2, t2);
}, decode(s2) {
  return ss(s2, i2, t2, n3);
} }), ns = W$1({ prefix: "\0", name: "identity", encode: (n3) => Qi(n3), decode: (n3) => Wi(n3) });
var os = Object.freeze({ __proto__: null, identity: ns });
const as$1 = g$2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hs$1 = Object.freeze({ __proto__: null, base2: as$1 });
const cs$1 = g$2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var us$1 = Object.freeze({ __proto__: null, base8: cs$1 });
const ls$1 = B({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ds$1 = Object.freeze({ __proto__: null, base10: ls$1 });
const gs$1 = g$2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ps$1 = g$2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ds = Object.freeze({ __proto__: null, base16: gs$1, base16upper: ps$1 });
const ys = g$2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ms$1 = g$2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bs = g$2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fs = g$2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Es = g$2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ws = g$2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), vs = g$2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Is = g$2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Cs = g$2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Rs = Object.freeze({ __proto__: null, base32: ys, base32upper: ms$1, base32pad: bs, base32padupper: fs, base32hex: Es, base32hexupper: ws, base32hexpad: vs, base32hexpadupper: Is, base32z: Cs });
const _s = B({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Ts = B({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ss = Object.freeze({ __proto__: null, base36: _s, base36upper: Ts });
const Ps = B({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), xs = B({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Os = Object.freeze({ __proto__: null, base58btc: Ps, base58flickr: xs });
const As = g$2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), zs = g$2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Ns = g$2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Us = g$2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ls = Object.freeze({ __proto__: null, base64: As, base64pad: zs, base64url: Ns, base64urlpad: Us });
const Le = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), $s = Le.reduce((n3, e, t2) => (n3[t2] = e, n3), []), Fs = Le.reduce((n3, e, t2) => (n3[e.codePointAt(0)] = t2, n3), []);
function Ms(n3) {
  return n3.reduce((e, t2) => (e += $s[t2], e), "");
}
function ks(n3) {
  const e = [];
  for (const t2 of n3) {
    const i2 = Fs[t2.codePointAt(0)];
    if (i2 === void 0)
      throw new Error(`Non-base256emoji character: ${t2}`);
    e.push(i2);
  }
  return new Uint8Array(e);
}
const Ks = W$1({ prefix: "🚀", name: "base256emoji", encode: Ms, decode: ks });
var Bs = Object.freeze({ __proto__: null, base256emoji: Ks }), Vs = Fe, $e = 128, qs = 127, js = ~qs, Gs = Math.pow(2, 31);
function Fe(n3, e, t2) {
  e = e || [], t2 = t2 || 0;
  for (var i2 = t2; n3 >= Gs; )
    e[t2++] = n3 & 255 | $e, n3 /= 128;
  for (; n3 & js; )
    e[t2++] = n3 & 255 | $e, n3 >>>= 7;
  return e[t2] = n3 | 0, Fe.bytes = t2 - i2 + 1, e;
}
var Ys = he$1, Hs = 128, Me = 127;
function he$1(n3, i2) {
  var t2 = 0, i2 = i2 || 0, s2 = 0, r2 = i2, o2, a3 = n3.length;
  do {
    if (r2 >= a3)
      throw he$1.bytes = 0, new RangeError("Could not decode varint");
    o2 = n3[r2++], t2 += s2 < 28 ? (o2 & Me) << s2 : (o2 & Me) * Math.pow(2, s2), s2 += 7;
  } while (o2 >= Hs);
  return he$1.bytes = r2 - i2, t2;
}
var Js = Math.pow(2, 7), Xs = Math.pow(2, 14), Ws = Math.pow(2, 21), Qs = Math.pow(2, 28), Zs = Math.pow(2, 35), er = Math.pow(2, 42), tr = Math.pow(2, 49), ir = Math.pow(2, 56), sr2 = Math.pow(2, 63), rr = function(n3) {
  return n3 < Js ? 1 : n3 < Xs ? 2 : n3 < Ws ? 3 : n3 < Qs ? 4 : n3 < Zs ? 5 : n3 < er ? 6 : n3 < tr ? 7 : n3 < ir ? 8 : n3 < sr2 ? 9 : 10;
}, nr = { encode: Vs, decode: Ys, encodingLength: rr }, ke = nr;
const Ke = (n3, e, t2 = 0) => (ke.encode(n3, e, t2), e), Be = (n3) => ke.encodingLength(n3), ce$1 = (n3, e) => {
  const t2 = e.byteLength, i2 = Be(n3), s2 = i2 + Be(t2), r2 = new Uint8Array(s2 + t2);
  return Ke(n3, r2, 0), Ke(t2, r2, i2), r2.set(e, s2), new or(n3, t2, e, r2);
};
class or {
  constructor(e, t2, i2, s2) {
    this.code = e, this.size = t2, this.digest = i2, this.bytes = s2;
  }
}
const Ve = ({ name: n3, code: e, encode: t2 }) => new ar(n3, e, t2);
class ar {
  constructor(e, t2, i2) {
    this.name = e, this.code = t2, this.encode = i2;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t2 = this.encode(e);
      return t2 instanceof Uint8Array ? ce$1(this.code, t2) : t2.then((i2) => ce$1(this.code, i2));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const qe = (n3) => async (e) => new Uint8Array(await crypto.subtle.digest(n3, e)), hr = Ve({ name: "sha2-256", code: 18, encode: qe("SHA-256") }), cr = Ve({ name: "sha2-512", code: 19, encode: qe("SHA-512") });
var ur = Object.freeze({ __proto__: null, sha256: hr, sha512: cr });
const je = 0, lr = "identity", Ge = Ne, dr = (n3) => ce$1(je, Ge(n3)), gr = { code: je, name: lr, encode: Ge, digest: dr };
var pr = Object.freeze({ __proto__: null, identity: gr });
new TextEncoder(), new TextDecoder();
const Ye = { ...os, ...hs$1, ...us$1, ...ds$1, ...Ds, ...Rs, ...Ss, ...Os, ...Ls, ...Bs };
({ ...ur, ...pr });
function He(n3) {
  return globalThis.Buffer != null ? new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength) : n3;
}
function Dr(n3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? He(globalThis.Buffer.allocUnsafe(n3)) : new Uint8Array(n3);
}
function Je(n3, e, t2, i2) {
  return { name: n3, prefix: e, encoder: { name: n3, prefix: e, encode: t2 }, decoder: { decode: i2 } };
}
const Xe = Je("utf8", "u", (n3) => "u" + new TextDecoder("utf8").decode(n3), (n3) => new TextEncoder().encode(n3.substring(1))), ue$1 = Je("ascii", "a", (n3) => {
  let e = "a";
  for (let t2 = 0; t2 < n3.length; t2++)
    e += String.fromCharCode(n3[t2]);
  return e;
}, (n3) => {
  n3 = n3.substring(1);
  const e = Dr(n3.length);
  for (let t2 = 0; t2 < n3.length; t2++)
    e[t2] = n3.charCodeAt(t2);
  return e;
}), yr = { utf8: Xe, "utf-8": Xe, hex: Ye.base16, latin1: ue$1, ascii: ue$1, binary: ue$1, ...Ye };
function mr(n3, e = "utf8") {
  const t2 = yr[e];
  if (!t2)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? He(globalThis.Buffer.from(n3, "utf-8")) : t2.decoder.decode(`${t2.prefix}${n3}`);
}
const le$1 = "wc", We = 2, Q$1 = "core", O = `${le$1}@2:${Q$1}:`, Qe = { name: Q$1, logger: "error" }, Ze = { database: ":memory:" }, et = "crypto", de$1 = "client_ed25519_seed", tt = cjs$4.ONE_DAY, it = "keychain", st = "0.3", rt = "messages", nt = "0.3", ot = cjs$4.SIX_HOURS, at = "publisher", ht = "irn", ct = "error", ge$1 = "wss://relay.walletconnect.com", pe$1 = "wss://relay.walletconnect.org", ut = "relayer", D$1 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, lt = "_subscription", P$1 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, dt = cjs$4.ONE_SECOND, gt = "2.11.2", pt = 1e4, Dt = "0.3", yt = "WALLETCONNECT_CLIENT_ID", w$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, mt = "subscription", bt = "0.3", ft = cjs$4.FIVE_SECONDS * 1e3, Et = "pairing", wt = "0.3", $ = { wc_pairingDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 } } }, V = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, R$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, vt = "history", It = "0.3", Ct = "expirer", v2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Rt = "0.3", Z = "verify-api", F$1 = "https://verify.walletconnect.com", ee = "https://verify.walletconnect.org", _t = [F$1, ee], Tt = "echo", St = "https://echo.walletconnect.com";
class Pt {
  constructor(e, t2) {
    this.core = e, this.logger = t2, this.keychain = /* @__PURE__ */ new Map(), this.name = it, this.version = st, this.initialized = false, this.storagePrefix = O, this.init = async () => {
      if (!this.initialized) {
        const i2 = await this.getKeyChain();
        typeof i2 < "u" && (this.keychain = i2), this.initialized = true;
      }
    }, this.has = (i2) => (this.isInitialized(), this.keychain.has(i2)), this.set = async (i2, s2) => {
      this.isInitialized(), this.keychain.set(i2, s2), await this.persist();
    }, this.get = (i2) => {
      this.isInitialized();
      const s2 = this.keychain.get(i2);
      if (typeof s2 > "u") {
        const { message: r2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${i2}`);
        throw new Error(r2);
      }
      return s2;
    }, this.del = async (i2) => {
      this.isInitialized(), this.keychain.delete(i2), await this.persist();
    }, this.core = e, this.logger = cjs$3.generateChildLogger(t2, this.name);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, rt$1(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot$1(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class xt {
  constructor(e, t2, i2) {
    this.core = e, this.logger = t2, this.name = et, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s2) => (this.isInitialized(), this.keychain.has(s2)), this.getClientId = async () => {
      this.isInitialized();
      const s2 = await this.getClientSeed(), r2 = generateKeyPair(s2);
      return encodeIss(r2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s2 = kn();
      return this.setPrivateKey(s2.publicKey, s2.privateKey);
    }, this.signJWT = async (s2) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), o2 = generateKeyPair(r2), a3 = Vn(), h4 = tt;
      return await signJWT(a3, s2, h4, o2);
    }, this.generateSharedKey = (s2, r2, o2) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s2), h4 = Mn(a3, r2);
      return this.setSymKey(h4, o2);
    }, this.setSymKey = async (s2, r2) => {
      this.isInitialized();
      const o2 = r2 || Kn(s2);
      return await this.keychain.set(o2, s2), o2;
    }, this.deleteKeyPair = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.deleteSymKey = async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }, this.encode = async (s2, r2, o2) => {
      this.isInitialized();
      const a3 = Ae(o2), h4 = safeJsonStringify(r2);
      if (qn(a3)) {
        const y3 = a3.senderPublicKey, M2 = a3.receiverPublicKey;
        s2 = await this.generateSharedKey(y3, M2);
      }
      const l2 = this.getSymKey(s2), { type: d3, senderPublicKey: p3 } = a3;
      return xn({ type: d3, symKey: l2, message: h4, senderPublicKey: p3 });
    }, this.decode = async (s2, r2, o2) => {
      this.isInitialized();
      const a3 = Hn(r2, o2);
      if (qn(a3)) {
        const h4 = a3.receiverPublicKey, l2 = a3.senderPublicKey;
        s2 = await this.generateSharedKey(h4, l2);
      }
      try {
        const h4 = this.getSymKey(s2), l2 = Fn({ symKey: h4, encoded: r2 });
        return safeJsonParse(l2);
      } catch (h4) {
        this.logger.error(`Failed to decode message from topic: '${s2}', clientId: '${await this.getClientId()}'`), this.logger.error(h4);
      }
    }, this.getPayloadType = (s2) => {
      const r2 = ee$1(s2);
      return j$1(r2.type);
    }, this.getPayloadSenderPublicKey = (s2) => {
      const r2 = ee$1(s2);
      return r2.senderPublicKey ? toString(r2.senderPublicKey, p$1) : void 0;
    }, this.core = e, this.logger = cjs$3.generateChildLogger(t2, this.name), this.keychain = i2 || new Pt(this.core, this.logger);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t2) {
    return await this.keychain.set(e, t2), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(de$1);
    } catch {
      e = Vn(), await this.keychain.set(de$1, e);
    }
    return mr(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ot extends a$2 {
  constructor(e, t2) {
    super(e, t2), this.logger = e, this.core = t2, this.messages = /* @__PURE__ */ new Map(), this.name = rt, this.version = nt, this.initialized = false, this.storagePrefix = O, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i2 = await this.getRelayerMessages();
          typeof i2 < "u" && (this.messages = i2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i2);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i2, s2) => {
      this.isInitialized();
      const r2 = Ln(s2);
      let o2 = this.messages.get(i2);
      return typeof o2 > "u" && (o2 = {}), typeof o2[r2] < "u" || (o2[r2] = s2, this.messages.set(i2, o2), await this.persist()), r2;
    }, this.get = (i2) => {
      this.isInitialized();
      let s2 = this.messages.get(i2);
      return typeof s2 > "u" && (s2 = {}), s2;
    }, this.has = (i2, s2) => {
      this.isInitialized();
      const r2 = this.get(i2), o2 = Ln(s2);
      return typeof r2[o2] < "u";
    }, this.del = async (i2) => {
      this.isInitialized(), this.messages.delete(i2), await this.persist();
    }, this.logger = cjs$3.generateChildLogger(e, this.name), this.core = t2;
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, rt$1(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ot$1(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class vr extends u$1 {
  constructor(e, t2) {
    super(e, t2), this.relayer = e, this.logger = t2, this.events = new eventsExports.EventEmitter(), this.name = at, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$4.toMiliseconds(cjs$4.TEN_SECONDS * 2), this.needsTransportRestart = false, this.publish = async (i2, s2, r2) => {
      var o2;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s2, opts: r2 } });
      try {
        const a3 = (r2 == null ? void 0 : r2.ttl) || ot, h4 = vt$1(r2), l2 = (r2 == null ? void 0 : r2.prompt) || false, d3 = (r2 == null ? void 0 : r2.tag) || 0, p3 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), y3 = { topic: i2, message: s2, opts: { ttl: a3, relay: h4, prompt: l2, tag: d3, id: p3 } }, M2 = setTimeout(() => this.queue.set(p3, y3), this.publishTimeout);
        try {
          await await ut$1(this.rpcPublish(i2, s2, a3, h4, l2, d3, p3), this.publishTimeout, `Failed to publish payload, please try again. id:${p3} tag:${d3}`), this.removeRequestFromQueue(p3), this.relayer.events.emit(D$1.publish, y3);
        } catch (u3) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (o2 = r2 == null ? void 0 : r2.internal) != null && o2.throwOnFailedPublish)
            throw this.removeRequestFromQueue(p3), u3;
          return;
        } finally {
          clearTimeout(M2);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s2, opts: r2 } });
      } catch (a3) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a3), a3;
      }
    }, this.on = (i2, s2) => {
      this.events.on(i2, s2);
    }, this.once = (i2, s2) => {
      this.events.once(i2, s2);
    }, this.off = (i2, s2) => {
      this.events.off(i2, s2);
    }, this.removeListener = (i2, s2) => {
      this.events.removeListener(i2, s2);
    }, this.relayer = e, this.logger = cjs$3.generateChildLogger(t2, this.name), this.registerEventListeners();
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  rpcPublish(e, t2, i2, s2, r2, o2, a3) {
    var h4, l2, d3, p3;
    const y3 = { method: Et$1(s2.protocol).publish, params: { topic: e, message: t2, ttl: i2, prompt: r2, tag: o2 }, id: a3 };
    return w$3((h4 = y3.params) == null ? void 0 : h4.prompt) && ((l2 = y3.params) == null || delete l2.prompt), w$3((d3 = y3.params) == null ? void 0 : d3.tag) && ((p3 = y3.params) == null || delete p3.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y3 }), this.relayer.request(y3);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t2, message: i2, opts: s2 } = e;
      await this.publish(t2, i2, s2);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(D$1.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(D$1.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Ir {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t2) => {
      const i2 = this.get(e);
      this.exists(e, t2) || this.map.set(e, [...i2, t2]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t2) => this.get(e).includes(t2), this.delete = (e, t2) => {
      if (typeof t2 > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i2 = this.get(e);
      if (!this.exists(e, t2))
        return;
      const s2 = i2.filter((r2) => r2 !== t2);
      if (!s2.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s2);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Cr = Object.defineProperty, Rr = Object.defineProperties, _r = Object.getOwnPropertyDescriptors, At = Object.getOwnPropertySymbols, Tr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, zt = (n3, e, t2) => e in n3 ? Cr(n3, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : n3[e] = t2, q$1 = (n3, e) => {
  for (var t2 in e || (e = {}))
    Tr.call(e, t2) && zt(n3, t2, e[t2]);
  if (At)
    for (var t2 of At(e))
      Sr.call(e, t2) && zt(n3, t2, e[t2]);
  return n3;
}, De = (n3, e) => Rr(n3, _r(e));
class Nt extends d2 {
  constructor(e, t2) {
    super(e, t2), this.relayer = e, this.logger = t2, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir(), this.events = new eventsExports.EventEmitter(), this.name = mt, this.version = bt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i2, s2) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } });
      try {
        const r2 = vt$1(s2), o2 = { topic: i2, relay: r2 };
        this.pending.set(i2, o2);
        const a3 = await this.rpcSubscribe(i2, r2);
        return this.onSubscribe(a3, o2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } }), a3;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }, this.unsubscribe = async (i2, s2) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s2 == null ? void 0 : s2.id) < "u" ? await this.unsubscribeById(i2, s2.id, s2) : await this.unsubscribeByTopic(i2, s2);
    }, this.isSubscribed = async (i2) => {
      if (this.topics.includes(i2))
        return true;
      const s2 = `${this.pendingSubscriptionWatchLabel}_${i2}`;
      return await new Promise((r2, o2) => {
        const a3 = new cjs$4.Watch();
        a3.start(s2);
        const h4 = setInterval(() => {
          !this.pending.has(i2) && this.topics.includes(i2) && (clearInterval(h4), a3.stop(s2), r2(true)), a3.elapsed(s2) >= ft && (clearInterval(h4), a3.stop(s2), o2(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (i2, s2) => {
      this.events.on(i2, s2);
    }, this.once = (i2, s2) => {
      this.events.once(i2, s2);
    }, this.off = (i2, s2) => {
      this.events.off(i2, s2);
    }, this.removeListener = (i2, s2) => {
      this.events.removeListener(i2, s2);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = cjs$3.generateChildLogger(t2, this.name), this.clientId = "";
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t2) {
    let i2 = false;
    try {
      i2 = this.getSubscription(e).topic === t2;
    } catch {
    }
    return i2;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t2) {
    const i2 = this.topicMap.get(e);
    await Promise.all(i2.map(async (s2) => await this.unsubscribeById(e, s2, t2)));
  }
  async unsubscribeById(e, t2, i2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t2, opts: i2 } });
    try {
      const s2 = vt$1(i2);
      await this.rpcUnsubscribe(e, t2, s2);
      const r2 = U$2("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t2, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t2, opts: i2 } });
    } catch (s2) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s2), s2;
    }
  }
  async rpcSubscribe(e, t2) {
    const i2 = { method: Et$1(t2.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      await await ut$1(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D$1.connection_stalled);
    }
    return Ln(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t2 = e[0].relay, i2 = { method: Et$1(t2.protocol).batchSubscribe, params: { topics: e.map((s2) => s2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      return await await ut$1(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D$1.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t2, i2) {
    const s2 = { method: Et$1(i2.protocol).unsubscribe, params: { topic: e, id: t2 } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 }), this.relayer.request(s2);
  }
  onSubscribe(e, t2) {
    this.setSubscription(e, De(q$1({}, t2), { id: e })), this.pending.delete(t2.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t2) => {
      this.setSubscription(t2.id, q$1({}, t2)), this.pending.delete(t2.topic);
    });
  }
  async onUnsubscribe(e, t2, i2) {
    this.events.removeAllListeners(t2), this.hasSubscription(t2, e) && this.deleteSubscription(t2, i2), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t2) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t2 }), this.addSubscription(e, t2));
  }
  addSubscription(e, t2) {
    this.subscriptions.set(e, q$1({}, t2)), this.topicMap.set(t2.topic, e), this.events.emit(w$1.created, t2);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t2 = this.subscriptions.get(e);
    if (!t2) {
      const { message: i2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t2;
  }
  deleteSubscription(e, t2) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t2 });
    const i2 = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i2.topic, e), this.events.emit(w$1.deleted, De(q$1({}, i2), { reason: t2 }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(w$1.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t2 = 0; t2 < e; t2++) {
        const i2 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i2);
      }
    }
    this.events.emit(w$1.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t2 } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t2);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t2 = await this.rpcBatchSubscribe(e);
    k(t2) && this.onBatchSubscribe(t2.map((i2, s2) => De(q$1({}, e[s2]), { id: i2 })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t2) => {
      e.push(t2);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(D$1.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(D$1.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(w$1.created, async (e) => {
      const t2 = w$1.created;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e }), await this.persist();
    }), this.events.on(w$1.deleted, async (e) => {
      const t2 = w$1.deleted;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t2 = setInterval(() => {
        this.restartInProgress || (clearInterval(t2), e());
      }, this.pollingInterval);
    });
  }
}
var Pr = Object.defineProperty, Ut = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Lt = (n3, e, t2) => e in n3 ? Pr(n3, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : n3[e] = t2, Ar = (n3, e) => {
  for (var t2 in e || (e = {}))
    xr.call(e, t2) && Lt(n3, t2, e[t2]);
  if (Ut)
    for (var t2 of Ut(e))
      Or.call(e, t2) && Lt(n3, t2, e[t2]);
  return n3;
};
class $t extends g$4 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = ut, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (t2) => {
      this.logger.debug("Publishing Request Payload");
      const i2 = t2.id;
      try {
        await this.toEstablishConnection();
        const s2 = this.provider.request(t2);
        return this.requestsInFlight.set(i2, { promise: s2, request: t2 }), await s2;
      } catch (s2) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s2), s2;
      } finally {
        this.requestsInFlight.delete(i2);
      }
    }, this.onPayloadHandler = (t2) => {
      this.onProviderPayload(t2);
    }, this.onConnectHandler = () => {
      this.events.emit(D$1.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t2) => {
      this.logger.error(t2), this.events.emit(D$1.error, t2), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(P$1.payload, this.onPayloadHandler), this.provider.on(P$1.connect, this.onConnectHandler), this.provider.on(P$1.disconnect, this.onDisconnectHandler), this.provider.on(P$1.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? cjs$3.generateChildLogger(e.logger, this.name) : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: e.logger || ct })), this.messages = new Ot(this.logger, e.core), this.subscriber = new Nt(this, this.logger), this.publisher = new vr(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge$1, this.projectId = e.projectId, this.bundleId = Jn(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${pe$1}...`), await this.restartTransport(pe$1);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, pt);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t2, i2) {
    this.isInitialized(), await this.publisher.publish(e, t2, i2), await this.recordMessageEvent({ topic: e, message: t2, publishedAt: Date.now() });
  }
  async subscribe(e, t2) {
    var i2;
    this.isInitialized();
    let s2 = ((i2 = this.subscriber.topicMap.get(e)) == null ? void 0 : i2[0]) || "";
    if (s2)
      return s2;
    let r2;
    const o2 = (a3) => {
      a3.topic === e && (this.subscriber.off(w$1.created, o2), r2());
    };
    return await Promise.all([new Promise((a3) => {
      r2 = a3, this.subscriber.on(w$1.created, o2);
    }), new Promise(async (a3) => {
      s2 = await this.subscriber.subscribe(e, t2), a3();
    })]), s2;
  }
  async unsubscribe(e, t2) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t2);
  }
  on(e, t2) {
    this.events.on(e, t2);
  }
  once(e, t2) {
    this.events.once(e, t2);
  }
  off(e, t2) {
    this.events.off(e, t2);
  }
  removeListener(e, t2) {
    this.events.removeListener(e, t2);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await ut$1(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
      try {
        await Promise.all([new Promise((t2) => {
          if (!this.initialized)
            return t2();
          this.subscriber.once(w$1.resubscribed, () => {
            t2();
          });
        }), new Promise(async (t2, i2) => {
          try {
            await ut$1(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s2) {
            i2(s2);
            return;
          }
          t2();
        })]);
      } catch (t2) {
        this.logger.error(t2);
        const i2 = t2;
        if (!this.isConnectionStalled(i2.message))
          throw t2;
        this.provider.events.emit(P$1.disconnect);
      } finally {
        this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await rr$1())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t2) => e.includes(t2));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider(new f(Xn({ sdkVersion: gt, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t2, message: i2 } = e;
    await this.messages.set(t2, i2);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t2, message: i2 } = e;
    if (!i2 || i2.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i2}`), true;
    if (!await this.subscriber.isSubscribed(t2))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t2}`), true;
    const s2 = this.messages.has(t2, i2);
    return s2 && this.logger.debug(`Ignoring duplicate message: ${i2}`), s2;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(lt))
        return;
      const t2 = e.params, { topic: i2, message: s2, publishedAt: r2 } = t2.data, o2 = { topic: i2, message: s2, publishedAt: r2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar({ type: "event", event: t2.id }, o2)), this.events.emit(t2.id, o2), await this.acknowledgePayload(e), await this.onMessageEvent(o2);
    } else
      isJsonRpcResponse(e) && this.events.emit(D$1.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D$1.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t2 = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t2);
  }
  unregisterProviderListeners() {
    this.provider.off(P$1.payload, this.onPayloadHandler), this.provider.off(P$1.connect, this.onConnectHandler), this.provider.off(P$1.disconnect, this.onDisconnectHandler), this.provider.off(P$1.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(D$1.connection_stalled, () => {
      this.restartTransport().catch((t2) => this.logger.error(t2));
    });
    let e = await rr$1();
    or$1(async (t2) => {
      this.initialized && e !== t2 && (e = t2, t2 ? await this.restartTransport().catch((i2) => this.logger.error(i2)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((i2) => this.logger.error(i2))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(D$1.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, cjs$4.toMiliseconds(dt)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t2 = setInterval(() => {
            this.connected && (clearInterval(t2), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var zr = Object.defineProperty, Ft = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable, Mt = (n3, e, t2) => e in n3 ? zr(n3, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : n3[e] = t2, kt = (n3, e) => {
  for (var t2 in e || (e = {}))
    Nr.call(e, t2) && Mt(n3, t2, e[t2]);
  if (Ft)
    for (var t2 of Ft(e))
      Ur.call(e, t2) && Mt(n3, t2, e[t2]);
  return n3;
};
class Kt extends p$2 {
  constructor(e, t2, i2, s2 = O, r2 = void 0) {
    super(e, t2, i2, s2), this.core = e, this.logger = t2, this.name = i2, this.map = /* @__PURE__ */ new Map(), this.version = Dt, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o2) => {
        this.getKey && o2 !== null && !w$3(o2) ? this.map.set(this.getKey(o2), o2) : Lt$1(o2) ? this.map.set(o2.id, o2) : xt$1(o2) && this.map.set(o2.topic, o2);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (o2, a3) => {
      this.isInitialized(), this.map.has(o2) ? await this.update(o2, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o2, value: a3 }), this.map.set(o2, a3), await this.persist());
    }, this.get = (o2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o2 }), this.getData(o2)), this.getAll = (o2) => (this.isInitialized(), o2 ? this.values.filter((a3) => Object.keys(o2).every((h4) => Gi(a3[h4], o2[h4]))) : this.values), this.update = async (o2, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o2, update: a3 });
      const h4 = kt(kt({}, this.getData(o2)), a3);
      this.map.set(o2, h4), await this.persist();
    }, this.delete = async (o2, a3) => {
      this.isInitialized(), this.map.has(o2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o2, reason: a3 }), this.map.delete(o2), await this.persist());
    }, this.logger = cjs$3.generateChildLogger(t2, this.name), this.storagePrefix = s2, this.getKey = r2;
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t2 = this.map.get(e);
    if (!t2) {
      const { message: i2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t2;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t2 } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Bt {
  constructor(e, t2) {
    this.core = e, this.logger = t2, this.name = Et, this.version = wt, this.events = new EventEmitter$1(), this.initialized = false, this.storagePrefix = O, this.ignoredPayloadTypes = [_$1], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i2])];
    }, this.create = async () => {
      this.isInitialized();
      const i2 = Vn(), s2 = await this.core.crypto.setSymKey(i2), r2 = pt$1(cjs$4.FIVE_MINUTES), o2 = { protocol: ht }, a3 = { topic: s2, expiry: r2, relay: o2, active: false }, h4 = Rt$1({ protocol: this.core.protocol, version: this.core.version, topic: s2, symKey: i2, relay: o2, expiryTimestamp: r2 });
      return await this.pairings.set(s2, a3), await this.core.relayer.subscribe(s2), this.core.expirer.set(s2, r2), { topic: s2, uri: h4 };
    }, this.pair = async (i2) => {
      this.isInitialized(), this.isValidPair(i2);
      const { topic: s2, symKey: r2, relay: o2, expiryTimestamp: a3 } = Pt$1(i2.uri);
      let h4;
      if (this.pairings.keys.includes(s2) && (h4 = this.pairings.get(s2), h4.active))
        throw new Error(`Pairing already exists: ${s2}. Please try again with a new connection URI.`);
      const l2 = a3 || pt$1(cjs$4.FIVE_MINUTES), d3 = { topic: s2, relay: o2, expiry: l2, active: false };
      return await this.pairings.set(s2, d3), this.core.expirer.set(s2, l2), i2.activatePairing && await this.activate({ topic: s2 }), this.events.emit(V.create, d3), this.core.crypto.keychain.has(s2) || (await this.core.crypto.setSymKey(r2, s2), await this.core.relayer.subscribe(s2, { relay: o2 })), d3;
    }, this.activate = async ({ topic: i2 }) => {
      this.isInitialized();
      const s2 = pt$1(cjs$4.THIRTY_DAYS);
      await this.pairings.update(i2, { active: true, expiry: s2 }), this.core.expirer.set(i2, s2);
    }, this.ping = async (i2) => {
      this.isInitialized(), await this.isValidPing(i2);
      const { topic: s2 } = i2;
      if (this.pairings.keys.includes(s2)) {
        const r2 = await this.sendRequest(s2, "wc_pairingPing", {}), { done: o2, resolve: a3, reject: h4 } = at$1();
        this.events.once(yt$1("pairing_ping", r2), ({ error: l2 }) => {
          l2 ? h4(l2) : a3();
        }), await o2();
      }
    }, this.updateExpiry = async ({ topic: i2, expiry: s2 }) => {
      this.isInitialized(), await this.pairings.update(i2, { expiry: s2 });
    }, this.updateMetadata = async ({ topic: i2, metadata: s2 }) => {
      this.isInitialized(), await this.pairings.update(i2, { peerMetadata: s2 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i2) => {
      this.isInitialized(), await this.isValidDisconnect(i2);
      const { topic: s2 } = i2;
      this.pairings.keys.includes(s2) && (await this.sendRequest(s2, "wc_pairingDelete", U$2("USER_DISCONNECTED")), await this.deletePairing(s2));
    }, this.sendRequest = async (i2, s2, r2) => {
      const o2 = formatJsonRpcRequest(s2, r2), a3 = await this.core.crypto.encode(i2, o2), h4 = $[s2].req;
      return this.core.history.set(i2, o2), this.core.relayer.publish(i2, a3, h4), o2.id;
    }, this.sendResult = async (i2, s2, r2) => {
      const o2 = formatJsonRpcResult(i2, r2), a3 = await this.core.crypto.encode(s2, o2), h4 = await this.core.history.get(s2, i2), l2 = $[h4.request.method].res;
      await this.core.relayer.publish(s2, a3, l2), await this.core.history.resolve(o2);
    }, this.sendError = async (i2, s2, r2) => {
      const o2 = formatJsonRpcError(i2, r2), a3 = await this.core.crypto.encode(s2, o2), h4 = await this.core.history.get(s2, i2), l2 = $[h4.request.method] ? $[h4.request.method].res : $.unregistered_method.res;
      await this.core.relayer.publish(s2, a3, l2), await this.core.history.resolve(o2);
    }, this.deletePairing = async (i2, s2) => {
      await this.core.relayer.unsubscribe(i2), await Promise.all([this.pairings.delete(i2, U$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i2), s2 ? Promise.resolve() : this.core.expirer.del(i2)]);
    }, this.cleanup = async () => {
      const i2 = this.pairings.getAll().filter((s2) => mt$1(s2.expiry));
      await Promise.all(i2.map((s2) => this.deletePairing(s2.topic)));
    }, this.onRelayEventRequest = (i2) => {
      const { topic: s2, payload: r2 } = i2;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s2, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s2, r2);
        default:
          return this.onUnknownRpcMethodRequest(s2, r2);
      }
    }, this.onRelayEventResponse = async (i2) => {
      const { topic: s2, payload: r2 } = i2, o2 = (await this.core.history.get(s2, r2.id)).request.method;
      switch (o2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s2, r2);
        default:
          return this.onUnknownRpcMethodResponse(o2);
      }
    }, this.onPairingPingRequest = async (i2, s2) => {
      const { id: r2 } = s2;
      try {
        this.isValidPing({ topic: i2 }), await this.sendResult(r2, i2, true), this.events.emit(V.ping, { id: r2, topic: i2 });
      } catch (o2) {
        await this.sendError(r2, i2, o2), this.logger.error(o2);
      }
    }, this.onPairingPingResponse = (i2, s2) => {
      const { id: r2 } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(yt$1("pairing_ping", r2), {}) : isJsonRpcError(s2) && this.events.emit(yt$1("pairing_ping", r2), { error: s2.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i2, s2) => {
      const { id: r2 } = s2;
      try {
        this.isValidDisconnect({ topic: i2 }), await this.deletePairing(i2), this.events.emit(V.delete, { id: r2, topic: i2 });
      } catch (o2) {
        await this.sendError(r2, i2, o2), this.logger.error(o2);
      }
    }, this.onUnknownRpcMethodRequest = async (i2, s2) => {
      const { id: r2, method: o2 } = s2;
      try {
        if (this.registeredMethods.includes(o2))
          return;
        const a3 = U$2("WC_METHOD_UNSUPPORTED", o2);
        await this.sendError(r2, i2, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(r2, i2, a3), this.logger.error(a3);
      }
    }, this.onUnknownRpcMethodResponse = (i2) => {
      this.registeredMethods.includes(i2) || this.logger.error(U$2("WC_METHOD_UNSUPPORTED", i2));
    }, this.isValidPair = (i2) => {
      var s2;
      if (!Gt$1(i2)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `pair() params: ${i2}`);
        throw new Error(o2);
      }
      if (!Kt$1(i2.uri)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `pair() uri: ${i2.uri}`);
        throw new Error(o2);
      }
      const r2 = Pt$1(i2.uri);
      if (!((s2 = r2 == null ? void 0 : r2.relay) != null && s2.protocol)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o2);
      }
      if (!(r2 != null && r2.symKey)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o2);
      }
      if (r2 != null && r2.expiryTimestamp && cjs$4.toMiliseconds(r2 == null ? void 0 : r2.expiryTimestamp) < Date.now()) {
        const { message: o2 } = N$1("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o2);
      }
    }, this.isValidPing = async (i2) => {
      if (!Gt$1(i2)) {
        const { message: r2 } = N$1("MISSING_OR_INVALID", `ping() params: ${i2}`);
        throw new Error(r2);
      }
      const { topic: s2 } = i2;
      await this.isValidPairingTopic(s2);
    }, this.isValidDisconnect = async (i2) => {
      if (!Gt$1(i2)) {
        const { message: r2 } = N$1("MISSING_OR_INVALID", `disconnect() params: ${i2}`);
        throw new Error(r2);
      }
      const { topic: s2 } = i2;
      await this.isValidPairingTopic(s2);
    }, this.isValidPairingTopic = async (i2) => {
      if (!g$3(i2, false)) {
        const { message: s2 } = N$1("MISSING_OR_INVALID", `pairing topic should be a string: ${i2}`);
        throw new Error(s2);
      }
      if (!this.pairings.keys.includes(i2)) {
        const { message: s2 } = N$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i2}`);
        throw new Error(s2);
      }
      if (mt$1(this.pairings.get(i2).expiry)) {
        await this.deletePairing(i2);
        const { message: s2 } = N$1("EXPIRED", `pairing topic: ${i2}`);
        throw new Error(s2);
      }
    }, this.core = e, this.logger = cjs$3.generateChildLogger(t2, this.name), this.pairings = new Kt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(D$1.message, async (e) => {
      const { topic: t2, message: i2 } = e;
      if (!this.pairings.keys.includes(t2) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i2)))
        return;
      const s2 = await this.core.crypto.decode(t2, i2);
      try {
        isJsonRpcRequest(s2) ? (this.core.history.set(t2, s2), this.onRelayEventRequest({ topic: t2, payload: s2 })) : isJsonRpcResponse(s2) && (await this.core.history.resolve(s2), await this.onRelayEventResponse({ topic: t2, payload: s2 }), this.core.history.delete(t2, s2.id));
      } catch (r2) {
        this.logger.error(r2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(v2.expired, async (e) => {
      const { topic: t2 } = ft$1(e.target);
      t2 && this.pairings.keys.includes(t2) && (await this.deletePairing(t2, true), this.events.emit(V.expire, { topic: t2 }));
    });
  }
}
class Vt extends h$2 {
  constructor(e, t2) {
    super(e, t2), this.core = e, this.logger = t2, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = vt, this.version = It, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.records.set(i2.id, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i2, s2, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i2, request: s2, chainId: r2 }), this.records.has(s2.id))
        return;
      const o2 = { id: s2.id, topic: i2, request: { method: s2.method, params: s2.params || null }, chainId: r2, expiry: pt$1(cjs$4.THIRTY_DAYS) };
      this.records.set(o2.id, o2), this.events.emit(R$1.created, o2);
    }, this.resolve = async (i2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i2 }), !this.records.has(i2.id))
        return;
      const s2 = await this.getRecord(i2.id);
      typeof s2.response > "u" && (s2.response = isJsonRpcError(i2) ? { error: i2.error } : { result: i2.result }, this.records.set(s2.id, s2), this.events.emit(R$1.updated, s2));
    }, this.get = async (i2, s2) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i2, id: s2 }), await this.getRecord(s2)), this.delete = (i2, s2) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s2 }), this.values.forEach((r2) => {
        if (r2.topic === i2) {
          if (typeof s2 < "u" && r2.id !== s2)
            return;
          this.records.delete(r2.id), this.events.emit(R$1.deleted, r2);
        }
      });
    }, this.exists = async (i2, s2) => (this.isInitialized(), this.records.has(s2) ? (await this.getRecord(s2)).topic === i2 : false), this.on = (i2, s2) => {
      this.events.on(i2, s2);
    }, this.once = (i2, s2) => {
      this.events.once(i2, s2);
    }, this.off = (i2, s2) => {
      this.events.off(i2, s2);
    }, this.removeListener = (i2, s2) => {
      this.events.removeListener(i2, s2);
    }, this.logger = cjs$3.generateChildLogger(t2, this.name);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t2) => {
      if (typeof t2.response < "u")
        return;
      const i2 = { topic: t2.topic, request: formatJsonRpcRequest(t2.request.method, t2.request.params, t2.id), chainId: t2.chainId };
      return e.push(i2);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t2 = this.records.get(e);
    if (!t2) {
      const { message: i2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t2;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(R$1.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t2 } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(R$1.created, (e) => {
      const t2 = R$1.created;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e }), this.persist();
    }), this.events.on(R$1.updated, (e) => {
      const t2 = R$1.updated;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e }), this.persist();
    }), this.events.on(R$1.deleted, (e) => {
      const t2 = R$1.deleted;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e }), this.persist();
    }), this.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        cjs$4.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class qt extends E {
  constructor(e, t2) {
    super(e, t2), this.core = e, this.logger = t2, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Ct, this.version = Rt, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.expirations.set(i2.target, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i2) => {
      try {
        const s2 = this.formatTarget(i2);
        return typeof this.getExpiration(s2) < "u";
      } catch {
        return false;
      }
    }, this.set = (i2, s2) => {
      this.isInitialized();
      const r2 = this.formatTarget(i2), o2 = { target: r2, expiry: s2 };
      this.expirations.set(r2, o2), this.checkExpiry(r2, o2), this.events.emit(v2.created, { target: r2, expiration: o2 });
    }, this.get = (i2) => {
      this.isInitialized();
      const s2 = this.formatTarget(i2);
      return this.getExpiration(s2);
    }, this.del = (i2) => {
      if (this.isInitialized(), this.has(i2)) {
        const s2 = this.formatTarget(i2), r2 = this.getExpiration(s2);
        this.expirations.delete(s2), this.events.emit(v2.deleted, { target: s2, expiration: r2 });
      }
    }, this.on = (i2, s2) => {
      this.events.on(i2, s2);
    }, this.once = (i2, s2) => {
      this.events.once(i2, s2);
    }, this.off = (i2, s2) => {
      this.events.off(i2, s2);
    }, this.removeListener = (i2, s2) => {
      this.events.removeListener(i2, s2);
    }, this.logger = cjs$3.generateChildLogger(t2, this.name);
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return lt$1(e);
    if (typeof e == "number")
      return dt$1(e);
    const { message: t2 } = N$1("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t2);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(v2.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t2 } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t2 = this.expirations.get(e);
    if (!t2) {
      const { message: i2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t2;
  }
  checkExpiry(e, t2) {
    const { expiry: i2 } = t2;
    cjs$4.toMiliseconds(i2) - Date.now() <= 0 && this.expire(e, t2);
  }
  expire(e, t2) {
    this.expirations.delete(e), this.events.emit(v2.expired, { target: e, expiration: t2 });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t2) => this.checkExpiry(t2, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(v2.created, (e) => {
      const t2 = v2.created;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e }), this.persist();
    }), this.events.on(v2.expired, (e) => {
      const t2 = v2.expired;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e }), this.persist();
    }), this.events.on(v2.deleted, (e) => {
      const t2 = v2.deleted;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class jt extends y$1 {
  constructor(e, t2) {
    super(e, t2), this.projectId = e, this.logger = t2, this.name = Z, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i2) => {
      if (this.verifyDisabled || $$1() || !D$2())
        return;
      const s2 = this.getVerifyUrl(i2 == null ? void 0 : i2.verifyUrl);
      this.verifyUrl !== s2 && this.removeIframe(), this.verifyUrl = s2;
      try {
        await this.createIframe();
      } catch (r2) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = ee;
        try {
          await this.createIframe();
        } catch (r2) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i2) => {
      this.initialized ? this.sendPost(i2.attestationId) : (this.addToQueue(i2.attestationId), await this.init());
    }, this.resolve = async (i2) => {
      if (this.isDevEnv)
        return "";
      const s2 = this.getVerifyUrl(i2 == null ? void 0 : i2.verifyUrl);
      let r2;
      try {
        r2 = await this.fetchAttestation(i2.attestationId, s2);
      } catch (o2) {
        this.logger.info(`failed to resolve attestation: ${i2.attestationId} from url: ${s2}`), this.logger.info(o2), r2 = await this.fetchAttestation(i2.attestationId, ee);
      }
      return r2;
    }, this.fetchAttestation = async (i2, s2) => {
      this.logger.info(`resolving attestation: ${i2} from url: ${s2}`);
      const r2 = this.startAbortTimer(cjs$4.ONE_SECOND * 2), o2 = await fetch(`${s2}/attestation/${i2}`, { signal: this.abortController.signal });
      return clearTimeout(r2), o2.status === 200 ? await o2.json() : void 0;
    }, this.addToQueue = (i2) => {
      this.queue.push(i2);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i2) => this.sendPost(i2)), this.queue = []);
    }, this.sendPost = (i2) => {
      var s2;
      try {
        if (!this.iframe)
          return;
        (s2 = this.iframe.contentWindow) == null || s2.postMessage(i2, "*"), this.logger.info(`postMessage sent: ${i2} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i2;
      const s2 = (r2) => {
        r2.data === "verify_ready" && (this.initialized = true, this.processQueue(), window.removeEventListener("message", s2), i2());
      };
      await Promise.race([new Promise((r2) => {
        if (document.getElementById(Z))
          return r2();
        window.addEventListener("message", s2);
        const o2 = document.createElement("iframe");
        o2.id = Z, o2.src = `${this.verifyUrl}/${this.projectId}`, o2.style.display = "none", document.body.append(o2), this.iframe = o2, i2 = r2;
      }), new Promise((r2, o2) => setTimeout(() => {
        window.removeEventListener("message", s2), o2("verify iframe load timeout");
      }, cjs$4.toMiliseconds(cjs$4.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.getVerifyUrl = (i2) => {
      let s2 = i2 || F$1;
      return _t.includes(s2) || (this.logger.info(`verify url: ${s2}, not included in trusted list, assigning default: ${F$1}`), s2 = F$1), s2;
    }, this.logger = cjs$3.generateChildLogger(t2, this.name), this.verifyUrl = F$1, this.abortController = new AbortController(), this.isDevEnv = te$1() && process.env.IS_VITEST;
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$4.toMiliseconds(e));
  }
}
class Gt extends v$1 {
  constructor(e, t2) {
    super(e, t2), this.projectId = e, this.logger = t2, this.context = Tt, this.registerDeviceToken = async (i2) => {
      const { clientId: s2, token: r2, notificationType: o2, enableEncrypted: a3 = false } = i2, h4 = `${St}/${this.projectId}/clients`;
      await Yi(h4, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s2, type: o2, token: r2, always_raw: a3 }) });
    }, this.logger = cjs$3.generateChildLogger(t2, this.context);
  }
}
var Lr = Object.defineProperty, Yt = Object.getOwnPropertySymbols, $r = Object.prototype.hasOwnProperty, Fr = Object.prototype.propertyIsEnumerable, Ht = (n3, e, t2) => e in n3 ? Lr(n3, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : n3[e] = t2, Jt = (n3, e) => {
  for (var t2 in e || (e = {}))
    $r.call(e, t2) && Ht(n3, t2, e[t2]);
  if (Yt)
    for (var t2 of Yt(e))
      Fr.call(e, t2) && Ht(n3, t2, e[t2]);
  return n3;
};
class te extends n$1 {
  constructor(e) {
    super(e), this.protocol = le$1, this.version = We, this.name = Q$1, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (i2, s2) => this.events.on(i2, s2), this.once = (i2, s2) => this.events.once(i2, s2), this.off = (i2, s2) => this.events.off(i2, s2), this.removeListener = (i2, s2) => this.events.removeListener(i2, s2), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || ge$1, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const t2 = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Qe.logger }));
    this.logger = cjs$3.generateChildLogger(t2, this.name), this.heartbeat = new cjs$5.HeartBeat(), this.crypto = new xt(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Vt(this, this.logger), this.expirer = new qt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h$3(Jt(Jt({}, Ze), e == null ? void 0 : e.storageOptions)), this.relayer = new $t({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Bt(this, this.logger), this.verify = new jt(this.projectId || "", this.logger), this.echoClient = new Gt(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t2 = new te(e);
    await t2.initialize();
    const i2 = await t2.crypto.getClientId();
    return await t2.storage.setItem(yt, i2), t2;
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const Mr = te;
const J = "wc", F = 2, X = "client", G = `${J}@${F}:${X}:`, M = { name: X, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, H = "WALLETCONNECT_DEEPLINK_CHOICE", oe = "proposal", ae = "Proposal expired", ce = "session", L = cjs$4.SEVEN_DAYS, le = "engine", R = { wc_sessionPropose: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1115 } } }, U$1 = { min: cjs$4.FIVE_MINUTES, max: cjs$4.SEVEN_DAYS }, I = { idle: "IDLE", active: "ACTIVE" }, pe = "request", he = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var as = Object.defineProperty, cs = Object.defineProperties, ls = Object.getOwnPropertyDescriptors, de = Object.getOwnPropertySymbols, ps = Object.prototype.hasOwnProperty, hs = Object.prototype.propertyIsEnumerable, ue = (w3, r2, e) => r2 in w3 ? as(w3, r2, { enumerable: true, configurable: true, writable: true, value: e }) : w3[r2] = e, g$1 = (w3, r2) => {
  for (var e in r2 || (r2 = {}))
    ps.call(r2, e) && ue(w3, e, r2[e]);
  if (de)
    for (var e of de(r2))
      hs.call(r2, e) && ue(w3, e, r2[e]);
  return w3;
}, D = (w3, r2) => cs(w3, ls(r2));
class ds extends w$4 {
  constructor(r2) {
    super(r2), this.name = le, this.events = new EventEmitter$1(), this.initialized = false, this.ignoredPayloadTypes = [_$1], this.requestQueue = { state: I.idle, queue: [] }, this.sessionRequestQueue = { state: I.idle, queue: [] }, this.requestQueueDelay = cjs$4.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(R) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$4.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      await this.isInitialized();
      const s2 = D(g$1({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s2);
      const { pairingTopic: t2, requiredNamespaces: i2, optionalNamespaces: n3, sessionProperties: o2, relays: a3 } = s2;
      let c2 = t2, p3, d3 = false;
      if (c2 && (d3 = this.client.core.pairing.pairings.get(c2).active), !c2 || !d3) {
        const { topic: T2, uri: _3 } = await this.client.core.pairing.create();
        c2 = T2, p3 = _3;
      }
      const h4 = await this.client.core.crypto.generateKeyPair(), N2 = R.wc_sessionPropose.req.ttl || cjs$4.FIVE_MINUTES, m2 = pt$1(N2), f2 = g$1({ requiredNamespaces: i2, optionalNamespaces: n3, relays: a3 ?? [{ protocol: ht }], proposer: { publicKey: h4, metadata: this.client.metadata }, expiryTimestamp: m2 }, o2 && { sessionProperties: o2 }), { reject: k2, resolve: O2, done: we } = at$1(N2, ae);
      if (this.events.once(yt$1("session_connect"), async ({ error: T2, session: _3 }) => {
        if (T2)
          k2(T2);
        else if (_3) {
          _3.self.publicKey = h4;
          const B2 = D(g$1({}, _3), { requiredNamespaces: f2.requiredNamespaces, optionalNamespaces: f2.optionalNamespaces });
          await this.client.session.set(_3.topic, B2), await this.setExpiry(_3.topic, _3.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: _3.peer.metadata }), O2(B2);
        }
      }), !c2) {
        const { message: T2 } = N$1("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(T2);
      }
      const W2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: f2, throwOnFailedPublish: true });
      return await this.setProposal(W2, g$1({ id: W2 }, f2)), { uri: p3, approval: we };
    }, this.pair = async (e) => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      await this.isInitialized(), await this.isValidApprove(e);
      const { id: s2, relayProtocol: t2, namespaces: i2, sessionProperties: n3 } = e, o2 = this.client.proposal.get(s2);
      let { pairingTopic: a3, proposer: c2, requiredNamespaces: p3, optionalNamespaces: d3 } = o2;
      a3 = a3 || "";
      const h4 = await this.client.core.crypto.generateKeyPair(), N2 = c2.publicKey, m2 = await this.client.core.crypto.generateSharedKey(h4, N2);
      a3 && s2 && (await this.client.core.pairing.updateMetadata({ topic: a3, metadata: c2.metadata }), await this.sendResult({ id: s2, topic: a3, result: { relay: { protocol: t2 ?? "irn" }, responderPublicKey: h4 } }), await this.client.proposal.delete(s2, U$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a3 }));
      const f2 = g$1({ relay: { protocol: t2 ?? "irn" }, namespaces: i2, pairingTopic: a3, controller: { publicKey: h4, metadata: this.client.metadata }, expiry: pt$1(L) }, n3 && { sessionProperties: n3 });
      await this.client.core.relayer.subscribe(m2);
      const k2 = D(g$1({}, f2), { topic: m2, requiredNamespaces: p3, optionalNamespaces: d3, pairingTopic: a3, acknowledged: false, self: f2.controller, peer: { publicKey: c2.publicKey, metadata: c2.metadata }, controller: h4 });
      await this.client.session.set(m2, k2);
      try {
        await this.sendRequest({ topic: m2, method: "wc_sessionSettle", params: f2, throwOnFailedPublish: true });
      } catch (O2) {
        throw this.client.logger.error(O2), this.client.session.delete(m2, U$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(m2), O2;
      }
      return await this.setExpiry(m2, pt$1(L)), { topic: m2, acknowledged: () => new Promise((O2) => setTimeout(() => O2(this.client.session.get(m2)), 500)) };
    }, this.reject = async (e) => {
      await this.isInitialized(), await this.isValidReject(e);
      const { id: s2, reason: t2 } = e, { pairingTopic: i2 } = this.client.proposal.get(s2);
      i2 && (await this.sendError(s2, i2, t2), await this.client.proposal.delete(s2, U$2("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      await this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s2, namespaces: t2 } = e, i2 = await this.sendRequest({ topic: s2, method: "wc_sessionUpdate", params: { namespaces: t2 } }), { done: n3, resolve: o2, reject: a3 } = at$1();
      return this.events.once(yt$1("session_update", i2), ({ error: c2 }) => {
        c2 ? a3(c2) : o2();
      }), await this.client.session.update(s2, { namespaces: t2 }), { acknowledged: n3 };
    }, this.extend = async (e) => {
      await this.isInitialized(), await this.isValidExtend(e);
      const { topic: s2 } = e, t2 = await this.sendRequest({ topic: s2, method: "wc_sessionExtend", params: {} }), { done: i2, resolve: n3, reject: o2 } = at$1();
      return this.events.once(yt$1("session_extend", t2), ({ error: a3 }) => {
        a3 ? o2(a3) : n3();
      }), await this.setExpiry(s2, pt$1(L)), { acknowledged: i2 };
    }, this.request = async (e) => {
      await this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s2, request: t2, topic: i2, expiry: n3 = R.wc_sessionRequest.req.ttl } = e, o2 = payloadId(), { done: a3, resolve: c2, reject: p3 } = at$1(n3, "Request expired. Please try again.");
      return this.events.once(yt$1("session_request", o2), ({ error: d3, result: h4 }) => {
        d3 ? p3(d3) : c2(h4);
      }), await Promise.all([new Promise(async (d3) => {
        await this.sendRequest({ clientRpcId: o2, topic: i2, method: "wc_sessionRequest", params: { request: D(g$1({}, t2), { expiryTimestamp: pt$1(n3) }), chainId: s2 }, expiry: n3, throwOnFailedPublish: true }).catch((h4) => p3(h4)), this.client.events.emit("session_request_sent", { topic: i2, request: t2, chainId: s2, id: o2 }), d3();
      }), new Promise(async (d3) => {
        const h4 = await ht$1(this.client.core.storage, H);
        gt$1({ id: o2, topic: i2, wcDeepLink: h4 }), d3();
      }), a3()]).then((d3) => d3[2]);
    }, this.respond = async (e) => {
      await this.isInitialized(), await this.isValidRespond(e);
      const { topic: s2, response: t2 } = e, { id: i2 } = t2;
      isJsonRpcResult(t2) ? await this.sendResult({ id: i2, topic: s2, result: t2.result, throwOnFailedPublish: true }) : isJsonRpcError(t2) && await this.sendError(i2, s2, t2.error), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      await this.isInitialized(), await this.isValidPing(e);
      const { topic: s2 } = e;
      if (this.client.session.keys.includes(s2)) {
        const t2 = await this.sendRequest({ topic: s2, method: "wc_sessionPing", params: {} }), { done: i2, resolve: n3, reject: o2 } = at$1();
        this.events.once(yt$1("session_ping", t2), ({ error: a3 }) => {
          a3 ? o2(a3) : n3();
        }), await i2();
      } else
        this.client.core.pairing.pairings.keys.includes(s2) && await this.client.core.pairing.ping({ topic: s2 });
    }, this.emit = async (e) => {
      await this.isInitialized(), await this.isValidEmit(e);
      const { topic: s2, event: t2, chainId: i2 } = e;
      await this.sendRequest({ topic: s2, method: "wc_sessionEvent", params: { event: t2, chainId: i2 } });
    }, this.disconnect = async (e) => {
      await this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s2 } = e;
      if (this.client.session.keys.includes(s2))
        await this.sendRequest({ topic: s2, method: "wc_sessionDelete", params: U$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: s2, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(s2))
        await this.client.core.pairing.disconnect({ topic: s2 });
      else {
        const { message: t2 } = N$1("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s2}`);
        throw new Error(t2);
      }
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s2) => Mt$1(s2, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const s2 = this.client.core.pairing.pairings.get(e.pairingTopic), t2 = this.client.core.pairing.pairings.getAll().filter((i2) => {
            var n3, o2;
            return ((n3 = i2.peerMetadata) == null ? void 0 : n3.url) && ((o2 = i2.peerMetadata) == null ? void 0 : o2.url) === e.peer.metadata.url && i2.topic && i2.topic !== s2.topic;
          });
          if (t2.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${t2.length} duplicate pairing(s)`), await Promise.all(t2.map((i2) => this.client.core.pairing.disconnect({ topic: i2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s2) {
          this.client.logger.error(s2);
        }
    }, this.deleteSession = async (e) => {
      const { topic: s2, expirerHasDeleted: t2 = false, emitEvent: i2 = true, id: n3 = 0 } = e, { self: o2 } = this.client.session.get(s2);
      await this.client.core.relayer.unsubscribe(s2), await this.client.session.delete(s2, U$2("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o2.publicKey) && await this.client.core.crypto.deleteKeyPair(o2.publicKey), this.client.core.crypto.keychain.has(s2) && await this.client.core.crypto.deleteSymKey(s2), t2 || this.client.core.expirer.del(s2), this.client.core.storage.removeItem(H).catch((a3) => this.client.logger.warn(a3)), this.getPendingSessionRequests().forEach((a3) => {
        a3.topic === s2 && this.deletePendingSessionRequest(a3.id, U$2("USER_DISCONNECTED"));
      }), i2 && this.client.events.emit("session_delete", { id: n3, topic: s2 });
    }, this.deleteProposal = async (e, s2) => {
      await Promise.all([this.client.proposal.delete(e, U$2("USER_DISCONNECTED")), s2 ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s2, t2 = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s2), t2 ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i2) => i2.id !== e), t2 && (this.sessionRequestQueue.state = I.idle, this.client.events.emit("session_request_expire", { id: e }));
    }, this.setExpiry = async (e, s2) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s2 }), this.client.core.expirer.set(e, s2);
    }, this.setProposal = async (e, s2) => {
      await this.client.proposal.set(e, s2), this.client.core.expirer.set(e, pt$1(R.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (e) => {
      const { id: s2, topic: t2, params: i2, verifyContext: n3 } = e, o2 = i2.request.expiryTimestamp || pt$1(R.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(s2, { id: s2, topic: t2, params: i2, verifyContext: n3 }), o2 && this.client.core.expirer.set(s2, o2);
    }, this.sendRequest = async (e) => {
      const { topic: s2, method: t2, params: i2, expiry: n3, relayRpcId: o2, clientRpcId: a3, throwOnFailedPublish: c2 } = e, p3 = formatJsonRpcRequest(t2, i2, a3);
      if (D$2() && he.includes(t2)) {
        const N2 = Ln(JSON.stringify(p3));
        this.client.core.verify.register({ attestationId: N2 });
      }
      const d3 = await this.client.core.crypto.encode(s2, p3), h4 = R[t2].req;
      return n3 && (h4.ttl = n3), o2 && (h4.id = o2), this.client.core.history.set(s2, p3), c2 ? (h4.internal = D(g$1({}, h4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, d3, h4)) : this.client.core.relayer.publish(s2, d3, h4).catch((N2) => this.client.logger.error(N2)), p3.id;
    }, this.sendResult = async (e) => {
      const { id: s2, topic: t2, result: i2, throwOnFailedPublish: n3 } = e, o2 = formatJsonRpcResult(s2, i2), a3 = await this.client.core.crypto.encode(t2, o2), c2 = await this.client.core.history.get(t2, s2), p3 = R[c2.request.method].res;
      n3 ? (p3.internal = D(g$1({}, p3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t2, a3, p3)) : this.client.core.relayer.publish(t2, a3, p3).catch((d3) => this.client.logger.error(d3)), await this.client.core.history.resolve(o2);
    }, this.sendError = async (e, s2, t2) => {
      const i2 = formatJsonRpcError(e, t2), n3 = await this.client.core.crypto.encode(s2, i2), o2 = await this.client.core.history.get(s2, e), a3 = R[o2.request.method].res;
      this.client.core.relayer.publish(s2, n3, a3), await this.client.core.history.resolve(i2);
    }, this.cleanup = async () => {
      const e = [], s2 = [];
      this.client.session.getAll().forEach((t2) => {
        let i2 = false;
        mt$1(t2.expiry) && (i2 = true), this.client.core.crypto.keychain.has(t2.topic) || (i2 = true), i2 && e.push(t2.topic);
      }), this.client.proposal.getAll().forEach((t2) => {
        mt$1(t2.expiryTimestamp) && s2.push(t2.id);
      }), await Promise.all([...e.map((t2) => this.deleteSession({ topic: t2 })), ...s2.map((t2) => this.deleteProposal(t2))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === I.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = I.active;
        const e = this.requestQueue.queue.shift();
        if (e)
          try {
            this.processRequest(e), await new Promise((s2) => setTimeout(s2, 300));
          } catch (s2) {
            this.client.logger.warn(s2);
          }
      }
      this.requestQueue.state = I.idle;
    }, this.processRequest = (e) => {
      const { topic: s2, payload: t2 } = e, i2 = t2.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s2, t2);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s2, t2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s2, t2);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s2, t2);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s2, t2);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s2, t2);
        case "wc_sessionRequest":
          return this.onSessionRequest(s2, t2);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s2, t2);
        default:
          return this.client.logger.info(`Unsupported request method ${i2}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s2, payload: t2 } = e, i2 = (await this.client.core.history.get(s2, t2.id)).request.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s2, t2);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s2, t2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s2, t2);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s2, t2);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s2, t2);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s2, t2);
        default:
          return this.client.logger.info(`Unsupported response method ${i2}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s2 } = e, { message: t2 } = N$1("MISSING_OR_INVALID", `Decoded payload on topic ${s2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(t2);
    }, this.onSessionProposeRequest = async (e, s2) => {
      const { params: t2, id: i2 } = s2;
      try {
        this.isValidConnect(g$1({}, s2.params));
        const n3 = t2.expiryTimestamp || pt$1(R.wc_sessionPropose.req.ttl), o2 = g$1({ id: i2, pairingTopic: e, expiryTimestamp: n3 }, t2);
        await this.setProposal(i2, o2);
        const a3 = Ln(JSON.stringify(s2)), c2 = await this.getVerifyContext(a3, o2.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i2, params: o2, verifyContext: c2 });
      } catch (n3) {
        await this.sendError(i2, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionProposeResponse = async (e, s2) => {
      const { id: t2 } = s2;
      if (isJsonRpcResult(s2)) {
        const { result: i2 } = s2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i2 });
        const n3 = this.client.proposal.get(t2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n3 });
        const o2 = n3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o2 });
        const a3 = i2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a3 });
        const c2 = await this.client.core.crypto.generateSharedKey(o2, a3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
        const p3 = await this.client.core.relayer.subscribe(c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p3 }), await this.client.core.pairing.activate({ topic: e });
      } else
        isJsonRpcError(s2) && (await this.client.proposal.delete(t2, U$2("USER_DISCONNECTED")), this.events.emit(yt$1("session_connect"), { error: s2.error }));
    }, this.onSessionSettleRequest = async (e, s2) => {
      const { id: t2, params: i2 } = s2;
      try {
        this.isValidSessionSettleRequest(i2);
        const { relay: n3, controller: o2, expiry: a3, namespaces: c2, sessionProperties: p3, pairingTopic: d3 } = s2.params, h4 = g$1({ topic: e, relay: n3, expiry: a3, namespaces: c2, acknowledged: true, pairingTopic: d3, requiredNamespaces: {}, optionalNamespaces: {}, controller: o2.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o2.publicKey, metadata: o2.metadata } }, p3 && { sessionProperties: p3 });
        await this.sendResult({ id: s2.id, topic: e, result: true }), this.events.emit(yt$1("session_connect"), { session: h4 }), this.cleanupDuplicatePairings(h4);
      } catch (n3) {
        await this.sendError(t2, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionSettleResponse = async (e, s2) => {
      const { id: t2 } = s2;
      isJsonRpcResult(s2) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(yt$1("session_approve", t2), {})) : isJsonRpcError(s2) && (await this.client.session.delete(e, U$2("USER_DISCONNECTED")), this.events.emit(yt$1("session_approve", t2), { error: s2.error }));
    }, this.onSessionUpdateRequest = async (e, s2) => {
      const { params: t2, id: i2 } = s2;
      try {
        const n3 = `${e}_session_update`, o2 = sr$1.get(n3);
        if (o2 && this.isRequestOutOfSync(o2, i2)) {
          this.client.logger.info(`Discarding out of sync request - ${i2}`);
          return;
        }
        this.isValidUpdate(g$1({ topic: e }, t2)), await this.client.session.update(e, { namespaces: t2.namespaces }), await this.sendResult({ id: i2, topic: e, result: true }), this.client.events.emit("session_update", { id: i2, topic: e, params: t2 }), sr$1.set(n3, i2);
      } catch (n3) {
        await this.sendError(i2, e, n3), this.client.logger.error(n3);
      }
    }, this.isRequestOutOfSync = (e, s2) => parseInt(s2.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, s2) => {
      const { id: t2 } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt$1("session_update", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$1("session_update", t2), { error: s2.error });
    }, this.onSessionExtendRequest = async (e, s2) => {
      const { id: t2 } = s2;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, pt$1(L)), await this.sendResult({ id: t2, topic: e, result: true }), this.client.events.emit("session_extend", { id: t2, topic: e });
      } catch (i2) {
        await this.sendError(t2, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionExtendResponse = (e, s2) => {
      const { id: t2 } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt$1("session_extend", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$1("session_extend", t2), { error: s2.error });
    }, this.onSessionPingRequest = async (e, s2) => {
      const { id: t2 } = s2;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: t2, topic: e, result: true }), this.client.events.emit("session_ping", { id: t2, topic: e });
      } catch (i2) {
        await this.sendError(t2, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionPingResponse = (e, s2) => {
      const { id: t2 } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(yt$1("session_ping", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$1("session_ping", t2), { error: s2.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s2) => {
      const { id: t2 } = s2;
      try {
        this.isValidDisconnect({ topic: e, reason: s2.params }), await Promise.all([new Promise((i2) => {
          this.client.core.relayer.once(D$1.publish, async () => {
            i2(await this.deleteSession({ topic: e, id: t2 }));
          });
        }), this.sendResult({ id: t2, topic: e, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: e, error: U$2("USER_DISCONNECTED") })]);
      } catch (i2) {
        this.client.logger.error(i2);
      }
    }, this.onSessionRequest = async (e, s2) => {
      const { id: t2, params: i2 } = s2;
      try {
        this.isValidRequest(g$1({ topic: e }, i2));
        const n3 = Ln(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i2, t2))), o2 = this.client.session.get(e), a3 = await this.getVerifyContext(n3, o2.peer.metadata), c2 = { id: t2, topic: e, params: i2, verifyContext: a3 };
        await this.setPendingSessionRequest(c2), this.addSessionRequestToSessionRequestQueue(c2), this.processSessionRequestQueue();
      } catch (n3) {
        await this.sendError(t2, e, n3), this.client.logger.error(n3);
      }
    }, this.onSessionRequestResponse = (e, s2) => {
      const { id: t2 } = s2;
      isJsonRpcResult(s2) ? this.events.emit(yt$1("session_request", t2), { result: s2.result }) : isJsonRpcError(s2) && this.events.emit(yt$1("session_request", t2), { error: s2.error });
    }, this.onSessionEventRequest = async (e, s2) => {
      const { id: t2, params: i2 } = s2;
      try {
        const n3 = `${e}_session_event_${i2.event.name}`, o2 = sr$1.get(n3);
        if (o2 && this.isRequestOutOfSync(o2, t2)) {
          this.client.logger.info(`Discarding out of sync request - ${t2}`);
          return;
        }
        this.isValidEmit(g$1({ topic: e }, i2)), this.client.events.emit("session_event", { id: t2, topic: e, params: i2 }), sr$1.set(n3, t2);
      } catch (n3) {
        await this.sendError(t2, e, n3), this.client.logger.error(n3);
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = I.idle, this.processSessionRequestQueue();
      }, cjs$4.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: e, error: s2 }) => {
      const t2 = this.client.core.history.pending;
      t2.length > 0 && t2.filter((i2) => i2.topic === e && i2.request.method === "wc_sessionRequest").forEach((i2) => {
        this.events.emit(yt$1("session_request", i2.request.id), { error: s2 });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === I.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = I.active, this.client.events.emit("session_request", e);
      } catch (s2) {
        this.client.logger.error(s2);
      }
    }, this.onPairingCreated = (e) => {
      if (e.active)
        return;
      const s2 = this.client.proposal.getAll().find((t2) => t2.pairingTopic === e.topic);
      s2 && this.onSessionProposeRequest(e.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: s2.requiredNamespaces, optionalNamespaces: s2.optionalNamespaces, relays: s2.relays, proposer: s2.proposer, sessionProperties: s2.sessionProperties }, s2.id));
    }, this.isValidConnect = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a3);
      }
      const { pairingTopic: s2, requiredNamespaces: t2, optionalNamespaces: i2, sessionProperties: n3, relays: o2 } = e;
      if (w$3(s2) || await this.isValidPairingTopic(s2), !qt$1(o2, true)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `connect() relays: ${o2}`);
        throw new Error(a3);
      }
      !w$3(t2) && B$1(t2) !== 0 && this.validateNamespaces(t2, "requiredNamespaces"), !w$3(i2) && B$1(i2) !== 0 && this.validateNamespaces(i2, "optionalNamespaces"), w$3(n3) || this.validateSessionProps(n3, "sessionProperties");
    }, this.validateNamespaces = (e, s2) => {
      const t2 = Ht$1(e, "connect()", s2);
      if (t2)
        throw new Error(t2.message);
    }, this.isValidApprove = async (e) => {
      if (!Gt$1(e))
        throw new Error(N$1("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s2, namespaces: t2, relayProtocol: i2, sessionProperties: n3 } = e;
      await this.isValidProposalId(s2);
      const o2 = this.client.proposal.get(s2), a3 = ln(t2, "approve()");
      if (a3)
        throw new Error(a3.message);
      const c2 = fn(o2.requiredNamespaces, t2, "approve()");
      if (c2)
        throw new Error(c2.message);
      if (!g$3(i2, true)) {
        const { message: p3 } = N$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i2}`);
        throw new Error(p3);
      }
      w$3(n3) || this.validateSessionProps(n3, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!Gt$1(e)) {
        const { message: i2 } = N$1("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i2);
      }
      const { id: s2, reason: t2 } = e;
      if (await this.isValidProposalId(s2), !Wt(t2)) {
        const { message: i2 } = N$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t2)}`);
        throw new Error(i2);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!Gt$1(e)) {
        const { message: c2 } = N$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(c2);
      }
      const { relay: s2, controller: t2, namespaces: i2, expiry: n3 } = e;
      if (!dn(s2)) {
        const { message: c2 } = N$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const o2 = Ft$1(t2, "onSessionSettleRequest()");
      if (o2)
        throw new Error(o2.message);
      const a3 = ln(i2, "onSessionSettleRequest()");
      if (a3)
        throw new Error(a3.message);
      if (mt$1(n3)) {
        const { message: c2 } = N$1("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s2, namespaces: t2 } = e;
      await this.isValidSessionTopic(s2);
      const i2 = this.client.session.get(s2), n3 = ln(t2, "update()");
      if (n3)
        throw new Error(n3.message);
      const o2 = fn(i2.requiredNamespaces, t2, "update()");
      if (o2)
        throw new Error(o2.message);
    }, this.isValidExtend = async (e) => {
      if (!Gt$1(e)) {
        const { message: t2 } = N$1("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t2);
      }
      const { topic: s2 } = e;
      await this.isValidSessionTopic(s2);
    }, this.isValidRequest = async (e) => {
      if (!Gt$1(e)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s2, request: t2, chainId: i2, expiry: n3 } = e;
      await this.isValidSessionTopic(s2);
      const { namespaces: o2 } = this.client.session.get(s2);
      if (!Qt(o2, i2)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `request() chainId: ${i2}`);
        throw new Error(a3);
      }
      if (!zt$1(t2)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `request() ${JSON.stringify(t2)}`);
        throw new Error(a3);
      }
      if (!Zt(o2, i2, t2.method)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `request() method: ${t2.method}`);
        throw new Error(a3);
      }
      if (n3 && !tr$1(n3, U$1)) {
        const { message: a3 } = N$1("MISSING_OR_INVALID", `request() expiry: ${n3}. Expiry must be a number (in seconds) between ${U$1.min} and ${U$1.max}`);
        throw new Error(a3);
      }
    }, this.isValidRespond = async (e) => {
      var s2;
      if (!Gt$1(e)) {
        const { message: n3 } = N$1("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(n3);
      }
      const { topic: t2, response: i2 } = e;
      try {
        await this.isValidSessionTopic(t2);
      } catch (n3) {
        throw (s2 = e == null ? void 0 : e.response) != null && s2.id && this.cleanupAfterResponse(e), n3;
      }
      if (!Yt$1(i2)) {
        const { message: n3 } = N$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i2)}`);
        throw new Error(n3);
      }
    }, this.isValidPing = async (e) => {
      if (!Gt$1(e)) {
        const { message: t2 } = N$1("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t2);
      }
      const { topic: s2 } = e;
      await this.isValidSessionOrPairingTopic(s2);
    }, this.isValidEmit = async (e) => {
      if (!Gt$1(e)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o2);
      }
      const { topic: s2, event: t2, chainId: i2 } = e;
      await this.isValidSessionTopic(s2);
      const { namespaces: n3 } = this.client.session.get(s2);
      if (!Qt(n3, i2)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `emit() chainId: ${i2}`);
        throw new Error(o2);
      }
      if (!Jt$1(t2)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t2)}`);
        throw new Error(o2);
      }
      if (!Xt(n3, i2, t2.name)) {
        const { message: o2 } = N$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t2)}`);
        throw new Error(o2);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!Gt$1(e)) {
        const { message: t2 } = N$1("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t2);
      }
      const { topic: s2 } = e;
      await this.isValidSessionOrPairingTopic(s2);
    }, this.getVerifyContext = async (e, s2) => {
      const t2 = { verified: { verifyUrl: s2.verifyUrl || F$1, validation: "UNKNOWN", origin: s2.url || "" } };
      try {
        const i2 = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: s2.verifyUrl });
        i2 && (t2.verified.origin = i2.origin, t2.verified.isScam = i2.isScam, t2.verified.validation = i2.origin === new URL(s2.url).origin ? "VALID" : "INVALID");
      } catch (i2) {
        this.client.logger.info(i2);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(t2)}`), t2;
    }, this.validateSessionProps = (e, s2) => {
      Object.values(e).forEach((t2) => {
        if (!g$3(t2, false)) {
          const { message: i2 } = N$1("MISSING_OR_INVALID", `${s2} must be in Record<string, string> format. Received: ${JSON.stringify(t2)}`);
          throw new Error(i2);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: r2 } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(r2);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(D$1.message, async (r2) => {
      const { topic: e, message: s2 } = r2;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s2)))
        return;
      const t2 = await this.client.core.crypto.decode(e, s2);
      try {
        isJsonRpcRequest(t2) ? (this.client.core.history.set(e, t2), this.onRelayEventRequest({ topic: e, payload: t2 })) : isJsonRpcResponse(t2) ? (await this.client.core.history.resolve(t2), await this.onRelayEventResponse({ topic: e, payload: t2 }), this.client.core.history.delete(e, t2.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: t2 });
      } catch (i2) {
        this.client.logger.error(i2);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(v2.expired, async (r2) => {
      const { topic: e, id: s2 } = ft$1(r2.target);
      if (s2 && this.client.pendingRequest.keys.includes(s2))
        return await this.deletePendingSessionRequest(s2, N$1("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession({ topic: e, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e })) : s2 && (await this.deleteProposal(s2, true), this.client.events.emit("proposal_expire", { id: s2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(V.create, (r2) => this.onPairingCreated(r2));
  }
  isValidPairingTopic(r2) {
    if (!g$3(r2, false)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `pairing topic should be a string: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r2)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt$1(this.client.core.pairing.pairings.get(r2).expiry)) {
      const { message: e } = N$1("EXPIRED", `pairing topic: ${r2}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r2) {
    if (!g$3(r2, false)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `session topic should be a string: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r2)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `session topic doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt$1(this.client.session.get(r2).expiry)) {
      await this.deleteSession({ topic: r2 });
      const { message: e } = N$1("EXPIRED", `session topic: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.core.crypto.keychain.has(r2)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `session topic does not exist in keychain: ${r2}`);
      throw await this.deleteSession({ topic: r2 }), new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r2) {
    if (this.client.session.keys.includes(r2))
      await this.isValidSessionTopic(r2);
    else if (this.client.core.pairing.pairings.keys.includes(r2))
      this.isValidPairingTopic(r2);
    else if (g$3(r2, false)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r2}`);
      throw new Error(e);
    } else {
      const { message: e } = N$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r2}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r2) {
    if (!Bt$1(r2)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `proposal id should be a number: ${r2}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r2)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${r2}`);
      throw new Error(e);
    }
    if (mt$1(this.client.proposal.get(r2).expiryTimestamp)) {
      await this.deleteProposal(r2);
      const { message: e } = N$1("EXPIRED", `proposal id: ${r2}`);
      throw new Error(e);
    }
  }
}
class us extends Kt {
  constructor(r2, e) {
    super(r2, e, oe, G), this.core = r2, this.logger = e;
  }
}
class ge extends Kt {
  constructor(r2, e) {
    super(r2, e, ce, G), this.core = r2, this.logger = e;
  }
}
class gs extends Kt {
  constructor(r2, e) {
    super(r2, e, pe, G, (s2) => s2.id), this.core = r2, this.logger = e;
  }
}
class Q extends b$1 {
  constructor(r2) {
    super(r2), this.protocol = J, this.version = F, this.name = M.name, this.events = new eventsExports.EventEmitter(), this.on = (s2, t2) => this.events.on(s2, t2), this.once = (s2, t2) => this.events.once(s2, t2), this.off = (s2, t2) => this.events.off(s2, t2), this.removeListener = (s2, t2) => this.events.removeListener(s2, t2), this.removeAllListeners = (s2) => this.events.removeAllListeners(s2), this.connect = async (s2) => {
      try {
        return await this.engine.connect(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.pair = async (s2) => {
      try {
        return await this.engine.pair(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.approve = async (s2) => {
      try {
        return await this.engine.approve(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.reject = async (s2) => {
      try {
        return await this.engine.reject(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.update = async (s2) => {
      try {
        return await this.engine.update(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.extend = async (s2) => {
      try {
        return await this.engine.extend(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.request = async (s2) => {
      try {
        return await this.engine.request(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.respond = async (s2) => {
      try {
        return await this.engine.respond(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.ping = async (s2) => {
      try {
        return await this.engine.ping(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.emit = async (s2) => {
      try {
        return await this.engine.emit(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.disconnect = async (s2) => {
      try {
        return await this.engine.disconnect(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.find = (s2) => {
      try {
        return this.engine.find(s2);
      } catch (t2) {
        throw this.logger.error(t2.message), t2;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }, this.name = (r2 == null ? void 0 : r2.name) || M.name, this.metadata = (r2 == null ? void 0 : r2.metadata) || Qn();
    const e = typeof (r2 == null ? void 0 : r2.logger) < "u" && typeof (r2 == null ? void 0 : r2.logger) != "string" ? r2.logger : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: (r2 == null ? void 0 : r2.logger) || M.logger }));
    this.core = (r2 == null ? void 0 : r2.core) || new Mr(r2), this.logger = cjs$3.generateChildLogger(e, this.name), this.session = new ge(this.core, this.logger), this.proposal = new us(this.core, this.logger), this.pendingRequest = new gs(this.core, this.logger), this.engine = new ds(this);
  }
  static async init(r2) {
    const e = new Q(r2);
    return await e.initialize(), e;
  }
  get context() {
    return cjs$3.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (r2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(r2.message), r2;
    }
  }
}
var P = Object.defineProperty, x = Object.defineProperties, N = Object.getOwnPropertyDescriptors, j = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable, W = (e, t2, s2) => t2 in e ? P(e, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e[t2] = s2, q = (e, t2) => {
  for (var s2 in t2 || (t2 = {}))
    U.call(t2, s2) && W(e, s2, t2[s2]);
  if (j)
    for (var s2 of j(t2))
      T.call(t2, s2) && W(e, s2, t2[s2]);
  return e;
}, A = (e, t2) => x(e, N(t2)), S = (e, t2, s2) => {
  if (!t2.has(e))
    throw TypeError("Cannot " + s2);
}, a2 = (e, t2, s2) => (S(e, t2, "read from private field"), s2 ? s2.call(e) : t2.get(e)), l = (e, t2, s2) => {
  if (t2.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e) : t2.set(e, s2);
}, y2 = (e, t2, s2, d3) => (S(e, t2, "write to private field"), d3 ? d3.call(e, s2) : t2.set(e, s2), s2), o = (e, t2, s2) => (S(e, t2, "access private method"), s2), h3, p2, w2, i, u2, _2, n2, r, m, g2;
let z$1 = class z {
  constructor(t2) {
    l(this, u2), l(this, n2), l(this, m), l(this, h3, void 0), l(this, p2, void 0), l(this, w2, void 0), l(this, i, void 0), y2(this, h3, t2), y2(this, p2, o(this, u2, _2).call(this)), o(this, n2, r).call(this);
  }
  async connect(t2, showModal = true) {
    const { requiredNamespaces: s2, optionalNamespaces: d3 } = t2;
    return new Promise(async (C2, b3) => {
      await o(this, n2, r).call(this);
      if (showModal) {
        const E2 = a2(this, p2).subscribeModal((c2) => {
          c2.open || (E2(), b3(new Error("Modal closed")));
        }), { uri: O2, approval: I2 } = await a2(this, i).connect(t2);
        if (O2) {
          const c2 = /* @__PURE__ */ new Set();
          s2 && Object.values(s2).forEach(({ chains: f2 }) => {
            f2 && f2.forEach((v3) => c2.add(v3));
          }), d3 && Object.values(d3).forEach(({ chains: f2 }) => {
            f2 && f2.forEach((v3) => c2.add(v3));
          }), await a2(this, p2).openModal({ uri: O2, chains: Array.from(c2) });
        }
        try {
          const c2 = await I2();
          C2(c2);
        } catch (c2) {
          b3(c2);
        } finally {
          E2(), a2(this, p2).closeModal();
        }
      } else {
        const { uri: O2, approval: I2 } = await a2(this, i).connect(t2);
        if (O2) {
          const c2 = /* @__PURE__ */ new Set();
          s2 && Object.values(s2).forEach(({ chains: f2 }) => {
            f2 && f2.forEach((v3) => c2.add(v3));
          }), d3 && Object.values(d3).forEach(({ chains: f2 }) => {
            f2 && f2.forEach((v3) => c2.add(v3));
          });
          try {
            window && window.aleo && window.aleo.connectPuzzle({
              wc: {
                uri: O2
              }
            });
            const session = await I2();
            C2(session);
          } catch (err) {
            console.error(err);
            b3(err);
          }
        }
      }
    });
  }
  async disconnect(t2) {
    await o(this, n2, r).call(this), await a2(this, i).disconnect(t2);
  }
  async request(t2) {
    return await o(this, n2, r).call(this), await a2(this, i).request(t2);
  }
  async getSessions() {
    return await o(this, n2, r).call(this), a2(this, i).session.getAll();
  }
  async getSession() {
    return await o(this, n2, r).call(this), a2(this, i).session.getAll().at(-1);
  }
  async onSessionEvent(t2) {
    await o(this, n2, r).call(this), a2(this, i).on("session_event", t2);
  }
  async offSessionEvent(t2) {
    await o(this, n2, r).call(this), a2(this, i).off("session_event", t2);
  }
  async onSessionUpdate(t2) {
    await o(this, n2, r).call(this), a2(this, i).on("session_update", t2);
  }
  async offSessionUpdate(t2) {
    await o(this, n2, r).call(this), a2(this, i).off("session_update", t2);
  }
  async onSessionDelete(t2) {
    await o(this, n2, r).call(this), a2(this, i).on("session_delete", t2);
  }
  async offSessionDelete(t2) {
    await o(this, n2, r).call(this), a2(this, i).off("session_delete", t2);
  }
  async onSessionExpire(t2) {
    await o(this, n2, r).call(this), a2(this, i).on("session_expire", t2);
  }
  async offSessionExpire(t2) {
    await o(this, n2, r).call(this), a2(this, i).off("session_expire", t2);
  }
};
h3 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new WeakMap(), w2 = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), u2 = /* @__PURE__ */ new WeakSet(), _2 = function() {
  const { modalOptions: e, projectId: t2 } = a2(this, h3);
  return new d$1(A(q({}, e), { projectId: t2 }));
}, n2 = /* @__PURE__ */ new WeakSet(), r = async function() {
  return a2(this, i) ? true : (!a2(this, w2) && typeof window < "u" && y2(this, w2, o(this, m, g2).call(this)), a2(this, w2));
}, m = /* @__PURE__ */ new WeakSet(), g2 = async function() {
  y2(
    this,
    i,
    await Q.init({
      metadata: a2(this, h3).metadata,
      projectId: a2(this, h3).projectId,
      relayUrl: a2(this, h3).relayUrl
    })
  );
  const e = await a2(this, i).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys2 = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys2.push(key);
      }
    }
    return keys2;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_3, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
const getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
const ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
const quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x2) => x2.status === "aborted";
const isDirty = (x2) => x2.status === "dirty";
const isValid = (x2) => x2.status === "valid";
const isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description: description2 } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description: description2 };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description: description2 };
}
class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description2) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description: description2
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
const uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
const emojiRegex = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
class ZodString extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys2 = util.objectKeys(shape);
    return this._cached = { shape, keys: keys2 };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types2, params) => {
  return new ZodUnion({
    options: types2,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
const getDiscriminator = (type2) => {
  if (type2 instanceof ZodLazy) {
    return getDiscriminator(type2.schema);
  } else if (type2 instanceof ZodEffects) {
    return getDiscriminator(type2.innerType());
  } else if (type2 instanceof ZodLiteral) {
    return [type2.value];
  } else if (type2 instanceof ZodEnum) {
    return type2.options;
  } else if (type2 instanceof ZodNativeEnum) {
    return Object.keys(type2.enum);
  } else if (type2 instanceof ZodDefault) {
    return getDiscriminator(type2._def.innerType);
  } else if (type2 instanceof ZodUndefined) {
    return [void 0];
  } else if (type2 instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type2 of options) {
      const discriminatorValues = getDiscriminator(type2.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type2);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a3, b3) {
  const aType = getParsedType(a3);
  const bType = getParsedType(b3);
  if (a3 === b3) {
    return { valid: true, data: a3 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b3);
    const sharedKeys = util.objectKeys(a3).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a3, ...b3 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a3[key], b3[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a3.length !== b3.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a3.length; index++) {
      const itemA = a3[index];
      const itemB = b3[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a3 === +b3) {
    return { valid: true, data: a3 };
  } else {
    return { valid: false };
  }
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}
class ZodMap extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn2(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn2(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base3 = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base3))
          return base3;
        const result = effect.transform(base3.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base3) => {
          if (!isValid(base3))
            return base3;
          return Promise.resolve(effect.transform(base3.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type2, params) => {
  return new ZodOptional({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type2, params) => {
  return new ZodNullable({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type2, params) => {
  return new ZodDefault({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            }
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          }
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type2, params) => {
  return new ZodCatch({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a3, b3) {
    return new ZodPipeline({
      in: a3,
      out: b3,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
const custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p3 = typeof params === "function" ? params(data) : params;
        const _fatal = (_b = (_a = p3.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p3 === "string" ? { message: p3 } : p3;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
const NEVER = INVALID;
var z2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});
const aleoAddressRegex = /^aleo1[a-z0-9]{58}$/i;
const aleoViewKeyRegex = /^AViewKey1[a-z0-9]{44}$/i;
const aleoPrivateKeyRegex = /^APrivateKey1[a-z0-9]{47}$/i;
const aleoTransitionIdRegex = /^au1[a-z0-9]{58}$/i;
const aleoTransactionIdRegex = /^at1[a-z0-9]{58}$/i;
const aleoFieldRegex = /^\d+field$/;
const aleoU32 = /^\d+u32$/;
const aleoU64 = /^\d+u64$/;
const zodAddress = z2.string().regex(aleoAddressRegex);
const zodViewKey = z2.string().regex(aleoViewKeyRegex);
const zodPrivateKey = z2.string().regex(aleoPrivateKeyRegex);
z2.string().regex(aleoTransitionIdRegex);
const zodTransactionId = z2.string().regex(aleoTransactionIdRegex);
const zodField = z2.string().regex(aleoFieldRegex);
const zodU32 = z2.string().regex(aleoU32);
const zodU64 = z2.string().regex(aleoU64);
var InputOutputType;
(function(InputOutputType2) {
  InputOutputType2["Record"] = "record";
  InputOutputType2["OutputRecord"] = "outputRecord";
  InputOutputType2["Public"] = "public";
  InputOutputType2["Private"] = "private";
  InputOutputType2["Constant"] = "constant";
  InputOutputType2["Future"] = "future";
  InputOutputType2["ExternalRecord"] = "external_record";
})(InputOutputType || (InputOutputType = {}));
exports.EventType = void 0;
(function(EventType) {
  EventType["Deploy"] = "Deploy";
  EventType["Execute"] = "Execute";
  EventType["Send"] = "Send";
  EventType["Receive"] = "Receive";
  EventType["Join"] = "Join";
  EventType["Split"] = "Split";
  EventType["Shield"] = "Shield";
  EventType["Unshield"] = "Unshield";
  EventType["Referral"] = "Referral";
})(exports.EventType || (exports.EventType = {}));
exports.EventStatus = void 0;
(function(EventStatus) {
  EventStatus["Creating"] = "Creating";
  EventStatus["Pending"] = "Pending";
  EventStatus["Settled"] = "Settled";
  EventStatus["Failed"] = "Failed";
})(exports.EventStatus || (exports.EventStatus = {}));
exports.Visibility = void 0;
(function(Visibility) {
  Visibility["Private"] = "Private";
  Visibility["Public"] = "Public";
})(exports.Visibility || (exports.Visibility = {}));
exports.Network = void 0;
(function(Network) {
  Network["AleoTestnet"] = "AleoTestnet";
  Network["AleoCanarynet"] = "AleoCanarynet";
  Network["AleoMainnet"] = "AleoMainnet";
})(exports.Network || (exports.Network = {}));
const zodEventType = z2.nativeEnum(exports.EventType);
const zodEventStatus = z2.nativeEnum(exports.EventStatus);
const zodNetwork = z2.nativeEnum(exports.Network);
const zodVisibility = z2.nativeEnum(exports.Visibility);
const wc_aleo_methods = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvent",
  "getEvents",
  "createSharedState",
  "importSharedState",
  "requestSignature"
];
const wc_required_aleo_chains = ["aleo:1"];
const wc_optional_aleo_chains = [
  "aleo:0",
  // eventual mainnet
  "aleo:3",
  // new, correct testnet3
  "aleo:4"
  // new, canarynet ?
];
const wc_aleo_chains = [
  ...wc_required_aleo_chains,
  ...wc_optional_aleo_chains
];
const wc_events = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
];
const projectId = "f0aaeffe71b636da453fce042d79d723";
function isAndroid() {
  if (typeof navigator === "undefined") {
    return false;
  }
  return /Android/i.test(navigator.userAgent);
}
const web3modal_puzzle_props_android = {
  projectId,
  chains: ["aleo:3"],
  enableExplorer: true,
  explorerRecommendedWalletIds: [
    "7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a"
  ],
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "puzzleapp://",
        universal: ""
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
};
const web3modal_puzzle_props_default = {
  projectId,
  chains: wc_aleo_chains,
  enableExplorer: false,
  explorerRecommendedWalletIds: [
    "7ee7b95f4ae8b3e08aab5158be7fe8e71f79bcd3717594254b34fa1f3cd4611a"
  ],
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "puzzleapp://",
        universal: ""
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: "https://walletconnect.puzzle.online/"
      }
    },
    {
      id: "avail",
      name: "Avail Wallet",
      links: {
        native: "avail://",
        universal: "https://avail.global"
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png",
    avail: "https://i.imgur.com/GxNn8BO.png"
  }
};
const web3modal_puzzle_props = isAndroid() ? web3modal_puzzle_props_android : web3modal_puzzle_props_default;
const signClient_puzzleProps = {
  requiredNamespaces: {
    aleo: {
      methods: wc_aleo_methods,
      chains: web3modal_puzzle_props.chains,
      events: wc_events
    }
  }
};
const networkToChainId = (network, includePrefix = true) => {
  let chain;
  switch (network) {
    case exports.Network.AleoMainnet:
      chain = "aleo:0";
      break;
    case exports.Network.AleoTestnet:
      chain = "aleo:1";
      break;
    case exports.Network.AleoCanarynet:
      chain = "aleo:0";
      break;
  }
  return includePrefix ? chain : chain.replace("aleo:", "");
};
const chainIdToNetwork = (chainId) => {
  switch (chainId) {
    case "aleo:0":
      return exports.Network.AleoCanarynet;
    case "aleo:1":
      return exports.Network.AleoTestnet;
    case "aleo:3":
      return exports.Network.AleoTestnet;
  }
};
const name = "@puzzlehq/sdk-core";
const displayName = "Puzzle SDK";
const version = "0.3.2-beta.8";
const description = "Your portal to privacy";
const main = "./dist/puzzle.cjs.js";
const module$1 = "./dist/puzzle.es.js";
const browser$1 = "./dist/puzzle.umd.js";
const types = "./dist/types/src/index.d.ts";
const exports$1 = {
  ".": {
    "import": "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
};
const type = "module";
const scripts = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
};
const repository = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
};
const dependencies = {
  "@puzzlehq/types": "1.0.13",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
};
const peerDependencies = {
  buffer: "^6.0.3"
};
const keywords = [
  "puzzle",
  "cryptocurrency wallet",
  "privacy",
  "aleo",
  "web3",
  "crypto",
  "typescript"
];
const author = "Puzzle";
const license = "ISC";
const bugs = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
};
const homepage = "https://github.com/puzzlehq/puzzle-sdk#readme";
const pkg = {
  name,
  displayName,
  version,
  description,
  main,
  module: module$1,
  browser: browser$1,
  types,
  "private": false,
  exports: exports$1,
  type,
  scripts,
  repository,
  dependencies,
  peerDependencies,
  keywords,
  author,
  license,
  bugs,
  homepage
};
const emitter = new EventEmitter$1();
exports.connection = void 0;
async function configureConnection(options) {
  let disconnectSessions = false;
  const thisVersion = pkg.version;
  const prevVersion = localStorage.getItem("puzzle_sdk_version");
  if (thisVersion !== prevVersion) {
    console.log(
      `${pkg.name}: Updated from ` + prevVersion + " to " + thisVersion + "!"
    );
    localStorage.setItem("puzzle_sdk_version", thisVersion);
    disconnectSessions = true;
  }
  exports.connection = new z$1({
    projectId: options.projectId ?? projectId,
    metadata: {
      name: options.dAppName,
      description: options.dAppDescription,
      url: window ? window.location.hostname : options.dAppUrl ?? "NO URL",
      icons: [options.dAppIconURL]
    },
    modalOptions: { ...web3modal_puzzle_props }
  });
  if (disconnectSessions) {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    try {
      disconnectOnVersionChange(exports.connection, options.onDisconnect);
    } catch (e) {
      console.error(e);
    }
  }
  exports.connection.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    options.onDisconnect && options.onDisconnect();
  });
  exports.connection.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    options.onDisconnect && options.onDisconnect();
  });
  const choice = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
  if (choice && JSON.parse(choice).name !== "Android") {
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  }
  if (typeof window !== "undefined") {
    window.puzzleSdkConnection = exports.connection;
  }
  return exports.connection;
}
async function disconnectOnVersionChange(connection2, onDisconnect) {
  const session = await (connection2 == null ? void 0 : connection2.getSession());
  if (session) {
    console.log("Disconnecting session", session);
    onDisconnect && onDisconnect();
    connection2.disconnect({
      topic: session.topic,
      reason: U$2("USER_DISCONNECTED")
    });
  }
}
async function getWalletConnectModalSignClient() {
  return new Promise((resolve) => {
    if (exports.connection) {
      resolve(exports.connection);
    } else if (typeof window !== "undefined" && (window == null ? void 0 : window.puzzleSdkConnection)) {
      resolve(window.puzzleSdkConnection);
    } else {
      const interval = setInterval(() => {
        if (exports.connection) {
          clearInterval(interval);
          resolve(exports.connection);
        }
      }, 200);
    }
    const choice = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
    if (choice && JSON.parse(choice).name !== "Android") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
  });
}
const checkForDesktopConnection = async (sessionTopic) => {
  var _a;
  const injectedConnection = !!((_a = window == null ? void 0 : window.aleo) == null ? void 0 : _a.puzzleWalletClient);
  if (!injectedConnection) {
    console.log("!!window?.aleo?.puzzleWalletClient", injectedConnection);
    localStorage.setItem("puzzle-hasInjectedConnection", "false");
    return false;
  }
  try {
    const res = await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic }
    );
    if (res) {
      localStorage.setItem("puzzle-hasInjectedConnection", "true");
      return true;
    } else {
      localStorage.setItem("puzzle-hasInjectedConnection", "false");
      return false;
    }
  } catch (e) {
    console.warn(e);
    localStorage.setItem("puzzle-hasInjectedConnection", "false");
    return false;
  }
};
const hasInjectedConnection = () => {
  var _a;
  const injectedConnection = !!((_a = window == null ? void 0 : window.aleo) == null ? void 0 : _a.puzzleWalletClient);
  if (!injectedConnection) {
    return false;
  }
  const puzzleHasDesktopConnection = localStorage.getItem(
    "puzzle-hasInjectedConnection"
  );
  return puzzleHasDesktopConnection === "true";
};
const getAccount = async (network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await connection.getSession();
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
      return response;
    } catch (e) {
      console.error("getAccount error", e);
      return { error: e.message };
    }
  }
  try {
    const response = await connection.request(query);
    return response;
  } catch (e) {
    console.error("getAccount error", e);
    const error = e.message;
    return { error };
  }
};
const getBalance = async ({
  address,
  network
}) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await connection.getSession();
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0,
        address
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
      return response;
    } catch (e) {
      const error = e.message;
      console.error("getBalance error", e);
      return { error };
    }
  }
  try {
    const response = await connection.request(query);
    return response;
  } catch (e) {
    const error = e.message;
    console.error("getBalance error", e);
    return { error };
  }
};
const connect = async (showModal = true) => {
  const connection = await getWalletConnectModalSignClient();
  if (!connection) {
    throw new Error("call configureConnection() first!");
  }
  const existingSession = await connection.getSession();
  if (existingSession) {
    console.log("Already connected!", existingSession);
    return existingSession;
  }
  try {
    const newSession = await connection.connect({
      requiredNamespaces: {
        aleo: {
          methods: wc_aleo_methods,
          chains: wc_required_aleo_chains,
          events: wc_events
        }
      },
      optionalNamespaces: {
        aleo: {
          chains: wc_optional_aleo_chains,
          methods: wc_aleo_methods,
          events: wc_events
        }
      }
    }, showModal);
    emitter.emit("session_change");
    if (newSession) {
      await checkForDesktopConnection(newSession.topic);
    }
    const choice = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
    if (choice && JSON.parse(choice).name !== "Android") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
    return newSession;
  } catch (e) {
    console.error("connect error", e);
  }
};
const requestCreateEvent = async (requestData, network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  const inputs = requestData == null ? void 0 : requestData.inputs.map((input) => {
    if (typeof input === "string") {
      return input;
    }
    return input.plaintext;
  });
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  try {
    const response = await connection.request({
      topic: session.topic,
      chainId: network ?? "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...requestData,
          inputs
        }
      }
    });
    return response;
  } catch (e) {
    console.error("createEvent error", e);
    const error = e.message;
    return { error };
  }
};
const createSharedState = async (network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.createSharedState.mutate(query);
      return response;
    } catch (e) {
      console.error("createSharedState error", e);
      const error = e.message;
      return { error };
    }
  }
  try {
    const response = await connection.request(query);
    return response;
  } catch (e) {
    console.error("createSharedState error", e);
    const error = e.message;
    return { error };
  }
};
const decrypt = async (ciphertexts, network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.decrypt.query(query);
      return response;
    } catch (e) {
      const error = e.message;
      console.error("decrypt error", e);
      return { error };
    }
  }
  try {
    const response = await connection.request(query);
    return response;
  } catch (e) {
    console.error("decrypt error", e);
    return { error: e.message };
  }
};
const disconnect = async () => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  try {
    try {
      await connection.disconnect({
        reason: U$2("USER_DISCONNECTED"),
        topic: session.topic
      });
      localStorage.removeItem("puzzle-hasInjectedConnection");
      emitter.emit("session_change");
    } catch (e) {
      console.warn(e);
    }
    return {};
  } catch (e) {
    console.error("error disconnecting", e);
    const error = e.message;
    return { error };
  }
};
const getEvent = async ({
  id,
  address,
  network
}) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { event: void 0, error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id,
        address
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.getEvent.query(query);
      return response;
    } catch (e) {
      console.error("getEvent error", e);
      const error = e.message;
      return { error };
    }
  }
  const fetchEvent = async () => {
    const response = await connection.request(query);
    return response;
  };
  try {
    const response = await fetchEvent();
    return response;
  } catch (e) {
    console.error("getEvents error", e);
    const error = e.message;
    return { error };
  }
};
const getEvents = async (filter, network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { events: void 0, error: "no session or connection" };
  }
  if ((filter == null ? void 0 : filter.programId) === "") {
    filter.programId = void 0;
  }
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter,
        page: 0
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.getEvents.query(query);
      return response;
    } catch (e) {
      console.error("getEvents error", e);
      const error = e.message;
      return { error };
    }
  }
  const fetchPage = async (page = 0) => {
    const response = await connection.request(query);
    return response;
  };
  try {
    const response = await fetchPage();
    return response;
  } catch (e) {
    console.error("getEvents error", e);
    const error = e.message;
    return { error };
  }
};
const importSharedState = async (seed, network) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.importSharedState.mutate(query);
      return response;
    } catch (e) {
      console.error("importSharedState error", e);
      const error = e.message;
      return { error };
    }
  }
  try {
    const response = await connection.request(query);
    return response;
  } catch (e) {
    console.error("importSharedState error", e);
    const error = e.message;
    return { error };
  }
};
const getRecords = async ({
  address,
  filter,
  page = 0,
  network
}) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  const query = {
    topic: session.topic,
    chainId: network ?? "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address,
        filter,
        page
      }
    }
  };
  if (hasInjectedConnection()) {
    try {
      const response = await window.aleo.puzzleWalletClient.getRecords.query(query);
      return response;
    } catch (e) {
      console.error("getRecords error", e);
      const error = e.message;
      return { error };
    }
  }
  const fetchPage = async (page2 = 0) => {
    const response = await connection.request(query);
    return response;
  };
  try {
    const response = await fetchPage();
    return response;
  } catch (e) {
    console.error("getRecords error", e);
    const error = e.message;
    return { error };
  }
};
const requestSignature = async ({
  message,
  address,
  network,
  method
}) => {
  const connection = await getWalletConnectModalSignClient();
  const session = await (connection == null ? void 0 : connection.getSession());
  if (!session || !connection) {
    return { error: "no session or connection" };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: "network not in wc_aleo_chains" };
  }
  try {
    const response = await connection.request({
      topic: session.topic,
      chainId: network ?? "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message,
          address: aleoAddressRegex.test(address ?? "") ? address : void 0,
          method
        }
      }
    });
    return response;
  } catch (e) {
    console.error("signature error", e);
    const error = e.message;
    return { error };
  }
};
const PAGE_SIZE = 20;
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs)
    return ms;
  hasRequiredMs = 1;
  var s2 = 1e3;
  var m2 = s2 * 60;
  var h4 = m2 * 60;
  var d3 = h4 * 24;
  var w3 = d3 * 7;
  var y3 = d3 * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type2 = typeof val;
    if (type2 === "string" && val.length > 0) {
      return parse(val);
    } else if (type2 === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n3 = parseFloat(match[1]);
    var type2 = (match[2] || "ms").toLowerCase();
    switch (type2) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n3 * y3;
      case "weeks":
      case "week":
      case "w":
        return n3 * w3;
      case "days":
      case "day":
      case "d":
        return n3 * d3;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n3 * h4;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n3 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n3 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n3;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d3) {
      return Math.round(ms2 / d3) + "d";
    }
    if (msAbs >= h4) {
      return Math.round(ms2 / h4) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms2 / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms2 / s2) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d3) {
      return plural(ms2, msAbs, d3, "day");
    }
    if (msAbs >= h4) {
      return plural(ms2, msAbs, h4, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms2, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms2, msAbs, s2, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n3, name2) {
    var isPlural = msAbs >= n3 * 1.5;
    return Math.round(ms2 / n3) + " " + name2 + (isPlural ? "s" : "");
  }
  return ms;
}
function setup(env2) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce2;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = requireMs();
  createDebug.destroy = destroy;
  Object.keys(env2).forEach((key) => {
    createDebug[key] = env2[key];
  });
  createDebug.names = [];
  createDebug.skips = [];
  createDebug.formatters = {};
  function selectColor(namespace) {
    let hash2 = 0;
    for (let i2 = 0; i2 < namespace.length; i2++) {
      hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i2);
      hash2 |= 0;
    }
    return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
  }
  createDebug.selectColor = selectColor;
  function createDebug(namespace) {
    let prevTime;
    let enableOverride = null;
    let namespacesCache;
    let enabledCache;
    function debug2(...args) {
      if (!debug2.enabled) {
        return;
      }
      const self2 = debug2;
      const curr = Number(/* @__PURE__ */ new Date());
      const ms2 = curr - (prevTime || curr);
      self2.diff = ms2;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        if (match === "%%") {
          return "%";
        }
        index++;
        const formatter = createDebug.formatters[format];
        if (typeof formatter === "function") {
          const val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      createDebug.formatArgs.call(self2, args);
      const logFn = self2.log || createDebug.log;
      logFn.apply(self2, args);
    }
    debug2.namespace = namespace;
    debug2.useColors = createDebug.useColors();
    debug2.color = createDebug.selectColor(namespace);
    debug2.extend = extend;
    debug2.destroy = createDebug.destroy;
    Object.defineProperty(debug2, "enabled", {
      enumerable: true,
      configurable: false,
      get: () => {
        if (enableOverride !== null) {
          return enableOverride;
        }
        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }
        return enabledCache;
      },
      set: (v3) => {
        enableOverride = v3;
      }
    });
    if (typeof createDebug.init === "function") {
      createDebug.init(debug2);
    }
    return debug2;
  }
  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    let i2;
    const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    const len = split.length;
    for (i2 = 0; i2 < len; i2++) {
      if (!split[i2]) {
        continue;
      }
      namespaces = split[i2].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
      } else {
        createDebug.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    const namespaces = [
      ...createDebug.names.map(toNamespace),
      ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
    ].join(",");
    createDebug.enable("");
    return namespaces;
  }
  function enabled(name2) {
    if (name2[name2.length - 1] === "*") {
      return true;
    }
    let i2;
    let len;
    for (i2 = 0, len = createDebug.skips.length; i2 < len; i2++) {
      if (createDebug.skips[i2].test(name2)) {
        return false;
      }
    }
    for (i2 = 0, len = createDebug.names.length; i2 < len; i2++) {
      if (createDebug.names[i2].test(name2)) {
        return true;
      }
    }
    return false;
  }
  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function coerce2(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }
  function destroy() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  createDebug.enable(createDebug.load());
  return createDebug;
}
var common = setup;
(function(module2, exports2) {
  exports2.formatArgs = formatArgs;
  exports2.save = save;
  exports2.load = load;
  exports2.useColors = useColors;
  exports2.storage = localstorage();
  exports2.destroy = /* @__PURE__ */ (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports2.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  }
  exports2.log = console.debug || console.log || (() => {
  });
  function save(namespaces) {
    try {
      if (namespaces) {
        exports2.storage.setItem("debug", namespaces);
      } else {
        exports2.storage.removeItem("debug");
      }
    } catch (error) {
    }
  }
  function load() {
    let r2;
    try {
      r2 = exports2.storage.getItem("debug");
    } catch (error) {
    }
    if (!r2 && typeof process !== "undefined" && "env" in process) {
      r2 = process.env.DEBUG;
    }
    return r2;
  }
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {
    }
  }
  module2.exports = common(exports2);
  const { formatters } = module2.exports;
  formatters.j = function(v3) {
    try {
      return JSON.stringify(v3);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
})(browser, browser.exports);
var browserExports = browser.exports;
const debug = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const log_sdk = debug("wallet:sdk");
log_sdk.enabled = true;
exports.PAGE_SIZE = PAGE_SIZE;
exports.R = R$4;
exports.T = T$1;
exports.a = a$3;
exports.aleoAddressRegex = aleoAddressRegex;
exports.aleoFieldRegex = aleoFieldRegex;
exports.aleoPrivateKeyRegex = aleoPrivateKeyRegex;
exports.aleoTransactionIdRegex = aleoTransactionIdRegex;
exports.aleoU32 = aleoU32;
exports.aleoU64 = aleoU64;
exports.aleoViewKeyRegex = aleoViewKeyRegex;
exports.chainIdToNetwork = chainIdToNetwork;
exports.checkForDesktopConnection = checkForDesktopConnection;
exports.configureConnection = configureConnection;
exports.connect = connect;
exports.createSharedState = createSharedState;
exports.decrypt = decrypt;
exports.disconnect = disconnect;
exports.emitter = emitter;
exports.getAccount = getAccount;
exports.getBalance = getBalance;
exports.getEvent = getEvent;
exports.getEvents = getEvents;
exports.getRecords = getRecords;
exports.getWalletConnectModalSignClient = getWalletConnectModalSignClient;
exports.hasInjectedConnection = hasInjectedConnection;
exports.importSharedState = importSharedState;
exports.log_sdk = log_sdk;
exports.ne = ne;
exports.networkToChainId = networkToChainId;
exports.oe = oe$1;
exports.p = p$3;
exports.projectId = projectId;
exports.requestCreateEvent = requestCreateEvent;
exports.requestSignature = requestSignature;
exports.se = se;
exports.signClient_puzzleProps = signClient_puzzleProps;
exports.te = te$2;
exports.wc_aleo_chains = wc_aleo_chains;
exports.wc_aleo_methods = wc_aleo_methods;
exports.wc_events = wc_events;
exports.wc_optional_aleo_chains = wc_optional_aleo_chains;
exports.wc_required_aleo_chains = wc_required_aleo_chains;
exports.web3modal_puzzle_props = web3modal_puzzle_props;
exports.web3modal_puzzle_props_android = web3modal_puzzle_props_android;
exports.web3modal_puzzle_props_default = web3modal_puzzle_props_default;
exports.y = y$3;
exports.zodAddress = zodAddress;
exports.zodEventStatus = zodEventStatus;
exports.zodEventType = zodEventType;
exports.zodField = zodField;
exports.zodNetwork = zodNetwork;
exports.zodPrivateKey = zodPrivateKey;
exports.zodTransactionId = zodTransactionId;
exports.zodU32 = zodU32;
exports.zodU64 = zodU64;
exports.zodViewKey = zodViewKey;
exports.zodVisibility = zodVisibility;
