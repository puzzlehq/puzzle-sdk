var hu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var vt = (t, e, r) => (hu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ir = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Yt = (t, e, r, n) => (hu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as Wt from "react";
import pn, { useEffect as At, useState as js, useRef as Rp } from "react";
const Tp = Symbol(), du = Object.getPrototypeOf, xa = /* @__PURE__ */ new WeakMap(), Ap = (t) => t && (xa.has(t) ? xa.get(t) : du(t) === Object.prototype || du(t) === Array.prototype), Pp = (t) => Ap(t) && t[Tp] || null, pu = (t, e = !0) => {
  xa.set(t, e);
};
var so = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Zo = (t) => typeof t == "object" && t !== null, nn = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakSet(), Np = (t = Object.is, e = (c, f) => new Proxy(c, f), r = (c) => Zo(c) && !Mi.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), n = (c) => {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      throw c;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (c, f, d = n) => {
  const p = s.get(c);
  if ((p == null ? void 0 : p[0]) === f)
    return p[1];
  const m = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
  return pu(m, !0), s.set(c, [f, m]), Reflect.ownKeys(c).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const E = Reflect.get(c, v), S = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Mi.has(E))
      pu(E, !1);
    else if (E instanceof Promise)
      delete S.value, S.get = () => d(E);
    else if (nn.has(E)) {
      const [A, w] = nn.get(
        E
      );
      S.value = i(
        A,
        w(),
        d
      );
    }
    Object.defineProperty(m, v, S);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (c) => {
  if (!Zo(c))
    throw new Error("object required");
  const f = a.get(c);
  if (f)
    return f;
  let d = o[0];
  const p = /* @__PURE__ */ new Set(), m = (C, T = ++o[0]) => {
    d !== T && (d = T, p.forEach((M) => M(C, T)));
  };
  let v = o[1];
  const E = (C = ++o[1]) => (v !== C && !p.size && (v = C, A.forEach(([T]) => {
    const M = T[1](C);
    M > d && (d = M);
  })), d), S = (C) => (T, M) => {
    const z = [...T];
    z[1] = [C, ...z[1]], m(z, M);
  }, A = /* @__PURE__ */ new Map(), w = (C, T) => {
    if ((so ? "production" : void 0) !== "production" && A.has(C))
      throw new Error("prop listener already exists");
    if (p.size) {
      const M = T[3](S(C));
      A.set(C, [T, M]);
    } else
      A.set(C, [T]);
  }, D = (C) => {
    var T;
    const M = A.get(C);
    M && (A.delete(C), (T = M[1]) == null || T.call(M));
  }, b = (C) => (p.add(C), p.size === 1 && A.forEach(([M, z], G) => {
    if ((so ? "production" : void 0) !== "production" && z)
      throw new Error("remove already exists");
    const R = M[3](S(G));
    A.set(G, [M, R]);
  }), () => {
    p.delete(C), p.size === 0 && A.forEach(([M, z], G) => {
      z && (z(), A.set(G, [M]));
    });
  }), x = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), l = e(x, {
    deleteProperty(C, T) {
      const M = Reflect.get(C, T);
      D(T);
      const z = Reflect.deleteProperty(C, T);
      return z && m(["delete", [T], M]), z;
    },
    set(C, T, M, z) {
      const G = Reflect.has(C, T), R = Reflect.get(C, T, z);
      if (G && (t(R, M) || a.has(M) && t(R, a.get(M))))
        return !0;
      D(T), Zo(M) && (M = Pp(M) || M);
      let L = M;
      if (M instanceof Promise)
        M.then((Q) => {
          M.status = "fulfilled", M.value = Q, m(["resolve", [T], Q]);
        }).catch((Q) => {
          M.status = "rejected", M.reason = Q, m(["reject", [T], Q]);
        });
      else {
        !nn.has(M) && r(M) && (L = u(M));
        const Q = !Mi.has(L) && nn.get(L);
        Q && w(T, Q);
      }
      return Reflect.set(C, T, L, z), m(["set", [T], M, R]), !0;
    }
  });
  a.set(c, l);
  const y = [
    x,
    E,
    i,
    b
  ];
  return nn.set(l, y), Reflect.ownKeys(c).forEach((C) => {
    const T = Object.getOwnPropertyDescriptor(
      c,
      C
    );
    "value" in T && (l[C] = c[C], delete T.value, delete T.writable), Object.defineProperty(x, C, T);
  }), l;
}) => [
  // public functions
  u,
  // shared state
  nn,
  Mi,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [Lp] = Np();
function gn(t = {}) {
  return Lp(t);
}
function Mn(t, e, r) {
  const n = nn.get(t);
  (so ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], a = n[3];
  let o = !1;
  const c = a((f) => {
    if (i.push(f), r) {
      e(i.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, o && e(i.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, c();
  };
}
function Fp(t, e) {
  const r = nn.get(t);
  (so ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const St = gn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Uf = { state: St, subscribe(t) {
  return Mn(St, () => t(St));
}, push(t, e) {
  t !== St.view && (St.view = t, e && (St.data = e), St.history.push(t));
}, reset(t) {
  St.view = t, St.history = [t];
}, replace(t) {
  St.history.length > 1 && (St.history[St.history.length - 1] = t, St.view = t);
}, goBack() {
  if (St.history.length > 1) {
    St.history.pop();
    const [t] = St.history.slice(-1);
    St.view = t;
  }
}, setData(t) {
  St.data = t;
} }, $t = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return $t.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return $t.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if ($t.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!$t.isHttpUrl(t))
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
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem($t.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem($t.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Uf.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Up = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ft = gn({ enabled: Up, userSessionId: "", events: [], connectedWalletId: void 0 }), Mp = { state: Ft, subscribe(t) {
  return Mn(Ft.events, () => t(Fp(Ft.events[Ft.events.length - 1])));
}, initialize() {
  Ft.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Ft.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Ft.connectedWalletId = t;
}, click(t) {
  if (Ft.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, track(t) {
  if (Ft.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, view(t) {
  if (Ft.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
} }, Tr = gn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), _r = { state: Tr, subscribe(t) {
  return Mn(Tr, () => t(Tr));
}, setChains(t) {
  Tr.chains = t;
}, setWalletConnectUri(t) {
  Tr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Tr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Tr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Tr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Tr.isUiLoaded = t;
}, setIsAuth(t) {
  Tr.isAuth = t;
} }, ji = gn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), as = { state: ji, subscribe(t) {
  return Mn(ji, () => t(ji));
}, setConfig(t) {
  var e, r;
  Mp.initialize(), _r.setChains(t.chains), _r.setIsAuth(!!t.enableAuthMode), _r.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), _r.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), $t.setModalVersionInStorage(), Object.assign(ji, t);
} };
var jp = Object.defineProperty, gu = Object.getOwnPropertySymbols, $p = Object.prototype.hasOwnProperty, kp = Object.prototype.propertyIsEnumerable, yu = (t, e, r) => e in t ? jp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, qp = (t, e) => {
  for (var r in e || (e = {}))
    $p.call(e, r) && yu(t, r, e[r]);
  if (gu)
    for (var r of gu(e))
      kp.call(e, r) && yu(t, r, e[r]);
  return t;
};
const Da = "https://explorer-api.walletconnect.com", Oa = "wcm", Ia = "js-2.6.2";
async function $i(t, e) {
  const r = qp({ sdkType: Oa, sdkVersion: Ia }, e), n = new URL(t, Da);
  return n.searchParams.append("projectId", as.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const bn = { async getDesktopListings(t) {
  return $i("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return $i("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return $i("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return $i("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Da}/w3m/v1/getWalletImage/${t}?projectId=${as.state.projectId}&sdkType=${Oa}&sdkVersion=${Ia}`;
}, getAssetImageUrl(t) {
  return `${Da}/w3m/v1/getAssetImage/${t}?projectId=${as.state.projectId}&sdkType=${Oa}&sdkVersion=${Ia}`;
} };
var zp = Object.defineProperty, mu = Object.getOwnPropertySymbols, Bp = Object.prototype.hasOwnProperty, Vp = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? zp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kp = (t, e) => {
  for (var r in e || (e = {}))
    Bp.call(e, r) && vu(t, r, e[r]);
  if (mu)
    for (var r of mu(e))
      Vp.call(e, r) && vu(t, r, e[r]);
  return t;
};
const bu = $t.isMobile(), Ar = gn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), zD = { state: Ar, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = as.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Ar.recomendedWallets;
  if ($t.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await bn.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), u = t.indexOf(a.id);
      return o - u;
    }), Ar.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = _r.state, s = r == null ? void 0 : r.join(","), i = $t.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: $t.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = bu ? await bn.getMobileListings(a) : await bn.getDesktopListings(a);
    Ar.recomendedWallets = Object.values(o);
  }
  return Ar.recomendedWallets;
}, async getWallets(t) {
  const e = Kp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = as.state, { recomendedWallets: s } = Ar;
  if (n === "ALL")
    return Ar.wallets;
  s.length ? e.excludedIds = s.map((d) => d.id).join(",") : $t.isArray(r) && (e.excludedIds = r.join(",")), $t.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), _r.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: u } = bu ? await bn.getMobileListings(e) : await bn.getDesktopListings(e), c = Object.values(o), f = a ? "search" : "wallets";
  return Ar[f] = { listings: [...Ar[f].listings, ...c], total: u, page: i ?? 1 }, { listings: c, total: u };
}, getWalletImageUrl(t) {
  return bn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return bn.getAssetImageUrl(t);
}, resetSearch() {
  Ar.search = { listings: [], total: 0, page: 1 };
} }, zn = gn({ open: !1 }), Yo = { state: zn, subscribe(t) {
  return Mn(zn, () => t(zn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = _r.state;
    if ($t.removeWalletConnectDeepLink(), _r.setWalletConnectUri(t == null ? void 0 : t.uri), _r.setChains(t == null ? void 0 : t.chains), Uf.reset("ConnectWallet"), r && n)
      zn.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = _r.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), zn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  zn.open = !1;
} };
var Hp = Object.defineProperty, wu = Object.getOwnPropertySymbols, Wp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, _u = (t, e, r) => e in t ? Hp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qp = (t, e) => {
  for (var r in e || (e = {}))
    Wp.call(e, r) && _u(t, r, e[r]);
  if (wu)
    for (var r of wu(e))
      Gp.call(e, r) && _u(t, r, e[r]);
  return t;
};
function Zp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Es = gn({ themeMode: Zp() ? "dark" : "light" }), Eu = { state: Es, subscribe(t) {
  return Mn(Es, () => t(Es));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Es.themeMode = e), r && (Es.themeVariables = Qp({}, r));
} }, wn = gn({ open: !1, message: "", variant: "success" }), BD = { state: wn, subscribe(t) {
  return Mn(wn, () => t(wn));
}, openToast(t, e) {
  wn.open = !0, wn.message = t, wn.variant = e;
}, closeToast() {
  wn.open = !1;
} };
let Yp = class {
  constructor(e) {
    this.openModal = Yo.open, this.closeModal = Yo.close, this.subscribeModal = Yo.subscribe, this.setTheme = Eu.setThemeConfig, Eu.setThemeConfig(e), as.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-FZfhKACw.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), _r.setIsUiLoaded(!0);
    }
  }
};
var Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ro(t) {
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
var xc = { exports: {} }, Yn = typeof Reflect == "object" ? Reflect : null, Su = Yn && typeof Yn.apply == "function" ? Yn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Zi;
Yn && typeof Yn.ownKeys == "function" ? Zi = Yn.ownKeys : Object.getOwnPropertySymbols ? Zi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Zi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Jp(t) {
  console && console.warn && console.warn(t);
}
var Mf = Number.isNaN || function(e) {
  return e !== e;
};
function Ke() {
  Ke.init.call(this);
}
xc.exports = Ke;
xc.exports.once = rg;
Ke.EventEmitter = Ke;
Ke.prototype._events = void 0;
Ke.prototype._eventsCount = 0;
Ke.prototype._maxListeners = void 0;
var xu = 10;
function To(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ke, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return xu;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Mf(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    xu = t;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Mf(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function jf(t) {
  return t._maxListeners === void 0 ? Ke.defaultMaxListeners : t._maxListeners;
}
Ke.prototype.getMaxListeners = function() {
  return jf(this);
};
Ke.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var s = e === "error", i = this._events;
  if (i !== void 0)
    s = s && i.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var a;
    if (r.length > 0 && (a = r[0]), a instanceof Error)
      throw a;
    var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw o.context = a, o;
  }
  var u = i[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Su(u, this, r);
  else
    for (var c = u.length, f = Bf(u, c), n = 0; n < c; ++n)
      Su(f[n], this, r);
  return !0;
};
function $f(t, e, r, n) {
  var s, i, a;
  if (To(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = jf(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, Jp(o);
  }
  return t;
}
Ke.prototype.addListener = function(e, r) {
  return $f(this, e, r, !1);
};
Ke.prototype.on = Ke.prototype.addListener;
Ke.prototype.prependListener = function(e, r) {
  return $f(this, e, r, !0);
};
function Xp() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function kf(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Xp.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
Ke.prototype.once = function(e, r) {
  return To(r), this.on(e, kf(this, e, r)), this;
};
Ke.prototype.prependOnceListener = function(e, r) {
  return To(r), this.prependListener(e, kf(this, e, r)), this;
};
Ke.prototype.removeListener = function(e, r) {
  var n, s, i, a, o;
  if (To(r), s = this._events, s === void 0)
    return this;
  if (n = s[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (i = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === r || n[a].listener === r) {
        o = n[a].listener, i = a;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : eg(n, i), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Ke.prototype.off = Ke.prototype.removeListener;
Ke.prototype.removeAllListeners = function(e) {
  var r, n, s;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), a;
    for (s = 0; s < i.length; ++s)
      a = i[s], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function qf(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? tg(s) : Bf(s, s.length);
}
Ke.prototype.listeners = function(e) {
  return qf(this, e, !0);
};
Ke.prototype.rawListeners = function(e) {
  return qf(this, e, !1);
};
Ke.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : zf.call(t, e);
};
Ke.prototype.listenerCount = zf;
function zf(t) {
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
Ke.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Zi(this._events) : [];
};
function Bf(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function eg(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function tg(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function rg(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Vf(t, e, i, { once: !0 }), e !== "error" && ng(t, s, { once: !0 });
  });
}
function ng(t, e, r) {
  typeof t.on == "function" && Vf(t, "error", e, r);
}
function Vf(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var gr = xc.exports;
const gi = /* @__PURE__ */ pi(gr), sg = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, ig = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, og = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ag(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    cg(t);
    return;
  }
  return e;
}
function cg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function ki(t, e = {}) {
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
  if (!og.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (sg.test(t) || ig.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, ag);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function ug(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function xt(t, ...e) {
  try {
    return ug(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function lg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function fg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Yi(t) {
  if (lg(t))
    return String(t);
  if (fg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Yi(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Kf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Ca = "base64:";
function hg(t) {
  if (typeof t == "string")
    return t;
  Kf();
  const e = Buffer.from(t).toString("base64");
  return Ca + e;
}
function dg(t) {
  return typeof t != "string" || !t.startsWith(Ca) ? t : (Kf(), Buffer.from(t.slice(Ca.length), "base64"));
}
function Xt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function pg(...t) {
  return Xt(t.join(":"));
}
function qi(t) {
  return t = Xt(t), t ? t + ":" : "";
}
const gg = "memory", yg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: gg,
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
function mg(t = {}) {
  const e = {
    mounts: { "": t.driver || yg() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (c) => {
    for (const f of e.mountpoints)
      if (c.startsWith(f))
        return {
          base: f,
          relativeKey: c.slice(f.length),
          driver: e.mounts[f]
        };
    return {
      base: "",
      relativeKey: c,
      driver: e.mounts[""]
    };
  }, n = (c, f) => e.mountpoints.filter(
    (d) => d.startsWith(c) || f && c.startsWith(d)
  ).map((d) => ({
    relativeBase: c.length > d.length ? c.slice(d.length) : void 0,
    mountpoint: d,
    driver: e.mounts[d]
  })), s = (c, f) => {
    if (e.watching) {
      f = Xt(f);
      for (const d of e.watchListeners)
        d(c, f);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const c in e.mounts)
        e.unwatch[c] = await Du(
          e.mounts[c],
          s,
          c
        );
    }
  }, a = async () => {
    if (e.watching) {
      for (const c in e.unwatch)
        await e.unwatch[c]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (c, f, d) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let E = p.get(v.base);
      return E || (E = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, E)), E;
    };
    for (const v of c) {
      const E = typeof v == "string", S = Xt(E ? v : v.key), A = E ? void 0 : v.value, w = E || !v.options ? f : { ...f, ...v.options }, D = r(S);
      m(D).items.push({
        key: S,
        value: A,
        relativeKey: D.relativeKey,
        options: w
      });
    }
    return Promise.all([...p.values()].map((v) => d(v))).then(
      (v) => v.flat()
    );
  }, u = {
    // Item
    hasItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.hasItem, d, f);
    },
    getItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.getItem, d, f).then(
        (m) => ki(m)
      );
    },
    getItems(c, f) {
      return o(c, f, (d) => d.driver.getItems ? xt(
        d.driver.getItems,
        d.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        f
      ).then(
        (p) => p.map((m) => ({
          key: pg(d.base, m.key),
          value: ki(m.value)
        }))
      ) : Promise.all(
        d.items.map((p) => xt(
          d.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: ki(m)
        })))
      ));
    },
    getItemRaw(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return p.getItemRaw ? xt(p.getItemRaw, d, f) : xt(p.getItem, d, f).then(
        (m) => dg(m)
      );
    },
    async setItem(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      m.setItem && (await xt(m.setItem, p, Yi(f), d), m.watch || s("update", c));
    },
    async setItems(c, f) {
      await o(c, f, async (d) => {
        d.driver.setItems && await xt(
          d.driver.setItems,
          d.items.map((p) => ({
            key: p.relativeKey,
            value: Yi(p.value),
            options: p.options
          })),
          f
        ), d.driver.setItem && await Promise.all(
          d.items.map((p) => xt(
            d.driver.setItem,
            p.relativeKey,
            Yi(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c, d);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      if (m.setItemRaw)
        await xt(m.setItemRaw, p, f, d);
      else if (m.setItem)
        await xt(m.setItem, p, hg(f), d);
      else
        return;
      m.watch || s("update", c);
    },
    async removeItem(c, f = {}) {
      typeof f == "boolean" && (f = { removeMeta: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      p.removeItem && (await xt(p.removeItem, d, f), (f.removeMeta || f.removeMata) && await xt(p.removeItem, d + "$", f), p.watch || s("remove", c));
    },
    // Meta
    async getMeta(c, f = {}) {
      typeof f == "boolean" && (f = { nativeOnly: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await xt(p.getMeta, d, f)), !f.nativeOnly) {
        const v = await xt(
          p.getItem,
          d + "$",
          f
        ).then((E) => ki(E));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(c, f, d = {}) {
      return this.setItem(c + "$", f, d);
    },
    removeMeta(c, f = {}) {
      return this.removeItem(c + "$", f);
    },
    // Keys
    async getKeys(c, f = {}) {
      c = qi(c);
      const d = n(c, !0);
      let p = [];
      const m = [];
      for (const v of d) {
        const S = (await xt(
          v.driver.getKeys,
          v.relativeBase,
          f
        )).map((A) => v.mountpoint + Xt(A)).filter((A) => !p.some((w) => A.startsWith(w)));
        m.push(...S), p = [
          v.mountpoint,
          ...p.filter((A) => !A.startsWith(v.mountpoint))
        ];
      }
      return c ? m.filter((v) => v.startsWith(c) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(c, f = {}) {
      c = qi(c), await Promise.all(
        n(c, !1).map(async (d) => {
          if (d.driver.clear)
            return xt(d.driver.clear, d.relativeBase, f);
          if (d.driver.removeItem) {
            const p = await d.driver.getKeys(d.relativeBase || "", f);
            return Promise.all(
              p.map((m) => d.driver.removeItem(m, f))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((c) => Ou(c))
      );
    },
    async watch(c) {
      return await i(), e.watchListeners.push(c), async () => {
        e.watchListeners = e.watchListeners.filter(
          (f) => f !== c
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(c, f) {
      if (c = qi(c), c && e.mounts[c])
        throw new Error(`already mounted at ${c}`);
      return c && (e.mountpoints.push(c), e.mountpoints.sort((d, p) => p.length - d.length)), e.mounts[c] = f, e.watching && Promise.resolve(Du(f, s, c)).then((d) => {
        e.unwatch[c] = d;
      }).catch(console.error), u;
    },
    async unmount(c, f = !0) {
      c = qi(c), !(!c || !e.mounts[c]) && (e.watching && c in e.unwatch && (e.unwatch[c](), delete e.unwatch[c]), f && await Ou(e.mounts[c]), e.mountpoints = e.mountpoints.filter((d) => d !== c), delete e.mounts[c]);
    },
    getMount(c = "") {
      c = Xt(c) + ":";
      const f = r(c);
      return {
        driver: f.driver,
        base: f.base
      };
    },
    getMounts(c = "", f = {}) {
      return c = Xt(c), n(c, f.parents).map((p) => ({
        driver: p.driver,
        base: p.mountpoint
      }));
    }
  };
  return u;
}
function Du(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Ou(t) {
  typeof t.dispose == "function" && await xt(t.dispose);
}
function jn(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Hf(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = jn(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let Jo;
function yi() {
  return Jo || (Jo = Hf("keyval-store", "keyval")), Jo;
}
function Iu(t, e = yi()) {
  return e("readonly", (r) => jn(r.get(t)));
}
function vg(t, e, r = yi()) {
  return r("readwrite", (n) => (n.put(e, t), jn(n.transaction)));
}
function bg(t, e = yi()) {
  return e("readwrite", (r) => (r.delete(t), jn(r.transaction)));
}
function wg(t = yi()) {
  return t("readwrite", (e) => (e.clear(), jn(e.transaction)));
}
function _g(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, jn(t.transaction);
}
function Eg(t = yi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return jn(e.getAllKeys());
    const r = [];
    return _g(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Sg = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), xg = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Ao(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return xg(t);
  } catch {
    return t;
  }
}
function mi(t) {
  return typeof t == "string" ? t : Sg(t) || "";
}
const Dg = "idb-keyval";
var Og = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Hf(t.dbName, t.storeName)), { name: Dg, options: t, async hasItem(s) {
    return !(typeof await Iu(r(s), n) > "u");
  }, async getItem(s) {
    return await Iu(r(s), n) ?? null;
  }, setItem(s, i) {
    return vg(r(s), i, n);
  }, removeItem(s) {
    return bg(r(s), n);
  }, getKeys() {
    return Eg(n);
  }, clear() {
    return wg(n);
  } };
};
const Ig = "WALLET_CONNECT_V2_INDEXED_DB", Cg = "keyvaluestorage";
let Rg = class {
  constructor() {
    this.indexedDb = mg({ driver: Og({ dbName: Ig, storeName: Cg }) });
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
    await this.indexedDb.setItem(e, mi(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ji = { exports: {} };
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
  }), typeof Xo < "u" && Xo.localStorage ? Ji.exports = Xo.localStorage : typeof window < "u" && window.localStorage ? Ji.exports = window.localStorage : Ji.exports = new e();
})();
function Tg(t) {
  var e;
  return [t[0], Ao((e = t[1]) != null ? e : "")];
}
class Ag {
  constructor() {
    this.localStorage = Ji.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Tg);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Ao(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, mi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Pg = "wc_storage_version", Cu = 1, Ng = async (t, e, r) => {
  const n = Pg, s = await e.getItem(n);
  if (s && s >= Cu) {
    r(e);
    return;
  }
  const i = await t.getKeys();
  if (!i.length) {
    r(e);
    return;
  }
  const a = [];
  for (; i.length; ) {
    const o = i.shift();
    if (!o)
      continue;
    const u = o.toLowerCase();
    if (u.includes("wc@") || u.includes("walletconnect") || u.includes("wc_") || u.includes("wallet_connect")) {
      const c = await t.getItem(o);
      await e.setItem(o, c), a.push(o);
    }
  }
  await e.setItem(n, Cu), r(e), Lg(t, a);
}, Lg = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Fg = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Ag();
    this.storage = e;
    try {
      const r = new Rg();
      Ng(e, r, this.setInitialized);
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
var ds = {};
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
var Ra = function(t, e) {
  return Ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, Ra(t, e);
};
function Ug(t, e) {
  Ra(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ta = function() {
  return Ta = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ta.apply(this, arguments);
};
function Mg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function jg(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function $g(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function kg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function qg(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(f) {
      try {
        c(n.next(f));
      } catch (d) {
        a(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        a(d);
      }
    }
    function c(f) {
      f.done ? i(f.value) : s(f.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function zg(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = c[0] & 2 ? s.return : c[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, c[1])).done)
          return i;
        switch (s = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], s = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Bg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Vg(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Aa(t) {
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
function Wf(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function Kg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Wf(arguments[e]));
  return t;
}
function Hg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function zs(t) {
  return this instanceof zs ? (this.v = t, this) : new zs(t);
}
function Wg(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, a("next"), a("throw"), a("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(v, E) {
        i.push([p, m, v, E]) > 1 || o(p, m);
      });
    });
  }
  function o(p, m) {
    try {
      u(n[p](m));
    } catch (v) {
      d(i[0][3], v);
    }
  }
  function u(p) {
    p.value instanceof zs ? Promise.resolve(p.value.v).then(c, f) : d(i[0][2], p);
  }
  function c(p) {
    o("next", p);
  }
  function f(p) {
    o("throw", p);
  }
  function d(p, m) {
    p(m), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function Gg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: zs(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function Qg(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Aa == "function" ? Aa(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(a) {
      return new Promise(function(o, u) {
        a = t[i](a), s(o, u, a.done, a.value);
      });
    };
  }
  function s(i, a, o, u) {
    Promise.resolve(u).then(function(c) {
      i({ value: c, done: o });
    }, a);
  }
}
function Zg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Yg(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Jg(t) {
  return t && t.__esModule ? t : { default: t };
}
function Xg(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function ey(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ta;
  },
  __asyncDelegator: Gg,
  __asyncGenerator: Wg,
  __asyncValues: Qg,
  __await: zs,
  __awaiter: qg,
  __classPrivateFieldGet: Xg,
  __classPrivateFieldSet: ey,
  __createBinding: Bg,
  __decorate: jg,
  __exportStar: Vg,
  __extends: Ug,
  __generator: zg,
  __importDefault: Jg,
  __importStar: Yg,
  __makeTemplateObject: Zg,
  __metadata: kg,
  __param: $g,
  __read: Wf,
  __rest: Mg,
  __spread: Kg,
  __spreadArrays: Hg,
  __values: Aa
}, Symbol.toStringTag, { value: "Module" })), $r = /* @__PURE__ */ Ro(ty);
var Ss = {}, se = {}, ea = {}, xs = {}, Ru;
function ry() {
  if (Ru)
    return xs;
  Ru = 1, Object.defineProperty(xs, "__esModule", { value: !0 }), xs.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return xs.delay = t, xs;
}
var _n = {}, ta = {}, En = {}, Tu;
function ny() {
  return Tu || (Tu = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.ONE_THOUSAND = En.ONE_HUNDRED = void 0, En.ONE_HUNDRED = 100, En.ONE_THOUSAND = 1e3), En;
}
var ra = {}, Au;
function sy() {
  return Au || (Au = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ra)), ra;
}
var Pu;
function Gf() {
  return Pu || (Pu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = $r;
    e.__exportStar(ny(), t), e.__exportStar(sy(), t);
  }(ta)), ta;
}
var Nu;
function iy() {
  if (Nu)
    return _n;
  Nu = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.fromMiliseconds = _n.toMiliseconds = void 0;
  const t = Gf();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  _n.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return _n.fromMiliseconds = r, _n;
}
var Lu;
function oy() {
  return Lu || (Lu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = $r;
    e.__exportStar(ry(), t), e.__exportStar(iy(), t);
  }(ea)), ea;
}
var Bn = {}, Fu;
function ay() {
  if (Fu)
    return Bn;
  Fu = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.Watch = void 0;
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
  return Bn.Watch = t, Bn.default = t, Bn;
}
var na = {}, Ds = {}, Uu;
function cy() {
  if (Uu)
    return Ds;
  Uu = 1, Object.defineProperty(Ds, "__esModule", { value: !0 }), Ds.IWatch = void 0;
  class t {
  }
  return Ds.IWatch = t, Ds;
}
var Mu;
function uy() {
  return Mu || (Mu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), $r.__exportStar(cy(), t);
  }(na)), na;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = $r;
  e.__exportStar(oy(), t), e.__exportStar(ay(), t), e.__exportStar(uy(), t), e.__exportStar(Gf(), t);
})(se);
var sa = {}, Os = {};
let ar = class {
};
const ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: ar
}, Symbol.toStringTag, { value: "Module" })), fy = /* @__PURE__ */ Ro(ly);
var ju;
function hy() {
  if (ju)
    return Os;
  ju = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.IHeartBeat = void 0;
  const t = fy;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Os.IHeartBeat = e, Os;
}
var $u;
function Qf() {
  return $u || ($u = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), $r.__exportStar(hy(), t);
  }(sa)), sa;
}
var ia = {}, Sn = {}, ku;
function dy() {
  if (ku)
    return Sn;
  ku = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.HEARTBEAT_EVENTS = Sn.HEARTBEAT_INTERVAL = void 0;
  const t = se;
  return Sn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Sn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Sn;
}
var qu;
function Zf() {
  return qu || (qu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), $r.__exportStar(dy(), t);
  }(ia)), ia;
}
var zu;
function py() {
  if (zu)
    return Ss;
  zu = 1, Object.defineProperty(Ss, "__esModule", { value: !0 }), Ss.HeartBeat = void 0;
  const t = $r, e = gr, r = se, n = Qf(), s = Zf();
  class i extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const u = new i(o);
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
      this.events.emit(s.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Ss.HeartBeat = i, Ss;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = $r;
  e.__exportStar(py(), t), e.__exportStar(Qf(), t), e.__exportStar(Zf(), t);
})(ds);
var Me = {}, oa, Bu;
function gy() {
  if (Bu)
    return oa;
  Bu = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  oa = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = i(r);
      for (var c = 1; c < o; c++)
        u[c] = i(n[c]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", p = 1 - a, m = -1, v = r && r.length || 0, E = 0; E < v; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= f || n[p] == null)
              break;
            m < E && (d += r.slice(m, E)), d += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= f || n[p] == null)
              break;
            m < E && (d += r.slice(m, E)), d += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= f || n[p] === void 0)
              break;
            m < E && (d += r.slice(m, E));
            var S = typeof n[p];
            if (S === "string") {
              d += "'" + n[p] + "'", m = E + 2, E++;
              break;
            }
            if (S === "function") {
              d += n[p].name || "<anonymous>", m = E + 2, E++;
              break;
            }
            d += i(n[p]), m = E + 2, E++;
            break;
          case 115:
            if (p >= f)
              break;
            m < E && (d += r.slice(m, E)), d += String(n[p]), m = E + 2, E++;
            break;
          case 37:
            m < E && (d += r.slice(m, E)), d += "%", m = E + 2, E++, p--;
            break;
        }
        ++p;
      }
      ++E;
    }
    return m === -1 ? r : (m < v && (d += r.slice(m)), d);
  }
  return oa;
}
var aa, Vu;
function yy() {
  if (Vu)
    return aa;
  Vu = 1;
  const t = gy();
  aa = s;
  const e = x().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: E,
    wrapResponseSerializer: E,
    wrapErrorSerializer: E,
    req: v,
    res: v,
    err: p
  };
  function n(g, l) {
    return Array.isArray(g) ? g.filter(function(C) {
      return C !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(l) : !1;
  }
  function s(g) {
    g = g || {}, g.browser = g.browser || {};
    const l = g.browser.transmit;
    if (l && typeof l.send != "function")
      throw Error("pino: transmit option must have a send function");
    const y = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const C = g.serializers || {}, T = n(g.browser.serialize, C);
    let M = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (M = !1);
    const z = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof y == "function" && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", R = Object.create(y);
    R.log || (R.log = S), Object.defineProperty(R, "levelVal", {
      get: Q
    }), Object.defineProperty(R, "level", {
      get: V,
      set: k
    });
    const L = {
      transmit: l,
      serialize: T,
      asObject: g.browser.asObject,
      levels: z,
      timestamp: m(g)
    };
    R.levels = s.levels, R.level = G, R.setMaxListeners = R.getMaxListeners = R.emit = R.addListener = R.on = R.prependListener = R.once = R.prependOnceListener = R.removeListener = R.removeAllListeners = R.listeners = R.listenerCount = R.eventNames = R.write = R.flush = S, R.serializers = C, R._serialize = T, R._stdErrSerialize = M, R.child = B, l && (R._logEvent = d());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function k($) {
      if ($ !== "silent" && !this.levels.values[$])
        throw Error("unknown level " + $);
      this._level = $, i(L, R, "error", "log"), i(L, R, "fatal", "error"), i(L, R, "warn", "error"), i(L, R, "info", "log"), i(L, R, "debug", "log"), i(L, R, "trace", "log");
    }
    function B($, K) {
      if (!$)
        throw new Error("missing bindings for child Pino");
      K = K || {}, T && $.serializers && (K.serializers = $.serializers);
      const fe = K.serializers;
      if (T && fe) {
        var H = Object.assign({}, C, fe), ae = g.browser.serialize === !0 ? Object.keys(H) : T;
        delete $.serializers, u([$], ae, H, this._stdErrSerialize);
      }
      function te(oe) {
        this._childLevel = (oe._childLevel | 0) + 1, this.error = c(oe, $, "error"), this.fatal = c(oe, $, "fatal"), this.warn = c(oe, $, "warn"), this.info = c(oe, $, "info"), this.debug = c(oe, $, "debug"), this.trace = c(oe, $, "trace"), H && (this.serializers = H, this._serialize = ae), l && (this._logEvent = d(
          [].concat(oe._logEvent.bindings, $)
        ));
      }
      return te.prototype = this, new te(this);
    }
    return R;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: A, epochTime: w, unixTime: D, isoTime: b });
  function i(g, l, y, C) {
    const T = Object.getPrototypeOf(l);
    l[y] = l.levelVal > l.levels.values[y] ? S : T[y] ? T[y] : e[y] || e[C] || S, a(g, l, y);
  }
  function a(g, l, y) {
    !g.transmit && l[y] === S || (l[y] = /* @__PURE__ */ function(C) {
      return function() {
        const M = g.timestamp(), z = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var R = 0; R < z.length; R++)
          z[R] = arguments[R];
        if (g.serialize && !g.asObject && u(z, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? C.call(G, o(this, y, z, M)) : C.apply(G, z), g.transmit) {
          const L = g.transmit.level || l.level, Q = s.levels.values[L], V = s.levels.values[y];
          if (V < Q)
            return;
          f(this, {
            ts: M,
            methodLevel: y,
            methodValue: V,
            transmitLevel: L,
            transmitValue: s.levels.values[g.transmit.level || l.level],
            send: g.transmit.send,
            val: l.levelVal
          }, z);
        }
      };
    }(l[y]));
  }
  function o(g, l, y, C) {
    g._serialize && u(y, g._serialize, g.serializers, g._stdErrSerialize);
    const T = y.slice();
    let M = T[0];
    const z = {};
    C && (z.time = C), z.level = s.levels.values[l];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), M !== null && typeof M == "object") {
      for (; G-- && typeof T[0] == "object"; )
        Object.assign(z, T.shift());
      M = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof M == "string" && (M = t(T.shift(), T));
    return M !== void 0 && (z.msg = M), z;
  }
  function u(g, l, y, C) {
    for (const T in g)
      if (C && g[T] instanceof Error)
        g[T] = s.stdSerializers.err(g[T]);
      else if (typeof g[T] == "object" && !Array.isArray(g[T]))
        for (const M in g[T])
          l && l.indexOf(M) > -1 && M in y && (g[T][M] = y[M](g[T][M]));
  }
  function c(g, l, y) {
    return function() {
      const C = new Array(1 + arguments.length);
      C[0] = l;
      for (var T = 1; T < C.length; T++)
        C[T] = arguments[T - 1];
      return g[y].apply(this, C);
    };
  }
  function f(g, l, y) {
    const C = l.send, T = l.ts, M = l.methodLevel, z = l.methodValue, G = l.val, R = g._logEvent.bindings;
    u(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = T, g._logEvent.messages = y.filter(function(L) {
      return R.indexOf(L) === -1;
    }), g._logEvent.level.label = M, g._logEvent.level.value = z, C(M, g._logEvent, G), g._logEvent = d(R);
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
    const l = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const y in g)
      l[y] === void 0 && (l[y] = g[y]);
    return l;
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
  function D() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function x() {
    function g(l) {
      return typeof l < "u" && l;
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
  return aa;
}
var xn = {}, Ku;
function Yf() {
  return Ku || (Ku = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.PINO_CUSTOM_CONTEXT_KEY = xn.PINO_LOGGER_DEFAULTS = void 0, xn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, xn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), xn;
}
var Bt = {}, Hu;
function my() {
  if (Hu)
    return Bt;
  Hu = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.generateChildLogger = Bt.formatChildLoggerContext = Bt.getLoggerContext = Bt.setBrowserLoggerContext = Bt.getBrowserLoggerContext = Bt.getDefaultLoggerOptions = void 0;
  const t = Yf();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Bt.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  Bt.getBrowserLoggerContext = r;
  function n(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] = u, o;
  }
  Bt.setBrowserLoggerContext = n;
  function s(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let c = "";
    return typeof o.bindings > "u" ? c = r(o, u) : c = o.bindings().context || "", c;
  }
  Bt.getLoggerContext = s;
  function i(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, c);
    return f.trim() ? `${f}/${u}` : u;
  }
  Bt.formatChildLoggerContext = i;
  function a(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, u, c), d = o.child({ context: f });
    return n(d, f, c);
  }
  return Bt.generateChildLogger = a, Bt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = $r, r = e.__importDefault(yy());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Yf(), t), e.__exportStar(my(), t);
})(Me);
let vy = class extends ar {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, by = class extends ar {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, wy = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, _y = class extends ar {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Ey = class extends ar {
  constructor(e) {
    super();
  }
}, Sy = class {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}, xy = class extends ar {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Dy = class extends ar {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Oy = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Iy = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Cy = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Ry = class {
  constructor(e) {
    this.client = e;
  }
};
var Dc = {}, ps = {}, Po = {}, No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.BrowserRandomSource = void 0;
const Wu = 65536;
class Ty {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Wu)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Wu)));
    return r;
  }
}
No.BrowserRandomSource = Ty;
function Ay(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Lo = {}, cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
function Py(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
cr.wipe = Py;
const Ny = {}, Ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ny
}, Symbol.toStringTag, { value: "Module" })), Fy = /* @__PURE__ */ Ro(Ly);
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.NodeRandomSource = void 0;
const Uy = cr;
class My {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ay < "u") {
      const e = Fy;
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
    return (0, Uy.wipe)(r), n;
  }
}
Lo.NodeRandomSource = My;
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.SystemRandomSource = void 0;
const jy = No, $y = Lo;
class ky {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new jy.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new $y.NodeRandomSource(), this._source.isAvailable) {
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
Po.SystemRandomSource = ky;
var me = {}, Jf = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var c = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, p = u & 65535;
    return f * p + (c * p + f * d << 16 >>> 0) | 0;
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
  function s(o, u) {
    return o << u | o >>> 32 - u;
  }
  t.rotl = s;
  function i(o, u) {
    return o << 32 - u | o >>> u;
  }
  t.rotr = i;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(Jf);
Object.defineProperty(me, "__esModule", { value: !0 });
var Xf = Jf;
function qy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
me.readInt16BE = qy;
function zy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
me.readUint16BE = zy;
function By(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
me.readInt16LE = By;
function Vy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint16LE = Vy;
function eh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
me.writeUint16BE = eh;
me.writeInt16BE = eh;
function th(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
me.writeUint16LE = th;
me.writeInt16LE = th;
function Pa(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
me.readInt32BE = Pa;
function Na(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
me.readUint32BE = Na;
function La(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
me.readInt32LE = La;
function Fa(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint32LE = Fa;
function io(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
me.writeUint32BE = io;
me.writeInt32BE = io;
function oo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
me.writeUint32LE = oo;
me.writeInt32LE = oo;
function Ky(t, e) {
  e === void 0 && (e = 0);
  var r = Pa(t, e), n = Pa(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
me.readInt64BE = Ky;
function Hy(t, e) {
  e === void 0 && (e = 0);
  var r = Na(t, e), n = Na(t, e + 4);
  return r * 4294967296 + n;
}
me.readUint64BE = Hy;
function Wy(t, e) {
  e === void 0 && (e = 0);
  var r = La(t, e), n = La(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
me.readInt64LE = Wy;
function Gy(t, e) {
  e === void 0 && (e = 0);
  var r = Fa(t, e), n = Fa(t, e + 4);
  return n * 4294967296 + r;
}
me.readUint64LE = Gy;
function rh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), io(t / 4294967296 >>> 0, e, r), io(t >>> 0, e, r + 4), e;
}
me.writeUint64BE = rh;
me.writeInt64BE = rh;
function nh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), oo(t >>> 0, e, r), oo(t / 4294967296 >>> 0, e, r + 4), e;
}
me.writeUint64LE = nh;
me.writeInt64LE = nh;
function Qy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintBE = Qy;
function Zy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintLE = Zy;
function Yy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Xf.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintBE = Yy;
function Jy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Xf.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintLE = Jy;
function Xy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
me.readFloat32BE = Xy;
function em(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
me.readFloat32LE = em;
function tm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
me.readFloat64BE = tm;
function rm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
me.readFloat64LE = rm;
function nm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
me.writeFloat32BE = nm;
function sm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
me.writeFloat32LE = sm;
function im(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
me.writeFloat64BE = im;
function om(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
me.writeFloat64LE = om;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Po, r = me, n = cr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(c, f = t.defaultRandomSource) {
    return f.randomBytes(c);
  }
  t.randomBytes = s;
  function i(c = t.defaultRandomSource) {
    const f = s(4, c), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = i;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(c, f = a, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = f.length, v = 256 - 256 % m;
    for (; c > 0; ) {
      const E = s(Math.ceil(c * 256 / v), d);
      for (let S = 0; S < E.length && c > 0; S++) {
        const A = E[S];
        A < v && (p += f.charAt(A % m), c--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = o;
  function u(c, f = a, d = t.defaultRandomSource) {
    const p = Math.ceil(c / (Math.log(f.length) / Math.LN2));
    return o(p, f, d);
  }
  t.randomStringForEntropy = u;
})(ps);
var sh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = cr;
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
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 8; v++)
          e.writeUint32BE(this._stateHi[v], u, v * 8), e.writeUint32BE(this._stateLo[v], u, v * 8 + 4);
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
  function i(o, u, c, f, d, p, m) {
    for (var v = c[0], E = c[1], S = c[2], A = c[3], w = c[4], D = c[5], b = c[6], x = c[7], g = f[0], l = f[1], y = f[2], C = f[3], T = f[4], M = f[5], z = f[6], G = f[7], R, L, Q, V, k, B, $, K; m >= 128; ) {
      for (var fe = 0; fe < 16; fe++) {
        var H = 8 * fe + p;
        o[fe] = e.readUint32BE(d, H), u[fe] = e.readUint32BE(d, H + 4);
      }
      for (var fe = 0; fe < 80; fe++) {
        var ae = v, te = E, oe = S, U = A, F = w, P = D, h = b, I = x, Z = g, X = l, Oe = y, Ie = C, we = T, Fe = M, Je = z, He = G;
        if (R = x, L = G, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = (w >>> 14 | T << 18) ^ (w >>> 18 | T << 14) ^ (T >>> 9 | w << 23), L = (T >>> 14 | w << 18) ^ (T >>> 18 | w << 14) ^ (w >>> 9 | T << 23), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = w & D ^ ~w & b, L = T & M ^ ~T & z, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = s[fe * 2], L = s[fe * 2 + 1], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = o[fe % 16], L = u[fe % 16], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, Q = $ & 65535 | K << 16, V = k & 65535 | B << 16, R = Q, L = V, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = (v >>> 28 | g << 4) ^ (g >>> 2 | v << 30) ^ (g >>> 7 | v << 25), L = (g >>> 28 | v << 4) ^ (v >>> 2 | g << 30) ^ (v >>> 7 | g << 25), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = v & E ^ v & S ^ E & S, L = g & l ^ g & y ^ l & y, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, I = $ & 65535 | K << 16, He = k & 65535 | B << 16, R = U, L = Ie, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = Q, L = V, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, U = $ & 65535 | K << 16, Ie = k & 65535 | B << 16, E = ae, S = te, A = oe, w = U, D = F, b = P, x = h, v = I, l = Z, y = X, C = Oe, T = Ie, M = we, z = Fe, G = Je, g = He, fe % 16 === 15)
          for (var H = 0; H < 16; H++)
            R = o[H], L = u[H], k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = o[(H + 9) % 16], L = u[(H + 9) % 16], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 1) % 16], V = u[(H + 1) % 16], R = (Q >>> 1 | V << 31) ^ (Q >>> 8 | V << 24) ^ Q >>> 7, L = (V >>> 1 | Q << 31) ^ (V >>> 8 | Q << 24) ^ (V >>> 7 | Q << 25), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 14) % 16], V = u[(H + 14) % 16], R = (Q >>> 19 | V << 13) ^ (V >>> 29 | Q << 3) ^ Q >>> 6, L = (V >>> 19 | Q << 13) ^ (Q >>> 29 | V << 3) ^ (V >>> 6 | Q << 26), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, o[H] = $ & 65535 | K << 16, u[H] = k & 65535 | B << 16;
      }
      R = v, L = g, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[0], L = f[0], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[0] = v = $ & 65535 | K << 16, f[0] = g = k & 65535 | B << 16, R = E, L = l, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[1], L = f[1], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[1] = E = $ & 65535 | K << 16, f[1] = l = k & 65535 | B << 16, R = S, L = y, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[2], L = f[2], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[2] = S = $ & 65535 | K << 16, f[2] = y = k & 65535 | B << 16, R = A, L = C, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[3], L = f[3], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[3] = A = $ & 65535 | K << 16, f[3] = C = k & 65535 | B << 16, R = w, L = T, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[4], L = f[4], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[4] = w = $ & 65535 | K << 16, f[4] = T = k & 65535 | B << 16, R = D, L = M, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[5], L = f[5], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[5] = D = $ & 65535 | K << 16, f[5] = M = k & 65535 | B << 16, R = b, L = z, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[6], L = f[6], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[6] = b = $ & 65535 | K << 16, f[6] = z = k & 65535 | B << 16, R = x, L = G, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[7], L = f[7], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[7] = x = $ & 65535 | K << 16, f[7] = G = k & 65535 | B << 16, p += 128, m -= 128;
    }
    return p;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(sh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = ps, r = sh, n = cr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(U) {
    const F = new Float64Array(16);
    if (U)
      for (let P = 0; P < U.length; P++)
        F[P] = U[P];
    return F;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const a = s(), o = s([1]), u = s([
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
  ]), c = s([
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
  ]), f = s([
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
  ]), d = s([
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
  function m(U, F) {
    for (let P = 0; P < 16; P++)
      U[P] = F[P] | 0;
  }
  function v(U) {
    let F = 1;
    for (let P = 0; P < 16; P++) {
      let h = U[P] + F + 65535;
      F = Math.floor(h / 65536), U[P] = h - F * 65536;
    }
    U[0] += F - 1 + 37 * (F - 1);
  }
  function E(U, F, P) {
    const h = ~(P - 1);
    for (let I = 0; I < 16; I++) {
      const Z = h & (U[I] ^ F[I]);
      U[I] ^= Z, F[I] ^= Z;
    }
  }
  function S(U, F) {
    const P = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = F[I];
    v(h), v(h), v(h);
    for (let I = 0; I < 2; I++) {
      P[0] = h[0] - 65517;
      for (let X = 1; X < 15; X++)
        P[X] = h[X] - 65535 - (P[X - 1] >> 16 & 1), P[X - 1] &= 65535;
      P[15] = h[15] - 32767 - (P[14] >> 16 & 1);
      const Z = P[15] >> 16 & 1;
      P[14] &= 65535, E(h, P, 1 - Z);
    }
    for (let I = 0; I < 16; I++)
      U[2 * I] = h[I] & 255, U[2 * I + 1] = h[I] >> 8;
  }
  function A(U, F) {
    let P = 0;
    for (let h = 0; h < 32; h++)
      P |= U[h] ^ F[h];
    return (1 & P - 1 >>> 8) - 1;
  }
  function w(U, F) {
    const P = new Uint8Array(32), h = new Uint8Array(32);
    return S(P, U), S(h, F), A(P, h);
  }
  function D(U) {
    const F = new Uint8Array(32);
    return S(F, U), F[0] & 1;
  }
  function b(U, F) {
    for (let P = 0; P < 16; P++)
      U[P] = F[2 * P] + (F[2 * P + 1] << 8);
    U[15] &= 32767;
  }
  function x(U, F, P) {
    for (let h = 0; h < 16; h++)
      U[h] = F[h] + P[h];
  }
  function g(U, F, P) {
    for (let h = 0; h < 16; h++)
      U[h] = F[h] - P[h];
  }
  function l(U, F, P) {
    let h, I, Z = 0, X = 0, Oe = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = 0, Te = 0, _e = 0, Se = 0, Ee = 0, ge = 0, pe = 0, ce = 0, xe = 0, Ce = 0, he = 0, Ae = 0, Ue = 0, ke = 0, qe = 0, je = 0, nr = 0, ur = 0, Cr = 0, Ct = 0, Rr = 0, lr = 0, Jr = 0, Xe = P[0], Qe = P[1], ot = P[2], rt = P[3], at = P[4], Ze = P[5], ft = P[6], pt = P[7], gt = P[8], ht = P[9], yt = P[10], dt = P[11], ct = P[12], We = P[13], O = P[14], j = P[15];
    h = F[0], Z += h * Xe, X += h * Qe, Oe += h * ot, Ie += h * rt, we += h * at, Fe += h * Ze, Je += h * ft, He += h * pt, Ne += h * gt, Te += h * ht, _e += h * yt, Se += h * dt, Ee += h * ct, ge += h * We, pe += h * O, ce += h * j, h = F[1], X += h * Xe, Oe += h * Qe, Ie += h * ot, we += h * rt, Fe += h * at, Je += h * Ze, He += h * ft, Ne += h * pt, Te += h * gt, _e += h * ht, Se += h * yt, Ee += h * dt, ge += h * ct, pe += h * We, ce += h * O, xe += h * j, h = F[2], Oe += h * Xe, Ie += h * Qe, we += h * ot, Fe += h * rt, Je += h * at, He += h * Ze, Ne += h * ft, Te += h * pt, _e += h * gt, Se += h * ht, Ee += h * yt, ge += h * dt, pe += h * ct, ce += h * We, xe += h * O, Ce += h * j, h = F[3], Ie += h * Xe, we += h * Qe, Fe += h * ot, Je += h * rt, He += h * at, Ne += h * Ze, Te += h * ft, _e += h * pt, Se += h * gt, Ee += h * ht, ge += h * yt, pe += h * dt, ce += h * ct, xe += h * We, Ce += h * O, he += h * j, h = F[4], we += h * Xe, Fe += h * Qe, Je += h * ot, He += h * rt, Ne += h * at, Te += h * Ze, _e += h * ft, Se += h * pt, Ee += h * gt, ge += h * ht, pe += h * yt, ce += h * dt, xe += h * ct, Ce += h * We, he += h * O, Ae += h * j, h = F[5], Fe += h * Xe, Je += h * Qe, He += h * ot, Ne += h * rt, Te += h * at, _e += h * Ze, Se += h * ft, Ee += h * pt, ge += h * gt, pe += h * ht, ce += h * yt, xe += h * dt, Ce += h * ct, he += h * We, Ae += h * O, Ue += h * j, h = F[6], Je += h * Xe, He += h * Qe, Ne += h * ot, Te += h * rt, _e += h * at, Se += h * Ze, Ee += h * ft, ge += h * pt, pe += h * gt, ce += h * ht, xe += h * yt, Ce += h * dt, he += h * ct, Ae += h * We, Ue += h * O, ke += h * j, h = F[7], He += h * Xe, Ne += h * Qe, Te += h * ot, _e += h * rt, Se += h * at, Ee += h * Ze, ge += h * ft, pe += h * pt, ce += h * gt, xe += h * ht, Ce += h * yt, he += h * dt, Ae += h * ct, Ue += h * We, ke += h * O, qe += h * j, h = F[8], Ne += h * Xe, Te += h * Qe, _e += h * ot, Se += h * rt, Ee += h * at, ge += h * Ze, pe += h * ft, ce += h * pt, xe += h * gt, Ce += h * ht, he += h * yt, Ae += h * dt, Ue += h * ct, ke += h * We, qe += h * O, je += h * j, h = F[9], Te += h * Xe, _e += h * Qe, Se += h * ot, Ee += h * rt, ge += h * at, pe += h * Ze, ce += h * ft, xe += h * pt, Ce += h * gt, he += h * ht, Ae += h * yt, Ue += h * dt, ke += h * ct, qe += h * We, je += h * O, nr += h * j, h = F[10], _e += h * Xe, Se += h * Qe, Ee += h * ot, ge += h * rt, pe += h * at, ce += h * Ze, xe += h * ft, Ce += h * pt, he += h * gt, Ae += h * ht, Ue += h * yt, ke += h * dt, qe += h * ct, je += h * We, nr += h * O, ur += h * j, h = F[11], Se += h * Xe, Ee += h * Qe, ge += h * ot, pe += h * rt, ce += h * at, xe += h * Ze, Ce += h * ft, he += h * pt, Ae += h * gt, Ue += h * ht, ke += h * yt, qe += h * dt, je += h * ct, nr += h * We, ur += h * O, Cr += h * j, h = F[12], Ee += h * Xe, ge += h * Qe, pe += h * ot, ce += h * rt, xe += h * at, Ce += h * Ze, he += h * ft, Ae += h * pt, Ue += h * gt, ke += h * ht, qe += h * yt, je += h * dt, nr += h * ct, ur += h * We, Cr += h * O, Ct += h * j, h = F[13], ge += h * Xe, pe += h * Qe, ce += h * ot, xe += h * rt, Ce += h * at, he += h * Ze, Ae += h * ft, Ue += h * pt, ke += h * gt, qe += h * ht, je += h * yt, nr += h * dt, ur += h * ct, Cr += h * We, Ct += h * O, Rr += h * j, h = F[14], pe += h * Xe, ce += h * Qe, xe += h * ot, Ce += h * rt, he += h * at, Ae += h * Ze, Ue += h * ft, ke += h * pt, qe += h * gt, je += h * ht, nr += h * yt, ur += h * dt, Cr += h * ct, Ct += h * We, Rr += h * O, lr += h * j, h = F[15], ce += h * Xe, xe += h * Qe, Ce += h * ot, he += h * rt, Ae += h * at, Ue += h * Ze, ke += h * ft, qe += h * pt, je += h * gt, nr += h * ht, ur += h * yt, Cr += h * dt, Ct += h * ct, Rr += h * We, lr += h * O, Jr += h * j, Z += 38 * xe, X += 38 * Ce, Oe += 38 * he, Ie += 38 * Ae, we += 38 * Ue, Fe += 38 * ke, Je += 38 * qe, He += 38 * je, Ne += 38 * nr, Te += 38 * ur, _e += 38 * Cr, Se += 38 * Ct, Ee += 38 * Rr, ge += 38 * lr, pe += 38 * Jr, I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), U[0] = Z, U[1] = X, U[2] = Oe, U[3] = Ie, U[4] = we, U[5] = Fe, U[6] = Je, U[7] = He, U[8] = Ne, U[9] = Te, U[10] = _e, U[11] = Se, U[12] = Ee, U[13] = ge, U[14] = pe, U[15] = ce;
  }
  function y(U, F) {
    l(U, F, F);
  }
  function C(U, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 253; h >= 0; h--)
      y(P, P), h !== 2 && h !== 4 && l(P, P, F);
    for (h = 0; h < 16; h++)
      U[h] = P[h];
  }
  function T(U, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 250; h >= 0; h--)
      y(P, P), h !== 1 && l(P, P, F);
    for (h = 0; h < 16; h++)
      U[h] = P[h];
  }
  function M(U, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), Oe = s(), Ie = s(), we = s(), Fe = s();
    g(P, U[1], U[0]), g(Fe, F[1], F[0]), l(P, P, Fe), x(h, U[0], U[1]), x(Fe, F[0], F[1]), l(h, h, Fe), l(I, U[3], F[3]), l(I, I, c), l(Z, U[2], F[2]), x(Z, Z, Z), g(X, h, P), g(Oe, Z, I), x(Ie, Z, I), x(we, h, P), l(U[0], X, Oe), l(U[1], we, Ie), l(U[2], Ie, Oe), l(U[3], X, we);
  }
  function z(U, F, P) {
    for (let h = 0; h < 4; h++)
      E(U[h], F[h], P);
  }
  function G(U, F) {
    const P = s(), h = s(), I = s();
    C(I, F[2]), l(P, F[0], I), l(h, F[1], I), S(U, h), U[31] ^= D(P) << 7;
  }
  function R(U, F, P) {
    m(U[0], a), m(U[1], o), m(U[2], o), m(U[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = P[h / 8 | 0] >> (h & 7) & 1;
      z(U, F, I), M(F, U), M(U, U), z(U, F, I);
    }
  }
  function L(U, F) {
    const P = [s(), s(), s(), s()];
    m(P[0], f), m(P[1], d), m(P[2], o), l(P[3], f, d), R(U, P, F);
  }
  function Q(U) {
    if (U.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(U);
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(32), h = [s(), s(), s(), s()];
    L(h, F), G(P, h);
    const I = new Uint8Array(64);
    return I.set(U), I.set(P, 32), {
      publicKey: P,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function V(U) {
    const F = (0, e.randomBytes)(32, U), P = Q(F);
    return (0, n.wipe)(F), P;
  }
  t.generateKeyPair = V;
  function k(U) {
    if (U.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(U.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = k;
  const B = new Float64Array([
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
  function $(U, F) {
    let P, h, I, Z;
    for (h = 63; h >= 32; --h) {
      for (P = 0, I = h - 32, Z = h - 12; I < Z; ++I)
        F[I] += P - 16 * F[h] * B[I - (h - 32)], P = Math.floor((F[I] + 128) / 256), F[I] -= P * 256;
      F[I] += P, F[h] = 0;
    }
    for (P = 0, I = 0; I < 32; I++)
      F[I] += P - (F[31] >> 4) * B[I], P = F[I] >> 8, F[I] &= 255;
    for (I = 0; I < 32; I++)
      F[I] -= P * B[I];
    for (h = 0; h < 32; h++)
      F[h + 1] += F[h] >> 8, U[h] = F[h] & 255;
  }
  function K(U) {
    const F = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      F[P] = U[P];
    for (let P = 0; P < 64; P++)
      U[P] = 0;
    $(U, F);
  }
  function fe(U, F) {
    const P = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(U.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const Z = new Uint8Array(64);
    Z.set(I.subarray(32), 32);
    const X = new r.SHA512();
    X.update(Z.subarray(32)), X.update(F);
    const Oe = X.digest();
    X.clean(), K(Oe), L(h, Oe), G(Z, h), X.reset(), X.update(Z.subarray(0, 32)), X.update(U.subarray(32)), X.update(F);
    const Ie = X.digest();
    K(Ie);
    for (let we = 0; we < 32; we++)
      P[we] = Oe[we];
    for (let we = 0; we < 32; we++)
      for (let Fe = 0; Fe < 32; Fe++)
        P[we + Fe] += Ie[we] * I[Fe];
    return $(Z.subarray(32), P), Z;
  }
  t.sign = fe;
  function H(U, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), Oe = s(), Ie = s();
    return m(U[2], o), b(U[1], F), y(I, U[1]), l(Z, I, u), g(I, I, U[2]), x(Z, U[2], Z), y(X, Z), y(Oe, X), l(Ie, Oe, X), l(P, Ie, I), l(P, P, Z), T(P, P), l(P, P, I), l(P, P, Z), l(P, P, Z), l(U[0], P, Z), y(h, U[0]), l(h, h, Z), w(h, I) && l(U[0], U[0], p), y(h, U[0]), l(h, h, Z), w(h, I) ? -1 : (D(U[0]) === F[31] >> 7 && g(U[0], a, U[0]), l(U[3], U[0], U[1]), 0);
  }
  function ae(U, F, P) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], Z = [s(), s(), s(), s()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(Z, U))
      return !1;
    const X = new r.SHA512();
    X.update(P.subarray(0, 32)), X.update(U), X.update(F);
    const Oe = X.digest();
    return K(Oe), R(I, Z, Oe), L(Z, P.subarray(32)), M(I, Z), G(h, I), !A(P, h);
  }
  t.verify = ae;
  function te(U) {
    let F = [s(), s(), s(), s()];
    if (H(F, U))
      throw new Error("Ed25519: invalid public key");
    let P = s(), h = s(), I = F[1];
    x(P, o, I), g(h, o, I), C(h, h), l(P, P, h);
    let Z = new Uint8Array(32);
    return S(Z, P), Z;
  }
  t.convertPublicKeyToX25519 = te;
  function oe(U) {
    const F = (0, r.hash)(U.subarray(0, 32));
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(F.subarray(0, 32));
    return (0, n.wipe)(F), P;
  }
  t.convertSecretKeyToX25519 = oe;
})(Dc);
const am = "EdDSA", cm = "JWT", ih = ".", oh = "base64url", um = "utf8", lm = "utf8", fm = ":", hm = "did", dm = "key", Gu = "base58btc", pm = "z", gm = "K36", ym = 32;
function Oc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ah(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Oc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ua(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = ah(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return Oc(r);
}
function mm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), a = i.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[a] = s;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, A = 0, w = v.length; A !== w && v[A] === 0; )
      A++, E++;
    for (var D = (w - A) * f + 1 >>> 0, b = new Uint8Array(D); A !== w; ) {
      for (var x = v[A], g = 0, l = D - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = D - S; y !== D && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < D; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, A = 0; v[E] === u; )
        S++, E++;
      for (var w = (v.length - E) * c + 1 >>> 0, D = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < A) && g !== -1; g--, x++)
          b += o * D[g] >>> 0, D[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - A; l !== w && D[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = D[l++];
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
    encode: d,
    decodeUnsafe: p,
    decode: m
  };
}
var vm = mm, bm = vm;
const wm = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, _m = (t) => new TextEncoder().encode(t), Em = (t) => new TextDecoder().decode(t);
class Sm {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class xm {
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
    return ch(this, e);
  }
}
class Dm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ch(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ch = (t, e) => new Dm({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Om {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Sm(e, r, n), this.decoder = new xm(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Fo = ({ name: t, prefix: e, encode: r, decode: n }) => new Om(t, e, r, n), vi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = bm(r, e);
  return Fo({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => wm(s(i))
  });
}, Im = (t, e, r, n) => {
  const s = {};
  for (let f = 0; f < e.length; ++f)
    s[e[f]] = f;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < i; ++f) {
    const d = s[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Cm = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Fo({
  prefix: e,
  name: t,
  encode(s) {
    return Cm(s, n, r);
  },
  decode(s) {
    return Im(s, n, r, t);
  }
}), Rm = Fo({
  prefix: "\0",
  name: "identity",
  encode: (t) => Em(t),
  decode: (t) => _m(t)
}), Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Rm
}, Symbol.toStringTag, { value: "Module" })), Am = Pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Am
}, Symbol.toStringTag, { value: "Module" })), Nm = Pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Nm
}, Symbol.toStringTag, { value: "Module" })), Fm = vi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Fm
}, Symbol.toStringTag, { value: "Module" })), Mm = Pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), jm = Pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), $m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Mm,
  base16upper: jm
}, Symbol.toStringTag, { value: "Module" })), km = Pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), qm = Pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), zm = Pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Bm = Pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Vm = Pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Km = Pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Hm = Pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Wm = Pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Gm = Pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: km,
  base32hex: Vm,
  base32hexpad: Hm,
  base32hexpadupper: Wm,
  base32hexupper: Km,
  base32pad: zm,
  base32padupper: Bm,
  base32upper: qm,
  base32z: Gm
}, Symbol.toStringTag, { value: "Module" })), Zm = vi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Ym = vi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Zm,
  base36upper: Ym
}, Symbol.toStringTag, { value: "Module" })), Xm = vi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), ev = vi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Xm,
  base58flickr: ev
}, Symbol.toStringTag, { value: "Module" })), rv = Pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), nv = Pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), sv = Pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), iv = Pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: rv,
  base64pad: nv,
  base64url: sv,
  base64urlpad: iv
}, Symbol.toStringTag, { value: "Module" })), uh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), av = uh.reduce((t, e, r) => (t[r] = e, t), []), cv = uh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function uv(t) {
  return t.reduce((e, r) => (e += av[r], e), "");
}
function lv(t) {
  const e = [];
  for (const r of t) {
    const n = cv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const fv = Fo({
  prefix: "🚀",
  name: "base256emoji",
  encode: uv,
  decode: lv
}), hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: fv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Qu = {
  ...Tm,
  ...Pm,
  ...Lm,
  ...Um,
  ...$m,
  ...Qm,
  ...Jm,
  ...tv,
  ...ov,
  ...hv
};
function lh(t, e, r, n) {
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
const Zu = lh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ca = lh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = ah(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), fh = {
  utf8: Zu,
  "utf-8": Zu,
  hex: Qu.base16,
  latin1: ca,
  ascii: ca,
  binary: ca,
  ...Qu
};
function Qt(t, e = "utf8") {
  const r = fh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function tr(t, e = "utf8") {
  const r = fh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Oc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function ao(t) {
  return Qt(tr(mi(t), um), oh);
}
function hh(t) {
  const e = tr(gm, Gu), r = pm + Qt(Ua([e, t]), Gu);
  return [hm, dm, r].join(fm);
}
function dv(t) {
  return Qt(t, oh);
}
function pv(t) {
  return tr([ao(t.header), ao(t.payload)].join(ih), lm);
}
function gv(t) {
  return [
    ao(t.header),
    ao(t.payload),
    dv(t.signature)
  ].join(ih);
}
function Yu(t = ps.randomBytes(ym)) {
  return Dc.generateKeyPairFromSeed(t);
}
async function yv(t, e, r, n, s = se.fromMiliseconds(Date.now())) {
  const i = { alg: am, typ: cm }, a = hh(n.publicKey), o = s + r, u = { iss: a, sub: t, aud: e, iat: s, exp: o }, c = pv({ header: i, payload: u }), f = Dc.sign(n.secretKey, c);
  return gv({ header: i, payload: u, signature: f });
}
var Ic = {}, Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
var Ut = me, Ma = cr, mv = 20;
function vv(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], c = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], S = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], A = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], D = n, b = s, x = i, g = a, l = o, y = u, C = c, T = f, M = d, z = p, G = m, R = v, L = E, Q = S, V = A, k = w, B = 0; B < mv; B += 2)
    D = D + l | 0, L ^= D, L = L >>> 16 | L << 16, M = M + L | 0, l ^= M, l = l >>> 20 | l << 12, b = b + y | 0, Q ^= b, Q = Q >>> 16 | Q << 16, z = z + Q | 0, y ^= z, y = y >>> 20 | y << 12, x = x + C | 0, V ^= x, V = V >>> 16 | V << 16, G = G + V | 0, C ^= G, C = C >>> 20 | C << 12, g = g + T | 0, k ^= g, k = k >>> 16 | k << 16, R = R + k | 0, T ^= R, T = T >>> 20 | T << 12, x = x + C | 0, V ^= x, V = V >>> 24 | V << 8, G = G + V | 0, C ^= G, C = C >>> 25 | C << 7, g = g + T | 0, k ^= g, k = k >>> 24 | k << 8, R = R + k | 0, T ^= R, T = T >>> 25 | T << 7, b = b + y | 0, Q ^= b, Q = Q >>> 24 | Q << 8, z = z + Q | 0, y ^= z, y = y >>> 25 | y << 7, D = D + l | 0, L ^= D, L = L >>> 24 | L << 8, M = M + L | 0, l ^= M, l = l >>> 25 | l << 7, D = D + y | 0, k ^= D, k = k >>> 16 | k << 16, G = G + k | 0, y ^= G, y = y >>> 20 | y << 12, b = b + C | 0, L ^= b, L = L >>> 16 | L << 16, R = R + L | 0, C ^= R, C = C >>> 20 | C << 12, x = x + T | 0, Q ^= x, Q = Q >>> 16 | Q << 16, M = M + Q | 0, T ^= M, T = T >>> 20 | T << 12, g = g + l | 0, V ^= g, V = V >>> 16 | V << 16, z = z + V | 0, l ^= z, l = l >>> 20 | l << 12, x = x + T | 0, Q ^= x, Q = Q >>> 24 | Q << 8, M = M + Q | 0, T ^= M, T = T >>> 25 | T << 7, g = g + l | 0, V ^= g, V = V >>> 24 | V << 8, z = z + V | 0, l ^= z, l = l >>> 25 | l << 7, b = b + C | 0, L ^= b, L = L >>> 24 | L << 8, R = R + L | 0, C ^= R, C = C >>> 25 | C << 7, D = D + y | 0, k ^= D, k = k >>> 24 | k << 8, G = G + k | 0, y ^= G, y = y >>> 25 | y << 7;
  Ut.writeUint32LE(D + n | 0, t, 0), Ut.writeUint32LE(b + s | 0, t, 4), Ut.writeUint32LE(x + i | 0, t, 8), Ut.writeUint32LE(g + a | 0, t, 12), Ut.writeUint32LE(l + o | 0, t, 16), Ut.writeUint32LE(y + u | 0, t, 20), Ut.writeUint32LE(C + c | 0, t, 24), Ut.writeUint32LE(T + f | 0, t, 28), Ut.writeUint32LE(M + d | 0, t, 32), Ut.writeUint32LE(z + p | 0, t, 36), Ut.writeUint32LE(G + m | 0, t, 40), Ut.writeUint32LE(R + v | 0, t, 44), Ut.writeUint32LE(L + E | 0, t, 48), Ut.writeUint32LE(Q + S | 0, t, 52), Ut.writeUint32LE(V + A | 0, t, 56), Ut.writeUint32LE(k + w | 0, t, 60);
}
function dh(t, e, r, n, s) {
  if (s === void 0 && (s = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var i, a;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    i = new Uint8Array(16), a = i.length - e.length, i.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    i = e, a = s;
  }
  for (var o = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    vv(o, i, t);
    for (var c = u; c < u + 64 && c < r.length; c++)
      n[c] = r[c] ^ o[c - u];
    wv(i, 0, a);
  }
  return Ma.wipe(o), s === 0 && Ma.wipe(i), n;
}
Uo.streamXOR = dh;
function bv(t, e, r, n) {
  return n === void 0 && (n = 0), Ma.wipe(r), dh(t, e, r, r, n);
}
Uo.stream = bv;
function wv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var ph = {}, yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
function _v(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
yn.select = _v;
function Ev(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
yn.lessOrEqual = Ev;
function gh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
yn.compare = gh;
function Sv(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : gh(t, e) !== 0;
}
yn.equal = Sv;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = yn, r = cr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var c = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | c << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (c >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var p = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var E = o[14] | o[15] << 8;
        this._r[8] = (v >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, c) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], E = this._h[4], S = this._h[5], A = this._h[6], w = this._h[7], D = this._h[8], b = this._h[9], x = this._r[0], g = this._r[1], l = this._r[2], y = this._r[3], C = this._r[4], T = this._r[5], M = this._r[6], z = this._r[7], G = this._r[8], R = this._r[9]; c >= 16; ) {
          var L = o[u + 0] | o[u + 1] << 8;
          d += L & 8191;
          var Q = o[u + 2] | o[u + 3] << 8;
          p += (L >>> 13 | Q << 3) & 8191;
          var V = o[u + 4] | o[u + 5] << 8;
          m += (Q >>> 10 | V << 6) & 8191;
          var k = o[u + 6] | o[u + 7] << 8;
          v += (V >>> 7 | k << 9) & 8191;
          var B = o[u + 8] | o[u + 9] << 8;
          E += (k >>> 4 | B << 12) & 8191, S += B >>> 1 & 8191;
          var $ = o[u + 10] | o[u + 11] << 8;
          A += (B >>> 14 | $ << 2) & 8191;
          var K = o[u + 12] | o[u + 13] << 8;
          w += ($ >>> 11 | K << 5) & 8191;
          var fe = o[u + 14] | o[u + 15] << 8;
          D += (K >>> 8 | fe << 8) & 8191, b += fe >>> 5 | f;
          var H = 0, ae = H;
          ae += d * x, ae += p * (5 * R), ae += m * (5 * G), ae += v * (5 * z), ae += E * (5 * M), H = ae >>> 13, ae &= 8191, ae += S * (5 * T), ae += A * (5 * C), ae += w * (5 * y), ae += D * (5 * l), ae += b * (5 * g), H += ae >>> 13, ae &= 8191;
          var te = H;
          te += d * g, te += p * x, te += m * (5 * R), te += v * (5 * G), te += E * (5 * z), H = te >>> 13, te &= 8191, te += S * (5 * M), te += A * (5 * T), te += w * (5 * C), te += D * (5 * y), te += b * (5 * l), H += te >>> 13, te &= 8191;
          var oe = H;
          oe += d * l, oe += p * g, oe += m * x, oe += v * (5 * R), oe += E * (5 * G), H = oe >>> 13, oe &= 8191, oe += S * (5 * z), oe += A * (5 * M), oe += w * (5 * T), oe += D * (5 * C), oe += b * (5 * y), H += oe >>> 13, oe &= 8191;
          var U = H;
          U += d * y, U += p * l, U += m * g, U += v * x, U += E * (5 * R), H = U >>> 13, U &= 8191, U += S * (5 * G), U += A * (5 * z), U += w * (5 * M), U += D * (5 * T), U += b * (5 * C), H += U >>> 13, U &= 8191;
          var F = H;
          F += d * C, F += p * y, F += m * l, F += v * g, F += E * x, H = F >>> 13, F &= 8191, F += S * (5 * R), F += A * (5 * G), F += w * (5 * z), F += D * (5 * M), F += b * (5 * T), H += F >>> 13, F &= 8191;
          var P = H;
          P += d * T, P += p * C, P += m * y, P += v * l, P += E * g, H = P >>> 13, P &= 8191, P += S * x, P += A * (5 * R), P += w * (5 * G), P += D * (5 * z), P += b * (5 * M), H += P >>> 13, P &= 8191;
          var h = H;
          h += d * M, h += p * T, h += m * C, h += v * y, h += E * l, H = h >>> 13, h &= 8191, h += S * g, h += A * x, h += w * (5 * R), h += D * (5 * G), h += b * (5 * z), H += h >>> 13, h &= 8191;
          var I = H;
          I += d * z, I += p * M, I += m * T, I += v * C, I += E * y, H = I >>> 13, I &= 8191, I += S * l, I += A * g, I += w * x, I += D * (5 * R), I += b * (5 * G), H += I >>> 13, I &= 8191;
          var Z = H;
          Z += d * G, Z += p * z, Z += m * M, Z += v * T, Z += E * C, H = Z >>> 13, Z &= 8191, Z += S * y, Z += A * l, Z += w * g, Z += D * x, Z += b * (5 * R), H += Z >>> 13, Z &= 8191;
          var X = H;
          X += d * R, X += p * G, X += m * z, X += v * M, X += E * T, H = X >>> 13, X &= 8191, X += S * C, X += A * y, X += w * l, X += D * g, X += b * x, H += X >>> 13, X &= 8191, H = (H << 2) + H | 0, H = H + ae | 0, ae = H & 8191, H = H >>> 13, te += H, d = ae, p = te, m = oe, v = U, E = F, S = P, A = h, w = I, D = Z, b = X, u += 16, c -= 16;
        }
        this._h[0] = d, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = E, this._h[5] = S, this._h[6] = A, this._h[7] = w, this._h[8] = D, this._h[9] = b;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var c = new Uint16Array(10), f, d, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, c[0] = this._h[0] + 5, f = c[0] >>> 13, c[0] &= 8191, m = 1; m < 10; m++)
          c[m] = this._h[m] + f, f = c[m] >>> 13, c[m] &= 8191;
        for (c[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          c[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | c[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var u = 0, c = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > c && (f = c);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (c -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (c >= 16 && (f = c - c % 16, this._blocks(o, u, f), u += f, c -= f), c) {
          for (var d = 0; d < c; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += c;
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
  function s(a, o) {
    var u = new n(a);
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.oneTimeAuth = s;
  function i(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = i;
})(ph);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Uo, r = ph, n = cr, s = me, i = yn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(c) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, c.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(c);
      }
      return u.prototype.seal = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = f.length + this.tagLength, S;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          S = p;
        } else
          S = new Uint8Array(E);
        return e.streamXOR(this._key, m, f, S, 4), this._authenticate(S.subarray(S.length - this.tagLength, S.length), v, S.subarray(0, S.length - this.tagLength), d), n.wipe(m), S;
      }, u.prototype.open = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, v, f.subarray(0, f.length - this.tagLength), d), !i.equal(E, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var S = f.length - this.tagLength, A;
        if (p) {
          if (p.length !== S)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          A = p;
        } else
          A = new Uint8Array(S);
        return e.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), A, 4), n.wipe(m), A;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(c, f, d, p) {
        var m = new r.Poly1305(f);
        p && (m.update(p), p.length % 16 > 0 && m.update(a.subarray(p.length % 16))), m.update(d), d.length % 16 > 0 && m.update(a.subarray(d.length % 16));
        var v = new Uint8Array(8);
        p && s.writeUint64LE(p.length, v), m.update(v), s.writeUint64LE(d.length, v), m.update(v);
        for (var E = m.digest(), S = 0; S < E.length; S++)
          c[S] = E[S];
        m.clean(), n.wipe(E), n.wipe(v);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(Ic);
var yh = {}, bi = {}, Cc = {};
Object.defineProperty(Cc, "__esModule", { value: !0 });
function xv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Cc.isSerializableHash = xv;
Object.defineProperty(bi, "__esModule", { value: !0 });
var Pr = Cc, Dv = yn, Ov = cr, mh = (
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
      this._outer.update(n), Pr.isSerializableHash(this._inner) && Pr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Ov.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Pr.isSerializableHash(this._inner) || !Pr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Pr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Pr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Pr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Pr.isSerializableHash(this._inner) || !Pr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Pr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
bi.HMAC = mh;
function Iv(t, e, r) {
  var n = new mh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
bi.hmac = Iv;
bi.equal = Dv.equal;
Object.defineProperty(yh, "__esModule", { value: !0 });
var Ju = bi, Xu = cr, Cv = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Ju.hmac(this._hash, n, r);
      this._hmac = new Ju.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Xu.wipe(this._buffer), Xu.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Rv = yh.HKDF = Cv, Mo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = cr;
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
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = i(this._temp, this._state, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 4; v++)
          e.writeUint32BE(this._state[v], u, v * 4);
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
  function i(o, u, c, f, d) {
    for (; d >= 64; ) {
      for (var p = u[0], m = u[1], v = u[2], E = u[3], S = u[4], A = u[5], w = u[6], D = u[7], b = 0; b < 16; b++) {
        var x = f + b * 4;
        o[b] = e.readUint32BE(c, x);
      }
      for (var b = 16; b < 64; b++) {
        var g = o[b - 2], l = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = o[b - 15];
        var y = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        o[b] = (l + o[b - 7] | 0) + (y + o[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var l = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & A ^ ~S & w) | 0) + (D + (s[b] + o[b] | 0) | 0) | 0, y = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & v ^ m & v) | 0;
        D = w, w = A, A = S, S = E + l | 0, E = v, v = m, m = p, p = l + y | 0;
      }
      u[0] += p, u[1] += m, u[2] += v, u[3] += E, u[4] += S, u[5] += A, u[6] += w, u[7] += D, f += 64, d -= 64;
    }
    return f;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(Mo);
var Rc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = ps, r = cr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const x = new Float64Array(16);
    if (b)
      for (let g = 0; g < b.length; g++)
        x[g] = b[g];
    return x;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function a(b) {
    let x = 1;
    for (let g = 0; g < 16; g++) {
      let l = b[g] + x + 65535;
      x = Math.floor(l / 65536), b[g] = l - x * 65536;
    }
    b[0] += x - 1 + 37 * (x - 1);
  }
  function o(b, x, g) {
    const l = ~(g - 1);
    for (let y = 0; y < 16; y++) {
      const C = l & (b[y] ^ x[y]);
      b[y] ^= C, x[y] ^= C;
    }
  }
  function u(b, x) {
    const g = n(), l = n();
    for (let y = 0; y < 16; y++)
      l[y] = x[y];
    a(l), a(l), a(l);
    for (let y = 0; y < 2; y++) {
      g[0] = l[0] - 65517;
      for (let T = 1; T < 15; T++)
        g[T] = l[T] - 65535 - (g[T - 1] >> 16 & 1), g[T - 1] &= 65535;
      g[15] = l[15] - 32767 - (g[14] >> 16 & 1);
      const C = g[15] >> 16 & 1;
      g[14] &= 65535, o(l, g, 1 - C);
    }
    for (let y = 0; y < 16; y++)
      b[2 * y] = l[y] & 255, b[2 * y + 1] = l[y] >> 8;
  }
  function c(b, x) {
    for (let g = 0; g < 16; g++)
      b[g] = x[2 * g] + (x[2 * g + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, x, g) {
    for (let l = 0; l < 16; l++)
      b[l] = x[l] + g[l];
  }
  function d(b, x, g) {
    for (let l = 0; l < 16; l++)
      b[l] = x[l] - g[l];
  }
  function p(b, x, g) {
    let l, y, C = 0, T = 0, M = 0, z = 0, G = 0, R = 0, L = 0, Q = 0, V = 0, k = 0, B = 0, $ = 0, K = 0, fe = 0, H = 0, ae = 0, te = 0, oe = 0, U = 0, F = 0, P = 0, h = 0, I = 0, Z = 0, X = 0, Oe = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = g[0], Te = g[1], _e = g[2], Se = g[3], Ee = g[4], ge = g[5], pe = g[6], ce = g[7], xe = g[8], Ce = g[9], he = g[10], Ae = g[11], Ue = g[12], ke = g[13], qe = g[14], je = g[15];
    l = x[0], C += l * Ne, T += l * Te, M += l * _e, z += l * Se, G += l * Ee, R += l * ge, L += l * pe, Q += l * ce, V += l * xe, k += l * Ce, B += l * he, $ += l * Ae, K += l * Ue, fe += l * ke, H += l * qe, ae += l * je, l = x[1], T += l * Ne, M += l * Te, z += l * _e, G += l * Se, R += l * Ee, L += l * ge, Q += l * pe, V += l * ce, k += l * xe, B += l * Ce, $ += l * he, K += l * Ae, fe += l * Ue, H += l * ke, ae += l * qe, te += l * je, l = x[2], M += l * Ne, z += l * Te, G += l * _e, R += l * Se, L += l * Ee, Q += l * ge, V += l * pe, k += l * ce, B += l * xe, $ += l * Ce, K += l * he, fe += l * Ae, H += l * Ue, ae += l * ke, te += l * qe, oe += l * je, l = x[3], z += l * Ne, G += l * Te, R += l * _e, L += l * Se, Q += l * Ee, V += l * ge, k += l * pe, B += l * ce, $ += l * xe, K += l * Ce, fe += l * he, H += l * Ae, ae += l * Ue, te += l * ke, oe += l * qe, U += l * je, l = x[4], G += l * Ne, R += l * Te, L += l * _e, Q += l * Se, V += l * Ee, k += l * ge, B += l * pe, $ += l * ce, K += l * xe, fe += l * Ce, H += l * he, ae += l * Ae, te += l * Ue, oe += l * ke, U += l * qe, F += l * je, l = x[5], R += l * Ne, L += l * Te, Q += l * _e, V += l * Se, k += l * Ee, B += l * ge, $ += l * pe, K += l * ce, fe += l * xe, H += l * Ce, ae += l * he, te += l * Ae, oe += l * Ue, U += l * ke, F += l * qe, P += l * je, l = x[6], L += l * Ne, Q += l * Te, V += l * _e, k += l * Se, B += l * Ee, $ += l * ge, K += l * pe, fe += l * ce, H += l * xe, ae += l * Ce, te += l * he, oe += l * Ae, U += l * Ue, F += l * ke, P += l * qe, h += l * je, l = x[7], Q += l * Ne, V += l * Te, k += l * _e, B += l * Se, $ += l * Ee, K += l * ge, fe += l * pe, H += l * ce, ae += l * xe, te += l * Ce, oe += l * he, U += l * Ae, F += l * Ue, P += l * ke, h += l * qe, I += l * je, l = x[8], V += l * Ne, k += l * Te, B += l * _e, $ += l * Se, K += l * Ee, fe += l * ge, H += l * pe, ae += l * ce, te += l * xe, oe += l * Ce, U += l * he, F += l * Ae, P += l * Ue, h += l * ke, I += l * qe, Z += l * je, l = x[9], k += l * Ne, B += l * Te, $ += l * _e, K += l * Se, fe += l * Ee, H += l * ge, ae += l * pe, te += l * ce, oe += l * xe, U += l * Ce, F += l * he, P += l * Ae, h += l * Ue, I += l * ke, Z += l * qe, X += l * je, l = x[10], B += l * Ne, $ += l * Te, K += l * _e, fe += l * Se, H += l * Ee, ae += l * ge, te += l * pe, oe += l * ce, U += l * xe, F += l * Ce, P += l * he, h += l * Ae, I += l * Ue, Z += l * ke, X += l * qe, Oe += l * je, l = x[11], $ += l * Ne, K += l * Te, fe += l * _e, H += l * Se, ae += l * Ee, te += l * ge, oe += l * pe, U += l * ce, F += l * xe, P += l * Ce, h += l * he, I += l * Ae, Z += l * Ue, X += l * ke, Oe += l * qe, Ie += l * je, l = x[12], K += l * Ne, fe += l * Te, H += l * _e, ae += l * Se, te += l * Ee, oe += l * ge, U += l * pe, F += l * ce, P += l * xe, h += l * Ce, I += l * he, Z += l * Ae, X += l * Ue, Oe += l * ke, Ie += l * qe, we += l * je, l = x[13], fe += l * Ne, H += l * Te, ae += l * _e, te += l * Se, oe += l * Ee, U += l * ge, F += l * pe, P += l * ce, h += l * xe, I += l * Ce, Z += l * he, X += l * Ae, Oe += l * Ue, Ie += l * ke, we += l * qe, Fe += l * je, l = x[14], H += l * Ne, ae += l * Te, te += l * _e, oe += l * Se, U += l * Ee, F += l * ge, P += l * pe, h += l * ce, I += l * xe, Z += l * Ce, X += l * he, Oe += l * Ae, Ie += l * Ue, we += l * ke, Fe += l * qe, Je += l * je, l = x[15], ae += l * Ne, te += l * Te, oe += l * _e, U += l * Se, F += l * Ee, P += l * ge, h += l * pe, I += l * ce, Z += l * xe, X += l * Ce, Oe += l * he, Ie += l * Ae, we += l * Ue, Fe += l * ke, Je += l * qe, He += l * je, C += 38 * te, T += 38 * oe, M += 38 * U, z += 38 * F, G += 38 * P, R += 38 * h, L += 38 * I, Q += 38 * Z, V += 38 * X, k += 38 * Oe, B += 38 * Ie, $ += 38 * we, K += 38 * Fe, fe += 38 * Je, H += 38 * He, y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = M + y + 65535, y = Math.floor(l / 65536), M = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = M + y + 65535, y = Math.floor(l / 65536), M = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), b[0] = C, b[1] = T, b[2] = M, b[3] = z, b[4] = G, b[5] = R, b[6] = L, b[7] = Q, b[8] = V, b[9] = k, b[10] = B, b[11] = $, b[12] = K, b[13] = fe, b[14] = H, b[15] = ae;
  }
  function m(b, x) {
    p(b, x, x);
  }
  function v(b, x) {
    const g = n();
    for (let l = 0; l < 16; l++)
      g[l] = x[l];
    for (let l = 253; l >= 0; l--)
      m(g, g), l !== 2 && l !== 4 && p(g, g, x);
    for (let l = 0; l < 16; l++)
      b[l] = g[l];
  }
  function E(b, x) {
    const g = new Uint8Array(32), l = new Float64Array(80), y = n(), C = n(), T = n(), M = n(), z = n(), G = n();
    for (let V = 0; V < 31; V++)
      g[V] = b[V];
    g[31] = b[31] & 127 | 64, g[0] &= 248, c(l, x);
    for (let V = 0; V < 16; V++)
      C[V] = l[V];
    y[0] = M[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const k = g[V >>> 3] >>> (V & 7) & 1;
      o(y, C, k), o(T, M, k), f(z, y, T), d(y, y, T), f(T, C, M), d(C, C, M), m(M, z), m(G, y), p(y, T, y), p(T, C, z), f(z, y, T), d(y, y, T), m(C, y), d(T, M, G), p(y, T, i), f(y, y, M), p(T, T, y), p(y, M, G), p(M, C, l), m(C, z), o(y, C, k), o(T, M, k);
    }
    for (let V = 0; V < 16; V++)
      l[V + 16] = y[V], l[V + 32] = T[V], l[V + 48] = C[V], l[V + 64] = M[V];
    const R = l.subarray(32), L = l.subarray(16);
    v(R, R), p(L, L, R);
    const Q = new Uint8Array(32);
    return u(Q, L), Q;
  }
  t.scalarMult = E;
  function S(b) {
    return E(b, s);
  }
  t.scalarMultBase = S;
  function A(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const x = new Uint8Array(b);
    return {
      publicKey: S(x),
      secretKey: x
    };
  }
  t.generateKeyPairFromSeed = A;
  function w(b) {
    const x = (0, e.randomBytes)(32, b), g = A(x);
    return (0, r.wipe)(x), g;
  }
  t.generateKeyPair = w;
  function D(b, x, g = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const l = E(b, x);
    if (g) {
      let y = 0;
      for (let C = 0; C < l.length; C++)
        y |= l[C];
      if (y === 0)
        throw new Error("X25519: invalid shared key");
    }
    return l;
  }
  t.sharedKey = D;
})(Rc);
var el = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Tv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Av = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Pv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Nv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Lv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Fv = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Uv = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, tl = 3, Mv = [
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
  ["searchbot", Fv]
], rl = [
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
function jv(t) {
  return t ? nl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Lv() : typeof navigator < "u" ? nl(navigator.userAgent) : qv();
}
function $v(t) {
  return t !== "" && Mv.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function nl(t) {
  var e = $v(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Nv();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < tl && (s = el(el([], s, !0), zv(tl - s.length), !0)) : s = [];
  var i = s.join("."), a = kv(t), o = Uv.exec(t);
  return o && o[1] ? new Pv(r, i, a, o[1]) : new Tv(r, i, a);
}
function kv(t) {
  for (var e = 0, r = rl.length; e < r; e++) {
    var n = rl[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function qv() {
  var t = typeof process < "u" && process.version;
  return t ? new Av(process.version.slice(1)) : null;
}
function zv(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.getLocalStorage = Ge.getLocalStorageOrThrow = Ge.getCrypto = Ge.getCryptoOrThrow = vh = Ge.getLocation = Ge.getLocationOrThrow = Ac = Ge.getNavigator = Ge.getNavigatorOrThrow = Tc = Ge.getDocument = Ge.getDocumentOrThrow = Ge.getFromWindowOrThrow = Ge.getFromWindow = void 0;
function $n(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Ge.getFromWindow = $n;
function gs(t) {
  const e = $n(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Ge.getFromWindowOrThrow = gs;
function Bv() {
  return gs("document");
}
Ge.getDocumentOrThrow = Bv;
function Vv() {
  return $n("document");
}
var Tc = Ge.getDocument = Vv;
function Kv() {
  return gs("navigator");
}
Ge.getNavigatorOrThrow = Kv;
function Hv() {
  return $n("navigator");
}
var Ac = Ge.getNavigator = Hv;
function Wv() {
  return gs("location");
}
Ge.getLocationOrThrow = Wv;
function Gv() {
  return $n("location");
}
var vh = Ge.getLocation = Gv;
function Qv() {
  return gs("crypto");
}
Ge.getCryptoOrThrow = Qv;
function Zv() {
  return $n("crypto");
}
Ge.getCrypto = Zv;
function Yv() {
  return gs("localStorage");
}
Ge.getLocalStorageOrThrow = Yv;
function Jv() {
  return $n("localStorage");
}
Ge.getLocalStorage = Jv;
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
var bh = Pc.getWindowMetadata = void 0;
const sl = Ge;
function Xv() {
  let t, e;
  try {
    t = sl.getDocumentOrThrow(), e = sl.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), p = [];
    for (let m = 0; m < d.length; m++) {
      const v = d[m], E = v.getAttribute("rel");
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
              const D = w.join("/");
              A += D + "/" + S;
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
  function n(...d) {
    const p = t.getElementsByTagName("meta");
    for (let m = 0; m < p.length; m++) {
      const v = p[m], E = ["itemprop", "property", "name"].map((S) => v.getAttribute(S)).filter((S) => S ? d.includes(S) : !1);
      if (E.length && E) {
        const S = v.getAttribute("content");
        if (S)
          return S;
      }
    }
    return "";
  }
  function s() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = t.title), d;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const a = s(), o = i(), u = e.origin, c = r();
  return {
    description: o,
    url: u,
    icons: c,
    name: a
  };
}
bh = Pc.getWindowMetadata = Xv;
var Bs = {}, e0 = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), wh = "%[a-f0-9]{2}", il = new RegExp("(" + wh + ")|([^%]+?)", "gi"), ol = new RegExp("(" + wh + ")+", "gi");
function ja(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], ja(r), ja(n));
}
function t0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(il) || [], r = 1; r < e.length; r++)
      t = ja(e, r).join(""), e = t.match(il) || [];
    return t;
  }
}
function r0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ol.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = t0(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = ol.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var a = s[i];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var n0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return r0(t);
  }
}, s0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, i0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = e0, r = n0, n = s0, s = i0, i = (w) => w == null, a = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (D) => (b, x) => {
          const g = b.length;
          return x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(D, w), "[", g, "]"].join("")] : [
            ...b,
            [f(D, w), "[", f(g, w), "]=", f(x, w)].join("")
          ];
        };
      case "bracket":
        return (D) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(D, w), "[]"].join("")] : [...b, [f(D, w), "[]=", f(x, w)].join("")];
      case "colon-list-separator":
        return (D) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(D, w), ":list="].join("")] : [...b, [f(D, w), ":list=", f(x, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (x, g) => g === void 0 || w.skipNull && g === null || w.skipEmptyString && g === "" ? x : (g = g === null ? "" : g, x.length === 0 ? [[f(b, w), D, f(g, w)].join("")] : [[x, f(g, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (D) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, f(D, w)] : [...b, [f(D, w), "=", f(x, w)].join("")];
    }
  }
  function u(w) {
    let D;
    switch (w.arrayFormat) {
      case "index":
        return (b, x, g) => {
          if (D = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !D) {
            g[b] = x;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][D[1]] = x;
        };
      case "bracket":
        return (b, x, g) => {
          if (D = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !D) {
            g[b] = x;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [x];
            return;
          }
          g[b] = [].concat(g[b], x);
        };
      case "colon-list-separator":
        return (b, x, g) => {
          if (D = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !D) {
            g[b] = x;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [x];
            return;
          }
          g[b] = [].concat(g[b], x);
        };
      case "comma":
      case "separator":
        return (b, x, g) => {
          const l = typeof x == "string" && x.includes(w.arrayFormatSeparator), y = typeof x == "string" && !l && d(x, w).includes(w.arrayFormatSeparator);
          x = y ? d(x, w) : x;
          const C = l || y ? x.split(w.arrayFormatSeparator).map((T) => d(T, w)) : x === null ? x : d(x, w);
          g[b] = C;
        };
      case "bracket-separator":
        return (b, x, g) => {
          const l = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !l) {
            g[b] = x && d(x, w);
            return;
          }
          const y = x === null ? [] : x.split(w.arrayFormatSeparator).map((C) => d(C, w));
          if (g[b] === void 0) {
            g[b] = y;
            return;
          }
          g[b] = [].concat(g[b], y);
        };
      default:
        return (b, x, g) => {
          if (g[b] === void 0) {
            g[b] = x;
            return;
          }
          g[b] = [].concat(g[b], x);
        };
    }
  }
  function c(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, D) {
    return D.encode ? D.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, D) {
    return D.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((D, b) => Number(D) - Number(b)).map((D) => w[D]) : w;
  }
  function m(w) {
    const D = w.indexOf("#");
    return D !== -1 && (w = w.slice(0, D)), w;
  }
  function v(w) {
    let D = "";
    const b = w.indexOf("#");
    return b !== -1 && (D = w.slice(b)), D;
  }
  function E(w) {
    w = m(w);
    const D = w.indexOf("?");
    return D === -1 ? "" : w.slice(D + 1);
  }
  function S(w, D) {
    return D.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : D.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function A(w, D) {
    D = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, D), c(D.arrayFormatSeparator);
    const b = u(D), x = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return x;
    for (const g of w.split("&")) {
      if (g === "")
        continue;
      let [l, y] = n(D.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? y : d(y, D), b(d(l, D), y, x);
    }
    for (const g of Object.keys(x)) {
      const l = x[g];
      if (typeof l == "object" && l !== null)
        for (const y of Object.keys(l))
          l[y] = S(l[y], D);
      else
        x[g] = S(l, D);
    }
    return D.sort === !1 ? x : (D.sort === !0 ? Object.keys(x).sort() : Object.keys(x).sort(D.sort)).reduce((g, l) => {
      const y = x[l];
      return y && typeof y == "object" && !Array.isArray(y) ? g[l] = p(y) : g[l] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = A, t.stringify = (w, D) => {
    if (!w)
      return "";
    D = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, D), c(D.arrayFormatSeparator);
    const b = (y) => D.skipNull && i(w[y]) || D.skipEmptyString && w[y] === "", x = o(D), g = {};
    for (const y of Object.keys(w))
      b(y) || (g[y] = w[y]);
    const l = Object.keys(g);
    return D.sort !== !1 && l.sort(D.sort), l.map((y) => {
      const C = w[y];
      return C === void 0 ? "" : C === null ? f(y, D) : Array.isArray(C) ? C.length === 0 && D.arrayFormat === "bracket-separator" ? f(y, D) + "[]" : C.reduce(x(y), []).join("&") : f(y, D) + "=" + f(C, D);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (w, D) => {
    D = Object.assign({
      decode: !0
    }, D);
    const [b, x] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: A(E(w), D)
      },
      D && D.parseFragmentIdentifier && x ? { fragmentIdentifier: d(x, D) } : {}
    );
  }, t.stringifyUrl = (w, D) => {
    D = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, D);
    const b = m(w.url).split("?")[0] || "", x = t.extract(w.url), g = t.parse(x, { sort: !1 }), l = Object.assign(g, w.query);
    let y = t.stringify(l, D);
    y && (y = `?${y}`);
    let C = v(w.url);
    return w.fragmentIdentifier && (C = `#${D[a] ? f(w.fragmentIdentifier, D) : w.fragmentIdentifier}`), `${b}${y}${C}`;
  }, t.pick = (w, D, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, b);
    const { url: x, query: g, fragmentIdentifier: l } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: x,
      query: s(g, D),
      fragmentIdentifier: l
    }, b);
  }, t.exclude = (w, D, b) => {
    const x = Array.isArray(D) ? (g) => !D.includes(g) : (g, l) => !D(g, l);
    return t.pick(w, x, b);
  };
})(Bs);
const o0 = {
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
function _h(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Eh = "base10", Gt = "base16", $a = "base64pad", Nc = "utf8", Sh = 0, kn = 1, a0 = 0, al = 1, ka = 12, Lc = 32;
function c0() {
  const t = Rc.generateKeyPair();
  return { privateKey: Qt(t.secretKey, Gt), publicKey: Qt(t.publicKey, Gt) };
}
function qa() {
  const t = ps.randomBytes(Lc);
  return Qt(t, Gt);
}
function u0(t, e) {
  const r = Rc.sharedKey(tr(t, Gt), tr(e, Gt), !0), n = new Rv(Mo.SHA256, r).expand(Lc);
  return Qt(n, Gt);
}
function l0(t) {
  const e = Mo.hash(tr(t, Gt));
  return Qt(e, Gt);
}
function Jn(t) {
  const e = Mo.hash(tr(t, Nc));
  return Qt(e, Gt);
}
function f0(t) {
  return tr(`${t}`, Eh);
}
function wi(t) {
  return Number(Qt(t, Eh));
}
function h0(t) {
  const e = f0(typeof t.type < "u" ? t.type : Sh);
  if (wi(e) === kn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? tr(t.senderPublicKey, Gt) : void 0, n = typeof t.iv < "u" ? tr(t.iv, Gt) : ps.randomBytes(ka), s = new Ic.ChaCha20Poly1305(tr(t.symKey, Gt)).seal(n, tr(t.message, Nc));
  return p0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function d0(t) {
  const e = new Ic.ChaCha20Poly1305(tr(t.symKey, Gt)), { sealed: r, iv: n } = co(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Qt(s, Nc);
}
function p0(t) {
  if (wi(t.type) === kn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Qt(Ua([t.type, t.senderPublicKey, t.iv, t.sealed]), $a);
  }
  return Qt(Ua([t.type, t.iv, t.sealed]), $a);
}
function co(t) {
  const e = tr(t, $a), r = e.slice(a0, al), n = al;
  if (wi(r) === kn) {
    const o = n + Lc, u = o + ka, c = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: c };
  }
  const s = n + ka, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function g0(t, e) {
  const r = co(t);
  return xh({ type: wi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Qt(r.senderPublicKey, Gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function xh(t) {
  const e = (t == null ? void 0 : t.type) || Sh;
  if (e === kn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function cl(t) {
  return t.type === kn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var y0 = Object.defineProperty, ul = Object.getOwnPropertySymbols, m0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, ll = (t, e, r) => e in t ? y0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fl = (t, e) => {
  for (var r in e || (e = {}))
    m0.call(e, r) && ll(t, r, e[r]);
  if (ul)
    for (var r of ul(e))
      v0.call(e, r) && ll(t, r, e[r]);
  return t;
};
const b0 = "ReactNative", or = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, w0 = "js";
function Fc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ys() {
  return !Tc() && !!Ac() && navigator.product === b0;
}
function ms() {
  return !Fc() && !!Ac() && !!Tc();
}
function _i() {
  return ys() ? or.reactNative : Fc() ? or.node : ms() ? or.browser : or.unknown;
}
function _0() {
  var t;
  try {
    return ys() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function E0(t, e) {
  let r = Bs.parse(t);
  return r = fl(fl({}, r), e), t = Bs.stringify(r), t;
}
function S0() {
  return bh() || { name: "", description: "", url: "", icons: [""] };
}
function x0() {
  if (_i() === or.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = jv();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function D0() {
  var t;
  const e = _i();
  return e === or.browser ? [e, ((t = vh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function O0(t, e, r) {
  const n = x0(), s = D0();
  return [[t, e].join("-"), [w0, r].join("-"), n, s].join("/");
}
function I0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const u = r.split("?"), c = O0(t, e, n), f = { auth: s, ua: c, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, d = E0(u[1] || "", f);
  return u[0] + "?" + d;
}
function Cn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Dh(t) {
  return Object.fromEntries(t.entries());
}
function Oh(t) {
  return new Map(Object.entries(t));
}
function Kn(t = se.FIVE_MINUTES, e) {
  const r = se.toMiliseconds(t || se.FIVE_MINUTES);
  let n, s, i;
  return { resolve: (a) => {
    i && n && (clearTimeout(i), n(a));
  }, reject: (a) => {
    i && s && (clearTimeout(i), s(a));
  }, done: () => new Promise((a, o) => {
    i = setTimeout(() => {
      o(new Error(e));
    }, r), n = a, s = o;
  }) };
}
function Vs(t, e, r) {
  return new Promise(async (n, s) => {
    const i = setTimeout(() => s(new Error(r)), e);
    try {
      const a = await t;
      n(a);
    } catch (a) {
      s(a);
    }
    clearTimeout(i);
  });
}
function Ih(t, e) {
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
function C0(t) {
  return Ih("topic", t);
}
function R0(t) {
  return Ih("id", t);
}
function Ch(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function br(t, e) {
  return se.fromMiliseconds((e || Date.now()) + se.toMiliseconds(t));
}
function sn(t) {
  return Date.now() >= se.toMiliseconds(t);
}
function bt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function T0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = _i();
    a === or.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : a === or.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function A0(t, e) {
  try {
    return await t.getItem(e) || (ms() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const P0 = "irn";
function za(t) {
  return (t == null ? void 0 : t.relay) || { protocol: P0 };
}
function Xi(t) {
  const e = o0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var N0 = Object.defineProperty, hl = Object.getOwnPropertySymbols, L0 = Object.prototype.hasOwnProperty, F0 = Object.prototype.propertyIsEnumerable, dl = (t, e, r) => e in t ? N0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, U0 = (t, e) => {
  for (var r in e || (e = {}))
    L0.call(e, r) && dl(t, r, e[r]);
  if (hl)
    for (var r of hl(e))
      F0.call(e, r) && dl(t, r, e[r]);
  return t;
};
function M0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), a = t[s];
      r[i] = a;
    }
  }), r;
}
function pl(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = Bs.parse(i);
  return { protocol: n, topic: j0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: M0(a) };
}
function j0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function $0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function k0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + Bs.stringify(U0({ symKey: t.symKey }, $0(t.relay)));
}
function vs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function q0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...vs(r.accounts));
  }), e;
}
function z0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    vs(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function B0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    vs(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function V0(t, e) {
  const r = eo(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [s, i] of Object.entries(t))
    n[s] = { methods: i.methods, events: i.events, chains: i.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const K0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, H0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(t, e) {
  const { message: r, code: n } = H0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _t(t, e) {
  const { message: r, code: n } = K0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Ei(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function $s(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Kt(t) {
  return typeof t > "u";
}
function Ot(t, e) {
  return e && Kt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Uc(t, e) {
  return e && Kt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function W0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Cn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: c } = t.namespaces[a], f = vs(o), d = r[a];
    (!Cn(_h(a, d), f) || !Cn(d.methods, u) || !Cn(d.events, c)) && (i = !1);
  }), i) : !1;
}
function uo(t) {
  return Ot(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function G0(t) {
  if (Ot(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && uo(r);
    }
  }
  return !1;
}
function Q0(t) {
  if (Ot(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Z0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Y0(t) {
  return t == null ? void 0 : t.topic;
}
function J0(t, e) {
  let r = null;
  return Ot(t == null ? void 0 : t.publicKey, !1) || (r = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function gl(t) {
  let e = !0;
  return Ei(t) ? t.length && (e = t.every((r) => Ot(r, !1))) : e = !1, e;
}
function X0(t, e, r) {
  let n = null;
  return Ei(e) && e.length ? e.forEach((s) => {
    n || uo(s) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : uo(t) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function eb(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = X0(s, _h(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function tb(t, e) {
  let r = null;
  return Ei(t) ? t.forEach((n) => {
    r || G0(n) || (r = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function rb(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = tb(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function nb(t, e) {
  let r = null;
  return gl(t == null ? void 0 : t.methods) ? gl(t == null ? void 0 : t.events) || (r = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Rh(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = nb(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function sb(t, e, r) {
  let n = null;
  if (t && $s(t)) {
    const s = Rh(t, e);
    s && (n = s);
    const i = eb(t, e, r);
    i && (n = i);
  } else
    n = Y("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function eo(t, e) {
  let r = null;
  if (t && $s(t)) {
    const n = Rh(t, e);
    n && (r = n);
    const s = rb(t, e);
    s && (r = s);
  } else
    r = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Th(t) {
  return Ot(t.protocol, !0);
}
function ib(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Ei(t) && t.length && t.forEach((n) => {
    r = Th(n);
  }), r;
}
function ob(t) {
  return typeof t == "number";
}
function er(t) {
  return typeof t < "u" && typeof t !== null;
}
function ab(t) {
  return !(!t || typeof t != "object" || !t.code || !Uc(t.code, !1) || !t.message || !Ot(t.message, !1));
}
function cb(t) {
  return !(Kt(t) || !Ot(t.method, !1));
}
function ub(t) {
  return !(Kt(t) || Kt(t.result) && Kt(t.error) || !Uc(t.id, !1) || !Ot(t.jsonrpc, !1));
}
function lb(t) {
  return !(Kt(t) || !Ot(t.name, !1));
}
function yl(t, e) {
  return !(!uo(e) || !q0(t).includes(e));
}
function fb(t, e, r) {
  return Ot(r, !1) ? z0(t, e).includes(r) : !1;
}
function hb(t, e, r) {
  return Ot(r, !1) ? B0(t, e).includes(r) : !1;
}
function ml(t, e, r) {
  let n = null;
  const s = db(t), i = pb(e), a = Object.keys(s), o = Object.keys(i), u = vl(Object.keys(t)), c = vl(Object.keys(e)), f = u.filter((d) => !c.includes(d));
  return f.length && (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), Cn(a, o) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const p = vs(e[d].accounts);
    p.includes(d) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`));
  }), a.forEach((d) => {
    n || (Cn(s[d].methods, i[d].methods) ? Cn(s[d].events, i[d].events) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function db(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function vl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function pb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = vs(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function gb(t, e) {
  return Uc(t, !1) && t <= e.max && t >= e.min;
}
function bl() {
  const t = _i();
  return new Promise((e) => {
    switch (t) {
      case or.browser:
        e(yb());
        break;
      case or.reactNative:
        e(mb());
        break;
      case or.node:
        e(vb());
        break;
      default:
        e(!0);
    }
  });
}
function yb() {
  return ms() && (navigator == null ? void 0 : navigator.onLine);
}
async function mb() {
  if (ys() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function vb() {
  return !0;
}
function bb(t) {
  switch (_i()) {
    case or.browser:
      wb(t);
      break;
    case or.reactNative:
      _b(t);
      break;
  }
}
function wb(t) {
  !ys() && ms() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function _b(t) {
  ys() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const ua = {};
let zi = class {
  static get(e) {
    return ua[e];
  }
  static set(e, r) {
    ua[e] = r;
  }
  static delete(e) {
    delete ua[e];
  }
};
const Eb = "PARSE_ERROR", Sb = "INVALID_REQUEST", xb = "METHOD_NOT_FOUND", Db = "INVALID_PARAMS", Ah = "INTERNAL_ERROR", Mc = "SERVER_ERROR", Ob = [-32700, -32600, -32601, -32602, -32603], ks = {
  [Eb]: { code: -32700, message: "Parse error" },
  [Sb]: { code: -32600, message: "Invalid Request" },
  [xb]: { code: -32601, message: "Method not found" },
  [Db]: { code: -32602, message: "Invalid params" },
  [Ah]: { code: -32603, message: "Internal error" },
  [Mc]: { code: -32e3, message: "Server error" }
}, Ph = Mc;
function Ib(t) {
  return Ob.includes(t);
}
function wl(t) {
  return Object.keys(ks).includes(t) ? ks[t] : ks[Ph];
}
function Cb(t) {
  const e = Object.values(ks).find((r) => r.code === t);
  return e || ks[Ph];
}
function Rb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Nh = {}, qr = {}, _l;
function Tb() {
  if (_l)
    return qr;
  _l = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.isBrowserCryptoAvailable = qr.getSubtleCrypto = qr.getBrowerCrypto = void 0;
  function t() {
    return (Fr == null ? void 0 : Fr.crypto) || (Fr == null ? void 0 : Fr.msCrypto) || {};
  }
  qr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  qr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return qr.isBrowserCryptoAvailable = r, qr;
}
var zr = {}, El;
function Ab() {
  if (El)
    return zr;
  El = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.isBrowser = zr.isNode = zr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  zr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  zr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return zr.isBrowser = r, zr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = $r;
  e.__exportStar(Tb(), t), e.__exportStar(Ab(), t);
})(Nh);
function jc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Lh(t = 6) {
  return BigInt(jc(t));
}
function Xn(t, e, r) {
  return {
    id: r || jc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function $c(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function kc(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Pb(e, r)
  };
}
function Pb(t, e) {
  return typeof t > "u" ? wl(Ah) : (typeof t == "string" && (t = Object.assign(Object.assign({}, wl(Mc)), { message: t })), typeof e < "u" && (t.data = e), Ib(t.code) && (t = Cb(t.code)), t);
}
class Nb {
}
class Lb extends Nb {
  constructor() {
    super();
  }
}
class Fb extends Lb {
  constructor(e) {
    super();
  }
}
const Ub = "^wss?:";
function Mb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function jb(t, e) {
  const r = Mb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Sl(t) {
  return jb(t, Ub);
}
function $b(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Fh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function qc(t) {
  return Fh(t) && "method" in t;
}
function jo(t) {
  return Fh(t) && (Kr(t) || wr(t));
}
function Kr(t) {
  return "result" in t;
}
function wr(t) {
  return "error" in t;
}
class kb extends Fb {
  constructor(e) {
    super(e), this.events = new gr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Xn(e.method, e.params || [], e.id || Lh().toString()), r);
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
        wr(i) ? s(i.error) : n(i.result);
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
    this.events.emit("payload", e), jo(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const qb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), zb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", xl = (t) => t.split("?")[0], Dl = 10, Bb = qb();
class Vb {
  constructor(e) {
    if (this.url = e, this.events = new gr.EventEmitter(), this.registering = !1, !Sl(e))
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
      this.socket.send(mi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Sl(e))
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
      const s = new URLSearchParams(e).get("origin"), i = Nh.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !$b(e) }, a = new Bb(e, [], i);
      zb() ? a.onerror = (o) => {
        const u = o;
        n(this.emitError(u.error));
      } : a.on("error", (o) => {
        n(this.emitError(o));
      }), a.onopen = () => {
        this.onOpen(a), r(a);
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
    const r = typeof e.data == "string" ? Ao(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = kc(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return Rb(e, xl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Dl && this.events.setMaxListeners(Dl);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${xl(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var lo = { exports: {} };
lo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", E = "[object Map]", S = "[object Number]", A = "[object Null]", w = "[object Object]", D = "[object Promise]", b = "[object Proxy]", x = "[object RegExp]", g = "[object Set]", l = "[object String]", y = "[object Symbol]", C = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", z = "[object DataView]", G = "[object Float32Array]", R = "[object Float64Array]", L = "[object Int8Array]", Q = "[object Int16Array]", V = "[object Int32Array]", k = "[object Uint8Array]", B = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", K = "[object Uint32Array]", fe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ae = /^(?:0|[1-9]\d*)$/, te = {};
  te[G] = te[R] = te[L] = te[Q] = te[V] = te[k] = te[B] = te[$] = te[K] = !0, te[o] = te[u] = te[M] = te[f] = te[z] = te[d] = te[p] = te[m] = te[E] = te[S] = te[w] = te[x] = te[g] = te[l] = te[T] = !1;
  var oe = typeof Fr == "object" && Fr && Fr.Object === Object && Fr, U = typeof self == "object" && self && self.Object === Object && self, F = oe || U || Function("return this")(), P = e && !e.nodeType && e, h = P && !0 && t && !t.nodeType && t, I = h && h.exports === P, Z = I && oe.process, X = function() {
    try {
      return Z && Z.binding && Z.binding("util");
    } catch {
    }
  }(), Oe = X && X.isTypedArray;
  function Ie(_, N) {
    for (var q = -1, ne = _ == null ? 0 : _.length, Ye = 0, ve = []; ++q < ne; ) {
      var lt = _[q];
      N(lt, q, _) && (ve[Ye++] = lt);
    }
    return ve;
  }
  function we(_, N) {
    for (var q = -1, ne = N.length, Ye = _.length; ++q < ne; )
      _[Ye + q] = N[q];
    return _;
  }
  function Fe(_, N) {
    for (var q = -1, ne = _ == null ? 0 : _.length; ++q < ne; )
      if (N(_[q], q, _))
        return !0;
    return !1;
  }
  function Je(_, N) {
    for (var q = -1, ne = Array(_); ++q < _; )
      ne[q] = N(q);
    return ne;
  }
  function He(_) {
    return function(N) {
      return _(N);
    };
  }
  function Ne(_, N) {
    return _.has(N);
  }
  function Te(_, N) {
    return _ == null ? void 0 : _[N];
  }
  function _e(_) {
    var N = -1, q = Array(_.size);
    return _.forEach(function(ne, Ye) {
      q[++N] = [Ye, ne];
    }), q;
  }
  function Se(_, N) {
    return function(q) {
      return _(N(q));
    };
  }
  function Ee(_) {
    var N = -1, q = Array(_.size);
    return _.forEach(function(ne) {
      q[++N] = ne;
    }), q;
  }
  var ge = Array.prototype, pe = Function.prototype, ce = Object.prototype, xe = F["__core-js_shared__"], Ce = pe.toString, he = ce.hasOwnProperty, Ae = function() {
    var _ = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Ue = ce.toString, ke = RegExp(
    "^" + Ce.call(he).replace(fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = I ? F.Buffer : void 0, je = F.Symbol, nr = F.Uint8Array, ur = ce.propertyIsEnumerable, Cr = ge.splice, Ct = je ? je.toStringTag : void 0, Rr = Object.getOwnPropertySymbols, lr = qe ? qe.isBuffer : void 0, Jr = Se(Object.keys, Object), Xe = qn(F, "DataView"), Qe = qn(F, "Map"), ot = qn(F, "Promise"), rt = qn(F, "Set"), at = qn(F, "WeakMap"), Ze = qn(Object, "create"), ft = mn(Xe), pt = mn(Qe), gt = mn(ot), ht = mn(rt), yt = mn(at), dt = je ? je.prototype : void 0, ct = dt ? dt.valueOf : void 0;
  function We(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function O() {
    this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
  }
  function j(_) {
    var N = this.has(_) && delete this.__data__[_];
    return this.size -= N ? 1 : 0, N;
  }
  function J(_) {
    var N = this.__data__;
    if (Ze) {
      var q = N[_];
      return q === n ? void 0 : q;
    }
    return he.call(N, _) ? N[_] : void 0;
  }
  function ue(_) {
    var N = this.__data__;
    return Ze ? N[_] !== void 0 : he.call(N, _);
  }
  function $e(_, N) {
    var q = this.__data__;
    return this.size += this.has(_) ? 0 : 1, q[_] = Ze && N === void 0 ? n : N, this;
  }
  We.prototype.clear = O, We.prototype.delete = j, We.prototype.get = J, We.prototype.has = ue, We.prototype.set = $e;
  function Pe(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Le() {
    this.__data__ = [], this.size = 0;
  }
  function Re(_) {
    var N = this.__data__, q = Pi(N, _);
    if (q < 0)
      return !1;
    var ne = N.length - 1;
    return q == ne ? N.pop() : Cr.call(N, q, 1), --this.size, !0;
  }
  function Rt(_) {
    var N = this.__data__, q = Pi(N, _);
    return q < 0 ? void 0 : N[q][1];
  }
  function nt(_) {
    return Pi(this.__data__, _) > -1;
  }
  function ut(_, N) {
    var q = this.__data__, ne = Pi(q, _);
    return ne < 0 ? (++this.size, q.push([_, N])) : q[ne][1] = N, this;
  }
  Pe.prototype.clear = Le, Pe.prototype.delete = Re, Pe.prototype.get = Rt, Pe.prototype.has = nt, Pe.prototype.set = ut;
  function mt(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Xr() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (Qe || Pe)(),
      string: new We()
    };
  }
  function Ti(_) {
    var N = Ni(this, _).delete(_);
    return this.size -= N ? 1 : 0, N;
  }
  function yr(_) {
    return Ni(this, _).get(_);
  }
  function Xd(_) {
    return Ni(this, _).has(_);
  }
  function ep(_, N) {
    var q = Ni(this, _), ne = q.size;
    return q.set(_, N), this.size += q.size == ne ? 0 : 1, this;
  }
  mt.prototype.clear = Xr, mt.prototype.delete = Ti, mt.prototype.get = yr, mt.prototype.has = Xd, mt.prototype.set = ep;
  function Ai(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.__data__ = new mt(); ++N < q; )
      this.add(_[N]);
  }
  function tp(_) {
    return this.__data__.set(_, n), this;
  }
  function rp(_) {
    return this.__data__.has(_);
  }
  Ai.prototype.add = Ai.prototype.push = tp, Ai.prototype.has = rp;
  function en(_) {
    var N = this.__data__ = new Pe(_);
    this.size = N.size;
  }
  function np() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function sp(_) {
    var N = this.__data__, q = N.delete(_);
    return this.size = N.size, q;
  }
  function ip(_) {
    return this.__data__.get(_);
  }
  function op(_) {
    return this.__data__.has(_);
  }
  function ap(_, N) {
    var q = this.__data__;
    if (q instanceof Pe) {
      var ne = q.__data__;
      if (!Qe || ne.length < r - 1)
        return ne.push([_, N]), this.size = ++q.size, this;
      q = this.__data__ = new mt(ne);
    }
    return q.set(_, N), this.size = q.size, this;
  }
  en.prototype.clear = np, en.prototype.delete = sp, en.prototype.get = ip, en.prototype.has = op, en.prototype.set = ap;
  function cp(_, N) {
    var q = Li(_), ne = !q && Sp(_), Ye = !q && !ne && Qo(_), ve = !q && !ne && !Ye && lu(_), lt = q || ne || Ye || ve, Et = lt ? Je(_.length, String) : [], Tt = Et.length;
    for (var st in _)
      (N || he.call(_, st)) && !(lt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (st == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ye && (st == "offset" || st == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ve && (st == "buffer" || st == "byteLength" || st == "byteOffset") || // Skip index properties.
      vp(st, Tt))) && Et.push(st);
    return Et;
  }
  function Pi(_, N) {
    for (var q = _.length; q--; )
      if (ou(_[q][0], N))
        return q;
    return -1;
  }
  function up(_, N, q) {
    var ne = N(_);
    return Li(_) ? ne : we(ne, q(_));
  }
  function ws(_) {
    return _ == null ? _ === void 0 ? C : A : Ct && Ct in Object(_) ? yp(_) : Ep(_);
  }
  function ru(_) {
    return _s(_) && ws(_) == o;
  }
  function nu(_, N, q, ne, Ye) {
    return _ === N ? !0 : _ == null || N == null || !_s(_) && !_s(N) ? _ !== _ && N !== N : lp(_, N, q, ne, nu, Ye);
  }
  function lp(_, N, q, ne, Ye, ve) {
    var lt = Li(_), Et = Li(N), Tt = lt ? u : tn(_), st = Et ? u : tn(N);
    Tt = Tt == o ? w : Tt, st = st == o ? w : st;
    var sr = Tt == w, mr = st == w, Lt = Tt == st;
    if (Lt && Qo(_)) {
      if (!Qo(N))
        return !1;
      lt = !0, sr = !1;
    }
    if (Lt && !sr)
      return ve || (ve = new en()), lt || lu(_) ? su(_, N, q, ne, Ye, ve) : pp(_, N, Tt, q, ne, Ye, ve);
    if (!(q & s)) {
      var fr = sr && he.call(_, "__wrapped__"), hr = mr && he.call(N, "__wrapped__");
      if (fr || hr) {
        var rn = fr ? _.value() : _, kr = hr ? N.value() : N;
        return ve || (ve = new en()), Ye(rn, kr, q, ne, ve);
      }
    }
    return Lt ? (ve || (ve = new en()), gp(_, N, q, ne, Ye, ve)) : !1;
  }
  function fp(_) {
    if (!uu(_) || wp(_))
      return !1;
    var N = au(_) ? ke : H;
    return N.test(mn(_));
  }
  function hp(_) {
    return _s(_) && cu(_.length) && !!te[ws(_)];
  }
  function dp(_) {
    if (!_p(_))
      return Jr(_);
    var N = [];
    for (var q in Object(_))
      he.call(_, q) && q != "constructor" && N.push(q);
    return N;
  }
  function su(_, N, q, ne, Ye, ve) {
    var lt = q & s, Et = _.length, Tt = N.length;
    if (Et != Tt && !(lt && Tt > Et))
      return !1;
    var st = ve.get(_);
    if (st && ve.get(N))
      return st == N;
    var sr = -1, mr = !0, Lt = q & i ? new Ai() : void 0;
    for (ve.set(_, N), ve.set(N, _); ++sr < Et; ) {
      var fr = _[sr], hr = N[sr];
      if (ne)
        var rn = lt ? ne(hr, fr, sr, N, _, ve) : ne(fr, hr, sr, _, N, ve);
      if (rn !== void 0) {
        if (rn)
          continue;
        mr = !1;
        break;
      }
      if (Lt) {
        if (!Fe(N, function(kr, vn) {
          if (!Ne(Lt, vn) && (fr === kr || Ye(fr, kr, q, ne, ve)))
            return Lt.push(vn);
        })) {
          mr = !1;
          break;
        }
      } else if (!(fr === hr || Ye(fr, hr, q, ne, ve))) {
        mr = !1;
        break;
      }
    }
    return ve.delete(_), ve.delete(N), mr;
  }
  function pp(_, N, q, ne, Ye, ve, lt) {
    switch (q) {
      case z:
        if (_.byteLength != N.byteLength || _.byteOffset != N.byteOffset)
          return !1;
        _ = _.buffer, N = N.buffer;
      case M:
        return !(_.byteLength != N.byteLength || !ve(new nr(_), new nr(N)));
      case f:
      case d:
      case S:
        return ou(+_, +N);
      case p:
        return _.name == N.name && _.message == N.message;
      case x:
      case l:
        return _ == N + "";
      case E:
        var Et = _e;
      case g:
        var Tt = ne & s;
        if (Et || (Et = Ee), _.size != N.size && !Tt)
          return !1;
        var st = lt.get(_);
        if (st)
          return st == N;
        ne |= i, lt.set(_, N);
        var sr = su(Et(_), Et(N), ne, Ye, ve, lt);
        return lt.delete(_), sr;
      case y:
        if (ct)
          return ct.call(_) == ct.call(N);
    }
    return !1;
  }
  function gp(_, N, q, ne, Ye, ve) {
    var lt = q & s, Et = iu(_), Tt = Et.length, st = iu(N), sr = st.length;
    if (Tt != sr && !lt)
      return !1;
    for (var mr = Tt; mr--; ) {
      var Lt = Et[mr];
      if (!(lt ? Lt in N : he.call(N, Lt)))
        return !1;
    }
    var fr = ve.get(_);
    if (fr && ve.get(N))
      return fr == N;
    var hr = !0;
    ve.set(_, N), ve.set(N, _);
    for (var rn = lt; ++mr < Tt; ) {
      Lt = Et[mr];
      var kr = _[Lt], vn = N[Lt];
      if (ne)
        var fu = lt ? ne(vn, kr, Lt, N, _, ve) : ne(kr, vn, Lt, _, N, ve);
      if (!(fu === void 0 ? kr === vn || Ye(kr, vn, q, ne, ve) : fu)) {
        hr = !1;
        break;
      }
      rn || (rn = Lt == "constructor");
    }
    if (hr && !rn) {
      var Fi = _.constructor, Ui = N.constructor;
      Fi != Ui && "constructor" in _ && "constructor" in N && !(typeof Fi == "function" && Fi instanceof Fi && typeof Ui == "function" && Ui instanceof Ui) && (hr = !1);
    }
    return ve.delete(_), ve.delete(N), hr;
  }
  function iu(_) {
    return up(_, Op, mp);
  }
  function Ni(_, N) {
    var q = _.__data__;
    return bp(N) ? q[typeof N == "string" ? "string" : "hash"] : q.map;
  }
  function qn(_, N) {
    var q = Te(_, N);
    return fp(q) ? q : void 0;
  }
  function yp(_) {
    var N = he.call(_, Ct), q = _[Ct];
    try {
      _[Ct] = void 0;
      var ne = !0;
    } catch {
    }
    var Ye = Ue.call(_);
    return ne && (N ? _[Ct] = q : delete _[Ct]), Ye;
  }
  var mp = Rr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Ie(Rr(_), function(N) {
      return ur.call(_, N);
    }));
  } : Ip, tn = ws;
  (Xe && tn(new Xe(new ArrayBuffer(1))) != z || Qe && tn(new Qe()) != E || ot && tn(ot.resolve()) != D || rt && tn(new rt()) != g || at && tn(new at()) != T) && (tn = function(_) {
    var N = ws(_), q = N == w ? _.constructor : void 0, ne = q ? mn(q) : "";
    if (ne)
      switch (ne) {
        case ft:
          return z;
        case pt:
          return E;
        case gt:
          return D;
        case ht:
          return g;
        case yt:
          return T;
      }
    return N;
  });
  function vp(_, N) {
    return N = N ?? a, !!N && (typeof _ == "number" || ae.test(_)) && _ > -1 && _ % 1 == 0 && _ < N;
  }
  function bp(_) {
    var N = typeof _;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function wp(_) {
    return !!Ae && Ae in _;
  }
  function _p(_) {
    var N = _ && _.constructor, q = typeof N == "function" && N.prototype || ce;
    return _ === q;
  }
  function Ep(_) {
    return Ue.call(_);
  }
  function mn(_) {
    if (_ != null) {
      try {
        return Ce.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function ou(_, N) {
    return _ === N || _ !== _ && N !== N;
  }
  var Sp = ru(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ru : function(_) {
    return _s(_) && he.call(_, "callee") && !ur.call(_, "callee");
  }, Li = Array.isArray;
  function xp(_) {
    return _ != null && cu(_.length) && !au(_);
  }
  var Qo = lr || Cp;
  function Dp(_, N) {
    return nu(_, N);
  }
  function au(_) {
    if (!uu(_))
      return !1;
    var N = ws(_);
    return N == m || N == v || N == c || N == b;
  }
  function cu(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= a;
  }
  function uu(_) {
    var N = typeof _;
    return _ != null && (N == "object" || N == "function");
  }
  function _s(_) {
    return _ != null && typeof _ == "object";
  }
  var lu = Oe ? He(Oe) : hp;
  function Op(_) {
    return xp(_) ? cp(_) : dp(_);
  }
  function Ip() {
    return [];
  }
  function Cp() {
    return !1;
  }
  t.exports = Dp;
})(lo, lo.exports);
var Kb = lo.exports;
const Hb = /* @__PURE__ */ pi(Kb);
function Wb(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var s = new XMLHttpRequest(), i = [], a = [], o = {}, u = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: u, headers: { keys: function() {
        return i;
      }, entries: function() {
        return a;
      }, get: function(f) {
        return o[f.toLowerCase()];
      }, has: function(f) {
        return f.toLowerCase() in o;
      } } };
    };
    for (var c in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(f, d, p) {
        i.push(d = d.toLowerCase()), a.push([d, p]), o[d] = o[d] ? o[d] + "," + p : p;
      }), r(u());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(c, e.headers[c]);
    s.send(e.body || null);
  });
}
const Gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wb
}, Symbol.toStringTag, { value: "Module" })), Ol = /* @__PURE__ */ Ro(Gb);
var Qb = self.fetch || (self.fetch = Ol.default || Ol);
const Zb = /* @__PURE__ */ pi(Qb);
function Yb(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), a = i.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[a] = s;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, A = 0, w = v.length; A !== w && v[A] === 0; )
      A++, E++;
    for (var D = (w - A) * f + 1 >>> 0, b = new Uint8Array(D); A !== w; ) {
      for (var x = v[A], g = 0, l = D - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = D - S; y !== D && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < D; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, A = 0; v[E] === u; )
        S++, E++;
      for (var w = (v.length - E) * c + 1 >>> 0, D = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < A) && g !== -1; g--, x++)
          b += o * D[g] >>> 0, D[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - A; l !== w && D[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = D[l++];
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
  return { encode: d, decodeUnsafe: p, decode: m };
}
var Jb = Yb, Xb = Jb;
const Uh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ew = (t) => new TextEncoder().encode(t), tw = (t) => new TextDecoder().decode(t);
class rw {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class nw {
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
    return Mh(this, e);
  }
}
class sw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Mh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Mh = (t, e) => new sw({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class iw {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new rw(e, r, n), this.decoder = new nw(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const $o = ({ name: t, prefix: e, encode: r, decode: n }) => new iw(t, e, r, n), Si = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Xb(r, e);
  return $o({ prefix: t, name: e, encode: n, decode: (i) => Uh(s(i)) });
}, ow = (t, e, r, n) => {
  const s = {};
  for (let f = 0; f < e.length; ++f)
    s[e[f]] = f;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < i; ++f) {
    const d = s[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, aw = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => $o({ prefix: e, name: t, encode(s) {
  return aw(s, n, r);
}, decode(s) {
  return ow(s, n, r, t);
} }), cw = $o({ prefix: "\0", name: "identity", encode: (t) => tw(t), decode: (t) => ew(t) });
var uw = Object.freeze({ __proto__: null, identity: cw });
const lw = Nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var fw = Object.freeze({ __proto__: null, base2: lw });
const hw = Nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var dw = Object.freeze({ __proto__: null, base8: hw });
const pw = Si({ prefix: "9", name: "base10", alphabet: "0123456789" });
var gw = Object.freeze({ __proto__: null, base10: pw });
const yw = Nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), mw = Nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var vw = Object.freeze({ __proto__: null, base16: yw, base16upper: mw });
const bw = Nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ww = Nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), _w = Nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Ew = Nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Sw = Nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), xw = Nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Dw = Nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Ow = Nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Iw = Nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cw = Object.freeze({ __proto__: null, base32: bw, base32upper: ww, base32pad: _w, base32padupper: Ew, base32hex: Sw, base32hexupper: xw, base32hexpad: Dw, base32hexpadupper: Ow, base32z: Iw });
const Rw = Si({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Tw = Si({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Aw = Object.freeze({ __proto__: null, base36: Rw, base36upper: Tw });
const Pw = Si({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Nw = Si({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Lw = Object.freeze({ __proto__: null, base58btc: Pw, base58flickr: Nw });
const Fw = Nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Uw = Nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Mw = Nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), jw = Nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var $w = Object.freeze({ __proto__: null, base64: Fw, base64pad: Uw, base64url: Mw, base64urlpad: jw });
const jh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), kw = jh.reduce((t, e, r) => (t[r] = e, t), []), qw = jh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function zw(t) {
  return t.reduce((e, r) => (e += kw[r], e), "");
}
function Bw(t) {
  const e = [];
  for (const r of t) {
    const n = qw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Vw = $o({ prefix: "🚀", name: "base256emoji", encode: zw, decode: Bw });
var Kw = Object.freeze({ __proto__: null, base256emoji: Vw }), Hw = $h, Il = 128, Ww = 127, Gw = ~Ww, Qw = Math.pow(2, 31);
function $h(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= Qw; )
    e[r++] = t & 255 | Il, t /= 128;
  for (; t & Gw; )
    e[r++] = t & 255 | Il, t >>>= 7;
  return e[r] = t | 0, $h.bytes = r - n + 1, e;
}
var Zw = Ba, Yw = 128, Cl = 127;
function Ba(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw Ba.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & Cl) << s : (a & Cl) * Math.pow(2, s), s += 7;
  } while (a >= Yw);
  return Ba.bytes = i - n, r;
}
var Jw = Math.pow(2, 7), Xw = Math.pow(2, 14), e_ = Math.pow(2, 21), t_ = Math.pow(2, 28), r_ = Math.pow(2, 35), n_ = Math.pow(2, 42), s_ = Math.pow(2, 49), i_ = Math.pow(2, 56), o_ = Math.pow(2, 63), a_ = function(t) {
  return t < Jw ? 1 : t < Xw ? 2 : t < e_ ? 3 : t < t_ ? 4 : t < r_ ? 5 : t < n_ ? 6 : t < s_ ? 7 : t < i_ ? 8 : t < o_ ? 9 : 10;
}, c_ = { encode: Hw, decode: Zw, encodingLength: a_ }, kh = c_;
const Rl = (t, e, r = 0) => (kh.encode(t, e, r), e), Tl = (t) => kh.encodingLength(t), Va = (t, e) => {
  const r = e.byteLength, n = Tl(t), s = n + Tl(r), i = new Uint8Array(s + r);
  return Rl(t, i, 0), Rl(r, i, n), i.set(e, s), new u_(t, r, e, i);
};
class u_ {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const qh = ({ name: t, code: e, encode: r }) => new l_(t, e, r);
class l_ {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Va(this.code, r) : r.then((n) => Va(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const zh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), f_ = qh({ name: "sha2-256", code: 18, encode: zh("SHA-256") }), h_ = qh({ name: "sha2-512", code: 19, encode: zh("SHA-512") });
var d_ = Object.freeze({ __proto__: null, sha256: f_, sha512: h_ });
const Bh = 0, p_ = "identity", Vh = Uh, g_ = (t) => Va(Bh, Vh(t)), y_ = { code: Bh, name: p_, encode: Vh, digest: g_ };
var m_ = Object.freeze({ __proto__: null, identity: y_ });
new TextEncoder(), new TextDecoder();
const Al = { ...uw, ...fw, ...dw, ...gw, ...vw, ...Cw, ...Aw, ...Lw, ...$w, ...Kw };
({ ...d_, ...m_ });
function Kh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function v_(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Kh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Hh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Pl = Hh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), la = Hh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = v_(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), b_ = { utf8: Pl, "utf-8": Pl, hex: Al.base16, latin1: la, ascii: la, binary: la, ...Al };
function w_(t, e = "utf8") {
  const r = b_[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Kh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Wh = "wc", __ = 2, zc = "core", un = `${Wh}@2:${zc}:`, E_ = { name: zc, logger: "error" }, S_ = { database: ":memory:" }, x_ = "crypto", Nl = "client_ed25519_seed", D_ = se.ONE_DAY, O_ = "keychain", I_ = "0.3", C_ = "messages", R_ = "0.3", T_ = se.SIX_HOURS, A_ = "publisher", Gh = "irn", P_ = "error", Qh = "wss://relay.walletconnect.com", Ll = "wss://relay.walletconnect.org", N_ = "relayer", kt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, L_ = "_subscription", Br = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, F_ = se.ONE_SECOND, U_ = "2.11.0", M_ = 1e4, j_ = "0.3", $_ = "WALLETCONNECT_CLIENT_ID", vr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, k_ = "subscription", q_ = "0.3", z_ = se.FIVE_SECONDS * 1e3, B_ = "pairing", V_ = "0.3", Is = { wc_pairingDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 0 } } }, Ns = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Nr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, K_ = "history", H_ = "0.3", W_ = "expirer", dr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, G_ = "0.3", fa = "verify-api", Gn = "https://verify.walletconnect.com", Ka = "https://verify.walletconnect.org", Q_ = [Gn, Ka], Z_ = "echo", Y_ = "https://echo.walletconnect.com";
class J_ {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = O_, this.version = I_, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Dh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Oh(e) : void 0;
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
class X_ {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = x_, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Yu(s);
      return hh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = c0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Yu(i), o = qa();
      return await yv(o, s, D_, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), u = u0(o, i);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || l0(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = xh(a), u = mi(i);
      if (cl(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const c = this.getSymKey(s), { type: f, senderPublicKey: d } = o;
      return h0({ type: f, symKey: c, message: u, senderPublicKey: d });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = g0(i, a);
      if (cl(o)) {
        const u = o.receiverPublicKey, c = o.senderPublicKey;
        s = await this.generateSharedKey(u, c);
      }
      try {
        const u = this.getSymKey(s), c = d0({ symKey: u, encoded: i });
        return Ao(c);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (s) => {
      const i = co(s);
      return wi(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = co(s);
      return i.senderPublicKey ? Qt(i.senderPublicKey, Gt) : void 0;
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.keychain = n || new J_(this.core, this.logger);
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
      e = this.keychain.get(Nl);
    } catch {
      e = qa(), await this.keychain.set(Nl, e);
    }
    return w_(e, "base16");
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
class e1 extends wy {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = C_, this.version = R_, this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
      const i = Jn(s);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[i] < "u" || (a[i] = s, this.messages.set(n, a), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), a = Jn(s);
      return typeof i[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Me.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Dh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Oh(e) : void 0;
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
class t1 extends _y {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new gr.EventEmitter(), this.name = A_, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = se.toMiliseconds(se.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || T_, u = za(i), c = (i == null ? void 0 : i.prompt) || !1, f = (i == null ? void 0 : i.tag) || 0, d = (i == null ? void 0 : i.id) || Lh().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: u, prompt: c, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, p), this.publishTimeout);
        try {
          await await Vs(this.rpcPublish(n, s, o, u, c, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(kt.publish, p);
        } catch (v) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = i == null ? void 0 : i.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), v;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, a, o) {
    var u, c, f, d;
    const p = { method: Xi(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: a }, id: o };
    return Kt((u = p.params) == null ? void 0 : u.prompt) && ((c = p.params) == null || delete c.prompt), Kt((f = p.params) == null ? void 0 : f.tag) && ((d = p.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(ds.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(kt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(kt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class r1 {
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
var n1 = Object.defineProperty, s1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, Fl = Object.getOwnPropertySymbols, o1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, Ul = (t, e, r) => e in t ? n1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cs = (t, e) => {
  for (var r in e || (e = {}))
    o1.call(e, r) && Ul(t, r, e[r]);
  if (Fl)
    for (var r of Fl(e))
      a1.call(e, r) && Ul(t, r, e[r]);
  return t;
}, ha = (t, e) => s1(t, i1(e));
class c1 extends xy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new r1(), this.events = new gr.EventEmitter(), this.name = k_, this.version = q_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = un, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = za(s), a = { topic: n, relay: i };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, i);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), o;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((s, i) => {
      const a = new se.Watch();
      a.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= z_ && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Me.getLoggerContext(this.logger);
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
      const s = za(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Xi(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Vs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
    return Jn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Xi(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Vs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: Xi(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, ha(Cs({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Cs({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Cs({}, r)), this.topicMap.set(r.topic, e), this.events.emit(vr.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(vr.deleted, ha(Cs({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(vr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(vr.resubscribed);
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
    Ei(r) && this.onBatchSubscribe(r.map((n, s) => ha(Cs({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(ds.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(kt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(kt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(vr.created, async (e) => {
      const r = vr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(vr.deleted, async (e) => {
      const r = vr.deleted;
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
var u1 = Object.defineProperty, Ml = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, f1 = Object.prototype.propertyIsEnumerable, jl = (t, e, r) => e in t ? u1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, h1 = (t, e) => {
  for (var r in e || (e = {}))
    l1.call(e, r) && jl(t, r, e[r]);
  if (Ml)
    for (var r of Ml(e))
      f1.call(e, r) && jl(t, r, e[r]);
  return t;
};
class d1 extends Ey {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new gr.EventEmitter(), this.name = N_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(kt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(kt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Br.payload, this.onPayloadHandler), this.provider.on(Br.connect, this.onConnectHandler), this.provider.on(Br.disconnect, this.onDisconnectHandler), this.provider.on(Br.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Me.generateChildLogger(e.logger, this.name) : Me.pino(Me.getDefaultLoggerOptions({ level: e.logger || P_ })), this.messages = new e1(this.logger, e.core), this.subscriber = new c1(this, this.logger), this.publisher = new t1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qh, this.projectId = e.projectId, this.bundleId = _0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ll}...`), await this.restartTransport(Ll);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, M_);
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
    let s = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    if (s)
      return s;
    let i;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(vr.created, a), i());
    };
    return await Promise.all([new Promise((o) => {
      i = o, this.subscriber.on(vr.created, a);
    }), new Promise(async (o) => {
      s = await this.subscriber.subscribe(e, r), o();
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Vs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(vr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Vs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Br.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await bl())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new kb(new Vb(I0({ sdkVersion: U_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), qc(e)) {
      if (!e.method.endsWith(L_))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(h1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      jo(e) && this.events.emit(kt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(kt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = $c(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Br.payload, this.onPayloadHandler), this.provider.off(Br.connect, this.onConnectHandler), this.provider.off(Br.disconnect, this.onDisconnectHandler), this.provider.off(Br.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(kt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await bl();
    bb(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(kt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, se.toMiliseconds(F_)));
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
var p1 = Object.defineProperty, $l = Object.getOwnPropertySymbols, g1 = Object.prototype.hasOwnProperty, y1 = Object.prototype.propertyIsEnumerable, kl = (t, e, r) => e in t ? p1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ql = (t, e) => {
  for (var r in e || (e = {}))
    g1.call(e, r) && kl(t, r, e[r]);
  if ($l)
    for (var r of $l(e))
      y1.call(e, r) && kl(t, r, e[r]);
  return t;
};
class ko extends Sy {
  constructor(e, r, n, s = un, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = j_, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !Kt(a) ? this.map.set(this.getKey(a), a) : Z0(a) ? this.map.set(a.id, a) : Y0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => Hb(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = ql(ql({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = Me.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
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
class m1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = B_, this.version = V_, this.events = new gi(), this.initialized = !1, this.storagePrefix = un, this.ignoredPayloadTypes = [kn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = qa(), s = await this.core.crypto.setSymKey(n), i = br(se.FIVE_MINUTES), a = { protocol: Gh }, o = { topic: s, expiry: i, relay: a, active: !1 }, u = k0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a } = pl(n.uri);
      let o;
      if (this.pairings.keys.includes(s) && (o = this.pairings.get(s), o.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const u = br(se.FIVE_MINUTES), c = { topic: s, relay: a, expiry: u, active: !1 };
      return await this.pairings.set(s, c), this.core.expirer.set(s, u), n.activatePairing && await this.activate({ topic: s }), this.events.emit(Ns.create, c), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a })), c;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = br(se.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = Kn();
        this.events.once(bt("pairing_ping", i), ({ error: c }) => {
          c ? u(c) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: s });
    }, this.updateMetadata = async ({ topic: n, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: s } = n;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", _t("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const a = Xn(s, i), o = await this.core.crypto.encode(n, a), u = Is[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = $c(n, i), o = await this.core.crypto.encode(s, a), u = await this.core.history.get(s, n), c = Is[u.request.method].res;
      await this.core.relayer.publish(s, o, c), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = kc(n, i), o = await this.core.crypto.encode(s, a), u = await this.core.history.get(s, n), c = Is[u.request.method] ? Is[u.request.method].res : Is.unregistered_method.res;
      await this.core.relayer.publish(s, o, c), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, _t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => sn(s.expiry));
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
      const { topic: s, payload: i } = n, a = (await this.core.history.get(s, i.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, i);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(Ns.ping, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        Kr(s) ? this.events.emit(bt("pairing_ping", i), {}) : wr(s) && this.events.emit(bt("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ns.delete, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: a } = s;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = _t("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(_t("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!er(n)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!Q0(n.uri)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
      const i = pl(n.uri);
      if (!((s = i == null ? void 0 : i.relay) != null && s.protocol)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(i != null && i.symKey)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
    }, this.isValidPing = async (n) => {
      if (!er(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!er(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!Ot(n, !1)) {
        const { message: s } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (sn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = Y("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.pairings = new ko(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        qc(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : jo(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(dr.expired, async (e) => {
      const { topic: r } = Ch(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ns.expire, { topic: r }));
    });
  }
}
class v1 extends by {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new gr.EventEmitter(), this.name = K_, this.version = H_, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: br(se.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Nr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = wr(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Nr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Nr.deleted, i);
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
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Xn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(Nr.sync);
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
    this.events.on(Nr.created, (e) => {
      const r = Nr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Nr.updated, (e) => {
      const r = Nr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Nr.deleted, (e) => {
      const r = Nr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(ds.HEARTBEAT_EVENTS.pulse, () => {
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
class b1 extends Dy {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new gr.EventEmitter(), this.name = W_, this.version = G_, this.cached = [], this.initialized = !1, this.storagePrefix = un, this.init = async () => {
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
      const i = this.formatTarget(n), a = { target: i, expiry: s };
      this.expirations.set(i, a), this.checkExpiry(i, a), this.events.emit(dr.created, { target: i, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(dr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
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
      return C0(e);
    if (typeof e == "number")
      return R0(e);
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
    await this.setExpirations(this.values), this.events.emit(dr.sync);
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
    this.expirations.delete(e), this.events.emit(dr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ds.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(dr.created, (e) => {
      const r = dr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(dr.expired, (e) => {
      const r = dr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(dr.deleted, (e) => {
      const r = dr.deleted;
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
class w1 extends Oy {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = fa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || ys() || !ms())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ka;
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
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(a), i = await this.fetchAttestation(n.attestationId, Ka);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const i = this.startAbortTimer(se.ONE_SECOND * 2), a = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(i), a.status === 200 ? await a.json() : void 0;
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
        if (document.getElementById(fa))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = fa, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, se.toMiliseconds(se.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || Gn;
      return Q_.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Gn}`), s = Gn), s;
    }, this.logger = Me.generateChildLogger(r, this.name), this.verifyUrl = Gn, this.abortController = new AbortController(), this.isDevEnv = Fc() && process.env.IS_VITEST;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), se.toMiliseconds(e));
  }
}
class _1 extends Iy {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = Z_, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, u = `${Y_}/${this.projectId}/clients`;
      await Zb(u, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = Me.generateChildLogger(r, this.context);
  }
}
var E1 = Object.defineProperty, zl = Object.getOwnPropertySymbols, S1 = Object.prototype.hasOwnProperty, x1 = Object.prototype.propertyIsEnumerable, Bl = (t, e, r) => e in t ? E1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vl = (t, e) => {
  for (var r in e || (e = {}))
    S1.call(e, r) && Bl(t, r, e[r]);
  if (zl)
    for (var r of zl(e))
      x1.call(e, r) && Bl(t, r, e[r]);
  return t;
};
class Bc extends vy {
  constructor(e) {
    super(e), this.protocol = Wh, this.version = __, this.name = zc, this.events = new gr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || E_.logger }));
    this.logger = Me.generateChildLogger(r, this.name), this.heartbeat = new ds.HeartBeat(), this.crypto = new X_(this, this.logger, e == null ? void 0 : e.keychain), this.history = new v1(this, this.logger), this.expirer = new b1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Fg(Vl(Vl({}, S_), e == null ? void 0 : e.storageOptions)), this.relayer = new d1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new m1(this, this.logger), this.verify = new w1(this.projectId || "", this.logger), this.echoClient = new _1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Bc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem($_, n), r;
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
const D1 = Bc, Zh = "wc", Yh = 2, Jh = "client", Vc = `${Zh}@${Yh}:${Jh}:`, da = { name: Jh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Kl = "WALLETCONNECT_DEEPLINK_CHOICE", O1 = "proposal", I1 = "Proposal expired", C1 = "session", Bi = se.SEVEN_DAYS, R1 = "engine", Rs = { wc_sessionPropose: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, pa = { min: se.FIVE_MINUTES, max: se.SEVEN_DAYS }, Vr = { idle: "IDLE", active: "ACTIVE" }, T1 = "request", A1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var P1 = Object.defineProperty, N1 = Object.defineProperties, L1 = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, F1 = Object.prototype.hasOwnProperty, U1 = Object.prototype.propertyIsEnumerable, Wl = (t, e, r) => e in t ? P1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jt = (t, e) => {
  for (var r in e || (e = {}))
    F1.call(e, r) && Wl(t, r, e[r]);
  if (Hl)
    for (var r of Hl(e))
      U1.call(e, r) && Wl(t, r, e[r]);
  return t;
}, Ts = (t, e) => N1(t, L1(e));
class M1 extends Ry {
  constructor(e) {
    super(e), this.name = R1, this.events = new gi(), this.initialized = !1, this.ignoredPayloadTypes = [kn], this.requestQueue = { state: Vr.idle, queue: [] }, this.sessionRequestQueue = { state: Vr.idle, queue: [] }, this.requestQueueDelay = se.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Rs) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Ts(Jt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let c = s, f, d = !1;
      if (c && (d = this.client.core.pairing.pairings.get(c).active), !c || !d) {
        const { topic: D, uri: b } = await this.client.core.pairing.create();
        c = D, f = b;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = Jt({ requiredNamespaces: i, optionalNamespaces: a, relays: u ?? [{ protocol: Gh }], proposer: { publicKey: p, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: v, resolve: E, done: S } = Kn(se.FIVE_MINUTES, I1);
      if (this.events.once(bt("session_connect"), async ({ error: D, session: b }) => {
        if (D)
          v(D);
        else if (b) {
          b.self.publicKey = p;
          const x = Ts(Jt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, x), await this.setExpiry(b.topic, b.expiry), c && await this.client.core.pairing.updateMetadata({ topic: c, metadata: b.peer.metadata }), E(x);
        }
      }), !c) {
        const { message: D } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
        throw new Error(D);
      }
      const A = await this.sendRequest({ topic: c, method: "wc_sessionPropose", params: m }), w = br(se.FIVE_MINUTES);
      return await this.setProposal(A, Jt({ id: A, expiry: w }, m)), { uri: f, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: c, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", $s(f) || (f = V0(i, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), m = c.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: c.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const E = Jt({ relay: { protocol: s ?? "irn" }, namespaces: i, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: p, metadata: this.client.metadata }, expiry: br(Bi) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(v), await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      const S = Ts(Jt({}, E), { topic: v, pairingTopic: u, acknowledged: !1, self: E.controller, peer: { publicKey: c.publicKey, metadata: c.metadata }, controller: p });
      return await this.client.session.set(v, S), await this.setExpiry(v, br(Bi)), { topic: v, acknowledged: () => new Promise((A) => setTimeout(() => A(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: u } = Kn();
      return this.events.once(bt("session_update", i), ({ error: c }) => {
        c ? u(c) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = Kn();
      return this.events.once(bt("session_extend", s), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, br(Bi)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a } = r, o = jc(), { done: u, resolve: c, reject: f } = Kn(a, "Request expired. Please try again.");
      return this.events.once(bt("session_request", o), ({ error: d, result: p }) => {
        d ? f(d) : c(p);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: s, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => f(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const p = await A0(this.client.core.storage, Kl);
        T0({ id: o, topic: i, wcDeepLink: p }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      Kr(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : wr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = Kn();
        this.events.once(bt("session_ping", s), ({ error: u }) => {
          u ? o(u) : a();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: _t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => W0(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i) => {
            var a, o;
            return ((a = i.peerMetadata) == null ? void 0 : a.url) && ((o = i.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && i.topic && i.topic !== n.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: s } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Kl).catch((i) => this.client.logger.warn(i)), this.getPendingSessionRequests().forEach((i) => {
        i.topic === r && this.deletePendingSessionRequest(i.id, _t("USER_DISCONNECTED"));
      });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, _t("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = Vr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Rs.wc_sessionRequest.req.ttl, { id: s, topic: i, params: a, verifyContext: o } = r;
      await this.client.pendingRequest.set(s, { id: s, topic: i, params: a, verifyContext: o }), n && this.client.core.expirer.set(s, br(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: c } = r, f = Xn(s, i, u);
      if (ms() && A1.includes(s)) {
        const m = Jn(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: m });
      }
      const d = await this.client.core.crypto.encode(n, f), p = Rs[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, f), c ? (p.internal = Ts(Jt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, p)) : this.client.core.relayer.publish(n, d, p).catch((m) => this.client.logger.error(m)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = $c(n, i), u = await this.client.core.crypto.encode(s, o), c = await this.client.core.history.get(s, n), f = Rs[c.request.method].res;
      a ? (f.internal = Ts(Jt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, u, f)) : this.client.core.relayer.publish(s, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = kc(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), u = Rs[o.request.method].res;
      this.client.core.relayer.publish(n, a, u), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        sn(s.expiry) && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        sn(s.expiry) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession(s)), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Vr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Vr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = Vr.idle;
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
        this.isValidConnect(Jt({}, n.params));
        const a = br(se.FIVE_MINUTES), o = Jt({ id: i, pairingTopic: r, expiry: a }, s);
        await this.setProposal(i, o);
        const u = Jn(JSON.stringify(n)), c = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: c });
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (Kr(n)) {
        const { result: i } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const a = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const u = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const c = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c });
        const f = await this.client.core.relayer.subscribe(c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        wr(n) && (await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), this.events.emit(bt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: u, namespaces: c, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: p, pairingTopic: m } = n.params, v = Jt({ topic: r, relay: a, expiry: u, namespaces: c, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(bt("session_connect"), { session: v }), this.cleanupDuplicatePairings(v);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      Kr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(bt("session_approve", s), {})) : wr(n) && (await this.client.session.delete(r, _t("USER_DISCONNECTED")), this.events.emit(bt("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = zi.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Jt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), zi.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      Kr(n) ? this.events.emit(bt("session_update", s), {}) : wr(n) && this.events.emit(bt("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, br(Bi)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      Kr(n) ? this.events.emit(bt("session_extend", s), {}) : wr(n) && this.events.emit(bt("session_extend", s), { error: n.error });
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
        Kr(n) ? this.events.emit(bt("session_ping", s), {}) : wr(n) && this.events.emit(bt("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(kt.publish, async () => {
            i(await this.deleteSession(r));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: s, topic: r });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Jt({ topic: r }, i));
        const a = Jn(JSON.stringify(Xn("wc_sessionRequest", i, s))), o = this.client.session.get(r), u = await this.getVerifyContext(a, o.peer.metadata), c = { id: s, topic: r, params: i, verifyContext: u };
        await this.setPendingSessionRequest(c), this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      Kr(n) ? this.events.emit(bt("session_request", s), { result: n.result }) : wr(n) && this.events.emit(bt("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = zi.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Jt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), zi.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Vr.idle, this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Vr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Vr.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Xn("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (Kt(n) || await this.isValidPairingTopic(n), !ib(o, !0)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !Kt(s) && $s(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Kt(i) && $s(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Kt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = sb(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!er(r))
        throw new Error(Y("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = eo(s, "approve()");
      if (u)
        throw new Error(u.message);
      const c = ml(o.requiredNamespaces, s, "approve()");
      if (c)
        throw new Error(c.message);
      if (!Ot(i, !0)) {
        const { message: f } = Y("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(f);
      }
      Kt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!er(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !ab(s)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!er(r)) {
        const { message: c } = Y("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(c);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!Th(n)) {
        const { message: c } = Y("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c);
      }
      const o = J0(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = eo(i, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (sn(a)) {
        const { message: c } = Y("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c);
      }
    }, this.isValidUpdate = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), a = eo(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = ml(i.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: s, chainId: i, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!yl(o, i)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(u);
      }
      if (!cb(s)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(u);
      }
      if (!fb(o, i, s.method)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(u);
      }
      if (a && !gb(a, pa)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${pa.min} and ${pa.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!er(r)) {
        const { message: a } = Y("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), a;
      }
      if (!ub(i)) {
        const { message: a } = Y("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!er(r)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!yl(a, i)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!lb(s)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!hb(a, i, s.name)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || Gn, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((s) => {
        if (!Ot(s, !1)) {
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
    this.client.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        qc(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : jo(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(dr.expired, async (e) => {
      const { topic: r, id: n } = Ch(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Y("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ns.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Ot(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (sn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ot(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (sn(this.client.session.get(e).expiry)) {
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
    else if (Ot(e, !1)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!ob(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (sn(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class j1 extends ko {
  constructor(e, r) {
    super(e, r, O1, Vc), this.core = e, this.logger = r;
  }
}
class $1 extends ko {
  constructor(e, r) {
    super(e, r, C1, Vc), this.core = e, this.logger = r;
  }
}
class k1 extends ko {
  constructor(e, r) {
    super(e, r, T1, Vc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Kc extends Cy {
  constructor(e) {
    super(e), this.protocol = Zh, this.version = Yh, this.name = da.name, this.events = new gr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || da.name, this.metadata = (e == null ? void 0 : e.metadata) || S0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || da.logger }));
    this.core = (e == null ? void 0 : e.core) || new D1(e), this.logger = Me.generateChildLogger(r, this.name), this.session = new $1(this.core, this.logger), this.proposal = new j1(this.core, this.logger), this.pendingRequest = new k1(this.core, this.logger), this.engine = new M1(this);
  }
  static async init(e) {
    const r = new Kc(e);
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
var q1 = Object.defineProperty, z1 = Object.defineProperties, B1 = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, V1 = Object.prototype.hasOwnProperty, K1 = Object.prototype.propertyIsEnumerable, Ql = (t, e, r) => e in t ? q1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, H1 = (t, e) => {
  for (var r in e || (e = {}))
    V1.call(e, r) && Ql(t, r, e[r]);
  if (Gl)
    for (var r of Gl(e))
      K1.call(e, r) && Ql(t, r, e[r]);
  return t;
}, W1 = (t, e) => z1(t, B1(e)), Hc = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, et = (t, e, r) => (Hc(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Dn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, fo = (t, e, r, n) => (Hc(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Mt = (t, e, r) => (Hc(t, e, "access private method"), r), On, Hn, Ls, Dt, Ha, Xh, jt, Vt, Wa, Zl;
let G1 = class {
  constructor(e) {
    Dn(this, Ha), Dn(this, jt), Dn(this, Wa), Dn(this, On, void 0), Dn(this, Hn, void 0), Dn(this, Ls, void 0), Dn(this, Dt, void 0), fo(this, On, e), fo(this, Hn, Mt(this, Ha, Xh).call(this)), Mt(this, jt, Vt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (s, i) => {
      await Mt(this, jt, Vt).call(this);
      const a = et(this, Hn).subscribeModal((c) => {
        c.open || (a(), i(new Error("Modal closed")));
      }), { uri: o, approval: u } = await et(this, Dt).connect(e);
      if (o) {
        const c = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), await et(this, Hn).openModal({ uri: o, chains: Array.from(c) });
      }
      try {
        const c = await u();
        s(c);
      } catch (c) {
        i(c);
      } finally {
        a(), et(this, Hn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Mt(this, jt, Vt).call(this), await et(this, Dt).disconnect(e);
  }
  async request(e) {
    return await Mt(this, jt, Vt).call(this), await et(this, Dt).request(e);
  }
  async getSessions() {
    return await Mt(this, jt, Vt).call(this), et(this, Dt).session.getAll();
  }
  async getSession() {
    return await Mt(this, jt, Vt).call(this), et(this, Dt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Mt(this, jt, Vt).call(this), et(this, Dt).off("session_expire", e);
  }
};
On = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakSet(), Xh = function() {
  const { modalOptions: t, projectId: e } = et(this, On);
  return new Yp(W1(H1({}, t), { projectId: e }));
}, jt = /* @__PURE__ */ new WeakSet(), Vt = async function() {
  return et(this, Dt) ? !0 : (!et(this, Ls) && typeof window < "u" && fo(this, Ls, Mt(this, Wa, Zl).call(this)), et(this, Ls));
}, Wa = /* @__PURE__ */ new WeakSet(), Zl = async function() {
  fo(this, Dt, await Kc.init({ metadata: et(this, On).metadata, projectId: et(this, On).projectId, relayUrl: et(this, On).relayUrl }));
  const t = await et(this, Dt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Wc = [
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
], qo = ["aleo:1"], Gc = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], Q1 = "f0aaeffe71b636da453fce042d79d723", Z1 = {
  standaloneChains: qo,
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
}, cO = {
  requiredNamespaces: {
    aleo: {
      methods: Wc,
      chains: qo,
      events: Gc
    }
  }
}, cs = new gi();
let Fs;
function Y1(t) {
  Fs = new G1({
    projectId: Q1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Z1 }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function tt() {
  return new Promise((t) => {
    if (Fs)
      t(Fs);
    else {
      const e = setInterval(() => {
        Fs && (clearInterval(e), t(Fs));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var Be;
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
    for (const a of s)
      i[a] = a;
    return i;
  }, t.getValidEnumValues = (s) => {
    const i = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), a = {};
    for (const o of i)
      a[o] = s[o];
    return t.objectValues(a);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(i) {
    return s[i];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && i.push(a);
    return i;
  }, t.find = (s, i) => {
    for (const a of s)
      if (i(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, i = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(Be || (Be = {}));
var Ga;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ga || (Ga = {}));
const ee = Be.arrayToEnum([
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
]), an = (t) => {
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
}, W = Be.arrayToEnum([
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
]), J1 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Sr extends Error {
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
      for (const a of i.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let o = n, u = 0;
          for (; u < a.path.length; ) {
            const c = a.path[u];
            u === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2);
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
Sr.create = (t) => new Sr(t);
const Ks = (t, e) => {
  let r;
  switch (t.code) {
    case W.invalid_type:
      t.received === ee.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Be.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Be.joinValues(t.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Be.joinValues(t.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${Be.joinValues(t.options)}, received '${t.received}'`;
      break;
    case W.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case W.invalid_return_type:
      r = "Invalid function return type";
      break;
    case W.invalid_date:
      r = "Invalid date";
      break;
    case W.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Be.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case W.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case W.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case W.custom:
      r = "Invalid input";
      break;
    case W.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case W.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Be.assertNever(t);
  }
  return { message: r };
};
let ed = Ks;
function X1(t) {
  ed = t;
}
function ho() {
  return ed;
}
const po = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, eE = [];
function re(t, e) {
  const r = po({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      ho(),
      Ks
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class zt {
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
        return de;
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
    return zt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: a } = s;
      if (i.status === "aborted" || a.status === "aborted")
        return de;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (n[i.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const de = Object.freeze({
  status: "aborted"
}), td = (t) => ({ status: "dirty", value: t }), Zt = (t) => ({ status: "valid", value: t }), Qa = (t) => t.status === "aborted", Za = (t) => t.status === "dirty", go = (t) => t.status === "valid", yo = (t) => typeof Promise < "u" && t instanceof Promise;
var ie;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ie || (ie = {}));
class Ur {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Yl = (t, e) => {
  if (go(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Sr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function be(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
}
class De {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return an(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: an(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new zt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: an(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (yo(r))
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
      parsedType: an(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return Yl(s, i);
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
      parsedType: an(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (yo(s) ? s : Promise.resolve(s));
    return Yl(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: W.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((u) => u ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Dr({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Wr.create(this, this._def);
  }
  nullable() {
    return Un.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return xr.create(this, this._def);
  }
  promise() {
    return ls.create(this, this._def);
  }
  or(e) {
    return Qs.create([this, e], this._def);
  }
  and(e) {
    return Zs.create(this, e, this._def);
  }
  transform(e) {
    return new Dr({
      ...be(this._def),
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ti({
      ...be(this._def),
      innerType: this,
      defaultValue: r,
      typeName: le.ZodDefault
    });
  }
  brand() {
    return new nd({
      typeName: le.ZodBranded,
      type: this,
      ...be(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new wo({
      ...be(this._def),
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
    return xi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const tE = /^c[^\s-]{8,}$/i, rE = /^[a-z][a-z0-9]*$/, nE = /[0-9A-HJKMNP-TV-Z]{26}/, sE = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, iE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, oE = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), aE = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, cE = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, uE = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function lE(t, e) {
  return !!((e === "v4" || !e) && aE.test(t) || (e === "v6" || !e) && cE.test(t));
}
class Er extends De {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: W.invalid_string,
      ...ie.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ie.errToObj(e)), this.trim = () => new Er({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Er({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Er({
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
          code: W.invalid_type,
          expected: ee.string,
          received: i.parsedType
        }
        //
      ), de;
    }
    const n = new zt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const a = e.data.length > i.value, o = e.data.length < i.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? re(s, {
          code: W.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && re(s, {
          code: W.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        iE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "email",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        oE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "emoji",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        sE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "uuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        tE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        rE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid2",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        nE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ulid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), re(s, {
            validation: "url",
            code: W.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "regex",
          code: W.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? uE(i).test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? lE(e.data, i.version) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ip",
          code: W.invalid_string,
          message: i.message
        }), n.dirty()) : Be.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Er({
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
Er.create = (t) => {
  var e;
  return new Er({
    checks: [],
    typeName: le.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
function fE(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class ln extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ee.number) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.number,
        received: i.parsedType
      }), de;
    }
    let n;
    const s = new zt();
    for (const i of this._def.checks)
      i.kind === "int" ? Be.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? fE(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_finite,
        message: i.message
      }), s.dirty()) : Be.assertNever(i);
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
    return new ln({
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
    return new ln({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Be.isInteger(e.value));
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
  typeName: le.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class fn extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ee.bigint) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.bigint,
        received: i.parsedType
      }), de;
    }
    let n;
    const s = new zt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Be.assertNever(i);
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
    return new fn({
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
    return new fn({
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
fn.create = (t) => {
  var e;
  return new fn({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
class Hs extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ee.boolean) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.boolean,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Hs.create = (t) => new Hs({
  typeName: le.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class Ln extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ee.date) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.date,
        received: i.parsedType
      }), de;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_date
      }), de;
    }
    const n = new zt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: W.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: W.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Be.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Ln({
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
Ln.create = (t) => new Ln({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: le.ZodDate,
  ...be(t)
});
class mo extends De {
  _parse(e) {
    if (this._getType(e) !== ee.symbol) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.symbol,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
mo.create = (t) => new mo({
  typeName: le.ZodSymbol,
  ...be(t)
});
class Ws extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.undefined,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Ws.create = (t) => new Ws({
  typeName: le.ZodUndefined,
  ...be(t)
});
class Gs extends De {
  _parse(e) {
    if (this._getType(e) !== ee.null) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.null,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Gs.create = (t) => new Gs({
  typeName: le.ZodNull,
  ...be(t)
});
class us extends De {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Zt(e.data);
  }
}
us.create = (t) => new us({
  typeName: le.ZodAny,
  ...be(t)
});
class An extends De {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Zt(e.data);
  }
}
An.create = (t) => new An({
  typeName: le.ZodUnknown,
  ...be(t)
});
class Qr extends De {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return re(r, {
      code: W.invalid_type,
      expected: ee.never,
      received: r.parsedType
    }), de;
  }
}
Qr.create = (t) => new Qr({
  typeName: le.ZodNever,
  ...be(t)
});
class vo extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.void,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
vo.create = (t) => new vo({
  typeName: le.ZodVoid,
  ...be(t)
});
class xr extends De {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== ee.array)
      return re(r, {
        code: W.invalid_type,
        expected: ee.array,
        received: r.parsedType
      }), de;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (re(r, {
        code: a ? W.too_big : W.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (re(r, {
      code: W.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (re(r, {
      code: W.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Ur(r, a, r.path, o)))).then((a) => zt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Ur(r, a, r.path, o)));
    return zt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new xr({
      ...this._def,
      minLength: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new xr({
      ...this._def,
      maxLength: { value: e, message: ie.toString(r) }
    });
  }
  length(e, r) {
    return new xr({
      ...this._def,
      exactLength: { value: e, message: ie.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
xr.create = (t, e) => new xr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: le.ZodArray,
  ...be(e)
});
function Wn(t) {
  if (t instanceof it) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Wr.create(Wn(n));
    }
    return new it({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof xr ? new xr({
      ...t._def,
      type: Wn(t.element)
    }) : t instanceof Wr ? Wr.create(Wn(t.unwrap())) : t instanceof Un ? Un.create(Wn(t.unwrap())) : t instanceof Mr ? Mr.create(t.items.map((e) => Wn(e))) : t;
}
class it extends De {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Be.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ee.object) {
      const c = this._getOrReturnCtx(e);
      return re(c, {
        code: W.invalid_type,
        expected: ee.object,
        received: c.parsedType
      }), de;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Qr && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || o.push(c);
    const u = [];
    for (const c of a) {
      const f = i[c], d = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: f._parse(new Ur(s, d, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Qr) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: s.data[f] }
          });
      else if (c === "strict")
        o.length > 0 && (re(s, {
          code: W.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const f of o) {
        const d = s.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: c._parse(
            new Ur(s, d, s.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const f of u) {
        const d = await f.key;
        c.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return c;
    }).then((c) => zt.mergeObjectSync(n, c)) : zt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ie.errToObj, new it({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, a, o;
          const u = (a = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ie.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new it({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new it({
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
    return new it({
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
    return new it({
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
    return new it({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Be.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Wn(this);
  }
  partial(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Wr; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return rd(Be.objectKeys(this.shape));
  }
}
it.create = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Qr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.strictCreate = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Qr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.lazycreate = (t, e) => new it({
  shape: t,
  unknownKeys: "strip",
  catchall: Qr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
class Qs extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Sr(o.ctx.common.issues));
      return re(r, {
        code: W.invalid_union,
        unionErrors: a
      }), de;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
        const a = {
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
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let i;
      const a = [];
      for (const u of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !i && (i = { result: f, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((u) => new Sr(u));
      return re(r, {
        code: W.invalid_union,
        unionErrors: o
      }), de;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qs.create = (t, e) => new Qs({
  options: t,
  typeName: le.ZodUnion,
  ...be(e)
});
const to = (t) => t instanceof Js ? to(t.schema) : t instanceof Dr ? to(t.innerType()) : t instanceof Xs ? [t.value] : t instanceof hn ? t.options : t instanceof ei ? Object.keys(t.enum) : t instanceof ti ? to(t._def.innerType) : t instanceof Ws ? [void 0] : t instanceof Gs ? [null] : null;
class zo extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.object)
      return re(r, {
        code: W.invalid_type,
        expected: ee.object,
        received: r.parsedType
      }), de;
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
      code: W.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), de);
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
      const a = to(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new zo({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...be(n)
    });
  }
}
function Ya(t, e) {
  const r = an(t), n = an(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ee.object && n === ee.object) {
    const s = Be.objectKeys(e), i = Be.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const u = Ya(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      a[o] = u.data;
    }
    return { valid: !0, data: a };
  } else if (r === ee.array && n === ee.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], u = Ya(a, o);
      if (!u.valid)
        return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else
    return r === ee.date && n === ee.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Zs extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (Qa(i) || Qa(a))
        return de;
      const o = Ya(i.value, a.value);
      return o.valid ? ((Za(i) || Za(a)) && r.dirty(), { status: r.value, value: o.data }) : (re(n, {
        code: W.invalid_intersection_types
      }), de);
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
    ]).then(([i, a]) => s(i, a)) : s(this._def.left._parseSync({
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
Zs.create = (t, e, r) => new Zs({
  left: t,
  right: e,
  typeName: le.ZodIntersection,
  ...be(r)
});
class Mr extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.array)
      return re(n, {
        code: W.invalid_type,
        expected: ee.array,
        received: n.parsedType
      }), de;
    if (n.data.length < this._def.items.length)
      return re(n, {
        code: W.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), de;
    !this._def.rest && n.data.length > this._def.items.length && (re(n, {
      code: W.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((a, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Ur(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => zt.mergeArray(r, a)) : zt.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Mr({
      ...this._def,
      rest: e
    });
  }
}
Mr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Mr({
    items: t,
    typeName: le.ZodTuple,
    rest: null,
    ...be(e)
  });
};
class Ys extends De {
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
        code: W.invalid_type,
        expected: ee.object,
        received: n.parsedType
      }), de;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Ur(n, o, n.path, o)),
        value: a._parse(new Ur(n, n.data[o], n.path, o))
      });
    return n.common.async ? zt.mergeObjectAsync(r, s) : zt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof De ? new Ys({
      keyType: e,
      valueType: r,
      typeName: le.ZodRecord,
      ...be(n)
    }) : new Ys({
      keyType: Er.create(),
      valueType: e,
      typeName: le.ZodRecord,
      ...be(r)
    });
  }
}
class bo extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.map)
      return re(n, {
        code: W.invalid_type,
        expected: ee.map,
        received: n.parsedType
      }), de;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, u], c) => ({
      key: s._parse(new Ur(n, o, n.path, [c, "key"])),
      value: i._parse(new Ur(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of a) {
          const c = await u.key, f = await u.value;
          if (c.status === "aborted" || f.status === "aborted")
            return de;
          (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of a) {
        const c = u.key, f = u.value;
        if (c.status === "aborted" || f.status === "aborted")
          return de;
        (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
bo.create = (t, e, r) => new bo({
  valueType: e,
  keyType: t,
  typeName: le.ZodMap,
  ...be(r)
});
class Fn extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.set)
      return re(n, {
        code: W.invalid_type,
        expected: ee.set,
        received: n.parsedType
      }), de;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (re(n, {
      code: W.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (re(n, {
      code: W.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(u) {
      const c = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return de;
        f.status === "dirty" && r.dirty(), c.add(f.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...n.data.values()].map((u, c) => i._parse(new Ur(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new Fn({
      ...this._def,
      minSize: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new Fn({
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
Fn.create = (t, e) => new Fn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...be(e)
});
class es extends De {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.function)
      return re(r, {
        code: W.invalid_type,
        expected: ee.function,
        received: r.parsedType
      }), de;
    function n(o, u) {
      return po({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ho(),
          Ks
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function s(o, u) {
      return po({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ho(),
          Ks
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof ls ? Zt(async (...o) => {
      const u = new Sr([]), c = await this._def.args.parseAsync(o, i).catch((p) => {
        throw u.addIssue(n(o, p)), u;
      }), f = await a(...c);
      return await this._def.returns._def.type.parseAsync(f, i).catch((p) => {
        throw u.addIssue(s(f, p)), u;
      });
    }) : Zt((...o) => {
      const u = this._def.args.safeParse(o, i);
      if (!u.success)
        throw new Sr([n(o, u.error)]);
      const c = a(...u.data), f = this._def.returns.safeParse(c, i);
      if (!f.success)
        throw new Sr([s(c, f.error)]);
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
    return new es({
      ...this._def,
      args: Mr.create(e).rest(An.create())
    });
  }
  returns(e) {
    return new es({
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
    return new es({
      args: e || Mr.create([]).rest(An.create()),
      returns: r || An.create(),
      typeName: le.ZodFunction,
      ...be(n)
    });
  }
}
class Js extends De {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Js.create = (t, e) => new Js({
  getter: t,
  typeName: le.ZodLazy,
  ...be(e)
});
class Xs extends De {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return re(r, {
        received: r.data,
        code: W.invalid_literal,
        expected: this._def.value
      }), de;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Xs.create = (t, e) => new Xs({
  value: t,
  typeName: le.ZodLiteral,
  ...be(e)
});
function rd(t, e) {
  return new hn({
    values: t,
    typeName: le.ZodEnum,
    ...be(e)
  });
}
class hn extends De {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        expected: Be.joinValues(n),
        received: r.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        received: r.data,
        code: W.invalid_enum_value,
        options: n
      }), de;
    }
    return Zt(e.data);
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
    return hn.create(e);
  }
  exclude(e) {
    return hn.create(this.options.filter((r) => !e.includes(r)));
  }
}
hn.create = rd;
class ei extends De {
  _parse(e) {
    const r = Be.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ee.string && n.parsedType !== ee.number) {
      const s = Be.objectValues(r);
      return re(n, {
        expected: Be.joinValues(s),
        received: n.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Be.objectValues(r);
      return re(n, {
        received: n.data,
        code: W.invalid_enum_value,
        options: s
      }), de;
    }
    return Zt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ei.create = (t, e) => new ei({
  values: t,
  typeName: le.ZodNativeEnum,
  ...be(e)
});
class ls extends De {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.promise && r.common.async === !1)
      return re(r, {
        code: W.invalid_type,
        expected: ee.promise,
        received: r.parsedType
      }), de;
    const n = r.parsedType === ee.promise ? r.data : Promise.resolve(r.data);
    return Zt(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ls.create = (t, e) => new ls({
  type: t,
  typeName: le.ZodPromise,
  ...be(e)
});
class Dr extends De {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null;
    if (s.type === "preprocess") {
      const a = s.transform(n.data);
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
    const i = {
      addIssue: (a) => {
        re(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "refinement") {
      const a = (o) => {
        const u = s.refinement(o, i);
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
        return o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!go(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => go(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Be.assertNever(s);
  }
}
Dr.create = (t, e, r) => new Dr({
  schema: t,
  typeName: le.ZodEffects,
  effect: e,
  ...be(r)
});
Dr.createWithPreprocess = (t, e, r) => new Dr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: le.ZodEffects,
  ...be(r)
});
class Wr extends De {
  _parse(e) {
    return this._getType(e) === ee.undefined ? Zt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wr.create = (t, e) => new Wr({
  innerType: t,
  typeName: le.ZodOptional,
  ...be(e)
});
class Un extends De {
  _parse(e) {
    return this._getType(e) === ee.null ? Zt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Un.create = (t, e) => new Un({
  innerType: t,
  typeName: le.ZodNullable,
  ...be(e)
});
class ti extends De {
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
ti.create = (t, e) => new ti({
  innerType: t,
  typeName: le.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...be(e)
});
class wo extends De {
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
    return yo(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Sr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Sr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
wo.create = (t, e) => new wo({
  innerType: t,
  typeName: le.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...be(e)
});
class _o extends De {
  _parse(e) {
    if (this._getType(e) !== ee.nan) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.nan,
        received: n.parsedType
      }), de;
    }
    return { status: "valid", value: e.data };
  }
}
_o.create = (t) => new _o({
  typeName: le.ZodNaN,
  ...be(t)
});
const hE = Symbol("zod_brand");
class nd extends De {
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
class xi extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? de : i.status === "dirty" ? (r.dirty(), td(i.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? de : s.status === "dirty" ? (r.dirty(), {
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
    return new xi({
      in: e,
      out: r,
      typeName: le.ZodPipeline
    });
  }
}
const sd = (t, e = {}, r) => t ? us.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, c = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...c, fatal: u });
  }
}) : us.create(), dE = {
  object: it.lazycreate
};
var le;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(le || (le = {}));
const pE = (t, e = {
  message: `Input not instance of ${t.name}`
}) => sd((r) => r instanceof t, e), id = Er.create, od = ln.create, gE = _o.create, yE = fn.create, ad = Hs.create, mE = Ln.create, vE = mo.create, bE = Ws.create, wE = Gs.create, _E = us.create, EE = An.create, SE = Qr.create, xE = vo.create, DE = xr.create, OE = it.create, IE = it.strictCreate, CE = Qs.create, RE = zo.create, TE = Zs.create, AE = Mr.create, PE = Ys.create, NE = bo.create, LE = Fn.create, FE = es.create, UE = Js.create, ME = Xs.create, jE = hn.create, $E = ei.create, kE = ls.create, Jl = Dr.create, qE = Wr.create, zE = Un.create, BE = Dr.createWithPreprocess, VE = xi.create, KE = () => id().optional(), HE = () => od().optional(), WE = () => ad().optional(), GE = {
  string: (t) => Er.create({ ...t, coerce: !0 }),
  number: (t) => ln.create({ ...t, coerce: !0 }),
  boolean: (t) => Hs.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => fn.create({ ...t, coerce: !0 }),
  date: (t) => Ln.create({ ...t, coerce: !0 })
}, QE = de;
var Or = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ks,
  setErrorMap: X1,
  getErrorMap: ho,
  makeIssue: po,
  EMPTY_PATH: eE,
  addIssueToContext: re,
  ParseStatus: zt,
  INVALID: de,
  DIRTY: td,
  OK: Zt,
  isAborted: Qa,
  isDirty: Za,
  isValid: go,
  isAsync: yo,
  get util() {
    return Be;
  },
  get objectUtil() {
    return Ga;
  },
  ZodParsedType: ee,
  getParsedType: an,
  ZodType: De,
  ZodString: Er,
  ZodNumber: ln,
  ZodBigInt: fn,
  ZodBoolean: Hs,
  ZodDate: Ln,
  ZodSymbol: mo,
  ZodUndefined: Ws,
  ZodNull: Gs,
  ZodAny: us,
  ZodUnknown: An,
  ZodNever: Qr,
  ZodVoid: vo,
  ZodArray: xr,
  ZodObject: it,
  ZodUnion: Qs,
  ZodDiscriminatedUnion: zo,
  ZodIntersection: Zs,
  ZodTuple: Mr,
  ZodRecord: Ys,
  ZodMap: bo,
  ZodSet: Fn,
  ZodFunction: es,
  ZodLazy: Js,
  ZodLiteral: Xs,
  ZodEnum: hn,
  ZodNativeEnum: ei,
  ZodPromise: ls,
  ZodEffects: Dr,
  ZodTransformer: Dr,
  ZodOptional: Wr,
  ZodNullable: Un,
  ZodDefault: ti,
  ZodCatch: wo,
  ZodNaN: _o,
  BRAND: hE,
  ZodBranded: nd,
  ZodPipeline: xi,
  custom: sd,
  Schema: De,
  ZodSchema: De,
  late: dE,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: GE,
  any: _E,
  array: DE,
  bigint: yE,
  boolean: ad,
  date: mE,
  discriminatedUnion: RE,
  effect: Jl,
  enum: jE,
  function: FE,
  instanceof: pE,
  intersection: TE,
  lazy: UE,
  literal: ME,
  map: NE,
  nan: gE,
  nativeEnum: $E,
  never: SE,
  null: wE,
  nullable: zE,
  number: od,
  object: OE,
  oboolean: WE,
  onumber: HE,
  optional: qE,
  ostring: KE,
  pipeline: VE,
  preprocess: BE,
  promise: kE,
  record: PE,
  set: LE,
  strictObject: IE,
  string: id,
  symbol: vE,
  transformer: Jl,
  tuple: AE,
  undefined: bE,
  union: CE,
  unknown: EE,
  void: xE,
  NEVER: QE,
  ZodIssueCode: W,
  quotelessJson: J1,
  ZodError: Sr
});
const Qc = /^aleo1.{58}$/i, ZE = /^AViewKey1.{44}$/i, YE = /^APrivateKey1.{47}$/i, JE = /^at1.{60}$/i, XE = /^\d+field$/, eS = /^\d+u32$/, tS = /^\d+u64$/, uO = Or.string().regex(Qc), lO = Or.string().regex(ZE), fO = Or.string().regex(YE), hO = Or.string().regex(JE), dO = Or.string().regex(XE), pO = Or.string().regex(eS), gO = Or.string().regex(tS);
var Ja;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Ja || (Ja = {}));
var Xa;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Xa || (Xa = {}));
var ec;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(ec || (ec = {}));
var tc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(tc || (tc = {}));
var Xl;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Xl || (Xl = {}));
const yO = Or.nativeEnum(Ja), mO = Or.nativeEnum(Xa), vO = Or.nativeEnum(tc), bO = Or.nativeEnum(ec);
class wO extends ar {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class _O {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class EO extends ar {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class SO {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class xO extends ar {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class DO extends ar {
  constructor(e) {
    super();
  }
}
class OO {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class IO {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class CO extends ar {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class RO {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class TO extends ar {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class AO {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class PO {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class NO extends gi {
  constructor() {
    super();
  }
}
class LO {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class FO extends gr.EventEmitter {
  constructor() {
    super();
  }
}
class UO {
  constructor(e) {
    this.client = e;
  }
}
function cd(t) {
  At(() => (tt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    tt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function rS(t) {
  At(() => (tt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    tt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function ud(t) {
  At(() => (tt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    tt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Ir() {
  const [t, e] = js(void 0);
  return cd((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), ud((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), rS((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), At(() => {
    async function r() {
      const s = await (await tt()).getSession();
      e(s);
    }
    return r(), cs.on("session_change", r), () => {
      cs.off("session_change", r);
    };
  }, []), t;
}
function Di(t) {
  At(() => (tt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    tt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var nS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ef = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, c) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, s = () => e, o = { setState: n, getState: s, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    (nS ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return e = t(n, s, o), o;
}, sS = (t) => t ? ef(t) : ef;
var rc = { exports: {} }, ga = {}, Vi = { exports: {} }, ya = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf;
function iS() {
  return tf || (tf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = pn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(D) {
      {
        for (var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          x[g - 1] = arguments[g];
        n("error", D, x);
      }
    }
    function n(D, b, x) {
      {
        var g = e.ReactDebugCurrentFrame, l = g.getStackAddendum();
        l !== "" && (b += "%s", x = x.concat([l]));
        var y = x.map(function(C) {
          return String(C);
        });
        y.unshift("Warning: " + b), Function.prototype.apply.call(console[D], console, y);
      }
    }
    function s(D, b) {
      return D === b && (D !== 0 || 1 / D === 1 / b) || D !== D && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : s, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue, f = !1, d = !1;
    function p(D, b, x) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!d) {
        var l = b();
        i(g, l) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var y = a({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), C = y[0].inst, T = y[1];
      return u(function() {
        C.value = g, C.getSnapshot = b, m(C) && T({
          inst: C
        });
      }, [D, g, b]), o(function() {
        m(C) && T({
          inst: C
        });
        var M = function() {
          m(C) && T({
            inst: C
          });
        };
        return D(M);
      }, [D]), c(g), g;
    }
    function m(D) {
      var b = D.getSnapshot, x = D.value;
      try {
        var g = b();
        return !i(x, g);
      } catch {
        return !0;
      }
    }
    function v(D, b, x) {
      return b();
    }
    var E = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", S = !E, A = S ? v : p, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : A;
    ya.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ya;
}
var ma = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf;
function oS() {
  if (rf)
    return ma;
  rf = 1;
  var t = pn;
  function e(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), E = v[0].inst, S = v[1];
    return i(function() {
      E.value = m, E.getSnapshot = p, u(E) && S({ inst: E });
    }, [d, m, p]), s(function() {
      return u(E) && S({ inst: E }), d(function() {
        u(E) && S({ inst: E });
      });
    }, [d]), a(m), m;
  }
  function u(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var m = p();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function c(d, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : o;
  return ma.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, ma;
}
var nf;
function Zc() {
  return nf || (nf = 1, process.env.NODE_ENV === "production" ? Vi.exports = oS() : Vi.exports = iS()), Vi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function aS() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = pn, e = Zc();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function c(f, d, p, m, v) {
      var E = i(null), S;
      E.current === null ? (S = {
        hasValue: !1,
        value: null
      }, E.current = S) : S = E.current;
      var A = o(function() {
        var x = !1, g, l, y = function(z) {
          if (!x) {
            x = !0, g = z;
            var G = m(z);
            if (v !== void 0 && S.hasValue) {
              var R = S.value;
              if (v(R, G))
                return l = R, R;
            }
            return l = G, G;
          }
          var L = g, Q = l;
          if (n(L, z))
            return Q;
          var V = m(z);
          return v !== void 0 && v(Q, V) ? Q : (g = z, l = V, V);
        }, C = p === void 0 ? null : p, T = function() {
          return y(d());
        }, M = C === null ? void 0 : function() {
          return y(C());
        };
        return [T, M];
      }, [d, p, m, v]), w = A[0], D = A[1], b = s(f, w, D);
      return a(function() {
        S.hasValue = !0, S.value = b;
      }, [b]), u(b), b;
    }
    ga.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
var va = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of;
function cS() {
  if (of)
    return va;
  of = 1;
  var t = pn, e = Zc();
  function r(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return va.useSyncExternalStoreWithSelector = function(c, f, d, p, m) {
    var v = i(null);
    if (v.current === null) {
      var E = { hasValue: !1, value: null };
      v.current = E;
    } else
      E = v.current;
    v = o(function() {
      function A(g) {
        if (!w) {
          if (w = !0, D = g, g = p(g), m !== void 0 && E.hasValue) {
            var l = E.value;
            if (m(l, g))
              return b = l;
          }
          return b = g;
        }
        if (l = b, n(D, g))
          return l;
        var y = p(g);
        return m !== void 0 && m(l, y) ? l : (D = g, b = y);
      }
      var w = !1, D, b, x = d === void 0 ? null : d;
      return [function() {
        return A(f());
      }, x === null ? void 0 : function() {
        return A(x());
      }];
    }, [f, d, p, m]);
    var S = s(c, v[0], v[1]);
    return a(function() {
      E.hasValue = !0, E.value = S;
    }, [S]), u(S), S;
  }, va;
}
process.env.NODE_ENV === "production" ? rc.exports = cS() : rc.exports = aS();
var uS = rc.exports;
const lS = /* @__PURE__ */ pi(uS);
var ld = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: fS } = pn, { useSyncExternalStoreWithSelector: hS } = lS;
let af = !1;
function dS(t, e = t.getState, r) {
  (ld ? "production" : void 0) !== "production" && r && !af && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), af = !0);
  const n = hS(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return fS(n), n;
}
const cf = (t) => {
  (ld ? "production" : void 0) !== "production" && typeof t != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof t == "function" ? sS(t) : t, r = (n, s) => dS(e, n, s);
  return Object.assign(r, e), r;
}, pS = (t) => t ? cf(t) : cf;
var gS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function yS(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const a = (u) => u === null ? null : JSON.parse(u, e == null ? void 0 : e.reviver), o = (i = r.getItem(s)) != null ? i : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (s, i) => r.setItem(
      s,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (s) => r.removeItem(s)
  };
}
const ri = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return ri(n)(r);
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
        return ri(n)(r);
      }
    };
  }
}, mS = (t, e) => (r, n, s) => {
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
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c;
  try {
    c = i.getStorage();
  } catch {
  }
  if (!c)
    return t(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...S);
      },
      n,
      s
    );
  const f = ri(i.serialize), d = () => {
    const S = i.partialize({ ...n() });
    let A;
    const w = f({ state: S, version: i.version }).then(
      (D) => c.setItem(i.name, D)
    ).catch((D) => {
      A = D;
    });
    if (A)
      throw A;
    return w;
  }, p = s.setState;
  s.setState = (S, A) => {
    p(S, A), d();
  };
  const m = t(
    (...S) => {
      r(...S), d();
    },
    n,
    s
  );
  let v;
  const E = () => {
    var S;
    if (!c)
      return;
    a = !1, o.forEach((w) => w(n()));
    const A = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, n())) || void 0;
    return ri(c.getItem.bind(c))(i.name).then((w) => {
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
      var D;
      return v = i.merge(
        w,
        (D = n()) != null ? D : m
      ), r(v, !0), d();
    }).then(() => {
      A == null || A(v, void 0), a = !0, u.forEach((w) => w(v));
    }).catch((w) => {
      A == null || A(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (S) => {
      i = {
        ...i,
        ...S
      }, S.getStorage && (c = S.getStorage());
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (S) => (o.add(S), () => {
      o.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, E(), v || m;
}, vS = (t, e) => (r, n, s) => {
  let i = {
    storage: yS(() => localStorage),
    partialize: (E) => E,
    version: 0,
    merge: (E, S) => ({
      ...S,
      ...E
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c = i.storage;
  if (!c)
    return t(
      (...E) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...E);
      },
      n,
      s
    );
  const f = () => {
    const E = i.partialize({ ...n() });
    return c.setItem(i.name, {
      state: E,
      version: i.version
    });
  }, d = s.setState;
  s.setState = (E, S) => {
    d(E, S), f();
  };
  const p = t(
    (...E) => {
      r(...E), f();
    },
    n,
    s
  );
  let m;
  const v = () => {
    var E, S;
    if (!c)
      return;
    a = !1, o.forEach((w) => {
      var D;
      return w((D = n()) != null ? D : p);
    });
    const A = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, (E = n()) != null ? E : p)) || void 0;
    return ri(c.getItem.bind(c))(i.name).then((w) => {
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
      var D;
      return m = i.merge(
        w,
        (D = n()) != null ? D : p
      ), r(m, !0), f();
    }).then(() => {
      A == null || A(m, void 0), m = n(), a = !0, u.forEach((w) => w(m));
    }).catch((w) => {
      A == null || A(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (E) => {
      i = {
        ...i,
        ...E
      }, E.storage && (c = E.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => a,
    onHydrate: (E) => (o.add(E), () => {
      o.delete(E);
    }),
    onFinishHydration: (E) => (u.add(E), () => {
      u.delete(E);
    })
  }, i.skipHydration || v(), m || p;
}, bS = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((gS ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), mS(t, e)) : vS(t, e), wS = bS, Zr = pS()(
  wS((t, e) => ({
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
class Oi {
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
const ni = typeof window > "u" || "Deno" in window;
function pr() {
}
function _S(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function nc(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function fd(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Us(t, e, r) {
  return Bo(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function on(t, e, r) {
  return Bo(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function uf(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: a,
    stale: o
  } = t;
  if (Bo(a)) {
    if (n) {
      if (e.queryHash !== Yc(a, e.options))
        return !1;
    } else if (!Qn(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof s < "u" && s !== e.state.fetchStatus || i && !i(e));
}
function lf(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: s,
    mutationKey: i
  } = t;
  if (Bo(i)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Rn(e.options.mutationKey) !== Rn(i))
        return !1;
    } else if (!Qn(e.options.mutationKey, i))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e));
}
function Yc(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Rn)(t);
}
function Rn(t) {
  return JSON.stringify(t, (e, r) => ic(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r);
}
function Qn(t, e) {
  return hd(t, e);
}
function hd(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !hd(t[r], e[r])) : !1;
}
function dd(t, e) {
  if (t === e)
    return t;
  const r = ff(t) && ff(e);
  if (r || ic(t) && ic(e)) {
    const n = r ? t.length : Object.keys(t).length, s = r ? e : Object.keys(e), i = s.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < i; u++) {
      const c = r ? u : s[u];
      a[c] = dd(t[c], e[c]), a[c] === t[c] && o++;
    }
    return n === i && o === n ? t : a;
  }
  return e;
}
function sc(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function ff(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function ic(t) {
  if (!hf(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!hf(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function hf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Bo(t) {
  return Array.isArray(t);
}
function pd(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function df(t) {
  pd(0).then(t);
}
function ES() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function oc(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? dd(t, e) : e;
}
class SS extends Oi {
  constructor() {
    super(), this.setup = (e) => {
      if (!ni && window.addEventListener) {
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
const Eo = new SS(), pf = ["online", "offline"];
class xS extends Oi {
  constructor() {
    super(), this.setup = (e) => {
      if (!ni && window.addEventListener) {
        const r = () => e();
        return pf.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          pf.forEach((n) => {
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
const si = new xS();
function DS(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Vo(t) {
  return (t ?? "online") === "online" ? si.isOnline() : !0;
}
class gd {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function ro(t) {
  return t instanceof gd;
}
function yd(t) {
  let e = !1, r = 0, n = !1, s, i, a;
  const o = new Promise((S, A) => {
    i = S, a = A;
  }), u = (S) => {
    n || (m(new gd(S)), t.abort == null || t.abort());
  }, c = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !Eo.isFocused() || t.networkMode !== "always" && !si.isOnline(), p = (S) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(S), s == null || s(), i(S));
  }, m = (S) => {
    n || (n = !0, t.onError == null || t.onError(S), s == null || s(), a(S));
  }, v = () => new Promise((S) => {
    s = (A) => {
      const w = n || !d();
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
      var w, D;
      if (n)
        return;
      const b = (w = t.retry) != null ? w : 3, x = (D = t.retryDelay) != null ? D : DS, g = typeof x == "function" ? x(r, A) : x, l = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, A);
      if (e || !l) {
        m(A);
        return;
      }
      r++, t.onFail == null || t.onFail(r, A), pd(g).then(() => {
        if (d())
          return v();
      }).then(() => {
        e ? m(A) : E();
      });
    });
  };
  return Vo(t.networkMode) ? E() : v().then(E), {
    promise: o,
    cancel: u,
    continue: () => (s == null ? void 0 : s()) ? o : Promise.resolve(),
    cancelRetry: c,
    continueRetry: f
  };
}
const Jc = console;
function OS() {
  let t = [], e = 0, r = (f) => {
    f();
  }, n = (f) => {
    f();
  };
  const s = (f) => {
    let d;
    e++;
    try {
      d = f();
    } finally {
      e--, e || o();
    }
    return d;
  }, i = (f) => {
    e ? t.push(f) : df(() => {
      r(f);
    });
  }, a = (f) => (...d) => {
    i(() => {
      f(...d);
    });
  }, o = () => {
    const f = t;
    t = [], f.length && df(() => {
      n(() => {
        f.forEach((d) => {
          r(d);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: a,
    schedule: i,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    }
  };
}
const wt = OS();
class md {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), nc(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (ni ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class IS extends md {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Jc, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || CS(this.options), this.state = this.initialState, this.scheduleGc();
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
    const n = oc(this.state.data, e, this.options);
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
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(pr).catch(pr) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !fd(this.state.dataUpdatedAt, e);
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
    const a = ES(), o = {
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
    const c = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: c
    };
    if (u(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = f.fetchOptions) == null ? void 0 : s.meta)) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = f.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const p = (m) => {
      if (ro(m) && m.silent || this.dispatch({
        type: "error",
        error: m
      }), !ro(m)) {
        var v, E, S, A;
        (v = (E = this.cache.config).onError) == null || v.call(E, m, this), (S = (A = this.cache.config).onSettled) == null || S.call(A, this.state.data, m, this), process.env.NODE_ENV !== "production" && this.logger.error(m);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = yd({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
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
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
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
            fetchStatus: Vo(this.options.networkMode) ? "fetching" : "paused",
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
          const a = e.error;
          return ro(a) && a.revert && this.revertState ? {
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
    this.state = r(this.state), wt.batch(() => {
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
function CS(t) {
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
class RS extends Oi {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    const i = r.queryKey, a = (s = r.queryHash) != null ? s : Yc(i, r);
    let o = this.get(a);
    return o || (o = new IS({
      cache: this,
      logger: e.getLogger(),
      queryKey: i,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
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
    wt.batch(() => {
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
    const [n] = on(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => uf(n, s));
  }
  findAll(e, r) {
    const [n] = on(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((s) => uf(n, s)) : this.queries;
  }
  notify(e) {
    wt.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    wt.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    wt.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class TS extends md {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Jc, this.observers = [], this.state = e.state || AS(), this.setOptions(e.options), this.scheduleGc();
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
      var l;
      return this.retryer = yd({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, C) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: C
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
        retry: (l = this.options.retry) != null ? l : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, s, i, a, o, u, c, f;
      if (!r) {
        var d, p, m, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (p = this.mutationCache.config).onMutate) == null ? void 0 : d.call(p, this.state.variables, this));
        const y = await ((m = (v = this.options).onMutate) == null ? void 0 : m.call(v, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
          variables: this.state.variables
        });
      }
      const l = await e();
      return await ((n = (s = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(s, l, this.state.variables, this.state.context, this)), await ((i = (a = this.options).onSuccess) == null ? void 0 : i.call(a, l, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, l, null, this.state.variables, this.state.context, this)), await ((c = (f = this.options).onSettled) == null ? void 0 : c.call(f, l, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: l
      }), l;
    } catch (l) {
      try {
        var E, S, A, w, D, b, x, g;
        throw await ((E = (S = this.mutationCache.config).onError) == null ? void 0 : E.call(S, l, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(l), await ((A = (w = this.options).onError) == null ? void 0 : A.call(w, l, this.state.variables, this.state.context)), await ((D = (b = this.mutationCache.config).onSettled) == null ? void 0 : D.call(b, void 0, l, this.state.variables, this.state.context, this)), await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, void 0, l, this.state.variables, this.state.context)), l;
      } finally {
        this.dispatch({
          type: "error",
          error: l
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
            isPaused: !Vo(this.options.networkMode),
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
    this.state = r(this.state), wt.batch(() => {
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
function AS() {
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
class PS extends Oi {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const s = new TS({
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
    wt.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => lf(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => lf(e, r));
  }
  notify(e) {
    wt.batch(() => {
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
      return wt.batch(() => r.reduce((n, s) => n.then(() => s.continue().catch(pr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function NS() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, s, i, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (s = n.meta) == null ? void 0 : s.fetchMore, c = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", p = ((i = t.state.data) == null ? void 0 : i.pages) || [], m = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let v = m, E = !1;
        const S = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var l;
              if ((l = t.signal) != null && l.aborted)
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
        }, A = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (g, l, y, C) => (v = C ? [l, ...v] : [...v, l], C ? [y, ...g] : [...g, y]), D = (g, l, y, C) => {
          if (E)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !l && g.length)
            return Promise.resolve(g);
          const T = {
            queryKey: t.queryKey,
            pageParam: y,
            meta: t.options.meta
          };
          S(T);
          const M = A(T);
          return Promise.resolve(M).then((G) => w(g, y, G, C));
        };
        let b;
        if (!p.length)
          b = D([]);
        else if (f) {
          const g = typeof c < "u", l = g ? c : gf(t.options, p);
          b = D(p, g, l);
        } else if (d) {
          const g = typeof c < "u", l = g ? c : LS(t.options, p);
          b = D(p, g, l, !0);
        } else {
          v = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (o && p[0] ? o(p[0], 0, p) : !0) ? D([], g, m[0]) : Promise.resolve(w([], m[0], p[0]));
          for (let y = 1; y < p.length; y++)
            b = b.then((C) => {
              if (o && p[y] ? o(p[y], y, p) : !0) {
                const M = g ? m[y] : gf(t.options, C);
                return D(C, g, M);
              }
              return Promise.resolve(w(C, m[y], p[y]));
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
function gf(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function LS(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class FS {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new RS(), this.mutationCache = e.mutationCache || new PS(), this.logger = e.logger || Jc, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Eo.subscribe(() => {
      Eo.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = si.subscribe(() => {
      si.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = on(e, r);
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
    const s = Us(e, r, n), i = this.getQueryData(s.queryKey);
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
    const s = this.queryCache.find(e), i = s == null ? void 0 : s.state.data, a = _S(r, i);
    if (typeof a > "u")
      return;
    const o = Us(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return wt.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = on(e, r), s = this.queryCache;
    wt.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, r, n) {
    const [s, i] = on(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...s
    };
    return wt.batch(() => (a.findAll(s).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, i)));
  }
  cancelQueries(e, r, n) {
    const [s, i = {}] = on(e, r, n);
    typeof i.revert > "u" && (i.revert = !0);
    const a = wt.batch(() => this.queryCache.findAll(s).map((o) => o.cancel(i)));
    return Promise.all(a).then(pr).catch(pr);
  }
  invalidateQueries(e, r, n) {
    const [s, i] = on(e, r, n);
    return wt.batch(() => {
      var a, o;
      if (this.queryCache.findAll(s).forEach((c) => {
        c.invalidate();
      }), s.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...s,
        type: (a = (o = s.refetchType) != null ? o : s.type) != null ? a : "active"
      };
      return this.refetchQueries(u, i);
    });
  }
  refetchQueries(e, r, n) {
    const [s, i] = on(e, r, n), a = wt.batch(() => this.queryCache.findAll(s).filter((u) => !u.isDisabled()).map((u) => {
      var c;
      return u.fetch(void 0, {
        ...i,
        cancelRefetch: (c = i == null ? void 0 : i.cancelRefetch) != null ? c : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(pr);
    return i != null && i.throwOnError || (o = o.catch(pr)), o;
  }
  fetchQuery(e, r, n) {
    const s = Us(e, r, n), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const a = this.queryCache.build(this, i);
    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(pr).catch(pr);
  }
  fetchInfiniteQuery(e, r, n) {
    const s = Us(e, r, n);
    return s.behavior = NS(), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(pr).catch(pr);
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
    const n = this.queryDefaults.find((s) => Rn(e) === Rn(s.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => Qn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((s) => Qn(e, s.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((s) => Rn(e) === Rn(s.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => Qn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((s) => Qn(e, s.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
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
    return !r.queryHash && r.queryKey && (r.queryHash = Yc(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
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
class US extends Oi {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), yf(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ac(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ac(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), sc(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const i = this.hasListeners();
    i && mf(this.currentQuery, s, this.options, n) && this.executeFetch(), this.updateResult(r), i && (this.currentQuery !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    i && (this.currentQuery !== s || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return jS(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
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
    return e != null && e.throwOnError || (r = r.catch(pr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), ni || this.currentResult.isStale || !nc(this.options.staleTime))
      return;
    const r = fd(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(ni || this.options.enabled === !1 || !nc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Eo.isFocused()) && this.executeFetch();
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
    const n = this.currentQuery, s = this.options, i = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== n, c = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: d
    } = e;
    let {
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      fetchStatus: E,
      status: S
    } = d, A = !1, w = !1, D;
    if (r._optimisticResults) {
      const y = this.hasListeners(), C = !y && yf(e, r), T = y && mf(e, n, r, s);
      (C || T) && (E = Vo(e.options.networkMode) ? "fetching" : "paused", p || (S = "loading")), r._optimisticResults === "isRestoring" && (E = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && S !== "error")
      D = f.data, p = f.dataUpdatedAt, S = f.status, A = !0;
    else if (r.select && typeof d.data < "u")
      if (i && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        D = this.selectResult;
      else
        try {
          this.selectFn = r.select, D = r.select(d.data), D = oc(i == null ? void 0 : i.data, D, r), this.selectResult = D, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      D = d.data;
    if (typeof r.placeholderData < "u" && typeof D > "u" && S === "loading") {
      let y;
      if (i != null && i.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        y = i.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (C) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(C), this.selectError = C;
        }
      typeof y < "u" && (S = "success", D = oc(i == null ? void 0 : i.data, y, r), w = !0);
    }
    this.selectError && (m = this.selectError, D = this.selectResult, v = Date.now(), S = "error");
    const b = E === "fetching", x = S === "loading", g = S === "error";
    return {
      status: S,
      fetchStatus: E,
      isLoading: x,
      isSuccess: S === "success",
      isError: g,
      isInitialLoading: x && b,
      data: D,
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
      isFetching: b,
      isRefetching: b && !x,
      isLoadingError: g && d.dataUpdatedAt === 0,
      isPaused: E === "paused",
      isPlaceholderData: w,
      isPreviousData: A,
      isRefetchError: g && d.dataUpdatedAt !== 0,
      isStale: Xc(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, sc(n, r))
      return;
    this.currentResult = n;
    const s = {
      cache: !0
    }, i = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !this.trackedProps.size)
        return !0;
      const u = new Set(o ?? this.trackedProps);
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((c) => {
        const f = c;
        return this.currentResult[f] !== r[f] && u.has(f);
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
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !ro(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    wt.batch(() => {
      if (e.onSuccess) {
        var r, n, s, i;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (s = (i = this.options).onSettled) == null || s.call(i, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, c;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (c = this.options).onSettled) == null || u.call(c, void 0, this.currentResult.error);
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
function MS(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function yf(t, e) {
  return MS(t, e) || t.state.dataUpdatedAt > 0 && ac(t, e, e.refetchOnMount);
}
function ac(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Xc(t, e);
  }
  return !1;
}
function mf(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && Xc(t, r);
}
function Xc(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function jS(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !sc(t.getCurrentResult(), e);
}
var $S = Zc();
const kS = $S.useSyncExternalStore, vf = /* @__PURE__ */ Wt.createContext(void 0), vd = /* @__PURE__ */ Wt.createContext(!1);
function bd(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = vf), window.ReactQueryClientContext) : vf);
}
const wd = ({
  context: t
} = {}) => {
  const e = Wt.useContext(bd(t, Wt.useContext(vd)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, qS = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  Wt.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const s = bd(r, n);
  return /* @__PURE__ */ Wt.createElement(vd.Provider, {
    value: !r && n
  }, /* @__PURE__ */ Wt.createElement(s.Provider, {
    value: t
  }, e));
}, _d = /* @__PURE__ */ Wt.createContext(!1), zS = () => Wt.useContext(_d);
_d.Provider;
function BS() {
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
const VS = /* @__PURE__ */ Wt.createContext(BS()), KS = () => Wt.useContext(VS);
function HS(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const WS = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, GS = (t) => {
  Wt.useEffect(() => {
    t.clearReset();
  }, [t]);
}, QS = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && HS(r, [t.error, n]), ZS = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, YS = (t, e) => t.isLoading && t.isFetching && !e, JS = (t, e, r) => (t == null ? void 0 : t.suspense) && YS(e, r), XS = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function ex(t, e) {
  const r = wd({
    context: t.context
  }), n = zS(), s = KS(), i = r.defaultQueryOptions(t);
  i._optimisticResults = n ? "isRestoring" : "optimistic", i.onError && (i.onError = wt.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = wt.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = wt.batchCalls(i.onSettled)), ZS(i), WS(i, s), GS(s);
  const [a] = Wt.useState(() => new e(r, i)), o = a.getOptimisticResult(i);
  if (kS(Wt.useCallback((u) => {
    const c = n ? () => {
    } : a.subscribe(wt.batchCalls(u));
    return a.updateResult(), c;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), Wt.useEffect(() => {
    a.setOptions(i, {
      listeners: !1
    });
  }, [i, a]), JS(i, o, n))
    throw XS(i, a, s);
  if (QS({
    result: o,
    errorResetBoundary: s,
    useErrorBoundary: i.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return i.notifyOnChangeProps ? o : a.trackResult(o);
}
function tx(t, e, r) {
  const n = Us(t, e, r);
  return ex(n, US);
}
function eu() {
  const [t, e] = js(void 0), [r, n] = js(void 0), [s, i] = js(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function Ed(t, e) {
  const n = await (await tt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Ii({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return tx(
    t,
    async () => Ed(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Ci(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = eu();
  async function o(u) {
    try {
      a(!0), i(void 0);
      const c = await Ed(t ?? u);
      return s(c), c;
    } catch (c) {
      throw i(c), c;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const cc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", MO = () => {
  const t = Ir(), [e, r, n] = Zr((c) => [c.account, c.setAccount, c.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Ii({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    wcParams: {
      topic: t == null ? void 0 : t.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  Di(({ params: c, topic: f }) => {
    if (c.event.name === "accountSelected" && t && t.topic === f) {
      const p = c.event.address ?? c.event.data.address, m = c.chainId.split(":")[0], v = c.chainId.split(":")[1];
      r({
        network: m,
        chainId: v,
        address: p,
        shortenedAddress: cc(p)
      });
    }
  }), ud(({ params: c, topic: f }) => {
    const d = c.event.address ?? c.event.data.address, p = c.chainId.split(":")[0], m = c.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: d,
      shortenedAddress: cc(d)
    });
  }), cd(({ params: c, topic: f }) => {
    n();
  }), At(() => {
    t && !o && s();
  }, [t == null ? void 0 : t.topic]), At(() => {
    if (i) {
      const c = i, f = c == null ? void 0 : c.account;
      f && r(f);
    }
  }, [i]);
  const u = a ? a.message : i && i.error;
  return {
    account: e,
    error: u,
    loading: o
  };
}, jO = ({ address: t, multisig: e }) => {
  const r = Ir(), [n] = Zr((d) => [d.account]), { refetch: s, data: i, error: a, isLoading: o } = Ii({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: "aleo:1",
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
  Di(({ params: d, topic: p }) => {
    const m = d.event.name, v = d.event.address ?? d.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && v === t) && s();
  }), At(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const u = a ? a.message : i && i.error, c = i;
  return { balances: c == null ? void 0 : c.balances, error: u, loading: o };
};
function $O() {
  const { data: t, error: e, loading: r, setData: n, setError: s, setLoading: i } = eu(), [a] = Zr((u) => [u.setAccount]);
  async function o() {
    try {
      i(!0), s(void 0);
      const c = await (await tt()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Wc,
            chains: qo,
            events: Gc
          }
        }
      });
      n(c);
      const f = c.namespaces.aleo.accounts[0].split(":");
      return a({
        network: f[0],
        chainId: f[1],
        address: f[2],
        shortenedAddress: cc(f[0])
      }), cs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), c;
    } catch (u) {
      throw s(u), u;
    } finally {
      i(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: o };
}
const kO = () => {
  const t = Ir(), { request: e, data: r, error: n, loading: s } = Ci({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), i = n ? n.message : r && r.error, a = r;
  return { createSharedState: () => {
    t && !s && e();
  }, data: a == null ? void 0 : a.data, loading: s, error: i };
};
var uc = { exports: {} }, ba, bf;
function rx() {
  if (bf)
    return ba;
  bf = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  ba = function(f, d) {
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
        var p = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
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
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? c(f, d, n, "day") : d >= r ? c(f, d, r, "hour") : d >= e ? c(f, d, e, "minute") : d >= t ? c(f, d, t, "second") : f + " ms";
  }
  function c(f, d, p, m) {
    var v = d >= p * 1.5;
    return Math.round(f / p) + " " + m + (v ? "s" : "");
  }
  return ba;
}
function nx(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = i, r.enable = s, r.enabled = a, r.humanize = rx(), r.destroy = c, Object.keys(t).forEach((f) => {
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
    let d, p = null, m, v;
    function E(...S) {
      if (!E.enabled)
        return;
      const A = E, w = Number(/* @__PURE__ */ new Date()), D = w - (d || w);
      A.diff = D, A.prev = d, A.curr = w, d = w, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let b = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (g, l) => {
        if (g === "%%")
          return "%";
        b++;
        const y = r.formatters[l];
        if (typeof y == "function") {
          const C = S[b];
          g = y.call(A, C), S.splice(b, 1), b--;
        }
        return g;
      }), r.formatArgs.call(A, S), (A.log || r.log).apply(A, S);
    }
    return E.namespace = f, E.useColors = r.useColors(), E.color = r.selectColor(f), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(f)), v),
      set: (S) => {
        p = S;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function n(f, d) {
    const p = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return p.log = this.log, p;
  }
  function s(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const p = (typeof f == "string" ? f : "").split(/[\s,]+/), m = p.length;
    for (d = 0; d < m; d++)
      p[d] && (f = p[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function i() {
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
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var sx = nx;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
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
    const c = "color: " + this.color;
    u.splice(1, 0, c, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (f++, p === "%c" && (d = f));
    }), u.splice(d, 0, c);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
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
  t.exports = sx(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(uc, uc.exports);
var ix = uc.exports;
const ox = /* @__PURE__ */ pi(ix), Ri = ox("wallet:sdk");
Ri.enabled = !0;
const qO = (t) => {
  Ri("useDecrypt", t);
  const e = Ir(), { request: r, data: n, error: s, loading: i } = Ci({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), a = s ? s.message : n && n.error, o = n;
  return { decrypt: () => {
    t && e && !i && r();
  }, plaintexts: o == null ? void 0 : o.plaintexts, loading: i, error: a };
}, ax = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Sd(t, e) {
  const { message: r, code: n } = ax[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function zO() {
  const t = Ir(), { error: e, loading: r, setError: n, setLoading: s } = eu();
  async function i() {
    if (!(!t || r))
      try {
        s(!0), n(void 0), await (await tt()).disconnect({
          topic: t.topic,
          reason: Sd("USER_DISCONNECTED")
        }), cs.emit("session_change"), Zr.setState({ account: void 0 });
      } catch (a) {
        throw n(a), a;
      } finally {
        s(!1);
      }
  }
  return { error: e, loading: r, disconnect: i };
}
const BO = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Ir(), [s] = Zr((v) => [v.account]), { refetch: i, data: a, error: o, isLoading: u } = Ii({
    queryKey: ["useEvent", s == null ? void 0 : s.address, e, r, t, n == null ? void 0 : n.topic],
    enabled: t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0),
    wcParams: {
      topic: n == null ? void 0 : n.topic,
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
  Di(({ params: v, topic: E }) => {
    const S = v.event.name, A = v.event.address ?? v.event.data.address;
    (S === "selectedAccountSynced" && !r || S === "sharedAccountSynced" && r && A === e) && i();
  });
  const c = !!n && !!s;
  At(() => {
    c && !u && i();
  }, [c]);
  const f = () => {
    c && !u && i();
  }, d = o ? o.message : a && a.error, p = a, m = p == null ? void 0 : p.event;
  return { fetchEvent: f, event: m, error: d, loading: u };
}, VO = ({ filter: t, page: e }) => {
  const r = Ir(), [n] = Zr((v) => [v.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: a, isLoading: o } = Ii({
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
  Di(({ id: v, params: E, topic: S }) => {
    E.event.name === "selectedAccountSynced" && s();
  });
  const u = !!r && !!n;
  At(() => {
    u && !o && s();
  }, [u]);
  const c = () => {
    u && !o && s();
  }, f = a ? a.message : i && i.error, d = i, p = d == null ? void 0 : d.events, m = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: c, events: p, error: f, loading: o, page: e, pageCount: m };
}, KO = (t) => {
  const e = Ir(), { request: r, data: n, error: s, loading: i } = Ci({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), a = s ? s.message : n && n.error, o = n;
  return { importSharedState: () => {
    e && !i && r();
  }, data: o == null ? void 0 : o.data, loading: i, error: a };
}, HO = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, WO = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = Ir(), [i] = Zr((S) => [
    S.account
  ]), { refetch: a, data: o, error: u, isLoading: c } = Ii({
    queryKey: ["useRecords", i == null ? void 0 : i.address, t, e, r, n, s == null ? void 0 : s.topic],
    enabled: (e ? !!t : !0) && !!s && !!i,
    wcParams: {
      topic: s == null ? void 0 : s.topic,
      chainId: "aleo:1",
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
  }), f = !!s && !!i && (e ? !!t : !0);
  Di(({ params: S }) => {
    const A = S.event.name, w = S.event.address ?? S.event.data.address;
    (A === "selectedAccountSynced" && !e || A === "sharedAccountSynced" && e && w === t) && a();
  });
  const d = () => {
    f && !c && (Ri("useRequestSignature refetching...", [t, e, r, n]), a());
  }, p = u ? u.message : o && o.error, m = o, v = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: d, records: v, error: p, loading: c, page: n, pageCount: E };
}, GO = (t) => {
  const e = Ir(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: s, error: i, loading: a } = Ci({
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
  }), o = i ? i.message : s && s.error, u = s;
  return { createEvent: () => {
    t && e && !a && (Ri("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, QO = (t, e) => {
  const r = Ir(), { request: n, data: s, error: i, loading: a } = Ci({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Qc.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (Ri("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
}, ZO = async () => {
  const t = await tt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    const r = await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return Zr.setState({ account: r.account }), r;
  } catch (r) {
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, YO = async ({ address: t }) => {
  const e = await tt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    });
  } catch (n) {
    const s = n.message;
    return console.error("getBalance error", s), { error: s };
  }
}, JO = async () => {
  const t = await tt();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Wc,
          chains: qo,
          events: Gc
        }
      }
    });
    return cs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, XO = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: n
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("createEvent error", i), { error: i };
  }
}, e3 = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (r) {
    const n = r.message;
    return console.error("createSharedState error", n), { error: n };
  }
}, t3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
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
}, r3 = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.disconnect({
      reason: Sd("USER_DISCONNECTED"),
      topic: e.topic
    }), cs.emit("session_change"), Zr.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, n3 = async ({
  id: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = async () => await r.request({
    topic: n.topic,
    chainId: "aleo:1",
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
  } catch (i) {
    const a = i.message;
    return console.error("getEvents error", a), { error: a };
  }
}, s3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (s = 0) => await e.request({
    topic: r.topic,
    chainId: "aleo:1",
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
    return await n();
  } catch (s) {
    const i = s.message;
    return console.error("getEvents error", i), { error: i };
  }
}, i3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
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
}, o3 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await tt(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = async (a = 0) => await n.request({
    topic: s.topic,
    chainId: "aleo:1",
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
    return await i();
  } catch (a) {
    const o = a.message;
    return console.error("getRecords error", o), { error: o };
  }
}, a3 = async ({
  message: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: Qc.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, c3 = 25;
var lc = { exports: {} }, As = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf;
function cx() {
  return wf || (wf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = pn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
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
        D("error", O, J);
      }
    }
    function D(O, j, J) {
      {
        var ue = A.ReactDebugCurrentFrame, $e = ue.getStackAddendum();
        $e !== "" && (j += "%s", J = J.concat([$e]));
        var Pe = J.map(function(Le) {
          return String(Le);
        });
        Pe.unshift("Warning: " + j), Function.prototype.apply.call(console[O], console, Pe);
      }
    }
    var b = !1, x = !1, g = !1, l = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function T(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === i || y || O === s || O === c || O === f || l || O === m || b || x || g || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === d || O.$$typeof === a || O.$$typeof === o || O.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === C || O.getModuleId !== void 0));
    }
    function M(O, j, J) {
      var ue = O.displayName;
      if (ue)
        return ue;
      var $e = j.displayName || j.name || "";
      return $e !== "" ? J + "(" + $e + ")" : J;
    }
    function z(O) {
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
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case o:
            var j = O;
            return z(j) + ".Consumer";
          case a:
            var J = O;
            return z(J._context) + ".Provider";
          case u:
            return M(O, O.render, "ForwardRef");
          case d:
            var ue = O.displayName || null;
            return ue !== null ? ue : G(O.type) || "Memo";
          case p: {
            var $e = O, Pe = $e._payload, Le = $e._init;
            try {
              return G(Le(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, L = 0, Q, V, k, B, $, K, fe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ae() {
      {
        if (L === 0) {
          Q = console.log, V = console.info, k = console.warn, B = console.error, $ = console.group, K = console.groupCollapsed, fe = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: H,
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
            log: R({}, O, {
              value: Q
            }),
            info: R({}, O, {
              value: V
            }),
            warn: R({}, O, {
              value: k
            }),
            error: R({}, O, {
              value: B
            }),
            group: R({}, O, {
              value: $
            }),
            groupCollapsed: R({}, O, {
              value: K
            }),
            groupEnd: R({}, O, {
              value: fe
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = A.ReactCurrentDispatcher, U;
    function F(O, j, J) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ue = $e.stack.trim().match(/\n( *(at )?)/);
            U = ue && ue[1] || "";
          }
        return `
` + U + O;
      }
    }
    var P = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function Z(O, j) {
      if (!O || P)
        return "";
      {
        var J = h.get(O);
        if (J !== void 0)
          return J;
      }
      var ue;
      P = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = oe.current, oe.current = null, ae();
      try {
        if (j) {
          var Le = function() {
            throw Error();
          };
          if (Object.defineProperty(Le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Le, []);
            } catch (yr) {
              ue = yr;
            }
            Reflect.construct(O, [], Le);
          } else {
            try {
              Le.call();
            } catch (yr) {
              ue = yr;
            }
            O.call(Le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yr) {
            ue = yr;
          }
          O();
        }
      } catch (yr) {
        if (yr && ue && typeof yr.stack == "string") {
          for (var Re = yr.stack.split(`
`), Rt = ue.stack.split(`
`), nt = Re.length - 1, ut = Rt.length - 1; nt >= 1 && ut >= 0 && Re[nt] !== Rt[ut]; )
            ut--;
          for (; nt >= 1 && ut >= 0; nt--, ut--)
            if (Re[nt] !== Rt[ut]) {
              if (nt !== 1 || ut !== 1)
                do
                  if (nt--, ut--, ut < 0 || Re[nt] !== Rt[ut]) {
                    var mt = `
` + Re[nt].replace(" at new ", " at ");
                    return O.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", O.displayName)), typeof O == "function" && h.set(O, mt), mt;
                  }
                while (nt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        P = !1, oe.current = Pe, te(), Error.prepareStackTrace = $e;
      }
      var Xr = O ? O.displayName || O.name : "", Ti = Xr ? F(Xr) : "";
      return typeof O == "function" && h.set(O, Ti), Ti;
    }
    function X(O, j, J) {
      return Z(O, !1);
    }
    function Oe(O) {
      var j = O.prototype;
      return !!(j && j.isReactComponent);
    }
    function Ie(O, j, J) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Z(O, Oe(O));
      if (typeof O == "string")
        return F(O);
      switch (O) {
        case c:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case u:
            return X(O.render);
          case d:
            return Ie(O.type, j, J);
          case p: {
            var ue = O, $e = ue._payload, Pe = ue._init;
            try {
              return Ie(Pe($e), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Fe = {}, Je = A.ReactDebugCurrentFrame;
    function He(O) {
      if (O) {
        var j = O._owner, J = Ie(O.type, O._source, j ? j.type : null);
        Je.setExtraStackFrame(J);
      } else
        Je.setExtraStackFrame(null);
    }
    function Ne(O, j, J, ue, $e) {
      {
        var Pe = Function.call.bind(we);
        for (var Le in O)
          if (Pe(O, Le)) {
            var Re = void 0;
            try {
              if (typeof O[Le] != "function") {
                var Rt = Error((ue || "React class") + ": " + J + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              Re = O[Le](j, Le, ue, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Re = nt;
            }
            Re && !(Re instanceof Error) && (He($e), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", J, Le, typeof Re), He(null)), Re instanceof Error && !(Re.message in Fe) && (Fe[Re.message] = !0, He($e), w("Failed %s type: %s", J, Re.message), He(null));
          }
      }
    }
    var Te = Array.isArray;
    function _e(O) {
      return Te(O);
    }
    function Se(O) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return J;
      }
    }
    function Ee(O) {
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
      if (Ee(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(O)), ge(O);
    }
    var ce = A.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, he, Ae;
    Ae = {};
    function Ue(O) {
      if (we.call(O, "ref")) {
        var j = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function ke(O) {
      if (we.call(O, "key")) {
        var j = Object.getOwnPropertyDescriptor(O, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function qe(O, j) {
      if (typeof O.ref == "string" && ce.current && j && ce.current.stateNode !== j) {
        var J = G(ce.current.type);
        Ae[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), O.ref), Ae[J] = !0);
      }
    }
    function je(O, j) {
      {
        var J = function() {
          Ce || (Ce = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function nr(O, j) {
      {
        var J = function() {
          he || (he = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var ur = function(O, j, J, ue, $e, Pe, Le) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: O,
        key: j,
        ref: J,
        props: Le,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function Cr(O, j, J, ue, $e) {
      {
        var Pe, Le = {}, Re = null, Rt = null;
        J !== void 0 && (pe(J), Re = "" + J), ke(j) && (pe(j.key), Re = "" + j.key), Ue(j) && (Rt = j.ref, qe(j, $e));
        for (Pe in j)
          we.call(j, Pe) && !xe.hasOwnProperty(Pe) && (Le[Pe] = j[Pe]);
        if (O && O.defaultProps) {
          var nt = O.defaultProps;
          for (Pe in nt)
            Le[Pe] === void 0 && (Le[Pe] = nt[Pe]);
        }
        if (Re || Rt) {
          var ut = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Re && je(Le, ut), Rt && nr(Le, ut);
        }
        return ur(O, Re, Rt, $e, ue, ce.current, Le);
      }
    }
    var Ct = A.ReactCurrentOwner, Rr = A.ReactDebugCurrentFrame;
    function lr(O) {
      if (O) {
        var j = O._owner, J = Ie(O.type, O._source, j ? j.type : null);
        Rr.setExtraStackFrame(J);
      } else
        Rr.setExtraStackFrame(null);
    }
    var Jr;
    Jr = !1;
    function Xe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function Qe() {
      {
        if (Ct.current) {
          var O = G(Ct.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function ot(O) {
      {
        if (O !== void 0) {
          var j = O.fileName.replace(/^.*[\\\/]/, ""), J = O.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var rt = {};
    function at(O) {
      {
        var j = Qe();
        if (!j) {
          var J = typeof O == "string" ? O : O.displayName || O.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Ze(O, j) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var J = at(j);
        if (rt[J])
          return;
        rt[J] = !0;
        var ue = "";
        O && O._owner && O._owner !== Ct.current && (ue = " It was passed a child from " + G(O._owner.type) + "."), lr(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ue), lr(null);
      }
    }
    function ft(O, j) {
      {
        if (typeof O != "object")
          return;
        if (_e(O))
          for (var J = 0; J < O.length; J++) {
            var ue = O[J];
            Xe(ue) && Ze(ue, j);
          }
        else if (Xe(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var $e = S(O);
          if (typeof $e == "function" && $e !== O.entries)
            for (var Pe = $e.call(O), Le; !(Le = Pe.next()).done; )
              Xe(Le.value) && Ze(Le.value, j);
        }
      }
    }
    function pt(O) {
      {
        var j = O.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === d))
          J = j.propTypes;
        else
          return;
        if (J) {
          var ue = G(j);
          Ne(J, O.props, "prop", ue, O);
        } else if (j.PropTypes !== void 0 && !Jr) {
          Jr = !0;
          var $e = G(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gt(O) {
      {
        for (var j = Object.keys(O.props), J = 0; J < j.length; J++) {
          var ue = j[J];
          if (ue !== "children" && ue !== "key") {
            lr(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), lr(null);
            break;
          }
        }
        O.ref !== null && (lr(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), lr(null));
      }
    }
    function ht(O, j, J, ue, $e, Pe) {
      {
        var Le = T(O);
        if (!Le) {
          var Re = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = ot($e);
          Rt ? Re += Rt : Re += Qe();
          var nt;
          O === null ? nt = "null" : _e(O) ? nt = "array" : O !== void 0 && O.$$typeof === e ? (nt = "<" + (G(O.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Re);
        }
        var ut = Cr(O, j, J, $e, Pe);
        if (ut == null)
          return ut;
        if (Le) {
          var mt = j.children;
          if (mt !== void 0)
            if (ue)
              if (_e(mt)) {
                for (var Xr = 0; Xr < mt.length; Xr++)
                  ft(mt[Xr], O);
                Object.freeze && Object.freeze(mt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(mt, O);
        }
        return O === n ? gt(ut) : pt(ut), ut;
      }
    }
    function yt(O, j, J) {
      return ht(O, j, J, !0);
    }
    function dt(O, j, J) {
      return ht(O, j, J, !1);
    }
    var ct = dt, We = yt;
    As.Fragment = n, As.jsx = ct, As.jsxs = We;
  }()), As;
}
var Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f;
function ux() {
  if (_f)
    return Ps;
  _f = 1;
  var t = pn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, c) {
    var f, d = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      n.call(u, f) && !i.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: p, ref: m, props: d, _owner: s.current };
  }
  return Ps.Fragment = r, Ps.jsx = a, Ps.jsxs = a, Ps;
}
process.env.NODE_ENV === "production" ? lc.exports = ux() : lc.exports = cx();
var Ef = lc.exports, ye = {
  context: void 0,
  registry: void 0
};
function Ms(t) {
  ye.context = t;
}
var lx = (t, e) => t === e, So = Symbol("solid-proxy"), xd = Symbol("solid-track"), xo = {
  equals: lx
}, Dd = Ad, Yr = 1, Do = 2, Od = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, wa = {}, ze = null, _a = null, Ve = null, qt = null, Gr = null, Ko = 0, [fx, u3] = /* @__PURE__ */ Ht(!1);
function Pn(t, e) {
  const r = Ve, n = ze, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Od : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => It(() => Wo(a)));
  ze = a, Ve = null;
  try {
    return jr(o, !0);
  } finally {
    Ve = r, ze = n;
  }
}
function Ht(t, e) {
  e = e ? Object.assign({}, xo, e) : xo;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Td(r, s));
  return [Rd.bind(r), n];
}
function Sf(t, e, r) {
  const n = Ho(t, e, !0, Yr);
  bs(n);
}
function Nn(t, e, r) {
  const n = Ho(t, e, !1, Yr);
  bs(n);
}
function Id(t, e, r) {
  Dd = bx;
  const n = Ho(t, e, !1, Yr);
  (!r || !r.render) && (n.user = !0), Gr ? Gr.push(n) : bs(n);
}
function rr(t, e, r) {
  r = r ? Object.assign({}, xo, r) : xo;
  const n = Ho(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, bs(n), Rd.bind(n);
}
function xf(t) {
  return t && typeof t == "object" && "then" in t;
}
function hx(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = wa, u = null, c = !1, f = "initialValue" in i, d = typeof n == "function" && rr(n);
  const p = /* @__PURE__ */ new Set(), [m, v] = (i.storage || Ht)(i.initialValue), [E, S] = Ht(void 0), [A, w] = Ht(void 0, {
    equals: !1
  }), [D, b] = Ht(f ? "ready" : "unresolved");
  if (ye.context) {
    u = `${ye.context.id}${ye.context.count++}`;
    let C;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : ye.load && (C = ye.load(u)) && (o = xf(C) && "value" in C ? C.value : C);
  }
  function x(C, T, M, z) {
    return a === C && (a = null, z !== void 0 && (f = !0), (C === o || T === o) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(z, {
        value: T
      })
    ), o = wa, g(T, M)), T;
  }
  function g(C, T) {
    jr(() => {
      T === void 0 && v(() => C), b(T !== void 0 ? "errored" : f ? "ready" : "unresolved"), S(T);
      for (const M of p.keys())
        M.decrement();
      p.clear();
    }, !1);
  }
  function l() {
    const C = yx, T = m(), M = E();
    if (M !== void 0 && !a)
      throw M;
    return Ve && !Ve.user && C && Sf(() => {
      A(), a && (C.resolved || p.has(C) || (C.increment(), p.add(C)));
    }), T;
  }
  function y(C = !0) {
    if (C !== !1 && c)
      return;
    c = !1;
    const T = d ? d() : n;
    if (T == null || T === !1) {
      x(a, It(m));
      return;
    }
    const M = o !== wa ? o : It(
      () => s(T, {
        value: m(),
        refetching: C
      })
    );
    return xf(M) ? (a = M, c = !0, queueMicrotask(() => c = !1), jr(() => {
      b(f ? "refreshing" : "pending"), w();
    }, !1), M.then(
      (z) => x(M, z, void 0, T),
      (z) => x(M, void 0, Nd(z), T)
    )) : (x(a, M, void 0, T), M);
  }
  return Object.defineProperties(l, {
    state: {
      get: () => D()
    },
    error: {
      get: () => E()
    },
    loading: {
      get() {
        const C = D();
        return C === "pending" || C === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return l();
        const C = E();
        if (C && !a)
          throw C;
        return m();
      }
    }
  }), d ? Sf(() => y(!1)) : y(!1), [
    l,
    {
      refetch: y,
      mutate: v
    }
  ];
}
function l3(t) {
  return jr(t, !1);
}
function It(t) {
  if (Ve === null)
    return t();
  const e = Ve;
  Ve = null;
  try {
    return t();
  } finally {
    Ve = e;
  }
}
function f3(t, e, r) {
  const n = Array.isArray(t);
  let s, i = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let c = 0; c < t.length; c++)
        o[c] = t[c]();
    } else
      o = t();
    if (i) {
      i = !1;
      return;
    }
    const u = It(() => e(o, s, a));
    return s = o, u;
  };
}
function dx(t) {
  Id(() => It(t));
}
function ii(t) {
  return ze === null || (ze.cleanups === null ? ze.cleanups = [t] : ze.cleanups.push(t)), t;
}
function h3() {
  return Ve;
}
function Df() {
  return ze;
}
function px(t, e) {
  const r = ze, n = Ve;
  ze = t, Ve = null;
  try {
    return jr(e, !0);
  } catch (s) {
    tu(s);
  } finally {
    ze = r, Ve = n;
  }
}
function gx(t) {
  const e = Ve, r = ze;
  return Promise.resolve().then(() => {
    Ve = e, ze = r;
    let n;
    return jr(t, !1), Ve = ze = null, n ? n.done : void 0;
  });
}
function d3() {
  return [fx, gx];
}
function p3(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: wx(r),
    defaultValue: t
  };
}
function g3(t) {
  return ze && ze.context && ze.context[t.id] !== void 0 ? ze.context[t.id] : t.defaultValue;
}
function Cd(t) {
  const e = rr(t), r = rr(() => fc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var yx;
function Rd() {
  if (this.sources && this.state)
    if (this.state === Yr)
      bs(this);
    else {
      const t = qt;
      qt = null, jr(() => Io(this), !1), qt = t;
    }
  if (Ve) {
    const t = this.observers ? this.observers.length : 0;
    Ve.sources ? (Ve.sources.push(this), Ve.sourceSlots.push(t)) : (Ve.sources = [this], Ve.sourceSlots = [t]), this.observers ? (this.observers.push(Ve), this.observerSlots.push(Ve.sources.length - 1)) : (this.observers = [Ve], this.observerSlots = [Ve.sources.length - 1]);
  }
  return this.value;
}
function Td(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && jr(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = _a && _a.running;
      a && _a.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? qt.push(i) : Gr.push(i), i.observers && Pd(i)), a || (i.state = Yr);
    }
    if (qt.length > 1e6)
      throw qt = [], new Error();
  }, !1)), e;
}
function bs(t) {
  if (!t.fn)
    return;
  Wo(t);
  const e = ze, r = Ve, n = Ko;
  Ve = ze = t, mx(
    t,
    t.value,
    n
  ), Ve = r, ze = e;
}
function mx(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (s) {
    return t.pure && (t.state = Yr, t.owned && t.owned.forEach(Wo), t.owned = null), t.updatedAt = r + 1, tu(s);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Td(t, n) : t.value = n, t.updatedAt = r);
}
function Ho(t, e, r, n = Yr, s) {
  const i = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: ze,
    context: ze ? ze.context : null,
    pure: r
  };
  return ze === null || ze !== Od && (ze.owned ? ze.owned.push(i) : ze.owned = [i]), i;
}
function Oo(t) {
  if (t.state === 0)
    return;
  if (t.state === Do)
    return Io(t);
  if (t.suspense && It(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Ko); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === Yr)
      bs(t);
    else if (t.state === Do) {
      const n = qt;
      qt = null, jr(() => Io(t, e[0]), !1), qt = n;
    }
}
function jr(t, e) {
  if (qt)
    return t();
  let r = !1;
  e || (qt = []), Gr ? r = !0 : Gr = [], Ko++;
  try {
    const n = t();
    return vx(r), n;
  } catch (n) {
    r || (Gr = null), qt = null, tu(n);
  }
}
function vx(t) {
  if (qt && (Ad(qt), qt = null), t)
    return;
  const e = Gr;
  Gr = null, e.length && jr(() => Dd(e), !1);
}
function Ad(t) {
  for (let e = 0; e < t.length; e++)
    Oo(t[e]);
}
function bx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : Oo(n);
  }
  if (ye.context) {
    if (ye.count) {
      ye.effects || (ye.effects = []), ye.effects.push(...t.slice(0, r));
      return;
    } else
      ye.effects && (t = [...ye.effects, ...t], r += ye.effects.length, delete ye.effects);
    Ms();
  }
  for (e = 0; e < r; e++)
    Oo(t[e]);
}
function Io(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === Yr ? n !== e && (!n.updatedAt || n.updatedAt < Ko) && Oo(n) : s === Do && Io(n, e);
    }
  }
}
function Pd(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = Do, r.pure ? qt.push(r) : Gr.push(r), r.observers && Pd(r));
  }
}
function Wo(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const r = t.sources.pop(), n = t.sourceSlots.pop(), s = r.observers;
      if (s && s.length) {
        const i = s.pop(), a = r.observerSlots.pop();
        n < s.length && (i.sourceSlots[a] = n, s[n] = i, r.observerSlots[n] = a);
      }
    }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--)
      Wo(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Nd(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function tu(t, e = ze) {
  throw Nd(t);
}
function fc(t) {
  if (typeof t == "function" && !t.length)
    return fc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = fc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function wx(t, e) {
  return function(n) {
    let s;
    return Nn(
      () => s = It(() => (ze.context = {
        ...ze.context,
        [t]: n.value
      }, Cd(() => n.children))),
      void 0
    ), s;
  };
}
var hc = Symbol("fallback");
function Co(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function _x(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return ii(() => Co(i)), () => {
    let u = t() || [], c, f;
    return u[xd], It(() => {
      let p = u.length, m, v, E, S, A, w, D, b, x;
      if (p === 0)
        a !== 0 && (Co(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [hc], s[0] = Pn((g) => (i[0] = g, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), f = 0; f < p; f++)
          n[f] = u[f], s[f] = Pn(d);
        a = p;
      } else {
        for (E = new Array(p), S = new Array(p), o && (A = new Array(p)), w = 0, D = Math.min(a, p); w < D && n[w] === u[w]; w++)
          ;
        for (D = a - 1, b = p - 1; D >= w && b >= w && n[D] === u[b]; D--, b--)
          E[b] = s[D], S[b] = i[D], o && (A[b] = o[D]);
        for (m = /* @__PURE__ */ new Map(), v = new Array(b + 1), f = b; f >= w; f--)
          x = u[f], c = m.get(x), v[f] = c === void 0 ? -1 : c, m.set(x, f);
        for (c = w; c <= D; c++)
          x = n[c], f = m.get(x), f !== void 0 && f !== -1 ? (E[f] = s[c], S[f] = i[c], o && (A[f] = o[c]), f = v[f], m.set(x, f)) : i[c]();
        for (f = w; f < p; f++)
          f in E ? (s[f] = E[f], i[f] = S[f], o && (o[f] = A[f], o[f](f))) : s[f] = Pn(d);
        s = s.slice(0, a = p), n = u.slice(0);
      }
      return s;
    });
    function d(p) {
      if (i[f] = p, o) {
        const [m, v] = Ht(f);
        return o[f] = v, e(u[f], m);
      }
      return e(u[f]);
    }
  };
}
function Ex(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, u;
  return ii(() => Co(i)), () => {
    const c = t() || [];
    return c[xd], It(() => {
      if (c.length === 0)
        return o !== 0 && (Co(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [hc], s[0] = Pn((d) => (i[0] = d, r.fallback())), o = 1), s;
      for (n[0] === hc && (i[0](), i = [], n = [], s = [], o = 0), u = 0; u < c.length; u++)
        u < n.length && n[u] !== c[u] ? a[u](() => c[u]) : u >= n.length && (s[u] = Pn(f));
      for (; u < n.length; u++)
        i[u]();
      return o = a.length = i.length = c.length, n = c.slice(0), s = s.slice(0, o);
    });
    function f(d) {
      i[u] = d;
      const [p, m] = Ht(c[u]);
      return a[u] = m, e(p, u);
    }
  };
}
function Sx(t, e) {
  return It(() => t(e || {}));
}
function Ki() {
  return !0;
}
var dc = {
  get(t, e, r) {
    return e === So ? r : t.get(e);
  },
  has(t, e) {
    return e === So ? !0 : t.has(e);
  },
  set: Ki,
  deleteProperty: Ki,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: Ki,
      deleteProperty: Ki
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function Ea(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function xx() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function Dx(...t) {
  let e = !1;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    e = e || !!a && So in a, t[i] = typeof a == "function" ? (e = !0, rr(a)) : a;
  }
  if (e)
    return new Proxy(
      {
        get(i) {
          for (let a = t.length - 1; a >= 0; a--) {
            const o = Ea(t[a])[i];
            if (o !== void 0)
              return o;
          }
        },
        has(i) {
          for (let a = t.length - 1; a >= 0; a--)
            if (i in Ea(t[a]))
              return !0;
          return !1;
        },
        keys() {
          const i = [];
          for (let a = 0; a < t.length; a++)
            i.push(...Object.keys(Ea(t[a])));
          return [...new Set(i)];
        }
      },
      dc
    );
  const r = {}, n = {}, s = /* @__PURE__ */ new Set();
  for (let i = t.length - 1; i >= 0; i--) {
    const a = t[i];
    if (!a)
      continue;
    const o = Object.getOwnPropertyNames(a);
    for (let u = 0, c = o.length; u < c; u++) {
      const f = o[u];
      if (f === "__proto__" || f === "constructor")
        continue;
      const d = Object.getOwnPropertyDescriptor(a, f);
      if (!s.has(f))
        d.get ? (s.add(f), Object.defineProperty(r, f, {
          enumerable: !0,
          configurable: !0,
          get: xx.bind(n[f] = [d.get.bind(a)])
        })) : (d.value !== void 0 && s.add(f), r[f] = d.value);
      else {
        const p = n[f];
        p ? d.get ? p.push(d.get.bind(a)) : d.value !== void 0 && p.push(() => d.value) : r[f] === void 0 && (r[f] = d.value);
      }
    }
  }
  return r;
}
function Ox(t, ...e) {
  if (So in t) {
    const s = new Set(e.length > 1 ? e.flat() : e[0]), i = e.map((a) => new Proxy(
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
      dc
    ));
    return i.push(
      new Proxy(
        {
          get(a) {
            return s.has(a) ? void 0 : t[a];
          },
          has(a) {
            return s.has(a) ? !1 : a in t;
          },
          keys() {
            return Object.keys(t).filter((a) => !s.has(a));
          }
        },
        dc
      )
    ), i;
  }
  const r = {}, n = e.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(t)) {
    const i = Object.getOwnPropertyDescriptor(t, s), a = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = !1, u = 0;
    for (const c of e)
      c.includes(s) && (o = !0, a ? n[u][s] = i.value : Object.defineProperty(n[u], s, i)), ++u;
    o || (a ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
function Ix(t) {
  let e, r;
  const n = (s) => {
    const i = ye.context;
    if (i) {
      const [o, u] = Ht();
      ye.count || (ye.count = 0), ye.count++, (r || (r = t())).then((c) => {
        Ms(i), ye.count--, u(() => c.default), Ms();
      }), e = o;
    } else if (!e) {
      const [o] = hx(() => (r || (r = t())).then((u) => u.default));
      e = o;
    }
    let a;
    return rr(
      () => (a = e()) && It(() => {
        if (!i)
          return a(s);
        const o = ye.context;
        Ms(i);
        const u = a(s);
        return Ms(o), u;
      })
    );
  };
  return n.preload = () => r || ((r = t()).then((s) => e = () => s.default), r), n;
}
var Cx = 0;
function y3() {
  const t = ye.context;
  return t ? `${t.id}${t.count++}` : `cl-${Cx++}`;
}
var Ld = (t) => `Stale read from <${t}>.`;
function m3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(_x(() => t.each, t.children, e || void 0));
}
function v3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(Ex(() => t.each, t.children, e || void 0));
}
function b3(t) {
  const e = t.keyed, r = rr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return rr(
    () => {
      const n = r();
      if (n) {
        const s = t.children;
        return typeof s == "function" && s.length > 0 ? It(
          () => s(
            e ? n : () => {
              if (!It(r))
                throw Ld("Show");
              return t.when;
            }
          )
        ) : s;
      }
      return t.fallback;
    },
    void 0,
    void 0
  );
}
function w3(t) {
  let e = !1;
  const r = (i, a) => i[0] === a[0] && (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Cd(() => t.children), s = rr(
    () => {
      let i = n();
      Array.isArray(i) || (i = [i]);
      for (let a = 0; a < i.length; a++) {
        const o = i[a].when;
        if (o)
          return e = !!i[a].keyed, [a, o, i[a]];
      }
      return [-1];
    },
    void 0,
    {
      equals: r
    }
  );
  return rr(
    () => {
      const [i, a, o] = s();
      if (i < 0)
        return t.fallback;
      const u = o.children;
      return typeof u == "function" && u.length > 0 ? It(
        () => u(
          e ? a : () => {
            if (It(s)[0] !== i)
              throw Ld("Match");
            return o.when;
          }
        )
      ) : u;
    },
    void 0,
    void 0
  );
}
function _3(t) {
  return t;
}
var Rx = [
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
], Tx = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...Rx
]), Ax = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), Px = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Nx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function Lx(t, e) {
  const r = Nx[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var Fx = /* @__PURE__ */ new Set([
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
]), Ux = /* @__PURE__ */ new Set([
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
]), Mx = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function jx(t, e, r) {
  let n = r.length, s = e.length, i = n, a = 0, o = 0, u = e[s - 1].nextSibling, c = null;
  for (; a < s || o < i; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === a) {
      const f = i < n ? o ? r[o - 1].nextSibling : r[i - o] : u;
      for (; o < i; )
        t.insertBefore(r[o++], f);
    } else if (i === o)
      for (; a < s; )
        (!c || !c.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[i - 1] && r[o] === e[s - 1]) {
      const f = e[--s].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--i], f), e[s] = r[i];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < i; )
          c.set(r[d], d++);
      }
      const f = c.get(e[a]);
      if (f != null)
        if (o < f && f < i) {
          let d = a, p = 1, m;
          for (; ++d < s && d < i && !((m = c.get(e[d])) == null || m !== f + p); )
            p++;
          if (p > f - o) {
            const v = e[a];
            for (; o < f; )
              t.insertBefore(r[o++], v);
          } else
            t.replaceChild(r[o++], e[a++]);
        } else
          a++;
      else
        e[a++].remove();
    }
  }
}
var Of = "_$DX_DELEGATE";
function $x(t, e, r, n = {}) {
  let s;
  return Pn((i) => {
    s = i, e === document ? t() : gc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function E3(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => It(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function kx(t, e = window.document) {
  const r = e[Of] || (e[Of] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, Zx));
  }
}
function pc(t, e, r) {
  ye.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function qx(t, e, r, n) {
  ye.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function zx(t, e) {
  ye.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function Bx(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function Vx(t, e, r = {}) {
  const n = Object.keys(e || {}), s = Object.keys(r);
  let i, a;
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i];
    !o || o === "undefined" || e[o] || (If(t, o, !1), delete r[o]);
  }
  for (i = 0, a = n.length; i < a; i++) {
    const o = n[i], u = !!e[o];
    !o || o === "undefined" || r[o] === u || !u || (If(t, o, !0), r[o] = u);
  }
  return r;
}
function Kx(t, e, r) {
  if (!e)
    return r ? pc(t, "style") : e;
  const n = t.style;
  if (typeof e == "string")
    return n.cssText = e;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), e || (e = {});
  let s, i;
  for (i in r)
    e[i] == null && n.removeProperty(i), delete r[i];
  for (i in e)
    s = e[i], s !== r[i] && (n.setProperty(i, s), r[i] = s);
  return r;
}
function Hx(t, e = {}, r, n) {
  const s = {};
  return n || Nn(
    () => s.children = fs(t, e.children, s.children)
  ), Nn(() => e.ref && e.ref(t)), Nn(() => Wx(t, e, r, !0, s, !0)), s;
}
function S3(t, e, r) {
  return It(() => t(e, r));
}
function gc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return fs(t, e, n, r);
  Nn((s) => fs(t, e(), s, r), n);
}
function Wx(t, e, r, n, s = {}, i = !1) {
  e || (e = {});
  for (const a in s)
    if (!(a in e)) {
      if (a === "children")
        continue;
      s[a] = Cf(t, a, null, s[a], r, i);
    }
  for (const a in e) {
    if (a === "children") {
      n || fs(t, e.children);
      continue;
    }
    const o = e[a];
    s[a] = Cf(t, a, o, s[a], r, i);
  }
}
function Gx(t) {
  let e, r;
  return !ye.context || !(e = ye.registry.get(r = Yx())) ? t() : (ye.completed && ye.completed.add(e), ye.registry.delete(r), e);
}
function Qx(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function If(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    t.classList.toggle(n[s], r);
}
function Cf(t, e, r, n, s, i) {
  let a, o, u, c, f;
  if (e === "style")
    return Kx(t, r, n);
  if (e === "classList")
    return Vx(t, r, n);
  if (r === n)
    return n;
  if (e === "ref")
    i || r(t);
  else if (e.slice(0, 3) === "on:") {
    const d = e.slice(3);
    n && t.removeEventListener(d, n), r && t.addEventListener(d, r);
  } else if (e.slice(0, 10) === "oncapture:") {
    const d = e.slice(10);
    n && t.removeEventListener(d, n, !0), r && t.addEventListener(d, r, !0);
  } else if (e.slice(0, 2) === "on") {
    const d = e.slice(2).toLowerCase(), p = Fx.has(d);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(d, m);
    }
    (p || r) && (Bx(t, d, r, p), p && kx([d]));
  } else if (e.slice(0, 5) === "attr:")
    pc(t, e.slice(5), r);
  else if ((f = e.slice(0, 5) === "prop:") || (u = Ax.has(e)) || !s && ((c = Lx(e, t.tagName)) || (o = Tx.has(e))) || (a = t.nodeName.includes("-"))) {
    if (f)
      e = e.slice(5), o = !0;
    else if (ye.context)
      return r;
    e === "class" || e === "className" ? zx(t, r) : a && !o && !u ? t[Qx(e)] = r : t[c || e] = r;
  } else {
    const d = s && e.indexOf(":") > -1 && Mx[e.split(":")[0]];
    d ? qx(t, d, e, r) : pc(t, Px[e] || e, r);
  }
  return r;
}
function Zx(t) {
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
  }), ye.registry && !ye.done && (ye.done = _$HY.done = !0); r; ) {
    const n = r[e];
    if (n && !r.disabled) {
      const s = r[`${e}Data`];
      if (s !== void 0 ? n.call(r, s, t) : n.call(r, t), t.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function fs(t, e, r, n, s) {
  if (ye.context) {
    !r && (r = [...t.childNodes]);
    let o = [];
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      c.nodeType === 8 && c.data.slice(0, 2) === "!$" ? c.remove() : o.push(c);
    }
    r = o;
  }
  for (; typeof r == "function"; )
    r = r();
  if (e === r)
    return r;
  const i = typeof e, a = n !== void 0;
  if (t = a && r[0] && r[0].parentNode || t, i === "string" || i === "number") {
    if (ye.context)
      return r;
    if (i === "number" && (e = e.toString()), a) {
      let o = r[0];
      o && o.nodeType === 3 ? o.data = e : o = document.createTextNode(e), r = Vn(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (ye.context)
      return r;
    r = Vn(t, r, n);
  } else {
    if (i === "function")
      return Nn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = fs(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], u = r && Array.isArray(r);
      if (yc(o, e, r, s))
        return Nn(() => r = fs(t, o, r, n, !0)), () => r;
      if (ye.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let c = o[0], f = [c];
        for (; (c = c.nextSibling) !== n; )
          f.push(c);
        return r = f;
      }
      if (o.length === 0) {
        if (r = Vn(t, r, n), a)
          return r;
      } else
        u ? r.length === 0 ? Rf(t, o, n) : jx(t, r, o) : (r && Vn(t), Rf(t, o));
      r = o;
    } else if (e.nodeType) {
      if (ye.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = Vn(t, r, n, e);
        Vn(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function yc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], u = r && r[i], c;
    if (!(o == null || o === !0 || o === !1))
      if ((c = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = yc(t, o, u) || s;
      else if (c === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = yc(
            t,
            Array.isArray(o) ? o : [o],
            Array.isArray(u) ? u : [u]
          ) || s;
        } else
          t.push(o), s = !0;
      else {
        const f = String(o);
        u && u.nodeType === 3 && u.data === f ? t.push(u) : t.push(document.createTextNode(f));
      }
  }
  return s;
}
function Rf(t, e, r = null) {
  for (let n = 0, s = e.length; n < s; n++)
    t.insertBefore(e[n], r);
}
function Vn(t, e, r, n) {
  if (r === void 0)
    return t.textContent = "";
  const s = n || document.createTextNode("");
  if (e.length) {
    let i = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (s !== o) {
        const u = o.parentNode === t;
        !i && !a ? u ? t.replaceChild(s, o) : t.insertBefore(s, r) : u && o.remove();
      } else
        i = !0;
    }
  } else
    t.insertBefore(s, r);
  return [s];
}
function Yx() {
  const t = ye.context;
  return `${t.id}${t.count++}`;
}
var Jx = "http://www.w3.org/2000/svg";
function Fd(t, e = !1) {
  return e ? document.createElementNS(Jx, t) : document.createElement(t);
}
function x3(t) {
  const { useShadow: e } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Df();
  let i, a = !!ye.context;
  return Id(
    () => {
      a && (Df().user = a = !1), i || (i = px(s, () => rr(() => t.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [u, c] = Ht(!1), f = () => c(!0);
        Pn((d) => gc(o, () => u() ? d() : i(), null)), ii(f);
      } else {
        const u = Fd(t.isSVG ? "g" : "div", t.isSVG), c = e && u.attachShadow ? u.attachShadow({
          mode: "open"
        }) : u;
        Object.defineProperty(u, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), gc(c, i), o.appendChild(u), t.ref && t.ref(u), ii(() => o.removeChild(u));
      }
    },
    void 0,
    {
      render: !a
    }
  ), r;
}
function D3(t) {
  const [e, r] = Ox(t, ["component"]), n = rr(() => e.component);
  return rr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return It(() => s(r));
      case "string":
        const i = Ux.has(s), a = ye.context ? Gx() : Fd(s, i);
        return Hx(a, r, i), a;
    }
  });
}
var Xx = (
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
), Ud = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new Xx();
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
), eD = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
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
}(), tD = (
  /** @class */
  function(t) {
    eD(e, t);
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
  }(Ud)
), rD = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
};
function nD(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function sD(t, e) {
  var r = nD(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function hs(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = rD(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function no(t, e) {
  return t.indexOf(e) !== -1;
}
function Tf(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var iD = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return sD(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), oD = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, Md = function(t) {
  return typeof t > "u";
}, aD = function(t) {
  return t === null;
}, oi = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, mc = function(t) {
  return oi(t) && Object.keys(t).length === 0;
}, dn = function(t) {
  return Array.isArray(t);
}, cD = function(t) {
  return typeof t == "string";
}, uD = function(t) {
  return typeof t == "number" && !isNaN(t);
}, lD = function(t) {
  return typeof t == "boolean";
}, fD = function(t) {
  return t instanceof RegExp;
}, ai = function(t) {
  return t instanceof Map;
}, ci = function(t) {
  return t instanceof Set;
}, jd = function(t) {
  return oD(t) === "Symbol";
}, hD = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, dD = function(t) {
  return t instanceof Error;
}, Af = function(t) {
  return typeof t == "number" && isNaN(t);
}, Pf = function(t) {
  return lD(t) || aD(t) || Md(t) || uD(t) || cD(t) || jd(t);
}, pD = function(t) {
  return typeof t == "bigint";
}, gD = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, yD = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, mD = function(t) {
  return t instanceof URL;
}, $d = function(t) {
  return t.replace(/\./g, "\\.");
}, Sa = function(t) {
  return t.map(String).map($d).join(".");
}, qs = function(t) {
  for (var e = [], r = "", n = 0; n < t.length; n++) {
    var s = t.charAt(n), i = s === "\\" && t.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var a = s === ".";
    if (a) {
      e.push(r), r = "";
      continue;
    }
    r += s;
  }
  var o = r;
  return e.push(o), e;
}, vc = function() {
  return vc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, vc.apply(this, arguments);
}, bc = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, wc = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Lr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var kd = [
  Lr(Md, "undefined", function() {
    return null;
  }, function() {
  }),
  Lr(pD, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Lr(hD, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Lr(dD, "Error", function(t, e) {
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
  Lr(fD, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Lr(
    ci,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return wc([], bc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Lr(ai, "map", function(t) {
    return wc([], bc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Lr(function(t) {
    return Af(t) || gD(t);
  }, "number", function(t) {
    return Af(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Lr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Lr(mD, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function Go(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var qd = Go(function(t, e) {
  if (jd(t)) {
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
}), vD = [
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
}, {}), zd = Go(yD, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return wc([], bc(t));
}, function(t, e) {
  var r = vD[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function Bd(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Vd = Go(Bd, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return vc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), Kd = Go(function(t, e) {
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
}), bD = [Vd, qd, Kd, zd], Nf = function(t, e) {
  var r = Tf(bD, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Tf(kd, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Hd = {};
kd.forEach(function(t) {
  Hd[t.annotation] = t;
});
var wD = function(t, e, r) {
  if (dn(e))
    switch (e[0]) {
      case "symbol":
        return qd.untransform(t, e, r);
      case "class":
        return Vd.untransform(t, e, r);
      case "custom":
        return Kd.untransform(t, e, r);
      case "typed-array":
        return zd.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Hd[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, Zn = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Wd(t) {
  if (no(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (no(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (no(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var _D = function(t, e) {
  Wd(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (ci(t))
      t = Zn(t, +n);
    else if (ai(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", a = Zn(t, s);
      switch (i) {
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
}, _c = function(t, e, r) {
  if (Wd(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (dn(n)) {
      var a = +i;
      n = n[a];
    } else if (oi(n))
      n = n[i];
    else if (ci(n)) {
      var o = +i;
      n = Zn(n, o);
    } else if (ai(n)) {
      var u = s === e.length - 2;
      if (u)
        break;
      var o = +i, c = +e[++s] == 0 ? "key" : "value", f = Zn(n, o);
      switch (c) {
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
  if (dn(n) ? n[+d] = r(n[+d]) : oi(n) && (n[d] = r(n[d])), ci(n)) {
    var p = Zn(n, +d), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (ai(n)) {
    var o = +e[e.length - 2], v = Zn(n, o), c = +d == 0 ? "key" : "value";
    switch (c) {
      case "key": {
        var E = r(v);
        n.set(E, n.get(v)), E !== v && n.delete(v);
        break;
      }
      case "value": {
        n.set(v, r(n.get(v)));
        break;
      }
    }
  }
  return t;
}, Hr = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, cn = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Ec(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!dn(t)) {
      hs(t, function(a, o) {
        return Ec(a, e, cn(cn([], Hr(r)), Hr(qs(o))));
      });
      return;
    }
    var n = Hr(t, 2), s = n[0], i = n[1];
    i && hs(i, function(a, o) {
      Ec(a, e, cn(cn([], Hr(r)), Hr(qs(o))));
    }), e(s, r);
  }
}
function ED(t, e, r) {
  return Ec(e, function(n, s) {
    t = _c(t, s, function(i) {
      return wD(i, n, r);
    });
  }), t;
}
function SD(t, e) {
  function r(a, o) {
    var u = _D(t, qs(o));
    a.map(qs).forEach(function(c) {
      t = _c(t, c, function() {
        return u;
      });
    });
  }
  if (dn(e)) {
    var n = Hr(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = _c(t, qs(a), function() {
        return t;
      });
    }), i && hs(i, r);
  } else
    hs(e, r);
  return t;
}
var xD = function(t, e) {
  return oi(t) || dn(t) || ai(t) || ci(t) || Bd(t, e);
};
function DD(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function OD(t) {
  var e = {}, r = void 0;
  return t.forEach(function(n) {
    if (!(n.length <= 1)) {
      var s = Hr(n.map(function(o) {
        return o.map(String);
      }).sort(function(o, u) {
        return o.length - u.length;
      })), i = s[0], a = s.slice(1);
      i.length === 0 ? r = a.map(Sa) : e[Sa(i)] = a.map(Sa);
    }
  }), r ? mc(e) ? [r] : [r, e] : mc(e) ? void 0 : e;
}
var Gd = function(t, e, r, n, s) {
  var i;
  if (n === void 0 && (n = []), s === void 0 && (s = []), Pf(t) || DD(t, n, e), !xD(t, r)) {
    var a = Nf(t, r);
    return a ? {
      transformedValue: a.value,
      annotations: [a.type]
    } : {
      transformedValue: t
    };
  }
  if (no(s, t))
    return {
      transformedValue: null
    };
  var o = Nf(t, r), u = (i = o == null ? void 0 : o.value) !== null && i !== void 0 ? i : t;
  Pf(t) || (s = cn(cn([], Hr(s)), [t]));
  var c = dn(u) ? [] : {}, f = {};
  return hs(u, function(d, p) {
    var m = Gd(d, e, r, cn(cn([], Hr(n)), [p]), s);
    c[p] = m.transformedValue, dn(m.annotations) ? f[p] = m.annotations : oi(m.annotations) && hs(m.annotations, function(v, E) {
      f[$d(p) + "." + E] = v;
    });
  }), mc(f) ? {
    transformedValue: c,
    annotations: o ? [o.type] : void 0
  } : {
    transformedValue: c,
    annotations: o ? [o.type, f] : f
  };
};
function Qd(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function ID(t) {
  if (Qd(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Lf(t) {
  return Qd(t) === "Array";
}
function CD(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Sc(t, e = {}) {
  if (Lf(t))
    return t.map((s) => Sc(s, e));
  if (!ID(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Lf(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = Sc(a, e);
    return CD(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var In = function() {
  return In = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, In.apply(this, arguments);
}, RD = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, TD = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Zd = (
  /** @class */
  function() {
    function t() {
      this.classRegistry = new tD(), this.symbolRegistry = new Ud(function(e) {
        var r;
        return (r = e.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new iD(), this.allowedErrorProps = [];
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Gd(e, r, this), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = In(In({}, s.meta), { values: n.annotations }));
      var i = OD(r);
      return i && (s.meta = In(In({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = Sc(r);
      return n != null && n.values && (s = ED(s, n.values, this)), n != null && n.referentialEqualities && (s = SD(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(In({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, TD([], RD(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), AD = Zd.serialize, O3 = Zd.stringify;
function I3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function C3(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function R3({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function T3({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function A3(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var P3 = (t, e = !1) => {
  const {
    json: r
  } = AD(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, Hi = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, PD = (t, e) => t.queryHash.localeCompare(e.queryHash), Yd = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, ND = (t, e) => Hi(t) === Hi(e) ? Yd(t, e) : Hi(t) > Hi(e) ? 1 : -1, N3 = {
  status: ND,
  "query hash": PD,
  "last updated": Yd
}, Wi = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, Jd = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, LD = (t, e) => Wi(t) === Wi(e) ? Jd(t, e) : Wi(t) > Wi(e) ? 1 : -1, L3 = {
  status: LD,
  "last updated": Jd
}, F3 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), U3 = () => {
  const [t, e] = Ht("dark");
  return dx(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (s) => {
      e(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), ii(() => r.removeEventListener("change", n));
  }), t;
}, Gi = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [s, ...i] = e;
    return n.set(s, Gi(n.get(s), i, r)), n;
  }
  if (t instanceof Set) {
    const n = Gi(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Gi(n[s], i, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Gi(n[s], i, r), n;
  }
  return t;
}, Qi = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...s] = e;
    return r.set(n, Qi(r.get(n), s)), r;
  }
  if (t instanceof Set) {
    const r = Qi(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((i, a) => a.toString() !== e[0]);
    const [n, ...s] = e;
    return r[n] = Qi(r[n], s), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...s] = e;
    return r[n] = Qi(r[n], s), r;
  }
  return t;
}, FD = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, ts, ui, li, fi, Tn, hi, rs, ns, ss, is, os, di, Ff, UD = (Ff = class {
  constructor(t) {
    ir(this, ts, void 0);
    ir(this, ui, void 0);
    ir(this, li, void 0);
    ir(this, fi, void 0);
    ir(this, Tn, !1);
    ir(this, hi, void 0);
    ir(this, rs, void 0);
    ir(this, ns, void 0);
    ir(this, ss, void 0);
    ir(this, is, void 0);
    ir(this, os, void 0);
    ir(this, di, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: s,
      buttonPosition: i,
      position: a,
      initialIsOpen: o,
      errorTypes: u,
      styleNonce: c
    } = t;
    Yt(this, ts, Ht(e)), Yt(this, li, r), Yt(this, fi, n), Yt(this, ui, s), Yt(this, hi, c), Yt(this, rs, Ht(i)), Yt(this, ns, Ht(a)), Yt(this, ss, Ht(o)), Yt(this, is, Ht(u));
  }
  setButtonPosition(t) {
    vt(this, rs)[1](t);
  }
  setPosition(t) {
    vt(this, ns)[1](t);
  }
  setInitialIsOpen(t) {
    vt(this, ss)[1](t);
  }
  setErrorTypes(t) {
    vt(this, is)[1](t);
  }
  setClient(t) {
    vt(this, ts)[1](t);
  }
  mount(t) {
    if (vt(this, Tn))
      throw new Error("Devtools is already mounted");
    const e = $x(() => {
      const [r] = vt(this, rs), [n] = vt(this, ns), [s] = vt(this, ss), [i] = vt(this, is), [a] = vt(this, ts);
      let o;
      vt(this, os) ? o = vt(this, os) : (o = Ix(() => import("./N66J3ZXT-uAMzoOX5.js")), Yt(this, os, o)), FD(vt(this, hi));
      const u = this;
      return Sx(o, Dx({
        get queryFlavor() {
          return vt(u, li);
        },
        get version() {
          return vt(u, fi);
        },
        get onlineManager() {
          return vt(u, ui);
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
          return s();
        },
        get errorTypes() {
          return i();
        }
      }));
    }, t);
    Yt(this, Tn, !0), Yt(this, di, e);
  }
  unmount() {
    var t;
    if (!vt(this, Tn))
      throw new Error("Devtools is not mounted");
    (t = vt(this, di)) == null || t.call(this), Yt(this, Tn, !1);
  }
}, ts = new WeakMap(), ui = new WeakMap(), li = new WeakMap(), fi = new WeakMap(), Tn = new WeakMap(), hi = new WeakMap(), rs = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), os = new WeakMap(), di = new WeakMap(), Ff);
function MD(t) {
  const e = wd(), r = t.client || e, n = Rp(null), { buttonPosition: s, position: i, initialIsOpen: a, errorTypes: o, styleNonce: u } = t, [c] = js(
    new UD({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: si,
      buttonPosition: s,
      position: i,
      initialIsOpen: a,
      errorTypes: o,
      styleNonce: u
    })
  );
  return At(() => {
    c.setClient(r);
  }, [r, c]), At(() => {
    s && c.setButtonPosition(s);
  }, [s, c]), At(() => {
    i && c.setPosition(i);
  }, [i, c]), At(() => {
    c.setInitialIsOpen(a || !1);
  }, [a, c]), At(() => {
    c.setErrorTypes(o || []);
  }, [o, c]), At(() => (n.current && c.mount(n.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ pn.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var jD = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : MD;
const $D = new FS(), M3 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (At(() => {
  Y1({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), gi.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Ef.jsxs(qS, { client: $D, children: [
  i && /* @__PURE__ */ Ef.jsx(jD, { initialIsOpen: !1 }),
  s
] }));
export {
  So as $,
  P3 as A,
  l3 as B,
  ii as C,
  xd as D,
  h3 as E,
  m3 as F,
  y3 as G,
  p3 as H,
  g3 as I,
  v3 as J,
  Gi as K,
  E3 as L,
  S3 as M,
  F3 as N,
  C3 as O,
  I3 as P,
  It as Q,
  Mp as R,
  b3 as S,
  Uf as T,
  Pn as U,
  Ox as V,
  x3 as W,
  Bx as X,
  O3 as Y,
  _3 as Z,
  w3 as _,
  $t as a,
  KO as a$,
  Qi as a0,
  d3 as a1,
  D3 as a2,
  Cd as a3,
  Sf as a4,
  Xl as a5,
  Xa as a6,
  Ja as a7,
  tc as a8,
  ec as a9,
  EO as aA,
  RO as aB,
  SO as aC,
  AO as aD,
  xO as aE,
  DO as aF,
  LO as aG,
  NO as aH,
  OO as aI,
  CO as aJ,
  IO as aK,
  PO as aL,
  Wc as aM,
  qo as aN,
  Gc as aO,
  Q1 as aP,
  Z1 as aQ,
  cO as aR,
  cc as aS,
  MO as aT,
  jO as aU,
  $O as aV,
  kO as aW,
  qO as aX,
  zO as aY,
  BO as aZ,
  VO as a_,
  Qc as aa,
  XE as ab,
  YE as ac,
  JE as ad,
  eS as ae,
  tS as af,
  ZE as ag,
  uO as ah,
  mO as ai,
  yO as aj,
  dO as ak,
  vO as al,
  fO as am,
  hO as an,
  pO as ao,
  gO as ap,
  lO as aq,
  bO as ar,
  cs as as,
  Y1 as at,
  tt as au,
  wO as av,
  _O as aw,
  UO as ax,
  FO as ay,
  TO as az,
  N3 as b,
  HO as b0,
  WO as b1,
  GO as b2,
  QO as b3,
  cd as b4,
  Di as b5,
  rS as b6,
  ud as b7,
  Ir as b8,
  c3 as b9,
  ZO as ba,
  YO as bb,
  JO as bc,
  XO as bd,
  e3 as be,
  t3 as bf,
  r3 as bg,
  n3 as bh,
  s3 as bi,
  i3 as bj,
  o3 as bk,
  a3 as bl,
  $D as bm,
  M3 as bn,
  Ht as c,
  kx as d,
  rr as e,
  Sx as f,
  U3 as g,
  Id as h,
  dx as i,
  gc as j,
  Nn as k,
  zx as l,
  L3 as m,
  Eu as n,
  BD as o,
  _r as p,
  f3 as q,
  pc as r,
  Yo as s,
  zD as t,
  R3 as u,
  T3 as v,
  Hx as w,
  Dx as x,
  as as y,
  A3 as z
};
