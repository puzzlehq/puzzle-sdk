import * as sr from "react";
import Pn, { useEffect as Nr, useState as fs } from "react";
const Qh = "@puzzlehq/sdk", Zh = "Puzzle SDK", Yh = "0.1.43", Jh = "Your portal to privacy", Xh = "./dist/puzzle.cjs.js", ef = "./dist/puzzle.es.js", tf = "./dist/puzzle.umd.js", rf = "./dist/types/src/index.d.ts", nf = {
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
  "@puzzlehq/types": "1.0.8",
  "@tanstack/react-query": "^4.29.5",
  "@tanstack/react-query-devtools": "^5.13.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/keyvaluestorage": "1.0.2",
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
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch",
    "@walletconnect/core@2.10.0": "patches/@walletconnect__core@2.10.0.patch"
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
}, mf = Symbol(), Za = Object.getPrototypeOf, Co = /* @__PURE__ */ new WeakMap(), vf = (t) => t && (Co.has(t) ? Co.get(t) : Za(t) === Object.prototype || Za(t) === Array.prototype), bf = (t) => vf(t) && t[mf] || null, Ya = (t, e = !0) => {
  Co.set(t, e);
}, so = (t) => typeof t == "object" && t !== null, sn = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakSet(), _f = (t = Object.is, e = (h, f) => new Proxy(h, f), r = (h) => so(h) && !is.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (h, f, d = n) => {
  const y = i.get(h);
  if ((y == null ? void 0 : y[0]) === f)
    return y[1];
  const b = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return Ya(b, !0), i.set(h, [f, b]), Reflect.ownKeys(h).forEach((E) => {
    if (Object.getOwnPropertyDescriptor(b, E))
      return;
    const x = Reflect.get(h, E), D = {
      value: x,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (is.has(x))
      Ya(x, !1);
    else if (x instanceof Promise)
      delete D.value, D.get = () => d(x);
    else if (sn.has(x)) {
      const [M, w] = sn.get(
        x
      );
      D.value = s(
        M,
        w(),
        d
      );
    }
    Object.defineProperty(b, E, D);
  }), Object.preventExtensions(b);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (h) => {
  if (!so(h))
    throw new Error("object required");
  const f = a.get(h);
  if (f)
    return f;
  let d = o[0];
  const y = /* @__PURE__ */ new Set(), b = (A, F = ++o[0]) => {
    d !== F && (d = F, y.forEach((B) => B(A, F)));
  };
  let E = o[1];
  const x = (A = ++o[1]) => (E !== A && !y.size && (E = A, M.forEach(([F]) => {
    const B = F[1](A);
    B > d && (d = B);
  })), d), D = (A) => (F, B) => {
    const G = [...F];
    G[1] = [A, ...G[1]], b(G, B);
  }, M = /* @__PURE__ */ new Map(), w = (A, F) => {
    if (y.size) {
      const B = F[3](D(A));
      M.set(A, [F, B]);
    } else
      M.set(A, [F]);
  }, R = (A) => {
    var F;
    const B = M.get(A);
    B && (M.delete(A), (F = B[1]) == null || F.call(B));
  }, _ = (A) => (y.add(A), y.size === 1 && M.forEach(([B, G], ee) => {
    const N = B[3](D(ee));
    M.set(ee, [B, N]);
  }), () => {
    y.delete(A), y.size === 0 && M.forEach(([B, G], ee) => {
      G && (G(), M.set(ee, [B]));
    });
  }), v = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), c = e(v, {
    deleteProperty(A, F) {
      const B = Reflect.get(A, F);
      R(F);
      const G = Reflect.deleteProperty(A, F);
      return G && b(["delete", [F], B]), G;
    },
    set(A, F, B, G) {
      const ee = Reflect.has(A, F), N = Reflect.get(A, F, G);
      if (ee && (t(N, B) || a.has(B) && t(N, a.get(B))))
        return !0;
      R(F), so(B) && (B = bf(B) || B);
      let $ = B;
      if (B instanceof Promise)
        B.then((se) => {
          B.status = "fulfilled", B.value = se, b(["resolve", [F], se]);
        }).catch((se) => {
          B.status = "rejected", B.reason = se, b(["reject", [F], se]);
        });
      else {
        !sn.has(B) && r(B) && ($ = u(B));
        const se = !is.has($) && sn.get($);
        se && w(F, se);
      }
      return Reflect.set(A, F, $, G), b(["set", [F], B, N]), !0;
    }
  });
  a.set(h, c);
  const g = [
    v,
    x,
    s,
    _
  ];
  return sn.set(c, g), Reflect.ownKeys(h).forEach((A) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      A
    );
    "value" in F && (c[A] = h[A], delete F.value, delete F.writable), Object.defineProperty(v, A, F);
  }), c;
}) => [
  // public functions
  u,
  // shared state
  sn,
  is,
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
function Ln(t, e, r) {
  const n = sn.get(t);
  let i;
  const s = [], a = n[3];
  let o = !1;
  const h = a((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, o && e(s.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, h();
  };
}
function Ef(t, e) {
  const r = sn.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const jt = dn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), el = { state: jt, subscribe(t) {
  return Ln(jt, () => t(jt));
}, push(t, e) {
  t !== jt.view && (jt.view = t, e && (jt.data = e), jt.history.push(t));
}, reset(t) {
  jt.view = t, jt.history = [t];
}, replace(t) {
  jt.history.length > 1 && (jt.history[jt.history.length - 1] = t, jt.view = t);
}, goBack() {
  if (jt.history.length > 1) {
    jt.history.pop();
    const [t] = jt.history.slice(-1);
    jt.view = t;
  }
}, setData(t) {
  jt.data = t;
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
  const e = (t = el.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Sf = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Gt = dn({ enabled: Sf, userSessionId: "", events: [], connectedWalletId: void 0 }), Df = { state: Gt, subscribe(t) {
  return Ln(Gt.events, () => t(Ef(Gt.events[Gt.events.length - 1])));
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
} }, kr = dn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Cr = { state: kr, subscribe(t) {
  return Ln(kr, () => t(kr));
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
} }, ss = dn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Gn = { state: ss, subscribe(t) {
  return Ln(ss, () => t(ss));
}, setConfig(t) {
  var e, r;
  Df.initialize(), Cr.setChains(t.chains), Cr.setIsAuth(!!t.enableAuthMode), Cr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Cr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Jt.setModalVersionInStorage(), Object.assign(ss, t);
} };
var xf = Object.defineProperty, Ja = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable, Xa = (t, e, r) => e in t ? xf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cf = (t, e) => {
  for (var r in e || (e = {}))
    Of.call(e, r) && Xa(t, r, e[r]);
  if (Ja)
    for (var r of Ja(e))
      If.call(e, r) && Xa(t, r, e[r]);
  return t;
};
const Ro = "https://explorer-api.walletconnect.com", To = "wcm", Ao = "js-2.6.2";
async function os(t, e) {
  const r = Cf({ sdkType: To, sdkVersion: Ao }, e), n = new URL(t, Ro);
  return n.searchParams.append("projectId", Gn.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const bn = { async getDesktopListings(t) {
  return os("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return os("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return os("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return os("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Ro}/w3m/v1/getWalletImage/${t}?projectId=${Gn.state.projectId}&sdkType=${To}&sdkVersion=${Ao}`;
}, getAssetImageUrl(t) {
  return `${Ro}/w3m/v1/getAssetImage/${t}?projectId=${Gn.state.projectId}&sdkType=${To}&sdkVersion=${Ao}`;
} };
var Rf = Object.defineProperty, ec = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Af = Object.prototype.propertyIsEnumerable, tc = (t, e, r) => e in t ? Rf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Nf = (t, e) => {
  for (var r in e || (e = {}))
    Tf.call(e, r) && tc(t, r, e[r]);
  if (ec)
    for (var r of ec(e))
      Af.call(e, r) && tc(t, r, e[r]);
  return t;
};
const rc = Jt.isMobile(), $r = dn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), b1 = { state: $r, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Gn.state;
  if (t === "NONE" || e === "ALL" && !t)
    return $r.recomendedWallets;
  if (Jt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await bn.getAllListings(r), i = Object.values(n);
    i.sort((s, a) => {
      const o = t.indexOf(s.id), u = t.indexOf(a.id);
      return o - u;
    }), $r.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Cr.state, i = r == null ? void 0 : r.join(","), s = Jt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Jt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: o } = rc ? await bn.getMobileListings(a) : await bn.getDesktopListings(a);
    $r.recomendedWallets = Object.values(o);
  }
  return $r.recomendedWallets;
}, async getWallets(t) {
  const e = Nf({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Gn.state, { recomendedWallets: i } = $r;
  if (n === "ALL")
    return $r.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : Jt.isArray(r) && (e.excludedIds = r.join(",")), Jt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Cr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: a } = t, { listings: o, total: u } = rc ? await bn.getMobileListings(e) : await bn.getDesktopListings(e), h = Object.values(o), f = a ? "search" : "wallets";
  return $r[f] = { listings: [...$r[f].listings, ...h], total: u, page: s ?? 1 }, { listings: h, total: u };
}, getWalletImageUrl(t) {
  return bn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return bn.getAssetImageUrl(t);
}, resetSearch() {
  $r.search = { listings: [], total: 0, page: 1 };
} }, kn = dn({ open: !1 }), oo = { state: kn, subscribe(t) {
  return Ln(kn, () => t(kn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Cr.state;
    if (Jt.removeWalletConnectDeepLink(), Cr.setWalletConnectUri(t == null ? void 0 : t.uri), Cr.setChains(t == null ? void 0 : t.chains), el.reset("ConnectWallet"), r && n)
      kn.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = Cr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), kn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  kn.open = !1;
} };
var Pf = Object.defineProperty, nc = Object.getOwnPropertySymbols, Lf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, ic = (t, e, r) => e in t ? Pf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uf = (t, e) => {
  for (var r in e || (e = {}))
    Lf.call(e, r) && ic(t, r, e[r]);
  if (nc)
    for (var r of nc(e))
      Ff.call(e, r) && ic(t, r, e[r]);
  return t;
};
function Mf() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const oi = dn({ themeMode: Mf() ? "dark" : "light" }), sc = { state: oi, subscribe(t) {
  return Ln(oi, () => t(oi));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (oi.themeMode = e), r && (oi.themeVariables = Uf({}, r));
} }, _n = dn({ open: !1, message: "", variant: "success" }), _1 = { state: _n, subscribe(t) {
  return Ln(_n, () => t(_n));
}, openToast(t, e) {
  _n.open = !0, _n.message = t, _n.variant = e;
}, closeToast() {
  _n.open = !1;
} };
let jf = class {
  constructor(e) {
    this.openModal = oo.open, this.closeModal = oo.close, this.subscribeModal = oo.subscribe, this.setTheme = sc.setThemeConfig, sc.setThemeConfig(e), Gn.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-97c8df57.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Cr.setIsUiLoaded(!0);
    }
  }
};
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ms(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fa(t) {
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
var da = { exports: {} }, Kn = typeof Reflect == "object" ? Reflect : null, oc = Kn && typeof Kn.apply == "function" ? Kn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, ds;
Kn && typeof Kn.ownKeys == "function" ? ds = Kn.ownKeys : Object.getOwnPropertySymbols ? ds = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : ds = function(e) {
  return Object.getOwnPropertyNames(e);
};
function kf(t) {
  console && console.warn && console.warn(t);
}
var tl = Number.isNaN || function(e) {
  return e !== e;
};
function at() {
  at.init.call(this);
}
da.exports = at;
da.exports.once = Bf;
at.EventEmitter = at;
at.prototype._events = void 0;
at.prototype._eventsCount = 0;
at.prototype._maxListeners = void 0;
var ac = 10;
function js(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(at, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ac;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || tl(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    ac = t;
  }
});
at.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
at.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || tl(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function rl(t) {
  return t._maxListeners === void 0 ? at.defaultMaxListeners : t._maxListeners;
}
at.prototype.getMaxListeners = function() {
  return rl(this);
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
    oc(u, this, r);
  else
    for (var h = u.length, f = al(u, h), n = 0; n < h; ++n)
      oc(f[n], this, r);
  return !0;
};
function nl(t, e, r, n) {
  var i, s, a;
  if (js(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), a = s[e]), a === void 0)
    a = s[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = s[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = rl(t), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, kf(o);
  }
  return t;
}
at.prototype.addListener = function(e, r) {
  return nl(this, e, r, !1);
};
at.prototype.on = at.prototype.addListener;
at.prototype.prependListener = function(e, r) {
  return nl(this, e, r, !0);
};
function $f() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function il(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = $f.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
at.prototype.once = function(e, r) {
  return js(r), this.on(e, il(this, e, r)), this;
};
at.prototype.prependOnceListener = function(e, r) {
  return js(r), this.prependListener(e, il(this, e, r)), this;
};
at.prototype.removeListener = function(e, r) {
  var n, i, s, a, o;
  if (js(r), i = this._events, i === void 0)
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
function sl(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? zf(i) : al(i, i.length);
}
at.prototype.listeners = function(e) {
  return sl(this, e, !0);
};
at.prototype.rawListeners = function(e) {
  return sl(this, e, !1);
};
at.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : ol.call(t, e);
};
at.prototype.listenerCount = ol;
function ol(t) {
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
  return this._eventsCount > 0 ? ds(this._events) : [];
};
function al(t, e) {
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
    cl(t, e, s, { once: !0 }), e !== "error" && Vf(t, i, { once: !0 });
  });
}
function Vf(t, e, r) {
  typeof t.on == "function" && cl(t, "error", e, r);
}
function cl(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Dr = da.exports;
const $i = /* @__PURE__ */ Ms(Dr);
var as = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function cs(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ul = { exports: {} };
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
      function a(h, f) {
        if (!i[h]) {
          if (!n[h]) {
            var d = typeof cs == "function" && cs;
            if (!f && d)
              return d(h, !0);
            if (o)
              return o(h, !0);
            var y = new Error("Cannot find module '" + h + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var b = i[h] = { exports: {} };
          n[h][0].call(b.exports, function(E) {
            var x = n[h][1][E];
            return a(x || E);
          }, b, b.exports, r, n, i, s);
        }
        return i[h].exports;
      }
      for (var o = typeof cs == "function" && cs, u = 0; u < s.length; u++)
        a(s[u]);
      return a;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var a = s.MutationObserver || s.WebKitMutationObserver, o;
        if (a) {
          var u = 0, h = new a(E), f = s.document.createTextNode("");
          h.observe(f, { characterData: !0 }), o = function() {
            f.data = u = ++u % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = E, o = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? o = function() {
            var D = s.document.createElement("script");
            D.onreadystatechange = function() {
              E(), D.onreadystatechange = null, D.parentNode.removeChild(D), D = null;
            }, s.document.documentElement.appendChild(D);
          } : o = function() {
            setTimeout(E, 0);
          };
        var y, b = [];
        function E() {
          y = !0;
          for (var D, M, w = b.length; w; ) {
            for (M = b, b = [], D = -1; ++D < w; )
              M[D]();
            w = b.length;
          }
          y = !1;
        }
        n.exports = x;
        function x(D) {
          b.push(D) === 1 && !y && o();
        }
      }).call(this, typeof as < "u" ? as : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function a() {
      }
      var o = {}, u = ["REJECTED"], h = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(v) {
        if (typeof v != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, v !== a && x(this, v);
      }
      d.prototype.catch = function(v) {
        return this.then(null, v);
      }, d.prototype.then = function(v, p) {
        if (typeof v != "function" && this.state === h || typeof p != "function" && this.state === u)
          return this;
        var c = new this.constructor(a);
        if (this.state !== f) {
          var g = this.state === h ? v : p;
          b(c, g, this.outcome);
        } else
          this.queue.push(new y(c, v, p));
        return c;
      };
      function y(v, p, c) {
        this.promise = v, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof c == "function" && (this.onRejected = c, this.callRejected = this.otherCallRejected);
      }
      y.prototype.callFulfilled = function(v) {
        o.resolve(this.promise, v);
      }, y.prototype.otherCallFulfilled = function(v) {
        b(this.promise, this.onFulfilled, v);
      }, y.prototype.callRejected = function(v) {
        o.reject(this.promise, v);
      }, y.prototype.otherCallRejected = function(v) {
        b(this.promise, this.onRejected, v);
      };
      function b(v, p, c) {
        s(function() {
          var g;
          try {
            g = p(c);
          } catch (A) {
            return o.reject(v, A);
          }
          g === v ? o.reject(v, new TypeError("Cannot resolve promise with itself")) : o.resolve(v, g);
        });
      }
      o.resolve = function(v, p) {
        var c = D(E, p);
        if (c.status === "error")
          return o.reject(v, c.value);
        var g = c.value;
        if (g)
          x(v, g);
        else {
          v.state = h, v.outcome = p;
          for (var A = -1, F = v.queue.length; ++A < F; )
            v.queue[A].callFulfilled(p);
        }
        return v;
      }, o.reject = function(v, p) {
        v.state = u, v.outcome = p;
        for (var c = -1, g = v.queue.length; ++c < g; )
          v.queue[c].callRejected(p);
        return v;
      };
      function E(v) {
        var p = v && v.then;
        if (v && (typeof v == "object" || typeof v == "function") && typeof p == "function")
          return function() {
            p.apply(v, arguments);
          };
      }
      function x(v, p) {
        var c = !1;
        function g(G) {
          c || (c = !0, o.reject(v, G));
        }
        function A(G) {
          c || (c = !0, o.resolve(v, G));
        }
        function F() {
          p(A, g);
        }
        var B = D(F);
        B.status === "error" && g(B.value);
      }
      function D(v, p) {
        var c = {};
        try {
          c.value = v(p), c.status = "success";
        } catch (g) {
          c.status = "error", c.value = g;
        }
        return c;
      }
      d.resolve = M;
      function M(v) {
        return v instanceof this ? v : o.resolve(new this(a), v);
      }
      d.reject = w;
      function w(v) {
        var p = new this(a);
        return o.reject(p, v);
      }
      d.all = R;
      function R(v) {
        var p = this;
        if (Object.prototype.toString.call(v) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = v.length, g = !1;
        if (!c)
          return this.resolve([]);
        for (var A = new Array(c), F = 0, B = -1, G = new this(a); ++B < c; )
          ee(v[B], B);
        return G;
        function ee(N, $) {
          p.resolve(N).then(se, function(Z) {
            g || (g = !0, o.reject(G, Z));
          });
          function se(Z) {
            A[$] = Z, ++F === c && !g && (g = !0, o.resolve(G, A));
          }
        }
      }
      d.race = _;
      function _(v) {
        var p = this;
        if (Object.prototype.toString.call(v) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = v.length, g = !1;
        if (!c)
          return this.resolve([]);
        for (var A = -1, F = new this(a); ++A < c; )
          B(v[A]);
        return F;
        function B(G) {
          p.resolve(G).then(function(ee) {
            g || (g = !0, o.resolve(F, ee));
          }, function(ee) {
            g || (g = !0, o.reject(F, ee));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof as < "u" ? as : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
        return typeof m;
      } : function(m) {
        return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
      };
      function a(m, I) {
        if (!(m instanceof I))
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
      function h() {
        try {
          if (!u || !u.open)
            return !1;
          var m = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), I = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!m || I) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(m, I) {
        m = m || [], I = I || {};
        try {
          return new Blob(m, I);
        } catch (k) {
          if (k.name !== "TypeError")
            throw k;
          for (var O = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, j = new O(), P = 0; P < m.length; P += 1)
            j.append(m[P]);
          return j.getBlob(I.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function y(m, I) {
        I && m.then(function(O) {
          I(null, O);
        }, function(O) {
          I(O);
        });
      }
      function b(m, I, O) {
        typeof I == "function" && m.then(I), typeof O == "function" && m.catch(O);
      }
      function E(m) {
        return typeof m != "string" && (console.warn(m + " used as a key, but it is not a string."), m = String(m)), m;
      }
      function x() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var D = "local-forage-detect-blob-support", M = void 0, w = {}, R = Object.prototype.toString, _ = "readonly", v = "readwrite";
      function p(m) {
        for (var I = m.length, O = new ArrayBuffer(I), j = new Uint8Array(O), P = 0; P < I; P++)
          j[P] = m.charCodeAt(P);
        return O;
      }
      function c(m) {
        return new d(function(I) {
          var O = m.transaction(D, v), j = f([""]);
          O.objectStore(D).put(j, "key"), O.onabort = function(P) {
            P.preventDefault(), P.stopPropagation(), I(!1);
          }, O.oncomplete = function() {
            var P = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
            I(k || !P || parseInt(P[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function g(m) {
        return typeof M == "boolean" ? d.resolve(M) : c(m).then(function(I) {
          return M = I, M;
        });
      }
      function A(m) {
        var I = w[m.name], O = {};
        O.promise = new d(function(j, P) {
          O.resolve = j, O.reject = P;
        }), I.deferredOperations.push(O), I.dbReady ? I.dbReady = I.dbReady.then(function() {
          return O.promise;
        }) : I.dbReady = O.promise;
      }
      function F(m) {
        var I = w[m.name], O = I.deferredOperations.pop();
        if (O)
          return O.resolve(), O.promise;
      }
      function B(m, I) {
        var O = w[m.name], j = O.deferredOperations.pop();
        if (j)
          return j.reject(I), j.promise;
      }
      function G(m, I) {
        return new d(function(O, j) {
          if (w[m.name] = w[m.name] || we(), m.db)
            if (I)
              A(m), m.db.close();
            else
              return O(m.db);
          var P = [m.name];
          I && P.push(m.version);
          var k = u.open.apply(u, P);
          I && (k.onupgradeneeded = function(V) {
            var X = k.result;
            try {
              X.createObjectStore(m.storeName), V.oldVersion <= 1 && X.createObjectStore(D);
            } catch (ie) {
              if (ie.name === "ConstraintError")
                console.warn('The database "' + m.name + '" has been upgraded from version ' + V.oldVersion + " to version " + V.newVersion + ', but the storage "' + m.storeName + '" already exists.');
              else
                throw ie;
            }
          }), k.onerror = function(V) {
            V.preventDefault(), j(k.error);
          }, k.onsuccess = function() {
            var V = k.result;
            V.onversionchange = function(X) {
              X.target.close();
            }, O(V), F(m);
          };
        });
      }
      function ee(m) {
        return G(m, !1);
      }
      function N(m) {
        return G(m, !0);
      }
      function $(m, I) {
        if (!m.db)
          return !0;
        var O = !m.db.objectStoreNames.contains(m.storeName), j = m.version < m.db.version, P = m.version > m.db.version;
        if (j && (m.version !== I && console.warn('The database "' + m.name + `" can't be downgraded from version ` + m.db.version + " to version " + m.version + "."), m.version = m.db.version), P || O) {
          if (O) {
            var k = m.db.version + 1;
            k > m.version && (m.version = k);
          }
          return !0;
        }
        return !1;
      }
      function se(m) {
        return new d(function(I, O) {
          var j = new FileReader();
          j.onerror = O, j.onloadend = function(P) {
            var k = btoa(P.target.result || "");
            I({ __local_forage_encoded_blob: !0, data: k, type: m.type });
          }, j.readAsBinaryString(m);
        });
      }
      function Z(m) {
        var I = p(atob(m.data));
        return f([I], { type: m.type });
      }
      function W(m) {
        return m && m.__local_forage_encoded_blob;
      }
      function Y(m) {
        var I = this, O = I._initReady().then(function() {
          var j = w[I._dbInfo.name];
          if (j && j.dbReady)
            return j.dbReady;
        });
        return b(O, m, m), O;
      }
      function H(m) {
        A(m);
        for (var I = w[m.name], O = I.forages, j = 0; j < O.length; j++) {
          var P = O[j];
          P._dbInfo.db && (P._dbInfo.db.close(), P._dbInfo.db = null);
        }
        return m.db = null, ee(m).then(function(k) {
          return m.db = k, $(m) ? N(m) : k;
        }).then(function(k) {
          m.db = I.db = k;
          for (var V = 0; V < O.length; V++)
            O[V]._dbInfo.db = k;
        }).catch(function(k) {
          throw B(m, k), k;
        });
      }
      function J(m, I, O, j) {
        j === void 0 && (j = 1);
        try {
          var P = m.db.transaction(m.storeName, I);
          O(null, P);
        } catch (k) {
          if (j > 0 && (!m.db || k.name === "InvalidStateError" || k.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!m.db || k.name === "NotFoundError" && !m.db.objectStoreNames.contains(m.storeName) && m.version <= m.db.version)
                return m.db && (m.version = m.db.version + 1), N(m);
            }).then(function() {
              return H(m).then(function() {
                J(m, I, O, j - 1);
              });
            }).catch(O);
          O(k);
        }
      }
      function we() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function re(m) {
        var I = this, O = { db: null };
        if (m)
          for (var j in m)
            O[j] = m[j];
        var P = w[O.name];
        P || (P = we(), w[O.name] = P), P.forages.push(I), I._initReady || (I._initReady = I.ready, I.ready = Y);
        var k = [];
        function V() {
          return d.resolve();
        }
        for (var X = 0; X < P.forages.length; X++) {
          var ie = P.forages[X];
          ie !== I && k.push(ie._initReady().catch(V));
        }
        var ne = P.forages.slice(0);
        return d.all(k).then(function() {
          return O.db = P.db, ee(O);
        }).then(function(te) {
          return O.db = te, $(O, I._defaultConfig.version) ? N(O) : te;
        }).then(function(te) {
          O.db = P.db = te, I._dbInfo = O;
          for (var ye = 0; ye < ne.length; ye++) {
            var Ve = ne[ye];
            Ve !== I && (Ve._dbInfo.db = O.db, Ve._dbInfo.version = O.version);
          }
        });
      }
      function be(m, I) {
        var O = this;
        m = E(m);
        var j = new d(function(P, k) {
          O.ready().then(function() {
            J(O._dbInfo, _, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.get(m);
                ne.onsuccess = function() {
                  var te = ne.result;
                  te === void 0 && (te = null), W(te) && (te = Z(te)), P(te);
                }, ne.onerror = function() {
                  k(ne.error);
                };
              } catch (te) {
                k(te);
              }
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function he(m, I) {
        var O = this, j = new d(function(P, k) {
          O.ready().then(function() {
            J(O._dbInfo, _, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.openCursor(), te = 1;
                ne.onsuccess = function() {
                  var ye = ne.result;
                  if (ye) {
                    var Ve = ye.value;
                    W(Ve) && (Ve = Z(Ve));
                    var st = m(Ve, ye.key, te++);
                    st !== void 0 ? P(st) : ye.continue();
                  } else
                    P();
                }, ne.onerror = function() {
                  k(ne.error);
                };
              } catch (ye) {
                k(ye);
              }
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function me(m, I, O) {
        var j = this;
        m = E(m);
        var P = new d(function(k, V) {
          var X;
          j.ready().then(function() {
            return X = j._dbInfo, R.call(I) === "[object Blob]" ? g(X.db).then(function(ie) {
              return ie ? I : se(I);
            }) : I;
          }).then(function(ie) {
            J(j._dbInfo, v, function(ne, te) {
              if (ne)
                return V(ne);
              try {
                var ye = te.objectStore(j._dbInfo.storeName);
                ie === null && (ie = void 0);
                var Ve = ye.put(ie, m);
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
        return y(P, O), P;
      }
      function z(m, I) {
        var O = this;
        m = E(m);
        var j = new d(function(P, k) {
          O.ready().then(function() {
            J(O._dbInfo, v, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.delete(m);
                X.oncomplete = function() {
                  P();
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
        return y(j, I), j;
      }
      function q(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            J(I._dbInfo, v, function(k, V) {
              if (k)
                return P(k);
              try {
                var X = V.objectStore(I._dbInfo.storeName), ie = X.clear();
                V.oncomplete = function() {
                  j();
                }, V.onabort = V.onerror = function() {
                  var ne = ie.error ? ie.error : ie.transaction.error;
                  P(ne);
                };
              } catch (ne) {
                P(ne);
              }
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function L(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            J(I._dbInfo, _, function(k, V) {
              if (k)
                return P(k);
              try {
                var X = V.objectStore(I._dbInfo.storeName), ie = X.count();
                ie.onsuccess = function() {
                  j(ie.result);
                }, ie.onerror = function() {
                  P(ie.error);
                };
              } catch (ne) {
                P(ne);
              }
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function l(m, I) {
        var O = this, j = new d(function(P, k) {
          if (m < 0) {
            P(null);
            return;
          }
          O.ready().then(function() {
            J(O._dbInfo, _, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = !1, te = ie.openKeyCursor();
                te.onsuccess = function() {
                  var ye = te.result;
                  if (!ye) {
                    P(null);
                    return;
                  }
                  m === 0 || ne ? P(ye.key) : (ne = !0, ye.advance(m));
                }, te.onerror = function() {
                  k(te.error);
                };
              } catch (ye) {
                k(ye);
              }
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function T(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            J(I._dbInfo, _, function(k, V) {
              if (k)
                return P(k);
              try {
                var X = V.objectStore(I._dbInfo.storeName), ie = X.openKeyCursor(), ne = [];
                ie.onsuccess = function() {
                  var te = ie.result;
                  if (!te) {
                    j(ne);
                    return;
                  }
                  ne.push(te.key), te.continue();
                }, ie.onerror = function() {
                  P(ie.error);
                };
              } catch (te) {
                P(te);
              }
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function oe(m, I) {
        I = x.apply(this, arguments);
        var O = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || O.name, m.storeName = m.storeName || O.storeName);
        var j = this, P;
        if (!m.name)
          P = d.reject("Invalid arguments");
        else {
          var k = m.name === O.name && j._dbInfo.db, V = k ? d.resolve(j._dbInfo.db) : ee(m).then(function(X) {
            var ie = w[m.name], ne = ie.forages;
            ie.db = X;
            for (var te = 0; te < ne.length; te++)
              ne[te]._dbInfo.db = X;
            return X;
          });
          m.storeName ? P = V.then(function(X) {
            if (X.objectStoreNames.contains(m.storeName)) {
              var ie = X.version + 1;
              A(m);
              var ne = w[m.name], te = ne.forages;
              X.close();
              for (var ye = 0; ye < te.length; ye++) {
                var Ve = te[ye];
                Ve._dbInfo.db = null, Ve._dbInfo.version = ie;
              }
              var st = new d(function(et, pt) {
                var nt = u.open(m.name, ie);
                nt.onerror = function(lr) {
                  var ii = nt.result;
                  ii.close(), pt(lr);
                }, nt.onupgradeneeded = function() {
                  var lr = nt.result;
                  lr.deleteObjectStore(m.storeName);
                }, nt.onsuccess = function() {
                  var lr = nt.result;
                  lr.close(), et(lr);
                };
              });
              return st.then(function(et) {
                ne.db = et;
                for (var pt = 0; pt < te.length; pt++) {
                  var nt = te[pt];
                  nt._dbInfo.db = et, F(nt._dbInfo);
                }
              }).catch(function(et) {
                throw (B(m, et) || d.resolve()).catch(function() {
                }), et;
              });
            }
          }) : P = V.then(function(X) {
            A(m);
            var ie = w[m.name], ne = ie.forages;
            X.close();
            for (var te = 0; te < ne.length; te++) {
              var ye = ne[te];
              ye._dbInfo.db = null;
            }
            var Ve = new d(function(st, et) {
              var pt = u.deleteDatabase(m.name);
              pt.onerror = function() {
                var nt = pt.result;
                nt && nt.close(), et(pt.error);
              }, pt.onblocked = function() {
                console.warn('dropInstance blocked for database "' + m.name + '" until all open connections are closed');
              }, pt.onsuccess = function() {
                var nt = pt.result;
                nt && nt.close(), st(nt);
              };
            });
            return Ve.then(function(st) {
              ie.db = st;
              for (var et = 0; et < ne.length; et++) {
                var pt = ne[et];
                F(pt._dbInfo);
              }
            }).catch(function(st) {
              throw (B(m, st) || d.resolve()).catch(function() {
              }), st;
            });
          });
        }
        return y(P, I), P;
      }
      var le = { _driver: "asyncStorage", _initStorage: re, _support: h(), iterate: he, getItem: be, setItem: me, removeItem: z, clear: q, length: L, key: l, keys: T, dropInstance: oe };
      function ke() {
        return typeof openDatabase == "function";
      }
      var xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ae = "~~local_forage_type~", We = /^~~local_forage_type~([^~]+)~/, it = "__lfsc__:", rt = it.length, $e = "arbf", Fe = "blob", Re = "si08", Ne = "ui08", Te = "uic8", Ie = "si16", Oe = "si32", _e = "ur16", Pe = "ui32", Ue = "fl32", Se = "fl64", qe = rt + $e.length, Ge = Object.prototype.toString;
      function Ze(m) {
        var I = m.length * 0.75, O = m.length, j, P = 0, k, V, X, ie;
        m[m.length - 1] === "=" && (I--, m[m.length - 2] === "=" && I--);
        var ne = new ArrayBuffer(I), te = new Uint8Array(ne);
        for (j = 0; j < O; j += 4)
          k = xe.indexOf(m[j]), V = xe.indexOf(m[j + 1]), X = xe.indexOf(m[j + 2]), ie = xe.indexOf(m[j + 3]), te[P++] = k << 2 | V >> 4, te[P++] = (V & 15) << 4 | X >> 2, te[P++] = (X & 3) << 6 | ie & 63;
        return ne;
      }
      function Qe(m) {
        var I = new Uint8Array(m), O = "", j;
        for (j = 0; j < I.length; j += 3)
          O += xe[I[j] >> 2], O += xe[(I[j] & 3) << 4 | I[j + 1] >> 4], O += xe[(I[j + 1] & 15) << 2 | I[j + 2] >> 6], O += xe[I[j + 2] & 63];
        return I.length % 3 === 2 ? O = O.substring(0, O.length - 1) + "=" : I.length % 3 === 1 && (O = O.substring(0, O.length - 2) + "=="), O;
      }
      function Ye(m, I) {
        var O = "";
        if (m && (O = Ge.call(m)), m && (O === "[object ArrayBuffer]" || m.buffer && Ge.call(m.buffer) === "[object ArrayBuffer]")) {
          var j, P = it;
          m instanceof ArrayBuffer ? (j = m, P += $e) : (j = m.buffer, O === "[object Int8Array]" ? P += Re : O === "[object Uint8Array]" ? P += Ne : O === "[object Uint8ClampedArray]" ? P += Te : O === "[object Int16Array]" ? P += Ie : O === "[object Uint16Array]" ? P += _e : O === "[object Int32Array]" ? P += Oe : O === "[object Uint32Array]" ? P += Pe : O === "[object Float32Array]" ? P += Ue : O === "[object Float64Array]" ? P += Se : I(new Error("Failed to get type for BinaryArray"))), I(P + Qe(j));
        } else if (O === "[object Blob]") {
          var k = new FileReader();
          k.onload = function() {
            var V = Ae + m.type + "~" + Qe(this.result);
            I(it + Fe + V);
          }, k.readAsArrayBuffer(m);
        } else
          try {
            I(JSON.stringify(m));
          } catch (V) {
            console.error("Couldn't convert value into a JSON string: ", m), I(null, V);
          }
      }
      function tr(m) {
        if (m.substring(0, rt) !== it)
          return JSON.parse(m);
        var I = m.substring(qe), O = m.substring(rt, qe), j;
        if (O === Fe && We.test(I)) {
          var P = I.match(We);
          j = P[1], I = I.substring(P[0].length);
        }
        var k = Ze(I);
        switch (O) {
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
          case Ue:
            return new Float32Array(k);
          case Se:
            return new Float64Array(k);
          default:
            throw new Error("Unkown type: " + O);
        }
      }
      var Ht = { serialize: Ye, deserialize: tr, stringToBuffer: Ze, bufferToString: Qe };
      function pr(m, I, O, j) {
        m.executeSql("CREATE TABLE IF NOT EXISTS " + I.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], O, j);
      }
      function Lt(m) {
        var I = this, O = { db: null };
        if (m)
          for (var j in m)
            O[j] = typeof m[j] != "string" ? m[j].toString() : m[j];
        var P = new d(function(k, V) {
          try {
            O.db = openDatabase(O.name, String(O.version), O.description, O.size);
          } catch (X) {
            return V(X);
          }
          O.db.transaction(function(X) {
            pr(X, O, function() {
              I._dbInfo = O, k();
            }, function(ie, ne) {
              V(ne);
            });
          }, V);
        });
        return O.serializer = Ht, P;
      }
      function Ft(m, I, O, j, P, k) {
        m.executeSql(O, j, P, function(V, X) {
          X.code === X.SYNTAX_ERR ? V.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [I.storeName], function(ie, ne) {
            ne.rows.length ? k(ie, X) : pr(ie, I, function() {
              ie.executeSql(O, j, P, k);
            }, k);
          }, k) : k(V, X);
        }, k);
      }
      function ur(m, I) {
        var O = this;
        m = E(m);
        var j = new d(function(P, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              Ft(X, V, "SELECT * FROM " + V.storeName + " WHERE key = ? LIMIT 1", [m], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).value : null;
                te && (te = V.serializer.deserialize(te)), P(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function Ur(m, I) {
        var O = this, j = new d(function(P, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              Ft(X, V, "SELECT * FROM " + V.storeName, [], function(ie, ne) {
                for (var te = ne.rows, ye = te.length, Ve = 0; Ve < ye; Ve++) {
                  var st = te.item(Ve), et = st.value;
                  if (et && (et = V.serializer.deserialize(et)), et = m(et, st.key, Ve + 1), et !== void 0) {
                    P(et);
                    return;
                  }
                }
                P();
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function ct(m, I, O, j) {
        var P = this;
        m = E(m);
        var k = new d(function(V, X) {
          P.ready().then(function() {
            I === void 0 && (I = null);
            var ie = I, ne = P._dbInfo;
            ne.serializer.serialize(I, function(te, ye) {
              ye ? X(ye) : ne.db.transaction(function(Ve) {
                Ft(Ve, ne, "INSERT OR REPLACE INTO " + ne.storeName + " (key, value) VALUES (?, ?)", [m, te], function() {
                  V(ie);
                }, function(st, et) {
                  X(et);
                });
              }, function(Ve) {
                if (Ve.code === Ve.QUOTA_ERR) {
                  if (j > 0) {
                    V(ct.apply(P, [m, ie, O, j - 1]));
                    return;
                  }
                  X(Ve);
                }
              });
            });
          }).catch(X);
        });
        return y(k, O), k;
      }
      function ut(m, I, O) {
        return ct.apply(this, [m, I, O, 1]);
      }
      function yt(m, I) {
        var O = this;
        m = E(m);
        var j = new d(function(P, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              Ft(X, V, "DELETE FROM " + V.storeName + " WHERE key = ?", [m], function() {
                P();
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function ft(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(V) {
              Ft(V, k, "DELETE FROM " + k.storeName, [], function() {
                j();
              }, function(X, ie) {
                P(ie);
              });
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function mt(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(V) {
              Ft(V, k, "SELECT COUNT(key) as c FROM " + k.storeName, [], function(X, ie) {
                var ne = ie.rows.item(0).c;
                j(ne);
              }, function(X, ie) {
                P(ie);
              });
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function lt(m, I) {
        var O = this, j = new d(function(P, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              Ft(X, V, "SELECT key FROM " + V.storeName + " WHERE id = ? LIMIT 1", [m + 1], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).key : null;
                P(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return y(j, I), j;
      }
      function St(m) {
        var I = this, O = new d(function(j, P) {
          I.ready().then(function() {
            var k = I._dbInfo;
            k.db.transaction(function(V) {
              Ft(V, k, "SELECT key FROM " + k.storeName, [], function(X, ie) {
                for (var ne = [], te = 0; te < ie.rows.length; te++)
                  ne.push(ie.rows.item(te).key);
                j(ne);
              }, function(X, ie) {
                P(ie);
              });
            });
          }).catch(P);
        });
        return y(O, m), O;
      }
      function It(m) {
        return new d(function(I, O) {
          m.transaction(function(j) {
            j.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(P, k) {
              for (var V = [], X = 0; X < k.rows.length; X++)
                V.push(k.rows.item(X).name);
              I({ db: m, storeNames: V });
            }, function(P, k) {
              O(k);
            });
          }, function(j) {
            O(j);
          });
        });
      }
      function Ct(m, I) {
        I = x.apply(this, arguments);
        var O = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || O.name, m.storeName = m.storeName || O.storeName);
        var j = this, P;
        return m.name ? P = new d(function(k) {
          var V;
          m.name === O.name ? V = j._dbInfo.db : V = openDatabase(m.name, "", "", 0), m.storeName ? k({ db: V, storeNames: [m.storeName] }) : k(It(V));
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
        }) : P = d.reject("Invalid arguments"), y(P, I), P;
      }
      var Dt = { _driver: "webSQLStorage", _initStorage: Lt, _support: ke(), iterate: Ur, getItem: ur, setItem: ut, removeItem: yt, clear: ft, length: mt, key: lt, keys: St, dropInstance: Ct };
      function Rt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function vt(m, I) {
        var O = m.name + "/";
        return m.storeName !== I.storeName && (O += m.storeName + "/"), O;
      }
      function bt() {
        var m = "_localforage_support_test";
        try {
          return localStorage.setItem(m, !0), localStorage.removeItem(m), !1;
        } catch {
          return !0;
        }
      }
      function ot() {
        return !bt() || localStorage.length > 0;
      }
      function C(m) {
        var I = this, O = {};
        if (m)
          for (var j in m)
            O[j] = m[j];
        return O.keyPrefix = vt(m, I._defaultConfig), ot() ? (I._dbInfo = O, O.serializer = Ht, d.resolve()) : d.reject();
      }
      function K(m) {
        var I = this, O = I.ready().then(function() {
          for (var j = I._dbInfo.keyPrefix, P = localStorage.length - 1; P >= 0; P--) {
            var k = localStorage.key(P);
            k.indexOf(j) === 0 && localStorage.removeItem(k);
          }
        });
        return y(O, m), O;
      }
      function ce(m, I) {
        var O = this;
        m = E(m);
        var j = O.ready().then(function() {
          var P = O._dbInfo, k = localStorage.getItem(P.keyPrefix + m);
          return k && (k = P.serializer.deserialize(k)), k;
        });
        return y(j, I), j;
      }
      function Ee(m, I) {
        var O = this, j = O.ready().then(function() {
          for (var P = O._dbInfo, k = P.keyPrefix, V = k.length, X = localStorage.length, ie = 1, ne = 0; ne < X; ne++) {
            var te = localStorage.key(ne);
            if (te.indexOf(k) === 0) {
              var ye = localStorage.getItem(te);
              if (ye && (ye = P.serializer.deserialize(ye)), ye = m(ye, te.substring(V), ie++), ye !== void 0)
                return ye;
            }
          }
        });
        return y(j, I), j;
      }
      function Je(m, I) {
        var O = this, j = O.ready().then(function() {
          var P = O._dbInfo, k;
          try {
            k = localStorage.key(m);
          } catch {
            k = null;
          }
          return k && (k = k.substring(P.keyPrefix.length)), k;
        });
        return y(j, I), j;
      }
      function Be(m) {
        var I = this, O = I.ready().then(function() {
          for (var j = I._dbInfo, P = localStorage.length, k = [], V = 0; V < P; V++) {
            var X = localStorage.key(V);
            X.indexOf(j.keyPrefix) === 0 && k.push(X.substring(j.keyPrefix.length));
          }
          return k;
        });
        return y(O, m), O;
      }
      function He(m) {
        var I = this, O = I.keys().then(function(j) {
          return j.length;
        });
        return y(O, m), O;
      }
      function ze(m, I) {
        var O = this;
        m = E(m);
        var j = O.ready().then(function() {
          var P = O._dbInfo;
          localStorage.removeItem(P.keyPrefix + m);
        });
        return y(j, I), j;
      }
      function Ut(m, I, O) {
        var j = this;
        m = E(m);
        var P = j.ready().then(function() {
          I === void 0 && (I = null);
          var k = I;
          return new d(function(V, X) {
            var ie = j._dbInfo;
            ie.serializer.serialize(I, function(ne, te) {
              if (te)
                X(te);
              else
                try {
                  localStorage.setItem(ie.keyPrefix + m, ne), V(k);
                } catch (ye) {
                  (ye.name === "QuotaExceededError" || ye.name === "NS_ERROR_DOM_QUOTA_REACHED") && X(ye), X(ye);
                }
            });
          });
        });
        return y(P, O), P;
      }
      function dt(m, I) {
        if (I = x.apply(this, arguments), m = typeof m != "function" && m || {}, !m.name) {
          var O = this.config();
          m.name = m.name || O.name, m.storeName = m.storeName || O.storeName;
        }
        var j = this, P;
        return m.name ? P = new d(function(k) {
          m.storeName ? k(vt(m, j._defaultConfig)) : k(m.name + "/");
        }).then(function(k) {
          for (var V = localStorage.length - 1; V >= 0; V--) {
            var X = localStorage.key(V);
            X.indexOf(k) === 0 && localStorage.removeItem(X);
          }
        }) : P = d.reject("Invalid arguments"), y(P, I), P;
      }
      var _t = { _driver: "localStorageWrapper", _initStorage: C, _support: Rt(), iterate: Ee, getItem: ce, setItem: Ut, removeItem: ze, clear: K, length: He, key: Je, keys: Be, dropInstance: dt }, Tt = function(m, I) {
        return m === I || typeof m == "number" && typeof I == "number" && isNaN(m) && isNaN(I);
      }, Mr = function(m, I) {
        for (var O = m.length, j = 0; j < O; ) {
          if (Tt(m[j], I))
            return !0;
          j++;
        }
        return !1;
      }, yn = Array.isArray || function(m) {
        return Object.prototype.toString.call(m) === "[object Array]";
      }, zt = {}, Xi = {}, rn = { INDEXEDDB: le, WEBSQL: Dt, LOCALSTORAGE: _t }, Mn = [rn.INDEXEDDB._driver, rn.WEBSQL._driver, rn.LOCALSTORAGE._driver], jn = ["dropInstance"], ri = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(jn), jr = { description: "", driver: Mn.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
      function Xs(m, I) {
        m[I] = function() {
          var O = arguments;
          return m.ready().then(function() {
            return m[I].apply(m, O);
          });
        };
      }
      function ni() {
        for (var m = 1; m < arguments.length; m++) {
          var I = arguments[m];
          if (I)
            for (var O in I)
              I.hasOwnProperty(O) && (yn(I[O]) ? arguments[0][O] = I[O].slice() : arguments[0][O] = I[O]);
        }
        return arguments[0];
      }
      var eo = function() {
        function m(I) {
          a(this, m);
          for (var O in rn)
            if (rn.hasOwnProperty(O)) {
              var j = rn[O], P = j._driver;
              this[O] = P, zt[P] || this.defineDriver(j);
            }
          this._defaultConfig = ni({}, jr), this._config = ni({}, this._defaultConfig, I), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return m.prototype.config = function(I) {
          if ((typeof I > "u" ? "undefined" : s(I)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var O in I) {
              if (O === "storeName" && (I[O] = I[O].replace(/\W/g, "_")), O === "version" && typeof I[O] != "number")
                return new Error("Database version must be a number.");
              this._config[O] = I[O];
            }
            return "driver" in I && I.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof I == "string" ? this._config[I] : this._config;
        }, m.prototype.defineDriver = function(I, O, j) {
          var P = new d(function(k, V) {
            try {
              var X = I._driver, ie = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!I._driver) {
                V(ie);
                return;
              }
              for (var ne = ri.concat("_initStorage"), te = 0, ye = ne.length; te < ye; te++) {
                var Ve = ne[te], st = !Mr(jn, Ve);
                if ((st || I[Ve]) && typeof I[Ve] != "function") {
                  V(ie);
                  return;
                }
              }
              var et = function() {
                for (var nt = function(ro) {
                  return function() {
                    var no = new Error("Method " + ro + " is not implemented by the current driver"), es = d.reject(no);
                    return y(es, arguments[arguments.length - 1]), es;
                  };
                }, lr = 0, ii = jn.length; lr < ii; lr++) {
                  var br = jn[lr];
                  I[br] || (I[br] = nt(br));
                }
              };
              et();
              var pt = function(nt) {
                zt[X] && console.info("Redefining LocalForage driver: " + X), zt[X] = I, Xi[X] = nt, k();
              };
              "_support" in I ? I._support && typeof I._support == "function" ? I._support().then(pt, V) : pt(!!I._support) : pt(!0);
            } catch (nt) {
              V(nt);
            }
          });
          return b(P, O, j), P;
        }, m.prototype.driver = function() {
          return this._driver || null;
        }, m.prototype.getDriver = function(I, O, j) {
          var P = zt[I] ? d.resolve(zt[I]) : d.reject(new Error("Driver not found."));
          return b(P, O, j), P;
        }, m.prototype.getSerializer = function(I) {
          var O = d.resolve(Ht);
          return b(O, I), O;
        }, m.prototype.ready = function(I) {
          var O = this, j = O._driverSet.then(function() {
            return O._ready === null && (O._ready = O._initDriver()), O._ready;
          });
          return b(j, I, I), j;
        }, m.prototype.setDriver = function(I, O, j) {
          var P = this;
          yn(I) || (I = [I]);
          var k = this._getSupportedDrivers(I);
          function V() {
            P._config.driver = P.driver();
          }
          function X(te) {
            return P._extend(te), V(), P._ready = P._initStorage(P._config), P._ready;
          }
          function ie(te) {
            return function() {
              var ye = 0;
              function Ve() {
                for (; ye < te.length; ) {
                  var st = te[ye];
                  return ye++, P._dbInfo = null, P._ready = null, P.getDriver(st).then(X).catch(Ve);
                }
                V();
                var et = new Error("No available storage method found.");
                return P._driverSet = d.reject(et), P._driverSet;
              }
              return Ve();
            };
          }
          var ne = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = ne.then(function() {
            var te = k[0];
            return P._dbInfo = null, P._ready = null, P.getDriver(te).then(function(ye) {
              P._driver = ye._driver, V(), P._wrapLibraryMethodsWithReady(), P._initDriver = ie(k);
            });
          }).catch(function() {
            V();
            var te = new Error("No available storage method found.");
            return P._driverSet = d.reject(te), P._driverSet;
          }), b(this._driverSet, O, j), this._driverSet;
        }, m.prototype.supports = function(I) {
          return !!Xi[I];
        }, m.prototype._extend = function(I) {
          ni(this, I);
        }, m.prototype._getSupportedDrivers = function(I) {
          for (var O = [], j = 0, P = I.length; j < P; j++) {
            var k = I[j];
            this.supports(k) && O.push(k);
          }
          return O;
        }, m.prototype._wrapLibraryMethodsWithReady = function() {
          for (var I = 0, O = ri.length; I < O; I++)
            Xs(this, ri[I]);
        }, m.prototype.createInstance = function(I) {
          return new m(I);
        }, m;
      }(), to = new eo();
      n.exports = to;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(ul);
var Hf = ul.exports, ai = Kf(Hf);
class Wf {
  constructor() {
    this.getKeys = async () => await ai.keys(), this.getEntries = async () => {
      let e = [];
      return (await this.getKeys()).forEach(async (r) => e.push(await ai.getItem(r))), e;
    }, this.getItem = async (e) => await ai.getItem(e) ?? void 0, this.setItem = async (e, r) => {
      await ai.setItem(e, r);
    }, this.removeItem = async (e) => {
      await ai.removeItem(e);
    };
  }
}
let Gf = class {
  constructor() {
    const e = new Wf();
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
var No = function(t, e) {
  return No = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, No(t, e);
};
function Qf(t, e) {
  No(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Po = function() {
  return Po = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Po.apply(this, arguments);
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
        h(n.next(f));
      } catch (d) {
        a(d);
      }
    }
    function u(f) {
      try {
        h(n.throw(f));
      } catch (d) {
        a(d);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(o, u);
    }
    h((n = n.apply(t, e || [])).next());
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
  function o(h) {
    return function(f) {
      return u([h, f]);
    };
  }
  function u(h) {
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
function rd(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function nd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Lo(t) {
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
function ll(t, e) {
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
    t = t.concat(ll(arguments[e]));
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
function Si(t) {
  return this instanceof Si ? (this.v = t, this) : new Si(t);
}
function od(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(b) {
      return new Promise(function(E, x) {
        s.push([y, b, E, x]) > 1 || o(y, b);
      });
    });
  }
  function o(y, b) {
    try {
      u(n[y](b));
    } catch (E) {
      d(s[0][3], E);
    }
  }
  function u(y) {
    y.value instanceof Si ? Promise.resolve(y.value.v).then(h, f) : d(s[0][2], y);
  }
  function h(y) {
    o("next", y);
  }
  function f(y) {
    o("throw", y);
  }
  function d(y, b) {
    y(b), s.shift(), s.length && o(s[0][0], s[0][1]);
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
      return (r = !r) ? { value: Si(t[i](a)), done: i === "return" } : s ? s(a) : a;
    } : s;
  }
}
function cd(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Lo == "function" ? Lo(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
    Promise.resolve(u).then(function(h) {
      s({ value: h, done: o });
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
    return Po;
  },
  __asyncDelegator: ad,
  __asyncGenerator: od,
  __asyncValues: cd,
  __await: Si,
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
  __read: ll,
  __rest: Zf,
  __spread: id,
  __spreadArrays: sd,
  __values: Lo
}, Symbol.toStringTag, { value: "Module" })), Wr = /* @__PURE__ */ fa(pd);
var ci = {}, ge = {}, ao = {}, ui = {}, cc;
function gd() {
  if (cc)
    return ui;
  cc = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return ui.delay = t, ui;
}
var wn = {}, co = {}, En = {}, uc;
function yd() {
  return uc || (uc = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.ONE_THOUSAND = En.ONE_HUNDRED = void 0, En.ONE_HUNDRED = 100, En.ONE_THOUSAND = 1e3), En;
}
var uo = {}, lc;
function md() {
  return lc || (lc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(uo)), uo;
}
var hc;
function hl() {
  return hc || (hc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Wr;
    e.__exportStar(yd(), t), e.__exportStar(md(), t);
  }(co)), co;
}
var fc;
function vd() {
  if (fc)
    return wn;
  fc = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.fromMiliseconds = wn.toMiliseconds = void 0;
  const t = hl();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  wn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return wn.fromMiliseconds = r, wn;
}
var dc;
function bd() {
  return dc || (dc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Wr;
    e.__exportStar(gd(), t), e.__exportStar(vd(), t);
  }(ao)), ao;
}
var $n = {}, pc;
function _d() {
  if (pc)
    return $n;
  pc = 1, Object.defineProperty($n, "__esModule", { value: !0 }), $n.Watch = void 0;
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
  return $n.Watch = t, $n.default = t, $n;
}
var lo = {}, li = {}, gc;
function wd() {
  if (gc)
    return li;
  gc = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.IWatch = void 0;
  class t {
  }
  return li.IWatch = t, li;
}
var yc;
function Ed() {
  return yc || (yc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Wr.__exportStar(wd(), t);
  }(lo)), lo;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Wr;
  e.__exportStar(bd(), t), e.__exportStar(_d(), t), e.__exportStar(Ed(), t), e.__exportStar(hl(), t);
})(ge);
var ho = {}, hi = {};
let mr = class {
};
const Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: mr
}, Symbol.toStringTag, { value: "Module" })), Dd = /* @__PURE__ */ fa(Sd);
var mc;
function xd() {
  if (mc)
    return hi;
  mc = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.IHeartBeat = void 0;
  const t = Dd;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return hi.IHeartBeat = e, hi;
}
var vc;
function fl() {
  return vc || (vc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Wr.__exportStar(xd(), t);
  }(ho)), ho;
}
var fo = {}, Sn = {}, bc;
function Od() {
  if (bc)
    return Sn;
  bc = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.HEARTBEAT_EVENTS = Sn.HEARTBEAT_INTERVAL = void 0;
  const t = ge;
  return Sn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Sn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Sn;
}
var _c;
function dl() {
  return _c || (_c = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Wr.__exportStar(Od(), t);
  }(fo)), fo;
}
var wc;
function Id() {
  if (wc)
    return ci;
  wc = 1, Object.defineProperty(ci, "__esModule", { value: !0 }), ci.HeartBeat = void 0;
  const t = Wr, e = Dr, r = ge, n = fl(), i = dl();
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
  return ci.HeartBeat = s, ci;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Wr;
  e.__exportStar(Id(), t), e.__exportStar(fl(), t), e.__exportStar(dl(), t);
})(Jn);
var Xe = {}, po, Ec;
function Cd() {
  if (Ec)
    return po;
  Ec = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  po = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = s(r);
      for (var h = 1; h < o; h++)
        u[h] = s(n[h]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", y = 1 - a, b = -1, E = r && r.length || 0, x = 0; x < E; ) {
      if (r.charCodeAt(x) === 37 && x + 1 < E) {
        switch (b = b > -1 ? b : 0, r.charCodeAt(x + 1)) {
          case 100:
          case 102:
            if (y >= f || n[y] == null)
              break;
            b < x && (d += r.slice(b, x)), d += Number(n[y]), b = x + 2, x++;
            break;
          case 105:
            if (y >= f || n[y] == null)
              break;
            b < x && (d += r.slice(b, x)), d += Math.floor(Number(n[y])), b = x + 2, x++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || n[y] === void 0)
              break;
            b < x && (d += r.slice(b, x));
            var D = typeof n[y];
            if (D === "string") {
              d += "'" + n[y] + "'", b = x + 2, x++;
              break;
            }
            if (D === "function") {
              d += n[y].name || "<anonymous>", b = x + 2, x++;
              break;
            }
            d += s(n[y]), b = x + 2, x++;
            break;
          case 115:
            if (y >= f)
              break;
            b < x && (d += r.slice(b, x)), d += String(n[y]), b = x + 2, x++;
            break;
          case 37:
            b < x && (d += r.slice(b, x)), d += "%", b = x + 2, x++, y--;
            break;
        }
        ++y;
      }
      ++x;
    }
    return b === -1 ? r : (b < E && (d += r.slice(b)), d);
  }
  return po;
}
var go, Sc;
function Rd() {
  if (Sc)
    return go;
  Sc = 1;
  const t = Cd();
  go = i;
  const e = v().console || {}, r = {
    mapHttpRequest: E,
    mapHttpResponse: E,
    wrapRequestSerializer: x,
    wrapResponseSerializer: x,
    wrapErrorSerializer: x,
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
    const A = p.serializers || {}, F = n(p.browser.serialize, A);
    let B = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (B = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const ee = p.level || "info", N = Object.create(g);
    N.log || (N.log = D), Object.defineProperty(N, "levelVal", {
      get: se
    }), Object.defineProperty(N, "level", {
      get: Z,
      set: W
    });
    const $ = {
      transmit: c,
      serialize: F,
      asObject: p.browser.asObject,
      levels: G,
      timestamp: b(p)
    };
    N.levels = i.levels, N.level = ee, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = D, N.serializers = A, N._serialize = F, N._stdErrSerialize = B, N.child = Y, c && (N._logEvent = d());
    function se() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function W(H) {
      if (H !== "silent" && !this.levels.values[H])
        throw Error("unknown level " + H);
      this._level = H, s($, N, "error", "log"), s($, N, "fatal", "error"), s($, N, "warn", "error"), s($, N, "info", "log"), s($, N, "debug", "log"), s($, N, "trace", "log");
    }
    function Y(H, J) {
      if (!H)
        throw new Error("missing bindings for child Pino");
      J = J || {}, F && H.serializers && (J.serializers = H.serializers);
      const we = J.serializers;
      if (F && we) {
        var re = Object.assign({}, A, we), be = p.browser.serialize === !0 ? Object.keys(re) : F;
        delete H.serializers, u([H], be, re, this._stdErrSerialize);
      }
      function he(me) {
        this._childLevel = (me._childLevel | 0) + 1, this.error = h(me, H, "error"), this.fatal = h(me, H, "fatal"), this.warn = h(me, H, "warn"), this.info = h(me, H, "info"), this.debug = h(me, H, "debug"), this.trace = h(me, H, "trace"), re && (this.serializers = re, this._serialize = be), c && (this._logEvent = d(
          [].concat(me._logEvent.bindings, H)
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: w, unixTime: R, isoTime: _ });
  function s(p, c, g, A) {
    const F = Object.getPrototypeOf(c);
    c[g] = c.levelVal > c.levels.values[g] ? D : F[g] ? F[g] : e[g] || e[A] || D, a(p, c, g);
  }
  function a(p, c, g) {
    !p.transmit && c[g] === D || (c[g] = function(A) {
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
    const F = g.slice();
    let B = F[0];
    const G = {};
    A && (G.time = A), G.level = i.levels.values[c];
    let ee = (p._childLevel | 0) + 1;
    if (ee < 1 && (ee = 1), B !== null && typeof B == "object") {
      for (; ee-- && typeof F[0] == "object"; )
        Object.assign(G, F.shift());
      B = F.length ? t(F.shift(), F) : void 0;
    } else
      typeof B == "string" && (B = t(F.shift(), F));
    return B !== void 0 && (G.msg = B), G;
  }
  function u(p, c, g, A) {
    for (const F in p)
      if (A && p[F] instanceof Error)
        p[F] = i.stdSerializers.err(p[F]);
      else if (typeof p[F] == "object" && !Array.isArray(p[F]))
        for (const B in p[F])
          c && c.indexOf(B) > -1 && B in g && (p[F][B] = g[B](p[F][B]));
  }
  function h(p, c, g) {
    return function() {
      const A = new Array(1 + arguments.length);
      A[0] = c;
      for (var F = 1; F < A.length; F++)
        A[F] = arguments[F - 1];
      return p[g].apply(this, A);
    };
  }
  function f(p, c, g) {
    const A = c.send, F = c.ts, B = c.methodLevel, G = c.methodValue, ee = c.val, N = p._logEvent.bindings;
    u(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = F, p._logEvent.messages = g.filter(function($) {
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
  function b(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? M : w;
  }
  function E() {
    return {};
  }
  function x(p) {
    return p;
  }
  function D() {
  }
  function M() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function R() {
    return Math.round(Date.now() / 1e3);
  }
  function _() {
    return new Date(Date.now()).toISOString();
  }
  function v() {
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
  return go;
}
var Dn = {}, Dc;
function pl() {
  return Dc || (Dc = 1, Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.PINO_CUSTOM_CONTEXT_KEY = Dn.PINO_LOGGER_DEFAULTS = void 0, Dn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Dn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Dn;
}
var rr = {}, xc;
function Td() {
  if (xc)
    return rr;
  xc = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.generateChildLogger = rr.formatChildLoggerContext = rr.getLoggerContext = rr.setBrowserLoggerContext = rr.getBrowserLoggerContext = rr.getDefaultLoggerOptions = void 0;
  const t = pl();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  rr.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  rr.getBrowserLoggerContext = r;
  function n(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[h] = u, o;
  }
  rr.setBrowserLoggerContext = n;
  function i(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof o.bindings > "u" ? h = r(o, u) : h = o.bindings().context || "", h;
  }
  rr.getLoggerContext = i;
  function s(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, h);
    return f.trim() ? `${f}/${u}` : u;
  }
  rr.formatChildLoggerContext = s;
  function a(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, u, h), d = o.child({ context: f });
    return n(d, f, h);
  }
  return rr.generateChildLogger = a, rr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Wr, r = e.__importDefault(Rd());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(pl(), t), e.__exportStar(Td(), t);
})(Xe);
let Ad = class extends mr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Nd = class extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Pd = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Ld = class extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Fd = class extends mr {
  constructor(e) {
    super();
  }
}, Ud = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Md = class extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, jd = class extends mr {
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
function gl(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Bd(t);
  } catch {
    return t;
  }
}
function pa(t) {
  return typeof t == "string" ? t : zd(t) || "";
}
var ga = {}, Xn = {}, ks = {}, $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.BrowserRandomSource = void 0;
const Oc = 65536;
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
    for (let n = 0; n < r.length; n += Oc)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Oc)));
    return r;
  }
}
$s.BrowserRandomSource = Vd;
function Kd(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qs = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
function Hd(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
vr.wipe = Hd;
const Wd = {}, Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wd
}, Symbol.toStringTag, { value: "Module" })), Qd = /* @__PURE__ */ fa(Gd);
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.NodeRandomSource = void 0;
const Zd = vr;
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
qs.NodeRandomSource = Yd;
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.SystemRandomSource = void 0;
const Jd = $s, Xd = qs;
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
ks.SystemRandomSource = ep;
var Le = {}, yl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var h = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, y = u & 65535;
    return f * y + (h * y + f * d << 16 >>> 0) | 0;
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
})(yl);
Object.defineProperty(Le, "__esModule", { value: !0 });
var ml = yl;
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
function bl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Le.writeUint16LE = bl;
Le.writeInt16LE = bl;
function Fo(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Le.readInt32BE = Fo;
function Uo(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Le.readUint32BE = Uo;
function Mo(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Le.readInt32LE = Mo;
function jo(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Le.readUint32LE = jo;
function bs(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Le.writeUint32BE = bs;
Le.writeInt32BE = bs;
function _s(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Le.writeUint32LE = _s;
Le.writeInt32LE = _s;
function sp(t, e) {
  e === void 0 && (e = 0);
  var r = Fo(t, e), n = Fo(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Le.readInt64BE = sp;
function op(t, e) {
  e === void 0 && (e = 0);
  var r = Uo(t, e), n = Uo(t, e + 4);
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
  var r = jo(t, e), n = jo(t, e + 4);
  return n * 4294967296 + r;
}
Le.readUint64LE = cp;
function _l(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), bs(t / 4294967296 >>> 0, e, r), bs(t >>> 0, e, r + 4), e;
}
Le.writeUint64BE = _l;
Le.writeInt64BE = _l;
function wl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), _s(t >>> 0, e, r), _s(t / 4294967296 >>> 0, e, r + 4), e;
}
Le.writeUint64LE = wl;
Le.writeInt64LE = wl;
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
  if (!ml.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Le.writeUintBE = hp;
function fp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!ml.isSafeInteger(e))
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
function mp(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Le.writeFloat32BE = mp;
function vp(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Le.writeFloat32LE = vp;
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
  const e = ks, r = Le, n = vr;
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
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(h, f = a, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const b = f.length, E = 256 - 256 % b;
    for (; h > 0; ) {
      const x = i(Math.ceil(h * 256 / E), d);
      for (let D = 0; D < x.length && h > 0; D++) {
        const M = x[D];
        M < E && (y += f.charAt(M % b), h--);
      }
      (0, n.wipe)(x);
    }
    return y;
  }
  t.randomString = o;
  function u(h, f = a, d = t.defaultRandomSource) {
    const y = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return o(y, f, d);
  }
  t.randomStringForEntropy = u;
})(Xn);
var El = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Le, r = vr;
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
      }, o.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, b = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var E = f + 1; E < b - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, b - 8), e.writeUint32BE(y, this._buffer, b - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, b), this._finished = !0;
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
  function s(o, u, h, f, d, y, b) {
    for (var E = h[0], x = h[1], D = h[2], M = h[3], w = h[4], R = h[5], _ = h[6], v = h[7], p = f[0], c = f[1], g = f[2], A = f[3], F = f[4], B = f[5], G = f[6], ee = f[7], N, $, se, Z, W, Y, H, J; b >= 128; ) {
      for (var we = 0; we < 16; we++) {
        var re = 8 * we + y;
        o[we] = e.readUint32BE(d, re), u[we] = e.readUint32BE(d, re + 4);
      }
      for (var we = 0; we < 80; we++) {
        var be = E, he = x, me = D, z = M, q = w, L = R, l = _, T = v, oe = p, le = c, ke = g, xe = A, Ae = F, We = B, it = G, rt = ee;
        if (N = v, $ = ee, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = (w >>> 14 | F << 32 - 14) ^ (w >>> 18 | F << 32 - 18) ^ (F >>> 41 - 32 | w << 32 - (41 - 32)), $ = (F >>> 14 | w << 32 - 14) ^ (F >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | F << 32 - (41 - 32)), W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, N = w & R ^ ~w & _, $ = F & B ^ ~F & G, W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, N = i[we * 2], $ = i[we * 2 + 1], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, N = o[we % 16], $ = u[we % 16], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, se = H & 65535 | J << 16, Z = W & 65535 | Y << 16, N = se, $ = Z, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = (E >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | E << 32 - (34 - 32)) ^ (p >>> 39 - 32 | E << 32 - (39 - 32)), $ = (p >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | p << 32 - (34 - 32)) ^ (E >>> 39 - 32 | p << 32 - (39 - 32)), W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, N = E & x ^ E & D ^ x & D, $ = p & c ^ p & g ^ c & g, W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, T = H & 65535 | J << 16, rt = W & 65535 | Y << 16, N = z, $ = xe, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = se, $ = Z, W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, z = H & 65535 | J << 16, xe = W & 65535 | Y << 16, x = be, D = he, M = me, w = z, R = q, _ = L, v = l, E = T, c = oe, g = le, A = ke, F = xe, B = Ae, G = We, ee = it, p = rt, we % 16 === 15)
          for (var re = 0; re < 16; re++)
            N = o[re], $ = u[re], W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = o[(re + 9) % 16], $ = u[(re + 9) % 16], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, se = o[(re + 1) % 16], Z = u[(re + 1) % 16], N = (se >>> 1 | Z << 32 - 1) ^ (se >>> 8 | Z << 32 - 8) ^ se >>> 7, $ = (Z >>> 1 | se << 32 - 1) ^ (Z >>> 8 | se << 32 - 8) ^ (Z >>> 7 | se << 32 - 7), W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, se = o[(re + 14) % 16], Z = u[(re + 14) % 16], N = (se >>> 19 | Z << 32 - 19) ^ (Z >>> 61 - 32 | se << 32 - (61 - 32)) ^ se >>> 6, $ = (Z >>> 19 | se << 32 - 19) ^ (se >>> 61 - 32 | Z << 32 - (61 - 32)) ^ (Z >>> 6 | se << 32 - 6), W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, o[re] = H & 65535 | J << 16, u[re] = W & 65535 | Y << 16;
      }
      N = E, $ = p, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[0], $ = f[0], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[0] = E = H & 65535 | J << 16, f[0] = p = W & 65535 | Y << 16, N = x, $ = c, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[1], $ = f[1], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[1] = x = H & 65535 | J << 16, f[1] = c = W & 65535 | Y << 16, N = D, $ = g, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[2], $ = f[2], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[2] = D = H & 65535 | J << 16, f[2] = g = W & 65535 | Y << 16, N = M, $ = A, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[3], $ = f[3], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[3] = M = H & 65535 | J << 16, f[3] = A = W & 65535 | Y << 16, N = w, $ = F, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[4], $ = f[4], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[4] = w = H & 65535 | J << 16, f[4] = F = W & 65535 | Y << 16, N = R, $ = B, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[5], $ = f[5], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[5] = R = H & 65535 | J << 16, f[5] = B = W & 65535 | Y << 16, N = _, $ = G, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[6], $ = f[6], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[6] = _ = H & 65535 | J << 16, f[6] = G = W & 65535 | Y << 16, N = v, $ = ee, W = $ & 65535, Y = $ >>> 16, H = N & 65535, J = N >>> 16, N = h[7], $ = f[7], W += $ & 65535, Y += $ >>> 16, H += N & 65535, J += N >>> 16, Y += W >>> 16, H += Y >>> 16, J += H >>> 16, h[7] = v = H & 65535 | J << 16, f[7] = ee = W & 65535 | Y << 16, y += 128, b -= 128;
    }
    return y;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var h = u.digest();
    return u.clean(), h;
  }
  t.hash = a;
})(El);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Xn, r = El, n = vr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(z) {
    const q = new Float64Array(16);
    if (z)
      for (let L = 0; L < z.length; L++)
        q[L] = z[L];
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
  function b(z, q) {
    for (let L = 0; L < 16; L++)
      z[L] = q[L] | 0;
  }
  function E(z) {
    let q = 1;
    for (let L = 0; L < 16; L++) {
      let l = z[L] + q + 65535;
      q = Math.floor(l / 65536), z[L] = l - q * 65536;
    }
    z[0] += q - 1 + 37 * (q - 1);
  }
  function x(z, q, L) {
    const l = ~(L - 1);
    for (let T = 0; T < 16; T++) {
      const oe = l & (z[T] ^ q[T]);
      z[T] ^= oe, q[T] ^= oe;
    }
  }
  function D(z, q) {
    const L = i(), l = i();
    for (let T = 0; T < 16; T++)
      l[T] = q[T];
    E(l), E(l), E(l);
    for (let T = 0; T < 2; T++) {
      L[0] = l[0] - 65517;
      for (let le = 1; le < 15; le++)
        L[le] = l[le] - 65535 - (L[le - 1] >> 16 & 1), L[le - 1] &= 65535;
      L[15] = l[15] - 32767 - (L[14] >> 16 & 1);
      const oe = L[15] >> 16 & 1;
      L[14] &= 65535, x(l, L, 1 - oe);
    }
    for (let T = 0; T < 16; T++)
      z[2 * T] = l[T] & 255, z[2 * T + 1] = l[T] >> 8;
  }
  function M(z, q) {
    let L = 0;
    for (let l = 0; l < 32; l++)
      L |= z[l] ^ q[l];
    return (1 & L - 1 >>> 8) - 1;
  }
  function w(z, q) {
    const L = new Uint8Array(32), l = new Uint8Array(32);
    return D(L, z), D(l, q), M(L, l);
  }
  function R(z) {
    const q = new Uint8Array(32);
    return D(q, z), q[0] & 1;
  }
  function _(z, q) {
    for (let L = 0; L < 16; L++)
      z[L] = q[2 * L] + (q[2 * L + 1] << 8);
    z[15] &= 32767;
  }
  function v(z, q, L) {
    for (let l = 0; l < 16; l++)
      z[l] = q[l] + L[l];
  }
  function p(z, q, L) {
    for (let l = 0; l < 16; l++)
      z[l] = q[l] - L[l];
  }
  function c(z, q, L) {
    let l, T, oe = 0, le = 0, ke = 0, xe = 0, Ae = 0, We = 0, it = 0, rt = 0, $e = 0, Fe = 0, Re = 0, Ne = 0, Te = 0, Ie = 0, Oe = 0, _e = 0, Pe = 0, Ue = 0, Se = 0, qe = 0, Ge = 0, Ze = 0, Qe = 0, Ye = 0, tr = 0, Ht = 0, pr = 0, Lt = 0, Ft = 0, ur = 0, Ur = 0, ct = L[0], ut = L[1], yt = L[2], ft = L[3], mt = L[4], lt = L[5], St = L[6], It = L[7], Ct = L[8], Dt = L[9], Rt = L[10], vt = L[11], bt = L[12], ot = L[13], C = L[14], K = L[15];
    l = q[0], oe += l * ct, le += l * ut, ke += l * yt, xe += l * ft, Ae += l * mt, We += l * lt, it += l * St, rt += l * It, $e += l * Ct, Fe += l * Dt, Re += l * Rt, Ne += l * vt, Te += l * bt, Ie += l * ot, Oe += l * C, _e += l * K, l = q[1], le += l * ct, ke += l * ut, xe += l * yt, Ae += l * ft, We += l * mt, it += l * lt, rt += l * St, $e += l * It, Fe += l * Ct, Re += l * Dt, Ne += l * Rt, Te += l * vt, Ie += l * bt, Oe += l * ot, _e += l * C, Pe += l * K, l = q[2], ke += l * ct, xe += l * ut, Ae += l * yt, We += l * ft, it += l * mt, rt += l * lt, $e += l * St, Fe += l * It, Re += l * Ct, Ne += l * Dt, Te += l * Rt, Ie += l * vt, Oe += l * bt, _e += l * ot, Pe += l * C, Ue += l * K, l = q[3], xe += l * ct, Ae += l * ut, We += l * yt, it += l * ft, rt += l * mt, $e += l * lt, Fe += l * St, Re += l * It, Ne += l * Ct, Te += l * Dt, Ie += l * Rt, Oe += l * vt, _e += l * bt, Pe += l * ot, Ue += l * C, Se += l * K, l = q[4], Ae += l * ct, We += l * ut, it += l * yt, rt += l * ft, $e += l * mt, Fe += l * lt, Re += l * St, Ne += l * It, Te += l * Ct, Ie += l * Dt, Oe += l * Rt, _e += l * vt, Pe += l * bt, Ue += l * ot, Se += l * C, qe += l * K, l = q[5], We += l * ct, it += l * ut, rt += l * yt, $e += l * ft, Fe += l * mt, Re += l * lt, Ne += l * St, Te += l * It, Ie += l * Ct, Oe += l * Dt, _e += l * Rt, Pe += l * vt, Ue += l * bt, Se += l * ot, qe += l * C, Ge += l * K, l = q[6], it += l * ct, rt += l * ut, $e += l * yt, Fe += l * ft, Re += l * mt, Ne += l * lt, Te += l * St, Ie += l * It, Oe += l * Ct, _e += l * Dt, Pe += l * Rt, Ue += l * vt, Se += l * bt, qe += l * ot, Ge += l * C, Ze += l * K, l = q[7], rt += l * ct, $e += l * ut, Fe += l * yt, Re += l * ft, Ne += l * mt, Te += l * lt, Ie += l * St, Oe += l * It, _e += l * Ct, Pe += l * Dt, Ue += l * Rt, Se += l * vt, qe += l * bt, Ge += l * ot, Ze += l * C, Qe += l * K, l = q[8], $e += l * ct, Fe += l * ut, Re += l * yt, Ne += l * ft, Te += l * mt, Ie += l * lt, Oe += l * St, _e += l * It, Pe += l * Ct, Ue += l * Dt, Se += l * Rt, qe += l * vt, Ge += l * bt, Ze += l * ot, Qe += l * C, Ye += l * K, l = q[9], Fe += l * ct, Re += l * ut, Ne += l * yt, Te += l * ft, Ie += l * mt, Oe += l * lt, _e += l * St, Pe += l * It, Ue += l * Ct, Se += l * Dt, qe += l * Rt, Ge += l * vt, Ze += l * bt, Qe += l * ot, Ye += l * C, tr += l * K, l = q[10], Re += l * ct, Ne += l * ut, Te += l * yt, Ie += l * ft, Oe += l * mt, _e += l * lt, Pe += l * St, Ue += l * It, Se += l * Ct, qe += l * Dt, Ge += l * Rt, Ze += l * vt, Qe += l * bt, Ye += l * ot, tr += l * C, Ht += l * K, l = q[11], Ne += l * ct, Te += l * ut, Ie += l * yt, Oe += l * ft, _e += l * mt, Pe += l * lt, Ue += l * St, Se += l * It, qe += l * Ct, Ge += l * Dt, Ze += l * Rt, Qe += l * vt, Ye += l * bt, tr += l * ot, Ht += l * C, pr += l * K, l = q[12], Te += l * ct, Ie += l * ut, Oe += l * yt, _e += l * ft, Pe += l * mt, Ue += l * lt, Se += l * St, qe += l * It, Ge += l * Ct, Ze += l * Dt, Qe += l * Rt, Ye += l * vt, tr += l * bt, Ht += l * ot, pr += l * C, Lt += l * K, l = q[13], Ie += l * ct, Oe += l * ut, _e += l * yt, Pe += l * ft, Ue += l * mt, Se += l * lt, qe += l * St, Ge += l * It, Ze += l * Ct, Qe += l * Dt, Ye += l * Rt, tr += l * vt, Ht += l * bt, pr += l * ot, Lt += l * C, Ft += l * K, l = q[14], Oe += l * ct, _e += l * ut, Pe += l * yt, Ue += l * ft, Se += l * mt, qe += l * lt, Ge += l * St, Ze += l * It, Qe += l * Ct, Ye += l * Dt, tr += l * Rt, Ht += l * vt, pr += l * bt, Lt += l * ot, Ft += l * C, ur += l * K, l = q[15], _e += l * ct, Pe += l * ut, Ue += l * yt, Se += l * ft, qe += l * mt, Ge += l * lt, Ze += l * St, Qe += l * It, Ye += l * Ct, tr += l * Dt, Ht += l * Rt, pr += l * vt, Lt += l * bt, Ft += l * ot, ur += l * C, Ur += l * K, oe += 38 * Pe, le += 38 * Ue, ke += 38 * Se, xe += 38 * qe, Ae += 38 * Ge, We += 38 * Ze, it += 38 * Qe, rt += 38 * Ye, $e += 38 * tr, Fe += 38 * Ht, Re += 38 * pr, Ne += 38 * Lt, Te += 38 * Ft, Ie += 38 * ur, Oe += 38 * Ur, T = 1, l = oe + T + 65535, T = Math.floor(l / 65536), oe = l - T * 65536, l = le + T + 65535, T = Math.floor(l / 65536), le = l - T * 65536, l = ke + T + 65535, T = Math.floor(l / 65536), ke = l - T * 65536, l = xe + T + 65535, T = Math.floor(l / 65536), xe = l - T * 65536, l = Ae + T + 65535, T = Math.floor(l / 65536), Ae = l - T * 65536, l = We + T + 65535, T = Math.floor(l / 65536), We = l - T * 65536, l = it + T + 65535, T = Math.floor(l / 65536), it = l - T * 65536, l = rt + T + 65535, T = Math.floor(l / 65536), rt = l - T * 65536, l = $e + T + 65535, T = Math.floor(l / 65536), $e = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Re + T + 65535, T = Math.floor(l / 65536), Re = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = Te + T + 65535, T = Math.floor(l / 65536), Te = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = Oe + T + 65535, T = Math.floor(l / 65536), Oe = l - T * 65536, l = _e + T + 65535, T = Math.floor(l / 65536), _e = l - T * 65536, oe += T - 1 + 37 * (T - 1), T = 1, l = oe + T + 65535, T = Math.floor(l / 65536), oe = l - T * 65536, l = le + T + 65535, T = Math.floor(l / 65536), le = l - T * 65536, l = ke + T + 65535, T = Math.floor(l / 65536), ke = l - T * 65536, l = xe + T + 65535, T = Math.floor(l / 65536), xe = l - T * 65536, l = Ae + T + 65535, T = Math.floor(l / 65536), Ae = l - T * 65536, l = We + T + 65535, T = Math.floor(l / 65536), We = l - T * 65536, l = it + T + 65535, T = Math.floor(l / 65536), it = l - T * 65536, l = rt + T + 65535, T = Math.floor(l / 65536), rt = l - T * 65536, l = $e + T + 65535, T = Math.floor(l / 65536), $e = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Re + T + 65535, T = Math.floor(l / 65536), Re = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = Te + T + 65535, T = Math.floor(l / 65536), Te = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = Oe + T + 65535, T = Math.floor(l / 65536), Oe = l - T * 65536, l = _e + T + 65535, T = Math.floor(l / 65536), _e = l - T * 65536, oe += T - 1 + 37 * (T - 1), z[0] = oe, z[1] = le, z[2] = ke, z[3] = xe, z[4] = Ae, z[5] = We, z[6] = it, z[7] = rt, z[8] = $e, z[9] = Fe, z[10] = Re, z[11] = Ne, z[12] = Te, z[13] = Ie, z[14] = Oe, z[15] = _e;
  }
  function g(z, q) {
    c(z, q, q);
  }
  function A(z, q) {
    const L = i();
    let l;
    for (l = 0; l < 16; l++)
      L[l] = q[l];
    for (l = 253; l >= 0; l--)
      g(L, L), l !== 2 && l !== 4 && c(L, L, q);
    for (l = 0; l < 16; l++)
      z[l] = L[l];
  }
  function F(z, q) {
    const L = i();
    let l;
    for (l = 0; l < 16; l++)
      L[l] = q[l];
    for (l = 250; l >= 0; l--)
      g(L, L), l !== 1 && c(L, L, q);
    for (l = 0; l < 16; l++)
      z[l] = L[l];
  }
  function B(z, q) {
    const L = i(), l = i(), T = i(), oe = i(), le = i(), ke = i(), xe = i(), Ae = i(), We = i();
    p(L, z[1], z[0]), p(We, q[1], q[0]), c(L, L, We), v(l, z[0], z[1]), v(We, q[0], q[1]), c(l, l, We), c(T, z[3], q[3]), c(T, T, h), c(oe, z[2], q[2]), v(oe, oe, oe), p(le, l, L), p(ke, oe, T), v(xe, oe, T), v(Ae, l, L), c(z[0], le, ke), c(z[1], Ae, xe), c(z[2], xe, ke), c(z[3], le, Ae);
  }
  function G(z, q, L) {
    for (let l = 0; l < 4; l++)
      x(z[l], q[l], L);
  }
  function ee(z, q) {
    const L = i(), l = i(), T = i();
    A(T, q[2]), c(L, q[0], T), c(l, q[1], T), D(z, l), z[31] ^= R(L) << 7;
  }
  function N(z, q, L) {
    b(z[0], a), b(z[1], o), b(z[2], o), b(z[3], a);
    for (let l = 255; l >= 0; --l) {
      const T = L[l / 8 | 0] >> (l & 7) & 1;
      G(z, q, T), B(q, z), B(z, z), G(z, q, T);
    }
  }
  function $(z, q) {
    const L = [i(), i(), i(), i()];
    b(L[0], f), b(L[1], d), b(L[2], o), c(L[3], f, d), N(z, L, q);
  }
  function se(z) {
    if (z.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const q = (0, r.hash)(z);
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const L = new Uint8Array(32), l = [i(), i(), i(), i()];
    $(l, q), ee(L, l);
    const T = new Uint8Array(64);
    return T.set(z), T.set(L, 32), {
      publicKey: L,
      secretKey: T
    };
  }
  t.generateKeyPairFromSeed = se;
  function Z(z) {
    const q = (0, e.randomBytes)(32, z), L = se(q);
    return (0, n.wipe)(q), L;
  }
  t.generateKeyPair = Z;
  function W(z) {
    if (z.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(z.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = W;
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
  function H(z, q) {
    let L, l, T, oe;
    for (l = 63; l >= 32; --l) {
      for (L = 0, T = l - 32, oe = l - 12; T < oe; ++T)
        q[T] += L - 16 * q[l] * Y[T - (l - 32)], L = Math.floor((q[T] + 128) / 256), q[T] -= L * 256;
      q[T] += L, q[l] = 0;
    }
    for (L = 0, T = 0; T < 32; T++)
      q[T] += L - (q[31] >> 4) * Y[T], L = q[T] >> 8, q[T] &= 255;
    for (T = 0; T < 32; T++)
      q[T] -= L * Y[T];
    for (l = 0; l < 32; l++)
      q[l + 1] += q[l] >> 8, z[l] = q[l] & 255;
  }
  function J(z) {
    const q = new Float64Array(64);
    for (let L = 0; L < 64; L++)
      q[L] = z[L];
    for (let L = 0; L < 64; L++)
      z[L] = 0;
    H(z, q);
  }
  function we(z, q) {
    const L = new Float64Array(64), l = [i(), i(), i(), i()], T = (0, r.hash)(z.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const oe = new Uint8Array(64);
    oe.set(T.subarray(32), 32);
    const le = new r.SHA512();
    le.update(oe.subarray(32)), le.update(q);
    const ke = le.digest();
    le.clean(), J(ke), $(l, ke), ee(oe, l), le.reset(), le.update(oe.subarray(0, 32)), le.update(z.subarray(32)), le.update(q);
    const xe = le.digest();
    J(xe);
    for (let Ae = 0; Ae < 32; Ae++)
      L[Ae] = ke[Ae];
    for (let Ae = 0; Ae < 32; Ae++)
      for (let We = 0; We < 32; We++)
        L[Ae + We] += xe[Ae] * T[We];
    return H(oe.subarray(32), L), oe;
  }
  t.sign = we;
  function re(z, q) {
    const L = i(), l = i(), T = i(), oe = i(), le = i(), ke = i(), xe = i();
    return b(z[2], o), _(z[1], q), g(T, z[1]), c(oe, T, u), p(T, T, z[2]), v(oe, z[2], oe), g(le, oe), g(ke, le), c(xe, ke, le), c(L, xe, T), c(L, L, oe), F(L, L), c(L, L, T), c(L, L, oe), c(L, L, oe), c(z[0], L, oe), g(l, z[0]), c(l, l, oe), w(l, T) && c(z[0], z[0], y), g(l, z[0]), c(l, l, oe), w(l, T) ? -1 : (R(z[0]) === q[31] >> 7 && p(z[0], a, z[0]), c(z[3], z[0], z[1]), 0);
  }
  function be(z, q, L) {
    const l = new Uint8Array(32), T = [i(), i(), i(), i()], oe = [i(), i(), i(), i()];
    if (L.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (re(oe, z))
      return !1;
    const le = new r.SHA512();
    le.update(L.subarray(0, 32)), le.update(z), le.update(q);
    const ke = le.digest();
    return J(ke), N(T, oe, ke), $(oe, L.subarray(32)), B(T, oe), ee(l, T), !M(L, l);
  }
  t.verify = be;
  function he(z) {
    let q = [i(), i(), i(), i()];
    if (re(q, z))
      throw new Error("Ed25519: invalid public key");
    let L = i(), l = i(), T = q[1];
    v(L, o, T), p(l, o, T), A(l, l), c(L, L, l);
    let oe = new Uint8Array(32);
    return D(oe, L), oe;
  }
  t.convertPublicKeyToX25519 = he;
  function me(z) {
    const q = (0, r.hash)(z.subarray(0, 32));
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const L = new Uint8Array(q.subarray(0, 32));
    return (0, n.wipe)(q), L;
  }
  t.convertSecretKeyToX25519 = me;
})(ga);
const wp = "EdDSA", Ep = "JWT", Sl = ".", Dl = "base64url", Sp = "utf8", Dp = "utf8", xp = ":", Op = "did", Ip = "key", Ic = "base58btc", Cp = "z", Rp = "K36", Tp = 32;
function ya(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function xl(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ya(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function ko(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = xl(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return ya(r);
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
  var o = t.length, u = t.charAt(0), h = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var x = 0, D = 0, M = 0, w = E.length; M !== w && E[M] === 0; )
      M++, x++;
    for (var R = (w - M) * f + 1 >>> 0, _ = new Uint8Array(R); M !== w; ) {
      for (var v = E[M], p = 0, c = R - 1; (v !== 0 || p < D) && c !== -1; c--, p++)
        v += 256 * _[c] >>> 0, _[c] = v % o >>> 0, v = v / o >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      D = p, M++;
    }
    for (var g = R - D; g !== R && _[g] === 0; )
      g++;
    for (var A = u.repeat(x); g < R; ++g)
      A += t.charAt(_[g]);
    return A;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var x = 0;
    if (E[x] !== " ") {
      for (var D = 0, M = 0; E[x] === u; )
        D++, x++;
      for (var w = (E.length - x) * h + 1 >>> 0, R = new Uint8Array(w); E[x]; ) {
        var _ = r[E.charCodeAt(x)];
        if (_ === 255)
          return;
        for (var v = 0, p = w - 1; (_ !== 0 || v < M) && p !== -1; p--, v++)
          _ += o * R[p] >>> 0, R[p] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        M = v, x++;
      }
      if (E[x] !== " ") {
        for (var c = w - M; c !== w && R[c] === 0; )
          c++;
        for (var g = new Uint8Array(D + (w - c)), A = D; c !== w; )
          g[A++] = R[c++];
        return g;
      }
    }
  }
  function b(E) {
    var x = y(E);
    if (x)
      return x;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: y,
    decode: b
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
}, Fp = (t) => new TextEncoder().encode(t), Up = (t) => new TextDecoder().decode(t);
class Mp {
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
    return Ol(this, e);
  }
}
class kp {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ol(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ol = (t, e) => new kp({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class $p {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Mp(e, r, n), this.decoder = new jp(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const zs = ({ name: t, prefix: e, encode: r, decode: n }) => new $p(t, e, r, n), qi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Pp(r, e);
  return zs({
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
  let o = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[h++] = 255 & u >> o);
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
}, Vt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => zs({
  prefix: e,
  name: t,
  encode(i) {
    return zp(i, n, r);
  },
  decode(i) {
    return qp(i, n, r, t);
  }
}), Bp = zs({
  prefix: "\0",
  name: "identity",
  encode: (t) => Up(t),
  decode: (t) => Fp(t)
}), Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Bp
}, Symbol.toStringTag, { value: "Module" })), Kp = Vt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Kp
}, Symbol.toStringTag, { value: "Module" })), Wp = Vt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Wp
}, Symbol.toStringTag, { value: "Module" })), Qp = qi({
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
}, Symbol.toStringTag, { value: "Module" })), lg = qi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), hg = qi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: lg,
  base36upper: hg
}, Symbol.toStringTag, { value: "Module" })), dg = qi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), pg = qi({
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
}), mg = Vt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), vg = Vt({
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
  base64pad: mg,
  base64url: vg,
  base64urlpad: bg
}, Symbol.toStringTag, { value: "Module" })), Il = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), wg = Il.reduce((t, e, r) => (t[r] = e, t), []), Eg = Il.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
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
const xg = zs({
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
const Cc = {
  ...Vp,
  ...Hp,
  ...Gp,
  ...Zp,
  ...Xp,
  ...ug,
  ...fg,
  ...gg,
  ..._g,
  ...Og
};
function Cl(t, e, r, n) {
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
const Rc = Cl("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), yo = Cl("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = xl(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Rl = {
  utf8: Rc,
  "utf-8": Rc,
  hex: Cc.base16,
  latin1: yo,
  ascii: yo,
  binary: yo,
  ...Cc
};
function ar(t, e = "utf8") {
  const r = Rl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function dr(t, e = "utf8") {
  const r = Rl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ya(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function ws(t) {
  return ar(dr(pa(t), Sp), Dl);
}
function Tl(t) {
  const e = dr(Rp, Ic), r = Cp + ar(ko([e, t]), Ic);
  return [Op, Ip, r].join(xp);
}
function Ig(t) {
  return ar(t, Dl);
}
function Cg(t) {
  return dr([ws(t.header), ws(t.payload)].join(Sl), Dp);
}
function Rg(t) {
  return [
    ws(t.header),
    ws(t.payload),
    Ig(t.signature)
  ].join(Sl);
}
function Tc(t = Xn.randomBytes(Tp)) {
  return ga.generateKeyPairFromSeed(t);
}
async function Tg(t, e, r, n, i = ge.fromMiliseconds(Date.now())) {
  const s = { alg: wp, typ: Ep }, a = Tl(n.publicKey), o = i + r, u = { iss: a, sub: t, aud: e, iat: i, exp: o }, h = Cg({ header: s, payload: u }), f = ga.sign(n.secretKey, h);
  return Rg({ header: s, payload: u, signature: f });
}
var ma = {}, Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
var Qt = Le, $o = vr, Ag = 20;
function Ng(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], b = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], x = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], D = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], R = n, _ = i, v = s, p = a, c = o, g = u, A = h, F = f, B = d, G = y, ee = b, N = E, $ = x, se = D, Z = M, W = w, Y = 0; Y < Ag; Y += 2)
    R = R + c | 0, $ ^= R, $ = $ >>> 32 - 16 | $ << 16, B = B + $ | 0, c ^= B, c = c >>> 32 - 12 | c << 12, _ = _ + g | 0, se ^= _, se = se >>> 32 - 16 | se << 16, G = G + se | 0, g ^= G, g = g >>> 32 - 12 | g << 12, v = v + A | 0, Z ^= v, Z = Z >>> 32 - 16 | Z << 16, ee = ee + Z | 0, A ^= ee, A = A >>> 32 - 12 | A << 12, p = p + F | 0, W ^= p, W = W >>> 32 - 16 | W << 16, N = N + W | 0, F ^= N, F = F >>> 32 - 12 | F << 12, v = v + A | 0, Z ^= v, Z = Z >>> 32 - 8 | Z << 8, ee = ee + Z | 0, A ^= ee, A = A >>> 32 - 7 | A << 7, p = p + F | 0, W ^= p, W = W >>> 32 - 8 | W << 8, N = N + W | 0, F ^= N, F = F >>> 32 - 7 | F << 7, _ = _ + g | 0, se ^= _, se = se >>> 32 - 8 | se << 8, G = G + se | 0, g ^= G, g = g >>> 32 - 7 | g << 7, R = R + c | 0, $ ^= R, $ = $ >>> 32 - 8 | $ << 8, B = B + $ | 0, c ^= B, c = c >>> 32 - 7 | c << 7, R = R + g | 0, W ^= R, W = W >>> 32 - 16 | W << 16, ee = ee + W | 0, g ^= ee, g = g >>> 32 - 12 | g << 12, _ = _ + A | 0, $ ^= _, $ = $ >>> 32 - 16 | $ << 16, N = N + $ | 0, A ^= N, A = A >>> 32 - 12 | A << 12, v = v + F | 0, se ^= v, se = se >>> 32 - 16 | se << 16, B = B + se | 0, F ^= B, F = F >>> 32 - 12 | F << 12, p = p + c | 0, Z ^= p, Z = Z >>> 32 - 16 | Z << 16, G = G + Z | 0, c ^= G, c = c >>> 32 - 12 | c << 12, v = v + F | 0, se ^= v, se = se >>> 32 - 8 | se << 8, B = B + se | 0, F ^= B, F = F >>> 32 - 7 | F << 7, p = p + c | 0, Z ^= p, Z = Z >>> 32 - 8 | Z << 8, G = G + Z | 0, c ^= G, c = c >>> 32 - 7 | c << 7, _ = _ + A | 0, $ ^= _, $ = $ >>> 32 - 8 | $ << 8, N = N + $ | 0, A ^= N, A = A >>> 32 - 7 | A << 7, R = R + g | 0, W ^= R, W = W >>> 32 - 8 | W << 8, ee = ee + W | 0, g ^= ee, g = g >>> 32 - 7 | g << 7;
  Qt.writeUint32LE(R + n | 0, t, 0), Qt.writeUint32LE(_ + i | 0, t, 4), Qt.writeUint32LE(v + s | 0, t, 8), Qt.writeUint32LE(p + a | 0, t, 12), Qt.writeUint32LE(c + o | 0, t, 16), Qt.writeUint32LE(g + u | 0, t, 20), Qt.writeUint32LE(A + h | 0, t, 24), Qt.writeUint32LE(F + f | 0, t, 28), Qt.writeUint32LE(B + d | 0, t, 32), Qt.writeUint32LE(G + y | 0, t, 36), Qt.writeUint32LE(ee + b | 0, t, 40), Qt.writeUint32LE(N + E | 0, t, 44), Qt.writeUint32LE($ + x | 0, t, 48), Qt.writeUint32LE(se + D | 0, t, 52), Qt.writeUint32LE(Z + M | 0, t, 56), Qt.writeUint32LE(W + w | 0, t, 60);
}
function Al(t, e, r, n, i) {
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
    for (var h = u; h < u + 64 && h < r.length; h++)
      n[h] = r[h] ^ o[h - u];
    Lg(s, 0, a);
  }
  return $o.wipe(o), i === 0 && $o.wipe(s), n;
}
Bs.streamXOR = Al;
function Pg(t, e, r, n) {
  return n === void 0 && (n = 0), $o.wipe(r), Al(t, e, r, r, n);
}
Bs.stream = Pg;
function Lg(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Nl = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
function Fg(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
pn.select = Fg;
function Ug(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
pn.lessOrEqual = Ug;
function Pl(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
pn.compare = Pl;
function Mg(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Pl(t, e) !== 0;
}
pn.equal = Mg;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = pn, r = vr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var h = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | h << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var y = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var b = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | b << 2) & 8191;
        var E = o[12] | o[13] << 8;
        this._r[7] = (b >>> 11 | E << 5) & 8065;
        var x = o[14] | o[15] << 8;
        this._r[8] = (E >>> 8 | x << 8) & 8191, this._r[9] = x >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, h) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], y = this._h[1], b = this._h[2], E = this._h[3], x = this._h[4], D = this._h[5], M = this._h[6], w = this._h[7], R = this._h[8], _ = this._h[9], v = this._r[0], p = this._r[1], c = this._r[2], g = this._r[3], A = this._r[4], F = this._r[5], B = this._r[6], G = this._r[7], ee = this._r[8], N = this._r[9]; h >= 16; ) {
          var $ = o[u + 0] | o[u + 1] << 8;
          d += $ & 8191;
          var se = o[u + 2] | o[u + 3] << 8;
          y += ($ >>> 13 | se << 3) & 8191;
          var Z = o[u + 4] | o[u + 5] << 8;
          b += (se >>> 10 | Z << 6) & 8191;
          var W = o[u + 6] | o[u + 7] << 8;
          E += (Z >>> 7 | W << 9) & 8191;
          var Y = o[u + 8] | o[u + 9] << 8;
          x += (W >>> 4 | Y << 12) & 8191, D += Y >>> 1 & 8191;
          var H = o[u + 10] | o[u + 11] << 8;
          M += (Y >>> 14 | H << 2) & 8191;
          var J = o[u + 12] | o[u + 13] << 8;
          w += (H >>> 11 | J << 5) & 8191;
          var we = o[u + 14] | o[u + 15] << 8;
          R += (J >>> 8 | we << 8) & 8191, _ += we >>> 5 | f;
          var re = 0, be = re;
          be += d * v, be += y * (5 * N), be += b * (5 * ee), be += E * (5 * G), be += x * (5 * B), re = be >>> 13, be &= 8191, be += D * (5 * F), be += M * (5 * A), be += w * (5 * g), be += R * (5 * c), be += _ * (5 * p), re += be >>> 13, be &= 8191;
          var he = re;
          he += d * p, he += y * v, he += b * (5 * N), he += E * (5 * ee), he += x * (5 * G), re = he >>> 13, he &= 8191, he += D * (5 * B), he += M * (5 * F), he += w * (5 * A), he += R * (5 * g), he += _ * (5 * c), re += he >>> 13, he &= 8191;
          var me = re;
          me += d * c, me += y * p, me += b * v, me += E * (5 * N), me += x * (5 * ee), re = me >>> 13, me &= 8191, me += D * (5 * G), me += M * (5 * B), me += w * (5 * F), me += R * (5 * A), me += _ * (5 * g), re += me >>> 13, me &= 8191;
          var z = re;
          z += d * g, z += y * c, z += b * p, z += E * v, z += x * (5 * N), re = z >>> 13, z &= 8191, z += D * (5 * ee), z += M * (5 * G), z += w * (5 * B), z += R * (5 * F), z += _ * (5 * A), re += z >>> 13, z &= 8191;
          var q = re;
          q += d * A, q += y * g, q += b * c, q += E * p, q += x * v, re = q >>> 13, q &= 8191, q += D * (5 * N), q += M * (5 * ee), q += w * (5 * G), q += R * (5 * B), q += _ * (5 * F), re += q >>> 13, q &= 8191;
          var L = re;
          L += d * F, L += y * A, L += b * g, L += E * c, L += x * p, re = L >>> 13, L &= 8191, L += D * v, L += M * (5 * N), L += w * (5 * ee), L += R * (5 * G), L += _ * (5 * B), re += L >>> 13, L &= 8191;
          var l = re;
          l += d * B, l += y * F, l += b * A, l += E * g, l += x * c, re = l >>> 13, l &= 8191, l += D * p, l += M * v, l += w * (5 * N), l += R * (5 * ee), l += _ * (5 * G), re += l >>> 13, l &= 8191;
          var T = re;
          T += d * G, T += y * B, T += b * F, T += E * A, T += x * g, re = T >>> 13, T &= 8191, T += D * c, T += M * p, T += w * v, T += R * (5 * N), T += _ * (5 * ee), re += T >>> 13, T &= 8191;
          var oe = re;
          oe += d * ee, oe += y * G, oe += b * B, oe += E * F, oe += x * A, re = oe >>> 13, oe &= 8191, oe += D * g, oe += M * c, oe += w * p, oe += R * v, oe += _ * (5 * N), re += oe >>> 13, oe &= 8191;
          var le = re;
          le += d * N, le += y * ee, le += b * G, le += E * B, le += x * F, re = le >>> 13, le &= 8191, le += D * A, le += M * g, le += w * c, le += R * p, le += _ * v, re += le >>> 13, le &= 8191, re = (re << 2) + re | 0, re = re + be | 0, be = re & 8191, re = re >>> 13, he += re, d = be, y = he, b = me, E = z, x = q, D = L, M = l, w = T, R = oe, _ = le, u += 16, h -= 16;
        }
        this._h[0] = d, this._h[1] = y, this._h[2] = b, this._h[3] = E, this._h[4] = x, this._h[5] = D, this._h[6] = M, this._h[7] = w, this._h[8] = R, this._h[9] = _;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var h = new Uint16Array(10), f, d, y, b;
        if (this._leftover) {
          for (b = this._leftover, this._buffer[b++] = 1; b < 16; b++)
            this._buffer[b] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, b = 2; b < 10; b++)
          this._h[b] += f, f = this._h[b] >>> 13, this._h[b] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, b = 1; b < 10; b++)
          h[b] = this._h[b] + f, f = h[b] >>> 13, h[b] &= 8191;
        for (h[9] -= 8192, d = (f ^ 1) - 1, b = 0; b < 10; b++)
          h[b] &= d;
        for (d = ~d, b = 0; b < 10; b++)
          this._h[b] = this._h[b] & d | h[b];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, b = 1; b < 8; b++)
          y = (this._h[b] + this._pad[b] | 0) + (y >>> 16) | 0, this._h[b] = y & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var u = 0, h = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (h -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(o, u, f), u += f, h -= f), h) {
          for (var d = 0; d < h; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += h;
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
    var h = u.digest();
    return u.clean(), h;
  }
  t.oneTimeAuth = i;
  function s(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = s;
})(Nl);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Bs, r = Nl, n = vr, i = Le, s = pn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return u.prototype.seal = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var b = new Uint8Array(16);
        b.set(h, b.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, b, E, 4);
        var x = f.length + this.tagLength, D;
        if (y) {
          if (y.length !== x)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          D = y;
        } else
          D = new Uint8Array(x);
        return e.streamXOR(this._key, b, f, D, 4), this._authenticate(D.subarray(D.length - this.tagLength, D.length), E, D.subarray(0, D.length - this.tagLength), d), n.wipe(b), D;
      }, u.prototype.open = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var b = new Uint8Array(16);
        b.set(h, b.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, b, E, 4);
        var x = new Uint8Array(this.tagLength);
        if (this._authenticate(x, E, f.subarray(0, f.length - this.tagLength), d), !s.equal(x, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var D = f.length - this.tagLength, M;
        if (y) {
          if (y.length !== D)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = y;
        } else
          M = new Uint8Array(D);
        return e.streamXOR(this._key, b, f.subarray(0, f.length - this.tagLength), M, 4), n.wipe(b), M;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(h, f, d, y) {
        var b = new r.Poly1305(f);
        y && (b.update(y), y.length % 16 > 0 && b.update(a.subarray(y.length % 16))), b.update(d), d.length % 16 > 0 && b.update(a.subarray(d.length % 16));
        var E = new Uint8Array(8);
        y && i.writeUint64LE(y.length, E), b.update(E), i.writeUint64LE(d.length, E), b.update(E);
        for (var x = b.digest(), D = 0; D < x.length; D++)
          h[D] = x[D];
        b.clean(), n.wipe(x), n.wipe(E);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(ma);
var Ll = {}, zi = {}, va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
function jg(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
va.isSerializableHash = jg;
Object.defineProperty(zi, "__esModule", { value: !0 });
var qr = va, kg = pn, $g = vr, Fl = (
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
zi.HMAC = Fl;
function qg(t, e, r) {
  var n = new Fl(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
zi.hmac = qg;
zi.equal = kg.equal;
Object.defineProperty(Ll, "__esModule", { value: !0 });
var Ac = zi, Nc = vr, zg = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = Ac.hmac(this._hash, n, r);
      this._hmac = new Ac.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Nc.wipe(this._buffer), Nc.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Bg = Ll.HKDF = zg, Vs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Le, r = vr;
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
      }, o.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, b = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var E = f + 1; E < b - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, b - 8), e.writeUint32BE(y, this._buffer, b - 4), s(this._temp, this._state, this._buffer, 0, b), this._finished = !0;
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
  function s(o, u, h, f, d) {
    for (; d >= 64; ) {
      for (var y = u[0], b = u[1], E = u[2], x = u[3], D = u[4], M = u[5], w = u[6], R = u[7], _ = 0; _ < 16; _++) {
        var v = f + _ * 4;
        o[_] = e.readUint32BE(h, v);
      }
      for (var _ = 16; _ < 64; _++) {
        var p = o[_ - 2], c = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = o[_ - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        o[_] = (c + o[_ - 7] | 0) + (g + o[_ - 16] | 0);
      }
      for (var _ = 0; _ < 64; _++) {
        var c = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & M ^ ~D & w) | 0) + (R + (i[_] + o[_] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & b ^ y & E ^ b & E) | 0;
        R = w, w = M, M = D, D = x + c | 0, x = E, E = b, b = y, y = c + g | 0;
      }
      u[0] += y, u[1] += b, u[2] += E, u[3] += x, u[4] += D, u[5] += M, u[6] += w, u[7] += R, f += 64, d -= 64;
    }
    return f;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var h = u.digest();
    return u.clean(), h;
  }
  t.hash = a;
})(Vs);
var ba = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Xn, r = vr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(_) {
    const v = new Float64Array(16);
    if (_)
      for (let p = 0; p < _.length; p++)
        v[p] = _[p];
    return v;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function a(_) {
    let v = 1;
    for (let p = 0; p < 16; p++) {
      let c = _[p] + v + 65535;
      v = Math.floor(c / 65536), _[p] = c - v * 65536;
    }
    _[0] += v - 1 + 37 * (v - 1);
  }
  function o(_, v, p) {
    const c = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const A = c & (_[g] ^ v[g]);
      _[g] ^= A, v[g] ^= A;
    }
  }
  function u(_, v) {
    const p = n(), c = n();
    for (let g = 0; g < 16; g++)
      c[g] = v[g];
    a(c), a(c), a(c);
    for (let g = 0; g < 2; g++) {
      p[0] = c[0] - 65517;
      for (let F = 1; F < 15; F++)
        p[F] = c[F] - 65535 - (p[F - 1] >> 16 & 1), p[F - 1] &= 65535;
      p[15] = c[15] - 32767 - (p[14] >> 16 & 1);
      const A = p[15] >> 16 & 1;
      p[14] &= 65535, o(c, p, 1 - A);
    }
    for (let g = 0; g < 16; g++)
      _[2 * g] = c[g] & 255, _[2 * g + 1] = c[g] >> 8;
  }
  function h(_, v) {
    for (let p = 0; p < 16; p++)
      _[p] = v[2 * p] + (v[2 * p + 1] << 8);
    _[15] &= 32767;
  }
  function f(_, v, p) {
    for (let c = 0; c < 16; c++)
      _[c] = v[c] + p[c];
  }
  function d(_, v, p) {
    for (let c = 0; c < 16; c++)
      _[c] = v[c] - p[c];
  }
  function y(_, v, p) {
    let c, g, A = 0, F = 0, B = 0, G = 0, ee = 0, N = 0, $ = 0, se = 0, Z = 0, W = 0, Y = 0, H = 0, J = 0, we = 0, re = 0, be = 0, he = 0, me = 0, z = 0, q = 0, L = 0, l = 0, T = 0, oe = 0, le = 0, ke = 0, xe = 0, Ae = 0, We = 0, it = 0, rt = 0, $e = p[0], Fe = p[1], Re = p[2], Ne = p[3], Te = p[4], Ie = p[5], Oe = p[6], _e = p[7], Pe = p[8], Ue = p[9], Se = p[10], qe = p[11], Ge = p[12], Ze = p[13], Qe = p[14], Ye = p[15];
    c = v[0], A += c * $e, F += c * Fe, B += c * Re, G += c * Ne, ee += c * Te, N += c * Ie, $ += c * Oe, se += c * _e, Z += c * Pe, W += c * Ue, Y += c * Se, H += c * qe, J += c * Ge, we += c * Ze, re += c * Qe, be += c * Ye, c = v[1], F += c * $e, B += c * Fe, G += c * Re, ee += c * Ne, N += c * Te, $ += c * Ie, se += c * Oe, Z += c * _e, W += c * Pe, Y += c * Ue, H += c * Se, J += c * qe, we += c * Ge, re += c * Ze, be += c * Qe, he += c * Ye, c = v[2], B += c * $e, G += c * Fe, ee += c * Re, N += c * Ne, $ += c * Te, se += c * Ie, Z += c * Oe, W += c * _e, Y += c * Pe, H += c * Ue, J += c * Se, we += c * qe, re += c * Ge, be += c * Ze, he += c * Qe, me += c * Ye, c = v[3], G += c * $e, ee += c * Fe, N += c * Re, $ += c * Ne, se += c * Te, Z += c * Ie, W += c * Oe, Y += c * _e, H += c * Pe, J += c * Ue, we += c * Se, re += c * qe, be += c * Ge, he += c * Ze, me += c * Qe, z += c * Ye, c = v[4], ee += c * $e, N += c * Fe, $ += c * Re, se += c * Ne, Z += c * Te, W += c * Ie, Y += c * Oe, H += c * _e, J += c * Pe, we += c * Ue, re += c * Se, be += c * qe, he += c * Ge, me += c * Ze, z += c * Qe, q += c * Ye, c = v[5], N += c * $e, $ += c * Fe, se += c * Re, Z += c * Ne, W += c * Te, Y += c * Ie, H += c * Oe, J += c * _e, we += c * Pe, re += c * Ue, be += c * Se, he += c * qe, me += c * Ge, z += c * Ze, q += c * Qe, L += c * Ye, c = v[6], $ += c * $e, se += c * Fe, Z += c * Re, W += c * Ne, Y += c * Te, H += c * Ie, J += c * Oe, we += c * _e, re += c * Pe, be += c * Ue, he += c * Se, me += c * qe, z += c * Ge, q += c * Ze, L += c * Qe, l += c * Ye, c = v[7], se += c * $e, Z += c * Fe, W += c * Re, Y += c * Ne, H += c * Te, J += c * Ie, we += c * Oe, re += c * _e, be += c * Pe, he += c * Ue, me += c * Se, z += c * qe, q += c * Ge, L += c * Ze, l += c * Qe, T += c * Ye, c = v[8], Z += c * $e, W += c * Fe, Y += c * Re, H += c * Ne, J += c * Te, we += c * Ie, re += c * Oe, be += c * _e, he += c * Pe, me += c * Ue, z += c * Se, q += c * qe, L += c * Ge, l += c * Ze, T += c * Qe, oe += c * Ye, c = v[9], W += c * $e, Y += c * Fe, H += c * Re, J += c * Ne, we += c * Te, re += c * Ie, be += c * Oe, he += c * _e, me += c * Pe, z += c * Ue, q += c * Se, L += c * qe, l += c * Ge, T += c * Ze, oe += c * Qe, le += c * Ye, c = v[10], Y += c * $e, H += c * Fe, J += c * Re, we += c * Ne, re += c * Te, be += c * Ie, he += c * Oe, me += c * _e, z += c * Pe, q += c * Ue, L += c * Se, l += c * qe, T += c * Ge, oe += c * Ze, le += c * Qe, ke += c * Ye, c = v[11], H += c * $e, J += c * Fe, we += c * Re, re += c * Ne, be += c * Te, he += c * Ie, me += c * Oe, z += c * _e, q += c * Pe, L += c * Ue, l += c * Se, T += c * qe, oe += c * Ge, le += c * Ze, ke += c * Qe, xe += c * Ye, c = v[12], J += c * $e, we += c * Fe, re += c * Re, be += c * Ne, he += c * Te, me += c * Ie, z += c * Oe, q += c * _e, L += c * Pe, l += c * Ue, T += c * Se, oe += c * qe, le += c * Ge, ke += c * Ze, xe += c * Qe, Ae += c * Ye, c = v[13], we += c * $e, re += c * Fe, be += c * Re, he += c * Ne, me += c * Te, z += c * Ie, q += c * Oe, L += c * _e, l += c * Pe, T += c * Ue, oe += c * Se, le += c * qe, ke += c * Ge, xe += c * Ze, Ae += c * Qe, We += c * Ye, c = v[14], re += c * $e, be += c * Fe, he += c * Re, me += c * Ne, z += c * Te, q += c * Ie, L += c * Oe, l += c * _e, T += c * Pe, oe += c * Ue, le += c * Se, ke += c * qe, xe += c * Ge, Ae += c * Ze, We += c * Qe, it += c * Ye, c = v[15], be += c * $e, he += c * Fe, me += c * Re, z += c * Ne, q += c * Te, L += c * Ie, l += c * Oe, T += c * _e, oe += c * Pe, le += c * Ue, ke += c * Se, xe += c * qe, Ae += c * Ge, We += c * Ze, it += c * Qe, rt += c * Ye, A += 38 * he, F += 38 * me, B += 38 * z, G += 38 * q, ee += 38 * L, N += 38 * l, $ += 38 * T, se += 38 * oe, Z += 38 * le, W += 38 * ke, Y += 38 * xe, H += 38 * Ae, J += 38 * We, we += 38 * it, re += 38 * rt, g = 1, c = A + g + 65535, g = Math.floor(c / 65536), A = c - g * 65536, c = F + g + 65535, g = Math.floor(c / 65536), F = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = ee + g + 65535, g = Math.floor(c / 65536), ee = c - g * 65536, c = N + g + 65535, g = Math.floor(c / 65536), N = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = se + g + 65535, g = Math.floor(c / 65536), se = c - g * 65536, c = Z + g + 65535, g = Math.floor(c / 65536), Z = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = Y + g + 65535, g = Math.floor(c / 65536), Y = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = J + g + 65535, g = Math.floor(c / 65536), J = c - g * 65536, c = we + g + 65535, g = Math.floor(c / 65536), we = c - g * 65536, c = re + g + 65535, g = Math.floor(c / 65536), re = c - g * 65536, c = be + g + 65535, g = Math.floor(c / 65536), be = c - g * 65536, A += g - 1 + 37 * (g - 1), g = 1, c = A + g + 65535, g = Math.floor(c / 65536), A = c - g * 65536, c = F + g + 65535, g = Math.floor(c / 65536), F = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = ee + g + 65535, g = Math.floor(c / 65536), ee = c - g * 65536, c = N + g + 65535, g = Math.floor(c / 65536), N = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = se + g + 65535, g = Math.floor(c / 65536), se = c - g * 65536, c = Z + g + 65535, g = Math.floor(c / 65536), Z = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = Y + g + 65535, g = Math.floor(c / 65536), Y = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = J + g + 65535, g = Math.floor(c / 65536), J = c - g * 65536, c = we + g + 65535, g = Math.floor(c / 65536), we = c - g * 65536, c = re + g + 65535, g = Math.floor(c / 65536), re = c - g * 65536, c = be + g + 65535, g = Math.floor(c / 65536), be = c - g * 65536, A += g - 1 + 37 * (g - 1), _[0] = A, _[1] = F, _[2] = B, _[3] = G, _[4] = ee, _[5] = N, _[6] = $, _[7] = se, _[8] = Z, _[9] = W, _[10] = Y, _[11] = H, _[12] = J, _[13] = we, _[14] = re, _[15] = be;
  }
  function b(_, v) {
    y(_, v, v);
  }
  function E(_, v) {
    const p = n();
    for (let c = 0; c < 16; c++)
      p[c] = v[c];
    for (let c = 253; c >= 0; c--)
      b(p, p), c !== 2 && c !== 4 && y(p, p, v);
    for (let c = 0; c < 16; c++)
      _[c] = p[c];
  }
  function x(_, v) {
    const p = new Uint8Array(32), c = new Float64Array(80), g = n(), A = n(), F = n(), B = n(), G = n(), ee = n();
    for (let Z = 0; Z < 31; Z++)
      p[Z] = _[Z];
    p[31] = _[31] & 127 | 64, p[0] &= 248, h(c, v);
    for (let Z = 0; Z < 16; Z++)
      A[Z] = c[Z];
    g[0] = B[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const W = p[Z >>> 3] >>> (Z & 7) & 1;
      o(g, A, W), o(F, B, W), f(G, g, F), d(g, g, F), f(F, A, B), d(A, A, B), b(B, G), b(ee, g), y(g, F, g), y(F, A, G), f(G, g, F), d(g, g, F), b(A, g), d(F, B, ee), y(g, F, s), f(g, g, B), y(F, F, g), y(g, B, ee), y(B, A, c), b(A, G), o(g, A, W), o(F, B, W);
    }
    for (let Z = 0; Z < 16; Z++)
      c[Z + 16] = g[Z], c[Z + 32] = F[Z], c[Z + 48] = A[Z], c[Z + 64] = B[Z];
    const N = c.subarray(32), $ = c.subarray(16);
    E(N, N), y($, $, N);
    const se = new Uint8Array(32);
    return u(se, $), se;
  }
  t.scalarMult = x;
  function D(_) {
    return x(_, i);
  }
  t.scalarMultBase = D;
  function M(_) {
    if (_.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const v = new Uint8Array(_);
    return {
      publicKey: D(v),
      secretKey: v
    };
  }
  t.generateKeyPairFromSeed = M;
  function w(_) {
    const v = (0, e.randomBytes)(32, _), p = M(v);
    return (0, r.wipe)(v), p;
  }
  t.generateKeyPair = w;
  function R(_, v, p = !1) {
    if (_.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = x(_, v);
    if (p) {
      let g = 0;
      for (let A = 0; A < c.length; A++)
        g |= c[A];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = R;
})(ba);
var Pc = globalThis && globalThis.__spreadArray || function(t, e, r) {
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
), Hg = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Wg = (
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
), Qg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Zg = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Lc = 3, Yg = [
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
], Fc = [
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
  return t ? Uc(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Gg() : typeof navigator < "u" ? Uc(navigator.userAgent) : ty();
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
function Uc(t) {
  var e = Xg(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Wg();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Lc && (i = Pc(Pc([], i, !0), ry(Lc - i.length), !0)) : i = [];
  var s = i.join("."), a = ey(t), o = Zg.exec(t);
  return o && o[1] ? new Hg(r, s, a, o[1]) : new Vg(r, s, a);
}
function ey(t) {
  for (var e = 0, r = Fc.length; e < r; e++) {
    var n = Fc[e], i = n[0], s = n[1], a = s.exec(t);
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
ht.getLocalStorage = ht.getLocalStorageOrThrow = ht.getCrypto = ht.getCryptoOrThrow = Ml = ht.getLocation = ht.getLocationOrThrow = _a = ht.getNavigator = ht.getNavigatorOrThrow = Ul = ht.getDocument = ht.getDocumentOrThrow = ht.getFromWindowOrThrow = ht.getFromWindow = void 0;
function Fn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
ht.getFromWindow = Fn;
function ei(t) {
  const e = Fn(t);
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
  return Fn("document");
}
var Ul = ht.getDocument = iy;
function sy() {
  return ei("navigator");
}
ht.getNavigatorOrThrow = sy;
function oy() {
  return Fn("navigator");
}
var _a = ht.getNavigator = oy;
function ay() {
  return ei("location");
}
ht.getLocationOrThrow = ay;
function cy() {
  return Fn("location");
}
var Ml = ht.getLocation = cy;
function uy() {
  return ei("crypto");
}
ht.getCryptoOrThrow = uy;
function ly() {
  return Fn("crypto");
}
ht.getCrypto = ly;
function hy() {
  return ei("localStorage");
}
ht.getLocalStorageOrThrow = hy;
function fy() {
  return Fn("localStorage");
}
ht.getLocalStorage = fy;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
var jl = wa.getWindowMetadata = void 0;
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
    for (let b = 0; b < d.length; b++) {
      const E = d[b], x = E.getAttribute("rel");
      if (x && x.toLowerCase().indexOf("icon") > -1) {
        const D = E.getAttribute("href");
        if (D)
          if (D.toLowerCase().indexOf("https:") === -1 && D.toLowerCase().indexOf("http:") === -1 && D.indexOf("//") !== 0) {
            let M = e.protocol + "//" + e.host;
            if (D.indexOf("/") === 0)
              M += D;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const R = w.join("/");
              M += R + "/" + D;
            }
            y.push(M);
          } else if (D.indexOf("//") === 0) {
            const M = e.protocol + D;
            y.push(M);
          } else
            y.push(D);
      }
    }
    return y;
  }
  function n(...d) {
    const y = t.getElementsByTagName("meta");
    for (let b = 0; b < y.length; b++) {
      const E = y[b], x = ["itemprop", "property", "name"].map((D) => E.getAttribute(D)).filter((D) => D ? d.includes(D) : !1);
      if (x.length && x) {
        const D = E.getAttribute("content");
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
  const a = i(), o = s(), u = e.origin, h = r();
  return {
    description: o,
    url: u,
    icons: h,
    name: a
  };
}
jl = wa.getWindowMetadata = dy;
var Di = {}, py = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), kl = "%[a-f0-9]{2}", jc = new RegExp("(" + kl + ")|([^%]+?)", "gi"), kc = new RegExp("(" + kl + ")+", "gi");
function qo(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], qo(r), qo(n));
}
function gy(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(jc) || [], r = 1; r < e.length; r++)
      t = qo(e, r).join(""), e = t.match(jc) || [];
    return t;
  }
}
function yy(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = kc.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = gy(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = kc.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var a = i[s];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var my = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return yy(t);
  }
}, vy = (t, e) => {
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
  const e = py, r = my, n = vy, i = by, s = (w) => w == null, a = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (R) => (_, v) => {
          const p = _.length;
          return v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? _ : v === null ? [..._, [f(R, w), "[", p, "]"].join("")] : [
            ..._,
            [f(R, w), "[", f(p, w), "]=", f(v, w)].join("")
          ];
        };
      case "bracket":
        return (R) => (_, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? _ : v === null ? [..._, [f(R, w), "[]"].join("")] : [..._, [f(R, w), "[]=", f(v, w)].join("")];
      case "colon-list-separator":
        return (R) => (_, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? _ : v === null ? [..._, [f(R, w), ":list="].join("")] : [..._, [f(R, w), ":list=", f(v, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const R = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (v, p) => p === void 0 || w.skipNull && p === null || w.skipEmptyString && p === "" ? v : (p = p === null ? "" : p, v.length === 0 ? [[f(_, w), R, f(p, w)].join("")] : [[v, f(p, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (R) => (_, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? _ : v === null ? [..._, f(R, w)] : [..._, [f(R, w), "=", f(v, w)].join("")];
    }
  }
  function u(w) {
    let R;
    switch (w.arrayFormat) {
      case "index":
        return (_, v, p) => {
          if (R = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !R) {
            p[_] = v;
            return;
          }
          p[_] === void 0 && (p[_] = {}), p[_][R[1]] = v;
        };
      case "bracket":
        return (_, v, p) => {
          if (R = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !R) {
            p[_] = v;
            return;
          }
          if (p[_] === void 0) {
            p[_] = [v];
            return;
          }
          p[_] = [].concat(p[_], v);
        };
      case "colon-list-separator":
        return (_, v, p) => {
          if (R = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !R) {
            p[_] = v;
            return;
          }
          if (p[_] === void 0) {
            p[_] = [v];
            return;
          }
          p[_] = [].concat(p[_], v);
        };
      case "comma":
      case "separator":
        return (_, v, p) => {
          const c = typeof v == "string" && v.includes(w.arrayFormatSeparator), g = typeof v == "string" && !c && d(v, w).includes(w.arrayFormatSeparator);
          v = g ? d(v, w) : v;
          const A = c || g ? v.split(w.arrayFormatSeparator).map((F) => d(F, w)) : v === null ? v : d(v, w);
          p[_] = A;
        };
      case "bracket-separator":
        return (_, v, p) => {
          const c = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !c) {
            p[_] = v && d(v, w);
            return;
          }
          const g = v === null ? [] : v.split(w.arrayFormatSeparator).map((A) => d(A, w));
          if (p[_] === void 0) {
            p[_] = g;
            return;
          }
          p[_] = [].concat(p[_], g);
        };
      default:
        return (_, v, p) => {
          if (p[_] === void 0) {
            p[_] = v;
            return;
          }
          p[_] = [].concat(p[_], v);
        };
    }
  }
  function h(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, R) {
    return R.encode ? R.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, R) {
    return R.decode ? r(w) : w;
  }
  function y(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? y(Object.keys(w)).sort((R, _) => Number(R) - Number(_)).map((R) => w[R]) : w;
  }
  function b(w) {
    const R = w.indexOf("#");
    return R !== -1 && (w = w.slice(0, R)), w;
  }
  function E(w) {
    let R = "";
    const _ = w.indexOf("#");
    return _ !== -1 && (R = w.slice(_)), R;
  }
  function x(w) {
    w = b(w);
    const R = w.indexOf("?");
    return R === -1 ? "" : w.slice(R + 1);
  }
  function D(w, R) {
    return R.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : R.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function M(w, R) {
    R = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, R), h(R.arrayFormatSeparator);
    const _ = u(R), v = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return v;
    for (const p of w.split("&")) {
      if (p === "")
        continue;
      let [c, g] = n(R.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(R.arrayFormat) ? g : d(g, R), _(d(c, R), g, v);
    }
    for (const p of Object.keys(v)) {
      const c = v[p];
      if (typeof c == "object" && c !== null)
        for (const g of Object.keys(c))
          c[g] = D(c[g], R);
      else
        v[p] = D(c, R);
    }
    return R.sort === !1 ? v : (R.sort === !0 ? Object.keys(v).sort() : Object.keys(v).sort(R.sort)).reduce((p, c) => {
      const g = v[c];
      return g && typeof g == "object" && !Array.isArray(g) ? p[c] = y(g) : p[c] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = x, t.parse = M, t.stringify = (w, R) => {
    if (!w)
      return "";
    R = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, R), h(R.arrayFormatSeparator);
    const _ = (g) => R.skipNull && s(w[g]) || R.skipEmptyString && w[g] === "", v = o(R), p = {};
    for (const g of Object.keys(w))
      _(g) || (p[g] = w[g]);
    const c = Object.keys(p);
    return R.sort !== !1 && c.sort(R.sort), c.map((g) => {
      const A = w[g];
      return A === void 0 ? "" : A === null ? f(g, R) : Array.isArray(A) ? A.length === 0 && R.arrayFormat === "bracket-separator" ? f(g, R) + "[]" : A.reduce(v(g), []).join("&") : f(g, R) + "=" + f(A, R);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (w, R) => {
    R = Object.assign({
      decode: !0
    }, R);
    const [_, v] = n(w, "#");
    return Object.assign(
      {
        url: _.split("?")[0] || "",
        query: M(x(w), R)
      },
      R && R.parseFragmentIdentifier && v ? { fragmentIdentifier: d(v, R) } : {}
    );
  }, t.stringifyUrl = (w, R) => {
    R = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, R);
    const _ = b(w.url).split("?")[0] || "", v = t.extract(w.url), p = t.parse(v, { sort: !1 }), c = Object.assign(p, w.query);
    let g = t.stringify(c, R);
    g && (g = `?${g}`);
    let A = E(w.url);
    return w.fragmentIdentifier && (A = `#${R[a] ? f(w.fragmentIdentifier, R) : w.fragmentIdentifier}`), `${_}${g}${A}`;
  }, t.pick = (w, R, _) => {
    _ = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, _);
    const { url: v, query: p, fragmentIdentifier: c } = t.parseUrl(w, _);
    return t.stringifyUrl({
      url: v,
      query: i(p, R),
      fragmentIdentifier: c
    }, _);
  }, t.exclude = (w, R, _) => {
    const v = Array.isArray(R) ? (p) => !R.includes(p) : (p, c) => !R(p, c);
    return t.pick(w, v, _);
  };
})(Di);
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
function $l(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const ql = "base10", or = "base16", zo = "base64pad", Ea = "utf8", zl = 0, Un = 1, wy = 0, $c = 1, Bo = 12, Sa = 32;
function Ey() {
  const t = ba.generateKeyPair();
  return { privateKey: ar(t.secretKey, or), publicKey: ar(t.publicKey, or) };
}
function Vo() {
  const t = Xn.randomBytes(Sa);
  return ar(t, or);
}
function Sy(t, e) {
  const r = ba.sharedKey(dr(t, or), dr(e, or)), n = new Bg(Vs.SHA256, r).expand(Sa);
  return ar(n, or);
}
function Dy(t) {
  const e = Vs.hash(dr(t, or));
  return ar(e, or);
}
function Hn(t) {
  const e = Vs.hash(dr(t, Ea));
  return ar(e, or);
}
function xy(t) {
  return dr(`${t}`, ql);
}
function Bi(t) {
  return Number(ar(t, ql));
}
function Oy(t) {
  const e = xy(typeof t.type < "u" ? t.type : zl);
  if (Bi(e) === Un && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? dr(t.senderPublicKey, or) : void 0, n = typeof t.iv < "u" ? dr(t.iv, or) : Xn.randomBytes(Bo), i = new ma.ChaCha20Poly1305(dr(t.symKey, or)).seal(n, dr(t.message, Ea));
  return Cy({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function Iy(t) {
  const e = new ma.ChaCha20Poly1305(dr(t.symKey, or)), { sealed: r, iv: n } = Es(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return ar(i, Ea);
}
function Cy(t) {
  if (Bi(t.type) === Un) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return ar(ko([t.type, t.senderPublicKey, t.iv, t.sealed]), zo);
  }
  return ar(ko([t.type, t.iv, t.sealed]), zo);
}
function Es(t) {
  const e = dr(t, zo), r = e.slice(wy, $c), n = $c;
  if (Bi(r) === Un) {
    const o = n + Sa, u = o + Bo, h = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: h };
  }
  const i = n + Bo, s = e.slice(n, i), a = e.slice(i);
  return { type: r, sealed: a, iv: s };
}
function Ry(t, e) {
  const r = Es(t);
  return Bl({ type: Bi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? ar(r.senderPublicKey, or) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Bl(t) {
  const e = (t == null ? void 0 : t.type) || zl;
  if (e === Un) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function qc(t) {
  return t.type === Un && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Ty = Object.defineProperty, zc = Object.getOwnPropertySymbols, Ay = Object.prototype.hasOwnProperty, Ny = Object.prototype.propertyIsEnumerable, Bc = (t, e, r) => e in t ? Ty(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vc = (t, e) => {
  for (var r in e || (e = {}))
    Ay.call(e, r) && Bc(t, r, e[r]);
  if (zc)
    for (var r of zc(e))
      Ny.call(e, r) && Bc(t, r, e[r]);
  return t;
};
const Py = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Ly = "js";
function Da() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ks() {
  return !Ul() && !!_a() && navigator.product === Py;
}
function Vi() {
  return !Da() && !!_a();
}
function Ki() {
  return Ks() ? yr.reactNative : Da() ? yr.node : Vi() ? yr.browser : yr.unknown;
}
function Fy(t, e) {
  let r = Di.parse(t);
  return r = Vc(Vc({}, r), e), t = Di.stringify(r), t;
}
function Uy() {
  return jl() || { name: "", description: "", url: "", icons: [""] };
}
function My() {
  if (Ki() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
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
  const e = Ki();
  return e === yr.browser ? [e, ((t = Ml()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function ky(t, e, r) {
  const n = My(), i = jy();
  return [[t, e].join("-"), [Ly, r].join("-"), n, i].join("/");
}
function $y({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: a }) {
  const o = r.split("?"), u = ky(t, e, n), h = { auth: i, ua: u, projectId: s, useOnCloseEvent: a || void 0 }, f = Fy(o[1] || "", h);
  return o[0] + "?" + f;
}
function In(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Vl(t) {
  return Object.fromEntries(t.entries());
}
function Kl(t) {
  return new Map(Object.entries(t));
}
function qn(t = ge.FIVE_MINUTES, e) {
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
function xi(t, e, r) {
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
function Hl(t, e) {
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
  return Hl("topic", t);
}
function zy(t) {
  return Hl("id", t);
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
function Or(t, e) {
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
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, a = Ki();
    a === yr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : a === yr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const Vy = "irn";
function Ko(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Vy };
}
function ps(t) {
  const e = _y[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Ky = Object.defineProperty, Kc = Object.getOwnPropertySymbols, Hy = Object.prototype.hasOwnProperty, Wy = Object.prototype.propertyIsEnumerable, Hc = (t, e, r) => e in t ? Ky(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gy = (t, e) => {
  for (var r in e || (e = {}))
    Hy.call(e, r) && Hc(t, r, e[r]);
  if (Kc)
    for (var r of Kc(e))
      Wy.call(e, r) && Hc(t, r, e[r]);
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
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", a = Di.parse(s);
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
  return `${t.protocol}:${t.topic}@${t.version}?` + Di.stringify(Gy({ symKey: t.symKey }, Jy(t.relay)));
}
function ti(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function em(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...ti(r.accounts));
  }), e;
}
function tm(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ti(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function rm(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ti(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function nm(t, e) {
  const r = gs(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const im = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, sm = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ue(t, e) {
  const { message: r, code: n } = sm[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function $t(t, e) {
  const { message: r, code: n } = im[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Hi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function wi(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function ir(t) {
  return typeof t > "u";
}
function qt(t, e) {
  return e && ir(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function xa(t, e) {
  return e && ir(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function om(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return In(i, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: h } = t.namespaces[a], f = ti(o), d = r[a];
    (!In($l(a, d), f) || !In(d.methods, u) || !In(d.events, h)) && (s = !1);
  }), s) : !1;
}
function Ss(t) {
  return qt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function am(t) {
  if (qt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Ss(r);
    }
  }
  return !1;
}
function cm(t) {
  if (qt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function um(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function lm(t) {
  return t == null ? void 0 : t.topic;
}
function hm(t, e) {
  let r = null;
  return qt(t == null ? void 0 : t.publicKey, !1) || (r = ue("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Wc(t) {
  let e = !0;
  return Hi(t) ? t.length && (e = t.every((r) => qt(r, !1))) : e = !1, e;
}
function fm(t, e, r) {
  let n = null;
  return Hi(e) && e.length ? e.forEach((i) => {
    n || Ss(i) || (n = $t("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Ss(t) || (n = $t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function dm(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const a = fm(i, $l(i, s), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function pm(t, e) {
  let r = null;
  return Hi(t) ? t.forEach((n) => {
    r || am(n) || (r = $t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = $t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function gm(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = pm(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function ym(t, e) {
  let r = null;
  return Wc(t == null ? void 0 : t.methods) ? Wc(t == null ? void 0 : t.events) || (r = $t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = $t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Gl(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = ym(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function mm(t, e, r) {
  let n = null;
  if (t && wi(t)) {
    const i = Gl(t, e);
    i && (n = i);
    const s = dm(t, e, r);
    s && (n = s);
  } else
    n = ue("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function gs(t, e) {
  let r = null;
  if (t && wi(t)) {
    const n = Gl(t, e);
    n && (r = n);
    const i = gm(t, e);
    i && (r = i);
  } else
    r = ue("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Ql(t) {
  return qt(t.protocol, !0);
}
function vm(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Hi(t) && t.length && t.forEach((n) => {
    r = Ql(n);
  }), r;
}
function bm(t) {
  return typeof t == "number";
}
function fr(t) {
  return typeof t < "u" && typeof t !== null;
}
function _m(t) {
  return !(!t || typeof t != "object" || !t.code || !xa(t.code, !1) || !t.message || !qt(t.message, !1));
}
function wm(t) {
  return !(ir(t) || !qt(t.method, !1));
}
function Em(t) {
  return !(ir(t) || ir(t.result) && ir(t.error) || !xa(t.id, !1) || !qt(t.jsonrpc, !1));
}
function Sm(t) {
  return !(ir(t) || !qt(t.name, !1));
}
function Gc(t, e) {
  return !(!Ss(e) || !em(t).includes(e));
}
function Dm(t, e, r) {
  return qt(r, !1) ? tm(t, e).includes(r) : !1;
}
function xm(t, e, r) {
  return qt(r, !1) ? rm(t, e).includes(r) : !1;
}
function Qc(t, e, r) {
  let n = null;
  const i = Om(t), s = Im(e), a = Object.keys(i), o = Object.keys(s), u = Zc(Object.keys(t)), h = Zc(Object.keys(e)), f = u.filter((d) => !h.includes(d));
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
function Om(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Zc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Im(t) {
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
function Cm(t, e) {
  return xa(t, !1) && t <= e.max && t >= e.min;
}
function Yc() {
  const t = Ki();
  return new Promise((e) => {
    switch (t) {
      case yr.browser:
        e(Rm());
        break;
      case yr.reactNative:
        e(Tm());
        break;
      case yr.node:
        e(Am());
        break;
      default:
        e(!0);
    }
  });
}
function Rm() {
  return Vi() && (navigator == null ? void 0 : navigator.onLine);
}
async function Tm() {
  if (Ks() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Am() {
  return !0;
}
function Nm(t) {
  switch (Ki()) {
    case yr.browser:
      Pm(t);
      break;
    case yr.reactNative:
      Lm(t);
      break;
  }
}
function Pm(t) {
  Vi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Lm(t) {
  Ks() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const mo = {};
let us = class {
  static get(e) {
    return mo[e];
  }
  static set(e, r) {
    mo[e] = r;
  }
  static delete(e) {
    delete mo[e];
  }
};
const Fm = "PARSE_ERROR", Um = "INVALID_REQUEST", Mm = "METHOD_NOT_FOUND", jm = "INVALID_PARAMS", Zl = "INTERNAL_ERROR", Oa = "SERVER_ERROR", km = [-32700, -32600, -32601, -32602, -32603], Ei = {
  [Fm]: { code: -32700, message: "Parse error" },
  [Um]: { code: -32600, message: "Invalid Request" },
  [Mm]: { code: -32601, message: "Method not found" },
  [jm]: { code: -32602, message: "Invalid params" },
  [Zl]: { code: -32603, message: "Internal error" },
  [Oa]: { code: -32e3, message: "Server error" }
}, Yl = Oa;
function $m(t) {
  return km.includes(t);
}
function Jc(t) {
  return Object.keys(Ei).includes(t) ? Ei[t] : Ei[Yl];
}
function qm(t) {
  const e = Object.values(Ei).find((r) => r.code === t);
  return e || Ei[Yl];
}
function zm(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Jl = {}, Qr = {}, Xc;
function Bm() {
  if (Xc)
    return Qr;
  Xc = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.isBrowserCryptoAvailable = Qr.getSubtleCrypto = Qr.getBrowerCrypto = void 0;
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
var Zr = {}, eu;
function Vm() {
  if (eu)
    return Zr;
  eu = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.isBrowser = Zr.isNode = Zr.isReactNative = void 0;
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
  const e = Wr;
  e.__exportStar(Bm(), t), e.__exportStar(Vm(), t);
})(Jl);
function Ia(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Xl(t = 6) {
  return BigInt(Ia(t));
}
function Oi(t, e, r) {
  return {
    id: r || Ia(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Ca(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Ra(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Km(e, r)
  };
}
function Km(t, e) {
  return typeof t > "u" ? Jc(Zl) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Jc(Oa)), { message: t })), typeof e < "u" && (t.data = e), $m(t.code) && (t = qm(t.code)), t);
}
class Hm {
}
class Wm extends Hm {
  constructor() {
    super();
  }
}
class Gm extends Wm {
  constructor(e) {
    super();
  }
}
const Qm = "^wss?:";
function Zm(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Ym(t, e) {
  const r = Zm(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function tu(t) {
  return Ym(t, Qm);
}
function Jm(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function eh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Ta(t) {
  return eh(t) && "method" in t;
}
function Hs(t) {
  return eh(t) && (Xr(t) || Ir(t));
}
function Xr(t) {
  return "result" in t;
}
function Ir(t) {
  return "error" in t;
}
class Xm extends Gm {
  constructor(e) {
    super(e), this.events = new Dr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Oi(e.method, e.params || [], e.id || Xl().toString()), r);
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
        Ir(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", e), Hs(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const ev = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), tv = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", ru = (t) => t.split("?")[0], nu = 10, rv = ev();
class nv {
  constructor(e) {
    if (this.url = e, this.events = new Dr.EventEmitter(), this.registering = !1, !tu(e))
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
      this.socket.send(pa(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!tu(e))
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
      const i = Jl.isReactNative() ? void 0 : { rejectUnauthorized: !Jm(e) }, s = new rv(e, [], i);
      tv() ? s.onerror = (a) => {
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
    const r = typeof e.data == "string" ? gl(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Ra(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return zm(e, ru(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > nu && this.events.setMaxListeners(nu);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${ru(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ds = { exports: {} };
Ds.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", b = "[object Function]", E = "[object GeneratorFunction]", x = "[object Map]", D = "[object Number]", M = "[object Null]", w = "[object Object]", R = "[object Promise]", _ = "[object Proxy]", v = "[object RegExp]", p = "[object Set]", c = "[object String]", g = "[object Symbol]", A = "[object Undefined]", F = "[object WeakMap]", B = "[object ArrayBuffer]", G = "[object DataView]", ee = "[object Float32Array]", N = "[object Float64Array]", $ = "[object Int8Array]", se = "[object Int16Array]", Z = "[object Int32Array]", W = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", H = "[object Uint16Array]", J = "[object Uint32Array]", we = /[\\^$.*+?()[\]{}|]/g, re = /^\[object .+?Constructor\]$/, be = /^(?:0|[1-9]\d*)$/, he = {};
  he[ee] = he[N] = he[$] = he[se] = he[Z] = he[W] = he[Y] = he[H] = he[J] = !0, he[o] = he[u] = he[B] = he[f] = he[G] = he[d] = he[y] = he[b] = he[x] = he[D] = he[w] = he[v] = he[p] = he[c] = he[F] = !1;
  var me = typeof Vr == "object" && Vr && Vr.Object === Object && Vr, z = typeof self == "object" && self && self.Object === Object && self, q = me || z || Function("return this")(), L = e && !e.nodeType && e, l = L && !0 && t && !t.nodeType && t, T = l && l.exports === L, oe = T && me.process, le = function() {
    try {
      return oe && oe.binding && oe.binding("util");
    } catch {
    }
  }(), ke = le && le.isTypedArray;
  function xe(S, U) {
    for (var Q = -1, pe = S == null ? 0 : S.length, gt = 0, Me = []; ++Q < pe; ) {
      var At = S[Q];
      U(At, Q, S) && (Me[gt++] = At);
    }
    return Me;
  }
  function Ae(S, U) {
    for (var Q = -1, pe = U.length, gt = S.length; ++Q < pe; )
      S[gt + Q] = U[Q];
    return S;
  }
  function We(S, U) {
    for (var Q = -1, pe = S == null ? 0 : S.length; ++Q < pe; )
      if (U(S[Q], Q, S))
        return !0;
    return !1;
  }
  function it(S, U) {
    for (var Q = -1, pe = Array(S); ++Q < S; )
      pe[Q] = U(Q);
    return pe;
  }
  function rt(S) {
    return function(U) {
      return S(U);
    };
  }
  function $e(S, U) {
    return S.has(U);
  }
  function Fe(S, U) {
    return S == null ? void 0 : S[U];
  }
  function Re(S) {
    var U = -1, Q = Array(S.size);
    return S.forEach(function(pe, gt) {
      Q[++U] = [gt, pe];
    }), Q;
  }
  function Ne(S, U) {
    return function(Q) {
      return S(U(Q));
    };
  }
  function Te(S) {
    var U = -1, Q = Array(S.size);
    return S.forEach(function(pe) {
      Q[++U] = pe;
    }), Q;
  }
  var Ie = Array.prototype, Oe = Function.prototype, _e = Object.prototype, Pe = q["__core-js_shared__"], Ue = Oe.toString, Se = _e.hasOwnProperty, qe = function() {
    var S = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Ge = _e.toString, Ze = RegExp(
    "^" + Ue.call(Se).replace(we, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Qe = T ? q.Buffer : void 0, Ye = q.Symbol, tr = q.Uint8Array, Ht = _e.propertyIsEnumerable, pr = Ie.splice, Lt = Ye ? Ye.toStringTag : void 0, Ft = Object.getOwnPropertySymbols, ur = Qe ? Qe.isBuffer : void 0, Ur = Ne(Object.keys, Object), ct = nt(q, "DataView"), ut = nt(q, "Map"), yt = nt(q, "Promise"), ft = nt(q, "Set"), mt = nt(q, "WeakMap"), lt = nt(Object, "create"), St = mn(ct), It = mn(ut), Ct = mn(yt), Dt = mn(ft), Rt = mn(mt), vt = Ye ? Ye.prototype : void 0, bt = vt ? vt.valueOf : void 0;
  function ot(S) {
    var U = -1, Q = S == null ? 0 : S.length;
    for (this.clear(); ++U < Q; ) {
      var pe = S[U];
      this.set(pe[0], pe[1]);
    }
  }
  function C() {
    this.__data__ = lt ? lt(null) : {}, this.size = 0;
  }
  function K(S) {
    var U = this.has(S) && delete this.__data__[S];
    return this.size -= U ? 1 : 0, U;
  }
  function ce(S) {
    var U = this.__data__;
    if (lt) {
      var Q = U[S];
      return Q === n ? void 0 : Q;
    }
    return Se.call(U, S) ? U[S] : void 0;
  }
  function Ee(S) {
    var U = this.__data__;
    return lt ? U[S] !== void 0 : Se.call(U, S);
  }
  function Je(S, U) {
    var Q = this.__data__;
    return this.size += this.has(S) ? 0 : 1, Q[S] = lt && U === void 0 ? n : U, this;
  }
  ot.prototype.clear = C, ot.prototype.delete = K, ot.prototype.get = ce, ot.prototype.has = Ee, ot.prototype.set = Je;
  function Be(S) {
    var U = -1, Q = S == null ? 0 : S.length;
    for (this.clear(); ++U < Q; ) {
      var pe = S[U];
      this.set(pe[0], pe[1]);
    }
  }
  function He() {
    this.__data__ = [], this.size = 0;
  }
  function ze(S) {
    var U = this.__data__, Q = O(U, S);
    if (Q < 0)
      return !1;
    var pe = U.length - 1;
    return Q == pe ? U.pop() : pr.call(U, Q, 1), --this.size, !0;
  }
  function Ut(S) {
    var U = this.__data__, Q = O(U, S);
    return Q < 0 ? void 0 : U[Q][1];
  }
  function dt(S) {
    return O(this.__data__, S) > -1;
  }
  function _t(S, U) {
    var Q = this.__data__, pe = O(Q, S);
    return pe < 0 ? (++this.size, Q.push([S, U])) : Q[pe][1] = U, this;
  }
  Be.prototype.clear = He, Be.prototype.delete = ze, Be.prototype.get = Ut, Be.prototype.has = dt, Be.prototype.set = _t;
  function Tt(S) {
    var U = -1, Q = S == null ? 0 : S.length;
    for (this.clear(); ++U < Q; ) {
      var pe = S[U];
      this.set(pe[0], pe[1]);
    }
  }
  function Mr() {
    this.size = 0, this.__data__ = {
      hash: new ot(),
      map: new (ut || Be)(),
      string: new ot()
    };
  }
  function yn(S) {
    var U = pt(this, S).delete(S);
    return this.size -= U ? 1 : 0, U;
  }
  function zt(S) {
    return pt(this, S).get(S);
  }
  function Xi(S) {
    return pt(this, S).has(S);
  }
  function rn(S, U) {
    var Q = pt(this, S), pe = Q.size;
    return Q.set(S, U), this.size += Q.size == pe ? 0 : 1, this;
  }
  Tt.prototype.clear = Mr, Tt.prototype.delete = yn, Tt.prototype.get = zt, Tt.prototype.has = Xi, Tt.prototype.set = rn;
  function Mn(S) {
    var U = -1, Q = S == null ? 0 : S.length;
    for (this.__data__ = new Tt(); ++U < Q; )
      this.add(S[U]);
  }
  function jn(S) {
    return this.__data__.set(S, n), this;
  }
  function ri(S) {
    return this.__data__.has(S);
  }
  Mn.prototype.add = Mn.prototype.push = jn, Mn.prototype.has = ri;
  function jr(S) {
    var U = this.__data__ = new Be(S);
    this.size = U.size;
  }
  function Xs() {
    this.__data__ = new Be(), this.size = 0;
  }
  function ni(S) {
    var U = this.__data__, Q = U.delete(S);
    return this.size = U.size, Q;
  }
  function eo(S) {
    return this.__data__.get(S);
  }
  function to(S) {
    return this.__data__.has(S);
  }
  function m(S, U) {
    var Q = this.__data__;
    if (Q instanceof Be) {
      var pe = Q.__data__;
      if (!ut || pe.length < r - 1)
        return pe.push([S, U]), this.size = ++Q.size, this;
      Q = this.__data__ = new Tt(pe);
    }
    return Q.set(S, U), this.size = Q.size, this;
  }
  jr.prototype.clear = Xs, jr.prototype.delete = ni, jr.prototype.get = eo, jr.prototype.has = to, jr.prototype.set = m;
  function I(S, U) {
    var Q = ts(S), pe = !Q && Bh(S), gt = !Q && !pe && io(S), Me = !Q && !pe && !gt && Ga(S), At = Q || pe || gt || Me, Mt = At ? it(S.length, String) : [], Bt = Mt.length;
    for (var xt in S)
      (U || Se.call(S, xt)) && !(At && // Safari 9 has enumerable `arguments.length` in strict mode.
      (xt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      gt && (xt == "offset" || xt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Me && (xt == "buffer" || xt == "byteLength" || xt == "byteOffset") || // Skip index properties.
      ro(xt, Bt))) && Mt.push(xt);
    return Mt;
  }
  function O(S, U) {
    for (var Q = S.length; Q--; )
      if (Va(S[Q][0], U))
        return Q;
    return -1;
  }
  function j(S, U, Q) {
    var pe = U(S);
    return ts(S) ? pe : Ae(pe, Q(S));
  }
  function P(S) {
    return S == null ? S === void 0 ? A : M : Lt && Lt in Object(S) ? lr(S) : zh(S);
  }
  function k(S) {
    return si(S) && P(S) == o;
  }
  function V(S, U, Q, pe, gt) {
    return S === U ? !0 : S == null || U == null || !si(S) && !si(U) ? S !== S && U !== U : X(S, U, Q, pe, V, gt);
  }
  function X(S, U, Q, pe, gt, Me) {
    var At = ts(S), Mt = ts(U), Bt = At ? u : br(S), xt = Mt ? u : br(U);
    Bt = Bt == o ? w : Bt, xt = xt == o ? w : xt;
    var gr = Bt == w, xr = xt == w, Wt = Bt == xt;
    if (Wt && io(S)) {
      if (!io(U))
        return !1;
      At = !0, gr = !1;
    }
    if (Wt && !gr)
      return Me || (Me = new jr()), At || Ga(S) ? ye(S, U, Q, pe, gt, Me) : Ve(S, U, Bt, Q, pe, gt, Me);
    if (!(Q & i)) {
      var _r = gr && Se.call(S, "__wrapped__"), wr = xr && Se.call(U, "__wrapped__");
      if (_r || wr) {
        var nn = _r ? S.value() : S, Gr = wr ? U.value() : U;
        return Me || (Me = new jr()), gt(nn, Gr, Q, pe, Me);
      }
    }
    return Wt ? (Me || (Me = new jr()), st(S, U, Q, pe, gt, Me)) : !1;
  }
  function ie(S) {
    if (!Wa(S) || es(S))
      return !1;
    var U = Ka(S) ? Ze : re;
    return U.test(mn(S));
  }
  function ne(S) {
    return si(S) && Ha(S.length) && !!he[P(S)];
  }
  function te(S) {
    if (!qh(S))
      return Ur(S);
    var U = [];
    for (var Q in Object(S))
      Se.call(S, Q) && Q != "constructor" && U.push(Q);
    return U;
  }
  function ye(S, U, Q, pe, gt, Me) {
    var At = Q & i, Mt = S.length, Bt = U.length;
    if (Mt != Bt && !(At && Bt > Mt))
      return !1;
    var xt = Me.get(S);
    if (xt && Me.get(U))
      return xt == U;
    var gr = -1, xr = !0, Wt = Q & s ? new Mn() : void 0;
    for (Me.set(S, U), Me.set(U, S); ++gr < Mt; ) {
      var _r = S[gr], wr = U[gr];
      if (pe)
        var nn = At ? pe(wr, _r, gr, U, S, Me) : pe(_r, wr, gr, S, U, Me);
      if (nn !== void 0) {
        if (nn)
          continue;
        xr = !1;
        break;
      }
      if (Wt) {
        if (!We(U, function(Gr, vn) {
          if (!$e(Wt, vn) && (_r === Gr || gt(_r, Gr, Q, pe, Me)))
            return Wt.push(vn);
        })) {
          xr = !1;
          break;
        }
      } else if (!(_r === wr || gt(_r, wr, Q, pe, Me))) {
        xr = !1;
        break;
      }
    }
    return Me.delete(S), Me.delete(U), xr;
  }
  function Ve(S, U, Q, pe, gt, Me, At) {
    switch (Q) {
      case G:
        if (S.byteLength != U.byteLength || S.byteOffset != U.byteOffset)
          return !1;
        S = S.buffer, U = U.buffer;
      case B:
        return !(S.byteLength != U.byteLength || !Me(new tr(S), new tr(U)));
      case f:
      case d:
      case D:
        return Va(+S, +U);
      case y:
        return S.name == U.name && S.message == U.message;
      case v:
      case c:
        return S == U + "";
      case x:
        var Mt = Re;
      case p:
        var Bt = pe & i;
        if (Mt || (Mt = Te), S.size != U.size && !Bt)
          return !1;
        var xt = At.get(S);
        if (xt)
          return xt == U;
        pe |= s, At.set(S, U);
        var gr = ye(Mt(S), Mt(U), pe, gt, Me, At);
        return At.delete(S), gr;
      case g:
        if (bt)
          return bt.call(S) == bt.call(U);
    }
    return !1;
  }
  function st(S, U, Q, pe, gt, Me) {
    var At = Q & i, Mt = et(S), Bt = Mt.length, xt = et(U), gr = xt.length;
    if (Bt != gr && !At)
      return !1;
    for (var xr = Bt; xr--; ) {
      var Wt = Mt[xr];
      if (!(At ? Wt in U : Se.call(U, Wt)))
        return !1;
    }
    var _r = Me.get(S);
    if (_r && Me.get(U))
      return _r == U;
    var wr = !0;
    Me.set(S, U), Me.set(U, S);
    for (var nn = At; ++xr < Bt; ) {
      Wt = Mt[xr];
      var Gr = S[Wt], vn = U[Wt];
      if (pe)
        var Qa = At ? pe(vn, Gr, Wt, U, S, Me) : pe(Gr, vn, Wt, S, U, Me);
      if (!(Qa === void 0 ? Gr === vn || gt(Gr, vn, Q, pe, Me) : Qa)) {
        wr = !1;
        break;
      }
      nn || (nn = Wt == "constructor");
    }
    if (wr && !nn) {
      var rs = S.constructor, ns = U.constructor;
      rs != ns && "constructor" in S && "constructor" in U && !(typeof rs == "function" && rs instanceof rs && typeof ns == "function" && ns instanceof ns) && (wr = !1);
    }
    return Me.delete(S), Me.delete(U), wr;
  }
  function et(S) {
    return j(S, Hh, ii);
  }
  function pt(S, U) {
    var Q = S.__data__;
    return no(U) ? Q[typeof U == "string" ? "string" : "hash"] : Q.map;
  }
  function nt(S, U) {
    var Q = Fe(S, U);
    return ie(Q) ? Q : void 0;
  }
  function lr(S) {
    var U = Se.call(S, Lt), Q = S[Lt];
    try {
      S[Lt] = void 0;
      var pe = !0;
    } catch {
    }
    var gt = Ge.call(S);
    return pe && (U ? S[Lt] = Q : delete S[Lt]), gt;
  }
  var ii = Ft ? function(S) {
    return S == null ? [] : (S = Object(S), xe(Ft(S), function(U) {
      return Ht.call(S, U);
    }));
  } : Wh, br = P;
  (ct && br(new ct(new ArrayBuffer(1))) != G || ut && br(new ut()) != x || yt && br(yt.resolve()) != R || ft && br(new ft()) != p || mt && br(new mt()) != F) && (br = function(S) {
    var U = P(S), Q = U == w ? S.constructor : void 0, pe = Q ? mn(Q) : "";
    if (pe)
      switch (pe) {
        case St:
          return G;
        case It:
          return x;
        case Ct:
          return R;
        case Dt:
          return p;
        case Rt:
          return F;
      }
    return U;
  });
  function ro(S, U) {
    return U = U ?? a, !!U && (typeof S == "number" || be.test(S)) && S > -1 && S % 1 == 0 && S < U;
  }
  function no(S) {
    var U = typeof S;
    return U == "string" || U == "number" || U == "symbol" || U == "boolean" ? S !== "__proto__" : S === null;
  }
  function es(S) {
    return !!qe && qe in S;
  }
  function qh(S) {
    var U = S && S.constructor, Q = typeof U == "function" && U.prototype || _e;
    return S === Q;
  }
  function zh(S) {
    return Ge.call(S);
  }
  function mn(S) {
    if (S != null) {
      try {
        return Ue.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function Va(S, U) {
    return S === U || S !== S && U !== U;
  }
  var Bh = k(function() {
    return arguments;
  }()) ? k : function(S) {
    return si(S) && Se.call(S, "callee") && !Ht.call(S, "callee");
  }, ts = Array.isArray;
  function Vh(S) {
    return S != null && Ha(S.length) && !Ka(S);
  }
  var io = ur || Gh;
  function Kh(S, U) {
    return V(S, U);
  }
  function Ka(S) {
    if (!Wa(S))
      return !1;
    var U = P(S);
    return U == b || U == E || U == h || U == _;
  }
  function Ha(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Wa(S) {
    var U = typeof S;
    return S != null && (U == "object" || U == "function");
  }
  function si(S) {
    return S != null && typeof S == "object";
  }
  var Ga = ke ? rt(ke) : ne;
  function Hh(S) {
    return Vh(S) ? I(S) : te(S);
  }
  function Wh() {
    return [];
  }
  function Gh() {
    return !1;
  }
  t.exports = Kh;
})(Ds, Ds.exports);
var iv = Ds.exports;
const sv = /* @__PURE__ */ Ms(iv);
function ov(t, e) {
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
  var o = t.length, u = t.charAt(0), h = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var x = 0, D = 0, M = 0, w = E.length; M !== w && E[M] === 0; )
      M++, x++;
    for (var R = (w - M) * f + 1 >>> 0, _ = new Uint8Array(R); M !== w; ) {
      for (var v = E[M], p = 0, c = R - 1; (v !== 0 || p < D) && c !== -1; c--, p++)
        v += 256 * _[c] >>> 0, _[c] = v % o >>> 0, v = v / o >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      D = p, M++;
    }
    for (var g = R - D; g !== R && _[g] === 0; )
      g++;
    for (var A = u.repeat(x); g < R; ++g)
      A += t.charAt(_[g]);
    return A;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var x = 0;
    if (E[x] !== " ") {
      for (var D = 0, M = 0; E[x] === u; )
        D++, x++;
      for (var w = (E.length - x) * h + 1 >>> 0, R = new Uint8Array(w); E[x]; ) {
        var _ = r[E.charCodeAt(x)];
        if (_ === 255)
          return;
        for (var v = 0, p = w - 1; (_ !== 0 || v < M) && p !== -1; p--, v++)
          _ += o * R[p] >>> 0, R[p] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        M = v, x++;
      }
      if (E[x] !== " ") {
        for (var c = w - M; c !== w && R[c] === 0; )
          c++;
        for (var g = new Uint8Array(D + (w - c)), A = D; c !== w; )
          g[A++] = R[c++];
        return g;
      }
    }
  }
  function b(E) {
    var x = y(E);
    if (x)
      return x;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: y, decode: b };
}
var av = ov, cv = av;
const th = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, uv = (t) => new TextEncoder().encode(t), lv = (t) => new TextDecoder().decode(t);
class hv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class fv {
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
    return rh(this, e);
  }
}
class dv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return rh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const rh = (t, e) => new dv({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class pv {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new hv(e, r, n), this.decoder = new fv(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ws = ({ name: t, prefix: e, encode: r, decode: n }) => new pv(t, e, r, n), Wi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = cv(r, e);
  return Ws({ prefix: t, name: e, encode: n, decode: (s) => th(i(s)) });
}, gv = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const a = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[h++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, yv = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Kt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ws({ prefix: e, name: t, encode(i) {
  return yv(i, n, r);
}, decode(i) {
  return gv(i, n, r, t);
} }), mv = Ws({ prefix: "\0", name: "identity", encode: (t) => lv(t), decode: (t) => uv(t) });
var vv = Object.freeze({ __proto__: null, identity: mv });
const bv = Kt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var _v = Object.freeze({ __proto__: null, base2: bv });
const wv = Kt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Ev = Object.freeze({ __proto__: null, base8: wv });
const Sv = Wi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Dv = Object.freeze({ __proto__: null, base10: Sv });
const xv = Kt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Ov = Kt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Iv = Object.freeze({ __proto__: null, base16: xv, base16upper: Ov });
const Cv = Kt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Rv = Kt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Tv = Kt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Av = Kt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Nv = Kt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Pv = Kt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Lv = Kt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Fv = Kt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Uv = Kt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Mv = Object.freeze({ __proto__: null, base32: Cv, base32upper: Rv, base32pad: Tv, base32padupper: Av, base32hex: Nv, base32hexupper: Pv, base32hexpad: Lv, base32hexpadupper: Fv, base32z: Uv });
const jv = Wi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), kv = Wi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var $v = Object.freeze({ __proto__: null, base36: jv, base36upper: kv });
const qv = Wi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), zv = Wi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Bv = Object.freeze({ __proto__: null, base58btc: qv, base58flickr: zv });
const Vv = Kt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Kv = Kt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Hv = Kt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Wv = Kt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Gv = Object.freeze({ __proto__: null, base64: Vv, base64pad: Kv, base64url: Hv, base64urlpad: Wv });
const nh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Qv = nh.reduce((t, e, r) => (t[r] = e, t), []), Zv = nh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Yv(t) {
  return t.reduce((e, r) => (e += Qv[r], e), "");
}
function Jv(t) {
  const e = [];
  for (const r of t) {
    const n = Zv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Xv = Ws({ prefix: "🚀", name: "base256emoji", encode: Yv, decode: Jv });
var e0 = Object.freeze({ __proto__: null, base256emoji: Xv }), t0 = ih, iu = 128, r0 = 127, n0 = ~r0, i0 = Math.pow(2, 31);
function ih(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= i0; )
    e[r++] = t & 255 | iu, t /= 128;
  for (; t & n0; )
    e[r++] = t & 255 | iu, t >>>= 7;
  return e[r] = t | 0, ih.bytes = r - n + 1, e;
}
var s0 = Ho, o0 = 128, su = 127;
function Ho(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, a, o = t.length;
  do {
    if (s >= o)
      throw Ho.bytes = 0, new RangeError("Could not decode varint");
    a = t[s++], r += i < 28 ? (a & su) << i : (a & su) * Math.pow(2, i), i += 7;
  } while (a >= o0);
  return Ho.bytes = s - n, r;
}
var a0 = Math.pow(2, 7), c0 = Math.pow(2, 14), u0 = Math.pow(2, 21), l0 = Math.pow(2, 28), h0 = Math.pow(2, 35), f0 = Math.pow(2, 42), d0 = Math.pow(2, 49), p0 = Math.pow(2, 56), g0 = Math.pow(2, 63), y0 = function(t) {
  return t < a0 ? 1 : t < c0 ? 2 : t < u0 ? 3 : t < l0 ? 4 : t < h0 ? 5 : t < f0 ? 6 : t < d0 ? 7 : t < p0 ? 8 : t < g0 ? 9 : 10;
}, m0 = { encode: t0, decode: s0, encodingLength: y0 }, sh = m0;
const ou = (t, e, r = 0) => (sh.encode(t, e, r), e), au = (t) => sh.encodingLength(t), Wo = (t, e) => {
  const r = e.byteLength, n = au(t), i = n + au(r), s = new Uint8Array(i + r);
  return ou(t, s, 0), ou(r, s, n), s.set(e, i), new v0(t, r, e, s);
};
class v0 {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const oh = ({ name: t, code: e, encode: r }) => new b0(t, e, r);
class b0 {
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
const ah = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), _0 = oh({ name: "sha2-256", code: 18, encode: ah("SHA-256") }), w0 = oh({ name: "sha2-512", code: 19, encode: ah("SHA-512") });
var E0 = Object.freeze({ __proto__: null, sha256: _0, sha512: w0 });
const ch = 0, S0 = "identity", uh = th, D0 = (t) => Wo(ch, uh(t)), x0 = { code: ch, name: S0, encode: uh, digest: D0 };
var O0 = Object.freeze({ __proto__: null, identity: x0 });
new TextEncoder(), new TextDecoder();
const cu = { ...vv, ..._v, ...Ev, ...Dv, ...Iv, ...Mv, ...$v, ...Bv, ...Gv, ...e0 };
({ ...E0, ...O0 });
function lh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function I0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? lh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function hh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const uu = hh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), vo = hh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = I0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), C0 = { utf8: uu, "utf-8": uu, hex: cu.base16, latin1: vo, ascii: vo, binary: vo, ...cu };
function R0(t, e = "utf8") {
  const r = C0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? lh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const fh = "wc", T0 = 2, Aa = "core", un = `${fh}@2:${Aa}:`, A0 = { name: Aa, logger: "error" }, N0 = { database: ":memory:" }, P0 = "crypto", lu = "client_ed25519_seed", L0 = ge.ONE_DAY, F0 = "keychain", U0 = "0.3", M0 = "messages", j0 = "0.3", k0 = ge.SIX_HOURS, $0 = "publisher", dh = "irn", q0 = "error", ph = "wss://relay.walletconnect.com", hu = "wss://relay.walletconnect.org", z0 = "relayer", Xt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, B0 = "_subscription", Yr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, V0 = ge.ONE_SECOND, K0 = "2.10.0", H0 = 1e4, W0 = "0.3", G0 = "WALLETCONNECT_CLIENT_ID", Br = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Q0 = "subscription", Z0 = "0.3", Y0 = ge.FIVE_SECONDS * 1e3, J0 = "pairing", X0 = "0.3", fi = { wc_pairingDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 } } }, zr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, eb = "history", tb = "0.3", rb = "expirer", Er = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, nb = "0.3", bo = "verify-api", ys = "https://verify.walletconnect.com", fu = "https://verify.walletconnect.org";
class ib {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = F0, this.version = U0, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, Vl(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Kl(e) : void 0;
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
class sb {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = P0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Tc(i);
      return Tl(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Ey();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), a = Tc(s), o = Vo();
      return await Tg(o, i, L0, a);
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
      const o = Bl(a), u = pa(s);
      if (qc(o)) {
        const y = o.senderPublicKey, b = o.receiverPublicKey;
        i = await this.generateSharedKey(y, b);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: d } = o;
      return Oy({ type: f, symKey: h, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, a) => {
      this.isInitialized();
      const o = Ry(s, a);
      if (qc(o)) {
        const u = o.receiverPublicKey, h = o.senderPublicKey;
        i = await this.generateSharedKey(u, h);
      }
      try {
        const u = this.getSymKey(i), h = Iy({ symKey: u, encoded: s });
        return gl(h);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = Es(i);
      return Bi(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = Es(i);
      return s.senderPublicKey ? ar(s.senderPublicKey, or) : void 0;
    }, this.core = e, this.logger = Xe.generateChildLogger(r, this.name), this.keychain = n || new ib(this.core, this.logger);
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
      e = this.keychain.get(lu);
    } catch {
      e = Vo(), await this.keychain.set(lu, e);
    }
    return R0(e, "base16");
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
class ob extends Pd {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = M0, this.version = j0, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
      const s = Hn(i);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[s] < "u" || (a[s] = i, this.messages.set(n, a), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), a = Hn(i);
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
    await this.core.storage.setItem(this.storageKey, Vl(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Kl(e) : void 0;
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
class ab extends Ld {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Dr.EventEmitter(), this.name = $0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ge.toMiliseconds(ge.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || k0, u = Ko(s), h = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || Xl().toString(), y = { topic: n, message: i, opts: { ttl: o, relay: u, prompt: h, tag: f, id: d } }, b = setTimeout(() => this.queue.set(d, y), this.publishTimeout);
        try {
          await await xi(this.rpcPublish(n, i, o, u, h, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(Xt.publish, y);
        } catch (E) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = s == null ? void 0 : s.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), E;
          return;
        } finally {
          clearTimeout(b);
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
    var u, h, f, d;
    const y = { method: ps(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: a }, id: o };
    return ir((u = y.params) == null ? void 0 : u.prompt) && ((h = y.params) == null || delete h.prompt), ir((f = y.params) == null ? void 0 : f.tag) && ((d = y.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
class cb {
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
var ub = Object.defineProperty, lb = Object.defineProperties, hb = Object.getOwnPropertyDescriptors, du = Object.getOwnPropertySymbols, fb = Object.prototype.hasOwnProperty, db = Object.prototype.propertyIsEnumerable, pu = (t, e, r) => e in t ? ub(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, di = (t, e) => {
  for (var r in e || (e = {}))
    fb.call(e, r) && pu(t, r, e[r]);
  if (du)
    for (var r of du(e))
      db.call(e, r) && pu(t, r, e[r]);
  return t;
}, _o = (t, e) => lb(t, hb(e));
class pb extends Md {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new cb(), this.events = new Dr.EventEmitter(), this.name = Q0, this.version = Z0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = un, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Ko(i), a = { topic: n, relay: s };
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
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= Y0 && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
      const i = Ko(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = $t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: ps(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await xi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xt.connection_stalled);
    }
    return Hn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: ps(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await xi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: ps(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, _o(di({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, di({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, di({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Br.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Br.deleted, _o(di({}, n), { reason: r }));
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
    Hi(r) && this.onBatchSubscribe(r.map((n, i) => _o(di({}, e[i]), { id: n })));
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
var gb = Object.defineProperty, gu = Object.getOwnPropertySymbols, yb = Object.prototype.hasOwnProperty, mb = Object.prototype.propertyIsEnumerable, yu = (t, e, r) => e in t ? gb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, vb = (t, e) => {
  for (var r in e || (e = {}))
    yb.call(e, r) && yu(t, r, e[r]);
  if (gu)
    for (var r of gu(e))
      mb.call(e, r) && yu(t, r, e[r]);
  return t;
};
class bb extends Fd {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Dr.EventEmitter(), this.name = z0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
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
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Xe.generateChildLogger(e.logger, this.name) : Xe.pino(Xe.getDefaultLoggerOptions({ level: e.logger || q0 })), this.messages = new ob(this.logger, e.core), this.subscriber = new pb(this, this.logger), this.publisher = new ab(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || ph, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${hu}...`), await this.restartTransport(hu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, H0);
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await xi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
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
            await xi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await Yc())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Xm(new nv($y({ sdkVersion: K0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Ta(e)) {
      if (!e.method.endsWith(B0))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, a = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(vb({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Hs(e) && this.events.emit(Xt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Xt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Ca(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Yr.payload, this.onPayloadHandler), this.provider.off(Yr.connect, this.onConnectHandler), this.provider.off(Yr.disconnect, this.onDisconnectHandler), this.provider.off(Yr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Xt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Yc();
    Nm(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Xt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ge.toMiliseconds(V0)));
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
var _b = Object.defineProperty, mu = Object.getOwnPropertySymbols, wb = Object.prototype.hasOwnProperty, Eb = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? _b(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bu = (t, e) => {
  for (var r in e || (e = {}))
    wb.call(e, r) && vu(t, r, e[r]);
  if (mu)
    for (var r of mu(e))
      Eb.call(e, r) && vu(t, r, e[r]);
  return t;
};
class Gs extends Ud {
  constructor(e, r, n, i = un, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = W0, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !ir(a) ? this.map.set(this.getKey(a), a) : um(a) ? this.map.set(a.id, a) : lm(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => sv(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = bu(bu({}, this.getData(a)), o);
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
class Sb {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = J0, this.version = X0, this.events = new $i(), this.initialized = !1, this.storagePrefix = un, this.ignoredPayloadTypes = [Un], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Vo(), i = await this.core.crypto.setSymKey(n), s = Or(ge.FIVE_MINUTES), a = { protocol: dh }, o = { topic: i, expiry: s, relay: a, active: !1 }, u = Xy({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: a });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: a } = Zy(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const o = Or(ge.FIVE_MINUTES), u = { topic: i, relay: a, expiry: o, active: !1 };
      return await this.pairings.set(i, u), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: a }), this.core.expirer.set(i, o), n.activatePairing && await this.activate({ topic: i }), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Or(ge.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = qn();
        this.events.once(Nt("pairing_ping", s), ({ error: h }) => {
          h ? u(h) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", $t("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const a = Oi(i, s), o = await this.core.crypto.encode(n, a), u = fi[i].req;
      return await this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, i, s) => {
      const a = Ca(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), h = fi[u.request.method].res;
      await this.core.relayer.publish(i, o, h), await this.core.history.resolve(a);
    }, this.sendError = async (n, i, s) => {
      const a = Ra(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), h = fi[u.request.method] ? fi[u.request.method].res : fi.unregistered_method.res;
      await this.core.relayer.publish(i, o, h), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, $t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
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
        Xr(i) ? this.events.emit(Nt("pairing_ping", s), {}) : Ir(i) && this.events.emit(Nt("pairing_ping", s), { error: i.error });
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
        const o = $t("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(s, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error($t("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!fr(n)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!cm(n.uri)) {
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
    }, this.core = e, this.logger = Xe.generateChildLogger(r, this.name), this.pairings = new Gs(this.core, this.logger, this.name, this.storagePrefix);
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
        Ta(i) ? (await this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Hs(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), await this.core.history.delete(r, i.id));
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
class Db extends Nd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Dr.EventEmitter(), this.name = eb, this.version = tb, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const a = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Or(ge.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(zr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = Ir(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(zr.updated, i));
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
      const n = { topic: r.topic, request: Oi(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
class xb extends jd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Dr.EventEmitter(), this.name = rb, this.version = nb, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
class Ob extends kd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = bo, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Ks() || !Vi())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || ys;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = fu;
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
      const i = (n == null ? void 0 : n.verifyUrl) || ys;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (a) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(a), s = await this.fetchAttestation(n.attestationId, fu);
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
        if (document.getElementById(bo))
          return s();
        window.addEventListener("message", i);
        const a = document.createElement("iframe");
        a.id = bo, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = s;
      }), new Promise((s, a) => setTimeout(() => {
        window.removeEventListener("message", i), a("verify iframe load timeout");
      }, ge.toMiliseconds(ge.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Xe.generateChildLogger(r, this.name), this.verifyUrl = ys, this.abortController = new AbortController(), this.isDevEnv = Da() && process.env.IS_VITEST;
  }
  get context() {
    return Xe.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ge.toMiliseconds(e));
  }
}
var Ib = Object.defineProperty, _u = Object.getOwnPropertySymbols, Cb = Object.prototype.hasOwnProperty, Rb = Object.prototype.propertyIsEnumerable, wu = (t, e, r) => e in t ? Ib(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Eu = (t, e) => {
  for (var r in e || (e = {}))
    Cb.call(e, r) && wu(t, r, e[r]);
  if (_u)
    for (var r of _u(e))
      Rb.call(e, r) && wu(t, r, e[r]);
  return t;
};
class Na extends Ad {
  constructor(e) {
    super(e), this.protocol = fh, this.version = T0, this.name = Aa, this.events = new Dr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || ph;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Xe.pino(Xe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || A0.logger }));
    this.logger = Xe.generateChildLogger(r, this.name), this.heartbeat = new Jn.HeartBeat(), this.crypto = new sb(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Db(this, this.logger), this.expirer = new xb(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Gf(Eu(Eu({}, N0), e == null ? void 0 : e.storageOptions)), this.relayer = new bb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Sb(this, this.logger), this.verify = new Ob(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Na(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(G0, n), r;
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
const Tb = Na, gh = "wc", yh = 2, mh = "client", Pa = `${gh}@${yh}:${mh}:`, wo = { name: mh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Su = "WALLETCONNECT_DEEPLINK_CHOICE", Ab = "proposal", Nb = "Proposal expired", Pb = "session", ls = ge.SEVEN_DAYS, Lb = "engine", pi = { wc_sessionPropose: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Eo = { min: ge.FIVE_MINUTES, max: ge.SEVEN_DAYS }, Jr = { idle: "IDLE", active: "ACTIVE" }, Fb = "request", Ub = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Mb = Object.defineProperty, jb = Object.defineProperties, kb = Object.getOwnPropertyDescriptors, Du = Object.getOwnPropertySymbols, $b = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, xu = (t, e, r) => e in t ? Mb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hr = (t, e) => {
  for (var r in e || (e = {}))
    $b.call(e, r) && xu(t, r, e[r]);
  if (Du)
    for (var r of Du(e))
      qb.call(e, r) && xu(t, r, e[r]);
  return t;
}, gi = (t, e) => jb(t, kb(e));
class zb extends qd {
  constructor(e) {
    super(e), this.name = Lb, this.events = new $i(), this.initialized = !1, this.ignoredPayloadTypes = [Un], this.requestQueue = { state: Jr.idle, queue: [] }, this.sessionRequestQueue = { state: Jr.idle, queue: [] }, this.requestQueueDelay = ge.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(pi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = gi(hr({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let h = i, f, d = !1;
      if (h && (d = this.client.core.pairing.pairings.get(h).active), !h || !d) {
        const { topic: R, uri: _ } = await this.client.core.pairing.create();
        h = R, f = _;
      }
      const y = await this.client.core.crypto.generateKeyPair(), b = hr({ requiredNamespaces: s, optionalNamespaces: a, relays: u ?? [{ protocol: dh }], proposer: { publicKey: y, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: E, resolve: x, done: D } = qn(ge.FIVE_MINUTES, Nb);
      if (this.events.once(Nt("session_connect"), async ({ error: R, session: _ }) => {
        if (R)
          E(R);
        else if (_) {
          _.self.publicKey = y;
          const v = gi(hr({}, _), { requiredNamespaces: _.requiredNamespaces, optionalNamespaces: _.optionalNamespaces });
          await this.client.session.set(_.topic, v), await this.setExpiry(_.topic, _.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: _.peer.metadata }), x(v);
        }
      }), !h) {
        const { message: R } = ue("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(R);
      }
      const M = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: b }), w = Or(ge.FIVE_MINUTES);
      return await this.setProposal(M, hr({ id: M, expiry: w }, b)), { uri: f, approval: D };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: h, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", wi(f) || (f = nm(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), b = h.publicKey, E = await this.client.core.crypto.generateSharedKey(y, b);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: h.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(n, $t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const x = hr({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Or(ls) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(E), await this.sendRequest({ topic: E, method: "wc_sessionSettle", params: x, throwOnFailedPublish: !0 });
      const D = gi(hr({}, x), { topic: E, pairingTopic: u, acknowledged: !1, self: x.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: y });
      return await this.client.session.set(E, D), await this.setExpiry(E, Or(ls)), { topic: E, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(E)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, $t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: a, resolve: o, reject: u } = qn();
      return this.events.once(Nt("session_update", s), ({ error: h }) => {
        h ? u(h) : o();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: a, reject: o } = qn();
      return this.events.once(Nt("session_extend", i), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, Or(ls)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: a } = r, o = Ia(), { done: u, resolve: h, reject: f } = qn(a);
      return this.events.once(Nt("session_request", o), ({ error: d, result: y }) => {
        d ? f(d) : h(y);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((y) => f(y)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const y = await this.client.core.storage.getItem(Su);
        By({ id: o, topic: s, wcDeepLink: y }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      Xr(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : Ir(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: a, reject: o } = qn();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: $t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => om(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, $t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Su).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, $t("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = Jr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = pi.wc_sessionRequest.req.ttl, { id: i, topic: s, params: a } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: a }), n && this.client.core.expirer.set(i, Or(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: h } = r, f = Oi(i, s, u);
      if (Vi() && Ub.includes(i)) {
        const b = Hn(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: b });
      }
      const d = await this.client.core.crypto.encode(n, f), y = pi[i].req;
      return a && (y.ttl = a), o && (y.id = o), this.client.core.history.set(n, f), h ? (y.internal = gi(hr({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, y)) : this.client.core.relayer.publish(n, d, y).catch((b) => this.client.logger.error(b)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: a } = r, o = Ca(n, s), u = await this.client.core.crypto.encode(i, o), h = await this.client.core.history.get(i, n), f = pi[h.request.method].res;
      a ? (f.internal = gi(hr({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, i) => {
      const s = Ra(r, i), a = await this.client.core.crypto.encode(n, s), o = await this.client.core.history.get(n, r), u = pi[o.request.method].res;
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
        const a = Or(ge.FIVE_MINUTES), o = hr({ id: s, pairingTopic: r, expiry: a }, i);
        await this.setProposal(s, o);
        const u = Hn(JSON.stringify(n)), h = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: o, verifyContext: h });
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
        const h = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        Ir(n) && (await this.client.proposal.delete(i, $t("USER_DISCONNECTED")), this.events.emit(Nt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: a, controller: o, expiry: u, namespaces: h, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: y, pairingTopic: b } = n.params, E = hr({ topic: r, relay: a, expiry: u, namespaces: h, acknowledged: !0, pairingTopic: b, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Nt("session_connect"), { session: E }), this.cleanupDuplicatePairings(E);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      Xr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Nt("session_approve", i), {})) : Ir(n) && (await this.client.session.delete(r, $t("USER_DISCONNECTED")), this.events.emit(Nt("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const a = `${r}_session_update`, o = us.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(hr({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), us.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      Xr(n) ? this.events.emit(Nt("session_update", i), {}) : Ir(n) && this.events.emit(Nt("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Or(ls)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      Xr(n) ? this.events.emit(Nt("session_extend", i), {}) : Ir(n) && this.events.emit(Nt("session_extend", i), { error: n.error });
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
        Xr(n) ? this.events.emit(Nt("session_ping", i), {}) : Ir(n) && this.events.emit(Nt("session_ping", i), { error: n.error });
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
      Xr(n) ? this.events.emit(Nt("session_request", i), { result: n.result }) : Ir(n) && this.events.emit(Nt("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const a = `${r}_session_event_${s.event.name}`, o = us.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(hr({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), us.set(a, i);
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
        const { id: n, topic: i, params: s } = r, a = Hn(JSON.stringify(Oi("wc_sessionRequest", s, n))), o = this.client.session.get(i), u = await this.getVerifyContext(a, o.peer.metadata);
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
      if (ir(n) || await this.isValidPairingTopic(n), !vm(o, !0)) {
        const { message: u } = ue("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !ir(i) && wi(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !ir(s) && wi(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), ir(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = mm(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!fr(r))
        throw new Error(ue("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = gs(i, "approve()");
      if (u)
        throw new Error(u.message);
      const h = Qc(o.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
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
      if (await this.isValidProposalId(n), !_m(i)) {
        const { message: s } = ue("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!fr(r)) {
        const { message: h } = ue("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: a } = r;
      if (!Ql(n)) {
        const { message: h } = ue("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const o = hm(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = gs(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (on(a)) {
        const { message: h } = ue("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!fr(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), a = gs(i, "update()");
      if (a)
        throw new Error(a.message);
      const o = Qc(s.requiredNamespaces, i, "update()");
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
      if (!Gc(o, s)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!wm(i)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!Dm(o, s, i.method)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (a && !Cm(a, Eo)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Eo.min} and ${Eo.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!fr(r)) {
        const { message: s } = ue("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Em(i)) {
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
      if (!Gc(a, s)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(o);
      }
      if (!Sm(i)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!xm(a, s, i.name)) {
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
      const i = { verified: { verifyUrl: n.verifyUrl || ys, validation: "UNKNOWN", origin: n.url || "" } };
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
        Ta(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Hs(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
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
    if (!bm(e)) {
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
class Bb extends Gs {
  constructor(e, r) {
    super(e, r, Ab, Pa), this.core = e, this.logger = r;
  }
}
class Vb extends Gs {
  constructor(e, r) {
    super(e, r, Pb, Pa), this.core = e, this.logger = r;
  }
}
class Kb extends Gs {
  constructor(e, r) {
    super(e, r, Fb, Pa, (n) => n.id), this.core = e, this.logger = r;
  }
}
class La extends $d {
  constructor(e) {
    super(e), this.protocol = gh, this.version = yh, this.name = wo.name, this.events = new Dr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || wo.name, this.metadata = (e == null ? void 0 : e.metadata) || Uy();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Xe.pino(Xe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || wo.logger }));
    this.core = (e == null ? void 0 : e.core) || new Tb(e), this.logger = Xe.generateChildLogger(r, this.name), this.session = new Vb(this.core, this.logger), this.proposal = new Bb(this.core, this.logger), this.pendingRequest = new Kb(this.core, this.logger), this.engine = new zb(this);
  }
  static async init(e) {
    const r = new La(e);
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
var Hb = Object.defineProperty, Wb = Object.defineProperties, Gb = Object.getOwnPropertyDescriptors, Ou = Object.getOwnPropertySymbols, Qb = Object.prototype.hasOwnProperty, Zb = Object.prototype.propertyIsEnumerable, Iu = (t, e, r) => e in t ? Hb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yb = (t, e) => {
  for (var r in e || (e = {}))
    Qb.call(e, r) && Iu(t, r, e[r]);
  if (Ou)
    for (var r of Ou(e))
      Zb.call(e, r) && Iu(t, r, e[r]);
  return t;
}, Jb = (t, e) => Wb(t, Gb(e)), Fa = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, wt = (t, e, r) => (Fa(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, xs = (t, e, r, n) => (Fa(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Zt = (t, e, r) => (Fa(t, e, "access private method"), r), On, zn, vi, kt, Go, vh, Yt, nr, Qo, Cu;
let Xb = class {
  constructor(e) {
    xn(this, Go), xn(this, Yt), xn(this, Qo), xn(this, On, void 0), xn(this, zn, void 0), xn(this, vi, void 0), xn(this, kt, void 0), xs(this, On, e), xs(this, zn, Zt(this, Go, vh).call(this)), Zt(this, Yt, nr).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Zt(this, Yt, nr).call(this);
      const a = wt(this, zn).subscribeModal((h) => {
        h.open || (a(), s(new Error("Modal closed")));
      }), { uri: o, approval: u } = await wt(this, kt).connect(e);
      if (o) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), await wt(this, zn).openModal({ uri: o, chains: Array.from(h) });
      }
      try {
        const h = await u();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        a(), wt(this, zn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Zt(this, Yt, nr).call(this), await wt(this, kt).disconnect(e);
  }
  async request(e) {
    return await Zt(this, Yt, nr).call(this), await wt(this, kt).request(e);
  }
  async getSessions() {
    return await Zt(this, Yt, nr).call(this), wt(this, kt).session.getAll();
  }
  async getSession() {
    return await Zt(this, Yt, nr).call(this), wt(this, kt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Zt(this, Yt, nr).call(this), wt(this, kt).off("session_expire", e);
  }
};
On = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakSet(), vh = function() {
  const { modalOptions: t, projectId: e } = wt(this, On);
  return new jf(Jb(Yb({}, t), { projectId: e }));
}, Yt = /* @__PURE__ */ new WeakSet(), nr = async function() {
  return wt(this, kt) ? !0 : (!wt(this, vi) && typeof window < "u" && xs(this, vi, Zt(this, Qo, Cu).call(this)), wt(this, vi));
}, Qo = /* @__PURE__ */ new WeakSet(), Cu = async function() {
  xs(this, kt, await La.init({ metadata: wt(this, On).metadata, projectId: wt(this, On).projectId, relayUrl: wt(this, On).relayUrl }));
  const t = await wt(this, kt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Ua = [
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
], Qs = ["aleo:1"], Ma = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], e_ = "f0aaeffe71b636da453fce042d79d723", t_ = {
  standaloneChains: Qs,
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
      methods: Ua,
      chains: Qs,
      events: Ma
    }
  }
}, Qn = new $i();
let bi;
function r_(t) {
  bi = new Xb({
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
    if (bi)
      t(bi);
    else {
      const e = setInterval(() => {
        bi && (clearInterval(e), t(bi));
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
var Zo;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Zo || (Zo = {}));
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
]), n_ = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Tr extends Error {
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
            const h = a.path[u];
            u === a.path.length - 1 ? (o[h] = o[h] || { _errors: [] }, o[h]._errors.push(r(a))) : o[h] = o[h] || { _errors: [] }, o = o[h], u++;
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
Tr.create = (t) => new Tr(t);
const Ii = (t, e) => {
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
let bh = Ii;
function i_(t) {
  bh = t;
}
function Os() {
  return bh;
}
const Is = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, s = [...r, ...i.path || []], a = {
    ...i,
    path: s
  };
  let o = "";
  const u = n.filter((h) => !!h).slice().reverse();
  for (const h of u)
    o = h(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: i.message || o
  };
}, s_ = [];
function de(t, e) {
  const r = Is({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Os(),
      Ii
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
}), _h = (t) => ({ status: "dirty", value: t }), cr = (t) => ({ status: "valid", value: t }), Yo = (t) => t.status === "aborted", Jo = (t) => t.status === "dirty", Cs = (t) => t.status === "valid", Rs = (t) => typeof Promise < "u" && t instanceof Promise;
var ve;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ve || (ve = {}));
class Kr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ru = (t, e) => {
  if (Cs(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Tr(t.common.issues);
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
    if (Rs(r))
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
    return Ru(i, s);
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
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Rs(i) ? i : Promise.resolve(i));
    return Ru(n, s);
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
    return Ar.create(this, this._def);
  }
  promise() {
    return Yn.create(this, this._def);
  }
  or(e) {
    return Ai.create([this, e], this._def);
  }
  and(e) {
    return Ni.create(this, e, this._def);
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
    return new Mi({
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
    return new Ps({
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
    return Gi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const o_ = /^c[^\s-]{8,}$/i, a_ = /^[a-z][a-z0-9]*$/, c_ = /[0-9A-HJKMNP-TV-Z]{26}/, u_ = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, l_ = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, h_ = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, f_ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, d_ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, p_ = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function g_(t, e) {
  return !!((e === "v4" || !e) && f_.test(t) || (e === "v6" || !e) && d_.test(t));
}
class Rr extends Ke {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: ae.invalid_string,
      ...ve.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ve.errToObj(e)), this.trim = () => new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Rr({
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
        l_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "email",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        h_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "emoji",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        u_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "uuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        o_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        a_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        c_.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
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
        }), n.dirty()) : s.kind === "datetime" ? p_(s).test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? g_(e.data, s.version) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "ip",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty()) : tt.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Rr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ve.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ve.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ve.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ve.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ve.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ve.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ve.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ve.errToObj(e) });
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
      ...ve.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ve.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ve.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ve.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ve.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ve.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ve.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ve.errToObj(r)
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
Rr.create = (t) => {
  var e;
  return new Rr({
    checks: [],
    typeName: De.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...je(t)
  });
};
function y_(t, e) {
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
      }), i.dirty()) : s.kind === "multipleOf" ? y_(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), de(n, {
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
    return this.setLimit("min", e, !0, ve.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ve.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ve.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ve.toString(r));
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
          message: ve.toString(i)
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
      message: ve.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ve.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ve.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ve.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ve.toString(e)
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
    return this.setLimit("min", e, !0, ve.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ve.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ve.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ve.toString(r));
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
          message: ve.toString(i)
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
      message: ve.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ve.toString(r)
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
class Ci extends Ke {
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
Ci.create = (t) => new Ci({
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
      message: ve.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ve.toString(r)
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
class Ts extends Ke {
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
Ts.create = (t) => new Ts({
  typeName: De.ZodSymbol,
  ...je(t)
});
class Ri extends Ke {
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
Ri.create = (t) => new Ri({
  typeName: De.ZodUndefined,
  ...je(t)
});
class Ti extends Ke {
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
Ti.create = (t) => new Ti({
  typeName: De.ZodNull,
  ...je(t)
});
class Zn extends Ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return cr(e.data);
  }
}
Zn.create = (t) => new Zn({
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
class As extends Ke {
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
As.create = (t) => new As({
  typeName: De.ZodVoid,
  ...je(t)
});
class Ar extends Ke {
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
    return new Ar({
      ...this._def,
      minLength: { value: e, message: ve.toString(r) }
    });
  }
  max(e, r) {
    return new Ar({
      ...this._def,
      maxLength: { value: e, message: ve.toString(r) }
    });
  }
  length(e, r) {
    return new Ar({
      ...this._def,
      exactLength: { value: e, message: ve.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ar.create = (t, e) => new Ar({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: De.ZodArray,
  ...je(e)
});
function Bn(t) {
  if (t instanceof Ot) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = en.create(Bn(n));
    }
    return new Ot({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Ar ? new Ar({
      ...t._def,
      type: Bn(t.element)
    }) : t instanceof en ? en.create(Bn(t.unwrap())) : t instanceof Nn ? Nn.create(Bn(t.unwrap())) : t instanceof Hr ? Hr.create(t.items.map((e) => Bn(e))) : t;
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
      const h = this._getOrReturnCtx(e);
      return de(h, {
        code: ae.invalid_type,
        expected: fe.object,
        received: h.parsedType
      }), Ce;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof tn && this._def.unknownKeys === "strip"))
      for (const h in i.data)
        a.includes(h) || o.push(h);
    const u = [];
    for (const h of a) {
      const f = s[h], d = i.data[h];
      u.push({
        key: { status: "valid", value: h },
        value: f._parse(new Kr(i, d, i.path, h)),
        alwaysSet: h in i.data
      });
    }
    if (this._def.catchall instanceof tn) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: i.data[f] }
          });
      else if (h === "strict")
        o.length > 0 && (de(i, {
          code: ae.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (h !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const f of o) {
        const d = i.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: h._parse(
            new Kr(i, d, i.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const f of u) {
        const d = await f.key;
        h.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return h;
    }).then((h) => er.mergeObjectSync(n, h)) : er.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ve.errToObj, new Ot({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, s, a, o;
          const u = (a = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ve.errToObj(e).message) !== null && o !== void 0 ? o : u
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
    return Bn(this);
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
class Ai extends Ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Tr(o.ctx.common.issues));
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
        const h = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: h
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !s && (s = { result: f, ctx: h }), h.common.issues.length && a.push(h.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((u) => new Tr(u));
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
Ai.create = (t, e) => new Ai({
  options: t,
  typeName: De.ZodUnion,
  ...je(e)
});
const ms = (t) => t instanceof Li ? ms(t.schema) : t instanceof Pr ? ms(t.innerType()) : t instanceof Fi ? [t.value] : t instanceof fn ? t.options : t instanceof Ui ? Object.keys(t.enum) : t instanceof Mi ? ms(t._def.innerType) : t instanceof Ri ? [void 0] : t instanceof Ti ? [null] : null;
class Zs extends Ke {
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
      const a = ms(s.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new Zs({
      typeName: De.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...je(n)
    });
  }
}
function Xo(t, e) {
  const r = cn(t), n = cn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === fe.object && n === fe.object) {
    const i = tt.objectKeys(e), s = tt.objectKeys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of s) {
      const u = Xo(t[o], e[o]);
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
      const a = t[s], o = e[s], u = Xo(a, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === fe.date && n === fe.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Ni extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Yo(s) || Yo(a))
        return Ce;
      const o = Xo(s.value, a.value);
      return o.valid ? ((Jo(s) || Jo(a)) && r.dirty(), { status: r.value, value: o.data }) : (de(n, {
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
Ni.create = (t, e, r) => new Ni({
  left: t,
  right: e,
  typeName: De.ZodIntersection,
  ...je(r)
});
class Hr extends Ke {
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
    return new Hr({
      ...this._def,
      rest: e
    });
  }
}
Hr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Hr({
    items: t,
    typeName: De.ZodTuple,
    rest: null,
    ...je(e)
  });
};
class Pi extends Ke {
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
    return r instanceof Ke ? new Pi({
      keyType: e,
      valueType: r,
      typeName: De.ZodRecord,
      ...je(n)
    }) : new Pi({
      keyType: Rr.create(),
      valueType: e,
      typeName: De.ZodRecord,
      ...je(r)
    });
  }
}
class Ns extends Ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.map)
      return de(n, {
        code: ae.invalid_type,
        expected: fe.map,
        received: n.parsedType
      }), Ce;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, u], h) => ({
      key: i._parse(new Kr(n, o, n.path, [h, "key"])),
      value: s._parse(new Kr(n, u, n.path, [h, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of a) {
          const h = await u.key, f = await u.value;
          if (h.status === "aborted" || f.status === "aborted")
            return Ce;
          (h.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(h.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of a) {
        const h = u.key, f = u.value;
        if (h.status === "aborted" || f.status === "aborted")
          return Ce;
        (h.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(h.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Ns.create = (t, e, r) => new Ns({
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
      const h = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return Ce;
        f.status === "dirty" && r.dirty(), h.add(f.value);
      }
      return { status: r.value, value: h };
    }
    const o = [...n.data.values()].map((u, h) => s._parse(new Kr(n, u, n.path, h)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new An({
      ...this._def,
      minSize: { value: e, message: ve.toString(r) }
    });
  }
  max(e, r) {
    return new An({
      ...this._def,
      maxSize: { value: e, message: ve.toString(r) }
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
      return Is({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Os(),
          Ii
        ].filter((h) => !!h),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return Is({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Os(),
          Ii
        ].filter((h) => !!h),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Yn ? cr(async (...o) => {
      const u = new Tr([]), h = await this._def.args.parseAsync(o, s).catch((y) => {
        throw u.addIssue(n(o, y)), u;
      }), f = await a(...h);
      return await this._def.returns._def.type.parseAsync(f, s).catch((y) => {
        throw u.addIssue(i(f, y)), u;
      });
    }) : cr((...o) => {
      const u = this._def.args.safeParse(o, s);
      if (!u.success)
        throw new Tr([n(o, u.error)]);
      const h = a(...u.data), f = this._def.returns.safeParse(h, s);
      if (!f.success)
        throw new Tr([i(h, f.error)]);
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
      args: Hr.create(e).rest(Rn.create())
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
      args: e || Hr.create([]).rest(Rn.create()),
      returns: r || Rn.create(),
      typeName: De.ZodFunction,
      ...je(n)
    });
  }
}
class Li extends Ke {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Li.create = (t, e) => new Li({
  getter: t,
  typeName: De.ZodLazy,
  ...je(e)
});
class Fi extends Ke {
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
Fi.create = (t, e) => new Fi({
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
class Yn extends Ke {
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
Yn.create = (t, e) => new Yn({
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
        if (!Cs(a))
          return a;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Cs(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({ status: r.value, value: o })) : a);
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
class Mi extends Ke {
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
Mi.create = (t, e) => new Mi({
  innerType: t,
  typeName: De.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...je(e)
});
class Ps extends Ke {
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
    return Rs(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Tr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Tr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ps.create = (t, e) => new Ps({
  innerType: t,
  typeName: De.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...je(e)
});
class Ls extends Ke {
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
Ls.create = (t) => new Ls({
  typeName: De.ZodNaN,
  ...je(t)
});
const m_ = Symbol("zod_brand");
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
class Gi extends Ke {
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
    return new Gi({
      in: e,
      out: r,
      typeName: De.ZodPipeline
    });
  }
}
const Sh = (t, e = {}, r) => t ? Zn.create().superRefine((n, i) => {
  var s, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && a !== void 0 ? a : !0, h = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...h, fatal: u });
  }
}) : Zn.create(), v_ = {
  object: Ot.lazycreate
};
var De;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(De || (De = {}));
const b_ = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Sh((r) => r instanceof t, e), Dh = Rr.create, xh = ln.create, __ = Ls.create, w_ = hn.create, Oh = Ci.create, E_ = Tn.create, S_ = Ts.create, D_ = Ri.create, x_ = Ti.create, O_ = Zn.create, I_ = Rn.create, C_ = tn.create, R_ = As.create, T_ = Ar.create, A_ = Ot.create, N_ = Ot.strictCreate, P_ = Ai.create, L_ = Zs.create, F_ = Ni.create, U_ = Hr.create, M_ = Pi.create, j_ = Ns.create, k_ = An.create, $_ = Wn.create, q_ = Li.create, z_ = Fi.create, B_ = fn.create, V_ = Ui.create, K_ = Yn.create, Tu = Pr.create, H_ = en.create, W_ = Nn.create, G_ = Pr.createWithPreprocess, Q_ = Gi.create, Z_ = () => Dh().optional(), Y_ = () => xh().optional(), J_ = () => Oh().optional(), X_ = {
  string: (t) => Rr.create({ ...t, coerce: !0 }),
  number: (t) => ln.create({ ...t, coerce: !0 }),
  boolean: (t) => Ci.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => hn.create({ ...t, coerce: !0 }),
  date: (t) => Tn.create({ ...t, coerce: !0 })
}, ew = Ce;
var Lr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ii,
  setErrorMap: i_,
  getErrorMap: Os,
  makeIssue: Is,
  EMPTY_PATH: s_,
  addIssueToContext: de,
  ParseStatus: er,
  INVALID: Ce,
  DIRTY: _h,
  OK: cr,
  isAborted: Yo,
  isDirty: Jo,
  isValid: Cs,
  isAsync: Rs,
  get util() {
    return tt;
  },
  get objectUtil() {
    return Zo;
  },
  ZodParsedType: fe,
  getParsedType: cn,
  ZodType: Ke,
  ZodString: Rr,
  ZodNumber: ln,
  ZodBigInt: hn,
  ZodBoolean: Ci,
  ZodDate: Tn,
  ZodSymbol: Ts,
  ZodUndefined: Ri,
  ZodNull: Ti,
  ZodAny: Zn,
  ZodUnknown: Rn,
  ZodNever: tn,
  ZodVoid: As,
  ZodArray: Ar,
  ZodObject: Ot,
  ZodUnion: Ai,
  ZodDiscriminatedUnion: Zs,
  ZodIntersection: Ni,
  ZodTuple: Hr,
  ZodRecord: Pi,
  ZodMap: Ns,
  ZodSet: An,
  ZodFunction: Wn,
  ZodLazy: Li,
  ZodLiteral: Fi,
  ZodEnum: fn,
  ZodNativeEnum: Ui,
  ZodPromise: Yn,
  ZodEffects: Pr,
  ZodTransformer: Pr,
  ZodOptional: en,
  ZodNullable: Nn,
  ZodDefault: Mi,
  ZodCatch: Ps,
  ZodNaN: Ls,
  BRAND: m_,
  ZodBranded: Eh,
  ZodPipeline: Gi,
  custom: Sh,
  Schema: Ke,
  ZodSchema: Ke,
  late: v_,
  get ZodFirstPartyTypeKind() {
    return De;
  },
  coerce: X_,
  any: O_,
  array: T_,
  bigint: w_,
  boolean: Oh,
  date: E_,
  discriminatedUnion: L_,
  effect: Tu,
  enum: B_,
  function: $_,
  instanceof: b_,
  intersection: F_,
  lazy: q_,
  literal: z_,
  map: j_,
  nan: __,
  nativeEnum: V_,
  never: C_,
  null: x_,
  nullable: W_,
  number: xh,
  object: A_,
  oboolean: J_,
  onumber: Y_,
  optional: H_,
  ostring: Z_,
  pipeline: Q_,
  preprocess: G_,
  promise: K_,
  record: M_,
  set: k_,
  strictObject: N_,
  string: Dh,
  symbol: S_,
  transformer: Tu,
  tuple: U_,
  undefined: D_,
  union: P_,
  unknown: I_,
  void: R_,
  NEVER: ew,
  ZodIssueCode: ae,
  quotelessJson: n_,
  ZodError: Tr
});
const tw = /^aleo1.{58}$/i, rw = /^AViewKey1.{44}$/i, nw = /^APrivateKey1.{47}$/i, iw = /^at1.{60}$/i, sw = /^\d+field$/, ow = /^\d+u32$/, aw = /^\d+u64$/, j1 = Lr.string().regex(tw), k1 = Lr.string().regex(rw), $1 = Lr.string().regex(nw), q1 = Lr.string().regex(iw), z1 = Lr.string().regex(sw), B1 = Lr.string().regex(ow), V1 = Lr.string().regex(aw);
var ea;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(ea || (ea = {}));
var ta;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(ta || (ta = {}));
var ra;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(ra || (ra = {}));
var na;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(na || (na = {}));
var Au;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Au || (Au = {}));
const K1 = Lr.nativeEnum(ea), H1 = Lr.nativeEnum(ta), W1 = Lr.nativeEnum(na), G1 = Lr.nativeEnum(ra);
class Q1 extends mr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Z1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class Y1 extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class J1 {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class X1 extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class eE extends mr {
  constructor(e) {
    super();
  }
}
class tE {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class rE {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class nE extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class iE {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class sE extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class oE {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class aE {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class cE extends $i {
  constructor() {
    super();
  }
}
class uE {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class lE extends Dr.EventEmitter {
  constructor() {
    super();
  }
}
class hE {
  constructor(e) {
    this.client = e;
  }
}
function Ih(t) {
  Nr(() => (Et().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Et().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function cw(t) {
  Nr(() => (Et().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Et().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Ch(t) {
  Nr(() => (Et().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Et().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Fr() {
  const [t, e] = fs(void 0);
  return Ih((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Ch((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), cw((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Nr(() => {
    async function r() {
      const i = await (await Et()).getSession();
      e(i);
    }
    return r(), Qn.on("session_change", r), () => {
      Qn.off("session_change", r);
    };
  }, []), t;
}
function Qi(t) {
  Nr(() => (Et().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Et().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const Nu = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, h) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = h ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((y) => y(e, d));
    }
  }, i = () => e, o = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, o), o;
}, uw = (t) => t ? Nu(t) : Nu;
var ia = { exports: {} }, So = {}, hs = { exports: {} }, Do = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function lw() {
  if (Pu)
    return Do;
  Pu = 1;
  var t = Pn;
  function e(d, y) {
    return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, y) {
    var b = y(), E = n({ inst: { value: b, getSnapshot: y } }), x = E[0].inst, D = E[1];
    return s(function() {
      x.value = b, x.getSnapshot = y, u(x) && D({ inst: x });
    }, [d, b, y]), i(function() {
      return u(x) && D({ inst: x }), d(function() {
        u(x) && D({ inst: x });
      });
    }, [d]), a(b), b;
  }
  function u(d) {
    var y = d.getSnapshot;
    d = d.value;
    try {
      var b = y();
      return !r(d, b);
    } catch {
      return !0;
    }
  }
  function h(d, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : o;
  return Do.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, Do;
}
var xo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lu;
function hw() {
  return Lu || (Lu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Pn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var _ = arguments.length, v = new Array(_ > 1 ? _ - 1 : 0), p = 1; p < _; p++)
          v[p - 1] = arguments[p];
        n("error", R, v);
      }
    }
    function n(R, _, v) {
      {
        var p = e.ReactDebugCurrentFrame, c = p.getStackAddendum();
        c !== "" && (_ += "%s", v = v.concat([c]));
        var g = v.map(function(A) {
          return String(A);
        });
        g.unshift("Warning: " + _), Function.prototype.apply.call(console[R], console, g);
      }
    }
    function i(R, _) {
      return R === _ && (R !== 0 || 1 / R === 1 / _) || R !== R && _ !== _;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, h = t.useDebugValue, f = !1, d = !1;
    function y(R, _, v) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = _();
      if (!d) {
        var c = _();
        s(p, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = a({
        inst: {
          value: p,
          getSnapshot: _
        }
      }), A = g[0].inst, F = g[1];
      return u(function() {
        A.value = p, A.getSnapshot = _, b(A) && F({
          inst: A
        });
      }, [R, p, _]), o(function() {
        b(A) && F({
          inst: A
        });
        var B = function() {
          b(A) && F({
            inst: A
          });
        };
        return R(B);
      }, [R]), h(p), p;
    }
    function b(R) {
      var _ = R.getSnapshot, v = R.value;
      try {
        var p = _();
        return !s(v, p);
      } catch {
        return !0;
      }
    }
    function E(R, _, v) {
      return _();
    }
    var x = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !x, M = D ? E : y, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : M;
    xo.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xo;
}
var Fu;
function ja() {
  return Fu || (Fu = 1, process.env.NODE_ENV === "production" ? hs.exports = lw() : hs.exports = hw()), hs.exports;
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
var Uu;
function fw() {
  if (Uu)
    return So;
  Uu = 1;
  var t = Pn, e = ja();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return So.useSyncExternalStoreWithSelector = function(h, f, d, y, b) {
    var E = s(null);
    if (E.current === null) {
      var x = { hasValue: !1, value: null };
      E.current = x;
    } else
      x = E.current;
    E = o(function() {
      function M(p) {
        if (!w) {
          if (w = !0, R = p, p = y(p), b !== void 0 && x.hasValue) {
            var c = x.value;
            if (b(c, p))
              return _ = c;
          }
          return _ = p;
        }
        if (c = _, n(R, p))
          return c;
        var g = y(p);
        return b !== void 0 && b(c, g) ? c : (R = p, _ = g);
      }
      var w = !1, R, _, v = d === void 0 ? null : d;
      return [function() {
        return M(f());
      }, v === null ? void 0 : function() {
        return M(v());
      }];
    }, [f, d, y, b]);
    var D = i(h, E[0], E[1]);
    return a(function() {
      x.hasValue = !0, x.value = D;
    }, [D]), u(D), D;
  }, So;
}
var Oo = {};
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
function dw() {
  return Mu || (Mu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Pn, e = ja();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function h(f, d, y, b, E) {
      var x = s(null), D;
      x.current === null ? (D = {
        hasValue: !1,
        value: null
      }, x.current = D) : D = x.current;
      var M = o(function() {
        var v = !1, p, c, g = function(G) {
          if (!v) {
            v = !0, p = G;
            var ee = b(G);
            if (E !== void 0 && D.hasValue) {
              var N = D.value;
              if (E(N, ee))
                return c = N, N;
            }
            return c = ee, ee;
          }
          var $ = p, se = c;
          if (n($, G))
            return se;
          var Z = b(G);
          return E !== void 0 && E(se, Z) ? se : (p = G, c = Z, Z);
        }, A = y === void 0 ? null : y, F = function() {
          return g(d());
        }, B = A === null ? void 0 : function() {
          return g(A());
        };
        return [F, B];
      }, [d, y, b, E]), w = M[0], R = M[1], _ = i(f, w, R);
      return a(function() {
        D.hasValue = !0, D.value = _;
      }, [_]), u(_), _;
    }
    Oo.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oo;
}
process.env.NODE_ENV === "production" ? ia.exports = fw() : ia.exports = dw();
var pw = ia.exports;
const gw = /* @__PURE__ */ Ms(pw), { useDebugValue: yw } = Pn, { useSyncExternalStoreWithSelector: mw } = gw;
function vw(t, e = t.getState, r) {
  const n = mw(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return yw(n), n;
}
const ju = (t) => {
  const e = typeof t == "function" ? uw(t) : t, r = (n, i) => vw(e, n, i);
  return Object.assign(r, e), r;
}, bw = (t) => t ? ju(t) : ju;
function _w(t, e) {
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
const ji = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return ji(n)(r);
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
        return ji(n)(r);
      }
    };
  }
}, ww = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (D) => D,
    version: 0,
    merge: (D, M) => ({
      ...M,
      ...D
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
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
  const f = ji(s.serialize), d = () => {
    const D = s.partialize({ ...n() });
    let M;
    const w = f({ state: D, version: s.version }).then(
      (R) => h.setItem(s.name, R)
    ).catch((R) => {
      M = R;
    });
    if (M)
      throw M;
    return w;
  }, y = i.setState;
  i.setState = (D, M) => {
    y(D, M), d();
  };
  const b = t(
    (...D) => {
      r(...D), d();
    },
    n,
    i
  );
  let E;
  const x = () => {
    var D;
    if (!h)
      return;
    a = !1, o.forEach((w) => w(n()));
    const M = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, n())) || void 0;
    return ji(h.getItem.bind(h))(s.name).then((w) => {
      if (w)
        return s.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var R;
      return E = s.merge(
        w,
        (R = n()) != null ? R : b
      ), r(E, !0), d();
    }).then(() => {
      M == null || M(E, void 0), a = !0, u.forEach((w) => w(E));
    }).catch((w) => {
      M == null || M(void 0, w);
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
    rehydrate: () => x(),
    hasHydrated: () => a,
    onHydrate: (D) => (o.add(D), () => {
      o.delete(D);
    }),
    onFinishHydration: (D) => (u.add(D), () => {
      u.delete(D);
    })
  }, x(), E || b;
}, Ew = (t, e) => (r, n, i) => {
  let s = {
    storage: _w(() => localStorage),
    partialize: (x) => x,
    version: 0,
    merge: (x, D) => ({
      ...D,
      ...x
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...x) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...x);
      },
      n,
      i
    );
  const f = () => {
    const x = s.partialize({ ...n() });
    return h.setItem(s.name, {
      state: x,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (x, D) => {
    d(x, D), f();
  };
  const y = t(
    (...x) => {
      r(...x), f();
    },
    n,
    i
  );
  let b;
  const E = () => {
    var x, D;
    if (!h)
      return;
    a = !1, o.forEach((w) => {
      var R;
      return w((R = n()) != null ? R : y);
    });
    const M = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, (x = n()) != null ? x : y)) || void 0;
    return ji(h.getItem.bind(h))(s.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var R;
      return b = s.merge(
        w,
        (R = n()) != null ? R : y
      ), r(b, !0), f();
    }).then(() => {
      M == null || M(b, void 0), b = n(), a = !0, u.forEach((w) => w(b));
    }).catch((w) => {
      M == null || M(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (x) => {
      s = {
        ...s,
        ...x
      }, x.storage && (h = x.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (x) => (o.add(x), () => {
      o.delete(x);
    }),
    onFinishHydration: (x) => (u.add(x), () => {
      u.delete(x);
    })
  }, s.skipHydration || E(), b || y;
}, Sw = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ww(t, e) : Ew(t, e), Dw = Sw, gn = bw()(
  Dw((t, e) => ({
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
class Zi {
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
const ki = typeof window > "u" || "Deno" in window;
function Sr() {
}
function xw(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function sa(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Rh(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function _i(t, e, r) {
  return Ys(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function an(t, e, r) {
  return Ys(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function ku(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o
  } = t;
  if (Ys(a)) {
    if (n) {
      if (e.queryHash !== ka(a, e.options))
        return !1;
    } else if (!Vn(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function $u(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: i,
    mutationKey: s
  } = t;
  if (Ys(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Cn(e.options.mutationKey) !== Cn(s))
        return !1;
    } else if (!Vn(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || i && !i(e));
}
function ka(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Cn)(t);
}
function Cn(t) {
  return JSON.stringify(t, (e, r) => aa(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r);
}
function Vn(t, e) {
  return Th(t, e);
}
function Th(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Th(t[r], e[r])) : !1;
}
function Ah(t, e) {
  if (t === e)
    return t;
  const r = qu(t) && qu(e);
  if (r || aa(t) && aa(e)) {
    const n = r ? t.length : Object.keys(t).length, i = r ? e : Object.keys(e), s = i.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < s; u++) {
      const h = r ? u : i[u];
      a[h] = Ah(t[h], e[h]), a[h] === t[h] && o++;
    }
    return n === s && o === n ? t : a;
  }
  return e;
}
function oa(t, e) {
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
function aa(t) {
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
function Ys(t) {
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
function Ow() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function ca(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Ah(t, e) : e;
}
class Iw extends Zi {
  constructor() {
    super(), this.setup = (e) => {
      if (!ki && window.addEventListener) {
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
const Fs = new Iw(), Vu = ["online", "offline"];
class Cw extends Zi {
  constructor() {
    super(), this.setup = (e) => {
      if (!ki && window.addEventListener) {
        const r = () => e();
        return Vu.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          Vu.forEach((n) => {
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
const Us = new Cw();
function Rw(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Js(t) {
  return (t ?? "online") === "online" ? Us.isOnline() : !0;
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
  const o = new Promise((D, M) => {
    s = D, a = M;
  }), u = (D) => {
    n || (b(new Ph(D)), t.abort == null || t.abort());
  }, h = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !Fs.isFocused() || t.networkMode !== "always" && !Us.isOnline(), y = (D) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(D), i == null || i(), s(D));
  }, b = (D) => {
    n || (n = !0, t.onError == null || t.onError(D), i == null || i(), a(D));
  }, E = () => new Promise((D) => {
    i = (M) => {
      const w = n || !d();
      return w && D(M), w;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, n || t.onContinue == null || t.onContinue();
  }), x = () => {
    if (n)
      return;
    let D;
    try {
      D = t.fn();
    } catch (M) {
      D = Promise.reject(M);
    }
    Promise.resolve(D).then(y).catch((M) => {
      var w, R;
      if (n)
        return;
      const _ = (w = t.retry) != null ? w : 3, v = (R = t.retryDelay) != null ? R : Rw, p = typeof v == "function" ? v(r, M) : v, c = _ === !0 || typeof _ == "number" && r < _ || typeof _ == "function" && _(r, M);
      if (e || !c) {
        b(M);
        return;
      }
      r++, t.onFail == null || t.onFail(r, M), Nh(p).then(() => {
        if (d())
          return E();
      }).then(() => {
        e ? b(M) : x();
      });
    });
  };
  return Js(t.networkMode) ? x() : E().then(x), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: h,
    continueRetry: f
  };
}
const $a = console;
function Tw() {
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
const Pt = Tw();
class Fh {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), sa(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (ki ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Aw extends Fh {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || $a, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || Nw(this.options), this.state = this.initialState, this.scheduleGc();
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
    const n = ca(this.state.data, e, this.options);
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
      const b = this.observers.find((E) => E.options.queryFn);
      b && this.setOptions(b.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = Ow(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (b) => {
      Object.defineProperty(b, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const h = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: h
    };
    if (u(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = f.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const y = (b) => {
      if (vs(b) && b.silent || this.dispatch({
        type: "error",
        error: b
      }), !vs(b)) {
        var E, x, D, M;
        (E = (x = this.cache.config).onError) == null || E.call(x, b, this), (D = (M = this.cache.config).onSettled) == null || D.call(M, this.state.data, b, this), process.env.NODE_ENV !== "production" && this.logger.error(b);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Lh({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (b) => {
        var E, x, D, M;
        if (typeof b > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), y(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(b), (E = (x = this.cache.config).onSuccess) == null || E.call(x, b, this), (D = (M = this.cache.config).onSettled) == null || D.call(M, b, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: y,
      onFail: (b, E) => {
        this.dispatch({
          type: "failed",
          failureCount: b,
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
            fetchStatus: Js(this.options.networkMode) ? "fetching" : "paused",
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
            ...this.revertState,
            fetchStatus: "idle"
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
    this.state = r(this.state), Pt.batch(() => {
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
function Nw(t) {
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
class Pw extends Zi {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var i;
    const s = r.queryKey, a = (i = r.queryHash) != null ? i : ka(s, r);
    let o = this.get(a);
    return o || (o = new Aw({
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
    Pt.batch(() => {
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
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => ku(n, i));
  }
  findAll(e, r) {
    const [n] = an(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => ku(n, i)) : this.queries;
  }
  notify(e) {
    Pt.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    Pt.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Pt.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Lw extends Fh {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || $a, this.observers = [], this.state = e.state || Fw(), this.setOptions(e.options), this.scheduleGc();
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
      var n, i, s, a, o, u, h, f;
      if (!r) {
        var d, y, b, E;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (y = this.mutationCache.config).onMutate) == null ? void 0 : d.call(y, this.state.variables, this));
        const g = await ((b = (E = this.options).onMutate) == null ? void 0 : b.call(E, this.state.variables));
        g !== this.state.context && this.dispatch({
          type: "loading",
          context: g,
          variables: this.state.variables
        });
      }
      const c = await e();
      return await ((n = (i = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(i, c, this.state.variables, this.state.context, this)), await ((s = (a = this.options).onSuccess) == null ? void 0 : s.call(a, c, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, c, null, this.state.variables, this.state.context, this)), await ((h = (f = this.options).onSettled) == null ? void 0 : h.call(f, c, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: c
      }), c;
    } catch (c) {
      try {
        var x, D, M, w, R, _, v, p;
        throw await ((x = (D = this.mutationCache.config).onError) == null ? void 0 : x.call(D, c, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(c), await ((M = (w = this.options).onError) == null ? void 0 : M.call(w, c, this.state.variables, this.state.context)), await ((R = (_ = this.mutationCache.config).onSettled) == null ? void 0 : R.call(_, void 0, c, this.state.variables, this.state.context, this)), await ((v = (p = this.options).onSettled) == null ? void 0 : v.call(p, void 0, c, this.state.variables, this.state.context)), c;
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
            isPaused: !Js(this.options.networkMode),
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
    this.state = r(this.state), Pt.batch(() => {
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
function Fw() {
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
class Uw extends Zi {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const i = new Lw({
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
    Pt.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => $u(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => $u(e, r));
  }
  notify(e) {
    Pt.batch(() => {
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
      return Pt.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(Sr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function Mw() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, i, s, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore, h = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", y = ((s = t.state.data) == null ? void 0 : s.pages) || [], b = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let E = b, x = !1;
        const D = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => {
              var c;
              if ((c = t.signal) != null && c.aborted)
                x = !0;
              else {
                var g;
                (g = t.signal) == null || g.addEventListener("abort", () => {
                  x = !0;
                });
              }
              return t.signal;
            }
          });
        }, M = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (p, c, g, A) => (E = A ? [c, ...E] : [...E, c], A ? [g, ...p] : [...p, g]), R = (p, c, g, A) => {
          if (x)
            return Promise.reject("Cancelled");
          if (typeof g > "u" && !c && p.length)
            return Promise.resolve(p);
          const F = {
            queryKey: t.queryKey,
            pageParam: g,
            meta: t.options.meta
          };
          D(F);
          const B = M(F);
          return Promise.resolve(B).then((ee) => w(p, g, ee, A));
        };
        let _;
        if (!y.length)
          _ = R([]);
        else if (f) {
          const p = typeof h < "u", c = p ? h : Ku(t.options, y);
          _ = R(y, p, c);
        } else if (d) {
          const p = typeof h < "u", c = p ? h : jw(t.options, y);
          _ = R(y, p, c, !0);
        } else {
          E = [];
          const p = typeof t.options.getNextPageParam > "u";
          _ = (o && y[0] ? o(y[0], 0, y) : !0) ? R([], p, b[0]) : Promise.resolve(w([], b[0], y[0]));
          for (let g = 1; g < y.length; g++)
            _ = _.then((A) => {
              if (o && y[g] ? o(y[g], g, y) : !0) {
                const B = p ? b[g] : Ku(t.options, A);
                return R(A, p, B);
              }
              return Promise.resolve(w(A, b[g], y[g]));
            });
        }
        return _.then((p) => ({
          pages: p,
          pageParams: E
        }));
      };
    }
  };
}
function Ku(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function jw(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class kw {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new Pw(), this.mutationCache = e.mutationCache || new Uw(), this.logger = e.logger || $a, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Fs.subscribe(() => {
      Fs.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Us.subscribe(() => {
      Us.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
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
    const i = _i(e, r, n), s = this.getQueryData(i.queryKey);
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
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, a = xw(r, s);
    if (typeof a > "u")
      return;
    const o = _i(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return Pt.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = an(e, r), i = this.queryCache;
    Pt.batch(() => {
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
    return Pt.batch(() => (a.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, s)));
  }
  cancelQueries(e, r, n) {
    const [i, s = {}] = an(e, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const a = Pt.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(s)));
    return Promise.all(a).then(Sr).catch(Sr);
  }
  invalidateQueries(e, r, n) {
    const [i, s] = an(e, r, n);
    return Pt.batch(() => {
      var a, o;
      if (this.queryCache.findAll(i).forEach((h) => {
        h.invalidate();
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
    const [i, s] = an(e, r, n), a = Pt.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var h;
      return u.fetch(void 0, {
        ...s,
        cancelRefetch: (h = s == null ? void 0 : s.cancelRefetch) != null ? h : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(Sr);
    return s != null && s.throwOnError || (o = o.catch(Sr)), o;
  }
  fetchQuery(e, r, n) {
    const i = _i(e, r, n), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(Sr).catch(Sr);
  }
  fetchInfiniteQuery(e, r, n) {
    const i = _i(e, r, n);
    return i.behavior = Mw(), this.fetchQuery(i);
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
    const r = this.queryDefaults.find((n) => Vn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Vn(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
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
    const r = this.mutationDefaults.find((n) => Vn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Vn(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
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
    return !r.queryHash && r.queryKey && (r.queryHash = ka(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
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
class $w extends Zi {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Hu(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ua(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ua(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), oa(n, this.options) || this.client.getQueryCache().notify({
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
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return zw(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
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
    if (this.clearStaleTimeout(), ki || this.currentResult.isStale || !sa(this.options.staleTime))
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
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(ki || this.options.enabled === !1 || !sa(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Fs.isFocused()) && this.executeFetch();
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
    const n = this.currentQuery, i = this.options, s = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== n, h = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: d
    } = e;
    let {
      dataUpdatedAt: y,
      error: b,
      errorUpdatedAt: E,
      fetchStatus: x,
      status: D
    } = d, M = !1, w = !1, R;
    if (r._optimisticResults) {
      const g = this.hasListeners(), A = !g && Hu(e, r), F = g && Wu(e, n, r, i);
      (A || F) && (x = Js(e.options.networkMode) ? "fetching" : "paused", y || (D = "loading")), r._optimisticResults === "isRestoring" && (x = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && D !== "error")
      R = f.data, y = f.dataUpdatedAt, D = f.status, M = !0;
    else if (r.select && typeof d.data < "u")
      if (s && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        R = this.selectResult;
      else
        try {
          this.selectFn = r.select, R = r.select(d.data), R = ca(s == null ? void 0 : s.data, R, r), this.selectResult = R, this.selectError = null;
        } catch (g) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(g), this.selectError = g;
        }
    else
      R = d.data;
    if (typeof r.placeholderData < "u" && typeof R > "u" && D === "loading") {
      let g;
      if (s != null && s.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        g = s.data;
      else if (g = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof g < "u")
        try {
          g = r.select(g), this.selectError = null;
        } catch (A) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(A), this.selectError = A;
        }
      typeof g < "u" && (D = "success", R = ca(s == null ? void 0 : s.data, g, r), w = !0);
    }
    this.selectError && (b = this.selectError, R = this.selectResult, E = Date.now(), D = "error");
    const _ = x === "fetching", v = D === "loading", p = D === "error";
    return {
      status: D,
      fetchStatus: x,
      isLoading: v,
      isSuccess: D === "success",
      isError: p,
      isInitialLoading: v && _,
      data: R,
      dataUpdatedAt: y,
      error: b,
      errorUpdatedAt: E,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > h.dataUpdateCount || d.errorUpdateCount > h.errorUpdateCount,
      isFetching: _,
      isRefetching: _ && !v,
      isLoadingError: p && d.dataUpdatedAt === 0,
      isPaused: x === "paused",
      isPlaceholderData: w,
      isPreviousData: M,
      isRefetchError: p && d.dataUpdatedAt !== 0,
      isStale: qa(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, oa(n, r))
      return;
    this.currentResult = n;
    const i = {
      cache: !0
    }, s = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !this.trackedProps.size)
        return !0;
      const u = new Set(o ?? this.trackedProps);
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((h) => {
        const f = h;
        return this.currentResult[f] !== r[f] && u.has(f);
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
    Pt.batch(() => {
      if (e.onSuccess) {
        var r, n, i, s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, h;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (h = this.options).onSettled) == null || u.call(h, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: f
      }) => {
        f(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function qw(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Hu(t, e) {
  return qw(t, e) || t.state.dataUpdatedAt > 0 && ua(t, e, e.refetchOnMount);
}
function ua(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && qa(t, e);
  }
  return !1;
}
function Wu(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && qa(t, r);
}
function qa(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function zw(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !oa(t.getCurrentResult(), e);
}
var Bw = ja();
const Vw = Bw.useSyncExternalStore, Gu = /* @__PURE__ */ sr.createContext(void 0), Uh = /* @__PURE__ */ sr.createContext(!1);
function Mh(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Gu), window.ReactQueryClientContext) : Gu);
}
const Kw = ({
  context: t
} = {}) => {
  const e = sr.useContext(Mh(t, sr.useContext(Uh)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Hw = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  sr.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = Mh(r, n);
  return /* @__PURE__ */ sr.createElement(Uh.Provider, {
    value: !r && n
  }, /* @__PURE__ */ sr.createElement(i.Provider, {
    value: t
  }, e));
}, jh = /* @__PURE__ */ sr.createContext(!1), Ww = () => sr.useContext(jh);
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
  }), n = Ww(), i = Zw(), s = r.defaultQueryOptions(t);
  s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = Pt.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = Pt.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = Pt.batchCalls(s.onSettled)), t1(s), Jw(s, i), Xw(i);
  const [a] = sr.useState(() => new e(r, s)), o = a.getOptimisticResult(s);
  if (Vw(sr.useCallback((u) => {
    const h = n ? () => {
    } : a.subscribe(Pt.batchCalls(u));
    return a.updateResult(), h;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), sr.useEffect(() => {
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
  const n = _i(t, e, r);
  return s1(n, $w);
}
function za() {
  const [t, e] = fs(void 0), [r, n] = fs(void 0), [i, s] = fs(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
async function kh(t, e) {
  const n = await (await Et()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Yi({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return o1(
    t,
    async () => kh(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Ji(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: a } = za();
  async function o(u) {
    try {
      a(!0), s(void 0);
      const h = await kh(t ?? u);
      return i(h), h;
    } catch (h) {
      throw s(h), h;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const Qu = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, fE = () => {
  const t = Fr(), e = "aleo:1", [r, n, i] = gn((f) => [f.account, f.setAccount, f.onDisconnect]), { refetch: s, data: a, error: o, isLoading: u } = Yi({
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
  Qi(({ params: f, topic: d }) => {
    if (f.event.name === "accountSelected" && t && t.topic === d) {
      const b = f.event.address ?? f.event.data.address, E = f.chainId.split(":")[0], x = f.chainId.split(":")[1];
      n({
        network: E,
        chainId: x,
        address: b,
        shortenedAddress: Qu(b)
      });
    }
  }), Ch(({ params: f, topic: d }) => {
    const y = f.event.address ?? f.event.data.address, b = f.chainId.split(":")[0], E = f.chainId.split(":")[1];
    n({
      network: b,
      chainId: E,
      address: y,
      shortenedAddress: Qu(y)
    });
  }), Ih(({ params: f, topic: d }) => {
    i();
  }), Nr(() => {
    t && !u && s();
  }, [t == null ? void 0 : t.topic]), Nr(() => {
    if (a) {
      const f = a, d = f == null ? void 0 : f.account;
      d && n(d);
    }
  }, [a]);
  const h = o ? o.message : a && a.error;
  return {
    account: r,
    error: h,
    loading: u
  };
}, dE = ({ address: t, multisig: e }) => {
  const r = Fr(), [n] = gn((y) => [y.account]), i = "aleo:1", { refetch: s, data: a, error: o, isLoading: u } = Yi({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: i,
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
  Qi(({ params: y, topic: b }) => {
    const E = y.event.name, x = y.event.address ?? y.event.data.address;
    ["accountSelected", "selectedAccountSynced", "sharedAccountSynced"].includes(E) && r && r.topic === b && x === (n == null ? void 0 : n.address) && !u && s();
  }), Nr(() => {
    r && !u && s();
  }, [r == null ? void 0 : r.topic]);
  const h = o ? o.message : a && a.error, f = a;
  return { balances: f == null ? void 0 : f.balances, error: h, loading: u };
};
function pE() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = za();
  async function a() {
    try {
      s(!0), i(void 0);
      const u = await (await Et()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Ua,
            chains: Qs,
            events: Ma
          }
        }
      });
      return n(u), Qn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), u;
    } catch (o) {
      throw i(o), o;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: a };
}
const gE = () => {
  const t = Fr(), { request: e, data: r, error: n, loading: i } = Ji({
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
var la = { exports: {} }, Io, Zu;
function a1() {
  if (Zu)
    return Io;
  Zu = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Io = function(f, d) {
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
        var y = parseFloat(d[1]), b = (d[2] || "ms").toLowerCase();
        switch (b) {
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
    return d >= n ? h(f, d, n, "day") : d >= r ? h(f, d, r, "hour") : d >= e ? h(f, d, e, "minute") : d >= t ? h(f, d, t, "second") : f + " ms";
  }
  function h(f, d, y, b) {
    var E = d >= y * 1.5;
    return Math.round(f / y) + " " + b + (E ? "s" : "");
  }
  return Io;
}
function c1(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = a, r.humanize = a1(), r.destroy = h, Object.keys(t).forEach((f) => {
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
    let d, y = null, b, E;
    function x(...D) {
      if (!x.enabled)
        return;
      const M = x, w = Number(/* @__PURE__ */ new Date()), R = w - (d || w);
      M.diff = R, M.prev = d, M.curr = w, d = w, D[0] = r.coerce(D[0]), typeof D[0] != "string" && D.unshift("%O");
      let _ = 0;
      D[0] = D[0].replace(/%([a-zA-Z%])/g, (p, c) => {
        if (p === "%%")
          return "%";
        _++;
        const g = r.formatters[c];
        if (typeof g == "function") {
          const A = D[_];
          p = g.call(M, A), D.splice(_, 1), _--;
        }
        return p;
      }), r.formatArgs.call(M, D), (M.log || r.log).apply(M, D);
    }
    return x.namespace = f, x.useColors = r.useColors(), x.color = r.selectColor(f), x.extend = n, x.destroy = r.destroy, Object.defineProperty(x, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (b !== r.namespaces && (b = r.namespaces, E = r.enabled(f)), E),
      set: (D) => {
        y = D;
      }
    }), typeof r.init == "function" && r.init(x), x;
  }
  function n(f, d) {
    const y = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return y.log = this.log, y;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), b = y.length;
    for (d = 0; d < b; d++)
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
  function h() {
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
    const h = "color: " + this.color;
    u.splice(1, 0, h, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (d = f));
    }), u.splice(d, 0, h);
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
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(la, la.exports);
var l1 = la.exports;
const h1 = /* @__PURE__ */ Ms(l1), Ba = h1("wallet:sdk");
Ba.enabled = !0;
const yE = (t) => {
  Ba("useDecrypt", t);
  const e = Fr(), { request: r, data: n, error: i, loading: s } = Ji({
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
}, f1 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function $h(t, e) {
  const { message: r, code: n } = f1[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function mE() {
  const t = Fr(), { error: e, loading: r, setError: n, setLoading: i } = za();
  async function s() {
    try {
      i(!0), n(void 0), await (await Et()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: $h("USER_DISCONNECTED")
      }), Qn.emit("session_change"), gn.setState({ account: void 0 });
    } catch (a) {
      throw n(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: r, disconnect: s };
}
const vE = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Fr(), [i] = gn((E) => [E.account]), { refetch: s, data: a, error: o, isLoading: u } = Yi({
    queryKey: ["useEvent", i == null ? void 0 : i.address, e, r, t ?? "", n == null ? void 0 : n.topic],
    enabled: !!t && !!n && !!i && (r ? !!e : !0),
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
  Qi(({ params: E, topic: x }) => {
    const D = E.event.name;
    (D === "selectedAccountSynced" && !r || D === "sharedAccountSynced" && r) && s();
  });
  const h = !!n && !!i;
  Nr(() => {
    h && !u && s();
  }, [h]);
  const f = () => {
    !!n && !!i && !u && s();
  }, d = o ? o.message : a && a.error, y = a, b = y == null ? void 0 : y.event;
  return { fetchEvent: f, event: b, error: d, loading: u };
}, bE = ({ filter: t, page: e }) => {
  const r = Fr(), [n] = gn((E) => [E.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: i, data: s, error: a, isLoading: o } = Yi({
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
  Qi(({ id: E, params: x, topic: D }) => {
    const M = x.event.name, w = x.event.address ?? x.event.data.address;
    M === "selectedAccountSynced" && r && r.topic === D && w === (n == null ? void 0 : n.address) && !o && i();
  });
  const u = !!r && !!n;
  Nr(() => {
    u && !o && i();
  }, [u]);
  const h = () => {
    !!r && !!n && !o && i();
  }, f = a ? a.message : s && s.error, d = s, y = d == null ? void 0 : d.events, b = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: h, events: y, error: f, loading: o, page: e, pageCount: b };
}, _E = (t) => {
  const e = Fr(), { request: r, data: n, error: i, loading: s } = Ji({
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
}, wE = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, EE = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const i = Fr(), [s, a] = gn((M) => [
    M.chainId,
    M.account
  ]), { refetch: o, data: u, error: h, isLoading: f } = Yi({
    queryKey: ["useRecords", a == null ? void 0 : a.address, t, e, r, n, i == null ? void 0 : i.topic],
    enabled: (e ? !!t : !0) && !!i && !!a,
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
  Qi(({ params: M }) => {
    const w = M.event.name;
    (w === "selectedAccountSynced" && !e || w === "sharedAccountSynced" && e) && o();
  });
  const y = () => {
    d && !f && o();
  }, b = h ? h.message : u && u.error, E = u, x = E == null ? void 0 : E.records, D = (E == null ? void 0 : E.pageCount) ?? 0;
  return { fetchPage: y, records: x, error: b, loading: f, page: n, pageCount: D };
}, SE = (t, e) => {
  const r = Fr(), { request: n, data: i, error: s, loading: a } = Ji({
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
}, DE = (t) => {
  const e = Fr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: a } = Ji({
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
    t && (Ba("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, xE = async () => {
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
}, OE = async ({ address: t }) => {
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
}, IE = async () => {
  const t = await Et();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Ua,
          chains: Qs,
          events: Ma
        }
      }
    });
    return Qn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, CE = async (t) => {
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
}, RE = async () => {
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
}, TE = async (t) => {
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
}, AE = async () => {
  const t = await Et(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: $h("USER_DISCONNECTED"),
      topic: e.topic
    }), Qn.emit("session_change"), gn.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, NE = async ({
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
}, PE = async (t) => {
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
}, LE = async (t) => {
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
}, FE = async ({
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
}, UE = async ({
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
var ha = { exports: {} }, yi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function d1() {
  if (Yu)
    return yi;
  Yu = 1;
  var t = Pn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, h) {
    var f, d = {}, y = null, b = null;
    h !== void 0 && (y = "" + h), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: y, ref: b, props: d, _owner: i.current };
  }
  return yi.Fragment = r, yi.jsx = a, yi.jsxs = a, yi;
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
var Ju;
function p1() {
  return Ju || (Ju = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), E = Symbol.iterator, x = "@@iterator";
    function D(C) {
      if (C === null || typeof C != "object")
        return null;
      var K = E && C[E] || C[x];
      return typeof K == "function" ? K : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(C) {
      {
        for (var K = arguments.length, ce = new Array(K > 1 ? K - 1 : 0), Ee = 1; Ee < K; Ee++)
          ce[Ee - 1] = arguments[Ee];
        R("error", C, ce);
      }
    }
    function R(C, K, ce) {
      {
        var Ee = M.ReactDebugCurrentFrame, Je = Ee.getStackAddendum();
        Je !== "" && (K += "%s", ce = ce.concat([Je]));
        var Be = ce.map(function(He) {
          return String(He);
        });
        Be.unshift("Warning: " + K), Function.prototype.apply.call(console[C], console, Be);
      }
    }
    var _ = !1, v = !1, p = !1, c = !1, g = !1, A;
    A = Symbol.for("react.module.reference");
    function F(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === n || C === s || g || C === i || C === h || C === f || c || C === b || _ || v || p || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === d || C.$$typeof === a || C.$$typeof === o || C.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === A || C.getModuleId !== void 0));
    }
    function B(C, K, ce) {
      var Ee = C.displayName;
      if (Ee)
        return Ee;
      var Je = K.displayName || K.name || "";
      return Je !== "" ? ce + "(" + Je + ")" : ce;
    }
    function G(C) {
      return C.displayName || "Context";
    }
    function ee(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case o:
            var K = C;
            return G(K) + ".Consumer";
          case a:
            var ce = C;
            return G(ce._context) + ".Provider";
          case u:
            return B(C, C.render, "ForwardRef");
          case d:
            var Ee = C.displayName || null;
            return Ee !== null ? Ee : ee(C.type) || "Memo";
          case y: {
            var Je = C, Be = Je._payload, He = Je._init;
            try {
              return ee(He(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, $ = 0, se, Z, W, Y, H, J, we;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function be() {
      {
        if ($ === 0) {
          se = console.log, Z = console.info, W = console.warn, Y = console.error, H = console.group, J = console.groupCollapsed, we = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        $++;
      }
    }
    function he() {
      {
        if ($--, $ === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, C, {
              value: se
            }),
            info: N({}, C, {
              value: Z
            }),
            warn: N({}, C, {
              value: W
            }),
            error: N({}, C, {
              value: Y
            }),
            group: N({}, C, {
              value: H
            }),
            groupCollapsed: N({}, C, {
              value: J
            }),
            groupEnd: N({}, C, {
              value: we
            })
          });
        }
        $ < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = M.ReactCurrentDispatcher, z;
    function q(C, K, ce) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (Je) {
            var Ee = Je.stack.trim().match(/\n( *(at )?)/);
            z = Ee && Ee[1] || "";
          }
        return `
` + z + C;
      }
    }
    var L = !1, l;
    {
      var T = typeof WeakMap == "function" ? WeakMap : Map;
      l = new T();
    }
    function oe(C, K) {
      if (!C || L)
        return "";
      {
        var ce = l.get(C);
        if (ce !== void 0)
          return ce;
      }
      var Ee;
      L = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = me.current, me.current = null, be();
      try {
        if (K) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch (zt) {
              Ee = zt;
            }
            Reflect.construct(C, [], He);
          } else {
            try {
              He.call();
            } catch (zt) {
              Ee = zt;
            }
            C.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            Ee = zt;
          }
          C();
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
                    return C.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", C.displayName)), typeof C == "function" && l.set(C, Tt), Tt;
                  }
                while (dt >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        L = !1, me.current = Be, he(), Error.prepareStackTrace = Je;
      }
      var Mr = C ? C.displayName || C.name : "", yn = Mr ? q(Mr) : "";
      return typeof C == "function" && l.set(C, yn), yn;
    }
    function le(C, K, ce) {
      return oe(C, !1);
    }
    function ke(C) {
      var K = C.prototype;
      return !!(K && K.isReactComponent);
    }
    function xe(C, K, ce) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return oe(C, ke(C));
      if (typeof C == "string")
        return q(C);
      switch (C) {
        case h:
          return q("Suspense");
        case f:
          return q("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case u:
            return le(C.render);
          case d:
            return xe(C.type, K, ce);
          case y: {
            var Ee = C, Je = Ee._payload, Be = Ee._init;
            try {
              return xe(Be(Je), K, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, We = {}, it = M.ReactDebugCurrentFrame;
    function rt(C) {
      if (C) {
        var K = C._owner, ce = xe(C.type, C._source, K ? K.type : null);
        it.setExtraStackFrame(ce);
      } else
        it.setExtraStackFrame(null);
    }
    function $e(C, K, ce, Ee, Je) {
      {
        var Be = Function.call.bind(Ae);
        for (var He in C)
          if (Be(C, He)) {
            var ze = void 0;
            try {
              if (typeof C[He] != "function") {
                var Ut = Error((Ee || "React class") + ": " + ce + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ut.name = "Invariant Violation", Ut;
              }
              ze = C[He](K, He, Ee, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              ze = dt;
            }
            ze && !(ze instanceof Error) && (rt(Je), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", ce, He, typeof ze), rt(null)), ze instanceof Error && !(ze.message in We) && (We[ze.message] = !0, rt(Je), w("Failed %s type: %s", ce, ze.message), rt(null));
          }
      }
    }
    var Fe = Array.isArray;
    function Re(C) {
      return Fe(C);
    }
    function Ne(C) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ce = K && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return ce;
      }
    }
    function Te(C) {
      try {
        return Ie(C), !1;
      } catch {
        return !0;
      }
    }
    function Ie(C) {
      return "" + C;
    }
    function Oe(C) {
      if (Te(C))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(C)), Ie(C);
    }
    var _e = M.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Se, qe;
    qe = {};
    function Ge(C) {
      if (Ae.call(C, "ref")) {
        var K = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Ze(C) {
      if (Ae.call(C, "key")) {
        var K = Object.getOwnPropertyDescriptor(C, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Qe(C, K) {
      if (typeof C.ref == "string" && _e.current && K && _e.current.stateNode !== K) {
        var ce = ee(_e.current.type);
        qe[ce] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(_e.current.type), C.ref), qe[ce] = !0);
      }
    }
    function Ye(C, K) {
      {
        var ce = function() {
          Ue || (Ue = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function tr(C, K) {
      {
        var ce = function() {
          Se || (Se = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var Ht = function(C, K, ce, Ee, Je, Be, He) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: C,
        key: K,
        ref: ce,
        props: He,
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
    function pr(C, K, ce, Ee, Je) {
      {
        var Be, He = {}, ze = null, Ut = null;
        ce !== void 0 && (Oe(ce), ze = "" + ce), Ze(K) && (Oe(K.key), ze = "" + K.key), Ge(K) && (Ut = K.ref, Qe(K, Je));
        for (Be in K)
          Ae.call(K, Be) && !Pe.hasOwnProperty(Be) && (He[Be] = K[Be]);
        if (C && C.defaultProps) {
          var dt = C.defaultProps;
          for (Be in dt)
            He[Be] === void 0 && (He[Be] = dt[Be]);
        }
        if (ze || Ut) {
          var _t = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          ze && Ye(He, _t), Ut && tr(He, _t);
        }
        return Ht(C, ze, Ut, Je, Ee, _e.current, He);
      }
    }
    var Lt = M.ReactCurrentOwner, Ft = M.ReactDebugCurrentFrame;
    function ur(C) {
      if (C) {
        var K = C._owner, ce = xe(C.type, C._source, K ? K.type : null);
        Ft.setExtraStackFrame(ce);
      } else
        Ft.setExtraStackFrame(null);
    }
    var Ur;
    Ur = !1;
    function ct(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function ut() {
      {
        if (Lt.current) {
          var C = ee(Lt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function yt(C) {
      {
        if (C !== void 0) {
          var K = C.fileName.replace(/^.*[\\\/]/, ""), ce = C.lineNumber;
          return `

Check your code at ` + K + ":" + ce + ".";
        }
        return "";
      }
    }
    var ft = {};
    function mt(C) {
      {
        var K = ut();
        if (!K) {
          var ce = typeof C == "string" ? C : C.displayName || C.name;
          ce && (K = `

Check the top-level render call using <` + ce + ">.");
        }
        return K;
      }
    }
    function lt(C, K) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var ce = mt(K);
        if (ft[ce])
          return;
        ft[ce] = !0;
        var Ee = "";
        C && C._owner && C._owner !== Lt.current && (Ee = " It was passed a child from " + ee(C._owner.type) + "."), ur(C), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, Ee), ur(null);
      }
    }
    function St(C, K) {
      {
        if (typeof C != "object")
          return;
        if (Re(C))
          for (var ce = 0; ce < C.length; ce++) {
            var Ee = C[ce];
            ct(Ee) && lt(Ee, K);
          }
        else if (ct(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Je = D(C);
          if (typeof Je == "function" && Je !== C.entries)
            for (var Be = Je.call(C), He; !(He = Be.next()).done; )
              ct(He.value) && lt(He.value, K);
        }
      }
    }
    function It(C) {
      {
        var K = C.type;
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
          $e(ce, C.props, "prop", Ee, C);
        } else if (K.PropTypes !== void 0 && !Ur) {
          Ur = !0;
          var Je = ee(K);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(C) {
      {
        for (var K = Object.keys(C.props), ce = 0; ce < K.length; ce++) {
          var Ee = K[ce];
          if (Ee !== "children" && Ee !== "key") {
            ur(C), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), ur(null);
            break;
          }
        }
        C.ref !== null && (ur(C), w("Invalid attribute `ref` supplied to `React.Fragment`."), ur(null));
      }
    }
    function Dt(C, K, ce, Ee, Je, Be) {
      {
        var He = F(C);
        if (!He) {
          var ze = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ut = yt(Je);
          Ut ? ze += Ut : ze += ut();
          var dt;
          C === null ? dt = "null" : Re(C) ? dt = "array" : C !== void 0 && C.$$typeof === e ? (dt = "<" + (ee(C.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof C, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, ze);
        }
        var _t = pr(C, K, ce, Je, Be);
        if (_t == null)
          return _t;
        if (He) {
          var Tt = K.children;
          if (Tt !== void 0)
            if (Ee)
              if (Re(Tt)) {
                for (var Mr = 0; Mr < Tt.length; Mr++)
                  St(Tt[Mr], C);
                Object.freeze && Object.freeze(Tt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              St(Tt, C);
        }
        return C === n ? Ct(_t) : It(_t), _t;
      }
    }
    function Rt(C, K, ce) {
      return Dt(C, K, ce, !0);
    }
    function vt(C, K, ce) {
      return Dt(C, K, ce, !1);
    }
    var bt = vt, ot = Rt;
    mi.Fragment = n, mi.jsx = bt, mi.jsxs = ot;
  }()), mi;
}
process.env.NODE_ENV === "production" ? ha.exports = d1() : ha.exports = p1();
var g1 = ha.exports;
const y1 = new kw(), jE = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: i }) => (Nr(() => {
  r_({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), $i.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ g1.jsx(Hw, { client: y1, children: i })), m1 = [
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
], Xu = yf.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Xu !== t && (m1.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Xu));
} catch (t) {
  console.error(t);
}
export {
  Qs as $,
  Au as A,
  Qn as B,
  r_ as C,
  Et as D,
  ta as E,
  Q1 as F,
  Z1 as G,
  lE as H,
  sE as I,
  Y1 as J,
  iE as K,
  J1 as L,
  oE as M,
  na as N,
  X1 as O,
  eE as P,
  uE as Q,
  Df as R,
  hE as S,
  el as T,
  cE as U,
  ra as V,
  tE as W,
  nE as X,
  rE as Y,
  aE as Z,
  Ua as _,
  Jt as a,
  Ma as a0,
  e_ as a1,
  t_ as a2,
  M1 as a3,
  Qu as a4,
  fE as a5,
  dE as a6,
  pE as a7,
  gE as a8,
  yE as a9,
  y1 as aA,
  jE as aB,
  mE as aa,
  vE as ab,
  bE as ac,
  _E as ad,
  wE as ae,
  EE as af,
  SE as ag,
  DE as ah,
  Ih as ai,
  Qi as aj,
  cw as ak,
  Ch as al,
  Fr as am,
  ME as an,
  xE as ao,
  OE as ap,
  IE as aq,
  CE as ar,
  RE as as,
  TE as at,
  AE as au,
  NE as av,
  PE as aw,
  LE as ax,
  FE as ay,
  UE as az,
  ea as b,
  tw as c,
  sw as d,
  nw as e,
  iw as f,
  ow as g,
  aw as h,
  rw as i,
  H1 as j,
  K1 as k,
  z1 as l,
  W1 as m,
  sc as n,
  _1 as o,
  Cr as p,
  $1 as q,
  q1 as r,
  oo as s,
  b1 as t,
  B1 as u,
  V1 as v,
  k1 as w,
  G1 as x,
  Gn as y,
  j1 as z
};
