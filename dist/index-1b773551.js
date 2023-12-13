import * as $t from "react";
import pn, { useEffect as fr, useState as Js } from "react";
const ud = "@puzzlehq/sdk", ld = "Puzzle SDK", hd = "0.1.44", dd = "Your portal to privacy", fd = "./dist/puzzle.cjs.js", pd = "./dist/puzzle.es.js", gd = "./dist/puzzle.umd.js", yd = "./dist/types/src/index.d.ts", md = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, vd = "module", bd = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types",
  "type-check": "tsc --noEmit"
}, wd = {
  "@puzzlehq/types": "1.0.8",
  "@tanstack/react-query": "^4.29.5",
  "@tanstack/react-query-devtools": "^5.13.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/core": "^2.10.6",
  "@walletconnect/keyvaluestorage": "1.0.2",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/sign-client": "^2.10.6",
  "@walletconnect/types": "^2.9.0",
  "@walletconnect/utils": "^2.9.0",
  debug: "^4.3.4",
  eventemitter3: "^5.0.1",
  events: "^3.3.0",
  immer: "^9.0.19",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, _d = {
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, Ed = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Sd = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], Dd = "Puzzle", xd = "ISC", Od = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Id = "https://github.com/puzzlehq/puzzle-sdk#readme", Cd = {
  patchedDependencies: {
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch",
    "@walletconnect/core@2.10.6": "patches/@walletconnect__core@2.10.6.patch"
  },
  overrides: {
    "@walletconnect/core": "^2.10.6",
    "@walletconnect/sign-client": "^2.10.6"
  }
}, Rd = {
  name: ud,
  displayName: ld,
  version: hd,
  description: dd,
  main: fd,
  module: pd,
  browser: gd,
  types: yd,
  exports: md,
  type: vd,
  scripts: bd,
  dependencies: wd,
  devDependencies: _d,
  repository: Ed,
  keywords: Sd,
  author: Dd,
  license: xd,
  bugs: Od,
  homepage: Id,
  pnpm: Cd
}, Td = Symbol(), $o = Object.getPrototypeOf, ha = /* @__PURE__ */ new WeakMap(), Pd = (t) => t && (ha.has(t) ? ha.get(t) : $o(t) === Object.prototype || $o(t) === Array.prototype), Ad = (t) => Pd(t) && t[Td] || null, ko = (t, e = !0) => {
  ha.set(t, e);
}, qi = (t) => typeof t == "object" && t !== null, kr = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakSet(), Nd = (t = Object.is, e = (u, h) => new Proxy(u, h), r = (u) => qi(u) && !Vs.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), n = (u) => {
  switch (u.status) {
    case "fulfilled":
      return u.value;
    case "rejected":
      throw u.reason;
    default:
      throw u;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (u, h, f = n) => {
  const p = s.get(u);
  if ((p == null ? void 0 : p[0]) === h)
    return p[1];
  const m = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u));
  return ko(m, !0), s.set(u, [h, m]), Reflect.ownKeys(u).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const E = Reflect.get(u, v), S = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Vs.has(E))
      ko(E, !1);
    else if (E instanceof Promise)
      delete S.value, S.get = () => f(E);
    else if (kr.has(E)) {
      const [A, w] = kr.get(
        E
      );
      S.value = i(
        A,
        w(),
        f
      );
    }
    Object.defineProperty(m, v, S);
  }), Object.preventExtensions(m);
}, o = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (u) => {
  if (!qi(u))
    throw new Error("object required");
  const h = o.get(u);
  if (h)
    return h;
  let f = a[0];
  const p = /* @__PURE__ */ new Set(), m = (R, N = ++a[0]) => {
    f !== N && (f = N, p.forEach((U) => U(R, N)));
  };
  let v = a[1];
  const E = (R = ++a[1]) => (v !== R && !p.size && (v = R, A.forEach(([N]) => {
    const U = N[1](R);
    U > f && (f = U);
  })), f), S = (R) => (N, U) => {
    const V = [...N];
    V[1] = [R, ...V[1]], m(V, U);
  }, A = /* @__PURE__ */ new Map(), w = (R, N) => {
    if (p.size) {
      const U = N[3](S(R));
      A.set(R, [N, U]);
    } else
      A.set(R, [N]);
  }, x = (R) => {
    var N;
    const U = A.get(R);
    U && (A.delete(R), (N = U[1]) == null || N.call(U));
  }, b = (R) => (p.add(R), p.size === 1 && A.forEach(([U, V], G) => {
    const C = U[3](S(G));
    A.set(G, [U, C]);
  }), () => {
    p.delete(R), p.size === 0 && A.forEach(([U, V], G) => {
      V && (V(), A.set(G, [U]));
    });
  }), D = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)), c = e(D, {
    deleteProperty(R, N) {
      const U = Reflect.get(R, N);
      x(N);
      const V = Reflect.deleteProperty(R, N);
      return V && m(["delete", [N], U]), V;
    },
    set(R, N, U, V) {
      const G = Reflect.has(R, N), C = Reflect.get(R, N, V);
      if (G && (t(C, U) || o.has(U) && t(C, o.get(U))))
        return !0;
      x(N), qi(U) && (U = Ad(U) || U);
      let L = U;
      if (U instanceof Promise)
        U.then((Z) => {
          U.status = "fulfilled", U.value = Z, m(["resolve", [N], Z]);
        }).catch((Z) => {
          U.status = "rejected", U.reason = Z, m(["reject", [N], Z]);
        });
      else {
        !kr.has(U) && r(U) && (L = l(U));
        const Z = !Vs.has(L) && kr.get(L);
        Z && w(N, Z);
      }
      return Reflect.set(R, N, L, V), m(["set", [N], U, C]), !0;
    }
  });
  o.set(u, c);
  const y = [
    D,
    E,
    i,
    b
  ];
  return kr.set(c, y), Reflect.ownKeys(u).forEach((R) => {
    const N = Object.getOwnPropertyDescriptor(
      u,
      R
    );
    "value" in N && (c[R] = u[R], delete N.value, delete N.writable), Object.defineProperty(D, R, N);
  }), c;
}) => [
  // public functions
  l,
  // shared state
  kr,
  Vs,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  o,
  a
], [Ld] = Nd();
function Gr(t = {}) {
  return Ld(t);
}
function gn(t, e, r) {
  const n = kr.get(t);
  let s;
  const i = [], o = n[3];
  let a = !1;
  const u = o((h) => {
    if (i.push(h), r) {
      e(i.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, a && e(i.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, u();
  };
}
function Fd(t, e) {
  const r = kr.get(t), [n, s, i] = r;
  return i(n, s(), e);
}
const bt = Gr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Hu = { state: bt, subscribe(t) {
  return gn(bt, () => t(bt));
}, push(t, e) {
  t !== bt.view && (bt.view = t, e && (bt.data = e), bt.history.push(t));
}, reset(t) {
  bt.view = t, bt.history = [t];
}, replace(t) {
  bt.history.length > 1 && (bt.history[bt.history.length - 1] = t, bt.view = t);
}, goBack() {
  if (bt.history.length > 1) {
    bt.history.pop();
    const [t] = bt.history.slice(-1);
    bt.view = t;
  }
}, setData(t) {
  bt.data = t;
} }, Nt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Nt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return Nt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (Nt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!Nt.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let n = t;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Nt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Hu.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Md = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Rt = Gr({ enabled: Md, userSessionId: "", events: [], connectedWalletId: void 0 }), Ud = { state: Rt, subscribe(t) {
  return gn(Rt.events, () => t(Fd(Rt.events[Rt.events.length - 1])));
}, initialize() {
  Rt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Rt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Rt.connectedWalletId = t;
}, click(t) {
  if (Rt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Rt.userSessionId, timestamp: Date.now(), data: t };
    Rt.events.push(e);
  }
}, track(t) {
  if (Rt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Rt.userSessionId, timestamp: Date.now(), data: t };
    Rt.events.push(e);
  }
}, view(t) {
  if (Rt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Rt.userSessionId, timestamp: Date.now(), data: t };
    Rt.events.push(e);
  }
} }, br = Gr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), ur = { state: br, subscribe(t) {
  return gn(br, () => t(br));
}, setChains(t) {
  br.chains = t;
}, setWalletConnectUri(t) {
  br.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  br.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  br.isCustomMobile = t;
}, setIsDataLoaded(t) {
  br.isDataLoaded = t;
}, setIsUiLoaded(t) {
  br.isUiLoaded = t;
}, setIsAuth(t) {
  br.isAuth = t;
} }, Ks = Gr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), An = { state: Ks, subscribe(t) {
  return gn(Ks, () => t(Ks));
}, setConfig(t) {
  var e, r;
  Ud.initialize(), ur.setChains(t.chains), ur.setIsAuth(!!t.enableAuthMode), ur.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), ur.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Nt.setModalVersionInStorage(), Object.assign(Ks, t);
} };
var jd = Object.defineProperty, qo = Object.getOwnPropertySymbols, $d = Object.prototype.hasOwnProperty, kd = Object.prototype.propertyIsEnumerable, zo = (t, e, r) => e in t ? jd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, qd = (t, e) => {
  for (var r in e || (e = {}))
    $d.call(e, r) && zo(t, r, e[r]);
  if (qo)
    for (var r of qo(e))
      kd.call(e, r) && zo(t, r, e[r]);
  return t;
};
const da = "https://explorer-api.walletconnect.com", fa = "wcm", pa = "js-2.6.2";
async function Ws(t, e) {
  const r = qd({ sdkType: fa, sdkVersion: pa }, e), n = new URL(t, da);
  return n.searchParams.append("projectId", An.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const Xr = { async getDesktopListings(t) {
  return Ws("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Ws("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Ws("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Ws("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${da}/w3m/v1/getWalletImage/${t}?projectId=${An.state.projectId}&sdkType=${fa}&sdkVersion=${pa}`;
}, getAssetImageUrl(t) {
  return `${da}/w3m/v1/getAssetImage/${t}?projectId=${An.state.projectId}&sdkType=${fa}&sdkVersion=${pa}`;
} };
var zd = Object.defineProperty, Bo = Object.getOwnPropertySymbols, Bd = Object.prototype.hasOwnProperty, Vd = Object.prototype.propertyIsEnumerable, Vo = (t, e, r) => e in t ? zd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kd = (t, e) => {
  for (var r in e || (e = {}))
    Bd.call(e, r) && Vo(t, r, e[r]);
  if (Bo)
    for (var r of Bo(e))
      Vd.call(e, r) && Vo(t, r, e[r]);
  return t;
};
const Ko = Nt.isMobile(), wr = Gr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), aE = { state: wr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = An.state;
  if (t === "NONE" || e === "ALL" && !t)
    return wr.recomendedWallets;
  if (Nt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Xr.getAllListings(r), s = Object.values(n);
    s.sort((i, o) => {
      const a = t.indexOf(i.id), l = t.indexOf(o.id);
      return a - l;
    }), wr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = ur.state, s = r == null ? void 0 : r.join(","), i = Nt.isArray(e), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Nt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: a } = Ko ? await Xr.getMobileListings(o) : await Xr.getDesktopListings(o);
    wr.recomendedWallets = Object.values(a);
  }
  return wr.recomendedWallets;
}, async getWallets(t) {
  const e = Kd({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = An.state, { recomendedWallets: s } = wr;
  if (n === "ALL")
    return wr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Nt.isArray(r) && (e.excludedIds = r.join(",")), Nt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), ur.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: o } = t, { listings: a, total: l } = Ko ? await Xr.getMobileListings(e) : await Xr.getDesktopListings(e), u = Object.values(a), h = o ? "search" : "wallets";
  return wr[h] = { listings: [...wr[h].listings, ...u], total: l, page: i ?? 1 }, { listings: u, total: l };
}, getWalletImageUrl(t) {
  return Xr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Xr.getAssetImageUrl(t);
}, resetSearch() {
  wr.search = { listings: [], total: 0, page: 1 };
} }, _n = Gr({ open: !1 }), zi = { state: _n, subscribe(t) {
  return gn(_n, () => t(_n));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = ur.state;
    if (Nt.removeWalletConnectDeepLink(), ur.setWalletConnectUri(t == null ? void 0 : t.uri), ur.setChains(t == null ? void 0 : t.chains), Hu.reset("ConnectWallet"), r && n)
      _n.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = ur.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), _n.open = !0, e());
      }, 200);
    }
  });
}, close() {
  _n.open = !1;
} };
var Wd = Object.defineProperty, Wo = Object.getOwnPropertySymbols, Hd = Object.prototype.hasOwnProperty, Gd = Object.prototype.propertyIsEnumerable, Ho = (t, e, r) => e in t ? Wd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zd = (t, e) => {
  for (var r in e || (e = {}))
    Hd.call(e, r) && Ho(t, r, e[r]);
  if (Wo)
    for (var r of Wo(e))
      Gd.call(e, r) && Ho(t, r, e[r]);
  return t;
};
function Qd() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Vn = Gr({ themeMode: Qd() ? "dark" : "light" }), Go = { state: Vn, subscribe(t) {
  return gn(Vn, () => t(Vn));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Vn.themeMode = e), r && (Vn.themeVariables = Zd({}, r));
} }, en = Gr({ open: !1, message: "", variant: "success" }), oE = { state: en, subscribe(t) {
  return gn(en, () => t(en));
}, openToast(t, e) {
  en.open = !0, en.message = t, en.variant = e;
}, closeToast() {
  en.open = !1;
} };
let Yd = class {
  constructor(e) {
    this.openModal = zi.open, this.closeModal = zi.close, this.subscribeModal = zi.subscribe, this.setTheme = Go.setThemeConfig, Go.setThemeConfig(e), An.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-cbd18a46.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), ur.setIsUiLoaded(!0);
    }
  }
};
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Di(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ya(t) {
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
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Ja = { exports: {} }, Cn = typeof Reflect == "object" ? Reflect : null, Zo = Cn && typeof Cn.apply == "function" ? Cn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Xs;
Cn && typeof Cn.ownKeys == "function" ? Xs = Cn.ownKeys : Object.getOwnPropertySymbols ? Xs = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Xs = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Jd(t) {
  console && console.warn && console.warn(t);
}
var Gu = Number.isNaN || function(e) {
  return e !== e;
};
function ze() {
  ze.init.call(this);
}
Ja.exports = ze;
Ja.exports.once = rf;
ze.EventEmitter = ze;
ze.prototype._events = void 0;
ze.prototype._eventsCount = 0;
ze.prototype._maxListeners = void 0;
var Qo = 10;
function xi(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(ze, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Qo;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Gu(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Qo = t;
  }
});
ze.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ze.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Gu(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Zu(t) {
  return t._maxListeners === void 0 ? ze.defaultMaxListeners : t._maxListeners;
}
ze.prototype.getMaxListeners = function() {
  return Zu(this);
};
ze.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var s = e === "error", i = this._events;
  if (i !== void 0)
    s = s && i.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var o;
    if (r.length > 0 && (o = r[0]), o instanceof Error)
      throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var l = i[e];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    Zo(l, this, r);
  else
    for (var u = l.length, h = el(l, u), n = 0; n < u; ++n)
      Zo(h[n], this, r);
  return !0;
};
function Qu(t, e, r, n) {
  var s, i, o;
  if (xi(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), o = i[e]), o === void 0)
    o = i[e] = r, ++t._eventsCount;
  else if (typeof o == "function" ? o = i[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), s = Zu(t), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = o.length, Jd(a);
  }
  return t;
}
ze.prototype.addListener = function(e, r) {
  return Qu(this, e, r, !1);
};
ze.prototype.on = ze.prototype.addListener;
ze.prototype.prependListener = function(e, r) {
  return Qu(this, e, r, !0);
};
function Xd() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Yu(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Xd.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
ze.prototype.once = function(e, r) {
  return xi(r), this.on(e, Yu(this, e, r)), this;
};
ze.prototype.prependOnceListener = function(e, r) {
  return xi(r), this.prependListener(e, Yu(this, e, r)), this;
};
ze.prototype.removeListener = function(e, r) {
  var n, s, i, o, a;
  if (xi(r), s = this._events, s === void 0)
    return this;
  if (n = s[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (i = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === r || n[o].listener === r) {
        a = n[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : ef(n, i), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, a || r);
  }
  return this;
};
ze.prototype.off = ze.prototype.removeListener;
ze.prototype.removeAllListeners = function(e) {
  var r, n, s;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), o;
    for (s = 0; s < i.length; ++s)
      o = i[s], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function Ju(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? tf(s) : el(s, s.length);
}
ze.prototype.listeners = function(e) {
  return Ju(this, e, !0);
};
ze.prototype.rawListeners = function(e) {
  return Ju(this, e, !1);
};
ze.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Xu.call(t, e);
};
ze.prototype.listenerCount = Xu;
function Xu(t) {
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
  return this._eventsCount > 0 ? Xs(this._events) : [];
};
function el(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function ef(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function tf(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function rf(t, e) {
  return new Promise(function(r, n) {
    function s(o) {
      t.removeListener(e, i), n(o);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    tl(t, e, i, { once: !0 }), e !== "error" && nf(t, s, { once: !0 });
  });
}
function nf(t, e, r) {
  typeof t.on == "function" && tl(t, "error", e, r);
}
function tl(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var nr = Ja.exports;
const Ss = /* @__PURE__ */ Di(nr), sf = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, af = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, of = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function cf(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    uf(t);
    return;
  }
  return e;
}
function uf(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function Hs(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.at(-1) === '"' && !t.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const n = r.toLowerCase();
    if (n === "true")
      return !0;
    if (n === "false")
      return !1;
    if (n === "undefined")
      return;
    if (n === "null")
      return null;
    if (n === "nan")
      return Number.NaN;
    if (n === "infinity")
      return Number.POSITIVE_INFINITY;
    if (n === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!of.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (sf.test(t) || af.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, cf);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function lf(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function wt(t, ...e) {
  try {
    return lf(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function hf(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function df(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function ei(t) {
  if (hf(t))
    return String(t);
  if (df(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return ei(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function rl() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const ga = "base64:";
function ff(t) {
  if (typeof t == "string")
    return t;
  rl();
  const e = Buffer.from(t).toString("base64");
  return ga + e;
}
function pf(t) {
  return typeof t != "string" || !t.startsWith(ga) ? t : (rl(), Buffer.from(t.slice(ga.length), "base64"));
}
function Vt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function gf(...t) {
  return Vt(t.join(":"));
}
function Gs(t) {
  return t = Vt(t), t ? t + ":" : "";
}
const yf = "memory", mf = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: yf,
    options: {},
    hasItem(e) {
      return t.has(e);
    },
    getItem(e) {
      return t.get(e) ?? null;
    },
    getItemRaw(e) {
      return t.get(e) ?? null;
    },
    setItem(e, r) {
      t.set(e, r);
    },
    setItemRaw(e, r) {
      t.set(e, r);
    },
    removeItem(e) {
      t.delete(e);
    },
    getKeys() {
      return Array.from(t.keys());
    },
    clear() {
      t.clear();
    },
    dispose() {
      t.clear();
    }
  };
};
function vf(t = {}) {
  const e = {
    mounts: { "": t.driver || mf() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (u) => {
    for (const h of e.mountpoints)
      if (u.startsWith(h))
        return {
          base: h,
          relativeKey: u.slice(h.length),
          driver: e.mounts[h]
        };
    return {
      base: "",
      relativeKey: u,
      driver: e.mounts[""]
    };
  }, n = (u, h) => e.mountpoints.filter(
    (f) => f.startsWith(u) || h && u.startsWith(f)
  ).map((f) => ({
    relativeBase: u.length > f.length ? u.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (u, h) => {
    if (e.watching) {
      h = Vt(h);
      for (const f of e.watchListeners)
        f(u, h);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const u in e.mounts)
        e.unwatch[u] = await Yo(
          e.mounts[u],
          s,
          u
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const u in e.unwatch)
        await e.unwatch[u]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (u, h, f) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let E = p.get(v.base);
      return E || (E = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, E)), E;
    };
    for (const v of u) {
      const E = typeof v == "string", S = Vt(E ? v : v.key), A = E ? void 0 : v.value, w = E || !v.options ? h : { ...h, ...v.options }, x = r(S);
      m(x).items.push({
        key: S,
        value: A,
        relativeKey: x.relativeKey,
        options: w
      });
    }
    return Promise.all([...p.values()].map((v) => f(v))).then(
      (v) => v.flat()
    );
  }, l = {
    // Item
    hasItem(u, h = {}) {
      u = Vt(u);
      const { relativeKey: f, driver: p } = r(u);
      return wt(p.hasItem, f, h);
    },
    getItem(u, h = {}) {
      u = Vt(u);
      const { relativeKey: f, driver: p } = r(u);
      return wt(p.getItem, f, h).then(
        (m) => Hs(m)
      );
    },
    getItems(u, h) {
      return a(u, h, (f) => f.driver.getItems ? wt(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        h
      ).then(
        (p) => p.map((m) => ({
          key: gf(f.base, m.key),
          value: Hs(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => wt(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: Hs(m)
        })))
      ));
    },
    getItemRaw(u, h = {}) {
      u = Vt(u);
      const { relativeKey: f, driver: p } = r(u);
      return p.getItemRaw ? wt(p.getItemRaw, f, h) : wt(p.getItem, f, h).then(
        (m) => pf(m)
      );
    },
    async setItem(u, h, f = {}) {
      if (h === void 0)
        return l.removeItem(u);
      u = Vt(u);
      const { relativeKey: p, driver: m } = r(u);
      m.setItem && (await wt(m.setItem, p, ei(h), f), m.watch || s("update", u));
    },
    async setItems(u, h) {
      await a(u, h, async (f) => {
        f.driver.setItems && await wt(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: ei(p.value),
            options: p.options
          })),
          h
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => wt(
            f.driver.setItem,
            p.relativeKey,
            ei(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(u, h, f = {}) {
      if (h === void 0)
        return l.removeItem(u, f);
      u = Vt(u);
      const { relativeKey: p, driver: m } = r(u);
      if (m.setItemRaw)
        await wt(m.setItemRaw, p, h, f);
      else if (m.setItem)
        await wt(m.setItem, p, ff(h), f);
      else
        return;
      m.watch || s("update", u);
    },
    async removeItem(u, h = {}) {
      typeof h == "boolean" && (h = { removeMeta: h }), u = Vt(u);
      const { relativeKey: f, driver: p } = r(u);
      p.removeItem && (await wt(p.removeItem, f, h), (h.removeMeta || h.removeMata) && await wt(p.removeItem, f + "$", h), p.watch || s("remove", u));
    },
    // Meta
    async getMeta(u, h = {}) {
      typeof h == "boolean" && (h = { nativeOnly: h }), u = Vt(u);
      const { relativeKey: f, driver: p } = r(u), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await wt(p.getMeta, f, h)), !h.nativeOnly) {
        const v = await wt(
          p.getItem,
          f + "$",
          h
        ).then((E) => Hs(E));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(u, h, f = {}) {
      return this.setItem(u + "$", h, f);
    },
    removeMeta(u, h = {}) {
      return this.removeItem(u + "$", h);
    },
    // Keys
    async getKeys(u, h = {}) {
      u = Gs(u);
      const f = n(u, !0);
      let p = [];
      const m = [];
      for (const v of f) {
        const S = (await wt(
          v.driver.getKeys,
          v.relativeBase,
          h
        )).map((A) => v.mountpoint + Vt(A)).filter((A) => !p.some((w) => A.startsWith(w)));
        m.push(...S), p = [
          v.mountpoint,
          ...p.filter((A) => !A.startsWith(v.mountpoint))
        ];
      }
      return u ? m.filter((v) => v.startsWith(u) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(u, h = {}) {
      u = Gs(u), await Promise.all(
        n(u, !1).map(async (f) => {
          if (f.driver.clear)
            return wt(f.driver.clear, f.relativeBase, h);
          if (f.driver.removeItem) {
            const p = await f.driver.getKeys(f.relativeBase || "", h);
            return Promise.all(
              p.map((m) => f.driver.removeItem(m, h))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((u) => Jo(u))
      );
    },
    async watch(u) {
      return await i(), e.watchListeners.push(u), async () => {
        e.watchListeners = e.watchListeners.filter(
          (h) => h !== u
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(u, h) {
      if (u = Gs(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[u] = h, e.watching && Promise.resolve(Yo(h, s, u)).then((f) => {
        e.unwatch[u] = f;
      }).catch(console.error), l;
    },
    async unmount(u, h = !0) {
      u = Gs(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), h && await Jo(e.mounts[u]), e.mountpoints = e.mountpoints.filter((f) => f !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = Vt(u) + ":";
      const h = r(u);
      return {
        driver: h.driver,
        base: h.base
      };
    },
    getMounts(u = "", h = {}) {
      return u = Vt(u), n(u, h.parents).map((p) => ({
        driver: p.driver,
        base: p.mountpoint
      }));
    }
  };
  return l;
}
function Yo(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Jo(t) {
  typeof t.dispose == "function" && await wt(t.dispose);
}
function yn(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function nl(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = yn(r);
  return (s, i) => n.then((o) => i(o.transaction(e, s).objectStore(e)));
}
let Bi;
function Ds() {
  return Bi || (Bi = nl("keyval-store", "keyval")), Bi;
}
function Xo(t, e = Ds()) {
  return e("readonly", (r) => yn(r.get(t)));
}
function bf(t, e, r = Ds()) {
  return r("readwrite", (n) => (n.put(e, t), yn(n.transaction)));
}
function wf(t, e = Ds()) {
  return e("readwrite", (r) => (r.delete(t), yn(r.transaction)));
}
function _f(t = Ds()) {
  return t("readwrite", (e) => (e.clear(), yn(e.transaction)));
}
function Ef(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, yn(t.transaction);
}
function Sf(t = Ds()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return yn(e.getAllKeys());
    const r = [];
    return Ef(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Df = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), xf = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Oi(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return xf(t);
  } catch {
    return t;
  }
}
function xs(t) {
  return typeof t == "string" ? t : Df(t) || "";
}
const Of = "idb-keyval";
var If = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = nl(t.dbName, t.storeName)), { name: Of, options: t, async hasItem(s) {
    return !(typeof await Xo(r(s), n) > "u");
  }, async getItem(s) {
    return await Xo(r(s), n) ?? null;
  }, setItem(s, i) {
    return bf(r(s), i, n);
  }, removeItem(s) {
    return wf(r(s), n);
  }, getKeys() {
    return Sf(n);
  }, clear() {
    return _f(n);
  } };
};
const Cf = "WALLET_CONNECT_V2_INDEXED_DB", Rf = "keyvaluestorage";
let Tf = class {
  constructor() {
    this.indexedDb = vf({ driver: If({ dbName: Cf, storeName: Rf }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const r = await this.indexedDb.getItem(e);
    if (r !== null)
      return r;
  }
  async setItem(e, r) {
    await this.indexedDb.setItem(e, xs(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ti = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, n) {
    this[r] = String(n);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(n) {
      r[n] = void 0, delete r[n];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof Vi < "u" && Vi.localStorage ? ti.exports = Vi.localStorage : typeof window < "u" && window.localStorage ? ti.exports = window.localStorage : ti.exports = new e();
})();
function Pf(t) {
  var e;
  return [t[0], Oi((e = t[1]) != null ? e : "")];
}
class Af {
  constructor() {
    this.localStorage = ti.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Pf);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Oi(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, xs(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Nf = "wc_storage_version", ec = 1, Lf = async (t, e, r) => {
  const n = Nf, s = await e.getItem(n);
  if (s && s >= ec) {
    r(e);
    return;
  }
  const i = await t.getKeys();
  if (!i.length) {
    r(e);
    return;
  }
  const o = [];
  for (; i.length; ) {
    const a = i.shift();
    if (!a)
      continue;
    const l = a.toLowerCase();
    if (l.includes("wc@") || l.includes("walletconnect") || l.includes("wc_") || l.includes("wallet_connect")) {
      const u = await t.getItem(a);
      await e.setItem(a, u), o.push(a);
    }
  }
  await e.setItem(n, ec), r(e), Ff(t, o);
}, Ff = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Mf = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Af();
    this.storage = e;
    try {
      const r = new Tf();
      Lf(e, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, r) {
    return await this.initialize(), this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), e());
      }, 20);
    });
  }
};
var Mn = {};
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
var ya = function(t, e) {
  return ya = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, ya(t, e);
};
function Uf(t, e) {
  ya(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ma = function() {
  return ma = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ma.apply(this, arguments);
};
function jf(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function $f(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function kf(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function qf(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function zf(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(h) {
      try {
        u(n.next(h));
      } catch (f) {
        o(f);
      }
    }
    function l(h) {
      try {
        u(n.throw(h));
      } catch (f) {
        o(f);
      }
    }
    function u(h) {
      h.done ? i(h.value) : s(h.value).then(a, l);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function Bf(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(h) {
      return l([u, h]);
    };
  }
  function l(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = u[0] & 2 ? s.return : u[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, u[1])).done)
          return i;
        switch (s = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, s = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = u;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(u);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (h) {
        u = [6, h], s = 0;
      } finally {
        n = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Vf(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Kf(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function va(t) {
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
function sl(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function Wf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(sl(arguments[e]));
  return t;
}
function Hf() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function os(t) {
  return this instanceof os ? (this.v = t, this) : new os(t);
}
function Gf(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(v, E) {
        i.push([p, m, v, E]) > 1 || a(p, m);
      });
    });
  }
  function a(p, m) {
    try {
      l(n[p](m));
    } catch (v) {
      f(i[0][3], v);
    }
  }
  function l(p) {
    p.value instanceof os ? Promise.resolve(p.value.v).then(u, h) : f(i[0][2], p);
  }
  function u(p) {
    a("next", p);
  }
  function h(p) {
    a("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Zf(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: os(t[s](o)), done: s === "return" } : i ? i(o) : o;
    } : i;
  }
}
function Qf(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof va == "function" ? va(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(o) {
      return new Promise(function(a, l) {
        o = t[i](o), s(a, l, o.done, o.value);
      });
    };
  }
  function s(i, o, a, l) {
    Promise.resolve(l).then(function(u) {
      i({ value: u, done: a });
    }, o);
  }
}
function Yf(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Jf(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Xf(t) {
  return t && t.__esModule ? t : { default: t };
}
function ep(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function tp(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return ma;
  },
  __asyncDelegator: Zf,
  __asyncGenerator: Gf,
  __asyncValues: Qf,
  __await: os,
  __awaiter: zf,
  __classPrivateFieldGet: ep,
  __classPrivateFieldSet: tp,
  __createBinding: Vf,
  __decorate: $f,
  __exportStar: Kf,
  __extends: Uf,
  __generator: Bf,
  __importDefault: Xf,
  __importStar: Jf,
  __makeTemplateObject: Yf,
  __metadata: qf,
  __param: kf,
  __read: sl,
  __rest: jf,
  __spread: Wf,
  __spreadArrays: Hf,
  __values: va
}, Symbol.toStringTag, { value: "Module" })), Or = /* @__PURE__ */ Ya(rp);
var Kn = {}, se = {}, Ki = {}, Wn = {}, tc;
function np() {
  if (tc)
    return Wn;
  tc = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Wn.delay = t, Wn;
}
var tn = {}, Wi = {}, rn = {}, rc;
function sp() {
  return rc || (rc = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.ONE_THOUSAND = rn.ONE_HUNDRED = void 0, rn.ONE_HUNDRED = 100, rn.ONE_THOUSAND = 1e3), rn;
}
var Hi = {}, nc;
function ip() {
  return nc || (nc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Hi)), Hi;
}
var sc;
function il() {
  return sc || (sc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Or;
    e.__exportStar(sp(), t), e.__exportStar(ip(), t);
  }(Wi)), Wi;
}
var ic;
function ap() {
  if (ic)
    return tn;
  ic = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.fromMiliseconds = tn.toMiliseconds = void 0;
  const t = il();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  tn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return tn.fromMiliseconds = r, tn;
}
var ac;
function op() {
  return ac || (ac = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Or;
    e.__exportStar(np(), t), e.__exportStar(ap(), t);
  }(Ki)), Ki;
}
var En = {}, oc;
function cp() {
  if (oc)
    return En;
  oc = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.Watch = void 0;
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
      const s = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: s });
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
  return En.Watch = t, En.default = t, En;
}
var Gi = {}, Hn = {}, cc;
function up() {
  if (cc)
    return Hn;
  cc = 1, Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.IWatch = void 0;
  class t {
  }
  return Hn.IWatch = t, Hn;
}
var uc;
function lp() {
  return uc || (uc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Or.__exportStar(up(), t);
  }(Gi)), Gi;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Or;
  e.__exportStar(op(), t), e.__exportStar(cp(), t), e.__exportStar(lp(), t), e.__exportStar(il(), t);
})(se);
var Zi = {}, Gn = {};
let mn = class {
};
const hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: mn
}, Symbol.toStringTag, { value: "Module" })), dp = /* @__PURE__ */ Ya(hp);
var lc;
function fp() {
  if (lc)
    return Gn;
  lc = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.IHeartBeat = void 0;
  const t = dp;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Gn.IHeartBeat = e, Gn;
}
var hc;
function al() {
  return hc || (hc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Or.__exportStar(fp(), t);
  }(Zi)), Zi;
}
var Qi = {}, nn = {}, dc;
function pp() {
  if (dc)
    return nn;
  dc = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.HEARTBEAT_EVENTS = nn.HEARTBEAT_INTERVAL = void 0;
  const t = se;
  return nn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, nn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, nn;
}
var fc;
function ol() {
  return fc || (fc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Or.__exportStar(pp(), t);
  }(Qi)), Qi;
}
var pc;
function gp() {
  if (pc)
    return Kn;
  pc = 1, Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.HeartBeat = void 0;
  const t = Or, e = nr, r = se, n = al(), s = ol();
  class i extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const l = new i(a);
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
      this.events.emit(s.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Kn.HeartBeat = i, Kn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Or;
  e.__exportStar(gp(), t), e.__exportStar(al(), t), e.__exportStar(ol(), t);
})(Mn);
var je = {}, Yi, gc;
function yp() {
  if (gc)
    return Yi;
  gc = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Yi = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = i(r);
      for (var u = 1; u < a; u++)
        l[u] = i(n[u]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var h = n.length;
    if (h === 0)
      return r;
    for (var f = "", p = 1 - o, m = -1, v = r && r.length || 0, E = 0; E < v; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= h || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= h || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= h || n[p] === void 0)
              break;
            m < E && (f += r.slice(m, E));
            var S = typeof n[p];
            if (S === "string") {
              f += "'" + n[p] + "'", m = E + 2, E++;
              break;
            }
            if (S === "function") {
              f += n[p].name || "<anonymous>", m = E + 2, E++;
              break;
            }
            f += i(n[p]), m = E + 2, E++;
            break;
          case 115:
            if (p >= h)
              break;
            m < E && (f += r.slice(m, E)), f += String(n[p]), m = E + 2, E++;
            break;
          case 37:
            m < E && (f += r.slice(m, E)), f += "%", m = E + 2, E++, p--;
            break;
        }
        ++p;
      }
      ++E;
    }
    return m === -1 ? r : (m < v && (f += r.slice(m)), f);
  }
  return Yi;
}
var Ji, yc;
function mp() {
  if (yc)
    return Ji;
  yc = 1;
  const t = yp();
  Ji = s;
  const e = D().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: E,
    wrapResponseSerializer: E,
    wrapErrorSerializer: E,
    req: v,
    res: v,
    err: p
  };
  function n(g, c) {
    return Array.isArray(g) ? g.filter(function(R) {
      return R !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(c) : !1;
  }
  function s(g) {
    g = g || {}, g.browser = g.browser || {};
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const y = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const R = g.serializers || {}, N = n(g.browser.serialize, R);
    let U = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const V = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof y == "function" && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", C = Object.create(y);
    C.log || (C.log = S), Object.defineProperty(C, "levelVal", {
      get: Z
    }), Object.defineProperty(C, "level", {
      get: B,
      set: k
    });
    const L = {
      transmit: c,
      serialize: N,
      asObject: g.browser.asObject,
      levels: V,
      timestamp: m(g)
    };
    C.levels = s.levels, C.level = G, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = S, C.serializers = R, C._serialize = N, C._stdErrSerialize = U, C.child = z, c && (C._logEvent = f());
    function Z() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function B() {
      return this._level;
    }
    function k($) {
      if ($ !== "silent" && !this.levels.values[$])
        throw Error("unknown level " + $);
      this._level = $, i(L, C, "error", "log"), i(L, C, "fatal", "error"), i(L, C, "warn", "error"), i(L, C, "info", "log"), i(L, C, "debug", "log"), i(L, C, "trace", "log");
    }
    function z($, K) {
      if (!$)
        throw new Error("missing bindings for child Pino");
      K = K || {}, N && $.serializers && (K.serializers = $.serializers);
      const he = K.serializers;
      if (N && he) {
        var W = Object.assign({}, R, he), oe = g.browser.serialize === !0 ? Object.keys(W) : N;
        delete $.serializers, l([$], oe, W, this._stdErrSerialize);
      }
      function te(ae) {
        this._childLevel = (ae._childLevel | 0) + 1, this.error = u(ae, $, "error"), this.fatal = u(ae, $, "fatal"), this.warn = u(ae, $, "warn"), this.info = u(ae, $, "info"), this.debug = u(ae, $, "debug"), this.trace = u(ae, $, "trace"), W && (this.serializers = W, this._serialize = oe), c && (this._logEvent = f(
          [].concat(ae._logEvent.bindings, $)
        ));
      }
      return te.prototype = this, new te(this);
    }
    return C;
  }
  s.levels = {
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: A, epochTime: w, unixTime: x, isoTime: b });
  function i(g, c, y, R) {
    const N = Object.getPrototypeOf(c);
    c[y] = c.levelVal > c.levels.values[y] ? S : N[y] ? N[y] : e[y] || e[R] || S, o(g, c, y);
  }
  function o(g, c, y) {
    !g.transmit && c[y] === S || (c[y] = function(R) {
      return function() {
        const U = g.timestamp(), V = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var C = 0; C < V.length; C++)
          V[C] = arguments[C];
        if (g.serialize && !g.asObject && l(V, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? R.call(G, a(this, y, V, U)) : R.apply(G, V), g.transmit) {
          const L = g.transmit.level || c.level, Z = s.levels.values[L], B = s.levels.values[y];
          if (B < Z)
            return;
          h(this, {
            ts: U,
            methodLevel: y,
            methodValue: B,
            transmitLevel: L,
            transmitValue: s.levels.values[g.transmit.level || c.level],
            send: g.transmit.send,
            val: c.levelVal
          }, V);
        }
      };
    }(c[y]));
  }
  function a(g, c, y, R) {
    g._serialize && l(y, g._serialize, g.serializers, g._stdErrSerialize);
    const N = y.slice();
    let U = N[0];
    const V = {};
    R && (V.time = R), V.level = s.levels.values[c];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), U !== null && typeof U == "object") {
      for (; G-- && typeof N[0] == "object"; )
        Object.assign(V, N.shift());
      U = N.length ? t(N.shift(), N) : void 0;
    } else
      typeof U == "string" && (U = t(N.shift(), N));
    return U !== void 0 && (V.msg = U), V;
  }
  function l(g, c, y, R) {
    for (const N in g)
      if (R && g[N] instanceof Error)
        g[N] = s.stdSerializers.err(g[N]);
      else if (typeof g[N] == "object" && !Array.isArray(g[N]))
        for (const U in g[N])
          c && c.indexOf(U) > -1 && U in y && (g[N][U] = y[U](g[N][U]));
  }
  function u(g, c, y) {
    return function() {
      const R = new Array(1 + arguments.length);
      R[0] = c;
      for (var N = 1; N < R.length; N++)
        R[N] = arguments[N - 1];
      return g[y].apply(this, R);
    };
  }
  function h(g, c, y) {
    const R = c.send, N = c.ts, U = c.methodLevel, V = c.methodValue, G = c.val, C = g._logEvent.bindings;
    l(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = N, g._logEvent.messages = y.filter(function(L) {
      return C.indexOf(L) === -1;
    }), g._logEvent.level.label = U, g._logEvent.level.value = V, R(U, g._logEvent, G), g._logEvent = f(C);
  }
  function f(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 }
    };
  }
  function p(g) {
    const c = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const y in g)
      c[y] === void 0 && (c[y] = g[y]);
    return c;
  }
  function m(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? A : w;
  }
  function v() {
    return {};
  }
  function E(g) {
    return g;
  }
  function S() {
  }
  function A() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function x() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function D() {
    function g(c) {
      return typeof c < "u" && c;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return g(self) || g(window) || g(this) || {};
    }
  }
  return Ji;
}
var sn = {}, mc;
function cl() {
  return mc || (mc = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.PINO_CUSTOM_CONTEXT_KEY = sn.PINO_LOGGER_DEFAULTS = void 0, sn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, sn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), sn;
}
var Mt = {}, vc;
function vp() {
  if (vc)
    return Mt;
  vc = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.generateChildLogger = Mt.formatChildLoggerContext = Mt.getLoggerContext = Mt.setBrowserLoggerContext = Mt.getBrowserLoggerContext = Mt.getDefaultLoggerOptions = void 0;
  const t = cl();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Mt.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  Mt.getBrowserLoggerContext = r;
  function n(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[u] = l, a;
  }
  Mt.setBrowserLoggerContext = n;
  function s(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let u = "";
    return typeof a.bindings > "u" ? u = r(a, l) : u = a.bindings().context || "", u;
  }
  Mt.getLoggerContext = s;
  function i(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const h = s(a, u);
    return h.trim() ? `${h}/${l}` : l;
  }
  Mt.formatChildLoggerContext = i;
  function o(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const h = i(a, l, u), f = a.child({ context: h });
    return n(f, h, u);
  }
  return Mt.generateChildLogger = o, Mt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Or, r = e.__importDefault(mp());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(cl(), t), e.__exportStar(vp(), t);
})(je);
let bp = class extends mn {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, fE = class {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}, wp = class extends mn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, _p = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Ep = class extends mn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Sp = class extends mn {
  constructor(e) {
    super();
  }
}, Dp = class {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}, wE = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
};
class xp extends mn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let EE = class {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
};
class Op extends mn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let DE = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Ip = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, IE = class extends Ss {
  constructor() {
    super();
  }
}, Cp = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, TE = class extends nr.EventEmitter {
  constructor() {
    super();
  }
}, Rp = class {
  constructor(e) {
    this.client = e;
  }
};
var Xa = {}, Un = {}, Ii = {}, Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.BrowserRandomSource = void 0;
const bc = 65536;
class Tp {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += bc)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, bc)));
    return r;
  }
}
Ci.BrowserRandomSource = Tp;
function Pp(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ri = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
function Ap(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Qt.wipe = Ap;
const Np = {}, Lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Np
}, Symbol.toStringTag, { value: "Module" })), Fp = /* @__PURE__ */ Ya(Lp);
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.NodeRandomSource = void 0;
const Mp = Qt;
class Up {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Pp < "u") {
      const e = Fp;
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
    for (let s = 0; s < n.length; s++)
      n[s] = r[s];
    return (0, Mp.wipe)(r), n;
  }
}
Ri.NodeRandomSource = Up;
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.SystemRandomSource = void 0;
const jp = Ci, $p = Ri;
class kp {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new jp.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new $p.NodeRandomSource(), this._source.isAvailable) {
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
Ii.SystemRandomSource = kp;
var ye = {}, ul = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var u = a >>> 16 & 65535, h = a & 65535, f = l >>> 16 & 65535, p = l & 65535;
    return h * p + (u * p + h * f << 16 >>> 0) | 0;
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
  function s(a, l) {
    return a << l | a >>> 32 - l;
  }
  t.rotl = s;
  function i(a, l) {
    return a << 32 - l | a >>> l;
  }
  t.rotr = i;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || o, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(ul);
Object.defineProperty(ye, "__esModule", { value: !0 });
var ll = ul;
function qp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
ye.readInt16BE = qp;
function zp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
ye.readUint16BE = zp;
function Bp(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
ye.readInt16LE = Bp;
function Vp(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
ye.readUint16LE = Vp;
function hl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
ye.writeUint16BE = hl;
ye.writeInt16BE = hl;
function dl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
ye.writeUint16LE = dl;
ye.writeInt16LE = dl;
function ba(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
ye.readInt32BE = ba;
function wa(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
ye.readUint32BE = wa;
function _a(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
ye.readInt32LE = _a;
function Ea(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
ye.readUint32LE = Ea;
function ai(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
ye.writeUint32BE = ai;
ye.writeInt32BE = ai;
function oi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
ye.writeUint32LE = oi;
ye.writeInt32LE = oi;
function Kp(t, e) {
  e === void 0 && (e = 0);
  var r = ba(t, e), n = ba(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
ye.readInt64BE = Kp;
function Wp(t, e) {
  e === void 0 && (e = 0);
  var r = wa(t, e), n = wa(t, e + 4);
  return r * 4294967296 + n;
}
ye.readUint64BE = Wp;
function Hp(t, e) {
  e === void 0 && (e = 0);
  var r = _a(t, e), n = _a(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
ye.readInt64LE = Hp;
function Gp(t, e) {
  e === void 0 && (e = 0);
  var r = Ea(t, e), n = Ea(t, e + 4);
  return n * 4294967296 + r;
}
ye.readUint64LE = Gp;
function fl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ai(t / 4294967296 >>> 0, e, r), ai(t >>> 0, e, r + 4), e;
}
ye.writeUint64BE = fl;
ye.writeInt64BE = fl;
function pl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), oi(t >>> 0, e, r), oi(t / 4294967296 >>> 0, e, r + 4), e;
}
ye.writeUint64LE = pl;
ye.writeInt64LE = pl;
function Zp(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
ye.readUintBE = Zp;
function Qp(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
ye.readUintLE = Qp;
function Yp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!ll.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
ye.writeUintBE = Yp;
function Jp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!ll.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
ye.writeUintLE = Jp;
function Xp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
ye.readFloat32BE = Xp;
function eg(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
ye.readFloat32LE = eg;
function tg(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
ye.readFloat64BE = tg;
function rg(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
ye.readFloat64LE = rg;
function ng(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
ye.writeFloat32BE = ng;
function sg(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
ye.writeFloat32LE = sg;
function ig(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
ye.writeFloat64BE = ig;
function ag(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
ye.writeFloat64LE = ag;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ii, r = ye, n = Qt;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(u, h = t.defaultRandomSource) {
    return h.randomBytes(u);
  }
  t.randomBytes = s;
  function i(u = t.defaultRandomSource) {
    const h = s(4, u), f = (0, r.readUint32LE)(h);
    return (0, n.wipe)(h), f;
  }
  t.randomUint32 = i;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(u, h = o, f = t.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = h.length, v = 256 - 256 % m;
    for (; u > 0; ) {
      const E = s(Math.ceil(u * 256 / v), f);
      for (let S = 0; S < E.length && u > 0; S++) {
        const A = E[S];
        A < v && (p += h.charAt(A % m), u--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = a;
  function l(u, h = o, f = t.defaultRandomSource) {
    const p = Math.ceil(u / (Math.log(h.length) / Math.LN2));
    return a(p, h, f);
  }
  t.randomStringForEntropy = l;
})(Un);
var gl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ye, r = Qt;
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
      }, a.prototype.update = function(l, u) {
        if (u === void 0 && (u = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && u > 0; )
            this._buffer[this._bufferLength++] = l[h++], u--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (h = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, h, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = l[h++], u--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var u = this._bytesHashed, h = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var v = h + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 8; v++)
          e.writeUint32BE(this._stateHi[v], l, v * 8), e.writeUint32BE(this._stateLo[v], l, v * 8 + 4);
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
  var s = new Int32Array([
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
  function i(a, l, u, h, f, p, m) {
    for (var v = u[0], E = u[1], S = u[2], A = u[3], w = u[4], x = u[5], b = u[6], D = u[7], g = h[0], c = h[1], y = h[2], R = h[3], N = h[4], U = h[5], V = h[6], G = h[7], C, L, Z, B, k, z, $, K; m >= 128; ) {
      for (var he = 0; he < 16; he++) {
        var W = 8 * he + p;
        a[he] = e.readUint32BE(f, W), l[he] = e.readUint32BE(f, W + 4);
      }
      for (var he = 0; he < 80; he++) {
        var oe = v, te = E, ae = S, M = A, F = w, T = x, d = b, I = D, Q = g, X = c, xe = y, Oe = R, be = N, Le = U, Ze = V, Be = G;
        if (C = D, L = G, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = (w >>> 14 | N << 32 - 14) ^ (w >>> 18 | N << 32 - 18) ^ (N >>> 41 - 32 | w << 32 - (41 - 32)), L = (N >>> 14 | w << 32 - 14) ^ (N >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | N << 32 - (41 - 32)), k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, C = w & x ^ ~w & b, L = N & U ^ ~N & V, k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, C = s[he * 2], L = s[he * 2 + 1], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, C = a[he % 16], L = l[he % 16], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, Z = $ & 65535 | K << 16, B = k & 65535 | z << 16, C = Z, L = B, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = (v >>> 28 | g << 32 - 28) ^ (g >>> 34 - 32 | v << 32 - (34 - 32)) ^ (g >>> 39 - 32 | v << 32 - (39 - 32)), L = (g >>> 28 | v << 32 - 28) ^ (v >>> 34 - 32 | g << 32 - (34 - 32)) ^ (v >>> 39 - 32 | g << 32 - (39 - 32)), k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, C = v & E ^ v & S ^ E & S, L = g & c ^ g & y ^ c & y, k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, I = $ & 65535 | K << 16, Be = k & 65535 | z << 16, C = M, L = Oe, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = Z, L = B, k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, M = $ & 65535 | K << 16, Oe = k & 65535 | z << 16, E = oe, S = te, A = ae, w = M, x = F, b = T, D = d, v = I, c = Q, y = X, R = xe, N = Oe, U = be, V = Le, G = Ze, g = Be, he % 16 === 15)
          for (var W = 0; W < 16; W++)
            C = a[W], L = l[W], k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = a[(W + 9) % 16], L = l[(W + 9) % 16], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, Z = a[(W + 1) % 16], B = l[(W + 1) % 16], C = (Z >>> 1 | B << 32 - 1) ^ (Z >>> 8 | B << 32 - 8) ^ Z >>> 7, L = (B >>> 1 | Z << 32 - 1) ^ (B >>> 8 | Z << 32 - 8) ^ (B >>> 7 | Z << 32 - 7), k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, Z = a[(W + 14) % 16], B = l[(W + 14) % 16], C = (Z >>> 19 | B << 32 - 19) ^ (B >>> 61 - 32 | Z << 32 - (61 - 32)) ^ Z >>> 6, L = (B >>> 19 | Z << 32 - 19) ^ (Z >>> 61 - 32 | B << 32 - (61 - 32)) ^ (B >>> 6 | Z << 32 - 6), k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, a[W] = $ & 65535 | K << 16, l[W] = k & 65535 | z << 16;
      }
      C = v, L = g, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[0], L = h[0], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[0] = v = $ & 65535 | K << 16, h[0] = g = k & 65535 | z << 16, C = E, L = c, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[1], L = h[1], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[1] = E = $ & 65535 | K << 16, h[1] = c = k & 65535 | z << 16, C = S, L = y, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[2], L = h[2], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[2] = S = $ & 65535 | K << 16, h[2] = y = k & 65535 | z << 16, C = A, L = R, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[3], L = h[3], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[3] = A = $ & 65535 | K << 16, h[3] = R = k & 65535 | z << 16, C = w, L = N, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[4], L = h[4], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[4] = w = $ & 65535 | K << 16, h[4] = N = k & 65535 | z << 16, C = x, L = U, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[5], L = h[5], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[5] = x = $ & 65535 | K << 16, h[5] = U = k & 65535 | z << 16, C = b, L = V, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[6], L = h[6], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[6] = b = $ & 65535 | K << 16, h[6] = V = k & 65535 | z << 16, C = D, L = G, k = L & 65535, z = L >>> 16, $ = C & 65535, K = C >>> 16, C = u[7], L = h[7], k += L & 65535, z += L >>> 16, $ += C & 65535, K += C >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, u[7] = D = $ & 65535 | K << 16, h[7] = G = k & 65535 | z << 16, p += 128, m -= 128;
    }
    return p;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.hash = o;
})(gl);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Un, r = gl, n = Qt;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(M) {
    const F = new Float64Array(16);
    if (M)
      for (let T = 0; T < M.length; T++)
        F[T] = M[T];
    return F;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const o = s(), a = s([1]), l = s([
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
  ]), u = s([
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
  ]), h = s([
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
  ]), f = s([
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
  ]), p = s([
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
  function m(M, F) {
    for (let T = 0; T < 16; T++)
      M[T] = F[T] | 0;
  }
  function v(M) {
    let F = 1;
    for (let T = 0; T < 16; T++) {
      let d = M[T] + F + 65535;
      F = Math.floor(d / 65536), M[T] = d - F * 65536;
    }
    M[0] += F - 1 + 37 * (F - 1);
  }
  function E(M, F, T) {
    const d = ~(T - 1);
    for (let I = 0; I < 16; I++) {
      const Q = d & (M[I] ^ F[I]);
      M[I] ^= Q, F[I] ^= Q;
    }
  }
  function S(M, F) {
    const T = s(), d = s();
    for (let I = 0; I < 16; I++)
      d[I] = F[I];
    v(d), v(d), v(d);
    for (let I = 0; I < 2; I++) {
      T[0] = d[0] - 65517;
      for (let X = 1; X < 15; X++)
        T[X] = d[X] - 65535 - (T[X - 1] >> 16 & 1), T[X - 1] &= 65535;
      T[15] = d[15] - 32767 - (T[14] >> 16 & 1);
      const Q = T[15] >> 16 & 1;
      T[14] &= 65535, E(d, T, 1 - Q);
    }
    for (let I = 0; I < 16; I++)
      M[2 * I] = d[I] & 255, M[2 * I + 1] = d[I] >> 8;
  }
  function A(M, F) {
    let T = 0;
    for (let d = 0; d < 32; d++)
      T |= M[d] ^ F[d];
    return (1 & T - 1 >>> 8) - 1;
  }
  function w(M, F) {
    const T = new Uint8Array(32), d = new Uint8Array(32);
    return S(T, M), S(d, F), A(T, d);
  }
  function x(M) {
    const F = new Uint8Array(32);
    return S(F, M), F[0] & 1;
  }
  function b(M, F) {
    for (let T = 0; T < 16; T++)
      M[T] = F[2 * T] + (F[2 * T + 1] << 8);
    M[15] &= 32767;
  }
  function D(M, F, T) {
    for (let d = 0; d < 16; d++)
      M[d] = F[d] + T[d];
  }
  function g(M, F, T) {
    for (let d = 0; d < 16; d++)
      M[d] = F[d] - T[d];
  }
  function c(M, F, T) {
    let d, I, Q = 0, X = 0, xe = 0, Oe = 0, be = 0, Le = 0, Ze = 0, Be = 0, Ae = 0, Re = 0, we = 0, Ee = 0, _e = 0, ge = 0, pe = 0, ce = 0, Se = 0, Ie = 0, de = 0, Te = 0, Fe = 0, $e = 0, ke = 0, Me = 0, Ht = 0, Yt = 0, mr = 0, St = 0, vr = 0, Jt = 0, Fr = 0, Qe = T[0], We = T[1], nt = T[2], Xe = T[3], st = T[4], He = T[5], ct = T[6], ht = T[7], dt = T[8], ut = T[9], ft = T[10], lt = T[11], it = T[12], Ve = T[13], O = T[14], j = T[15];
    d = F[0], Q += d * Qe, X += d * We, xe += d * nt, Oe += d * Xe, be += d * st, Le += d * He, Ze += d * ct, Be += d * ht, Ae += d * dt, Re += d * ut, we += d * ft, Ee += d * lt, _e += d * it, ge += d * Ve, pe += d * O, ce += d * j, d = F[1], X += d * Qe, xe += d * We, Oe += d * nt, be += d * Xe, Le += d * st, Ze += d * He, Be += d * ct, Ae += d * ht, Re += d * dt, we += d * ut, Ee += d * ft, _e += d * lt, ge += d * it, pe += d * Ve, ce += d * O, Se += d * j, d = F[2], xe += d * Qe, Oe += d * We, be += d * nt, Le += d * Xe, Ze += d * st, Be += d * He, Ae += d * ct, Re += d * ht, we += d * dt, Ee += d * ut, _e += d * ft, ge += d * lt, pe += d * it, ce += d * Ve, Se += d * O, Ie += d * j, d = F[3], Oe += d * Qe, be += d * We, Le += d * nt, Ze += d * Xe, Be += d * st, Ae += d * He, Re += d * ct, we += d * ht, Ee += d * dt, _e += d * ut, ge += d * ft, pe += d * lt, ce += d * it, Se += d * Ve, Ie += d * O, de += d * j, d = F[4], be += d * Qe, Le += d * We, Ze += d * nt, Be += d * Xe, Ae += d * st, Re += d * He, we += d * ct, Ee += d * ht, _e += d * dt, ge += d * ut, pe += d * ft, ce += d * lt, Se += d * it, Ie += d * Ve, de += d * O, Te += d * j, d = F[5], Le += d * Qe, Ze += d * We, Be += d * nt, Ae += d * Xe, Re += d * st, we += d * He, Ee += d * ct, _e += d * ht, ge += d * dt, pe += d * ut, ce += d * ft, Se += d * lt, Ie += d * it, de += d * Ve, Te += d * O, Fe += d * j, d = F[6], Ze += d * Qe, Be += d * We, Ae += d * nt, Re += d * Xe, we += d * st, Ee += d * He, _e += d * ct, ge += d * ht, pe += d * dt, ce += d * ut, Se += d * ft, Ie += d * lt, de += d * it, Te += d * Ve, Fe += d * O, $e += d * j, d = F[7], Be += d * Qe, Ae += d * We, Re += d * nt, we += d * Xe, Ee += d * st, _e += d * He, ge += d * ct, pe += d * ht, ce += d * dt, Se += d * ut, Ie += d * ft, de += d * lt, Te += d * it, Fe += d * Ve, $e += d * O, ke += d * j, d = F[8], Ae += d * Qe, Re += d * We, we += d * nt, Ee += d * Xe, _e += d * st, ge += d * He, pe += d * ct, ce += d * ht, Se += d * dt, Ie += d * ut, de += d * ft, Te += d * lt, Fe += d * it, $e += d * Ve, ke += d * O, Me += d * j, d = F[9], Re += d * Qe, we += d * We, Ee += d * nt, _e += d * Xe, ge += d * st, pe += d * He, ce += d * ct, Se += d * ht, Ie += d * dt, de += d * ut, Te += d * ft, Fe += d * lt, $e += d * it, ke += d * Ve, Me += d * O, Ht += d * j, d = F[10], we += d * Qe, Ee += d * We, _e += d * nt, ge += d * Xe, pe += d * st, ce += d * He, Se += d * ct, Ie += d * ht, de += d * dt, Te += d * ut, Fe += d * ft, $e += d * lt, ke += d * it, Me += d * Ve, Ht += d * O, Yt += d * j, d = F[11], Ee += d * Qe, _e += d * We, ge += d * nt, pe += d * Xe, ce += d * st, Se += d * He, Ie += d * ct, de += d * ht, Te += d * dt, Fe += d * ut, $e += d * ft, ke += d * lt, Me += d * it, Ht += d * Ve, Yt += d * O, mr += d * j, d = F[12], _e += d * Qe, ge += d * We, pe += d * nt, ce += d * Xe, Se += d * st, Ie += d * He, de += d * ct, Te += d * ht, Fe += d * dt, $e += d * ut, ke += d * ft, Me += d * lt, Ht += d * it, Yt += d * Ve, mr += d * O, St += d * j, d = F[13], ge += d * Qe, pe += d * We, ce += d * nt, Se += d * Xe, Ie += d * st, de += d * He, Te += d * ct, Fe += d * ht, $e += d * dt, ke += d * ut, Me += d * ft, Ht += d * lt, Yt += d * it, mr += d * Ve, St += d * O, vr += d * j, d = F[14], pe += d * Qe, ce += d * We, Se += d * nt, Ie += d * Xe, de += d * st, Te += d * He, Fe += d * ct, $e += d * ht, ke += d * dt, Me += d * ut, Ht += d * ft, Yt += d * lt, mr += d * it, St += d * Ve, vr += d * O, Jt += d * j, d = F[15], ce += d * Qe, Se += d * We, Ie += d * nt, de += d * Xe, Te += d * st, Fe += d * He, $e += d * ct, ke += d * ht, Me += d * dt, Ht += d * ut, Yt += d * ft, mr += d * lt, St += d * it, vr += d * Ve, Jt += d * O, Fr += d * j, Q += 38 * Se, X += 38 * Ie, xe += 38 * de, Oe += 38 * Te, be += 38 * Fe, Le += 38 * $e, Ze += 38 * ke, Be += 38 * Me, Ae += 38 * Ht, Re += 38 * Yt, we += 38 * mr, Ee += 38 * St, _e += 38 * vr, ge += 38 * Jt, pe += 38 * Fr, I = 1, d = Q + I + 65535, I = Math.floor(d / 65536), Q = d - I * 65536, d = X + I + 65535, I = Math.floor(d / 65536), X = d - I * 65536, d = xe + I + 65535, I = Math.floor(d / 65536), xe = d - I * 65536, d = Oe + I + 65535, I = Math.floor(d / 65536), Oe = d - I * 65536, d = be + I + 65535, I = Math.floor(d / 65536), be = d - I * 65536, d = Le + I + 65535, I = Math.floor(d / 65536), Le = d - I * 65536, d = Ze + I + 65535, I = Math.floor(d / 65536), Ze = d - I * 65536, d = Be + I + 65535, I = Math.floor(d / 65536), Be = d - I * 65536, d = Ae + I + 65535, I = Math.floor(d / 65536), Ae = d - I * 65536, d = Re + I + 65535, I = Math.floor(d / 65536), Re = d - I * 65536, d = we + I + 65535, I = Math.floor(d / 65536), we = d - I * 65536, d = Ee + I + 65535, I = Math.floor(d / 65536), Ee = d - I * 65536, d = _e + I + 65535, I = Math.floor(d / 65536), _e = d - I * 65536, d = ge + I + 65535, I = Math.floor(d / 65536), ge = d - I * 65536, d = pe + I + 65535, I = Math.floor(d / 65536), pe = d - I * 65536, d = ce + I + 65535, I = Math.floor(d / 65536), ce = d - I * 65536, Q += I - 1 + 37 * (I - 1), I = 1, d = Q + I + 65535, I = Math.floor(d / 65536), Q = d - I * 65536, d = X + I + 65535, I = Math.floor(d / 65536), X = d - I * 65536, d = xe + I + 65535, I = Math.floor(d / 65536), xe = d - I * 65536, d = Oe + I + 65535, I = Math.floor(d / 65536), Oe = d - I * 65536, d = be + I + 65535, I = Math.floor(d / 65536), be = d - I * 65536, d = Le + I + 65535, I = Math.floor(d / 65536), Le = d - I * 65536, d = Ze + I + 65535, I = Math.floor(d / 65536), Ze = d - I * 65536, d = Be + I + 65535, I = Math.floor(d / 65536), Be = d - I * 65536, d = Ae + I + 65535, I = Math.floor(d / 65536), Ae = d - I * 65536, d = Re + I + 65535, I = Math.floor(d / 65536), Re = d - I * 65536, d = we + I + 65535, I = Math.floor(d / 65536), we = d - I * 65536, d = Ee + I + 65535, I = Math.floor(d / 65536), Ee = d - I * 65536, d = _e + I + 65535, I = Math.floor(d / 65536), _e = d - I * 65536, d = ge + I + 65535, I = Math.floor(d / 65536), ge = d - I * 65536, d = pe + I + 65535, I = Math.floor(d / 65536), pe = d - I * 65536, d = ce + I + 65535, I = Math.floor(d / 65536), ce = d - I * 65536, Q += I - 1 + 37 * (I - 1), M[0] = Q, M[1] = X, M[2] = xe, M[3] = Oe, M[4] = be, M[5] = Le, M[6] = Ze, M[7] = Be, M[8] = Ae, M[9] = Re, M[10] = we, M[11] = Ee, M[12] = _e, M[13] = ge, M[14] = pe, M[15] = ce;
  }
  function y(M, F) {
    c(M, F, F);
  }
  function R(M, F) {
    const T = s();
    let d;
    for (d = 0; d < 16; d++)
      T[d] = F[d];
    for (d = 253; d >= 0; d--)
      y(T, T), d !== 2 && d !== 4 && c(T, T, F);
    for (d = 0; d < 16; d++)
      M[d] = T[d];
  }
  function N(M, F) {
    const T = s();
    let d;
    for (d = 0; d < 16; d++)
      T[d] = F[d];
    for (d = 250; d >= 0; d--)
      y(T, T), d !== 1 && c(T, T, F);
    for (d = 0; d < 16; d++)
      M[d] = T[d];
  }
  function U(M, F) {
    const T = s(), d = s(), I = s(), Q = s(), X = s(), xe = s(), Oe = s(), be = s(), Le = s();
    g(T, M[1], M[0]), g(Le, F[1], F[0]), c(T, T, Le), D(d, M[0], M[1]), D(Le, F[0], F[1]), c(d, d, Le), c(I, M[3], F[3]), c(I, I, u), c(Q, M[2], F[2]), D(Q, Q, Q), g(X, d, T), g(xe, Q, I), D(Oe, Q, I), D(be, d, T), c(M[0], X, xe), c(M[1], be, Oe), c(M[2], Oe, xe), c(M[3], X, be);
  }
  function V(M, F, T) {
    for (let d = 0; d < 4; d++)
      E(M[d], F[d], T);
  }
  function G(M, F) {
    const T = s(), d = s(), I = s();
    R(I, F[2]), c(T, F[0], I), c(d, F[1], I), S(M, d), M[31] ^= x(T) << 7;
  }
  function C(M, F, T) {
    m(M[0], o), m(M[1], a), m(M[2], a), m(M[3], o);
    for (let d = 255; d >= 0; --d) {
      const I = T[d / 8 | 0] >> (d & 7) & 1;
      V(M, F, I), U(F, M), U(M, M), V(M, F, I);
    }
  }
  function L(M, F) {
    const T = [s(), s(), s(), s()];
    m(T[0], h), m(T[1], f), m(T[2], a), c(T[3], h, f), C(M, T, F);
  }
  function Z(M) {
    if (M.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(M);
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const T = new Uint8Array(32), d = [s(), s(), s(), s()];
    L(d, F), G(T, d);
    const I = new Uint8Array(64);
    return I.set(M), I.set(T, 32), {
      publicKey: T,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Z;
  function B(M) {
    const F = (0, e.randomBytes)(32, M), T = Z(F);
    return (0, n.wipe)(F), T;
  }
  t.generateKeyPair = B;
  function k(M) {
    if (M.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(M.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = k;
  const z = new Float64Array([
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
  function $(M, F) {
    let T, d, I, Q;
    for (d = 63; d >= 32; --d) {
      for (T = 0, I = d - 32, Q = d - 12; I < Q; ++I)
        F[I] += T - 16 * F[d] * z[I - (d - 32)], T = Math.floor((F[I] + 128) / 256), F[I] -= T * 256;
      F[I] += T, F[d] = 0;
    }
    for (T = 0, I = 0; I < 32; I++)
      F[I] += T - (F[31] >> 4) * z[I], T = F[I] >> 8, F[I] &= 255;
    for (I = 0; I < 32; I++)
      F[I] -= T * z[I];
    for (d = 0; d < 32; d++)
      F[d + 1] += F[d] >> 8, M[d] = F[d] & 255;
  }
  function K(M) {
    const F = new Float64Array(64);
    for (let T = 0; T < 64; T++)
      F[T] = M[T];
    for (let T = 0; T < 64; T++)
      M[T] = 0;
    $(M, F);
  }
  function he(M, F) {
    const T = new Float64Array(64), d = [s(), s(), s(), s()], I = (0, r.hash)(M.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const Q = new Uint8Array(64);
    Q.set(I.subarray(32), 32);
    const X = new r.SHA512();
    X.update(Q.subarray(32)), X.update(F);
    const xe = X.digest();
    X.clean(), K(xe), L(d, xe), G(Q, d), X.reset(), X.update(Q.subarray(0, 32)), X.update(M.subarray(32)), X.update(F);
    const Oe = X.digest();
    K(Oe);
    for (let be = 0; be < 32; be++)
      T[be] = xe[be];
    for (let be = 0; be < 32; be++)
      for (let Le = 0; Le < 32; Le++)
        T[be + Le] += Oe[be] * I[Le];
    return $(Q.subarray(32), T), Q;
  }
  t.sign = he;
  function W(M, F) {
    const T = s(), d = s(), I = s(), Q = s(), X = s(), xe = s(), Oe = s();
    return m(M[2], a), b(M[1], F), y(I, M[1]), c(Q, I, l), g(I, I, M[2]), D(Q, M[2], Q), y(X, Q), y(xe, X), c(Oe, xe, X), c(T, Oe, I), c(T, T, Q), N(T, T), c(T, T, I), c(T, T, Q), c(T, T, Q), c(M[0], T, Q), y(d, M[0]), c(d, d, Q), w(d, I) && c(M[0], M[0], p), y(d, M[0]), c(d, d, Q), w(d, I) ? -1 : (x(M[0]) === F[31] >> 7 && g(M[0], o, M[0]), c(M[3], M[0], M[1]), 0);
  }
  function oe(M, F, T) {
    const d = new Uint8Array(32), I = [s(), s(), s(), s()], Q = [s(), s(), s(), s()];
    if (T.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (W(Q, M))
      return !1;
    const X = new r.SHA512();
    X.update(T.subarray(0, 32)), X.update(M), X.update(F);
    const xe = X.digest();
    return K(xe), C(I, Q, xe), L(Q, T.subarray(32)), U(I, Q), G(d, I), !A(T, d);
  }
  t.verify = oe;
  function te(M) {
    let F = [s(), s(), s(), s()];
    if (W(F, M))
      throw new Error("Ed25519: invalid public key");
    let T = s(), d = s(), I = F[1];
    D(T, a, I), g(d, a, I), R(d, d), c(T, T, d);
    let Q = new Uint8Array(32);
    return S(Q, T), Q;
  }
  t.convertPublicKeyToX25519 = te;
  function ae(M) {
    const F = (0, r.hash)(M.subarray(0, 32));
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const T = new Uint8Array(F.subarray(0, 32));
    return (0, n.wipe)(F), T;
  }
  t.convertSecretKeyToX25519 = ae;
})(Xa);
const og = "EdDSA", cg = "JWT", yl = ".", ml = "base64url", ug = "utf8", lg = "utf8", hg = ":", dg = "did", fg = "key", wc = "base58btc", pg = "z", gg = "K36", yg = 32;
function eo(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function vl(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? eo(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Sa(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = vl(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return eo(r);
}
function mg(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), o = i.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[o] = s;
  }
  var a = t.length, l = t.charAt(0), u = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, A = 0, w = v.length; A !== w && v[A] === 0; )
      A++, E++;
    for (var x = (w - A) * h + 1 >>> 0, b = new Uint8Array(x); A !== w; ) {
      for (var D = v[A], g = 0, c = x - 1; (D !== 0 || g < S) && c !== -1; c--, g++)
        D += 256 * b[c] >>> 0, b[c] = D % a >>> 0, D = D / a >>> 0;
      if (D !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = x - S; y !== x && b[y] === 0; )
      y++;
    for (var R = l.repeat(E); y < x; ++y)
      R += t.charAt(b[y]);
    return R;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, A = 0; v[E] === l; )
        S++, E++;
      for (var w = (v.length - E) * u + 1 >>> 0, x = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var D = 0, g = w - 1; (b !== 0 || D < A) && g !== -1; g--, D++)
          b += a * x[g] >>> 0, x[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = D, E++;
      }
      if (v[E] !== " ") {
        for (var c = w - A; c !== w && x[c] === 0; )
          c++;
        for (var y = new Uint8Array(S + (w - c)), R = S; c !== w; )
          y[R++] = x[c++];
        return y;
      }
    }
  }
  function m(v) {
    var E = p(v);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: p,
    decode: m
  };
}
var vg = mg, bg = vg;
const wg = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, _g = (t) => new TextEncoder().encode(t), Eg = (t) => new TextDecoder().decode(t);
class Sg {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Dg {
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
    return bl(this, e);
  }
}
class xg {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return bl(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const bl = (t, e) => new xg({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Og {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Sg(e, r, n), this.decoder = new Dg(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ti = ({ name: t, prefix: e, encode: r, decode: n }) => new Og(t, e, r, n), Os = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = bg(r, e);
  return Ti({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => wg(s(i))
  });
}, Ig = (t, e, r, n) => {
  const s = {};
  for (let h = 0; h < e.length; ++h)
    s[e[h]] = h;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, l = 0, u = 0;
  for (let h = 0; h < i; ++h) {
    const f = s[t[h]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | f, a += r, a >= 8 && (a -= 8, o[u++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Cg = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Ot = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ti({
  prefix: e,
  name: t,
  encode(s) {
    return Cg(s, n, r);
  },
  decode(s) {
    return Ig(s, n, r, t);
  }
}), Rg = Ti({
  prefix: "\0",
  name: "identity",
  encode: (t) => Eg(t),
  decode: (t) => _g(t)
}), Tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Rg
}, Symbol.toStringTag, { value: "Module" })), Pg = Ot({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Pg
}, Symbol.toStringTag, { value: "Module" })), Ng = Ot({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Ng
}, Symbol.toStringTag, { value: "Module" })), Fg = Os({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Fg
}, Symbol.toStringTag, { value: "Module" })), Ug = Ot({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), jg = Ot({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Ug,
  base16upper: jg
}, Symbol.toStringTag, { value: "Module" })), kg = Ot({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), qg = Ot({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), zg = Ot({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Bg = Ot({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Vg = Ot({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Kg = Ot({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Wg = Ot({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Hg = Ot({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Gg = Ot({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: kg,
  base32hex: Vg,
  base32hexpad: Wg,
  base32hexpadupper: Hg,
  base32hexupper: Kg,
  base32pad: zg,
  base32padupper: Bg,
  base32upper: qg,
  base32z: Gg
}, Symbol.toStringTag, { value: "Module" })), Qg = Os({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Yg = Os({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Qg,
  base36upper: Yg
}, Symbol.toStringTag, { value: "Module" })), Xg = Os({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), ey = Os({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Xg,
  base58flickr: ey
}, Symbol.toStringTag, { value: "Module" })), ry = Ot({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ny = Ot({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), sy = Ot({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), iy = Ot({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: ry,
  base64pad: ny,
  base64url: sy,
  base64urlpad: iy
}, Symbol.toStringTag, { value: "Module" })), wl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), oy = wl.reduce((t, e, r) => (t[r] = e, t), []), cy = wl.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function uy(t) {
  return t.reduce((e, r) => (e += oy[r], e), "");
}
function ly(t) {
  const e = [];
  for (const r of t) {
    const n = cy[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const hy = Ti({
  prefix: "🚀",
  name: "base256emoji",
  encode: uy,
  decode: ly
}), dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: hy
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const _c = {
  ...Tg,
  ...Ag,
  ...Lg,
  ...Mg,
  ...$g,
  ...Zg,
  ...Jg,
  ...ty,
  ...ay,
  ...dy
};
function _l(t, e, r, n) {
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
const Ec = _l("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Xi = _l("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = vl(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), El = {
  utf8: Ec,
  "utf-8": Ec,
  hex: _c.base16,
  latin1: Xi,
  ascii: Xi,
  binary: Xi,
  ..._c
};
function qt(t, e = "utf8") {
  const r = El[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Wt(t, e = "utf8") {
  const r = El[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? eo(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function ci(t) {
  return qt(Wt(xs(t), ug), ml);
}
function Sl(t) {
  const e = Wt(gg, wc), r = pg + qt(Sa([e, t]), wc);
  return [dg, fg, r].join(hg);
}
function fy(t) {
  return qt(t, ml);
}
function py(t) {
  return Wt([ci(t.header), ci(t.payload)].join(yl), lg);
}
function gy(t) {
  return [
    ci(t.header),
    ci(t.payload),
    fy(t.signature)
  ].join(yl);
}
function Sc(t = Un.randomBytes(yg)) {
  return Xa.generateKeyPairFromSeed(t);
}
async function yy(t, e, r, n, s = se.fromMiliseconds(Date.now())) {
  const i = { alg: og, typ: cg }, o = Sl(n.publicKey), a = s + r, l = { iss: o, sub: t, aud: e, iat: s, exp: a }, u = py({ header: i, payload: l }), h = Xa.sign(n.secretKey, u);
  return gy({ header: i, payload: l, signature: h });
}
var to = {}, Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
var Tt = ye, Da = Qt, my = 20;
function vy(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], S = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], A = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], x = n, b = s, D = i, g = o, c = a, y = l, R = u, N = h, U = f, V = p, G = m, C = v, L = E, Z = S, B = A, k = w, z = 0; z < my; z += 2)
    x = x + c | 0, L ^= x, L = L >>> 32 - 16 | L << 16, U = U + L | 0, c ^= U, c = c >>> 32 - 12 | c << 12, b = b + y | 0, Z ^= b, Z = Z >>> 32 - 16 | Z << 16, V = V + Z | 0, y ^= V, y = y >>> 32 - 12 | y << 12, D = D + R | 0, B ^= D, B = B >>> 32 - 16 | B << 16, G = G + B | 0, R ^= G, R = R >>> 32 - 12 | R << 12, g = g + N | 0, k ^= g, k = k >>> 32 - 16 | k << 16, C = C + k | 0, N ^= C, N = N >>> 32 - 12 | N << 12, D = D + R | 0, B ^= D, B = B >>> 32 - 8 | B << 8, G = G + B | 0, R ^= G, R = R >>> 32 - 7 | R << 7, g = g + N | 0, k ^= g, k = k >>> 32 - 8 | k << 8, C = C + k | 0, N ^= C, N = N >>> 32 - 7 | N << 7, b = b + y | 0, Z ^= b, Z = Z >>> 32 - 8 | Z << 8, V = V + Z | 0, y ^= V, y = y >>> 32 - 7 | y << 7, x = x + c | 0, L ^= x, L = L >>> 32 - 8 | L << 8, U = U + L | 0, c ^= U, c = c >>> 32 - 7 | c << 7, x = x + y | 0, k ^= x, k = k >>> 32 - 16 | k << 16, G = G + k | 0, y ^= G, y = y >>> 32 - 12 | y << 12, b = b + R | 0, L ^= b, L = L >>> 32 - 16 | L << 16, C = C + L | 0, R ^= C, R = R >>> 32 - 12 | R << 12, D = D + N | 0, Z ^= D, Z = Z >>> 32 - 16 | Z << 16, U = U + Z | 0, N ^= U, N = N >>> 32 - 12 | N << 12, g = g + c | 0, B ^= g, B = B >>> 32 - 16 | B << 16, V = V + B | 0, c ^= V, c = c >>> 32 - 12 | c << 12, D = D + N | 0, Z ^= D, Z = Z >>> 32 - 8 | Z << 8, U = U + Z | 0, N ^= U, N = N >>> 32 - 7 | N << 7, g = g + c | 0, B ^= g, B = B >>> 32 - 8 | B << 8, V = V + B | 0, c ^= V, c = c >>> 32 - 7 | c << 7, b = b + R | 0, L ^= b, L = L >>> 32 - 8 | L << 8, C = C + L | 0, R ^= C, R = R >>> 32 - 7 | R << 7, x = x + y | 0, k ^= x, k = k >>> 32 - 8 | k << 8, G = G + k | 0, y ^= G, y = y >>> 32 - 7 | y << 7;
  Tt.writeUint32LE(x + n | 0, t, 0), Tt.writeUint32LE(b + s | 0, t, 4), Tt.writeUint32LE(D + i | 0, t, 8), Tt.writeUint32LE(g + o | 0, t, 12), Tt.writeUint32LE(c + a | 0, t, 16), Tt.writeUint32LE(y + l | 0, t, 20), Tt.writeUint32LE(R + u | 0, t, 24), Tt.writeUint32LE(N + h | 0, t, 28), Tt.writeUint32LE(U + f | 0, t, 32), Tt.writeUint32LE(V + p | 0, t, 36), Tt.writeUint32LE(G + m | 0, t, 40), Tt.writeUint32LE(C + v | 0, t, 44), Tt.writeUint32LE(L + E | 0, t, 48), Tt.writeUint32LE(Z + S | 0, t, 52), Tt.writeUint32LE(B + A | 0, t, 56), Tt.writeUint32LE(k + w | 0, t, 60);
}
function Dl(t, e, r, n, s) {
  if (s === void 0 && (s = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var i, o;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    i = new Uint8Array(16), o = i.length - e.length, i.set(e, o);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    i = e, o = s;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    vy(a, i, t);
    for (var u = l; u < l + 64 && u < r.length; u++)
      n[u] = r[u] ^ a[u - l];
    wy(i, 0, o);
  }
  return Da.wipe(a), s === 0 && Da.wipe(i), n;
}
Pi.streamXOR = Dl;
function by(t, e, r, n) {
  return n === void 0 && (n = 0), Da.wipe(r), Dl(t, e, r, r, n);
}
Pi.stream = by;
function wy(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var xl = {}, Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
function _y(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Zr.select = _y;
function Ey(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Zr.lessOrEqual = Ey;
function Ol(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Zr.compare = Ol;
function Sy(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Ol(t, e) !== 0;
}
Zr.equal = Sy;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Zr, r = Qt;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var u = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | u << 3) & 8191;
        var h = a[4] | a[5] << 8;
        this._r[2] = (u >>> 10 | h << 6) & 7939;
        var f = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | f << 9) & 8191;
        var p = a[8] | a[9] << 8;
        this._r[4] = (f >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var E = a[14] | a[15] << 8;
        this._r[8] = (v >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, l, u) {
        for (var h = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], E = this._h[4], S = this._h[5], A = this._h[6], w = this._h[7], x = this._h[8], b = this._h[9], D = this._r[0], g = this._r[1], c = this._r[2], y = this._r[3], R = this._r[4], N = this._r[5], U = this._r[6], V = this._r[7], G = this._r[8], C = this._r[9]; u >= 16; ) {
          var L = a[l + 0] | a[l + 1] << 8;
          f += L & 8191;
          var Z = a[l + 2] | a[l + 3] << 8;
          p += (L >>> 13 | Z << 3) & 8191;
          var B = a[l + 4] | a[l + 5] << 8;
          m += (Z >>> 10 | B << 6) & 8191;
          var k = a[l + 6] | a[l + 7] << 8;
          v += (B >>> 7 | k << 9) & 8191;
          var z = a[l + 8] | a[l + 9] << 8;
          E += (k >>> 4 | z << 12) & 8191, S += z >>> 1 & 8191;
          var $ = a[l + 10] | a[l + 11] << 8;
          A += (z >>> 14 | $ << 2) & 8191;
          var K = a[l + 12] | a[l + 13] << 8;
          w += ($ >>> 11 | K << 5) & 8191;
          var he = a[l + 14] | a[l + 15] << 8;
          x += (K >>> 8 | he << 8) & 8191, b += he >>> 5 | h;
          var W = 0, oe = W;
          oe += f * D, oe += p * (5 * C), oe += m * (5 * G), oe += v * (5 * V), oe += E * (5 * U), W = oe >>> 13, oe &= 8191, oe += S * (5 * N), oe += A * (5 * R), oe += w * (5 * y), oe += x * (5 * c), oe += b * (5 * g), W += oe >>> 13, oe &= 8191;
          var te = W;
          te += f * g, te += p * D, te += m * (5 * C), te += v * (5 * G), te += E * (5 * V), W = te >>> 13, te &= 8191, te += S * (5 * U), te += A * (5 * N), te += w * (5 * R), te += x * (5 * y), te += b * (5 * c), W += te >>> 13, te &= 8191;
          var ae = W;
          ae += f * c, ae += p * g, ae += m * D, ae += v * (5 * C), ae += E * (5 * G), W = ae >>> 13, ae &= 8191, ae += S * (5 * V), ae += A * (5 * U), ae += w * (5 * N), ae += x * (5 * R), ae += b * (5 * y), W += ae >>> 13, ae &= 8191;
          var M = W;
          M += f * y, M += p * c, M += m * g, M += v * D, M += E * (5 * C), W = M >>> 13, M &= 8191, M += S * (5 * G), M += A * (5 * V), M += w * (5 * U), M += x * (5 * N), M += b * (5 * R), W += M >>> 13, M &= 8191;
          var F = W;
          F += f * R, F += p * y, F += m * c, F += v * g, F += E * D, W = F >>> 13, F &= 8191, F += S * (5 * C), F += A * (5 * G), F += w * (5 * V), F += x * (5 * U), F += b * (5 * N), W += F >>> 13, F &= 8191;
          var T = W;
          T += f * N, T += p * R, T += m * y, T += v * c, T += E * g, W = T >>> 13, T &= 8191, T += S * D, T += A * (5 * C), T += w * (5 * G), T += x * (5 * V), T += b * (5 * U), W += T >>> 13, T &= 8191;
          var d = W;
          d += f * U, d += p * N, d += m * R, d += v * y, d += E * c, W = d >>> 13, d &= 8191, d += S * g, d += A * D, d += w * (5 * C), d += x * (5 * G), d += b * (5 * V), W += d >>> 13, d &= 8191;
          var I = W;
          I += f * V, I += p * U, I += m * N, I += v * R, I += E * y, W = I >>> 13, I &= 8191, I += S * c, I += A * g, I += w * D, I += x * (5 * C), I += b * (5 * G), W += I >>> 13, I &= 8191;
          var Q = W;
          Q += f * G, Q += p * V, Q += m * U, Q += v * N, Q += E * R, W = Q >>> 13, Q &= 8191, Q += S * y, Q += A * c, Q += w * g, Q += x * D, Q += b * (5 * C), W += Q >>> 13, Q &= 8191;
          var X = W;
          X += f * C, X += p * G, X += m * V, X += v * U, X += E * N, W = X >>> 13, X &= 8191, X += S * R, X += A * y, X += w * c, X += x * g, X += b * D, W += X >>> 13, X &= 8191, W = (W << 2) + W | 0, W = W + oe | 0, oe = W & 8191, W = W >>> 13, te += W, f = oe, p = te, m = ae, v = M, E = F, S = T, A = d, w = I, x = Q, b = X, l += 16, u -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = E, this._h[5] = S, this._h[6] = A, this._h[7] = w, this._h[8] = x, this._h[9] = b;
      }, o.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var u = new Uint16Array(10), h, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += h, h = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, u[0] = this._h[0] + 5, h = u[0] >>> 13, u[0] &= 8191, m = 1; m < 10; m++)
          u[m] = this._h[m] + h, h = u[m] >>> 13, u[m] &= 8191;
        for (u[9] -= 8192, f = (h ^ 1) - 1, m = 0; m < 10; m++)
          u[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | u[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var l = 0, u = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > u && (h = u);
          for (var f = 0; f < h; f++)
            this._buffer[this._leftover + f] = a[l + f];
          if (u -= h, l += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (u >= 16 && (h = u - u % 16, this._blocks(a, l, h), l += h, u -= h), u) {
          for (var f = 0; f < u; f++)
            this._buffer[this._leftover + f] = a[l + f];
          this._leftover += u;
        }
        return this;
      }, o.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, o.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, o;
    }()
  );
  t.Poly1305 = n;
  function s(o, a) {
    var l = new n(o);
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.oneTimeAuth = s;
  function i(o, a) {
    return o.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(o, a);
  }
  t.equal = i;
})(xl);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Pi, r = xl, n = Qt, s = ye, i = Zr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(u) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, u.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(u);
      }
      return l.prototype.seal = function(u, h, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = h.length + this.tagLength, S;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          S = p;
        } else
          S = new Uint8Array(E);
        return e.streamXOR(this._key, m, h, S, 4), this._authenticate(S.subarray(S.length - this.tagLength, S.length), v, S.subarray(0, S.length - this.tagLength), f), n.wipe(m), S;
      }, l.prototype.open = function(u, h, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, v, h.subarray(0, h.length - this.tagLength), f), !i.equal(E, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var S = h.length - this.tagLength, A;
        if (p) {
          if (p.length !== S)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          A = p;
        } else
          A = new Uint8Array(S);
        return e.streamXOR(this._key, m, h.subarray(0, h.length - this.tagLength), A, 4), n.wipe(m), A;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(u, h, f, p) {
        var m = new r.Poly1305(h);
        p && (m.update(p), p.length % 16 > 0 && m.update(o.subarray(p.length % 16))), m.update(f), f.length % 16 > 0 && m.update(o.subarray(f.length % 16));
        var v = new Uint8Array(8);
        p && s.writeUint64LE(p.length, v), m.update(v), s.writeUint64LE(f.length, v), m.update(v);
        for (var E = m.digest(), S = 0; S < E.length; S++)
          u[S] = E[S];
        m.clean(), n.wipe(E), n.wipe(v);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(to);
var Il = {}, Is = {}, ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
function Dy(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
ro.isSerializableHash = Dy;
Object.defineProperty(Is, "__esModule", { value: !0 });
var _r = ro, xy = Zr, Oy = Qt, Cl = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var s = 0; s < n.length; s++)
        n[s] ^= 54;
      this._inner.update(n);
      for (var s = 0; s < n.length; s++)
        n[s] ^= 106;
      this._outer.update(n), _r.isSerializableHash(this._inner) && _r.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Oy.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!_r.isSerializableHash(this._inner) || !_r.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      _r.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), _r.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!_r.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!_r.isSerializableHash(this._inner) || !_r.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!_r.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Is.HMAC = Cl;
function Iy(t, e, r) {
  var n = new Cl(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
Is.hmac = Iy;
Is.equal = xy.equal;
Object.defineProperty(Il, "__esModule", { value: !0 });
var Dc = Is, xc = Qt, Cy = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Dc.hmac(this._hash, n, r);
      this._hmac = new Dc.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), xc.wipe(this._buffer), xc.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Ry = Il.HKDF = Cy, Ai = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ye, r = Qt;
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
      }, a.prototype.update = function(l, u) {
        if (u === void 0 && (u = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && u > 0; )
            this._buffer[this._bufferLength++] = l[h++], u--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (h = i(this._temp, this._state, l, h, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = l[h++], u--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var u = this._bytesHashed, h = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var v = h + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 4; v++)
          e.writeUint32BE(this._state[v], l, v * 4);
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
  var s = new Int32Array([
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
  function i(a, l, u, h, f) {
    for (; f >= 64; ) {
      for (var p = l[0], m = l[1], v = l[2], E = l[3], S = l[4], A = l[5], w = l[6], x = l[7], b = 0; b < 16; b++) {
        var D = h + b * 4;
        a[b] = e.readUint32BE(u, D);
      }
      for (var b = 16; b < 64; b++) {
        var g = a[b - 2], c = (g >>> 17 | g << 32 - 17) ^ (g >>> 19 | g << 32 - 19) ^ g >>> 10;
        g = a[b - 15];
        var y = (g >>> 7 | g << 32 - 7) ^ (g >>> 18 | g << 32 - 18) ^ g >>> 3;
        a[b] = (c + a[b - 7] | 0) + (y + a[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var c = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & A ^ ~S & w) | 0) + (x + (s[b] + a[b] | 0) | 0) | 0, y = ((p >>> 2 | p << 32 - 2) ^ (p >>> 13 | p << 32 - 13) ^ (p >>> 22 | p << 32 - 22)) + (p & m ^ p & v ^ m & v) | 0;
        x = w, w = A, A = S, S = E + c | 0, E = v, v = m, m = p, p = c + y | 0;
      }
      l[0] += p, l[1] += m, l[2] += v, l[3] += E, l[4] += S, l[5] += A, l[6] += w, l[7] += x, h += 64, f -= 64;
    }
    return h;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.hash = o;
})(Ai);
var no = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Un, r = Qt;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const D = new Float64Array(16);
    if (b)
      for (let g = 0; g < b.length; g++)
        D[g] = b[g];
    return D;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function o(b) {
    let D = 1;
    for (let g = 0; g < 16; g++) {
      let c = b[g] + D + 65535;
      D = Math.floor(c / 65536), b[g] = c - D * 65536;
    }
    b[0] += D - 1 + 37 * (D - 1);
  }
  function a(b, D, g) {
    const c = ~(g - 1);
    for (let y = 0; y < 16; y++) {
      const R = c & (b[y] ^ D[y]);
      b[y] ^= R, D[y] ^= R;
    }
  }
  function l(b, D) {
    const g = n(), c = n();
    for (let y = 0; y < 16; y++)
      c[y] = D[y];
    o(c), o(c), o(c);
    for (let y = 0; y < 2; y++) {
      g[0] = c[0] - 65517;
      for (let N = 1; N < 15; N++)
        g[N] = c[N] - 65535 - (g[N - 1] >> 16 & 1), g[N - 1] &= 65535;
      g[15] = c[15] - 32767 - (g[14] >> 16 & 1);
      const R = g[15] >> 16 & 1;
      g[14] &= 65535, a(c, g, 1 - R);
    }
    for (let y = 0; y < 16; y++)
      b[2 * y] = c[y] & 255, b[2 * y + 1] = c[y] >> 8;
  }
  function u(b, D) {
    for (let g = 0; g < 16; g++)
      b[g] = D[2 * g] + (D[2 * g + 1] << 8);
    b[15] &= 32767;
  }
  function h(b, D, g) {
    for (let c = 0; c < 16; c++)
      b[c] = D[c] + g[c];
  }
  function f(b, D, g) {
    for (let c = 0; c < 16; c++)
      b[c] = D[c] - g[c];
  }
  function p(b, D, g) {
    let c, y, R = 0, N = 0, U = 0, V = 0, G = 0, C = 0, L = 0, Z = 0, B = 0, k = 0, z = 0, $ = 0, K = 0, he = 0, W = 0, oe = 0, te = 0, ae = 0, M = 0, F = 0, T = 0, d = 0, I = 0, Q = 0, X = 0, xe = 0, Oe = 0, be = 0, Le = 0, Ze = 0, Be = 0, Ae = g[0], Re = g[1], we = g[2], Ee = g[3], _e = g[4], ge = g[5], pe = g[6], ce = g[7], Se = g[8], Ie = g[9], de = g[10], Te = g[11], Fe = g[12], $e = g[13], ke = g[14], Me = g[15];
    c = D[0], R += c * Ae, N += c * Re, U += c * we, V += c * Ee, G += c * _e, C += c * ge, L += c * pe, Z += c * ce, B += c * Se, k += c * Ie, z += c * de, $ += c * Te, K += c * Fe, he += c * $e, W += c * ke, oe += c * Me, c = D[1], N += c * Ae, U += c * Re, V += c * we, G += c * Ee, C += c * _e, L += c * ge, Z += c * pe, B += c * ce, k += c * Se, z += c * Ie, $ += c * de, K += c * Te, he += c * Fe, W += c * $e, oe += c * ke, te += c * Me, c = D[2], U += c * Ae, V += c * Re, G += c * we, C += c * Ee, L += c * _e, Z += c * ge, B += c * pe, k += c * ce, z += c * Se, $ += c * Ie, K += c * de, he += c * Te, W += c * Fe, oe += c * $e, te += c * ke, ae += c * Me, c = D[3], V += c * Ae, G += c * Re, C += c * we, L += c * Ee, Z += c * _e, B += c * ge, k += c * pe, z += c * ce, $ += c * Se, K += c * Ie, he += c * de, W += c * Te, oe += c * Fe, te += c * $e, ae += c * ke, M += c * Me, c = D[4], G += c * Ae, C += c * Re, L += c * we, Z += c * Ee, B += c * _e, k += c * ge, z += c * pe, $ += c * ce, K += c * Se, he += c * Ie, W += c * de, oe += c * Te, te += c * Fe, ae += c * $e, M += c * ke, F += c * Me, c = D[5], C += c * Ae, L += c * Re, Z += c * we, B += c * Ee, k += c * _e, z += c * ge, $ += c * pe, K += c * ce, he += c * Se, W += c * Ie, oe += c * de, te += c * Te, ae += c * Fe, M += c * $e, F += c * ke, T += c * Me, c = D[6], L += c * Ae, Z += c * Re, B += c * we, k += c * Ee, z += c * _e, $ += c * ge, K += c * pe, he += c * ce, W += c * Se, oe += c * Ie, te += c * de, ae += c * Te, M += c * Fe, F += c * $e, T += c * ke, d += c * Me, c = D[7], Z += c * Ae, B += c * Re, k += c * we, z += c * Ee, $ += c * _e, K += c * ge, he += c * pe, W += c * ce, oe += c * Se, te += c * Ie, ae += c * de, M += c * Te, F += c * Fe, T += c * $e, d += c * ke, I += c * Me, c = D[8], B += c * Ae, k += c * Re, z += c * we, $ += c * Ee, K += c * _e, he += c * ge, W += c * pe, oe += c * ce, te += c * Se, ae += c * Ie, M += c * de, F += c * Te, T += c * Fe, d += c * $e, I += c * ke, Q += c * Me, c = D[9], k += c * Ae, z += c * Re, $ += c * we, K += c * Ee, he += c * _e, W += c * ge, oe += c * pe, te += c * ce, ae += c * Se, M += c * Ie, F += c * de, T += c * Te, d += c * Fe, I += c * $e, Q += c * ke, X += c * Me, c = D[10], z += c * Ae, $ += c * Re, K += c * we, he += c * Ee, W += c * _e, oe += c * ge, te += c * pe, ae += c * ce, M += c * Se, F += c * Ie, T += c * de, d += c * Te, I += c * Fe, Q += c * $e, X += c * ke, xe += c * Me, c = D[11], $ += c * Ae, K += c * Re, he += c * we, W += c * Ee, oe += c * _e, te += c * ge, ae += c * pe, M += c * ce, F += c * Se, T += c * Ie, d += c * de, I += c * Te, Q += c * Fe, X += c * $e, xe += c * ke, Oe += c * Me, c = D[12], K += c * Ae, he += c * Re, W += c * we, oe += c * Ee, te += c * _e, ae += c * ge, M += c * pe, F += c * ce, T += c * Se, d += c * Ie, I += c * de, Q += c * Te, X += c * Fe, xe += c * $e, Oe += c * ke, be += c * Me, c = D[13], he += c * Ae, W += c * Re, oe += c * we, te += c * Ee, ae += c * _e, M += c * ge, F += c * pe, T += c * ce, d += c * Se, I += c * Ie, Q += c * de, X += c * Te, xe += c * Fe, Oe += c * $e, be += c * ke, Le += c * Me, c = D[14], W += c * Ae, oe += c * Re, te += c * we, ae += c * Ee, M += c * _e, F += c * ge, T += c * pe, d += c * ce, I += c * Se, Q += c * Ie, X += c * de, xe += c * Te, Oe += c * Fe, be += c * $e, Le += c * ke, Ze += c * Me, c = D[15], oe += c * Ae, te += c * Re, ae += c * we, M += c * Ee, F += c * _e, T += c * ge, d += c * pe, I += c * ce, Q += c * Se, X += c * Ie, xe += c * de, Oe += c * Te, be += c * Fe, Le += c * $e, Ze += c * ke, Be += c * Me, R += 38 * te, N += 38 * ae, U += 38 * M, V += 38 * F, G += 38 * T, C += 38 * d, L += 38 * I, Z += 38 * Q, B += 38 * X, k += 38 * xe, z += 38 * Oe, $ += 38 * be, K += 38 * Le, he += 38 * Ze, W += 38 * Be, y = 1, c = R + y + 65535, y = Math.floor(c / 65536), R = c - y * 65536, c = N + y + 65535, y = Math.floor(c / 65536), N = c - y * 65536, c = U + y + 65535, y = Math.floor(c / 65536), U = c - y * 65536, c = V + y + 65535, y = Math.floor(c / 65536), V = c - y * 65536, c = G + y + 65535, y = Math.floor(c / 65536), G = c - y * 65536, c = C + y + 65535, y = Math.floor(c / 65536), C = c - y * 65536, c = L + y + 65535, y = Math.floor(c / 65536), L = c - y * 65536, c = Z + y + 65535, y = Math.floor(c / 65536), Z = c - y * 65536, c = B + y + 65535, y = Math.floor(c / 65536), B = c - y * 65536, c = k + y + 65535, y = Math.floor(c / 65536), k = c - y * 65536, c = z + y + 65535, y = Math.floor(c / 65536), z = c - y * 65536, c = $ + y + 65535, y = Math.floor(c / 65536), $ = c - y * 65536, c = K + y + 65535, y = Math.floor(c / 65536), K = c - y * 65536, c = he + y + 65535, y = Math.floor(c / 65536), he = c - y * 65536, c = W + y + 65535, y = Math.floor(c / 65536), W = c - y * 65536, c = oe + y + 65535, y = Math.floor(c / 65536), oe = c - y * 65536, R += y - 1 + 37 * (y - 1), y = 1, c = R + y + 65535, y = Math.floor(c / 65536), R = c - y * 65536, c = N + y + 65535, y = Math.floor(c / 65536), N = c - y * 65536, c = U + y + 65535, y = Math.floor(c / 65536), U = c - y * 65536, c = V + y + 65535, y = Math.floor(c / 65536), V = c - y * 65536, c = G + y + 65535, y = Math.floor(c / 65536), G = c - y * 65536, c = C + y + 65535, y = Math.floor(c / 65536), C = c - y * 65536, c = L + y + 65535, y = Math.floor(c / 65536), L = c - y * 65536, c = Z + y + 65535, y = Math.floor(c / 65536), Z = c - y * 65536, c = B + y + 65535, y = Math.floor(c / 65536), B = c - y * 65536, c = k + y + 65535, y = Math.floor(c / 65536), k = c - y * 65536, c = z + y + 65535, y = Math.floor(c / 65536), z = c - y * 65536, c = $ + y + 65535, y = Math.floor(c / 65536), $ = c - y * 65536, c = K + y + 65535, y = Math.floor(c / 65536), K = c - y * 65536, c = he + y + 65535, y = Math.floor(c / 65536), he = c - y * 65536, c = W + y + 65535, y = Math.floor(c / 65536), W = c - y * 65536, c = oe + y + 65535, y = Math.floor(c / 65536), oe = c - y * 65536, R += y - 1 + 37 * (y - 1), b[0] = R, b[1] = N, b[2] = U, b[3] = V, b[4] = G, b[5] = C, b[6] = L, b[7] = Z, b[8] = B, b[9] = k, b[10] = z, b[11] = $, b[12] = K, b[13] = he, b[14] = W, b[15] = oe;
  }
  function m(b, D) {
    p(b, D, D);
  }
  function v(b, D) {
    const g = n();
    for (let c = 0; c < 16; c++)
      g[c] = D[c];
    for (let c = 253; c >= 0; c--)
      m(g, g), c !== 2 && c !== 4 && p(g, g, D);
    for (let c = 0; c < 16; c++)
      b[c] = g[c];
  }
  function E(b, D) {
    const g = new Uint8Array(32), c = new Float64Array(80), y = n(), R = n(), N = n(), U = n(), V = n(), G = n();
    for (let B = 0; B < 31; B++)
      g[B] = b[B];
    g[31] = b[31] & 127 | 64, g[0] &= 248, u(c, D);
    for (let B = 0; B < 16; B++)
      R[B] = c[B];
    y[0] = U[0] = 1;
    for (let B = 254; B >= 0; --B) {
      const k = g[B >>> 3] >>> (B & 7) & 1;
      a(y, R, k), a(N, U, k), h(V, y, N), f(y, y, N), h(N, R, U), f(R, R, U), m(U, V), m(G, y), p(y, N, y), p(N, R, V), h(V, y, N), f(y, y, N), m(R, y), f(N, U, G), p(y, N, i), h(y, y, U), p(N, N, y), p(y, U, G), p(U, R, c), m(R, V), a(y, R, k), a(N, U, k);
    }
    for (let B = 0; B < 16; B++)
      c[B + 16] = y[B], c[B + 32] = N[B], c[B + 48] = R[B], c[B + 64] = U[B];
    const C = c.subarray(32), L = c.subarray(16);
    v(C, C), p(L, L, C);
    const Z = new Uint8Array(32);
    return l(Z, L), Z;
  }
  t.scalarMult = E;
  function S(b) {
    return E(b, s);
  }
  t.scalarMultBase = S;
  function A(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const D = new Uint8Array(b);
    return {
      publicKey: S(D),
      secretKey: D
    };
  }
  t.generateKeyPairFromSeed = A;
  function w(b) {
    const D = (0, e.randomBytes)(32, b), g = A(D);
    return (0, r.wipe)(D), g;
  }
  t.generateKeyPair = w;
  function x(b, D, g = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (D.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = E(b, D);
    if (g) {
      let y = 0;
      for (let R = 0; R < c.length; R++)
        y |= c[R];
      if (y === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = x;
})(no);
var Oc = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Ty = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Py = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Ay = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Ny = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Ly = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Fy = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, My = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ic = 3, Uy = [
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
  ["searchbot", Fy]
], Cc = [
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
function jy(t) {
  return t ? Rc(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Ly() : typeof navigator < "u" ? Rc(navigator.userAgent) : qy();
}
function $y(t) {
  return t !== "" && Uy.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function Rc(t) {
  var e = $y(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Ny();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Ic && (s = Oc(Oc([], s, !0), zy(Ic - s.length), !0)) : s = [];
  var i = s.join("."), o = ky(t), a = My.exec(t);
  return a && a[1] ? new Ay(r, i, o, a[1]) : new Ty(r, i, o);
}
function ky(t) {
  for (var e = 0, r = Cc.length; e < r; e++) {
    var n = Cc[e], s = n[0], i = n[1], o = i.exec(t);
    if (o)
      return s;
  }
  return null;
}
function qy() {
  var t = typeof process < "u" && process.version;
  return t ? new Py(process.version.slice(1)) : null;
}
function zy(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.getLocalStorage = Ke.getLocalStorageOrThrow = Ke.getCrypto = Ke.getCryptoOrThrow = Tl = Ke.getLocation = Ke.getLocationOrThrow = so = Ke.getNavigator = Ke.getNavigatorOrThrow = Rl = Ke.getDocument = Ke.getDocumentOrThrow = Ke.getFromWindowOrThrow = Ke.getFromWindow = void 0;
function vn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Ke.getFromWindow = vn;
function jn(t) {
  const e = vn(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Ke.getFromWindowOrThrow = jn;
function By() {
  return jn("document");
}
Ke.getDocumentOrThrow = By;
function Vy() {
  return vn("document");
}
var Rl = Ke.getDocument = Vy;
function Ky() {
  return jn("navigator");
}
Ke.getNavigatorOrThrow = Ky;
function Wy() {
  return vn("navigator");
}
var so = Ke.getNavigator = Wy;
function Hy() {
  return jn("location");
}
Ke.getLocationOrThrow = Hy;
function Gy() {
  return vn("location");
}
var Tl = Ke.getLocation = Gy;
function Zy() {
  return jn("crypto");
}
Ke.getCryptoOrThrow = Zy;
function Qy() {
  return vn("crypto");
}
Ke.getCrypto = Qy;
function Yy() {
  return jn("localStorage");
}
Ke.getLocalStorageOrThrow = Yy;
function Jy() {
  return vn("localStorage");
}
Ke.getLocalStorage = Jy;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
var Pl = io.getWindowMetadata = void 0;
const Tc = Ke;
function Xy() {
  let t, e;
  try {
    t = Tc.getDocumentOrThrow(), e = Tc.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const f = t.getElementsByTagName("link"), p = [];
    for (let m = 0; m < f.length; m++) {
      const v = f[m], E = v.getAttribute("rel");
      if (E && E.toLowerCase().indexOf("icon") > -1) {
        const S = v.getAttribute("href");
        if (S)
          if (S.toLowerCase().indexOf("https:") === -1 && S.toLowerCase().indexOf("http:") === -1 && S.indexOf("//") !== 0) {
            let A = e.protocol + "//" + e.host;
            if (S.indexOf("/") === 0)
              A += S;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const x = w.join("/");
              A += x + "/" + S;
            }
            p.push(A);
          } else if (S.indexOf("//") === 0) {
            const A = e.protocol + S;
            p.push(A);
          } else
            p.push(S);
      }
    }
    return p;
  }
  function n(...f) {
    const p = t.getElementsByTagName("meta");
    for (let m = 0; m < p.length; m++) {
      const v = p[m], E = ["itemprop", "property", "name"].map((S) => v.getAttribute(S)).filter((S) => S ? f.includes(S) : !1);
      if (E.length && E) {
        const S = v.getAttribute("content");
        if (S)
          return S;
      }
    }
    return "";
  }
  function s() {
    let f = n("name", "og:site_name", "og:title", "twitter:title");
    return f || (f = t.title), f;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const o = s(), a = i(), l = e.origin, u = r();
  return {
    description: a,
    url: l,
    icons: u,
    name: o
  };
}
Pl = io.getWindowMetadata = Xy;
var cs = {}, em = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Al = "%[a-f0-9]{2}", Pc = new RegExp("(" + Al + ")|([^%]+?)", "gi"), Ac = new RegExp("(" + Al + ")+", "gi");
function xa(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], xa(r), xa(n));
}
function tm(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Pc) || [], r = 1; r < e.length; r++)
      t = xa(e, r).join(""), e = t.match(Pc) || [];
    return t;
  }
}
function rm(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Ac.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = tm(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Ac.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var o = s[i];
    t = t.replace(new RegExp(o, "g"), e[o]);
  }
  return t;
}
var nm = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return rm(t);
  }
}, sm = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, im = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var o = n[i], a = t[o];
    (s ? e.indexOf(o) !== -1 : e(o, a, t)) && (r[o] = a);
  }
  return r;
};
(function(t) {
  const e = em, r = nm, n = sm, s = im, i = (w) => w == null, o = Symbol("encodeFragmentIdentifier");
  function a(w) {
    switch (w.arrayFormat) {
      case "index":
        return (x) => (b, D) => {
          const g = b.length;
          return D === void 0 || w.skipNull && D === null || w.skipEmptyString && D === "" ? b : D === null ? [...b, [h(x, w), "[", g, "]"].join("")] : [
            ...b,
            [h(x, w), "[", h(g, w), "]=", h(D, w)].join("")
          ];
        };
      case "bracket":
        return (x) => (b, D) => D === void 0 || w.skipNull && D === null || w.skipEmptyString && D === "" ? b : D === null ? [...b, [h(x, w), "[]"].join("")] : [...b, [h(x, w), "[]=", h(D, w)].join("")];
      case "colon-list-separator":
        return (x) => (b, D) => D === void 0 || w.skipNull && D === null || w.skipEmptyString && D === "" ? b : D === null ? [...b, [h(x, w), ":list="].join("")] : [...b, [h(x, w), ":list=", h(D, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const x = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (D, g) => g === void 0 || w.skipNull && g === null || w.skipEmptyString && g === "" ? D : (g = g === null ? "" : g, D.length === 0 ? [[h(b, w), x, h(g, w)].join("")] : [[D, h(g, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (x) => (b, D) => D === void 0 || w.skipNull && D === null || w.skipEmptyString && D === "" ? b : D === null ? [...b, h(x, w)] : [...b, [h(x, w), "=", h(D, w)].join("")];
    }
  }
  function l(w) {
    let x;
    switch (w.arrayFormat) {
      case "index":
        return (b, D, g) => {
          if (x = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !x) {
            g[b] = D;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][x[1]] = D;
        };
      case "bracket":
        return (b, D, g) => {
          if (x = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !x) {
            g[b] = D;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [D];
            return;
          }
          g[b] = [].concat(g[b], D);
        };
      case "colon-list-separator":
        return (b, D, g) => {
          if (x = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !x) {
            g[b] = D;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [D];
            return;
          }
          g[b] = [].concat(g[b], D);
        };
      case "comma":
      case "separator":
        return (b, D, g) => {
          const c = typeof D == "string" && D.includes(w.arrayFormatSeparator), y = typeof D == "string" && !c && f(D, w).includes(w.arrayFormatSeparator);
          D = y ? f(D, w) : D;
          const R = c || y ? D.split(w.arrayFormatSeparator).map((N) => f(N, w)) : D === null ? D : f(D, w);
          g[b] = R;
        };
      case "bracket-separator":
        return (b, D, g) => {
          const c = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !c) {
            g[b] = D && f(D, w);
            return;
          }
          const y = D === null ? [] : D.split(w.arrayFormatSeparator).map((R) => f(R, w));
          if (g[b] === void 0) {
            g[b] = y;
            return;
          }
          g[b] = [].concat(g[b], y);
        };
      default:
        return (b, D, g) => {
          if (g[b] === void 0) {
            g[b] = D;
            return;
          }
          g[b] = [].concat(g[b], D);
        };
    }
  }
  function u(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(w, x) {
    return x.encode ? x.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function f(w, x) {
    return x.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((x, b) => Number(x) - Number(b)).map((x) => w[x]) : w;
  }
  function m(w) {
    const x = w.indexOf("#");
    return x !== -1 && (w = w.slice(0, x)), w;
  }
  function v(w) {
    let x = "";
    const b = w.indexOf("#");
    return b !== -1 && (x = w.slice(b)), x;
  }
  function E(w) {
    w = m(w);
    const x = w.indexOf("?");
    return x === -1 ? "" : w.slice(x + 1);
  }
  function S(w, x) {
    return x.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : x.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function A(w, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), u(x.arrayFormatSeparator);
    const b = l(x), D = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return D;
    for (const g of w.split("&")) {
      if (g === "")
        continue;
      let [c, y] = n(x.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? y : f(y, x), b(f(c, x), y, D);
    }
    for (const g of Object.keys(D)) {
      const c = D[g];
      if (typeof c == "object" && c !== null)
        for (const y of Object.keys(c))
          c[y] = S(c[y], x);
      else
        D[g] = S(c, x);
    }
    return x.sort === !1 ? D : (x.sort === !0 ? Object.keys(D).sort() : Object.keys(D).sort(x.sort)).reduce((g, c) => {
      const y = D[c];
      return y && typeof y == "object" && !Array.isArray(y) ? g[c] = p(y) : g[c] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = A, t.stringify = (w, x) => {
    if (!w)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), u(x.arrayFormatSeparator);
    const b = (y) => x.skipNull && i(w[y]) || x.skipEmptyString && w[y] === "", D = a(x), g = {};
    for (const y of Object.keys(w))
      b(y) || (g[y] = w[y]);
    const c = Object.keys(g);
    return x.sort !== !1 && c.sort(x.sort), c.map((y) => {
      const R = w[y];
      return R === void 0 ? "" : R === null ? h(y, x) : Array.isArray(R) ? R.length === 0 && x.arrayFormat === "bracket-separator" ? h(y, x) + "[]" : R.reduce(D(y), []).join("&") : h(y, x) + "=" + h(R, x);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (w, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [b, D] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: A(E(w), x)
      },
      x && x.parseFragmentIdentifier && D ? { fragmentIdentifier: f(D, x) } : {}
    );
  }, t.stringifyUrl = (w, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, x);
    const b = m(w.url).split("?")[0] || "", D = t.extract(w.url), g = t.parse(D, { sort: !1 }), c = Object.assign(g, w.query);
    let y = t.stringify(c, x);
    y && (y = `?${y}`);
    let R = v(w.url);
    return w.fragmentIdentifier && (R = `#${x[o] ? h(w.fragmentIdentifier, x) : w.fragmentIdentifier}`), `${b}${y}${R}`;
  }, t.pick = (w, x, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, b);
    const { url: D, query: g, fragmentIdentifier: c } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: D,
      query: s(g, x),
      fragmentIdentifier: c
    }, b);
  }, t.exclude = (w, x, b) => {
    const D = Array.isArray(x) ? (g) => !x.includes(g) : (g, c) => !x(g, c);
    return t.pick(w, D, b);
  };
})(cs);
const am = {
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
function Nl(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Ll = "base10", kt = "base16", Oa = "base64pad", ao = "utf8", Fl = 0, bn = 1, om = 0, Nc = 1, Ia = 12, oo = 32;
function cm() {
  const t = no.generateKeyPair();
  return { privateKey: qt(t.secretKey, kt), publicKey: qt(t.publicKey, kt) };
}
function Ca() {
  const t = Un.randomBytes(oo);
  return qt(t, kt);
}
function um(t, e) {
  const r = no.sharedKey(Wt(t, kt), Wt(e, kt), !0), n = new Ry(Ai.SHA256, r).expand(oo);
  return qt(n, kt);
}
function lm(t) {
  const e = Ai.hash(Wt(t, kt));
  return qt(e, kt);
}
function Rn(t) {
  const e = Ai.hash(Wt(t, ao));
  return qt(e, kt);
}
function hm(t) {
  return Wt(`${t}`, Ll);
}
function Cs(t) {
  return Number(qt(t, Ll));
}
function dm(t) {
  const e = hm(typeof t.type < "u" ? t.type : Fl);
  if (Cs(e) === bn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Wt(t.senderPublicKey, kt) : void 0, n = typeof t.iv < "u" ? Wt(t.iv, kt) : Un.randomBytes(Ia), s = new to.ChaCha20Poly1305(Wt(t.symKey, kt)).seal(n, Wt(t.message, ao));
  return pm({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function fm(t) {
  const e = new to.ChaCha20Poly1305(Wt(t.symKey, kt)), { sealed: r, iv: n } = ui(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return qt(s, ao);
}
function pm(t) {
  if (Cs(t.type) === bn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return qt(Sa([t.type, t.senderPublicKey, t.iv, t.sealed]), Oa);
  }
  return qt(Sa([t.type, t.iv, t.sealed]), Oa);
}
function ui(t) {
  const e = Wt(t, Oa), r = e.slice(om, Nc), n = Nc;
  if (Cs(r) === bn) {
    const a = n + oo, l = a + Ia, u = e.slice(n, a), h = e.slice(a, l), f = e.slice(l);
    return { type: r, sealed: f, iv: h, senderPublicKey: u };
  }
  const s = n + Ia, i = e.slice(n, s), o = e.slice(s);
  return { type: r, sealed: o, iv: i };
}
function gm(t, e) {
  const r = ui(t);
  return Ml({ type: Cs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? qt(r.senderPublicKey, kt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Ml(t) {
  const e = (t == null ? void 0 : t.type) || Fl;
  if (e === bn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Lc(t) {
  return t.type === bn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var ym = Object.defineProperty, Fc = Object.getOwnPropertySymbols, mm = Object.prototype.hasOwnProperty, vm = Object.prototype.propertyIsEnumerable, Mc = (t, e, r) => e in t ? ym(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uc = (t, e) => {
  for (var r in e || (e = {}))
    mm.call(e, r) && Mc(t, r, e[r]);
  if (Fc)
    for (var r of Fc(e))
      vm.call(e, r) && Mc(t, r, e[r]);
  return t;
};
const bm = "ReactNative", Zt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, wm = "js";
function co() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function $n() {
  return !Rl() && !!so() && navigator.product === bm;
}
function kn() {
  return !co() && !!so();
}
function Rs() {
  return $n() ? Zt.reactNative : co() ? Zt.node : kn() ? Zt.browser : Zt.unknown;
}
function _m() {
  var t;
  try {
    return $n() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function Em(t, e) {
  let r = cs.parse(t);
  return r = Uc(Uc({}, r), e), t = cs.stringify(r), t;
}
function Sm() {
  return Pl() || { name: "", description: "", url: "", icons: [""] };
}
function Dm() {
  if (Rs() === Zt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = jy();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function xm() {
  var t;
  const e = Rs();
  return e === Zt.browser ? [e, ((t = Tl()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Om(t, e, r) {
  const n = Dm(), s = xm();
  return [[t, e].join("-"), [wm, r].join("-"), n, s].join("/");
}
function Im({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: o, bundleId: a }) {
  const l = r.split("?"), u = Om(t, e, n), h = { auth: s, ua: u, projectId: i, useOnCloseEvent: o || void 0, origin: a || void 0 }, f = Em(l[1] || "", h);
  return l[0] + "?" + f;
}
function cn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Ul(t) {
  return Object.fromEntries(t.entries());
}
function jl(t) {
  return new Map(Object.entries(t));
}
function Sn(t = se.FIVE_MINUTES, e) {
  const r = se.toMiliseconds(t || se.FIVE_MINUTES);
  let n, s, i;
  return { resolve: (o) => {
    i && n && (clearTimeout(i), n(o));
  }, reject: (o) => {
    i && s && (clearTimeout(i), s(o));
  }, done: () => new Promise((o, a) => {
    i = setTimeout(() => {
      a(new Error(e));
    }, r), n = o, s = a;
  }) };
}
function us(t, e, r) {
  return new Promise(async (n, s) => {
    const i = setTimeout(() => s(new Error(r)), e);
    try {
      const o = await t;
      n(o);
    } catch (o) {
      s(o);
    }
    clearTimeout(i);
  });
}
function $l(t, e) {
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
function Cm(t) {
  return $l("topic", t);
}
function Rm(t) {
  return $l("id", t);
}
function kl(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function or(t, e) {
  return se.fromMiliseconds((e || Date.now()) + se.toMiliseconds(t));
}
function qr(t) {
  return Date.now() >= se.toMiliseconds(t);
}
function gt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Tm({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, o = Rs();
    o === Zt.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : o === Zt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function Pm(t, e) {
  try {
    return await t.getItem(e) || (kn() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const Am = "irn";
function Ra(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Am };
}
function ri(t) {
  const e = am[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Nm = Object.defineProperty, jc = Object.getOwnPropertySymbols, Lm = Object.prototype.hasOwnProperty, Fm = Object.prototype.propertyIsEnumerable, $c = (t, e, r) => e in t ? Nm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mm = (t, e) => {
  for (var r in e || (e = {}))
    Lm.call(e, r) && $c(t, r, e[r]);
  if (jc)
    for (var r of jc(e))
      Fm.call(e, r) && $c(t, r, e[r]);
  return t;
};
function Um(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), o = t[s];
      r[i] = o;
    }
  }), r;
}
function kc(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", o = cs.parse(i);
  return { protocol: n, topic: jm(s[0]), version: parseInt(s[1], 10), symKey: o.symKey, relay: Um(o) };
}
function jm(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function $m(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function km(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + cs.stringify(Mm({ symKey: t.symKey }, $m(t.relay)));
}
function qn(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function qm(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...qn(r.accounts));
  }), e;
}
function zm(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    qn(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function Bm(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    qn(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function Vm(t, e) {
  const r = ni(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [s, i] of Object.entries(t))
    n[s] = { methods: i.methods, events: i.events, chains: i.accounts.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`) };
  return n;
}
const Km = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Wm = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(t, e) {
  const { message: r, code: n } = Wm[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function yt(t, e) {
  const { message: r, code: n } = Km[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Ts(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function is(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function jt(t) {
  return typeof t > "u";
}
function Et(t, e) {
  return e && jt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function uo(t, e) {
  return e && jt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Hm(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return cn(s, n) ? (n.forEach((o) => {
    const { accounts: a, methods: l, events: u } = t.namespaces[o], h = qn(a), f = r[o];
    (!cn(Nl(o, f), h) || !cn(f.methods, l) || !cn(f.events, u)) && (i = !1);
  }), i) : !1;
}
function li(t) {
  return Et(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Gm(t) {
  if (Et(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && li(r);
    }
  }
  return !1;
}
function Zm(t) {
  if (Et(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Qm(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Ym(t) {
  return t == null ? void 0 : t.topic;
}
function Jm(t, e) {
  let r = null;
  return Et(t == null ? void 0 : t.publicKey, !1) || (r = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function qc(t) {
  let e = !0;
  return Ts(t) ? t.length && (e = t.every((r) => Et(r, !1))) : e = !1, e;
}
function Xm(t, e, r) {
  let n = null;
  return Ts(e) && e.length ? e.forEach((s) => {
    n || li(s) || (n = yt("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : li(t) || (n = yt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function ev(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const o = Xm(s, Nl(s, i), `${e} ${r}`);
    o && (n = o);
  }), n;
}
function tv(t, e) {
  let r = null;
  return Ts(t) ? t.forEach((n) => {
    r || Gm(n) || (r = yt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = yt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function rv(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = tv(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function nv(t, e) {
  let r = null;
  return qc(t == null ? void 0 : t.methods) ? qc(t == null ? void 0 : t.events) || (r = yt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = yt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function ql(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = nv(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function sv(t, e, r) {
  let n = null;
  if (t && is(t)) {
    const s = ql(t, e);
    s && (n = s);
    const i = ev(t, e, r);
    i && (n = i);
  } else
    n = Y("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function ni(t, e) {
  let r = null;
  if (t && is(t)) {
    const n = ql(t, e);
    n && (r = n);
    const s = rv(t, e);
    s && (r = s);
  } else
    r = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function zl(t) {
  return Et(t.protocol, !0);
}
function iv(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Ts(t) && t.length && t.forEach((n) => {
    r = zl(n);
  }), r;
}
function av(t) {
  return typeof t == "number";
}
function Kt(t) {
  return typeof t < "u" && typeof t !== null;
}
function ov(t) {
  return !(!t || typeof t != "object" || !t.code || !uo(t.code, !1) || !t.message || !Et(t.message, !1));
}
function cv(t) {
  return !(jt(t) || !Et(t.method, !1));
}
function uv(t) {
  return !(jt(t) || jt(t.result) && jt(t.error) || !uo(t.id, !1) || !Et(t.jsonrpc, !1));
}
function lv(t) {
  return !(jt(t) || !Et(t.name, !1));
}
function zc(t, e) {
  return !(!li(e) || !qm(t).includes(e));
}
function hv(t, e, r) {
  return Et(r, !1) ? zm(t, e).includes(r) : !1;
}
function dv(t, e, r) {
  return Et(r, !1) ? Bm(t, e).includes(r) : !1;
}
function Bc(t, e, r) {
  let n = null;
  const s = fv(t), i = pv(e), o = Object.keys(s), a = Object.keys(i), l = Vc(Object.keys(t)), u = Vc(Object.keys(e)), h = l.filter((f) => !u.includes(f));
  return h.length && (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(e).toString()}`)), cn(o, a) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = qn(e[f].accounts);
    p.includes(f) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), o.forEach((f) => {
    n || (cn(s[f].methods, i[f].methods) ? cn(s[f].events, i[f].events) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function fv(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Vc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function pv(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = qn(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function gv(t, e) {
  return uo(t, !1) && t <= e.max && t >= e.min;
}
function Kc() {
  const t = Rs();
  return new Promise((e) => {
    switch (t) {
      case Zt.browser:
        e(yv());
        break;
      case Zt.reactNative:
        e(mv());
        break;
      case Zt.node:
        e(vv());
        break;
      default:
        e(!0);
    }
  });
}
function yv() {
  return kn() && (navigator == null ? void 0 : navigator.onLine);
}
async function mv() {
  if ($n() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function vv() {
  return !0;
}
function bv(t) {
  switch (Rs()) {
    case Zt.browser:
      wv(t);
      break;
    case Zt.reactNative:
      _v(t);
      break;
  }
}
function wv(t) {
  !$n() && kn() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function _v(t) {
  $n() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const ea = {};
let Zs = class {
  static get(e) {
    return ea[e];
  }
  static set(e, r) {
    ea[e] = r;
  }
  static delete(e) {
    delete ea[e];
  }
};
const Ev = "PARSE_ERROR", Sv = "INVALID_REQUEST", Dv = "METHOD_NOT_FOUND", xv = "INVALID_PARAMS", Bl = "INTERNAL_ERROR", lo = "SERVER_ERROR", Ov = [-32700, -32600, -32601, -32602, -32603], as = {
  [Ev]: { code: -32700, message: "Parse error" },
  [Sv]: { code: -32600, message: "Invalid Request" },
  [Dv]: { code: -32601, message: "Method not found" },
  [xv]: { code: -32602, message: "Invalid params" },
  [Bl]: { code: -32603, message: "Internal error" },
  [lo]: { code: -32e3, message: "Server error" }
}, Vl = lo;
function Iv(t) {
  return Ov.includes(t);
}
function Wc(t) {
  return Object.keys(as).includes(t) ? as[t] : as[Vl];
}
function Cv(t) {
  const e = Object.values(as).find((r) => r.code === t);
  return e || as[Vl];
}
function Rv(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Kl = {}, Cr = {}, Hc;
function Tv() {
  if (Hc)
    return Cr;
  Hc = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.isBrowserCryptoAvailable = Cr.getSubtleCrypto = Cr.getBrowerCrypto = void 0;
  function t() {
    return (Sr == null ? void 0 : Sr.crypto) || (Sr == null ? void 0 : Sr.msCrypto) || {};
  }
  Cr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  Cr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Cr.isBrowserCryptoAvailable = r, Cr;
}
var Rr = {}, Gc;
function Pv() {
  if (Gc)
    return Rr;
  Gc = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.isBrowser = Rr.isNode = Rr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Rr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Rr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Rr.isBrowser = r, Rr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Or;
  e.__exportStar(Tv(), t), e.__exportStar(Pv(), t);
})(Kl);
function ho(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Wl(t = 6) {
  return BigInt(ho(t));
}
function Tn(t, e, r) {
  return {
    id: r || ho(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function fo(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function po(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Av(e, r)
  };
}
function Av(t, e) {
  return typeof t > "u" ? Wc(Bl) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Wc(lo)), { message: t })), typeof e < "u" && (t.data = e), Iv(t.code) && (t = Cv(t.code)), t);
}
class Nv {
}
class Lv extends Nv {
  constructor() {
    super();
  }
}
class Fv extends Lv {
  constructor(e) {
    super();
  }
}
const Mv = "^wss?:";
function Uv(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function jv(t, e) {
  const r = Uv(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Zc(t) {
  return jv(t, Mv);
}
function $v(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Hl(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function go(t) {
  return Hl(t) && "method" in t;
}
function Ni(t) {
  return Hl(t) && (Ar(t) || cr(t));
}
function Ar(t) {
  return "result" in t;
}
function cr(t) {
  return "error" in t;
}
class kv extends Fv {
  constructor(e) {
    super(e), this.events = new nr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Tn(e.method, e.params || [], e.id || Wl().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (n, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (i) {
          s(i);
        }
      this.events.on(`${e.id}`, (i) => {
        cr(i) ? s(i.error) : n(i.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (i) {
        s(i);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Ni(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const qv = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), zv = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Qc = (t) => t.split("?")[0], Yc = 10, Bv = qv();
class Vv {
  constructor(e) {
    if (this.url = e, this.events = new nr.EventEmitter(), this.registering = !1, !Zc(e))
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
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(xs(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Zc(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, s) => {
        this.events.once("register_error", (i) => {
          this.resetMaxListeners(), s(i);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return s(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, n) => {
      const s = new URLSearchParams(e).get("origin"), i = Kl.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !$v(e) }, o = new Bv(e, [], i);
      zv() ? o.onerror = (a) => {
        const l = a;
        n(this.emitError(l.error));
      } : o.on("error", (a) => {
        n(this.emitError(a));
      }), o.onopen = () => {
        this.onOpen(o), r(o);
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
    const r = typeof e.data == "string" ? Oi(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = po(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return Rv(e, Qc(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Yc && this.events.setMaxListeners(Yc);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Qc(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var hi = { exports: {} };
hi.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", h = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", E = "[object Map]", S = "[object Number]", A = "[object Null]", w = "[object Object]", x = "[object Promise]", b = "[object Proxy]", D = "[object RegExp]", g = "[object Set]", c = "[object String]", y = "[object Symbol]", R = "[object Undefined]", N = "[object WeakMap]", U = "[object ArrayBuffer]", V = "[object DataView]", G = "[object Float32Array]", C = "[object Float64Array]", L = "[object Int8Array]", Z = "[object Int16Array]", B = "[object Int32Array]", k = "[object Uint8Array]", z = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", K = "[object Uint32Array]", he = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, oe = /^(?:0|[1-9]\d*)$/, te = {};
  te[G] = te[C] = te[L] = te[Z] = te[B] = te[k] = te[z] = te[$] = te[K] = !0, te[a] = te[l] = te[U] = te[h] = te[V] = te[f] = te[p] = te[m] = te[E] = te[S] = te[w] = te[D] = te[g] = te[c] = te[N] = !1;
  var ae = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, M = typeof self == "object" && self && self.Object === Object && self, F = ae || M || Function("return this")(), T = e && !e.nodeType && e, d = T && !0 && t && !t.nodeType && t, I = d && d.exports === T, Q = I && ae.process, X = function() {
    try {
      return Q && Q.binding && Q.binding("util");
    } catch {
    }
  }(), xe = X && X.isTypedArray;
  function Oe(_, P) {
    for (var q = -1, ne = _ == null ? 0 : _.length, Ge = 0, me = []; ++q < ne; ) {
      var ot = _[q];
      P(ot, q, _) && (me[Ge++] = ot);
    }
    return me;
  }
  function be(_, P) {
    for (var q = -1, ne = P.length, Ge = _.length; ++q < ne; )
      _[Ge + q] = P[q];
    return _;
  }
  function Le(_, P) {
    for (var q = -1, ne = _ == null ? 0 : _.length; ++q < ne; )
      if (P(_[q], q, _))
        return !0;
    return !1;
  }
  function Ze(_, P) {
    for (var q = -1, ne = Array(_); ++q < _; )
      ne[q] = P(q);
    return ne;
  }
  function Be(_) {
    return function(P) {
      return _(P);
    };
  }
  function Ae(_, P) {
    return _.has(P);
  }
  function Re(_, P) {
    return _ == null ? void 0 : _[P];
  }
  function we(_) {
    var P = -1, q = Array(_.size);
    return _.forEach(function(ne, Ge) {
      q[++P] = [Ge, ne];
    }), q;
  }
  function Ee(_, P) {
    return function(q) {
      return _(P(q));
    };
  }
  function _e(_) {
    var P = -1, q = Array(_.size);
    return _.forEach(function(ne) {
      q[++P] = ne;
    }), q;
  }
  var ge = Array.prototype, pe = Function.prototype, ce = Object.prototype, Se = F["__core-js_shared__"], Ie = pe.toString, de = ce.hasOwnProperty, Te = function() {
    var _ = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Fe = ce.toString, $e = RegExp(
    "^" + Ie.call(de).replace(he, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ke = I ? F.Buffer : void 0, Me = F.Symbol, Ht = F.Uint8Array, Yt = ce.propertyIsEnumerable, mr = ge.splice, St = Me ? Me.toStringTag : void 0, vr = Object.getOwnPropertySymbols, Jt = ke ? ke.isBuffer : void 0, Fr = Ee(Object.keys, Object), Qe = wn(F, "DataView"), We = wn(F, "Map"), nt = wn(F, "Promise"), Xe = wn(F, "Set"), st = wn(F, "WeakMap"), He = wn(Object, "create"), ct = Yr(Qe), ht = Yr(We), dt = Yr(nt), ut = Yr(Xe), ft = Yr(st), lt = Me ? Me.prototype : void 0, it = lt ? lt.valueOf : void 0;
  function Ve(_) {
    var P = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++P < q; ) {
      var ne = _[P];
      this.set(ne[0], ne[1]);
    }
  }
  function O() {
    this.__data__ = He ? He(null) : {}, this.size = 0;
  }
  function j(_) {
    var P = this.has(_) && delete this.__data__[_];
    return this.size -= P ? 1 : 0, P;
  }
  function J(_) {
    var P = this.__data__;
    if (He) {
      var q = P[_];
      return q === n ? void 0 : q;
    }
    return de.call(P, _) ? P[_] : void 0;
  }
  function ue(_) {
    var P = this.__data__;
    return He ? P[_] !== void 0 : de.call(P, _);
  }
  function Ue(_, P) {
    var q = this.__data__;
    return this.size += this.has(_) ? 0 : 1, q[_] = He && P === void 0 ? n : P, this;
  }
  Ve.prototype.clear = O, Ve.prototype.delete = j, Ve.prototype.get = J, Ve.prototype.has = ue, Ve.prototype.set = Ue;
  function Pe(_) {
    var P = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++P < q; ) {
      var ne = _[P];
      this.set(ne[0], ne[1]);
    }
  }
  function Ne() {
    this.__data__ = [], this.size = 0;
  }
  function Ce(_) {
    var P = this.__data__, q = $s(P, _);
    if (q < 0)
      return !1;
    var ne = P.length - 1;
    return q == ne ? P.pop() : mr.call(P, q, 1), --this.size, !0;
  }
  function Dt(_) {
    var P = this.__data__, q = $s(P, _);
    return q < 0 ? void 0 : P[q][1];
  }
  function et(_) {
    return $s(this.__data__, _) > -1;
  }
  function at(_, P) {
    var q = this.__data__, ne = $s(q, _);
    return ne < 0 ? (++this.size, q.push([_, P])) : q[ne][1] = P, this;
  }
  Pe.prototype.clear = Ne, Pe.prototype.delete = Ce, Pe.prototype.get = Dt, Pe.prototype.has = et, Pe.prototype.set = at;
  function pt(_) {
    var P = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++P < q; ) {
      var ne = _[P];
      this.set(ne[0], ne[1]);
    }
  }
  function Mr() {
    this.size = 0, this.__data__ = {
      hash: new Ve(),
      map: new (We || Pe)(),
      string: new Ve()
    };
  }
  function Us(_) {
    var P = ks(this, _).delete(_);
    return this.size -= P ? 1 : 0, P;
  }
  function sr(_) {
    return ks(this, _).get(_);
  }
  function Nh(_) {
    return ks(this, _).has(_);
  }
  function Lh(_, P) {
    var q = ks(this, _), ne = q.size;
    return q.set(_, P), this.size += q.size == ne ? 0 : 1, this;
  }
  pt.prototype.clear = Mr, pt.prototype.delete = Us, pt.prototype.get = sr, pt.prototype.has = Nh, pt.prototype.set = Lh;
  function js(_) {
    var P = -1, q = _ == null ? 0 : _.length;
    for (this.__data__ = new pt(); ++P < q; )
      this.add(_[P]);
  }
  function Fh(_) {
    return this.__data__.set(_, n), this;
  }
  function Mh(_) {
    return this.__data__.has(_);
  }
  js.prototype.add = js.prototype.push = Fh, js.prototype.has = Mh;
  function Ur(_) {
    var P = this.__data__ = new Pe(_);
    this.size = P.size;
  }
  function Uh() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function jh(_) {
    var P = this.__data__, q = P.delete(_);
    return this.size = P.size, q;
  }
  function $h(_) {
    return this.__data__.get(_);
  }
  function kh(_) {
    return this.__data__.has(_);
  }
  function qh(_, P) {
    var q = this.__data__;
    if (q instanceof Pe) {
      var ne = q.__data__;
      if (!We || ne.length < r - 1)
        return ne.push([_, P]), this.size = ++q.size, this;
      q = this.__data__ = new pt(ne);
    }
    return q.set(_, P), this.size = q.size, this;
  }
  Ur.prototype.clear = Uh, Ur.prototype.delete = jh, Ur.prototype.get = $h, Ur.prototype.has = kh, Ur.prototype.set = qh;
  function zh(_, P) {
    var q = qs(_), ne = !q && nd(_), Ge = !q && !ne && ki(_), me = !q && !ne && !Ge && Uo(_), ot = q || ne || Ge || me, vt = ot ? Ze(_.length, String) : [], xt = vt.length;
    for (var tt in _)
      (P || de.call(_, tt)) && !(ot && // Safari 9 has enumerable `arguments.length` in strict mode.
      (tt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ge && (tt == "offset" || tt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      me && (tt == "buffer" || tt == "byteLength" || tt == "byteOffset") || // Skip index properties.
      Jh(tt, xt))) && vt.push(tt);
    return vt;
  }
  function $s(_, P) {
    for (var q = _.length; q--; )
      if (No(_[q][0], P))
        return q;
    return -1;
  }
  function Bh(_, P, q) {
    var ne = P(_);
    return qs(_) ? ne : be(ne, q(_));
  }
  function zn(_) {
    return _ == null ? _ === void 0 ? R : A : St && St in Object(_) ? Qh(_) : rd(_);
  }
  function Ro(_) {
    return Bn(_) && zn(_) == a;
  }
  function To(_, P, q, ne, Ge) {
    return _ === P ? !0 : _ == null || P == null || !Bn(_) && !Bn(P) ? _ !== _ && P !== P : Vh(_, P, q, ne, To, Ge);
  }
  function Vh(_, P, q, ne, Ge, me) {
    var ot = qs(_), vt = qs(P), xt = ot ? l : jr(_), tt = vt ? l : jr(P);
    xt = xt == a ? w : xt, tt = tt == a ? w : tt;
    var Gt = xt == w, ir = tt == w, Ct = xt == tt;
    if (Ct && ki(_)) {
      if (!ki(P))
        return !1;
      ot = !0, Gt = !1;
    }
    if (Ct && !Gt)
      return me || (me = new Ur()), ot || Uo(_) ? Po(_, P, q, ne, Ge, me) : Gh(_, P, xt, q, ne, Ge, me);
    if (!(q & s)) {
      var Xt = Gt && de.call(_, "__wrapped__"), er = ir && de.call(P, "__wrapped__");
      if (Xt || er) {
        var $r = Xt ? _.value() : _, Ir = er ? P.value() : P;
        return me || (me = new Ur()), Ge($r, Ir, q, ne, me);
      }
    }
    return Ct ? (me || (me = new Ur()), Zh(_, P, q, ne, Ge, me)) : !1;
  }
  function Kh(_) {
    if (!Mo(_) || ed(_))
      return !1;
    var P = Lo(_) ? $e : W;
    return P.test(Yr(_));
  }
  function Wh(_) {
    return Bn(_) && Fo(_.length) && !!te[zn(_)];
  }
  function Hh(_) {
    if (!td(_))
      return Fr(_);
    var P = [];
    for (var q in Object(_))
      de.call(_, q) && q != "constructor" && P.push(q);
    return P;
  }
  function Po(_, P, q, ne, Ge, me) {
    var ot = q & s, vt = _.length, xt = P.length;
    if (vt != xt && !(ot && xt > vt))
      return !1;
    var tt = me.get(_);
    if (tt && me.get(P))
      return tt == P;
    var Gt = -1, ir = !0, Ct = q & i ? new js() : void 0;
    for (me.set(_, P), me.set(P, _); ++Gt < vt; ) {
      var Xt = _[Gt], er = P[Gt];
      if (ne)
        var $r = ot ? ne(er, Xt, Gt, P, _, me) : ne(Xt, er, Gt, _, P, me);
      if ($r !== void 0) {
        if ($r)
          continue;
        ir = !1;
        break;
      }
      if (Ct) {
        if (!Le(P, function(Ir, Jr) {
          if (!Ae(Ct, Jr) && (Xt === Ir || Ge(Xt, Ir, q, ne, me)))
            return Ct.push(Jr);
        })) {
          ir = !1;
          break;
        }
      } else if (!(Xt === er || Ge(Xt, er, q, ne, me))) {
        ir = !1;
        break;
      }
    }
    return me.delete(_), me.delete(P), ir;
  }
  function Gh(_, P, q, ne, Ge, me, ot) {
    switch (q) {
      case V:
        if (_.byteLength != P.byteLength || _.byteOffset != P.byteOffset)
          return !1;
        _ = _.buffer, P = P.buffer;
      case U:
        return !(_.byteLength != P.byteLength || !me(new Ht(_), new Ht(P)));
      case h:
      case f:
      case S:
        return No(+_, +P);
      case p:
        return _.name == P.name && _.message == P.message;
      case D:
      case c:
        return _ == P + "";
      case E:
        var vt = we;
      case g:
        var xt = ne & s;
        if (vt || (vt = _e), _.size != P.size && !xt)
          return !1;
        var tt = ot.get(_);
        if (tt)
          return tt == P;
        ne |= i, ot.set(_, P);
        var Gt = Po(vt(_), vt(P), ne, Ge, me, ot);
        return ot.delete(_), Gt;
      case y:
        if (it)
          return it.call(_) == it.call(P);
    }
    return !1;
  }
  function Zh(_, P, q, ne, Ge, me) {
    var ot = q & s, vt = Ao(_), xt = vt.length, tt = Ao(P), Gt = tt.length;
    if (xt != Gt && !ot)
      return !1;
    for (var ir = xt; ir--; ) {
      var Ct = vt[ir];
      if (!(ot ? Ct in P : de.call(P, Ct)))
        return !1;
    }
    var Xt = me.get(_);
    if (Xt && me.get(P))
      return Xt == P;
    var er = !0;
    me.set(_, P), me.set(P, _);
    for (var $r = ot; ++ir < xt; ) {
      Ct = vt[ir];
      var Ir = _[Ct], Jr = P[Ct];
      if (ne)
        var jo = ot ? ne(Jr, Ir, Ct, P, _, me) : ne(Ir, Jr, Ct, _, P, me);
      if (!(jo === void 0 ? Ir === Jr || Ge(Ir, Jr, q, ne, me) : jo)) {
        er = !1;
        break;
      }
      $r || ($r = Ct == "constructor");
    }
    if (er && !$r) {
      var zs = _.constructor, Bs = P.constructor;
      zs != Bs && "constructor" in _ && "constructor" in P && !(typeof zs == "function" && zs instanceof zs && typeof Bs == "function" && Bs instanceof Bs) && (er = !1);
    }
    return me.delete(_), me.delete(P), er;
  }
  function Ao(_) {
    return Bh(_, ad, Yh);
  }
  function ks(_, P) {
    var q = _.__data__;
    return Xh(P) ? q[typeof P == "string" ? "string" : "hash"] : q.map;
  }
  function wn(_, P) {
    var q = Re(_, P);
    return Kh(q) ? q : void 0;
  }
  function Qh(_) {
    var P = de.call(_, St), q = _[St];
    try {
      _[St] = void 0;
      var ne = !0;
    } catch {
    }
    var Ge = Fe.call(_);
    return ne && (P ? _[St] = q : delete _[St]), Ge;
  }
  var Yh = vr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Oe(vr(_), function(P) {
      return Yt.call(_, P);
    }));
  } : od, jr = zn;
  (Qe && jr(new Qe(new ArrayBuffer(1))) != V || We && jr(new We()) != E || nt && jr(nt.resolve()) != x || Xe && jr(new Xe()) != g || st && jr(new st()) != N) && (jr = function(_) {
    var P = zn(_), q = P == w ? _.constructor : void 0, ne = q ? Yr(q) : "";
    if (ne)
      switch (ne) {
        case ct:
          return V;
        case ht:
          return E;
        case dt:
          return x;
        case ut:
          return g;
        case ft:
          return N;
      }
    return P;
  });
  function Jh(_, P) {
    return P = P ?? o, !!P && (typeof _ == "number" || oe.test(_)) && _ > -1 && _ % 1 == 0 && _ < P;
  }
  function Xh(_) {
    var P = typeof _;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function ed(_) {
    return !!Te && Te in _;
  }
  function td(_) {
    var P = _ && _.constructor, q = typeof P == "function" && P.prototype || ce;
    return _ === q;
  }
  function rd(_) {
    return Fe.call(_);
  }
  function Yr(_) {
    if (_ != null) {
      try {
        return Ie.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function No(_, P) {
    return _ === P || _ !== _ && P !== P;
  }
  var nd = Ro(function() {
    return arguments;
  }()) ? Ro : function(_) {
    return Bn(_) && de.call(_, "callee") && !Yt.call(_, "callee");
  }, qs = Array.isArray;
  function sd(_) {
    return _ != null && Fo(_.length) && !Lo(_);
  }
  var ki = Jt || cd;
  function id(_, P) {
    return To(_, P);
  }
  function Lo(_) {
    if (!Mo(_))
      return !1;
    var P = zn(_);
    return P == m || P == v || P == u || P == b;
  }
  function Fo(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= o;
  }
  function Mo(_) {
    var P = typeof _;
    return _ != null && (P == "object" || P == "function");
  }
  function Bn(_) {
    return _ != null && typeof _ == "object";
  }
  var Uo = xe ? Be(xe) : Wh;
  function ad(_) {
    return sd(_) ? zh(_) : Hh(_);
  }
  function od() {
    return [];
  }
  function cd() {
    return !1;
  }
  t.exports = id;
})(hi, hi.exports);
var Kv = hi.exports;
const Wv = /* @__PURE__ */ Di(Kv);
function Hv(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), o = i.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[o] = s;
  }
  var a = t.length, l = t.charAt(0), u = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, A = 0, w = v.length; A !== w && v[A] === 0; )
      A++, E++;
    for (var x = (w - A) * h + 1 >>> 0, b = new Uint8Array(x); A !== w; ) {
      for (var D = v[A], g = 0, c = x - 1; (D !== 0 || g < S) && c !== -1; c--, g++)
        D += 256 * b[c] >>> 0, b[c] = D % a >>> 0, D = D / a >>> 0;
      if (D !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = x - S; y !== x && b[y] === 0; )
      y++;
    for (var R = l.repeat(E); y < x; ++y)
      R += t.charAt(b[y]);
    return R;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, A = 0; v[E] === l; )
        S++, E++;
      for (var w = (v.length - E) * u + 1 >>> 0, x = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var D = 0, g = w - 1; (b !== 0 || D < A) && g !== -1; g--, D++)
          b += a * x[g] >>> 0, x[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = D, E++;
      }
      if (v[E] !== " ") {
        for (var c = w - A; c !== w && x[c] === 0; )
          c++;
        for (var y = new Uint8Array(S + (w - c)), R = S; c !== w; )
          y[R++] = x[c++];
        return y;
      }
    }
  }
  function m(v) {
    var E = p(v);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: p, decode: m };
}
var Gv = Hv, Zv = Gv;
const Gl = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Qv = (t) => new TextEncoder().encode(t), Yv = (t) => new TextDecoder().decode(t);
class Jv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Xv {
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
    return Zl(this, e);
  }
}
class e0 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Zl(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Zl = (t, e) => new e0({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class t0 {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Jv(e, r, n), this.decoder = new Xv(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Li = ({ name: t, prefix: e, encode: r, decode: n }) => new t0(t, e, r, n), Ps = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Zv(r, e);
  return Li({ prefix: t, name: e, encode: n, decode: (i) => Gl(s(i)) });
}, r0 = (t, e, r, n) => {
  const s = {};
  for (let h = 0; h < e.length; ++h)
    s[e[h]] = h;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, l = 0, u = 0;
  for (let h = 0; h < i; ++h) {
    const f = s[t[h]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | f, a += r, a >= 8 && (a -= 8, o[u++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, n0 = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, It = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Li({ prefix: e, name: t, encode(s) {
  return n0(s, n, r);
}, decode(s) {
  return r0(s, n, r, t);
} }), s0 = Li({ prefix: "\0", name: "identity", encode: (t) => Yv(t), decode: (t) => Qv(t) });
var i0 = Object.freeze({ __proto__: null, identity: s0 });
const a0 = It({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var o0 = Object.freeze({ __proto__: null, base2: a0 });
const c0 = It({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var u0 = Object.freeze({ __proto__: null, base8: c0 });
const l0 = Ps({ prefix: "9", name: "base10", alphabet: "0123456789" });
var h0 = Object.freeze({ __proto__: null, base10: l0 });
const d0 = It({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), f0 = It({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var p0 = Object.freeze({ __proto__: null, base16: d0, base16upper: f0 });
const g0 = It({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), y0 = It({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), m0 = It({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), v0 = It({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), b0 = It({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), w0 = It({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), _0 = It({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), E0 = It({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), S0 = It({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var D0 = Object.freeze({ __proto__: null, base32: g0, base32upper: y0, base32pad: m0, base32padupper: v0, base32hex: b0, base32hexupper: w0, base32hexpad: _0, base32hexpadupper: E0, base32z: S0 });
const x0 = Ps({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), O0 = Ps({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var I0 = Object.freeze({ __proto__: null, base36: x0, base36upper: O0 });
const C0 = Ps({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), R0 = Ps({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var T0 = Object.freeze({ __proto__: null, base58btc: C0, base58flickr: R0 });
const P0 = It({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), A0 = It({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), N0 = It({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), L0 = It({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var F0 = Object.freeze({ __proto__: null, base64: P0, base64pad: A0, base64url: N0, base64urlpad: L0 });
const Ql = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), M0 = Ql.reduce((t, e, r) => (t[r] = e, t), []), U0 = Ql.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function j0(t) {
  return t.reduce((e, r) => (e += M0[r], e), "");
}
function $0(t) {
  const e = [];
  for (const r of t) {
    const n = U0[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const k0 = Li({ prefix: "🚀", name: "base256emoji", encode: j0, decode: $0 });
var q0 = Object.freeze({ __proto__: null, base256emoji: k0 }), z0 = Yl, Jc = 128, B0 = 127, V0 = ~B0, K0 = Math.pow(2, 31);
function Yl(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= K0; )
    e[r++] = t & 255 | Jc, t /= 128;
  for (; t & V0; )
    e[r++] = t & 255 | Jc, t >>>= 7;
  return e[r] = t | 0, Yl.bytes = r - n + 1, e;
}
var W0 = Ta, H0 = 128, Xc = 127;
function Ta(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, o, a = t.length;
  do {
    if (i >= a)
      throw Ta.bytes = 0, new RangeError("Could not decode varint");
    o = t[i++], r += s < 28 ? (o & Xc) << s : (o & Xc) * Math.pow(2, s), s += 7;
  } while (o >= H0);
  return Ta.bytes = i - n, r;
}
var G0 = Math.pow(2, 7), Z0 = Math.pow(2, 14), Q0 = Math.pow(2, 21), Y0 = Math.pow(2, 28), J0 = Math.pow(2, 35), X0 = Math.pow(2, 42), eb = Math.pow(2, 49), tb = Math.pow(2, 56), rb = Math.pow(2, 63), nb = function(t) {
  return t < G0 ? 1 : t < Z0 ? 2 : t < Q0 ? 3 : t < Y0 ? 4 : t < J0 ? 5 : t < X0 ? 6 : t < eb ? 7 : t < tb ? 8 : t < rb ? 9 : 10;
}, sb = { encode: z0, decode: W0, encodingLength: nb }, Jl = sb;
const eu = (t, e, r = 0) => (Jl.encode(t, e, r), e), tu = (t) => Jl.encodingLength(t), Pa = (t, e) => {
  const r = e.byteLength, n = tu(t), s = n + tu(r), i = new Uint8Array(s + r);
  return eu(t, i, 0), eu(r, i, n), i.set(e, s), new ib(t, r, e, i);
};
class ib {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const Xl = ({ name: t, code: e, encode: r }) => new ab(t, e, r);
class ab {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Pa(this.code, r) : r.then((n) => Pa(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const eh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), ob = Xl({ name: "sha2-256", code: 18, encode: eh("SHA-256") }), cb = Xl({ name: "sha2-512", code: 19, encode: eh("SHA-512") });
var ub = Object.freeze({ __proto__: null, sha256: ob, sha512: cb });
const th = 0, lb = "identity", rh = Gl, hb = (t) => Pa(th, rh(t)), db = { code: th, name: lb, encode: rh, digest: hb };
var fb = Object.freeze({ __proto__: null, identity: db });
new TextEncoder(), new TextDecoder();
const ru = { ...i0, ...o0, ...u0, ...h0, ...p0, ...D0, ...I0, ...T0, ...F0, ...q0 };
({ ...ub, ...fb });
function nh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function pb(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? nh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function sh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const nu = sh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ta = sh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = pb(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), gb = { utf8: nu, "utf-8": nu, hex: ru.base16, latin1: ta, ascii: ta, binary: ta, ...ru };
function yb(t, e = "utf8") {
  const r = gb[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? nh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const ih = "wc", mb = 2, yo = "core", Vr = `${ih}@2:${yo}:`, vb = { name: yo, logger: "error" }, bb = { database: ":memory:" }, wb = "crypto", su = "client_ed25519_seed", _b = se.ONE_DAY, Eb = "keychain", Sb = "0.3", Db = "messages", xb = "0.3", Ob = se.SIX_HOURS, Ib = "publisher", ah = "irn", Cb = "error", oh = "wss://relay.walletconnect.com", iu = "wss://relay.walletconnect.org", Rb = "relayer", Lt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Tb = "_subscription", Tr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Pb = se.ONE_SECOND, Ab = "2.10.6", Nb = 1e4, Lb = "0.3", Fb = "WALLETCONNECT_CLIENT_ID", ar = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Mb = "subscription", Ub = "0.3", jb = se.FIVE_SECONDS * 1e3, $b = "pairing", kb = "0.3", Zn = { wc_pairingDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 0 } } }, ts = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Er = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, qb = "history", zb = "0.3", Bb = "expirer", tr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Vb = "0.3", ra = "verify-api", On = "https://verify.walletconnect.com", Aa = "https://verify.walletconnect.org", Kb = [On, Aa];
class Wb {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Eb, this.version = Sb, this.initialized = !1, this.storagePrefix = Vr, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, s) => {
      this.isInitialized(), this.keychain.set(n, s), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.keychain.get(n);
      if (typeof s > "u") {
        const { message: i } = Y("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(i);
      }
      return s;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = je.generateChildLogger(r, this.name);
  }
  get context() {
    return je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Ul(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? jl(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Hb {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = wb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Sc(s);
      return Sl(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = cm();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), o = Sc(i), a = Ca();
      return await yy(a, s, _b, o);
    }, this.generateSharedKey = (s, i, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), l = um(a, i);
      return this.setSymKey(l, o);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const o = i || lm(s);
      return await this.keychain.set(o, s), o;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, o) => {
      this.isInitialized();
      const a = Ml(o), l = xs(i);
      if (Lc(a)) {
        const p = a.senderPublicKey, m = a.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const u = this.getSymKey(s), { type: h, senderPublicKey: f } = a;
      return dm({ type: h, symKey: u, message: l, senderPublicKey: f });
    }, this.decode = async (s, i, o) => {
      this.isInitialized();
      const a = gm(i, o);
      if (Lc(a)) {
        const l = a.receiverPublicKey, u = a.senderPublicKey;
        s = await this.generateSharedKey(l, u);
      }
      try {
        const l = this.getSymKey(s), u = fm({ symKey: l, encoded: i });
        return Oi(u);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (s) => {
      const i = ui(s);
      return Cs(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = ui(s);
      return i.senderPublicKey ? qt(i.senderPublicKey, kt) : void 0;
    }, this.core = e, this.logger = je.generateChildLogger(r, this.name), this.keychain = n || new Wb(this.core, this.logger);
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
      e = this.keychain.get(su);
    } catch {
      e = Ca(), await this.keychain.set(su, e);
    }
    return yb(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Gb extends _p {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Db, this.version = xb, this.initialized = !1, this.storagePrefix = Vr, this.init = async () => {
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
    }, this.set = async (n, s) => {
      this.isInitialized();
      const i = Rn(s);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[i] < "u" || (o[i] = s, this.messages.set(n, o), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), o = Rn(s);
      return typeof i[o] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = je.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Ul(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? jl(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Zb extends Ep {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new nr.EventEmitter(), this.name = Ib, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = se.toMiliseconds(se.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const a = (i == null ? void 0 : i.ttl) || Ob, l = Ra(i), u = (i == null ? void 0 : i.prompt) || !1, h = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || Wl().toString(), p = { topic: n, message: s, opts: { ttl: a, relay: l, prompt: u, tag: h, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await us(this.rpcPublish(n, s, a, l, u, h, f), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(f), this.relayer.events.emit(Lt.publish, p);
        } catch (v) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (o = i == null ? void 0 : i.internal) != null && o.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), v;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.relayer = e, this.logger = je.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return je.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, o, a) {
    var l, u, h, f;
    const p = { method: ri(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: o }, id: a };
    return jt((l = p.params) == null ? void 0 : l.prompt) && ((u = p.params) == null || delete u.prompt), jt((h = p.params) == null ? void 0 : h.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: n, opts: s } = e;
      await this.publish(r, n, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Mn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Lt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Lt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Qb {
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
      const s = n.filter((i) => i !== r);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Yb = Object.defineProperty, Jb = Object.defineProperties, Xb = Object.getOwnPropertyDescriptors, au = Object.getOwnPropertySymbols, ew = Object.prototype.hasOwnProperty, tw = Object.prototype.propertyIsEnumerable, ou = (t, e, r) => e in t ? Yb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qn = (t, e) => {
  for (var r in e || (e = {}))
    ew.call(e, r) && ou(t, r, e[r]);
  if (au)
    for (var r of au(e))
      tw.call(e, r) && ou(t, r, e[r]);
  return t;
}, na = (t, e) => Jb(t, Xb(e));
class rw extends xp {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Qb(), this.events = new nr.EventEmitter(), this.name = Mb, this.version = Ub, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Vr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = Ra(s), o = { topic: n, relay: i };
        this.pending.set(n, o);
        const a = await this.rpcSubscribe(n, i);
        return this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), a;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((s, i) => {
      const o = new se.Watch();
      o.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), s(!0)), o.elapsed(this.pendingSubscriptionWatchLabel) >= jb && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), i(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = je.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
    await Promise.all(n.map(async (s) => await this.unsubscribeById(e, s, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const s = Ra(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = yt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: ri(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await us(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Lt.connection_stalled);
    }
    return Rn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: ri(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await us(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Lt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: ri(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, na(Qn({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Qn({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Qn({}, r)), this.topicMap.set(r.topic, e), this.events.emit(ar.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(ar.deleted, na(Qn({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(ar.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(ar.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
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
    Ts(r) && this.onBatchSubscribe(r.map((n, s) => na(Qn({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(Mn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Lt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Lt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(ar.created, async (e) => {
      const r = ar.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(ar.deleted, async (e) => {
      const r = ar.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
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
var nw = Object.defineProperty, cu = Object.getOwnPropertySymbols, sw = Object.prototype.hasOwnProperty, iw = Object.prototype.propertyIsEnumerable, uu = (t, e, r) => e in t ? nw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, aw = (t, e) => {
  for (var r in e || (e = {}))
    sw.call(e, r) && uu(t, r, e[r]);
  if (cu)
    for (var r of cu(e))
      iw.call(e, r) && uu(t, r, e[r]);
  return t;
};
class ow extends Sp {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new nr.EventEmitter(), this.name = Rb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Lt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Lt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Tr.payload, this.onPayloadHandler), this.provider.on(Tr.connect, this.onConnectHandler), this.provider.on(Tr.disconnect, this.onDisconnectHandler), this.provider.on(Tr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? je.generateChildLogger(e.logger, this.name) : je.pino(je.getDefaultLoggerOptions({ level: e.logger || Cb })), this.messages = new Gb(this.logger, e.core), this.subscriber = new rw(this, this.logger), this.publisher = new Zb(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || oh, this.projectId = e.projectId, this.bundleId = _m(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${iu}...`), await this.restartTransport(iu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Nb);
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
    let s = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    if (s)
      return s;
    let i;
    const o = (a) => {
      a.topic === e && (this.subscriber.off(ar.created, o), i());
    };
    return await Promise.all([new Promise((a) => {
      i = a, this.subscriber.on(ar.created, o);
    }), new Promise(async (a) => {
      s = await this.subscriber.subscribe(e, r), a();
    })]), s;
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await us(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(ar.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await us(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s) {
            n(s);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.provider.events.emit(Tr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Kc())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new kv(new Vv(Im({ sdkVersion: Ab, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    const s = this.messages.has(r, n);
    return s && this.logger.debug(`Ignoring duplicate message: ${n}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), go(e)) {
      if (!e.method.endsWith(Tb))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, o = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(aw({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      Ni(e) && this.events.emit(Lt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Lt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = fo(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Tr.payload, this.onPayloadHandler), this.provider.off(Tr.connect, this.onConnectHandler), this.provider.off(Tr.disconnect, this.onDisconnectHandler), this.provider.off(Tr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Lt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Kc();
    bv(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Lt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, se.toMiliseconds(Pb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
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
var cw = Object.defineProperty, lu = Object.getOwnPropertySymbols, uw = Object.prototype.hasOwnProperty, lw = Object.prototype.propertyIsEnumerable, hu = (t, e, r) => e in t ? cw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, du = (t, e) => {
  for (var r in e || (e = {}))
    uw.call(e, r) && hu(t, r, e[r]);
  if (lu)
    for (var r of lu(e))
      lw.call(e, r) && hu(t, r, e[r]);
  return t;
};
class Fi extends Dp {
  constructor(e, r, n, s = Vr, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Lb, this.cached = [], this.initialized = !1, this.storagePrefix = Vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !jt(o) ? this.map.set(this.getKey(o), o) : Qm(o) ? this.map.set(o.id, o) : Ym(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((l) => Wv(a[l], o[l]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const l = du(du({}, this.getData(o)), a);
      this.map.set(o, l), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), await this.persist());
    }, this.logger = je.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
    const r = this.map.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class hw {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = $b, this.version = kb, this.events = new Ss(), this.initialized = !1, this.storagePrefix = Vr, this.ignoredPayloadTypes = [bn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Ca(), s = await this.core.crypto.setSymKey(n), i = or(se.FIVE_MINUTES), o = { protocol: ah }, a = { topic: s, expiry: i, relay: o, active: !1 }, l = km({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: o });
      return await this.pairings.set(s, a), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: o } = kc(n.uri);
      let a;
      if (this.pairings.keys.includes(s) && (a = this.pairings.get(s), a.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const l = or(se.FIVE_MINUTES), u = { topic: s, relay: o, expiry: l, active: !1 };
      return await this.pairings.set(s, u), this.core.expirer.set(s, l), n.activatePairing && await this.activate({ topic: s }), this.events.emit(ts.create, u), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: o })), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = or(se.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: l } = Sn();
        this.events.once(gt("pairing_ping", i), ({ error: u }) => {
          u ? l(u) : a();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: s });
    }, this.updateMetadata = async ({ topic: n, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: s } = n;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", yt("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const o = Tn(s, i), a = await this.core.crypto.encode(n, o), l = Zn[s].req;
      return await this.core.history.set(n, o), this.core.relayer.publish(n, a, l), o.id;
    }, this.sendResult = async (n, s, i) => {
      const o = fo(n, i), a = await this.core.crypto.encode(s, o), l = await this.core.history.get(s, n), u = Zn[l.request.method].res;
      await this.core.relayer.publish(s, a, u), await this.core.history.resolve(o);
    }, this.sendError = async (n, s, i) => {
      const o = po(n, i), a = await this.core.crypto.encode(s, o), l = await this.core.history.get(s, n), u = Zn[l.request.method] ? Zn[l.request.method].res : Zn.unregistered_method.res;
      await this.core.relayer.publish(s, a, u), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, yt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => qr(s.expiry));
      await Promise.all(n.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: s, payload: i } = n;
      switch (i.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, i);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, i);
        default:
          return this.onUnknownRpcMethodRequest(s, i);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: s, payload: i } = n, o = (await this.core.history.get(s, i.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, i);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(ts.ping, { id: i, topic: n });
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        Ar(s) ? this.events.emit(gt("pairing_ping", i), {}) : cr(s) && this.events.emit(gt("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(ts.delete, { id: i, topic: n });
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: o } = s;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const a = yt("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(i, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(yt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!Kt(n)) {
        const { message: o } = Y("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(o);
      }
      if (!Zm(n.uri)) {
        const { message: o } = Y("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(o);
      }
      const i = kc(n.uri);
      if (!((s = i == null ? void 0 : i.relay) != null && s.protocol)) {
        const { message: o } = Y("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(i != null && i.symKey)) {
        const { message: o } = Y("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
    }, this.isValidPing = async (n) => {
      if (!Kt(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!Kt(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!Et(n, !1)) {
        const { message: s } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (qr(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = Y("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = je.generateChildLogger(r, this.name), this.pairings = new Fi(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return je.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Lt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        go(s) ? (await this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ni(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(tr.expired, async (e) => {
      const { topic: r } = kl(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(ts.expire, { topic: r }));
    });
  }
}
class dw extends wp {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new nr.EventEmitter(), this.name = qb, this.version = zb, this.cached = [], this.initialized = !1, this.storagePrefix = Vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const o = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: or(se.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(Er.created, o);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = cr(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Er.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Er.deleted, i);
        }
      });
    }, this.exists = async (n, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === n : !1), this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = je.generateChildLogger(r, this.name);
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const n = { topic: r.topic, request: Tn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Er.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Er.created, (e) => {
      const r = Er.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Er.updated, (e) => {
      const r = Er.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Er.deleted, (e) => {
      const r = Er.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Mn.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        se.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fw extends Op {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new nr.EventEmitter(), this.name = Bb, this.version = Vb, this.cached = [], this.initialized = !1, this.storagePrefix = Vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const s = this.formatTarget(n);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, s) => {
      this.isInitialized();
      const i = this.formatTarget(n), o = { target: i, expiry: s };
      this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(tr.created, { target: i, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(tr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = je.generateChildLogger(r, this.name);
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
      return Cm(e);
    if (typeof e == "number")
      return Rm(e);
    const { message: r } = Y("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(tr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    se.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(tr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Mn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(tr.created, (e) => {
      const r = tr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(tr.expired, (e) => {
      const r = tr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(tr.deleted, (e) => {
      const r = tr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class pw extends Ip {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = ra, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || $n() || !kn())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Aa;
        try {
          await this.createIframe();
        } catch (i) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      let i;
      try {
        i = await this.fetchAttestation(n.attestationId, s);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(o), i = await this.fetchAttestation(n.attestationId, Aa);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const i = this.startAbortTimer(se.ONE_SECOND * 2), o = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(i), o.status === 200 ? await o.json() : void 0;
    }, this.addToQueue = (n) => {
      this.queue.push(n);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((n) => this.sendPost(n)), this.queue = []);
    }, this.sendPost = (n) => {
      var s;
      try {
        if (!this.iframe)
          return;
        (s = this.iframe.contentWindow) == null || s.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let n;
      const s = (i) => {
        i.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), n());
      };
      await Promise.race([new Promise((i) => {
        if (document.getElementById(ra))
          return i();
        window.addEventListener("message", s);
        const o = document.createElement("iframe");
        o.id = ra, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, n = i;
      }), new Promise((i, o) => setTimeout(() => {
        window.removeEventListener("message", s), o("verify iframe load timeout");
      }, se.toMiliseconds(se.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || On;
      return Kb.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${On}`), s = On), s;
    }, this.logger = je.generateChildLogger(r, this.name), this.verifyUrl = On, this.abortController = new AbortController(), this.isDevEnv = co() && process.env.IS_VITEST;
  }
  get context() {
    return je.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), se.toMiliseconds(e));
  }
}
var gw = Object.defineProperty, fu = Object.getOwnPropertySymbols, yw = Object.prototype.hasOwnProperty, mw = Object.prototype.propertyIsEnumerable, pu = (t, e, r) => e in t ? gw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gu = (t, e) => {
  for (var r in e || (e = {}))
    yw.call(e, r) && pu(t, r, e[r]);
  if (fu)
    for (var r of fu(e))
      mw.call(e, r) && pu(t, r, e[r]);
  return t;
};
class mo extends bp {
  constructor(e) {
    super(e), this.protocol = ih, this.version = mb, this.name = yo, this.events = new nr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || oh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : je.pino(je.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || vb.logger }));
    this.logger = je.generateChildLogger(r, this.name), this.heartbeat = new Mn.HeartBeat(), this.crypto = new Hb(this, this.logger, e == null ? void 0 : e.keychain), this.history = new dw(this, this.logger), this.expirer = new fw(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Mf(gu(gu({}, bb), e == null ? void 0 : e.storageOptions)), this.relayer = new ow({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new hw(this, this.logger), this.verify = new pw(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new mo(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Fb, n), r;
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
const vw = mo, ch = "wc", uh = 2, lh = "client", vo = `${ch}@${uh}:${lh}:`, sa = { name: lh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, yu = "WALLETCONNECT_DEEPLINK_CHOICE", bw = "proposal", ww = "Proposal expired", _w = "session", Qs = se.SEVEN_DAYS, Ew = "engine", Yn = { wc_sessionPropose: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, ia = { min: se.FIVE_MINUTES, max: se.SEVEN_DAYS }, Pr = { idle: "IDLE", active: "ACTIVE" }, Sw = "request", Dw = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var xw = Object.defineProperty, Ow = Object.defineProperties, Iw = Object.getOwnPropertyDescriptors, mu = Object.getOwnPropertySymbols, Cw = Object.prototype.hasOwnProperty, Rw = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? xw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bt = (t, e) => {
  for (var r in e || (e = {}))
    Cw.call(e, r) && vu(t, r, e[r]);
  if (mu)
    for (var r of mu(e))
      Rw.call(e, r) && vu(t, r, e[r]);
  return t;
}, Jn = (t, e) => Ow(t, Iw(e));
class Tw extends Rp {
  constructor(e) {
    super(e), this.name = Ew, this.events = new Ss(), this.initialized = !1, this.ignoredPayloadTypes = [bn], this.requestQueue = { state: Pr.idle, queue: [] }, this.sessionRequestQueue = { state: Pr.idle, queue: [] }, this.requestQueueDelay = se.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Yn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Jn(Bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: o, sessionProperties: a, relays: l } = n;
      let u = s, h, f = !1;
      if (u && (f = this.client.core.pairing.pairings.get(u).active), !u || !f) {
        const { topic: x, uri: b } = await this.client.core.pairing.create();
        u = x, h = b;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = Bt({ requiredNamespaces: i, optionalNamespaces: o, relays: l ?? [{ protocol: ah }], proposer: { publicKey: p, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: v, resolve: E, done: S } = Sn(se.FIVE_MINUTES, ww);
      if (this.events.once(gt("session_connect"), async ({ error: x, session: b }) => {
        if (x)
          v(x);
        else if (b) {
          b.self.publicKey = p;
          const D = Jn(Bt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, D), await this.setExpiry(b.topic, b.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: b.peer.metadata }), E(D);
        }
      }), !u) {
        const { message: x } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(x);
      }
      const A = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: m }), w = or(se.FIVE_MINUTES);
      return await this.setProposal(A, Bt({ id: A, expiry: w }, m)), { uri: h, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: u, requiredNamespaces: h, optionalNamespaces: f } = a;
      l = l || "", is(h) || (h = Vm(i, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), m = u.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: u.metadata }), await this.sendResult({ id: n, topic: l, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, yt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const E = Bt({ relay: { protocol: s ?? "irn" }, namespaces: i, requiredNamespaces: h, optionalNamespaces: f, pairingTopic: l, controller: { publicKey: p, metadata: this.client.metadata }, expiry: or(Qs) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(v), await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      const S = Jn(Bt({}, E), { topic: v, pairingTopic: l, acknowledged: !1, self: E.controller, peer: { publicKey: u.publicKey, metadata: u.metadata }, controller: p });
      return await this.client.session.set(v, S), await this.setExpiry(v, or(Qs)), { topic: v, acknowledged: () => new Promise((A) => setTimeout(() => A(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, yt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: o, resolve: a, reject: l } = Sn();
      return this.events.once(gt("session_update", i), ({ error: u }) => {
        u ? l(u) : a();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: o };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: o, reject: a } = Sn();
      return this.events.once(gt("session_extend", s), ({ error: l }) => {
        l ? a(l) : o();
      }), await this.setExpiry(n, or(Qs)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: o } = r, a = ho(), { done: l, resolve: u, reject: h } = Sn(o, "Request expired. Please try again.");
      return this.events.once(gt("session_request", a), ({ error: f, result: p }) => {
        f ? h(f) : u(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: a, topic: i, method: "wc_sessionRequest", params: { request: s, chainId: n }, expiry: o, throwOnFailedPublish: !0 }).catch((p) => h(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: a }), f();
      }), new Promise(async (f) => {
        const p = await Pm(this.client.core.storage, yu);
        Tm({ id: a, topic: i, wcDeepLink: p }), f();
      }), l()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      Ar(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : cr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: o, reject: a } = Sn();
        this.events.once(gt("session_ping", s), ({ error: l }) => {
          l ? a(l) : o();
        }), await i();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: s, chainId: i } = r;
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: s, chainId: i } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: yt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => Hm(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i) => {
            var o, a;
            return ((o = i.peerMetadata) == null ? void 0 : o.url) && ((a = i.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && i.topic && i.topic !== n.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: s } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, yt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(yu).catch((i) => this.client.logger.warn(i));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, yt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = Pr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Yn.wc_sessionRequest.req.ttl, { id: s, topic: i, params: o, verifyContext: a } = r;
      await this.client.pendingRequest.set(s, { id: s, topic: i, params: o, verifyContext: a }), n && this.client.core.expirer.set(s, or(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: o, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: u } = r, h = Tn(s, i, l);
      if (kn() && Dw.includes(s)) {
        const m = Rn(JSON.stringify(h));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, h), p = Yn[s].req;
      return o && (p.ttl = o), a && (p.id = a), this.client.core.history.set(n, h), u ? (p.internal = Jn(Bt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), h.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: o } = r, a = fo(n, i), l = await this.client.core.crypto.encode(s, a), u = await this.client.core.history.get(s, n), h = Yn[u.request.method].res;
      o ? (h.internal = Jn(Bt({}, h.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, l, h)) : this.client.core.relayer.publish(s, l, h).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, s) => {
      const i = po(r, s), o = await this.client.core.crypto.encode(n, i), a = await this.client.core.history.get(n, r), l = Yn[a.request.method].res;
      this.client.core.relayer.publish(n, o, l), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        qr(s.expiry) && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        qr(s.expiry) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession(s)), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Pr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Pr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = Pr.idle;
    }, this.processRequest = (r) => {
      const { topic: n, payload: s } = r, i = s.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, s);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, s);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, s);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, s);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, s);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, s);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, s);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: s } = r, i = (await this.client.core.history.get(n, s.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, s);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, s);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: s } = Y("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        this.isValidConnect(Bt({}, n.params));
        const o = or(se.FIVE_MINUTES), a = Bt({ id: i, pairingTopic: r, expiry: o }, s);
        await this.setProposal(i, a);
        const l = Rn(JSON.stringify(n)), u = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: a, verifyContext: u });
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (Ar(n)) {
        const { result: i } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const o = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const a = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const u = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: u });
        const h = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h }), await this.client.core.pairing.activate({ topic: r });
      } else
        cr(n) && (await this.client.proposal.delete(s, yt("USER_DISCONNECTED")), this.events.emit(gt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: o, controller: a, expiry: l, namespaces: u, requiredNamespaces: h, optionalNamespaces: f, sessionProperties: p, pairingTopic: m } = n.params, v = Bt({ topic: r, relay: o, expiry: l, namespaces: u, acknowledged: !0, pairingTopic: m, requiredNamespaces: h, optionalNamespaces: f, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(gt("session_connect"), { session: v }), this.cleanupDuplicatePairings(v);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      Ar(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(gt("session_approve", s), {})) : cr(n) && (await this.client.session.delete(r, yt("USER_DISCONNECTED")), this.events.emit(gt("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const o = `${r}_session_update`, a = Zs.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Bt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), Zs.set(o, i);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      Ar(n) ? this.events.emit(gt("session_update", s), {}) : cr(n) && this.events.emit(gt("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, or(Qs)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      Ar(n) ? this.events.emit(gt("session_extend", s), {}) : cr(n) && this.events.emit(gt("session_extend", s), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: s } = n;
      setTimeout(() => {
        Ar(n) ? this.events.emit(gt("session_ping", s), {}) : cr(n) && this.events.emit(gt("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Lt.publish, async () => {
            i(await this.deleteSession(r));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: s, topic: r });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Bt({ topic: r }, i));
        const o = Rn(JSON.stringify(Tn("wc_sessionRequest", i, s))), a = this.client.session.get(r), l = await this.getVerifyContext(o, a.peer.metadata), u = { id: s, topic: r, params: i, verifyContext: l };
        await this.setPendingSessionRequest(u), this.addSessionRequestToSessionRequestQueue(u), this.processSessionRequestQueue();
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      Ar(n) ? this.events.emit(gt("session_request", s), { result: n.result }) : cr(n) && this.events.emit(gt("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const o = `${r}_session_event_${i.event.name}`, a = Zs.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Bt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), Zs.set(o, s);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Pr.idle, this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Pr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Pr.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Tn("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!Kt(r)) {
        const { message: l } = Y("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: o, relays: a } = r;
      if (jt(n) || await this.isValidPairingTopic(n), !iv(a, !0)) {
        const { message: l } = Y("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !jt(s) && is(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !jt(i) && is(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), jt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = sv(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!Kt(r))
        throw new Error(Y("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = ni(s, "approve()");
      if (l)
        throw new Error(l.message);
      const u = Bc(a.requiredNamespaces, s, "approve()");
      if (u)
        throw new Error(u.message);
      if (!Et(i, !0)) {
        const { message: h } = Y("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(h);
      }
      jt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Kt(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !ov(s)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Kt(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: n, controller: s, namespaces: i, expiry: o } = r;
      if (!zl(n)) {
        const { message: u } = Y("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const a = Jm(s, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = ni(i, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (qr(o)) {
        const { message: u } = Y("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Kt(r)) {
        const { message: l } = Y("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), o = ni(s, "update()");
      if (o)
        throw new Error(o.message);
      const a = Bc(i.requiredNamespaces, s, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Kt(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!Kt(r)) {
        const { message: l } = Y("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: s, chainId: i, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!zc(a, i)) {
        const { message: l } = Y("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(l);
      }
      if (!cv(s)) {
        const { message: l } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(l);
      }
      if (!hv(a, i, s.method)) {
        const { message: l } = Y("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(l);
      }
      if (o && !gv(o, ia)) {
        const { message: l } = Y("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${ia.min} and ${ia.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!Kt(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n, response: s } = r;
      if (await this.isValidSessionTopic(n), !uv(s)) {
        const { message: i } = Y("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (r) => {
      if (!Kt(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!Kt(r)) {
        const { message: a } = Y("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!zc(o, i)) {
        const { message: a } = Y("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(a);
      }
      if (!lv(s)) {
        const { message: a } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
      if (!dv(o, i, s.name)) {
        const { message: a } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Kt(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || On, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((s) => {
        if (!Et(s, !1)) {
          const { message: i } = Y("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Lt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        go(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ni(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(tr.expired, async (e) => {
      const { topic: r, id: n } = kl(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Y("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ts.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Et(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (qr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Et(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (qr(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = Y("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Et(e, !1)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!av(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (qr(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class Pw extends Fi {
  constructor(e, r) {
    super(e, r, bw, vo), this.core = e, this.logger = r;
  }
}
class Aw extends Fi {
  constructor(e, r) {
    super(e, r, _w, vo), this.core = e, this.logger = r;
  }
}
class Nw extends Fi {
  constructor(e, r) {
    super(e, r, Sw, vo, (n) => n.id), this.core = e, this.logger = r;
  }
}
class bo extends Cp {
  constructor(e) {
    super(e), this.protocol = ch, this.version = uh, this.name = sa.name, this.events = new nr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (e == null ? void 0 : e.name) || sa.name, this.metadata = (e == null ? void 0 : e.metadata) || Sm();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : je.pino(je.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || sa.logger }));
    this.core = (e == null ? void 0 : e.core) || new vw(e), this.logger = je.generateChildLogger(r, this.name), this.session = new Aw(this.core, this.logger), this.proposal = new Pw(this.core, this.logger), this.pendingRequest = new Nw(this.core, this.logger), this.engine = new Tw(this);
  }
  static async init(e) {
    const r = new bo(e);
    return await r.initialize(), r;
  }
  get context() {
    return je.getLoggerContext(this.logger);
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
var Lw = Object.defineProperty, Fw = Object.defineProperties, Mw = Object.getOwnPropertyDescriptors, bu = Object.getOwnPropertySymbols, Uw = Object.prototype.hasOwnProperty, jw = Object.prototype.propertyIsEnumerable, wu = (t, e, r) => e in t ? Lw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, $w = (t, e) => {
  for (var r in e || (e = {}))
    Uw.call(e, r) && wu(t, r, e[r]);
  if (bu)
    for (var r of bu(e))
      jw.call(e, r) && wu(t, r, e[r]);
  return t;
}, kw = (t, e) => Fw(t, Mw(e)), wo = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Ye = (t, e, r) => (wo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), an = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, di = (t, e, r, n) => (wo(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Pt = (t, e, r) => (wo(t, e, "access private method"), r), on, Dn, rs, _t, Na, hh, At, Ut, La, _u;
let qw = class {
  constructor(e) {
    an(this, Na), an(this, At), an(this, La), an(this, on, void 0), an(this, Dn, void 0), an(this, rs, void 0), an(this, _t, void 0), di(this, on, e), di(this, Dn, Pt(this, Na, hh).call(this)), Pt(this, At, Ut).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (s, i) => {
      await Pt(this, At, Ut).call(this);
      const o = Ye(this, Dn).subscribeModal((u) => {
        u.open || (o(), i(new Error("Modal closed")));
      }), { uri: a, approval: l } = await Ye(this, _t).connect(e);
      if (a) {
        const u = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((f) => u.add(f));
        }), n && Object.values(n).forEach(({ chains: h }) => {
          h && h.forEach((f) => u.add(f));
        }), await Ye(this, Dn).openModal({ uri: a, chains: Array.from(u) });
      }
      try {
        const u = await l();
        s(u);
      } catch (u) {
        i(u);
      } finally {
        o(), Ye(this, Dn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Pt(this, At, Ut).call(this), await Ye(this, _t).disconnect(e);
  }
  async request(e) {
    return await Pt(this, At, Ut).call(this), await Ye(this, _t).request(e);
  }
  async getSessions() {
    return await Pt(this, At, Ut).call(this), Ye(this, _t).session.getAll();
  }
  async getSession() {
    return await Pt(this, At, Ut).call(this), Ye(this, _t).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Pt(this, At, Ut).call(this), Ye(this, _t).off("session_expire", e);
  }
};
on = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakSet(), hh = function() {
  const { modalOptions: t, projectId: e } = Ye(this, on);
  return new Yd(kw($w({}, t), { projectId: e }));
}, At = /* @__PURE__ */ new WeakSet(), Ut = async function() {
  return Ye(this, _t) ? !0 : (!Ye(this, rs) && typeof window < "u" && di(this, rs, Pt(this, La, _u).call(this)), Ye(this, rs));
}, La = /* @__PURE__ */ new WeakSet(), _u = async function() {
  di(this, _t, await bo.init({ metadata: Ye(this, on).metadata, projectId: Ye(this, on).projectId, relayUrl: Ye(this, on).relayUrl }));
  const t = await Ye(this, _t).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const _o = [
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
], Mi = ["aleo:1"], Eo = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], zw = "f0aaeffe71b636da453fce042d79d723", Bw = {
  standaloneChains: Mi,
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
}, FE = {
  requiredNamespaces: {
    aleo: {
      methods: _o,
      chains: Mi,
      events: Eo
    }
  }
}, Nn = new Ss();
let ns;
function Vw(t) {
  ns = new qw({
    projectId: zw,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Bw }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Je() {
  return new Promise((t) => {
    if (ns)
      t(ns);
    else {
      const e = setInterval(() => {
        ns && (clearInterval(e), t(ns));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var qe;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, t.getValidEnumValues = (s) => {
    const i = t.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return t.objectValues(o);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(i) {
    return s[i];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, t.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(qe || (qe = {}));
var Fa;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Fa || (Fa = {}));
const ee = qe.arrayToEnum([
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
]), Br = (t) => {
  switch (typeof t) {
    case "undefined":
      return ee.undefined;
    case "string":
      return ee.string;
    case "number":
      return isNaN(t) ? ee.nan : ee.number;
    case "boolean":
      return ee.boolean;
    case "function":
      return ee.function;
    case "bigint":
      return ee.bigint;
    case "symbol":
      return ee.symbol;
    case "object":
      return Array.isArray(t) ? ee.array : t === null ? ee.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ee.promise : typeof Map < "u" && t instanceof Map ? ee.map : typeof Set < "u" && t instanceof Set ? ee.set : typeof Date < "u" && t instanceof Date ? ee.date : ee.object;
    default:
      return ee.unknown;
  }
}, H = qe.arrayToEnum([
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
]), Kw = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class hr extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(i) {
      return i.message;
    }, n = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let a = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(r(o))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, qe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
hr.create = (t) => new hr(t);
const ls = (t, e) => {
  let r;
  switch (t.code) {
    case H.invalid_type:
      t.received === ee.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case H.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, qe.jsonStringifyReplacer)}`;
      break;
    case H.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${qe.joinValues(t.keys, ", ")}`;
      break;
    case H.invalid_union:
      r = "Invalid input";
      break;
    case H.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${qe.joinValues(t.options)}`;
      break;
    case H.invalid_enum_value:
      r = `Invalid enum value. Expected ${qe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case H.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case H.invalid_return_type:
      r = "Invalid function return type";
      break;
    case H.invalid_date:
      r = "Invalid date";
      break;
    case H.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : qe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case H.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case H.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case H.custom:
      r = "Invalid input";
      break;
    case H.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case H.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case H.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, qe.assertNever(t);
  }
  return { message: r };
};
let dh = ls;
function Ww(t) {
  dh = t;
}
function fi() {
  return dh;
}
const pi = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, Hw = [];
function re(t, e) {
  const r = pi({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      fi(),
      ls
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Ft {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return fe;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return Ft.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return fe;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const fe = Object.freeze({
  status: "aborted"
}), fh = (t) => ({ status: "dirty", value: t }), zt = (t) => ({ status: "valid", value: t }), Ma = (t) => t.status === "aborted", Ua = (t) => t.status === "dirty", gi = (t) => t.status === "valid", yi = (t) => typeof Promise < "u" && t instanceof Promise;
var ie;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ie || (ie = {}));
class Dr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Eu = (t, e) => {
  if (gi(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new hr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ve(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class De {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Br(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Br(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ft(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Br(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (yi(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Br(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return Eu(s, i);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Br(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (yi(s) ? s : Promise.resolve(s));
    return Eu(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: H.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new pr({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Nr.create(this, this._def);
  }
  nullable() {
    return fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return dr.create(this, this._def);
  }
  promise() {
    return Fn.create(this, this._def);
  }
  or(e) {
    return ps.create([this, e], this._def);
  }
  and(e) {
    return gs.create(this, e, this._def);
  }
  transform(e) {
    return new pr({
      ...ve(this._def),
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ws({
      ...ve(this._def),
      innerType: this,
      defaultValue: r,
      typeName: le.ZodDefault
    });
  }
  brand() {
    return new gh({
      typeName: le.ZodBranded,
      type: this,
      ...ve(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new wi({
      ...ve(this._def),
      innerType: this,
      catchValue: r,
      typeName: le.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return As.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Gw = /^c[^\s-]{8,}$/i, Zw = /^[a-z][a-z0-9]*$/, Qw = /[0-9A-HJKMNP-TV-Z]{26}/, Yw = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Jw = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Xw = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, e_ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, t_ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, r_ = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function n_(t, e) {
  return !!((e === "v4" || !e) && e_.test(t) || (e === "v6" || !e) && t_.test(t));
}
class lr extends De {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: H.invalid_string,
      ...ie.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ie.errToObj(e)), this.trim = () => new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ee.string) {
      const i = this._getOrReturnCtx(e);
      return re(
        i,
        {
          code: H.invalid_type,
          expected: ee.string,
          received: i.parsedType
        }
        //
      ), fe;
    }
    const n = new Ft();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, a = e.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(e, s), o ? re(s, {
          code: H.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && re(s, {
          code: H.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        Jw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "email",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        Xw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "emoji",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        Yw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "uuid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        Gw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        Zw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid2",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        Qw.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ulid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), re(s, {
            validation: "url",
            code: H.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "regex",
          code: H.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? r_(i).test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: H.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? n_(e.data, i.version) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ip",
          code: H.invalid_string,
          message: i.message
        }), n.dirty()) : qe.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ie.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ie.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ie.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ie.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ie.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ie.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ie.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ie.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      ...ie.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ie.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ie.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ie.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ie.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ie.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ie.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ie.errToObj(r)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
lr.create = (t) => {
  var e;
  return new lr({
    checks: [],
    typeName: le.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ve(t)
  });
};
function s_(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Kr extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ee.number) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: H.invalid_type,
        expected: ee.number,
        received: i.parsedType
      }), fe;
    }
    let n;
    const s = new Ft();
    for (const i of this._def.checks)
      i.kind === "int" ? qe.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? s_(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.not_finite,
        message: i.message
      }), s.dirty()) : qe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ie.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ie.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ie.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ie.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Kr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ie.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Kr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ie.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ie.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ie.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ie.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ie.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && qe.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Kr.create = (t) => new Kr({
  checks: [],
  typeName: le.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ve(t)
});
class Wr extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ee.bigint) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: H.invalid_type,
        expected: ee.bigint,
        received: i.parsedType
      }), fe;
    }
    let n;
    const s = new Ft();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: H.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : qe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ie.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ie.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ie.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ie.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Wr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ie.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Wr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ie.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Wr.create = (t) => {
  var e;
  return new Wr({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ve(t)
  });
};
class hs extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ee.boolean) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.boolean,
        received: n.parsedType
      }), fe;
    }
    return zt(e.data);
  }
}
hs.create = (t) => new hs({
  typeName: le.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ve(t)
});
class hn extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ee.date) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: H.invalid_type,
        expected: ee.date,
        received: i.parsedType
      }), fe;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: H.invalid_date
      }), fe;
    }
    const n = new Ft();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: H.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: H.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : qe.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new hn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ie.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ie.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
hn.create = (t) => new hn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: le.ZodDate,
  ...ve(t)
});
class mi extends De {
  _parse(e) {
    if (this._getType(e) !== ee.symbol) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.symbol,
        received: n.parsedType
      }), fe;
    }
    return zt(e.data);
  }
}
mi.create = (t) => new mi({
  typeName: le.ZodSymbol,
  ...ve(t)
});
class ds extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.undefined,
        received: n.parsedType
      }), fe;
    }
    return zt(e.data);
  }
}
ds.create = (t) => new ds({
  typeName: le.ZodUndefined,
  ...ve(t)
});
class fs extends De {
  _parse(e) {
    if (this._getType(e) !== ee.null) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.null,
        received: n.parsedType
      }), fe;
    }
    return zt(e.data);
  }
}
fs.create = (t) => new fs({
  typeName: le.ZodNull,
  ...ve(t)
});
class Ln extends De {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return zt(e.data);
  }
}
Ln.create = (t) => new Ln({
  typeName: le.ZodAny,
  ...ve(t)
});
class ln extends De {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return zt(e.data);
  }
}
ln.create = (t) => new ln({
  typeName: le.ZodUnknown,
  ...ve(t)
});
class Lr extends De {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return re(r, {
      code: H.invalid_type,
      expected: ee.never,
      received: r.parsedType
    }), fe;
  }
}
Lr.create = (t) => new Lr({
  typeName: le.ZodNever,
  ...ve(t)
});
class vi extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.void,
        received: n.parsedType
      }), fe;
    }
    return zt(e.data);
  }
}
vi.create = (t) => new vi({
  typeName: le.ZodVoid,
  ...ve(t)
});
class dr extends De {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== ee.array)
      return re(r, {
        code: H.invalid_type,
        expected: ee.array,
        received: r.parsedType
      }), fe;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (re(r, {
        code: o ? H.too_big : H.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (re(r, {
      code: H.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (re(r, {
      code: H.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Dr(r, o, r.path, a)))).then((o) => Ft.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Dr(r, o, r.path, a)));
    return Ft.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new dr({
      ...this._def,
      minLength: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new dr({
      ...this._def,
      maxLength: { value: e, message: ie.toString(r) }
    });
  }
  length(e, r) {
    return new dr({
      ...this._def,
      exactLength: { value: e, message: ie.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
dr.create = (t, e) => new dr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: le.ZodArray,
  ...ve(e)
});
function xn(t) {
  if (t instanceof rt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Nr.create(xn(n));
    }
    return new rt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof dr ? new dr({
      ...t._def,
      type: xn(t.element)
    }) : t instanceof Nr ? Nr.create(xn(t.unwrap())) : t instanceof fn ? fn.create(xn(t.unwrap())) : t instanceof xr ? xr.create(t.items.map((e) => xn(e))) : t;
}
class rt extends De {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = qe.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ee.object) {
      const u = this._getOrReturnCtx(e);
      return re(u, {
        code: H.invalid_type,
        expected: ee.object,
        received: u.parsedType
      }), fe;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Lr && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const h = i[u], f = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: h._parse(new Dr(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof Lr) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const h of a)
          l.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: s.data[h] }
          });
      else if (u === "strict")
        a.length > 0 && (re(s, {
          code: H.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const h of a) {
        const f = s.data[h];
        l.push({
          key: { status: "valid", value: h },
          value: u._parse(
            new Dr(s, f, s.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const h of l) {
        const f = await h.key;
        u.push({
          key: f,
          value: await h.value,
          alwaysSet: h.alwaysSet
        });
      }
      return u;
    }).then((u) => Ft.mergeObjectSync(n, u)) : Ft.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ie.errToObj, new rt({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = ie.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new rt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new rt({
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
  extend(e) {
    return new rt({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new rt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: le.ZodObject
    });
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
  setKey(e, r) {
    return this.augment({ [e]: r });
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
  catchall(e) {
    return new rt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return qe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new rt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return qe.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new rt({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return xn(this);
  }
  partial(e) {
    const r = {};
    return qe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new rt({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return qe.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Nr; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new rt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ph(qe.objectKeys(this.shape));
  }
}
rt.create = (t, e) => new rt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Lr.create(),
  typeName: le.ZodObject,
  ...ve(e)
});
rt.strictCreate = (t, e) => new rt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Lr.create(),
  typeName: le.ZodObject,
  ...ve(e)
});
rt.lazycreate = (t, e) => new rt({
  shape: t,
  unknownKeys: "strip",
  catchall: Lr.create(),
  typeName: le.ZodObject,
  ...ve(e)
});
class ps extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new hr(a.ctx.common.issues));
      return re(r, {
        code: H.invalid_union,
        unionErrors: o
      }), fe;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const l of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, h = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !i && (i = { result: h, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new hr(l));
      return re(r, {
        code: H.invalid_union,
        unionErrors: a
      }), fe;
    }
  }
  get options() {
    return this._def.options;
  }
}
ps.create = (t, e) => new ps({
  options: t,
  typeName: le.ZodUnion,
  ...ve(e)
});
const si = (t) => t instanceof ms ? si(t.schema) : t instanceof pr ? si(t.innerType()) : t instanceof vs ? [t.value] : t instanceof Hr ? t.options : t instanceof bs ? Object.keys(t.enum) : t instanceof ws ? si(t._def.innerType) : t instanceof ds ? [void 0] : t instanceof fs ? [null] : null;
class Ui extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.object)
      return re(r, {
        code: H.invalid_type,
        expected: ee.object,
        received: r.parsedType
      }), fe;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (re(r, {
      code: H.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), fe);
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
  static create(e, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const i of r) {
      const o = si(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new Ui({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...ve(n)
    });
  }
}
function ja(t, e) {
  const r = Br(t), n = Br(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ee.object && n === ee.object) {
    const s = qe.objectKeys(e), i = qe.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const l = ja(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === ee.array && n === ee.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], l = ja(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === ee.date && n === ee.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class gs extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, o) => {
      if (Ma(i) || Ma(o))
        return fe;
      const a = ja(i.value, o.value);
      return a.valid ? ((Ua(i) || Ua(o)) && r.dirty(), { status: r.value, value: a.data }) : (re(n, {
        code: H.invalid_intersection_types
      }), fe);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
gs.create = (t, e, r) => new gs({
  left: t,
  right: e,
  typeName: le.ZodIntersection,
  ...ve(r)
});
class xr extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.array)
      return re(n, {
        code: H.invalid_type,
        expected: ee.array,
        received: n.parsedType
      }), fe;
    if (n.data.length < this._def.items.length)
      return re(n, {
        code: H.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), fe;
    !this._def.rest && n.data.length > this._def.items.length && (re(n, {
      code: H.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Dr(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(i).then((o) => Ft.mergeArray(r, o)) : Ft.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new xr({
      ...this._def,
      rest: e
    });
  }
}
xr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xr({
    items: t,
    typeName: le.ZodTuple,
    rest: null,
    ...ve(e)
  });
};
class ys extends De {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.object)
      return re(n, {
        code: H.invalid_type,
        expected: ee.object,
        received: n.parsedType
      }), fe;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Dr(n, a, n.path, a)),
        value: o._parse(new Dr(n, n.data[a], n.path, a))
      });
    return n.common.async ? Ft.mergeObjectAsync(r, s) : Ft.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof De ? new ys({
      keyType: e,
      valueType: r,
      typeName: le.ZodRecord,
      ...ve(n)
    }) : new ys({
      keyType: lr.create(),
      valueType: e,
      typeName: le.ZodRecord,
      ...ve(r)
    });
  }
}
class bi extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.map)
      return re(n, {
        code: H.invalid_type,
        expected: ee.map,
        received: n.parsedType
      }), fe;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, l], u) => ({
      key: s._parse(new Dr(n, a, n.path, [u, "key"])),
      value: i._parse(new Dr(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, h = await l.value;
          if (u.status === "aborted" || h.status === "aborted")
            return fe;
          (u.status === "dirty" || h.status === "dirty") && r.dirty(), a.set(u.value, h.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, h = l.value;
        if (u.status === "aborted" || h.status === "aborted")
          return fe;
        (u.status === "dirty" || h.status === "dirty") && r.dirty(), a.set(u.value, h.value);
      }
      return { status: r.value, value: a };
    }
  }
}
bi.create = (t, e, r) => new bi({
  valueType: e,
  keyType: t,
  typeName: le.ZodMap,
  ...ve(r)
});
class dn extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.set)
      return re(n, {
        code: H.invalid_type,
        expected: ee.set,
        received: n.parsedType
      }), fe;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (re(n, {
      code: H.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (re(n, {
      code: H.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const h of l) {
        if (h.status === "aborted")
          return fe;
        h.status === "dirty" && r.dirty(), u.add(h.value);
      }
      return { status: r.value, value: u };
    }
    const a = [...n.data.values()].map((l, u) => i._parse(new Dr(n, l, n.path, u)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, r) {
    return new dn({
      ...this._def,
      minSize: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new dn({
      ...this._def,
      maxSize: { value: e, message: ie.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
dn.create = (t, e) => new dn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...ve(e)
});
class Pn extends De {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.function)
      return re(r, {
        code: H.invalid_type,
        expected: ee.function,
        received: r.parsedType
      }), fe;
    function n(a, l) {
      return pi({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          fi(),
          ls
        ].filter((u) => !!u),
        issueData: {
          code: H.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return pi({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          fi(),
          ls
        ].filter((u) => !!u),
        issueData: {
          code: H.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof Fn ? zt(async (...a) => {
      const l = new hr([]), u = await this._def.args.parseAsync(a, i).catch((p) => {
        throw l.addIssue(n(a, p)), l;
      }), h = await o(...u);
      return await this._def.returns._def.type.parseAsync(h, i).catch((p) => {
        throw l.addIssue(s(h, p)), l;
      });
    }) : zt((...a) => {
      const l = this._def.args.safeParse(a, i);
      if (!l.success)
        throw new hr([n(a, l.error)]);
      const u = o(...l.data), h = this._def.returns.safeParse(u, i);
      if (!h.success)
        throw new hr([s(u, h.error)]);
      return h.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Pn({
      ...this._def,
      args: xr.create(e).rest(ln.create())
    });
  }
  returns(e) {
    return new Pn({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new Pn({
      args: e || xr.create([]).rest(ln.create()),
      returns: r || ln.create(),
      typeName: le.ZodFunction,
      ...ve(n)
    });
  }
}
class ms extends De {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
ms.create = (t, e) => new ms({
  getter: t,
  typeName: le.ZodLazy,
  ...ve(e)
});
class vs extends De {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return re(r, {
        received: r.data,
        code: H.invalid_literal,
        expected: this._def.value
      }), fe;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
vs.create = (t, e) => new vs({
  value: t,
  typeName: le.ZodLiteral,
  ...ve(e)
});
function ph(t, e) {
  return new Hr({
    values: t,
    typeName: le.ZodEnum,
    ...ve(e)
  });
}
class Hr extends De {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        expected: qe.joinValues(n),
        received: r.parsedType,
        code: H.invalid_type
      }), fe;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        received: r.data,
        code: H.invalid_enum_value,
        options: n
      }), fe;
    }
    return zt(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return Hr.create(e);
  }
  exclude(e) {
    return Hr.create(this.options.filter((r) => !e.includes(r)));
  }
}
Hr.create = ph;
class bs extends De {
  _parse(e) {
    const r = qe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ee.string && n.parsedType !== ee.number) {
      const s = qe.objectValues(r);
      return re(n, {
        expected: qe.joinValues(s),
        received: n.parsedType,
        code: H.invalid_type
      }), fe;
    }
    if (r.indexOf(e.data) === -1) {
      const s = qe.objectValues(r);
      return re(n, {
        received: n.data,
        code: H.invalid_enum_value,
        options: s
      }), fe;
    }
    return zt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
bs.create = (t, e) => new bs({
  values: t,
  typeName: le.ZodNativeEnum,
  ...ve(e)
});
class Fn extends De {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.promise && r.common.async === !1)
      return re(r, {
        code: H.invalid_type,
        expected: ee.promise,
        received: r.parsedType
      }), fe;
    const n = r.parsedType === ee.promise ? r.data : Promise.resolve(r.data);
    return zt(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Fn.create = (t, e) => new Fn({
  type: t,
  typeName: le.ZodPromise,
  ...ve(e)
});
class pr extends De {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null;
    if (s.type === "preprocess") {
      const o = s.transform(n.data);
      return n.common.async ? Promise.resolve(o).then((a) => this._def.schema._parseAsync({
        data: a,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
    }
    const i = {
      addIssue: (o) => {
        re(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? fe : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? fe : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!gi(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => gi(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    qe.assertNever(s);
  }
}
pr.create = (t, e, r) => new pr({
  schema: t,
  typeName: le.ZodEffects,
  effect: e,
  ...ve(r)
});
pr.createWithPreprocess = (t, e, r) => new pr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: le.ZodEffects,
  ...ve(r)
});
class Nr extends De {
  _parse(e) {
    return this._getType(e) === ee.undefined ? zt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nr.create = (t, e) => new Nr({
  innerType: t,
  typeName: le.ZodOptional,
  ...ve(e)
});
class fn extends De {
  _parse(e) {
    return this._getType(e) === ee.null ? zt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fn.create = (t, e) => new fn({
  innerType: t,
  typeName: le.ZodNullable,
  ...ve(e)
});
class ws extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ee.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ws.create = (t, e) => new ws({
  innerType: t,
  typeName: le.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ve(e)
});
class wi extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return yi(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new hr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new hr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
wi.create = (t, e) => new wi({
  innerType: t,
  typeName: le.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ve(e)
});
class _i extends De {
  _parse(e) {
    if (this._getType(e) !== ee.nan) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: H.invalid_type,
        expected: ee.nan,
        received: n.parsedType
      }), fe;
    }
    return { status: "valid", value: e.data };
  }
}
_i.create = (t) => new _i({
  typeName: le.ZodNaN,
  ...ve(t)
});
const i_ = Symbol("zod_brand");
class gh extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class As extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? fe : i.status === "dirty" ? (r.dirty(), fh(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? fe : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new As({
      in: e,
      out: r,
      typeName: le.ZodPipeline
    });
  }
}
const yh = (t, e = {}, r) => t ? Ln.create().superRefine((n, s) => {
  var i, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, l = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, u = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...u, fatal: l });
  }
}) : Ln.create(), a_ = {
  object: rt.lazycreate
};
var le;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(le || (le = {}));
const o_ = (t, e = {
  message: `Input not instance of ${t.name}`
}) => yh((r) => r instanceof t, e), mh = lr.create, vh = Kr.create, c_ = _i.create, u_ = Wr.create, bh = hs.create, l_ = hn.create, h_ = mi.create, d_ = ds.create, f_ = fs.create, p_ = Ln.create, g_ = ln.create, y_ = Lr.create, m_ = vi.create, v_ = dr.create, b_ = rt.create, w_ = rt.strictCreate, __ = ps.create, E_ = Ui.create, S_ = gs.create, D_ = xr.create, x_ = ys.create, O_ = bi.create, I_ = dn.create, C_ = Pn.create, R_ = ms.create, T_ = vs.create, P_ = Hr.create, A_ = bs.create, N_ = Fn.create, Su = pr.create, L_ = Nr.create, F_ = fn.create, M_ = pr.createWithPreprocess, U_ = As.create, j_ = () => mh().optional(), $_ = () => vh().optional(), k_ = () => bh().optional(), q_ = {
  string: (t) => lr.create({ ...t, coerce: !0 }),
  number: (t) => Kr.create({ ...t, coerce: !0 }),
  boolean: (t) => hs.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Wr.create({ ...t, coerce: !0 }),
  date: (t) => hn.create({ ...t, coerce: !0 })
}, z_ = fe;
var gr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ls,
  setErrorMap: Ww,
  getErrorMap: fi,
  makeIssue: pi,
  EMPTY_PATH: Hw,
  addIssueToContext: re,
  ParseStatus: Ft,
  INVALID: fe,
  DIRTY: fh,
  OK: zt,
  isAborted: Ma,
  isDirty: Ua,
  isValid: gi,
  isAsync: yi,
  get util() {
    return qe;
  },
  get objectUtil() {
    return Fa;
  },
  ZodParsedType: ee,
  getParsedType: Br,
  ZodType: De,
  ZodString: lr,
  ZodNumber: Kr,
  ZodBigInt: Wr,
  ZodBoolean: hs,
  ZodDate: hn,
  ZodSymbol: mi,
  ZodUndefined: ds,
  ZodNull: fs,
  ZodAny: Ln,
  ZodUnknown: ln,
  ZodNever: Lr,
  ZodVoid: vi,
  ZodArray: dr,
  ZodObject: rt,
  ZodUnion: ps,
  ZodDiscriminatedUnion: Ui,
  ZodIntersection: gs,
  ZodTuple: xr,
  ZodRecord: ys,
  ZodMap: bi,
  ZodSet: dn,
  ZodFunction: Pn,
  ZodLazy: ms,
  ZodLiteral: vs,
  ZodEnum: Hr,
  ZodNativeEnum: bs,
  ZodPromise: Fn,
  ZodEffects: pr,
  ZodTransformer: pr,
  ZodOptional: Nr,
  ZodNullable: fn,
  ZodDefault: ws,
  ZodCatch: wi,
  ZodNaN: _i,
  BRAND: i_,
  ZodBranded: gh,
  ZodPipeline: As,
  custom: yh,
  Schema: De,
  ZodSchema: De,
  late: a_,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: q_,
  any: p_,
  array: v_,
  bigint: u_,
  boolean: bh,
  date: l_,
  discriminatedUnion: E_,
  effect: Su,
  enum: P_,
  function: C_,
  instanceof: o_,
  intersection: S_,
  lazy: R_,
  literal: T_,
  map: O_,
  nan: c_,
  nativeEnum: A_,
  never: y_,
  null: f_,
  nullable: F_,
  number: vh,
  object: b_,
  oboolean: k_,
  onumber: $_,
  optional: L_,
  ostring: j_,
  pipeline: U_,
  preprocess: M_,
  promise: N_,
  record: x_,
  set: I_,
  strictObject: w_,
  string: mh,
  symbol: h_,
  transformer: Su,
  tuple: D_,
  undefined: d_,
  union: __,
  unknown: g_,
  void: m_,
  NEVER: z_,
  ZodIssueCode: H,
  quotelessJson: Kw,
  ZodError: hr
});
const B_ = /^aleo1.{58}$/i, V_ = /^AViewKey1.{44}$/i, K_ = /^APrivateKey1.{47}$/i, W_ = /^at1.{60}$/i, H_ = /^\d+field$/, G_ = /^\d+u32$/, Z_ = /^\d+u64$/, ME = gr.string().regex(B_), UE = gr.string().regex(V_), jE = gr.string().regex(K_), $E = gr.string().regex(W_), kE = gr.string().regex(H_), qE = gr.string().regex(G_), zE = gr.string().regex(Z_);
var $a;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})($a || ($a = {}));
var ka;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(ka || (ka = {}));
var qa;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(qa || (qa = {}));
var za;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(za || (za = {}));
var Du;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Du || (Du = {}));
const BE = gr.nativeEnum($a), VE = gr.nativeEnum(ka), KE = gr.nativeEnum(za), WE = gr.nativeEnum(qa);
function wh(t) {
  fr(() => (Je().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Je().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function Q_(t) {
  fr(() => (Je().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Je().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function _h(t) {
  fr(() => (Je().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Je().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function yr() {
  const [t, e] = Js(void 0);
  return wh((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), _h((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), Q_((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), fr(() => {
    async function r() {
      const s = await (await Je()).getSession();
      e(s);
    }
    return r(), Nn.on("session_change", r), () => {
      Nn.off("session_change", r);
    };
  }, []), t;
}
function Ns(t) {
  fr(() => (Je().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Je().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const xu = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (l, u) => {
    const h = typeof l == "function" ? l(e) : l;
    if (!Object.is(h, e)) {
      const f = e;
      e = u ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), r.forEach((p) => p(e, f));
    }
  }, s = () => e, a = { setState: n, getState: s, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return e = t(n, s, a), a;
}, Y_ = (t) => t ? xu(t) : xu;
var Ba = { exports: {} }, aa = {}, Ys = { exports: {} }, oa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function J_() {
  if (Ou)
    return oa;
  Ou = 1;
  var t = pn;
  function e(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, o = t.useDebugValue;
  function a(f, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), E = v[0].inst, S = v[1];
    return i(function() {
      E.value = m, E.getSnapshot = p, l(E) && S({ inst: E });
    }, [f, m, p]), s(function() {
      return l(E) && S({ inst: E }), f(function() {
        l(E) && S({ inst: E });
      });
    }, [f]), o(m), m;
  }
  function l(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var m = p();
      return !r(f, m);
    } catch {
      return !0;
    }
  }
  function u(f, p) {
    return p();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return oa.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : h, oa;
}
var ca = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iu;
function X_() {
  return Iu || (Iu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = pn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var b = arguments.length, D = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          D[g - 1] = arguments[g];
        n("error", x, D);
      }
    }
    function n(x, b, D) {
      {
        var g = e.ReactDebugCurrentFrame, c = g.getStackAddendum();
        c !== "" && (b += "%s", D = D.concat([c]));
        var y = D.map(function(R) {
          return String(R);
        });
        y.unshift("Warning: " + b), Function.prototype.apply.call(console[x], console, y);
      }
    }
    function s(x, b) {
      return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = t.useState, a = t.useEffect, l = t.useLayoutEffect, u = t.useDebugValue, h = !1, f = !1;
    function p(x, b, D) {
      h || t.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!f) {
        var c = b();
        i(g, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var y = o({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), R = y[0].inst, N = y[1];
      return l(function() {
        R.value = g, R.getSnapshot = b, m(R) && N({
          inst: R
        });
      }, [x, g, b]), a(function() {
        m(R) && N({
          inst: R
        });
        var U = function() {
          m(R) && N({
            inst: R
          });
        };
        return x(U);
      }, [x]), u(g), g;
    }
    function m(x) {
      var b = x.getSnapshot, D = x.value;
      try {
        var g = b();
        return !i(D, g);
      } catch {
        return !0;
      }
    }
    function v(x, b, D) {
      return b();
    }
    var E = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", S = !E, A = S ? v : p, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : A;
    ca.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ca;
}
var Cu;
function So() {
  return Cu || (Cu = 1, process.env.NODE_ENV === "production" ? Ys.exports = J_() : Ys.exports = X_()), Ys.exports;
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
var Ru;
function e1() {
  if (Ru)
    return aa;
  Ru = 1;
  var t = pn, e = So();
  function r(u, h) {
    return u === h && (u !== 0 || 1 / u === 1 / h) || u !== u && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
  return aa.useSyncExternalStoreWithSelector = function(u, h, f, p, m) {
    var v = i(null);
    if (v.current === null) {
      var E = { hasValue: !1, value: null };
      v.current = E;
    } else
      E = v.current;
    v = a(function() {
      function A(g) {
        if (!w) {
          if (w = !0, x = g, g = p(g), m !== void 0 && E.hasValue) {
            var c = E.value;
            if (m(c, g))
              return b = c;
          }
          return b = g;
        }
        if (c = b, n(x, g))
          return c;
        var y = p(g);
        return m !== void 0 && m(c, y) ? c : (x = g, b = y);
      }
      var w = !1, x, b, D = f === void 0 ? null : f;
      return [function() {
        return A(h());
      }, D === null ? void 0 : function() {
        return A(D());
      }];
    }, [h, f, p, m]);
    var S = s(u, v[0], v[1]);
    return o(function() {
      E.hasValue = !0, E.value = S;
    }, [S]), l(S), S;
  }, aa;
}
var ua = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tu;
function t1() {
  return Tu || (Tu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = pn, e = So();
    function r(h, f) {
      return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    function u(h, f, p, m, v) {
      var E = i(null), S;
      E.current === null ? (S = {
        hasValue: !1,
        value: null
      }, E.current = S) : S = E.current;
      var A = a(function() {
        var D = !1, g, c, y = function(V) {
          if (!D) {
            D = !0, g = V;
            var G = m(V);
            if (v !== void 0 && S.hasValue) {
              var C = S.value;
              if (v(C, G))
                return c = C, C;
            }
            return c = G, G;
          }
          var L = g, Z = c;
          if (n(L, V))
            return Z;
          var B = m(V);
          return v !== void 0 && v(Z, B) ? Z : (g = V, c = B, B);
        }, R = p === void 0 ? null : p, N = function() {
          return y(f());
        }, U = R === null ? void 0 : function() {
          return y(R());
        };
        return [N, U];
      }, [f, p, m, v]), w = A[0], x = A[1], b = s(h, w, x);
      return o(function() {
        S.hasValue = !0, S.value = b;
      }, [b]), l(b), b;
    }
    ua.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ua;
}
process.env.NODE_ENV === "production" ? Ba.exports = e1() : Ba.exports = t1();
var r1 = Ba.exports;
const n1 = /* @__PURE__ */ Di(r1), { useDebugValue: s1 } = pn, { useSyncExternalStoreWithSelector: i1 } = n1;
function a1(t, e = t.getState, r) {
  const n = i1(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return s1(n), n;
}
const Pu = (t) => {
  const e = typeof t == "function" ? Y_(t) : t, r = (n, s) => a1(e, n, s);
  return Object.assign(r, e), r;
}, o1 = (t) => t ? Pu(t) : Pu;
function c1(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), a = (i = r.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => r.setItem(
      s,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (s) => r.removeItem(s)
  };
}
const _s = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return _s(n)(r);
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
        return _s(n)(r);
      }
    };
  }
}, u1 = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (S) => S,
    version: 0,
    merge: (S, A) => ({
      ...A,
      ...S
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u;
  try {
    u = i.getStorage();
  } catch {
  }
  if (!u)
    return t(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...S);
      },
      n,
      s
    );
  const h = _s(i.serialize), f = () => {
    const S = i.partialize({ ...n() });
    let A;
    const w = h({ state: S, version: i.version }).then(
      (x) => u.setItem(i.name, x)
    ).catch((x) => {
      A = x;
    });
    if (A)
      throw A;
    return w;
  }, p = s.setState;
  s.setState = (S, A) => {
    p(S, A), f();
  };
  const m = t(
    (...S) => {
      r(...S), f();
    },
    n,
    s
  );
  let v;
  const E = () => {
    var S;
    if (!u)
      return;
    o = !1, a.forEach((w) => w(n()));
    const A = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, n())) || void 0;
    return _s(u.getItem.bind(u))(i.name).then((w) => {
      if (w)
        return i.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var x;
      return v = i.merge(
        w,
        (x = n()) != null ? x : m
      ), r(v, !0), f();
    }).then(() => {
      A == null || A(v, void 0), o = !0, l.forEach((w) => w(v));
    }).catch((w) => {
      A == null || A(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (S) => {
      i = {
        ...i,
        ...S
      }, S.getStorage && (u = S.getStorage());
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => E(),
    hasHydrated: () => o,
    onHydrate: (S) => (a.add(S), () => {
      a.delete(S);
    }),
    onFinishHydration: (S) => (l.add(S), () => {
      l.delete(S);
    })
  }, E(), v || m;
}, l1 = (t, e) => (r, n, s) => {
  let i = {
    storage: c1(() => localStorage),
    partialize: (E) => E,
    version: 0,
    merge: (E, S) => ({
      ...S,
      ...E
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return t(
      (...E) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...E);
      },
      n,
      s
    );
  const h = () => {
    const E = i.partialize({ ...n() });
    return u.setItem(i.name, {
      state: E,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (E, S) => {
    f(E, S), h();
  };
  const p = t(
    (...E) => {
      r(...E), h();
    },
    n,
    s
  );
  let m;
  const v = () => {
    var E, S;
    if (!u)
      return;
    o = !1, a.forEach((w) => {
      var x;
      return w((x = n()) != null ? x : p);
    });
    const A = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, (E = n()) != null ? E : p)) || void 0;
    return _s(u.getItem.bind(u))(i.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var x;
      return m = i.merge(
        w,
        (x = n()) != null ? x : p
      ), r(m, !0), h();
    }).then(() => {
      A == null || A(m, void 0), m = n(), o = !0, l.forEach((w) => w(m));
    }).catch((w) => {
      A == null || A(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (E) => {
      i = {
        ...i,
        ...E
      }, E.storage && (u = E.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => o,
    onHydrate: (E) => (a.add(E), () => {
      a.delete(E);
    }),
    onFinishHydration: (E) => (l.add(E), () => {
      l.delete(E);
    })
  }, i.skipHydration || v(), m || p;
}, h1 = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? u1(t, e) : l1(t, e), d1 = h1, Qr = o1()(
  d1((t, e) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (r) => {
      t({ account: r });
    },
    setChainId: (r) => {
      t({ chainId: r });
    },
    onDisconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      });
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
class Ls {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    const r = {
      listener: e
    };
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Es = typeof window > "u" || "Deno" in window;
function rr() {
}
function f1(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Va(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Eh(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function ss(t, e, r) {
  return ji(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function zr(t, e, r) {
  return ji(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function Au(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a
  } = t;
  if (ji(o)) {
    if (n) {
      if (e.queryHash !== Do(o, e.options))
        return !1;
    } else if (!In(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || typeof s < "u" && s !== e.state.fetchStatus || i && !i(e));
}
function Nu(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: s,
    mutationKey: i
  } = t;
  if (ji(i)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (un(e.options.mutationKey) !== un(i))
        return !1;
    } else if (!In(e.options.mutationKey, i))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e));
}
function Do(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || un)(t);
}
function un(t) {
  return JSON.stringify(t, (e, r) => Wa(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r);
}
function In(t, e) {
  return Sh(t, e);
}
function Sh(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Sh(t[r], e[r])) : !1;
}
function Dh(t, e) {
  if (t === e)
    return t;
  const r = Lu(t) && Lu(e);
  if (r || Wa(t) && Wa(e)) {
    const n = r ? t.length : Object.keys(t).length, s = r ? e : Object.keys(e), i = s.length, o = r ? [] : {};
    let a = 0;
    for (let l = 0; l < i; l++) {
      const u = r ? l : s[l];
      o[u] = Dh(t[u], e[u]), o[u] === t[u] && a++;
    }
    return n === i && a === n ? t : o;
  }
  return e;
}
function Ka(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Lu(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Wa(t) {
  if (!Fu(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!Fu(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Fu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ji(t) {
  return Array.isArray(t);
}
function xh(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Mu(t) {
  xh(0).then(t);
}
function p1() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Ha(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Dh(t, e) : e;
}
class g1 extends Ls {
  constructor() {
    super(), this.setup = (e) => {
      if (!Es && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused !== e && (this.focused = e, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Ei = new g1(), Uu = ["online", "offline"];
class y1 extends Ls {
  constructor() {
    super(), this.setup = (e) => {
      if (!Es && window.addEventListener) {
        const r = () => e();
        return Uu.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          Uu.forEach((n) => {
            window.removeEventListener(n, r);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online !== e && (this.online = e, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const Si = new y1();
function m1(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function $i(t) {
  return (t ?? "online") === "online" ? Si.isOnline() : !0;
}
class Oh {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function ii(t) {
  return t instanceof Oh;
}
function Ih(t) {
  let e = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((S, A) => {
    i = S, o = A;
  }), l = (S) => {
    n || (m(new Oh(S)), t.abort == null || t.abort());
  }, u = () => {
    e = !0;
  }, h = () => {
    e = !1;
  }, f = () => !Ei.isFocused() || t.networkMode !== "always" && !Si.isOnline(), p = (S) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(S), s == null || s(), i(S));
  }, m = (S) => {
    n || (n = !0, t.onError == null || t.onError(S), s == null || s(), o(S));
  }, v = () => new Promise((S) => {
    s = (A) => {
      const w = n || !f();
      return w && S(A), w;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    s = void 0, n || t.onContinue == null || t.onContinue();
  }), E = () => {
    if (n)
      return;
    let S;
    try {
      S = t.fn();
    } catch (A) {
      S = Promise.reject(A);
    }
    Promise.resolve(S).then(p).catch((A) => {
      var w, x;
      if (n)
        return;
      const b = (w = t.retry) != null ? w : 3, D = (x = t.retryDelay) != null ? x : m1, g = typeof D == "function" ? D(r, A) : D, c = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, A);
      if (e || !c) {
        m(A);
        return;
      }
      r++, t.onFail == null || t.onFail(r, A), xh(g).then(() => {
        if (f())
          return v();
      }).then(() => {
        e ? m(A) : E();
      });
    });
  };
  return $i(t.networkMode) ? E() : v().then(E), {
    promise: a,
    cancel: l,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: u,
    continueRetry: h
  };
}
const xo = console;
function v1() {
  let t = [], e = 0, r = (h) => {
    h();
  }, n = (h) => {
    h();
  };
  const s = (h) => {
    let f;
    e++;
    try {
      f = h();
    } finally {
      e--, e || a();
    }
    return f;
  }, i = (h) => {
    e ? t.push(h) : Mu(() => {
      r(h);
    });
  }, o = (h) => (...f) => {
    i(() => {
      h(...f);
    });
  }, a = () => {
    const h = t;
    t = [], h.length && Mu(() => {
      n(() => {
        h.forEach((f) => {
          r(f);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    }
  };
}
const mt = v1();
class Ch {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Va(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (Es ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class b1 extends Ch {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || xo, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || w1(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, r) {
    const n = Ha(this.state.data, e, this.options);
    return this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: r
    });
  }
  cancel(e) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(rr).catch(rr) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Eh(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, r) {
    var n, s;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const m = this.observers.find((v) => v.options.queryFn);
      m && this.setOptions(m.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const o = p1(), a = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, l = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => {
          if (o)
            return this.abortSignalConsumed = !0, o.signal;
        }
      });
    };
    l(a);
    const u = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), h = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: u
    };
    if (l(h), (n = this.options.behavior) == null || n.onFetch(h), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = h.fetchOptions) == null ? void 0 : s.meta)) {
      var f;
      this.dispatch({
        type: "fetch",
        meta: (f = h.fetchOptions) == null ? void 0 : f.meta
      });
    }
    const p = (m) => {
      if (ii(m) && m.silent || this.dispatch({
        type: "error",
        error: m
      }), !ii(m)) {
        var v, E, S, A;
        (v = (E = this.cache.config).onError) == null || v.call(E, m, this), (S = (A = this.cache.config).onSettled) == null || S.call(A, this.state.data, m, this), process.env.NODE_ENV !== "production" && this.logger.error(m);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Ih({
      fn: h.fetchFn,
      abort: o == null ? void 0 : o.abort.bind(o),
      onSuccess: (m) => {
        var v, E, S, A;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), p(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(m), (v = (E = this.cache.config).onSuccess) == null || v.call(E, m, this), (S = (A = this.cache.config).onSettled) == null || S.call(A, m, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: p,
      onFail: (m, v) => {
        this.dispatch({
          type: "failed",
          failureCount: m,
          error: v
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const r = (n) => {
      var s, i;
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (s = e.meta) != null ? s : null,
            fetchStatus: $i(this.options.networkMode) ? "fetching" : "paused",
            ...!n.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (i = e.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const o = e.error;
          return ii(o) && o.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...n,
            error: o,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: o,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), mt.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function w1(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = typeof e < "u", n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class _1 extends Ls {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    const i = r.queryKey, o = (s = r.queryHash) != null ? s : Do(i, r);
    let a = this.get(o);
    return a || (a = new b1({
      cache: this,
      logger: e.getLogger(),
      queryKey: i,
      queryHash: o,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(a)), a;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = this.queriesMap[e.queryHash];
    r && (e.destroy(), this.queries = this.queries.filter((n) => n !== e), r === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    mt.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, r) {
    const [n] = zr(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => Au(n, s));
  }
  findAll(e, r) {
    const [n] = zr(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((s) => Au(n, s)) : this.queries;
  }
  notify(e) {
    mt.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    mt.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    mt.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class E1 extends Ch {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || xo, this.observers = [], this.state = e.state || S1(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((r) => r !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, r;
    return (e = (r = this.retryer) == null ? void 0 : r.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var c;
      return this.retryer = Ih({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, R) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: R
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (c = this.options.retry) != null ? c : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, s, i, o, a, l, u, h;
      if (!r) {
        var f, p, m, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((f = (p = this.mutationCache.config).onMutate) == null ? void 0 : f.call(p, this.state.variables, this));
        const y = await ((m = (v = this.options).onMutate) == null ? void 0 : m.call(v, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
          variables: this.state.variables
        });
      }
      const c = await e();
      return await ((n = (s = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(s, c, this.state.variables, this.state.context, this)), await ((i = (o = this.options).onSuccess) == null ? void 0 : i.call(o, c, this.state.variables, this.state.context)), await ((a = (l = this.mutationCache.config).onSettled) == null ? void 0 : a.call(l, c, null, this.state.variables, this.state.context, this)), await ((u = (h = this.options).onSettled) == null ? void 0 : u.call(h, c, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: c
      }), c;
    } catch (c) {
      try {
        var E, S, A, w, x, b, D, g;
        throw await ((E = (S = this.mutationCache.config).onError) == null ? void 0 : E.call(S, c, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(c), await ((A = (w = this.options).onError) == null ? void 0 : A.call(w, c, this.state.variables, this.state.context)), await ((x = (b = this.mutationCache.config).onSettled) == null ? void 0 : x.call(b, void 0, c, this.state.variables, this.state.context, this)), await ((D = (g = this.options).onSettled) == null ? void 0 : D.call(g, void 0, c, this.state.variables, this.state.context)), c;
      } finally {
        this.dispatch({
          type: "error",
          error: c
        });
      }
    }
  }
  dispatch(e) {
    const r = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...n,
            isPaused: !0
          };
        case "continue":
          return {
            ...n,
            isPaused: !1
          };
        case "loading":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !$i(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), mt.batch(() => {
      this.observers.forEach((n) => {
        n.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function S1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class D1 extends Ls {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const s = new E1({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(s), s;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((r) => r !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    mt.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => Nu(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => Nu(e, r));
  }
  notify(e) {
    mt.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return mt.batch(() => r.reduce((n, s) => n.then(() => s.continue().catch(rr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function x1() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, s, i, o;
        const a = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, l = (n = t.fetchOptions) == null || (s = n.meta) == null ? void 0 : s.fetchMore, u = l == null ? void 0 : l.pageParam, h = (l == null ? void 0 : l.direction) === "forward", f = (l == null ? void 0 : l.direction) === "backward", p = ((i = t.state.data) == null ? void 0 : i.pages) || [], m = ((o = t.state.data) == null ? void 0 : o.pageParams) || [];
        let v = m, E = !1;
        const S = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var c;
              if ((c = t.signal) != null && c.aborted)
                E = !0;
              else {
                var y;
                (y = t.signal) == null || y.addEventListener("abort", () => {
                  E = !0;
                });
              }
              return t.signal;
            }
          });
        }, A = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (g, c, y, R) => (v = R ? [c, ...v] : [...v, c], R ? [y, ...g] : [...g, y]), x = (g, c, y, R) => {
          if (E)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !c && g.length)
            return Promise.resolve(g);
          const N = {
            queryKey: t.queryKey,
            pageParam: y,
            meta: t.options.meta
          };
          S(N);
          const U = A(N);
          return Promise.resolve(U).then((G) => w(g, y, G, R));
        };
        let b;
        if (!p.length)
          b = x([]);
        else if (h) {
          const g = typeof u < "u", c = g ? u : ju(t.options, p);
          b = x(p, g, c);
        } else if (f) {
          const g = typeof u < "u", c = g ? u : O1(t.options, p);
          b = x(p, g, c, !0);
        } else {
          v = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (a && p[0] ? a(p[0], 0, p) : !0) ? x([], g, m[0]) : Promise.resolve(w([], m[0], p[0]));
          for (let y = 1; y < p.length; y++)
            b = b.then((R) => {
              if (a && p[y] ? a(p[y], y, p) : !0) {
                const U = g ? m[y] : ju(t.options, R);
                return x(R, g, U);
              }
              return Promise.resolve(w(R, m[y], p[y]));
            });
        }
        return b.then((g) => ({
          pages: g,
          pageParams: v
        }));
      };
    }
  };
}
function ju(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function O1(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class I1 {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new _1(), this.mutationCache = e.mutationCache || new D1(), this.logger = e.logger || xo, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Ei.subscribe(() => {
      Ei.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Si.subscribe(() => {
      Si.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = zr(e, r);
    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e, r, n) {
    const s = ss(e, r, n), i = this.getQueryData(s.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(s);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: r,
      state: n
    }) => {
      const s = n.data;
      return [r, s];
    });
  }
  setQueryData(e, r, n) {
    const s = this.queryCache.find(e), i = s == null ? void 0 : s.state.data, o = f1(r, i);
    if (typeof o > "u")
      return;
    const a = ss(e), l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(o, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return mt.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = zr(e, r), s = this.queryCache;
    mt.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, r, n) {
    const [s, i] = zr(e, r, n), o = this.queryCache, a = {
      type: "active",
      ...s
    };
    return mt.batch(() => (o.findAll(s).forEach((l) => {
      l.reset();
    }), this.refetchQueries(a, i)));
  }
  cancelQueries(e, r, n) {
    const [s, i = {}] = zr(e, r, n);
    typeof i.revert > "u" && (i.revert = !0);
    const o = mt.batch(() => this.queryCache.findAll(s).map((a) => a.cancel(i)));
    return Promise.all(o).then(rr).catch(rr);
  }
  invalidateQueries(e, r, n) {
    const [s, i] = zr(e, r, n);
    return mt.batch(() => {
      var o, a;
      if (this.queryCache.findAll(s).forEach((u) => {
        u.invalidate();
      }), s.refetchType === "none")
        return Promise.resolve();
      const l = {
        ...s,
        type: (o = (a = s.refetchType) != null ? a : s.type) != null ? o : "active"
      };
      return this.refetchQueries(l, i);
    });
  }
  refetchQueries(e, r, n) {
    const [s, i] = zr(e, r, n), o = mt.batch(() => this.queryCache.findAll(s).filter((l) => !l.isDisabled()).map((l) => {
      var u;
      return l.fetch(void 0, {
        ...i,
        cancelRefetch: (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let a = Promise.all(o).then(rr);
    return i != null && i.throwOnError || (a = a.catch(rr)), a;
  }
  fetchQuery(e, r, n) {
    const s = ss(e, r, n), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const o = this.queryCache.build(this, i);
    return o.isStaleByTime(i.staleTime) ? o.fetch(i) : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(rr).catch(rr);
  }
  fetchInfiniteQuery(e, r, n) {
    const s = ss(e, r, n);
    return s.behavior = x1(), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(rr).catch(rr);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, r) {
    const n = this.queryDefaults.find((s) => un(e) === un(s.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => In(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((s) => In(e, s.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((s) => un(e) === un(s.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => In(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((s) => In(e, s.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = Do(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class C1 extends Ls {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), $u(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ga(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Ga(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Ka(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const i = this.hasListeners();
    i && ku(this.currentQuery, s, this.options, n) && this.executeFetch(), this.updateResult(r), i && (this.currentQuery !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    i && (this.currentQuery !== s || this.options.enabled !== n.enabled || o !== this.currentRefetchInterval) && this.updateRefetchInterval(o);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return T1(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const r = {};
    return Object.keys(e).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(n), e[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    const r = this.client.defaultQueryOptions(e), n = this.client.getQueryCache().build(this.client, r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    var r;
    return this.executeFetch({
      ...e,
      cancelRefetch: (r = e.cancelRefetch) != null ? r : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(rr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Es || this.currentResult.isStale || !Va(this.options.staleTime))
      return;
    const r = Eh(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(Es || this.options.enabled === !1 || !Va(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Ei.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, r) {
    const n = this.currentQuery, s = this.options, i = this.currentResult, o = this.currentResultState, a = this.currentResultOptions, l = e !== n, u = l ? e.state : this.currentQueryInitialState, h = l ? this.currentResult : this.previousQueryResult, {
      state: f
    } = e;
    let {
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      fetchStatus: E,
      status: S
    } = f, A = !1, w = !1, x;
    if (r._optimisticResults) {
      const y = this.hasListeners(), R = !y && $u(e, r), N = y && ku(e, n, r, s);
      (R || N) && (E = $i(e.options.networkMode) ? "fetching" : "paused", p || (S = "loading")), r._optimisticResults === "isRestoring" && (E = "idle");
    }
    if (r.keepPreviousData && !f.dataUpdatedAt && h != null && h.isSuccess && S !== "error")
      x = h.data, p = h.dataUpdatedAt, S = h.status, A = !0;
    else if (r.select && typeof f.data < "u")
      if (i && f.data === (o == null ? void 0 : o.data) && r.select === this.selectFn)
        x = this.selectResult;
      else
        try {
          this.selectFn = r.select, x = r.select(f.data), x = Ha(i == null ? void 0 : i.data, x, r), this.selectResult = x, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      x = f.data;
    if (typeof r.placeholderData < "u" && typeof x > "u" && S === "loading") {
      let y;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        y = i.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (R) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(R), this.selectError = R;
        }
      typeof y < "u" && (S = "success", x = Ha(i == null ? void 0 : i.data, y, r), w = !0);
    }
    this.selectError && (m = this.selectError, x = this.selectResult, v = Date.now(), S = "error");
    const b = E === "fetching", D = S === "loading", g = S === "error";
    return {
      status: S,
      fetchStatus: E,
      isLoading: D,
      isSuccess: S === "success",
      isError: g,
      isInitialLoading: D && b,
      data: x,
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: b,
      isRefetching: b && !D,
      isLoadingError: g && f.dataUpdatedAt === 0,
      isPaused: E === "paused",
      isPlaceholderData: w,
      isPreviousData: A,
      isRefetchError: g && f.dataUpdatedAt !== 0,
      isStale: Oo(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Ka(n, r))
      return;
    this.currentResult = n;
    const s = {
      cache: !0
    }, i = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: o
      } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !this.trackedProps.size)
        return !0;
      const l = new Set(a ?? this.trackedProps);
      return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some((u) => {
        const h = u;
        return this.currentResult[h] !== r[h] && l.has(h);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0), this.notify({
      ...s,
      ...e
    });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery)
      return;
    const r = this.currentQuery;
    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const r = {};
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !ii(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    mt.batch(() => {
      if (e.onSuccess) {
        var r, n, s, i;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (s = (i = this.options).onSettled) == null || s.call(i, this.currentResult.data, null);
      } else if (e.onError) {
        var o, a, l, u;
        (o = (a = this.options).onError) == null || o.call(a, this.currentResult.error), (l = (u = this.options).onSettled) == null || l.call(u, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: h
      }) => {
        h(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function R1(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function $u(t, e) {
  return R1(t, e) || t.state.dataUpdatedAt > 0 && Ga(t, e, e.refetchOnMount);
}
function Ga(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Oo(t, e);
  }
  return !1;
}
function ku(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && Oo(t, r);
}
function Oo(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function T1(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !Ka(t.getCurrentResult(), e);
}
var P1 = So();
const A1 = P1.useSyncExternalStore, qu = /* @__PURE__ */ $t.createContext(void 0), Rh = /* @__PURE__ */ $t.createContext(!1);
function Th(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = qu), window.ReactQueryClientContext) : qu);
}
const N1 = ({
  context: t
} = {}) => {
  const e = $t.useContext(Th(t, $t.useContext(Rh)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, L1 = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  $t.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const s = Th(r, n);
  return /* @__PURE__ */ $t.createElement(Rh.Provider, {
    value: !r && n
  }, /* @__PURE__ */ $t.createElement(s.Provider, {
    value: t
  }, e));
}, Ph = /* @__PURE__ */ $t.createContext(!1), F1 = () => $t.useContext(Ph);
Ph.Provider;
function M1() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
const U1 = /* @__PURE__ */ $t.createContext(M1()), j1 = () => $t.useContext(U1);
function $1(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const k1 = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, q1 = (t) => {
  $t.useEffect(() => {
    t.clearReset();
  }, [t]);
}, z1 = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && $1(r, [t.error, n]), B1 = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, V1 = (t, e) => t.isLoading && t.isFetching && !e, K1 = (t, e, r) => (t == null ? void 0 : t.suspense) && V1(e, r), W1 = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function H1(t, e) {
  const r = N1({
    context: t.context
  }), n = F1(), s = j1(), i = r.defaultQueryOptions(t);
  i._optimisticResults = n ? "isRestoring" : "optimistic", i.onError && (i.onError = mt.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = mt.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = mt.batchCalls(i.onSettled)), B1(i), k1(i, s), q1(s);
  const [o] = $t.useState(() => new e(r, i)), a = o.getOptimisticResult(i);
  if (A1($t.useCallback((l) => {
    const u = n ? () => {
    } : o.subscribe(mt.batchCalls(l));
    return o.updateResult(), u;
  }, [o, n]), () => o.getCurrentResult(), () => o.getCurrentResult()), $t.useEffect(() => {
    o.setOptions(i, {
      listeners: !1
    });
  }, [i, o]), K1(i, a, n))
    throw W1(i, o, s);
  if (z1({
    result: a,
    errorResetBoundary: s,
    useErrorBoundary: i.useErrorBoundary,
    query: o.getCurrentQuery()
  }))
    throw a.error;
  return i.notifyOnChangeProps ? a : o.trackResult(a);
}
function G1(t, e, r) {
  const n = ss(t, e, r);
  return H1(n, C1);
}
function Io() {
  const [t, e] = Js(void 0), [r, n] = Js(void 0), [s, i] = Js(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function Ah(t, e) {
  const n = await (await Je()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Fs({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return G1(
    t,
    async () => Ah(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Ms(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: o } = Io();
  async function a(l) {
    try {
      o(!0), i(void 0);
      const u = await Ah(t ?? l);
      return s(u), u;
    } catch (u) {
      throw i(u), u;
    } finally {
      o(!1);
    }
  }
  return { data: e, error: r, loading: n, request: a };
}
const zu = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, HE = () => {
  const t = yr(), e = "aleo:1", [r, n, s] = Qr((h) => [h.account, h.setAccount, h.onDisconnect]), { refetch: i, data: o, error: a, isLoading: l } = Fs({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    wcParams: {
      topic: t == null ? void 0 : t.topic,
      chainId: e,
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  Ns(({ params: h, topic: f }) => {
    if (h.event.name === "accountSelected" && t && t.topic === f) {
      const m = h.event.address ?? h.event.data.address, v = h.chainId.split(":")[0], E = h.chainId.split(":")[1];
      n({
        network: v,
        chainId: E,
        address: m,
        shortenedAddress: zu(m)
      });
    }
  }), _h(({ params: h, topic: f }) => {
    const p = h.event.address ?? h.event.data.address, m = h.chainId.split(":")[0], v = h.chainId.split(":")[1];
    n({
      network: m,
      chainId: v,
      address: p,
      shortenedAddress: zu(p)
    });
  }), wh(({ params: h, topic: f }) => {
    s();
  }), fr(() => {
    t && !l && i();
  }, [t == null ? void 0 : t.topic]), fr(() => {
    if (o) {
      const h = o, f = h == null ? void 0 : h.account;
      f && n(f);
    }
  }, [o]);
  const u = a ? a.message : o && o.error;
  return {
    account: r,
    error: u,
    loading: l
  };
}, GE = ({ address: t, multisig: e }) => {
  const r = yr(), [n] = Qr((p) => [p.account]), s = "aleo:1", { refetch: i, data: o, error: a, isLoading: l } = Fs({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: s,
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    }
  });
  Ns(({ params: p, topic: m }) => {
    const v = p.event.name, E = p.event.address ?? p.event.data.address;
    ["accountSelected", "selectedAccountSynced", "sharedAccountSynced"].includes(v) && r && r.topic === m && E === (n == null ? void 0 : n.address) && !l && i();
  }), fr(() => {
    r && !l && i();
  }, [r == null ? void 0 : r.topic]);
  const u = a ? a.message : o && o.error, h = o;
  return { balances: h == null ? void 0 : h.balances, error: u, loading: l };
};
function ZE() {
  const { data: t, error: e, loading: r, setData: n, setError: s, setLoading: i } = Io();
  async function o() {
    try {
      i(!0), s(void 0);
      const l = await (await Je()).connect({
        requiredNamespaces: {
          aleo: {
            methods: _o,
            chains: Mi,
            events: Eo
          }
        }
      });
      return n(l), Nn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (a) {
      throw s(a), a;
    } finally {
      i(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: o };
}
const QE = () => {
  const t = yr(), { request: e, data: r, error: n, loading: s } = Ms({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), i = n ? n.message : r && r.error, o = r;
  return { createSharedState: () => {
    e();
  }, data: o == null ? void 0 : o.data, loading: s, error: i };
};
var Za = { exports: {} }, la, Bu;
function Z1() {
  if (Bu)
    return la;
  Bu = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  la = function(h, f) {
    f = f || {};
    var p = typeof h;
    if (p === "string" && h.length > 0)
      return o(h);
    if (p === "number" && isFinite(h))
      return f.long ? l(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function o(h) {
    if (h = String(h), !(h.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (f) {
        var p = parseFloat(f[1]), m = (f[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * i;
          case "weeks":
          case "week":
          case "w":
            return p * s;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function a(h) {
    var f = Math.abs(h);
    return f >= n ? Math.round(h / n) + "d" : f >= r ? Math.round(h / r) + "h" : f >= e ? Math.round(h / e) + "m" : f >= t ? Math.round(h / t) + "s" : h + "ms";
  }
  function l(h) {
    var f = Math.abs(h);
    return f >= n ? u(h, f, n, "day") : f >= r ? u(h, f, r, "hour") : f >= e ? u(h, f, e, "minute") : f >= t ? u(h, f, t, "second") : h + " ms";
  }
  function u(h, f, p, m) {
    var v = f >= p * 1.5;
    return Math.round(h / p) + " " + m + (v ? "s" : "");
  }
  return la;
}
function Q1(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = i, r.enable = s, r.enabled = o, r.humanize = Z1(), r.destroy = u, Object.keys(t).forEach((h) => {
    r[h] = t[h];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(h) {
    let f = 0;
    for (let p = 0; p < h.length; p++)
      f = (f << 5) - f + h.charCodeAt(p), f |= 0;
    return r.colors[Math.abs(f) % r.colors.length];
  }
  r.selectColor = e;
  function r(h) {
    let f, p = null, m, v;
    function E(...S) {
      if (!E.enabled)
        return;
      const A = E, w = Number(/* @__PURE__ */ new Date()), x = w - (f || w);
      A.diff = x, A.prev = f, A.curr = w, f = w, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let b = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (g, c) => {
        if (g === "%%")
          return "%";
        b++;
        const y = r.formatters[c];
        if (typeof y == "function") {
          const R = S[b];
          g = y.call(A, R), S.splice(b, 1), b--;
        }
        return g;
      }), r.formatArgs.call(A, S), (A.log || r.log).apply(A, S);
    }
    return E.namespace = h, E.useColors = r.useColors(), E.color = r.selectColor(h), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(h)), v),
      set: (S) => {
        p = S;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function n(h, f) {
    const p = r(this.namespace + (typeof f > "u" ? ":" : f) + h);
    return p.log = this.log, p;
  }
  function s(h) {
    r.save(h), r.namespaces = h, r.names = [], r.skips = [];
    let f;
    const p = (typeof h == "string" ? h : "").split(/[\s,]+/), m = p.length;
    for (f = 0; f < m; f++)
      p[f] && (h = p[f].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
  }
  function i() {
    const h = [
      ...r.names.map(a),
      ...r.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), h;
  }
  function o(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let f, p;
    for (f = 0, p = r.skips.length; f < p; f++)
      if (r.skips[f].test(h))
        return !1;
    for (f = 0, p = r.names.length; f < p; f++)
      if (r.names[f].test(h))
        return !0;
    return !1;
  }
  function a(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Y1 = Q1;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = o(), e.destroy = (() => {
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
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let h = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (h++, p === "%c" && (f = h));
    }), l.splice(f, 0, u);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let l;
    try {
      l = e.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Y1(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Za, Za.exports);
var J1 = Za.exports;
const X1 = /* @__PURE__ */ Di(J1), Co = X1("wallet:sdk");
Co.enabled = !0;
const YE = (t) => {
  Co("useDecrypt", t);
  const e = yr(), { request: r, data: n, error: s, loading: i } = Ms({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), o = s ? s.message : n && n.error, a = n;
  return { decrypt: () => {
    t && r();
  }, plaintexts: a == null ? void 0 : a.plaintexts, loading: i, error: o };
};
function JE() {
  const t = yr(), { error: e, loading: r, setError: n, setLoading: s } = Io();
  async function i() {
    try {
      s(!0), n(void 0), await (await Je()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: yt("USER_DISCONNECTED")
      }), Nn.emit("session_change"), Qr.setState({ account: void 0 });
    } catch (o) {
      throw n(o), o;
    } finally {
      s(!1);
    }
  }
  return { error: e, loading: r, disconnect: i };
}
const XE = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = yr(), [s] = Qr((v) => [v.account]), { refetch: i, data: o, error: a, isLoading: l } = Fs({
    queryKey: ["useEvent", s == null ? void 0 : s.address, e, r, t ?? "", n == null ? void 0 : n.topic],
    enabled: !!t && !!n && !!s && (r ? !!e : !0),
    wcParams: {
      topic: (n == null ? void 0 : n.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: t,
          address: e
        }
      }
    }
  });
  Ns(({ params: v, topic: E }) => {
    const S = v.event.name;
    (S === "selectedAccountSynced" && !r || S === "sharedAccountSynced" && r) && i();
  });
  const u = !!n && !!s;
  fr(() => {
    u && !l && i();
  }, [u]);
  const h = () => {
    !!n && !!s && !l && i();
  }, f = a ? a.message : o && o.error, p = o, m = p == null ? void 0 : p.event;
  return { fetchEvent: h, event: m, error: f, loading: l };
}, eS = ({ filter: t, page: e }) => {
  const r = yr(), [n] = Qr((v) => [v.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: o, isLoading: a } = Fs({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n,
    wcParams: {
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
    }
  });
  Ns(({ id: v, params: E, topic: S }) => {
    const A = E.event.name, w = E.event.address ?? E.event.data.address;
    A === "selectedAccountSynced" && r && r.topic === S && w === (n == null ? void 0 : n.address) && !a && s();
  });
  const l = !!r && !!n;
  fr(() => {
    l && !a && s();
  }, [l]);
  const u = () => {
    !!r && !!n && !a && s();
  }, h = o ? o.message : i && i.error, f = i, p = f == null ? void 0 : f.events, m = (f == null ? void 0 : f.pageCount) ?? 0;
  return { fetchPage: u, events: p, error: h, loading: a, page: e, pageCount: m };
}, tS = (t) => {
  const e = yr(), { request: r, data: n, error: s, loading: i } = Ms({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), o = s ? s.message : n && n.error, a = n;
  return { importSharedState: () => {
    r();
  }, data: a == null ? void 0 : a.data, loading: i, error: o };
}, rS = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, nS = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = yr(), [i, o] = Qr((A) => [
    A.chainId,
    A.account
  ]), { refetch: a, data: l, error: u, isLoading: h } = Fs({
    queryKey: ["useRecords", o == null ? void 0 : o.address, t, e, r, n, s == null ? void 0 : s.topic],
    enabled: (e ? !!t : !0) && !!s && !!o,
    wcParams: {
      topic: s == null ? void 0 : s.topic,
      chainId: i,
      request: {
        jsonrpc: "2.0",
        method: "getRecords",
        params: {
          address: t,
          filter: r,
          page: n
        }
      }
    }
  }), f = !!s && !!o && (e ? !!t : !0);
  Ns(({ params: A }) => {
    const w = A.event.name;
    (w === "selectedAccountSynced" && !e || w === "sharedAccountSynced" && e) && a();
  });
  const p = () => {
    f && !h && a();
  }, m = u ? u.message : l && l.error, v = l, E = v == null ? void 0 : v.records, S = (v == null ? void 0 : v.pageCount) ?? 0;
  return { fetchPage: p, records: E, error: m, loading: h, page: n, pageCount: S };
}, sS = (t, e) => {
  const r = yr(), { request: n, data: s, error: i, loading: o } = Ms({
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
  }), a = i ? i.message : s && s.error;
  return { requestSignature: () => {
    n();
  }, response: s, loading: o, error: a };
}, iS = (t) => {
  const e = yr(), r = t == null ? void 0 : t.inputs.map((h) => typeof h == "string" ? h : h.plaintext), { request: n, data: s, error: i, loading: o } = Ms({
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
  }), a = i ? i.message : s && s.error, l = s;
  return { createEvent: () => {
    t && (Co("useCreateEvent requesting...", t), n());
  }, eventId: l == null ? void 0 : l.eventId, loading: o, error: a };
}, aS = async () => {
  const t = await Je(), e = await t.getSession(), r = "aleo:1";
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
    return Qr.setState({ account: n.account }), n;
  } catch (n) {
    const s = n.message;
    return console.error("getAccount error", s), { error: s };
  }
}, oS = async ({ address: t }) => {
  const e = await Je(), r = await e.getSession(), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: r == null ? void 0 : r.topic,
      chainId: n,
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("getBalance error", i), { error: i };
  }
}, cS = async () => {
  const t = await Je();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: _o,
          chains: Mi,
          events: Eo
        }
      }
    });
    return Nn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, uS = async (t) => {
  const e = await Je(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  const s = t == null ? void 0 : t.inputs.map((i) => typeof i == "string" ? i : i.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: s
        }
      }
    });
  } catch (i) {
    const o = i.message;
    return console.error("createEvent error", o), { error: o };
  }
}, lS = async () => {
  const t = await Je(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
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
    const s = n.message;
    return console.error("createSharedState error", s), { error: s };
  }
}, hS = async (t) => {
  const e = await Je(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
  } catch (s) {
    return console.error("decrypt error", s.message), { error: s.message };
  }
}, dS = async () => {
  const t = await Je(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: yt("USER_DISCONNECTED"),
      topic: e.topic
    }), Nn.emit("session_change"), Qr.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, fS = async ({
  id: t,
  address: e
}) => {
  const r = await Je(), n = await (r == null ? void 0 : r.getSession()), s = "aleo:1";
  if (!n || !s || !r)
    return { event: void 0, error: "no session, chainId, or connection" };
  const i = async () => await r.request({
    topic: (n == null ? void 0 : n.topic) ?? "",
    chainId: s,
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t,
        address: e
      }
    }
  });
  try {
    return await i();
  } catch (o) {
    const a = o.message;
    return console.error("getEvents error", a), { error: a };
  }
}, pS = async (t) => {
  const e = await Je(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = async (i = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: n,
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: i
      }
    }
  });
  try {
    return await s();
  } catch (i) {
    const o = i.message;
    return console.error("getEvents error", o), { error: o };
  }
}, gS = async (t) => {
  const e = await Je(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
  } catch (s) {
    const i = s.message;
    return console.error("importSharedState error", i), { error: i };
  }
}, yS = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await Je(), s = await (n == null ? void 0 : n.getSession()), i = "aleo:1";
  if (!s || !i || !n)
    return { error: "no session, chainId, or connection" };
  const o = async (a = 0) => await n.request({
    topic: s.topic,
    chainId: i,
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
    return await o();
  } catch (a) {
    const l = a.message;
    return console.error("getRecords error", l), { error: l };
  }
}, mS = async ({
  message: t,
  address: e
}) => {
  const r = await Je(), n = await (r == null ? void 0 : r.getSession()), s = "aleo:1";
  if (!n || !s || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: s,
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: e
        }
      }
    });
  } catch (i) {
    const o = i.message;
    return console.error("signature error", o), { error: o };
  }
}, vS = 50;
var Qa = { exports: {} }, Xn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vu;
function eE() {
  if (Vu)
    return Xn;
  Vu = 1;
  var t = pn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, u) {
    var h, f = {}, p = null, m = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (h in l)
      n.call(l, h) && !i.hasOwnProperty(h) && (f[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        f[h] === void 0 && (f[h] = l[h]);
    return { $$typeof: e, type: a, key: p, ref: m, props: f, _owner: s.current };
  }
  return Xn.Fragment = r, Xn.jsx = o, Xn.jsxs = o, Xn;
}
var es = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ku;
function tE() {
  return Ku || (Ku = 1, process.env.NODE_ENV !== "production" && function() {
    var t = pn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function S(O) {
      if (O === null || typeof O != "object")
        return null;
      var j = v && O[v] || O[E];
      return typeof j == "function" ? j : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), ue = 1; ue < j; ue++)
          J[ue - 1] = arguments[ue];
        x("error", O, J);
      }
    }
    function x(O, j, J) {
      {
        var ue = A.ReactDebugCurrentFrame, Ue = ue.getStackAddendum();
        Ue !== "" && (j += "%s", J = J.concat([Ue]));
        var Pe = J.map(function(Ne) {
          return String(Ne);
        });
        Pe.unshift("Warning: " + j), Function.prototype.apply.call(console[O], console, Pe);
      }
    }
    var b = !1, D = !1, g = !1, c = !1, y = !1, R;
    R = Symbol.for("react.module.reference");
    function N(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === i || y || O === s || O === u || O === h || c || O === m || b || D || g || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === f || O.$$typeof === o || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === R || O.getModuleId !== void 0));
    }
    function U(O, j, J) {
      var ue = O.displayName;
      if (ue)
        return ue;
      var Ue = j.displayName || j.name || "";
      return Ue !== "" ? J + "(" + Ue + ")" : J;
    }
    function V(O) {
      return O.displayName || "Context";
    }
    function G(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case a:
            var j = O;
            return V(j) + ".Consumer";
          case o:
            var J = O;
            return V(J._context) + ".Provider";
          case l:
            return U(O, O.render, "ForwardRef");
          case f:
            var ue = O.displayName || null;
            return ue !== null ? ue : G(O.type) || "Memo";
          case p: {
            var Ue = O, Pe = Ue._payload, Ne = Ue._init;
            try {
              return G(Ne(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, L = 0, Z, B, k, z, $, K, he;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function oe() {
      {
        if (L === 0) {
          Z = console.log, B = console.info, k = console.warn, z = console.error, $ = console.group, K = console.groupCollapsed, he = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        L++;
      }
    }
    function te() {
      {
        if (L--, L === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, O, {
              value: Z
            }),
            info: C({}, O, {
              value: B
            }),
            warn: C({}, O, {
              value: k
            }),
            error: C({}, O, {
              value: z
            }),
            group: C({}, O, {
              value: $
            }),
            groupCollapsed: C({}, O, {
              value: K
            }),
            groupEnd: C({}, O, {
              value: he
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = A.ReactCurrentDispatcher, M;
    function F(O, j, J) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (Ue) {
            var ue = Ue.stack.trim().match(/\n( *(at )?)/);
            M = ue && ue[1] || "";
          }
        return `
` + M + O;
      }
    }
    var T = !1, d;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      d = new I();
    }
    function Q(O, j) {
      if (!O || T)
        return "";
      {
        var J = d.get(O);
        if (J !== void 0)
          return J;
      }
      var ue;
      T = !0;
      var Ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = ae.current, ae.current = null, oe();
      try {
        if (j) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (sr) {
              ue = sr;
            }
            Reflect.construct(O, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (sr) {
              ue = sr;
            }
            O.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (sr) {
            ue = sr;
          }
          O();
        }
      } catch (sr) {
        if (sr && ue && typeof sr.stack == "string") {
          for (var Ce = sr.stack.split(`
`), Dt = ue.stack.split(`
`), et = Ce.length - 1, at = Dt.length - 1; et >= 1 && at >= 0 && Ce[et] !== Dt[at]; )
            at--;
          for (; et >= 1 && at >= 0; et--, at--)
            if (Ce[et] !== Dt[at]) {
              if (et !== 1 || at !== 1)
                do
                  if (et--, at--, at < 0 || Ce[et] !== Dt[at]) {
                    var pt = `
` + Ce[et].replace(" at new ", " at ");
                    return O.displayName && pt.includes("<anonymous>") && (pt = pt.replace("<anonymous>", O.displayName)), typeof O == "function" && d.set(O, pt), pt;
                  }
                while (et >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        T = !1, ae.current = Pe, te(), Error.prepareStackTrace = Ue;
      }
      var Mr = O ? O.displayName || O.name : "", Us = Mr ? F(Mr) : "";
      return typeof O == "function" && d.set(O, Us), Us;
    }
    function X(O, j, J) {
      return Q(O, !1);
    }
    function xe(O) {
      var j = O.prototype;
      return !!(j && j.isReactComponent);
    }
    function Oe(O, j, J) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Q(O, xe(O));
      if (typeof O == "string")
        return F(O);
      switch (O) {
        case u:
          return F("Suspense");
        case h:
          return F("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            return X(O.render);
          case f:
            return Oe(O.type, j, J);
          case p: {
            var ue = O, Ue = ue._payload, Pe = ue._init;
            try {
              return Oe(Pe(Ue), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Le = {}, Ze = A.ReactDebugCurrentFrame;
    function Be(O) {
      if (O) {
        var j = O._owner, J = Oe(O.type, O._source, j ? j.type : null);
        Ze.setExtraStackFrame(J);
      } else
        Ze.setExtraStackFrame(null);
    }
    function Ae(O, j, J, ue, Ue) {
      {
        var Pe = Function.call.bind(be);
        for (var Ne in O)
          if (Pe(O, Ne)) {
            var Ce = void 0;
            try {
              if (typeof O[Ne] != "function") {
                var Dt = Error((ue || "React class") + ": " + J + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dt.name = "Invariant Violation", Dt;
              }
              Ce = O[Ne](j, Ne, ue, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Ce = et;
            }
            Ce && !(Ce instanceof Error) && (Be(Ue), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", J, Ne, typeof Ce), Be(null)), Ce instanceof Error && !(Ce.message in Le) && (Le[Ce.message] = !0, Be(Ue), w("Failed %s type: %s", J, Ce.message), Be(null));
          }
      }
    }
    var Re = Array.isArray;
    function we(O) {
      return Re(O);
    }
    function Ee(O) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return J;
      }
    }
    function _e(O) {
      try {
        return ge(O), !1;
      } catch {
        return !0;
      }
    }
    function ge(O) {
      return "" + O;
    }
    function pe(O) {
      if (_e(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ee(O)), ge(O);
    }
    var ce = A.ReactCurrentOwner, Se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, de, Te;
    Te = {};
    function Fe(O) {
      if (be.call(O, "ref")) {
        var j = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function $e(O) {
      if (be.call(O, "key")) {
        var j = Object.getOwnPropertyDescriptor(O, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function ke(O, j) {
      if (typeof O.ref == "string" && ce.current && j && ce.current.stateNode !== j) {
        var J = G(ce.current.type);
        Te[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), O.ref), Te[J] = !0);
      }
    }
    function Me(O, j) {
      {
        var J = function() {
          Ie || (Ie = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Ht(O, j) {
      {
        var J = function() {
          de || (de = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Yt = function(O, j, J, ue, Ue, Pe, Ne) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: O,
        key: j,
        ref: J,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function mr(O, j, J, ue, Ue) {
      {
        var Pe, Ne = {}, Ce = null, Dt = null;
        J !== void 0 && (pe(J), Ce = "" + J), $e(j) && (pe(j.key), Ce = "" + j.key), Fe(j) && (Dt = j.ref, ke(j, Ue));
        for (Pe in j)
          be.call(j, Pe) && !Se.hasOwnProperty(Pe) && (Ne[Pe] = j[Pe]);
        if (O && O.defaultProps) {
          var et = O.defaultProps;
          for (Pe in et)
            Ne[Pe] === void 0 && (Ne[Pe] = et[Pe]);
        }
        if (Ce || Dt) {
          var at = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Ce && Me(Ne, at), Dt && Ht(Ne, at);
        }
        return Yt(O, Ce, Dt, Ue, ue, ce.current, Ne);
      }
    }
    var St = A.ReactCurrentOwner, vr = A.ReactDebugCurrentFrame;
    function Jt(O) {
      if (O) {
        var j = O._owner, J = Oe(O.type, O._source, j ? j.type : null);
        vr.setExtraStackFrame(J);
      } else
        vr.setExtraStackFrame(null);
    }
    var Fr;
    Fr = !1;
    function Qe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function We() {
      {
        if (St.current) {
          var O = G(St.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function nt(O) {
      {
        if (O !== void 0) {
          var j = O.fileName.replace(/^.*[\\\/]/, ""), J = O.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var Xe = {};
    function st(O) {
      {
        var j = We();
        if (!j) {
          var J = typeof O == "string" ? O : O.displayName || O.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function He(O, j) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var J = st(j);
        if (Xe[J])
          return;
        Xe[J] = !0;
        var ue = "";
        O && O._owner && O._owner !== St.current && (ue = " It was passed a child from " + G(O._owner.type) + "."), Jt(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ue), Jt(null);
      }
    }
    function ct(O, j) {
      {
        if (typeof O != "object")
          return;
        if (we(O))
          for (var J = 0; J < O.length; J++) {
            var ue = O[J];
            Qe(ue) && He(ue, j);
          }
        else if (Qe(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Ue = S(O);
          if (typeof Ue == "function" && Ue !== O.entries)
            for (var Pe = Ue.call(O), Ne; !(Ne = Pe.next()).done; )
              Qe(Ne.value) && He(Ne.value, j);
        }
      }
    }
    function ht(O) {
      {
        var j = O.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === f))
          J = j.propTypes;
        else
          return;
        if (J) {
          var ue = G(j);
          Ae(J, O.props, "prop", ue, O);
        } else if (j.PropTypes !== void 0 && !Fr) {
          Fr = !0;
          var Ue = G(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ue || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(O) {
      {
        for (var j = Object.keys(O.props), J = 0; J < j.length; J++) {
          var ue = j[J];
          if (ue !== "children" && ue !== "key") {
            Jt(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Jt(null);
            break;
          }
        }
        O.ref !== null && (Jt(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), Jt(null));
      }
    }
    function ut(O, j, J, ue, Ue, Pe) {
      {
        var Ne = N(O);
        if (!Ne) {
          var Ce = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dt = nt(Ue);
          Dt ? Ce += Dt : Ce += We();
          var et;
          O === null ? et = "null" : we(O) ? et = "array" : O !== void 0 && O.$$typeof === e ? (et = "<" + (G(O.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : et = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Ce);
        }
        var at = mr(O, j, J, Ue, Pe);
        if (at == null)
          return at;
        if (Ne) {
          var pt = j.children;
          if (pt !== void 0)
            if (ue)
              if (we(pt)) {
                for (var Mr = 0; Mr < pt.length; Mr++)
                  ct(pt[Mr], O);
                Object.freeze && Object.freeze(pt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(pt, O);
        }
        return O === n ? dt(at) : ht(at), at;
      }
    }
    function ft(O, j, J) {
      return ut(O, j, J, !0);
    }
    function lt(O, j, J) {
      return ut(O, j, J, !1);
    }
    var it = lt, Ve = ft;
    es.Fragment = n, es.jsx = it, es.jsxs = Ve;
  }()), es;
}
process.env.NODE_ENV === "production" ? Qa.exports = eE() : Qa.exports = tE();
var rE = Qa.exports;
const nE = new I1(), bS = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s }) => (fr(() => {
  Vw({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), Ss.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ rE.jsx(L1, { client: nE, children: s })), sE = [
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
], Wu = Rd.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Wu !== t && (sE.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Wu));
} catch (t) {
  console.error(t);
}
export {
  Mi as $,
  Du as A,
  Nn as B,
  Vw as C,
  Je as D,
  ka as E,
  bp as F,
  fE as G,
  TE as H,
  Op as I,
  wp as J,
  EE as K,
  _p as L,
  DE as M,
  za as N,
  Ep as O,
  Sp as P,
  Cp as Q,
  Ud as R,
  Rp as S,
  Hu as T,
  IE as U,
  qa as V,
  Dp as W,
  xp as X,
  wE as Y,
  Ip as Z,
  _o as _,
  Nt as a,
  Eo as a0,
  zw as a1,
  Bw as a2,
  FE as a3,
  zu as a4,
  HE as a5,
  GE as a6,
  ZE as a7,
  QE as a8,
  YE as a9,
  nE as aA,
  bS as aB,
  JE as aa,
  XE as ab,
  eS as ac,
  tS as ad,
  rS as ae,
  nS as af,
  sS as ag,
  iS as ah,
  wh as ai,
  Ns as aj,
  Q_ as ak,
  _h as al,
  yr as am,
  vS as an,
  aS as ao,
  oS as ap,
  cS as aq,
  uS as ar,
  lS as as,
  hS as at,
  dS as au,
  fS as av,
  pS as aw,
  gS as ax,
  yS as ay,
  mS as az,
  $a as b,
  B_ as c,
  H_ as d,
  K_ as e,
  W_ as f,
  G_ as g,
  Z_ as h,
  V_ as i,
  VE as j,
  BE as k,
  kE as l,
  KE as m,
  Go as n,
  oE as o,
  ur as p,
  jE as q,
  $E as r,
  zi as s,
  aE as t,
  qE as u,
  zE as v,
  UE as w,
  WE as x,
  An as y,
  ME as z
};
