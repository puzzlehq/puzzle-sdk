(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2["@puzzlehq/sdk-core"] = {}));
})(this, function(exports2) {
  "use strict";
  const t$4 = Symbol();
  const s$4 = Object.getPrototypeOf, c$5 = /* @__PURE__ */ new WeakMap(), l$6 = (e2) => e2 && (c$5.has(e2) ? c$5.get(e2) : s$4(e2) === Object.prototype || s$4(e2) === Array.prototype), y$5 = (e2) => l$6(e2) && e2[t$4] || null, h$7 = (e2, t2 = true) => {
    c$5.set(e2, t2);
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
    h$7(snap, true);
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
        h$7(value, false);
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
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version2 !== nextVersion) {
        version2 = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
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
      if (listeners.size) {
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
    const addListener = (listener) => {
      listeners.add(listener);
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if ((define_import_meta_env_default ? "production" : void 0) !== "production" && prevRemove) {
            throw new Error("remove already exists");
          }
          const remove = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        });
      }
      const removeListener = () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove], prop) => {
            if (remove) {
              remove();
              propProxyStates.set(prop, [propProxyState]);
            }
          });
        }
      };
      return removeListener;
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
          value = y$5(value) || value;
        }
        let nextValue = value;
        if (value instanceof Promise) {
          value.then((v2) => {
            value.status = "fulfilled";
            value.value = v2;
            notifyUpdate(["resolve", [prop], v2]);
          }).catch((e2) => {
            value.status = "rejected";
            value.reason = e2;
            notifyUpdate(["reject", [prop], e2]);
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
      addListener
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
    const addListener = proxyState[3];
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
    const removeListener = addListener(listener);
    isListenerActive = true;
    return () => {
      isListenerActive = false;
      removeListener();
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
  const o$6 = proxy({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0
  }), T$3 = {
    state: o$6,
    subscribe(e2) {
      return subscribe(o$6, () => e2(o$6));
    },
    push(e2, t2) {
      e2 !== o$6.view && (o$6.view = e2, t2 && (o$6.data = t2), o$6.history.push(e2));
    },
    reset(e2) {
      o$6.view = e2, o$6.history = [e2];
    },
    replace(e2) {
      o$6.history.length > 1 && (o$6.history[o$6.history.length - 1] = e2, o$6.view = e2);
    },
    goBack() {
      if (o$6.history.length > 1) {
        o$6.history.pop();
        const [e2] = o$6.history.slice(-1);
        o$6.view = e2;
      }
    },
    setData(e2) {
      o$6.data = e2;
    }
  }, a$5 = {
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
      return a$5.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isIos() {
      const e2 = navigator.userAgent.toLowerCase();
      return a$5.isMobile() && (e2.includes("iphone") || e2.includes("ipad"));
    },
    isHttpUrl(e2) {
      return e2.startsWith("http://") || e2.startsWith("https://");
    },
    isArray(e2) {
      return Array.isArray(e2) && e2.length > 0;
    },
    formatNativeUrl(e2, t2, s2) {
      if (a$5.isHttpUrl(e2))
        return this.formatUniversalUrl(e2, t2, s2);
      let n2 = e2;
      n2.includes("://") || (n2 = e2.replaceAll("/", "").replaceAll(":", ""), n2 = `${n2}://`), n2.endsWith("/") || (n2 = `${n2}/`), this.setWalletConnectDeepLink(n2, s2);
      const i2 = encodeURIComponent(t2);
      return `${n2}wc?uri=${i2}`;
    },
    formatUniversalUrl(e2, t2, s2) {
      if (!a$5.isHttpUrl(e2))
        return this.formatNativeUrl(e2, t2, s2);
      let n2 = e2;
      n2.endsWith("/") || (n2 = `${n2}/`), this.setWalletConnectDeepLink(n2, s2);
      const i2 = encodeURIComponent(t2);
      return `${n2}wc?uri=${i2}`;
    },
    async wait(e2) {
      return new Promise((t2) => {
        setTimeout(t2, e2);
      });
    },
    openHref(e2, t2) {
      window.open(e2, t2, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e2, t2) {
      try {
        localStorage.setItem(
          a$5.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e2, name: t2 })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e2) {
      try {
        const [t2] = e2.split("?");
        localStorage.setItem(
          a$5.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t2, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(a$5.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" && localStorage.setItem(a$5.WCM_VERSION, "2.6.2");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e2;
      const t2 = (e2 = T$3.state.data) == null ? void 0 : e2.Wallet;
      if (!t2)
        throw new Error('Missing "Wallet" view data');
      return t2;
    }
  }, _$5 = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), r$4 = proxy({
    enabled: _$5,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0
  }), R$5 = {
    state: r$4,
    subscribe(e2) {
      return subscribe(r$4.events, () => e2(snapshot(r$4.events[r$4.events.length - 1])));
    },
    initialize() {
      r$4.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (r$4.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e2) {
      r$4.connectedWalletId = e2;
    },
    click(e2) {
      if (r$4.enabled) {
        const t2 = {
          type: "CLICK",
          name: e2.name,
          userSessionId: r$4.userSessionId,
          timestamp: Date.now(),
          data: e2
        };
        r$4.events.push(t2);
      }
    },
    track(e2) {
      if (r$4.enabled) {
        const t2 = {
          type: "TRACK",
          name: e2.name,
          userSessionId: r$4.userSessionId,
          timestamp: Date.now(),
          data: e2
        };
        r$4.events.push(t2);
      }
    },
    view(e2) {
      if (r$4.enabled) {
        const t2 = {
          type: "VIEW",
          name: e2.name,
          userSessionId: r$4.userSessionId,
          timestamp: Date.now(),
          data: e2
        };
        r$4.events.push(t2);
      }
    }
  }, c$4 = proxy({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: false,
    isCustomDesktop: false,
    isCustomMobile: false,
    isDataLoaded: false,
    isUiLoaded: false
  }), p$4 = {
    state: c$4,
    subscribe(e2) {
      return subscribe(c$4, () => e2(c$4));
    },
    setChains(e2) {
      c$4.chains = e2;
    },
    setWalletConnectUri(e2) {
      c$4.walletConnectUri = e2;
    },
    setIsCustomDesktop(e2) {
      c$4.isCustomDesktop = e2;
    },
    setIsCustomMobile(e2) {
      c$4.isCustomMobile = e2;
    },
    setIsDataLoaded(e2) {
      c$4.isDataLoaded = e2;
    },
    setIsUiLoaded(e2) {
      c$4.isUiLoaded = e2;
    },
    setIsAuth(e2) {
      c$4.isAuth = e2;
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
  }), y$4 = {
    state: W$2,
    subscribe(e2) {
      return subscribe(W$2, () => e2(W$2));
    },
    setConfig(e2) {
      var t2, s2;
      R$5.initialize(), p$4.setChains(e2.chains), p$4.setIsAuth(Boolean(e2.enableAuthMode)), p$4.setIsCustomMobile(
        Boolean((t2 = e2.mobileWallets) == null ? void 0 : t2.length)
      ), p$4.setIsCustomDesktop(
        Boolean((s2 = e2.desktopWallets) == null ? void 0 : s2.length)
      ), a$5.setModalVersionInStorage(), Object.assign(W$2, e2);
    }
  };
  var V$3 = Object.defineProperty, D$6 = Object.getOwnPropertySymbols, H$3 = Object.prototype.hasOwnProperty, B$4 = Object.prototype.propertyIsEnumerable, M$2 = (e2, t2, s2) => t2 in e2 ? V$3(e2, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e2[t2] = s2, K$2 = (e2, t2) => {
    for (var s2 in t2 || (t2 = {}))
      H$3.call(t2, s2) && M$2(e2, s2, t2[s2]);
    if (D$6)
      for (var s2 of D$6(t2))
        B$4.call(t2, s2) && M$2(e2, s2, t2[s2]);
    return e2;
  };
  const L$4 = "https://explorer-api.walletconnect.com", E$3 = "wcm", O$3 = "js-2.6.2";
  async function w$6(e2, t2) {
    const s2 = K$2({ sdkType: E$3, sdkVersion: O$3 }, t2), n2 = new URL(e2, L$4);
    return n2.searchParams.append("projectId", y$4.state.projectId), Object.entries(s2).forEach(([i2, l2]) => {
      l2 && n2.searchParams.append(i2, String(l2));
    }), (await fetch(n2)).json();
  }
  const m$3 = {
    async getDesktopListings(e2) {
      return w$6("/w3m/v1/getDesktopListings", e2);
    },
    async getMobileListings(e2) {
      return w$6("/w3m/v1/getMobileListings", e2);
    },
    async getInjectedListings(e2) {
      return w$6("/w3m/v1/getInjectedListings", e2);
    },
    async getAllListings(e2) {
      return w$6("/w3m/v1/getAllListings", e2);
    },
    getWalletImageUrl(e2) {
      return `${L$4}/w3m/v1/getWalletImage/${e2}?projectId=${y$4.state.projectId}&sdkType=${E$3}&sdkVersion=${O$3}`;
    },
    getAssetImageUrl(e2) {
      return `${L$4}/w3m/v1/getAssetImage/${e2}?projectId=${y$4.state.projectId}&sdkType=${E$3}&sdkVersion=${O$3}`;
    }
  };
  var z$4 = Object.defineProperty, j$4 = Object.getOwnPropertySymbols, J$2 = Object.prototype.hasOwnProperty, q$3 = Object.prototype.propertyIsEnumerable, k$3 = (e2, t2, s2) => t2 in e2 ? z$4(e2, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e2[t2] = s2, F$4 = (e2, t2) => {
    for (var s2 in t2 || (t2 = {}))
      J$2.call(t2, s2) && k$3(e2, s2, t2[s2]);
    if (j$4)
      for (var s2 of j$4(t2))
        q$3.call(t2, s2) && k$3(e2, s2, t2[s2]);
    return e2;
  };
  const N$4 = a$5.isMobile(), d$4 = proxy({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: []
  }), te$3 = {
    state: d$4,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e2, explorerExcludedWalletIds: t2 } = y$4.state;
      if (e2 === "NONE" || t2 === "ALL" && !e2)
        return d$4.recomendedWallets;
      if (a$5.isArray(e2)) {
        const s2 = { recommendedIds: e2.join(",") }, { listings: n2 } = await m$3.getAllListings(s2), i2 = Object.values(n2);
        i2.sort && i2.sort((l2, v2) => {
          const b2 = e2.indexOf(l2.id), f2 = e2.indexOf(v2.id);
          return b2 - f2;
        }), d$4.recomendedWallets = i2;
      } else {
        const { chains: s2, isAuth: n2 } = p$4.state, i2 = s2 == null ? void 0 : s2.join(","), l2 = a$5.isArray(t2), v2 = {
          page: 1,
          sdks: n2 ? "auth_v1" : void 0,
          entries: a$5.RECOMMENDED_WALLET_AMOUNT,
          chains: i2,
          version: 2,
          excludedIds: l2 ? t2.join(",") : void 0
        }, { listings: b2 } = N$4 ? await m$3.getMobileListings(v2) : await m$3.getDesktopListings(v2);
        d$4.recomendedWallets = Object.values(b2);
      }
      return d$4.recomendedWallets;
    },
    async getWallets(e2) {
      const t2 = F$4({}, e2), { explorerRecommendedWalletIds: s2, explorerExcludedWalletIds: n2 } = y$4.state, { recomendedWallets: i2 } = d$4;
      if (n2 === "ALL")
        return d$4.wallets;
      i2.length ? t2.excludedIds = i2.map((x2) => x2.id).join(",") : a$5.isArray(s2) && (t2.excludedIds = s2.join(",")), a$5.isArray(n2) && (t2.excludedIds = [t2.excludedIds, n2].filter(Boolean).join(",")), p$4.state.isAuth && (t2.sdks = "auth_v1");
      const { page: l2, search: v2 } = e2, { listings: b2, total: f2 } = N$4 ? await m$3.getMobileListings(t2) : await m$3.getDesktopListings(t2), A2 = Object.values(b2), U2 = v2 ? "search" : "wallets";
      return d$4[U2] = { listings: [...d$4[U2].listings, ...A2], total: f2, page: l2 ?? 1 }, { listings: A2, total: f2 };
    },
    getWalletImageUrl(e2) {
      return m$3.getWalletImageUrl(e2);
    },
    getAssetImageUrl(e2) {
      return m$3.getAssetImageUrl(e2);
    },
    resetSearch() {
      d$4.search = { listings: [], total: 0, page: 1 };
    }
  }, I$2 = proxy({ open: false }), se$1 = {
    state: I$2,
    subscribe(e2) {
      return subscribe(I$2, () => e2(I$2));
    },
    async open(e2) {
      return new Promise((t2) => {
        const { isUiLoaded: s2, isDataLoaded: n2 } = p$4.state;
        if (a$5.removeWalletConnectDeepLink(), p$4.setWalletConnectUri(e2 == null ? void 0 : e2.uri), p$4.setChains(e2 == null ? void 0 : e2.chains), T$3.reset("ConnectWallet"), s2 && n2)
          I$2.open = true, t2();
        else {
          const i2 = setInterval(() => {
            const l2 = p$4.state;
            l2.isUiLoaded && l2.isDataLoaded && (clearInterval(i2), I$2.open = true, t2());
          }, 200);
        }
      });
    },
    close() {
      I$2.open = false;
    }
  };
  var G$3 = Object.defineProperty, $$3 = Object.getOwnPropertySymbols, Q$4 = Object.prototype.hasOwnProperty, X$2 = Object.prototype.propertyIsEnumerable, S$5 = (e2, t2, s2) => t2 in e2 ? G$3(e2, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e2[t2] = s2, Y$1 = (e2, t2) => {
    for (var s2 in t2 || (t2 = {}))
      Q$4.call(t2, s2) && S$5(e2, s2, t2[s2]);
    if ($$3)
      for (var s2 of $$3(t2))
        X$2.call(t2, s2) && S$5(e2, s2, t2[s2]);
    return e2;
  };
  function Z$4() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
  }
  const C$1 = proxy({ themeMode: Z$4() ? "dark" : "light" }), ne$1 = {
    state: C$1,
    subscribe(e2) {
      return subscribe(C$1, () => e2(C$1));
    },
    setThemeConfig(e2) {
      const { themeMode: t2, themeVariables: s2 } = e2;
      t2 && (C$1.themeMode = t2), s2 && (C$1.themeVariables = Y$1({}, s2));
    }
  }, g$6 = proxy({ open: false, message: "", variant: "success" }), oe$2 = {
    state: g$6,
    subscribe(e2) {
      return subscribe(g$6, () => e2(g$6));
    },
    openToast(e2, t2) {
      g$6.open = true, g$6.message = e2, g$6.variant = t2;
    },
    closeToast() {
      g$6.open = false;
    }
  };
  let d$3 = class d {
    constructor(e2) {
      this.openModal = se$1.open, this.closeModal = se$1.close, this.subscribeModal = se$1.subscribe, this.setTheme = ne$1.setThemeConfig, ne$1.setThemeConfig(e2), y$4.setConfig(e2), this.initUi();
    }
    async initUi() {
      if (typeof window < "u") {
        await Promise.resolve().then(() => index);
        const e2 = document.createElement("wcm-modal");
        document.body.insertAdjacentElement("beforeend", e2), p$4.setIsUiLoaded(true);
      }
    }
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a3() {
        if (this instanceof a3) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else
      a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a2, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a2;
  }
  var events = { exports: {} };
  var R$4 = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R$4 && typeof R$4.apply === "function" ? R$4.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R$4 && typeof R$4.ownKeys === "function") {
    ReflectOwnKeys = R$4.ownKeys;
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
  events.exports.once = once;
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
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n2) {
    if (typeof n2 !== "number" || n2 < 0 || NumberIsNaN(n2)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n2 + ".");
    }
    this._maxListeners = n2;
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
      var listeners = arrayClone(handler, len);
      for (var i2 = 0; i2 < len; ++i2)
        ReflectApply(listeners[i2], this, args);
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
        var w2 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w2.name = "MaxListenersExceededWarning";
        w2.emitter = target;
        w2.type = type2;
        w2.count = existing.length;
        ProcessEmitWarning(w2);
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
  EventEmitter.prototype.once = function once2(type2, listener) {
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
    var listeners, events2, i2;
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
    listeners = events2[type2];
    if (typeof listeners === "function") {
      this.removeListener(type2, listeners);
    } else if (listeners !== void 0) {
      for (i2 = listeners.length - 1; i2 >= 0; i2--) {
        this.removeListener(type2, listeners[i2]);
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
  function arrayClone(arr, n2) {
    var copy = new Array(n2);
    for (var i2 = 0; i2 < n2; ++i2)
      copy[i2] = arr[i2];
    return copy;
  }
  function spliceOne(list, index2) {
    for (; index2 + 1 < list.length; index2++)
      list[index2] = list[index2 + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i2 = 0; i2 < ret.length; ++i2) {
      ret[i2] = arr[i2].listener || arr[i2];
    }
    return ret;
  }
  function once(emitter2, name2) {
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
    const data2 = /* @__PURE__ */ new Map();
    return {
      name: DRIVER_NAME,
      options: {},
      hasItem(key) {
        return data2.has(key);
      },
      getItem(key) {
        return data2.get(key) ?? null;
      },
      getItemRaw(key) {
        return data2.get(key) ?? null;
      },
      setItem(key, value) {
        data2.set(key, value);
      },
      setItemRaw(key, value) {
        data2.set(key, value);
      },
      removeItem(key) {
        data2.delete(key);
      },
      getKeys() {
        return Array.from(data2.keys());
      },
      clear() {
        data2.clear();
      },
      dispose() {
        data2.clear();
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
          const keys2 = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p2) => key.startsWith(p2)));
          allKeys.push(...keys2);
          maskedMounts = [
            mount.mountpoint,
            ...maskedMounts.filter((p2) => !p2.startsWith(mount.mountpoint))
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
          context.mountpoints.sort((a2, b2) => b2.length - a2.length);
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
  const JSONStringify = (data2) => JSON.stringify(data2, (_2, value) => typeof value === "bigint" ? value.toString() + "n" : value);
  const JSONParse = (json) => {
    const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
    const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
    return JSON.parse(serializedData, (_2, value) => {
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
  const x$2 = "idb-keyval";
  var z$3 = (i2 = {}) => {
    const t2 = i2.base && i2.base.length > 0 ? `${i2.base}:` : "", e2 = (s2) => t2 + s2;
    let n2;
    return i2.dbName && i2.storeName && (n2 = createStore(i2.dbName, i2.storeName)), { name: x$2, options: i2, async hasItem(s2) {
      return !(typeof await get(e2(s2), n2) > "u");
    }, async getItem(s2) {
      return await get(e2(s2), n2) ?? null;
    }, setItem(s2, a2) {
      return set(e2(s2), a2, n2);
    }, removeItem(s2) {
      return del(e2(s2), n2);
    }, getKeys() {
      return keys(n2);
    }, clear() {
      return clear(n2);
    } };
  };
  const D$5 = "WALLET_CONNECT_V2_INDEXED_DB", E$2 = "keyvaluestorage";
  let _$4 = class _ {
    constructor() {
      this.indexedDb = createStorage({ driver: z$3({ dbName: D$5, storeName: E$2 }) });
    }
    async getKeys() {
      return this.indexedDb.getKeys();
    }
    async getEntries() {
      return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t2) => [t2.key, t2.value]);
    }
    async getItem(t2) {
      const e2 = await this.indexedDb.getItem(t2);
      if (e2 !== null)
        return e2;
    }
    async setItem(t2, e2) {
      await this.indexedDb.setItem(t2, safeJsonStringify(e2));
    }
    async removeItem(t2) {
      await this.indexedDb.removeItem(t2);
    }
  };
  var l$5 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$3 = { exports: {} };
  (function() {
    let i2;
    function t2() {
    }
    i2 = t2, i2.prototype.getItem = function(e2) {
      return this.hasOwnProperty(e2) ? String(this[e2]) : null;
    }, i2.prototype.setItem = function(e2, n2) {
      this[e2] = String(n2);
    }, i2.prototype.removeItem = function(e2) {
      delete this[e2];
    }, i2.prototype.clear = function() {
      const e2 = this;
      Object.keys(e2).forEach(function(n2) {
        e2[n2] = void 0, delete e2[n2];
      });
    }, i2.prototype.key = function(e2) {
      return e2 = e2 || 0, Object.keys(this)[e2];
    }, i2.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof l$5 < "u" && l$5.localStorage ? c$3.exports = l$5.localStorage : typeof window < "u" && window.localStorage ? c$3.exports = window.localStorage : c$3.exports = new t2();
  })();
  function k$2(i2) {
    var t2;
    return [i2[0], safeJsonParse((t2 = i2[1]) != null ? t2 : "")];
  }
  let K$1 = class K {
    constructor() {
      this.localStorage = c$3.exports;
    }
    async getKeys() {
      return Object.keys(this.localStorage);
    }
    async getEntries() {
      return Object.entries(this.localStorage).map(k$2);
    }
    async getItem(t2) {
      const e2 = this.localStorage.getItem(t2);
      if (e2 !== null)
        return safeJsonParse(e2);
    }
    async setItem(t2, e2) {
      this.localStorage.setItem(t2, safeJsonStringify(e2));
    }
    async removeItem(t2) {
      this.localStorage.removeItem(t2);
    }
  };
  const N$3 = "wc_storage_version", y$3 = 1, O$2 = async (i2, t2, e2) => {
    const n2 = N$3, s2 = await t2.getItem(n2);
    if (s2 && s2 >= y$3) {
      e2(t2);
      return;
    }
    const a2 = await i2.getKeys();
    if (!a2.length) {
      e2(t2);
      return;
    }
    const m2 = [];
    for (; a2.length; ) {
      const r2 = a2.shift();
      if (!r2)
        continue;
      const o2 = r2.toLowerCase();
      if (o2.includes("wc@") || o2.includes("walletconnect") || o2.includes("wc_") || o2.includes("wallet_connect")) {
        const f2 = await i2.getItem(r2);
        await t2.setItem(r2, f2), m2.push(r2);
      }
    }
    await t2.setItem(n2, y$3), e2(t2), j$3(i2, m2);
  }, j$3 = async (i2, t2) => {
    t2.length && t2.forEach(async (e2) => {
      await i2.removeItem(e2);
    });
  };
  let h$6 = class h {
    constructor() {
      this.initialized = false, this.setInitialized = (e2) => {
        this.storage = e2, this.initialized = true;
      };
      const t2 = new K$1();
      this.storage = t2;
      try {
        const e2 = new _$4();
        O$2(t2, e2, this.setInitialized);
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
    async setItem(t2, e2) {
      return await this.initialize(), this.storage.setItem(t2, e2);
    }
    async removeItem(t2) {
      return await this.initialize(), this.storage.removeItem(t2);
    }
    async initialize() {
      this.initialized || await new Promise((t2) => {
        const e2 = setInterval(() => {
          this.initialized && (clearInterval(e2), t2());
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
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  function __extends(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  }
  function __decorate(decorators, target, key, desc) {
    var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r2 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i2 = decorators.length - 1; i2 >= 0; i2--)
        if (d2 = decorators[i2])
          r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
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
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _2 = { label: 0, sent: function() {
      if (t2[0] & 1)
        throw t2[1];
      return t2[1];
    }, trys: [], ops: [] }, f2, y2, t2, g2;
    return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n2) {
      return function(v2) {
        return step([n2, v2]);
      };
    }
    function step(op) {
      if (f2)
        throw new TypeError("Generator is already executing.");
      while (_2)
        try {
          if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
            return t2;
          if (y2 = 0, t2)
            op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _2.label++;
              return { value: op[1], done: false };
            case 5:
              _2.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _2.ops.pop();
              _2.trys.pop();
              continue;
            default:
              if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _2 = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _2.label = op[1];
                break;
              }
              if (op[0] === 6 && _2.label < t2[1]) {
                _2.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _2.label < t2[2]) {
                _2.label = t2[2];
                _2.ops.push(op);
                break;
              }
              if (t2[2])
                _2.ops.pop();
              _2.trys.pop();
              continue;
          }
          op = body.call(thisArg, _2);
        } catch (e2) {
          op = [6, e2];
          y2 = 0;
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
  function __exportStar(m2, exports3) {
    for (var p2 in m2)
      if (p2 !== "default" && !exports3.hasOwnProperty(p2))
        exports3[p2] = m2[p2];
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
  function __read(o2, n2) {
    var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
    if (!m2)
      return o2;
    var i2 = m2.call(o2), r2, ar2 = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
        ar2.push(r2.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r2 && !r2.done && (m2 = i2["return"]))
          m2.call(i2);
      } finally {
        if (e2)
          throw e2.error;
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
      for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
        r2[k2] = a2[j2];
    return r2;
  }
  function __await(v2) {
    return this instanceof __await ? (this.v = v2, this) : new __await(v2);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
    return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
      return this;
    }, i2;
    function verb(n2) {
      if (g2[n2])
        i2[n2] = function(v2) {
          return new Promise(function(a2, b2) {
            q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
          });
        };
    }
    function resume(n2, v2) {
      try {
        step(g2[n2](v2));
      } catch (e2) {
        settle(q2[0][3], e2);
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
    function settle(f2, v2) {
      if (f2(v2), q2.shift(), q2.length)
        resume(q2[0][0], q2[0][1]);
    }
  }
  function __asyncDelegator(o2) {
    var i2, p2;
    return i2 = {}, verb("next"), verb("throw", function(e2) {
      throw e2;
    }), verb("return"), i2[Symbol.iterator] = function() {
      return this;
    }, i2;
    function verb(n2, f2) {
      i2[n2] = o2[n2] ? function(v2) {
        return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
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
    function verb(n2) {
      i2[n2] = o2[n2] && function(v2) {
        return new Promise(function(resolve, reject) {
          v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
        });
      };
    }
    function settle(resolve, reject, d2, v2) {
      Promise.resolve(v2).then(function(v3) {
        resolve({ value: v3, done: d2 });
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
  var utils$3 = {};
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
  var time$1 = {};
  var hasRequiredTime;
  function requireTime() {
    if (hasRequiredTime)
      return time$1;
    hasRequiredTime = 1;
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.ONE_YEAR = exports3.FOUR_WEEKS = exports3.THREE_WEEKS = exports3.TWO_WEEKS = exports3.ONE_WEEK = exports3.THIRTY_DAYS = exports3.SEVEN_DAYS = exports3.FIVE_DAYS = exports3.THREE_DAYS = exports3.ONE_DAY = exports3.TWENTY_FOUR_HOURS = exports3.TWELVE_HOURS = exports3.SIX_HOURS = exports3.THREE_HOURS = exports3.ONE_HOUR = exports3.SIXTY_MINUTES = exports3.THIRTY_MINUTES = exports3.TEN_MINUTES = exports3.FIVE_MINUTES = exports3.ONE_MINUTE = exports3.SIXTY_SECONDS = exports3.THIRTY_SECONDS = exports3.TEN_SECONDS = exports3.FIVE_SECONDS = exports3.ONE_SECOND = void 0;
      exports3.ONE_SECOND = 1;
      exports3.FIVE_SECONDS = 5;
      exports3.TEN_SECONDS = 10;
      exports3.THIRTY_SECONDS = 30;
      exports3.SIXTY_SECONDS = 60;
      exports3.ONE_MINUTE = exports3.SIXTY_SECONDS;
      exports3.FIVE_MINUTES = exports3.ONE_MINUTE * 5;
      exports3.TEN_MINUTES = exports3.ONE_MINUTE * 10;
      exports3.THIRTY_MINUTES = exports3.ONE_MINUTE * 30;
      exports3.SIXTY_MINUTES = exports3.ONE_MINUTE * 60;
      exports3.ONE_HOUR = exports3.SIXTY_MINUTES;
      exports3.THREE_HOURS = exports3.ONE_HOUR * 3;
      exports3.SIX_HOURS = exports3.ONE_HOUR * 6;
      exports3.TWELVE_HOURS = exports3.ONE_HOUR * 12;
      exports3.TWENTY_FOUR_HOURS = exports3.ONE_HOUR * 24;
      exports3.ONE_DAY = exports3.TWENTY_FOUR_HOURS;
      exports3.THREE_DAYS = exports3.ONE_DAY * 3;
      exports3.FIVE_DAYS = exports3.ONE_DAY * 5;
      exports3.SEVEN_DAYS = exports3.ONE_DAY * 7;
      exports3.THIRTY_DAYS = exports3.ONE_DAY * 30;
      exports3.ONE_WEEK = exports3.SEVEN_DAYS;
      exports3.TWO_WEEKS = exports3.ONE_WEEK * 2;
      exports3.THREE_WEEKS = exports3.ONE_WEEK * 3;
      exports3.FOUR_WEEKS = exports3.ONE_WEEK * 4;
      exports3.ONE_YEAR = exports3.ONE_DAY * 365;
    })(time$1);
    return time$1;
  }
  var hasRequiredConstants$2;
  function requireConstants$2() {
    if (hasRequiredConstants$2)
      return constants$2;
    hasRequiredConstants$2 = 1;
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      const tslib_1 = require$$0$2;
      tslib_1.__exportStar(requireMisc(), exports3);
      tslib_1.__exportStar(requireTime(), exports3);
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
      return utils$3;
    hasRequiredUtils$1 = 1;
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      const tslib_1 = require$$0$2;
      tslib_1.__exportStar(requireDelay(), exports3);
      tslib_1.__exportStar(requireConvert(), exports3);
    })(utils$3);
    return utils$3;
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
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      const tslib_1 = require$$0$2;
      tslib_1.__exportStar(requireWatch(), exports3);
    })(types$2);
    return types$2;
  }
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireUtils$1(), exports3);
    tslib_1.__exportStar(requireWatch$1(), exports3);
    tslib_1.__exportStar(requireTypes$1(), exports3);
    tslib_1.__exportStar(requireConstants$2(), exports3);
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
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      const tslib_1 = require$$0$2;
      tslib_1.__exportStar(requireHeartbeat$2(), exports3);
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
    (function(exports3) {
      Object.defineProperty(exports3, "__esModule", { value: true });
      const tslib_1 = require$$0$2;
      tslib_1.__exportStar(requireHeartbeat$1(), exports3);
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
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireHeartbeat(), exports3);
    tslib_1.__exportStar(requireTypes(), exports3);
    tslib_1.__exportStar(requireConstants$1(), exports3);
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
      } catch (e2) {
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
        for (var index2 = 1; index2 < len; index2++) {
          objects[index2] = ss2(args[index2]);
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
      var a2 = 1 - offset;
      var lastPos = -1;
      var flen = f2 && f2.length || 0;
      for (var i2 = 0; i2 < flen; ) {
        if (f2.charCodeAt(i2) === 37 && i2 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f2.charCodeAt(i2 + 1)) {
            case 100:
            case 102:
              if (a2 >= argLen)
                break;
              if (args[a2] == null)
                break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += Number(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 105:
              if (a2 >= argLen)
                break;
              if (args[a2] == null)
                break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += Math.floor(Number(args[a2]));
              lastPos = i2 + 2;
              i2++;
              break;
            case 79:
            case 111:
            case 106:
              if (a2 >= argLen)
                break;
              if (args[a2] === void 0)
                break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              var type2 = typeof args[a2];
              if (type2 === "string") {
                str += "'" + args[a2] + "'";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              if (type2 === "function") {
                str += args[a2].name || "<anonymous>";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              str += ss2(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 115:
              if (a2 >= argLen)
                break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += String(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 37:
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += "%";
              lastPos = i2 + 2;
              i2++;
              a2--;
              break;
          }
          ++a2;
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
  var browser$5;
  var hasRequiredBrowser;
  function requireBrowser() {
    if (hasRequiredBrowser)
      return browser$5;
    hasRequiredBrowser = 1;
    const format = requireQuickFormatUnescaped();
    browser$5 = pino;
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
        logger.log = noop2;
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
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop2;
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
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop2 : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop2;
      wrap2(opts, logger, level);
    }
    function wrap2(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop2)
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
    function passthrough(a2) {
      return a2;
    }
    function noop2() {
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
      } catch (e2) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
    return browser$5;
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
  var utils$2 = {};
  var hasRequiredUtils;
  function requireUtils() {
    if (hasRequiredUtils)
      return utils$2;
    hasRequiredUtils = 1;
    Object.defineProperty(utils$2, "__esModule", { value: true });
    utils$2.generateChildLogger = utils$2.formatChildLoggerContext = utils$2.getLoggerContext = utils$2.setBrowserLoggerContext = utils$2.getBrowserLoggerContext = utils$2.getDefaultLoggerOptions = void 0;
    const constants_1 = requireConstants();
    function getDefaultLoggerOptions(opts) {
      return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
    }
    utils$2.getDefaultLoggerOptions = getDefaultLoggerOptions;
    function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      return logger[customContextKey] || "";
    }
    utils$2.getBrowserLoggerContext = getBrowserLoggerContext;
    function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      logger[customContextKey] = context;
      return logger;
    }
    utils$2.setBrowserLoggerContext = setBrowserLoggerContext;
    function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      let context = "";
      if (typeof logger.bindings === "undefined") {
        context = getBrowserLoggerContext(logger, customContextKey);
      } else {
        context = logger.bindings().context || "";
      }
      return context;
    }
    utils$2.getLoggerContext = getLoggerContext;
    function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      const parentContext = getLoggerContext(logger, customContextKey);
      const context = parentContext.trim() ? `${parentContext}/${childContext}` : childContext;
      return context;
    }
    utils$2.formatChildLoggerContext = formatChildLoggerContext;
    function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      const context = formatChildLoggerContext(logger, childContext, customContextKey);
      const child = logger.child({ context });
      return setBrowserLoggerContext(child, context, customContextKey);
    }
    utils$2.generateChildLogger = generateChildLogger;
    return utils$2;
  }
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.pino = void 0;
    const tslib_1 = require$$0$2;
    const pino_1 = tslib_1.__importDefault(requireBrowser());
    Object.defineProperty(exports3, "pino", { enumerable: true, get: function() {
      return pino_1.default;
    } });
    tslib_1.__exportStar(requireConstants(), exports3);
    tslib_1.__exportStar(requireUtils(), exports3);
  })(cjs$3);
  let n$7 = class n extends IEvents$1 {
    constructor(s2) {
      super(), this.opts = s2, this.protocol = "wc", this.version = 2;
    }
  };
  let h$5 = class h extends IEvents$1 {
    constructor(s2, t2) {
      super(), this.core = s2, this.logger = t2, this.records = /* @__PURE__ */ new Map();
    }
  };
  let a$4 = class a {
    constructor(s2, t2) {
      this.logger = s2, this.core = t2;
    }
  };
  let u$3 = class u extends IEvents$1 {
    constructor(s2, t2) {
      super(), this.relayer = s2, this.logger = t2;
    }
  };
  let g$5 = class g extends IEvents$1 {
    constructor(s2) {
      super();
    }
  };
  let p$3 = class p {
    constructor(s2, t2, o2, M2) {
      this.core = s2, this.logger = t2, this.name = o2;
    }
  };
  let d$2 = class d extends IEvents$1 {
    constructor(s2, t2) {
      super(), this.relayer = s2, this.logger = t2;
    }
  };
  let E$1 = class E extends IEvents$1 {
    constructor(s2, t2) {
      super(), this.core = s2, this.logger = t2;
    }
  };
  let y$2 = class y {
    constructor(s2, t2) {
      this.projectId = s2, this.logger = t2;
    }
  };
  let v$3 = class v {
    constructor(s2, t2) {
      this.projectId = s2, this.logger = t2;
    }
  };
  let b$2 = class b {
    constructor(s2) {
      this.opts = s2, this.protocol = "wc", this.version = 2;
    }
  };
  let w$5 = class w {
    constructor(s2) {
      this.client = s2;
    }
  };
  var ed25519 = {};
  var random = {};
  var system = {};
  var browser$4 = {};
  Object.defineProperty(browser$4, "__esModule", { value: true });
  browser$4.BrowserRandomSource = void 0;
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
  browser$4.BrowserRandomSource = BrowserRandomSource;
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
  const browser_1 = browser$4;
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
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    function imulShim(a2, b2) {
      var ah = a2 >>> 16 & 65535, al = a2 & 65535;
      var bh = b2 >>> 16 & 65535, bl = b2 & 65535;
      return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    }
    exports3.mul = Math.imul || imulShim;
    function add(a2, b2) {
      return a2 + b2 | 0;
    }
    exports3.add = add;
    function sub(a2, b2) {
      return a2 - b2 | 0;
    }
    exports3.sub = sub;
    function rotl(x2, n2) {
      return x2 << n2 | x2 >>> 32 - n2;
    }
    exports3.rotl = rotl;
    function rotr(x2, n2) {
      return x2 << 32 - n2 | x2 >>> n2;
    }
    exports3.rotr = rotr;
    function isIntegerShim(n2) {
      return typeof n2 === "number" && isFinite(n2) && Math.floor(n2) === n2;
    }
    exports3.isInteger = Number.isInteger || isIntegerShim;
    exports3.MAX_SAFE_INTEGER = 9007199254740991;
    exports3.isSafeInteger = function(n2) {
      return exports3.isInteger(n2) && (n2 >= -exports3.MAX_SAFE_INTEGER && n2 <= exports3.MAX_SAFE_INTEGER);
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
    var lo2 = readInt32BE(array, offset + 4);
    return hi * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
  }
  binary.readInt64BE = readInt64BE;
  function readUint64BE(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var hi = readUint32BE(array, offset);
    var lo2 = readUint32BE(array, offset + 4);
    return hi * 4294967296 + lo2;
  }
  binary.readUint64BE = readUint64BE;
  function readInt64LE(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var lo2 = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 4294967296 + lo2 - (lo2 >> 31) * 4294967296;
  }
  binary.readInt64LE = readInt64LE;
  function readUint64LE(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var lo2 = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 4294967296 + lo2;
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
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.randomStringForEntropy = exports3.randomString = exports3.randomUint32 = exports3.randomBytes = exports3.defaultRandomSource = void 0;
    const system_1 = system;
    const binary_12 = binary;
    const wipe_12 = wipe$1;
    exports3.defaultRandomSource = new system_1.SystemRandomSource();
    function randomBytes(length, prng = exports3.defaultRandomSource) {
      return prng.randomBytes(length);
    }
    exports3.randomBytes = randomBytes;
    function randomUint32(prng = exports3.defaultRandomSource) {
      const buf = randomBytes(4, prng);
      const result = (0, binary_12.readUint32LE)(buf);
      (0, wipe_12.wipe)(buf);
      return result;
    }
    exports3.randomUint32 = randomUint32;
    const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function randomString(length, charset = ALPHANUMERIC, prng = exports3.defaultRandomSource) {
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
    exports3.randomString = randomString;
    function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports3.defaultRandomSource) {
      const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
      return randomString(length, charset, prng);
    }
    exports3.randomStringForEntropy = randomStringForEntropy;
  })(random);
  var sha512 = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    var binary_12 = binary;
    var wipe_12 = wipe$1;
    exports3.DIGEST_LENGTH = 64;
    exports3.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports3.DIGEST_LENGTH;
          this.blockSize = exports3.BLOCK_SIZE;
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
        SHA5122.prototype.update = function(data2, dataLength) {
          if (dataLength === void 0) {
            dataLength = data2.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports3.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data2[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data2, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data2[dataPos++];
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
    exports3.SHA512 = SHA512;
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
      var h2, l2;
      var th, tl;
      var a2, b2, c2, d2;
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
          h2 = ah7;
          l2 = al7;
          a2 = l2 & 65535;
          b2 = l2 >>> 16;
          c2 = h2 & 65535;
          d2 = h2 >>> 16;
          h2 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          h2 = ah4 & ah5 ^ ~ah4 & ah6;
          l2 = al4 & al5 ^ ~al4 & al6;
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          h2 = K2[i2 * 2];
          l2 = K2[i2 * 2 + 1];
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          h2 = wh[i2 % 16];
          l2 = wl[i2 % 16];
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          b2 += a2 >>> 16;
          c2 += b2 >>> 16;
          d2 += c2 >>> 16;
          th = c2 & 65535 | d2 << 16;
          tl = a2 & 65535 | b2 << 16;
          h2 = th;
          l2 = tl;
          a2 = l2 & 65535;
          b2 = l2 >>> 16;
          c2 = h2 & 65535;
          d2 = h2 >>> 16;
          h2 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          h2 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          b2 += a2 >>> 16;
          c2 += b2 >>> 16;
          d2 += c2 >>> 16;
          bh7 = c2 & 65535 | d2 << 16;
          bl7 = a2 & 65535 | b2 << 16;
          h2 = bh3;
          l2 = bl3;
          a2 = l2 & 65535;
          b2 = l2 >>> 16;
          c2 = h2 & 65535;
          d2 = h2 >>> 16;
          h2 = th;
          l2 = tl;
          a2 += l2 & 65535;
          b2 += l2 >>> 16;
          c2 += h2 & 65535;
          d2 += h2 >>> 16;
          b2 += a2 >>> 16;
          c2 += b2 >>> 16;
          d2 += c2 >>> 16;
          bh3 = c2 & 65535 | d2 << 16;
          bl3 = a2 & 65535 | b2 << 16;
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
              h2 = wh[j2];
              l2 = wl[j2];
              a2 = l2 & 65535;
              b2 = l2 >>> 16;
              c2 = h2 & 65535;
              d2 = h2 >>> 16;
              h2 = wh[(j2 + 9) % 16];
              l2 = wl[(j2 + 9) % 16];
              a2 += l2 & 65535;
              b2 += l2 >>> 16;
              c2 += h2 & 65535;
              d2 += h2 >>> 16;
              th = wh[(j2 + 1) % 16];
              tl = wl[(j2 + 1) % 16];
              h2 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l2 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a2 += l2 & 65535;
              b2 += l2 >>> 16;
              c2 += h2 & 65535;
              d2 += h2 >>> 16;
              th = wh[(j2 + 14) % 16];
              tl = wl[(j2 + 14) % 16];
              h2 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l2 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a2 += l2 & 65535;
              b2 += l2 >>> 16;
              c2 += h2 & 65535;
              d2 += h2 >>> 16;
              b2 += a2 >>> 16;
              c2 += b2 >>> 16;
              d2 += c2 >>> 16;
              wh[j2] = c2 & 65535 | d2 << 16;
              wl[j2] = a2 & 65535 | b2 << 16;
            }
          }
        }
        h2 = ah0;
        l2 = al0;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[0];
        l2 = hl[0];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[0] = ah0 = c2 & 65535 | d2 << 16;
        hl[0] = al0 = a2 & 65535 | b2 << 16;
        h2 = ah1;
        l2 = al1;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[1];
        l2 = hl[1];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[1] = ah1 = c2 & 65535 | d2 << 16;
        hl[1] = al1 = a2 & 65535 | b2 << 16;
        h2 = ah2;
        l2 = al2;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[2];
        l2 = hl[2];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[2] = ah2 = c2 & 65535 | d2 << 16;
        hl[2] = al2 = a2 & 65535 | b2 << 16;
        h2 = ah3;
        l2 = al3;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[3];
        l2 = hl[3];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[3] = ah3 = c2 & 65535 | d2 << 16;
        hl[3] = al3 = a2 & 65535 | b2 << 16;
        h2 = ah4;
        l2 = al4;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[4];
        l2 = hl[4];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[4] = ah4 = c2 & 65535 | d2 << 16;
        hl[4] = al4 = a2 & 65535 | b2 << 16;
        h2 = ah5;
        l2 = al5;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[5];
        l2 = hl[5];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[5] = ah5 = c2 & 65535 | d2 << 16;
        hl[5] = al5 = a2 & 65535 | b2 << 16;
        h2 = ah6;
        l2 = al6;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[6];
        l2 = hl[6];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[6] = ah6 = c2 & 65535 | d2 << 16;
        hl[6] = al6 = a2 & 65535 | b2 << 16;
        h2 = ah7;
        l2 = al7;
        a2 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h2 & 65535;
        d2 = h2 >>> 16;
        h2 = hh[7];
        l2 = hl[7];
        a2 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h2 & 65535;
        d2 += h2 >>> 16;
        b2 += a2 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        hh[7] = ah7 = c2 & 65535 | d2 << 16;
        hl[7] = al7 = a2 & 65535 | b2 << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash2(data2) {
      var h2 = new SHA512();
      h2.update(data2);
      var digest = h2.digest();
      h2.clean();
      return digest;
    }
    exports3.hash = hash2;
  })(sha512);
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.convertSecretKeyToX25519 = exports3.convertPublicKeyToX25519 = exports3.verify = exports3.sign = exports3.extractPublicKeyFromSecretKey = exports3.generateKeyPair = exports3.generateKeyPairFromSeed = exports3.SEED_LENGTH = exports3.SECRET_KEY_LENGTH = exports3.PUBLIC_KEY_LENGTH = exports3.SIGNATURE_LENGTH = void 0;
    const random_1 = random;
    const sha512_1 = sha512;
    const wipe_12 = wipe$1;
    exports3.SIGNATURE_LENGTH = 64;
    exports3.PUBLIC_KEY_LENGTH = 32;
    exports3.SECRET_KEY_LENGTH = 64;
    exports3.SEED_LENGTH = 32;
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
    function set25519(r2, a2) {
      for (let i2 = 0; i2 < 16; i2++) {
        r2[i2] = a2[i2] | 0;
      }
    }
    function car25519(o2) {
      let c2 = 1;
      for (let i2 = 0; i2 < 16; i2++) {
        let v2 = o2[i2] + c2 + 65535;
        c2 = Math.floor(v2 / 65536);
        o2[i2] = v2 - c2 * 65536;
      }
      o2[0] += c2 - 1 + 37 * (c2 - 1);
    }
    function sel25519(p2, q2, b2) {
      const c2 = ~(b2 - 1);
      for (let i2 = 0; i2 < 16; i2++) {
        const t2 = c2 & (p2[i2] ^ q2[i2]);
        p2[i2] ^= t2;
        q2[i2] ^= t2;
      }
    }
    function pack25519(o2, n2) {
      const m2 = gf();
      const t2 = gf();
      for (let i2 = 0; i2 < 16; i2++) {
        t2[i2] = n2[i2];
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
        const b2 = m2[15] >> 16 & 1;
        m2[14] &= 65535;
        sel25519(t2, m2, 1 - b2);
      }
      for (let i2 = 0; i2 < 16; i2++) {
        o2[2 * i2] = t2[i2] & 255;
        o2[2 * i2 + 1] = t2[i2] >> 8;
      }
    }
    function verify32(x2, y2) {
      let d2 = 0;
      for (let i2 = 0; i2 < 32; i2++) {
        d2 |= x2[i2] ^ y2[i2];
      }
      return (1 & d2 - 1 >>> 8) - 1;
    }
    function neq25519(a2, b2) {
      const c2 = new Uint8Array(32);
      const d2 = new Uint8Array(32);
      pack25519(c2, a2);
      pack25519(d2, b2);
      return verify32(c2, d2);
    }
    function par25519(a2) {
      const d2 = new Uint8Array(32);
      pack25519(d2, a2);
      return d2[0] & 1;
    }
    function unpack25519(o2, n2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = n2[2 * i2] + (n2[2 * i2 + 1] << 8);
      }
      o2[15] &= 32767;
    }
    function add(o2, a2, b2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = a2[i2] + b2[i2];
      }
    }
    function sub(o2, a2, b2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = a2[i2] - b2[i2];
      }
    }
    function mul(o2, a2, b2) {
      let v2, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b2[0], b1 = b2[1], b22 = b2[2], b3 = b2[3], b4 = b2[4], b5 = b2[5], b6 = b2[6], b7 = b2[7], b8 = b2[8], b9 = b2[9], b10 = b2[10], b11 = b2[11], b12 = b2[12], b13 = b2[13], b14 = b2[14], b15 = b2[15];
      v2 = a2[0];
      t0 += v2 * b0;
      t1 += v2 * b1;
      t2 += v2 * b22;
      t3 += v2 * b3;
      t4 += v2 * b4;
      t5 += v2 * b5;
      t6 += v2 * b6;
      t7 += v2 * b7;
      t8 += v2 * b8;
      t9 += v2 * b9;
      t10 += v2 * b10;
      t11 += v2 * b11;
      t12 += v2 * b12;
      t13 += v2 * b13;
      t14 += v2 * b14;
      t15 += v2 * b15;
      v2 = a2[1];
      t1 += v2 * b0;
      t2 += v2 * b1;
      t3 += v2 * b22;
      t4 += v2 * b3;
      t5 += v2 * b4;
      t6 += v2 * b5;
      t7 += v2 * b6;
      t8 += v2 * b7;
      t9 += v2 * b8;
      t10 += v2 * b9;
      t11 += v2 * b10;
      t12 += v2 * b11;
      t13 += v2 * b12;
      t14 += v2 * b13;
      t15 += v2 * b14;
      t16 += v2 * b15;
      v2 = a2[2];
      t2 += v2 * b0;
      t3 += v2 * b1;
      t4 += v2 * b22;
      t5 += v2 * b3;
      t6 += v2 * b4;
      t7 += v2 * b5;
      t8 += v2 * b6;
      t9 += v2 * b7;
      t10 += v2 * b8;
      t11 += v2 * b9;
      t12 += v2 * b10;
      t13 += v2 * b11;
      t14 += v2 * b12;
      t15 += v2 * b13;
      t16 += v2 * b14;
      t17 += v2 * b15;
      v2 = a2[3];
      t3 += v2 * b0;
      t4 += v2 * b1;
      t5 += v2 * b22;
      t6 += v2 * b3;
      t7 += v2 * b4;
      t8 += v2 * b5;
      t9 += v2 * b6;
      t10 += v2 * b7;
      t11 += v2 * b8;
      t12 += v2 * b9;
      t13 += v2 * b10;
      t14 += v2 * b11;
      t15 += v2 * b12;
      t16 += v2 * b13;
      t17 += v2 * b14;
      t18 += v2 * b15;
      v2 = a2[4];
      t4 += v2 * b0;
      t5 += v2 * b1;
      t6 += v2 * b22;
      t7 += v2 * b3;
      t8 += v2 * b4;
      t9 += v2 * b5;
      t10 += v2 * b6;
      t11 += v2 * b7;
      t12 += v2 * b8;
      t13 += v2 * b9;
      t14 += v2 * b10;
      t15 += v2 * b11;
      t16 += v2 * b12;
      t17 += v2 * b13;
      t18 += v2 * b14;
      t19 += v2 * b15;
      v2 = a2[5];
      t5 += v2 * b0;
      t6 += v2 * b1;
      t7 += v2 * b22;
      t8 += v2 * b3;
      t9 += v2 * b4;
      t10 += v2 * b5;
      t11 += v2 * b6;
      t12 += v2 * b7;
      t13 += v2 * b8;
      t14 += v2 * b9;
      t15 += v2 * b10;
      t16 += v2 * b11;
      t17 += v2 * b12;
      t18 += v2 * b13;
      t19 += v2 * b14;
      t20 += v2 * b15;
      v2 = a2[6];
      t6 += v2 * b0;
      t7 += v2 * b1;
      t8 += v2 * b22;
      t9 += v2 * b3;
      t10 += v2 * b4;
      t11 += v2 * b5;
      t12 += v2 * b6;
      t13 += v2 * b7;
      t14 += v2 * b8;
      t15 += v2 * b9;
      t16 += v2 * b10;
      t17 += v2 * b11;
      t18 += v2 * b12;
      t19 += v2 * b13;
      t20 += v2 * b14;
      t21 += v2 * b15;
      v2 = a2[7];
      t7 += v2 * b0;
      t8 += v2 * b1;
      t9 += v2 * b22;
      t10 += v2 * b3;
      t11 += v2 * b4;
      t12 += v2 * b5;
      t13 += v2 * b6;
      t14 += v2 * b7;
      t15 += v2 * b8;
      t16 += v2 * b9;
      t17 += v2 * b10;
      t18 += v2 * b11;
      t19 += v2 * b12;
      t20 += v2 * b13;
      t21 += v2 * b14;
      t22 += v2 * b15;
      v2 = a2[8];
      t8 += v2 * b0;
      t9 += v2 * b1;
      t10 += v2 * b22;
      t11 += v2 * b3;
      t12 += v2 * b4;
      t13 += v2 * b5;
      t14 += v2 * b6;
      t15 += v2 * b7;
      t16 += v2 * b8;
      t17 += v2 * b9;
      t18 += v2 * b10;
      t19 += v2 * b11;
      t20 += v2 * b12;
      t21 += v2 * b13;
      t22 += v2 * b14;
      t23 += v2 * b15;
      v2 = a2[9];
      t9 += v2 * b0;
      t10 += v2 * b1;
      t11 += v2 * b22;
      t12 += v2 * b3;
      t13 += v2 * b4;
      t14 += v2 * b5;
      t15 += v2 * b6;
      t16 += v2 * b7;
      t17 += v2 * b8;
      t18 += v2 * b9;
      t19 += v2 * b10;
      t20 += v2 * b11;
      t21 += v2 * b12;
      t22 += v2 * b13;
      t23 += v2 * b14;
      t24 += v2 * b15;
      v2 = a2[10];
      t10 += v2 * b0;
      t11 += v2 * b1;
      t12 += v2 * b22;
      t13 += v2 * b3;
      t14 += v2 * b4;
      t15 += v2 * b5;
      t16 += v2 * b6;
      t17 += v2 * b7;
      t18 += v2 * b8;
      t19 += v2 * b9;
      t20 += v2 * b10;
      t21 += v2 * b11;
      t22 += v2 * b12;
      t23 += v2 * b13;
      t24 += v2 * b14;
      t25 += v2 * b15;
      v2 = a2[11];
      t11 += v2 * b0;
      t12 += v2 * b1;
      t13 += v2 * b22;
      t14 += v2 * b3;
      t15 += v2 * b4;
      t16 += v2 * b5;
      t17 += v2 * b6;
      t18 += v2 * b7;
      t19 += v2 * b8;
      t20 += v2 * b9;
      t21 += v2 * b10;
      t22 += v2 * b11;
      t23 += v2 * b12;
      t24 += v2 * b13;
      t25 += v2 * b14;
      t26 += v2 * b15;
      v2 = a2[12];
      t12 += v2 * b0;
      t13 += v2 * b1;
      t14 += v2 * b22;
      t15 += v2 * b3;
      t16 += v2 * b4;
      t17 += v2 * b5;
      t18 += v2 * b6;
      t19 += v2 * b7;
      t20 += v2 * b8;
      t21 += v2 * b9;
      t22 += v2 * b10;
      t23 += v2 * b11;
      t24 += v2 * b12;
      t25 += v2 * b13;
      t26 += v2 * b14;
      t27 += v2 * b15;
      v2 = a2[13];
      t13 += v2 * b0;
      t14 += v2 * b1;
      t15 += v2 * b22;
      t16 += v2 * b3;
      t17 += v2 * b4;
      t18 += v2 * b5;
      t19 += v2 * b6;
      t20 += v2 * b7;
      t21 += v2 * b8;
      t22 += v2 * b9;
      t23 += v2 * b10;
      t24 += v2 * b11;
      t25 += v2 * b12;
      t26 += v2 * b13;
      t27 += v2 * b14;
      t28 += v2 * b15;
      v2 = a2[14];
      t14 += v2 * b0;
      t15 += v2 * b1;
      t16 += v2 * b22;
      t17 += v2 * b3;
      t18 += v2 * b4;
      t19 += v2 * b5;
      t20 += v2 * b6;
      t21 += v2 * b7;
      t22 += v2 * b8;
      t23 += v2 * b9;
      t24 += v2 * b10;
      t25 += v2 * b11;
      t26 += v2 * b12;
      t27 += v2 * b13;
      t28 += v2 * b14;
      t29 += v2 * b15;
      v2 = a2[15];
      t15 += v2 * b0;
      t16 += v2 * b1;
      t17 += v2 * b22;
      t18 += v2 * b3;
      t19 += v2 * b4;
      t20 += v2 * b5;
      t21 += v2 * b6;
      t22 += v2 * b7;
      t23 += v2 * b8;
      t24 += v2 * b9;
      t25 += v2 * b10;
      t26 += v2 * b11;
      t27 += v2 * b12;
      t28 += v2 * b13;
      t29 += v2 * b14;
      t30 += v2 * b15;
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
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
      t0 += c2 - 1 + 37 * (c2 - 1);
      c2 = 1;
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
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
    function square(o2, a2) {
      mul(o2, a2, a2);
    }
    function inv25519(o2, i2) {
      const c2 = gf();
      let a2;
      for (a2 = 0; a2 < 16; a2++) {
        c2[a2] = i2[a2];
      }
      for (a2 = 253; a2 >= 0; a2--) {
        square(c2, c2);
        if (a2 !== 2 && a2 !== 4) {
          mul(c2, c2, i2);
        }
      }
      for (a2 = 0; a2 < 16; a2++) {
        o2[a2] = c2[a2];
      }
    }
    function pow2523(o2, i2) {
      const c2 = gf();
      let a2;
      for (a2 = 0; a2 < 16; a2++) {
        c2[a2] = i2[a2];
      }
      for (a2 = 250; a2 >= 0; a2--) {
        square(c2, c2);
        if (a2 !== 1) {
          mul(c2, c2, i2);
        }
      }
      for (a2 = 0; a2 < 16; a2++) {
        o2[a2] = c2[a2];
      }
    }
    function edadd(p2, q2) {
      const a2 = gf(), b2 = gf(), c2 = gf(), d2 = gf(), e2 = gf(), f2 = gf(), g2 = gf(), h2 = gf(), t2 = gf();
      sub(a2, p2[1], p2[0]);
      sub(t2, q2[1], q2[0]);
      mul(a2, a2, t2);
      add(b2, p2[0], p2[1]);
      add(t2, q2[0], q2[1]);
      mul(b2, b2, t2);
      mul(c2, p2[3], q2[3]);
      mul(c2, c2, D22);
      mul(d2, p2[2], q2[2]);
      add(d2, d2, d2);
      sub(e2, b2, a2);
      sub(f2, d2, c2);
      add(g2, d2, c2);
      add(h2, b2, a2);
      mul(p2[0], e2, f2);
      mul(p2[1], h2, g2);
      mul(p2[2], g2, f2);
      mul(p2[3], e2, h2);
    }
    function cswap(p2, q2, b2) {
      for (let i2 = 0; i2 < 4; i2++) {
        sel25519(p2[i2], q2[i2], b2);
      }
    }
    function pack(r2, p2) {
      const tx = gf(), ty = gf(), zi = gf();
      inv25519(zi, p2[2]);
      mul(tx, p2[0], zi);
      mul(ty, p2[1], zi);
      pack25519(r2, ty);
      r2[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p2, q2, s2) {
      set25519(p2[0], gf0);
      set25519(p2[1], gf1);
      set25519(p2[2], gf1);
      set25519(p2[3], gf0);
      for (let i2 = 255; i2 >= 0; --i2) {
        const b2 = s2[i2 / 8 | 0] >> (i2 & 7) & 1;
        cswap(p2, q2, b2);
        edadd(q2, p2);
        edadd(p2, p2);
        cswap(p2, q2, b2);
      }
    }
    function scalarbase(p2, s2) {
      const q2 = [gf(), gf(), gf(), gf()];
      set25519(q2[0], X2);
      set25519(q2[1], Y2);
      set25519(q2[2], gf1);
      mul(q2[3], X2, Y2);
      scalarmult(p2, q2, s2);
    }
    function generateKeyPairFromSeed(seed) {
      if (seed.length !== exports3.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports3.SEED_LENGTH} bytes`);
      }
      const d2 = (0, sha512_1.hash)(seed);
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p2 = [gf(), gf(), gf(), gf()];
      scalarbase(p2, d2);
      pack(publicKey, p2);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports3.generateKeyPairFromSeed = generateKeyPairFromSeed;
    function generateKeyPair2(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed(seed);
      (0, wipe_12.wipe)(seed);
      return result;
    }
    exports3.generateKeyPair = generateKeyPair2;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports3.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports3.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports3.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
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
      const p2 = [gf(), gf(), gf(), gf()];
      const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d2.subarray(32), 32);
      const hs2 = new sha512_1.SHA512();
      hs2.update(signature.subarray(32));
      hs2.update(message);
      const r2 = hs2.digest();
      hs2.clean();
      reduce(r2);
      scalarbase(p2, r2);
      pack(signature, p2);
      hs2.reset();
      hs2.update(signature.subarray(0, 32));
      hs2.update(secretKey.subarray(32));
      hs2.update(message);
      const h2 = hs2.digest();
      reduce(h2);
      for (let i2 = 0; i2 < 32; i2++) {
        x2[i2] = r2[i2];
      }
      for (let i2 = 0; i2 < 32; i2++) {
        for (let j2 = 0; j2 < 32; j2++) {
          x2[i2 + j2] += h2[i2] * d2[j2];
        }
      }
      modL(signature.subarray(32), x2);
      return signature;
    }
    exports3.sign = sign;
    function unpackneg(r2, p2) {
      const t2 = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r2[2], gf1);
      unpack25519(r2[1], p2);
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
      if (par25519(r2[0]) === p2[31] >> 7) {
        sub(r2[0], gf0, r2[0]);
      }
      mul(r2[3], r2[0], r2[1]);
      return 0;
    }
    function verify(publicKey, message, signature) {
      const t2 = new Uint8Array(32);
      const p2 = [gf(), gf(), gf(), gf()];
      const q2 = [gf(), gf(), gf(), gf()];
      if (signature.length !== exports3.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports3.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q2, publicKey)) {
        return false;
      }
      const hs2 = new sha512_1.SHA512();
      hs2.update(signature.subarray(0, 32));
      hs2.update(publicKey);
      hs2.update(message);
      const h2 = hs2.digest();
      reduce(h2);
      scalarmult(p2, q2, h2);
      scalarbase(q2, signature.subarray(32));
      edadd(p2, q2);
      pack(t2, p2);
      if (verify32(signature, t2)) {
        return false;
      }
      return true;
    }
    exports3.verify = verify;
    function convertPublicKeyToX25519(publicKey) {
      let q2 = [gf(), gf(), gf(), gf()];
      if (unpackneg(q2, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a2 = gf();
      let b2 = gf();
      let y2 = q2[1];
      add(a2, gf1, y2);
      sub(b2, gf1, y2);
      inv25519(b2, b2);
      mul(a2, a2, b2);
      let z2 = new Uint8Array(32);
      pack25519(z2, a2);
      return z2;
    }
    exports3.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const o2 = new Uint8Array(d2.subarray(0, 32));
      (0, wipe_12.wipe)(d2);
      return o2;
    }
    exports3.convertSecretKeyToX25519 = convertSecretKeyToX25519;
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
  const toString$1 = (b2) => new TextDecoder().decode(b2);
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
      return or$3(this, decoder);
    }
  }
  class ComposedDecoder {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or$3(this, decoder);
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
  const or$3 = (left, right) => new ComposedDecoder({
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
  const encode$1 = (data2, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for (let i2 = 0; i2 < data2.length; ++i2) {
      buffer = buffer << 8 | data2[i2];
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
  const alphabetBytesToChars = alphabet.reduce((p2, c2, i2) => {
    p2[i2] = c2;
    return p2;
  }, []);
  const alphabetCharsToBytes = alphabet.reduce((p2, c2, i2) => {
    p2[c2.codePointAt(0)] = i2;
    return p2;
  }, []);
  function encode(data2) {
    return data2.reduce((p2, c2) => {
      p2 += alphabetBytesToChars[c2];
      return p2;
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
    const data2 = encodeData({ header, payload });
    const signature = ed25519.sign(keyPair.secretKey, data2);
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
  function lessOrEqual(a2, b2) {
    return (a2 | 0) - (b2 | 0) - 1 >>> 31 & 1;
  }
  constantTime.lessOrEqual = lessOrEqual;
  function compare(a2, b2) {
    if (a2.length !== b2.length) {
      return 0;
    }
    var result = 0;
    for (var i2 = 0; i2 < a2.length; i2++) {
      result |= a2[i2] ^ b2[i2];
    }
    return 1 & result - 1 >>> 8;
  }
  constantTime.compare = compare;
  function equal(a2, b2) {
    if (a2.length === 0 || b2.length === 0) {
      return false;
    }
    return compare(a2, b2) !== 0;
  }
  constantTime.equal = equal;
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    var constant_time_12 = constantTime;
    var wipe_12 = wipe$1;
    exports3.DIGEST_LENGTH = 16;
    var Poly1305 = (
      /** @class */
      function() {
        function Poly13052(key) {
          this.digestLength = exports3.DIGEST_LENGTH;
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
          var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
          var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
          while (bytes >= 16) {
            var t0 = m2[mpos + 0] | m2[mpos + 1] << 8;
            h0 += t0 & 8191;
            var t1 = m2[mpos + 2] | m2[mpos + 3] << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            var t2 = m2[mpos + 4] | m2[mpos + 5] << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            var t3 = m2[mpos + 6] | m2[mpos + 7] << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
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
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
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
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
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
            var d2 = c2;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c2 = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c2 += d2 >>> 13;
            d2 &= 8191;
            var d3 = c2;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
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
            d4 += h2 * r2;
            d4 += h3 * r1;
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
            d5 += h2 * r3;
            d5 += h3 * r2;
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
            d6 += h2 * r4;
            d6 += h3 * r3;
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
            d7 += h2 * r5;
            d7 += h3 * r4;
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
            d8 += h2 * r6;
            d8 += h3 * r5;
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
            d9 += h2 * r7;
            d9 += h3 * r6;
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
            h2 = d2;
            h3 = d3;
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
          this._h[2] = h2;
          this._h[3] = h3;
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
          var g2 = new Uint16Array(10);
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
          g2[0] = this._h[0] + 5;
          c2 = g2[0] >>> 13;
          g2[0] &= 8191;
          for (i2 = 1; i2 < 10; i2++) {
            g2[i2] = this._h[i2] + c2;
            c2 = g2[i2] >>> 13;
            g2[i2] &= 8191;
          }
          g2[9] -= 1 << 13;
          mask = (c2 ^ 1) - 1;
          for (i2 = 0; i2 < 10; i2++) {
            g2[i2] &= mask;
          }
          mask = ~mask;
          for (i2 = 0; i2 < 10; i2++) {
            this._h[i2] = this._h[i2] & mask | g2[i2];
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
    exports3.Poly1305 = Poly1305;
    function oneTimeAuth(key, data2) {
      var h2 = new Poly1305(key);
      h2.update(data2);
      var digest = h2.digest();
      h2.clean();
      return digest;
    }
    exports3.oneTimeAuth = oneTimeAuth;
    function equal2(a2, b2) {
      if (a2.length !== exports3.DIGEST_LENGTH || b2.length !== exports3.DIGEST_LENGTH) {
        return false;
      }
      return constant_time_12.equal(a2, b2);
    }
    exports3.equal = equal2;
  })(poly1305);
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    var chacha_1 = chacha;
    var poly1305_1 = poly1305;
    var wipe_12 = wipe$1;
    var binary_12 = binary;
    var constant_time_12 = constantTime;
    exports3.KEY_LENGTH = 32;
    exports3.NONCE_LENGTH = 12;
    exports3.TAG_LENGTH = 16;
    var ZEROS = new Uint8Array(16);
    var ChaCha20Poly1305 = (
      /** @class */
      function() {
        function ChaCha20Poly13052(key) {
          this.nonceLength = exports3.NONCE_LENGTH;
          this.tagLength = exports3.TAG_LENGTH;
          if (key.length !== exports3.KEY_LENGTH) {
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
          var h2 = new poly1305_1.Poly1305(authKey);
          if (associatedData) {
            h2.update(associatedData);
            if (associatedData.length % 16 > 0) {
              h2.update(ZEROS.subarray(associatedData.length % 16));
            }
          }
          h2.update(ciphertext);
          if (ciphertext.length % 16 > 0) {
            h2.update(ZEROS.subarray(ciphertext.length % 16));
          }
          var length = new Uint8Array(8);
          if (associatedData) {
            binary_12.writeUint64LE(associatedData.length, length);
          }
          h2.update(length);
          binary_12.writeUint64LE(ciphertext.length, length);
          h2.update(length);
          var tag = h2.digest();
          for (var i2 = 0; i2 < tag.length; i2++) {
            tagOut[i2] = tag[i2];
          }
          h2.clean();
          wipe_12.wipe(tag);
          wipe_12.wipe(length);
        };
        return ChaCha20Poly13052;
      }()
    );
    exports3.ChaCha20Poly1305 = ChaCha20Poly1305;
  })(chacha20poly1305);
  var hkdf = {};
  var hmac$1 = {};
  var hash = {};
  Object.defineProperty(hash, "__esModule", { value: true });
  function isSerializableHash(h2) {
    return typeof h2.saveState !== "undefined" && typeof h2.restoreState !== "undefined" && typeof h2.cleanSavedState !== "undefined";
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
      HMAC2.prototype.update = function(data2) {
        this._inner.update(data2);
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
  function hmac(hash2, key, data2) {
    var h2 = new HMAC(hash2, key);
    h2.update(data2);
    var digest = h2.digest();
    h2.clean();
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
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    var binary_12 = binary;
    var wipe_12 = wipe$1;
    exports3.DIGEST_LENGTH = 32;
    exports3.BLOCK_SIZE = 64;
    var SHA256 = (
      /** @class */
      function() {
        function SHA2562() {
          this.digestLength = exports3.DIGEST_LENGTH;
          this.blockSize = exports3.BLOCK_SIZE;
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
        SHA2562.prototype.update = function(data2, dataLength) {
          if (dataLength === void 0) {
            dataLength = data2.length;
          }
          if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
              this._buffer[this._bufferLength++] = data2[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data2, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data2[dataPos++];
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
    exports3.SHA256 = SHA256;
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
    function hashBlocks(w2, v2, p2, pos, len) {
      while (len >= 64) {
        var a2 = v2[0];
        var b2 = v2[1];
        var c2 = v2[2];
        var d2 = v2[3];
        var e2 = v2[4];
        var f2 = v2[5];
        var g2 = v2[6];
        var h2 = v2[7];
        for (var i2 = 0; i2 < 16; i2++) {
          var j2 = pos + i2 * 4;
          w2[i2] = binary_12.readUint32BE(p2, j2);
        }
        for (var i2 = 16; i2 < 64; i2++) {
          var u2 = w2[i2 - 2];
          var t1 = (u2 >>> 17 | u2 << 32 - 17) ^ (u2 >>> 19 | u2 << 32 - 19) ^ u2 >>> 10;
          u2 = w2[i2 - 15];
          var t2 = (u2 >>> 7 | u2 << 32 - 7) ^ (u2 >>> 18 | u2 << 32 - 18) ^ u2 >>> 3;
          w2[i2] = (t1 + w2[i2 - 7] | 0) + (t2 + w2[i2 - 16] | 0);
        }
        for (var i2 = 0; i2 < 64; i2++) {
          var t1 = (((e2 >>> 6 | e2 << 32 - 6) ^ (e2 >>> 11 | e2 << 32 - 11) ^ (e2 >>> 25 | e2 << 32 - 25)) + (e2 & f2 ^ ~e2 & g2) | 0) + (h2 + (K2[i2] + w2[i2] | 0) | 0) | 0;
          var t2 = ((a2 >>> 2 | a2 << 32 - 2) ^ (a2 >>> 13 | a2 << 32 - 13) ^ (a2 >>> 22 | a2 << 32 - 22)) + (a2 & b2 ^ a2 & c2 ^ b2 & c2) | 0;
          h2 = g2;
          g2 = f2;
          f2 = e2;
          e2 = d2 + t1 | 0;
          d2 = c2;
          c2 = b2;
          b2 = a2;
          a2 = t1 + t2 | 0;
        }
        v2[0] += a2;
        v2[1] += b2;
        v2[2] += c2;
        v2[3] += d2;
        v2[4] += e2;
        v2[5] += f2;
        v2[6] += g2;
        v2[7] += h2;
        pos += 64;
        len -= 64;
      }
      return pos;
    }
    function hash2(data2) {
      var h2 = new SHA256();
      h2.update(data2);
      var digest = h2.digest();
      h2.clean();
      return digest;
    }
    exports3.hash = hash2;
  })(sha256);
  var x25519 = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.sharedKey = exports3.generateKeyPair = exports3.generateKeyPairFromSeed = exports3.scalarMultBase = exports3.scalarMult = exports3.SHARED_KEY_LENGTH = exports3.SECRET_KEY_LENGTH = exports3.PUBLIC_KEY_LENGTH = void 0;
    const random_1 = random;
    const wipe_12 = wipe$1;
    exports3.PUBLIC_KEY_LENGTH = 32;
    exports3.SECRET_KEY_LENGTH = 32;
    exports3.SHARED_KEY_LENGTH = 32;
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
        let v2 = o2[i2] + c2 + 65535;
        c2 = Math.floor(v2 / 65536);
        o2[i2] = v2 - c2 * 65536;
      }
      o2[0] += c2 - 1 + 37 * (c2 - 1);
    }
    function sel25519(p2, q2, b2) {
      const c2 = ~(b2 - 1);
      for (let i2 = 0; i2 < 16; i2++) {
        const t2 = c2 & (p2[i2] ^ q2[i2]);
        p2[i2] ^= t2;
        q2[i2] ^= t2;
      }
    }
    function pack25519(o2, n2) {
      const m2 = gf();
      const t2 = gf();
      for (let i2 = 0; i2 < 16; i2++) {
        t2[i2] = n2[i2];
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
        const b2 = m2[15] >> 16 & 1;
        m2[14] &= 65535;
        sel25519(t2, m2, 1 - b2);
      }
      for (let i2 = 0; i2 < 16; i2++) {
        o2[2 * i2] = t2[i2] & 255;
        o2[2 * i2 + 1] = t2[i2] >> 8;
      }
    }
    function unpack25519(o2, n2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = n2[2 * i2] + (n2[2 * i2 + 1] << 8);
      }
      o2[15] &= 32767;
    }
    function add(o2, a2, b2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = a2[i2] + b2[i2];
      }
    }
    function sub(o2, a2, b2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o2[i2] = a2[i2] - b2[i2];
      }
    }
    function mul(o2, a2, b2) {
      let v2, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b2[0], b1 = b2[1], b22 = b2[2], b3 = b2[3], b4 = b2[4], b5 = b2[5], b6 = b2[6], b7 = b2[7], b8 = b2[8], b9 = b2[9], b10 = b2[10], b11 = b2[11], b12 = b2[12], b13 = b2[13], b14 = b2[14], b15 = b2[15];
      v2 = a2[0];
      t0 += v2 * b0;
      t1 += v2 * b1;
      t2 += v2 * b22;
      t3 += v2 * b3;
      t4 += v2 * b4;
      t5 += v2 * b5;
      t6 += v2 * b6;
      t7 += v2 * b7;
      t8 += v2 * b8;
      t9 += v2 * b9;
      t10 += v2 * b10;
      t11 += v2 * b11;
      t12 += v2 * b12;
      t13 += v2 * b13;
      t14 += v2 * b14;
      t15 += v2 * b15;
      v2 = a2[1];
      t1 += v2 * b0;
      t2 += v2 * b1;
      t3 += v2 * b22;
      t4 += v2 * b3;
      t5 += v2 * b4;
      t6 += v2 * b5;
      t7 += v2 * b6;
      t8 += v2 * b7;
      t9 += v2 * b8;
      t10 += v2 * b9;
      t11 += v2 * b10;
      t12 += v2 * b11;
      t13 += v2 * b12;
      t14 += v2 * b13;
      t15 += v2 * b14;
      t16 += v2 * b15;
      v2 = a2[2];
      t2 += v2 * b0;
      t3 += v2 * b1;
      t4 += v2 * b22;
      t5 += v2 * b3;
      t6 += v2 * b4;
      t7 += v2 * b5;
      t8 += v2 * b6;
      t9 += v2 * b7;
      t10 += v2 * b8;
      t11 += v2 * b9;
      t12 += v2 * b10;
      t13 += v2 * b11;
      t14 += v2 * b12;
      t15 += v2 * b13;
      t16 += v2 * b14;
      t17 += v2 * b15;
      v2 = a2[3];
      t3 += v2 * b0;
      t4 += v2 * b1;
      t5 += v2 * b22;
      t6 += v2 * b3;
      t7 += v2 * b4;
      t8 += v2 * b5;
      t9 += v2 * b6;
      t10 += v2 * b7;
      t11 += v2 * b8;
      t12 += v2 * b9;
      t13 += v2 * b10;
      t14 += v2 * b11;
      t15 += v2 * b12;
      t16 += v2 * b13;
      t17 += v2 * b14;
      t18 += v2 * b15;
      v2 = a2[4];
      t4 += v2 * b0;
      t5 += v2 * b1;
      t6 += v2 * b22;
      t7 += v2 * b3;
      t8 += v2 * b4;
      t9 += v2 * b5;
      t10 += v2 * b6;
      t11 += v2 * b7;
      t12 += v2 * b8;
      t13 += v2 * b9;
      t14 += v2 * b10;
      t15 += v2 * b11;
      t16 += v2 * b12;
      t17 += v2 * b13;
      t18 += v2 * b14;
      t19 += v2 * b15;
      v2 = a2[5];
      t5 += v2 * b0;
      t6 += v2 * b1;
      t7 += v2 * b22;
      t8 += v2 * b3;
      t9 += v2 * b4;
      t10 += v2 * b5;
      t11 += v2 * b6;
      t12 += v2 * b7;
      t13 += v2 * b8;
      t14 += v2 * b9;
      t15 += v2 * b10;
      t16 += v2 * b11;
      t17 += v2 * b12;
      t18 += v2 * b13;
      t19 += v2 * b14;
      t20 += v2 * b15;
      v2 = a2[6];
      t6 += v2 * b0;
      t7 += v2 * b1;
      t8 += v2 * b22;
      t9 += v2 * b3;
      t10 += v2 * b4;
      t11 += v2 * b5;
      t12 += v2 * b6;
      t13 += v2 * b7;
      t14 += v2 * b8;
      t15 += v2 * b9;
      t16 += v2 * b10;
      t17 += v2 * b11;
      t18 += v2 * b12;
      t19 += v2 * b13;
      t20 += v2 * b14;
      t21 += v2 * b15;
      v2 = a2[7];
      t7 += v2 * b0;
      t8 += v2 * b1;
      t9 += v2 * b22;
      t10 += v2 * b3;
      t11 += v2 * b4;
      t12 += v2 * b5;
      t13 += v2 * b6;
      t14 += v2 * b7;
      t15 += v2 * b8;
      t16 += v2 * b9;
      t17 += v2 * b10;
      t18 += v2 * b11;
      t19 += v2 * b12;
      t20 += v2 * b13;
      t21 += v2 * b14;
      t22 += v2 * b15;
      v2 = a2[8];
      t8 += v2 * b0;
      t9 += v2 * b1;
      t10 += v2 * b22;
      t11 += v2 * b3;
      t12 += v2 * b4;
      t13 += v2 * b5;
      t14 += v2 * b6;
      t15 += v2 * b7;
      t16 += v2 * b8;
      t17 += v2 * b9;
      t18 += v2 * b10;
      t19 += v2 * b11;
      t20 += v2 * b12;
      t21 += v2 * b13;
      t22 += v2 * b14;
      t23 += v2 * b15;
      v2 = a2[9];
      t9 += v2 * b0;
      t10 += v2 * b1;
      t11 += v2 * b22;
      t12 += v2 * b3;
      t13 += v2 * b4;
      t14 += v2 * b5;
      t15 += v2 * b6;
      t16 += v2 * b7;
      t17 += v2 * b8;
      t18 += v2 * b9;
      t19 += v2 * b10;
      t20 += v2 * b11;
      t21 += v2 * b12;
      t22 += v2 * b13;
      t23 += v2 * b14;
      t24 += v2 * b15;
      v2 = a2[10];
      t10 += v2 * b0;
      t11 += v2 * b1;
      t12 += v2 * b22;
      t13 += v2 * b3;
      t14 += v2 * b4;
      t15 += v2 * b5;
      t16 += v2 * b6;
      t17 += v2 * b7;
      t18 += v2 * b8;
      t19 += v2 * b9;
      t20 += v2 * b10;
      t21 += v2 * b11;
      t22 += v2 * b12;
      t23 += v2 * b13;
      t24 += v2 * b14;
      t25 += v2 * b15;
      v2 = a2[11];
      t11 += v2 * b0;
      t12 += v2 * b1;
      t13 += v2 * b22;
      t14 += v2 * b3;
      t15 += v2 * b4;
      t16 += v2 * b5;
      t17 += v2 * b6;
      t18 += v2 * b7;
      t19 += v2 * b8;
      t20 += v2 * b9;
      t21 += v2 * b10;
      t22 += v2 * b11;
      t23 += v2 * b12;
      t24 += v2 * b13;
      t25 += v2 * b14;
      t26 += v2 * b15;
      v2 = a2[12];
      t12 += v2 * b0;
      t13 += v2 * b1;
      t14 += v2 * b22;
      t15 += v2 * b3;
      t16 += v2 * b4;
      t17 += v2 * b5;
      t18 += v2 * b6;
      t19 += v2 * b7;
      t20 += v2 * b8;
      t21 += v2 * b9;
      t22 += v2 * b10;
      t23 += v2 * b11;
      t24 += v2 * b12;
      t25 += v2 * b13;
      t26 += v2 * b14;
      t27 += v2 * b15;
      v2 = a2[13];
      t13 += v2 * b0;
      t14 += v2 * b1;
      t15 += v2 * b22;
      t16 += v2 * b3;
      t17 += v2 * b4;
      t18 += v2 * b5;
      t19 += v2 * b6;
      t20 += v2 * b7;
      t21 += v2 * b8;
      t22 += v2 * b9;
      t23 += v2 * b10;
      t24 += v2 * b11;
      t25 += v2 * b12;
      t26 += v2 * b13;
      t27 += v2 * b14;
      t28 += v2 * b15;
      v2 = a2[14];
      t14 += v2 * b0;
      t15 += v2 * b1;
      t16 += v2 * b22;
      t17 += v2 * b3;
      t18 += v2 * b4;
      t19 += v2 * b5;
      t20 += v2 * b6;
      t21 += v2 * b7;
      t22 += v2 * b8;
      t23 += v2 * b9;
      t24 += v2 * b10;
      t25 += v2 * b11;
      t26 += v2 * b12;
      t27 += v2 * b13;
      t28 += v2 * b14;
      t29 += v2 * b15;
      v2 = a2[15];
      t15 += v2 * b0;
      t16 += v2 * b1;
      t17 += v2 * b22;
      t18 += v2 * b3;
      t19 += v2 * b4;
      t20 += v2 * b5;
      t21 += v2 * b6;
      t22 += v2 * b7;
      t23 += v2 * b8;
      t24 += v2 * b9;
      t25 += v2 * b10;
      t26 += v2 * b11;
      t27 += v2 * b12;
      t28 += v2 * b13;
      t29 += v2 * b14;
      t30 += v2 * b15;
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
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
      t0 += c2 - 1 + 37 * (c2 - 1);
      c2 = 1;
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
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
    function square(o2, a2) {
      mul(o2, a2, a2);
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
    function scalarMult(n2, p2) {
      const z2 = new Uint8Array(32);
      const x2 = new Float64Array(80);
      const a2 = gf(), b2 = gf(), c2 = gf(), d2 = gf(), e2 = gf(), f2 = gf();
      for (let i2 = 0; i2 < 31; i2++) {
        z2[i2] = n2[i2];
      }
      z2[31] = n2[31] & 127 | 64;
      z2[0] &= 248;
      unpack25519(x2, p2);
      for (let i2 = 0; i2 < 16; i2++) {
        b2[i2] = x2[i2];
      }
      a2[0] = d2[0] = 1;
      for (let i2 = 254; i2 >= 0; --i2) {
        const r2 = z2[i2 >>> 3] >>> (i2 & 7) & 1;
        sel25519(a2, b2, r2);
        sel25519(c2, d2, r2);
        add(e2, a2, c2);
        sub(a2, a2, c2);
        add(c2, b2, d2);
        sub(b2, b2, d2);
        square(d2, e2);
        square(f2, a2);
        mul(a2, c2, a2);
        mul(c2, b2, e2);
        add(e2, a2, c2);
        sub(a2, a2, c2);
        square(b2, a2);
        sub(c2, d2, f2);
        mul(a2, c2, _121665);
        add(a2, a2, d2);
        mul(c2, c2, a2);
        mul(a2, d2, f2);
        mul(d2, b2, x2);
        square(b2, e2);
        sel25519(a2, b2, r2);
        sel25519(c2, d2, r2);
      }
      for (let i2 = 0; i2 < 16; i2++) {
        x2[i2 + 16] = a2[i2];
        x2[i2 + 32] = c2[i2];
        x2[i2 + 48] = b2[i2];
        x2[i2 + 64] = d2[i2];
      }
      const x32 = x2.subarray(32);
      const x16 = x2.subarray(16);
      inv25519(x32, x32);
      mul(x16, x16, x32);
      const q2 = new Uint8Array(32);
      pack25519(q2, x16);
      return q2;
    }
    exports3.scalarMult = scalarMult;
    function scalarMultBase(n2) {
      return scalarMult(n2, _9);
    }
    exports3.scalarMultBase = scalarMultBase;
    function generateKeyPairFromSeed(seed) {
      if (seed.length !== exports3.SECRET_KEY_LENGTH) {
        throw new Error(`x25519: seed must be ${exports3.SECRET_KEY_LENGTH} bytes`);
      }
      const secretKey = new Uint8Array(seed);
      const publicKey = scalarMultBase(secretKey);
      return {
        publicKey,
        secretKey
      };
    }
    exports3.generateKeyPairFromSeed = generateKeyPairFromSeed;
    function generateKeyPair2(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed(seed);
      (0, wipe_12.wipe)(seed);
      return result;
    }
    exports3.generateKeyPair = generateKeyPair2;
    function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
      if (mySecretKey.length !== exports3.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect secret key length");
      }
      if (theirPublicKey.length !== exports3.PUBLIC_KEY_LENGTH) {
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
    exports3.sharedKey = sharedKey;
  })(x25519);
  var __spreadArray = function(to2, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i2 = 0, l2 = from2.length, ar2; i2 < l2; i2++) {
        if (ar2 || !(i2 in from2)) {
          if (!ar2)
            ar2 = Array.prototype.slice.call(from2, 0, i2);
          ar2[i2] = from2[i2];
        }
      }
    return to2.concat(ar2 || Array.prototype.slice.call(from2));
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
      var browser2 = _a[0], regex2 = _a[1];
      if (matched) {
        return matched;
      }
      var uaMatch = regex2.exec(ua);
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
      var _a = operatingSystemRules[ii], os2 = _a[0], regex2 = _a[1];
      var match = regex2.exec(ua);
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
    } catch (e2) {
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
  (function(exports3) {
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
            const index2 = result.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode2(key, options), "[", index2, "]"].join("")];
            }
            return [
              ...result,
              [encode2(key, options), "[", encode2(index2, options), "]=", encode2(value, options)].join("")
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
        return keysSorter(Object.keys(input)).sort((a2, b2) => Number(a2) - Number(b2)).map((key) => input[key]);
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
    exports3.extract = extract;
    exports3.parse = parse;
    exports3.stringify = (object, options) => {
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
    exports3.parseUrl = (url, options) => {
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
    exports3.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports3.extract(object.url);
      const parsedQueryFromUrl = exports3.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString2 = exports3.stringify(query, options);
      if (queryString2) {
        queryString2 = `?${queryString2}`;
      }
      let hash2 = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
      }
      return `${url}${queryString2}${hash2}`;
    };
    exports3.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
      }, options);
      const { url, query, fragmentIdentifier } = exports3.parseUrl(input, options);
      return exports3.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports3.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports3.pick(input, exclusionFilter, options);
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
  function L$3(e2, n2) {
    return e2.includes(":") ? [e2] : n2.chains || [];
  }
  const J$1 = "base10", p$2 = "base16", F$3 = "base64pad", H$2 = "utf8", Q$3 = 0, _$3 = 1, Dn = 0, Te$1 = 1, Z$3 = 12, X$1 = 32;
  function kn() {
    const e2 = x25519.generateKeyPair();
    return { privateKey: toString(e2.secretKey, p$2), publicKey: toString(e2.publicKey, p$2) };
  }
  function Vn() {
    const e2 = random.randomBytes(X$1);
    return toString(e2, p$2);
  }
  function Mn(e2, n2) {
    const t2 = x25519.sharedKey(fromString(e2, p$2), fromString(n2, p$2), true), r2 = new HKDF_1(sha256.SHA256, t2).expand(X$1);
    return toString(r2, p$2);
  }
  function Kn(e2) {
    const n2 = sha256.hash(fromString(e2, p$2));
    return toString(n2, p$2);
  }
  function Ln(e2) {
    const n2 = sha256.hash(fromString(e2, H$2));
    return toString(n2, p$2);
  }
  function Pe$1(e2) {
    return fromString(`${e2}`, J$1);
  }
  function j$2(e2) {
    return Number(toString(e2, J$1));
  }
  function xn(e2) {
    const n2 = Pe$1(typeof e2.type < "u" ? e2.type : Q$3);
    if (j$2(n2) === _$3 && typeof e2.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    const t2 = typeof e2.senderPublicKey < "u" ? fromString(e2.senderPublicKey, p$2) : void 0, r2 = typeof e2.iv < "u" ? fromString(e2.iv, p$2) : random.randomBytes(Z$3), o2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e2.symKey, p$2)).seal(r2, fromString(e2.message, H$2));
    return Re$1({ type: n2, sealed: o2, iv: r2, senderPublicKey: t2 });
  }
  function Fn(e2) {
    const n2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e2.symKey, p$2)), { sealed: t2, iv: r2 } = ee$2(e2.encoded), o2 = n2.open(r2, t2);
    if (o2 === null)
      throw new Error("Failed to decrypt");
    return toString(o2, H$2);
  }
  function Re$1(e2) {
    if (j$2(e2.type) === _$3) {
      if (typeof e2.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
      return toString(concat([e2.type, e2.senderPublicKey, e2.iv, e2.sealed]), F$3);
    }
    return toString(concat([e2.type, e2.iv, e2.sealed]), F$3);
  }
  function ee$2(e2) {
    const n2 = fromString(e2, F$3), t2 = n2.slice(Dn, Te$1), r2 = Te$1;
    if (j$2(t2) === _$3) {
      const d2 = r2 + X$1, l2 = d2 + Z$3, c2 = n2.slice(r2, d2), u2 = n2.slice(d2, l2), a2 = n2.slice(l2);
      return { type: t2, sealed: a2, iv: u2, senderPublicKey: c2 };
    }
    const o2 = r2 + Z$3, s2 = n2.slice(r2, o2), i2 = n2.slice(o2);
    return { type: t2, sealed: i2, iv: s2 };
  }
  function Hn(e2, n2) {
    const t2 = ee$2(e2);
    return Ae$1({ type: j$2(t2.type), senderPublicKey: typeof t2.senderPublicKey < "u" ? toString(t2.senderPublicKey, p$2) : void 0, receiverPublicKey: n2 == null ? void 0 : n2.receiverPublicKey });
  }
  function Ae$1(e2) {
    const n2 = (e2 == null ? void 0 : e2.type) || Q$3;
    if (n2 === _$3) {
      if (typeof (e2 == null ? void 0 : e2.senderPublicKey) > "u")
        throw new Error("missing sender public key");
      if (typeof (e2 == null ? void 0 : e2.receiverPublicKey) > "u")
        throw new Error("missing receiver public key");
    }
    return { type: n2, senderPublicKey: e2 == null ? void 0 : e2.senderPublicKey, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey };
  }
  function qn(e2) {
    return e2.type === _$3 && typeof e2.senderPublicKey == "string" && typeof e2.receiverPublicKey == "string";
  }
  var Bn = Object.defineProperty, Ue$2 = Object.getOwnPropertySymbols, Gn = Object.prototype.hasOwnProperty, Wn = Object.prototype.propertyIsEnumerable, _e$1 = (e2, n2, t2) => n2 in e2 ? Bn(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2, $e$2 = (e2, n2) => {
    for (var t2 in n2 || (n2 = {}))
      Gn.call(n2, t2) && _e$1(e2, t2, n2[t2]);
    if (Ue$2)
      for (var t2 of Ue$2(n2))
        Wn.call(n2, t2) && _e$1(e2, t2, n2[t2]);
    return e2;
  };
  const Ce$1 = "ReactNative", m$2 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, De$2 = "js";
  function te$2() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  function $$2() {
    return !getDocument_1() && !!getNavigator_1() && navigator.product === Ce$1;
  }
  function D$4() {
    return !te$2() && !!getNavigator_1() && !!getDocument_1();
  }
  function R$3() {
    return $$2() ? m$2.reactNative : te$2() ? m$2.node : D$4() ? m$2.browser : m$2.unknown;
  }
  function Jn() {
    var e2;
    try {
      return $$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e2 = global.Application) == null ? void 0 : e2.applicationId : void 0;
    } catch {
      return;
    }
  }
  function ke$2(e2, n2) {
    let t2 = queryString.parse(e2);
    return t2 = $e$2($e$2({}, t2), n2), e2 = queryString.stringify(t2), e2;
  }
  function Qn() {
    return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
  }
  function Ve$2() {
    if (R$3() === m$2.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
      const { OS: t2, Version: r2 } = global.Platform;
      return [t2, r2].join("-");
    }
    const e2 = detect();
    if (e2 === null)
      return "unknown";
    const n2 = e2.os ? e2.os.replace(" ", "").toLowerCase() : "unknown";
    return e2.type === "browser" ? [n2, e2.name, e2.version].join("-") : [n2, e2.version].join("-");
  }
  function Me$2() {
    var e2;
    const n2 = R$3();
    return n2 === m$2.browser ? [n2, ((e2 = getLocation_1()) == null ? void 0 : e2.host) || "unknown"].join(":") : n2;
  }
  function Ke$2(e2, n2, t2) {
    const r2 = Ve$2(), o2 = Me$2();
    return [[e2, n2].join("-"), [De$2, t2].join("-"), r2, o2].join("/");
  }
  function Xn({ protocol: e2, version: n2, relayUrl: t2, sdkVersion: r2, auth: o2, projectId: s2, useOnCloseEvent: i2, bundleId: d2 }) {
    const l2 = t2.split("?"), c2 = Ke$2(e2, n2, r2), u2 = { auth: o2, ua: c2, projectId: s2, useOnCloseEvent: i2 || void 0, origin: d2 || void 0 }, a2 = ke$2(l2[1] || "", u2);
    return l2[0] + "?" + a2;
  }
  function O$1(e2, n2) {
    return e2.filter((t2) => n2.includes(t2)).length === e2.length;
  }
  function rt$2(e2) {
    return Object.fromEntries(e2.entries());
  }
  function ot$2(e2) {
    return new Map(Object.entries(e2));
  }
  function at$2(e2 = cjs$4.FIVE_MINUTES, n2) {
    const t2 = cjs$4.toMiliseconds(e2 || cjs$4.FIVE_MINUTES);
    let r2, o2, s2;
    return { resolve: (i2) => {
      s2 && r2 && (clearTimeout(s2), r2(i2));
    }, reject: (i2) => {
      s2 && o2 && (clearTimeout(s2), o2(i2));
    }, done: () => new Promise((i2, d2) => {
      s2 = setTimeout(() => {
        d2(new Error(n2));
      }, t2), r2 = i2, o2 = d2;
    }) };
  }
  function ut$2(e2, n2, t2) {
    return new Promise(async (r2, o2) => {
      const s2 = setTimeout(() => o2(new Error(t2)), n2);
      try {
        const i2 = await e2;
        r2(i2);
      } catch (i2) {
        o2(i2);
      }
      clearTimeout(s2);
    });
  }
  function re$1(e2, n2) {
    if (typeof n2 == "string" && n2.startsWith(`${e2}:`))
      return n2;
    if (e2.toLowerCase() === "topic") {
      if (typeof n2 != "string")
        throw new Error('Value must be "string" for expirer target type: topic');
      return `topic:${n2}`;
    } else if (e2.toLowerCase() === "id") {
      if (typeof n2 != "number")
        throw new Error('Value must be "number" for expirer target type: id');
      return `id:${n2}`;
    }
    throw new Error(`Unknown expirer target type: ${e2}`);
  }
  function lt$2(e2) {
    return re$1("topic", e2);
  }
  function dt$2(e2) {
    return re$1("id", e2);
  }
  function ft$2(e2) {
    const [n2, t2] = e2.split(":"), r2 = { id: void 0, topic: void 0 };
    if (n2 === "topic" && typeof t2 == "string")
      r2.topic = t2;
    else if (n2 === "id" && Number.isInteger(Number(t2)))
      r2.id = Number(t2);
    else
      throw new Error(`Invalid target, expected id:number or topic:string, got ${n2}:${t2}`);
    return r2;
  }
  function pt$2(e2, n2) {
    return cjs$4.fromMiliseconds((n2 || Date.now()) + cjs$4.toMiliseconds(e2));
  }
  function mt$2(e2) {
    return Date.now() >= cjs$4.toMiliseconds(e2);
  }
  function yt$2(e2, n2) {
    return `${e2}${n2 ? `:${n2}` : ""}`;
  }
  async function gt$2({ id: e2, topic: n2, wcDeepLink: t2 }) {
    try {
      if (!t2)
        return;
      const r2 = typeof t2 == "string" ? JSON.parse(t2) : t2;
      let o2 = r2 == null ? void 0 : r2.href;
      if (typeof o2 != "string")
        return;
      o2.endsWith("/") && (o2 = o2.slice(0, -1));
      const s2 = `${o2}/wc?requestId=${e2}&sessionTopic=${n2}`, i2 = R$3();
      i2 === m$2.browser ? s2.startsWith("https://") ? window.open(s2, "_blank", "noreferrer noopener") : window.open(s2, "_self", "noreferrer noopener") : i2 === m$2.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s2);
    } catch (r2) {
      console.error(r2);
    }
  }
  async function ht$2(e2, n2) {
    try {
      return await e2.getItem(n2) || (D$4() ? localStorage.getItem(n2) : void 0);
    } catch (t2) {
      console.error(t2);
    }
  }
  const He$2 = "irn";
  function vt$2(e2) {
    return (e2 == null ? void 0 : e2.relay) || { protocol: He$2 };
  }
  function Et$2(e2) {
    const n2 = RELAY_JSONRPC[e2];
    if (typeof n2 > "u")
      throw new Error(`Relay Protocol not supported: ${e2}`);
    return n2;
  }
  var bt$2 = Object.defineProperty, Nt$2 = Object.defineProperties, Ot$2 = Object.getOwnPropertyDescriptors, qe$2 = Object.getOwnPropertySymbols, St$2 = Object.prototype.hasOwnProperty, wt$2 = Object.prototype.propertyIsEnumerable, Be$2 = (e2, n2, t2) => n2 in e2 ? bt$2(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2, It$2 = (e2, n2) => {
    for (var t2 in n2 || (n2 = {}))
      St$2.call(n2, t2) && Be$2(e2, t2, n2[t2]);
    if (qe$2)
      for (var t2 of qe$2(n2))
        wt$2.call(n2, t2) && Be$2(e2, t2, n2[t2]);
    return e2;
  }, Tt$2 = (e2, n2) => Nt$2(e2, Ot$2(n2));
  function Ge$2(e2, n2 = "-") {
    const t2 = {}, r2 = "relay" + n2;
    return Object.keys(e2).forEach((o2) => {
      if (o2.startsWith(r2)) {
        const s2 = o2.replace(r2, ""), i2 = e2[o2];
        t2[s2] = i2;
      }
    }), t2;
  }
  function Pt$2(e2) {
    e2 = e2.includes("wc://") ? e2.replace("wc://", "") : e2, e2 = e2.includes("wc:") ? e2.replace("wc:", "") : e2;
    const n2 = e2.indexOf(":"), t2 = e2.indexOf("?") !== -1 ? e2.indexOf("?") : void 0, r2 = e2.substring(0, n2), o2 = e2.substring(n2 + 1, t2).split("@"), s2 = typeof t2 < "u" ? e2.substring(t2) : "", i2 = queryString.parse(s2);
    return { protocol: r2, topic: We$2(o2[0]), version: parseInt(o2[1], 10), symKey: i2.symKey, relay: Ge$2(i2), expiryTimestamp: i2.expiryTimestamp ? parseInt(i2.expiryTimestamp, 10) : void 0 };
  }
  function We$2(e2) {
    return e2.startsWith("//") ? e2.substring(2) : e2;
  }
  function ze$1(e2, n2 = "-") {
    const t2 = "relay", r2 = {};
    return Object.keys(e2).forEach((o2) => {
      const s2 = t2 + n2 + o2;
      e2[o2] && (r2[s2] = e2[o2]);
    }), r2;
  }
  function Rt$2(e2) {
    return `${e2.protocol}:${e2.topic}@${e2.version}?` + queryString.stringify(Tt$2(It$2({ symKey: e2.symKey }, ze$1(e2.relay)), { expiryTimestamp: e2.expiryTimestamp }));
  }
  function A$3(e2) {
    const n2 = [];
    return e2.forEach((t2) => {
      const [r2, o2] = t2.split(":");
      n2.push(`${r2}:${o2}`);
    }), n2;
  }
  function Qe$2(e2) {
    const n2 = [];
    return Object.values(e2).forEach((t2) => {
      n2.push(...A$3(t2.accounts));
    }), n2;
  }
  function Ze$1(e2, n2) {
    const t2 = [];
    return Object.values(e2).forEach((r2) => {
      A$3(r2.accounts).includes(n2) && t2.push(...r2.methods);
    }), t2;
  }
  function Xe$1(e2, n2) {
    const t2 = [];
    return Object.values(e2).forEach((r2) => {
      A$3(r2.accounts).includes(n2) && t2.push(...r2.events);
    }), t2;
  }
  const nn = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, tn = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
  function N$2(e2, n2) {
    const { message: t2, code: r2 } = tn[e2];
    return { message: n2 ? `${t2} ${n2}` : t2, code: r2 };
  }
  function U$3(e2, n2) {
    const { message: t2, code: r2 } = nn[e2];
    return { message: n2 ? `${t2} ${n2}` : t2, code: r2 };
  }
  function k$1(e2, n2) {
    return Array.isArray(e2) ? typeof n2 < "u" && e2.length ? e2.every(n2) : true : false;
  }
  function B$3(e2) {
    return Object.getPrototypeOf(e2) === Object.prototype && Object.keys(e2).length;
  }
  function w$4(e2) {
    return typeof e2 > "u";
  }
  function g$4(e2, n2) {
    return n2 && w$4(e2) ? true : typeof e2 == "string" && !!e2.trim().length;
  }
  function G$2(e2, n2) {
    return n2 && w$4(e2) ? true : typeof e2 == "number" && !isNaN(e2);
  }
  function Mt$2(e2, n2) {
    const { requiredNamespaces: t2 } = n2, r2 = Object.keys(e2.namespaces), o2 = Object.keys(t2);
    let s2 = true;
    return O$1(o2, r2) ? (r2.forEach((i2) => {
      const { accounts: d2, methods: l2, events: c2 } = e2.namespaces[i2], u2 = A$3(d2), a2 = t2[i2];
      (!O$1(L$3(i2, a2), u2) || !O$1(a2.methods, l2) || !O$1(a2.events, c2)) && (s2 = false);
    }), s2) : false;
  }
  function V$2(e2) {
    return g$4(e2, false) && e2.includes(":") ? e2.split(":").length === 2 : false;
  }
  function rn(e2) {
    if (g$4(e2, false) && e2.includes(":")) {
      const n2 = e2.split(":");
      if (n2.length === 3) {
        const t2 = n2[0] + ":" + n2[1];
        return !!n2[2] && V$2(t2);
      }
    }
    return false;
  }
  function Kt$2(e2) {
    if (g$4(e2, false))
      try {
        return typeof new URL(e2) < "u";
      } catch {
        return false;
      }
    return false;
  }
  function Lt$2(e2) {
    var n2;
    return (n2 = e2 == null ? void 0 : e2.proposer) == null ? void 0 : n2.publicKey;
  }
  function xt$2(e2) {
    return e2 == null ? void 0 : e2.topic;
  }
  function Ft$2(e2, n2) {
    let t2 = null;
    return g$4(e2 == null ? void 0 : e2.publicKey, false) || (t2 = N$2("MISSING_OR_INVALID", `${n2} controller public key should be a string`)), t2;
  }
  function ie$1(e2) {
    let n2 = true;
    return k$1(e2) ? e2.length && (n2 = e2.every((t2) => g$4(t2, false))) : n2 = false, n2;
  }
  function on(e2, n2, t2) {
    let r2 = null;
    return k$1(n2) && n2.length ? n2.forEach((o2) => {
      r2 || V$2(o2) || (r2 = U$3("UNSUPPORTED_CHAINS", `${t2}, chain ${o2} should be a string and conform to "namespace:chainId" format`));
    }) : V$2(e2) || (r2 = U$3("UNSUPPORTED_CHAINS", `${t2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
  }
  function sn(e2, n2, t2) {
    let r2 = null;
    return Object.entries(e2).forEach(([o2, s2]) => {
      if (r2)
        return;
      const i2 = on(o2, L$3(o2, s2), `${n2} ${t2}`);
      i2 && (r2 = i2);
    }), r2;
  }
  function cn(e2, n2) {
    let t2 = null;
    return k$1(e2) ? e2.forEach((r2) => {
      t2 || rn(r2) || (t2 = U$3("UNSUPPORTED_ACCOUNTS", `${n2}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
    }) : t2 = U$3("UNSUPPORTED_ACCOUNTS", `${n2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t2;
  }
  function an(e2, n2) {
    let t2 = null;
    return Object.values(e2).forEach((r2) => {
      if (t2)
        return;
      const o2 = cn(r2 == null ? void 0 : r2.accounts, `${n2} namespace`);
      o2 && (t2 = o2);
    }), t2;
  }
  function un(e2, n2) {
    let t2 = null;
    return ie$1(e2 == null ? void 0 : e2.methods) ? ie$1(e2 == null ? void 0 : e2.events) || (t2 = U$3("UNSUPPORTED_EVENTS", `${n2}, events should be an array of strings or empty array for no events`)) : t2 = U$3("UNSUPPORTED_METHODS", `${n2}, methods should be an array of strings or empty array for no methods`), t2;
  }
  function ce$3(e2, n2) {
    let t2 = null;
    return Object.values(e2).forEach((r2) => {
      if (t2)
        return;
      const o2 = un(r2, `${n2}, namespace`);
      o2 && (t2 = o2);
    }), t2;
  }
  function Ht$2(e2, n2, t2) {
    let r2 = null;
    if (e2 && B$3(e2)) {
      const o2 = ce$3(e2, n2);
      o2 && (r2 = o2);
      const s2 = sn(e2, n2, t2);
      s2 && (r2 = s2);
    } else
      r2 = N$2("MISSING_OR_INVALID", `${n2}, ${t2} should be an object with data`);
    return r2;
  }
  function ln(e2, n2) {
    let t2 = null;
    if (e2 && B$3(e2)) {
      const r2 = ce$3(e2, n2);
      r2 && (t2 = r2);
      const o2 = an(e2, n2);
      o2 && (t2 = o2);
    } else
      t2 = N$2("MISSING_OR_INVALID", `${n2}, namespaces should be an object with data`);
    return t2;
  }
  function dn(e2) {
    return g$4(e2.protocol, true);
  }
  function qt$2(e2, n2) {
    let t2 = false;
    return n2 && !e2 ? t2 = true : e2 && k$1(e2) && e2.length && e2.forEach((r2) => {
      t2 = dn(r2);
    }), t2;
  }
  function Bt$2(e2) {
    return typeof e2 == "number";
  }
  function Gt$2(e2) {
    return typeof e2 < "u" && typeof e2 !== null;
  }
  function Wt$1(e2) {
    return !(!e2 || typeof e2 != "object" || !e2.code || !G$2(e2.code, false) || !e2.message || !g$4(e2.message, false));
  }
  function zt$2(e2) {
    return !(w$4(e2) || !g$4(e2.method, false));
  }
  function Yt$2(e2) {
    return !(w$4(e2) || w$4(e2.result) && w$4(e2.error) || !G$2(e2.id, false) || !g$4(e2.jsonrpc, false));
  }
  function Jt$2(e2) {
    return !(w$4(e2) || !g$4(e2.name, false));
  }
  function Qt$1(e2, n2) {
    return !(!V$2(n2) || !Qe$2(e2).includes(n2));
  }
  function Zt$1(e2, n2, t2) {
    return g$4(t2, false) ? Ze$1(e2, n2).includes(t2) : false;
  }
  function Xt$1(e2, n2, t2) {
    return g$4(t2, false) ? Xe$1(e2, n2).includes(t2) : false;
  }
  function fn(e2, n2, t2) {
    let r2 = null;
    const o2 = er$2(e2), s2 = nr$2(n2), i2 = Object.keys(o2), d2 = Object.keys(s2), l2 = pn(Object.keys(e2)), c2 = pn(Object.keys(n2)), u2 = l2.filter((a2) => !c2.includes(a2));
    return u2.length && (r2 = N$2("NON_CONFORMING_NAMESPACES", `${t2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u2.toString()}
      Received: ${Object.keys(n2).toString()}`)), O$1(i2, d2) || (r2 = N$2("NON_CONFORMING_NAMESPACES", `${t2} namespaces chains don't satisfy required namespaces.
      Required: ${i2.toString()}
      Approved: ${d2.toString()}`)), Object.keys(n2).forEach((a2) => {
      if (!a2.includes(":") || r2)
        return;
      const b2 = A$3(n2[a2].accounts);
      b2.includes(a2) || (r2 = N$2("NON_CONFORMING_NAMESPACES", `${t2} namespaces accounts don't satisfy namespace accounts for ${a2}
        Required: ${a2}
        Approved: ${b2.toString()}`));
    }), i2.forEach((a2) => {
      r2 || (O$1(o2[a2].methods, s2[a2].methods) ? O$1(o2[a2].events, s2[a2].events) || (r2 = N$2("NON_CONFORMING_NAMESPACES", `${t2} namespaces events don't satisfy namespace events for ${a2}`)) : r2 = N$2("NON_CONFORMING_NAMESPACES", `${t2} namespaces methods don't satisfy namespace methods for ${a2}`));
    }), r2;
  }
  function er$2(e2) {
    const n2 = {};
    return Object.keys(e2).forEach((t2) => {
      var r2;
      t2.includes(":") ? n2[t2] = e2[t2] : (r2 = e2[t2].chains) == null || r2.forEach((o2) => {
        n2[o2] = { methods: e2[t2].methods, events: e2[t2].events };
      });
    }), n2;
  }
  function pn(e2) {
    return [...new Set(e2.map((n2) => n2.includes(":") ? n2.split(":")[0] : n2))];
  }
  function nr$2(e2) {
    const n2 = {};
    return Object.keys(e2).forEach((t2) => {
      if (t2.includes(":"))
        n2[t2] = e2[t2];
      else {
        const r2 = A$3(e2[t2].accounts);
        r2 == null ? void 0 : r2.forEach((o2) => {
          n2[o2] = { accounts: e2[t2].accounts.filter((s2) => s2.includes(`${o2}:`)), methods: e2[t2].methods, events: e2[t2].events };
        });
      }
    }), n2;
  }
  function tr$2(e2, n2) {
    return G$2(e2, false) && e2 <= n2.max && e2 >= n2.min;
  }
  function rr$2() {
    const e2 = R$3();
    return new Promise((n2) => {
      switch (e2) {
        case m$2.browser:
          n2(mn());
          break;
        case m$2.reactNative:
          n2(yn());
          break;
        case m$2.node:
          n2(gn());
          break;
        default:
          n2(true);
      }
    });
  }
  function mn() {
    return D$4() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function yn() {
    if ($$2() && typeof global < "u" && global != null && global.NetInfo) {
      const e2 = await (global == null ? void 0 : global.NetInfo.fetch());
      return e2 == null ? void 0 : e2.isConnected;
    }
    return true;
  }
  function gn() {
    return true;
  }
  function or$2(e2) {
    switch (R$3()) {
      case m$2.browser:
        hn(e2);
        break;
      case m$2.reactNative:
        vn(e2);
        break;
    }
  }
  function hn(e2) {
    !$$2() && D$4() && (window.addEventListener("online", () => e2(true)), window.addEventListener("offline", () => e2(false)));
  }
  function vn(e2) {
    $$2() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((n2) => e2(n2 == null ? void 0 : n2.isConnected)));
  }
  const ae$2 = {};
  let sr$2 = class sr {
    static get(n2) {
      return ae$2[n2];
    }
    static set(n2, t2) {
      ae$2[n2] = t2;
    }
    static delete(n2) {
      delete ae$2[n2];
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
    const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code);
    if (!match) {
      return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return match;
  }
  function parseConnectionError(e2, url, type2) {
    return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type2} RPC url at ${url}`) : e2;
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
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    const tslib_1 = require$$0$2;
    tslib_1.__exportStar(requireCrypto(), exports3);
    tslib_1.__exportStar(requireEnv(), exports3);
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
  function formatJsonRpcError(id, error, data2) {
    return {
      id,
      jsonrpc: "2.0",
      error: formatErrorMessage(error, data2)
    };
  }
  function formatErrorMessage(error, data2) {
    if (typeof error === "undefined") {
      return getError(INTERNAL_ERROR);
    }
    if (typeof error === "string") {
      error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
    }
    if (typeof data2 !== "undefined") {
      error.data = data2;
    }
    if (isReservedErrorCode(error.code)) {
      error = getErrorByCode(error.code);
    }
    return error;
  }
  class IEvents {
  }
  class IBaseJsonRpcProvider extends IEvents {
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
  function matchRegexProtocol(url, regex2) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined")
      return false;
    return new RegExp(regex2).test(protocol);
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
          } catch (e2) {
            reject(e2);
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
        } catch (e2) {
          reject(e2);
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
  const w$3 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), b$1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", a$3 = (c2) => c2.split("?")[0], h$4 = 10, S$4 = w$3();
  let f$1 = class f {
    constructor(e2) {
      if (this.url = e2, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e2))
        throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
      this.url = e2;
    }
    get connected() {
      return typeof this.socket < "u";
    }
    get connecting() {
      return this.registering;
    }
    on(e2, t2) {
      this.events.on(e2, t2);
    }
    once(e2, t2) {
      this.events.once(e2, t2);
    }
    off(e2, t2) {
      this.events.off(e2, t2);
    }
    removeListener(e2, t2) {
      this.events.removeListener(e2, t2);
    }
    async open(e2 = this.url) {
      await this.register(e2);
    }
    async close() {
      return new Promise((e2, t2) => {
        if (typeof this.socket > "u") {
          t2(new Error("Connection already closed"));
          return;
        }
        this.socket.onclose = (n2) => {
          this.onClose(n2), e2();
        }, this.socket.close();
      });
    }
    async send(e2) {
      typeof this.socket > "u" && (this.socket = await this.register());
      try {
        this.socket.send(safeJsonStringify(e2));
      } catch (t2) {
        this.onError(e2.id, t2);
      }
    }
    register(e2 = this.url) {
      if (!isWsUrl(e2))
        throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
      if (this.registering) {
        const t2 = this.events.getMaxListeners();
        return (this.events.listenerCount("register_error") >= t2 || this.events.listenerCount("open") >= t2) && this.events.setMaxListeners(t2 + 1), new Promise((n2, o2) => {
          this.events.once("register_error", (s2) => {
            this.resetMaxListeners(), o2(s2);
          }), this.events.once("open", () => {
            if (this.resetMaxListeners(), typeof this.socket > "u")
              return o2(new Error("WebSocket connection is missing or invalid"));
            n2(this.socket);
          });
        });
      }
      return this.url = e2, this.registering = true, new Promise((t2, n2) => {
        const o2 = new URLSearchParams(e2).get("origin"), s2 = cjs.isReactNative() ? { headers: { origin: o2 } } : { rejectUnauthorized: !isLocalhostUrl(e2) }, i2 = new S$4(e2, [], s2);
        b$1() ? i2.onerror = (r2) => {
          const l2 = r2;
          n2(this.emitError(l2.error));
        } : i2.on("error", (r2) => {
          n2(this.emitError(r2));
        }), i2.onopen = () => {
          this.onOpen(i2), t2(i2);
        };
      });
    }
    onOpen(e2) {
      e2.onmessage = (t2) => this.onPayload(t2), e2.onclose = (t2) => this.onClose(t2), this.socket = e2, this.registering = false, this.events.emit("open");
    }
    onClose(e2) {
      this.socket = void 0, this.registering = false, this.events.emit("close", e2);
    }
    onPayload(e2) {
      if (typeof e2.data > "u")
        return;
      const t2 = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
      this.events.emit("payload", t2);
    }
    onError(e2, t2) {
      const n2 = this.parseError(t2), o2 = n2.message || n2.toString(), s2 = formatJsonRpcError(e2, o2);
      this.events.emit("payload", s2);
    }
    parseError(e2, t2 = this.url) {
      return parseConnectionError(e2, a$3(t2), "WS");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > h$4 && this.events.setMaxListeners(h$4);
    }
    emitError(e2) {
      const t2 = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${a$3(this.url)}`));
      return this.events.emit("register_error", t2), t2;
    }
  };
  var lodash_isequal = { exports: {} };
  lodash_isequal.exports;
  (function(module3, exports3) {
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
    var freeExports = exports3 && !exports3.nodeType && exports3;
    var freeModule = freeExports && true && module3 && !module3.nodeType && module3;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n2, iteratee) {
      var index2 = -1, result = Array(n2);
      while (++index2 < n2) {
        result[index2] = iteratee(index2);
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
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index2 = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index2] = value;
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
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
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
      var data2 = this.__data__;
      if (nativeCreate) {
        var result = data2[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data2, key) ? data2[key] : void 0;
    }
    function hashHas(key) {
      var data2 = this.__data__;
      return nativeCreate ? data2[key] !== void 0 : hasOwnProperty.call(data2, key);
    }
    function hashSet(key, value) {
      var data2 = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data2 = this.__data__, index2 = assocIndexOf(data2, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data2.length - 1;
      if (index2 == lastIndex) {
        data2.pop();
      } else {
        splice.call(data2, index2, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data2 = this.__data__, index2 = assocIndexOf(data2, key);
      return index2 < 0 ? void 0 : data2[index2][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data2 = this.__data__, index2 = assocIndexOf(data2, key);
      if (index2 < 0) {
        ++this.size;
        data2.push([key, value]);
      } else {
        data2[index2][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
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
      var data2 = getMapData(this, key), size = data2.size;
      data2.set(key, value);
      this.size += data2.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index2 = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values[index2]);
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
      var data2 = this.__data__ = new ListCache(entries);
      this.size = data2.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data2 = this.__data__, result = data2["delete"](key);
      this.size = data2.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data2 = this.__data__;
      if (data2 instanceof ListCache) {
        var pairs = data2.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data2.size;
          return this;
        }
        data2 = this.__data__ = new MapCache(pairs);
      }
      data2.set(key, value);
      this.size = data2.size;
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
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
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
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index2 < arrLength) {
        var arrValue = array[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
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
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
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
      while (++index2 < objLength) {
        key = objProps[index2];
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
      var data2 = map.__data__;
      return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
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
      } catch (e2) {
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
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
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
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction2(value) {
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
    module3.exports = isEqual;
  })(lodash_isequal, lodash_isequal.exports);
  var lodash_isequalExports = lodash_isequal.exports;
  const Gi = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
  function unfetch_module(e2, n2) {
    return n2 = n2 || {}, new Promise(function(t2, r2) {
      var s2 = new XMLHttpRequest(), o2 = [], u2 = [], i2 = {}, a2 = function() {
        return { ok: 2 == (s2.status / 100 | 0), statusText: s2.statusText, status: s2.status, url: s2.responseURL, text: function() {
          return Promise.resolve(s2.responseText);
        }, json: function() {
          return Promise.resolve(s2.responseText).then(JSON.parse);
        }, blob: function() {
          return Promise.resolve(new Blob([s2.response]));
        }, clone: a2, headers: { keys: function() {
          return o2;
        }, entries: function() {
          return u2;
        }, get: function(e3) {
          return i2[e3.toLowerCase()];
        }, has: function(e3) {
          return e3.toLowerCase() in i2;
        } } };
      };
      for (var l2 in s2.open(n2.method || "get", e2, true), s2.onload = function() {
        s2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e3, n3, t3) {
          o2.push(n3 = n3.toLowerCase()), u2.push([n3, t3]), i2[n3] = i2[n3] ? i2[n3] + "," + t3 : t3;
        }), t2(a2());
      }, s2.onerror = r2, s2.withCredentials = "include" == n2.credentials, n2.headers)
        s2.setRequestHeader(l2, n2.headers[l2]);
      s2.send(n2.body || null);
    });
  }
  const unfetch_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: unfetch_module
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0 = /* @__PURE__ */ getAugmentedNamespace(unfetch_module$1);
  var browser$3 = fetch || (self.fetch = require$$0.default || require$$0);
  const Yi = /* @__PURE__ */ getDefaultExportFromCjs(browser$3);
  function Hi(n2, e2) {
    if (n2.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var t2 = new Uint8Array(256), i2 = 0; i2 < t2.length; i2++)
      t2[i2] = 255;
    for (var s2 = 0; s2 < n2.length; s2++) {
      var r2 = n2.charAt(s2), o2 = r2.charCodeAt(0);
      if (t2[o2] !== 255)
        throw new TypeError(r2 + " is ambiguous");
      t2[o2] = s2;
    }
    var a2 = n2.length, h2 = n2.charAt(0), l2 = Math.log(a2) / Math.log(256), d2 = Math.log(256) / Math.log(a2);
    function p2(u2) {
      if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (u2.length === 0)
        return "";
      for (var m2 = 0, z2 = 0, I2 = 0, _2 = u2.length; I2 !== _2 && u2[I2] === 0; )
        I2++, m2++;
      for (var T2 = (_2 - I2) * d2 + 1 >>> 0, f2 = new Uint8Array(T2); I2 !== _2; ) {
        for (var S2 = u2[I2], A2 = 0, C2 = T2 - 1; (S2 !== 0 || A2 < z2) && C2 !== -1; C2--, A2++)
          S2 += 256 * f2[C2] >>> 0, f2[C2] = S2 % a2 >>> 0, S2 = S2 / a2 >>> 0;
        if (S2 !== 0)
          throw new Error("Non-zero carry");
        z2 = A2, I2++;
      }
      for (var x2 = T2 - z2; x2 !== T2 && f2[x2] === 0; )
        x2++;
      for (var j2 = h2.repeat(m2); x2 < T2; ++x2)
        j2 += n2.charAt(f2[x2]);
      return j2;
    }
    function y2(u2) {
      if (typeof u2 != "string")
        throw new TypeError("Expected String");
      if (u2.length === 0)
        return new Uint8Array();
      var m2 = 0;
      if (u2[m2] !== " ") {
        for (var z2 = 0, I2 = 0; u2[m2] === h2; )
          z2++, m2++;
        for (var _2 = (u2.length - m2) * l2 + 1 >>> 0, T2 = new Uint8Array(_2); u2[m2]; ) {
          var f2 = t2[u2.charCodeAt(m2)];
          if (f2 === 255)
            return;
          for (var S2 = 0, A2 = _2 - 1; (f2 !== 0 || S2 < I2) && A2 !== -1; A2--, S2++)
            f2 += a2 * T2[A2] >>> 0, T2[A2] = f2 % 256 >>> 0, f2 = f2 / 256 >>> 0;
          if (f2 !== 0)
            throw new Error("Non-zero carry");
          I2 = S2, m2++;
        }
        if (u2[m2] !== " ") {
          for (var C2 = _2 - I2; C2 !== _2 && T2[C2] === 0; )
            C2++;
          for (var x2 = new Uint8Array(z2 + (_2 - C2)), j2 = z2; C2 !== _2; )
            x2[j2++] = T2[C2++];
          return x2;
        }
      }
    }
    function M2(u2) {
      var m2 = y2(u2);
      if (m2)
        return m2;
      throw new Error(`Non-${e2} character`);
    }
    return { encode: p2, decodeUnsafe: y2, decode: M2 };
  }
  var Ji = Hi, Xi = Ji;
  const Ne = (n2) => {
    if (n2 instanceof Uint8Array && n2.constructor.name === "Uint8Array")
      return n2;
    if (n2 instanceof ArrayBuffer)
      return new Uint8Array(n2);
    if (ArrayBuffer.isView(n2))
      return new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, Wi = (n2) => new TextEncoder().encode(n2), Qi = (n2) => new TextDecoder().decode(n2);
  class Zi {
    constructor(e2, t2, i2) {
      this.name = e2, this.prefix = t2, this.baseEncode = i2;
    }
    encode(e2) {
      if (e2 instanceof Uint8Array)
        return `${this.prefix}${this.baseEncode(e2)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class es {
    constructor(e2, t2, i2) {
      if (this.name = e2, this.prefix = t2, t2.codePointAt(0) === void 0)
        throw new Error("Invalid prefix character");
      this.prefixCodePoint = t2.codePointAt(0), this.baseDecode = i2;
    }
    decode(e2) {
      if (typeof e2 == "string") {
        if (e2.codePointAt(0) !== this.prefixCodePoint)
          throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e2.slice(this.prefix.length));
      } else
        throw Error("Can only multibase decode strings");
    }
    or(e2) {
      return Ue$1(this, e2);
    }
  }
  class ts {
    constructor(e2) {
      this.decoders = e2;
    }
    or(e2) {
      return Ue$1(this, e2);
    }
    decode(e2) {
      const t2 = e2[0], i2 = this.decoders[t2];
      if (i2)
        return i2.decode(e2);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const Ue$1 = (n2, e2) => new ts({ ...n2.decoders || { [n2.prefix]: n2 }, ...e2.decoders || { [e2.prefix]: e2 } });
  class is {
    constructor(e2, t2, i2, s2) {
      this.name = e2, this.prefix = t2, this.baseEncode = i2, this.baseDecode = s2, this.encoder = new Zi(e2, t2, i2), this.decoder = new es(e2, t2, s2);
    }
    encode(e2) {
      return this.encoder.encode(e2);
    }
    decode(e2) {
      return this.decoder.decode(e2);
    }
  }
  const W$1 = ({ name: n2, prefix: e2, encode: t2, decode: i2 }) => new is(n2, e2, t2, i2), B$2 = ({ prefix: n2, name: e2, alphabet: t2 }) => {
    const { encode: i2, decode: s2 } = Xi(t2, e2);
    return W$1({ prefix: n2, name: e2, encode: i2, decode: (r2) => Ne(s2(r2)) });
  }, ss = (n2, e2, t2, i2) => {
    const s2 = {};
    for (let d2 = 0; d2 < e2.length; ++d2)
      s2[e2[d2]] = d2;
    let r2 = n2.length;
    for (; n2[r2 - 1] === "="; )
      --r2;
    const o2 = new Uint8Array(r2 * t2 / 8 | 0);
    let a2 = 0, h2 = 0, l2 = 0;
    for (let d2 = 0; d2 < r2; ++d2) {
      const p2 = s2[n2[d2]];
      if (p2 === void 0)
        throw new SyntaxError(`Non-${i2} character`);
      h2 = h2 << t2 | p2, a2 += t2, a2 >= 8 && (a2 -= 8, o2[l2++] = 255 & h2 >> a2);
    }
    if (a2 >= t2 || 255 & h2 << 8 - a2)
      throw new SyntaxError("Unexpected end of data");
    return o2;
  }, rs = (n2, e2, t2) => {
    const i2 = e2[e2.length - 1] === "=", s2 = (1 << t2) - 1;
    let r2 = "", o2 = 0, a2 = 0;
    for (let h2 = 0; h2 < n2.length; ++h2)
      for (a2 = a2 << 8 | n2[h2], o2 += 8; o2 > t2; )
        o2 -= t2, r2 += e2[s2 & a2 >> o2];
    if (o2 && (r2 += e2[s2 & a2 << t2 - o2]), i2)
      for (; r2.length * t2 & 7; )
        r2 += "=";
    return r2;
  }, g$3 = ({ name: n2, prefix: e2, bitsPerChar: t2, alphabet: i2 }) => W$1({ prefix: e2, name: n2, encode(s2) {
    return rs(s2, i2, t2);
  }, decode(s2) {
    return ss(s2, i2, t2, n2);
  } }), ns = W$1({ prefix: "\0", name: "identity", encode: (n2) => Qi(n2), decode: (n2) => Wi(n2) });
  var os = Object.freeze({ __proto__: null, identity: ns });
  const as$1 = g$3({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
  var hs$1 = Object.freeze({ __proto__: null, base2: as$1 });
  const cs$1 = g$3({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
  var us$1 = Object.freeze({ __proto__: null, base8: cs$1 });
  const ls$1 = B$2({ prefix: "9", name: "base10", alphabet: "0123456789" });
  var ds$1 = Object.freeze({ __proto__: null, base10: ls$1 });
  const gs$1 = g$3({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ps$1 = g$3({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
  var Ds = Object.freeze({ __proto__: null, base16: gs$1, base16upper: ps$1 });
  const ys = g$3({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ms$1 = g$3({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bs = g$3({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fs = g$3({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Es = g$3({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ws = g$3({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), vs = g$3({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Is = g$3({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Cs = g$3({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
  var Rs = Object.freeze({ __proto__: null, base32: ys, base32upper: ms$1, base32pad: bs, base32padupper: fs, base32hex: Es, base32hexupper: ws, base32hexpad: vs, base32hexpadupper: Is, base32z: Cs });
  const _s = B$2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Ts = B$2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
  var Ss = Object.freeze({ __proto__: null, base36: _s, base36upper: Ts });
  const Ps = B$2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), xs = B$2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
  var Os = Object.freeze({ __proto__: null, base58btc: Ps, base58flickr: xs });
  const As = g$3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), zs = g$3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Ns = g$3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Us = g$3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
  var Ls = Object.freeze({ __proto__: null, base64: As, base64pad: zs, base64url: Ns, base64urlpad: Us });
  const Le$1 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), $s = Le$1.reduce((n2, e2, t2) => (n2[t2] = e2, n2), []), Fs = Le$1.reduce((n2, e2, t2) => (n2[e2.codePointAt(0)] = t2, n2), []);
  function Ms(n2) {
    return n2.reduce((e2, t2) => (e2 += $s[t2], e2), "");
  }
  function ks(n2) {
    const e2 = [];
    for (const t2 of n2) {
      const i2 = Fs[t2.codePointAt(0)];
      if (i2 === void 0)
        throw new Error(`Non-base256emoji character: ${t2}`);
      e2.push(i2);
    }
    return new Uint8Array(e2);
  }
  const Ks = W$1({ prefix: "🚀", name: "base256emoji", encode: Ms, decode: ks });
  var Bs = Object.freeze({ __proto__: null, base256emoji: Ks }), Vs = Fe$1, $e$1 = 128, qs = 127, js = ~qs, Gs = Math.pow(2, 31);
  function Fe$1(n2, e2, t2) {
    e2 = e2 || [], t2 = t2 || 0;
    for (var i2 = t2; n2 >= Gs; )
      e2[t2++] = n2 & 255 | $e$1, n2 /= 128;
    for (; n2 & js; )
      e2[t2++] = n2 & 255 | $e$1, n2 >>>= 7;
    return e2[t2] = n2 | 0, Fe$1.bytes = t2 - i2 + 1, e2;
  }
  var Ys = he$2, Hs = 128, Me$1 = 127;
  function he$2(n2, i2) {
    var t2 = 0, i2 = i2 || 0, s2 = 0, r2 = i2, o2, a2 = n2.length;
    do {
      if (r2 >= a2)
        throw he$2.bytes = 0, new RangeError("Could not decode varint");
      o2 = n2[r2++], t2 += s2 < 28 ? (o2 & Me$1) << s2 : (o2 & Me$1) * Math.pow(2, s2), s2 += 7;
    } while (o2 >= Hs);
    return he$2.bytes = r2 - i2, t2;
  }
  var Js = Math.pow(2, 7), Xs = Math.pow(2, 14), Ws = Math.pow(2, 21), Qs = Math.pow(2, 28), Zs = Math.pow(2, 35), er$1 = Math.pow(2, 42), tr$1 = Math.pow(2, 49), ir$1 = Math.pow(2, 56), sr$1 = Math.pow(2, 63), rr$1 = function(n2) {
    return n2 < Js ? 1 : n2 < Xs ? 2 : n2 < Ws ? 3 : n2 < Qs ? 4 : n2 < Zs ? 5 : n2 < er$1 ? 6 : n2 < tr$1 ? 7 : n2 < ir$1 ? 8 : n2 < sr$1 ? 9 : 10;
  }, nr$1 = { encode: Vs, decode: Ys, encodingLength: rr$1 }, ke$1 = nr$1;
  const Ke$1 = (n2, e2, t2 = 0) => (ke$1.encode(n2, e2, t2), e2), Be$1 = (n2) => ke$1.encodingLength(n2), ce$2 = (n2, e2) => {
    const t2 = e2.byteLength, i2 = Be$1(n2), s2 = i2 + Be$1(t2), r2 = new Uint8Array(s2 + t2);
    return Ke$1(n2, r2, 0), Ke$1(t2, r2, i2), r2.set(e2, s2), new or$1(n2, t2, e2, r2);
  };
  let or$1 = class or {
    constructor(e2, t2, i2, s2) {
      this.code = e2, this.size = t2, this.digest = i2, this.bytes = s2;
    }
  };
  const Ve$1 = ({ name: n2, code: e2, encode: t2 }) => new ar$1(n2, e2, t2);
  let ar$1 = class ar {
    constructor(e2, t2, i2) {
      this.name = e2, this.code = t2, this.encode = i2;
    }
    digest(e2) {
      if (e2 instanceof Uint8Array) {
        const t2 = this.encode(e2);
        return t2 instanceof Uint8Array ? ce$2(this.code, t2) : t2.then((i2) => ce$2(this.code, i2));
      } else
        throw Error("Unknown type, must be binary type");
    }
  };
  const qe$1 = (n2) => async (e2) => new Uint8Array(await crypto.subtle.digest(n2, e2)), hr$1 = Ve$1({ name: "sha2-256", code: 18, encode: qe$1("SHA-256") }), cr$1 = Ve$1({ name: "sha2-512", code: 19, encode: qe$1("SHA-512") });
  var ur = Object.freeze({ __proto__: null, sha256: hr$1, sha512: cr$1 });
  const je$1 = 0, lr$1 = "identity", Ge$1 = Ne, dr$1 = (n2) => ce$2(je$1, Ge$1(n2)), gr = { code: je$1, name: lr$1, encode: Ge$1, digest: dr$1 };
  var pr = Object.freeze({ __proto__: null, identity: gr });
  new TextEncoder(), new TextDecoder();
  const Ye$1 = { ...os, ...hs$1, ...us$1, ...ds$1, ...Ds, ...Rs, ...Ss, ...Os, ...Ls, ...Bs };
  ({ ...ur, ...pr });
  function He$1(n2) {
    return globalThis.Buffer != null ? new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength) : n2;
  }
  function Dr(n2 = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? He$1(globalThis.Buffer.allocUnsafe(n2)) : new Uint8Array(n2);
  }
  function Je(n2, e2, t2, i2) {
    return { name: n2, prefix: e2, encoder: { name: n2, prefix: e2, encode: t2 }, decoder: { decode: i2 } };
  }
  const Xe = Je("utf8", "u", (n2) => "u" + new TextDecoder("utf8").decode(n2), (n2) => new TextEncoder().encode(n2.substring(1))), ue$2 = Je("ascii", "a", (n2) => {
    let e2 = "a";
    for (let t2 = 0; t2 < n2.length; t2++)
      e2 += String.fromCharCode(n2[t2]);
    return e2;
  }, (n2) => {
    n2 = n2.substring(1);
    const e2 = Dr(n2.length);
    for (let t2 = 0; t2 < n2.length; t2++)
      e2[t2] = n2.charCodeAt(t2);
    return e2;
  }), yr = { utf8: Xe, "utf-8": Xe, hex: Ye$1.base16, latin1: ue$2, ascii: ue$2, binary: ue$2, ...Ye$1 };
  function mr$1(n2, e2 = "utf8") {
    const t2 = yr[e2];
    if (!t2)
      throw new Error(`Unsupported encoding "${e2}"`);
    return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? He$1(globalThis.Buffer.from(n2, "utf-8")) : t2.decoder.decode(`${t2.prefix}${n2}`);
  }
  const le$2 = "wc", We$1 = 2, Q$2 = "core", O = `${le$2}@2:${Q$2}:`, Qe$1 = { name: Q$2, logger: "error" }, Ze = { database: ":memory:" }, et$1 = "crypto", de$2 = "client_ed25519_seed", tt$1 = cjs$4.ONE_DAY, it$1 = "keychain", st$1 = "0.3", rt$1 = "messages", nt$1 = "0.3", ot$1 = cjs$4.SIX_HOURS, at$1 = "publisher", ht$1 = "irn", ct$1 = "error", ge$1 = "wss://relay.walletconnect.com", pe$1 = "wss://relay.walletconnect.org", ut$1 = "relayer", D$3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, lt$1 = "_subscription", P$2 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, dt$1 = cjs$4.ONE_SECOND, gt$1 = "2.11.2", pt$1 = 1e4, Dt$1 = "0.3", yt$1 = "WALLETCONNECT_CLIENT_ID", w$2 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, mt$1 = "subscription", bt$1 = "0.3", ft$1 = cjs$4.FIVE_SECONDS * 1e3, Et$1 = "pairing", wt$1 = "0.3", $$1 = { wc_pairingDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 0 } } }, V$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, R$2 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, vt$1 = "history", It$1 = "0.3", Ct$1 = "expirer", v$2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Rt$1 = "0.3", Z$2 = "verify-api", F$2 = "https://verify.walletconnect.com", ee$1 = "https://verify.walletconnect.org", _t$1 = [F$2, ee$1], Tt$1 = "echo", St$1 = "https://echo.walletconnect.com";
  let Pt$1 = class Pt {
    constructor(e2, t2) {
      this.core = e2, this.logger = t2, this.keychain = /* @__PURE__ */ new Map(), this.name = it$1, this.version = st$1, this.initialized = false, this.storagePrefix = O, this.init = async () => {
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
          const { message: r2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${i2}`);
          throw new Error(r2);
        }
        return s2;
      }, this.del = async (i2) => {
        this.isInitialized(), this.keychain.delete(i2), await this.persist();
      }, this.core = e2, this.logger = cjs$3.generateChildLogger(t2, this.name);
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e2) {
      await this.core.storage.setItem(this.storageKey, rt$2(e2));
    }
    async getKeyChain() {
      const e2 = await this.core.storage.getItem(this.storageKey);
      return typeof e2 < "u" ? ot$2(e2) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  let xt$1 = class xt {
    constructor(e2, t2, i2) {
      this.core = e2, this.logger = t2, this.name = et$1, this.initialized = false, this.init = async () => {
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
        const r2 = await this.getClientSeed(), o2 = generateKeyPair(r2), a2 = Vn(), h2 = tt$1;
        return await signJWT(a2, s2, h2, o2);
      }, this.generateSharedKey = (s2, r2, o2) => {
        this.isInitialized();
        const a2 = this.getPrivateKey(s2), h2 = Mn(a2, r2);
        return this.setSymKey(h2, o2);
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
        const a2 = Ae$1(o2), h2 = safeJsonStringify(r2);
        if (qn(a2)) {
          const y2 = a2.senderPublicKey, M2 = a2.receiverPublicKey;
          s2 = await this.generateSharedKey(y2, M2);
        }
        const l2 = this.getSymKey(s2), { type: d2, senderPublicKey: p2 } = a2;
        return xn({ type: d2, symKey: l2, message: h2, senderPublicKey: p2 });
      }, this.decode = async (s2, r2, o2) => {
        this.isInitialized();
        const a2 = Hn(r2, o2);
        if (qn(a2)) {
          const h2 = a2.receiverPublicKey, l2 = a2.senderPublicKey;
          s2 = await this.generateSharedKey(h2, l2);
        }
        try {
          const h2 = this.getSymKey(s2), l2 = Fn({ symKey: h2, encoded: r2 });
          return safeJsonParse(l2);
        } catch (h2) {
          this.logger.error(`Failed to decode message from topic: '${s2}', clientId: '${await this.getClientId()}'`), this.logger.error(h2);
        }
      }, this.getPayloadType = (s2) => {
        const r2 = ee$2(s2);
        return j$2(r2.type);
      }, this.getPayloadSenderPublicKey = (s2) => {
        const r2 = ee$2(s2);
        return r2.senderPublicKey ? toString(r2.senderPublicKey, p$2) : void 0;
      }, this.core = e2, this.logger = cjs$3.generateChildLogger(t2, this.name), this.keychain = i2 || new Pt$1(this.core, this.logger);
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    async setPrivateKey(e2, t2) {
      return await this.keychain.set(e2, t2), e2;
    }
    getPrivateKey(e2) {
      return this.keychain.get(e2);
    }
    async getClientSeed() {
      let e2 = "";
      try {
        e2 = this.keychain.get(de$2);
      } catch {
        e2 = Vn(), await this.keychain.set(de$2, e2);
      }
      return mr$1(e2, "base16");
    }
    getSymKey(e2) {
      return this.keychain.get(e2);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  let Ot$1 = class Ot extends a$4 {
    constructor(e2, t2) {
      super(e2, t2), this.logger = e2, this.core = t2, this.messages = /* @__PURE__ */ new Map(), this.name = rt$1, this.version = nt$1, this.initialized = false, this.storagePrefix = O, this.init = async () => {
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
      }, this.logger = cjs$3.generateChildLogger(e2, this.name), this.core = t2;
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e2) {
      await this.core.storage.setItem(this.storageKey, rt$2(e2));
    }
    async getRelayerMessages() {
      const e2 = await this.core.storage.getItem(this.storageKey);
      return typeof e2 < "u" ? ot$2(e2) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  class vr extends u$3 {
    constructor(e2, t2) {
      super(e2, t2), this.relayer = e2, this.logger = t2, this.events = new eventsExports.EventEmitter(), this.name = at$1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$4.toMiliseconds(cjs$4.TEN_SECONDS * 2), this.needsTransportRestart = false, this.publish = async (i2, s2, r2) => {
        var o2;
        this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s2, opts: r2 } });
        try {
          const a2 = (r2 == null ? void 0 : r2.ttl) || ot$1, h2 = vt$2(r2), l2 = (r2 == null ? void 0 : r2.prompt) || false, d2 = (r2 == null ? void 0 : r2.tag) || 0, p2 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), y2 = { topic: i2, message: s2, opts: { ttl: a2, relay: h2, prompt: l2, tag: d2, id: p2 } }, M2 = setTimeout(() => this.queue.set(p2, y2), this.publishTimeout);
          try {
            await await ut$2(this.rpcPublish(i2, s2, a2, h2, l2, d2, p2), this.publishTimeout, `Failed to publish payload, please try again. id:${p2} tag:${d2}`), this.removeRequestFromQueue(p2), this.relayer.events.emit(D$3.publish, y2);
          } catch (u2) {
            if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (o2 = r2 == null ? void 0 : r2.internal) != null && o2.throwOnFailedPublish)
              throw this.removeRequestFromQueue(p2), u2;
            return;
          } finally {
            clearTimeout(M2);
          }
          this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s2, opts: r2 } });
        } catch (a2) {
          throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a2), a2;
        }
      }, this.on = (i2, s2) => {
        this.events.on(i2, s2);
      }, this.once = (i2, s2) => {
        this.events.once(i2, s2);
      }, this.off = (i2, s2) => {
        this.events.off(i2, s2);
      }, this.removeListener = (i2, s2) => {
        this.events.removeListener(i2, s2);
      }, this.relayer = e2, this.logger = cjs$3.generateChildLogger(t2, this.name), this.registerEventListeners();
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    rpcPublish(e2, t2, i2, s2, r2, o2, a2) {
      var h2, l2, d2, p2;
      const y2 = { method: Et$2(s2.protocol).publish, params: { topic: e2, message: t2, ttl: i2, prompt: r2, tag: o2 }, id: a2 };
      return w$4((h2 = y2.params) == null ? void 0 : h2.prompt) && ((l2 = y2.params) == null || delete l2.prompt), w$4((d2 = y2.params) == null ? void 0 : d2.tag) && ((p2 = y2.params) == null || delete p2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y2 }), this.relayer.request(y2);
    }
    removeRequestFromQueue(e2) {
      this.queue.delete(e2);
    }
    checkQueue() {
      this.queue.forEach(async (e2) => {
        const { topic: t2, message: i2, opts: s2 } = e2;
        await this.publish(t2, i2, s2);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(D$3.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(D$3.message_ack, (e2) => {
        this.removeRequestFromQueue(e2.id.toString());
      });
    }
  }
  class Ir {
    constructor() {
      this.map = /* @__PURE__ */ new Map(), this.set = (e2, t2) => {
        const i2 = this.get(e2);
        this.exists(e2, t2) || this.map.set(e2, [...i2, t2]);
      }, this.get = (e2) => this.map.get(e2) || [], this.exists = (e2, t2) => this.get(e2).includes(t2), this.delete = (e2, t2) => {
        if (typeof t2 > "u") {
          this.map.delete(e2);
          return;
        }
        if (!this.map.has(e2))
          return;
        const i2 = this.get(e2);
        if (!this.exists(e2, t2))
          return;
        const s2 = i2.filter((r2) => r2 !== t2);
        if (!s2.length) {
          this.map.delete(e2);
          return;
        }
        this.map.set(e2, s2);
      }, this.clear = () => {
        this.map.clear();
      };
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var Cr = Object.defineProperty, Rr = Object.defineProperties, _r = Object.getOwnPropertyDescriptors, At$1 = Object.getOwnPropertySymbols, Tr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, zt$1 = (n2, e2, t2) => e2 in n2 ? Cr(n2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : n2[e2] = t2, q$2 = (n2, e2) => {
    for (var t2 in e2 || (e2 = {}))
      Tr.call(e2, t2) && zt$1(n2, t2, e2[t2]);
    if (At$1)
      for (var t2 of At$1(e2))
        Sr.call(e2, t2) && zt$1(n2, t2, e2[t2]);
    return n2;
  }, De$1 = (n2, e2) => Rr(n2, _r(e2));
  let Nt$1 = class Nt extends d$2 {
    constructor(e2, t2) {
      super(e2, t2), this.relayer = e2, this.logger = t2, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Ir(), this.events = new eventsExports.EventEmitter(), this.name = mt$1, this.version = bt$1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
      }, this.subscribe = async (i2, s2) => {
        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } });
        try {
          const r2 = vt$2(s2), o2 = { topic: i2, relay: r2 };
          this.pending.set(i2, o2);
          const a2 = await this.rpcSubscribe(i2, r2);
          return this.onSubscribe(a2, o2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } }), a2;
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
          const a2 = new cjs$4.Watch();
          a2.start(s2);
          const h2 = setInterval(() => {
            !this.pending.has(i2) && this.topics.includes(i2) && (clearInterval(h2), a2.stop(s2), r2(true)), a2.elapsed(s2) >= ft$1 && (clearInterval(h2), a2.stop(s2), o2(new Error("Subscription resolution timeout")));
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
      }, this.relayer = e2, this.logger = cjs$3.generateChildLogger(t2, this.name), this.clientId = "";
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
    hasSubscription(e2, t2) {
      let i2 = false;
      try {
        i2 = this.getSubscription(e2).topic === t2;
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
    async unsubscribeByTopic(e2, t2) {
      const i2 = this.topicMap.get(e2);
      await Promise.all(i2.map(async (s2) => await this.unsubscribeById(e2, s2, t2)));
    }
    async unsubscribeById(e2, t2, i2) {
      this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t2, opts: i2 } });
      try {
        const s2 = vt$2(i2);
        await this.rpcUnsubscribe(e2, t2, s2);
        const r2 = U$3("USER_DISCONNECTED", `${this.name}, ${e2}`);
        await this.onUnsubscribe(e2, t2, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t2, opts: i2 } });
      } catch (s2) {
        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s2), s2;
      }
    }
    async rpcSubscribe(e2, t2) {
      const i2 = { method: Et$2(t2.protocol).subscribe, params: { topic: e2 } };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
      try {
        await await ut$2(this.relayer.request(i2), this.subscribeTimeout);
      } catch {
        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D$3.connection_stalled);
      }
      return Ln(e2 + this.clientId);
    }
    async rpcBatchSubscribe(e2) {
      if (!e2.length)
        return;
      const t2 = e2[0].relay, i2 = { method: Et$2(t2.protocol).batchSubscribe, params: { topics: e2.map((s2) => s2.topic) } };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
      try {
        return await await ut$2(this.relayer.request(i2), this.subscribeTimeout);
      } catch {
        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D$3.connection_stalled);
      }
    }
    rpcUnsubscribe(e2, t2, i2) {
      const s2 = { method: Et$2(i2.protocol).unsubscribe, params: { topic: e2, id: t2 } };
      return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 }), this.relayer.request(s2);
    }
    onSubscribe(e2, t2) {
      this.setSubscription(e2, De$1(q$2({}, t2), { id: e2 })), this.pending.delete(t2.topic);
    }
    onBatchSubscribe(e2) {
      e2.length && e2.forEach((t2) => {
        this.setSubscription(t2.id, q$2({}, t2)), this.pending.delete(t2.topic);
      });
    }
    async onUnsubscribe(e2, t2, i2) {
      this.events.removeAllListeners(t2), this.hasSubscription(t2, e2) && this.deleteSubscription(t2, i2), await this.relayer.messages.del(e2);
    }
    async setRelayerSubscriptions(e2) {
      await this.relayer.core.storage.setItem(this.storageKey, e2);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e2, t2) {
      this.subscriptions.has(e2) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t2 }), this.addSubscription(e2, t2));
    }
    addSubscription(e2, t2) {
      this.subscriptions.set(e2, q$2({}, t2)), this.topicMap.set(t2.topic, e2), this.events.emit(w$2.created, t2);
    }
    getSubscription(e2) {
      this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
      const t2 = this.subscriptions.get(e2);
      if (!t2) {
        const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw new Error(i2);
      }
      return t2;
    }
    deleteSubscription(e2, t2) {
      this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t2 });
      const i2 = this.getSubscription(e2);
      this.subscriptions.delete(e2), this.topicMap.delete(i2.topic, e2), this.events.emit(w$2.deleted, De$1(q$2({}, i2), { reason: t2 }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(w$2.sync);
    }
    async reset() {
      if (this.cached.length) {
        const e2 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let t2 = 0; t2 < e2; t2++) {
          const i2 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(i2);
        }
      }
      this.events.emit(w$2.resubscribed);
    }
    async restore() {
      try {
        const e2 = await this.getRelayerSubscriptions();
        if (typeof e2 > "u" || !e2.length)
          return;
        if (this.subscriptions.size) {
          const { message: t2 } = N$2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t2), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t2);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
      }
    }
    async batchSubscribe(e2) {
      if (!e2.length)
        return;
      const t2 = await this.rpcBatchSubscribe(e2);
      k$1(t2) && this.onBatchSubscribe(t2.map((i2, s2) => De$1(q$2({}, e2[s2]), { id: i2 })));
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
      const e2 = [];
      this.pending.forEach((t2) => {
        e2.push(t2);
      }), await this.batchSubscribe(e2);
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, async () => {
        await this.checkPending();
      }), this.relayer.on(D$3.connect, async () => {
        await this.onConnect();
      }), this.relayer.on(D$3.disconnect, () => {
        this.onDisconnect();
      }), this.events.on(w$2.created, async (e2) => {
        const t2 = w$2.created;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), await this.persist();
      }), this.events.on(w$2.deleted, async (e2) => {
        const t2 = w$2.deleted;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), await this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    async restartToComplete() {
      this.restartInProgress && await new Promise((e2) => {
        const t2 = setInterval(() => {
          this.restartInProgress || (clearInterval(t2), e2());
        }, this.pollingInterval);
      });
    }
  };
  var Pr = Object.defineProperty, Ut$1 = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Lt$1 = (n2, e2, t2) => e2 in n2 ? Pr(n2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : n2[e2] = t2, Ar = (n2, e2) => {
    for (var t2 in e2 || (e2 = {}))
      xr.call(e2, t2) && Lt$1(n2, t2, e2[t2]);
    if (Ut$1)
      for (var t2 of Ut$1(e2))
        Or.call(e2, t2) && Lt$1(n2, t2, e2[t2]);
    return n2;
  };
  let $t$1 = class $t extends g$5 {
    constructor(e2) {
      super(e2), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = ut$1, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (t2) => {
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
        this.events.emit(D$3.connect);
      }, this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }, this.onProviderErrorHandler = (t2) => {
        this.logger.error(t2), this.events.emit(D$3.error, t2), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
      }, this.registerProviderListeners = () => {
        this.provider.on(P$2.payload, this.onPayloadHandler), this.provider.on(P$2.connect, this.onConnectHandler), this.provider.on(P$2.disconnect, this.onDisconnectHandler), this.provider.on(P$2.error, this.onProviderErrorHandler);
      }, this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? cjs$3.generateChildLogger(e2.logger, this.name) : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: e2.logger || ct$1 })), this.messages = new Ot$1(this.logger, e2.core), this.subscriber = new Nt$1(this, this.logger), this.publisher = new vr(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || ge$1, this.projectId = e2.projectId, this.bundleId = Jn(), this.provider = {};
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
      }, pt$1);
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
    async publish(e2, t2, i2) {
      this.isInitialized(), await this.publisher.publish(e2, t2, i2), await this.recordMessageEvent({ topic: e2, message: t2, publishedAt: Date.now() });
    }
    async subscribe(e2, t2) {
      var i2;
      this.isInitialized();
      let s2 = ((i2 = this.subscriber.topicMap.get(e2)) == null ? void 0 : i2[0]) || "";
      if (s2)
        return s2;
      let r2;
      const o2 = (a2) => {
        a2.topic === e2 && (this.subscriber.off(w$2.created, o2), r2());
      };
      return await Promise.all([new Promise((a2) => {
        r2 = a2, this.subscriber.on(w$2.created, o2);
      }), new Promise(async (a2) => {
        s2 = await this.subscriber.subscribe(e2, t2), a2();
      })]), s2;
    }
    async unsubscribe(e2, t2) {
      this.isInitialized(), await this.subscriber.unsubscribe(e2, t2);
    }
    on(e2, t2) {
      this.events.on(e2, t2);
    }
    once(e2, t2) {
      this.events.once(e2, t2);
    }
    off(e2, t2) {
      this.events.off(e2, t2);
    }
    removeListener(e2, t2) {
      this.events.removeListener(e2, t2);
    }
    async transportClose() {
      this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e2) => {
        await e2.promise;
      })), this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await ut$2(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
    }
    async transportOpen(e2) {
      if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
        e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
        try {
          await Promise.all([new Promise((t2) => {
            if (!this.initialized)
              return t2();
            this.subscriber.once(w$2.resubscribed, () => {
              t2();
            });
          }), new Promise(async (t2, i2) => {
            try {
              await ut$2(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
          this.provider.events.emit(P$2.disconnect);
        } finally {
          this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
        }
      }
    }
    async restartTransport(e2) {
      await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
      if (!await rr$2())
        throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    isConnectionStalled(e2) {
      return this.staleConnectionErrors.some((t2) => e2.includes(t2));
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      const e2 = await this.core.crypto.signJWT(this.relayUrl);
      this.provider = new JsonRpcProvider(new f$1(Xn({ sdkVersion: gt$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e2) {
      const { topic: t2, message: i2 } = e2;
      await this.messages.set(t2, i2);
    }
    async shouldIgnoreMessageEvent(e2) {
      const { topic: t2, message: i2 } = e2;
      if (!i2 || i2.length === 0)
        return this.logger.debug(`Ignoring invalid/empty message: ${i2}`), true;
      if (!await this.subscriber.isSubscribed(t2))
        return this.logger.debug(`Ignoring message for non-subscribed topic ${t2}`), true;
      const s2 = this.messages.has(t2, i2);
      return s2 && this.logger.debug(`Ignoring duplicate message: ${i2}`), s2;
    }
    async onProviderPayload(e2) {
      if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
        if (!e2.method.endsWith(lt$1))
          return;
        const t2 = e2.params, { topic: i2, message: s2, publishedAt: r2 } = t2.data, o2 = { topic: i2, message: s2, publishedAt: r2 };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar({ type: "event", event: t2.id }, o2)), this.events.emit(t2.id, o2), await this.acknowledgePayload(e2), await this.onMessageEvent(o2);
      } else
        isJsonRpcResponse(e2) && this.events.emit(D$3.message_ack, e2);
    }
    async onMessageEvent(e2) {
      await this.shouldIgnoreMessageEvent(e2) || (this.events.emit(D$3.message, e2), await this.recordMessageEvent(e2));
    }
    async acknowledgePayload(e2) {
      const t2 = formatJsonRpcResult(e2.id, true);
      await this.provider.connection.send(t2);
    }
    unregisterProviderListeners() {
      this.provider.off(P$2.payload, this.onPayloadHandler), this.provider.off(P$2.connect, this.onConnectHandler), this.provider.off(P$2.disconnect, this.onDisconnectHandler), this.provider.off(P$2.error, this.onProviderErrorHandler);
    }
    async registerEventListeners() {
      this.events.on(D$3.connection_stalled, () => {
        this.restartTransport().catch((t2) => this.logger.error(t2));
      });
      let e2 = await rr$2();
      or$2(async (t2) => {
        this.initialized && e2 !== t2 && (e2 = t2, t2 ? await this.restartTransport().catch((i2) => this.logger.error(i2)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((i2) => this.logger.error(i2))));
      });
    }
    onProviderDisconnect() {
      this.events.emit(D$3.disconnect), this.attemptToReconnect();
    }
    attemptToReconnect() {
      this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
        await this.restartTransport().catch((e2) => this.logger.error(e2));
      }, cjs$4.toMiliseconds(dt$1)));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    async toEstablishConnection() {
      if (await this.confirmOnlineStateOrThrow(), !this.connected) {
        if (this.connectionAttemptInProgress)
          return await new Promise((e2) => {
            const t2 = setInterval(() => {
              this.connected && (clearInterval(t2), e2());
            }, this.connectionStatusPollingInterval);
          });
        await this.restartTransport();
      }
    }
  };
  var zr = Object.defineProperty, Ft$1 = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable, Mt$1 = (n2, e2, t2) => e2 in n2 ? zr(n2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : n2[e2] = t2, kt$1 = (n2, e2) => {
    for (var t2 in e2 || (e2 = {}))
      Nr.call(e2, t2) && Mt$1(n2, t2, e2[t2]);
    if (Ft$1)
      for (var t2 of Ft$1(e2))
        Ur.call(e2, t2) && Mt$1(n2, t2, e2[t2]);
    return n2;
  };
  let Kt$1 = class Kt extends p$3 {
    constructor(e2, t2, i2, s2 = O, r2 = void 0) {
      super(e2, t2, i2, s2), this.core = e2, this.logger = t2, this.name = i2, this.map = /* @__PURE__ */ new Map(), this.version = Dt$1, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o2) => {
          this.getKey && o2 !== null && !w$4(o2) ? this.map.set(this.getKey(o2), o2) : Lt$2(o2) ? this.map.set(o2.id, o2) : xt$2(o2) && this.map.set(o2.topic, o2);
        }), this.cached = [], this.initialized = true);
      }, this.set = async (o2, a2) => {
        this.isInitialized(), this.map.has(o2) ? await this.update(o2, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o2, value: a2 }), this.map.set(o2, a2), await this.persist());
      }, this.get = (o2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o2 }), this.getData(o2)), this.getAll = (o2) => (this.isInitialized(), o2 ? this.values.filter((a2) => Object.keys(o2).every((h2) => Gi(a2[h2], o2[h2]))) : this.values), this.update = async (o2, a2) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o2, update: a2 });
        const h2 = kt$1(kt$1({}, this.getData(o2)), a2);
        this.map.set(o2, h2), await this.persist();
      }, this.delete = async (o2, a2) => {
        this.isInitialized(), this.map.has(o2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o2, reason: a2 }), this.map.delete(o2), await this.persist());
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
    async setDataStore(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getDataStore() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getData(e2) {
      const t2 = this.map.get(e2);
      if (!t2) {
        const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw this.logger.error(i2), new Error(i2);
      }
      return t2;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        const e2 = await this.getDataStore();
        if (typeof e2 > "u" || !e2.length)
          return;
        if (this.map.size) {
          const { message: t2 } = N$2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t2), new Error(t2);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  let Bt$1 = class Bt {
    constructor(e2, t2) {
      this.core = e2, this.logger = t2, this.name = Et$1, this.version = wt$1, this.events = new EventEmitter$1(), this.initialized = false, this.storagePrefix = O, this.ignoredPayloadTypes = [_$3], this.registeredMethods = [], this.init = async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }, this.register = ({ methods: i2 }) => {
        this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i2])];
      }, this.create = async () => {
        this.isInitialized();
        const i2 = Vn(), s2 = await this.core.crypto.setSymKey(i2), r2 = pt$2(cjs$4.FIVE_MINUTES), o2 = { protocol: ht$1 }, a2 = { topic: s2, expiry: r2, relay: o2, active: false }, h2 = Rt$2({ protocol: this.core.protocol, version: this.core.version, topic: s2, symKey: i2, relay: o2, expiryTimestamp: r2 });
        return await this.pairings.set(s2, a2), await this.core.relayer.subscribe(s2), this.core.expirer.set(s2, r2), { topic: s2, uri: h2 };
      }, this.pair = async (i2) => {
        this.isInitialized(), this.isValidPair(i2);
        const { topic: s2, symKey: r2, relay: o2, expiryTimestamp: a2 } = Pt$2(i2.uri);
        let h2;
        if (this.pairings.keys.includes(s2) && (h2 = this.pairings.get(s2), h2.active))
          throw new Error(`Pairing already exists: ${s2}. Please try again with a new connection URI.`);
        const l2 = a2 || pt$2(cjs$4.FIVE_MINUTES), d2 = { topic: s2, relay: o2, expiry: l2, active: false };
        return await this.pairings.set(s2, d2), this.core.expirer.set(s2, l2), i2.activatePairing && await this.activate({ topic: s2 }), this.events.emit(V$1.create, d2), this.core.crypto.keychain.has(s2) || (await this.core.crypto.setSymKey(r2, s2), await this.core.relayer.subscribe(s2, { relay: o2 })), d2;
      }, this.activate = async ({ topic: i2 }) => {
        this.isInitialized();
        const s2 = pt$2(cjs$4.THIRTY_DAYS);
        await this.pairings.update(i2, { active: true, expiry: s2 }), this.core.expirer.set(i2, s2);
      }, this.ping = async (i2) => {
        this.isInitialized(), await this.isValidPing(i2);
        const { topic: s2 } = i2;
        if (this.pairings.keys.includes(s2)) {
          const r2 = await this.sendRequest(s2, "wc_pairingPing", {}), { done: o2, resolve: a2, reject: h2 } = at$2();
          this.events.once(yt$2("pairing_ping", r2), ({ error: l2 }) => {
            l2 ? h2(l2) : a2();
          }), await o2();
        }
      }, this.updateExpiry = async ({ topic: i2, expiry: s2 }) => {
        this.isInitialized(), await this.pairings.update(i2, { expiry: s2 });
      }, this.updateMetadata = async ({ topic: i2, metadata: s2 }) => {
        this.isInitialized(), await this.pairings.update(i2, { peerMetadata: s2 });
      }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i2) => {
        this.isInitialized(), await this.isValidDisconnect(i2);
        const { topic: s2 } = i2;
        this.pairings.keys.includes(s2) && (await this.sendRequest(s2, "wc_pairingDelete", U$3("USER_DISCONNECTED")), await this.deletePairing(s2));
      }, this.sendRequest = async (i2, s2, r2) => {
        const o2 = formatJsonRpcRequest(s2, r2), a2 = await this.core.crypto.encode(i2, o2), h2 = $$1[s2].req;
        return this.core.history.set(i2, o2), this.core.relayer.publish(i2, a2, h2), o2.id;
      }, this.sendResult = async (i2, s2, r2) => {
        const o2 = formatJsonRpcResult(i2, r2), a2 = await this.core.crypto.encode(s2, o2), h2 = await this.core.history.get(s2, i2), l2 = $$1[h2.request.method].res;
        await this.core.relayer.publish(s2, a2, l2), await this.core.history.resolve(o2);
      }, this.sendError = async (i2, s2, r2) => {
        const o2 = formatJsonRpcError(i2, r2), a2 = await this.core.crypto.encode(s2, o2), h2 = await this.core.history.get(s2, i2), l2 = $$1[h2.request.method] ? $$1[h2.request.method].res : $$1.unregistered_method.res;
        await this.core.relayer.publish(s2, a2, l2), await this.core.history.resolve(o2);
      }, this.deletePairing = async (i2, s2) => {
        await this.core.relayer.unsubscribe(i2), await Promise.all([this.pairings.delete(i2, U$3("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i2), s2 ? Promise.resolve() : this.core.expirer.del(i2)]);
      }, this.cleanup = async () => {
        const i2 = this.pairings.getAll().filter((s2) => mt$2(s2.expiry));
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
          this.isValidPing({ topic: i2 }), await this.sendResult(r2, i2, true), this.events.emit(V$1.ping, { id: r2, topic: i2 });
        } catch (o2) {
          await this.sendError(r2, i2, o2), this.logger.error(o2);
        }
      }, this.onPairingPingResponse = (i2, s2) => {
        const { id: r2 } = s2;
        setTimeout(() => {
          isJsonRpcResult(s2) ? this.events.emit(yt$2("pairing_ping", r2), {}) : isJsonRpcError(s2) && this.events.emit(yt$2("pairing_ping", r2), { error: s2.error });
        }, 500);
      }, this.onPairingDeleteRequest = async (i2, s2) => {
        const { id: r2 } = s2;
        try {
          this.isValidDisconnect({ topic: i2 }), await this.deletePairing(i2), this.events.emit(V$1.delete, { id: r2, topic: i2 });
        } catch (o2) {
          await this.sendError(r2, i2, o2), this.logger.error(o2);
        }
      }, this.onUnknownRpcMethodRequest = async (i2, s2) => {
        const { id: r2, method: o2 } = s2;
        try {
          if (this.registeredMethods.includes(o2))
            return;
          const a2 = U$3("WC_METHOD_UNSUPPORTED", o2);
          await this.sendError(r2, i2, a2), this.logger.error(a2);
        } catch (a2) {
          await this.sendError(r2, i2, a2), this.logger.error(a2);
        }
      }, this.onUnknownRpcMethodResponse = (i2) => {
        this.registeredMethods.includes(i2) || this.logger.error(U$3("WC_METHOD_UNSUPPORTED", i2));
      }, this.isValidPair = (i2) => {
        var s2;
        if (!Gt$2(i2)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `pair() params: ${i2}`);
          throw new Error(o2);
        }
        if (!Kt$2(i2.uri)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `pair() uri: ${i2.uri}`);
          throw new Error(o2);
        }
        const r2 = Pt$2(i2.uri);
        if (!((s2 = r2 == null ? void 0 : r2.relay) != null && s2.protocol)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw new Error(o2);
        }
        if (!(r2 != null && r2.symKey)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(o2);
        }
        if (r2 != null && r2.expiryTimestamp && cjs$4.toMiliseconds(r2 == null ? void 0 : r2.expiryTimestamp) < Date.now()) {
          const { message: o2 } = N$2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(o2);
        }
      }, this.isValidPing = async (i2) => {
        if (!Gt$2(i2)) {
          const { message: r2 } = N$2("MISSING_OR_INVALID", `ping() params: ${i2}`);
          throw new Error(r2);
        }
        const { topic: s2 } = i2;
        await this.isValidPairingTopic(s2);
      }, this.isValidDisconnect = async (i2) => {
        if (!Gt$2(i2)) {
          const { message: r2 } = N$2("MISSING_OR_INVALID", `disconnect() params: ${i2}`);
          throw new Error(r2);
        }
        const { topic: s2 } = i2;
        await this.isValidPairingTopic(s2);
      }, this.isValidPairingTopic = async (i2) => {
        if (!g$4(i2, false)) {
          const { message: s2 } = N$2("MISSING_OR_INVALID", `pairing topic should be a string: ${i2}`);
          throw new Error(s2);
        }
        if (!this.pairings.keys.includes(i2)) {
          const { message: s2 } = N$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i2}`);
          throw new Error(s2);
        }
        if (mt$2(this.pairings.get(i2).expiry)) {
          await this.deletePairing(i2);
          const { message: s2 } = N$2("EXPIRED", `pairing topic: ${i2}`);
          throw new Error(s2);
        }
      }, this.core = e2, this.logger = cjs$3.generateChildLogger(t2, this.name), this.pairings = new Kt$1(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(D$3.message, async (e2) => {
        const { topic: t2, message: i2 } = e2;
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
      this.core.expirer.on(v$2.expired, async (e2) => {
        const { topic: t2 } = ft$2(e2.target);
        t2 && this.pairings.keys.includes(t2) && (await this.deletePairing(t2, true), this.events.emit(V$1.expire, { topic: t2 }));
      });
    }
  };
  let Vt$1 = class Vt extends h$5 {
    constructor(e2, t2) {
      super(e2, t2), this.core = e2, this.logger = t2, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = vt$1, this.version = It$1, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.records.set(i2.id, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }, this.set = (i2, s2, r2) => {
        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i2, request: s2, chainId: r2 }), this.records.has(s2.id))
          return;
        const o2 = { id: s2.id, topic: i2, request: { method: s2.method, params: s2.params || null }, chainId: r2, expiry: pt$2(cjs$4.THIRTY_DAYS) };
        this.records.set(o2.id, o2), this.events.emit(R$2.created, o2);
      }, this.resolve = async (i2) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i2 }), !this.records.has(i2.id))
          return;
        const s2 = await this.getRecord(i2.id);
        typeof s2.response > "u" && (s2.response = isJsonRpcError(i2) ? { error: i2.error } : { result: i2.result }, this.records.set(s2.id, s2), this.events.emit(R$2.updated, s2));
      }, this.get = async (i2, s2) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i2, id: s2 }), await this.getRecord(s2)), this.delete = (i2, s2) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s2 }), this.values.forEach((r2) => {
          if (r2.topic === i2) {
            if (typeof s2 < "u" && r2.id !== s2)
              return;
            this.records.delete(r2.id), this.events.emit(R$2.deleted, r2);
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
      const e2 = [];
      return this.values.forEach((t2) => {
        if (typeof t2.response < "u")
          return;
        const i2 = { topic: t2.topic, request: formatJsonRpcRequest(t2.request.method, t2.request.params, t2.id), chainId: t2.chainId };
        return e2.push(i2);
      }), e2;
    }
    async setJsonRpcRecords(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getJsonRpcRecords() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e2) {
      this.isInitialized();
      const t2 = this.records.get(e2);
      if (!t2) {
        const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw new Error(i2);
      }
      return t2;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(R$2.sync);
    }
    async restore() {
      try {
        const e2 = await this.getJsonRpcRecords();
        if (typeof e2 > "u" || !e2.length)
          return;
        if (this.records.size) {
          const { message: t2 } = N$2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t2), new Error(t2);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
      }
    }
    registerEventListeners() {
      this.events.on(R$2.created, (e2) => {
        const t2 = R$2.created;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 }), this.persist();
      }), this.events.on(R$2.updated, (e2) => {
        const t2 = R$2.updated;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 }), this.persist();
      }), this.events.on(R$2.deleted, (e2) => {
        const t2 = R$2.deleted;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 }), this.persist();
      }), this.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.records.forEach((e2) => {
          cjs$4.toMiliseconds(e2.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e2.id}`), this.delete(e2.topic, e2.id));
        });
      } catch (e2) {
        this.logger.warn(e2);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  let qt$1 = class qt extends E$1 {
    constructor(e2, t2) {
      super(e2, t2), this.core = e2, this.logger = t2, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = Ct$1, this.version = Rt$1, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
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
        this.expirations.set(r2, o2), this.checkExpiry(r2, o2), this.events.emit(v$2.created, { target: r2, expiration: o2 });
      }, this.get = (i2) => {
        this.isInitialized();
        const s2 = this.formatTarget(i2);
        return this.getExpiration(s2);
      }, this.del = (i2) => {
        if (this.isInitialized(), this.has(i2)) {
          const s2 = this.formatTarget(i2), r2 = this.getExpiration(s2);
          this.expirations.delete(s2), this.events.emit(v$2.deleted, { target: s2, expiration: r2 });
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
    formatTarget(e2) {
      if (typeof e2 == "string")
        return lt$2(e2);
      if (typeof e2 == "number")
        return dt$2(e2);
      const { message: t2 } = N$2("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
      throw new Error(t2);
    }
    async setExpirations(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(v$2.sync);
    }
    async restore() {
      try {
        const e2 = await this.getExpirations();
        if (typeof e2 > "u" || !e2.length)
          return;
        if (this.expirations.size) {
          const { message: t2 } = N$2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t2), new Error(t2);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
      }
    }
    getExpiration(e2) {
      const t2 = this.expirations.get(e2);
      if (!t2) {
        const { message: i2 } = N$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw this.logger.error(i2), new Error(i2);
      }
      return t2;
    }
    checkExpiry(e2, t2) {
      const { expiry: i2 } = t2;
      cjs$4.toMiliseconds(i2) - Date.now() <= 0 && this.expire(e2, t2);
    }
    expire(e2, t2) {
      this.expirations.delete(e2), this.events.emit(v$2.expired, { target: e2, expiration: t2 });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e2, t2) => this.checkExpiry(t2, e2));
    }
    registerEventListeners() {
      this.core.heartbeat.on(cjs$5.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(v$2.created, (e2) => {
        const t2 = v$2.created;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
      }), this.events.on(v$2.expired, (e2) => {
        const t2 = v$2.expired;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
      }), this.events.on(v$2.deleted, (e2) => {
        const t2 = v$2.deleted;
        this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  let jt$1 = class jt extends y$2 {
    constructor(e2, t2) {
      super(e2, t2), this.projectId = e2, this.logger = t2, this.name = Z$2, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i2) => {
        if (this.verifyDisabled || $$2() || !D$4())
          return;
        const s2 = this.getVerifyUrl(i2 == null ? void 0 : i2.verifyUrl);
        this.verifyUrl !== s2 && this.removeIframe(), this.verifyUrl = s2;
        try {
          await this.createIframe();
        } catch (r2) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r2);
        }
        if (!this.initialized) {
          this.removeIframe(), this.verifyUrl = ee$1;
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
          this.logger.info(`failed to resolve attestation: ${i2.attestationId} from url: ${s2}`), this.logger.info(o2), r2 = await this.fetchAttestation(i2.attestationId, ee$1);
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
          if (document.getElementById(Z$2))
            return r2();
          window.addEventListener("message", s2);
          const o2 = document.createElement("iframe");
          o2.id = Z$2, o2.src = `${this.verifyUrl}/${this.projectId}`, o2.style.display = "none", document.body.append(o2), this.iframe = o2, i2 = r2;
        }), new Promise((r2, o2) => setTimeout(() => {
          window.removeEventListener("message", s2), o2("verify iframe load timeout");
        }, cjs$4.toMiliseconds(cjs$4.FIVE_SECONDS)))]);
      }, this.removeIframe = () => {
        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
      }, this.getVerifyUrl = (i2) => {
        let s2 = i2 || F$2;
        return _t$1.includes(s2) || (this.logger.info(`verify url: ${s2}, not included in trusted list, assigning default: ${F$2}`), s2 = F$2), s2;
      }, this.logger = cjs$3.generateChildLogger(t2, this.name), this.verifyUrl = F$2, this.abortController = new AbortController(), this.isDevEnv = te$2() && process.env.IS_VITEST;
    }
    get context() {
      return cjs$3.getLoggerContext(this.logger);
    }
    startAbortTimer(e2) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$4.toMiliseconds(e2));
    }
  };
  let Gt$1 = class Gt extends v$3 {
    constructor(e2, t2) {
      super(e2, t2), this.projectId = e2, this.logger = t2, this.context = Tt$1, this.registerDeviceToken = async (i2) => {
        const { clientId: s2, token: r2, notificationType: o2, enableEncrypted: a2 = false } = i2, h2 = `${St$1}/${this.projectId}/clients`;
        await Yi(h2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s2, type: o2, token: r2, always_raw: a2 }) });
      }, this.logger = cjs$3.generateChildLogger(t2, this.context);
    }
  };
  var Lr = Object.defineProperty, Yt$1 = Object.getOwnPropertySymbols, $r = Object.prototype.hasOwnProperty, Fr = Object.prototype.propertyIsEnumerable, Ht$1 = (n2, e2, t2) => e2 in n2 ? Lr(n2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : n2[e2] = t2, Jt$1 = (n2, e2) => {
    for (var t2 in e2 || (e2 = {}))
      $r.call(e2, t2) && Ht$1(n2, t2, e2[t2]);
    if (Yt$1)
      for (var t2 of Yt$1(e2))
        Fr.call(e2, t2) && Ht$1(n2, t2, e2[t2]);
    return n2;
  };
  let te$1 = class te2 extends n$7 {
    constructor(e2) {
      super(e2), this.protocol = le$2, this.version = We$1, this.name = Q$2, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (i2, s2) => this.events.on(i2, s2), this.once = (i2, s2) => this.events.once(i2, s2), this.off = (i2, s2) => this.events.off(i2, s2), this.removeListener = (i2, s2) => this.events.removeListener(i2, s2), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || ge$1, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
      const t2 = typeof (e2 == null ? void 0 : e2.logger) < "u" && typeof (e2 == null ? void 0 : e2.logger) != "string" ? e2.logger : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: (e2 == null ? void 0 : e2.logger) || Qe$1.logger }));
      this.logger = cjs$3.generateChildLogger(t2, this.name), this.heartbeat = new cjs$5.HeartBeat(), this.crypto = new xt$1(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new Vt$1(this, this.logger), this.expirer = new qt$1(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h$6(Jt$1(Jt$1({}, Ze), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new $t$1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Bt$1(this, this.logger), this.verify = new jt$1(this.projectId || "", this.logger), this.echoClient = new Gt$1(this.projectId || "", this.logger);
    }
    static async init(e2) {
      const t2 = new te2(e2);
      await t2.initialize();
      const i2 = await t2.crypto.getClientId();
      return await t2.storage.setItem(yt$1, i2), t2;
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
      } catch (e2) {
        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
      }
    }
  };
  const Mr = te$1;
  const J = "wc", F$1 = 2, X = "client", G$1 = `${J}@${F$1}:${X}:`, M$1 = { name: X, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, H$1 = "WALLETCONNECT_DEEPLINK_CHOICE", oe$1 = "proposal", ae$1 = "Proposal expired", ce$1 = "session", L$2 = cjs$4.SEVEN_DAYS, le$1 = "engine", R$1 = { wc_sessionPropose: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$4.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$4.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$4.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: cjs$4.THIRTY_SECONDS, prompt: false, tag: 1115 } } }, U$2 = { min: cjs$4.FIVE_MINUTES, max: cjs$4.SEVEN_DAYS }, I$1 = { idle: "IDLE", active: "ACTIVE" }, pe = "request", he$1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
  var as = Object.defineProperty, cs = Object.defineProperties, ls = Object.getOwnPropertyDescriptors, de$1 = Object.getOwnPropertySymbols, ps = Object.prototype.hasOwnProperty, hs = Object.prototype.propertyIsEnumerable, ue$1 = (w2, r2, e2) => r2 in w2 ? as(w2, r2, { enumerable: true, configurable: true, writable: true, value: e2 }) : w2[r2] = e2, g$2 = (w2, r2) => {
    for (var e2 in r2 || (r2 = {}))
      ps.call(r2, e2) && ue$1(w2, e2, r2[e2]);
    if (de$1)
      for (var e2 of de$1(r2))
        hs.call(r2, e2) && ue$1(w2, e2, r2[e2]);
    return w2;
  }, D$2 = (w2, r2) => cs(w2, ls(r2));
  class ds extends w$5 {
    constructor(r2) {
      super(r2), this.name = le$1, this.events = new EventEmitter$1(), this.initialized = false, this.ignoredPayloadTypes = [_$3], this.requestQueue = { state: I$1.idle, queue: [] }, this.sessionRequestQueue = { state: I$1.idle, queue: [] }, this.requestQueueDelay = cjs$4.ONE_SECOND, this.init = async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(R$1) }), this.initialized = true, setTimeout(() => {
          this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, cjs$4.toMiliseconds(this.requestQueueDelay)));
      }, this.connect = async (e2) => {
        await this.isInitialized();
        const s2 = D$2(g$2({}, e2), { requiredNamespaces: e2.requiredNamespaces || {}, optionalNamespaces: e2.optionalNamespaces || {} });
        await this.isValidConnect(s2);
        const { pairingTopic: t2, requiredNamespaces: i2, optionalNamespaces: n2, sessionProperties: o2, relays: a2 } = s2;
        let c2 = t2, p2, d2 = false;
        if (c2 && (d2 = this.client.core.pairing.pairings.get(c2).active), !c2 || !d2) {
          const { topic: T2, uri: _2 } = await this.client.core.pairing.create();
          c2 = T2, p2 = _2;
        }
        const h2 = await this.client.core.crypto.generateKeyPair(), N2 = R$1.wc_sessionPropose.req.ttl || cjs$4.FIVE_MINUTES, m2 = pt$2(N2), f2 = g$2({ requiredNamespaces: i2, optionalNamespaces: n2, relays: a2 ?? [{ protocol: ht$1 }], proposer: { publicKey: h2, metadata: this.client.metadata }, expiryTimestamp: m2 }, o2 && { sessionProperties: o2 }), { reject: k2, resolve: O2, done: we2 } = at$2(N2, ae$1);
        if (this.events.once(yt$2("session_connect"), async ({ error: T2, session: _2 }) => {
          if (T2)
            k2(T2);
          else if (_2) {
            _2.self.publicKey = h2;
            const B2 = D$2(g$2({}, _2), { requiredNamespaces: f2.requiredNamespaces, optionalNamespaces: f2.optionalNamespaces });
            await this.client.session.set(_2.topic, B2), await this.setExpiry(_2.topic, _2.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: _2.peer.metadata }), O2(B2);
          }
        }), !c2) {
          const { message: T2 } = N$2("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
          throw new Error(T2);
        }
        const W2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: f2, throwOnFailedPublish: true });
        return await this.setProposal(W2, g$2({ id: W2 }, f2)), { uri: p2, approval: we2 };
      }, this.pair = async (e2) => (await this.isInitialized(), await this.client.core.pairing.pair(e2)), this.approve = async (e2) => {
        await this.isInitialized(), await this.isValidApprove(e2);
        const { id: s2, relayProtocol: t2, namespaces: i2, sessionProperties: n2 } = e2, o2 = this.client.proposal.get(s2);
        let { pairingTopic: a2, proposer: c2, requiredNamespaces: p2, optionalNamespaces: d2 } = o2;
        a2 = a2 || "";
        const h2 = await this.client.core.crypto.generateKeyPair(), N2 = c2.publicKey, m2 = await this.client.core.crypto.generateSharedKey(h2, N2);
        a2 && s2 && (await this.client.core.pairing.updateMetadata({ topic: a2, metadata: c2.metadata }), await this.sendResult({ id: s2, topic: a2, result: { relay: { protocol: t2 ?? "irn" }, responderPublicKey: h2 } }), await this.client.proposal.delete(s2, U$3("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a2 }));
        const f2 = g$2({ relay: { protocol: t2 ?? "irn" }, namespaces: i2, pairingTopic: a2, controller: { publicKey: h2, metadata: this.client.metadata }, expiry: pt$2(L$2) }, n2 && { sessionProperties: n2 });
        await this.client.core.relayer.subscribe(m2);
        const k2 = D$2(g$2({}, f2), { topic: m2, requiredNamespaces: p2, optionalNamespaces: d2, pairingTopic: a2, acknowledged: false, self: f2.controller, peer: { publicKey: c2.publicKey, metadata: c2.metadata }, controller: h2 });
        await this.client.session.set(m2, k2);
        try {
          await this.sendRequest({ topic: m2, method: "wc_sessionSettle", params: f2, throwOnFailedPublish: true });
        } catch (O2) {
          throw this.client.logger.error(O2), this.client.session.delete(m2, U$3("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(m2), O2;
        }
        return await this.setExpiry(m2, pt$2(L$2)), { topic: m2, acknowledged: () => new Promise((O2) => setTimeout(() => O2(this.client.session.get(m2)), 500)) };
      }, this.reject = async (e2) => {
        await this.isInitialized(), await this.isValidReject(e2);
        const { id: s2, reason: t2 } = e2, { pairingTopic: i2 } = this.client.proposal.get(s2);
        i2 && (await this.sendError(s2, i2, t2), await this.client.proposal.delete(s2, U$3("USER_DISCONNECTED")));
      }, this.update = async (e2) => {
        await this.isInitialized(), await this.isValidUpdate(e2);
        const { topic: s2, namespaces: t2 } = e2, i2 = await this.sendRequest({ topic: s2, method: "wc_sessionUpdate", params: { namespaces: t2 } }), { done: n2, resolve: o2, reject: a2 } = at$2();
        return this.events.once(yt$2("session_update", i2), ({ error: c2 }) => {
          c2 ? a2(c2) : o2();
        }), await this.client.session.update(s2, { namespaces: t2 }), { acknowledged: n2 };
      }, this.extend = async (e2) => {
        await this.isInitialized(), await this.isValidExtend(e2);
        const { topic: s2 } = e2, t2 = await this.sendRequest({ topic: s2, method: "wc_sessionExtend", params: {} }), { done: i2, resolve: n2, reject: o2 } = at$2();
        return this.events.once(yt$2("session_extend", t2), ({ error: a2 }) => {
          a2 ? o2(a2) : n2();
        }), await this.setExpiry(s2, pt$2(L$2)), { acknowledged: i2 };
      }, this.request = async (e2) => {
        await this.isInitialized(), await this.isValidRequest(e2);
        const { chainId: s2, request: t2, topic: i2, expiry: n2 = R$1.wc_sessionRequest.req.ttl } = e2, o2 = payloadId(), { done: a2, resolve: c2, reject: p2 } = at$2(n2, "Request expired. Please try again.");
        return this.events.once(yt$2("session_request", o2), ({ error: d2, result: h2 }) => {
          d2 ? p2(d2) : c2(h2);
        }), await Promise.all([new Promise(async (d2) => {
          await this.sendRequest({ clientRpcId: o2, topic: i2, method: "wc_sessionRequest", params: { request: D$2(g$2({}, t2), { expiryTimestamp: pt$2(n2) }), chainId: s2 }, expiry: n2, throwOnFailedPublish: true }).catch((h2) => p2(h2)), this.client.events.emit("session_request_sent", { topic: i2, request: t2, chainId: s2, id: o2 }), d2();
        }), new Promise(async (d2) => {
          const h2 = await ht$2(this.client.core.storage, H$1);
          gt$2({ id: o2, topic: i2, wcDeepLink: h2 }), d2();
        }), a2()]).then((d2) => d2[2]);
      }, this.respond = async (e2) => {
        await this.isInitialized(), await this.isValidRespond(e2);
        const { topic: s2, response: t2 } = e2, { id: i2 } = t2;
        isJsonRpcResult(t2) ? await this.sendResult({ id: i2, topic: s2, result: t2.result, throwOnFailedPublish: true }) : isJsonRpcError(t2) && await this.sendError(i2, s2, t2.error), this.cleanupAfterResponse(e2);
      }, this.ping = async (e2) => {
        await this.isInitialized(), await this.isValidPing(e2);
        const { topic: s2 } = e2;
        if (this.client.session.keys.includes(s2)) {
          const t2 = await this.sendRequest({ topic: s2, method: "wc_sessionPing", params: {} }), { done: i2, resolve: n2, reject: o2 } = at$2();
          this.events.once(yt$2("session_ping", t2), ({ error: a2 }) => {
            a2 ? o2(a2) : n2();
          }), await i2();
        } else
          this.client.core.pairing.pairings.keys.includes(s2) && await this.client.core.pairing.ping({ topic: s2 });
      }, this.emit = async (e2) => {
        await this.isInitialized(), await this.isValidEmit(e2);
        const { topic: s2, event: t2, chainId: i2 } = e2;
        await this.sendRequest({ topic: s2, method: "wc_sessionEvent", params: { event: t2, chainId: i2 } });
      }, this.disconnect = async (e2) => {
        await this.isInitialized(), await this.isValidDisconnect(e2);
        const { topic: s2 } = e2;
        if (this.client.session.keys.includes(s2))
          await this.sendRequest({ topic: s2, method: "wc_sessionDelete", params: U$3("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: s2, emitEvent: false });
        else if (this.client.core.pairing.pairings.keys.includes(s2))
          await this.client.core.pairing.disconnect({ topic: s2 });
        else {
          const { message: t2 } = N$2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s2}`);
          throw new Error(t2);
        }
      }, this.find = (e2) => (this.isInitialized(), this.client.session.getAll().filter((s2) => Mt$2(s2, e2))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (e2) => {
        if (e2.pairingTopic)
          try {
            const s2 = this.client.core.pairing.pairings.get(e2.pairingTopic), t2 = this.client.core.pairing.pairings.getAll().filter((i2) => {
              var n2, o2;
              return ((n2 = i2.peerMetadata) == null ? void 0 : n2.url) && ((o2 = i2.peerMetadata) == null ? void 0 : o2.url) === e2.peer.metadata.url && i2.topic && i2.topic !== s2.topic;
            });
            if (t2.length === 0)
              return;
            this.client.logger.info(`Cleaning up ${t2.length} duplicate pairing(s)`), await Promise.all(t2.map((i2) => this.client.core.pairing.disconnect({ topic: i2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s2) {
            this.client.logger.error(s2);
          }
      }, this.deleteSession = async (e2) => {
        const { topic: s2, expirerHasDeleted: t2 = false, emitEvent: i2 = true, id: n2 = 0 } = e2, { self: o2 } = this.client.session.get(s2);
        await this.client.core.relayer.unsubscribe(s2), await this.client.session.delete(s2, U$3("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o2.publicKey) && await this.client.core.crypto.deleteKeyPair(o2.publicKey), this.client.core.crypto.keychain.has(s2) && await this.client.core.crypto.deleteSymKey(s2), t2 || this.client.core.expirer.del(s2), this.client.core.storage.removeItem(H$1).catch((a2) => this.client.logger.warn(a2)), this.getPendingSessionRequests().forEach((a2) => {
          a2.topic === s2 && this.deletePendingSessionRequest(a2.id, U$3("USER_DISCONNECTED"));
        }), i2 && this.client.events.emit("session_delete", { id: n2, topic: s2 });
      }, this.deleteProposal = async (e2, s2) => {
        await Promise.all([this.client.proposal.delete(e2, U$3("USER_DISCONNECTED")), s2 ? Promise.resolve() : this.client.core.expirer.del(e2)]);
      }, this.deletePendingSessionRequest = async (e2, s2, t2 = false) => {
        await Promise.all([this.client.pendingRequest.delete(e2, s2), t2 ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i2) => i2.id !== e2), t2 && (this.sessionRequestQueue.state = I$1.idle, this.client.events.emit("session_request_expire", { id: e2 }));
      }, this.setExpiry = async (e2, s2) => {
        this.client.session.keys.includes(e2) && await this.client.session.update(e2, { expiry: s2 }), this.client.core.expirer.set(e2, s2);
      }, this.setProposal = async (e2, s2) => {
        await this.client.proposal.set(e2, s2), this.client.core.expirer.set(e2, pt$2(R$1.wc_sessionPropose.req.ttl));
      }, this.setPendingSessionRequest = async (e2) => {
        const { id: s2, topic: t2, params: i2, verifyContext: n2 } = e2, o2 = i2.request.expiryTimestamp || pt$2(R$1.wc_sessionRequest.req.ttl);
        await this.client.pendingRequest.set(s2, { id: s2, topic: t2, params: i2, verifyContext: n2 }), o2 && this.client.core.expirer.set(s2, o2);
      }, this.sendRequest = async (e2) => {
        const { topic: s2, method: t2, params: i2, expiry: n2, relayRpcId: o2, clientRpcId: a2, throwOnFailedPublish: c2 } = e2, p2 = formatJsonRpcRequest(t2, i2, a2);
        if (D$4() && he$1.includes(t2)) {
          const N2 = Ln(JSON.stringify(p2));
          this.client.core.verify.register({ attestationId: N2 });
        }
        const d2 = await this.client.core.crypto.encode(s2, p2), h2 = R$1[t2].req;
        return n2 && (h2.ttl = n2), o2 && (h2.id = o2), this.client.core.history.set(s2, p2), c2 ? (h2.internal = D$2(g$2({}, h2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, d2, h2)) : this.client.core.relayer.publish(s2, d2, h2).catch((N2) => this.client.logger.error(N2)), p2.id;
      }, this.sendResult = async (e2) => {
        const { id: s2, topic: t2, result: i2, throwOnFailedPublish: n2 } = e2, o2 = formatJsonRpcResult(s2, i2), a2 = await this.client.core.crypto.encode(t2, o2), c2 = await this.client.core.history.get(t2, s2), p2 = R$1[c2.request.method].res;
        n2 ? (p2.internal = D$2(g$2({}, p2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t2, a2, p2)) : this.client.core.relayer.publish(t2, a2, p2).catch((d2) => this.client.logger.error(d2)), await this.client.core.history.resolve(o2);
      }, this.sendError = async (e2, s2, t2) => {
        const i2 = formatJsonRpcError(e2, t2), n2 = await this.client.core.crypto.encode(s2, i2), o2 = await this.client.core.history.get(s2, e2), a2 = R$1[o2.request.method].res;
        this.client.core.relayer.publish(s2, n2, a2), await this.client.core.history.resolve(i2);
      }, this.cleanup = async () => {
        const e2 = [], s2 = [];
        this.client.session.getAll().forEach((t2) => {
          let i2 = false;
          mt$2(t2.expiry) && (i2 = true), this.client.core.crypto.keychain.has(t2.topic) || (i2 = true), i2 && e2.push(t2.topic);
        }), this.client.proposal.getAll().forEach((t2) => {
          mt$2(t2.expiryTimestamp) && s2.push(t2.id);
        }), await Promise.all([...e2.map((t2) => this.deleteSession({ topic: t2 })), ...s2.map((t2) => this.deleteProposal(t2))]);
      }, this.onRelayEventRequest = async (e2) => {
        this.requestQueue.queue.push(e2), await this.processRequestsQueue();
      }, this.processRequestsQueue = async () => {
        if (this.requestQueue.state === I$1.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = I$1.active;
          const e2 = this.requestQueue.queue.shift();
          if (e2)
            try {
              this.processRequest(e2), await new Promise((s2) => setTimeout(s2, 300));
            } catch (s2) {
              this.client.logger.warn(s2);
            }
        }
        this.requestQueue.state = I$1.idle;
      }, this.processRequest = (e2) => {
        const { topic: s2, payload: t2 } = e2, i2 = t2.method;
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
      }, this.onRelayEventResponse = async (e2) => {
        const { topic: s2, payload: t2 } = e2, i2 = (await this.client.core.history.get(s2, t2.id)).request.method;
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
      }, this.onRelayEventUnknownPayload = (e2) => {
        const { topic: s2 } = e2, { message: t2 } = N$2("MISSING_OR_INVALID", `Decoded payload on topic ${s2} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(t2);
      }, this.onSessionProposeRequest = async (e2, s2) => {
        const { params: t2, id: i2 } = s2;
        try {
          this.isValidConnect(g$2({}, s2.params));
          const n2 = t2.expiryTimestamp || pt$2(R$1.wc_sessionPropose.req.ttl), o2 = g$2({ id: i2, pairingTopic: e2, expiryTimestamp: n2 }, t2);
          await this.setProposal(i2, o2);
          const a2 = Ln(JSON.stringify(s2)), c2 = await this.getVerifyContext(a2, o2.proposer.metadata);
          this.client.events.emit("session_proposal", { id: i2, params: o2, verifyContext: c2 });
        } catch (n2) {
          await this.sendError(i2, e2, n2), this.client.logger.error(n2);
        }
      }, this.onSessionProposeResponse = async (e2, s2) => {
        const { id: t2 } = s2;
        if (isJsonRpcResult(s2)) {
          const { result: i2 } = s2;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i2 });
          const n2 = this.client.proposal.get(t2);
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n2 });
          const o2 = n2.proposer.publicKey;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o2 });
          const a2 = i2.responderPublicKey;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a2 });
          const c2 = await this.client.core.crypto.generateSharedKey(o2, a2);
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
          const p2 = await this.client.core.relayer.subscribe(c2);
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p2 }), await this.client.core.pairing.activate({ topic: e2 });
        } else
          isJsonRpcError(s2) && (await this.client.proposal.delete(t2, U$3("USER_DISCONNECTED")), this.events.emit(yt$2("session_connect"), { error: s2.error }));
      }, this.onSessionSettleRequest = async (e2, s2) => {
        const { id: t2, params: i2 } = s2;
        try {
          this.isValidSessionSettleRequest(i2);
          const { relay: n2, controller: o2, expiry: a2, namespaces: c2, sessionProperties: p2, pairingTopic: d2 } = s2.params, h2 = g$2({ topic: e2, relay: n2, expiry: a2, namespaces: c2, acknowledged: true, pairingTopic: d2, requiredNamespaces: {}, optionalNamespaces: {}, controller: o2.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o2.publicKey, metadata: o2.metadata } }, p2 && { sessionProperties: p2 });
          await this.sendResult({ id: s2.id, topic: e2, result: true }), this.events.emit(yt$2("session_connect"), { session: h2 }), this.cleanupDuplicatePairings(h2);
        } catch (n2) {
          await this.sendError(t2, e2, n2), this.client.logger.error(n2);
        }
      }, this.onSessionSettleResponse = async (e2, s2) => {
        const { id: t2 } = s2;
        isJsonRpcResult(s2) ? (await this.client.session.update(e2, { acknowledged: true }), this.events.emit(yt$2("session_approve", t2), {})) : isJsonRpcError(s2) && (await this.client.session.delete(e2, U$3("USER_DISCONNECTED")), this.events.emit(yt$2("session_approve", t2), { error: s2.error }));
      }, this.onSessionUpdateRequest = async (e2, s2) => {
        const { params: t2, id: i2 } = s2;
        try {
          const n2 = `${e2}_session_update`, o2 = sr$2.get(n2);
          if (o2 && this.isRequestOutOfSync(o2, i2)) {
            this.client.logger.info(`Discarding out of sync request - ${i2}`);
            return;
          }
          this.isValidUpdate(g$2({ topic: e2 }, t2)), await this.client.session.update(e2, { namespaces: t2.namespaces }), await this.sendResult({ id: i2, topic: e2, result: true }), this.client.events.emit("session_update", { id: i2, topic: e2, params: t2 }), sr$2.set(n2, i2);
        } catch (n2) {
          await this.sendError(i2, e2, n2), this.client.logger.error(n2);
        }
      }, this.isRequestOutOfSync = (e2, s2) => parseInt(s2.toString().slice(0, -3)) <= parseInt(e2.toString().slice(0, -3)), this.onSessionUpdateResponse = (e2, s2) => {
        const { id: t2 } = s2;
        isJsonRpcResult(s2) ? this.events.emit(yt$2("session_update", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$2("session_update", t2), { error: s2.error });
      }, this.onSessionExtendRequest = async (e2, s2) => {
        const { id: t2 } = s2;
        try {
          this.isValidExtend({ topic: e2 }), await this.setExpiry(e2, pt$2(L$2)), await this.sendResult({ id: t2, topic: e2, result: true }), this.client.events.emit("session_extend", { id: t2, topic: e2 });
        } catch (i2) {
          await this.sendError(t2, e2, i2), this.client.logger.error(i2);
        }
      }, this.onSessionExtendResponse = (e2, s2) => {
        const { id: t2 } = s2;
        isJsonRpcResult(s2) ? this.events.emit(yt$2("session_extend", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$2("session_extend", t2), { error: s2.error });
      }, this.onSessionPingRequest = async (e2, s2) => {
        const { id: t2 } = s2;
        try {
          this.isValidPing({ topic: e2 }), await this.sendResult({ id: t2, topic: e2, result: true }), this.client.events.emit("session_ping", { id: t2, topic: e2 });
        } catch (i2) {
          await this.sendError(t2, e2, i2), this.client.logger.error(i2);
        }
      }, this.onSessionPingResponse = (e2, s2) => {
        const { id: t2 } = s2;
        setTimeout(() => {
          isJsonRpcResult(s2) ? this.events.emit(yt$2("session_ping", t2), {}) : isJsonRpcError(s2) && this.events.emit(yt$2("session_ping", t2), { error: s2.error });
        }, 500);
      }, this.onSessionDeleteRequest = async (e2, s2) => {
        const { id: t2 } = s2;
        try {
          this.isValidDisconnect({ topic: e2, reason: s2.params }), await Promise.all([new Promise((i2) => {
            this.client.core.relayer.once(D$3.publish, async () => {
              i2(await this.deleteSession({ topic: e2, id: t2 }));
            });
          }), this.sendResult({ id: t2, topic: e2, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: e2, error: U$3("USER_DISCONNECTED") })]);
        } catch (i2) {
          this.client.logger.error(i2);
        }
      }, this.onSessionRequest = async (e2, s2) => {
        const { id: t2, params: i2 } = s2;
        try {
          this.isValidRequest(g$2({ topic: e2 }, i2));
          const n2 = Ln(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i2, t2))), o2 = this.client.session.get(e2), a2 = await this.getVerifyContext(n2, o2.peer.metadata), c2 = { id: t2, topic: e2, params: i2, verifyContext: a2 };
          await this.setPendingSessionRequest(c2), this.addSessionRequestToSessionRequestQueue(c2), this.processSessionRequestQueue();
        } catch (n2) {
          await this.sendError(t2, e2, n2), this.client.logger.error(n2);
        }
      }, this.onSessionRequestResponse = (e2, s2) => {
        const { id: t2 } = s2;
        isJsonRpcResult(s2) ? this.events.emit(yt$2("session_request", t2), { result: s2.result }) : isJsonRpcError(s2) && this.events.emit(yt$2("session_request", t2), { error: s2.error });
      }, this.onSessionEventRequest = async (e2, s2) => {
        const { id: t2, params: i2 } = s2;
        try {
          const n2 = `${e2}_session_event_${i2.event.name}`, o2 = sr$2.get(n2);
          if (o2 && this.isRequestOutOfSync(o2, t2)) {
            this.client.logger.info(`Discarding out of sync request - ${t2}`);
            return;
          }
          this.isValidEmit(g$2({ topic: e2 }, i2)), this.client.events.emit("session_event", { id: t2, topic: e2, params: i2 }), sr$2.set(n2, t2);
        } catch (n2) {
          await this.sendError(t2, e2, n2), this.client.logger.error(n2);
        }
      }, this.addSessionRequestToSessionRequestQueue = (e2) => {
        this.sessionRequestQueue.queue.push(e2);
      }, this.cleanupAfterResponse = (e2) => {
        this.deletePendingSessionRequest(e2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
          this.sessionRequestQueue.state = I$1.idle, this.processSessionRequestQueue();
        }, cjs$4.toMiliseconds(this.requestQueueDelay));
      }, this.cleanupPendingSentRequestsForTopic = ({ topic: e2, error: s2 }) => {
        const t2 = this.client.core.history.pending;
        t2.length > 0 && t2.filter((i2) => i2.topic === e2 && i2.request.method === "wc_sessionRequest").forEach((i2) => {
          this.events.emit(yt$2("session_request", i2.request.id), { error: s2 });
        });
      }, this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === I$1.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const e2 = this.sessionRequestQueue.queue[0];
        if (!e2) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          this.sessionRequestQueue.state = I$1.active, this.client.events.emit("session_request", e2);
        } catch (s2) {
          this.client.logger.error(s2);
        }
      }, this.onPairingCreated = (e2) => {
        if (e2.active)
          return;
        const s2 = this.client.proposal.getAll().find((t2) => t2.pairingTopic === e2.topic);
        s2 && this.onSessionProposeRequest(e2.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: s2.requiredNamespaces, optionalNamespaces: s2.optionalNamespaces, relays: s2.relays, proposer: s2.proposer, sessionProperties: s2.sessionProperties }, s2.id));
      }, this.isValidConnect = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e2)}`);
          throw new Error(a2);
        }
        const { pairingTopic: s2, requiredNamespaces: t2, optionalNamespaces: i2, sessionProperties: n2, relays: o2 } = e2;
        if (w$4(s2) || await this.isValidPairingTopic(s2), !qt$2(o2, true)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `connect() relays: ${o2}`);
          throw new Error(a2);
        }
        !w$4(t2) && B$3(t2) !== 0 && this.validateNamespaces(t2, "requiredNamespaces"), !w$4(i2) && B$3(i2) !== 0 && this.validateNamespaces(i2, "optionalNamespaces"), w$4(n2) || this.validateSessionProps(n2, "sessionProperties");
      }, this.validateNamespaces = (e2, s2) => {
        const t2 = Ht$2(e2, "connect()", s2);
        if (t2)
          throw new Error(t2.message);
      }, this.isValidApprove = async (e2) => {
        if (!Gt$2(e2))
          throw new Error(N$2("MISSING_OR_INVALID", `approve() params: ${e2}`).message);
        const { id: s2, namespaces: t2, relayProtocol: i2, sessionProperties: n2 } = e2;
        await this.isValidProposalId(s2);
        const o2 = this.client.proposal.get(s2), a2 = ln(t2, "approve()");
        if (a2)
          throw new Error(a2.message);
        const c2 = fn(o2.requiredNamespaces, t2, "approve()");
        if (c2)
          throw new Error(c2.message);
        if (!g$4(i2, true)) {
          const { message: p2 } = N$2("MISSING_OR_INVALID", `approve() relayProtocol: ${i2}`);
          throw new Error(p2);
        }
        w$4(n2) || this.validateSessionProps(n2, "sessionProperties");
      }, this.isValidReject = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: i2 } = N$2("MISSING_OR_INVALID", `reject() params: ${e2}`);
          throw new Error(i2);
        }
        const { id: s2, reason: t2 } = e2;
        if (await this.isValidProposalId(s2), !Wt$1(t2)) {
          const { message: i2 } = N$2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t2)}`);
          throw new Error(i2);
        }
      }, this.isValidSessionSettleRequest = (e2) => {
        if (!Gt$2(e2)) {
          const { message: c2 } = N$2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e2}`);
          throw new Error(c2);
        }
        const { relay: s2, controller: t2, namespaces: i2, expiry: n2 } = e2;
        if (!dn(s2)) {
          const { message: c2 } = N$2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(c2);
        }
        const o2 = Ft$2(t2, "onSessionSettleRequest()");
        if (o2)
          throw new Error(o2.message);
        const a2 = ln(i2, "onSessionSettleRequest()");
        if (a2)
          throw new Error(a2.message);
        if (mt$2(n2)) {
          const { message: c2 } = N$2("EXPIRED", "onSessionSettleRequest()");
          throw new Error(c2);
        }
      }, this.isValidUpdate = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `update() params: ${e2}`);
          throw new Error(a2);
        }
        const { topic: s2, namespaces: t2 } = e2;
        await this.isValidSessionTopic(s2);
        const i2 = this.client.session.get(s2), n2 = ln(t2, "update()");
        if (n2)
          throw new Error(n2.message);
        const o2 = fn(i2.requiredNamespaces, t2, "update()");
        if (o2)
          throw new Error(o2.message);
      }, this.isValidExtend = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: t2 } = N$2("MISSING_OR_INVALID", `extend() params: ${e2}`);
          throw new Error(t2);
        }
        const { topic: s2 } = e2;
        await this.isValidSessionTopic(s2);
      }, this.isValidRequest = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `request() params: ${e2}`);
          throw new Error(a2);
        }
        const { topic: s2, request: t2, chainId: i2, expiry: n2 } = e2;
        await this.isValidSessionTopic(s2);
        const { namespaces: o2 } = this.client.session.get(s2);
        if (!Qt$1(o2, i2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `request() chainId: ${i2}`);
          throw new Error(a2);
        }
        if (!zt$2(t2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `request() ${JSON.stringify(t2)}`);
          throw new Error(a2);
        }
        if (!Zt$1(o2, i2, t2.method)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `request() method: ${t2.method}`);
          throw new Error(a2);
        }
        if (n2 && !tr$2(n2, U$2)) {
          const { message: a2 } = N$2("MISSING_OR_INVALID", `request() expiry: ${n2}. Expiry must be a number (in seconds) between ${U$2.min} and ${U$2.max}`);
          throw new Error(a2);
        }
      }, this.isValidRespond = async (e2) => {
        var s2;
        if (!Gt$2(e2)) {
          const { message: n2 } = N$2("MISSING_OR_INVALID", `respond() params: ${e2}`);
          throw new Error(n2);
        }
        const { topic: t2, response: i2 } = e2;
        try {
          await this.isValidSessionTopic(t2);
        } catch (n2) {
          throw (s2 = e2 == null ? void 0 : e2.response) != null && s2.id && this.cleanupAfterResponse(e2), n2;
        }
        if (!Yt$2(i2)) {
          const { message: n2 } = N$2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i2)}`);
          throw new Error(n2);
        }
      }, this.isValidPing = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: t2 } = N$2("MISSING_OR_INVALID", `ping() params: ${e2}`);
          throw new Error(t2);
        }
        const { topic: s2 } = e2;
        await this.isValidSessionOrPairingTopic(s2);
      }, this.isValidEmit = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `emit() params: ${e2}`);
          throw new Error(o2);
        }
        const { topic: s2, event: t2, chainId: i2 } = e2;
        await this.isValidSessionTopic(s2);
        const { namespaces: n2 } = this.client.session.get(s2);
        if (!Qt$1(n2, i2)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `emit() chainId: ${i2}`);
          throw new Error(o2);
        }
        if (!Jt$2(t2)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t2)}`);
          throw new Error(o2);
        }
        if (!Xt$1(n2, i2, t2.name)) {
          const { message: o2 } = N$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t2)}`);
          throw new Error(o2);
        }
      }, this.isValidDisconnect = async (e2) => {
        if (!Gt$2(e2)) {
          const { message: t2 } = N$2("MISSING_OR_INVALID", `disconnect() params: ${e2}`);
          throw new Error(t2);
        }
        const { topic: s2 } = e2;
        await this.isValidSessionOrPairingTopic(s2);
      }, this.getVerifyContext = async (e2, s2) => {
        const t2 = { verified: { verifyUrl: s2.verifyUrl || F$2, validation: "UNKNOWN", origin: s2.url || "" } };
        try {
          const i2 = await this.client.core.verify.resolve({ attestationId: e2, verifyUrl: s2.verifyUrl });
          i2 && (t2.verified.origin = i2.origin, t2.verified.isScam = i2.isScam, t2.verified.validation = i2.origin === new URL(s2.url).origin ? "VALID" : "INVALID");
        } catch (i2) {
          this.client.logger.info(i2);
        }
        return this.client.logger.info(`Verify context: ${JSON.stringify(t2)}`), t2;
      }, this.validateSessionProps = (e2, s2) => {
        Object.values(e2).forEach((t2) => {
          if (!g$4(t2, false)) {
            const { message: i2 } = N$2("MISSING_OR_INVALID", `${s2} must be in Record<string, string> format. Received: ${JSON.stringify(t2)}`);
            throw new Error(i2);
          }
        });
      };
    }
    async isInitialized() {
      if (!this.initialized) {
        const { message: r2 } = N$2("NOT_INITIALIZED", this.name);
        throw new Error(r2);
      }
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(D$3.message, async (r2) => {
        const { topic: e2, message: s2 } = r2;
        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s2)))
          return;
        const t2 = await this.client.core.crypto.decode(e2, s2);
        try {
          isJsonRpcRequest(t2) ? (this.client.core.history.set(e2, t2), this.onRelayEventRequest({ topic: e2, payload: t2 })) : isJsonRpcResponse(t2) ? (await this.client.core.history.resolve(t2), await this.onRelayEventResponse({ topic: e2, payload: t2 }), this.client.core.history.delete(e2, t2.id)) : this.onRelayEventUnknownPayload({ topic: e2, payload: t2 });
        } catch (i2) {
          this.client.logger.error(i2);
        }
      });
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(v$2.expired, async (r2) => {
        const { topic: e2, id: s2 } = ft$2(r2.target);
        if (s2 && this.client.pendingRequest.keys.includes(s2))
          return await this.deletePendingSessionRequest(s2, N$2("EXPIRED"), true);
        e2 ? this.client.session.keys.includes(e2) && (await this.deleteSession({ topic: e2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e2 })) : s2 && (await this.deleteProposal(s2, true), this.client.events.emit("proposal_expire", { id: s2 }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(V$1.create, (r2) => this.onPairingCreated(r2));
    }
    isValidPairingTopic(r2) {
      if (!g$4(r2, false)) {
        const { message: e2 } = N$2("MISSING_OR_INVALID", `pairing topic should be a string: ${r2}`);
        throw new Error(e2);
      }
      if (!this.client.core.pairing.pairings.keys.includes(r2)) {
        const { message: e2 } = N$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r2}`);
        throw new Error(e2);
      }
      if (mt$2(this.client.core.pairing.pairings.get(r2).expiry)) {
        const { message: e2 } = N$2("EXPIRED", `pairing topic: ${r2}`);
        throw new Error(e2);
      }
    }
    async isValidSessionTopic(r2) {
      if (!g$4(r2, false)) {
        const { message: e2 } = N$2("MISSING_OR_INVALID", `session topic should be a string: ${r2}`);
        throw new Error(e2);
      }
      if (!this.client.session.keys.includes(r2)) {
        const { message: e2 } = N$2("NO_MATCHING_KEY", `session topic doesn't exist: ${r2}`);
        throw new Error(e2);
      }
      if (mt$2(this.client.session.get(r2).expiry)) {
        await this.deleteSession({ topic: r2 });
        const { message: e2 } = N$2("EXPIRED", `session topic: ${r2}`);
        throw new Error(e2);
      }
      if (!this.client.core.crypto.keychain.has(r2)) {
        const { message: e2 } = N$2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${r2}`);
        throw await this.deleteSession({ topic: r2 }), new Error(e2);
      }
    }
    async isValidSessionOrPairingTopic(r2) {
      if (this.client.session.keys.includes(r2))
        await this.isValidSessionTopic(r2);
      else if (this.client.core.pairing.pairings.keys.includes(r2))
        this.isValidPairingTopic(r2);
      else if (g$4(r2, false)) {
        const { message: e2 } = N$2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r2}`);
        throw new Error(e2);
      } else {
        const { message: e2 } = N$2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r2}`);
        throw new Error(e2);
      }
    }
    async isValidProposalId(r2) {
      if (!Bt$2(r2)) {
        const { message: e2 } = N$2("MISSING_OR_INVALID", `proposal id should be a number: ${r2}`);
        throw new Error(e2);
      }
      if (!this.client.proposal.keys.includes(r2)) {
        const { message: e2 } = N$2("NO_MATCHING_KEY", `proposal id doesn't exist: ${r2}`);
        throw new Error(e2);
      }
      if (mt$2(this.client.proposal.get(r2).expiryTimestamp)) {
        await this.deleteProposal(r2);
        const { message: e2 } = N$2("EXPIRED", `proposal id: ${r2}`);
        throw new Error(e2);
      }
    }
  }
  class us extends Kt$1 {
    constructor(r2, e2) {
      super(r2, e2, oe$1, G$1), this.core = r2, this.logger = e2;
    }
  }
  class ge extends Kt$1 {
    constructor(r2, e2) {
      super(r2, e2, ce$1, G$1), this.core = r2, this.logger = e2;
    }
  }
  class gs extends Kt$1 {
    constructor(r2, e2) {
      super(r2, e2, pe, G$1, (s2) => s2.id), this.core = r2, this.logger = e2;
    }
  }
  let Q$1 = class Q2 extends b$2 {
    constructor(r2) {
      super(r2), this.protocol = J, this.version = F$1, this.name = M$1.name, this.events = new eventsExports.EventEmitter(), this.on = (s2, t2) => this.events.on(s2, t2), this.once = (s2, t2) => this.events.once(s2, t2), this.off = (s2, t2) => this.events.off(s2, t2), this.removeListener = (s2, t2) => this.events.removeListener(s2, t2), this.removeAllListeners = (s2) => this.events.removeAllListeners(s2), this.connect = async (s2) => {
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
      }, this.name = (r2 == null ? void 0 : r2.name) || M$1.name, this.metadata = (r2 == null ? void 0 : r2.metadata) || Qn();
      const e2 = typeof (r2 == null ? void 0 : r2.logger) < "u" && typeof (r2 == null ? void 0 : r2.logger) != "string" ? r2.logger : cjs$3.pino(cjs$3.getDefaultLoggerOptions({ level: (r2 == null ? void 0 : r2.logger) || M$1.logger }));
      this.core = (r2 == null ? void 0 : r2.core) || new Mr(r2), this.logger = cjs$3.generateChildLogger(e2, this.name), this.session = new ge(this.core, this.logger), this.proposal = new us(this.core, this.logger), this.pendingRequest = new gs(this.core, this.logger), this.engine = new ds(this);
    }
    static async init(r2) {
      const e2 = new Q2(r2);
      return await e2.initialize(), e2;
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
  };
  var P$1 = Object.defineProperty, x$1 = Object.defineProperties, N$1 = Object.getOwnPropertyDescriptors, j$1 = Object.getOwnPropertySymbols, U$1 = Object.prototype.hasOwnProperty, T$2 = Object.prototype.propertyIsEnumerable, W = (e2, t2, s2) => t2 in e2 ? P$1(e2, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e2[t2] = s2, q$1 = (e2, t2) => {
    for (var s2 in t2 || (t2 = {}))
      U$1.call(t2, s2) && W(e2, s2, t2[s2]);
    if (j$1)
      for (var s2 of j$1(t2))
        T$2.call(t2, s2) && W(e2, s2, t2[s2]);
    return e2;
  }, A$2 = (e2, t2) => x$1(e2, N$1(t2)), S$3 = (e2, t2, s2) => {
    if (!t2.has(e2))
      throw TypeError("Cannot " + s2);
  }, a$2 = (e2, t2, s2) => (S$3(e2, t2, "read from private field"), s2 ? s2.call(e2) : t2.get(e2)), l$4 = (e2, t2, s2) => {
    if (t2.has(e2))
      throw TypeError("Cannot add the same private member more than once");
    t2 instanceof WeakSet ? t2.add(e2) : t2.set(e2, s2);
  }, y$1 = (e2, t2, s2, d2) => (S$3(e2, t2, "write to private field"), d2 ? d2.call(e2, s2) : t2.set(e2, s2), s2), o$5 = (e2, t2, s2) => (S$3(e2, t2, "access private method"), s2), h$3, p$1, w$1, i$4, u$2, _$2, n$6, r$3, m$1, g$1;
  let z$2 = class z {
    constructor(t2) {
      l$4(this, u$2), l$4(this, n$6), l$4(this, m$1), l$4(this, h$3, void 0), l$4(this, p$1, void 0), l$4(this, w$1, void 0), l$4(this, i$4, void 0), y$1(this, h$3, t2), y$1(this, p$1, o$5(this, u$2, _$2).call(this)), o$5(this, n$6, r$3).call(this);
    }
    async connect(t2, showModal = true) {
      const { requiredNamespaces: s2, optionalNamespaces: d2 } = t2;
      return new Promise(async (C2, b2) => {
        await o$5(this, n$6, r$3).call(this);
        if (showModal) {
          const E2 = a$2(this, p$1).subscribeModal((c2) => {
            c2.open || (E2(), b2(new Error("Modal closed")));
          }), { uri: O2, approval: I2 } = await a$2(this, i$4).connect(t2);
          if (O2) {
            const c2 = /* @__PURE__ */ new Set();
            s2 && Object.values(s2).forEach(({ chains: f2 }) => {
              f2 && f2.forEach((v2) => c2.add(v2));
            }), d2 && Object.values(d2).forEach(({ chains: f2 }) => {
              f2 && f2.forEach((v2) => c2.add(v2));
            }), await a$2(this, p$1).openModal({ uri: O2, chains: Array.from(c2) });
          }
          try {
            const c2 = await I2();
            C2(c2);
          } catch (c2) {
            b2(c2);
          } finally {
            E2(), a$2(this, p$1).closeModal();
          }
        } else {
          const { uri: O2, approval: I2 } = await a$2(this, i$4).connect(t2);
          if (O2) {
            const c2 = /* @__PURE__ */ new Set();
            s2 && Object.values(s2).forEach(({ chains: f2 }) => {
              f2 && f2.forEach((v2) => c2.add(v2));
            }), d2 && Object.values(d2).forEach(({ chains: f2 }) => {
              f2 && f2.forEach((v2) => c2.add(v2));
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
              b2(err);
            }
          }
        }
      });
    }
    async disconnect(t2) {
      await o$5(this, n$6, r$3).call(this), await a$2(this, i$4).disconnect(t2);
    }
    async request(t2) {
      return await o$5(this, n$6, r$3).call(this), await a$2(this, i$4).request(t2);
    }
    async getSessions() {
      return await o$5(this, n$6, r$3).call(this), a$2(this, i$4).session.getAll();
    }
    async getSession() {
      return await o$5(this, n$6, r$3).call(this), a$2(this, i$4).session.getAll().at(-1);
    }
    async onSessionEvent(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).on("session_event", t2);
    }
    async offSessionEvent(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).off("session_event", t2);
    }
    async onSessionUpdate(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).on("session_update", t2);
    }
    async offSessionUpdate(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).off("session_update", t2);
    }
    async onSessionDelete(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).on("session_delete", t2);
    }
    async offSessionDelete(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).off("session_delete", t2);
    }
    async onSessionExpire(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).on("session_expire", t2);
    }
    async offSessionExpire(t2) {
      await o$5(this, n$6, r$3).call(this), a$2(this, i$4).off("session_expire", t2);
    }
  };
  h$3 = /* @__PURE__ */ new WeakMap(), p$1 = /* @__PURE__ */ new WeakMap(), w$1 = /* @__PURE__ */ new WeakMap(), i$4 = /* @__PURE__ */ new WeakMap(), u$2 = /* @__PURE__ */ new WeakSet(), _$2 = function() {
    const { modalOptions: e2, projectId: t2 } = a$2(this, h$3);
    return new d$3(A$2(q$1({}, e2), { projectId: t2 }));
  }, n$6 = /* @__PURE__ */ new WeakSet(), r$3 = async function() {
    return a$2(this, i$4) ? true : (!a$2(this, w$1) && typeof window < "u" && y$1(this, w$1, o$5(this, m$1, g$1).call(this)), a$2(this, w$1));
  }, m$1 = /* @__PURE__ */ new WeakSet(), g$1 = async function() {
    y$1(
      this,
      i$4,
      await Q$1.init({
        metadata: a$2(this, h$3).metadata,
        projectId: a$2(this, h$3).projectId,
        relayUrl: a$2(this, h$3).relayUrl
      })
    );
    const e2 = await a$2(this, i$4).core.crypto.getClientId();
    try {
      localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e2);
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
      return util2.objectKeys(obj).map(function(e2) {
        return obj[e2];
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
    util2.jsonStringifyReplacer = (_2, value) => {
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
  const getParsedType = (data2) => {
    const t2 = typeof data2;
    switch (t2) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data2) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data2)) {
          return ZodParsedType.array;
        }
        if (data2 === null) {
          return ZodParsedType.null;
        }
        if (data2.then && typeof data2.then === "function" && data2.catch && typeof data2.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data2 instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data2 instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data2 instanceof Date) {
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
    const { data: data2, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data: data2, defaultError: errorMessage }).message;
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
    static mergeArray(status, results2) {
      const arrayValue = [];
      for (const s2 of results2) {
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
    parse(data2, params) {
      const result = this.safeParse(data2, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data2, params) {
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
        data: data2,
        parsedType: getParsedType(data2)
      };
      const result = this._parseSync({ data: data2, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    async parseAsync(data2, params) {
      const result = await this.safeParseAsync(data2, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data2, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: data2,
        parsedType: getParsedType(data2)
      };
      const maybeAsyncResult = this._parse({ data: data2, path: ctx.path, parent: ctx });
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
          return result.then((data2) => {
            if (!data2) {
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
      this._regex = (regex2, validation, message) => this.refinement((data2) => regex2.test(data2), {
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
          const regex2 = datetimeRegex(check);
          if (!regex2.test(input.data)) {
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
    regex(regex2, message) {
      return this._addCheck({
        kind: "regex",
        regex: regex2,
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
    catchall(index2) {
      return new ZodObject({
        ...this._def,
        catchall: index2
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
      function handleResults(results2) {
        for (const result of results2) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results2) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results2.map((result) => new ZodError(result.ctx.common.issues));
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
  function mergeValues(a2, b2) {
    const aType = getParsedType(a2);
    const bType = getParsedType(b2);
    if (a2 === b2) {
      return { valid: true, data: a2 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b2);
      const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a2, ...b2 };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a2[key], b2[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a2.length !== b2.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index2 = 0; index2 < a2.length; index2++) {
        const itemA = a2[index2];
        const itemB = b2[index2];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
      return { valid: true, data: a2 };
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
        return Promise.all(items).then((results2) => {
          return ParseStatus.mergeArray(status, results2);
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
      const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
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
          const parsedArgs = await this._def.args.parseAsync(args, params).catch((e2) => {
            error.addIssue(makeArgsIssue(args, e2));
            throw error;
          });
          const result = await fn2(...parsedArgs);
          const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e2) => {
            error.addIssue(makeReturnsIssue(result, e2));
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
      return OK(promisified.then((data2) => {
        return this._def.type.parseAsync(data2, {
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
      let data2 = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data2 = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data: data2,
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
      const data2 = ctx.data;
      return this._def.type._parse({
        data: data2,
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
    static create(a2, b2) {
      return new ZodPipeline({
        in: a2,
        out: b2,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  }
  const custom = (check, params = {}, fatal) => {
    if (check)
      return ZodAny.create().superRefine((data2, ctx) => {
        var _a, _b;
        if (!check(data2)) {
          const p2 = typeof params === "function" ? params(data2) : params;
          const _fatal = (_b = (_a = p2.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
          const p22 = typeof p2 === "string" ? { message: p2 } : p2;
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
  }) => custom((data2) => data2 instanceof cls, params);
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
  var z$1 = /* @__PURE__ */ Object.freeze({
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
  const zodAddress = z$1.string().regex(aleoAddressRegex);
  const zodViewKey = z$1.string().regex(aleoViewKeyRegex);
  const zodPrivateKey = z$1.string().regex(aleoPrivateKeyRegex);
  z$1.string().regex(aleoTransitionIdRegex);
  const zodTransactionId = z$1.string().regex(aleoTransactionIdRegex);
  const zodField = z$1.string().regex(aleoFieldRegex);
  const zodU32 = z$1.string().regex(aleoU32);
  const zodU64 = z$1.string().regex(aleoU64);
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
  exports2.EventType = void 0;
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
  })(exports2.EventType || (exports2.EventType = {}));
  exports2.EventStatus = void 0;
  (function(EventStatus) {
    EventStatus["Creating"] = "Creating";
    EventStatus["Pending"] = "Pending";
    EventStatus["Settled"] = "Settled";
    EventStatus["Failed"] = "Failed";
  })(exports2.EventStatus || (exports2.EventStatus = {}));
  exports2.Visibility = void 0;
  (function(Visibility) {
    Visibility["Private"] = "Private";
    Visibility["Public"] = "Public";
  })(exports2.Visibility || (exports2.Visibility = {}));
  exports2.Network = void 0;
  (function(Network) {
    Network["AleoTestnet"] = "AleoTestnet";
    Network["AleoCanarynet"] = "AleoCanarynet";
    Network["AleoMainnet"] = "AleoMainnet";
  })(exports2.Network || (exports2.Network = {}));
  const zodEventType = z$1.nativeEnum(exports2.EventType);
  const zodEventStatus = z$1.nativeEnum(exports2.EventStatus);
  const zodNetwork = z$1.nativeEnum(exports2.Network);
  const zodVisibility = z$1.nativeEnum(exports2.Visibility);
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
      case exports2.Network.AleoMainnet:
        chain = "aleo:0";
        break;
      case exports2.Network.AleoTestnet:
        chain = "aleo:1";
        break;
      case exports2.Network.AleoCanarynet:
        chain = "aleo:0";
        break;
    }
    return includePrefix ? chain : chain.replace("aleo:", "");
  };
  const chainIdToNetwork = (chainId) => {
    switch (chainId) {
      case "aleo:0":
        return exports2.Network.AleoCanarynet;
      case "aleo:1":
        return exports2.Network.AleoTestnet;
      case "aleo:3":
        return exports2.Network.AleoTestnet;
    }
  };
  const name = "@puzzlehq/sdk-core";
  const displayName = "Puzzle SDK";
  const version$1 = "0.3.2-beta.8";
  const description = "Your portal to privacy";
  const main = "./dist/puzzle.cjs.js";
  const module2 = "./dist/puzzle.es.js";
  const browser$2 = "./dist/puzzle.umd.js";
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
    version: version$1,
    description,
    main,
    module: module2,
    browser: browser$2,
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
  exports2.connection = void 0;
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
    exports2.connection = new z$2({
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
        disconnectOnVersionChange(exports2.connection, options.onDisconnect);
      } catch (e2) {
        console.error(e2);
      }
    }
    exports2.connection.onSessionDelete(() => {
      localStorage.removeItem("puzzle-hasInjectedConnection");
      options.onDisconnect && options.onDisconnect();
    });
    exports2.connection.onSessionExpire(() => {
      localStorage.removeItem("puzzle-hasInjectedConnection");
      options.onDisconnect && options.onDisconnect();
    });
    const choice = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
    if (choice && JSON.parse(choice).name !== "Android") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
    if (typeof window !== "undefined") {
      window.puzzleSdkConnection = exports2.connection;
    }
    return exports2.connection;
  }
  async function disconnectOnVersionChange(connection2, onDisconnect) {
    const session = await (connection2 == null ? void 0 : connection2.getSession());
    if (session) {
      console.log("Disconnecting session", session);
      onDisconnect && onDisconnect();
      connection2.disconnect({
        topic: session.topic,
        reason: U$3("USER_DISCONNECTED")
      });
    }
  }
  async function getWalletConnectModalSignClient() {
    return new Promise((resolve) => {
      if (exports2.connection) {
        resolve(exports2.connection);
      } else if (typeof window !== "undefined" && (window == null ? void 0 : window.puzzleSdkConnection)) {
        resolve(window.puzzleSdkConnection);
      } else {
        const interval = setInterval(() => {
          if (exports2.connection) {
            clearInterval(interval);
            resolve(exports2.connection);
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
    } catch (e2) {
      console.warn(e2);
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
      } catch (e2) {
        console.error("getAccount error", e2);
        return { error: e2.message };
      }
    }
    try {
      const response = await connection.request(query);
      return response;
    } catch (e2) {
      console.error("getAccount error", e2);
      const error = e2.message;
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
      } catch (e2) {
        const error = e2.message;
        console.error("getBalance error", e2);
        return { error };
      }
    }
    try {
      const response = await connection.request(query);
      return response;
    } catch (e2) {
      const error = e2.message;
      console.error("getBalance error", e2);
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
    } catch (e2) {
      console.error("connect error", e2);
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
    } catch (e2) {
      console.error("createEvent error", e2);
      const error = e2.message;
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
      } catch (e2) {
        console.error("createSharedState error", e2);
        const error = e2.message;
        return { error };
      }
    }
    try {
      const response = await connection.request(query);
      return response;
    } catch (e2) {
      console.error("createSharedState error", e2);
      const error = e2.message;
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
      } catch (e2) {
        const error = e2.message;
        console.error("decrypt error", e2);
        return { error };
      }
    }
    try {
      const response = await connection.request(query);
      return response;
    } catch (e2) {
      console.error("decrypt error", e2);
      return { error: e2.message };
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
          reason: U$3("USER_DISCONNECTED"),
          topic: session.topic
        });
        localStorage.removeItem("puzzle-hasInjectedConnection");
        emitter.emit("session_change");
      } catch (e2) {
        console.warn(e2);
      }
      return {};
    } catch (e2) {
      console.error("error disconnecting", e2);
      const error = e2.message;
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
      } catch (e2) {
        console.error("getEvent error", e2);
        const error = e2.message;
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
    } catch (e2) {
      console.error("getEvents error", e2);
      const error = e2.message;
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
      } catch (e2) {
        console.error("getEvents error", e2);
        const error = e2.message;
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
    } catch (e2) {
      console.error("getEvents error", e2);
      const error = e2.message;
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
      } catch (e2) {
        console.error("importSharedState error", e2);
        const error = e2.message;
        return { error };
      }
    }
    try {
      const response = await connection.request(query);
      return response;
    } catch (e2) {
      console.error("importSharedState error", e2);
      const error = e2.message;
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
      } catch (e2) {
        console.error("getRecords error", e2);
        const error = e2.message;
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
    } catch (e2) {
      console.error("getRecords error", e2);
      const error = e2.message;
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
    } catch (e2) {
      console.error("signature error", e2);
      const error = e2.message;
      return { error };
    }
  };
  const PAGE_SIZE = 20;
  var browser$1 = { exports: {} };
  var ms;
  var hasRequiredMs;
  function requireMs() {
    if (hasRequiredMs)
      return ms;
    hasRequiredMs = 1;
    var s2 = 1e3;
    var m2 = s2 * 60;
    var h2 = m2 * 60;
    var d2 = h2 * 24;
    var w2 = d2 * 7;
    var y2 = d2 * 365.25;
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
      var n2 = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y2;
        case "weeks":
        case "week":
        case "w":
          return n2 * w2;
        case "days":
        case "day":
        case "d":
          return n2 * d2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d2) {
        return Math.round(ms2 / d2) + "d";
      }
      if (msAbs >= h2) {
        return Math.round(ms2 / h2) + "h";
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
      if (msAbs >= d2) {
        return plural(ms2, msAbs, d2, "day");
      }
      if (msAbs >= h2) {
        return plural(ms2, msAbs, h2, "hour");
      }
      if (msAbs >= m2) {
        return plural(ms2, msAbs, m2, "minute");
      }
      if (msAbs >= s2) {
        return plural(ms2, msAbs, s2, "second");
      }
      return ms2 + " ms";
    }
    function plural(ms2, msAbs, n2, name2) {
      var isPlural = msAbs >= n2 * 1.5;
      return Math.round(ms2 / n2) + " " + name2 + (isPlural ? "s" : "");
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
        let index2 = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index2++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index2];
            match = formatter.call(self2, val);
            args.splice(index2, 1);
            index2--;
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
        set: (v2) => {
          enableOverride = v2;
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
  (function(module3, exports3) {
    exports3.formatArgs = formatArgs;
    exports3.save = save;
    exports3.load = load;
    exports3.useColors = useColors;
    exports3.storage = localstorage();
    exports3.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports3.colors = [
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
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module3.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c2);
    }
    exports3.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports3.storage.setItem("debug", namespaces);
        } else {
          exports3.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r2;
      try {
        r2 = exports3.storage.getItem("debug");
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
    module3.exports = common(exports3);
    const { formatters } = module3.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser$1, browser$1.exports);
  var browserExports = browser$1.exports;
  const debug = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
  const log_sdk = debug("wallet:sdk");
  log_sdk.enabled = true;
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = window, e$5 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$5 = /* @__PURE__ */ new WeakMap();
  let o$4 = class o {
    constructor(t2, e2, n2) {
      if (this._$cssResult$ = true, n2 !== s$3)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e$5 && void 0 === t2) {
        const e2 = void 0 !== s2 && 1 === s2.length;
        e2 && (t2 = n$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$5.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$2 = (t2) => new o$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), i$3 = (t2, ...e2) => {
    const n2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, n3) => e3 + ((t3) => {
      if (true === t3._$cssResult$)
        return t3.cssText;
      if ("number" == typeof t3)
        return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t2[n3 + 1], t2[0]);
    return new o$4(n2, t2, s$3);
  }, S$2 = (s2, n2) => {
    e$5 ? s2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
      const n3 = document.createElement("style"), o2 = t$3.litNonce;
      void 0 !== o2 && n3.setAttribute("nonce", o2), n3.textContent = e2.cssText, s2.appendChild(n3);
    });
  }, c$2 = e$5 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e2 = "";
    for (const s2 of t3.cssRules)
      e2 += s2.cssText;
    return r$2(e2);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var s$2;
  const e$4 = window, r$1 = e$4.trustedTypes, h$2 = r$1 ? r$1.emptyScript : "", o$3 = e$4.reactiveElementPolyfillSupport, n$4 = { toAttribute(t2, i2) {
    switch (i2) {
      case Boolean:
        t2 = t2 ? h$2 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, i2) {
    let s2 = t2;
    switch (i2) {
      case Boolean:
        s2 = null !== t2;
        break;
      case Number:
        s2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          s2 = JSON.parse(t2);
        } catch (t3) {
          s2 = null;
        }
    }
    return s2;
  } }, a$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$3 = { attribute: true, type: String, converter: n$4, reflect: false, hasChanged: a$1 }, d$1 = "finalized";
  let u$1 = class u extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t2) {
      var i2;
      this.finalize(), (null !== (i2 = this.h) && void 0 !== i2 ? i2 : this.h = []).push(t2);
    }
    static get observedAttributes() {
      this.finalize();
      const t2 = [];
      return this.elementProperties.forEach((i2, s2) => {
        const e2 = this._$Ep(s2, i2);
        void 0 !== e2 && (this._$Ev.set(e2, s2), t2.push(e2));
      }), t2;
    }
    static createProperty(t2, i2 = l$3) {
      if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
        const s2 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
        void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
      }
    }
    static getPropertyDescriptor(t2, i2, s2) {
      return { get() {
        return this[i2];
      }, set(e2) {
        const r2 = this[t2];
        this[i2] = e2, this.requestUpdate(t2, r2, s2);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) || l$3;
    }
    static finalize() {
      if (this.hasOwnProperty(d$1))
        return false;
      this[d$1] = true;
      const t2 = Object.getPrototypeOf(this);
      if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
        for (const s2 of i2)
          this.createProperty(s2, t3[s2]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i2) {
      const s2 = [];
      if (Array.isArray(i2)) {
        const e2 = new Set(i2.flat(1 / 0).reverse());
        for (const i3 of e2)
          s2.unshift(c$2(i3));
      } else
        void 0 !== i2 && s2.push(c$2(i2));
      return s2;
    }
    static _$Ep(t2, i2) {
      const s2 = i2.attribute;
      return false === s2 ? void 0 : "string" == typeof s2 ? s2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
    }
    _$Eu() {
      var t2;
      this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
    }
    addController(t2) {
      var i2, s2;
      (null !== (i2 = this._$ES) && void 0 !== i2 ? i2 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s2 = t2.hostConnected) || void 0 === s2 || s2.call(t2));
    }
    removeController(t2) {
      var i2;
      null === (i2 = this._$ES) || void 0 === i2 || i2.splice(this._$ES.indexOf(t2) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t2, i2) => {
        this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
      });
    }
    createRenderRoot() {
      var t2;
      const s2 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
      return S$2(s2, this.constructor.elementStyles), s2;
    }
    connectedCallback() {
      var t2;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i2;
        return null === (i2 = t3.hostConnected) || void 0 === i2 ? void 0 : i2.call(t3);
      });
    }
    enableUpdating(t2) {
    }
    disconnectedCallback() {
      var t2;
      null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i2;
        return null === (i2 = t3.hostDisconnected) || void 0 === i2 ? void 0 : i2.call(t3);
      });
    }
    attributeChangedCallback(t2, i2, s2) {
      this._$AK(t2, s2);
    }
    _$EO(t2, i2, s2 = l$3) {
      var e2;
      const r2 = this.constructor._$Ep(t2, s2);
      if (void 0 !== r2 && true === s2.reflect) {
        const h2 = (void 0 !== (null === (e2 = s2.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s2.converter : n$4).toAttribute(i2, s2.type);
        this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
      }
    }
    _$AK(t2, i2) {
      var s2;
      const e2 = this.constructor, r2 = e2._$Ev.get(t2);
      if (void 0 !== r2 && this._$El !== r2) {
        const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s2 = t3.converter) || void 0 === s2 ? void 0 : s2.fromAttribute) ? t3.converter : n$4;
        this._$El = r2, this[r2] = h2.fromAttribute(i2, t3.type), this._$El = null;
      }
    }
    requestUpdate(t2, i2, s2) {
      let e2 = true;
      void 0 !== t2 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || a$1)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), true === s2.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t2;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i3) => this[i3] = t3), this._$Ei = void 0);
      let i2 = false;
      const s2 = this._$AL;
      try {
        i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
          var i3;
          return null === (i3 = t3.hostUpdate) || void 0 === i3 ? void 0 : i3.call(t3);
        }), this.update(s2)) : this._$Ek();
      } catch (t3) {
        throw i2 = false, this._$Ek(), t3;
      }
      i2 && this._$AE(s2);
    }
    willUpdate(t2) {
    }
    _$AE(t2) {
      var i2;
      null === (i2 = this._$ES) || void 0 === i2 || i2.forEach((t3) => {
        var i3;
        return null === (i3 = t3.hostUpdated) || void 0 === i3 ? void 0 : i3.call(t3);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      void 0 !== this._$EC && (this._$EC.forEach((t3, i2) => this._$EO(i2, this[i2], t3)), this._$EC = void 0), this._$Ek();
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  };
  u$1[d$1] = true, u$1.elementProperties = /* @__PURE__ */ new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = { mode: "open" }, null == o$3 || o$3({ ReactiveElement: u$1 }), (null !== (s$2 = e$4.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$4.reactiveElementVersions = []).push("1.6.3");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$2;
  const i$2 = window, s$1 = i$2.trustedTypes, e$3 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$2 = "$lit$", n$3 = `lit$${(Math.random() + "").slice(9)}$`, l$2 = "?" + n$3, h$1 = `<${l$2}>`, r = document, u = () => r.createComment(""), d = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, c$1 = Array.isArray, v$1 = (t2) => c$1(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$1 = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = w(1), b = w(2), T$1 = Symbol.for("lit-noChange"), A$1 = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129, null, false);
  function P(t2, i2) {
    if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e$3 ? e$3.createHTML(i2) : i2;
  }
  const V = (t2, i2) => {
    const s2 = t2.length - 1, e2 = [];
    let l2, r2 = 2 === i2 ? "<svg>" : "", u2 = f;
    for (let i3 = 0; i3 < s2; i3++) {
      const s3 = t2[i3];
      let d2, c2, v2 = -1, a2 = 0;
      for (; a2 < s3.length && (u2.lastIndex = a2, c2 = u2.exec(s3), null !== c2); )
        a2 = u2.lastIndex, u2 === f ? "!--" === c2[1] ? u2 = _$1 : void 0 !== c2[1] ? u2 = m : void 0 !== c2[2] ? (y.test(c2[2]) && (l2 = RegExp("</" + c2[2], "g")), u2 = p) : void 0 !== c2[3] && (u2 = p) : u2 === p ? ">" === c2[0] ? (u2 = null != l2 ? l2 : f, v2 = -1) : void 0 === c2[1] ? v2 = -2 : (v2 = u2.lastIndex - c2[2].length, d2 = c2[1], u2 = void 0 === c2[3] ? p : '"' === c2[3] ? $ : g) : u2 === $ || u2 === g ? u2 = p : u2 === _$1 || u2 === m ? u2 = f : (u2 = p, l2 = void 0);
      const w2 = u2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
      r2 += u2 === f ? s3 + h$1 : v2 >= 0 ? (e2.push(d2), s3.slice(0, v2) + o$2 + s3.slice(v2) + n$3 + w2) : s3 + n$3 + (-2 === v2 ? (e2.push(void 0), i3) : w2);
    }
    return [P(t2, r2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : "")), e2];
  };
  class N {
    constructor({ strings: t2, _$litType$: i2 }, e2) {
      let h2;
      this.parts = [];
      let r2 = 0, d2 = 0;
      const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = V(t2, i2);
      if (this.el = N.createElement(a2, e2), C.currentNode = this.el.content, 2 === i2) {
        const t3 = this.el.content, i3 = t3.firstChild;
        i3.remove(), t3.append(...i3.childNodes);
      }
      for (; null !== (h2 = C.nextNode()) && v2.length < c2; ) {
        if (1 === h2.nodeType) {
          if (h2.hasAttributes()) {
            const t3 = [];
            for (const i3 of h2.getAttributeNames())
              if (i3.endsWith(o$2) || i3.startsWith(n$3)) {
                const s2 = f2[d2++];
                if (t3.push(i3), void 0 !== s2) {
                  const t4 = h2.getAttribute(s2.toLowerCase() + o$2).split(n$3), i4 = /([.?@])?(.*)/.exec(s2);
                  v2.push({ type: 1, index: r2, name: i4[2], strings: t4, ctor: "." === i4[1] ? H : "?" === i4[1] ? L$1 : "@" === i4[1] ? z : k });
                } else
                  v2.push({ type: 6, index: r2 });
              }
            for (const i3 of t3)
              h2.removeAttribute(i3);
          }
          if (y.test(h2.tagName)) {
            const t3 = h2.textContent.split(n$3), i3 = t3.length - 1;
            if (i3 > 0) {
              h2.textContent = s$1 ? s$1.emptyScript : "";
              for (let s2 = 0; s2 < i3; s2++)
                h2.append(t3[s2], u()), C.nextNode(), v2.push({ type: 2, index: ++r2 });
              h2.append(t3[i3], u());
            }
          }
        } else if (8 === h2.nodeType)
          if (h2.data === l$2)
            v2.push({ type: 2, index: r2 });
          else {
            let t3 = -1;
            for (; -1 !== (t3 = h2.data.indexOf(n$3, t3 + 1)); )
              v2.push({ type: 7, index: r2 }), t3 += n$3.length - 1;
          }
        r2++;
      }
    }
    static createElement(t2, i2) {
      const s2 = r.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  }
  function S$1(t2, i2, s2 = t2, e2) {
    var o2, n2, l2, h2;
    if (i2 === T$1)
      return i2;
    let r2 = void 0 !== e2 ? null === (o2 = s2._$Co) || void 0 === o2 ? void 0 : o2[e2] : s2._$Cl;
    const u2 = d(i2) ? void 0 : i2._$litDirective$;
    return (null == r2 ? void 0 : r2.constructor) !== u2 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u2 ? r2 = void 0 : (r2 = new u2(t2), r2._$AT(t2, s2, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s2)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), void 0 !== r2 && (i2 = S$1(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
  }
  class M {
    constructor(t2, i2) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      var i2;
      const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = (null !== (i2 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i2 ? i2 : r).importNode(s2, true);
      C.currentNode = o2;
      let n2 = C.nextNode(), l2 = 0, h2 = 0, u2 = e2[0];
      for (; void 0 !== u2; ) {
        if (l2 === u2.index) {
          let i3;
          2 === u2.type ? i3 = new R(n2, n2.nextSibling, this, t2) : 1 === u2.type ? i3 = new u2.ctor(n2, u2.name, u2.strings, this, t2) : 6 === u2.type && (i3 = new Z$1(n2, this, t2)), this._$AV.push(i3), u2 = e2[++h2];
        }
        l2 !== (null == u2 ? void 0 : u2.index) && (n2 = C.nextNode(), l2++);
      }
      return C.currentNode = r, o2;
    }
    v(t2) {
      let i2 = 0;
      for (const s2 of this._$AV)
        void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
  }
  class R {
    constructor(t2, i2, s2, e2) {
      var o2;
      this.type = 2, this._$AH = A$1, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cp = null === (o2 = null == e2 ? void 0 : e2.isConnected) || void 0 === o2 || o2;
    }
    get _$AU() {
      var t2, i2;
      return null !== (i2 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i2 ? i2 : this._$Cp;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i2 = this._$AM;
      return void 0 !== i2 && 11 === (null == t2 ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i2 = this) {
      t2 = S$1(this, t2, i2), d(t2) ? t2 === A$1 || null == t2 || "" === t2 ? (this._$AH !== A$1 && this._$AR(), this._$AH = A$1) : t2 !== this._$AH && t2 !== T$1 && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : v$1(t2) ? this.T(t2) : this._(t2);
    }
    k(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    $(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
    }
    _(t2) {
      this._$AH !== A$1 && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
    }
    g(t2) {
      var i2;
      const { values: s2, _$litType$: e2 } = t2, o2 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = N.createElement(P(e2.h, e2.h[0]), this.options)), e2);
      if ((null === (i2 = this._$AH) || void 0 === i2 ? void 0 : i2._$AD) === o2)
        this._$AH.v(s2);
      else {
        const t3 = new M(o2, this), i3 = t3.u(this.options);
        t3.v(s2), this.$(i3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i2 = E.get(t2.strings);
      return void 0 === i2 && E.set(t2.strings, i2 = new N(t2)), i2;
    }
    T(t2) {
      c$1(this._$AH) || (this._$AH = [], this._$AR());
      const i2 = this._$AH;
      let s2, e2 = 0;
      for (const o2 of t2)
        e2 === i2.length ? i2.push(s2 = new R(this.k(u()), this.k(u()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
      e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
      var s2;
      for (null === (s2 = this._$AP) || void 0 === s2 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
        const i3 = t2.nextSibling;
        t2.remove(), t2 = i3;
      }
    }
    setConnected(t2) {
      var i2;
      void 0 === this._$AM && (this._$Cp = t2, null === (i2 = this._$AP) || void 0 === i2 || i2.call(this, t2));
    }
  }
  class k {
    constructor(t2, i2, s2, e2, o2) {
      this.type = 1, this._$AH = A$1, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A$1;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2, i2 = this, s2, e2) {
      const o2 = this.strings;
      let n2 = false;
      if (void 0 === o2)
        t2 = S$1(this, t2, i2, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== T$1, n2 && (this._$AH = t2);
      else {
        const e3 = t2;
        let l2, h2;
        for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
          h2 = S$1(this, e3[s2 + l2], i2, l2), h2 === T$1 && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === A$1 ? t2 = A$1 : t2 !== A$1 && (t2 += (null != h2 ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
      }
      n2 && !e2 && this.j(t2);
    }
    j(t2) {
      t2 === A$1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
    }
  }
  class H extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t2) {
      this.element[this.name] = t2 === A$1 ? void 0 : t2;
    }
  }
  const I = s$1 ? s$1.emptyScript : "";
  let L$1 = class L extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t2) {
      t2 && t2 !== A$1 ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  class z extends k {
    constructor(t2, i2, s2, e2, o2) {
      super(t2, i2, s2, e2, o2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
      var s2;
      if ((t2 = null !== (s2 = S$1(this, t2, i2, 0)) && void 0 !== s2 ? s2 : A$1) === T$1)
        return;
      const e2 = this._$AH, o2 = t2 === A$1 && e2 !== A$1 || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A$1 && (e2 === A$1 || o2);
      o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      var i2, s2;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s2 = null === (i2 = this.options) || void 0 === i2 ? void 0 : i2.host) && void 0 !== s2 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  let Z$1 = class Z {
    constructor(t2, i2, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      S$1(this, t2);
    }
  };
  const B$1 = i$2.litHtmlPolyfillSupport;
  null == B$1 || B$1(N, R), (null !== (t$2 = i$2.litHtmlVersions) && void 0 !== t$2 ? t$2 : i$2.litHtmlVersions = []).push("2.8.0");
  const D$1 = (t2, i2, s2) => {
    var e2, o2;
    const n2 = null !== (e2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e2 ? e2 : i2;
    let l2 = n2._$litPart$;
    if (void 0 === l2) {
      const t3 = null !== (o2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o2 ? o2 : null;
      n2._$litPart$ = l2 = new R(i2.insertBefore(u(), t3), t3, void 0, null != s2 ? s2 : {});
    }
    return l2._$AI(t2), l2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var l$1, o$1;
  class s extends u$1 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t2, e2;
      const i2 = super.createRenderRoot();
      return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i2.firstChild), i2;
    }
    update(t2) {
      const i2 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D$1(i2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t2;
      super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
    }
    disconnectedCallback() {
      var t2;
      super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
    }
    render() {
      return T$1;
    }
  }
  s.finalized = true, s._$litElement$ = true, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, { LitElement: s });
  const n$2 = globalThis.litElementPolyfillSupport;
  null == n$2 || n$2({ LitElement: s });
  (null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.3.3");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$2 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
    const { kind: t2, elements: s2 } = n3;
    return { kind: t2, elements: s2, finisher(n4) {
      customElements.define(e3, n4);
    } };
  })(e2, n2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$1 = (i2, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
    n2.createProperty(e2.key, i2);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
    "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
  }, finisher(n2) {
    n2.createProperty(e2.key, i2);
  } }, e$1 = (i2, e2, n2) => {
    e2.constructor.createProperty(n2, i2);
  };
  function n$1(n2) {
    return (t2, o2) => void 0 !== o2 ? e$1(n2, t2, o2) : i$1(n2, t2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function t$1(t2) {
    return n$1({ ...t2, state: true });
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var n;
  null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
  class i {
    constructor(t2) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t2, e2, i2) {
      this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
    }
    _$AS(t2, e2) {
      return this.update(t2, e2);
    }
    update(t2, e2) {
      return this.render(...e2);
    }
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = e(class extends i {
    constructor(t$12) {
      var i2;
      if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || (null === (i2 = t$12.strings) || void 0 === i2 ? void 0 : i2.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
      return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
    }
    update(i2, [s2]) {
      var r2, o2;
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== i2.strings && (this.nt = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
        for (const t2 in s2)
          s2[t2] && !(null === (r2 = this.nt) || void 0 === r2 ? void 0 : r2.has(t2)) && this.it.add(t2);
        return this.render(s2);
      }
      const e2 = i2.element.classList;
      this.it.forEach((t2) => {
        t2 in s2 || (e2.remove(t2), this.it.delete(t2));
      });
      for (const t2 in s2) {
        const i3 = !!s2[t2];
        i3 === this.it.has(t2) || (null === (o2 = this.nt) || void 0 === o2 ? void 0 : o2.has(t2)) || (i3 ? (e2.add(t2), this.it.add(t2)) : (e2.remove(t2), this.it.delete(t2)));
      }
      return T$1;
    }
  });
  function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
  }
  const clamp = (min, max, v2) => Math.min(Math.max(v2, min), max);
  const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
  };
  const isNumber = (value) => typeof value === "number";
  const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);
  const wrap = (min, max, v2) => {
    const rangeSize = max - min;
    return ((v2 - min) % rangeSize + rangeSize) % rangeSize + min;
  };
  function getEasingForSegment(easing, i2) {
    return isEasingList(easing) ? easing[wrap(0, easing.length, i2)] : easing;
  }
  const mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;
  const noop = () => {
  };
  const noopReturn = (v2) => v2;
  const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i2 = 1; i2 <= remaining; i2++) {
      const offsetProgress = progress(0, remaining, i2);
      offset.push(mix(min, 1, offsetProgress));
    }
  }
  function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
  }
  function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
    const length = output.length;
    const remainder = length - input.length;
    remainder > 0 && fillOffset(input, remainder);
    return (t2) => {
      let i2 = 0;
      for (; i2 < length - 2; i2++) {
        if (t2 < input[i2 + 1])
          break;
      }
      let progressInRange = clamp(0, 1, progress(input[i2], input[i2 + 1], t2));
      const segmentEasing = getEasingForSegment(easing, i2);
      progressInRange = segmentEasing(progressInRange);
      return mix(output[i2], output[i2 + 1], progressInRange);
    };
  }
  const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);
  const isEasingGenerator = (easing) => typeof easing === "object" && Boolean(easing.createAnimation);
  const isFunction = (value) => typeof value === "function";
  const isString = (value) => typeof value === "string";
  const time = {
    ms: (seconds) => seconds * 1e3,
    s: (milliseconds) => milliseconds / 1e3
  };
  const calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
  const subdivisionPrecision = 1e-7;
  const subdivisionMaxIterations = 12;
  function binarySubdivide(x2, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i2 = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x2;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noopReturn;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
  }
  const steps = (steps2, direction = "end") => (progress2) => {
    progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
    const expanded = progress2 * steps2;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps2);
  };
  const namedEasings = {
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
    "ease-in": cubicBezier(0.42, 0, 1, 1),
    "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
    "ease-out": cubicBezier(0, 0, 0.58, 1)
  };
  const functionArgsRegex = /\((.*?)\)/;
  function getEasingFunction(definition) {
    if (isFunction(definition))
      return definition;
    if (isCubicBezier(definition))
      return cubicBezier(...definition);
    if (namedEasings[definition])
      return namedEasings[definition];
    if (definition.startsWith("steps")) {
      const args = functionArgsRegex.exec(definition);
      if (args) {
        const argsArray = args[1].split(",");
        return steps(parseFloat(argsArray[0]), argsArray[1].trim());
      }
    }
    return noopReturn;
  }
  class Animation {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay: delay2 = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", autoplay = true } = {}) {
      this.startTime = null;
      this.rate = 1;
      this.t = 0;
      this.cancelTimestamp = null;
      this.easing = noopReturn;
      this.duration = 0;
      this.totalDuration = 0;
      this.repeat = 0;
      this.playState = "idle";
      this.finished = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      easing = easing || defaults.easing;
      if (isEasingGenerator(easing)) {
        const custom2 = easing.createAnimation(keyframes);
        easing = custom2.easing;
        keyframes = custom2.keyframes || keyframes;
        initialDuration = custom2.duration || initialDuration;
      }
      this.repeat = repeat;
      this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
      this.updateDuration(initialDuration);
      const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
      this.tick = (timestamp) => {
        var _a;
        delay2 = delay2;
        let t2 = 0;
        if (this.pauseTime !== void 0) {
          t2 = this.pauseTime;
        } else {
          t2 = (timestamp - this.startTime) * this.rate;
        }
        this.t = t2;
        t2 /= 1e3;
        t2 = Math.max(t2 - delay2, 0);
        if (this.playState === "finished" && this.pauseTime === void 0) {
          t2 = this.totalDuration;
        }
        const progress2 = t2 / this.duration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        const iterationIsOdd = currentIteration % 2;
        if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
          iterationProgress = 1 - iterationProgress;
        }
        const p2 = t2 >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
        const latest = interpolate$1(this.easing(p2));
        output(latest);
        const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t2 >= this.totalDuration + endDelay);
        if (isAnimationFinished) {
          this.playState = "finished";
          (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
        } else if (this.playState !== "idle") {
          this.frameRequestId = requestAnimationFrame(this.tick);
        }
      };
      if (autoplay)
        this.play();
    }
    play() {
      const now = performance.now();
      this.playState = "running";
      if (this.pauseTime !== void 0) {
        this.startTime = now - this.pauseTime;
      } else if (!this.startTime) {
        this.startTime = now;
      }
      this.cancelTimestamp = this.startTime;
      this.pauseTime = void 0;
      this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
      this.playState = "paused";
      this.pauseTime = this.t;
    }
    finish() {
      this.playState = "finished";
      this.tick(0);
    }
    stop() {
      var _a;
      this.playState = "idle";
      if (this.frameRequestId !== void 0) {
        cancelAnimationFrame(this.frameRequestId);
      }
      (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
      this.stop();
      this.tick(this.cancelTimestamp);
    }
    reverse() {
      this.rate *= -1;
    }
    commitStyles() {
    }
    updateDuration(duration) {
      this.duration = duration;
      this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
      return this.t;
    }
    set currentTime(t2) {
      if (this.pauseTime !== void 0 || this.rate === 0) {
        this.pauseTime = t2;
      } else {
        this.startTime = performance.now() - t2 / this.rate;
      }
    }
    get playbackRate() {
      return this.rate;
    }
    set playbackRate(rate) {
      this.rate = rate;
    }
  }
  var invariant = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    invariant = function(check, message) {
      if (!check) {
        throw new Error(message);
      }
    };
  }
  class MotionValue {
    setAnimation(animation) {
      this.animation = animation;
      animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
      });
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  }
  const data = /* @__PURE__ */ new WeakMap();
  function getAnimationData(element) {
    if (!data.has(element)) {
      data.set(element, {
        transforms: [],
        values: /* @__PURE__ */ new Map()
      });
    }
    return data.get(element);
  }
  function getMotionValue(motionValues, name2) {
    if (!motionValues.has(name2)) {
      motionValues.set(name2, new MotionValue());
    }
    return motionValues.get(name2);
  }
  const axes = ["", "X", "Y", "Z"];
  const order = ["translate", "scale", "rotate", "skew"];
  const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
  };
  const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v2) => v2 + "deg"
  };
  const baseTransformProperties = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (v2) => v2 + "px"
    },
    rotate: rotation,
    scale: {
      syntax: "<number>",
      initialValue: 1,
      toDefaultUnit: noopReturn
    },
    skew: rotation
  };
  const transformDefinitions = /* @__PURE__ */ new Map();
  const asTransformCssVar = (name2) => `--motion-${name2}`;
  const transforms = ["x", "y", "z"];
  order.forEach((name2) => {
    axes.forEach((axis) => {
      transforms.push(name2 + axis);
      transformDefinitions.set(asTransformCssVar(name2 + axis), baseTransformProperties[name2]);
    });
  });
  const compareTransformOrder = (a2, b2) => transforms.indexOf(a2) - transforms.indexOf(b2);
  const transformLookup = new Set(transforms);
  const isTransform = (name2) => transformLookup.has(name2);
  const addTransformToElement = (element, name2) => {
    if (transformAlias[name2])
      name2 = transformAlias[name2];
    const { transforms: transforms2 } = getAnimationData(element);
    addUniqueItem(transforms2, name2);
    element.style.transform = buildTransformTemplate(transforms2);
  };
  const buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
  const transformListToString = (template, name2) => `${template} ${name2}(var(${asTransformCssVar(name2)}))`;
  const isCssVar = (name2) => name2.startsWith("--");
  const registeredProperties = /* @__PURE__ */ new Set();
  function registerCssVariable(name2) {
    if (registeredProperties.has(name2))
      return;
    registeredProperties.add(name2);
    try {
      const { syntax, initialValue } = transformDefinitions.has(name2) ? transformDefinitions.get(name2) : {};
      CSS.registerProperty({
        name: name2,
        inherits: false,
        syntax,
        initialValue
      });
    } catch (e2) {
    }
  }
  const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
  const featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        testAnimation({ opacity: [1] });
      } catch (e2) {
        return false;
      }
      return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
    linearEasing: () => {
      try {
        testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (e2) {
        return false;
      }
      return true;
    }
  };
  const results = {};
  const supports = {};
  for (const key in featureTests) {
    supports[key] = () => {
      if (results[key] === void 0)
        results[key] = featureTests[key]();
      return results[key];
    };
  }
  const resolution = 0.015;
  const generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i2 = 0; i2 < numPoints; i2++) {
      points += easing(progress(0, numPoints - 1, i2)) + ", ";
    }
    return points.substring(0, points.length - 2);
  };
  const convertEasing = (easing, duration) => {
    if (isFunction(easing)) {
      return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : defaults.easing;
    } else {
      return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
    }
  };
  const cubicBezierAsString = ([a2, b2, c2, d2]) => `cubic-bezier(${a2}, ${b2}, ${c2}, ${d2})`;
  function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i2 = 0; i2 < keyframes.length; i2++) {
      if (keyframes[i2] === null) {
        keyframes[i2] = i2 ? keyframes[i2 - 1] : readInitialValue();
      }
    }
    return keyframes;
  }
  const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];
  function getStyleName(key) {
    if (transformAlias[key])
      key = transformAlias[key];
    return isTransform(key) ? asTransformCssVar(key) : key;
  }
  const style = {
    get: (element, name2) => {
      name2 = getStyleName(name2);
      let value = isCssVar(name2) ? element.style.getPropertyValue(name2) : getComputedStyle(element)[name2];
      if (!value && value !== 0) {
        const definition = transformDefinitions.get(name2);
        if (definition)
          value = definition.initialValue;
      }
      return value;
    },
    set: (element, name2, value) => {
      name2 = getStyleName(name2);
      if (isCssVar(name2)) {
        element.style.setProperty(name2, value);
      } else {
        element.style[name2] = value;
      }
    }
  };
  function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
      return;
    try {
      if (animation.stop) {
        animation.stop();
      } else {
        needsCommit && animation.commitStyles();
        animation.cancel();
      }
    } catch (e2) {
    }
  }
  function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (isString(finalKeyframe)) {
      const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
      if (unit)
        toUnit = (value) => value + unit;
    }
    return toUnit;
  }
  function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
  }
  function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = defaults.duration, delay: delay2 = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true } = options;
    const data2 = getAnimationData(element);
    const valueIsTransform = isTransform(key);
    let canAnimateNatively = supports.waapi();
    valueIsTransform && addTransformToElement(element, key);
    const name2 = getStyleName(key);
    const motionValue = getMotionValue(data2.values, name2);
    const definition = transformDefinitions.get(name2);
    stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
    return () => {
      const readInitialValue = () => {
        var _a, _b;
        return (_b = (_a = style.get(element, name2)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
      };
      let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
      const toUnit = getUnitConverter(keyframes, definition);
      if (isEasingGenerator(easing)) {
        const custom2 = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name2, motionValue);
        easing = custom2.easing;
        keyframes = custom2.keyframes || keyframes;
        duration = custom2.duration || duration;
      }
      if (isCssVar(name2)) {
        if (supports.cssRegisterProperty()) {
          registerCssVariable(name2);
        } else {
          canAnimateNatively = false;
        }
      }
      if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
        canAnimateNatively = false;
      }
      if (canAnimateNatively) {
        if (definition) {
          keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
        }
        if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
          keyframes.unshift(readInitialValue());
        }
        const animationOptions = {
          delay: time.ms(delay2),
          duration: time.ms(duration),
          endDelay: time.ms(endDelay),
          easing: !isEasingList(easing) ? convertEasing(easing, duration) : void 0,
          direction,
          iterations: repeat + 1,
          fill: "both"
        };
        animation = element.animate({
          [name2]: keyframes,
          offset,
          easing: isEasingList(easing) ? easing.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
        }, animationOptions);
        if (!animation.finished) {
          animation.finished = new Promise((resolve, reject) => {
            animation.onfinish = resolve;
            animation.oncancel = reject;
          });
        }
        const target = keyframes[keyframes.length - 1];
        animation.finished.then(() => {
          if (persist)
            return;
          style.set(element, name2, target);
          animation.cancel();
        }).catch(noop);
        if (!allowWebkitAcceleration)
          animation.playbackRate = 1.000001;
      } else if (AnimationPolyfill && valueIsTransform) {
        keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
        if (keyframes.length === 1) {
          keyframes.unshift(parseFloat(readInitialValue()));
        }
        animation = new AnimationPolyfill((latest) => {
          style.set(element, name2, toUnit ? toUnit(latest) : latest);
        }, keyframes, Object.assign(Object.assign({}, options), {
          duration,
          easing
        }));
      } else {
        const target = keyframes[keyframes.length - 1];
        style.set(element, name2, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
      }
      if (isRecording) {
        record(element, key, keyframes, {
          duration,
          delay: delay2,
          easing,
          repeat,
          offset
        }, "motion-one");
      }
      motionValue.setAnimation(animation);
      if (animation && !autoplay)
        animation.pause();
      return animation;
    };
  }
  const getOptions = (options, key) => (
    /**
     * TODO: Make test for this
     * Always return a new object otherwise delay is overwritten by results of stagger
     * and this results in no stagger
     */
    options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
  );
  function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
      if (selectorCache) {
        (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
        elements = selectorCache[elements];
      } else {
        elements = document.querySelectorAll(elements);
      }
    } else if (elements instanceof Element) {
      elements = [elements];
    }
    return Array.from(elements || []);
  }
  const createAnimation = (factory) => factory();
  const withControls = (animationFactory, options, duration = defaults.duration) => {
    return new Proxy({
      animations: animationFactory.map(createAnimation).filter(Boolean),
      duration,
      options
    }, controls);
  };
  const getActiveAnimation = (state) => state.animations[0];
  const controls = {
    get: (target, key) => {
      const activeAnimation = getActiveAnimation(target);
      switch (key) {
        case "duration":
          return target.duration;
        case "currentTime":
          return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
        case "playbackRate":
        case "playState":
          return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
        case "finished":
          if (!target.finished) {
            target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
          }
          return target.finished;
        case "stop":
          return () => {
            target.animations.forEach((animation) => stopAnimation(animation));
          };
        case "forEachNative":
          return (callback) => {
            target.animations.forEach((animation) => callback(animation, target));
          };
        default:
          return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
      }
    },
    set: (target, key, value) => {
      switch (key) {
        case "currentTime":
          value = time.ms(value);
        case "playbackRate":
          for (let i2 = 0; i2 < target.animations.length; i2++) {
            target.animations[i2][key] = value;
          }
          return true;
      }
      return false;
    }
  };
  const selectFinished = (animation) => animation.finished;
  function resolveOption(option, i2, total) {
    return isFunction(option) ? option(i2, total) : option;
  }
  function createAnimate(AnimatePolyfill) {
    return function animate2(elements, keyframes, options = {}) {
      elements = resolveElements(elements);
      const numElements = elements.length;
      invariant(Boolean(numElements), "No valid element provided.");
      invariant(Boolean(keyframes), "No keyframes defined.");
      const animationFactories = [];
      for (let i2 = 0; i2 < numElements; i2++) {
        const element = elements[i2];
        for (const key in keyframes) {
          const valueOptions = getOptions(options, key);
          valueOptions.delay = resolveOption(valueOptions.delay, i2, numElements);
          const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
          animationFactories.push(animation);
        }
      }
      return withControls(
        animationFactories,
        options,
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration
      );
    };
  }
  const animate$1 = createAnimate(Animation);
  function animateProgress(target, options = {}) {
    return withControls([
      () => {
        const animation = new Animation(target, [0, 1], options);
        animation.finished.catch(() => {
        });
        return animation;
      }
    ], options, options.duration);
  }
  function animate(target, keyframesOrOptions, options) {
    const factory = isFunction(target) ? animateProgress : animate$1;
    return factory(target, keyframesOrOptions, options);
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const l = (l2) => null != l2 ? l2 : A$1;
  var browser = {};
  var canPromise$1 = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
  };
  var qrcode = {};
  var utils$1 = {};
  let toSJISFunction;
  const CODEWORDS_COUNT = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  utils$1.getSymbolSize = function getSymbolSize2(version2) {
    if (!version2)
      throw new Error('"version" cannot be null or undefined');
    if (version2 < 1 || version2 > 40)
      throw new Error('"version" should be in range from 1 to 40');
    return version2 * 4 + 17;
  };
  utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
    return CODEWORDS_COUNT[version2];
  };
  utils$1.getBCHDigit = function(data2) {
    let digit = 0;
    while (data2 !== 0) {
      digit++;
      data2 >>>= 1;
    }
    return digit;
  };
  utils$1.setToSJISFunction = function setToSJISFunction(f2) {
    if (typeof f2 !== "function") {
      throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f2;
  };
  utils$1.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== "undefined";
  };
  utils$1.toSJIS = function toSJIS(kanji2) {
    return toSJISFunction(kanji2);
  };
  var errorCorrectionLevel = {};
  (function(exports3) {
    exports3.L = { bit: 1 };
    exports3.M = { bit: 0 };
    exports3.Q = { bit: 3 };
    exports3.H = { bit: 2 };
    function fromString2(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports3.L;
        case "m":
        case "medium":
          return exports3.M;
        case "q":
        case "quartile":
          return exports3.Q;
        case "h":
        case "high":
          return exports3.H;
        default:
          throw new Error("Unknown EC Level: " + string2);
      }
    }
    exports3.isValid = function isValid2(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports3.from = function from2(value, defaultValue) {
      if (exports3.isValid(value)) {
        return value;
      }
      try {
        return fromString2(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(errorCorrectionLevel);
  function BitBuffer$1() {
    this.buffer = [];
    this.length = 0;
  }
  BitBuffer$1.prototype = {
    get: function(index2) {
      const bufIndex = Math.floor(index2 / 8);
      return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) === 1;
    },
    put: function(num, length) {
      for (let i2 = 0; i2 < length; i2++) {
        this.putBit((num >>> length - i2 - 1 & 1) === 1);
      }
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(bit) {
      const bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  var bitBuffer = BitBuffer$1;
  function BitMatrix$1(size) {
    if (!size || size < 1) {
      throw new Error("BitMatrix size must be defined and greater than 0");
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
  }
  BitMatrix$1.prototype.set = function(row, col, value, reserved) {
    const index2 = row * this.size + col;
    this.data[index2] = value;
    if (reserved)
      this.reservedBit[index2] = true;
  };
  BitMatrix$1.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
  };
  BitMatrix$1.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
  };
  BitMatrix$1.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
  };
  var bitMatrix = BitMatrix$1;
  var alignmentPattern = {};
  (function(exports3) {
    const getSymbolSize2 = utils$1.getSymbolSize;
    exports3.getRowColCoords = function getRowColCoords(version2) {
      if (version2 === 1)
        return [];
      const posCount = Math.floor(version2 / 7) + 2;
      const size = getSymbolSize2(version2);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i2 = 1; i2 < posCount - 1; i2++) {
        positions[i2] = positions[i2 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports3.getPositions = function getPositions(version2) {
      const coords = [];
      const pos = exports3.getRowColCoords(version2);
      const posLength = pos.length;
      for (let i2 = 0; i2 < posLength; i2++) {
        for (let j2 = 0; j2 < posLength; j2++) {
          if (i2 === 0 && j2 === 0 || // top-left
          i2 === 0 && j2 === posLength - 1 || // bottom-left
          i2 === posLength - 1 && j2 === 0) {
            continue;
          }
          coords.push([pos[i2], pos[j2]]);
        }
      }
      return coords;
    };
  })(alignmentPattern);
  var finderPattern = {};
  const getSymbolSize = utils$1.getSymbolSize;
  const FINDER_PATTERN_SIZE = 7;
  finderPattern.getPositions = function getPositions(version2) {
    const size = getSymbolSize(version2);
    return [
      // top-left
      [0, 0],
      // top-right
      [size - FINDER_PATTERN_SIZE, 0],
      // bottom-left
      [0, size - FINDER_PATTERN_SIZE]
    ];
  };
  var maskPattern = {};
  (function(exports3) {
    exports3.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports3.isValid = function isValid2(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports3.from = function from2(value) {
      return exports3.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports3.getPenaltyN1 = function getPenaltyN1(data2) {
      const size = data2.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module3 = data2.get(row, col);
          if (module3 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5)
              points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module3;
            sameCountCol = 1;
          }
          module3 = data2.get(col, row);
          if (module3 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5)
              points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module3;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5)
          points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5)
          points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports3.getPenaltyN2 = function getPenaltyN2(data2) {
      const size = data2.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data2.get(row, col) + data2.get(row, col + 1) + data2.get(row + 1, col) + data2.get(row + 1, col + 1);
          if (last === 4 || last === 0)
            points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports3.getPenaltyN3 = function getPenaltyN3(data2) {
      const size = data2.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data2.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
            points++;
          bitsRow = bitsRow << 1 & 2047 | data2.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
            points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports3.getPenaltyN4 = function getPenaltyN4(data2) {
      let darkCount = 0;
      const modulesCount = data2.data.length;
      for (let i2 = 0; i2 < modulesCount; i2++)
        darkCount += data2.data[i2];
      const k2 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k2 * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern2, i2, j2) {
      switch (maskPattern2) {
        case exports3.Patterns.PATTERN000:
          return (i2 + j2) % 2 === 0;
        case exports3.Patterns.PATTERN001:
          return i2 % 2 === 0;
        case exports3.Patterns.PATTERN010:
          return j2 % 3 === 0;
        case exports3.Patterns.PATTERN011:
          return (i2 + j2) % 3 === 0;
        case exports3.Patterns.PATTERN100:
          return (Math.floor(i2 / 2) + Math.floor(j2 / 3)) % 2 === 0;
        case exports3.Patterns.PATTERN101:
          return i2 * j2 % 2 + i2 * j2 % 3 === 0;
        case exports3.Patterns.PATTERN110:
          return (i2 * j2 % 2 + i2 * j2 % 3) % 2 === 0;
        case exports3.Patterns.PATTERN111:
          return (i2 * j2 % 3 + (i2 + j2) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern2);
      }
    }
    exports3.applyMask = function applyMask(pattern, data2) {
      const size = data2.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data2.isReserved(row, col))
            continue;
          data2.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports3.getBestMask = function getBestMask(data2, setupFormatFunc) {
      const numPatterns = Object.keys(exports3.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p2 = 0; p2 < numPatterns; p2++) {
        setupFormatFunc(p2);
        exports3.applyMask(p2, data2);
        const penalty = exports3.getPenaltyN1(data2) + exports3.getPenaltyN2(data2) + exports3.getPenaltyN3(data2) + exports3.getPenaltyN4(data2);
        exports3.applyMask(p2, data2);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p2;
        }
      }
      return bestPattern;
    };
  })(maskPattern);
  var errorCorrectionCode = {};
  const ECLevel$1 = errorCorrectionLevel;
  const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ];
  const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel$1.L:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel$1.M:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel$1.Q:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel$1.H:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel$1.L:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel$1.M:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel$1.Q:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel$1.H:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  var polynomial = {};
  var galoisField = {};
  const EXP_TABLE = new Uint8Array(512);
  const LOG_TABLE = new Uint8Array(256);
  (function initTables() {
    let x2 = 1;
    for (let i2 = 0; i2 < 255; i2++) {
      EXP_TABLE[i2] = x2;
      LOG_TABLE[x2] = i2;
      x2 <<= 1;
      if (x2 & 256) {
        x2 ^= 285;
      }
    }
    for (let i2 = 255; i2 < 512; i2++) {
      EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
    }
  })();
  galoisField.log = function log(n2) {
    if (n2 < 1)
      throw new Error("log(" + n2 + ")");
    return LOG_TABLE[n2];
  };
  galoisField.exp = function exp(n2) {
    return EXP_TABLE[n2];
  };
  galoisField.mul = function mul(x2, y2) {
    if (x2 === 0 || y2 === 0)
      return 0;
    return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
  };
  (function(exports3) {
    const GF = galoisField;
    exports3.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i2 = 0; i2 < p1.length; i2++) {
        for (let j2 = 0; j2 < p2.length; j2++) {
          coeff[i2 + j2] ^= GF.mul(p1[i2], p2[j2]);
        }
      }
      return coeff;
    };
    exports3.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i2 = 0; i2 < divisor.length; i2++) {
          result[i2] ^= GF.mul(divisor[i2], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0)
          offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports3.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i2 = 0; i2 < degree; i2++) {
        poly = exports3.mul(poly, new Uint8Array([1, GF.exp(i2)]));
      }
      return poly;
    };
  })(polynomial);
  const Polynomial = polynomial;
  function ReedSolomonEncoder$1(degree) {
    this.genPoly = void 0;
    this.degree = degree;
    if (this.degree)
      this.initialize(this.degree);
  }
  ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
  };
  ReedSolomonEncoder$1.prototype.encode = function encode2(data2) {
    if (!this.genPoly) {
      throw new Error("Encoder not initialized");
    }
    const paddedData = new Uint8Array(data2.length + this.degree);
    paddedData.set(data2);
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    const start = this.degree - remainder.length;
    if (start > 0) {
      const buff = new Uint8Array(this.degree);
      buff.set(remainder, start);
      return buff;
    }
    return remainder;
  };
  var reedSolomonEncoder = ReedSolomonEncoder$1;
  var version = {};
  var mode = {};
  var versionCheck = {};
  versionCheck.isValid = function isValid2(version2) {
    return !isNaN(version2) && version2 >= 1 && version2 <= 40;
  };
  var regex = {};
  const numeric = "[0-9]+";
  const alphanumeric = "[A-Z $%*+\\-./:]+";
  let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  kanji = kanji.replace(/u/g, "\\u");
  const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
  regex.KANJI = new RegExp(kanji, "g");
  regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  regex.BYTE = new RegExp(byte, "g");
  regex.NUMERIC = new RegExp(numeric, "g");
  regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
  const TEST_KANJI = new RegExp("^" + kanji + "$");
  const TEST_NUMERIC = new RegExp("^" + numeric + "$");
  const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  regex.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
  };
  regex.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
  };
  regex.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
  };
  (function(exports3) {
    const VersionCheck = versionCheck;
    const Regex = regex;
    exports3.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports3.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports3.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports3.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports3.MIXED = {
      bit: -1
    };
    exports3.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
      if (!mode2.ccBits)
        throw new Error("Invalid mode: " + mode2);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10)
        return mode2.ccBits[0];
      else if (version2 < 27)
        return mode2.ccBits[1];
      return mode2.ccBits[2];
    };
    exports3.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr))
        return exports3.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr))
        return exports3.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr))
        return exports3.KANJI;
      else
        return exports3.BYTE;
    };
    exports3.toString = function toString2(mode2) {
      if (mode2 && mode2.id)
        return mode2.id;
      throw new Error("Invalid mode");
    };
    exports3.isValid = function isValid2(mode2) {
      return mode2 && mode2.bit && mode2.ccBits;
    };
    function fromString2(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports3.NUMERIC;
        case "alphanumeric":
          return exports3.ALPHANUMERIC;
        case "kanji":
          return exports3.KANJI;
        case "byte":
          return exports3.BYTE;
        default:
          throw new Error("Unknown mode: " + string2);
      }
    }
    exports3.from = function from2(value, defaultValue) {
      if (exports3.isValid(value)) {
        return value;
      }
      try {
        return fromString2(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(mode);
  (function(exports3) {
    const Utils2 = utils$1;
    const ECCode2 = errorCorrectionCode;
    const ECLevel2 = errorCorrectionLevel;
    const Mode2 = mode;
    const VersionCheck = versionCheck;
    const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    const G18_BCH = Utils2.getBCHDigit(G18);
    function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports3.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode2, version2) {
      return Mode2.getCharCountIndicator(mode2, version2) + 4;
    }
    function getTotalBitsFromDataArray(segments2, version2) {
      let totalBits = 0;
      segments2.forEach(function(data2) {
        const reservedBits = getReservedBitsCount(data2.mode, version2);
        totalBits += reservedBits + data2.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments2, currentVersion);
        if (length <= exports3.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports3.from = function from2(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports3.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode2 === "undefined")
        mode2 = Mode2.BYTE;
      const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode2 === Mode2.MIXED)
        return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
      switch (mode2) {
        case Mode2.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode2.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode2.KANJI:
          return Math.floor(usableBits / 13);
        case Mode2.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports3.getBestVersionForData = function getBestVersionForData(data2, errorCorrectionLevel2) {
      let seg;
      const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
      if (Array.isArray(data2)) {
        if (data2.length > 1) {
          return getBestVersionForMixedData(data2, ecl);
        }
        if (data2.length === 0) {
          return 1;
        }
        seg = data2[0];
      } else {
        seg = data2;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports3.getEncodedBits = function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d2 = version2 << 12;
      while (Utils2.getBCHDigit(d2) - G18_BCH >= 0) {
        d2 ^= G18 << Utils2.getBCHDigit(d2) - G18_BCH;
      }
      return version2 << 12 | d2;
    };
  })(version);
  var formatInfo = {};
  const Utils$3 = utils$1;
  const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
  const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
  const G15_BCH = Utils$3.getBCHDigit(G15);
  formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
    const data2 = errorCorrectionLevel2.bit << 3 | mask;
    let d2 = data2 << 10;
    while (Utils$3.getBCHDigit(d2) - G15_BCH >= 0) {
      d2 ^= G15 << Utils$3.getBCHDigit(d2) - G15_BCH;
    }
    return (data2 << 10 | d2) ^ G15_MASK;
  };
  var segments = {};
  const Mode$4 = mode;
  function NumericData(data2) {
    this.mode = Mode$4.NUMERIC;
    this.data = data2.toString();
  }
  NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
  };
  NumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
  };
  NumericData.prototype.write = function write(bitBuffer2) {
    let i2, group, value;
    for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
      group = this.data.substr(i2, 3);
      value = parseInt(group, 10);
      bitBuffer2.put(value, 10);
    }
    const remainingNum = this.data.length - i2;
    if (remainingNum > 0) {
      group = this.data.substr(i2);
      value = parseInt(group, 10);
      bitBuffer2.put(value, remainingNum * 3 + 1);
    }
  };
  var numericData = NumericData;
  const Mode$3 = mode;
  const ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function AlphanumericData(data2) {
    this.mode = Mode$3.ALPHANUMERIC;
    this.data = data2;
  }
  AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
  };
  AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
  };
  AlphanumericData.prototype.write = function write(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
      let value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
      value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
      bitBuffer2.put(value, 11);
    }
    if (this.data.length % 2) {
      bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
    }
  };
  var alphanumericData = AlphanumericData;
  var encodeUtf8$1 = function encodeUtf82(input) {
    var result = [];
    var size = input.length;
    for (var index2 = 0; index2 < size; index2++) {
      var point = input.charCodeAt(index2);
      if (point >= 55296 && point <= 56319 && size > index2 + 1) {
        var second = input.charCodeAt(index2 + 1);
        if (second >= 56320 && second <= 57343) {
          point = (point - 55296) * 1024 + second - 56320 + 65536;
          index2 += 1;
        }
      }
      if (point < 128) {
        result.push(point);
        continue;
      }
      if (point < 2048) {
        result.push(point >> 6 | 192);
        result.push(point & 63 | 128);
        continue;
      }
      if (point < 55296 || point >= 57344 && point < 65536) {
        result.push(point >> 12 | 224);
        result.push(point >> 6 & 63 | 128);
        result.push(point & 63 | 128);
        continue;
      }
      if (point >= 65536 && point <= 1114111) {
        result.push(point >> 18 | 240);
        result.push(point >> 12 & 63 | 128);
        result.push(point >> 6 & 63 | 128);
        result.push(point & 63 | 128);
        continue;
      }
      result.push(239, 191, 189);
    }
    return new Uint8Array(result).buffer;
  };
  const encodeUtf8 = encodeUtf8$1;
  const Mode$2 = mode;
  function ByteData(data2) {
    this.mode = Mode$2.BYTE;
    if (typeof data2 === "string") {
      data2 = encodeUtf8(data2);
    }
    this.data = new Uint8Array(data2);
  }
  ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
  };
  ByteData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
  };
  ByteData.prototype.write = function(bitBuffer2) {
    for (let i2 = 0, l2 = this.data.length; i2 < l2; i2++) {
      bitBuffer2.put(this.data[i2], 8);
    }
  };
  var byteData = ByteData;
  const Mode$1 = mode;
  const Utils$2 = utils$1;
  function KanjiData(data2) {
    this.mode = Mode$1.KANJI;
    this.data = data2;
  }
  KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
  };
  KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
  };
  KanjiData.prototype.write = function(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 < this.data.length; i2++) {
      let value = Utils$2.toSJIS(this.data[i2]);
      if (value >= 33088 && value <= 40956) {
        value -= 33088;
      } else if (value >= 57408 && value <= 60351) {
        value -= 49472;
      } else {
        throw new Error(
          "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
        );
      }
      value = (value >>> 8 & 255) * 192 + (value & 255);
      bitBuffer2.put(value, 13);
    }
  };
  var kanjiData = KanjiData;
  var dijkstra = { exports: {} };
  (function(module3) {
    var dijkstra2 = {
      single_source_shortest_paths: function(graph, s2, d2) {
        var predecessors = {};
        var costs = {};
        costs[s2] = 0;
        var open = dijkstra2.PriorityQueue.make();
        open.push(s2, 0);
        var closest, u2, v2, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u2 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u2] || {};
          for (v2 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v2)) {
              cost_of_e = adjacent_nodes[v2];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v2];
              first_visit = typeof costs[v2] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v2] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v2, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v2] = u2;
              }
            }
          }
        }
        if (typeof d2 !== "undefined" && typeof costs[d2] === "undefined") {
          var msg = ["Could not find a path from ", s2, " to ", d2, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d2) {
        var nodes = [];
        var u2 = d2;
        while (u2) {
          nodes.push(u2);
          predecessors[u2];
          u2 = predecessors[u2];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s2, d2) {
        var predecessors = dijkstra2.single_source_shortest_paths(graph, s2, d2);
        return dijkstra2.extract_shortest_path_from_predecessor_list(
          predecessors,
          d2
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T2 = dijkstra2.PriorityQueue, t2 = {}, key;
          opts = opts || {};
          for (key in T2) {
            if (T2.hasOwnProperty(key)) {
              t2[key] = T2[key];
            }
          }
          t2.queue = [];
          t2.sorter = opts.sorter || T2.default_sorter;
          return t2;
        },
        default_sorter: function(a2, b2) {
          return a2.cost - b2.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    {
      module3.exports = dijkstra2;
    }
  })(dijkstra);
  var dijkstraExports = dijkstra.exports;
  (function(exports3) {
    const Mode2 = mode;
    const NumericData2 = numericData;
    const AlphanumericData2 = alphanumericData;
    const ByteData2 = byteData;
    const KanjiData2 = kanjiData;
    const Regex = regex;
    const Utils2 = utils$1;
    const dijkstra2 = dijkstraExports;
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex2, mode2, str) {
      const segments2 = [];
      let result;
      while ((result = regex2.exec(str)) !== null) {
        segments2.push({
          data: result[0],
          index: result.index,
          mode: mode2,
          length: result[0].length
        });
      }
      return segments2;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils2.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode2) {
      switch (mode2) {
        case Mode2.NUMERIC:
          return NumericData2.getBitsLength(length);
        case Mode2.ALPHANUMERIC:
          return AlphanumericData2.getBitsLength(length);
        case Mode2.KANJI:
          return KanjiData2.getBitsLength(length);
        case Mode2.BYTE:
          return ByteData2.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i2 = 0; i2 < segs.length; i2++) {
        const seg = segs[i2];
        switch (seg.mode) {
          case Mode2.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode2.BYTE, length: seg.length }
            ]);
            break;
          case Mode2.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.BYTE, length: seg.length }
            ]);
            break;
          case Mode2.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode2.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version2) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i2 = 0; i2 < nodes.length; i2++) {
        const nodeGroup = nodes[i2];
        const currentNodeIds = [];
        for (let j2 = 0; j2 < nodeGroup.length; j2++) {
          const node2 = nodeGroup[j2];
          const key = "" + i2 + j2;
          currentNodeIds.push(key);
          table[key] = { node: node2, lastCount: 0 };
          graph[key] = {};
          for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
            const prevNodeId = prevNodeIds[n2];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node2.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node2.length, node2.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node2.mode);
              table[prevNodeId].lastCount += node2.length;
            } else {
              if (table[prevNodeId])
                table[prevNodeId].lastCount = node2.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node2.length, node2.mode) + 4 + Mode2.getCharCountIndicator(node2.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
        graph[prevNodeIds[n2]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data2, modesHint) {
      let mode2;
      const bestMode = Mode2.getBestModeForData(data2);
      mode2 = Mode2.from(modesHint, bestMode);
      if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
        throw new Error('"' + data2 + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
      }
      if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
        mode2 = Mode2.BYTE;
      }
      switch (mode2) {
        case Mode2.NUMERIC:
          return new NumericData2(data2);
        case Mode2.ALPHANUMERIC:
          return new AlphanumericData2(data2);
        case Mode2.KANJI:
          return new KanjiData2(data2);
        case Mode2.BYTE:
          return new ByteData2(data2);
      }
    }
    exports3.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports3.fromString = function fromString2(data2, version2) {
      const segs = getSegmentsFromString(data2, Utils2.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version2);
      const path = dijkstra2.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i2 = 1; i2 < path.length - 1; i2++) {
        optimizedSegs.push(graph.table[path[i2]].node);
      }
      return exports3.fromArray(mergeSegments(optimizedSegs));
    };
    exports3.rawSplit = function rawSplit(data2) {
      return exports3.fromArray(
        getSegmentsFromString(data2, Utils2.isKanjiModeEnabled())
      );
    };
  })(segments);
  const Utils$1 = utils$1;
  const ECLevel = errorCorrectionLevel;
  const BitBuffer = bitBuffer;
  const BitMatrix = bitMatrix;
  const AlignmentPattern = alignmentPattern;
  const FinderPattern = finderPattern;
  const MaskPattern = maskPattern;
  const ECCode = errorCorrectionCode;
  const ReedSolomonEncoder = reedSolomonEncoder;
  const Version = version;
  const FormatInfo = formatInfo;
  const Mode = mode;
  const Segments = segments;
  function setupFinderPattern(matrix, version2) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -1; r2 <= 7; r2++) {
        if (row + r2 <= -1 || size <= row + r2)
          continue;
        for (let c2 = -1; c2 <= 7; c2++) {
          if (col + c2 <= -1 || size <= col + c2)
            continue;
          if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupTimingPattern(matrix) {
    const size = matrix.size;
    for (let r2 = 8; r2 < size - 8; r2++) {
      const value = r2 % 2 === 0;
      matrix.set(r2, 6, value, true);
      matrix.set(6, r2, value, true);
    }
  }
  function setupAlignmentPattern(matrix, version2) {
    const pos = AlignmentPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -2; r2 <= 2; r2++) {
        for (let c2 = -2; c2 <= 2; c2++) {
          if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupVersionInfo(matrix, version2) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version2);
    let row, col, mod;
    for (let i2 = 0; i2 < 18; i2++) {
      row = Math.floor(i2 / 3);
      col = i2 % 3 + size - 8 - 3;
      mod = (bits >> i2 & 1) === 1;
      matrix.set(row, col, mod, true);
      matrix.set(col, row, mod, true);
    }
  }
  function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
    let i2, mod;
    for (i2 = 0; i2 < 15; i2++) {
      mod = (bits >> i2 & 1) === 1;
      if (i2 < 6) {
        matrix.set(i2, 8, mod, true);
      } else if (i2 < 8) {
        matrix.set(i2 + 1, 8, mod, true);
      } else {
        matrix.set(size - 15 + i2, 8, mod, true);
      }
      if (i2 < 8) {
        matrix.set(8, size - i2 - 1, mod, true);
      } else if (i2 < 9) {
        matrix.set(8, 15 - i2 - 1 + 1, mod, true);
      } else {
        matrix.set(8, 15 - i2 - 1, mod, true);
      }
    }
    matrix.set(size - 8, 8, 1, true);
  }
  function setupData(matrix, data2) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for (let col = size - 1; col > 0; col -= 2) {
      if (col === 6)
        col--;
      while (true) {
        for (let c2 = 0; c2 < 2; c2++) {
          if (!matrix.isReserved(row, col - c2)) {
            let dark = false;
            if (byteIndex < data2.length) {
              dark = (data2[byteIndex] >>> bitIndex & 1) === 1;
            }
            matrix.set(row, col - c2, dark);
            bitIndex--;
            if (bitIndex === -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || size <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
  function createData(version2, errorCorrectionLevel2, segments2) {
    const buffer = new BitBuffer();
    segments2.forEach(function(data2) {
      buffer.put(data2.mode.bit, 4);
      buffer.put(data2.getLength(), Mode.getCharCountIndicator(data2.mode, version2));
      data2.write(buffer);
    });
    const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 !== 0) {
      buffer.putBit(0);
    }
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for (let i2 = 0; i2 < remainingByte; i2++) {
      buffer.put(i2 % 2 ? 17 : 236, 8);
    }
    return createCodewords(buffer, version2, errorCorrectionLevel2);
  }
  function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
    const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    const rs2 = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer2.buffer);
    for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
      const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
      dcData[b2] = buffer.slice(offset, offset + dataSize);
      ecData[b2] = rs2.encode(dcData[b2]);
      offset += dataSize;
      maxDataSize = Math.max(maxDataSize, dataSize);
    }
    const data2 = new Uint8Array(totalCodewords);
    let index2 = 0;
    let i2, r2;
    for (i2 = 0; i2 < maxDataSize; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        if (i2 < dcData[r2].length) {
          data2[index2++] = dcData[r2][i2];
        }
      }
    }
    for (i2 = 0; i2 < ecCount; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        data2[index2++] = ecData[r2][i2];
      }
    }
    return data2;
  }
  function createSymbol(data2, version2, errorCorrectionLevel2, maskPattern2) {
    let segments2;
    if (Array.isArray(data2)) {
      segments2 = Segments.fromArray(data2);
    } else if (typeof data2 === "string") {
      let estimatedVersion = version2;
      if (!estimatedVersion) {
        const rawSegments = Segments.rawSplit(data2);
        estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
      }
      segments2 = Segments.fromString(data2, estimatedVersion || 40);
    } else {
      throw new Error("Invalid data");
    }
    const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
    if (!bestVersion) {
      throw new Error("The amount of data is too big to be stored in a QR Code");
    }
    if (!version2) {
      version2 = bestVersion;
    } else if (version2 < bestVersion) {
      throw new Error(
        "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
      );
    }
    const dataBits = createData(version2, errorCorrectionLevel2, segments2);
    const moduleCount = Utils$1.getSymbolSize(version2);
    const modules = new BitMatrix(moduleCount);
    setupFinderPattern(modules, version2);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version2);
    setupFormatInfo(modules, errorCorrectionLevel2, 0);
    if (version2 >= 7) {
      setupVersionInfo(modules, version2);
    }
    setupData(modules, dataBits);
    if (isNaN(maskPattern2)) {
      maskPattern2 = MaskPattern.getBestMask(
        modules,
        setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
      );
    }
    MaskPattern.applyMask(maskPattern2, modules);
    setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
    return {
      modules,
      version: version2,
      errorCorrectionLevel: errorCorrectionLevel2,
      maskPattern: maskPattern2,
      segments: segments2
    };
  }
  qrcode.create = function create(data2, options) {
    if (typeof data2 === "undefined" || data2 === "") {
      throw new Error("No input text");
    }
    let errorCorrectionLevel2 = ECLevel.M;
    let version2;
    let mask;
    if (typeof options !== "undefined") {
      errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
      version2 = Version.from(options.version);
      mask = MaskPattern.from(options.maskPattern);
      if (options.toSJISFunc) {
        Utils$1.setToSJISFunction(options.toSJISFunc);
      }
    }
    return createSymbol(data2, version2, errorCorrectionLevel2, mask);
  };
  var canvas = {};
  var utils = {};
  (function(exports3) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
          return [c2, c2];
        }));
      }
      if (hexCode.length === 6)
        hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports3.getOptions = function getOptions2(options) {
      if (!options)
        options = {};
      if (!options.color)
        options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports3.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports3.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports3.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports3.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data2 = qr.modules.data;
      const scale = exports3.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i2 = 0; i2 < symbolSize; i2++) {
        for (let j2 = 0; j2 < symbolSize; j2++) {
          let posDst = (i2 * symbolSize + j2) * 4;
          let pxColor = opts.color.light;
          if (i2 >= scaledMargin && j2 >= scaledMargin && i2 < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i2 - scaledMargin) / scale);
            const jSrc = Math.floor((j2 - scaledMargin) / scale);
            pxColor = palette[data2[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  })(utils);
  (function(exports3) {
    const Utils2 = utils;
    function clearCanvas(ctx, canvas2, size) {
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      if (!canvas2.style)
        canvas2.style = {};
      canvas2.height = size;
      canvas2.width = size;
      canvas2.style.height = size + "px";
      canvas2.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e2) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports3.render = function render(qrData, canvas2, options) {
      let opts = options;
      let canvasEl = canvas2;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!canvas2) {
        canvasEl = getCanvasElement();
      }
      opts = Utils2.getOptions(opts);
      const size = Utils2.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils2.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports3.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!opts)
        opts = {};
      const canvasEl = exports3.render(qrData, canvas2, opts);
      const type2 = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type2, rendererOpts.quality);
    };
  })(canvas);
  var svgTag = {};
  const Utils = utils;
  function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
  }
  function svgCmd(cmd, x2, y2) {
    let str = cmd + x2;
    if (typeof y2 !== "undefined")
      str += " " + y2;
    return str;
  }
  function qrToPath(data2, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for (let i2 = 0; i2 < data2.length; i2++) {
      const col = Math.floor(i2 % size);
      const row = Math.floor(i2 / size);
      if (!col && !newRow)
        newRow = true;
      if (data2[i2]) {
        lineLength++;
        if (!(i2 > 0 && col > 0 && data2[i2 - 1])) {
          path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
          moveBy = 0;
          newRow = false;
        }
        if (!(col + 1 < size && data2[i2 + 1])) {
          path += svgCmd("h", lineLength);
          lineLength = 0;
        }
      } else {
        moveBy++;
      }
    }
    return path;
  }
  svgTag.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data2 = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data2, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") {
      cb(null, svgTag2);
    }
    return svgTag2;
  };
  const canPromise = canPromise$1;
  const QRCode = qrcode;
  const CanvasRenderer = canvas;
  const SvgRenderer = svgTag;
  function renderCanvas(renderFunc, canvas2, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise()) {
      throw new Error("Callback required as last argument");
    }
    if (isLastArgCb) {
      if (argsNum < 2) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 2) {
        cb = text;
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 3) {
        if (canvas2.getContext && typeof cb === "undefined") {
          cb = opts;
          opts = void 0;
        } else {
          cb = opts;
          opts = text;
          text = canvas2;
          canvas2 = void 0;
        }
      }
    } else {
      if (argsNum < 1) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 1) {
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 2 && !canvas2.getContext) {
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
      return new Promise(function(resolve, reject) {
        try {
          const data2 = QRCode.create(text, opts);
          resolve(renderFunc(data2, canvas2, opts));
        } catch (e2) {
          reject(e2);
        }
      });
    }
    try {
      const data2 = QRCode.create(text, opts);
      cb(null, renderFunc(data2, canvas2, opts));
    } catch (e2) {
      cb(e2);
    }
  }
  browser.create = QRCode.create;
  browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
  browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
  browser.toString = renderCanvas.bind(null, function(data2, _2, opts) {
    return SvgRenderer.render(data2, opts);
  });
  var et = Object.defineProperty, Be = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, Ue = (e2, o2, r2) => o2 in e2 ? et(e2, o2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[o2] = r2, ve = (e2, o2) => {
    for (var r2 in o2 || (o2 = {}))
      tt.call(o2, r2) && Ue(e2, r2, o2[r2]);
    if (Be)
      for (var r2 of Be(o2))
        ot.call(o2, r2) && Ue(e2, r2, o2[r2]);
    return e2;
  };
  function rt() {
    var e2;
    const o2 = (e2 = ne$1.state.themeMode) != null ? e2 : "dark", r2 = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)"
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)"
        },
        overlay: "rgba(0,0,0,0.1)"
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)"
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)"
        },
        overlay: "rgba(255,255,255,0.1)"
      }
    }[o2];
    return {
      "--wcm-color-fg-1": r2.foreground[1],
      "--wcm-color-fg-2": r2.foreground[2],
      "--wcm-color-fg-3": r2.foreground[3],
      "--wcm-color-bg-1": r2.background[1],
      "--wcm-color-bg-2": r2.background[2],
      "--wcm-color-bg-3": r2.background[3],
      "--wcm-color-overlay": r2.overlay
    };
  }
  function He() {
    return {
      "--wcm-accent-color": "#3396FF",
      "--wcm-accent-fill-color": "#FFFFFF",
      "--wcm-z-index": "89",
      "--wcm-background-color": "#3396FF",
      "--wcm-background-border-radius": "8px",
      "--wcm-container-border-radius": "30px",
      "--wcm-wallet-icon-border-radius": "15px",
      "--wcm-wallet-icon-large-border-radius": "30px",
      "--wcm-wallet-icon-small-border-radius": "7px",
      "--wcm-input-border-radius": "28px",
      "--wcm-button-border-radius": "10px",
      "--wcm-notification-border-radius": "36px",
      "--wcm-secondary-button-border-radius": "28px",
      "--wcm-icon-button-border-radius": "50%",
      "--wcm-button-hover-highlight-border-radius": "10px",
      "--wcm-text-big-bold-size": "20px",
      "--wcm-text-big-bold-weight": "600",
      "--wcm-text-big-bold-line-height": "24px",
      "--wcm-text-big-bold-letter-spacing": "-0.03em",
      "--wcm-text-big-bold-text-transform": "none",
      "--wcm-text-xsmall-bold-size": "10px",
      "--wcm-text-xsmall-bold-weight": "700",
      "--wcm-text-xsmall-bold-line-height": "12px",
      "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
      "--wcm-text-xsmall-bold-text-transform": "uppercase",
      "--wcm-text-xsmall-regular-size": "12px",
      "--wcm-text-xsmall-regular-weight": "600",
      "--wcm-text-xsmall-regular-line-height": "14px",
      "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
      "--wcm-text-xsmall-regular-text-transform": "none",
      "--wcm-text-small-thin-size": "14px",
      "--wcm-text-small-thin-weight": "500",
      "--wcm-text-small-thin-line-height": "16px",
      "--wcm-text-small-thin-letter-spacing": "-0.03em",
      "--wcm-text-small-thin-text-transform": "none",
      "--wcm-text-small-regular-size": "14px",
      "--wcm-text-small-regular-weight": "600",
      "--wcm-text-small-regular-line-height": "16px",
      "--wcm-text-small-regular-letter-spacing": "-0.03em",
      "--wcm-text-small-regular-text-transform": "none",
      "--wcm-text-medium-regular-size": "16px",
      "--wcm-text-medium-regular-weight": "600",
      "--wcm-text-medium-regular-line-height": "20px",
      "--wcm-text-medium-regular-letter-spacing": "-0.03em",
      "--wcm-text-medium-regular-text-transform": "none",
      "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
      "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
      "--wcm-success-color": "rgb(38,181,98)",
      "--wcm-error-color": "rgb(242, 90, 103)",
      "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
      "--wcm-overlay-backdrop-filter": "none"
    };
  }
  const h = {
    getPreset(e2) {
      return He()[e2];
    },
    setTheme() {
      const e2 = document.querySelector(":root"), { themeVariables: o2 } = ne$1.state;
      if (e2) {
        const r2 = ve(ve(ve({}, rt()), He()), o2);
        Object.entries(r2).forEach(([a2, t2]) => e2.style.setProperty(a2, t2));
      }
    },
    globalCss: i$3`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
  }, at = i$3`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
  var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, F = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? it(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && lt(o2, r2, t2), t2;
  };
  let T = class extends s {
    constructor() {
      super(...arguments), this.disabled = false, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
    }
    render() {
      const e2 = {
        "wcm-icon-left": this.iconLeft !== void 0,
        "wcm-icon-right": this.iconRight !== void 0,
        "wcm-ghost": this.variant === "ghost",
        "wcm-outline": this.variant === "outline"
      };
      let o$12 = "inverse";
      return this.variant === "ghost" && (o$12 = "secondary"), this.variant === "outline" && (o$12 = "accent"), x`<button class="${o(e2)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${o$12}"><slot></slot></wcm-text>${this.iconRight}</button>`;
    }
  };
  T.styles = [h.globalCss, at], F([n$1({ type: Boolean })], T.prototype, "disabled", 2), F([n$1()], T.prototype, "iconLeft", 2), F([n$1()], T.prototype, "iconRight", 2), F([n$1()], T.prototype, "onClick", 2), F([n$1()], T.prototype, "variant", 2), T = F([e$2("wcm-button")], T);
  const nt = i$3`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
  var ct = Object.defineProperty, st = Object.getOwnPropertyDescriptor, ue = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? st(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && ct(o2, r2, t2), t2;
  };
  let ee = class extends s {
    constructor() {
      super(...arguments), this.disabled = false, this.variant = "primary";
    }
    render() {
      const e2 = { "wcm-secondary": this.variant === "secondary" };
      return x`<button ?disabled="${this.disabled}" class="${o(e2)}"><slot></slot></button>`;
    }
  };
  ee.styles = [h.globalCss, nt], ue([n$1({ type: Boolean })], ee.prototype, "disabled", 2), ue([n$1()], ee.prototype, "variant", 2), ee = ue([e$2("wcm-button-big")], ee);
  const dt = i$3`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
  var mt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, wt = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? ht(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && mt(o2, r2, t2), t2;
  };
  let be = class extends s {
    render() {
      return x`<div><slot></slot></div>`;
    }
  };
  be.styles = [h.globalCss, dt], be = wt([e$2("wcm-info-footer")], be);
  const v = {
    CROSS_ICON: b`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: b`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: b`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: b`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: b`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: b`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: b`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: b`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: b`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: b`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: b`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: b`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: b`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: b`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: b`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
  }, pt = i$3`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
  var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, ut = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? vt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && gt(o2, r2, t2), t2;
  };
  let fe = class extends s {
    render() {
      return x`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${v.WALLET_CONNECT_LOGO} <button @click="${se$1.close}">${v.CROSS_ICON}</button></div>`;
    }
  };
  fe.styles = [h.globalCss, pt], fe = ut([e$2("wcm-modal-backcard")], fe);
  const bt = i$3`main{padding:20px;padding-top:0;width:100%}`;
  var ft = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, yt = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? xt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && ft(o2, r2, t2), t2;
  };
  let xe = class extends s {
    render() {
      return x`<main><slot></slot></main>`;
    }
  };
  xe.styles = [h.globalCss, bt], xe = yt([e$2("wcm-modal-content")], xe);
  const $t = i$3`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
  var Ct = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ot = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? kt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Ct(o2, r2, t2), t2;
  };
  let ye = class extends s {
    render() {
      return x`<footer><slot></slot></footer>`;
    }
  };
  ye.styles = [h.globalCss, $t], ye = Ot([e$2("wcm-modal-footer")], ye);
  const Wt = i$3`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
  var It = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, te = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Et(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && It(o2, r2, t2), t2;
  };
  let S = class extends s {
    constructor() {
      super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = false;
    }
    backBtnTemplate() {
      return x`<button class="wcm-back-btn" @click="${T$3.goBack}">${v.BACK_ICON}</button>`;
    }
    actionBtnTemplate() {
      return x`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
    }
    render() {
      const e2 = { "wcm-border": this.border }, o$12 = T$3.state.history.length > 1, r2 = this.title ? x`<wcm-text variant="big-bold">${this.title}</wcm-text>` : x`<slot></slot>`;
      return x`<header class="${o(e2)}">${o$12 ? this.backBtnTemplate() : null} ${r2} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
    }
  };
  S.styles = [h.globalCss, Wt], te([n$1()], S.prototype, "title", 2), te([n$1()], S.prototype, "onAction", 2), te([n$1()], S.prototype, "actionIcon", 2), te([n$1({ type: Boolean })], S.prototype, "border", 2), S = te([e$2("wcm-modal-header")], S);
  const c = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    getShadowRootElement(e2, o2) {
      const r2 = e2.renderRoot.querySelector(o2);
      if (!r2)
        throw new Error(`${o2} not found`);
      return r2;
    },
    getWalletIcon({ id: e2, image_id: o2 }) {
      const { walletImages: r2 } = y$4.state;
      return r2 != null && r2[e2] ? r2[e2] : o2 ? te$3.getWalletImageUrl(o2) : "";
    },
    getWalletName(e2, o2 = false) {
      return o2 && e2.length > 8 ? `${e2.substring(0, 8)}..` : e2;
    },
    isMobileAnimation() {
      return window.innerWidth <= c.MOBILE_BREAKPOINT;
    },
    async preloadImage(e2) {
      const o2 = new Promise((r2, a2) => {
        const t2 = new Image();
        t2.onload = r2, t2.onerror = a2, t2.crossOrigin = "anonymous", t2.src = e2;
      });
      return Promise.race([o2, a$5.wait(3e3)]);
    },
    getErrorMessage(e2) {
      return e2 instanceof Error ? e2.message : "Unknown Error";
    },
    debounce(e2, o2 = 500) {
      let r2;
      return (...a2) => {
        function t2() {
          e2(...a2);
        }
        r2 && clearTimeout(r2), r2 = setTimeout(t2, o2);
      };
    },
    handleMobileLinking(e2) {
      const { walletConnectUri: o2 } = p$4.state, { mobile: r2, name: a2 } = e2, t2 = r2 == null ? void 0 : r2.native, l2 = r2 == null ? void 0 : r2.universal;
      c.setRecentWallet(e2);
      function i2(s2) {
        let $2 = "";
        t2 ? $2 = a$5.formatUniversalUrl(t2, s2, a2) : l2 && ($2 = a$5.formatNativeUrl(l2, s2, a2)), a$5.openHref($2, "_self");
      }
      o2 && i2(o2);
    },
    async handleUriCopy() {
      const { walletConnectUri: e2 } = p$4.state;
      if (e2)
        try {
          await navigator.clipboard.writeText(e2), oe$2.openToast("Link copied", "success");
        } catch {
          oe$2.openToast("Failed to copy", "error");
        }
    },
    getCustomImageUrls() {
      const { walletImages: e2 } = y$4.state, o2 = Object.values(e2 ?? {});
      return Object.values(o2);
    },
    truncate(e2, o2 = 8) {
      return e2.length <= o2 ? e2 : `${e2.substring(0, 4)}...${e2.substring(e2.length - 4)}`;
    },
    setRecentWallet(e2) {
      try {
        localStorage.setItem(c.WCM_RECENT_WALLET_DATA, JSON.stringify(e2));
      } catch {
        console.info("Unable to set recent wallet");
      }
    },
    getRecentWallet() {
      try {
        const e2 = localStorage.getItem(c.WCM_RECENT_WALLET_DATA);
        return e2 ? JSON.parse(e2) : void 0;
      } catch {
        console.info("Unable to get recent wallet");
      }
    },
    caseSafeIncludes(e2, o2) {
      return e2.toUpperCase().includes(o2.toUpperCase());
    },
    openWalletExplorerUrl() {
      a$5.openHref(c.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const { desktop: e2, mobile: o2 } = a$5.getWalletRouterData(), r2 = Boolean(e2 == null ? void 0 : e2.native), a2 = Boolean(e2 == null ? void 0 : e2.universal), t2 = Boolean(o2 == null ? void 0 : o2.native) || Boolean(o2 == null ? void 0 : o2.universal);
      return { isDesktop: r2, isMobile: t2, isWeb: a2 };
    },
    goToConnectingView(e2) {
      T$3.setData({ Wallet: e2 });
      const o2 = a$5.isMobile(), {
        isDesktop: r2,
        isWeb: a2,
        isMobile: t2
      } = c.getCachedRouterWalletPlatforms();
      o2 ? t2 ? T$3.push("MobileConnecting") : a2 ? T$3.push("WebConnecting") : T$3.push("InstallWallet") : r2 ? T$3.push("DesktopConnecting") : a2 ? T$3.push("WebConnecting") : t2 ? T$3.push("MobileQrcodeConnecting") : T$3.push("InstallWallet");
    }
  }, Mt = i$3`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
  var Lt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, $e = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Rt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Lt(o2, r2, t2), t2;
  };
  let oe = class extends s {
    constructor() {
      super(), this.view = T$3.state.view, this.prevView = T$3.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = T$3.subscribe((e2) => {
        this.view !== e2.view && this.onChangeRoute();
      });
    }
    firstUpdated() {
      this.resizeObserver = new ResizeObserver(([e2]) => {
        const o2 = `${e2.contentRect.height}px`;
        this.oldHeight !== "0px" && animate(this.routerEl, { height: [this.oldHeight, o2] }, { duration: 0.2 }), this.oldHeight = o2;
      }), this.resizeObserver.observe(this.contentEl);
    }
    disconnectedCallback() {
      var e2, o2;
      (e2 = this.unsubscribe) == null || e2.call(this), (o2 = this.resizeObserver) == null || o2.disconnect();
    }
    get routerEl() {
      return c.getShadowRootElement(this, ".wcm-router");
    }
    get contentEl() {
      return c.getShadowRootElement(this, ".wcm-content");
    }
    viewTemplate() {
      switch (this.view) {
        case "ConnectWallet":
          return x`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
        case "DesktopConnecting":
          return x`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
        case "MobileConnecting":
          return x`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
        case "WebConnecting":
          return x`<wcm-web-connecting-view></wcm-web-connecting-view>`;
        case "MobileQrcodeConnecting":
          return x`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
        case "WalletExplorer":
          return x`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
        case "Qrcode":
          return x`<wcm-qrcode-view></wcm-qrcode-view>`;
        case "InstallWallet":
          return x`<wcm-install-wallet-view></wcm-install-wallet-view>`;
        default:
          return x`<div>Not Found</div>`;
      }
    }
    async onChangeRoute() {
      await animate(
        this.routerEl,
        { opacity: [1, 0], scale: [1, 1.02] },
        { duration: 0.15, delay: 0.1 }
      ).finished, this.view = T$3.state.view, animate(
        this.routerEl,
        { opacity: [0, 1], scale: [0.99, 1] },
        { duration: 0.37, delay: 0.05 }
      );
    }
    render() {
      return x`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
    }
  };
  oe.styles = [h.globalCss, Mt], $e([t$1()], oe.prototype, "view", 2), $e([t$1()], oe.prototype, "prevView", 2), oe = $e([e$2("wcm-modal-router")], oe);
  const At = i$3`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
  var Pt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, ze = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Tt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Pt(o2, r2, t2), t2;
  };
  let ne = class extends s {
    constructor() {
      super(), this.open = false, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = oe$2.subscribe((e2) => {
        e2.open ? (this.open = true, this.timeout = setTimeout(() => oe$2.closeToast(), 2200)) : (this.open = false, clearTimeout(this.timeout));
      });
    }
    disconnectedCallback() {
      var e2;
      (e2 = this.unsubscribe) == null || e2.call(this), clearTimeout(this.timeout), oe$2.closeToast();
    }
    render() {
      const { message: e2, variant: o$12 } = oe$2.state, r2 = { "wcm-success": o$12 === "success", "wcm-error": o$12 === "error" };
      return this.open ? x`<div class="${o(r2)}">${o$12 === "success" ? v.CHECKMARK_ICON : null} ${o$12 === "error" ? v.CROSS_ICON : null}<wcm-text variant="small-regular">${e2}</wcm-text></div>` : null;
    }
  };
  ne.styles = [h.globalCss, At], ze([t$1()], ne.prototype, "open", 2), ne = ze([e$2("wcm-modal-toast")], ne);
  const jt = 0.1, Ve = 2.5, A = 7;
  function Ce(e2, o2, r2) {
    return e2 === o2 ? false : (e2 - o2 < 0 ? o2 - e2 : e2 - o2) <= r2 + jt;
  }
  function _t(e2, o2) {
    const r2 = Array.prototype.slice.call(
      browser.create(e2, { errorCorrectionLevel: o2 }).modules.data,
      0
    ), a2 = Math.sqrt(r2.length);
    return r2.reduce(
      (t2, l2, i2) => (i2 % a2 === 0 ? t2.push([l2]) : t2[t2.length - 1].push(l2)) && t2,
      []
    );
  }
  const Dt = {
    generate(e2, o2, r2) {
      const a2 = "#141414", t2 = "#ffffff", l2 = [], i2 = _t(e2, "Q"), s2 = o2 / i2.length, $2 = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ];
      $2.forEach(({ x: y2, y: u2 }) => {
        const O2 = (i2.length - A) * s2 * y2, b$12 = (i2.length - A) * s2 * u2, E2 = 0.45;
        for (let M2 = 0; M2 < $2.length; M2 += 1) {
          const V2 = s2 * (A - M2 * 2);
          l2.push(
            b`<rect fill="${M2 % 2 === 0 ? a2 : t2}" height="${V2}" rx="${V2 * E2}" ry="${V2 * E2}" width="${V2}" x="${O2 + s2 * M2}" y="${b$12 + s2 * M2}">`
          );
        }
      });
      const f2 = Math.floor((r2 + 25) / s2), Ne2 = i2.length / 2 - f2 / 2, Ze2 = i2.length / 2 + f2 / 2 - 1, Se = [];
      i2.forEach((y2, u2) => {
        y2.forEach((O2, b2) => {
          if (i2[u2][b2] && !(u2 < A && b2 < A || u2 > i2.length - (A + 1) && b2 < A || u2 < A && b2 > i2.length - (A + 1)) && !(u2 > Ne2 && u2 < Ze2 && b2 > Ne2 && b2 < Ze2)) {
            const E2 = u2 * s2 + s2 / 2, M2 = b2 * s2 + s2 / 2;
            Se.push([E2, M2]);
          }
        });
      });
      const J2 = {};
      return Se.forEach(([y2, u2]) => {
        J2[y2] ? J2[y2].push(u2) : J2[y2] = [u2];
      }), Object.entries(J2).map(([y2, u2]) => {
        const O2 = u2.filter((b2) => u2.every((E2) => !Ce(b2, E2, s2)));
        return [Number(y2), O2];
      }).forEach(([y2, u2]) => {
        u2.forEach((O2) => {
          l2.push(
            b`<circle cx="${y2}" cy="${O2}" fill="${a2}" r="${s2 / Ve}">`
          );
        });
      }), Object.entries(J2).filter(([y2, u2]) => u2.length > 1).map(([y2, u2]) => {
        const O2 = u2.filter((b2) => u2.some((E2) => Ce(b2, E2, s2)));
        return [Number(y2), O2];
      }).map(([y2, u2]) => {
        u2.sort((b2, E2) => b2 < E2 ? -1 : 1);
        const O2 = [];
        for (const b2 of u2) {
          const E2 = O2.find((M2) => M2.some((V2) => Ce(b2, V2, s2)));
          E2 ? E2.push(b2) : O2.push([b2]);
        }
        return [y2, O2.map((b2) => [b2[0], b2[b2.length - 1]])];
      }).forEach(([y2, u2]) => {
        u2.forEach(([O2, b$12]) => {
          l2.push(
            b`<line x1="${y2}" x2="${y2}" y1="${O2}" y2="${b$12}" stroke="${a2}" stroke-width="${s2 / (Ve / 2)}" stroke-linecap="round">`
          );
        });
      }), l2;
    }
  }, Nt = i$3`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
  var Zt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, q = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? St(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Zt(o2, r2, t2), t2;
  };
  let j = class extends s {
    constructor() {
      super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
    }
    svgTemplate() {
      const e2 = ne$1.state.themeMode === "light" ? this.size : this.size - 36;
      return b`<svg height="${e2}" width="${e2}">${Dt.generate(this.uri, e2, e2 / 4)}</svg>`;
    }
    render() {
      const e2 = { "wcm-dark": ne$1.state.themeMode === "dark" };
      return x`<div style="${`width: ${this.size}px`}" class="${o(e2)}">${this.walletId || this.imageUrl ? x`<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}" imageUrl="${l(this.imageUrl)}"></wcm-wallet-image>` : v.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
    }
  };
  j.styles = [h.globalCss, Nt], q([n$1()], j.prototype, "uri", 2), q([n$1({ type: Number })], j.prototype, "size", 2), q([n$1()], j.prototype, "imageId", 2), q([n$1()], j.prototype, "walletId", 2), q([n$1()], j.prototype, "imageUrl", 2), j = q([e$2("wcm-qrcode")], j);
  const Bt = i$3`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
  var Ut = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Fe = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Ht(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Ut(o2, r2, t2), t2;
  };
  let ce = class extends s {
    constructor() {
      super(...arguments), this.onChange = () => null;
    }
    render() {
      return x`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${v.SEARCH_ICON}`;
    }
  };
  ce.styles = [h.globalCss, Bt], Fe([n$1()], ce.prototype, "onChange", 2), ce = Fe([e$2("wcm-search-input")], ce);
  const zt = i$3`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
  var Vt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, qt = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Ft(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Vt(o2, r2, t2), t2;
  };
  let ke = class extends s {
    render() {
      return x`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
    }
  };
  ke.styles = [h.globalCss, zt], ke = qt([e$2("wcm-spinner")], ke);
  const Qt = i$3`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
  var Kt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Oe = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Yt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Kt(o2, r2, t2), t2;
  };
  let re = class extends s {
    constructor() {
      super(...arguments), this.variant = "medium-regular", this.color = "primary";
    }
    render() {
      const e2 = {
        "wcm-big-bold": this.variant === "big-bold",
        "wcm-medium-regular": this.variant === "medium-regular",
        "wcm-small-regular": this.variant === "small-regular",
        "wcm-small-thin": this.variant === "small-thin",
        "wcm-xsmall-regular": this.variant === "xsmall-regular",
        "wcm-xsmall-bold": this.variant === "xsmall-bold",
        "wcm-color-primary": this.color === "primary",
        "wcm-color-secondary": this.color === "secondary",
        "wcm-color-tertiary": this.color === "tertiary",
        "wcm-color-inverse": this.color === "inverse",
        "wcm-color-accnt": this.color === "accent",
        "wcm-color-error": this.color === "error"
      };
      return x`<span><slot class="${o(e2)}"></slot></span>`;
    }
  };
  re.styles = [h.globalCss, Qt], Oe([n$1()], re.prototype, "variant", 2), Oe([n$1()], re.prototype, "color", 2), re = Oe([e$2("wcm-text")], re);
  const Gt = i$3`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
  var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, _ = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Jt(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Xt(o2, r2, t2), t2;
  };
  let L = class extends s {
    constructor() {
      super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = false, this.recent = false;
    }
    sublabelTemplate() {
      return this.recent ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
    }
    handleClick() {
      R$5.click({ name: "WALLET_BUTTON", walletId: this.walletId }), this.onClick();
    }
    render() {
      var e2;
      return x`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${l(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e2 = this.label) != null ? e2 : c.getWalletName(this.name, true)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
    }
  };
  L.styles = [h.globalCss, Gt], _([n$1()], L.prototype, "onClick", 2), _([n$1()], L.prototype, "name", 2), _([n$1()], L.prototype, "walletId", 2), _([n$1()], L.prototype, "label", 2), _([n$1()], L.prototype, "imageId", 2), _([n$1({ type: Boolean })], L.prototype, "installed", 2), _([n$1({ type: Boolean })], L.prototype, "recent", 2), L = _([e$2("wcm-wallet-button")], L);
  const eo = i$3`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var to = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, se = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? oo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && to(o2, r2, t2), t2;
  };
  let Q = class extends s {
    constructor() {
      super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
    }
    render() {
      var e2;
      const o2 = (e2 = this.imageUrl) != null && e2.length ? this.imageUrl : c.getWalletIcon({ id: this.walletId, image_id: this.imageId });
      return x`${o2.length ? x`<div><img crossorigin="anonymous" src="${o2}" alt="${this.id}"></div>` : v.WALLET_PLACEHOLDER}`;
    }
  };
  Q.styles = [h.globalCss, eo], se([n$1()], Q.prototype, "walletId", 2), se([n$1()], Q.prototype, "imageId", 2), se([n$1()], Q.prototype, "imageUrl", 2), Q = se([e$2("wcm-wallet-image")], Q);
  var ro = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, qe = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? ao(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && ro(o2, r2, t2), t2;
  };
  let We = class extends s {
    constructor() {
      super(), this.preload = true, this.preloadData();
    }
    async loadImages(e2) {
      try {
        e2 != null && e2.length && await Promise.all(e2.map(async (o2) => c.preloadImage(o2)));
      } catch {
        console.info("Unsuccessful attempt at preloading some images", e2);
      }
    }
    async preloadListings() {
      if (y$4.state.enableExplorer) {
        await te$3.getRecomendedWallets(), p$4.setIsDataLoaded(true);
        const { recomendedWallets: e2 } = te$3.state, o2 = e2.map((r2) => c.getWalletIcon(r2));
        await this.loadImages(o2);
      } else
        p$4.setIsDataLoaded(true);
    }
    async preloadCustomImages() {
      const e2 = c.getCustomImageUrls();
      await this.loadImages(e2);
    }
    async preloadData() {
      try {
        this.preload && (this.preload = false, await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages()
        ]));
      } catch (e2) {
        console.error(e2), oe$2.openToast("Failed preloading", "error");
      }
    }
  };
  qe([t$1()], We.prototype, "preload", 2), We = qe([e$2("wcm-explorer-context")], We);
  var lo = Object.defineProperty, io = Object.getOwnPropertyDescriptor, no = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? io(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && lo(o2, r2, t2), t2;
  };
  let Qe = class extends s {
    constructor() {
      super(), this.unsubscribeTheme = void 0, h.setTheme(), this.unsubscribeTheme = ne$1.subscribe(h.setTheme);
    }
    disconnectedCallback() {
      var e2;
      (e2 = this.unsubscribeTheme) == null || e2.call(this);
    }
  };
  Qe = no([e$2("wcm-theme-context")], Qe);
  const co = i$3`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var so = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, ho = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? mo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && so(o2, r2, t2), t2;
  };
  let Ie = class extends s {
    onConnect(e2) {
      a$5.isAndroid() && window.aleo === void 0 && window.aleo.puzzleWalletClient === void 0 ? c.handleMobileLinking(e2) : c.goToConnectingView(e2);
    }
    onGoToQrcode() {
      T$3.push("Qrcode");
    }
    render() {
      const { recomendedWallets: e2 } = te$3.state, o2 = [...e2, ...e2], r2 = a$5.RECOMMENDED_WALLET_AMOUNT * 2;
      return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
        ...Array(r2)
      ].map((a2, t2) => {
        const l2 = o2[t2 % o2.length];
        return l2 ? x`<wcm-wallet-image walletId="${l2.id}" imageId="${l2.image_id}"></wcm-wallet-image>` : v.WALLET_PLACEHOLDER;
      })}</div><wcm-button-big @click="${() => this.onConnect(e2[0])}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
    }
  };
  Ie.styles = [h.globalCss, co], Ie = ho([e$2("wcm-android-wallet-selection")], Ie);
  const wo = i$3`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
  var po = Object.defineProperty, go = Object.getOwnPropertyDescriptor, K = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? go(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && po(o2, r2, t2), t2;
  };
  let D = class extends s {
    constructor() {
      super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = false, this.isStale = false, this.label = "";
    }
    svgLoaderTemplate() {
      var e2, o2;
      const r2 = (o2 = (e2 = ne$1.state.themeVariables) == null ? void 0 : e2["--wcm-wallet-icon-large-border-radius"]) != null ? o2 : h.getPreset("--wcm-wallet-icon-large-border-radius");
      let a2 = 0;
      r2.includes("%") ? a2 = 88 / 100 * parseInt(r2, 10) : a2 = parseInt(r2, 10), a2 *= 1.17;
      const t2 = 317 - a2 * 1.57, l2 = 425 - a2 * 1.8;
      return x`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${a2}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${t2}" stroke-dashoffset="${l2}"></use></svg>`;
    }
    render() {
      const e2 = { "wcm-error": this.isError, "wcm-stale": this.isStale };
      return x`<div class="${o(e2)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
    }
  };
  D.styles = [h.globalCss, wo], K([n$1()], D.prototype, "walletId", 2), K([n$1()], D.prototype, "imageId", 2), K([n$1({ type: Boolean })], D.prototype, "isError", 2), K([n$1({ type: Boolean })], D.prototype, "isStale", 2), K([n$1()], D.prototype, "label", 2), D = K([e$2("wcm-connector-waiting")], D);
  const G = {
    manualWallets() {
      var e2, o2;
      const { mobileWallets: r2, desktopWallets: a2 } = y$4.state, t2 = (e2 = G.recentWallet()) == null ? void 0 : e2.id, l2 = a$5.isMobile() ? r2 : a2, i2 = l2 == null ? void 0 : l2.filter((s2) => t2 !== s2.id);
      return (o2 = a$5.isMobile() ? i2 == null ? void 0 : i2.map(({ id: s2, name: $2, links: f2 }) => ({
        id: s2,
        name: $2,
        mobile: f2,
        links: f2
      })) : i2 == null ? void 0 : i2.map(({ id: s2, name: $2, links: f2 }) => ({
        id: s2,
        name: $2,
        desktop: f2,
        links: f2
      }))) != null ? o2 : [];
    },
    recentWallet() {
      return c.getRecentWallet();
    },
    recomendedWallets(e2 = false) {
      var o2;
      const r2 = e2 || (o2 = G.recentWallet()) == null ? void 0 : o2.id, { recomendedWallets: a2 } = te$3.state;
      return a2.filter((t2) => r2 !== t2.id);
    }
  }, Z = {
    onConnecting(e2) {
      c.goToConnectingView(e2);
    },
    manualWalletsTemplate() {
      return G.manualWallets().map(
        (e2) => x`<wcm-wallet-button walletId="${e2.id}" name="${e2.name}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`
      );
    },
    recomendedWalletsTemplate(e2 = false) {
      return G.recomendedWallets(e2).map(
        (o2) => x`<wcm-wallet-button name="${o2.name}" walletId="${o2.id}" imageId="${o2.image_id}" .onClick="${() => this.onConnecting(o2)}"></wcm-wallet-button>`
      );
    },
    recentWalletTemplate() {
      const e2 = G.recentWallet();
      if (e2)
        return x`<wcm-wallet-button name="${e2.name}" walletId="${e2.id}" imageId="${l(e2.image_id)}" .recent="${true}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`;
    }
  }, vo = i$3`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
  var uo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, fo = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? bo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && uo(o2, r2, t2), t2;
  };
  let Ee = class extends s {
    render() {
      const { explorerExcludedWalletIds: e2, enableExplorer: o2 } = y$4.state, r2 = e2 !== "ALL" && o2, a2 = Z.manualWalletsTemplate(), t2 = Z.recomendedWalletsTemplate();
      let l2 = [Z.recentWalletTemplate(), ...a2, ...t2];
      l2 = l2.filter(Boolean);
      const i2 = l2.length > 4 || r2;
      let s2 = [];
      i2 ? s2 = l2.slice(0, 3) : s2 = l2;
      const $2 = Boolean(s2.length);
      return x`<wcm-modal-header .border="${true}" title="Connect your wallet" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${v.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${$2 ? x`<wcm-modal-footer><div class="wcm-desktop-title">${v.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
    }
  };
  Ee.styles = [h.globalCss, vo], Ee = fo([e$2("wcm-desktop-wallet-selection")], Ee);
  const xo = i$3`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
  var yo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Co = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? $o(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && yo(o2, r2, t2), t2;
  };
  let Me = class extends s {
    render() {
      const { termsOfServiceUrl: e2, privacyPolicyUrl: o2 } = y$4.state;
      return e2 ?? o2 ? x`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e2 ? x`<a href="${e2}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e2 && o2 ? "and" : null} ${o2 ? x`<a href="${o2}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
    }
  };
  Me.styles = [h.globalCss, xo], Me = Co([e$2("wcm-legal-notice")], Me);
  const ko = i$3`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
  var Oo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, Io = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Wo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Oo(o2, r2, t2), t2;
  };
  let Le = class extends s {
    onQrcode() {
      T$3.push("Qrcode");
    }
    render() {
      const { explorerExcludedWalletIds: e2, enableExplorer: o2 } = y$4.state, r2 = e2 !== "ALL" && o2, a2 = Z.manualWalletsTemplate(), t2 = Z.recomendedWalletsTemplate();
      let l2 = [Z.recentWalletTemplate(), ...a2, ...t2];
      l2 = l2.filter(Boolean);
      const i2 = l2.length > 8 || r2;
      let s2 = [];
      i2 ? s2 = l2.slice(0, 7) : s2 = l2;
      const $2 = Boolean(s2.length);
      return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header>${$2 ? x`<wcm-modal-content><div>${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
    }
  };
  Le.styles = [h.globalCss, ko], Le = Io([e$2("wcm-mobile-wallet-selection")], Le);
  const Eo = i$3`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
  var Mo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Re = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Lo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Mo(o2, r2, t2), t2;
  };
  let ae = class extends s {
    constructor() {
      super(), this.open = false, this.active = false, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = se$1.subscribe((e2) => {
        e2.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      });
    }
    disconnectedCallback() {
      var e2;
      (e2 = this.unsubscribeModal) == null || e2.call(this);
    }
    get overlayEl() {
      return c.getShadowRootElement(this, ".wcm-overlay");
    }
    get containerEl() {
      return c.getShadowRootElement(this, ".wcm-container");
    }
    toggleBodyScroll(e2) {
      if (document.querySelector("body"))
        if (e2) {
          const o2 = document.getElementById("wcm-styles");
          o2 == null ? void 0 : o2.remove();
        } else
          document.head.insertAdjacentHTML(
            "beforeend",
            '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
          );
    }
    onCloseModal(e2) {
      e2.target === e2.currentTarget && se$1.close();
    }
    onOpenModalEvent() {
      this.toggleBodyScroll(false), this.addKeyboardEvents(), this.open = true, setTimeout(async () => {
        const e2 = c.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] }, o2 = 0.1, r2 = 0.2;
        await Promise.all([
          animate(this.overlayEl, { opacity: [0, 1] }, { delay: o2, duration: r2 }).finished,
          animate(this.containerEl, e2, { delay: o2, duration: r2 }).finished
        ]), this.active = true;
      }, 0);
    }
    async onCloseModalEvent() {
      this.toggleBodyScroll(true), this.removeKeyboardEvents();
      const e2 = c.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] }, o2 = 0.2;
      await Promise.all([
        animate(this.overlayEl, { opacity: [1, 0] }, { duration: o2 }).finished,
        animate(this.containerEl, e2, { duration: o2 }).finished
      ]), this.containerEl.removeAttribute("style"), this.active = false, this.open = false;
    }
    addKeyboardEvents() {
      this.abortController = new AbortController(), window.addEventListener(
        "keydown",
        (e2) => {
          var o2;
          e2.key === "Escape" ? se$1.close() : e2.key === "Tab" && ((o2 = e2.target) != null && o2.tagName.includes("wcm-") || this.containerEl.focus());
        },
        this.abortController
      ), this.containerEl.focus();
    }
    removeKeyboardEvents() {
      var e2;
      (e2 = this.abortController) == null || e2.abort(), this.abortController = void 0;
    }
    render() {
      const e2 = { "wcm-overlay": true, "wcm-active": this.active };
      return x`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${o(e2)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? x`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
    }
  };
  ae.styles = [h.globalCss, Eo], Re([t$1()], ae.prototype, "open", 2), Re([t$1()], ae.prototype, "active", 2), ae = Re([e$2("wcm-modal")], ae);
  const Ro = i$3`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
  var Ao = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, le = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Po(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Ao(o2, r2, t2), t2;
  };
  let B = class extends s {
    constructor() {
      super(...arguments), this.isMobile = false, this.isDesktop = false, this.isWeb = false, this.isRetry = false;
    }
    onMobile() {
      a$5.isMobile() ? T$3.replace("MobileConnecting") : T$3.replace("MobileQrcodeConnecting");
    }
    onDesktop() {
      T$3.replace("DesktopConnecting");
    }
    onWeb() {
      T$3.replace("WebConnecting");
    }
    render() {
      return x`<div>${this.isRetry ? x`<slot></slot>` : null} ${this.isMobile ? x`<wcm-button .onClick="${this.onMobile}" .iconLeft="${v.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? x`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${v.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? x`<wcm-button .onClick="${this.onWeb}" .iconLeft="${v.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
    }
  };
  B.styles = [h.globalCss, Ro], le([n$1({ type: Boolean })], B.prototype, "isMobile", 2), le([n$1({ type: Boolean })], B.prototype, "isDesktop", 2), le([n$1({ type: Boolean })], B.prototype, "isWeb", 2), le([n$1({ type: Boolean })], B.prototype, "isRetry", 2), B = le([e$2("wcm-platform-selection")], B);
  const To = i$3`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var jo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Do = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? _o(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && jo(o2, r2, t2), t2;
  };
  let Ae = class extends s {
    onClick() {
      T$3.push("WalletExplorer");
    }
    render() {
      const { recomendedWallets: e2 } = te$3.state, o2 = G.manualWallets(), r2 = [...e2, ...o2].reverse().slice(0, 4);
      return x`<button @click="${this.onClick}"><div class="wcm-icons">${r2.map(
        (a2) => {
          const t2 = c.getWalletIcon(a2);
          if (t2)
            return x`<img crossorigin="anonymous" src="${t2}">`;
          const l2 = c.getWalletIcon({ id: a2.id });
          return l2 ? x`<img crossorigin="anonymous" src="${l2}">` : v.WALLET_PLACEHOLDER;
        }
      )} ${[...Array(4 - r2.length)].map(() => v.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
    }
  };
  Ae.styles = [h.globalCss, To], Ae = Do([e$2("wcm-view-all-wallets-button")], Ae);
  const No = i$3`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
  var Zo = Object.defineProperty, So = Object.getOwnPropertyDescriptor, de = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? So(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Zo(o2, r2, t2), t2;
  };
  let Y = class extends s {
    constructor() {
      super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
        const { walletConnectUri: e2 } = p$4.state;
        this.uri = e2;
      }, 0);
    }
    get overlayEl() {
      return c.getShadowRootElement(this, ".wcm-qr-container");
    }
    render() {
      return x`<div class="wcm-qr-container">${this.uri ? x`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-qrcode>` : x`<wcm-spinner></wcm-spinner>`}</div>`;
    }
  };
  Y.styles = [h.globalCss, No], de([n$1()], Y.prototype, "walletId", 2), de([n$1()], Y.prototype, "imageId", 2), de([t$1()], Y.prototype, "uri", 2), Y = de([e$2("wcm-walletconnect-qr")], Y);
  var Bo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, Ho = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Uo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Bo(o2, r2, t2), t2;
  };
  let Pe = class extends s {
    viewTemplate() {
      return a$5.isAndroid() ? x`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : a$5.isMobile() ? x`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : x`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
    }
    render() {
      return x`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
    }
  };
  Pe.styles = [h.globalCss], Pe = Ho([e$2("wcm-connect-wallet-view")], Pe);
  const zo = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var Vo = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Ke = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Fo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Vo(o2, r2, t2), t2;
  };
  let me = class extends s {
    constructor() {
      super(), this.isError = false, this.openDesktopApp();
    }
    // onFormatAndRedirect(e) {
    //   const { desktop: o, name: r } = m.getWalletRouterData(),
    //     a = o?.native;
    //   if (a) {
    //     const t = m.formatNativeUrl(a, e, r);
    //     m.openHref(t, "_self");
    //   }
    // }
    onFormatAndRedirect(e2) {
      var _a;
      const { desktop: o2, name: r2 } = a$5.getWalletRouterData(), a2 = o2 == null ? void 0 : o2.native;
      if (a2) {
        const t2 = a$5.formatNativeUrl(a2, e2, r2);
        if (r2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
          const url = new URL(t2);
          const params = url.searchParams;
          const wcUri = params.get("uri");
          const requestId = params.get("requestId");
          const sessionTopic = params.get("sessionTopic");
          void window.aleo.connectPuzzle({
            wc: {
              uri: wcUri,
              requestId: requestId ?? void 0,
              sessionTopic: sessionTopic ?? void 0
            }
          });
        } else {
          a$5.openHref(t2, "_self");
        }
      }
    }
    openDesktopApp() {
      const { walletConnectUri: e2 } = p$4.state, o2 = a$5.getWalletRouterData();
      c.setRecentWallet(o2), e2 && this.onFormatAndRedirect(e2);
    }
    render() {
      const { name: e2, id: o2, image_id: r2 } = a$5.getWalletRouterData(), { isMobile: a2, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
      return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r2)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e2} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${a2}" .isWeb="${t2}" .isRetry="${true}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  me.styles = [h.globalCss, zo], Ke([t$1()], me.prototype, "isError", 2), me = Ke([e$2("wcm-desktop-connecting-view")], me);
  const qo = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
  var Qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Yo = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Ko(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Qo(o2, r2, t2), t2;
  };
  let Te = class extends s {
    onInstall(e2) {
      e2 && a$5.openHref(e2, "_blank");
    }
    render() {
      const {
        name: e2,
        id: o2,
        image_id: r2,
        homepage: a2
      } = a$5.getWalletRouterData();
      return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r2)}" label="Not Detected" .isStale="${true}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e2} to continue. If multiple browser extensions are installed, disable non ${e2} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(a2)}" .iconLeft="${v.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
    }
  };
  Te.styles = [h.globalCss, qo], Te = Yo([e$2("wcm-install-wallet-view")], Te);
  const Go = i$3`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
  var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ye = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? Jo(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && Xo(o2, r2, t2), t2;
  };
  let he = class extends s {
    constructor() {
      super(), this.isError = false, this.openMobileApp();
    }
    // onFormatAndRedirect(e, o = !1) {
    //   const { mobile: r, name: a } = m.getWalletRouterData(),
    //     t = r?.native,
    //     l = r?.universal;
    //   if (t && !o) {
    //     const i = m.formatNativeUrl(t, e, a);
    //     m.openHref(i, "_self");
    //   } else if (l) {
    //     const i = m.formatUniversalUrl(l, e, a);
    //     m.openHref(i, "_self");
    //   }
    // }
    onFormatAndRedirect(e2, o2 = false) {
      var _a, _b;
      const { mobile: r2, name: a2 } = a$5.getWalletRouterData(), t2 = r2 == null ? void 0 : r2.native, l2 = r2 == null ? void 0 : r2.universal;
      if (t2 && !o2) {
        const i2 = a$5.formatNativeUrl(t2, e2, a2);
        if (a2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
          const url = new URL(i2);
          const params = url.searchParams;
          const wcUri = params.get("uri");
          const requestId = params.get("requestId");
          const sessionTopic = params.get("sessionTopic");
          void window.aleo.connectPuzzle({
            wc: {
              uri: wcUri,
              requestId: requestId ?? void 0,
              sessionTopic: sessionTopic ?? void 0
            }
          });
        } else {
          a$5.openHref(i2, "_self");
        }
      } else if (l2) {
        const i2 = a$5.formatUniversalUrl(l2, e2, a2);
        if (a2 === "Puzzle Wallet" && window && ((_b = window.aleo) == null ? void 0 : _b.puzzleWalletClient)) {
          const url = new URL(i2);
          const params = url.searchParams;
          const wcUri = params.get("uri");
          const requestId = params.get("requestId");
          const sessionTopic = params.get("sessionTopic");
          void window.aleo.connectPuzzle({
            wc: {
              uri: wcUri,
              requestId: requestId ?? void 0,
              sessionTopic: sessionTopic ?? void 0
            }
          });
        } else {
          a$5.openHref(i2, "_self");
        }
      }
    }
    openMobileApp(e2 = false) {
      const { walletConnectUri: o2 } = p$4.state, r2 = a$5.getWalletRouterData();
      c.setRecentWallet(r2), o2 && this.onFormatAndRedirect(o2, e2);
    }
    onGoToAppStore(e2) {
      e2 && a$5.openHref(e2, "_blank");
    }
    render() {
      const {
        name: e2,
        id: o2,
        image_id: r2,
        app: a2,
        mobile: t2
      } = a$5.getWalletRouterData(), { isWeb: l$12 } = c.getCachedRouterWalletPlatforms(), i2 = a2 == null ? void 0 : a2.ios, s2 = t2 == null ? void 0 : t2.universal;
      return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r2)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l$12}" .isRetry="${true}"><wcm-button .onClick="${() => this.openMobileApp(false)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${s2 ? x`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(true)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${o2}" imageId="${l(r2)}"></wcm-wallet-image><wcm-text>${`Get ${e2}`}</wcm-text></div><wcm-button .iconRight="${v.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(i2)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
    }
  };
  he.styles = [h.globalCss, Go], Ye([t$1()], he.prototype, "isError", 2), he = Ye([e$2("wcm-mobile-connecting-view")], he);
  const er = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var tr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, rr = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? or(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && tr(o2, r2, t2), t2;
  };
  let je = class extends s {
    render() {
      const { name: e2, id: o2, image_id: r2 } = a$5.getWalletRouterData(), { isDesktop: a2, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
      return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${o2}" imageId="${l(r2)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e2} app`}</wcm-text><wcm-platform-selection .isDesktop="${a2}" .isWeb="${t2}"></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  je.styles = [h.globalCss, er], je = rr([e$2("wcm-mobile-qr-connecting-view")], je);
  var ar = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ir = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? lr(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && ar(o2, r2, t2), t2;
  };
  let _e = class extends s {
    render() {
      return x`<wcm-modal-header title="Scan the code" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
    }
  };
  _e.styles = [h.globalCss], _e = ir([e$2("wcm-qrcode-view")], _e);
  const nr = i$3`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
  var cr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ie = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? sr(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && cr(o2, r2, t2), t2;
  };
  const De = 40;
  let U = class extends s {
    constructor() {
      super(...arguments), this.loading = !te$3.state.wallets.listings.length, this.firstFetch = !te$3.state.wallets.listings.length, this.search = "", this.endReached = false, this.intersectionObserver = void 0, this.searchDebounce = c.debounce((e2) => {
        e2.length >= 1 ? (this.firstFetch = true, this.endReached = false, this.search = e2, te$3.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), te$3.resetSearch());
      });
    }
    firstUpdated() {
      this.createPaginationObserver();
    }
    disconnectedCallback() {
      var e2;
      (e2 = this.intersectionObserver) == null || e2.disconnect();
    }
    get placeholderEl() {
      return c.getShadowRootElement(this, ".wcm-placeholder-block");
    }
    createPaginationObserver() {
      this.intersectionObserver = new IntersectionObserver(([e2]) => {
        e2.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
      }), this.intersectionObserver.observe(this.placeholderEl);
    }
    isLastPage() {
      const { wallets: e2, search: o2 } = te$3.state, { listings: r2, total: a2 } = this.search ? o2 : e2;
      return a2 <= De || r2.length >= a2;
    }
    async fetchWallets() {
      var e2;
      const { wallets: o2, search: r2 } = te$3.state, { listings: a2, total: t2, page: l2 } = this.search ? r2 : o2;
      if (!this.endReached && (this.firstFetch || t2 > De && a2.length < t2))
        try {
          this.loading = true;
          const i2 = (e2 = p$4.state.chains) == null ? void 0 : e2.join(","), { listings: s2 } = await te$3.getWallets({
            page: this.firstFetch ? 1 : l2 + 1,
            entries: De,
            search: this.search,
            version: 2,
            chains: i2
          }), $2 = s2.map((f2) => c.getWalletIcon(f2));
          await Promise.all([
            ...$2.map(async (f2) => c.preloadImage(f2)),
            a$5.wait(300)
          ]), this.endReached = this.isLastPage();
        } catch (i2) {
          console.error(i2), oe$2.openToast(c.getErrorMessage(i2), "error");
        } finally {
          this.loading = false, this.firstFetch = false;
        }
    }
    onConnect(e2) {
      a$5.isAndroid() ? c.handleMobileLinking(e2) : c.goToConnectingView(e2);
    }
    onSearchChange(e2) {
      const { value: o2 } = e2.target;
      this.searchDebounce(o2);
    }
    render() {
      const { wallets: e2, search: o$12 } = te$3.state, { listings: r2 } = this.search ? o$12 : e2, a2 = this.loading && !r2.length, t2 = this.search.length >= 3;
      let l2 = Z.manualWalletsTemplate(), i2 = Z.recomendedWalletsTemplate(true);
      t2 && (l2 = l2.filter(({ values: f2 }) => c.caseSafeIncludes(f2[0], this.search)), i2 = i2.filter(({ values: f2 }) => c.caseSafeIncludes(f2[0], this.search)));
      const s2 = !this.loading && !r2.length && !i2.length, $2 = {
        "wcm-loading": a2,
        "wcm-end-reached": this.endReached || !this.loading,
        "wcm-empty": s2
      };
      return x`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${o($2)}"><div class="wcm-grid">${a2 ? null : l2} ${a2 ? null : i2} ${a2 ? null : r2.map((f2) => x`${f2 ? x`<wcm-wallet-button imageId="${f2.image_id}" name="${f2.name}" walletId="${f2.id}" .onClick="${() => this.onConnect(f2)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${s2 ? x`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!s2 && this.loading ? x`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
    }
  };
  U.styles = [h.globalCss, nr], ie([t$1()], U.prototype, "loading", 2), ie([t$1()], U.prototype, "firstFetch", 2), ie([t$1()], U.prototype, "search", 2), ie([t$1()], U.prototype, "endReached", 2), U = ie([e$2("wcm-wallet-explorer-view")], U);
  const dr = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var mr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Ge = (e2, o2, r2, a2) => {
    for (var t2 = a2 > 1 ? void 0 : a2 ? hr(o2, r2) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
      (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r2, t2) : i2(t2)) || t2);
    return a2 && t2 && mr(o2, r2, t2), t2;
  };
  let we = class extends s {
    constructor() {
      super(), this.isError = false, this.openWebWallet();
    }
    // onFormatAndRedirect(e) {
    //   const { desktop: o, name: r } = m.getWalletRouterData(),
    //     a = o?.universal;
    //   if (a) {
    //     const t = m.formatUniversalUrl(a, e, r);
    //     m.openHref(t, "_blank");
    //   }
    // }
    onFormatAndRedirect(e2) {
      var _a;
      const { desktop: o2, name: r2 } = a$5.getWalletRouterData(), a2 = o2 == null ? void 0 : o2.universal;
      if (a2) {
        const t2 = a$5.formatUniversalUrl(a2, e2, r2);
        if (r2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
          const url = new URL(t2);
          const params = url.searchParams;
          const wcUri = params.get("uri");
          const requestId = params.get("requestId");
          const sessionTopic = params.get("sessionTopic");
          void window.aleo.connectPuzzle({
            wc: {
              uri: wcUri,
              requestId: requestId ?? void 0,
              sessionTopic: sessionTopic ?? void 0
            }
          });
        } else {
          a$5.openHref(t2, "_blank");
        }
      }
    }
    openWebWallet() {
      const { walletConnectUri: e2 } = p$4.state, o2 = a$5.getWalletRouterData();
      c.setRecentWallet(o2), e2 && this.onFormatAndRedirect(e2);
    }
    render() {
      const { name: e2, id: o2, image_id: r2 } = a$5.getWalletRouterData(), { isMobile: a2, isDesktop: t2 } = c.getCachedRouterWalletPlatforms(), l$12 = a$5.isMobile();
      return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r2)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e2} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${a2}" .isDesktop="${l$12 ? false : t2}" .isRetry="${true}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  we.styles = [h.globalCss, dr], Ge([t$1()], we.prototype, "isError", 2), we = Ge([e$2("wcm-web-connecting-view")], we);
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get WcmModal() {
      return ae;
    },
    get WcmQrCode() {
      return j;
    }
  }, Symbol.toStringTag, { value: "Module" }));
  exports2.PAGE_SIZE = PAGE_SIZE;
  exports2.aleoAddressRegex = aleoAddressRegex;
  exports2.aleoFieldRegex = aleoFieldRegex;
  exports2.aleoPrivateKeyRegex = aleoPrivateKeyRegex;
  exports2.aleoTransactionIdRegex = aleoTransactionIdRegex;
  exports2.aleoU32 = aleoU32;
  exports2.aleoU64 = aleoU64;
  exports2.aleoViewKeyRegex = aleoViewKeyRegex;
  exports2.chainIdToNetwork = chainIdToNetwork;
  exports2.checkForDesktopConnection = checkForDesktopConnection;
  exports2.configureConnection = configureConnection;
  exports2.connect = connect;
  exports2.createSharedState = createSharedState;
  exports2.decrypt = decrypt;
  exports2.disconnect = disconnect;
  exports2.emitter = emitter;
  exports2.getAccount = getAccount;
  exports2.getBalance = getBalance;
  exports2.getEvent = getEvent;
  exports2.getEvents = getEvents;
  exports2.getRecords = getRecords;
  exports2.getWalletConnectModalSignClient = getWalletConnectModalSignClient;
  exports2.hasInjectedConnection = hasInjectedConnection;
  exports2.importSharedState = importSharedState;
  exports2.log_sdk = log_sdk;
  exports2.networkToChainId = networkToChainId;
  exports2.projectId = projectId;
  exports2.requestCreateEvent = requestCreateEvent;
  exports2.requestSignature = requestSignature;
  exports2.signClient_puzzleProps = signClient_puzzleProps;
  exports2.wc_aleo_chains = wc_aleo_chains;
  exports2.wc_aleo_methods = wc_aleo_methods;
  exports2.wc_events = wc_events;
  exports2.wc_optional_aleo_chains = wc_optional_aleo_chains;
  exports2.wc_required_aleo_chains = wc_required_aleo_chains;
  exports2.web3modal_puzzle_props = web3modal_puzzle_props;
  exports2.web3modal_puzzle_props_android = web3modal_puzzle_props_android;
  exports2.web3modal_puzzle_props_default = web3modal_puzzle_props_default;
  exports2.zodAddress = zodAddress;
  exports2.zodEventStatus = zodEventStatus;
  exports2.zodEventType = zodEventType;
  exports2.zodField = zodField;
  exports2.zodNetwork = zodNetwork;
  exports2.zodPrivateKey = zodPrivateKey;
  exports2.zodTransactionId = zodTransactionId;
  exports2.zodU32 = zodU32;
  exports2.zodU64 = zodU64;
  exports2.zodViewKey = zodViewKey;
  exports2.zodVisibility = zodVisibility;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
