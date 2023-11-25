import zi, { useDebugValue as Wu, useEffect as Ht, useState as it, useMemo as ku, useCallback as Gu } from "react";
const Yu = "@puzzlehq/sdk", Ju = "Puzzle SDK", Qu = "0.1.35", Xu = "Your portal to privacy", Zu = "./dist/puzzle.umd.js", el = "./dist/puzzle.es.js", tl = "./dist/types/src/index.d.ts", rl = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, il = "module", nl = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types"
}, sl = {
  "@tanstack/react-query": "^4.29.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.9.0",
  "@walletconnect/utils": "^2.9.2",
  debug: "^4.3.4",
  immer: "^9.0.19",
  mitt: "^3.0.1",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, ol = {
  "@puzzlehq/types": "1.0.4",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, al = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, cl = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], ul = "Puzzle", ll = "ISC", hl = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, fl = "https://github.com/puzzlehq/puzzle-sdk#readme", dl = {
  name: Yu,
  displayName: Ju,
  version: Qu,
  description: Xu,
  main: Zu,
  module: el,
  types: tl,
  exports: rl,
  type: il,
  scripts: nl,
  dependencies: sl,
  devDependencies: ol,
  repository: al,
  keywords: cl,
  author: ul,
  license: ll,
  bugs: hl,
  homepage: fl
}, pl = Symbol(), Ms = Object.getPrototypeOf, Cn = /* @__PURE__ */ new WeakMap(), gl = (t) => t && (Cn.has(t) ? Cn.get(t) : Ms(t) === Object.prototype || Ms(t) === Array.prototype), yl = (t) => gl(t) && t[pl] || null, $s = (t, e = !0) => {
  Cn.set(t, e);
}, sn = (t) => typeof t == "object" && t !== null, rr = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakSet(), bl = (t = Object.is, e = (h, f) => new Proxy(h, f), r = (h) => sn(h) && !Di.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), i = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, n = /* @__PURE__ */ new WeakMap(), s = (h, f, g = i) => {
  const y = n.get(h);
  if ((y == null ? void 0 : y[0]) === f)
    return y[1];
  const w = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return $s(w, !0), n.set(h, [f, w]), Reflect.ownKeys(h).forEach((E) => {
    if (Object.getOwnPropertyDescriptor(w, E))
      return;
    const D = Reflect.get(h, E), O = {
      value: D,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Di.has(D))
      $s(D, !1);
    else if (D instanceof Promise)
      delete O.value, O.get = () => g(D);
    else if (rr.has(D)) {
      const [F, v] = rr.get(
        D
      );
      O.value = s(
        F,
        v(),
        g
      );
    }
    Object.defineProperty(w, E, O);
  }), Object.preventExtensions(w);
}, u = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (h) => {
  if (!sn(h))
    throw new Error("object required");
  const f = u.get(h);
  if (f)
    return f;
  let g = a[0];
  const y = /* @__PURE__ */ new Set(), w = (R, T = ++a[0]) => {
    g !== T && (g = T, y.forEach((U) => U(R, T)));
  };
  let E = a[1];
  const D = (R = ++a[1]) => (E !== R && !y.size && (E = R, F.forEach(([T]) => {
    const U = T[1](R);
    U > g && (g = U);
  })), g), O = (R) => (T, U) => {
    const B = [...T];
    B[1] = [R, ...B[1]], w(B, U);
  }, F = /* @__PURE__ */ new Map(), v = (R, T) => {
    if (y.size) {
      const U = T[3](O(R));
      F.set(R, [T, U]);
    } else
      F.set(R, [T]);
  }, I = (R) => {
    var T;
    const U = F.get(R);
    U && (F.delete(R), (T = U[1]) == null || T.call(U));
  }, b = (R) => (y.add(R), y.size === 1 && F.forEach(([U, B], k) => {
    const x = U[3](O(k));
    F.set(k, [U, x]);
  }), () => {
    y.delete(R), y.size === 0 && F.forEach(([U, B], k) => {
      B && (B(), F.set(k, [U]));
    });
  }), _ = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = e(_, {
    deleteProperty(R, T) {
      const U = Reflect.get(R, T);
      I(T);
      const B = Reflect.deleteProperty(R, T);
      return B && w(["delete", [T], U]), B;
    },
    set(R, T, U, B) {
      const k = Reflect.has(R, T), x = Reflect.get(R, T, B);
      if (k && (t(x, U) || u.has(U) && t(x, u.get(U))))
        return !0;
      I(T), sn(U) && (U = yl(U) || U);
      let P = U;
      if (U instanceof Promise)
        U.then((V) => {
          U.status = "fulfilled", U.value = V, w(["resolve", [T], V]);
        }).catch((V) => {
          U.status = "rejected", U.reason = V, w(["reject", [T], V]);
        });
      else {
        !rr.has(U) && r(U) && (P = l(U));
        const V = !Di.has(P) && rr.get(P);
        V && v(T, V);
      }
      return Reflect.set(R, T, P, B), w(["set", [T], U, x]), !0;
    }
  });
  u.set(h, o);
  const p = [
    _,
    D,
    s,
    b
  ];
  return rr.set(o, p), Reflect.ownKeys(h).forEach((R) => {
    const T = Object.getOwnPropertyDescriptor(
      h,
      R
    );
    "value" in T && (o[R] = h[R], delete T.value, delete T.writable), Object.defineProperty(_, R, T);
  }), o;
}) => [
  // public functions
  l,
  // shared state
  rr,
  Di,
  // internal things
  t,
  e,
  r,
  i,
  n,
  s,
  u,
  a
], [ml] = bl();
function sr(t = {}) {
  return ml(t);
}
function _r(t, e, r) {
  const i = rr.get(t);
  let n;
  const s = [], u = i[3];
  let a = !1;
  const h = u((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    n || (n = Promise.resolve().then(() => {
      n = void 0, a && e(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, h();
  };
}
function vl(t, e) {
  const r = rr.get(t), [i, n, s] = r;
  return s(i, n(), e);
}
const Ze = sr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ma = { state: Ze, subscribe(t) {
  return _r(Ze, () => t(Ze));
}, push(t, e) {
  t !== Ze.view && (Ze.view = t, e && (Ze.data = e), Ze.history.push(t));
}, reset(t) {
  Ze.view = t, Ze.history = [t];
}, replace(t) {
  Ze.history.length > 1 && (Ze.history[Ze.history.length - 1] = t, Ze.view = t);
}, goBack() {
  if (Ze.history.length > 1) {
    Ze.history.pop();
    const [t] = Ze.history.slice(-1);
    Ze.view = t;
  }
}, setData(t) {
  Ze.data = t;
} }, ht = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return ht.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return ht.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (ht.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let i = t;
  i.includes("://") || (i = t.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(e);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(t, e, r) {
  if (!ht.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let i = t;
  i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(e);
  return `${i}wc?uri=${n}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem(ht.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(ht.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(ht.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(ht.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Ma.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, wl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), at = sr({ enabled: wl, userSessionId: "", events: [], connectedWalletId: void 0 }), _l = { state: at, subscribe(t) {
  return _r(at.events, () => t(vl(at.events[at.events.length - 1])));
}, initialize() {
  at.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (at.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  at.connectedWalletId = t;
}, click(t) {
  if (at.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: at.userSessionId, timestamp: Date.now(), data: t };
    at.events.push(e);
  }
}, track(t) {
  if (at.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: at.userSessionId, timestamp: Date.now(), data: t };
    at.events.push(e);
  }
}, view(t) {
  if (at.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: at.userSessionId, timestamp: Date.now(), data: t };
    at.events.push(e);
  }
} }, jt = sr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Ut = { state: jt, subscribe(t) {
  return _r(jt, () => t(jt));
}, setChains(t) {
  jt.chains = t;
}, setWalletConnectUri(t) {
  jt.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  jt.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  jt.isCustomMobile = t;
}, setIsDataLoaded(t) {
  jt.isDataLoaded = t;
}, setIsUiLoaded(t) {
  jt.isUiLoaded = t;
}, setIsAuth(t) {
  jt.isAuth = t;
} }, Ii = sr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Nr = { state: Ii, subscribe(t) {
  return _r(Ii, () => t(Ii));
}, setConfig(t) {
  var e, r;
  _l.initialize(), Ut.setChains(t.chains), Ut.setIsAuth(!!t.enableAuthMode), Ut.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Ut.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), ht.setModalVersionInStorage(), Object.assign(Ii, t);
} };
var El = Object.defineProperty, js = Object.getOwnPropertySymbols, Sl = Object.prototype.hasOwnProperty, Dl = Object.prototype.propertyIsEnumerable, qs = (t, e, r) => e in t ? El(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Il = (t, e) => {
  for (var r in e || (e = {}))
    Sl.call(e, r) && qs(t, r, e[r]);
  if (js)
    for (var r of js(e))
      Dl.call(e, r) && qs(t, r, e[r]);
  return t;
};
const An = "https://explorer-api.walletconnect.com", Rn = "wcm", Tn = "js-2.6.2";
async function Oi(t, e) {
  const r = Il({ sdkType: Rn, sdkVersion: Tn }, e), i = new URL(t, An);
  return i.searchParams.append("projectId", Nr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const fr = { async getDesktopListings(t) {
  return Oi("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Oi("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Oi("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Oi("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${An}/w3m/v1/getWalletImage/${t}?projectId=${Nr.state.projectId}&sdkType=${Rn}&sdkVersion=${Tn}`;
}, getAssetImageUrl(t) {
  return `${An}/w3m/v1/getAssetImage/${t}?projectId=${Nr.state.projectId}&sdkType=${Rn}&sdkVersion=${Tn}`;
} };
var Ol = Object.defineProperty, zs = Object.getOwnPropertySymbols, xl = Object.prototype.hasOwnProperty, Cl = Object.prototype.propertyIsEnumerable, Bs = (t, e, r) => e in t ? Ol(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Al = (t, e) => {
  for (var r in e || (e = {}))
    xl.call(e, r) && Bs(t, r, e[r]);
  if (zs)
    for (var r of zs(e))
      Cl.call(e, r) && Bs(t, r, e[r]);
  return t;
};
const Ks = ht.isMobile(), qt = sr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Ab = { state: qt, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Nr.state;
  if (t === "NONE" || e === "ALL" && !t)
    return qt.recomendedWallets;
  if (ht.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: i } = await fr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = t.indexOf(s.id), l = t.indexOf(u.id);
      return a - l;
    }), qt.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Ut.state, n = r == null ? void 0 : r.join(","), s = ht.isArray(e), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: ht.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: a } = Ks ? await fr.getMobileListings(u) : await fr.getDesktopListings(u);
    qt.recomendedWallets = Object.values(a);
  }
  return qt.recomendedWallets;
}, async getWallets(t) {
  const e = Al({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Nr.state, { recomendedWallets: n } = qt;
  if (i === "ALL")
    return qt.wallets;
  n.length ? e.excludedIds = n.map((g) => g.id).join(",") : ht.isArray(r) && (e.excludedIds = r.join(",")), ht.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Ut.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: u } = t, { listings: a, total: l } = Ks ? await fr.getMobileListings(e) : await fr.getDesktopListings(e), h = Object.values(a), f = u ? "search" : "wallets";
  return qt[f] = { listings: [...qt[f].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(t) {
  return fr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return fr.getAssetImageUrl(t);
}, resetSearch() {
  qt.search = { listings: [], total: 0, page: 1 };
} }, Ir = sr({ open: !1 }), on = { state: Ir, subscribe(t) {
  return _r(Ir, () => t(Ir));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: i } = Ut.state;
    if (ht.removeWalletConnectDeepLink(), Ut.setWalletConnectUri(t == null ? void 0 : t.uri), Ut.setChains(t == null ? void 0 : t.chains), Ma.reset("ConnectWallet"), r && i)
      Ir.open = !0, e();
    else {
      const n = setInterval(() => {
        const s = Ut.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), Ir.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Ir.open = !1;
} };
var Rl = Object.defineProperty, Hs = Object.getOwnPropertySymbols, Tl = Object.prototype.hasOwnProperty, Nl = Object.prototype.propertyIsEnumerable, Vs = (t, e, r) => e in t ? Rl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Pl = (t, e) => {
  for (var r in e || (e = {}))
    Tl.call(e, r) && Vs(t, r, e[r]);
  if (Hs)
    for (var r of Hs(e))
      Nl.call(e, r) && Vs(t, r, e[r]);
  return t;
};
function Ll() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const zr = sr({ themeMode: Ll() ? "dark" : "light" }), Ws = { state: zr, subscribe(t) {
  return _r(zr, () => t(zr));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (zr.themeMode = e), r && (zr.themeVariables = Pl({}, r));
} }, dr = sr({ open: !1, message: "", variant: "success" }), Rb = { state: dr, subscribe(t) {
  return _r(dr, () => t(dr));
}, openToast(t, e) {
  dr.open = !0, dr.message = t, dr.variant = e;
}, closeToast() {
  dr.open = !1;
} };
let Fl = class {
  constructor(e) {
    this.openModal = on.open, this.closeModal = on.close, this.subscribeModal = on.subscribe, this.setTheme = Ws.setThemeConfig, Ws.setThemeConfig(e), Nr.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-c79250df.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Ut.setIsUiLoaded(!0);
    }
  }
};
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Xn(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(r, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return t[i];
      }
    });
  }), r;
}
var Zn = { exports: {} }, Rr = typeof Reflect == "object" ? Reflect : null, ks = Rr && typeof Rr.apply == "function" ? Rr.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, Ri;
Rr && typeof Rr.ownKeys == "function" ? Ri = Rr.ownKeys : Object.getOwnPropertySymbols ? Ri = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Ri = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Ul(t) {
  console && console.warn && console.warn(t);
}
var $a = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
Zn.exports = Ie;
Zn.exports.once = ql;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var Gs = 10;
function Ki(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Gs;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || $a(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Gs = t;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || $a(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function ja(t) {
  return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return ja(this);
};
Ie.prototype.emit = function(e) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var n = e === "error", s = this._events;
  if (s !== void 0)
    n = n && s.error === void 0;
  else if (!n)
    return !1;
  if (n) {
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
    ks(l, this, r);
  else
    for (var h = l.length, f = Ha(l, h), i = 0; i < h; ++i)
      ks(f[i], this, r);
  return !0;
};
function qa(t, e, r, i) {
  var n, s, u;
  if (Ki(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), u = s[e]), u === void 0)
    u = s[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = s[e] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = ja(t), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = u.length, Ul(a);
  }
  return t;
}
Ie.prototype.addListener = function(e, r) {
  return qa(this, e, r, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
  return qa(this, e, r, !0);
};
function Ml() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function za(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, n = Ml.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ie.prototype.once = function(e, r) {
  return Ki(r), this.on(e, za(this, e, r)), this;
};
Ie.prototype.prependOnceListener = function(e, r) {
  return Ki(r), this.prependListener(e, za(this, e, r)), this;
};
Ie.prototype.removeListener = function(e, r) {
  var i, n, s, u, a;
  if (Ki(r), n = this._events, n === void 0)
    return this;
  if (i = n[e], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || r));
  else if (typeof i != "function") {
    for (s = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === r || i[u].listener === r) {
        a = i[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? i.shift() : $l(i, s), i.length === 1 && (n[e] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", e, a || r);
  }
  return this;
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(e) {
  var r, i, n;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(i), u;
    for (n = 0; n < s.length; ++n)
      u = s[n], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (n = r.length - 1; n >= 0; n--)
      this.removeListener(e, r[n]);
  return this;
};
function Ba(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var n = i[e];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? jl(n) : Ha(n, n.length);
}
Ie.prototype.listeners = function(e) {
  return Ba(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return Ba(this, e, !1);
};
Ie.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ka.call(t, e);
};
Ie.prototype.listenerCount = Ka;
function Ka(t) {
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
Ie.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ri(this._events) : [];
};
function Ha(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function $l(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function jl(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function ql(t, e) {
  return new Promise(function(r, i) {
    function n(u) {
      t.removeListener(e, s), i(u);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", n), r([].slice.call(arguments));
    }
    Va(t, e, s, { once: !0 }), e !== "error" && zl(t, n, { once: !0 });
  });
}
function zl(t, e, r) {
  typeof t.on == "function" && Va(t, "error", e, r);
}
function Va(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function n(s) {
      i.once && t.removeEventListener(e, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Rt = Zn.exports;
const es = /* @__PURE__ */ Bi(Rt);
var Hi = {};
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
var Nn = function(t, e) {
  return Nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, Nn(t, e);
};
function Bl(t, e) {
  Nn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Pn = function() {
  return Pn = Object.assign || function(e) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Pn.apply(this, arguments);
};
function Kl(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)
      e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
  return r;
}
function Hl(t, e, r, i) {
  var n = arguments.length, s = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, i);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (u = t[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(e, r, s) : u(e, r)) || s);
  return n > 3 && s && Object.defineProperty(e, r, s), s;
}
function Vl(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function Wl(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function kl(t, e, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(f) {
      try {
        h(i.next(f));
      } catch (g) {
        u(g);
      }
    }
    function l(f) {
      try {
        h(i.throw(f));
      } catch (g) {
        u(g);
      }
    }
    function h(f) {
      f.done ? s(f.value) : n(f.value).then(a, l);
    }
    h((i = i.apply(t, e || [])).next());
  });
}
function Gl(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, n, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(h) {
    return function(f) {
      return l([h, f]);
    };
  }
  function l(h) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (i = 1, n && (s = h[0] & 2 ? n.return : h[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, h[1])).done)
          return s;
        switch (n = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return r.label++, { value: h[1], done: !1 };
          case 5:
            r.label++, n = h[1], h = [0];
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
        h = [6, f], n = 0;
      } finally {
        i = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function Yl(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function Jl(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Ln(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], i = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wa(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var i = r.call(t), n, s = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; )
      s.push(n.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function Ql() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Wa(arguments[e]));
  return t;
}
function Xl() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), n = 0, e = 0; e < r; e++)
    for (var s = arguments[e], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function ii(t) {
  return this instanceof ii ? (this.v = t, this) : new ii(t);
}
function Zl(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(y) {
    i[y] && (n[y] = function(w) {
      return new Promise(function(E, D) {
        s.push([y, w, E, D]) > 1 || a(y, w);
      });
    });
  }
  function a(y, w) {
    try {
      l(i[y](w));
    } catch (E) {
      g(s[0][3], E);
    }
  }
  function l(y) {
    y.value instanceof ii ? Promise.resolve(y.value.v).then(h, f) : g(s[0][2], y);
  }
  function h(y) {
    a("next", y);
  }
  function f(y) {
    a("throw", y);
  }
  function g(y, w) {
    y(w), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function eh(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(n, s) {
    e[n] = t[n] ? function(u) {
      return (r = !r) ? { value: ii(t[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function th(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Ln == "function" ? Ln(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(s) {
    r[s] = t[s] && function(u) {
      return new Promise(function(a, l) {
        u = t[s](u), n(a, l, u.done, u.value);
      });
    };
  }
  function n(s, u, a, l) {
    Promise.resolve(l).then(function(h) {
      s({ value: h, done: a });
    }, u);
  }
}
function rh(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function ih(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function nh(t) {
  return t && t.__esModule ? t : { default: t };
}
function sh(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function oh(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Pn;
  },
  __asyncDelegator: eh,
  __asyncGenerator: Zl,
  __asyncValues: th,
  __await: ii,
  __awaiter: kl,
  __classPrivateFieldGet: sh,
  __classPrivateFieldSet: oh,
  __createBinding: Yl,
  __decorate: Hl,
  __exportStar: Jl,
  __extends: Bl,
  __generator: Gl,
  __importDefault: nh,
  __importStar: ih,
  __makeTemplateObject: rh,
  __metadata: Wl,
  __param: Vl,
  __read: Wa,
  __rest: Kl,
  __spread: Ql,
  __spreadArrays: Xl,
  __values: Ln
}, Symbol.toStringTag, { value: "Module" })), Tt = /* @__PURE__ */ Xn(ah);
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
function ch(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
ci.safeJsonParse = ch;
function uh(t) {
  return typeof t == "string" ? t : JSON.stringify(t, (e, r) => typeof r > "u" ? null : r);
}
ci.safeJsonStringify = uh;
var Br = { exports: {} }, Ys;
function lh() {
  return Ys || (Ys = 1, function() {
    let t;
    function e() {
    }
    t = e, t.prototype.getItem = function(r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }, t.prototype.setItem = function(r, i) {
      this[r] = String(i);
    }, t.prototype.removeItem = function(r) {
      delete this[r];
    }, t.prototype.clear = function() {
      const r = this;
      Object.keys(r).forEach(function(i) {
        r[i] = void 0, delete r[i];
      });
    }, t.prototype.key = function(r) {
      return r = r || 0, Object.keys(this)[r];
    }, t.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof St < "u" && St.localStorage ? Br.exports = St.localStorage : typeof window < "u" && window.localStorage ? Br.exports = window.localStorage : Br.exports = new e();
  }()), Br.exports;
}
var an = {}, Kr = {}, Js;
function hh() {
  if (Js)
    return Kr;
  Js = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.IKeyValueStorage = void 0;
  class t {
  }
  return Kr.IKeyValueStorage = t, Kr;
}
var Hr = {}, Qs;
function fh() {
  if (Qs)
    return Hr;
  Qs = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.parseEntry = void 0;
  const t = ci;
  function e(r) {
    var i;
    return [r[0], t.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return Hr.parseEntry = e, Hr;
}
var Xs;
function dh() {
  return Xs || (Xs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Tt;
    e.__exportStar(hh(), t), e.__exportStar(fh(), t);
  }(an)), an;
}
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.KeyValueStorage = void 0;
const xr = Tt, Zs = ci, ph = xr.__importDefault(lh()), gh = dh();
class ka {
  constructor() {
    this.localStorage = ph.default;
  }
  getKeys() {
    return xr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return xr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(gh.parseEntry);
    });
  }
  getItem(e) {
    return xr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(e);
      if (r !== null)
        return Zs.safeJsonParse(r);
    });
  }
  setItem(e, r) {
    return xr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, Zs.safeJsonStringify(r));
    });
  }
  removeItem(e) {
    return xr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
Hi.KeyValueStorage = ka;
var yh = Hi.default = ka, Lr = {}, Vr = {}, X = {}, cn = {}, Wr = {}, eo;
function bh() {
  if (eo)
    return Wr;
  eo = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Wr.delay = t, Wr;
}
var pr = {}, un = {}, gr = {}, to;
function mh() {
  return to || (to = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.ONE_THOUSAND = gr.ONE_HUNDRED = void 0, gr.ONE_HUNDRED = 100, gr.ONE_THOUSAND = 1e3), gr;
}
var ln = {}, ro;
function vh() {
  return ro || (ro = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ln)), ln;
}
var io;
function Ga() {
  return io || (io = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Tt;
    e.__exportStar(mh(), t), e.__exportStar(vh(), t);
  }(un)), un;
}
var no;
function wh() {
  if (no)
    return pr;
  no = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.fromMiliseconds = pr.toMiliseconds = void 0;
  const t = Ga();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  pr.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return pr.fromMiliseconds = r, pr;
}
var so;
function _h() {
  return so || (so = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Tt;
    e.__exportStar(bh(), t), e.__exportStar(wh(), t);
  }(cn)), cn;
}
var Or = {}, oo;
function Eh() {
  if (oo)
    return Or;
  oo = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.Watch = void 0;
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
      const i = this.get(r);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const n = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: n });
    }
    get(r) {
      const i = this.timestamps.get(r);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return i;
    }
    elapsed(r) {
      const i = this.get(r);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return Or.Watch = t, Or.default = t, Or;
}
var hn = {}, kr = {}, ao;
function Sh() {
  if (ao)
    return kr;
  ao = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.IWatch = void 0;
  class t {
  }
  return kr.IWatch = t, kr;
}
var co;
function Dh() {
  return co || (co = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Tt.__exportStar(Sh(), t);
  }(hn)), hn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Tt;
  e.__exportStar(_h(), t), e.__exportStar(Eh(), t), e.__exportStar(Dh(), t), e.__exportStar(Ga(), t);
})(X);
var fn = {}, Gr = {};
let It = class {
};
const Ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: It
}, Symbol.toStringTag, { value: "Module" })), Oh = /* @__PURE__ */ Xn(Ih);
var uo;
function xh() {
  if (uo)
    return Gr;
  uo = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.IHeartBeat = void 0;
  const t = Oh;
  class e extends t.IEvents {
    constructor(i) {
      super();
    }
  }
  return Gr.IHeartBeat = e, Gr;
}
var lo;
function Ya() {
  return lo || (lo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Tt.__exportStar(xh(), t);
  }(fn)), fn;
}
var dn = {}, yr = {}, ho;
function Ch() {
  if (ho)
    return yr;
  ho = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.HEARTBEAT_EVENTS = yr.HEARTBEAT_INTERVAL = void 0;
  const t = X;
  return yr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, yr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, yr;
}
var fo;
function Ja() {
  return fo || (fo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Tt.__exportStar(Ch(), t);
  }(dn)), dn;
}
var po;
function Ah() {
  if (po)
    return Vr;
  po = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.HeartBeat = void 0;
  const t = Tt, e = Rt, r = X, i = Ya(), n = Ja();
  class s extends i.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = n.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || n.HEARTBEAT_INTERVAL;
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
      this.events.emit(n.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Vr.HeartBeat = s, Vr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Tt;
  e.__exportStar(Ah(), t), e.__exportStar(Ya(), t), e.__exportStar(Ja(), t);
})(Lr);
var ve = {}, pn, go;
function Rh() {
  if (go)
    return pn;
  go = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  pn = e;
  function e(r, i, n) {
    var s = n && n.stringify || t, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = i.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var h = 1; h < a; h++)
        l[h] = s(i[h]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = i.length;
    if (f === 0)
      return r;
    for (var g = "", y = 1 - u, w = -1, E = r && r.length || 0, D = 0; D < E; ) {
      if (r.charCodeAt(D) === 37 && D + 1 < E) {
        switch (w = w > -1 ? w : 0, r.charCodeAt(D + 1)) {
          case 100:
          case 102:
            if (y >= f || i[y] == null)
              break;
            w < D && (g += r.slice(w, D)), g += Number(i[y]), w = D + 2, D++;
            break;
          case 105:
            if (y >= f || i[y] == null)
              break;
            w < D && (g += r.slice(w, D)), g += Math.floor(Number(i[y])), w = D + 2, D++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || i[y] === void 0)
              break;
            w < D && (g += r.slice(w, D));
            var O = typeof i[y];
            if (O === "string") {
              g += "'" + i[y] + "'", w = D + 2, D++;
              break;
            }
            if (O === "function") {
              g += i[y].name || "<anonymous>", w = D + 2, D++;
              break;
            }
            g += s(i[y]), w = D + 2, D++;
            break;
          case 115:
            if (y >= f)
              break;
            w < D && (g += r.slice(w, D)), g += String(i[y]), w = D + 2, D++;
            break;
          case 37:
            w < D && (g += r.slice(w, D)), g += "%", w = D + 2, D++, y--;
            break;
        }
        ++y;
      }
      ++D;
    }
    return w === -1 ? r : (w < E && (g += r.slice(w)), g);
  }
  return pn;
}
var gn, yo;
function Th() {
  if (yo)
    return gn;
  yo = 1;
  const t = Rh();
  gn = n;
  const e = _().console || {}, r = {
    mapHttpRequest: E,
    mapHttpResponse: E,
    wrapRequestSerializer: D,
    wrapResponseSerializer: D,
    wrapErrorSerializer: D,
    req: E,
    res: E,
    err: y
  };
  function i(d, o) {
    return Array.isArray(d) ? d.filter(function(R) {
      return R !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function n(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = d.browser.write || e;
    d.browser.write && (d.browser.asObject = !0);
    const R = d.serializers || {}, T = i(d.browser.serialize, R);
    let U = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), d.enabled === !1 && (d.level = "silent");
    const k = d.level || "info", x = Object.create(p);
    x.log || (x.log = O), Object.defineProperty(x, "levelVal", {
      get: V
    }), Object.defineProperty(x, "level", {
      get: z,
      set: $
    });
    const P = {
      transmit: o,
      serialize: T,
      asObject: d.browser.asObject,
      levels: B,
      timestamp: w(d)
    };
    x.levels = n.levels, x.level = k, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = O, x.serializers = R, x._serialize = T, x._stdErrSerialize = U, x.child = q, o && (x._logEvent = g());
    function V() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function $(M) {
      if (M !== "silent" && !this.levels.values[M])
        throw Error("unknown level " + M);
      this._level = M, s(P, x, "error", "log"), s(P, x, "fatal", "error"), s(P, x, "warn", "error"), s(P, x, "info", "log"), s(P, x, "debug", "log"), s(P, x, "trace", "log");
    }
    function q(M, K) {
      if (!M)
        throw new Error("missing bindings for child Pino");
      K = K || {}, T && M.serializers && (K.serializers = M.serializers);
      const te = K.serializers;
      if (T && te) {
        var H = Object.assign({}, R, te), Z = d.browser.serialize === !0 ? Object.keys(H) : T;
        delete M.serializers, l([M], Z, H, this._stdErrSerialize);
      }
      function J(ee) {
        this._childLevel = (ee._childLevel | 0) + 1, this.error = h(ee, M, "error"), this.fatal = h(ee, M, "fatal"), this.warn = h(ee, M, "warn"), this.info = h(ee, M, "info"), this.debug = h(ee, M, "debug"), this.trace = h(ee, M, "trace"), H && (this.serializers = H, this._serialize = Z), o && (this._logEvent = g(
          [].concat(ee._logEvent.bindings, M)
        ));
      }
      return J.prototype = this, new J(this);
    }
    return x;
  }
  n.levels = {
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: F, epochTime: v, unixTime: I, isoTime: b });
  function s(d, o, p, R) {
    const T = Object.getPrototypeOf(o);
    o[p] = o.levelVal > o.levels.values[p] ? O : T[p] ? T[p] : e[p] || e[R] || O, u(d, o, p);
  }
  function u(d, o, p) {
    !d.transmit && o[p] === O || (o[p] = function(R) {
      return function() {
        const U = d.timestamp(), B = new Array(arguments.length), k = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var x = 0; x < B.length; x++)
          B[x] = arguments[x];
        if (d.serialize && !d.asObject && l(B, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? R.call(k, a(this, p, B, U)) : R.apply(k, B), d.transmit) {
          const P = d.transmit.level || o.level, V = n.levels.values[P], z = n.levels.values[p];
          if (z < V)
            return;
          f(this, {
            ts: U,
            methodLevel: p,
            methodValue: z,
            transmitLevel: P,
            transmitValue: n.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, B);
        }
      };
    }(o[p]));
  }
  function a(d, o, p, R) {
    d._serialize && l(p, d._serialize, d.serializers, d._stdErrSerialize);
    const T = p.slice();
    let U = T[0];
    const B = {};
    R && (B.time = R), B.level = n.levels.values[o];
    let k = (d._childLevel | 0) + 1;
    if (k < 1 && (k = 1), U !== null && typeof U == "object") {
      for (; k-- && typeof T[0] == "object"; )
        Object.assign(B, T.shift());
      U = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof U == "string" && (U = t(T.shift(), T));
    return U !== void 0 && (B.msg = U), B;
  }
  function l(d, o, p, R) {
    for (const T in d)
      if (R && d[T] instanceof Error)
        d[T] = n.stdSerializers.err(d[T]);
      else if (typeof d[T] == "object" && !Array.isArray(d[T]))
        for (const U in d[T])
          o && o.indexOf(U) > -1 && U in p && (d[T][U] = p[U](d[T][U]));
  }
  function h(d, o, p) {
    return function() {
      const R = new Array(1 + arguments.length);
      R[0] = o;
      for (var T = 1; T < R.length; T++)
        R[T] = arguments[T - 1];
      return d[p].apply(this, R);
    };
  }
  function f(d, o, p) {
    const R = o.send, T = o.ts, U = o.methodLevel, B = o.methodValue, k = o.val, x = d._logEvent.bindings;
    l(
      p,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = T, d._logEvent.messages = p.filter(function(P) {
      return x.indexOf(P) === -1;
    }), d._logEvent.level.label = U, d._logEvent.level.value = B, R(U, d._logEvent, k), d._logEvent = g(x);
  }
  function g(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function y(d) {
    const o = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const p in d)
      o[p] === void 0 && (o[p] = d[p]);
    return o;
  }
  function w(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? F : v;
  }
  function E() {
    return {};
  }
  function D(d) {
    return d;
  }
  function O() {
  }
  function F() {
    return !1;
  }
  function v() {
    return Date.now();
  }
  function I() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function _() {
    function d(o) {
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
      return d(self) || d(window) || d(this) || {};
    }
  }
  return gn;
}
var br = {}, bo;
function Qa() {
  return bo || (bo = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.PINO_CUSTOM_CONTEXT_KEY = br.PINO_LOGGER_DEFAULTS = void 0, br.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, br.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), br;
}
var dt = {}, mo;
function Nh() {
  if (mo)
    return dt;
  mo = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.generateChildLogger = dt.formatChildLoggerContext = dt.getLoggerContext = dt.setBrowserLoggerContext = dt.getBrowserLoggerContext = dt.getDefaultLoggerOptions = void 0;
  const t = Qa();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  dt.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  dt.getBrowserLoggerContext = r;
  function i(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[h] = l, a;
  }
  dt.setBrowserLoggerContext = i;
  function n(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof a.bindings > "u" ? h = r(a, l) : h = a.bindings().context || "", h;
  }
  dt.getLoggerContext = n;
  function s(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = n(a, h);
    return f.trim() ? `${f}/${l}` : l;
  }
  dt.formatChildLoggerContext = s;
  function u(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(a, l, h), g = a.child({ context: f });
    return i(g, f, h);
  }
  return dt.generateChildLogger = u, dt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Tt, r = e.__importDefault(Th());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Qa(), t), e.__exportStar(Nh(), t);
})(ve);
let Ph = class extends It {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Lh = class extends It {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Fh = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Uh = class extends It {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Mh = class extends It {
  constructor(e) {
    super();
  }
}, $h = class {
  constructor(e, r, i, n) {
    this.core = e, this.logger = r, this.name = i;
  }
}, jh = class extends It {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, qh = class extends It {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, zh = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Bh = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Kh = class {
  constructor(e) {
    this.client = e;
  }
};
const Hh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Vh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Xa(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Vh(t);
  } catch {
    return t;
  }
}
function ts(t) {
  return typeof t == "string" ? t : Hh(t) || "";
}
var rs = {}, Fr = {}, Vi = {}, Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.BrowserRandomSource = void 0;
const vo = 65536;
class Wh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let i = 0; i < r.length; i += vo)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, vo)));
    return r;
  }
}
Wi.BrowserRandomSource = Wh;
function kh(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ki = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
function Gh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Ot.wipe = Gh;
const Yh = {}, Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yh
}, Symbol.toStringTag, { value: "Module" })), Qh = /* @__PURE__ */ Xn(Jh);
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.NodeRandomSource = void 0;
const Xh = Ot;
class Zh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof kh < "u") {
      const e = Qh;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(e);
    for (let n = 0; n < i.length; n++)
      i[n] = r[n];
    return (0, Xh.wipe)(r), i;
  }
}
ki.NodeRandomSource = Zh;
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.SystemRandomSource = void 0;
const ef = Wi, tf = ki;
class rf {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new ef.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new tf.NodeRandomSource(), this._source.isAvailable) {
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
Vi.SystemRandomSource = rf;
var ne = {}, Za = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var h = a >>> 16 & 65535, f = a & 65535, g = l >>> 16 & 65535, y = l & 65535;
    return f * y + (h * y + f * g << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(a, l) {
    return a + l | 0;
  }
  t.add = r;
  function i(a, l) {
    return a - l | 0;
  }
  t.sub = i;
  function n(a, l) {
    return a << l | a >>> 32 - l;
  }
  t.rotl = n;
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
})(Za);
Object.defineProperty(ne, "__esModule", { value: !0 });
var ec = Za;
function nf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
ne.readInt16BE = nf;
function sf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
ne.readUint16BE = sf;
function of(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
ne.readInt16LE = of;
function af(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint16LE = af;
function tc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
ne.writeUint16BE = tc;
ne.writeInt16BE = tc;
function rc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
ne.writeUint16LE = rc;
ne.writeInt16LE = rc;
function Fn(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
ne.readInt32BE = Fn;
function Un(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
ne.readUint32BE = Un;
function Mn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
ne.readInt32LE = Mn;
function $n(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint32LE = $n;
function Li(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
ne.writeUint32BE = Li;
ne.writeInt32BE = Li;
function Fi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
ne.writeUint32LE = Fi;
ne.writeInt32LE = Fi;
function cf(t, e) {
  e === void 0 && (e = 0);
  var r = Fn(t, e), i = Fn(t, e + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
ne.readInt64BE = cf;
function uf(t, e) {
  e === void 0 && (e = 0);
  var r = Un(t, e), i = Un(t, e + 4);
  return r * 4294967296 + i;
}
ne.readUint64BE = uf;
function lf(t, e) {
  e === void 0 && (e = 0);
  var r = Mn(t, e), i = Mn(t, e + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
ne.readInt64LE = lf;
function hf(t, e) {
  e === void 0 && (e = 0);
  var r = $n(t, e), i = $n(t, e + 4);
  return i * 4294967296 + r;
}
ne.readUint64LE = hf;
function ic(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Li(t / 4294967296 >>> 0, e, r), Li(t >>> 0, e, r + 4), e;
}
ne.writeUint64BE = ic;
ne.writeInt64BE = ic;
function nc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Fi(t >>> 0, e, r), Fi(t / 4294967296 >>> 0, e, r + 4), e;
}
ne.writeUint64LE = nc;
ne.writeInt64LE = nc;
function ff(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = t / 8 + r - 1; s >= r; s--)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintBE = ff;
function df(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + t / 8; s++)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintLE = df;
function pf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!ec.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = t / 8 + i - 1; s >= i; s--)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintBE = pf;
function gf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!ec.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + t / 8; s++)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintLE = gf;
function yf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
ne.readFloat32BE = yf;
function bf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
ne.readFloat32LE = bf;
function mf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
ne.readFloat64BE = mf;
function vf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
ne.readFloat64LE = vf;
function wf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t), e;
}
ne.writeFloat32BE = wf;
function _f(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t, !0), e;
}
ne.writeFloat32LE = _f;
function Ef(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t), e;
}
ne.writeFloat64BE = Ef;
function Sf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t, !0), e;
}
ne.writeFloat64LE = Sf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Vi, r = ne, i = Ot;
  t.defaultRandomSource = new e.SystemRandomSource();
  function n(h, f = t.defaultRandomSource) {
    return f.randomBytes(h);
  }
  t.randomBytes = n;
  function s(h = t.defaultRandomSource) {
    const f = n(4, h), g = (0, r.readUint32LE)(f);
    return (0, i.wipe)(f), g;
  }
  t.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(h, f = u, g = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const w = f.length, E = 256 - 256 % w;
    for (; h > 0; ) {
      const D = n(Math.ceil(h * 256 / E), g);
      for (let O = 0; O < D.length && h > 0; O++) {
        const F = D[O];
        F < E && (y += f.charAt(F % w), h--);
      }
      (0, i.wipe)(D);
    }
    return y;
  }
  t.randomString = a;
  function l(h, f = u, g = t.defaultRandomSource) {
    const y = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return a(y, f, g);
  }
  t.randomStringForEntropy = l;
})(Fr);
var sc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ne, r = Ot;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var i = (
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
          var h = this._bytesHashed, f = this._bufferLength, g = h / 536870912 | 0, y = h << 3, w = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var E = f + 1; E < w - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(g, this._buffer, w - 8), e.writeUint32BE(y, this._buffer, w - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, w), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 8; E++)
          e.writeUint32BE(this._stateHi[E], l, E * 8), e.writeUint32BE(this._stateLo[E], l, E * 8 + 4);
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
  t.SHA512 = i;
  var n = new Int32Array([
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
  function s(a, l, h, f, g, y, w) {
    for (var E = h[0], D = h[1], O = h[2], F = h[3], v = h[4], I = h[5], b = h[6], _ = h[7], d = f[0], o = f[1], p = f[2], R = f[3], T = f[4], U = f[5], B = f[6], k = f[7], x, P, V, z, $, q, M, K; w >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var H = 8 * te + y;
        a[te] = e.readUint32BE(g, H), l[te] = e.readUint32BE(g, H + 4);
      }
      for (var te = 0; te < 80; te++) {
        var Z = E, J = D, ee = O, L = F, N = v, C = I, c = b, S = _, W = d, Y = o, he = p, be = R, de = T, _e = U, Ue = B, Ne = k;
        if (x = _, P = k, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = (v >>> 14 | T << 32 - 14) ^ (v >>> 18 | T << 32 - 18) ^ (T >>> 41 - 32 | v << 32 - (41 - 32)), P = (T >>> 14 | v << 32 - 14) ^ (T >>> 18 | v << 32 - 18) ^ (v >>> 41 - 32 | T << 32 - (41 - 32)), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = v & I ^ ~v & b, P = T & U ^ ~T & B, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = n[te * 2], P = n[te * 2 + 1], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = a[te % 16], P = l[te % 16], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, V = M & 65535 | K << 16, z = $ & 65535 | q << 16, x = V, P = z, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = (E >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | E << 32 - (34 - 32)) ^ (d >>> 39 - 32 | E << 32 - (39 - 32)), P = (d >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | d << 32 - (34 - 32)) ^ (E >>> 39 - 32 | d << 32 - (39 - 32)), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = E & D ^ E & O ^ D & O, P = d & o ^ d & p ^ o & p, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, S = M & 65535 | K << 16, Ne = $ & 65535 | q << 16, x = L, P = be, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = V, P = z, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, L = M & 65535 | K << 16, be = $ & 65535 | q << 16, D = Z, O = J, F = ee, v = L, I = N, b = C, _ = c, E = S, o = W, p = Y, R = he, T = be, U = de, B = _e, k = Ue, d = Ne, te % 16 === 15)
          for (var H = 0; H < 16; H++)
            x = a[H], P = l[H], $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = a[(H + 9) % 16], P = l[(H + 9) % 16], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, V = a[(H + 1) % 16], z = l[(H + 1) % 16], x = (V >>> 1 | z << 32 - 1) ^ (V >>> 8 | z << 32 - 8) ^ V >>> 7, P = (z >>> 1 | V << 32 - 1) ^ (z >>> 8 | V << 32 - 8) ^ (z >>> 7 | V << 32 - 7), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, V = a[(H + 14) % 16], z = l[(H + 14) % 16], x = (V >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | V << 32 - (61 - 32)) ^ V >>> 6, P = (z >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | V << 32 - 6), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, a[H] = M & 65535 | K << 16, l[H] = $ & 65535 | q << 16;
      }
      x = E, P = d, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[0], P = f[0], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[0] = E = M & 65535 | K << 16, f[0] = d = $ & 65535 | q << 16, x = D, P = o, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[1], P = f[1], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[1] = D = M & 65535 | K << 16, f[1] = o = $ & 65535 | q << 16, x = O, P = p, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[2], P = f[2], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[2] = O = M & 65535 | K << 16, f[2] = p = $ & 65535 | q << 16, x = F, P = R, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[3], P = f[3], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[3] = F = M & 65535 | K << 16, f[3] = R = $ & 65535 | q << 16, x = v, P = T, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[4], P = f[4], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[4] = v = M & 65535 | K << 16, f[4] = T = $ & 65535 | q << 16, x = I, P = U, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[5], P = f[5], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[5] = I = M & 65535 | K << 16, f[5] = U = $ & 65535 | q << 16, x = b, P = B, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[6], P = f[6], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[6] = b = M & 65535 | K << 16, f[6] = B = $ & 65535 | q << 16, x = _, P = k, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[7], P = f[7], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[7] = _ = M & 65535 | K << 16, f[7] = k = $ & 65535 | q << 16, y += 128, w -= 128;
    }
    return y;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(sc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Fr, r = sc, i = Ot;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function n(L) {
    const N = new Float64Array(16);
    if (L)
      for (let C = 0; C < L.length; C++)
        N[C] = L[C];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = n(), a = n([1]), l = n([
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
  ]), h = n([
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
  ]), f = n([
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
  ]), g = n([
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
  ]), y = n([
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
  function w(L, N) {
    for (let C = 0; C < 16; C++)
      L[C] = N[C] | 0;
  }
  function E(L) {
    let N = 1;
    for (let C = 0; C < 16; C++) {
      let c = L[C] + N + 65535;
      N = Math.floor(c / 65536), L[C] = c - N * 65536;
    }
    L[0] += N - 1 + 37 * (N - 1);
  }
  function D(L, N, C) {
    const c = ~(C - 1);
    for (let S = 0; S < 16; S++) {
      const W = c & (L[S] ^ N[S]);
      L[S] ^= W, N[S] ^= W;
    }
  }
  function O(L, N) {
    const C = n(), c = n();
    for (let S = 0; S < 16; S++)
      c[S] = N[S];
    E(c), E(c), E(c);
    for (let S = 0; S < 2; S++) {
      C[0] = c[0] - 65517;
      for (let Y = 1; Y < 15; Y++)
        C[Y] = c[Y] - 65535 - (C[Y - 1] >> 16 & 1), C[Y - 1] &= 65535;
      C[15] = c[15] - 32767 - (C[14] >> 16 & 1);
      const W = C[15] >> 16 & 1;
      C[14] &= 65535, D(c, C, 1 - W);
    }
    for (let S = 0; S < 16; S++)
      L[2 * S] = c[S] & 255, L[2 * S + 1] = c[S] >> 8;
  }
  function F(L, N) {
    let C = 0;
    for (let c = 0; c < 32; c++)
      C |= L[c] ^ N[c];
    return (1 & C - 1 >>> 8) - 1;
  }
  function v(L, N) {
    const C = new Uint8Array(32), c = new Uint8Array(32);
    return O(C, L), O(c, N), F(C, c);
  }
  function I(L) {
    const N = new Uint8Array(32);
    return O(N, L), N[0] & 1;
  }
  function b(L, N) {
    for (let C = 0; C < 16; C++)
      L[C] = N[2 * C] + (N[2 * C + 1] << 8);
    L[15] &= 32767;
  }
  function _(L, N, C) {
    for (let c = 0; c < 16; c++)
      L[c] = N[c] + C[c];
  }
  function d(L, N, C) {
    for (let c = 0; c < 16; c++)
      L[c] = N[c] - C[c];
  }
  function o(L, N, C) {
    let c, S, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Ue = 0, Ne = 0, ye = 0, pe = 0, fe = 0, ue = 0, ce = 0, ae = 0, oe = 0, re = 0, le = 0, ge = 0, ie = 0, me = 0, we = 0, Se = 0, De = 0, Ee = 0, Nt = 0, $t = 0, Xt = 0, _t = 0, cr = 0, $r = 0, bi = 0, Me = C[0], Pe = C[1], $e = C[2], je = C[3], qe = C[4], Le = C[5], Ve = C[6], We = C[7], ke = C[8], Ge = C[9], Ye = C[10], He = C[11], ze = C[12], Ae = C[13], Je = C[14], Qe = C[15];
    c = N[0], W += c * Me, Y += c * Pe, he += c * $e, be += c * je, de += c * qe, _e += c * Le, Ue += c * Ve, Ne += c * We, ye += c * ke, pe += c * Ge, fe += c * Ye, ue += c * He, ce += c * ze, ae += c * Ae, oe += c * Je, re += c * Qe, c = N[1], Y += c * Me, he += c * Pe, be += c * $e, de += c * je, _e += c * qe, Ue += c * Le, Ne += c * Ve, ye += c * We, pe += c * ke, fe += c * Ge, ue += c * Ye, ce += c * He, ae += c * ze, oe += c * Ae, re += c * Je, le += c * Qe, c = N[2], he += c * Me, be += c * Pe, de += c * $e, _e += c * je, Ue += c * qe, Ne += c * Le, ye += c * Ve, pe += c * We, fe += c * ke, ue += c * Ge, ce += c * Ye, ae += c * He, oe += c * ze, re += c * Ae, le += c * Je, ge += c * Qe, c = N[3], be += c * Me, de += c * Pe, _e += c * $e, Ue += c * je, Ne += c * qe, ye += c * Le, pe += c * Ve, fe += c * We, ue += c * ke, ce += c * Ge, ae += c * Ye, oe += c * He, re += c * ze, le += c * Ae, ge += c * Je, ie += c * Qe, c = N[4], de += c * Me, _e += c * Pe, Ue += c * $e, Ne += c * je, ye += c * qe, pe += c * Le, fe += c * Ve, ue += c * We, ce += c * ke, ae += c * Ge, oe += c * Ye, re += c * He, le += c * ze, ge += c * Ae, ie += c * Je, me += c * Qe, c = N[5], _e += c * Me, Ue += c * Pe, Ne += c * $e, ye += c * je, pe += c * qe, fe += c * Le, ue += c * Ve, ce += c * We, ae += c * ke, oe += c * Ge, re += c * Ye, le += c * He, ge += c * ze, ie += c * Ae, me += c * Je, we += c * Qe, c = N[6], Ue += c * Me, Ne += c * Pe, ye += c * $e, pe += c * je, fe += c * qe, ue += c * Le, ce += c * Ve, ae += c * We, oe += c * ke, re += c * Ge, le += c * Ye, ge += c * He, ie += c * ze, me += c * Ae, we += c * Je, Se += c * Qe, c = N[7], Ne += c * Me, ye += c * Pe, pe += c * $e, fe += c * je, ue += c * qe, ce += c * Le, ae += c * Ve, oe += c * We, re += c * ke, le += c * Ge, ge += c * Ye, ie += c * He, me += c * ze, we += c * Ae, Se += c * Je, De += c * Qe, c = N[8], ye += c * Me, pe += c * Pe, fe += c * $e, ue += c * je, ce += c * qe, ae += c * Le, oe += c * Ve, re += c * We, le += c * ke, ge += c * Ge, ie += c * Ye, me += c * He, we += c * ze, Se += c * Ae, De += c * Je, Ee += c * Qe, c = N[9], pe += c * Me, fe += c * Pe, ue += c * $e, ce += c * je, ae += c * qe, oe += c * Le, re += c * Ve, le += c * We, ge += c * ke, ie += c * Ge, me += c * Ye, we += c * He, Se += c * ze, De += c * Ae, Ee += c * Je, Nt += c * Qe, c = N[10], fe += c * Me, ue += c * Pe, ce += c * $e, ae += c * je, oe += c * qe, re += c * Le, le += c * Ve, ge += c * We, ie += c * ke, me += c * Ge, we += c * Ye, Se += c * He, De += c * ze, Ee += c * Ae, Nt += c * Je, $t += c * Qe, c = N[11], ue += c * Me, ce += c * Pe, ae += c * $e, oe += c * je, re += c * qe, le += c * Le, ge += c * Ve, ie += c * We, me += c * ke, we += c * Ge, Se += c * Ye, De += c * He, Ee += c * ze, Nt += c * Ae, $t += c * Je, Xt += c * Qe, c = N[12], ce += c * Me, ae += c * Pe, oe += c * $e, re += c * je, le += c * qe, ge += c * Le, ie += c * Ve, me += c * We, we += c * ke, Se += c * Ge, De += c * Ye, Ee += c * He, Nt += c * ze, $t += c * Ae, Xt += c * Je, _t += c * Qe, c = N[13], ae += c * Me, oe += c * Pe, re += c * $e, le += c * je, ge += c * qe, ie += c * Le, me += c * Ve, we += c * We, Se += c * ke, De += c * Ge, Ee += c * Ye, Nt += c * He, $t += c * ze, Xt += c * Ae, _t += c * Je, cr += c * Qe, c = N[14], oe += c * Me, re += c * Pe, le += c * $e, ge += c * je, ie += c * qe, me += c * Le, we += c * Ve, Se += c * We, De += c * ke, Ee += c * Ge, Nt += c * Ye, $t += c * He, Xt += c * ze, _t += c * Ae, cr += c * Je, $r += c * Qe, c = N[15], re += c * Me, le += c * Pe, ge += c * $e, ie += c * je, me += c * qe, we += c * Le, Se += c * Ve, De += c * We, Ee += c * ke, Nt += c * Ge, $t += c * Ye, Xt += c * He, _t += c * ze, cr += c * Ae, $r += c * Je, bi += c * Qe, W += 38 * le, Y += 38 * ge, he += 38 * ie, be += 38 * me, de += 38 * we, _e += 38 * Se, Ue += 38 * De, Ne += 38 * Ee, ye += 38 * Nt, pe += 38 * $t, fe += 38 * Xt, ue += 38 * _t, ce += 38 * cr, ae += 38 * $r, oe += 38 * bi, S = 1, c = W + S + 65535, S = Math.floor(c / 65536), W = c - S * 65536, c = Y + S + 65535, S = Math.floor(c / 65536), Y = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = Ue + S + 65535, S = Math.floor(c / 65536), Ue = c - S * 65536, c = Ne + S + 65535, S = Math.floor(c / 65536), Ne = c - S * 65536, c = ye + S + 65535, S = Math.floor(c / 65536), ye = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = fe + S + 65535, S = Math.floor(c / 65536), fe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ae + S + 65535, S = Math.floor(c / 65536), ae = c - S * 65536, c = oe + S + 65535, S = Math.floor(c / 65536), oe = c - S * 65536, c = re + S + 65535, S = Math.floor(c / 65536), re = c - S * 65536, W += S - 1 + 37 * (S - 1), S = 1, c = W + S + 65535, S = Math.floor(c / 65536), W = c - S * 65536, c = Y + S + 65535, S = Math.floor(c / 65536), Y = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = Ue + S + 65535, S = Math.floor(c / 65536), Ue = c - S * 65536, c = Ne + S + 65535, S = Math.floor(c / 65536), Ne = c - S * 65536, c = ye + S + 65535, S = Math.floor(c / 65536), ye = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = fe + S + 65535, S = Math.floor(c / 65536), fe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ae + S + 65535, S = Math.floor(c / 65536), ae = c - S * 65536, c = oe + S + 65535, S = Math.floor(c / 65536), oe = c - S * 65536, c = re + S + 65535, S = Math.floor(c / 65536), re = c - S * 65536, W += S - 1 + 37 * (S - 1), L[0] = W, L[1] = Y, L[2] = he, L[3] = be, L[4] = de, L[5] = _e, L[6] = Ue, L[7] = Ne, L[8] = ye, L[9] = pe, L[10] = fe, L[11] = ue, L[12] = ce, L[13] = ae, L[14] = oe, L[15] = re;
  }
  function p(L, N) {
    o(L, N, N);
  }
  function R(L, N) {
    const C = n();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 253; c >= 0; c--)
      p(C, C), c !== 2 && c !== 4 && o(C, C, N);
    for (c = 0; c < 16; c++)
      L[c] = C[c];
  }
  function T(L, N) {
    const C = n();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 250; c >= 0; c--)
      p(C, C), c !== 1 && o(C, C, N);
    for (c = 0; c < 16; c++)
      L[c] = C[c];
  }
  function U(L, N) {
    const C = n(), c = n(), S = n(), W = n(), Y = n(), he = n(), be = n(), de = n(), _e = n();
    d(C, L[1], L[0]), d(_e, N[1], N[0]), o(C, C, _e), _(c, L[0], L[1]), _(_e, N[0], N[1]), o(c, c, _e), o(S, L[3], N[3]), o(S, S, h), o(W, L[2], N[2]), _(W, W, W), d(Y, c, C), d(he, W, S), _(be, W, S), _(de, c, C), o(L[0], Y, he), o(L[1], de, be), o(L[2], be, he), o(L[3], Y, de);
  }
  function B(L, N, C) {
    for (let c = 0; c < 4; c++)
      D(L[c], N[c], C);
  }
  function k(L, N) {
    const C = n(), c = n(), S = n();
    R(S, N[2]), o(C, N[0], S), o(c, N[1], S), O(L, c), L[31] ^= I(C) << 7;
  }
  function x(L, N, C) {
    w(L[0], u), w(L[1], a), w(L[2], a), w(L[3], u);
    for (let c = 255; c >= 0; --c) {
      const S = C[c / 8 | 0] >> (c & 7) & 1;
      B(L, N, S), U(N, L), U(L, L), B(L, N, S);
    }
  }
  function P(L, N) {
    const C = [n(), n(), n(), n()];
    w(C[0], f), w(C[1], g), w(C[2], a), o(C[3], f, g), x(L, C, N);
  }
  function V(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(L);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(32), c = [n(), n(), n(), n()];
    P(c, N), k(C, c);
    const S = new Uint8Array(64);
    return S.set(L), S.set(C, 32), {
      publicKey: C,
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = V;
  function z(L) {
    const N = (0, e.randomBytes)(32, L), C = V(N);
    return (0, i.wipe)(N), C;
  }
  t.generateKeyPair = z;
  function $(L) {
    if (L.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = $;
  const q = new Float64Array([
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
  function M(L, N) {
    let C, c, S, W;
    for (c = 63; c >= 32; --c) {
      for (C = 0, S = c - 32, W = c - 12; S < W; ++S)
        N[S] += C - 16 * N[c] * q[S - (c - 32)], C = Math.floor((N[S] + 128) / 256), N[S] -= C * 256;
      N[S] += C, N[c] = 0;
    }
    for (C = 0, S = 0; S < 32; S++)
      N[S] += C - (N[31] >> 4) * q[S], C = N[S] >> 8, N[S] &= 255;
    for (S = 0; S < 32; S++)
      N[S] -= C * q[S];
    for (c = 0; c < 32; c++)
      N[c + 1] += N[c] >> 8, L[c] = N[c] & 255;
  }
  function K(L) {
    const N = new Float64Array(64);
    for (let C = 0; C < 64; C++)
      N[C] = L[C];
    for (let C = 0; C < 64; C++)
      L[C] = 0;
    M(L, N);
  }
  function te(L, N) {
    const C = new Float64Array(64), c = [n(), n(), n(), n()], S = (0, r.hash)(L.subarray(0, 32));
    S[0] &= 248, S[31] &= 127, S[31] |= 64;
    const W = new Uint8Array(64);
    W.set(S.subarray(32), 32);
    const Y = new r.SHA512();
    Y.update(W.subarray(32)), Y.update(N);
    const he = Y.digest();
    Y.clean(), K(he), P(c, he), k(W, c), Y.reset(), Y.update(W.subarray(0, 32)), Y.update(L.subarray(32)), Y.update(N);
    const be = Y.digest();
    K(be);
    for (let de = 0; de < 32; de++)
      C[de] = he[de];
    for (let de = 0; de < 32; de++)
      for (let _e = 0; _e < 32; _e++)
        C[de + _e] += be[de] * S[_e];
    return M(W.subarray(32), C), W;
  }
  t.sign = te;
  function H(L, N) {
    const C = n(), c = n(), S = n(), W = n(), Y = n(), he = n(), be = n();
    return w(L[2], a), b(L[1], N), p(S, L[1]), o(W, S, l), d(S, S, L[2]), _(W, L[2], W), p(Y, W), p(he, Y), o(be, he, Y), o(C, be, S), o(C, C, W), T(C, C), o(C, C, S), o(C, C, W), o(C, C, W), o(L[0], C, W), p(c, L[0]), o(c, c, W), v(c, S) && o(L[0], L[0], y), p(c, L[0]), o(c, c, W), v(c, S) ? -1 : (I(L[0]) === N[31] >> 7 && d(L[0], u, L[0]), o(L[3], L[0], L[1]), 0);
  }
  function Z(L, N, C) {
    const c = new Uint8Array(32), S = [n(), n(), n(), n()], W = [n(), n(), n(), n()];
    if (C.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(W, L))
      return !1;
    const Y = new r.SHA512();
    Y.update(C.subarray(0, 32)), Y.update(L), Y.update(N);
    const he = Y.digest();
    return K(he), x(S, W, he), P(W, C.subarray(32)), U(S, W), k(c, S), !F(C, c);
  }
  t.verify = Z;
  function J(L) {
    let N = [n(), n(), n(), n()];
    if (H(N, L))
      throw new Error("Ed25519: invalid public key");
    let C = n(), c = n(), S = N[1];
    _(C, a, S), d(c, a, S), R(c, c), o(C, C, c);
    let W = new Uint8Array(32);
    return O(W, C), W;
  }
  t.convertPublicKeyToX25519 = J;
  function ee(L) {
    const N = (0, r.hash)(L.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(N.subarray(0, 32));
    return (0, i.wipe)(N), C;
  }
  t.convertSecretKeyToX25519 = ee;
})(rs);
const Df = "EdDSA", If = "JWT", oc = ".", ac = "base64url", Of = "utf8", xf = "utf8", Cf = ":", Af = "did", Rf = "key", wo = "base58btc", Tf = "z", Nf = "K36", Pf = 32;
function is(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function cc(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? is(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function jn(t, e) {
  e || (e = t.reduce((n, s) => n + s.length, 0));
  const r = cc(e);
  let i = 0;
  for (const n of t)
    r.set(n, i), i += n.length;
  return is(r);
}
function Lf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < t.length; n++) {
    var s = t.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function g(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var D = 0, O = 0, F = 0, v = E.length; F !== v && E[F] === 0; )
      F++, D++;
    for (var I = (v - F) * f + 1 >>> 0, b = new Uint8Array(I); F !== v; ) {
      for (var _ = E[F], d = 0, o = I - 1; (_ !== 0 || d < O) && o !== -1; o--, d++)
        _ += 256 * b[o] >>> 0, b[o] = _ % a >>> 0, _ = _ / a >>> 0;
      if (_ !== 0)
        throw new Error("Non-zero carry");
      O = d, F++;
    }
    for (var p = I - O; p !== I && b[p] === 0; )
      p++;
    for (var R = l.repeat(D); p < I; ++p)
      R += t.charAt(b[p]);
    return R;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var D = 0;
    if (E[D] !== " ") {
      for (var O = 0, F = 0; E[D] === l; )
        O++, D++;
      for (var v = (E.length - D) * h + 1 >>> 0, I = new Uint8Array(v); E[D]; ) {
        var b = r[E.charCodeAt(D)];
        if (b === 255)
          return;
        for (var _ = 0, d = v - 1; (b !== 0 || _ < F) && d !== -1; d--, _++)
          b += a * I[d] >>> 0, I[d] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        F = _, D++;
      }
      if (E[D] !== " ") {
        for (var o = v - F; o !== v && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(O + (v - o)), R = O; o !== v; )
          p[R++] = I[o++];
        return p;
      }
    }
  }
  function w(E) {
    var D = y(E);
    if (D)
      return D;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: g,
    decodeUnsafe: y,
    decode: w
  };
}
var Ff = Lf, Uf = Ff;
const Mf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, $f = (t) => new TextEncoder().encode(t), jf = (t) => new TextDecoder().decode(t);
class qf {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class zf {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
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
    return uc(this, e);
  }
}
class Bf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return uc(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const uc = (t, e) => new Bf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Kf {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new qf(e, r, i), this.decoder = new zf(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Gi = ({ name: t, prefix: e, encode: r, decode: i }) => new Kf(t, e, r, i), ui = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = Uf(r, e);
  return Gi({
    prefix: t,
    name: e,
    encode: i,
    decode: (s) => Mf(n(s))
  });
}, Hf = (t, e, r, i) => {
  const n = {};
  for (let f = 0; f < e.length; ++f)
    n[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const g = n[t[f]];
    if (g === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | g, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Vf = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & a >> u];
  if (u && (s += e[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Gi({
  prefix: e,
  name: t,
  encode(n) {
    return Vf(n, i, r);
  },
  decode(n) {
    return Hf(n, i, r, t);
  }
}), Wf = Gi({
  prefix: "\0",
  name: "identity",
  encode: (t) => jf(t),
  decode: (t) => $f(t)
}), kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Wf
}, Symbol.toStringTag, { value: "Module" })), Gf = nt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Gf
}, Symbol.toStringTag, { value: "Module" })), Jf = nt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Jf
}, Symbol.toStringTag, { value: "Module" })), Xf = ui({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Xf
}, Symbol.toStringTag, { value: "Module" })), ed = nt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), td = nt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: ed,
  base16upper: td
}, Symbol.toStringTag, { value: "Module" })), id = nt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), nd = nt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), sd = nt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), od = nt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), ad = nt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), cd = nt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), ud = nt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), ld = nt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), hd = nt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: id,
  base32hex: ad,
  base32hexpad: ud,
  base32hexpadupper: ld,
  base32hexupper: cd,
  base32pad: sd,
  base32padupper: od,
  base32upper: nd,
  base32z: hd
}, Symbol.toStringTag, { value: "Module" })), dd = ui({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), pd = ui({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: dd,
  base36upper: pd
}, Symbol.toStringTag, { value: "Module" })), yd = ui({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), bd = ui({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: yd,
  base58flickr: bd
}, Symbol.toStringTag, { value: "Module" })), vd = nt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), wd = nt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), _d = nt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Ed = nt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: vd,
  base64pad: wd,
  base64url: _d,
  base64urlpad: Ed
}, Symbol.toStringTag, { value: "Module" })), lc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Dd = lc.reduce((t, e, r) => (t[r] = e, t), []), Id = lc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Od(t) {
  return t.reduce((e, r) => (e += Dd[r], e), "");
}
function xd(t) {
  const e = [];
  for (const r of t) {
    const i = Id[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Cd = Gi({
  prefix: "🚀",
  name: "base256emoji",
  encode: Od,
  decode: xd
}), Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Cd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const _o = {
  ...kf,
  ...Yf,
  ...Qf,
  ...Zf,
  ...rd,
  ...fd,
  ...gd,
  ...md,
  ...Sd,
  ...Ad
};
function hc(t, e, r, i) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: i }
  };
}
const Eo = hc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), yn = hc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = cc(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), fc = {
  utf8: Eo,
  "utf-8": Eo,
  hex: _o.base16,
  latin1: yn,
  ascii: yn,
  binary: yn,
  ..._o
};
function bt(t, e = "utf8") {
  const r = fc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function wt(t, e = "utf8") {
  const r = fc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? is(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ui(t) {
  return bt(wt(ts(t), Of), ac);
}
function dc(t) {
  const e = wt(Nf, wo), r = Tf + bt(jn([e, t]), wo);
  return [Af, Rf, r].join(Cf);
}
function Rd(t) {
  return bt(t, ac);
}
function Td(t) {
  return wt([Ui(t.header), Ui(t.payload)].join(oc), xf);
}
function Nd(t) {
  return [
    Ui(t.header),
    Ui(t.payload),
    Rd(t.signature)
  ].join(oc);
}
function So(t = Fr.randomBytes(Pf)) {
  return rs.generateKeyPairFromSeed(t);
}
async function Pd(t, e, r, i, n = X.fromMiliseconds(Date.now())) {
  const s = { alg: Df, typ: If }, u = dc(i.publicKey), a = n + r, l = { iss: u, sub: t, aud: e, iat: n, exp: a }, h = Td({ header: s, payload: l }), f = rs.sign(i.secretKey, h);
  return Nd({ header: s, payload: l, signature: f });
}
var ns = {}, Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
var ct = ne, qn = Ot, Ld = 20;
function Fd(t, e, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], g = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], w = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], D = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], O = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], I = i, b = n, _ = s, d = u, o = a, p = l, R = h, T = f, U = g, B = y, k = w, x = E, P = D, V = O, z = F, $ = v, q = 0; q < Ld; q += 2)
    I = I + o | 0, P ^= I, P = P >>> 32 - 16 | P << 16, U = U + P | 0, o ^= U, o = o >>> 32 - 12 | o << 12, b = b + p | 0, V ^= b, V = V >>> 32 - 16 | V << 16, B = B + V | 0, p ^= B, p = p >>> 32 - 12 | p << 12, _ = _ + R | 0, z ^= _, z = z >>> 32 - 16 | z << 16, k = k + z | 0, R ^= k, R = R >>> 32 - 12 | R << 12, d = d + T | 0, $ ^= d, $ = $ >>> 32 - 16 | $ << 16, x = x + $ | 0, T ^= x, T = T >>> 32 - 12 | T << 12, _ = _ + R | 0, z ^= _, z = z >>> 32 - 8 | z << 8, k = k + z | 0, R ^= k, R = R >>> 32 - 7 | R << 7, d = d + T | 0, $ ^= d, $ = $ >>> 32 - 8 | $ << 8, x = x + $ | 0, T ^= x, T = T >>> 32 - 7 | T << 7, b = b + p | 0, V ^= b, V = V >>> 32 - 8 | V << 8, B = B + V | 0, p ^= B, p = p >>> 32 - 7 | p << 7, I = I + o | 0, P ^= I, P = P >>> 32 - 8 | P << 8, U = U + P | 0, o ^= U, o = o >>> 32 - 7 | o << 7, I = I + p | 0, $ ^= I, $ = $ >>> 32 - 16 | $ << 16, k = k + $ | 0, p ^= k, p = p >>> 32 - 12 | p << 12, b = b + R | 0, P ^= b, P = P >>> 32 - 16 | P << 16, x = x + P | 0, R ^= x, R = R >>> 32 - 12 | R << 12, _ = _ + T | 0, V ^= _, V = V >>> 32 - 16 | V << 16, U = U + V | 0, T ^= U, T = T >>> 32 - 12 | T << 12, d = d + o | 0, z ^= d, z = z >>> 32 - 16 | z << 16, B = B + z | 0, o ^= B, o = o >>> 32 - 12 | o << 12, _ = _ + T | 0, V ^= _, V = V >>> 32 - 8 | V << 8, U = U + V | 0, T ^= U, T = T >>> 32 - 7 | T << 7, d = d + o | 0, z ^= d, z = z >>> 32 - 8 | z << 8, B = B + z | 0, o ^= B, o = o >>> 32 - 7 | o << 7, b = b + R | 0, P ^= b, P = P >>> 32 - 8 | P << 8, x = x + P | 0, R ^= x, R = R >>> 32 - 7 | R << 7, I = I + p | 0, $ ^= I, $ = $ >>> 32 - 8 | $ << 8, k = k + $ | 0, p ^= k, p = p >>> 32 - 7 | p << 7;
  ct.writeUint32LE(I + i | 0, t, 0), ct.writeUint32LE(b + n | 0, t, 4), ct.writeUint32LE(_ + s | 0, t, 8), ct.writeUint32LE(d + u | 0, t, 12), ct.writeUint32LE(o + a | 0, t, 16), ct.writeUint32LE(p + l | 0, t, 20), ct.writeUint32LE(R + h | 0, t, 24), ct.writeUint32LE(T + f | 0, t, 28), ct.writeUint32LE(U + g | 0, t, 32), ct.writeUint32LE(B + y | 0, t, 36), ct.writeUint32LE(k + w | 0, t, 40), ct.writeUint32LE(x + E | 0, t, 44), ct.writeUint32LE(P + D | 0, t, 48), ct.writeUint32LE(V + O | 0, t, 52), ct.writeUint32LE(z + F | 0, t, 56), ct.writeUint32LE($ + v | 0, t, 60);
}
function pc(t, e, r, i, n) {
  if (n === void 0 && (n = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (n === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - e.length, s.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, u = n;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Fd(a, s, t);
    for (var h = l; h < l + 64 && h < r.length; h++)
      i[h] = r[h] ^ a[h - l];
    Md(s, 0, u);
  }
  return qn.wipe(a), n === 0 && qn.wipe(s), i;
}
Yi.streamXOR = pc;
function Ud(t, e, r, i) {
  return i === void 0 && (i = 0), qn.wipe(r), pc(t, e, r, r, i);
}
Yi.stream = Ud;
function Md(t, e, r) {
  for (var i = 1; r--; )
    i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var gc = {}, or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
function $d(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
or.select = $d;
function jd(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
or.lessOrEqual = jd;
function yc(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, i = 0; i < t.length; i++)
    r |= t[i] ^ e[i];
  return 1 & r - 1 >>> 8;
}
or.compare = yc;
function qd(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : yc(t, e) !== 0;
}
or.equal = qd;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = or, r = Ot;
  t.DIGEST_LENGTH = 16;
  var i = (
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
        var g = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | g << 9) & 8191;
        var y = a[8] | a[9] << 8;
        this._r[4] = (g >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var w = a[10] | a[11] << 8;
        this._r[6] = (y >>> 14 | w << 2) & 8191;
        var E = a[12] | a[13] << 8;
        this._r[7] = (w >>> 11 | E << 5) & 8065;
        var D = a[14] | a[15] << 8;
        this._r[8] = (E >>> 8 | D << 8) & 8191, this._r[9] = D >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, h) {
        for (var f = this._fin ? 0 : 2048, g = this._h[0], y = this._h[1], w = this._h[2], E = this._h[3], D = this._h[4], O = this._h[5], F = this._h[6], v = this._h[7], I = this._h[8], b = this._h[9], _ = this._r[0], d = this._r[1], o = this._r[2], p = this._r[3], R = this._r[4], T = this._r[5], U = this._r[6], B = this._r[7], k = this._r[8], x = this._r[9]; h >= 16; ) {
          var P = a[l + 0] | a[l + 1] << 8;
          g += P & 8191;
          var V = a[l + 2] | a[l + 3] << 8;
          y += (P >>> 13 | V << 3) & 8191;
          var z = a[l + 4] | a[l + 5] << 8;
          w += (V >>> 10 | z << 6) & 8191;
          var $ = a[l + 6] | a[l + 7] << 8;
          E += (z >>> 7 | $ << 9) & 8191;
          var q = a[l + 8] | a[l + 9] << 8;
          D += ($ >>> 4 | q << 12) & 8191, O += q >>> 1 & 8191;
          var M = a[l + 10] | a[l + 11] << 8;
          F += (q >>> 14 | M << 2) & 8191;
          var K = a[l + 12] | a[l + 13] << 8;
          v += (M >>> 11 | K << 5) & 8191;
          var te = a[l + 14] | a[l + 15] << 8;
          I += (K >>> 8 | te << 8) & 8191, b += te >>> 5 | f;
          var H = 0, Z = H;
          Z += g * _, Z += y * (5 * x), Z += w * (5 * k), Z += E * (5 * B), Z += D * (5 * U), H = Z >>> 13, Z &= 8191, Z += O * (5 * T), Z += F * (5 * R), Z += v * (5 * p), Z += I * (5 * o), Z += b * (5 * d), H += Z >>> 13, Z &= 8191;
          var J = H;
          J += g * d, J += y * _, J += w * (5 * x), J += E * (5 * k), J += D * (5 * B), H = J >>> 13, J &= 8191, J += O * (5 * U), J += F * (5 * T), J += v * (5 * R), J += I * (5 * p), J += b * (5 * o), H += J >>> 13, J &= 8191;
          var ee = H;
          ee += g * o, ee += y * d, ee += w * _, ee += E * (5 * x), ee += D * (5 * k), H = ee >>> 13, ee &= 8191, ee += O * (5 * B), ee += F * (5 * U), ee += v * (5 * T), ee += I * (5 * R), ee += b * (5 * p), H += ee >>> 13, ee &= 8191;
          var L = H;
          L += g * p, L += y * o, L += w * d, L += E * _, L += D * (5 * x), H = L >>> 13, L &= 8191, L += O * (5 * k), L += F * (5 * B), L += v * (5 * U), L += I * (5 * T), L += b * (5 * R), H += L >>> 13, L &= 8191;
          var N = H;
          N += g * R, N += y * p, N += w * o, N += E * d, N += D * _, H = N >>> 13, N &= 8191, N += O * (5 * x), N += F * (5 * k), N += v * (5 * B), N += I * (5 * U), N += b * (5 * T), H += N >>> 13, N &= 8191;
          var C = H;
          C += g * T, C += y * R, C += w * p, C += E * o, C += D * d, H = C >>> 13, C &= 8191, C += O * _, C += F * (5 * x), C += v * (5 * k), C += I * (5 * B), C += b * (5 * U), H += C >>> 13, C &= 8191;
          var c = H;
          c += g * U, c += y * T, c += w * R, c += E * p, c += D * o, H = c >>> 13, c &= 8191, c += O * d, c += F * _, c += v * (5 * x), c += I * (5 * k), c += b * (5 * B), H += c >>> 13, c &= 8191;
          var S = H;
          S += g * B, S += y * U, S += w * T, S += E * R, S += D * p, H = S >>> 13, S &= 8191, S += O * o, S += F * d, S += v * _, S += I * (5 * x), S += b * (5 * k), H += S >>> 13, S &= 8191;
          var W = H;
          W += g * k, W += y * B, W += w * U, W += E * T, W += D * R, H = W >>> 13, W &= 8191, W += O * p, W += F * o, W += v * d, W += I * _, W += b * (5 * x), H += W >>> 13, W &= 8191;
          var Y = H;
          Y += g * x, Y += y * k, Y += w * B, Y += E * U, Y += D * T, H = Y >>> 13, Y &= 8191, Y += O * R, Y += F * p, Y += v * o, Y += I * d, Y += b * _, H += Y >>> 13, Y &= 8191, H = (H << 2) + H | 0, H = H + Z | 0, Z = H & 8191, H = H >>> 13, J += H, g = Z, y = J, w = ee, E = L, D = N, O = C, F = c, v = S, I = W, b = Y, l += 16, h -= 16;
        }
        this._h[0] = g, this._h[1] = y, this._h[2] = w, this._h[3] = E, this._h[4] = D, this._h[5] = O, this._h[6] = F, this._h[7] = v, this._h[8] = I, this._h[9] = b;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var h = new Uint16Array(10), f, g, y, w;
        if (this._leftover) {
          for (w = this._leftover, this._buffer[w++] = 1; w < 16; w++)
            this._buffer[w] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, w = 2; w < 10; w++)
          this._h[w] += f, f = this._h[w] >>> 13, this._h[w] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, w = 1; w < 10; w++)
          h[w] = this._h[w] + f, f = h[w] >>> 13, h[w] &= 8191;
        for (h[9] -= 8192, g = (f ^ 1) - 1, w = 0; w < 10; w++)
          h[w] &= g;
        for (g = ~g, w = 0; w < 10; w++)
          this._h[w] = this._h[w] & g | h[w];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, w = 1; w < 8; w++)
          y = (this._h[w] + this._pad[w] | 0) + (y >>> 16) | 0, this._h[w] = y & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, h = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var g = 0; g < f; g++)
            this._buffer[this._leftover + g] = a[l + g];
          if (h -= f, l += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(a, l, f), l += f, h -= f), h) {
          for (var g = 0; g < h; g++)
            this._buffer[this._leftover + g] = a[l + g];
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
  t.Poly1305 = i;
  function n(u, a) {
    var l = new i(u);
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.oneTimeAuth = n;
  function s(u, a) {
    return u.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(u, a);
  }
  t.equal = s;
})(gc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Yi, r = gc, i = Ot, n = ne, s = or;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return l.prototype.seal = function(h, f, g, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var w = new Uint8Array(16);
        w.set(h, w.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, w, E, 4);
        var D = f.length + this.tagLength, O;
        if (y) {
          if (y.length !== D)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          O = y;
        } else
          O = new Uint8Array(D);
        return e.streamXOR(this._key, w, f, O, 4), this._authenticate(O.subarray(O.length - this.tagLength, O.length), E, O.subarray(0, O.length - this.tagLength), g), i.wipe(w), O;
      }, l.prototype.open = function(h, f, g, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var w = new Uint8Array(16);
        w.set(h, w.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, w, E, 4);
        var D = new Uint8Array(this.tagLength);
        if (this._authenticate(D, E, f.subarray(0, f.length - this.tagLength), g), !s.equal(D, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var O = f.length - this.tagLength, F;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F = y;
        } else
          F = new Uint8Array(O);
        return e.streamXOR(this._key, w, f.subarray(0, f.length - this.tagLength), F, 4), i.wipe(w), F;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(h, f, g, y) {
        var w = new r.Poly1305(f);
        y && (w.update(y), y.length % 16 > 0 && w.update(u.subarray(y.length % 16))), w.update(g), g.length % 16 > 0 && w.update(u.subarray(g.length % 16));
        var E = new Uint8Array(8);
        y && n.writeUint64LE(y.length, E), w.update(E), n.writeUint64LE(g.length, E), w.update(E);
        for (var D = w.digest(), O = 0; O < D.length; O++)
          h[O] = D[O];
        w.clean(), i.wipe(D), i.wipe(E);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(ns);
var bc = {}, li = {}, ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
function zd(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
ss.isSerializableHash = zd;
Object.defineProperty(li, "__esModule", { value: !0 });
var zt = ss, Bd = or, Kd = Ot, mc = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(i).clean() : i.set(r);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 54;
      this._inner.update(i);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 106;
      this._outer.update(i), zt.isSerializableHash(this._inner) && zt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Kd.wipe(i);
    }
    return t.prototype.reset = function() {
      if (!zt.isSerializableHash(this._inner) || !zt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      zt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), zt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!zt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!zt.isSerializableHash(this._inner) || !zt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!zt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
li.HMAC = mc;
function Hd(t, e, r) {
  var i = new mc(t, e);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
li.hmac = Hd;
li.equal = Bd.equal;
Object.defineProperty(bc, "__esModule", { value: !0 });
var Do = li, Io = Ot, Vd = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
      var s = Do.hmac(this._hash, i, r);
      this._hmac = new Do.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), i = 0; i < r.length; i++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[i] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), Io.wipe(this._buffer), Io.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Wd = bc.HKDF = Vd, Ji = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ne, r = Ot;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var i = (
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
          var h = this._bytesHashed, f = this._bufferLength, g = h / 536870912 | 0, y = h << 3, w = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var E = f + 1; E < w - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(g, this._buffer, w - 8), e.writeUint32BE(y, this._buffer, w - 4), s(this._temp, this._state, this._buffer, 0, w), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 4; E++)
          e.writeUint32BE(this._state[E], l, E * 4);
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
  t.SHA256 = i;
  var n = new Int32Array([
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
  function s(a, l, h, f, g) {
    for (; g >= 64; ) {
      for (var y = l[0], w = l[1], E = l[2], D = l[3], O = l[4], F = l[5], v = l[6], I = l[7], b = 0; b < 16; b++) {
        var _ = f + b * 4;
        a[b] = e.readUint32BE(h, _);
      }
      for (var b = 16; b < 64; b++) {
        var d = a[b - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[b - 15];
        var p = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[b] = (o + a[b - 7] | 0) + (p + a[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var o = (((O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7)) + (O & F ^ ~O & v) | 0) + (I + (n[b] + a[b] | 0) | 0) | 0, p = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & w ^ y & E ^ w & E) | 0;
        I = v, v = F, F = O, O = D + o | 0, D = E, E = w, w = y, y = o + p | 0;
      }
      l[0] += y, l[1] += w, l[2] += E, l[3] += D, l[4] += O, l[5] += F, l[6] += v, l[7] += I, f += 64, g -= 64;
    }
    return f;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(Ji);
var os = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Fr, r = Ot;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function i(b) {
    const _ = new Float64Array(16);
    if (b)
      for (let d = 0; d < b.length; d++)
        _[d] = b[d];
    return _;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(b) {
    let _ = 1;
    for (let d = 0; d < 16; d++) {
      let o = b[d] + _ + 65535;
      _ = Math.floor(o / 65536), b[d] = o - _ * 65536;
    }
    b[0] += _ - 1 + 37 * (_ - 1);
  }
  function a(b, _, d) {
    const o = ~(d - 1);
    for (let p = 0; p < 16; p++) {
      const R = o & (b[p] ^ _[p]);
      b[p] ^= R, _[p] ^= R;
    }
  }
  function l(b, _) {
    const d = i(), o = i();
    for (let p = 0; p < 16; p++)
      o[p] = _[p];
    u(o), u(o), u(o);
    for (let p = 0; p < 2; p++) {
      d[0] = o[0] - 65517;
      for (let T = 1; T < 15; T++)
        d[T] = o[T] - 65535 - (d[T - 1] >> 16 & 1), d[T - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const R = d[15] >> 16 & 1;
      d[14] &= 65535, a(o, d, 1 - R);
    }
    for (let p = 0; p < 16; p++)
      b[2 * p] = o[p] & 255, b[2 * p + 1] = o[p] >> 8;
  }
  function h(b, _) {
    for (let d = 0; d < 16; d++)
      b[d] = _[2 * d] + (_[2 * d + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, _, d) {
    for (let o = 0; o < 16; o++)
      b[o] = _[o] + d[o];
  }
  function g(b, _, d) {
    for (let o = 0; o < 16; o++)
      b[o] = _[o] - d[o];
  }
  function y(b, _, d) {
    let o, p, R = 0, T = 0, U = 0, B = 0, k = 0, x = 0, P = 0, V = 0, z = 0, $ = 0, q = 0, M = 0, K = 0, te = 0, H = 0, Z = 0, J = 0, ee = 0, L = 0, N = 0, C = 0, c = 0, S = 0, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Ue = 0, Ne = 0, ye = d[0], pe = d[1], fe = d[2], ue = d[3], ce = d[4], ae = d[5], oe = d[6], re = d[7], le = d[8], ge = d[9], ie = d[10], me = d[11], we = d[12], Se = d[13], De = d[14], Ee = d[15];
    o = _[0], R += o * ye, T += o * pe, U += o * fe, B += o * ue, k += o * ce, x += o * ae, P += o * oe, V += o * re, z += o * le, $ += o * ge, q += o * ie, M += o * me, K += o * we, te += o * Se, H += o * De, Z += o * Ee, o = _[1], T += o * ye, U += o * pe, B += o * fe, k += o * ue, x += o * ce, P += o * ae, V += o * oe, z += o * re, $ += o * le, q += o * ge, M += o * ie, K += o * me, te += o * we, H += o * Se, Z += o * De, J += o * Ee, o = _[2], U += o * ye, B += o * pe, k += o * fe, x += o * ue, P += o * ce, V += o * ae, z += o * oe, $ += o * re, q += o * le, M += o * ge, K += o * ie, te += o * me, H += o * we, Z += o * Se, J += o * De, ee += o * Ee, o = _[3], B += o * ye, k += o * pe, x += o * fe, P += o * ue, V += o * ce, z += o * ae, $ += o * oe, q += o * re, M += o * le, K += o * ge, te += o * ie, H += o * me, Z += o * we, J += o * Se, ee += o * De, L += o * Ee, o = _[4], k += o * ye, x += o * pe, P += o * fe, V += o * ue, z += o * ce, $ += o * ae, q += o * oe, M += o * re, K += o * le, te += o * ge, H += o * ie, Z += o * me, J += o * we, ee += o * Se, L += o * De, N += o * Ee, o = _[5], x += o * ye, P += o * pe, V += o * fe, z += o * ue, $ += o * ce, q += o * ae, M += o * oe, K += o * re, te += o * le, H += o * ge, Z += o * ie, J += o * me, ee += o * we, L += o * Se, N += o * De, C += o * Ee, o = _[6], P += o * ye, V += o * pe, z += o * fe, $ += o * ue, q += o * ce, M += o * ae, K += o * oe, te += o * re, H += o * le, Z += o * ge, J += o * ie, ee += o * me, L += o * we, N += o * Se, C += o * De, c += o * Ee, o = _[7], V += o * ye, z += o * pe, $ += o * fe, q += o * ue, M += o * ce, K += o * ae, te += o * oe, H += o * re, Z += o * le, J += o * ge, ee += o * ie, L += o * me, N += o * we, C += o * Se, c += o * De, S += o * Ee, o = _[8], z += o * ye, $ += o * pe, q += o * fe, M += o * ue, K += o * ce, te += o * ae, H += o * oe, Z += o * re, J += o * le, ee += o * ge, L += o * ie, N += o * me, C += o * we, c += o * Se, S += o * De, W += o * Ee, o = _[9], $ += o * ye, q += o * pe, M += o * fe, K += o * ue, te += o * ce, H += o * ae, Z += o * oe, J += o * re, ee += o * le, L += o * ge, N += o * ie, C += o * me, c += o * we, S += o * Se, W += o * De, Y += o * Ee, o = _[10], q += o * ye, M += o * pe, K += o * fe, te += o * ue, H += o * ce, Z += o * ae, J += o * oe, ee += o * re, L += o * le, N += o * ge, C += o * ie, c += o * me, S += o * we, W += o * Se, Y += o * De, he += o * Ee, o = _[11], M += o * ye, K += o * pe, te += o * fe, H += o * ue, Z += o * ce, J += o * ae, ee += o * oe, L += o * re, N += o * le, C += o * ge, c += o * ie, S += o * me, W += o * we, Y += o * Se, he += o * De, be += o * Ee, o = _[12], K += o * ye, te += o * pe, H += o * fe, Z += o * ue, J += o * ce, ee += o * ae, L += o * oe, N += o * re, C += o * le, c += o * ge, S += o * ie, W += o * me, Y += o * we, he += o * Se, be += o * De, de += o * Ee, o = _[13], te += o * ye, H += o * pe, Z += o * fe, J += o * ue, ee += o * ce, L += o * ae, N += o * oe, C += o * re, c += o * le, S += o * ge, W += o * ie, Y += o * me, he += o * we, be += o * Se, de += o * De, _e += o * Ee, o = _[14], H += o * ye, Z += o * pe, J += o * fe, ee += o * ue, L += o * ce, N += o * ae, C += o * oe, c += o * re, S += o * le, W += o * ge, Y += o * ie, he += o * me, be += o * we, de += o * Se, _e += o * De, Ue += o * Ee, o = _[15], Z += o * ye, J += o * pe, ee += o * fe, L += o * ue, N += o * ce, C += o * ae, c += o * oe, S += o * re, W += o * le, Y += o * ge, he += o * ie, be += o * me, de += o * we, _e += o * Se, Ue += o * De, Ne += o * Ee, R += 38 * J, T += 38 * ee, U += 38 * L, B += 38 * N, k += 38 * C, x += 38 * c, P += 38 * S, V += 38 * W, z += 38 * Y, $ += 38 * he, q += 38 * be, M += 38 * de, K += 38 * _e, te += 38 * Ue, H += 38 * Ne, p = 1, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = x + p + 65535, p = Math.floor(o / 65536), x = o - p * 65536, o = P + p + 65535, p = Math.floor(o / 65536), P = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = M + p + 65535, p = Math.floor(o / 65536), M = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = te + p + 65535, p = Math.floor(o / 65536), te = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, R += p - 1 + 37 * (p - 1), p = 1, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = x + p + 65535, p = Math.floor(o / 65536), x = o - p * 65536, o = P + p + 65535, p = Math.floor(o / 65536), P = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = M + p + 65535, p = Math.floor(o / 65536), M = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = te + p + 65535, p = Math.floor(o / 65536), te = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, R += p - 1 + 37 * (p - 1), b[0] = R, b[1] = T, b[2] = U, b[3] = B, b[4] = k, b[5] = x, b[6] = P, b[7] = V, b[8] = z, b[9] = $, b[10] = q, b[11] = M, b[12] = K, b[13] = te, b[14] = H, b[15] = Z;
  }
  function w(b, _) {
    y(b, _, _);
  }
  function E(b, _) {
    const d = i();
    for (let o = 0; o < 16; o++)
      d[o] = _[o];
    for (let o = 253; o >= 0; o--)
      w(d, d), o !== 2 && o !== 4 && y(d, d, _);
    for (let o = 0; o < 16; o++)
      b[o] = d[o];
  }
  function D(b, _) {
    const d = new Uint8Array(32), o = new Float64Array(80), p = i(), R = i(), T = i(), U = i(), B = i(), k = i();
    for (let z = 0; z < 31; z++)
      d[z] = b[z];
    d[31] = b[31] & 127 | 64, d[0] &= 248, h(o, _);
    for (let z = 0; z < 16; z++)
      R[z] = o[z];
    p[0] = U[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = d[z >>> 3] >>> (z & 7) & 1;
      a(p, R, $), a(T, U, $), f(B, p, T), g(p, p, T), f(T, R, U), g(R, R, U), w(U, B), w(k, p), y(p, T, p), y(T, R, B), f(B, p, T), g(p, p, T), w(R, p), g(T, U, k), y(p, T, s), f(p, p, U), y(T, T, p), y(p, U, k), y(U, R, o), w(R, B), a(p, R, $), a(T, U, $);
    }
    for (let z = 0; z < 16; z++)
      o[z + 16] = p[z], o[z + 32] = T[z], o[z + 48] = R[z], o[z + 64] = U[z];
    const x = o.subarray(32), P = o.subarray(16);
    E(x, x), y(P, P, x);
    const V = new Uint8Array(32);
    return l(V, P), V;
  }
  t.scalarMult = D;
  function O(b) {
    return D(b, n);
  }
  t.scalarMultBase = O;
  function F(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const _ = new Uint8Array(b);
    return {
      publicKey: O(_),
      secretKey: _
    };
  }
  t.generateKeyPairFromSeed = F;
  function v(b) {
    const _ = (0, e.randomBytes)(32, b), d = F(_);
    return (0, r.wipe)(_), d;
  }
  t.generateKeyPair = v;
  function I(b, _, d = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (_.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = D(b, _);
    if (d) {
      let p = 0;
      for (let R = 0; R < o.length; R++)
        p |= o[R];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  t.sharedKey = I;
})(os);
var Oo = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = e.length, s; i < n; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}, kd = (
  /** @class */
  function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Gd = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Yd = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return t;
  }()
), Jd = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Qd = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Xd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Zd = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, xo = 3, ep = [
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
  ["searchbot", Xd]
], Co = [
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
function tp(t) {
  return t ? Ao(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Qd() : typeof navigator < "u" ? Ao(navigator.userAgent) : np();
}
function rp(t) {
  return t !== "" && ep.reduce(function(e, r) {
    var i = r[0], n = r[1];
    if (e)
      return e;
    var s = n.exec(t);
    return !!s && [i, s];
  }, !1);
}
function Ao(t) {
  var e = rp(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new Jd();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < xo && (n = Oo(Oo([], n, !0), sp(xo - n.length), !0)) : n = [];
  var s = n.join("."), u = ip(t), a = Zd.exec(t);
  return a && a[1] ? new Yd(r, s, u, a[1]) : new kd(r, s, u);
}
function ip(t) {
  for (var e = 0, r = Co.length; e < r; e++) {
    var i = Co[e], n = i[0], s = i[1], u = s.exec(t);
    if (u)
      return n;
  }
  return null;
}
function np() {
  var t = typeof process < "u" && process.version;
  return t ? new Gd(process.version.slice(1)) : null;
}
function sp(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = wc = Oe.getLocation = Oe.getLocationOrThrow = as = Oe.getNavigator = Oe.getNavigatorOrThrow = vc = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function Er(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Oe.getFromWindow = Er;
function Ur(t) {
  const e = Er(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = Ur;
function op() {
  return Ur("document");
}
Oe.getDocumentOrThrow = op;
function ap() {
  return Er("document");
}
var vc = Oe.getDocument = ap;
function cp() {
  return Ur("navigator");
}
Oe.getNavigatorOrThrow = cp;
function up() {
  return Er("navigator");
}
var as = Oe.getNavigator = up;
function lp() {
  return Ur("location");
}
Oe.getLocationOrThrow = lp;
function hp() {
  return Er("location");
}
var wc = Oe.getLocation = hp;
function fp() {
  return Ur("crypto");
}
Oe.getCryptoOrThrow = fp;
function dp() {
  return Er("crypto");
}
Oe.getCrypto = dp;
function pp() {
  return Ur("localStorage");
}
Oe.getLocalStorageOrThrow = pp;
function gp() {
  return Er("localStorage");
}
Oe.getLocalStorage = gp;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
var _c = cs.getWindowMetadata = void 0;
const Ro = Oe;
function yp() {
  let t, e;
  try {
    t = Ro.getDocumentOrThrow(), e = Ro.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const g = t.getElementsByTagName("link"), y = [];
    for (let w = 0; w < g.length; w++) {
      const E = g[w], D = E.getAttribute("rel");
      if (D && D.toLowerCase().indexOf("icon") > -1) {
        const O = E.getAttribute("href");
        if (O)
          if (O.toLowerCase().indexOf("https:") === -1 && O.toLowerCase().indexOf("http:") === -1 && O.indexOf("//") !== 0) {
            let F = e.protocol + "//" + e.host;
            if (O.indexOf("/") === 0)
              F += O;
            else {
              const v = e.pathname.split("/");
              v.pop();
              const I = v.join("/");
              F += I + "/" + O;
            }
            y.push(F);
          } else if (O.indexOf("//") === 0) {
            const F = e.protocol + O;
            y.push(F);
          } else
            y.push(O);
      }
    }
    return y;
  }
  function i(...g) {
    const y = t.getElementsByTagName("meta");
    for (let w = 0; w < y.length; w++) {
      const E = y[w], D = ["itemprop", "property", "name"].map((O) => E.getAttribute(O)).filter((O) => O ? g.includes(O) : !1);
      if (D.length && D) {
        const O = E.getAttribute("content");
        if (O)
          return O;
      }
    }
    return "";
  }
  function n() {
    let g = i("name", "og:site_name", "og:title", "twitter:title");
    return g || (g = t.title), g;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = n(), a = s(), l = e.origin, h = r();
  return {
    description: a,
    url: l,
    icons: h,
    name: u
  };
}
_c = cs.getWindowMetadata = yp;
var ni = {}, bp = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Ec = "%[a-f0-9]{2}", To = new RegExp("(" + Ec + ")|([^%]+?)", "gi"), No = new RegExp("(" + Ec + ")+", "gi");
function zn(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), i = t.slice(e);
  return Array.prototype.concat.call([], zn(r), zn(i));
}
function mp(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(To) || [], r = 1; r < e.length; r++)
      t = zn(e, r).join(""), e = t.match(To) || [];
    return t;
  }
}
function vp(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = No.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = mp(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = No.exec(t);
  }
  e["%C2"] = "�";
  for (var n = Object.keys(e), s = 0; s < n.length; s++) {
    var u = n[s];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var wp = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return vp(t);
  }
}, _p = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, Ep = function(t, e) {
  for (var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0; s < i.length; s++) {
    var u = i[s], a = t[u];
    (n ? e.indexOf(u) !== -1 : e(u, a, t)) && (r[u] = a);
  }
  return r;
};
(function(t) {
  const e = bp, r = wp, i = _p, n = Ep, s = (v) => v == null, u = Symbol("encodeFragmentIdentifier");
  function a(v) {
    switch (v.arrayFormat) {
      case "index":
        return (I) => (b, _) => {
          const d = b.length;
          return _ === void 0 || v.skipNull && _ === null || v.skipEmptyString && _ === "" ? b : _ === null ? [...b, [f(I, v), "[", d, "]"].join("")] : [
            ...b,
            [f(I, v), "[", f(d, v), "]=", f(_, v)].join("")
          ];
        };
      case "bracket":
        return (I) => (b, _) => _ === void 0 || v.skipNull && _ === null || v.skipEmptyString && _ === "" ? b : _ === null ? [...b, [f(I, v), "[]"].join("")] : [...b, [f(I, v), "[]=", f(_, v)].join("")];
      case "colon-list-separator":
        return (I) => (b, _) => _ === void 0 || v.skipNull && _ === null || v.skipEmptyString && _ === "" ? b : _ === null ? [...b, [f(I, v), ":list="].join("")] : [...b, [f(I, v), ":list=", f(_, v)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const I = v.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (_, d) => d === void 0 || v.skipNull && d === null || v.skipEmptyString && d === "" ? _ : (d = d === null ? "" : d, _.length === 0 ? [[f(b, v), I, f(d, v)].join("")] : [[_, f(d, v)].join(v.arrayFormatSeparator)]);
      }
      default:
        return (I) => (b, _) => _ === void 0 || v.skipNull && _ === null || v.skipEmptyString && _ === "" ? b : _ === null ? [...b, f(I, v)] : [...b, [f(I, v), "=", f(_, v)].join("")];
    }
  }
  function l(v) {
    let I;
    switch (v.arrayFormat) {
      case "index":
        return (b, _, d) => {
          if (I = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !I) {
            d[b] = _;
            return;
          }
          d[b] === void 0 && (d[b] = {}), d[b][I[1]] = _;
        };
      case "bracket":
        return (b, _, d) => {
          if (I = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !I) {
            d[b] = _;
            return;
          }
          if (d[b] === void 0) {
            d[b] = [_];
            return;
          }
          d[b] = [].concat(d[b], _);
        };
      case "colon-list-separator":
        return (b, _, d) => {
          if (I = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !I) {
            d[b] = _;
            return;
          }
          if (d[b] === void 0) {
            d[b] = [_];
            return;
          }
          d[b] = [].concat(d[b], _);
        };
      case "comma":
      case "separator":
        return (b, _, d) => {
          const o = typeof _ == "string" && _.includes(v.arrayFormatSeparator), p = typeof _ == "string" && !o && g(_, v).includes(v.arrayFormatSeparator);
          _ = p ? g(_, v) : _;
          const R = o || p ? _.split(v.arrayFormatSeparator).map((T) => g(T, v)) : _ === null ? _ : g(_, v);
          d[b] = R;
        };
      case "bracket-separator":
        return (b, _, d) => {
          const o = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !o) {
            d[b] = _ && g(_, v);
            return;
          }
          const p = _ === null ? [] : _.split(v.arrayFormatSeparator).map((R) => g(R, v));
          if (d[b] === void 0) {
            d[b] = p;
            return;
          }
          d[b] = [].concat(d[b], p);
        };
      default:
        return (b, _, d) => {
          if (d[b] === void 0) {
            d[b] = _;
            return;
          }
          d[b] = [].concat(d[b], _);
        };
    }
  }
  function h(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(v, I) {
    return I.encode ? I.strict ? e(v) : encodeURIComponent(v) : v;
  }
  function g(v, I) {
    return I.decode ? r(v) : v;
  }
  function y(v) {
    return Array.isArray(v) ? v.sort() : typeof v == "object" ? y(Object.keys(v)).sort((I, b) => Number(I) - Number(b)).map((I) => v[I]) : v;
  }
  function w(v) {
    const I = v.indexOf("#");
    return I !== -1 && (v = v.slice(0, I)), v;
  }
  function E(v) {
    let I = "";
    const b = v.indexOf("#");
    return b !== -1 && (I = v.slice(b)), I;
  }
  function D(v) {
    v = w(v);
    const I = v.indexOf("?");
    return I === -1 ? "" : v.slice(I + 1);
  }
  function O(v, I) {
    return I.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : I.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"), v;
  }
  function F(v, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), h(I.arrayFormatSeparator);
    const b = l(I), _ = /* @__PURE__ */ Object.create(null);
    if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""), !v))
      return _;
    for (const d of v.split("&")) {
      if (d === "")
        continue;
      let [o, p] = i(I.decode ? d.replace(/\+/g, " ") : d, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(I.arrayFormat) ? p : g(p, I), b(g(o, I), p, _);
    }
    for (const d of Object.keys(_)) {
      const o = _[d];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = O(o[p], I);
      else
        _[d] = O(o, I);
    }
    return I.sort === !1 ? _ : (I.sort === !0 ? Object.keys(_).sort() : Object.keys(_).sort(I.sort)).reduce((d, o) => {
      const p = _[o];
      return p && typeof p == "object" && !Array.isArray(p) ? d[o] = y(p) : d[o] = p, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = D, t.parse = F, t.stringify = (v, I) => {
    if (!v)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), h(I.arrayFormatSeparator);
    const b = (p) => I.skipNull && s(v[p]) || I.skipEmptyString && v[p] === "", _ = a(I), d = {};
    for (const p of Object.keys(v))
      b(p) || (d[p] = v[p]);
    const o = Object.keys(d);
    return I.sort !== !1 && o.sort(I.sort), o.map((p) => {
      const R = v[p];
      return R === void 0 ? "" : R === null ? f(p, I) : Array.isArray(R) ? R.length === 0 && I.arrayFormat === "bracket-separator" ? f(p, I) + "[]" : R.reduce(_(p), []).join("&") : f(p, I) + "=" + f(R, I);
    }).filter((p) => p.length > 0).join("&");
  }, t.parseUrl = (v, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [b, _] = i(v, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: F(D(v), I)
      },
      I && I.parseFragmentIdentifier && _ ? { fragmentIdentifier: g(_, I) } : {}
    );
  }, t.stringifyUrl = (v, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, I);
    const b = w(v.url).split("?")[0] || "", _ = t.extract(v.url), d = t.parse(_, { sort: !1 }), o = Object.assign(d, v.query);
    let p = t.stringify(o, I);
    p && (p = `?${p}`);
    let R = E(v.url);
    return v.fragmentIdentifier && (R = `#${I[u] ? f(v.fragmentIdentifier, I) : v.fragmentIdentifier}`), `${b}${p}${R}`;
  }, t.pick = (v, I, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, b);
    const { url: _, query: d, fragmentIdentifier: o } = t.parseUrl(v, b);
    return t.stringifyUrl({
      url: _,
      query: n(d, I),
      fragmentIdentifier: o
    }, b);
  }, t.exclude = (v, I, b) => {
    const _ = Array.isArray(I) ? (d) => !I.includes(d) : (d, o) => !I(d, o);
    return t.pick(v, _, b);
  };
})(ni);
const Sp = {
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
function Sc(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Dc = "base10", yt = "base16", Bn = "base64pad", us = "utf8", Ic = 0, Sr = 1, Dp = 0, Po = 1, Kn = 12, ls = 32;
function Ip() {
  const t = os.generateKeyPair();
  return { privateKey: bt(t.secretKey, yt), publicKey: bt(t.publicKey, yt) };
}
function Hn() {
  const t = Fr.randomBytes(ls);
  return bt(t, yt);
}
function Op(t, e) {
  const r = os.sharedKey(wt(t, yt), wt(e, yt)), i = new Wd(Ji.SHA256, r).expand(ls);
  return bt(i, yt);
}
function xp(t) {
  const e = Ji.hash(wt(t, yt));
  return bt(e, yt);
}
function Tr(t) {
  const e = Ji.hash(wt(t, us));
  return bt(e, yt);
}
function Cp(t) {
  return wt(`${t}`, Dc);
}
function hi(t) {
  return Number(bt(t, Dc));
}
function Ap(t) {
  const e = Cp(typeof t.type < "u" ? t.type : Ic);
  if (hi(e) === Sr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? wt(t.senderPublicKey, yt) : void 0, i = typeof t.iv < "u" ? wt(t.iv, yt) : Fr.randomBytes(Kn), n = new ns.ChaCha20Poly1305(wt(t.symKey, yt)).seal(i, wt(t.message, us));
  return Tp({ type: e, sealed: n, iv: i, senderPublicKey: r });
}
function Rp(t) {
  const e = new ns.ChaCha20Poly1305(wt(t.symKey, yt)), { sealed: r, iv: i } = Mi(t.encoded), n = e.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return bt(n, us);
}
function Tp(t) {
  if (hi(t.type) === Sr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return bt(jn([t.type, t.senderPublicKey, t.iv, t.sealed]), Bn);
  }
  return bt(jn([t.type, t.iv, t.sealed]), Bn);
}
function Mi(t) {
  const e = wt(t, Bn), r = e.slice(Dp, Po), i = Po;
  if (hi(r) === Sr) {
    const a = i + ls, l = a + Kn, h = e.slice(i, a), f = e.slice(a, l), g = e.slice(l);
    return { type: r, sealed: g, iv: f, senderPublicKey: h };
  }
  const n = i + Kn, s = e.slice(i, n), u = e.slice(n);
  return { type: r, sealed: u, iv: s };
}
function Np(t, e) {
  const r = Mi(t);
  return Oc({ type: hi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? bt(r.senderPublicKey, yt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Oc(t) {
  const e = (t == null ? void 0 : t.type) || Ic;
  if (e === Sr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Lo(t) {
  return t.type === Sr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Pp = Object.defineProperty, Fo = Object.getOwnPropertySymbols, Lp = Object.prototype.hasOwnProperty, Fp = Object.prototype.propertyIsEnumerable, Uo = (t, e, r) => e in t ? Pp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mo = (t, e) => {
  for (var r in e || (e = {}))
    Lp.call(e, r) && Uo(t, r, e[r]);
  if (Fo)
    for (var r of Fo(e))
      Fp.call(e, r) && Uo(t, r, e[r]);
  return t;
};
const Up = "ReactNative", Dt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Mp = "js";
function hs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Qi() {
  return !vc() && !!as() && navigator.product === Up;
}
function fi() {
  return !hs() && !!as();
}
function di() {
  return Qi() ? Dt.reactNative : hs() ? Dt.node : fi() ? Dt.browser : Dt.unknown;
}
function $p(t, e) {
  let r = ni.parse(t);
  return r = Mo(Mo({}, r), e), t = ni.stringify(r), t;
}
function jp() {
  return _c() || { name: "", description: "", url: "", icons: [""] };
}
function qp() {
  if (di() === Dt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = tp();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function zp() {
  var t;
  const e = di();
  return e === Dt.browser ? [e, ((t = wc()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Bp(t, e, r) {
  const i = qp(), n = zp();
  return [[t, e].join("-"), [Mp, r].join("-"), i, n].join("/");
}
function Kp({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = Bp(t, e, i), h = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, f = $p(a[1] || "", h);
  return a[0] + "?" + f;
}
function wr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function xc(t) {
  return Object.fromEntries(t.entries());
}
function Cc(t) {
  return new Map(Object.entries(t));
}
function Cr(t = X.FIVE_MINUTES, e) {
  const r = X.toMiliseconds(t || X.FIVE_MINUTES);
  let i, n, s;
  return { resolve: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, reject: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(e));
    }, r), i = u, n = a;
  }) };
}
function si(t, e, r) {
  return new Promise(async (i, n) => {
    const s = setTimeout(() => n(new Error(r)), e);
    try {
      const u = await t;
      i(u);
    } catch (u) {
      n(u);
    }
    clearTimeout(s);
  });
}
function Ac(t, e) {
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
function Hp(t) {
  return Ac("topic", t);
}
function Vp(t) {
  return Ac("id", t);
}
function Rc(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function Lt(t, e) {
  return X.fromMiliseconds((e || Date.now()) + X.toMiliseconds(t));
}
function ir(t) {
  return Date.now() >= X.toMiliseconds(t);
}
function Be(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Wp({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${t}&sessionTopic=${e}`, u = di();
    u === Dt.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === Dt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const kp = "irn";
function Vn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: kp };
}
function Ti(t) {
  const e = Sp[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Gp = Object.defineProperty, $o = Object.getOwnPropertySymbols, Yp = Object.prototype.hasOwnProperty, Jp = Object.prototype.propertyIsEnumerable, jo = (t, e, r) => e in t ? Gp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qp = (t, e) => {
  for (var r in e || (e = {}))
    Yp.call(e, r) && jo(t, r, e[r]);
  if ($o)
    for (var r of $o(e))
      Jp.call(e, r) && jo(t, r, e[r]);
  return t;
};
function Xp(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = t[n];
      r[s] = u;
    }
  }), r;
}
function Zp(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), n = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", u = ni.parse(s);
  return { protocol: i, topic: eg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: Xp(u) };
}
function eg(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function tg(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((n) => {
    const s = r + e + n;
    t[n] && (i[s] = t[n]);
  }), i;
}
function rg(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ni.stringify(Qp({ symKey: t.symKey }, tg(t.relay)));
}
function Mr(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, n] = r.split(":");
    e.push(`${i}:${n}`);
  }), e;
}
function ig(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Mr(r.accounts));
  }), e;
}
function ng(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Mr(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function sg(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Mr(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function og(t, e) {
  const r = Ni(t, e);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(t))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const ag = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, cg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(t, e) {
  const { message: r, code: i } = cg[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function Ke(t, e) {
  const { message: r, code: i } = ag[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function pi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function ti(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function gt(t) {
  return typeof t > "u";
}
function tt(t, e) {
  return e && gt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function fs(t, e) {
  return e && gt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function ug(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
  let s = !0;
  return wr(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: h } = t.namespaces[u], f = Mr(a), g = r[u];
    (!wr(Sc(u, g), f) || !wr(g.methods, l) || !wr(g.events, h)) && (s = !1);
  }), s) : !1;
}
function $i(t) {
  return tt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function lg(t) {
  if (tt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && $i(r);
    }
  }
  return !1;
}
function hg(t) {
  if (tt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function fg(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function dg(t) {
  return t == null ? void 0 : t.topic;
}
function pg(t, e) {
  let r = null;
  return tt(t == null ? void 0 : t.publicKey, !1) || (r = G("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function qo(t) {
  let e = !0;
  return pi(t) ? t.length && (e = t.every((r) => tt(r, !1))) : e = !1, e;
}
function gg(t, e, r) {
  let i = null;
  return pi(e) && e.length ? e.forEach((n) => {
    i || $i(n) || (i = Ke("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : $i(t) || (i = Ke("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function yg(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([n, s]) => {
    if (i)
      return;
    const u = gg(n, Sc(n, s), `${e} ${r}`);
    u && (i = u);
  }), i;
}
function bg(t, e) {
  let r = null;
  return pi(t) ? t.forEach((i) => {
    r || lg(i) || (r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function mg(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = bg(i == null ? void 0 : i.accounts, `${e} namespace`);
    n && (r = n);
  }), r;
}
function vg(t, e) {
  let r = null;
  return qo(t == null ? void 0 : t.methods) ? qo(t == null ? void 0 : t.events) || (r = Ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Tc(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = vg(i, `${e}, namespace`);
    n && (r = n);
  }), r;
}
function wg(t, e, r) {
  let i = null;
  if (t && ti(t)) {
    const n = Tc(t, e);
    n && (i = n);
    const s = yg(t, e, r);
    s && (i = s);
  } else
    i = G("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function Ni(t, e) {
  let r = null;
  if (t && ti(t)) {
    const i = Tc(t, e);
    i && (r = i);
    const n = mg(t, e);
    n && (r = n);
  } else
    r = G("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Nc(t) {
  return tt(t.protocol, !0);
}
function _g(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && pi(t) && t.length && t.forEach((i) => {
    r = Nc(i);
  }), r;
}
function Eg(t) {
  return typeof t == "number";
}
function vt(t) {
  return typeof t < "u" && typeof t !== null;
}
function Sg(t) {
  return !(!t || typeof t != "object" || !t.code || !fs(t.code, !1) || !t.message || !tt(t.message, !1));
}
function Dg(t) {
  return !(gt(t) || !tt(t.method, !1));
}
function Ig(t) {
  return !(gt(t) || gt(t.result) && gt(t.error) || !fs(t.id, !1) || !tt(t.jsonrpc, !1));
}
function Og(t) {
  return !(gt(t) || !tt(t.name, !1));
}
function zo(t, e) {
  return !(!$i(e) || !ig(t).includes(e));
}
function xg(t, e, r) {
  return tt(r, !1) ? ng(t, e).includes(r) : !1;
}
function Cg(t, e, r) {
  return tt(r, !1) ? sg(t, e).includes(r) : !1;
}
function Bo(t, e, r) {
  let i = null;
  const n = Ag(t), s = Rg(e), u = Object.keys(n), a = Object.keys(s), l = Ko(Object.keys(t)), h = Ko(Object.keys(e)), f = l.filter((g) => !h.includes(g));
  return f.length && (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), wr(u, a) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((g) => {
    if (!g.includes(":") || i)
      return;
    const y = Mr(e[g].accounts);
    y.includes(g) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${g}
        Required: ${g}
        Approved: ${y.toString()}`));
  }), u.forEach((g) => {
    i || (wr(n[g].methods, s[g].methods) ? wr(n[g].events, s[g].events) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${g}`)) : i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${g}`));
  }), i;
}
function Ag(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((n) => {
      e[n] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Ko(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Rg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = Mr(t[r].accounts);
      i == null || i.forEach((n) => {
        e[n] = { accounts: t[r].accounts.filter((s) => s.includes(`${n}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Tg(t, e) {
  return fs(t, !1) && t <= e.max && t >= e.min;
}
function Ho() {
  const t = di();
  return new Promise((e) => {
    switch (t) {
      case Dt.browser:
        e(Ng());
        break;
      case Dt.reactNative:
        e(Pg());
        break;
      case Dt.node:
        e(Lg());
        break;
      default:
        e(!0);
    }
  });
}
function Ng() {
  return fi() && (navigator == null ? void 0 : navigator.onLine);
}
async function Pg() {
  if (Qi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Lg() {
  return !0;
}
function Fg(t) {
  switch (di()) {
    case Dt.browser:
      Ug(t);
      break;
    case Dt.reactNative:
      Mg(t);
      break;
  }
}
function Ug(t) {
  fi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Mg(t) {
  Qi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const bn = {};
let xi = class {
  static get(e) {
    return bn[e];
  }
  static set(e, r) {
    bn[e] = r;
  }
  static delete(e) {
    delete bn[e];
  }
};
const $g = "PARSE_ERROR", jg = "INVALID_REQUEST", qg = "METHOD_NOT_FOUND", zg = "INVALID_PARAMS", Pc = "INTERNAL_ERROR", ds = "SERVER_ERROR", Bg = [-32700, -32600, -32601, -32602, -32603], ri = {
  [$g]: { code: -32700, message: "Parse error" },
  [jg]: { code: -32600, message: "Invalid Request" },
  [qg]: { code: -32601, message: "Method not found" },
  [zg]: { code: -32602, message: "Invalid params" },
  [Pc]: { code: -32603, message: "Internal error" },
  [ds]: { code: -32e3, message: "Server error" }
}, Lc = ds;
function Kg(t) {
  return Bg.includes(t);
}
function Vo(t) {
  return Object.keys(ri).includes(t) ? ri[t] : ri[Lc];
}
function Hg(t) {
  const e = Object.values(ri).find((r) => r.code === t);
  return e || ri[Lc];
}
function Vg(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Fc = {}, kt = {}, Wo;
function Wg() {
  if (Wo)
    return kt;
  Wo = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.isBrowserCryptoAvailable = kt.getSubtleCrypto = kt.getBrowerCrypto = void 0;
  function t() {
    return (St == null ? void 0 : St.crypto) || (St == null ? void 0 : St.msCrypto) || {};
  }
  kt.getBrowerCrypto = t;
  function e() {
    const i = t();
    return i.subtle || i.webkitSubtle;
  }
  kt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return kt.isBrowserCryptoAvailable = r, kt;
}
var Gt = {}, ko;
function kg() {
  if (ko)
    return Gt;
  ko = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.isBrowser = Gt.isNode = Gt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Gt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Gt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Gt.isBrowser = r, Gt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Tt;
  e.__exportStar(Wg(), t), e.__exportStar(kg(), t);
})(Fc);
function ps(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Uc(t = 6) {
  return BigInt(ps(t));
}
function oi(t, e, r) {
  return {
    id: r || ps(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function gs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function ys(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Gg(e, r)
  };
}
function Gg(t, e) {
  return typeof t > "u" ? Vo(Pc) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Vo(ds)), { message: t })), typeof e < "u" && (t.data = e), Kg(t.code) && (t = Hg(t.code)), t);
}
class Yg {
}
class Jg extends Yg {
  constructor() {
    super();
  }
}
class Qg extends Jg {
  constructor(e) {
    super();
  }
}
const Xg = "^wss?:";
function Zg(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function e0(t, e) {
  const r = Zg(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Go(t) {
  return e0(t, Xg);
}
function t0(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Mc(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function bs(t) {
  return Mc(t) && "method" in t;
}
function Xi(t) {
  return Mc(t) && (Qt(t) || Ft(t));
}
function Qt(t) {
  return "result" in t;
}
function Ft(t) {
  return "error" in t;
}
class r0 extends Qg {
  constructor(e) {
    super(e), this.events = new Rt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(oi(e.method, e.params || [], e.id || Uc().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (i, n) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          n(s);
        }
      this.events.on(`${e.id}`, (s) => {
        Ft(s) ? n(s.error) : i(s.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (s) {
        n(s);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Xi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const i0 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), n0 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Yo = (t) => t.split("?")[0], Jo = 10, s0 = i0();
class o0 {
  constructor(e) {
    if (this.url = e, this.events = new Rt.EventEmitter(), this.registering = !1, !Go(e))
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
      this.socket.onclose = (i) => {
        this.onClose(i), e();
      }, this.socket.close();
    });
  }
  async send(e, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(ts(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Go(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, n) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), n(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return n(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, i) => {
      const n = Fc.isReactNative() ? void 0 : { rejectUnauthorized: !t0(e) }, s = new s0(e, [], n);
      n0() ? s.onerror = (u) => {
        const a = u;
        i(this.emitError(a.error));
      } : s.on("error", (u) => {
        i(this.emitError(u));
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
    const r = typeof e.data == "string" ? Xa(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = ys(e, n);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Vg(e, Yo(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Jo && this.events.setMaxListeners(Jo);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Yo(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ji = { exports: {} };
ji.exports;
(function(t, e) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", g = "[object Date]", y = "[object Error]", w = "[object Function]", E = "[object GeneratorFunction]", D = "[object Map]", O = "[object Number]", F = "[object Null]", v = "[object Object]", I = "[object Promise]", b = "[object Proxy]", _ = "[object RegExp]", d = "[object Set]", o = "[object String]", p = "[object Symbol]", R = "[object Undefined]", T = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", k = "[object Float32Array]", x = "[object Float64Array]", P = "[object Int8Array]", V = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", q = "[object Uint8ClampedArray]", M = "[object Uint16Array]", K = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, J = {};
  J[k] = J[x] = J[P] = J[V] = J[z] = J[$] = J[q] = J[M] = J[K] = !0, J[a] = J[l] = J[U] = J[f] = J[B] = J[g] = J[y] = J[w] = J[D] = J[O] = J[v] = J[_] = J[d] = J[o] = J[T] = !1;
  var ee = typeof St == "object" && St && St.Object === Object && St, L = typeof self == "object" && self && self.Object === Object && self, N = ee || L || Function("return this")(), C = e && !e.nodeType && e, c = C && !0 && t && !t.nodeType && t, S = c && c.exports === C, W = S && ee.process, Y = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), he = Y && Y.isTypedArray;
  function be(m, A) {
    for (var j = -1, Q = m == null ? 0 : m.length, xe = 0, se = []; ++j < Q; ) {
      var Fe = m[j];
      A(Fe, j, m) && (se[xe++] = Fe);
    }
    return se;
  }
  function de(m, A) {
    for (var j = -1, Q = A.length, xe = m.length; ++j < Q; )
      m[xe + j] = A[j];
    return m;
  }
  function _e(m, A) {
    for (var j = -1, Q = m == null ? 0 : m.length; ++j < Q; )
      if (A(m[j], j, m))
        return !0;
    return !1;
  }
  function Ue(m, A) {
    for (var j = -1, Q = Array(m); ++j < m; )
      Q[j] = A(j);
    return Q;
  }
  function Ne(m) {
    return function(A) {
      return m(A);
    };
  }
  function ye(m, A) {
    return m.has(A);
  }
  function pe(m, A) {
    return m == null ? void 0 : m[A];
  }
  function fe(m) {
    var A = -1, j = Array(m.size);
    return m.forEach(function(Q, xe) {
      j[++A] = [xe, Q];
    }), j;
  }
  function ue(m, A) {
    return function(j) {
      return m(A(j));
    };
  }
  function ce(m) {
    var A = -1, j = Array(m.size);
    return m.forEach(function(Q) {
      j[++A] = Q;
    }), j;
  }
  var ae = Array.prototype, oe = Function.prototype, re = Object.prototype, le = N["__core-js_shared__"], ge = oe.toString, ie = re.hasOwnProperty, me = function() {
    var m = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), we = re.toString, Se = RegExp(
    "^" + ge.call(ie).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), De = S ? N.Buffer : void 0, Ee = N.Symbol, Nt = N.Uint8Array, $t = re.propertyIsEnumerable, Xt = ae.splice, _t = Ee ? Ee.toStringTag : void 0, cr = Object.getOwnPropertySymbols, $r = De ? De.isBuffer : void 0, bi = ue(Object.keys, Object), Me = Dr(N, "DataView"), Pe = Dr(N, "Map"), $e = Dr(N, "Promise"), je = Dr(N, "Set"), qe = Dr(N, "WeakMap"), Le = Dr(Object, "create"), Ve = lr(Me), We = lr(Pe), ke = lr($e), Ge = lr(je), Ye = lr(qe), He = Ee ? Ee.prototype : void 0, ze = He ? He.valueOf : void 0;
  function Ae(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function Je() {
    this.__data__ = Le ? Le(null) : {}, this.size = 0;
  }
  function Qe(m) {
    var A = this.has(m) && delete this.__data__[m];
    return this.size -= A ? 1 : 0, A;
  }
  function su(m) {
    var A = this.__data__;
    if (Le) {
      var j = A[m];
      return j === i ? void 0 : j;
    }
    return ie.call(A, m) ? A[m] : void 0;
  }
  function ou(m) {
    var A = this.__data__;
    return Le ? A[m] !== void 0 : ie.call(A, m);
  }
  function au(m, A) {
    var j = this.__data__;
    return this.size += this.has(m) ? 0 : 1, j[m] = Le && A === void 0 ? i : A, this;
  }
  Ae.prototype.clear = Je, Ae.prototype.delete = Qe, Ae.prototype.get = su, Ae.prototype.has = ou, Ae.prototype.set = au;
  function Vt(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function cu() {
    this.__data__ = [], this.size = 0;
  }
  function uu(m) {
    var A = this.__data__, j = vi(A, m);
    if (j < 0)
      return !1;
    var Q = A.length - 1;
    return j == Q ? A.pop() : Xt.call(A, j, 1), --this.size, !0;
  }
  function lu(m) {
    var A = this.__data__, j = vi(A, m);
    return j < 0 ? void 0 : A[j][1];
  }
  function hu(m) {
    return vi(this.__data__, m) > -1;
  }
  function fu(m, A) {
    var j = this.__data__, Q = vi(j, m);
    return Q < 0 ? (++this.size, j.push([m, A])) : j[Q][1] = A, this;
  }
  Vt.prototype.clear = cu, Vt.prototype.delete = uu, Vt.prototype.get = lu, Vt.prototype.has = hu, Vt.prototype.set = fu;
  function ur(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function du() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (Pe || Vt)(),
      string: new Ae()
    };
  }
  function pu(m) {
    var A = wi(this, m).delete(m);
    return this.size -= A ? 1 : 0, A;
  }
  function gu(m) {
    return wi(this, m).get(m);
  }
  function yu(m) {
    return wi(this, m).has(m);
  }
  function bu(m, A) {
    var j = wi(this, m), Q = j.size;
    return j.set(m, A), this.size += j.size == Q ? 0 : 1, this;
  }
  ur.prototype.clear = du, ur.prototype.delete = pu, ur.prototype.get = gu, ur.prototype.has = yu, ur.prototype.set = bu;
  function mi(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.__data__ = new ur(); ++A < j; )
      this.add(m[A]);
  }
  function mu(m) {
    return this.__data__.set(m, i), this;
  }
  function vu(m) {
    return this.__data__.has(m);
  }
  mi.prototype.add = mi.prototype.push = mu, mi.prototype.has = vu;
  function Zt(m) {
    var A = this.__data__ = new Vt(m);
    this.size = A.size;
  }
  function wu() {
    this.__data__ = new Vt(), this.size = 0;
  }
  function _u(m) {
    var A = this.__data__, j = A.delete(m);
    return this.size = A.size, j;
  }
  function Eu(m) {
    return this.__data__.get(m);
  }
  function Su(m) {
    return this.__data__.has(m);
  }
  function Du(m, A) {
    var j = this.__data__;
    if (j instanceof Vt) {
      var Q = j.__data__;
      if (!Pe || Q.length < r - 1)
        return Q.push([m, A]), this.size = ++j.size, this;
      j = this.__data__ = new ur(Q);
    }
    return j.set(m, A), this.size = j.size, this;
  }
  Zt.prototype.clear = wu, Zt.prototype.delete = _u, Zt.prototype.get = Eu, Zt.prototype.has = Su, Zt.prototype.set = Du;
  function Iu(m, A) {
    var j = _i(m), Q = !j && qu(m), xe = !j && !Q && nn(m), se = !j && !Q && !xe && Fs(m), Fe = j || Q || xe || se, Xe = Fe ? Ue(m.length, String) : [], rt = Xe.length;
    for (var Te in m)
      (A || ie.call(m, Te)) && !(Fe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Te == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Te == "offset" || Te == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      se && (Te == "buffer" || Te == "byteLength" || Te == "byteOffset") || // Skip index properties.
      Fu(Te, rt))) && Xe.push(Te);
    return Xe;
  }
  function vi(m, A) {
    for (var j = m.length; j--; )
      if (Ts(m[j][0], A))
        return j;
    return -1;
  }
  function Ou(m, A, j) {
    var Q = A(m);
    return _i(m) ? Q : de(Q, j(m));
  }
  function jr(m) {
    return m == null ? m === void 0 ? R : F : _t && _t in Object(m) ? Pu(m) : ju(m);
  }
  function xs(m) {
    return qr(m) && jr(m) == a;
  }
  function Cs(m, A, j, Q, xe) {
    return m === A ? !0 : m == null || A == null || !qr(m) && !qr(A) ? m !== m && A !== A : xu(m, A, j, Q, Cs, xe);
  }
  function xu(m, A, j, Q, xe, se) {
    var Fe = _i(m), Xe = _i(A), rt = Fe ? l : er(m), Te = Xe ? l : er(A);
    rt = rt == a ? v : rt, Te = Te == a ? v : Te;
    var Et = rt == v, Pt = Te == v, ot = rt == Te;
    if (ot && nn(m)) {
      if (!nn(A))
        return !1;
      Fe = !0, Et = !1;
    }
    if (ot && !Et)
      return se || (se = new Zt()), Fe || Fs(m) ? As(m, A, j, Q, xe, se) : Tu(m, A, rt, j, Q, xe, se);
    if (!(j & n)) {
      var xt = Et && ie.call(m, "__wrapped__"), Ct = Pt && ie.call(A, "__wrapped__");
      if (xt || Ct) {
        var tr = xt ? m.value() : m, Wt = Ct ? A.value() : A;
        return se || (se = new Zt()), xe(tr, Wt, j, Q, se);
      }
    }
    return ot ? (se || (se = new Zt()), Nu(m, A, j, Q, xe, se)) : !1;
  }
  function Cu(m) {
    if (!Ls(m) || Mu(m))
      return !1;
    var A = Ns(m) ? Se : H;
    return A.test(lr(m));
  }
  function Au(m) {
    return qr(m) && Ps(m.length) && !!J[jr(m)];
  }
  function Ru(m) {
    if (!$u(m))
      return bi(m);
    var A = [];
    for (var j in Object(m))
      ie.call(m, j) && j != "constructor" && A.push(j);
    return A;
  }
  function As(m, A, j, Q, xe, se) {
    var Fe = j & n, Xe = m.length, rt = A.length;
    if (Xe != rt && !(Fe && rt > Xe))
      return !1;
    var Te = se.get(m);
    if (Te && se.get(A))
      return Te == A;
    var Et = -1, Pt = !0, ot = j & s ? new mi() : void 0;
    for (se.set(m, A), se.set(A, m); ++Et < Xe; ) {
      var xt = m[Et], Ct = A[Et];
      if (Q)
        var tr = Fe ? Q(Ct, xt, Et, A, m, se) : Q(xt, Ct, Et, m, A, se);
      if (tr !== void 0) {
        if (tr)
          continue;
        Pt = !1;
        break;
      }
      if (ot) {
        if (!_e(A, function(Wt, hr) {
          if (!ye(ot, hr) && (xt === Wt || xe(xt, Wt, j, Q, se)))
            return ot.push(hr);
        })) {
          Pt = !1;
          break;
        }
      } else if (!(xt === Ct || xe(xt, Ct, j, Q, se))) {
        Pt = !1;
        break;
      }
    }
    return se.delete(m), se.delete(A), Pt;
  }
  function Tu(m, A, j, Q, xe, se, Fe) {
    switch (j) {
      case B:
        if (m.byteLength != A.byteLength || m.byteOffset != A.byteOffset)
          return !1;
        m = m.buffer, A = A.buffer;
      case U:
        return !(m.byteLength != A.byteLength || !se(new Nt(m), new Nt(A)));
      case f:
      case g:
      case O:
        return Ts(+m, +A);
      case y:
        return m.name == A.name && m.message == A.message;
      case _:
      case o:
        return m == A + "";
      case D:
        var Xe = fe;
      case d:
        var rt = Q & n;
        if (Xe || (Xe = ce), m.size != A.size && !rt)
          return !1;
        var Te = Fe.get(m);
        if (Te)
          return Te == A;
        Q |= s, Fe.set(m, A);
        var Et = As(Xe(m), Xe(A), Q, xe, se, Fe);
        return Fe.delete(m), Et;
      case p:
        if (ze)
          return ze.call(m) == ze.call(A);
    }
    return !1;
  }
  function Nu(m, A, j, Q, xe, se) {
    var Fe = j & n, Xe = Rs(m), rt = Xe.length, Te = Rs(A), Et = Te.length;
    if (rt != Et && !Fe)
      return !1;
    for (var Pt = rt; Pt--; ) {
      var ot = Xe[Pt];
      if (!(Fe ? ot in A : ie.call(A, ot)))
        return !1;
    }
    var xt = se.get(m);
    if (xt && se.get(A))
      return xt == A;
    var Ct = !0;
    se.set(m, A), se.set(A, m);
    for (var tr = Fe; ++Pt < rt; ) {
      ot = Xe[Pt];
      var Wt = m[ot], hr = A[ot];
      if (Q)
        var Us = Fe ? Q(hr, Wt, ot, A, m, se) : Q(Wt, hr, ot, m, A, se);
      if (!(Us === void 0 ? Wt === hr || xe(Wt, hr, j, Q, se) : Us)) {
        Ct = !1;
        break;
      }
      tr || (tr = ot == "constructor");
    }
    if (Ct && !tr) {
      var Ei = m.constructor, Si = A.constructor;
      Ei != Si && "constructor" in m && "constructor" in A && !(typeof Ei == "function" && Ei instanceof Ei && typeof Si == "function" && Si instanceof Si) && (Ct = !1);
    }
    return se.delete(m), se.delete(A), Ct;
  }
  function Rs(m) {
    return Ou(m, Ku, Lu);
  }
  function wi(m, A) {
    var j = m.__data__;
    return Uu(A) ? j[typeof A == "string" ? "string" : "hash"] : j.map;
  }
  function Dr(m, A) {
    var j = pe(m, A);
    return Cu(j) ? j : void 0;
  }
  function Pu(m) {
    var A = ie.call(m, _t), j = m[_t];
    try {
      m[_t] = void 0;
      var Q = !0;
    } catch {
    }
    var xe = we.call(m);
    return Q && (A ? m[_t] = j : delete m[_t]), xe;
  }
  var Lu = cr ? function(m) {
    return m == null ? [] : (m = Object(m), be(cr(m), function(A) {
      return $t.call(m, A);
    }));
  } : Hu, er = jr;
  (Me && er(new Me(new ArrayBuffer(1))) != B || Pe && er(new Pe()) != D || $e && er($e.resolve()) != I || je && er(new je()) != d || qe && er(new qe()) != T) && (er = function(m) {
    var A = jr(m), j = A == v ? m.constructor : void 0, Q = j ? lr(j) : "";
    if (Q)
      switch (Q) {
        case Ve:
          return B;
        case We:
          return D;
        case ke:
          return I;
        case Ge:
          return d;
        case Ye:
          return T;
      }
    return A;
  });
  function Fu(m, A) {
    return A = A ?? u, !!A && (typeof m == "number" || Z.test(m)) && m > -1 && m % 1 == 0 && m < A;
  }
  function Uu(m) {
    var A = typeof m;
    return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? m !== "__proto__" : m === null;
  }
  function Mu(m) {
    return !!me && me in m;
  }
  function $u(m) {
    var A = m && m.constructor, j = typeof A == "function" && A.prototype || re;
    return m === j;
  }
  function ju(m) {
    return we.call(m);
  }
  function lr(m) {
    if (m != null) {
      try {
        return ge.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  function Ts(m, A) {
    return m === A || m !== m && A !== A;
  }
  var qu = xs(function() {
    return arguments;
  }()) ? xs : function(m) {
    return qr(m) && ie.call(m, "callee") && !$t.call(m, "callee");
  }, _i = Array.isArray;
  function zu(m) {
    return m != null && Ps(m.length) && !Ns(m);
  }
  var nn = $r || Vu;
  function Bu(m, A) {
    return Cs(m, A);
  }
  function Ns(m) {
    if (!Ls(m))
      return !1;
    var A = jr(m);
    return A == w || A == E || A == h || A == b;
  }
  function Ps(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= u;
  }
  function Ls(m) {
    var A = typeof m;
    return m != null && (A == "object" || A == "function");
  }
  function qr(m) {
    return m != null && typeof m == "object";
  }
  var Fs = he ? Ne(he) : Au;
  function Ku(m) {
    return zu(m) ? Iu(m) : Ru(m);
  }
  function Hu() {
    return [];
  }
  function Vu() {
    return !1;
  }
  t.exports = Bu;
})(ji, ji.exports);
var a0 = ji.exports;
const c0 = /* @__PURE__ */ Bi(a0);
function u0(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < t.length; n++) {
    var s = t.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function g(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var D = 0, O = 0, F = 0, v = E.length; F !== v && E[F] === 0; )
      F++, D++;
    for (var I = (v - F) * f + 1 >>> 0, b = new Uint8Array(I); F !== v; ) {
      for (var _ = E[F], d = 0, o = I - 1; (_ !== 0 || d < O) && o !== -1; o--, d++)
        _ += 256 * b[o] >>> 0, b[o] = _ % a >>> 0, _ = _ / a >>> 0;
      if (_ !== 0)
        throw new Error("Non-zero carry");
      O = d, F++;
    }
    for (var p = I - O; p !== I && b[p] === 0; )
      p++;
    for (var R = l.repeat(D); p < I; ++p)
      R += t.charAt(b[p]);
    return R;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var D = 0;
    if (E[D] !== " ") {
      for (var O = 0, F = 0; E[D] === l; )
        O++, D++;
      for (var v = (E.length - D) * h + 1 >>> 0, I = new Uint8Array(v); E[D]; ) {
        var b = r[E.charCodeAt(D)];
        if (b === 255)
          return;
        for (var _ = 0, d = v - 1; (b !== 0 || _ < F) && d !== -1; d--, _++)
          b += a * I[d] >>> 0, I[d] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        F = _, D++;
      }
      if (E[D] !== " ") {
        for (var o = v - F; o !== v && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(O + (v - o)), R = O; o !== v; )
          p[R++] = I[o++];
        return p;
      }
    }
  }
  function w(E) {
    var D = y(E);
    if (D)
      return D;
    throw new Error(`Non-${e} character`);
  }
  return { encode: g, decodeUnsafe: y, decode: w };
}
var l0 = u0, h0 = l0;
const $c = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, f0 = (t) => new TextEncoder().encode(t), d0 = (t) => new TextDecoder().decode(t);
class p0 {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class g0 {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
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
    return jc(this, e);
  }
}
class y0 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return jc(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const jc = (t, e) => new y0({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class b0 {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new p0(e, r, i), this.decoder = new g0(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Zi = ({ name: t, prefix: e, encode: r, decode: i }) => new b0(t, e, r, i), gi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = h0(r, e);
  return Zi({ prefix: t, name: e, encode: i, decode: (s) => $c(n(s)) });
}, m0 = (t, e, r, i) => {
  const n = {};
  for (let f = 0; f < e.length; ++f)
    n[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const g = n[t[f]];
    if (g === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | g, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, v0 = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & a >> u];
  if (u && (s += e[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, st = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Zi({ prefix: e, name: t, encode(n) {
  return v0(n, i, r);
}, decode(n) {
  return m0(n, i, r, t);
} }), w0 = Zi({ prefix: "\0", name: "identity", encode: (t) => d0(t), decode: (t) => f0(t) });
var _0 = Object.freeze({ __proto__: null, identity: w0 });
const E0 = st({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var S0 = Object.freeze({ __proto__: null, base2: E0 });
const D0 = st({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var I0 = Object.freeze({ __proto__: null, base8: D0 });
const O0 = gi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var x0 = Object.freeze({ __proto__: null, base10: O0 });
const C0 = st({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), A0 = st({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var R0 = Object.freeze({ __proto__: null, base16: C0, base16upper: A0 });
const T0 = st({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), N0 = st({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), P0 = st({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), L0 = st({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), F0 = st({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), U0 = st({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), M0 = st({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), $0 = st({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), j0 = st({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var q0 = Object.freeze({ __proto__: null, base32: T0, base32upper: N0, base32pad: P0, base32padupper: L0, base32hex: F0, base32hexupper: U0, base32hexpad: M0, base32hexpadupper: $0, base32z: j0 });
const z0 = gi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), B0 = gi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var K0 = Object.freeze({ __proto__: null, base36: z0, base36upper: B0 });
const H0 = gi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), V0 = gi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var W0 = Object.freeze({ __proto__: null, base58btc: H0, base58flickr: V0 });
const k0 = st({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), G0 = st({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Y0 = st({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), J0 = st({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Q0 = Object.freeze({ __proto__: null, base64: k0, base64pad: G0, base64url: Y0, base64urlpad: J0 });
const qc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), X0 = qc.reduce((t, e, r) => (t[r] = e, t), []), Z0 = qc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function ey(t) {
  return t.reduce((e, r) => (e += X0[r], e), "");
}
function ty(t) {
  const e = [];
  for (const r of t) {
    const i = Z0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const ry = Zi({ prefix: "🚀", name: "base256emoji", encode: ey, decode: ty });
var iy = Object.freeze({ __proto__: null, base256emoji: ry }), ny = zc, Qo = 128, sy = 127, oy = ~sy, ay = Math.pow(2, 31);
function zc(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= ay; )
    e[r++] = t & 255 | Qo, t /= 128;
  for (; t & oy; )
    e[r++] = t & 255 | Qo, t >>>= 7;
  return e[r] = t | 0, zc.bytes = r - i + 1, e;
}
var cy = Wn, uy = 128, Xo = 127;
function Wn(t, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = t.length;
  do {
    if (s >= a)
      throw Wn.bytes = 0, new RangeError("Could not decode varint");
    u = t[s++], r += n < 28 ? (u & Xo) << n : (u & Xo) * Math.pow(2, n), n += 7;
  } while (u >= uy);
  return Wn.bytes = s - i, r;
}
var ly = Math.pow(2, 7), hy = Math.pow(2, 14), fy = Math.pow(2, 21), dy = Math.pow(2, 28), py = Math.pow(2, 35), gy = Math.pow(2, 42), yy = Math.pow(2, 49), by = Math.pow(2, 56), my = Math.pow(2, 63), vy = function(t) {
  return t < ly ? 1 : t < hy ? 2 : t < fy ? 3 : t < dy ? 4 : t < py ? 5 : t < gy ? 6 : t < yy ? 7 : t < by ? 8 : t < my ? 9 : 10;
}, wy = { encode: ny, decode: cy, encodingLength: vy }, Bc = wy;
const Zo = (t, e, r = 0) => (Bc.encode(t, e, r), e), ea = (t) => Bc.encodingLength(t), kn = (t, e) => {
  const r = e.byteLength, i = ea(t), n = i + ea(r), s = new Uint8Array(n + r);
  return Zo(t, s, 0), Zo(r, s, i), s.set(e, n), new _y(t, r, e, s);
};
class _y {
  constructor(e, r, i, n) {
    this.code = e, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Kc = ({ name: t, code: e, encode: r }) => new Ey(t, e, r);
class Ey {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? kn(this.code, r) : r.then((i) => kn(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Hc = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Sy = Kc({ name: "sha2-256", code: 18, encode: Hc("SHA-256") }), Dy = Kc({ name: "sha2-512", code: 19, encode: Hc("SHA-512") });
var Iy = Object.freeze({ __proto__: null, sha256: Sy, sha512: Dy });
const Vc = 0, Oy = "identity", Wc = $c, xy = (t) => kn(Vc, Wc(t)), Cy = { code: Vc, name: Oy, encode: Wc, digest: xy };
var Ay = Object.freeze({ __proto__: null, identity: Cy });
new TextEncoder(), new TextDecoder();
const ta = { ..._0, ...S0, ...I0, ...x0, ...R0, ...q0, ...K0, ...W0, ...Q0, ...iy };
({ ...Iy, ...Ay });
function kc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ry(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? kc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Gc(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const ra = Gc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), mn = Gc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ry(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Ty = { utf8: ra, "utf-8": ra, hex: ta.base16, latin1: mn, ascii: mn, binary: mn, ...ta };
function Ny(t, e = "utf8") {
  const r = Ty[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? kc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Yc = "wc", Py = 2, ms = "core", nr = `${Yc}@2:${ms}:`, Ly = { name: ms, logger: "error" }, Fy = { database: ":memory:" }, Uy = "crypto", ia = "client_ed25519_seed", My = X.ONE_DAY, $y = "keychain", jy = "0.3", qy = "messages", zy = "0.3", By = X.SIX_HOURS, Ky = "publisher", Jc = "irn", Hy = "error", Qc = "wss://relay.walletconnect.com", na = "wss://relay.walletconnect.org", Vy = "relayer", ft = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Wy = "_subscription", Yt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, ky = X.ONE_SECOND, Gy = "2.10.0", Yy = 1e4, Jy = "0.3", Qy = "WALLETCONNECT_CLIENT_ID", Kt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Xy = "subscription", Zy = "0.3", e1 = X.FIVE_SECONDS * 1e3, t1 = "pairing", r1 = "0.3", Yr = { wc_pairingDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 0 } } }, Bt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, i1 = "history", n1 = "0.3", s1 = "expirer", At = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, o1 = "0.3", vn = "verify-api", Pi = "https://verify.walletconnect.com", sa = "https://verify.walletconnect.org";
class a1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = $y, this.version = jy, this.initialized = !1, this.storagePrefix = nr, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, n) => {
      this.isInitialized(), this.keychain.set(i, n), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.keychain.get(i);
      if (typeof n > "u") {
        const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(s);
      }
      return n;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, xc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Cc(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class c1 {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = Uy, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = So(n);
      return dc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = Ip();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = So(s), a = Hn();
      return await Pd(a, n, My, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = Op(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || xp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = Oc(u), l = ts(s);
      if (Lo(a)) {
        const y = a.senderPublicKey, w = a.receiverPublicKey;
        n = await this.generateSharedKey(y, w);
      }
      const h = this.getSymKey(n), { type: f, senderPublicKey: g } = a;
      return Ap({ type: f, symKey: h, message: l, senderPublicKey: g });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = Np(s, u);
      if (Lo(a)) {
        const l = a.receiverPublicKey, h = a.senderPublicKey;
        n = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(n), h = Rp({ symKey: l, encoded: s });
        return Xa(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = Mi(n);
      return hi(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Mi(n);
      return s.senderPublicKey ? bt(s.senderPublicKey, yt) : void 0;
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.keychain = i || new a1(this.core, this.logger);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
      e = this.keychain.get(ia);
    } catch {
      e = Hn(), await this.keychain.set(ia, e);
    }
    return Ny(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class u1 extends Fh {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = qy, this.version = zy, this.initialized = !1, this.storagePrefix = nr, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, n) => {
      this.isInitialized();
      const s = Tr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Tr(n);
      return typeof s[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = ve.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, xc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Cc(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class l1 extends Uh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Rt.EventEmitter(), this.name = Ky, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || By, l = Vn(s), h = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, g = (s == null ? void 0 : s.id) || Uc().toString(), y = { topic: i, message: n, opts: { ttl: a, relay: l, prompt: h, tag: f, id: g } }, w = setTimeout(() => this.queue.set(g, y), this.publishTimeout);
        try {
          await await si(this.rpcPublish(i, n, a, l, h, f, g), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(g), this.relayer.events.emit(ft.publish, y);
        } catch (E) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = s == null ? void 0 : s.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(g), E;
          return;
        } finally {
          clearTimeout(w);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.relayer = e, this.logger = ve.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, i, n, s, u, a) {
    var l, h, f, g;
    const y = { method: Ti(n.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: s, tag: u }, id: a };
    return gt((l = y.params) == null ? void 0 : l.prompt) && ((h = y.params) == null || delete h.prompt), gt((f = y.params) == null ? void 0 : f.tag) && ((g = y.params) == null || delete g.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: i, opts: n } = e;
      await this.publish(r, i, n);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(ft.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(ft.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class h1 {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const i = this.get(e);
      this.exists(e, r) || this.map.set(e, [...i, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, r))
        return;
      const n = i.filter((s) => s !== r);
      if (!n.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, n);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var f1 = Object.defineProperty, d1 = Object.defineProperties, p1 = Object.getOwnPropertyDescriptors, oa = Object.getOwnPropertySymbols, g1 = Object.prototype.hasOwnProperty, y1 = Object.prototype.propertyIsEnumerable, aa = (t, e, r) => e in t ? f1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jr = (t, e) => {
  for (var r in e || (e = {}))
    g1.call(e, r) && aa(t, r, e[r]);
  if (oa)
    for (var r of oa(e))
      y1.call(e, r) && aa(t, r, e[r]);
  return t;
}, wn = (t, e) => d1(t, p1(e));
class b1 extends jh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new h1(), this.events = new Rt.EventEmitter(), this.name = Xy, this.version = Zy, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = nr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = Vn(n), u = { topic: i, relay: s };
        this.pending.set(i, u);
        const a = await this.rpcSubscribe(i, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), typeof (n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((n, s) => {
      const u = new X.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= e1 && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = ve.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
    let i = !1;
    try {
      i = this.getSubscription(e).topic === r;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (n) => await this.unsubscribeById(e, n, r)));
  }
  async unsubscribeById(e, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    try {
      const n = Vn(i);
      await this.rpcUnsubscribe(e, r, n);
      const s = Ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: Ti(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await si(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ft.connection_stalled);
    }
    return Tr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: Ti(r.protocol).batchSubscribe, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await si(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ft.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, i) {
    const n = { method: Ti(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, wn(Jr({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Jr({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, i) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, i), await this.relayer.messages.del(e);
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
    this.subscriptions.set(e, Jr({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Kt.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: i } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Kt.deleted, wn(Jr({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Kt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(Kt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
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
    pi(r) && this.onBatchSubscribe(r.map((i, n) => wn(Jr({}, e[n]), { id: i })));
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
    this.relayer.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(ft.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(ft.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Kt.created, async (e) => {
      const r = Kt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Kt.deleted, async (e) => {
      const r = Kt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
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
var m1 = Object.defineProperty, ca = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, w1 = Object.prototype.propertyIsEnumerable, ua = (t, e, r) => e in t ? m1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, _1 = (t, e) => {
  for (var r in e || (e = {}))
    v1.call(e, r) && ua(t, r, e[r]);
  if (ca)
    for (var r of ca(e))
      w1.call(e, r) && ua(t, r, e[r]);
  return t;
};
class E1 extends Mh {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Rt.EventEmitter(), this.name = Vy, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(ft.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(ft.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Yt.payload, this.onPayloadHandler), this.provider.on(Yt.connect, this.onConnectHandler), this.provider.on(Yt.disconnect, this.onDisconnectHandler), this.provider.on(Yt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ve.generateChildLogger(e.logger, this.name) : ve.pino(ve.getDefaultLoggerOptions({ level: e.logger || Hy })), this.messages = new u1(this.logger, e.core), this.subscriber = new b1(this, this.logger), this.publisher = new l1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qc, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${na}...`), await this.restartTransport(na);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Yy);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, r, i) {
    this.isInitialized(), await this.publisher.publish(e, r, i), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var i;
    this.isInitialized();
    let n = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
    return n || (await Promise.all([new Promise((s) => {
      this.subscriber.once(Kt.created, (u) => {
        u.topic === e && s();
      });
    }), new Promise(async (s) => {
      n = await this.subscriber.subscribe(e, r), s();
    })]), n);
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await si(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Kt.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, i) => {
          try {
            await si(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (n) {
            i(n);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (!this.isConnectionStalled(i.message))
          throw r;
        this.provider.events.emit(Yt.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Ho())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new r0(new o0(Kp({ sdkVersion: Gy, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: i } = e;
    await this.messages.set(r, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const n = this.messages.has(r, i);
    return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), bs(e)) {
      if (!e.method.endsWith(Wy))
        return;
      const r = e.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(_1({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      Xi(e) && this.events.emit(ft.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ft.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = gs(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Yt.payload, this.onPayloadHandler), this.provider.off(Yt.connect, this.onConnectHandler), this.provider.off(Yt.disconnect, this.onDisconnectHandler), this.provider.off(Yt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(ft.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Ho();
    Fg(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(ft.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, X.toMiliseconds(ky)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
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
var S1 = Object.defineProperty, la = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, I1 = Object.prototype.propertyIsEnumerable, ha = (t, e, r) => e in t ? S1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fa = (t, e) => {
  for (var r in e || (e = {}))
    D1.call(e, r) && ha(t, r, e[r]);
  if (la)
    for (var r of la(e))
      I1.call(e, r) && ha(t, r, e[r]);
  return t;
};
class en extends $h {
  constructor(e, r, i, n = nr, s = void 0) {
    super(e, r, i, n), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = Jy, this.cached = [], this.initialized = !1, this.storagePrefix = nr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !gt(u) ? this.map.set(this.getKey(u), u) : fg(u) ? this.map.set(u.id, u) : dg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => c0(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = fa(fa({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = ve.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
      const { message: i } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
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
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class O1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = t1, this.version = r1, this.events = new es(), this.initialized = !1, this.storagePrefix = nr, this.ignoredPayloadTypes = [Sr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = Hn(), n = await this.core.crypto.setSymKey(i), s = Lt(X.FIVE_MINUTES), u = { protocol: Jc }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = rg({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = Zp(i.uri);
      if (this.pairings.keys.includes(n))
        throw new Error(`Pairing already exists: ${n}`);
      if (this.core.crypto.hasKeys(n))
        throw new Error(`Keychain already exists: ${n}`);
      const a = Lt(X.FIVE_MINUTES), l = { topic: n, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(n, l), await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: u }), this.core.expirer.set(n, a), i.activatePairing && await this.activate({ topic: n }), l;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Lt(X.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: n }), this.core.expirer.set(i, n);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Cr();
        this.events.once(Be("pairing_ping", s), ({ error: h }) => {
          h ? l(h) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: n }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: n });
    }, this.updateMetadata = async ({ topic: i, metadata: n }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: n });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: n } = i;
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", Ke("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = oi(n, s), a = await this.core.crypto.encode(i, u), l = Yr[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = gs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = Yr[l.request.method].res;
      await this.core.relayer.publish(n, a, h), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = ys(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = Yr[l.request.method] ? Yr[l.request.method].res : Yr.unregistered_method.res;
      await this.core.relayer.publish(n, a, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => ir(n.expiry));
      await Promise.all(i.map((n) => this.deletePairing(n.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: n, payload: s } = i;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(n, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(n, s);
        default:
          return this.onUnknownRpcMethodRequest(n, s);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: n, payload: s } = i, u = (await this.core.history.get(n, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(n, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(s, i, !0), this.events.emit("pairing_ping", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (i, n) => {
      const { id: s } = n;
      setTimeout(() => {
        Qt(n) ? this.events.emit(Be("pairing_ping", s), {}) : Ft(n) && this.events.emit(Be("pairing_ping", s), { error: n.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (i, n) => {
      const { id: s, method: u } = n;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = Ke("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(Ke("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!vt(i)) {
        const { message: n } = G("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!hg(i.uri)) {
        const { message: n } = G("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!vt(i)) {
        const { message: s } = G("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!vt(i)) {
        const { message: s } = G("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidPairingTopic = async (i) => {
      if (!tt(i, !1)) {
        const { message: n } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (ir(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = G("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.pairings = new en(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(ft.message, async (e) => {
      const { topic: r, message: i } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      try {
        bs(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Xi(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(At.expired, async (e) => {
      const { topic: r } = Rc(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class x1 extends Lh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Rt.EventEmitter(), this.name = i1, this.version = n1, this.cached = [], this.initialized = !1, this.storagePrefix = nr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Lt(X.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(Bt.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Ft(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(Bt.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(Bt.deleted, s);
        }
      });
    }, this.exists = async (i, n) => (this.isInitialized(), this.records.has(n) ? (await this.getRecord(n)).topic === i : !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
      const i = { topic: r.topic, request: oi(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(i);
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
      const { message: i } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Bt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Bt.created, (e) => {
      const r = Bt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Bt.updated, (e) => {
      const r = Bt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Bt.deleted, (e) => {
      const r = Bt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        X.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class C1 extends qh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Rt.EventEmitter(), this.name = s1, this.version = o1, this.cached = [], this.initialized = !1, this.storagePrefix = nr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const n = this.formatTarget(i);
        return typeof this.getExpiration(n) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, n) => {
      this.isInitialized();
      const s = this.formatTarget(i), u = { target: s, expiry: n };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(At.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(At.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
      return Hp(e);
    if (typeof e == "number")
      return Vp(e);
    const { message: r } = G("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(At.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: i } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: i } = r;
    X.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(At.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(At.created, (e) => {
      const r = At.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(At.expired, (e) => {
      const r = At.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(At.deleted, (e) => {
      const r = At.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class A1 extends zh {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = vn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || Qi() || !fi())
        return;
      const n = (i == null ? void 0 : i.verifyUrl) || Pi;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = sa;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const n = (i == null ? void 0 : i.verifyUrl) || Pi;
      let s = "";
      try {
        s = await this.fetchAttestation(i.attestationId, n);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.warn(u), s = await this.fetchAttestation(i.attestationId, sa);
      }
      return s;
    }, this.fetchAttestation = async (i, n) => {
      var s;
      this.logger.info(`resolving attestation: ${i} from url: ${n}`);
      const u = this.startAbortTimer(X.ONE_SECOND * 2), a = await fetch(`${n}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(u), a.status === 200 ? (s = await a.json()) == null ? void 0 : s.origin : "";
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var n;
      try {
        if (!this.iframe)
          return;
        (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const n = (s) => {
        s.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", n), i());
      };
      await Promise.race([new Promise((s) => {
        if (document.getElementById(vn))
          return s();
        window.addEventListener("message", n);
        const u = document.createElement("iframe");
        u.id = vn, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", n), u("verify iframe load timeout");
      }, X.toMiliseconds(X.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = ve.generateChildLogger(r, this.name), this.verifyUrl = Pi, this.abortController = new AbortController(), this.isDevEnv = hs() && process.env.IS_VITEST;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), X.toMiliseconds(e));
  }
}
var R1 = Object.defineProperty, da = Object.getOwnPropertySymbols, T1 = Object.prototype.hasOwnProperty, N1 = Object.prototype.propertyIsEnumerable, pa = (t, e, r) => e in t ? R1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ga = (t, e) => {
  for (var r in e || (e = {}))
    T1.call(e, r) && pa(t, r, e[r]);
  if (da)
    for (var r of da(e))
      N1.call(e, r) && pa(t, r, e[r]);
  return t;
};
class vs extends Ph {
  constructor(e) {
    super(e), this.protocol = Yc, this.version = Py, this.name = ms, this.events = new Rt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qc;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ly.logger }));
    this.logger = ve.generateChildLogger(r, this.name), this.heartbeat = new Lr.HeartBeat(), this.crypto = new c1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new x1(this, this.logger), this.expirer = new C1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new yh(ga(ga({}, Fy), e == null ? void 0 : e.storageOptions)), this.relayer = new E1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new O1(this, this.logger), this.verify = new A1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new vs(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(Qy, i), r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
const P1 = vs, Xc = "wc", Zc = 2, eu = "client", ws = `${Xc}@${Zc}:${eu}:`, _n = { name: eu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, ya = "WALLETCONNECT_DEEPLINK_CHOICE", L1 = "proposal", F1 = "Proposal expired", U1 = "session", Ci = X.SEVEN_DAYS, M1 = "engine", Qr = { wc_sessionPropose: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, En = { min: X.FIVE_MINUTES, max: X.SEVEN_DAYS }, Jt = { idle: "IDLE", active: "ACTIVE" }, $1 = "request", j1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var q1 = Object.defineProperty, z1 = Object.defineProperties, B1 = Object.getOwnPropertyDescriptors, ba = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, H1 = Object.prototype.propertyIsEnumerable, ma = (t, e, r) => e in t ? q1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, mt = (t, e) => {
  for (var r in e || (e = {}))
    K1.call(e, r) && ma(t, r, e[r]);
  if (ba)
    for (var r of ba(e))
      H1.call(e, r) && ma(t, r, e[r]);
  return t;
}, Xr = (t, e) => z1(t, B1(e));
class V1 extends Kh {
  constructor(e) {
    super(e), this.name = M1, this.events = new es(), this.initialized = !1, this.ignoredPayloadTypes = [Sr], this.requestQueue = { state: Jt.idle, queue: [] }, this.sessionRequestQueue = { state: Jt.idle, queue: [] }, this.requestQueueDelay = X.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Qr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = Xr(mt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let h = n, f, g = !1;
      if (h && (g = this.client.core.pairing.pairings.get(h).active), !h || !g) {
        const { topic: I, uri: b } = await this.client.core.pairing.create();
        h = I, f = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), w = mt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Jc }], proposer: { publicKey: y, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: E, resolve: D, done: O } = Cr(X.FIVE_MINUTES, F1);
      if (this.events.once(Be("session_connect"), async ({ error: I, session: b }) => {
        if (I)
          E(I);
        else if (b) {
          b.self.publicKey = y;
          const _ = Xr(mt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, _), await this.setExpiry(b.topic, b.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: b.peer.metadata }), D(_);
        }
      }), !h) {
        const { message: I } = G("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(I);
      }
      const F = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: w }), v = Lt(X.FIVE_MINUTES);
      return await this.setProposal(F, mt({ id: F, expiry: v }, w)), { uri: f, approval: O };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: h, requiredNamespaces: f, optionalNamespaces: g } = a;
      l = l || "", ti(f) || (f = og(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), w = h.publicKey, E = await this.client.core.crypto.generateSharedKey(y, w);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult({ id: i, topic: l, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(i, Ke("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const D = mt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: g, pairingTopic: l, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Lt(Ci) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(E), await this.sendRequest({ topic: E, method: "wc_sessionSettle", params: D, throwOnFailedPublish: !0 });
      const O = Xr(mt({}, D), { topic: E, pairingTopic: l, acknowledged: !1, self: D.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: y });
      return await this.client.session.set(E, O), await this.setExpiry(E, Lt(Ci)), { topic: E, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(E)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, Ke("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n } }), { done: u, resolve: a, reject: l } = Cr();
      return this.events.once(Be("session_update", s), ({ error: h }) => {
        h ? l(h) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: a } = Cr();
      return this.events.once(Be("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Lt(Ci)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = ps(), { done: l, resolve: h, reject: f } = Cr(u);
      return this.events.once(Be("session_request", a), ({ error: g, result: y }) => {
        g ? f(g) : h(y);
      }), await Promise.all([new Promise(async (g) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: n, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((y) => f(y)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a }), g();
      }), new Promise(async (g) => {
        const y = await this.client.core.storage.getItem(ya);
        Wp({ id: a, topic: s, wcDeepLink: y }), g();
      }), l()]).then((g) => g[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      Qt(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Ft(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: a } = Cr();
        this.events.once(Be("session_ping", n), ({ error: l }) => {
          l ? a(l) : u();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: n, chainId: s } = r;
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: n, chainId: s } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: Ke("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => ug(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), n = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== i.topic;
          });
          if (n.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`), await Promise.all(n.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r, i) => {
      const { self: n } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(ya).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, Ke("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = Jt.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = Qr.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Lt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: u, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: h } = r, f = oi(n, s, l);
      if (fi() && j1.includes(n)) {
        const w = Tr(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: w });
      }
      const g = await this.client.core.crypto.encode(i, f), y = Qr[n].req;
      return u && (y.ttl = u), a && (y.id = a), this.client.core.history.set(i, f), h ? (y.internal = Xr(mt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, g, y)) : this.client.core.relayer.publish(i, g, y).catch((w) => this.client.logger.error(w)), f.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: u } = r, a = gs(i, s), l = await this.client.core.crypto.encode(n, a), h = await this.client.core.history.get(n, i), f = Qr[h.request.method].res;
      u ? (f.internal = Xr(mt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, l, f)) : this.client.core.relayer.publish(n, l, f).catch((g) => this.client.logger.error(g)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, i, n) => {
      const s = ys(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = Qr[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        ir(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        ir(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Jt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Jt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = Jt.idle;
    }, this.processRequest = (r) => {
      const { topic: i, payload: n } = r, s = n.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, n);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, n);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, n);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, n);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: i, payload: n } = r, s = (await this.client.core.history.get(i, n.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, n);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, n);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: i } = r, { message: n } = G("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(n);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidConnect(mt({}, i.params));
        const u = Lt(X.FIVE_MINUTES), a = mt({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = Tr(JSON.stringify(i)), h = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: h });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (Qt(i)) {
        const { result: s } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(n);
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
        Ft(i) && (await this.client.proposal.delete(n, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: h, requiredNamespaces: f, optionalNamespaces: g, sessionProperties: y, pairingTopic: w } = i.params, E = mt({ topic: r, relay: u, expiry: l, namespaces: h, acknowledged: !0, pairingTopic: w, requiredNamespaces: f, optionalNamespaces: g, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: i.id, topic: r, result: !0 }), this.events.emit(Be("session_connect"), { session: E }), this.cleanupDuplicatePairings(E);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      Qt(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Be("session_approve", n), {})) : Ft(i) && (await this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const u = `${r}_session_update`, a = xi.get(u);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(mt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: n }), xi.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      Qt(i) ? this.events.emit(Be("session_update", n), {}) : Ft(i) && this.events.emit(Be("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Lt(Ci)), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      Qt(i) ? this.events.emit(Be("session_extend", n), {}) : Ft(i) && this.events.emit(Be("session_extend", n), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: n } = i;
      setTimeout(() => {
        Qt(i) ? this.events.emit(Be("session_ping", n), {}) : Ft(i) && this.events.emit(Be("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(ft.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: n, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(mt({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: n, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      Qt(i) ? this.events.emit(Be("session_request", n), { result: i.result }) : Ft(i) && this.events.emit(Be("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const u = `${r}_session_event_${s.event.name}`, a = xi.get(u);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(mt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), xi.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Jt.idle, this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === Jt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Tr(JSON.stringify(oi("wc_sessionRequest", s, i))), a = this.client.session.get(n), l = await this.getVerifyContext(u, a.peer.metadata);
        this.sessionRequestQueue.state = Jt.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!vt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (gt(i) || await this.isValidPairingTopic(i), !_g(a, !0)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !gt(n) && ti(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !gt(s) && ti(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), gt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = wg(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!vt(r))
        throw new Error(G("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = Ni(n, "approve()");
      if (l)
        throw new Error(l.message);
      const h = Bo(a.requiredNamespaces, n, "approve()");
      if (h)
        throw new Error(h.message);
      if (!tt(s, !0)) {
        const { message: f } = G("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      gt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!vt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !Sg(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!vt(r)) {
        const { message: h } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!Nc(i)) {
        const { message: h } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = pg(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Ni(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (ir(u)) {
        const { message: h } = G("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!vt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = Ni(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = Bo(s.requiredNamespaces, n, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!vt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!vt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!zo(a, s)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Dg(n)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!xg(a, s, n.method)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !Tg(u, En)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${En.min} and ${En.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!vt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !Ig(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!vt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!vt(r)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!zo(u, s)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Og(n)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!Cg(u, s, n.name)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!vt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const n = { verified: { verifyUrl: i.verifyUrl || Pi, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        s && (n.verified.origin = s, n.verified.validation = s === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((n) => {
        if (!tt(n, !1)) {
          const { message: s } = G("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(ft.message, async (e) => {
      const { topic: r, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      try {
        bs(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Xi(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(At.expired, async (e) => {
      const { topic: r, id: i } = Rc(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, G("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = G("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = G("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (tt(e, !1)) {
      const { message: r } = G("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = G("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!Eg(e)) {
      const { message: r } = G("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = G("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class W1 extends en {
  constructor(e, r) {
    super(e, r, L1, ws), this.core = e, this.logger = r;
  }
}
class k1 extends en {
  constructor(e, r) {
    super(e, r, U1, ws), this.core = e, this.logger = r;
  }
}
class G1 extends en {
  constructor(e, r) {
    super(e, r, $1, ws, (i) => i.id), this.core = e, this.logger = r;
  }
}
class _s extends Bh {
  constructor(e) {
    super(e), this.protocol = Xc, this.version = Zc, this.name = _n.name, this.events = new Rt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (e == null ? void 0 : e.name) || _n.name, this.metadata = (e == null ? void 0 : e.metadata) || jp();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || _n.logger }));
    this.core = (e == null ? void 0 : e.core) || new P1(e), this.logger = ve.generateChildLogger(r, this.name), this.session = new k1(this.core, this.logger), this.proposal = new W1(this.core, this.logger), this.pendingRequest = new G1(this.core, this.logger), this.engine = new V1(this);
  }
  static async init(e) {
    const r = new _s(e);
    return await r.initialize(), r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
var Y1 = Object.defineProperty, J1 = Object.defineProperties, Q1 = Object.getOwnPropertyDescriptors, va = Object.getOwnPropertySymbols, X1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, wa = (t, e, r) => e in t ? Y1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, eb = (t, e) => {
  for (var r in e || (e = {}))
    X1.call(e, r) && wa(t, r, e[r]);
  if (va)
    for (var r of va(e))
      Z1.call(e, r) && wa(t, r, e[r]);
  return t;
}, tb = (t, e) => J1(t, Q1(e)), Es = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Re = (t, e, r) => (Es(t, e, "read from private field"), r ? r.call(t) : e.get(t)), mr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, qi = (t, e, r, i) => (Es(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), ut = (t, e, r) => (Es(t, e, "access private method"), r), vr, Ar, Zr, et, Gn, tu, lt, pt, Yn, _a;
class rb {
  constructor(e) {
    mr(this, Gn), mr(this, lt), mr(this, Yn), mr(this, vr, void 0), mr(this, Ar, void 0), mr(this, Zr, void 0), mr(this, et, void 0), qi(this, vr, e), qi(this, Ar, ut(this, Gn, tu).call(this)), ut(this, lt, pt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: i } = e;
    return new Promise(async (n, s) => {
      await ut(this, lt, pt).call(this);
      const u = Re(this, Ar).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await Re(this, et).connect(e);
      if (a) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((g) => h.add(g));
        }), i && Object.values(i).forEach(({ chains: f }) => {
          f && f.forEach((g) => h.add(g));
        }), await Re(this, Ar).openModal({ uri: a, chains: Array.from(h) });
      }
      try {
        const h = await l();
        n(h);
      } catch (h) {
        s(h);
      } finally {
        u(), Re(this, Ar).closeModal();
      }
    });
  }
  async disconnect(e) {
    await ut(this, lt, pt).call(this), await Re(this, et).disconnect(e);
  }
  async request(e) {
    return await ut(this, lt, pt).call(this), await Re(this, et).request(e);
  }
  async getSessions() {
    return await ut(this, lt, pt).call(this), Re(this, et).session.getAll();
  }
  async getSession() {
    return await ut(this, lt, pt).call(this), Re(this, et).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await ut(this, lt, pt).call(this), Re(this, et).on("session_event", e);
  }
  async offSessionEvent(e) {
    await ut(this, lt, pt).call(this), Re(this, et).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await ut(this, lt, pt).call(this), Re(this, et).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await ut(this, lt, pt).call(this), Re(this, et).off("session_update", e);
  }
  async onSessionDelete(e) {
    await ut(this, lt, pt).call(this), Re(this, et).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await ut(this, lt, pt).call(this), Re(this, et).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await ut(this, lt, pt).call(this), Re(this, et).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await ut(this, lt, pt).call(this), Re(this, et).off("session_expire", e);
  }
}
vr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakSet(), tu = function() {
  const { modalOptions: t, projectId: e } = Re(this, vr);
  return new Fl(tb(eb({}, t), { projectId: e }));
}, lt = /* @__PURE__ */ new WeakSet(), pt = async function() {
  return Re(this, et) ? !0 : (!Re(this, Zr) && typeof window < "u" && qi(this, Zr, ut(this, Yn, _a).call(this)), Re(this, Zr));
}, Yn = /* @__PURE__ */ new WeakSet(), _a = async function() {
  qi(this, et, await _s.init({ metadata: Re(this, vr).metadata, projectId: Re(this, vr).projectId, relayUrl: Re(this, vr).relayUrl }));
  const t = await Re(this, et).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Ss = [
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
], tn = ["aleo:1"], Ds = ["chainChanged", "accountSelected", "accountSynced"], ib = "f0aaeffe71b636da453fce042d79d723", nb = {
  standaloneChains: tn,
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
}, Vb = {
  requiredNamespaces: {
    aleo: {
      methods: Ss,
      chains: tn,
      events: Ds
    }
  }
};
function sb(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, r) {
    var i = t.get(e);
    i ? i.push(r) : t.set(e, [r]);
  }, off: function(e, r) {
    var i = t.get(e);
    i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, r) {
    var i = t.get(e);
    i && i.slice().map(function(n) {
      n(r);
    }), (i = t.get("*")) && i.slice().map(function(n) {
      n(e, r);
    });
  } };
}
const Ea = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), i = (l, h) => {
    const f = typeof l == "function" ? l(e) : l;
    if (!Object.is(f, e)) {
      const g = e;
      e = h ?? typeof f != "object" ? f : Object.assign({}, e, f), r.forEach((y) => y(e, g));
    }
  }, n = () => e, a = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return e = t(i, n, a), a;
}, ob = (t) => t ? Ea(t) : Ea;
var Jn = { exports: {} }, Sn = {}, Ai = { exports: {} }, Dn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function ab() {
  if (Sa)
    return Dn;
  Sa = 1;
  var t = zi;
  function e(g, y) {
    return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, i = t.useState, n = t.useEffect, s = t.useLayoutEffect, u = t.useDebugValue;
  function a(g, y) {
    var w = y(), E = i({ inst: { value: w, getSnapshot: y } }), D = E[0].inst, O = E[1];
    return s(function() {
      D.value = w, D.getSnapshot = y, l(D) && O({ inst: D });
    }, [g, w, y]), n(function() {
      return l(D) && O({ inst: D }), g(function() {
        l(D) && O({ inst: D });
      });
    }, [g]), u(w), w;
  }
  function l(g) {
    var y = g.getSnapshot;
    g = g.value;
    try {
      var w = y();
      return !r(g, w);
    } catch {
      return !0;
    }
  }
  function h(g, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : a;
  return Dn.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, Dn;
}
var In = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function cb() {
  return Da || (Da = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = zi, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(I) {
      {
        for (var b = arguments.length, _ = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
          _[d - 1] = arguments[d];
        i("error", I, _);
      }
    }
    function i(I, b, _) {
      {
        var d = e.ReactDebugCurrentFrame, o = d.getStackAddendum();
        o !== "" && (b += "%s", _ = _.concat([o]));
        var p = _.map(function(R) {
          return String(R);
        });
        p.unshift("Warning: " + b), Function.prototype.apply.call(console[I], console, p);
      }
    }
    function n(I, b) {
      return I === b && (I !== 0 || 1 / I === 1 / b) || I !== I && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = t.useState, a = t.useEffect, l = t.useLayoutEffect, h = t.useDebugValue, f = !1, g = !1;
    function y(I, b, _) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = b();
      if (!g) {
        var o = b();
        s(d, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var p = u({
        inst: {
          value: d,
          getSnapshot: b
        }
      }), R = p[0].inst, T = p[1];
      return l(function() {
        R.value = d, R.getSnapshot = b, w(R) && T({
          inst: R
        });
      }, [I, d, b]), a(function() {
        w(R) && T({
          inst: R
        });
        var U = function() {
          w(R) && T({
            inst: R
          });
        };
        return I(U);
      }, [I]), h(d), d;
    }
    function w(I) {
      var b = I.getSnapshot, _ = I.value;
      try {
        var d = b();
        return !s(_, d);
      } catch {
        return !0;
      }
    }
    function E(I, b, _) {
      return b();
    }
    var D = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", O = !D, F = O ? E : y, v = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : F;
    In.useSyncExternalStore = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), In;
}
var Ia;
function ru() {
  return Ia || (Ia = 1, process.env.NODE_ENV === "production" ? Ai.exports = ab() : Ai.exports = cb()), Ai.exports;
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
var Oa;
function ub() {
  if (Oa)
    return Sn;
  Oa = 1;
  var t = zi, e = ru();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
  return Sn.useSyncExternalStoreWithSelector = function(h, f, g, y, w) {
    var E = s(null);
    if (E.current === null) {
      var D = { hasValue: !1, value: null };
      E.current = D;
    } else
      D = E.current;
    E = a(function() {
      function F(d) {
        if (!v) {
          if (v = !0, I = d, d = y(d), w !== void 0 && D.hasValue) {
            var o = D.value;
            if (w(o, d))
              return b = o;
          }
          return b = d;
        }
        if (o = b, i(I, d))
          return o;
        var p = y(d);
        return w !== void 0 && w(o, p) ? o : (I = d, b = p);
      }
      var v = !1, I, b, _ = g === void 0 ? null : g;
      return [function() {
        return F(f());
      }, _ === null ? void 0 : function() {
        return F(_());
      }];
    }, [f, g, y, w]);
    var O = n(h, E[0], E[1]);
    return u(function() {
      D.hasValue = !0, D.value = O;
    }, [O]), l(O), O;
  }, Sn;
}
var On = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function lb() {
  return xa || (xa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = zi, e = ru();
    function r(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    function h(f, g, y, w, E) {
      var D = s(null), O;
      D.current === null ? (O = {
        hasValue: !1,
        value: null
      }, D.current = O) : O = D.current;
      var F = a(function() {
        var _ = !1, d, o, p = function(B) {
          if (!_) {
            _ = !0, d = B;
            var k = w(B);
            if (E !== void 0 && O.hasValue) {
              var x = O.value;
              if (E(x, k))
                return o = x, x;
            }
            return o = k, k;
          }
          var P = d, V = o;
          if (i(P, B))
            return V;
          var z = w(B);
          return E !== void 0 && E(V, z) ? V : (d = B, o = z, z);
        }, R = y === void 0 ? null : y, T = function() {
          return p(g());
        }, U = R === null ? void 0 : function() {
          return p(R());
        };
        return [T, U];
      }, [g, y, w, E]), v = F[0], I = F[1], b = n(f, v, I);
      return u(function() {
        O.hasValue = !0, O.value = b;
      }, [b]), l(b), b;
    }
    On.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), On;
}
process.env.NODE_ENV === "production" ? Jn.exports = ub() : Jn.exports = lb();
var hb = Jn.exports;
const fb = /* @__PURE__ */ Bi(hb), { useSyncExternalStoreWithSelector: db } = fb;
function pb(t, e = t.getState, r) {
  const i = db(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return Wu(i), i;
}
const Ca = (t) => {
  const e = typeof t == "function" ? ob(t) : t, r = (i, n) => pb(e, i, n);
  return Object.assign(r, e), r;
}, gb = (t) => t ? Ca(t) : Ca;
function yb(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var s;
      const u = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), a = (s = r.getItem(n)) != null ? s : null;
      return a instanceof Promise ? a.then(u) : u(a);
    },
    setItem: (n, s) => r.setItem(
      n,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (n) => r.removeItem(n)
  };
}
const ai = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(i) {
        return ai(i)(r);
      },
      catch(i) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(i) {
        return this;
      },
      catch(i) {
        return ai(i)(r);
      }
    };
  }
}, bb = (t, e) => (r, i, n) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (O) => O,
    version: 0,
    merge: (O, F) => ({
      ...F,
      ...O
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
      (...O) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...O);
      },
      i,
      n
    );
  const f = ai(s.serialize), g = () => {
    const O = s.partialize({ ...i() });
    let F;
    const v = f({ state: O, version: s.version }).then(
      (I) => h.setItem(s.name, I)
    ).catch((I) => {
      F = I;
    });
    if (F)
      throw F;
    return v;
  }, y = n.setState;
  n.setState = (O, F) => {
    y(O, F), g();
  };
  const w = t(
    (...O) => {
      r(...O), g();
    },
    i,
    n
  );
  let E;
  const D = () => {
    var O;
    if (!h)
      return;
    u = !1, a.forEach((v) => v(i()));
    const F = ((O = s.onRehydrateStorage) == null ? void 0 : O.call(s, i())) || void 0;
    return ai(h.getItem.bind(h))(s.name).then((v) => {
      if (v)
        return s.deserialize(v);
    }).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              v.state,
              v.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return v.state;
    }).then((v) => {
      var I;
      return E = s.merge(
        v,
        (I = i()) != null ? I : w
      ), r(E, !0), g();
    }).then(() => {
      F == null || F(E, void 0), u = !0, l.forEach((v) => v(E));
    }).catch((v) => {
      F == null || F(void 0, v);
    });
  };
  return n.persist = {
    setOptions: (O) => {
      s = {
        ...s,
        ...O
      }, O.getStorage && (h = O.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => D(),
    hasHydrated: () => u,
    onHydrate: (O) => (a.add(O), () => {
      a.delete(O);
    }),
    onFinishHydration: (O) => (l.add(O), () => {
      l.delete(O);
    })
  }, D(), E || w;
}, mb = (t, e) => (r, i, n) => {
  let s = {
    storage: yb(() => localStorage),
    partialize: (D) => D,
    version: 0,
    merge: (D, O) => ({
      ...O,
      ...D
    }),
    ...e
  }, u = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...D) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...D);
      },
      i,
      n
    );
  const f = () => {
    const D = s.partialize({ ...i() });
    return h.setItem(s.name, {
      state: D,
      version: s.version
    });
  }, g = n.setState;
  n.setState = (D, O) => {
    g(D, O), f();
  };
  const y = t(
    (...D) => {
      r(...D), f();
    },
    i,
    n
  );
  let w;
  const E = () => {
    var D, O;
    if (!h)
      return;
    u = !1, a.forEach((v) => {
      var I;
      return v((I = i()) != null ? I : y);
    });
    const F = ((O = s.onRehydrateStorage) == null ? void 0 : O.call(s, (D = i()) != null ? D : y)) || void 0;
    return ai(h.getItem.bind(h))(s.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              v.state,
              v.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return v.state;
    }).then((v) => {
      var I;
      return w = s.merge(
        v,
        (I = i()) != null ? I : y
      ), r(w, !0), f();
    }).then(() => {
      F == null || F(w, void 0), w = i(), u = !0, l.forEach((v) => v(w));
    }).catch((v) => {
      F == null || F(void 0, v);
    });
  };
  return n.persist = {
    setOptions: (D) => {
      s = {
        ...s,
        ...D
      }, D.storage && (h = D.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => u,
    onHydrate: (D) => (a.add(D), () => {
      a.delete(D);
    }),
    onFinishHydration: (D) => (l.add(D), () => {
      l.delete(D);
    })
  }, s.skipHydration || E(), w || y;
}, vb = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? bb(t, e) : mb(t, e), wb = vb, yi = gb()(
  wb((t, e) => ({
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
), Pr = sb();
let ei;
function Wb(t) {
  ei = new rb({
    projectId: ib,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...nb }
  }), yi.setState({ account: void 0 }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Ce() {
  return new Promise((t) => {
    if (ei)
      t(ei);
    else {
      const e = setInterval(() => {
        ei && (clearInterval(e), t(ei));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var Aa;
(function(t) {
  t.Unknown = "Unknown", t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Aa || (Aa = {}));
var Ra;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Ra || (Ra = {}));
var Ta;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Ta || (Ta = {}));
var Na;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Na || (Na = {}));
var Pa;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Pa || (Pa = {}));
class kb extends It {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Gb {
  constructor(e, r, i) {
    this.core = e, this.logger = r;
  }
}
class Yb extends It {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class Jb {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class Qb extends It {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Xb extends It {
  constructor(e) {
    super();
  }
}
class Zb {
  constructor(e, r, i, n) {
    this.core = e, this.logger = r, this.name = i;
  }
}
class em {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class tm extends It {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class rm {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class im extends It {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class nm {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class sm {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class om extends es {
  constructor() {
    super();
  }
}
class am {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class cm extends Rt.EventEmitter {
  constructor() {
    super();
  }
}
class um {
  constructor(e) {
    this.client = e;
  }
}
function Is(t) {
  Ht(() => (Ce().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Ce().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function _b(t) {
  Ht(() => (Ce().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Ce().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function iu(t) {
  Ht(() => (Ce().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Ce().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Mt() {
  const [t, e] = it(void 0);
  return Is((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), iu((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: i } = r.params, n = { ...t, namespaces: i };
      e(n);
    }
  }), _b((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Ht(() => {
    async function r() {
      const n = await (await Ce()).getSession();
      e(n);
    }
    return r(), Pr.on("session_change", r), () => {
      Pr.off("session_change", r);
    };
  }, []), t;
}
function rn(t) {
  Ht(() => (Ce().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Ce().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const La = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, nu = () => {
  const t = Mt(), e = "aleo:1", [r, i] = yi((f) => [f.account, f.setAccount]), [n, s] = it(void 0), [u, a] = it(!1), l = async () => {
    if (!t) {
      a(!1);
      return;
    }
    try {
      a(!0);
      const g = await (await Ce()).request({
        topic: t == null ? void 0 : t.topic,
        chainId: e,
        request: {
          id: 1,
          jsonrpc: "2.0",
          method: "getSelectedAccount"
        }
      });
      i(g.account), s(g.error);
    } catch (f) {
      s(f.message);
    } finally {
      a(!1);
    }
  };
  return rn(({ params: f, topic: g }) => {
    if (f.event.name === "accountSelected" && t && t.topic === g) {
      const w = f.event.data, E = f.chainId.split(":")[0], D = f.chainId.split(":")[1];
      i({
        network: E,
        chainId: D,
        address: w,
        shortenedAddress: La(w)
      });
    }
  }), iu(({ params: f, topic: g }) => {
    const y = f.event.data, w = f.chainId.split(":")[0], E = f.chainId.split(":")[1];
    i({
      network: w,
      chainId: E,
      address: y,
      shortenedAddress: La(y)
    });
  }), Is(({ params: f, topic: g }) => {
    i(void 0);
  }), Ht(() => {
    t && !u && l();
  }, [t]), {
    account: r,
    error: n,
    loading: u
  };
}, lm = () => {
  const t = Mt(), e = "aleo:1", [r, i] = it(void 0), [n, s] = it(void 0), [u, a] = it(!1), l = async () => {
    try {
      a(!0);
      const f = await (await Ce()).request({
        topic: t == null ? void 0 : t.topic,
        chainId: e,
        request: {
          id: 1,
          jsonrpc: "2.0",
          method: "getBalance",
          params: {
            assetId: void 0
          }
        }
      });
      i(f.balances), s(f.error);
    } catch (h) {
      s(h.message);
    } finally {
      a(!1);
    }
  };
  return rn(({ params: h, topic: f }) => {
    const g = h.event.name;
    (g === "accountSynced" || g === "accountSelected") && t && t.topic === f && !u && l();
  }), Is(({ params: h, topic: f }) => {
    i(void 0);
  }), Ht(() => {
    t && !u && l(), t || i(void 0);
  }, [t]), { balances: r, error: n, loading: u };
};
function hm() {
  const [t, e] = it(void 0), [r, i] = it(), [n, s] = it(!1);
  async function u() {
    try {
      s(!0), i(void 0);
      const l = await (await Ce()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Ss,
            chains: tn,
            events: Ds
          }
        }
      });
      return e(l), Pr.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (a) {
      throw i(a), a;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: n, connect: u };
}
function ar(t) {
  const [e, r] = it(void 0), [i, n] = it(void 0), [s, u] = it(!1);
  async function a(l) {
    try {
      u(!0), n(void 0);
      const f = await (await Ce()).request(l ?? t);
      return r(f), f;
    } catch (h) {
      throw n(h), h;
    } finally {
      u(!1);
    }
  }
  return { data: e, error: i, loading: s, request: a };
}
const fm = (t) => {
  const e = Mt(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: i, data: n, error: s, loading: u } = ar({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : n && n.error, l = n;
  return { createEvent: () => {
    t && i();
  }, eventID: l == null ? void 0 : l.eventId, loading: u, error: a };
}, dm = () => {
  const t = Mt(), { request: e, data: r, error: i, loading: n } = ar({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = i ? i.message : r && r.error, u = r;
  return { createSharedState: () => {
    e();
  }, data: u == null ? void 0 : u.data, loading: n, error: s };
};
var Qn = { exports: {} }, xn, Fa;
function Eb() {
  if (Fa)
    return xn;
  Fa = 1;
  var t = 1e3, e = t * 60, r = e * 60, i = r * 24, n = i * 7, s = i * 365.25;
  xn = function(f, g) {
    g = g || {};
    var y = typeof f;
    if (y === "string" && f.length > 0)
      return u(f);
    if (y === "number" && isFinite(f))
      return g.long ? l(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function u(f) {
    if (f = String(f), !(f.length > 100)) {
      var g = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (g) {
        var y = parseFloat(g[1]), w = (g[2] || "ms").toLowerCase();
        switch (w) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * n;
          case "days":
          case "day":
          case "d":
            return y * i;
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
  function a(f) {
    var g = Math.abs(f);
    return g >= i ? Math.round(f / i) + "d" : g >= r ? Math.round(f / r) + "h" : g >= e ? Math.round(f / e) + "m" : g >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function l(f) {
    var g = Math.abs(f);
    return g >= i ? h(f, g, i, "day") : g >= r ? h(f, g, r, "hour") : g >= e ? h(f, g, e, "minute") : g >= t ? h(f, g, t, "second") : f + " ms";
  }
  function h(f, g, y, w) {
    var E = g >= y * 1.5;
    return Math.round(f / y) + " " + w + (E ? "s" : "");
  }
  return xn;
}
function Sb(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = n, r.enabled = u, r.humanize = Eb(), r.destroy = h, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let g = 0;
    for (let y = 0; y < f.length; y++)
      g = (g << 5) - g + f.charCodeAt(y), g |= 0;
    return r.colors[Math.abs(g) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let g, y = null, w, E;
    function D(...O) {
      if (!D.enabled)
        return;
      const F = D, v = Number(/* @__PURE__ */ new Date()), I = v - (g || v);
      F.diff = I, F.prev = g, F.curr = v, g = v, O[0] = r.coerce(O[0]), typeof O[0] != "string" && O.unshift("%O");
      let b = 0;
      O[0] = O[0].replace(/%([a-zA-Z%])/g, (d, o) => {
        if (d === "%%")
          return "%";
        b++;
        const p = r.formatters[o];
        if (typeof p == "function") {
          const R = O[b];
          d = p.call(F, R), O.splice(b, 1), b--;
        }
        return d;
      }), r.formatArgs.call(F, O), (F.log || r.log).apply(F, O);
    }
    return D.namespace = f, D.useColors = r.useColors(), D.color = r.selectColor(f), D.extend = i, D.destroy = r.destroy, Object.defineProperty(D, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (w !== r.namespaces && (w = r.namespaces, E = r.enabled(f)), E),
      set: (O) => {
        y = O;
      }
    }), typeof r.init == "function" && r.init(D), D;
  }
  function i(f, g) {
    const y = r(this.namespace + (typeof g > "u" ? ":" : g) + f);
    return y.log = this.log, y;
  }
  function n(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let g;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), w = y.length;
    for (g = 0; g < w; g++)
      y[g] && (f = y[g].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(a),
      ...r.skips.map(a).map((g) => "-" + g)
    ].join(",");
    return r.enable(""), f;
  }
  function u(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let g, y;
    for (g = 0, y = r.skips.length; g < y; g++)
      if (r.skips[g].test(f))
        return !1;
    for (g = 0, y = r.names.length; g < y; g++)
      if (r.names[g].test(f))
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
var Db = Sb;
(function(t, e) {
  e.formatArgs = i, e.save = n, e.load = s, e.useColors = r, e.storage = u(), e.destroy = (() => {
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
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    l.splice(1, 0, h, "color: inherit");
    let f = 0, g = 0;
    l[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (g = f));
    }), l.splice(g, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function n(l) {
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
  t.exports = Db(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(Qn, Qn.exports);
var Ib = Qn.exports;
const Ob = /* @__PURE__ */ Bi(Ib), Os = Ob("wallet:sdk");
Os.enabled = !0;
const pm = (t) => {
  Os("useDecrypt", t);
  const e = Mt(), { request: r, data: i, error: n, loading: s } = ar({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), u = n ? n.message : i && i.error, a = i;
  return { decrypt: () => {
    t && r();
  }, plaintexts: a == null ? void 0 : a.plaintexts, loading: s, error: u };
};
function gm() {
  const t = Mt(), [e, r] = it(), [i, n] = it(!1);
  async function s() {
    try {
      n(!0), r(void 0), await (await Ce()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: Ke("USER_DISCONNECTED")
      }), Pr.emit("session_change"), yi.setState({ account: void 0 });
    } catch (u) {
      throw r(u), u;
    } finally {
      n(!1);
    }
  }
  return { error: e, loading: i, disconnect: s };
}
const ym = ({ filter: t, page: e }) => {
  const r = Mt(), { account: i } = nu();
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { request: n, data: s, error: u, loading: a } = ar({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: e
      }
    }
  });
  rn(({ id: E, params: D, topic: O }) => {
    D.event.name === "accountSynced" && r && r.topic === O && !a && n();
  });
  const l = !!r && !!i;
  Ht(() => {
    l && !a && n();
  }, [l, i]);
  const h = () => {
    !!r && !!i && !a && n();
  }, f = u ? u.message : s && s.error, g = s, y = g == null ? void 0 : g.events, w = (g == null ? void 0 : g.pageCount) ?? 0;
  return { fetchPage: h, events: y, error: f, loading: a, page: e, pageCount: w };
}, bm = (t) => {
  const e = Mt(), { request: r, data: i, error: n, loading: s } = ar({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), u = n ? n.message : i && i.error, a = i;
  return { importSharedState: () => {
    r();
  }, data: a == null ? void 0 : a.data, loading: s, error: u };
}, mm = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, vm = ({ address: t, filter: e }) => {
  const r = Mt(), { account: i } = nu(), [n, s] = it(0), [u, a] = it([]), [l, h] = it(!0), f = ku(() => !!r && !!i, [r, i]);
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0), console.log("filter, page", { filter: e, page: n });
  const { request: g, data: y, error: w } = ar({
    topic: r == null ? void 0 : r.topic,
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: n
      }
    }
  }), E = w ? w.message : y && y.error, D = y, O = (D == null ? void 0 : D.pageCount) ?? 0, F = Gu(async () => {
    g();
  }, [g]);
  Ht(() => {
    f && l && (console.log("running request"), F());
  }, [n, f, l]), Ht(() => {
    console.log("response useEffect"), y ? (console.log("fetched records", y.records), a((I) => [...I, ...y.records]), n < y.pageCount - 1 ? (console.log("setting page", n + 1), s((I) => I + 1)) : (console.log("done"), h(!1))) : console.log("could not fetch records", y);
  }, [y]), rn(({ params: I, topic: b }) => {
    I.event.name === "accountSynced" && r && r.topic === b && !l && v();
  });
  const v = () => {
    h(!0), a([]), s(0);
  };
  return { records: u, error: E, loading: n !== O - 1, refetch: v };
}, wm = (t) => {
  const e = Mt(), r = t == null ? void 0 : t.inputs.map(
    (f) => typeof f == "string" ? f : f.plaintext
  ), { request: i, data: n, error: s, loading: u } = ar({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : n && n.error, l = n;
  return { requestCreateEvent: () => {
    t && (Os("useRequestCreateEvent requesting...", t), i());
  }, eventId: l == null ? void 0 : l.eventId, error: a, loading: u };
}, _m = (t, e) => {
  const r = Mt(), { request: i, data: n, error: s, loading: u } = ar({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: e
      }
    }
  }), a = s ? s.message : n && n.error;
  return { requestSignature: () => {
    i();
  }, response: n, loading: u, error: a };
}, Em = async () => {
  const t = await Ce(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    const i = await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return yi.setState({ account: i.account }), i;
  } catch (i) {
    const n = i.message;
    return console.error("getAccount error", n), { error: n };
  }
}, Sm = async () => {
  const t = await Ce(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0
        }
      }
    });
  } catch (i) {
    const n = i.message;
    return console.error("getBalance error", n), { error: n };
  }
}, Dm = async () => {
  const t = await Ce();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Ss,
          chains: tn,
          events: Ds
        }
      }
    });
    return Pr.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, Im = async (t) => {
  const e = await Ce(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { error: "no session, chainId, or connection" };
  const n = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: i,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: n
        }
      }
    });
  } catch (s) {
    const u = s.message;
    return console.error("createEvent error", u), { error: u };
  }
}, Om = async () => {
  const t = await Ce(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (i) {
    const n = i.message;
    return console.error("createSharedState error", n), { error: n };
  }
}, xm = async (t) => {
  const e = await Ce(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: i,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (n) {
    return console.error("decrypt error", n.message), { error: n.message };
  }
}, Cm = async () => {
  const t = await Ce(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: Ke("USER_DISCONNECTED"),
      topic: e.topic
    }), Pr.emit("session_change"), yi.setState({ account: void 0 }), {};
  } catch (r) {
    const i = r.message;
    return console.error("error disconnecting", i), { error: i };
  }
}, Am = async (t) => {
  const e = await Ce(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (s = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: s
      }
    }
  });
  try {
    return await n();
  } catch (s) {
    const u = s.message;
    return console.error("getEvents error", u), { error: u };
  }
}, Rm = async (t) => {
  const e = await Ce(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: i,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (n) {
    const s = n.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, Tm = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const i = await Ce(), n = await (i == null ? void 0 : i.getSession()), s = "aleo:1";
  if (!n || !s || !i)
    return { error: "no session, chainId, or connection" };
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const u = async (a = 0) => await i.request({
    topic: n.topic,
    chainId: s,
    request: {
      id: 1,
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
}, Nm = async ({
  message: t,
  address: e
}) => {
  const r = await Ce(), i = await (r == null ? void 0 : r.getSession()), n = "aleo:1";
  if (!i || !n || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: i.topic,
      chainId: n,
      request: {
        id: 1,
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
}, Pm = 50, xb = [
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
], Ua = dl.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Ua !== t && (xb.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Ua));
} catch (t) {
  console.error(t);
}
export {
  _m as $,
  Pa as A,
  tn as B,
  cm as C,
  Ds as D,
  Aa as E,
  ib as F,
  nb as G,
  Vb as H,
  em as I,
  La as J,
  nu as K,
  lm as L,
  hm as M,
  Na as N,
  fm as O,
  dm as P,
  pm as Q,
  _l as R,
  um as S,
  Ma as T,
  gm as U,
  Ta as V,
  ym as W,
  bm as X,
  mm as Y,
  vm as Z,
  wm as _,
  ht as a,
  Is as a0,
  rn as a1,
  _b as a2,
  iu as a3,
  Mt as a4,
  Pm as a5,
  Em as a6,
  Sm as a7,
  Dm as a8,
  Im as a9,
  Om as aa,
  xm as ab,
  Cm as ac,
  Am as ad,
  Rm as ae,
  Tm as af,
  Nm as ag,
  Ra as b,
  Wb as c,
  kb as d,
  Pr as e,
  im as f,
  Ce as g,
  Yb as h,
  Jb as i,
  Xb as j,
  am as k,
  Gb as l,
  nm as m,
  Ws as n,
  Rb as o,
  Ut as p,
  Zb as q,
  tm as r,
  on as s,
  Ab as t,
  Qb as u,
  om as v,
  sm as w,
  rm as x,
  Nr as y,
  Ss as z
};
