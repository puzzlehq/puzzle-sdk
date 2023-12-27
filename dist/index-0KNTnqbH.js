var hu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var bt = (t, e, r) => (hu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ir = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Yt = (t, e, r, n) => (hu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as Wt from "react";
import dn, { useEffect as At, useState as js, useRef as Cp } from "react";
const Rp = Symbol(), du = Object.getPrototypeOf, xa = /* @__PURE__ */ new WeakMap(), Tp = (t) => t && (xa.has(t) ? xa.get(t) : du(t) === Object.prototype || du(t) === Array.prototype), Ap = (t) => Tp(t) && t[Rp] || null, pu = (t, e = !0) => {
  xa.set(t, e);
};
var so = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Zo = (t) => typeof t == "object" && t !== null, rn = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakSet(), Pp = (t = Object.is, e = (c, f) => new Proxy(c, f), r = (c) => Zo(c) && !Ui.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), n = (c) => {
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
    if (Ui.has(E))
      pu(E, !1);
    else if (E instanceof Promise)
      delete S.value, S.get = () => d(E);
    else if (rn.has(E)) {
      const [A, w] = rn.get(
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
    d !== T && (d = T, p.forEach((U) => U(C, T)));
  };
  let v = o[1];
  const E = (C = ++o[1]) => (v !== C && !p.size && (v = C, A.forEach(([T]) => {
    const U = T[1](C);
    U > d && (d = U);
  })), d), S = (C) => (T, U) => {
    const B = [...T];
    B[1] = [C, ...B[1]], m(B, U);
  }, A = /* @__PURE__ */ new Map(), w = (C, T) => {
    if ((so ? "production" : void 0) !== "production" && A.has(C))
      throw new Error("prop listener already exists");
    if (p.size) {
      const U = T[3](S(C));
      A.set(C, [T, U]);
    } else
      A.set(C, [T]);
  }, O = (C) => {
    var T;
    const U = A.get(C);
    U && (A.delete(C), (T = U[1]) == null || T.call(U));
  }, b = (C) => (p.add(C), p.size === 1 && A.forEach(([U, B], G) => {
    if ((so ? "production" : void 0) !== "production" && B)
      throw new Error("remove already exists");
    const R = U[3](S(G));
    A.set(G, [U, R]);
  }), () => {
    p.delete(C), p.size === 0 && A.forEach(([U, B], G) => {
      B && (B(), A.set(G, [U]));
    });
  }), x = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), l = e(x, {
    deleteProperty(C, T) {
      const U = Reflect.get(C, T);
      O(T);
      const B = Reflect.deleteProperty(C, T);
      return B && m(["delete", [T], U]), B;
    },
    set(C, T, U, B) {
      const G = Reflect.has(C, T), R = Reflect.get(C, T, B);
      if (G && (t(R, U) || a.has(U) && t(R, a.get(U))))
        return !0;
      O(T), Zo(U) && (U = Ap(U) || U);
      let L = U;
      if (U instanceof Promise)
        U.then((Q) => {
          U.status = "fulfilled", U.value = Q, m(["resolve", [T], Q]);
        }).catch((Q) => {
          U.status = "rejected", U.reason = Q, m(["reject", [T], Q]);
        });
      else {
        !rn.has(U) && r(U) && (L = u(U));
        const Q = !Ui.has(L) && rn.get(L);
        Q && w(T, Q);
      }
      return Reflect.set(C, T, L, B), m(["set", [T], U, R]), !0;
    }
  });
  a.set(c, l);
  const y = [
    x,
    E,
    i,
    b
  ];
  return rn.set(l, y), Reflect.ownKeys(c).forEach((C) => {
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
  rn,
  Ui,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [Np] = Pp();
function pn(t = {}) {
  return Np(t);
}
function Mn(t, e, r) {
  const n = rn.get(t);
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
function Lp(t, e) {
  const r = rn.get(t);
  (so ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const St = pn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Mf = { state: St, subscribe(t) {
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
  const e = (t = Mf.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Fp = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ft = pn({ enabled: Fp, userSessionId: "", events: [], connectedWalletId: void 0 }), Mp = { state: Ft, subscribe(t) {
  return Mn(Ft.events, () => t(Lp(Ft.events[Ft.events.length - 1])));
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
} }, Rr = pn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), wr = { state: Rr, subscribe(t) {
  return Mn(Rr, () => t(Rr));
}, setChains(t) {
  Rr.chains = t;
}, setWalletConnectUri(t) {
  Rr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Rr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Rr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Rr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Rr.isUiLoaded = t;
}, setIsAuth(t) {
  Rr.isAuth = t;
} }, ji = pn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), as = { state: ji, subscribe(t) {
  return Mn(ji, () => t(ji));
}, setConfig(t) {
  var e, r;
  Mp.initialize(), wr.setChains(t.chains), wr.setIsAuth(!!t.enableAuthMode), wr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), wr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), $t.setModalVersionInStorage(), Object.assign(ji, t);
} };
var Up = Object.defineProperty, gu = Object.getOwnPropertySymbols, jp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, yu = (t, e, r) => e in t ? Up(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kp = (t, e) => {
  for (var r in e || (e = {}))
    jp.call(e, r) && yu(t, r, e[r]);
  if (gu)
    for (var r of gu(e))
      $p.call(e, r) && yu(t, r, e[r]);
  return t;
};
const Oa = "https://explorer-api.walletconnect.com", Da = "wcm", Ia = "js-2.6.2";
async function $i(t, e) {
  const r = kp({ sdkType: Da, sdkVersion: Ia }, e), n = new URL(t, Oa);
  return n.searchParams.append("projectId", as.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const vn = { async getDesktopListings(t) {
  return $i("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return $i("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return $i("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return $i("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Oa}/w3m/v1/getWalletImage/${t}?projectId=${as.state.projectId}&sdkType=${Da}&sdkVersion=${Ia}`;
}, getAssetImageUrl(t) {
  return `${Oa}/w3m/v1/getAssetImage/${t}?projectId=${as.state.projectId}&sdkType=${Da}&sdkVersion=${Ia}`;
} };
var qp = Object.defineProperty, mu = Object.getOwnPropertySymbols, Bp = Object.prototype.hasOwnProperty, zp = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? qp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vp = (t, e) => {
  for (var r in e || (e = {}))
    Bp.call(e, r) && vu(t, r, e[r]);
  if (mu)
    for (var r of mu(e))
      zp.call(e, r) && vu(t, r, e[r]);
  return t;
};
const bu = $t.isMobile(), Tr = pn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), kO = { state: Tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = as.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Tr.recomendedWallets;
  if ($t.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await vn.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), u = t.indexOf(a.id);
      return o - u;
    }), Tr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = wr.state, s = r == null ? void 0 : r.join(","), i = $t.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: $t.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = bu ? await vn.getMobileListings(a) : await vn.getDesktopListings(a);
    Tr.recomendedWallets = Object.values(o);
  }
  return Tr.recomendedWallets;
}, async getWallets(t) {
  const e = Vp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = as.state, { recomendedWallets: s } = Tr;
  if (n === "ALL")
    return Tr.wallets;
  s.length ? e.excludedIds = s.map((d) => d.id).join(",") : $t.isArray(r) && (e.excludedIds = r.join(",")), $t.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), wr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: u } = bu ? await vn.getMobileListings(e) : await vn.getDesktopListings(e), c = Object.values(o), f = a ? "search" : "wallets";
  return Tr[f] = { listings: [...Tr[f].listings, ...c], total: u, page: i ?? 1 }, { listings: c, total: u };
}, getWalletImageUrl(t) {
  return vn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return vn.getAssetImageUrl(t);
}, resetSearch() {
  Tr.search = { listings: [], total: 0, page: 1 };
} }, Bn = pn({ open: !1 }), Yo = { state: Bn, subscribe(t) {
  return Mn(Bn, () => t(Bn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = wr.state;
    if ($t.removeWalletConnectDeepLink(), wr.setWalletConnectUri(t == null ? void 0 : t.uri), wr.setChains(t == null ? void 0 : t.chains), Mf.reset("ConnectWallet"), r && n)
      Bn.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = wr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), Bn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Bn.open = !1;
} };
var Kp = Object.defineProperty, wu = Object.getOwnPropertySymbols, Hp = Object.prototype.hasOwnProperty, Wp = Object.prototype.propertyIsEnumerable, _u = (t, e, r) => e in t ? Kp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gp = (t, e) => {
  for (var r in e || (e = {}))
    Hp.call(e, r) && _u(t, r, e[r]);
  if (wu)
    for (var r of wu(e))
      Wp.call(e, r) && _u(t, r, e[r]);
  return t;
};
function Qp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Es = pn({ themeMode: Qp() ? "dark" : "light" }), Eu = { state: Es, subscribe(t) {
  return Mn(Es, () => t(Es));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Es.themeMode = e), r && (Es.themeVariables = Gp({}, r));
} }, bn = pn({ open: !1, message: "", variant: "success" }), qO = { state: bn, subscribe(t) {
  return Mn(bn, () => t(bn));
}, openToast(t, e) {
  bn.open = !0, bn.message = t, bn.variant = e;
}, closeToast() {
  bn.open = !1;
} };
let Zp = class {
  constructor(e) {
    this.openModal = Yo.open, this.closeModal = Yo.close, this.subscribeModal = Yo.subscribe, this.setTheme = Eu.setThemeConfig, Eu.setThemeConfig(e), as.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-ep1DuP4Y.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), wr.setIsUiLoaded(!0);
    }
  }
};
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
function Yp(t) {
  console && console.warn && console.warn(t);
}
var Uf = Number.isNaN || function(e) {
  return e !== e;
};
function Ke() {
  Ke.init.call(this);
}
xc.exports = Ke;
xc.exports.once = tg;
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
    if (typeof t != "number" || t < 0 || Uf(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    xu = t;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Uf(e))
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
    for (var c = u.length, f = zf(u, c), n = 0; n < c; ++n)
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
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, Yp(o);
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
function Jp() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function kf(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Jp.bind(n);
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
    i === 0 ? n.shift() : Xp(n, i), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, o || r);
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
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? eg(s) : zf(s, s.length);
}
Ke.prototype.listeners = function(e) {
  return qf(this, e, !0);
};
Ke.prototype.rawListeners = function(e) {
  return qf(this, e, !1);
};
Ke.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Bf.call(t, e);
};
Ke.prototype.listenerCount = Bf;
function Bf(t) {
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
function zf(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Xp(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function eg(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function tg(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Vf(t, e, i, { once: !0 }), e !== "error" && rg(t, s, { once: !0 });
  });
}
function rg(t, e, r) {
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
var pr = xc.exports;
const gi = /* @__PURE__ */ pi(pr), ng = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, sg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, ig = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function og(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    ag(t);
    return;
  }
  return e;
}
function ag(t) {
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
  if (!ig.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (ng.test(t) || sg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, og);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function cg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function xt(t, ...e) {
  try {
    return cg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function ug(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function lg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Yi(t) {
  if (ug(t))
    return String(t);
  if (lg(t) || Array.isArray(t))
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
function fg(t) {
  if (typeof t == "string")
    return t;
  Kf();
  const e = Buffer.from(t).toString("base64");
  return Ca + e;
}
function hg(t) {
  return typeof t != "string" || !t.startsWith(Ca) ? t : (Kf(), Buffer.from(t.slice(Ca.length), "base64"));
}
function Xt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function dg(...t) {
  return Xt(t.join(":"));
}
function qi(t) {
  return t = Xt(t), t ? t + ":" : "";
}
const pg = "memory", gg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: pg,
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
function yg(t = {}) {
  const e = {
    mounts: { "": t.driver || gg() },
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
        e.unwatch[c] = await Ou(
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
      const E = typeof v == "string", S = Xt(E ? v : v.key), A = E ? void 0 : v.value, w = E || !v.options ? f : { ...f, ...v.options }, O = r(S);
      m(O).items.push({
        key: S,
        value: A,
        relativeKey: O.relativeKey,
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
          key: dg(d.base, m.key),
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
        (m) => hg(m)
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
        await xt(m.setItem, p, fg(f), d);
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
        Object.values(e.mounts).map((c) => Du(c))
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
      return c && (e.mountpoints.push(c), e.mountpoints.sort((d, p) => p.length - d.length)), e.mounts[c] = f, e.watching && Promise.resolve(Ou(f, s, c)).then((d) => {
        e.unwatch[c] = d;
      }).catch(console.error), u;
    },
    async unmount(c, f = !0) {
      c = qi(c), !(!c || !e.mounts[c]) && (e.watching && c in e.unwatch && (e.unwatch[c](), delete e.unwatch[c]), f && await Du(e.mounts[c]), e.mountpoints = e.mountpoints.filter((d) => d !== c), delete e.mounts[c]);
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
function Ou(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Du(t) {
  typeof t.dispose == "function" && await xt(t.dispose);
}
function Un(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Hf(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = Un(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let Jo;
function yi() {
  return Jo || (Jo = Hf("keyval-store", "keyval")), Jo;
}
function Iu(t, e = yi()) {
  return e("readonly", (r) => Un(r.get(t)));
}
function mg(t, e, r = yi()) {
  return r("readwrite", (n) => (n.put(e, t), Un(n.transaction)));
}
function vg(t, e = yi()) {
  return e("readwrite", (r) => (r.delete(t), Un(r.transaction)));
}
function bg(t = yi()) {
  return t("readwrite", (e) => (e.clear(), Un(e.transaction)));
}
function wg(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Un(t.transaction);
}
function _g(t = yi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Un(e.getAllKeys());
    const r = [];
    return wg(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Eg = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Sg = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Ao(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Sg(t);
  } catch {
    return t;
  }
}
function mi(t) {
  return typeof t == "string" ? t : Eg(t) || "";
}
const xg = "idb-keyval";
var Og = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Hf(t.dbName, t.storeName)), { name: xg, options: t, async hasItem(s) {
    return !(typeof await Iu(r(s), n) > "u");
  }, async getItem(s) {
    return await Iu(r(s), n) ?? null;
  }, setItem(s, i) {
    return mg(r(s), i, n);
  }, removeItem(s) {
    return vg(r(s), n);
  }, getKeys() {
    return _g(n);
  }, clear() {
    return bg(n);
  } };
};
const Dg = "WALLET_CONNECT_V2_INDEXED_DB", Ig = "keyvaluestorage";
let Cg = class {
  constructor() {
    this.indexedDb = yg({ driver: Og({ dbName: Dg, storeName: Ig }) });
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
function Rg(t) {
  var e;
  return [t[0], Ao((e = t[1]) != null ? e : "")];
}
class Tg {
  constructor() {
    this.localStorage = Ji.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Rg);
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
const Ag = "wc_storage_version", Cu = 1, Pg = async (t, e, r) => {
  const n = Ag, s = await e.getItem(n);
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
  await e.setItem(n, Cu), r(e), Ng(t, a);
}, Ng = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Lg = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Tg();
    this.storage = e;
    try {
      const r = new Cg();
      Pg(e, r, this.setInitialized);
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
function Fg(t, e) {
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
function Ug(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function jg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function $g(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function kg(t, e, r, n) {
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
function qg(t, e) {
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
function zg(t, e) {
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
function Vg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Wf(arguments[e]));
  return t;
}
function Kg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function Bs(t) {
  return this instanceof Bs ? (this.v = t, this) : new Bs(t);
}
function Hg(t, e, r) {
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
    p.value instanceof Bs ? Promise.resolve(p.value.v).then(c, f) : d(i[0][2], p);
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
function Wg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: Bs(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function Gg(t) {
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
function Qg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Zg(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Yg(t) {
  return t && t.__esModule ? t : { default: t };
}
function Jg(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Xg(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ta;
  },
  __asyncDelegator: Wg,
  __asyncGenerator: Hg,
  __asyncValues: Gg,
  __await: Bs,
  __awaiter: kg,
  __classPrivateFieldGet: Jg,
  __classPrivateFieldSet: Xg,
  __createBinding: Bg,
  __decorate: Ug,
  __exportStar: zg,
  __extends: Fg,
  __generator: qg,
  __importDefault: Yg,
  __importStar: Zg,
  __makeTemplateObject: Qg,
  __metadata: $g,
  __param: jg,
  __read: Wf,
  __rest: Mg,
  __spread: Vg,
  __spreadArrays: Kg,
  __values: Aa
}, Symbol.toStringTag, { value: "Module" })), jr = /* @__PURE__ */ Ro(ey);
var Ss = {}, se = {}, ea = {}, xs = {}, Ru;
function ty() {
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
var wn = {}, ta = {}, _n = {}, Tu;
function ry() {
  return Tu || (Tu = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.ONE_THOUSAND = _n.ONE_HUNDRED = void 0, _n.ONE_HUNDRED = 100, _n.ONE_THOUSAND = 1e3), _n;
}
var ra = {}, Au;
function ny() {
  return Au || (Au = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ra)), ra;
}
var Pu;
function Gf() {
  return Pu || (Pu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(ry(), t), e.__exportStar(ny(), t);
  }(ta)), ta;
}
var Nu;
function sy() {
  if (Nu)
    return wn;
  Nu = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.fromMiliseconds = wn.toMiliseconds = void 0;
  const t = Gf();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  wn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return wn.fromMiliseconds = r, wn;
}
var Lu;
function iy() {
  return Lu || (Lu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(ty(), t), e.__exportStar(sy(), t);
  }(ea)), ea;
}
var zn = {}, Fu;
function oy() {
  if (Fu)
    return zn;
  Fu = 1, Object.defineProperty(zn, "__esModule", { value: !0 }), zn.Watch = void 0;
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
  return zn.Watch = t, zn.default = t, zn;
}
var na = {}, Os = {}, Mu;
function ay() {
  if (Mu)
    return Os;
  Mu = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.IWatch = void 0;
  class t {
  }
  return Os.IWatch = t, Os;
}
var Uu;
function cy() {
  return Uu || (Uu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(ay(), t);
  }(na)), na;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(iy(), t), e.__exportStar(oy(), t), e.__exportStar(cy(), t), e.__exportStar(Gf(), t);
})(se);
var sa = {}, Ds = {};
let jn = class {
};
const uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: jn
}, Symbol.toStringTag, { value: "Module" })), ly = /* @__PURE__ */ Ro(uy);
var ju;
function fy() {
  if (ju)
    return Ds;
  ju = 1, Object.defineProperty(Ds, "__esModule", { value: !0 }), Ds.IHeartBeat = void 0;
  const t = ly;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Ds.IHeartBeat = e, Ds;
}
var $u;
function Qf() {
  return $u || ($u = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(fy(), t);
  }(sa)), sa;
}
var ia = {}, En = {}, ku;
function hy() {
  if (ku)
    return En;
  ku = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.HEARTBEAT_EVENTS = En.HEARTBEAT_INTERVAL = void 0;
  const t = se;
  return En.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, En.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, En;
}
var qu;
function Zf() {
  return qu || (qu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(hy(), t);
  }(ia)), ia;
}
var Bu;
function dy() {
  if (Bu)
    return Ss;
  Bu = 1, Object.defineProperty(Ss, "__esModule", { value: !0 }), Ss.HeartBeat = void 0;
  const t = jr, e = pr, r = se, n = Qf(), s = Zf();
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
  const e = jr;
  e.__exportStar(dy(), t), e.__exportStar(Qf(), t), e.__exportStar(Zf(), t);
})(ds);
var Ue = {}, oa, zu;
function py() {
  if (zu)
    return oa;
  zu = 1;
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
function gy() {
  if (Vu)
    return aa;
  Vu = 1;
  const t = py();
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
    let U = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
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
      levels: B,
      timestamp: m(g)
    };
    R.levels = s.levels, R.level = G, R.setMaxListeners = R.getMaxListeners = R.emit = R.addListener = R.on = R.prependListener = R.once = R.prependOnceListener = R.removeListener = R.removeAllListeners = R.listeners = R.listenerCount = R.eventNames = R.write = R.flush = S, R.serializers = C, R._serialize = T, R._stdErrSerialize = U, R.child = z, l && (R._logEvent = d());
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
    function z($, K) {
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: A, epochTime: w, unixTime: O, isoTime: b });
  function i(g, l, y, C) {
    const T = Object.getPrototypeOf(l);
    l[y] = l.levelVal > l.levels.values[y] ? S : T[y] ? T[y] : e[y] || e[C] || S, a(g, l, y);
  }
  function a(g, l, y) {
    !g.transmit && l[y] === S || (l[y] = /* @__PURE__ */ function(C) {
      return function() {
        const U = g.timestamp(), B = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var R = 0; R < B.length; R++)
          B[R] = arguments[R];
        if (g.serialize && !g.asObject && u(B, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? C.call(G, o(this, y, B, U)) : C.apply(G, B), g.transmit) {
          const L = g.transmit.level || l.level, Q = s.levels.values[L], V = s.levels.values[y];
          if (V < Q)
            return;
          f(this, {
            ts: U,
            methodLevel: y,
            methodValue: V,
            transmitLevel: L,
            transmitValue: s.levels.values[g.transmit.level || l.level],
            send: g.transmit.send,
            val: l.levelVal
          }, B);
        }
      };
    }(l[y]));
  }
  function o(g, l, y, C) {
    g._serialize && u(y, g._serialize, g.serializers, g._stdErrSerialize);
    const T = y.slice();
    let U = T[0];
    const B = {};
    C && (B.time = C), B.level = s.levels.values[l];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), U !== null && typeof U == "object") {
      for (; G-- && typeof T[0] == "object"; )
        Object.assign(B, T.shift());
      U = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof U == "string" && (U = t(T.shift(), T));
    return U !== void 0 && (B.msg = U), B;
  }
  function u(g, l, y, C) {
    for (const T in g)
      if (C && g[T] instanceof Error)
        g[T] = s.stdSerializers.err(g[T]);
      else if (typeof g[T] == "object" && !Array.isArray(g[T]))
        for (const U in g[T])
          l && l.indexOf(U) > -1 && U in y && (g[T][U] = y[U](g[T][U]));
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
    const C = l.send, T = l.ts, U = l.methodLevel, B = l.methodValue, G = l.val, R = g._logEvent.bindings;
    u(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = T, g._logEvent.messages = y.filter(function(L) {
      return R.indexOf(L) === -1;
    }), g._logEvent.level.label = U, g._logEvent.level.value = B, C(U, g._logEvent, G), g._logEvent = d(R);
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
  function O() {
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
var Sn = {}, Ku;
function Yf() {
  return Ku || (Ku = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.PINO_CUSTOM_CONTEXT_KEY = Sn.PINO_LOGGER_DEFAULTS = void 0, Sn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Sn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Sn;
}
var zt = {}, Hu;
function yy() {
  if (Hu)
    return zt;
  Hu = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.generateChildLogger = zt.formatChildLoggerContext = zt.getLoggerContext = zt.setBrowserLoggerContext = zt.getBrowserLoggerContext = zt.getDefaultLoggerOptions = void 0;
  const t = Yf();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  zt.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  zt.getBrowserLoggerContext = r;
  function n(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] = u, o;
  }
  zt.setBrowserLoggerContext = n;
  function s(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let c = "";
    return typeof o.bindings > "u" ? c = r(o, u) : c = o.bindings().context || "", c;
  }
  zt.getLoggerContext = s;
  function i(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, c);
    return f.trim() ? `${f}/${u}` : u;
  }
  zt.formatChildLoggerContext = i;
  function a(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, u, c), d = o.child({ context: f });
    return n(d, f, c);
  }
  return zt.generateChildLogger = a, zt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = jr, r = e.__importDefault(gy());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Yf(), t), e.__exportStar(yy(), t);
})(Ue);
let my = class extends jn {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, WO = class {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}, vy = class extends jn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, by = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, wy = class extends jn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, _y = class extends jn {
  constructor(e) {
    super();
  }
}, Ey = class {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}, eD = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
};
class Sy extends jn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let rD = class {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
};
class xy extends jn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let sD = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Oy = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Dy = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, cD = class extends gi {
  constructor() {
    super();
  }
}, Iy = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, fD = class extends pr.EventEmitter {
  constructor() {
    super();
  }
}, Cy = class {
  constructor(e) {
    this.client = e;
  }
};
var Oc = {}, ps = {}, Po = {}, No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.BrowserRandomSource = void 0;
const Wu = 65536;
class Ry {
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
No.BrowserRandomSource = Ry;
function Ty(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Lo = {}, ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
function Ay(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
ar.wipe = Ay;
const Py = {}, Ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Py
}, Symbol.toStringTag, { value: "Module" })), Ly = /* @__PURE__ */ Ro(Ny);
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.NodeRandomSource = void 0;
const Fy = ar;
class My {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ty < "u") {
      const e = Ly;
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
    return (0, Fy.wipe)(r), n;
  }
}
Lo.NodeRandomSource = My;
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.SystemRandomSource = void 0;
const Uy = No, jy = Lo;
class $y {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Uy.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new jy.NodeRandomSource(), this._source.isAvailable) {
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
Po.SystemRandomSource = $y;
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
function ky(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
me.readInt16BE = ky;
function qy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
me.readUint16BE = qy;
function By(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
me.readInt16LE = By;
function zy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint16LE = zy;
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
function Vy(t, e) {
  e === void 0 && (e = 0);
  var r = Pa(t, e), n = Pa(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
me.readInt64BE = Vy;
function Ky(t, e) {
  e === void 0 && (e = 0);
  var r = Na(t, e), n = Na(t, e + 4);
  return r * 4294967296 + n;
}
me.readUint64BE = Ky;
function Hy(t, e) {
  e === void 0 && (e = 0);
  var r = La(t, e), n = La(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
me.readInt64LE = Hy;
function Wy(t, e) {
  e === void 0 && (e = 0);
  var r = Fa(t, e), n = Fa(t, e + 4);
  return n * 4294967296 + r;
}
me.readUint64LE = Wy;
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
function Gy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintBE = Gy;
function Qy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintLE = Qy;
function Zy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Xf.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintBE = Zy;
function Yy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Xf.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintLE = Yy;
function Jy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
me.readFloat32BE = Jy;
function Xy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
me.readFloat32LE = Xy;
function em(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
me.readFloat64BE = em;
function tm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
me.readFloat64LE = tm;
function rm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
me.writeFloat32BE = rm;
function nm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
me.writeFloat32LE = nm;
function sm(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
me.writeFloat64BE = sm;
function im(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
me.writeFloat64LE = im;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Po, r = me, n = ar;
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
  var e = me, r = ar;
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
    for (var v = c[0], E = c[1], S = c[2], A = c[3], w = c[4], O = c[5], b = c[6], x = c[7], g = f[0], l = f[1], y = f[2], C = f[3], T = f[4], U = f[5], B = f[6], G = f[7], R, L, Q, V, k, z, $, K; m >= 128; ) {
      for (var fe = 0; fe < 16; fe++) {
        var H = 8 * fe + p;
        o[fe] = e.readUint32BE(d, H), u[fe] = e.readUint32BE(d, H + 4);
      }
      for (var fe = 0; fe < 80; fe++) {
        var ae = v, te = E, oe = S, M = A, F = w, P = O, h = b, I = x, Z = g, X = l, De = y, Ie = C, we = T, Fe = U, Je = B, He = G;
        if (R = x, L = G, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = (w >>> 14 | T << 18) ^ (w >>> 18 | T << 14) ^ (T >>> 9 | w << 23), L = (T >>> 14 | w << 18) ^ (T >>> 18 | w << 14) ^ (w >>> 9 | T << 23), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = w & O ^ ~w & b, L = T & U ^ ~T & B, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = s[fe * 2], L = s[fe * 2 + 1], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = o[fe % 16], L = u[fe % 16], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, Q = $ & 65535 | K << 16, V = k & 65535 | z << 16, R = Q, L = V, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = (v >>> 28 | g << 4) ^ (g >>> 2 | v << 30) ^ (g >>> 7 | v << 25), L = (g >>> 28 | v << 4) ^ (v >>> 2 | g << 30) ^ (v >>> 7 | g << 25), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = v & E ^ v & S ^ E & S, L = g & l ^ g & y ^ l & y, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, I = $ & 65535 | K << 16, He = k & 65535 | z << 16, R = M, L = Ie, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = Q, L = V, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, M = $ & 65535 | K << 16, Ie = k & 65535 | z << 16, E = ae, S = te, A = oe, w = M, O = F, b = P, x = h, v = I, l = Z, y = X, C = De, T = Ie, U = we, B = Fe, G = Je, g = He, fe % 16 === 15)
          for (var H = 0; H < 16; H++)
            R = o[H], L = u[H], k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = o[(H + 9) % 16], L = u[(H + 9) % 16], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 1) % 16], V = u[(H + 1) % 16], R = (Q >>> 1 | V << 31) ^ (Q >>> 8 | V << 24) ^ Q >>> 7, L = (V >>> 1 | Q << 31) ^ (V >>> 8 | Q << 24) ^ (V >>> 7 | Q << 25), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 14) % 16], V = u[(H + 14) % 16], R = (Q >>> 19 | V << 13) ^ (V >>> 29 | Q << 3) ^ Q >>> 6, L = (V >>> 19 | Q << 13) ^ (Q >>> 29 | V << 3) ^ (V >>> 6 | Q << 26), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, o[H] = $ & 65535 | K << 16, u[H] = k & 65535 | z << 16;
      }
      R = v, L = g, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[0], L = f[0], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[0] = v = $ & 65535 | K << 16, f[0] = g = k & 65535 | z << 16, R = E, L = l, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[1], L = f[1], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[1] = E = $ & 65535 | K << 16, f[1] = l = k & 65535 | z << 16, R = S, L = y, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[2], L = f[2], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[2] = S = $ & 65535 | K << 16, f[2] = y = k & 65535 | z << 16, R = A, L = C, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[3], L = f[3], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[3] = A = $ & 65535 | K << 16, f[3] = C = k & 65535 | z << 16, R = w, L = T, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[4], L = f[4], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[4] = w = $ & 65535 | K << 16, f[4] = T = k & 65535 | z << 16, R = O, L = U, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[5], L = f[5], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[5] = O = $ & 65535 | K << 16, f[5] = U = k & 65535 | z << 16, R = b, L = B, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[6], L = f[6], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[6] = b = $ & 65535 | K << 16, f[6] = B = k & 65535 | z << 16, R = x, L = G, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[7], L = f[7], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[7] = x = $ & 65535 | K << 16, f[7] = G = k & 65535 | z << 16, p += 128, m -= 128;
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
  const e = ps, r = sh, n = ar;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(M) {
    const F = new Float64Array(16);
    if (M)
      for (let P = 0; P < M.length; P++)
        F[P] = M[P];
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
  function m(M, F) {
    for (let P = 0; P < 16; P++)
      M[P] = F[P] | 0;
  }
  function v(M) {
    let F = 1;
    for (let P = 0; P < 16; P++) {
      let h = M[P] + F + 65535;
      F = Math.floor(h / 65536), M[P] = h - F * 65536;
    }
    M[0] += F - 1 + 37 * (F - 1);
  }
  function E(M, F, P) {
    const h = ~(P - 1);
    for (let I = 0; I < 16; I++) {
      const Z = h & (M[I] ^ F[I]);
      M[I] ^= Z, F[I] ^= Z;
    }
  }
  function S(M, F) {
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
      M[2 * I] = h[I] & 255, M[2 * I + 1] = h[I] >> 8;
  }
  function A(M, F) {
    let P = 0;
    for (let h = 0; h < 32; h++)
      P |= M[h] ^ F[h];
    return (1 & P - 1 >>> 8) - 1;
  }
  function w(M, F) {
    const P = new Uint8Array(32), h = new Uint8Array(32);
    return S(P, M), S(h, F), A(P, h);
  }
  function O(M) {
    const F = new Uint8Array(32);
    return S(F, M), F[0] & 1;
  }
  function b(M, F) {
    for (let P = 0; P < 16; P++)
      M[P] = F[2 * P] + (F[2 * P + 1] << 8);
    M[15] &= 32767;
  }
  function x(M, F, P) {
    for (let h = 0; h < 16; h++)
      M[h] = F[h] + P[h];
  }
  function g(M, F, P) {
    for (let h = 0; h < 16; h++)
      M[h] = F[h] - P[h];
  }
  function l(M, F, P) {
    let h, I, Z = 0, X = 0, De = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = 0, Te = 0, _e = 0, Se = 0, Ee = 0, ge = 0, pe = 0, ce = 0, xe = 0, Ce = 0, he = 0, Ae = 0, Me = 0, ke = 0, qe = 0, je = 0, nr = 0, cr = 0, Ir = 0, Ct = 0, Cr = 0, ur = 0, Yr = 0, Xe = P[0], Qe = P[1], ot = P[2], rt = P[3], at = P[4], Ze = P[5], ft = P[6], gt = P[7], yt = P[8], ht = P[9], mt = P[10], dt = P[11], ct = P[12], We = P[13], D = P[14], j = P[15];
    h = F[0], Z += h * Xe, X += h * Qe, De += h * ot, Ie += h * rt, we += h * at, Fe += h * Ze, Je += h * ft, He += h * gt, Ne += h * yt, Te += h * ht, _e += h * mt, Se += h * dt, Ee += h * ct, ge += h * We, pe += h * D, ce += h * j, h = F[1], X += h * Xe, De += h * Qe, Ie += h * ot, we += h * rt, Fe += h * at, Je += h * Ze, He += h * ft, Ne += h * gt, Te += h * yt, _e += h * ht, Se += h * mt, Ee += h * dt, ge += h * ct, pe += h * We, ce += h * D, xe += h * j, h = F[2], De += h * Xe, Ie += h * Qe, we += h * ot, Fe += h * rt, Je += h * at, He += h * Ze, Ne += h * ft, Te += h * gt, _e += h * yt, Se += h * ht, Ee += h * mt, ge += h * dt, pe += h * ct, ce += h * We, xe += h * D, Ce += h * j, h = F[3], Ie += h * Xe, we += h * Qe, Fe += h * ot, Je += h * rt, He += h * at, Ne += h * Ze, Te += h * ft, _e += h * gt, Se += h * yt, Ee += h * ht, ge += h * mt, pe += h * dt, ce += h * ct, xe += h * We, Ce += h * D, he += h * j, h = F[4], we += h * Xe, Fe += h * Qe, Je += h * ot, He += h * rt, Ne += h * at, Te += h * Ze, _e += h * ft, Se += h * gt, Ee += h * yt, ge += h * ht, pe += h * mt, ce += h * dt, xe += h * ct, Ce += h * We, he += h * D, Ae += h * j, h = F[5], Fe += h * Xe, Je += h * Qe, He += h * ot, Ne += h * rt, Te += h * at, _e += h * Ze, Se += h * ft, Ee += h * gt, ge += h * yt, pe += h * ht, ce += h * mt, xe += h * dt, Ce += h * ct, he += h * We, Ae += h * D, Me += h * j, h = F[6], Je += h * Xe, He += h * Qe, Ne += h * ot, Te += h * rt, _e += h * at, Se += h * Ze, Ee += h * ft, ge += h * gt, pe += h * yt, ce += h * ht, xe += h * mt, Ce += h * dt, he += h * ct, Ae += h * We, Me += h * D, ke += h * j, h = F[7], He += h * Xe, Ne += h * Qe, Te += h * ot, _e += h * rt, Se += h * at, Ee += h * Ze, ge += h * ft, pe += h * gt, ce += h * yt, xe += h * ht, Ce += h * mt, he += h * dt, Ae += h * ct, Me += h * We, ke += h * D, qe += h * j, h = F[8], Ne += h * Xe, Te += h * Qe, _e += h * ot, Se += h * rt, Ee += h * at, ge += h * Ze, pe += h * ft, ce += h * gt, xe += h * yt, Ce += h * ht, he += h * mt, Ae += h * dt, Me += h * ct, ke += h * We, qe += h * D, je += h * j, h = F[9], Te += h * Xe, _e += h * Qe, Se += h * ot, Ee += h * rt, ge += h * at, pe += h * Ze, ce += h * ft, xe += h * gt, Ce += h * yt, he += h * ht, Ae += h * mt, Me += h * dt, ke += h * ct, qe += h * We, je += h * D, nr += h * j, h = F[10], _e += h * Xe, Se += h * Qe, Ee += h * ot, ge += h * rt, pe += h * at, ce += h * Ze, xe += h * ft, Ce += h * gt, he += h * yt, Ae += h * ht, Me += h * mt, ke += h * dt, qe += h * ct, je += h * We, nr += h * D, cr += h * j, h = F[11], Se += h * Xe, Ee += h * Qe, ge += h * ot, pe += h * rt, ce += h * at, xe += h * Ze, Ce += h * ft, he += h * gt, Ae += h * yt, Me += h * ht, ke += h * mt, qe += h * dt, je += h * ct, nr += h * We, cr += h * D, Ir += h * j, h = F[12], Ee += h * Xe, ge += h * Qe, pe += h * ot, ce += h * rt, xe += h * at, Ce += h * Ze, he += h * ft, Ae += h * gt, Me += h * yt, ke += h * ht, qe += h * mt, je += h * dt, nr += h * ct, cr += h * We, Ir += h * D, Ct += h * j, h = F[13], ge += h * Xe, pe += h * Qe, ce += h * ot, xe += h * rt, Ce += h * at, he += h * Ze, Ae += h * ft, Me += h * gt, ke += h * yt, qe += h * ht, je += h * mt, nr += h * dt, cr += h * ct, Ir += h * We, Ct += h * D, Cr += h * j, h = F[14], pe += h * Xe, ce += h * Qe, xe += h * ot, Ce += h * rt, he += h * at, Ae += h * Ze, Me += h * ft, ke += h * gt, qe += h * yt, je += h * ht, nr += h * mt, cr += h * dt, Ir += h * ct, Ct += h * We, Cr += h * D, ur += h * j, h = F[15], ce += h * Xe, xe += h * Qe, Ce += h * ot, he += h * rt, Ae += h * at, Me += h * Ze, ke += h * ft, qe += h * gt, je += h * yt, nr += h * ht, cr += h * mt, Ir += h * dt, Ct += h * ct, Cr += h * We, ur += h * D, Yr += h * j, Z += 38 * xe, X += 38 * Ce, De += 38 * he, Ie += 38 * Ae, we += 38 * Me, Fe += 38 * ke, Je += 38 * qe, He += 38 * je, Ne += 38 * nr, Te += 38 * cr, _e += 38 * Ir, Se += 38 * Ct, Ee += 38 * Cr, ge += 38 * ur, pe += 38 * Yr, I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), M[0] = Z, M[1] = X, M[2] = De, M[3] = Ie, M[4] = we, M[5] = Fe, M[6] = Je, M[7] = He, M[8] = Ne, M[9] = Te, M[10] = _e, M[11] = Se, M[12] = Ee, M[13] = ge, M[14] = pe, M[15] = ce;
  }
  function y(M, F) {
    l(M, F, F);
  }
  function C(M, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 253; h >= 0; h--)
      y(P, P), h !== 2 && h !== 4 && l(P, P, F);
    for (h = 0; h < 16; h++)
      M[h] = P[h];
  }
  function T(M, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 250; h >= 0; h--)
      y(P, P), h !== 1 && l(P, P, F);
    for (h = 0; h < 16; h++)
      M[h] = P[h];
  }
  function U(M, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), De = s(), Ie = s(), we = s(), Fe = s();
    g(P, M[1], M[0]), g(Fe, F[1], F[0]), l(P, P, Fe), x(h, M[0], M[1]), x(Fe, F[0], F[1]), l(h, h, Fe), l(I, M[3], F[3]), l(I, I, c), l(Z, M[2], F[2]), x(Z, Z, Z), g(X, h, P), g(De, Z, I), x(Ie, Z, I), x(we, h, P), l(M[0], X, De), l(M[1], we, Ie), l(M[2], Ie, De), l(M[3], X, we);
  }
  function B(M, F, P) {
    for (let h = 0; h < 4; h++)
      E(M[h], F[h], P);
  }
  function G(M, F) {
    const P = s(), h = s(), I = s();
    C(I, F[2]), l(P, F[0], I), l(h, F[1], I), S(M, h), M[31] ^= O(P) << 7;
  }
  function R(M, F, P) {
    m(M[0], a), m(M[1], o), m(M[2], o), m(M[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = P[h / 8 | 0] >> (h & 7) & 1;
      B(M, F, I), U(F, M), U(M, M), B(M, F, I);
    }
  }
  function L(M, F) {
    const P = [s(), s(), s(), s()];
    m(P[0], f), m(P[1], d), m(P[2], o), l(P[3], f, d), R(M, P, F);
  }
  function Q(M) {
    if (M.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(M);
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(32), h = [s(), s(), s(), s()];
    L(h, F), G(P, h);
    const I = new Uint8Array(64);
    return I.set(M), I.set(P, 32), {
      publicKey: P,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function V(M) {
    const F = (0, e.randomBytes)(32, M), P = Q(F);
    return (0, n.wipe)(F), P;
  }
  t.generateKeyPair = V;
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
    let P, h, I, Z;
    for (h = 63; h >= 32; --h) {
      for (P = 0, I = h - 32, Z = h - 12; I < Z; ++I)
        F[I] += P - 16 * F[h] * z[I - (h - 32)], P = Math.floor((F[I] + 128) / 256), F[I] -= P * 256;
      F[I] += P, F[h] = 0;
    }
    for (P = 0, I = 0; I < 32; I++)
      F[I] += P - (F[31] >> 4) * z[I], P = F[I] >> 8, F[I] &= 255;
    for (I = 0; I < 32; I++)
      F[I] -= P * z[I];
    for (h = 0; h < 32; h++)
      F[h + 1] += F[h] >> 8, M[h] = F[h] & 255;
  }
  function K(M) {
    const F = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      F[P] = M[P];
    for (let P = 0; P < 64; P++)
      M[P] = 0;
    $(M, F);
  }
  function fe(M, F) {
    const P = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(M.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const Z = new Uint8Array(64);
    Z.set(I.subarray(32), 32);
    const X = new r.SHA512();
    X.update(Z.subarray(32)), X.update(F);
    const De = X.digest();
    X.clean(), K(De), L(h, De), G(Z, h), X.reset(), X.update(Z.subarray(0, 32)), X.update(M.subarray(32)), X.update(F);
    const Ie = X.digest();
    K(Ie);
    for (let we = 0; we < 32; we++)
      P[we] = De[we];
    for (let we = 0; we < 32; we++)
      for (let Fe = 0; Fe < 32; Fe++)
        P[we + Fe] += Ie[we] * I[Fe];
    return $(Z.subarray(32), P), Z;
  }
  t.sign = fe;
  function H(M, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), De = s(), Ie = s();
    return m(M[2], o), b(M[1], F), y(I, M[1]), l(Z, I, u), g(I, I, M[2]), x(Z, M[2], Z), y(X, Z), y(De, X), l(Ie, De, X), l(P, Ie, I), l(P, P, Z), T(P, P), l(P, P, I), l(P, P, Z), l(P, P, Z), l(M[0], P, Z), y(h, M[0]), l(h, h, Z), w(h, I) && l(M[0], M[0], p), y(h, M[0]), l(h, h, Z), w(h, I) ? -1 : (O(M[0]) === F[31] >> 7 && g(M[0], a, M[0]), l(M[3], M[0], M[1]), 0);
  }
  function ae(M, F, P) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], Z = [s(), s(), s(), s()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(Z, M))
      return !1;
    const X = new r.SHA512();
    X.update(P.subarray(0, 32)), X.update(M), X.update(F);
    const De = X.digest();
    return K(De), R(I, Z, De), L(Z, P.subarray(32)), U(I, Z), G(h, I), !A(P, h);
  }
  t.verify = ae;
  function te(M) {
    let F = [s(), s(), s(), s()];
    if (H(F, M))
      throw new Error("Ed25519: invalid public key");
    let P = s(), h = s(), I = F[1];
    x(P, o, I), g(h, o, I), C(h, h), l(P, P, h);
    let Z = new Uint8Array(32);
    return S(Z, P), Z;
  }
  t.convertPublicKeyToX25519 = te;
  function oe(M) {
    const F = (0, r.hash)(M.subarray(0, 32));
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(F.subarray(0, 32));
    return (0, n.wipe)(F), P;
  }
  t.convertSecretKeyToX25519 = oe;
})(Oc);
const om = "EdDSA", am = "JWT", ih = ".", oh = "base64url", cm = "utf8", um = "utf8", lm = ":", fm = "did", hm = "key", Gu = "base58btc", dm = "z", pm = "K36", gm = 32;
function Dc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ah(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Dc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ma(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = ah(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return Dc(r);
}
function ym(t, e) {
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
    for (var O = (w - A) * f + 1 >>> 0, b = new Uint8Array(O); A !== w; ) {
      for (var x = v[A], g = 0, l = O - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = O - S; y !== O && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < O; ++y)
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
      for (var w = (v.length - E) * c + 1 >>> 0, O = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < A) && g !== -1; g--, x++)
          b += o * O[g] >>> 0, O[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - A; l !== w && O[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = O[l++];
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
var mm = ym, vm = mm;
const bm = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, wm = (t) => new TextEncoder().encode(t), _m = (t) => new TextDecoder().decode(t);
class Em {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Sm {
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
class xm {
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
const ch = (t, e) => new xm({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Om {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Em(e, r, n), this.decoder = new Sm(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Fo = ({ name: t, prefix: e, encode: r, decode: n }) => new Om(t, e, r, n), vi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = vm(r, e);
  return Fo({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => bm(s(i))
  });
}, Dm = (t, e, r, n) => {
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
}, Im = (t, e, r) => {
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
    return Im(s, n, r);
  },
  decode(s) {
    return Dm(s, n, r, t);
  }
}), Cm = Fo({
  prefix: "\0",
  name: "identity",
  encode: (t) => _m(t),
  decode: (t) => wm(t)
}), Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Cm
}, Symbol.toStringTag, { value: "Module" })), Tm = Pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Tm
}, Symbol.toStringTag, { value: "Module" })), Pm = Pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Pm
}, Symbol.toStringTag, { value: "Module" })), Lm = vi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Lm
}, Symbol.toStringTag, { value: "Module" })), Mm = Pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Um = Pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Mm,
  base16upper: Um
}, Symbol.toStringTag, { value: "Module" })), $m = Pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), km = Pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), qm = Pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Bm = Pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), zm = Pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Vm = Pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Km = Pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Hm = Pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Wm = Pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: $m,
  base32hex: zm,
  base32hexpad: Km,
  base32hexpadupper: Hm,
  base32hexupper: Vm,
  base32pad: qm,
  base32padupper: Bm,
  base32upper: km,
  base32z: Wm
}, Symbol.toStringTag, { value: "Module" })), Qm = vi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Zm = vi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Qm,
  base36upper: Zm
}, Symbol.toStringTag, { value: "Module" })), Jm = vi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Xm = vi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Jm,
  base58flickr: Xm
}, Symbol.toStringTag, { value: "Module" })), tv = Pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), rv = Pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), nv = Pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), sv = Pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), iv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: tv,
  base64pad: rv,
  base64url: nv,
  base64urlpad: sv
}, Symbol.toStringTag, { value: "Module" })), uh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), ov = uh.reduce((t, e, r) => (t[r] = e, t), []), av = uh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function cv(t) {
  return t.reduce((e, r) => (e += ov[r], e), "");
}
function uv(t) {
  const e = [];
  for (const r of t) {
    const n = av[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const lv = Fo({
  prefix: "🚀",
  name: "base256emoji",
  encode: cv,
  decode: uv
}), fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: lv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Qu = {
  ...Rm,
  ...Am,
  ...Nm,
  ...Fm,
  ...jm,
  ...Gm,
  ...Ym,
  ...ev,
  ...iv,
  ...fv
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
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Dc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function ao(t) {
  return Qt(tr(mi(t), cm), oh);
}
function hh(t) {
  const e = tr(pm, Gu), r = dm + Qt(Ma([e, t]), Gu);
  return [fm, hm, r].join(lm);
}
function hv(t) {
  return Qt(t, oh);
}
function dv(t) {
  return tr([ao(t.header), ao(t.payload)].join(ih), um);
}
function pv(t) {
  return [
    ao(t.header),
    ao(t.payload),
    hv(t.signature)
  ].join(ih);
}
function Yu(t = ps.randomBytes(gm)) {
  return Oc.generateKeyPairFromSeed(t);
}
async function gv(t, e, r, n, s = se.fromMiliseconds(Date.now())) {
  const i = { alg: om, typ: am }, a = hh(n.publicKey), o = s + r, u = { iss: a, sub: t, aud: e, iat: s, exp: o }, c = dv({ header: i, payload: u }), f = Oc.sign(n.secretKey, c);
  return pv({ header: i, payload: u, signature: f });
}
var Ic = {}, Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
var Mt = me, Ua = ar, yv = 20;
function mv(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], c = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], S = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], A = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, b = s, x = i, g = a, l = o, y = u, C = c, T = f, U = d, B = p, G = m, R = v, L = E, Q = S, V = A, k = w, z = 0; z < yv; z += 2)
    O = O + l | 0, L ^= O, L = L >>> 16 | L << 16, U = U + L | 0, l ^= U, l = l >>> 20 | l << 12, b = b + y | 0, Q ^= b, Q = Q >>> 16 | Q << 16, B = B + Q | 0, y ^= B, y = y >>> 20 | y << 12, x = x + C | 0, V ^= x, V = V >>> 16 | V << 16, G = G + V | 0, C ^= G, C = C >>> 20 | C << 12, g = g + T | 0, k ^= g, k = k >>> 16 | k << 16, R = R + k | 0, T ^= R, T = T >>> 20 | T << 12, x = x + C | 0, V ^= x, V = V >>> 24 | V << 8, G = G + V | 0, C ^= G, C = C >>> 25 | C << 7, g = g + T | 0, k ^= g, k = k >>> 24 | k << 8, R = R + k | 0, T ^= R, T = T >>> 25 | T << 7, b = b + y | 0, Q ^= b, Q = Q >>> 24 | Q << 8, B = B + Q | 0, y ^= B, y = y >>> 25 | y << 7, O = O + l | 0, L ^= O, L = L >>> 24 | L << 8, U = U + L | 0, l ^= U, l = l >>> 25 | l << 7, O = O + y | 0, k ^= O, k = k >>> 16 | k << 16, G = G + k | 0, y ^= G, y = y >>> 20 | y << 12, b = b + C | 0, L ^= b, L = L >>> 16 | L << 16, R = R + L | 0, C ^= R, C = C >>> 20 | C << 12, x = x + T | 0, Q ^= x, Q = Q >>> 16 | Q << 16, U = U + Q | 0, T ^= U, T = T >>> 20 | T << 12, g = g + l | 0, V ^= g, V = V >>> 16 | V << 16, B = B + V | 0, l ^= B, l = l >>> 20 | l << 12, x = x + T | 0, Q ^= x, Q = Q >>> 24 | Q << 8, U = U + Q | 0, T ^= U, T = T >>> 25 | T << 7, g = g + l | 0, V ^= g, V = V >>> 24 | V << 8, B = B + V | 0, l ^= B, l = l >>> 25 | l << 7, b = b + C | 0, L ^= b, L = L >>> 24 | L << 8, R = R + L | 0, C ^= R, C = C >>> 25 | C << 7, O = O + y | 0, k ^= O, k = k >>> 24 | k << 8, G = G + k | 0, y ^= G, y = y >>> 25 | y << 7;
  Mt.writeUint32LE(O + n | 0, t, 0), Mt.writeUint32LE(b + s | 0, t, 4), Mt.writeUint32LE(x + i | 0, t, 8), Mt.writeUint32LE(g + a | 0, t, 12), Mt.writeUint32LE(l + o | 0, t, 16), Mt.writeUint32LE(y + u | 0, t, 20), Mt.writeUint32LE(C + c | 0, t, 24), Mt.writeUint32LE(T + f | 0, t, 28), Mt.writeUint32LE(U + d | 0, t, 32), Mt.writeUint32LE(B + p | 0, t, 36), Mt.writeUint32LE(G + m | 0, t, 40), Mt.writeUint32LE(R + v | 0, t, 44), Mt.writeUint32LE(L + E | 0, t, 48), Mt.writeUint32LE(Q + S | 0, t, 52), Mt.writeUint32LE(V + A | 0, t, 56), Mt.writeUint32LE(k + w | 0, t, 60);
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
    mv(o, i, t);
    for (var c = u; c < u + 64 && c < r.length; c++)
      n[c] = r[c] ^ o[c - u];
    bv(i, 0, a);
  }
  return Ua.wipe(o), s === 0 && Ua.wipe(i), n;
}
Mo.streamXOR = dh;
function vv(t, e, r, n) {
  return n === void 0 && (n = 0), Ua.wipe(r), dh(t, e, r, r, n);
}
Mo.stream = vv;
function bv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var ph = {}, gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
function wv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
gn.select = wv;
function _v(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
gn.lessOrEqual = _v;
function gh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
gn.compare = gh;
function Ev(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : gh(t, e) !== 0;
}
gn.equal = Ev;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = gn, r = ar;
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
        for (var f = this._fin ? 0 : 2048, d = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], E = this._h[4], S = this._h[5], A = this._h[6], w = this._h[7], O = this._h[8], b = this._h[9], x = this._r[0], g = this._r[1], l = this._r[2], y = this._r[3], C = this._r[4], T = this._r[5], U = this._r[6], B = this._r[7], G = this._r[8], R = this._r[9]; c >= 16; ) {
          var L = o[u + 0] | o[u + 1] << 8;
          d += L & 8191;
          var Q = o[u + 2] | o[u + 3] << 8;
          p += (L >>> 13 | Q << 3) & 8191;
          var V = o[u + 4] | o[u + 5] << 8;
          m += (Q >>> 10 | V << 6) & 8191;
          var k = o[u + 6] | o[u + 7] << 8;
          v += (V >>> 7 | k << 9) & 8191;
          var z = o[u + 8] | o[u + 9] << 8;
          E += (k >>> 4 | z << 12) & 8191, S += z >>> 1 & 8191;
          var $ = o[u + 10] | o[u + 11] << 8;
          A += (z >>> 14 | $ << 2) & 8191;
          var K = o[u + 12] | o[u + 13] << 8;
          w += ($ >>> 11 | K << 5) & 8191;
          var fe = o[u + 14] | o[u + 15] << 8;
          O += (K >>> 8 | fe << 8) & 8191, b += fe >>> 5 | f;
          var H = 0, ae = H;
          ae += d * x, ae += p * (5 * R), ae += m * (5 * G), ae += v * (5 * B), ae += E * (5 * U), H = ae >>> 13, ae &= 8191, ae += S * (5 * T), ae += A * (5 * C), ae += w * (5 * y), ae += O * (5 * l), ae += b * (5 * g), H += ae >>> 13, ae &= 8191;
          var te = H;
          te += d * g, te += p * x, te += m * (5 * R), te += v * (5 * G), te += E * (5 * B), H = te >>> 13, te &= 8191, te += S * (5 * U), te += A * (5 * T), te += w * (5 * C), te += O * (5 * y), te += b * (5 * l), H += te >>> 13, te &= 8191;
          var oe = H;
          oe += d * l, oe += p * g, oe += m * x, oe += v * (5 * R), oe += E * (5 * G), H = oe >>> 13, oe &= 8191, oe += S * (5 * B), oe += A * (5 * U), oe += w * (5 * T), oe += O * (5 * C), oe += b * (5 * y), H += oe >>> 13, oe &= 8191;
          var M = H;
          M += d * y, M += p * l, M += m * g, M += v * x, M += E * (5 * R), H = M >>> 13, M &= 8191, M += S * (5 * G), M += A * (5 * B), M += w * (5 * U), M += O * (5 * T), M += b * (5 * C), H += M >>> 13, M &= 8191;
          var F = H;
          F += d * C, F += p * y, F += m * l, F += v * g, F += E * x, H = F >>> 13, F &= 8191, F += S * (5 * R), F += A * (5 * G), F += w * (5 * B), F += O * (5 * U), F += b * (5 * T), H += F >>> 13, F &= 8191;
          var P = H;
          P += d * T, P += p * C, P += m * y, P += v * l, P += E * g, H = P >>> 13, P &= 8191, P += S * x, P += A * (5 * R), P += w * (5 * G), P += O * (5 * B), P += b * (5 * U), H += P >>> 13, P &= 8191;
          var h = H;
          h += d * U, h += p * T, h += m * C, h += v * y, h += E * l, H = h >>> 13, h &= 8191, h += S * g, h += A * x, h += w * (5 * R), h += O * (5 * G), h += b * (5 * B), H += h >>> 13, h &= 8191;
          var I = H;
          I += d * B, I += p * U, I += m * T, I += v * C, I += E * y, H = I >>> 13, I &= 8191, I += S * l, I += A * g, I += w * x, I += O * (5 * R), I += b * (5 * G), H += I >>> 13, I &= 8191;
          var Z = H;
          Z += d * G, Z += p * B, Z += m * U, Z += v * T, Z += E * C, H = Z >>> 13, Z &= 8191, Z += S * y, Z += A * l, Z += w * g, Z += O * x, Z += b * (5 * R), H += Z >>> 13, Z &= 8191;
          var X = H;
          X += d * R, X += p * G, X += m * B, X += v * U, X += E * T, H = X >>> 13, X &= 8191, X += S * C, X += A * y, X += w * l, X += O * g, X += b * x, H += X >>> 13, X &= 8191, H = (H << 2) + H | 0, H = H + ae | 0, ae = H & 8191, H = H >>> 13, te += H, d = ae, p = te, m = oe, v = M, E = F, S = P, A = h, w = I, O = Z, b = X, u += 16, c -= 16;
        }
        this._h[0] = d, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = E, this._h[5] = S, this._h[6] = A, this._h[7] = w, this._h[8] = O, this._h[9] = b;
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
  var e = Mo, r = ph, n = ar, s = me, i = gn;
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
function Sv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Cc.isSerializableHash = Sv;
Object.defineProperty(bi, "__esModule", { value: !0 });
var Ar = Cc, xv = gn, Ov = ar, mh = (
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
      this._outer.update(n), Ar.isSerializableHash(this._inner) && Ar.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Ov.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Ar.isSerializableHash(this._inner) || !Ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Ar.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Ar.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Ar.isSerializableHash(this._inner) || !Ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
bi.HMAC = mh;
function Dv(t, e, r) {
  var n = new mh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
bi.hmac = Dv;
bi.equal = xv.equal;
Object.defineProperty(yh, "__esModule", { value: !0 });
var Ju = bi, Xu = ar, Iv = (
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
), Cv = yh.HKDF = Iv, Uo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = ar;
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
      for (var p = u[0], m = u[1], v = u[2], E = u[3], S = u[4], A = u[5], w = u[6], O = u[7], b = 0; b < 16; b++) {
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
        var l = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & A ^ ~S & w) | 0) + (O + (s[b] + o[b] | 0) | 0) | 0, y = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & v ^ m & v) | 0;
        O = w, w = A, A = S, S = E + l | 0, E = v, v = m, m = p, p = l + y | 0;
      }
      u[0] += p, u[1] += m, u[2] += v, u[3] += E, u[4] += S, u[5] += A, u[6] += w, u[7] += O, f += 64, d -= 64;
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
})(Uo);
var Rc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = ps, r = ar;
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
    let l, y, C = 0, T = 0, U = 0, B = 0, G = 0, R = 0, L = 0, Q = 0, V = 0, k = 0, z = 0, $ = 0, K = 0, fe = 0, H = 0, ae = 0, te = 0, oe = 0, M = 0, F = 0, P = 0, h = 0, I = 0, Z = 0, X = 0, De = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = g[0], Te = g[1], _e = g[2], Se = g[3], Ee = g[4], ge = g[5], pe = g[6], ce = g[7], xe = g[8], Ce = g[9], he = g[10], Ae = g[11], Me = g[12], ke = g[13], qe = g[14], je = g[15];
    l = x[0], C += l * Ne, T += l * Te, U += l * _e, B += l * Se, G += l * Ee, R += l * ge, L += l * pe, Q += l * ce, V += l * xe, k += l * Ce, z += l * he, $ += l * Ae, K += l * Me, fe += l * ke, H += l * qe, ae += l * je, l = x[1], T += l * Ne, U += l * Te, B += l * _e, G += l * Se, R += l * Ee, L += l * ge, Q += l * pe, V += l * ce, k += l * xe, z += l * Ce, $ += l * he, K += l * Ae, fe += l * Me, H += l * ke, ae += l * qe, te += l * je, l = x[2], U += l * Ne, B += l * Te, G += l * _e, R += l * Se, L += l * Ee, Q += l * ge, V += l * pe, k += l * ce, z += l * xe, $ += l * Ce, K += l * he, fe += l * Ae, H += l * Me, ae += l * ke, te += l * qe, oe += l * je, l = x[3], B += l * Ne, G += l * Te, R += l * _e, L += l * Se, Q += l * Ee, V += l * ge, k += l * pe, z += l * ce, $ += l * xe, K += l * Ce, fe += l * he, H += l * Ae, ae += l * Me, te += l * ke, oe += l * qe, M += l * je, l = x[4], G += l * Ne, R += l * Te, L += l * _e, Q += l * Se, V += l * Ee, k += l * ge, z += l * pe, $ += l * ce, K += l * xe, fe += l * Ce, H += l * he, ae += l * Ae, te += l * Me, oe += l * ke, M += l * qe, F += l * je, l = x[5], R += l * Ne, L += l * Te, Q += l * _e, V += l * Se, k += l * Ee, z += l * ge, $ += l * pe, K += l * ce, fe += l * xe, H += l * Ce, ae += l * he, te += l * Ae, oe += l * Me, M += l * ke, F += l * qe, P += l * je, l = x[6], L += l * Ne, Q += l * Te, V += l * _e, k += l * Se, z += l * Ee, $ += l * ge, K += l * pe, fe += l * ce, H += l * xe, ae += l * Ce, te += l * he, oe += l * Ae, M += l * Me, F += l * ke, P += l * qe, h += l * je, l = x[7], Q += l * Ne, V += l * Te, k += l * _e, z += l * Se, $ += l * Ee, K += l * ge, fe += l * pe, H += l * ce, ae += l * xe, te += l * Ce, oe += l * he, M += l * Ae, F += l * Me, P += l * ke, h += l * qe, I += l * je, l = x[8], V += l * Ne, k += l * Te, z += l * _e, $ += l * Se, K += l * Ee, fe += l * ge, H += l * pe, ae += l * ce, te += l * xe, oe += l * Ce, M += l * he, F += l * Ae, P += l * Me, h += l * ke, I += l * qe, Z += l * je, l = x[9], k += l * Ne, z += l * Te, $ += l * _e, K += l * Se, fe += l * Ee, H += l * ge, ae += l * pe, te += l * ce, oe += l * xe, M += l * Ce, F += l * he, P += l * Ae, h += l * Me, I += l * ke, Z += l * qe, X += l * je, l = x[10], z += l * Ne, $ += l * Te, K += l * _e, fe += l * Se, H += l * Ee, ae += l * ge, te += l * pe, oe += l * ce, M += l * xe, F += l * Ce, P += l * he, h += l * Ae, I += l * Me, Z += l * ke, X += l * qe, De += l * je, l = x[11], $ += l * Ne, K += l * Te, fe += l * _e, H += l * Se, ae += l * Ee, te += l * ge, oe += l * pe, M += l * ce, F += l * xe, P += l * Ce, h += l * he, I += l * Ae, Z += l * Me, X += l * ke, De += l * qe, Ie += l * je, l = x[12], K += l * Ne, fe += l * Te, H += l * _e, ae += l * Se, te += l * Ee, oe += l * ge, M += l * pe, F += l * ce, P += l * xe, h += l * Ce, I += l * he, Z += l * Ae, X += l * Me, De += l * ke, Ie += l * qe, we += l * je, l = x[13], fe += l * Ne, H += l * Te, ae += l * _e, te += l * Se, oe += l * Ee, M += l * ge, F += l * pe, P += l * ce, h += l * xe, I += l * Ce, Z += l * he, X += l * Ae, De += l * Me, Ie += l * ke, we += l * qe, Fe += l * je, l = x[14], H += l * Ne, ae += l * Te, te += l * _e, oe += l * Se, M += l * Ee, F += l * ge, P += l * pe, h += l * ce, I += l * xe, Z += l * Ce, X += l * he, De += l * Ae, Ie += l * Me, we += l * ke, Fe += l * qe, Je += l * je, l = x[15], ae += l * Ne, te += l * Te, oe += l * _e, M += l * Se, F += l * Ee, P += l * ge, h += l * pe, I += l * ce, Z += l * xe, X += l * Ce, De += l * he, Ie += l * Ae, we += l * Me, Fe += l * ke, Je += l * qe, He += l * je, C += 38 * te, T += 38 * oe, U += 38 * M, B += 38 * F, G += 38 * P, R += 38 * h, L += 38 * I, Q += 38 * Z, V += 38 * X, k += 38 * De, z += 38 * Ie, $ += 38 * we, K += 38 * Fe, fe += 38 * Je, H += 38 * He, y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = U + y + 65535, y = Math.floor(l / 65536), U = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = U + y + 65535, y = Math.floor(l / 65536), U = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), b[0] = C, b[1] = T, b[2] = U, b[3] = B, b[4] = G, b[5] = R, b[6] = L, b[7] = Q, b[8] = V, b[9] = k, b[10] = z, b[11] = $, b[12] = K, b[13] = fe, b[14] = H, b[15] = ae;
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
    const g = new Uint8Array(32), l = new Float64Array(80), y = n(), C = n(), T = n(), U = n(), B = n(), G = n();
    for (let V = 0; V < 31; V++)
      g[V] = b[V];
    g[31] = b[31] & 127 | 64, g[0] &= 248, c(l, x);
    for (let V = 0; V < 16; V++)
      C[V] = l[V];
    y[0] = U[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const k = g[V >>> 3] >>> (V & 7) & 1;
      o(y, C, k), o(T, U, k), f(B, y, T), d(y, y, T), f(T, C, U), d(C, C, U), m(U, B), m(G, y), p(y, T, y), p(T, C, B), f(B, y, T), d(y, y, T), m(C, y), d(T, U, G), p(y, T, i), f(y, y, U), p(T, T, y), p(y, U, G), p(U, C, l), m(C, B), o(y, C, k), o(T, U, k);
    }
    for (let V = 0; V < 16; V++)
      l[V + 16] = y[V], l[V + 32] = T[V], l[V + 48] = C[V], l[V + 64] = U[V];
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
  function O(b, x, g = !1) {
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
  t.sharedKey = O;
})(Rc);
var el = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Rv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Tv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Av = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Pv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Nv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Lv = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Fv = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, tl = 3, Mv = [
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
  ["searchbot", Lv]
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
function Uv(t) {
  return t ? nl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Nv() : typeof navigator < "u" ? nl(navigator.userAgent) : kv();
}
function jv(t) {
  return t !== "" && Mv.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function nl(t) {
  var e = jv(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Pv();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < tl && (s = el(el([], s, !0), qv(tl - s.length), !0)) : s = [];
  var i = s.join("."), a = $v(t), o = Fv.exec(t);
  return o && o[1] ? new Av(r, i, a, o[1]) : new Rv(r, i, a);
}
function $v(t) {
  for (var e = 0, r = rl.length; e < r; e++) {
    var n = rl[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function kv() {
  var t = typeof process < "u" && process.version;
  return t ? new Tv(process.version.slice(1)) : null;
}
function qv(t) {
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
function zv() {
  return $n("document");
}
var Tc = Ge.getDocument = zv;
function Vv() {
  return gs("navigator");
}
Ge.getNavigatorOrThrow = Vv;
function Kv() {
  return $n("navigator");
}
var Ac = Ge.getNavigator = Kv;
function Hv() {
  return gs("location");
}
Ge.getLocationOrThrow = Hv;
function Wv() {
  return $n("location");
}
var vh = Ge.getLocation = Wv;
function Gv() {
  return gs("crypto");
}
Ge.getCryptoOrThrow = Gv;
function Qv() {
  return $n("crypto");
}
Ge.getCrypto = Qv;
function Zv() {
  return gs("localStorage");
}
Ge.getLocalStorageOrThrow = Zv;
function Yv() {
  return $n("localStorage");
}
Ge.getLocalStorage = Yv;
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
var bh = Pc.getWindowMetadata = void 0;
const sl = Ge;
function Jv() {
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
              const O = w.join("/");
              A += O + "/" + S;
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
bh = Pc.getWindowMetadata = Jv;
var zs = {}, Xv = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), wh = "%[a-f0-9]{2}", il = new RegExp("(" + wh + ")|([^%]+?)", "gi"), ol = new RegExp("(" + wh + ")+", "gi");
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
function e0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(il) || [], r = 1; r < e.length; r++)
      t = ja(e, r).join(""), e = t.match(il) || [];
    return t;
  }
}
function t0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ol.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = e0(r[0]);
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
var r0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return t0(t);
  }
}, n0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, s0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = Xv, r = r0, n = n0, s = s0, i = (w) => w == null, a = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (O) => (b, x) => {
          const g = b.length;
          return x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), "[", g, "]"].join("")] : [
            ...b,
            [f(O, w), "[", f(g, w), "]=", f(x, w)].join("")
          ];
        };
      case "bracket":
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), "[]"].join("")] : [...b, [f(O, w), "[]=", f(x, w)].join("")];
      case "colon-list-separator":
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), ":list="].join("")] : [...b, [f(O, w), ":list=", f(x, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (x, g) => g === void 0 || w.skipNull && g === null || w.skipEmptyString && g === "" ? x : (g = g === null ? "" : g, x.length === 0 ? [[f(b, w), O, f(g, w)].join("")] : [[x, f(g, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, f(O, w)] : [...b, [f(O, w), "=", f(x, w)].join("")];
    }
  }
  function u(w) {
    let O;
    switch (w.arrayFormat) {
      case "index":
        return (b, x, g) => {
          if (O = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !O) {
            g[b] = x;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][O[1]] = x;
        };
      case "bracket":
        return (b, x, g) => {
          if (O = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !O) {
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
          if (O = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !O) {
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
  function f(w, O) {
    return O.encode ? O.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, O) {
    return O.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((O, b) => Number(O) - Number(b)).map((O) => w[O]) : w;
  }
  function m(w) {
    const O = w.indexOf("#");
    return O !== -1 && (w = w.slice(0, O)), w;
  }
  function v(w) {
    let O = "";
    const b = w.indexOf("#");
    return b !== -1 && (O = w.slice(b)), O;
  }
  function E(w) {
    w = m(w);
    const O = w.indexOf("?");
    return O === -1 ? "" : w.slice(O + 1);
  }
  function S(w, O) {
    return O.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : O.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function A(w, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), c(O.arrayFormatSeparator);
    const b = u(O), x = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return x;
    for (const g of w.split("&")) {
      if (g === "")
        continue;
      let [l, y] = n(O.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? y : d(y, O), b(d(l, O), y, x);
    }
    for (const g of Object.keys(x)) {
      const l = x[g];
      if (typeof l == "object" && l !== null)
        for (const y of Object.keys(l))
          l[y] = S(l[y], O);
      else
        x[g] = S(l, O);
    }
    return O.sort === !1 ? x : (O.sort === !0 ? Object.keys(x).sort() : Object.keys(x).sort(O.sort)).reduce((g, l) => {
      const y = x[l];
      return y && typeof y == "object" && !Array.isArray(y) ? g[l] = p(y) : g[l] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = A, t.stringify = (w, O) => {
    if (!w)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), c(O.arrayFormatSeparator);
    const b = (y) => O.skipNull && i(w[y]) || O.skipEmptyString && w[y] === "", x = o(O), g = {};
    for (const y of Object.keys(w))
      b(y) || (g[y] = w[y]);
    const l = Object.keys(g);
    return O.sort !== !1 && l.sort(O.sort), l.map((y) => {
      const C = w[y];
      return C === void 0 ? "" : C === null ? f(y, O) : Array.isArray(C) ? C.length === 0 && O.arrayFormat === "bracket-separator" ? f(y, O) + "[]" : C.reduce(x(y), []).join("&") : f(y, O) + "=" + f(C, O);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (w, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [b, x] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: A(E(w), O)
      },
      O && O.parseFragmentIdentifier && x ? { fragmentIdentifier: d(x, O) } : {}
    );
  }, t.stringifyUrl = (w, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, O);
    const b = m(w.url).split("?")[0] || "", x = t.extract(w.url), g = t.parse(x, { sort: !1 }), l = Object.assign(g, w.query);
    let y = t.stringify(l, O);
    y && (y = `?${y}`);
    let C = v(w.url);
    return w.fragmentIdentifier && (C = `#${O[a] ? f(w.fragmentIdentifier, O) : w.fragmentIdentifier}`), `${b}${y}${C}`;
  }, t.pick = (w, O, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, b);
    const { url: x, query: g, fragmentIdentifier: l } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: x,
      query: s(g, O),
      fragmentIdentifier: l
    }, b);
  }, t.exclude = (w, O, b) => {
    const x = Array.isArray(O) ? (g) => !O.includes(g) : (g, l) => !O(g, l);
    return t.pick(w, x, b);
  };
})(zs);
const i0 = {
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
const Eh = "base10", Gt = "base16", $a = "base64pad", Nc = "utf8", Sh = 0, kn = 1, o0 = 0, al = 1, ka = 12, Lc = 32;
function a0() {
  const t = Rc.generateKeyPair();
  return { privateKey: Qt(t.secretKey, Gt), publicKey: Qt(t.publicKey, Gt) };
}
function qa() {
  const t = ps.randomBytes(Lc);
  return Qt(t, Gt);
}
function c0(t, e) {
  const r = Rc.sharedKey(tr(t, Gt), tr(e, Gt), !0), n = new Cv(Uo.SHA256, r).expand(Lc);
  return Qt(n, Gt);
}
function u0(t) {
  const e = Uo.hash(tr(t, Gt));
  return Qt(e, Gt);
}
function Jn(t) {
  const e = Uo.hash(tr(t, Nc));
  return Qt(e, Gt);
}
function l0(t) {
  return tr(`${t}`, Eh);
}
function wi(t) {
  return Number(Qt(t, Eh));
}
function f0(t) {
  const e = l0(typeof t.type < "u" ? t.type : Sh);
  if (wi(e) === kn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? tr(t.senderPublicKey, Gt) : void 0, n = typeof t.iv < "u" ? tr(t.iv, Gt) : ps.randomBytes(ka), s = new Ic.ChaCha20Poly1305(tr(t.symKey, Gt)).seal(n, tr(t.message, Nc));
  return d0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function h0(t) {
  const e = new Ic.ChaCha20Poly1305(tr(t.symKey, Gt)), { sealed: r, iv: n } = co(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Qt(s, Nc);
}
function d0(t) {
  if (wi(t.type) === kn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Qt(Ma([t.type, t.senderPublicKey, t.iv, t.sealed]), $a);
  }
  return Qt(Ma([t.type, t.iv, t.sealed]), $a);
}
function co(t) {
  const e = tr(t, $a), r = e.slice(o0, al), n = al;
  if (wi(r) === kn) {
    const o = n + Lc, u = o + ka, c = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: c };
  }
  const s = n + ka, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function p0(t, e) {
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
var g0 = Object.defineProperty, ul = Object.getOwnPropertySymbols, y0 = Object.prototype.hasOwnProperty, m0 = Object.prototype.propertyIsEnumerable, ll = (t, e, r) => e in t ? g0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fl = (t, e) => {
  for (var r in e || (e = {}))
    y0.call(e, r) && ll(t, r, e[r]);
  if (ul)
    for (var r of ul(e))
      m0.call(e, r) && ll(t, r, e[r]);
  return t;
};
const v0 = "ReactNative", or = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, b0 = "js";
function Fc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ys() {
  return !Tc() && !!Ac() && navigator.product === v0;
}
function ms() {
  return !Fc() && !!Ac() && !!Tc();
}
function _i() {
  return ys() ? or.reactNative : Fc() ? or.node : ms() ? or.browser : or.unknown;
}
function w0() {
  var t;
  try {
    return ys() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function _0(t, e) {
  let r = zs.parse(t);
  return r = fl(fl({}, r), e), t = zs.stringify(r), t;
}
function E0() {
  return bh() || { name: "", description: "", url: "", icons: [""] };
}
function S0() {
  if (_i() === or.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Uv();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function x0() {
  var t;
  const e = _i();
  return e === or.browser ? [e, ((t = vh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function O0(t, e, r) {
  const n = S0(), s = x0();
  return [[t, e].join("-"), [b0, r].join("-"), n, s].join("/");
}
function D0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const u = r.split("?"), c = O0(t, e, n), f = { auth: s, ua: c, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, d = _0(u[1] || "", f);
  return u[0] + "?" + d;
}
function In(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Oh(t) {
  return Object.fromEntries(t.entries());
}
function Dh(t) {
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
function I0(t) {
  return Ih("topic", t);
}
function C0(t) {
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
function vr(t, e) {
  return se.fromMiliseconds((e || Date.now()) + se.toMiliseconds(t));
}
function nn(t) {
  return Date.now() >= se.toMiliseconds(t);
}
function wt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function R0({ id: t, topic: e, wcDeepLink: r }) {
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
async function T0(t, e) {
  try {
    return await t.getItem(e) || (ms() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const A0 = "irn";
function Ba(t) {
  return (t == null ? void 0 : t.relay) || { protocol: A0 };
}
function Xi(t) {
  const e = i0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var P0 = Object.defineProperty, hl = Object.getOwnPropertySymbols, N0 = Object.prototype.hasOwnProperty, L0 = Object.prototype.propertyIsEnumerable, dl = (t, e, r) => e in t ? P0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, F0 = (t, e) => {
  for (var r in e || (e = {}))
    N0.call(e, r) && dl(t, r, e[r]);
  if (hl)
    for (var r of hl(e))
      L0.call(e, r) && dl(t, r, e[r]);
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
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = zs.parse(i);
  return { protocol: n, topic: U0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: M0(a) };
}
function U0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function j0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function $0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + zs.stringify(F0({ symKey: t.symKey }, j0(t.relay)));
}
function vs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function k0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...vs(r.accounts));
  }), e;
}
function q0(t, e) {
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
function z0(t, e) {
  const r = eo(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [s, i] of Object.entries(t))
    n[s] = { methods: i.methods, events: i.events, chains: i.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const V0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, K0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(t, e) {
  const { message: r, code: n } = K0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function pt(t, e) {
  const { message: r, code: n } = V0[t];
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
function Dt(t, e) {
  return e && Kt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Mc(t, e) {
  return e && Kt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function H0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return In(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: c } = t.namespaces[a], f = vs(o), d = r[a];
    (!In(_h(a, d), f) || !In(d.methods, u) || !In(d.events, c)) && (i = !1);
  }), i) : !1;
}
function uo(t) {
  return Dt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function W0(t) {
  if (Dt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && uo(r);
    }
  }
  return !1;
}
function G0(t) {
  if (Dt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Q0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Z0(t) {
  return t == null ? void 0 : t.topic;
}
function Y0(t, e) {
  let r = null;
  return Dt(t == null ? void 0 : t.publicKey, !1) || (r = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function gl(t) {
  let e = !0;
  return Ei(t) ? t.length && (e = t.every((r) => Dt(r, !1))) : e = !1, e;
}
function J0(t, e, r) {
  let n = null;
  return Ei(e) && e.length ? e.forEach((s) => {
    n || uo(s) || (n = pt("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : uo(t) || (n = pt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function X0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = J0(s, _h(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function eb(t, e) {
  let r = null;
  return Ei(t) ? t.forEach((n) => {
    r || W0(n) || (r = pt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = pt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function tb(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = eb(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function rb(t, e) {
  let r = null;
  return gl(t == null ? void 0 : t.methods) ? gl(t == null ? void 0 : t.events) || (r = pt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = pt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Rh(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = rb(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function nb(t, e, r) {
  let n = null;
  if (t && $s(t)) {
    const s = Rh(t, e);
    s && (n = s);
    const i = X0(t, e, r);
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
    const s = tb(t, e);
    s && (r = s);
  } else
    r = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Th(t) {
  return Dt(t.protocol, !0);
}
function sb(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Ei(t) && t.length && t.forEach((n) => {
    r = Th(n);
  }), r;
}
function ib(t) {
  return typeof t == "number";
}
function er(t) {
  return typeof t < "u" && typeof t !== null;
}
function ob(t) {
  return !(!t || typeof t != "object" || !t.code || !Mc(t.code, !1) || !t.message || !Dt(t.message, !1));
}
function ab(t) {
  return !(Kt(t) || !Dt(t.method, !1));
}
function cb(t) {
  return !(Kt(t) || Kt(t.result) && Kt(t.error) || !Mc(t.id, !1) || !Dt(t.jsonrpc, !1));
}
function ub(t) {
  return !(Kt(t) || !Dt(t.name, !1));
}
function yl(t, e) {
  return !(!uo(e) || !k0(t).includes(e));
}
function lb(t, e, r) {
  return Dt(r, !1) ? q0(t, e).includes(r) : !1;
}
function fb(t, e, r) {
  return Dt(r, !1) ? B0(t, e).includes(r) : !1;
}
function ml(t, e, r) {
  let n = null;
  const s = hb(t), i = db(e), a = Object.keys(s), o = Object.keys(i), u = vl(Object.keys(t)), c = vl(Object.keys(e)), f = u.filter((d) => !c.includes(d));
  return f.length && (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), In(a, o) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const p = vs(e[d].accounts);
    p.includes(d) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`));
  }), a.forEach((d) => {
    n || (In(s[d].methods, i[d].methods) ? In(s[d].events, i[d].events) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function hb(t) {
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
function db(t) {
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
function pb(t, e) {
  return Mc(t, !1) && t <= e.max && t >= e.min;
}
function bl() {
  const t = _i();
  return new Promise((e) => {
    switch (t) {
      case or.browser:
        e(gb());
        break;
      case or.reactNative:
        e(yb());
        break;
      case or.node:
        e(mb());
        break;
      default:
        e(!0);
    }
  });
}
function gb() {
  return ms() && (navigator == null ? void 0 : navigator.onLine);
}
async function yb() {
  if (ys() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function mb() {
  return !0;
}
function vb(t) {
  switch (_i()) {
    case or.browser:
      bb(t);
      break;
    case or.reactNative:
      wb(t);
      break;
  }
}
function bb(t) {
  !ys() && ms() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function wb(t) {
  ys() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const ua = {};
let Bi = class {
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
const _b = "PARSE_ERROR", Eb = "INVALID_REQUEST", Sb = "METHOD_NOT_FOUND", xb = "INVALID_PARAMS", Ah = "INTERNAL_ERROR", Uc = "SERVER_ERROR", Ob = [-32700, -32600, -32601, -32602, -32603], ks = {
  [_b]: { code: -32700, message: "Parse error" },
  [Eb]: { code: -32600, message: "Invalid Request" },
  [Sb]: { code: -32601, message: "Method not found" },
  [xb]: { code: -32602, message: "Invalid params" },
  [Ah]: { code: -32603, message: "Internal error" },
  [Uc]: { code: -32e3, message: "Server error" }
}, Ph = Uc;
function Db(t) {
  return Ob.includes(t);
}
function wl(t) {
  return Object.keys(ks).includes(t) ? ks[t] : ks[Ph];
}
function Ib(t) {
  const e = Object.values(ks).find((r) => r.code === t);
  return e || ks[Ph];
}
function Cb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Nh = {}, kr = {}, _l;
function Rb() {
  if (_l)
    return kr;
  _l = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.isBrowserCryptoAvailable = kr.getSubtleCrypto = kr.getBrowerCrypto = void 0;
  function t() {
    return (Lr == null ? void 0 : Lr.crypto) || (Lr == null ? void 0 : Lr.msCrypto) || {};
  }
  kr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  kr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return kr.isBrowserCryptoAvailable = r, kr;
}
var qr = {}, El;
function Tb() {
  if (El)
    return qr;
  El = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.isBrowser = qr.isNode = qr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  qr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  qr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return qr.isBrowser = r, qr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(Rb(), t), e.__exportStar(Tb(), t);
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
    error: Ab(e, r)
  };
}
function Ab(t, e) {
  return typeof t > "u" ? wl(Ah) : (typeof t == "string" && (t = Object.assign(Object.assign({}, wl(Uc)), { message: t })), typeof e < "u" && (t.data = e), Db(t.code) && (t = Ib(t.code)), t);
}
class Pb {
}
class Nb extends Pb {
  constructor() {
    super();
  }
}
class Lb extends Nb {
  constructor(e) {
    super();
  }
}
const Fb = "^wss?:";
function Mb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Ub(t, e) {
  const r = Mb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Sl(t) {
  return Ub(t, Fb);
}
function jb(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Fh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function qc(t) {
  return Fh(t) && "method" in t;
}
function jo(t) {
  return Fh(t) && (Vr(t) || br(t));
}
function Vr(t) {
  return "result" in t;
}
function br(t) {
  return "error" in t;
}
class $b extends Lb {
  constructor(e) {
    super(e), this.events = new pr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
        br(i) ? s(i.error) : n(i.result);
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
const kb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), qb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", xl = (t) => t.split("?")[0], Ol = 10, Bb = kb();
class zb {
  constructor(e) {
    if (this.url = e, this.events = new pr.EventEmitter(), this.registering = !1, !Sl(e))
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
      const s = new URLSearchParams(e).get("origin"), i = Nh.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !jb(e) }, a = new Bb(e, [], i);
      qb() ? a.onerror = (o) => {
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
    return Cb(e, xl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ol && this.events.setMaxListeners(Ol);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${xl(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var lo = { exports: {} };
lo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", E = "[object Map]", S = "[object Number]", A = "[object Null]", w = "[object Object]", O = "[object Promise]", b = "[object Proxy]", x = "[object RegExp]", g = "[object Set]", l = "[object String]", y = "[object Symbol]", C = "[object Undefined]", T = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", G = "[object Float32Array]", R = "[object Float64Array]", L = "[object Int8Array]", Q = "[object Int16Array]", V = "[object Int32Array]", k = "[object Uint8Array]", z = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", K = "[object Uint32Array]", fe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ae = /^(?:0|[1-9]\d*)$/, te = {};
  te[G] = te[R] = te[L] = te[Q] = te[V] = te[k] = te[z] = te[$] = te[K] = !0, te[o] = te[u] = te[U] = te[f] = te[B] = te[d] = te[p] = te[m] = te[E] = te[S] = te[w] = te[x] = te[g] = te[l] = te[T] = !1;
  var oe = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, M = typeof self == "object" && self && self.Object === Object && self, F = oe || M || Function("return this")(), P = e && !e.nodeType && e, h = P && !0 && t && !t.nodeType && t, I = h && h.exports === P, Z = I && oe.process, X = function() {
    try {
      return Z && Z.binding && Z.binding("util");
    } catch {
    }
  }(), De = X && X.isTypedArray;
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
  }(), Me = ce.toString, ke = RegExp(
    "^" + Ce.call(he).replace(fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = I ? F.Buffer : void 0, je = F.Symbol, nr = F.Uint8Array, cr = ce.propertyIsEnumerable, Ir = ge.splice, Ct = je ? je.toStringTag : void 0, Cr = Object.getOwnPropertySymbols, ur = qe ? qe.isBuffer : void 0, Yr = Se(Object.keys, Object), Xe = qn(F, "DataView"), Qe = qn(F, "Map"), ot = qn(F, "Promise"), rt = qn(F, "Set"), at = qn(F, "WeakMap"), Ze = qn(Object, "create"), ft = yn(Xe), gt = yn(Qe), yt = yn(ot), ht = yn(rt), mt = yn(at), dt = je ? je.prototype : void 0, ct = dt ? dt.valueOf : void 0;
  function We(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function D() {
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
  We.prototype.clear = D, We.prototype.delete = j, We.prototype.get = J, We.prototype.has = ue, We.prototype.set = $e;
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
    return q == ne ? N.pop() : Ir.call(N, q, 1), --this.size, !0;
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
  function vt(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Jr() {
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
  function gr(_) {
    return Ni(this, _).get(_);
  }
  function Jd(_) {
    return Ni(this, _).has(_);
  }
  function Xd(_, N) {
    var q = Ni(this, _), ne = q.size;
    return q.set(_, N), this.size += q.size == ne ? 0 : 1, this;
  }
  vt.prototype.clear = Jr, vt.prototype.delete = Ti, vt.prototype.get = gr, vt.prototype.has = Jd, vt.prototype.set = Xd;
  function Ai(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.__data__ = new vt(); ++N < q; )
      this.add(_[N]);
  }
  function ep(_) {
    return this.__data__.set(_, n), this;
  }
  function tp(_) {
    return this.__data__.has(_);
  }
  Ai.prototype.add = Ai.prototype.push = ep, Ai.prototype.has = tp;
  function Xr(_) {
    var N = this.__data__ = new Pe(_);
    this.size = N.size;
  }
  function rp() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function np(_) {
    var N = this.__data__, q = N.delete(_);
    return this.size = N.size, q;
  }
  function sp(_) {
    return this.__data__.get(_);
  }
  function ip(_) {
    return this.__data__.has(_);
  }
  function op(_, N) {
    var q = this.__data__;
    if (q instanceof Pe) {
      var ne = q.__data__;
      if (!Qe || ne.length < r - 1)
        return ne.push([_, N]), this.size = ++q.size, this;
      q = this.__data__ = new vt(ne);
    }
    return q.set(_, N), this.size = q.size, this;
  }
  Xr.prototype.clear = rp, Xr.prototype.delete = np, Xr.prototype.get = sp, Xr.prototype.has = ip, Xr.prototype.set = op;
  function ap(_, N) {
    var q = Li(_), ne = !q && Ep(_), Ye = !q && !ne && Qo(_), ve = !q && !ne && !Ye && lu(_), lt = q || ne || Ye || ve, Et = lt ? Je(_.length, String) : [], Tt = Et.length;
    for (var st in _)
      (N || he.call(_, st)) && !(lt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (st == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ye && (st == "offset" || st == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ve && (st == "buffer" || st == "byteLength" || st == "byteOffset") || // Skip index properties.
      mp(st, Tt))) && Et.push(st);
    return Et;
  }
  function Pi(_, N) {
    for (var q = _.length; q--; )
      if (ou(_[q][0], N))
        return q;
    return -1;
  }
  function cp(_, N, q) {
    var ne = N(_);
    return Li(_) ? ne : we(ne, q(_));
  }
  function ws(_) {
    return _ == null ? _ === void 0 ? C : A : Ct && Ct in Object(_) ? gp(_) : _p(_);
  }
  function ru(_) {
    return _s(_) && ws(_) == o;
  }
  function nu(_, N, q, ne, Ye) {
    return _ === N ? !0 : _ == null || N == null || !_s(_) && !_s(N) ? _ !== _ && N !== N : up(_, N, q, ne, nu, Ye);
  }
  function up(_, N, q, ne, Ye, ve) {
    var lt = Li(_), Et = Li(N), Tt = lt ? u : en(_), st = Et ? u : en(N);
    Tt = Tt == o ? w : Tt, st = st == o ? w : st;
    var sr = Tt == w, yr = st == w, Lt = Tt == st;
    if (Lt && Qo(_)) {
      if (!Qo(N))
        return !1;
      lt = !0, sr = !1;
    }
    if (Lt && !sr)
      return ve || (ve = new Xr()), lt || lu(_) ? su(_, N, q, ne, Ye, ve) : dp(_, N, Tt, q, ne, Ye, ve);
    if (!(q & s)) {
      var lr = sr && he.call(_, "__wrapped__"), fr = yr && he.call(N, "__wrapped__");
      if (lr || fr) {
        var tn = lr ? _.value() : _, $r = fr ? N.value() : N;
        return ve || (ve = new Xr()), Ye(tn, $r, q, ne, ve);
      }
    }
    return Lt ? (ve || (ve = new Xr()), pp(_, N, q, ne, Ye, ve)) : !1;
  }
  function lp(_) {
    if (!uu(_) || bp(_))
      return !1;
    var N = au(_) ? ke : H;
    return N.test(yn(_));
  }
  function fp(_) {
    return _s(_) && cu(_.length) && !!te[ws(_)];
  }
  function hp(_) {
    if (!wp(_))
      return Yr(_);
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
    var sr = -1, yr = !0, Lt = q & i ? new Ai() : void 0;
    for (ve.set(_, N), ve.set(N, _); ++sr < Et; ) {
      var lr = _[sr], fr = N[sr];
      if (ne)
        var tn = lt ? ne(fr, lr, sr, N, _, ve) : ne(lr, fr, sr, _, N, ve);
      if (tn !== void 0) {
        if (tn)
          continue;
        yr = !1;
        break;
      }
      if (Lt) {
        if (!Fe(N, function($r, mn) {
          if (!Ne(Lt, mn) && (lr === $r || Ye(lr, $r, q, ne, ve)))
            return Lt.push(mn);
        })) {
          yr = !1;
          break;
        }
      } else if (!(lr === fr || Ye(lr, fr, q, ne, ve))) {
        yr = !1;
        break;
      }
    }
    return ve.delete(_), ve.delete(N), yr;
  }
  function dp(_, N, q, ne, Ye, ve, lt) {
    switch (q) {
      case B:
        if (_.byteLength != N.byteLength || _.byteOffset != N.byteOffset)
          return !1;
        _ = _.buffer, N = N.buffer;
      case U:
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
  function pp(_, N, q, ne, Ye, ve) {
    var lt = q & s, Et = iu(_), Tt = Et.length, st = iu(N), sr = st.length;
    if (Tt != sr && !lt)
      return !1;
    for (var yr = Tt; yr--; ) {
      var Lt = Et[yr];
      if (!(lt ? Lt in N : he.call(N, Lt)))
        return !1;
    }
    var lr = ve.get(_);
    if (lr && ve.get(N))
      return lr == N;
    var fr = !0;
    ve.set(_, N), ve.set(N, _);
    for (var tn = lt; ++yr < Tt; ) {
      Lt = Et[yr];
      var $r = _[Lt], mn = N[Lt];
      if (ne)
        var fu = lt ? ne(mn, $r, Lt, N, _, ve) : ne($r, mn, Lt, _, N, ve);
      if (!(fu === void 0 ? $r === mn || Ye($r, mn, q, ne, ve) : fu)) {
        fr = !1;
        break;
      }
      tn || (tn = Lt == "constructor");
    }
    if (fr && !tn) {
      var Fi = _.constructor, Mi = N.constructor;
      Fi != Mi && "constructor" in _ && "constructor" in N && !(typeof Fi == "function" && Fi instanceof Fi && typeof Mi == "function" && Mi instanceof Mi) && (fr = !1);
    }
    return ve.delete(_), ve.delete(N), fr;
  }
  function iu(_) {
    return cp(_, Op, yp);
  }
  function Ni(_, N) {
    var q = _.__data__;
    return vp(N) ? q[typeof N == "string" ? "string" : "hash"] : q.map;
  }
  function qn(_, N) {
    var q = Te(_, N);
    return lp(q) ? q : void 0;
  }
  function gp(_) {
    var N = he.call(_, Ct), q = _[Ct];
    try {
      _[Ct] = void 0;
      var ne = !0;
    } catch {
    }
    var Ye = Me.call(_);
    return ne && (N ? _[Ct] = q : delete _[Ct]), Ye;
  }
  var yp = Cr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Ie(Cr(_), function(N) {
      return cr.call(_, N);
    }));
  } : Dp, en = ws;
  (Xe && en(new Xe(new ArrayBuffer(1))) != B || Qe && en(new Qe()) != E || ot && en(ot.resolve()) != O || rt && en(new rt()) != g || at && en(new at()) != T) && (en = function(_) {
    var N = ws(_), q = N == w ? _.constructor : void 0, ne = q ? yn(q) : "";
    if (ne)
      switch (ne) {
        case ft:
          return B;
        case gt:
          return E;
        case yt:
          return O;
        case ht:
          return g;
        case mt:
          return T;
      }
    return N;
  });
  function mp(_, N) {
    return N = N ?? a, !!N && (typeof _ == "number" || ae.test(_)) && _ > -1 && _ % 1 == 0 && _ < N;
  }
  function vp(_) {
    var N = typeof _;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function bp(_) {
    return !!Ae && Ae in _;
  }
  function wp(_) {
    var N = _ && _.constructor, q = typeof N == "function" && N.prototype || ce;
    return _ === q;
  }
  function _p(_) {
    return Me.call(_);
  }
  function yn(_) {
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
  var Ep = ru(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ru : function(_) {
    return _s(_) && he.call(_, "callee") && !cr.call(_, "callee");
  }, Li = Array.isArray;
  function Sp(_) {
    return _ != null && cu(_.length) && !au(_);
  }
  var Qo = ur || Ip;
  function xp(_, N) {
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
  var lu = De ? He(De) : fp;
  function Op(_) {
    return Sp(_) ? ap(_) : hp(_);
  }
  function Dp() {
    return [];
  }
  function Ip() {
    return !1;
  }
  t.exports = xp;
})(lo, lo.exports);
var Vb = lo.exports;
const Kb = /* @__PURE__ */ pi(Vb);
function Hb(t, e) {
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
const Wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hb
}, Symbol.toStringTag, { value: "Module" })), Dl = /* @__PURE__ */ Ro(Wb);
var Gb = self.fetch || (self.fetch = Dl.default || Dl);
const Qb = /* @__PURE__ */ pi(Gb);
function Zb(t, e) {
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
    for (var O = (w - A) * f + 1 >>> 0, b = new Uint8Array(O); A !== w; ) {
      for (var x = v[A], g = 0, l = O - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, A++;
    }
    for (var y = O - S; y !== O && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < O; ++y)
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
      for (var w = (v.length - E) * c + 1 >>> 0, O = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < A) && g !== -1; g--, x++)
          b += o * O[g] >>> 0, O[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        A = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - A; l !== w && O[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = O[l++];
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
var Yb = Zb, Jb = Yb;
const Mh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Xb = (t) => new TextEncoder().encode(t), ew = (t) => new TextDecoder().decode(t);
class tw {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class rw {
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
    return Uh(this, e);
  }
}
class nw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Uh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Uh = (t, e) => new nw({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class sw {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new tw(e, r, n), this.decoder = new rw(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const $o = ({ name: t, prefix: e, encode: r, decode: n }) => new sw(t, e, r, n), Si = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Jb(r, e);
  return $o({ prefix: t, name: e, encode: n, decode: (i) => Mh(s(i)) });
}, iw = (t, e, r, n) => {
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
}, ow = (t, e, r) => {
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
  return ow(s, n, r);
}, decode(s) {
  return iw(s, n, r, t);
} }), aw = $o({ prefix: "\0", name: "identity", encode: (t) => ew(t), decode: (t) => Xb(t) });
var cw = Object.freeze({ __proto__: null, identity: aw });
const uw = Nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var lw = Object.freeze({ __proto__: null, base2: uw });
const fw = Nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var hw = Object.freeze({ __proto__: null, base8: fw });
const dw = Si({ prefix: "9", name: "base10", alphabet: "0123456789" });
var pw = Object.freeze({ __proto__: null, base10: dw });
const gw = Nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yw = Nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var mw = Object.freeze({ __proto__: null, base16: gw, base16upper: yw });
const vw = Nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), bw = Nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), ww = Nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), _w = Nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Ew = Nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Sw = Nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), xw = Nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Ow = Nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Dw = Nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Iw = Object.freeze({ __proto__: null, base32: vw, base32upper: bw, base32pad: ww, base32padupper: _w, base32hex: Ew, base32hexupper: Sw, base32hexpad: xw, base32hexpadupper: Ow, base32z: Dw });
const Cw = Si({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Rw = Si({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Tw = Object.freeze({ __proto__: null, base36: Cw, base36upper: Rw });
const Aw = Si({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Pw = Si({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Nw = Object.freeze({ __proto__: null, base58btc: Aw, base58flickr: Pw });
const Lw = Nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Fw = Nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Mw = Nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Uw = Nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var jw = Object.freeze({ __proto__: null, base64: Lw, base64pad: Fw, base64url: Mw, base64urlpad: Uw });
const jh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), $w = jh.reduce((t, e, r) => (t[r] = e, t), []), kw = jh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function qw(t) {
  return t.reduce((e, r) => (e += $w[r], e), "");
}
function Bw(t) {
  const e = [];
  for (const r of t) {
    const n = kw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const zw = $o({ prefix: "🚀", name: "base256emoji", encode: qw, decode: Bw });
var Vw = Object.freeze({ __proto__: null, base256emoji: zw }), Kw = $h, Il = 128, Hw = 127, Ww = ~Hw, Gw = Math.pow(2, 31);
function $h(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= Gw; )
    e[r++] = t & 255 | Il, t /= 128;
  for (; t & Ww; )
    e[r++] = t & 255 | Il, t >>>= 7;
  return e[r] = t | 0, $h.bytes = r - n + 1, e;
}
var Qw = za, Zw = 128, Cl = 127;
function za(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw za.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & Cl) << s : (a & Cl) * Math.pow(2, s), s += 7;
  } while (a >= Zw);
  return za.bytes = i - n, r;
}
var Yw = Math.pow(2, 7), Jw = Math.pow(2, 14), Xw = Math.pow(2, 21), e_ = Math.pow(2, 28), t_ = Math.pow(2, 35), r_ = Math.pow(2, 42), n_ = Math.pow(2, 49), s_ = Math.pow(2, 56), i_ = Math.pow(2, 63), o_ = function(t) {
  return t < Yw ? 1 : t < Jw ? 2 : t < Xw ? 3 : t < e_ ? 4 : t < t_ ? 5 : t < r_ ? 6 : t < n_ ? 7 : t < s_ ? 8 : t < i_ ? 9 : 10;
}, a_ = { encode: Kw, decode: Qw, encodingLength: o_ }, kh = a_;
const Rl = (t, e, r = 0) => (kh.encode(t, e, r), e), Tl = (t) => kh.encodingLength(t), Va = (t, e) => {
  const r = e.byteLength, n = Tl(t), s = n + Tl(r), i = new Uint8Array(s + r);
  return Rl(t, i, 0), Rl(r, i, n), i.set(e, s), new c_(t, r, e, i);
};
class c_ {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const qh = ({ name: t, code: e, encode: r }) => new u_(t, e, r);
class u_ {
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
const Bh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), l_ = qh({ name: "sha2-256", code: 18, encode: Bh("SHA-256") }), f_ = qh({ name: "sha2-512", code: 19, encode: Bh("SHA-512") });
var h_ = Object.freeze({ __proto__: null, sha256: l_, sha512: f_ });
const zh = 0, d_ = "identity", Vh = Mh, p_ = (t) => Va(zh, Vh(t)), g_ = { code: zh, name: d_, encode: Vh, digest: p_ };
var y_ = Object.freeze({ __proto__: null, identity: g_ });
new TextEncoder(), new TextDecoder();
const Al = { ...cw, ...lw, ...hw, ...pw, ...mw, ...Iw, ...Tw, ...Nw, ...jw, ...Vw };
({ ...h_, ...y_ });
function Kh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function m_(t = 0) {
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
  const e = m_(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), v_ = { utf8: Pl, "utf-8": Pl, hex: Al.base16, latin1: la, ascii: la, binary: la, ...Al };
function b_(t, e = "utf8") {
  const r = v_[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Kh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Wh = "wc", w_ = 2, Bc = "core", cn = `${Wh}@2:${Bc}:`, __ = { name: Bc, logger: "error" }, E_ = { database: ":memory:" }, S_ = "crypto", Nl = "client_ed25519_seed", x_ = se.ONE_DAY, O_ = "keychain", D_ = "0.3", I_ = "messages", C_ = "0.3", R_ = se.SIX_HOURS, T_ = "publisher", Gh = "irn", A_ = "error", Qh = "wss://relay.walletconnect.com", Ll = "wss://relay.walletconnect.org", P_ = "relayer", kt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, N_ = "_subscription", Br = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, L_ = se.ONE_SECOND, F_ = "2.11.0", M_ = 1e4, U_ = "0.3", j_ = "WALLETCONNECT_CLIENT_ID", mr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, $_ = "subscription", k_ = "0.3", q_ = se.FIVE_SECONDS * 1e3, B_ = "pairing", z_ = "0.3", Is = { wc_pairingDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 0 } } }, Ns = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Pr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, V_ = "history", K_ = "0.3", H_ = "expirer", hr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, W_ = "0.3", fa = "verify-api", Gn = "https://verify.walletconnect.com", Ka = "https://verify.walletconnect.org", G_ = [Gn, Ka], Q_ = "echo", Z_ = "https://echo.walletconnect.com";
class Y_ {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = O_, this.version = D_, this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
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
    }, this.core = e, this.logger = Ue.generateChildLogger(r, this.name);
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Oh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Dh(e) : void 0;
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
class J_ {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = S_, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Yu(s);
      return hh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = a0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Yu(i), o = qa();
      return await gv(o, s, x_, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), u = c0(o, i);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || u0(s);
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
      return f0({ type: f, symKey: c, message: u, senderPublicKey: d });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = p0(i, a);
      if (cl(o)) {
        const u = o.receiverPublicKey, c = o.senderPublicKey;
        s = await this.generateSharedKey(u, c);
      }
      try {
        const u = this.getSymKey(s), c = h0({ symKey: u, encoded: i });
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
    }, this.core = e, this.logger = Ue.generateChildLogger(r, this.name), this.keychain = n || new Y_(this.core, this.logger);
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
    return b_(e, "base16");
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
class X_ extends by {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = I_, this.version = C_, this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
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
    }, this.logger = Ue.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Oh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Dh(e) : void 0;
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
class e1 extends wy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new pr.EventEmitter(), this.name = T_, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = se.toMiliseconds(se.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || R_, u = Ba(i), c = (i == null ? void 0 : i.prompt) || !1, f = (i == null ? void 0 : i.tag) || 0, d = (i == null ? void 0 : i.id) || Lh().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: u, prompt: c, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, p), this.publishTimeout);
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
    }, this.relayer = e, this.logger = Ue.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
class t1 {
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
var r1 = Object.defineProperty, n1 = Object.defineProperties, s1 = Object.getOwnPropertyDescriptors, Fl = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, o1 = Object.prototype.propertyIsEnumerable, Ml = (t, e, r) => e in t ? r1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cs = (t, e) => {
  for (var r in e || (e = {}))
    i1.call(e, r) && Ml(t, r, e[r]);
  if (Fl)
    for (var r of Fl(e))
      o1.call(e, r) && Ml(t, r, e[r]);
  return t;
}, ha = (t, e) => n1(t, s1(e));
class a1 extends Sy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new t1(), this.events = new pr.EventEmitter(), this.name = $_, this.version = k_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = Ba(s), a = { topic: n, relay: i };
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
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= q_ && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = Ue.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
      const s = Ba(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = pt("USER_DISCONNECTED", `${this.name}, ${e}`);
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
    this.subscriptions.set(e, Cs({}, r)), this.topicMap.set(r.topic, e), this.events.emit(mr.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(mr.deleted, ha(Cs({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(mr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(mr.resubscribed);
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
    }), this.events.on(mr.created, async (e) => {
      const r = mr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(mr.deleted, async (e) => {
      const r = mr.deleted;
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
var c1 = Object.defineProperty, Ul = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, l1 = Object.prototype.propertyIsEnumerable, jl = (t, e, r) => e in t ? c1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, f1 = (t, e) => {
  for (var r in e || (e = {}))
    u1.call(e, r) && jl(t, r, e[r]);
  if (Ul)
    for (var r of Ul(e))
      l1.call(e, r) && jl(t, r, e[r]);
  return t;
};
class h1 extends _y {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new pr.EventEmitter(), this.name = P_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
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
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ue.generateChildLogger(e.logger, this.name) : Ue.pino(Ue.getDefaultLoggerOptions({ level: e.logger || A_ })), this.messages = new X_(this.logger, e.core), this.subscriber = new a1(this, this.logger), this.publisher = new e1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qh, this.projectId = e.projectId, this.bundleId = w0(), this.provider = {};
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
    return Ue.getLoggerContext(this.logger);
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
      o.topic === e && (this.subscriber.off(mr.created, a), i());
    };
    return await Promise.all([new Promise((o) => {
      i = o, this.subscriber.on(mr.created, a);
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
          this.subscriber.once(mr.resubscribed, () => {
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
    this.provider = new $b(new zb(D0({ sdkVersion: F_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
      if (!e.method.endsWith(N_))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(f1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
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
    vb(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(kt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, se.toMiliseconds(L_)));
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
var d1 = Object.defineProperty, $l = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, kl = (t, e, r) => e in t ? d1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ql = (t, e) => {
  for (var r in e || (e = {}))
    p1.call(e, r) && kl(t, r, e[r]);
  if ($l)
    for (var r of $l(e))
      g1.call(e, r) && kl(t, r, e[r]);
  return t;
};
class ko extends Ey {
  constructor(e, r, n, s = cn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = U_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !Kt(a) ? this.map.set(this.getKey(a), a) : Q0(a) ? this.map.set(a.id, a) : Z0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => Kb(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = ql(ql({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = Ue.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
class y1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = B_, this.version = z_, this.events = new gi(), this.initialized = !1, this.storagePrefix = cn, this.ignoredPayloadTypes = [kn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = qa(), s = await this.core.crypto.setSymKey(n), i = vr(se.FIVE_MINUTES), a = { protocol: Gh }, o = { topic: s, expiry: i, relay: a, active: !1 }, u = $0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a } = pl(n.uri);
      let o;
      if (this.pairings.keys.includes(s) && (o = this.pairings.get(s), o.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const u = vr(se.FIVE_MINUTES), c = { topic: s, relay: a, expiry: u, active: !1 };
      return await this.pairings.set(s, c), this.core.expirer.set(s, u), n.activatePairing && await this.activate({ topic: s }), this.events.emit(Ns.create, c), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a })), c;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = vr(se.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = Kn();
        this.events.once(wt("pairing_ping", i), ({ error: c }) => {
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
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", pt("USER_DISCONNECTED")), await this.deletePairing(s));
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
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, pt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => nn(s.expiry));
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
        Vr(s) ? this.events.emit(wt("pairing_ping", i), {}) : br(s) && this.events.emit(wt("pairing_ping", i), { error: s.error });
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
        const o = pt("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(pt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!er(n)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!G0(n.uri)) {
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
      if (!Dt(n, !1)) {
        const { message: s } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (nn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = Y("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Ue.generateChildLogger(r, this.name), this.pairings = new ko(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
    this.core.expirer.on(hr.expired, async (e) => {
      const { topic: r } = Ch(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ns.expire, { topic: r }));
    });
  }
}
class m1 extends vy {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new pr.EventEmitter(), this.name = V_, this.version = K_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: vr(se.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Pr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = br(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Pr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Pr.deleted, i);
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
    }, this.logger = Ue.generateChildLogger(r, this.name);
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
    await this.setJsonRpcRecords(this.values), this.events.emit(Pr.sync);
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
    this.events.on(Pr.created, (e) => {
      const r = Pr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Pr.updated, (e) => {
      const r = Pr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Pr.deleted, (e) => {
      const r = Pr.deleted;
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
class v1 extends xy {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new pr.EventEmitter(), this.name = H_, this.version = W_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
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
      this.expirations.set(i, a), this.checkExpiry(i, a), this.events.emit(hr.created, { target: i, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(hr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Ue.generateChildLogger(r, this.name);
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
      return I0(e);
    if (typeof e == "number")
      return C0(e);
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
    await this.setExpirations(this.values), this.events.emit(hr.sync);
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
    this.expirations.delete(e), this.events.emit(hr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ds.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(hr.created, (e) => {
      const r = hr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(hr.expired, (e) => {
      const r = hr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(hr.deleted, (e) => {
      const r = hr.deleted;
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
class b1 extends Oy {
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
      return G_.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Gn}`), s = Gn), s;
    }, this.logger = Ue.generateChildLogger(r, this.name), this.verifyUrl = Gn, this.abortController = new AbortController(), this.isDevEnv = Fc() && process.env.IS_VITEST;
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), se.toMiliseconds(e));
  }
}
class w1 extends Dy {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = Q_, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, u = `${Z_}/${this.projectId}/clients`;
      await Qb(u, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = Ue.generateChildLogger(r, this.context);
  }
}
var _1 = Object.defineProperty, Bl = Object.getOwnPropertySymbols, E1 = Object.prototype.hasOwnProperty, S1 = Object.prototype.propertyIsEnumerable, zl = (t, e, r) => e in t ? _1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vl = (t, e) => {
  for (var r in e || (e = {}))
    E1.call(e, r) && zl(t, r, e[r]);
  if (Bl)
    for (var r of Bl(e))
      S1.call(e, r) && zl(t, r, e[r]);
  return t;
};
class zc extends my {
  constructor(e) {
    super(e), this.protocol = Wh, this.version = w_, this.name = Bc, this.events = new pr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Qh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ue.pino(Ue.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || __.logger }));
    this.logger = Ue.generateChildLogger(r, this.name), this.heartbeat = new ds.HeartBeat(), this.crypto = new J_(this, this.logger, e == null ? void 0 : e.keychain), this.history = new m1(this, this.logger), this.expirer = new v1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Lg(Vl(Vl({}, E_), e == null ? void 0 : e.storageOptions)), this.relayer = new h1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new y1(this, this.logger), this.verify = new b1(this.projectId || "", this.logger), this.echoClient = new w1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new zc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(j_, n), r;
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
const x1 = zc, Zh = "wc", Yh = 2, Jh = "client", Vc = `${Zh}@${Yh}:${Jh}:`, da = { name: Jh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Kl = "WALLETCONNECT_DEEPLINK_CHOICE", O1 = "proposal", D1 = "Proposal expired", I1 = "session", zi = se.SEVEN_DAYS, C1 = "engine", Rs = { wc_sessionPropose: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, pa = { min: se.FIVE_MINUTES, max: se.SEVEN_DAYS }, zr = { idle: "IDLE", active: "ACTIVE" }, R1 = "request", T1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var A1 = Object.defineProperty, P1 = Object.defineProperties, N1 = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, L1 = Object.prototype.hasOwnProperty, F1 = Object.prototype.propertyIsEnumerable, Wl = (t, e, r) => e in t ? A1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jt = (t, e) => {
  for (var r in e || (e = {}))
    L1.call(e, r) && Wl(t, r, e[r]);
  if (Hl)
    for (var r of Hl(e))
      F1.call(e, r) && Wl(t, r, e[r]);
  return t;
}, Ts = (t, e) => P1(t, N1(e));
class M1 extends Cy {
  constructor(e) {
    super(e), this.name = C1, this.events = new gi(), this.initialized = !1, this.ignoredPayloadTypes = [kn], this.requestQueue = { state: zr.idle, queue: [] }, this.sessionRequestQueue = { state: zr.idle, queue: [] }, this.requestQueueDelay = se.ONE_SECOND, this.init = async () => {
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
        const { topic: O, uri: b } = await this.client.core.pairing.create();
        c = O, f = b;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = Jt({ requiredNamespaces: i, optionalNamespaces: a, relays: u ?? [{ protocol: Gh }], proposer: { publicKey: p, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: v, resolve: E, done: S } = Kn(se.FIVE_MINUTES, D1);
      if (this.events.once(wt("session_connect"), async ({ error: O, session: b }) => {
        if (O)
          v(O);
        else if (b) {
          b.self.publicKey = p;
          const x = Ts(Jt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, x), await this.setExpiry(b.topic, b.expiry), c && await this.client.core.pairing.updateMetadata({ topic: c, metadata: b.peer.metadata }), E(x);
        }
      }), !c) {
        const { message: O } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
        throw new Error(O);
      }
      const A = await this.sendRequest({ topic: c, method: "wc_sessionPropose", params: m }), w = vr(se.FIVE_MINUTES);
      return await this.setProposal(A, Jt({ id: A, expiry: w }, m)), { uri: f, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: c, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", $s(f) || (f = z0(i, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), m = c.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: c.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, pt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const E = Jt({ relay: { protocol: s ?? "irn" }, namespaces: i, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: p, metadata: this.client.metadata }, expiry: vr(zi) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(v), await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      const S = Ts(Jt({}, E), { topic: v, pairingTopic: u, acknowledged: !1, self: E.controller, peer: { publicKey: c.publicKey, metadata: c.metadata }, controller: p });
      return await this.client.session.set(v, S), await this.setExpiry(v, vr(zi)), { topic: v, acknowledged: () => new Promise((A) => setTimeout(() => A(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, pt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: u } = Kn();
      return this.events.once(wt("session_update", i), ({ error: c }) => {
        c ? u(c) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = Kn();
      return this.events.once(wt("session_extend", s), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, vr(zi)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a } = r, o = jc(), { done: u, resolve: c, reject: f } = Kn(a, "Request expired. Please try again.");
      return this.events.once(wt("session_request", o), ({ error: d, result: p }) => {
        d ? f(d) : c(p);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: s, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => f(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const p = await T0(this.client.core.storage, Kl);
        R0({ id: o, topic: i, wcDeepLink: p }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      Vr(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : br(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = Kn();
        this.events.once(wt("session_ping", s), ({ error: u }) => {
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: pt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => H0(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, pt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Kl).catch((i) => this.client.logger.warn(i)), this.getPendingSessionRequests().forEach((i) => {
        i.topic === r && this.deletePendingSessionRequest(i.id, pt("USER_DISCONNECTED"));
      });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, pt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = zr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Rs.wc_sessionRequest.req.ttl, { id: s, topic: i, params: a, verifyContext: o } = r;
      await this.client.pendingRequest.set(s, { id: s, topic: i, params: a, verifyContext: o }), n && this.client.core.expirer.set(s, vr(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: c } = r, f = Xn(s, i, u);
      if (ms() && T1.includes(s)) {
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
        nn(s.expiry) && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        nn(s.expiry) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession(s)), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === zr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = zr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = zr.idle;
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
        const a = vr(se.FIVE_MINUTES), o = Jt({ id: i, pairingTopic: r, expiry: a }, s);
        await this.setProposal(i, o);
        const u = Jn(JSON.stringify(n)), c = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: c });
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (Vr(n)) {
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
        br(n) && (await this.client.proposal.delete(s, pt("USER_DISCONNECTED")), this.events.emit(wt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: u, namespaces: c, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: p, pairingTopic: m } = n.params, v = Jt({ topic: r, relay: a, expiry: u, namespaces: c, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(wt("session_connect"), { session: v }), this.cleanupDuplicatePairings(v);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      Vr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(wt("session_approve", s), {})) : br(n) && (await this.client.session.delete(r, pt("USER_DISCONNECTED")), this.events.emit(wt("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = Bi.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Jt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), Bi.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      Vr(n) ? this.events.emit(wt("session_update", s), {}) : br(n) && this.events.emit(wt("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, vr(zi)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      Vr(n) ? this.events.emit(wt("session_extend", s), {}) : br(n) && this.events.emit(wt("session_extend", s), { error: n.error });
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
        Vr(n) ? this.events.emit(wt("session_ping", s), {}) : br(n) && this.events.emit(wt("session_ping", s), { error: n.error });
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
      Vr(n) ? this.events.emit(wt("session_request", s), { result: n.result }) : br(n) && this.events.emit(wt("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = Bi.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Jt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), Bi.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = zr.idle, this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === zr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = zr.active, this.client.events.emit("session_request", r);
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
      if (Kt(n) || await this.isValidPairingTopic(n), !sb(o, !0)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !Kt(s) && $s(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Kt(i) && $s(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Kt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = nb(r, "connect()", n);
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
      if (!Dt(i, !0)) {
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
      if (await this.isValidProposalId(n), !ob(s)) {
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
      const o = Y0(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = eo(i, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (nn(a)) {
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
      if (!ab(s)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(u);
      }
      if (!lb(o, i, s.method)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(u);
      }
      if (a && !pb(a, pa)) {
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
      if (!cb(i)) {
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
      if (!ub(s)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!fb(a, i, s.name)) {
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
        if (!Dt(s, !1)) {
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
    this.client.core.expirer.on(hr.expired, async (e) => {
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
    if (!Dt(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Dt(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.session.get(e).expiry)) {
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
    else if (Dt(e, !1)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!ib(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class U1 extends ko {
  constructor(e, r) {
    super(e, r, O1, Vc), this.core = e, this.logger = r;
  }
}
class j1 extends ko {
  constructor(e, r) {
    super(e, r, I1, Vc), this.core = e, this.logger = r;
  }
}
class $1 extends ko {
  constructor(e, r) {
    super(e, r, R1, Vc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Kc extends Iy {
  constructor(e) {
    super(e), this.protocol = Zh, this.version = Yh, this.name = da.name, this.events = new pr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || da.name, this.metadata = (e == null ? void 0 : e.metadata) || E0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ue.pino(Ue.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || da.logger }));
    this.core = (e == null ? void 0 : e.core) || new x1(e), this.logger = Ue.generateChildLogger(r, this.name), this.session = new j1(this.core, this.logger), this.proposal = new U1(this.core, this.logger), this.pendingRequest = new $1(this.core, this.logger), this.engine = new M1(this);
  }
  static async init(e) {
    const r = new Kc(e);
    return await r.initialize(), r;
  }
  get context() {
    return Ue.getLoggerContext(this.logger);
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
var k1 = Object.defineProperty, q1 = Object.defineProperties, B1 = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, z1 = Object.prototype.hasOwnProperty, V1 = Object.prototype.propertyIsEnumerable, Ql = (t, e, r) => e in t ? k1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, K1 = (t, e) => {
  for (var r in e || (e = {}))
    z1.call(e, r) && Ql(t, r, e[r]);
  if (Gl)
    for (var r of Gl(e))
      V1.call(e, r) && Ql(t, r, e[r]);
  return t;
}, H1 = (t, e) => q1(t, B1(e)), Hc = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, et = (t, e, r) => (Hc(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, fo = (t, e, r, n) => (Hc(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ut = (t, e, r) => (Hc(t, e, "access private method"), r), On, Hn, Ls, Ot, Ha, Xh, jt, Vt, Wa, Zl;
let W1 = class {
  constructor(e) {
    xn(this, Ha), xn(this, jt), xn(this, Wa), xn(this, On, void 0), xn(this, Hn, void 0), xn(this, Ls, void 0), xn(this, Ot, void 0), fo(this, On, e), fo(this, Hn, Ut(this, Ha, Xh).call(this)), Ut(this, jt, Vt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (s, i) => {
      await Ut(this, jt, Vt).call(this);
      const a = et(this, Hn).subscribeModal((c) => {
        c.open || (a(), i(new Error("Modal closed")));
      }), { uri: o, approval: u } = await et(this, Ot).connect(e);
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
    await Ut(this, jt, Vt).call(this), await et(this, Ot).disconnect(e);
  }
  async request(e) {
    return await Ut(this, jt, Vt).call(this), await et(this, Ot).request(e);
  }
  async getSessions() {
    return await Ut(this, jt, Vt).call(this), et(this, Ot).session.getAll();
  }
  async getSession() {
    return await Ut(this, jt, Vt).call(this), et(this, Ot).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_expire", e);
  }
};
On = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakSet(), Xh = function() {
  const { modalOptions: t, projectId: e } = et(this, On);
  return new Zp(H1(K1({}, t), { projectId: e }));
}, jt = /* @__PURE__ */ new WeakSet(), Vt = async function() {
  return et(this, Ot) ? !0 : (!et(this, Ls) && typeof window < "u" && fo(this, Ls, Ut(this, Wa, Zl).call(this)), et(this, Ls));
}, Wa = /* @__PURE__ */ new WeakSet(), Zl = async function() {
  fo(this, Ot, await Kc.init({ metadata: et(this, On).metadata, projectId: et(this, On).projectId, relayUrl: et(this, On).relayUrl }));
  const t = await et(this, Ot).core.crypto.getClientId();
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
], qo = ["aleo:1"], Gc = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], G1 = "f0aaeffe71b636da453fce042d79d723", Q1 = {
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
}, yD = {
  requiredNamespaces: {
    aleo: {
      methods: Wc,
      chains: qo,
      events: Gc
    }
  }
}, cs = new gi();
let Fs;
function Z1(t) {
  Fs = new W1({
    projectId: G1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Q1 }
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
var ze;
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
})(ze || (ze = {}));
var Ga;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ga || (Ga = {}));
const ee = ze.arrayToEnum([
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
]), on = (t) => {
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
}, W = ze.arrayToEnum([
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
]), Y1 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Er extends Error {
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
    return JSON.stringify(this.issues, ze.jsonStringifyReplacer, 2);
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
Er.create = (t) => new Er(t);
const Ks = (t, e) => {
  let r;
  switch (t.code) {
    case W.invalid_type:
      t.received === ee.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, ze.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ze.joinValues(t.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ze.joinValues(t.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${ze.joinValues(t.options)}, received '${t.received}'`;
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
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : ze.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
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
      r = e.defaultError, ze.assertNever(t);
  }
  return { message: r };
};
let ed = Ks;
function J1(t) {
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
}, X1 = [];
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
class Bt {
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
    return Bt.mergeObjectSync(e, n);
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
class Fr {
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
      const r = new Er(t.common.issues);
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
class Oe {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return on(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: on(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Bt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: on(e.data),
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
      parsedType: on(e)
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
      parsedType: on(e)
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
    return new xr({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Hr.create(this, this._def);
  }
  nullable() {
    return Fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Sr.create(this, this._def);
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
    return new xr({
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
const eE = /^c[^\s-]{8,}$/i, tE = /^[a-z][a-z0-9]*$/, rE = /[0-9A-HJKMNP-TV-Z]{26}/, nE = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, sE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, iE = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), oE = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, aE = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, cE = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function uE(t, e) {
  return !!((e === "v4" || !e) && oE.test(t) || (e === "v6" || !e) && aE.test(t));
}
class _r extends Oe {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: W.invalid_string,
      ...ie.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ie.errToObj(e)), this.trim = () => new _r({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new _r({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new _r({
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
    const n = new Bt();
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
        sE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "email",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        iE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "emoji",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        nE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "uuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        eE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        tE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid2",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        rE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
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
        }), n.dirty()) : i.kind === "datetime" ? cE(i).test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? uE(e.data, i.version) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ip",
          code: W.invalid_string,
          message: i.message
        }), n.dirty()) : ze.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new _r({
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
_r.create = (t) => {
  var e;
  return new _r({
    checks: [],
    typeName: le.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
function lE(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class un extends Oe {
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
    const s = new Bt();
    for (const i of this._def.checks)
      i.kind === "int" ? ze.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
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
      }), s.dirty()) : i.kind === "multipleOf" ? lE(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_finite,
        message: i.message
      }), s.dirty()) : ze.assertNever(i);
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
    return new un({
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
    return new un({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ze.isInteger(e.value));
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
un.create = (t) => new un({
  checks: [],
  typeName: le.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class ln extends Oe {
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
    const s = new Bt();
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
      }), s.dirty()) : ze.assertNever(i);
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
ln.create = (t) => {
  var e;
  return new ln({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
class Hs extends Oe {
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
class Nn extends Oe {
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
    const n = new Bt();
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
      }), n.dirty()) : ze.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Nn({
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
Nn.create = (t) => new Nn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: le.ZodDate,
  ...be(t)
});
class mo extends Oe {
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
class Ws extends Oe {
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
class Gs extends Oe {
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
class us extends Oe {
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
class Tn extends Oe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Zt(e.data);
  }
}
Tn.create = (t) => new Tn({
  typeName: le.ZodUnknown,
  ...be(t)
});
class Gr extends Oe {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return re(r, {
      code: W.invalid_type,
      expected: ee.never,
      received: r.parsedType
    }), de;
  }
}
Gr.create = (t) => new Gr({
  typeName: le.ZodNever,
  ...be(t)
});
class vo extends Oe {
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
class Sr extends Oe {
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
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Fr(r, a, r.path, o)))).then((a) => Bt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Fr(r, a, r.path, o)));
    return Bt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Sr({
      ...this._def,
      minLength: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new Sr({
      ...this._def,
      maxLength: { value: e, message: ie.toString(r) }
    });
  }
  length(e, r) {
    return new Sr({
      ...this._def,
      exactLength: { value: e, message: ie.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Sr.create = (t, e) => new Sr({
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
      e[r] = Hr.create(Wn(n));
    }
    return new it({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Sr ? new Sr({
      ...t._def,
      type: Wn(t.element)
    }) : t instanceof Hr ? Hr.create(Wn(t.unwrap())) : t instanceof Fn ? Fn.create(Wn(t.unwrap())) : t instanceof Mr ? Mr.create(t.items.map((e) => Wn(e))) : t;
}
class it extends Oe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = ze.objectKeys(e);
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
    if (!(this._def.catchall instanceof Gr && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || o.push(c);
    const u = [];
    for (const c of a) {
      const f = i[c], d = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: f._parse(new Fr(s, d, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Gr) {
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
            new Fr(s, d, s.path, f)
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
    }).then((c) => Bt.mergeObjectSync(n, c)) : Bt.mergeObjectSync(n, u);
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
    return ze.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return ze.objectKeys(this.shape).forEach((n) => {
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
    return ze.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return ze.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Hr; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return rd(ze.objectKeys(this.shape));
  }
}
it.create = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.strictCreate = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.lazycreate = (t, e) => new it({
  shape: t,
  unknownKeys: "strip",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
class Qs extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Er(o.ctx.common.issues));
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
      const o = a.map((u) => new Er(u));
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
const to = (t) => t instanceof Js ? to(t.schema) : t instanceof xr ? to(t.innerType()) : t instanceof Xs ? [t.value] : t instanceof fn ? t.options : t instanceof ei ? Object.keys(t.enum) : t instanceof ti ? to(t._def.innerType) : t instanceof Ws ? [void 0] : t instanceof Gs ? [null] : null;
class Bo extends Oe {
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
    return new Bo({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...be(n)
    });
  }
}
function Ya(t, e) {
  const r = on(t), n = on(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ee.object && n === ee.object) {
    const s = ze.objectKeys(e), i = ze.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
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
class Zs extends Oe {
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
class Mr extends Oe {
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
      return u ? u._parse(new Fr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => Bt.mergeArray(r, a)) : Bt.mergeArray(r, i);
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
class Ys extends Oe {
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
        key: i._parse(new Fr(n, o, n.path, o)),
        value: a._parse(new Fr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Bt.mergeObjectAsync(r, s) : Bt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Oe ? new Ys({
      keyType: e,
      valueType: r,
      typeName: le.ZodRecord,
      ...be(n)
    }) : new Ys({
      keyType: _r.create(),
      valueType: e,
      typeName: le.ZodRecord,
      ...be(r)
    });
  }
}
class bo extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.map)
      return re(n, {
        code: W.invalid_type,
        expected: ee.map,
        received: n.parsedType
      }), de;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, u], c) => ({
      key: s._parse(new Fr(n, o, n.path, [c, "key"])),
      value: i._parse(new Fr(n, u, n.path, [c, "value"]))
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
class Ln extends Oe {
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
    const o = [...n.data.values()].map((u, c) => i._parse(new Fr(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new Ln({
      ...this._def,
      minSize: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new Ln({
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
Ln.create = (t, e) => new Ln({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...be(e)
});
class es extends Oe {
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
      const u = new Er([]), c = await this._def.args.parseAsync(o, i).catch((p) => {
        throw u.addIssue(n(o, p)), u;
      }), f = await a(...c);
      return await this._def.returns._def.type.parseAsync(f, i).catch((p) => {
        throw u.addIssue(s(f, p)), u;
      });
    }) : Zt((...o) => {
      const u = this._def.args.safeParse(o, i);
      if (!u.success)
        throw new Er([n(o, u.error)]);
      const c = a(...u.data), f = this._def.returns.safeParse(c, i);
      if (!f.success)
        throw new Er([s(c, f.error)]);
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
      args: Mr.create(e).rest(Tn.create())
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
      args: e || Mr.create([]).rest(Tn.create()),
      returns: r || Tn.create(),
      typeName: le.ZodFunction,
      ...be(n)
    });
  }
}
class Js extends Oe {
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
class Xs extends Oe {
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
  return new fn({
    values: t,
    typeName: le.ZodEnum,
    ...be(e)
  });
}
class fn extends Oe {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        expected: ze.joinValues(n),
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
    return fn.create(e);
  }
  exclude(e) {
    return fn.create(this.options.filter((r) => !e.includes(r)));
  }
}
fn.create = rd;
class ei extends Oe {
  _parse(e) {
    const r = ze.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ee.string && n.parsedType !== ee.number) {
      const s = ze.objectValues(r);
      return re(n, {
        expected: ze.joinValues(s),
        received: n.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (r.indexOf(e.data) === -1) {
      const s = ze.objectValues(r);
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
class ls extends Oe {
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
class xr extends Oe {
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
    ze.assertNever(s);
  }
}
xr.create = (t, e, r) => new xr({
  schema: t,
  typeName: le.ZodEffects,
  effect: e,
  ...be(r)
});
xr.createWithPreprocess = (t, e, r) => new xr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: le.ZodEffects,
  ...be(r)
});
class Hr extends Oe {
  _parse(e) {
    return this._getType(e) === ee.undefined ? Zt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hr.create = (t, e) => new Hr({
  innerType: t,
  typeName: le.ZodOptional,
  ...be(e)
});
class Fn extends Oe {
  _parse(e) {
    return this._getType(e) === ee.null ? Zt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fn.create = (t, e) => new Fn({
  innerType: t,
  typeName: le.ZodNullable,
  ...be(e)
});
class ti extends Oe {
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
class wo extends Oe {
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
          return new Er(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Er(n.common.issues);
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
class _o extends Oe {
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
const fE = Symbol("zod_brand");
class nd extends Oe {
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
class xi extends Oe {
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
}) : us.create(), hE = {
  object: it.lazycreate
};
var le;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(le || (le = {}));
const dE = (t, e = {
  message: `Input not instance of ${t.name}`
}) => sd((r) => r instanceof t, e), id = _r.create, od = un.create, pE = _o.create, gE = ln.create, ad = Hs.create, yE = Nn.create, mE = mo.create, vE = Ws.create, bE = Gs.create, wE = us.create, _E = Tn.create, EE = Gr.create, SE = vo.create, xE = Sr.create, OE = it.create, DE = it.strictCreate, IE = Qs.create, CE = Bo.create, RE = Zs.create, TE = Mr.create, AE = Ys.create, PE = bo.create, NE = Ln.create, LE = es.create, FE = Js.create, ME = Xs.create, UE = fn.create, jE = ei.create, $E = ls.create, Jl = xr.create, kE = Hr.create, qE = Fn.create, BE = xr.createWithPreprocess, zE = xi.create, VE = () => id().optional(), KE = () => od().optional(), HE = () => ad().optional(), WE = {
  string: (t) => _r.create({ ...t, coerce: !0 }),
  number: (t) => un.create({ ...t, coerce: !0 }),
  boolean: (t) => Hs.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => ln.create({ ...t, coerce: !0 }),
  date: (t) => Nn.create({ ...t, coerce: !0 })
}, GE = de;
var Or = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ks,
  setErrorMap: J1,
  getErrorMap: ho,
  makeIssue: po,
  EMPTY_PATH: X1,
  addIssueToContext: re,
  ParseStatus: Bt,
  INVALID: de,
  DIRTY: td,
  OK: Zt,
  isAborted: Qa,
  isDirty: Za,
  isValid: go,
  isAsync: yo,
  get util() {
    return ze;
  },
  get objectUtil() {
    return Ga;
  },
  ZodParsedType: ee,
  getParsedType: on,
  ZodType: Oe,
  ZodString: _r,
  ZodNumber: un,
  ZodBigInt: ln,
  ZodBoolean: Hs,
  ZodDate: Nn,
  ZodSymbol: mo,
  ZodUndefined: Ws,
  ZodNull: Gs,
  ZodAny: us,
  ZodUnknown: Tn,
  ZodNever: Gr,
  ZodVoid: vo,
  ZodArray: Sr,
  ZodObject: it,
  ZodUnion: Qs,
  ZodDiscriminatedUnion: Bo,
  ZodIntersection: Zs,
  ZodTuple: Mr,
  ZodRecord: Ys,
  ZodMap: bo,
  ZodSet: Ln,
  ZodFunction: es,
  ZodLazy: Js,
  ZodLiteral: Xs,
  ZodEnum: fn,
  ZodNativeEnum: ei,
  ZodPromise: ls,
  ZodEffects: xr,
  ZodTransformer: xr,
  ZodOptional: Hr,
  ZodNullable: Fn,
  ZodDefault: ti,
  ZodCatch: wo,
  ZodNaN: _o,
  BRAND: fE,
  ZodBranded: nd,
  ZodPipeline: xi,
  custom: sd,
  Schema: Oe,
  ZodSchema: Oe,
  late: hE,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: WE,
  any: wE,
  array: xE,
  bigint: gE,
  boolean: ad,
  date: yE,
  discriminatedUnion: CE,
  effect: Jl,
  enum: UE,
  function: LE,
  instanceof: dE,
  intersection: RE,
  lazy: FE,
  literal: ME,
  map: PE,
  nan: pE,
  nativeEnum: jE,
  never: EE,
  null: bE,
  nullable: qE,
  number: od,
  object: OE,
  oboolean: HE,
  onumber: KE,
  optional: kE,
  ostring: VE,
  pipeline: zE,
  preprocess: BE,
  promise: $E,
  record: AE,
  set: NE,
  strictObject: DE,
  string: id,
  symbol: mE,
  transformer: Jl,
  tuple: TE,
  undefined: vE,
  union: IE,
  unknown: _E,
  void: SE,
  NEVER: GE,
  ZodIssueCode: W,
  quotelessJson: Y1,
  ZodError: Er
});
const Qc = /^aleo1.{58}$/i, QE = /^AViewKey1.{44}$/i, ZE = /^APrivateKey1.{47}$/i, YE = /^at1.{60}$/i, JE = /^\d+field$/, XE = /^\d+u32$/, eS = /^\d+u64$/, mD = Or.string().regex(Qc), vD = Or.string().regex(QE), bD = Or.string().regex(ZE), wD = Or.string().regex(YE), _D = Or.string().regex(JE), ED = Or.string().regex(XE), SD = Or.string().regex(eS);
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
const xD = Or.nativeEnum(Ja), OD = Or.nativeEnum(Xa), DD = Or.nativeEnum(tc), ID = Or.nativeEnum(ec);
function cd(t) {
  At(() => (tt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    tt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function tS(t) {
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
function Dr() {
  const [t, e] = js(void 0);
  return cd((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), ud((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), tS((r) => {
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
function Oi(t) {
  At(() => (tt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    tt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var rS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ef = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, c) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, s = () => e, o = { setState: n, getState: s, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    (rS ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return e = t(n, s, o), o;
}, nS = (t) => t ? ef(t) : ef;
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
function sS() {
  return tf || (tf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = dn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          x[g - 1] = arguments[g];
        n("error", O, x);
      }
    }
    function n(O, b, x) {
      {
        var g = e.ReactDebugCurrentFrame, l = g.getStackAddendum();
        l !== "" && (b += "%s", x = x.concat([l]));
        var y = x.map(function(C) {
          return String(C);
        });
        y.unshift("Warning: " + b), Function.prototype.apply.call(console[O], console, y);
      }
    }
    function s(O, b) {
      return O === b && (O !== 0 || 1 / O === 1 / b) || O !== O && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : s, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue, f = !1, d = !1;
    function p(O, b, x) {
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
      }, [O, g, b]), o(function() {
        m(C) && T({
          inst: C
        });
        var U = function() {
          m(C) && T({
            inst: C
          });
        };
        return O(U);
      }, [O]), c(g), g;
    }
    function m(O) {
      var b = O.getSnapshot, x = O.value;
      try {
        var g = b();
        return !i(x, g);
      } catch {
        return !0;
      }
    }
    function v(O, b, x) {
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
function iS() {
  if (rf)
    return ma;
  rf = 1;
  var t = dn;
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
  return nf || (nf = 1, process.env.NODE_ENV === "production" ? Vi.exports = iS() : Vi.exports = sS()), Vi.exports;
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
function oS() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = dn, e = Zc();
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
        var x = !1, g, l, y = function(B) {
          if (!x) {
            x = !0, g = B;
            var G = m(B);
            if (v !== void 0 && S.hasValue) {
              var R = S.value;
              if (v(R, G))
                return l = R, R;
            }
            return l = G, G;
          }
          var L = g, Q = l;
          if (n(L, B))
            return Q;
          var V = m(B);
          return v !== void 0 && v(Q, V) ? Q : (g = B, l = V, V);
        }, C = p === void 0 ? null : p, T = function() {
          return y(d());
        }, U = C === null ? void 0 : function() {
          return y(C());
        };
        return [T, U];
      }, [d, p, m, v]), w = A[0], O = A[1], b = s(f, w, O);
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
function aS() {
  if (of)
    return va;
  of = 1;
  var t = dn, e = Zc();
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
          if (w = !0, O = g, g = p(g), m !== void 0 && E.hasValue) {
            var l = E.value;
            if (m(l, g))
              return b = l;
          }
          return b = g;
        }
        if (l = b, n(O, g))
          return l;
        var y = p(g);
        return m !== void 0 && m(l, y) ? l : (O = g, b = y);
      }
      var w = !1, O, b, x = d === void 0 ? null : d;
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
process.env.NODE_ENV === "production" ? rc.exports = aS() : rc.exports = oS();
var cS = rc.exports;
const uS = /* @__PURE__ */ pi(cS);
var ld = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: lS } = dn, { useSyncExternalStoreWithSelector: fS } = uS;
let af = !1;
function hS(t, e = t.getState, r) {
  (ld ? "production" : void 0) !== "production" && r && !af && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), af = !0);
  const n = fS(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return lS(n), n;
}
const cf = (t) => {
  (ld ? "production" : void 0) !== "production" && typeof t != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof t == "function" ? nS(t) : t, r = (n, s) => hS(e, n, s);
  return Object.assign(r, e), r;
}, dS = (t) => t ? cf(t) : cf;
var pS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function gS(t, e) {
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
}, yS = (t, e) => (r, n, s) => {
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
      (O) => c.setItem(i.name, O)
    ).catch((O) => {
      A = O;
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
      var O;
      return v = i.merge(
        w,
        (O = n()) != null ? O : m
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
}, mS = (t, e) => (r, n, s) => {
  let i = {
    storage: gS(() => localStorage),
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
      var O;
      return w((O = n()) != null ? O : p);
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
      var O;
      return m = i.merge(
        w,
        (O = n()) != null ? O : p
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
}, vS = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((pS ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), yS(t, e)) : mS(t, e), bS = vS, Qr = dS()(
  bS((t, e) => ({
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
class Di {
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
function dr() {
}
function wS(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function nc(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function fd(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Ms(t, e, r) {
  return zo(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function sn(t, e, r) {
  return zo(t) ? [{
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
  if (zo(a)) {
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
  if (zo(i)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Cn(e.options.mutationKey) !== Cn(i))
        return !1;
    } else if (!Qn(e.options.mutationKey, i))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e));
}
function Yc(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Cn)(t);
}
function Cn(t) {
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
function zo(t) {
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
function _S() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function oc(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? dd(t, e) : e;
}
class ES extends Di {
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
const Eo = new ES(), pf = ["online", "offline"];
class SS extends Di {
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
const si = new SS();
function xS(t) {
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
      var w, O;
      if (n)
        return;
      const b = (w = t.retry) != null ? w : 3, x = (O = t.retryDelay) != null ? O : xS, g = typeof x == "function" ? x(r, A) : x, l = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, A);
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
const _t = OS();
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
class DS extends md {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Jc, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || IS(this.options), this.state = this.initialState, this.scheduleGc();
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
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(dr).catch(dr) : Promise.resolve();
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
    const a = _S(), o = {
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
    this.state = r(this.state), _t.batch(() => {
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
function IS(t) {
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
class CS extends Di {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    const i = r.queryKey, a = (s = r.queryHash) != null ? s : Yc(i, r);
    let o = this.get(a);
    return o || (o = new DS({
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
    _t.batch(() => {
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
    const [n] = sn(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => uf(n, s));
  }
  findAll(e, r) {
    const [n] = sn(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((s) => uf(n, s)) : this.queries;
  }
  notify(e) {
    _t.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class RS extends md {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Jc, this.observers = [], this.state = e.state || TS(), this.setOptions(e.options), this.scheduleGc();
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
        var E, S, A, w, O, b, x, g;
        throw await ((E = (S = this.mutationCache.config).onError) == null ? void 0 : E.call(S, l, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(l), await ((A = (w = this.options).onError) == null ? void 0 : A.call(w, l, this.state.variables, this.state.context)), await ((O = (b = this.mutationCache.config).onSettled) == null ? void 0 : O.call(b, void 0, l, this.state.variables, this.state.context, this)), await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, void 0, l, this.state.variables, this.state.context)), l;
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
    this.state = r(this.state), _t.batch(() => {
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
function TS() {
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
class AS extends Di {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const s = new RS({
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
    _t.batch(() => {
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
    _t.batch(() => {
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
      return _t.batch(() => r.reduce((n, s) => n.then(() => s.continue().catch(dr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function PS() {
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
        }, A = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (g, l, y, C) => (v = C ? [l, ...v] : [...v, l], C ? [y, ...g] : [...g, y]), O = (g, l, y, C) => {
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
          const U = A(T);
          return Promise.resolve(U).then((G) => w(g, y, G, C));
        };
        let b;
        if (!p.length)
          b = O([]);
        else if (f) {
          const g = typeof c < "u", l = g ? c : gf(t.options, p);
          b = O(p, g, l);
        } else if (d) {
          const g = typeof c < "u", l = g ? c : NS(t.options, p);
          b = O(p, g, l, !0);
        } else {
          v = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (o && p[0] ? o(p[0], 0, p) : !0) ? O([], g, m[0]) : Promise.resolve(w([], m[0], p[0]));
          for (let y = 1; y < p.length; y++)
            b = b.then((C) => {
              if (o && p[y] ? o(p[y], y, p) : !0) {
                const U = g ? m[y] : gf(t.options, C);
                return O(C, g, U);
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
function NS(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class LS {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new CS(), this.mutationCache = e.mutationCache || new AS(), this.logger = e.logger || Jc, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
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
    const [n] = sn(e, r);
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
    const s = Ms(e, r, n), i = this.getQueryData(s.queryKey);
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
    const s = this.queryCache.find(e), i = s == null ? void 0 : s.state.data, a = wS(r, i);
    if (typeof a > "u")
      return;
    const o = Ms(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return _t.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = sn(e, r), s = this.queryCache;
    _t.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, r, n) {
    const [s, i] = sn(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...s
    };
    return _t.batch(() => (a.findAll(s).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, i)));
  }
  cancelQueries(e, r, n) {
    const [s, i = {}] = sn(e, r, n);
    typeof i.revert > "u" && (i.revert = !0);
    const a = _t.batch(() => this.queryCache.findAll(s).map((o) => o.cancel(i)));
    return Promise.all(a).then(dr).catch(dr);
  }
  invalidateQueries(e, r, n) {
    const [s, i] = sn(e, r, n);
    return _t.batch(() => {
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
    const [s, i] = sn(e, r, n), a = _t.batch(() => this.queryCache.findAll(s).filter((u) => !u.isDisabled()).map((u) => {
      var c;
      return u.fetch(void 0, {
        ...i,
        cancelRefetch: (c = i == null ? void 0 : i.cancelRefetch) != null ? c : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(dr);
    return i != null && i.throwOnError || (o = o.catch(dr)), o;
  }
  fetchQuery(e, r, n) {
    const s = Ms(e, r, n), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const a = this.queryCache.build(this, i);
    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(dr).catch(dr);
  }
  fetchInfiniteQuery(e, r, n) {
    const s = Ms(e, r, n);
    return s.behavior = PS(), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(dr).catch(dr);
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
    const n = this.queryDefaults.find((s) => Cn(e) === Cn(s.queryKey));
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
    const n = this.mutationDefaults.find((s) => Cn(e) === Cn(s.mutationKey));
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
class FS extends Di {
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
    return US(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
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
    return e != null && e.throwOnError || (r = r.catch(dr)), r;
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
    } = d, A = !1, w = !1, O;
    if (r._optimisticResults) {
      const y = this.hasListeners(), C = !y && yf(e, r), T = y && mf(e, n, r, s);
      (C || T) && (E = Vo(e.options.networkMode) ? "fetching" : "paused", p || (S = "loading")), r._optimisticResults === "isRestoring" && (E = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && S !== "error")
      O = f.data, p = f.dataUpdatedAt, S = f.status, A = !0;
    else if (r.select && typeof d.data < "u")
      if (i && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        O = this.selectResult;
      else
        try {
          this.selectFn = r.select, O = r.select(d.data), O = oc(i == null ? void 0 : i.data, O, r), this.selectResult = O, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      O = d.data;
    if (typeof r.placeholderData < "u" && typeof O > "u" && S === "loading") {
      let y;
      if (i != null && i.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        y = i.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (C) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(C), this.selectError = C;
        }
      typeof y < "u" && (S = "success", O = oc(i == null ? void 0 : i.data, y, r), w = !0);
    }
    this.selectError && (m = this.selectError, O = this.selectResult, v = Date.now(), S = "error");
    const b = E === "fetching", x = S === "loading", g = S === "error";
    return {
      status: S,
      fetchStatus: E,
      isLoading: x,
      isSuccess: S === "success",
      isError: g,
      isInitialLoading: x && b,
      data: O,
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
    _t.batch(() => {
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
function US(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !sc(t.getCurrentResult(), e);
}
var jS = Zc();
const $S = jS.useSyncExternalStore, vf = /* @__PURE__ */ Wt.createContext(void 0), vd = /* @__PURE__ */ Wt.createContext(!1);
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
}, kS = ({
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
}, _d = /* @__PURE__ */ Wt.createContext(!1), qS = () => Wt.useContext(_d);
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
const zS = /* @__PURE__ */ Wt.createContext(BS()), VS = () => Wt.useContext(zS);
function KS(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const HS = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, WS = (t) => {
  Wt.useEffect(() => {
    t.clearReset();
  }, [t]);
}, GS = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && KS(r, [t.error, n]), QS = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, ZS = (t, e) => t.isLoading && t.isFetching && !e, YS = (t, e, r) => (t == null ? void 0 : t.suspense) && ZS(e, r), JS = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function XS(t, e) {
  const r = wd({
    context: t.context
  }), n = qS(), s = VS(), i = r.defaultQueryOptions(t);
  i._optimisticResults = n ? "isRestoring" : "optimistic", i.onError && (i.onError = _t.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = _t.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = _t.batchCalls(i.onSettled)), QS(i), HS(i, s), WS(s);
  const [a] = Wt.useState(() => new e(r, i)), o = a.getOptimisticResult(i);
  if ($S(Wt.useCallback((u) => {
    const c = n ? () => {
    } : a.subscribe(_t.batchCalls(u));
    return a.updateResult(), c;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), Wt.useEffect(() => {
    a.setOptions(i, {
      listeners: !1
    });
  }, [i, a]), YS(i, o, n))
    throw JS(i, a, s);
  if (GS({
    result: o,
    errorResetBoundary: s,
    useErrorBoundary: i.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return i.notifyOnChangeProps ? o : a.trackResult(o);
}
function ex(t, e, r) {
  const n = Ms(t, e, r);
  return XS(n, FS);
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
  return ex(
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
)}...${t.slice(t.length - r, t.length)}` : "", CD = () => {
  const t = Dr(), [e, r, n] = Qr((c) => [c.account, c.setAccount, c.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Ii({
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
  Oi(({ params: c, topic: f }) => {
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
}, RD = ({ address: t, multisig: e }) => {
  const r = Dr(), [n] = Qr((d) => [d.account]), { refetch: s, data: i, error: a, isLoading: o } = Ii({
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
  Oi(({ params: d, topic: p }) => {
    const m = d.event.name, v = d.event.address ?? d.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && v === t) && s();
  }), At(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const u = a ? a.message : i && i.error, c = i;
  return { balances: c == null ? void 0 : c.balances, error: u, loading: o };
};
function TD() {
  const { data: t, error: e, loading: r, setData: n, setError: s, setLoading: i } = eu(), [a] = Qr((u) => [u.setAccount]);
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
const AD = () => {
  const t = Dr(), { request: e, data: r, error: n, loading: s } = Ci({
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
function tx() {
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
function rx(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = i, r.enable = s, r.enabled = a, r.humanize = tx(), r.destroy = c, Object.keys(t).forEach((f) => {
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
      const A = E, w = Number(/* @__PURE__ */ new Date()), O = w - (d || w);
      A.diff = O, A.prev = d, A.curr = w, d = w, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
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
var nx = rx;
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
  t.exports = nx(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(uc, uc.exports);
var sx = uc.exports;
const ix = /* @__PURE__ */ pi(sx), Ri = ix("wallet:sdk");
Ri.enabled = !0;
const PD = (t) => {
  Ri("useDecrypt", t);
  const e = Dr(), { request: r, data: n, error: s, loading: i } = Ci({
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
};
function ND() {
  const t = Dr(), { error: e, loading: r, setError: n, setLoading: s } = eu();
  async function i() {
    if (!(!t || r))
      try {
        s(!0), n(void 0), await (await tt()).disconnect({
          topic: t.topic,
          reason: pt("USER_DISCONNECTED")
        }), cs.emit("session_change"), Qr.setState({ account: void 0 });
      } catch (a) {
        throw n(a), a;
      } finally {
        s(!1);
      }
  }
  return { error: e, loading: r, disconnect: i };
}
const LD = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Dr(), [s] = Qr((v) => [v.account]), { refetch: i, data: a, error: o, isLoading: u } = Ii({
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
  Oi(({ params: v, topic: E }) => {
    const S = v.event.name, A = v.event.address ?? v.event.data.address;
    (t && S === "selectedAccountSynced" && !r || S === "sharedAccountSynced" && r && A === e) && i();
  });
  const c = !!n && !!s && !!t && (r ? !!e : !0);
  At(() => {
    c && !u && i();
  }, [c]);
  const f = () => {
    c && !u && i();
  }, d = o ? o.message : a && a.error, p = a, m = p == null ? void 0 : p.event;
  return { fetchEvent: f, event: m, error: d, loading: u };
}, FD = ({ filter: t, page: e }) => {
  const r = Dr(), [n] = Qr((v) => [v.account]);
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
  Oi(({ id: v, params: E, topic: S }) => {
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
}, MD = (t) => {
  const e = Dr(), { request: r, data: n, error: s, loading: i } = Ci({
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
}, UD = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, jD = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = Dr(), [i] = Qr((S) => [
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
  Oi(({ params: S }) => {
    const A = S.event.name, w = S.event.address ?? S.event.data.address;
    (A === "selectedAccountSynced" && !e || A === "sharedAccountSynced" && e && w === t) && a();
  });
  const d = () => {
    f && !c && (Ri("useRequestSignature refetching...", [t, e, r, n]), a());
  }, p = u ? u.message : o && o.error, m = o, v = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: d, records: v, error: p, loading: c, page: n, pageCount: E };
}, $D = (t) => {
  const e = Dr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: s, error: i, loading: a } = Ci({
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
}, kD = (t, e) => {
  const r = Dr(), { request: n, data: s, error: i, loading: a } = Ci({
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
}, qD = async () => {
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
    return Qr.setState({ account: r.account }), r;
  } catch (r) {
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, BD = async ({ address: t }) => {
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
}, zD = async () => {
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
}, VD = async (t) => {
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
}, KD = async () => {
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
}, HD = async (t) => {
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
}, WD = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.disconnect({
      reason: pt("USER_DISCONNECTED"),
      topic: e.topic
    }), cs.emit("session_change"), Qr.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, GD = async ({
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
}, QD = async (t) => {
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
}, ZD = async (t) => {
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
}, YD = async ({
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
}, JD = async ({
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
}, XD = 25;
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
function ox() {
  return wf || (wf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = dn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function S(D) {
      if (D === null || typeof D != "object")
        return null;
      var j = v && D[v] || D[E];
      return typeof j == "function" ? j : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(D) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), ue = 1; ue < j; ue++)
          J[ue - 1] = arguments[ue];
        O("error", D, J);
      }
    }
    function O(D, j, J) {
      {
        var ue = A.ReactDebugCurrentFrame, $e = ue.getStackAddendum();
        $e !== "" && (j += "%s", J = J.concat([$e]));
        var Pe = J.map(function(Le) {
          return String(Le);
        });
        Pe.unshift("Warning: " + j), Function.prototype.apply.call(console[D], console, Pe);
      }
    }
    var b = !1, x = !1, g = !1, l = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function T(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || y || D === s || D === c || D === f || l || D === m || b || x || g || typeof D == "object" && D !== null && (D.$$typeof === p || D.$$typeof === d || D.$$typeof === a || D.$$typeof === o || D.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === C || D.getModuleId !== void 0));
    }
    function U(D, j, J) {
      var ue = D.displayName;
      if (ue)
        return ue;
      var $e = j.displayName || j.name || "";
      return $e !== "" ? J + "(" + $e + ")" : J;
    }
    function B(D) {
      return D.displayName || "Context";
    }
    function G(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
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
      if (typeof D == "object")
        switch (D.$$typeof) {
          case o:
            var j = D;
            return B(j) + ".Consumer";
          case a:
            var J = D;
            return B(J._context) + ".Provider";
          case u:
            return U(D, D.render, "ForwardRef");
          case d:
            var ue = D.displayName || null;
            return ue !== null ? ue : G(D.type) || "Memo";
          case p: {
            var $e = D, Pe = $e._payload, Le = $e._init;
            try {
              return G(Le(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, L = 0, Q, V, k, z, $, K, fe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ae() {
      {
        if (L === 0) {
          Q = console.log, V = console.info, k = console.warn, z = console.error, $ = console.group, K = console.groupCollapsed, fe = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        L++;
      }
    }
    function te() {
      {
        if (L--, L === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, D, {
              value: Q
            }),
            info: R({}, D, {
              value: V
            }),
            warn: R({}, D, {
              value: k
            }),
            error: R({}, D, {
              value: z
            }),
            group: R({}, D, {
              value: $
            }),
            groupCollapsed: R({}, D, {
              value: K
            }),
            groupEnd: R({}, D, {
              value: fe
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = A.ReactCurrentDispatcher, M;
    function F(D, j, J) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ue = $e.stack.trim().match(/\n( *(at )?)/);
            M = ue && ue[1] || "";
          }
        return `
` + M + D;
      }
    }
    var P = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function Z(D, j) {
      if (!D || P)
        return "";
      {
        var J = h.get(D);
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
            } catch (gr) {
              ue = gr;
            }
            Reflect.construct(D, [], Le);
          } else {
            try {
              Le.call();
            } catch (gr) {
              ue = gr;
            }
            D.call(Le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gr) {
            ue = gr;
          }
          D();
        }
      } catch (gr) {
        if (gr && ue && typeof gr.stack == "string") {
          for (var Re = gr.stack.split(`
`), Rt = ue.stack.split(`
`), nt = Re.length - 1, ut = Rt.length - 1; nt >= 1 && ut >= 0 && Re[nt] !== Rt[ut]; )
            ut--;
          for (; nt >= 1 && ut >= 0; nt--, ut--)
            if (Re[nt] !== Rt[ut]) {
              if (nt !== 1 || ut !== 1)
                do
                  if (nt--, ut--, ut < 0 || Re[nt] !== Rt[ut]) {
                    var vt = `
` + Re[nt].replace(" at new ", " at ");
                    return D.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", D.displayName)), typeof D == "function" && h.set(D, vt), vt;
                  }
                while (nt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        P = !1, oe.current = Pe, te(), Error.prepareStackTrace = $e;
      }
      var Jr = D ? D.displayName || D.name : "", Ti = Jr ? F(Jr) : "";
      return typeof D == "function" && h.set(D, Ti), Ti;
    }
    function X(D, j, J) {
      return Z(D, !1);
    }
    function De(D) {
      var j = D.prototype;
      return !!(j && j.isReactComponent);
    }
    function Ie(D, j, J) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Z(D, De(D));
      if (typeof D == "string")
        return F(D);
      switch (D) {
        case c:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case u:
            return X(D.render);
          case d:
            return Ie(D.type, j, J);
          case p: {
            var ue = D, $e = ue._payload, Pe = ue._init;
            try {
              return Ie(Pe($e), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Fe = {}, Je = A.ReactDebugCurrentFrame;
    function He(D) {
      if (D) {
        var j = D._owner, J = Ie(D.type, D._source, j ? j.type : null);
        Je.setExtraStackFrame(J);
      } else
        Je.setExtraStackFrame(null);
    }
    function Ne(D, j, J, ue, $e) {
      {
        var Pe = Function.call.bind(we);
        for (var Le in D)
          if (Pe(D, Le)) {
            var Re = void 0;
            try {
              if (typeof D[Le] != "function") {
                var Rt = Error((ue || "React class") + ": " + J + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              Re = D[Le](j, Le, ue, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Re = nt;
            }
            Re && !(Re instanceof Error) && (He($e), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", J, Le, typeof Re), He(null)), Re instanceof Error && !(Re.message in Fe) && (Fe[Re.message] = !0, He($e), w("Failed %s type: %s", J, Re.message), He(null));
          }
      }
    }
    var Te = Array.isArray;
    function _e(D) {
      return Te(D);
    }
    function Se(D) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return J;
      }
    }
    function Ee(D) {
      try {
        return ge(D), !1;
      } catch {
        return !0;
      }
    }
    function ge(D) {
      return "" + D;
    }
    function pe(D) {
      if (Ee(D))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(D)), ge(D);
    }
    var ce = A.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, he, Ae;
    Ae = {};
    function Me(D) {
      if (we.call(D, "ref")) {
        var j = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ke(D) {
      if (we.call(D, "key")) {
        var j = Object.getOwnPropertyDescriptor(D, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function qe(D, j) {
      if (typeof D.ref == "string" && ce.current && j && ce.current.stateNode !== j) {
        var J = G(ce.current.type);
        Ae[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), D.ref), Ae[J] = !0);
      }
    }
    function je(D, j) {
      {
        var J = function() {
          Ce || (Ce = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function nr(D, j) {
      {
        var J = function() {
          he || (he = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var cr = function(D, j, J, ue, $e, Pe, Le) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: D,
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
    function Ir(D, j, J, ue, $e) {
      {
        var Pe, Le = {}, Re = null, Rt = null;
        J !== void 0 && (pe(J), Re = "" + J), ke(j) && (pe(j.key), Re = "" + j.key), Me(j) && (Rt = j.ref, qe(j, $e));
        for (Pe in j)
          we.call(j, Pe) && !xe.hasOwnProperty(Pe) && (Le[Pe] = j[Pe]);
        if (D && D.defaultProps) {
          var nt = D.defaultProps;
          for (Pe in nt)
            Le[Pe] === void 0 && (Le[Pe] = nt[Pe]);
        }
        if (Re || Rt) {
          var ut = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Re && je(Le, ut), Rt && nr(Le, ut);
        }
        return cr(D, Re, Rt, $e, ue, ce.current, Le);
      }
    }
    var Ct = A.ReactCurrentOwner, Cr = A.ReactDebugCurrentFrame;
    function ur(D) {
      if (D) {
        var j = D._owner, J = Ie(D.type, D._source, j ? j.type : null);
        Cr.setExtraStackFrame(J);
      } else
        Cr.setExtraStackFrame(null);
    }
    var Yr;
    Yr = !1;
    function Xe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function Qe() {
      {
        if (Ct.current) {
          var D = G(Ct.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function ot(D) {
      {
        if (D !== void 0) {
          var j = D.fileName.replace(/^.*[\\\/]/, ""), J = D.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var rt = {};
    function at(D) {
      {
        var j = Qe();
        if (!j) {
          var J = typeof D == "string" ? D : D.displayName || D.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Ze(D, j) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var J = at(j);
        if (rt[J])
          return;
        rt[J] = !0;
        var ue = "";
        D && D._owner && D._owner !== Ct.current && (ue = " It was passed a child from " + G(D._owner.type) + "."), ur(D), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ue), ur(null);
      }
    }
    function ft(D, j) {
      {
        if (typeof D != "object")
          return;
        if (_e(D))
          for (var J = 0; J < D.length; J++) {
            var ue = D[J];
            Xe(ue) && Ze(ue, j);
          }
        else if (Xe(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var $e = S(D);
          if (typeof $e == "function" && $e !== D.entries)
            for (var Pe = $e.call(D), Le; !(Le = Pe.next()).done; )
              Xe(Le.value) && Ze(Le.value, j);
        }
      }
    }
    function gt(D) {
      {
        var j = D.type;
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
          Ne(J, D.props, "prop", ue, D);
        } else if (j.PropTypes !== void 0 && !Yr) {
          Yr = !0;
          var $e = G(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(D) {
      {
        for (var j = Object.keys(D.props), J = 0; J < j.length; J++) {
          var ue = j[J];
          if (ue !== "children" && ue !== "key") {
            ur(D), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), ur(null);
            break;
          }
        }
        D.ref !== null && (ur(D), w("Invalid attribute `ref` supplied to `React.Fragment`."), ur(null));
      }
    }
    function ht(D, j, J, ue, $e, Pe) {
      {
        var Le = T(D);
        if (!Le) {
          var Re = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = ot($e);
          Rt ? Re += Rt : Re += Qe();
          var nt;
          D === null ? nt = "null" : _e(D) ? nt = "array" : D !== void 0 && D.$$typeof === e ? (nt = "<" + (G(D.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof D, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Re);
        }
        var ut = Ir(D, j, J, $e, Pe);
        if (ut == null)
          return ut;
        if (Le) {
          var vt = j.children;
          if (vt !== void 0)
            if (ue)
              if (_e(vt)) {
                for (var Jr = 0; Jr < vt.length; Jr++)
                  ft(vt[Jr], D);
                Object.freeze && Object.freeze(vt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(vt, D);
        }
        return D === n ? yt(ut) : gt(ut), ut;
      }
    }
    function mt(D, j, J) {
      return ht(D, j, J, !0);
    }
    function dt(D, j, J) {
      return ht(D, j, J, !1);
    }
    var ct = dt, We = mt;
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
function ax() {
  if (_f)
    return Ps;
  _f = 1;
  var t = dn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
process.env.NODE_ENV === "production" ? lc.exports = ax() : lc.exports = ox();
var Ef = lc.exports, ye = {
  context: void 0,
  registry: void 0
};
function Us(t) {
  ye.context = t;
}
var cx = (t, e) => t === e, So = Symbol("solid-proxy"), Sd = Symbol("solid-track"), xo = {
  equals: cx
}, xd = Td, Zr = 1, Oo = 2, Od = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, wa = {}, Be = null, _a = null, Ve = null, qt = null, Wr = null, Ko = 0, [ux, e3] = /* @__PURE__ */ Ht(!1);
function An(t, e) {
  const r = Ve, n = Be, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Od : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => It(() => Wo(a)));
  Be = a, Ve = null;
  try {
    return Ur(o, !0);
  } finally {
    Ve = r, Be = n;
  }
}
function Ht(t, e) {
  e = e ? Object.assign({}, xo, e) : xo;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Rd(r, s));
  return [Cd.bind(r), n];
}
function Sf(t, e, r) {
  const n = Ho(t, e, !0, Zr);
  bs(n);
}
function Pn(t, e, r) {
  const n = Ho(t, e, !1, Zr);
  bs(n);
}
function Dd(t, e, r) {
  xd = mx;
  const n = Ho(t, e, !1, Zr);
  (!r || !r.render) && (n.user = !0), Wr ? Wr.push(n) : bs(n);
}
function rr(t, e, r) {
  r = r ? Object.assign({}, xo, r) : xo;
  const n = Ho(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, bs(n), Cd.bind(n);
}
function xf(t) {
  return t && typeof t == "object" && "then" in t;
}
function lx(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = wa, u = null, c = !1, f = "initialValue" in i, d = typeof n == "function" && rr(n);
  const p = /* @__PURE__ */ new Set(), [m, v] = (i.storage || Ht)(i.initialValue), [E, S] = Ht(void 0), [A, w] = Ht(void 0, {
    equals: !1
  }), [O, b] = Ht(f ? "ready" : "unresolved");
  if (ye.context) {
    u = `${ye.context.id}${ye.context.count++}`;
    let C;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : ye.load && (C = ye.load(u)) && (o = xf(C) && "value" in C ? C.value : C);
  }
  function x(C, T, U, B) {
    return a === C && (a = null, B !== void 0 && (f = !0), (C === o || T === o) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(B, {
        value: T
      })
    ), o = wa, g(T, U)), T;
  }
  function g(C, T) {
    Ur(() => {
      T === void 0 && v(() => C), b(T !== void 0 ? "errored" : f ? "ready" : "unresolved"), S(T);
      for (const U of p.keys())
        U.decrement();
      p.clear();
    }, !1);
  }
  function l() {
    const C = px, T = m(), U = E();
    if (U !== void 0 && !a)
      throw U;
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
    const U = o !== wa ? o : It(
      () => s(T, {
        value: m(),
        refetching: C
      })
    );
    return xf(U) ? (a = U, c = !0, queueMicrotask(() => c = !1), Ur(() => {
      b(f ? "refreshing" : "pending"), w();
    }, !1), U.then(
      (B) => x(U, B, void 0, T),
      (B) => x(U, void 0, Pd(B), T)
    )) : (x(a, U, void 0, T), U);
  }
  return Object.defineProperties(l, {
    state: {
      get: () => O()
    },
    error: {
      get: () => E()
    },
    loading: {
      get() {
        const C = O();
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
function t3(t) {
  return Ur(t, !1);
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
function r3(t, e, r) {
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
function fx(t) {
  Dd(() => It(t));
}
function ii(t) {
  return Be === null || (Be.cleanups === null ? Be.cleanups = [t] : Be.cleanups.push(t)), t;
}
function n3() {
  return Ve;
}
function Of() {
  return Be;
}
function hx(t, e) {
  const r = Be, n = Ve;
  Be = t, Ve = null;
  try {
    return Ur(e, !0);
  } catch (s) {
    tu(s);
  } finally {
    Be = r, Ve = n;
  }
}
function dx(t) {
  const e = Ve, r = Be;
  return Promise.resolve().then(() => {
    Ve = e, Be = r;
    let n;
    return Ur(t, !1), Ve = Be = null, n ? n.done : void 0;
  });
}
function s3() {
  return [ux, dx];
}
function i3(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: vx(r),
    defaultValue: t
  };
}
function o3(t) {
  return Be && Be.context && Be.context[t.id] !== void 0 ? Be.context[t.id] : t.defaultValue;
}
function Id(t) {
  const e = rr(t), r = rr(() => fc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var px;
function Cd() {
  if (this.sources && this.state)
    if (this.state === Zr)
      bs(this);
    else {
      const t = qt;
      qt = null, Ur(() => Io(this), !1), qt = t;
    }
  if (Ve) {
    const t = this.observers ? this.observers.length : 0;
    Ve.sources ? (Ve.sources.push(this), Ve.sourceSlots.push(t)) : (Ve.sources = [this], Ve.sourceSlots = [t]), this.observers ? (this.observers.push(Ve), this.observerSlots.push(Ve.sources.length - 1)) : (this.observers = [Ve], this.observerSlots = [Ve.sources.length - 1]);
  }
  return this.value;
}
function Rd(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Ur(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = _a && _a.running;
      a && _a.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? qt.push(i) : Wr.push(i), i.observers && Ad(i)), a || (i.state = Zr);
    }
    if (qt.length > 1e6)
      throw qt = [], new Error();
  }, !1)), e;
}
function bs(t) {
  if (!t.fn)
    return;
  Wo(t);
  const e = Be, r = Ve, n = Ko;
  Ve = Be = t, gx(
    t,
    t.value,
    n
  ), Ve = r, Be = e;
}
function gx(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (s) {
    return t.pure && (t.state = Zr, t.owned && t.owned.forEach(Wo), t.owned = null), t.updatedAt = r + 1, tu(s);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Rd(t, n) : t.value = n, t.updatedAt = r);
}
function Ho(t, e, r, n = Zr, s) {
  const i = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: Be,
    context: Be ? Be.context : null,
    pure: r
  };
  return Be === null || Be !== Od && (Be.owned ? Be.owned.push(i) : Be.owned = [i]), i;
}
function Do(t) {
  if (t.state === 0)
    return;
  if (t.state === Oo)
    return Io(t);
  if (t.suspense && It(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Ko); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === Zr)
      bs(t);
    else if (t.state === Oo) {
      const n = qt;
      qt = null, Ur(() => Io(t, e[0]), !1), qt = n;
    }
}
function Ur(t, e) {
  if (qt)
    return t();
  let r = !1;
  e || (qt = []), Wr ? r = !0 : Wr = [], Ko++;
  try {
    const n = t();
    return yx(r), n;
  } catch (n) {
    r || (Wr = null), qt = null, tu(n);
  }
}
function yx(t) {
  if (qt && (Td(qt), qt = null), t)
    return;
  const e = Wr;
  Wr = null, e.length && Ur(() => xd(e), !1);
}
function Td(t) {
  for (let e = 0; e < t.length; e++)
    Do(t[e]);
}
function mx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : Do(n);
  }
  if (ye.context) {
    if (ye.count) {
      ye.effects || (ye.effects = []), ye.effects.push(...t.slice(0, r));
      return;
    } else
      ye.effects && (t = [...ye.effects, ...t], r += ye.effects.length, delete ye.effects);
    Us();
  }
  for (e = 0; e < r; e++)
    Do(t[e]);
}
function Io(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === Zr ? n !== e && (!n.updatedAt || n.updatedAt < Ko) && Do(n) : s === Oo && Io(n, e);
    }
  }
}
function Ad(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = Oo, r.pure ? qt.push(r) : Wr.push(r), r.observers && Ad(r));
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
function Pd(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function tu(t, e = Be) {
  throw Pd(t);
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
function vx(t, e) {
  return function(n) {
    let s;
    return Pn(
      () => s = It(() => (Be.context = {
        ...Be.context,
        [t]: n.value
      }, Id(() => n.children))),
      void 0
    ), s;
  };
}
var hc = Symbol("fallback");
function Co(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function bx(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return ii(() => Co(i)), () => {
    let u = t() || [], c, f;
    return u[Sd], It(() => {
      let p = u.length, m, v, E, S, A, w, O, b, x;
      if (p === 0)
        a !== 0 && (Co(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [hc], s[0] = An((g) => (i[0] = g, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), f = 0; f < p; f++)
          n[f] = u[f], s[f] = An(d);
        a = p;
      } else {
        for (E = new Array(p), S = new Array(p), o && (A = new Array(p)), w = 0, O = Math.min(a, p); w < O && n[w] === u[w]; w++)
          ;
        for (O = a - 1, b = p - 1; O >= w && b >= w && n[O] === u[b]; O--, b--)
          E[b] = s[O], S[b] = i[O], o && (A[b] = o[O]);
        for (m = /* @__PURE__ */ new Map(), v = new Array(b + 1), f = b; f >= w; f--)
          x = u[f], c = m.get(x), v[f] = c === void 0 ? -1 : c, m.set(x, f);
        for (c = w; c <= O; c++)
          x = n[c], f = m.get(x), f !== void 0 && f !== -1 ? (E[f] = s[c], S[f] = i[c], o && (A[f] = o[c]), f = v[f], m.set(x, f)) : i[c]();
        for (f = w; f < p; f++)
          f in E ? (s[f] = E[f], i[f] = S[f], o && (o[f] = A[f], o[f](f))) : s[f] = An(d);
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
function wx(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, u;
  return ii(() => Co(i)), () => {
    const c = t() || [];
    return c[Sd], It(() => {
      if (c.length === 0)
        return o !== 0 && (Co(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [hc], s[0] = An((d) => (i[0] = d, r.fallback())), o = 1), s;
      for (n[0] === hc && (i[0](), i = [], n = [], s = [], o = 0), u = 0; u < c.length; u++)
        u < n.length && n[u] !== c[u] ? a[u](() => c[u]) : u >= n.length && (s[u] = An(f));
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
function _x(t, e) {
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
function Ex() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function Sx(...t) {
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
          get: Ex.bind(n[f] = [d.get.bind(a)])
        })) : (d.value !== void 0 && s.add(f), r[f] = d.value);
      else {
        const p = n[f];
        p ? d.get ? p.push(d.get.bind(a)) : d.value !== void 0 && p.push(() => d.value) : r[f] === void 0 && (r[f] = d.value);
      }
    }
  }
  return r;
}
function xx(t, ...e) {
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
function Ox(t) {
  let e, r;
  const n = (s) => {
    const i = ye.context;
    if (i) {
      const [o, u] = Ht();
      ye.count || (ye.count = 0), ye.count++, (r || (r = t())).then((c) => {
        Us(i), ye.count--, u(() => c.default), Us();
      }), e = o;
    } else if (!e) {
      const [o] = lx(() => (r || (r = t())).then((u) => u.default));
      e = o;
    }
    let a;
    return rr(
      () => (a = e()) && It(() => {
        if (!i)
          return a(s);
        const o = ye.context;
        Us(i);
        const u = a(s);
        return Us(o), u;
      })
    );
  };
  return n.preload = () => r || ((r = t()).then((s) => e = () => s.default), r), n;
}
var Dx = 0;
function a3() {
  const t = ye.context;
  return t ? `${t.id}${t.count++}` : `cl-${Dx++}`;
}
var Nd = (t) => `Stale read from <${t}>.`;
function c3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(bx(() => t.each, t.children, e || void 0));
}
function u3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(wx(() => t.each, t.children, e || void 0));
}
function l3(t) {
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
                throw Nd("Show");
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
function f3(t) {
  let e = !1;
  const r = (i, a) => i[0] === a[0] && (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Id(() => t.children), s = rr(
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
              throw Nd("Match");
            return o.when;
          }
        )
      ) : u;
    },
    void 0,
    void 0
  );
}
function h3(t) {
  return t;
}
var Ix = [
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
], Cx = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...Ix
]), Rx = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), Tx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Ax = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function Px(t, e) {
  const r = Ax[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var Nx = /* @__PURE__ */ new Set([
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
]), Lx = /* @__PURE__ */ new Set([
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
]), Fx = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Mx(t, e, r) {
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
var Df = "_$DX_DELEGATE";
function Ux(t, e, r, n = {}) {
  let s;
  return An((i) => {
    s = i, e === document ? t() : gc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function d3(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => It(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function jx(t, e = window.document) {
  const r = e[Df] || (e[Df] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, Gx));
  }
}
function pc(t, e, r) {
  ye.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function $x(t, e, r, n) {
  ye.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function kx(t, e) {
  ye.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function qx(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function Bx(t, e, r = {}) {
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
function zx(t, e, r) {
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
function Vx(t, e = {}, r, n) {
  const s = {};
  return n || Pn(
    () => s.children = fs(t, e.children, s.children)
  ), Pn(() => e.ref && e.ref(t)), Pn(() => Kx(t, e, r, !0, s, !0)), s;
}
function p3(t, e, r) {
  return It(() => t(e, r));
}
function gc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return fs(t, e, n, r);
  Pn((s) => fs(t, e(), s, r), n);
}
function Kx(t, e, r, n, s = {}, i = !1) {
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
function Hx(t) {
  let e, r;
  return !ye.context || !(e = ye.registry.get(r = Qx())) ? t() : (ye.completed && ye.completed.add(e), ye.registry.delete(r), e);
}
function Wx(t) {
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
    return zx(t, r, n);
  if (e === "classList")
    return Bx(t, r, n);
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
    const d = e.slice(2).toLowerCase(), p = Nx.has(d);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(d, m);
    }
    (p || r) && (qx(t, d, r, p), p && jx([d]));
  } else if (e.slice(0, 5) === "attr:")
    pc(t, e.slice(5), r);
  else if ((f = e.slice(0, 5) === "prop:") || (u = Rx.has(e)) || !s && ((c = Px(e, t.tagName)) || (o = Cx.has(e))) || (a = t.nodeName.includes("-"))) {
    if (f)
      e = e.slice(5), o = !0;
    else if (ye.context)
      return r;
    e === "class" || e === "className" ? kx(t, r) : a && !o && !u ? t[Wx(e)] = r : t[c || e] = r;
  } else {
    const d = s && e.indexOf(":") > -1 && Fx[e.split(":")[0]];
    d ? $x(t, d, e, r) : pc(t, Tx[e] || e, r);
  }
  return r;
}
function Gx(t) {
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
      return Pn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = fs(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], u = r && Array.isArray(r);
      if (yc(o, e, r, s))
        return Pn(() => r = fs(t, o, r, n, !0)), () => r;
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
        u ? r.length === 0 ? Rf(t, o, n) : Mx(t, r, o) : (r && Vn(t), Rf(t, o));
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
function Qx() {
  const t = ye.context;
  return `${t.id}${t.count++}`;
}
var Zx = "http://www.w3.org/2000/svg";
function Ld(t, e = !1) {
  return e ? document.createElementNS(Zx, t) : document.createElement(t);
}
function g3(t) {
  const { useShadow: e } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Of();
  let i, a = !!ye.context;
  return Dd(
    () => {
      a && (Of().user = a = !1), i || (i = hx(s, () => rr(() => t.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [u, c] = Ht(!1), f = () => c(!0);
        An((d) => gc(o, () => u() ? d() : i(), null)), ii(f);
      } else {
        const u = Ld(t.isSVG ? "g" : "div", t.isSVG), c = e && u.attachShadow ? u.attachShadow({
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
function y3(t) {
  const [e, r] = xx(t, ["component"]), n = rr(() => e.component);
  return rr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return It(() => s(r));
      case "string":
        const i = Lx.has(s), a = ye.context ? Hx() : Ld(s, i);
        return Vx(a, r, i), a;
    }
  });
}
var Yx = (
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
), Fd = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new Yx();
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
), Jx = /* @__PURE__ */ function() {
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
}(), Xx = (
  /** @class */
  function(t) {
    Jx(e, t);
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
  }(Fd)
), eO = function(t, e) {
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
function tO(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function rO(t, e) {
  var r = tO(t);
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
    var n = eO(r, 2), s = n[0], i = n[1];
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
var nO = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return rO(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), sO = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, Md = function(t) {
  return typeof t > "u";
}, iO = function(t) {
  return t === null;
}, oi = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, mc = function(t) {
  return oi(t) && Object.keys(t).length === 0;
}, hn = function(t) {
  return Array.isArray(t);
}, oO = function(t) {
  return typeof t == "string";
}, aO = function(t) {
  return typeof t == "number" && !isNaN(t);
}, cO = function(t) {
  return typeof t == "boolean";
}, uO = function(t) {
  return t instanceof RegExp;
}, ai = function(t) {
  return t instanceof Map;
}, ci = function(t) {
  return t instanceof Set;
}, Ud = function(t) {
  return sO(t) === "Symbol";
}, lO = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, fO = function(t) {
  return t instanceof Error;
}, Af = function(t) {
  return typeof t == "number" && isNaN(t);
}, Pf = function(t) {
  return cO(t) || iO(t) || Md(t) || aO(t) || oO(t) || Ud(t);
}, hO = function(t) {
  return typeof t == "bigint";
}, dO = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, pO = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, gO = function(t) {
  return t instanceof URL;
}, jd = function(t) {
  return t.replace(/\./g, "\\.");
}, Sa = function(t) {
  return t.map(String).map(jd).join(".");
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
function Nr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var $d = [
  Nr(Md, "undefined", function() {
    return null;
  }, function() {
  }),
  Nr(hO, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Nr(lO, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Nr(fO, "Error", function(t, e) {
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
  Nr(uO, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Nr(
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
  Nr(ai, "map", function(t) {
    return wc([], bc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Nr(function(t) {
    return Af(t) || dO(t);
  }, "number", function(t) {
    return Af(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Nr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Nr(gO, "URL", function(t) {
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
var kd = Go(function(t, e) {
  if (Ud(t)) {
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
}), yO = [
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
}, {}), qd = Go(pO, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return wc([], bc(t));
}, function(t, e) {
  var r = yO[e[1]];
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
var zd = Go(Bd, function(t, e) {
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
}), Vd = Go(function(t, e) {
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
}), mO = [zd, kd, Vd, qd], Nf = function(t, e) {
  var r = Tf(mO, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Tf($d, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Kd = {};
$d.forEach(function(t) {
  Kd[t.annotation] = t;
});
var vO = function(t, e, r) {
  if (hn(e))
    switch (e[0]) {
      case "symbol":
        return kd.untransform(t, e, r);
      case "class":
        return zd.untransform(t, e, r);
      case "custom":
        return Vd.untransform(t, e, r);
      case "typed-array":
        return qd.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Kd[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, Zn = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Hd(t) {
  if (no(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (no(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (no(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var bO = function(t, e) {
  Hd(e);
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
  if (Hd(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (hn(n)) {
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
  if (hn(n) ? n[+d] = r(n[+d]) : oi(n) && (n[d] = r(n[d])), ci(n)) {
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
}, Kr = function(t, e) {
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
}, an = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Ec(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!hn(t)) {
      hs(t, function(a, o) {
        return Ec(a, e, an(an([], Kr(r)), Kr(qs(o))));
      });
      return;
    }
    var n = Kr(t, 2), s = n[0], i = n[1];
    i && hs(i, function(a, o) {
      Ec(a, e, an(an([], Kr(r)), Kr(qs(o))));
    }), e(s, r);
  }
}
function wO(t, e, r) {
  return Ec(e, function(n, s) {
    t = _c(t, s, function(i) {
      return vO(i, n, r);
    });
  }), t;
}
function _O(t, e) {
  function r(a, o) {
    var u = bO(t, qs(o));
    a.map(qs).forEach(function(c) {
      t = _c(t, c, function() {
        return u;
      });
    });
  }
  if (hn(e)) {
    var n = Kr(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = _c(t, qs(a), function() {
        return t;
      });
    }), i && hs(i, r);
  } else
    hs(e, r);
  return t;
}
var EO = function(t, e) {
  return oi(t) || hn(t) || ai(t) || ci(t) || Bd(t, e);
};
function SO(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function xO(t) {
  var e = {}, r = void 0;
  return t.forEach(function(n) {
    if (!(n.length <= 1)) {
      var s = Kr(n.map(function(o) {
        return o.map(String);
      }).sort(function(o, u) {
        return o.length - u.length;
      })), i = s[0], a = s.slice(1);
      i.length === 0 ? r = a.map(Sa) : e[Sa(i)] = a.map(Sa);
    }
  }), r ? mc(e) ? [r] : [r, e] : mc(e) ? void 0 : e;
}
var Wd = function(t, e, r, n, s) {
  var i;
  if (n === void 0 && (n = []), s === void 0 && (s = []), Pf(t) || SO(t, n, e), !EO(t, r)) {
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
  Pf(t) || (s = an(an([], Kr(s)), [t]));
  var c = hn(u) ? [] : {}, f = {};
  return hs(u, function(d, p) {
    var m = Wd(d, e, r, an(an([], Kr(n)), [p]), s);
    c[p] = m.transformedValue, hn(m.annotations) ? f[p] = m.annotations : oi(m.annotations) && hs(m.annotations, function(v, E) {
      f[jd(p) + "." + E] = v;
    });
  }), mc(f) ? {
    transformedValue: c,
    annotations: o ? [o.type] : void 0
  } : {
    transformedValue: c,
    annotations: o ? [o.type, f] : f
  };
};
function Gd(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function OO(t) {
  if (Gd(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Lf(t) {
  return Gd(t) === "Array";
}
function DO(t, e, r, n, s) {
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
  if (!OO(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Lf(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = Sc(a, e);
    return DO(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var Dn = function() {
  return Dn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Dn.apply(this, arguments);
}, IO = function(t, e) {
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
}, CO = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Qd = (
  /** @class */
  function() {
    function t() {
      this.classRegistry = new Xx(), this.symbolRegistry = new Fd(function(e) {
        var r;
        return (r = e.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new nO(), this.allowedErrorProps = [];
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Wd(e, r, this), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Dn(Dn({}, s.meta), { values: n.annotations }));
      var i = xO(r);
      return i && (s.meta = Dn(Dn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = Sc(r);
      return n != null && n.values && (s = wO(s, n.values, this)), n != null && n.referentialEqualities && (s = _O(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Dn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, CO([], IO(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), RO = Qd.serialize, m3 = Qd.stringify;
function v3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function b3(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function w3({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function _3({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function E3(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var S3 = (t, e = !1) => {
  const {
    json: r
  } = RO(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, Hi = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, TO = (t, e) => t.queryHash.localeCompare(e.queryHash), Zd = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, AO = (t, e) => Hi(t) === Hi(e) ? Zd(t, e) : Hi(t) > Hi(e) ? 1 : -1, x3 = {
  status: AO,
  "query hash": TO,
  "last updated": Zd
}, Wi = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, Yd = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, PO = (t, e) => Wi(t) === Wi(e) ? Yd(t, e) : Wi(t) > Wi(e) ? 1 : -1, O3 = {
  status: PO,
  "last updated": Yd
}, D3 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), I3 = () => {
  const [t, e] = Ht("dark");
  return fx(() => {
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
}, NO = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, ts, ui, li, fi, Rn, hi, rs, ns, ss, is, os, di, Ff, LO = (Ff = class {
  constructor(t) {
    ir(this, ts, void 0);
    ir(this, ui, void 0);
    ir(this, li, void 0);
    ir(this, fi, void 0);
    ir(this, Rn, !1);
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
    bt(this, rs)[1](t);
  }
  setPosition(t) {
    bt(this, ns)[1](t);
  }
  setInitialIsOpen(t) {
    bt(this, ss)[1](t);
  }
  setErrorTypes(t) {
    bt(this, is)[1](t);
  }
  setClient(t) {
    bt(this, ts)[1](t);
  }
  mount(t) {
    if (bt(this, Rn))
      throw new Error("Devtools is already mounted");
    const e = Ux(() => {
      const [r] = bt(this, rs), [n] = bt(this, ns), [s] = bt(this, ss), [i] = bt(this, is), [a] = bt(this, ts);
      let o;
      bt(this, os) ? o = bt(this, os) : (o = Ox(() => import("./N66J3ZXT-KzEXE-5a.js")), Yt(this, os, o)), NO(bt(this, hi));
      const u = this;
      return _x(o, Sx({
        get queryFlavor() {
          return bt(u, li);
        },
        get version() {
          return bt(u, fi);
        },
        get onlineManager() {
          return bt(u, ui);
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
    Yt(this, Rn, !0), Yt(this, di, e);
  }
  unmount() {
    var t;
    if (!bt(this, Rn))
      throw new Error("Devtools is not mounted");
    (t = bt(this, di)) == null || t.call(this), Yt(this, Rn, !1);
  }
}, ts = new WeakMap(), ui = new WeakMap(), li = new WeakMap(), fi = new WeakMap(), Rn = new WeakMap(), hi = new WeakMap(), rs = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), os = new WeakMap(), di = new WeakMap(), Ff);
function FO(t) {
  const e = wd(), r = t.client || e, n = Cp(null), { buttonPosition: s, position: i, initialIsOpen: a, errorTypes: o, styleNonce: u } = t, [c] = js(
    new LO({
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
  }), [c]), /* @__PURE__ */ dn.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var MO = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : FO;
const UO = new LS(), C3 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (At(() => {
  Z1({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), gi.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Ef.jsxs(kS, { client: UO, children: [
  i && /* @__PURE__ */ Ef.jsx(MO, { initialIsOpen: !1 }),
  s
] }));
export {
  So as $,
  S3 as A,
  t3 as B,
  ii as C,
  Sd as D,
  n3 as E,
  c3 as F,
  a3 as G,
  i3 as H,
  o3 as I,
  u3 as J,
  Gi as K,
  d3 as L,
  p3 as M,
  D3 as N,
  b3 as O,
  v3 as P,
  It as Q,
  Mp as R,
  l3 as S,
  Mf as T,
  An as U,
  xx as V,
  g3 as W,
  qx as X,
  m3 as Y,
  h3 as Z,
  f3 as _,
  $t as a,
  FD as a$,
  Qi as a0,
  s3 as a1,
  y3 as a2,
  Id as a3,
  Sf as a4,
  Xl as a5,
  Xa as a6,
  Ja as a7,
  tc as a8,
  ec as a9,
  xy as aA,
  vy as aB,
  rD as aC,
  by as aD,
  sD as aE,
  wy as aF,
  _y as aG,
  Iy as aH,
  cD as aI,
  Ey as aJ,
  Sy as aK,
  eD as aL,
  Oy as aM,
  Wc as aN,
  qo as aO,
  Gc as aP,
  G1 as aQ,
  Q1 as aR,
  yD as aS,
  cc as aT,
  CD as aU,
  RD as aV,
  TD as aW,
  AD as aX,
  PD as aY,
  ND as aZ,
  LD as a_,
  Qc as aa,
  JE as ab,
  ZE as ac,
  YE as ad,
  XE as ae,
  eS as af,
  QE as ag,
  mD as ah,
  OD as ai,
  xD as aj,
  _D as ak,
  DD as al,
  bD as am,
  wD as an,
  ED as ao,
  SD as ap,
  vD as aq,
  ID as ar,
  cs as as,
  Z1 as at,
  tt as au,
  my as av,
  WO as aw,
  Dy as ax,
  Cy as ay,
  fD as az,
  x3 as b,
  MD as b0,
  UD as b1,
  jD as b2,
  $D as b3,
  kD as b4,
  cd as b5,
  Oi as b6,
  tS as b7,
  ud as b8,
  Dr as b9,
  XD as ba,
  qD as bb,
  BD as bc,
  zD as bd,
  VD as be,
  KD as bf,
  HD as bg,
  WD as bh,
  GD as bi,
  QD as bj,
  ZD as bk,
  YD as bl,
  JD as bm,
  UO as bn,
  C3 as bo,
  Ht as c,
  jx as d,
  rr as e,
  _x as f,
  I3 as g,
  Dd as h,
  fx as i,
  gc as j,
  Pn as k,
  kx as l,
  O3 as m,
  Eu as n,
  qO as o,
  wr as p,
  r3 as q,
  pc as r,
  Yo as s,
  kO as t,
  w3 as u,
  _3 as v,
  Vx as w,
  Sx as x,
  as as y,
  E3 as z
};
