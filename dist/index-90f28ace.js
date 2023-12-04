import * as sr from "react";
import Yn, { useEffect as Dr, useState as hs, useDebugValue as Gh } from "react";
const Qh = "@puzzlehq/sdk", Zh = "Puzzle SDK", Yh = "0.1.36", Jh = "Your portal to privacy", Xh = "./dist/puzzle.cjs.js", ef = "./dist/puzzle.es.js", tf = "./dist/puzzle.umd.js", rf = "./dist/types/src/index.d.ts", nf = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, sf = "module", of = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types",
  "type-check": "tsc --noEmit"
}, af = {
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
}, cf = {
  "@puzzlehq/types": "1.0.7",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, uf = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, lf = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], hf = "Puzzle", ff = "ISC", df = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, pf = "https://github.com/puzzlehq/puzzle-sdk#readme", gf = {
  patchedDependencies: {
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch"
  }
}, yf = {
  name: Qh,
  displayName: Zh,
  version: Yh,
  description: Jh,
  main: Xh,
  module: ef,
  browser: tf,
  types: rf,
  exports: nf,
  type: sf,
  scripts: of,
  dependencies: af,
  devDependencies: cf,
  repository: uf,
  keywords: lf,
  author: hf,
  license: ff,
  bugs: df,
  homepage: pf,
  pnpm: gf
}, vf = Symbol(), Qa = Object.getPrototypeOf, Io = /* @__PURE__ */ new WeakMap(), mf = (t) => t && (Io.has(t) ? Io.get(t) : Qa(t) === Object.prototype || Qa(t) === Array.prototype), bf = (t) => mf(t) && t[vf] || null, Za = (t, e = !0) => {
  Io.set(t, e);
}, io = (t) => typeof t == "object" && t !== null, sn = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakSet(), _f = (t = Object.is, e = (l, f) => new Proxy(l, f), r = (l) => io(l) && !ns.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), n = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (l, f, d = n) => {
  const y = i.get(l);
  if ((y == null ? void 0 : y[0]) === f)
    return y[1];
  const m = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Za(m, !0), i.set(l, [f, m]), Reflect.ownKeys(l).forEach((E) => {
    if (Object.getOwnPropertyDescriptor(m, E))
      return;
    const O = Reflect.get(l, E), S = {
      value: O,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (ns.has(O))
      Za(O, !1);
    else if (O instanceof Promise)
      delete S.value, S.get = () => d(O);
    else if (sn.has(O)) {
      const [P, _] = sn.get(
        O
      );
      S.value = s(
        P,
        _(),
        d
      );
    }
    Object.defineProperty(m, E, S);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (l) => {
  if (!io(l))
    throw new Error("object required");
  const f = a.get(l);
  if (f)
    return f;
  let d = o[0];
  const y = /* @__PURE__ */ new Set(), m = (A, M = ++o[0]) => {
    d !== M && (d = M, y.forEach((B) => B(A, M)));
  };
  let E = o[1];
  const O = (A = ++o[1]) => (E !== A && !y.size && (E = A, P.forEach(([M]) => {
    const B = M[1](A);
    B > d && (d = B);
  })), d), S = (A) => (M, B) => {
    const G = [...M];
    G[1] = [A, ...G[1]], m(G, B);
  }, P = /* @__PURE__ */ new Map(), _ = (A, M) => {
    if (y.size) {
      const B = M[3](S(A));
      P.set(A, [M, B]);
    } else
      P.set(A, [M]);
  }, x = (A) => {
    var M;
    const B = P.get(A);
    B && (P.delete(A), (M = B[1]) == null || M.call(B));
  }, w = (A) => (y.add(A), y.size === 1 && P.forEach(([B, G], ee) => {
    const N = B[3](S(ee));
    P.set(ee, [B, N]);
  }), () => {
    y.delete(A), y.size === 0 && P.forEach(([B, G], ee) => {
      G && (G(), P.set(ee, [B]));
    });
  }), b = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), c = e(b, {
    deleteProperty(A, M) {
      const B = Reflect.get(A, M);
      x(M);
      const G = Reflect.deleteProperty(A, M);
      return G && m(["delete", [M], B]), G;
    },
    set(A, M, B, G) {
      const ee = Reflect.has(A, M), N = Reflect.get(A, M, G);
      if (ee && (t(N, B) || a.has(B) && t(N, a.get(B))))
        return !0;
      x(M), io(B) && (B = bf(B) || B);
      let $ = B;
      if (B instanceof Promise)
        B.then((se) => {
          B.status = "fulfilled", B.value = se, m(["resolve", [M], se]);
        }).catch((se) => {
          B.status = "rejected", B.reason = se, m(["reject", [M], se]);
        });
      else {
        !sn.has(B) && r(B) && ($ = u(B));
        const se = !ns.has($) && sn.get($);
        se && _(M, se);
      }
      return Reflect.set(A, M, $, G), m(["set", [M], B, N]), !0;
    }
  });
  a.set(l, c);
  const g = [
    b,
    O,
    s,
    w
  ];
  return sn.set(c, g), Reflect.ownKeys(l).forEach((A) => {
    const M = Object.getOwnPropertyDescriptor(
      l,
      A
    );
    "value" in M && (c[A] = l[A], delete M.value, delete M.writable), Object.defineProperty(b, A, M);
  }), c;
}) => [
  // public functions
  u,
  // shared state
  sn,
  ns,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  a,
  o
], [wf] = _f();
function dn(t = {}) {
  return wf(t);
}
function Pn(t, e, r) {
  const n = sn.get(t);
  let i;
  const s = [], a = n[3];
  let o = !1;
  const l = a((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, o && e(s.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, l();
  };
}
function Ef(t, e) {
  const r = sn.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const kt = dn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Xu = { state: kt, subscribe(t) {
  return Pn(kt, () => t(kt));
}, push(t, e) {
  t !== kt.view && (kt.view = t, e && (kt.data = e), kt.history.push(t));
}, reset(t) {
  kt.view = t, kt.history = [t];
}, replace(t) {
  kt.history.length > 1 && (kt.history[kt.history.length - 1] = t, kt.view = t);
}, goBack() {
  if (kt.history.length > 1) {
    kt.history.pop();
    const [t] = kt.history.slice(-1);
    kt.view = t;
  }
}, setData(t) {
  kt.data = t;
} }, Jt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Jt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return Jt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (Jt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!Jt.isHttpUrl(t))
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
    localStorage.setItem(Jt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(Jt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Jt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Jt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Xu.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Sf = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Gt = dn({ enabled: Sf, userSessionId: "", events: [], connectedWalletId: void 0 }), Df = { state: Gt, subscribe(t) {
  return Pn(Gt.events, () => t(Ef(Gt.events[Gt.events.length - 1])));
}, initialize() {
  Gt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Gt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Gt.connectedWalletId = t;
}, click(t) {
  if (Gt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Gt.userSessionId, timestamp: Date.now(), data: t };
    Gt.events.push(e);
  }
}, track(t) {
  if (Gt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Gt.userSessionId, timestamp: Date.now(), data: t };
    Gt.events.push(e);
  }
}, view(t) {
  if (Gt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Gt.userSessionId, timestamp: Date.now(), data: t };
    Gt.events.push(e);
  }
} }, kr = dn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Rr = { state: kr, subscribe(t) {
  return Pn(kr, () => t(kr));
}, setChains(t) {
  kr.chains = t;
}, setWalletConnectUri(t) {
  kr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  kr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  kr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  kr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  kr.isUiLoaded = t;
}, setIsAuth(t) {
  kr.isAuth = t;
} }, is = dn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Hn = { state: is, subscribe(t) {
  return Pn(is, () => t(is));
}, setConfig(t) {
  var e, r;
  Df.initialize(), Rr.setChains(t.chains), Rr.setIsAuth(!!t.enableAuthMode), Rr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Rr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Jt.setModalVersionInStorage(), Object.assign(is, t);
} };
var xf = Object.defineProperty, Ya = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable, Ja = (t, e, r) => e in t ? xf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cf = (t, e) => {
  for (var r in e || (e = {}))
    Of.call(e, r) && Ja(t, r, e[r]);
  if (Ya)
    for (var r of Ya(e))
      If.call(e, r) && Ja(t, r, e[r]);
  return t;
};
const Co = "https://explorer-api.walletconnect.com", Ro = "wcm", To = "js-2.6.2";
async function ss(t, e) {
  const r = Cf({ sdkType: Ro, sdkVersion: To }, e), n = new URL(t, Co);
  return n.searchParams.append("projectId", Hn.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const bn = { async getDesktopListings(t) {
  return ss("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return ss("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return ss("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return ss("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Co}/w3m/v1/getWalletImage/${t}?projectId=${Hn.state.projectId}&sdkType=${Ro}&sdkVersion=${To}`;
}, getAssetImageUrl(t) {
  return `${Co}/w3m/v1/getAssetImage/${t}?projectId=${Hn.state.projectId}&sdkType=${Ro}&sdkVersion=${To}`;
} };
var Rf = Object.defineProperty, Xa = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Af = Object.prototype.propertyIsEnumerable, ec = (t, e, r) => e in t ? Rf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Nf = (t, e) => {
  for (var r in e || (e = {}))
    Tf.call(e, r) && ec(t, r, e[r]);
  if (Xa)
    for (var r of Xa(e))
      Af.call(e, r) && ec(t, r, e[r]);
  return t;
};
const tc = Jt.isMobile(), $r = dn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), m1 = { state: $r, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Hn.state;
  if (t === "NONE" || e === "ALL" && !t)
    return $r.recomendedWallets;
  if (Jt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await bn.getAllListings(r), i = Object.values(n);
    i.sort((s, a) => {
      const o = t.indexOf(s.id), u = t.indexOf(a.id);
      return o - u;
    }), $r.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Rr.state, i = r == null ? void 0 : r.join(","), s = Jt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Jt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: o } = tc ? await bn.getMobileListings(a) : await bn.getDesktopListings(a);
    $r.recomendedWallets = Object.values(o);
  }
  return $r.recomendedWallets;
}, async getWallets(t) {
  const e = Nf({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Hn.state, { recomendedWallets: i } = $r;
  if (n === "ALL")
    return $r.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : Jt.isArray(r) && (e.excludedIds = r.join(",")), Jt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Rr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: a } = t, { listings: o, total: u } = tc ? await bn.getMobileListings(e) : await bn.getDesktopListings(e), l = Object.values(o), f = a ? "search" : "wallets";
  return $r[f] = { listings: [...$r[f].listings, ...l], total: u, page: s ?? 1 }, { listings: l, total: u };
}, getWalletImageUrl(t) {
  return bn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return bn.getAssetImageUrl(t);
}, resetSearch() {
  $r.search = { listings: [], total: 0, page: 1 };
} }, jn = dn({ open: !1 }), so = { state: jn, subscribe(t) {
  return Pn(jn, () => t(jn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Rr.state;
    if (Jt.removeWalletConnectDeepLink(), Rr.setWalletConnectUri(t == null ? void 0 : t.uri), Rr.setChains(t == null ? void 0 : t.chains), Xu.reset("ConnectWallet"), r && n)
      jn.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = Rr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), jn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  jn.open = !1;
} };
var Pf = Object.defineProperty, rc = Object.getOwnPropertySymbols, Lf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, nc = (t, e, r) => e in t ? Pf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mf = (t, e) => {
  for (var r in e || (e = {}))
    Lf.call(e, r) && nc(t, r, e[r]);
  if (rc)
    for (var r of rc(e))
      Ff.call(e, r) && nc(t, r, e[r]);
  return t;
};
function Uf() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ai = dn({ themeMode: Uf() ? "dark" : "light" }), ic = { state: ai, subscribe(t) {
  return Pn(ai, () => t(ai));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (ai.themeMode = e), r && (ai.themeVariables = Mf({}, r));
} }, _n = dn({ open: !1, message: "", variant: "success" }), b1 = { state: _n, subscribe(t) {
  return Pn(_n, () => t(_n));
}, openToast(t, e) {
  _n.open = !0, _n.message = t, _n.variant = e;
}, closeToast() {
  _n.open = !1;
} };
let jf = class {
  constructor(e) {
    this.openModal = so.open, this.closeModal = so.close, this.subscribeModal = so.subscribe, this.setTheme = ic.setThemeConfig, ic.setThemeConfig(e), Hn.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-d4051d34.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Rr.setIsUiLoaded(!0);
    }
  }
};
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function la(t) {
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
var ha = { exports: {} }, Vn = typeof Reflect == "object" ? Reflect : null, sc = Vn && typeof Vn.apply == "function" ? Vn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, fs;
Vn && typeof Vn.ownKeys == "function" ? fs = Vn.ownKeys : Object.getOwnPropertySymbols ? fs = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : fs = function(e) {
  return Object.getOwnPropertyNames(e);
};
function kf(t) {
  console && console.warn && console.warn(t);
}
var el = Number.isNaN || function(e) {
  return e !== e;
};
function at() {
  at.init.call(this);
}
ha.exports = at;
ha.exports.once = Bf;
at.EventEmitter = at;
at.prototype._events = void 0;
at.prototype._eventsCount = 0;
at.prototype._maxListeners = void 0;
var oc = 10;
function Ms(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(at, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return oc;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || el(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    oc = t;
  }
});
at.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
at.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || el(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function tl(t) {
  return t._maxListeners === void 0 ? at.defaultMaxListeners : t._maxListeners;
}
at.prototype.getMaxListeners = function() {
  return tl(this);
};
at.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = e === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var a;
    if (r.length > 0 && (a = r[0]), a instanceof Error)
      throw a;
    var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw o.context = a, o;
  }
  var u = s[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    sc(u, this, r);
  else
    for (var l = u.length, f = ol(u, l), n = 0; n < l; ++n)
      sc(f[n], this, r);
  return !0;
};
function rl(t, e, r, n) {
  var i, s, a;
  if (Ms(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), a = s[e]), a === void 0)
    a = s[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = s[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = tl(t), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, kf(o);
  }
  return t;
}
at.prototype.addListener = function(e, r) {
  return rl(this, e, r, !1);
};
at.prototype.on = at.prototype.addListener;
at.prototype.prependListener = function(e, r) {
  return rl(this, e, r, !0);
};
function $f() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function nl(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = $f.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
at.prototype.once = function(e, r) {
  return Ms(r), this.on(e, nl(this, e, r)), this;
};
at.prototype.prependOnceListener = function(e, r) {
  return Ms(r), this.prependListener(e, nl(this, e, r)), this;
};
at.prototype.removeListener = function(e, r) {
  var n, i, s, a, o;
  if (Ms(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === r || n[a].listener === r) {
        o = n[a].listener, s = a;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : qf(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
at.prototype.off = at.prototype.removeListener;
at.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), a;
    for (i = 0; i < s.length; ++i)
      a = s[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function il(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? zf(i) : ol(i, i.length);
}
at.prototype.listeners = function(e) {
  return il(this, e, !0);
};
at.prototype.rawListeners = function(e) {
  return il(this, e, !1);
};
at.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : sl.call(t, e);
};
at.prototype.listenerCount = sl;
function sl(t) {
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
at.prototype.eventNames = function() {
  return this._eventsCount > 0 ? fs(this._events) : [];
};
function ol(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function qf(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function zf(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Bf(t, e) {
  return new Promise(function(r, n) {
    function i(a) {
      t.removeListener(e, s), n(a);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    al(t, e, s, { once: !0 }), e !== "error" && Vf(t, i, { once: !0 });
  });
}
function Vf(t, e, r) {
  typeof t.on == "function" && al(t, "error", e, r);
}
function al(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var xr = ha.exports;
const fa = /* @__PURE__ */ qi(xr);
var os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function as(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cl = { exports: {} };
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
      function a(l, f) {
        if (!i[l]) {
          if (!n[l]) {
            var d = typeof as == "function" && as;
            if (!f && d)
              return d(l, !0);
            if (o)
              return o(l, !0);
            var y = new Error("Cannot find module '" + l + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var m = i[l] = { exports: {} };
          n[l][0].call(m.exports, function(E) {
            var O = n[l][1][E];
            return a(O || E);
          }, m, m.exports, r, n, i, s);
        }
        return i[l].exports;
      }
      for (var o = typeof as == "function" && as, u = 0; u < s.length; u++)
        a(s[u]);
      return a;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var a = s.MutationObserver || s.WebKitMutationObserver, o;
        if (a) {
          var u = 0, l = new a(E), f = s.document.createTextNode("");
          l.observe(f, { characterData: !0 }), o = function() {
            f.data = u = ++u % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = E, o = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? o = function() {
            var S = s.document.createElement("script");
            S.onreadystatechange = function() {
              E(), S.onreadystatechange = null, S.parentNode.removeChild(S), S = null;
            }, s.document.documentElement.appendChild(S);
          } : o = function() {
            setTimeout(E, 0);
          };
        var y, m = [];
        function E() {
          y = !0;
          for (var S, P, _ = m.length; _; ) {
            for (P = m, m = [], S = -1; ++S < _; )
              P[S]();
            _ = m.length;
          }
          y = !1;
        }
        n.exports = O;
        function O(S) {
          m.push(S) === 1 && !y && o();
        }
      }).call(this, typeof os < "u" ? os : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function a() {
      }
      var o = {}, u = ["REJECTED"], l = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, b !== a && O(this, b);
      }
      d.prototype.catch = function(b) {
        return this.then(null, b);
      }, d.prototype.then = function(b, p) {
        if (typeof b != "function" && this.state === l || typeof p != "function" && this.state === u)
          return this;
        var c = new this.constructor(a);
        if (this.state !== f) {
          var g = this.state === l ? b : p;
          m(c, g, this.outcome);
        } else
          this.queue.push(new y(c, b, p));
        return c;
      };
      function y(b, p, c) {
        this.promise = b, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof c == "function" && (this.onRejected = c, this.callRejected = this.otherCallRejected);
      }
      y.prototype.callFulfilled = function(b) {
        o.resolve(this.promise, b);
      }, y.prototype.otherCallFulfilled = function(b) {
        m(this.promise, this.onFulfilled, b);
      }, y.prototype.callRejected = function(b) {
        o.reject(this.promise, b);
      }, y.prototype.otherCallRejected = function(b) {
        m(this.promise, this.onRejected, b);
      };
      function m(b, p, c) {
        s(function() {
          var g;
          try {
            g = p(c);
          } catch (A) {
            return o.reject(b, A);
          }
          g === b ? o.reject(b, new TypeError("Cannot resolve promise with itself")) : o.resolve(b, g);
        });
      }
      o.resolve = function(b, p) {
        var c = S(E, p);
        if (c.status === "error")
          return o.reject(b, c.value);
        var g = c.value;
        if (g)
          O(b, g);
        else {
          b.state = l, b.outcome = p;
          for (var A = -1, M = b.queue.length; ++A < M; )
            b.queue[A].callFulfilled(p);
        }
        return b;
      }, o.reject = function(b, p) {
        b.state = u, b.outcome = p;
        for (var c = -1, g = b.queue.length; ++c < g; )
          b.queue[c].callRejected(p);
        return b;
      };
      function E(b) {
        var p = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof p == "function")
          return function() {
            p.apply(b, arguments);
          };
      }
      function O(b, p) {
        var c = !1;
        function g(G) {
          c || (c = !0, o.reject(b, G));
        }
        function A(G) {
          c || (c = !0, o.resolve(b, G));
        }
        function M() {
          p(A, g);
        }
        var B = S(M);
        B.status === "error" && g(B.value);
      }
      function S(b, p) {
        var c = {};
        try {
          c.value = b(p), c.status = "success";
        } catch (g) {
          c.status = "error", c.value = g;
        }
        return c;
      }
      d.resolve = P;
      function P(b) {
        return b instanceof this ? b : o.resolve(new this(a), b);
      }
      d.reject = _;
      function _(b) {
        var p = new this(a);
        return o.reject(p, b);
      }
      d.all = x;
      function x(b) {
        var p = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = b.length, g = !1;
        if (!c)
          return this.resolve([]);
        for (var A = new Array(c), M = 0, B = -1, G = new this(a); ++B < c; )
          ee(b[B], B);
        return G;
        function ee(N, $) {
          p.resolve(N).then(se, function(Z) {
            g || (g = !0, o.reject(G, Z));
          });
          function se(Z) {
            A[$] = Z, ++M === c && !g && (g = !0, o.resolve(G, A));
          }
        }
      }
      d.race = w;
      function w(b) {
        var p = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = b.length, g = !1;
        if (!c)
          return this.resolve([]);
        for (var A = -1, M = new this(a); ++A < c; )
          B(b[A]);
        return M;
        function B(G) {
          p.resolve(G).then(function(ee) {
            g || (g = !0, o.resolve(M, ee));
          }, function(ee) {
            g || (g = !0, o.reject(M, ee));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof os < "u" ? os : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
        return typeof v;
      } : function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      };
      function a(v, C) {
        if (!(v instanceof C))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
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
      var u = o();
      function l() {
        try {
          if (!u || !u.open)
            return !1;
          var v = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), C = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!v || C) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(v, C) {
        v = v || [], C = C || {};
        try {
          return new Blob(v, C);
        } catch (k) {
          if (k.name !== "TypeError")
            throw k;
          for (var I = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, j = new I(), L = 0; L < v.length; L += 1)
            j.append(v[L]);
          return j.getBlob(C.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function y(v, C) {
        C && v.then(function(I) {
          C(null, I);
        }, function(I) {
          C(I);
        });
      }
      function m(v, C, I) {
        typeof C == "function" && v.then(C), typeof I == "function" && v.catch(I);
      }
      function E(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function O() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var S = "local-forage-detect-blob-support", P = void 0, _ = {}, x = Object.prototype.toString, w = "readonly", b = "readwrite";
      function p(v) {
        for (var C = v.length, I = new ArrayBuffer(C), j = new Uint8Array(I), L = 0; L < C; L++)
          j[L] = v.charCodeAt(L);
        return I;
      }
      function c(v) {
        return new d(function(C) {
          var I = v.transaction(S, b), j = f([""]);
          I.objectStore(S).put(j, "key"), I.onabort = function(L) {
            L.preventDefault(), L.stopPropagation(), C(!1);
          }, I.oncomplete = function() {
            var L = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
            C(k || !L || parseInt(L[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function g(v) {
        return typeof P == "boolean" ? d.resolve(P) : c(v).then(function(C) {
          return P = C, P;
        });
      }
      function A(v) {
        var C = _[v.name], I = {};
        I.promise = new d(function(j, L) {
          I.resolve = j, I.reject = L;
        }), C.deferredOperations.push(I), C.dbReady ? C.dbReady = C.dbReady.then(function() {
          return I.promise;
        }) : C.dbReady = I.promise;
      }
      function M(v) {
        var C = _[v.name], I = C.deferredOperations.pop();
        if (I)
          return I.resolve(), I.promise;
      }
      function B(v, C) {
        var I = _[v.name], j = I.deferredOperations.pop();
        if (j)
          return j.reject(C), j.promise;
      }
      function G(v, C) {
        return new d(function(I, j) {
          if (_[v.name] = _[v.name] || we(), v.db)
            if (C)
              A(v), v.db.close();
            else
              return I(v.db);
          var L = [v.name];
          C && L.push(v.version);
          var k = u.open.apply(u, L);
          C && (k.onupgradeneeded = function(V) {
            var X = k.result;
            try {
              X.createObjectStore(v.storeName), V.oldVersion <= 1 && X.createObjectStore(S);
            } catch (ie) {
              if (ie.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + V.oldVersion + " to version " + V.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw ie;
            }
          }), k.onerror = function(V) {
            V.preventDefault(), j(k.error);
          }, k.onsuccess = function() {
            var V = k.result;
            V.onversionchange = function(X) {
              X.target.close();
            }, I(V), M(v);
          };
        });
      }
      function ee(v) {
        return G(v, !1);
      }
      function N(v) {
        return G(v, !0);
      }
      function $(v, C) {
        if (!v.db)
          return !0;
        var I = !v.db.objectStoreNames.contains(v.storeName), j = v.version < v.db.version, L = v.version > v.db.version;
        if (j && (v.version !== C && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), L || I) {
          if (I) {
            var k = v.db.version + 1;
            k > v.version && (v.version = k);
          }
          return !0;
        }
        return !1;
      }
      function se(v) {
        return new d(function(C, I) {
          var j = new FileReader();
          j.onerror = I, j.onloadend = function(L) {
            var k = btoa(L.target.result || "");
            C({ __local_forage_encoded_blob: !0, data: k, type: v.type });
          }, j.readAsBinaryString(v);
        });
      }
      function Z(v) {
        var C = p(atob(v.data));
        return f([C], { type: v.type });
      }
      function H(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function Y(v) {
        var C = this, I = C._initReady().then(function() {
          var j = _[C._dbInfo.name];
          if (j && j.dbReady)
            return j.dbReady;
        });
        return m(I, v, v), I;
      }
      function W(v) {
        A(v);
        for (var C = _[v.name], I = C.forages, j = 0; j < I.length; j++) {
          var L = I[j];
          L._dbInfo.db && (L._dbInfo.db.close(), L._dbInfo.db = null);
        }
        return v.db = null, ee(v).then(function(k) {
          return v.db = k, $(v) ? N(v) : k;
        }).then(function(k) {
          v.db = C.db = k;
          for (var V = 0; V < I.length; V++)
            I[V]._dbInfo.db = k;
        }).catch(function(k) {
          throw B(v, k), k;
        });
      }
      function J(v, C, I, j) {
        j === void 0 && (j = 1);
        try {
          var L = v.db.transaction(v.storeName, C);
          I(null, L);
        } catch (k) {
          if (j > 0 && (!v.db || k.name === "InvalidStateError" || k.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!v.db || k.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), N(v);
            }).then(function() {
              return W(v).then(function() {
                J(v, C, I, j - 1);
              });
            }).catch(I);
          I(k);
        }
      }
      function we() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function re(v) {
        var C = this, I = { db: null };
        if (v)
          for (var j in v)
            I[j] = v[j];
        var L = _[I.name];
        L || (L = we(), _[I.name] = L), L.forages.push(C), C._initReady || (C._initReady = C.ready, C.ready = Y);
        var k = [];
        function V() {
          return d.resolve();
        }
        for (var X = 0; X < L.forages.length; X++) {
          var ie = L.forages[X];
          ie !== C && k.push(ie._initReady().catch(V));
        }
        var ne = L.forages.slice(0);
        return d.all(k).then(function() {
          return I.db = L.db, ee(I);
        }).then(function(te) {
          return I.db = te, $(I, C._defaultConfig.version) ? N(I) : te;
        }).then(function(te) {
          I.db = L.db = te, C._dbInfo = I;
          for (var ye = 0; ye < ne.length; ye++) {
            var Ve = ne[ye];
            Ve !== C && (Ve._dbInfo.db = I.db, Ve._dbInfo.version = I.version);
          }
        });
      }
      function be(v, C) {
        var I = this;
        v = E(v);
        var j = new d(function(L, k) {
          I.ready().then(function() {
            J(I._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(I._dbInfo.storeName), ne = ie.get(v);
                ne.onsuccess = function() {
                  var te = ne.result;
                  te === void 0 && (te = null), H(te) && (te = Z(te)), L(te);
                }, ne.onerror = function() {
                  k(ne.error);
                };
              } catch (te) {
                k(te);
              }
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function he(v, C) {
        var I = this, j = new d(function(L, k) {
          I.ready().then(function() {
            J(I._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(I._dbInfo.storeName), ne = ie.openCursor(), te = 1;
                ne.onsuccess = function() {
                  var ye = ne.result;
                  if (ye) {
                    var Ve = ye.value;
                    H(Ve) && (Ve = Z(Ve));
                    var st = v(Ve, ye.key, te++);
                    st !== void 0 ? L(st) : ye.continue();
                  } else
                    L();
                }, ne.onerror = function() {
                  k(ne.error);
                };
              } catch (ye) {
                k(ye);
              }
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function ve(v, C, I) {
        var j = this;
        v = E(v);
        var L = new d(function(k, V) {
          var X;
          j.ready().then(function() {
            return X = j._dbInfo, x.call(C) === "[object Blob]" ? g(X.db).then(function(ie) {
              return ie ? C : se(C);
            }) : C;
          }).then(function(ie) {
            J(j._dbInfo, b, function(ne, te) {
              if (ne)
                return V(ne);
              try {
                var ye = te.objectStore(j._dbInfo.storeName);
                ie === null && (ie = void 0);
                var Ve = ye.put(ie, v);
                te.oncomplete = function() {
                  ie === void 0 && (ie = null), k(ie);
                }, te.onabort = te.onerror = function() {
                  var st = Ve.error ? Ve.error : Ve.transaction.error;
                  V(st);
                };
              } catch (st) {
                V(st);
              }
            });
          }).catch(V);
        });
        return y(L, I), L;
      }
      function z(v, C) {
        var I = this;
        v = E(v);
        var j = new d(function(L, k) {
          I.ready().then(function() {
            J(I._dbInfo, b, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(I._dbInfo.storeName), ne = ie.delete(v);
                X.oncomplete = function() {
                  L();
                }, X.onerror = function() {
                  k(ne.error);
                }, X.onabort = function() {
                  var te = ne.error ? ne.error : ne.transaction.error;
                  k(te);
                };
              } catch (te) {
                k(te);
              }
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function q(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            J(C._dbInfo, b, function(k, V) {
              if (k)
                return L(k);
              try {
                var X = V.objectStore(C._dbInfo.storeName), ie = X.clear();
                V.oncomplete = function() {
                  j();
                }, V.onabort = V.onerror = function() {
                  var ne = ie.error ? ie.error : ie.transaction.error;
                  L(ne);
                };
              } catch (ne) {
                L(ne);
              }
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function F(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            J(C._dbInfo, w, function(k, V) {
              if (k)
                return L(k);
              try {
                var X = V.objectStore(C._dbInfo.storeName), ie = X.count();
                ie.onsuccess = function() {
                  j(ie.result);
                }, ie.onerror = function() {
                  L(ie.error);
                };
              } catch (ne) {
                L(ne);
              }
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function h(v, C) {
        var I = this, j = new d(function(L, k) {
          if (v < 0) {
            L(null);
            return;
          }
          I.ready().then(function() {
            J(I._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(I._dbInfo.storeName), ne = !1, te = ie.openKeyCursor();
                te.onsuccess = function() {
                  var ye = te.result;
                  if (!ye) {
                    L(null);
                    return;
                  }
                  v === 0 || ne ? L(ye.key) : (ne = !0, ye.advance(v));
                }, te.onerror = function() {
                  k(te.error);
                };
              } catch (ye) {
                k(ye);
              }
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function T(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            J(C._dbInfo, w, function(k, V) {
              if (k)
                return L(k);
              try {
                var X = V.objectStore(C._dbInfo.storeName), ie = X.openKeyCursor(), ne = [];
                ie.onsuccess = function() {
                  var te = ie.result;
                  if (!te) {
                    j(ne);
                    return;
                  }
                  ne.push(te.key), te.continue();
                }, ie.onerror = function() {
                  L(ie.error);
                };
              } catch (te) {
                L(te);
              }
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function oe(v, C) {
        C = O.apply(this, arguments);
        var I = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || I.name, v.storeName = v.storeName || I.storeName);
        var j = this, L;
        if (!v.name)
          L = d.reject("Invalid arguments");
        else {
          var k = v.name === I.name && j._dbInfo.db, V = k ? d.resolve(j._dbInfo.db) : ee(v).then(function(X) {
            var ie = _[v.name], ne = ie.forages;
            ie.db = X;
            for (var te = 0; te < ne.length; te++)
              ne[te]._dbInfo.db = X;
            return X;
          });
          v.storeName ? L = V.then(function(X) {
            if (X.objectStoreNames.contains(v.storeName)) {
              var ie = X.version + 1;
              A(v);
              var ne = _[v.name], te = ne.forages;
              X.close();
              for (var ye = 0; ye < te.length; ye++) {
                var Ve = te[ye];
                Ve._dbInfo.db = null, Ve._dbInfo.version = ie;
              }
              var st = new d(function(et, pt) {
                var nt = u.open(v.name, ie);
                nt.onerror = function(lr) {
                  var si = nt.result;
                  si.close(), pt(lr);
                }, nt.onupgradeneeded = function() {
                  var lr = nt.result;
                  lr.deleteObjectStore(v.storeName);
                }, nt.onsuccess = function() {
                  var lr = nt.result;
                  lr.close(), et(lr);
                };
              });
              return st.then(function(et) {
                ne.db = et;
                for (var pt = 0; pt < te.length; pt++) {
                  var nt = te[pt];
                  nt._dbInfo.db = et, M(nt._dbInfo);
                }
              }).catch(function(et) {
                throw (B(v, et) || d.resolve()).catch(function() {
                }), et;
              });
            }
          }) : L = V.then(function(X) {
            A(v);
            var ie = _[v.name], ne = ie.forages;
            X.close();
            for (var te = 0; te < ne.length; te++) {
              var ye = ne[te];
              ye._dbInfo.db = null;
            }
            var Ve = new d(function(st, et) {
              var pt = u.deleteDatabase(v.name);
              pt.onerror = function() {
                var nt = pt.result;
                nt && nt.close(), et(pt.error);
              }, pt.onblocked = function() {
                console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed');
              }, pt.onsuccess = function() {
                var nt = pt.result;
                nt && nt.close(), st(nt);
              };
            });
            return Ve.then(function(st) {
              ie.db = st;
              for (var et = 0; et < ne.length; et++) {
                var pt = ne[et];
                M(pt._dbInfo);
              }
            }).catch(function(st) {
              throw (B(v, st) || d.resolve()).catch(function() {
              }), st;
            });
          });
        }
        return y(L, C), L;
      }
      var le = { _driver: "asyncStorage", _initStorage: re, _support: l(), iterate: he, getItem: be, setItem: ve, removeItem: z, clear: q, length: F, key: h, keys: T, dropInstance: oe };
      function ke() {
        return typeof openDatabase == "function";
      }
      var xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ae = "~~local_forage_type~", He = /^~~local_forage_type~([^~]+)~/, it = "__lfsc__:", rt = it.length, $e = "arbf", Fe = "blob", Re = "si08", Ne = "ui08", Te = "uic8", Ie = "si16", Oe = "si32", _e = "ur16", Pe = "ui32", Me = "fl32", Se = "fl64", qe = rt + $e.length, Ge = Object.prototype.toString;
      function Ze(v) {
        var C = v.length * 0.75, I = v.length, j, L = 0, k, V, X, ie;
        v[v.length - 1] === "=" && (C--, v[v.length - 2] === "=" && C--);
        var ne = new ArrayBuffer(C), te = new Uint8Array(ne);
        for (j = 0; j < I; j += 4)
          k = xe.indexOf(v[j]), V = xe.indexOf(v[j + 1]), X = xe.indexOf(v[j + 2]), ie = xe.indexOf(v[j + 3]), te[L++] = k << 2 | V >> 4, te[L++] = (V & 15) << 4 | X >> 2, te[L++] = (X & 3) << 6 | ie & 63;
        return ne;
      }
      function Qe(v) {
        var C = new Uint8Array(v), I = "", j;
        for (j = 0; j < C.length; j += 3)
          I += xe[C[j] >> 2], I += xe[(C[j] & 3) << 4 | C[j + 1] >> 4], I += xe[(C[j + 1] & 15) << 2 | C[j + 2] >> 6], I += xe[C[j + 2] & 63];
        return C.length % 3 === 2 ? I = I.substring(0, I.length - 1) + "=" : C.length % 3 === 1 && (I = I.substring(0, I.length - 2) + "=="), I;
      }
      function Ye(v, C) {
        var I = "";
        if (v && (I = Ge.call(v)), v && (I === "[object ArrayBuffer]" || v.buffer && Ge.call(v.buffer) === "[object ArrayBuffer]")) {
          var j, L = it;
          v instanceof ArrayBuffer ? (j = v, L += $e) : (j = v.buffer, I === "[object Int8Array]" ? L += Re : I === "[object Uint8Array]" ? L += Ne : I === "[object Uint8ClampedArray]" ? L += Te : I === "[object Int16Array]" ? L += Ie : I === "[object Uint16Array]" ? L += _e : I === "[object Int32Array]" ? L += Oe : I === "[object Uint32Array]" ? L += Pe : I === "[object Float32Array]" ? L += Me : I === "[object Float64Array]" ? L += Se : C(new Error("Failed to get type for BinaryArray"))), C(L + Qe(j));
        } else if (I === "[object Blob]") {
          var k = new FileReader();
          k.onload = function() {
            var V = Ae + v.type + "~" + Qe(this.result);
            C(it + Fe + V);
          }, k.readAsArrayBuffer(v);
        } else
          try {
            C(JSON.stringify(v));
          } catch (V) {
            console.error("Couldn't convert value into a JSON string: ", v), C(null, V);
          }
      }
      function tr(v) {
        if (v.substring(0, rt) !== it)
          return JSON.parse(v);
        var C = v.substring(qe), I = v.substring(rt, qe), j;
        if (I === Fe && He.test(C)) {
          var L = C.match(He);
          j = L[1], C = C.substring(L[0].length);
        }
        var k = Ze(C);
        switch (I) {
          case $e:
            return k;
          case Fe:
            return f([k], { type: j });
          case Re:
            return new Int8Array(k);
          case Ne:
            return new Uint8Array(k);
          case Te:
            return new Uint8ClampedArray(k);
          case Ie:
            return new Int16Array(k);
          case _e:
            return new Uint16Array(k);
          case Oe:
            return new Int32Array(k);
          case Pe:
            return new Uint32Array(k);
          case Me:
            return new Float32Array(k);
          case Se:
            return new Float64Array(k);
          default:
            throw new Error("Unkown type: " + I);
        }
      }
      var Wt = { serialize: Ye, deserialize: tr, stringToBuffer: Ze, bufferToString: Qe };
      function pr(v, C, I, j) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + C.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], I, j);
      }
      function Ft(v) {
        var C = this, I = { db: null };
        if (v)
          for (var j in v)
            I[j] = typeof v[j] != "string" ? v[j].toString() : v[j];
        var L = new d(function(k, V) {
          try {
            I.db = openDatabase(I.name, String(I.version), I.description, I.size);
          } catch (X) {
            return V(X);
          }
          I.db.transaction(function(X) {
            pr(X, I, function() {
              C._dbInfo = I, k();
            }, function(ie, ne) {
              V(ne);
            });
          }, V);
        });
        return I.serializer = Wt, L;
      }
      function Mt(v, C, I, j, L, k) {
        v.executeSql(I, j, L, function(V, X) {
          X.code === X.SYNTAX_ERR ? V.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [C.storeName], function(ie, ne) {
            ne.rows.length ? k(ie, X) : pr(ie, C, function() {
              ie.executeSql(I, j, L, k);
            }, k);
          }, k) : k(V, X);
        }, k);
      }
      function ur(v, C) {
        var I = this;
        v = E(v);
        var j = new d(function(L, k) {
          I.ready().then(function() {
            var V = I._dbInfo;
            V.db.transaction(function(X) {
              Mt(X, V, "SELECT * FROM " + V.storeName + " WHERE key = ? LIMIT 1", [v], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).value : null;
                te && (te = V.serializer.deserialize(te)), L(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function Mr(v, C) {
        var I = this, j = new d(function(L, k) {
          I.ready().then(function() {
            var V = I._dbInfo;
            V.db.transaction(function(X) {
              Mt(X, V, "SELECT * FROM " + V.storeName, [], function(ie, ne) {
                for (var te = ne.rows, ye = te.length, Ve = 0; Ve < ye; Ve++) {
                  var st = te.item(Ve), et = st.value;
                  if (et && (et = V.serializer.deserialize(et)), et = v(et, st.key, Ve + 1), et !== void 0) {
                    L(et);
                    return;
                  }
                }
                L();
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function ct(v, C, I, j) {
        var L = this;
        v = E(v);
        var k = new d(function(V, X) {
          L.ready().then(function() {
            C === void 0 && (C = null);
            var ie = C, ne = L._dbInfo;
            ne.serializer.serialize(C, function(te, ye) {
              ye ? X(ye) : ne.db.transaction(function(Ve) {
                Mt(Ve, ne, "INSERT OR REPLACE INTO " + ne.storeName + " (key, value) VALUES (?, ?)", [v, te], function() {
                  V(ie);
                }, function(st, et) {
                  X(et);
                });
              }, function(Ve) {
                if (Ve.code === Ve.QUOTA_ERR) {
                  if (j > 0) {
                    V(ct.apply(L, [v, ie, I, j - 1]));
                    return;
                  }
                  X(Ve);
                }
              });
            });
          }).catch(X);
        });
        return y(k, I), k;
      }
      function ut(v, C, I) {
        return ct.apply(this, [v, C, I, 1]);
      }
      function yt(v, C) {
        var I = this;
        v = E(v);
        var j = new d(function(L, k) {
          I.ready().then(function() {
            var V = I._dbInfo;
            V.db.transaction(function(X) {
              Mt(X, V, "DELETE FROM " + V.storeName + " WHERE key = ?", [v], function() {
                L();
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function ft(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              Mt(V, k, "DELETE FROM " + k.storeName, [], function() {
                j();
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function vt(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              Mt(V, k, "SELECT COUNT(key) as c FROM " + k.storeName, [], function(X, ie) {
                var ne = ie.rows.item(0).c;
                j(ne);
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function lt(v, C) {
        var I = this, j = new d(function(L, k) {
          I.ready().then(function() {
            var V = I._dbInfo;
            V.db.transaction(function(X) {
              Mt(X, V, "SELECT key FROM " + V.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).key : null;
                L(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, C), j;
      }
      function St(v) {
        var C = this, I = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              Mt(V, k, "SELECT key FROM " + k.storeName, [], function(X, ie) {
                for (var ne = [], te = 0; te < ie.rows.length; te++)
                  ne.push(ie.rows.item(te).key);
                j(ne);
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return y(I, v), I;
      }
      function It(v) {
        return new d(function(C, I) {
          v.transaction(function(j) {
            j.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(L, k) {
              for (var V = [], X = 0; X < k.rows.length; X++)
                V.push(k.rows.item(X).name);
              C({ db: v, storeNames: V });
            }, function(L, k) {
              I(k);
            });
          }, function(j) {
            I(j);
          });
        });
      }
      function Ct(v, C) {
        C = O.apply(this, arguments);
        var I = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || I.name, v.storeName = v.storeName || I.storeName);
        var j = this, L;
        return v.name ? L = new d(function(k) {
          var V;
          v.name === I.name ? V = j._dbInfo.db : V = openDatabase(v.name, "", "", 0), v.storeName ? k({ db: V, storeNames: [v.storeName] }) : k(It(V));
        }).then(function(k) {
          return new d(function(V, X) {
            k.db.transaction(function(ie) {
              function ne(st) {
                return new d(function(et, pt) {
                  ie.executeSql("DROP TABLE IF EXISTS " + st, [], function() {
                    et();
                  }, function(nt, lr) {
                    pt(lr);
                  });
                });
              }
              for (var te = [], ye = 0, Ve = k.storeNames.length; ye < Ve; ye++)
                te.push(ne(k.storeNames[ye]));
              d.all(te).then(function() {
                V();
              }).catch(function(st) {
                X(st);
              });
            }, function(ie) {
              X(ie);
            });
          });
        }) : L = d.reject("Invalid arguments"), y(L, C), L;
      }
      var Dt = { _driver: "webSQLStorage", _initStorage: Ft, _support: ke(), iterate: Mr, getItem: ur, setItem: ut, removeItem: yt, clear: ft, length: vt, key: lt, keys: St, dropInstance: Ct };
      function Rt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function mt(v, C) {
        var I = v.name + "/";
        return v.storeName !== C.storeName && (I += v.storeName + "/"), I;
      }
      function bt() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function ot() {
        return !bt() || localStorage.length > 0;
      }
      function R(v) {
        var C = this, I = {};
        if (v)
          for (var j in v)
            I[j] = v[j];
        return I.keyPrefix = mt(v, C._defaultConfig), ot() ? (C._dbInfo = I, I.serializer = Wt, d.resolve()) : d.reject();
      }
      function K(v) {
        var C = this, I = C.ready().then(function() {
          for (var j = C._dbInfo.keyPrefix, L = localStorage.length - 1; L >= 0; L--) {
            var k = localStorage.key(L);
            k.indexOf(j) === 0 && localStorage.removeItem(k);
          }
        });
        return y(I, v), I;
      }
      function ce(v, C) {
        var I = this;
        v = E(v);
        var j = I.ready().then(function() {
          var L = I._dbInfo, k = localStorage.getItem(L.keyPrefix + v);
          return k && (k = L.serializer.deserialize(k)), k;
        });
        return y(j, C), j;
      }
      function Ee(v, C) {
        var I = this, j = I.ready().then(function() {
          for (var L = I._dbInfo, k = L.keyPrefix, V = k.length, X = localStorage.length, ie = 1, ne = 0; ne < X; ne++) {
            var te = localStorage.key(ne);
            if (te.indexOf(k) === 0) {
              var ye = localStorage.getItem(te);
              if (ye && (ye = L.serializer.deserialize(ye)), ye = v(ye, te.substring(V), ie++), ye !== void 0)
                return ye;
            }
          }
        });
        return y(j, C), j;
      }
      function Je(v, C) {
        var I = this, j = I.ready().then(function() {
          var L = I._dbInfo, k;
          try {
            k = localStorage.key(v);
          } catch {
            k = null;
          }
          return k && (k = k.substring(L.keyPrefix.length)), k;
        });
        return y(j, C), j;
      }
      function Be(v) {
        var C = this, I = C.ready().then(function() {
          for (var j = C._dbInfo, L = localStorage.length, k = [], V = 0; V < L; V++) {
            var X = localStorage.key(V);
            X.indexOf(j.keyPrefix) === 0 && k.push(X.substring(j.keyPrefix.length));
          }
          return k;
        });
        return y(I, v), I;
      }
      function We(v) {
        var C = this, I = C.keys().then(function(j) {
          return j.length;
        });
        return y(I, v), I;
      }
      function ze(v, C) {
        var I = this;
        v = E(v);
        var j = I.ready().then(function() {
          var L = I._dbInfo;
          localStorage.removeItem(L.keyPrefix + v);
        });
        return y(j, C), j;
      }
      function Ut(v, C, I) {
        var j = this;
        v = E(v);
        var L = j.ready().then(function() {
          C === void 0 && (C = null);
          var k = C;
          return new d(function(V, X) {
            var ie = j._dbInfo;
            ie.serializer.serialize(C, function(ne, te) {
              if (te)
                X(te);
              else
                try {
                  localStorage.setItem(ie.keyPrefix + v, ne), V(k);
                } catch (ye) {
                  (ye.name === "QuotaExceededError" || ye.name === "NS_ERROR_DOM_QUOTA_REACHED") && X(ye), X(ye);
                }
            });
          });
        });
        return y(L, I), L;
      }
      function dt(v, C) {
        if (C = O.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var I = this.config();
          v.name = v.name || I.name, v.storeName = v.storeName || I.storeName;
        }
        var j = this, L;
        return v.name ? L = new d(function(k) {
          v.storeName ? k(mt(v, j._defaultConfig)) : k(v.name + "/");
        }).then(function(k) {
          for (var V = localStorage.length - 1; V >= 0; V--) {
            var X = localStorage.key(V);
            X.indexOf(k) === 0 && localStorage.removeItem(X);
          }
        }) : L = d.reject("Invalid arguments"), y(L, C), L;
      }
      var _t = { _driver: "localStorageWrapper", _initStorage: R, _support: Rt(), iterate: Ee, getItem: ce, setItem: Ut, removeItem: ze, clear: K, length: We, key: Je, keys: Be, dropInstance: dt }, Tt = function(v, C) {
        return v === C || typeof v == "number" && typeof C == "number" && isNaN(v) && isNaN(C);
      }, Ur = function(v, C) {
        for (var I = v.length, j = 0; j < I; ) {
          if (Tt(v[j], C))
            return !0;
          j++;
        }
        return !1;
      }, yn = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, zt = {}, Ji = {}, rn = { INDEXEDDB: le, WEBSQL: Dt, LOCALSTORAGE: _t }, Mn = [rn.INDEXEDDB._driver, rn.WEBSQL._driver, rn.LOCALSTORAGE._driver], Un = ["dropInstance"], ni = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Un), jr = { description: "", driver: Mn.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
      function Js(v, C) {
        v[C] = function() {
          var I = arguments;
          return v.ready().then(function() {
            return v[C].apply(v, I);
          });
        };
      }
      function ii() {
        for (var v = 1; v < arguments.length; v++) {
          var C = arguments[v];
          if (C)
            for (var I in C)
              C.hasOwnProperty(I) && (yn(C[I]) ? arguments[0][I] = C[I].slice() : arguments[0][I] = C[I]);
        }
        return arguments[0];
      }
      var Xs = function() {
        function v(C) {
          a(this, v);
          for (var I in rn)
            if (rn.hasOwnProperty(I)) {
              var j = rn[I], L = j._driver;
              this[I] = L, zt[L] || this.defineDriver(j);
            }
          this._defaultConfig = ii({}, jr), this._config = ii({}, this._defaultConfig, C), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(C) {
          if ((typeof C > "u" ? "undefined" : s(C)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var I in C) {
              if (I === "storeName" && (C[I] = C[I].replace(/\W/g, "_")), I === "version" && typeof C[I] != "number")
                return new Error("Database version must be a number.");
              this._config[I] = C[I];
            }
            return "driver" in C && C.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof C == "string" ? this._config[C] : this._config;
        }, v.prototype.defineDriver = function(C, I, j) {
          var L = new d(function(k, V) {
            try {
              var X = C._driver, ie = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!C._driver) {
                V(ie);
                return;
              }
              for (var ne = ni.concat("_initStorage"), te = 0, ye = ne.length; te < ye; te++) {
                var Ve = ne[te], st = !Ur(Un, Ve);
                if ((st || C[Ve]) && typeof C[Ve] != "function") {
                  V(ie);
                  return;
                }
              }
              var et = function() {
                for (var nt = function(to) {
                  return function() {
                    var ro = new Error("Method " + to + " is not implemented by the current driver"), Xi = d.reject(ro);
                    return y(Xi, arguments[arguments.length - 1]), Xi;
                  };
                }, lr = 0, si = Un.length; lr < si; lr++) {
                  var br = Un[lr];
                  C[br] || (C[br] = nt(br));
                }
              };
              et();
              var pt = function(nt) {
                zt[X] && console.info("Redefining LocalForage driver: " + X), zt[X] = C, Ji[X] = nt, k();
              };
              "_support" in C ? C._support && typeof C._support == "function" ? C._support().then(pt, V) : pt(!!C._support) : pt(!0);
            } catch (nt) {
              V(nt);
            }
          });
          return m(L, I, j), L;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(C, I, j) {
          var L = zt[C] ? d.resolve(zt[C]) : d.reject(new Error("Driver not found."));
          return m(L, I, j), L;
        }, v.prototype.getSerializer = function(C) {
          var I = d.resolve(Wt);
          return m(I, C), I;
        }, v.prototype.ready = function(C) {
          var I = this, j = I._driverSet.then(function() {
            return I._ready === null && (I._ready = I._initDriver()), I._ready;
          });
          return m(j, C, C), j;
        }, v.prototype.setDriver = function(C, I, j) {
          var L = this;
          yn(C) || (C = [C]);
          var k = this._getSupportedDrivers(C);
          function V() {
            L._config.driver = L.driver();
          }
          function X(te) {
            return L._extend(te), V(), L._ready = L._initStorage(L._config), L._ready;
          }
          function ie(te) {
            return function() {
              var ye = 0;
              function Ve() {
                for (; ye < te.length; ) {
                  var st = te[ye];
                  return ye++, L._dbInfo = null, L._ready = null, L.getDriver(st).then(X).catch(Ve);
                }
                V();
                var et = new Error("No available storage method found.");
                return L._driverSet = d.reject(et), L._driverSet;
              }
              return Ve();
            };
          }
          var ne = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = ne.then(function() {
            var te = k[0];
            return L._dbInfo = null, L._ready = null, L.getDriver(te).then(function(ye) {
              L._driver = ye._driver, V(), L._wrapLibraryMethodsWithReady(), L._initDriver = ie(k);
            });
          }).catch(function() {
            V();
            var te = new Error("No available storage method found.");
            return L._driverSet = d.reject(te), L._driverSet;
          }), m(this._driverSet, I, j), this._driverSet;
        }, v.prototype.supports = function(C) {
          return !!Ji[C];
        }, v.prototype._extend = function(C) {
          ii(this, C);
        }, v.prototype._getSupportedDrivers = function(C) {
          for (var I = [], j = 0, L = C.length; j < L; j++) {
            var k = C[j];
            this.supports(k) && I.push(k);
          }
          return I;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var C = 0, I = ni.length; C < I; C++)
            Js(this, ni[C]);
        }, v.prototype.createInstance = function(C) {
          return new v(C);
        }, v;
      }(), eo = new Xs();
      n.exports = eo;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(cl);
var Wf = cl.exports, ci = Kf(Wf);
class Hf {
  constructor() {
    this.getKeys = async () => await ci.keys(), this.getEntries = async () => {
      let e = [];
      return (await this.getKeys()).forEach(async (r) => e.push(await ci.getItem(r))), e;
    }, this.getItem = async (e) => await ci.getItem(e) ?? void 0, this.setItem = async (e, r) => {
      await ci.setItem(e, r);
    }, this.removeItem = async (e) => {
      await ci.removeItem(e);
    };
  }
}
let Gf = class {
  constructor() {
    const e = new Hf();
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
var Jn = {};
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
var Ao = function(t, e) {
  return Ao = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, Ao(t, e);
};
function Qf(t, e) {
  Ao(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var No = function() {
  return No = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, No.apply(this, arguments);
};
function Zf(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Yf(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (s = (i < 3 ? a(s) : i > 3 ? a(e, r, s) : a(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function Jf(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Xf(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function ed(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(a) {
      a(s);
    });
  }
  return new (r || (r = Promise))(function(s, a) {
    function o(f) {
      try {
        l(n.next(f));
      } catch (d) {
        a(d);
      }
    }
    function u(f) {
      try {
        l(n.throw(f));
      } catch (d) {
        a(d);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(o, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function td(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(l) {
    return function(f) {
      return u([l, f]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (f) {
        l = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function rd(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function nd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Po(t) {
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
function ul(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function id() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(ul(arguments[e]));
  return t;
}
function sd() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], a = 0, o = s.length; a < o; a++, i++)
      n[i] = s[a];
  return n;
}
function Di(t) {
  return this instanceof Di ? (this.v = t, this) : new Di(t);
}
function od(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(m) {
      return new Promise(function(E, O) {
        s.push([y, m, E, O]) > 1 || o(y, m);
      });
    });
  }
  function o(y, m) {
    try {
      u(n[y](m));
    } catch (E) {
      d(s[0][3], E);
    }
  }
  function u(y) {
    y.value instanceof Di ? Promise.resolve(y.value.v).then(l, f) : d(s[0][2], y);
  }
  function l(y) {
    o("next", y);
  }
  function f(y) {
    o("throw", y);
  }
  function d(y, m) {
    y(m), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function ad(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(a) {
      return (r = !r) ? { value: Di(t[i](a)), done: i === "return" } : s ? s(a) : a;
    } : s;
  }
}
function cd(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Po == "function" ? Po(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(a) {
      return new Promise(function(o, u) {
        a = t[s](a), i(o, u, a.done, a.value);
      });
    };
  }
  function i(s, a, o, u) {
    Promise.resolve(u).then(function(l) {
      s({ value: l, done: o });
    }, a);
  }
}
function ud(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function ld(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function hd(t) {
  return t && t.__esModule ? t : { default: t };
}
function fd(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function dd(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return No;
  },
  __asyncDelegator: ad,
  __asyncGenerator: od,
  __asyncValues: cd,
  __await: Di,
  __awaiter: ed,
  __classPrivateFieldGet: fd,
  __classPrivateFieldSet: dd,
  __createBinding: rd,
  __decorate: Yf,
  __exportStar: nd,
  __extends: Qf,
  __generator: td,
  __importDefault: hd,
  __importStar: ld,
  __makeTemplateObject: ud,
  __metadata: Xf,
  __param: Jf,
  __read: ul,
  __rest: Zf,
  __spread: id,
  __spreadArrays: sd,
  __values: Po
}, Symbol.toStringTag, { value: "Module" })), Hr = /* @__PURE__ */ la(pd);
var ui = {}, ge = {}, oo = {}, li = {}, ac;
function gd() {
  if (ac)
    return li;
  ac = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return li.delay = t, li;
}
var wn = {}, ao = {}, En = {}, cc;
function yd() {
  return cc || (cc = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.ONE_THOUSAND = En.ONE_HUNDRED = void 0, En.ONE_HUNDRED = 100, En.ONE_THOUSAND = 1e3), En;
}
var co = {}, uc;
function vd() {
  return uc || (uc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(co)), co;
}
var lc;
function ll() {
  return lc || (lc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Hr;
    e.__exportStar(yd(), t), e.__exportStar(vd(), t);
  }(ao)), ao;
}
var hc;
function md() {
  if (hc)
    return wn;
  hc = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.fromMiliseconds = wn.toMiliseconds = void 0;
  const t = ll();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  wn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return wn.fromMiliseconds = r, wn;
}
var fc;
function bd() {
  return fc || (fc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Hr;
    e.__exportStar(gd(), t), e.__exportStar(md(), t);
  }(oo)), oo;
}
var kn = {}, dc;
function _d() {
  if (dc)
    return kn;
  dc = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.Watch = void 0;
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
  return kn.Watch = t, kn.default = t, kn;
}
var uo = {}, hi = {}, pc;
function wd() {
  if (pc)
    return hi;
  pc = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.IWatch = void 0;
  class t {
  }
  return hi.IWatch = t, hi;
}
var gc;
function Ed() {
  return gc || (gc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Hr.__exportStar(wd(), t);
  }(uo)), uo;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Hr;
  e.__exportStar(bd(), t), e.__exportStar(_d(), t), e.__exportStar(Ed(), t), e.__exportStar(ll(), t);
})(ge);
var lo = {}, fi = {};
let vr = class {
};
const Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: vr
}, Symbol.toStringTag, { value: "Module" })), Dd = /* @__PURE__ */ la(Sd);
var yc;
function xd() {
  if (yc)
    return fi;
  yc = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.IHeartBeat = void 0;
  const t = Dd;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return fi.IHeartBeat = e, fi;
}
var vc;
function hl() {
  return vc || (vc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Hr.__exportStar(xd(), t);
  }(lo)), lo;
}
var ho = {}, Sn = {}, mc;
function Od() {
  if (mc)
    return Sn;
  mc = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.HEARTBEAT_EVENTS = Sn.HEARTBEAT_INTERVAL = void 0;
  const t = ge;
  return Sn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Sn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Sn;
}
var bc;
function fl() {
  return bc || (bc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Hr.__exportStar(Od(), t);
  }(ho)), ho;
}
var _c;
function Id() {
  if (_c)
    return ui;
  _c = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.HeartBeat = void 0;
  const t = Hr, e = xr, r = ge, n = hl(), i = fl();
  class s extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const u = new s(o);
        return yield u.init(), u;
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
    on(o, u) {
      this.events.on(o, u);
    }
    once(o, u) {
      this.events.once(o, u);
    }
    off(o, u) {
      this.events.off(o, u);
    }
    removeListener(o, u) {
      this.events.removeListener(o, u);
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
  return ui.HeartBeat = s, ui;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Hr;
  e.__exportStar(Id(), t), e.__exportStar(hl(), t), e.__exportStar(fl(), t);
})(Jn);
var Xe = {}, fo, wc;
function Cd() {
  if (wc)
    return fo;
  wc = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  fo = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = s(r);
      for (var l = 1; l < o; l++)
        u[l] = s(n[l]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", y = 1 - a, m = -1, E = r && r.length || 0, O = 0; O < E; ) {
      if (r.charCodeAt(O) === 37 && O + 1 < E) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(O + 1)) {
          case 100:
          case 102:
            if (y >= f || n[y] == null)
              break;
            m < O && (d += r.slice(m, O)), d += Number(n[y]), m = O + 2, O++;
            break;
          case 105:
            if (y >= f || n[y] == null)
              break;
            m < O && (d += r.slice(m, O)), d += Math.floor(Number(n[y])), m = O + 2, O++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || n[y] === void 0)
              break;
            m < O && (d += r.slice(m, O));
            var S = typeof n[y];
            if (S === "string") {
              d += "'" + n[y] + "'", m = O + 2, O++;
              break;
            }
            if (S === "function") {
              d += n[y].name || "<anonymous>", m = O + 2, O++;
              break;
            }
            d += s(n[y]), m = O + 2, O++;
            break;
          case 115:
            if (y >= f)
              break;
            m < O && (d += r.slice(m, O)), d += String(n[y]), m = O + 2, O++;
            break;
          case 37:
            m < O && (d += r.slice(m, O)), d += "%", m = O + 2, O++, y--;
            break;
        }
        ++y;
      }
      ++O;
    }
    return m === -1 ? r : (m < E && (d += r.slice(m)), d);
  }
  return fo;
}
var po, Ec;
function Rd() {
  if (Ec)
    return po;
  Ec = 1;
  const t = Cd();
  po = i;
  const e = b().console || {}, r = {
    mapHttpRequest: E,
    mapHttpResponse: E,
    wrapRequestSerializer: O,
    wrapResponseSerializer: O,
    wrapErrorSerializer: O,
    req: E,
    res: E,
    err: y
  };
  function n(p, c) {
    return Array.isArray(p) ? p.filter(function(A) {
      return A !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(c) : !1;
  }
  function i(p) {
    p = p || {}, p.browser = p.browser || {};
    const c = p.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = p.browser.write || e;
    p.browser.write && (p.browser.asObject = !0);
    const A = p.serializers || {}, M = n(p.browser.serialize, A);
    let B = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (B = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const ee = p.level || "info", N = Object.create(g);
    N.log || (N.log = S), Object.defineProperty(N, "levelVal", {
      get: se
    }), Object.defineProperty(N, "level", {
      get: Z,
      set: H
    });
    const $ = {
      transmit: c,
      serialize: M,
      asObject: p.browser.asObject,
      levels: G,
      timestamp: m(p)
    };
    N.levels = i.levels, N.level = ee, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = S, N.serializers = A, N._serialize = M, N._stdErrSerialize = B, N.child = Y, c && (N._logEvent = d());
    function se() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function H(W) {
      if (W !== "silent" && !this.levels.values[W])
        throw Error("unknown level " + W);
      this._level = W, s($, N, "error", "log"), s($, N, "fatal", "error"), s($, N, "warn", "error"), s($, N, "info", "log"), s($, N, "debug", "log"), s($, N, "trace", "log");
    }
    function Y(W, J) {
      if (!W)
        throw new Error("missing bindings for child Pino");
      J = J || {}, M && W.serializers && (J.serializers = W.serializers);
      const we = J.serializers;
      if (M && we) {
        var re = Object.assign({}, A, we), be = p.browser.serialize === !0 ? Object.keys(re) : M;
        delete W.serializers, u([W], be, re, this._stdErrSerialize);
      }
      function he(ve) {
        this._childLevel = (ve._childLevel | 0) + 1, this.error = l(ve, W, "error"), this.fatal = l(ve, W, "fatal"), this.warn = l(ve, W, "warn"), this.info = l(ve, W, "info"), this.debug = l(ve, W, "debug"), this.trace = l(ve, W, "trace"), re && (this.serializers = re, this._serialize = be), c && (this._logEvent = d(
          [].concat(ve._logEvent.bindings, W)
        ));
      }
      return he.prototype = this, new he(this);
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: P, epochTime: _, unixTime: x, isoTime: w });
  function s(p, c, g, A) {
    const M = Object.getPrototypeOf(c);
    c[g] = c.levelVal > c.levels.values[g] ? S : M[g] ? M[g] : e[g] || e[A] || S, a(p, c, g);
  }
  function a(p, c, g) {
    !p.transmit && c[g] === S || (c[g] = function(A) {
      return function() {
        const B = p.timestamp(), G = new Array(arguments.length), ee = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var N = 0; N < G.length; N++)
          G[N] = arguments[N];
        if (p.serialize && !p.asObject && u(G, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? A.call(ee, o(this, g, G, B)) : A.apply(ee, G), p.transmit) {
          const $ = p.transmit.level || c.level, se = i.levels.values[$], Z = i.levels.values[g];
          if (Z < se)
            return;
          f(this, {
            ts: B,
            methodLevel: g,
            methodValue: Z,
            transmitLevel: $,
            transmitValue: i.levels.values[p.transmit.level || c.level],
            send: p.transmit.send,
            val: c.levelVal
          }, G);
        }
      };
    }(c[g]));
  }
  function o(p, c, g, A) {
    p._serialize && u(g, p._serialize, p.serializers, p._stdErrSerialize);
    const M = g.slice();
    let B = M[0];
    const G = {};
    A && (G.time = A), G.level = i.levels.values[c];
    let ee = (p._childLevel | 0) + 1;
    if (ee < 1 && (ee = 1), B !== null && typeof B == "object") {
      for (; ee-- && typeof M[0] == "object"; )
        Object.assign(G, M.shift());
      B = M.length ? t(M.shift(), M) : void 0;
    } else
      typeof B == "string" && (B = t(M.shift(), M));
    return B !== void 0 && (G.msg = B), G;
  }
  function u(p, c, g, A) {
    for (const M in p)
      if (A && p[M] instanceof Error)
        p[M] = i.stdSerializers.err(p[M]);
      else if (typeof p[M] == "object" && !Array.isArray(p[M]))
        for (const B in p[M])
          c && c.indexOf(B) > -1 && B in g && (p[M][B] = g[B](p[M][B]));
  }
  function l(p, c, g) {
    return function() {
      const A = new Array(1 + arguments.length);
      A[0] = c;
      for (var M = 1; M < A.length; M++)
        A[M] = arguments[M - 1];
      return p[g].apply(this, A);
    };
  }
  function f(p, c, g) {
    const A = c.send, M = c.ts, B = c.methodLevel, G = c.methodValue, ee = c.val, N = p._logEvent.bindings;
    u(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = M, p._logEvent.messages = g.filter(function($) {
      return N.indexOf($) === -1;
    }), p._logEvent.level.label = B, p._logEvent.level.value = G, A(B, p._logEvent, ee), p._logEvent = d(N);
  }
  function d(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function y(p) {
    const c = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const g in p)
      c[g] === void 0 && (c[g] = p[g]);
    return c;
  }
  function m(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? P : _;
  }
  function E() {
    return {};
  }
  function O(p) {
    return p;
  }
  function S() {
  }
  function P() {
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
    function p(c) {
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
      return p(self) || p(window) || p(this) || {};
    }
  }
  return po;
}
var Dn = {}, Sc;
function dl() {
  return Sc || (Sc = 1, Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.PINO_CUSTOM_CONTEXT_KEY = Dn.PINO_LOGGER_DEFAULTS = void 0, Dn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Dn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Dn;
}
var rr = {}, Dc;
function Td() {
  if (Dc)
    return rr;
  Dc = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.generateChildLogger = rr.formatChildLoggerContext = rr.getLoggerContext = rr.setBrowserLoggerContext = rr.getBrowserLoggerContext = rr.getDefaultLoggerOptions = void 0;
  const t = dl();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  rr.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  rr.getBrowserLoggerContext = r;
  function n(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[l] = u, o;
  }
  rr.setBrowserLoggerContext = n;
  function i(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof o.bindings > "u" ? l = r(o, u) : l = o.bindings().context || "", l;
  }
  rr.getLoggerContext = i;
  function s(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, l);
    return f.trim() ? `${f}/${u}` : u;
  }
  rr.formatChildLoggerContext = s;
  function a(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, u, l), d = o.child({ context: f });
    return n(d, f, l);
  }
  return rr.generateChildLogger = a, rr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Hr, r = e.__importDefault(Rd());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(dl(), t), e.__exportStar(Td(), t);
})(Xe);
let Ad = class extends vr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Nd = class extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Pd = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Ld = class extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Fd = class extends vr {
  constructor(e) {
    super();
  }
}, Md = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Ud = class extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, jd = class extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, kd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, $d = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, qd = class {
  constructor(e) {
    this.client = e;
  }
};
const zd = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Bd = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function pl(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Bd(t);
  } catch {
    return t;
  }
}
function da(t) {
  return typeof t == "string" ? t : zd(t) || "";
}
var pa = {}, Xn = {}, Us = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.BrowserRandomSource = void 0;
const xc = 65536;
class Vd {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += xc)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, xc)));
    return r;
  }
}
js.BrowserRandomSource = Vd;
function Kd(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ks = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
function Wd(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
mr.wipe = Wd;
const Hd = {}, Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hd
}, Symbol.toStringTag, { value: "Module" })), Qd = /* @__PURE__ */ la(Gd);
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.NodeRandomSource = void 0;
const Zd = mr;
class Yd {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Kd < "u") {
      const e = Qd;
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
    return (0, Zd.wipe)(r), n;
  }
}
ks.NodeRandomSource = Yd;
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.SystemRandomSource = void 0;
const Jd = js, Xd = ks;
class ep {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Jd.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Xd.NodeRandomSource(), this._source.isAvailable) {
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
Us.SystemRandomSource = ep;
var Le = {}, gl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var l = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, y = u & 65535;
    return f * y + (l * y + f * d << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(o, u) {
    return o + u | 0;
  }
  t.add = r;
  function n(o, u) {
    return o - u | 0;
  }
  t.sub = n;
  function i(o, u) {
    return o << u | o >>> 32 - u;
  }
  t.rotl = i;
  function s(o, u) {
    return o << 32 - u | o >>> u;
  }
  t.rotr = s;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(gl);
Object.defineProperty(Le, "__esModule", { value: !0 });
var yl = gl;
function tp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Le.readInt16BE = tp;
function rp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Le.readUint16BE = rp;
function np(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Le.readInt16LE = np;
function ip(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Le.readUint16LE = ip;
function vl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Le.writeUint16BE = vl;
Le.writeInt16BE = vl;
function ml(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Le.writeUint16LE = ml;
Le.writeInt16LE = ml;
function Lo(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Le.readInt32BE = Lo;
function Fo(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Le.readUint32BE = Fo;
function Mo(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Le.readInt32LE = Mo;
function Uo(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Le.readUint32LE = Uo;
function ms(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Le.writeUint32BE = ms;
Le.writeInt32BE = ms;
function bs(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Le.writeUint32LE = bs;
Le.writeInt32LE = bs;
function sp(t, e) {
  e === void 0 && (e = 0);
  var r = Lo(t, e), n = Lo(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Le.readInt64BE = sp;
function op(t, e) {
  e === void 0 && (e = 0);
  var r = Fo(t, e), n = Fo(t, e + 4);
  return r * 4294967296 + n;
}
Le.readUint64BE = op;
function ap(t, e) {
  e === void 0 && (e = 0);
  var r = Mo(t, e), n = Mo(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Le.readInt64LE = ap;
function cp(t, e) {
  e === void 0 && (e = 0);
  var r = Uo(t, e), n = Uo(t, e + 4);
  return n * 4294967296 + r;
}
Le.readUint64LE = cp;
function bl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ms(t / 4294967296 >>> 0, e, r), ms(t >>> 0, e, r + 4), e;
}
Le.writeUint64BE = bl;
Le.writeInt64BE = bl;
function _l(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), bs(t >>> 0, e, r), bs(t / 4294967296 >>> 0, e, r + 4), e;
}
Le.writeUint64LE = _l;
Le.writeInt64LE = _l;
function up(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
Le.readUintBE = up;
function lp(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
Le.readUintLE = lp;
function hp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!yl.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Le.writeUintBE = hp;
function fp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!yl.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Le.writeUintLE = fp;
function dp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Le.readFloat32BE = dp;
function pp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Le.readFloat32LE = pp;
function gp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Le.readFloat64BE = gp;
function yp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Le.readFloat64LE = yp;
function vp(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Le.writeFloat32BE = vp;
function mp(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Le.writeFloat32LE = mp;
function bp(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Le.writeFloat64BE = bp;
function _p(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Le.writeFloat64LE = _p;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Us, r = Le, n = mr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(l, f = t.defaultRandomSource) {
    return f.randomBytes(l);
  }
  t.randomBytes = i;
  function s(l = t.defaultRandomSource) {
    const f = i(4, l), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = s;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(l, f = a, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const m = f.length, E = 256 - 256 % m;
    for (; l > 0; ) {
      const O = i(Math.ceil(l * 256 / E), d);
      for (let S = 0; S < O.length && l > 0; S++) {
        const P = O[S];
        P < E && (y += f.charAt(P % m), l--);
      }
      (0, n.wipe)(O);
    }
    return y;
  }
  t.randomString = o;
  function u(l, f = a, d = t.defaultRandomSource) {
    const y = Math.ceil(l / (Math.log(f.length) / Math.LN2));
    return o(y, f, d);
  }
  t.randomStringForEntropy = u;
})(Xn);
var wl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Le, r = mr;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, o.prototype.update = function(u, l) {
        if (l === void 0 && (l = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = u[f++], l--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = u[f++], l--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var l = this._bytesHashed, f = this._bufferLength, d = l / 536870912 | 0, y = l << 3, m = l % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var E = f + 1; E < m - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(y, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 8; E++)
          e.writeUint32BE(this._stateHi[E], u, E * 8), e.writeUint32BE(this._stateLo[E], u, E * 8 + 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._stateHi.set(u.stateHi), this._stateLo.set(u.stateLo), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.stateHi), r.wipe(u.stateLo), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
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
  function s(o, u, l, f, d, y, m) {
    for (var E = l[0], O = l[1], S = l[2], P = l[3], _ = l[4], x = l[5], w = l[6], b = l[7], p = f[0], c = f[1], g = f[2], A = f[3], M = f[4], B = f[5], G = f[6], ee = f[7], N, $, se, Z, H, Y, W, J; m >= 128; ) {
      for (var we = 0; we < 16; we++) {
        var re = 8 * we + y;
        o[we] = e.readUint32BE(d, re), u[we] = e.readUint32BE(d, re + 4);
      }
      for (var we = 0; we < 80; we++) {
        var be = E, he = O, ve = S, z = P, q = _, F = x, h = w, T = b, oe = p, le = c, ke = g, xe = A, Ae = M, He = B, it = G, rt = ee;
        if (N = b, $ = ee, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = (_ >>> 14 | M << 32 - 14) ^ (_ >>> 18 | M << 32 - 18) ^ (M >>> 41 - 32 | _ << 32 - (41 - 32)), $ = (M >>> 14 | _ << 32 - 14) ^ (M >>> 18 | _ << 32 - 18) ^ (_ >>> 41 - 32 | M << 32 - (41 - 32)), H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = _ & x ^ ~_ & w, $ = M & B ^ ~M & G, H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = i[we * 2], $ = i[we * 2 + 1], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = o[we % 16], $ = u[we % 16], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, se = W & 65535 | J << 16, Z = H & 65535 | Y << 16, N = se, $ = Z, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = (E >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | E << 32 - (34 - 32)) ^ (p >>> 39 - 32 | E << 32 - (39 - 32)), $ = (p >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | p << 32 - (34 - 32)) ^ (E >>> 39 - 32 | p << 32 - (39 - 32)), H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = E & O ^ E & S ^ O & S, $ = p & c ^ p & g ^ c & g, H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, T = W & 65535 | J << 16, rt = H & 65535 | Y << 16, N = z, $ = xe, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = se, $ = Z, H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, z = W & 65535 | J << 16, xe = H & 65535 | Y << 16, O = be, S = he, P = ve, _ = z, x = q, w = F, b = h, E = T, c = oe, g = le, A = ke, M = xe, B = Ae, G = He, ee = it, p = rt, we % 16 === 15)
          for (var re = 0; re < 16; re++)
            N = o[re], $ = u[re], H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = o[(re + 9) % 16], $ = u[(re + 9) % 16], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, se = o[(re + 1) % 16], Z = u[(re + 1) % 16], N = (se >>> 1 | Z << 32 - 1) ^ (se >>> 8 | Z << 32 - 8) ^ se >>> 7, $ = (Z >>> 1 | se << 32 - 1) ^ (Z >>> 8 | se << 32 - 8) ^ (Z >>> 7 | se << 32 - 7), H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, se = o[(re + 14) % 16], Z = u[(re + 14) % 16], N = (se >>> 19 | Z << 32 - 19) ^ (Z >>> 61 - 32 | se << 32 - (61 - 32)) ^ se >>> 6, $ = (Z >>> 19 | se << 32 - 19) ^ (se >>> 61 - 32 | Z << 32 - (61 - 32)) ^ (Z >>> 6 | se << 32 - 6), H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, o[re] = W & 65535 | J << 16, u[re] = H & 65535 | Y << 16;
      }
      N = E, $ = p, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[0], $ = f[0], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[0] = E = W & 65535 | J << 16, f[0] = p = H & 65535 | Y << 16, N = O, $ = c, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[1], $ = f[1], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[1] = O = W & 65535 | J << 16, f[1] = c = H & 65535 | Y << 16, N = S, $ = g, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[2], $ = f[2], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[2] = S = W & 65535 | J << 16, f[2] = g = H & 65535 | Y << 16, N = P, $ = A, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[3], $ = f[3], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[3] = P = W & 65535 | J << 16, f[3] = A = H & 65535 | Y << 16, N = _, $ = M, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[4], $ = f[4], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[4] = _ = W & 65535 | J << 16, f[4] = M = H & 65535 | Y << 16, N = x, $ = B, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[5], $ = f[5], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[5] = x = W & 65535 | J << 16, f[5] = B = H & 65535 | Y << 16, N = w, $ = G, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[6], $ = f[6], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[6] = w = W & 65535 | J << 16, f[6] = G = H & 65535 | Y << 16, N = b, $ = ee, H = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[7], $ = f[7], H += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += H >>> 16, W += Y >>> 16, J += W >>> 16, l[7] = b = W & 65535 | J << 16, f[7] = ee = H & 65535 | Y << 16, y += 128, m -= 128;
    }
    return y;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var l = u.digest();
    return u.clean(), l;
  }
  t.hash = a;
})(wl);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Xn, r = wl, n = mr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(z) {
    const q = new Float64Array(16);
    if (z)
      for (let F = 0; F < z.length; F++)
        q[F] = z[F];
    return q;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const a = i(), o = i([1]), u = i([
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
  ]), l = i([
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
  ]), y = i([
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
  function m(z, q) {
    for (let F = 0; F < 16; F++)
      z[F] = q[F] | 0;
  }
  function E(z) {
    let q = 1;
    for (let F = 0; F < 16; F++) {
      let h = z[F] + q + 65535;
      q = Math.floor(h / 65536), z[F] = h - q * 65536;
    }
    z[0] += q - 1 + 37 * (q - 1);
  }
  function O(z, q, F) {
    const h = ~(F - 1);
    for (let T = 0; T < 16; T++) {
      const oe = h & (z[T] ^ q[T]);
      z[T] ^= oe, q[T] ^= oe;
    }
  }
  function S(z, q) {
    const F = i(), h = i();
    for (let T = 0; T < 16; T++)
      h[T] = q[T];
    E(h), E(h), E(h);
    for (let T = 0; T < 2; T++) {
      F[0] = h[0] - 65517;
      for (let le = 1; le < 15; le++)
        F[le] = h[le] - 65535 - (F[le - 1] >> 16 & 1), F[le - 1] &= 65535;
      F[15] = h[15] - 32767 - (F[14] >> 16 & 1);
      const oe = F[15] >> 16 & 1;
      F[14] &= 65535, O(h, F, 1 - oe);
    }
    for (let T = 0; T < 16; T++)
      z[2 * T] = h[T] & 255, z[2 * T + 1] = h[T] >> 8;
  }
  function P(z, q) {
    let F = 0;
    for (let h = 0; h < 32; h++)
      F |= z[h] ^ q[h];
    return (1 & F - 1 >>> 8) - 1;
  }
  function _(z, q) {
    const F = new Uint8Array(32), h = new Uint8Array(32);
    return S(F, z), S(h, q), P(F, h);
  }
  function x(z) {
    const q = new Uint8Array(32);
    return S(q, z), q[0] & 1;
  }
  function w(z, q) {
    for (let F = 0; F < 16; F++)
      z[F] = q[2 * F] + (q[2 * F + 1] << 8);
    z[15] &= 32767;
  }
  function b(z, q, F) {
    for (let h = 0; h < 16; h++)
      z[h] = q[h] + F[h];
  }
  function p(z, q, F) {
    for (let h = 0; h < 16; h++)
      z[h] = q[h] - F[h];
  }
  function c(z, q, F) {
    let h, T, oe = 0, le = 0, ke = 0, xe = 0, Ae = 0, He = 0, it = 0, rt = 0, $e = 0, Fe = 0, Re = 0, Ne = 0, Te = 0, Ie = 0, Oe = 0, _e = 0, Pe = 0, Me = 0, Se = 0, qe = 0, Ge = 0, Ze = 0, Qe = 0, Ye = 0, tr = 0, Wt = 0, pr = 0, Ft = 0, Mt = 0, ur = 0, Mr = 0, ct = F[0], ut = F[1], yt = F[2], ft = F[3], vt = F[4], lt = F[5], St = F[6], It = F[7], Ct = F[8], Dt = F[9], Rt = F[10], mt = F[11], bt = F[12], ot = F[13], R = F[14], K = F[15];
    h = q[0], oe += h * ct, le += h * ut, ke += h * yt, xe += h * ft, Ae += h * vt, He += h * lt, it += h * St, rt += h * It, $e += h * Ct, Fe += h * Dt, Re += h * Rt, Ne += h * mt, Te += h * bt, Ie += h * ot, Oe += h * R, _e += h * K, h = q[1], le += h * ct, ke += h * ut, xe += h * yt, Ae += h * ft, He += h * vt, it += h * lt, rt += h * St, $e += h * It, Fe += h * Ct, Re += h * Dt, Ne += h * Rt, Te += h * mt, Ie += h * bt, Oe += h * ot, _e += h * R, Pe += h * K, h = q[2], ke += h * ct, xe += h * ut, Ae += h * yt, He += h * ft, it += h * vt, rt += h * lt, $e += h * St, Fe += h * It, Re += h * Ct, Ne += h * Dt, Te += h * Rt, Ie += h * mt, Oe += h * bt, _e += h * ot, Pe += h * R, Me += h * K, h = q[3], xe += h * ct, Ae += h * ut, He += h * yt, it += h * ft, rt += h * vt, $e += h * lt, Fe += h * St, Re += h * It, Ne += h * Ct, Te += h * Dt, Ie += h * Rt, Oe += h * mt, _e += h * bt, Pe += h * ot, Me += h * R, Se += h * K, h = q[4], Ae += h * ct, He += h * ut, it += h * yt, rt += h * ft, $e += h * vt, Fe += h * lt, Re += h * St, Ne += h * It, Te += h * Ct, Ie += h * Dt, Oe += h * Rt, _e += h * mt, Pe += h * bt, Me += h * ot, Se += h * R, qe += h * K, h = q[5], He += h * ct, it += h * ut, rt += h * yt, $e += h * ft, Fe += h * vt, Re += h * lt, Ne += h * St, Te += h * It, Ie += h * Ct, Oe += h * Dt, _e += h * Rt, Pe += h * mt, Me += h * bt, Se += h * ot, qe += h * R, Ge += h * K, h = q[6], it += h * ct, rt += h * ut, $e += h * yt, Fe += h * ft, Re += h * vt, Ne += h * lt, Te += h * St, Ie += h * It, Oe += h * Ct, _e += h * Dt, Pe += h * Rt, Me += h * mt, Se += h * bt, qe += h * ot, Ge += h * R, Ze += h * K, h = q[7], rt += h * ct, $e += h * ut, Fe += h * yt, Re += h * ft, Ne += h * vt, Te += h * lt, Ie += h * St, Oe += h * It, _e += h * Ct, Pe += h * Dt, Me += h * Rt, Se += h * mt, qe += h * bt, Ge += h * ot, Ze += h * R, Qe += h * K, h = q[8], $e += h * ct, Fe += h * ut, Re += h * yt, Ne += h * ft, Te += h * vt, Ie += h * lt, Oe += h * St, _e += h * It, Pe += h * Ct, Me += h * Dt, Se += h * Rt, qe += h * mt, Ge += h * bt, Ze += h * ot, Qe += h * R, Ye += h * K, h = q[9], Fe += h * ct, Re += h * ut, Ne += h * yt, Te += h * ft, Ie += h * vt, Oe += h * lt, _e += h * St, Pe += h * It, Me += h * Ct, Se += h * Dt, qe += h * Rt, Ge += h * mt, Ze += h * bt, Qe += h * ot, Ye += h * R, tr += h * K, h = q[10], Re += h * ct, Ne += h * ut, Te += h * yt, Ie += h * ft, Oe += h * vt, _e += h * lt, Pe += h * St, Me += h * It, Se += h * Ct, qe += h * Dt, Ge += h * Rt, Ze += h * mt, Qe += h * bt, Ye += h * ot, tr += h * R, Wt += h * K, h = q[11], Ne += h * ct, Te += h * ut, Ie += h * yt, Oe += h * ft, _e += h * vt, Pe += h * lt, Me += h * St, Se += h * It, qe += h * Ct, Ge += h * Dt, Ze += h * Rt, Qe += h * mt, Ye += h * bt, tr += h * ot, Wt += h * R, pr += h * K, h = q[12], Te += h * ct, Ie += h * ut, Oe += h * yt, _e += h * ft, Pe += h * vt, Me += h * lt, Se += h * St, qe += h * It, Ge += h * Ct, Ze += h * Dt, Qe += h * Rt, Ye += h * mt, tr += h * bt, Wt += h * ot, pr += h * R, Ft += h * K, h = q[13], Ie += h * ct, Oe += h * ut, _e += h * yt, Pe += h * ft, Me += h * vt, Se += h * lt, qe += h * St, Ge += h * It, Ze += h * Ct, Qe += h * Dt, Ye += h * Rt, tr += h * mt, Wt += h * bt, pr += h * ot, Ft += h * R, Mt += h * K, h = q[14], Oe += h * ct, _e += h * ut, Pe += h * yt, Me += h * ft, Se += h * vt, qe += h * lt, Ge += h * St, Ze += h * It, Qe += h * Ct, Ye += h * Dt, tr += h * Rt, Wt += h * mt, pr += h * bt, Ft += h * ot, Mt += h * R, ur += h * K, h = q[15], _e += h * ct, Pe += h * ut, Me += h * yt, Se += h * ft, qe += h * vt, Ge += h * lt, Ze += h * St, Qe += h * It, Ye += h * Ct, tr += h * Dt, Wt += h * Rt, pr += h * mt, Ft += h * bt, Mt += h * ot, ur += h * R, Mr += h * K, oe += 38 * Pe, le += 38 * Me, ke += 38 * Se, xe += 38 * qe, Ae += 38 * Ge, He += 38 * Ze, it += 38 * Qe, rt += 38 * Ye, $e += 38 * tr, Fe += 38 * Wt, Re += 38 * pr, Ne += 38 * Ft, Te += 38 * Mt, Ie += 38 * ur, Oe += 38 * Mr, T = 1, h = oe + T + 65535, T = Math.floor(h / 65536), oe = h - T * 65536, h = le + T + 65535, T = Math.floor(h / 65536), le = h - T * 65536, h = ke + T + 65535, T = Math.floor(h / 65536), ke = h - T * 65536, h = xe + T + 65535, T = Math.floor(h / 65536), xe = h - T * 65536, h = Ae + T + 65535, T = Math.floor(h / 65536), Ae = h - T * 65536, h = He + T + 65535, T = Math.floor(h / 65536), He = h - T * 65536, h = it + T + 65535, T = Math.floor(h / 65536), it = h - T * 65536, h = rt + T + 65535, T = Math.floor(h / 65536), rt = h - T * 65536, h = $e + T + 65535, T = Math.floor(h / 65536), $e = h - T * 65536, h = Fe + T + 65535, T = Math.floor(h / 65536), Fe = h - T * 65536, h = Re + T + 65535, T = Math.floor(h / 65536), Re = h - T * 65536, h = Ne + T + 65535, T = Math.floor(h / 65536), Ne = h - T * 65536, h = Te + T + 65535, T = Math.floor(h / 65536), Te = h - T * 65536, h = Ie + T + 65535, T = Math.floor(h / 65536), Ie = h - T * 65536, h = Oe + T + 65535, T = Math.floor(h / 65536), Oe = h - T * 65536, h = _e + T + 65535, T = Math.floor(h / 65536), _e = h - T * 65536, oe += T - 1 + 37 * (T - 1), T = 1, h = oe + T + 65535, T = Math.floor(h / 65536), oe = h - T * 65536, h = le + T + 65535, T = Math.floor(h / 65536), le = h - T * 65536, h = ke + T + 65535, T = Math.floor(h / 65536), ke = h - T * 65536, h = xe + T + 65535, T = Math.floor(h / 65536), xe = h - T * 65536, h = Ae + T + 65535, T = Math.floor(h / 65536), Ae = h - T * 65536, h = He + T + 65535, T = Math.floor(h / 65536), He = h - T * 65536, h = it + T + 65535, T = Math.floor(h / 65536), it = h - T * 65536, h = rt + T + 65535, T = Math.floor(h / 65536), rt = h - T * 65536, h = $e + T + 65535, T = Math.floor(h / 65536), $e = h - T * 65536, h = Fe + T + 65535, T = Math.floor(h / 65536), Fe = h - T * 65536, h = Re + T + 65535, T = Math.floor(h / 65536), Re = h - T * 65536, h = Ne + T + 65535, T = Math.floor(h / 65536), Ne = h - T * 65536, h = Te + T + 65535, T = Math.floor(h / 65536), Te = h - T * 65536, h = Ie + T + 65535, T = Math.floor(h / 65536), Ie = h - T * 65536, h = Oe + T + 65535, T = Math.floor(h / 65536), Oe = h - T * 65536, h = _e + T + 65535, T = Math.floor(h / 65536), _e = h - T * 65536, oe += T - 1 + 37 * (T - 1), z[0] = oe, z[1] = le, z[2] = ke, z[3] = xe, z[4] = Ae, z[5] = He, z[6] = it, z[7] = rt, z[8] = $e, z[9] = Fe, z[10] = Re, z[11] = Ne, z[12] = Te, z[13] = Ie, z[14] = Oe, z[15] = _e;
  }
  function g(z, q) {
    c(z, q, q);
  }
  function A(z, q) {
    const F = i();
    let h;
    for (h = 0; h < 16; h++)
      F[h] = q[h];
    for (h = 253; h >= 0; h--)
      g(F, F), h !== 2 && h !== 4 && c(F, F, q);
    for (h = 0; h < 16; h++)
      z[h] = F[h];
  }
  function M(z, q) {
    const F = i();
    let h;
    for (h = 0; h < 16; h++)
      F[h] = q[h];
    for (h = 250; h >= 0; h--)
      g(F, F), h !== 1 && c(F, F, q);
    for (h = 0; h < 16; h++)
      z[h] = F[h];
  }
  function B(z, q) {
    const F = i(), h = i(), T = i(), oe = i(), le = i(), ke = i(), xe = i(), Ae = i(), He = i();
    p(F, z[1], z[0]), p(He, q[1], q[0]), c(F, F, He), b(h, z[0], z[1]), b(He, q[0], q[1]), c(h, h, He), c(T, z[3], q[3]), c(T, T, l), c(oe, z[2], q[2]), b(oe, oe, oe), p(le, h, F), p(ke, oe, T), b(xe, oe, T), b(Ae, h, F), c(z[0], le, ke), c(z[1], Ae, xe), c(z[2], xe, ke), c(z[3], le, Ae);
  }
  function G(z, q, F) {
    for (let h = 0; h < 4; h++)
      O(z[h], q[h], F);
  }
  function ee(z, q) {
    const F = i(), h = i(), T = i();
    A(T, q[2]), c(F, q[0], T), c(h, q[1], T), S(z, h), z[31] ^= x(F) << 7;
  }
  function N(z, q, F) {
    m(z[0], a), m(z[1], o), m(z[2], o), m(z[3], a);
    for (let h = 255; h >= 0; --h) {
      const T = F[h / 8 | 0] >> (h & 7) & 1;
      G(z, q, T), B(q, z), B(z, z), G(z, q, T);
    }
  }
  function $(z, q) {
    const F = [i(), i(), i(), i()];
    m(F[0], f), m(F[1], d), m(F[2], o), c(F[3], f, d), N(z, F, q);
  }
  function se(z) {
    if (z.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const q = (0, r.hash)(z);
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const F = new Uint8Array(32), h = [i(), i(), i(), i()];
    $(h, q), ee(F, h);
    const T = new Uint8Array(64);
    return T.set(z), T.set(F, 32), {
      publicKey: F,
      secretKey: T
    };
  }
  t.generateKeyPairFromSeed = se;
  function Z(z) {
    const q = (0, e.randomBytes)(32, z), F = se(q);
    return (0, n.wipe)(q), F;
  }
  t.generateKeyPair = Z;
  function H(z) {
    if (z.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(z.subarray(32));
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
  function W(z, q) {
    let F, h, T, oe;
    for (h = 63; h >= 32; --h) {
      for (F = 0, T = h - 32, oe = h - 12; T < oe; ++T)
        q[T] += F - 16 * q[h] * Y[T - (h - 32)], F = Math.floor((q[T] + 128) / 256), q[T] -= F * 256;
      q[T] += F, q[h] = 0;
    }
    for (F = 0, T = 0; T < 32; T++)
      q[T] += F - (q[31] >> 4) * Y[T], F = q[T] >> 8, q[T] &= 255;
    for (T = 0; T < 32; T++)
      q[T] -= F * Y[T];
    for (h = 0; h < 32; h++)
      q[h + 1] += q[h] >> 8, z[h] = q[h] & 255;
  }
  function J(z) {
    const q = new Float64Array(64);
    for (let F = 0; F < 64; F++)
      q[F] = z[F];
    for (let F = 0; F < 64; F++)
      z[F] = 0;
    W(z, q);
  }
  function we(z, q) {
    const F = new Float64Array(64), h = [i(), i(), i(), i()], T = (0, r.hash)(z.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const oe = new Uint8Array(64);
    oe.set(T.subarray(32), 32);
    const le = new r.SHA512();
    le.update(oe.subarray(32)), le.update(q);
    const ke = le.digest();
    le.clean(), J(ke), $(h, ke), ee(oe, h), le.reset(), le.update(oe.subarray(0, 32)), le.update(z.subarray(32)), le.update(q);
    const xe = le.digest();
    J(xe);
    for (let Ae = 0; Ae < 32; Ae++)
      F[Ae] = ke[Ae];
    for (let Ae = 0; Ae < 32; Ae++)
      for (let He = 0; He < 32; He++)
        F[Ae + He] += xe[Ae] * T[He];
    return W(oe.subarray(32), F), oe;
  }
  t.sign = we;
  function re(z, q) {
    const F = i(), h = i(), T = i(), oe = i(), le = i(), ke = i(), xe = i();
    return m(z[2], o), w(z[1], q), g(T, z[1]), c(oe, T, u), p(T, T, z[2]), b(oe, z[2], oe), g(le, oe), g(ke, le), c(xe, ke, le), c(F, xe, T), c(F, F, oe), M(F, F), c(F, F, T), c(F, F, oe), c(F, F, oe), c(z[0], F, oe), g(h, z[0]), c(h, h, oe), _(h, T) && c(z[0], z[0], y), g(h, z[0]), c(h, h, oe), _(h, T) ? -1 : (x(z[0]) === q[31] >> 7 && p(z[0], a, z[0]), c(z[3], z[0], z[1]), 0);
  }
  function be(z, q, F) {
    const h = new Uint8Array(32), T = [i(), i(), i(), i()], oe = [i(), i(), i(), i()];
    if (F.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (re(oe, z))
      return !1;
    const le = new r.SHA512();
    le.update(F.subarray(0, 32)), le.update(z), le.update(q);
    const ke = le.digest();
    return J(ke), N(T, oe, ke), $(oe, F.subarray(32)), B(T, oe), ee(h, T), !P(F, h);
  }
  t.verify = be;
  function he(z) {
    let q = [i(), i(), i(), i()];
    if (re(q, z))
      throw new Error("Ed25519: invalid public key");
    let F = i(), h = i(), T = q[1];
    b(F, o, T), p(h, o, T), A(h, h), c(F, F, h);
    let oe = new Uint8Array(32);
    return S(oe, F), oe;
  }
  t.convertPublicKeyToX25519 = he;
  function ve(z) {
    const q = (0, r.hash)(z.subarray(0, 32));
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const F = new Uint8Array(q.subarray(0, 32));
    return (0, n.wipe)(q), F;
  }
  t.convertSecretKeyToX25519 = ve;
})(pa);
const wp = "EdDSA", Ep = "JWT", El = ".", Sl = "base64url", Sp = "utf8", Dp = "utf8", xp = ":", Op = "did", Ip = "key", Oc = "base58btc", Cp = "z", Rp = "K36", Tp = 32;
function ga(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Dl(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ga(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function jo(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = Dl(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return ga(r);
}
function Ap(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), a = s.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, u = t.charAt(0), l = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var O = 0, S = 0, P = 0, _ = E.length; P !== _ && E[P] === 0; )
      P++, O++;
    for (var x = (_ - P) * f + 1 >>> 0, w = new Uint8Array(x); P !== _; ) {
      for (var b = E[P], p = 0, c = x - 1; (b !== 0 || p < S) && c !== -1; c--, p++)
        b += 256 * w[c] >>> 0, w[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      S = p, P++;
    }
    for (var g = x - S; g !== x && w[g] === 0; )
      g++;
    for (var A = u.repeat(O); g < x; ++g)
      A += t.charAt(w[g]);
    return A;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var O = 0;
    if (E[O] !== " ") {
      for (var S = 0, P = 0; E[O] === u; )
        S++, O++;
      for (var _ = (E.length - O) * l + 1 >>> 0, x = new Uint8Array(_); E[O]; ) {
        var w = r[E.charCodeAt(O)];
        if (w === 255)
          return;
        for (var b = 0, p = _ - 1; (w !== 0 || b < P) && p !== -1; p--, b++)
          w += o * x[p] >>> 0, x[p] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        P = b, O++;
      }
      if (E[O] !== " ") {
        for (var c = _ - P; c !== _ && x[c] === 0; )
          c++;
        for (var g = new Uint8Array(S + (_ - c)), A = S; c !== _; )
          g[A++] = x[c++];
        return g;
      }
    }
  }
  function m(E) {
    var O = y(E);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: y,
    decode: m
  };
}
var Np = Ap, Pp = Np;
const Lp = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Fp = (t) => new TextEncoder().encode(t), Mp = (t) => new TextDecoder().decode(t);
class Up {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class jp {
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
    return xl(this, e);
  }
}
class kp {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return xl(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const xl = (t, e) => new kp({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class $p {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Up(e, r, n), this.decoder = new jp(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const $s = ({ name: t, prefix: e, encode: r, decode: n }) => new $p(t, e, r, n), zi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Pp(r, e);
  return $s({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => Lp(i(s))
  });
}, qp = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const a = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, l = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[l++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, zp = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Vt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => $s({
  prefix: e,
  name: t,
  encode(i) {
    return zp(i, n, r);
  },
  decode(i) {
    return qp(i, n, r, t);
  }
}), Bp = $s({
  prefix: "\0",
  name: "identity",
  encode: (t) => Mp(t),
  decode: (t) => Fp(t)
}), Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Bp
}, Symbol.toStringTag, { value: "Module" })), Kp = Vt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Kp
}, Symbol.toStringTag, { value: "Module" })), Hp = Vt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Hp
}, Symbol.toStringTag, { value: "Module" })), Qp = zi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Qp
}, Symbol.toStringTag, { value: "Module" })), Yp = Vt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Jp = Vt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Yp,
  base16upper: Jp
}, Symbol.toStringTag, { value: "Module" })), eg = Vt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), tg = Vt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), rg = Vt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), ng = Vt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), ig = Vt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), sg = Vt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), og = Vt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), ag = Vt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), cg = Vt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: eg,
  base32hex: ig,
  base32hexpad: og,
  base32hexpadupper: ag,
  base32hexupper: sg,
  base32pad: rg,
  base32padupper: ng,
  base32upper: tg,
  base32z: cg
}, Symbol.toStringTag, { value: "Module" })), lg = zi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), hg = zi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: lg,
  base36upper: hg
}, Symbol.toStringTag, { value: "Module" })), dg = zi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), pg = zi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: dg,
  base58flickr: pg
}, Symbol.toStringTag, { value: "Module" })), yg = Vt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), vg = Vt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), mg = Vt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), bg = Vt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: yg,
  base64pad: vg,
  base64url: mg,
  base64urlpad: bg
}, Symbol.toStringTag, { value: "Module" })), Ol = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), wg = Ol.reduce((t, e, r) => (t[r] = e, t), []), Eg = Ol.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Sg(t) {
  return t.reduce((e, r) => (e += wg[r], e), "");
}
function Dg(t) {
  const e = [];
  for (const r of t) {
    const n = Eg[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const xg = $s({
  prefix: "🚀",
  name: "base256emoji",
  encode: Sg,
  decode: Dg
}), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: xg
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Ic = {
  ...Vp,
  ...Wp,
  ...Gp,
  ...Zp,
  ...Xp,
  ...ug,
  ...fg,
  ...gg,
  ..._g,
  ...Og
};
function Il(t, e, r, n) {
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
const Cc = Il("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), go = Il("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Dl(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Cl = {
  utf8: Cc,
  "utf-8": Cc,
  hex: Ic.base16,
  latin1: go,
  ascii: go,
  binary: go,
  ...Ic
};
function ar(t, e = "utf8") {
  const r = Cl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function dr(t, e = "utf8") {
  const r = Cl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ga(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function _s(t) {
  return ar(dr(da(t), Sp), Sl);
}
function Rl(t) {
  const e = dr(Rp, Oc), r = Cp + ar(jo([e, t]), Oc);
  return [Op, Ip, r].join(xp);
}
function Ig(t) {
  return ar(t, Sl);
}
function Cg(t) {
  return dr([_s(t.header), _s(t.payload)].join(El), Dp);
}
function Rg(t) {
  return [
    _s(t.header),
    _s(t.payload),
    Ig(t.signature)
  ].join(El);
}
function Rc(t = Xn.randomBytes(Tp)) {
  return pa.generateKeyPairFromSeed(t);
}
async function Tg(t, e, r, n, i = ge.fromMiliseconds(Date.now())) {
  const s = { alg: wp, typ: Ep }, a = Rl(n.publicKey), o = i + r, u = { iss: a, sub: t, aud: e, iat: i, exp: o }, l = Cg({ header: s, payload: u }), f = pa.sign(n.secretKey, l);
  return Rg({ header: s, payload: u, signature: f });
}
var ya = {}, qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
var Qt = Le, ko = mr, Ag = 20;
function Ng(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], O = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], S = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], P = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], _ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], x = n, w = i, b = s, p = a, c = o, g = u, A = l, M = f, B = d, G = y, ee = m, N = E, $ = O, se = S, Z = P, H = _, Y = 0; Y < Ag; Y += 2)
    x = x + c | 0, $ ^= x, $ = $ >>> 32 - 16 | $ << 16, B = B + $ | 0, c ^= B, c = c >>> 32 - 12 | c << 12, w = w + g | 0, se ^= w, se = se >>> 32 - 16 | se << 16, G = G + se | 0, g ^= G, g = g >>> 32 - 12 | g << 12, b = b + A | 0, Z ^= b, Z = Z >>> 32 - 16 | Z << 16, ee = ee + Z | 0, A ^= ee, A = A >>> 32 - 12 | A << 12, p = p + M | 0, H ^= p, H = H >>> 32 - 16 | H << 16, N = N + H | 0, M ^= N, M = M >>> 32 - 12 | M << 12, b = b + A | 0, Z ^= b, Z = Z >>> 32 - 8 | Z << 8, ee = ee + Z | 0, A ^= ee, A = A >>> 32 - 7 | A << 7, p = p + M | 0, H ^= p, H = H >>> 32 - 8 | H << 8, N = N + H | 0, M ^= N, M = M >>> 32 - 7 | M << 7, w = w + g | 0, se ^= w, se = se >>> 32 - 8 | se << 8, G = G + se | 0, g ^= G, g = g >>> 32 - 7 | g << 7, x = x + c | 0, $ ^= x, $ = $ >>> 32 - 8 | $ << 8, B = B + $ | 0, c ^= B, c = c >>> 32 - 7 | c << 7, x = x + g | 0, H ^= x, H = H >>> 32 - 16 | H << 16, ee = ee + H | 0, g ^= ee, g = g >>> 32 - 12 | g << 12, w = w + A | 0, $ ^= w, $ = $ >>> 32 - 16 | $ << 16, N = N + $ | 0, A ^= N, A = A >>> 32 - 12 | A << 12, b = b + M | 0, se ^= b, se = se >>> 32 - 16 | se << 16, B = B + se | 0, M ^= B, M = M >>> 32 - 12 | M << 12, p = p + c | 0, Z ^= p, Z = Z >>> 32 - 16 | Z << 16, G = G + Z | 0, c ^= G, c = c >>> 32 - 12 | c << 12, b = b + M | 0, se ^= b, se = se >>> 32 - 8 | se << 8, B = B + se | 0, M ^= B, M = M >>> 32 - 7 | M << 7, p = p + c | 0, Z ^= p, Z = Z >>> 32 - 8 | Z << 8, G = G + Z | 0, c ^= G, c = c >>> 32 - 7 | c << 7, w = w + A | 0, $ ^= w, $ = $ >>> 32 - 8 | $ << 8, N = N + $ | 0, A ^= N, A = A >>> 32 - 7 | A << 7, x = x + g | 0, H ^= x, H = H >>> 32 - 8 | H << 8, ee = ee + H | 0, g ^= ee, g = g >>> 32 - 7 | g << 7;
  Qt.writeUint32LE(x + n | 0, t, 0), Qt.writeUint32LE(w + i | 0, t, 4), Qt.writeUint32LE(b + s | 0, t, 8), Qt.writeUint32LE(p + a | 0, t, 12), Qt.writeUint32LE(c + o | 0, t, 16), Qt.writeUint32LE(g + u | 0, t, 20), Qt.writeUint32LE(A + l | 0, t, 24), Qt.writeUint32LE(M + f | 0, t, 28), Qt.writeUint32LE(B + d | 0, t, 32), Qt.writeUint32LE(G + y | 0, t, 36), Qt.writeUint32LE(ee + m | 0, t, 40), Qt.writeUint32LE(N + E | 0, t, 44), Qt.writeUint32LE($ + O | 0, t, 48), Qt.writeUint32LE(se + S | 0, t, 52), Qt.writeUint32LE(Z + P | 0, t, 56), Qt.writeUint32LE(H + _ | 0, t, 60);
}
function Tl(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, a;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), a = s.length - e.length, s.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, a = i;
  }
  for (var o = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    Ng(o, s, t);
    for (var l = u; l < u + 64 && l < r.length; l++)
      n[l] = r[l] ^ o[l - u];
    Lg(s, 0, a);
  }
  return ko.wipe(o), i === 0 && ko.wipe(s), n;
}
qs.streamXOR = Tl;
function Pg(t, e, r, n) {
  return n === void 0 && (n = 0), ko.wipe(r), Tl(t, e, r, r, n);
}
qs.stream = Pg;
function Lg(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Al = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
function Fg(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
pn.select = Fg;
function Mg(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
pn.lessOrEqual = Mg;
function Nl(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
pn.compare = Nl;
function Ug(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Nl(t, e) !== 0;
}
pn.equal = Ug;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = pn, r = mr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var l = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | l << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (l >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var y = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | m << 2) & 8191;
        var E = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | E << 5) & 8065;
        var O = o[14] | o[15] << 8;
        this._r[8] = (E >>> 8 | O << 8) & 8191, this._r[9] = O >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, l) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], y = this._h[1], m = this._h[2], E = this._h[3], O = this._h[4], S = this._h[5], P = this._h[6], _ = this._h[7], x = this._h[8], w = this._h[9], b = this._r[0], p = this._r[1], c = this._r[2], g = this._r[3], A = this._r[4], M = this._r[5], B = this._r[6], G = this._r[7], ee = this._r[8], N = this._r[9]; l >= 16; ) {
          var $ = o[u + 0] | o[u + 1] << 8;
          d += $ & 8191;
          var se = o[u + 2] | o[u + 3] << 8;
          y += ($ >>> 13 | se << 3) & 8191;
          var Z = o[u + 4] | o[u + 5] << 8;
          m += (se >>> 10 | Z << 6) & 8191;
          var H = o[u + 6] | o[u + 7] << 8;
          E += (Z >>> 7 | H << 9) & 8191;
          var Y = o[u + 8] | o[u + 9] << 8;
          O += (H >>> 4 | Y << 12) & 8191, S += Y >>> 1 & 8191;
          var W = o[u + 10] | o[u + 11] << 8;
          P += (Y >>> 14 | W << 2) & 8191;
          var J = o[u + 12] | o[u + 13] << 8;
          _ += (W >>> 11 | J << 5) & 8191;
          var we = o[u + 14] | o[u + 15] << 8;
          x += (J >>> 8 | we << 8) & 8191, w += we >>> 5 | f;
          var re = 0, be = re;
          be += d * b, be += y * (5 * N), be += m * (5 * ee), be += E * (5 * G), be += O * (5 * B), re = be >>> 13, be &= 8191, be += S * (5 * M), be += P * (5 * A), be += _ * (5 * g), be += x * (5 * c), be += w * (5 * p), re += be >>> 13, be &= 8191;
          var he = re;
          he += d * p, he += y * b, he += m * (5 * N), he += E * (5 * ee), he += O * (5 * G), re = he >>> 13, he &= 8191, he += S * (5 * B), he += P * (5 * M), he += _ * (5 * A), he += x * (5 * g), he += w * (5 * c), re += he >>> 13, he &= 8191;
          var ve = re;
          ve += d * c, ve += y * p, ve += m * b, ve += E * (5 * N), ve += O * (5 * ee), re = ve >>> 13, ve &= 8191, ve += S * (5 * G), ve += P * (5 * B), ve += _ * (5 * M), ve += x * (5 * A), ve += w * (5 * g), re += ve >>> 13, ve &= 8191;
          var z = re;
          z += d * g, z += y * c, z += m * p, z += E * b, z += O * (5 * N), re = z >>> 13, z &= 8191, z += S * (5 * ee), z += P * (5 * G), z += _ * (5 * B), z += x * (5 * M), z += w * (5 * A), re += z >>> 13, z &= 8191;
          var q = re;
          q += d * A, q += y * g, q += m * c, q += E * p, q += O * b, re = q >>> 13, q &= 8191, q += S * (5 * N), q += P * (5 * ee), q += _ * (5 * G), q += x * (5 * B), q += w * (5 * M), re += q >>> 13, q &= 8191;
          var F = re;
          F += d * M, F += y * A, F += m * g, F += E * c, F += O * p, re = F >>> 13, F &= 8191, F += S * b, F += P * (5 * N), F += _ * (5 * ee), F += x * (5 * G), F += w * (5 * B), re += F >>> 13, F &= 8191;
          var h = re;
          h += d * B, h += y * M, h += m * A, h += E * g, h += O * c, re = h >>> 13, h &= 8191, h += S * p, h += P * b, h += _ * (5 * N), h += x * (5 * ee), h += w * (5 * G), re += h >>> 13, h &= 8191;
          var T = re;
          T += d * G, T += y * B, T += m * M, T += E * A, T += O * g, re = T >>> 13, T &= 8191, T += S * c, T += P * p, T += _ * b, T += x * (5 * N), T += w * (5 * ee), re += T >>> 13, T &= 8191;
          var oe = re;
          oe += d * ee, oe += y * G, oe += m * B, oe += E * M, oe += O * A, re = oe >>> 13, oe &= 8191, oe += S * g, oe += P * c, oe += _ * p, oe += x * b, oe += w * (5 * N), re += oe >>> 13, oe &= 8191;
          var le = re;
          le += d * N, le += y * ee, le += m * G, le += E * B, le += O * M, re = le >>> 13, le &= 8191, le += S * A, le += P * g, le += _ * c, le += x * p, le += w * b, re += le >>> 13, le &= 8191, re = (re << 2) + re | 0, re = re + be | 0, be = re & 8191, re = re >>> 13, he += re, d = be, y = he, m = ve, E = z, O = q, S = F, P = h, _ = T, x = oe, w = le, u += 16, l -= 16;
        }
        this._h[0] = d, this._h[1] = y, this._h[2] = m, this._h[3] = E, this._h[4] = O, this._h[5] = S, this._h[6] = P, this._h[7] = _, this._h[8] = x, this._h[9] = w;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var l = new Uint16Array(10), f, d, y, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, l[0] = this._h[0] + 5, f = l[0] >>> 13, l[0] &= 8191, m = 1; m < 10; m++)
          l[m] = this._h[m] + f, f = l[m] >>> 13, l[m] &= 8191;
        for (l[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          l[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | l[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, m = 1; m < 8; m++)
          y = (this._h[m] + this._pad[m] | 0) + (y >>> 16) | 0, this._h[m] = y & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var u = 0, l = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > l && (f = l);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (l -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (f = l - l % 16, this._blocks(o, u, f), u += f, l -= f), l) {
          for (var d = 0; d < l; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += l;
        }
        return this;
      }, a.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var o = new Uint8Array(16);
        return this.finish(o), o;
      }, a.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, a;
    }()
  );
  t.Poly1305 = n;
  function i(a, o) {
    var u = new n(a);
    u.update(o);
    var l = u.digest();
    return u.clean(), l;
  }
  t.oneTimeAuth = i;
  function s(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = s;
})(Al);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = qs, r = Al, n = mr, i = Le, s = pn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return u.prototype.seal = function(l, f, d, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var E = new Uint8Array(32);
        e.stream(this._key, m, E, 4);
        var O = f.length + this.tagLength, S;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          S = y;
        } else
          S = new Uint8Array(O);
        return e.streamXOR(this._key, m, f, S, 4), this._authenticate(S.subarray(S.length - this.tagLength, S.length), E, S.subarray(0, S.length - this.tagLength), d), n.wipe(m), S;
      }, u.prototype.open = function(l, f, d, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var E = new Uint8Array(32);
        e.stream(this._key, m, E, 4);
        var O = new Uint8Array(this.tagLength);
        if (this._authenticate(O, E, f.subarray(0, f.length - this.tagLength), d), !s.equal(O, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var S = f.length - this.tagLength, P;
        if (y) {
          if (y.length !== S)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          P = y;
        } else
          P = new Uint8Array(S);
        return e.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), P, 4), n.wipe(m), P;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(l, f, d, y) {
        var m = new r.Poly1305(f);
        y && (m.update(y), y.length % 16 > 0 && m.update(a.subarray(y.length % 16))), m.update(d), d.length % 16 > 0 && m.update(a.subarray(d.length % 16));
        var E = new Uint8Array(8);
        y && i.writeUint64LE(y.length, E), m.update(E), i.writeUint64LE(d.length, E), m.update(E);
        for (var O = m.digest(), S = 0; S < O.length; S++)
          l[S] = O[S];
        m.clean(), n.wipe(O), n.wipe(E);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(ya);
var Pl = {}, Bi = {}, va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
function jg(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
va.isSerializableHash = jg;
Object.defineProperty(Bi, "__esModule", { value: !0 });
var qr = va, kg = pn, $g = mr, Ll = (
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
      this._outer.update(n), qr.isSerializableHash(this._inner) && qr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), $g.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!qr.isSerializableHash(this._inner) || !qr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      qr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), qr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!qr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!qr.isSerializableHash(this._inner) || !qr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!qr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Bi.HMAC = Ll;
function qg(t, e, r) {
  var n = new Ll(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Bi.hmac = qg;
Bi.equal = kg.equal;
Object.defineProperty(Pl, "__esModule", { value: !0 });
var Tc = Bi, Ac = mr, zg = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = Tc.hmac(this._hash, n, r);
      this._hmac = new Tc.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Ac.wipe(this._buffer), Ac.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Bg = Pl.HKDF = zg, zs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Le, r = mr;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, o.prototype.update = function(u, l) {
        if (l === void 0 && (l = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = u[f++], l--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (f = s(this._temp, this._state, u, f, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = u[f++], l--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var l = this._bytesHashed, f = this._bufferLength, d = l / 536870912 | 0, y = l << 3, m = l % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var E = f + 1; E < m - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(y, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 4; E++)
          e.writeUint32BE(this._state[E], u, E * 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._state.set(u.state), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.state), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
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
  function s(o, u, l, f, d) {
    for (; d >= 64; ) {
      for (var y = u[0], m = u[1], E = u[2], O = u[3], S = u[4], P = u[5], _ = u[6], x = u[7], w = 0; w < 16; w++) {
        var b = f + w * 4;
        o[w] = e.readUint32BE(l, b);
      }
      for (var w = 16; w < 64; w++) {
        var p = o[w - 2], c = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = o[w - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        o[w] = (c + o[w - 7] | 0) + (g + o[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var c = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & P ^ ~S & _) | 0) + (x + (i[w] + o[w] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & m ^ y & E ^ m & E) | 0;
        x = _, _ = P, P = S, S = O + c | 0, O = E, E = m, m = y, y = c + g | 0;
      }
      u[0] += y, u[1] += m, u[2] += E, u[3] += O, u[4] += S, u[5] += P, u[6] += _, u[7] += x, f += 64, d -= 64;
    }
    return f;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var l = u.digest();
    return u.clean(), l;
  }
  t.hash = a;
})(zs);
var ma = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Xn, r = mr;
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
  function a(w) {
    let b = 1;
    for (let p = 0; p < 16; p++) {
      let c = w[p] + b + 65535;
      b = Math.floor(c / 65536), w[p] = c - b * 65536;
    }
    w[0] += b - 1 + 37 * (b - 1);
  }
  function o(w, b, p) {
    const c = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const A = c & (w[g] ^ b[g]);
      w[g] ^= A, b[g] ^= A;
    }
  }
  function u(w, b) {
    const p = n(), c = n();
    for (let g = 0; g < 16; g++)
      c[g] = b[g];
    a(c), a(c), a(c);
    for (let g = 0; g < 2; g++) {
      p[0] = c[0] - 65517;
      for (let M = 1; M < 15; M++)
        p[M] = c[M] - 65535 - (p[M - 1] >> 16 & 1), p[M - 1] &= 65535;
      p[15] = c[15] - 32767 - (p[14] >> 16 & 1);
      const A = p[15] >> 16 & 1;
      p[14] &= 65535, o(c, p, 1 - A);
    }
    for (let g = 0; g < 16; g++)
      w[2 * g] = c[g] & 255, w[2 * g + 1] = c[g] >> 8;
  }
  function l(w, b) {
    for (let p = 0; p < 16; p++)
      w[p] = b[2 * p] + (b[2 * p + 1] << 8);
    w[15] &= 32767;
  }
  function f(w, b, p) {
    for (let c = 0; c < 16; c++)
      w[c] = b[c] + p[c];
  }
  function d(w, b, p) {
    for (let c = 0; c < 16; c++)
      w[c] = b[c] - p[c];
  }
  function y(w, b, p) {
    let c, g, A = 0, M = 0, B = 0, G = 0, ee = 0, N = 0, $ = 0, se = 0, Z = 0, H = 0, Y = 0, W = 0, J = 0, we = 0, re = 0, be = 0, he = 0, ve = 0, z = 0, q = 0, F = 0, h = 0, T = 0, oe = 0, le = 0, ke = 0, xe = 0, Ae = 0, He = 0, it = 0, rt = 0, $e = p[0], Fe = p[1], Re = p[2], Ne = p[3], Te = p[4], Ie = p[5], Oe = p[6], _e = p[7], Pe = p[8], Me = p[9], Se = p[10], qe = p[11], Ge = p[12], Ze = p[13], Qe = p[14], Ye = p[15];
    c = b[0], A += c * $e, M += c * Fe, B += c * Re, G += c * Ne, ee += c * Te, N += c * Ie, $ += c * Oe, se += c * _e, Z += c * Pe, H += c * Me, Y += c * Se, W += c * qe, J += c * Ge, we += c * Ze, re += c * Qe, be += c * Ye, c = b[1], M += c * $e, B += c * Fe, G += c * Re, ee += c * Ne, N += c * Te, $ += c * Ie, se += c * Oe, Z += c * _e, H += c * Pe, Y += c * Me, W += c * Se, J += c * qe, we += c * Ge, re += c * Ze, be += c * Qe, he += c * Ye, c = b[2], B += c * $e, G += c * Fe, ee += c * Re, N += c * Ne, $ += c * Te, se += c * Ie, Z += c * Oe, H += c * _e, Y += c * Pe, W += c * Me, J += c * Se, we += c * qe, re += c * Ge, be += c * Ze, he += c * Qe, ve += c * Ye, c = b[3], G += c * $e, ee += c * Fe, N += c * Re, $ += c * Ne, se += c * Te, Z += c * Ie, H += c * Oe, Y += c * _e, W += c * Pe, J += c * Me, we += c * Se, re += c * qe, be += c * Ge, he += c * Ze, ve += c * Qe, z += c * Ye, c = b[4], ee += c * $e, N += c * Fe, $ += c * Re, se += c * Ne, Z += c * Te, H += c * Ie, Y += c * Oe, W += c * _e, J += c * Pe, we += c * Me, re += c * Se, be += c * qe, he += c * Ge, ve += c * Ze, z += c * Qe, q += c * Ye, c = b[5], N += c * $e, $ += c * Fe, se += c * Re, Z += c * Ne, H += c * Te, Y += c * Ie, W += c * Oe, J += c * _e, we += c * Pe, re += c * Me, be += c * Se, he += c * qe, ve += c * Ge, z += c * Ze, q += c * Qe, F += c * Ye, c = b[6], $ += c * $e, se += c * Fe, Z += c * Re, H += c * Ne, Y += c * Te, W += c * Ie, J += c * Oe, we += c * _e, re += c * Pe, be += c * Me, he += c * Se, ve += c * qe, z += c * Ge, q += c * Ze, F += c * Qe, h += c * Ye, c = b[7], se += c * $e, Z += c * Fe, H += c * Re, Y += c * Ne, W += c * Te, J += c * Ie, we += c * Oe, re += c * _e, be += c * Pe, he += c * Me, ve += c * Se, z += c * qe, q += c * Ge, F += c * Ze, h += c * Qe, T += c * Ye, c = b[8], Z += c * $e, H += c * Fe, Y += c * Re, W += c * Ne, J += c * Te, we += c * Ie, re += c * Oe, be += c * _e, he += c * Pe, ve += c * Me, z += c * Se, q += c * qe, F += c * Ge, h += c * Ze, T += c * Qe, oe += c * Ye, c = b[9], H += c * $e, Y += c * Fe, W += c * Re, J += c * Ne, we += c * Te, re += c * Ie, be += c * Oe, he += c * _e, ve += c * Pe, z += c * Me, q += c * Se, F += c * qe, h += c * Ge, T += c * Ze, oe += c * Qe, le += c * Ye, c = b[10], Y += c * $e, W += c * Fe, J += c * Re, we += c * Ne, re += c * Te, be += c * Ie, he += c * Oe, ve += c * _e, z += c * Pe, q += c * Me, F += c * Se, h += c * qe, T += c * Ge, oe += c * Ze, le += c * Qe, ke += c * Ye, c = b[11], W += c * $e, J += c * Fe, we += c * Re, re += c * Ne, be += c * Te, he += c * Ie, ve += c * Oe, z += c * _e, q += c * Pe, F += c * Me, h += c * Se, T += c * qe, oe += c * Ge, le += c * Ze, ke += c * Qe, xe += c * Ye, c = b[12], J += c * $e, we += c * Fe, re += c * Re, be += c * Ne, he += c * Te, ve += c * Ie, z += c * Oe, q += c * _e, F += c * Pe, h += c * Me, T += c * Se, oe += c * qe, le += c * Ge, ke += c * Ze, xe += c * Qe, Ae += c * Ye, c = b[13], we += c * $e, re += c * Fe, be += c * Re, he += c * Ne, ve += c * Te, z += c * Ie, q += c * Oe, F += c * _e, h += c * Pe, T += c * Me, oe += c * Se, le += c * qe, ke += c * Ge, xe += c * Ze, Ae += c * Qe, He += c * Ye, c = b[14], re += c * $e, be += c * Fe, he += c * Re, ve += c * Ne, z += c * Te, q += c * Ie, F += c * Oe, h += c * _e, T += c * Pe, oe += c * Me, le += c * Se, ke += c * qe, xe += c * Ge, Ae += c * Ze, He += c * Qe, it += c * Ye, c = b[15], be += c * $e, he += c * Fe, ve += c * Re, z += c * Ne, q += c * Te, F += c * Ie, h += c * Oe, T += c * _e, oe += c * Pe, le += c * Me, ke += c * Se, xe += c * qe, Ae += c * Ge, He += c * Ze, it += c * Qe, rt += c * Ye, A += 38 * he, M += 38 * ve, B += 38 * z, G += 38 * q, ee += 38 * F, N += 38 * h, $ += 38 * T, se += 38 * oe, Z += 38 * le, H += 38 * ke, Y += 38 * xe, W += 38 * Ae, J += 38 * He, we += 38 * it, re += 38 * rt, g = 1, c = A + g + 65535, g = Math.floor(c / 65536), A = c - g * 65536, c = M + g + 65535, g = Math.floor(c / 65536), M = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = ee + g + 65535, g = Math.floor(c / 65536), ee = c - g * 65536, c = N + g + 65535, g = Math.floor(c / 65536), N = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = se + g + 65535, g = Math.floor(c / 65536), se = c - g * 65536, c = Z + g + 65535, g = Math.floor(c / 65536), Z = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = Y + g + 65535, g = Math.floor(c / 65536), Y = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = J + g + 65535, g = Math.floor(c / 65536), J = c - g * 65536, c = we + g + 65535, g = Math.floor(c / 65536), we = c - g * 65536, c = re + g + 65535, g = Math.floor(c / 65536), re = c - g * 65536, c = be + g + 65535, g = Math.floor(c / 65536), be = c - g * 65536, A += g - 1 + 37 * (g - 1), g = 1, c = A + g + 65535, g = Math.floor(c / 65536), A = c - g * 65536, c = M + g + 65535, g = Math.floor(c / 65536), M = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = ee + g + 65535, g = Math.floor(c / 65536), ee = c - g * 65536, c = N + g + 65535, g = Math.floor(c / 65536), N = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = se + g + 65535, g = Math.floor(c / 65536), se = c - g * 65536, c = Z + g + 65535, g = Math.floor(c / 65536), Z = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = Y + g + 65535, g = Math.floor(c / 65536), Y = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = J + g + 65535, g = Math.floor(c / 65536), J = c - g * 65536, c = we + g + 65535, g = Math.floor(c / 65536), we = c - g * 65536, c = re + g + 65535, g = Math.floor(c / 65536), re = c - g * 65536, c = be + g + 65535, g = Math.floor(c / 65536), be = c - g * 65536, A += g - 1 + 37 * (g - 1), w[0] = A, w[1] = M, w[2] = B, w[3] = G, w[4] = ee, w[5] = N, w[6] = $, w[7] = se, w[8] = Z, w[9] = H, w[10] = Y, w[11] = W, w[12] = J, w[13] = we, w[14] = re, w[15] = be;
  }
  function m(w, b) {
    y(w, b, b);
  }
  function E(w, b) {
    const p = n();
    for (let c = 0; c < 16; c++)
      p[c] = b[c];
    for (let c = 253; c >= 0; c--)
      m(p, p), c !== 2 && c !== 4 && y(p, p, b);
    for (let c = 0; c < 16; c++)
      w[c] = p[c];
  }
  function O(w, b) {
    const p = new Uint8Array(32), c = new Float64Array(80), g = n(), A = n(), M = n(), B = n(), G = n(), ee = n();
    for (let Z = 0; Z < 31; Z++)
      p[Z] = w[Z];
    p[31] = w[31] & 127 | 64, p[0] &= 248, l(c, b);
    for (let Z = 0; Z < 16; Z++)
      A[Z] = c[Z];
    g[0] = B[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const H = p[Z >>> 3] >>> (Z & 7) & 1;
      o(g, A, H), o(M, B, H), f(G, g, M), d(g, g, M), f(M, A, B), d(A, A, B), m(B, G), m(ee, g), y(g, M, g), y(M, A, G), f(G, g, M), d(g, g, M), m(A, g), d(M, B, ee), y(g, M, s), f(g, g, B), y(M, M, g), y(g, B, ee), y(B, A, c), m(A, G), o(g, A, H), o(M, B, H);
    }
    for (let Z = 0; Z < 16; Z++)
      c[Z + 16] = g[Z], c[Z + 32] = M[Z], c[Z + 48] = A[Z], c[Z + 64] = B[Z];
    const N = c.subarray(32), $ = c.subarray(16);
    E(N, N), y($, $, N);
    const se = new Uint8Array(32);
    return u(se, $), se;
  }
  t.scalarMult = O;
  function S(w) {
    return O(w, i);
  }
  t.scalarMultBase = S;
  function P(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const b = new Uint8Array(w);
    return {
      publicKey: S(b),
      secretKey: b
    };
  }
  t.generateKeyPairFromSeed = P;
  function _(w) {
    const b = (0, e.randomBytes)(32, w), p = P(b);
    return (0, r.wipe)(b), p;
  }
  t.generateKeyPair = _;
  function x(w, b, p = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = O(w, b);
    if (p) {
      let g = 0;
      for (let A = 0; A < c.length; A++)
        g |= c[A];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = x;
})(ma);
var Nc = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Vg = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Kg = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Wg = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Hg = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Gg = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Qg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Zg = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Pc = 3, Yg = [
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
  ["searchbot", Qg]
], Lc = [
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
function Jg(t) {
  return t ? Fc(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Gg() : typeof navigator < "u" ? Fc(navigator.userAgent) : ty();
}
function Xg(t) {
  return t !== "" && Yg.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function Fc(t) {
  var e = Xg(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Hg();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Pc && (i = Nc(Nc([], i, !0), ry(Pc - i.length), !0)) : i = [];
  var s = i.join("."), a = ey(t), o = Zg.exec(t);
  return o && o[1] ? new Wg(r, s, a, o[1]) : new Vg(r, s, a);
}
function ey(t) {
  for (var e = 0, r = Lc.length; e < r; e++) {
    var n = Lc[e], i = n[0], s = n[1], a = s.exec(t);
    if (a)
      return i;
  }
  return null;
}
function ty() {
  var t = typeof process < "u" && process.version;
  return t ? new Kg(process.version.slice(1)) : null;
}
function ry(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.getLocalStorage = ht.getLocalStorageOrThrow = ht.getCrypto = ht.getCryptoOrThrow = Ml = ht.getLocation = ht.getLocationOrThrow = ba = ht.getNavigator = ht.getNavigatorOrThrow = Fl = ht.getDocument = ht.getDocumentOrThrow = ht.getFromWindowOrThrow = ht.getFromWindow = void 0;
function Ln(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
ht.getFromWindow = Ln;
function ei(t) {
  const e = Ln(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
ht.getFromWindowOrThrow = ei;
function ny() {
  return ei("document");
}
ht.getDocumentOrThrow = ny;
function iy() {
  return Ln("document");
}
var Fl = ht.getDocument = iy;
function sy() {
  return ei("navigator");
}
ht.getNavigatorOrThrow = sy;
function oy() {
  return Ln("navigator");
}
var ba = ht.getNavigator = oy;
function ay() {
  return ei("location");
}
ht.getLocationOrThrow = ay;
function cy() {
  return Ln("location");
}
var Ml = ht.getLocation = cy;
function uy() {
  return ei("crypto");
}
ht.getCryptoOrThrow = uy;
function ly() {
  return Ln("crypto");
}
ht.getCrypto = ly;
function hy() {
  return ei("localStorage");
}
ht.getLocalStorageOrThrow = hy;
function fy() {
  return Ln("localStorage");
}
ht.getLocalStorage = fy;
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
var Ul = _a.getWindowMetadata = void 0;
const Mc = ht;
function dy() {
  let t, e;
  try {
    t = Mc.getDocumentOrThrow(), e = Mc.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), y = [];
    for (let m = 0; m < d.length; m++) {
      const E = d[m], O = E.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const S = E.getAttribute("href");
        if (S)
          if (S.toLowerCase().indexOf("https:") === -1 && S.toLowerCase().indexOf("http:") === -1 && S.indexOf("//") !== 0) {
            let P = e.protocol + "//" + e.host;
            if (S.indexOf("/") === 0)
              P += S;
            else {
              const _ = e.pathname.split("/");
              _.pop();
              const x = _.join("/");
              P += x + "/" + S;
            }
            y.push(P);
          } else if (S.indexOf("//") === 0) {
            const P = e.protocol + S;
            y.push(P);
          } else
            y.push(S);
      }
    }
    return y;
  }
  function n(...d) {
    const y = t.getElementsByTagName("meta");
    for (let m = 0; m < y.length; m++) {
      const E = y[m], O = ["itemprop", "property", "name"].map((S) => E.getAttribute(S)).filter((S) => S ? d.includes(S) : !1);
      if (O.length && O) {
        const S = E.getAttribute("content");
        if (S)
          return S;
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
  const a = i(), o = s(), u = e.origin, l = r();
  return {
    description: o,
    url: u,
    icons: l,
    name: a
  };
}
Ul = _a.getWindowMetadata = dy;
var xi = {}, py = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), jl = "%[a-f0-9]{2}", Uc = new RegExp("(" + jl + ")|([^%]+?)", "gi"), jc = new RegExp("(" + jl + ")+", "gi");
function $o(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], $o(r), $o(n));
}
function gy(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Uc) || [], r = 1; r < e.length; r++)
      t = $o(e, r).join(""), e = t.match(Uc) || [];
    return t;
  }
}
function yy(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = jc.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = gy(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = jc.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var a = i[s];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var vy = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return yy(t);
  }
}, my = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, by = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var a = n[s], o = t[a];
    (i ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = py, r = vy, n = my, i = by, s = (_) => _ == null, a = Symbol("encodeFragmentIdentifier");
  function o(_) {
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
  function u(_) {
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
          const c = typeof b == "string" && b.includes(_.arrayFormatSeparator), g = typeof b == "string" && !c && d(b, _).includes(_.arrayFormatSeparator);
          b = g ? d(b, _) : b;
          const A = c || g ? b.split(_.arrayFormatSeparator).map((M) => d(M, _)) : b === null ? b : d(b, _);
          p[w] = A;
        };
      case "bracket-separator":
        return (w, b, p) => {
          const c = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !c) {
            p[w] = b && d(b, _);
            return;
          }
          const g = b === null ? [] : b.split(_.arrayFormatSeparator).map((A) => d(A, _));
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
  function l(_) {
    if (typeof _ != "string" || _.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(_, x) {
    return x.encode ? x.strict ? e(_) : encodeURIComponent(_) : _;
  }
  function d(_, x) {
    return x.decode ? r(_) : _;
  }
  function y(_) {
    return Array.isArray(_) ? _.sort() : typeof _ == "object" ? y(Object.keys(_)).sort((x, w) => Number(x) - Number(w)).map((x) => _[x]) : _;
  }
  function m(_) {
    const x = _.indexOf("#");
    return x !== -1 && (_ = _.slice(0, x)), _;
  }
  function E(_) {
    let x = "";
    const w = _.indexOf("#");
    return w !== -1 && (x = _.slice(w)), x;
  }
  function O(_) {
    _ = m(_);
    const x = _.indexOf("?");
    return x === -1 ? "" : _.slice(x + 1);
  }
  function S(_, x) {
    return x.parseNumbers && !Number.isNaN(Number(_)) && typeof _ == "string" && _.trim() !== "" ? _ = Number(_) : x.parseBooleans && _ !== null && (_.toLowerCase() === "true" || _.toLowerCase() === "false") && (_ = _.toLowerCase() === "true"), _;
  }
  function P(_, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), l(x.arrayFormatSeparator);
    const w = u(x), b = /* @__PURE__ */ Object.create(null);
    if (typeof _ != "string" || (_ = _.trim().replace(/^[?#&]/, ""), !_))
      return b;
    for (const p of _.split("&")) {
      if (p === "")
        continue;
      let [c, g] = n(x.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? g : d(g, x), w(d(c, x), g, b);
    }
    for (const p of Object.keys(b)) {
      const c = b[p];
      if (typeof c == "object" && c !== null)
        for (const g of Object.keys(c))
          c[g] = S(c[g], x);
      else
        b[p] = S(c, x);
    }
    return x.sort === !1 ? b : (x.sort === !0 ? Object.keys(b).sort() : Object.keys(b).sort(x.sort)).reduce((p, c) => {
      const g = b[c];
      return g && typeof g == "object" && !Array.isArray(g) ? p[c] = y(g) : p[c] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = O, t.parse = P, t.stringify = (_, x) => {
    if (!_)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), l(x.arrayFormatSeparator);
    const w = (g) => x.skipNull && s(_[g]) || x.skipEmptyString && _[g] === "", b = o(x), p = {};
    for (const g of Object.keys(_))
      w(g) || (p[g] = _[g]);
    const c = Object.keys(p);
    return x.sort !== !1 && c.sort(x.sort), c.map((g) => {
      const A = _[g];
      return A === void 0 ? "" : A === null ? f(g, x) : Array.isArray(A) ? A.length === 0 && x.arrayFormat === "bracket-separator" ? f(g, x) + "[]" : A.reduce(b(g), []).join("&") : f(g, x) + "=" + f(A, x);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (_, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [w, b] = n(_, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: P(O(_), x)
      },
      x && x.parseFragmentIdentifier && b ? { fragmentIdentifier: d(b, x) } : {}
    );
  }, t.stringifyUrl = (_, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, x);
    const w = m(_.url).split("?")[0] || "", b = t.extract(_.url), p = t.parse(b, { sort: !1 }), c = Object.assign(p, _.query);
    let g = t.stringify(c, x);
    g && (g = `?${g}`);
    let A = E(_.url);
    return _.fragmentIdentifier && (A = `#${x[a] ? f(_.fragmentIdentifier, x) : _.fragmentIdentifier}`), `${w}${g}${A}`;
  }, t.pick = (_, x, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, w);
    const { url: b, query: p, fragmentIdentifier: c } = t.parseUrl(_, w);
    return t.stringifyUrl({
      url: b,
      query: i(p, x),
      fragmentIdentifier: c
    }, w);
  }, t.exclude = (_, x, w) => {
    const b = Array.isArray(x) ? (p) => !x.includes(p) : (p, c) => !x(p, c);
    return t.pick(_, b, w);
  };
})(xi);
const _y = {
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
function kl(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const $l = "base10", or = "base16", qo = "base64pad", wa = "utf8", ql = 0, Fn = 1, wy = 0, kc = 1, zo = 12, Ea = 32;
function Ey() {
  const t = ma.generateKeyPair();
  return { privateKey: ar(t.secretKey, or), publicKey: ar(t.publicKey, or) };
}
function Bo() {
  const t = Xn.randomBytes(Ea);
  return ar(t, or);
}
function Sy(t, e) {
  const r = ma.sharedKey(dr(t, or), dr(e, or)), n = new Bg(zs.SHA256, r).expand(Ea);
  return ar(n, or);
}
function Dy(t) {
  const e = zs.hash(dr(t, or));
  return ar(e, or);
}
function Kn(t) {
  const e = zs.hash(dr(t, wa));
  return ar(e, or);
}
function xy(t) {
  return dr(`${t}`, $l);
}
function Vi(t) {
  return Number(ar(t, $l));
}
function Oy(t) {
  const e = xy(typeof t.type < "u" ? t.type : ql);
  if (Vi(e) === Fn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? dr(t.senderPublicKey, or) : void 0, n = typeof t.iv < "u" ? dr(t.iv, or) : Xn.randomBytes(zo), i = new ya.ChaCha20Poly1305(dr(t.symKey, or)).seal(n, dr(t.message, wa));
  return Cy({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function Iy(t) {
  const e = new ya.ChaCha20Poly1305(dr(t.symKey, or)), { sealed: r, iv: n } = ws(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return ar(i, wa);
}
function Cy(t) {
  if (Vi(t.type) === Fn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return ar(jo([t.type, t.senderPublicKey, t.iv, t.sealed]), qo);
  }
  return ar(jo([t.type, t.iv, t.sealed]), qo);
}
function ws(t) {
  const e = dr(t, qo), r = e.slice(wy, kc), n = kc;
  if (Vi(r) === Fn) {
    const o = n + Ea, u = o + zo, l = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: l };
  }
  const i = n + zo, s = e.slice(n, i), a = e.slice(i);
  return { type: r, sealed: a, iv: s };
}
function Ry(t, e) {
  const r = ws(t);
  return zl({ type: Vi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? ar(r.senderPublicKey, or) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function zl(t) {
  const e = (t == null ? void 0 : t.type) || ql;
  if (e === Fn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function $c(t) {
  return t.type === Fn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Ty = Object.defineProperty, qc = Object.getOwnPropertySymbols, Ay = Object.prototype.hasOwnProperty, Ny = Object.prototype.propertyIsEnumerable, zc = (t, e, r) => e in t ? Ty(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bc = (t, e) => {
  for (var r in e || (e = {}))
    Ay.call(e, r) && zc(t, r, e[r]);
  if (qc)
    for (var r of qc(e))
      Ny.call(e, r) && zc(t, r, e[r]);
  return t;
};
const Py = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Ly = "js";
function Sa() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Bs() {
  return !Fl() && !!ba() && navigator.product === Py;
}
function Ki() {
  return !Sa() && !!ba();
}
function Wi() {
  return Bs() ? yr.reactNative : Sa() ? yr.node : Ki() ? yr.browser : yr.unknown;
}
function Fy(t, e) {
  let r = xi.parse(t);
  return r = Bc(Bc({}, r), e), t = xi.stringify(r), t;
}
function My() {
  return Ul() || { name: "", description: "", url: "", icons: [""] };
}
function Uy() {
  if (Wi() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Jg();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function jy() {
  var t;
  const e = Wi();
  return e === yr.browser ? [e, ((t = Ml()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function ky(t, e, r) {
  const n = Uy(), i = jy();
  return [[t, e].join("-"), [Ly, r].join("-"), n, i].join("/");
}
function $y({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: a }) {
  const o = r.split("?"), u = ky(t, e, n), l = { auth: i, ua: u, projectId: s, useOnCloseEvent: a || void 0 }, f = Fy(o[1] || "", l);
  return o[0] + "?" + f;
}
function In(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Bl(t) {
  return Object.fromEntries(t.entries());
}
function Vl(t) {
  return new Map(Object.entries(t));
}
function $n(t = ge.FIVE_MINUTES, e) {
  const r = ge.toMiliseconds(t || ge.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (a) => {
    s && n && (clearTimeout(s), n(a));
  }, reject: (a) => {
    s && i && (clearTimeout(s), i(a));
  }, done: () => new Promise((a, o) => {
    s = setTimeout(() => {
      o(new Error(e));
    }, r), n = a, i = o;
  }) };
}
function Oi(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const a = await t;
      n(a);
    } catch (a) {
      i(a);
    }
    clearTimeout(s);
  });
}
function Kl(t, e) {
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
function qy(t) {
  return Kl("topic", t);
}
function zy(t) {
  return Kl("id", t);
}
function Wl(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function Ir(t, e) {
  return ge.fromMiliseconds((e || Date.now()) + ge.toMiliseconds(t));
}
function on(t) {
  return Date.now() >= ge.toMiliseconds(t);
}
function Nt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function By({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, a = Wi();
    a === yr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : a === yr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const Vy = "irn";
function Vo(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Vy };
}
function ds(t) {
  const e = _y[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Ky = Object.defineProperty, Vc = Object.getOwnPropertySymbols, Wy = Object.prototype.hasOwnProperty, Hy = Object.prototype.propertyIsEnumerable, Kc = (t, e, r) => e in t ? Ky(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gy = (t, e) => {
  for (var r in e || (e = {}))
    Wy.call(e, r) && Kc(t, r, e[r]);
  if (Vc)
    for (var r of Vc(e))
      Hy.call(e, r) && Kc(t, r, e[r]);
  return t;
};
function Qy(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), a = t[i];
      r[s] = a;
    }
  }), r;
}
function Zy(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", a = xi.parse(s);
  return { protocol: n, topic: Yy(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: Qy(a) };
}
function Yy(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Jy(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function Xy(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + xi.stringify(Gy({ symKey: t.symKey }, Jy(t.relay)));
}
function ti(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function ev(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...ti(r.accounts));
  }), e;
}
function tv(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ti(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function rv(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ti(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function nv(t, e) {
  const r = ps(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const iv = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, sv = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ue(t, e) {
  const { message: r, code: n } = sv[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Pt(t, e) {
  const { message: r, code: n } = iv[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Hi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Ei(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function ir(t) {
  return typeof t > "u";
}
function qt(t, e) {
  return e && ir(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Da(t, e) {
  return e && ir(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function ov(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return In(i, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: l } = t.namespaces[a], f = ti(o), d = r[a];
    (!In(kl(a, d), f) || !In(d.methods, u) || !In(d.events, l)) && (s = !1);
  }), s) : !1;
}
function Es(t) {
  return qt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function av(t) {
  if (qt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Es(r);
    }
  }
  return !1;
}
function cv(t) {
  if (qt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function uv(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function lv(t) {
  return t == null ? void 0 : t.topic;
}
function hv(t, e) {
  let r = null;
  return qt(t == null ? void 0 : t.publicKey, !1) || (r = ue("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Wc(t) {
  let e = !0;
  return Hi(t) ? t.length && (e = t.every((r) => qt(r, !1))) : e = !1, e;
}
function fv(t, e, r) {
  let n = null;
  return Hi(e) && e.length ? e.forEach((i) => {
    n || Es(i) || (n = Pt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Es(t) || (n = Pt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function dv(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const a = fv(i, kl(i, s), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function pv(t, e) {
  let r = null;
  return Hi(t) ? t.forEach((n) => {
    r || av(n) || (r = Pt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Pt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function gv(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = pv(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function yv(t, e) {
  let r = null;
  return Wc(t == null ? void 0 : t.methods) ? Wc(t == null ? void 0 : t.events) || (r = Pt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Pt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Hl(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = yv(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function vv(t, e, r) {
  let n = null;
  if (t && Ei(t)) {
    const i = Hl(t, e);
    i && (n = i);
    const s = dv(t, e, r);
    s && (n = s);
  } else
    n = ue("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function ps(t, e) {
  let r = null;
  if (t && Ei(t)) {
    const n = Hl(t, e);
    n && (r = n);
    const i = gv(t, e);
    i && (r = i);
  } else
    r = ue("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Gl(t) {
  return qt(t.protocol, !0);
}
function mv(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Hi(t) && t.length && t.forEach((n) => {
    r = Gl(n);
  }), r;
}
function bv(t) {
  return typeof t == "number";
}
function fr(t) {
  return typeof t < "u" && typeof t !== null;
}
function _v(t) {
  return !(!t || typeof t != "object" || !t.code || !Da(t.code, !1) || !t.message || !qt(t.message, !1));
}
function wv(t) {
  return !(ir(t) || !qt(t.method, !1));
}
function Ev(t) {
  return !(ir(t) || ir(t.result) && ir(t.error) || !Da(t.id, !1) || !qt(t.jsonrpc, !1));
}
function Sv(t) {
  return !(ir(t) || !qt(t.name, !1));
}
function Hc(t, e) {
  return !(!Es(e) || !ev(t).includes(e));
}
function Dv(t, e, r) {
  return qt(r, !1) ? tv(t, e).includes(r) : !1;
}
function xv(t, e, r) {
  return qt(r, !1) ? rv(t, e).includes(r) : !1;
}
function Gc(t, e, r) {
  let n = null;
  const i = Ov(t), s = Iv(e), a = Object.keys(i), o = Object.keys(s), u = Qc(Object.keys(t)), l = Qc(Object.keys(e)), f = u.filter((d) => !l.includes(d));
  return f.length && (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), In(a, o) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const y = ti(e[d].accounts);
    y.includes(d) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${y.toString()}`));
  }), a.forEach((d) => {
    n || (In(i[d].methods, s[d].methods) ? In(i[d].events, s[d].events) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function Ov(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Qc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Iv(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = ti(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Cv(t, e) {
  return Da(t, !1) && t <= e.max && t >= e.min;
}
function Zc() {
  const t = Wi();
  return new Promise((e) => {
    switch (t) {
      case yr.browser:
        e(Rv());
        break;
      case yr.reactNative:
        e(Tv());
        break;
      case yr.node:
        e(Av());
        break;
      default:
        e(!0);
    }
  });
}
function Rv() {
  return Ki() && (navigator == null ? void 0 : navigator.onLine);
}
async function Tv() {
  if (Bs() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Av() {
  return !0;
}
function Nv(t) {
  switch (Wi()) {
    case yr.browser:
      Pv(t);
      break;
    case yr.reactNative:
      Lv(t);
      break;
  }
}
function Pv(t) {
  Ki() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Lv(t) {
  Bs() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const yo = {};
let cs = class {
  static get(e) {
    return yo[e];
  }
  static set(e, r) {
    yo[e] = r;
  }
  static delete(e) {
    delete yo[e];
  }
};
const Fv = "PARSE_ERROR", Mv = "INVALID_REQUEST", Uv = "METHOD_NOT_FOUND", jv = "INVALID_PARAMS", Ql = "INTERNAL_ERROR", xa = "SERVER_ERROR", kv = [-32700, -32600, -32601, -32602, -32603], Si = {
  [Fv]: { code: -32700, message: "Parse error" },
  [Mv]: { code: -32600, message: "Invalid Request" },
  [Uv]: { code: -32601, message: "Method not found" },
  [jv]: { code: -32602, message: "Invalid params" },
  [Ql]: { code: -32603, message: "Internal error" },
  [xa]: { code: -32e3, message: "Server error" }
}, Zl = xa;
function $v(t) {
  return kv.includes(t);
}
function Yc(t) {
  return Object.keys(Si).includes(t) ? Si[t] : Si[Zl];
}
function qv(t) {
  const e = Object.values(Si).find((r) => r.code === t);
  return e || Si[Zl];
}
function zv(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Yl = {}, Qr = {}, Jc;
function Bv() {
  if (Jc)
    return Qr;
  Jc = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.isBrowserCryptoAvailable = Qr.getSubtleCrypto = Qr.getBrowerCrypto = void 0;
  function t() {
    return (Vr == null ? void 0 : Vr.crypto) || (Vr == null ? void 0 : Vr.msCrypto) || {};
  }
  Qr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  Qr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Qr.isBrowserCryptoAvailable = r, Qr;
}
var Zr = {}, Xc;
function Vv() {
  if (Xc)
    return Zr;
  Xc = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.isBrowser = Zr.isNode = Zr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Zr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Zr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Zr.isBrowser = r, Zr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Hr;
  e.__exportStar(Bv(), t), e.__exportStar(Vv(), t);
})(Yl);
function Oa(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Jl(t = 6) {
  return BigInt(Oa(t));
}
function Ii(t, e, r) {
  return {
    id: r || Oa(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Ia(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Ca(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Kv(e, r)
  };
}
function Kv(t, e) {
  return typeof t > "u" ? Yc(Ql) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Yc(xa)), { message: t })), typeof e < "u" && (t.data = e), $v(t.code) && (t = qv(t.code)), t);
}
class Wv {
}
class Hv extends Wv {
  constructor() {
    super();
  }
}
class Gv extends Hv {
  constructor(e) {
    super();
  }
}
const Qv = "^wss?:";
function Zv(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Yv(t, e) {
  const r = Zv(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function eu(t) {
  return Yv(t, Qv);
}
function Jv(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Xl(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Ra(t) {
  return Xl(t) && "method" in t;
}
function Vs(t) {
  return Xl(t) && (Xr(t) || Cr(t));
}
function Xr(t) {
  return "result" in t;
}
function Cr(t) {
  return "error" in t;
}
class Xv extends Gv {
  constructor(e) {
    super(e), this.events = new xr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Ii(e.method, e.params || [], e.id || Jl().toString()), r);
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
        Cr(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", e), Vs(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const em = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), tm = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", tu = (t) => t.split("?")[0], ru = 10, rm = em();
class nm {
  constructor(e) {
    if (this.url = e, this.events = new xr.EventEmitter(), this.registering = !1, !eu(e))
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
      this.socket.send(da(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!eu(e))
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
      const i = Yl.isReactNative() ? void 0 : { rejectUnauthorized: !Jv(e) }, s = new rm(e, [], i);
      tm() ? s.onerror = (a) => {
        const o = a;
        n(this.emitError(o.error));
      } : s.on("error", (a) => {
        n(this.emitError(a));
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
    const r = typeof e.data == "string" ? pl(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Ca(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return zv(e, tu(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ru && this.events.setMaxListeners(ru);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${tu(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ss = { exports: {} };
Ss.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", l = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", m = "[object Function]", E = "[object GeneratorFunction]", O = "[object Map]", S = "[object Number]", P = "[object Null]", _ = "[object Object]", x = "[object Promise]", w = "[object Proxy]", b = "[object RegExp]", p = "[object Set]", c = "[object String]", g = "[object Symbol]", A = "[object Undefined]", M = "[object WeakMap]", B = "[object ArrayBuffer]", G = "[object DataView]", ee = "[object Float32Array]", N = "[object Float64Array]", $ = "[object Int8Array]", se = "[object Int16Array]", Z = "[object Int32Array]", H = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", W = "[object Uint16Array]", J = "[object Uint32Array]", we = /[\\^$.*+?()[\]{}|]/g, re = /^\[object .+?Constructor\]$/, be = /^(?:0|[1-9]\d*)$/, he = {};
  he[ee] = he[N] = he[$] = he[se] = he[Z] = he[H] = he[Y] = he[W] = he[J] = !0, he[o] = he[u] = he[B] = he[f] = he[G] = he[d] = he[y] = he[m] = he[O] = he[S] = he[_] = he[b] = he[p] = he[c] = he[M] = !1;
  var ve = typeof Vr == "object" && Vr && Vr.Object === Object && Vr, z = typeof self == "object" && self && self.Object === Object && self, q = ve || z || Function("return this")(), F = e && !e.nodeType && e, h = F && !0 && t && !t.nodeType && t, T = h && h.exports === F, oe = T && ve.process, le = function() {
    try {
      return oe && oe.binding && oe.binding("util");
    } catch {
    }
  }(), ke = le && le.isTypedArray;
  function xe(D, U) {
    for (var Q = -1, pe = D == null ? 0 : D.length, gt = 0, Ue = []; ++Q < pe; ) {
      var At = D[Q];
      U(At, Q, D) && (Ue[gt++] = At);
    }
    return Ue;
  }
  function Ae(D, U) {
    for (var Q = -1, pe = U.length, gt = D.length; ++Q < pe; )
      D[gt + Q] = U[Q];
    return D;
  }
  function He(D, U) {
    for (var Q = -1, pe = D == null ? 0 : D.length; ++Q < pe; )
      if (U(D[Q], Q, D))
        return !0;
    return !1;
  }
  function it(D, U) {
    for (var Q = -1, pe = Array(D); ++Q < D; )
      pe[Q] = U(Q);
    return pe;
  }
  function rt(D) {
    return function(U) {
      return D(U);
    };
  }
  function $e(D, U) {
    return D.has(U);
  }
  function Fe(D, U) {
    return D == null ? void 0 : D[U];
  }
  function Re(D) {
    var U = -1, Q = Array(D.size);
    return D.forEach(function(pe, gt) {
      Q[++U] = [gt, pe];
    }), Q;
  }
  function Ne(D, U) {
    return function(Q) {
      return D(U(Q));
    };
  }
  function Te(D) {
    var U = -1, Q = Array(D.size);
    return D.forEach(function(pe) {
      Q[++U] = pe;
    }), Q;
  }
  var Ie = Array.prototype, Oe = Function.prototype, _e = Object.prototype, Pe = q["__core-js_shared__"], Me = Oe.toString, Se = _e.hasOwnProperty, qe = function() {
    var D = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return D ? "Symbol(src)_1." + D : "";
  }(), Ge = _e.toString, Ze = RegExp(
    "^" + Me.call(Se).replace(we, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Qe = T ? q.Buffer : void 0, Ye = q.Symbol, tr = q.Uint8Array, Wt = _e.propertyIsEnumerable, pr = Ie.splice, Ft = Ye ? Ye.toStringTag : void 0, Mt = Object.getOwnPropertySymbols, ur = Qe ? Qe.isBuffer : void 0, Mr = Ne(Object.keys, Object), ct = nt(q, "DataView"), ut = nt(q, "Map"), yt = nt(q, "Promise"), ft = nt(q, "Set"), vt = nt(q, "WeakMap"), lt = nt(Object, "create"), St = vn(ct), It = vn(ut), Ct = vn(yt), Dt = vn(ft), Rt = vn(vt), mt = Ye ? Ye.prototype : void 0, bt = mt ? mt.valueOf : void 0;
  function ot(D) {
    var U = -1, Q = D == null ? 0 : D.length;
    for (this.clear(); ++U < Q; ) {
      var pe = D[U];
      this.set(pe[0], pe[1]);
    }
  }
  function R() {
    this.__data__ = lt ? lt(null) : {}, this.size = 0;
  }
  function K(D) {
    var U = this.has(D) && delete this.__data__[D];
    return this.size -= U ? 1 : 0, U;
  }
  function ce(D) {
    var U = this.__data__;
    if (lt) {
      var Q = U[D];
      return Q === n ? void 0 : Q;
    }
    return Se.call(U, D) ? U[D] : void 0;
  }
  function Ee(D) {
    var U = this.__data__;
    return lt ? U[D] !== void 0 : Se.call(U, D);
  }
  function Je(D, U) {
    var Q = this.__data__;
    return this.size += this.has(D) ? 0 : 1, Q[D] = lt && U === void 0 ? n : U, this;
  }
  ot.prototype.clear = R, ot.prototype.delete = K, ot.prototype.get = ce, ot.prototype.has = Ee, ot.prototype.set = Je;
  function Be(D) {
    var U = -1, Q = D == null ? 0 : D.length;
    for (this.clear(); ++U < Q; ) {
      var pe = D[U];
      this.set(pe[0], pe[1]);
    }
  }
  function We() {
    this.__data__ = [], this.size = 0;
  }
  function ze(D) {
    var U = this.__data__, Q = I(U, D);
    if (Q < 0)
      return !1;
    var pe = U.length - 1;
    return Q == pe ? U.pop() : pr.call(U, Q, 1), --this.size, !0;
  }
  function Ut(D) {
    var U = this.__data__, Q = I(U, D);
    return Q < 0 ? void 0 : U[Q][1];
  }
  function dt(D) {
    return I(this.__data__, D) > -1;
  }
  function _t(D, U) {
    var Q = this.__data__, pe = I(Q, D);
    return pe < 0 ? (++this.size, Q.push([D, U])) : Q[pe][1] = U, this;
  }
  Be.prototype.clear = We, Be.prototype.delete = ze, Be.prototype.get = Ut, Be.prototype.has = dt, Be.prototype.set = _t;
  function Tt(D) {
    var U = -1, Q = D == null ? 0 : D.length;
    for (this.clear(); ++U < Q; ) {
      var pe = D[U];
      this.set(pe[0], pe[1]);
    }
  }
  function Ur() {
    this.size = 0, this.__data__ = {
      hash: new ot(),
      map: new (ut || Be)(),
      string: new ot()
    };
  }
  function yn(D) {
    var U = pt(this, D).delete(D);
    return this.size -= U ? 1 : 0, U;
  }
  function zt(D) {
    return pt(this, D).get(D);
  }
  function Ji(D) {
    return pt(this, D).has(D);
  }
  function rn(D, U) {
    var Q = pt(this, D), pe = Q.size;
    return Q.set(D, U), this.size += Q.size == pe ? 0 : 1, this;
  }
  Tt.prototype.clear = Ur, Tt.prototype.delete = yn, Tt.prototype.get = zt, Tt.prototype.has = Ji, Tt.prototype.set = rn;
  function Mn(D) {
    var U = -1, Q = D == null ? 0 : D.length;
    for (this.__data__ = new Tt(); ++U < Q; )
      this.add(D[U]);
  }
  function Un(D) {
    return this.__data__.set(D, n), this;
  }
  function ni(D) {
    return this.__data__.has(D);
  }
  Mn.prototype.add = Mn.prototype.push = Un, Mn.prototype.has = ni;
  function jr(D) {
    var U = this.__data__ = new Be(D);
    this.size = U.size;
  }
  function Js() {
    this.__data__ = new Be(), this.size = 0;
  }
  function ii(D) {
    var U = this.__data__, Q = U.delete(D);
    return this.size = U.size, Q;
  }
  function Xs(D) {
    return this.__data__.get(D);
  }
  function eo(D) {
    return this.__data__.has(D);
  }
  function v(D, U) {
    var Q = this.__data__;
    if (Q instanceof Be) {
      var pe = Q.__data__;
      if (!ut || pe.length < r - 1)
        return pe.push([D, U]), this.size = ++Q.size, this;
      Q = this.__data__ = new Tt(pe);
    }
    return Q.set(D, U), this.size = Q.size, this;
  }
  jr.prototype.clear = Js, jr.prototype.delete = ii, jr.prototype.get = Xs, jr.prototype.has = eo, jr.prototype.set = v;
  function C(D, U) {
    var Q = es(D), pe = !Q && zh(D), gt = !Q && !pe && no(D), Ue = !Q && !pe && !gt && Ha(D), At = Q || pe || gt || Ue, jt = At ? it(D.length, String) : [], Bt = jt.length;
    for (var xt in D)
      (U || Se.call(D, xt)) && !(At && // Safari 9 has enumerable `arguments.length` in strict mode.
      (xt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      gt && (xt == "offset" || xt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ue && (xt == "buffer" || xt == "byteLength" || xt == "byteOffset") || // Skip index properties.
      to(xt, Bt))) && jt.push(xt);
    return jt;
  }
  function I(D, U) {
    for (var Q = D.length; Q--; )
      if (Ba(D[Q][0], U))
        return Q;
    return -1;
  }
  function j(D, U, Q) {
    var pe = U(D);
    return es(D) ? pe : Ae(pe, Q(D));
  }
  function L(D) {
    return D == null ? D === void 0 ? A : P : Ft && Ft in Object(D) ? lr(D) : qh(D);
  }
  function k(D) {
    return oi(D) && L(D) == o;
  }
  function V(D, U, Q, pe, gt) {
    return D === U ? !0 : D == null || U == null || !oi(D) && !oi(U) ? D !== D && U !== U : X(D, U, Q, pe, V, gt);
  }
  function X(D, U, Q, pe, gt, Ue) {
    var At = es(D), jt = es(U), Bt = At ? u : br(D), xt = jt ? u : br(U);
    Bt = Bt == o ? _ : Bt, xt = xt == o ? _ : xt;
    var gr = Bt == _, Or = xt == _, Ht = Bt == xt;
    if (Ht && no(D)) {
      if (!no(U))
        return !1;
      At = !0, gr = !1;
    }
    if (Ht && !gr)
      return Ue || (Ue = new jr()), At || Ha(D) ? ye(D, U, Q, pe, gt, Ue) : Ve(D, U, Bt, Q, pe, gt, Ue);
    if (!(Q & i)) {
      var _r = gr && Se.call(D, "__wrapped__"), wr = Or && Se.call(U, "__wrapped__");
      if (_r || wr) {
        var nn = _r ? D.value() : D, Gr = wr ? U.value() : U;
        return Ue || (Ue = new jr()), gt(nn, Gr, Q, pe, Ue);
      }
    }
    return Ht ? (Ue || (Ue = new jr()), st(D, U, Q, pe, gt, Ue)) : !1;
  }
  function ie(D) {
    if (!Wa(D) || Xi(D))
      return !1;
    var U = Va(D) ? Ze : re;
    return U.test(vn(D));
  }
  function ne(D) {
    return oi(D) && Ka(D.length) && !!he[L(D)];
  }
  function te(D) {
    if (!$h(D))
      return Mr(D);
    var U = [];
    for (var Q in Object(D))
      Se.call(D, Q) && Q != "constructor" && U.push(Q);
    return U;
  }
  function ye(D, U, Q, pe, gt, Ue) {
    var At = Q & i, jt = D.length, Bt = U.length;
    if (jt != Bt && !(At && Bt > jt))
      return !1;
    var xt = Ue.get(D);
    if (xt && Ue.get(U))
      return xt == U;
    var gr = -1, Or = !0, Ht = Q & s ? new Mn() : void 0;
    for (Ue.set(D, U), Ue.set(U, D); ++gr < jt; ) {
      var _r = D[gr], wr = U[gr];
      if (pe)
        var nn = At ? pe(wr, _r, gr, U, D, Ue) : pe(_r, wr, gr, D, U, Ue);
      if (nn !== void 0) {
        if (nn)
          continue;
        Or = !1;
        break;
      }
      if (Ht) {
        if (!He(U, function(Gr, mn) {
          if (!$e(Ht, mn) && (_r === Gr || gt(_r, Gr, Q, pe, Ue)))
            return Ht.push(mn);
        })) {
          Or = !1;
          break;
        }
      } else if (!(_r === wr || gt(_r, wr, Q, pe, Ue))) {
        Or = !1;
        break;
      }
    }
    return Ue.delete(D), Ue.delete(U), Or;
  }
  function Ve(D, U, Q, pe, gt, Ue, At) {
    switch (Q) {
      case G:
        if (D.byteLength != U.byteLength || D.byteOffset != U.byteOffset)
          return !1;
        D = D.buffer, U = U.buffer;
      case B:
        return !(D.byteLength != U.byteLength || !Ue(new tr(D), new tr(U)));
      case f:
      case d:
      case S:
        return Ba(+D, +U);
      case y:
        return D.name == U.name && D.message == U.message;
      case b:
      case c:
        return D == U + "";
      case O:
        var jt = Re;
      case p:
        var Bt = pe & i;
        if (jt || (jt = Te), D.size != U.size && !Bt)
          return !1;
        var xt = At.get(D);
        if (xt)
          return xt == U;
        pe |= s, At.set(D, U);
        var gr = ye(jt(D), jt(U), pe, gt, Ue, At);
        return At.delete(D), gr;
      case g:
        if (bt)
          return bt.call(D) == bt.call(U);
    }
    return !1;
  }
  function st(D, U, Q, pe, gt, Ue) {
    var At = Q & i, jt = et(D), Bt = jt.length, xt = et(U), gr = xt.length;
    if (Bt != gr && !At)
      return !1;
    for (var Or = Bt; Or--; ) {
      var Ht = jt[Or];
      if (!(At ? Ht in U : Se.call(U, Ht)))
        return !1;
    }
    var _r = Ue.get(D);
    if (_r && Ue.get(U))
      return _r == U;
    var wr = !0;
    Ue.set(D, U), Ue.set(U, D);
    for (var nn = At; ++Or < Bt; ) {
      Ht = jt[Or];
      var Gr = D[Ht], mn = U[Ht];
      if (pe)
        var Ga = At ? pe(mn, Gr, Ht, U, D, Ue) : pe(Gr, mn, Ht, D, U, Ue);
      if (!(Ga === void 0 ? Gr === mn || gt(Gr, mn, Q, pe, Ue) : Ga)) {
        wr = !1;
        break;
      }
      nn || (nn = Ht == "constructor");
    }
    if (wr && !nn) {
      var ts = D.constructor, rs = U.constructor;
      ts != rs && "constructor" in D && "constructor" in U && !(typeof ts == "function" && ts instanceof ts && typeof rs == "function" && rs instanceof rs) && (wr = !1);
    }
    return Ue.delete(D), Ue.delete(U), wr;
  }
  function et(D) {
    return j(D, Kh, si);
  }
  function pt(D, U) {
    var Q = D.__data__;
    return ro(U) ? Q[typeof U == "string" ? "string" : "hash"] : Q.map;
  }
  function nt(D, U) {
    var Q = Fe(D, U);
    return ie(Q) ? Q : void 0;
  }
  function lr(D) {
    var U = Se.call(D, Ft), Q = D[Ft];
    try {
      D[Ft] = void 0;
      var pe = !0;
    } catch {
    }
    var gt = Ge.call(D);
    return pe && (U ? D[Ft] = Q : delete D[Ft]), gt;
  }
  var si = Mt ? function(D) {
    return D == null ? [] : (D = Object(D), xe(Mt(D), function(U) {
      return Wt.call(D, U);
    }));
  } : Wh, br = L;
  (ct && br(new ct(new ArrayBuffer(1))) != G || ut && br(new ut()) != O || yt && br(yt.resolve()) != x || ft && br(new ft()) != p || vt && br(new vt()) != M) && (br = function(D) {
    var U = L(D), Q = U == _ ? D.constructor : void 0, pe = Q ? vn(Q) : "";
    if (pe)
      switch (pe) {
        case St:
          return G;
        case It:
          return O;
        case Ct:
          return x;
        case Dt:
          return p;
        case Rt:
          return M;
      }
    return U;
  });
  function to(D, U) {
    return U = U ?? a, !!U && (typeof D == "number" || be.test(D)) && D > -1 && D % 1 == 0 && D < U;
  }
  function ro(D) {
    var U = typeof D;
    return U == "string" || U == "number" || U == "symbol" || U == "boolean" ? D !== "__proto__" : D === null;
  }
  function Xi(D) {
    return !!qe && qe in D;
  }
  function $h(D) {
    var U = D && D.constructor, Q = typeof U == "function" && U.prototype || _e;
    return D === Q;
  }
  function qh(D) {
    return Ge.call(D);
  }
  function vn(D) {
    if (D != null) {
      try {
        return Me.call(D);
      } catch {
      }
      try {
        return D + "";
      } catch {
      }
    }
    return "";
  }
  function Ba(D, U) {
    return D === U || D !== D && U !== U;
  }
  var zh = k(function() {
    return arguments;
  }()) ? k : function(D) {
    return oi(D) && Se.call(D, "callee") && !Wt.call(D, "callee");
  }, es = Array.isArray;
  function Bh(D) {
    return D != null && Ka(D.length) && !Va(D);
  }
  var no = ur || Hh;
  function Vh(D, U) {
    return V(D, U);
  }
  function Va(D) {
    if (!Wa(D))
      return !1;
    var U = L(D);
    return U == m || U == E || U == l || U == w;
  }
  function Ka(D) {
    return typeof D == "number" && D > -1 && D % 1 == 0 && D <= a;
  }
  function Wa(D) {
    var U = typeof D;
    return D != null && (U == "object" || U == "function");
  }
  function oi(D) {
    return D != null && typeof D == "object";
  }
  var Ha = ke ? rt(ke) : ne;
  function Kh(D) {
    return Bh(D) ? C(D) : te(D);
  }
  function Wh() {
    return [];
  }
  function Hh() {
    return !1;
  }
  t.exports = Vh;
})(Ss, Ss.exports);
var im = Ss.exports;
const sm = /* @__PURE__ */ qi(im);
function om(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), a = s.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, u = t.charAt(0), l = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var O = 0, S = 0, P = 0, _ = E.length; P !== _ && E[P] === 0; )
      P++, O++;
    for (var x = (_ - P) * f + 1 >>> 0, w = new Uint8Array(x); P !== _; ) {
      for (var b = E[P], p = 0, c = x - 1; (b !== 0 || p < S) && c !== -1; c--, p++)
        b += 256 * w[c] >>> 0, w[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      S = p, P++;
    }
    for (var g = x - S; g !== x && w[g] === 0; )
      g++;
    for (var A = u.repeat(O); g < x; ++g)
      A += t.charAt(w[g]);
    return A;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var O = 0;
    if (E[O] !== " ") {
      for (var S = 0, P = 0; E[O] === u; )
        S++, O++;
      for (var _ = (E.length - O) * l + 1 >>> 0, x = new Uint8Array(_); E[O]; ) {
        var w = r[E.charCodeAt(O)];
        if (w === 255)
          return;
        for (var b = 0, p = _ - 1; (w !== 0 || b < P) && p !== -1; p--, b++)
          w += o * x[p] >>> 0, x[p] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        P = b, O++;
      }
      if (E[O] !== " ") {
        for (var c = _ - P; c !== _ && x[c] === 0; )
          c++;
        for (var g = new Uint8Array(S + (_ - c)), A = S; c !== _; )
          g[A++] = x[c++];
        return g;
      }
    }
  }
  function m(E) {
    var O = y(E);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: y, decode: m };
}
var am = om, cm = am;
const eh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, um = (t) => new TextEncoder().encode(t), lm = (t) => new TextDecoder().decode(t);
class hm {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class fm {
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
    return th(this, e);
  }
}
class dm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return th(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const th = (t, e) => new dm({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class pm {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new hm(e, r, n), this.decoder = new fm(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ks = ({ name: t, prefix: e, encode: r, decode: n }) => new pm(t, e, r, n), Gi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = cm(r, e);
  return Ks({ prefix: t, name: e, encode: n, decode: (s) => eh(i(s)) });
}, gm = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const a = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, l = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[l++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, ym = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Kt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ks({ prefix: e, name: t, encode(i) {
  return ym(i, n, r);
}, decode(i) {
  return gm(i, n, r, t);
} }), vm = Ks({ prefix: "\0", name: "identity", encode: (t) => lm(t), decode: (t) => um(t) });
var mm = Object.freeze({ __proto__: null, identity: vm });
const bm = Kt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var _m = Object.freeze({ __proto__: null, base2: bm });
const wm = Kt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Em = Object.freeze({ __proto__: null, base8: wm });
const Sm = Gi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Dm = Object.freeze({ __proto__: null, base10: Sm });
const xm = Kt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Om = Kt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Im = Object.freeze({ __proto__: null, base16: xm, base16upper: Om });
const Cm = Kt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Rm = Kt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Tm = Kt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Am = Kt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Nm = Kt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Pm = Kt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Lm = Kt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Fm = Kt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Mm = Kt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Um = Object.freeze({ __proto__: null, base32: Cm, base32upper: Rm, base32pad: Tm, base32padupper: Am, base32hex: Nm, base32hexupper: Pm, base32hexpad: Lm, base32hexpadupper: Fm, base32z: Mm });
const jm = Gi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), km = Gi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var $m = Object.freeze({ __proto__: null, base36: jm, base36upper: km });
const qm = Gi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), zm = Gi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Bm = Object.freeze({ __proto__: null, base58btc: qm, base58flickr: zm });
const Vm = Kt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Km = Kt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Wm = Kt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Hm = Kt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Gm = Object.freeze({ __proto__: null, base64: Vm, base64pad: Km, base64url: Wm, base64urlpad: Hm });
const rh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Qm = rh.reduce((t, e, r) => (t[r] = e, t), []), Zm = rh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Ym(t) {
  return t.reduce((e, r) => (e += Qm[r], e), "");
}
function Jm(t) {
  const e = [];
  for (const r of t) {
    const n = Zm[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Xm = Ks({ prefix: "🚀", name: "base256emoji", encode: Ym, decode: Jm });
var eb = Object.freeze({ __proto__: null, base256emoji: Xm }), tb = nh, nu = 128, rb = 127, nb = ~rb, ib = Math.pow(2, 31);
function nh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= ib; )
    e[r++] = t & 255 | nu, t /= 128;
  for (; t & nb; )
    e[r++] = t & 255 | nu, t >>>= 7;
  return e[r] = t | 0, nh.bytes = r - n + 1, e;
}
var sb = Ko, ob = 128, iu = 127;
function Ko(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, a, o = t.length;
  do {
    if (s >= o)
      throw Ko.bytes = 0, new RangeError("Could not decode varint");
    a = t[s++], r += i < 28 ? (a & iu) << i : (a & iu) * Math.pow(2, i), i += 7;
  } while (a >= ob);
  return Ko.bytes = s - n, r;
}
var ab = Math.pow(2, 7), cb = Math.pow(2, 14), ub = Math.pow(2, 21), lb = Math.pow(2, 28), hb = Math.pow(2, 35), fb = Math.pow(2, 42), db = Math.pow(2, 49), pb = Math.pow(2, 56), gb = Math.pow(2, 63), yb = function(t) {
  return t < ab ? 1 : t < cb ? 2 : t < ub ? 3 : t < lb ? 4 : t < hb ? 5 : t < fb ? 6 : t < db ? 7 : t < pb ? 8 : t < gb ? 9 : 10;
}, vb = { encode: tb, decode: sb, encodingLength: yb }, ih = vb;
const su = (t, e, r = 0) => (ih.encode(t, e, r), e), ou = (t) => ih.encodingLength(t), Wo = (t, e) => {
  const r = e.byteLength, n = ou(t), i = n + ou(r), s = new Uint8Array(i + r);
  return su(t, s, 0), su(r, s, n), s.set(e, i), new mb(t, r, e, s);
};
class mb {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const sh = ({ name: t, code: e, encode: r }) => new bb(t, e, r);
class bb {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Wo(this.code, r) : r.then((n) => Wo(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const oh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), _b = sh({ name: "sha2-256", code: 18, encode: oh("SHA-256") }), wb = sh({ name: "sha2-512", code: 19, encode: oh("SHA-512") });
var Eb = Object.freeze({ __proto__: null, sha256: _b, sha512: wb });
const ah = 0, Sb = "identity", ch = eh, Db = (t) => Wo(ah, ch(t)), xb = { code: ah, name: Sb, encode: ch, digest: Db };
var Ob = Object.freeze({ __proto__: null, identity: xb });
new TextEncoder(), new TextDecoder();
const au = { ...mm, ..._m, ...Em, ...Dm, ...Im, ...Um, ...$m, ...Bm, ...Gm, ...eb };
({ ...Eb, ...Ob });
function uh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ib(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? uh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function lh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const cu = lh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), vo = lh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ib(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Cb = { utf8: cu, "utf-8": cu, hex: au.base16, latin1: vo, ascii: vo, binary: vo, ...au };
function Rb(t, e = "utf8") {
  const r = Cb[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? uh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const hh = "wc", Tb = 2, Ta = "core", un = `${hh}@2:${Ta}:`, Ab = { name: Ta, logger: "error" }, Nb = { database: ":memory:" }, Pb = "crypto", uu = "client_ed25519_seed", Lb = ge.ONE_DAY, Fb = "keychain", Mb = "0.3", Ub = "messages", jb = "0.3", kb = ge.SIX_HOURS, $b = "publisher", fh = "irn", qb = "error", dh = "wss://relay.walletconnect.com", lu = "wss://relay.walletconnect.org", zb = "relayer", Xt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Bb = "_subscription", Yr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Vb = ge.ONE_SECOND, Kb = "2.10.0", Wb = 1e4, Hb = "0.3", Gb = "WALLETCONNECT_CLIENT_ID", Br = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Qb = "subscription", Zb = "0.3", Yb = ge.FIVE_SECONDS * 1e3, Jb = "pairing", Xb = "0.3", di = { wc_pairingDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 } } }, zr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, e0 = "history", t0 = "0.3", r0 = "expirer", Er = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, n0 = "0.3", mo = "verify-api", gs = "https://verify.walletconnect.com", hu = "https://verify.walletconnect.org";
class i0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Fb, this.version = Mb, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
        const { message: s } = ue("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Xe.generateChildLogger(r, this.name);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Bl(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Vl(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class s0 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = Pb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Rc(i);
      return Rl(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Ey();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), a = Rc(s), o = Bo();
      return await Tg(o, i, Lb, a);
    }, this.generateSharedKey = (i, s, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), u = Sy(o, s);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const a = s || Dy(i);
      return await this.keychain.set(a, i), a;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, a) => {
      this.isInitialized();
      const o = zl(a), u = da(s);
      if ($c(o)) {
        const y = o.senderPublicKey, m = o.receiverPublicKey;
        i = await this.generateSharedKey(y, m);
      }
      const l = this.getSymKey(i), { type: f, senderPublicKey: d } = o;
      return Oy({ type: f, symKey: l, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, a) => {
      this.isInitialized();
      const o = Ry(s, a);
      if ($c(o)) {
        const u = o.receiverPublicKey, l = o.senderPublicKey;
        i = await this.generateSharedKey(u, l);
      }
      try {
        const u = this.getSymKey(i), l = Iy({ symKey: u, encoded: s });
        return pl(l);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = ws(i);
      return Vi(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = ws(i);
      return s.senderPublicKey ? ar(s.senderPublicKey, or) : void 0;
    }, this.core = e, this.logger = Xe.generateChildLogger(r, this.name), this.keychain = n || new i0(this.core, this.logger);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      e = this.keychain.get(uu);
    } catch {
      e = Bo(), await this.keychain.set(uu, e);
    }
    return Rb(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class o0 extends Pd {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Ub, this.version = jb, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
      const s = Kn(i);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[s] < "u" || (a[s] = i, this.messages.set(n, a), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), a = Kn(i);
      return typeof s[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Xe.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Bl(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Vl(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class a0 extends Ld {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new xr.EventEmitter(), this.name = $b, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ge.toMiliseconds(ge.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || kb, u = Vo(s), l = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || Jl().toString(), y = { topic: n, message: i, opts: { ttl: o, relay: u, prompt: l, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, y), this.publishTimeout);
        try {
          await await Oi(this.rpcPublish(n, i, o, u, l, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(Xt.publish, y);
        } catch (E) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = s == null ? void 0 : s.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), E;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = Xe.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, a, o) {
    var u, l, f, d;
    const y = { method: ds(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: a }, id: o };
    return ir((u = y.params) == null ? void 0 : u.prompt) && ((l = y.params) == null || delete l.prompt), ir((f = y.params) == null ? void 0 : f.tag) && ((d = y.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(Jn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Xt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Xt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class c0 {
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
var u0 = Object.defineProperty, l0 = Object.defineProperties, h0 = Object.getOwnPropertyDescriptors, fu = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, d0 = Object.prototype.propertyIsEnumerable, du = (t, e, r) => e in t ? u0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pi = (t, e) => {
  for (var r in e || (e = {}))
    f0.call(e, r) && du(t, r, e[r]);
  if (fu)
    for (var r of fu(e))
      d0.call(e, r) && du(t, r, e[r]);
  return t;
}, bo = (t, e) => l0(t, h0(e));
class p0 extends Ud {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new c0(), this.events = new xr.EventEmitter(), this.name = Qb, this.version = Zb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = un, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Vo(i), a = { topic: n, relay: s };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, s);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), o;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const a = new ge.Watch();
      a.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= Yb && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = Xe.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      const i = Vo(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = Pt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: ds(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Oi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xt.connection_stalled);
    }
    return Kn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: ds(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Oi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: ds(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, bo(pi({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, pi({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, pi({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Br.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Br.deleted, bo(pi({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Br.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Br.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = ue("RESTORE_WILL_OVERRIDE", this.name);
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
    Hi(r) && this.onBatchSubscribe(r.map((n, i) => bo(pi({}, e[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(Jn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Xt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Xt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Br.created, async (e) => {
      const r = Br.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Br.deleted, async (e) => {
      const r = Br.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
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
var g0 = Object.defineProperty, pu = Object.getOwnPropertySymbols, y0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, gu = (t, e, r) => e in t ? g0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m0 = (t, e) => {
  for (var r in e || (e = {}))
    y0.call(e, r) && gu(t, r, e[r]);
  if (pu)
    for (var r of pu(e))
      v0.call(e, r) && gu(t, r, e[r]);
  return t;
};
class b0 extends Fd {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new xr.EventEmitter(), this.name = zb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Xt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Xt.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Yr.payload, this.onPayloadHandler), this.provider.on(Yr.connect, this.onConnectHandler), this.provider.on(Yr.disconnect, this.onDisconnectHandler), this.provider.on(Yr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Xe.generateChildLogger(e.logger, this.name) : Xe.pino(Xe.getDefaultLoggerOptions({ level: e.logger || qb })), this.messages = new o0(this.logger, e.core), this.subscriber = new p0(this, this.logger), this.publisher = new a0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || dh, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${lu}...`), await this.restartTransport(lu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Wb);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      this.subscriber.once(Br.created, (a) => {
        a.topic === e && s();
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Oi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Br.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Oi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Yr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Zc())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Xv(new nm($y({ sdkVersion: Kb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Ra(e)) {
      if (!e.method.endsWith(Bb))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, a = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(m0({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Vs(e) && this.events.emit(Xt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Xt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Ia(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Yr.payload, this.onPayloadHandler), this.provider.off(Yr.connect, this.onConnectHandler), this.provider.off(Yr.disconnect, this.onDisconnectHandler), this.provider.off(Yr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Xt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Zc();
    Nv(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Xt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ge.toMiliseconds(Vb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
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
var _0 = Object.defineProperty, yu = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, E0 = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? _0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, mu = (t, e) => {
  for (var r in e || (e = {}))
    w0.call(e, r) && vu(t, r, e[r]);
  if (yu)
    for (var r of yu(e))
      E0.call(e, r) && vu(t, r, e[r]);
  return t;
};
class Ws extends Md {
  constructor(e, r, n, i = un, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Hb, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !ir(a) ? this.map.set(this.getKey(a), a) : uv(a) ? this.map.set(a.id, a) : lv(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => sm(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = mu(mu({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = Xe.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      const { message: n } = ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = ue("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class S0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = Jb, this.version = Xb, this.events = new fa(), this.initialized = !1, this.storagePrefix = un, this.ignoredPayloadTypes = [Fn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Bo(), i = await this.core.crypto.setSymKey(n), s = Ir(ge.FIVE_MINUTES), a = { protocol: fh }, o = { topic: i, expiry: s, relay: a, active: !1 }, u = Xy({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: a });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: a } = Zy(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const o = Ir(ge.FIVE_MINUTES), u = { topic: i, relay: a, expiry: o, active: !1 };
      return await this.pairings.set(i, u), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: a }), this.core.expirer.set(i, o), n.activatePairing && await this.activate({ topic: i }), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Ir(ge.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = $n();
        this.events.once(Nt("pairing_ping", s), ({ error: l }) => {
          l ? u(l) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", Pt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const a = Ii(i, s), o = await this.core.crypto.encode(n, a), u = di[i].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, i, s) => {
      const a = Ia(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), l = di[u.request.method].res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (n, i, s) => {
      const a = Ca(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), l = di[u.request.method] ? di[u.request.method].res : di.unregistered_method.res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, Pt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => on(i.expiry));
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
      const { topic: i, payload: s } = n, a = (await this.core.history.get(i, s.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        Xr(i) ? this.events.emit(Nt("pairing_ping", s), {}) : Cr(i) && this.events.emit(Nt("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: a } = i;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = Pt("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(s, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(Pt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!fr(n)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!cv(n.uri)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!fr(n)) {
        const { message: s } = ue("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!fr(n)) {
        const { message: s } = ue("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!qt(n, !1)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (on(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = ue("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = Xe.generateChildLogger(r, this.name), this.pairings = new Ws(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Xt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        Ra(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Vs(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Er.expired, async (e) => {
      const { topic: r } = Wl(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class D0 extends Nd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new xr.EventEmitter(), this.name = e0, this.version = t0, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const a = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Ir(ge.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(zr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = Cr(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(zr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(zr.deleted, s);
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
    }, this.logger = Xe.generateChildLogger(r, this.name);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Ii(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(zr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = ue("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(zr.created, (e) => {
      const r = zr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(zr.updated, (e) => {
      const r = zr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(zr.deleted, (e) => {
      const r = zr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Jn.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ge.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class x0 extends jd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new xr.EventEmitter(), this.name = r0, this.version = n0, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
      const s = this.formatTarget(n), a = { target: s, expiry: i };
      this.expirations.set(s, a), this.checkExpiry(s, a), this.events.emit(Er.created, { target: s, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Er.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = Xe.generateChildLogger(r, this.name);
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
      return qy(e);
    if (typeof e == "number")
      return zy(e);
    const { message: r } = ue("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Er.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = ue("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    ge.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(Er.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Jn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Er.created, (e) => {
      const r = Er.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Er.expired, (e) => {
      const r = Er.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Er.deleted, (e) => {
      const r = Er.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class O0 extends kd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = mo, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Bs() || !Ki())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || gs;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = hu;
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
      const i = (n == null ? void 0 : n.verifyUrl) || gs;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (a) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(a), s = await this.fetchAttestation(n.attestationId, hu);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      var s;
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const a = this.startAbortTimer(ge.ONE_SECOND * 2), o = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(a), o.status === 200 ? (s = await o.json()) == null ? void 0 : s.origin : "";
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
        if (document.getElementById(mo))
          return s();
        window.addEventListener("message", i);
        const a = document.createElement("iframe");
        a.id = mo, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = s;
      }), new Promise((s, a) => setTimeout(() => {
        window.removeEventListener("message", i), a("verify iframe load timeout");
      }, ge.toMiliseconds(ge.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Xe.generateChildLogger(r, this.name), this.verifyUrl = gs, this.abortController = new AbortController(), this.isDevEnv = Sa() && process.env.IS_VITEST;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ge.toMiliseconds(e));
  }
}
var I0 = Object.defineProperty, bu = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, R0 = Object.prototype.propertyIsEnumerable, _u = (t, e, r) => e in t ? I0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wu = (t, e) => {
  for (var r in e || (e = {}))
    C0.call(e, r) && _u(t, r, e[r]);
  if (bu)
    for (var r of bu(e))
      R0.call(e, r) && _u(t, r, e[r]);
  return t;
};
class Aa extends Ad {
  constructor(e) {
    super(e), this.protocol = hh, this.version = Tb, this.name = Ta, this.events = new xr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || dh;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Xe.pino(Xe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ab.logger }));
    this.logger = Xe.generateChildLogger(r, this.name), this.heartbeat = new Jn.HeartBeat(), this.crypto = new s0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new D0(this, this.logger), this.expirer = new x0(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Gf(wu(wu({}, Nb), e == null ? void 0 : e.storageOptions)), this.relayer = new b0({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new S0(this, this.logger), this.verify = new O0(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Aa(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Gb, n), r;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
const T0 = Aa, ph = "wc", gh = 2, yh = "client", Na = `${ph}@${gh}:${yh}:`, _o = { name: yh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Eu = "WALLETCONNECT_DEEPLINK_CHOICE", A0 = "proposal", N0 = "Proposal expired", P0 = "session", us = ge.SEVEN_DAYS, L0 = "engine", gi = { wc_sessionPropose: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, wo = { min: ge.FIVE_MINUTES, max: ge.SEVEN_DAYS }, Jr = { idle: "IDLE", active: "ACTIVE" }, F0 = "request", M0 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var U0 = Object.defineProperty, j0 = Object.defineProperties, k0 = Object.getOwnPropertyDescriptors, Su = Object.getOwnPropertySymbols, $0 = Object.prototype.hasOwnProperty, q0 = Object.prototype.propertyIsEnumerable, Du = (t, e, r) => e in t ? U0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hr = (t, e) => {
  for (var r in e || (e = {}))
    $0.call(e, r) && Du(t, r, e[r]);
  if (Su)
    for (var r of Su(e))
      q0.call(e, r) && Du(t, r, e[r]);
  return t;
}, yi = (t, e) => j0(t, k0(e));
class z0 extends qd {
  constructor(e) {
    super(e), this.name = L0, this.events = new fa(), this.initialized = !1, this.ignoredPayloadTypes = [Fn], this.requestQueue = { state: Jr.idle, queue: [] }, this.sessionRequestQueue = { state: Jr.idle, queue: [] }, this.requestQueueDelay = ge.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(gi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = yi(hr({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let l = i, f, d = !1;
      if (l && (d = this.client.core.pairing.pairings.get(l).active), !l || !d) {
        const { topic: x, uri: w } = await this.client.core.pairing.create();
        l = x, f = w;
      }
      const y = await this.client.core.crypto.generateKeyPair(), m = hr({ requiredNamespaces: s, optionalNamespaces: a, relays: u ?? [{ protocol: fh }], proposer: { publicKey: y, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: E, resolve: O, done: S } = $n(ge.FIVE_MINUTES, N0);
      if (this.events.once(Nt("session_connect"), async ({ error: x, session: w }) => {
        if (x)
          E(x);
        else if (w) {
          w.self.publicKey = y;
          const b = yi(hr({}, w), { requiredNamespaces: w.requiredNamespaces, optionalNamespaces: w.optionalNamespaces });
          await this.client.session.set(w.topic, b), await this.setExpiry(w.topic, w.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: w.peer.metadata }), O(b);
        }
      }), !l) {
        const { message: x } = ue("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(x);
      }
      const P = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: m }), _ = Ir(ge.FIVE_MINUTES);
      return await this.setProposal(P, hr({ id: P, expiry: _ }, m)), { uri: f, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: l, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", Ei(f) || (f = nv(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), m = l.publicKey, E = await this.client.core.crypto.generateSharedKey(y, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: l.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(n, Pt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const O = hr({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Ir(us) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(E), await this.sendRequest({ topic: E, method: "wc_sessionSettle", params: O, throwOnFailedPublish: !0 });
      const S = yi(hr({}, O), { topic: E, pairingTopic: u, acknowledged: !1, self: O.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: y });
      return await this.client.session.set(E, S), await this.setExpiry(E, Ir(us)), { topic: E, acknowledged: () => new Promise((P) => setTimeout(() => P(this.client.session.get(E)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, Pt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: a, resolve: o, reject: u } = $n();
      return this.events.once(Nt("session_update", s), ({ error: l }) => {
        l ? u(l) : o();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: a, reject: o } = $n();
      return this.events.once(Nt("session_extend", i), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, Ir(us)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: a } = r, o = Oa(), { done: u, resolve: l, reject: f } = $n(a);
      return this.events.once(Nt("session_request", o), ({ error: d, result: y }) => {
        d ? f(d) : l(y);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((y) => f(y)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const y = await this.client.core.storage.getItem(Eu);
        By({ id: o, topic: s, wcDeepLink: y }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      Xr(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : Cr(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: a, reject: o } = $n();
        this.events.once(Nt("session_ping", i), ({ error: u }) => {
          u ? o(u) : a();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: Pt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => ov(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var a, o;
            return ((a = s.peerMetadata) == null ? void 0 : a.url) && ((o = s.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Pt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Eu).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, Pt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = Jr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = gi.wc_sessionRequest.req.ttl, { id: i, topic: s, params: a } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: a }), n && this.client.core.expirer.set(i, Ir(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: l } = r, f = Ii(i, s, u);
      if (Ki() && M0.includes(i)) {
        const m = Kn(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: m });
      }
      const d = await this.client.core.crypto.encode(n, f), y = gi[i].req;
      return a && (y.ttl = a), o && (y.id = o), this.client.core.history.set(n, f), l ? (y.internal = yi(hr({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, y)) : this.client.core.relayer.publish(n, d, y).catch((m) => this.client.logger.error(m)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: a } = r, o = Ia(n, s), u = await this.client.core.crypto.encode(i, o), l = await this.client.core.history.get(i, n), f = gi[l.request.method].res;
      a ? (f.internal = yi(hr({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, i) => {
      const s = Ca(r, i), a = await this.client.core.crypto.encode(n, s), o = await this.client.core.history.get(n, r), u = gi[o.request.method].res;
      this.client.core.relayer.publish(n, a, u), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        on(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        on(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Jr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Jr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = Jr.idle;
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
      const { topic: n } = r, { message: i } = ue("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(hr({}, n.params));
        const a = Ir(ge.FIVE_MINUTES), o = hr({ id: s, pairingTopic: r, expiry: a }, i);
        await this.setProposal(s, o);
        const u = Kn(JSON.stringify(n)), l = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: o, verifyContext: l });
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (Xr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const a = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const u = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const l = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const f = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        Cr(n) && (await this.client.proposal.delete(i, Pt("USER_DISCONNECTED")), this.events.emit(Nt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: a, controller: o, expiry: u, namespaces: l, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: y, pairingTopic: m } = n.params, E = hr({ topic: r, relay: a, expiry: u, namespaces: l, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Nt("session_connect"), { session: E }), this.cleanupDuplicatePairings(E);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      Xr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Nt("session_approve", i), {})) : Cr(n) && (await this.client.session.delete(r, Pt("USER_DISCONNECTED")), this.events.emit(Nt("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const a = `${r}_session_update`, o = cs.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(hr({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), cs.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      Xr(n) ? this.events.emit(Nt("session_update", i), {}) : Cr(n) && this.events.emit(Nt("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ir(us)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      Xr(n) ? this.events.emit(Nt("session_extend", i), {}) : Cr(n) && this.events.emit(Nt("session_extend", i), { error: n.error });
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
        Xr(n) ? this.events.emit(Nt("session_ping", i), {}) : Cr(n) && this.events.emit(Nt("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Xt.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(hr({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      Xr(n) ? this.events.emit(Nt("session_request", i), { result: n.result }) : Cr(n) && this.events.emit(Nt("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const a = `${r}_session_event_${s.event.name}`, o = cs.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(hr({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), cs.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Jr.idle, this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === Jr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, a = Kn(JSON.stringify(Ii("wc_sessionRequest", s, n))), o = this.client.session.get(i), u = await this.getVerifyContext(a, o.peer.metadata);
        this.sessionRequestQueue.state = Jr.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: u });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!fr(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: a, relays: o } = r;
      if (ir(n) || await this.isValidPairingTopic(n), !mv(o, !0)) {
        const { message: u } = ue("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !ir(i) && Ei(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !ir(s) && Ei(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), ir(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = vv(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!fr(r))
        throw new Error(ue("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = ps(i, "approve()");
      if (u)
        throw new Error(u.message);
      const l = Gc(o.requiredNamespaces, i, "approve()");
      if (l)
        throw new Error(l.message);
      if (!qt(s, !0)) {
        const { message: f } = ue("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      ir(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!fr(r)) {
        const { message: s } = ue("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !_v(i)) {
        const { message: s } = ue("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!fr(r)) {
        const { message: l } = ue("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: n, controller: i, namespaces: s, expiry: a } = r;
      if (!Gl(n)) {
        const { message: l } = ue("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = hv(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = ps(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (on(a)) {
        const { message: l } = ue("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!fr(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), a = ps(i, "update()");
      if (a)
        throw new Error(a.message);
      const o = Gc(s.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!fr(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!fr(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: i, chainId: s, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!Hc(o, s)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!wv(i)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!Dv(o, s, i.method)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (a && !Cv(a, wo)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${wo.min} and ${wo.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!fr(r)) {
        const { message: s } = ue("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Ev(i)) {
        const { message: s } = ue("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!fr(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!fr(r)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Hc(a, s)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(o);
      }
      if (!Sv(i)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!xv(a, s, i.name)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!fr(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || gs, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!qt(i, !1)) {
          const { message: s } = ue("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Xt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        Ra(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Vs(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Er.expired, async (e) => {
      const { topic: r, id: n } = Wl(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, ue("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!qt(e, !1)) {
      const { message: r } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = ue("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!qt(e, !1)) {
      const { message: r } = ue("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = ue("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (qt(e, !1)) {
      const { message: r } = ue("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = ue("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!bv(e)) {
      const { message: r } = ue("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = ue("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class B0 extends Ws {
  constructor(e, r) {
    super(e, r, A0, Na), this.core = e, this.logger = r;
  }
}
class V0 extends Ws {
  constructor(e, r) {
    super(e, r, P0, Na), this.core = e, this.logger = r;
  }
}
class K0 extends Ws {
  constructor(e, r) {
    super(e, r, F0, Na, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Pa extends $d {
  constructor(e) {
    super(e), this.protocol = ph, this.version = gh, this.name = _o.name, this.events = new xr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || _o.name, this.metadata = (e == null ? void 0 : e.metadata) || My();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Xe.pino(Xe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || _o.logger }));
    this.core = (e == null ? void 0 : e.core) || new T0(e), this.logger = Xe.generateChildLogger(r, this.name), this.session = new V0(this.core, this.logger), this.proposal = new B0(this.core, this.logger), this.pendingRequest = new K0(this.core, this.logger), this.engine = new z0(this);
  }
  static async init(e) {
    const r = new Pa(e);
    return await r.initialize(), r;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
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
var W0 = Object.defineProperty, H0 = Object.defineProperties, G0 = Object.getOwnPropertyDescriptors, xu = Object.getOwnPropertySymbols, Q0 = Object.prototype.hasOwnProperty, Z0 = Object.prototype.propertyIsEnumerable, Ou = (t, e, r) => e in t ? W0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Y0 = (t, e) => {
  for (var r in e || (e = {}))
    Q0.call(e, r) && Ou(t, r, e[r]);
  if (xu)
    for (var r of xu(e))
      Z0.call(e, r) && Ou(t, r, e[r]);
  return t;
}, J0 = (t, e) => H0(t, G0(e)), La = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, wt = (t, e, r) => (La(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ds = (t, e, r, n) => (La(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Zt = (t, e, r) => (La(t, e, "access private method"), r), On, qn, bi, $t, Ho, vh, Yt, nr, Go, Iu;
let X0 = class {
  constructor(e) {
    xn(this, Ho), xn(this, Yt), xn(this, Go), xn(this, On, void 0), xn(this, qn, void 0), xn(this, bi, void 0), xn(this, $t, void 0), Ds(this, On, e), Ds(this, qn, Zt(this, Ho, vh).call(this)), Zt(this, Yt, nr).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Zt(this, Yt, nr).call(this);
      const a = wt(this, qn).subscribeModal((l) => {
        l.open || (a(), s(new Error("Modal closed")));
      }), { uri: o, approval: u } = await wt(this, $t).connect(e);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => l.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => l.add(d));
        }), await wt(this, qn).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await u();
        i(l);
      } catch (l) {
        s(l);
      } finally {
        a(), wt(this, qn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Zt(this, Yt, nr).call(this), await wt(this, $t).disconnect(e);
  }
  async request(e) {
    return await Zt(this, Yt, nr).call(this), await wt(this, $t).request(e);
  }
  async getSessions() {
    return await Zt(this, Yt, nr).call(this), wt(this, $t).session.getAll();
  }
  async getSession() {
    return await Zt(this, Yt, nr).call(this), wt(this, $t).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Zt(this, Yt, nr).call(this), wt(this, $t).off("session_expire", e);
  }
};
On = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakSet(), vh = function() {
  const { modalOptions: t, projectId: e } = wt(this, On);
  return new jf(J0(Y0({}, t), { projectId: e }));
}, Yt = /* @__PURE__ */ new WeakSet(), nr = async function() {
  return wt(this, $t) ? !0 : (!wt(this, bi) && typeof window < "u" && Ds(this, bi, Zt(this, Go, Iu).call(this)), wt(this, bi));
}, Go = /* @__PURE__ */ new WeakSet(), Iu = async function() {
  Ds(this, $t, await Pa.init({ metadata: wt(this, On).metadata, projectId: wt(this, On).projectId, relayUrl: wt(this, On).relayUrl }));
  const t = await wt(this, $t).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Fa = [
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
], Hs = ["aleo:1"], Ma = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], e_ = "f0aaeffe71b636da453fce042d79d723", t_ = {
  standaloneChains: Hs,
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
}, M1 = {
  requiredNamespaces: {
    aleo: {
      methods: Fa,
      chains: Hs,
      events: Ma
    }
  }
};
var mh = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(u, l, f) {
    this.fn = u, this.context = l, this.once = f || !1;
  }
  function s(u, l, f, d, y) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var m = new i(f, d || u, y), E = r ? r + l : l;
    return u._events[E] ? u._events[E].fn ? u._events[E] = [u._events[E], m] : u._events[E].push(m) : (u._events[E] = m, u._eventsCount++), u;
  }
  function a(u, l) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[l];
  }
  function o() {
    this._events = new n(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var l = [], f, d;
    if (this._eventsCount === 0)
      return l;
    for (d in f = this._events)
      e.call(f, d) && l.push(r ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(f)) : l;
  }, o.prototype.listeners = function(l) {
    var f = r ? r + l : l, d = this._events[f];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var y = 0, m = d.length, E = new Array(m); y < m; y++)
      E[y] = d[y].fn;
    return E;
  }, o.prototype.listenerCount = function(l) {
    var f = r ? r + l : l, d = this._events[f];
    return d ? d.fn ? 1 : d.length : 0;
  }, o.prototype.emit = function(l, f, d, y, m, E) {
    var O = r ? r + l : l;
    if (!this._events[O])
      return !1;
    var S = this._events[O], P = arguments.length, _, x;
    if (S.fn) {
      switch (S.once && this.removeListener(l, S.fn, void 0, !0), P) {
        case 1:
          return S.fn.call(S.context), !0;
        case 2:
          return S.fn.call(S.context, f), !0;
        case 3:
          return S.fn.call(S.context, f, d), !0;
        case 4:
          return S.fn.call(S.context, f, d, y), !0;
        case 5:
          return S.fn.call(S.context, f, d, y, m), !0;
        case 6:
          return S.fn.call(S.context, f, d, y, m, E), !0;
      }
      for (x = 1, _ = new Array(P - 1); x < P; x++)
        _[x - 1] = arguments[x];
      S.fn.apply(S.context, _);
    } else {
      var w = S.length, b;
      for (x = 0; x < w; x++)
        switch (S[x].once && this.removeListener(l, S[x].fn, void 0, !0), P) {
          case 1:
            S[x].fn.call(S[x].context);
            break;
          case 2:
            S[x].fn.call(S[x].context, f);
            break;
          case 3:
            S[x].fn.call(S[x].context, f, d);
            break;
          case 4:
            S[x].fn.call(S[x].context, f, d, y);
            break;
          default:
            if (!_)
              for (b = 1, _ = new Array(P - 1); b < P; b++)
                _[b - 1] = arguments[b];
            S[x].fn.apply(S[x].context, _);
        }
    }
    return !0;
  }, o.prototype.on = function(l, f, d) {
    return s(this, l, f, d, !1);
  }, o.prototype.once = function(l, f, d) {
    return s(this, l, f, d, !0);
  }, o.prototype.removeListener = function(l, f, d, y) {
    var m = r ? r + l : l;
    if (!this._events[m])
      return this;
    if (!f)
      return a(this, m), this;
    var E = this._events[m];
    if (E.fn)
      E.fn === f && (!y || E.once) && (!d || E.context === d) && a(this, m);
    else {
      for (var O = 0, S = [], P = E.length; O < P; O++)
        (E[O].fn !== f || y && !E[O].once || d && E[O].context !== d) && S.push(E[O]);
      S.length ? this._events[m] = S.length === 1 ? S[0] : S : a(this, m);
    }
    return this;
  }, o.prototype.removeAllListeners = function(l) {
    var f;
    return l ? (f = r ? r + l : l, this._events[f] && a(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o;
})(mh);
var r_ = mh.exports;
const n_ = /* @__PURE__ */ qi(r_), Gn = new n_();
let _i;
function i_(t) {
  _i = new X0({
    projectId: e_,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...t_ }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Et() {
  return new Promise((t) => {
    if (_i)
      t(_i);
    else {
      const e = setInterval(() => {
        _i && (clearInterval(e), t(_i));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var tt;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function r(i) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (i) => {
    const s = {};
    for (const a of i)
      s[a] = a;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of s)
      a[o] = i[o];
    return t.objectValues(a);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
    return s;
  }, t.find = (i, s) => {
    for (const a of i)
      if (s(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(tt || (tt = {}));
var Qo;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Qo || (Qo = {}));
const fe = tt.arrayToEnum([
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
]), cn = (t) => {
  switch (typeof t) {
    case "undefined":
      return fe.undefined;
    case "string":
      return fe.string;
    case "number":
      return isNaN(t) ? fe.nan : fe.number;
    case "boolean":
      return fe.boolean;
    case "function":
      return fe.function;
    case "bigint":
      return fe.bigint;
    case "symbol":
      return fe.symbol;
    case "object":
      return Array.isArray(t) ? fe.array : t === null ? fe.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? fe.promise : typeof Map < "u" && t instanceof Map ? fe.map : typeof Set < "u" && t instanceof Set ? fe.set : typeof Date < "u" && t instanceof Date ? fe.date : fe.object;
    default:
      return fe.unknown;
  }
}, ae = tt.arrayToEnum([
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
]), s_ = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ar extends Error {
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
    const r = e || function(s) {
      return s.message;
    }, n = { _errors: [] }, i = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let o = n, u = 0;
          for (; u < a.path.length; ) {
            const l = a.path[u];
            u === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], u++;
          }
        }
    };
    return i(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, tt.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const i of this.issues)
      i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : n.push(e(i));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ar.create = (t) => new Ar(t);
const Ci = (t, e) => {
  let r;
  switch (t.code) {
    case ae.invalid_type:
      t.received === fe.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case ae.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, tt.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${tt.joinValues(t.keys, ", ")}`;
      break;
    case ae.invalid_union:
      r = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${tt.joinValues(t.options)}`;
      break;
    case ae.invalid_enum_value:
      r = `Invalid enum value. Expected ${tt.joinValues(t.options)}, received '${t.received}'`;
      break;
    case ae.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case ae.invalid_return_type:
      r = "Invalid function return type";
      break;
    case ae.invalid_date:
      r = "Invalid date";
      break;
    case ae.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : tt.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case ae.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case ae.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case ae.custom:
      r = "Invalid input";
      break;
    case ae.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case ae.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case ae.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, tt.assertNever(t);
  }
  return { message: r };
};
let bh = Ci;
function o_(t) {
  bh = t;
}
function xs() {
  return bh;
}
const Os = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, s = [...r, ...i.path || []], a = {
    ...i,
    path: s
  };
  let o = "";
  const u = n.filter((l) => !!l).slice().reverse();
  for (const l of u)
    o = l(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: i.message || o
  };
}, a_ = [];
function de(t, e) {
  const r = Os({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      xs(),
      Ci
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class er {
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
    for (const i of r) {
      if (i.status === "aborted")
        return Ce;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const i of r)
      n.push({
        key: await i.key,
        value: await i.value
      });
    return er.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return Ce;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const Ce = Object.freeze({
  status: "aborted"
}), _h = (t) => ({ status: "dirty", value: t }), cr = (t) => ({ status: "valid", value: t }), Zo = (t) => t.status === "aborted", Yo = (t) => t.status === "dirty", Is = (t) => t.status === "valid", Cs = (t) => typeof Promise < "u" && t instanceof Promise;
var me;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(me || (me = {}));
class Kr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Cu = (t, e) => {
  if (Is(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Ar(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function je(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class Ke {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return cn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: cn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new er(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: cn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Cs(r))
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
    const i = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: cn(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return Cu(i, s);
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
      parsedType: cn(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Cs(i) ? i : Promise.resolve(i));
    return Cu(n, s);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: ae.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((u) => u ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new Pr({
      schema: this,
      typeName: De.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return en.create(this, this._def);
  }
  nullable() {
    return Nn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Nr.create(this, this._def);
  }
  promise() {
    return Zn.create(this, this._def);
  }
  or(e) {
    return Ni.create([this, e], this._def);
  }
  and(e) {
    return Pi.create(this, e, this._def);
  }
  transform(e) {
    return new Pr({
      ...je(this._def),
      schema: this,
      typeName: De.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ji({
      ...je(this._def),
      innerType: this,
      defaultValue: r,
      typeName: De.ZodDefault
    });
  }
  brand() {
    return new Eh({
      typeName: De.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ns({
      ...je(this._def),
      innerType: this,
      catchValue: r,
      typeName: De.ZodCatch
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
    return Qi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const c_ = /^c[^\s-]{8,}$/i, u_ = /^[a-z][a-z0-9]*$/, l_ = /[0-9A-HJKMNP-TV-Z]{26}/, h_ = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, f_ = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, d_ = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, p_ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, g_ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, y_ = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function v_(t, e) {
  return !!((e === "v4" || !e) && p_.test(t) || (e === "v6" || !e) && g_.test(t));
}
class Tr extends Ke {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: ae.invalid_string,
      ...me.errToObj(n)
    }), this.nonempty = (e) => this.min(1, me.errToObj(e)), this.trim = () => new Tr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Tr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Tr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== fe.string) {
      const s = this._getOrReturnCtx(e);
      return de(
        s,
        {
          code: ae.invalid_type,
          expected: fe.string,
          received: s.parsedType
        }
        //
      ), Ce;
    }
    const n = new er();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? de(i, {
          code: ae.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && de(i, {
          code: ae.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        f_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "email",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        d_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "emoji",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        h_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "uuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        c_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        u_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        l_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "ulid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), de(i, {
            validation: "url",
            code: ae.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "regex",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? y_(s).test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? v_(e.data, s.version) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "ip",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty()) : tt.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Tr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...me.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...me.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...me.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...me.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...me.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...me.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...me.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...me.errToObj(e) });
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
      ...me.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...me.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...me.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...me.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...me.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...me.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...me.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...me.errToObj(r)
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
Tr.create = (t) => {
  var e;
  return new Tr({
    checks: [],
    typeName: De.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...je(t)
  });
};
function m_(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, s = parseInt(t.toFixed(i).replace(".", "")), a = parseInt(e.toFixed(i).replace(".", ""));
  return s % a / Math.pow(10, i);
}
class ln extends Ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== fe.number) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: fe.number,
        received: s.parsedType
      }), Ce;
    }
    let n;
    const i = new er();
    for (const s of this._def.checks)
      s.kind === "int" ? tt.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? m_(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.not_finite,
        message: s.message
      }), i.dirty()) : tt.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, me.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, me.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, me.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, me.toString(r));
  }
  setLimit(e, r, n, i) {
    return new ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: me.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ln({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: me.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: me.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: me.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: me.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: me.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: me.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: me.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: me.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: me.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && tt.isInteger(e.value));
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
ln.create = (t) => new ln({
  checks: [],
  typeName: De.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...je(t)
});
class hn extends Ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== fe.bigint) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: fe.bigint,
        received: s.parsedType
      }), Ce;
    }
    let n;
    const i = new er();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : tt.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, me.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, me.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, me.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, me.toString(r));
  }
  setLimit(e, r, n, i) {
    return new hn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: me.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new hn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: me.toString(r)
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
hn.create = (t) => {
  var e;
  return new hn({
    checks: [],
    typeName: De.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...je(t)
  });
};
class Ri extends Ke {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== fe.boolean) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.boolean,
        received: n.parsedType
      }), Ce;
    }
    return cr(e.data);
  }
}
Ri.create = (t) => new Ri({
  typeName: De.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...je(t)
});
class Tn extends Ke {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== fe.date) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: fe.date,
        received: s.parsedType
      }), Ce;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_date
      }), Ce;
    }
    const n = new er();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), de(i, {
        code: ae.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), de(i, {
        code: ae.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : tt.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Tn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: me.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: me.toString(r)
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
Tn.create = (t) => new Tn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: De.ZodDate,
  ...je(t)
});
class Rs extends Ke {
  _parse(e) {
    if (this._getType(e) !== fe.symbol) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.symbol,
        received: n.parsedType
      }), Ce;
    }
    return cr(e.data);
  }
}
Rs.create = (t) => new Rs({
  typeName: De.ZodSymbol,
  ...je(t)
});
class Ti extends Ke {
  _parse(e) {
    if (this._getType(e) !== fe.undefined) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.undefined,
        received: n.parsedType
      }), Ce;
    }
    return cr(e.data);
  }
}
Ti.create = (t) => new Ti({
  typeName: De.ZodUndefined,
  ...je(t)
});
class Ai extends Ke {
  _parse(e) {
    if (this._getType(e) !== fe.null) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.null,
        received: n.parsedType
      }), Ce;
    }
    return cr(e.data);
  }
}
Ai.create = (t) => new Ai({
  typeName: De.ZodNull,
  ...je(t)
});
class Qn extends Ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return cr(e.data);
  }
}
Qn.create = (t) => new Qn({
  typeName: De.ZodAny,
  ...je(t)
});
class Rn extends Ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return cr(e.data);
  }
}
Rn.create = (t) => new Rn({
  typeName: De.ZodUnknown,
  ...je(t)
});
class tn extends Ke {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return de(r, {
      code: ae.invalid_type,
      expected: fe.never,
      received: r.parsedType
    }), Ce;
  }
}
tn.create = (t) => new tn({
  typeName: De.ZodNever,
  ...je(t)
});
class Ts extends Ke {
  _parse(e) {
    if (this._getType(e) !== fe.undefined) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.void,
        received: n.parsedType
      }), Ce;
    }
    return cr(e.data);
  }
}
Ts.create = (t) => new Ts({
  typeName: De.ZodVoid,
  ...je(t)
});
class Nr extends Ke {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== fe.array)
      return de(r, {
        code: ae.invalid_type,
        expected: fe.array,
        received: r.parsedType
      }), Ce;
    if (i.exactLength !== null) {
      const a = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (a || o) && (de(r, {
        code: a ? ae.too_big : ae.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (de(r, {
      code: ae.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (de(r, {
      code: ae.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => i.type._parseAsync(new Kr(r, a, r.path, o)))).then((a) => er.mergeArray(n, a));
    const s = [...r.data].map((a, o) => i.type._parseSync(new Kr(r, a, r.path, o)));
    return er.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Nr({
      ...this._def,
      minLength: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new Nr({
      ...this._def,
      maxLength: { value: e, message: me.toString(r) }
    });
  }
  length(e, r) {
    return new Nr({
      ...this._def,
      exactLength: { value: e, message: me.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Nr.create = (t, e) => new Nr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: De.ZodArray,
  ...je(e)
});
function zn(t) {
  if (t instanceof Ot) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = en.create(zn(n));
    }
    return new Ot({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Nr ? new Nr({
      ...t._def,
      type: zn(t.element)
    }) : t instanceof en ? en.create(zn(t.unwrap())) : t instanceof Nn ? Nn.create(zn(t.unwrap())) : t instanceof Wr ? Wr.create(t.items.map((e) => zn(e))) : t;
}
class Ot extends Ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = tt.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== fe.object) {
      const l = this._getOrReturnCtx(e);
      return de(l, {
        code: ae.invalid_type,
        expected: fe.object,
        received: l.parsedType
      }), Ce;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof tn && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        a.includes(l) || o.push(l);
    const u = [];
    for (const l of a) {
      const f = s[l], d = i.data[l];
      u.push({
        key: { status: "valid", value: l },
        value: f._parse(new Kr(i, d, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof tn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: i.data[f] }
          });
      else if (l === "strict")
        o.length > 0 && (de(i, {
          code: ae.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const f of o) {
        const d = i.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: l._parse(
            new Kr(i, d, i.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const f of u) {
        const d = await f.key;
        l.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return l;
    }).then((l) => er.mergeObjectSync(n, l)) : er.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return me.errToObj, new Ot({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, s, a, o;
          const u = (a = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = me.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ot({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ot({
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
    return new Ot({
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
    return new Ot({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: De.ZodObject
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
    return new Ot({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return tt.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Ot({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return tt.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new Ot({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return zn(this);
  }
  partial(e) {
    const r = {};
    return tt.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new Ot({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return tt.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof en; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new Ot({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return wh(tt.objectKeys(this.shape));
  }
}
Ot.create = (t, e) => new Ot({
  shape: () => t,
  unknownKeys: "strip",
  catchall: tn.create(),
  typeName: De.ZodObject,
  ...je(e)
});
Ot.strictCreate = (t, e) => new Ot({
  shape: () => t,
  unknownKeys: "strict",
  catchall: tn.create(),
  typeName: De.ZodObject,
  ...je(e)
});
Ot.lazycreate = (t, e) => new Ot({
  shape: t,
  unknownKeys: "strip",
  catchall: tn.create(),
  typeName: De.ZodObject,
  ...je(e)
});
class Ni extends Ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Ar(o.ctx.common.issues));
      return de(r, {
        code: ae.invalid_union,
        unionErrors: a
      }), Ce;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let s;
      const a = [];
      for (const u of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !s && (s = { result: f, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((u) => new Ar(u));
      return de(r, {
        code: ae.invalid_union,
        unionErrors: o
      }), Ce;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ni.create = (t, e) => new Ni({
  options: t,
  typeName: De.ZodUnion,
  ...je(e)
});
const ys = (t) => t instanceof Fi ? ys(t.schema) : t instanceof Pr ? ys(t.innerType()) : t instanceof Mi ? [t.value] : t instanceof fn ? t.options : t instanceof Ui ? Object.keys(t.enum) : t instanceof ji ? ys(t._def.innerType) : t instanceof Ti ? [void 0] : t instanceof Ai ? [null] : null;
class Gs extends Ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.object)
      return de(r, {
        code: ae.invalid_type,
        expected: fe.object,
        received: r.parsedType
      }), Ce;
    const n = this.discriminator, i = r.data[n], s = this.optionsMap.get(i);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (de(r, {
      code: ae.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), Ce);
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
    const i = /* @__PURE__ */ new Map();
    for (const s of r) {
      const a = ys(s.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new Gs({
      typeName: De.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...je(n)
    });
  }
}
function Jo(t, e) {
  const r = cn(t), n = cn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === fe.object && n === fe.object) {
    const i = tt.objectKeys(e), s = tt.objectKeys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of s) {
      const u = Jo(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      a[o] = u.data;
    }
    return { valid: !0, data: a };
  } else if (r === fe.array && n === fe.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t[s], o = e[s], u = Jo(a, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === fe.date && n === fe.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Pi extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Zo(s) || Zo(a))
        return Ce;
      const o = Jo(s.value, a.value);
      return o.valid ? ((Yo(s) || Yo(a)) && r.dirty(), { status: r.value, value: o.data }) : (de(n, {
        code: ae.invalid_intersection_types
      }), Ce);
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
    ]).then(([s, a]) => i(s, a)) : i(this._def.left._parseSync({
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
Pi.create = (t, e, r) => new Pi({
  left: t,
  right: e,
  typeName: De.ZodIntersection,
  ...je(r)
});
class Wr extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.array)
      return de(n, {
        code: ae.invalid_type,
        expected: fe.array,
        received: n.parsedType
      }), Ce;
    if (n.data.length < this._def.items.length)
      return de(n, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Ce;
    !this._def.rest && n.data.length > this._def.items.length && (de(n, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((a, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Kr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => er.mergeArray(r, a)) : er.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Wr({
      ...this._def,
      rest: e
    });
  }
}
Wr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Wr({
    items: t,
    typeName: De.ZodTuple,
    rest: null,
    ...je(e)
  });
};
class Li extends Ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.object)
      return de(n, {
        code: ae.invalid_type,
        expected: fe.object,
        received: n.parsedType
      }), Ce;
    const i = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: s._parse(new Kr(n, o, n.path, o)),
        value: a._parse(new Kr(n, n.data[o], n.path, o))
      });
    return n.common.async ? er.mergeObjectAsync(r, i) : er.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ke ? new Li({
      keyType: e,
      valueType: r,
      typeName: De.ZodRecord,
      ...je(n)
    }) : new Li({
      keyType: Tr.create(),
      valueType: e,
      typeName: De.ZodRecord,
      ...je(r)
    });
  }
}
class As extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.map)
      return de(n, {
        code: ae.invalid_type,
        expected: fe.map,
        received: n.parsedType
      }), Ce;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, u], l) => ({
      key: i._parse(new Kr(n, o, n.path, [l, "key"])),
      value: s._parse(new Kr(n, u, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of a) {
          const l = await u.key, f = await u.value;
          if (l.status === "aborted" || f.status === "aborted")
            return Ce;
          (l.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(l.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of a) {
        const l = u.key, f = u.value;
        if (l.status === "aborted" || f.status === "aborted")
          return Ce;
        (l.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(l.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
As.create = (t, e, r) => new As({
  valueType: e,
  keyType: t,
  typeName: De.ZodMap,
  ...je(r)
});
class An extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.set)
      return de(n, {
        code: ae.invalid_type,
        expected: fe.set,
        received: n.parsedType
      }), Ce;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (de(n, {
      code: ae.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (de(n, {
      code: ae.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function a(u) {
      const l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return Ce;
        f.status === "dirty" && r.dirty(), l.add(f.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((u, l) => s._parse(new Kr(n, u, n.path, l)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new An({
      ...this._def,
      minSize: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new An({
      ...this._def,
      maxSize: { value: e, message: me.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
An.create = (t, e) => new An({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: De.ZodSet,
  ...je(e)
});
class Wn extends Ke {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.function)
      return de(r, {
        code: ae.invalid_type,
        expected: fe.function,
        received: r.parsedType
      }), Ce;
    function n(o, u) {
      return Os({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xs(),
          Ci
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return Os({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xs(),
          Ci
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Zn ? cr(async (...o) => {
      const u = new Ar([]), l = await this._def.args.parseAsync(o, s).catch((y) => {
        throw u.addIssue(n(o, y)), u;
      }), f = await a(...l);
      return await this._def.returns._def.type.parseAsync(f, s).catch((y) => {
        throw u.addIssue(i(f, y)), u;
      });
    }) : cr((...o) => {
      const u = this._def.args.safeParse(o, s);
      if (!u.success)
        throw new Ar([n(o, u.error)]);
      const l = a(...u.data), f = this._def.returns.safeParse(l, s);
      if (!f.success)
        throw new Ar([i(l, f.error)]);
      return f.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Wn({
      ...this._def,
      args: Wr.create(e).rest(Rn.create())
    });
  }
  returns(e) {
    return new Wn({
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
    return new Wn({
      args: e || Wr.create([]).rest(Rn.create()),
      returns: r || Rn.create(),
      typeName: De.ZodFunction,
      ...je(n)
    });
  }
}
class Fi extends Ke {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Fi.create = (t, e) => new Fi({
  getter: t,
  typeName: De.ZodLazy,
  ...je(e)
});
class Mi extends Ke {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return de(r, {
        received: r.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Ce;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Mi.create = (t, e) => new Mi({
  value: t,
  typeName: De.ZodLiteral,
  ...je(e)
});
function wh(t, e) {
  return new fn({
    values: t,
    typeName: De.ZodEnum,
    ...je(e)
  });
}
class fn extends Ke {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return de(r, {
        expected: tt.joinValues(n),
        received: r.parsedType,
        code: ae.invalid_type
      }), Ce;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return de(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: n
      }), Ce;
    }
    return cr(e.data);
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
    return fn.create(e);
  }
  exclude(e) {
    return fn.create(this.options.filter((r) => !e.includes(r)));
  }
}
fn.create = wh;
class Ui extends Ke {
  _parse(e) {
    const r = tt.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== fe.string && n.parsedType !== fe.number) {
      const i = tt.objectValues(r);
      return de(n, {
        expected: tt.joinValues(i),
        received: n.parsedType,
        code: ae.invalid_type
      }), Ce;
    }
    if (r.indexOf(e.data) === -1) {
      const i = tt.objectValues(r);
      return de(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: i
      }), Ce;
    }
    return cr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ui.create = (t, e) => new Ui({
  values: t,
  typeName: De.ZodNativeEnum,
  ...je(e)
});
class Zn extends Ke {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.promise && r.common.async === !1)
      return de(r, {
        code: ae.invalid_type,
        expected: fe.promise,
        received: r.parsedType
      }), Ce;
    const n = r.parsedType === fe.promise ? r.data : Promise.resolve(r.data);
    return cr(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Zn.create = (t, e) => new Zn({
  type: t,
  typeName: De.ZodPromise,
  ...je(e)
});
class Pr extends Ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === De.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const a = i.transform(n.data);
      return n.common.async ? Promise.resolve(a).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: a,
        path: n.path,
        parent: n
      });
    }
    const s = {
      addIssue: (a) => {
        de(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "refinement") {
      const a = (o) => {
        const u = i.refinement(o, s);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? Ce : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? Ce : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Is(a))
          return a;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Is(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({ status: r.value, value: o })) : a);
    tt.assertNever(i);
  }
}
Pr.create = (t, e, r) => new Pr({
  schema: t,
  typeName: De.ZodEffects,
  effect: e,
  ...je(r)
});
Pr.createWithPreprocess = (t, e, r) => new Pr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: De.ZodEffects,
  ...je(r)
});
class en extends Ke {
  _parse(e) {
    return this._getType(e) === fe.undefined ? cr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
en.create = (t, e) => new en({
  innerType: t,
  typeName: De.ZodOptional,
  ...je(e)
});
class Nn extends Ke {
  _parse(e) {
    return this._getType(e) === fe.null ? cr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nn.create = (t, e) => new Nn({
  innerType: t,
  typeName: De.ZodNullable,
  ...je(e)
});
class ji extends Ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === fe.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ji.create = (t, e) => new ji({
  innerType: t,
  typeName: De.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...je(e)
});
class Ns extends Ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Cs(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ar(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Ar(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ns.create = (t, e) => new Ns({
  innerType: t,
  typeName: De.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...je(e)
});
class Ps extends Ke {
  _parse(e) {
    if (this._getType(e) !== fe.nan) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: fe.nan,
        received: n.parsedType
      }), Ce;
    }
    return { status: "valid", value: e.data };
  }
}
Ps.create = (t) => new Ps({
  typeName: De.ZodNaN,
  ...je(t)
});
const b_ = Symbol("zod_brand");
class Eh extends Ke {
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
class Qi extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? Ce : s.status === "dirty" ? (r.dirty(), _h(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return i.status === "aborted" ? Ce : i.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new Qi({
      in: e,
      out: r,
      typeName: De.ZodPipeline
    });
  }
}
const Sh = (t, e = {}, r) => t ? Qn.create().superRefine((n, i) => {
  var s, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...l, fatal: u });
  }
}) : Qn.create(), __ = {
  object: Ot.lazycreate
};
var De;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(De || (De = {}));
const w_ = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Sh((r) => r instanceof t, e), Dh = Tr.create, xh = ln.create, E_ = Ps.create, S_ = hn.create, Oh = Ri.create, D_ = Tn.create, x_ = Rs.create, O_ = Ti.create, I_ = Ai.create, C_ = Qn.create, R_ = Rn.create, T_ = tn.create, A_ = Ts.create, N_ = Nr.create, P_ = Ot.create, L_ = Ot.strictCreate, F_ = Ni.create, M_ = Gs.create, U_ = Pi.create, j_ = Wr.create, k_ = Li.create, $_ = As.create, q_ = An.create, z_ = Wn.create, B_ = Fi.create, V_ = Mi.create, K_ = fn.create, W_ = Ui.create, H_ = Zn.create, Ru = Pr.create, G_ = en.create, Q_ = Nn.create, Z_ = Pr.createWithPreprocess, Y_ = Qi.create, J_ = () => Dh().optional(), X_ = () => xh().optional(), ew = () => Oh().optional(), tw = {
  string: (t) => Tr.create({ ...t, coerce: !0 }),
  number: (t) => ln.create({ ...t, coerce: !0 }),
  boolean: (t) => Ri.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => hn.create({ ...t, coerce: !0 }),
  date: (t) => Tn.create({ ...t, coerce: !0 })
}, rw = Ce;
var Lr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ci,
  setErrorMap: o_,
  getErrorMap: xs,
  makeIssue: Os,
  EMPTY_PATH: a_,
  addIssueToContext: de,
  ParseStatus: er,
  INVALID: Ce,
  DIRTY: _h,
  OK: cr,
  isAborted: Zo,
  isDirty: Yo,
  isValid: Is,
  isAsync: Cs,
  get util() {
    return tt;
  },
  get objectUtil() {
    return Qo;
  },
  ZodParsedType: fe,
  getParsedType: cn,
  ZodType: Ke,
  ZodString: Tr,
  ZodNumber: ln,
  ZodBigInt: hn,
  ZodBoolean: Ri,
  ZodDate: Tn,
  ZodSymbol: Rs,
  ZodUndefined: Ti,
  ZodNull: Ai,
  ZodAny: Qn,
  ZodUnknown: Rn,
  ZodNever: tn,
  ZodVoid: Ts,
  ZodArray: Nr,
  ZodObject: Ot,
  ZodUnion: Ni,
  ZodDiscriminatedUnion: Gs,
  ZodIntersection: Pi,
  ZodTuple: Wr,
  ZodRecord: Li,
  ZodMap: As,
  ZodSet: An,
  ZodFunction: Wn,
  ZodLazy: Fi,
  ZodLiteral: Mi,
  ZodEnum: fn,
  ZodNativeEnum: Ui,
  ZodPromise: Zn,
  ZodEffects: Pr,
  ZodTransformer: Pr,
  ZodOptional: en,
  ZodNullable: Nn,
  ZodDefault: ji,
  ZodCatch: Ns,
  ZodNaN: Ps,
  BRAND: b_,
  ZodBranded: Eh,
  ZodPipeline: Qi,
  custom: Sh,
  Schema: Ke,
  ZodSchema: Ke,
  late: __,
  get ZodFirstPartyTypeKind() {
    return De;
  },
  coerce: tw,
  any: C_,
  array: N_,
  bigint: S_,
  boolean: Oh,
  date: D_,
  discriminatedUnion: M_,
  effect: Ru,
  enum: K_,
  function: z_,
  instanceof: w_,
  intersection: U_,
  lazy: B_,
  literal: V_,
  map: $_,
  nan: E_,
  nativeEnum: W_,
  never: T_,
  null: I_,
  nullable: Q_,
  number: xh,
  object: P_,
  oboolean: ew,
  onumber: X_,
  optional: G_,
  ostring: J_,
  pipeline: Y_,
  preprocess: Z_,
  promise: H_,
  record: k_,
  set: q_,
  strictObject: L_,
  string: Dh,
  symbol: x_,
  transformer: Ru,
  tuple: j_,
  undefined: O_,
  union: F_,
  unknown: R_,
  void: A_,
  NEVER: rw,
  ZodIssueCode: ae,
  quotelessJson: s_,
  ZodError: Ar
});
const nw = /^aleo1.{58}$/i, iw = /^AViewKey1.{44}$/i, sw = /^APrivateKey1.{47}$/i, ow = /^at1.{60}$/i, aw = /^\d+field$/, cw = /^\d+u32$/, uw = /^\d+u64$/, U1 = Lr.string().regex(nw), j1 = Lr.string().regex(iw), k1 = Lr.string().regex(sw), $1 = Lr.string().regex(ow), q1 = Lr.string().regex(aw), z1 = Lr.string().regex(cw), B1 = Lr.string().regex(uw);
var Xo;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Xo || (Xo = {}));
var ea;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(ea || (ea = {}));
var ta;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(ta || (ta = {}));
var ra;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(ra || (ra = {}));
var Tu;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Tu || (Tu = {}));
const V1 = Lr.nativeEnum(Xo), K1 = Lr.nativeEnum(ea), W1 = Lr.nativeEnum(ra), H1 = Lr.nativeEnum(ta);
class G1 extends vr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Q1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class Z1 extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class Y1 {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class J1 extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class X1 extends vr {
  constructor(e) {
    super();
  }
}
class eE {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class tE {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class rE extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class nE {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class iE extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class sE {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class oE {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class aE extends fa {
  constructor() {
    super();
  }
}
class cE {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class uE extends xr.EventEmitter {
  constructor() {
    super();
  }
}
class lE {
  constructor(e) {
    this.client = e;
  }
}
function Ih(t) {
  Dr(() => (Et().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Et().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function lw(t) {
  Dr(() => (Et().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Et().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Ch(t) {
  Dr(() => (Et().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Et().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Fr() {
  const [t, e] = hs(void 0);
  return Ih((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Ch((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), lw((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Dr(() => {
    async function r() {
      const i = await (await Et()).getSession();
      e(i);
    }
    return r(), Gn.on("session_change", r), () => {
      Gn.off("session_change", r);
    };
  }, []), t;
}
function Zi(t) {
  Dr(() => (Et().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Et().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const Au = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, l) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = l ?? typeof f != "object" ? f : Object.assign({}, e, f), r.forEach((y) => y(e, d));
    }
  }, i = () => e, o = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, o), o;
}, hw = (t) => t ? Au(t) : Au;
var na = { exports: {} }, Eo = {}, ls = { exports: {} }, So = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function fw() {
  if (Nu)
    return So;
  Nu = 1;
  var t = Yn;
  function e(d, y) {
    return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, y) {
    var m = y(), E = n({ inst: { value: m, getSnapshot: y } }), O = E[0].inst, S = E[1];
    return s(function() {
      O.value = m, O.getSnapshot = y, u(O) && S({ inst: O });
    }, [d, m, y]), i(function() {
      return u(O) && S({ inst: O }), d(function() {
        u(O) && S({ inst: O });
      });
    }, [d]), a(m), m;
  }
  function u(d) {
    var y = d.getSnapshot;
    d = d.value;
    try {
      var m = y();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function l(d, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : o;
  return So.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, So;
}
var Do = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function dw() {
  return Pu || (Pu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Yn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var w = arguments.length, b = new Array(w > 1 ? w - 1 : 0), p = 1; p < w; p++)
          b[p - 1] = arguments[p];
        n("error", x, b);
      }
    }
    function n(x, w, b) {
      {
        var p = e.ReactDebugCurrentFrame, c = p.getStackAddendum();
        c !== "" && (w += "%s", b = b.concat([c]));
        var g = b.map(function(A) {
          return String(A);
        });
        g.unshift("Warning: " + w), Function.prototype.apply.call(console[x], console, g);
      }
    }
    function i(x, w) {
      return x === w && (x !== 0 || 1 / x === 1 / w) || x !== x && w !== w;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, l = t.useDebugValue, f = !1, d = !1;
    function y(x, w, b) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = w();
      if (!d) {
        var c = w();
        s(p, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = a({
        inst: {
          value: p,
          getSnapshot: w
        }
      }), A = g[0].inst, M = g[1];
      return u(function() {
        A.value = p, A.getSnapshot = w, m(A) && M({
          inst: A
        });
      }, [x, p, w]), o(function() {
        m(A) && M({
          inst: A
        });
        var B = function() {
          m(A) && M({
            inst: A
          });
        };
        return x(B);
      }, [x]), l(p), p;
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
    function E(x, w, b) {
      return w();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", S = !O, P = S ? E : y, _ = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : P;
    Do.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Do;
}
var Lu;
function Ua() {
  return Lu || (Lu = 1, process.env.NODE_ENV === "production" ? ls.exports = fw() : ls.exports = dw()), ls.exports;
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
var Fu;
function pw() {
  if (Fu)
    return Eo;
  Fu = 1;
  var t = Yn, e = Ua();
  function r(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return Eo.useSyncExternalStoreWithSelector = function(l, f, d, y, m) {
    var E = s(null);
    if (E.current === null) {
      var O = { hasValue: !1, value: null };
      E.current = O;
    } else
      O = E.current;
    E = o(function() {
      function P(p) {
        if (!_) {
          if (_ = !0, x = p, p = y(p), m !== void 0 && O.hasValue) {
            var c = O.value;
            if (m(c, p))
              return w = c;
          }
          return w = p;
        }
        if (c = w, n(x, p))
          return c;
        var g = y(p);
        return m !== void 0 && m(c, g) ? c : (x = p, w = g);
      }
      var _ = !1, x, w, b = d === void 0 ? null : d;
      return [function() {
        return P(f());
      }, b === null ? void 0 : function() {
        return P(b());
      }];
    }, [f, d, y, m]);
    var S = i(l, E[0], E[1]);
    return a(function() {
      O.hasValue = !0, O.value = S;
    }, [S]), u(S), S;
  }, Eo;
}
var xo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mu;
function gw() {
  return Mu || (Mu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Yn, e = Ua();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function l(f, d, y, m, E) {
      var O = s(null), S;
      O.current === null ? (S = {
        hasValue: !1,
        value: null
      }, O.current = S) : S = O.current;
      var P = o(function() {
        var b = !1, p, c, g = function(G) {
          if (!b) {
            b = !0, p = G;
            var ee = m(G);
            if (E !== void 0 && S.hasValue) {
              var N = S.value;
              if (E(N, ee))
                return c = N, N;
            }
            return c = ee, ee;
          }
          var $ = p, se = c;
          if (n($, G))
            return se;
          var Z = m(G);
          return E !== void 0 && E(se, Z) ? se : (p = G, c = Z, Z);
        }, A = y === void 0 ? null : y, M = function() {
          return g(d());
        }, B = A === null ? void 0 : function() {
          return g(A());
        };
        return [M, B];
      }, [d, y, m, E]), _ = P[0], x = P[1], w = i(f, _, x);
      return a(function() {
        S.hasValue = !0, S.value = w;
      }, [w]), u(w), w;
    }
    xo.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xo;
}
process.env.NODE_ENV === "production" ? na.exports = pw() : na.exports = gw();
var yw = na.exports;
const vw = /* @__PURE__ */ qi(yw), { useSyncExternalStoreWithSelector: mw } = vw;
function bw(t, e = t.getState, r) {
  const n = mw(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return Gh(n), n;
}
const Uu = (t) => {
  const e = typeof t == "function" ? hw(t) : t, r = (n, i) => bw(e, n, i);
  return Object.assign(r, e), r;
}, _w = (t) => t ? Uu(t) : Uu;
function ww(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const a = (u) => u === null ? null : JSON.parse(u, e == null ? void 0 : e.reviver), o = (s = r.getItem(i)) != null ? s : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const ki = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return ki(n)(r);
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
        return ki(n)(r);
      }
    };
  }
}, Ew = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (S) => S,
    version: 0,
    merge: (S, P) => ({
      ...P,
      ...S
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let l;
  try {
    l = s.getStorage();
  } catch {
  }
  if (!l)
    return t(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...S);
      },
      n,
      i
    );
  const f = ki(s.serialize), d = () => {
    const S = s.partialize({ ...n() });
    let P;
    const _ = f({ state: S, version: s.version }).then(
      (x) => l.setItem(s.name, x)
    ).catch((x) => {
      P = x;
    });
    if (P)
      throw P;
    return _;
  }, y = i.setState;
  i.setState = (S, P) => {
    y(S, P), d();
  };
  const m = t(
    (...S) => {
      r(...S), d();
    },
    n,
    i
  );
  let E;
  const O = () => {
    var S;
    if (!l)
      return;
    a = !1, o.forEach((_) => _(n()));
    const P = ((S = s.onRehydrateStorage) == null ? void 0 : S.call(s, n())) || void 0;
    return ki(l.getItem.bind(l))(s.name).then((_) => {
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
      return E = s.merge(
        _,
        (x = n()) != null ? x : m
      ), r(E, !0), d();
    }).then(() => {
      P == null || P(E, void 0), a = !0, u.forEach((_) => _(E));
    }).catch((_) => {
      P == null || P(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (S) => {
      s = {
        ...s,
        ...S
      }, S.getStorage && (l = S.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => O(),
    hasHydrated: () => a,
    onHydrate: (S) => (o.add(S), () => {
      o.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, O(), E || m;
}, Sw = (t, e) => (r, n, i) => {
  let s = {
    storage: ww(() => localStorage),
    partialize: (O) => O,
    version: 0,
    merge: (O, S) => ({
      ...S,
      ...O
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let l = s.storage;
  if (!l)
    return t(
      (...O) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...O);
      },
      n,
      i
    );
  const f = () => {
    const O = s.partialize({ ...n() });
    return l.setItem(s.name, {
      state: O,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (O, S) => {
    d(O, S), f();
  };
  const y = t(
    (...O) => {
      r(...O), f();
    },
    n,
    i
  );
  let m;
  const E = () => {
    var O, S;
    if (!l)
      return;
    a = !1, o.forEach((_) => {
      var x;
      return _((x = n()) != null ? x : y);
    });
    const P = ((S = s.onRehydrateStorage) == null ? void 0 : S.call(s, (O = n()) != null ? O : y)) || void 0;
    return ki(l.getItem.bind(l))(s.name).then((_) => {
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
        (x = n()) != null ? x : y
      ), r(m, !0), f();
    }).then(() => {
      P == null || P(m, void 0), m = n(), a = !0, u.forEach((_) => _(m));
    }).catch((_) => {
      P == null || P(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (O) => {
      s = {
        ...s,
        ...O
      }, O.storage && (l = O.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (O) => (o.add(O), () => {
      o.delete(O);
    }),
    onFinishHydration: (O) => (u.add(O), () => {
      u.delete(O);
    })
  }, s.skipHydration || E(), m || y;
}, Dw = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? Ew(t, e) : Sw(t, e), xw = Dw, gn = _w()(
  xw((t, e) => ({
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
class Yi {
  constructor() {
    this.listeners = [], this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.push(e), this.onSubscribe(), () => {
      this.listeners = this.listeners.filter((r) => r !== e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const $i = typeof window > "u" || "Deno" in window;
function Sr() {
}
function Ow(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ia(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Rh(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function wi(t, e, r) {
  return Qs(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function an(t, e, r) {
  return Qs(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function ju(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o
  } = t;
  if (Qs(a)) {
    if (n) {
      if (e.queryHash !== ja(a, e.options))
        return !1;
    } else if (!Bn(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function ku(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: i,
    mutationKey: s
  } = t;
  if (Qs(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Cn(e.options.mutationKey) !== Cn(s))
        return !1;
    } else if (!Bn(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || i && !i(e));
}
function ja(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Cn)(t);
}
function Cn(t) {
  return JSON.stringify(t, (e, r) => sa(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r);
}
function Bn(t, e) {
  return Th(t, e);
}
function Th(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Th(t[r], e[r])) : !1;
}
function Ah(t, e) {
  if (t === e)
    return t;
  const r = qu(t) && qu(e);
  if (r || sa(t) && sa(e)) {
    const n = r ? t.length : Object.keys(t).length, i = r ? e : Object.keys(e), s = i.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < s; u++) {
      const l = r ? u : i[u];
      a[l] = Ah(t[l], e[l]), a[l] === t[l] && o++;
    }
    return n === s && o === n ? t : a;
  }
  return e;
}
function $u(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function qu(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function sa(t) {
  if (!zu(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!zu(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function zu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Qs(t) {
  return Array.isArray(t);
}
function Nh(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Bu(t) {
  Nh(0).then(t);
}
function Iw() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function oa(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Ah(t, e) : e;
}
class Cw extends Yi {
  constructor() {
    super(), this.setup = (e) => {
      if (!$i && window.addEventListener) {
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
    this.focused = e, e && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Ls = new Cw();
class Rw extends Yi {
  constructor() {
    super(), this.setup = (e) => {
      if (!$i && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("online", r, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", r);
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
    this.online = e, e && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const Fs = new Rw();
function Tw(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Zs(t) {
  return (t ?? "online") === "online" ? Fs.isOnline() : !0;
}
class Ph {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function vs(t) {
  return t instanceof Ph;
}
function Lh(t) {
  let e = !1, r = 0, n = !1, i, s, a;
  const o = new Promise((S, P) => {
    s = S, a = P;
  }), u = (S) => {
    n || (m(new Ph(S)), t.abort == null || t.abort());
  }, l = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !Ls.isFocused() || t.networkMode !== "always" && !Fs.isOnline(), y = (S) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(S), i == null || i(), s(S));
  }, m = (S) => {
    n || (n = !0, t.onError == null || t.onError(S), i == null || i(), a(S));
  }, E = () => new Promise((S) => {
    i = (P) => {
      const _ = n || !d();
      return _ && S(P), _;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, n || t.onContinue == null || t.onContinue();
  }), O = () => {
    if (n)
      return;
    let S;
    try {
      S = t.fn();
    } catch (P) {
      S = Promise.reject(P);
    }
    Promise.resolve(S).then(y).catch((P) => {
      var _, x;
      if (n)
        return;
      const w = (_ = t.retry) != null ? _ : 3, b = (x = t.retryDelay) != null ? x : Tw, p = typeof b == "function" ? b(r, P) : b, c = w === !0 || typeof w == "number" && r < w || typeof w == "function" && w(r, P);
      if (e || !c) {
        m(P);
        return;
      }
      r++, t.onFail == null || t.onFail(r, P), Nh(p).then(() => {
        if (d())
          return E();
      }).then(() => {
        e ? m(P) : O();
      });
    });
  };
  return Zs(t.networkMode) ? O() : E().then(O), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: l,
    continueRetry: f
  };
}
const ka = console;
function Aw() {
  let t = [], e = 0, r = (f) => {
    f();
  }, n = (f) => {
    f();
  };
  const i = (f) => {
    let d;
    e++;
    try {
      d = f();
    } finally {
      e--, e || o();
    }
    return d;
  }, s = (f) => {
    e ? t.push(f) : Bu(() => {
      r(f);
    });
  }, a = (f) => (...d) => {
    s(() => {
      f(...d);
    });
  }, o = () => {
    const f = t;
    t = [], f.length && Bu(() => {
      n(() => {
        f.forEach((d) => {
          r(d);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: a,
    schedule: s,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    }
  };
}
const Lt = Aw();
class Fh {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ia(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? ($i ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Nw extends Fh {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || ka, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || Pw(this.options), this.state = this.initialState, this.scheduleGc();
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
    const n = oa(this.state.data, e, this.options);
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
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(Sr).catch(Sr) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Rh(this.state.dataUpdatedAt, e);
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
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.indexOf(e) !== -1 && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
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
    var n, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const m = this.observers.find((E) => E.options.queryFn);
      m && this.setOptions(m.options);
    }
    Array.isArray(this.options.queryKey) || process.env.NODE_ENV !== "production" && this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
    const a = Iw(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const l = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: l
    };
    if (u(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = f.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const y = (m) => {
      if (vs(m) && m.silent || this.dispatch({
        type: "error",
        error: m
      }), !vs(m)) {
        var E, O, S, P;
        (E = (O = this.cache.config).onError) == null || E.call(O, m, this), (S = (P = this.cache.config).onSettled) == null || S.call(P, this.state.data, m, this), process.env.NODE_ENV !== "production" && this.logger.error(m);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Lh({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (m) => {
        var E, O, S, P;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), y(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(m), (E = (O = this.cache.config).onSuccess) == null || E.call(O, m, this), (S = (P = this.cache.config).onSettled) == null || S.call(P, m, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: y,
      onFail: (m, E) => {
        this.dispatch({
          type: "failed",
          failureCount: m,
          error: E
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
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const r = (n) => {
      var i, s;
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
            fetchMeta: (i = e.meta) != null ? i : null,
            fetchStatus: Zs(this.options.networkMode) ? "fetching" : "paused",
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
            dataUpdatedAt: (s = e.dataUpdatedAt) != null ? s : Date.now(),
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
          const a = e.error;
          return vs(a) && a.revert && this.revertState ? {
            ...this.revertState
          } : {
            ...n,
            error: a,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: a,
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
    this.state = r(this.state), Lt.batch(() => {
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
function Pw(t) {
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
class Lw extends Yi {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var i;
    const s = r.queryKey, a = (i = r.queryHash) != null ? i : ja(s, r);
    let o = this.get(a);
    return o || (o = new Nw({
      cache: this,
      logger: e.getLogger(),
      queryKey: s,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
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
    Lt.batch(() => {
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
    const [n] = an(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => ju(n, i));
  }
  findAll(e, r) {
    const [n] = an(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => ju(n, i)) : this.queries;
  }
  notify(e) {
    Lt.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    Lt.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Lt.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Fw extends Fh {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || ka, this.observers = [], this.state = e.state || Mw(), this.setOptions(e.options), this.scheduleGc();
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
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
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
      return this.retryer = Lh({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (g, A) => {
          this.dispatch({
            type: "failed",
            failureCount: g,
            error: A
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
      var n, i, s, a, o, u, l, f;
      if (!r) {
        var d, y, m, E;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (y = this.mutationCache.config).onMutate) == null ? void 0 : d.call(y, this.state.variables, this));
        const g = await ((m = (E = this.options).onMutate) == null ? void 0 : m.call(E, this.state.variables));
        g !== this.state.context && this.dispatch({
          type: "loading",
          context: g,
          variables: this.state.variables
        });
      }
      const c = await e();
      return await ((n = (i = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(i, c, this.state.variables, this.state.context, this)), await ((s = (a = this.options).onSuccess) == null ? void 0 : s.call(a, c, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, c, null, this.state.variables, this.state.context, this)), await ((l = (f = this.options).onSettled) == null ? void 0 : l.call(f, c, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: c
      }), c;
    } catch (c) {
      try {
        var O, S, P, _, x, w, b, p;
        throw await ((O = (S = this.mutationCache.config).onError) == null ? void 0 : O.call(S, c, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(c), await ((P = (_ = this.options).onError) == null ? void 0 : P.call(_, c, this.state.variables, this.state.context)), await ((x = (w = this.mutationCache.config).onSettled) == null ? void 0 : x.call(w, void 0, c, this.state.variables, this.state.context, this)), await ((b = (p = this.options).onSettled) == null ? void 0 : b.call(p, void 0, c, this.state.variables, this.state.context)), c;
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
            isPaused: !Zs(this.options.networkMode),
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
    this.state = r(this.state), Lt.batch(() => {
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
function Mw() {
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
class Uw extends Yi {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const i = new Fw({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(i), i;
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
    Lt.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => ku(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => ku(e, r));
  }
  notify(e) {
    Lt.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return Lt.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(Sr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function jw() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, i, s, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore, l = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", y = ((s = t.state.data) == null ? void 0 : s.pages) || [], m = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let E = m, O = !1;
        const S = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => {
              var c;
              if ((c = t.signal) != null && c.aborted)
                O = !0;
              else {
                var g;
                (g = t.signal) == null || g.addEventListener("abort", () => {
                  O = !0;
                });
              }
              return t.signal;
            }
          });
        }, P = t.options.queryFn || (() => Promise.reject("Missing queryFn")), _ = (p, c, g, A) => (E = A ? [c, ...E] : [...E, c], A ? [g, ...p] : [...p, g]), x = (p, c, g, A) => {
          if (O)
            return Promise.reject("Cancelled");
          if (typeof g > "u" && !c && p.length)
            return Promise.resolve(p);
          const M = {
            queryKey: t.queryKey,
            pageParam: g,
            meta: t.options.meta
          };
          S(M);
          const B = P(M);
          return Promise.resolve(B).then((ee) => _(p, g, ee, A));
        };
        let w;
        if (!y.length)
          w = x([]);
        else if (f) {
          const p = typeof l < "u", c = p ? l : Vu(t.options, y);
          w = x(y, p, c);
        } else if (d) {
          const p = typeof l < "u", c = p ? l : kw(t.options, y);
          w = x(y, p, c, !0);
        } else {
          E = [];
          const p = typeof t.options.getNextPageParam > "u";
          w = (o && y[0] ? o(y[0], 0, y) : !0) ? x([], p, m[0]) : Promise.resolve(_([], m[0], y[0]));
          for (let g = 1; g < y.length; g++)
            w = w.then((A) => {
              if (o && y[g] ? o(y[g], g, y) : !0) {
                const B = p ? m[g] : Vu(t.options, A);
                return x(A, p, B);
              }
              return Promise.resolve(_(A, m[g], y[g]));
            });
        }
        return w.then((p) => ({
          pages: p,
          pageParams: E
        }));
      };
    }
  };
}
function Vu(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function kw(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class $w {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new Lw(), this.mutationCache = e.mutationCache || new Uw(), this.logger = e.logger || ka, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Ls.subscribe(() => {
      Ls.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Fs.subscribe(() => {
      Fs.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = an(e, r);
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
    const i = wi(e, r, n), s = this.getQueryData(i.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(i);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: r,
      state: n
    }) => {
      const i = n.data;
      return [r, i];
    });
  }
  setQueryData(e, r, n) {
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, a = Ow(r, s);
    if (typeof a > "u")
      return;
    const o = wi(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return Lt.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = an(e, r), i = this.queryCache;
    Lt.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(e, r, n) {
    const [i, s] = an(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...i
    };
    return Lt.batch(() => (a.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, s)));
  }
  cancelQueries(e, r, n) {
    const [i, s = {}] = an(e, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const a = Lt.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(s)));
    return Promise.all(a).then(Sr).catch(Sr);
  }
  invalidateQueries(e, r, n) {
    const [i, s] = an(e, r, n);
    return Lt.batch(() => {
      var a, o;
      if (this.queryCache.findAll(i).forEach((l) => {
        l.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...i,
        type: (a = (o = i.refetchType) != null ? o : i.type) != null ? a : "active"
      };
      return this.refetchQueries(u, s);
    });
  }
  refetchQueries(e, r, n) {
    const [i, s] = an(e, r, n), a = Lt.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var l;
      return u.fetch(void 0, {
        ...s,
        cancelRefetch: (l = s == null ? void 0 : s.cancelRefetch) != null ? l : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(Sr);
    return s != null && s.throwOnError || (o = o.catch(Sr)), o;
  }
  fetchQuery(e, r, n) {
    const i = wi(e, r, n), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(Sr).catch(Sr);
  }
  fetchInfiniteQuery(e, r, n) {
    const i = wi(e, r, n);
    return i.behavior = jw(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(Sr).catch(Sr);
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
    const n = this.queryDefaults.find((i) => Cn(e) === Cn(i.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => Bn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Bn(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((i) => Cn(e) === Cn(i.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => Bn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Bn(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
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
    return !r.queryHash && r.queryKey && (r.queryHash = ja(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
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
class qw extends Yi {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.length === 1 && (this.currentQuery.addObserver(this), Ku(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return aa(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return aa(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), $u(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && Wu(this.currentQuery, i, this.options, n) && this.executeFetch(), this.updateResult(r), s && (this.currentQuery !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    s && (this.currentQuery !== i || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e);
    return this.createResult(r, e);
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
    return e != null && e.throwOnError || (r = r.catch(Sr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), $i || this.currentResult.isStale || !ia(this.options.staleTime))
      return;
    const r = Rh(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !($i || this.options.enabled === !1 || !ia(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Ls.isFocused()) && this.executeFetch();
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
    const n = this.currentQuery, i = this.options, s = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== n, l = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: d
    } = e;
    let {
      dataUpdatedAt: y,
      error: m,
      errorUpdatedAt: E,
      fetchStatus: O,
      status: S
    } = d, P = !1, _ = !1, x;
    if (r._optimisticResults) {
      const g = this.hasListeners(), A = !g && Ku(e, r), M = g && Wu(e, n, r, i);
      (A || M) && (O = Zs(e.options.networkMode) ? "fetching" : "paused", y || (S = "loading")), r._optimisticResults === "isRestoring" && (O = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && S !== "error")
      x = f.data, y = f.dataUpdatedAt, S = f.status, P = !0;
    else if (r.select && typeof d.data < "u")
      if (s && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        x = this.selectResult;
      else
        try {
          this.selectFn = r.select, x = r.select(d.data), x = oa(s == null ? void 0 : s.data, x, r), this.selectResult = x, this.selectError = null;
        } catch (g) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(g), this.selectError = g;
        }
    else
      x = d.data;
    if (typeof r.placeholderData < "u" && typeof x > "u" && S === "loading") {
      let g;
      if (s != null && s.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        g = s.data;
      else if (g = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof g < "u")
        try {
          g = r.select(g), this.selectError = null;
        } catch (A) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(A), this.selectError = A;
        }
      typeof g < "u" && (S = "success", x = oa(s == null ? void 0 : s.data, g, r), _ = !0);
    }
    this.selectError && (m = this.selectError, x = this.selectResult, E = Date.now(), S = "error");
    const w = O === "fetching", b = S === "loading", p = S === "error";
    return {
      status: S,
      fetchStatus: O,
      isLoading: b,
      isSuccess: S === "success",
      isError: p,
      isInitialLoading: b && w,
      data: x,
      dataUpdatedAt: y,
      error: m,
      errorUpdatedAt: E,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !b,
      isLoadingError: p && d.dataUpdatedAt === 0,
      isPaused: O === "paused",
      isPlaceholderData: _,
      isPreviousData: P,
      isRefetchError: p && d.dataUpdatedAt !== 0,
      isStale: $a(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, $u(n, r))
      return;
    this.currentResult = n;
    const i = {
      cache: !0
    }, s = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options;
      if (a === "all" || !a && !this.trackedProps.size)
        return !0;
      const o = new Set(a ?? this.trackedProps);
      return this.options.useErrorBoundary && o.add("error"), Object.keys(this.currentResult).some((u) => {
        const l = u;
        return this.currentResult[l] !== r[l] && o.has(l);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && s() && (i.listeners = !0), this.notify({
      ...i,
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
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !vs(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    Lt.batch(() => {
      if (e.onSuccess) {
        var r, n, i, s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, l;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (l = this.options).onSettled) == null || u.call(l, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach((f) => {
        f(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function zw(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Ku(t, e) {
  return zw(t, e) || t.state.dataUpdatedAt > 0 && aa(t, e, e.refetchOnMount);
}
function aa(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && $a(t, e);
  }
  return !1;
}
function Wu(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && $a(t, r);
}
function $a(t, e) {
  return t.isStaleByTime(e.staleTime);
}
var Bw = Ua();
const Vw = Bw.useSyncExternalStore, Hu = /* @__PURE__ */ sr.createContext(void 0), Mh = /* @__PURE__ */ sr.createContext(!1);
function Uh(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Hu), window.ReactQueryClientContext) : Hu);
}
const Kw = ({
  context: t
} = {}) => {
  const e = sr.useContext(Uh(t, sr.useContext(Mh)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ww = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  sr.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = Uh(r, n);
  return /* @__PURE__ */ sr.createElement(Mh.Provider, {
    value: !r && n
  }, /* @__PURE__ */ sr.createElement(i.Provider, {
    value: t
  }, e));
}, jh = /* @__PURE__ */ sr.createContext(!1), Hw = () => sr.useContext(jh);
jh.Provider;
function Gw() {
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
const Qw = /* @__PURE__ */ sr.createContext(Gw()), Zw = () => sr.useContext(Qw);
function Yw(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const Jw = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, Xw = (t) => {
  sr.useEffect(() => {
    t.clearReset();
  }, [t]);
}, e1 = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && Yw(r, [t.error, n]), t1 = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, r1 = (t, e) => t.isLoading && t.isFetching && !e, n1 = (t, e, r) => (t == null ? void 0 : t.suspense) && r1(e, r), i1 = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function s1(t, e) {
  const r = Kw({
    context: t.context
  }), n = Hw(), i = Zw(), s = r.defaultQueryOptions(t);
  s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = Lt.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = Lt.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = Lt.batchCalls(s.onSettled)), t1(s), Jw(s, i), Xw(i);
  const [a] = sr.useState(() => new e(r, s)), o = a.getOptimisticResult(s);
  if (Vw(sr.useCallback((u) => n ? () => {
  } : a.subscribe(Lt.batchCalls(u)), [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), sr.useEffect(() => {
    a.setOptions(s, {
      listeners: !1
    });
  }, [s, a]), n1(s, o, n))
    throw i1(s, a, i);
  if (e1({
    result: o,
    errorResetBoundary: i,
    useErrorBoundary: s.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return s.notifyOnChangeProps ? o : a.trackResult(o);
}
function o1(t, e, r) {
  const n = wi(t, e, r);
  return s1(n, qw);
}
function qa() {
  const [t, e] = hs(void 0), [r, n] = hs(void 0), [i, s] = hs(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
async function kh(t) {
  return (await Et()).request(t);
}
function Ys({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return o1(
    t,
    () => kh(e),
    n ?? {
      staleTime: 7500,
      refetchInterval: 5e3,
      refetchIntervalInBackground: !0,
      enabled: r
    }
  );
}
function ri(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: a } = qa();
  async function o(u) {
    try {
      a(!0), s(void 0);
      const l = await kh(t ?? u);
      return i(l), l;
    } catch (l) {
      throw s(l), l;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const Gu = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, hE = () => {
  const t = Fr(), e = "aleo:1", [r, n] = gn((l) => [l.account, l.setAccount]), { request: i, data: s, error: a, loading: o } = ri({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  Zi(({ params: l, topic: f }) => {
    if (l.event.name === "accountSelected" && t && t.topic === f) {
      const y = l.event.address, m = l.chainId.split(":")[0], E = l.chainId.split(":")[1];
      n({
        network: m,
        chainId: E,
        address: y,
        shortenedAddress: Gu(y)
      });
    }
  }), Ch(({ params: l, topic: f }) => {
    const d = l.event.address, y = l.chainId.split(":")[0], m = l.chainId.split(":")[1];
    n({
      network: y,
      chainId: m,
      address: d,
      shortenedAddress: Gu(d)
    });
  }), Ih(({ params: l, topic: f }) => {
    n(void 0);
  }), Dr(() => {
    t && !o && i();
  }, [t == null ? void 0 : t.topic]), Dr(() => {
    if (s) {
      const l = s, f = l == null ? void 0 : l.account;
      f && n(f);
    }
  }, [s]);
  const u = a ? a.message : s && s.error;
  return {
    account: r,
    error: u,
    loading: o
  };
}, fE = ({ address: t }) => {
  const e = Fr(), [r] = gn((d) => [d.account]), n = "aleo:1", { refetch: i, data: s, error: a, isLoading: o } = Ys({
    queryKey: ["useBalance", t ?? (r == null ? void 0 : r.address) ?? ""],
    enabled: !!e,
    wcParams: {
      topic: e == null ? void 0 : e.topic,
      chainId: n,
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
  Zi(({ params: d, topic: y }) => {
    const m = d.event.name, E = d.event.address;
    ["accountSelected", "selectedAccountSynced", "sharedAccountSynced"].includes(m) && e && e.topic === y && E === (r == null ? void 0 : r.address) && !o && i();
  }), Dr(() => {
    e && !o && i();
  }, [e == null ? void 0 : e.topic]);
  const u = a ? a.message : s && s.error, l = s;
  return { balances: l == null ? void 0 : l.balances, error: u, loading: o };
};
function dE() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = qa();
  async function a() {
    try {
      s(!0), i(void 0);
      const u = await (await Et()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Fa,
            chains: Hs,
            events: Ma
          }
        }
      });
      return n(u), Gn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), u;
    } catch (o) {
      throw i(o), o;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: a };
}
const pE = () => {
  const t = Fr(), { request: e, data: r, error: n, loading: i } = ri({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = n ? n.message : r && r.error, a = r;
  return { createSharedState: () => {
    e();
  }, data: a == null ? void 0 : a.data, loading: i, error: s };
};
var ca = { exports: {} }, Oo, Qu;
function a1() {
  if (Qu)
    return Oo;
  Qu = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Oo = function(f, d) {
    d = d || {};
    var y = typeof f;
    if (y === "string" && f.length > 0)
      return a(f);
    if (y === "number" && isFinite(f))
      return d.long ? u(f) : o(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function a(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var y = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? l(f, d, n, "day") : d >= r ? l(f, d, r, "hour") : d >= e ? l(f, d, e, "minute") : d >= t ? l(f, d, t, "second") : f + " ms";
  }
  function l(f, d, y, m) {
    var E = d >= y * 1.5;
    return Math.round(f / y) + " " + m + (E ? "s" : "");
  }
  return Oo;
}
function c1(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = a, r.humanize = a1(), r.destroy = l, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let y = 0; y < f.length; y++)
      d = (d << 5) - d + f.charCodeAt(y), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, y = null, m, E;
    function O(...S) {
      if (!O.enabled)
        return;
      const P = O, _ = Number(/* @__PURE__ */ new Date()), x = _ - (d || _);
      P.diff = x, P.prev = d, P.curr = _, d = _, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let w = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (p, c) => {
        if (p === "%%")
          return "%";
        w++;
        const g = r.formatters[c];
        if (typeof g == "function") {
          const A = S[w];
          p = g.call(P, A), S.splice(w, 1), w--;
        }
        return p;
      }), r.formatArgs.call(P, S), (P.log || r.log).apply(P, S);
    }
    return O.namespace = f, O.useColors = r.useColors(), O.color = r.selectColor(f), O.extend = n, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (m !== r.namespaces && (m = r.namespaces, E = r.enabled(f)), E),
      set: (S) => {
        y = S;
      }
    }), typeof r.init == "function" && r.init(O), O;
  }
  function n(f, d) {
    const y = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return y.log = this.log, y;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), m = y.length;
    for (d = 0; d < m; d++)
      y[d] && (f = y[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(o),
      ...r.skips.map(o).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function a(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, y;
    for (d = 0, y = r.skips.length; d < y; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, y = r.names.length; d < y; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function o(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var u1 = c1;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = a(), e.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function n(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    u.splice(1, 0, l, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (d = f));
    }), u.splice(d, 0, l);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function a() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = u1(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(ca, ca.exports);
var l1 = ca.exports;
const h1 = /* @__PURE__ */ qi(l1), za = h1("wallet:sdk");
za.enabled = !0;
const gE = (t) => {
  za("useDecrypt", t);
  const e = Fr(), { request: r, data: n, error: i, loading: s } = ri({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), a = i ? i.message : n && n.error, o = n;
  return { decrypt: () => {
    t && r();
  }, plaintexts: o == null ? void 0 : o.plaintexts, loading: s, error: a };
};
function yE() {
  const t = Fr(), { error: e, loading: r, setError: n, setLoading: i } = qa();
  async function s() {
    try {
      i(!0), n(void 0), await (await Et()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: Pt("USER_DISCONNECTED")
      }), Gn.emit("session_change"), gn.setState({ account: void 0 });
    } catch (a) {
      throw n(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: r, disconnect: s };
}
const vE = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Fr(), [i] = gn((E) => [E.account]), { refetch: s, data: a, error: o, isLoading: u } = Ys({
    queryKey: ["useEvent", t ?? ""],
    enabled: !!t && !!n && (r ? !!e : !0),
    wcParams: {
      topic: (n == null ? void 0 : n.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: t
        }
      }
    }
  });
  Zi(({ params: E, topic: O }) => {
    const S = E.event.name, P = E.event.address;
    S === "selectedAccountSynced" && n && n.topic === O && P === (i == null ? void 0 : i.address) && !u && s();
  });
  const l = !!n && !!i;
  Dr(() => {
    l && !u && s();
  }, [l]);
  const f = () => {
    !!n && !!i && !u && s();
  }, d = o ? o.message : a && a.error, y = a, m = y == null ? void 0 : y.event;
  return { fetchEvent: f, event: m, error: d, loading: u };
}, mE = ({ filter: t, page: e }) => {
  const r = Fr(), [n] = gn((E) => [E.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: i, data: s, error: a, isLoading: o } = Ys({
    queryKey: ["useEvents", (n == null ? void 0 : n.address) ?? "", t, e],
    enabled: !!r,
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
  Zi(({ id: E, params: O, topic: S }) => {
    const P = O.event.name, _ = O.event.address;
    P === "selectedAccountSynced" && r && r.topic === S && _ === (n == null ? void 0 : n.address) && !o && i();
  });
  const u = !!r && !!n;
  Dr(() => {
    u && !o && i();
  }, [u]);
  const l = () => {
    !!r && !!n && !o && i();
  }, f = a ? a.message : s && s.error, d = s, y = d == null ? void 0 : d.events, m = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: l, events: y, error: f, loading: o, page: e, pageCount: m };
}, bE = (t) => {
  const e = Fr(), { request: r, data: n, error: i, loading: s } = ri({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), a = i ? i.message : n && n.error, o = n;
  return { importSharedState: () => {
    r();
  }, data: o == null ? void 0 : o.data, loading: s, error: a };
}, _E = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, wE = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const i = Fr(), [s, a] = gn((P) => [
    P.chainId,
    P.account
  ]), { refetch: o, data: u, error: l, isLoading: f } = Ys({
    queryKey: ["useRecords", t, r, n],
    enabled: (e ? !!t : !0) && !!i,
    wcParams: {
      topic: i == null ? void 0 : i.topic,
      chainId: s,
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
  }), d = !!i && !!a && (e ? !!t : !0);
  Zi(({ params: P, topic: _ }) => {
    const x = P.event.name, w = P.event.address;
    (x === "selectedAccountSynced" || x === "accountSelected" || x === "sharedAccountSynced" && w === t) && d && i.topic === _ && o();
  }), Dr(() => {
    d && !f && o();
  }, [d]);
  const y = () => {
    d && !f && o();
  }, m = l ? l.message : u && u.error, E = u, O = E == null ? void 0 : E.records, S = (E == null ? void 0 : E.pageCount) ?? 0;
  return { fetchPage: y, records: O, error: m, loading: f, page: n, pageCount: S };
}, EE = (t, e) => {
  const r = Fr(), { request: n, data: i, error: s, loading: a } = ri({
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
  }), o = s ? s.message : i && i.error;
  return { requestSignature: () => {
    n();
  }, response: i, loading: a, error: o };
}, SE = (t) => {
  const e = Fr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: a } = ri({
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
  }), o = s ? s.message : i && i.error, u = i;
  return { createEvent: () => {
    t && (za("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, DE = async () => {
  const t = await Et(), e = await t.getSession(), r = "aleo:1";
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
    return gn.setState({ account: n.account }), n;
  } catch (n) {
    const i = n.message;
    return console.error("getAccount error", i), { error: i };
  }
}, xE = async ({ address: t }) => {
  const e = await Et(), r = await e.getSession(), n = "aleo:1";
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
  } catch (i) {
    const s = i.message;
    return console.error("getBalance error", s), { error: s };
  }
}, OE = async () => {
  const t = await Et();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Fa,
          chains: Hs,
          events: Ma
        }
      }
    });
    return Gn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, IE = async (t) => {
  const e = await Et(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
    const a = s.message;
    return console.error("createEvent error", a), { error: a };
  }
}, CE = async () => {
  const t = await Et(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
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
}, RE = async (t) => {
  const e = await Et(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, TE = async () => {
  const t = await Et(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: Pt("USER_DISCONNECTED"),
      topic: e.topic
    }), Gn.emit("session_change"), gn.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, AE = async ({
  id: t,
  address: e
}) => {
  const r = await Et(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
  if (!n || !i || !r)
    return { event: void 0, error: "no session, chainId, or connection" };
  const s = async () => await r.request({
    topic: (n == null ? void 0 : n.topic) ?? "",
    chainId: i,
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
    return await s();
  } catch (a) {
    const o = a.message;
    return console.error("getEvents error", o), { error: o };
  }
}, NE = async (t) => {
  const e = await Et(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
    const a = s.message;
    return console.error("getEvents error", a), { error: a };
  }
}, PE = async (t) => {
  const e = await Et(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, LE = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await Et(), i = await (n == null ? void 0 : n.getSession()), s = "aleo:1";
  if (!i || !s || !n)
    return { error: "no session, chainId, or connection" };
  const a = async (o = 0) => await n.request({
    topic: i.topic,
    chainId: s,
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: o
      }
    }
  });
  try {
    return await a();
  } catch (o) {
    const u = o.message;
    return console.error("getRecords error", u), { error: u };
  }
}, FE = async ({
  message: t,
  address: e
}) => {
  const r = await Et(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
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
    const a = s.message;
    return console.error("signature error", a), { error: a };
  }
}, ME = 50;
var ua = { exports: {} }, vi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zu;
function f1() {
  if (Zu)
    return vi;
  Zu = 1;
  var t = Yn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, l) {
    var f, d = {}, y = null, m = null;
    l !== void 0 && (y = "" + l), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: y, ref: m, props: d, _owner: i.current };
  }
  return vi.Fragment = r, vi.jsx = a, vi.jsxs = a, vi;
}
var mi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function d1() {
  return Yu || (Yu = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Yn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), E = Symbol.iterator, O = "@@iterator";
    function S(R) {
      if (R === null || typeof R != "object")
        return null;
      var K = E && R[E] || R[O];
      return typeof K == "function" ? K : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(R) {
      {
        for (var K = arguments.length, ce = new Array(K > 1 ? K - 1 : 0), Ee = 1; Ee < K; Ee++)
          ce[Ee - 1] = arguments[Ee];
        x("error", R, ce);
      }
    }
    function x(R, K, ce) {
      {
        var Ee = P.ReactDebugCurrentFrame, Je = Ee.getStackAddendum();
        Je !== "" && (K += "%s", ce = ce.concat([Je]));
        var Be = ce.map(function(We) {
          return String(We);
        });
        Be.unshift("Warning: " + K), Function.prototype.apply.call(console[R], console, Be);
      }
    }
    var w = !1, b = !1, p = !1, c = !1, g = !1, A;
    A = Symbol.for("react.module.reference");
    function M(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === s || g || R === i || R === l || R === f || c || R === m || w || b || p || typeof R == "object" && R !== null && (R.$$typeof === y || R.$$typeof === d || R.$$typeof === a || R.$$typeof === o || R.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === A || R.getModuleId !== void 0));
    }
    function B(R, K, ce) {
      var Ee = R.displayName;
      if (Ee)
        return Ee;
      var Je = K.displayName || K.name || "";
      return Je !== "" ? ce + "(" + Je + ")" : ce;
    }
    function G(R) {
      return R.displayName || "Context";
    }
    function ee(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case o:
            var K = R;
            return G(K) + ".Consumer";
          case a:
            var ce = R;
            return G(ce._context) + ".Provider";
          case u:
            return B(R, R.render, "ForwardRef");
          case d:
            var Ee = R.displayName || null;
            return Ee !== null ? Ee : ee(R.type) || "Memo";
          case y: {
            var Je = R, Be = Je._payload, We = Je._init;
            try {
              return ee(We(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, $ = 0, se, Z, H, Y, W, J, we;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function be() {
      {
        if ($ === 0) {
          se = console.log, Z = console.info, H = console.warn, Y = console.error, W = console.group, J = console.groupCollapsed, we = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        $++;
      }
    }
    function he() {
      {
        if ($--, $ === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, R, {
              value: se
            }),
            info: N({}, R, {
              value: Z
            }),
            warn: N({}, R, {
              value: H
            }),
            error: N({}, R, {
              value: Y
            }),
            group: N({}, R, {
              value: W
            }),
            groupCollapsed: N({}, R, {
              value: J
            }),
            groupEnd: N({}, R, {
              value: we
            })
          });
        }
        $ < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = P.ReactCurrentDispatcher, z;
    function q(R, K, ce) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (Je) {
            var Ee = Je.stack.trim().match(/\n( *(at )?)/);
            z = Ee && Ee[1] || "";
          }
        return `
` + z + R;
      }
    }
    var F = !1, h;
    {
      var T = typeof WeakMap == "function" ? WeakMap : Map;
      h = new T();
    }
    function oe(R, K) {
      if (!R || F)
        return "";
      {
        var ce = h.get(R);
        if (ce !== void 0)
          return ce;
      }
      var Ee;
      F = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = ve.current, ve.current = null, be();
      try {
        if (K) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (zt) {
              Ee = zt;
            }
            Reflect.construct(R, [], We);
          } else {
            try {
              We.call();
            } catch (zt) {
              Ee = zt;
            }
            R.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            Ee = zt;
          }
          R();
        }
      } catch (zt) {
        if (zt && Ee && typeof zt.stack == "string") {
          for (var ze = zt.stack.split(`
`), Ut = Ee.stack.split(`
`), dt = ze.length - 1, _t = Ut.length - 1; dt >= 1 && _t >= 0 && ze[dt] !== Ut[_t]; )
            _t--;
          for (; dt >= 1 && _t >= 0; dt--, _t--)
            if (ze[dt] !== Ut[_t]) {
              if (dt !== 1 || _t !== 1)
                do
                  if (dt--, _t--, _t < 0 || ze[dt] !== Ut[_t]) {
                    var Tt = `
` + ze[dt].replace(" at new ", " at ");
                    return R.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", R.displayName)), typeof R == "function" && h.set(R, Tt), Tt;
                  }
                while (dt >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        F = !1, ve.current = Be, he(), Error.prepareStackTrace = Je;
      }
      var Ur = R ? R.displayName || R.name : "", yn = Ur ? q(Ur) : "";
      return typeof R == "function" && h.set(R, yn), yn;
    }
    function le(R, K, ce) {
      return oe(R, !1);
    }
    function ke(R) {
      var K = R.prototype;
      return !!(K && K.isReactComponent);
    }
    function xe(R, K, ce) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return oe(R, ke(R));
      if (typeof R == "string")
        return q(R);
      switch (R) {
        case l:
          return q("Suspense");
        case f:
          return q("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case u:
            return le(R.render);
          case d:
            return xe(R.type, K, ce);
          case y: {
            var Ee = R, Je = Ee._payload, Be = Ee._init;
            try {
              return xe(Be(Je), K, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, He = {}, it = P.ReactDebugCurrentFrame;
    function rt(R) {
      if (R) {
        var K = R._owner, ce = xe(R.type, R._source, K ? K.type : null);
        it.setExtraStackFrame(ce);
      } else
        it.setExtraStackFrame(null);
    }
    function $e(R, K, ce, Ee, Je) {
      {
        var Be = Function.call.bind(Ae);
        for (var We in R)
          if (Be(R, We)) {
            var ze = void 0;
            try {
              if (typeof R[We] != "function") {
                var Ut = Error((Ee || "React class") + ": " + ce + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ut.name = "Invariant Violation", Ut;
              }
              ze = R[We](K, We, Ee, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              ze = dt;
            }
            ze && !(ze instanceof Error) && (rt(Je), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", ce, We, typeof ze), rt(null)), ze instanceof Error && !(ze.message in He) && (He[ze.message] = !0, rt(Je), _("Failed %s type: %s", ce, ze.message), rt(null));
          }
      }
    }
    var Fe = Array.isArray;
    function Re(R) {
      return Fe(R);
    }
    function Ne(R) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ce = K && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ce;
      }
    }
    function Te(R) {
      try {
        return Ie(R), !1;
      } catch {
        return !0;
      }
    }
    function Ie(R) {
      return "" + R;
    }
    function Oe(R) {
      if (Te(R))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(R)), Ie(R);
    }
    var _e = P.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Se, qe;
    qe = {};
    function Ge(R) {
      if (Ae.call(R, "ref")) {
        var K = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ze(R) {
      if (Ae.call(R, "key")) {
        var K = Object.getOwnPropertyDescriptor(R, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Qe(R, K) {
      if (typeof R.ref == "string" && _e.current && K && _e.current.stateNode !== K) {
        var ce = ee(_e.current.type);
        qe[ce] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(_e.current.type), R.ref), qe[ce] = !0);
      }
    }
    function Ye(R, K) {
      {
        var ce = function() {
          Me || (Me = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function tr(R, K) {
      {
        var ce = function() {
          Se || (Se = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var Wt = function(R, K, ce, Ee, Je, Be, We) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: R,
        key: K,
        ref: ce,
        props: We,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function pr(R, K, ce, Ee, Je) {
      {
        var Be, We = {}, ze = null, Ut = null;
        ce !== void 0 && (Oe(ce), ze = "" + ce), Ze(K) && (Oe(K.key), ze = "" + K.key), Ge(K) && (Ut = K.ref, Qe(K, Je));
        for (Be in K)
          Ae.call(K, Be) && !Pe.hasOwnProperty(Be) && (We[Be] = K[Be]);
        if (R && R.defaultProps) {
          var dt = R.defaultProps;
          for (Be in dt)
            We[Be] === void 0 && (We[Be] = dt[Be]);
        }
        if (ze || Ut) {
          var _t = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ze && Ye(We, _t), Ut && tr(We, _t);
        }
        return Wt(R, ze, Ut, Je, Ee, _e.current, We);
      }
    }
    var Ft = P.ReactCurrentOwner, Mt = P.ReactDebugCurrentFrame;
    function ur(R) {
      if (R) {
        var K = R._owner, ce = xe(R.type, R._source, K ? K.type : null);
        Mt.setExtraStackFrame(ce);
      } else
        Mt.setExtraStackFrame(null);
    }
    var Mr;
    Mr = !1;
    function ct(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function ut() {
      {
        if (Ft.current) {
          var R = ee(Ft.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function yt(R) {
      {
        if (R !== void 0) {
          var K = R.fileName.replace(/^.*[\\\/]/, ""), ce = R.lineNumber;
          return `

Check your code at ` + K + ":" + ce + ".";
        }
        return "";
      }
    }
    var ft = {};
    function vt(R) {
      {
        var K = ut();
        if (!K) {
          var ce = typeof R == "string" ? R : R.displayName || R.name;
          ce && (K = `

Check the top-level render call using <` + ce + ">.");
        }
        return K;
      }
    }
    function lt(R, K) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ce = vt(K);
        if (ft[ce])
          return;
        ft[ce] = !0;
        var Ee = "";
        R && R._owner && R._owner !== Ft.current && (Ee = " It was passed a child from " + ee(R._owner.type) + "."), ur(R), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, Ee), ur(null);
      }
    }
    function St(R, K) {
      {
        if (typeof R != "object")
          return;
        if (Re(R))
          for (var ce = 0; ce < R.length; ce++) {
            var Ee = R[ce];
            ct(Ee) && lt(Ee, K);
          }
        else if (ct(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Je = S(R);
          if (typeof Je == "function" && Je !== R.entries)
            for (var Be = Je.call(R), We; !(We = Be.next()).done; )
              ct(We.value) && lt(We.value, K);
        }
      }
    }
    function It(R) {
      {
        var K = R.type;
        if (K == null || typeof K == "string")
          return;
        var ce;
        if (typeof K == "function")
          ce = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === d))
          ce = K.propTypes;
        else
          return;
        if (ce) {
          var Ee = ee(K);
          $e(ce, R.props, "prop", Ee, R);
        } else if (K.PropTypes !== void 0 && !Mr) {
          Mr = !0;
          var Je = ee(K);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(R) {
      {
        for (var K = Object.keys(R.props), ce = 0; ce < K.length; ce++) {
          var Ee = K[ce];
          if (Ee !== "children" && Ee !== "key") {
            ur(R), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), ur(null);
            break;
          }
        }
        R.ref !== null && (ur(R), _("Invalid attribute `ref` supplied to `React.Fragment`."), ur(null));
      }
    }
    function Dt(R, K, ce, Ee, Je, Be) {
      {
        var We = M(R);
        if (!We) {
          var ze = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ut = yt(Je);
          Ut ? ze += Ut : ze += ut();
          var dt;
          R === null ? dt = "null" : Re(R) ? dt = "array" : R !== void 0 && R.$$typeof === e ? (dt = "<" + (ee(R.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof R, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, ze);
        }
        var _t = pr(R, K, ce, Je, Be);
        if (_t == null)
          return _t;
        if (We) {
          var Tt = K.children;
          if (Tt !== void 0)
            if (Ee)
              if (Re(Tt)) {
                for (var Ur = 0; Ur < Tt.length; Ur++)
                  St(Tt[Ur], R);
                Object.freeze && Object.freeze(Tt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              St(Tt, R);
        }
        return R === n ? Ct(_t) : It(_t), _t;
      }
    }
    function Rt(R, K, ce) {
      return Dt(R, K, ce, !0);
    }
    function mt(R, K, ce) {
      return Dt(R, K, ce, !1);
    }
    var bt = mt, ot = Rt;
    mi.Fragment = n, mi.jsx = bt, mi.jsxs = ot;
  }()), mi;
}
process.env.NODE_ENV === "production" ? ua.exports = f1() : ua.exports = d1();
var p1 = ua.exports;
const g1 = new $w(), UE = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: i }) => (Dr(() => {
  i_({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  });
}, []), /* @__PURE__ */ p1.jsx(Ww, { client: g1, children: i })), y1 = [
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
], Ju = yf.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Ju !== t && (y1.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Ju));
} catch (t) {
  console.error(t);
}
export {
  Hs as $,
  Tu as A,
  q1 as B,
  z1 as C,
  B1 as D,
  Xo as E,
  G1 as F,
  Q1 as G,
  uE as H,
  iE as I,
  Z1 as J,
  nE as K,
  Y1 as L,
  sE as M,
  ra as N,
  J1 as O,
  X1 as P,
  cE as Q,
  Df as R,
  lE as S,
  Xu as T,
  aE as U,
  ta as V,
  eE as W,
  rE as X,
  tE as Y,
  oE as Z,
  Fa as _,
  Jt as a,
  Ma as a0,
  e_ as a1,
  t_ as a2,
  M1 as a3,
  Gu as a4,
  hE as a5,
  fE as a6,
  dE as a7,
  pE as a8,
  gE as a9,
  UE as aA,
  yE as aa,
  vE as ab,
  mE as ac,
  bE as ad,
  _E as ae,
  wE as af,
  EE as ag,
  SE as ah,
  Ih as ai,
  Zi as aj,
  lw as ak,
  Ch as al,
  Fr as am,
  ME as an,
  DE as ao,
  xE as ap,
  OE as aq,
  IE as ar,
  CE as as,
  RE as at,
  TE as au,
  AE as av,
  NE as aw,
  PE as ax,
  LE as ay,
  FE as az,
  ea as b,
  i_ as c,
  K1 as d,
  Gn as e,
  W1 as f,
  Et as g,
  H1 as h,
  nw as i,
  iw as j,
  sw as k,
  ow as l,
  aw as m,
  ic as n,
  b1 as o,
  Rr as p,
  cw as q,
  uw as r,
  so as s,
  m1 as t,
  U1 as u,
  j1 as v,
  k1 as w,
  $1 as x,
  Hn as y,
  V1 as z
};
