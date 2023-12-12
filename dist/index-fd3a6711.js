var bu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var Ft = (t, e, r) => (bu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Or = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, br = (t, e, r, n) => (bu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as dr from "react";
import Tn, { useEffect as Qt, useState as ts, useRef as lp } from "react";
const fp = "@puzzlehq/sdk", hp = "Puzzle SDK", dp = "0.1.41", pp = "Your portal to privacy", gp = "./dist/puzzle.cjs.js", yp = "./dist/puzzle.es.js", vp = "./dist/puzzle.umd.js", mp = "./dist/types/src/index.d.ts", bp = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, wp = "module", _p = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types",
  "type-check": "tsc --noEmit"
}, Ep = {
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
}, Sp = {
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, xp = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Dp = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], Op = "Puzzle", Ip = "ISC", Cp = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Rp = "https://github.com/puzzlehq/puzzle-sdk#readme", Tp = {
  patchedDependencies: {
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch"
  }
}, Ap = {
  name: fp,
  displayName: hp,
  version: dp,
  description: pp,
  main: gp,
  module: yp,
  browser: vp,
  types: mp,
  exports: bp,
  type: wp,
  scripts: _p,
  dependencies: Ep,
  devDependencies: Sp,
  repository: xp,
  keywords: Dp,
  author: Op,
  license: Ip,
  bugs: Cp,
  homepage: Rp,
  pnpm: Tp
}, Np = Symbol(), wu = Object.getPrototypeOf, Ma = /* @__PURE__ */ new WeakMap(), Pp = (t) => t && (Ma.has(t) ? Ma.get(t) : wu(t) === Object.prototype || wu(t) === Array.prototype), Lp = (t) => Pp(t) && t[Np] || null, _u = (t, e = !0) => {
  Ma.set(t, e);
}, fa = (t) => typeof t == "object" && t !== null, wn = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakSet(), Fp = (t = Object.is, e = (l, f) => new Proxy(l, f), r = (l) => fa(l) && !Gs.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), n = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (l, f, d = n) => {
  const p = i.get(l);
  if ((p == null ? void 0 : p[0]) === f)
    return p[1];
  const v = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return _u(v, !0), i.set(l, [f, v]), Reflect.ownKeys(l).forEach((E) => {
    if (Object.getOwnPropertyDescriptor(v, E))
      return;
    const S = Reflect.get(l, E), D = {
      value: S,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Gs.has(S))
      _u(S, !1);
    else if (S instanceof Promise)
      delete D.value, D.get = () => d(S);
    else if (wn.has(S)) {
      const [F, _] = wn.get(
        S
      );
      D.value = s(
        F,
        _(),
        d
      );
    }
    Object.defineProperty(v, E, D);
  }), Object.preventExtensions(v);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (l) => {
  if (!fa(l))
    throw new Error("object required");
  const f = a.get(l);
  if (f)
    return f;
  let d = o[0];
  const p = /* @__PURE__ */ new Set(), v = (T, P = ++o[0]) => {
    d !== P && (d = P, p.forEach((B) => B(T, P)));
  };
  let E = o[1];
  const S = (T = ++o[1]) => (E !== T && !p.size && (E = T, F.forEach(([P]) => {
    const B = P[1](T);
    B > d && (d = B);
  })), d), D = (T) => (P, B) => {
    const H = [...P];
    H[1] = [T, ...H[1]], v(H, B);
  }, F = /* @__PURE__ */ new Map(), _ = (T, P) => {
    if (p.size) {
      const B = P[3](D(T));
      F.set(T, [P, B]);
    } else
      F.set(T, [P]);
  }, I = (T) => {
    var P;
    const B = F.get(T);
    B && (F.delete(T), (P = B[1]) == null || P.call(B));
  }, w = (T) => (p.add(T), p.size === 1 && F.forEach(([B, H], ee) => {
    const N = B[3](D(ee));
    F.set(ee, [B, N]);
  }), () => {
    p.delete(T), p.size === 0 && F.forEach(([B, H], ee) => {
      H && (H(), F.set(ee, [B]));
    });
  }), b = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), c = e(b, {
    deleteProperty(T, P) {
      const B = Reflect.get(T, P);
      I(P);
      const H = Reflect.deleteProperty(T, P);
      return H && v(["delete", [P], B]), H;
    },
    set(T, P, B, H) {
      const ee = Reflect.has(T, P), N = Reflect.get(T, P, H);
      if (ee && (t(N, B) || a.has(B) && t(N, a.get(B))))
        return !0;
      I(P), fa(B) && (B = Lp(B) || B);
      let $ = B;
      if (B instanceof Promise)
        B.then((se) => {
          B.status = "fulfilled", B.value = se, v(["resolve", [P], se]);
        }).catch((se) => {
          B.status = "rejected", B.reason = se, v(["reject", [P], se]);
        });
      else {
        !wn.has(B) && r(B) && ($ = u(B));
        const se = !Gs.has($) && wn.get($);
        se && _(P, se);
      }
      return Reflect.set(T, P, $, H), v(["set", [P], B, N]), !0;
    }
  });
  a.set(l, c);
  const y = [
    b,
    S,
    s,
    w
  ];
  return wn.set(c, y), Reflect.ownKeys(l).forEach((T) => {
    const P = Object.getOwnPropertyDescriptor(
      l,
      T
    );
    "value" in P && (c[T] = l[T], delete P.value, delete P.writable), Object.defineProperty(b, T, P);
  }), c;
}) => [
  // public functions
  u,
  // shared state
  wn,
  Gs,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  a,
  o
], [Up] = Fp();
function An(t = {}) {
  return Up(t);
}
function ti(t, e, r) {
  const n = wn.get(t);
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
function Mp(t, e) {
  const r = wn.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const zt = An({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), kf = { state: zt, subscribe(t) {
  return ti(zt, () => t(zt));
}, push(t, e) {
  t !== zt.view && (zt.view = t, e && (zt.data = e), zt.history.push(t));
}, reset(t) {
  zt.view = t, zt.history = [t];
}, replace(t) {
  zt.history.length > 1 && (zt.history[zt.history.length - 1] = t, zt.view = t);
}, goBack() {
  if (zt.history.length > 1) {
    zt.history.pop();
    const [t] = zt.history.slice(-1);
    zt.view = t;
  }
}, setData(t) {
  zt.data = t;
} }, ir = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return ir.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return ir.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (ir.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!ir.isHttpUrl(t))
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
    localStorage.setItem(ir.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(ir.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(ir.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(ir.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = kf.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, jp = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), er = An({ enabled: jp, userSessionId: "", events: [], connectedWalletId: void 0 }), kp = { state: er, subscribe(t) {
  return ti(er.events, () => t(Mp(er.events[er.events.length - 1])));
}, initialize() {
  er.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (er.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  er.connectedWalletId = t;
}, click(t) {
  if (er.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: er.userSessionId, timestamp: Date.now(), data: t };
    er.events.push(e);
  }
}, track(t) {
  if (er.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: er.userSessionId, timestamp: Date.now(), data: t };
    er.events.push(e);
  }
}, view(t) {
  if (er.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: er.userSessionId, timestamp: Date.now(), data: t };
    er.events.push(e);
  }
} }, Qr = An({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), kr = { state: Qr, subscribe(t) {
  return ti(Qr, () => t(Qr));
}, setChains(t) {
  Qr.chains = t;
}, setWalletConnectUri(t) {
  Qr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Qr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Qr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Qr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Qr.isUiLoaded = t;
}, setIsAuth(t) {
  Qr.isAuth = t;
} }, Qs = An({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Si = { state: Qs, subscribe(t) {
  return ti(Qs, () => t(Qs));
}, setConfig(t) {
  var e, r;
  kp.initialize(), kr.setChains(t.chains), kr.setIsAuth(!!t.enableAuthMode), kr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), kr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), ir.setModalVersionInStorage(), Object.assign(Qs, t);
} };
var $p = Object.defineProperty, Eu = Object.getOwnPropertySymbols, qp = Object.prototype.hasOwnProperty, zp = Object.prototype.propertyIsEnumerable, Su = (t, e, r) => e in t ? $p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bp = (t, e) => {
  for (var r in e || (e = {}))
    qp.call(e, r) && Su(t, r, e[r]);
  if (Eu)
    for (var r of Eu(e))
      zp.call(e, r) && Su(t, r, e[r]);
  return t;
};
const ja = "https://explorer-api.walletconnect.com", ka = "wcm", $a = "js-2.6.2";
async function Zs(t, e) {
  const r = Bp({ sdkType: ka, sdkVersion: $a }, e), n = new URL(t, ja);
  return n.searchParams.append("projectId", Si.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const Mn = { async getDesktopListings(t) {
  return Zs("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Zs("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Zs("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Zs("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${ja}/w3m/v1/getWalletImage/${t}?projectId=${Si.state.projectId}&sdkType=${ka}&sdkVersion=${$a}`;
}, getAssetImageUrl(t) {
  return `${ja}/w3m/v1/getAssetImage/${t}?projectId=${Si.state.projectId}&sdkType=${ka}&sdkVersion=${$a}`;
} };
var Vp = Object.defineProperty, xu = Object.getOwnPropertySymbols, Kp = Object.prototype.hasOwnProperty, Hp = Object.prototype.propertyIsEnumerable, Du = (t, e, r) => e in t ? Vp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Wp = (t, e) => {
  for (var r in e || (e = {}))
    Kp.call(e, r) && Du(t, r, e[r]);
  if (xu)
    for (var r of xu(e))
      Hp.call(e, r) && Du(t, r, e[r]);
  return t;
};
const Ou = ir.isMobile(), Zr = An({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), cD = { state: Zr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Si.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Zr.recomendedWallets;
  if (ir.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Mn.getAllListings(r), i = Object.values(n);
    i.sort((s, a) => {
      const o = t.indexOf(s.id), u = t.indexOf(a.id);
      return o - u;
    }), Zr.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = kr.state, i = r == null ? void 0 : r.join(","), s = ir.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: ir.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: o } = Ou ? await Mn.getMobileListings(a) : await Mn.getDesktopListings(a);
    Zr.recomendedWallets = Object.values(o);
  }
  return Zr.recomendedWallets;
}, async getWallets(t) {
  const e = Wp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Si.state, { recomendedWallets: i } = Zr;
  if (n === "ALL")
    return Zr.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : ir.isArray(r) && (e.excludedIds = r.join(",")), ir.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), kr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: a } = t, { listings: o, total: u } = Ou ? await Mn.getMobileListings(e) : await Mn.getDesktopListings(e), l = Object.values(o), f = a ? "search" : "wallets";
  return Zr[f] = { listings: [...Zr[f].listings, ...l], total: u, page: s ?? 1 }, { listings: l, total: u };
}, getWalletImageUrl(t) {
  return Mn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Mn.getAssetImageUrl(t);
}, resetSearch() {
  Zr.search = { listings: [], total: 0, page: 1 };
} }, oi = An({ open: !1 }), ha = { state: oi, subscribe(t) {
  return ti(oi, () => t(oi));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = kr.state;
    if (ir.removeWalletConnectDeepLink(), kr.setWalletConnectUri(t == null ? void 0 : t.uri), kr.setChains(t == null ? void 0 : t.chains), kf.reset("ConnectWallet"), r && n)
      oi.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = kr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), oi.open = !0, e());
      }, 200);
    }
  });
}, close() {
  oi.open = !1;
} };
var Gp = Object.defineProperty, Iu = Object.getOwnPropertySymbols, Qp = Object.prototype.hasOwnProperty, Zp = Object.prototype.propertyIsEnumerable, Cu = (t, e, r) => e in t ? Gp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yp = (t, e) => {
  for (var r in e || (e = {}))
    Qp.call(e, r) && Cu(t, r, e[r]);
  if (Iu)
    for (var r of Iu(e))
      Zp.call(e, r) && Cu(t, r, e[r]);
  return t;
};
function Jp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ki = An({ themeMode: Jp() ? "dark" : "light" }), Ru = { state: ki, subscribe(t) {
  return ti(ki, () => t(ki));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (ki.themeMode = e), r && (ki.themeVariables = Yp({}, r));
} }, jn = An({ open: !1, message: "", variant: "success" }), uD = { state: jn, subscribe(t) {
  return ti(jn, () => t(jn));
}, openToast(t, e) {
  jn.open = !0, jn.message = t, jn.variant = e;
}, closeToast() {
  jn.open = !1;
} };
let Xp = class {
  constructor(e) {
    this.openModal = ha.open, this.closeModal = ha.close, this.subscribeModal = ha.subscribe, this.setTheme = Ru.setThemeConfig, Ru.setThemeConfig(e), Si.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-673e5cb1.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), kr.setIsUiLoaded(!0);
    }
  }
};
var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Lc(t) {
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
var Fc = { exports: {} }, pi = typeof Reflect == "object" ? Reflect : null, Tu = pi && typeof pi.apply == "function" ? pi.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, ao;
pi && typeof pi.ownKeys == "function" ? ao = pi.ownKeys : Object.getOwnPropertySymbols ? ao = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : ao = function(e) {
  return Object.getOwnPropertyNames(e);
};
function eg(t) {
  console && console.warn && console.warn(t);
}
var $f = Number.isNaN || function(e) {
  return e !== e;
};
function lt() {
  lt.init.call(this);
}
Fc.exports = lt;
Fc.exports.once = ig;
lt.EventEmitter = lt;
lt.prototype._events = void 0;
lt.prototype._eventsCount = 0;
lt.prototype._maxListeners = void 0;
var Au = 10;
function ko(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(lt, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Au;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || $f(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Au = t;
  }
});
lt.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
lt.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || $f(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function qf(t) {
  return t._maxListeners === void 0 ? lt.defaultMaxListeners : t._maxListeners;
}
lt.prototype.getMaxListeners = function() {
  return qf(this);
};
lt.prototype.emit = function(e) {
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
    Tu(u, this, r);
  else
    for (var l = u.length, f = Hf(u, l), n = 0; n < l; ++n)
      Tu(f[n], this, r);
  return !0;
};
function zf(t, e, r, n) {
  var i, s, a;
  if (ko(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), a = s[e]), a === void 0)
    a = s[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = s[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = qf(t), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, eg(o);
  }
  return t;
}
lt.prototype.addListener = function(e, r) {
  return zf(this, e, r, !1);
};
lt.prototype.on = lt.prototype.addListener;
lt.prototype.prependListener = function(e, r) {
  return zf(this, e, r, !0);
};
function tg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Bf(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = tg.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
lt.prototype.once = function(e, r) {
  return ko(r), this.on(e, Bf(this, e, r)), this;
};
lt.prototype.prependOnceListener = function(e, r) {
  return ko(r), this.prependListener(e, Bf(this, e, r)), this;
};
lt.prototype.removeListener = function(e, r) {
  var n, i, s, a, o;
  if (ko(r), i = this._events, i === void 0)
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
    s === 0 ? n.shift() : rg(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
lt.prototype.off = lt.prototype.removeListener;
lt.prototype.removeAllListeners = function(e) {
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
function Vf(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? ng(i) : Hf(i, i.length);
}
lt.prototype.listeners = function(e) {
  return Vf(this, e, !0);
};
lt.prototype.rawListeners = function(e) {
  return Vf(this, e, !1);
};
lt.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Kf.call(t, e);
};
lt.prototype.listenerCount = Kf;
function Kf(t) {
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
lt.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ao(this._events) : [];
};
function Hf(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function rg(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function ng(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function ig(t, e) {
  return new Promise(function(r, n) {
    function i(a) {
      t.removeListener(e, s), n(a);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Wf(t, e, s, { once: !0 }), e !== "error" && sg(t, i, { once: !0 });
  });
}
function sg(t, e, r) {
  typeof t.on == "function" && Wf(t, "error", e, r);
}
function Wf(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Fr = Fc.exports;
const Ns = /* @__PURE__ */ jo(Fr);
var Ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function og(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Js(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gf = { exports: {} };
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
            var d = typeof Js == "function" && Js;
            if (!f && d)
              return d(l, !0);
            if (o)
              return o(l, !0);
            var p = new Error("Cannot find module '" + l + "'");
            throw p.code = "MODULE_NOT_FOUND", p;
          }
          var v = i[l] = { exports: {} };
          n[l][0].call(v.exports, function(E) {
            var S = n[l][1][E];
            return a(S || E);
          }, v, v.exports, r, n, i, s);
        }
        return i[l].exports;
      }
      for (var o = typeof Js == "function" && Js, u = 0; u < s.length; u++)
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
            var D = s.document.createElement("script");
            D.onreadystatechange = function() {
              E(), D.onreadystatechange = null, D.parentNode.removeChild(D), D = null;
            }, s.document.documentElement.appendChild(D);
          } : o = function() {
            setTimeout(E, 0);
          };
        var p, v = [];
        function E() {
          p = !0;
          for (var D, F, _ = v.length; _; ) {
            for (F = v, v = [], D = -1; ++D < _; )
              F[D]();
            _ = v.length;
          }
          p = !1;
        }
        n.exports = S;
        function S(D) {
          v.push(D) === 1 && !p && o();
        }
      }).call(this, typeof Ys < "u" ? Ys : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function a() {
      }
      var o = {}, u = ["REJECTED"], l = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, b !== a && S(this, b);
      }
      d.prototype.catch = function(b) {
        return this.then(null, b);
      }, d.prototype.then = function(b, g) {
        if (typeof b != "function" && this.state === l || typeof g != "function" && this.state === u)
          return this;
        var c = new this.constructor(a);
        if (this.state !== f) {
          var y = this.state === l ? b : g;
          v(c, y, this.outcome);
        } else
          this.queue.push(new p(c, b, g));
        return c;
      };
      function p(b, g, c) {
        this.promise = b, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof c == "function" && (this.onRejected = c, this.callRejected = this.otherCallRejected);
      }
      p.prototype.callFulfilled = function(b) {
        o.resolve(this.promise, b);
      }, p.prototype.otherCallFulfilled = function(b) {
        v(this.promise, this.onFulfilled, b);
      }, p.prototype.callRejected = function(b) {
        o.reject(this.promise, b);
      }, p.prototype.otherCallRejected = function(b) {
        v(this.promise, this.onRejected, b);
      };
      function v(b, g, c) {
        s(function() {
          var y;
          try {
            y = g(c);
          } catch (T) {
            return o.reject(b, T);
          }
          y === b ? o.reject(b, new TypeError("Cannot resolve promise with itself")) : o.resolve(b, y);
        });
      }
      o.resolve = function(b, g) {
        var c = D(E, g);
        if (c.status === "error")
          return o.reject(b, c.value);
        var y = c.value;
        if (y)
          S(b, y);
        else {
          b.state = l, b.outcome = g;
          for (var T = -1, P = b.queue.length; ++T < P; )
            b.queue[T].callFulfilled(g);
        }
        return b;
      }, o.reject = function(b, g) {
        b.state = u, b.outcome = g;
        for (var c = -1, y = b.queue.length; ++c < y; )
          b.queue[c].callRejected(g);
        return b;
      };
      function E(b) {
        var g = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof g == "function")
          return function() {
            g.apply(b, arguments);
          };
      }
      function S(b, g) {
        var c = !1;
        function y(H) {
          c || (c = !0, o.reject(b, H));
        }
        function T(H) {
          c || (c = !0, o.resolve(b, H));
        }
        function P() {
          g(T, y);
        }
        var B = D(P);
        B.status === "error" && y(B.value);
      }
      function D(b, g) {
        var c = {};
        try {
          c.value = b(g), c.status = "success";
        } catch (y) {
          c.status = "error", c.value = y;
        }
        return c;
      }
      d.resolve = F;
      function F(b) {
        return b instanceof this ? b : o.resolve(new this(a), b);
      }
      d.reject = _;
      function _(b) {
        var g = new this(a);
        return o.reject(g, b);
      }
      d.all = I;
      function I(b) {
        var g = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = b.length, y = !1;
        if (!c)
          return this.resolve([]);
        for (var T = new Array(c), P = 0, B = -1, H = new this(a); ++B < c; )
          ee(b[B], B);
        return H;
        function ee(N, $) {
          g.resolve(N).then(se, function(Z) {
            y || (y = !0, o.reject(H, Z));
          });
          function se(Z) {
            T[$] = Z, ++P === c && !y && (y = !0, o.resolve(H, T));
          }
        }
      }
      d.race = w;
      function w(b) {
        var g = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = b.length, y = !1;
        if (!c)
          return this.resolve([]);
        for (var T = -1, P = new this(a); ++T < c; )
          B(b[T]);
        return P;
        function B(H) {
          g.resolve(H).then(function(ee) {
            y || (y = !0, o.resolve(P, ee));
          }, function(ee) {
            y || (y = !0, o.reject(P, ee));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Ys < "u" ? Ys : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
        return typeof m;
      } : function(m) {
        return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
      };
      function a(m, C) {
        if (!(m instanceof C))
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
          var m = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), C = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!m || C) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(m, C) {
        m = m || [], C = C || {};
        try {
          return new Blob(m, C);
        } catch (k) {
          if (k.name !== "TypeError")
            throw k;
          for (var O = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, j = new O(), L = 0; L < m.length; L += 1)
            j.append(m[L]);
          return j.getBlob(C.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function p(m, C) {
        C && m.then(function(O) {
          C(null, O);
        }, function(O) {
          C(O);
        });
      }
      function v(m, C, O) {
        typeof C == "function" && m.then(C), typeof O == "function" && m.catch(O);
      }
      function E(m) {
        return typeof m != "string" && (console.warn(m + " used as a key, but it is not a string."), m = String(m)), m;
      }
      function S() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var D = "local-forage-detect-blob-support", F = void 0, _ = {}, I = Object.prototype.toString, w = "readonly", b = "readwrite";
      function g(m) {
        for (var C = m.length, O = new ArrayBuffer(C), j = new Uint8Array(O), L = 0; L < C; L++)
          j[L] = m.charCodeAt(L);
        return O;
      }
      function c(m) {
        return new d(function(C) {
          var O = m.transaction(D, b), j = f([""]);
          O.objectStore(D).put(j, "key"), O.onabort = function(L) {
            L.preventDefault(), L.stopPropagation(), C(!1);
          }, O.oncomplete = function() {
            var L = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
            C(k || !L || parseInt(L[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function y(m) {
        return typeof F == "boolean" ? d.resolve(F) : c(m).then(function(C) {
          return F = C, F;
        });
      }
      function T(m) {
        var C = _[m.name], O = {};
        O.promise = new d(function(j, L) {
          O.resolve = j, O.reject = L;
        }), C.deferredOperations.push(O), C.dbReady ? C.dbReady = C.dbReady.then(function() {
          return O.promise;
        }) : C.dbReady = O.promise;
      }
      function P(m) {
        var C = _[m.name], O = C.deferredOperations.pop();
        if (O)
          return O.resolve(), O.promise;
      }
      function B(m, C) {
        var O = _[m.name], j = O.deferredOperations.pop();
        if (j)
          return j.reject(C), j.promise;
      }
      function H(m, C) {
        return new d(function(O, j) {
          if (_[m.name] = _[m.name] || _e(), m.db)
            if (C)
              T(m), m.db.close();
            else
              return O(m.db);
          var L = [m.name];
          C && L.push(m.version);
          var k = u.open.apply(u, L);
          C && (k.onupgradeneeded = function(V) {
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
            }, O(V), P(m);
          };
        });
      }
      function ee(m) {
        return H(m, !1);
      }
      function N(m) {
        return H(m, !0);
      }
      function $(m, C) {
        if (!m.db)
          return !0;
        var O = !m.db.objectStoreNames.contains(m.storeName), j = m.version < m.db.version, L = m.version > m.db.version;
        if (j && (m.version !== C && console.warn('The database "' + m.name + `" can't be downgraded from version ` + m.db.version + " to version " + m.version + "."), m.version = m.db.version), L || O) {
          if (O) {
            var k = m.db.version + 1;
            k > m.version && (m.version = k);
          }
          return !0;
        }
        return !1;
      }
      function se(m) {
        return new d(function(C, O) {
          var j = new FileReader();
          j.onerror = O, j.onloadend = function(L) {
            var k = btoa(L.target.result || "");
            C({ __local_forage_encoded_blob: !0, data: k, type: m.type });
          }, j.readAsBinaryString(m);
        });
      }
      function Z(m) {
        var C = g(atob(m.data));
        return f([C], { type: m.type });
      }
      function G(m) {
        return m && m.__local_forage_encoded_blob;
      }
      function Y(m) {
        var C = this, O = C._initReady().then(function() {
          var j = _[C._dbInfo.name];
          if (j && j.dbReady)
            return j.dbReady;
        });
        return v(O, m, m), O;
      }
      function W(m) {
        T(m);
        for (var C = _[m.name], O = C.forages, j = 0; j < O.length; j++) {
          var L = O[j];
          L._dbInfo.db && (L._dbInfo.db.close(), L._dbInfo.db = null);
        }
        return m.db = null, ee(m).then(function(k) {
          return m.db = k, $(m) ? N(m) : k;
        }).then(function(k) {
          m.db = C.db = k;
          for (var V = 0; V < O.length; V++)
            O[V]._dbInfo.db = k;
        }).catch(function(k) {
          throw B(m, k), k;
        });
      }
      function J(m, C, O, j) {
        j === void 0 && (j = 1);
        try {
          var L = m.db.transaction(m.storeName, C);
          O(null, L);
        } catch (k) {
          if (j > 0 && (!m.db || k.name === "InvalidStateError" || k.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!m.db || k.name === "NotFoundError" && !m.db.objectStoreNames.contains(m.storeName) && m.version <= m.db.version)
                return m.db && (m.version = m.db.version + 1), N(m);
            }).then(function() {
              return W(m).then(function() {
                J(m, C, O, j - 1);
              });
            }).catch(O);
          O(k);
        }
      }
      function _e() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function re(m) {
        var C = this, O = { db: null };
        if (m)
          for (var j in m)
            O[j] = m[j];
        var L = _[O.name];
        L || (L = _e(), _[O.name] = L), L.forages.push(C), C._initReady || (C._initReady = C.ready, C.ready = Y);
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
          return O.db = L.db, ee(O);
        }).then(function(te) {
          return O.db = te, $(O, C._defaultConfig.version) ? N(O) : te;
        }).then(function(te) {
          O.db = L.db = te, C._dbInfo = O;
          for (var ye = 0; ye < ne.length; ye++) {
            var Ke = ne[ye];
            Ke !== C && (Ke._dbInfo.db = O.db, Ke._dbInfo.version = O.version);
          }
        });
      }
      function be(m, C) {
        var O = this;
        m = E(m);
        var j = new d(function(L, k) {
          O.ready().then(function() {
            J(O._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.get(m);
                ne.onsuccess = function() {
                  var te = ne.result;
                  te === void 0 && (te = null), G(te) && (te = Z(te)), L(te);
                }, ne.onerror = function() {
                  k(ne.error);
                };
              } catch (te) {
                k(te);
              }
            });
          }).catch(k);
        });
        return p(j, C), j;
      }
      function fe(m, C) {
        var O = this, j = new d(function(L, k) {
          O.ready().then(function() {
            J(O._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.openCursor(), te = 1;
                ne.onsuccess = function() {
                  var ye = ne.result;
                  if (ye) {
                    var Ke = ye.value;
                    G(Ke) && (Ke = Z(Ke));
                    var at = m(Ke, ye.key, te++);
                    at !== void 0 ? L(at) : ye.continue();
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
        return p(j, C), j;
      }
      function ve(m, C, O) {
        var j = this;
        m = E(m);
        var L = new d(function(k, V) {
          var X;
          j.ready().then(function() {
            return X = j._dbInfo, I.call(C) === "[object Blob]" ? y(X.db).then(function(ie) {
              return ie ? C : se(C);
            }) : C;
          }).then(function(ie) {
            J(j._dbInfo, b, function(ne, te) {
              if (ne)
                return V(ne);
              try {
                var ye = te.objectStore(j._dbInfo.storeName);
                ie === null && (ie = void 0);
                var Ke = ye.put(ie, m);
                te.oncomplete = function() {
                  ie === void 0 && (ie = null), k(ie);
                }, te.onabort = te.onerror = function() {
                  var at = Ke.error ? Ke.error : Ke.transaction.error;
                  V(at);
                };
              } catch (at) {
                V(at);
              }
            });
          }).catch(V);
        });
        return p(L, O), L;
      }
      function z(m, C) {
        var O = this;
        m = E(m);
        var j = new d(function(L, k) {
          O.ready().then(function() {
            J(O._dbInfo, b, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = ie.delete(m);
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
        return p(j, C), j;
      }
      function q(m) {
        var C = this, O = new d(function(j, L) {
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
        return p(O, m), O;
      }
      function U(m) {
        var C = this, O = new d(function(j, L) {
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
        return p(O, m), O;
      }
      function h(m, C) {
        var O = this, j = new d(function(L, k) {
          if (m < 0) {
            L(null);
            return;
          }
          O.ready().then(function() {
            J(O._dbInfo, w, function(V, X) {
              if (V)
                return k(V);
              try {
                var ie = X.objectStore(O._dbInfo.storeName), ne = !1, te = ie.openKeyCursor();
                te.onsuccess = function() {
                  var ye = te.result;
                  if (!ye) {
                    L(null);
                    return;
                  }
                  m === 0 || ne ? L(ye.key) : (ne = !0, ye.advance(m));
                }, te.onerror = function() {
                  k(te.error);
                };
              } catch (ye) {
                k(ye);
              }
            });
          }).catch(k);
        });
        return p(j, C), j;
      }
      function A(m) {
        var C = this, O = new d(function(j, L) {
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
        return p(O, m), O;
      }
      function oe(m, C) {
        C = S.apply(this, arguments);
        var O = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || O.name, m.storeName = m.storeName || O.storeName);
        var j = this, L;
        if (!m.name)
          L = d.reject("Invalid arguments");
        else {
          var k = m.name === O.name && j._dbInfo.db, V = k ? d.resolve(j._dbInfo.db) : ee(m).then(function(X) {
            var ie = _[m.name], ne = ie.forages;
            ie.db = X;
            for (var te = 0; te < ne.length; te++)
              ne[te]._dbInfo.db = X;
            return X;
          });
          m.storeName ? L = V.then(function(X) {
            if (X.objectStoreNames.contains(m.storeName)) {
              var ie = X.version + 1;
              T(m);
              var ne = _[m.name], te = ne.forages;
              X.close();
              for (var ye = 0; ye < te.length; ye++) {
                var Ke = te[ye];
                Ke._dbInfo.db = null, Ke._dbInfo.version = ie;
              }
              var at = new d(function(tt, vt) {
                var st = u.open(m.name, ie);
                st.onerror = function(mr) {
                  var Mi = st.result;
                  Mi.close(), vt(mr);
                }, st.onupgradeneeded = function() {
                  var mr = st.result;
                  mr.deleteObjectStore(m.storeName);
                }, st.onsuccess = function() {
                  var mr = st.result;
                  mr.close(), tt(mr);
                };
              });
              return at.then(function(tt) {
                ne.db = tt;
                for (var vt = 0; vt < te.length; vt++) {
                  var st = te[vt];
                  st._dbInfo.db = tt, P(st._dbInfo);
                }
              }).catch(function(tt) {
                throw (B(m, tt) || d.resolve()).catch(function() {
                }), tt;
              });
            }
          }) : L = V.then(function(X) {
            T(m);
            var ie = _[m.name], ne = ie.forages;
            X.close();
            for (var te = 0; te < ne.length; te++) {
              var ye = ne[te];
              ye._dbInfo.db = null;
            }
            var Ke = new d(function(at, tt) {
              var vt = u.deleteDatabase(m.name);
              vt.onerror = function() {
                var st = vt.result;
                st && st.close(), tt(vt.error);
              }, vt.onblocked = function() {
                console.warn('dropInstance blocked for database "' + m.name + '" until all open connections are closed');
              }, vt.onsuccess = function() {
                var st = vt.result;
                st && st.close(), at(st);
              };
            });
            return Ke.then(function(at) {
              ie.db = at;
              for (var tt = 0; tt < ne.length; tt++) {
                var vt = ne[tt];
                P(vt._dbInfo);
              }
            }).catch(function(at) {
              throw (B(m, at) || d.resolve()).catch(function() {
              }), at;
            });
          });
        }
        return p(L, C), L;
      }
      var le = { _driver: "asyncStorage", _initStorage: re, _support: l(), iterate: fe, getItem: be, setItem: ve, removeItem: z, clear: q, length: U, key: h, keys: A, dropInstance: oe };
      function $e() {
        return typeof openDatabase == "function";
      }
      var De = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ae = "~~local_forage_type~", Ge = /^~~local_forage_type~([^~]+)~/, ot = "__lfsc__:", it = ot.length, qe = "arbf", Ue = "blob", Re = "si08", Ne = "ui08", Te = "uic8", Ie = "si16", Oe = "si32", we = "ur16", Pe = "ui32", Me = "fl32", Se = "fl64", ze = it + qe.length, Qe = Object.prototype.toString;
      function Ye(m) {
        var C = m.length * 0.75, O = m.length, j, L = 0, k, V, X, ie;
        m[m.length - 1] === "=" && (C--, m[m.length - 2] === "=" && C--);
        var ne = new ArrayBuffer(C), te = new Uint8Array(ne);
        for (j = 0; j < O; j += 4)
          k = De.indexOf(m[j]), V = De.indexOf(m[j + 1]), X = De.indexOf(m[j + 2]), ie = De.indexOf(m[j + 3]), te[L++] = k << 2 | V >> 4, te[L++] = (V & 15) << 4 | X >> 2, te[L++] = (X & 3) << 6 | ie & 63;
        return ne;
      }
      function Ze(m) {
        var C = new Uint8Array(m), O = "", j;
        for (j = 0; j < C.length; j += 3)
          O += De[C[j] >> 2], O += De[(C[j] & 3) << 4 | C[j + 1] >> 4], O += De[(C[j + 1] & 15) << 2 | C[j + 2] >> 6], O += De[C[j + 2] & 63];
        return C.length % 3 === 2 ? O = O.substring(0, O.length - 1) + "=" : C.length % 3 === 1 && (O = O.substring(0, O.length - 2) + "=="), O;
      }
      function Je(m, C) {
        var O = "";
        if (m && (O = Qe.call(m)), m && (O === "[object ArrayBuffer]" || m.buffer && Qe.call(m.buffer) === "[object ArrayBuffer]")) {
          var j, L = ot;
          m instanceof ArrayBuffer ? (j = m, L += qe) : (j = m.buffer, O === "[object Int8Array]" ? L += Re : O === "[object Uint8Array]" ? L += Ne : O === "[object Uint8ClampedArray]" ? L += Te : O === "[object Int16Array]" ? L += Ie : O === "[object Uint16Array]" ? L += we : O === "[object Int32Array]" ? L += Oe : O === "[object Uint32Array]" ? L += Pe : O === "[object Float32Array]" ? L += Me : O === "[object Float64Array]" ? L += Se : C(new Error("Failed to get type for BinaryArray"))), C(L + Ze(j));
        } else if (O === "[object Blob]") {
          var k = new FileReader();
          k.onload = function() {
            var V = Ae + m.type + "~" + Ze(this.result);
            C(ot + Ue + V);
          }, k.readAsArrayBuffer(m);
        } else
          try {
            C(JSON.stringify(m));
          } catch (V) {
            console.error("Couldn't convert value into a JSON string: ", m), C(null, V);
          }
      }
      function cr(m) {
        if (m.substring(0, it) !== ot)
          return JSON.parse(m);
        var C = m.substring(ze), O = m.substring(it, ze), j;
        if (O === Ue && Ge.test(C)) {
          var L = C.match(Ge);
          j = L[1], C = C.substring(L[0].length);
        }
        var k = Ye(C);
        switch (O) {
          case qe:
            return k;
          case Ue:
            return f([k], { type: j });
          case Re:
            return new Int8Array(k);
          case Ne:
            return new Uint8Array(k);
          case Te:
            return new Uint8ClampedArray(k);
          case Ie:
            return new Int16Array(k);
          case we:
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
            throw new Error("Unkown type: " + O);
        }
      }
      var Jt = { serialize: Je, deserialize: cr, stringToBuffer: Ye, bufferToString: Ze };
      function xr(m, C, O, j) {
        m.executeSql("CREATE TABLE IF NOT EXISTS " + C.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], O, j);
      }
      function jt(m) {
        var C = this, O = { db: null };
        if (m)
          for (var j in m)
            O[j] = typeof m[j] != "string" ? m[j].toString() : m[j];
        var L = new d(function(k, V) {
          try {
            O.db = openDatabase(O.name, String(O.version), O.description, O.size);
          } catch (X) {
            return V(X);
          }
          O.db.transaction(function(X) {
            xr(X, O, function() {
              C._dbInfo = O, k();
            }, function(ie, ne) {
              V(ne);
            });
          }, V);
        });
        return O.serializer = Jt, L;
      }
      function kt(m, C, O, j, L, k) {
        m.executeSql(O, j, L, function(V, X) {
          X.code === X.SYNTAX_ERR ? V.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [C.storeName], function(ie, ne) {
            ne.rows.length ? k(ie, X) : xr(ie, C, function() {
              ie.executeSql(O, j, L, k);
            }, k);
          }, k) : k(V, X);
        }, k);
      }
      function vr(m, C) {
        var O = this;
        m = E(m);
        var j = new d(function(L, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              kt(X, V, "SELECT * FROM " + V.storeName + " WHERE key = ? LIMIT 1", [m], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).value : null;
                te && (te = V.serializer.deserialize(te)), L(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return p(j, C), j;
      }
      function Hr(m, C) {
        var O = this, j = new d(function(L, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              kt(X, V, "SELECT * FROM " + V.storeName, [], function(ie, ne) {
                for (var te = ne.rows, ye = te.length, Ke = 0; Ke < ye; Ke++) {
                  var at = te.item(Ke), tt = at.value;
                  if (tt && (tt = V.serializer.deserialize(tt)), tt = m(tt, at.key, Ke + 1), tt !== void 0) {
                    L(tt);
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
        return p(j, C), j;
      }
      function ft(m, C, O, j) {
        var L = this;
        m = E(m);
        var k = new d(function(V, X) {
          L.ready().then(function() {
            C === void 0 && (C = null);
            var ie = C, ne = L._dbInfo;
            ne.serializer.serialize(C, function(te, ye) {
              ye ? X(ye) : ne.db.transaction(function(Ke) {
                kt(Ke, ne, "INSERT OR REPLACE INTO " + ne.storeName + " (key, value) VALUES (?, ?)", [m, te], function() {
                  V(ie);
                }, function(at, tt) {
                  X(tt);
                });
              }, function(Ke) {
                if (Ke.code === Ke.QUOTA_ERR) {
                  if (j > 0) {
                    V(ft.apply(L, [m, ie, O, j - 1]));
                    return;
                  }
                  X(Ke);
                }
              });
            });
          }).catch(X);
        });
        return p(k, O), k;
      }
      function ht(m, C, O) {
        return ft.apply(this, [m, C, O, 1]);
      }
      function bt(m, C) {
        var O = this;
        m = E(m);
        var j = new d(function(L, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              kt(X, V, "DELETE FROM " + V.storeName + " WHERE key = ?", [m], function() {
                L();
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return p(j, C), j;
      }
      function gt(m) {
        var C = this, O = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              kt(V, k, "DELETE FROM " + k.storeName, [], function() {
                j();
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return p(O, m), O;
      }
      function wt(m) {
        var C = this, O = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              kt(V, k, "SELECT COUNT(key) as c FROM " + k.storeName, [], function(X, ie) {
                var ne = ie.rows.item(0).c;
                j(ne);
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return p(O, m), O;
      }
      function dt(m, C) {
        var O = this, j = new d(function(L, k) {
          O.ready().then(function() {
            var V = O._dbInfo;
            V.db.transaction(function(X) {
              kt(X, V, "SELECT key FROM " + V.storeName + " WHERE id = ? LIMIT 1", [m + 1], function(ie, ne) {
                var te = ne.rows.length ? ne.rows.item(0).key : null;
                L(te);
              }, function(ie, ne) {
                k(ne);
              });
            });
          }).catch(k);
        });
        return p(j, C), j;
      }
      function Ot(m) {
        var C = this, O = new d(function(j, L) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(V) {
              kt(V, k, "SELECT key FROM " + k.storeName, [], function(X, ie) {
                for (var ne = [], te = 0; te < ie.rows.length; te++)
                  ne.push(ie.rows.item(te).key);
                j(ne);
              }, function(X, ie) {
                L(ie);
              });
            });
          }).catch(L);
        });
        return p(O, m), O;
      }
      function Tt(m) {
        return new d(function(C, O) {
          m.transaction(function(j) {
            j.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(L, k) {
              for (var V = [], X = 0; X < k.rows.length; X++)
                V.push(k.rows.item(X).name);
              C({ db: m, storeNames: V });
            }, function(L, k) {
              O(k);
            });
          }, function(j) {
            O(j);
          });
        });
      }
      function At(m, C) {
        C = S.apply(this, arguments);
        var O = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || O.name, m.storeName = m.storeName || O.storeName);
        var j = this, L;
        return m.name ? L = new d(function(k) {
          var V;
          m.name === O.name ? V = j._dbInfo.db : V = openDatabase(m.name, "", "", 0), m.storeName ? k({ db: V, storeNames: [m.storeName] }) : k(Tt(V));
        }).then(function(k) {
          return new d(function(V, X) {
            k.db.transaction(function(ie) {
              function ne(at) {
                return new d(function(tt, vt) {
                  ie.executeSql("DROP TABLE IF EXISTS " + at, [], function() {
                    tt();
                  }, function(st, mr) {
                    vt(mr);
                  });
                });
              }
              for (var te = [], ye = 0, Ke = k.storeNames.length; ye < Ke; ye++)
                te.push(ne(k.storeNames[ye]));
              d.all(te).then(function() {
                V();
              }).catch(function(at) {
                X(at);
              });
            }, function(ie) {
              X(ie);
            });
          });
        }) : L = d.reject("Invalid arguments"), p(L, C), L;
      }
      var It = { _driver: "webSQLStorage", _initStorage: jt, _support: $e(), iterate: Hr, getItem: vr, setItem: ht, removeItem: bt, clear: gt, length: wt, key: dt, keys: Ot, dropInstance: At };
      function Nt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function _t(m, C) {
        var O = m.name + "/";
        return m.storeName !== C.storeName && (O += m.storeName + "/"), O;
      }
      function Et() {
        var m = "_localforage_support_test";
        try {
          return localStorage.setItem(m, !0), localStorage.removeItem(m), !1;
        } catch {
          return !0;
        }
      }
      function ut() {
        return !Et() || localStorage.length > 0;
      }
      function R(m) {
        var C = this, O = {};
        if (m)
          for (var j in m)
            O[j] = m[j];
        return O.keyPrefix = _t(m, C._defaultConfig), ut() ? (C._dbInfo = O, O.serializer = Jt, d.resolve()) : d.reject();
      }
      function K(m) {
        var C = this, O = C.ready().then(function() {
          for (var j = C._dbInfo.keyPrefix, L = localStorage.length - 1; L >= 0; L--) {
            var k = localStorage.key(L);
            k.indexOf(j) === 0 && localStorage.removeItem(k);
          }
        });
        return p(O, m), O;
      }
      function ce(m, C) {
        var O = this;
        m = E(m);
        var j = O.ready().then(function() {
          var L = O._dbInfo, k = localStorage.getItem(L.keyPrefix + m);
          return k && (k = L.serializer.deserialize(k)), k;
        });
        return p(j, C), j;
      }
      function Ee(m, C) {
        var O = this, j = O.ready().then(function() {
          for (var L = O._dbInfo, k = L.keyPrefix, V = k.length, X = localStorage.length, ie = 1, ne = 0; ne < X; ne++) {
            var te = localStorage.key(ne);
            if (te.indexOf(k) === 0) {
              var ye = localStorage.getItem(te);
              if (ye && (ye = L.serializer.deserialize(ye)), ye = m(ye, te.substring(V), ie++), ye !== void 0)
                return ye;
            }
          }
        });
        return p(j, C), j;
      }
      function Xe(m, C) {
        var O = this, j = O.ready().then(function() {
          var L = O._dbInfo, k;
          try {
            k = localStorage.key(m);
          } catch {
            k = null;
          }
          return k && (k = k.substring(L.keyPrefix.length)), k;
        });
        return p(j, C), j;
      }
      function Ve(m) {
        var C = this, O = C.ready().then(function() {
          for (var j = C._dbInfo, L = localStorage.length, k = [], V = 0; V < L; V++) {
            var X = localStorage.key(V);
            X.indexOf(j.keyPrefix) === 0 && k.push(X.substring(j.keyPrefix.length));
          }
          return k;
        });
        return p(O, m), O;
      }
      function We(m) {
        var C = this, O = C.keys().then(function(j) {
          return j.length;
        });
        return p(O, m), O;
      }
      function Be(m, C) {
        var O = this;
        m = E(m);
        var j = O.ready().then(function() {
          var L = O._dbInfo;
          localStorage.removeItem(L.keyPrefix + m);
        });
        return p(j, C), j;
      }
      function $t(m, C, O) {
        var j = this;
        m = E(m);
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
                  localStorage.setItem(ie.keyPrefix + m, ne), V(k);
                } catch (ye) {
                  (ye.name === "QuotaExceededError" || ye.name === "NS_ERROR_DOM_QUOTA_REACHED") && X(ye), X(ye);
                }
            });
          });
        });
        return p(L, O), L;
      }
      function yt(m, C) {
        if (C = S.apply(this, arguments), m = typeof m != "function" && m || {}, !m.name) {
          var O = this.config();
          m.name = m.name || O.name, m.storeName = m.storeName || O.storeName;
        }
        var j = this, L;
        return m.name ? L = new d(function(k) {
          m.storeName ? k(_t(m, j._defaultConfig)) : k(m.name + "/");
        }).then(function(k) {
          for (var V = localStorage.length - 1; V >= 0; V--) {
            var X = localStorage.key(V);
            X.indexOf(k) === 0 && localStorage.removeItem(X);
          }
        }) : L = d.reject("Invalid arguments"), p(L, C), L;
      }
      var St = { _driver: "localStorageWrapper", _initStorage: R, _support: Nt(), iterate: Ee, getItem: ce, setItem: $t, removeItem: Be, clear: K, length: We, key: Xe, keys: Ve, dropInstance: yt }, Pt = function(m, C) {
        return m === C || typeof m == "number" && typeof C == "number" && isNaN(m) && isNaN(C);
      }, Wr = function(m, C) {
        for (var O = m.length, j = 0; j < O; ) {
          if (Pt(m[j], C))
            return !0;
          j++;
        }
        return !1;
      }, Ln = Array.isArray || function(m) {
        return Object.prototype.toString.call(m) === "[object Array]";
      }, Wt = {}, Bs = {}, mn = { INDEXEDDB: le, WEBSQL: It, LOCALSTORAGE: St }, ii = [mn.INDEXEDDB._driver, mn.WEBSQL._driver, mn.LOCALSTORAGE._driver], si = ["dropInstance"], Fi = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(si), Gr = { description: "", driver: ii.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
      function sa(m, C) {
        m[C] = function() {
          var O = arguments;
          return m.ready().then(function() {
            return m[C].apply(m, O);
          });
        };
      }
      function Ui() {
        for (var m = 1; m < arguments.length; m++) {
          var C = arguments[m];
          if (C)
            for (var O in C)
              C.hasOwnProperty(O) && (Ln(C[O]) ? arguments[0][O] = C[O].slice() : arguments[0][O] = C[O]);
        }
        return arguments[0];
      }
      var oa = function() {
        function m(C) {
          a(this, m);
          for (var O in mn)
            if (mn.hasOwnProperty(O)) {
              var j = mn[O], L = j._driver;
              this[O] = L, Wt[L] || this.defineDriver(j);
            }
          this._defaultConfig = Ui({}, Gr), this._config = Ui({}, this._defaultConfig, C), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return m.prototype.config = function(C) {
          if ((typeof C > "u" ? "undefined" : s(C)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var O in C) {
              if (O === "storeName" && (C[O] = C[O].replace(/\W/g, "_")), O === "version" && typeof C[O] != "number")
                return new Error("Database version must be a number.");
              this._config[O] = C[O];
            }
            return "driver" in C && C.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof C == "string" ? this._config[C] : this._config;
        }, m.prototype.defineDriver = function(C, O, j) {
          var L = new d(function(k, V) {
            try {
              var X = C._driver, ie = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!C._driver) {
                V(ie);
                return;
              }
              for (var ne = Fi.concat("_initStorage"), te = 0, ye = ne.length; te < ye; te++) {
                var Ke = ne[te], at = !Wr(si, Ke);
                if ((at || C[Ke]) && typeof C[Ke] != "function") {
                  V(ie);
                  return;
                }
              }
              var tt = function() {
                for (var st = function(ca) {
                  return function() {
                    var ua = new Error("Method " + ca + " is not implemented by the current driver"), Vs = d.reject(ua);
                    return p(Vs, arguments[arguments.length - 1]), Vs;
                  };
                }, mr = 0, Mi = si.length; mr < Mi; mr++) {
                  var Tr = si[mr];
                  C[Tr] || (C[Tr] = st(Tr));
                }
              };
              tt();
              var vt = function(st) {
                Wt[X] && console.info("Redefining LocalForage driver: " + X), Wt[X] = C, Bs[X] = st, k();
              };
              "_support" in C ? C._support && typeof C._support == "function" ? C._support().then(vt, V) : vt(!!C._support) : vt(!0);
            } catch (st) {
              V(st);
            }
          });
          return v(L, O, j), L;
        }, m.prototype.driver = function() {
          return this._driver || null;
        }, m.prototype.getDriver = function(C, O, j) {
          var L = Wt[C] ? d.resolve(Wt[C]) : d.reject(new Error("Driver not found."));
          return v(L, O, j), L;
        }, m.prototype.getSerializer = function(C) {
          var O = d.resolve(Jt);
          return v(O, C), O;
        }, m.prototype.ready = function(C) {
          var O = this, j = O._driverSet.then(function() {
            return O._ready === null && (O._ready = O._initDriver()), O._ready;
          });
          return v(j, C, C), j;
        }, m.prototype.setDriver = function(C, O, j) {
          var L = this;
          Ln(C) || (C = [C]);
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
              function Ke() {
                for (; ye < te.length; ) {
                  var at = te[ye];
                  return ye++, L._dbInfo = null, L._ready = null, L.getDriver(at).then(X).catch(Ke);
                }
                V();
                var tt = new Error("No available storage method found.");
                return L._driverSet = d.reject(tt), L._driverSet;
              }
              return Ke();
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
          }), v(this._driverSet, O, j), this._driverSet;
        }, m.prototype.supports = function(C) {
          return !!Bs[C];
        }, m.prototype._extend = function(C) {
          Ui(this, C);
        }, m.prototype._getSupportedDrivers = function(C) {
          for (var O = [], j = 0, L = C.length; j < L; j++) {
            var k = C[j];
            this.supports(k) && O.push(k);
          }
          return O;
        }, m.prototype._wrapLibraryMethodsWithReady = function() {
          for (var C = 0, O = Fi.length; C < O; C++)
            sa(this, Fi[C]);
        }, m.prototype.createInstance = function(C) {
          return new m(C);
        }, m;
      }(), aa = new oa();
      n.exports = aa;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Gf);
var ag = Gf.exports, $i = og(ag);
class cg {
  constructor() {
    this.getKeys = async () => await $i.keys(), this.getEntries = async () => {
      let e = [];
      return (await this.getKeys()).forEach(async (r) => e.push(await $i.getItem(r))), e;
    }, this.getItem = async (e) => await $i.getItem(e) ?? void 0, this.setItem = async (e, r) => {
      await $i.setItem(e, r);
    }, this.removeItem = async (e) => {
      await $i.removeItem(e);
    };
  }
}
let ug = class {
  constructor() {
    const e = new cg();
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
var Ri = {};
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
var qa = function(t, e) {
  return qa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, qa(t, e);
};
function lg(t, e) {
  qa(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var za = function() {
  return za = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, za.apply(this, arguments);
};
function fg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function hg(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (s = (i < 3 ? a(s) : i > 3 ? a(e, r, s) : a(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function dg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function pg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function gg(t, e, r, n) {
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
function yg(t, e) {
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
function vg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function mg(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Ba(t) {
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
function Qf(t, e) {
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
function bg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Qf(arguments[e]));
  return t;
}
function wg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], a = 0, o = s.length; a < o; a++, i++)
      n[i] = s[a];
  return n;
}
function ss(t) {
  return this instanceof ss ? (this.v = t, this) : new ss(t);
}
function _g(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(p) {
    n[p] && (i[p] = function(v) {
      return new Promise(function(E, S) {
        s.push([p, v, E, S]) > 1 || o(p, v);
      });
    });
  }
  function o(p, v) {
    try {
      u(n[p](v));
    } catch (E) {
      d(s[0][3], E);
    }
  }
  function u(p) {
    p.value instanceof ss ? Promise.resolve(p.value.v).then(l, f) : d(s[0][2], p);
  }
  function l(p) {
    o("next", p);
  }
  function f(p) {
    o("throw", p);
  }
  function d(p, v) {
    p(v), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function Eg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(a) {
      return (r = !r) ? { value: ss(t[i](a)), done: i === "return" } : s ? s(a) : a;
    } : s;
  }
}
function Sg(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Ba == "function" ? Ba(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
function xg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Dg(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Og(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ig(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Cg(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return za;
  },
  __asyncDelegator: Eg,
  __asyncGenerator: _g,
  __asyncValues: Sg,
  __await: ss,
  __awaiter: gg,
  __classPrivateFieldGet: Ig,
  __classPrivateFieldSet: Cg,
  __createBinding: vg,
  __decorate: hg,
  __exportStar: mg,
  __extends: lg,
  __generator: yg,
  __importDefault: Og,
  __importStar: Dg,
  __makeTemplateObject: xg,
  __metadata: pg,
  __param: dg,
  __read: Qf,
  __rest: fg,
  __spread: bg,
  __spreadArrays: wg,
  __values: Ba
}, Symbol.toStringTag, { value: "Module" })), on = /* @__PURE__ */ Lc(Rg);
var qi = {}, ge = {}, da = {}, zi = {}, Nu;
function Tg() {
  if (Nu)
    return zi;
  Nu = 1, Object.defineProperty(zi, "__esModule", { value: !0 }), zi.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return zi.delay = t, zi;
}
var kn = {}, pa = {}, $n = {}, Pu;
function Ag() {
  return Pu || (Pu = 1, Object.defineProperty($n, "__esModule", { value: !0 }), $n.ONE_THOUSAND = $n.ONE_HUNDRED = void 0, $n.ONE_HUNDRED = 100, $n.ONE_THOUSAND = 1e3), $n;
}
var ga = {}, Lu;
function Ng() {
  return Lu || (Lu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ga)), ga;
}
var Fu;
function Zf() {
  return Fu || (Fu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = on;
    e.__exportStar(Ag(), t), e.__exportStar(Ng(), t);
  }(pa)), pa;
}
var Uu;
function Pg() {
  if (Uu)
    return kn;
  Uu = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.fromMiliseconds = kn.toMiliseconds = void 0;
  const t = Zf();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  kn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return kn.fromMiliseconds = r, kn;
}
var Mu;
function Lg() {
  return Mu || (Mu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = on;
    e.__exportStar(Tg(), t), e.__exportStar(Pg(), t);
  }(da)), da;
}
var ai = {}, ju;
function Fg() {
  if (ju)
    return ai;
  ju = 1, Object.defineProperty(ai, "__esModule", { value: !0 }), ai.Watch = void 0;
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
  return ai.Watch = t, ai.default = t, ai;
}
var ya = {}, Bi = {}, ku;
function Ug() {
  if (ku)
    return Bi;
  ku = 1, Object.defineProperty(Bi, "__esModule", { value: !0 }), Bi.IWatch = void 0;
  class t {
  }
  return Bi.IWatch = t, Bi;
}
var $u;
function Mg() {
  return $u || ($u = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), on.__exportStar(Ug(), t);
  }(ya)), ya;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = on;
  e.__exportStar(Lg(), t), e.__exportStar(Fg(), t), e.__exportStar(Mg(), t), e.__exportStar(Zf(), t);
})(ge);
var va = {}, Vi = {};
let Cr = class {
};
const jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Cr
}, Symbol.toStringTag, { value: "Module" })), kg = /* @__PURE__ */ Lc(jg);
var qu;
function $g() {
  if (qu)
    return Vi;
  qu = 1, Object.defineProperty(Vi, "__esModule", { value: !0 }), Vi.IHeartBeat = void 0;
  const t = kg;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Vi.IHeartBeat = e, Vi;
}
var zu;
function Yf() {
  return zu || (zu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), on.__exportStar($g(), t);
  }(va)), va;
}
var ma = {}, qn = {}, Bu;
function qg() {
  if (Bu)
    return qn;
  Bu = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.HEARTBEAT_EVENTS = qn.HEARTBEAT_INTERVAL = void 0;
  const t = ge;
  return qn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, qn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, qn;
}
var Vu;
function Jf() {
  return Vu || (Vu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), on.__exportStar(qg(), t);
  }(ma)), ma;
}
var Ku;
function zg() {
  if (Ku)
    return qi;
  Ku = 1, Object.defineProperty(qi, "__esModule", { value: !0 }), qi.HeartBeat = void 0;
  const t = on, e = Fr, r = ge, n = Yf(), i = Jf();
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
  return qi.HeartBeat = s, qi;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = on;
  e.__exportStar(zg(), t), e.__exportStar(Yf(), t), e.__exportStar(Jf(), t);
})(Ri);
var et = {}, ba, Hu;
function Bg() {
  if (Hu)
    return ba;
  Hu = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ba = e;
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
    for (var d = "", p = 1 - a, v = -1, E = r && r.length || 0, S = 0; S < E; ) {
      if (r.charCodeAt(S) === 37 && S + 1 < E) {
        switch (v = v > -1 ? v : 0, r.charCodeAt(S + 1)) {
          case 100:
          case 102:
            if (p >= f || n[p] == null)
              break;
            v < S && (d += r.slice(v, S)), d += Number(n[p]), v = S + 2, S++;
            break;
          case 105:
            if (p >= f || n[p] == null)
              break;
            v < S && (d += r.slice(v, S)), d += Math.floor(Number(n[p])), v = S + 2, S++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= f || n[p] === void 0)
              break;
            v < S && (d += r.slice(v, S));
            var D = typeof n[p];
            if (D === "string") {
              d += "'" + n[p] + "'", v = S + 2, S++;
              break;
            }
            if (D === "function") {
              d += n[p].name || "<anonymous>", v = S + 2, S++;
              break;
            }
            d += s(n[p]), v = S + 2, S++;
            break;
          case 115:
            if (p >= f)
              break;
            v < S && (d += r.slice(v, S)), d += String(n[p]), v = S + 2, S++;
            break;
          case 37:
            v < S && (d += r.slice(v, S)), d += "%", v = S + 2, S++, p--;
            break;
        }
        ++p;
      }
      ++S;
    }
    return v === -1 ? r : (v < E && (d += r.slice(v)), d);
  }
  return ba;
}
var wa, Wu;
function Vg() {
  if (Wu)
    return wa;
  Wu = 1;
  const t = Bg();
  wa = i;
  const e = b().console || {}, r = {
    mapHttpRequest: E,
    mapHttpResponse: E,
    wrapRequestSerializer: S,
    wrapResponseSerializer: S,
    wrapErrorSerializer: S,
    req: E,
    res: E,
    err: p
  };
  function n(g, c) {
    return Array.isArray(g) ? g.filter(function(T) {
      return T !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(c) : !1;
  }
  function i(g) {
    g = g || {}, g.browser = g.browser || {};
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const y = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const T = g.serializers || {}, P = n(g.browser.serialize, T);
    let B = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (B = !1);
    const H = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof y == "function" && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), g.enabled === !1 && (g.level = "silent");
    const ee = g.level || "info", N = Object.create(y);
    N.log || (N.log = D), Object.defineProperty(N, "levelVal", {
      get: se
    }), Object.defineProperty(N, "level", {
      get: Z,
      set: G
    });
    const $ = {
      transmit: c,
      serialize: P,
      asObject: g.browser.asObject,
      levels: H,
      timestamp: v(g)
    };
    N.levels = i.levels, N.level = ee, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = D, N.serializers = T, N._serialize = P, N._stdErrSerialize = B, N.child = Y, c && (N._logEvent = d());
    function se() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function G(W) {
      if (W !== "silent" && !this.levels.values[W])
        throw Error("unknown level " + W);
      this._level = W, s($, N, "error", "log"), s($, N, "fatal", "error"), s($, N, "warn", "error"), s($, N, "info", "log"), s($, N, "debug", "log"), s($, N, "trace", "log");
    }
    function Y(W, J) {
      if (!W)
        throw new Error("missing bindings for child Pino");
      J = J || {}, P && W.serializers && (J.serializers = W.serializers);
      const _e = J.serializers;
      if (P && _e) {
        var re = Object.assign({}, T, _e), be = g.browser.serialize === !0 ? Object.keys(re) : P;
        delete W.serializers, u([W], be, re, this._stdErrSerialize);
      }
      function fe(ve) {
        this._childLevel = (ve._childLevel | 0) + 1, this.error = l(ve, W, "error"), this.fatal = l(ve, W, "fatal"), this.warn = l(ve, W, "warn"), this.info = l(ve, W, "info"), this.debug = l(ve, W, "debug"), this.trace = l(ve, W, "trace"), re && (this.serializers = re, this._serialize = be), c && (this._logEvent = d(
          [].concat(ve._logEvent.bindings, W)
        ));
      }
      return fe.prototype = this, new fe(this);
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: F, epochTime: _, unixTime: I, isoTime: w });
  function s(g, c, y, T) {
    const P = Object.getPrototypeOf(c);
    c[y] = c.levelVal > c.levels.values[y] ? D : P[y] ? P[y] : e[y] || e[T] || D, a(g, c, y);
  }
  function a(g, c, y) {
    !g.transmit && c[y] === D || (c[y] = function(T) {
      return function() {
        const B = g.timestamp(), H = new Array(arguments.length), ee = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var N = 0; N < H.length; N++)
          H[N] = arguments[N];
        if (g.serialize && !g.asObject && u(H, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? T.call(ee, o(this, y, H, B)) : T.apply(ee, H), g.transmit) {
          const $ = g.transmit.level || c.level, se = i.levels.values[$], Z = i.levels.values[y];
          if (Z < se)
            return;
          f(this, {
            ts: B,
            methodLevel: y,
            methodValue: Z,
            transmitLevel: $,
            transmitValue: i.levels.values[g.transmit.level || c.level],
            send: g.transmit.send,
            val: c.levelVal
          }, H);
        }
      };
    }(c[y]));
  }
  function o(g, c, y, T) {
    g._serialize && u(y, g._serialize, g.serializers, g._stdErrSerialize);
    const P = y.slice();
    let B = P[0];
    const H = {};
    T && (H.time = T), H.level = i.levels.values[c];
    let ee = (g._childLevel | 0) + 1;
    if (ee < 1 && (ee = 1), B !== null && typeof B == "object") {
      for (; ee-- && typeof P[0] == "object"; )
        Object.assign(H, P.shift());
      B = P.length ? t(P.shift(), P) : void 0;
    } else
      typeof B == "string" && (B = t(P.shift(), P));
    return B !== void 0 && (H.msg = B), H;
  }
  function u(g, c, y, T) {
    for (const P in g)
      if (T && g[P] instanceof Error)
        g[P] = i.stdSerializers.err(g[P]);
      else if (typeof g[P] == "object" && !Array.isArray(g[P]))
        for (const B in g[P])
          c && c.indexOf(B) > -1 && B in y && (g[P][B] = y[B](g[P][B]));
  }
  function l(g, c, y) {
    return function() {
      const T = new Array(1 + arguments.length);
      T[0] = c;
      for (var P = 1; P < T.length; P++)
        T[P] = arguments[P - 1];
      return g[y].apply(this, T);
    };
  }
  function f(g, c, y) {
    const T = c.send, P = c.ts, B = c.methodLevel, H = c.methodValue, ee = c.val, N = g._logEvent.bindings;
    u(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = P, g._logEvent.messages = y.filter(function($) {
      return N.indexOf($) === -1;
    }), g._logEvent.level.label = B, g._logEvent.level.value = H, T(B, g._logEvent, ee), g._logEvent = d(N);
  }
  function d(g) {
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
  function v(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? F : _;
  }
  function E() {
    return {};
  }
  function S(g) {
    return g;
  }
  function D() {
  }
  function F() {
    return !1;
  }
  function _() {
    return Date.now();
  }
  function I() {
    return Math.round(Date.now() / 1e3);
  }
  function w() {
    return new Date(Date.now()).toISOString();
  }
  function b() {
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
  return wa;
}
var zn = {}, Gu;
function Xf() {
  return Gu || (Gu = 1, Object.defineProperty(zn, "__esModule", { value: !0 }), zn.PINO_CUSTOM_CONTEXT_KEY = zn.PINO_LOGGER_DEFAULTS = void 0, zn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, zn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), zn;
}
var ur = {}, Qu;
function Kg() {
  if (Qu)
    return ur;
  Qu = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.generateChildLogger = ur.formatChildLoggerContext = ur.getLoggerContext = ur.setBrowserLoggerContext = ur.getBrowserLoggerContext = ur.getDefaultLoggerOptions = void 0;
  const t = Xf();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  ur.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  ur.getBrowserLoggerContext = r;
  function n(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[l] = u, o;
  }
  ur.setBrowserLoggerContext = n;
  function i(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof o.bindings > "u" ? l = r(o, u) : l = o.bindings().context || "", l;
  }
  ur.getLoggerContext = i;
  function s(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, l);
    return f.trim() ? `${f}/${u}` : u;
  }
  ur.formatChildLoggerContext = s;
  function a(o, u, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, u, l), d = o.child({ context: f });
    return n(d, f, l);
  }
  return ur.generateChildLogger = a, ur;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = on, r = e.__importDefault(Vg());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Xf(), t), e.__exportStar(Kg(), t);
})(et);
let Hg = class extends Cr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Wg = class extends Cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Gg = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Qg = class extends Cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Zg = class extends Cr {
  constructor(e) {
    super();
  }
}, Yg = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Jg = class extends Cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Xg = class extends Cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, ey = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, ty = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, ry = class {
  constructor(e) {
    this.client = e;
  }
};
const ny = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), iy = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function eh(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return iy(t);
  } catch {
    return t;
  }
}
function Uc(t) {
  return typeof t == "string" ? t : ny(t) || "";
}
var Mc = {}, Ti = {}, $o = {}, qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.BrowserRandomSource = void 0;
const Zu = 65536;
class sy {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Zu)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Zu)));
    return r;
  }
}
qo.BrowserRandomSource = sy;
function oy(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zo = {}, Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
function ay(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Rr.wipe = ay;
const cy = {}, uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cy
}, Symbol.toStringTag, { value: "Module" })), ly = /* @__PURE__ */ Lc(uy);
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.NodeRandomSource = void 0;
const fy = Rr;
class hy {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof oy < "u") {
      const e = ly;
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
    return (0, fy.wipe)(r), n;
  }
}
zo.NodeRandomSource = hy;
Object.defineProperty($o, "__esModule", { value: !0 });
$o.SystemRandomSource = void 0;
const dy = qo, py = zo;
class gy {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new dy.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new py.NodeRandomSource(), this._source.isAvailable) {
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
$o.SystemRandomSource = gy;
var Fe = {}, th = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var l = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, p = u & 65535;
    return f * p + (l * p + f * d << 16 >>> 0) | 0;
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
})(th);
Object.defineProperty(Fe, "__esModule", { value: !0 });
var rh = th;
function yy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Fe.readInt16BE = yy;
function vy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Fe.readUint16BE = vy;
function my(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Fe.readInt16LE = my;
function by(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Fe.readUint16LE = by;
function nh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Fe.writeUint16BE = nh;
Fe.writeInt16BE = nh;
function ih(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Fe.writeUint16LE = ih;
Fe.writeInt16LE = ih;
function Va(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Fe.readInt32BE = Va;
function Ka(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Fe.readUint32BE = Ka;
function Ha(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Fe.readInt32LE = Ha;
function Wa(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Fe.readUint32LE = Wa;
function go(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Fe.writeUint32BE = go;
Fe.writeInt32BE = go;
function yo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Fe.writeUint32LE = yo;
Fe.writeInt32LE = yo;
function wy(t, e) {
  e === void 0 && (e = 0);
  var r = Va(t, e), n = Va(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Fe.readInt64BE = wy;
function _y(t, e) {
  e === void 0 && (e = 0);
  var r = Ka(t, e), n = Ka(t, e + 4);
  return r * 4294967296 + n;
}
Fe.readUint64BE = _y;
function Ey(t, e) {
  e === void 0 && (e = 0);
  var r = Ha(t, e), n = Ha(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Fe.readInt64LE = Ey;
function Sy(t, e) {
  e === void 0 && (e = 0);
  var r = Wa(t, e), n = Wa(t, e + 4);
  return n * 4294967296 + r;
}
Fe.readUint64LE = Sy;
function sh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), go(t / 4294967296 >>> 0, e, r), go(t >>> 0, e, r + 4), e;
}
Fe.writeUint64BE = sh;
Fe.writeInt64BE = sh;
function oh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), yo(t >>> 0, e, r), yo(t / 4294967296 >>> 0, e, r + 4), e;
}
Fe.writeUint64LE = oh;
Fe.writeInt64LE = oh;
function xy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
Fe.readUintBE = xy;
function Dy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
Fe.readUintLE = Dy;
function Oy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!rh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Fe.writeUintBE = Oy;
function Iy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!rh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Fe.writeUintLE = Iy;
function Cy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Fe.readFloat32BE = Cy;
function Ry(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Fe.readFloat32LE = Ry;
function Ty(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Fe.readFloat64BE = Ty;
function Ay(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Fe.readFloat64LE = Ay;
function Ny(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Fe.writeFloat32BE = Ny;
function Py(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Fe.writeFloat32LE = Py;
function Ly(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Fe.writeFloat64BE = Ly;
function Fy(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Fe.writeFloat64LE = Fy;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = $o, r = Fe, n = Rr;
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
    let p = "";
    const v = f.length, E = 256 - 256 % v;
    for (; l > 0; ) {
      const S = i(Math.ceil(l * 256 / E), d);
      for (let D = 0; D < S.length && l > 0; D++) {
        const F = S[D];
        F < E && (p += f.charAt(F % v), l--);
      }
      (0, n.wipe)(S);
    }
    return p;
  }
  t.randomString = o;
  function u(l, f = a, d = t.defaultRandomSource) {
    const p = Math.ceil(l / (Math.log(f.length) / Math.LN2));
    return o(p, f, d);
  }
  t.randomStringForEntropy = u;
})(Ti);
var ah = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Fe, r = Rr;
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
          var l = this._bytesHashed, f = this._bufferLength, d = l / 536870912 | 0, p = l << 3, v = l % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var E = f + 1; E < v - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, v - 8), e.writeUint32BE(p, this._buffer, v - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, v), this._finished = !0;
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
  function s(o, u, l, f, d, p, v) {
    for (var E = l[0], S = l[1], D = l[2], F = l[3], _ = l[4], I = l[5], w = l[6], b = l[7], g = f[0], c = f[1], y = f[2], T = f[3], P = f[4], B = f[5], H = f[6], ee = f[7], N, $, se, Z, G, Y, W, J; v >= 128; ) {
      for (var _e = 0; _e < 16; _e++) {
        var re = 8 * _e + p;
        o[_e] = e.readUint32BE(d, re), u[_e] = e.readUint32BE(d, re + 4);
      }
      for (var _e = 0; _e < 80; _e++) {
        var be = E, fe = S, ve = D, z = F, q = _, U = I, h = w, A = b, oe = g, le = c, $e = y, De = T, Ae = P, Ge = B, ot = H, it = ee;
        if (N = b, $ = ee, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = (_ >>> 14 | P << 32 - 14) ^ (_ >>> 18 | P << 32 - 18) ^ (P >>> 41 - 32 | _ << 32 - (41 - 32)), $ = (P >>> 14 | _ << 32 - 14) ^ (P >>> 18 | _ << 32 - 18) ^ (_ >>> 41 - 32 | P << 32 - (41 - 32)), G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = _ & I ^ ~_ & w, $ = P & B ^ ~P & H, G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = i[_e * 2], $ = i[_e * 2 + 1], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = o[_e % 16], $ = u[_e % 16], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, se = W & 65535 | J << 16, Z = G & 65535 | Y << 16, N = se, $ = Z, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = (E >>> 28 | g << 32 - 28) ^ (g >>> 34 - 32 | E << 32 - (34 - 32)) ^ (g >>> 39 - 32 | E << 32 - (39 - 32)), $ = (g >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | g << 32 - (34 - 32)) ^ (E >>> 39 - 32 | g << 32 - (39 - 32)), G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, N = E & S ^ E & D ^ S & D, $ = g & c ^ g & y ^ c & y, G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, A = W & 65535 | J << 16, it = G & 65535 | Y << 16, N = z, $ = De, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = se, $ = Z, G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, z = W & 65535 | J << 16, De = G & 65535 | Y << 16, S = be, D = fe, F = ve, _ = z, I = q, w = U, b = h, E = A, c = oe, y = le, T = $e, P = De, B = Ae, H = Ge, ee = ot, g = it, _e % 16 === 15)
          for (var re = 0; re < 16; re++)
            N = o[re], $ = u[re], G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = o[(re + 9) % 16], $ = u[(re + 9) % 16], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, se = o[(re + 1) % 16], Z = u[(re + 1) % 16], N = (se >>> 1 | Z << 32 - 1) ^ (se >>> 8 | Z << 32 - 8) ^ se >>> 7, $ = (Z >>> 1 | se << 32 - 1) ^ (Z >>> 8 | se << 32 - 8) ^ (Z >>> 7 | se << 32 - 7), G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, se = o[(re + 14) % 16], Z = u[(re + 14) % 16], N = (se >>> 19 | Z << 32 - 19) ^ (Z >>> 61 - 32 | se << 32 - (61 - 32)) ^ se >>> 6, $ = (Z >>> 19 | se << 32 - 19) ^ (se >>> 61 - 32 | Z << 32 - (61 - 32)) ^ (Z >>> 6 | se << 32 - 6), G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, o[re] = W & 65535 | J << 16, u[re] = G & 65535 | Y << 16;
      }
      N = E, $ = g, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[0], $ = f[0], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[0] = E = W & 65535 | J << 16, f[0] = g = G & 65535 | Y << 16, N = S, $ = c, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[1], $ = f[1], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[1] = S = W & 65535 | J << 16, f[1] = c = G & 65535 | Y << 16, N = D, $ = y, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[2], $ = f[2], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[2] = D = W & 65535 | J << 16, f[2] = y = G & 65535 | Y << 16, N = F, $ = T, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[3], $ = f[3], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[3] = F = W & 65535 | J << 16, f[3] = T = G & 65535 | Y << 16, N = _, $ = P, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[4], $ = f[4], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[4] = _ = W & 65535 | J << 16, f[4] = P = G & 65535 | Y << 16, N = I, $ = B, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[5], $ = f[5], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[5] = I = W & 65535 | J << 16, f[5] = B = G & 65535 | Y << 16, N = w, $ = H, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[6], $ = f[6], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[6] = w = W & 65535 | J << 16, f[6] = H = G & 65535 | Y << 16, N = b, $ = ee, G = $ & 65535, Y = $ >>> 16, W = N & 65535, J = N >>> 16, N = l[7], $ = f[7], G += $ & 65535, Y += $ >>> 16, W += N & 65535, J += N >>> 16, Y += G >>> 16, W += Y >>> 16, J += W >>> 16, l[7] = b = W & 65535 | J << 16, f[7] = ee = G & 65535 | Y << 16, p += 128, v -= 128;
    }
    return p;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var l = u.digest();
    return u.clean(), l;
  }
  t.hash = a;
})(ah);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Ti, r = ah, n = Rr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(z) {
    const q = new Float64Array(16);
    if (z)
      for (let U = 0; U < z.length; U++)
        q[U] = z[U];
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
  ]), p = i([
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
  function v(z, q) {
    for (let U = 0; U < 16; U++)
      z[U] = q[U] | 0;
  }
  function E(z) {
    let q = 1;
    for (let U = 0; U < 16; U++) {
      let h = z[U] + q + 65535;
      q = Math.floor(h / 65536), z[U] = h - q * 65536;
    }
    z[0] += q - 1 + 37 * (q - 1);
  }
  function S(z, q, U) {
    const h = ~(U - 1);
    for (let A = 0; A < 16; A++) {
      const oe = h & (z[A] ^ q[A]);
      z[A] ^= oe, q[A] ^= oe;
    }
  }
  function D(z, q) {
    const U = i(), h = i();
    for (let A = 0; A < 16; A++)
      h[A] = q[A];
    E(h), E(h), E(h);
    for (let A = 0; A < 2; A++) {
      U[0] = h[0] - 65517;
      for (let le = 1; le < 15; le++)
        U[le] = h[le] - 65535 - (U[le - 1] >> 16 & 1), U[le - 1] &= 65535;
      U[15] = h[15] - 32767 - (U[14] >> 16 & 1);
      const oe = U[15] >> 16 & 1;
      U[14] &= 65535, S(h, U, 1 - oe);
    }
    for (let A = 0; A < 16; A++)
      z[2 * A] = h[A] & 255, z[2 * A + 1] = h[A] >> 8;
  }
  function F(z, q) {
    let U = 0;
    for (let h = 0; h < 32; h++)
      U |= z[h] ^ q[h];
    return (1 & U - 1 >>> 8) - 1;
  }
  function _(z, q) {
    const U = new Uint8Array(32), h = new Uint8Array(32);
    return D(U, z), D(h, q), F(U, h);
  }
  function I(z) {
    const q = new Uint8Array(32);
    return D(q, z), q[0] & 1;
  }
  function w(z, q) {
    for (let U = 0; U < 16; U++)
      z[U] = q[2 * U] + (q[2 * U + 1] << 8);
    z[15] &= 32767;
  }
  function b(z, q, U) {
    for (let h = 0; h < 16; h++)
      z[h] = q[h] + U[h];
  }
  function g(z, q, U) {
    for (let h = 0; h < 16; h++)
      z[h] = q[h] - U[h];
  }
  function c(z, q, U) {
    let h, A, oe = 0, le = 0, $e = 0, De = 0, Ae = 0, Ge = 0, ot = 0, it = 0, qe = 0, Ue = 0, Re = 0, Ne = 0, Te = 0, Ie = 0, Oe = 0, we = 0, Pe = 0, Me = 0, Se = 0, ze = 0, Qe = 0, Ye = 0, Ze = 0, Je = 0, cr = 0, Jt = 0, xr = 0, jt = 0, kt = 0, vr = 0, Hr = 0, ft = U[0], ht = U[1], bt = U[2], gt = U[3], wt = U[4], dt = U[5], Ot = U[6], Tt = U[7], At = U[8], It = U[9], Nt = U[10], _t = U[11], Et = U[12], ut = U[13], R = U[14], K = U[15];
    h = q[0], oe += h * ft, le += h * ht, $e += h * bt, De += h * gt, Ae += h * wt, Ge += h * dt, ot += h * Ot, it += h * Tt, qe += h * At, Ue += h * It, Re += h * Nt, Ne += h * _t, Te += h * Et, Ie += h * ut, Oe += h * R, we += h * K, h = q[1], le += h * ft, $e += h * ht, De += h * bt, Ae += h * gt, Ge += h * wt, ot += h * dt, it += h * Ot, qe += h * Tt, Ue += h * At, Re += h * It, Ne += h * Nt, Te += h * _t, Ie += h * Et, Oe += h * ut, we += h * R, Pe += h * K, h = q[2], $e += h * ft, De += h * ht, Ae += h * bt, Ge += h * gt, ot += h * wt, it += h * dt, qe += h * Ot, Ue += h * Tt, Re += h * At, Ne += h * It, Te += h * Nt, Ie += h * _t, Oe += h * Et, we += h * ut, Pe += h * R, Me += h * K, h = q[3], De += h * ft, Ae += h * ht, Ge += h * bt, ot += h * gt, it += h * wt, qe += h * dt, Ue += h * Ot, Re += h * Tt, Ne += h * At, Te += h * It, Ie += h * Nt, Oe += h * _t, we += h * Et, Pe += h * ut, Me += h * R, Se += h * K, h = q[4], Ae += h * ft, Ge += h * ht, ot += h * bt, it += h * gt, qe += h * wt, Ue += h * dt, Re += h * Ot, Ne += h * Tt, Te += h * At, Ie += h * It, Oe += h * Nt, we += h * _t, Pe += h * Et, Me += h * ut, Se += h * R, ze += h * K, h = q[5], Ge += h * ft, ot += h * ht, it += h * bt, qe += h * gt, Ue += h * wt, Re += h * dt, Ne += h * Ot, Te += h * Tt, Ie += h * At, Oe += h * It, we += h * Nt, Pe += h * _t, Me += h * Et, Se += h * ut, ze += h * R, Qe += h * K, h = q[6], ot += h * ft, it += h * ht, qe += h * bt, Ue += h * gt, Re += h * wt, Ne += h * dt, Te += h * Ot, Ie += h * Tt, Oe += h * At, we += h * It, Pe += h * Nt, Me += h * _t, Se += h * Et, ze += h * ut, Qe += h * R, Ye += h * K, h = q[7], it += h * ft, qe += h * ht, Ue += h * bt, Re += h * gt, Ne += h * wt, Te += h * dt, Ie += h * Ot, Oe += h * Tt, we += h * At, Pe += h * It, Me += h * Nt, Se += h * _t, ze += h * Et, Qe += h * ut, Ye += h * R, Ze += h * K, h = q[8], qe += h * ft, Ue += h * ht, Re += h * bt, Ne += h * gt, Te += h * wt, Ie += h * dt, Oe += h * Ot, we += h * Tt, Pe += h * At, Me += h * It, Se += h * Nt, ze += h * _t, Qe += h * Et, Ye += h * ut, Ze += h * R, Je += h * K, h = q[9], Ue += h * ft, Re += h * ht, Ne += h * bt, Te += h * gt, Ie += h * wt, Oe += h * dt, we += h * Ot, Pe += h * Tt, Me += h * At, Se += h * It, ze += h * Nt, Qe += h * _t, Ye += h * Et, Ze += h * ut, Je += h * R, cr += h * K, h = q[10], Re += h * ft, Ne += h * ht, Te += h * bt, Ie += h * gt, Oe += h * wt, we += h * dt, Pe += h * Ot, Me += h * Tt, Se += h * At, ze += h * It, Qe += h * Nt, Ye += h * _t, Ze += h * Et, Je += h * ut, cr += h * R, Jt += h * K, h = q[11], Ne += h * ft, Te += h * ht, Ie += h * bt, Oe += h * gt, we += h * wt, Pe += h * dt, Me += h * Ot, Se += h * Tt, ze += h * At, Qe += h * It, Ye += h * Nt, Ze += h * _t, Je += h * Et, cr += h * ut, Jt += h * R, xr += h * K, h = q[12], Te += h * ft, Ie += h * ht, Oe += h * bt, we += h * gt, Pe += h * wt, Me += h * dt, Se += h * Ot, ze += h * Tt, Qe += h * At, Ye += h * It, Ze += h * Nt, Je += h * _t, cr += h * Et, Jt += h * ut, xr += h * R, jt += h * K, h = q[13], Ie += h * ft, Oe += h * ht, we += h * bt, Pe += h * gt, Me += h * wt, Se += h * dt, ze += h * Ot, Qe += h * Tt, Ye += h * At, Ze += h * It, Je += h * Nt, cr += h * _t, Jt += h * Et, xr += h * ut, jt += h * R, kt += h * K, h = q[14], Oe += h * ft, we += h * ht, Pe += h * bt, Me += h * gt, Se += h * wt, ze += h * dt, Qe += h * Ot, Ye += h * Tt, Ze += h * At, Je += h * It, cr += h * Nt, Jt += h * _t, xr += h * Et, jt += h * ut, kt += h * R, vr += h * K, h = q[15], we += h * ft, Pe += h * ht, Me += h * bt, Se += h * gt, ze += h * wt, Qe += h * dt, Ye += h * Ot, Ze += h * Tt, Je += h * At, cr += h * It, Jt += h * Nt, xr += h * _t, jt += h * Et, kt += h * ut, vr += h * R, Hr += h * K, oe += 38 * Pe, le += 38 * Me, $e += 38 * Se, De += 38 * ze, Ae += 38 * Qe, Ge += 38 * Ye, ot += 38 * Ze, it += 38 * Je, qe += 38 * cr, Ue += 38 * Jt, Re += 38 * xr, Ne += 38 * jt, Te += 38 * kt, Ie += 38 * vr, Oe += 38 * Hr, A = 1, h = oe + A + 65535, A = Math.floor(h / 65536), oe = h - A * 65536, h = le + A + 65535, A = Math.floor(h / 65536), le = h - A * 65536, h = $e + A + 65535, A = Math.floor(h / 65536), $e = h - A * 65536, h = De + A + 65535, A = Math.floor(h / 65536), De = h - A * 65536, h = Ae + A + 65535, A = Math.floor(h / 65536), Ae = h - A * 65536, h = Ge + A + 65535, A = Math.floor(h / 65536), Ge = h - A * 65536, h = ot + A + 65535, A = Math.floor(h / 65536), ot = h - A * 65536, h = it + A + 65535, A = Math.floor(h / 65536), it = h - A * 65536, h = qe + A + 65535, A = Math.floor(h / 65536), qe = h - A * 65536, h = Ue + A + 65535, A = Math.floor(h / 65536), Ue = h - A * 65536, h = Re + A + 65535, A = Math.floor(h / 65536), Re = h - A * 65536, h = Ne + A + 65535, A = Math.floor(h / 65536), Ne = h - A * 65536, h = Te + A + 65535, A = Math.floor(h / 65536), Te = h - A * 65536, h = Ie + A + 65535, A = Math.floor(h / 65536), Ie = h - A * 65536, h = Oe + A + 65535, A = Math.floor(h / 65536), Oe = h - A * 65536, h = we + A + 65535, A = Math.floor(h / 65536), we = h - A * 65536, oe += A - 1 + 37 * (A - 1), A = 1, h = oe + A + 65535, A = Math.floor(h / 65536), oe = h - A * 65536, h = le + A + 65535, A = Math.floor(h / 65536), le = h - A * 65536, h = $e + A + 65535, A = Math.floor(h / 65536), $e = h - A * 65536, h = De + A + 65535, A = Math.floor(h / 65536), De = h - A * 65536, h = Ae + A + 65535, A = Math.floor(h / 65536), Ae = h - A * 65536, h = Ge + A + 65535, A = Math.floor(h / 65536), Ge = h - A * 65536, h = ot + A + 65535, A = Math.floor(h / 65536), ot = h - A * 65536, h = it + A + 65535, A = Math.floor(h / 65536), it = h - A * 65536, h = qe + A + 65535, A = Math.floor(h / 65536), qe = h - A * 65536, h = Ue + A + 65535, A = Math.floor(h / 65536), Ue = h - A * 65536, h = Re + A + 65535, A = Math.floor(h / 65536), Re = h - A * 65536, h = Ne + A + 65535, A = Math.floor(h / 65536), Ne = h - A * 65536, h = Te + A + 65535, A = Math.floor(h / 65536), Te = h - A * 65536, h = Ie + A + 65535, A = Math.floor(h / 65536), Ie = h - A * 65536, h = Oe + A + 65535, A = Math.floor(h / 65536), Oe = h - A * 65536, h = we + A + 65535, A = Math.floor(h / 65536), we = h - A * 65536, oe += A - 1 + 37 * (A - 1), z[0] = oe, z[1] = le, z[2] = $e, z[3] = De, z[4] = Ae, z[5] = Ge, z[6] = ot, z[7] = it, z[8] = qe, z[9] = Ue, z[10] = Re, z[11] = Ne, z[12] = Te, z[13] = Ie, z[14] = Oe, z[15] = we;
  }
  function y(z, q) {
    c(z, q, q);
  }
  function T(z, q) {
    const U = i();
    let h;
    for (h = 0; h < 16; h++)
      U[h] = q[h];
    for (h = 253; h >= 0; h--)
      y(U, U), h !== 2 && h !== 4 && c(U, U, q);
    for (h = 0; h < 16; h++)
      z[h] = U[h];
  }
  function P(z, q) {
    const U = i();
    let h;
    for (h = 0; h < 16; h++)
      U[h] = q[h];
    for (h = 250; h >= 0; h--)
      y(U, U), h !== 1 && c(U, U, q);
    for (h = 0; h < 16; h++)
      z[h] = U[h];
  }
  function B(z, q) {
    const U = i(), h = i(), A = i(), oe = i(), le = i(), $e = i(), De = i(), Ae = i(), Ge = i();
    g(U, z[1], z[0]), g(Ge, q[1], q[0]), c(U, U, Ge), b(h, z[0], z[1]), b(Ge, q[0], q[1]), c(h, h, Ge), c(A, z[3], q[3]), c(A, A, l), c(oe, z[2], q[2]), b(oe, oe, oe), g(le, h, U), g($e, oe, A), b(De, oe, A), b(Ae, h, U), c(z[0], le, $e), c(z[1], Ae, De), c(z[2], De, $e), c(z[3], le, Ae);
  }
  function H(z, q, U) {
    for (let h = 0; h < 4; h++)
      S(z[h], q[h], U);
  }
  function ee(z, q) {
    const U = i(), h = i(), A = i();
    T(A, q[2]), c(U, q[0], A), c(h, q[1], A), D(z, h), z[31] ^= I(U) << 7;
  }
  function N(z, q, U) {
    v(z[0], a), v(z[1], o), v(z[2], o), v(z[3], a);
    for (let h = 255; h >= 0; --h) {
      const A = U[h / 8 | 0] >> (h & 7) & 1;
      H(z, q, A), B(q, z), B(z, z), H(z, q, A);
    }
  }
  function $(z, q) {
    const U = [i(), i(), i(), i()];
    v(U[0], f), v(U[1], d), v(U[2], o), c(U[3], f, d), N(z, U, q);
  }
  function se(z) {
    if (z.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const q = (0, r.hash)(z);
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const U = new Uint8Array(32), h = [i(), i(), i(), i()];
    $(h, q), ee(U, h);
    const A = new Uint8Array(64);
    return A.set(z), A.set(U, 32), {
      publicKey: U,
      secretKey: A
    };
  }
  t.generateKeyPairFromSeed = se;
  function Z(z) {
    const q = (0, e.randomBytes)(32, z), U = se(q);
    return (0, n.wipe)(q), U;
  }
  t.generateKeyPair = Z;
  function G(z) {
    if (z.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(z.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = G;
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
    let U, h, A, oe;
    for (h = 63; h >= 32; --h) {
      for (U = 0, A = h - 32, oe = h - 12; A < oe; ++A)
        q[A] += U - 16 * q[h] * Y[A - (h - 32)], U = Math.floor((q[A] + 128) / 256), q[A] -= U * 256;
      q[A] += U, q[h] = 0;
    }
    for (U = 0, A = 0; A < 32; A++)
      q[A] += U - (q[31] >> 4) * Y[A], U = q[A] >> 8, q[A] &= 255;
    for (A = 0; A < 32; A++)
      q[A] -= U * Y[A];
    for (h = 0; h < 32; h++)
      q[h + 1] += q[h] >> 8, z[h] = q[h] & 255;
  }
  function J(z) {
    const q = new Float64Array(64);
    for (let U = 0; U < 64; U++)
      q[U] = z[U];
    for (let U = 0; U < 64; U++)
      z[U] = 0;
    W(z, q);
  }
  function _e(z, q) {
    const U = new Float64Array(64), h = [i(), i(), i(), i()], A = (0, r.hash)(z.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const oe = new Uint8Array(64);
    oe.set(A.subarray(32), 32);
    const le = new r.SHA512();
    le.update(oe.subarray(32)), le.update(q);
    const $e = le.digest();
    le.clean(), J($e), $(h, $e), ee(oe, h), le.reset(), le.update(oe.subarray(0, 32)), le.update(z.subarray(32)), le.update(q);
    const De = le.digest();
    J(De);
    for (let Ae = 0; Ae < 32; Ae++)
      U[Ae] = $e[Ae];
    for (let Ae = 0; Ae < 32; Ae++)
      for (let Ge = 0; Ge < 32; Ge++)
        U[Ae + Ge] += De[Ae] * A[Ge];
    return W(oe.subarray(32), U), oe;
  }
  t.sign = _e;
  function re(z, q) {
    const U = i(), h = i(), A = i(), oe = i(), le = i(), $e = i(), De = i();
    return v(z[2], o), w(z[1], q), y(A, z[1]), c(oe, A, u), g(A, A, z[2]), b(oe, z[2], oe), y(le, oe), y($e, le), c(De, $e, le), c(U, De, A), c(U, U, oe), P(U, U), c(U, U, A), c(U, U, oe), c(U, U, oe), c(z[0], U, oe), y(h, z[0]), c(h, h, oe), _(h, A) && c(z[0], z[0], p), y(h, z[0]), c(h, h, oe), _(h, A) ? -1 : (I(z[0]) === q[31] >> 7 && g(z[0], a, z[0]), c(z[3], z[0], z[1]), 0);
  }
  function be(z, q, U) {
    const h = new Uint8Array(32), A = [i(), i(), i(), i()], oe = [i(), i(), i(), i()];
    if (U.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (re(oe, z))
      return !1;
    const le = new r.SHA512();
    le.update(U.subarray(0, 32)), le.update(z), le.update(q);
    const $e = le.digest();
    return J($e), N(A, oe, $e), $(oe, U.subarray(32)), B(A, oe), ee(h, A), !F(U, h);
  }
  t.verify = be;
  function fe(z) {
    let q = [i(), i(), i(), i()];
    if (re(q, z))
      throw new Error("Ed25519: invalid public key");
    let U = i(), h = i(), A = q[1];
    b(U, o, A), g(h, o, A), T(h, h), c(U, U, h);
    let oe = new Uint8Array(32);
    return D(oe, U), oe;
  }
  t.convertPublicKeyToX25519 = fe;
  function ve(z) {
    const q = (0, r.hash)(z.subarray(0, 32));
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const U = new Uint8Array(q.subarray(0, 32));
    return (0, n.wipe)(q), U;
  }
  t.convertSecretKeyToX25519 = ve;
})(Mc);
const Uy = "EdDSA", My = "JWT", ch = ".", uh = "base64url", jy = "utf8", ky = "utf8", $y = ":", qy = "did", zy = "key", Yu = "base58btc", By = "z", Vy = "K36", Ky = 32;
function jc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function lh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? jc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ga(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = lh(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return jc(r);
}
function Hy(t, e) {
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
    for (var S = 0, D = 0, F = 0, _ = E.length; F !== _ && E[F] === 0; )
      F++, S++;
    for (var I = (_ - F) * f + 1 >>> 0, w = new Uint8Array(I); F !== _; ) {
      for (var b = E[F], g = 0, c = I - 1; (b !== 0 || g < D) && c !== -1; c--, g++)
        b += 256 * w[c] >>> 0, w[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      D = g, F++;
    }
    for (var y = I - D; y !== I && w[y] === 0; )
      y++;
    for (var T = u.repeat(S); y < I; ++y)
      T += t.charAt(w[y]);
    return T;
  }
  function p(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var S = 0;
    if (E[S] !== " ") {
      for (var D = 0, F = 0; E[S] === u; )
        D++, S++;
      for (var _ = (E.length - S) * l + 1 >>> 0, I = new Uint8Array(_); E[S]; ) {
        var w = r[E.charCodeAt(S)];
        if (w === 255)
          return;
        for (var b = 0, g = _ - 1; (w !== 0 || b < F) && g !== -1; g--, b++)
          w += o * I[g] >>> 0, I[g] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        F = b, S++;
      }
      if (E[S] !== " ") {
        for (var c = _ - F; c !== _ && I[c] === 0; )
          c++;
        for (var y = new Uint8Array(D + (_ - c)), T = D; c !== _; )
          y[T++] = I[c++];
        return y;
      }
    }
  }
  function v(E) {
    var S = p(E);
    if (S)
      return S;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: p,
    decode: v
  };
}
var Wy = Hy, Gy = Wy;
const Qy = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Zy = (t) => new TextEncoder().encode(t), Yy = (t) => new TextDecoder().decode(t);
class Jy {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Xy {
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
    return fh(this, e);
  }
}
class ev {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return fh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const fh = (t, e) => new ev({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class tv {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Jy(e, r, n), this.decoder = new Xy(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Bo = ({ name: t, prefix: e, encode: r, decode: n }) => new tv(t, e, r, n), Ps = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Gy(r, e);
  return Bo({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => Qy(i(s))
  });
}, rv = (t, e, r, n) => {
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
}, nv = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Zt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Bo({
  prefix: e,
  name: t,
  encode(i) {
    return nv(i, n, r);
  },
  decode(i) {
    return rv(i, n, r, t);
  }
}), iv = Bo({
  prefix: "\0",
  name: "identity",
  encode: (t) => Yy(t),
  decode: (t) => Zy(t)
}), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: iv
}, Symbol.toStringTag, { value: "Module" })), ov = Zt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: ov
}, Symbol.toStringTag, { value: "Module" })), cv = Zt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: cv
}, Symbol.toStringTag, { value: "Module" })), lv = Ps({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: lv
}, Symbol.toStringTag, { value: "Module" })), hv = Zt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), dv = Zt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: hv,
  base16upper: dv
}, Symbol.toStringTag, { value: "Module" })), gv = Zt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), yv = Zt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), vv = Zt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), mv = Zt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), bv = Zt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), wv = Zt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), _v = Zt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Ev = Zt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Sv = Zt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: gv,
  base32hex: bv,
  base32hexpad: _v,
  base32hexpadupper: Ev,
  base32hexupper: wv,
  base32pad: vv,
  base32padupper: mv,
  base32upper: yv,
  base32z: Sv
}, Symbol.toStringTag, { value: "Module" })), Dv = Ps({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Ov = Ps({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Iv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Dv,
  base36upper: Ov
}, Symbol.toStringTag, { value: "Module" })), Cv = Ps({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Rv = Ps({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Cv,
  base58flickr: Rv
}, Symbol.toStringTag, { value: "Module" })), Av = Zt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Nv = Zt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Pv = Zt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Lv = Zt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Av,
  base64pad: Nv,
  base64url: Pv,
  base64urlpad: Lv
}, Symbol.toStringTag, { value: "Module" })), hh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Uv = hh.reduce((t, e, r) => (t[r] = e, t), []), Mv = hh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function jv(t) {
  return t.reduce((e, r) => (e += Uv[r], e), "");
}
function kv(t) {
  const e = [];
  for (const r of t) {
    const n = Mv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const $v = Bo({
  prefix: "🚀",
  name: "base256emoji",
  encode: jv,
  decode: kv
}), qv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: $v
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Ju = {
  ...sv,
  ...av,
  ...uv,
  ...fv,
  ...pv,
  ...xv,
  ...Iv,
  ...Tv,
  ...Fv,
  ...qv
};
function dh(t, e, r, n) {
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
const Xu = dh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), _a = dh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = lh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), ph = {
  utf8: Xu,
  "utf-8": Xu,
  hex: Ju.base16,
  latin1: _a,
  ascii: _a,
  binary: _a,
  ...Ju
};
function gr(t, e = "utf8") {
  const r = ph[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Er(t, e = "utf8") {
  const r = ph[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? jc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function vo(t) {
  return gr(Er(Uc(t), jy), uh);
}
function gh(t) {
  const e = Er(Vy, Yu), r = By + gr(Ga([e, t]), Yu);
  return [qy, zy, r].join($y);
}
function zv(t) {
  return gr(t, uh);
}
function Bv(t) {
  return Er([vo(t.header), vo(t.payload)].join(ch), ky);
}
function Vv(t) {
  return [
    vo(t.header),
    vo(t.payload),
    zv(t.signature)
  ].join(ch);
}
function el(t = Ti.randomBytes(Ky)) {
  return Mc.generateKeyPairFromSeed(t);
}
async function Kv(t, e, r, n, i = ge.fromMiliseconds(Date.now())) {
  const s = { alg: Uy, typ: My }, a = gh(n.publicKey), o = i + r, u = { iss: a, sub: t, aud: e, iat: i, exp: o }, l = Bv({ header: s, payload: u }), f = Mc.sign(n.secretKey, l);
  return Vv({ header: s, payload: u, signature: f });
}
var kc = {}, Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
var tr = Fe, Qa = Rr, Hv = 20;
function Wv(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], v = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], S = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], D = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], _ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], I = n, w = i, b = s, g = a, c = o, y = u, T = l, P = f, B = d, H = p, ee = v, N = E, $ = S, se = D, Z = F, G = _, Y = 0; Y < Hv; Y += 2)
    I = I + c | 0, $ ^= I, $ = $ >>> 32 - 16 | $ << 16, B = B + $ | 0, c ^= B, c = c >>> 32 - 12 | c << 12, w = w + y | 0, se ^= w, se = se >>> 32 - 16 | se << 16, H = H + se | 0, y ^= H, y = y >>> 32 - 12 | y << 12, b = b + T | 0, Z ^= b, Z = Z >>> 32 - 16 | Z << 16, ee = ee + Z | 0, T ^= ee, T = T >>> 32 - 12 | T << 12, g = g + P | 0, G ^= g, G = G >>> 32 - 16 | G << 16, N = N + G | 0, P ^= N, P = P >>> 32 - 12 | P << 12, b = b + T | 0, Z ^= b, Z = Z >>> 32 - 8 | Z << 8, ee = ee + Z | 0, T ^= ee, T = T >>> 32 - 7 | T << 7, g = g + P | 0, G ^= g, G = G >>> 32 - 8 | G << 8, N = N + G | 0, P ^= N, P = P >>> 32 - 7 | P << 7, w = w + y | 0, se ^= w, se = se >>> 32 - 8 | se << 8, H = H + se | 0, y ^= H, y = y >>> 32 - 7 | y << 7, I = I + c | 0, $ ^= I, $ = $ >>> 32 - 8 | $ << 8, B = B + $ | 0, c ^= B, c = c >>> 32 - 7 | c << 7, I = I + y | 0, G ^= I, G = G >>> 32 - 16 | G << 16, ee = ee + G | 0, y ^= ee, y = y >>> 32 - 12 | y << 12, w = w + T | 0, $ ^= w, $ = $ >>> 32 - 16 | $ << 16, N = N + $ | 0, T ^= N, T = T >>> 32 - 12 | T << 12, b = b + P | 0, se ^= b, se = se >>> 32 - 16 | se << 16, B = B + se | 0, P ^= B, P = P >>> 32 - 12 | P << 12, g = g + c | 0, Z ^= g, Z = Z >>> 32 - 16 | Z << 16, H = H + Z | 0, c ^= H, c = c >>> 32 - 12 | c << 12, b = b + P | 0, se ^= b, se = se >>> 32 - 8 | se << 8, B = B + se | 0, P ^= B, P = P >>> 32 - 7 | P << 7, g = g + c | 0, Z ^= g, Z = Z >>> 32 - 8 | Z << 8, H = H + Z | 0, c ^= H, c = c >>> 32 - 7 | c << 7, w = w + T | 0, $ ^= w, $ = $ >>> 32 - 8 | $ << 8, N = N + $ | 0, T ^= N, T = T >>> 32 - 7 | T << 7, I = I + y | 0, G ^= I, G = G >>> 32 - 8 | G << 8, ee = ee + G | 0, y ^= ee, y = y >>> 32 - 7 | y << 7;
  tr.writeUint32LE(I + n | 0, t, 0), tr.writeUint32LE(w + i | 0, t, 4), tr.writeUint32LE(b + s | 0, t, 8), tr.writeUint32LE(g + a | 0, t, 12), tr.writeUint32LE(c + o | 0, t, 16), tr.writeUint32LE(y + u | 0, t, 20), tr.writeUint32LE(T + l | 0, t, 24), tr.writeUint32LE(P + f | 0, t, 28), tr.writeUint32LE(B + d | 0, t, 32), tr.writeUint32LE(H + p | 0, t, 36), tr.writeUint32LE(ee + v | 0, t, 40), tr.writeUint32LE(N + E | 0, t, 44), tr.writeUint32LE($ + S | 0, t, 48), tr.writeUint32LE(se + D | 0, t, 52), tr.writeUint32LE(Z + F | 0, t, 56), tr.writeUint32LE(G + _ | 0, t, 60);
}
function yh(t, e, r, n, i) {
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
    Wv(o, s, t);
    for (var l = u; l < u + 64 && l < r.length; l++)
      n[l] = r[l] ^ o[l - u];
    Qv(s, 0, a);
  }
  return Qa.wipe(o), i === 0 && Qa.wipe(s), n;
}
Vo.streamXOR = yh;
function Gv(t, e, r, n) {
  return n === void 0 && (n = 0), Qa.wipe(r), yh(t, e, r, r, n);
}
Vo.stream = Gv;
function Qv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var vh = {}, Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
function Zv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Nn.select = Zv;
function Yv(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Nn.lessOrEqual = Yv;
function mh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Nn.compare = mh;
function Jv(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : mh(t, e) !== 0;
}
Nn.equal = Jv;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Nn, r = Rr;
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
        var p = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var v = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | v << 2) & 8191;
        var E = o[12] | o[13] << 8;
        this._r[7] = (v >>> 11 | E << 5) & 8065;
        var S = o[14] | o[15] << 8;
        this._r[8] = (E >>> 8 | S << 8) & 8191, this._r[9] = S >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, l) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], p = this._h[1], v = this._h[2], E = this._h[3], S = this._h[4], D = this._h[5], F = this._h[6], _ = this._h[7], I = this._h[8], w = this._h[9], b = this._r[0], g = this._r[1], c = this._r[2], y = this._r[3], T = this._r[4], P = this._r[5], B = this._r[6], H = this._r[7], ee = this._r[8], N = this._r[9]; l >= 16; ) {
          var $ = o[u + 0] | o[u + 1] << 8;
          d += $ & 8191;
          var se = o[u + 2] | o[u + 3] << 8;
          p += ($ >>> 13 | se << 3) & 8191;
          var Z = o[u + 4] | o[u + 5] << 8;
          v += (se >>> 10 | Z << 6) & 8191;
          var G = o[u + 6] | o[u + 7] << 8;
          E += (Z >>> 7 | G << 9) & 8191;
          var Y = o[u + 8] | o[u + 9] << 8;
          S += (G >>> 4 | Y << 12) & 8191, D += Y >>> 1 & 8191;
          var W = o[u + 10] | o[u + 11] << 8;
          F += (Y >>> 14 | W << 2) & 8191;
          var J = o[u + 12] | o[u + 13] << 8;
          _ += (W >>> 11 | J << 5) & 8191;
          var _e = o[u + 14] | o[u + 15] << 8;
          I += (J >>> 8 | _e << 8) & 8191, w += _e >>> 5 | f;
          var re = 0, be = re;
          be += d * b, be += p * (5 * N), be += v * (5 * ee), be += E * (5 * H), be += S * (5 * B), re = be >>> 13, be &= 8191, be += D * (5 * P), be += F * (5 * T), be += _ * (5 * y), be += I * (5 * c), be += w * (5 * g), re += be >>> 13, be &= 8191;
          var fe = re;
          fe += d * g, fe += p * b, fe += v * (5 * N), fe += E * (5 * ee), fe += S * (5 * H), re = fe >>> 13, fe &= 8191, fe += D * (5 * B), fe += F * (5 * P), fe += _ * (5 * T), fe += I * (5 * y), fe += w * (5 * c), re += fe >>> 13, fe &= 8191;
          var ve = re;
          ve += d * c, ve += p * g, ve += v * b, ve += E * (5 * N), ve += S * (5 * ee), re = ve >>> 13, ve &= 8191, ve += D * (5 * H), ve += F * (5 * B), ve += _ * (5 * P), ve += I * (5 * T), ve += w * (5 * y), re += ve >>> 13, ve &= 8191;
          var z = re;
          z += d * y, z += p * c, z += v * g, z += E * b, z += S * (5 * N), re = z >>> 13, z &= 8191, z += D * (5 * ee), z += F * (5 * H), z += _ * (5 * B), z += I * (5 * P), z += w * (5 * T), re += z >>> 13, z &= 8191;
          var q = re;
          q += d * T, q += p * y, q += v * c, q += E * g, q += S * b, re = q >>> 13, q &= 8191, q += D * (5 * N), q += F * (5 * ee), q += _ * (5 * H), q += I * (5 * B), q += w * (5 * P), re += q >>> 13, q &= 8191;
          var U = re;
          U += d * P, U += p * T, U += v * y, U += E * c, U += S * g, re = U >>> 13, U &= 8191, U += D * b, U += F * (5 * N), U += _ * (5 * ee), U += I * (5 * H), U += w * (5 * B), re += U >>> 13, U &= 8191;
          var h = re;
          h += d * B, h += p * P, h += v * T, h += E * y, h += S * c, re = h >>> 13, h &= 8191, h += D * g, h += F * b, h += _ * (5 * N), h += I * (5 * ee), h += w * (5 * H), re += h >>> 13, h &= 8191;
          var A = re;
          A += d * H, A += p * B, A += v * P, A += E * T, A += S * y, re = A >>> 13, A &= 8191, A += D * c, A += F * g, A += _ * b, A += I * (5 * N), A += w * (5 * ee), re += A >>> 13, A &= 8191;
          var oe = re;
          oe += d * ee, oe += p * H, oe += v * B, oe += E * P, oe += S * T, re = oe >>> 13, oe &= 8191, oe += D * y, oe += F * c, oe += _ * g, oe += I * b, oe += w * (5 * N), re += oe >>> 13, oe &= 8191;
          var le = re;
          le += d * N, le += p * ee, le += v * H, le += E * B, le += S * P, re = le >>> 13, le &= 8191, le += D * T, le += F * y, le += _ * c, le += I * g, le += w * b, re += le >>> 13, le &= 8191, re = (re << 2) + re | 0, re = re + be | 0, be = re & 8191, re = re >>> 13, fe += re, d = be, p = fe, v = ve, E = z, S = q, D = U, F = h, _ = A, I = oe, w = le, u += 16, l -= 16;
        }
        this._h[0] = d, this._h[1] = p, this._h[2] = v, this._h[3] = E, this._h[4] = S, this._h[5] = D, this._h[6] = F, this._h[7] = _, this._h[8] = I, this._h[9] = w;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var l = new Uint16Array(10), f, d, p, v;
        if (this._leftover) {
          for (v = this._leftover, this._buffer[v++] = 1; v < 16; v++)
            this._buffer[v] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, v = 2; v < 10; v++)
          this._h[v] += f, f = this._h[v] >>> 13, this._h[v] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, l[0] = this._h[0] + 5, f = l[0] >>> 13, l[0] &= 8191, v = 1; v < 10; v++)
          l[v] = this._h[v] + f, f = l[v] >>> 13, l[v] &= 8191;
        for (l[9] -= 8192, d = (f ^ 1) - 1, v = 0; v < 10; v++)
          l[v] &= d;
        for (d = ~d, v = 0; v < 10; v++)
          this._h[v] = this._h[v] & d | l[v];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, v = 1; v < 8; v++)
          p = (this._h[v] + this._pad[v] | 0) + (p >>> 16) | 0, this._h[v] = p & 65535;
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
})(vh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Vo, r = vh, n = Rr, i = Fe, s = Nn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return u.prototype.seal = function(l, f, d, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var v = new Uint8Array(16);
        v.set(l, v.length - l.length);
        var E = new Uint8Array(32);
        e.stream(this._key, v, E, 4);
        var S = f.length + this.tagLength, D;
        if (p) {
          if (p.length !== S)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          D = p;
        } else
          D = new Uint8Array(S);
        return e.streamXOR(this._key, v, f, D, 4), this._authenticate(D.subarray(D.length - this.tagLength, D.length), E, D.subarray(0, D.length - this.tagLength), d), n.wipe(v), D;
      }, u.prototype.open = function(l, f, d, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var v = new Uint8Array(16);
        v.set(l, v.length - l.length);
        var E = new Uint8Array(32);
        e.stream(this._key, v, E, 4);
        var S = new Uint8Array(this.tagLength);
        if (this._authenticate(S, E, f.subarray(0, f.length - this.tagLength), d), !s.equal(S, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var D = f.length - this.tagLength, F;
        if (p) {
          if (p.length !== D)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F = p;
        } else
          F = new Uint8Array(D);
        return e.streamXOR(this._key, v, f.subarray(0, f.length - this.tagLength), F, 4), n.wipe(v), F;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(l, f, d, p) {
        var v = new r.Poly1305(f);
        p && (v.update(p), p.length % 16 > 0 && v.update(a.subarray(p.length % 16))), v.update(d), d.length % 16 > 0 && v.update(a.subarray(d.length % 16));
        var E = new Uint8Array(8);
        p && i.writeUint64LE(p.length, E), v.update(E), i.writeUint64LE(d.length, E), v.update(E);
        for (var S = v.digest(), D = 0; D < S.length; D++)
          l[D] = S[D];
        v.clean(), n.wipe(S), n.wipe(E);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(kc);
var bh = {}, Ls = {}, $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
function Xv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
$c.isSerializableHash = Xv;
Object.defineProperty(Ls, "__esModule", { value: !0 });
var Yr = $c, em = Nn, tm = Rr, wh = (
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
      this._outer.update(n), Yr.isSerializableHash(this._inner) && Yr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), tm.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Yr.isSerializableHash(this._inner) || !Yr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Yr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Yr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Yr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Yr.isSerializableHash(this._inner) || !Yr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Yr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Ls.HMAC = wh;
function rm(t, e, r) {
  var n = new wh(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Ls.hmac = rm;
Ls.equal = em.equal;
Object.defineProperty(bh, "__esModule", { value: !0 });
var tl = Ls, rl = Rr, nm = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = tl.hmac(this._hash, n, r);
      this._hmac = new tl.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), rl.wipe(this._buffer), rl.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), im = bh.HKDF = nm, Ko = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Fe, r = Rr;
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
          var l = this._bytesHashed, f = this._bufferLength, d = l / 536870912 | 0, p = l << 3, v = l % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var E = f + 1; E < v - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, v - 8), e.writeUint32BE(p, this._buffer, v - 4), s(this._temp, this._state, this._buffer, 0, v), this._finished = !0;
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
      for (var p = u[0], v = u[1], E = u[2], S = u[3], D = u[4], F = u[5], _ = u[6], I = u[7], w = 0; w < 16; w++) {
        var b = f + w * 4;
        o[w] = e.readUint32BE(l, b);
      }
      for (var w = 16; w < 64; w++) {
        var g = o[w - 2], c = (g >>> 17 | g << 32 - 17) ^ (g >>> 19 | g << 32 - 19) ^ g >>> 10;
        g = o[w - 15];
        var y = (g >>> 7 | g << 32 - 7) ^ (g >>> 18 | g << 32 - 18) ^ g >>> 3;
        o[w] = (c + o[w - 7] | 0) + (y + o[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var c = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & F ^ ~D & _) | 0) + (I + (i[w] + o[w] | 0) | 0) | 0, y = ((p >>> 2 | p << 32 - 2) ^ (p >>> 13 | p << 32 - 13) ^ (p >>> 22 | p << 32 - 22)) + (p & v ^ p & E ^ v & E) | 0;
        I = _, _ = F, F = D, D = S + c | 0, S = E, E = v, v = p, p = c + y | 0;
      }
      u[0] += p, u[1] += v, u[2] += E, u[3] += S, u[4] += D, u[5] += F, u[6] += _, u[7] += I, f += 64, d -= 64;
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
})(Ko);
var qc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Ti, r = Rr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(w) {
    const b = new Float64Array(16);
    if (w)
      for (let g = 0; g < w.length; g++)
        b[g] = w[g];
    return b;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function a(w) {
    let b = 1;
    for (let g = 0; g < 16; g++) {
      let c = w[g] + b + 65535;
      b = Math.floor(c / 65536), w[g] = c - b * 65536;
    }
    w[0] += b - 1 + 37 * (b - 1);
  }
  function o(w, b, g) {
    const c = ~(g - 1);
    for (let y = 0; y < 16; y++) {
      const T = c & (w[y] ^ b[y]);
      w[y] ^= T, b[y] ^= T;
    }
  }
  function u(w, b) {
    const g = n(), c = n();
    for (let y = 0; y < 16; y++)
      c[y] = b[y];
    a(c), a(c), a(c);
    for (let y = 0; y < 2; y++) {
      g[0] = c[0] - 65517;
      for (let P = 1; P < 15; P++)
        g[P] = c[P] - 65535 - (g[P - 1] >> 16 & 1), g[P - 1] &= 65535;
      g[15] = c[15] - 32767 - (g[14] >> 16 & 1);
      const T = g[15] >> 16 & 1;
      g[14] &= 65535, o(c, g, 1 - T);
    }
    for (let y = 0; y < 16; y++)
      w[2 * y] = c[y] & 255, w[2 * y + 1] = c[y] >> 8;
  }
  function l(w, b) {
    for (let g = 0; g < 16; g++)
      w[g] = b[2 * g] + (b[2 * g + 1] << 8);
    w[15] &= 32767;
  }
  function f(w, b, g) {
    for (let c = 0; c < 16; c++)
      w[c] = b[c] + g[c];
  }
  function d(w, b, g) {
    for (let c = 0; c < 16; c++)
      w[c] = b[c] - g[c];
  }
  function p(w, b, g) {
    let c, y, T = 0, P = 0, B = 0, H = 0, ee = 0, N = 0, $ = 0, se = 0, Z = 0, G = 0, Y = 0, W = 0, J = 0, _e = 0, re = 0, be = 0, fe = 0, ve = 0, z = 0, q = 0, U = 0, h = 0, A = 0, oe = 0, le = 0, $e = 0, De = 0, Ae = 0, Ge = 0, ot = 0, it = 0, qe = g[0], Ue = g[1], Re = g[2], Ne = g[3], Te = g[4], Ie = g[5], Oe = g[6], we = g[7], Pe = g[8], Me = g[9], Se = g[10], ze = g[11], Qe = g[12], Ye = g[13], Ze = g[14], Je = g[15];
    c = b[0], T += c * qe, P += c * Ue, B += c * Re, H += c * Ne, ee += c * Te, N += c * Ie, $ += c * Oe, se += c * we, Z += c * Pe, G += c * Me, Y += c * Se, W += c * ze, J += c * Qe, _e += c * Ye, re += c * Ze, be += c * Je, c = b[1], P += c * qe, B += c * Ue, H += c * Re, ee += c * Ne, N += c * Te, $ += c * Ie, se += c * Oe, Z += c * we, G += c * Pe, Y += c * Me, W += c * Se, J += c * ze, _e += c * Qe, re += c * Ye, be += c * Ze, fe += c * Je, c = b[2], B += c * qe, H += c * Ue, ee += c * Re, N += c * Ne, $ += c * Te, se += c * Ie, Z += c * Oe, G += c * we, Y += c * Pe, W += c * Me, J += c * Se, _e += c * ze, re += c * Qe, be += c * Ye, fe += c * Ze, ve += c * Je, c = b[3], H += c * qe, ee += c * Ue, N += c * Re, $ += c * Ne, se += c * Te, Z += c * Ie, G += c * Oe, Y += c * we, W += c * Pe, J += c * Me, _e += c * Se, re += c * ze, be += c * Qe, fe += c * Ye, ve += c * Ze, z += c * Je, c = b[4], ee += c * qe, N += c * Ue, $ += c * Re, se += c * Ne, Z += c * Te, G += c * Ie, Y += c * Oe, W += c * we, J += c * Pe, _e += c * Me, re += c * Se, be += c * ze, fe += c * Qe, ve += c * Ye, z += c * Ze, q += c * Je, c = b[5], N += c * qe, $ += c * Ue, se += c * Re, Z += c * Ne, G += c * Te, Y += c * Ie, W += c * Oe, J += c * we, _e += c * Pe, re += c * Me, be += c * Se, fe += c * ze, ve += c * Qe, z += c * Ye, q += c * Ze, U += c * Je, c = b[6], $ += c * qe, se += c * Ue, Z += c * Re, G += c * Ne, Y += c * Te, W += c * Ie, J += c * Oe, _e += c * we, re += c * Pe, be += c * Me, fe += c * Se, ve += c * ze, z += c * Qe, q += c * Ye, U += c * Ze, h += c * Je, c = b[7], se += c * qe, Z += c * Ue, G += c * Re, Y += c * Ne, W += c * Te, J += c * Ie, _e += c * Oe, re += c * we, be += c * Pe, fe += c * Me, ve += c * Se, z += c * ze, q += c * Qe, U += c * Ye, h += c * Ze, A += c * Je, c = b[8], Z += c * qe, G += c * Ue, Y += c * Re, W += c * Ne, J += c * Te, _e += c * Ie, re += c * Oe, be += c * we, fe += c * Pe, ve += c * Me, z += c * Se, q += c * ze, U += c * Qe, h += c * Ye, A += c * Ze, oe += c * Je, c = b[9], G += c * qe, Y += c * Ue, W += c * Re, J += c * Ne, _e += c * Te, re += c * Ie, be += c * Oe, fe += c * we, ve += c * Pe, z += c * Me, q += c * Se, U += c * ze, h += c * Qe, A += c * Ye, oe += c * Ze, le += c * Je, c = b[10], Y += c * qe, W += c * Ue, J += c * Re, _e += c * Ne, re += c * Te, be += c * Ie, fe += c * Oe, ve += c * we, z += c * Pe, q += c * Me, U += c * Se, h += c * ze, A += c * Qe, oe += c * Ye, le += c * Ze, $e += c * Je, c = b[11], W += c * qe, J += c * Ue, _e += c * Re, re += c * Ne, be += c * Te, fe += c * Ie, ve += c * Oe, z += c * we, q += c * Pe, U += c * Me, h += c * Se, A += c * ze, oe += c * Qe, le += c * Ye, $e += c * Ze, De += c * Je, c = b[12], J += c * qe, _e += c * Ue, re += c * Re, be += c * Ne, fe += c * Te, ve += c * Ie, z += c * Oe, q += c * we, U += c * Pe, h += c * Me, A += c * Se, oe += c * ze, le += c * Qe, $e += c * Ye, De += c * Ze, Ae += c * Je, c = b[13], _e += c * qe, re += c * Ue, be += c * Re, fe += c * Ne, ve += c * Te, z += c * Ie, q += c * Oe, U += c * we, h += c * Pe, A += c * Me, oe += c * Se, le += c * ze, $e += c * Qe, De += c * Ye, Ae += c * Ze, Ge += c * Je, c = b[14], re += c * qe, be += c * Ue, fe += c * Re, ve += c * Ne, z += c * Te, q += c * Ie, U += c * Oe, h += c * we, A += c * Pe, oe += c * Me, le += c * Se, $e += c * ze, De += c * Qe, Ae += c * Ye, Ge += c * Ze, ot += c * Je, c = b[15], be += c * qe, fe += c * Ue, ve += c * Re, z += c * Ne, q += c * Te, U += c * Ie, h += c * Oe, A += c * we, oe += c * Pe, le += c * Me, $e += c * Se, De += c * ze, Ae += c * Qe, Ge += c * Ye, ot += c * Ze, it += c * Je, T += 38 * fe, P += 38 * ve, B += 38 * z, H += 38 * q, ee += 38 * U, N += 38 * h, $ += 38 * A, se += 38 * oe, Z += 38 * le, G += 38 * $e, Y += 38 * De, W += 38 * Ae, J += 38 * Ge, _e += 38 * ot, re += 38 * it, y = 1, c = T + y + 65535, y = Math.floor(c / 65536), T = c - y * 65536, c = P + y + 65535, y = Math.floor(c / 65536), P = c - y * 65536, c = B + y + 65535, y = Math.floor(c / 65536), B = c - y * 65536, c = H + y + 65535, y = Math.floor(c / 65536), H = c - y * 65536, c = ee + y + 65535, y = Math.floor(c / 65536), ee = c - y * 65536, c = N + y + 65535, y = Math.floor(c / 65536), N = c - y * 65536, c = $ + y + 65535, y = Math.floor(c / 65536), $ = c - y * 65536, c = se + y + 65535, y = Math.floor(c / 65536), se = c - y * 65536, c = Z + y + 65535, y = Math.floor(c / 65536), Z = c - y * 65536, c = G + y + 65535, y = Math.floor(c / 65536), G = c - y * 65536, c = Y + y + 65535, y = Math.floor(c / 65536), Y = c - y * 65536, c = W + y + 65535, y = Math.floor(c / 65536), W = c - y * 65536, c = J + y + 65535, y = Math.floor(c / 65536), J = c - y * 65536, c = _e + y + 65535, y = Math.floor(c / 65536), _e = c - y * 65536, c = re + y + 65535, y = Math.floor(c / 65536), re = c - y * 65536, c = be + y + 65535, y = Math.floor(c / 65536), be = c - y * 65536, T += y - 1 + 37 * (y - 1), y = 1, c = T + y + 65535, y = Math.floor(c / 65536), T = c - y * 65536, c = P + y + 65535, y = Math.floor(c / 65536), P = c - y * 65536, c = B + y + 65535, y = Math.floor(c / 65536), B = c - y * 65536, c = H + y + 65535, y = Math.floor(c / 65536), H = c - y * 65536, c = ee + y + 65535, y = Math.floor(c / 65536), ee = c - y * 65536, c = N + y + 65535, y = Math.floor(c / 65536), N = c - y * 65536, c = $ + y + 65535, y = Math.floor(c / 65536), $ = c - y * 65536, c = se + y + 65535, y = Math.floor(c / 65536), se = c - y * 65536, c = Z + y + 65535, y = Math.floor(c / 65536), Z = c - y * 65536, c = G + y + 65535, y = Math.floor(c / 65536), G = c - y * 65536, c = Y + y + 65535, y = Math.floor(c / 65536), Y = c - y * 65536, c = W + y + 65535, y = Math.floor(c / 65536), W = c - y * 65536, c = J + y + 65535, y = Math.floor(c / 65536), J = c - y * 65536, c = _e + y + 65535, y = Math.floor(c / 65536), _e = c - y * 65536, c = re + y + 65535, y = Math.floor(c / 65536), re = c - y * 65536, c = be + y + 65535, y = Math.floor(c / 65536), be = c - y * 65536, T += y - 1 + 37 * (y - 1), w[0] = T, w[1] = P, w[2] = B, w[3] = H, w[4] = ee, w[5] = N, w[6] = $, w[7] = se, w[8] = Z, w[9] = G, w[10] = Y, w[11] = W, w[12] = J, w[13] = _e, w[14] = re, w[15] = be;
  }
  function v(w, b) {
    p(w, b, b);
  }
  function E(w, b) {
    const g = n();
    for (let c = 0; c < 16; c++)
      g[c] = b[c];
    for (let c = 253; c >= 0; c--)
      v(g, g), c !== 2 && c !== 4 && p(g, g, b);
    for (let c = 0; c < 16; c++)
      w[c] = g[c];
  }
  function S(w, b) {
    const g = new Uint8Array(32), c = new Float64Array(80), y = n(), T = n(), P = n(), B = n(), H = n(), ee = n();
    for (let Z = 0; Z < 31; Z++)
      g[Z] = w[Z];
    g[31] = w[31] & 127 | 64, g[0] &= 248, l(c, b);
    for (let Z = 0; Z < 16; Z++)
      T[Z] = c[Z];
    y[0] = B[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const G = g[Z >>> 3] >>> (Z & 7) & 1;
      o(y, T, G), o(P, B, G), f(H, y, P), d(y, y, P), f(P, T, B), d(T, T, B), v(B, H), v(ee, y), p(y, P, y), p(P, T, H), f(H, y, P), d(y, y, P), v(T, y), d(P, B, ee), p(y, P, s), f(y, y, B), p(P, P, y), p(y, B, ee), p(B, T, c), v(T, H), o(y, T, G), o(P, B, G);
    }
    for (let Z = 0; Z < 16; Z++)
      c[Z + 16] = y[Z], c[Z + 32] = P[Z], c[Z + 48] = T[Z], c[Z + 64] = B[Z];
    const N = c.subarray(32), $ = c.subarray(16);
    E(N, N), p($, $, N);
    const se = new Uint8Array(32);
    return u(se, $), se;
  }
  t.scalarMult = S;
  function D(w) {
    return S(w, i);
  }
  t.scalarMultBase = D;
  function F(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const b = new Uint8Array(w);
    return {
      publicKey: D(b),
      secretKey: b
    };
  }
  t.generateKeyPairFromSeed = F;
  function _(w) {
    const b = (0, e.randomBytes)(32, w), g = F(b);
    return (0, r.wipe)(b), g;
  }
  t.generateKeyPair = _;
  function I(w, b, g = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = S(w, b);
    if (g) {
      let y = 0;
      for (let T = 0; T < c.length; T++)
        y |= c[T];
      if (y === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = I;
})(qc);
var nl = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, sm = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), om = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), am = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), cm = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), um = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), lm = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, fm = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, il = 3, hm = [
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
  ["searchbot", lm]
], sl = [
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
function dm(t) {
  return t ? ol(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new um() : typeof navigator < "u" ? ol(navigator.userAgent) : ym();
}
function pm(t) {
  return t !== "" && hm.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function ol(t) {
  var e = pm(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new cm();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < il && (i = nl(nl([], i, !0), vm(il - i.length), !0)) : i = [];
  var s = i.join("."), a = gm(t), o = fm.exec(t);
  return o && o[1] ? new am(r, s, a, o[1]) : new sm(r, s, a);
}
function gm(t) {
  for (var e = 0, r = sl.length; e < r; e++) {
    var n = sl[e], i = n[0], s = n[1], a = s.exec(t);
    if (a)
      return i;
  }
  return null;
}
function ym() {
  var t = typeof process < "u" && process.version;
  return t ? new om(process.version.slice(1)) : null;
}
function vm(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.getLocalStorage = pt.getLocalStorageOrThrow = pt.getCrypto = pt.getCryptoOrThrow = Eh = pt.getLocation = pt.getLocationOrThrow = zc = pt.getNavigator = pt.getNavigatorOrThrow = _h = pt.getDocument = pt.getDocumentOrThrow = pt.getFromWindowOrThrow = pt.getFromWindow = void 0;
function ri(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
pt.getFromWindow = ri;
function Ai(t) {
  const e = ri(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
pt.getFromWindowOrThrow = Ai;
function mm() {
  return Ai("document");
}
pt.getDocumentOrThrow = mm;
function bm() {
  return ri("document");
}
var _h = pt.getDocument = bm;
function wm() {
  return Ai("navigator");
}
pt.getNavigatorOrThrow = wm;
function _m() {
  return ri("navigator");
}
var zc = pt.getNavigator = _m;
function Em() {
  return Ai("location");
}
pt.getLocationOrThrow = Em;
function Sm() {
  return ri("location");
}
var Eh = pt.getLocation = Sm;
function xm() {
  return Ai("crypto");
}
pt.getCryptoOrThrow = xm;
function Dm() {
  return ri("crypto");
}
pt.getCrypto = Dm;
function Om() {
  return Ai("localStorage");
}
pt.getLocalStorageOrThrow = Om;
function Im() {
  return ri("localStorage");
}
pt.getLocalStorage = Im;
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
var Sh = Bc.getWindowMetadata = void 0;
const al = pt;
function Cm() {
  let t, e;
  try {
    t = al.getDocumentOrThrow(), e = al.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), p = [];
    for (let v = 0; v < d.length; v++) {
      const E = d[v], S = E.getAttribute("rel");
      if (S && S.toLowerCase().indexOf("icon") > -1) {
        const D = E.getAttribute("href");
        if (D)
          if (D.toLowerCase().indexOf("https:") === -1 && D.toLowerCase().indexOf("http:") === -1 && D.indexOf("//") !== 0) {
            let F = e.protocol + "//" + e.host;
            if (D.indexOf("/") === 0)
              F += D;
            else {
              const _ = e.pathname.split("/");
              _.pop();
              const I = _.join("/");
              F += I + "/" + D;
            }
            p.push(F);
          } else if (D.indexOf("//") === 0) {
            const F = e.protocol + D;
            p.push(F);
          } else
            p.push(D);
      }
    }
    return p;
  }
  function n(...d) {
    const p = t.getElementsByTagName("meta");
    for (let v = 0; v < p.length; v++) {
      const E = p[v], S = ["itemprop", "property", "name"].map((D) => E.getAttribute(D)).filter((D) => D ? d.includes(D) : !1);
      if (S.length && S) {
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
  const a = i(), o = s(), u = e.origin, l = r();
  return {
    description: o,
    url: u,
    icons: l,
    name: a
  };
}
Sh = Bc.getWindowMetadata = Cm;
var os = {}, Rm = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), xh = "%[a-f0-9]{2}", cl = new RegExp("(" + xh + ")|([^%]+?)", "gi"), ul = new RegExp("(" + xh + ")+", "gi");
function Za(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], Za(r), Za(n));
}
function Tm(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(cl) || [], r = 1; r < e.length; r++)
      t = Za(e, r).join(""), e = t.match(cl) || [];
    return t;
  }
}
function Am(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ul.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Tm(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = ul.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var a = i[s];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var Nm = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Am(t);
  }
}, Pm = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, Lm = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var a = n[s], o = t[a];
    (i ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = Rm, r = Nm, n = Pm, i = Lm, s = (_) => _ == null, a = Symbol("encodeFragmentIdentifier");
  function o(_) {
    switch (_.arrayFormat) {
      case "index":
        return (I) => (w, b) => {
          const g = w.length;
          return b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(I, _), "[", g, "]"].join("")] : [
            ...w,
            [f(I, _), "[", f(g, _), "]=", f(b, _)].join("")
          ];
        };
      case "bracket":
        return (I) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(I, _), "[]"].join("")] : [...w, [f(I, _), "[]=", f(b, _)].join("")];
      case "colon-list-separator":
        return (I) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, [f(I, _), ":list="].join("")] : [...w, [f(I, _), ":list=", f(b, _)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const I = _.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (w) => (b, g) => g === void 0 || _.skipNull && g === null || _.skipEmptyString && g === "" ? b : (g = g === null ? "" : g, b.length === 0 ? [[f(w, _), I, f(g, _)].join("")] : [[b, f(g, _)].join(_.arrayFormatSeparator)]);
      }
      default:
        return (I) => (w, b) => b === void 0 || _.skipNull && b === null || _.skipEmptyString && b === "" ? w : b === null ? [...w, f(I, _)] : [...w, [f(I, _), "=", f(b, _)].join("")];
    }
  }
  function u(_) {
    let I;
    switch (_.arrayFormat) {
      case "index":
        return (w, b, g) => {
          if (I = /\[(\d*)\]$/.exec(w), w = w.replace(/\[\d*\]$/, ""), !I) {
            g[w] = b;
            return;
          }
          g[w] === void 0 && (g[w] = {}), g[w][I[1]] = b;
        };
      case "bracket":
        return (w, b, g) => {
          if (I = /(\[\])$/.exec(w), w = w.replace(/\[\]$/, ""), !I) {
            g[w] = b;
            return;
          }
          if (g[w] === void 0) {
            g[w] = [b];
            return;
          }
          g[w] = [].concat(g[w], b);
        };
      case "colon-list-separator":
        return (w, b, g) => {
          if (I = /(:list)$/.exec(w), w = w.replace(/:list$/, ""), !I) {
            g[w] = b;
            return;
          }
          if (g[w] === void 0) {
            g[w] = [b];
            return;
          }
          g[w] = [].concat(g[w], b);
        };
      case "comma":
      case "separator":
        return (w, b, g) => {
          const c = typeof b == "string" && b.includes(_.arrayFormatSeparator), y = typeof b == "string" && !c && d(b, _).includes(_.arrayFormatSeparator);
          b = y ? d(b, _) : b;
          const T = c || y ? b.split(_.arrayFormatSeparator).map((P) => d(P, _)) : b === null ? b : d(b, _);
          g[w] = T;
        };
      case "bracket-separator":
        return (w, b, g) => {
          const c = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !c) {
            g[w] = b && d(b, _);
            return;
          }
          const y = b === null ? [] : b.split(_.arrayFormatSeparator).map((T) => d(T, _));
          if (g[w] === void 0) {
            g[w] = y;
            return;
          }
          g[w] = [].concat(g[w], y);
        };
      default:
        return (w, b, g) => {
          if (g[w] === void 0) {
            g[w] = b;
            return;
          }
          g[w] = [].concat(g[w], b);
        };
    }
  }
  function l(_) {
    if (typeof _ != "string" || _.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(_, I) {
    return I.encode ? I.strict ? e(_) : encodeURIComponent(_) : _;
  }
  function d(_, I) {
    return I.decode ? r(_) : _;
  }
  function p(_) {
    return Array.isArray(_) ? _.sort() : typeof _ == "object" ? p(Object.keys(_)).sort((I, w) => Number(I) - Number(w)).map((I) => _[I]) : _;
  }
  function v(_) {
    const I = _.indexOf("#");
    return I !== -1 && (_ = _.slice(0, I)), _;
  }
  function E(_) {
    let I = "";
    const w = _.indexOf("#");
    return w !== -1 && (I = _.slice(w)), I;
  }
  function S(_) {
    _ = v(_);
    const I = _.indexOf("?");
    return I === -1 ? "" : _.slice(I + 1);
  }
  function D(_, I) {
    return I.parseNumbers && !Number.isNaN(Number(_)) && typeof _ == "string" && _.trim() !== "" ? _ = Number(_) : I.parseBooleans && _ !== null && (_.toLowerCase() === "true" || _.toLowerCase() === "false") && (_ = _.toLowerCase() === "true"), _;
  }
  function F(_, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), l(I.arrayFormatSeparator);
    const w = u(I), b = /* @__PURE__ */ Object.create(null);
    if (typeof _ != "string" || (_ = _.trim().replace(/^[?#&]/, ""), !_))
      return b;
    for (const g of _.split("&")) {
      if (g === "")
        continue;
      let [c, y] = n(I.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(I.arrayFormat) ? y : d(y, I), w(d(c, I), y, b);
    }
    for (const g of Object.keys(b)) {
      const c = b[g];
      if (typeof c == "object" && c !== null)
        for (const y of Object.keys(c))
          c[y] = D(c[y], I);
      else
        b[g] = D(c, I);
    }
    return I.sort === !1 ? b : (I.sort === !0 ? Object.keys(b).sort() : Object.keys(b).sort(I.sort)).reduce((g, c) => {
      const y = b[c];
      return y && typeof y == "object" && !Array.isArray(y) ? g[c] = p(y) : g[c] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = S, t.parse = F, t.stringify = (_, I) => {
    if (!_)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), l(I.arrayFormatSeparator);
    const w = (y) => I.skipNull && s(_[y]) || I.skipEmptyString && _[y] === "", b = o(I), g = {};
    for (const y of Object.keys(_))
      w(y) || (g[y] = _[y]);
    const c = Object.keys(g);
    return I.sort !== !1 && c.sort(I.sort), c.map((y) => {
      const T = _[y];
      return T === void 0 ? "" : T === null ? f(y, I) : Array.isArray(T) ? T.length === 0 && I.arrayFormat === "bracket-separator" ? f(y, I) + "[]" : T.reduce(b(y), []).join("&") : f(y, I) + "=" + f(T, I);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (_, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [w, b] = n(_, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: F(S(_), I)
      },
      I && I.parseFragmentIdentifier && b ? { fragmentIdentifier: d(b, I) } : {}
    );
  }, t.stringifyUrl = (_, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, I);
    const w = v(_.url).split("?")[0] || "", b = t.extract(_.url), g = t.parse(b, { sort: !1 }), c = Object.assign(g, _.query);
    let y = t.stringify(c, I);
    y && (y = `?${y}`);
    let T = E(_.url);
    return _.fragmentIdentifier && (T = `#${I[a] ? f(_.fragmentIdentifier, I) : _.fragmentIdentifier}`), `${w}${y}${T}`;
  }, t.pick = (_, I, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, w);
    const { url: b, query: g, fragmentIdentifier: c } = t.parseUrl(_, w);
    return t.stringifyUrl({
      url: b,
      query: i(g, I),
      fragmentIdentifier: c
    }, w);
  }, t.exclude = (_, I, w) => {
    const b = Array.isArray(I) ? (g) => !I.includes(g) : (g, c) => !I(g, c);
    return t.pick(_, b, w);
  };
})(os);
const Fm = {
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
function Dh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Oh = "base10", pr = "base16", Ya = "base64pad", Vc = "utf8", Ih = 0, ni = 1, Um = 0, ll = 1, Ja = 12, Kc = 32;
function Mm() {
  const t = qc.generateKeyPair();
  return { privateKey: gr(t.secretKey, pr), publicKey: gr(t.publicKey, pr) };
}
function Xa() {
  const t = Ti.randomBytes(Kc);
  return gr(t, pr);
}
function jm(t, e) {
  const r = qc.sharedKey(Er(t, pr), Er(e, pr)), n = new im(Ko.SHA256, r).expand(Kc);
  return gr(n, pr);
}
function km(t) {
  const e = Ko.hash(Er(t, pr));
  return gr(e, pr);
}
function gi(t) {
  const e = Ko.hash(Er(t, Vc));
  return gr(e, pr);
}
function $m(t) {
  return Er(`${t}`, Oh);
}
function Fs(t) {
  return Number(gr(t, Oh));
}
function qm(t) {
  const e = $m(typeof t.type < "u" ? t.type : Ih);
  if (Fs(e) === ni && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Er(t.senderPublicKey, pr) : void 0, n = typeof t.iv < "u" ? Er(t.iv, pr) : Ti.randomBytes(Ja), i = new kc.ChaCha20Poly1305(Er(t.symKey, pr)).seal(n, Er(t.message, Vc));
  return Bm({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function zm(t) {
  const e = new kc.ChaCha20Poly1305(Er(t.symKey, pr)), { sealed: r, iv: n } = mo(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return gr(i, Vc);
}
function Bm(t) {
  if (Fs(t.type) === ni) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return gr(Ga([t.type, t.senderPublicKey, t.iv, t.sealed]), Ya);
  }
  return gr(Ga([t.type, t.iv, t.sealed]), Ya);
}
function mo(t) {
  const e = Er(t, Ya), r = e.slice(Um, ll), n = ll;
  if (Fs(r) === ni) {
    const o = n + Kc, u = o + Ja, l = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: l };
  }
  const i = n + Ja, s = e.slice(n, i), a = e.slice(i);
  return { type: r, sealed: a, iv: s };
}
function Vm(t, e) {
  const r = mo(t);
  return Ch({ type: Fs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? gr(r.senderPublicKey, pr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Ch(t) {
  const e = (t == null ? void 0 : t.type) || Ih;
  if (e === ni) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function fl(t) {
  return t.type === ni && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Km = Object.defineProperty, hl = Object.getOwnPropertySymbols, Hm = Object.prototype.hasOwnProperty, Wm = Object.prototype.propertyIsEnumerable, dl = (t, e, r) => e in t ? Km(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pl = (t, e) => {
  for (var r in e || (e = {}))
    Hm.call(e, r) && dl(t, r, e[r]);
  if (hl)
    for (var r of hl(e))
      Wm.call(e, r) && dl(t, r, e[r]);
  return t;
};
const Gm = "ReactNative", Ir = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Qm = "js";
function Hc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ho() {
  return !_h() && !!zc() && navigator.product === Gm;
}
function Us() {
  return !Hc() && !!zc();
}
function Ms() {
  return Ho() ? Ir.reactNative : Hc() ? Ir.node : Us() ? Ir.browser : Ir.unknown;
}
function Zm(t, e) {
  let r = os.parse(t);
  return r = pl(pl({}, r), e), t = os.stringify(r), t;
}
function Ym() {
  return Sh() || { name: "", description: "", url: "", icons: [""] };
}
function Jm() {
  if (Ms() === Ir.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = dm();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Xm() {
  var t;
  const e = Ms();
  return e === Ir.browser ? [e, ((t = Eh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function e0(t, e, r) {
  const n = Jm(), i = Xm();
  return [[t, e].join("-"), [Qm, r].join("-"), n, i].join("/");
}
function t0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: a }) {
  const o = r.split("?"), u = e0(t, e, n), l = { auth: i, ua: u, projectId: s, useOnCloseEvent: a || void 0 }, f = Zm(o[1] || "", l);
  return o[0] + "?" + f;
}
function Hn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Rh(t) {
  return Object.fromEntries(t.entries());
}
function Th(t) {
  return new Map(Object.entries(t));
}
function ui(t = ge.FIVE_MINUTES, e) {
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
function as(t, e, r) {
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
function Ah(t, e) {
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
function r0(t) {
  return Ah("topic", t);
}
function n0(t) {
  return Ah("id", t);
}
function Nh(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function Mr(t, e) {
  return ge.fromMiliseconds((e || Date.now()) + ge.toMiliseconds(t));
}
function _n(t) {
  return Date.now() >= ge.toMiliseconds(t);
}
function Ut(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function i0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, a = Ms();
    a === Ir.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : a === Ir.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const s0 = "irn";
function ec(t) {
  return (t == null ? void 0 : t.relay) || { protocol: s0 };
}
function co(t) {
  const e = Fm[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var o0 = Object.defineProperty, gl = Object.getOwnPropertySymbols, a0 = Object.prototype.hasOwnProperty, c0 = Object.prototype.propertyIsEnumerable, yl = (t, e, r) => e in t ? o0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, u0 = (t, e) => {
  for (var r in e || (e = {}))
    a0.call(e, r) && yl(t, r, e[r]);
  if (gl)
    for (var r of gl(e))
      c0.call(e, r) && yl(t, r, e[r]);
  return t;
};
function l0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), a = t[i];
      r[s] = a;
    }
  }), r;
}
function f0(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", a = os.parse(s);
  return { protocol: n, topic: h0(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: l0(a) };
}
function h0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function d0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function p0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + os.stringify(u0({ symKey: t.symKey }, d0(t.relay)));
}
function Ni(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function g0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Ni(r.accounts));
  }), e;
}
function y0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Ni(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function v0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Ni(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function m0(t, e) {
  const r = uo(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const b0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, w0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ue(t, e) {
  const { message: r, code: n } = w0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Vt(t, e) {
  const { message: r, code: n } = b0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function js(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function rs(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function fr(t) {
  return typeof t > "u";
}
function Kt(t, e) {
  return e && fr(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Wc(t, e) {
  return e && fr(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function _0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return Hn(i, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: l } = t.namespaces[a], f = Ni(o), d = r[a];
    (!Hn(Dh(a, d), f) || !Hn(d.methods, u) || !Hn(d.events, l)) && (s = !1);
  }), s) : !1;
}
function bo(t) {
  return Kt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function E0(t) {
  if (Kt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && bo(r);
    }
  }
  return !1;
}
function S0(t) {
  if (Kt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function x0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function D0(t) {
  return t == null ? void 0 : t.topic;
}
function O0(t, e) {
  let r = null;
  return Kt(t == null ? void 0 : t.publicKey, !1) || (r = ue("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function vl(t) {
  let e = !0;
  return js(t) ? t.length && (e = t.every((r) => Kt(r, !1))) : e = !1, e;
}
function I0(t, e, r) {
  let n = null;
  return js(e) && e.length ? e.forEach((i) => {
    n || bo(i) || (n = Vt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : bo(t) || (n = Vt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function C0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const a = I0(i, Dh(i, s), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function R0(t, e) {
  let r = null;
  return js(t) ? t.forEach((n) => {
    r || E0(n) || (r = Vt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Vt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function T0(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = R0(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function A0(t, e) {
  let r = null;
  return vl(t == null ? void 0 : t.methods) ? vl(t == null ? void 0 : t.events) || (r = Vt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Vt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Ph(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = A0(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function N0(t, e, r) {
  let n = null;
  if (t && rs(t)) {
    const i = Ph(t, e);
    i && (n = i);
    const s = C0(t, e, r);
    s && (n = s);
  } else
    n = ue("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function uo(t, e) {
  let r = null;
  if (t && rs(t)) {
    const n = Ph(t, e);
    n && (r = n);
    const i = T0(t, e);
    i && (r = i);
  } else
    r = ue("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Lh(t) {
  return Kt(t.protocol, !0);
}
function P0(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && js(t) && t.length && t.forEach((n) => {
    r = Lh(n);
  }), r;
}
function L0(t) {
  return typeof t == "number";
}
function _r(t) {
  return typeof t < "u" && typeof t !== null;
}
function F0(t) {
  return !(!t || typeof t != "object" || !t.code || !Wc(t.code, !1) || !t.message || !Kt(t.message, !1));
}
function U0(t) {
  return !(fr(t) || !Kt(t.method, !1));
}
function M0(t) {
  return !(fr(t) || fr(t.result) && fr(t.error) || !Wc(t.id, !1) || !Kt(t.jsonrpc, !1));
}
function j0(t) {
  return !(fr(t) || !Kt(t.name, !1));
}
function ml(t, e) {
  return !(!bo(e) || !g0(t).includes(e));
}
function k0(t, e, r) {
  return Kt(r, !1) ? y0(t, e).includes(r) : !1;
}
function $0(t, e, r) {
  return Kt(r, !1) ? v0(t, e).includes(r) : !1;
}
function bl(t, e, r) {
  let n = null;
  const i = q0(t), s = z0(e), a = Object.keys(i), o = Object.keys(s), u = wl(Object.keys(t)), l = wl(Object.keys(e)), f = u.filter((d) => !l.includes(d));
  return f.length && (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), Hn(a, o) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const p = Ni(e[d].accounts);
    p.includes(d) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`));
  }), a.forEach((d) => {
    n || (Hn(i[d].methods, s[d].methods) ? Hn(i[d].events, s[d].events) || (n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function q0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function wl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function z0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Ni(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function B0(t, e) {
  return Wc(t, !1) && t <= e.max && t >= e.min;
}
function _l() {
  const t = Ms();
  return new Promise((e) => {
    switch (t) {
      case Ir.browser:
        e(V0());
        break;
      case Ir.reactNative:
        e(K0());
        break;
      case Ir.node:
        e(H0());
        break;
      default:
        e(!0);
    }
  });
}
function V0() {
  return Us() && (navigator == null ? void 0 : navigator.onLine);
}
async function K0() {
  if (Ho() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function H0() {
  return !0;
}
function W0(t) {
  switch (Ms()) {
    case Ir.browser:
      G0(t);
      break;
    case Ir.reactNative:
      Q0(t);
      break;
  }
}
function G0(t) {
  Us() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Q0(t) {
  Ho() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Ea = {};
let Xs = class {
  static get(e) {
    return Ea[e];
  }
  static set(e, r) {
    Ea[e] = r;
  }
  static delete(e) {
    delete Ea[e];
  }
};
const Z0 = "PARSE_ERROR", Y0 = "INVALID_REQUEST", J0 = "METHOD_NOT_FOUND", X0 = "INVALID_PARAMS", Fh = "INTERNAL_ERROR", Gc = "SERVER_ERROR", eb = [-32700, -32600, -32601, -32602, -32603], ns = {
  [Z0]: { code: -32700, message: "Parse error" },
  [Y0]: { code: -32600, message: "Invalid Request" },
  [J0]: { code: -32601, message: "Method not found" },
  [X0]: { code: -32602, message: "Invalid params" },
  [Fh]: { code: -32603, message: "Internal error" },
  [Gc]: { code: -32e3, message: "Server error" }
}, Uh = Gc;
function tb(t) {
  return eb.includes(t);
}
function El(t) {
  return Object.keys(ns).includes(t) ? ns[t] : ns[Uh];
}
function rb(t) {
  const e = Object.values(ns).find((r) => r.code === t);
  return e || ns[Uh];
}
function nb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Mh = {}, cn = {}, Sl;
function ib() {
  if (Sl)
    return cn;
  Sl = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.isBrowserCryptoAvailable = cn.getSubtleCrypto = cn.getBrowerCrypto = void 0;
  function t() {
    return (tn == null ? void 0 : tn.crypto) || (tn == null ? void 0 : tn.msCrypto) || {};
  }
  cn.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  cn.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return cn.isBrowserCryptoAvailable = r, cn;
}
var un = {}, xl;
function sb() {
  if (xl)
    return un;
  xl = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.isBrowser = un.isNode = un.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  un.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  un.isNode = e;
  function r() {
    return !t() && !e();
  }
  return un.isBrowser = r, un;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = on;
  e.__exportStar(ib(), t), e.__exportStar(sb(), t);
})(Mh);
function Qc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function jh(t = 6) {
  return BigInt(Qc(t));
}
function cs(t, e, r) {
  return {
    id: r || Qc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Zc(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Yc(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: ob(e, r)
  };
}
function ob(t, e) {
  return typeof t > "u" ? El(Fh) : (typeof t == "string" && (t = Object.assign(Object.assign({}, El(Gc)), { message: t })), typeof e < "u" && (t.data = e), tb(t.code) && (t = rb(t.code)), t);
}
class ab {
}
class cb extends ab {
  constructor() {
    super();
  }
}
class ub extends cb {
  constructor(e) {
    super();
  }
}
const lb = "^wss?:";
function fb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function hb(t, e) {
  const r = fb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Dl(t) {
  return hb(t, lb);
}
function db(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function kh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Jc(t) {
  return kh(t) && "method" in t;
}
function Wo(t) {
  return kh(t) && (hn(t) || jr(t));
}
function hn(t) {
  return "result" in t;
}
function jr(t) {
  return "error" in t;
}
class pb extends ub {
  constructor(e) {
    super(e), this.events = new Fr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(cs(e.method, e.params || [], e.id || jh().toString()), r);
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
        jr(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", e), Wo(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const gb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), yb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ol = (t) => t.split("?")[0], Il = 10, vb = gb();
class mb {
  constructor(e) {
    if (this.url = e, this.events = new Fr.EventEmitter(), this.registering = !1, !Dl(e))
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
      this.socket.send(Uc(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!Dl(e))
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
      const i = Mh.isReactNative() ? void 0 : { rejectUnauthorized: !db(e) }, s = new vb(e, [], i);
      yb() ? s.onerror = (a) => {
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
    const r = typeof e.data == "string" ? eh(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Yc(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return nb(e, Ol(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Il && this.events.setMaxListeners(Il);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Ol(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var wo = { exports: {} };
wo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", l = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", p = "[object Error]", v = "[object Function]", E = "[object GeneratorFunction]", S = "[object Map]", D = "[object Number]", F = "[object Null]", _ = "[object Object]", I = "[object Promise]", w = "[object Proxy]", b = "[object RegExp]", g = "[object Set]", c = "[object String]", y = "[object Symbol]", T = "[object Undefined]", P = "[object WeakMap]", B = "[object ArrayBuffer]", H = "[object DataView]", ee = "[object Float32Array]", N = "[object Float64Array]", $ = "[object Int8Array]", se = "[object Int16Array]", Z = "[object Int32Array]", G = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", W = "[object Uint16Array]", J = "[object Uint32Array]", _e = /[\\^$.*+?()[\]{}|]/g, re = /^\[object .+?Constructor\]$/, be = /^(?:0|[1-9]\d*)$/, fe = {};
  fe[ee] = fe[N] = fe[$] = fe[se] = fe[Z] = fe[G] = fe[Y] = fe[W] = fe[J] = !0, fe[o] = fe[u] = fe[B] = fe[f] = fe[H] = fe[d] = fe[p] = fe[v] = fe[S] = fe[D] = fe[_] = fe[b] = fe[g] = fe[c] = fe[P] = !1;
  var ve = typeof tn == "object" && tn && tn.Object === Object && tn, z = typeof self == "object" && self && self.Object === Object && self, q = ve || z || Function("return this")(), U = e && !e.nodeType && e, h = U && !0 && t && !t.nodeType && t, A = h && h.exports === U, oe = A && ve.process, le = function() {
    try {
      return oe && oe.binding && oe.binding("util");
    } catch {
    }
  }(), $e = le && le.isTypedArray;
  function De(x, M) {
    for (var Q = -1, pe = x == null ? 0 : x.length, mt = 0, je = []; ++Q < pe; ) {
      var Lt = x[Q];
      M(Lt, Q, x) && (je[mt++] = Lt);
    }
    return je;
  }
  function Ae(x, M) {
    for (var Q = -1, pe = M.length, mt = x.length; ++Q < pe; )
      x[mt + Q] = M[Q];
    return x;
  }
  function Ge(x, M) {
    for (var Q = -1, pe = x == null ? 0 : x.length; ++Q < pe; )
      if (M(x[Q], Q, x))
        return !0;
    return !1;
  }
  function ot(x, M) {
    for (var Q = -1, pe = Array(x); ++Q < x; )
      pe[Q] = M(Q);
    return pe;
  }
  function it(x) {
    return function(M) {
      return x(M);
    };
  }
  function qe(x, M) {
    return x.has(M);
  }
  function Ue(x, M) {
    return x == null ? void 0 : x[M];
  }
  function Re(x) {
    var M = -1, Q = Array(x.size);
    return x.forEach(function(pe, mt) {
      Q[++M] = [mt, pe];
    }), Q;
  }
  function Ne(x, M) {
    return function(Q) {
      return x(M(Q));
    };
  }
  function Te(x) {
    var M = -1, Q = Array(x.size);
    return x.forEach(function(pe) {
      Q[++M] = pe;
    }), Q;
  }
  var Ie = Array.prototype, Oe = Function.prototype, we = Object.prototype, Pe = q["__core-js_shared__"], Me = Oe.toString, Se = we.hasOwnProperty, ze = function() {
    var x = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return x ? "Symbol(src)_1." + x : "";
  }(), Qe = we.toString, Ye = RegExp(
    "^" + Me.call(Se).replace(_e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ze = A ? q.Buffer : void 0, Je = q.Symbol, cr = q.Uint8Array, Jt = we.propertyIsEnumerable, xr = Ie.splice, jt = Je ? Je.toStringTag : void 0, kt = Object.getOwnPropertySymbols, vr = Ze ? Ze.isBuffer : void 0, Hr = Ne(Object.keys, Object), ft = st(q, "DataView"), ht = st(q, "Map"), bt = st(q, "Promise"), gt = st(q, "Set"), wt = st(q, "WeakMap"), dt = st(Object, "create"), Ot = Fn(ft), Tt = Fn(ht), At = Fn(bt), It = Fn(gt), Nt = Fn(wt), _t = Je ? Je.prototype : void 0, Et = _t ? _t.valueOf : void 0;
  function ut(x) {
    var M = -1, Q = x == null ? 0 : x.length;
    for (this.clear(); ++M < Q; ) {
      var pe = x[M];
      this.set(pe[0], pe[1]);
    }
  }
  function R() {
    this.__data__ = dt ? dt(null) : {}, this.size = 0;
  }
  function K(x) {
    var M = this.has(x) && delete this.__data__[x];
    return this.size -= M ? 1 : 0, M;
  }
  function ce(x) {
    var M = this.__data__;
    if (dt) {
      var Q = M[x];
      return Q === n ? void 0 : Q;
    }
    return Se.call(M, x) ? M[x] : void 0;
  }
  function Ee(x) {
    var M = this.__data__;
    return dt ? M[x] !== void 0 : Se.call(M, x);
  }
  function Xe(x, M) {
    var Q = this.__data__;
    return this.size += this.has(x) ? 0 : 1, Q[x] = dt && M === void 0 ? n : M, this;
  }
  ut.prototype.clear = R, ut.prototype.delete = K, ut.prototype.get = ce, ut.prototype.has = Ee, ut.prototype.set = Xe;
  function Ve(x) {
    var M = -1, Q = x == null ? 0 : x.length;
    for (this.clear(); ++M < Q; ) {
      var pe = x[M];
      this.set(pe[0], pe[1]);
    }
  }
  function We() {
    this.__data__ = [], this.size = 0;
  }
  function Be(x) {
    var M = this.__data__, Q = O(M, x);
    if (Q < 0)
      return !1;
    var pe = M.length - 1;
    return Q == pe ? M.pop() : xr.call(M, Q, 1), --this.size, !0;
  }
  function $t(x) {
    var M = this.__data__, Q = O(M, x);
    return Q < 0 ? void 0 : M[Q][1];
  }
  function yt(x) {
    return O(this.__data__, x) > -1;
  }
  function St(x, M) {
    var Q = this.__data__, pe = O(Q, x);
    return pe < 0 ? (++this.size, Q.push([x, M])) : Q[pe][1] = M, this;
  }
  Ve.prototype.clear = We, Ve.prototype.delete = Be, Ve.prototype.get = $t, Ve.prototype.has = yt, Ve.prototype.set = St;
  function Pt(x) {
    var M = -1, Q = x == null ? 0 : x.length;
    for (this.clear(); ++M < Q; ) {
      var pe = x[M];
      this.set(pe[0], pe[1]);
    }
  }
  function Wr() {
    this.size = 0, this.__data__ = {
      hash: new ut(),
      map: new (ht || Ve)(),
      string: new ut()
    };
  }
  function Ln(x) {
    var M = vt(this, x).delete(x);
    return this.size -= M ? 1 : 0, M;
  }
  function Wt(x) {
    return vt(this, x).get(x);
  }
  function Bs(x) {
    return vt(this, x).has(x);
  }
  function mn(x, M) {
    var Q = vt(this, x), pe = Q.size;
    return Q.set(x, M), this.size += Q.size == pe ? 0 : 1, this;
  }
  Pt.prototype.clear = Wr, Pt.prototype.delete = Ln, Pt.prototype.get = Wt, Pt.prototype.has = Bs, Pt.prototype.set = mn;
  function ii(x) {
    var M = -1, Q = x == null ? 0 : x.length;
    for (this.__data__ = new Pt(); ++M < Q; )
      this.add(x[M]);
  }
  function si(x) {
    return this.__data__.set(x, n), this;
  }
  function Fi(x) {
    return this.__data__.has(x);
  }
  ii.prototype.add = ii.prototype.push = si, ii.prototype.has = Fi;
  function Gr(x) {
    var M = this.__data__ = new Ve(x);
    this.size = M.size;
  }
  function sa() {
    this.__data__ = new Ve(), this.size = 0;
  }
  function Ui(x) {
    var M = this.__data__, Q = M.delete(x);
    return this.size = M.size, Q;
  }
  function oa(x) {
    return this.__data__.get(x);
  }
  function aa(x) {
    return this.__data__.has(x);
  }
  function m(x, M) {
    var Q = this.__data__;
    if (Q instanceof Ve) {
      var pe = Q.__data__;
      if (!ht || pe.length < r - 1)
        return pe.push([x, M]), this.size = ++Q.size, this;
      Q = this.__data__ = new Pt(pe);
    }
    return Q.set(x, M), this.size = Q.size, this;
  }
  Gr.prototype.clear = sa, Gr.prototype.delete = Ui, Gr.prototype.get = oa, Gr.prototype.has = aa, Gr.prototype.set = m;
  function C(x, M) {
    var Q = Ks(x), pe = !Q && ip(x), mt = !Q && !pe && la(x), je = !Q && !pe && !mt && vu(x), Lt = Q || pe || mt || je, qt = Lt ? ot(x.length, String) : [], Gt = qt.length;
    for (var Ct in x)
      (M || Se.call(x, Ct)) && !(Lt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ct == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      mt && (Ct == "offset" || Ct == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      je && (Ct == "buffer" || Ct == "byteLength" || Ct == "byteOffset") || // Skip index properties.
      ca(Ct, Gt))) && qt.push(Ct);
    return qt;
  }
  function O(x, M) {
    for (var Q = x.length; Q--; )
      if (du(x[Q][0], M))
        return Q;
    return -1;
  }
  function j(x, M, Q) {
    var pe = M(x);
    return Ks(x) ? pe : Ae(pe, Q(x));
  }
  function L(x) {
    return x == null ? x === void 0 ? T : F : jt && jt in Object(x) ? mr(x) : np(x);
  }
  function k(x) {
    return ji(x) && L(x) == o;
  }
  function V(x, M, Q, pe, mt) {
    return x === M ? !0 : x == null || M == null || !ji(x) && !ji(M) ? x !== x && M !== M : X(x, M, Q, pe, V, mt);
  }
  function X(x, M, Q, pe, mt, je) {
    var Lt = Ks(x), qt = Ks(M), Gt = Lt ? u : Tr(x), Ct = qt ? u : Tr(M);
    Gt = Gt == o ? _ : Gt, Ct = Ct == o ? _ : Ct;
    var Dr = Gt == _, Ur = Ct == _, Xt = Gt == Ct;
    if (Xt && la(x)) {
      if (!la(M))
        return !1;
      Lt = !0, Dr = !1;
    }
    if (Xt && !Dr)
      return je || (je = new Gr()), Lt || vu(x) ? ye(x, M, Q, pe, mt, je) : Ke(x, M, Gt, Q, pe, mt, je);
    if (!(Q & i)) {
      var Ar = Dr && Se.call(x, "__wrapped__"), Nr = Ur && Se.call(M, "__wrapped__");
      if (Ar || Nr) {
        var bn = Ar ? x.value() : x, an = Nr ? M.value() : M;
        return je || (je = new Gr()), mt(bn, an, Q, pe, je);
      }
    }
    return Xt ? (je || (je = new Gr()), at(x, M, Q, pe, mt, je)) : !1;
  }
  function ie(x) {
    if (!yu(x) || Vs(x))
      return !1;
    var M = pu(x) ? Ye : re;
    return M.test(Fn(x));
  }
  function ne(x) {
    return ji(x) && gu(x.length) && !!fe[L(x)];
  }
  function te(x) {
    if (!rp(x))
      return Hr(x);
    var M = [];
    for (var Q in Object(x))
      Se.call(x, Q) && Q != "constructor" && M.push(Q);
    return M;
  }
  function ye(x, M, Q, pe, mt, je) {
    var Lt = Q & i, qt = x.length, Gt = M.length;
    if (qt != Gt && !(Lt && Gt > qt))
      return !1;
    var Ct = je.get(x);
    if (Ct && je.get(M))
      return Ct == M;
    var Dr = -1, Ur = !0, Xt = Q & s ? new ii() : void 0;
    for (je.set(x, M), je.set(M, x); ++Dr < qt; ) {
      var Ar = x[Dr], Nr = M[Dr];
      if (pe)
        var bn = Lt ? pe(Nr, Ar, Dr, M, x, je) : pe(Ar, Nr, Dr, x, M, je);
      if (bn !== void 0) {
        if (bn)
          continue;
        Ur = !1;
        break;
      }
      if (Xt) {
        if (!Ge(M, function(an, Un) {
          if (!qe(Xt, Un) && (Ar === an || mt(Ar, an, Q, pe, je)))
            return Xt.push(Un);
        })) {
          Ur = !1;
          break;
        }
      } else if (!(Ar === Nr || mt(Ar, Nr, Q, pe, je))) {
        Ur = !1;
        break;
      }
    }
    return je.delete(x), je.delete(M), Ur;
  }
  function Ke(x, M, Q, pe, mt, je, Lt) {
    switch (Q) {
      case H:
        if (x.byteLength != M.byteLength || x.byteOffset != M.byteOffset)
          return !1;
        x = x.buffer, M = M.buffer;
      case B:
        return !(x.byteLength != M.byteLength || !je(new cr(x), new cr(M)));
      case f:
      case d:
      case D:
        return du(+x, +M);
      case p:
        return x.name == M.name && x.message == M.message;
      case b:
      case c:
        return x == M + "";
      case S:
        var qt = Re;
      case g:
        var Gt = pe & i;
        if (qt || (qt = Te), x.size != M.size && !Gt)
          return !1;
        var Ct = Lt.get(x);
        if (Ct)
          return Ct == M;
        pe |= s, Lt.set(x, M);
        var Dr = ye(qt(x), qt(M), pe, mt, je, Lt);
        return Lt.delete(x), Dr;
      case y:
        if (Et)
          return Et.call(x) == Et.call(M);
    }
    return !1;
  }
  function at(x, M, Q, pe, mt, je) {
    var Lt = Q & i, qt = tt(x), Gt = qt.length, Ct = tt(M), Dr = Ct.length;
    if (Gt != Dr && !Lt)
      return !1;
    for (var Ur = Gt; Ur--; ) {
      var Xt = qt[Ur];
      if (!(Lt ? Xt in M : Se.call(M, Xt)))
        return !1;
    }
    var Ar = je.get(x);
    if (Ar && je.get(M))
      return Ar == M;
    var Nr = !0;
    je.set(x, M), je.set(M, x);
    for (var bn = Lt; ++Ur < Gt; ) {
      Xt = qt[Ur];
      var an = x[Xt], Un = M[Xt];
      if (pe)
        var mu = Lt ? pe(Un, an, Xt, M, x, je) : pe(an, Un, Xt, x, M, je);
      if (!(mu === void 0 ? an === Un || mt(an, Un, Q, pe, je) : mu)) {
        Nr = !1;
        break;
      }
      bn || (bn = Xt == "constructor");
    }
    if (Nr && !bn) {
      var Hs = x.constructor, Ws = M.constructor;
      Hs != Ws && "constructor" in x && "constructor" in M && !(typeof Hs == "function" && Hs instanceof Hs && typeof Ws == "function" && Ws instanceof Ws) && (Nr = !1);
    }
    return je.delete(x), je.delete(M), Nr;
  }
  function tt(x) {
    return j(x, ap, Mi);
  }
  function vt(x, M) {
    var Q = x.__data__;
    return ua(M) ? Q[typeof M == "string" ? "string" : "hash"] : Q.map;
  }
  function st(x, M) {
    var Q = Ue(x, M);
    return ie(Q) ? Q : void 0;
  }
  function mr(x) {
    var M = Se.call(x, jt), Q = x[jt];
    try {
      x[jt] = void 0;
      var pe = !0;
    } catch {
    }
    var mt = Qe.call(x);
    return pe && (M ? x[jt] = Q : delete x[jt]), mt;
  }
  var Mi = kt ? function(x) {
    return x == null ? [] : (x = Object(x), De(kt(x), function(M) {
      return Jt.call(x, M);
    }));
  } : cp, Tr = L;
  (ft && Tr(new ft(new ArrayBuffer(1))) != H || ht && Tr(new ht()) != S || bt && Tr(bt.resolve()) != I || gt && Tr(new gt()) != g || wt && Tr(new wt()) != P) && (Tr = function(x) {
    var M = L(x), Q = M == _ ? x.constructor : void 0, pe = Q ? Fn(Q) : "";
    if (pe)
      switch (pe) {
        case Ot:
          return H;
        case Tt:
          return S;
        case At:
          return I;
        case It:
          return g;
        case Nt:
          return P;
      }
    return M;
  });
  function ca(x, M) {
    return M = M ?? a, !!M && (typeof x == "number" || be.test(x)) && x > -1 && x % 1 == 0 && x < M;
  }
  function ua(x) {
    var M = typeof x;
    return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? x !== "__proto__" : x === null;
  }
  function Vs(x) {
    return !!ze && ze in x;
  }
  function rp(x) {
    var M = x && x.constructor, Q = typeof M == "function" && M.prototype || we;
    return x === Q;
  }
  function np(x) {
    return Qe.call(x);
  }
  function Fn(x) {
    if (x != null) {
      try {
        return Me.call(x);
      } catch {
      }
      try {
        return x + "";
      } catch {
      }
    }
    return "";
  }
  function du(x, M) {
    return x === M || x !== x && M !== M;
  }
  var ip = k(function() {
    return arguments;
  }()) ? k : function(x) {
    return ji(x) && Se.call(x, "callee") && !Jt.call(x, "callee");
  }, Ks = Array.isArray;
  function sp(x) {
    return x != null && gu(x.length) && !pu(x);
  }
  var la = vr || up;
  function op(x, M) {
    return V(x, M);
  }
  function pu(x) {
    if (!yu(x))
      return !1;
    var M = L(x);
    return M == v || M == E || M == l || M == w;
  }
  function gu(x) {
    return typeof x == "number" && x > -1 && x % 1 == 0 && x <= a;
  }
  function yu(x) {
    var M = typeof x;
    return x != null && (M == "object" || M == "function");
  }
  function ji(x) {
    return x != null && typeof x == "object";
  }
  var vu = $e ? it($e) : ne;
  function ap(x) {
    return sp(x) ? C(x) : te(x);
  }
  function cp() {
    return [];
  }
  function up() {
    return !1;
  }
  t.exports = op;
})(wo, wo.exports);
var bb = wo.exports;
const wb = /* @__PURE__ */ jo(bb);
function _b(t, e) {
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
    for (var S = 0, D = 0, F = 0, _ = E.length; F !== _ && E[F] === 0; )
      F++, S++;
    for (var I = (_ - F) * f + 1 >>> 0, w = new Uint8Array(I); F !== _; ) {
      for (var b = E[F], g = 0, c = I - 1; (b !== 0 || g < D) && c !== -1; c--, g++)
        b += 256 * w[c] >>> 0, w[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      D = g, F++;
    }
    for (var y = I - D; y !== I && w[y] === 0; )
      y++;
    for (var T = u.repeat(S); y < I; ++y)
      T += t.charAt(w[y]);
    return T;
  }
  function p(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var S = 0;
    if (E[S] !== " ") {
      for (var D = 0, F = 0; E[S] === u; )
        D++, S++;
      for (var _ = (E.length - S) * l + 1 >>> 0, I = new Uint8Array(_); E[S]; ) {
        var w = r[E.charCodeAt(S)];
        if (w === 255)
          return;
        for (var b = 0, g = _ - 1; (w !== 0 || b < F) && g !== -1; g--, b++)
          w += o * I[g] >>> 0, I[g] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        F = b, S++;
      }
      if (E[S] !== " ") {
        for (var c = _ - F; c !== _ && I[c] === 0; )
          c++;
        for (var y = new Uint8Array(D + (_ - c)), T = D; c !== _; )
          y[T++] = I[c++];
        return y;
      }
    }
  }
  function v(E) {
    var S = p(E);
    if (S)
      return S;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: p, decode: v };
}
var Eb = _b, Sb = Eb;
const $h = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, xb = (t) => new TextEncoder().encode(t), Db = (t) => new TextDecoder().decode(t);
class Ob {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Ib {
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
    return qh(this, e);
  }
}
class Cb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return qh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const qh = (t, e) => new Cb({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Rb {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Ob(e, r, n), this.decoder = new Ib(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Go = ({ name: t, prefix: e, encode: r, decode: n }) => new Rb(t, e, r, n), ks = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Sb(r, e);
  return Go({ prefix: t, name: e, encode: n, decode: (s) => $h(i(s)) });
}, Tb = (t, e, r, n) => {
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
}, Ab = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Yt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Go({ prefix: e, name: t, encode(i) {
  return Ab(i, n, r);
}, decode(i) {
  return Tb(i, n, r, t);
} }), Nb = Go({ prefix: "\0", name: "identity", encode: (t) => Db(t), decode: (t) => xb(t) });
var Pb = Object.freeze({ __proto__: null, identity: Nb });
const Lb = Yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Fb = Object.freeze({ __proto__: null, base2: Lb });
const Ub = Yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Mb = Object.freeze({ __proto__: null, base8: Ub });
const jb = ks({ prefix: "9", name: "base10", alphabet: "0123456789" });
var kb = Object.freeze({ __proto__: null, base10: jb });
const $b = Yt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), qb = Yt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var zb = Object.freeze({ __proto__: null, base16: $b, base16upper: qb });
const Bb = Yt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Vb = Yt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Kb = Yt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Hb = Yt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Wb = Yt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Gb = Yt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Qb = Yt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Zb = Yt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Yb = Yt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Jb = Object.freeze({ __proto__: null, base32: Bb, base32upper: Vb, base32pad: Kb, base32padupper: Hb, base32hex: Wb, base32hexupper: Gb, base32hexpad: Qb, base32hexpadupper: Zb, base32z: Yb });
const Xb = ks({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), ew = ks({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var tw = Object.freeze({ __proto__: null, base36: Xb, base36upper: ew });
const rw = ks({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), nw = ks({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var iw = Object.freeze({ __proto__: null, base58btc: rw, base58flickr: nw });
const sw = Yt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), ow = Yt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), aw = Yt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), cw = Yt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var uw = Object.freeze({ __proto__: null, base64: sw, base64pad: ow, base64url: aw, base64urlpad: cw });
const zh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), lw = zh.reduce((t, e, r) => (t[r] = e, t), []), fw = zh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function hw(t) {
  return t.reduce((e, r) => (e += lw[r], e), "");
}
function dw(t) {
  const e = [];
  for (const r of t) {
    const n = fw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const pw = Go({ prefix: "🚀", name: "base256emoji", encode: hw, decode: dw });
var gw = Object.freeze({ __proto__: null, base256emoji: pw }), yw = Bh, Cl = 128, vw = 127, mw = ~vw, bw = Math.pow(2, 31);
function Bh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= bw; )
    e[r++] = t & 255 | Cl, t /= 128;
  for (; t & mw; )
    e[r++] = t & 255 | Cl, t >>>= 7;
  return e[r] = t | 0, Bh.bytes = r - n + 1, e;
}
var ww = tc, _w = 128, Rl = 127;
function tc(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, a, o = t.length;
  do {
    if (s >= o)
      throw tc.bytes = 0, new RangeError("Could not decode varint");
    a = t[s++], r += i < 28 ? (a & Rl) << i : (a & Rl) * Math.pow(2, i), i += 7;
  } while (a >= _w);
  return tc.bytes = s - n, r;
}
var Ew = Math.pow(2, 7), Sw = Math.pow(2, 14), xw = Math.pow(2, 21), Dw = Math.pow(2, 28), Ow = Math.pow(2, 35), Iw = Math.pow(2, 42), Cw = Math.pow(2, 49), Rw = Math.pow(2, 56), Tw = Math.pow(2, 63), Aw = function(t) {
  return t < Ew ? 1 : t < Sw ? 2 : t < xw ? 3 : t < Dw ? 4 : t < Ow ? 5 : t < Iw ? 6 : t < Cw ? 7 : t < Rw ? 8 : t < Tw ? 9 : 10;
}, Nw = { encode: yw, decode: ww, encodingLength: Aw }, Vh = Nw;
const Tl = (t, e, r = 0) => (Vh.encode(t, e, r), e), Al = (t) => Vh.encodingLength(t), rc = (t, e) => {
  const r = e.byteLength, n = Al(t), i = n + Al(r), s = new Uint8Array(i + r);
  return Tl(t, s, 0), Tl(r, s, n), s.set(e, i), new Pw(t, r, e, s);
};
class Pw {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Kh = ({ name: t, code: e, encode: r }) => new Lw(t, e, r);
class Lw {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? rc(this.code, r) : r.then((n) => rc(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Hh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Fw = Kh({ name: "sha2-256", code: 18, encode: Hh("SHA-256") }), Uw = Kh({ name: "sha2-512", code: 19, encode: Hh("SHA-512") });
var Mw = Object.freeze({ __proto__: null, sha256: Fw, sha512: Uw });
const Wh = 0, jw = "identity", Gh = $h, kw = (t) => rc(Wh, Gh(t)), $w = { code: Wh, name: jw, encode: Gh, digest: kw };
var qw = Object.freeze({ __proto__: null, identity: $w });
new TextEncoder(), new TextDecoder();
const Nl = { ...Pb, ...Fb, ...Mb, ...kb, ...zb, ...Jb, ...tw, ...iw, ...uw, ...gw };
({ ...Mw, ...qw });
function Qh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function zw(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Qh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Zh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Pl = Zh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Sa = Zh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = zw(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Bw = { utf8: Pl, "utf-8": Pl, hex: Nl.base16, latin1: Sa, ascii: Sa, binary: Sa, ...Nl };
function Vw(t, e = "utf8") {
  const r = Bw[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Qh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Yh = "wc", Kw = 2, Xc = "core", Dn = `${Yh}@2:${Xc}:`, Hw = { name: Xc, logger: "error" }, Ww = { database: ":memory:" }, Gw = "crypto", Ll = "client_ed25519_seed", Qw = ge.ONE_DAY, Zw = "keychain", Yw = "0.3", Jw = "messages", Xw = "0.3", e_ = ge.SIX_HOURS, t_ = "publisher", Jh = "irn", r_ = "error", Xh = "wss://relay.walletconnect.com", Fl = "wss://relay.walletconnect.org", n_ = "relayer", sr = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, i_ = "_subscription", ln = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, s_ = ge.ONE_SECOND, o_ = "2.10.0", a_ = 1e4, c_ = "0.3", u_ = "WALLETCONNECT_CLIENT_ID", en = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, l_ = "subscription", f_ = "0.3", h_ = ge.FIVE_SECONDS * 1e3, d_ = "pairing", p_ = "0.3", Ki = { wc_pairingDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 } } }, Jr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, g_ = "history", y_ = "0.3", v_ = "expirer", Pr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, m_ = "0.3", xa = "verify-api", lo = "https://verify.walletconnect.com", Ul = "https://verify.walletconnect.org";
class b_ {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Zw, this.version = Yw, this.initialized = !1, this.storagePrefix = Dn, this.init = async () => {
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
    }, this.core = e, this.logger = et.generateChildLogger(r, this.name);
  }
  get context() {
    return et.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Rh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Th(e) : void 0;
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
class w_ {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = Gw, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = el(i);
      return gh(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Mm();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), a = el(s), o = Xa();
      return await Kv(o, i, Qw, a);
    }, this.generateSharedKey = (i, s, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), u = jm(o, s);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const a = s || km(i);
      return await this.keychain.set(a, i), a;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, a) => {
      this.isInitialized();
      const o = Ch(a), u = Uc(s);
      if (fl(o)) {
        const p = o.senderPublicKey, v = o.receiverPublicKey;
        i = await this.generateSharedKey(p, v);
      }
      const l = this.getSymKey(i), { type: f, senderPublicKey: d } = o;
      return qm({ type: f, symKey: l, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, a) => {
      this.isInitialized();
      const o = Vm(s, a);
      if (fl(o)) {
        const u = o.receiverPublicKey, l = o.senderPublicKey;
        i = await this.generateSharedKey(u, l);
      }
      try {
        const u = this.getSymKey(i), l = zm({ symKey: u, encoded: s });
        return eh(l);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = mo(i);
      return Fs(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = mo(i);
      return s.senderPublicKey ? gr(s.senderPublicKey, pr) : void 0;
    }, this.core = e, this.logger = et.generateChildLogger(r, this.name), this.keychain = n || new b_(this.core, this.logger);
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
      e = this.keychain.get(Ll);
    } catch {
      e = Xa(), await this.keychain.set(Ll, e);
    }
    return Vw(e, "base16");
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
class __ extends Gg {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Jw, this.version = Xw, this.initialized = !1, this.storagePrefix = Dn, this.init = async () => {
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
      const s = gi(i);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[s] < "u" || (a[s] = i, this.messages.set(n, a), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), a = gi(i);
      return typeof s[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = et.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return et.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Rh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Th(e) : void 0;
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
class E_ extends Qg {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Fr.EventEmitter(), this.name = t_, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ge.toMiliseconds(ge.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || e_, u = ec(s), l = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || jh().toString(), p = { topic: n, message: i, opts: { ttl: o, relay: u, prompt: l, tag: f, id: d } }, v = setTimeout(() => this.queue.set(d, p), this.publishTimeout);
        try {
          await await as(this.rpcPublish(n, i, o, u, l, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(sr.publish, p);
        } catch (E) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = s == null ? void 0 : s.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), E;
          return;
        } finally {
          clearTimeout(v);
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
    }, this.relayer = e, this.logger = et.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return et.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, a, o) {
    var u, l, f, d;
    const p = { method: co(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: a }, id: o };
    return fr((u = p.params) == null ? void 0 : u.prompt) && ((l = p.params) == null || delete l.prompt), fr((f = p.params) == null ? void 0 : f.tag) && ((d = p.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(Ri.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(sr.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(sr.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class S_ {
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
var x_ = Object.defineProperty, D_ = Object.defineProperties, O_ = Object.getOwnPropertyDescriptors, Ml = Object.getOwnPropertySymbols, I_ = Object.prototype.hasOwnProperty, C_ = Object.prototype.propertyIsEnumerable, jl = (t, e, r) => e in t ? x_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Hi = (t, e) => {
  for (var r in e || (e = {}))
    I_.call(e, r) && jl(t, r, e[r]);
  if (Ml)
    for (var r of Ml(e))
      C_.call(e, r) && jl(t, r, e[r]);
  return t;
}, Da = (t, e) => D_(t, O_(e));
class R_ extends Jg {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new S_(), this.events = new Fr.EventEmitter(), this.name = l_, this.version = f_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Dn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = ec(i), a = { topic: n, relay: s };
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
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= h_ && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = et.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
      const i = ec(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = Vt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: co(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await as(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(sr.connection_stalled);
    }
    return gi(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: co(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await as(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(sr.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: co(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Da(Hi({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Hi({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Hi({}, r)), this.topicMap.set(r.topic, e), this.events.emit(en.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(en.deleted, Da(Hi({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(en.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(en.resubscribed);
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
    js(r) && this.onBatchSubscribe(r.map((n, i) => Da(Hi({}, e[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(Ri.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(sr.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(sr.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(en.created, async (e) => {
      const r = en.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(en.deleted, async (e) => {
      const r = en.deleted;
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
var T_ = Object.defineProperty, kl = Object.getOwnPropertySymbols, A_ = Object.prototype.hasOwnProperty, N_ = Object.prototype.propertyIsEnumerable, $l = (t, e, r) => e in t ? T_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, P_ = (t, e) => {
  for (var r in e || (e = {}))
    A_.call(e, r) && $l(t, r, e[r]);
  if (kl)
    for (var r of kl(e))
      N_.call(e, r) && $l(t, r, e[r]);
  return t;
};
class L_ extends Zg {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Fr.EventEmitter(), this.name = n_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(sr.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(sr.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(ln.payload, this.onPayloadHandler), this.provider.on(ln.connect, this.onConnectHandler), this.provider.on(ln.disconnect, this.onDisconnectHandler), this.provider.on(ln.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? et.generateChildLogger(e.logger, this.name) : et.pino(et.getDefaultLoggerOptions({ level: e.logger || r_ })), this.messages = new __(this.logger, e.core), this.subscriber = new R_(this, this.logger), this.publisher = new E_(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Xh, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Fl}...`), await this.restartTransport(Fl);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, a_);
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
      this.subscriber.once(en.created, (a) => {
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await as(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(en.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await as(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(ln.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await _l())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new pb(new mb(t0({ sdkVersion: o_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Jc(e)) {
      if (!e.method.endsWith(i_))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, a = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(P_({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Wo(e) && this.events.emit(sr.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(sr.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Zc(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(ln.payload, this.onPayloadHandler), this.provider.off(ln.connect, this.onConnectHandler), this.provider.off(ln.disconnect, this.onDisconnectHandler), this.provider.off(ln.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(sr.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await _l();
    W0(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(sr.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ge.toMiliseconds(s_)));
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
var F_ = Object.defineProperty, ql = Object.getOwnPropertySymbols, U_ = Object.prototype.hasOwnProperty, M_ = Object.prototype.propertyIsEnumerable, zl = (t, e, r) => e in t ? F_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bl = (t, e) => {
  for (var r in e || (e = {}))
    U_.call(e, r) && zl(t, r, e[r]);
  if (ql)
    for (var r of ql(e))
      M_.call(e, r) && zl(t, r, e[r]);
  return t;
};
class Qo extends Yg {
  constructor(e, r, n, i = Dn, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = c_, this.cached = [], this.initialized = !1, this.storagePrefix = Dn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !fr(a) ? this.map.set(this.getKey(a), a) : x0(a) ? this.map.set(a.id, a) : D0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => wb(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = Bl(Bl({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = et.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
class j_ {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = d_, this.version = p_, this.events = new Ns(), this.initialized = !1, this.storagePrefix = Dn, this.ignoredPayloadTypes = [ni], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Xa(), i = await this.core.crypto.setSymKey(n), s = Mr(ge.FIVE_MINUTES), a = { protocol: Jh }, o = { topic: i, expiry: s, relay: a, active: !1 }, u = p0({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: a });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: a } = f0(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const o = Mr(ge.FIVE_MINUTES), u = { topic: i, relay: a, expiry: o, active: !1 };
      return await this.pairings.set(i, u), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: a }), this.core.expirer.set(i, o), n.activatePairing && await this.activate({ topic: i }), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Mr(ge.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = ui();
        this.events.once(Ut("pairing_ping", s), ({ error: l }) => {
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
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", Vt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const a = cs(i, s), o = await this.core.crypto.encode(n, a), u = Ki[i].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, i, s) => {
      const a = Zc(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), l = Ki[u.request.method].res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (n, i, s) => {
      const a = Yc(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), l = Ki[u.request.method] ? Ki[u.request.method].res : Ki.unregistered_method.res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, Vt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => _n(i.expiry));
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
        hn(i) ? this.events.emit(Ut("pairing_ping", s), {}) : jr(i) && this.events.emit(Ut("pairing_ping", s), { error: i.error });
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
        const o = Vt("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(s, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(Vt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!_r(n)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!S0(n.uri)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!_r(n)) {
        const { message: s } = ue("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!_r(n)) {
        const { message: s } = ue("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!Kt(n, !1)) {
        const { message: i } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (_n(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = ue("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = et.generateChildLogger(r, this.name), this.pairings = new Qo(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return et.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ue("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(sr.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        Jc(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Wo(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Pr.expired, async (e) => {
      const { topic: r } = Nh(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class k_ extends Wg {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Fr.EventEmitter(), this.name = g_, this.version = y_, this.cached = [], this.initialized = !1, this.storagePrefix = Dn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const a = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Mr(ge.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Jr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = jr(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(Jr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(Jr.deleted, s);
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
    }, this.logger = et.generateChildLogger(r, this.name);
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: cs(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(Jr.sync);
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
    this.events.on(Jr.created, (e) => {
      const r = Jr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Jr.updated, (e) => {
      const r = Jr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Jr.deleted, (e) => {
      const r = Jr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Ri.HEARTBEAT_EVENTS.pulse, () => {
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
class $_ extends Xg {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Fr.EventEmitter(), this.name = v_, this.version = m_, this.cached = [], this.initialized = !1, this.storagePrefix = Dn, this.init = async () => {
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
      this.expirations.set(s, a), this.checkExpiry(s, a), this.events.emit(Pr.created, { target: s, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Pr.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = et.generateChildLogger(r, this.name);
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
      return r0(e);
    if (typeof e == "number")
      return n0(e);
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
    await this.setExpirations(this.values), this.events.emit(Pr.sync);
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
    this.expirations.delete(e), this.events.emit(Pr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Ri.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Pr.created, (e) => {
      const r = Pr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Pr.expired, (e) => {
      const r = Pr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Pr.deleted, (e) => {
      const r = Pr.deleted;
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
class q_ extends ey {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = xa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Ho() || !Us())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || lo;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ul;
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
      const i = (n == null ? void 0 : n.verifyUrl) || lo;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (a) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(a), s = await this.fetchAttestation(n.attestationId, Ul);
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
        if (document.getElementById(xa))
          return s();
        window.addEventListener("message", i);
        const a = document.createElement("iframe");
        a.id = xa, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = s;
      }), new Promise((s, a) => setTimeout(() => {
        window.removeEventListener("message", i), a("verify iframe load timeout");
      }, ge.toMiliseconds(ge.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = et.generateChildLogger(r, this.name), this.verifyUrl = lo, this.abortController = new AbortController(), this.isDevEnv = Hc() && process.env.IS_VITEST;
  }
  get context() {
    return et.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ge.toMiliseconds(e));
  }
}
var z_ = Object.defineProperty, Vl = Object.getOwnPropertySymbols, B_ = Object.prototype.hasOwnProperty, V_ = Object.prototype.propertyIsEnumerable, Kl = (t, e, r) => e in t ? z_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Hl = (t, e) => {
  for (var r in e || (e = {}))
    B_.call(e, r) && Kl(t, r, e[r]);
  if (Vl)
    for (var r of Vl(e))
      V_.call(e, r) && Kl(t, r, e[r]);
  return t;
};
class eu extends Hg {
  constructor(e) {
    super(e), this.protocol = Yh, this.version = Kw, this.name = Xc, this.events = new Fr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Xh;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : et.pino(et.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Hw.logger }));
    this.logger = et.generateChildLogger(r, this.name), this.heartbeat = new Ri.HeartBeat(), this.crypto = new w_(this, this.logger, e == null ? void 0 : e.keychain), this.history = new k_(this, this.logger), this.expirer = new $_(this, this.logger), this.storage = e != null && e.storage ? e.storage : new ug(Hl(Hl({}, Ww), e == null ? void 0 : e.storageOptions)), this.relayer = new L_({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new j_(this, this.logger), this.verify = new q_(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new eu(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(u_, n), r;
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
const K_ = eu, ed = "wc", td = 2, rd = "client", tu = `${ed}@${td}:${rd}:`, Oa = { name: rd, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Wl = "WALLETCONNECT_DEEPLINK_CHOICE", H_ = "proposal", W_ = "Proposal expired", G_ = "session", eo = ge.SEVEN_DAYS, Q_ = "engine", Wi = { wc_sessionPropose: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ia = { min: ge.FIVE_MINUTES, max: ge.SEVEN_DAYS }, fn = { idle: "IDLE", active: "ACTIVE" }, Z_ = "request", Y_ = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var J_ = Object.defineProperty, X_ = Object.defineProperties, e1 = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, t1 = Object.prototype.hasOwnProperty, r1 = Object.prototype.propertyIsEnumerable, Ql = (t, e, r) => e in t ? J_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wr = (t, e) => {
  for (var r in e || (e = {}))
    t1.call(e, r) && Ql(t, r, e[r]);
  if (Gl)
    for (var r of Gl(e))
      r1.call(e, r) && Ql(t, r, e[r]);
  return t;
}, Gi = (t, e) => X_(t, e1(e));
class n1 extends ry {
  constructor(e) {
    super(e), this.name = Q_, this.events = new Ns(), this.initialized = !1, this.ignoredPayloadTypes = [ni], this.requestQueue = { state: fn.idle, queue: [] }, this.sessionRequestQueue = { state: fn.idle, queue: [] }, this.requestQueueDelay = ge.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Wi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Gi(wr({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let l = i, f, d = !1;
      if (l && (d = this.client.core.pairing.pairings.get(l).active), !l || !d) {
        const { topic: I, uri: w } = await this.client.core.pairing.create();
        l = I, f = w;
      }
      const p = await this.client.core.crypto.generateKeyPair(), v = wr({ requiredNamespaces: s, optionalNamespaces: a, relays: u ?? [{ protocol: Jh }], proposer: { publicKey: p, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: E, resolve: S, done: D } = ui(ge.FIVE_MINUTES, W_);
      if (this.events.once(Ut("session_connect"), async ({ error: I, session: w }) => {
        if (I)
          E(I);
        else if (w) {
          w.self.publicKey = p;
          const b = Gi(wr({}, w), { requiredNamespaces: w.requiredNamespaces, optionalNamespaces: w.optionalNamespaces });
          await this.client.session.set(w.topic, b), await this.setExpiry(w.topic, w.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: w.peer.metadata }), S(b);
        }
      }), !l) {
        const { message: I } = ue("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(I);
      }
      const F = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: v }), _ = Mr(ge.FIVE_MINUTES);
      return await this.setProposal(F, wr({ id: F, expiry: _ }, v)), { uri: f, approval: D };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: l, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", rs(f) || (f = m0(s, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), v = l.publicKey, E = await this.client.core.crypto.generateSharedKey(p, v);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: l.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, Vt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const S = wr({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: p, metadata: this.client.metadata }, expiry: Mr(eo) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(E), await this.sendRequest({ topic: E, method: "wc_sessionSettle", params: S, throwOnFailedPublish: !0 });
      const D = Gi(wr({}, S), { topic: E, pairingTopic: u, acknowledged: !1, self: S.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: p });
      return await this.client.session.set(E, D), await this.setExpiry(E, Mr(eo)), { topic: E, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(E)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, Vt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: a, resolve: o, reject: u } = ui();
      return this.events.once(Ut("session_update", s), ({ error: l }) => {
        l ? u(l) : o();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: a, reject: o } = ui();
      return this.events.once(Ut("session_extend", i), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, Mr(eo)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: a } = r, o = Qc(), { done: u, resolve: l, reject: f } = ui(a);
      return this.events.once(Ut("session_request", o), ({ error: d, result: p }) => {
        d ? f(d) : l(p);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => f(p)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const p = await this.client.core.storage.getItem(Wl);
        i0({ id: o, topic: s, wcDeepLink: p }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      hn(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : jr(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: a, reject: o } = ui();
        this.events.once(Ut("session_ping", i), ({ error: u }) => {
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: Vt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => _0(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Vt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Wl).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, Vt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = fn.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Wi.wc_sessionRequest.req.ttl, { id: i, topic: s, params: a } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: a }), n && this.client.core.expirer.set(i, Mr(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: l } = r, f = cs(i, s, u);
      if (Us() && Y_.includes(i)) {
        const v = gi(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: v });
      }
      const d = await this.client.core.crypto.encode(n, f), p = Wi[i].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, f), l ? (p.internal = Gi(wr({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, p)) : this.client.core.relayer.publish(n, d, p).catch((v) => this.client.logger.error(v)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: a } = r, o = Zc(n, s), u = await this.client.core.crypto.encode(i, o), l = await this.client.core.history.get(i, n), f = Wi[l.request.method].res;
      a ? (f.internal = Gi(wr({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, i) => {
      const s = Yc(r, i), a = await this.client.core.crypto.encode(n, s), o = await this.client.core.history.get(n, r), u = Wi[o.request.method].res;
      this.client.core.relayer.publish(n, a, u), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        _n(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        _n(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === fn.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = fn.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = fn.idle;
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
        this.isValidConnect(wr({}, n.params));
        const a = Mr(ge.FIVE_MINUTES), o = wr({ id: s, pairingTopic: r, expiry: a }, i);
        await this.setProposal(s, o);
        const u = gi(JSON.stringify(n)), l = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: o, verifyContext: l });
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (hn(n)) {
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
        jr(n) && (await this.client.proposal.delete(i, Vt("USER_DISCONNECTED")), this.events.emit(Ut("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: a, controller: o, expiry: u, namespaces: l, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: p, pairingTopic: v } = n.params, E = wr({ topic: r, relay: a, expiry: u, namespaces: l, acknowledged: !0, pairingTopic: v, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Ut("session_connect"), { session: E }), this.cleanupDuplicatePairings(E);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      hn(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Ut("session_approve", i), {})) : jr(n) && (await this.client.session.delete(r, Vt("USER_DISCONNECTED")), this.events.emit(Ut("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const a = `${r}_session_update`, o = Xs.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(wr({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), Xs.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      hn(n) ? this.events.emit(Ut("session_update", i), {}) : jr(n) && this.events.emit(Ut("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Mr(eo)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      hn(n) ? this.events.emit(Ut("session_extend", i), {}) : jr(n) && this.events.emit(Ut("session_extend", i), { error: n.error });
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
        hn(n) ? this.events.emit(Ut("session_ping", i), {}) : jr(n) && this.events.emit(Ut("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(sr.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(wr({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      hn(n) ? this.events.emit(Ut("session_request", i), { result: n.result }) : jr(n) && this.events.emit(Ut("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const a = `${r}_session_event_${s.event.name}`, o = Xs.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(wr({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), Xs.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = fn.idle, this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === fn.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, a = gi(JSON.stringify(cs("wc_sessionRequest", s, n))), o = this.client.session.get(i), u = await this.getVerifyContext(a, o.peer.metadata);
        this.sessionRequestQueue.state = fn.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: u });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!_r(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: a, relays: o } = r;
      if (fr(n) || await this.isValidPairingTopic(n), !P0(o, !0)) {
        const { message: u } = ue("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !fr(i) && rs(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !fr(s) && rs(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), fr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = N0(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!_r(r))
        throw new Error(ue("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = uo(i, "approve()");
      if (u)
        throw new Error(u.message);
      const l = bl(o.requiredNamespaces, i, "approve()");
      if (l)
        throw new Error(l.message);
      if (!Kt(s, !0)) {
        const { message: f } = ue("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      fr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!_r(r)) {
        const { message: s } = ue("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !F0(i)) {
        const { message: s } = ue("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!_r(r)) {
        const { message: l } = ue("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: n, controller: i, namespaces: s, expiry: a } = r;
      if (!Lh(n)) {
        const { message: l } = ue("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = O0(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = uo(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (_n(a)) {
        const { message: l } = ue("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!_r(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), a = uo(i, "update()");
      if (a)
        throw new Error(a.message);
      const o = bl(s.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!_r(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!_r(r)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: i, chainId: s, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!ml(o, s)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!U0(i)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!k0(o, s, i.method)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (a && !B0(a, Ia)) {
        const { message: u } = ue("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Ia.min} and ${Ia.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!_r(r)) {
        const { message: s } = ue("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !M0(i)) {
        const { message: s } = ue("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!_r(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!_r(r)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!ml(a, s)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(o);
      }
      if (!j0(i)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!$0(a, s, i.name)) {
        const { message: o } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!_r(r)) {
        const { message: i } = ue("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || lo, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!Kt(i, !1)) {
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
    this.client.core.relayer.on(sr.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        Jc(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Wo(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Pr.expired, async (e) => {
      const { topic: r, id: n } = Nh(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, ue("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!Kt(e, !1)) {
      const { message: r } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (_n(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = ue("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Kt(e, !1)) {
      const { message: r } = ue("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (_n(this.client.session.get(e).expiry)) {
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
    else if (Kt(e, !1)) {
      const { message: r } = ue("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = ue("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!L0(e)) {
      const { message: r } = ue("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = ue("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (_n(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = ue("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class i1 extends Qo {
  constructor(e, r) {
    super(e, r, H_, tu), this.core = e, this.logger = r;
  }
}
class s1 extends Qo {
  constructor(e, r) {
    super(e, r, G_, tu), this.core = e, this.logger = r;
  }
}
class o1 extends Qo {
  constructor(e, r) {
    super(e, r, Z_, tu, (n) => n.id), this.core = e, this.logger = r;
  }
}
class ru extends ty {
  constructor(e) {
    super(e), this.protocol = ed, this.version = td, this.name = Oa.name, this.events = new Fr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Oa.name, this.metadata = (e == null ? void 0 : e.metadata) || Ym();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : et.pino(et.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Oa.logger }));
    this.core = (e == null ? void 0 : e.core) || new K_(e), this.logger = et.generateChildLogger(r, this.name), this.session = new s1(this.core, this.logger), this.proposal = new i1(this.core, this.logger), this.pendingRequest = new o1(this.core, this.logger), this.engine = new n1(this);
  }
  static async init(e) {
    const r = new ru(e);
    return await r.initialize(), r;
  }
  get context() {
    return et.getLoggerContext(this.logger);
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
var a1 = Object.defineProperty, c1 = Object.defineProperties, u1 = Object.getOwnPropertyDescriptors, Zl = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, f1 = Object.prototype.propertyIsEnumerable, Yl = (t, e, r) => e in t ? a1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, h1 = (t, e) => {
  for (var r in e || (e = {}))
    l1.call(e, r) && Yl(t, r, e[r]);
  if (Zl)
    for (var r of Zl(e))
      f1.call(e, r) && Yl(t, r, e[r]);
  return t;
}, d1 = (t, e) => c1(t, u1(e)), nu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, xt = (t, e, r) => (nu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Bn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, _o = (t, e, r, n) => (nu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), rr = (t, e, r) => (nu(t, e, "access private method"), r), Vn, li, Yi, Bt, nc, nd, nr, lr, ic, Jl;
let p1 = class {
  constructor(e) {
    Bn(this, nc), Bn(this, nr), Bn(this, ic), Bn(this, Vn, void 0), Bn(this, li, void 0), Bn(this, Yi, void 0), Bn(this, Bt, void 0), _o(this, Vn, e), _o(this, li, rr(this, nc, nd).call(this)), rr(this, nr, lr).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await rr(this, nr, lr).call(this);
      const a = xt(this, li).subscribeModal((l) => {
        l.open || (a(), s(new Error("Modal closed")));
      }), { uri: o, approval: u } = await xt(this, Bt).connect(e);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => l.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => l.add(d));
        }), await xt(this, li).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await u();
        i(l);
      } catch (l) {
        s(l);
      } finally {
        a(), xt(this, li).closeModal();
      }
    });
  }
  async disconnect(e) {
    await rr(this, nr, lr).call(this), await xt(this, Bt).disconnect(e);
  }
  async request(e) {
    return await rr(this, nr, lr).call(this), await xt(this, Bt).request(e);
  }
  async getSessions() {
    return await rr(this, nr, lr).call(this), xt(this, Bt).session.getAll();
  }
  async getSession() {
    return await rr(this, nr, lr).call(this), xt(this, Bt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await rr(this, nr, lr).call(this), xt(this, Bt).off("session_expire", e);
  }
};
Vn = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakSet(), nd = function() {
  const { modalOptions: t, projectId: e } = xt(this, Vn);
  return new Xp(d1(h1({}, t), { projectId: e }));
}, nr = /* @__PURE__ */ new WeakSet(), lr = async function() {
  return xt(this, Bt) ? !0 : (!xt(this, Yi) && typeof window < "u" && _o(this, Yi, rr(this, ic, Jl).call(this)), xt(this, Yi));
}, ic = /* @__PURE__ */ new WeakSet(), Jl = async function() {
  _o(this, Bt, await ru.init({ metadata: xt(this, Vn).metadata, projectId: xt(this, Vn).projectId, relayUrl: xt(this, Vn).relayUrl }));
  const t = await xt(this, Bt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const iu = [
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
], Zo = ["aleo:1"], su = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], g1 = "f0aaeffe71b636da453fce042d79d723", y1 = {
  standaloneChains: Zo,
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
}, OD = {
  requiredNamespaces: {
    aleo: {
      methods: iu,
      chains: Zo,
      events: su
    }
  }
}, xi = new Ns();
let Ji;
function v1(t) {
  Ji = new p1({
    projectId: g1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...y1 }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Dt() {
  return new Promise((t) => {
    if (Ji)
      t(Ji);
    else {
      const e = setInterval(() => {
        Ji && (clearInterval(e), t(Ji));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var nt;
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
})(nt || (nt = {}));
var sc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(sc || (sc = {}));
const he = nt.arrayToEnum([
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
]), Sn = (t) => {
  switch (typeof t) {
    case "undefined":
      return he.undefined;
    case "string":
      return he.string;
    case "number":
      return isNaN(t) ? he.nan : he.number;
    case "boolean":
      return he.boolean;
    case "function":
      return he.function;
    case "bigint":
      return he.bigint;
    case "symbol":
      return he.symbol;
    case "object":
      return Array.isArray(t) ? he.array : t === null ? he.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? he.promise : typeof Map < "u" && t instanceof Map ? he.map : typeof Set < "u" && t instanceof Set ? he.set : typeof Date < "u" && t instanceof Date ? he.date : he.object;
    default:
      return he.unknown;
  }
}, ae = nt.arrayToEnum([
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
]), m1 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class qr extends Error {
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
    return JSON.stringify(this.issues, nt.jsonStringifyReplacer, 2);
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
qr.create = (t) => new qr(t);
const us = (t, e) => {
  let r;
  switch (t.code) {
    case ae.invalid_type:
      t.received === he.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case ae.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, nt.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${nt.joinValues(t.keys, ", ")}`;
      break;
    case ae.invalid_union:
      r = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${nt.joinValues(t.options)}`;
      break;
    case ae.invalid_enum_value:
      r = `Invalid enum value. Expected ${nt.joinValues(t.options)}, received '${t.received}'`;
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
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : nt.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
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
      r = e.defaultError, nt.assertNever(t);
  }
  return { message: r };
};
let id = us;
function b1(t) {
  id = t;
}
function Eo() {
  return id;
}
const So = (t) => {
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
}, w1 = [];
function de(t, e) {
  const r = So({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Eo(),
      us
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class ar {
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
    return ar.mergeObjectSync(e, n);
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
}), sd = (t) => ({ status: "dirty", value: t }), yr = (t) => ({ status: "valid", value: t }), oc = (t) => t.status === "aborted", ac = (t) => t.status === "dirty", xo = (t) => t.status === "valid", Do = (t) => typeof Promise < "u" && t instanceof Promise;
var me;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(me || (me = {}));
class rn {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Xl = (t, e) => {
  if (xo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new qr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ke(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class He {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Sn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Sn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ar(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Sn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Do(r))
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
      parsedType: Sn(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return Xl(i, s);
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
      parsedType: Sn(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Do(i) ? i : Promise.resolve(i));
    return Xl(n, s);
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
    return new Br({
      schema: this,
      typeName: xe.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return pn.create(this, this._def);
  }
  nullable() {
    return ei.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return zr.create(this, this._def);
  }
  promise() {
    return Oi.create(this, this._def);
  }
  or(e) {
    return ds.create([this, e], this._def);
  }
  and(e) {
    return ps.create(this, e, this._def);
  }
  transform(e) {
    return new Br({
      ...ke(this._def),
      schema: this,
      typeName: xe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new bs({
      ...ke(this._def),
      innerType: this,
      defaultValue: r,
      typeName: xe.ZodDefault
    });
  }
  brand() {
    return new ad({
      typeName: xe.ZodBranded,
      type: this,
      ...ke(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ro({
      ...ke(this._def),
      innerType: this,
      catchValue: r,
      typeName: xe.ZodCatch
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
    return $s.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _1 = /^c[^\s-]{8,}$/i, E1 = /^[a-z][a-z0-9]*$/, S1 = /[0-9A-HJKMNP-TV-Z]{26}/, x1 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, D1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, O1 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, I1 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, C1 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, R1 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function T1(t, e) {
  return !!((e === "v4" || !e) && I1.test(t) || (e === "v6" || !e) && C1.test(t));
}
class $r extends He {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: ae.invalid_string,
      ...me.errToObj(n)
    }), this.nonempty = (e) => this.min(1, me.errToObj(e)), this.trim = () => new $r({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new $r({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new $r({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== he.string) {
      const s = this._getOrReturnCtx(e);
      return de(
        s,
        {
          code: ae.invalid_type,
          expected: he.string,
          received: s.parsedType
        }
        //
      ), Ce;
    }
    const n = new ar();
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
        D1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "email",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        O1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "emoji",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        x1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "uuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        _1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        E1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        S1.test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
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
        }), n.dirty()) : s.kind === "datetime" ? R1(s).test(e.data) || (i = this._getOrReturnCtx(e, i), de(i, {
          code: ae.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? T1(e.data, s.version) || (i = this._getOrReturnCtx(e, i), de(i, {
          validation: "ip",
          code: ae.invalid_string,
          message: s.message
        }), n.dirty()) : nt.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new $r({
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
$r.create = (t) => {
  var e;
  return new $r({
    checks: [],
    typeName: xe.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ke(t)
  });
};
function A1(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, s = parseInt(t.toFixed(i).replace(".", "")), a = parseInt(e.toFixed(i).replace(".", ""));
  return s % a / Math.pow(10, i);
}
class On extends He {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== he.number) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: he.number,
        received: s.parsedType
      }), Ce;
    }
    let n;
    const i = new ar();
    for (const s of this._def.checks)
      s.kind === "int" ? nt.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), de(n, {
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
      }), i.dirty()) : s.kind === "multipleOf" ? A1(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), de(n, {
        code: ae.not_finite,
        message: s.message
      }), i.dirty()) : nt.assertNever(s);
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
    return new On({
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
    return new On({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && nt.isInteger(e.value));
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
On.create = (t) => new On({
  checks: [],
  typeName: xe.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ke(t)
});
class In extends He {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== he.bigint) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: he.bigint,
        received: s.parsedType
      }), Ce;
    }
    let n;
    const i = new ar();
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
      }), i.dirty()) : nt.assertNever(s);
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
    return new In({
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
    return new In({
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
In.create = (t) => {
  var e;
  return new In({
    checks: [],
    typeName: xe.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ke(t)
  });
};
class ls extends He {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== he.boolean) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.boolean,
        received: n.parsedType
      }), Ce;
    }
    return yr(e.data);
  }
}
ls.create = (t) => new ls({
  typeName: xe.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ke(t)
});
class Jn extends He {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== he.date) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_type,
        expected: he.date,
        received: s.parsedType
      }), Ce;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return de(s, {
        code: ae.invalid_date
      }), Ce;
    }
    const n = new ar();
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
      }), n.dirty()) : nt.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Jn({
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
Jn.create = (t) => new Jn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: xe.ZodDate,
  ...ke(t)
});
class Oo extends He {
  _parse(e) {
    if (this._getType(e) !== he.symbol) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.symbol,
        received: n.parsedType
      }), Ce;
    }
    return yr(e.data);
  }
}
Oo.create = (t) => new Oo({
  typeName: xe.ZodSymbol,
  ...ke(t)
});
class fs extends He {
  _parse(e) {
    if (this._getType(e) !== he.undefined) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.undefined,
        received: n.parsedType
      }), Ce;
    }
    return yr(e.data);
  }
}
fs.create = (t) => new fs({
  typeName: xe.ZodUndefined,
  ...ke(t)
});
class hs extends He {
  _parse(e) {
    if (this._getType(e) !== he.null) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.null,
        received: n.parsedType
      }), Ce;
    }
    return yr(e.data);
  }
}
hs.create = (t) => new hs({
  typeName: xe.ZodNull,
  ...ke(t)
});
class Di extends He {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return yr(e.data);
  }
}
Di.create = (t) => new Di({
  typeName: xe.ZodAny,
  ...ke(t)
});
class Qn extends He {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return yr(e.data);
  }
}
Qn.create = (t) => new Qn({
  typeName: xe.ZodUnknown,
  ...ke(t)
});
class yn extends He {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return de(r, {
      code: ae.invalid_type,
      expected: he.never,
      received: r.parsedType
    }), Ce;
  }
}
yn.create = (t) => new yn({
  typeName: xe.ZodNever,
  ...ke(t)
});
class Io extends He {
  _parse(e) {
    if (this._getType(e) !== he.undefined) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.void,
        received: n.parsedType
      }), Ce;
    }
    return yr(e.data);
  }
}
Io.create = (t) => new Io({
  typeName: xe.ZodVoid,
  ...ke(t)
});
class zr extends He {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== he.array)
      return de(r, {
        code: ae.invalid_type,
        expected: he.array,
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
      return Promise.all([...r.data].map((a, o) => i.type._parseAsync(new rn(r, a, r.path, o)))).then((a) => ar.mergeArray(n, a));
    const s = [...r.data].map((a, o) => i.type._parseSync(new rn(r, a, r.path, o)));
    return ar.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new zr({
      ...this._def,
      minLength: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new zr({
      ...this._def,
      maxLength: { value: e, message: me.toString(r) }
    });
  }
  length(e, r) {
    return new zr({
      ...this._def,
      exactLength: { value: e, message: me.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
zr.create = (t, e) => new zr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: xe.ZodArray,
  ...ke(e)
});
function fi(t) {
  if (t instanceof Rt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = pn.create(fi(n));
    }
    return new Rt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof zr ? new zr({
      ...t._def,
      type: fi(t.element)
    }) : t instanceof pn ? pn.create(fi(t.unwrap())) : t instanceof ei ? ei.create(fi(t.unwrap())) : t instanceof nn ? nn.create(t.items.map((e) => fi(e))) : t;
}
class Rt extends He {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = nt.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== he.object) {
      const l = this._getOrReturnCtx(e);
      return de(l, {
        code: ae.invalid_type,
        expected: he.object,
        received: l.parsedType
      }), Ce;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof yn && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        a.includes(l) || o.push(l);
    const u = [];
    for (const l of a) {
      const f = s[l], d = i.data[l];
      u.push({
        key: { status: "valid", value: l },
        value: f._parse(new rn(i, d, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof yn) {
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
            new rn(i, d, i.path, f)
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
    }).then((l) => ar.mergeObjectSync(n, l)) : ar.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return me.errToObj, new Rt({
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
    return new Rt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Rt({
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
    return new Rt({
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
    return new Rt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: xe.ZodObject
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
    return new Rt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return nt.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Rt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return nt.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new Rt({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return fi(this);
  }
  partial(e) {
    const r = {};
    return nt.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new Rt({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return nt.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof pn; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new Rt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return od(nt.objectKeys(this.shape));
  }
}
Rt.create = (t, e) => new Rt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: xe.ZodObject,
  ...ke(e)
});
Rt.strictCreate = (t, e) => new Rt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: yn.create(),
  typeName: xe.ZodObject,
  ...ke(e)
});
Rt.lazycreate = (t, e) => new Rt({
  shape: t,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: xe.ZodObject,
  ...ke(e)
});
class ds extends He {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new qr(o.ctx.common.issues));
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
      const o = a.map((u) => new qr(u));
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
ds.create = (t, e) => new ds({
  options: t,
  typeName: xe.ZodUnion,
  ...ke(e)
});
const fo = (t) => t instanceof ys ? fo(t.schema) : t instanceof Br ? fo(t.innerType()) : t instanceof vs ? [t.value] : t instanceof Cn ? t.options : t instanceof ms ? Object.keys(t.enum) : t instanceof bs ? fo(t._def.innerType) : t instanceof fs ? [void 0] : t instanceof hs ? [null] : null;
class Yo extends He {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== he.object)
      return de(r, {
        code: ae.invalid_type,
        expected: he.object,
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
      const a = fo(s.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new Yo({
      typeName: xe.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...ke(n)
    });
  }
}
function cc(t, e) {
  const r = Sn(t), n = Sn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === he.object && n === he.object) {
    const i = nt.objectKeys(e), s = nt.objectKeys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of s) {
      const u = cc(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      a[o] = u.data;
    }
    return { valid: !0, data: a };
  } else if (r === he.array && n === he.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t[s], o = e[s], u = cc(a, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === he.date && n === he.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class ps extends He {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (oc(s) || oc(a))
        return Ce;
      const o = cc(s.value, a.value);
      return o.valid ? ((ac(s) || ac(a)) && r.dirty(), { status: r.value, value: o.data }) : (de(n, {
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
ps.create = (t, e, r) => new ps({
  left: t,
  right: e,
  typeName: xe.ZodIntersection,
  ...ke(r)
});
class nn extends He {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== he.array)
      return de(n, {
        code: ae.invalid_type,
        expected: he.array,
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
      return u ? u._parse(new rn(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => ar.mergeArray(r, a)) : ar.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new nn({
      ...this._def,
      rest: e
    });
  }
}
nn.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new nn({
    items: t,
    typeName: xe.ZodTuple,
    rest: null,
    ...ke(e)
  });
};
class gs extends He {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== he.object)
      return de(n, {
        code: ae.invalid_type,
        expected: he.object,
        received: n.parsedType
      }), Ce;
    const i = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: s._parse(new rn(n, o, n.path, o)),
        value: a._parse(new rn(n, n.data[o], n.path, o))
      });
    return n.common.async ? ar.mergeObjectAsync(r, i) : ar.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof He ? new gs({
      keyType: e,
      valueType: r,
      typeName: xe.ZodRecord,
      ...ke(n)
    }) : new gs({
      keyType: $r.create(),
      valueType: e,
      typeName: xe.ZodRecord,
      ...ke(r)
    });
  }
}
class Co extends He {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== he.map)
      return de(n, {
        code: ae.invalid_type,
        expected: he.map,
        received: n.parsedType
      }), Ce;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, u], l) => ({
      key: i._parse(new rn(n, o, n.path, [l, "key"])),
      value: s._parse(new rn(n, u, n.path, [l, "value"]))
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
Co.create = (t, e, r) => new Co({
  valueType: e,
  keyType: t,
  typeName: xe.ZodMap,
  ...ke(r)
});
class Xn extends He {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== he.set)
      return de(n, {
        code: ae.invalid_type,
        expected: he.set,
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
    const o = [...n.data.values()].map((u, l) => s._parse(new rn(n, u, n.path, l)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new Xn({
      ...this._def,
      minSize: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new Xn({
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
Xn.create = (t, e) => new Xn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: xe.ZodSet,
  ...ke(e)
});
class yi extends He {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== he.function)
      return de(r, {
        code: ae.invalid_type,
        expected: he.function,
        received: r.parsedType
      }), Ce;
    function n(o, u) {
      return So({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Eo(),
          us
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return So({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Eo(),
          us
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Oi ? yr(async (...o) => {
      const u = new qr([]), l = await this._def.args.parseAsync(o, s).catch((p) => {
        throw u.addIssue(n(o, p)), u;
      }), f = await a(...l);
      return await this._def.returns._def.type.parseAsync(f, s).catch((p) => {
        throw u.addIssue(i(f, p)), u;
      });
    }) : yr((...o) => {
      const u = this._def.args.safeParse(o, s);
      if (!u.success)
        throw new qr([n(o, u.error)]);
      const l = a(...u.data), f = this._def.returns.safeParse(l, s);
      if (!f.success)
        throw new qr([i(l, f.error)]);
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
    return new yi({
      ...this._def,
      args: nn.create(e).rest(Qn.create())
    });
  }
  returns(e) {
    return new yi({
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
    return new yi({
      args: e || nn.create([]).rest(Qn.create()),
      returns: r || Qn.create(),
      typeName: xe.ZodFunction,
      ...ke(n)
    });
  }
}
class ys extends He {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
ys.create = (t, e) => new ys({
  getter: t,
  typeName: xe.ZodLazy,
  ...ke(e)
});
class vs extends He {
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
vs.create = (t, e) => new vs({
  value: t,
  typeName: xe.ZodLiteral,
  ...ke(e)
});
function od(t, e) {
  return new Cn({
    values: t,
    typeName: xe.ZodEnum,
    ...ke(e)
  });
}
class Cn extends He {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return de(r, {
        expected: nt.joinValues(n),
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
    return yr(e.data);
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
    return Cn.create(e);
  }
  exclude(e) {
    return Cn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Cn.create = od;
class ms extends He {
  _parse(e) {
    const r = nt.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== he.string && n.parsedType !== he.number) {
      const i = nt.objectValues(r);
      return de(n, {
        expected: nt.joinValues(i),
        received: n.parsedType,
        code: ae.invalid_type
      }), Ce;
    }
    if (r.indexOf(e.data) === -1) {
      const i = nt.objectValues(r);
      return de(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: i
      }), Ce;
    }
    return yr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ms.create = (t, e) => new ms({
  values: t,
  typeName: xe.ZodNativeEnum,
  ...ke(e)
});
class Oi extends He {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== he.promise && r.common.async === !1)
      return de(r, {
        code: ae.invalid_type,
        expected: he.promise,
        received: r.parsedType
      }), Ce;
    const n = r.parsedType === he.promise ? r.data : Promise.resolve(r.data);
    return yr(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Oi.create = (t, e) => new Oi({
  type: t,
  typeName: xe.ZodPromise,
  ...ke(e)
});
class Br extends He {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === xe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        if (!xo(a))
          return a;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => xo(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({ status: r.value, value: o })) : a);
    nt.assertNever(i);
  }
}
Br.create = (t, e, r) => new Br({
  schema: t,
  typeName: xe.ZodEffects,
  effect: e,
  ...ke(r)
});
Br.createWithPreprocess = (t, e, r) => new Br({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: xe.ZodEffects,
  ...ke(r)
});
class pn extends He {
  _parse(e) {
    return this._getType(e) === he.undefined ? yr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
pn.create = (t, e) => new pn({
  innerType: t,
  typeName: xe.ZodOptional,
  ...ke(e)
});
class ei extends He {
  _parse(e) {
    return this._getType(e) === he.null ? yr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ei.create = (t, e) => new ei({
  innerType: t,
  typeName: xe.ZodNullable,
  ...ke(e)
});
class bs extends He {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === he.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
bs.create = (t, e) => new bs({
  innerType: t,
  typeName: xe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ke(e)
});
class Ro extends He {
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
    return Do(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new qr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new qr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ro.create = (t, e) => new Ro({
  innerType: t,
  typeName: xe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ke(e)
});
class To extends He {
  _parse(e) {
    if (this._getType(e) !== he.nan) {
      const n = this._getOrReturnCtx(e);
      return de(n, {
        code: ae.invalid_type,
        expected: he.nan,
        received: n.parsedType
      }), Ce;
    }
    return { status: "valid", value: e.data };
  }
}
To.create = (t) => new To({
  typeName: xe.ZodNaN,
  ...ke(t)
});
const N1 = Symbol("zod_brand");
class ad extends He {
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
class $s extends He {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? Ce : s.status === "dirty" ? (r.dirty(), sd(s.value)) : this._def.out._parseAsync({
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
    return new $s({
      in: e,
      out: r,
      typeName: xe.ZodPipeline
    });
  }
}
const cd = (t, e = {}, r) => t ? Di.create().superRefine((n, i) => {
  var s, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...l, fatal: u });
  }
}) : Di.create(), P1 = {
  object: Rt.lazycreate
};
var xe;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(xe || (xe = {}));
const L1 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => cd((r) => r instanceof t, e), ud = $r.create, ld = On.create, F1 = To.create, U1 = In.create, fd = ls.create, M1 = Jn.create, j1 = Oo.create, k1 = fs.create, $1 = hs.create, q1 = Di.create, z1 = Qn.create, B1 = yn.create, V1 = Io.create, K1 = zr.create, H1 = Rt.create, W1 = Rt.strictCreate, G1 = ds.create, Q1 = Yo.create, Z1 = ps.create, Y1 = nn.create, J1 = gs.create, X1 = Co.create, eE = Xn.create, tE = yi.create, rE = ys.create, nE = vs.create, iE = Cn.create, sE = ms.create, oE = Oi.create, ef = Br.create, aE = pn.create, cE = ei.create, uE = Br.createWithPreprocess, lE = $s.create, fE = () => ud().optional(), hE = () => ld().optional(), dE = () => fd().optional(), pE = {
  string: (t) => $r.create({ ...t, coerce: !0 }),
  number: (t) => On.create({ ...t, coerce: !0 }),
  boolean: (t) => ls.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => In.create({ ...t, coerce: !0 }),
  date: (t) => Jn.create({ ...t, coerce: !0 })
}, gE = Ce;
var Vr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: us,
  setErrorMap: b1,
  getErrorMap: Eo,
  makeIssue: So,
  EMPTY_PATH: w1,
  addIssueToContext: de,
  ParseStatus: ar,
  INVALID: Ce,
  DIRTY: sd,
  OK: yr,
  isAborted: oc,
  isDirty: ac,
  isValid: xo,
  isAsync: Do,
  get util() {
    return nt;
  },
  get objectUtil() {
    return sc;
  },
  ZodParsedType: he,
  getParsedType: Sn,
  ZodType: He,
  ZodString: $r,
  ZodNumber: On,
  ZodBigInt: In,
  ZodBoolean: ls,
  ZodDate: Jn,
  ZodSymbol: Oo,
  ZodUndefined: fs,
  ZodNull: hs,
  ZodAny: Di,
  ZodUnknown: Qn,
  ZodNever: yn,
  ZodVoid: Io,
  ZodArray: zr,
  ZodObject: Rt,
  ZodUnion: ds,
  ZodDiscriminatedUnion: Yo,
  ZodIntersection: ps,
  ZodTuple: nn,
  ZodRecord: gs,
  ZodMap: Co,
  ZodSet: Xn,
  ZodFunction: yi,
  ZodLazy: ys,
  ZodLiteral: vs,
  ZodEnum: Cn,
  ZodNativeEnum: ms,
  ZodPromise: Oi,
  ZodEffects: Br,
  ZodTransformer: Br,
  ZodOptional: pn,
  ZodNullable: ei,
  ZodDefault: bs,
  ZodCatch: Ro,
  ZodNaN: To,
  BRAND: N1,
  ZodBranded: ad,
  ZodPipeline: $s,
  custom: cd,
  Schema: He,
  ZodSchema: He,
  late: P1,
  get ZodFirstPartyTypeKind() {
    return xe;
  },
  coerce: pE,
  any: q1,
  array: K1,
  bigint: U1,
  boolean: fd,
  date: M1,
  discriminatedUnion: Q1,
  effect: ef,
  enum: iE,
  function: tE,
  instanceof: L1,
  intersection: Z1,
  lazy: rE,
  literal: nE,
  map: X1,
  nan: F1,
  nativeEnum: sE,
  never: B1,
  null: $1,
  nullable: cE,
  number: ld,
  object: H1,
  oboolean: dE,
  onumber: hE,
  optional: aE,
  ostring: fE,
  pipeline: lE,
  preprocess: uE,
  promise: oE,
  record: J1,
  set: eE,
  strictObject: W1,
  string: ud,
  symbol: j1,
  transformer: ef,
  tuple: Y1,
  undefined: k1,
  union: G1,
  unknown: z1,
  void: V1,
  NEVER: gE,
  ZodIssueCode: ae,
  quotelessJson: m1,
  ZodError: qr
});
const yE = /^aleo1.{58}$/i, vE = /^AViewKey1.{44}$/i, mE = /^APrivateKey1.{47}$/i, bE = /^at1.{60}$/i, wE = /^\d+field$/, _E = /^\d+u32$/, EE = /^\d+u64$/, ID = Vr.string().regex(yE), CD = Vr.string().regex(vE), RD = Vr.string().regex(mE), TD = Vr.string().regex(bE), AD = Vr.string().regex(wE), ND = Vr.string().regex(_E), PD = Vr.string().regex(EE);
var uc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(uc || (uc = {}));
var lc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(lc || (lc = {}));
var fc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(fc || (fc = {}));
var hc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(hc || (hc = {}));
var tf;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(tf || (tf = {}));
const LD = Vr.nativeEnum(uc), FD = Vr.nativeEnum(lc), UD = Vr.nativeEnum(hc), MD = Vr.nativeEnum(fc);
class jD extends Cr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class kD {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class $D extends Cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class qD {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class zD extends Cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class BD extends Cr {
  constructor(e) {
    super();
  }
}
class VD {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class KD {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class HD extends Cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class WD {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class GD extends Cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class QD {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class ZD {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class YD extends Ns {
  constructor() {
    super();
  }
}
class JD {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class XD extends Fr.EventEmitter {
  constructor() {
    super();
  }
}
class eO {
  constructor(e) {
    this.client = e;
  }
}
function hd(t) {
  Qt(() => (Dt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Dt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function SE(t) {
  Qt(() => (Dt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Dt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function dd(t) {
  Qt(() => (Dt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Dt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Kr() {
  const [t, e] = ts(void 0);
  return hd((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), dd((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), SE((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Qt(() => {
    async function r() {
      const i = await (await Dt()).getSession();
      e(i);
    }
    return r(), xi.on("session_change", r), () => {
      xi.off("session_change", r);
    };
  }, []), t;
}
function qs(t) {
  Qt(() => (Dt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Dt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const rf = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, l) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = l ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, i = () => e, o = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, o), o;
}, xE = (t) => t ? rf(t) : rf;
var dc = { exports: {} }, Ca = {}, to = { exports: {} }, Ra = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function DE() {
  if (nf)
    return Ra;
  nf = 1;
  var t = Tn;
  function e(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, p) {
    var v = p(), E = n({ inst: { value: v, getSnapshot: p } }), S = E[0].inst, D = E[1];
    return s(function() {
      S.value = v, S.getSnapshot = p, u(S) && D({ inst: S });
    }, [d, v, p]), i(function() {
      return u(S) && D({ inst: S }), d(function() {
        u(S) && D({ inst: S });
      });
    }, [d]), a(v), v;
  }
  function u(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var v = p();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function l(d, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : o;
  return Ra.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, Ra;
}
var Ta = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function OE() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Tn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(I) {
      {
        for (var w = arguments.length, b = new Array(w > 1 ? w - 1 : 0), g = 1; g < w; g++)
          b[g - 1] = arguments[g];
        n("error", I, b);
      }
    }
    function n(I, w, b) {
      {
        var g = e.ReactDebugCurrentFrame, c = g.getStackAddendum();
        c !== "" && (w += "%s", b = b.concat([c]));
        var y = b.map(function(T) {
          return String(T);
        });
        y.unshift("Warning: " + w), Function.prototype.apply.call(console[I], console, y);
      }
    }
    function i(I, w) {
      return I === w && (I !== 0 || 1 / I === 1 / w) || I !== I && w !== w;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, l = t.useDebugValue, f = !1, d = !1;
    function p(I, w, b) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = w();
      if (!d) {
        var c = w();
        s(g, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var y = a({
        inst: {
          value: g,
          getSnapshot: w
        }
      }), T = y[0].inst, P = y[1];
      return u(function() {
        T.value = g, T.getSnapshot = w, v(T) && P({
          inst: T
        });
      }, [I, g, w]), o(function() {
        v(T) && P({
          inst: T
        });
        var B = function() {
          v(T) && P({
            inst: T
          });
        };
        return I(B);
      }, [I]), l(g), g;
    }
    function v(I) {
      var w = I.getSnapshot, b = I.value;
      try {
        var g = w();
        return !s(b, g);
      } catch {
        return !0;
      }
    }
    function E(I, w, b) {
      return w();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !S, F = D ? E : p, _ = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : F;
    Ta.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ta;
}
var of;
function ou() {
  return of || (of = 1, process.env.NODE_ENV === "production" ? to.exports = DE() : to.exports = OE()), to.exports;
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
var af;
function IE() {
  if (af)
    return Ca;
  af = 1;
  var t = Tn, e = ou();
  function r(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return Ca.useSyncExternalStoreWithSelector = function(l, f, d, p, v) {
    var E = s(null);
    if (E.current === null) {
      var S = { hasValue: !1, value: null };
      E.current = S;
    } else
      S = E.current;
    E = o(function() {
      function F(g) {
        if (!_) {
          if (_ = !0, I = g, g = p(g), v !== void 0 && S.hasValue) {
            var c = S.value;
            if (v(c, g))
              return w = c;
          }
          return w = g;
        }
        if (c = w, n(I, g))
          return c;
        var y = p(g);
        return v !== void 0 && v(c, y) ? c : (I = g, w = y);
      }
      var _ = !1, I, w, b = d === void 0 ? null : d;
      return [function() {
        return F(f());
      }, b === null ? void 0 : function() {
        return F(b());
      }];
    }, [f, d, p, v]);
    var D = i(l, E[0], E[1]);
    return a(function() {
      S.hasValue = !0, S.value = D;
    }, [D]), u(D), D;
  }, Ca;
}
var Aa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function CE() {
  return cf || (cf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Tn, e = ou();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function l(f, d, p, v, E) {
      var S = s(null), D;
      S.current === null ? (D = {
        hasValue: !1,
        value: null
      }, S.current = D) : D = S.current;
      var F = o(function() {
        var b = !1, g, c, y = function(H) {
          if (!b) {
            b = !0, g = H;
            var ee = v(H);
            if (E !== void 0 && D.hasValue) {
              var N = D.value;
              if (E(N, ee))
                return c = N, N;
            }
            return c = ee, ee;
          }
          var $ = g, se = c;
          if (n($, H))
            return se;
          var Z = v(H);
          return E !== void 0 && E(se, Z) ? se : (g = H, c = Z, Z);
        }, T = p === void 0 ? null : p, P = function() {
          return y(d());
        }, B = T === null ? void 0 : function() {
          return y(T());
        };
        return [P, B];
      }, [d, p, v, E]), _ = F[0], I = F[1], w = i(f, _, I);
      return a(function() {
        D.hasValue = !0, D.value = w;
      }, [w]), u(w), w;
    }
    Aa.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Aa;
}
process.env.NODE_ENV === "production" ? dc.exports = IE() : dc.exports = CE();
var RE = dc.exports;
const TE = /* @__PURE__ */ jo(RE), { useDebugValue: AE } = Tn, { useSyncExternalStoreWithSelector: NE } = TE;
function PE(t, e = t.getState, r) {
  const n = NE(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return AE(n), n;
}
const uf = (t) => {
  const e = typeof t == "function" ? xE(t) : t, r = (n, i) => PE(e, n, i);
  return Object.assign(r, e), r;
}, LE = (t) => t ? uf(t) : uf;
function FE(t, e) {
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
const ws = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return ws(n)(r);
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
        return ws(n)(r);
      }
    };
  }
}, UE = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (D) => D,
    version: 0,
    merge: (D, F) => ({
      ...F,
      ...D
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
      (...D) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...D);
      },
      n,
      i
    );
  const f = ws(s.serialize), d = () => {
    const D = s.partialize({ ...n() });
    let F;
    const _ = f({ state: D, version: s.version }).then(
      (I) => l.setItem(s.name, I)
    ).catch((I) => {
      F = I;
    });
    if (F)
      throw F;
    return _;
  }, p = i.setState;
  i.setState = (D, F) => {
    p(D, F), d();
  };
  const v = t(
    (...D) => {
      r(...D), d();
    },
    n,
    i
  );
  let E;
  const S = () => {
    var D;
    if (!l)
      return;
    a = !1, o.forEach((_) => _(n()));
    const F = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, n())) || void 0;
    return ws(l.getItem.bind(l))(s.name).then((_) => {
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
      var I;
      return E = s.merge(
        _,
        (I = n()) != null ? I : v
      ), r(E, !0), d();
    }).then(() => {
      F == null || F(E, void 0), a = !0, u.forEach((_) => _(E));
    }).catch((_) => {
      F == null || F(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (D) => {
      s = {
        ...s,
        ...D
      }, D.getStorage && (l = D.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => S(),
    hasHydrated: () => a,
    onHydrate: (D) => (o.add(D), () => {
      o.delete(D);
    }),
    onFinishHydration: (D) => (u.add(D), () => {
      u.delete(D);
    })
  }, S(), E || v;
}, ME = (t, e) => (r, n, i) => {
  let s = {
    storage: FE(() => localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, D) => ({
      ...D,
      ...S
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let l = s.storage;
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
  const f = () => {
    const S = s.partialize({ ...n() });
    return l.setItem(s.name, {
      state: S,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (S, D) => {
    d(S, D), f();
  };
  const p = t(
    (...S) => {
      r(...S), f();
    },
    n,
    i
  );
  let v;
  const E = () => {
    var S, D;
    if (!l)
      return;
    a = !1, o.forEach((_) => {
      var I;
      return _((I = n()) != null ? I : p);
    });
    const F = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, (S = n()) != null ? S : p)) || void 0;
    return ws(l.getItem.bind(l))(s.name).then((_) => {
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
      var I;
      return v = s.merge(
        _,
        (I = n()) != null ? I : p
      ), r(v, !0), f();
    }).then(() => {
      F == null || F(v, void 0), v = n(), a = !0, u.forEach((_) => _(v));
    }).catch((_) => {
      F == null || F(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (S) => {
      s = {
        ...s,
        ...S
      }, S.storage && (l = S.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (S) => (o.add(S), () => {
      o.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, s.skipHydration || E(), v || p;
}, jE = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? UE(t, e) : ME(t, e), kE = jE, Pn = LE()(
  kE((t, e) => ({
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
class zs {
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
const _s = typeof window > "u" || "Deno" in window;
function Lr() {
}
function $E(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function pc(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function pd(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Xi(t, e, r) {
  return Jo(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function En(t, e, r) {
  return Jo(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function lf(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o
  } = t;
  if (Jo(a)) {
    if (n) {
      if (e.queryHash !== au(a, e.options))
        return !1;
    } else if (!hi(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function ff(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: i,
    mutationKey: s
  } = t;
  if (Jo(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Wn(e.options.mutationKey) !== Wn(s))
        return !1;
    } else if (!hi(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || i && !i(e));
}
function au(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Wn)(t);
}
function Wn(t) {
  return JSON.stringify(t, (e, r) => yc(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r);
}
function hi(t, e) {
  return gd(t, e);
}
function gd(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !gd(t[r], e[r])) : !1;
}
function yd(t, e) {
  if (t === e)
    return t;
  const r = hf(t) && hf(e);
  if (r || yc(t) && yc(e)) {
    const n = r ? t.length : Object.keys(t).length, i = r ? e : Object.keys(e), s = i.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < s; u++) {
      const l = r ? u : i[u];
      a[l] = yd(t[l], e[l]), a[l] === t[l] && o++;
    }
    return n === s && o === n ? t : a;
  }
  return e;
}
function gc(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function hf(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function yc(t) {
  if (!df(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!df(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function df(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Jo(t) {
  return Array.isArray(t);
}
function vd(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function pf(t) {
  vd(0).then(t);
}
function qE() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function vc(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? yd(t, e) : e;
}
class zE extends zs {
  constructor() {
    super(), this.setup = (e) => {
      if (!_s && window.addEventListener) {
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
const Ao = new zE(), gf = ["online", "offline"];
class BE extends zs {
  constructor() {
    super(), this.setup = (e) => {
      if (!_s && window.addEventListener) {
        const r = () => e();
        return gf.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          gf.forEach((n) => {
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
const Es = new BE();
function VE(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Xo(t) {
  return (t ?? "online") === "online" ? Es.isOnline() : !0;
}
class md {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function ho(t) {
  return t instanceof md;
}
function bd(t) {
  let e = !1, r = 0, n = !1, i, s, a;
  const o = new Promise((D, F) => {
    s = D, a = F;
  }), u = (D) => {
    n || (v(new md(D)), t.abort == null || t.abort());
  }, l = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !Ao.isFocused() || t.networkMode !== "always" && !Es.isOnline(), p = (D) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(D), i == null || i(), s(D));
  }, v = (D) => {
    n || (n = !0, t.onError == null || t.onError(D), i == null || i(), a(D));
  }, E = () => new Promise((D) => {
    i = (F) => {
      const _ = n || !d();
      return _ && D(F), _;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, n || t.onContinue == null || t.onContinue();
  }), S = () => {
    if (n)
      return;
    let D;
    try {
      D = t.fn();
    } catch (F) {
      D = Promise.reject(F);
    }
    Promise.resolve(D).then(p).catch((F) => {
      var _, I;
      if (n)
        return;
      const w = (_ = t.retry) != null ? _ : 3, b = (I = t.retryDelay) != null ? I : VE, g = typeof b == "function" ? b(r, F) : b, c = w === !0 || typeof w == "number" && r < w || typeof w == "function" && w(r, F);
      if (e || !c) {
        v(F);
        return;
      }
      r++, t.onFail == null || t.onFail(r, F), vd(g).then(() => {
        if (d())
          return E();
      }).then(() => {
        e ? v(F) : S();
      });
    });
  };
  return Xo(t.networkMode) ? S() : E().then(S), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: l,
    continueRetry: f
  };
}
const cu = console;
function KE() {
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
    e ? t.push(f) : pf(() => {
      r(f);
    });
  }, a = (f) => (...d) => {
    s(() => {
      f(...d);
    });
  }, o = () => {
    const f = t;
    t = [], f.length && pf(() => {
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
const Mt = KE();
class wd {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), pc(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (_s ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class HE extends wd {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || cu, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || WE(this.options), this.state = this.initialState, this.scheduleGc();
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
    const n = vc(this.state.data, e, this.options);
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
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(Lr).catch(Lr) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !pd(this.state.dataUpdatedAt, e);
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
      const v = this.observers.find((E) => E.options.queryFn);
      v && this.setOptions(v.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = qE(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (v) => {
      Object.defineProperty(v, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const l = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
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
    const p = (v) => {
      if (ho(v) && v.silent || this.dispatch({
        type: "error",
        error: v
      }), !ho(v)) {
        var E, S, D, F;
        (E = (S = this.cache.config).onError) == null || E.call(S, v, this), (D = (F = this.cache.config).onSettled) == null || D.call(F, this.state.data, v, this), process.env.NODE_ENV !== "production" && this.logger.error(v);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = bd({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (v) => {
        var E, S, D, F;
        if (typeof v > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), p(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(v), (E = (S = this.cache.config).onSuccess) == null || E.call(S, v, this), (D = (F = this.cache.config).onSettled) == null || D.call(F, v, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: p,
      onFail: (v, E) => {
        this.dispatch({
          type: "failed",
          failureCount: v,
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
            fetchStatus: Xo(this.options.networkMode) ? "fetching" : "paused",
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
          return ho(a) && a.revert && this.revertState ? {
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
    this.state = r(this.state), Mt.batch(() => {
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
function WE(t) {
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
class GE extends zs {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var i;
    const s = r.queryKey, a = (i = r.queryHash) != null ? i : au(s, r);
    let o = this.get(a);
    return o || (o = new HE({
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
    Mt.batch(() => {
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
    const [n] = En(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => lf(n, i));
  }
  findAll(e, r) {
    const [n] = En(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => lf(n, i)) : this.queries;
  }
  notify(e) {
    Mt.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    Mt.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Mt.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class QE extends wd {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || cu, this.observers = [], this.state = e.state || ZE(), this.setOptions(e.options), this.scheduleGc();
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
      return this.retryer = bd({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, T) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: T
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
        var d, p, v, E;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (p = this.mutationCache.config).onMutate) == null ? void 0 : d.call(p, this.state.variables, this));
        const y = await ((v = (E = this.options).onMutate) == null ? void 0 : v.call(E, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
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
        var S, D, F, _, I, w, b, g;
        throw await ((S = (D = this.mutationCache.config).onError) == null ? void 0 : S.call(D, c, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(c), await ((F = (_ = this.options).onError) == null ? void 0 : F.call(_, c, this.state.variables, this.state.context)), await ((I = (w = this.mutationCache.config).onSettled) == null ? void 0 : I.call(w, void 0, c, this.state.variables, this.state.context, this)), await ((b = (g = this.options).onSettled) == null ? void 0 : b.call(g, void 0, c, this.state.variables, this.state.context)), c;
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
            isPaused: !Xo(this.options.networkMode),
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
    this.state = r(this.state), Mt.batch(() => {
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
function ZE() {
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
class YE extends zs {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const i = new QE({
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
    Mt.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => ff(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => ff(e, r));
  }
  notify(e) {
    Mt.batch(() => {
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
      return Mt.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(Lr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function JE() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, i, s, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore, l = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", p = ((s = t.state.data) == null ? void 0 : s.pages) || [], v = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let E = v, S = !1;
        const D = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var c;
              if ((c = t.signal) != null && c.aborted)
                S = !0;
              else {
                var y;
                (y = t.signal) == null || y.addEventListener("abort", () => {
                  S = !0;
                });
              }
              return t.signal;
            }
          });
        }, F = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), _ = (g, c, y, T) => (E = T ? [c, ...E] : [...E, c], T ? [y, ...g] : [...g, y]), I = (g, c, y, T) => {
          if (S)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !c && g.length)
            return Promise.resolve(g);
          const P = {
            queryKey: t.queryKey,
            pageParam: y,
            meta: t.options.meta
          };
          D(P);
          const B = F(P);
          return Promise.resolve(B).then((ee) => _(g, y, ee, T));
        };
        let w;
        if (!p.length)
          w = I([]);
        else if (f) {
          const g = typeof l < "u", c = g ? l : yf(t.options, p);
          w = I(p, g, c);
        } else if (d) {
          const g = typeof l < "u", c = g ? l : XE(t.options, p);
          w = I(p, g, c, !0);
        } else {
          E = [];
          const g = typeof t.options.getNextPageParam > "u";
          w = (o && p[0] ? o(p[0], 0, p) : !0) ? I([], g, v[0]) : Promise.resolve(_([], v[0], p[0]));
          for (let y = 1; y < p.length; y++)
            w = w.then((T) => {
              if (o && p[y] ? o(p[y], y, p) : !0) {
                const B = g ? v[y] : yf(t.options, T);
                return I(T, g, B);
              }
              return Promise.resolve(_(T, v[y], p[y]));
            });
        }
        return w.then((g) => ({
          pages: g,
          pageParams: E
        }));
      };
    }
  };
}
function yf(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function XE(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class eS {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new GE(), this.mutationCache = e.mutationCache || new YE(), this.logger = e.logger || cu, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Ao.subscribe(() => {
      Ao.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Es.subscribe(() => {
      Es.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = En(e, r);
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
    const i = Xi(e, r, n), s = this.getQueryData(i.queryKey);
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
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, a = $E(r, s);
    if (typeof a > "u")
      return;
    const o = Xi(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return Mt.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = En(e, r), i = this.queryCache;
    Mt.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(e, r, n) {
    const [i, s] = En(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...i
    };
    return Mt.batch(() => (a.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, s)));
  }
  cancelQueries(e, r, n) {
    const [i, s = {}] = En(e, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const a = Mt.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(s)));
    return Promise.all(a).then(Lr).catch(Lr);
  }
  invalidateQueries(e, r, n) {
    const [i, s] = En(e, r, n);
    return Mt.batch(() => {
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
    const [i, s] = En(e, r, n), a = Mt.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var l;
      return u.fetch(void 0, {
        ...s,
        cancelRefetch: (l = s == null ? void 0 : s.cancelRefetch) != null ? l : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(Lr);
    return s != null && s.throwOnError || (o = o.catch(Lr)), o;
  }
  fetchQuery(e, r, n) {
    const i = Xi(e, r, n), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(Lr).catch(Lr);
  }
  fetchInfiniteQuery(e, r, n) {
    const i = Xi(e, r, n);
    return i.behavior = JE(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(Lr).catch(Lr);
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
    const n = this.queryDefaults.find((i) => Wn(e) === Wn(i.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => hi(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => hi(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((i) => Wn(e) === Wn(i.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => hi(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => hi(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
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
    return !r.queryHash && r.queryKey && (r.queryHash = au(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
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
class tS extends zs {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), vf(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return mc(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return mc(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), gc(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && mf(this.currentQuery, i, this.options, n) && this.executeFetch(), this.updateResult(r), s && (this.currentQuery !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    s && (this.currentQuery !== i || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return nS(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
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
    return e != null && e.throwOnError || (r = r.catch(Lr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), _s || this.currentResult.isStale || !pc(this.options.staleTime))
      return;
    const r = pd(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(_s || this.options.enabled === !1 || !pc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Ao.isFocused()) && this.executeFetch();
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
      dataUpdatedAt: p,
      error: v,
      errorUpdatedAt: E,
      fetchStatus: S,
      status: D
    } = d, F = !1, _ = !1, I;
    if (r._optimisticResults) {
      const y = this.hasListeners(), T = !y && vf(e, r), P = y && mf(e, n, r, i);
      (T || P) && (S = Xo(e.options.networkMode) ? "fetching" : "paused", p || (D = "loading")), r._optimisticResults === "isRestoring" && (S = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && D !== "error")
      I = f.data, p = f.dataUpdatedAt, D = f.status, F = !0;
    else if (r.select && typeof d.data < "u")
      if (s && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        I = this.selectResult;
      else
        try {
          this.selectFn = r.select, I = r.select(d.data), I = vc(s == null ? void 0 : s.data, I, r), this.selectResult = I, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      I = d.data;
    if (typeof r.placeholderData < "u" && typeof I > "u" && D === "loading") {
      let y;
      if (s != null && s.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        y = s.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (T) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(T), this.selectError = T;
        }
      typeof y < "u" && (D = "success", I = vc(s == null ? void 0 : s.data, y, r), _ = !0);
    }
    this.selectError && (v = this.selectError, I = this.selectResult, E = Date.now(), D = "error");
    const w = S === "fetching", b = D === "loading", g = D === "error";
    return {
      status: D,
      fetchStatus: S,
      isLoading: b,
      isSuccess: D === "success",
      isError: g,
      isInitialLoading: b && w,
      data: I,
      dataUpdatedAt: p,
      error: v,
      errorUpdatedAt: E,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !b,
      isLoadingError: g && d.dataUpdatedAt === 0,
      isPaused: S === "paused",
      isPlaceholderData: _,
      isPreviousData: F,
      isRefetchError: g && d.dataUpdatedAt !== 0,
      isStale: uu(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, gc(n, r))
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
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((l) => {
        const f = l;
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
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !ho(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    Mt.batch(() => {
      if (e.onSuccess) {
        var r, n, i, s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, l;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (l = this.options).onSettled) == null || u.call(l, void 0, this.currentResult.error);
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
function rS(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function vf(t, e) {
  return rS(t, e) || t.state.dataUpdatedAt > 0 && mc(t, e, e.refetchOnMount);
}
function mc(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && uu(t, e);
  }
  return !1;
}
function mf(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && uu(t, r);
}
function uu(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function nS(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !gc(t.getCurrentResult(), e);
}
var iS = ou();
const sS = iS.useSyncExternalStore, bf = /* @__PURE__ */ dr.createContext(void 0), _d = /* @__PURE__ */ dr.createContext(!1);
function Ed(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = bf), window.ReactQueryClientContext) : bf);
}
const Sd = ({
  context: t
} = {}) => {
  const e = dr.useContext(Ed(t, dr.useContext(_d)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, oS = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  dr.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = Ed(r, n);
  return /* @__PURE__ */ dr.createElement(_d.Provider, {
    value: !r && n
  }, /* @__PURE__ */ dr.createElement(i.Provider, {
    value: t
  }, e));
}, xd = /* @__PURE__ */ dr.createContext(!1), aS = () => dr.useContext(xd);
xd.Provider;
function cS() {
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
const uS = /* @__PURE__ */ dr.createContext(cS()), lS = () => dr.useContext(uS);
function fS(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const hS = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, dS = (t) => {
  dr.useEffect(() => {
    t.clearReset();
  }, [t]);
}, pS = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && fS(r, [t.error, n]), gS = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, yS = (t, e) => t.isLoading && t.isFetching && !e, vS = (t, e, r) => (t == null ? void 0 : t.suspense) && yS(e, r), mS = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function bS(t, e) {
  const r = Sd({
    context: t.context
  }), n = aS(), i = lS(), s = r.defaultQueryOptions(t);
  s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = Mt.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = Mt.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = Mt.batchCalls(s.onSettled)), gS(s), hS(s, i), dS(i);
  const [a] = dr.useState(() => new e(r, s)), o = a.getOptimisticResult(s);
  if (sS(dr.useCallback((u) => {
    const l = n ? () => {
    } : a.subscribe(Mt.batchCalls(u));
    return a.updateResult(), l;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), dr.useEffect(() => {
    a.setOptions(s, {
      listeners: !1
    });
  }, [s, a]), vS(s, o, n))
    throw mS(s, a, i);
  if (pS({
    result: o,
    errorResetBoundary: i,
    useErrorBoundary: s.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return s.notifyOnChangeProps ? o : a.trackResult(o);
}
function wS(t, e, r) {
  const n = Xi(t, e, r);
  return bS(n, tS);
}
function lu() {
  const [t, e] = ts(void 0), [r, n] = ts(void 0), [i, s] = ts(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
async function Dd(t, e) {
  const n = await (await Dt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function ea({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return wS(
    t,
    async () => Dd(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Pi(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: a } = lu();
  async function o(u) {
    try {
      a(!0), s(void 0);
      const l = await Dd(t ?? u);
      return i(l), l;
    } catch (l) {
      throw s(l), l;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const wf = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, tO = () => {
  const t = Kr(), e = "aleo:1", [r, n] = Pn((l) => [l.account, l.setAccount]), { request: i, data: s, error: a, loading: o } = Pi({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  qs(({ params: l, topic: f }) => {
    if (l.event.name === "accountSelected" && t && t.topic === f) {
      const v = l.event.data.address, E = l.chainId.split(":")[0], S = l.chainId.split(":")[1];
      n({
        network: E,
        chainId: S,
        address: v,
        shortenedAddress: wf(v)
      });
    }
  }), dd(({ params: l, topic: f }) => {
    const p = l.event.data.address, v = l.chainId.split(":")[0], E = l.chainId.split(":")[1];
    n({
      network: v,
      chainId: E,
      address: p,
      shortenedAddress: wf(p)
    });
  }), hd(({ params: l, topic: f }) => {
    n(void 0);
  }), Qt(() => {
    t && !o && i();
  }, [t == null ? void 0 : t.topic]), Qt(() => {
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
}, rO = ({ address: t, multisig: e }) => {
  const r = Kr(), [n] = Pn((p) => [p.account]), i = "aleo:1", { refetch: s, data: a, error: o, isLoading: u } = ea({
    queryKey: ["useBalance", t ?? (n == null ? void 0 : n.address) ?? "", e],
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
  qs(({ params: p, topic: v }) => {
    const E = p.event.name, S = p.event.address ?? p.event.data.address;
    ["accountSelected", "selectedAccountSynced", "sharedAccountSynced"].includes(E) && r && r.topic === v && S === (n == null ? void 0 : n.address) && !u && s();
  }), Qt(() => {
    r && !u && s();
  }, [r == null ? void 0 : r.topic]);
  const l = o ? o.message : a && a.error, f = a;
  return { balances: f == null ? void 0 : f.balances, error: l, loading: u };
};
function nO() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = lu();
  async function a() {
    try {
      s(!0), i(void 0);
      const u = await (await Dt()).connect({
        requiredNamespaces: {
          aleo: {
            methods: iu,
            chains: Zo,
            events: su
          }
        }
      });
      return n(u), xi.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), u;
    } catch (o) {
      throw i(o), o;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: a };
}
const iO = () => {
  const t = Kr(), { request: e, data: r, error: n, loading: i } = Pi({
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
var bc = { exports: {} }, Na, _f;
function _S() {
  if (_f)
    return Na;
  _f = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Na = function(f, d) {
    d = d || {};
    var p = typeof f;
    if (p === "string" && f.length > 0)
      return a(f);
    if (p === "number" && isFinite(f))
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
        var p = parseFloat(d[1]), v = (d[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * s;
          case "weeks":
          case "week":
          case "w":
            return p * i;
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
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? l(f, d, n, "day") : d >= r ? l(f, d, r, "hour") : d >= e ? l(f, d, e, "minute") : d >= t ? l(f, d, t, "second") : f + " ms";
  }
  function l(f, d, p, v) {
    var E = d >= p * 1.5;
    return Math.round(f / p) + " " + v + (E ? "s" : "");
  }
  return Na;
}
function ES(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = a, r.humanize = _S(), r.destroy = l, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let p = 0; p < f.length; p++)
      d = (d << 5) - d + f.charCodeAt(p), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, p = null, v, E;
    function S(...D) {
      if (!S.enabled)
        return;
      const F = S, _ = Number(/* @__PURE__ */ new Date()), I = _ - (d || _);
      F.diff = I, F.prev = d, F.curr = _, d = _, D[0] = r.coerce(D[0]), typeof D[0] != "string" && D.unshift("%O");
      let w = 0;
      D[0] = D[0].replace(/%([a-zA-Z%])/g, (g, c) => {
        if (g === "%%")
          return "%";
        w++;
        const y = r.formatters[c];
        if (typeof y == "function") {
          const T = D[w];
          g = y.call(F, T), D.splice(w, 1), w--;
        }
        return g;
      }), r.formatArgs.call(F, D), (F.log || r.log).apply(F, D);
    }
    return S.namespace = f, S.useColors = r.useColors(), S.color = r.selectColor(f), S.extend = n, S.destroy = r.destroy, Object.defineProperty(S, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (v !== r.namespaces && (v = r.namespaces, E = r.enabled(f)), E),
      set: (D) => {
        p = D;
      }
    }), typeof r.init == "function" && r.init(S), S;
  }
  function n(f, d) {
    const p = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return p.log = this.log, p;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const p = (typeof f == "string" ? f : "").split(/[\s,]+/), v = p.length;
    for (d = 0; d < v; d++)
      p[d] && (f = p[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
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
    let d, p;
    for (d = 0, p = r.skips.length; d < p; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, p = r.names.length; d < p; d++)
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
var SS = ES;
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
    u[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (f++, p === "%c" && (d = f));
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
  t.exports = SS(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(bc, bc.exports);
var xS = bc.exports;
const DS = /* @__PURE__ */ jo(xS), fu = DS("wallet:sdk");
fu.enabled = !0;
const sO = (t) => {
  fu("useDecrypt", t);
  const e = Kr(), { request: r, data: n, error: i, loading: s } = Pi({
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
}, OS = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Od(t, e) {
  const { message: r, code: n } = OS[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function oO() {
  const t = Kr(), { error: e, loading: r, setError: n, setLoading: i } = lu();
  async function s() {
    try {
      i(!0), n(void 0), await (await Dt()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: Od("USER_DISCONNECTED")
      }), xi.emit("session_change"), Pn.setState({ account: void 0 });
    } catch (a) {
      throw n(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: r, disconnect: s };
}
const aO = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Kr(), [i] = Pn((E) => [E.account]), { refetch: s, data: a, error: o, isLoading: u } = ea({
    queryKey: ["useEvent", i == null ? void 0 : i.address, e, r, t ?? ""],
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
  qs(({ params: E, topic: S }) => {
    const D = E.event.name, F = E.event.address ?? E.event.data.address;
    D === "selectedAccountSynced" && n && n.topic === S && F === (i == null ? void 0 : i.address) && !u && s();
  });
  const l = !!n && !!i;
  Qt(() => {
    l && !u && s();
  }, [l]);
  const f = () => {
    !!n && !!i && !u && s();
  }, d = o ? o.message : a && a.error, p = a, v = p == null ? void 0 : p.event;
  return { fetchEvent: f, event: v, error: d, loading: u };
}, cO = ({ filter: t, page: e }) => {
  const r = Kr(), [n] = Pn((E) => [E.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: i, data: s, error: a, isLoading: o } = ea({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e],
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
  qs(({ id: E, params: S, topic: D }) => {
    const F = S.event.name, _ = S.event.address ?? S.event.data.address;
    F === "selectedAccountSynced" && r && r.topic === D && _ === (n == null ? void 0 : n.address) && !o && i();
  });
  const u = !!r && !!n;
  Qt(() => {
    u && !o && i();
  }, [u]);
  const l = () => {
    !!r && !!n && !o && i();
  }, f = a ? a.message : s && s.error, d = s, p = d == null ? void 0 : d.events, v = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: l, events: p, error: f, loading: o, page: e, pageCount: v };
}, uO = (t) => {
  const e = Kr(), { request: r, data: n, error: i, loading: s } = Pi({
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
}, lO = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, fO = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const i = Kr(), [s, a] = Pn((F) => [
    F.chainId,
    F.account
  ]), { refetch: o, data: u, error: l, isLoading: f } = ea({
    queryKey: ["useRecords", a == null ? void 0 : a.address, t, e, r, n],
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
  qs(({ params: F }) => {
    const _ = F.event.name;
    (_ === "selectedAccountSynced" && !e || _ === "sharedAccountSynced" && e) && o();
  });
  const p = () => {
    d && !f && o();
  }, v = l ? l.message : u && u.error, E = u, S = E == null ? void 0 : E.records, D = (E == null ? void 0 : E.pageCount) ?? 0;
  return { fetchPage: p, records: S, error: v, loading: f, page: n, pageCount: D };
}, hO = (t, e) => {
  const r = Kr(), { request: n, data: i, error: s, loading: a } = Pi({
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
}, dO = (t) => {
  const e = Kr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: a } = Pi({
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
    t && (fu("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, pO = async () => {
  const t = await Dt(), e = await t.getSession(), r = "aleo:1";
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
    return Pn.setState({ account: n.account }), n;
  } catch (n) {
    const i = n.message;
    return console.error("getAccount error", i), { error: i };
  }
}, gO = async ({ address: t }) => {
  const e = await Dt(), r = await e.getSession(), n = "aleo:1";
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
}, yO = async () => {
  const t = await Dt();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: iu,
          chains: Zo,
          events: su
        }
      }
    });
    return xi.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, vO = async (t) => {
  const e = await Dt(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, mO = async () => {
  const t = await Dt(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
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
}, bO = async (t) => {
  const e = await Dt(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, wO = async () => {
  const t = await Dt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: Od("USER_DISCONNECTED"),
      topic: e.topic
    }), xi.emit("session_change"), Pn.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, _O = async ({
  id: t,
  address: e
}) => {
  const r = await Dt(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
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
}, EO = async (t) => {
  const e = await Dt(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, SO = async (t) => {
  const e = await Dt(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
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
}, xO = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await Dt(), i = await (n == null ? void 0 : n.getSession()), s = "aleo:1";
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
}, DO = async ({
  message: t,
  address: e
}) => {
  const r = await Dt(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
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
}, OO = 50;
var wc = { exports: {} }, Qi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef;
function IS() {
  if (Ef)
    return Qi;
  Ef = 1;
  var t = Tn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, l) {
    var f, d = {}, p = null, v = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: p, ref: v, props: d, _owner: i.current };
  }
  return Qi.Fragment = r, Qi.jsx = a, Qi.jsxs = a, Qi;
}
var Zi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function CS() {
  return Sf || (Sf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Tn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, S = "@@iterator";
    function D(R) {
      if (R === null || typeof R != "object")
        return null;
      var K = E && R[E] || R[S];
      return typeof K == "function" ? K : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(R) {
      {
        for (var K = arguments.length, ce = new Array(K > 1 ? K - 1 : 0), Ee = 1; Ee < K; Ee++)
          ce[Ee - 1] = arguments[Ee];
        I("error", R, ce);
      }
    }
    function I(R, K, ce) {
      {
        var Ee = F.ReactDebugCurrentFrame, Xe = Ee.getStackAddendum();
        Xe !== "" && (K += "%s", ce = ce.concat([Xe]));
        var Ve = ce.map(function(We) {
          return String(We);
        });
        Ve.unshift("Warning: " + K), Function.prototype.apply.call(console[R], console, Ve);
      }
    }
    var w = !1, b = !1, g = !1, c = !1, y = !1, T;
    T = Symbol.for("react.module.reference");
    function P(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === s || y || R === i || R === l || R === f || c || R === v || w || b || g || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === d || R.$$typeof === a || R.$$typeof === o || R.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === T || R.getModuleId !== void 0));
    }
    function B(R, K, ce) {
      var Ee = R.displayName;
      if (Ee)
        return Ee;
      var Xe = K.displayName || K.name || "";
      return Xe !== "" ? ce + "(" + Xe + ")" : ce;
    }
    function H(R) {
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
            return H(K) + ".Consumer";
          case a:
            var ce = R;
            return H(ce._context) + ".Provider";
          case u:
            return B(R, R.render, "ForwardRef");
          case d:
            var Ee = R.displayName || null;
            return Ee !== null ? Ee : ee(R.type) || "Memo";
          case p: {
            var Xe = R, Ve = Xe._payload, We = Xe._init;
            try {
              return ee(We(Ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, $ = 0, se, Z, G, Y, W, J, _e;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function be() {
      {
        if ($ === 0) {
          se = console.log, Z = console.info, G = console.warn, Y = console.error, W = console.group, J = console.groupCollapsed, _e = console.groupEnd;
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
    function fe() {
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
              value: G
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
              value: _e
            })
          });
        }
        $ < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = F.ReactCurrentDispatcher, z;
    function q(R, K, ce) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var Ee = Xe.stack.trim().match(/\n( *(at )?)/);
            z = Ee && Ee[1] || "";
          }
        return `
` + z + R;
      }
    }
    var U = !1, h;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      h = new A();
    }
    function oe(R, K) {
      if (!R || U)
        return "";
      {
        var ce = h.get(R);
        if (ce !== void 0)
          return ce;
      }
      var Ee;
      U = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ve;
      Ve = ve.current, ve.current = null, be();
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
            } catch (Wt) {
              Ee = Wt;
            }
            Reflect.construct(R, [], We);
          } else {
            try {
              We.call();
            } catch (Wt) {
              Ee = Wt;
            }
            R.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Wt) {
            Ee = Wt;
          }
          R();
        }
      } catch (Wt) {
        if (Wt && Ee && typeof Wt.stack == "string") {
          for (var Be = Wt.stack.split(`
`), $t = Ee.stack.split(`
`), yt = Be.length - 1, St = $t.length - 1; yt >= 1 && St >= 0 && Be[yt] !== $t[St]; )
            St--;
          for (; yt >= 1 && St >= 0; yt--, St--)
            if (Be[yt] !== $t[St]) {
              if (yt !== 1 || St !== 1)
                do
                  if (yt--, St--, St < 0 || Be[yt] !== $t[St]) {
                    var Pt = `
` + Be[yt].replace(" at new ", " at ");
                    return R.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", R.displayName)), typeof R == "function" && h.set(R, Pt), Pt;
                  }
                while (yt >= 1 && St >= 0);
              break;
            }
        }
      } finally {
        U = !1, ve.current = Ve, fe(), Error.prepareStackTrace = Xe;
      }
      var Wr = R ? R.displayName || R.name : "", Ln = Wr ? q(Wr) : "";
      return typeof R == "function" && h.set(R, Ln), Ln;
    }
    function le(R, K, ce) {
      return oe(R, !1);
    }
    function $e(R) {
      var K = R.prototype;
      return !!(K && K.isReactComponent);
    }
    function De(R, K, ce) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return oe(R, $e(R));
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
            return De(R.type, K, ce);
          case p: {
            var Ee = R, Xe = Ee._payload, Ve = Ee._init;
            try {
              return De(Ve(Xe), K, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, Ge = {}, ot = F.ReactDebugCurrentFrame;
    function it(R) {
      if (R) {
        var K = R._owner, ce = De(R.type, R._source, K ? K.type : null);
        ot.setExtraStackFrame(ce);
      } else
        ot.setExtraStackFrame(null);
    }
    function qe(R, K, ce, Ee, Xe) {
      {
        var Ve = Function.call.bind(Ae);
        for (var We in R)
          if (Ve(R, We)) {
            var Be = void 0;
            try {
              if (typeof R[We] != "function") {
                var $t = Error((Ee || "React class") + ": " + ce + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $t.name = "Invariant Violation", $t;
              }
              Be = R[We](K, We, Ee, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (yt) {
              Be = yt;
            }
            Be && !(Be instanceof Error) && (it(Xe), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", ce, We, typeof Be), it(null)), Be instanceof Error && !(Be.message in Ge) && (Ge[Be.message] = !0, it(Xe), _("Failed %s type: %s", ce, Be.message), it(null));
          }
      }
    }
    var Ue = Array.isArray;
    function Re(R) {
      return Ue(R);
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
    var we = F.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Se, ze;
    ze = {};
    function Qe(R) {
      if (Ae.call(R, "ref")) {
        var K = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ye(R) {
      if (Ae.call(R, "key")) {
        var K = Object.getOwnPropertyDescriptor(R, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ze(R, K) {
      if (typeof R.ref == "string" && we.current && K && we.current.stateNode !== K) {
        var ce = ee(we.current.type);
        ze[ce] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(we.current.type), R.ref), ze[ce] = !0);
      }
    }
    function Je(R, K) {
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
    function cr(R, K) {
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
    var Jt = function(R, K, ce, Ee, Xe, Ve, We) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: R,
        key: K,
        ref: ce,
        props: We,
        // Record the component responsible for creating this element.
        _owner: Ve
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function xr(R, K, ce, Ee, Xe) {
      {
        var Ve, We = {}, Be = null, $t = null;
        ce !== void 0 && (Oe(ce), Be = "" + ce), Ye(K) && (Oe(K.key), Be = "" + K.key), Qe(K) && ($t = K.ref, Ze(K, Xe));
        for (Ve in K)
          Ae.call(K, Ve) && !Pe.hasOwnProperty(Ve) && (We[Ve] = K[Ve]);
        if (R && R.defaultProps) {
          var yt = R.defaultProps;
          for (Ve in yt)
            We[Ve] === void 0 && (We[Ve] = yt[Ve]);
        }
        if (Be || $t) {
          var St = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Be && Je(We, St), $t && cr(We, St);
        }
        return Jt(R, Be, $t, Xe, Ee, we.current, We);
      }
    }
    var jt = F.ReactCurrentOwner, kt = F.ReactDebugCurrentFrame;
    function vr(R) {
      if (R) {
        var K = R._owner, ce = De(R.type, R._source, K ? K.type : null);
        kt.setExtraStackFrame(ce);
      } else
        kt.setExtraStackFrame(null);
    }
    var Hr;
    Hr = !1;
    function ft(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function ht() {
      {
        if (jt.current) {
          var R = ee(jt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function bt(R) {
      {
        if (R !== void 0) {
          var K = R.fileName.replace(/^.*[\\\/]/, ""), ce = R.lineNumber;
          return `

Check your code at ` + K + ":" + ce + ".";
        }
        return "";
      }
    }
    var gt = {};
    function wt(R) {
      {
        var K = ht();
        if (!K) {
          var ce = typeof R == "string" ? R : R.displayName || R.name;
          ce && (K = `

Check the top-level render call using <` + ce + ">.");
        }
        return K;
      }
    }
    function dt(R, K) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ce = wt(K);
        if (gt[ce])
          return;
        gt[ce] = !0;
        var Ee = "";
        R && R._owner && R._owner !== jt.current && (Ee = " It was passed a child from " + ee(R._owner.type) + "."), vr(R), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, Ee), vr(null);
      }
    }
    function Ot(R, K) {
      {
        if (typeof R != "object")
          return;
        if (Re(R))
          for (var ce = 0; ce < R.length; ce++) {
            var Ee = R[ce];
            ft(Ee) && dt(Ee, K);
          }
        else if (ft(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Xe = D(R);
          if (typeof Xe == "function" && Xe !== R.entries)
            for (var Ve = Xe.call(R), We; !(We = Ve.next()).done; )
              ft(We.value) && dt(We.value, K);
        }
      }
    }
    function Tt(R) {
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
          qe(ce, R.props, "prop", Ee, R);
        } else if (K.PropTypes !== void 0 && !Hr) {
          Hr = !0;
          var Xe = ee(K);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(R) {
      {
        for (var K = Object.keys(R.props), ce = 0; ce < K.length; ce++) {
          var Ee = K[ce];
          if (Ee !== "children" && Ee !== "key") {
            vr(R), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), vr(null);
            break;
          }
        }
        R.ref !== null && (vr(R), _("Invalid attribute `ref` supplied to `React.Fragment`."), vr(null));
      }
    }
    function It(R, K, ce, Ee, Xe, Ve) {
      {
        var We = P(R);
        if (!We) {
          var Be = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $t = bt(Xe);
          $t ? Be += $t : Be += ht();
          var yt;
          R === null ? yt = "null" : Re(R) ? yt = "array" : R !== void 0 && R.$$typeof === e ? (yt = "<" + (ee(R.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : yt = typeof R, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", yt, Be);
        }
        var St = xr(R, K, ce, Xe, Ve);
        if (St == null)
          return St;
        if (We) {
          var Pt = K.children;
          if (Pt !== void 0)
            if (Ee)
              if (Re(Pt)) {
                for (var Wr = 0; Wr < Pt.length; Wr++)
                  Ot(Pt[Wr], R);
                Object.freeze && Object.freeze(Pt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(Pt, R);
        }
        return R === n ? At(St) : Tt(St), St;
      }
    }
    function Nt(R, K, ce) {
      return It(R, K, ce, !0);
    }
    function _t(R, K, ce) {
      return It(R, K, ce, !1);
    }
    var Et = _t, ut = Nt;
    Zi.Fragment = n, Zi.jsx = Et, Zi.jsxs = ut;
  }()), Zi;
}
process.env.NODE_ENV === "production" ? wc.exports = IS() : wc.exports = CS();
var xf = wc.exports, Le = {
  context: void 0,
  registry: void 0
};
function es(t) {
  Le.context = t;
}
var RS = (t, e) => t === e, No = Symbol("solid-proxy"), Id = Symbol("solid-track"), Po = {
  equals: RS
}, Cd = Ld, vn = 1, Lo = 2, Rd = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Pa = {}, rt = null, La = null, ct = null, or = null, gn = null, ta = 0, [TS, IO] = /* @__PURE__ */ hr(!1);
function Zn(t, e) {
  const r = ct, n = rt, i = t.length === 0, s = e === void 0 ? n : e, a = i ? Rd : {
    owned: null,
    cleanups: null,
    context: s ? s.context : null,
    owner: s
  }, o = i ? t : () => t(() => Ht(() => na(a)));
  rt = a, ct = null;
  try {
    return sn(o, !0);
  } finally {
    ct = r, rt = n;
  }
}
function hr(t, e) {
  e = e ? Object.assign({}, Po, e) : Po;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (i) => (typeof i == "function" && (i = i(r.value)), Pd(r, i));
  return [Nd.bind(r), n];
}
function Df(t, e, r) {
  const n = ra(t, e, !0, vn);
  Li(n);
}
function Yn(t, e, r) {
  const n = ra(t, e, !1, vn);
  Li(n);
}
function Td(t, e, r) {
  Cd = jS;
  const n = ra(t, e, !1, vn);
  (!r || !r.render) && (n.user = !0), gn ? gn.push(n) : Li(n);
}
function Sr(t, e, r) {
  r = r ? Object.assign({}, Po, r) : Po;
  const n = ra(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Li(n), Nd.bind(n);
}
function Of(t) {
  return t && typeof t == "object" && "then" in t;
}
function AS(t, e, r) {
  let n, i, s;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, i = t, s = e || {}) : (n = t, i = e, s = r || {});
  let a = null, o = Pa, u = null, l = !1, f = "initialValue" in s, d = typeof n == "function" && Sr(n);
  const p = /* @__PURE__ */ new Set(), [v, E] = (s.storage || hr)(s.initialValue), [S, D] = hr(void 0), [F, _] = hr(void 0, {
    equals: !1
  }), [I, w] = hr(f ? "ready" : "unresolved");
  if (Le.context) {
    u = `${Le.context.id}${Le.context.count++}`;
    let T;
    s.ssrLoadFrom === "initial" ? o = s.initialValue : Le.load && (T = Le.load(u)) && (o = Of(T) && "value" in T ? T.value : T);
  }
  function b(T, P, B, H) {
    return a === T && (a = null, H !== void 0 && (f = !0), (T === o || P === o) && s.onHydrated && queueMicrotask(
      () => s.onHydrated(H, {
        value: P
      })
    ), o = Pa, g(P, B)), P;
  }
  function g(T, P) {
    sn(() => {
      P === void 0 && E(() => T), w(P !== void 0 ? "errored" : f ? "ready" : "unresolved"), D(P);
      for (const B of p.keys())
        B.decrement();
      p.clear();
    }, !1);
  }
  function c() {
    const T = FS, P = v(), B = S();
    if (B !== void 0 && !a)
      throw B;
    return ct && !ct.user && T && Df(() => {
      F(), a && (T.resolved || p.has(T) || (T.increment(), p.add(T)));
    }), P;
  }
  function y(T = !0) {
    if (T !== !1 && l)
      return;
    l = !1;
    const P = d ? d() : n;
    if (P == null || P === !1) {
      b(a, Ht(v));
      return;
    }
    const B = o !== Pa ? o : Ht(
      () => i(P, {
        value: v(),
        refetching: T
      })
    );
    return Of(B) ? (a = B, l = !0, queueMicrotask(() => l = !1), sn(() => {
      w(f ? "refreshing" : "pending"), _();
    }, !1), B.then(
      (H) => b(B, H, void 0, P),
      (H) => b(B, void 0, Ud(H), P)
    )) : (b(a, B, void 0, P), B);
  }
  return Object.defineProperties(c, {
    state: {
      get: () => I()
    },
    error: {
      get: () => S()
    },
    loading: {
      get() {
        const T = I();
        return T === "pending" || T === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return c();
        const T = S();
        if (T && !a)
          throw T;
        return v();
      }
    }
  }), d ? Df(() => y(!1)) : y(!1), [
    c,
    {
      refetch: y,
      mutate: E
    }
  ];
}
function CO(t) {
  return sn(t, !1);
}
function Ht(t) {
  if (ct === null)
    return t();
  const e = ct;
  ct = null;
  try {
    return t();
  } finally {
    ct = e;
  }
}
function RO(t, e, r) {
  const n = Array.isArray(t);
  let i, s = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let l = 0; l < t.length; l++)
        o[l] = t[l]();
    } else
      o = t();
    if (s) {
      s = !1;
      return;
    }
    const u = Ht(() => e(o, i, a));
    return i = o, u;
  };
}
function NS(t) {
  Td(() => Ht(t));
}
function Ss(t) {
  return rt === null || (rt.cleanups === null ? rt.cleanups = [t] : rt.cleanups.push(t)), t;
}
function TO() {
  return ct;
}
function If() {
  return rt;
}
function PS(t, e) {
  const r = rt, n = ct;
  rt = t, ct = null;
  try {
    return sn(e, !0);
  } catch (i) {
    hu(i);
  } finally {
    rt = r, ct = n;
  }
}
function LS(t) {
  const e = ct, r = rt;
  return Promise.resolve().then(() => {
    ct = e, rt = r;
    let n;
    return sn(t, !1), ct = rt = null, n ? n.done : void 0;
  });
}
function AO() {
  return [TS, LS];
}
function NO(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: kS(r),
    defaultValue: t
  };
}
function PO(t) {
  return rt && rt.context && rt.context[t.id] !== void 0 ? rt.context[t.id] : t.defaultValue;
}
function Ad(t) {
  const e = Sr(t), r = Sr(() => _c(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var FS;
function Nd() {
  if (this.sources && this.state)
    if (this.state === vn)
      Li(this);
    else {
      const t = or;
      or = null, sn(() => Uo(this), !1), or = t;
    }
  if (ct) {
    const t = this.observers ? this.observers.length : 0;
    ct.sources ? (ct.sources.push(this), ct.sourceSlots.push(t)) : (ct.sources = [this], ct.sourceSlots = [t]), this.observers ? (this.observers.push(ct), this.observerSlots.push(ct.sources.length - 1)) : (this.observers = [ct], this.observerSlots = [ct.sources.length - 1]);
  }
  return this.value;
}
function Pd(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && sn(() => {
    for (let i = 0; i < t.observers.length; i += 1) {
      const s = t.observers[i], a = La && La.running;
      a && La.disposed.has(s), (a ? !s.tState : !s.state) && (s.pure ? or.push(s) : gn.push(s), s.observers && Fd(s)), a || (s.state = vn);
    }
    if (or.length > 1e6)
      throw or = [], new Error();
  }, !1)), e;
}
function Li(t) {
  if (!t.fn)
    return;
  na(t);
  const e = rt, r = ct, n = ta;
  ct = rt = t, US(
    t,
    t.value,
    n
  ), ct = r, rt = e;
}
function US(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (i) {
    return t.pure && (t.state = vn, t.owned && t.owned.forEach(na), t.owned = null), t.updatedAt = r + 1, hu(i);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Pd(t, n) : t.value = n, t.updatedAt = r);
}
function ra(t, e, r, n = vn, i) {
  const s = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: rt,
    context: rt ? rt.context : null,
    pure: r
  };
  return rt === null || rt !== Rd && (rt.owned ? rt.owned.push(s) : rt.owned = [s]), s;
}
function Fo(t) {
  if (t.state === 0)
    return;
  if (t.state === Lo)
    return Uo(t);
  if (t.suspense && Ht(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < ta); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === vn)
      Li(t);
    else if (t.state === Lo) {
      const n = or;
      or = null, sn(() => Uo(t, e[0]), !1), or = n;
    }
}
function sn(t, e) {
  if (or)
    return t();
  let r = !1;
  e || (or = []), gn ? r = !0 : gn = [], ta++;
  try {
    const n = t();
    return MS(r), n;
  } catch (n) {
    r || (gn = null), or = null, hu(n);
  }
}
function MS(t) {
  if (or && (Ld(or), or = null), t)
    return;
  const e = gn;
  gn = null, e.length && sn(() => Cd(e), !1);
}
function Ld(t) {
  for (let e = 0; e < t.length; e++)
    Fo(t[e]);
}
function jS(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : Fo(n);
  }
  if (Le.context) {
    if (Le.count) {
      Le.effects || (Le.effects = []), Le.effects.push(...t.slice(0, r));
      return;
    } else
      Le.effects && (t = [...Le.effects, ...t], r += Le.effects.length, delete Le.effects);
    es();
  }
  for (e = 0; e < r; e++)
    Fo(t[e]);
}
function Uo(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const i = n.state;
      i === vn ? n !== e && (!n.updatedAt || n.updatedAt < ta) && Fo(n) : i === Lo && Uo(n, e);
    }
  }
}
function Fd(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = Lo, r.pure ? or.push(r) : gn.push(r), r.observers && Fd(r));
  }
}
function na(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const r = t.sources.pop(), n = t.sourceSlots.pop(), i = r.observers;
      if (i && i.length) {
        const s = i.pop(), a = r.observerSlots.pop();
        n < i.length && (s.sourceSlots[a] = n, i[n] = s, r.observerSlots[n] = a);
      }
    }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--)
      na(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Ud(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function hu(t, e = rt) {
  throw Ud(t);
}
function _c(t) {
  if (typeof t == "function" && !t.length)
    return _c(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = _c(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function kS(t, e) {
  return function(n) {
    let i;
    return Yn(
      () => i = Ht(() => (rt.context = {
        ...rt.context,
        [t]: n.value
      }, Ad(() => n.children))),
      void 0
    ), i;
  };
}
var Ec = Symbol("fallback");
function Mo(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function $S(t, e, r = {}) {
  let n = [], i = [], s = [], a = 0, o = e.length > 1 ? [] : null;
  return Ss(() => Mo(s)), () => {
    let u = t() || [], l, f;
    return u[Id], Ht(() => {
      let p = u.length, v, E, S, D, F, _, I, w, b;
      if (p === 0)
        a !== 0 && (Mo(s), s = [], n = [], i = [], a = 0, o && (o = [])), r.fallback && (n = [Ec], i[0] = Zn((g) => (s[0] = g, r.fallback())), a = 1);
      else if (a === 0) {
        for (i = new Array(p), f = 0; f < p; f++)
          n[f] = u[f], i[f] = Zn(d);
        a = p;
      } else {
        for (S = new Array(p), D = new Array(p), o && (F = new Array(p)), _ = 0, I = Math.min(a, p); _ < I && n[_] === u[_]; _++)
          ;
        for (I = a - 1, w = p - 1; I >= _ && w >= _ && n[I] === u[w]; I--, w--)
          S[w] = i[I], D[w] = s[I], o && (F[w] = o[I]);
        for (v = /* @__PURE__ */ new Map(), E = new Array(w + 1), f = w; f >= _; f--)
          b = u[f], l = v.get(b), E[f] = l === void 0 ? -1 : l, v.set(b, f);
        for (l = _; l <= I; l++)
          b = n[l], f = v.get(b), f !== void 0 && f !== -1 ? (S[f] = i[l], D[f] = s[l], o && (F[f] = o[l]), f = E[f], v.set(b, f)) : s[l]();
        for (f = _; f < p; f++)
          f in S ? (i[f] = S[f], s[f] = D[f], o && (o[f] = F[f], o[f](f))) : i[f] = Zn(d);
        i = i.slice(0, a = p), n = u.slice(0);
      }
      return i;
    });
    function d(p) {
      if (s[f] = p, o) {
        const [v, E] = hr(f);
        return o[f] = E, e(u[f], v);
      }
      return e(u[f]);
    }
  };
}
function qS(t, e, r = {}) {
  let n = [], i = [], s = [], a = [], o = 0, u;
  return Ss(() => Mo(s)), () => {
    const l = t() || [];
    return l[Id], Ht(() => {
      if (l.length === 0)
        return o !== 0 && (Mo(s), s = [], n = [], i = [], o = 0, a = []), r.fallback && (n = [Ec], i[0] = Zn((d) => (s[0] = d, r.fallback())), o = 1), i;
      for (n[0] === Ec && (s[0](), s = [], n = [], i = [], o = 0), u = 0; u < l.length; u++)
        u < n.length && n[u] !== l[u] ? a[u](() => l[u]) : u >= n.length && (i[u] = Zn(f));
      for (; u < n.length; u++)
        s[u]();
      return o = a.length = s.length = l.length, n = l.slice(0), i = i.slice(0, o);
    });
    function f(d) {
      s[u] = d;
      const [p, v] = hr(l[u]);
      return a[u] = v, e(p, u);
    }
  };
}
function zS(t, e) {
  return Ht(() => t(e || {}));
}
function ro() {
  return !0;
}
var Sc = {
  get(t, e, r) {
    return e === No ? r : t.get(e);
  },
  has(t, e) {
    return e === No ? !0 : t.has(e);
  },
  set: ro,
  deleteProperty: ro,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: ro,
      deleteProperty: ro
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function Fa(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function BS() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function VS(...t) {
  let e = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    e = e || !!a && No in a, t[s] = typeof a == "function" ? (e = !0, Sr(a)) : a;
  }
  if (e)
    return new Proxy(
      {
        get(s) {
          for (let a = t.length - 1; a >= 0; a--) {
            const o = Fa(t[a])[s];
            if (o !== void 0)
              return o;
          }
        },
        has(s) {
          for (let a = t.length - 1; a >= 0; a--)
            if (s in Fa(t[a]))
              return !0;
          return !1;
        },
        keys() {
          const s = [];
          for (let a = 0; a < t.length; a++)
            s.push(...Object.keys(Fa(t[a])));
          return [...new Set(s)];
        }
      },
      Sc
    );
  const r = {}, n = {}, i = /* @__PURE__ */ new Set();
  for (let s = t.length - 1; s >= 0; s--) {
    const a = t[s];
    if (!a)
      continue;
    const o = Object.getOwnPropertyNames(a);
    for (let u = 0, l = o.length; u < l; u++) {
      const f = o[u];
      if (f === "__proto__" || f === "constructor")
        continue;
      const d = Object.getOwnPropertyDescriptor(a, f);
      if (!i.has(f))
        d.get ? (i.add(f), Object.defineProperty(r, f, {
          enumerable: !0,
          configurable: !0,
          get: BS.bind(n[f] = [d.get.bind(a)])
        })) : (d.value !== void 0 && i.add(f), r[f] = d.value);
      else {
        const p = n[f];
        p ? d.get ? p.push(d.get.bind(a)) : d.value !== void 0 && p.push(() => d.value) : r[f] === void 0 && (r[f] = d.value);
      }
    }
  }
  return r;
}
function KS(t, ...e) {
  if (No in t) {
    const i = new Set(e.length > 1 ? e.flat() : e[0]), s = e.map((a) => new Proxy(
      {
        get(o) {
          return a.includes(o) ? t[o] : void 0;
        },
        has(o) {
          return a.includes(o) && o in t;
        },
        keys() {
          return a.filter((o) => o in t);
        }
      },
      Sc
    ));
    return s.push(
      new Proxy(
        {
          get(a) {
            return i.has(a) ? void 0 : t[a];
          },
          has(a) {
            return i.has(a) ? !1 : a in t;
          },
          keys() {
            return Object.keys(t).filter((a) => !i.has(a));
          }
        },
        Sc
      )
    ), s;
  }
  const r = {}, n = e.map(() => ({}));
  for (const i of Object.getOwnPropertyNames(t)) {
    const s = Object.getOwnPropertyDescriptor(t, i), a = !s.get && !s.set && s.enumerable && s.writable && s.configurable;
    let o = !1, u = 0;
    for (const l of e)
      l.includes(i) && (o = !0, a ? n[u][i] = s.value : Object.defineProperty(n[u], i, s)), ++u;
    o || (a ? r[i] = s.value : Object.defineProperty(r, i, s));
  }
  return [...n, r];
}
function HS(t) {
  let e, r;
  const n = (i) => {
    const s = Le.context;
    if (s) {
      const [o, u] = hr();
      Le.count || (Le.count = 0), Le.count++, (r || (r = t())).then((l) => {
        es(s), Le.count--, u(() => l.default), es();
      }), e = o;
    } else if (!e) {
      const [o] = AS(() => (r || (r = t())).then((u) => u.default));
      e = o;
    }
    let a;
    return Sr(
      () => (a = e()) && Ht(() => {
        if (!s)
          return a(i);
        const o = Le.context;
        es(s);
        const u = a(i);
        return es(o), u;
      })
    );
  };
  return n.preload = () => r || ((r = t()).then((i) => e = () => i.default), r), n;
}
var WS = 0;
function LO() {
  const t = Le.context;
  return t ? `${t.id}${t.count++}` : `cl-${WS++}`;
}
var Md = (t) => `Stale read from <${t}>.`;
function FO(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return Sr($S(() => t.each, t.children, e || void 0));
}
function UO(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return Sr(qS(() => t.each, t.children, e || void 0));
}
function MO(t) {
  const e = t.keyed, r = Sr(() => t.when, void 0, {
    equals: (n, i) => e ? n === i : !n == !i
  });
  return Sr(
    () => {
      const n = r();
      if (n) {
        const i = t.children;
        return typeof i == "function" && i.length > 0 ? Ht(
          () => i(
            e ? n : () => {
              if (!Ht(r))
                throw Md("Show");
              return t.when;
            }
          )
        ) : i;
      }
      return t.fallback;
    },
    void 0,
    void 0
  );
}
function jO(t) {
  let e = !1;
  const r = (s, a) => s[0] === a[0] && (e ? s[1] === a[1] : !s[1] == !a[1]) && s[2] === a[2], n = Ad(() => t.children), i = Sr(
    () => {
      let s = n();
      Array.isArray(s) || (s = [s]);
      for (let a = 0; a < s.length; a++) {
        const o = s[a].when;
        if (o)
          return e = !!s[a].keyed, [a, o, s[a]];
      }
      return [-1];
    },
    void 0,
    {
      equals: r
    }
  );
  return Sr(
    () => {
      const [s, a, o] = i();
      if (s < 0)
        return t.fallback;
      const u = o.children;
      return typeof u == "function" && u.length > 0 ? Ht(
        () => u(
          e ? a : () => {
            if (Ht(i)[0] !== s)
              throw Md("Match");
            return o.when;
          }
        )
      ) : u;
    },
    void 0,
    void 0
  );
}
function kO(t) {
  return t;
}
var GS = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], QS = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...GS
]), ZS = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), YS = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), JS = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function XS(t, e) {
  const r = JS[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var ex = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), tx = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), rx = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function nx(t, e, r) {
  let n = r.length, i = e.length, s = n, a = 0, o = 0, u = e[i - 1].nextSibling, l = null;
  for (; a < i || o < s; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[i - 1] === r[s - 1]; )
      i--, s--;
    if (i === a) {
      const f = s < n ? o ? r[o - 1].nextSibling : r[s - o] : u;
      for (; o < s; )
        t.insertBefore(r[o++], f);
    } else if (s === o)
      for (; a < i; )
        (!l || !l.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[s - 1] && r[o] === e[i - 1]) {
      const f = e[--i].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--s], f), e[i] = r[s];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < s; )
          l.set(r[d], d++);
      }
      const f = l.get(e[a]);
      if (f != null)
        if (o < f && f < s) {
          let d = a, p = 1, v;
          for (; ++d < i && d < s && !((v = l.get(e[d])) == null || v !== f + p); )
            p++;
          if (p > f - o) {
            const E = e[a];
            for (; o < f; )
              t.insertBefore(r[o++], E);
          } else
            t.replaceChild(r[o++], e[a++]);
        } else
          a++;
      else
        e[a++].remove();
    }
  }
}
var Cf = "_$DX_DELEGATE";
function ix(t, e, r, n = {}) {
  let i;
  return Zn((s) => {
    i = s, e === document ? t() : Dc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    i(), e.textContent = "";
  };
}
function $O(t, e, r) {
  let n;
  const i = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, s = e ? () => Ht(() => document.importNode(n || (n = i()), !0)) : () => (n || (n = i())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function sx(t, e = window.document) {
  const r = e[Cf] || (e[Cf] = /* @__PURE__ */ new Set());
  for (let n = 0, i = t.length; n < i; n++) {
    const s = t[n];
    r.has(s) || (r.add(s), e.addEventListener(s, gx));
  }
}
function xc(t, e, r) {
  Le.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function ox(t, e, r, n) {
  Le.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function ax(t, e) {
  Le.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function cx(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const i = r[0];
    t.addEventListener(e, r[0] = (s) => i.call(t, r[1], s));
  } else
    t.addEventListener(e, r);
}
function ux(t, e, r = {}) {
  const n = Object.keys(e || {}), i = Object.keys(r);
  let s, a;
  for (s = 0, a = i.length; s < a; s++) {
    const o = i[s];
    !o || o === "undefined" || e[o] || (Rf(t, o, !1), delete r[o]);
  }
  for (s = 0, a = n.length; s < a; s++) {
    const o = n[s], u = !!e[o];
    !o || o === "undefined" || r[o] === u || !u || (Rf(t, o, !0), r[o] = u);
  }
  return r;
}
function lx(t, e, r) {
  if (!e)
    return r ? xc(t, "style") : e;
  const n = t.style;
  if (typeof e == "string")
    return n.cssText = e;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), e || (e = {});
  let i, s;
  for (s in r)
    e[s] == null && n.removeProperty(s), delete r[s];
  for (s in e)
    i = e[s], i !== r[s] && (n.setProperty(s, i), r[s] = i);
  return r;
}
function fx(t, e = {}, r, n) {
  const i = {};
  return n || Yn(
    () => i.children = Ii(t, e.children, i.children)
  ), Yn(() => e.ref && e.ref(t)), Yn(() => hx(t, e, r, !0, i, !0)), i;
}
function qO(t, e, r) {
  return Ht(() => t(e, r));
}
function Dc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return Ii(t, e, n, r);
  Yn((i) => Ii(t, e(), i, r), n);
}
function hx(t, e, r, n, i = {}, s = !1) {
  e || (e = {});
  for (const a in i)
    if (!(a in e)) {
      if (a === "children")
        continue;
      i[a] = Tf(t, a, null, i[a], r, s);
    }
  for (const a in e) {
    if (a === "children") {
      n || Ii(t, e.children);
      continue;
    }
    const o = e[a];
    i[a] = Tf(t, a, o, i[a], r, s);
  }
}
function dx(t) {
  let e, r;
  return !Le.context || !(e = Le.registry.get(r = yx())) ? t() : (Le.completed && Le.completed.add(e), Le.registry.delete(r), e);
}
function px(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Rf(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let i = 0, s = n.length; i < s; i++)
    t.classList.toggle(n[i], r);
}
function Tf(t, e, r, n, i, s) {
  let a, o, u, l, f;
  if (e === "style")
    return lx(t, r, n);
  if (e === "classList")
    return ux(t, r, n);
  if (r === n)
    return n;
  if (e === "ref")
    s || r(t);
  else if (e.slice(0, 3) === "on:") {
    const d = e.slice(3);
    n && t.removeEventListener(d, n), r && t.addEventListener(d, r);
  } else if (e.slice(0, 10) === "oncapture:") {
    const d = e.slice(10);
    n && t.removeEventListener(d, n, !0), r && t.addEventListener(d, r, !0);
  } else if (e.slice(0, 2) === "on") {
    const d = e.slice(2).toLowerCase(), p = ex.has(d);
    if (!p && n) {
      const v = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(d, v);
    }
    (p || r) && (cx(t, d, r, p), p && sx([d]));
  } else if (e.slice(0, 5) === "attr:")
    xc(t, e.slice(5), r);
  else if ((f = e.slice(0, 5) === "prop:") || (u = ZS.has(e)) || !i && ((l = XS(e, t.tagName)) || (o = QS.has(e))) || (a = t.nodeName.includes("-"))) {
    if (f)
      e = e.slice(5), o = !0;
    else if (Le.context)
      return r;
    e === "class" || e === "className" ? ax(t, r) : a && !o && !u ? t[px(e)] = r : t[l || e] = r;
  } else {
    const d = i && e.indexOf(":") > -1 && rx[e.split(":")[0]];
    d ? ox(t, d, e, r) : xc(t, YS[e] || e, r);
  }
  return r;
}
function gx(t) {
  const e = `$$${t.type}`;
  let r = t.composedPath && t.composedPath()[0] || t.target;
  for (t.target !== r && Object.defineProperty(t, "target", {
    configurable: !0,
    value: r
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return r || document;
    }
  }), Le.registry && !Le.done && (Le.done = _$HY.done = !0); r; ) {
    const n = r[e];
    if (n && !r.disabled) {
      const i = r[`${e}Data`];
      if (i !== void 0 ? n.call(r, i, t) : n.call(r, t), t.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function Ii(t, e, r, n, i) {
  if (Le.context) {
    !r && (r = [...t.childNodes]);
    let o = [];
    for (let u = 0; u < r.length; u++) {
      const l = r[u];
      l.nodeType === 8 && l.data.slice(0, 2) === "!$" ? l.remove() : o.push(l);
    }
    r = o;
  }
  for (; typeof r == "function"; )
    r = r();
  if (e === r)
    return r;
  const s = typeof e, a = n !== void 0;
  if (t = a && r[0] && r[0].parentNode || t, s === "string" || s === "number") {
    if (Le.context)
      return r;
    if (s === "number" && (e = e.toString()), a) {
      let o = r[0];
      o && o.nodeType === 3 ? o.data = e : o = document.createTextNode(e), r = ci(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || s === "boolean") {
    if (Le.context)
      return r;
    r = ci(t, r, n);
  } else {
    if (s === "function")
      return Yn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = Ii(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], u = r && Array.isArray(r);
      if (Oc(o, e, r, i))
        return Yn(() => r = Ii(t, o, r, n, !0)), () => r;
      if (Le.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let l = o[0], f = [l];
        for (; (l = l.nextSibling) !== n; )
          f.push(l);
        return r = f;
      }
      if (o.length === 0) {
        if (r = ci(t, r, n), a)
          return r;
      } else
        u ? r.length === 0 ? Af(t, o, n) : nx(t, r, o) : (r && ci(t), Af(t, o));
      r = o;
    } else if (e.nodeType) {
      if (Le.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = ci(t, r, n, e);
        ci(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function Oc(t, e, r, n) {
  let i = !1;
  for (let s = 0, a = e.length; s < a; s++) {
    let o = e[s], u = r && r[s], l;
    if (!(o == null || o === !0 || o === !1))
      if ((l = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        i = Oc(t, o, u) || i;
      else if (l === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          i = Oc(
            t,
            Array.isArray(o) ? o : [o],
            Array.isArray(u) ? u : [u]
          ) || i;
        } else
          t.push(o), i = !0;
      else {
        const f = String(o);
        u && u.nodeType === 3 && u.data === f ? t.push(u) : t.push(document.createTextNode(f));
      }
  }
  return i;
}
function Af(t, e, r = null) {
  for (let n = 0, i = e.length; n < i; n++)
    t.insertBefore(e[n], r);
}
function ci(t, e, r, n) {
  if (r === void 0)
    return t.textContent = "";
  const i = n || document.createTextNode("");
  if (e.length) {
    let s = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (i !== o) {
        const u = o.parentNode === t;
        !s && !a ? u ? t.replaceChild(i, o) : t.insertBefore(i, r) : u && o.remove();
      } else
        s = !0;
    }
  } else
    t.insertBefore(i, r);
  return [i];
}
function yx() {
  const t = Le.context;
  return `${t.id}${t.count++}`;
}
var vx = "http://www.w3.org/2000/svg";
function jd(t, e = !1) {
  return e ? document.createElementNS(vx, t) : document.createElement(t);
}
function zO(t) {
  const { useShadow: e } = t, r = document.createTextNode(""), n = () => t.mount || document.body, i = If();
  let s, a = !!Le.context;
  return Td(
    () => {
      a && (If().user = a = !1), s || (s = PS(i, () => Sr(() => t.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [u, l] = hr(!1), f = () => l(!0);
        Zn((d) => Dc(o, () => u() ? d() : s(), null)), Ss(f);
      } else {
        const u = jd(t.isSVG ? "g" : "div", t.isSVG), l = e && u.attachShadow ? u.attachShadow({
          mode: "open"
        }) : u;
        Object.defineProperty(u, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), Dc(l, s), o.appendChild(u), t.ref && t.ref(u), Ss(() => o.removeChild(u));
      }
    },
    void 0,
    {
      render: !a
    }
  ), r;
}
function BO(t) {
  const [e, r] = KS(t, ["component"]), n = Sr(() => e.component);
  return Sr(() => {
    const i = n();
    switch (typeof i) {
      case "function":
        return Ht(() => i(r));
      case "string":
        const s = tx.has(i), a = Le.context ? dx() : jd(i, s);
        return fx(a, r, s), a;
    }
  });
}
var mx = (
  /** @class */
  function() {
    function t() {
      this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
    }
    return t.prototype.set = function(e, r) {
      this.keyToValue.set(e, r), this.valueToKey.set(r, e);
    }, t.prototype.getByKey = function(e) {
      return this.keyToValue.get(e);
    }, t.prototype.getByValue = function(e) {
      return this.valueToKey.get(e);
    }, t.prototype.clear = function() {
      this.keyToValue.clear(), this.valueToKey.clear();
    }, t;
  }()
), kd = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new mx();
    }
    return t.prototype.register = function(e, r) {
      this.kv.getByValue(e) || (r || (r = this.generateIdentifier(e)), this.kv.set(r, e));
    }, t.prototype.clear = function() {
      this.kv.clear();
    }, t.prototype.getIdentifier = function(e) {
      return this.kv.getByValue(e);
    }, t.prototype.getValue = function(e) {
      return this.kv.getByKey(e);
    }, t;
  }()
), bx = function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), wx = (
  /** @class */
  function(t) {
    bx(e, t);
    function e() {
      var r = t.call(this, function(n) {
        return n.name;
      }) || this;
      return r.classToAllowedProps = /* @__PURE__ */ new Map(), r;
    }
    return e.prototype.register = function(r, n) {
      typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps), t.prototype.register.call(this, r, n.identifier)) : t.prototype.register.call(this, r, n);
    }, e.prototype.getAllowedProps = function(r) {
      return this.classToAllowedProps.get(r);
    }, e;
  }(kd)
), _x = function(t, e) {
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
};
function Ex(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function Sx(t, e) {
  var r = Ex(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, i = 0; i < n.length; i++) {
    var s = n[i];
    if (e(s))
      return s;
  }
}
function Ci(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = _x(r, 2), i = n[0], s = n[1];
    return e(s, i);
  });
}
function po(t, e) {
  return t.indexOf(e) !== -1;
}
function Nf(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var xx = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return Sx(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), Dx = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, $d = function(t) {
  return typeof t > "u";
}, Ox = function(t) {
  return t === null;
}, xs = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, Ic = function(t) {
  return xs(t) && Object.keys(t).length === 0;
}, Rn = function(t) {
  return Array.isArray(t);
}, Ix = function(t) {
  return typeof t == "string";
}, Cx = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Rx = function(t) {
  return typeof t == "boolean";
}, Tx = function(t) {
  return t instanceof RegExp;
}, Ds = function(t) {
  return t instanceof Map;
}, Os = function(t) {
  return t instanceof Set;
}, qd = function(t) {
  return Dx(t) === "Symbol";
}, Ax = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, Nx = function(t) {
  return t instanceof Error;
}, Pf = function(t) {
  return typeof t == "number" && isNaN(t);
}, Lf = function(t) {
  return Rx(t) || Ox(t) || $d(t) || Cx(t) || Ix(t) || qd(t);
}, Px = function(t) {
  return typeof t == "bigint";
}, Lx = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, Fx = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, Ux = function(t) {
  return t instanceof URL;
}, zd = function(t) {
  return t.replace(/\./g, "\\.");
}, Ua = function(t) {
  return t.map(String).map(zd).join(".");
}, is = function(t) {
  for (var e = [], r = "", n = 0; n < t.length; n++) {
    var i = t.charAt(n), s = i === "\\" && t.charAt(n + 1) === ".";
    if (s) {
      r += ".", n++;
      continue;
    }
    var a = i === ".";
    if (a) {
      e.push(r), r = "";
      continue;
    }
    r += i;
  }
  var o = r;
  return e.push(o), e;
}, Cc = function() {
  return Cc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Cc.apply(this, arguments);
}, Rc = function(t, e) {
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
}, Tc = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
};
function Xr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Bd = [
  Xr($d, "undefined", function() {
    return null;
  }, function() {
  }),
  Xr(Px, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Xr(Ax, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Xr(Nx, "Error", function(t, e) {
    var r = {
      name: t.name,
      message: t.message
    };
    return e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }, function(t, e) {
    var r = new Error(t.message);
    return r.name = t.name, r.stack = t.stack, e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }),
  Xr(Tx, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Xr(
    Os,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return Tc([], Rc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Xr(Ds, "map", function(t) {
    return Tc([], Rc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Xr(function(t) {
    return Pf(t) || Lx(t);
  }, "number", function(t) {
    return Pf(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Xr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Xr(Ux, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function ia(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Vd = ia(function(t, e) {
  if (qd(t)) {
    var r = !!e.symbolRegistry.getIdentifier(t);
    return r;
  }
  return !1;
}, function(t, e) {
  var r = e.symbolRegistry.getIdentifier(t);
  return ["symbol", r];
}, function(t) {
  return t.description;
}, function(t, e, r) {
  var n = r.symbolRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), Mx = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(t, e) {
  return t[e.name] = e, t;
}, {}), Kd = ia(Fx, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return Tc([], Rc(t));
}, function(t, e) {
  var r = Mx[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function Hd(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Wd = ia(Hd, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return Cc({}, t);
  var n = {};
  return r.forEach(function(i) {
    n[i] = t[i];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), Gd = ia(function(t, e) {
  return !!e.customTransformerRegistry.findApplicable(t);
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return ["custom", r.name];
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return r.serialize(t);
}, function(t, e, r) {
  var n = r.customTransformerRegistry.findByName(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(t);
}), jx = [Wd, Vd, Gd, Kd], Ff = function(t, e) {
  var r = Nf(jx, function(i) {
    return i.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Nf(Bd, function(i) {
    return i.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Qd = {};
Bd.forEach(function(t) {
  Qd[t.annotation] = t;
});
var kx = function(t, e, r) {
  if (Rn(e))
    switch (e[0]) {
      case "symbol":
        return Vd.untransform(t, e, r);
      case "class":
        return Wd.untransform(t, e, r);
      case "custom":
        return Gd.untransform(t, e, r);
      case "typed-array":
        return Kd.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Qd[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, di = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Zd(t) {
  if (po(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (po(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (po(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var $x = function(t, e) {
  Zd(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (Os(t))
      t = di(t, +n);
    else if (Ds(t)) {
      var i = +n, s = +e[++r] == 0 ? "key" : "value", a = di(t, i);
      switch (s) {
        case "key":
          t = a;
          break;
        case "value":
          t = t.get(a);
          break;
      }
    } else
      t = t[n];
  }
  return t;
}, Ac = function(t, e, r) {
  if (Zd(e), e.length === 0)
    return r(t);
  for (var n = t, i = 0; i < e.length - 1; i++) {
    var s = e[i];
    if (Rn(n)) {
      var a = +s;
      n = n[a];
    } else if (xs(n))
      n = n[s];
    else if (Os(n)) {
      var o = +s;
      n = di(n, o);
    } else if (Ds(n)) {
      var u = i === e.length - 2;
      if (u)
        break;
      var o = +s, l = +e[++i] == 0 ? "key" : "value", f = di(n, o);
      switch (l) {
        case "key":
          n = f;
          break;
        case "value":
          n = n.get(f);
          break;
      }
    }
  }
  var d = e[e.length - 1];
  if (Rn(n) ? n[+d] = r(n[+d]) : xs(n) && (n[d] = r(n[d])), Os(n)) {
    var p = di(n, +d), v = r(p);
    p !== v && (n.delete(p), n.add(v));
  }
  if (Ds(n)) {
    var o = +e[e.length - 2], E = di(n, o), l = +d == 0 ? "key" : "value";
    switch (l) {
      case "key": {
        var S = r(E);
        n.set(S, n.get(E)), S !== E && n.delete(E);
        break;
      }
      case "value": {
        n.set(E, r(n.get(E)));
        break;
      }
    }
  }
  return t;
}, dn = function(t, e) {
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
}, xn = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
};
function Nc(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Rn(t)) {
      Ci(t, function(a, o) {
        return Nc(a, e, xn(xn([], dn(r)), dn(is(o))));
      });
      return;
    }
    var n = dn(t, 2), i = n[0], s = n[1];
    s && Ci(s, function(a, o) {
      Nc(a, e, xn(xn([], dn(r)), dn(is(o))));
    }), e(i, r);
  }
}
function qx(t, e, r) {
  return Nc(e, function(n, i) {
    t = Ac(t, i, function(s) {
      return kx(s, n, r);
    });
  }), t;
}
function zx(t, e) {
  function r(a, o) {
    var u = $x(t, is(o));
    a.map(is).forEach(function(l) {
      t = Ac(t, l, function() {
        return u;
      });
    });
  }
  if (Rn(e)) {
    var n = dn(e, 2), i = n[0], s = n[1];
    i.forEach(function(a) {
      t = Ac(t, is(a), function() {
        return t;
      });
    }), s && Ci(s, r);
  } else
    Ci(e, r);
  return t;
}
var Bx = function(t, e) {
  return xs(t) || Rn(t) || Ds(t) || Os(t) || Hd(t, e);
};
function Vx(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function Kx(t) {
  var e = {}, r = void 0;
  return t.forEach(function(n) {
    if (!(n.length <= 1)) {
      var i = dn(n.map(function(o) {
        return o.map(String);
      }).sort(function(o, u) {
        return o.length - u.length;
      })), s = i[0], a = i.slice(1);
      s.length === 0 ? r = a.map(Ua) : e[Ua(s)] = a.map(Ua);
    }
  }), r ? Ic(e) ? [r] : [r, e] : Ic(e) ? void 0 : e;
}
var Yd = function(t, e, r, n, i) {
  var s;
  if (n === void 0 && (n = []), i === void 0 && (i = []), Lf(t) || Vx(t, n, e), !Bx(t, r)) {
    var a = Ff(t, r);
    return a ? {
      transformedValue: a.value,
      annotations: [a.type]
    } : {
      transformedValue: t
    };
  }
  if (po(i, t))
    return {
      transformedValue: null
    };
  var o = Ff(t, r), u = (s = o == null ? void 0 : o.value) !== null && s !== void 0 ? s : t;
  Lf(t) || (i = xn(xn([], dn(i)), [t]));
  var l = Rn(u) ? [] : {}, f = {};
  return Ci(u, function(d, p) {
    var v = Yd(d, e, r, xn(xn([], dn(n)), [p]), i);
    l[p] = v.transformedValue, Rn(v.annotations) ? f[p] = v.annotations : xs(v.annotations) && Ci(v.annotations, function(E, S) {
      f[zd(p) + "." + S] = E;
    });
  }), Ic(f) ? {
    transformedValue: l,
    annotations: o ? [o.type] : void 0
  } : {
    transformedValue: l,
    annotations: o ? [o.type, f] : f
  };
};
function Jd(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Hx(t) {
  if (Jd(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Uf(t) {
  return Jd(t) === "Array";
}
function Wx(t, e, r, n, i) {
  const s = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (t[e] = r), i && s === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Pc(t, e = {}) {
  if (Uf(t))
    return t.map((i) => Pc(i, e));
  if (!Hx(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((i, s) => {
    if (Uf(e.props) && !e.props.includes(s))
      return i;
    const a = t[s], o = Pc(a, e);
    return Wx(i, s, o, t, e.nonenumerable), i;
  }, {});
}
var Kn = function() {
  return Kn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Kn.apply(this, arguments);
}, Gx = function(t, e) {
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
}, Qx = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Xd = (
  /** @class */
  function() {
    function t() {
      this.classRegistry = new wx(), this.symbolRegistry = new kd(function(e) {
        var r;
        return (r = e.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new xx(), this.allowedErrorProps = [];
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Yd(e, r, this), i = {
        json: n.transformedValue
      };
      n.annotations && (i.meta = Kn(Kn({}, i.meta), { values: n.annotations }));
      var s = Kx(r);
      return s && (i.meta = Kn(Kn({}, i.meta), { referentialEqualities: s })), i;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, i = Pc(r);
      return n != null && n.values && (i = qx(i, n.values, this)), n != null && n.referentialEqualities && (i = zx(i, n.referentialEqualities)), i;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Kn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, Qx([], Gx(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), Zx = Xd.serialize, VO = Xd.stringify;
function KO(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function HO(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function WO({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function GO({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function QO(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var ZO = (t, e = !1) => {
  const {
    json: r
  } = Zx(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, no = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, Yx = (t, e) => t.queryHash.localeCompare(e.queryHash), ep = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, Jx = (t, e) => no(t) === no(e) ? ep(t, e) : no(t) > no(e) ? 1 : -1, YO = {
  status: Jx,
  "query hash": Yx,
  "last updated": ep
}, io = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, tp = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, Xx = (t, e) => io(t) === io(e) ? tp(t, e) : io(t) > io(e) ? 1 : -1, JO = {
  status: Xx,
  "last updated": tp
}, XO = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), e3 = () => {
  const [t, e] = hr("dark");
  return NS(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (i) => {
      e(i.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), Ss(() => r.removeEventListener("change", n));
  }), t;
}, so = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [i, ...s] = e;
    return n.set(i, so(n.get(i), s, r)), n;
  }
  if (t instanceof Set) {
    const n = so(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [i, ...s] = e;
    return n[i] = so(n[i], s, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [i, ...s] = e;
    return n[i] = so(n[i], s, r), n;
  }
  return t;
}, oo = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...i] = e;
    return r.set(n, oo(r.get(n), i)), r;
  }
  if (t instanceof Set) {
    const r = oo(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((s, a) => a.toString() !== e[0]);
    const [n, ...i] = e;
    return r[n] = oo(r[n], i), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...i] = e;
    return r[n] = oo(r[n], i), r;
  }
  return t;
}, eD = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, vi, Is, Cs, Rs, Gn, Ts, mi, bi, wi, _i, Ei, As, jf, tD = (jf = class {
  constructor(t) {
    Or(this, vi, void 0);
    Or(this, Is, void 0);
    Or(this, Cs, void 0);
    Or(this, Rs, void 0);
    Or(this, Gn, !1);
    Or(this, Ts, void 0);
    Or(this, mi, void 0);
    Or(this, bi, void 0);
    Or(this, wi, void 0);
    Or(this, _i, void 0);
    Or(this, Ei, void 0);
    Or(this, As, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: i,
      buttonPosition: s,
      position: a,
      initialIsOpen: o,
      errorTypes: u,
      styleNonce: l
    } = t;
    br(this, vi, hr(e)), br(this, Cs, r), br(this, Rs, n), br(this, Is, i), br(this, Ts, l), br(this, mi, hr(s)), br(this, bi, hr(a)), br(this, wi, hr(o)), br(this, _i, hr(u));
  }
  setButtonPosition(t) {
    Ft(this, mi)[1](t);
  }
  setPosition(t) {
    Ft(this, bi)[1](t);
  }
  setInitialIsOpen(t) {
    Ft(this, wi)[1](t);
  }
  setErrorTypes(t) {
    Ft(this, _i)[1](t);
  }
  setClient(t) {
    Ft(this, vi)[1](t);
  }
  mount(t) {
    if (Ft(this, Gn))
      throw new Error("Devtools is already mounted");
    const e = ix(() => {
      const [r] = Ft(this, mi), [n] = Ft(this, bi), [i] = Ft(this, wi), [s] = Ft(this, _i), [a] = Ft(this, vi);
      let o;
      Ft(this, Ei) ? o = Ft(this, Ei) : (o = HS(() => import("./N66J3ZXT-69a6182c.js")), br(this, Ei, o)), eD(Ft(this, Ts));
      const u = this;
      return zS(o, VS({
        get queryFlavor() {
          return Ft(u, Cs);
        },
        get version() {
          return Ft(u, Rs);
        },
        get onlineManager() {
          return Ft(u, Is);
        }
      }, {
        get client() {
          return a();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return n();
        },
        get initialIsOpen() {
          return i();
        },
        get errorTypes() {
          return s();
        }
      }));
    }, t);
    br(this, Gn, !0), br(this, As, e);
  }
  unmount() {
    var t;
    if (!Ft(this, Gn))
      throw new Error("Devtools is not mounted");
    (t = Ft(this, As)) == null || t.call(this), br(this, Gn, !1);
  }
}, vi = new WeakMap(), Is = new WeakMap(), Cs = new WeakMap(), Rs = new WeakMap(), Gn = new WeakMap(), Ts = new WeakMap(), mi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), _i = new WeakMap(), Ei = new WeakMap(), As = new WeakMap(), jf);
function rD(t) {
  const e = Sd(), r = t.client || e, n = lp(null), { buttonPosition: i, position: s, initialIsOpen: a, errorTypes: o, styleNonce: u } = t, [l] = ts(
    new tD({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: Es,
      buttonPosition: i,
      position: s,
      initialIsOpen: a,
      errorTypes: o,
      styleNonce: u
    })
  );
  return Qt(() => {
    l.setClient(r);
  }, [r, l]), Qt(() => {
    i && l.setButtonPosition(i);
  }, [i, l]), Qt(() => {
    s && l.setPosition(s);
  }, [s, l]), Qt(() => {
    l.setInitialIsOpen(a || !1);
  }, [a, l]), Qt(() => {
    l.setErrorTypes(o || []);
  }, [o, l]), Qt(() => (n.current && l.mount(n.current), () => {
    l.unmount();
  }), [l]), /* @__PURE__ */ Tn.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var nD = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : rD;
const iD = new eS(), t3 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: i }) => (Qt(() => {
  v1({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), Ns.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ xf.jsxs(oS, { client: iD, children: [
  /* @__PURE__ */ xf.jsx(nD, { initialIsOpen: !1 }),
  i
] })), sD = [
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
], Mf = Ap.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Mf !== t && (sD.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Mf));
} catch (t) {
  console.error(t);
}
export {
  No as $,
  ZO as A,
  CO as B,
  Ss as C,
  Id as D,
  TO as E,
  FO as F,
  LO as G,
  NO as H,
  PO as I,
  UO as J,
  so as K,
  $O as L,
  qO as M,
  XO as N,
  HO as O,
  KO as P,
  Ht as Q,
  kp as R,
  MO as S,
  kf as T,
  Zn as U,
  KS as V,
  zO as W,
  cx as X,
  VO as Y,
  kO as Z,
  jO as _,
  ir as a,
  uO as a$,
  oo as a0,
  AO as a1,
  BO as a2,
  Ad as a3,
  Df as a4,
  tf as a5,
  lc as a6,
  uc as a7,
  hc as a8,
  fc as a9,
  $D as aA,
  WD as aB,
  qD as aC,
  QD as aD,
  zD as aE,
  BD as aF,
  JD as aG,
  YD as aH,
  VD as aI,
  HD as aJ,
  KD as aK,
  ZD as aL,
  iu as aM,
  Zo as aN,
  su as aO,
  g1 as aP,
  y1 as aQ,
  OD as aR,
  wf as aS,
  tO as aT,
  rO as aU,
  nO as aV,
  iO as aW,
  sO as aX,
  oO as aY,
  aO as aZ,
  cO as a_,
  yE as aa,
  wE as ab,
  mE as ac,
  bE as ad,
  _E as ae,
  EE as af,
  vE as ag,
  ID as ah,
  FD as ai,
  LD as aj,
  AD as ak,
  UD as al,
  RD as am,
  TD as an,
  ND as ao,
  PD as ap,
  CD as aq,
  MD as ar,
  xi as as,
  v1 as at,
  Dt as au,
  jD as av,
  kD as aw,
  eO as ax,
  XD as ay,
  GD as az,
  YO as b,
  lO as b0,
  fO as b1,
  hO as b2,
  dO as b3,
  hd as b4,
  qs as b5,
  SE as b6,
  dd as b7,
  Kr as b8,
  OO as b9,
  pO as ba,
  gO as bb,
  yO as bc,
  vO as bd,
  mO as be,
  bO as bf,
  wO as bg,
  _O as bh,
  EO as bi,
  SO as bj,
  xO as bk,
  DO as bl,
  iD as bm,
  t3 as bn,
  hr as c,
  sx as d,
  Sr as e,
  zS as f,
  e3 as g,
  Td as h,
  NS as i,
  Dc as j,
  Yn as k,
  ax as l,
  JO as m,
  Ru as n,
  uD as o,
  kr as p,
  RO as q,
  xc as r,
  ha as s,
  cD as t,
  WO as u,
  GO as v,
  fx as w,
  VS as x,
  Si as y,
  QO as z
};
