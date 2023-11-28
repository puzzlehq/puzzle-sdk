import li, { useEffect as hr, useState as Xn, useDebugValue as ju } from "react";
const $u = "@puzzlehq/sdk", qu = "Puzzle SDK", zu = "0.1.35", Bu = "Your portal to privacy", ku = "./dist/puzzle.umd.js", Ku = "./dist/puzzle.es.js", Hu = "./dist/types/src/index.d.ts", Vu = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, Wu = "module", Gu = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types",
  "type-check": "tsc --noEmit"
}, Yu = {
  "@tanstack/react-query": "^4.29.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.9.0",
  "@walletconnect/utils": "^2.9.0",
  debug: "^4.3.4",
  eventemitter3: "^5.0.1",
  events: "^3.3.0",
  immer: "^9.0.19",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, Ju = {
  "@puzzlehq/types": "1.0.4",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, Qu = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Xu = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], Zu = "Puzzle", el = "ISC", tl = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, rl = "https://github.com/puzzlehq/puzzle-sdk#readme", nl = {
  patchedDependencies: {
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch"
  }
}, il = {
  name: $u,
  displayName: qu,
  version: zu,
  description: Bu,
  main: ku,
  module: Ku,
  types: Hu,
  exports: Vu,
  type: Wu,
  scripts: Gu,
  dependencies: Yu,
  devDependencies: Ju,
  repository: Qu,
  keywords: Xu,
  author: Zu,
  license: el,
  bugs: tl,
  homepage: rl,
  pnpm: nl
}, sl = Symbol(), fo = Object.getPrototypeOf, as = /* @__PURE__ */ new WeakMap(), ol = (t) => t && (as.has(t) ? as.get(t) : fo(t) === Object.prototype || fo(t) === Array.prototype), al = (t) => ol(t) && t[sl] || null, po = (t, e = !0) => {
  as.set(t, e);
}, $i = (t) => typeof t == "object" && t !== null, Sr = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakSet(), cl = (t = Object.is, e = (h, f) => new Proxy(h, f), r = (h) => $i(h) && !Kn.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (h, f, d = n) => {
  const v = i.get(h);
  if ((v == null ? void 0 : v[0]) === f)
    return v[1];
  const m = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return po(m, !0), i.set(h, [f, m]), Reflect.ownKeys(h).forEach((S) => {
    if (Object.getOwnPropertyDescriptor(m, S))
      return;
    const C = Reflect.get(h, S), D = {
      value: C,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Kn.has(C))
      po(C, !1);
    else if (C instanceof Promise)
      delete D.value, D.get = () => d(C);
    else if (Sr.has(C)) {
      const [z, _] = Sr.get(
        C
      );
      D.value = s(
        z,
        _(),
        d
      );
    }
    Object.defineProperty(m, S, D);
  }), Object.preventExtensions(m);
}, u = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (h) => {
  if (!$i(h))
    throw new Error("object required");
  const f = u.get(h);
  if (f)
    return f;
  let d = a[0];
  const v = /* @__PURE__ */ new Set(), m = (T, F = ++a[0]) => {
    d !== F && (d = F, v.forEach((B) => B(T, F)));
  };
  let S = a[1];
  const C = (T = ++a[1]) => (S !== T && !v.size && (S = T, z.forEach(([F]) => {
    const B = F[1](T);
    B > d && (d = B);
  })), d), D = (T) => (F, B) => {
    const W = [...F];
    W[1] = [T, ...W[1]], m(W, B);
  }, z = /* @__PURE__ */ new Map(), _ = (T, F) => {
    if (v.size) {
      const B = F[3](D(T));
      z.set(T, [F, B]);
    } else
      z.set(T, [F]);
  }, x = (T) => {
    var F;
    const B = z.get(T);
    B && (z.delete(T), (F = B[1]) == null || F.call(B));
  }, w = (T) => (v.add(T), v.size === 1 && z.forEach(([B, W], ne) => {
    const N = B[3](D(ne));
    z.set(ne, [B, N]);
  }), () => {
    v.delete(T), v.size === 0 && z.forEach(([B, W], ne) => {
      W && (W(), z.set(ne, [B]));
    });
  }), b = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = e(b, {
    deleteProperty(T, F) {
      const B = Reflect.get(T, F);
      x(F);
      const W = Reflect.deleteProperty(T, F);
      return W && m(["delete", [F], B]), W;
    },
    set(T, F, B, W) {
      const ne = Reflect.has(T, F), N = Reflect.get(T, F, W);
      if (ne && (t(N, B) || u.has(B) && t(N, u.get(B))))
        return !0;
      x(F), $i(B) && (B = al(B) || B);
      let j = B;
      if (B instanceof Promise)
        B.then((re) => {
          B.status = "fulfilled", B.value = re, m(["resolve", [F], re]);
        }).catch((re) => {
          B.status = "rejected", B.reason = re, m(["reject", [F], re]);
        });
      else {
        !Sr.has(B) && r(B) && (j = l(B));
        const re = !Kn.has(j) && Sr.get(j);
        re && _(F, re);
      }
      return Reflect.set(T, F, j, W), m(["set", [F], B, N]), !0;
    }
  });
  u.set(h, o);
  const g = [
    b,
    C,
    s,
    w
  ];
  return Sr.set(o, g), Reflect.ownKeys(h).forEach((T) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      T
    );
    "value" in F && (o[T] = h[T], delete F.value, delete F.writable), Object.defineProperty(b, T, F);
  }), o;
}) => [
  // public functions
  l,
  // shared state
  Sr,
  Kn,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  u,
  a
], [ul] = cl();
function Or(t = {}) {
  return ul(t);
}
function zr(t, e, r) {
  const n = Sr.get(t);
  let i;
  const s = [], u = n[3];
  let a = !1;
  const h = u((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && e(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, h();
  };
}
function ll(t, e) {
  const r = Sr.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const yt = Or({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), ac = { state: yt, subscribe(t) {
  return zr(yt, () => t(yt));
}, push(t, e) {
  t !== yt.view && (yt.view = t, e && (yt.data = e), yt.history.push(t));
}, reset(t) {
  yt.view = t, yt.history = [t];
}, replace(t) {
  yt.history.length > 1 && (yt.history[yt.history.length - 1] = t, yt.view = t);
}, goBack() {
  if (yt.history.length > 1) {
    yt.history.pop();
    const [t] = yt.history.slice(-1);
    yt.view = t;
  }
}, setData(t) {
  yt.data = t;
} }, Ct = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Ct.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return Ct.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (Ct.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!Ct.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let n = t;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem(Ct.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(Ct.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Ct.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Ct.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = ac.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, hl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Dt = Or({ enabled: hl, userSessionId: "", events: [], connectedWalletId: void 0 }), fl = { state: Dt, subscribe(t) {
  return zr(Dt.events, () => t(ll(Dt.events[Dt.events.length - 1])));
}, initialize() {
  Dt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Dt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Dt.connectedWalletId = t;
}, click(t) {
  if (Dt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Dt.userSessionId, timestamp: Date.now(), data: t };
    Dt.events.push(e);
  }
}, track(t) {
  if (Dt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Dt.userSessionId, timestamp: Date.now(), data: t };
    Dt.events.push(e);
  }
}, view(t) {
  if (Dt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Dt.userSessionId, timestamp: Date.now(), data: t };
    Dt.events.push(e);
  }
} }, sr = Or({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), rr = { state: sr, subscribe(t) {
  return zr(sr, () => t(sr));
}, setChains(t) {
  sr.chains = t;
}, setWalletConnectUri(t) {
  sr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  sr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  sr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  sr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  sr.isUiLoaded = t;
}, setIsAuth(t) {
  sr.isAuth = t;
} }, Hn = Or({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), en = { state: Hn, subscribe(t) {
  return zr(Hn, () => t(Hn));
}, setConfig(t) {
  var e, r;
  fl.initialize(), rr.setChains(t.chains), rr.setIsAuth(!!t.enableAuthMode), rr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), rr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Ct.setModalVersionInStorage(), Object.assign(Hn, t);
} };
var dl = Object.defineProperty, go = Object.getOwnPropertySymbols, pl = Object.prototype.hasOwnProperty, gl = Object.prototype.propertyIsEnumerable, yo = (t, e, r) => e in t ? dl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yl = (t, e) => {
  for (var r in e || (e = {}))
    pl.call(e, r) && yo(t, r, e[r]);
  if (go)
    for (var r of go(e))
      gl.call(e, r) && yo(t, r, e[r]);
  return t;
};
const cs = "https://explorer-api.walletconnect.com", us = "wcm", ls = "js-2.6.2";
async function Vn(t, e) {
  const r = yl({ sdkType: us, sdkVersion: ls }, e), n = new URL(t, cs);
  return n.searchParams.append("projectId", en.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const Tr = { async getDesktopListings(t) {
  return Vn("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Vn("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Vn("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Vn("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${cs}/w3m/v1/getWalletImage/${t}?projectId=${en.state.projectId}&sdkType=${us}&sdkVersion=${ls}`;
}, getAssetImageUrl(t) {
  return `${cs}/w3m/v1/getAssetImage/${t}?projectId=${en.state.projectId}&sdkType=${us}&sdkVersion=${ls}`;
} };
var vl = Object.defineProperty, vo = Object.getOwnPropertySymbols, bl = Object.prototype.hasOwnProperty, ml = Object.prototype.propertyIsEnumerable, bo = (t, e, r) => e in t ? vl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wl = (t, e) => {
  for (var r in e || (e = {}))
    bl.call(e, r) && bo(t, r, e[r]);
  if (vo)
    for (var r of vo(e))
      ml.call(e, r) && bo(t, r, e[r]);
  return t;
};
const mo = Ct.isMobile(), or = Or({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), yb = { state: or, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = en.state;
  if (t === "NONE" || e === "ALL" && !t)
    return or.recomendedWallets;
  if (Ct.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Tr.getAllListings(r), i = Object.values(n);
    i.sort((s, u) => {
      const a = t.indexOf(s.id), l = t.indexOf(u.id);
      return a - l;
    }), or.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = rr.state, i = r == null ? void 0 : r.join(","), s = Ct.isArray(e), u = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Ct.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: a } = mo ? await Tr.getMobileListings(u) : await Tr.getDesktopListings(u);
    or.recomendedWallets = Object.values(a);
  }
  return or.recomendedWallets;
}, async getWallets(t) {
  const e = wl({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = en.state, { recomendedWallets: i } = or;
  if (n === "ALL")
    return or.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : Ct.isArray(r) && (e.excludedIds = r.join(",")), Ct.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), rr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: u } = t, { listings: a, total: l } = mo ? await Tr.getMobileListings(e) : await Tr.getDesktopListings(e), h = Object.values(a), f = u ? "search" : "wallets";
  return or[f] = { listings: [...or[f].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(t) {
  return Tr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Tr.getAssetImageUrl(t);
}, resetSearch() {
  or.search = { listings: [], total: 0, page: 1 };
} }, Gr = Or({ open: !1 }), qi = { state: Gr, subscribe(t) {
  return zr(Gr, () => t(Gr));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = rr.state;
    if (Ct.removeWalletConnectDeepLink(), rr.setWalletConnectUri(t == null ? void 0 : t.uri), rr.setChains(t == null ? void 0 : t.chains), ac.reset("ConnectWallet"), r && n)
      Gr.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = rr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), Gr.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Gr.open = !1;
} };
var _l = Object.defineProperty, wo = Object.getOwnPropertySymbols, El = Object.prototype.hasOwnProperty, Sl = Object.prototype.propertyIsEnumerable, _o = (t, e, r) => e in t ? _l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Dl = (t, e) => {
  for (var r in e || (e = {}))
    El.call(e, r) && _o(t, r, e[r]);
  if (wo)
    for (var r of wo(e))
      Sl.call(e, r) && _o(t, r, e[r]);
  return t;
};
function Il() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const hn = Or({ themeMode: Il() ? "dark" : "light" }), Eo = { state: hn, subscribe(t) {
  return zr(hn, () => t(hn));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (hn.themeMode = e), r && (hn.themeVariables = Dl({}, r));
} }, Pr = Or({ open: !1, message: "", variant: "success" }), vb = { state: Pr, subscribe(t) {
  return zr(Pr, () => t(Pr));
}, openToast(t, e) {
  Pr.open = !0, Pr.message = t, Pr.variant = e;
}, closeToast() {
  Pr.open = !1;
} };
let Ol = class {
  constructor(e) {
    this.openModal = qi.open, this.closeModal = qi.close, this.subscribeModal = qi.subscribe, this.setTheme = Eo.setThemeConfig, Eo.setThemeConfig(e), en.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-6538fe2f.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), rr.setIsUiLoaded(!0);
    }
  }
};
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Rs(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Ts = { exports: {} }, Xr = typeof Reflect == "object" ? Reflect : null, So = Xr && typeof Xr.apply == "function" ? Xr.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Zn;
Xr && typeof Xr.ownKeys == "function" ? Zn = Xr.ownKeys : Object.getOwnPropertySymbols ? Zn = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Zn = function(e) {
  return Object.getOwnPropertyNames(e);
};
function xl(t) {
  console && console.warn && console.warn(t);
}
var cc = Number.isNaN || function(e) {
  return e !== e;
};
function ze() {
  ze.init.call(this);
}
Ts.exports = ze;
Ts.exports.once = Rl;
ze.EventEmitter = ze;
ze.prototype._events = void 0;
ze.prototype._eventsCount = 0;
ze.prototype._maxListeners = void 0;
var Do = 10;
function hi(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(ze, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Do;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || cc(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Do = t;
  }
});
ze.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ze.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || cc(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function uc(t) {
  return t._maxListeners === void 0 ? ze.defaultMaxListeners : t._maxListeners;
}
ze.prototype.getMaxListeners = function() {
  return uc(this);
};
ze.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = e === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw a.context = u, a;
  }
  var l = s[e];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    So(l, this, r);
  else
    for (var h = l.length, f = pc(l, h), n = 0; n < h; ++n)
      So(f[n], this, r);
  return !0;
};
function lc(t, e, r, n) {
  var i, s, u;
  if (hi(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), u = s[e]), u === void 0)
    u = s[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = s[e] = n ? [r, u] : [u, r] : n ? u.unshift(r) : u.push(r), i = uc(t), i > 0 && u.length > i && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = u.length, xl(a);
  }
  return t;
}
ze.prototype.addListener = function(e, r) {
  return lc(this, e, r, !1);
};
ze.prototype.on = ze.prototype.addListener;
ze.prototype.prependListener = function(e, r) {
  return lc(this, e, r, !0);
};
function Cl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function hc(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = Cl.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
ze.prototype.once = function(e, r) {
  return hi(r), this.on(e, hc(this, e, r)), this;
};
ze.prototype.prependOnceListener = function(e, r) {
  return hi(r), this.prependListener(e, hc(this, e, r)), this;
};
ze.prototype.removeListener = function(e, r) {
  var n, i, s, u, a;
  if (hi(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, u = n.length - 1; u >= 0; u--)
      if (n[u] === r || n[u].listener === r) {
        a = n[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Al(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r);
  }
  return this;
};
ze.prototype.off = ze.prototype.removeListener;
ze.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), u;
    for (i = 0; i < s.length; ++i)
      u = s[i], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function fc(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Nl(i) : pc(i, i.length);
}
ze.prototype.listeners = function(e) {
  return fc(this, e, !0);
};
ze.prototype.rawListeners = function(e) {
  return fc(this, e, !1);
};
ze.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : dc.call(t, e);
};
ze.prototype.listenerCount = dc;
function dc(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
ze.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Zn(this._events) : [];
};
function pc(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Al(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Nl(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Rl(t, e) {
  return new Promise(function(r, n) {
    function i(u) {
      t.removeListener(e, s), n(u);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    gc(t, e, s, { once: !0 }), e !== "error" && Tl(t, i, { once: !0 });
  });
}
function Tl(t, e, r) {
  typeof t.on == "function" && gc(t, "error", e, r);
}
function gc(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Jt = Ts.exports;
const Ps = /* @__PURE__ */ Nn(Jt);
var Wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Gn(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var yc = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(t, e) {
  (function(r) {
    t.exports = r();
  })(function() {
    return function r(n, i, s) {
      function u(h, f) {
        if (!i[h]) {
          if (!n[h]) {
            var d = typeof Gn == "function" && Gn;
            if (!f && d)
              return d(h, !0);
            if (a)
              return a(h, !0);
            var v = new Error("Cannot find module '" + h + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var m = i[h] = { exports: {} };
          n[h][0].call(m.exports, function(S) {
            var C = n[h][1][S];
            return u(C || S);
          }, m, m.exports, r, n, i, s);
        }
        return i[h].exports;
      }
      for (var a = typeof Gn == "function" && Gn, l = 0; l < s.length; l++)
        u(s[l]);
      return u;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var u = s.MutationObserver || s.WebKitMutationObserver, a;
        if (u) {
          var l = 0, h = new u(S), f = s.document.createTextNode("");
          h.observe(f, { characterData: !0 }), a = function() {
            f.data = l = ++l % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = S, a = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? a = function() {
            var D = s.document.createElement("script");
            D.onreadystatechange = function() {
              S(), D.onreadystatechange = null, D.parentNode.removeChild(D), D = null;
            }, s.document.documentElement.appendChild(D);
          } : a = function() {
            setTimeout(S, 0);
          };
        var v, m = [];
        function S() {
          v = !0;
          for (var D, z, _ = m.length; _; ) {
            for (z = m, m = [], D = -1; ++D < _; )
              z[D]();
            _ = m.length;
          }
          v = !1;
        }
        n.exports = C;
        function C(D) {
          m.push(D) === 1 && !v && a();
        }
      }).call(this, typeof Wn < "u" ? Wn : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function u() {
      }
      var a = {}, l = ["REJECTED"], h = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, b !== u && C(this, b);
      }
      d.prototype.catch = function(b) {
        return this.then(null, b);
      }, d.prototype.then = function(b, p) {
        if (typeof b != "function" && this.state === h || typeof p != "function" && this.state === l)
          return this;
        var o = new this.constructor(u);
        if (this.state !== f) {
          var g = this.state === h ? b : p;
          m(o, g, this.outcome);
        } else
          this.queue.push(new v(o, b, p));
        return o;
      };
      function v(b, p, o) {
        this.promise = b, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof o == "function" && (this.onRejected = o, this.callRejected = this.otherCallRejected);
      }
      v.prototype.callFulfilled = function(b) {
        a.resolve(this.promise, b);
      }, v.prototype.otherCallFulfilled = function(b) {
        m(this.promise, this.onFulfilled, b);
      }, v.prototype.callRejected = function(b) {
        a.reject(this.promise, b);
      }, v.prototype.otherCallRejected = function(b) {
        m(this.promise, this.onRejected, b);
      };
      function m(b, p, o) {
        s(function() {
          var g;
          try {
            g = p(o);
          } catch (T) {
            return a.reject(b, T);
          }
          g === b ? a.reject(b, new TypeError("Cannot resolve promise with itself")) : a.resolve(b, g);
        });
      }
      a.resolve = function(b, p) {
        var o = D(S, p);
        if (o.status === "error")
          return a.reject(b, o.value);
        var g = o.value;
        if (g)
          C(b, g);
        else {
          b.state = h, b.outcome = p;
          for (var T = -1, F = b.queue.length; ++T < F; )
            b.queue[T].callFulfilled(p);
        }
        return b;
      }, a.reject = function(b, p) {
        b.state = l, b.outcome = p;
        for (var o = -1, g = b.queue.length; ++o < g; )
          b.queue[o].callRejected(p);
        return b;
      };
      function S(b) {
        var p = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof p == "function")
          return function() {
            p.apply(b, arguments);
          };
      }
      function C(b, p) {
        var o = !1;
        function g(W) {
          o || (o = !0, a.reject(b, W));
        }
        function T(W) {
          o || (o = !0, a.resolve(b, W));
        }
        function F() {
          p(T, g);
        }
        var B = D(F);
        B.status === "error" && g(B.value);
      }
      function D(b, p) {
        var o = {};
        try {
          o.value = b(p), o.status = "success";
        } catch (g) {
          o.status = "error", o.value = g;
        }
        return o;
      }
      d.resolve = z;
      function z(b) {
        return b instanceof this ? b : a.resolve(new this(u), b);
      }
      d.reject = _;
      function _(b) {
        var p = new this(u);
        return a.reject(p, b);
      }
      d.all = x;
      function x(b) {
        var p = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var o = b.length, g = !1;
        if (!o)
          return this.resolve([]);
        for (var T = new Array(o), F = 0, B = -1, W = new this(u); ++B < o; )
          ne(b[B], B);
        return W;
        function ne(N, j) {
          p.resolve(N).then(re, function(G) {
            g || (g = !0, a.reject(W, G));
          });
          function re(G) {
            T[j] = G, ++F === o && !g && (g = !0, a.resolve(W, T));
          }
        }
      }
      d.race = w;
      function w(b) {
        var p = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var o = b.length, g = !1;
        if (!o)
          return this.resolve([]);
        for (var T = -1, F = new this(u); ++T < o; )
          B(b[T]);
        return F;
        function B(W) {
          p.resolve(W).then(function(ne) {
            g || (g = !0, a.resolve(F, ne));
          }, function(ne) {
            g || (g = !0, a.reject(F, ne));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Wn < "u" ? Wn : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      };
      function u(y, O) {
        if (!(y instanceof O))
          throw new TypeError("Cannot call a class as a function");
      }
      function a() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var l = a();
      function h() {
        try {
          if (!l || !l.open)
            return !1;
          var y = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), O = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!y || O) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(y, O) {
        y = y || [], O = O || {};
        try {
          return new Blob(y, O);
        } catch (M) {
          if (M.name !== "TypeError")
            throw M;
          for (var I = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, U = new I(), R = 0; R < y.length; R += 1)
            U.append(y[R]);
          return U.getBlob(O.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function v(y, O) {
        O && y.then(function(I) {
          O(null, I);
        }, function(I) {
          O(I);
        });
      }
      function m(y, O, I) {
        typeof O == "function" && y.then(O), typeof I == "function" && y.catch(I);
      }
      function S(y) {
        return typeof y != "string" && (console.warn(y + " used as a key, but it is not a string."), y = String(y)), y;
      }
      function C() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var D = "local-forage-detect-blob-support", z = void 0, _ = {}, x = Object.prototype.toString, w = "readonly", b = "readwrite";
      function p(y) {
        for (var O = y.length, I = new ArrayBuffer(O), U = new Uint8Array(I), R = 0; R < O; R++)
          U[R] = y.charCodeAt(R);
        return I;
      }
      function o(y) {
        return new d(function(O) {
          var I = y.transaction(D, b), U = f([""]);
          I.objectStore(D).put(U, "key"), I.onabort = function(R) {
            R.preventDefault(), R.stopPropagation(), O(!1);
          }, I.oncomplete = function() {
            var R = navigator.userAgent.match(/Chrome\/(\d+)/), M = navigator.userAgent.match(/Edge\//);
            O(M || !R || parseInt(R[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function g(y) {
        return typeof z == "boolean" ? d.resolve(z) : o(y).then(function(O) {
          return z = O, z;
        });
      }
      function T(y) {
        var O = _[y.name], I = {};
        I.promise = new d(function(U, R) {
          I.resolve = U, I.reject = R;
        }), O.deferredOperations.push(I), O.dbReady ? O.dbReady = O.dbReady.then(function() {
          return I.promise;
        }) : O.dbReady = I.promise;
      }
      function F(y) {
        var O = _[y.name], I = O.deferredOperations.pop();
        if (I)
          return I.resolve(), I.promise;
      }
      function B(y, O) {
        var I = _[y.name], U = I.deferredOperations.pop();
        if (U)
          return U.reject(O), U.promise;
      }
      function W(y, O) {
        return new d(function(I, U) {
          if (_[y.name] = _[y.name] || de(), y.db)
            if (O)
              T(y), y.db.close();
            else
              return I(y.db);
          var R = [y.name];
          O && R.push(y.version);
          var M = l.open.apply(l, R);
          O && (M.onupgradeneeded = function(k) {
            var Q = M.result;
            try {
              Q.createObjectStore(y.storeName), k.oldVersion <= 1 && Q.createObjectStore(D);
            } catch (ee) {
              if (ee.name === "ConstraintError")
                console.warn('The database "' + y.name + '" has been upgraded from version ' + k.oldVersion + " to version " + k.newVersion + ', but the storage "' + y.storeName + '" already exists.');
              else
                throw ee;
            }
          }), M.onerror = function(k) {
            k.preventDefault(), U(M.error);
          }, M.onsuccess = function() {
            var k = M.result;
            k.onversionchange = function(Q) {
              Q.target.close();
            }, I(k), F(y);
          };
        });
      }
      function ne(y) {
        return W(y, !1);
      }
      function N(y) {
        return W(y, !0);
      }
      function j(y, O) {
        if (!y.db)
          return !0;
        var I = !y.db.objectStoreNames.contains(y.storeName), U = y.version < y.db.version, R = y.version > y.db.version;
        if (U && (y.version !== O && console.warn('The database "' + y.name + `" can't be downgraded from version ` + y.db.version + " to version " + y.version + "."), y.version = y.db.version), R || I) {
          if (I) {
            var M = y.db.version + 1;
            M > y.version && (y.version = M);
          }
          return !0;
        }
        return !1;
      }
      function re(y) {
        return new d(function(O, I) {
          var U = new FileReader();
          U.onerror = I, U.onloadend = function(R) {
            var M = btoa(R.target.result || "");
            O({ __local_forage_encoded_blob: !0, data: M, type: y.type });
          }, U.readAsBinaryString(y);
        });
      }
      function G(y) {
        var O = p(atob(y.data));
        return f([O], { type: y.type });
      }
      function H(y) {
        return y && y.__local_forage_encoded_blob;
      }
      function Y(y) {
        var O = this, I = O._initReady().then(function() {
          var U = _[O._dbInfo.name];
          if (U && U.dbReady)
            return U.dbReady;
        });
        return m(I, y, y), I;
      }
      function K(y) {
        T(y);
        for (var O = _[y.name], I = O.forages, U = 0; U < I.length; U++) {
          var R = I[U];
          R._dbInfo.db && (R._dbInfo.db.close(), R._dbInfo.db = null);
        }
        return y.db = null, ne(y).then(function(M) {
          return y.db = M, j(y) ? N(y) : M;
        }).then(function(M) {
          y.db = O.db = M;
          for (var k = 0; k < I.length; k++)
            I[k]._dbInfo.db = M;
        }).catch(function(M) {
          throw B(y, M), M;
        });
      }
      function J(y, O, I, U) {
        U === void 0 && (U = 1);
        try {
          var R = y.db.transaction(y.storeName, O);
          I(null, R);
        } catch (M) {
          if (U > 0 && (!y.db || M.name === "InvalidStateError" || M.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!y.db || M.name === "NotFoundError" && !y.db.objectStoreNames.contains(y.storeName) && y.version <= y.db.version)
                return y.db && (y.version = y.db.version + 1), N(y);
            }).then(function() {
              return K(y).then(function() {
                J(y, O, I, U - 1);
              });
            }).catch(I);
          I(M);
        }
      }
      function de() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function te(y) {
        var O = this, I = { db: null };
        if (y)
          for (var U in y)
            I[U] = y[U];
        var R = _[I.name];
        R || (R = de(), _[I.name] = R), R.forages.push(O), O._initReady || (O._initReady = O.ready, O.ready = Y);
        var M = [];
        function k() {
          return d.resolve();
        }
        for (var Q = 0; Q < R.forages.length; Q++) {
          var ee = R.forages[Q];
          ee !== O && M.push(ee._initReady().catch(k));
        }
        var Z = R.forages.slice(0);
        return d.all(M).then(function() {
          return I.db = R.db, ne(I);
        }).then(function(X) {
          return I.db = X, j(I, O._defaultConfig.version) ? N(I) : X;
        }).then(function(X) {
          I.db = R.db = X, O._dbInfo = I;
          for (var le = 0; le < Z.length; le++) {
            var Oe = Z[le];
            Oe !== O && (Oe._dbInfo.db = I.db, Oe._dbInfo.version = I.version);
          }
        });
      }
      function he(y, O) {
        var I = this;
        y = S(y);
        var U = new d(function(R, M) {
          I.ready().then(function() {
            J(I._dbInfo, w, function(k, Q) {
              if (k)
                return M(k);
              try {
                var ee = Q.objectStore(I._dbInfo.storeName), Z = ee.get(y);
                Z.onsuccess = function() {
                  var X = Z.result;
                  X === void 0 && (X = null), H(X) && (X = G(X)), R(X);
                }, Z.onerror = function() {
                  M(Z.error);
                };
              } catch (X) {
                M(X);
              }
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function ae(y, O) {
        var I = this, U = new d(function(R, M) {
          I.ready().then(function() {
            J(I._dbInfo, w, function(k, Q) {
              if (k)
                return M(k);
              try {
                var ee = Q.objectStore(I._dbInfo.storeName), Z = ee.openCursor(), X = 1;
                Z.onsuccess = function() {
                  var le = Z.result;
                  if (le) {
                    var Oe = le.value;
                    H(Oe) && (Oe = G(Oe));
                    var qe = y(Oe, le.key, X++);
                    qe !== void 0 ? R(qe) : le.continue();
                  } else
                    R();
                }, Z.onerror = function() {
                  M(Z.error);
                };
              } catch (le) {
                M(le);
              }
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function fe(y, O, I) {
        var U = this;
        y = S(y);
        var R = new d(function(M, k) {
          var Q;
          U.ready().then(function() {
            return Q = U._dbInfo, x.call(O) === "[object Blob]" ? g(Q.db).then(function(ee) {
              return ee ? O : re(O);
            }) : O;
          }).then(function(ee) {
            J(U._dbInfo, b, function(Z, X) {
              if (Z)
                return k(Z);
              try {
                var le = X.objectStore(U._dbInfo.storeName);
                ee === null && (ee = void 0);
                var Oe = le.put(ee, y);
                X.oncomplete = function() {
                  ee === void 0 && (ee = null), M(ee);
                }, X.onabort = X.onerror = function() {
                  var qe = Oe.error ? Oe.error : Oe.transaction.error;
                  k(qe);
                };
              } catch (qe) {
                k(qe);
              }
            });
          }).catch(k);
        });
        return v(R, I), R;
      }
      function q(y, O) {
        var I = this;
        y = S(y);
        var U = new d(function(R, M) {
          I.ready().then(function() {
            J(I._dbInfo, b, function(k, Q) {
              if (k)
                return M(k);
              try {
                var ee = Q.objectStore(I._dbInfo.storeName), Z = ee.delete(y);
                Q.oncomplete = function() {
                  R();
                }, Q.onerror = function() {
                  M(Z.error);
                }, Q.onabort = function() {
                  var X = Z.error ? Z.error : Z.transaction.error;
                  M(X);
                };
              } catch (X) {
                M(X);
              }
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function $(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            J(O._dbInfo, b, function(M, k) {
              if (M)
                return R(M);
              try {
                var Q = k.objectStore(O._dbInfo.storeName), ee = Q.clear();
                k.oncomplete = function() {
                  U();
                }, k.onabort = k.onerror = function() {
                  var Z = ee.error ? ee.error : ee.transaction.error;
                  R(Z);
                };
              } catch (Z) {
                R(Z);
              }
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function P(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            J(O._dbInfo, w, function(M, k) {
              if (M)
                return R(M);
              try {
                var Q = k.objectStore(O._dbInfo.storeName), ee = Q.count();
                ee.onsuccess = function() {
                  U(ee.result);
                }, ee.onerror = function() {
                  R(ee.error);
                };
              } catch (Z) {
                R(Z);
              }
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function c(y, O) {
        var I = this, U = new d(function(R, M) {
          if (y < 0) {
            R(null);
            return;
          }
          I.ready().then(function() {
            J(I._dbInfo, w, function(k, Q) {
              if (k)
                return M(k);
              try {
                var ee = Q.objectStore(I._dbInfo.storeName), Z = !1, X = ee.openKeyCursor();
                X.onsuccess = function() {
                  var le = X.result;
                  if (!le) {
                    R(null);
                    return;
                  }
                  y === 0 || Z ? R(le.key) : (Z = !0, le.advance(y));
                }, X.onerror = function() {
                  M(X.error);
                };
              } catch (le) {
                M(le);
              }
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function A(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            J(O._dbInfo, w, function(M, k) {
              if (M)
                return R(M);
              try {
                var Q = k.objectStore(O._dbInfo.storeName), ee = Q.openKeyCursor(), Z = [];
                ee.onsuccess = function() {
                  var X = ee.result;
                  if (!X) {
                    U(Z);
                    return;
                  }
                  Z.push(X.key), X.continue();
                }, ee.onerror = function() {
                  R(ee.error);
                };
              } catch (X) {
                R(X);
              }
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function ie(y, O) {
        O = C.apply(this, arguments);
        var I = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || I.name, y.storeName = y.storeName || I.storeName);
        var U = this, R;
        if (!y.name)
          R = d.reject("Invalid arguments");
        else {
          var M = y.name === I.name && U._dbInfo.db, k = M ? d.resolve(U._dbInfo.db) : ne(y).then(function(Q) {
            var ee = _[y.name], Z = ee.forages;
            ee.db = Q;
            for (var X = 0; X < Z.length; X++)
              Z[X]._dbInfo.db = Q;
            return Q;
          });
          y.storeName ? R = k.then(function(Q) {
            if (Q.objectStoreNames.contains(y.storeName)) {
              var ee = Q.version + 1;
              T(y);
              var Z = _[y.name], X = Z.forages;
              Q.close();
              for (var le = 0; le < X.length; le++) {
                var Oe = X[le];
                Oe._dbInfo.db = null, Oe._dbInfo.version = ee;
              }
              var qe = new d(function(je, Ve) {
                var $e = l.open(y.name, ee);
                $e.onerror = function(Mt) {
                  var un = $e.result;
                  un.close(), Ve(Mt);
                }, $e.onupgradeneeded = function() {
                  var Mt = $e.result;
                  Mt.deleteObjectStore(y.storeName);
                }, $e.onsuccess = function() {
                  var Mt = $e.result;
                  Mt.close(), je(Mt);
                };
              });
              return qe.then(function(je) {
                Z.db = je;
                for (var Ve = 0; Ve < X.length; Ve++) {
                  var $e = X[Ve];
                  $e._dbInfo.db = je, F($e._dbInfo);
                }
              }).catch(function(je) {
                throw (B(y, je) || d.resolve()).catch(function() {
                }), je;
              });
            }
          }) : R = k.then(function(Q) {
            T(y);
            var ee = _[y.name], Z = ee.forages;
            Q.close();
            for (var X = 0; X < Z.length; X++) {
              var le = Z[X];
              le._dbInfo.db = null;
            }
            var Oe = new d(function(qe, je) {
              var Ve = l.deleteDatabase(y.name);
              Ve.onerror = function() {
                var $e = Ve.result;
                $e && $e.close(), je(Ve.error);
              }, Ve.onblocked = function() {
                console.warn('dropInstance blocked for database "' + y.name + '" until all open connections are closed');
              }, Ve.onsuccess = function() {
                var $e = Ve.result;
                $e && $e.close(), qe($e);
              };
            });
            return Oe.then(function(qe) {
              ee.db = qe;
              for (var je = 0; je < Z.length; je++) {
                var Ve = Z[je];
                F(Ve._dbInfo);
              }
            }).catch(function(qe) {
              throw (B(y, qe) || d.resolve()).catch(function() {
              }), qe;
            });
          });
        }
        return v(R, O), R;
      }
      var oe = { _driver: "asyncStorage", _initStorage: te, _support: h(), iterate: ae, getItem: he, setItem: fe, removeItem: q, clear: $, length: P, key: c, keys: A, dropInstance: ie };
      function xe() {
        return typeof openDatabase == "function";
      }
      var ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ne = "~~local_forage_type~", Pe = /^~~local_forage_type~([^~]+)~/, Be = "__lfsc__:", ke = Be.length, Ce = "arbf", De = "blob", Ie = "si08", Ee = "ui08", we = "uic8", be = "si16", ye = "si32", pe = "ur16", Se = "ui32", Ae = "fl32", ge = "fl64", Re = ke + Ce.length, Te = Object.prototype.toString;
      function Fe(y) {
        var O = y.length * 0.75, I = y.length, U, R = 0, M, k, Q, ee;
        y[y.length - 1] === "=" && (O--, y[y.length - 2] === "=" && O--);
        var Z = new ArrayBuffer(O), X = new Uint8Array(Z);
        for (U = 0; U < I; U += 4)
          M = ve.indexOf(y[U]), k = ve.indexOf(y[U + 1]), Q = ve.indexOf(y[U + 2]), ee = ve.indexOf(y[U + 3]), X[R++] = M << 2 | k >> 4, X[R++] = (k & 15) << 4 | Q >> 2, X[R++] = (Q & 3) << 6 | ee & 63;
        return Z;
      }
      function Le(y) {
        var O = new Uint8Array(y), I = "", U;
        for (U = 0; U < O.length; U += 3)
          I += ve[O[U] >> 2], I += ve[(O[U] & 3) << 4 | O[U + 1] >> 4], I += ve[(O[U + 1] & 15) << 2 | O[U + 2] >> 6], I += ve[O[U + 2] & 63];
        return O.length % 3 === 2 ? I = I.substring(0, I.length - 1) + "=" : O.length % 3 === 1 && (I = I.substring(0, I.length - 2) + "=="), I;
      }
      function Ue(y, O) {
        var I = "";
        if (y && (I = Te.call(y)), y && (I === "[object ArrayBuffer]" || y.buffer && Te.call(y.buffer) === "[object ArrayBuffer]")) {
          var U, R = Be;
          y instanceof ArrayBuffer ? (U = y, R += Ce) : (U = y.buffer, I === "[object Int8Array]" ? R += Ie : I === "[object Uint8Array]" ? R += Ee : I === "[object Uint8ClampedArray]" ? R += we : I === "[object Int16Array]" ? R += be : I === "[object Uint16Array]" ? R += pe : I === "[object Int32Array]" ? R += ye : I === "[object Uint32Array]" ? R += Se : I === "[object Float32Array]" ? R += Ae : I === "[object Float64Array]" ? R += ge : O(new Error("Failed to get type for BinaryArray"))), O(R + Le(U));
        } else if (I === "[object Blob]") {
          var M = new FileReader();
          M.onload = function() {
            var k = Ne + y.type + "~" + Le(this.result);
            O(Be + De + k);
          }, M.readAsArrayBuffer(y);
        } else
          try {
            O(JSON.stringify(y));
          } catch (k) {
            console.error("Couldn't convert value into a JSON string: ", y), O(null, k);
          }
      }
      function zt(y) {
        if (y.substring(0, ke) !== Be)
          return JSON.parse(y);
        var O = y.substring(Re), I = y.substring(ke, Re), U;
        if (I === De && Pe.test(O)) {
          var R = O.match(Pe);
          U = R[1], O = O.substring(R[0].length);
        }
        var M = Fe(O);
        switch (I) {
          case Ce:
            return M;
          case De:
            return f([M], { type: U });
          case Ie:
            return new Int8Array(M);
          case Ee:
            return new Uint8Array(M);
          case we:
            return new Uint8ClampedArray(M);
          case be:
            return new Int16Array(M);
          case pe:
            return new Uint16Array(M);
          case ye:
            return new Int32Array(M);
          case Se:
            return new Uint32Array(M);
          case Ae:
            return new Float32Array(M);
          case ge:
            return new Float64Array(M);
          default:
            throw new Error("Unkown type: " + I);
        }
      }
      var Ut = { serialize: Ue, deserialize: zt, stringToBuffer: Fe, bufferToString: Le };
      function Qt(y, O, I, U) {
        y.executeSql("CREATE TABLE IF NOT EXISTS " + O.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], I, U);
      }
      function Nt(y) {
        var O = this, I = { db: null };
        if (y)
          for (var U in y)
            I[U] = typeof y[U] != "string" ? y[U].toString() : y[U];
        var R = new d(function(M, k) {
          try {
            I.db = openDatabase(I.name, String(I.version), I.description, I.size);
          } catch (Q) {
            return k(Q);
          }
          I.db.transaction(function(Q) {
            Qt(Q, I, function() {
              O._dbInfo = I, M();
            }, function(ee, Z) {
              k(Z);
            });
          }, k);
        });
        return I.serializer = Ut, R;
      }
      function Et(y, O, I, U, R, M) {
        y.executeSql(I, U, R, function(k, Q) {
          Q.code === Q.SYNTAX_ERR ? k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [O.storeName], function(ee, Z) {
            Z.rows.length ? M(ee, Q) : Qt(ee, O, function() {
              ee.executeSql(I, U, R, M);
            }, M);
          }, M) : M(k, Q);
        }, M);
      }
      function Cr(y, O) {
        var I = this;
        y = S(y);
        var U = new d(function(R, M) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(Q) {
              Et(Q, k, "SELECT * FROM " + k.storeName + " WHERE key = ? LIMIT 1", [y], function(ee, Z) {
                var X = Z.rows.length ? Z.rows.item(0).value : null;
                X && (X = k.serializer.deserialize(X)), R(X);
              }, function(ee, Z) {
                M(Z);
              });
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function Hr(y, O) {
        var I = this, U = new d(function(R, M) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(Q) {
              Et(Q, k, "SELECT * FROM " + k.storeName, [], function(ee, Z) {
                for (var X = Z.rows, le = X.length, Oe = 0; Oe < le; Oe++) {
                  var qe = X.item(Oe), je = qe.value;
                  if (je && (je = k.serializer.deserialize(je)), je = y(je, qe.key, Oe + 1), je !== void 0) {
                    R(je);
                    return;
                  }
                }
                R();
              }, function(ee, Z) {
                M(Z);
              });
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function Qe(y, O, I, U) {
        var R = this;
        y = S(y);
        var M = new d(function(k, Q) {
          R.ready().then(function() {
            O === void 0 && (O = null);
            var ee = O, Z = R._dbInfo;
            Z.serializer.serialize(O, function(X, le) {
              le ? Q(le) : Z.db.transaction(function(Oe) {
                Et(Oe, Z, "INSERT OR REPLACE INTO " + Z.storeName + " (key, value) VALUES (?, ?)", [y, X], function() {
                  k(ee);
                }, function(qe, je) {
                  Q(je);
                });
              }, function(Oe) {
                if (Oe.code === Oe.QUOTA_ERR) {
                  if (U > 0) {
                    k(Qe.apply(R, [y, ee, I, U - 1]));
                    return;
                  }
                  Q(Oe);
                }
              });
            });
          }).catch(Q);
        });
        return v(M, I), M;
      }
      function Ge(y, O, I) {
        return Qe.apply(this, [y, O, I, 1]);
      }
      function et(y, O) {
        var I = this;
        y = S(y);
        var U = new d(function(R, M) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(Q) {
              Et(Q, k, "DELETE FROM " + k.storeName + " WHERE key = ?", [y], function() {
                R();
              }, function(ee, Z) {
                M(Z);
              });
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function tt(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            var M = O._dbInfo;
            M.db.transaction(function(k) {
              Et(k, M, "DELETE FROM " + M.storeName, [], function() {
                U();
              }, function(Q, ee) {
                R(ee);
              });
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function rt(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            var M = O._dbInfo;
            M.db.transaction(function(k) {
              Et(k, M, "SELECT COUNT(key) as c FROM " + M.storeName, [], function(Q, ee) {
                var Z = ee.rows.item(0).c;
                U(Z);
              }, function(Q, ee) {
                R(ee);
              });
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function Ye(y, O) {
        var I = this, U = new d(function(R, M) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(Q) {
              Et(Q, k, "SELECT key FROM " + k.storeName + " WHERE id = ? LIMIT 1", [y + 1], function(ee, Z) {
                var X = Z.rows.length ? Z.rows.item(0).key : null;
                R(X);
              }, function(ee, Z) {
                M(Z);
              });
            });
          }).catch(M);
        });
        return v(U, O), U;
      }
      function ot(y) {
        var O = this, I = new d(function(U, R) {
          O.ready().then(function() {
            var M = O._dbInfo;
            M.db.transaction(function(k) {
              Et(k, M, "SELECT key FROM " + M.storeName, [], function(Q, ee) {
                for (var Z = [], X = 0; X < ee.rows.length; X++)
                  Z.push(ee.rows.item(X).key);
                U(Z);
              }, function(Q, ee) {
                R(ee);
              });
            });
          }).catch(R);
        });
        return v(I, y), I;
      }
      function at(y) {
        return new d(function(O, I) {
          y.transaction(function(U) {
            U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(R, M) {
              for (var k = [], Q = 0; Q < M.rows.length; Q++)
                k.push(M.rows.item(Q).name);
              O({ db: y, storeNames: k });
            }, function(R, M) {
              I(M);
            });
          }, function(U) {
            I(U);
          });
        });
      }
      function ct(y, O) {
        O = C.apply(this, arguments);
        var I = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || I.name, y.storeName = y.storeName || I.storeName);
        var U = this, R;
        return y.name ? R = new d(function(M) {
          var k;
          y.name === I.name ? k = U._dbInfo.db : k = openDatabase(y.name, "", "", 0), y.storeName ? M({ db: k, storeNames: [y.storeName] }) : M(at(k));
        }).then(function(M) {
          return new d(function(k, Q) {
            M.db.transaction(function(ee) {
              function Z(qe) {
                return new d(function(je, Ve) {
                  ee.executeSql("DROP TABLE IF EXISTS " + qe, [], function() {
                    je();
                  }, function($e, Mt) {
                    Ve(Mt);
                  });
                });
              }
              for (var X = [], le = 0, Oe = M.storeNames.length; le < Oe; le++)
                X.push(Z(M.storeNames[le]));
              d.all(X).then(function() {
                k();
              }).catch(function(qe) {
                Q(qe);
              });
            }, function(ee) {
              Q(ee);
            });
          });
        }) : R = d.reject("Invalid arguments"), v(R, O), R;
      }
      var ut = { _driver: "webSQLStorage", _initStorage: Nt, _support: xe(), iterate: Hr, getItem: Cr, setItem: Ge, removeItem: et, clear: tt, length: rt, key: Ye, keys: ot, dropInstance: ct };
      function lt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function nt(y, O) {
        var I = y.name + "/";
        return y.storeName !== O.storeName && (I += y.storeName + "/"), I;
      }
      function it() {
        var y = "_localforage_support_test";
        try {
          return localStorage.setItem(y, !0), localStorage.removeItem(y), !1;
        } catch {
          return !0;
        }
      }
      function Ke() {
        return !it() || localStorage.length > 0;
      }
      function ht(y) {
        var O = this, I = {};
        if (y)
          for (var U in y)
            I[U] = y[U];
        return I.keyPrefix = nt(y, O._defaultConfig), Ke() ? (O._dbInfo = I, I.serializer = Ut, d.resolve()) : d.reject();
      }
      function ft(y) {
        var O = this, I = O.ready().then(function() {
          for (var U = O._dbInfo.keyPrefix, R = localStorage.length - 1; R >= 0; R--) {
            var M = localStorage.key(R);
            M.indexOf(U) === 0 && localStorage.removeItem(M);
          }
        });
        return v(I, y), I;
      }
      function Di(y, O) {
        var I = this;
        y = S(y);
        var U = I.ready().then(function() {
          var R = I._dbInfo, M = localStorage.getItem(R.keyPrefix + y);
          return M && (M = R.serializer.deserialize(M)), M;
        });
        return v(U, O), U;
      }
      function Ii(y, O) {
        var I = this, U = I.ready().then(function() {
          for (var R = I._dbInfo, M = R.keyPrefix, k = M.length, Q = localStorage.length, ee = 1, Z = 0; Z < Q; Z++) {
            var X = localStorage.key(Z);
            if (X.indexOf(M) === 0) {
              var le = localStorage.getItem(X);
              if (le && (le = R.serializer.deserialize(le)), le = y(le, X.substring(k), ee++), le !== void 0)
                return le;
            }
          }
        });
        return v(U, O), U;
      }
      function Oi(y, O) {
        var I = this, U = I.ready().then(function() {
          var R = I._dbInfo, M;
          try {
            M = localStorage.key(y);
          } catch {
            M = null;
          }
          return M && (M = M.substring(R.keyPrefix.length)), M;
        });
        return v(U, O), U;
      }
      function Xt(y) {
        var O = this, I = O.ready().then(function() {
          for (var U = O._dbInfo, R = localStorage.length, M = [], k = 0; k < R; k++) {
            var Q = localStorage.key(k);
            Q.indexOf(U.keyPrefix) === 0 && M.push(Q.substring(U.keyPrefix.length));
          }
          return M;
        });
        return v(I, y), I;
      }
      function xi(y) {
        var O = this, I = O.keys().then(function(U) {
          return U.length;
        });
        return v(I, y), I;
      }
      function Ci(y, O) {
        var I = this;
        y = S(y);
        var U = I.ready().then(function() {
          var R = I._dbInfo;
          localStorage.removeItem(R.keyPrefix + y);
        });
        return v(U, O), U;
      }
      function Ai(y, O, I) {
        var U = this;
        y = S(y);
        var R = U.ready().then(function() {
          O === void 0 && (O = null);
          var M = O;
          return new d(function(k, Q) {
            var ee = U._dbInfo;
            ee.serializer.serialize(O, function(Z, X) {
              if (X)
                Q(X);
              else
                try {
                  localStorage.setItem(ee.keyPrefix + y, Z), k(M);
                } catch (le) {
                  (le.name === "QuotaExceededError" || le.name === "NS_ERROR_DOM_QUOTA_REACHED") && Q(le), Q(le);
                }
            });
          });
        });
        return v(R, I), R;
      }
      function Ni(y, O) {
        if (O = C.apply(this, arguments), y = typeof y != "function" && y || {}, !y.name) {
          var I = this.config();
          y.name = y.name || I.name, y.storeName = y.storeName || I.storeName;
        }
        var U = this, R;
        return y.name ? R = new d(function(M) {
          y.storeName ? M(nt(y, U._defaultConfig)) : M(y.name + "/");
        }).then(function(M) {
          for (var k = localStorage.length - 1; k >= 0; k--) {
            var Q = localStorage.key(k);
            Q.indexOf(M) === 0 && localStorage.removeItem(Q);
          }
        }) : R = d.reject("Invalid arguments"), v(R, O), R;
      }
      var Ri = { _driver: "localStorageWrapper", _initStorage: ht, _support: lt(), iterate: Ii, getItem: Di, setItem: Ai, removeItem: Ci, clear: ft, length: xi, key: Oi, keys: Xt, dropInstance: Ni }, pr = function(y, O) {
        return y === O || typeof y == "number" && typeof O == "number" && isNaN(y) && isNaN(O);
      }, Ti = function(y, O) {
        for (var I = y.length, U = 0; U < I; ) {
          if (pr(y[U], O))
            return !0;
          U++;
        }
        return !1;
      }, jn = Array.isArray || function(y) {
        return Object.prototype.toString.call(y) === "[object Array]";
      }, Ar = {}, $n = {}, _r = { INDEXEDDB: oe, WEBSQL: ut, LOCALSTORAGE: Ri }, Vr = [_r.INDEXEDDB._driver, _r.WEBSQL._driver, _r.LOCALSTORAGE._driver], Wr = ["dropInstance"], an = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Wr), ir = { description: "", driver: Vr.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
      function Pi(y, O) {
        y[O] = function() {
          var I = arguments;
          return y.ready().then(function() {
            return y[O].apply(y, I);
          });
        };
      }
      function cn() {
        for (var y = 1; y < arguments.length; y++) {
          var O = arguments[y];
          if (O)
            for (var I in O)
              O.hasOwnProperty(I) && (jn(O[I]) ? arguments[0][I] = O[I].slice() : arguments[0][I] = O[I]);
        }
        return arguments[0];
      }
      var Li = function() {
        function y(O) {
          u(this, y);
          for (var I in _r)
            if (_r.hasOwnProperty(I)) {
              var U = _r[I], R = U._driver;
              this[I] = R, Ar[R] || this.defineDriver(U);
            }
          this._defaultConfig = cn({}, ir), this._config = cn({}, this._defaultConfig, O), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return y.prototype.config = function(O) {
          if ((typeof O > "u" ? "undefined" : s(O)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var I in O) {
              if (I === "storeName" && (O[I] = O[I].replace(/\W/g, "_")), I === "version" && typeof O[I] != "number")
                return new Error("Database version must be a number.");
              this._config[I] = O[I];
            }
            return "driver" in O && O.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof O == "string" ? this._config[O] : this._config;
        }, y.prototype.defineDriver = function(O, I, U) {
          var R = new d(function(M, k) {
            try {
              var Q = O._driver, ee = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!O._driver) {
                k(ee);
                return;
              }
              for (var Z = an.concat("_initStorage"), X = 0, le = Z.length; X < le; X++) {
                var Oe = Z[X], qe = !Ti(Wr, Oe);
                if ((qe || O[Oe]) && typeof O[Oe] != "function") {
                  k(ee);
                  return;
                }
              }
              var je = function() {
                for (var $e = function(Ui) {
                  return function() {
                    var Mi = new Error("Method " + Ui + " is not implemented by the current driver"), qn = d.reject(Mi);
                    return v(qn, arguments[arguments.length - 1]), qn;
                  };
                }, Mt = 0, un = Wr.length; Mt < un; Mt++) {
                  var Vt = Wr[Mt];
                  O[Vt] || (O[Vt] = $e(Vt));
                }
              };
              je();
              var Ve = function($e) {
                Ar[Q] && console.info("Redefining LocalForage driver: " + Q), Ar[Q] = O, $n[Q] = $e, M();
              };
              "_support" in O ? O._support && typeof O._support == "function" ? O._support().then(Ve, k) : Ve(!!O._support) : Ve(!0);
            } catch ($e) {
              k($e);
            }
          });
          return m(R, I, U), R;
        }, y.prototype.driver = function() {
          return this._driver || null;
        }, y.prototype.getDriver = function(O, I, U) {
          var R = Ar[O] ? d.resolve(Ar[O]) : d.reject(new Error("Driver not found."));
          return m(R, I, U), R;
        }, y.prototype.getSerializer = function(O) {
          var I = d.resolve(Ut);
          return m(I, O), I;
        }, y.prototype.ready = function(O) {
          var I = this, U = I._driverSet.then(function() {
            return I._ready === null && (I._ready = I._initDriver()), I._ready;
          });
          return m(U, O, O), U;
        }, y.prototype.setDriver = function(O, I, U) {
          var R = this;
          jn(O) || (O = [O]);
          var M = this._getSupportedDrivers(O);
          function k() {
            R._config.driver = R.driver();
          }
          function Q(X) {
            return R._extend(X), k(), R._ready = R._initStorage(R._config), R._ready;
          }
          function ee(X) {
            return function() {
              var le = 0;
              function Oe() {
                for (; le < X.length; ) {
                  var qe = X[le];
                  return le++, R._dbInfo = null, R._ready = null, R.getDriver(qe).then(Q).catch(Oe);
                }
                k();
                var je = new Error("No available storage method found.");
                return R._driverSet = d.reject(je), R._driverSet;
              }
              return Oe();
            };
          }
          var Z = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = Z.then(function() {
            var X = M[0];
            return R._dbInfo = null, R._ready = null, R.getDriver(X).then(function(le) {
              R._driver = le._driver, k(), R._wrapLibraryMethodsWithReady(), R._initDriver = ee(M);
            });
          }).catch(function() {
            k();
            var X = new Error("No available storage method found.");
            return R._driverSet = d.reject(X), R._driverSet;
          }), m(this._driverSet, I, U), this._driverSet;
        }, y.prototype.supports = function(O) {
          return !!$n[O];
        }, y.prototype._extend = function(O) {
          cn(this, O);
        }, y.prototype._getSupportedDrivers = function(O) {
          for (var I = [], U = 0, R = O.length; U < R; U++) {
            var M = O[U];
            this.supports(M) && I.push(M);
          }
          return I;
        }, y.prototype._wrapLibraryMethodsWithReady = function() {
          for (var O = 0, I = an.length; O < I; O++)
            Pi(this, an[O]);
        }, y.prototype.createInstance = function(O) {
          return new y(O);
        }, y;
      }(), Fi = new Li();
      n.exports = Fi;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(yc);
var Ll = yc.exports, fn = Pl(Ll);
class Fl {
  constructor() {
    this.getKeys = async () => await fn.keys(), this.getEntries = async () => {
      let e = [];
      return (await this.getKeys()).forEach(async (r) => e.push(await fn.getItem(r))), e;
    }, this.getItem = async (e) => await fn.getItem(e) ?? void 0, this.setItem = async (e, r) => {
      await fn.setItem(e, r);
    }, this.removeItem = async (e) => {
      await fn.removeItem(e);
    };
  }
}
let Ul = class {
  constructor() {
    const e = new Fl();
    this.storage = e;
  }
  async getKeys() {
    return this.storage.getKeys();
  }
  async getEntries() {
    return this.storage.getEntries();
  }
  async getItem(e) {
    return this.storage.getItem(e);
  }
  async setItem(e, r) {
    return this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return this.storage.removeItem(e);
  }
};
var rn = {};
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
var hs = function(t, e) {
  return hs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, hs(t, e);
};
function Ml(t, e) {
  hs(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var fs = function() {
  return fs = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, fs.apply(this, arguments);
};
function jl(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function $l(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (u = t[a]) && (s = (i < 3 ? u(s) : i > 3 ? u(e, r, s) : u(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function ql(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function zl(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Bl(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(f) {
      try {
        h(n.next(f));
      } catch (d) {
        u(d);
      }
    }
    function l(f) {
      try {
        h(n.throw(f));
      } catch (d) {
        u(d);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(a, l);
    }
    h((n = n.apply(t, e || [])).next());
  });
}
function kl(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(h) {
    return function(f) {
      return l([h, f]);
    };
  }
  function l(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = h[0] & 2 ? i.return : h[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done)
          return s;
        switch (i = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return r.label++, { value: h[1], done: !1 };
          case 5:
            r.label++, i = h[1], h = [0];
            continue;
          case 7:
            h = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              r = 0;
              continue;
            }
            if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
              r.label = h[1];
              break;
            }
            if (h[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = h;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(h);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        h = e.call(t, r);
      } catch (f) {
        h = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function Kl(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Hl(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function ds(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function vc(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function Vl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(vc(arguments[e]));
  return t;
}
function Wl() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], u = 0, a = s.length; u < a; u++, i++)
      n[i] = s[u];
  return n;
}
function In(t) {
  return this instanceof In ? (this.v = t, this) : new In(t);
}
function Gl(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(v) {
    n[v] && (i[v] = function(m) {
      return new Promise(function(S, C) {
        s.push([v, m, S, C]) > 1 || a(v, m);
      });
    });
  }
  function a(v, m) {
    try {
      l(n[v](m));
    } catch (S) {
      d(s[0][3], S);
    }
  }
  function l(v) {
    v.value instanceof In ? Promise.resolve(v.value.v).then(h, f) : d(s[0][2], v);
  }
  function h(v) {
    a("next", v);
  }
  function f(v) {
    a("throw", v);
  }
  function d(v, m) {
    v(m), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Yl(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(u) {
      return (r = !r) ? { value: In(t[i](u)), done: i === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Jl(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ds == "function" ? ds(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(u) {
      return new Promise(function(a, l) {
        u = t[s](u), i(a, l, u.done, u.value);
      });
    };
  }
  function i(s, u, a, l) {
    Promise.resolve(l).then(function(h) {
      s({ value: h, done: a });
    }, u);
  }
}
function Ql(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Xl(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Zl(t) {
  return t && t.__esModule ? t : { default: t };
}
function eh(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function th(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return fs;
  },
  __asyncDelegator: Yl,
  __asyncGenerator: Gl,
  __asyncValues: Jl,
  __await: In,
  __awaiter: Bl,
  __classPrivateFieldGet: eh,
  __classPrivateFieldSet: th,
  __createBinding: Kl,
  __decorate: $l,
  __exportStar: Hl,
  __extends: Ml,
  __generator: kl,
  __importDefault: Zl,
  __importStar: Xl,
  __makeTemplateObject: Ql,
  __metadata: zl,
  __param: ql,
  __read: vc,
  __rest: jl,
  __spread: Vl,
  __spreadArrays: Wl,
  __values: ds
}, Symbol.toStringTag, { value: "Module" })), fr = /* @__PURE__ */ Rs(rh);
var dn = {}, ue = {}, zi = {}, pn = {}, Io;
function nh() {
  if (Io)
    return pn;
  Io = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return pn.delay = t, pn;
}
var Lr = {}, Bi = {}, Fr = {}, Oo;
function ih() {
  return Oo || (Oo = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.ONE_THOUSAND = Fr.ONE_HUNDRED = void 0, Fr.ONE_HUNDRED = 100, Fr.ONE_THOUSAND = 1e3), Fr;
}
var ki = {}, xo;
function sh() {
  return xo || (xo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ki)), ki;
}
var Co;
function bc() {
  return Co || (Co = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = fr;
    e.__exportStar(ih(), t), e.__exportStar(sh(), t);
  }(Bi)), Bi;
}
var Ao;
function oh() {
  if (Ao)
    return Lr;
  Ao = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.fromMiliseconds = Lr.toMiliseconds = void 0;
  const t = bc();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Lr.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Lr.fromMiliseconds = r, Lr;
}
var No;
function ah() {
  return No || (No = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = fr;
    e.__exportStar(nh(), t), e.__exportStar(oh(), t);
  }(zi)), zi;
}
var Yr = {}, Ro;
function ch() {
  if (Ro)
    return Yr;
  Ro = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const n = this.get(r);
      if (typeof n.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const i = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: i });
    }
    get(r) {
      const n = this.timestamps.get(r);
      if (typeof n > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return n;
    }
    elapsed(r) {
      const n = this.get(r);
      return n.elapsed || Date.now() - n.started;
    }
  }
  return Yr.Watch = t, Yr.default = t, Yr;
}
var Ki = {}, gn = {}, To;
function uh() {
  if (To)
    return gn;
  To = 1, Object.defineProperty(gn, "__esModule", { value: !0 }), gn.IWatch = void 0;
  class t {
  }
  return gn.IWatch = t, gn;
}
var Po;
function lh() {
  return Po || (Po = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), fr.__exportStar(uh(), t);
  }(Ki)), Ki;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = fr;
  e.__exportStar(ah(), t), e.__exportStar(ch(), t), e.__exportStar(lh(), t), e.__exportStar(bc(), t);
})(ue);
var Hi = {}, yn = {};
let Kt = class {
};
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Kt
}, Symbol.toStringTag, { value: "Module" })), fh = /* @__PURE__ */ Rs(hh);
var Lo;
function dh() {
  if (Lo)
    return yn;
  Lo = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.IHeartBeat = void 0;
  const t = fh;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return yn.IHeartBeat = e, yn;
}
var Fo;
function mc() {
  return Fo || (Fo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), fr.__exportStar(dh(), t);
  }(Hi)), Hi;
}
var Vi = {}, Ur = {}, Uo;
function ph() {
  if (Uo)
    return Ur;
  Uo = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.HEARTBEAT_EVENTS = Ur.HEARTBEAT_INTERVAL = void 0;
  const t = ue;
  return Ur.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Ur.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Ur;
}
var Mo;
function wc() {
  return Mo || (Mo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), fr.__exportStar(ph(), t);
  }(Vi)), Vi;
}
var jo;
function gh() {
  if (jo)
    return dn;
  jo = 1, Object.defineProperty(dn, "__esModule", { value: !0 }), dn.HeartBeat = void 0;
  const t = fr, e = Jt, r = ue, n = mc(), i = wc();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const l = new s(a);
        return yield l.init(), l;
      });
    }
    init() {
      return t.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(a, l) {
      this.events.on(a, l);
    }
    once(a, l) {
      this.events.once(a, l);
    }
    off(a, l) {
      this.events.off(a, l);
    }
    removeListener(a, l) {
      this.events.removeListener(a, l);
    }
    initialize() {
      return t.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return dn.HeartBeat = s, dn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = fr;
  e.__exportStar(gh(), t), e.__exportStar(mc(), t), e.__exportStar(wc(), t);
})(rn);
var Me = {}, Wi, $o;
function yh() {
  if ($o)
    return Wi;
  $o = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Wi = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var h = 1; h < a; h++)
        l[h] = s(n[h]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", v = 1 - u, m = -1, S = r && r.length || 0, C = 0; C < S; ) {
      if (r.charCodeAt(C) === 37 && C + 1 < S) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(C + 1)) {
          case 100:
          case 102:
            if (v >= f || n[v] == null)
              break;
            m < C && (d += r.slice(m, C)), d += Number(n[v]), m = C + 2, C++;
            break;
          case 105:
            if (v >= f || n[v] == null)
              break;
            m < C && (d += r.slice(m, C)), d += Math.floor(Number(n[v])), m = C + 2, C++;
            break;
          case 79:
          case 111:
          case 106:
            if (v >= f || n[v] === void 0)
              break;
            m < C && (d += r.slice(m, C));
            var D = typeof n[v];
            if (D === "string") {
              d += "'" + n[v] + "'", m = C + 2, C++;
              break;
            }
            if (D === "function") {
              d += n[v].name || "<anonymous>", m = C + 2, C++;
              break;
            }
            d += s(n[v]), m = C + 2, C++;
            break;
          case 115:
            if (v >= f)
              break;
            m < C && (d += r.slice(m, C)), d += String(n[v]), m = C + 2, C++;
            break;
          case 37:
            m < C && (d += r.slice(m, C)), d += "%", m = C + 2, C++, v--;
            break;
        }
        ++v;
      }
      ++C;
    }
    return m === -1 ? r : (m < S && (d += r.slice(m)), d);
  }
  return Wi;
}
var Gi, qo;
function vh() {
  if (qo)
    return Gi;
  qo = 1;
  const t = yh();
  Gi = i;
  const e = b().console || {}, r = {
    mapHttpRequest: S,
    mapHttpResponse: S,
    wrapRequestSerializer: C,
    wrapResponseSerializer: C,
    wrapErrorSerializer: C,
    req: S,
    res: S,
    err: v
  };
  function n(p, o) {
    return Array.isArray(p) ? p.filter(function(T) {
      return T !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(o) : !1;
  }
  function i(p) {
    p = p || {}, p.browser = p.browser || {};
    const o = p.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = p.browser.write || e;
    p.browser.write && (p.browser.asObject = !0);
    const T = p.serializers || {}, F = n(p.browser.serialize, T);
    let B = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (B = !1);
    const W = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const ne = p.level || "info", N = Object.create(g);
    N.log || (N.log = D), Object.defineProperty(N, "levelVal", {
      get: re
    }), Object.defineProperty(N, "level", {
      get: G,
      set: H
    });
    const j = {
      transmit: o,
      serialize: F,
      asObject: p.browser.asObject,
      levels: W,
      timestamp: m(p)
    };
    N.levels = i.levels, N.level = ne, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = D, N.serializers = T, N._serialize = F, N._stdErrSerialize = B, N.child = Y, o && (N._logEvent = d());
    function re() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function G() {
      return this._level;
    }
    function H(K) {
      if (K !== "silent" && !this.levels.values[K])
        throw Error("unknown level " + K);
      this._level = K, s(j, N, "error", "log"), s(j, N, "fatal", "error"), s(j, N, "warn", "error"), s(j, N, "info", "log"), s(j, N, "debug", "log"), s(j, N, "trace", "log");
    }
    function Y(K, J) {
      if (!K)
        throw new Error("missing bindings for child Pino");
      J = J || {}, F && K.serializers && (J.serializers = K.serializers);
      const de = J.serializers;
      if (F && de) {
        var te = Object.assign({}, T, de), he = p.browser.serialize === !0 ? Object.keys(te) : F;
        delete K.serializers, l([K], he, te, this._stdErrSerialize);
      }
      function ae(fe) {
        this._childLevel = (fe._childLevel | 0) + 1, this.error = h(fe, K, "error"), this.fatal = h(fe, K, "fatal"), this.warn = h(fe, K, "warn"), this.info = h(fe, K, "info"), this.debug = h(fe, K, "debug"), this.trace = h(fe, K, "trace"), te && (this.serializers = te, this._serialize = he), o && (this._logEvent = d(
          [].concat(fe._logEvent.bindings, K)
        ));
      }
      return ae.prototype = this, new ae(this);
    }
    return N;
  }
  i.levels = {
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: z, epochTime: _, unixTime: x, isoTime: w });
  function s(p, o, g, T) {
    const F = Object.getPrototypeOf(o);
    o[g] = o.levelVal > o.levels.values[g] ? D : F[g] ? F[g] : e[g] || e[T] || D, u(p, o, g);
  }
  function u(p, o, g) {
    !p.transmit && o[g] === D || (o[g] = function(T) {
      return function() {
        const B = p.timestamp(), W = new Array(arguments.length), ne = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var N = 0; N < W.length; N++)
          W[N] = arguments[N];
        if (p.serialize && !p.asObject && l(W, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? T.call(ne, a(this, g, W, B)) : T.apply(ne, W), p.transmit) {
          const j = p.transmit.level || o.level, re = i.levels.values[j], G = i.levels.values[g];
          if (G < re)
            return;
          f(this, {
            ts: B,
            methodLevel: g,
            methodValue: G,
            transmitLevel: j,
            transmitValue: i.levels.values[p.transmit.level || o.level],
            send: p.transmit.send,
            val: o.levelVal
          }, W);
        }
      };
    }(o[g]));
  }
  function a(p, o, g, T) {
    p._serialize && l(g, p._serialize, p.serializers, p._stdErrSerialize);
    const F = g.slice();
    let B = F[0];
    const W = {};
    T && (W.time = T), W.level = i.levels.values[o];
    let ne = (p._childLevel | 0) + 1;
    if (ne < 1 && (ne = 1), B !== null && typeof B == "object") {
      for (; ne-- && typeof F[0] == "object"; )
        Object.assign(W, F.shift());
      B = F.length ? t(F.shift(), F) : void 0;
    } else
      typeof B == "string" && (B = t(F.shift(), F));
    return B !== void 0 && (W.msg = B), W;
  }
  function l(p, o, g, T) {
    for (const F in p)
      if (T && p[F] instanceof Error)
        p[F] = i.stdSerializers.err(p[F]);
      else if (typeof p[F] == "object" && !Array.isArray(p[F]))
        for (const B in p[F])
          o && o.indexOf(B) > -1 && B in g && (p[F][B] = g[B](p[F][B]));
  }
  function h(p, o, g) {
    return function() {
      const T = new Array(1 + arguments.length);
      T[0] = o;
      for (var F = 1; F < T.length; F++)
        T[F] = arguments[F - 1];
      return p[g].apply(this, T);
    };
  }
  function f(p, o, g) {
    const T = o.send, F = o.ts, B = o.methodLevel, W = o.methodValue, ne = o.val, N = p._logEvent.bindings;
    l(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = F, p._logEvent.messages = g.filter(function(j) {
      return N.indexOf(j) === -1;
    }), p._logEvent.level.label = B, p._logEvent.level.value = W, T(B, p._logEvent, ne), p._logEvent = d(N);
  }
  function d(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function v(p) {
    const o = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const g in p)
      o[g] === void 0 && (o[g] = p[g]);
    return o;
  }
  function m(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? z : _;
  }
  function S() {
    return {};
  }
  function C(p) {
    return p;
  }
  function D() {
  }
  function z() {
    return !1;
  }
  function _() {
    return Date.now();
  }
  function x() {
    return Math.round(Date.now() / 1e3);
  }
  function w() {
    return new Date(Date.now()).toISOString();
  }
  function b() {
    function p(o) {
      return typeof o < "u" && o;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return p(self) || p(window) || p(this) || {};
    }
  }
  return Gi;
}
var Mr = {}, zo;
function _c() {
  return zo || (zo = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.PINO_CUSTOM_CONTEXT_KEY = Mr.PINO_LOGGER_DEFAULTS = void 0, Mr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Mr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Mr;
}
var Rt = {}, Bo;
function bh() {
  if (Bo)
    return Rt;
  Bo = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.generateChildLogger = Rt.formatChildLoggerContext = Rt.getLoggerContext = Rt.setBrowserLoggerContext = Rt.getBrowserLoggerContext = Rt.getDefaultLoggerOptions = void 0;
  const t = _c();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Rt.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  Rt.getBrowserLoggerContext = r;
  function n(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[h] = l, a;
  }
  Rt.setBrowserLoggerContext = n;
  function i(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof a.bindings > "u" ? h = r(a, l) : h = a.bindings().context || "", h;
  }
  Rt.getLoggerContext = i;
  function s(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(a, h);
    return f.trim() ? `${f}/${l}` : l;
  }
  Rt.formatChildLoggerContext = s;
  function u(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(a, l, h), d = a.child({ context: f });
    return n(d, f, h);
  }
  return Rt.generateChildLogger = u, Rt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = fr, r = e.__importDefault(vh());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(_c(), t), e.__exportStar(bh(), t);
})(Me);
let mh = class extends Kt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, wh = class extends Kt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, _h = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Eh = class extends Kt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Sh = class extends Kt {
  constructor(e) {
    super();
  }
}, Dh = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Ih = class extends Kt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Oh = class extends Kt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, xh = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Ch = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Ah = class {
  constructor(e) {
    this.client = e;
  }
};
const Nh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Rh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Ec(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Rh(t);
  } catch {
    return t;
  }
}
function Ls(t) {
  return typeof t == "string" ? t : Nh(t) || "";
}
var Fs = {}, nn = {}, fi = {}, di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.BrowserRandomSource = void 0;
const ko = 65536;
class Th {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += ko)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, ko)));
    return r;
  }
}
di.BrowserRandomSource = Th;
function Ph(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pi = {}, Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
function Lh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Ht.wipe = Lh;
const Fh = {}, Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fh
}, Symbol.toStringTag, { value: "Module" })), Mh = /* @__PURE__ */ Rs(Uh);
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.NodeRandomSource = void 0;
const jh = Ht;
class $h {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ph < "u") {
      const e = Mh;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const n = new Uint8Array(e);
    for (let i = 0; i < n.length; i++)
      n[i] = r[i];
    return (0, jh.wipe)(r), n;
  }
}
pi.NodeRandomSource = $h;
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.SystemRandomSource = void 0;
const qh = di, zh = pi;
class Bh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new qh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new zh.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
fi.SystemRandomSource = Bh;
var me = {}, Sc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var h = a >>> 16 & 65535, f = a & 65535, d = l >>> 16 & 65535, v = l & 65535;
    return f * v + (h * v + f * d << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(a, l) {
    return a + l | 0;
  }
  t.add = r;
  function n(a, l) {
    return a - l | 0;
  }
  t.sub = n;
  function i(a, l) {
    return a << l | a >>> 32 - l;
  }
  t.rotl = i;
  function s(a, l) {
    return a << 32 - l | a >>> l;
  }
  t.rotr = s;
  function u(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || u, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(Sc);
Object.defineProperty(me, "__esModule", { value: !0 });
var Dc = Sc;
function kh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
me.readInt16BE = kh;
function Kh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
me.readUint16BE = Kh;
function Hh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
me.readInt16LE = Hh;
function Vh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint16LE = Vh;
function Ic(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
me.writeUint16BE = Ic;
me.writeInt16BE = Ic;
function Oc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
me.writeUint16LE = Oc;
me.writeInt16LE = Oc;
function ps(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
me.readInt32BE = ps;
function gs(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
me.readUint32BE = gs;
function ys(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
me.readInt32LE = ys;
function vs(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint32LE = vs;
function ni(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
me.writeUint32BE = ni;
me.writeInt32BE = ni;
function ii(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
me.writeUint32LE = ii;
me.writeInt32LE = ii;
function Wh(t, e) {
  e === void 0 && (e = 0);
  var r = ps(t, e), n = ps(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
me.readInt64BE = Wh;
function Gh(t, e) {
  e === void 0 && (e = 0);
  var r = gs(t, e), n = gs(t, e + 4);
  return r * 4294967296 + n;
}
me.readUint64BE = Gh;
function Yh(t, e) {
  e === void 0 && (e = 0);
  var r = ys(t, e), n = ys(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
me.readInt64LE = Yh;
function Jh(t, e) {
  e === void 0 && (e = 0);
  var r = vs(t, e), n = vs(t, e + 4);
  return n * 4294967296 + r;
}
me.readUint64LE = Jh;
function xc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ni(t / 4294967296 >>> 0, e, r), ni(t >>> 0, e, r + 4), e;
}
me.writeUint64BE = xc;
me.writeInt64BE = xc;
function Cc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ii(t >>> 0, e, r), ii(t / 4294967296 >>> 0, e, r + 4), e;
}
me.writeUint64LE = Cc;
me.writeInt64LE = Cc;
function Qh(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
me.readUintBE = Qh;
function Xh(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
me.readUintLE = Xh;
function Zh(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Dc.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
me.writeUintBE = Zh;
function ef(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Dc.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
me.writeUintLE = ef;
function tf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
me.readFloat32BE = tf;
function rf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
me.readFloat32LE = rf;
function nf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
me.readFloat64BE = nf;
function sf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
me.readFloat64LE = sf;
function of(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
me.writeFloat32BE = of;
function af(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
me.writeFloat32LE = af;
function cf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
me.writeFloat64BE = cf;
function uf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
me.writeFloat64LE = uf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = fi, r = me, n = Ht;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(h, f = t.defaultRandomSource) {
    return f.randomBytes(h);
  }
  t.randomBytes = i;
  function s(h = t.defaultRandomSource) {
    const f = i(4, h), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(h, f = u, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let v = "";
    const m = f.length, S = 256 - 256 % m;
    for (; h > 0; ) {
      const C = i(Math.ceil(h * 256 / S), d);
      for (let D = 0; D < C.length && h > 0; D++) {
        const z = C[D];
        z < S && (v += f.charAt(z % m), h--);
      }
      (0, n.wipe)(C);
    }
    return v;
  }
  t.randomString = a;
  function l(h, f = u, d = t.defaultRandomSource) {
    const v = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return a(v, f, d);
  }
  t.randomStringForEntropy = l;
})(nn);
var Ac = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = Ht;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function a() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, v = h << 3, m = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var S = f + 1; S < m - 8; S++)
            this._buffer[S] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(v, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var S = 0; S < this.digestLength / 8; S++)
          e.writeUint32BE(this._stateHi[S], l, S * 8), e.writeUint32BE(this._stateLo[S], l, S * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  t.SHA512 = n;
  var i = new Int32Array([
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
  function s(a, l, h, f, d, v, m) {
    for (var S = h[0], C = h[1], D = h[2], z = h[3], _ = h[4], x = h[5], w = h[6], b = h[7], p = f[0], o = f[1], g = f[2], T = f[3], F = f[4], B = f[5], W = f[6], ne = f[7], N, j, re, G, H, Y, K, J; m >= 128; ) {
      for (var de = 0; de < 16; de++) {
        var te = 8 * de + v;
        a[de] = e.readUint32BE(d, te), l[de] = e.readUint32BE(d, te + 4);
      }
      for (var de = 0; de < 80; de++) {
        var he = S, ae = C, fe = D, q = z, $ = _, P = x, c = w, A = b, ie = p, oe = o, xe = g, ve = T, Ne = F, Pe = B, Be = W, ke = ne;
        if (N = b, j = ne, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = (_ >>> 14 | F << 32 - 14) ^ (_ >>> 18 | F << 32 - 18) ^ (F >>> 41 - 32 | _ << 32 - (41 - 32)), j = (F >>> 14 | _ << 32 - 14) ^ (F >>> 18 | _ << 32 - 18) ^ (_ >>> 41 - 32 | F << 32 - (41 - 32)), H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, N = _ & x ^ ~_ & w, j = F & B ^ ~F & W, H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, N = i[de * 2], j = i[de * 2 + 1], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, N = a[de % 16], j = l[de % 16], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, re = K & 65535 | J << 16, G = H & 65535 | Y << 16, N = re, j = G, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = (S >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | S << 32 - (34 - 32)) ^ (p >>> 39 - 32 | S << 32 - (39 - 32)), j = (p >>> 28 | S << 32 - 28) ^ (S >>> 34 - 32 | p << 32 - (34 - 32)) ^ (S >>> 39 - 32 | p << 32 - (39 - 32)), H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, N = S & C ^ S & D ^ C & D, j = p & o ^ p & g ^ o & g, H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, A = K & 65535 | J << 16, ke = H & 65535 | Y << 16, N = q, j = ve, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = re, j = G, H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, q = K & 65535 | J << 16, ve = H & 65535 | Y << 16, C = he, D = ae, z = fe, _ = q, x = $, w = P, b = c, S = A, o = ie, g = oe, T = xe, F = ve, B = Ne, W = Pe, ne = Be, p = ke, de % 16 === 15)
          for (var te = 0; te < 16; te++)
            N = a[te], j = l[te], H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = a[(te + 9) % 16], j = l[(te + 9) % 16], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, re = a[(te + 1) % 16], G = l[(te + 1) % 16], N = (re >>> 1 | G << 32 - 1) ^ (re >>> 8 | G << 32 - 8) ^ re >>> 7, j = (G >>> 1 | re << 32 - 1) ^ (G >>> 8 | re << 32 - 8) ^ (G >>> 7 | re << 32 - 7), H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, re = a[(te + 14) % 16], G = l[(te + 14) % 16], N = (re >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | re << 32 - (61 - 32)) ^ re >>> 6, j = (G >>> 19 | re << 32 - 19) ^ (re >>> 61 - 32 | G << 32 - (61 - 32)) ^ (G >>> 6 | re << 32 - 6), H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, a[te] = K & 65535 | J << 16, l[te] = H & 65535 | Y << 16;
      }
      N = S, j = p, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[0], j = f[0], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[0] = S = K & 65535 | J << 16, f[0] = p = H & 65535 | Y << 16, N = C, j = o, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[1], j = f[1], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[1] = C = K & 65535 | J << 16, f[1] = o = H & 65535 | Y << 16, N = D, j = g, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[2], j = f[2], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[2] = D = K & 65535 | J << 16, f[2] = g = H & 65535 | Y << 16, N = z, j = T, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[3], j = f[3], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[3] = z = K & 65535 | J << 16, f[3] = T = H & 65535 | Y << 16, N = _, j = F, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[4], j = f[4], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[4] = _ = K & 65535 | J << 16, f[4] = F = H & 65535 | Y << 16, N = x, j = B, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[5], j = f[5], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[5] = x = K & 65535 | J << 16, f[5] = B = H & 65535 | Y << 16, N = w, j = W, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[6], j = f[6], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[6] = w = K & 65535 | J << 16, f[6] = W = H & 65535 | Y << 16, N = b, j = ne, H = j & 65535, Y = j >>> 16, K = N & 65535, J = N >>> 16, N = h[7], j = f[7], H += j & 65535, Y += j >>> 16, K += N & 65535, J += N >>> 16, Y += H >>> 16, K += Y >>> 16, J += K >>> 16, h[7] = b = K & 65535 | J << 16, f[7] = ne = H & 65535 | Y << 16, v += 128, m -= 128;
    }
    return v;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(Ac);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = nn, r = Ac, n = Ht;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(q) {
    const $ = new Float64Array(16);
    if (q)
      for (let P = 0; P < q.length; P++)
        $[P] = q[P];
    return $;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = i(), a = i([1]), l = i([
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
  ]), h = i([
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
  ]), f = i([
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
  ]), d = i([
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
  ]), v = i([
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
  function m(q, $) {
    for (let P = 0; P < 16; P++)
      q[P] = $[P] | 0;
  }
  function S(q) {
    let $ = 1;
    for (let P = 0; P < 16; P++) {
      let c = q[P] + $ + 65535;
      $ = Math.floor(c / 65536), q[P] = c - $ * 65536;
    }
    q[0] += $ - 1 + 37 * ($ - 1);
  }
  function C(q, $, P) {
    const c = ~(P - 1);
    for (let A = 0; A < 16; A++) {
      const ie = c & (q[A] ^ $[A]);
      q[A] ^= ie, $[A] ^= ie;
    }
  }
  function D(q, $) {
    const P = i(), c = i();
    for (let A = 0; A < 16; A++)
      c[A] = $[A];
    S(c), S(c), S(c);
    for (let A = 0; A < 2; A++) {
      P[0] = c[0] - 65517;
      for (let oe = 1; oe < 15; oe++)
        P[oe] = c[oe] - 65535 - (P[oe - 1] >> 16 & 1), P[oe - 1] &= 65535;
      P[15] = c[15] - 32767 - (P[14] >> 16 & 1);
      const ie = P[15] >> 16 & 1;
      P[14] &= 65535, C(c, P, 1 - ie);
    }
    for (let A = 0; A < 16; A++)
      q[2 * A] = c[A] & 255, q[2 * A + 1] = c[A] >> 8;
  }
  function z(q, $) {
    let P = 0;
    for (let c = 0; c < 32; c++)
      P |= q[c] ^ $[c];
    return (1 & P - 1 >>> 8) - 1;
  }
  function _(q, $) {
    const P = new Uint8Array(32), c = new Uint8Array(32);
    return D(P, q), D(c, $), z(P, c);
  }
  function x(q) {
    const $ = new Uint8Array(32);
    return D($, q), $[0] & 1;
  }
  function w(q, $) {
    for (let P = 0; P < 16; P++)
      q[P] = $[2 * P] + ($[2 * P + 1] << 8);
    q[15] &= 32767;
  }
  function b(q, $, P) {
    for (let c = 0; c < 16; c++)
      q[c] = $[c] + P[c];
  }
  function p(q, $, P) {
    for (let c = 0; c < 16; c++)
      q[c] = $[c] - P[c];
  }
  function o(q, $, P) {
    let c, A, ie = 0, oe = 0, xe = 0, ve = 0, Ne = 0, Pe = 0, Be = 0, ke = 0, Ce = 0, De = 0, Ie = 0, Ee = 0, we = 0, be = 0, ye = 0, pe = 0, Se = 0, Ae = 0, ge = 0, Re = 0, Te = 0, Fe = 0, Le = 0, Ue = 0, zt = 0, Ut = 0, Qt = 0, Nt = 0, Et = 0, Cr = 0, Hr = 0, Qe = P[0], Ge = P[1], et = P[2], tt = P[3], rt = P[4], Ye = P[5], ot = P[6], at = P[7], ct = P[8], ut = P[9], lt = P[10], nt = P[11], it = P[12], Ke = P[13], ht = P[14], ft = P[15];
    c = $[0], ie += c * Qe, oe += c * Ge, xe += c * et, ve += c * tt, Ne += c * rt, Pe += c * Ye, Be += c * ot, ke += c * at, Ce += c * ct, De += c * ut, Ie += c * lt, Ee += c * nt, we += c * it, be += c * Ke, ye += c * ht, pe += c * ft, c = $[1], oe += c * Qe, xe += c * Ge, ve += c * et, Ne += c * tt, Pe += c * rt, Be += c * Ye, ke += c * ot, Ce += c * at, De += c * ct, Ie += c * ut, Ee += c * lt, we += c * nt, be += c * it, ye += c * Ke, pe += c * ht, Se += c * ft, c = $[2], xe += c * Qe, ve += c * Ge, Ne += c * et, Pe += c * tt, Be += c * rt, ke += c * Ye, Ce += c * ot, De += c * at, Ie += c * ct, Ee += c * ut, we += c * lt, be += c * nt, ye += c * it, pe += c * Ke, Se += c * ht, Ae += c * ft, c = $[3], ve += c * Qe, Ne += c * Ge, Pe += c * et, Be += c * tt, ke += c * rt, Ce += c * Ye, De += c * ot, Ie += c * at, Ee += c * ct, we += c * ut, be += c * lt, ye += c * nt, pe += c * it, Se += c * Ke, Ae += c * ht, ge += c * ft, c = $[4], Ne += c * Qe, Pe += c * Ge, Be += c * et, ke += c * tt, Ce += c * rt, De += c * Ye, Ie += c * ot, Ee += c * at, we += c * ct, be += c * ut, ye += c * lt, pe += c * nt, Se += c * it, Ae += c * Ke, ge += c * ht, Re += c * ft, c = $[5], Pe += c * Qe, Be += c * Ge, ke += c * et, Ce += c * tt, De += c * rt, Ie += c * Ye, Ee += c * ot, we += c * at, be += c * ct, ye += c * ut, pe += c * lt, Se += c * nt, Ae += c * it, ge += c * Ke, Re += c * ht, Te += c * ft, c = $[6], Be += c * Qe, ke += c * Ge, Ce += c * et, De += c * tt, Ie += c * rt, Ee += c * Ye, we += c * ot, be += c * at, ye += c * ct, pe += c * ut, Se += c * lt, Ae += c * nt, ge += c * it, Re += c * Ke, Te += c * ht, Fe += c * ft, c = $[7], ke += c * Qe, Ce += c * Ge, De += c * et, Ie += c * tt, Ee += c * rt, we += c * Ye, be += c * ot, ye += c * at, pe += c * ct, Se += c * ut, Ae += c * lt, ge += c * nt, Re += c * it, Te += c * Ke, Fe += c * ht, Le += c * ft, c = $[8], Ce += c * Qe, De += c * Ge, Ie += c * et, Ee += c * tt, we += c * rt, be += c * Ye, ye += c * ot, pe += c * at, Se += c * ct, Ae += c * ut, ge += c * lt, Re += c * nt, Te += c * it, Fe += c * Ke, Le += c * ht, Ue += c * ft, c = $[9], De += c * Qe, Ie += c * Ge, Ee += c * et, we += c * tt, be += c * rt, ye += c * Ye, pe += c * ot, Se += c * at, Ae += c * ct, ge += c * ut, Re += c * lt, Te += c * nt, Fe += c * it, Le += c * Ke, Ue += c * ht, zt += c * ft, c = $[10], Ie += c * Qe, Ee += c * Ge, we += c * et, be += c * tt, ye += c * rt, pe += c * Ye, Se += c * ot, Ae += c * at, ge += c * ct, Re += c * ut, Te += c * lt, Fe += c * nt, Le += c * it, Ue += c * Ke, zt += c * ht, Ut += c * ft, c = $[11], Ee += c * Qe, we += c * Ge, be += c * et, ye += c * tt, pe += c * rt, Se += c * Ye, Ae += c * ot, ge += c * at, Re += c * ct, Te += c * ut, Fe += c * lt, Le += c * nt, Ue += c * it, zt += c * Ke, Ut += c * ht, Qt += c * ft, c = $[12], we += c * Qe, be += c * Ge, ye += c * et, pe += c * tt, Se += c * rt, Ae += c * Ye, ge += c * ot, Re += c * at, Te += c * ct, Fe += c * ut, Le += c * lt, Ue += c * nt, zt += c * it, Ut += c * Ke, Qt += c * ht, Nt += c * ft, c = $[13], be += c * Qe, ye += c * Ge, pe += c * et, Se += c * tt, Ae += c * rt, ge += c * Ye, Re += c * ot, Te += c * at, Fe += c * ct, Le += c * ut, Ue += c * lt, zt += c * nt, Ut += c * it, Qt += c * Ke, Nt += c * ht, Et += c * ft, c = $[14], ye += c * Qe, pe += c * Ge, Se += c * et, Ae += c * tt, ge += c * rt, Re += c * Ye, Te += c * ot, Fe += c * at, Le += c * ct, Ue += c * ut, zt += c * lt, Ut += c * nt, Qt += c * it, Nt += c * Ke, Et += c * ht, Cr += c * ft, c = $[15], pe += c * Qe, Se += c * Ge, Ae += c * et, ge += c * tt, Re += c * rt, Te += c * Ye, Fe += c * ot, Le += c * at, Ue += c * ct, zt += c * ut, Ut += c * lt, Qt += c * nt, Nt += c * it, Et += c * Ke, Cr += c * ht, Hr += c * ft, ie += 38 * Se, oe += 38 * Ae, xe += 38 * ge, ve += 38 * Re, Ne += 38 * Te, Pe += 38 * Fe, Be += 38 * Le, ke += 38 * Ue, Ce += 38 * zt, De += 38 * Ut, Ie += 38 * Qt, Ee += 38 * Nt, we += 38 * Et, be += 38 * Cr, ye += 38 * Hr, A = 1, c = ie + A + 65535, A = Math.floor(c / 65536), ie = c - A * 65536, c = oe + A + 65535, A = Math.floor(c / 65536), oe = c - A * 65536, c = xe + A + 65535, A = Math.floor(c / 65536), xe = c - A * 65536, c = ve + A + 65535, A = Math.floor(c / 65536), ve = c - A * 65536, c = Ne + A + 65535, A = Math.floor(c / 65536), Ne = c - A * 65536, c = Pe + A + 65535, A = Math.floor(c / 65536), Pe = c - A * 65536, c = Be + A + 65535, A = Math.floor(c / 65536), Be = c - A * 65536, c = ke + A + 65535, A = Math.floor(c / 65536), ke = c - A * 65536, c = Ce + A + 65535, A = Math.floor(c / 65536), Ce = c - A * 65536, c = De + A + 65535, A = Math.floor(c / 65536), De = c - A * 65536, c = Ie + A + 65535, A = Math.floor(c / 65536), Ie = c - A * 65536, c = Ee + A + 65535, A = Math.floor(c / 65536), Ee = c - A * 65536, c = we + A + 65535, A = Math.floor(c / 65536), we = c - A * 65536, c = be + A + 65535, A = Math.floor(c / 65536), be = c - A * 65536, c = ye + A + 65535, A = Math.floor(c / 65536), ye = c - A * 65536, c = pe + A + 65535, A = Math.floor(c / 65536), pe = c - A * 65536, ie += A - 1 + 37 * (A - 1), A = 1, c = ie + A + 65535, A = Math.floor(c / 65536), ie = c - A * 65536, c = oe + A + 65535, A = Math.floor(c / 65536), oe = c - A * 65536, c = xe + A + 65535, A = Math.floor(c / 65536), xe = c - A * 65536, c = ve + A + 65535, A = Math.floor(c / 65536), ve = c - A * 65536, c = Ne + A + 65535, A = Math.floor(c / 65536), Ne = c - A * 65536, c = Pe + A + 65535, A = Math.floor(c / 65536), Pe = c - A * 65536, c = Be + A + 65535, A = Math.floor(c / 65536), Be = c - A * 65536, c = ke + A + 65535, A = Math.floor(c / 65536), ke = c - A * 65536, c = Ce + A + 65535, A = Math.floor(c / 65536), Ce = c - A * 65536, c = De + A + 65535, A = Math.floor(c / 65536), De = c - A * 65536, c = Ie + A + 65535, A = Math.floor(c / 65536), Ie = c - A * 65536, c = Ee + A + 65535, A = Math.floor(c / 65536), Ee = c - A * 65536, c = we + A + 65535, A = Math.floor(c / 65536), we = c - A * 65536, c = be + A + 65535, A = Math.floor(c / 65536), be = c - A * 65536, c = ye + A + 65535, A = Math.floor(c / 65536), ye = c - A * 65536, c = pe + A + 65535, A = Math.floor(c / 65536), pe = c - A * 65536, ie += A - 1 + 37 * (A - 1), q[0] = ie, q[1] = oe, q[2] = xe, q[3] = ve, q[4] = Ne, q[5] = Pe, q[6] = Be, q[7] = ke, q[8] = Ce, q[9] = De, q[10] = Ie, q[11] = Ee, q[12] = we, q[13] = be, q[14] = ye, q[15] = pe;
  }
  function g(q, $) {
    o(q, $, $);
  }
  function T(q, $) {
    const P = i();
    let c;
    for (c = 0; c < 16; c++)
      P[c] = $[c];
    for (c = 253; c >= 0; c--)
      g(P, P), c !== 2 && c !== 4 && o(P, P, $);
    for (c = 0; c < 16; c++)
      q[c] = P[c];
  }
  function F(q, $) {
    const P = i();
    let c;
    for (c = 0; c < 16; c++)
      P[c] = $[c];
    for (c = 250; c >= 0; c--)
      g(P, P), c !== 1 && o(P, P, $);
    for (c = 0; c < 16; c++)
      q[c] = P[c];
  }
  function B(q, $) {
    const P = i(), c = i(), A = i(), ie = i(), oe = i(), xe = i(), ve = i(), Ne = i(), Pe = i();
    p(P, q[1], q[0]), p(Pe, $[1], $[0]), o(P, P, Pe), b(c, q[0], q[1]), b(Pe, $[0], $[1]), o(c, c, Pe), o(A, q[3], $[3]), o(A, A, h), o(ie, q[2], $[2]), b(ie, ie, ie), p(oe, c, P), p(xe, ie, A), b(ve, ie, A), b(Ne, c, P), o(q[0], oe, xe), o(q[1], Ne, ve), o(q[2], ve, xe), o(q[3], oe, Ne);
  }
  function W(q, $, P) {
    for (let c = 0; c < 4; c++)
      C(q[c], $[c], P);
  }
  function ne(q, $) {
    const P = i(), c = i(), A = i();
    T(A, $[2]), o(P, $[0], A), o(c, $[1], A), D(q, c), q[31] ^= x(P) << 7;
  }
  function N(q, $, P) {
    m(q[0], u), m(q[1], a), m(q[2], a), m(q[3], u);
    for (let c = 255; c >= 0; --c) {
      const A = P[c / 8 | 0] >> (c & 7) & 1;
      W(q, $, A), B($, q), B(q, q), W(q, $, A);
    }
  }
  function j(q, $) {
    const P = [i(), i(), i(), i()];
    m(P[0], f), m(P[1], d), m(P[2], a), o(P[3], f, d), N(q, P, $);
  }
  function re(q) {
    if (q.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const $ = (0, r.hash)(q);
    $[0] &= 248, $[31] &= 127, $[31] |= 64;
    const P = new Uint8Array(32), c = [i(), i(), i(), i()];
    j(c, $), ne(P, c);
    const A = new Uint8Array(64);
    return A.set(q), A.set(P, 32), {
      publicKey: P,
      secretKey: A
    };
  }
  t.generateKeyPairFromSeed = re;
  function G(q) {
    const $ = (0, e.randomBytes)(32, q), P = re($);
    return (0, n.wipe)($), P;
  }
  t.generateKeyPair = G;
  function H(q) {
    if (q.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(q.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = H;
  const Y = new Float64Array([
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
  function K(q, $) {
    let P, c, A, ie;
    for (c = 63; c >= 32; --c) {
      for (P = 0, A = c - 32, ie = c - 12; A < ie; ++A)
        $[A] += P - 16 * $[c] * Y[A - (c - 32)], P = Math.floor(($[A] + 128) / 256), $[A] -= P * 256;
      $[A] += P, $[c] = 0;
    }
    for (P = 0, A = 0; A < 32; A++)
      $[A] += P - ($[31] >> 4) * Y[A], P = $[A] >> 8, $[A] &= 255;
    for (A = 0; A < 32; A++)
      $[A] -= P * Y[A];
    for (c = 0; c < 32; c++)
      $[c + 1] += $[c] >> 8, q[c] = $[c] & 255;
  }
  function J(q) {
    const $ = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      $[P] = q[P];
    for (let P = 0; P < 64; P++)
      q[P] = 0;
    K(q, $);
  }
  function de(q, $) {
    const P = new Float64Array(64), c = [i(), i(), i(), i()], A = (0, r.hash)(q.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const ie = new Uint8Array(64);
    ie.set(A.subarray(32), 32);
    const oe = new r.SHA512();
    oe.update(ie.subarray(32)), oe.update($);
    const xe = oe.digest();
    oe.clean(), J(xe), j(c, xe), ne(ie, c), oe.reset(), oe.update(ie.subarray(0, 32)), oe.update(q.subarray(32)), oe.update($);
    const ve = oe.digest();
    J(ve);
    for (let Ne = 0; Ne < 32; Ne++)
      P[Ne] = xe[Ne];
    for (let Ne = 0; Ne < 32; Ne++)
      for (let Pe = 0; Pe < 32; Pe++)
        P[Ne + Pe] += ve[Ne] * A[Pe];
    return K(ie.subarray(32), P), ie;
  }
  t.sign = de;
  function te(q, $) {
    const P = i(), c = i(), A = i(), ie = i(), oe = i(), xe = i(), ve = i();
    return m(q[2], a), w(q[1], $), g(A, q[1]), o(ie, A, l), p(A, A, q[2]), b(ie, q[2], ie), g(oe, ie), g(xe, oe), o(ve, xe, oe), o(P, ve, A), o(P, P, ie), F(P, P), o(P, P, A), o(P, P, ie), o(P, P, ie), o(q[0], P, ie), g(c, q[0]), o(c, c, ie), _(c, A) && o(q[0], q[0], v), g(c, q[0]), o(c, c, ie), _(c, A) ? -1 : (x(q[0]) === $[31] >> 7 && p(q[0], u, q[0]), o(q[3], q[0], q[1]), 0);
  }
  function he(q, $, P) {
    const c = new Uint8Array(32), A = [i(), i(), i(), i()], ie = [i(), i(), i(), i()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (te(ie, q))
      return !1;
    const oe = new r.SHA512();
    oe.update(P.subarray(0, 32)), oe.update(q), oe.update($);
    const xe = oe.digest();
    return J(xe), N(A, ie, xe), j(ie, P.subarray(32)), B(A, ie), ne(c, A), !z(P, c);
  }
  t.verify = he;
  function ae(q) {
    let $ = [i(), i(), i(), i()];
    if (te($, q))
      throw new Error("Ed25519: invalid public key");
    let P = i(), c = i(), A = $[1];
    b(P, a, A), p(c, a, A), T(c, c), o(P, P, c);
    let ie = new Uint8Array(32);
    return D(ie, P), ie;
  }
  t.convertPublicKeyToX25519 = ae;
  function fe(q) {
    const $ = (0, r.hash)(q.subarray(0, 32));
    $[0] &= 248, $[31] &= 127, $[31] |= 64;
    const P = new Uint8Array($.subarray(0, 32));
    return (0, n.wipe)($), P;
  }
  t.convertSecretKeyToX25519 = fe;
})(Fs);
const lf = "EdDSA", hf = "JWT", Nc = ".", Rc = "base64url", ff = "utf8", df = "utf8", pf = ":", gf = "did", yf = "key", Ko = "base58btc", vf = "z", bf = "K36", mf = 32;
function Us(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Tc(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Us(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function bs(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = Tc(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return Us(r);
}
function wf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(S) {
    if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0)
      return "";
    for (var C = 0, D = 0, z = 0, _ = S.length; z !== _ && S[z] === 0; )
      z++, C++;
    for (var x = (_ - z) * f + 1 >>> 0, w = new Uint8Array(x); z !== _; ) {
      for (var b = S[z], p = 0, o = x - 1; (b !== 0 || p < D) && o !== -1; o--, p++)
        b += 256 * w[o] >>> 0, w[o] = b % a >>> 0, b = b / a >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      D = p, z++;
    }
    for (var g = x - D; g !== x && w[g] === 0; )
      g++;
    for (var T = l.repeat(C); g < x; ++g)
      T += t.charAt(w[g]);
    return T;
  }
  function v(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return new Uint8Array();
    var C = 0;
    if (S[C] !== " ") {
      for (var D = 0, z = 0; S[C] === l; )
        D++, C++;
      for (var _ = (S.length - C) * h + 1 >>> 0, x = new Uint8Array(_); S[C]; ) {
        var w = r[S.charCodeAt(C)];
        if (w === 255)
          return;
        for (var b = 0, p = _ - 1; (w !== 0 || b < z) && p !== -1; p--, b++)
          w += a * x[p] >>> 0, x[p] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        z = b, C++;
      }
      if (S[C] !== " ") {
        for (var o = _ - z; o !== _ && x[o] === 0; )
          o++;
        for (var g = new Uint8Array(D + (_ - o)), T = D; o !== _; )
          g[T++] = x[o++];
        return g;
      }
    }
  }
  function m(S) {
    var C = v(S);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: v,
    decode: m
  };
}
var _f = wf, Ef = _f;
const Sf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Df = (t) => new TextEncoder().encode(t), If = (t) => new TextDecoder().decode(t);
class Of {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class xf {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
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
    return Pc(this, e);
  }
}
class Cf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Pc(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Pc = (t, e) => new Cf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Af {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Of(e, r, n), this.decoder = new xf(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const gi = ({ name: t, prefix: e, encode: r, decode: n }) => new Af(t, e, r, n), Rn = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Ef(r, e);
  return gi({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => Sf(i(s))
  });
}, Nf = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | d, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Rf = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[i & a >> u];
  if (u && (s += e[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, wt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => gi({
  prefix: e,
  name: t,
  encode(i) {
    return Rf(i, n, r);
  },
  decode(i) {
    return Nf(i, n, r, t);
  }
}), Tf = gi({
  prefix: "\0",
  name: "identity",
  encode: (t) => If(t),
  decode: (t) => Df(t)
}), Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Tf
}, Symbol.toStringTag, { value: "Module" })), Lf = wt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Lf
}, Symbol.toStringTag, { value: "Module" })), Uf = wt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Uf
}, Symbol.toStringTag, { value: "Module" })), jf = Rn({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: jf
}, Symbol.toStringTag, { value: "Module" })), qf = wt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), zf = wt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: qf,
  base16upper: zf
}, Symbol.toStringTag, { value: "Module" })), kf = wt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Kf = wt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Hf = wt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Vf = wt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Wf = wt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Gf = wt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Yf = wt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Jf = wt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Qf = wt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: kf,
  base32hex: Wf,
  base32hexpad: Yf,
  base32hexpadupper: Jf,
  base32hexupper: Gf,
  base32pad: Hf,
  base32padupper: Vf,
  base32upper: Kf,
  base32z: Qf
}, Symbol.toStringTag, { value: "Module" })), Zf = Rn({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), ed = Rn({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Zf,
  base36upper: ed
}, Symbol.toStringTag, { value: "Module" })), rd = Rn({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), nd = Rn({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: rd,
  base58flickr: nd
}, Symbol.toStringTag, { value: "Module" })), sd = wt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), od = wt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), ad = wt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), cd = wt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: sd,
  base64pad: od,
  base64url: ad,
  base64urlpad: cd
}, Symbol.toStringTag, { value: "Module" })), Lc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), ld = Lc.reduce((t, e, r) => (t[r] = e, t), []), hd = Lc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function fd(t) {
  return t.reduce((e, r) => (e += ld[r], e), "");
}
function dd(t) {
  const e = [];
  for (const r of t) {
    const n = hd[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const pd = gi({
  prefix: "🚀",
  name: "base256emoji",
  encode: fd,
  decode: dd
}), gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: pd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Ho = {
  ...Pf,
  ...Ff,
  ...Mf,
  ...$f,
  ...Bf,
  ...Xf,
  ...td,
  ...id,
  ...ud,
  ...gd
};
function Fc(t, e, r, n) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: n }
  };
}
const Vo = Fc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Yi = Fc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Tc(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Uc = {
  utf8: Vo,
  "utf-8": Vo,
  hex: Ho.base16,
  latin1: Yi,
  ascii: Yi,
  binary: Yi,
  ...Ho
};
function Ft(t, e = "utf8") {
  const r = Uc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function qt(t, e = "utf8") {
  const r = Uc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Us(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function si(t) {
  return Ft(qt(Ls(t), ff), Rc);
}
function Mc(t) {
  const e = qt(bf, Ko), r = vf + Ft(bs([e, t]), Ko);
  return [gf, yf, r].join(pf);
}
function yd(t) {
  return Ft(t, Rc);
}
function vd(t) {
  return qt([si(t.header), si(t.payload)].join(Nc), df);
}
function bd(t) {
  return [
    si(t.header),
    si(t.payload),
    yd(t.signature)
  ].join(Nc);
}
function Wo(t = nn.randomBytes(mf)) {
  return Fs.generateKeyPairFromSeed(t);
}
async function md(t, e, r, n, i = ue.fromMiliseconds(Date.now())) {
  const s = { alg: lf, typ: hf }, u = Mc(n.publicKey), a = i + r, l = { iss: u, sub: t, aud: e, iat: i, exp: a }, h = vd({ header: s, payload: l }), f = Fs.sign(n.secretKey, h);
  return bd({ header: s, payload: l, signature: f });
}
var Ms = {}, yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
var It = me, ms = Ht, wd = 20;
function _d(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], v = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], S = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], C = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], D = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], z = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], _ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], x = n, w = i, b = s, p = u, o = a, g = l, T = h, F = f, B = d, W = v, ne = m, N = S, j = C, re = D, G = z, H = _, Y = 0; Y < wd; Y += 2)
    x = x + o | 0, j ^= x, j = j >>> 32 - 16 | j << 16, B = B + j | 0, o ^= B, o = o >>> 32 - 12 | o << 12, w = w + g | 0, re ^= w, re = re >>> 32 - 16 | re << 16, W = W + re | 0, g ^= W, g = g >>> 32 - 12 | g << 12, b = b + T | 0, G ^= b, G = G >>> 32 - 16 | G << 16, ne = ne + G | 0, T ^= ne, T = T >>> 32 - 12 | T << 12, p = p + F | 0, H ^= p, H = H >>> 32 - 16 | H << 16, N = N + H | 0, F ^= N, F = F >>> 32 - 12 | F << 12, b = b + T | 0, G ^= b, G = G >>> 32 - 8 | G << 8, ne = ne + G | 0, T ^= ne, T = T >>> 32 - 7 | T << 7, p = p + F | 0, H ^= p, H = H >>> 32 - 8 | H << 8, N = N + H | 0, F ^= N, F = F >>> 32 - 7 | F << 7, w = w + g | 0, re ^= w, re = re >>> 32 - 8 | re << 8, W = W + re | 0, g ^= W, g = g >>> 32 - 7 | g << 7, x = x + o | 0, j ^= x, j = j >>> 32 - 8 | j << 8, B = B + j | 0, o ^= B, o = o >>> 32 - 7 | o << 7, x = x + g | 0, H ^= x, H = H >>> 32 - 16 | H << 16, ne = ne + H | 0, g ^= ne, g = g >>> 32 - 12 | g << 12, w = w + T | 0, j ^= w, j = j >>> 32 - 16 | j << 16, N = N + j | 0, T ^= N, T = T >>> 32 - 12 | T << 12, b = b + F | 0, re ^= b, re = re >>> 32 - 16 | re << 16, B = B + re | 0, F ^= B, F = F >>> 32 - 12 | F << 12, p = p + o | 0, G ^= p, G = G >>> 32 - 16 | G << 16, W = W + G | 0, o ^= W, o = o >>> 32 - 12 | o << 12, b = b + F | 0, re ^= b, re = re >>> 32 - 8 | re << 8, B = B + re | 0, F ^= B, F = F >>> 32 - 7 | F << 7, p = p + o | 0, G ^= p, G = G >>> 32 - 8 | G << 8, W = W + G | 0, o ^= W, o = o >>> 32 - 7 | o << 7, w = w + T | 0, j ^= w, j = j >>> 32 - 8 | j << 8, N = N + j | 0, T ^= N, T = T >>> 32 - 7 | T << 7, x = x + g | 0, H ^= x, H = H >>> 32 - 8 | H << 8, ne = ne + H | 0, g ^= ne, g = g >>> 32 - 7 | g << 7;
  It.writeUint32LE(x + n | 0, t, 0), It.writeUint32LE(w + i | 0, t, 4), It.writeUint32LE(b + s | 0, t, 8), It.writeUint32LE(p + u | 0, t, 12), It.writeUint32LE(o + a | 0, t, 16), It.writeUint32LE(g + l | 0, t, 20), It.writeUint32LE(T + h | 0, t, 24), It.writeUint32LE(F + f | 0, t, 28), It.writeUint32LE(B + d | 0, t, 32), It.writeUint32LE(W + v | 0, t, 36), It.writeUint32LE(ne + m | 0, t, 40), It.writeUint32LE(N + S | 0, t, 44), It.writeUint32LE(j + C | 0, t, 48), It.writeUint32LE(re + D | 0, t, 52), It.writeUint32LE(G + z | 0, t, 56), It.writeUint32LE(H + _ | 0, t, 60);
}
function jc(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - e.length, s.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, u = i;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    _d(a, s, t);
    for (var h = l; h < l + 64 && h < r.length; h++)
      n[h] = r[h] ^ a[h - l];
    Sd(s, 0, u);
  }
  return ms.wipe(a), i === 0 && ms.wipe(s), n;
}
yi.streamXOR = jc;
function Ed(t, e, r, n) {
  return n === void 0 && (n = 0), ms.wipe(r), jc(t, e, r, r, n);
}
yi.stream = Ed;
function Sd(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var $c = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
function Dd(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
xr.select = Dd;
function Id(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
xr.lessOrEqual = Id;
function qc(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
xr.compare = qc;
function Od(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : qc(t, e) !== 0;
}
xr.equal = Od;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = xr, r = Ht;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function u(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var h = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | h << 3) & 8191;
        var f = a[4] | a[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var d = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var v = a[8] | a[9] << 8;
        this._r[4] = (d >>> 4 | v << 12) & 255, this._r[5] = v >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (v >>> 14 | m << 2) & 8191;
        var S = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | S << 5) & 8065;
        var C = a[14] | a[15] << 8;
        this._r[8] = (S >>> 8 | C << 8) & 8191, this._r[9] = C >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, h) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], v = this._h[1], m = this._h[2], S = this._h[3], C = this._h[4], D = this._h[5], z = this._h[6], _ = this._h[7], x = this._h[8], w = this._h[9], b = this._r[0], p = this._r[1], o = this._r[2], g = this._r[3], T = this._r[4], F = this._r[5], B = this._r[6], W = this._r[7], ne = this._r[8], N = this._r[9]; h >= 16; ) {
          var j = a[l + 0] | a[l + 1] << 8;
          d += j & 8191;
          var re = a[l + 2] | a[l + 3] << 8;
          v += (j >>> 13 | re << 3) & 8191;
          var G = a[l + 4] | a[l + 5] << 8;
          m += (re >>> 10 | G << 6) & 8191;
          var H = a[l + 6] | a[l + 7] << 8;
          S += (G >>> 7 | H << 9) & 8191;
          var Y = a[l + 8] | a[l + 9] << 8;
          C += (H >>> 4 | Y << 12) & 8191, D += Y >>> 1 & 8191;
          var K = a[l + 10] | a[l + 11] << 8;
          z += (Y >>> 14 | K << 2) & 8191;
          var J = a[l + 12] | a[l + 13] << 8;
          _ += (K >>> 11 | J << 5) & 8191;
          var de = a[l + 14] | a[l + 15] << 8;
          x += (J >>> 8 | de << 8) & 8191, w += de >>> 5 | f;
          var te = 0, he = te;
          he += d * b, he += v * (5 * N), he += m * (5 * ne), he += S * (5 * W), he += C * (5 * B), te = he >>> 13, he &= 8191, he += D * (5 * F), he += z * (5 * T), he += _ * (5 * g), he += x * (5 * o), he += w * (5 * p), te += he >>> 13, he &= 8191;
          var ae = te;
          ae += d * p, ae += v * b, ae += m * (5 * N), ae += S * (5 * ne), ae += C * (5 * W), te = ae >>> 13, ae &= 8191, ae += D * (5 * B), ae += z * (5 * F), ae += _ * (5 * T), ae += x * (5 * g), ae += w * (5 * o), te += ae >>> 13, ae &= 8191;
          var fe = te;
          fe += d * o, fe += v * p, fe += m * b, fe += S * (5 * N), fe += C * (5 * ne), te = fe >>> 13, fe &= 8191, fe += D * (5 * W), fe += z * (5 * B), fe += _ * (5 * F), fe += x * (5 * T), fe += w * (5 * g), te += fe >>> 13, fe &= 8191;
          var q = te;
          q += d * g, q += v * o, q += m * p, q += S * b, q += C * (5 * N), te = q >>> 13, q &= 8191, q += D * (5 * ne), q += z * (5 * W), q += _ * (5 * B), q += x * (5 * F), q += w * (5 * T), te += q >>> 13, q &= 8191;
          var $ = te;
          $ += d * T, $ += v * g, $ += m * o, $ += S * p, $ += C * b, te = $ >>> 13, $ &= 8191, $ += D * (5 * N), $ += z * (5 * ne), $ += _ * (5 * W), $ += x * (5 * B), $ += w * (5 * F), te += $ >>> 13, $ &= 8191;
          var P = te;
          P += d * F, P += v * T, P += m * g, P += S * o, P += C * p, te = P >>> 13, P &= 8191, P += D * b, P += z * (5 * N), P += _ * (5 * ne), P += x * (5 * W), P += w * (5 * B), te += P >>> 13, P &= 8191;
          var c = te;
          c += d * B, c += v * F, c += m * T, c += S * g, c += C * o, te = c >>> 13, c &= 8191, c += D * p, c += z * b, c += _ * (5 * N), c += x * (5 * ne), c += w * (5 * W), te += c >>> 13, c &= 8191;
          var A = te;
          A += d * W, A += v * B, A += m * F, A += S * T, A += C * g, te = A >>> 13, A &= 8191, A += D * o, A += z * p, A += _ * b, A += x * (5 * N), A += w * (5 * ne), te += A >>> 13, A &= 8191;
          var ie = te;
          ie += d * ne, ie += v * W, ie += m * B, ie += S * F, ie += C * T, te = ie >>> 13, ie &= 8191, ie += D * g, ie += z * o, ie += _ * p, ie += x * b, ie += w * (5 * N), te += ie >>> 13, ie &= 8191;
          var oe = te;
          oe += d * N, oe += v * ne, oe += m * W, oe += S * B, oe += C * F, te = oe >>> 13, oe &= 8191, oe += D * T, oe += z * g, oe += _ * o, oe += x * p, oe += w * b, te += oe >>> 13, oe &= 8191, te = (te << 2) + te | 0, te = te + he | 0, he = te & 8191, te = te >>> 13, ae += te, d = he, v = ae, m = fe, S = q, C = $, D = P, z = c, _ = A, x = ie, w = oe, l += 16, h -= 16;
        }
        this._h[0] = d, this._h[1] = v, this._h[2] = m, this._h[3] = S, this._h[4] = C, this._h[5] = D, this._h[6] = z, this._h[7] = _, this._h[8] = x, this._h[9] = w;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var h = new Uint16Array(10), f, d, v, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, m = 1; m < 10; m++)
          h[m] = this._h[m] + f, f = h[m] >>> 13, h[m] &= 8191;
        for (h[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          h[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | h[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, v = this._h[0] + this._pad[0], this._h[0] = v & 65535, m = 1; m < 8; m++)
          v = (this._h[m] + this._pad[m] | 0) + (v >>> 16) | 0, this._h[m] = v & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, h = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = a[l + d];
          if (h -= f, l += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(a, l, f), l += f, h -= f), h) {
          for (var d = 0; d < h; d++)
            this._buffer[this._leftover + d] = a[l + d];
          this._leftover += h;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, u.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  t.Poly1305 = n;
  function i(u, a) {
    var l = new n(u);
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.oneTimeAuth = i;
  function s(u, a) {
    return u.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(u, a);
  }
  t.equal = s;
})($c);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = yi, r = $c, n = Ht, i = me, s = xr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return l.prototype.seal = function(h, f, d, v) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var S = new Uint8Array(32);
        e.stream(this._key, m, S, 4);
        var C = f.length + this.tagLength, D;
        if (v) {
          if (v.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          D = v;
        } else
          D = new Uint8Array(C);
        return e.streamXOR(this._key, m, f, D, 4), this._authenticate(D.subarray(D.length - this.tagLength, D.length), S, D.subarray(0, D.length - this.tagLength), d), n.wipe(m), D;
      }, l.prototype.open = function(h, f, d, v) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var S = new Uint8Array(32);
        e.stream(this._key, m, S, 4);
        var C = new Uint8Array(this.tagLength);
        if (this._authenticate(C, S, f.subarray(0, f.length - this.tagLength), d), !s.equal(C, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var D = f.length - this.tagLength, z;
        if (v) {
          if (v.length !== D)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          z = v;
        } else
          z = new Uint8Array(D);
        return e.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), z, 4), n.wipe(m), z;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(h, f, d, v) {
        var m = new r.Poly1305(f);
        v && (m.update(v), v.length % 16 > 0 && m.update(u.subarray(v.length % 16))), m.update(d), d.length % 16 > 0 && m.update(u.subarray(d.length % 16));
        var S = new Uint8Array(8);
        v && i.writeUint64LE(v.length, S), m.update(S), i.writeUint64LE(d.length, S), m.update(S);
        for (var C = m.digest(), D = 0; D < C.length; D++)
          h[D] = C[D];
        m.clean(), n.wipe(C), n.wipe(S);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(Ms);
var zc = {}, Tn = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
function xd(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
js.isSerializableHash = xd;
Object.defineProperty(Tn, "__esModule", { value: !0 });
var ar = js, Cd = xr, Ad = Ht, Bc = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 54;
      this._inner.update(n);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 106;
      this._outer.update(n), ar.isSerializableHash(this._inner) && ar.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Ad.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!ar.isSerializableHash(this._inner) || !ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      ar.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), ar.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!ar.isSerializableHash(this._inner) || !ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Tn.HMAC = Bc;
function Nd(t, e, r) {
  var n = new Bc(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Tn.hmac = Nd;
Tn.equal = Cd.equal;
Object.defineProperty(zc, "__esModule", { value: !0 });
var Go = Tn, Yo = Ht, Rd = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = Go.hmac(this._hash, n, r);
      this._hmac = new Go.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), n = 0; n < r.length; n++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[n] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), Yo.wipe(this._buffer), Yo.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Td = zc.HKDF = Rd, vi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = Ht;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function a() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, v = h << 3, m = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var S = f + 1; S < m - 8; S++)
            this._buffer[S] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(v, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var S = 0; S < this.digestLength / 4; S++)
          e.writeUint32BE(this._state[S], l, S * 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  t.SHA256 = n;
  var i = new Int32Array([
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
  function s(a, l, h, f, d) {
    for (; d >= 64; ) {
      for (var v = l[0], m = l[1], S = l[2], C = l[3], D = l[4], z = l[5], _ = l[6], x = l[7], w = 0; w < 16; w++) {
        var b = f + w * 4;
        a[w] = e.readUint32BE(h, b);
      }
      for (var w = 16; w < 64; w++) {
        var p = a[w - 2], o = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = a[w - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        a[w] = (o + a[w - 7] | 0) + (g + a[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var o = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & z ^ ~D & _) | 0) + (x + (i[w] + a[w] | 0) | 0) | 0, g = ((v >>> 2 | v << 32 - 2) ^ (v >>> 13 | v << 32 - 13) ^ (v >>> 22 | v << 32 - 22)) + (v & m ^ v & S ^ m & S) | 0;
        x = _, _ = z, z = D, D = C + o | 0, C = S, S = m, m = v, v = o + g | 0;
      }
      l[0] += v, l[1] += m, l[2] += S, l[3] += C, l[4] += D, l[5] += z, l[6] += _, l[7] += x, f += 64, d -= 64;
    }
    return f;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(vi);
var $s = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = nn, r = Ht;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(w) {
    const b = new Float64Array(16);
    if (w)
      for (let p = 0; p < w.length; p++)
        b[p] = w[p];
    return b;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function u(w) {
    let b = 1;
    for (let p = 0; p < 16; p++) {
      let o = w[p] + b + 65535;
      b = Math.floor(o / 65536), w[p] = o - b * 65536;
    }
    w[0] += b - 1 + 37 * (b - 1);
  }
  function a(w, b, p) {
    const o = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const T = o & (w[g] ^ b[g]);
      w[g] ^= T, b[g] ^= T;
    }
  }
  function l(w, b) {
    const p = n(), o = n();
    for (let g = 0; g < 16; g++)
      o[g] = b[g];
    u(o), u(o), u(o);
    for (let g = 0; g < 2; g++) {
      p[0] = o[0] - 65517;
      for (let F = 1; F < 15; F++)
        p[F] = o[F] - 65535 - (p[F - 1] >> 16 & 1), p[F - 1] &= 65535;
      p[15] = o[15] - 32767 - (p[14] >> 16 & 1);
      const T = p[15] >> 16 & 1;
      p[14] &= 65535, a(o, p, 1 - T);
    }
    for (let g = 0; g < 16; g++)
      w[2 * g] = o[g] & 255, w[2 * g + 1] = o[g] >> 8;
  }
  function h(w, b) {
    for (let p = 0; p < 16; p++)
      w[p] = b[2 * p] + (b[2 * p + 1] << 8);
    w[15] &= 32767;
  }
  function f(w, b, p) {
    for (let o = 0; o < 16; o++)
      w[o] = b[o] + p[o];
  }
  function d(w, b, p) {
    for (let o = 0; o < 16; o++)
      w[o] = b[o] - p[o];
  }
  function v(w, b, p) {
    let o, g, T = 0, F = 0, B = 0, W = 0, ne = 0, N = 0, j = 0, re = 0, G = 0, H = 0, Y = 0, K = 0, J = 0, de = 0, te = 0, he = 0, ae = 0, fe = 0, q = 0, $ = 0, P = 0, c = 0, A = 0, ie = 0, oe = 0, xe = 0, ve = 0, Ne = 0, Pe = 0, Be = 0, ke = 0, Ce = p[0], De = p[1], Ie = p[2], Ee = p[3], we = p[4], be = p[5], ye = p[6], pe = p[7], Se = p[8], Ae = p[9], ge = p[10], Re = p[11], Te = p[12], Fe = p[13], Le = p[14], Ue = p[15];
    o = b[0], T += o * Ce, F += o * De, B += o * Ie, W += o * Ee, ne += o * we, N += o * be, j += o * ye, re += o * pe, G += o * Se, H += o * Ae, Y += o * ge, K += o * Re, J += o * Te, de += o * Fe, te += o * Le, he += o * Ue, o = b[1], F += o * Ce, B += o * De, W += o * Ie, ne += o * Ee, N += o * we, j += o * be, re += o * ye, G += o * pe, H += o * Se, Y += o * Ae, K += o * ge, J += o * Re, de += o * Te, te += o * Fe, he += o * Le, ae += o * Ue, o = b[2], B += o * Ce, W += o * De, ne += o * Ie, N += o * Ee, j += o * we, re += o * be, G += o * ye, H += o * pe, Y += o * Se, K += o * Ae, J += o * ge, de += o * Re, te += o * Te, he += o * Fe, ae += o * Le, fe += o * Ue, o = b[3], W += o * Ce, ne += o * De, N += o * Ie, j += o * Ee, re += o * we, G += o * be, H += o * ye, Y += o * pe, K += o * Se, J += o * Ae, de += o * ge, te += o * Re, he += o * Te, ae += o * Fe, fe += o * Le, q += o * Ue, o = b[4], ne += o * Ce, N += o * De, j += o * Ie, re += o * Ee, G += o * we, H += o * be, Y += o * ye, K += o * pe, J += o * Se, de += o * Ae, te += o * ge, he += o * Re, ae += o * Te, fe += o * Fe, q += o * Le, $ += o * Ue, o = b[5], N += o * Ce, j += o * De, re += o * Ie, G += o * Ee, H += o * we, Y += o * be, K += o * ye, J += o * pe, de += o * Se, te += o * Ae, he += o * ge, ae += o * Re, fe += o * Te, q += o * Fe, $ += o * Le, P += o * Ue, o = b[6], j += o * Ce, re += o * De, G += o * Ie, H += o * Ee, Y += o * we, K += o * be, J += o * ye, de += o * pe, te += o * Se, he += o * Ae, ae += o * ge, fe += o * Re, q += o * Te, $ += o * Fe, P += o * Le, c += o * Ue, o = b[7], re += o * Ce, G += o * De, H += o * Ie, Y += o * Ee, K += o * we, J += o * be, de += o * ye, te += o * pe, he += o * Se, ae += o * Ae, fe += o * ge, q += o * Re, $ += o * Te, P += o * Fe, c += o * Le, A += o * Ue, o = b[8], G += o * Ce, H += o * De, Y += o * Ie, K += o * Ee, J += o * we, de += o * be, te += o * ye, he += o * pe, ae += o * Se, fe += o * Ae, q += o * ge, $ += o * Re, P += o * Te, c += o * Fe, A += o * Le, ie += o * Ue, o = b[9], H += o * Ce, Y += o * De, K += o * Ie, J += o * Ee, de += o * we, te += o * be, he += o * ye, ae += o * pe, fe += o * Se, q += o * Ae, $ += o * ge, P += o * Re, c += o * Te, A += o * Fe, ie += o * Le, oe += o * Ue, o = b[10], Y += o * Ce, K += o * De, J += o * Ie, de += o * Ee, te += o * we, he += o * be, ae += o * ye, fe += o * pe, q += o * Se, $ += o * Ae, P += o * ge, c += o * Re, A += o * Te, ie += o * Fe, oe += o * Le, xe += o * Ue, o = b[11], K += o * Ce, J += o * De, de += o * Ie, te += o * Ee, he += o * we, ae += o * be, fe += o * ye, q += o * pe, $ += o * Se, P += o * Ae, c += o * ge, A += o * Re, ie += o * Te, oe += o * Fe, xe += o * Le, ve += o * Ue, o = b[12], J += o * Ce, de += o * De, te += o * Ie, he += o * Ee, ae += o * we, fe += o * be, q += o * ye, $ += o * pe, P += o * Se, c += o * Ae, A += o * ge, ie += o * Re, oe += o * Te, xe += o * Fe, ve += o * Le, Ne += o * Ue, o = b[13], de += o * Ce, te += o * De, he += o * Ie, ae += o * Ee, fe += o * we, q += o * be, $ += o * ye, P += o * pe, c += o * Se, A += o * Ae, ie += o * ge, oe += o * Re, xe += o * Te, ve += o * Fe, Ne += o * Le, Pe += o * Ue, o = b[14], te += o * Ce, he += o * De, ae += o * Ie, fe += o * Ee, q += o * we, $ += o * be, P += o * ye, c += o * pe, A += o * Se, ie += o * Ae, oe += o * ge, xe += o * Re, ve += o * Te, Ne += o * Fe, Pe += o * Le, Be += o * Ue, o = b[15], he += o * Ce, ae += o * De, fe += o * Ie, q += o * Ee, $ += o * we, P += o * be, c += o * ye, A += o * pe, ie += o * Se, oe += o * Ae, xe += o * ge, ve += o * Re, Ne += o * Te, Pe += o * Fe, Be += o * Le, ke += o * Ue, T += 38 * ae, F += 38 * fe, B += 38 * q, W += 38 * $, ne += 38 * P, N += 38 * c, j += 38 * A, re += 38 * ie, G += 38 * oe, H += 38 * xe, Y += 38 * ve, K += 38 * Ne, J += 38 * Pe, de += 38 * Be, te += 38 * ke, g = 1, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = F + g + 65535, g = Math.floor(o / 65536), F = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ne + g + 65535, g = Math.floor(o / 65536), ne = o - g * 65536, o = N + g + 65535, g = Math.floor(o / 65536), N = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = re + g + 65535, g = Math.floor(o / 65536), re = o - g * 65536, o = G + g + 65535, g = Math.floor(o / 65536), G = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = J + g + 65535, g = Math.floor(o / 65536), J = o - g * 65536, o = de + g + 65535, g = Math.floor(o / 65536), de = o - g * 65536, o = te + g + 65535, g = Math.floor(o / 65536), te = o - g * 65536, o = he + g + 65535, g = Math.floor(o / 65536), he = o - g * 65536, T += g - 1 + 37 * (g - 1), g = 1, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = F + g + 65535, g = Math.floor(o / 65536), F = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ne + g + 65535, g = Math.floor(o / 65536), ne = o - g * 65536, o = N + g + 65535, g = Math.floor(o / 65536), N = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = re + g + 65535, g = Math.floor(o / 65536), re = o - g * 65536, o = G + g + 65535, g = Math.floor(o / 65536), G = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = J + g + 65535, g = Math.floor(o / 65536), J = o - g * 65536, o = de + g + 65535, g = Math.floor(o / 65536), de = o - g * 65536, o = te + g + 65535, g = Math.floor(o / 65536), te = o - g * 65536, o = he + g + 65535, g = Math.floor(o / 65536), he = o - g * 65536, T += g - 1 + 37 * (g - 1), w[0] = T, w[1] = F, w[2] = B, w[3] = W, w[4] = ne, w[5] = N, w[6] = j, w[7] = re, w[8] = G, w[9] = H, w[10] = Y, w[11] = K, w[12] = J, w[13] = de, w[14] = te, w[15] = he;
  }
  function m(w, b) {
    v(w, b, b);
  }
  function S(w, b) {
    const p = n();
    for (let o = 0; o < 16; o++)
      p[o] = b[o];
    for (let o = 253; o >= 0; o--)
      m(p, p), o !== 2 && o !== 4 && v(p, p, b);
    for (let o = 0; o < 16; o++)
      w[o] = p[o];
  }
  function C(w, b) {
    const p = new Uint8Array(32), o = new Float64Array(80), g = n(), T = n(), F = n(), B = n(), W = n(), ne = n();
    for (let G = 0; G < 31; G++)
      p[G] = w[G];
    p[31] = w[31] & 127 | 64, p[0] &= 248, h(o, b);
    for (let G = 0; G < 16; G++)
      T[G] = o[G];
    g[0] = B[0] = 1;
    for (let G = 254; G >= 0; --G) {
      const H = p[G >>> 3] >>> (G & 7) & 1;
      a(g, T, H), a(F, B, H), f(W, g, F), d(g, g, F), f(F, T, B), d(T, T, B), m(B, W), m(ne, g), v(g, F, g), v(F, T, W), f(W, g, F), d(g, g, F), m(T, g), d(F, B, ne), v(g, F, s), f(g, g, B), v(F, F, g), v(g, B, ne), v(B, T, o), m(T, W), a(g, T, H), a(F, B, H);
    }
    for (let G = 0; G < 16; G++)
      o[G + 16] = g[G], o[G + 32] = F[G], o[G + 48] = T[G], o[G + 64] = B[G];
    const N = o.subarray(32), j = o.subarray(16);
    S(N, N), v(j, j, N);
    const re = new Uint8Array(32);
    return l(re, j), re;
  }
  t.scalarMult = C;
  function D(w) {
    return C(w, i);
  }
  t.scalarMultBase = D;
  function z(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const b = new Uint8Array(w);
    return {
      publicKey: D(b),
      secretKey: b
    };
  }
  t.generateKeyPairFromSeed = z;
  function _(w) {
    const b = (0, e.randomBytes)(32, w), p = z(b);
    return (0, r.wipe)(b), p;
  }
  t.generateKeyPair = _;
  function x(w, b, p = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = C(w, b);
    if (p) {
      let g = 0;
      for (let T = 0; T < o.length; T++)
        g |= o[T];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  t.sharedKey = x;
})($s);
var Jo = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Pd = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Ld = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Fd = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Ud = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Md = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), jd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, $d = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Qo = 3, qd = [
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
  ["searchbot", jd]
], Xo = [
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
function zd(t) {
  return t ? Zo(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Md() : typeof navigator < "u" ? Zo(navigator.userAgent) : Kd();
}
function Bd(t) {
  return t !== "" && qd.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function Zo(t) {
  var e = Bd(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Ud();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Qo && (i = Jo(Jo([], i, !0), Hd(Qo - i.length), !0)) : i = [];
  var s = i.join("."), u = kd(t), a = $d.exec(t);
  return a && a[1] ? new Fd(r, s, u, a[1]) : new Pd(r, s, u);
}
function kd(t) {
  for (var e = 0, r = Xo.length; e < r; e++) {
    var n = Xo[e], i = n[0], s = n[1], u = s.exec(t);
    if (u)
      return i;
  }
  return null;
}
function Kd() {
  var t = typeof process < "u" && process.version;
  return t ? new Ld(process.version.slice(1)) : null;
}
function Hd(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
He.getLocalStorage = He.getLocalStorageOrThrow = He.getCrypto = He.getCryptoOrThrow = Kc = He.getLocation = He.getLocationOrThrow = qs = He.getNavigator = He.getNavigatorOrThrow = kc = He.getDocument = He.getDocumentOrThrow = He.getFromWindowOrThrow = He.getFromWindow = void 0;
function Br(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
He.getFromWindow = Br;
function sn(t) {
  const e = Br(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
He.getFromWindowOrThrow = sn;
function Vd() {
  return sn("document");
}
He.getDocumentOrThrow = Vd;
function Wd() {
  return Br("document");
}
var kc = He.getDocument = Wd;
function Gd() {
  return sn("navigator");
}
He.getNavigatorOrThrow = Gd;
function Yd() {
  return Br("navigator");
}
var qs = He.getNavigator = Yd;
function Jd() {
  return sn("location");
}
He.getLocationOrThrow = Jd;
function Qd() {
  return Br("location");
}
var Kc = He.getLocation = Qd;
function Xd() {
  return sn("crypto");
}
He.getCryptoOrThrow = Xd;
function Zd() {
  return Br("crypto");
}
He.getCrypto = Zd;
function ep() {
  return sn("localStorage");
}
He.getLocalStorageOrThrow = ep;
function tp() {
  return Br("localStorage");
}
He.getLocalStorage = tp;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
var Hc = zs.getWindowMetadata = void 0;
const ea = He;
function rp() {
  let t, e;
  try {
    t = ea.getDocumentOrThrow(), e = ea.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), v = [];
    for (let m = 0; m < d.length; m++) {
      const S = d[m], C = S.getAttribute("rel");
      if (C && C.toLowerCase().indexOf("icon") > -1) {
        const D = S.getAttribute("href");
        if (D)
          if (D.toLowerCase().indexOf("https:") === -1 && D.toLowerCase().indexOf("http:") === -1 && D.indexOf("//") !== 0) {
            let z = e.protocol + "//" + e.host;
            if (D.indexOf("/") === 0)
              z += D;
            else {
              const _ = e.pathname.split("/");
              _.pop();
              const x = _.join("/");
              z += x + "/" + D;
            }
            v.push(z);
          } else if (D.indexOf("//") === 0) {
            const z = e.protocol + D;
            v.push(z);
          } else
            v.push(D);
      }
    }
    return v;
  }
  function n(...d) {
    const v = t.getElementsByTagName("meta");
    for (let m = 0; m < v.length; m++) {
      const S = v[m], C = ["itemprop", "property", "name"].map((D) => S.getAttribute(D)).filter((D) => D ? d.includes(D) : !1);
      if (C.length && C) {
        const D = S.getAttribute("content");
        if (D)
          return D;
      }
    }
    return "";
  }
  function i() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = t.title), d;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const u = i(), a = s(), l = e.origin, h = r();
  return {
    description: a,
    url: l,
    icons: h,
    name: u
  };
}
Hc = zs.getWindowMetadata = rp;
var On = {}, np = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Vc = "%[a-f0-9]{2}", ta = new RegExp("(" + Vc + ")|([^%]+?)", "gi"), ra = new RegExp("(" + Vc + ")+", "gi");
function ws(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], ws(r), ws(n));
}
function ip(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(ta) || [], r = 1; r < e.length; r++)
      t = ws(e, r).join(""), e = t.match(ta) || [];
    return t;
  }
}
function sp(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ra.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = ip(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = ra.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var u = i[s];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var op = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return sp(t);
  }
}, ap = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, cp = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var u = n[s], a = t[u];
    (i ? e.indexOf(u) !== -1 : e(u, a, t)) && (r[u] = a);
  }
  return r;
};
(function(t) {
  const e = np, r = op, n = ap, i = cp, s = (_) => _ == null, u = Symbol("encodeFragmentIdentifier");
  function a(_) {
    switch (_.arrayFormat) {
      case "index":
        return (x) => (w, b) => {
          const p = w.length;
          return b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(x, _), "[", p, "]"].join("")] : [
            ...w,
            [f(x, _), "[", f(p, _), "]=", f(b, _)].join("")
          ];
        };
      case "bracket":
        return (x) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(x, _), "[]"].join("")] : [...w, [f(x, _), "[]=", f(b, _)].join("")];
      case "colon-list-separator":
        return (x) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(x, _), ":list="].join("")] : [...w, [f(x, _), ":list=", f(b, _)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const x = _.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (w) => (b, p) => p === void 0 || _.skipNull && p === null || _.skipEmptyString && p === "" ? b : (p = p === null ? "" : p, b.length === 0 ? [[f(w, _), x, f(p, _)].join("")] : [[b, f(p, _)].join(_.arrayFormatSeparator)]);
      }
      default:
        return (x) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, f(x, _)] : [...w, [f(x, _), "=", f(b, _)].join("")];
    }
  }
  function l(_) {
    let x;
    switch (_.arrayFormat) {
      case "index":
        return (w, b, p) => {
          if (x = /\[(\d*)\]$/.exec(w), w = w.replace(/\[\d*\]$/, ""), !x) {
            p[w] = b;
            return;
          }
          p[w] === void 0 && (p[w] = {}), p[w][x[1]] = b;
        };
      case "bracket":
        return (w, b, p) => {
          if (x = /(\[\])$/.exec(w), w = w.replace(/\[\]$/, ""), !x) {
            p[w] = b;
            return;
          }
          if (p[w] === void 0) {
            p[w] = [b];
            return;
          }
          p[w] = [].concat(p[w], b);
        };
      case "colon-list-separator":
        return (w, b, p) => {
          if (x = /(:list)$/.exec(w), w = w.replace(/:list$/, ""), !x) {
            p[w] = b;
            return;
          }
          if (p[w] === void 0) {
            p[w] = [b];
            return;
          }
          p[w] = [].concat(p[w], b);
        };
      case "comma":
      case "separator":
        return (w, b, p) => {
          const o = typeof b == "string" && b.includes(_.arrayFormatSeparator), g = typeof b == "string" && !o && d(b, _).includes(_.arrayFormatSeparator);
          b = g ? d(b, _) : b;
          const T = o || g ? b.split(_.arrayFormatSeparator).map((F) => d(F, _)) : b === null ? b : d(b, _);
          p[w] = T;
        };
      case "bracket-separator":
        return (w, b, p) => {
          const o = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !o) {
            p[w] = b && d(b, _);
            return;
          }
          const g = b === null ? [] : b.split(_.arrayFormatSeparator).map((T) => d(T, _));
          if (p[w] === void 0) {
            p[w] = g;
            return;
          }
          p[w] = [].concat(p[w], g);
        };
      default:
        return (w, b, p) => {
          if (p[w] === void 0) {
            p[w] = b;
            return;
          }
          p[w] = [].concat(p[w], b);
        };
    }
  }
  function h(_) {
    if (typeof _ != "string" || _.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(_, x) {
    return x.encode ? x.strict ? e(_) : encodeURIComponent(_) : _;
  }
  function d(_, x) {
    return x.decode ? r(_) : _;
  }
  function v(_) {
    return Array.isArray(_) ? _.sort() : typeof _ == "object" ? v(Object.keys(_)).sort((x, w) => Number(x) - Number(w)).map((x) => _[x]) : _;
  }
  function m(_) {
    const x = _.indexOf("#");
    return x !== -1 && (_ = _.slice(0, x)), _;
  }
  function S(_) {
    let x = "";
    const w = _.indexOf("#");
    return w !== -1 && (x = _.slice(w)), x;
  }
  function C(_) {
    _ = m(_);
    const x = _.indexOf("?");
    return x === -1 ? "" : _.slice(x + 1);
  }
  function D(_, x) {
    return x.parseNumbers && !Number.isNaN(Number(_)) && typeof _ == "string" && _.trim() !== "" ? _ = Number(_) : x.parseBooleans && _ !== null && (_.toLowerCase() === "true" || _.toLowerCase() === "false") && (_ = _.toLowerCase() === "true"), _;
  }
  function z(_, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), h(x.arrayFormatSeparator);
    const w = l(x), b = /* @__PURE__ */ Object.create(null);
    if (typeof _ != "string" || (_ = _.trim().replace(/^[?#&]/, ""), !_))
      return b;
    for (const p of _.split("&")) {
      if (p === "")
        continue;
      let [o, g] = n(x.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? g : d(g, x), w(d(o, x), g, b);
    }
    for (const p of Object.keys(b)) {
      const o = b[p];
      if (typeof o == "object" && o !== null)
        for (const g of Object.keys(o))
          o[g] = D(o[g], x);
      else
        b[p] = D(o, x);
    }
    return x.sort === !1 ? b : (x.sort === !0 ? Object.keys(b).sort() : Object.keys(b).sort(x.sort)).reduce((p, o) => {
      const g = b[o];
      return g && typeof g == "object" && !Array.isArray(g) ? p[o] = v(g) : p[o] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = C, t.parse = z, t.stringify = (_, x) => {
    if (!_)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), h(x.arrayFormatSeparator);
    const w = (g) => x.skipNull && s(_[g]) || x.skipEmptyString && _[g] === "", b = a(x), p = {};
    for (const g of Object.keys(_))
      w(g) || (p[g] = _[g]);
    const o = Object.keys(p);
    return x.sort !== !1 && o.sort(x.sort), o.map((g) => {
      const T = _[g];
      return T === void 0 ? "" : T === null ? f(g, x) : Array.isArray(T) ? T.length === 0 && x.arrayFormat === "bracket-separator" ? f(g, x) + "[]" : T.reduce(b(g), []).join("&") : f(g, x) + "=" + f(T, x);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (_, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [w, b] = n(_, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: z(C(_), x)
      },
      x && x.parseFragmentIdentifier && b ? { fragmentIdentifier: d(b, x) } : {}
    );
  }, t.stringifyUrl = (_, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, x);
    const w = m(_.url).split("?")[0] || "", b = t.extract(_.url), p = t.parse(b, { sort: !1 }), o = Object.assign(p, _.query);
    let g = t.stringify(o, x);
    g && (g = `?${g}`);
    let T = S(_.url);
    return _.fragmentIdentifier && (T = `#${x[u] ? f(_.fragmentIdentifier, x) : _.fragmentIdentifier}`), `${w}${g}${T}`;
  }, t.pick = (_, x, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, w);
    const { url: b, query: p, fragmentIdentifier: o } = t.parseUrl(_, w);
    return t.stringifyUrl({
      url: b,
      query: i(p, x),
      fragmentIdentifier: o
    }, w);
  }, t.exclude = (_, x, w) => {
    const b = Array.isArray(x) ? (p) => !x.includes(p) : (p, o) => !x(p, o);
    return t.pick(_, b, w);
  };
})(On);
const up = {
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
function Wc(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Gc = "base10", Lt = "base16", _s = "base64pad", Bs = "utf8", Yc = 0, kr = 1, lp = 0, na = 1, Es = 12, ks = 32;
function hp() {
  const t = $s.generateKeyPair();
  return { privateKey: Ft(t.secretKey, Lt), publicKey: Ft(t.publicKey, Lt) };
}
function Ss() {
  const t = nn.randomBytes(ks);
  return Ft(t, Lt);
}
function fp(t, e) {
  const r = $s.sharedKey(qt(t, Lt), qt(e, Lt)), n = new Td(vi.SHA256, r).expand(ks);
  return Ft(n, Lt);
}
function dp(t) {
  const e = vi.hash(qt(t, Lt));
  return Ft(e, Lt);
}
function Zr(t) {
  const e = vi.hash(qt(t, Bs));
  return Ft(e, Lt);
}
function pp(t) {
  return qt(`${t}`, Gc);
}
function Pn(t) {
  return Number(Ft(t, Gc));
}
function gp(t) {
  const e = pp(typeof t.type < "u" ? t.type : Yc);
  if (Pn(e) === kr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? qt(t.senderPublicKey, Lt) : void 0, n = typeof t.iv < "u" ? qt(t.iv, Lt) : nn.randomBytes(Es), i = new Ms.ChaCha20Poly1305(qt(t.symKey, Lt)).seal(n, qt(t.message, Bs));
  return vp({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function yp(t) {
  const e = new Ms.ChaCha20Poly1305(qt(t.symKey, Lt)), { sealed: r, iv: n } = oi(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Ft(i, Bs);
}
function vp(t) {
  if (Pn(t.type) === kr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ft(bs([t.type, t.senderPublicKey, t.iv, t.sealed]), _s);
  }
  return Ft(bs([t.type, t.iv, t.sealed]), _s);
}
function oi(t) {
  const e = qt(t, _s), r = e.slice(lp, na), n = na;
  if (Pn(r) === kr) {
    const a = n + ks, l = a + Es, h = e.slice(n, a), f = e.slice(a, l), d = e.slice(l);
    return { type: r, sealed: d, iv: f, senderPublicKey: h };
  }
  const i = n + Es, s = e.slice(n, i), u = e.slice(i);
  return { type: r, sealed: u, iv: s };
}
function bp(t, e) {
  const r = oi(t);
  return Jc({ type: Pn(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ft(r.senderPublicKey, Lt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Jc(t) {
  const e = (t == null ? void 0 : t.type) || Yc;
  if (e === kr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function ia(t) {
  return t.type === kr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var mp = Object.defineProperty, sa = Object.getOwnPropertySymbols, wp = Object.prototype.hasOwnProperty, _p = Object.prototype.propertyIsEnumerable, oa = (t, e, r) => e in t ? mp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, aa = (t, e) => {
  for (var r in e || (e = {}))
    wp.call(e, r) && oa(t, r, e[r]);
  if (sa)
    for (var r of sa(e))
      _p.call(e, r) && oa(t, r, e[r]);
  return t;
};
const Ep = "ReactNative", kt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Sp = "js";
function Ks() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function bi() {
  return !kc() && !!qs() && navigator.product === Ep;
}
function Ln() {
  return !Ks() && !!qs();
}
function Fn() {
  return bi() ? kt.reactNative : Ks() ? kt.node : Ln() ? kt.browser : kt.unknown;
}
function Dp(t, e) {
  let r = On.parse(t);
  return r = aa(aa({}, r), e), t = On.stringify(r), t;
}
function Ip() {
  return Hc() || { name: "", description: "", url: "", icons: [""] };
}
function Op() {
  if (Fn() === kt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = zd();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function xp() {
  var t;
  const e = Fn();
  return e === kt.browser ? [e, ((t = Kc()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Cp(t, e, r) {
  const n = Op(), i = xp();
  return [[t, e].join("-"), [Sp, r].join("-"), n, i].join("/");
}
function Ap({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = Cp(t, e, n), h = { auth: i, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, f = Dp(a[1] || "", h);
  return a[0] + "?" + f;
}
function qr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Qc(t) {
  return Object.fromEntries(t.entries());
}
function Xc(t) {
  return new Map(Object.entries(t));
}
function Jr(t = ue.FIVE_MINUTES, e) {
  const r = ue.toMiliseconds(t || ue.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, reject: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(e));
    }, r), n = u, i = a;
  }) };
}
function xn(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const u = await t;
      n(u);
    } catch (u) {
      i(u);
    }
    clearTimeout(s);
  });
}
function Zc(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`))
    return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function Np(t) {
  return Zc("topic", t);
}
function Rp(t) {
  return Zc("id", t);
}
function eu(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function er(t, e) {
  return ue.fromMiliseconds((e || Date.now()) + ue.toMiliseconds(t));
}
function Dr(t) {
  return Date.now() >= ue.toMiliseconds(t);
}
function dt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Tp({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, u = Fn();
    u === kt.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === kt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const Pp = "irn";
function Ds(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Pp };
}
function ei(t) {
  const e = up[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Lp = Object.defineProperty, ca = Object.getOwnPropertySymbols, Fp = Object.prototype.hasOwnProperty, Up = Object.prototype.propertyIsEnumerable, ua = (t, e, r) => e in t ? Lp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mp = (t, e) => {
  for (var r in e || (e = {}))
    Fp.call(e, r) && ua(t, r, e[r]);
  if (ca)
    for (var r of ca(e))
      Up.call(e, r) && ua(t, r, e[r]);
  return t;
};
function jp(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), u = t[i];
      r[s] = u;
    }
  }), r;
}
function $p(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", u = On.parse(s);
  return { protocol: n, topic: qp(i[0]), version: parseInt(i[1], 10), symKey: u.symKey, relay: jp(u) };
}
function qp(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function zp(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function Bp(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + On.stringify(Mp({ symKey: t.symKey }, zp(t.relay)));
}
function on(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function kp(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...on(r.accounts));
  }), e;
}
function Kp(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    on(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function Hp(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    on(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function Vp(t, e) {
  const r = ti(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return n;
}
const Wp = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Gp = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function se(t, e) {
  const { message: r, code: n } = Gp[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function pt(t, e) {
  const { message: r, code: n } = Wp[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Un(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Sn(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Pt(t) {
  return typeof t > "u";
}
function bt(t, e) {
  return e && Pt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Hs(t, e) {
  return e && Pt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Yp(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return qr(i, n) ? (n.forEach((u) => {
    const { accounts: a, methods: l, events: h } = t.namespaces[u], f = on(a), d = r[u];
    (!qr(Wc(u, d), f) || !qr(d.methods, l) || !qr(d.events, h)) && (s = !1);
  }), s) : !1;
}
function ai(t) {
  return bt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Jp(t) {
  if (bt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && ai(r);
    }
  }
  return !1;
}
function Qp(t) {
  if (bt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Xp(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Zp(t) {
  return t == null ? void 0 : t.topic;
}
function eg(t, e) {
  let r = null;
  return bt(t == null ? void 0 : t.publicKey, !1) || (r = se("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function la(t) {
  let e = !0;
  return Un(t) ? t.length && (e = t.every((r) => bt(r, !1))) : e = !1, e;
}
function tg(t, e, r) {
  let n = null;
  return Un(e) && e.length ? e.forEach((i) => {
    n || ai(i) || (n = pt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : ai(t) || (n = pt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function rg(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const u = tg(i, Wc(i, s), `${e} ${r}`);
    u && (n = u);
  }), n;
}
function ng(t, e) {
  let r = null;
  return Un(t) ? t.forEach((n) => {
    r || Jp(n) || (r = pt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = pt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function ig(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = ng(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function sg(t, e) {
  let r = null;
  return la(t == null ? void 0 : t.methods) ? la(t == null ? void 0 : t.events) || (r = pt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = pt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function tu(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = sg(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function og(t, e, r) {
  let n = null;
  if (t && Sn(t)) {
    const i = tu(t, e);
    i && (n = i);
    const s = rg(t, e, r);
    s && (n = s);
  } else
    n = se("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function ti(t, e) {
  let r = null;
  if (t && Sn(t)) {
    const n = tu(t, e);
    n && (r = n);
    const i = ig(t, e);
    i && (r = i);
  } else
    r = se("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function ru(t) {
  return bt(t.protocol, !0);
}
function ag(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Un(t) && t.length && t.forEach((n) => {
    r = ru(n);
  }), r;
}
function cg(t) {
  return typeof t == "number";
}
function $t(t) {
  return typeof t < "u" && typeof t !== null;
}
function ug(t) {
  return !(!t || typeof t != "object" || !t.code || !Hs(t.code, !1) || !t.message || !bt(t.message, !1));
}
function lg(t) {
  return !(Pt(t) || !bt(t.method, !1));
}
function hg(t) {
  return !(Pt(t) || Pt(t.result) && Pt(t.error) || !Hs(t.id, !1) || !bt(t.jsonrpc, !1));
}
function fg(t) {
  return !(Pt(t) || !bt(t.name, !1));
}
function ha(t, e) {
  return !(!ai(e) || !kp(t).includes(e));
}
function dg(t, e, r) {
  return bt(r, !1) ? Kp(t, e).includes(r) : !1;
}
function pg(t, e, r) {
  return bt(r, !1) ? Hp(t, e).includes(r) : !1;
}
function fa(t, e, r) {
  let n = null;
  const i = gg(t), s = yg(e), u = Object.keys(i), a = Object.keys(s), l = da(Object.keys(t)), h = da(Object.keys(e)), f = l.filter((d) => !h.includes(d));
  return f.length && (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), qr(u, a) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const v = on(e[d].accounts);
    v.includes(d) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${v.toString()}`));
  }), u.forEach((d) => {
    n || (qr(i[d].methods, s[d].methods) ? qr(i[d].events, s[d].events) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function gg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function da(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function yg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = on(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function vg(t, e) {
  return Hs(t, !1) && t <= e.max && t >= e.min;
}
function pa() {
  const t = Fn();
  return new Promise((e) => {
    switch (t) {
      case kt.browser:
        e(bg());
        break;
      case kt.reactNative:
        e(mg());
        break;
      case kt.node:
        e(wg());
        break;
      default:
        e(!0);
    }
  });
}
function bg() {
  return Ln() && (navigator == null ? void 0 : navigator.onLine);
}
async function mg() {
  if (bi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function wg() {
  return !0;
}
function _g(t) {
  switch (Fn()) {
    case kt.browser:
      Eg(t);
      break;
    case kt.reactNative:
      Sg(t);
      break;
  }
}
function Eg(t) {
  Ln() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Sg(t) {
  bi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Ji = {};
let Yn = class {
  static get(e) {
    return Ji[e];
  }
  static set(e, r) {
    Ji[e] = r;
  }
  static delete(e) {
    delete Ji[e];
  }
};
const Dg = "PARSE_ERROR", Ig = "INVALID_REQUEST", Og = "METHOD_NOT_FOUND", xg = "INVALID_PARAMS", nu = "INTERNAL_ERROR", Vs = "SERVER_ERROR", Cg = [-32700, -32600, -32601, -32602, -32603], Dn = {
  [Dg]: { code: -32700, message: "Parse error" },
  [Ig]: { code: -32600, message: "Invalid Request" },
  [Og]: { code: -32601, message: "Method not found" },
  [xg]: { code: -32602, message: "Invalid params" },
  [nu]: { code: -32603, message: "Internal error" },
  [Vs]: { code: -32e3, message: "Server error" }
}, iu = Vs;
function Ag(t) {
  return Cg.includes(t);
}
function ga(t) {
  return Object.keys(Dn).includes(t) ? Dn[t] : Dn[iu];
}
function Ng(t) {
  const e = Object.values(Dn).find((r) => r.code === t);
  return e || Dn[iu];
}
function Rg(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var su = {}, yr = {}, ya;
function Tg() {
  if (ya)
    return yr;
  ya = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.isBrowserCryptoAvailable = yr.getSubtleCrypto = yr.getBrowerCrypto = void 0;
  function t() {
    return (lr == null ? void 0 : lr.crypto) || (lr == null ? void 0 : lr.msCrypto) || {};
  }
  yr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  yr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return yr.isBrowserCryptoAvailable = r, yr;
}
var vr = {}, va;
function Pg() {
  if (va)
    return vr;
  va = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.isBrowser = vr.isNode = vr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  vr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  vr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return vr.isBrowser = r, vr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = fr;
  e.__exportStar(Tg(), t), e.__exportStar(Pg(), t);
})(su);
function Ws(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function ou(t = 6) {
  return BigInt(Ws(t));
}
function Cn(t, e, r) {
  return {
    id: r || Ws(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Gs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Ys(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Lg(e, r)
  };
}
function Lg(t, e) {
  return typeof t > "u" ? ga(nu) : (typeof t == "string" && (t = Object.assign(Object.assign({}, ga(Vs)), { message: t })), typeof e < "u" && (t.data = e), Ag(t.code) && (t = Ng(t.code)), t);
}
class Fg {
}
class Ug extends Fg {
  constructor() {
    super();
  }
}
class Mg extends Ug {
  constructor(e) {
    super();
  }
}
const jg = "^wss?:";
function $g(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function qg(t, e) {
  const r = $g(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function ba(t) {
  return qg(t, jg);
}
function zg(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function au(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Js(t) {
  return au(t) && "method" in t;
}
function mi(t) {
  return au(t) && (wr(t) || tr(t));
}
function wr(t) {
  return "result" in t;
}
function tr(t) {
  return "error" in t;
}
class Bg extends Mg {
  constructor(e) {
    super(e), this.events = new Jt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async request(e, r) {
    return this.requestStrict(Cn(e.method, e.params || [], e.id || ou().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (n, i) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          i(s);
        }
      this.events.on(`${e.id}`, (s) => {
        tr(s) ? i(s.error) : n(s.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (s) {
        i(s);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), mi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const kg = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Kg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", ma = (t) => t.split("?")[0], wa = 10, Hg = kg();
class Vg {
  constructor(e) {
    if (this.url = e, this.events = new Jt.EventEmitter(), this.registering = !1, !ba(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n) => {
        this.onClose(n), e();
      }, this.socket.close();
    });
  }
  async send(e, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ls(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!ba(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, i) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), i(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return i(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, n) => {
      const i = su.isReactNative() ? void 0 : { rejectUnauthorized: !zg(e) }, s = new Hg(e, [], i);
      Kg() ? s.onerror = (u) => {
        const a = u;
        n(this.emitError(a.error));
      } : s.on("error", (u) => {
        n(this.emitError(u));
      }), s.onopen = () => {
        this.onOpen(s), r(s);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (r) => this.onPayload(r), e.onclose = (r) => this.onClose(r), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const r = typeof e.data == "string" ? Ec(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Ys(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Rg(e, ma(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > wa && this.events.setMaxListeners(wa);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${ma(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ci = { exports: {} };
ci.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", v = "[object Error]", m = "[object Function]", S = "[object GeneratorFunction]", C = "[object Map]", D = "[object Number]", z = "[object Null]", _ = "[object Object]", x = "[object Promise]", w = "[object Proxy]", b = "[object RegExp]", p = "[object Set]", o = "[object String]", g = "[object Symbol]", T = "[object Undefined]", F = "[object WeakMap]", B = "[object ArrayBuffer]", W = "[object DataView]", ne = "[object Float32Array]", N = "[object Float64Array]", j = "[object Int8Array]", re = "[object Int16Array]", G = "[object Int32Array]", H = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", K = "[object Uint16Array]", J = "[object Uint32Array]", de = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, ae = {};
  ae[ne] = ae[N] = ae[j] = ae[re] = ae[G] = ae[H] = ae[Y] = ae[K] = ae[J] = !0, ae[a] = ae[l] = ae[B] = ae[f] = ae[W] = ae[d] = ae[v] = ae[m] = ae[C] = ae[D] = ae[_] = ae[b] = ae[p] = ae[o] = ae[F] = !1;
  var fe = typeof lr == "object" && lr && lr.Object === Object && lr, q = typeof self == "object" && self && self.Object === Object && self, $ = fe || q || Function("return this")(), P = e && !e.nodeType && e, c = P && !0 && t && !t.nodeType && t, A = c && c.exports === P, ie = A && fe.process, oe = function() {
    try {
      return ie && ie.binding && ie.binding("util");
    } catch {
    }
  }(), xe = oe && oe.isTypedArray;
  function ve(E, L) {
    for (var V = -1, ce = E == null ? 0 : E.length, We = 0, _e = []; ++V < ce; ) {
      var st = E[V];
      L(st, V, E) && (_e[We++] = st);
    }
    return _e;
  }
  function Ne(E, L) {
    for (var V = -1, ce = L.length, We = E.length; ++V < ce; )
      E[We + V] = L[V];
    return E;
  }
  function Pe(E, L) {
    for (var V = -1, ce = E == null ? 0 : E.length; ++V < ce; )
      if (L(E[V], V, E))
        return !0;
    return !1;
  }
  function Be(E, L) {
    for (var V = -1, ce = Array(E); ++V < E; )
      ce[V] = L(V);
    return ce;
  }
  function ke(E) {
    return function(L) {
      return E(L);
    };
  }
  function Ce(E, L) {
    return E.has(L);
  }
  function De(E, L) {
    return E == null ? void 0 : E[L];
  }
  function Ie(E) {
    var L = -1, V = Array(E.size);
    return E.forEach(function(ce, We) {
      V[++L] = [We, ce];
    }), V;
  }
  function Ee(E, L) {
    return function(V) {
      return E(L(V));
    };
  }
  function we(E) {
    var L = -1, V = Array(E.size);
    return E.forEach(function(ce) {
      V[++L] = ce;
    }), V;
  }
  var be = Array.prototype, ye = Function.prototype, pe = Object.prototype, Se = $["__core-js_shared__"], Ae = ye.toString, ge = pe.hasOwnProperty, Re = function() {
    var E = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), Te = pe.toString, Fe = RegExp(
    "^" + Ae.call(ge).replace(de, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Le = A ? $.Buffer : void 0, Ue = $.Symbol, zt = $.Uint8Array, Ut = pe.propertyIsEnumerable, Qt = be.splice, Nt = Ue ? Ue.toStringTag : void 0, Et = Object.getOwnPropertySymbols, Cr = Le ? Le.isBuffer : void 0, Hr = Ee(Object.keys, Object), Qe = $e($, "DataView"), Ge = $e($, "Map"), et = $e($, "Promise"), tt = $e($, "Set"), rt = $e($, "WeakMap"), Ye = $e(Object, "create"), ot = Nr(Qe), at = Nr(Ge), ct = Nr(et), ut = Nr(tt), lt = Nr(rt), nt = Ue ? Ue.prototype : void 0, it = nt ? nt.valueOf : void 0;
  function Ke(E) {
    var L = -1, V = E == null ? 0 : E.length;
    for (this.clear(); ++L < V; ) {
      var ce = E[L];
      this.set(ce[0], ce[1]);
    }
  }
  function ht() {
    this.__data__ = Ye ? Ye(null) : {}, this.size = 0;
  }
  function ft(E) {
    var L = this.has(E) && delete this.__data__[E];
    return this.size -= L ? 1 : 0, L;
  }
  function Di(E) {
    var L = this.__data__;
    if (Ye) {
      var V = L[E];
      return V === n ? void 0 : V;
    }
    return ge.call(L, E) ? L[E] : void 0;
  }
  function Ii(E) {
    var L = this.__data__;
    return Ye ? L[E] !== void 0 : ge.call(L, E);
  }
  function Oi(E, L) {
    var V = this.__data__;
    return this.size += this.has(E) ? 0 : 1, V[E] = Ye && L === void 0 ? n : L, this;
  }
  Ke.prototype.clear = ht, Ke.prototype.delete = ft, Ke.prototype.get = Di, Ke.prototype.has = Ii, Ke.prototype.set = Oi;
  function Xt(E) {
    var L = -1, V = E == null ? 0 : E.length;
    for (this.clear(); ++L < V; ) {
      var ce = E[L];
      this.set(ce[0], ce[1]);
    }
  }
  function xi() {
    this.__data__ = [], this.size = 0;
  }
  function Ci(E) {
    var L = this.__data__, V = I(L, E);
    if (V < 0)
      return !1;
    var ce = L.length - 1;
    return V == ce ? L.pop() : Qt.call(L, V, 1), --this.size, !0;
  }
  function Ai(E) {
    var L = this.__data__, V = I(L, E);
    return V < 0 ? void 0 : L[V][1];
  }
  function Ni(E) {
    return I(this.__data__, E) > -1;
  }
  function Ri(E, L) {
    var V = this.__data__, ce = I(V, E);
    return ce < 0 ? (++this.size, V.push([E, L])) : V[ce][1] = L, this;
  }
  Xt.prototype.clear = xi, Xt.prototype.delete = Ci, Xt.prototype.get = Ai, Xt.prototype.has = Ni, Xt.prototype.set = Ri;
  function pr(E) {
    var L = -1, V = E == null ? 0 : E.length;
    for (this.clear(); ++L < V; ) {
      var ce = E[L];
      this.set(ce[0], ce[1]);
    }
  }
  function Ti() {
    this.size = 0, this.__data__ = {
      hash: new Ke(),
      map: new (Ge || Xt)(),
      string: new Ke()
    };
  }
  function jn(E) {
    var L = Ve(this, E).delete(E);
    return this.size -= L ? 1 : 0, L;
  }
  function Ar(E) {
    return Ve(this, E).get(E);
  }
  function $n(E) {
    return Ve(this, E).has(E);
  }
  function _r(E, L) {
    var V = Ve(this, E), ce = V.size;
    return V.set(E, L), this.size += V.size == ce ? 0 : 1, this;
  }
  pr.prototype.clear = Ti, pr.prototype.delete = jn, pr.prototype.get = Ar, pr.prototype.has = $n, pr.prototype.set = _r;
  function Vr(E) {
    var L = -1, V = E == null ? 0 : E.length;
    for (this.__data__ = new pr(); ++L < V; )
      this.add(E[L]);
  }
  function Wr(E) {
    return this.__data__.set(E, n), this;
  }
  function an(E) {
    return this.__data__.has(E);
  }
  Vr.prototype.add = Vr.prototype.push = Wr, Vr.prototype.has = an;
  function ir(E) {
    var L = this.__data__ = new Xt(E);
    this.size = L.size;
  }
  function Pi() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function cn(E) {
    var L = this.__data__, V = L.delete(E);
    return this.size = L.size, V;
  }
  function Li(E) {
    return this.__data__.get(E);
  }
  function Fi(E) {
    return this.__data__.has(E);
  }
  function y(E, L) {
    var V = this.__data__;
    if (V instanceof Xt) {
      var ce = V.__data__;
      if (!Ge || ce.length < r - 1)
        return ce.push([E, L]), this.size = ++V.size, this;
      V = this.__data__ = new pr(ce);
    }
    return V.set(E, L), this.size = V.size, this;
  }
  ir.prototype.clear = Pi, ir.prototype.delete = cn, ir.prototype.get = Li, ir.prototype.has = Fi, ir.prototype.set = y;
  function O(E, L) {
    var V = zn(E), ce = !V && Tu(E), We = !V && !ce && ji(E), _e = !V && !ce && !We && lo(E), st = V || ce || We || _e, gt = st ? Be(E.length, String) : [], mt = gt.length;
    for (var Xe in E)
      (L || ge.call(E, Xe)) && !(st && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Xe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      We && (Xe == "offset" || Xe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _e && (Xe == "buffer" || Xe == "byteLength" || Xe == "byteOffset") || // Skip index properties.
      Ui(Xe, mt))) && gt.push(Xe);
    return gt;
  }
  function I(E, L) {
    for (var V = E.length; V--; )
      if (oo(E[V][0], L))
        return V;
    return -1;
  }
  function U(E, L, V) {
    var ce = L(E);
    return zn(E) ? ce : Ne(ce, V(E));
  }
  function R(E) {
    return E == null ? E === void 0 ? T : z : Nt && Nt in Object(E) ? Mt(E) : Ru(E);
  }
  function M(E) {
    return ln(E) && R(E) == a;
  }
  function k(E, L, V, ce, We) {
    return E === L ? !0 : E == null || L == null || !ln(E) && !ln(L) ? E !== E && L !== L : Q(E, L, V, ce, k, We);
  }
  function Q(E, L, V, ce, We, _e) {
    var st = zn(E), gt = zn(L), mt = st ? l : Vt(E), Xe = gt ? l : Vt(L);
    mt = mt == a ? _ : mt, Xe = Xe == a ? _ : Xe;
    var Bt = mt == _, Zt = Xe == _, St = mt == Xe;
    if (St && ji(E)) {
      if (!ji(L))
        return !1;
      st = !0, Bt = !1;
    }
    if (St && !Bt)
      return _e || (_e = new ir()), st || lo(E) ? le(E, L, V, ce, We, _e) : Oe(E, L, mt, V, ce, We, _e);
    if (!(V & i)) {
      var Wt = Bt && ge.call(E, "__wrapped__"), Gt = Zt && ge.call(L, "__wrapped__");
      if (Wt || Gt) {
        var Er = Wt ? E.value() : E, gr = Gt ? L.value() : L;
        return _e || (_e = new ir()), We(Er, gr, V, ce, _e);
      }
    }
    return St ? (_e || (_e = new ir()), qe(E, L, V, ce, We, _e)) : !1;
  }
  function ee(E) {
    if (!uo(E) || qn(E))
      return !1;
    var L = ao(E) ? Fe : te;
    return L.test(Nr(E));
  }
  function Z(E) {
    return ln(E) && co(E.length) && !!ae[R(E)];
  }
  function X(E) {
    if (!Nu(E))
      return Hr(E);
    var L = [];
    for (var V in Object(E))
      ge.call(E, V) && V != "constructor" && L.push(V);
    return L;
  }
  function le(E, L, V, ce, We, _e) {
    var st = V & i, gt = E.length, mt = L.length;
    if (gt != mt && !(st && mt > gt))
      return !1;
    var Xe = _e.get(E);
    if (Xe && _e.get(L))
      return Xe == L;
    var Bt = -1, Zt = !0, St = V & s ? new Vr() : void 0;
    for (_e.set(E, L), _e.set(L, E); ++Bt < gt; ) {
      var Wt = E[Bt], Gt = L[Bt];
      if (ce)
        var Er = st ? ce(Gt, Wt, Bt, L, E, _e) : ce(Wt, Gt, Bt, E, L, _e);
      if (Er !== void 0) {
        if (Er)
          continue;
        Zt = !1;
        break;
      }
      if (St) {
        if (!Pe(L, function(gr, Rr) {
          if (!Ce(St, Rr) && (Wt === gr || We(Wt, gr, V, ce, _e)))
            return St.push(Rr);
        })) {
          Zt = !1;
          break;
        }
      } else if (!(Wt === Gt || We(Wt, Gt, V, ce, _e))) {
        Zt = !1;
        break;
      }
    }
    return _e.delete(E), _e.delete(L), Zt;
  }
  function Oe(E, L, V, ce, We, _e, st) {
    switch (V) {
      case W:
        if (E.byteLength != L.byteLength || E.byteOffset != L.byteOffset)
          return !1;
        E = E.buffer, L = L.buffer;
      case B:
        return !(E.byteLength != L.byteLength || !_e(new zt(E), new zt(L)));
      case f:
      case d:
      case D:
        return oo(+E, +L);
      case v:
        return E.name == L.name && E.message == L.message;
      case b:
      case o:
        return E == L + "";
      case C:
        var gt = Ie;
      case p:
        var mt = ce & i;
        if (gt || (gt = we), E.size != L.size && !mt)
          return !1;
        var Xe = st.get(E);
        if (Xe)
          return Xe == L;
        ce |= s, st.set(E, L);
        var Bt = le(gt(E), gt(L), ce, We, _e, st);
        return st.delete(E), Bt;
      case g:
        if (it)
          return it.call(E) == it.call(L);
    }
    return !1;
  }
  function qe(E, L, V, ce, We, _e) {
    var st = V & i, gt = je(E), mt = gt.length, Xe = je(L), Bt = Xe.length;
    if (mt != Bt && !st)
      return !1;
    for (var Zt = mt; Zt--; ) {
      var St = gt[Zt];
      if (!(st ? St in L : ge.call(L, St)))
        return !1;
    }
    var Wt = _e.get(E);
    if (Wt && _e.get(L))
      return Wt == L;
    var Gt = !0;
    _e.set(E, L), _e.set(L, E);
    for (var Er = st; ++Zt < mt; ) {
      St = gt[Zt];
      var gr = E[St], Rr = L[St];
      if (ce)
        var ho = st ? ce(Rr, gr, St, L, E, _e) : ce(gr, Rr, St, E, L, _e);
      if (!(ho === void 0 ? gr === Rr || We(gr, Rr, V, ce, _e) : ho)) {
        Gt = !1;
        break;
      }
      Er || (Er = St == "constructor");
    }
    if (Gt && !Er) {
      var Bn = E.constructor, kn = L.constructor;
      Bn != kn && "constructor" in E && "constructor" in L && !(typeof Bn == "function" && Bn instanceof Bn && typeof kn == "function" && kn instanceof kn) && (Gt = !1);
    }
    return _e.delete(E), _e.delete(L), Gt;
  }
  function je(E) {
    return U(E, Fu, un);
  }
  function Ve(E, L) {
    var V = E.__data__;
    return Mi(L) ? V[typeof L == "string" ? "string" : "hash"] : V.map;
  }
  function $e(E, L) {
    var V = De(E, L);
    return ee(V) ? V : void 0;
  }
  function Mt(E) {
    var L = ge.call(E, Nt), V = E[Nt];
    try {
      E[Nt] = void 0;
      var ce = !0;
    } catch {
    }
    var We = Te.call(E);
    return ce && (L ? E[Nt] = V : delete E[Nt]), We;
  }
  var un = Et ? function(E) {
    return E == null ? [] : (E = Object(E), ve(Et(E), function(L) {
      return Ut.call(E, L);
    }));
  } : Uu, Vt = R;
  (Qe && Vt(new Qe(new ArrayBuffer(1))) != W || Ge && Vt(new Ge()) != C || et && Vt(et.resolve()) != x || tt && Vt(new tt()) != p || rt && Vt(new rt()) != F) && (Vt = function(E) {
    var L = R(E), V = L == _ ? E.constructor : void 0, ce = V ? Nr(V) : "";
    if (ce)
      switch (ce) {
        case ot:
          return W;
        case at:
          return C;
        case ct:
          return x;
        case ut:
          return p;
        case lt:
          return F;
      }
    return L;
  });
  function Ui(E, L) {
    return L = L ?? u, !!L && (typeof E == "number" || he.test(E)) && E > -1 && E % 1 == 0 && E < L;
  }
  function Mi(E) {
    var L = typeof E;
    return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? E !== "__proto__" : E === null;
  }
  function qn(E) {
    return !!Re && Re in E;
  }
  function Nu(E) {
    var L = E && E.constructor, V = typeof L == "function" && L.prototype || pe;
    return E === V;
  }
  function Ru(E) {
    return Te.call(E);
  }
  function Nr(E) {
    if (E != null) {
      try {
        return Ae.call(E);
      } catch {
      }
      try {
        return E + "";
      } catch {
      }
    }
    return "";
  }
  function oo(E, L) {
    return E === L || E !== E && L !== L;
  }
  var Tu = M(function() {
    return arguments;
  }()) ? M : function(E) {
    return ln(E) && ge.call(E, "callee") && !Ut.call(E, "callee");
  }, zn = Array.isArray;
  function Pu(E) {
    return E != null && co(E.length) && !ao(E);
  }
  var ji = Cr || Mu;
  function Lu(E, L) {
    return k(E, L);
  }
  function ao(E) {
    if (!uo(E))
      return !1;
    var L = R(E);
    return L == m || L == S || L == h || L == w;
  }
  function co(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= u;
  }
  function uo(E) {
    var L = typeof E;
    return E != null && (L == "object" || L == "function");
  }
  function ln(E) {
    return E != null && typeof E == "object";
  }
  var lo = xe ? ke(xe) : Z;
  function Fu(E) {
    return Pu(E) ? O(E) : X(E);
  }
  function Uu() {
    return [];
  }
  function Mu() {
    return !1;
  }
  t.exports = Lu;
})(ci, ci.exports);
var Wg = ci.exports;
const Gg = /* @__PURE__ */ Nn(Wg);
function Yg(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(S) {
    if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0)
      return "";
    for (var C = 0, D = 0, z = 0, _ = S.length; z !== _ && S[z] === 0; )
      z++, C++;
    for (var x = (_ - z) * f + 1 >>> 0, w = new Uint8Array(x); z !== _; ) {
      for (var b = S[z], p = 0, o = x - 1; (b !== 0 || p < D) && o !== -1; o--, p++)
        b += 256 * w[o] >>> 0, w[o] = b % a >>> 0, b = b / a >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      D = p, z++;
    }
    for (var g = x - D; g !== x && w[g] === 0; )
      g++;
    for (var T = l.repeat(C); g < x; ++g)
      T += t.charAt(w[g]);
    return T;
  }
  function v(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return new Uint8Array();
    var C = 0;
    if (S[C] !== " ") {
      for (var D = 0, z = 0; S[C] === l; )
        D++, C++;
      for (var _ = (S.length - C) * h + 1 >>> 0, x = new Uint8Array(_); S[C]; ) {
        var w = r[S.charCodeAt(C)];
        if (w === 255)
          return;
        for (var b = 0, p = _ - 1; (w !== 0 || b < z) && p !== -1; p--, b++)
          w += a * x[p] >>> 0, x[p] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        z = b, C++;
      }
      if (S[C] !== " ") {
        for (var o = _ - z; o !== _ && x[o] === 0; )
          o++;
        for (var g = new Uint8Array(D + (_ - o)), T = D; o !== _; )
          g[T++] = x[o++];
        return g;
      }
    }
  }
  function m(S) {
    var C = v(S);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: v, decode: m };
}
var Jg = Yg, Qg = Jg;
const cu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Xg = (t) => new TextEncoder().encode(t), Zg = (t) => new TextDecoder().decode(t);
class ey {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ty {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
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
    return uu(this, e);
  }
}
class ry {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return uu(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const uu = (t, e) => new ry({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class ny {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new ey(e, r, n), this.decoder = new ty(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const wi = ({ name: t, prefix: e, encode: r, decode: n }) => new ny(t, e, r, n), Mn = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Qg(r, e);
  return wi({ prefix: t, name: e, encode: n, decode: (s) => cu(i(s)) });
}, iy = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | d, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, sy = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[i & a >> u];
  if (u && (s += e[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, _t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => wi({ prefix: e, name: t, encode(i) {
  return sy(i, n, r);
}, decode(i) {
  return iy(i, n, r, t);
} }), oy = wi({ prefix: "\0", name: "identity", encode: (t) => Zg(t), decode: (t) => Xg(t) });
var ay = Object.freeze({ __proto__: null, identity: oy });
const cy = _t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var uy = Object.freeze({ __proto__: null, base2: cy });
const ly = _t({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var hy = Object.freeze({ __proto__: null, base8: ly });
const fy = Mn({ prefix: "9", name: "base10", alphabet: "0123456789" });
var dy = Object.freeze({ __proto__: null, base10: fy });
const py = _t({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), gy = _t({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var yy = Object.freeze({ __proto__: null, base16: py, base16upper: gy });
const vy = _t({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), by = _t({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), my = _t({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), wy = _t({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), _y = _t({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Ey = _t({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Sy = _t({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Dy = _t({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Iy = _t({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Oy = Object.freeze({ __proto__: null, base32: vy, base32upper: by, base32pad: my, base32padupper: wy, base32hex: _y, base32hexupper: Ey, base32hexpad: Sy, base32hexpadupper: Dy, base32z: Iy });
const xy = Mn({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Cy = Mn({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ay = Object.freeze({ __proto__: null, base36: xy, base36upper: Cy });
const Ny = Mn({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Ry = Mn({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Ty = Object.freeze({ __proto__: null, base58btc: Ny, base58flickr: Ry });
const Py = _t({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Ly = _t({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Fy = _t({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Uy = _t({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var My = Object.freeze({ __proto__: null, base64: Py, base64pad: Ly, base64url: Fy, base64urlpad: Uy });
const lu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), jy = lu.reduce((t, e, r) => (t[r] = e, t), []), $y = lu.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function qy(t) {
  return t.reduce((e, r) => (e += jy[r], e), "");
}
function zy(t) {
  const e = [];
  for (const r of t) {
    const n = $y[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const By = wi({ prefix: "🚀", name: "base256emoji", encode: qy, decode: zy });
var ky = Object.freeze({ __proto__: null, base256emoji: By }), Ky = hu, _a = 128, Hy = 127, Vy = ~Hy, Wy = Math.pow(2, 31);
function hu(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= Wy; )
    e[r++] = t & 255 | _a, t /= 128;
  for (; t & Vy; )
    e[r++] = t & 255 | _a, t >>>= 7;
  return e[r] = t | 0, hu.bytes = r - n + 1, e;
}
var Gy = Is, Yy = 128, Ea = 127;
function Is(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, u, a = t.length;
  do {
    if (s >= a)
      throw Is.bytes = 0, new RangeError("Could not decode varint");
    u = t[s++], r += i < 28 ? (u & Ea) << i : (u & Ea) * Math.pow(2, i), i += 7;
  } while (u >= Yy);
  return Is.bytes = s - n, r;
}
var Jy = Math.pow(2, 7), Qy = Math.pow(2, 14), Xy = Math.pow(2, 21), Zy = Math.pow(2, 28), e0 = Math.pow(2, 35), t0 = Math.pow(2, 42), r0 = Math.pow(2, 49), n0 = Math.pow(2, 56), i0 = Math.pow(2, 63), s0 = function(t) {
  return t < Jy ? 1 : t < Qy ? 2 : t < Xy ? 3 : t < Zy ? 4 : t < e0 ? 5 : t < t0 ? 6 : t < r0 ? 7 : t < n0 ? 8 : t < i0 ? 9 : 10;
}, o0 = { encode: Ky, decode: Gy, encodingLength: s0 }, fu = o0;
const Sa = (t, e, r = 0) => (fu.encode(t, e, r), e), Da = (t) => fu.encodingLength(t), Os = (t, e) => {
  const r = e.byteLength, n = Da(t), i = n + Da(r), s = new Uint8Array(i + r);
  return Sa(t, s, 0), Sa(r, s, n), s.set(e, i), new a0(t, r, e, s);
};
class a0 {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const du = ({ name: t, code: e, encode: r }) => new c0(t, e, r);
class c0 {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Os(this.code, r) : r.then((n) => Os(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const pu = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), u0 = du({ name: "sha2-256", code: 18, encode: pu("SHA-256") }), l0 = du({ name: "sha2-512", code: 19, encode: pu("SHA-512") });
var h0 = Object.freeze({ __proto__: null, sha256: u0, sha512: l0 });
const gu = 0, f0 = "identity", yu = cu, d0 = (t) => Os(gu, yu(t)), p0 = { code: gu, name: f0, encode: yu, digest: d0 };
var g0 = Object.freeze({ __proto__: null, identity: p0 });
new TextEncoder(), new TextDecoder();
const Ia = { ...ay, ...uy, ...hy, ...dy, ...yy, ...Oy, ...Ay, ...Ty, ...My, ...ky };
({ ...h0, ...g0 });
function vu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function y0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? vu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function bu(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Oa = bu("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Qi = bu("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = y0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), v0 = { utf8: Oa, "utf-8": Oa, hex: Ia.base16, latin1: Qi, ascii: Qi, binary: Qi, ...Ia };
function b0(t, e = "utf8") {
  const r = v0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? vu(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const mu = "wc", m0 = 2, Qs = "core", Ir = `${mu}@2:${Qs}:`, w0 = { name: Qs, logger: "error" }, _0 = { database: ":memory:" }, E0 = "crypto", xa = "client_ed25519_seed", S0 = ue.ONE_DAY, D0 = "keychain", I0 = "0.3", O0 = "messages", x0 = "0.3", C0 = ue.SIX_HOURS, A0 = "publisher", wu = "irn", N0 = "error", _u = "wss://relay.walletconnect.com", Ca = "wss://relay.walletconnect.org", R0 = "relayer", At = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, T0 = "_subscription", br = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, P0 = ue.ONE_SECOND, L0 = "2.10.0", F0 = 1e4, U0 = "0.3", M0 = "WALLETCONNECT_CLIENT_ID", ur = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, j0 = "subscription", $0 = "0.3", q0 = ue.FIVE_SECONDS * 1e3, z0 = "pairing", B0 = "0.3", vn = { wc_pairingDelete: { req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ue.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ue.ONE_DAY, prompt: !1, tag: 0 } } }, cr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, k0 = "history", K0 = "0.3", H0 = "expirer", Yt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, V0 = "0.3", Xi = "verify-api", ri = "https://verify.walletconnect.com", Aa = "https://verify.walletconnect.org";
class W0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = D0, this.version = I0, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, i) => {
      this.isInitialized(), this.keychain.set(n, i), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.keychain.get(n);
      if (typeof i > "u") {
        const { message: s } = se("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Qc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Xc(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class G0 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = E0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Wo(i);
      return Mc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = hp();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = Wo(s), a = Ss();
      return await md(a, i, S0, u);
    }, this.generateSharedKey = (i, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), l = fp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const u = s || dp(i);
      return await this.keychain.set(u, i), u;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, u) => {
      this.isInitialized();
      const a = Jc(u), l = Ls(s);
      if (ia(a)) {
        const v = a.senderPublicKey, m = a.receiverPublicKey;
        i = await this.generateSharedKey(v, m);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: d } = a;
      return gp({ type: f, symKey: h, message: l, senderPublicKey: d });
    }, this.decode = async (i, s, u) => {
      this.isInitialized();
      const a = bp(s, u);
      if (ia(a)) {
        const l = a.receiverPublicKey, h = a.senderPublicKey;
        i = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(i), h = yp({ symKey: l, encoded: s });
        return Ec(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (i) => {
      const s = oi(i);
      return Pn(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = oi(i);
      return s.senderPublicKey ? Ft(s.senderPublicKey, Lt) : void 0;
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.keychain = n || new W0(this.core, this.logger);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, r) {
    return await this.keychain.set(e, r), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(xa);
    } catch {
      e = Ss(), await this.keychain.set(xa, e);
    }
    return b0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Y0 extends _h {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = O0, this.version = x0, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const n = await this.getRelayerMessages();
          typeof n < "u" && (this.messages = n), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (n) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (n, i) => {
      this.isInitialized();
      const s = Zr(i);
      let u = this.messages.get(n);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = i, this.messages.set(n, u), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), u = Zr(i);
      return typeof s[u] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Me.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Qc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Xc(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class J0 extends Eh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Jt.EventEmitter(), this.name = A0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ue.toMiliseconds(ue.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || C0, l = Ds(s), h = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || ou().toString(), v = { topic: n, message: i, opts: { ttl: a, relay: l, prompt: h, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, v), this.publishTimeout);
        try {
          await await xn(this.rpcPublish(n, i, a, l, h, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(At.publish, v);
        } catch (S) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = s == null ? void 0 : s.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), S;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, u, a) {
    var l, h, f, d;
    const v = { method: ei(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: u }, id: a };
    return Pt((l = v.params) == null ? void 0 : l.prompt) && ((h = v.params) == null || delete h.prompt), Pt((f = v.params) == null ? void 0 : f.tag) && ((d = v.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: v }), this.relayer.request(v);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: n, opts: i } = e;
      await this.publish(r, n, i);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(rn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(At.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(At.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Q0 {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const n = this.get(e);
      this.exists(e, r) || this.map.set(e, [...n, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const n = this.get(e);
      if (!this.exists(e, r))
        return;
      const i = n.filter((s) => s !== r);
      if (!i.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, i);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var X0 = Object.defineProperty, Z0 = Object.defineProperties, ev = Object.getOwnPropertyDescriptors, Na = Object.getOwnPropertySymbols, tv = Object.prototype.hasOwnProperty, rv = Object.prototype.propertyIsEnumerable, Ra = (t, e, r) => e in t ? X0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bn = (t, e) => {
  for (var r in e || (e = {}))
    tv.call(e, r) && Ra(t, r, e[r]);
  if (Na)
    for (var r of Na(e))
      rv.call(e, r) && Ra(t, r, e[r]);
  return t;
}, Zi = (t, e) => Z0(t, ev(e));
class nv extends Ih {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Q0(), this.events = new Jt.EventEmitter(), this.name = j0, this.version = $0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ir, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Ds(i), u = { topic: n, relay: s };
        this.pending.set(n, u);
        const a = await this.rpcSubscribe(n, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const u = new ue.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), i(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= q0 && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  hasSubscription(e, r) {
    let n = !1;
    try {
      n = this.getSubscription(e).topic === r;
    } catch {
    }
    return n;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const n = this.topicMap.get(e);
    await Promise.all(n.map(async (i) => await this.unsubscribeById(e, i, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const i = Ds(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = pt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: ei(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await xn(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(At.connection_stalled);
    }
    return Zr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: ei(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await xn(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(At.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: ei(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Zi(bn({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, bn({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, n) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, n), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, r) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: r }), this.addSubscription(e, r));
  }
  addSubscription(e, r) {
    this.subscriptions.set(e, bn({}, r)), this.topicMap.set(r.topic, e), this.events.emit(ur.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(ur.deleted, Zi(bn({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(ur.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(ur.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const r = await this.rpcBatchSubscribe(e);
    Un(r) && this.onBatchSubscribe(r.map((n, i) => Zi(bn({}, e[i]), { id: n })));
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
    this.pending.forEach((r) => {
      e.push(r);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(rn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(At.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(At.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(ur.created, async (e) => {
      const r = ur.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(ur.deleted, async (e) => {
      const r = ur.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), e());
      }, this.pollingInterval);
    });
  }
}
var iv = Object.defineProperty, Ta = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, ov = Object.prototype.propertyIsEnumerable, Pa = (t, e, r) => e in t ? iv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, av = (t, e) => {
  for (var r in e || (e = {}))
    sv.call(e, r) && Pa(t, r, e[r]);
  if (Ta)
    for (var r of Ta(e))
      ov.call(e, r) && Pa(t, r, e[r]);
  return t;
};
class cv extends Sh {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Jt.EventEmitter(), this.name = R0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(At.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(At.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(br.payload, this.onPayloadHandler), this.provider.on(br.connect, this.onConnectHandler), this.provider.on(br.disconnect, this.onDisconnectHandler), this.provider.on(br.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Me.generateChildLogger(e.logger, this.name) : Me.pino(Me.getDefaultLoggerOptions({ level: e.logger || N0 })), this.messages = new Y0(this.logger, e.core), this.subscriber = new nv(this, this.logger), this.publisher = new J0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || _u, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ca}...`), await this.restartTransport(Ca);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, F0);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, r, n) {
    this.isInitialized(), await this.publisher.publish(e, r, n), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var n;
    this.isInitialized();
    let i = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    return i || (await Promise.all([new Promise((s) => {
      this.subscriber.once(ur.created, (u) => {
        u.topic === e && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(e, r), s();
    })]), i);
  }
  async unsubscribe(e, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, r);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await xn(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(ur.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await xn(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (i) {
            n(i);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.provider.events.emit(br.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await pa())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Bg(new Vg(Ap({ sdkVersion: L0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: n } = e;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: n } = e;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const i = this.messages.has(r, n);
    return i && this.logger.debug(`Ignoring duplicate message: ${n}`), i;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Js(e)) {
      if (!e.method.endsWith(T0))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, u = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(av({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      mi(e) && this.events.emit(At.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(At.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Gs(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(br.payload, this.onPayloadHandler), this.provider.off(br.connect, this.onConnectHandler), this.provider.off(br.disconnect, this.onDisconnectHandler), this.provider.off(br.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(At.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await pa();
    _g(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(At.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ue.toMiliseconds(P0)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var uv = Object.defineProperty, La = Object.getOwnPropertySymbols, lv = Object.prototype.hasOwnProperty, hv = Object.prototype.propertyIsEnumerable, Fa = (t, e, r) => e in t ? uv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ua = (t, e) => {
  for (var r in e || (e = {}))
    lv.call(e, r) && Fa(t, r, e[r]);
  if (La)
    for (var r of La(e))
      hv.call(e, r) && Fa(t, r, e[r]);
  return t;
};
class _i extends Dh {
  constructor(e, r, n, i = Ir, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = U0, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Pt(u) ? this.map.set(this.getKey(u), u) : Xp(u) ? this.map.set(u.id, u) : Zp(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => Gg(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = Ua(Ua({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = Me.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
    const r = this.map.get(e);
    if (!r) {
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
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
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fv {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = z0, this.version = B0, this.events = new Ps(), this.initialized = !1, this.storagePrefix = Ir, this.ignoredPayloadTypes = [kr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Ss(), i = await this.core.crypto.setSymKey(n), s = er(ue.FIVE_MINUTES), u = { protocol: wu }, a = { topic: i, expiry: s, relay: u, active: !1 }, l = Bp({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: u });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: u } = $p(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const a = er(ue.FIVE_MINUTES), l = { topic: i, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(i, l), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: u }), this.core.expirer.set(i, a), n.activatePairing && await this.activate({ topic: i }), l;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = er(ue.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Jr();
        this.events.once(dt("pairing_ping", s), ({ error: h }) => {
          h ? l(h) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", pt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const u = Cn(i, s), a = await this.core.crypto.encode(n, u), l = vn[i].req;
      return this.core.history.set(n, u), this.core.relayer.publish(n, a, l), u.id;
    }, this.sendResult = async (n, i, s) => {
      const u = Gs(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = vn[l.request.method].res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.sendError = async (n, i, s) => {
      const u = Ys(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = vn[l.request.method] ? vn[l.request.method].res : vn.unregistered_method.res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, pt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => Dr(i.expiry));
      await Promise.all(n.map((i) => this.deletePairing(i.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: i, payload: s } = n;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i, s);
        default:
          return this.onUnknownRpcMethodRequest(i, s);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: i, payload: s } = n, u = (await this.core.history.get(i, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        wr(i) ? this.events.emit(dt("pairing_ping", s), {}) : tr(i) && this.events.emit(dt("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: u } = i;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = pt("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(pt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!$t(n)) {
        const { message: i } = se("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!Qp(n.uri)) {
        const { message: i } = se("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!$t(n)) {
        const { message: s } = se("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!$t(n)) {
        const { message: s } = se("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!bt(n, !1)) {
        const { message: i } = se("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (Dr(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = se("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.pairings = new _i(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(At.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        Js(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : mi(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Yt.expired, async (e) => {
      const { topic: r } = eu(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class dv extends wh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = k0, this.version = K0, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const u = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: er(ue.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(cr.created, u);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = tr(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(cr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(cr.deleted, s);
        }
      });
    }, this.exists = async (n, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === n : !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const n = { topic: r.topic, request: Cn(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(n);
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
    const r = this.records.get(e);
    if (!r) {
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(cr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(cr.created, (e) => {
      const r = cr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(cr.updated, (e) => {
      const r = cr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(cr.deleted, (e) => {
      const r = cr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(rn.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ue.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class pv extends Oh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = H0, this.version = V0, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const i = this.formatTarget(n);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, i) => {
      this.isInitialized();
      const s = this.formatTarget(n), u = { target: s, expiry: i };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(Yt.created, { target: s, expiration: u });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Yt.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
      return Np(e);
    if (typeof e == "number")
      return Rp(e);
    const { message: r } = se("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Yt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const r = this.expirations.get(e);
    if (!r) {
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    ue.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(Yt.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(rn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Yt.created, (e) => {
      const r = Yt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Yt.expired, (e) => {
      const r = Yt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Yt.deleted, (e) => {
      const r = Yt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class gv extends xh {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Xi, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || bi() || !Ln())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || ri;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Aa;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const i = (n == null ? void 0 : n.verifyUrl) || ri;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(u), s = await this.fetchAttestation(n.attestationId, Aa);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      var s;
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const u = this.startAbortTimer(ue.ONE_SECOND * 2), a = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(u), a.status === 200 ? (s = await a.json()) == null ? void 0 : s.origin : "";
    }, this.addToQueue = (n) => {
      this.queue.push(n);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((n) => this.sendPost(n)), this.queue = []);
    }, this.sendPost = (n) => {
      var i;
      try {
        if (!this.iframe)
          return;
        (i = this.iframe.contentWindow) == null || i.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let n;
      const i = (s) => {
        s.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", i), n());
      };
      await Promise.race([new Promise((s) => {
        if (document.getElementById(Xi))
          return s();
        window.addEventListener("message", i);
        const u = document.createElement("iframe");
        u.id = Xi, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, n = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", i), u("verify iframe load timeout");
      }, ue.toMiliseconds(ue.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Me.generateChildLogger(r, this.name), this.verifyUrl = ri, this.abortController = new AbortController(), this.isDevEnv = Ks() && process.env.IS_VITEST;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ue.toMiliseconds(e));
  }
}
var yv = Object.defineProperty, Ma = Object.getOwnPropertySymbols, vv = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, ja = (t, e, r) => e in t ? yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, $a = (t, e) => {
  for (var r in e || (e = {}))
    vv.call(e, r) && ja(t, r, e[r]);
  if (Ma)
    for (var r of Ma(e))
      bv.call(e, r) && ja(t, r, e[r]);
  return t;
};
class Xs extends mh {
  constructor(e) {
    super(e), this.protocol = mu, this.version = m0, this.name = Qs, this.events = new Jt.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || _u;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || w0.logger }));
    this.logger = Me.generateChildLogger(r, this.name), this.heartbeat = new rn.HeartBeat(), this.crypto = new G0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new dv(this, this.logger), this.expirer = new pv(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Ul($a($a({}, _0), e == null ? void 0 : e.storageOptions)), this.relayer = new cv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new fv(this, this.logger), this.verify = new gv(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Xs(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(M0, n), r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const mv = Xs, Eu = "wc", Su = 2, Du = "client", Zs = `${Eu}@${Su}:${Du}:`, es = { name: Du, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, qa = "WALLETCONNECT_DEEPLINK_CHOICE", wv = "proposal", _v = "Proposal expired", Ev = "session", Jn = ue.SEVEN_DAYS, Sv = "engine", mn = { wc_sessionPropose: { req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, ts = { min: ue.FIVE_MINUTES, max: ue.SEVEN_DAYS }, mr = { idle: "IDLE", active: "ACTIVE" }, Dv = "request", Iv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Ov = Object.defineProperty, xv = Object.defineProperties, Cv = Object.getOwnPropertyDescriptors, za = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Nv = Object.prototype.propertyIsEnumerable, Ba = (t, e, r) => e in t ? Ov(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, jt = (t, e) => {
  for (var r in e || (e = {}))
    Av.call(e, r) && Ba(t, r, e[r]);
  if (za)
    for (var r of za(e))
      Nv.call(e, r) && Ba(t, r, e[r]);
  return t;
}, wn = (t, e) => xv(t, Cv(e));
class Rv extends Ah {
  constructor(e) {
    super(e), this.name = Sv, this.events = new Ps(), this.initialized = !1, this.ignoredPayloadTypes = [kr], this.requestQueue = { state: mr.idle, queue: [] }, this.sessionRequestQueue = { state: mr.idle, queue: [] }, this.requestQueueDelay = ue.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ue.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = wn(jt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = n;
      let h = i, f, d = !1;
      if (h && (d = this.client.core.pairing.pairings.get(h).active), !h || !d) {
        const { topic: x, uri: w } = await this.client.core.pairing.create();
        h = x, f = w;
      }
      const v = await this.client.core.crypto.generateKeyPair(), m = jt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: wu }], proposer: { publicKey: v, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: S, resolve: C, done: D } = Jr(ue.FIVE_MINUTES, _v);
      if (this.events.once(dt("session_connect"), async ({ error: x, session: w }) => {
        if (x)
          S(x);
        else if (w) {
          w.self.publicKey = v;
          const b = wn(jt({}, w), { requiredNamespaces: w.requiredNamespaces, optionalNamespaces: w.optionalNamespaces });
          await this.client.session.set(w.topic, b), await this.setExpiry(w.topic, w.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: w.peer.metadata }), C(b);
        }
      }), !h) {
        const { message: x } = se("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(x);
      }
      const z = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: m }), _ = er(ue.FIVE_MINUTES);
      return await this.setProposal(z, jt({ id: z, expiry: _ }, m)), { uri: f, approval: D };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: h, requiredNamespaces: f, optionalNamespaces: d } = a;
      l = l || "", Sn(f) || (f = Vp(s, "approve()"));
      const v = await this.client.core.crypto.generateKeyPair(), m = h.publicKey, S = await this.client.core.crypto.generateSharedKey(v, m);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult({ id: n, topic: l, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: v } }), await this.client.proposal.delete(n, pt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const C = jt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: l, controller: { publicKey: v, metadata: this.client.metadata }, expiry: er(Jn) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(S), await this.sendRequest({ topic: S, method: "wc_sessionSettle", params: C, throwOnFailedPublish: !0 });
      const D = wn(jt({}, C), { topic: S, pairingTopic: l, acknowledged: !1, self: C.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: v });
      return await this.client.session.set(S, D), await this.setExpiry(S, er(Jn)), { topic: S, acknowledged: () => new Promise((z) => setTimeout(() => z(this.client.session.get(S)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, pt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: u, resolve: a, reject: l } = Jr();
      return this.events.once(dt("session_update", s), ({ error: h }) => {
        h ? l(h) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: a } = Jr();
      return this.events.once(dt("session_extend", i), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(n, er(Jn)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: u } = r, a = Ws(), { done: l, resolve: h, reject: f } = Jr(u);
      return this.events.once(dt("session_request", a), ({ error: d, result: v }) => {
        d ? f(d) : h(v);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: u, throwOnFailedPublish: !0 }).catch((v) => f(v)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a }), d();
      }), new Promise(async (d) => {
        const v = await this.client.core.storage.getItem(qa);
        Tp({ id: a, topic: s, wcDeepLink: v }), d();
      }), l()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      wr(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : tr(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: a } = Jr();
        this.events.once(dt("session_ping", i), ({ error: l }) => {
          l ? a(l) : u();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: i, chainId: s } = r;
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: i, chainId: s } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: pt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => Yp(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, pt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(qa).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, pt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = mr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = mn.wc_sessionRequest.req.ttl, { id: i, topic: s, params: u } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: u }), n && this.client.core.expirer.set(i, er(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: u, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: h } = r, f = Cn(i, s, l);
      if (Ln() && Iv.includes(i)) {
        const m = Zr(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: m });
      }
      const d = await this.client.core.crypto.encode(n, f), v = mn[i].req;
      return u && (v.ttl = u), a && (v.id = a), this.client.core.history.set(n, f), h ? (v.internal = wn(jt({}, v.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, v)) : this.client.core.relayer.publish(n, d, v).catch((m) => this.client.logger.error(m)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: u } = r, a = Gs(n, s), l = await this.client.core.crypto.encode(i, a), h = await this.client.core.history.get(i, n), f = mn[h.request.method].res;
      u ? (f.internal = wn(jt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, l, f)) : this.client.core.relayer.publish(i, l, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, i) => {
      const s = Ys(r, i), u = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), l = mn[a.request.method].res;
      this.client.core.relayer.publish(n, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        Dr(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Dr(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === mr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = mr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = mr.idle;
    }, this.processRequest = (r) => {
      const { topic: n, payload: i } = r, s = i.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, i);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, i);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, i);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, i);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: i } = r, s = (await this.client.core.history.get(n, i.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, i);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: i } = se("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(jt({}, n.params));
        const u = er(ue.FIVE_MINUTES), a = jt({ id: s, pairingTopic: r, expiry: u }, i);
        await this.setProposal(s, a);
        const l = Zr(JSON.stringify(n)), h = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: h });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (wr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const a = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const h = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        tr(n) && (await this.client.proposal.delete(i, pt("USER_DISCONNECTED")), this.events.emit(dt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: h, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: v, pairingTopic: m } = n.params, S = jt({ topic: r, relay: u, expiry: l, namespaces: h, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, v && { sessionProperties: v });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(dt("session_connect"), { session: S }), this.cleanupDuplicatePairings(S);
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      wr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(dt("session_approve", i), {})) : tr(n) && (await this.client.session.delete(r, pt("USER_DISCONNECTED")), this.events.emit(dt("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const u = `${r}_session_update`, a = Yn.get(u);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(jt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), Yn.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      wr(n) ? this.events.emit(dt("session_update", i), {}) : tr(n) && this.events.emit(dt("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, er(Jn)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      wr(n) ? this.events.emit(dt("session_extend", i), {}) : tr(n) && this.events.emit(dt("session_extend", i), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: i } = n;
      setTimeout(() => {
        wr(n) ? this.events.emit(dt("session_ping", i), {}) : tr(n) && this.events.emit(dt("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(At.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(jt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      wr(n) ? this.events.emit(dt("session_request", i), { result: n.result }) : tr(n) && this.events.emit(dt("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const u = `${r}_session_event_${s.event.name}`, a = Yn.get(u);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(jt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), Yn.set(u, i);
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = mr.idle, this.processSessionRequestQueue();
      }, ue.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === mr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, u = Zr(JSON.stringify(Cn("wc_sessionRequest", s, n))), a = this.client.session.get(i), l = await this.getVerifyContext(u, a.peer.metadata);
        this.sessionRequestQueue.state = mr.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: l });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!$t(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Pt(n) || await this.isValidPairingTopic(n), !ag(a, !0)) {
        const { message: l } = se("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Pt(i) && Sn(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !Pt(s) && Sn(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = og(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!$t(r))
        throw new Error(se("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = ti(i, "approve()");
      if (l)
        throw new Error(l.message);
      const h = fa(a.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
      if (!bt(s, !0)) {
        const { message: f } = se("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      Pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!$t(r)) {
        const { message: s } = se("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !ug(i)) {
        const { message: s } = se("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!$t(r)) {
        const { message: h } = se("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: u } = r;
      if (!ru(n)) {
        const { message: h } = se("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = eg(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = ti(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (Dr(u)) {
        const { message: h } = se("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!$t(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), u = ti(i, "update()");
      if (u)
        throw new Error(u.message);
      const a = fa(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!$t(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!$t(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: i, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!ha(a, s)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!lg(i)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(l);
      }
      if (!dg(a, s, i.method)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(l);
      }
      if (u && !vg(u, ts)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${ts.min} and ${ts.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!$t(r)) {
        const { message: s } = se("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !hg(i)) {
        const { message: s } = se("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!$t(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!$t(r)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: u } = this.client.session.get(n);
      if (!ha(u, s)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!fg(i)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!pg(u, s, i.name)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!$t(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || ri, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!bt(i, !1)) {
          const { message: s } = se("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(At.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        Js(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : mi(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Yt.expired, async (e) => {
      const { topic: r, id: n } = eu(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, se("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!bt(e, !1)) {
      const { message: r } = se("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Dr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = se("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!bt(e, !1)) {
      const { message: r } = se("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Dr(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = se("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (bt(e, !1)) {
      const { message: r } = se("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = se("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!cg(e)) {
      const { message: r } = se("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Dr(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = se("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class Tv extends _i {
  constructor(e, r) {
    super(e, r, wv, Zs), this.core = e, this.logger = r;
  }
}
class Pv extends _i {
  constructor(e, r) {
    super(e, r, Ev, Zs), this.core = e, this.logger = r;
  }
}
class Lv extends _i {
  constructor(e, r) {
    super(e, r, Dv, Zs, (n) => n.id), this.core = e, this.logger = r;
  }
}
class eo extends Ch {
  constructor(e) {
    super(e), this.protocol = Eu, this.version = Su, this.name = es.name, this.events = new Jt.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (e == null ? void 0 : e.name) || es.name, this.metadata = (e == null ? void 0 : e.metadata) || Ip();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || es.logger }));
    this.core = (e == null ? void 0 : e.core) || new mv(e), this.logger = Me.generateChildLogger(r, this.name), this.session = new Pv(this.core, this.logger), this.proposal = new Tv(this.core, this.logger), this.pendingRequest = new Lv(this.core, this.logger), this.engine = new Rv(this);
  }
  static async init(e) {
    const r = new eo(e);
    return await r.initialize(), r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
}
var Fv = Object.defineProperty, Uv = Object.defineProperties, Mv = Object.getOwnPropertyDescriptors, ka = Object.getOwnPropertySymbols, jv = Object.prototype.hasOwnProperty, $v = Object.prototype.propertyIsEnumerable, Ka = (t, e, r) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, qv = (t, e) => {
  for (var r in e || (e = {}))
    jv.call(e, r) && Ka(t, r, e[r]);
  if (ka)
    for (var r of ka(e))
      $v.call(e, r) && Ka(t, r, e[r]);
  return t;
}, zv = (t, e) => Uv(t, Mv(e)), to = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Je = (t, e, r) => (to(t, e, "read from private field"), r ? r.call(t) : e.get(t)), jr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ui = (t, e, r, n) => (to(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ot = (t, e, r) => (to(t, e, "access private method"), r), $r, Qr, _n, vt, xs, Iu, xt, Tt, Cs, Ha;
class Bv {
  constructor(e) {
    jr(this, xs), jr(this, xt), jr(this, Cs), jr(this, $r, void 0), jr(this, Qr, void 0), jr(this, _n, void 0), jr(this, vt, void 0), ui(this, $r, e), ui(this, Qr, Ot(this, xs, Iu).call(this)), Ot(this, xt, Tt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Ot(this, xt, Tt).call(this);
      const u = Je(this, Qr).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await Je(this, vt).connect(e);
      if (a) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), await Je(this, Qr).openModal({ uri: a, chains: Array.from(h) });
      }
      try {
        const h = await l();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        u(), Je(this, Qr).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Ot(this, xt, Tt).call(this), await Je(this, vt).disconnect(e);
  }
  async request(e) {
    return await Ot(this, xt, Tt).call(this), await Je(this, vt).request(e);
  }
  async getSessions() {
    return await Ot(this, xt, Tt).call(this), Je(this, vt).session.getAll();
  }
  async getSession() {
    return await Ot(this, xt, Tt).call(this), Je(this, vt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Ot(this, xt, Tt).call(this), Je(this, vt).off("session_expire", e);
  }
}
$r = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakSet(), Iu = function() {
  const { modalOptions: t, projectId: e } = Je(this, $r);
  return new Ol(zv(qv({}, t), { projectId: e }));
}, xt = /* @__PURE__ */ new WeakSet(), Tt = async function() {
  return Je(this, vt) ? !0 : (!Je(this, _n) && typeof window < "u" && ui(this, _n, Ot(this, Cs, Ha).call(this)), Je(this, _n));
}, Cs = /* @__PURE__ */ new WeakSet(), Ha = async function() {
  ui(this, vt, await eo.init({ metadata: Je(this, $r).metadata, projectId: Je(this, $r).projectId, relayUrl: Je(this, $r).relayUrl }));
  const t = await Je(this, vt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const ro = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvents",
  "createSharedState",
  "importSharedState",
  "requestSignature"
], Ei = ["aleo:1"], no = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], kv = "f0aaeffe71b636da453fce042d79d723", Kv = {
  standaloneChains: Ei,
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "puzzleapp://",
        universal: ""
        // universal: 'https://jigsaw-dev.puzzle.online/',
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
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, Pb = {
  requiredNamespaces: {
    aleo: {
      methods: ro,
      chains: Ei,
      events: no
    }
  }
};
var Ou = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(l, h, f) {
    this.fn = l, this.context = h, this.once = f || !1;
  }
  function s(l, h, f, d, v) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var m = new i(f, d || l, v), S = r ? r + h : h;
    return l._events[S] ? l._events[S].fn ? l._events[S] = [l._events[S], m] : l._events[S].push(m) : (l._events[S] = m, l._eventsCount++), l;
  }
  function u(l, h) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[h];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], f, d;
    if (this._eventsCount === 0)
      return h;
    for (d in f = this._events)
      e.call(f, d) && h.push(r ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
  }, a.prototype.listeners = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var v = 0, m = d.length, S = new Array(m); v < m; v++)
      S[v] = d[v].fn;
    return S;
  }, a.prototype.listenerCount = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    return d ? d.fn ? 1 : d.length : 0;
  }, a.prototype.emit = function(h, f, d, v, m, S) {
    var C = r ? r + h : h;
    if (!this._events[C])
      return !1;
    var D = this._events[C], z = arguments.length, _, x;
    if (D.fn) {
      switch (D.once && this.removeListener(h, D.fn, void 0, !0), z) {
        case 1:
          return D.fn.call(D.context), !0;
        case 2:
          return D.fn.call(D.context, f), !0;
        case 3:
          return D.fn.call(D.context, f, d), !0;
        case 4:
          return D.fn.call(D.context, f, d, v), !0;
        case 5:
          return D.fn.call(D.context, f, d, v, m), !0;
        case 6:
          return D.fn.call(D.context, f, d, v, m, S), !0;
      }
      for (x = 1, _ = new Array(z - 1); x < z; x++)
        _[x - 1] = arguments[x];
      D.fn.apply(D.context, _);
    } else {
      var w = D.length, b;
      for (x = 0; x < w; x++)
        switch (D[x].once && this.removeListener(h, D[x].fn, void 0, !0), z) {
          case 1:
            D[x].fn.call(D[x].context);
            break;
          case 2:
            D[x].fn.call(D[x].context, f);
            break;
          case 3:
            D[x].fn.call(D[x].context, f, d);
            break;
          case 4:
            D[x].fn.call(D[x].context, f, d, v);
            break;
          default:
            if (!_)
              for (b = 1, _ = new Array(z - 1); b < z; b++)
                _[b - 1] = arguments[b];
            D[x].fn.apply(D[x].context, _);
        }
    }
    return !0;
  }, a.prototype.on = function(h, f, d) {
    return s(this, h, f, d, !1);
  }, a.prototype.once = function(h, f, d) {
    return s(this, h, f, d, !0);
  }, a.prototype.removeListener = function(h, f, d, v) {
    var m = r ? r + h : h;
    if (!this._events[m])
      return this;
    if (!f)
      return u(this, m), this;
    var S = this._events[m];
    if (S.fn)
      S.fn === f && (!v || S.once) && (!d || S.context === d) && u(this, m);
    else {
      for (var C = 0, D = [], z = S.length; C < z; C++)
        (S[C].fn !== f || v && !S[C].once || d && S[C].context !== d) && D.push(S[C]);
      D.length ? this._events[m] = D.length === 1 ? D[0] : D : u(this, m);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var f;
    return h ? (f = r ? r + h : h, this._events[f] && u(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
})(Ou);
var Hv = Ou.exports;
const Vv = /* @__PURE__ */ Nn(Hv), tn = new Vv();
let En;
function Lb(t) {
  En = new Bv({
    projectId: kv,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Kv }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Ze() {
  return new Promise((t) => {
    if (En)
      t(En);
    else {
      const e = setInterval(() => {
        En && (clearInterval(e), t(En));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var Va;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Va || (Va = {}));
var Wa;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Wa || (Wa = {}));
var Ga;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Ga || (Ga = {}));
var Ya;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Ya || (Ya = {}));
var Ja;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Ja || (Ja = {}));
class Fb extends Kt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Ub {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class Mb extends Kt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class jb {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class $b extends Kt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class qb extends Kt {
  constructor(e) {
    super();
  }
}
class zb {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class Bb {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class kb extends Kt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Kb {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class Hb extends Kt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class Vb {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class Wb {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class Gb extends Ps {
  constructor() {
    super();
  }
}
class Yb {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Jb extends Jt.EventEmitter {
  constructor() {
    super();
  }
}
class Qb {
  constructor(e) {
    this.client = e;
  }
}
function xu(t) {
  hr(() => (Ze().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Ze().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function Wv(t) {
  hr(() => (Ze().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Ze().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Cu(t) {
  hr(() => (Ze().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Ze().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function nr() {
  const [t, e] = Xn(void 0);
  return xu((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Cu((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), Wv((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), hr(() => {
    async function r() {
      const i = await (await Ze()).getSession();
      e(i);
    }
    return r(), tn.on("session_change", r), () => {
      tn.off("session_change", r);
    };
  }, []), t;
}
function Si(t) {
  hr(() => (Ze().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Ze().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const Qa = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (l, h) => {
    const f = typeof l == "function" ? l(e) : l;
    if (!Object.is(f, e)) {
      const d = e;
      e = h ?? typeof f != "object" ? f : Object.assign({}, e, f), r.forEach((v) => v(e, d));
    }
  }, i = () => e, a = { setState: n, getState: i, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, a), a;
}, Gv = (t) => t ? Qa(t) : Qa;
var As = { exports: {} }, rs = {}, Qn = { exports: {} }, ns = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Yv() {
  if (Xa)
    return ns;
  Xa = 1;
  var t = li;
  function e(d, v) {
    return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, u = t.useDebugValue;
  function a(d, v) {
    var m = v(), S = n({ inst: { value: m, getSnapshot: v } }), C = S[0].inst, D = S[1];
    return s(function() {
      C.value = m, C.getSnapshot = v, l(C) && D({ inst: C });
    }, [d, m, v]), i(function() {
      return l(C) && D({ inst: C }), d(function() {
        l(C) && D({ inst: C });
      });
    }, [d]), u(m), m;
  }
  function l(d) {
    var v = d.getSnapshot;
    d = d.value;
    try {
      var m = v();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function h(d, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : a;
  return ns.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, ns;
}
var is = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function Jv() {
  return Za || (Za = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = li, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var w = arguments.length, b = new Array(w > 1 ? w - 1 : 0), p = 1; p < w; p++)
          b[p - 1] = arguments[p];
        n("error", x, b);
      }
    }
    function n(x, w, b) {
      {
        var p = e.ReactDebugCurrentFrame, o = p.getStackAddendum();
        o !== "" && (w += "%s", b = b.concat([o]));
        var g = b.map(function(T) {
          return String(T);
        });
        g.unshift("Warning: " + w), Function.prototype.apply.call(console[x], console, g);
      }
    }
    function i(x, w) {
      return x === w && (x !== 0 || 1 / x === 1 / w) || x !== x && w !== w;
    }
    var s = typeof Object.is == "function" ? Object.is : i, u = t.useState, a = t.useEffect, l = t.useLayoutEffect, h = t.useDebugValue, f = !1, d = !1;
    function v(x, w, b) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = w();
      if (!d) {
        var o = w();
        s(p, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = u({
        inst: {
          value: p,
          getSnapshot: w
        }
      }), T = g[0].inst, F = g[1];
      return l(function() {
        T.value = p, T.getSnapshot = w, m(T) && F({
          inst: T
        });
      }, [x, p, w]), a(function() {
        m(T) && F({
          inst: T
        });
        var B = function() {
          m(T) && F({
            inst: T
          });
        };
        return x(B);
      }, [x]), h(p), p;
    }
    function m(x) {
      var w = x.getSnapshot, b = x.value;
      try {
        var p = w();
        return !s(b, p);
      } catch {
        return !0;
      }
    }
    function S(x, w, b) {
      return w();
    }
    var C = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !C, z = D ? S : v, _ = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : z;
    is.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), is;
}
var ec;
function Au() {
  return ec || (ec = 1, process.env.NODE_ENV === "production" ? Qn.exports = Yv() : Qn.exports = Jv()), Qn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Qv() {
  if (tc)
    return rs;
  tc = 1;
  var t = li, e = Au();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
  return rs.useSyncExternalStoreWithSelector = function(h, f, d, v, m) {
    var S = s(null);
    if (S.current === null) {
      var C = { hasValue: !1, value: null };
      S.current = C;
    } else
      C = S.current;
    S = a(function() {
      function z(p) {
        if (!_) {
          if (_ = !0, x = p, p = v(p), m !== void 0 && C.hasValue) {
            var o = C.value;
            if (m(o, p))
              return w = o;
          }
          return w = p;
        }
        if (o = w, n(x, p))
          return o;
        var g = v(p);
        return m !== void 0 && m(o, g) ? o : (x = p, w = g);
      }
      var _ = !1, x, w, b = d === void 0 ? null : d;
      return [function() {
        return z(f());
      }, b === null ? void 0 : function() {
        return z(b());
      }];
    }, [f, d, v, m]);
    var D = i(h, S[0], S[1]);
    return u(function() {
      C.hasValue = !0, C.value = D;
    }, [D]), l(D), D;
  }, rs;
}
var ss = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Xv() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = li, e = Au();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    function h(f, d, v, m, S) {
      var C = s(null), D;
      C.current === null ? (D = {
        hasValue: !1,
        value: null
      }, C.current = D) : D = C.current;
      var z = a(function() {
        var b = !1, p, o, g = function(W) {
          if (!b) {
            b = !0, p = W;
            var ne = m(W);
            if (S !== void 0 && D.hasValue) {
              var N = D.value;
              if (S(N, ne))
                return o = N, N;
            }
            return o = ne, ne;
          }
          var j = p, re = o;
          if (n(j, W))
            return re;
          var G = m(W);
          return S !== void 0 && S(re, G) ? re : (p = W, o = G, G);
        }, T = v === void 0 ? null : v, F = function() {
          return g(d());
        }, B = T === null ? void 0 : function() {
          return g(T());
        };
        return [F, B];
      }, [d, v, m, S]), _ = z[0], x = z[1], w = i(f, _, x);
      return u(function() {
        D.hasValue = !0, D.value = w;
      }, [w]), l(w), w;
    }
    ss.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ss;
}
process.env.NODE_ENV === "production" ? As.exports = Qv() : As.exports = Xv();
var Zv = As.exports;
const eb = /* @__PURE__ */ Nn(Zv), { useSyncExternalStoreWithSelector: tb } = eb;
function rb(t, e = t.getState, r) {
  const n = tb(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return ju(n), n;
}
const nc = (t) => {
  const e = typeof t == "function" ? Gv(t) : t, r = (n, i) => rb(e, n, i);
  return Object.assign(r, e), r;
}, nb = (t) => t ? nc(t) : nc;
function ib(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const u = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), a = (s = r.getItem(i)) != null ? s : null;
      return a instanceof Promise ? a.then(u) : u(a);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const An = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return An(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return An(n)(r);
      }
    };
  }
}, sb = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (D) => D,
    version: 0,
    merge: (D, z) => ({
      ...z,
      ...D
    }),
    ...e
  }, u = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h;
  try {
    h = s.getStorage();
  } catch {
  }
  if (!h)
    return t(
      (...D) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...D);
      },
      n,
      i
    );
  const f = An(s.serialize), d = () => {
    const D = s.partialize({ ...n() });
    let z;
    const _ = f({ state: D, version: s.version }).then(
      (x) => h.setItem(s.name, x)
    ).catch((x) => {
      z = x;
    });
    if (z)
      throw z;
    return _;
  }, v = i.setState;
  i.setState = (D, z) => {
    v(D, z), d();
  };
  const m = t(
    (...D) => {
      r(...D), d();
    },
    n,
    i
  );
  let S;
  const C = () => {
    var D;
    if (!h)
      return;
    u = !1, a.forEach((_) => _(n()));
    const z = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, n())) || void 0;
    return An(h.getItem.bind(h))(s.name).then((_) => {
      if (_)
        return s.deserialize(_);
    }).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              _.state,
              _.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return _.state;
    }).then((_) => {
      var x;
      return S = s.merge(
        _,
        (x = n()) != null ? x : m
      ), r(S, !0), d();
    }).then(() => {
      z == null || z(S, void 0), u = !0, l.forEach((_) => _(S));
    }).catch((_) => {
      z == null || z(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (D) => {
      s = {
        ...s,
        ...D
      }, D.getStorage && (h = D.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => C(),
    hasHydrated: () => u,
    onHydrate: (D) => (a.add(D), () => {
      a.delete(D);
    }),
    onFinishHydration: (D) => (l.add(D), () => {
      l.delete(D);
    })
  }, C(), S || m;
}, ob = (t, e) => (r, n, i) => {
  let s = {
    storage: ib(() => localStorage),
    partialize: (C) => C,
    version: 0,
    merge: (C, D) => ({
      ...D,
      ...C
    }),
    ...e
  }, u = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...C) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...C);
      },
      n,
      i
    );
  const f = () => {
    const C = s.partialize({ ...n() });
    return h.setItem(s.name, {
      state: C,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (C, D) => {
    d(C, D), f();
  };
  const v = t(
    (...C) => {
      r(...C), f();
    },
    n,
    i
  );
  let m;
  const S = () => {
    var C, D;
    if (!h)
      return;
    u = !1, a.forEach((_) => {
      var x;
      return _((x = n()) != null ? x : v);
    });
    const z = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, (C = n()) != null ? C : v)) || void 0;
    return An(h.getItem.bind(h))(s.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              _.state,
              _.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return _.state;
    }).then((_) => {
      var x;
      return m = s.merge(
        _,
        (x = n()) != null ? x : v
      ), r(m, !0), f();
    }).then(() => {
      z == null || z(m, void 0), m = n(), u = !0, l.forEach((_) => _(m));
    }).catch((_) => {
      z == null || z(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (C) => {
      s = {
        ...s,
        ...C
      }, C.storage && (h = C.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => S(),
    hasHydrated: () => u,
    onHydrate: (C) => (a.add(C), () => {
      a.delete(C);
    }),
    onFinishHydration: (C) => (l.add(C), () => {
      l.delete(C);
    })
  }, s.skipHydration || S(), m || v;
}, ab = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? sb(t, e) : ob(t, e), cb = ab, Kr = nb()(
  cb((t, e) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (r) => {
      t({ account: r });
    },
    setChainId: (r) => {
      t({ chainId: r });
    },
    disconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      });
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function io() {
  const [t, e] = Xn(void 0), [r, n] = Xn(void 0), [i, s] = Xn(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
function dr(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: u } = io();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Ze()).request(l ?? t);
      return i(f), f;
    } catch (h) {
      throw s(h), h;
    } finally {
      u(!1);
    }
  }
  return { data: e, error: r, loading: n, request: a };
}
const ic = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, Xb = () => {
  const t = nr(), e = "aleo:1", [r, n] = Kr((h) => [h.account, h.setAccount]), { request: i, data: s, error: u, loading: a } = dr({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  Si(({ params: h, topic: f }) => {
    if (h.event.name === "accountSelected" && t && t.topic === f) {
      const v = h.event.address, m = h.chainId.split(":")[0], S = h.chainId.split(":")[1];
      n({
        network: m,
        chainId: S,
        address: v,
        shortenedAddress: ic(v)
      });
    }
  }), Cu(({ params: h, topic: f }) => {
    const d = h.event.address, v = h.chainId.split(":")[0], m = h.chainId.split(":")[1];
    n({
      network: v,
      chainId: m,
      address: d,
      shortenedAddress: ic(d)
    });
  }), xu(({ params: h, topic: f }) => {
    n(void 0);
  }), hr(() => {
    t && !a && i();
  }, [t == null ? void 0 : t.topic]), hr(() => {
    if (s) {
      const h = s, f = h == null ? void 0 : h.account;
      f && n(f);
    }
  }, [s]);
  const l = u ? u.message : s && s.error;
  return {
    account: r,
    error: l,
    loading: a
  };
}, Zb = () => {
  const t = nr(), [e] = Kr((f) => [f.account]), r = "aleo:1", { request: n, data: i, error: s, loading: u } = dr({
    topic: t == null ? void 0 : t.topic,
    chainId: r,
    request: {
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0
      }
    }
  });
  Si(({ params: f, topic: d }) => {
    const v = f.event.name, m = f.event.address;
    (v === "selectedAccountSynced" || v === "accountSelected") && t && t.topic === d && m === (e == null ? void 0 : e.address) && !u && n();
  }), hr(() => {
    t && !u && n();
  }, [t == null ? void 0 : t.topic]);
  const a = s ? s.message : i && i.error, l = i;
  return { balances: l == null ? void 0 : l.balances, error: a, loading: u };
};
function em() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = io();
  async function u() {
    try {
      s(!0), i(void 0);
      const l = await (await Ze()).connect({
        requiredNamespaces: {
          aleo: {
            methods: ro,
            chains: Ei,
            events: no
          }
        }
      });
      return n(l), tn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (a) {
      throw i(a), a;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: u };
}
const tm = (t) => {
  const e = nr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: u } = dr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : i && i.error, l = i;
  return { createEvent: () => {
    t && n();
  }, eventID: l == null ? void 0 : l.eventId, loading: u, error: a };
}, rm = () => {
  const t = nr(), { request: e, data: r, error: n, loading: i } = dr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = n ? n.message : r && r.error, u = r;
  return { createSharedState: () => {
    e();
  }, data: u == null ? void 0 : u.data, loading: i, error: s };
};
var Ns = { exports: {} }, os, sc;
function ub() {
  if (sc)
    return os;
  sc = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  os = function(f, d) {
    d = d || {};
    var v = typeof f;
    if (v === "string" && f.length > 0)
      return u(f);
    if (v === "number" && isFinite(f))
      return d.long ? l(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function u(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var v = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * s;
          case "weeks":
          case "week":
          case "w":
            return v * i;
          case "days":
          case "day":
          case "d":
            return v * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return v * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function a(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function l(f) {
    var d = Math.abs(f);
    return d >= n ? h(f, d, n, "day") : d >= r ? h(f, d, r, "hour") : d >= e ? h(f, d, e, "minute") : d >= t ? h(f, d, t, "second") : f + " ms";
  }
  function h(f, d, v, m) {
    var S = d >= v * 1.5;
    return Math.round(f / v) + " " + m + (S ? "s" : "");
  }
  return os;
}
function lb(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = i, r.enabled = u, r.humanize = ub(), r.destroy = h, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let v = 0; v < f.length; v++)
      d = (d << 5) - d + f.charCodeAt(v), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, v = null, m, S;
    function C(...D) {
      if (!C.enabled)
        return;
      const z = C, _ = Number(/* @__PURE__ */ new Date()), x = _ - (d || _);
      z.diff = x, z.prev = d, z.curr = _, d = _, D[0] = r.coerce(D[0]), typeof D[0] != "string" && D.unshift("%O");
      let w = 0;
      D[0] = D[0].replace(/%([a-zA-Z%])/g, (p, o) => {
        if (p === "%%")
          return "%";
        w++;
        const g = r.formatters[o];
        if (typeof g == "function") {
          const T = D[w];
          p = g.call(z, T), D.splice(w, 1), w--;
        }
        return p;
      }), r.formatArgs.call(z, D), (z.log || r.log).apply(z, D);
    }
    return C.namespace = f, C.useColors = r.useColors(), C.color = r.selectColor(f), C.extend = n, C.destroy = r.destroy, Object.defineProperty(C, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => v !== null ? v : (m !== r.namespaces && (m = r.namespaces, S = r.enabled(f)), S),
      set: (D) => {
        v = D;
      }
    }), typeof r.init == "function" && r.init(C), C;
  }
  function n(f, d) {
    const v = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return v.log = this.log, v;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const v = (typeof f == "string" ? f : "").split(/[\s,]+/), m = v.length;
    for (d = 0; d < m; d++)
      v[d] && (f = v[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function u(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, v;
    for (d = 0, v = r.skips.length; d < v; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, v = r.names.length; d < v; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function a(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var hb = lb;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = u(), e.destroy = (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
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
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    l.splice(1, 0, h, "color: inherit");
    let f = 0, d = 0;
    l[0].replace(/%[a-zA-Z%]/g, (v) => {
      v !== "%%" && (f++, v === "%c" && (d = f));
    }), l.splice(d, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(l) {
    try {
      l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let l;
    try {
      l = e.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  function u() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = hb(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(Ns, Ns.exports);
var fb = Ns.exports;
const db = /* @__PURE__ */ Nn(fb), so = db("wallet:sdk");
so.enabled = !0;
const nm = (t) => {
  so("useDecrypt", t);
  const e = nr(), { request: r, data: n, error: i, loading: s } = dr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), u = i ? i.message : n && n.error, a = n;
  return { decrypt: () => {
    t && r();
  }, plaintexts: a == null ? void 0 : a.plaintexts, loading: s, error: u };
};
function im() {
  const t = nr(), { error: e, loading: r, setError: n, setLoading: i } = io();
  async function s() {
    try {
      i(!0), n(void 0), await (await Ze()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: pt("USER_DISCONNECTED")
      }), tn.emit("session_change"), Kr.setState({ account: void 0 });
    } catch (u) {
      throw n(u), u;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: r, disconnect: s };
}
const sm = ({ filter: t, page: e }) => {
  const r = nr(), [n] = Kr((S) => [S.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { request: i, data: s, error: u, loading: a } = dr({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: e
      }
    }
  });
  Si(({ id: S, params: C, topic: D }) => {
    const z = C.event.name, _ = C.event.address;
    z === "selectedAccountSynced" && r && r.topic === D && _ === (n == null ? void 0 : n.address) && !a && i();
  });
  const l = !!r && !!n;
  hr(() => {
    l && !a && i();
  }, [l]);
  const h = () => {
    !!r && !!n && !a && i();
  }, f = u ? u.message : s && s.error, d = s, v = d == null ? void 0 : d.events, m = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: h, events: v, error: f, loading: a, page: e, pageCount: m };
}, om = (t) => {
  const e = nr(), { request: r, data: n, error: i, loading: s } = dr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), u = i ? i.message : n && n.error, a = n;
  return { importSharedState: () => {
    r();
  }, data: a == null ? void 0 : a.data, loading: s, error: u };
}, am = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, cm = ({ address: t, filter: e, page: r }) => {
  const n = nr(), [i, s] = Kr((D) => [
    D.chainId,
    D.account
  ]), { request: u, data: a, error: l, loading: h } = dr({
    topic: n == null ? void 0 : n.topic,
    chainId: i,
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: r
      }
    }
  });
  Si(({ params: D, topic: z }) => {
    const _ = D.event.name, x = D.event.address;
    (_ === "selectedAccountSynced" || _ === "accountSelected" || _ === "sharedAccountSynced" && x === t) && n && n.topic === z && !h && u();
  });
  const f = !!n && !!s;
  hr(() => {
    f && !h && u();
  }, [f]);
  const d = () => {
    f && !h && u();
  }, v = l ? l.message : a && a.error, m = a, S = m == null ? void 0 : m.records, C = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: d, records: S, error: v, loading: h, page: r, pageCount: C };
}, um = (t) => {
  const e = nr(), r = t == null ? void 0 : t.inputs.map(
    (f) => typeof f == "string" ? f : f.plaintext
  ), { request: n, data: i, error: s, loading: u } = dr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : i && i.error, l = i;
  return { requestCreateEvent: () => {
    t && (so("useRequestCreateEvent requesting...", t), n());
  }, eventId: l == null ? void 0 : l.eventId, error: a, loading: u };
}, lm = (t, e) => {
  const r = nr(), { request: n, data: i, error: s, loading: u } = dr({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: e
      }
    }
  }), a = s ? s.message : i && i.error;
  return { requestSignature: () => {
    n();
  }, response: i, loading: u, error: a };
}, hm = async () => {
  const t = await Ze(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    const n = await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return Kr.setState({ account: n.account }), n;
  } catch (n) {
    const i = n.message;
    return console.error("getAccount error", i), { error: i };
  }
}, fm = async () => {
  const t = await Ze(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0
        }
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("getBalance error", i), { error: i };
  }
}, dm = async () => {
  const t = await Ze();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: ro,
          chains: Ei,
          events: no
        }
      }
    });
    return tn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, pm = async (t) => {
  const e = await Ze(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  const i = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: i
        }
      }
    });
  } catch (s) {
    const u = s.message;
    return console.error("createEvent error", u), { error: u };
  }
}, gm = async () => {
  const t = await Ze(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("createSharedState error", i), { error: i };
  }
}, ym = async (t) => {
  const e = await Ze(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (i) {
    return console.error("decrypt error", i.message), { error: i.message };
  }
}, vm = async () => {
  const t = await Ze(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: pt("USER_DISCONNECTED"),
      topic: e.topic
    }), tn.emit("session_change"), Kr.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, bm = async (t) => {
  const e = await Ze(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const i = async (s = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: n,
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: s
      }
    }
  });
  try {
    return await i();
  } catch (s) {
    const u = s.message;
    return console.error("getEvents error", u), { error: u };
  }
}, mm = async (t) => {
  const e = await Ze(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: n,
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, wm = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await Ze(), i = await (n == null ? void 0 : n.getSession()), s = "aleo:1";
  if (!i || !s || !n)
    return { error: "no session, chainId, or connection" };
  const u = async (a = 0) => await n.request({
    topic: i.topic,
    chainId: s,
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: a
      }
    }
  });
  try {
    return await u();
  } catch (a) {
    const l = a.message;
    return console.error("getRecords error", l), { error: l };
  }
}, _m = async ({
  message: t,
  address: e
}) => {
  const r = await Ze(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
  if (!n || !i || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: i,
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: e
        }
      }
    });
  } catch (s) {
    const u = s.message;
    return console.error("signature error", u), { error: u };
  }
}, Em = 50, pb = [
  "wc@2:client:0.3//proposal",
  "wc@2:core:0.3//subscription",
  "wc@2:core:0.3//keychain",
  "wc@2:core:0.3//messages",
  "wc@2:core:0.3//history",
  "wc@2:client:0.3//session",
  "wc@2:core:0.3//expirer",
  "WCM_WALLETCONNECT_CLIENT_ID",
  "wc@2:core:0.3//pairing",
  "debug"
], oc = il.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  oc !== t && (pb.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", oc));
} catch (t) {
  console.error(t);
}
export {
  lm as $,
  Ja as A,
  Ei as B,
  Jb as C,
  no as D,
  Va as E,
  kv as F,
  Kv as G,
  Pb as H,
  Bb as I,
  ic as J,
  Xb as K,
  Zb as L,
  em as M,
  Ya as N,
  tm as O,
  rm as P,
  nm as Q,
  fl as R,
  Qb as S,
  ac as T,
  im as U,
  Ga as V,
  sm as W,
  om as X,
  am as Y,
  cm as Z,
  um as _,
  Ct as a,
  xu as a0,
  Si as a1,
  Wv as a2,
  Cu as a3,
  nr as a4,
  Em as a5,
  hm as a6,
  fm as a7,
  dm as a8,
  pm as a9,
  gm as aa,
  ym as ab,
  vm as ac,
  bm as ad,
  mm as ae,
  wm as af,
  _m as ag,
  Wa as b,
  Lb as c,
  Fb as d,
  tn as e,
  Hb as f,
  Ze as g,
  Mb as h,
  jb as i,
  qb as j,
  Yb as k,
  Ub as l,
  Vb as m,
  Eo as n,
  vb as o,
  rr as p,
  zb as q,
  kb as r,
  qi as s,
  yb as t,
  $b as u,
  Gb as v,
  Wb as w,
  Kb as x,
  en as y,
  ro as z
};
