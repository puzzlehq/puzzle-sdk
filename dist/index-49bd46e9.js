import $i, { useDebugValue as Fu, useEffect as yr, useState as xr } from "react";
const Mu = "@puzzlehq/sdk", $u = "Puzzle SDK", ju = "0.1.20", qu = "Your portal to privacy", zu = "./dist/puzzle.umd.js", Bu = "./dist/puzzle.es.js", Ku = "./dist/types/src/index.d.ts", Hu = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, Vu = "module", Wu = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types"
}, ku = {
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
}, Gu = {
  "@puzzlehq/types": "1.0.3",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, Yu = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Ju = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], Qu = "Puzzle", Xu = "ISC", Zu = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, el = "https://github.com/puzzlehq/puzzle-sdk#readme", tl = {
  name: Mu,
  displayName: $u,
  version: ju,
  description: qu,
  main: zu,
  module: Bu,
  types: Ku,
  exports: Hu,
  type: Vu,
  scripts: Wu,
  dependencies: ku,
  devDependencies: Gu,
  repository: Yu,
  keywords: Ju,
  author: Qu,
  license: Xu,
  bugs: Zu,
  homepage: el
}, rl = Symbol(), As = Object.getPrototypeOf, En = /* @__PURE__ */ new WeakMap(), il = (t) => t && (En.has(t) ? En.get(t) : As(t) === Object.prototype || As(t) === Array.prototype), nl = (t) => il(t) && t[rl] || null, Cs = (t, e = !0) => {
  En.set(t, e);
}, Zi = (t) => typeof t == "object" && t !== null, Xt = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakSet(), sl = (t = Object.is, e = (h, p) => new Proxy(h, p), r = (h) => Zi(h) && !wi.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), i = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, n = /* @__PURE__ */ new WeakMap(), s = (h, p, b = i) => {
  const w = n.get(h);
  if ((w == null ? void 0 : w[0]) === p)
    return w[1];
  const _ = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return Cs(_, !0), n.set(h, [p, _]), Reflect.ownKeys(h).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(_, D))
      return;
    const I = Reflect.get(h, D), x = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (wi.has(I))
      Cs(I, !1);
    else if (I instanceof Promise)
      delete x.value, x.get = () => b(I);
    else if (Xt.has(I)) {
      const [F, m] = Xt.get(
        I
      );
      x.value = s(
        F,
        m(),
        b
      );
    }
    Object.defineProperty(_, D, x);
  }), Object.preventExtensions(_);
}, u = /* @__PURE__ */ new WeakMap(), c = [1, 1], l = (h) => {
  if (!Zi(h))
    throw new Error("object required");
  const p = u.get(h);
  if (p)
    return p;
  let b = c[0];
  const w = /* @__PURE__ */ new Set(), _ = (T, R = ++c[0]) => {
    b !== R && (b = R, w.forEach((U) => U(T, R)));
  };
  let D = c[1];
  const I = (T = ++c[1]) => (D !== T && !w.size && (D = T, F.forEach(([R]) => {
    const U = R[1](T);
    U > b && (b = U);
  })), b), x = (T) => (R, U) => {
    const B = [...R];
    B[1] = [T, ...B[1]], _(B, U);
  }, F = /* @__PURE__ */ new Map(), m = (T, R) => {
    if (w.size) {
      const U = R[3](x(T));
      F.set(T, [R, U]);
    } else
      F.set(T, [R]);
  }, S = (T) => {
    var R;
    const U = F.get(T);
    U && (F.delete(T), (R = U[1]) == null || R.call(U));
  }, y = (T) => (w.add(T), w.size === 1 && F.forEach(([U, B], k) => {
    const O = U[3](x(k));
    F.set(k, [U, O]);
  }), () => {
    w.delete(T), w.size === 0 && F.forEach(([U, B], k) => {
      B && (B(), F.set(k, [U]));
    });
  }), v = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = e(v, {
    deleteProperty(T, R) {
      const U = Reflect.get(T, R);
      S(R);
      const B = Reflect.deleteProperty(T, R);
      return B && _(["delete", [R], U]), B;
    },
    set(T, R, U, B) {
      const k = Reflect.has(T, R), O = Reflect.get(T, R, B);
      if (k && (t(O, U) || u.has(U) && t(O, u.get(U))))
        return !0;
      S(R), Zi(U) && (U = nl(U) || U);
      let P = U;
      if (U instanceof Promise)
        U.then((V) => {
          U.status = "fulfilled", U.value = V, _(["resolve", [R], V]);
        }).catch((V) => {
          U.status = "rejected", U.reason = V, _(["reject", [R], V]);
        });
      else {
        !Xt.has(U) && r(U) && (P = l(U));
        const V = !wi.has(P) && Xt.get(P);
        V && m(R, V);
      }
      return Reflect.set(T, R, P, B), _(["set", [R], U, O]), !0;
    }
  });
  u.set(h, o);
  const d = [
    v,
    I,
    s,
    y
  ];
  return Xt.set(o, d), Reflect.ownKeys(h).forEach((T) => {
    const R = Object.getOwnPropertyDescriptor(
      h,
      T
    );
    "value" in R && (o[T] = h[T], delete R.value, delete R.writable), Object.defineProperty(v, T, R);
  }), o;
}) => [
  // public functions
  l,
  // shared state
  Xt,
  wi,
  // internal things
  t,
  e,
  r,
  i,
  n,
  s,
  u,
  c
], [ol] = sl();
function tr(t = {}) {
  return ol(t);
}
function br(t, e, r) {
  const i = Xt.get(t);
  let n;
  const s = [], u = i[3];
  let c = !1;
  const h = u((p) => {
    if (s.push(p), r) {
      e(s.splice(0));
      return;
    }
    n || (n = Promise.resolve().then(() => {
      n = void 0, c && e(s.splice(0));
    }));
  });
  return c = !0, () => {
    c = !1, h();
  };
}
function al(t, e) {
  const r = Xt.get(t), [i, n, s] = r;
  return s(i, n(), e);
}
const Ze = tr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Sa = { state: Ze, subscribe(t) {
  return br(Ze, () => t(Ze));
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
} }, lt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return lt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return lt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (lt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let i = t;
  i.includes("://") || (i = t.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(e);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(t, e, r) {
  if (!lt.isHttpUrl(t))
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
    localStorage.setItem(lt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(lt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(lt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(lt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Sa.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, cl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), ot = tr({ enabled: cl, userSessionId: "", events: [], connectedWalletId: void 0 }), ul = { state: ot, subscribe(t) {
  return br(ot.events, () => t(al(ot.events[ot.events.length - 1])));
}, initialize() {
  ot.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (ot.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  ot.connectedWalletId = t;
}, click(t) {
  if (ot.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
}, track(t) {
  if (ot.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
}, view(t) {
  if (ot.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
} }, Ft = tr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Pt = { state: Ft, subscribe(t) {
  return br(Ft, () => t(Ft));
}, setChains(t) {
  Ft.chains = t;
}, setWalletConnectUri(t) {
  Ft.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Ft.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Ft.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Ft.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Ft.isUiLoaded = t;
}, setIsAuth(t) {
  Ft.isAuth = t;
} }, _i = tr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Tr = { state: _i, subscribe(t) {
  return br(_i, () => t(_i));
}, setConfig(t) {
  var e, r;
  ul.initialize(), Pt.setChains(t.chains), Pt.setIsAuth(!!t.enableAuthMode), Pt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Pt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), lt.setModalVersionInStorage(), Object.assign(_i, t);
} };
var ll = Object.defineProperty, Ts = Object.getOwnPropertySymbols, hl = Object.prototype.hasOwnProperty, fl = Object.prototype.propertyIsEnumerable, Rs = (t, e, r) => e in t ? ll(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, dl = (t, e) => {
  for (var r in e || (e = {}))
    hl.call(e, r) && Rs(t, r, e[r]);
  if (Ts)
    for (var r of Ts(e))
      fl.call(e, r) && Rs(t, r, e[r]);
  return t;
};
const Sn = "https://explorer-api.walletconnect.com", Dn = "wcm", In = "js-2.6.2";
async function Ei(t, e) {
  const r = dl({ sdkType: Dn, sdkVersion: In }, e), i = new URL(t, Sn);
  return i.searchParams.append("projectId", Tr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const ar = { async getDesktopListings(t) {
  return Ei("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Ei("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Ei("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Ei("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Sn}/w3m/v1/getWalletImage/${t}?projectId=${Tr.state.projectId}&sdkType=${Dn}&sdkVersion=${In}`;
}, getAssetImageUrl(t) {
  return `${Sn}/w3m/v1/getAssetImage/${t}?projectId=${Tr.state.projectId}&sdkType=${Dn}&sdkVersion=${In}`;
} };
var pl = Object.defineProperty, Ns = Object.getOwnPropertySymbols, gl = Object.prototype.hasOwnProperty, yl = Object.prototype.propertyIsEnumerable, Ps = (t, e, r) => e in t ? pl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bl = (t, e) => {
  for (var r in e || (e = {}))
    gl.call(e, r) && Ps(t, r, e[r]);
  if (Ns)
    for (var r of Ns(e))
      yl.call(e, r) && Ps(t, r, e[r]);
  return t;
};
const Ls = lt.isMobile(), Mt = tr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), fb = { state: Mt, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Tr.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Mt.recomendedWallets;
  if (lt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: i } = await ar.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const c = t.indexOf(s.id), l = t.indexOf(u.id);
      return c - l;
    }), Mt.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Pt.state, n = r == null ? void 0 : r.join(","), s = lt.isArray(e), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: lt.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: c } = Ls ? await ar.getMobileListings(u) : await ar.getDesktopListings(u);
    Mt.recomendedWallets = Object.values(c);
  }
  return Mt.recomendedWallets;
}, async getWallets(t) {
  const e = bl({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Tr.state, { recomendedWallets: n } = Mt;
  if (i === "ALL")
    return Mt.wallets;
  n.length ? e.excludedIds = n.map((b) => b.id).join(",") : lt.isArray(r) && (e.excludedIds = r.join(",")), lt.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Pt.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: u } = t, { listings: c, total: l } = Ls ? await ar.getMobileListings(e) : await ar.getDesktopListings(e), h = Object.values(c), p = u ? "search" : "wallets";
  return Mt[p] = { listings: [...Mt[p].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(t) {
  return ar.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return ar.getAssetImageUrl(t);
}, resetSearch() {
  Mt.search = { listings: [], total: 0, page: 1 };
} }, Er = tr({ open: !1 }), en = { state: Er, subscribe(t) {
  return br(Er, () => t(Er));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: i } = Pt.state;
    if (lt.removeWalletConnectDeepLink(), Pt.setWalletConnectUri(t == null ? void 0 : t.uri), Pt.setChains(t == null ? void 0 : t.chains), Sa.reset("ConnectWallet"), r && i)
      Er.open = !0, e();
    else {
      const n = setInterval(() => {
        const s = Pt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), Er.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Er.open = !1;
} };
var ml = Object.defineProperty, Us = Object.getOwnPropertySymbols, vl = Object.prototype.hasOwnProperty, wl = Object.prototype.propertyIsEnumerable, Fs = (t, e, r) => e in t ? ml(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, _l = (t, e) => {
  for (var r in e || (e = {}))
    vl.call(e, r) && Fs(t, r, e[r]);
  if (Us)
    for (var r of Us(e))
      wl.call(e, r) && Fs(t, r, e[r]);
  return t;
};
function El() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const $r = tr({ themeMode: El() ? "dark" : "light" }), Ms = { state: $r, subscribe(t) {
  return br($r, () => t($r));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && ($r.themeMode = e), r && ($r.themeVariables = _l({}, r));
} }, cr = tr({ open: !1, message: "", variant: "success" }), db = { state: cr, subscribe(t) {
  return br(cr, () => t(cr));
}, openToast(t, e) {
  cr.open = !0, cr.message = t, cr.variant = e;
}, closeToast() {
  cr.open = !1;
} };
let Sl = class {
  constructor(e) {
    this.openModal = en.open, this.closeModal = en.close, this.subscribeModal = en.subscribe, this.setTheme = Ms.setThemeConfig, Ms.setThemeConfig(e), Tr.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-047f88cb.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Pt.setIsUiLoaded(!0);
    }
  }
};
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Wn(t) {
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
var kn = { exports: {} }, Ar = typeof Reflect == "object" ? Reflect : null, $s = Ar && typeof Ar.apply == "function" ? Ar.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, Oi;
Ar && typeof Ar.ownKeys == "function" ? Oi = Ar.ownKeys : Object.getOwnPropertySymbols ? Oi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Oi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Dl(t) {
  console && console.warn && console.warn(t);
}
var Da = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
kn.exports = Ie;
kn.exports.once = Al;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var js = 10;
function ji(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return js;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Da(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    js = t;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Da(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Ia(t) {
  return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return Ia(this);
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
    var c = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw c.context = u, c;
  }
  var l = s[e];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    $s(l, this, r);
  else
    for (var h = l.length, p = Ta(l, h), i = 0; i < h; ++i)
      $s(p[i], this, r);
  return !0;
};
function Oa(t, e, r, i) {
  var n, s, u;
  if (ji(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), u = s[e]), u === void 0)
    u = s[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = s[e] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = Ia(t), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = u.length, Dl(c);
  }
  return t;
}
Ie.prototype.addListener = function(e, r) {
  return Oa(this, e, r, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
  return Oa(this, e, r, !0);
};
function Il() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function xa(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, n = Il.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ie.prototype.once = function(e, r) {
  return ji(r), this.on(e, xa(this, e, r)), this;
};
Ie.prototype.prependOnceListener = function(e, r) {
  return ji(r), this.prependListener(e, xa(this, e, r)), this;
};
Ie.prototype.removeListener = function(e, r) {
  var i, n, s, u, c;
  if (ji(r), n = this._events, n === void 0)
    return this;
  if (i = n[e], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || r));
  else if (typeof i != "function") {
    for (s = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === r || i[u].listener === r) {
        c = i[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? i.shift() : Ol(i, s), i.length === 1 && (n[e] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", e, c || r);
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
function Aa(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var n = i[e];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? xl(n) : Ta(n, n.length);
}
Ie.prototype.listeners = function(e) {
  return Aa(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return Aa(this, e, !1);
};
Ie.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ca.call(t, e);
};
Ie.prototype.listenerCount = Ca;
function Ca(t) {
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
  return this._eventsCount > 0 ? Oi(this._events) : [];
};
function Ta(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function Ol(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function xl(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Al(t, e) {
  return new Promise(function(r, i) {
    function n(u) {
      t.removeListener(e, s), i(u);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", n), r([].slice.call(arguments));
    }
    Ra(t, e, s, { once: !0 }), e !== "error" && Cl(t, n, { once: !0 });
  });
}
function Cl(t, e, r) {
  typeof t.on == "function" && Ra(t, "error", e, r);
}
function Ra(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function n(s) {
      i.once && t.removeEventListener(e, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Lt = kn.exports;
const Na = /* @__PURE__ */ Vn(Lt);
var qi = {};
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
var On = function(t, e) {
  return On = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, On(t, e);
};
function Tl(t, e) {
  On(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var xn = function() {
  return xn = Object.assign || function(e) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, xn.apply(this, arguments);
};
function Rl(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)
      e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
  return r;
}
function Nl(t, e, r, i) {
  var n = arguments.length, s = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, i);
  else
    for (var c = t.length - 1; c >= 0; c--)
      (u = t[c]) && (s = (n < 3 ? u(s) : n > 3 ? u(e, r, s) : u(e, r)) || s);
  return n > 3 && s && Object.defineProperty(e, r, s), s;
}
function Pl(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function Ll(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Ul(t, e, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function c(p) {
      try {
        h(i.next(p));
      } catch (b) {
        u(b);
      }
    }
    function l(p) {
      try {
        h(i.throw(p));
      } catch (b) {
        u(b);
      }
    }
    function h(p) {
      p.done ? s(p.value) : n(p.value).then(c, l);
    }
    h((i = i.apply(t, e || [])).next());
  });
}
function Fl(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, n, s, u;
  return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function c(h) {
    return function(p) {
      return l([h, p]);
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
      } catch (p) {
        h = [6, p], n = 0;
      } finally {
        i = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function Ml(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function $l(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function An(t) {
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
function Pa(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var i = r.call(t), n, s = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; )
      s.push(n.value);
  } catch (c) {
    u = { error: c };
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
function jl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Pa(arguments[e]));
  return t;
}
function ql() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), n = 0, e = 0; e < r; e++)
    for (var s = arguments[e], u = 0, c = s.length; u < c; u++, n++)
      i[n] = s[u];
  return i;
}
function ei(t) {
  return this instanceof ei ? (this.v = t, this) : new ei(t);
}
function zl(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(w) {
    i[w] && (n[w] = function(_) {
      return new Promise(function(D, I) {
        s.push([w, _, D, I]) > 1 || c(w, _);
      });
    });
  }
  function c(w, _) {
    try {
      l(i[w](_));
    } catch (D) {
      b(s[0][3], D);
    }
  }
  function l(w) {
    w.value instanceof ei ? Promise.resolve(w.value.v).then(h, p) : b(s[0][2], w);
  }
  function h(w) {
    c("next", w);
  }
  function p(w) {
    c("throw", w);
  }
  function b(w, _) {
    w(_), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function Bl(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(n, s) {
    e[n] = t[n] ? function(u) {
      return (r = !r) ? { value: ei(t[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Kl(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof An == "function" ? An(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(s) {
    r[s] = t[s] && function(u) {
      return new Promise(function(c, l) {
        u = t[s](u), n(c, l, u.done, u.value);
      });
    };
  }
  function n(s, u, c, l) {
    Promise.resolve(l).then(function(h) {
      s({ value: h, done: c });
    }, u);
  }
}
function Hl(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Vl(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Wl(t) {
  return t && t.__esModule ? t : { default: t };
}
function kl(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Gl(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return xn;
  },
  __asyncDelegator: Bl,
  __asyncGenerator: zl,
  __asyncValues: Kl,
  __await: ei,
  __awaiter: Ul,
  __classPrivateFieldGet: kl,
  __classPrivateFieldSet: Gl,
  __createBinding: Ml,
  __decorate: Nl,
  __exportStar: $l,
  __extends: Tl,
  __generator: Fl,
  __importDefault: Wl,
  __importStar: Vl,
  __makeTemplateObject: Hl,
  __metadata: Ll,
  __param: Pl,
  __read: Pa,
  __rest: Rl,
  __spread: jl,
  __spreadArrays: ql,
  __values: An
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ Wn(Yl);
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
function Jl(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
si.safeJsonParse = Jl;
function Ql(t) {
  return typeof t == "string" ? t : JSON.stringify(t, (e, r) => typeof r > "u" ? null : r);
}
si.safeJsonStringify = Ql;
var jr = { exports: {} }, qs;
function Xl() {
  return qs || (qs = 1, function() {
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
    }), typeof Et < "u" && Et.localStorage ? jr.exports = Et.localStorage : typeof window < "u" && window.localStorage ? jr.exports = window.localStorage : jr.exports = new e();
  }()), jr.exports;
}
var tn = {}, qr = {}, zs;
function Zl() {
  if (zs)
    return qr;
  zs = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.IKeyValueStorage = void 0;
  class t {
  }
  return qr.IKeyValueStorage = t, qr;
}
var zr = {}, Bs;
function eh() {
  if (Bs)
    return zr;
  Bs = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.parseEntry = void 0;
  const t = si;
  function e(r) {
    var i;
    return [r[0], t.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return zr.parseEntry = e, zr;
}
var Ks;
function th() {
  return Ks || (Ks = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(Zl(), t), e.__exportStar(eh(), t);
  }(tn)), tn;
}
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.KeyValueStorage = void 0;
const Dr = At, Hs = si, rh = Dr.__importDefault(Xl()), ih = th();
class La {
  constructor() {
    this.localStorage = rh.default;
  }
  getKeys() {
    return Dr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Dr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(ih.parseEntry);
    });
  }
  getItem(e) {
    return Dr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(e);
      if (r !== null)
        return Hs.safeJsonParse(r);
    });
  }
  setItem(e, r) {
    return Dr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, Hs.safeJsonStringify(r));
    });
  }
  removeItem(e) {
    return Dr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
qi.KeyValueStorage = La;
var nh = qi.default = La, Rr = {}, Br = {}, X = {}, rn = {}, Kr = {}, Vs;
function sh() {
  if (Vs)
    return Kr;
  Vs = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Kr.delay = t, Kr;
}
var ur = {}, nn = {}, lr = {}, Ws;
function oh() {
  return Ws || (Ws = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.ONE_THOUSAND = lr.ONE_HUNDRED = void 0, lr.ONE_HUNDRED = 100, lr.ONE_THOUSAND = 1e3), lr;
}
var sn = {}, ks;
function ah() {
  return ks || (ks = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(sn)), sn;
}
var Gs;
function Ua() {
  return Gs || (Gs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(oh(), t), e.__exportStar(ah(), t);
  }(nn)), nn;
}
var Ys;
function ch() {
  if (Ys)
    return ur;
  Ys = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.fromMiliseconds = ur.toMiliseconds = void 0;
  const t = Ua();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  ur.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return ur.fromMiliseconds = r, ur;
}
var Js;
function uh() {
  return Js || (Js = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(sh(), t), e.__exportStar(ch(), t);
  }(rn)), rn;
}
var Sr = {}, Qs;
function lh() {
  if (Qs)
    return Sr;
  Qs = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.Watch = void 0;
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
  return Sr.Watch = t, Sr.default = t, Sr;
}
var on = {}, Hr = {}, Xs;
function hh() {
  if (Xs)
    return Hr;
  Xs = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.IWatch = void 0;
  class t {
  }
  return Hr.IWatch = t, Hr;
}
var Zs;
function fh() {
  return Zs || (Zs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(hh(), t);
  }(on)), on;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(uh(), t), e.__exportStar(lh(), t), e.__exportStar(fh(), t), e.__exportStar(Ua(), t);
})(X);
var an = {}, Vr = {};
let mr = class {
};
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: mr
}, Symbol.toStringTag, { value: "Module" })), ph = /* @__PURE__ */ Wn(dh);
var eo;
function gh() {
  if (eo)
    return Vr;
  eo = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.IHeartBeat = void 0;
  const t = ph;
  class e extends t.IEvents {
    constructor(i) {
      super();
    }
  }
  return Vr.IHeartBeat = e, Vr;
}
var to;
function Fa() {
  return to || (to = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(gh(), t);
  }(an)), an;
}
var cn = {}, hr = {}, ro;
function yh() {
  if (ro)
    return hr;
  ro = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.HEARTBEAT_EVENTS = hr.HEARTBEAT_INTERVAL = void 0;
  const t = X;
  return hr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, hr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, hr;
}
var io;
function Ma() {
  return io || (io = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(yh(), t);
  }(cn)), cn;
}
var no;
function bh() {
  if (no)
    return Br;
  no = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.HeartBeat = void 0;
  const t = At, e = Lt, r = X, i = Fa(), n = Ma();
  class s extends i.IHeartBeat {
    constructor(c) {
      super(c), this.events = new e.EventEmitter(), this.interval = n.HEARTBEAT_INTERVAL, this.interval = (c == null ? void 0 : c.interval) || n.HEARTBEAT_INTERVAL;
    }
    static init(c) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const l = new s(c);
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
    on(c, l) {
      this.events.on(c, l);
    }
    once(c, l) {
      this.events.once(c, l);
    }
    off(c, l) {
      this.events.off(c, l);
    }
    removeListener(c, l) {
      this.events.removeListener(c, l);
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
  return Br.HeartBeat = s, Br;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(bh(), t), e.__exportStar(Fa(), t), e.__exportStar(Ma(), t);
})(Rr);
var ve = {}, un, so;
function mh() {
  if (so)
    return un;
  so = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  un = e;
  function e(r, i, n) {
    var s = n && n.stringify || t, u = 1;
    if (typeof r == "object" && r !== null) {
      var c = i.length + u;
      if (c === 1)
        return r;
      var l = new Array(c);
      l[0] = s(r);
      for (var h = 1; h < c; h++)
        l[h] = s(i[h]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var p = i.length;
    if (p === 0)
      return r;
    for (var b = "", w = 1 - u, _ = -1, D = r && r.length || 0, I = 0; I < D; ) {
      if (r.charCodeAt(I) === 37 && I + 1 < D) {
        switch (_ = _ > -1 ? _ : 0, r.charCodeAt(I + 1)) {
          case 100:
          case 102:
            if (w >= p || i[w] == null)
              break;
            _ < I && (b += r.slice(_, I)), b += Number(i[w]), _ = I + 2, I++;
            break;
          case 105:
            if (w >= p || i[w] == null)
              break;
            _ < I && (b += r.slice(_, I)), b += Math.floor(Number(i[w])), _ = I + 2, I++;
            break;
          case 79:
          case 111:
          case 106:
            if (w >= p || i[w] === void 0)
              break;
            _ < I && (b += r.slice(_, I));
            var x = typeof i[w];
            if (x === "string") {
              b += "'" + i[w] + "'", _ = I + 2, I++;
              break;
            }
            if (x === "function") {
              b += i[w].name || "<anonymous>", _ = I + 2, I++;
              break;
            }
            b += s(i[w]), _ = I + 2, I++;
            break;
          case 115:
            if (w >= p)
              break;
            _ < I && (b += r.slice(_, I)), b += String(i[w]), _ = I + 2, I++;
            break;
          case 37:
            _ < I && (b += r.slice(_, I)), b += "%", _ = I + 2, I++, w--;
            break;
        }
        ++w;
      }
      ++I;
    }
    return _ === -1 ? r : (_ < D && (b += r.slice(_)), b);
  }
  return un;
}
var ln, oo;
function vh() {
  if (oo)
    return ln;
  oo = 1;
  const t = mh();
  ln = n;
  const e = v().console || {}, r = {
    mapHttpRequest: D,
    mapHttpResponse: D,
    wrapRequestSerializer: I,
    wrapResponseSerializer: I,
    wrapErrorSerializer: I,
    req: D,
    res: D,
    err: w
  };
  function i(f, o) {
    return Array.isArray(f) ? f.filter(function(T) {
      return T !== "!stdSerializers.err";
    }) : f === !0 ? Object.keys(o) : !1;
  }
  function n(f) {
    f = f || {}, f.browser = f.browser || {};
    const o = f.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const d = f.browser.write || e;
    f.browser.write && (f.browser.asObject = !0);
    const T = f.serializers || {}, R = i(f.browser.serialize, T);
    let U = f.browser.serialize;
    Array.isArray(f.browser.serialize) && f.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof d == "function" && (d.error = d.fatal = d.warn = d.info = d.debug = d.trace = d), f.enabled === !1 && (f.level = "silent");
    const k = f.level || "info", O = Object.create(d);
    O.log || (O.log = x), Object.defineProperty(O, "levelVal", {
      get: V
    }), Object.defineProperty(O, "level", {
      get: z,
      set: $
    });
    const P = {
      transmit: o,
      serialize: R,
      asObject: f.browser.asObject,
      levels: B,
      timestamp: _(f)
    };
    O.levels = n.levels, O.level = k, O.setMaxListeners = O.getMaxListeners = O.emit = O.addListener = O.on = O.prependListener = O.once = O.prependOnceListener = O.removeListener = O.removeAllListeners = O.listeners = O.listenerCount = O.eventNames = O.write = O.flush = x, O.serializers = T, O._serialize = R, O._stdErrSerialize = U, O.child = q, o && (O._logEvent = b());
    function V() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function $(M) {
      if (M !== "silent" && !this.levels.values[M])
        throw Error("unknown level " + M);
      this._level = M, s(P, O, "error", "log"), s(P, O, "fatal", "error"), s(P, O, "warn", "error"), s(P, O, "info", "log"), s(P, O, "debug", "log"), s(P, O, "trace", "log");
    }
    function q(M, K) {
      if (!M)
        throw new Error("missing bindings for child Pino");
      K = K || {}, R && M.serializers && (K.serializers = M.serializers);
      const te = K.serializers;
      if (R && te) {
        var H = Object.assign({}, T, te), Z = f.browser.serialize === !0 ? Object.keys(H) : R;
        delete M.serializers, l([M], Z, H, this._stdErrSerialize);
      }
      function J(ee) {
        this._childLevel = (ee._childLevel | 0) + 1, this.error = h(ee, M, "error"), this.fatal = h(ee, M, "fatal"), this.warn = h(ee, M, "warn"), this.info = h(ee, M, "info"), this.debug = h(ee, M, "debug"), this.trace = h(ee, M, "trace"), H && (this.serializers = H, this._serialize = Z), o && (this._logEvent = b(
          [].concat(ee._logEvent.bindings, M)
        ));
      }
      return J.prototype = this, new J(this);
    }
    return O;
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: F, epochTime: m, unixTime: S, isoTime: y });
  function s(f, o, d, T) {
    const R = Object.getPrototypeOf(o);
    o[d] = o.levelVal > o.levels.values[d] ? x : R[d] ? R[d] : e[d] || e[T] || x, u(f, o, d);
  }
  function u(f, o, d) {
    !f.transmit && o[d] === x || (o[d] = function(T) {
      return function() {
        const U = f.timestamp(), B = new Array(arguments.length), k = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var O = 0; O < B.length; O++)
          B[O] = arguments[O];
        if (f.serialize && !f.asObject && l(B, this._serialize, this.serializers, this._stdErrSerialize), f.asObject ? T.call(k, c(this, d, B, U)) : T.apply(k, B), f.transmit) {
          const P = f.transmit.level || o.level, V = n.levels.values[P], z = n.levels.values[d];
          if (z < V)
            return;
          p(this, {
            ts: U,
            methodLevel: d,
            methodValue: z,
            transmitLevel: P,
            transmitValue: n.levels.values[f.transmit.level || o.level],
            send: f.transmit.send,
            val: o.levelVal
          }, B);
        }
      };
    }(o[d]));
  }
  function c(f, o, d, T) {
    f._serialize && l(d, f._serialize, f.serializers, f._stdErrSerialize);
    const R = d.slice();
    let U = R[0];
    const B = {};
    T && (B.time = T), B.level = n.levels.values[o];
    let k = (f._childLevel | 0) + 1;
    if (k < 1 && (k = 1), U !== null && typeof U == "object") {
      for (; k-- && typeof R[0] == "object"; )
        Object.assign(B, R.shift());
      U = R.length ? t(R.shift(), R) : void 0;
    } else
      typeof U == "string" && (U = t(R.shift(), R));
    return U !== void 0 && (B.msg = U), B;
  }
  function l(f, o, d, T) {
    for (const R in f)
      if (T && f[R] instanceof Error)
        f[R] = n.stdSerializers.err(f[R]);
      else if (typeof f[R] == "object" && !Array.isArray(f[R]))
        for (const U in f[R])
          o && o.indexOf(U) > -1 && U in d && (f[R][U] = d[U](f[R][U]));
  }
  function h(f, o, d) {
    return function() {
      const T = new Array(1 + arguments.length);
      T[0] = o;
      for (var R = 1; R < T.length; R++)
        T[R] = arguments[R - 1];
      return f[d].apply(this, T);
    };
  }
  function p(f, o, d) {
    const T = o.send, R = o.ts, U = o.methodLevel, B = o.methodValue, k = o.val, O = f._logEvent.bindings;
    l(
      d,
      f._serialize || Object.keys(f.serializers),
      f.serializers,
      f._stdErrSerialize === void 0 ? !0 : f._stdErrSerialize
    ), f._logEvent.ts = R, f._logEvent.messages = d.filter(function(P) {
      return O.indexOf(P) === -1;
    }), f._logEvent.level.label = U, f._logEvent.level.value = B, T(U, f._logEvent, k), f._logEvent = b(O);
  }
  function b(f) {
    return {
      ts: 0,
      messages: [],
      bindings: f || [],
      level: { label: "", value: 0 }
    };
  }
  function w(f) {
    const o = {
      type: f.constructor.name,
      msg: f.message,
      stack: f.stack
    };
    for (const d in f)
      o[d] === void 0 && (o[d] = f[d]);
    return o;
  }
  function _(f) {
    return typeof f.timestamp == "function" ? f.timestamp : f.timestamp === !1 ? F : m;
  }
  function D() {
    return {};
  }
  function I(f) {
    return f;
  }
  function x() {
  }
  function F() {
    return !1;
  }
  function m() {
    return Date.now();
  }
  function S() {
    return Math.round(Date.now() / 1e3);
  }
  function y() {
    return new Date(Date.now()).toISOString();
  }
  function v() {
    function f(o) {
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
      return f(self) || f(window) || f(this) || {};
    }
  }
  return ln;
}
var fr = {}, ao;
function $a() {
  return ao || (ao = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.PINO_CUSTOM_CONTEXT_KEY = fr.PINO_LOGGER_DEFAULTS = void 0, fr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, fr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), fr;
}
var ft = {}, co;
function wh() {
  if (co)
    return ft;
  co = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.generateChildLogger = ft.formatChildLoggerContext = ft.getLoggerContext = ft.setBrowserLoggerContext = ft.getBrowserLoggerContext = ft.getDefaultLoggerOptions = void 0;
  const t = $a();
  function e(c) {
    return Object.assign(Object.assign({}, c), { level: (c == null ? void 0 : c.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  ft.getDefaultLoggerOptions = e;
  function r(c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return c[l] || "";
  }
  ft.getBrowserLoggerContext = r;
  function i(c, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return c[h] = l, c;
  }
  ft.setBrowserLoggerContext = i;
  function n(c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof c.bindings > "u" ? h = r(c, l) : h = c.bindings().context || "", h;
  }
  ft.getLoggerContext = n;
  function s(c, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const p = n(c, h);
    return p.trim() ? `${p}/${l}` : l;
  }
  ft.formatChildLoggerContext = s;
  function u(c, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const p = s(c, l, h), b = c.child({ context: p });
    return i(b, p, h);
  }
  return ft.generateChildLogger = u, ft;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = At, r = e.__importDefault(vh());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar($a(), t), e.__exportStar(wh(), t);
})(ve);
let _h = class extends mr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Eh = class extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Sh = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Dh = class extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Ih = class extends mr {
  constructor(e) {
    super();
  }
}, Oh = class {
  constructor(e, r, i, n) {
    this.core = e, this.logger = r, this.name = i;
  }
};
class xh extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let Ah = class extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Ch = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Th = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Rh = class {
  constructor(e) {
    this.client = e;
  }
};
const Nh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Ph = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function ja(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Ph(t);
  } catch {
    return t;
  }
}
function Gn(t) {
  return typeof t == "string" ? t : Nh(t) || "";
}
var Yn = {}, Nr = {}, zi = {}, Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.BrowserRandomSource = void 0;
const uo = 65536;
class Lh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let i = 0; i < r.length; i += uo)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, uo)));
    return r;
  }
}
Bi.BrowserRandomSource = Lh;
function Uh(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ki = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
function Fh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Dt.wipe = Fh;
const Mh = {}, $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mh
}, Symbol.toStringTag, { value: "Module" })), jh = /* @__PURE__ */ Wn($h);
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.NodeRandomSource = void 0;
const qh = Dt;
class zh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Uh < "u") {
      const e = jh;
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
    return (0, qh.wipe)(r), i;
  }
}
Ki.NodeRandomSource = zh;
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.SystemRandomSource = void 0;
const Bh = Bi, Kh = Ki;
class Hh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Bh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Kh.NodeRandomSource(), this._source.isAvailable) {
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
zi.SystemRandomSource = Hh;
var ne = {}, qa = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(c, l) {
    var h = c >>> 16 & 65535, p = c & 65535, b = l >>> 16 & 65535, w = l & 65535;
    return p * w + (h * w + p * b << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(c, l) {
    return c + l | 0;
  }
  t.add = r;
  function i(c, l) {
    return c - l | 0;
  }
  t.sub = i;
  function n(c, l) {
    return c << l | c >>> 32 - l;
  }
  t.rotl = n;
  function s(c, l) {
    return c << 32 - l | c >>> l;
  }
  t.rotr = s;
  function u(c) {
    return typeof c == "number" && isFinite(c) && Math.floor(c) === c;
  }
  t.isInteger = Number.isInteger || u, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(c) {
    return t.isInteger(c) && c >= -t.MAX_SAFE_INTEGER && c <= t.MAX_SAFE_INTEGER;
  };
})(qa);
Object.defineProperty(ne, "__esModule", { value: !0 });
var za = qa;
function Vh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
ne.readInt16BE = Vh;
function Wh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
ne.readUint16BE = Wh;
function kh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
ne.readInt16LE = kh;
function Gh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint16LE = Gh;
function Ba(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
ne.writeUint16BE = Ba;
ne.writeInt16BE = Ba;
function Ka(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
ne.writeUint16LE = Ka;
ne.writeInt16LE = Ka;
function Cn(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
ne.readInt32BE = Cn;
function Tn(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
ne.readUint32BE = Tn;
function Rn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
ne.readInt32LE = Rn;
function Nn(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint32LE = Nn;
function Ti(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
ne.writeUint32BE = Ti;
ne.writeInt32BE = Ti;
function Ri(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
ne.writeUint32LE = Ri;
ne.writeInt32LE = Ri;
function Yh(t, e) {
  e === void 0 && (e = 0);
  var r = Cn(t, e), i = Cn(t, e + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
ne.readInt64BE = Yh;
function Jh(t, e) {
  e === void 0 && (e = 0);
  var r = Tn(t, e), i = Tn(t, e + 4);
  return r * 4294967296 + i;
}
ne.readUint64BE = Jh;
function Qh(t, e) {
  e === void 0 && (e = 0);
  var r = Rn(t, e), i = Rn(t, e + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
ne.readInt64LE = Qh;
function Xh(t, e) {
  e === void 0 && (e = 0);
  var r = Nn(t, e), i = Nn(t, e + 4);
  return i * 4294967296 + r;
}
ne.readUint64LE = Xh;
function Ha(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ti(t / 4294967296 >>> 0, e, r), Ti(t >>> 0, e, r + 4), e;
}
ne.writeUint64BE = Ha;
ne.writeInt64BE = Ha;
function Va(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ri(t >>> 0, e, r), Ri(t / 4294967296 >>> 0, e, r + 4), e;
}
ne.writeUint64LE = Va;
ne.writeInt64LE = Va;
function Zh(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = t / 8 + r - 1; s >= r; s--)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintBE = Zh;
function ef(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + t / 8; s++)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintLE = ef;
function tf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!za.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = t / 8 + i - 1; s >= i; s--)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintBE = tf;
function rf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!za.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + t / 8; s++)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintLE = rf;
function nf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
ne.readFloat32BE = nf;
function sf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
ne.readFloat32LE = sf;
function of(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
ne.readFloat64BE = of;
function af(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
ne.readFloat64LE = af;
function cf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t), e;
}
ne.writeFloat32BE = cf;
function uf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t, !0), e;
}
ne.writeFloat32LE = uf;
function lf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t), e;
}
ne.writeFloat64BE = lf;
function hf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t, !0), e;
}
ne.writeFloat64LE = hf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = zi, r = ne, i = Dt;
  t.defaultRandomSource = new e.SystemRandomSource();
  function n(h, p = t.defaultRandomSource) {
    return p.randomBytes(h);
  }
  t.randomBytes = n;
  function s(h = t.defaultRandomSource) {
    const p = n(4, h), b = (0, r.readUint32LE)(p);
    return (0, i.wipe)(p), b;
  }
  t.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function c(h, p = u, b = t.defaultRandomSource) {
    if (p.length < 2)
      throw new Error("randomString charset is too short");
    if (p.length > 256)
      throw new Error("randomString charset is too long");
    let w = "";
    const _ = p.length, D = 256 - 256 % _;
    for (; h > 0; ) {
      const I = n(Math.ceil(h * 256 / D), b);
      for (let x = 0; x < I.length && h > 0; x++) {
        const F = I[x];
        F < D && (w += p.charAt(F % _), h--);
      }
      (0, i.wipe)(I);
    }
    return w;
  }
  t.randomString = c;
  function l(h, p = u, b = t.defaultRandomSource) {
    const w = Math.ceil(h / (Math.log(p.length) / Math.LN2));
    return c(w, p, b);
  }
  t.randomStringForEntropy = l;
})(Nr);
var Wa = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ne, r = Dt;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var i = (
    /** @class */
    function() {
      function c() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return c.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, c.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, c.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, c.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = l[p++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (p = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, p, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[p++], h--;
        return this;
      }, c.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, p = this._bufferLength, b = h / 536870912 | 0, w = h << 3, _ = h % 128 < 112 ? 128 : 256;
          this._buffer[p] = 128;
          for (var D = p + 1; D < _ - 8; D++)
            this._buffer[D] = 0;
          e.writeUint32BE(b, this._buffer, _ - 8), e.writeUint32BE(w, this._buffer, _ - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, _), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 8; D++)
          e.writeUint32BE(this._stateHi[D], l, D * 8), e.writeUint32BE(this._stateLo[D], l, D * 8 + 4);
        return this;
      }, c.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, c.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, c.prototype.restoreState = function(l) {
        return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, c.prototype.cleanSavedState = function(l) {
        r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, c;
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
  function s(c, l, h, p, b, w, _) {
    for (var D = h[0], I = h[1], x = h[2], F = h[3], m = h[4], S = h[5], y = h[6], v = h[7], f = p[0], o = p[1], d = p[2], T = p[3], R = p[4], U = p[5], B = p[6], k = p[7], O, P, V, z, $, q, M, K; _ >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var H = 8 * te + w;
        c[te] = e.readUint32BE(b, H), l[te] = e.readUint32BE(b, H + 4);
      }
      for (var te = 0; te < 80; te++) {
        var Z = D, J = I, ee = x, L = F, N = m, A = S, a = y, E = v, W = f, Y = o, he = d, be = T, de = R, _e = U, Fe = B, Re = k;
        if (O = v, P = k, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = (m >>> 14 | R << 32 - 14) ^ (m >>> 18 | R << 32 - 18) ^ (R >>> 41 - 32 | m << 32 - (41 - 32)), P = (R >>> 14 | m << 32 - 14) ^ (R >>> 18 | m << 32 - 18) ^ (m >>> 41 - 32 | R << 32 - (41 - 32)), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = m & S ^ ~m & y, P = R & U ^ ~R & B, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = n[te * 2], P = n[te * 2 + 1], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = c[te % 16], P = l[te % 16], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, V = M & 65535 | K << 16, z = $ & 65535 | q << 16, O = V, P = z, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = (D >>> 28 | f << 32 - 28) ^ (f >>> 34 - 32 | D << 32 - (34 - 32)) ^ (f >>> 39 - 32 | D << 32 - (39 - 32)), P = (f >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | f << 32 - (34 - 32)) ^ (D >>> 39 - 32 | f << 32 - (39 - 32)), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = D & I ^ D & x ^ I & x, P = f & o ^ f & d ^ o & d, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, E = M & 65535 | K << 16, Re = $ & 65535 | q << 16, O = L, P = be, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = V, P = z, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, L = M & 65535 | K << 16, be = $ & 65535 | q << 16, I = Z, x = J, F = ee, m = L, S = N, y = A, v = a, D = E, o = W, d = Y, T = he, R = be, U = de, B = _e, k = Fe, f = Re, te % 16 === 15)
          for (var H = 0; H < 16; H++)
            O = c[H], P = l[H], $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = c[(H + 9) % 16], P = l[(H + 9) % 16], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, V = c[(H + 1) % 16], z = l[(H + 1) % 16], O = (V >>> 1 | z << 32 - 1) ^ (V >>> 8 | z << 32 - 8) ^ V >>> 7, P = (z >>> 1 | V << 32 - 1) ^ (z >>> 8 | V << 32 - 8) ^ (z >>> 7 | V << 32 - 7), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, V = c[(H + 14) % 16], z = l[(H + 14) % 16], O = (V >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | V << 32 - (61 - 32)) ^ V >>> 6, P = (z >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | V << 32 - 6), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, c[H] = M & 65535 | K << 16, l[H] = $ & 65535 | q << 16;
      }
      O = D, P = f, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[0], P = p[0], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[0] = D = M & 65535 | K << 16, p[0] = f = $ & 65535 | q << 16, O = I, P = o, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[1], P = p[1], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[1] = I = M & 65535 | K << 16, p[1] = o = $ & 65535 | q << 16, O = x, P = d, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[2], P = p[2], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[2] = x = M & 65535 | K << 16, p[2] = d = $ & 65535 | q << 16, O = F, P = T, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[3], P = p[3], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[3] = F = M & 65535 | K << 16, p[3] = T = $ & 65535 | q << 16, O = m, P = R, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[4], P = p[4], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[4] = m = M & 65535 | K << 16, p[4] = R = $ & 65535 | q << 16, O = S, P = U, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[5], P = p[5], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[5] = S = M & 65535 | K << 16, p[5] = U = $ & 65535 | q << 16, O = y, P = B, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[6], P = p[6], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[6] = y = M & 65535 | K << 16, p[6] = B = $ & 65535 | q << 16, O = v, P = k, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = h[7], P = p[7], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[7] = v = M & 65535 | K << 16, p[7] = k = $ & 65535 | q << 16, w += 128, _ -= 128;
    }
    return w;
  }
  function u(c) {
    var l = new i();
    l.update(c);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(Wa);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Nr, r = Wa, i = Dt;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function n(L) {
    const N = new Float64Array(16);
    if (L)
      for (let A = 0; A < L.length; A++)
        N[A] = L[A];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = n(), c = n([1]), l = n([
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
  ]), p = n([
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
  ]), b = n([
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
  ]), w = n([
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
  function _(L, N) {
    for (let A = 0; A < 16; A++)
      L[A] = N[A] | 0;
  }
  function D(L) {
    let N = 1;
    for (let A = 0; A < 16; A++) {
      let a = L[A] + N + 65535;
      N = Math.floor(a / 65536), L[A] = a - N * 65536;
    }
    L[0] += N - 1 + 37 * (N - 1);
  }
  function I(L, N, A) {
    const a = ~(A - 1);
    for (let E = 0; E < 16; E++) {
      const W = a & (L[E] ^ N[E]);
      L[E] ^= W, N[E] ^= W;
    }
  }
  function x(L, N) {
    const A = n(), a = n();
    for (let E = 0; E < 16; E++)
      a[E] = N[E];
    D(a), D(a), D(a);
    for (let E = 0; E < 2; E++) {
      A[0] = a[0] - 65517;
      for (let Y = 1; Y < 15; Y++)
        A[Y] = a[Y] - 65535 - (A[Y - 1] >> 16 & 1), A[Y - 1] &= 65535;
      A[15] = a[15] - 32767 - (A[14] >> 16 & 1);
      const W = A[15] >> 16 & 1;
      A[14] &= 65535, I(a, A, 1 - W);
    }
    for (let E = 0; E < 16; E++)
      L[2 * E] = a[E] & 255, L[2 * E + 1] = a[E] >> 8;
  }
  function F(L, N) {
    let A = 0;
    for (let a = 0; a < 32; a++)
      A |= L[a] ^ N[a];
    return (1 & A - 1 >>> 8) - 1;
  }
  function m(L, N) {
    const A = new Uint8Array(32), a = new Uint8Array(32);
    return x(A, L), x(a, N), F(A, a);
  }
  function S(L) {
    const N = new Uint8Array(32);
    return x(N, L), N[0] & 1;
  }
  function y(L, N) {
    for (let A = 0; A < 16; A++)
      L[A] = N[2 * A] + (N[2 * A + 1] << 8);
    L[15] &= 32767;
  }
  function v(L, N, A) {
    for (let a = 0; a < 16; a++)
      L[a] = N[a] + A[a];
  }
  function f(L, N, A) {
    for (let a = 0; a < 16; a++)
      L[a] = N[a] - A[a];
  }
  function o(L, N, A) {
    let a, E, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Fe = 0, Re = 0, ye = 0, pe = 0, fe = 0, ue = 0, ce = 0, ae = 0, oe = 0, re = 0, le = 0, ge = 0, ie = 0, me = 0, we = 0, Se = 0, De = 0, Ee = 0, Ct = 0, Ut = 0, Gt = 0, wt = 0, ir = 0, Ur = 0, di = 0, Me = A[0], Ne = A[1], $e = A[2], je = A[3], qe = A[4], Pe = A[5], Ve = A[6], We = A[7], ke = A[8], Ge = A[9], Ye = A[10], Ke = A[11], ze = A[12], Ae = A[13], Je = A[14], Qe = A[15];
    a = N[0], W += a * Me, Y += a * Ne, he += a * $e, be += a * je, de += a * qe, _e += a * Pe, Fe += a * Ve, Re += a * We, ye += a * ke, pe += a * Ge, fe += a * Ye, ue += a * Ke, ce += a * ze, ae += a * Ae, oe += a * Je, re += a * Qe, a = N[1], Y += a * Me, he += a * Ne, be += a * $e, de += a * je, _e += a * qe, Fe += a * Pe, Re += a * Ve, ye += a * We, pe += a * ke, fe += a * Ge, ue += a * Ye, ce += a * Ke, ae += a * ze, oe += a * Ae, re += a * Je, le += a * Qe, a = N[2], he += a * Me, be += a * Ne, de += a * $e, _e += a * je, Fe += a * qe, Re += a * Pe, ye += a * Ve, pe += a * We, fe += a * ke, ue += a * Ge, ce += a * Ye, ae += a * Ke, oe += a * ze, re += a * Ae, le += a * Je, ge += a * Qe, a = N[3], be += a * Me, de += a * Ne, _e += a * $e, Fe += a * je, Re += a * qe, ye += a * Pe, pe += a * Ve, fe += a * We, ue += a * ke, ce += a * Ge, ae += a * Ye, oe += a * Ke, re += a * ze, le += a * Ae, ge += a * Je, ie += a * Qe, a = N[4], de += a * Me, _e += a * Ne, Fe += a * $e, Re += a * je, ye += a * qe, pe += a * Pe, fe += a * Ve, ue += a * We, ce += a * ke, ae += a * Ge, oe += a * Ye, re += a * Ke, le += a * ze, ge += a * Ae, ie += a * Je, me += a * Qe, a = N[5], _e += a * Me, Fe += a * Ne, Re += a * $e, ye += a * je, pe += a * qe, fe += a * Pe, ue += a * Ve, ce += a * We, ae += a * ke, oe += a * Ge, re += a * Ye, le += a * Ke, ge += a * ze, ie += a * Ae, me += a * Je, we += a * Qe, a = N[6], Fe += a * Me, Re += a * Ne, ye += a * $e, pe += a * je, fe += a * qe, ue += a * Pe, ce += a * Ve, ae += a * We, oe += a * ke, re += a * Ge, le += a * Ye, ge += a * Ke, ie += a * ze, me += a * Ae, we += a * Je, Se += a * Qe, a = N[7], Re += a * Me, ye += a * Ne, pe += a * $e, fe += a * je, ue += a * qe, ce += a * Pe, ae += a * Ve, oe += a * We, re += a * ke, le += a * Ge, ge += a * Ye, ie += a * Ke, me += a * ze, we += a * Ae, Se += a * Je, De += a * Qe, a = N[8], ye += a * Me, pe += a * Ne, fe += a * $e, ue += a * je, ce += a * qe, ae += a * Pe, oe += a * Ve, re += a * We, le += a * ke, ge += a * Ge, ie += a * Ye, me += a * Ke, we += a * ze, Se += a * Ae, De += a * Je, Ee += a * Qe, a = N[9], pe += a * Me, fe += a * Ne, ue += a * $e, ce += a * je, ae += a * qe, oe += a * Pe, re += a * Ve, le += a * We, ge += a * ke, ie += a * Ge, me += a * Ye, we += a * Ke, Se += a * ze, De += a * Ae, Ee += a * Je, Ct += a * Qe, a = N[10], fe += a * Me, ue += a * Ne, ce += a * $e, ae += a * je, oe += a * qe, re += a * Pe, le += a * Ve, ge += a * We, ie += a * ke, me += a * Ge, we += a * Ye, Se += a * Ke, De += a * ze, Ee += a * Ae, Ct += a * Je, Ut += a * Qe, a = N[11], ue += a * Me, ce += a * Ne, ae += a * $e, oe += a * je, re += a * qe, le += a * Pe, ge += a * Ve, ie += a * We, me += a * ke, we += a * Ge, Se += a * Ye, De += a * Ke, Ee += a * ze, Ct += a * Ae, Ut += a * Je, Gt += a * Qe, a = N[12], ce += a * Me, ae += a * Ne, oe += a * $e, re += a * je, le += a * qe, ge += a * Pe, ie += a * Ve, me += a * We, we += a * ke, Se += a * Ge, De += a * Ye, Ee += a * Ke, Ct += a * ze, Ut += a * Ae, Gt += a * Je, wt += a * Qe, a = N[13], ae += a * Me, oe += a * Ne, re += a * $e, le += a * je, ge += a * qe, ie += a * Pe, me += a * Ve, we += a * We, Se += a * ke, De += a * Ge, Ee += a * Ye, Ct += a * Ke, Ut += a * ze, Gt += a * Ae, wt += a * Je, ir += a * Qe, a = N[14], oe += a * Me, re += a * Ne, le += a * $e, ge += a * je, ie += a * qe, me += a * Pe, we += a * Ve, Se += a * We, De += a * ke, Ee += a * Ge, Ct += a * Ye, Ut += a * Ke, Gt += a * ze, wt += a * Ae, ir += a * Je, Ur += a * Qe, a = N[15], re += a * Me, le += a * Ne, ge += a * $e, ie += a * je, me += a * qe, we += a * Pe, Se += a * Ve, De += a * We, Ee += a * ke, Ct += a * Ge, Ut += a * Ye, Gt += a * Ke, wt += a * ze, ir += a * Ae, Ur += a * Je, di += a * Qe, W += 38 * le, Y += 38 * ge, he += 38 * ie, be += 38 * me, de += 38 * we, _e += 38 * Se, Fe += 38 * De, Re += 38 * Ee, ye += 38 * Ct, pe += 38 * Ut, fe += 38 * Gt, ue += 38 * wt, ce += 38 * ir, ae += 38 * Ur, oe += 38 * di, E = 1, a = W + E + 65535, E = Math.floor(a / 65536), W = a - E * 65536, a = Y + E + 65535, E = Math.floor(a / 65536), Y = a - E * 65536, a = he + E + 65535, E = Math.floor(a / 65536), he = a - E * 65536, a = be + E + 65535, E = Math.floor(a / 65536), be = a - E * 65536, a = de + E + 65535, E = Math.floor(a / 65536), de = a - E * 65536, a = _e + E + 65535, E = Math.floor(a / 65536), _e = a - E * 65536, a = Fe + E + 65535, E = Math.floor(a / 65536), Fe = a - E * 65536, a = Re + E + 65535, E = Math.floor(a / 65536), Re = a - E * 65536, a = ye + E + 65535, E = Math.floor(a / 65536), ye = a - E * 65536, a = pe + E + 65535, E = Math.floor(a / 65536), pe = a - E * 65536, a = fe + E + 65535, E = Math.floor(a / 65536), fe = a - E * 65536, a = ue + E + 65535, E = Math.floor(a / 65536), ue = a - E * 65536, a = ce + E + 65535, E = Math.floor(a / 65536), ce = a - E * 65536, a = ae + E + 65535, E = Math.floor(a / 65536), ae = a - E * 65536, a = oe + E + 65535, E = Math.floor(a / 65536), oe = a - E * 65536, a = re + E + 65535, E = Math.floor(a / 65536), re = a - E * 65536, W += E - 1 + 37 * (E - 1), E = 1, a = W + E + 65535, E = Math.floor(a / 65536), W = a - E * 65536, a = Y + E + 65535, E = Math.floor(a / 65536), Y = a - E * 65536, a = he + E + 65535, E = Math.floor(a / 65536), he = a - E * 65536, a = be + E + 65535, E = Math.floor(a / 65536), be = a - E * 65536, a = de + E + 65535, E = Math.floor(a / 65536), de = a - E * 65536, a = _e + E + 65535, E = Math.floor(a / 65536), _e = a - E * 65536, a = Fe + E + 65535, E = Math.floor(a / 65536), Fe = a - E * 65536, a = Re + E + 65535, E = Math.floor(a / 65536), Re = a - E * 65536, a = ye + E + 65535, E = Math.floor(a / 65536), ye = a - E * 65536, a = pe + E + 65535, E = Math.floor(a / 65536), pe = a - E * 65536, a = fe + E + 65535, E = Math.floor(a / 65536), fe = a - E * 65536, a = ue + E + 65535, E = Math.floor(a / 65536), ue = a - E * 65536, a = ce + E + 65535, E = Math.floor(a / 65536), ce = a - E * 65536, a = ae + E + 65535, E = Math.floor(a / 65536), ae = a - E * 65536, a = oe + E + 65535, E = Math.floor(a / 65536), oe = a - E * 65536, a = re + E + 65535, E = Math.floor(a / 65536), re = a - E * 65536, W += E - 1 + 37 * (E - 1), L[0] = W, L[1] = Y, L[2] = he, L[3] = be, L[4] = de, L[5] = _e, L[6] = Fe, L[7] = Re, L[8] = ye, L[9] = pe, L[10] = fe, L[11] = ue, L[12] = ce, L[13] = ae, L[14] = oe, L[15] = re;
  }
  function d(L, N) {
    o(L, N, N);
  }
  function T(L, N) {
    const A = n();
    let a;
    for (a = 0; a < 16; a++)
      A[a] = N[a];
    for (a = 253; a >= 0; a--)
      d(A, A), a !== 2 && a !== 4 && o(A, A, N);
    for (a = 0; a < 16; a++)
      L[a] = A[a];
  }
  function R(L, N) {
    const A = n();
    let a;
    for (a = 0; a < 16; a++)
      A[a] = N[a];
    for (a = 250; a >= 0; a--)
      d(A, A), a !== 1 && o(A, A, N);
    for (a = 0; a < 16; a++)
      L[a] = A[a];
  }
  function U(L, N) {
    const A = n(), a = n(), E = n(), W = n(), Y = n(), he = n(), be = n(), de = n(), _e = n();
    f(A, L[1], L[0]), f(_e, N[1], N[0]), o(A, A, _e), v(a, L[0], L[1]), v(_e, N[0], N[1]), o(a, a, _e), o(E, L[3], N[3]), o(E, E, h), o(W, L[2], N[2]), v(W, W, W), f(Y, a, A), f(he, W, E), v(be, W, E), v(de, a, A), o(L[0], Y, he), o(L[1], de, be), o(L[2], be, he), o(L[3], Y, de);
  }
  function B(L, N, A) {
    for (let a = 0; a < 4; a++)
      I(L[a], N[a], A);
  }
  function k(L, N) {
    const A = n(), a = n(), E = n();
    T(E, N[2]), o(A, N[0], E), o(a, N[1], E), x(L, a), L[31] ^= S(A) << 7;
  }
  function O(L, N, A) {
    _(L[0], u), _(L[1], c), _(L[2], c), _(L[3], u);
    for (let a = 255; a >= 0; --a) {
      const E = A[a / 8 | 0] >> (a & 7) & 1;
      B(L, N, E), U(N, L), U(L, L), B(L, N, E);
    }
  }
  function P(L, N) {
    const A = [n(), n(), n(), n()];
    _(A[0], p), _(A[1], b), _(A[2], c), o(A[3], p, b), O(L, A, N);
  }
  function V(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(L);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const A = new Uint8Array(32), a = [n(), n(), n(), n()];
    P(a, N), k(A, a);
    const E = new Uint8Array(64);
    return E.set(L), E.set(A, 32), {
      publicKey: A,
      secretKey: E
    };
  }
  t.generateKeyPairFromSeed = V;
  function z(L) {
    const N = (0, e.randomBytes)(32, L), A = V(N);
    return (0, i.wipe)(N), A;
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
    let A, a, E, W;
    for (a = 63; a >= 32; --a) {
      for (A = 0, E = a - 32, W = a - 12; E < W; ++E)
        N[E] += A - 16 * N[a] * q[E - (a - 32)], A = Math.floor((N[E] + 128) / 256), N[E] -= A * 256;
      N[E] += A, N[a] = 0;
    }
    for (A = 0, E = 0; E < 32; E++)
      N[E] += A - (N[31] >> 4) * q[E], A = N[E] >> 8, N[E] &= 255;
    for (E = 0; E < 32; E++)
      N[E] -= A * q[E];
    for (a = 0; a < 32; a++)
      N[a + 1] += N[a] >> 8, L[a] = N[a] & 255;
  }
  function K(L) {
    const N = new Float64Array(64);
    for (let A = 0; A < 64; A++)
      N[A] = L[A];
    for (let A = 0; A < 64; A++)
      L[A] = 0;
    M(L, N);
  }
  function te(L, N) {
    const A = new Float64Array(64), a = [n(), n(), n(), n()], E = (0, r.hash)(L.subarray(0, 32));
    E[0] &= 248, E[31] &= 127, E[31] |= 64;
    const W = new Uint8Array(64);
    W.set(E.subarray(32), 32);
    const Y = new r.SHA512();
    Y.update(W.subarray(32)), Y.update(N);
    const he = Y.digest();
    Y.clean(), K(he), P(a, he), k(W, a), Y.reset(), Y.update(W.subarray(0, 32)), Y.update(L.subarray(32)), Y.update(N);
    const be = Y.digest();
    K(be);
    for (let de = 0; de < 32; de++)
      A[de] = he[de];
    for (let de = 0; de < 32; de++)
      for (let _e = 0; _e < 32; _e++)
        A[de + _e] += be[de] * E[_e];
    return M(W.subarray(32), A), W;
  }
  t.sign = te;
  function H(L, N) {
    const A = n(), a = n(), E = n(), W = n(), Y = n(), he = n(), be = n();
    return _(L[2], c), y(L[1], N), d(E, L[1]), o(W, E, l), f(E, E, L[2]), v(W, L[2], W), d(Y, W), d(he, Y), o(be, he, Y), o(A, be, E), o(A, A, W), R(A, A), o(A, A, E), o(A, A, W), o(A, A, W), o(L[0], A, W), d(a, L[0]), o(a, a, W), m(a, E) && o(L[0], L[0], w), d(a, L[0]), o(a, a, W), m(a, E) ? -1 : (S(L[0]) === N[31] >> 7 && f(L[0], u, L[0]), o(L[3], L[0], L[1]), 0);
  }
  function Z(L, N, A) {
    const a = new Uint8Array(32), E = [n(), n(), n(), n()], W = [n(), n(), n(), n()];
    if (A.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(W, L))
      return !1;
    const Y = new r.SHA512();
    Y.update(A.subarray(0, 32)), Y.update(L), Y.update(N);
    const he = Y.digest();
    return K(he), O(E, W, he), P(W, A.subarray(32)), U(E, W), k(a, E), !F(A, a);
  }
  t.verify = Z;
  function J(L) {
    let N = [n(), n(), n(), n()];
    if (H(N, L))
      throw new Error("Ed25519: invalid public key");
    let A = n(), a = n(), E = N[1];
    v(A, c, E), f(a, c, E), T(a, a), o(A, A, a);
    let W = new Uint8Array(32);
    return x(W, A), W;
  }
  t.convertPublicKeyToX25519 = J;
  function ee(L) {
    const N = (0, r.hash)(L.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const A = new Uint8Array(N.subarray(0, 32));
    return (0, i.wipe)(N), A;
  }
  t.convertSecretKeyToX25519 = ee;
})(Yn);
const ff = "EdDSA", df = "JWT", ka = ".", Ga = "base64url", pf = "utf8", gf = "utf8", yf = ":", bf = "did", mf = "key", lo = "base58btc", vf = "z", wf = "K36", _f = 32;
function Jn(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ya(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Jn(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Pn(t, e) {
  e || (e = t.reduce((n, s) => n + s.length, 0));
  const r = Ya(e);
  let i = 0;
  for (const n of t)
    r.set(n, i), i += n.length;
  return Jn(r);
}
function Ef(t, e) {
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
  var c = t.length, l = t.charAt(0), h = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, x = 0, F = 0, m = D.length; F !== m && D[F] === 0; )
      F++, I++;
    for (var S = (m - F) * p + 1 >>> 0, y = new Uint8Array(S); F !== m; ) {
      for (var v = D[F], f = 0, o = S - 1; (v !== 0 || f < x) && o !== -1; o--, f++)
        v += 256 * y[o] >>> 0, y[o] = v % c >>> 0, v = v / c >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      x = f, F++;
    }
    for (var d = S - x; d !== S && y[d] === 0; )
      d++;
    for (var T = l.repeat(I); d < S; ++d)
      T += t.charAt(y[d]);
    return T;
  }
  function w(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var x = 0, F = 0; D[I] === l; )
        x++, I++;
      for (var m = (D.length - I) * h + 1 >>> 0, S = new Uint8Array(m); D[I]; ) {
        var y = r[D.charCodeAt(I)];
        if (y === 255)
          return;
        for (var v = 0, f = m - 1; (y !== 0 || v < F) && f !== -1; f--, v++)
          y += c * S[f] >>> 0, S[f] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        F = v, I++;
      }
      if (D[I] !== " ") {
        for (var o = m - F; o !== m && S[o] === 0; )
          o++;
        for (var d = new Uint8Array(x + (m - o)), T = x; o !== m; )
          d[T++] = S[o++];
        return d;
      }
    }
  }
  function _(D) {
    var I = w(D);
    if (I)
      return I;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: b,
    decodeUnsafe: w,
    decode: _
  };
}
var Sf = Ef, Df = Sf;
const If = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Of = (t) => new TextEncoder().encode(t), xf = (t) => new TextDecoder().decode(t);
class Af {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Cf {
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
    return Ja(this, e);
  }
}
class Tf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ja(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ja = (t, e) => new Tf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Rf {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Af(e, r, i), this.decoder = new Cf(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Hi = ({ name: t, prefix: e, encode: r, decode: i }) => new Rf(t, e, r, i), oi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = Df(r, e);
  return Hi({
    prefix: t,
    name: e,
    encode: i,
    decode: (s) => If(n(s))
  });
}, Nf = (t, e, r, i) => {
  const n = {};
  for (let p = 0; p < e.length; ++p)
    n[e[p]] = p;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let c = 0, l = 0, h = 0;
  for (let p = 0; p < s; ++p) {
    const b = n[t[p]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, c += r, c >= 8 && (c -= 8, u[h++] = 255 & l >> c);
  }
  if (c >= r || 255 & l << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Pf = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, c = 0;
  for (let l = 0; l < t.length; ++l)
    for (c = c << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & c >> u];
  if (u && (s += e[n & c << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, it = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Hi({
  prefix: e,
  name: t,
  encode(n) {
    return Pf(n, i, r);
  },
  decode(n) {
    return Nf(n, i, r, t);
  }
}), Lf = Hi({
  prefix: "\0",
  name: "identity",
  encode: (t) => xf(t),
  decode: (t) => Of(t)
}), Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Lf
}, Symbol.toStringTag, { value: "Module" })), Ff = it({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Ff
}, Symbol.toStringTag, { value: "Module" })), $f = it({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: $f
}, Symbol.toStringTag, { value: "Module" })), qf = oi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: qf
}, Symbol.toStringTag, { value: "Module" })), Bf = it({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Kf = it({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Bf,
  base16upper: Kf
}, Symbol.toStringTag, { value: "Module" })), Vf = it({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Wf = it({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), kf = it({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Gf = it({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Yf = it({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Jf = it({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Qf = it({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Xf = it({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Zf = it({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Vf,
  base32hex: Yf,
  base32hexpad: Qf,
  base32hexpadupper: Xf,
  base32hexupper: Jf,
  base32pad: kf,
  base32padupper: Gf,
  base32upper: Wf,
  base32z: Zf
}, Symbol.toStringTag, { value: "Module" })), td = oi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), rd = oi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: td,
  base36upper: rd
}, Symbol.toStringTag, { value: "Module" })), nd = oi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), sd = oi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: nd,
  base58flickr: sd
}, Symbol.toStringTag, { value: "Module" })), ad = it({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), cd = it({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), ud = it({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), ld = it({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: ad,
  base64pad: cd,
  base64url: ud,
  base64urlpad: ld
}, Symbol.toStringTag, { value: "Module" })), Qa = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), fd = Qa.reduce((t, e, r) => (t[r] = e, t), []), dd = Qa.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function pd(t) {
  return t.reduce((e, r) => (e += fd[r], e), "");
}
function gd(t) {
  const e = [];
  for (const r of t) {
    const i = dd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const yd = Hi({
  prefix: "🚀",
  name: "base256emoji",
  encode: pd,
  decode: gd
}), bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: yd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ho = {
  ...Uf,
  ...Mf,
  ...jf,
  ...zf,
  ...Hf,
  ...ed,
  ...id,
  ...od,
  ...hd,
  ...bd
};
function Xa(t, e, r, i) {
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
const fo = Xa("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), hn = Xa("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ya(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Za = {
  utf8: fo,
  "utf-8": fo,
  hex: ho.base16,
  latin1: hn,
  ascii: hn,
  binary: hn,
  ...ho
};
function yt(t, e = "utf8") {
  const r = Za[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function vt(t, e = "utf8") {
  const r = Za[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Jn(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ni(t) {
  return yt(vt(Gn(t), pf), Ga);
}
function ec(t) {
  const e = vt(wf, lo), r = vf + yt(Pn([e, t]), lo);
  return [bf, mf, r].join(yf);
}
function md(t) {
  return yt(t, Ga);
}
function vd(t) {
  return vt([Ni(t.header), Ni(t.payload)].join(ka), gf);
}
function wd(t) {
  return [
    Ni(t.header),
    Ni(t.payload),
    md(t.signature)
  ].join(ka);
}
function po(t = Nr.randomBytes(_f)) {
  return Yn.generateKeyPairFromSeed(t);
}
async function _d(t, e, r, i, n = X.fromMiliseconds(Date.now())) {
  const s = { alg: ff, typ: df }, u = ec(i.publicKey), c = n + r, l = { iss: u, sub: t, aud: e, iat: n, exp: c }, h = vd({ header: s, payload: l }), p = Yn.sign(i.secretKey, h);
  return wd({ header: s, payload: l, signature: p });
}
var Qn = {}, Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
var at = ne, Ln = Dt, Ed = 20;
function Sd(t, e, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], p = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], b = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], w = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], _ = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], x = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], m = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], S = i, y = n, v = s, f = u, o = c, d = l, T = h, R = p, U = b, B = w, k = _, O = D, P = I, V = x, z = F, $ = m, q = 0; q < Ed; q += 2)
    S = S + o | 0, P ^= S, P = P >>> 32 - 16 | P << 16, U = U + P | 0, o ^= U, o = o >>> 32 - 12 | o << 12, y = y + d | 0, V ^= y, V = V >>> 32 - 16 | V << 16, B = B + V | 0, d ^= B, d = d >>> 32 - 12 | d << 12, v = v + T | 0, z ^= v, z = z >>> 32 - 16 | z << 16, k = k + z | 0, T ^= k, T = T >>> 32 - 12 | T << 12, f = f + R | 0, $ ^= f, $ = $ >>> 32 - 16 | $ << 16, O = O + $ | 0, R ^= O, R = R >>> 32 - 12 | R << 12, v = v + T | 0, z ^= v, z = z >>> 32 - 8 | z << 8, k = k + z | 0, T ^= k, T = T >>> 32 - 7 | T << 7, f = f + R | 0, $ ^= f, $ = $ >>> 32 - 8 | $ << 8, O = O + $ | 0, R ^= O, R = R >>> 32 - 7 | R << 7, y = y + d | 0, V ^= y, V = V >>> 32 - 8 | V << 8, B = B + V | 0, d ^= B, d = d >>> 32 - 7 | d << 7, S = S + o | 0, P ^= S, P = P >>> 32 - 8 | P << 8, U = U + P | 0, o ^= U, o = o >>> 32 - 7 | o << 7, S = S + d | 0, $ ^= S, $ = $ >>> 32 - 16 | $ << 16, k = k + $ | 0, d ^= k, d = d >>> 32 - 12 | d << 12, y = y + T | 0, P ^= y, P = P >>> 32 - 16 | P << 16, O = O + P | 0, T ^= O, T = T >>> 32 - 12 | T << 12, v = v + R | 0, V ^= v, V = V >>> 32 - 16 | V << 16, U = U + V | 0, R ^= U, R = R >>> 32 - 12 | R << 12, f = f + o | 0, z ^= f, z = z >>> 32 - 16 | z << 16, B = B + z | 0, o ^= B, o = o >>> 32 - 12 | o << 12, v = v + R | 0, V ^= v, V = V >>> 32 - 8 | V << 8, U = U + V | 0, R ^= U, R = R >>> 32 - 7 | R << 7, f = f + o | 0, z ^= f, z = z >>> 32 - 8 | z << 8, B = B + z | 0, o ^= B, o = o >>> 32 - 7 | o << 7, y = y + T | 0, P ^= y, P = P >>> 32 - 8 | P << 8, O = O + P | 0, T ^= O, T = T >>> 32 - 7 | T << 7, S = S + d | 0, $ ^= S, $ = $ >>> 32 - 8 | $ << 8, k = k + $ | 0, d ^= k, d = d >>> 32 - 7 | d << 7;
  at.writeUint32LE(S + i | 0, t, 0), at.writeUint32LE(y + n | 0, t, 4), at.writeUint32LE(v + s | 0, t, 8), at.writeUint32LE(f + u | 0, t, 12), at.writeUint32LE(o + c | 0, t, 16), at.writeUint32LE(d + l | 0, t, 20), at.writeUint32LE(T + h | 0, t, 24), at.writeUint32LE(R + p | 0, t, 28), at.writeUint32LE(U + b | 0, t, 32), at.writeUint32LE(B + w | 0, t, 36), at.writeUint32LE(k + _ | 0, t, 40), at.writeUint32LE(O + D | 0, t, 44), at.writeUint32LE(P + I | 0, t, 48), at.writeUint32LE(V + x | 0, t, 52), at.writeUint32LE(z + F | 0, t, 56), at.writeUint32LE($ + m | 0, t, 60);
}
function tc(t, e, r, i, n) {
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
  for (var c = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Sd(c, s, t);
    for (var h = l; h < l + 64 && h < r.length; h++)
      i[h] = r[h] ^ c[h - l];
    Id(s, 0, u);
  }
  return Ln.wipe(c), n === 0 && Ln.wipe(s), i;
}
Vi.streamXOR = tc;
function Dd(t, e, r, i) {
  return i === void 0 && (i = 0), Ln.wipe(r), tc(t, e, r, r, i);
}
Vi.stream = Dd;
function Id(t, e, r) {
  for (var i = 1; r--; )
    i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var rc = {}, rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
function Od(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
rr.select = Od;
function xd(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
rr.lessOrEqual = xd;
function ic(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, i = 0; i < t.length; i++)
    r |= t[i] ^ e[i];
  return 1 & r - 1 >>> 8;
}
rr.compare = ic;
function Ad(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : ic(t, e) !== 0;
}
rr.equal = Ad;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = rr, r = Dt;
  t.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function u(c) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = c[0] | c[1] << 8;
        this._r[0] = l & 8191;
        var h = c[2] | c[3] << 8;
        this._r[1] = (l >>> 13 | h << 3) & 8191;
        var p = c[4] | c[5] << 8;
        this._r[2] = (h >>> 10 | p << 6) & 7939;
        var b = c[6] | c[7] << 8;
        this._r[3] = (p >>> 7 | b << 9) & 8191;
        var w = c[8] | c[9] << 8;
        this._r[4] = (b >>> 4 | w << 12) & 255, this._r[5] = w >>> 1 & 8190;
        var _ = c[10] | c[11] << 8;
        this._r[6] = (w >>> 14 | _ << 2) & 8191;
        var D = c[12] | c[13] << 8;
        this._r[7] = (_ >>> 11 | D << 5) & 8065;
        var I = c[14] | c[15] << 8;
        this._r[8] = (D >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = c[16] | c[17] << 8, this._pad[1] = c[18] | c[19] << 8, this._pad[2] = c[20] | c[21] << 8, this._pad[3] = c[22] | c[23] << 8, this._pad[4] = c[24] | c[25] << 8, this._pad[5] = c[26] | c[27] << 8, this._pad[6] = c[28] | c[29] << 8, this._pad[7] = c[30] | c[31] << 8;
      }
      return u.prototype._blocks = function(c, l, h) {
        for (var p = this._fin ? 0 : 2048, b = this._h[0], w = this._h[1], _ = this._h[2], D = this._h[3], I = this._h[4], x = this._h[5], F = this._h[6], m = this._h[7], S = this._h[8], y = this._h[9], v = this._r[0], f = this._r[1], o = this._r[2], d = this._r[3], T = this._r[4], R = this._r[5], U = this._r[6], B = this._r[7], k = this._r[8], O = this._r[9]; h >= 16; ) {
          var P = c[l + 0] | c[l + 1] << 8;
          b += P & 8191;
          var V = c[l + 2] | c[l + 3] << 8;
          w += (P >>> 13 | V << 3) & 8191;
          var z = c[l + 4] | c[l + 5] << 8;
          _ += (V >>> 10 | z << 6) & 8191;
          var $ = c[l + 6] | c[l + 7] << 8;
          D += (z >>> 7 | $ << 9) & 8191;
          var q = c[l + 8] | c[l + 9] << 8;
          I += ($ >>> 4 | q << 12) & 8191, x += q >>> 1 & 8191;
          var M = c[l + 10] | c[l + 11] << 8;
          F += (q >>> 14 | M << 2) & 8191;
          var K = c[l + 12] | c[l + 13] << 8;
          m += (M >>> 11 | K << 5) & 8191;
          var te = c[l + 14] | c[l + 15] << 8;
          S += (K >>> 8 | te << 8) & 8191, y += te >>> 5 | p;
          var H = 0, Z = H;
          Z += b * v, Z += w * (5 * O), Z += _ * (5 * k), Z += D * (5 * B), Z += I * (5 * U), H = Z >>> 13, Z &= 8191, Z += x * (5 * R), Z += F * (5 * T), Z += m * (5 * d), Z += S * (5 * o), Z += y * (5 * f), H += Z >>> 13, Z &= 8191;
          var J = H;
          J += b * f, J += w * v, J += _ * (5 * O), J += D * (5 * k), J += I * (5 * B), H = J >>> 13, J &= 8191, J += x * (5 * U), J += F * (5 * R), J += m * (5 * T), J += S * (5 * d), J += y * (5 * o), H += J >>> 13, J &= 8191;
          var ee = H;
          ee += b * o, ee += w * f, ee += _ * v, ee += D * (5 * O), ee += I * (5 * k), H = ee >>> 13, ee &= 8191, ee += x * (5 * B), ee += F * (5 * U), ee += m * (5 * R), ee += S * (5 * T), ee += y * (5 * d), H += ee >>> 13, ee &= 8191;
          var L = H;
          L += b * d, L += w * o, L += _ * f, L += D * v, L += I * (5 * O), H = L >>> 13, L &= 8191, L += x * (5 * k), L += F * (5 * B), L += m * (5 * U), L += S * (5 * R), L += y * (5 * T), H += L >>> 13, L &= 8191;
          var N = H;
          N += b * T, N += w * d, N += _ * o, N += D * f, N += I * v, H = N >>> 13, N &= 8191, N += x * (5 * O), N += F * (5 * k), N += m * (5 * B), N += S * (5 * U), N += y * (5 * R), H += N >>> 13, N &= 8191;
          var A = H;
          A += b * R, A += w * T, A += _ * d, A += D * o, A += I * f, H = A >>> 13, A &= 8191, A += x * v, A += F * (5 * O), A += m * (5 * k), A += S * (5 * B), A += y * (5 * U), H += A >>> 13, A &= 8191;
          var a = H;
          a += b * U, a += w * R, a += _ * T, a += D * d, a += I * o, H = a >>> 13, a &= 8191, a += x * f, a += F * v, a += m * (5 * O), a += S * (5 * k), a += y * (5 * B), H += a >>> 13, a &= 8191;
          var E = H;
          E += b * B, E += w * U, E += _ * R, E += D * T, E += I * d, H = E >>> 13, E &= 8191, E += x * o, E += F * f, E += m * v, E += S * (5 * O), E += y * (5 * k), H += E >>> 13, E &= 8191;
          var W = H;
          W += b * k, W += w * B, W += _ * U, W += D * R, W += I * T, H = W >>> 13, W &= 8191, W += x * d, W += F * o, W += m * f, W += S * v, W += y * (5 * O), H += W >>> 13, W &= 8191;
          var Y = H;
          Y += b * O, Y += w * k, Y += _ * B, Y += D * U, Y += I * R, H = Y >>> 13, Y &= 8191, Y += x * T, Y += F * d, Y += m * o, Y += S * f, Y += y * v, H += Y >>> 13, Y &= 8191, H = (H << 2) + H | 0, H = H + Z | 0, Z = H & 8191, H = H >>> 13, J += H, b = Z, w = J, _ = ee, D = L, I = N, x = A, F = a, m = E, S = W, y = Y, l += 16, h -= 16;
        }
        this._h[0] = b, this._h[1] = w, this._h[2] = _, this._h[3] = D, this._h[4] = I, this._h[5] = x, this._h[6] = F, this._h[7] = m, this._h[8] = S, this._h[9] = y;
      }, u.prototype.finish = function(c, l) {
        l === void 0 && (l = 0);
        var h = new Uint16Array(10), p, b, w, _;
        if (this._leftover) {
          for (_ = this._leftover, this._buffer[_++] = 1; _ < 16; _++)
            this._buffer[_] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (p = this._h[1] >>> 13, this._h[1] &= 8191, _ = 2; _ < 10; _++)
          this._h[_] += p, p = this._h[_] >>> 13, this._h[_] &= 8191;
        for (this._h[0] += p * 5, p = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += p, p = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += p, h[0] = this._h[0] + 5, p = h[0] >>> 13, h[0] &= 8191, _ = 1; _ < 10; _++)
          h[_] = this._h[_] + p, p = h[_] >>> 13, h[_] &= 8191;
        for (h[9] -= 8192, b = (p ^ 1) - 1, _ = 0; _ < 10; _++)
          h[_] &= b;
        for (b = ~b, _ = 0; _ < 10; _++)
          this._h[_] = this._h[_] & b | h[_];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, w = this._h[0] + this._pad[0], this._h[0] = w & 65535, _ = 1; _ < 8; _++)
          w = (this._h[_] + this._pad[_] | 0) + (w >>> 16) | 0, this._h[_] = w & 65535;
        return c[l + 0] = this._h[0] >>> 0, c[l + 1] = this._h[0] >>> 8, c[l + 2] = this._h[1] >>> 0, c[l + 3] = this._h[1] >>> 8, c[l + 4] = this._h[2] >>> 0, c[l + 5] = this._h[2] >>> 8, c[l + 6] = this._h[3] >>> 0, c[l + 7] = this._h[3] >>> 8, c[l + 8] = this._h[4] >>> 0, c[l + 9] = this._h[4] >>> 8, c[l + 10] = this._h[5] >>> 0, c[l + 11] = this._h[5] >>> 8, c[l + 12] = this._h[6] >>> 0, c[l + 13] = this._h[6] >>> 8, c[l + 14] = this._h[7] >>> 0, c[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(c) {
        var l = 0, h = c.length, p;
        if (this._leftover) {
          p = 16 - this._leftover, p > h && (p = h);
          for (var b = 0; b < p; b++)
            this._buffer[this._leftover + b] = c[l + b];
          if (h -= p, l += p, this._leftover += p, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (p = h - h % 16, this._blocks(c, l, p), l += p, h -= p), h) {
          for (var b = 0; b < h; b++)
            this._buffer[this._leftover + b] = c[l + b];
          this._leftover += h;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var c = new Uint8Array(16);
        return this.finish(c), c;
      }, u.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  t.Poly1305 = i;
  function n(u, c) {
    var l = new i(u);
    l.update(c);
    var h = l.digest();
    return l.clean(), h;
  }
  t.oneTimeAuth = n;
  function s(u, c) {
    return u.length !== t.DIGEST_LENGTH || c.length !== t.DIGEST_LENGTH ? !1 : e.equal(u, c);
  }
  t.equal = s;
})(rc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Vi, r = rc, i = Dt, n = ne, s = rr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var u = new Uint8Array(16), c = (
    /** @class */
    function() {
      function l(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return l.prototype.seal = function(h, p, b, w) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var _ = new Uint8Array(16);
        _.set(h, _.length - h.length);
        var D = new Uint8Array(32);
        e.stream(this._key, _, D, 4);
        var I = p.length + this.tagLength, x;
        if (w) {
          if (w.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          x = w;
        } else
          x = new Uint8Array(I);
        return e.streamXOR(this._key, _, p, x, 4), this._authenticate(x.subarray(x.length - this.tagLength, x.length), D, x.subarray(0, x.length - this.tagLength), b), i.wipe(_), x;
      }, l.prototype.open = function(h, p, b, w) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (p.length < this.tagLength)
          return null;
        var _ = new Uint8Array(16);
        _.set(h, _.length - h.length);
        var D = new Uint8Array(32);
        e.stream(this._key, _, D, 4);
        var I = new Uint8Array(this.tagLength);
        if (this._authenticate(I, D, p.subarray(0, p.length - this.tagLength), b), !s.equal(I, p.subarray(p.length - this.tagLength, p.length)))
          return null;
        var x = p.length - this.tagLength, F;
        if (w) {
          if (w.length !== x)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F = w;
        } else
          F = new Uint8Array(x);
        return e.streamXOR(this._key, _, p.subarray(0, p.length - this.tagLength), F, 4), i.wipe(_), F;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(h, p, b, w) {
        var _ = new r.Poly1305(p);
        w && (_.update(w), w.length % 16 > 0 && _.update(u.subarray(w.length % 16))), _.update(b), b.length % 16 > 0 && _.update(u.subarray(b.length % 16));
        var D = new Uint8Array(8);
        w && n.writeUint64LE(w.length, D), _.update(D), n.writeUint64LE(b.length, D), _.update(D);
        for (var I = _.digest(), x = 0; x < I.length; x++)
          h[x] = I[x];
        _.clean(), i.wipe(I), i.wipe(D);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = c;
})(Qn);
var nc = {}, ai = {}, Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
function Cd(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Xn.isSerializableHash = Cd;
Object.defineProperty(ai, "__esModule", { value: !0 });
var $t = Xn, Td = rr, Rd = Dt, sc = (
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
      this._outer.update(i), $t.isSerializableHash(this._inner) && $t.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Rd.wipe(i);
    }
    return t.prototype.reset = function() {
      if (!$t.isSerializableHash(this._inner) || !$t.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      $t.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), $t.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!$t.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!$t.isSerializableHash(this._inner) || !$t.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!$t.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
ai.HMAC = sc;
function Nd(t, e, r) {
  var i = new sc(t, e);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
ai.hmac = Nd;
ai.equal = Td.equal;
Object.defineProperty(nc, "__esModule", { value: !0 });
var go = ai, yo = Dt, Pd = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
      var s = go.hmac(this._hash, i, r);
      this._hmac = new go.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), yo.wipe(this._buffer), yo.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Ld = nc.HKDF = Pd, Wi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ne, r = Dt;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var i = (
    /** @class */
    function() {
      function c() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return c.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, c.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, c.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, c.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = l[p++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (p = s(this._temp, this._state, l, p, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[p++], h--;
        return this;
      }, c.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, p = this._bufferLength, b = h / 536870912 | 0, w = h << 3, _ = h % 64 < 56 ? 64 : 128;
          this._buffer[p] = 128;
          for (var D = p + 1; D < _ - 8; D++)
            this._buffer[D] = 0;
          e.writeUint32BE(b, this._buffer, _ - 8), e.writeUint32BE(w, this._buffer, _ - 4), s(this._temp, this._state, this._buffer, 0, _), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 4; D++)
          e.writeUint32BE(this._state[D], l, D * 4);
        return this;
      }, c.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, c.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, c.prototype.restoreState = function(l) {
        return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, c.prototype.cleanSavedState = function(l) {
        r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, c;
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
  function s(c, l, h, p, b) {
    for (; b >= 64; ) {
      for (var w = l[0], _ = l[1], D = l[2], I = l[3], x = l[4], F = l[5], m = l[6], S = l[7], y = 0; y < 16; y++) {
        var v = p + y * 4;
        c[y] = e.readUint32BE(h, v);
      }
      for (var y = 16; y < 64; y++) {
        var f = c[y - 2], o = (f >>> 17 | f << 32 - 17) ^ (f >>> 19 | f << 32 - 19) ^ f >>> 10;
        f = c[y - 15];
        var d = (f >>> 7 | f << 32 - 7) ^ (f >>> 18 | f << 32 - 18) ^ f >>> 3;
        c[y] = (o + c[y - 7] | 0) + (d + c[y - 16] | 0);
      }
      for (var y = 0; y < 64; y++) {
        var o = (((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)) + (x & F ^ ~x & m) | 0) + (S + (n[y] + c[y] | 0) | 0) | 0, d = ((w >>> 2 | w << 32 - 2) ^ (w >>> 13 | w << 32 - 13) ^ (w >>> 22 | w << 32 - 22)) + (w & _ ^ w & D ^ _ & D) | 0;
        S = m, m = F, F = x, x = I + o | 0, I = D, D = _, _ = w, w = o + d | 0;
      }
      l[0] += w, l[1] += _, l[2] += D, l[3] += I, l[4] += x, l[5] += F, l[6] += m, l[7] += S, p += 64, b -= 64;
    }
    return p;
  }
  function u(c) {
    var l = new i();
    l.update(c);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(Wi);
var Zn = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Nr, r = Dt;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function i(y) {
    const v = new Float64Array(16);
    if (y)
      for (let f = 0; f < y.length; f++)
        v[f] = y[f];
    return v;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(y) {
    let v = 1;
    for (let f = 0; f < 16; f++) {
      let o = y[f] + v + 65535;
      v = Math.floor(o / 65536), y[f] = o - v * 65536;
    }
    y[0] += v - 1 + 37 * (v - 1);
  }
  function c(y, v, f) {
    const o = ~(f - 1);
    for (let d = 0; d < 16; d++) {
      const T = o & (y[d] ^ v[d]);
      y[d] ^= T, v[d] ^= T;
    }
  }
  function l(y, v) {
    const f = i(), o = i();
    for (let d = 0; d < 16; d++)
      o[d] = v[d];
    u(o), u(o), u(o);
    for (let d = 0; d < 2; d++) {
      f[0] = o[0] - 65517;
      for (let R = 1; R < 15; R++)
        f[R] = o[R] - 65535 - (f[R - 1] >> 16 & 1), f[R - 1] &= 65535;
      f[15] = o[15] - 32767 - (f[14] >> 16 & 1);
      const T = f[15] >> 16 & 1;
      f[14] &= 65535, c(o, f, 1 - T);
    }
    for (let d = 0; d < 16; d++)
      y[2 * d] = o[d] & 255, y[2 * d + 1] = o[d] >> 8;
  }
  function h(y, v) {
    for (let f = 0; f < 16; f++)
      y[f] = v[2 * f] + (v[2 * f + 1] << 8);
    y[15] &= 32767;
  }
  function p(y, v, f) {
    for (let o = 0; o < 16; o++)
      y[o] = v[o] + f[o];
  }
  function b(y, v, f) {
    for (let o = 0; o < 16; o++)
      y[o] = v[o] - f[o];
  }
  function w(y, v, f) {
    let o, d, T = 0, R = 0, U = 0, B = 0, k = 0, O = 0, P = 0, V = 0, z = 0, $ = 0, q = 0, M = 0, K = 0, te = 0, H = 0, Z = 0, J = 0, ee = 0, L = 0, N = 0, A = 0, a = 0, E = 0, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Fe = 0, Re = 0, ye = f[0], pe = f[1], fe = f[2], ue = f[3], ce = f[4], ae = f[5], oe = f[6], re = f[7], le = f[8], ge = f[9], ie = f[10], me = f[11], we = f[12], Se = f[13], De = f[14], Ee = f[15];
    o = v[0], T += o * ye, R += o * pe, U += o * fe, B += o * ue, k += o * ce, O += o * ae, P += o * oe, V += o * re, z += o * le, $ += o * ge, q += o * ie, M += o * me, K += o * we, te += o * Se, H += o * De, Z += o * Ee, o = v[1], R += o * ye, U += o * pe, B += o * fe, k += o * ue, O += o * ce, P += o * ae, V += o * oe, z += o * re, $ += o * le, q += o * ge, M += o * ie, K += o * me, te += o * we, H += o * Se, Z += o * De, J += o * Ee, o = v[2], U += o * ye, B += o * pe, k += o * fe, O += o * ue, P += o * ce, V += o * ae, z += o * oe, $ += o * re, q += o * le, M += o * ge, K += o * ie, te += o * me, H += o * we, Z += o * Se, J += o * De, ee += o * Ee, o = v[3], B += o * ye, k += o * pe, O += o * fe, P += o * ue, V += o * ce, z += o * ae, $ += o * oe, q += o * re, M += o * le, K += o * ge, te += o * ie, H += o * me, Z += o * we, J += o * Se, ee += o * De, L += o * Ee, o = v[4], k += o * ye, O += o * pe, P += o * fe, V += o * ue, z += o * ce, $ += o * ae, q += o * oe, M += o * re, K += o * le, te += o * ge, H += o * ie, Z += o * me, J += o * we, ee += o * Se, L += o * De, N += o * Ee, o = v[5], O += o * ye, P += o * pe, V += o * fe, z += o * ue, $ += o * ce, q += o * ae, M += o * oe, K += o * re, te += o * le, H += o * ge, Z += o * ie, J += o * me, ee += o * we, L += o * Se, N += o * De, A += o * Ee, o = v[6], P += o * ye, V += o * pe, z += o * fe, $ += o * ue, q += o * ce, M += o * ae, K += o * oe, te += o * re, H += o * le, Z += o * ge, J += o * ie, ee += o * me, L += o * we, N += o * Se, A += o * De, a += o * Ee, o = v[7], V += o * ye, z += o * pe, $ += o * fe, q += o * ue, M += o * ce, K += o * ae, te += o * oe, H += o * re, Z += o * le, J += o * ge, ee += o * ie, L += o * me, N += o * we, A += o * Se, a += o * De, E += o * Ee, o = v[8], z += o * ye, $ += o * pe, q += o * fe, M += o * ue, K += o * ce, te += o * ae, H += o * oe, Z += o * re, J += o * le, ee += o * ge, L += o * ie, N += o * me, A += o * we, a += o * Se, E += o * De, W += o * Ee, o = v[9], $ += o * ye, q += o * pe, M += o * fe, K += o * ue, te += o * ce, H += o * ae, Z += o * oe, J += o * re, ee += o * le, L += o * ge, N += o * ie, A += o * me, a += o * we, E += o * Se, W += o * De, Y += o * Ee, o = v[10], q += o * ye, M += o * pe, K += o * fe, te += o * ue, H += o * ce, Z += o * ae, J += o * oe, ee += o * re, L += o * le, N += o * ge, A += o * ie, a += o * me, E += o * we, W += o * Se, Y += o * De, he += o * Ee, o = v[11], M += o * ye, K += o * pe, te += o * fe, H += o * ue, Z += o * ce, J += o * ae, ee += o * oe, L += o * re, N += o * le, A += o * ge, a += o * ie, E += o * me, W += o * we, Y += o * Se, he += o * De, be += o * Ee, o = v[12], K += o * ye, te += o * pe, H += o * fe, Z += o * ue, J += o * ce, ee += o * ae, L += o * oe, N += o * re, A += o * le, a += o * ge, E += o * ie, W += o * me, Y += o * we, he += o * Se, be += o * De, de += o * Ee, o = v[13], te += o * ye, H += o * pe, Z += o * fe, J += o * ue, ee += o * ce, L += o * ae, N += o * oe, A += o * re, a += o * le, E += o * ge, W += o * ie, Y += o * me, he += o * we, be += o * Se, de += o * De, _e += o * Ee, o = v[14], H += o * ye, Z += o * pe, J += o * fe, ee += o * ue, L += o * ce, N += o * ae, A += o * oe, a += o * re, E += o * le, W += o * ge, Y += o * ie, he += o * me, be += o * we, de += o * Se, _e += o * De, Fe += o * Ee, o = v[15], Z += o * ye, J += o * pe, ee += o * fe, L += o * ue, N += o * ce, A += o * ae, a += o * oe, E += o * re, W += o * le, Y += o * ge, he += o * ie, be += o * me, de += o * we, _e += o * Se, Fe += o * De, Re += o * Ee, T += 38 * J, R += 38 * ee, U += 38 * L, B += 38 * N, k += 38 * A, O += 38 * a, P += 38 * E, V += 38 * W, z += 38 * Y, $ += 38 * he, q += 38 * be, M += 38 * de, K += 38 * _e, te += 38 * Fe, H += 38 * Re, d = 1, o = T + d + 65535, d = Math.floor(o / 65536), T = o - d * 65536, o = R + d + 65535, d = Math.floor(o / 65536), R = o - d * 65536, o = U + d + 65535, d = Math.floor(o / 65536), U = o - d * 65536, o = B + d + 65535, d = Math.floor(o / 65536), B = o - d * 65536, o = k + d + 65535, d = Math.floor(o / 65536), k = o - d * 65536, o = O + d + 65535, d = Math.floor(o / 65536), O = o - d * 65536, o = P + d + 65535, d = Math.floor(o / 65536), P = o - d * 65536, o = V + d + 65535, d = Math.floor(o / 65536), V = o - d * 65536, o = z + d + 65535, d = Math.floor(o / 65536), z = o - d * 65536, o = $ + d + 65535, d = Math.floor(o / 65536), $ = o - d * 65536, o = q + d + 65535, d = Math.floor(o / 65536), q = o - d * 65536, o = M + d + 65535, d = Math.floor(o / 65536), M = o - d * 65536, o = K + d + 65535, d = Math.floor(o / 65536), K = o - d * 65536, o = te + d + 65535, d = Math.floor(o / 65536), te = o - d * 65536, o = H + d + 65535, d = Math.floor(o / 65536), H = o - d * 65536, o = Z + d + 65535, d = Math.floor(o / 65536), Z = o - d * 65536, T += d - 1 + 37 * (d - 1), d = 1, o = T + d + 65535, d = Math.floor(o / 65536), T = o - d * 65536, o = R + d + 65535, d = Math.floor(o / 65536), R = o - d * 65536, o = U + d + 65535, d = Math.floor(o / 65536), U = o - d * 65536, o = B + d + 65535, d = Math.floor(o / 65536), B = o - d * 65536, o = k + d + 65535, d = Math.floor(o / 65536), k = o - d * 65536, o = O + d + 65535, d = Math.floor(o / 65536), O = o - d * 65536, o = P + d + 65535, d = Math.floor(o / 65536), P = o - d * 65536, o = V + d + 65535, d = Math.floor(o / 65536), V = o - d * 65536, o = z + d + 65535, d = Math.floor(o / 65536), z = o - d * 65536, o = $ + d + 65535, d = Math.floor(o / 65536), $ = o - d * 65536, o = q + d + 65535, d = Math.floor(o / 65536), q = o - d * 65536, o = M + d + 65535, d = Math.floor(o / 65536), M = o - d * 65536, o = K + d + 65535, d = Math.floor(o / 65536), K = o - d * 65536, o = te + d + 65535, d = Math.floor(o / 65536), te = o - d * 65536, o = H + d + 65535, d = Math.floor(o / 65536), H = o - d * 65536, o = Z + d + 65535, d = Math.floor(o / 65536), Z = o - d * 65536, T += d - 1 + 37 * (d - 1), y[0] = T, y[1] = R, y[2] = U, y[3] = B, y[4] = k, y[5] = O, y[6] = P, y[7] = V, y[8] = z, y[9] = $, y[10] = q, y[11] = M, y[12] = K, y[13] = te, y[14] = H, y[15] = Z;
  }
  function _(y, v) {
    w(y, v, v);
  }
  function D(y, v) {
    const f = i();
    for (let o = 0; o < 16; o++)
      f[o] = v[o];
    for (let o = 253; o >= 0; o--)
      _(f, f), o !== 2 && o !== 4 && w(f, f, v);
    for (let o = 0; o < 16; o++)
      y[o] = f[o];
  }
  function I(y, v) {
    const f = new Uint8Array(32), o = new Float64Array(80), d = i(), T = i(), R = i(), U = i(), B = i(), k = i();
    for (let z = 0; z < 31; z++)
      f[z] = y[z];
    f[31] = y[31] & 127 | 64, f[0] &= 248, h(o, v);
    for (let z = 0; z < 16; z++)
      T[z] = o[z];
    d[0] = U[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = f[z >>> 3] >>> (z & 7) & 1;
      c(d, T, $), c(R, U, $), p(B, d, R), b(d, d, R), p(R, T, U), b(T, T, U), _(U, B), _(k, d), w(d, R, d), w(R, T, B), p(B, d, R), b(d, d, R), _(T, d), b(R, U, k), w(d, R, s), p(d, d, U), w(R, R, d), w(d, U, k), w(U, T, o), _(T, B), c(d, T, $), c(R, U, $);
    }
    for (let z = 0; z < 16; z++)
      o[z + 16] = d[z], o[z + 32] = R[z], o[z + 48] = T[z], o[z + 64] = U[z];
    const O = o.subarray(32), P = o.subarray(16);
    D(O, O), w(P, P, O);
    const V = new Uint8Array(32);
    return l(V, P), V;
  }
  t.scalarMult = I;
  function x(y) {
    return I(y, n);
  }
  t.scalarMultBase = x;
  function F(y) {
    if (y.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const v = new Uint8Array(y);
    return {
      publicKey: x(v),
      secretKey: v
    };
  }
  t.generateKeyPairFromSeed = F;
  function m(y) {
    const v = (0, e.randomBytes)(32, y), f = F(v);
    return (0, r.wipe)(v), f;
  }
  t.generateKeyPair = m;
  function S(y, v, f = !1) {
    if (y.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = I(y, v);
    if (f) {
      let d = 0;
      for (let T = 0; T < o.length; T++)
        d |= o[T];
      if (d === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  t.sharedKey = S;
})(Zn);
var bo = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = e.length, s; i < n; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Ud = (
  /** @class */
  function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Fd = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Md = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return t;
  }()
), $d = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), jd = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), qd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, zd = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, mo = 3, Bd = [
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
  ["searchbot", qd]
], vo = [
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
function Kd(t) {
  return t ? wo(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new jd() : typeof navigator < "u" ? wo(navigator.userAgent) : Wd();
}
function Hd(t) {
  return t !== "" && Bd.reduce(function(e, r) {
    var i = r[0], n = r[1];
    if (e)
      return e;
    var s = n.exec(t);
    return !!s && [i, s];
  }, !1);
}
function wo(t) {
  var e = Hd(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new $d();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < mo && (n = bo(bo([], n, !0), kd(mo - n.length), !0)) : n = [];
  var s = n.join("."), u = Vd(t), c = zd.exec(t);
  return c && c[1] ? new Md(r, s, u, c[1]) : new Ud(r, s, u);
}
function Vd(t) {
  for (var e = 0, r = vo.length; e < r; e++) {
    var i = vo[e], n = i[0], s = i[1], u = s.exec(t);
    if (u)
      return n;
  }
  return null;
}
function Wd() {
  var t = typeof process < "u" && process.version;
  return t ? new Fd(process.version.slice(1)) : null;
}
function kd(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = ac = Oe.getLocation = Oe.getLocationOrThrow = es = Oe.getNavigator = Oe.getNavigatorOrThrow = oc = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function vr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Oe.getFromWindow = vr;
function Pr(t) {
  const e = vr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = Pr;
function Gd() {
  return Pr("document");
}
Oe.getDocumentOrThrow = Gd;
function Yd() {
  return vr("document");
}
var oc = Oe.getDocument = Yd;
function Jd() {
  return Pr("navigator");
}
Oe.getNavigatorOrThrow = Jd;
function Qd() {
  return vr("navigator");
}
var es = Oe.getNavigator = Qd;
function Xd() {
  return Pr("location");
}
Oe.getLocationOrThrow = Xd;
function Zd() {
  return vr("location");
}
var ac = Oe.getLocation = Zd;
function ep() {
  return Pr("crypto");
}
Oe.getCryptoOrThrow = ep;
function tp() {
  return vr("crypto");
}
Oe.getCrypto = tp;
function rp() {
  return Pr("localStorage");
}
Oe.getLocalStorageOrThrow = rp;
function ip() {
  return vr("localStorage");
}
Oe.getLocalStorage = ip;
var ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
var cc = ts.getWindowMetadata = void 0;
const _o = Oe;
function np() {
  let t, e;
  try {
    t = _o.getDocumentOrThrow(), e = _o.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const b = t.getElementsByTagName("link"), w = [];
    for (let _ = 0; _ < b.length; _++) {
      const D = b[_], I = D.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const x = D.getAttribute("href");
        if (x)
          if (x.toLowerCase().indexOf("https:") === -1 && x.toLowerCase().indexOf("http:") === -1 && x.indexOf("//") !== 0) {
            let F = e.protocol + "//" + e.host;
            if (x.indexOf("/") === 0)
              F += x;
            else {
              const m = e.pathname.split("/");
              m.pop();
              const S = m.join("/");
              F += S + "/" + x;
            }
            w.push(F);
          } else if (x.indexOf("//") === 0) {
            const F = e.protocol + x;
            w.push(F);
          } else
            w.push(x);
      }
    }
    return w;
  }
  function i(...b) {
    const w = t.getElementsByTagName("meta");
    for (let _ = 0; _ < w.length; _++) {
      const D = w[_], I = ["itemprop", "property", "name"].map((x) => D.getAttribute(x)).filter((x) => x ? b.includes(x) : !1);
      if (I.length && I) {
        const x = D.getAttribute("content");
        if (x)
          return x;
      }
    }
    return "";
  }
  function n() {
    let b = i("name", "og:site_name", "og:title", "twitter:title");
    return b || (b = t.title), b;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = n(), c = s(), l = e.origin, h = r();
  return {
    description: c,
    url: l,
    icons: h,
    name: u
  };
}
cc = ts.getWindowMetadata = np;
var ti = {}, sp = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), uc = "%[a-f0-9]{2}", Eo = new RegExp("(" + uc + ")|([^%]+?)", "gi"), So = new RegExp("(" + uc + ")+", "gi");
function Un(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), i = t.slice(e);
  return Array.prototype.concat.call([], Un(r), Un(i));
}
function op(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Eo) || [], r = 1; r < e.length; r++)
      t = Un(e, r).join(""), e = t.match(Eo) || [];
    return t;
  }
}
function ap(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = So.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = op(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = So.exec(t);
  }
  e["%C2"] = "�";
  for (var n = Object.keys(e), s = 0; s < n.length; s++) {
    var u = n[s];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var cp = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return ap(t);
  }
}, up = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, lp = function(t, e) {
  for (var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0; s < i.length; s++) {
    var u = i[s], c = t[u];
    (n ? e.indexOf(u) !== -1 : e(u, c, t)) && (r[u] = c);
  }
  return r;
};
(function(t) {
  const e = sp, r = cp, i = up, n = lp, s = (m) => m == null, u = Symbol("encodeFragmentIdentifier");
  function c(m) {
    switch (m.arrayFormat) {
      case "index":
        return (S) => (y, v) => {
          const f = y.length;
          return v === void 0 || m.skipNull && v === null || m.skipEmptyString && v === "" ? y : v === null ? [...y, [p(S, m), "[", f, "]"].join("")] : [
            ...y,
            [p(S, m), "[", p(f, m), "]=", p(v, m)].join("")
          ];
        };
      case "bracket":
        return (S) => (y, v) => v === void 0 || m.skipNull && v === null || m.skipEmptyString && v === "" ? y : v === null ? [...y, [p(S, m), "[]"].join("")] : [...y, [p(S, m), "[]=", p(v, m)].join("")];
      case "colon-list-separator":
        return (S) => (y, v) => v === void 0 || m.skipNull && v === null || m.skipEmptyString && v === "" ? y : v === null ? [...y, [p(S, m), ":list="].join("")] : [...y, [p(S, m), ":list=", p(v, m)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const S = m.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (y) => (v, f) => f === void 0 || m.skipNull && f === null || m.skipEmptyString && f === "" ? v : (f = f === null ? "" : f, v.length === 0 ? [[p(y, m), S, p(f, m)].join("")] : [[v, p(f, m)].join(m.arrayFormatSeparator)]);
      }
      default:
        return (S) => (y, v) => v === void 0 || m.skipNull && v === null || m.skipEmptyString && v === "" ? y : v === null ? [...y, p(S, m)] : [...y, [p(S, m), "=", p(v, m)].join("")];
    }
  }
  function l(m) {
    let S;
    switch (m.arrayFormat) {
      case "index":
        return (y, v, f) => {
          if (S = /\[(\d*)\]$/.exec(y), y = y.replace(/\[\d*\]$/, ""), !S) {
            f[y] = v;
            return;
          }
          f[y] === void 0 && (f[y] = {}), f[y][S[1]] = v;
        };
      case "bracket":
        return (y, v, f) => {
          if (S = /(\[\])$/.exec(y), y = y.replace(/\[\]$/, ""), !S) {
            f[y] = v;
            return;
          }
          if (f[y] === void 0) {
            f[y] = [v];
            return;
          }
          f[y] = [].concat(f[y], v);
        };
      case "colon-list-separator":
        return (y, v, f) => {
          if (S = /(:list)$/.exec(y), y = y.replace(/:list$/, ""), !S) {
            f[y] = v;
            return;
          }
          if (f[y] === void 0) {
            f[y] = [v];
            return;
          }
          f[y] = [].concat(f[y], v);
        };
      case "comma":
      case "separator":
        return (y, v, f) => {
          const o = typeof v == "string" && v.includes(m.arrayFormatSeparator), d = typeof v == "string" && !o && b(v, m).includes(m.arrayFormatSeparator);
          v = d ? b(v, m) : v;
          const T = o || d ? v.split(m.arrayFormatSeparator).map((R) => b(R, m)) : v === null ? v : b(v, m);
          f[y] = T;
        };
      case "bracket-separator":
        return (y, v, f) => {
          const o = /(\[\])$/.test(y);
          if (y = y.replace(/\[\]$/, ""), !o) {
            f[y] = v && b(v, m);
            return;
          }
          const d = v === null ? [] : v.split(m.arrayFormatSeparator).map((T) => b(T, m));
          if (f[y] === void 0) {
            f[y] = d;
            return;
          }
          f[y] = [].concat(f[y], d);
        };
      default:
        return (y, v, f) => {
          if (f[y] === void 0) {
            f[y] = v;
            return;
          }
          f[y] = [].concat(f[y], v);
        };
    }
  }
  function h(m) {
    if (typeof m != "string" || m.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function p(m, S) {
    return S.encode ? S.strict ? e(m) : encodeURIComponent(m) : m;
  }
  function b(m, S) {
    return S.decode ? r(m) : m;
  }
  function w(m) {
    return Array.isArray(m) ? m.sort() : typeof m == "object" ? w(Object.keys(m)).sort((S, y) => Number(S) - Number(y)).map((S) => m[S]) : m;
  }
  function _(m) {
    const S = m.indexOf("#");
    return S !== -1 && (m = m.slice(0, S)), m;
  }
  function D(m) {
    let S = "";
    const y = m.indexOf("#");
    return y !== -1 && (S = m.slice(y)), S;
  }
  function I(m) {
    m = _(m);
    const S = m.indexOf("?");
    return S === -1 ? "" : m.slice(S + 1);
  }
  function x(m, S) {
    return S.parseNumbers && !Number.isNaN(Number(m)) && typeof m == "string" && m.trim() !== "" ? m = Number(m) : S.parseBooleans && m !== null && (m.toLowerCase() === "true" || m.toLowerCase() === "false") && (m = m.toLowerCase() === "true"), m;
  }
  function F(m, S) {
    S = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, S), h(S.arrayFormatSeparator);
    const y = l(S), v = /* @__PURE__ */ Object.create(null);
    if (typeof m != "string" || (m = m.trim().replace(/^[?#&]/, ""), !m))
      return v;
    for (const f of m.split("&")) {
      if (f === "")
        continue;
      let [o, d] = i(S.decode ? f.replace(/\+/g, " ") : f, "=");
      d = d === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(S.arrayFormat) ? d : b(d, S), y(b(o, S), d, v);
    }
    for (const f of Object.keys(v)) {
      const o = v[f];
      if (typeof o == "object" && o !== null)
        for (const d of Object.keys(o))
          o[d] = x(o[d], S);
      else
        v[f] = x(o, S);
    }
    return S.sort === !1 ? v : (S.sort === !0 ? Object.keys(v).sort() : Object.keys(v).sort(S.sort)).reduce((f, o) => {
      const d = v[o];
      return d && typeof d == "object" && !Array.isArray(d) ? f[o] = w(d) : f[o] = d, f;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = I, t.parse = F, t.stringify = (m, S) => {
    if (!m)
      return "";
    S = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, S), h(S.arrayFormatSeparator);
    const y = (d) => S.skipNull && s(m[d]) || S.skipEmptyString && m[d] === "", v = c(S), f = {};
    for (const d of Object.keys(m))
      y(d) || (f[d] = m[d]);
    const o = Object.keys(f);
    return S.sort !== !1 && o.sort(S.sort), o.map((d) => {
      const T = m[d];
      return T === void 0 ? "" : T === null ? p(d, S) : Array.isArray(T) ? T.length === 0 && S.arrayFormat === "bracket-separator" ? p(d, S) + "[]" : T.reduce(v(d), []).join("&") : p(d, S) + "=" + p(T, S);
    }).filter((d) => d.length > 0).join("&");
  }, t.parseUrl = (m, S) => {
    S = Object.assign({
      decode: !0
    }, S);
    const [y, v] = i(m, "#");
    return Object.assign(
      {
        url: y.split("?")[0] || "",
        query: F(I(m), S)
      },
      S && S.parseFragmentIdentifier && v ? { fragmentIdentifier: b(v, S) } : {}
    );
  }, t.stringifyUrl = (m, S) => {
    S = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, S);
    const y = _(m.url).split("?")[0] || "", v = t.extract(m.url), f = t.parse(v, { sort: !1 }), o = Object.assign(f, m.query);
    let d = t.stringify(o, S);
    d && (d = `?${d}`);
    let T = D(m.url);
    return m.fragmentIdentifier && (T = `#${S[u] ? p(m.fragmentIdentifier, S) : m.fragmentIdentifier}`), `${y}${d}${T}`;
  }, t.pick = (m, S, y) => {
    y = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, y);
    const { url: v, query: f, fragmentIdentifier: o } = t.parseUrl(m, y);
    return t.stringifyUrl({
      url: v,
      query: n(f, S),
      fragmentIdentifier: o
    }, y);
  }, t.exclude = (m, S, y) => {
    const v = Array.isArray(S) ? (f) => !S.includes(f) : (f, o) => !S(f, o);
    return t.pick(m, v, y);
  };
})(ti);
const hp = {
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
function lc(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const hc = "base10", gt = "base16", Fn = "base64pad", rs = "utf8", fc = 0, wr = 1, fp = 0, Do = 1, Mn = 12, is = 32;
function dp() {
  const t = Zn.generateKeyPair();
  return { privateKey: yt(t.secretKey, gt), publicKey: yt(t.publicKey, gt) };
}
function $n() {
  const t = Nr.randomBytes(is);
  return yt(t, gt);
}
function pp(t, e) {
  const r = Zn.sharedKey(vt(t, gt), vt(e, gt)), i = new Ld(Wi.SHA256, r).expand(is);
  return yt(i, gt);
}
function gp(t) {
  const e = Wi.hash(vt(t, gt));
  return yt(e, gt);
}
function Cr(t) {
  const e = Wi.hash(vt(t, rs));
  return yt(e, gt);
}
function yp(t) {
  return vt(`${t}`, hc);
}
function ci(t) {
  return Number(yt(t, hc));
}
function bp(t) {
  const e = yp(typeof t.type < "u" ? t.type : fc);
  if (ci(e) === wr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? vt(t.senderPublicKey, gt) : void 0, i = typeof t.iv < "u" ? vt(t.iv, gt) : Nr.randomBytes(Mn), n = new Qn.ChaCha20Poly1305(vt(t.symKey, gt)).seal(i, vt(t.message, rs));
  return vp({ type: e, sealed: n, iv: i, senderPublicKey: r });
}
function mp(t) {
  const e = new Qn.ChaCha20Poly1305(vt(t.symKey, gt)), { sealed: r, iv: i } = Pi(t.encoded), n = e.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return yt(n, rs);
}
function vp(t) {
  if (ci(t.type) === wr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return yt(Pn([t.type, t.senderPublicKey, t.iv, t.sealed]), Fn);
  }
  return yt(Pn([t.type, t.iv, t.sealed]), Fn);
}
function Pi(t) {
  const e = vt(t, Fn), r = e.slice(fp, Do), i = Do;
  if (ci(r) === wr) {
    const c = i + is, l = c + Mn, h = e.slice(i, c), p = e.slice(c, l), b = e.slice(l);
    return { type: r, sealed: b, iv: p, senderPublicKey: h };
  }
  const n = i + Mn, s = e.slice(i, n), u = e.slice(n);
  return { type: r, sealed: u, iv: s };
}
function wp(t, e) {
  const r = Pi(t);
  return dc({ type: ci(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? yt(r.senderPublicKey, gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function dc(t) {
  const e = (t == null ? void 0 : t.type) || fc;
  if (e === wr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Io(t) {
  return t.type === wr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var _p = Object.defineProperty, Oo = Object.getOwnPropertySymbols, Ep = Object.prototype.hasOwnProperty, Sp = Object.prototype.propertyIsEnumerable, xo = (t, e, r) => e in t ? _p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ao = (t, e) => {
  for (var r in e || (e = {}))
    Ep.call(e, r) && xo(t, r, e[r]);
  if (Oo)
    for (var r of Oo(e))
      Sp.call(e, r) && xo(t, r, e[r]);
  return t;
};
const Dp = "ReactNative", St = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Ip = "js";
function ns() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ki() {
  return !oc() && !!es() && navigator.product === Dp;
}
function ui() {
  return !ns() && !!es();
}
function li() {
  return ki() ? St.reactNative : ns() ? St.node : ui() ? St.browser : St.unknown;
}
function Op(t, e) {
  let r = ti.parse(t);
  return r = Ao(Ao({}, r), e), t = ti.stringify(r), t;
}
function xp() {
  return cc() || { name: "", description: "", url: "", icons: [""] };
}
function Ap() {
  if (li() === St.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = Kd();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Cp() {
  var t;
  const e = li();
  return e === St.browser ? [e, ((t = ac()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Tp(t, e, r) {
  const i = Ap(), n = Cp();
  return [[t, e].join("-"), [Ip, r].join("-"), i, n].join("/");
}
function Rp({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const c = r.split("?"), l = Tp(t, e, i), h = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, p = Op(c[1] || "", h);
  return c[0] + "?" + p;
}
function gr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function pc(t) {
  return Object.fromEntries(t.entries());
}
function gc(t) {
  return new Map(Object.entries(t));
}
function Ir(t = X.FIVE_MINUTES, e) {
  const r = X.toMiliseconds(t || X.FIVE_MINUTES);
  let i, n, s;
  return { resolve: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, reject: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, done: () => new Promise((u, c) => {
    s = setTimeout(() => {
      c(new Error(e));
    }, r), i = u, n = c;
  }) };
}
function ri(t, e, r) {
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
function yc(t, e) {
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
  return yc("topic", t);
}
function Pp(t) {
  return yc("id", t);
}
function bc(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function Rt(t, e) {
  return X.fromMiliseconds((e || Date.now()) + X.toMiliseconds(t));
}
function Zt(t) {
  return Date.now() >= X.toMiliseconds(t);
}
function Be(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Lp({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${t}&sessionTopic=${e}`, u = li();
    u === St.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === St.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const Up = "irn";
function jn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Up };
}
function xi(t) {
  const e = hp[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Fp = Object.defineProperty, Co = Object.getOwnPropertySymbols, Mp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, To = (t, e, r) => e in t ? Fp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, jp = (t, e) => {
  for (var r in e || (e = {}))
    Mp.call(e, r) && To(t, r, e[r]);
  if (Co)
    for (var r of Co(e))
      $p.call(e, r) && To(t, r, e[r]);
  return t;
};
function qp(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = t[n];
      r[s] = u;
    }
  }), r;
}
function zp(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), n = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", u = ti.parse(s);
  return { protocol: i, topic: Bp(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: qp(u) };
}
function Bp(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Kp(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((n) => {
    const s = r + e + n;
    t[n] && (i[s] = t[n]);
  }), i;
}
function Hp(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ti.stringify(jp({ symKey: t.symKey }, Kp(t.relay)));
}
function Lr(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, n] = r.split(":");
    e.push(`${i}:${n}`);
  }), e;
}
function Vp(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Lr(r.accounts));
  }), e;
}
function Wp(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Lr(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function kp(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Lr(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function Gp(t, e) {
  const r = Ai(t, e);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(t))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const Yp = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Jp = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(t, e) {
  const { message: r, code: i } = Jp[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function He(t, e) {
  const { message: r, code: i } = Yp[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function hi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Xr(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function pt(t) {
  return typeof t > "u";
}
function tt(t, e) {
  return e && pt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function ss(t, e) {
  return e && pt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Qp(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
  let s = !0;
  return gr(n, i) ? (i.forEach((u) => {
    const { accounts: c, methods: l, events: h } = t.namespaces[u], p = Lr(c), b = r[u];
    (!gr(lc(u, b), p) || !gr(b.methods, l) || !gr(b.events, h)) && (s = !1);
  }), s) : !1;
}
function Li(t) {
  return tt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Xp(t) {
  if (tt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Li(r);
    }
  }
  return !1;
}
function Zp(t) {
  if (tt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function eg(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function tg(t) {
  return t == null ? void 0 : t.topic;
}
function rg(t, e) {
  let r = null;
  return tt(t == null ? void 0 : t.publicKey, !1) || (r = G("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Ro(t) {
  let e = !0;
  return hi(t) ? t.length && (e = t.every((r) => tt(r, !1))) : e = !1, e;
}
function ig(t, e, r) {
  let i = null;
  return hi(e) && e.length ? e.forEach((n) => {
    i || Li(n) || (i = He("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : Li(t) || (i = He("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function ng(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([n, s]) => {
    if (i)
      return;
    const u = ig(n, lc(n, s), `${e} ${r}`);
    u && (i = u);
  }), i;
}
function sg(t, e) {
  let r = null;
  return hi(t) ? t.forEach((i) => {
    r || Xp(i) || (r = He("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = He("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function og(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = sg(i == null ? void 0 : i.accounts, `${e} namespace`);
    n && (r = n);
  }), r;
}
function ag(t, e) {
  let r = null;
  return Ro(t == null ? void 0 : t.methods) ? Ro(t == null ? void 0 : t.events) || (r = He("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = He("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function mc(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = ag(i, `${e}, namespace`);
    n && (r = n);
  }), r;
}
function cg(t, e, r) {
  let i = null;
  if (t && Xr(t)) {
    const n = mc(t, e);
    n && (i = n);
    const s = ng(t, e, r);
    s && (i = s);
  } else
    i = G("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function Ai(t, e) {
  let r = null;
  if (t && Xr(t)) {
    const i = mc(t, e);
    i && (r = i);
    const n = og(t, e);
    n && (r = n);
  } else
    r = G("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function vc(t) {
  return tt(t.protocol, !0);
}
function ug(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && hi(t) && t.length && t.forEach((i) => {
    r = vc(i);
  }), r;
}
function lg(t) {
  return typeof t == "number";
}
function mt(t) {
  return typeof t < "u" && typeof t !== null;
}
function hg(t) {
  return !(!t || typeof t != "object" || !t.code || !ss(t.code, !1) || !t.message || !tt(t.message, !1));
}
function fg(t) {
  return !(pt(t) || !tt(t.method, !1));
}
function dg(t) {
  return !(pt(t) || pt(t.result) && pt(t.error) || !ss(t.id, !1) || !tt(t.jsonrpc, !1));
}
function pg(t) {
  return !(pt(t) || !tt(t.name, !1));
}
function No(t, e) {
  return !(!Li(e) || !Vp(t).includes(e));
}
function gg(t, e, r) {
  return tt(r, !1) ? Wp(t, e).includes(r) : !1;
}
function yg(t, e, r) {
  return tt(r, !1) ? kp(t, e).includes(r) : !1;
}
function Po(t, e, r) {
  let i = null;
  const n = bg(t), s = mg(e), u = Object.keys(n), c = Object.keys(s), l = Lo(Object.keys(t)), h = Lo(Object.keys(e)), p = l.filter((b) => !h.includes(b));
  return p.length && (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), gr(u, c) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((b) => {
    if (!b.includes(":") || i)
      return;
    const w = Lr(e[b].accounts);
    w.includes(b) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${w.toString()}`));
  }), u.forEach((b) => {
    i || (gr(n[b].methods, s[b].methods) ? gr(n[b].events, s[b].events) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${b}`)) : i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${b}`));
  }), i;
}
function bg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((n) => {
      e[n] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Lo(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function mg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = Lr(t[r].accounts);
      i == null || i.forEach((n) => {
        e[n] = { accounts: t[r].accounts.filter((s) => s.includes(`${n}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function vg(t, e) {
  return ss(t, !1) && t <= e.max && t >= e.min;
}
function Uo() {
  const t = li();
  return new Promise((e) => {
    switch (t) {
      case St.browser:
        e(wg());
        break;
      case St.reactNative:
        e(_g());
        break;
      case St.node:
        e(Eg());
        break;
      default:
        e(!0);
    }
  });
}
function wg() {
  return ui() && (navigator == null ? void 0 : navigator.onLine);
}
async function _g() {
  if (ki() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Eg() {
  return !0;
}
function Sg(t) {
  switch (li()) {
    case St.browser:
      Dg(t);
      break;
    case St.reactNative:
      Ig(t);
      break;
  }
}
function Dg(t) {
  ui() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Ig(t) {
  ki() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const fn = {};
let Si = class {
  static get(e) {
    return fn[e];
  }
  static set(e, r) {
    fn[e] = r;
  }
  static delete(e) {
    delete fn[e];
  }
};
const Og = "PARSE_ERROR", xg = "INVALID_REQUEST", Ag = "METHOD_NOT_FOUND", Cg = "INVALID_PARAMS", wc = "INTERNAL_ERROR", os = "SERVER_ERROR", Tg = [-32700, -32600, -32601, -32602, -32603], Zr = {
  [Og]: { code: -32700, message: "Parse error" },
  [xg]: { code: -32600, message: "Invalid Request" },
  [Ag]: { code: -32601, message: "Method not found" },
  [Cg]: { code: -32602, message: "Invalid params" },
  [wc]: { code: -32603, message: "Internal error" },
  [os]: { code: -32e3, message: "Server error" }
}, _c = os;
function Rg(t) {
  return Tg.includes(t);
}
function Fo(t) {
  return Object.keys(Zr).includes(t) ? Zr[t] : Zr[_c];
}
function Ng(t) {
  const e = Object.values(Zr).find((r) => r.code === t);
  return e || Zr[_c];
}
function Pg(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Ec = {}, Kt = {}, Mo;
function Lg() {
  if (Mo)
    return Kt;
  Mo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.isBrowserCryptoAvailable = Kt.getSubtleCrypto = Kt.getBrowerCrypto = void 0;
  function t() {
    return (Et == null ? void 0 : Et.crypto) || (Et == null ? void 0 : Et.msCrypto) || {};
  }
  Kt.getBrowerCrypto = t;
  function e() {
    const i = t();
    return i.subtle || i.webkitSubtle;
  }
  Kt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Kt.isBrowserCryptoAvailable = r, Kt;
}
var Ht = {}, $o;
function Ug() {
  if ($o)
    return Ht;
  $o = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.isBrowser = Ht.isNode = Ht.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Ht.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Ht.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Ht.isBrowser = r, Ht;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(Lg(), t), e.__exportStar(Ug(), t);
})(Ec);
function as(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Sc(t = 6) {
  return BigInt(as(t));
}
function ii(t, e, r) {
  return {
    id: r || as(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function cs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function us(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Fg(e, r)
  };
}
function Fg(t, e) {
  return typeof t > "u" ? Fo(wc) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Fo(os)), { message: t })), typeof e < "u" && (t.data = e), Rg(t.code) && (t = Ng(t.code)), t);
}
class Mg {
}
class $g extends Mg {
  constructor() {
    super();
  }
}
class jg extends $g {
  constructor(e) {
    super();
  }
}
const qg = "^wss?:";
function zg(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Bg(t, e) {
  const r = zg(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function jo(t) {
  return Bg(t, qg);
}
function Kg(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Dc(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function ls(t) {
  return Dc(t) && "method" in t;
}
function Gi(t) {
  return Dc(t) && (kt(t) || Nt(t));
}
function kt(t) {
  return "result" in t;
}
function Nt(t) {
  return "error" in t;
}
class Hg extends jg {
  constructor(e) {
    super(e), this.events = new Lt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(ii(e.method, e.params || [], e.id || Sc().toString()), r);
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
        Nt(s) ? n(s.error) : i(s.result);
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
    this.events.emit("payload", e), Gi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const Vg = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Wg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", qo = (t) => t.split("?")[0], zo = 10, kg = Vg();
class Gg {
  constructor(e) {
    if (this.url = e, this.events = new Lt.EventEmitter(), this.registering = !1, !jo(e))
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
      this.socket.send(Gn(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!jo(e))
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
      const n = Ec.isReactNative() ? void 0 : { rejectUnauthorized: !Kg(e) }, s = new kg(e, [], n);
      Wg() ? s.onerror = (u) => {
        const c = u;
        i(this.emitError(c.error));
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
    const r = typeof e.data == "string" ? ja(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = us(e, n);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Pg(e, qo(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > zo && this.events.setMaxListeners(zo);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${qo(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ui = { exports: {} };
Ui.exports;
(function(t, e) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, c = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", p = "[object Boolean]", b = "[object Date]", w = "[object Error]", _ = "[object Function]", D = "[object GeneratorFunction]", I = "[object Map]", x = "[object Number]", F = "[object Null]", m = "[object Object]", S = "[object Promise]", y = "[object Proxy]", v = "[object RegExp]", f = "[object Set]", o = "[object String]", d = "[object Symbol]", T = "[object Undefined]", R = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", k = "[object Float32Array]", O = "[object Float64Array]", P = "[object Int8Array]", V = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", q = "[object Uint8ClampedArray]", M = "[object Uint16Array]", K = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, J = {};
  J[k] = J[O] = J[P] = J[V] = J[z] = J[$] = J[q] = J[M] = J[K] = !0, J[c] = J[l] = J[U] = J[p] = J[B] = J[b] = J[w] = J[_] = J[I] = J[x] = J[m] = J[v] = J[f] = J[o] = J[R] = !1;
  var ee = typeof Et == "object" && Et && Et.Object === Object && Et, L = typeof self == "object" && self && self.Object === Object && self, N = ee || L || Function("return this")(), A = e && !e.nodeType && e, a = A && !0 && t && !t.nodeType && t, E = a && a.exports === A, W = E && ee.process, Y = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), he = Y && Y.isTypedArray;
  function be(g, C) {
    for (var j = -1, Q = g == null ? 0 : g.length, xe = 0, se = []; ++j < Q; ) {
      var Le = g[j];
      C(Le, j, g) && (se[xe++] = Le);
    }
    return se;
  }
  function de(g, C) {
    for (var j = -1, Q = C.length, xe = g.length; ++j < Q; )
      g[xe + j] = C[j];
    return g;
  }
  function _e(g, C) {
    for (var j = -1, Q = g == null ? 0 : g.length; ++j < Q; )
      if (C(g[j], j, g))
        return !0;
    return !1;
  }
  function Fe(g, C) {
    for (var j = -1, Q = Array(g); ++j < g; )
      Q[j] = C(j);
    return Q;
  }
  function Re(g) {
    return function(C) {
      return g(C);
    };
  }
  function ye(g, C) {
    return g.has(C);
  }
  function pe(g, C) {
    return g == null ? void 0 : g[C];
  }
  function fe(g) {
    var C = -1, j = Array(g.size);
    return g.forEach(function(Q, xe) {
      j[++C] = [xe, Q];
    }), j;
  }
  function ue(g, C) {
    return function(j) {
      return g(C(j));
    };
  }
  function ce(g) {
    var C = -1, j = Array(g.size);
    return g.forEach(function(Q) {
      j[++C] = Q;
    }), j;
  }
  var ae = Array.prototype, oe = Function.prototype, re = Object.prototype, le = N["__core-js_shared__"], ge = oe.toString, ie = re.hasOwnProperty, me = function() {
    var g = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), we = re.toString, Se = RegExp(
    "^" + ge.call(ie).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), De = E ? N.Buffer : void 0, Ee = N.Symbol, Ct = N.Uint8Array, Ut = re.propertyIsEnumerable, Gt = ae.splice, wt = Ee ? Ee.toStringTag : void 0, ir = Object.getOwnPropertySymbols, Ur = De ? De.isBuffer : void 0, di = ue(Object.keys, Object), Me = _r(N, "DataView"), Ne = _r(N, "Map"), $e = _r(N, "Promise"), je = _r(N, "Set"), qe = _r(N, "WeakMap"), Pe = _r(Object, "create"), Ve = sr(Me), We = sr(Ne), ke = sr($e), Ge = sr(je), Ye = sr(qe), Ke = Ee ? Ee.prototype : void 0, ze = Ke ? Ke.valueOf : void 0;
  function Ae(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function Je() {
    this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
  }
  function Qe(g) {
    var C = this.has(g) && delete this.__data__[g];
    return this.size -= C ? 1 : 0, C;
  }
  function Yc(g) {
    var C = this.__data__;
    if (Pe) {
      var j = C[g];
      return j === i ? void 0 : j;
    }
    return ie.call(C, g) ? C[g] : void 0;
  }
  function Jc(g) {
    var C = this.__data__;
    return Pe ? C[g] !== void 0 : ie.call(C, g);
  }
  function Qc(g, C) {
    var j = this.__data__;
    return this.size += this.has(g) ? 0 : 1, j[g] = Pe && C === void 0 ? i : C, this;
  }
  Ae.prototype.clear = Je, Ae.prototype.delete = Qe, Ae.prototype.get = Yc, Ae.prototype.has = Jc, Ae.prototype.set = Qc;
  function zt(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function Xc() {
    this.__data__ = [], this.size = 0;
  }
  function Zc(g) {
    var C = this.__data__, j = gi(C, g);
    if (j < 0)
      return !1;
    var Q = C.length - 1;
    return j == Q ? C.pop() : Gt.call(C, j, 1), --this.size, !0;
  }
  function eu(g) {
    var C = this.__data__, j = gi(C, g);
    return j < 0 ? void 0 : C[j][1];
  }
  function tu(g) {
    return gi(this.__data__, g) > -1;
  }
  function ru(g, C) {
    var j = this.__data__, Q = gi(j, g);
    return Q < 0 ? (++this.size, j.push([g, C])) : j[Q][1] = C, this;
  }
  zt.prototype.clear = Xc, zt.prototype.delete = Zc, zt.prototype.get = eu, zt.prototype.has = tu, zt.prototype.set = ru;
  function nr(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function iu() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (Ne || zt)(),
      string: new Ae()
    };
  }
  function nu(g) {
    var C = yi(this, g).delete(g);
    return this.size -= C ? 1 : 0, C;
  }
  function su(g) {
    return yi(this, g).get(g);
  }
  function ou(g) {
    return yi(this, g).has(g);
  }
  function au(g, C) {
    var j = yi(this, g), Q = j.size;
    return j.set(g, C), this.size += j.size == Q ? 0 : 1, this;
  }
  nr.prototype.clear = iu, nr.prototype.delete = nu, nr.prototype.get = su, nr.prototype.has = ou, nr.prototype.set = au;
  function pi(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.__data__ = new nr(); ++C < j; )
      this.add(g[C]);
  }
  function cu(g) {
    return this.__data__.set(g, i), this;
  }
  function uu(g) {
    return this.__data__.has(g);
  }
  pi.prototype.add = pi.prototype.push = cu, pi.prototype.has = uu;
  function Yt(g) {
    var C = this.__data__ = new zt(g);
    this.size = C.size;
  }
  function lu() {
    this.__data__ = new zt(), this.size = 0;
  }
  function hu(g) {
    var C = this.__data__, j = C.delete(g);
    return this.size = C.size, j;
  }
  function fu(g) {
    return this.__data__.get(g);
  }
  function du(g) {
    return this.__data__.has(g);
  }
  function pu(g, C) {
    var j = this.__data__;
    if (j instanceof zt) {
      var Q = j.__data__;
      if (!Ne || Q.length < r - 1)
        return Q.push([g, C]), this.size = ++j.size, this;
      j = this.__data__ = new nr(Q);
    }
    return j.set(g, C), this.size = j.size, this;
  }
  Yt.prototype.clear = lu, Yt.prototype.delete = hu, Yt.prototype.get = fu, Yt.prototype.has = du, Yt.prototype.set = pu;
  function gu(g, C) {
    var j = bi(g), Q = !j && Tu(g), xe = !j && !Q && Xi(g), se = !j && !Q && !xe && Os(g), Le = j || Q || xe || se, Xe = Le ? Fe(g.length, String) : [], rt = Xe.length;
    for (var Te in g)
      (C || ie.call(g, Te)) && !(Le && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Te == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Te == "offset" || Te == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      se && (Te == "buffer" || Te == "byteLength" || Te == "byteOffset") || // Skip index properties.
      Iu(Te, rt))) && Xe.push(Te);
    return Xe;
  }
  function gi(g, C) {
    for (var j = g.length; j--; )
      if (Es(g[j][0], C))
        return j;
    return -1;
  }
  function yu(g, C, j) {
    var Q = C(g);
    return bi(g) ? Q : de(Q, j(g));
  }
  function Fr(g) {
    return g == null ? g === void 0 ? T : F : wt && wt in Object(g) ? Su(g) : Cu(g);
  }
  function ms(g) {
    return Mr(g) && Fr(g) == c;
  }
  function vs(g, C, j, Q, xe) {
    return g === C ? !0 : g == null || C == null || !Mr(g) && !Mr(C) ? g !== g && C !== C : bu(g, C, j, Q, vs, xe);
  }
  function bu(g, C, j, Q, xe, se) {
    var Le = bi(g), Xe = bi(C), rt = Le ? l : Jt(g), Te = Xe ? l : Jt(C);
    rt = rt == c ? m : rt, Te = Te == c ? m : Te;
    var _t = rt == m, Tt = Te == m, st = rt == Te;
    if (st && Xi(g)) {
      if (!Xi(C))
        return !1;
      Le = !0, _t = !1;
    }
    if (st && !_t)
      return se || (se = new Yt()), Le || Os(g) ? ws(g, C, j, Q, xe, se) : _u(g, C, rt, j, Q, xe, se);
    if (!(j & n)) {
      var It = _t && ie.call(g, "__wrapped__"), Ot = Tt && ie.call(C, "__wrapped__");
      if (It || Ot) {
        var Qt = It ? g.value() : g, Bt = Ot ? C.value() : C;
        return se || (se = new Yt()), xe(Qt, Bt, j, Q, se);
      }
    }
    return st ? (se || (se = new Yt()), Eu(g, C, j, Q, xe, se)) : !1;
  }
  function mu(g) {
    if (!Is(g) || xu(g))
      return !1;
    var C = Ss(g) ? Se : H;
    return C.test(sr(g));
  }
  function vu(g) {
    return Mr(g) && Ds(g.length) && !!J[Fr(g)];
  }
  function wu(g) {
    if (!Au(g))
      return di(g);
    var C = [];
    for (var j in Object(g))
      ie.call(g, j) && j != "constructor" && C.push(j);
    return C;
  }
  function ws(g, C, j, Q, xe, se) {
    var Le = j & n, Xe = g.length, rt = C.length;
    if (Xe != rt && !(Le && rt > Xe))
      return !1;
    var Te = se.get(g);
    if (Te && se.get(C))
      return Te == C;
    var _t = -1, Tt = !0, st = j & s ? new pi() : void 0;
    for (se.set(g, C), se.set(C, g); ++_t < Xe; ) {
      var It = g[_t], Ot = C[_t];
      if (Q)
        var Qt = Le ? Q(Ot, It, _t, C, g, se) : Q(It, Ot, _t, g, C, se);
      if (Qt !== void 0) {
        if (Qt)
          continue;
        Tt = !1;
        break;
      }
      if (st) {
        if (!_e(C, function(Bt, or) {
          if (!ye(st, or) && (It === Bt || xe(It, Bt, j, Q, se)))
            return st.push(or);
        })) {
          Tt = !1;
          break;
        }
      } else if (!(It === Ot || xe(It, Ot, j, Q, se))) {
        Tt = !1;
        break;
      }
    }
    return se.delete(g), se.delete(C), Tt;
  }
  function _u(g, C, j, Q, xe, se, Le) {
    switch (j) {
      case B:
        if (g.byteLength != C.byteLength || g.byteOffset != C.byteOffset)
          return !1;
        g = g.buffer, C = C.buffer;
      case U:
        return !(g.byteLength != C.byteLength || !se(new Ct(g), new Ct(C)));
      case p:
      case b:
      case x:
        return Es(+g, +C);
      case w:
        return g.name == C.name && g.message == C.message;
      case v:
      case o:
        return g == C + "";
      case I:
        var Xe = fe;
      case f:
        var rt = Q & n;
        if (Xe || (Xe = ce), g.size != C.size && !rt)
          return !1;
        var Te = Le.get(g);
        if (Te)
          return Te == C;
        Q |= s, Le.set(g, C);
        var _t = ws(Xe(g), Xe(C), Q, xe, se, Le);
        return Le.delete(g), _t;
      case d:
        if (ze)
          return ze.call(g) == ze.call(C);
    }
    return !1;
  }
  function Eu(g, C, j, Q, xe, se) {
    var Le = j & n, Xe = _s(g), rt = Xe.length, Te = _s(C), _t = Te.length;
    if (rt != _t && !Le)
      return !1;
    for (var Tt = rt; Tt--; ) {
      var st = Xe[Tt];
      if (!(Le ? st in C : ie.call(C, st)))
        return !1;
    }
    var It = se.get(g);
    if (It && se.get(C))
      return It == C;
    var Ot = !0;
    se.set(g, C), se.set(C, g);
    for (var Qt = Le; ++Tt < rt; ) {
      st = Xe[Tt];
      var Bt = g[st], or = C[st];
      if (Q)
        var xs = Le ? Q(or, Bt, st, C, g, se) : Q(Bt, or, st, g, C, se);
      if (!(xs === void 0 ? Bt === or || xe(Bt, or, j, Q, se) : xs)) {
        Ot = !1;
        break;
      }
      Qt || (Qt = st == "constructor");
    }
    if (Ot && !Qt) {
      var mi = g.constructor, vi = C.constructor;
      mi != vi && "constructor" in g && "constructor" in C && !(typeof mi == "function" && mi instanceof mi && typeof vi == "function" && vi instanceof vi) && (Ot = !1);
    }
    return se.delete(g), se.delete(C), Ot;
  }
  function _s(g) {
    return yu(g, Pu, Du);
  }
  function yi(g, C) {
    var j = g.__data__;
    return Ou(C) ? j[typeof C == "string" ? "string" : "hash"] : j.map;
  }
  function _r(g, C) {
    var j = pe(g, C);
    return mu(j) ? j : void 0;
  }
  function Su(g) {
    var C = ie.call(g, wt), j = g[wt];
    try {
      g[wt] = void 0;
      var Q = !0;
    } catch {
    }
    var xe = we.call(g);
    return Q && (C ? g[wt] = j : delete g[wt]), xe;
  }
  var Du = ir ? function(g) {
    return g == null ? [] : (g = Object(g), be(ir(g), function(C) {
      return Ut.call(g, C);
    }));
  } : Lu, Jt = Fr;
  (Me && Jt(new Me(new ArrayBuffer(1))) != B || Ne && Jt(new Ne()) != I || $e && Jt($e.resolve()) != S || je && Jt(new je()) != f || qe && Jt(new qe()) != R) && (Jt = function(g) {
    var C = Fr(g), j = C == m ? g.constructor : void 0, Q = j ? sr(j) : "";
    if (Q)
      switch (Q) {
        case Ve:
          return B;
        case We:
          return I;
        case ke:
          return S;
        case Ge:
          return f;
        case Ye:
          return R;
      }
    return C;
  });
  function Iu(g, C) {
    return C = C ?? u, !!C && (typeof g == "number" || Z.test(g)) && g > -1 && g % 1 == 0 && g < C;
  }
  function Ou(g) {
    var C = typeof g;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? g !== "__proto__" : g === null;
  }
  function xu(g) {
    return !!me && me in g;
  }
  function Au(g) {
    var C = g && g.constructor, j = typeof C == "function" && C.prototype || re;
    return g === j;
  }
  function Cu(g) {
    return we.call(g);
  }
  function sr(g) {
    if (g != null) {
      try {
        return ge.call(g);
      } catch {
      }
      try {
        return g + "";
      } catch {
      }
    }
    return "";
  }
  function Es(g, C) {
    return g === C || g !== g && C !== C;
  }
  var Tu = ms(function() {
    return arguments;
  }()) ? ms : function(g) {
    return Mr(g) && ie.call(g, "callee") && !Ut.call(g, "callee");
  }, bi = Array.isArray;
  function Ru(g) {
    return g != null && Ds(g.length) && !Ss(g);
  }
  var Xi = Ur || Uu;
  function Nu(g, C) {
    return vs(g, C);
  }
  function Ss(g) {
    if (!Is(g))
      return !1;
    var C = Fr(g);
    return C == _ || C == D || C == h || C == y;
  }
  function Ds(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= u;
  }
  function Is(g) {
    var C = typeof g;
    return g != null && (C == "object" || C == "function");
  }
  function Mr(g) {
    return g != null && typeof g == "object";
  }
  var Os = he ? Re(he) : vu;
  function Pu(g) {
    return Ru(g) ? gu(g) : wu(g);
  }
  function Lu() {
    return [];
  }
  function Uu() {
    return !1;
  }
  t.exports = Nu;
})(Ui, Ui.exports);
var Yg = Ui.exports;
const Jg = /* @__PURE__ */ Vn(Yg);
function Qg(t, e) {
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
  var c = t.length, l = t.charAt(0), h = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, x = 0, F = 0, m = D.length; F !== m && D[F] === 0; )
      F++, I++;
    for (var S = (m - F) * p + 1 >>> 0, y = new Uint8Array(S); F !== m; ) {
      for (var v = D[F], f = 0, o = S - 1; (v !== 0 || f < x) && o !== -1; o--, f++)
        v += 256 * y[o] >>> 0, y[o] = v % c >>> 0, v = v / c >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      x = f, F++;
    }
    for (var d = S - x; d !== S && y[d] === 0; )
      d++;
    for (var T = l.repeat(I); d < S; ++d)
      T += t.charAt(y[d]);
    return T;
  }
  function w(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var x = 0, F = 0; D[I] === l; )
        x++, I++;
      for (var m = (D.length - I) * h + 1 >>> 0, S = new Uint8Array(m); D[I]; ) {
        var y = r[D.charCodeAt(I)];
        if (y === 255)
          return;
        for (var v = 0, f = m - 1; (y !== 0 || v < F) && f !== -1; f--, v++)
          y += c * S[f] >>> 0, S[f] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        F = v, I++;
      }
      if (D[I] !== " ") {
        for (var o = m - F; o !== m && S[o] === 0; )
          o++;
        for (var d = new Uint8Array(x + (m - o)), T = x; o !== m; )
          d[T++] = S[o++];
        return d;
      }
    }
  }
  function _(D) {
    var I = w(D);
    if (I)
      return I;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b, decodeUnsafe: w, decode: _ };
}
var Xg = Qg, Zg = Xg;
const Ic = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ey = (t) => new TextEncoder().encode(t), ty = (t) => new TextDecoder().decode(t);
class ry {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class iy {
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
    return Oc(this, e);
  }
}
class ny {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Oc(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Oc = (t, e) => new ny({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class sy {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new ry(e, r, i), this.decoder = new iy(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Yi = ({ name: t, prefix: e, encode: r, decode: i }) => new sy(t, e, r, i), fi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = Zg(r, e);
  return Yi({ prefix: t, name: e, encode: i, decode: (s) => Ic(n(s)) });
}, oy = (t, e, r, i) => {
  const n = {};
  for (let p = 0; p < e.length; ++p)
    n[e[p]] = p;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let c = 0, l = 0, h = 0;
  for (let p = 0; p < s; ++p) {
    const b = n[t[p]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, c += r, c >= 8 && (c -= 8, u[h++] = 255 & l >> c);
  }
  if (c >= r || 255 & l << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, ay = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, c = 0;
  for (let l = 0; l < t.length; ++l)
    for (c = c << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & c >> u];
  if (u && (s += e[n & c << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Yi({ prefix: e, name: t, encode(n) {
  return ay(n, i, r);
}, decode(n) {
  return oy(n, i, r, t);
} }), cy = Yi({ prefix: "\0", name: "identity", encode: (t) => ty(t), decode: (t) => ey(t) });
var uy = Object.freeze({ __proto__: null, identity: cy });
const ly = nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hy = Object.freeze({ __proto__: null, base2: ly });
const fy = nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var dy = Object.freeze({ __proto__: null, base8: fy });
const py = fi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var gy = Object.freeze({ __proto__: null, base10: py });
const yy = nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), by = nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var my = Object.freeze({ __proto__: null, base16: yy, base16upper: by });
const vy = nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), wy = nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), _y = nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Ey = nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Sy = nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Dy = nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Iy = nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Oy = nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), xy = nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ay = Object.freeze({ __proto__: null, base32: vy, base32upper: wy, base32pad: _y, base32padupper: Ey, base32hex: Sy, base32hexupper: Dy, base32hexpad: Iy, base32hexpadupper: Oy, base32z: xy });
const Cy = fi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Ty = fi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ry = Object.freeze({ __proto__: null, base36: Cy, base36upper: Ty });
const Ny = fi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Py = fi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Ly = Object.freeze({ __proto__: null, base58btc: Ny, base58flickr: Py });
const Uy = nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Fy = nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), My = nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), $y = nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var jy = Object.freeze({ __proto__: null, base64: Uy, base64pad: Fy, base64url: My, base64urlpad: $y });
const xc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), qy = xc.reduce((t, e, r) => (t[r] = e, t), []), zy = xc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function By(t) {
  return t.reduce((e, r) => (e += qy[r], e), "");
}
function Ky(t) {
  const e = [];
  for (const r of t) {
    const i = zy[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Hy = Yi({ prefix: "🚀", name: "base256emoji", encode: By, decode: Ky });
var Vy = Object.freeze({ __proto__: null, base256emoji: Hy }), Wy = Ac, Bo = 128, ky = 127, Gy = ~ky, Yy = Math.pow(2, 31);
function Ac(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= Yy; )
    e[r++] = t & 255 | Bo, t /= 128;
  for (; t & Gy; )
    e[r++] = t & 255 | Bo, t >>>= 7;
  return e[r] = t | 0, Ac.bytes = r - i + 1, e;
}
var Jy = qn, Qy = 128, Ko = 127;
function qn(t, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, c = t.length;
  do {
    if (s >= c)
      throw qn.bytes = 0, new RangeError("Could not decode varint");
    u = t[s++], r += n < 28 ? (u & Ko) << n : (u & Ko) * Math.pow(2, n), n += 7;
  } while (u >= Qy);
  return qn.bytes = s - i, r;
}
var Xy = Math.pow(2, 7), Zy = Math.pow(2, 14), e0 = Math.pow(2, 21), t0 = Math.pow(2, 28), r0 = Math.pow(2, 35), i0 = Math.pow(2, 42), n0 = Math.pow(2, 49), s0 = Math.pow(2, 56), o0 = Math.pow(2, 63), a0 = function(t) {
  return t < Xy ? 1 : t < Zy ? 2 : t < e0 ? 3 : t < t0 ? 4 : t < r0 ? 5 : t < i0 ? 6 : t < n0 ? 7 : t < s0 ? 8 : t < o0 ? 9 : 10;
}, c0 = { encode: Wy, decode: Jy, encodingLength: a0 }, Cc = c0;
const Ho = (t, e, r = 0) => (Cc.encode(t, e, r), e), Vo = (t) => Cc.encodingLength(t), zn = (t, e) => {
  const r = e.byteLength, i = Vo(t), n = i + Vo(r), s = new Uint8Array(n + r);
  return Ho(t, s, 0), Ho(r, s, i), s.set(e, n), new u0(t, r, e, s);
};
class u0 {
  constructor(e, r, i, n) {
    this.code = e, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Tc = ({ name: t, code: e, encode: r }) => new l0(t, e, r);
class l0 {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? zn(this.code, r) : r.then((i) => zn(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Rc = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), h0 = Tc({ name: "sha2-256", code: 18, encode: Rc("SHA-256") }), f0 = Tc({ name: "sha2-512", code: 19, encode: Rc("SHA-512") });
var d0 = Object.freeze({ __proto__: null, sha256: h0, sha512: f0 });
const Nc = 0, p0 = "identity", Pc = Ic, g0 = (t) => zn(Nc, Pc(t)), y0 = { code: Nc, name: p0, encode: Pc, digest: g0 };
var b0 = Object.freeze({ __proto__: null, identity: y0 });
new TextEncoder(), new TextDecoder();
const Wo = { ...uy, ...hy, ...dy, ...gy, ...my, ...Ay, ...Ry, ...Ly, ...jy, ...Vy };
({ ...d0, ...b0 });
function Lc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function m0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Lc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Uc(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const ko = Uc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), dn = Uc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = m0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), v0 = { utf8: ko, "utf-8": ko, hex: Wo.base16, latin1: dn, ascii: dn, binary: dn, ...Wo };
function w0(t, e = "utf8") {
  const r = v0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Lc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Fc = "wc", _0 = 2, hs = "core", er = `${Fc}@2:${hs}:`, E0 = { name: hs, logger: "error" }, S0 = { database: ":memory:" }, D0 = "crypto", Go = "client_ed25519_seed", I0 = X.ONE_DAY, O0 = "keychain", x0 = "0.3", A0 = "messages", C0 = "0.3", T0 = X.SIX_HOURS, R0 = "publisher", Mc = "irn", N0 = "error", $c = "wss://relay.walletconnect.com", Yo = "wss://relay.walletconnect.org", P0 = "relayer", ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, L0 = "_subscription", Vt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, U0 = X.ONE_SECOND, F0 = "2.10.0", M0 = 1e4, $0 = "0.3", j0 = "WALLETCONNECT_CLIENT_ID", qt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, q0 = "subscription", z0 = "0.3", B0 = X.FIVE_SECONDS * 1e3, K0 = "pairing", H0 = "0.3", Wr = { wc_pairingDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 0 } } }, jt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, V0 = "history", W0 = "0.3", k0 = "expirer", xt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, G0 = "0.3", pn = "verify-api", Ci = "https://verify.walletconnect.com", Jo = "https://verify.walletconnect.org";
class Y0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = O0, this.version = x0, this.initialized = !1, this.storagePrefix = er, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, pc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? gc(e) : void 0;
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
class J0 {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = D0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = po(n);
      return ec(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = dp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = po(s), c = $n();
      return await _d(c, n, I0, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const c = this.getPrivateKey(n), l = pp(c, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || gp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const c = dc(u), l = Gn(s);
      if (Io(c)) {
        const w = c.senderPublicKey, _ = c.receiverPublicKey;
        n = await this.generateSharedKey(w, _);
      }
      const h = this.getSymKey(n), { type: p, senderPublicKey: b } = c;
      return bp({ type: p, symKey: h, message: l, senderPublicKey: b });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const c = wp(s, u);
      if (Io(c)) {
        const l = c.receiverPublicKey, h = c.senderPublicKey;
        n = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(n), h = mp({ symKey: l, encoded: s });
        return ja(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = Pi(n);
      return ci(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Pi(n);
      return s.senderPublicKey ? yt(s.senderPublicKey, gt) : void 0;
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.keychain = i || new Y0(this.core, this.logger);
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
      e = this.keychain.get(Go);
    } catch {
      e = $n(), await this.keychain.set(Go, e);
    }
    return w0(e, "base16");
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
class Q0 extends Sh {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = A0, this.version = C0, this.initialized = !1, this.storagePrefix = er, this.init = async () => {
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
      const s = Cr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Cr(n);
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
    await this.core.storage.setItem(this.storageKey, pc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? gc(e) : void 0;
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
class X0 extends Dh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Lt.EventEmitter(), this.name = R0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const c = (s == null ? void 0 : s.ttl) || T0, l = jn(s), h = (s == null ? void 0 : s.prompt) || !1, p = (s == null ? void 0 : s.tag) || 0, b = (s == null ? void 0 : s.id) || Sc().toString(), w = { topic: i, message: n, opts: { ttl: c, relay: l, prompt: h, tag: p, id: b } }, _ = setTimeout(() => this.queue.set(b, w), this.publishTimeout);
        try {
          await await ri(this.rpcPublish(i, n, c, l, h, p, b), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(b), this.relayer.events.emit(ht.publish, w);
        } catch (D) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = s == null ? void 0 : s.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(b), D;
          return;
        } finally {
          clearTimeout(_);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      } catch (c) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(c), c;
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
  rpcPublish(e, r, i, n, s, u, c) {
    var l, h, p, b;
    const w = { method: xi(n.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: s, tag: u }, id: c };
    return pt((l = w.params) == null ? void 0 : l.prompt) && ((h = w.params) == null || delete h.prompt), pt((p = w.params) == null ? void 0 : p.tag) && ((b = w.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: w }), this.relayer.request(w);
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
    this.relayer.core.heartbeat.on(Rr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(ht.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(ht.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Z0 {
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
var e1 = Object.defineProperty, t1 = Object.defineProperties, r1 = Object.getOwnPropertyDescriptors, Qo = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, Xo = (t, e, r) => e in t ? e1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kr = (t, e) => {
  for (var r in e || (e = {}))
    i1.call(e, r) && Xo(t, r, e[r]);
  if (Qo)
    for (var r of Qo(e))
      n1.call(e, r) && Xo(t, r, e[r]);
  return t;
}, gn = (t, e) => t1(t, r1(e));
class s1 extends xh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Z0(), this.events = new Lt.EventEmitter(), this.name = q0, this.version = z0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = er, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = jn(n), u = { topic: i, relay: s };
        this.pending.set(i, u);
        const c = await this.rpcSubscribe(i, s);
        return this.onSubscribe(c, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } }), c;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), typeof (n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((n, s) => {
      const u = new X.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const c = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= B0 && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
      const n = jn(i);
      await this.rpcUnsubscribe(e, r, n);
      const s = He("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: xi(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await ri(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
    return Cr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: xi(r.protocol).batchSubscribe, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ri(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, i) {
    const n = { method: xi(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, gn(kr({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, kr({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, kr({}, r)), this.topicMap.set(r.topic, e), this.events.emit(qt.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(qt.deleted, gn(kr({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(qt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(qt.resubscribed);
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
    hi(r) && this.onBatchSubscribe(r.map((i, n) => gn(kr({}, e[n]), { id: i })));
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
    this.relayer.core.heartbeat.on(Rr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(ht.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(qt.created, async (e) => {
      const r = qt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(qt.deleted, async (e) => {
      const r = qt.deleted;
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
var o1 = Object.defineProperty, Zo = Object.getOwnPropertySymbols, a1 = Object.prototype.hasOwnProperty, c1 = Object.prototype.propertyIsEnumerable, ea = (t, e, r) => e in t ? o1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, u1 = (t, e) => {
  for (var r in e || (e = {}))
    a1.call(e, r) && ea(t, r, e[r]);
  if (Zo)
    for (var r of Zo(e))
      c1.call(e, r) && ea(t, r, e[r]);
  return t;
};
class l1 extends Ih {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Lt.EventEmitter(), this.name = P0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(ht.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Vt.payload, this.onPayloadHandler), this.provider.on(Vt.connect, this.onConnectHandler), this.provider.on(Vt.disconnect, this.onDisconnectHandler), this.provider.on(Vt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ve.generateChildLogger(e.logger, this.name) : ve.pino(ve.getDefaultLoggerOptions({ level: e.logger || N0 })), this.messages = new Q0(this.logger, e.core), this.subscriber = new s1(this, this.logger), this.publisher = new X0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || $c, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Yo}...`), await this.restartTransport(Yo);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, M0);
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
      this.subscriber.once(qt.created, (u) => {
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await ri(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(qt.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, i) => {
          try {
            await ri(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Vt.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Uo())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Hg(new Gg(Rp({ sdkVersion: F0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), ls(e)) {
      if (!e.method.endsWith(L0))
        return;
      const r = e.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(u1({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      Gi(e) && this.events.emit(ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = cs(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Vt.payload, this.onPayloadHandler), this.provider.off(Vt.connect, this.onConnectHandler), this.provider.off(Vt.disconnect, this.onDisconnectHandler), this.provider.off(Vt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Uo();
    Sg(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, X.toMiliseconds(U0)));
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
var h1 = Object.defineProperty, ta = Object.getOwnPropertySymbols, f1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, ra = (t, e, r) => e in t ? h1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ia = (t, e) => {
  for (var r in e || (e = {}))
    f1.call(e, r) && ra(t, r, e[r]);
  if (ta)
    for (var r of ta(e))
      d1.call(e, r) && ra(t, r, e[r]);
  return t;
};
class Ji extends Oh {
  constructor(e, r, i, n = er, s = void 0) {
    super(e, r, i, n), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = $0, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !pt(u) ? this.map.set(this.getKey(u), u) : eg(u) ? this.map.set(u.id, u) : tg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, c) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: c }), this.map.set(u, c), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((c) => Object.keys(u).every((l) => Jg(c[l], u[l]))) : this.values), this.update = async (u, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: c });
      const l = ia(ia({}, this.getData(u)), c);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, c) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: c }), this.map.delete(u), await this.persist());
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
class p1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = K0, this.version = H0, this.events = new Na(), this.initialized = !1, this.storagePrefix = er, this.ignoredPayloadTypes = [wr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = $n(), n = await this.core.crypto.setSymKey(i), s = Rt(X.FIVE_MINUTES), u = { protocol: Mc }, c = { topic: n, expiry: s, relay: u, active: !1 }, l = Hp({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, c), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = zp(i.uri);
      if (this.pairings.keys.includes(n))
        throw new Error(`Pairing already exists: ${n}`);
      if (this.core.crypto.hasKeys(n))
        throw new Error(`Keychain already exists: ${n}`);
      const c = Rt(X.FIVE_MINUTES), l = { topic: n, relay: u, expiry: c, active: !1 };
      return await this.pairings.set(n, l), await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: u }), this.core.expirer.set(n, c), i.activatePairing && await this.activate({ topic: n }), l;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Rt(X.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: n }), this.core.expirer.set(i, n);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: c, reject: l } = Ir();
        this.events.once(Be("pairing_ping", s), ({ error: h }) => {
          h ? l(h) : c();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: n }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: n });
    }, this.updateMetadata = async ({ topic: i, metadata: n }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: n });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: n } = i;
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", He("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = ii(n, s), c = await this.core.crypto.encode(i, u), l = Wr[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, c, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = cs(i, s), c = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = Wr[l.request.method].res;
      await this.core.relayer.publish(n, c, h), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = us(i, s), c = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = Wr[l.request.method] ? Wr[l.request.method].res : Wr.unregistered_method.res;
      await this.core.relayer.publish(n, c, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, He("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => Zt(n.expiry));
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
        kt(n) ? this.events.emit(Be("pairing_ping", s), {}) : Nt(n) && this.events.emit(Be("pairing_ping", s), { error: n.error });
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
        const c = He("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(s, i, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(He("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!mt(i)) {
        const { message: n } = G("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Zp(i.uri)) {
        const { message: n } = G("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!mt(i)) {
        const { message: s } = G("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!mt(i)) {
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
      if (Zt(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = G("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.pairings = new Ji(this.core, this.logger, this.name, this.storagePrefix);
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
    this.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: i } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      try {
        ls(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Gi(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(xt.expired, async (e) => {
      const { topic: r } = bc(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class g1 extends Eh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Lt.EventEmitter(), this.name = V0, this.version = W0, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Rt(X.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(jt.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Nt(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(jt.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(jt.deleted, s);
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
      const i = { topic: r.topic, request: ii(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(jt.sync);
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
    this.events.on(jt.created, (e) => {
      const r = jt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(jt.updated, (e) => {
      const r = jt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(jt.deleted, (e) => {
      const r = jt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Rr.HEARTBEAT_EVENTS.pulse, () => {
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
class y1 extends Ah {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Lt.EventEmitter(), this.name = k0, this.version = G0, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
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
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(xt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(xt.deleted, { target: n, expiration: s });
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
      return Np(e);
    if (typeof e == "number")
      return Pp(e);
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
    await this.setExpirations(this.values), this.events.emit(xt.sync);
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
    this.expirations.delete(e), this.events.emit(xt.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Rr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(xt.created, (e) => {
      const r = xt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(xt.expired, (e) => {
      const r = xt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(xt.deleted, (e) => {
      const r = xt.deleted;
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
class b1 extends Ch {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = pn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || ki() || !ui())
        return;
      const n = (i == null ? void 0 : i.verifyUrl) || Ci;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Jo;
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
      const n = (i == null ? void 0 : i.verifyUrl) || Ci;
      let s = "";
      try {
        s = await this.fetchAttestation(i.attestationId, n);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.warn(u), s = await this.fetchAttestation(i.attestationId, Jo);
      }
      return s;
    }, this.fetchAttestation = async (i, n) => {
      var s;
      this.logger.info(`resolving attestation: ${i} from url: ${n}`);
      const u = this.startAbortTimer(X.ONE_SECOND * 2), c = await fetch(`${n}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(u), c.status === 200 ? (s = await c.json()) == null ? void 0 : s.origin : "";
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
        if (document.getElementById(pn))
          return s();
        window.addEventListener("message", n);
        const u = document.createElement("iframe");
        u.id = pn, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", n), u("verify iframe load timeout");
      }, X.toMiliseconds(X.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = ve.generateChildLogger(r, this.name), this.verifyUrl = Ci, this.abortController = new AbortController(), this.isDevEnv = ns() && process.env.IS_VITEST;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), X.toMiliseconds(e));
  }
}
var m1 = Object.defineProperty, na = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, w1 = Object.prototype.propertyIsEnumerable, sa = (t, e, r) => e in t ? m1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oa = (t, e) => {
  for (var r in e || (e = {}))
    v1.call(e, r) && sa(t, r, e[r]);
  if (na)
    for (var r of na(e))
      w1.call(e, r) && sa(t, r, e[r]);
  return t;
};
class fs extends _h {
  constructor(e) {
    super(e), this.protocol = Fc, this.version = _0, this.name = hs, this.events = new Lt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || $c;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || E0.logger }));
    this.logger = ve.generateChildLogger(r, this.name), this.heartbeat = new Rr.HeartBeat(), this.crypto = new J0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new g1(this, this.logger), this.expirer = new y1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new nh(oa(oa({}, S0), e == null ? void 0 : e.storageOptions)), this.relayer = new l1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new p1(this, this.logger), this.verify = new b1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new fs(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(j0, i), r;
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
const _1 = fs, jc = "wc", qc = 2, zc = "client", ds = `${jc}@${qc}:${zc}:`, yn = { name: zc, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, aa = "WALLETCONNECT_DEEPLINK_CHOICE", E1 = "proposal", S1 = "Proposal expired", D1 = "session", Di = X.SEVEN_DAYS, I1 = "engine", Gr = { wc_sessionPropose: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, bn = { min: X.FIVE_MINUTES, max: X.SEVEN_DAYS }, Wt = { idle: "IDLE", active: "ACTIVE" }, O1 = "request", x1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var A1 = Object.defineProperty, C1 = Object.defineProperties, T1 = Object.getOwnPropertyDescriptors, ca = Object.getOwnPropertySymbols, R1 = Object.prototype.hasOwnProperty, N1 = Object.prototype.propertyIsEnumerable, ua = (t, e, r) => e in t ? A1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bt = (t, e) => {
  for (var r in e || (e = {}))
    R1.call(e, r) && ua(t, r, e[r]);
  if (ca)
    for (var r of ca(e))
      N1.call(e, r) && ua(t, r, e[r]);
  return t;
}, Yr = (t, e) => C1(t, T1(e));
class P1 extends Rh {
  constructor(e) {
    super(e), this.name = I1, this.events = new Na(), this.initialized = !1, this.ignoredPayloadTypes = [wr], this.requestQueue = { state: Wt.idle, queue: [] }, this.sessionRequestQueue = { state: Wt.idle, queue: [] }, this.requestQueueDelay = X.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Gr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = Yr(bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: c, relays: l } = i;
      let h = n, p, b = !1;
      if (h && (b = this.client.core.pairing.pairings.get(h).active), !h || !b) {
        const { topic: S, uri: y } = await this.client.core.pairing.create();
        h = S, p = y;
      }
      const w = await this.client.core.crypto.generateKeyPair(), _ = bt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Mc }], proposer: { publicKey: w, metadata: this.client.metadata } }, c && { sessionProperties: c }), { reject: D, resolve: I, done: x } = Ir(X.FIVE_MINUTES, S1);
      if (this.events.once(Be("session_connect"), async ({ error: S, session: y }) => {
        if (S)
          D(S);
        else if (y) {
          y.self.publicKey = w;
          const v = Yr(bt({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
          await this.client.session.set(y.topic, v), await this.setExpiry(y.topic, y.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: y.peer.metadata }), I(v);
        }
      }), !h) {
        const { message: S } = G("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(S);
      }
      const F = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: _ }), m = Rt(X.FIVE_MINUTES);
      return await this.setProposal(F, bt({ id: F, expiry: m }, _)), { uri: p, approval: x };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, c = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: h, requiredNamespaces: p, optionalNamespaces: b } = c;
      l = l || "", Xr(p) || (p = Gp(s, "approve()"));
      const w = await this.client.core.crypto.generateKeyPair(), _ = h.publicKey, D = await this.client.core.crypto.generateSharedKey(w, _);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult({ id: i, topic: l, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: w } }), await this.client.proposal.delete(i, He("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = bt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: p, optionalNamespaces: b, pairingTopic: l, controller: { publicKey: w, metadata: this.client.metadata }, expiry: Rt(Di) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest({ topic: D, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      const x = Yr(bt({}, I), { topic: D, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: w });
      return await this.client.session.set(D, x), await this.setExpiry(D, Rt(Di)), { topic: D, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, He("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n } }), { done: u, resolve: c, reject: l } = Ir();
      return this.events.once(Be("session_update", s), ({ error: h }) => {
        h ? l(h) : c();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: c } = Ir();
      return this.events.once(Be("session_extend", n), ({ error: l }) => {
        l ? c(l) : u();
      }), await this.setExpiry(i, Rt(Di)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, c = as(), { done: l, resolve: h, reject: p } = Ir(u);
      return this.events.once(Be("session_request", c), ({ error: b, result: w }) => {
        b ? p(b) : h(w);
      }), await Promise.all([new Promise(async (b) => {
        await this.sendRequest({ clientRpcId: c, topic: s, method: "wc_sessionRequest", params: { request: n, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((w) => p(w)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: c }), b();
      }), new Promise(async (b) => {
        const w = await this.client.core.storage.getItem(aa);
        Lp({ id: c, topic: s, wcDeepLink: w }), b();
      }), l()]).then((b) => b[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      kt(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Nt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: c } = Ir();
        this.events.once(Be("session_ping", n), ({ error: l }) => {
          l ? c(l) : u();
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
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: He("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Qp(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), n = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, c;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((c = s.peerMetadata) == null ? void 0 : c.url) === r.peer.metadata.url && s.topic && s.topic !== i.topic;
          });
          if (n.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`), await Promise.all(n.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r, i) => {
      const { self: n } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, He("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(aa).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, He("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = Wt.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = Gr.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Rt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: u, relayRpcId: c, clientRpcId: l, throwOnFailedPublish: h } = r, p = ii(n, s, l);
      if (ui() && x1.includes(n)) {
        const _ = Cr(JSON.stringify(p));
        this.client.core.verify.register({ attestationId: _ });
      }
      const b = await this.client.core.crypto.encode(i, p), w = Gr[n].req;
      return u && (w.ttl = u), c && (w.id = c), this.client.core.history.set(i, p), h ? (w.internal = Yr(bt({}, w.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, b, w)) : this.client.core.relayer.publish(i, b, w).catch((_) => this.client.logger.error(_)), p.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: u } = r, c = cs(i, s), l = await this.client.core.crypto.encode(n, c), h = await this.client.core.history.get(n, i), p = Gr[h.request.method].res;
      u ? (p.internal = Yr(bt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, l, p)) : this.client.core.relayer.publish(n, l, p).catch((b) => this.client.logger.error(b)), await this.client.core.history.resolve(c);
    }, this.sendError = async (r, i, n) => {
      const s = us(r, n), u = await this.client.core.crypto.encode(i, s), c = await this.client.core.history.get(i, r), l = Gr[c.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        Zt(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        Zt(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Wt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Wt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = Wt.idle;
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
        this.isValidConnect(bt({}, i.params));
        const u = Rt(X.FIVE_MINUTES), c = bt({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, c);
        const l = Cr(JSON.stringify(i)), h = await this.getVerifyContext(l, c.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: c, verifyContext: h });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (kt(i)) {
        const { result: s } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const c = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const h = await this.client.core.crypto.generateSharedKey(c, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const p = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p }), await this.client.core.pairing.activate({ topic: r });
      } else
        Nt(i) && (await this.client.proposal.delete(n, He("USER_DISCONNECTED")), this.events.emit(Be("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: c, expiry: l, namespaces: h, requiredNamespaces: p, optionalNamespaces: b, sessionProperties: w, pairingTopic: _ } = i.params, D = bt({ topic: r, relay: u, expiry: l, namespaces: h, acknowledged: !0, pairingTopic: _, requiredNamespaces: p, optionalNamespaces: b, controller: c.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: c.publicKey, metadata: c.metadata } }, w && { sessionProperties: w });
        await this.sendResult({ id: i.id, topic: r, result: !0 }), this.events.emit(Be("session_connect"), { session: D }), this.cleanupDuplicatePairings(D);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      kt(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Be("session_approve", n), {})) : Nt(i) && (await this.client.session.delete(r, He("USER_DISCONNECTED")), this.events.emit(Be("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const u = `${r}_session_update`, c = Si.get(u);
        if (c && this.isRequestOutOfSync(c, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(bt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: n }), Si.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      kt(i) ? this.events.emit(Be("session_update", n), {}) : Nt(i) && this.events.emit(Be("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Rt(Di)), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      kt(i) ? this.events.emit(Be("session_extend", n), {}) : Nt(i) && this.events.emit(Be("session_extend", n), { error: i.error });
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
        kt(i) ? this.events.emit(Be("session_ping", n), {}) : Nt(i) && this.events.emit(Be("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(ht.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: n, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(bt({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: n, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      kt(i) ? this.events.emit(Be("session_request", n), { result: i.result }) : Nt(i) && this.events.emit(Be("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const u = `${r}_session_event_${s.event.name}`, c = Si.get(u);
        if (c && this.isRequestOutOfSync(c, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(bt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), Si.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Wt.idle, this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === Wt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Cr(JSON.stringify(ii("wc_sessionRequest", s, i))), c = this.client.session.get(n), l = await this.getVerifyContext(u, c.peer.metadata);
        this.sessionRequestQueue.state = Wt.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: c } = r;
      if (pt(i) || await this.isValidPairingTopic(i), !ug(c, !0)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(l);
      }
      !pt(n) && Xr(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !pt(s) && Xr(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = cg(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!mt(r))
        throw new Error(G("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), l = Ai(n, "approve()");
      if (l)
        throw new Error(l.message);
      const h = Po(c.requiredNamespaces, n, "approve()");
      if (h)
        throw new Error(h.message);
      if (!tt(s, !0)) {
        const { message: p } = G("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(p);
      }
      pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!mt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !hg(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!mt(r)) {
        const { message: h } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!vc(i)) {
        const { message: h } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const c = rg(n, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const l = Ai(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (Zt(u)) {
        const { message: h } = G("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = Ai(n, "update()");
      if (u)
        throw new Error(u.message);
      const c = Po(s.requiredNamespaces, n, "update()");
      if (c)
        throw new Error(c.message);
    }, this.isValidExtend = async (r) => {
      if (!mt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: c } = this.client.session.get(i);
      if (!No(c, s)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!fg(n)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!gg(c, s, n.method)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !vg(u, bn)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${bn.min} and ${bn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!mt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !dg(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!mt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!mt(r)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(c);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!No(u, s)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(c);
      }
      if (!pg(n)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(c);
      }
      if (!yg(u, s, n.name)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(c);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!mt(r)) {
        const { message: n } = G("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const n = { verified: { verifyUrl: i.verifyUrl || Ci, validation: "UNKNOWN", origin: i.url || "" } };
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
    this.client.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      try {
        ls(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Gi(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(xt.expired, async (e) => {
      const { topic: r, id: i } = bc(e.target);
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
    if (Zt(this.client.core.pairing.pairings.get(e).expiry)) {
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
    if (Zt(this.client.session.get(e).expiry)) {
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
    if (!lg(e)) {
      const { message: r } = G("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Zt(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = G("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class L1 extends Ji {
  constructor(e, r) {
    super(e, r, E1, ds), this.core = e, this.logger = r;
  }
}
class U1 extends Ji {
  constructor(e, r) {
    super(e, r, D1, ds), this.core = e, this.logger = r;
  }
}
class F1 extends Ji {
  constructor(e, r) {
    super(e, r, O1, ds, (i) => i.id), this.core = e, this.logger = r;
  }
}
class ps extends Th {
  constructor(e) {
    super(e), this.protocol = jc, this.version = qc, this.name = yn.name, this.events = new Lt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (e == null ? void 0 : e.name) || yn.name, this.metadata = (e == null ? void 0 : e.metadata) || xp();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || yn.logger }));
    this.core = (e == null ? void 0 : e.core) || new _1(e), this.logger = ve.generateChildLogger(r, this.name), this.session = new U1(this.core, this.logger), this.proposal = new L1(this.core, this.logger), this.pendingRequest = new F1(this.core, this.logger), this.engine = new P1(this);
  }
  static async init(e) {
    const r = new ps(e);
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
var M1 = Object.defineProperty, $1 = Object.defineProperties, j1 = Object.getOwnPropertyDescriptors, la = Object.getOwnPropertySymbols, q1 = Object.prototype.hasOwnProperty, z1 = Object.prototype.propertyIsEnumerable, ha = (t, e, r) => e in t ? M1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, B1 = (t, e) => {
  for (var r in e || (e = {}))
    q1.call(e, r) && ha(t, r, e[r]);
  if (la)
    for (var r of la(e))
      z1.call(e, r) && ha(t, r, e[r]);
  return t;
}, K1 = (t, e) => $1(t, j1(e)), gs = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Ce = (t, e, r) => (gs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), dr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Fi = (t, e, r, i) => (gs(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), ct = (t, e, r) => (gs(t, e, "access private method"), r), pr, Or, Jr, et, Bn, Bc, ut, dt, Kn, fa;
class H1 {
  constructor(e) {
    dr(this, Bn), dr(this, ut), dr(this, Kn), dr(this, pr, void 0), dr(this, Or, void 0), dr(this, Jr, void 0), dr(this, et, void 0), Fi(this, pr, e), Fi(this, Or, ct(this, Bn, Bc).call(this)), ct(this, ut, dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: i } = e;
    return new Promise(async (n, s) => {
      await ct(this, ut, dt).call(this);
      const u = Ce(this, Or).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: c, approval: l } = await Ce(this, et).connect(e);
      if (c) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: p }) => {
          p && p.forEach((b) => h.add(b));
        }), i && Object.values(i).forEach(({ chains: p }) => {
          p && p.forEach((b) => h.add(b));
        }), await Ce(this, Or).openModal({ uri: c, chains: Array.from(h) });
      }
      try {
        const h = await l();
        n(h);
      } catch (h) {
        s(h);
      } finally {
        u(), Ce(this, Or).closeModal();
      }
    });
  }
  async disconnect(e) {
    await ct(this, ut, dt).call(this), await Ce(this, et).disconnect(e);
  }
  async request(e) {
    return await ct(this, ut, dt).call(this), await Ce(this, et).request(e);
  }
  async getSessions() {
    return await ct(this, ut, dt).call(this), Ce(this, et).session.getAll();
  }
  async getSession() {
    return await ct(this, ut, dt).call(this), Ce(this, et).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).on("session_event", e);
  }
  async offSessionEvent(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).off("session_update", e);
  }
  async onSessionDelete(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await ct(this, ut, dt).call(this), Ce(this, et).off("session_expire", e);
  }
}
pr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakSet(), Bc = function() {
  const { modalOptions: t, projectId: e } = Ce(this, pr);
  return new Sl(K1(B1({}, t), { projectId: e }));
}, ut = /* @__PURE__ */ new WeakSet(), dt = async function() {
  return Ce(this, et) ? !0 : (!Ce(this, Jr) && typeof window < "u" && Fi(this, Jr, ct(this, Kn, fa).call(this)), Ce(this, Jr));
}, Kn = /* @__PURE__ */ new WeakSet(), fa = async function() {
  Fi(this, et, await ps.init({ metadata: Ce(this, pr).metadata, projectId: Ce(this, pr).projectId, relayUrl: Ce(this, pr).relayUrl }));
  const t = await Ce(this, et).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Kc = [
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
], ys = ["aleo:1"], Hc = ["chainChanged", "accountSelected", "accountSynced"], V1 = "f0aaeffe71b636da453fce042d79d723", da = "https://walletconnect.puzzle.online/", W1 = {
  standaloneChains: ys,
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: da
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: da
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, xb = {
  requiredNamespaces: {
    aleo: {
      methods: Kc,
      chains: ys,
      events: Hc
    }
  }
};
function k1(t) {
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
const pa = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), i = (l, h) => {
    const p = typeof l == "function" ? l(e) : l;
    if (!Object.is(p, e)) {
      const b = e;
      e = h ?? typeof p != "object" ? p : Object.assign({}, e, p), r.forEach((w) => w(e, b));
    }
  }, n = () => e, c = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return e = t(i, n, c), c;
}, G1 = (t) => t ? pa(t) : pa;
var Hn = { exports: {} }, mn = {}, Ii = { exports: {} }, vn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function Y1() {
  if (ga)
    return vn;
  ga = 1;
  var t = $i;
  function e(b, w) {
    return b === w && (b !== 0 || 1 / b === 1 / w) || b !== b && w !== w;
  }
  var r = typeof Object.is == "function" ? Object.is : e, i = t.useState, n = t.useEffect, s = t.useLayoutEffect, u = t.useDebugValue;
  function c(b, w) {
    var _ = w(), D = i({ inst: { value: _, getSnapshot: w } }), I = D[0].inst, x = D[1];
    return s(function() {
      I.value = _, I.getSnapshot = w, l(I) && x({ inst: I });
    }, [b, _, w]), n(function() {
      return l(I) && x({ inst: I }), b(function() {
        l(I) && x({ inst: I });
      });
    }, [b]), u(_), _;
  }
  function l(b) {
    var w = b.getSnapshot;
    b = b.value;
    try {
      var _ = w();
      return !r(b, _);
    } catch {
      return !0;
    }
  }
  function h(b, w) {
    return w();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : c;
  return vn.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p, vn;
}
var wn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function J1() {
  return ya || (ya = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = $i, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(S) {
      {
        for (var y = arguments.length, v = new Array(y > 1 ? y - 1 : 0), f = 1; f < y; f++)
          v[f - 1] = arguments[f];
        i("error", S, v);
      }
    }
    function i(S, y, v) {
      {
        var f = e.ReactDebugCurrentFrame, o = f.getStackAddendum();
        o !== "" && (y += "%s", v = v.concat([o]));
        var d = v.map(function(T) {
          return String(T);
        });
        d.unshift("Warning: " + y), Function.prototype.apply.call(console[S], console, d);
      }
    }
    function n(S, y) {
      return S === y && (S !== 0 || 1 / S === 1 / y) || S !== S && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = t.useState, c = t.useEffect, l = t.useLayoutEffect, h = t.useDebugValue, p = !1, b = !1;
    function w(S, y, v) {
      p || t.startTransition !== void 0 && (p = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var f = y();
      if (!b) {
        var o = y();
        s(f, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), b = !0);
      }
      var d = u({
        inst: {
          value: f,
          getSnapshot: y
        }
      }), T = d[0].inst, R = d[1];
      return l(function() {
        T.value = f, T.getSnapshot = y, _(T) && R({
          inst: T
        });
      }, [S, f, y]), c(function() {
        _(T) && R({
          inst: T
        });
        var U = function() {
          _(T) && R({
            inst: T
          });
        };
        return S(U);
      }, [S]), h(f), f;
    }
    function _(S) {
      var y = S.getSnapshot, v = S.value;
      try {
        var f = y();
        return !s(v, f);
      } catch {
        return !0;
      }
    }
    function D(S, y, v) {
      return y();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !I, F = x ? D : w, m = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : F;
    wn.useSyncExternalStore = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wn;
}
var ba;
function Vc() {
  return ba || (ba = 1, process.env.NODE_ENV === "production" ? Ii.exports = Y1() : Ii.exports = J1()), Ii.exports;
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
var ma;
function Q1() {
  if (ma)
    return mn;
  ma = 1;
  var t = $i, e = Vc();
  function r(h, p) {
    return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, c = t.useMemo, l = t.useDebugValue;
  return mn.useSyncExternalStoreWithSelector = function(h, p, b, w, _) {
    var D = s(null);
    if (D.current === null) {
      var I = { hasValue: !1, value: null };
      D.current = I;
    } else
      I = D.current;
    D = c(function() {
      function F(f) {
        if (!m) {
          if (m = !0, S = f, f = w(f), _ !== void 0 && I.hasValue) {
            var o = I.value;
            if (_(o, f))
              return y = o;
          }
          return y = f;
        }
        if (o = y, i(S, f))
          return o;
        var d = w(f);
        return _ !== void 0 && _(o, d) ? o : (S = f, y = d);
      }
      var m = !1, S, y, v = b === void 0 ? null : b;
      return [function() {
        return F(p());
      }, v === null ? void 0 : function() {
        return F(v());
      }];
    }, [p, b, w, _]);
    var x = n(h, D[0], D[1]);
    return u(function() {
      I.hasValue = !0, I.value = x;
    }, [x]), l(x), x;
  }, mn;
}
var _n = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function X1() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = $i, e = Vc();
    function r(p, b) {
      return p === b && (p !== 0 || 1 / p === 1 / b) || p !== p && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, c = t.useMemo, l = t.useDebugValue;
    function h(p, b, w, _, D) {
      var I = s(null), x;
      I.current === null ? (x = {
        hasValue: !1,
        value: null
      }, I.current = x) : x = I.current;
      var F = c(function() {
        var v = !1, f, o, d = function(B) {
          if (!v) {
            v = !0, f = B;
            var k = _(B);
            if (D !== void 0 && x.hasValue) {
              var O = x.value;
              if (D(O, k))
                return o = O, O;
            }
            return o = k, k;
          }
          var P = f, V = o;
          if (i(P, B))
            return V;
          var z = _(B);
          return D !== void 0 && D(V, z) ? V : (f = B, o = z, z);
        }, T = w === void 0 ? null : w, R = function() {
          return d(b());
        }, U = T === null ? void 0 : function() {
          return d(T());
        };
        return [R, U];
      }, [b, w, _, D]), m = F[0], S = F[1], y = n(p, m, S);
      return u(function() {
        x.hasValue = !0, x.value = y;
      }, [y]), l(y), y;
    }
    _n.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _n;
}
process.env.NODE_ENV === "production" ? Hn.exports = Q1() : Hn.exports = X1();
var Z1 = Hn.exports;
const eb = /* @__PURE__ */ Vn(Z1), { useSyncExternalStoreWithSelector: tb } = eb;
function rb(t, e = t.getState, r) {
  const i = tb(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return Fu(i), i;
}
const wa = (t) => {
  const e = typeof t == "function" ? G1(t) : t, r = (i, n) => rb(e, i, n);
  return Object.assign(r, e), r;
}, ib = (t) => t ? wa(t) : wa;
function nb(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var s;
      const u = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), c = (s = r.getItem(n)) != null ? s : null;
      return c instanceof Promise ? c.then(u) : u(c);
    },
    setItem: (n, s) => r.setItem(
      n,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (n) => r.removeItem(n)
  };
}
const ni = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(i) {
        return ni(i)(r);
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
        return ni(i)(r);
      }
    };
  }
}, sb = (t, e) => (r, i, n) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (x) => x,
    version: 0,
    merge: (x, F) => ({
      ...F,
      ...x
    }),
    ...e
  }, u = !1;
  const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h;
  try {
    h = s.getStorage();
  } catch {
  }
  if (!h)
    return t(
      (...x) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...x);
      },
      i,
      n
    );
  const p = ni(s.serialize), b = () => {
    const x = s.partialize({ ...i() });
    let F;
    const m = p({ state: x, version: s.version }).then(
      (S) => h.setItem(s.name, S)
    ).catch((S) => {
      F = S;
    });
    if (F)
      throw F;
    return m;
  }, w = n.setState;
  n.setState = (x, F) => {
    w(x, F), b();
  };
  const _ = t(
    (...x) => {
      r(...x), b();
    },
    i,
    n
  );
  let D;
  const I = () => {
    var x;
    if (!h)
      return;
    u = !1, c.forEach((m) => m(i()));
    const F = ((x = s.onRehydrateStorage) == null ? void 0 : x.call(s, i())) || void 0;
    return ni(h.getItem.bind(h))(s.name).then((m) => {
      if (m)
        return s.deserialize(m);
    }).then((m) => {
      if (m)
        if (typeof m.version == "number" && m.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              m.state,
              m.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return m.state;
    }).then((m) => {
      var S;
      return D = s.merge(
        m,
        (S = i()) != null ? S : _
      ), r(D, !0), b();
    }).then(() => {
      F == null || F(D, void 0), u = !0, l.forEach((m) => m(D));
    }).catch((m) => {
      F == null || F(void 0, m);
    });
  };
  return n.persist = {
    setOptions: (x) => {
      s = {
        ...s,
        ...x
      }, x.getStorage && (h = x.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => I(),
    hasHydrated: () => u,
    onHydrate: (x) => (c.add(x), () => {
      c.delete(x);
    }),
    onFinishHydration: (x) => (l.add(x), () => {
      l.delete(x);
    })
  }, I(), D || _;
}, ob = (t, e) => (r, i, n) => {
  let s = {
    storage: nb(() => localStorage),
    partialize: (I) => I,
    version: 0,
    merge: (I, x) => ({
      ...x,
      ...I
    }),
    ...e
  }, u = !1;
  const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...I) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...I);
      },
      i,
      n
    );
  const p = () => {
    const I = s.partialize({ ...i() });
    return h.setItem(s.name, {
      state: I,
      version: s.version
    });
  }, b = n.setState;
  n.setState = (I, x) => {
    b(I, x), p();
  };
  const w = t(
    (...I) => {
      r(...I), p();
    },
    i,
    n
  );
  let _;
  const D = () => {
    var I, x;
    if (!h)
      return;
    u = !1, c.forEach((m) => {
      var S;
      return m((S = i()) != null ? S : w);
    });
    const F = ((x = s.onRehydrateStorage) == null ? void 0 : x.call(s, (I = i()) != null ? I : w)) || void 0;
    return ni(h.getItem.bind(h))(s.name).then((m) => {
      if (m)
        if (typeof m.version == "number" && m.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              m.state,
              m.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return m.state;
    }).then((m) => {
      var S;
      return _ = s.merge(
        m,
        (S = i()) != null ? S : w
      ), r(_, !0), p();
    }).then(() => {
      F == null || F(_, void 0), _ = i(), u = !0, l.forEach((m) => m(_));
    }).catch((m) => {
      F == null || F(void 0, m);
    });
  };
  return n.persist = {
    setOptions: (I) => {
      s = {
        ...s,
        ...I
      }, I.storage && (h = I.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => D(),
    hasHydrated: () => u,
    onHydrate: (I) => (c.add(I), () => {
      c.delete(I);
    }),
    onFinishHydration: (I) => (l.add(I), () => {
      l.delete(I);
    })
  }, s.skipHydration || D(), _ || w;
}, ab = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? sb(t, e) : ob(t, e), cb = ab, Qi = ib()(
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
), Mi = k1();
let Qr;
function Ab(t) {
  Qr = new H1({
    projectId: V1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...W1 }
  }), Qi.setState({ account: void 0 }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Ue() {
  return new Promise((t) => {
    if (Qr)
      t(Qr);
    else {
      const e = setInterval(() => {
        Qr && (clearInterval(e), t(Qr));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function bs(t) {
  yr(() => (Ue().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function ub(t) {
  yr(() => (Ue().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Wc(t) {
  yr(() => (Ue().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function kc() {
  const [t, e] = xr(void 0);
  return bs((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Wc((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: i } = r.params, n = { ...t, namespaces: i };
      e(n);
    }
  }), ub((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), yr(() => {
    async function r() {
      const n = await (await Ue()).getSession();
      e(n);
    }
    return r(), Mi.on("session_change", r), () => {
      Mi.off("session_change", r);
    };
  }, []), t;
}
function Gc(t) {
  yr(() => (Ue().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const _a = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, Cb = () => {
  const t = "aleo:1", [e, r] = Qi((h) => [h.account, h.setAccount]), [i, n] = xr(void 0), [s, u] = xr(!1), c = kc(), l = async () => {
    if (c)
      try {
        u(!0);
        const p = await (await Ue()).request({
          topic: c == null ? void 0 : c.topic,
          chainId: t,
          request: {
            id: 1,
            jsonrpc: "2.0",
            method: "getSelectedAccount"
          }
        });
        r(p.account), n(p.error);
      } catch (h) {
        n(h.message);
      } finally {
        u(!1);
      }
  };
  return Gc(({ params: h, topic: p }) => {
    if (h.event.name === "accountSelected" && c && c.topic === p) {
      const w = h.event.data, _ = h.chainId.split(":")[0], D = h.chainId.split(":")[1];
      r({
        network: _,
        chainId: D,
        address: w,
        shortenedAddress: _a(w)
      });
    }
  }), Wc(({ params: h, topic: p }) => {
    const b = h.event.data, w = h.chainId.split(":")[0], _ = h.chainId.split(":")[1];
    r({
      network: w,
      chainId: _,
      address: b,
      shortenedAddress: _a(b)
    });
  }), bs(({ params: h, topic: p }) => {
    r(void 0);
  }), yr(() => {
    c && !s && l();
  }, [c]), {
    account: e,
    error: i,
    loading: s
  };
}, Tb = () => {
  const t = "aleo:1", [e, r] = xr(void 0), [i, n] = xr(void 0), [s, u] = xr(!1), c = kc(), l = async () => {
    try {
      u(!0);
      const p = await (await Ue()).request({
        topic: c == null ? void 0 : c.topic,
        chainId: t,
        request: {
          id: 1,
          jsonrpc: "2.0",
          method: "getBalance",
          params: {
            assetId: void 0
          }
        }
      });
      r(p.balances), n(p.error);
    } catch (h) {
      n(h.message);
    } finally {
      u(!1);
    }
  };
  return Gc(({ params: h, topic: p }) => {
    h.event.name === "accountSynced" && c && c.topic === p && !s && l();
  }), bs(({ params: h, topic: p }) => {
    r(void 0);
  }), yr(() => {
    c && !s && l(), c || r(void 0);
  }, [c]), { balances: e, error: i, loading: s };
}, Rb = async () => {
  const t = await Ue(), e = await t.getSession(), r = "aleo:1";
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
    return Qi.setState({ account: i.account }), i;
  } catch (i) {
    const n = i.message;
    return console.error("getAccount error", n), { error: n };
  }
}, Nb = async () => {
  const t = await Ue(), e = await t.getSession(), r = "aleo:1";
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
}, Pb = async () => {
  const t = await Ue();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Kc,
          chains: ys,
          events: Hc
        }
      }
    });
    return Mi.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, Lb = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, Ub = async () => {
  const t = await Ue(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
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
}, Fb = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, Mb = async () => {
  const t = await Ue(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: He("USER_DISCONNECTED"),
      topic: e.topic
    }), Mi.emit("session_change"), Qi.setState({ account: void 0 }), {};
  } catch (r) {
    const i = r.message;
    return console.error("error disconnecting", i), { error: i };
  }
}, $b = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, jb = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, qb = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const i = await Ue(), n = await (i == null ? void 0 : i.getSession()), s = "aleo:1";
  if (!n || !s || !i)
    return { error: "no session, chainId, or connection" };
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const u = async (c = 0) => await i.request({
    topic: n.topic,
    chainId: s,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: c
      }
    }
  });
  try {
    return await u();
  } catch (c) {
    const l = c.message;
    return console.error("getRecords error", l), { error: l };
  }
}, zb = async ({
  message: t,
  address: e
}) => {
  const r = await Ue(), i = await (r == null ? void 0 : r.getSession()), n = "aleo:1";
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
}, Bb = 50, lb = [
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
], Ea = tl.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Ea !== t && (lb.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Ea));
} catch (t) {
  console.error(t);
}
export {
  Nb as A,
  Pb as B,
  Lb as C,
  Ub as D,
  Fb as E,
  Mb as F,
  $b as G,
  jb as H,
  qb as I,
  zb as J,
  Bb as P,
  ul as R,
  Sa as T,
  lt as a,
  ys as b,
  Ab as c,
  Hc as d,
  Mi as e,
  V1 as f,
  Ue as g,
  da as h,
  W1 as i,
  xb as j,
  _a as k,
  Tb as l,
  bs as m,
  Ms as n,
  db as o,
  Pt as p,
  Gc as q,
  ub as r,
  en as s,
  fb as t,
  Cb as u,
  Wc as v,
  Kc as w,
  kc as x,
  Tr as y,
  Rb as z
};
