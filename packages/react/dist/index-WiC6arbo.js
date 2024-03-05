import * as L from "react";
import Wo, { useEffect as Pr, useState as oo, useMemo as Ip } from "react";
import { create as Op } from "zustand";
import { useQuery as Nd, useQueryClient as Cp, onlineManager as pl, notifyManager as Tp, QueryClient as kp, QueryClientProvider as Rp } from "@tanstack/react-query";
import { getSdkError as kc } from "@walletconnect/utils";
import Ad from "events";
import { WalletConnectModalSign as Pp } from "@walletconnect/modal-sign-html";
import Np from "debug";
const Ap = Symbol(), gl = Object.getPrototypeOf, Ta = /* @__PURE__ */ new WeakMap(), Lp = (t) => t && (Ta.has(t) ? Ta.get(t) : gl(t) === Object.prototype || gl(t) === Array.prototype), jp = (t) => Lp(t) && t[Ap] || null, ml = (t, e = !0) => {
  Ta.set(t, e);
};
var go = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ca = (t) => typeof t == "object" && t !== null, yn = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakSet(), Dp = (t = Object.is, e = (c, d) => new Proxy(c, d), r = (c) => ca(c) && !Ji.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), n = (c) => {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      throw c;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (c, d, f = n) => {
  const p = s.get(c);
  if ((p == null ? void 0 : p[0]) === d)
    return p[1];
  const m = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
  return ml(m, !0), s.set(c, [d, m]), Reflect.ownKeys(c).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const _ = Reflect.get(c, v), C = {
      value: _,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Ji.has(_))
      ml(_, !1);
    else if (_ instanceof Promise)
      delete C.value, C.get = () => f(_);
    else if (yn.has(_)) {
      const [M, b] = yn.get(
        _
      );
      C.value = i(
        M,
        b(),
        f
      );
    }
    Object.defineProperty(m, v, C);
  }), Object.preventExtensions(m);
}, o = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (c) => {
  if (!ca(c))
    throw new Error("object required");
  const d = o.get(c);
  if (d)
    return d;
  let f = a[0];
  const p = /* @__PURE__ */ new Set(), m = (g, N = ++a[0]) => {
    f !== N && (f = N, p.forEach((A) => A(g, N)));
  };
  let v = a[1];
  const _ = (g = ++a[1]) => (v !== g && !p.size && (v = g, M.forEach(([N]) => {
    const A = N[1](g);
    A > f && (f = A);
  })), f), C = (g) => (N, A) => {
    const $ = [...N];
    $[1] = [g, ...$[1]], m($, A);
  }, M = /* @__PURE__ */ new Map(), b = (g, N) => {
    if ((go ? "production" : void 0) !== "production" && M.has(g))
      throw new Error("prop listener already exists");
    if (p.size) {
      const A = N[3](C(g));
      M.set(g, [N, A]);
    } else
      M.set(g, [N]);
  }, I = (g) => {
    var N;
    const A = M.get(g);
    A && (M.delete(g), (N = A[1]) == null || N.call(A));
  }, w = (g) => (p.add(g), p.size === 1 && M.forEach(([N, A], $) => {
    if ((go ? "production" : void 0) !== "production" && A)
      throw new Error("remove already exists");
    const J = N[3](C($));
    M.set($, [N, J]);
  }), () => {
    p.delete(g), p.size === 0 && M.forEach(([N, A], $) => {
      A && (A(), M.set($, [N]));
    });
  }), S = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), y = e(S, {
    deleteProperty(g, N) {
      const A = Reflect.get(g, N);
      I(N);
      const $ = Reflect.deleteProperty(g, N);
      return $ && m(["delete", [N], A]), $;
    },
    set(g, N, A, $) {
      const J = Reflect.has(g, N), K = Reflect.get(g, N, $);
      if (J && (t(K, A) || o.has(A) && t(K, o.get(A))))
        return !0;
      I(N), ca(A) && (A = jp(A) || A);
      let T = A;
      if (A instanceof Promise)
        A.then((k) => {
          A.status = "fulfilled", A.value = k, m(["resolve", [N], k]);
        }).catch((k) => {
          A.status = "rejected", A.reason = k, m(["reject", [N], k]);
        });
      else {
        !yn.has(A) && r(A) && (T = l(A));
        const k = !Ji.has(T) && yn.get(T);
        k && b(N, k);
      }
      return Reflect.set(g, N, T, $), m(["set", [N], A, K]), !0;
    }
  });
  o.set(c, y);
  const u = [
    S,
    _,
    i,
    w
  ];
  return yn.set(y, u), Reflect.ownKeys(c).forEach((g) => {
    const N = Object.getOwnPropertyDescriptor(
      c,
      g
    );
    "value" in N && (y[g] = c[g], delete N.value, delete N.writable), Object.defineProperty(S, g, N);
  }), y;
}) => [
  // public functions
  l,
  // shared state
  yn,
  Ji,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  o,
  a
], [Mp] = Dp();
function Ln(t = {}) {
  return Mp(t);
}
function es(t, e, r) {
  const n = yn.get(t);
  (go ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], o = n[3];
  let a = !1;
  const l = o((c) => {
    if (i.push(c), r) {
      e(i.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, a && e(i.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, l();
  };
}
function zp(t, e) {
  const r = yn.get(t);
  (go ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const kt = Ln({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ld = { state: kt, subscribe(t) {
  return es(kt, () => t(kt));
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
} }, Wt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Wt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return Wt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (Wt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!Wt.isHttpUrl(t))
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
    localStorage.setItem(Wt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(Wt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Wt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Wt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Ld.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Up = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ut = Ln({ enabled: Up, userSessionId: "", events: [], connectedWalletId: void 0 }), Vp = { state: Ut, subscribe(t) {
  return es(Ut.events, () => t(zp(Ut.events[Ut.events.length - 1])));
}, initialize() {
  Ut.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Ut.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Ut.connectedWalletId = t;
}, click(t) {
  if (Ut.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Ut.userSessionId, timestamp: Date.now(), data: t };
    Ut.events.push(e);
  }
}, track(t) {
  if (Ut.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Ut.userSessionId, timestamp: Date.now(), data: t };
    Ut.events.push(e);
  }
}, view(t) {
  if (Ut.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Ut.userSessionId, timestamp: Date.now(), data: t };
    Ut.events.push(e);
  }
} }, Ur = Ln({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), xr = { state: Ur, subscribe(t) {
  return es(Ur, () => t(Ur));
}, setChains(t) {
  Ur.chains = t;
}, setWalletConnectUri(t) {
  Ur.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Ur.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Ur.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Ur.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Ur.isUiLoaded = t;
}, setIsAuth(t) {
  Ur.isAuth = t;
} }, Xi = Ln({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), xs = { state: Xi, subscribe(t) {
  return es(Xi, () => t(Xi));
}, setConfig(t) {
  var e, r;
  Vp.initialize(), xr.setChains(t.chains), xr.setIsAuth(!!t.enableAuthMode), xr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), xr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Wt.setModalVersionInStorage(), Object.assign(Xi, t);
} };
var $p = Object.defineProperty, yl = Object.getOwnPropertySymbols, qp = Object.prototype.hasOwnProperty, Wp = Object.prototype.propertyIsEnumerable, vl = (t, e, r) => e in t ? $p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zp = (t, e) => {
  for (var r in e || (e = {}))
    qp.call(e, r) && vl(t, r, e[r]);
  if (yl)
    for (var r of yl(e))
      Wp.call(e, r) && vl(t, r, e[r]);
  return t;
};
const ka = "https://explorer-api.walletconnect.com", Ra = "wcm", Pa = "js-2.6.2";
async function eo(t, e) {
  const r = Zp({ sdkType: Ra, sdkVersion: Pa }, e), n = new URL(t, ka);
  return n.searchParams.append("projectId", xs.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const zn = { async getDesktopListings(t) {
  return eo("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return eo("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return eo("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return eo("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${ka}/w3m/v1/getWalletImage/${t}?projectId=${xs.state.projectId}&sdkType=${Ra}&sdkVersion=${Pa}`;
}, getAssetImageUrl(t) {
  return `${ka}/w3m/v1/getAssetImage/${t}?projectId=${xs.state.projectId}&sdkType=${Ra}&sdkVersion=${Pa}`;
} };
var Fp = Object.defineProperty, _l = Object.getOwnPropertySymbols, Hp = Object.prototype.hasOwnProperty, Bp = Object.prototype.propertyIsEnumerable, bl = (t, e, r) => e in t ? Fp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kp = (t, e) => {
  for (var r in e || (e = {}))
    Hp.call(e, r) && bl(t, r, e[r]);
  if (_l)
    for (var r of _l(e))
      Bp.call(e, r) && bl(t, r, e[r]);
  return t;
};
const wl = Wt.isMobile(), Vr = Ln({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Y6 = { state: Vr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = xs.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Vr.recomendedWallets;
  if (Wt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await zn.getAllListings(r), s = Object.values(n);
    s.sort((i, o) => {
      const a = t.indexOf(i.id), l = t.indexOf(o.id);
      return a - l;
    }), Vr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = xr.state, s = r == null ? void 0 : r.join(","), i = Wt.isArray(e), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Wt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: a } = wl ? await zn.getMobileListings(o) : await zn.getDesktopListings(o);
    Vr.recomendedWallets = Object.values(a);
  }
  return Vr.recomendedWallets;
}, async getWallets(t) {
  const e = Kp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = xs.state, { recomendedWallets: s } = Vr;
  if (n === "ALL")
    return Vr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Wt.isArray(r) && (e.excludedIds = r.join(",")), Wt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), xr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: o } = t, { listings: a, total: l } = wl ? await zn.getMobileListings(e) : await zn.getDesktopListings(e), c = Object.values(a), d = o ? "search" : "wallets";
  return Vr[d] = { listings: [...Vr[d].listings, ...c], total: l, page: i ?? 1 }, { listings: c, total: l };
}, getWalletImageUrl(t) {
  return zn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return zn.getAssetImageUrl(t);
}, resetSearch() {
  Vr.search = { listings: [], total: 0, page: 1 };
} }, as = Ln({ open: !1 }), la = { state: as, subscribe(t) {
  return es(as, () => t(as));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = xr.state;
    if (Wt.removeWalletConnectDeepLink(), xr.setWalletConnectUri(t == null ? void 0 : t.uri), xr.setChains(t == null ? void 0 : t.chains), Ld.reset("ConnectWallet"), r && n)
      as.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = xr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), as.open = !0, e());
      }, 200);
    }
  });
}, close() {
  as.open = !1;
} };
var Yp = Object.defineProperty, El = Object.getOwnPropertySymbols, Gp = Object.prototype.hasOwnProperty, Qp = Object.prototype.propertyIsEnumerable, Sl = (t, e, r) => e in t ? Yp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jp = (t, e) => {
  for (var r in e || (e = {}))
    Gp.call(e, r) && Sl(t, r, e[r]);
  if (El)
    for (var r of El(e))
      Qp.call(e, r) && Sl(t, r, e[r]);
  return t;
};
function Xp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const zs = Ln({ themeMode: Xp() ? "dark" : "light" }), xl = { state: zs, subscribe(t) {
  return es(zs, () => t(zs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (zs.themeMode = e), r && (zs.themeVariables = Jp({}, r));
} }, Un = Ln({ open: !1, message: "", variant: "success" }), G6 = { state: Un, subscribe(t) {
  return es(Un, () => t(Un));
}, openToast(t, e) {
  Un.open = !0, Un.message = t, Un.variant = e;
}, closeToast() {
  Un.open = !1;
} };
let eg = class {
  constructor(t) {
    this.openModal = la.open, this.closeModal = la.close, this.subscribeModal = la.subscribe, this.setTheme = xl.setThemeConfig, xl.setThemeConfig(t), xs.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-hRTKT3hw-D0S1l5T6.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), xr.setIsUiLoaded(!0);
    }
  }
};
var wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Fo(t) {
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
var Rc = { exports: {} }, _s = typeof Reflect == "object" ? Reflect : null, Il = _s && typeof _s.apply == "function" ? _s.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, ao;
_s && typeof _s.ownKeys == "function" ? ao = _s.ownKeys : Object.getOwnPropertySymbols ? ao = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ao = function(t) {
  return Object.getOwnPropertyNames(t);
};
function tg(t) {
  console && console.warn && console.warn(t);
}
var jd = Number.isNaN || function(t) {
  return t !== t;
};
function Xe() {
  Xe.init.call(this);
}
Rc.exports = Xe;
Rc.exports.once = ig;
Xe.EventEmitter = Xe;
Xe.prototype._events = void 0;
Xe.prototype._eventsCount = 0;
Xe.prototype._maxListeners = void 0;
var Ol = 10;
function Ho(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Xe, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ol;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || jd(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Ol = t;
  }
});
Xe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Xe.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || jd(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Dd(t) {
  return t._maxListeners === void 0 ? Xe.defaultMaxListeners : t._maxListeners;
}
Xe.prototype.getMaxListeners = function() {
  return Dd(this);
};
Xe.prototype.emit = function(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e.push(arguments[r]);
  var n = t === "error", s = this._events;
  if (s !== void 0)
    n = n && s.error === void 0;
  else if (!n)
    return !1;
  if (n) {
    var i;
    if (e.length > 0 && (i = e[0]), i instanceof Error)
      throw i;
    var o = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw o.context = i, o;
  }
  var a = s[t];
  if (a === void 0)
    return !1;
  if (typeof a == "function")
    Il(a, this, e);
  else
    for (var l = a.length, c = $d(a, l), r = 0; r < l; ++r)
      Il(c[r], this, e);
  return !0;
};
function Md(t, e, r, n) {
  var s, i, o;
  if (Ho(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), o = i[e]), o === void 0)
    o = i[e] = r, ++t._eventsCount;
  else if (typeof o == "function" ? o = i[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), s = Dd(t), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = o.length, tg(a);
  }
  return t;
}
Xe.prototype.addListener = function(t, e) {
  return Md(this, t, e, !1);
};
Xe.prototype.on = Xe.prototype.addListener;
Xe.prototype.prependListener = function(t, e) {
  return Md(this, t, e, !0);
};
function rg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function zd(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = rg.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
Xe.prototype.once = function(t, e) {
  return Ho(e), this.on(t, zd(this, t, e)), this;
};
Xe.prototype.prependOnceListener = function(t, e) {
  return Ho(e), this.prependListener(t, zd(this, t, e)), this;
};
Xe.prototype.removeListener = function(t, e) {
  var r, n, s, i, o;
  if (Ho(e), n = this._events, n === void 0)
    return this;
  if (r = n[t], r === void 0)
    return this;
  if (r === e || r.listener === e)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
  else if (typeof r != "function") {
    for (s = -1, i = r.length - 1; i >= 0; i--)
      if (r[i] === e || r[i].listener === e) {
        o = r[i].listener, s = i;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? r.shift() : ng(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, o || e);
  }
  return this;
};
Xe.prototype.off = Xe.prototype.removeListener;
Xe.prototype.removeAllListeners = function(t) {
  var e, r, n;
  if (r = this._events, r === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(r), i;
    for (n = 0; n < s.length; ++n)
      i = s[n], i !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (e = r[t], typeof e == "function")
    this.removeListener(t, e);
  else if (e !== void 0)
    for (n = e.length - 1; n >= 0; n--)
      this.removeListener(t, e[n]);
  return this;
};
function Ud(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? sg(s) : $d(s, s.length);
}
Xe.prototype.listeners = function(t) {
  return Ud(this, t, !0);
};
Xe.prototype.rawListeners = function(t) {
  return Ud(this, t, !1);
};
Xe.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Vd.call(t, e);
};
Xe.prototype.listenerCount = Vd;
function Vd(t) {
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
Xe.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ao(this._events) : [];
};
function $d(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function ng(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function sg(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function ig(t, e) {
  return new Promise(function(r, n) {
    function s(o) {
      t.removeListener(e, i), n(o);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    qd(t, e, i, { once: !0 }), e !== "error" && og(t, s, { once: !0 });
  });
}
function og(t, e, r) {
  typeof t.on == "function" && qd(t, "error", e, r);
}
function qd(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Lr = Rc.exports;
const Pc = /* @__PURE__ */ Zo(Lr), ag = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, cg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, lg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ug(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    dg(t);
    return;
  }
  return e;
}
function dg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function to(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.endsWith('"') && !t.includes("\\")
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
  if (!lg.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (ag.test(t) || cg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, ug);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function hg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Rt(t, ...e) {
  try {
    return hg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function fg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function pg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function co(t) {
  if (fg(t))
    return String(t);
  if (pg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return co(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Wd() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Na = "base64:";
function gg(t) {
  if (typeof t == "string")
    return t;
  Wd();
  const e = Buffer.from(t).toString("base64");
  return Na + e;
}
function mg(t) {
  return typeof t != "string" || !t.startsWith(Na) ? t : (Wd(), Buffer.from(t.slice(Na.length), "base64"));
}
function nr(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function yg(...t) {
  return nr(t.join(":"));
}
function ro(t) {
  return t = nr(t), t ? t + ":" : "";
}
const vg = "memory", _g = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: vg,
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
function bg(t = {}) {
  const e = {
    mounts: { "": t.driver || _g() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (c) => {
    for (const d of e.mountpoints)
      if (c.startsWith(d))
        return {
          base: d,
          relativeKey: c.slice(d.length),
          driver: e.mounts[d]
        };
    return {
      base: "",
      relativeKey: c,
      driver: e.mounts[""]
    };
  }, n = (c, d) => e.mountpoints.filter(
    (f) => f.startsWith(c) || d && c.startsWith(f)
  ).map((f) => ({
    relativeBase: c.length > f.length ? c.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (c, d) => {
    if (e.watching) {
      d = nr(d);
      for (const f of e.watchListeners)
        f(c, d);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const c in e.mounts)
        e.unwatch[c] = await Cl(
          e.mounts[c],
          s,
          c
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const c in e.unwatch)
        await e.unwatch[c]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (c, d, f) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let _ = p.get(v.base);
      return _ || (_ = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, _)), _;
    };
    for (const v of c) {
      const _ = typeof v == "string", C = nr(_ ? v : v.key), M = _ ? void 0 : v.value, b = _ || !v.options ? d : { ...d, ...v.options }, I = r(C);
      m(I).items.push({
        key: C,
        value: M,
        relativeKey: I.relativeKey,
        options: b
      });
    }
    return Promise.all([...p.values()].map((v) => f(v))).then(
      (v) => v.flat()
    );
  }, l = {
    // Item
    hasItem(c, d = {}) {
      c = nr(c);
      const { relativeKey: f, driver: p } = r(c);
      return Rt(p.hasItem, f, d);
    },
    getItem(c, d = {}) {
      c = nr(c);
      const { relativeKey: f, driver: p } = r(c);
      return Rt(p.getItem, f, d).then(
        (m) => to(m)
      );
    },
    getItems(c, d) {
      return a(c, d, (f) => f.driver.getItems ? Rt(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        d
      ).then(
        (p) => p.map((m) => ({
          key: yg(f.base, m.key),
          value: to(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => Rt(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: to(m)
        })))
      ));
    },
    getItemRaw(c, d = {}) {
      c = nr(c);
      const { relativeKey: f, driver: p } = r(c);
      return p.getItemRaw ? Rt(p.getItemRaw, f, d) : Rt(p.getItem, f, d).then(
        (m) => mg(m)
      );
    },
    async setItem(c, d, f = {}) {
      if (d === void 0)
        return l.removeItem(c);
      c = nr(c);
      const { relativeKey: p, driver: m } = r(c);
      m.setItem && (await Rt(m.setItem, p, co(d), f), m.watch || s("update", c));
    },
    async setItems(c, d) {
      await a(c, d, async (f) => {
        f.driver.setItems && await Rt(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: co(p.value),
            options: p.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => Rt(
            f.driver.setItem,
            p.relativeKey,
            co(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(c, d, f = {}) {
      if (d === void 0)
        return l.removeItem(c, f);
      c = nr(c);
      const { relativeKey: p, driver: m } = r(c);
      if (m.setItemRaw)
        await Rt(m.setItemRaw, p, d, f);
      else if (m.setItem)
        await Rt(m.setItem, p, gg(d), f);
      else
        return;
      m.watch || s("update", c);
    },
    async removeItem(c, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), c = nr(c);
      const { relativeKey: f, driver: p } = r(c);
      p.removeItem && (await Rt(p.removeItem, f, d), (d.removeMeta || d.removeMata) && await Rt(p.removeItem, f + "$", d), p.watch || s("remove", c));
    },
    // Meta
    async getMeta(c, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), c = nr(c);
      const { relativeKey: f, driver: p } = r(c), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await Rt(p.getMeta, f, d)), !d.nativeOnly) {
        const v = await Rt(
          p.getItem,
          f + "$",
          d
        ).then((_) => to(_));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(c, d, f = {}) {
      return this.setItem(c + "$", d, f);
    },
    removeMeta(c, d = {}) {
      return this.removeItem(c + "$", d);
    },
    // Keys
    async getKeys(c, d = {}) {
      c = ro(c);
      const f = n(c, !0);
      let p = [];
      const m = [];
      for (const v of f) {
        const _ = (await Rt(
          v.driver.getKeys,
          v.relativeBase,
          d
        )).map((C) => v.mountpoint + nr(C)).filter((C) => !p.some((M) => C.startsWith(M)));
        m.push(..._), p = [
          v.mountpoint,
          ...p.filter((C) => !C.startsWith(v.mountpoint))
        ];
      }
      return c ? m.filter((v) => v.startsWith(c) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(c, d = {}) {
      c = ro(c), await Promise.all(
        n(c, !1).map(async (f) => {
          if (f.driver.clear)
            return Rt(f.driver.clear, f.relativeBase, d);
          if (f.driver.removeItem) {
            const p = await f.driver.getKeys(f.relativeBase || "", d);
            return Promise.all(
              p.map((m) => f.driver.removeItem(m, d))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((c) => Tl(c))
      );
    },
    async watch(c) {
      return await i(), e.watchListeners.push(c), async () => {
        e.watchListeners = e.watchListeners.filter(
          (d) => d !== c
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(c, d) {
      if (c = ro(c), c && e.mounts[c])
        throw new Error(`already mounted at ${c}`);
      return c && (e.mountpoints.push(c), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[c] = d, e.watching && Promise.resolve(Cl(d, s, c)).then((f) => {
        e.unwatch[c] = f;
      }).catch(console.error), l;
    },
    async unmount(c, d = !0) {
      c = ro(c), !(!c || !e.mounts[c]) && (e.watching && c in e.unwatch && (e.unwatch[c](), delete e.unwatch[c]), d && await Tl(e.mounts[c]), e.mountpoints = e.mountpoints.filter((f) => f !== c), delete e.mounts[c]);
    },
    getMount(c = "") {
      c = nr(c) + ":";
      const d = r(c);
      return {
        driver: d.driver,
        base: d.base
      };
    },
    getMounts(c = "", d = {}) {
      return c = nr(c), n(c, d.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    }
  };
  return l;
}
function Cl(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Tl(t) {
  typeof t.dispose == "function" && await Rt(t.dispose);
}
function ts(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Zd(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = ts(r);
  return (s, i) => n.then((o) => i(o.transaction(e, s).objectStore(e)));
}
let ua;
function ki() {
  return ua || (ua = Zd("keyval-store", "keyval")), ua;
}
function kl(t, e = ki()) {
  return e("readonly", (r) => ts(r.get(t)));
}
function wg(t, e, r = ki()) {
  return r("readwrite", (n) => (n.put(e, t), ts(n.transaction)));
}
function Eg(t, e = ki()) {
  return e("readwrite", (r) => (r.delete(t), ts(r.transaction)));
}
function Sg(t = ki()) {
  return t("readwrite", (e) => (e.clear(), ts(e.transaction)));
}
function xg(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, ts(t.transaction);
}
function Ig(t = ki()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return ts(e.getAllKeys());
    const r = [];
    return xg(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Og = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Cg = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Bo(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Cg(t);
  } catch {
    return t;
  }
}
function Ri(t) {
  return typeof t == "string" ? t : Og(t) || "";
}
const Tg = "idb-keyval";
var kg = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Zd(t.dbName, t.storeName)), { name: Tg, options: t, async hasItem(s) {
    return !(typeof await kl(r(s), n) > "u");
  }, async getItem(s) {
    return await kl(r(s), n) ?? null;
  }, setItem(s, i) {
    return wg(r(s), i, n);
  }, removeItem(s) {
    return Eg(r(s), n);
  }, getKeys() {
    return Ig(n);
  }, clear() {
    return Sg(n);
  } };
};
const Rg = "WALLET_CONNECT_V2_INDEXED_DB", Pg = "keyvaluestorage";
let Ng = class {
  constructor() {
    this.indexedDb = bg({ driver: kg({ dbName: Rg, storeName: Pg }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e = await this.indexedDb.getItem(t);
    if (e !== null)
      return e;
  }
  async setItem(t, e) {
    await this.indexedDb.setItem(t, Ri(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lo = { exports: {} };
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
  }), typeof da < "u" && da.localStorage ? lo.exports = da.localStorage : typeof window < "u" && window.localStorage ? lo.exports = window.localStorage : lo.exports = new e();
})();
function Ag(t) {
  var e;
  return [t[0], Bo((e = t[1]) != null ? e : "")];
}
class Lg {
  constructor() {
    this.localStorage = lo.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Ag);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Bo(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Ri(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const jg = "wc_storage_version", Rl = 1, Dg = async (t, e, r) => {
  const n = jg, s = await e.getItem(n);
  if (s && s >= Rl) {
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
      const c = await t.getItem(a);
      await e.setItem(a, c), o.push(a);
    }
  }
  await e.setItem(n, Rl), r(e), Mg(t, o);
}, Mg = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let zg = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new Lg();
    this.storage = t;
    try {
      const e = new Ng();
      Dg(t, e, this.setInitialized);
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
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e) {
    return await this.initialize(), this.storage.setItem(t, e);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e = setInterval(() => {
        this.initialized && (clearInterval(e), t());
      }, 20);
    });
  }
};
var Rs = {};
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
var Aa = function(t, e) {
  return Aa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, Aa(t, e);
};
function Ug(t, e) {
  Aa(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var La = function() {
  return La = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, La.apply(this, arguments);
};
function Vg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function $g(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function qg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Wg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Zg(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(d) {
      try {
        c(n.next(d));
      } catch (f) {
        o(f);
      }
    }
    function l(d) {
      try {
        c(n.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function c(d) {
      d.done ? i(d.value) : s(d.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Fg(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
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
      } catch (d) {
        c = [6, d], s = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Hg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Bg(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function ja(t) {
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
function Fd(t, e) {
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
function Kg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Fd(arguments[e]));
  return t;
}
function Yg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function Xs(t) {
  return this instanceof Xs ? (this.v = t, this) : new Xs(t);
}
function Gg(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(v, _) {
        i.push([p, m, v, _]) > 1 || a(p, m);
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
    p.value instanceof Xs ? Promise.resolve(p.value.v).then(c, d) : f(i[0][2], p);
  }
  function c(p) {
    a("next", p);
  }
  function d(p) {
    a("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Qg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: Xs(t[s](o)), done: s === "return" } : i ? i(o) : o;
    } : i;
  }
}
function Jg(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ja == "function" ? ja(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
    Promise.resolve(l).then(function(c) {
      i({ value: c, done: a });
    }, o);
  }
}
function Xg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function em(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function tm(t) {
  return t && t.__esModule ? t : { default: t };
}
function rm(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function nm(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return La;
  },
  __asyncDelegator: Qg,
  __asyncGenerator: Gg,
  __asyncValues: Jg,
  __await: Xs,
  __awaiter: Zg,
  __classPrivateFieldGet: rm,
  __classPrivateFieldSet: nm,
  __createBinding: Hg,
  __decorate: $g,
  __exportStar: Bg,
  __extends: Ug,
  __generator: Fg,
  __importDefault: tm,
  __importStar: em,
  __makeTemplateObject: Xg,
  __metadata: Wg,
  __param: qg,
  __read: Fd,
  __rest: Vg,
  __spread: Kg,
  __spreadArrays: Yg,
  __values: ja
}, Symbol.toStringTag, { value: "Module" })), Yr = /* @__PURE__ */ Fo(sm);
var Us = {}, le = {}, Pl = {}, Vs = {}, Nl;
function im() {
  if (Nl)
    return Vs;
  Nl = 1, Object.defineProperty(Vs, "__esModule", { value: !0 }), Vs.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Vs.delay = t, Vs;
}
var Vn = {}, Al = {}, cs = {}, Ll;
function om() {
  return Ll || (Ll = 1, Object.defineProperty(cs, "__esModule", { value: !0 }), cs.ONE_THOUSAND = cs.ONE_HUNDRED = void 0, cs.ONE_HUNDRED = 100, cs.ONE_THOUSAND = 1e3), cs;
}
var jl = {}, Dl;
function am() {
  return Dl || (Dl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(jl)), jl;
}
var Ml;
function Hd() {
  return Ml || (Ml = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Yr;
    e.__exportStar(om(), t), e.__exportStar(am(), t);
  }(Al)), Al;
}
var zl;
function cm() {
  if (zl)
    return Vn;
  zl = 1, Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.fromMiliseconds = Vn.toMiliseconds = void 0;
  const t = Hd();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Vn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Vn.fromMiliseconds = r, Vn;
}
var Ul;
function lm() {
  return Ul || (Ul = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Yr;
    e.__exportStar(im(), t), e.__exportStar(cm(), t);
  }(Pl)), Pl;
}
var ls = {}, Vl;
function um() {
  if (Vl)
    return ls;
  Vl = 1, Object.defineProperty(ls, "__esModule", { value: !0 }), ls.Watch = void 0;
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
  return ls.Watch = t, ls.default = t, ls;
}
var $l = {}, $s = {}, ql;
function dm() {
  if (ql)
    return $s;
  ql = 1, Object.defineProperty($s, "__esModule", { value: !0 }), $s.IWatch = void 0;
  class t {
  }
  return $s.IWatch = t, $s;
}
var Wl;
function hm() {
  return Wl || (Wl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(dm(), t);
  }($l)), $l;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Yr;
  e.__exportStar(lm(), t), e.__exportStar(um(), t), e.__exportStar(hm(), t), e.__exportStar(Hd(), t);
})(le);
var Zl = {}, qs = {};
let rs = class {
};
const fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: rs
}, Symbol.toStringTag, { value: "Module" })), pm = /* @__PURE__ */ Fo(fm);
var Fl;
function gm() {
  if (Fl)
    return qs;
  Fl = 1, Object.defineProperty(qs, "__esModule", { value: !0 }), qs.IHeartBeat = void 0;
  const t = pm;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return qs.IHeartBeat = e, qs;
}
var Hl;
function Bd() {
  return Hl || (Hl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(gm(), t);
  }(Zl)), Zl;
}
var Bl = {}, $n = {}, Kl;
function mm() {
  if (Kl)
    return $n;
  Kl = 1, Object.defineProperty($n, "__esModule", { value: !0 }), $n.HEARTBEAT_EVENTS = $n.HEARTBEAT_INTERVAL = void 0;
  const t = le;
  return $n.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, $n.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, $n;
}
var Yl;
function Kd() {
  return Yl || (Yl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(mm(), t);
  }(Bl)), Bl;
}
var Gl;
function ym() {
  if (Gl)
    return Us;
  Gl = 1, Object.defineProperty(Us, "__esModule", { value: !0 }), Us.HeartBeat = void 0;
  const t = Yr, e = Lr, r = le, n = Bd(), s = Kd();
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
  return Us.HeartBeat = i, Us;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Yr;
  e.__exportStar(ym(), t), e.__exportStar(Bd(), t), e.__exportStar(Kd(), t);
})(Rs);
var Fe = {}, ha, Ql;
function vm() {
  if (Ql)
    return ha;
  Ql = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ha = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = i(r);
      for (var c = 1; c < a; c++)
        l[c] = i(n[c]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var d = n.length;
    if (d === 0)
      return r;
    for (var f = "", p = 1 - o, m = -1, v = r && r.length || 0, _ = 0; _ < v; ) {
      if (r.charCodeAt(_) === 37 && _ + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(_ + 1)) {
          case 100:
          case 102:
            if (p >= d || n[p] == null)
              break;
            m < _ && (f += r.slice(m, _)), f += Number(n[p]), m = _ + 2, _++;
            break;
          case 105:
            if (p >= d || n[p] == null)
              break;
            m < _ && (f += r.slice(m, _)), f += Math.floor(Number(n[p])), m = _ + 2, _++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= d || n[p] === void 0)
              break;
            m < _ && (f += r.slice(m, _));
            var C = typeof n[p];
            if (C === "string") {
              f += "'" + n[p] + "'", m = _ + 2, _++;
              break;
            }
            if (C === "function") {
              f += n[p].name || "<anonymous>", m = _ + 2, _++;
              break;
            }
            f += i(n[p]), m = _ + 2, _++;
            break;
          case 115:
            if (p >= d)
              break;
            m < _ && (f += r.slice(m, _)), f += String(n[p]), m = _ + 2, _++;
            break;
          case 37:
            m < _ && (f += r.slice(m, _)), f += "%", m = _ + 2, _++, p--;
            break;
        }
        ++p;
      }
      ++_;
    }
    return m === -1 ? r : (m < v && (f += r.slice(m)), f);
  }
  return ha;
}
var fa, Jl;
function _m() {
  if (Jl)
    return fa;
  Jl = 1;
  const t = vm();
  fa = s;
  const e = S().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: _,
    wrapResponseSerializer: _,
    wrapErrorSerializer: _,
    req: v,
    res: v,
    err: p
  };
  function n(y, u) {
    return Array.isArray(y) ? y.filter(function(g) {
      return g !== "!stdSerializers.err";
    }) : y === !0 ? Object.keys(u) : !1;
  }
  function s(y) {
    y = y || {}, y.browser = y.browser || {};
    const u = y.browser.transmit;
    if (u && typeof u.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = y.browser.write || e;
    y.browser.write && (y.browser.asObject = !0);
    const N = y.serializers || {}, A = n(y.browser.serialize, N);
    let $ = y.browser.serialize;
    Array.isArray(y.browser.serialize) && y.browser.serialize.indexOf("!stdSerializers.err") > -1 && ($ = !1);
    const J = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), y.enabled === !1 && (y.level = "silent");
    const K = y.level || "info", T = Object.create(g);
    T.log || (T.log = C), Object.defineProperty(T, "levelVal", {
      get: B
    }), Object.defineProperty(T, "level", {
      get: q,
      set: z
    });
    const k = {
      transmit: u,
      serialize: A,
      asObject: y.browser.asObject,
      levels: J,
      timestamp: m(y)
    };
    T.levels = s.levels, T.level = K, T.setMaxListeners = T.getMaxListeners = T.emit = T.addListener = T.on = T.prependListener = T.once = T.prependOnceListener = T.removeListener = T.removeAllListeners = T.listeners = T.listenerCount = T.eventNames = T.write = T.flush = C, T.serializers = N, T._serialize = A, T._stdErrSerialize = $, T.child = W, u && (T._logEvent = f());
    function B() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function q() {
      return this._level;
    }
    function z(U) {
      if (U !== "silent" && !this.levels.values[U])
        throw Error("unknown level " + U);
      this._level = U, i(k, T, "error", "log"), i(k, T, "fatal", "error"), i(k, T, "warn", "error"), i(k, T, "info", "log"), i(k, T, "debug", "log"), i(k, T, "trace", "log");
    }
    function W(U, H) {
      if (!U)
        throw new Error("missing bindings for child Pino");
      H = H || {}, A && U.serializers && (H.serializers = U.serializers);
      const de = H.serializers;
      if (A && de) {
        var F = Object.assign({}, N, de), ue = y.browser.serialize === !0 ? Object.keys(F) : A;
        delete U.serializers, l([U], ue, F, this._stdErrSerialize);
      }
      function te(ce) {
        this._childLevel = (ce._childLevel | 0) + 1, this.error = c(ce, U, "error"), this.fatal = c(ce, U, "fatal"), this.warn = c(ce, U, "warn"), this.info = c(ce, U, "info"), this.debug = c(ce, U, "debug"), this.trace = c(ce, U, "trace"), F && (this.serializers = F, this._serialize = ue), u && (this._logEvent = f(
          [].concat(ce._logEvent.bindings, U)
        ));
      }
      return te.prototype = this, new te(this);
    }
    return T;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: b, unixTime: I, isoTime: w });
  function i(y, u, g, N) {
    const A = Object.getPrototypeOf(u);
    u[g] = u.levelVal > u.levels.values[g] ? C : A[g] ? A[g] : e[g] || e[N] || C, o(y, u, g);
  }
  function o(y, u, g) {
    !y.transmit && u[g] === C || (u[g] = /* @__PURE__ */ function(N) {
      return function() {
        const A = y.timestamp(), $ = new Array(arguments.length), J = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var K = 0; K < $.length; K++)
          $[K] = arguments[K];
        if (y.serialize && !y.asObject && l($, this._serialize, this.serializers, this._stdErrSerialize), y.asObject ? N.call(J, a(this, g, $, A)) : N.apply(J, $), y.transmit) {
          const T = y.transmit.level || u.level, k = s.levels.values[T], B = s.levels.values[g];
          if (B < k)
            return;
          d(this, {
            ts: A,
            methodLevel: g,
            methodValue: B,
            transmitLevel: T,
            transmitValue: s.levels.values[y.transmit.level || u.level],
            send: y.transmit.send,
            val: u.levelVal
          }, $);
        }
      };
    }(u[g]));
  }
  function a(y, u, g, N) {
    y._serialize && l(g, y._serialize, y.serializers, y._stdErrSerialize);
    const A = g.slice();
    let $ = A[0];
    const J = {};
    N && (J.time = N), J.level = s.levels.values[u];
    let K = (y._childLevel | 0) + 1;
    if (K < 1 && (K = 1), $ !== null && typeof $ == "object") {
      for (; K-- && typeof A[0] == "object"; )
        Object.assign(J, A.shift());
      $ = A.length ? t(A.shift(), A) : void 0;
    } else
      typeof $ == "string" && ($ = t(A.shift(), A));
    return $ !== void 0 && (J.msg = $), J;
  }
  function l(y, u, g, N) {
    for (const A in y)
      if (N && y[A] instanceof Error)
        y[A] = s.stdSerializers.err(y[A]);
      else if (typeof y[A] == "object" && !Array.isArray(y[A]))
        for (const $ in y[A])
          u && u.indexOf($) > -1 && $ in g && (y[A][$] = g[$](y[A][$]));
  }
  function c(y, u, g) {
    return function() {
      const N = new Array(1 + arguments.length);
      N[0] = u;
      for (var A = 1; A < N.length; A++)
        N[A] = arguments[A - 1];
      return y[g].apply(this, N);
    };
  }
  function d(y, u, g) {
    const N = u.send, A = u.ts, $ = u.methodLevel, J = u.methodValue, K = u.val, T = y._logEvent.bindings;
    l(
      g,
      y._serialize || Object.keys(y.serializers),
      y.serializers,
      y._stdErrSerialize === void 0 ? !0 : y._stdErrSerialize
    ), y._logEvent.ts = A, y._logEvent.messages = g.filter(function(k) {
      return T.indexOf(k) === -1;
    }), y._logEvent.level.label = $, y._logEvent.level.value = J, N($, y._logEvent, K), y._logEvent = f(T);
  }
  function f(y) {
    return {
      ts: 0,
      messages: [],
      bindings: y || [],
      level: { label: "", value: 0 }
    };
  }
  function p(y) {
    const u = {
      type: y.constructor.name,
      msg: y.message,
      stack: y.stack
    };
    for (const g in y)
      u[g] === void 0 && (u[g] = y[g]);
    return u;
  }
  function m(y) {
    return typeof y.timestamp == "function" ? y.timestamp : y.timestamp === !1 ? M : b;
  }
  function v() {
    return {};
  }
  function _(y) {
    return y;
  }
  function C() {
  }
  function M() {
    return !1;
  }
  function b() {
    return Date.now();
  }
  function I() {
    return Math.round(Date.now() / 1e3);
  }
  function w() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
    function y(u) {
      return typeof u < "u" && u;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return y(self) || y(window) || y(this) || {};
    }
  }
  return fa;
}
var us = {}, Xl;
function Yd() {
  return Xl || (Xl = 1, Object.defineProperty(us, "__esModule", { value: !0 }), us.PINO_CUSTOM_CONTEXT_KEY = us.PINO_LOGGER_DEFAULTS = void 0, us.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, us.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), us;
}
var Bt = {}, eu;
function bm() {
  if (eu)
    return Bt;
  eu = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.generateChildLogger = Bt.formatChildLoggerContext = Bt.getLoggerContext = Bt.setBrowserLoggerContext = Bt.getBrowserLoggerContext = Bt.getDefaultLoggerOptions = void 0;
  const t = Yd();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Bt.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  Bt.getBrowserLoggerContext = r;
  function n(a, l, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[c] = l, a;
  }
  Bt.setBrowserLoggerContext = n;
  function s(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let c = "";
    return typeof a.bindings > "u" ? c = r(a, l) : c = a.bindings().context || "", c;
  }
  Bt.getLoggerContext = s;
  function i(a, l, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = s(a, c);
    return d.trim() ? `${d}/${l}` : l;
  }
  Bt.formatChildLoggerContext = i;
  function o(a, l, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = i(a, l, c), f = a.child({ context: d });
    return n(f, d, c);
  }
  return Bt.generateChildLogger = o, Bt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Yr, r = e.__importDefault(_m());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Yd(), t), e.__exportStar(bm(), t);
})(Fe);
let wm = class extends rs {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Em = class extends rs {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, Sm = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, xm = class extends rs {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, Im = class extends rs {
  constructor(t) {
    super();
  }
}, Om = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class Cm extends rs {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Tm extends rs {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let km = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Rm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Pm = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Nm = class {
  constructor(t) {
    this.client = t;
  }
};
var Nc = {}, Ps = {}, Ko = {}, Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.BrowserRandomSource = void 0;
const tu = 65536;
class Am {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += tu)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, tu)));
    return r;
  }
}
Yo.BrowserRandomSource = Am;
function Lm(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Go = {}, dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
function jm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
dr.wipe = jm;
const Dm = {}, Mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dm
}, Symbol.toStringTag, { value: "Module" })), zm = /* @__PURE__ */ Fo(Mm);
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.NodeRandomSource = void 0;
const Um = dr;
class Vm {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Lm < "u") {
      const e = zm;
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
    return (0, Um.wipe)(r), n;
  }
}
Go.NodeRandomSource = Vm;
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.SystemRandomSource = void 0;
const $m = Yo, qm = Go;
class Wm {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new $m.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new qm.NodeRandomSource(), this._source.isAvailable) {
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
Ko.SystemRandomSource = Wm;
var Se = {}, Gd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var c = a >>> 16 & 65535, d = a & 65535, f = l >>> 16 & 65535, p = l & 65535;
    return d * p + (c * p + d * f << 16 >>> 0) | 0;
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
})(Gd);
Object.defineProperty(Se, "__esModule", { value: !0 });
var Qd = Gd;
function Zm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = Zm;
function Fm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = Fm;
function Hm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = Hm;
function Bm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = Bm;
function Jd(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = Jd;
Se.writeInt16BE = Jd;
function Xd(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = Xd;
Se.writeInt16LE = Xd;
function Da(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = Da;
function Ma(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = Ma;
function za(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = za;
function Ua(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = Ua;
function mo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = mo;
Se.writeInt32BE = mo;
function yo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = yo;
Se.writeInt32LE = yo;
function Km(t, e) {
  e === void 0 && (e = 0);
  var r = Da(t, e), n = Da(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = Km;
function Ym(t, e) {
  e === void 0 && (e = 0);
  var r = Ma(t, e), n = Ma(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = Ym;
function Gm(t, e) {
  e === void 0 && (e = 0);
  var r = za(t, e), n = za(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = Gm;
function Qm(t, e) {
  e === void 0 && (e = 0);
  var r = Ua(t, e), n = Ua(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = Qm;
function eh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), mo(t / 4294967296 >>> 0, e, r), mo(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = eh;
Se.writeInt64BE = eh;
function th(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), yo(t >>> 0, e, r), yo(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = th;
Se.writeInt64LE = th;
function Jm(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = Jm;
function Xm(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = Xm;
function ey(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Qd.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = ey;
function ty(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Qd.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = ty;
function ry(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = ry;
function ny(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = ny;
function sy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = sy;
function iy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = iy;
function oy(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = oy;
function ay(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = ay;
function cy(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = cy;
function ly(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = ly;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ko, r = Se, n = dr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(c, d = t.defaultRandomSource) {
    return d.randomBytes(c);
  }
  t.randomBytes = s;
  function i(c = t.defaultRandomSource) {
    const d = s(4, c), f = (0, r.readUint32LE)(d);
    return (0, n.wipe)(d), f;
  }
  t.randomUint32 = i;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(c, d = o, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = d.length, v = 256 - 256 % m;
    for (; c > 0; ) {
      const _ = s(Math.ceil(c * 256 / v), f);
      for (let C = 0; C < _.length && c > 0; C++) {
        const M = _[C];
        M < v && (p += d.charAt(M % m), c--);
      }
      (0, n.wipe)(_);
    }
    return p;
  }
  t.randomString = a;
  function l(c, d = o, f = t.defaultRandomSource) {
    const p = Math.ceil(c / (Math.log(d.length) / Math.LN2));
    return a(p, d, f);
  }
  t.randomStringForEntropy = l;
})(Ps);
var rh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = dr;
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
      }, a.prototype.update = function(l, c) {
        if (c === void 0 && (c = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && c > 0; )
            this._buffer[this._bufferLength++] = l[d++], c--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (d = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, d, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = l[d++], c--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var c = this._bytesHashed, d = this._bufferLength, f = c / 536870912 | 0, p = c << 3, m = c % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var v = d + 1; v < m - 8; v++)
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
  function i(a, l, c, d, f, p, m) {
    for (var v = c[0], _ = c[1], C = c[2], M = c[3], b = c[4], I = c[5], w = c[6], S = c[7], y = d[0], u = d[1], g = d[2], N = d[3], A = d[4], $ = d[5], J = d[6], K = d[7], T, k, B, q, z, W, U, H; m >= 128; ) {
      for (var de = 0; de < 16; de++) {
        var F = 8 * de + p;
        a[de] = e.readUint32BE(f, F), l[de] = e.readUint32BE(f, F + 4);
      }
      for (var de = 0; de < 80; de++) {
        var ue = v, te = _, ce = C, D = M, j = b, R = I, h = w, O = S, Q = y, re = u, Le = g, je = N, Oe = A, We = $, ot = J, et = K;
        if (T = S, k = K, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = (b >>> 14 | A << 18) ^ (b >>> 18 | A << 14) ^ (A >>> 9 | b << 23), k = (A >>> 14 | b << 18) ^ (A >>> 18 | b << 14) ^ (b >>> 9 | A << 23), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = b & I ^ ~b & w, k = A & $ ^ ~A & J, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = s[de * 2], k = s[de * 2 + 1], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = a[de % 16], k = l[de % 16], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, B = U & 65535 | H << 16, q = z & 65535 | W << 16, T = B, k = q, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = (v >>> 28 | y << 4) ^ (y >>> 2 | v << 30) ^ (y >>> 7 | v << 25), k = (y >>> 28 | v << 4) ^ (v >>> 2 | y << 30) ^ (v >>> 7 | y << 25), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = v & _ ^ v & C ^ _ & C, k = y & u ^ y & g ^ u & g, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, O = U & 65535 | H << 16, et = z & 65535 | W << 16, T = D, k = je, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = B, k = q, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, D = U & 65535 | H << 16, je = z & 65535 | W << 16, _ = ue, C = te, M = ce, b = D, I = j, w = R, S = h, v = O, u = Q, g = re, N = Le, A = je, $ = Oe, J = We, K = ot, y = et, de % 16 === 15)
          for (var F = 0; F < 16; F++)
            T = a[F], k = l[F], z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = a[(F + 9) % 16], k = l[(F + 9) % 16], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, B = a[(F + 1) % 16], q = l[(F + 1) % 16], T = (B >>> 1 | q << 31) ^ (B >>> 8 | q << 24) ^ B >>> 7, k = (q >>> 1 | B << 31) ^ (q >>> 8 | B << 24) ^ (q >>> 7 | B << 25), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, B = a[(F + 14) % 16], q = l[(F + 14) % 16], T = (B >>> 19 | q << 13) ^ (q >>> 29 | B << 3) ^ B >>> 6, k = (q >>> 19 | B << 13) ^ (B >>> 29 | q << 3) ^ (q >>> 6 | B << 26), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, a[F] = U & 65535 | H << 16, l[F] = z & 65535 | W << 16;
      }
      T = v, k = y, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[0], k = d[0], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[0] = v = U & 65535 | H << 16, d[0] = y = z & 65535 | W << 16, T = _, k = u, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[1], k = d[1], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[1] = _ = U & 65535 | H << 16, d[1] = u = z & 65535 | W << 16, T = C, k = g, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[2], k = d[2], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[2] = C = U & 65535 | H << 16, d[2] = g = z & 65535 | W << 16, T = M, k = N, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[3], k = d[3], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[3] = M = U & 65535 | H << 16, d[3] = N = z & 65535 | W << 16, T = b, k = A, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[4], k = d[4], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[4] = b = U & 65535 | H << 16, d[4] = A = z & 65535 | W << 16, T = I, k = $, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[5], k = d[5], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[5] = I = U & 65535 | H << 16, d[5] = $ = z & 65535 | W << 16, T = w, k = J, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[6], k = d[6], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[6] = w = U & 65535 | H << 16, d[6] = J = z & 65535 | W << 16, T = S, k = K, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = c[7], k = d[7], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, c[7] = S = U & 65535 | H << 16, d[7] = K = z & 65535 | W << 16, p += 128, m -= 128;
    }
    return p;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var c = l.digest();
    return l.clean(), c;
  }
  t.hash = o;
})(rh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Ps, r = rh, n = dr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(D) {
    const j = new Float64Array(16);
    if (D)
      for (let R = 0; R < D.length; R++)
        j[R] = D[R];
    return j;
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
  ]), d = s([
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
  function m(D, j) {
    for (let R = 0; R < 16; R++)
      D[R] = j[R] | 0;
  }
  function v(D) {
    let j = 1;
    for (let R = 0; R < 16; R++) {
      let h = D[R] + j + 65535;
      j = Math.floor(h / 65536), D[R] = h - j * 65536;
    }
    D[0] += j - 1 + 37 * (j - 1);
  }
  function _(D, j, R) {
    const h = ~(R - 1);
    for (let O = 0; O < 16; O++) {
      const Q = h & (D[O] ^ j[O]);
      D[O] ^= Q, j[O] ^= Q;
    }
  }
  function C(D, j) {
    const R = s(), h = s();
    for (let O = 0; O < 16; O++)
      h[O] = j[O];
    v(h), v(h), v(h);
    for (let O = 0; O < 2; O++) {
      R[0] = h[0] - 65517;
      for (let re = 1; re < 15; re++)
        R[re] = h[re] - 65535 - (R[re - 1] >> 16 & 1), R[re - 1] &= 65535;
      R[15] = h[15] - 32767 - (R[14] >> 16 & 1);
      const Q = R[15] >> 16 & 1;
      R[14] &= 65535, _(h, R, 1 - Q);
    }
    for (let O = 0; O < 16; O++)
      D[2 * O] = h[O] & 255, D[2 * O + 1] = h[O] >> 8;
  }
  function M(D, j) {
    let R = 0;
    for (let h = 0; h < 32; h++)
      R |= D[h] ^ j[h];
    return (1 & R - 1 >>> 8) - 1;
  }
  function b(D, j) {
    const R = new Uint8Array(32), h = new Uint8Array(32);
    return C(R, D), C(h, j), M(R, h);
  }
  function I(D) {
    const j = new Uint8Array(32);
    return C(j, D), j[0] & 1;
  }
  function w(D, j) {
    for (let R = 0; R < 16; R++)
      D[R] = j[2 * R] + (j[2 * R + 1] << 8);
    D[15] &= 32767;
  }
  function S(D, j, R) {
    for (let h = 0; h < 16; h++)
      D[h] = j[h] + R[h];
  }
  function y(D, j, R) {
    for (let h = 0; h < 16; h++)
      D[h] = j[h] - R[h];
  }
  function u(D, j, R) {
    let h, O, Q = 0, re = 0, Le = 0, je = 0, Oe = 0, We = 0, ot = 0, et = 0, $e = 0, ze = 0, Ce = 0, Re = 0, Te = 0, Ee = 0, be = 0, pe = 0, Pe = 0, De = 0, ve = 0, Ue = 0, Ze = 0, Ke = 0, Ye = 0, He = 0, ar = 0, hr = 0, Mr = 0, At = 0, zr = 0, fr = 0, hn = 0, at = R[0], nt = R[1], pt = R[2], lt = R[3], gt = R[4], st = R[5], bt = R[6], xt = R[7], It = R[8], wt = R[9], Ot = R[10], Et = R[11], mt = R[12], tt = R[13], x = R[14], V = R[15];
    h = j[0], Q += h * at, re += h * nt, Le += h * pt, je += h * lt, Oe += h * gt, We += h * st, ot += h * bt, et += h * xt, $e += h * It, ze += h * wt, Ce += h * Ot, Re += h * Et, Te += h * mt, Ee += h * tt, be += h * x, pe += h * V, h = j[1], re += h * at, Le += h * nt, je += h * pt, Oe += h * lt, We += h * gt, ot += h * st, et += h * bt, $e += h * xt, ze += h * It, Ce += h * wt, Re += h * Ot, Te += h * Et, Ee += h * mt, be += h * tt, pe += h * x, Pe += h * V, h = j[2], Le += h * at, je += h * nt, Oe += h * pt, We += h * lt, ot += h * gt, et += h * st, $e += h * bt, ze += h * xt, Ce += h * It, Re += h * wt, Te += h * Ot, Ee += h * Et, be += h * mt, pe += h * tt, Pe += h * x, De += h * V, h = j[3], je += h * at, Oe += h * nt, We += h * pt, ot += h * lt, et += h * gt, $e += h * st, ze += h * bt, Ce += h * xt, Re += h * It, Te += h * wt, Ee += h * Ot, be += h * Et, pe += h * mt, Pe += h * tt, De += h * x, ve += h * V, h = j[4], Oe += h * at, We += h * nt, ot += h * pt, et += h * lt, $e += h * gt, ze += h * st, Ce += h * bt, Re += h * xt, Te += h * It, Ee += h * wt, be += h * Ot, pe += h * Et, Pe += h * mt, De += h * tt, ve += h * x, Ue += h * V, h = j[5], We += h * at, ot += h * nt, et += h * pt, $e += h * lt, ze += h * gt, Ce += h * st, Re += h * bt, Te += h * xt, Ee += h * It, be += h * wt, pe += h * Ot, Pe += h * Et, De += h * mt, ve += h * tt, Ue += h * x, Ze += h * V, h = j[6], ot += h * at, et += h * nt, $e += h * pt, ze += h * lt, Ce += h * gt, Re += h * st, Te += h * bt, Ee += h * xt, be += h * It, pe += h * wt, Pe += h * Ot, De += h * Et, ve += h * mt, Ue += h * tt, Ze += h * x, Ke += h * V, h = j[7], et += h * at, $e += h * nt, ze += h * pt, Ce += h * lt, Re += h * gt, Te += h * st, Ee += h * bt, be += h * xt, pe += h * It, Pe += h * wt, De += h * Ot, ve += h * Et, Ue += h * mt, Ze += h * tt, Ke += h * x, Ye += h * V, h = j[8], $e += h * at, ze += h * nt, Ce += h * pt, Re += h * lt, Te += h * gt, Ee += h * st, be += h * bt, pe += h * xt, Pe += h * It, De += h * wt, ve += h * Ot, Ue += h * Et, Ze += h * mt, Ke += h * tt, Ye += h * x, He += h * V, h = j[9], ze += h * at, Ce += h * nt, Re += h * pt, Te += h * lt, Ee += h * gt, be += h * st, pe += h * bt, Pe += h * xt, De += h * It, ve += h * wt, Ue += h * Ot, Ze += h * Et, Ke += h * mt, Ye += h * tt, He += h * x, ar += h * V, h = j[10], Ce += h * at, Re += h * nt, Te += h * pt, Ee += h * lt, be += h * gt, pe += h * st, Pe += h * bt, De += h * xt, ve += h * It, Ue += h * wt, Ze += h * Ot, Ke += h * Et, Ye += h * mt, He += h * tt, ar += h * x, hr += h * V, h = j[11], Re += h * at, Te += h * nt, Ee += h * pt, be += h * lt, pe += h * gt, Pe += h * st, De += h * bt, ve += h * xt, Ue += h * It, Ze += h * wt, Ke += h * Ot, Ye += h * Et, He += h * mt, ar += h * tt, hr += h * x, Mr += h * V, h = j[12], Te += h * at, Ee += h * nt, be += h * pt, pe += h * lt, Pe += h * gt, De += h * st, ve += h * bt, Ue += h * xt, Ze += h * It, Ke += h * wt, Ye += h * Ot, He += h * Et, ar += h * mt, hr += h * tt, Mr += h * x, At += h * V, h = j[13], Ee += h * at, be += h * nt, pe += h * pt, Pe += h * lt, De += h * gt, ve += h * st, Ue += h * bt, Ze += h * xt, Ke += h * It, Ye += h * wt, He += h * Ot, ar += h * Et, hr += h * mt, Mr += h * tt, At += h * x, zr += h * V, h = j[14], be += h * at, pe += h * nt, Pe += h * pt, De += h * lt, ve += h * gt, Ue += h * st, Ze += h * bt, Ke += h * xt, Ye += h * It, He += h * wt, ar += h * Ot, hr += h * Et, Mr += h * mt, At += h * tt, zr += h * x, fr += h * V, h = j[15], pe += h * at, Pe += h * nt, De += h * pt, ve += h * lt, Ue += h * gt, Ze += h * st, Ke += h * bt, Ye += h * xt, He += h * It, ar += h * wt, hr += h * Ot, Mr += h * Et, At += h * mt, zr += h * tt, fr += h * x, hn += h * V, Q += 38 * Pe, re += 38 * De, Le += 38 * ve, je += 38 * Ue, Oe += 38 * Ze, We += 38 * Ke, ot += 38 * Ye, et += 38 * He, $e += 38 * ar, ze += 38 * hr, Ce += 38 * Mr, Re += 38 * At, Te += 38 * zr, Ee += 38 * fr, be += 38 * hn, O = 1, h = Q + O + 65535, O = Math.floor(h / 65536), Q = h - O * 65536, h = re + O + 65535, O = Math.floor(h / 65536), re = h - O * 65536, h = Le + O + 65535, O = Math.floor(h / 65536), Le = h - O * 65536, h = je + O + 65535, O = Math.floor(h / 65536), je = h - O * 65536, h = Oe + O + 65535, O = Math.floor(h / 65536), Oe = h - O * 65536, h = We + O + 65535, O = Math.floor(h / 65536), We = h - O * 65536, h = ot + O + 65535, O = Math.floor(h / 65536), ot = h - O * 65536, h = et + O + 65535, O = Math.floor(h / 65536), et = h - O * 65536, h = $e + O + 65535, O = Math.floor(h / 65536), $e = h - O * 65536, h = ze + O + 65535, O = Math.floor(h / 65536), ze = h - O * 65536, h = Ce + O + 65535, O = Math.floor(h / 65536), Ce = h - O * 65536, h = Re + O + 65535, O = Math.floor(h / 65536), Re = h - O * 65536, h = Te + O + 65535, O = Math.floor(h / 65536), Te = h - O * 65536, h = Ee + O + 65535, O = Math.floor(h / 65536), Ee = h - O * 65536, h = be + O + 65535, O = Math.floor(h / 65536), be = h - O * 65536, h = pe + O + 65535, O = Math.floor(h / 65536), pe = h - O * 65536, Q += O - 1 + 37 * (O - 1), O = 1, h = Q + O + 65535, O = Math.floor(h / 65536), Q = h - O * 65536, h = re + O + 65535, O = Math.floor(h / 65536), re = h - O * 65536, h = Le + O + 65535, O = Math.floor(h / 65536), Le = h - O * 65536, h = je + O + 65535, O = Math.floor(h / 65536), je = h - O * 65536, h = Oe + O + 65535, O = Math.floor(h / 65536), Oe = h - O * 65536, h = We + O + 65535, O = Math.floor(h / 65536), We = h - O * 65536, h = ot + O + 65535, O = Math.floor(h / 65536), ot = h - O * 65536, h = et + O + 65535, O = Math.floor(h / 65536), et = h - O * 65536, h = $e + O + 65535, O = Math.floor(h / 65536), $e = h - O * 65536, h = ze + O + 65535, O = Math.floor(h / 65536), ze = h - O * 65536, h = Ce + O + 65535, O = Math.floor(h / 65536), Ce = h - O * 65536, h = Re + O + 65535, O = Math.floor(h / 65536), Re = h - O * 65536, h = Te + O + 65535, O = Math.floor(h / 65536), Te = h - O * 65536, h = Ee + O + 65535, O = Math.floor(h / 65536), Ee = h - O * 65536, h = be + O + 65535, O = Math.floor(h / 65536), be = h - O * 65536, h = pe + O + 65535, O = Math.floor(h / 65536), pe = h - O * 65536, Q += O - 1 + 37 * (O - 1), D[0] = Q, D[1] = re, D[2] = Le, D[3] = je, D[4] = Oe, D[5] = We, D[6] = ot, D[7] = et, D[8] = $e, D[9] = ze, D[10] = Ce, D[11] = Re, D[12] = Te, D[13] = Ee, D[14] = be, D[15] = pe;
  }
  function g(D, j) {
    u(D, j, j);
  }
  function N(D, j) {
    const R = s();
    let h;
    for (h = 0; h < 16; h++)
      R[h] = j[h];
    for (h = 253; h >= 0; h--)
      g(R, R), h !== 2 && h !== 4 && u(R, R, j);
    for (h = 0; h < 16; h++)
      D[h] = R[h];
  }
  function A(D, j) {
    const R = s();
    let h;
    for (h = 0; h < 16; h++)
      R[h] = j[h];
    for (h = 250; h >= 0; h--)
      g(R, R), h !== 1 && u(R, R, j);
    for (h = 0; h < 16; h++)
      D[h] = R[h];
  }
  function $(D, j) {
    const R = s(), h = s(), O = s(), Q = s(), re = s(), Le = s(), je = s(), Oe = s(), We = s();
    y(R, D[1], D[0]), y(We, j[1], j[0]), u(R, R, We), S(h, D[0], D[1]), S(We, j[0], j[1]), u(h, h, We), u(O, D[3], j[3]), u(O, O, c), u(Q, D[2], j[2]), S(Q, Q, Q), y(re, h, R), y(Le, Q, O), S(je, Q, O), S(Oe, h, R), u(D[0], re, Le), u(D[1], Oe, je), u(D[2], je, Le), u(D[3], re, Oe);
  }
  function J(D, j, R) {
    for (let h = 0; h < 4; h++)
      _(D[h], j[h], R);
  }
  function K(D, j) {
    const R = s(), h = s(), O = s();
    N(O, j[2]), u(R, j[0], O), u(h, j[1], O), C(D, h), D[31] ^= I(R) << 7;
  }
  function T(D, j, R) {
    m(D[0], o), m(D[1], a), m(D[2], a), m(D[3], o);
    for (let h = 255; h >= 0; --h) {
      const O = R[h / 8 | 0] >> (h & 7) & 1;
      J(D, j, O), $(j, D), $(D, D), J(D, j, O);
    }
  }
  function k(D, j) {
    const R = [s(), s(), s(), s()];
    m(R[0], d), m(R[1], f), m(R[2], a), u(R[3], d, f), T(D, R, j);
  }
  function B(D) {
    if (D.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(D);
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const R = new Uint8Array(32), h = [s(), s(), s(), s()];
    k(h, j), K(R, h);
    const O = new Uint8Array(64);
    return O.set(D), O.set(R, 32), {
      publicKey: R,
      secretKey: O
    };
  }
  t.generateKeyPairFromSeed = B;
  function q(D) {
    const j = (0, e.randomBytes)(32, D), R = B(j);
    return (0, n.wipe)(j), R;
  }
  t.generateKeyPair = q;
  function z(D) {
    if (D.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(D.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = z;
  const W = new Float64Array([
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
  function U(D, j) {
    let R, h, O, Q;
    for (h = 63; h >= 32; --h) {
      for (R = 0, O = h - 32, Q = h - 12; O < Q; ++O)
        j[O] += R - 16 * j[h] * W[O - (h - 32)], R = Math.floor((j[O] + 128) / 256), j[O] -= R * 256;
      j[O] += R, j[h] = 0;
    }
    for (R = 0, O = 0; O < 32; O++)
      j[O] += R - (j[31] >> 4) * W[O], R = j[O] >> 8, j[O] &= 255;
    for (O = 0; O < 32; O++)
      j[O] -= R * W[O];
    for (h = 0; h < 32; h++)
      j[h + 1] += j[h] >> 8, D[h] = j[h] & 255;
  }
  function H(D) {
    const j = new Float64Array(64);
    for (let R = 0; R < 64; R++)
      j[R] = D[R];
    for (let R = 0; R < 64; R++)
      D[R] = 0;
    U(D, j);
  }
  function de(D, j) {
    const R = new Float64Array(64), h = [s(), s(), s(), s()], O = (0, r.hash)(D.subarray(0, 32));
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    const Q = new Uint8Array(64);
    Q.set(O.subarray(32), 32);
    const re = new r.SHA512();
    re.update(Q.subarray(32)), re.update(j);
    const Le = re.digest();
    re.clean(), H(Le), k(h, Le), K(Q, h), re.reset(), re.update(Q.subarray(0, 32)), re.update(D.subarray(32)), re.update(j);
    const je = re.digest();
    H(je);
    for (let Oe = 0; Oe < 32; Oe++)
      R[Oe] = Le[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let We = 0; We < 32; We++)
        R[Oe + We] += je[Oe] * O[We];
    return U(Q.subarray(32), R), Q;
  }
  t.sign = de;
  function F(D, j) {
    const R = s(), h = s(), O = s(), Q = s(), re = s(), Le = s(), je = s();
    return m(D[2], a), w(D[1], j), g(O, D[1]), u(Q, O, l), y(O, O, D[2]), S(Q, D[2], Q), g(re, Q), g(Le, re), u(je, Le, re), u(R, je, O), u(R, R, Q), A(R, R), u(R, R, O), u(R, R, Q), u(R, R, Q), u(D[0], R, Q), g(h, D[0]), u(h, h, Q), b(h, O) && u(D[0], D[0], p), g(h, D[0]), u(h, h, Q), b(h, O) ? -1 : (I(D[0]) === j[31] >> 7 && y(D[0], o, D[0]), u(D[3], D[0], D[1]), 0);
  }
  function ue(D, j, R) {
    const h = new Uint8Array(32), O = [s(), s(), s(), s()], Q = [s(), s(), s(), s()];
    if (R.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (F(Q, D))
      return !1;
    const re = new r.SHA512();
    re.update(R.subarray(0, 32)), re.update(D), re.update(j);
    const Le = re.digest();
    return H(Le), T(O, Q, Le), k(Q, R.subarray(32)), $(O, Q), K(h, O), !M(R, h);
  }
  t.verify = ue;
  function te(D) {
    let j = [s(), s(), s(), s()];
    if (F(j, D))
      throw new Error("Ed25519: invalid public key");
    let R = s(), h = s(), O = j[1];
    S(R, a, O), y(h, a, O), N(h, h), u(R, R, h);
    let Q = new Uint8Array(32);
    return C(Q, R), Q;
  }
  t.convertPublicKeyToX25519 = te;
  function ce(D) {
    const j = (0, r.hash)(D.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const R = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), R;
  }
  t.convertSecretKeyToX25519 = ce;
})(Nc);
const uy = "EdDSA", dy = "JWT", nh = ".", sh = "base64url", hy = "utf8", fy = "utf8", py = ":", gy = "did", my = "key", ru = "base58btc", yy = "z", vy = "K36", _y = 32;
function Ac(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ih(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ac(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Va(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = ih(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return Ac(r);
}
function by(t, e) {
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
  var a = t.length, l = t.charAt(0), c = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var _ = 0, C = 0, M = 0, b = v.length; M !== b && v[M] === 0; )
      M++, _++;
    for (var I = (b - M) * d + 1 >>> 0, w = new Uint8Array(I); M !== b; ) {
      for (var S = v[M], y = 0, u = I - 1; (S !== 0 || y < C) && u !== -1; u--, y++)
        S += 256 * w[u] >>> 0, w[u] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      C = y, M++;
    }
    for (var g = I - C; g !== I && w[g] === 0; )
      g++;
    for (var N = l.repeat(_); g < I; ++g)
      N += t.charAt(w[g]);
    return N;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var _ = 0;
    if (v[_] !== " ") {
      for (var C = 0, M = 0; v[_] === l; )
        C++, _++;
      for (var b = (v.length - _) * c + 1 >>> 0, I = new Uint8Array(b); v[_]; ) {
        var w = r[v.charCodeAt(_)];
        if (w === 255)
          return;
        for (var S = 0, y = b - 1; (w !== 0 || S < M) && y !== -1; y--, S++)
          w += a * I[y] >>> 0, I[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = S, _++;
      }
      if (v[_] !== " ") {
        for (var u = b - M; u !== b && I[u] === 0; )
          u++;
        for (var g = new Uint8Array(C + (b - u)), N = C; u !== b; )
          g[N++] = I[u++];
        return g;
      }
    }
  }
  function m(v) {
    var _ = p(v);
    if (_)
      return _;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: p,
    decode: m
  };
}
var wy = by, Ey = wy;
const Sy = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, xy = (t) => new TextEncoder().encode(t), Iy = (t) => new TextDecoder().decode(t);
class Oy {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Cy {
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
    return oh(this, e);
  }
}
class Ty {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return oh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const oh = (t, e) => new Ty({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class ky {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Oy(e, r, n), this.decoder = new Cy(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Qo = ({ name: t, prefix: e, encode: r, decode: n }) => new ky(t, e, r, n), Pi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Ey(r, e);
  return Qo({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => Sy(s(i))
  });
}, Ry = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, l = 0, c = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | f, a += r, a >= 8 && (a -= 8, o[c++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Py = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Dt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Qo({
  prefix: e,
  name: t,
  encode(s) {
    return Py(s, n, r);
  },
  decode(s) {
    return Ry(s, n, r, t);
  }
}), Ny = Qo({
  prefix: "\0",
  name: "identity",
  encode: (t) => Iy(t),
  decode: (t) => xy(t)
}), Ay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Ny
}, Symbol.toStringTag, { value: "Module" })), Ly = Dt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Ly
}, Symbol.toStringTag, { value: "Module" })), Dy = Dt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Dy
}, Symbol.toStringTag, { value: "Module" })), zy = Pi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: zy
}, Symbol.toStringTag, { value: "Module" })), Vy = Dt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), $y = Dt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Vy,
  base16upper: $y
}, Symbol.toStringTag, { value: "Module" })), Wy = Dt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Zy = Dt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Fy = Dt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Hy = Dt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), By = Dt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Ky = Dt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Yy = Dt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Gy = Dt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Qy = Dt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Wy,
  base32hex: By,
  base32hexpad: Yy,
  base32hexpadupper: Gy,
  base32hexupper: Ky,
  base32pad: Fy,
  base32padupper: Hy,
  base32upper: Zy,
  base32z: Qy
}, Symbol.toStringTag, { value: "Module" })), Xy = Pi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), ev = Pi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Xy,
  base36upper: ev
}, Symbol.toStringTag, { value: "Module" })), rv = Pi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), nv = Pi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: rv,
  base58flickr: nv
}, Symbol.toStringTag, { value: "Module" })), iv = Dt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ov = Dt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), av = Dt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), cv = Dt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: iv,
  base64pad: ov,
  base64url: av,
  base64urlpad: cv
}, Symbol.toStringTag, { value: "Module" })), ah = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), uv = ah.reduce((t, e, r) => (t[r] = e, t), []), dv = ah.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function hv(t) {
  return t.reduce((e, r) => (e += uv[r], e), "");
}
function fv(t) {
  const e = [];
  for (const r of t) {
    const n = dv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const pv = Qo({
  prefix: "🚀",
  name: "base256emoji",
  encode: hv,
  decode: fv
}), gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: pv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const nu = {
  ...Ay,
  ...jy,
  ...My,
  ...Uy,
  ...qy,
  ...Jy,
  ...tv,
  ...sv,
  ...lv,
  ...gv
};
function ch(t, e, r, n) {
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
const su = ch("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), pa = ch("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = ih(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), lh = {
  utf8: su,
  "utf-8": su,
  hex: nu.base16,
  latin1: pa,
  ascii: pa,
  binary: pa,
  ...nu
};
function Xt(t, e = "utf8") {
  const r = lh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function or(t, e = "utf8") {
  const r = lh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ac(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function vo(t) {
  return Xt(or(Ri(t), hy), sh);
}
function uh(t) {
  const e = or(vy, ru), r = yy + Xt(Va([e, t]), ru);
  return [gy, my, r].join(py);
}
function mv(t) {
  return Xt(t, sh);
}
function yv(t) {
  return or([vo(t.header), vo(t.payload)].join(nh), fy);
}
function vv(t) {
  return [
    vo(t.header),
    vo(t.payload),
    mv(t.signature)
  ].join(nh);
}
function iu(t = Ps.randomBytes(_y)) {
  return Nc.generateKeyPairFromSeed(t);
}
async function _v(t, e, r, n, s = le.fromMiliseconds(Date.now())) {
  const i = { alg: uy, typ: dy }, o = uh(n.publicKey), a = s + r, l = { iss: o, sub: t, aud: e, iat: s, exp: a }, c = yv({ header: i, payload: l }), d = Nc.sign(n.secretKey, c);
  return vv({ header: i, payload: l, signature: d });
}
var Lc = {}, Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
var Vt = Se, $a = dr, bv = 20;
function wv(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], c = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], _ = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], C = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], b = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], I = n, w = s, S = i, y = o, u = a, g = l, N = c, A = d, $ = f, J = p, K = m, T = v, k = _, B = C, q = M, z = b, W = 0; W < bv; W += 2)
    I = I + u | 0, k ^= I, k = k >>> 16 | k << 16, $ = $ + k | 0, u ^= $, u = u >>> 20 | u << 12, w = w + g | 0, B ^= w, B = B >>> 16 | B << 16, J = J + B | 0, g ^= J, g = g >>> 20 | g << 12, S = S + N | 0, q ^= S, q = q >>> 16 | q << 16, K = K + q | 0, N ^= K, N = N >>> 20 | N << 12, y = y + A | 0, z ^= y, z = z >>> 16 | z << 16, T = T + z | 0, A ^= T, A = A >>> 20 | A << 12, S = S + N | 0, q ^= S, q = q >>> 24 | q << 8, K = K + q | 0, N ^= K, N = N >>> 25 | N << 7, y = y + A | 0, z ^= y, z = z >>> 24 | z << 8, T = T + z | 0, A ^= T, A = A >>> 25 | A << 7, w = w + g | 0, B ^= w, B = B >>> 24 | B << 8, J = J + B | 0, g ^= J, g = g >>> 25 | g << 7, I = I + u | 0, k ^= I, k = k >>> 24 | k << 8, $ = $ + k | 0, u ^= $, u = u >>> 25 | u << 7, I = I + g | 0, z ^= I, z = z >>> 16 | z << 16, K = K + z | 0, g ^= K, g = g >>> 20 | g << 12, w = w + N | 0, k ^= w, k = k >>> 16 | k << 16, T = T + k | 0, N ^= T, N = N >>> 20 | N << 12, S = S + A | 0, B ^= S, B = B >>> 16 | B << 16, $ = $ + B | 0, A ^= $, A = A >>> 20 | A << 12, y = y + u | 0, q ^= y, q = q >>> 16 | q << 16, J = J + q | 0, u ^= J, u = u >>> 20 | u << 12, S = S + A | 0, B ^= S, B = B >>> 24 | B << 8, $ = $ + B | 0, A ^= $, A = A >>> 25 | A << 7, y = y + u | 0, q ^= y, q = q >>> 24 | q << 8, J = J + q | 0, u ^= J, u = u >>> 25 | u << 7, w = w + N | 0, k ^= w, k = k >>> 24 | k << 8, T = T + k | 0, N ^= T, N = N >>> 25 | N << 7, I = I + g | 0, z ^= I, z = z >>> 24 | z << 8, K = K + z | 0, g ^= K, g = g >>> 25 | g << 7;
  Vt.writeUint32LE(I + n | 0, t, 0), Vt.writeUint32LE(w + s | 0, t, 4), Vt.writeUint32LE(S + i | 0, t, 8), Vt.writeUint32LE(y + o | 0, t, 12), Vt.writeUint32LE(u + a | 0, t, 16), Vt.writeUint32LE(g + l | 0, t, 20), Vt.writeUint32LE(N + c | 0, t, 24), Vt.writeUint32LE(A + d | 0, t, 28), Vt.writeUint32LE($ + f | 0, t, 32), Vt.writeUint32LE(J + p | 0, t, 36), Vt.writeUint32LE(K + m | 0, t, 40), Vt.writeUint32LE(T + v | 0, t, 44), Vt.writeUint32LE(k + _ | 0, t, 48), Vt.writeUint32LE(B + C | 0, t, 52), Vt.writeUint32LE(q + M | 0, t, 56), Vt.writeUint32LE(z + b | 0, t, 60);
}
function dh(t, e, r, n, s) {
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
    wv(a, i, t);
    for (var c = l; c < l + 64 && c < r.length; c++)
      n[c] = r[c] ^ a[c - l];
    Sv(i, 0, o);
  }
  return $a.wipe(a), s === 0 && $a.wipe(i), n;
}
Jo.streamXOR = dh;
function Ev(t, e, r, n) {
  return n === void 0 && (n = 0), $a.wipe(r), dh(t, e, r, r, n);
}
Jo.stream = Ev;
function Sv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var hh = {}, jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
function xv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
jn.select = xv;
function Iv(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
jn.lessOrEqual = Iv;
function fh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
jn.compare = fh;
function Ov(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : fh(t, e) !== 0;
}
jn.equal = Ov;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = jn, r = dr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var c = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | c << 3) & 8191;
        var d = a[4] | a[5] << 8;
        this._r[2] = (c >>> 10 | d << 6) & 7939;
        var f = a[6] | a[7] << 8;
        this._r[3] = (d >>> 7 | f << 9) & 8191;
        var p = a[8] | a[9] << 8;
        this._r[4] = (f >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var _ = a[14] | a[15] << 8;
        this._r[8] = (v >>> 8 | _ << 8) & 8191, this._r[9] = _ >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, l, c) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], _ = this._h[4], C = this._h[5], M = this._h[6], b = this._h[7], I = this._h[8], w = this._h[9], S = this._r[0], y = this._r[1], u = this._r[2], g = this._r[3], N = this._r[4], A = this._r[5], $ = this._r[6], J = this._r[7], K = this._r[8], T = this._r[9]; c >= 16; ) {
          var k = a[l + 0] | a[l + 1] << 8;
          f += k & 8191;
          var B = a[l + 2] | a[l + 3] << 8;
          p += (k >>> 13 | B << 3) & 8191;
          var q = a[l + 4] | a[l + 5] << 8;
          m += (B >>> 10 | q << 6) & 8191;
          var z = a[l + 6] | a[l + 7] << 8;
          v += (q >>> 7 | z << 9) & 8191;
          var W = a[l + 8] | a[l + 9] << 8;
          _ += (z >>> 4 | W << 12) & 8191, C += W >>> 1 & 8191;
          var U = a[l + 10] | a[l + 11] << 8;
          M += (W >>> 14 | U << 2) & 8191;
          var H = a[l + 12] | a[l + 13] << 8;
          b += (U >>> 11 | H << 5) & 8191;
          var de = a[l + 14] | a[l + 15] << 8;
          I += (H >>> 8 | de << 8) & 8191, w += de >>> 5 | d;
          var F = 0, ue = F;
          ue += f * S, ue += p * (5 * T), ue += m * (5 * K), ue += v * (5 * J), ue += _ * (5 * $), F = ue >>> 13, ue &= 8191, ue += C * (5 * A), ue += M * (5 * N), ue += b * (5 * g), ue += I * (5 * u), ue += w * (5 * y), F += ue >>> 13, ue &= 8191;
          var te = F;
          te += f * y, te += p * S, te += m * (5 * T), te += v * (5 * K), te += _ * (5 * J), F = te >>> 13, te &= 8191, te += C * (5 * $), te += M * (5 * A), te += b * (5 * N), te += I * (5 * g), te += w * (5 * u), F += te >>> 13, te &= 8191;
          var ce = F;
          ce += f * u, ce += p * y, ce += m * S, ce += v * (5 * T), ce += _ * (5 * K), F = ce >>> 13, ce &= 8191, ce += C * (5 * J), ce += M * (5 * $), ce += b * (5 * A), ce += I * (5 * N), ce += w * (5 * g), F += ce >>> 13, ce &= 8191;
          var D = F;
          D += f * g, D += p * u, D += m * y, D += v * S, D += _ * (5 * T), F = D >>> 13, D &= 8191, D += C * (5 * K), D += M * (5 * J), D += b * (5 * $), D += I * (5 * A), D += w * (5 * N), F += D >>> 13, D &= 8191;
          var j = F;
          j += f * N, j += p * g, j += m * u, j += v * y, j += _ * S, F = j >>> 13, j &= 8191, j += C * (5 * T), j += M * (5 * K), j += b * (5 * J), j += I * (5 * $), j += w * (5 * A), F += j >>> 13, j &= 8191;
          var R = F;
          R += f * A, R += p * N, R += m * g, R += v * u, R += _ * y, F = R >>> 13, R &= 8191, R += C * S, R += M * (5 * T), R += b * (5 * K), R += I * (5 * J), R += w * (5 * $), F += R >>> 13, R &= 8191;
          var h = F;
          h += f * $, h += p * A, h += m * N, h += v * g, h += _ * u, F = h >>> 13, h &= 8191, h += C * y, h += M * S, h += b * (5 * T), h += I * (5 * K), h += w * (5 * J), F += h >>> 13, h &= 8191;
          var O = F;
          O += f * J, O += p * $, O += m * A, O += v * N, O += _ * g, F = O >>> 13, O &= 8191, O += C * u, O += M * y, O += b * S, O += I * (5 * T), O += w * (5 * K), F += O >>> 13, O &= 8191;
          var Q = F;
          Q += f * K, Q += p * J, Q += m * $, Q += v * A, Q += _ * N, F = Q >>> 13, Q &= 8191, Q += C * g, Q += M * u, Q += b * y, Q += I * S, Q += w * (5 * T), F += Q >>> 13, Q &= 8191;
          var re = F;
          re += f * T, re += p * K, re += m * J, re += v * $, re += _ * A, F = re >>> 13, re &= 8191, re += C * N, re += M * g, re += b * u, re += I * y, re += w * S, F += re >>> 13, re &= 8191, F = (F << 2) + F | 0, F = F + ue | 0, ue = F & 8191, F = F >>> 13, te += F, f = ue, p = te, m = ce, v = D, _ = j, C = R, M = h, b = O, I = Q, w = re, l += 16, c -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = _, this._h[5] = C, this._h[6] = M, this._h[7] = b, this._h[8] = I, this._h[9] = w;
      }, o.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var c = new Uint16Array(10), d, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += d, d = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, c[0] = this._h[0] + 5, d = c[0] >>> 13, c[0] &= 8191, m = 1; m < 10; m++)
          c[m] = this._h[m] + d, d = c[m] >>> 13, c[m] &= 8191;
        for (c[9] -= 8192, f = (d ^ 1) - 1, m = 0; m < 10; m++)
          c[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | c[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var l = 0, c = a.length, d;
        if (this._leftover) {
          d = 16 - this._leftover, d > c && (d = c);
          for (var f = 0; f < d; f++)
            this._buffer[this._leftover + f] = a[l + f];
          if (c -= d, l += d, this._leftover += d, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (c >= 16 && (d = c - c % 16, this._blocks(a, l, d), l += d, c -= d), c) {
          for (var f = 0; f < c; f++)
            this._buffer[this._leftover + f] = a[l + f];
          this._leftover += c;
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
    var c = l.digest();
    return l.clean(), c;
  }
  t.oneTimeAuth = s;
  function i(o, a) {
    return o.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(o, a);
  }
  t.equal = i;
})(hh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Jo, r = hh, n = dr, s = Se, i = jn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(c) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, c.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(c);
      }
      return l.prototype.seal = function(c, d, f, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var _ = d.length + this.tagLength, C;
        if (p) {
          if (p.length !== _)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          C = p;
        } else
          C = new Uint8Array(_);
        return e.streamXOR(this._key, m, d, C, 4), this._authenticate(C.subarray(C.length - this.tagLength, C.length), v, C.subarray(0, C.length - this.tagLength), f), n.wipe(m), C;
      }, l.prototype.open = function(c, d, f, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var _ = new Uint8Array(this.tagLength);
        if (this._authenticate(_, v, d.subarray(0, d.length - this.tagLength), f), !i.equal(_, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var C = d.length - this.tagLength, M;
        if (p) {
          if (p.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = p;
        } else
          M = new Uint8Array(C);
        return e.streamXOR(this._key, m, d.subarray(0, d.length - this.tagLength), M, 4), n.wipe(m), M;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(c, d, f, p) {
        var m = new r.Poly1305(d);
        p && (m.update(p), p.length % 16 > 0 && m.update(o.subarray(p.length % 16))), m.update(f), f.length % 16 > 0 && m.update(o.subarray(f.length % 16));
        var v = new Uint8Array(8);
        p && s.writeUint64LE(p.length, v), m.update(v), s.writeUint64LE(f.length, v), m.update(v);
        for (var _ = m.digest(), C = 0; C < _.length; C++)
          c[C] = _[C];
        m.clean(), n.wipe(_), n.wipe(v);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(Lc);
var ph = {}, Ni = {}, jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
function Cv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
jc.isSerializableHash = Cv;
Object.defineProperty(Ni, "__esModule", { value: !0 });
var $r = jc, Tv = jn, kv = dr, gh = (
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
      this._outer.update(n), $r.isSerializableHash(this._inner) && $r.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), kv.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!$r.isSerializableHash(this._inner) || !$r.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      $r.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), $r.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!$r.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!$r.isSerializableHash(this._inner) || !$r.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!$r.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Ni.HMAC = gh;
function Rv(t, e, r) {
  var n = new gh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
Ni.hmac = Rv;
Ni.equal = Tv.equal;
Object.defineProperty(ph, "__esModule", { value: !0 });
var ou = Ni, au = dr, Pv = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = ou.hmac(this._hash, n, r);
      this._hmac = new ou.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), au.wipe(this._buffer), au.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Nv = ph.HKDF = Pv, Xo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = dr;
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
      }, a.prototype.update = function(l, c) {
        if (c === void 0 && (c = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && c > 0; )
            this._buffer[this._bufferLength++] = l[d++], c--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (d = i(this._temp, this._state, l, d, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = l[d++], c--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var c = this._bytesHashed, d = this._bufferLength, f = c / 536870912 | 0, p = c << 3, m = c % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var v = d + 1; v < m - 8; v++)
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
  function i(a, l, c, d, f) {
    for (; f >= 64; ) {
      for (var p = l[0], m = l[1], v = l[2], _ = l[3], C = l[4], M = l[5], b = l[6], I = l[7], w = 0; w < 16; w++) {
        var S = d + w * 4;
        a[w] = e.readUint32BE(c, S);
      }
      for (var w = 16; w < 64; w++) {
        var y = a[w - 2], u = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = a[w - 15];
        var g = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        a[w] = (u + a[w - 7] | 0) + (g + a[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var u = (((C >>> 6 | C << 26) ^ (C >>> 11 | C << 21) ^ (C >>> 25 | C << 7)) + (C & M ^ ~C & b) | 0) + (I + (s[w] + a[w] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & v ^ m & v) | 0;
        I = b, b = M, M = C, C = _ + u | 0, _ = v, v = m, m = p, p = u + g | 0;
      }
      l[0] += p, l[1] += m, l[2] += v, l[3] += _, l[4] += C, l[5] += M, l[6] += b, l[7] += I, d += 64, f -= 64;
    }
    return d;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var c = l.digest();
    return l.clean(), c;
  }
  t.hash = o;
})(Xo);
var Dc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Ps, r = dr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(w) {
    const S = new Float64Array(16);
    if (w)
      for (let y = 0; y < w.length; y++)
        S[y] = w[y];
    return S;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function o(w) {
    let S = 1;
    for (let y = 0; y < 16; y++) {
      let u = w[y] + S + 65535;
      S = Math.floor(u / 65536), w[y] = u - S * 65536;
    }
    w[0] += S - 1 + 37 * (S - 1);
  }
  function a(w, S, y) {
    const u = ~(y - 1);
    for (let g = 0; g < 16; g++) {
      const N = u & (w[g] ^ S[g]);
      w[g] ^= N, S[g] ^= N;
    }
  }
  function l(w, S) {
    const y = n(), u = n();
    for (let g = 0; g < 16; g++)
      u[g] = S[g];
    o(u), o(u), o(u);
    for (let g = 0; g < 2; g++) {
      y[0] = u[0] - 65517;
      for (let A = 1; A < 15; A++)
        y[A] = u[A] - 65535 - (y[A - 1] >> 16 & 1), y[A - 1] &= 65535;
      y[15] = u[15] - 32767 - (y[14] >> 16 & 1);
      const N = y[15] >> 16 & 1;
      y[14] &= 65535, a(u, y, 1 - N);
    }
    for (let g = 0; g < 16; g++)
      w[2 * g] = u[g] & 255, w[2 * g + 1] = u[g] >> 8;
  }
  function c(w, S) {
    for (let y = 0; y < 16; y++)
      w[y] = S[2 * y] + (S[2 * y + 1] << 8);
    w[15] &= 32767;
  }
  function d(w, S, y) {
    for (let u = 0; u < 16; u++)
      w[u] = S[u] + y[u];
  }
  function f(w, S, y) {
    for (let u = 0; u < 16; u++)
      w[u] = S[u] - y[u];
  }
  function p(w, S, y) {
    let u, g, N = 0, A = 0, $ = 0, J = 0, K = 0, T = 0, k = 0, B = 0, q = 0, z = 0, W = 0, U = 0, H = 0, de = 0, F = 0, ue = 0, te = 0, ce = 0, D = 0, j = 0, R = 0, h = 0, O = 0, Q = 0, re = 0, Le = 0, je = 0, Oe = 0, We = 0, ot = 0, et = 0, $e = y[0], ze = y[1], Ce = y[2], Re = y[3], Te = y[4], Ee = y[5], be = y[6], pe = y[7], Pe = y[8], De = y[9], ve = y[10], Ue = y[11], Ze = y[12], Ke = y[13], Ye = y[14], He = y[15];
    u = S[0], N += u * $e, A += u * ze, $ += u * Ce, J += u * Re, K += u * Te, T += u * Ee, k += u * be, B += u * pe, q += u * Pe, z += u * De, W += u * ve, U += u * Ue, H += u * Ze, de += u * Ke, F += u * Ye, ue += u * He, u = S[1], A += u * $e, $ += u * ze, J += u * Ce, K += u * Re, T += u * Te, k += u * Ee, B += u * be, q += u * pe, z += u * Pe, W += u * De, U += u * ve, H += u * Ue, de += u * Ze, F += u * Ke, ue += u * Ye, te += u * He, u = S[2], $ += u * $e, J += u * ze, K += u * Ce, T += u * Re, k += u * Te, B += u * Ee, q += u * be, z += u * pe, W += u * Pe, U += u * De, H += u * ve, de += u * Ue, F += u * Ze, ue += u * Ke, te += u * Ye, ce += u * He, u = S[3], J += u * $e, K += u * ze, T += u * Ce, k += u * Re, B += u * Te, q += u * Ee, z += u * be, W += u * pe, U += u * Pe, H += u * De, de += u * ve, F += u * Ue, ue += u * Ze, te += u * Ke, ce += u * Ye, D += u * He, u = S[4], K += u * $e, T += u * ze, k += u * Ce, B += u * Re, q += u * Te, z += u * Ee, W += u * be, U += u * pe, H += u * Pe, de += u * De, F += u * ve, ue += u * Ue, te += u * Ze, ce += u * Ke, D += u * Ye, j += u * He, u = S[5], T += u * $e, k += u * ze, B += u * Ce, q += u * Re, z += u * Te, W += u * Ee, U += u * be, H += u * pe, de += u * Pe, F += u * De, ue += u * ve, te += u * Ue, ce += u * Ze, D += u * Ke, j += u * Ye, R += u * He, u = S[6], k += u * $e, B += u * ze, q += u * Ce, z += u * Re, W += u * Te, U += u * Ee, H += u * be, de += u * pe, F += u * Pe, ue += u * De, te += u * ve, ce += u * Ue, D += u * Ze, j += u * Ke, R += u * Ye, h += u * He, u = S[7], B += u * $e, q += u * ze, z += u * Ce, W += u * Re, U += u * Te, H += u * Ee, de += u * be, F += u * pe, ue += u * Pe, te += u * De, ce += u * ve, D += u * Ue, j += u * Ze, R += u * Ke, h += u * Ye, O += u * He, u = S[8], q += u * $e, z += u * ze, W += u * Ce, U += u * Re, H += u * Te, de += u * Ee, F += u * be, ue += u * pe, te += u * Pe, ce += u * De, D += u * ve, j += u * Ue, R += u * Ze, h += u * Ke, O += u * Ye, Q += u * He, u = S[9], z += u * $e, W += u * ze, U += u * Ce, H += u * Re, de += u * Te, F += u * Ee, ue += u * be, te += u * pe, ce += u * Pe, D += u * De, j += u * ve, R += u * Ue, h += u * Ze, O += u * Ke, Q += u * Ye, re += u * He, u = S[10], W += u * $e, U += u * ze, H += u * Ce, de += u * Re, F += u * Te, ue += u * Ee, te += u * be, ce += u * pe, D += u * Pe, j += u * De, R += u * ve, h += u * Ue, O += u * Ze, Q += u * Ke, re += u * Ye, Le += u * He, u = S[11], U += u * $e, H += u * ze, de += u * Ce, F += u * Re, ue += u * Te, te += u * Ee, ce += u * be, D += u * pe, j += u * Pe, R += u * De, h += u * ve, O += u * Ue, Q += u * Ze, re += u * Ke, Le += u * Ye, je += u * He, u = S[12], H += u * $e, de += u * ze, F += u * Ce, ue += u * Re, te += u * Te, ce += u * Ee, D += u * be, j += u * pe, R += u * Pe, h += u * De, O += u * ve, Q += u * Ue, re += u * Ze, Le += u * Ke, je += u * Ye, Oe += u * He, u = S[13], de += u * $e, F += u * ze, ue += u * Ce, te += u * Re, ce += u * Te, D += u * Ee, j += u * be, R += u * pe, h += u * Pe, O += u * De, Q += u * ve, re += u * Ue, Le += u * Ze, je += u * Ke, Oe += u * Ye, We += u * He, u = S[14], F += u * $e, ue += u * ze, te += u * Ce, ce += u * Re, D += u * Te, j += u * Ee, R += u * be, h += u * pe, O += u * Pe, Q += u * De, re += u * ve, Le += u * Ue, je += u * Ze, Oe += u * Ke, We += u * Ye, ot += u * He, u = S[15], ue += u * $e, te += u * ze, ce += u * Ce, D += u * Re, j += u * Te, R += u * Ee, h += u * be, O += u * pe, Q += u * Pe, re += u * De, Le += u * ve, je += u * Ue, Oe += u * Ze, We += u * Ke, ot += u * Ye, et += u * He, N += 38 * te, A += 38 * ce, $ += 38 * D, J += 38 * j, K += 38 * R, T += 38 * h, k += 38 * O, B += 38 * Q, q += 38 * re, z += 38 * Le, W += 38 * je, U += 38 * Oe, H += 38 * We, de += 38 * ot, F += 38 * et, g = 1, u = N + g + 65535, g = Math.floor(u / 65536), N = u - g * 65536, u = A + g + 65535, g = Math.floor(u / 65536), A = u - g * 65536, u = $ + g + 65535, g = Math.floor(u / 65536), $ = u - g * 65536, u = J + g + 65535, g = Math.floor(u / 65536), J = u - g * 65536, u = K + g + 65535, g = Math.floor(u / 65536), K = u - g * 65536, u = T + g + 65535, g = Math.floor(u / 65536), T = u - g * 65536, u = k + g + 65535, g = Math.floor(u / 65536), k = u - g * 65536, u = B + g + 65535, g = Math.floor(u / 65536), B = u - g * 65536, u = q + g + 65535, g = Math.floor(u / 65536), q = u - g * 65536, u = z + g + 65535, g = Math.floor(u / 65536), z = u - g * 65536, u = W + g + 65535, g = Math.floor(u / 65536), W = u - g * 65536, u = U + g + 65535, g = Math.floor(u / 65536), U = u - g * 65536, u = H + g + 65535, g = Math.floor(u / 65536), H = u - g * 65536, u = de + g + 65535, g = Math.floor(u / 65536), de = u - g * 65536, u = F + g + 65535, g = Math.floor(u / 65536), F = u - g * 65536, u = ue + g + 65535, g = Math.floor(u / 65536), ue = u - g * 65536, N += g - 1 + 37 * (g - 1), g = 1, u = N + g + 65535, g = Math.floor(u / 65536), N = u - g * 65536, u = A + g + 65535, g = Math.floor(u / 65536), A = u - g * 65536, u = $ + g + 65535, g = Math.floor(u / 65536), $ = u - g * 65536, u = J + g + 65535, g = Math.floor(u / 65536), J = u - g * 65536, u = K + g + 65535, g = Math.floor(u / 65536), K = u - g * 65536, u = T + g + 65535, g = Math.floor(u / 65536), T = u - g * 65536, u = k + g + 65535, g = Math.floor(u / 65536), k = u - g * 65536, u = B + g + 65535, g = Math.floor(u / 65536), B = u - g * 65536, u = q + g + 65535, g = Math.floor(u / 65536), q = u - g * 65536, u = z + g + 65535, g = Math.floor(u / 65536), z = u - g * 65536, u = W + g + 65535, g = Math.floor(u / 65536), W = u - g * 65536, u = U + g + 65535, g = Math.floor(u / 65536), U = u - g * 65536, u = H + g + 65535, g = Math.floor(u / 65536), H = u - g * 65536, u = de + g + 65535, g = Math.floor(u / 65536), de = u - g * 65536, u = F + g + 65535, g = Math.floor(u / 65536), F = u - g * 65536, u = ue + g + 65535, g = Math.floor(u / 65536), ue = u - g * 65536, N += g - 1 + 37 * (g - 1), w[0] = N, w[1] = A, w[2] = $, w[3] = J, w[4] = K, w[5] = T, w[6] = k, w[7] = B, w[8] = q, w[9] = z, w[10] = W, w[11] = U, w[12] = H, w[13] = de, w[14] = F, w[15] = ue;
  }
  function m(w, S) {
    p(w, S, S);
  }
  function v(w, S) {
    const y = n();
    for (let u = 0; u < 16; u++)
      y[u] = S[u];
    for (let u = 253; u >= 0; u--)
      m(y, y), u !== 2 && u !== 4 && p(y, y, S);
    for (let u = 0; u < 16; u++)
      w[u] = y[u];
  }
  function _(w, S) {
    const y = new Uint8Array(32), u = new Float64Array(80), g = n(), N = n(), A = n(), $ = n(), J = n(), K = n();
    for (let q = 0; q < 31; q++)
      y[q] = w[q];
    y[31] = w[31] & 127 | 64, y[0] &= 248, c(u, S);
    for (let q = 0; q < 16; q++)
      N[q] = u[q];
    g[0] = $[0] = 1;
    for (let q = 254; q >= 0; --q) {
      const z = y[q >>> 3] >>> (q & 7) & 1;
      a(g, N, z), a(A, $, z), d(J, g, A), f(g, g, A), d(A, N, $), f(N, N, $), m($, J), m(K, g), p(g, A, g), p(A, N, J), d(J, g, A), f(g, g, A), m(N, g), f(A, $, K), p(g, A, i), d(g, g, $), p(A, A, g), p(g, $, K), p($, N, u), m(N, J), a(g, N, z), a(A, $, z);
    }
    for (let q = 0; q < 16; q++)
      u[q + 16] = g[q], u[q + 32] = A[q], u[q + 48] = N[q], u[q + 64] = $[q];
    const T = u.subarray(32), k = u.subarray(16);
    v(T, T), p(k, k, T);
    const B = new Uint8Array(32);
    return l(B, k), B;
  }
  t.scalarMult = _;
  function C(w) {
    return _(w, s);
  }
  t.scalarMultBase = C;
  function M(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(w);
    return {
      publicKey: C(S),
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = M;
  function b(w) {
    const S = (0, e.randomBytes)(32, w), y = M(S);
    return (0, r.wipe)(S), y;
  }
  t.generateKeyPair = b;
  function I(w, S, y = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const u = _(w, S);
    if (y) {
      let g = 0;
      for (let N = 0; N < u.length; N++)
        g |= u[N];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return u;
  }
  t.sharedKey = I;
})(Dc);
var cu = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Av = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Lv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), jv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Dv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Mv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), zv = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Uv = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, lu = 3, Vv = [
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
  ["searchbot", zv]
], uu = [
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
function $v(t) {
  return t ? du(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Mv() : typeof navigator < "u" ? du(navigator.userAgent) : Zv();
}
function qv(t) {
  return t !== "" && Vv.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function du(t) {
  var e = qv(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Dv();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < lu && (s = cu(cu([], s, !0), Fv(lu - s.length), !0)) : s = [];
  var i = s.join("."), o = Wv(t), a = Uv.exec(t);
  return a && a[1] ? new jv(r, i, o, a[1]) : new Av(r, i, o);
}
function Wv(t) {
  for (var e = 0, r = uu.length; e < r; e++) {
    var n = uu[e], s = n[0], i = n[1], o = i.exec(t);
    if (o)
      return s;
  }
  return null;
}
function Zv() {
  var t = typeof process < "u" && process.version;
  return t ? new Lv(process.version.slice(1)) : null;
}
function Fv(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.getLocalStorage = rt.getLocalStorageOrThrow = rt.getCrypto = rt.getCryptoOrThrow = mh = rt.getLocation = rt.getLocationOrThrow = zc = rt.getNavigator = rt.getNavigatorOrThrow = Mc = rt.getDocument = rt.getDocumentOrThrow = rt.getFromWindowOrThrow = rt.getFromWindow = void 0;
function ns(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
rt.getFromWindow = ns;
function Ns(t) {
  const e = ns(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
rt.getFromWindowOrThrow = Ns;
function Hv() {
  return Ns("document");
}
rt.getDocumentOrThrow = Hv;
function Bv() {
  return ns("document");
}
var Mc = rt.getDocument = Bv;
function Kv() {
  return Ns("navigator");
}
rt.getNavigatorOrThrow = Kv;
function Yv() {
  return ns("navigator");
}
var zc = rt.getNavigator = Yv;
function Gv() {
  return Ns("location");
}
rt.getLocationOrThrow = Gv;
function Qv() {
  return ns("location");
}
var mh = rt.getLocation = Qv;
function Jv() {
  return Ns("crypto");
}
rt.getCryptoOrThrow = Jv;
function Xv() {
  return ns("crypto");
}
rt.getCrypto = Xv;
function e0() {
  return Ns("localStorage");
}
rt.getLocalStorageOrThrow = e0;
function t0() {
  return ns("localStorage");
}
rt.getLocalStorage = t0;
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
var yh = Uc.getWindowMetadata = void 0;
const hu = rt;
function r0() {
  let t, e;
  try {
    t = hu.getDocumentOrThrow(), e = hu.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < d.length; p++) {
      const m = d[p], v = m.getAttribute("rel");
      if (v && v.toLowerCase().indexOf("icon") > -1) {
        const _ = m.getAttribute("href");
        if (_)
          if (_.toLowerCase().indexOf("https:") === -1 && _.toLowerCase().indexOf("http:") === -1 && _.indexOf("//") !== 0) {
            let C = e.protocol + "//" + e.host;
            if (_.indexOf("/") === 0)
              C += _;
            else {
              const M = e.pathname.split("/");
              M.pop();
              const b = M.join("/");
              C += b + "/" + _;
            }
            f.push(C);
          } else if (_.indexOf("//") === 0) {
            const C = e.protocol + _;
            f.push(C);
          } else
            f.push(_);
      }
    }
    return f;
  }
  function n(...d) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const m = f[p], v = ["itemprop", "property", "name"].map((_) => m.getAttribute(_)).filter((_) => _ ? d.includes(_) : !1);
      if (v.length && v) {
        const _ = m.getAttribute("content");
        if (_)
          return _;
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
  const o = s(), a = i(), l = e.origin, c = r();
  return {
    description: a,
    url: l,
    icons: c,
    name: o
  };
}
yh = Uc.getWindowMetadata = r0;
var ei = {}, n0 = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), vh = "%[a-f0-9]{2}", fu = new RegExp("(" + vh + ")|([^%]+?)", "gi"), pu = new RegExp("(" + vh + ")+", "gi");
function qa(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], qa(r), qa(n));
}
function s0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(fu) || [], r = 1; r < e.length; r++)
      t = qa(e, r).join(""), e = t.match(fu) || [];
    return t;
  }
}
function i0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = pu.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = s0(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = pu.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var o = s[i];
    t = t.replace(new RegExp(o, "g"), e[o]);
  }
  return t;
}
var o0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return i0(t);
  }
}, a0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, c0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var o = n[i], a = t[o];
    (s ? e.indexOf(o) !== -1 : e(o, a, t)) && (r[o] = a);
  }
  return r;
};
(function(t) {
  const e = n0, r = o0, n = a0, s = c0, i = (b) => b == null, o = Symbol("encodeFragmentIdentifier");
  function a(b) {
    switch (b.arrayFormat) {
      case "index":
        return (I) => (w, S) => {
          const y = w.length;
          return S === void 0 || b.skipNull && S === null || b.skipEmptyString && S === "" ? w : S === null ? [...w, [d(I, b), "[", y, "]"].join("")] : [
            ...w,
            [d(I, b), "[", d(y, b), "]=", d(S, b)].join("")
          ];
        };
      case "bracket":
        return (I) => (w, S) => S === void 0 || b.skipNull && S === null || b.skipEmptyString && S === "" ? w : S === null ? [...w, [d(I, b), "[]"].join("")] : [...w, [d(I, b), "[]=", d(S, b)].join("")];
      case "colon-list-separator":
        return (I) => (w, S) => S === void 0 || b.skipNull && S === null || b.skipEmptyString && S === "" ? w : S === null ? [...w, [d(I, b), ":list="].join("")] : [...w, [d(I, b), ":list=", d(S, b)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const I = b.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (w) => (S, y) => y === void 0 || b.skipNull && y === null || b.skipEmptyString && y === "" ? S : (y = y === null ? "" : y, S.length === 0 ? [[d(w, b), I, d(y, b)].join("")] : [[S, d(y, b)].join(b.arrayFormatSeparator)]);
      }
      default:
        return (I) => (w, S) => S === void 0 || b.skipNull && S === null || b.skipEmptyString && S === "" ? w : S === null ? [...w, d(I, b)] : [...w, [d(I, b), "=", d(S, b)].join("")];
    }
  }
  function l(b) {
    let I;
    switch (b.arrayFormat) {
      case "index":
        return (w, S, y) => {
          if (I = /\[(\d*)\]$/.exec(w), w = w.replace(/\[\d*\]$/, ""), !I) {
            y[w] = S;
            return;
          }
          y[w] === void 0 && (y[w] = {}), y[w][I[1]] = S;
        };
      case "bracket":
        return (w, S, y) => {
          if (I = /(\[\])$/.exec(w), w = w.replace(/\[\]$/, ""), !I) {
            y[w] = S;
            return;
          }
          if (y[w] === void 0) {
            y[w] = [S];
            return;
          }
          y[w] = [].concat(y[w], S);
        };
      case "colon-list-separator":
        return (w, S, y) => {
          if (I = /(:list)$/.exec(w), w = w.replace(/:list$/, ""), !I) {
            y[w] = S;
            return;
          }
          if (y[w] === void 0) {
            y[w] = [S];
            return;
          }
          y[w] = [].concat(y[w], S);
        };
      case "comma":
      case "separator":
        return (w, S, y) => {
          const u = typeof S == "string" && S.includes(b.arrayFormatSeparator), g = typeof S == "string" && !u && f(S, b).includes(b.arrayFormatSeparator);
          S = g ? f(S, b) : S;
          const N = u || g ? S.split(b.arrayFormatSeparator).map((A) => f(A, b)) : S === null ? S : f(S, b);
          y[w] = N;
        };
      case "bracket-separator":
        return (w, S, y) => {
          const u = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !u) {
            y[w] = S && f(S, b);
            return;
          }
          const g = S === null ? [] : S.split(b.arrayFormatSeparator).map((N) => f(N, b));
          if (y[w] === void 0) {
            y[w] = g;
            return;
          }
          y[w] = [].concat(y[w], g);
        };
      default:
        return (w, S, y) => {
          if (y[w] === void 0) {
            y[w] = S;
            return;
          }
          y[w] = [].concat(y[w], S);
        };
    }
  }
  function c(b) {
    if (typeof b != "string" || b.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(b, I) {
    return I.encode ? I.strict ? e(b) : encodeURIComponent(b) : b;
  }
  function f(b, I) {
    return I.decode ? r(b) : b;
  }
  function p(b) {
    return Array.isArray(b) ? b.sort() : typeof b == "object" ? p(Object.keys(b)).sort((I, w) => Number(I) - Number(w)).map((I) => b[I]) : b;
  }
  function m(b) {
    const I = b.indexOf("#");
    return I !== -1 && (b = b.slice(0, I)), b;
  }
  function v(b) {
    let I = "";
    const w = b.indexOf("#");
    return w !== -1 && (I = b.slice(w)), I;
  }
  function _(b) {
    b = m(b);
    const I = b.indexOf("?");
    return I === -1 ? "" : b.slice(I + 1);
  }
  function C(b, I) {
    return I.parseNumbers && !Number.isNaN(Number(b)) && typeof b == "string" && b.trim() !== "" ? b = Number(b) : I.parseBooleans && b !== null && (b.toLowerCase() === "true" || b.toLowerCase() === "false") && (b = b.toLowerCase() === "true"), b;
  }
  function M(b, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), c(I.arrayFormatSeparator);
    const w = l(I), S = /* @__PURE__ */ Object.create(null);
    if (typeof b != "string" || (b = b.trim().replace(/^[?#&]/, ""), !b))
      return S;
    for (const y of b.split("&")) {
      if (y === "")
        continue;
      let [u, g] = n(I.decode ? y.replace(/\+/g, " ") : y, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(I.arrayFormat) ? g : f(g, I), w(f(u, I), g, S);
    }
    for (const y of Object.keys(S)) {
      const u = S[y];
      if (typeof u == "object" && u !== null)
        for (const g of Object.keys(u))
          u[g] = C(u[g], I);
      else
        S[y] = C(u, I);
    }
    return I.sort === !1 ? S : (I.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(I.sort)).reduce((y, u) => {
      const g = S[u];
      return g && typeof g == "object" && !Array.isArray(g) ? y[u] = p(g) : y[u] = g, y;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = _, t.parse = M, t.stringify = (b, I) => {
    if (!b)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), c(I.arrayFormatSeparator);
    const w = (g) => I.skipNull && i(b[g]) || I.skipEmptyString && b[g] === "", S = a(I), y = {};
    for (const g of Object.keys(b))
      w(g) || (y[g] = b[g]);
    const u = Object.keys(y);
    return I.sort !== !1 && u.sort(I.sort), u.map((g) => {
      const N = b[g];
      return N === void 0 ? "" : N === null ? d(g, I) : Array.isArray(N) ? N.length === 0 && I.arrayFormat === "bracket-separator" ? d(g, I) + "[]" : N.reduce(S(g), []).join("&") : d(g, I) + "=" + d(N, I);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (b, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [w, S] = n(b, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: M(_(b), I)
      },
      I && I.parseFragmentIdentifier && S ? { fragmentIdentifier: f(S, I) } : {}
    );
  }, t.stringifyUrl = (b, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, I);
    const w = m(b.url).split("?")[0] || "", S = t.extract(b.url), y = t.parse(S, { sort: !1 }), u = Object.assign(y, b.query);
    let g = t.stringify(u, I);
    g && (g = `?${g}`);
    let N = v(b.url);
    return b.fragmentIdentifier && (N = `#${I[o] ? d(b.fragmentIdentifier, I) : b.fragmentIdentifier}`), `${w}${g}${N}`;
  }, t.pick = (b, I, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, w);
    const { url: S, query: y, fragmentIdentifier: u } = t.parseUrl(b, w);
    return t.stringifyUrl({
      url: S,
      query: s(y, I),
      fragmentIdentifier: u
    }, w);
  }, t.exclude = (b, I, w) => {
    const S = Array.isArray(I) ? (y) => !I.includes(y) : (y, u) => !I(y, u);
    return t.pick(b, S, w);
  };
})(ei);
const l0 = {
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
const bh = "base10", Jt = "base16", Wa = "base64pad", Vc = "utf8", wh = 0, ss = 1, u0 = 0, gu = 1, Za = 12, $c = 32;
function d0() {
  const t = Dc.generateKeyPair();
  return { privateKey: Xt(t.secretKey, Jt), publicKey: Xt(t.publicKey, Jt) };
}
function Fa() {
  const t = Ps.randomBytes($c);
  return Xt(t, Jt);
}
function h0(t, e) {
  const r = Dc.sharedKey(or(t, Jt), or(e, Jt), !0), n = new Nv(Xo.SHA256, r).expand($c);
  return Xt(n, Jt);
}
function f0(t) {
  const e = Xo.hash(or(t, Jt));
  return Xt(e, Jt);
}
function bs(t) {
  const e = Xo.hash(or(t, Vc));
  return Xt(e, Jt);
}
function p0(t) {
  return or(`${t}`, bh);
}
function Ai(t) {
  return Number(Xt(t, bh));
}
function g0(t) {
  const e = p0(typeof t.type < "u" ? t.type : wh);
  if (Ai(e) === ss && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? or(t.senderPublicKey, Jt) : void 0, n = typeof t.iv < "u" ? or(t.iv, Jt) : Ps.randomBytes(Za), s = new Lc.ChaCha20Poly1305(or(t.symKey, Jt)).seal(n, or(t.message, Vc));
  return y0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function m0(t) {
  const e = new Lc.ChaCha20Poly1305(or(t.symKey, Jt)), { sealed: r, iv: n } = _o(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Xt(s, Vc);
}
function y0(t) {
  if (Ai(t.type) === ss) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Xt(Va([t.type, t.senderPublicKey, t.iv, t.sealed]), Wa);
  }
  return Xt(Va([t.type, t.iv, t.sealed]), Wa);
}
function _o(t) {
  const e = or(t, Wa), r = e.slice(u0, gu), n = gu;
  if (Ai(r) === ss) {
    const a = n + $c, l = a + Za, c = e.slice(n, a), d = e.slice(a, l), f = e.slice(l);
    return { type: r, sealed: f, iv: d, senderPublicKey: c };
  }
  const s = n + Za, i = e.slice(n, s), o = e.slice(s);
  return { type: r, sealed: o, iv: i };
}
function v0(t, e) {
  const r = _o(t);
  return Eh({ type: Ai(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Xt(r.senderPublicKey, Jt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Eh(t) {
  const e = (t == null ? void 0 : t.type) || wh;
  if (e === ss) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function mu(t) {
  return t.type === ss && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var _0 = Object.defineProperty, yu = Object.getOwnPropertySymbols, b0 = Object.prototype.hasOwnProperty, w0 = Object.prototype.propertyIsEnumerable, vu = (t, e, r) => e in t ? _0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, _u = (t, e) => {
  for (var r in e || (e = {}))
    b0.call(e, r) && vu(t, r, e[r]);
  if (yu)
    for (var r of yu(e))
      w0.call(e, r) && vu(t, r, e[r]);
  return t;
};
const E0 = "ReactNative", ur = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, S0 = "js";
function qc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function As() {
  return !Mc() && !!zc() && navigator.product === E0;
}
function Ls() {
  return !qc() && !!zc() && !!Mc();
}
function Li() {
  return As() ? ur.reactNative : qc() ? ur.node : Ls() ? ur.browser : ur.unknown;
}
function x0() {
  var t;
  try {
    return As() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function I0(t, e) {
  let r = ei.parse(t);
  return r = _u(_u({}, r), e), t = ei.stringify(r), t;
}
function O0() {
  return yh() || { name: "", description: "", url: "", icons: [""] };
}
function C0() {
  if (Li() === ur.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = $v();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function T0() {
  var t;
  const e = Li();
  return e === ur.browser ? [e, ((t = mh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function k0(t, e, r) {
  const n = C0(), s = T0();
  return [[t, e].join("-"), [S0, r].join("-"), n, s].join("/");
}
function R0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: o, bundleId: a }) {
  const l = r.split("?"), c = k0(t, e, n), d = { auth: s, ua: c, projectId: i, useOnCloseEvent: o || void 0, origin: a || void 0 }, f = I0(l[1] || "", d);
  return l[0] + "?" + f;
}
function Fn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Sh(t) {
  return Object.fromEntries(t.entries());
}
function xh(t) {
  return new Map(Object.entries(t));
}
function hs(t = le.FIVE_MINUTES, e) {
  const r = le.toMiliseconds(t || le.FIVE_MINUTES);
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
function ti(t, e, r) {
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
function P0(t) {
  return Ih("topic", t);
}
function N0(t) {
  return Ih("id", t);
}
function Oh(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function lr(t, e) {
  return le.fromMiliseconds((e || Date.now()) + le.toMiliseconds(t));
}
function vn(t) {
  return Date.now() >= le.toMiliseconds(t);
}
function St(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function A0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, o = Li();
    o === ur.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : o === ur.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function L0(t, e) {
  try {
    return await t.getItem(e) || (Ls() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const j0 = "irn";
function Ha(t) {
  return (t == null ? void 0 : t.relay) || { protocol: j0 };
}
function uo(t) {
  const e = l0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var D0 = Object.defineProperty, M0 = Object.defineProperties, z0 = Object.getOwnPropertyDescriptors, bu = Object.getOwnPropertySymbols, U0 = Object.prototype.hasOwnProperty, V0 = Object.prototype.propertyIsEnumerable, wu = (t, e, r) => e in t ? D0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, $0 = (t, e) => {
  for (var r in e || (e = {}))
    U0.call(e, r) && wu(t, r, e[r]);
  if (bu)
    for (var r of bu(e))
      V0.call(e, r) && wu(t, r, e[r]);
  return t;
}, q0 = (t, e) => M0(t, z0(e));
function W0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), o = t[s];
      r[i] = o;
    }
  }), r;
}
function Eu(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", o = ei.parse(i);
  return { protocol: n, topic: Z0(s[0]), version: parseInt(s[1], 10), symKey: o.symKey, relay: W0(o), expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0 };
}
function Z0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function F0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function H0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ei.stringify(q0($0({ symKey: t.symKey }, F0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function js(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function B0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...js(r.accounts));
  }), e;
}
function K0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    js(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function Y0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    js(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const G0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Q0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(t, e) {
  const { message: r, code: n } = Q0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _t(t, e) {
  const { message: r, code: n } = G0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function ji(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function bo(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Gt(t) {
  return typeof t > "u";
}
function Nt(t, e) {
  return e && Gt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Wc(t, e) {
  return e && Gt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function J0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Fn(s, n) ? (n.forEach((o) => {
    const { accounts: a, methods: l, events: c } = t.namespaces[o], d = js(a), f = r[o];
    (!Fn(_h(o, f), d) || !Fn(f.methods, l) || !Fn(f.events, c)) && (i = !1);
  }), i) : !1;
}
function wo(t) {
  return Nt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function X0(t) {
  if (Nt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && wo(r);
    }
  }
  return !1;
}
function e1(t) {
  if (Nt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function t1(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function r1(t) {
  return t == null ? void 0 : t.topic;
}
function n1(t, e) {
  let r = null;
  return Nt(t == null ? void 0 : t.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Su(t) {
  let e = !0;
  return ji(t) ? t.length && (e = t.every((r) => Nt(r, !1))) : e = !1, e;
}
function s1(t, e, r) {
  let n = null;
  return ji(e) && e.length ? e.forEach((s) => {
    n || wo(s) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : wo(t) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function i1(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const o = s1(s, _h(s, i), `${e} ${r}`);
    o && (n = o);
  }), n;
}
function o1(t, e) {
  let r = null;
  return ji(t) ? t.forEach((n) => {
    r || X0(n) || (r = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function a1(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = o1(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function c1(t, e) {
  let r = null;
  return Su(t == null ? void 0 : t.methods) ? Su(t == null ? void 0 : t.events) || (r = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Ch(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = c1(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function l1(t, e, r) {
  let n = null;
  if (t && bo(t)) {
    const s = Ch(t, e);
    s && (n = s);
    const i = i1(t, e, r);
    i && (n = i);
  } else
    n = X("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function ga(t, e) {
  let r = null;
  if (t && bo(t)) {
    const n = Ch(t, e);
    n && (r = n);
    const s = a1(t, e);
    s && (r = s);
  } else
    r = X("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Th(t) {
  return Nt(t.protocol, !0);
}
function u1(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && ji(t) && t.length && t.forEach((n) => {
    r = Th(n);
  }), r;
}
function d1(t) {
  return typeof t == "number";
}
function sr(t) {
  return typeof t < "u" && typeof t !== null;
}
function h1(t) {
  return !(!t || typeof t != "object" || !t.code || !Wc(t.code, !1) || !t.message || !Nt(t.message, !1));
}
function f1(t) {
  return !(Gt(t) || !Nt(t.method, !1));
}
function p1(t) {
  return !(Gt(t) || Gt(t.result) && Gt(t.error) || !Wc(t.id, !1) || !Nt(t.jsonrpc, !1));
}
function g1(t) {
  return !(Gt(t) || !Nt(t.name, !1));
}
function xu(t, e) {
  return !(!wo(e) || !B0(t).includes(e));
}
function m1(t, e, r) {
  return Nt(r, !1) ? K0(t, e).includes(r) : !1;
}
function y1(t, e, r) {
  return Nt(r, !1) ? Y0(t, e).includes(r) : !1;
}
function Iu(t, e, r) {
  let n = null;
  const s = v1(t), i = _1(e), o = Object.keys(s), a = Object.keys(i), l = Ou(Object.keys(t)), c = Ou(Object.keys(e)), d = l.filter((f) => !c.includes(f));
  return d.length && (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Fn(o, a) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = js(e[f].accounts);
    p.includes(f) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), o.forEach((f) => {
    n || (Fn(s[f].methods, i[f].methods) ? Fn(s[f].events, i[f].events) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function v1(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Ou(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function _1(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = js(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function b1(t, e) {
  return Wc(t, !1) && t <= e.max && t >= e.min;
}
function Cu() {
  const t = Li();
  return new Promise((e) => {
    switch (t) {
      case ur.browser:
        e(w1());
        break;
      case ur.reactNative:
        e(E1());
        break;
      case ur.node:
        e(S1());
        break;
      default:
        e(!0);
    }
  });
}
function w1() {
  return Ls() && (navigator == null ? void 0 : navigator.onLine);
}
async function E1() {
  if (As() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function S1() {
  return !0;
}
function x1(t) {
  switch (Li()) {
    case ur.browser:
      I1(t);
      break;
    case ur.reactNative:
      O1(t);
      break;
  }
}
function I1(t) {
  !As() && Ls() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function O1(t) {
  As() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const ma = {};
let no = class {
  static get(t) {
    return ma[t];
  }
  static set(t, e) {
    ma[t] = e;
  }
  static delete(t) {
    delete ma[t];
  }
};
const C1 = "PARSE_ERROR", T1 = "INVALID_REQUEST", k1 = "METHOD_NOT_FOUND", R1 = "INVALID_PARAMS", kh = "INTERNAL_ERROR", Zc = "SERVER_ERROR", P1 = [-32700, -32600, -32601, -32602, -32603], Gs = {
  [C1]: { code: -32700, message: "Parse error" },
  [T1]: { code: -32600, message: "Invalid Request" },
  [k1]: { code: -32601, message: "Method not found" },
  [R1]: { code: -32602, message: "Invalid params" },
  [kh]: { code: -32603, message: "Internal error" },
  [Zc]: { code: -32e3, message: "Server error" }
}, Rh = Zc;
function N1(t) {
  return P1.includes(t);
}
function Tu(t) {
  return Object.keys(Gs).includes(t) ? Gs[t] : Gs[Rh];
}
function A1(t) {
  return Object.values(Gs).find((r) => r.code === t) || Gs[Rh];
}
function L1(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Ph = {}, Qr = {}, ku;
function j1() {
  if (ku)
    return Qr;
  ku = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.isBrowserCryptoAvailable = Qr.getSubtleCrypto = Qr.getBrowerCrypto = void 0;
  function t() {
    return (wn == null ? void 0 : wn.crypto) || (wn == null ? void 0 : wn.msCrypto) || {};
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
var Jr = {}, Ru;
function D1() {
  if (Ru)
    return Jr;
  Ru = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.isBrowser = Jr.isNode = Jr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Jr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Jr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Jr.isBrowser = r, Jr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Yr;
  e.__exportStar(j1(), t), e.__exportStar(D1(), t);
})(Ph);
function Fc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Nh(t = 6) {
  return BigInt(Fc(t));
}
function ws(t, e, r) {
  return {
    id: r || Fc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Hc(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Bc(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: M1(e, r)
  };
}
function M1(t, e) {
  return typeof t > "u" ? Tu(kh) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Tu(Zc)), { message: t })), typeof e < "u" && (t.data = e), N1(t.code) && (t = A1(t.code)), t);
}
class z1 {
}
class U1 extends z1 {
  constructor() {
    super();
  }
}
class V1 extends U1 {
  constructor(e) {
    super();
  }
}
const $1 = "^wss?:";
function q1(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function W1(t, e) {
  const r = q1(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Pu(t) {
  return W1(t, $1);
}
function Z1(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Ah(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Kc(t) {
  return Ah(t) && "method" in t;
}
function ea(t) {
  return Ah(t) && (rn(t) || Sr(t));
}
function rn(t) {
  return "result" in t;
}
function Sr(t) {
  return "error" in t;
}
class F1 extends V1 {
  constructor(e) {
    super(e), this.events = new Lr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(ws(e.method, e.params || [], e.id || Nh().toString()), r);
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
        Sr(i) ? s(i.error) : n(i.result);
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
    this.events.emit("payload", e), ea(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const H1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), B1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Nu = (t) => t.split("?")[0], Au = 10, K1 = H1();
class Y1 {
  constructor(e) {
    if (this.url = e, this.events = new Lr.EventEmitter(), this.registering = !1, !Pu(e))
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
      this.socket.send(Ri(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Pu(e))
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
      const s = new URLSearchParams(e).get("origin"), i = Ph.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !Z1(e) }, o = new K1(e, [], i);
      B1() ? o.onerror = (a) => {
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
    const r = typeof e.data == "string" ? Bo(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = Bc(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return L1(e, Nu(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Au && this.events.setMaxListeners(Au);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Nu(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Eo = { exports: {} };
Eo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", _ = "[object Map]", C = "[object Number]", M = "[object Null]", b = "[object Object]", I = "[object Promise]", w = "[object Proxy]", S = "[object RegExp]", y = "[object Set]", u = "[object String]", g = "[object Symbol]", N = "[object Undefined]", A = "[object WeakMap]", $ = "[object ArrayBuffer]", J = "[object DataView]", K = "[object Float32Array]", T = "[object Float64Array]", k = "[object Int8Array]", B = "[object Int16Array]", q = "[object Int32Array]", z = "[object Uint8Array]", W = "[object Uint8ClampedArray]", U = "[object Uint16Array]", H = "[object Uint32Array]", de = /[\\^$.*+?()[\]{}|]/g, F = /^\[object .+?Constructor\]$/, ue = /^(?:0|[1-9]\d*)$/, te = {};
  te[K] = te[T] = te[k] = te[B] = te[q] = te[z] = te[W] = te[U] = te[H] = !0, te[a] = te[l] = te[$] = te[d] = te[J] = te[f] = te[p] = te[m] = te[_] = te[C] = te[b] = te[S] = te[y] = te[u] = te[A] = !1;
  var ce = typeof wn == "object" && wn && wn.Object === Object && wn, D = typeof self == "object" && self && self.Object === Object && self, j = ce || D || Function("return this")(), R = e && !e.nodeType && e, h = R && !0 && t && !t.nodeType && t, O = h && h.exports === R, Q = O && ce.process, re = function() {
    try {
      return Q && Q.binding && Q.binding("util");
    } catch {
    }
  }(), Le = re && re.isTypedArray;
  function je(E, P) {
    for (var Z = -1, ae = E == null ? 0 : E.length, it = 0, ke = []; ++Z < ae; ) {
      var vt = E[Z];
      P(vt, Z, E) && (ke[it++] = vt);
    }
    return ke;
  }
  function Oe(E, P) {
    for (var Z = -1, ae = P.length, it = E.length; ++Z < ae; )
      E[it + Z] = P[Z];
    return E;
  }
  function We(E, P) {
    for (var Z = -1, ae = E == null ? 0 : E.length; ++Z < ae; )
      if (P(E[Z], Z, E))
        return !0;
    return !1;
  }
  function ot(E, P) {
    for (var Z = -1, ae = Array(E); ++Z < E; )
      ae[Z] = P(Z);
    return ae;
  }
  function et(E) {
    return function(P) {
      return E(P);
    };
  }
  function $e(E, P) {
    return E.has(P);
  }
  function ze(E, P) {
    return E == null ? void 0 : E[P];
  }
  function Ce(E) {
    var P = -1, Z = Array(E.size);
    return E.forEach(function(ae, it) {
      Z[++P] = [it, ae];
    }), Z;
  }
  function Re(E, P) {
    return function(Z) {
      return E(P(Z));
    };
  }
  function Te(E) {
    var P = -1, Z = Array(E.size);
    return E.forEach(function(ae) {
      Z[++P] = ae;
    }), Z;
  }
  var Ee = Array.prototype, be = Function.prototype, pe = Object.prototype, Pe = j["__core-js_shared__"], De = be.toString, ve = pe.hasOwnProperty, Ue = function() {
    var E = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), Ze = pe.toString, Ke = RegExp(
    "^" + De.call(ve).replace(de, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ye = O ? j.Buffer : void 0, He = j.Symbol, ar = j.Uint8Array, hr = pe.propertyIsEnumerable, Mr = Ee.splice, At = He ? He.toStringTag : void 0, zr = Object.getOwnPropertySymbols, fr = Ye ? Ye.isBuffer : void 0, hn = Re(Object.keys, Object), at = os(j, "DataView"), nt = os(j, "Map"), pt = os(j, "Promise"), lt = os(j, "Set"), gt = os(j, "WeakMap"), st = os(Object, "create"), bt = Dn(at), xt = Dn(nt), It = Dn(pt), wt = Dn(lt), Ot = Dn(gt), Et = He ? He.prototype : void 0, mt = Et ? Et.valueOf : void 0;
  function tt(E) {
    var P = -1, Z = E == null ? 0 : E.length;
    for (this.clear(); ++P < Z; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function x() {
    this.__data__ = st ? st(null) : {}, this.size = 0;
  }
  function V(E) {
    var P = this.has(E) && delete this.__data__[E];
    return this.size -= P ? 1 : 0, P;
  }
  function ee(E) {
    var P = this.__data__;
    if (st) {
      var Z = P[E];
      return Z === n ? void 0 : Z;
    }
    return ve.call(P, E) ? P[E] : void 0;
  }
  function ge(E) {
    var P = this.__data__;
    return st ? P[E] !== void 0 : ve.call(P, E);
  }
  function Be(E, P) {
    var Z = this.__data__;
    return this.size += this.has(E) ? 0 : 1, Z[E] = st && P === void 0 ? n : P, this;
  }
  tt.prototype.clear = x, tt.prototype.delete = V, tt.prototype.get = ee, tt.prototype.has = ge, tt.prototype.set = Be;
  function Ve(E) {
    var P = -1, Z = E == null ? 0 : E.length;
    for (this.clear(); ++P < Z; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function qe() {
    this.__data__ = [], this.size = 0;
  }
  function Me(E) {
    var P = this.__data__, Z = Bi(P, E);
    if (Z < 0)
      return !1;
    var ae = P.length - 1;
    return Z == ae ? P.pop() : Mr.call(P, Z, 1), --this.size, !0;
  }
  function Lt(E) {
    var P = this.__data__, Z = Bi(P, E);
    return Z < 0 ? void 0 : P[Z][1];
  }
  function ut(E) {
    return Bi(this.__data__, E) > -1;
  }
  function yt(E, P) {
    var Z = this.__data__, ae = Bi(Z, E);
    return ae < 0 ? (++this.size, Z.push([E, P])) : Z[ae][1] = P, this;
  }
  Ve.prototype.clear = qe, Ve.prototype.delete = Me, Ve.prototype.get = Lt, Ve.prototype.has = ut, Ve.prototype.set = yt;
  function Ct(E) {
    var P = -1, Z = E == null ? 0 : E.length;
    for (this.clear(); ++P < Z; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function fn() {
    this.size = 0, this.__data__ = {
      hash: new tt(),
      map: new (nt || Ve)(),
      string: new tt()
    };
  }
  function Fi(E) {
    var P = Ki(this, E).delete(E);
    return this.size -= P ? 1 : 0, P;
  }
  function br(E) {
    return Ki(this, E).get(E);
  }
  function Yf(E) {
    return Ki(this, E).has(E);
  }
  function Gf(E, P) {
    var Z = Ki(this, E), ae = Z.size;
    return Z.set(E, P), this.size += Z.size == ae ? 0 : 1, this;
  }
  Ct.prototype.clear = fn, Ct.prototype.delete = Fi, Ct.prototype.get = br, Ct.prototype.has = Yf, Ct.prototype.set = Gf;
  function Hi(E) {
    var P = -1, Z = E == null ? 0 : E.length;
    for (this.__data__ = new Ct(); ++P < Z; )
      this.add(E[P]);
  }
  function Qf(E) {
    return this.__data__.set(E, n), this;
  }
  function Jf(E) {
    return this.__data__.has(E);
  }
  Hi.prototype.add = Hi.prototype.push = Qf, Hi.prototype.has = Jf;
  function pn(E) {
    var P = this.__data__ = new Ve(E);
    this.size = P.size;
  }
  function Xf() {
    this.__data__ = new Ve(), this.size = 0;
  }
  function ep(E) {
    var P = this.__data__, Z = P.delete(E);
    return this.size = P.size, Z;
  }
  function tp(E) {
    return this.__data__.get(E);
  }
  function rp(E) {
    return this.__data__.has(E);
  }
  function np(E, P) {
    var Z = this.__data__;
    if (Z instanceof Ve) {
      var ae = Z.__data__;
      if (!nt || ae.length < r - 1)
        return ae.push([E, P]), this.size = ++Z.size, this;
      Z = this.__data__ = new Ct(ae);
    }
    return Z.set(E, P), this.size = Z.size, this;
  }
  pn.prototype.clear = Xf, pn.prototype.delete = ep, pn.prototype.get = tp, pn.prototype.has = rp, pn.prototype.set = np;
  function sp(E, P) {
    var Z = Yi(E), ae = !Z && _p(E), it = !Z && !ae && aa(E), ke = !Z && !ae && !it && hl(E), vt = Z || ae || it || ke, Tt = vt ? ot(E.length, String) : [], jt = Tt.length;
    for (var dt in E)
      (P || ve.call(E, dt)) && !(vt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (dt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      it && (dt == "offset" || dt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (dt == "buffer" || dt == "byteLength" || dt == "byteOffset") || // Skip index properties.
      pp(dt, jt))) && Tt.push(dt);
    return Tt;
  }
  function Bi(E, P) {
    for (var Z = E.length; Z--; )
      if (cl(E[Z][0], P))
        return Z;
    return -1;
  }
  function ip(E, P, Z) {
    var ae = P(E);
    return Yi(E) ? ae : Oe(ae, Z(E));
  }
  function Ds(E) {
    return E == null ? E === void 0 ? N : M : At && At in Object(E) ? hp(E) : vp(E);
  }
  function sl(E) {
    return Ms(E) && Ds(E) == a;
  }
  function il(E, P, Z, ae, it) {
    return E === P ? !0 : E == null || P == null || !Ms(E) && !Ms(P) ? E !== E && P !== P : op(E, P, Z, ae, il, it);
  }
  function op(E, P, Z, ae, it, ke) {
    var vt = Yi(E), Tt = Yi(P), jt = vt ? l : gn(E), dt = Tt ? l : gn(P);
    jt = jt == a ? b : jt, dt = dt == a ? b : dt;
    var cr = jt == b, wr = dt == b, zt = jt == dt;
    if (zt && aa(E)) {
      if (!aa(P))
        return !1;
      vt = !0, cr = !1;
    }
    if (zt && !cr)
      return ke || (ke = new pn()), vt || hl(E) ? ol(E, P, Z, ae, it, ke) : up(E, P, jt, Z, ae, it, ke);
    if (!(Z & s)) {
      var pr = cr && ve.call(E, "__wrapped__"), gr = wr && ve.call(P, "__wrapped__");
      if (pr || gr) {
        var mn = pr ? E.value() : E, Gr = gr ? P.value() : P;
        return ke || (ke = new pn()), it(mn, Gr, Z, ae, ke);
      }
    }
    return zt ? (ke || (ke = new pn()), dp(E, P, Z, ae, it, ke)) : !1;
  }
  function ap(E) {
    if (!dl(E) || mp(E))
      return !1;
    var P = ll(E) ? Ke : F;
    return P.test(Dn(E));
  }
  function cp(E) {
    return Ms(E) && ul(E.length) && !!te[Ds(E)];
  }
  function lp(E) {
    if (!yp(E))
      return hn(E);
    var P = [];
    for (var Z in Object(E))
      ve.call(E, Z) && Z != "constructor" && P.push(Z);
    return P;
  }
  function ol(E, P, Z, ae, it, ke) {
    var vt = Z & s, Tt = E.length, jt = P.length;
    if (Tt != jt && !(vt && jt > Tt))
      return !1;
    var dt = ke.get(E);
    if (dt && ke.get(P))
      return dt == P;
    var cr = -1, wr = !0, zt = Z & i ? new Hi() : void 0;
    for (ke.set(E, P), ke.set(P, E); ++cr < Tt; ) {
      var pr = E[cr], gr = P[cr];
      if (ae)
        var mn = vt ? ae(gr, pr, cr, P, E, ke) : ae(pr, gr, cr, E, P, ke);
      if (mn !== void 0) {
        if (mn)
          continue;
        wr = !1;
        break;
      }
      if (zt) {
        if (!We(P, function(Gr, Mn) {
          if (!$e(zt, Mn) && (pr === Gr || it(pr, Gr, Z, ae, ke)))
            return zt.push(Mn);
        })) {
          wr = !1;
          break;
        }
      } else if (!(pr === gr || it(pr, gr, Z, ae, ke))) {
        wr = !1;
        break;
      }
    }
    return ke.delete(E), ke.delete(P), wr;
  }
  function up(E, P, Z, ae, it, ke, vt) {
    switch (Z) {
      case J:
        if (E.byteLength != P.byteLength || E.byteOffset != P.byteOffset)
          return !1;
        E = E.buffer, P = P.buffer;
      case $:
        return !(E.byteLength != P.byteLength || !ke(new ar(E), new ar(P)));
      case d:
      case f:
      case C:
        return cl(+E, +P);
      case p:
        return E.name == P.name && E.message == P.message;
      case S:
      case u:
        return E == P + "";
      case _:
        var Tt = Ce;
      case y:
        var jt = ae & s;
        if (Tt || (Tt = Te), E.size != P.size && !jt)
          return !1;
        var dt = vt.get(E);
        if (dt)
          return dt == P;
        ae |= i, vt.set(E, P);
        var cr = ol(Tt(E), Tt(P), ae, it, ke, vt);
        return vt.delete(E), cr;
      case g:
        if (mt)
          return mt.call(E) == mt.call(P);
    }
    return !1;
  }
  function dp(E, P, Z, ae, it, ke) {
    var vt = Z & s, Tt = al(E), jt = Tt.length, dt = al(P), cr = dt.length;
    if (jt != cr && !vt)
      return !1;
    for (var wr = jt; wr--; ) {
      var zt = Tt[wr];
      if (!(vt ? zt in P : ve.call(P, zt)))
        return !1;
    }
    var pr = ke.get(E);
    if (pr && ke.get(P))
      return pr == P;
    var gr = !0;
    ke.set(E, P), ke.set(P, E);
    for (var mn = vt; ++wr < jt; ) {
      zt = Tt[wr];
      var Gr = E[zt], Mn = P[zt];
      if (ae)
        var fl = vt ? ae(Mn, Gr, zt, P, E, ke) : ae(Gr, Mn, zt, E, P, ke);
      if (!(fl === void 0 ? Gr === Mn || it(Gr, Mn, Z, ae, ke) : fl)) {
        gr = !1;
        break;
      }
      mn || (mn = zt == "constructor");
    }
    if (gr && !mn) {
      var Gi = E.constructor, Qi = P.constructor;
      Gi != Qi && "constructor" in E && "constructor" in P && !(typeof Gi == "function" && Gi instanceof Gi && typeof Qi == "function" && Qi instanceof Qi) && (gr = !1);
    }
    return ke.delete(E), ke.delete(P), gr;
  }
  function al(E) {
    return ip(E, Ep, fp);
  }
  function Ki(E, P) {
    var Z = E.__data__;
    return gp(P) ? Z[typeof P == "string" ? "string" : "hash"] : Z.map;
  }
  function os(E, P) {
    var Z = ze(E, P);
    return ap(Z) ? Z : void 0;
  }
  function hp(E) {
    var P = ve.call(E, At), Z = E[At];
    try {
      E[At] = void 0;
      var ae = !0;
    } catch {
    }
    var it = Ze.call(E);
    return ae && (P ? E[At] = Z : delete E[At]), it;
  }
  var fp = zr ? function(E) {
    return E == null ? [] : (E = Object(E), je(zr(E), function(P) {
      return hr.call(E, P);
    }));
  } : Sp, gn = Ds;
  (at && gn(new at(new ArrayBuffer(1))) != J || nt && gn(new nt()) != _ || pt && gn(pt.resolve()) != I || lt && gn(new lt()) != y || gt && gn(new gt()) != A) && (gn = function(E) {
    var P = Ds(E), Z = P == b ? E.constructor : void 0, ae = Z ? Dn(Z) : "";
    if (ae)
      switch (ae) {
        case bt:
          return J;
        case xt:
          return _;
        case It:
          return I;
        case wt:
          return y;
        case Ot:
          return A;
      }
    return P;
  });
  function pp(E, P) {
    return P = P ?? o, !!P && (typeof E == "number" || ue.test(E)) && E > -1 && E % 1 == 0 && E < P;
  }
  function gp(E) {
    var P = typeof E;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? E !== "__proto__" : E === null;
  }
  function mp(E) {
    return !!Ue && Ue in E;
  }
  function yp(E) {
    var P = E && E.constructor, Z = typeof P == "function" && P.prototype || pe;
    return E === Z;
  }
  function vp(E) {
    return Ze.call(E);
  }
  function Dn(E) {
    if (E != null) {
      try {
        return De.call(E);
      } catch {
      }
      try {
        return E + "";
      } catch {
      }
    }
    return "";
  }
  function cl(E, P) {
    return E === P || E !== E && P !== P;
  }
  var _p = sl(/* @__PURE__ */ function() {
    return arguments;
  }()) ? sl : function(E) {
    return Ms(E) && ve.call(E, "callee") && !hr.call(E, "callee");
  }, Yi = Array.isArray;
  function bp(E) {
    return E != null && ul(E.length) && !ll(E);
  }
  var aa = fr || xp;
  function wp(E, P) {
    return il(E, P);
  }
  function ll(E) {
    if (!dl(E))
      return !1;
    var P = Ds(E);
    return P == m || P == v || P == c || P == w;
  }
  function ul(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= o;
  }
  function dl(E) {
    var P = typeof E;
    return E != null && (P == "object" || P == "function");
  }
  function Ms(E) {
    return E != null && typeof E == "object";
  }
  var hl = Le ? et(Le) : cp;
  function Ep(E) {
    return bp(E) ? sp(E) : lp(E);
  }
  function Sp() {
    return [];
  }
  function xp() {
    return !1;
  }
  t.exports = wp;
})(Eo, Eo.exports);
var G1 = Eo.exports;
const Q1 = /* @__PURE__ */ Zo(G1);
function J1(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var s = new XMLHttpRequest(), i = [], o = [], a = {}, l = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: l, headers: { keys: function() {
        return i;
      }, entries: function() {
        return o;
      }, get: function(d) {
        return a[d.toLowerCase()];
      }, has: function(d) {
        return d.toLowerCase() in a;
      } } };
    };
    for (var c in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(d, f, p) {
        i.push(f = f.toLowerCase()), o.push([f, p]), a[f] = a[f] ? a[f] + "," + p : p;
      }), r(l());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(c, e.headers[c]);
    s.send(e.body || null);
  });
}
const X1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: J1
}, Symbol.toStringTag, { value: "Module" })), Lu = /* @__PURE__ */ Fo(X1);
var e_ = fetch || (self.fetch = Lu.default || Lu);
const t_ = /* @__PURE__ */ Zo(e_);
function r_(t, e) {
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
  var a = t.length, l = t.charAt(0), c = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var _ = 0, C = 0, M = 0, b = v.length; M !== b && v[M] === 0; )
      M++, _++;
    for (var I = (b - M) * d + 1 >>> 0, w = new Uint8Array(I); M !== b; ) {
      for (var S = v[M], y = 0, u = I - 1; (S !== 0 || y < C) && u !== -1; u--, y++)
        S += 256 * w[u] >>> 0, w[u] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      C = y, M++;
    }
    for (var g = I - C; g !== I && w[g] === 0; )
      g++;
    for (var N = l.repeat(_); g < I; ++g)
      N += t.charAt(w[g]);
    return N;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var _ = 0;
    if (v[_] !== " ") {
      for (var C = 0, M = 0; v[_] === l; )
        C++, _++;
      for (var b = (v.length - _) * c + 1 >>> 0, I = new Uint8Array(b); v[_]; ) {
        var w = r[v.charCodeAt(_)];
        if (w === 255)
          return;
        for (var S = 0, y = b - 1; (w !== 0 || S < M) && y !== -1; y--, S++)
          w += a * I[y] >>> 0, I[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = S, _++;
      }
      if (v[_] !== " ") {
        for (var u = b - M; u !== b && I[u] === 0; )
          u++;
        for (var g = new Uint8Array(C + (b - u)), N = C; u !== b; )
          g[N++] = I[u++];
        return g;
      }
    }
  }
  function m(v) {
    var _ = p(v);
    if (_)
      return _;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: p, decode: m };
}
var n_ = r_, s_ = n_;
const Lh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, i_ = (t) => new TextEncoder().encode(t), o_ = (t) => new TextDecoder().decode(t);
class a_ {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class c_ {
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
    return jh(this, e);
  }
}
class l_ {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return jh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const jh = (t, e) => new l_({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class u_ {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new a_(e, r, n), this.decoder = new c_(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ta = ({ name: t, prefix: e, encode: r, decode: n }) => new u_(t, e, r, n), Di = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = s_(r, e);
  return ta({ prefix: t, name: e, encode: n, decode: (i) => Lh(s(i)) });
}, d_ = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, l = 0, c = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | f, a += r, a >= 8 && (a -= 8, o[c++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, h_ = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Mt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => ta({ prefix: e, name: t, encode(s) {
  return h_(s, n, r);
}, decode(s) {
  return d_(s, n, r, t);
} }), f_ = ta({ prefix: "\0", name: "identity", encode: (t) => o_(t), decode: (t) => i_(t) });
var p_ = Object.freeze({ __proto__: null, identity: f_ });
const g_ = Mt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var m_ = Object.freeze({ __proto__: null, base2: g_ });
const y_ = Mt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var v_ = Object.freeze({ __proto__: null, base8: y_ });
const __ = Di({ prefix: "9", name: "base10", alphabet: "0123456789" });
var b_ = Object.freeze({ __proto__: null, base10: __ });
const w_ = Mt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), E_ = Mt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var S_ = Object.freeze({ __proto__: null, base16: w_, base16upper: E_ });
const x_ = Mt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), I_ = Mt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), O_ = Mt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), C_ = Mt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), T_ = Mt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), k_ = Mt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), R_ = Mt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), P_ = Mt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), N_ = Mt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var A_ = Object.freeze({ __proto__: null, base32: x_, base32upper: I_, base32pad: O_, base32padupper: C_, base32hex: T_, base32hexupper: k_, base32hexpad: R_, base32hexpadupper: P_, base32z: N_ });
const L_ = Di({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), j_ = Di({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var D_ = Object.freeze({ __proto__: null, base36: L_, base36upper: j_ });
const M_ = Di({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), z_ = Di({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var U_ = Object.freeze({ __proto__: null, base58btc: M_, base58flickr: z_ });
const V_ = Mt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), $_ = Mt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), q_ = Mt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), W_ = Mt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Z_ = Object.freeze({ __proto__: null, base64: V_, base64pad: $_, base64url: q_, base64urlpad: W_ });
const Dh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), F_ = Dh.reduce((t, e, r) => (t[r] = e, t), []), H_ = Dh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function B_(t) {
  return t.reduce((e, r) => (e += F_[r], e), "");
}
function K_(t) {
  const e = [];
  for (const r of t) {
    const n = H_[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Y_ = ta({ prefix: "🚀", name: "base256emoji", encode: B_, decode: K_ });
var G_ = Object.freeze({ __proto__: null, base256emoji: Y_ }), Q_ = Mh, ju = 128, J_ = 127, X_ = ~J_, eb = Math.pow(2, 31);
function Mh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= eb; )
    e[r++] = t & 255 | ju, t /= 128;
  for (; t & X_; )
    e[r++] = t & 255 | ju, t >>>= 7;
  return e[r] = t | 0, Mh.bytes = r - n + 1, e;
}
var tb = Ba, rb = 128, Du = 127;
function Ba(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, o, a = t.length;
  do {
    if (i >= a)
      throw Ba.bytes = 0, new RangeError("Could not decode varint");
    o = t[i++], r += s < 28 ? (o & Du) << s : (o & Du) * Math.pow(2, s), s += 7;
  } while (o >= rb);
  return Ba.bytes = i - n, r;
}
var nb = Math.pow(2, 7), sb = Math.pow(2, 14), ib = Math.pow(2, 21), ob = Math.pow(2, 28), ab = Math.pow(2, 35), cb = Math.pow(2, 42), lb = Math.pow(2, 49), ub = Math.pow(2, 56), db = Math.pow(2, 63), hb = function(t) {
  return t < nb ? 1 : t < sb ? 2 : t < ib ? 3 : t < ob ? 4 : t < ab ? 5 : t < cb ? 6 : t < lb ? 7 : t < ub ? 8 : t < db ? 9 : 10;
}, fb = { encode: Q_, decode: tb, encodingLength: hb }, zh = fb;
const Mu = (t, e, r = 0) => (zh.encode(t, e, r), e), zu = (t) => zh.encodingLength(t), Ka = (t, e) => {
  const r = e.byteLength, n = zu(t), s = n + zu(r), i = new Uint8Array(s + r);
  return Mu(t, i, 0), Mu(r, i, n), i.set(e, s), new pb(t, r, e, i);
};
class pb {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const Uh = ({ name: t, code: e, encode: r }) => new gb(t, e, r);
class gb {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Ka(this.code, r) : r.then((n) => Ka(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Vh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), mb = Uh({ name: "sha2-256", code: 18, encode: Vh("SHA-256") }), yb = Uh({ name: "sha2-512", code: 19, encode: Vh("SHA-512") });
var vb = Object.freeze({ __proto__: null, sha256: mb, sha512: yb });
const $h = 0, _b = "identity", qh = Lh, bb = (t) => Ka($h, qh(t)), wb = { code: $h, name: _b, encode: qh, digest: bb };
var Eb = Object.freeze({ __proto__: null, identity: wb });
new TextEncoder(), new TextDecoder();
const Uu = { ...p_, ...m_, ...v_, ...b_, ...S_, ...A_, ...D_, ...U_, ...Z_, ...G_ };
({ ...vb, ...Eb });
function Wh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Sb(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Wh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Zh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Vu = Zh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ya = Zh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Sb(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), xb = { utf8: Vu, "utf-8": Vu, hex: Uu.base16, latin1: ya, ascii: ya, binary: ya, ...Uu };
function Ib(t, e = "utf8") {
  const r = xb[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Wh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Fh = "wc", Ob = 2, Yc = "core", On = `${Fh}@2:${Yc}:`, Cb = { name: Yc, logger: "error" }, Tb = { database: ":memory:" }, kb = "crypto", $u = "client_ed25519_seed", Rb = le.ONE_DAY, Pb = "keychain", Nb = "0.3", Ab = "messages", Lb = "0.3", jb = le.SIX_HOURS, Db = "publisher", Hh = "irn", Mb = "error", Bh = "wss://relay.walletconnect.com", qu = "wss://relay.walletconnect.org", zb = "relayer", Zt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Ub = "_subscription", Xr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Vb = le.ONE_SECOND, $b = "2.11.2", qb = 1e4, Wb = "0.3", Zb = "WALLETCONNECT_CLIENT_ID", Er = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Fb = "subscription", Hb = "0.3", Bb = le.FIVE_SECONDS * 1e3, Kb = "pairing", Yb = "0.3", Ws = { wc_pairingDelete: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 0 } } }, Ks = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, qr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Gb = "history", Qb = "0.3", Jb = "expirer", mr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Xb = "0.3", va = "verify-api", ys = "https://verify.walletconnect.com", Ya = "https://verify.walletconnect.org", ew = [ys, Ya], tw = "echo", rw = "https://echo.walletconnect.com";
class nw {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Pb, this.version = Nb, this.initialized = !1, this.storagePrefix = On, this.init = async () => {
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
        const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(i);
      }
      return s;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Fe.generateChildLogger(r, this.name);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Sh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? xh(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class sw {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = kb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = iu(s);
      return uh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = d0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), o = iu(i), a = Fa();
      return await _v(a, s, Rb, o);
    }, this.generateSharedKey = (s, i, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), l = h0(a, i);
      return this.setSymKey(l, o);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const o = i || f0(s);
      return await this.keychain.set(o, s), o;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, o) => {
      this.isInitialized();
      const a = Eh(o), l = Ri(i);
      if (mu(a)) {
        const p = a.senderPublicKey, m = a.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const c = this.getSymKey(s), { type: d, senderPublicKey: f } = a;
      return g0({ type: d, symKey: c, message: l, senderPublicKey: f });
    }, this.decode = async (s, i, o) => {
      this.isInitialized();
      const a = v0(i, o);
      if (mu(a)) {
        const l = a.receiverPublicKey, c = a.senderPublicKey;
        s = await this.generateSharedKey(l, c);
      }
      try {
        const l = this.getSymKey(s), c = m0({ symKey: l, encoded: i });
        return Bo(c);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (s) => {
      const i = _o(s);
      return Ai(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = _o(s);
      return i.senderPublicKey ? Xt(i.senderPublicKey, Jt) : void 0;
    }, this.core = e, this.logger = Fe.generateChildLogger(r, this.name), this.keychain = n || new nw(this.core, this.logger);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      e = this.keychain.get($u);
    } catch {
      e = Fa(), await this.keychain.set($u, e);
    }
    return Ib(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class iw extends Sm {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Ab, this.version = Lb, this.initialized = !1, this.storagePrefix = On, this.init = async () => {
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
      const i = bs(s);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[i] < "u" || (o[i] = s, this.messages.set(n, o), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), o = bs(s);
      return typeof i[o] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Fe.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Sh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? xh(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class ow extends xm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Lr.EventEmitter(), this.name = Db, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = le.toMiliseconds(le.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const a = (i == null ? void 0 : i.ttl) || jb, l = Ha(i), c = (i == null ? void 0 : i.prompt) || !1, d = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || Nh().toString(), p = { topic: n, message: s, opts: { ttl: a, relay: l, prompt: c, tag: d, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await ti(this.rpcPublish(n, s, a, l, c, d, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${d}`), this.removeRequestFromQueue(f), this.relayer.events.emit(Zt.publish, p);
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
    }, this.relayer = e, this.logger = Fe.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, o, a) {
    var l, c, d, f;
    const p = { method: uo(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: o }, id: a };
    return Gt((l = p.params) == null ? void 0 : l.prompt) && ((c = p.params) == null || delete c.prompt), Gt((d = p.params) == null ? void 0 : d.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(Rs.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Zt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Zt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class aw {
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
var cw = Object.defineProperty, lw = Object.defineProperties, uw = Object.getOwnPropertyDescriptors, Wu = Object.getOwnPropertySymbols, dw = Object.prototype.hasOwnProperty, hw = Object.prototype.propertyIsEnumerable, Zu = (t, e, r) => e in t ? cw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zs = (t, e) => {
  for (var r in e || (e = {}))
    dw.call(e, r) && Zu(t, r, e[r]);
  if (Wu)
    for (var r of Wu(e))
      hw.call(e, r) && Zu(t, r, e[r]);
  return t;
}, _a = (t, e) => lw(t, uw(e));
class fw extends Cm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new aw(), this.events = new Lr.EventEmitter(), this.name = Fb, this.version = Hb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = On, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = Ha(s), o = { topic: n, relay: i };
        this.pending.set(n, o);
        const a = await this.rpcSubscribe(n, i);
        return this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), a;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => {
      if (this.topics.includes(n))
        return !0;
      const s = `${this.pendingSubscriptionWatchLabel}_${n}`;
      return await new Promise((i, o) => {
        const a = new le.Watch();
        a.start(s);
        const l = setInterval(() => {
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(l), a.stop(s), i(!0)), a.elapsed(s) >= Bb && (clearInterval(l), a.stop(s), o(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Fe.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      const s = Ha(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: uo(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Zt.connection_stalled);
    }
    return bs(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: uo(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Zt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: uo(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, _a(Zs({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Zs({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Zs({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Er.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Er.deleted, _a(Zs({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Er.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Er.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
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
    ji(r) && this.onBatchSubscribe(r.map((n, s) => _a(Zs({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(Rs.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Zt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Zt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Er.created, async (e) => {
      const r = Er.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Er.deleted, async (e) => {
      const r = Er.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
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
var pw = Object.defineProperty, Fu = Object.getOwnPropertySymbols, gw = Object.prototype.hasOwnProperty, mw = Object.prototype.propertyIsEnumerable, Hu = (t, e, r) => e in t ? pw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yw = (t, e) => {
  for (var r in e || (e = {}))
    gw.call(e, r) && Hu(t, r, e[r]);
  if (Fu)
    for (var r of Fu(e))
      mw.call(e, r) && Hu(t, r, e[r]);
  return t;
};
class vw extends Im {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Lr.EventEmitter(), this.name = zb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const n = r.id;
      try {
        await this.toEstablishConnection();
        const s = this.provider.request(r);
        return this.requestsInFlight.set(n, { promise: s, request: r }), await s;
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      } finally {
        this.requestsInFlight.delete(n);
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Zt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Zt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Xr.payload, this.onPayloadHandler), this.provider.on(Xr.connect, this.onConnectHandler), this.provider.on(Xr.disconnect, this.onDisconnectHandler), this.provider.on(Xr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Fe.generateChildLogger(e.logger, this.name) : Fe.pino(Fe.getDefaultLoggerOptions({ level: e.logger || Mb })), this.messages = new iw(this.logger, e.core), this.subscriber = new fw(this, this.logger), this.publisher = new ow(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Bh, this.projectId = e.projectId, this.bundleId = x0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${qu}...`), await this.restartTransport(qu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, qb);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      a.topic === e && (this.subscriber.off(Er.created, o), i());
    };
    return await Promise.all([new Promise((a) => {
      i = a, this.subscriber.on(Er.created, o);
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
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await ti(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Er.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await ti(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Xr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Cu())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new F1(new Y1(R0({ sdkVersion: $b, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Kc(e)) {
      if (!e.method.endsWith(Ub))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, o = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(yw({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      ea(e) && this.events.emit(Zt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Zt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Hc(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Xr.payload, this.onPayloadHandler), this.provider.off(Xr.connect, this.onConnectHandler), this.provider.off(Xr.disconnect, this.onDisconnectHandler), this.provider.off(Xr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Zt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Cu();
    x1(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Zt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, le.toMiliseconds(Vb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
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
var _w = Object.defineProperty, Bu = Object.getOwnPropertySymbols, bw = Object.prototype.hasOwnProperty, ww = Object.prototype.propertyIsEnumerable, Ku = (t, e, r) => e in t ? _w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yu = (t, e) => {
  for (var r in e || (e = {}))
    bw.call(e, r) && Ku(t, r, e[r]);
  if (Bu)
    for (var r of Bu(e))
      ww.call(e, r) && Ku(t, r, e[r]);
  return t;
};
class ra extends Om {
  constructor(e, r, n, s = On, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Wb, this.cached = [], this.initialized = !1, this.storagePrefix = On, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Gt(o) ? this.map.set(this.getKey(o), o) : t1(o) ? this.map.set(o.id, o) : r1(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((l) => Q1(a[l], o[l]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const l = Yu(Yu({}, this.getData(o)), a);
      this.map.set(o, l), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), await this.persist());
    }, this.logger = Fe.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ew {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = Kb, this.version = Yb, this.events = new Pc(), this.initialized = !1, this.storagePrefix = On, this.ignoredPayloadTypes = [ss], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Fa(), s = await this.core.crypto.setSymKey(n), i = lr(le.FIVE_MINUTES), o = { protocol: Hh }, a = { topic: s, expiry: i, relay: o, active: !1 }, l = H0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: o, expiryTimestamp: i });
      return await this.pairings.set(s, a), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: o, expiryTimestamp: a } = Eu(n.uri);
      let l;
      if (this.pairings.keys.includes(s) && (l = this.pairings.get(s), l.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const c = a || lr(le.FIVE_MINUTES), d = { topic: s, relay: o, expiry: c, active: !1 };
      return await this.pairings.set(s, d), this.core.expirer.set(s, c), n.activatePairing && await this.activate({ topic: s }), this.events.emit(Ks.create, d), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: o })), d;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = lr(le.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: l } = hs();
        this.events.once(St("pairing_ping", i), ({ error: c }) => {
          c ? l(c) : a();
        }), await o();
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
      const o = ws(s, i), a = await this.core.crypto.encode(n, o), l = Ws[s].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, l), o.id;
    }, this.sendResult = async (n, s, i) => {
      const o = Hc(n, i), a = await this.core.crypto.encode(s, o), l = await this.core.history.get(s, n), c = Ws[l.request.method].res;
      await this.core.relayer.publish(s, a, c), await this.core.history.resolve(o);
    }, this.sendError = async (n, s, i) => {
      const o = Bc(n, i), a = await this.core.crypto.encode(s, o), l = await this.core.history.get(s, n), c = Ws[l.request.method] ? Ws[l.request.method].res : Ws.unregistered_method.res;
      await this.core.relayer.publish(s, a, c), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, _t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => vn(s.expiry));
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(Ks.ping, { id: i, topic: n });
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        rn(s) ? this.events.emit(St("pairing_ping", i), {}) : Sr(s) && this.events.emit(St("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ks.delete, { id: i, topic: n });
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: o } = s;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const a = _t("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(i, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(_t("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!sr(n)) {
        const { message: o } = X("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(o);
      }
      if (!e1(n.uri)) {
        const { message: o } = X("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(o);
      }
      const i = Eu(n.uri);
      if (!((s = i == null ? void 0 : i.relay) != null && s.protocol)) {
        const { message: o } = X("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(i != null && i.symKey)) {
        const { message: o } = X("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
      if (i != null && i.expiryTimestamp && le.toMiliseconds(i == null ? void 0 : i.expiryTimestamp) < Date.now()) {
        const { message: o } = X("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o);
      }
    }, this.isValidPing = async (n) => {
      if (!sr(n)) {
        const { message: i } = X("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!sr(n)) {
        const { message: i } = X("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!Nt(n, !1)) {
        const { message: s } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (vn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = X("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Fe.generateChildLogger(r, this.name), this.pairings = new ra(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Zt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        Kc(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : ea(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(mr.expired, async (e) => {
      const { topic: r } = Oh(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ks.expire, { topic: r }));
    });
  }
}
class Sw extends Em {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Lr.EventEmitter(), this.name = Gb, this.version = Qb, this.cached = [], this.initialized = !1, this.storagePrefix = On, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const o = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: lr(le.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(qr.created, o);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = Sr(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(qr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(qr.deleted, i);
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
    }, this.logger = Fe.generateChildLogger(r, this.name);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: ws(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(qr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(qr.created, (e) => {
      const r = qr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(qr.updated, (e) => {
      const r = qr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(qr.deleted, (e) => {
      const r = qr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Rs.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        le.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class xw extends Tm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Lr.EventEmitter(), this.name = Jb, this.version = Xb, this.cached = [], this.initialized = !1, this.storagePrefix = On, this.init = async () => {
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
      this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(mr.created, { target: i, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(mr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Fe.generateChildLogger(r, this.name);
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
      return P0(e);
    if (typeof e == "number")
      return N0(e);
    const { message: r } = X("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(mr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    le.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(mr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Rs.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(mr.created, (e) => {
      const r = mr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(mr.expired, (e) => {
      const r = mr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(mr.deleted, (e) => {
      const r = mr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Iw extends km {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = va, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || As() || !Ls())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ya;
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
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(o), i = await this.fetchAttestation(n.attestationId, Ya);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const i = this.startAbortTimer(le.ONE_SECOND * 2), o = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
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
        if (document.getElementById(va))
          return i();
        window.addEventListener("message", s);
        const o = document.createElement("iframe");
        o.id = va, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, n = i;
      }), new Promise((i, o) => setTimeout(() => {
        window.removeEventListener("message", s), o("verify iframe load timeout");
      }, le.toMiliseconds(le.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || ys;
      return ew.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${ys}`), s = ys), s;
    }, this.logger = Fe.generateChildLogger(r, this.name), this.verifyUrl = ys, this.abortController = new AbortController(), this.isDevEnv = qc() && process.env.IS_VITEST;
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), le.toMiliseconds(e));
  }
}
class Ow extends Rm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = tw, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: o, enableEncrypted: a = !1 } = n, l = `${rw}/${this.projectId}/clients`;
      await t_(l, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: i, always_raw: a }) });
    }, this.logger = Fe.generateChildLogger(r, this.context);
  }
}
var Cw = Object.defineProperty, Gu = Object.getOwnPropertySymbols, Tw = Object.prototype.hasOwnProperty, kw = Object.prototype.propertyIsEnumerable, Qu = (t, e, r) => e in t ? Cw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ju = (t, e) => {
  for (var r in e || (e = {}))
    Tw.call(e, r) && Qu(t, r, e[r]);
  if (Gu)
    for (var r of Gu(e))
      kw.call(e, r) && Qu(t, r, e[r]);
  return t;
};
class Gc extends wm {
  constructor(e) {
    super(e), this.protocol = Fh, this.version = Ob, this.name = Yc, this.events = new Lr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Bh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Fe.pino(Fe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Cb.logger }));
    this.logger = Fe.generateChildLogger(r, this.name), this.heartbeat = new Rs.HeartBeat(), this.crypto = new sw(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Sw(this, this.logger), this.expirer = new xw(this, this.logger), this.storage = e != null && e.storage ? e.storage : new zg(Ju(Ju({}, Tb), e == null ? void 0 : e.storageOptions)), this.relayer = new vw({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ew(this, this.logger), this.verify = new Iw(this.projectId || "", this.logger), this.echoClient = new Ow(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Gc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Zb, n), r;
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
const Rw = Gc, Kh = "wc", Yh = 2, Gh = "client", Qc = `${Kh}@${Yh}:${Gh}:`, ba = { name: Gh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Xu = "WALLETCONNECT_DEEPLINK_CHOICE", Pw = "proposal", Nw = "Proposal expired", Aw = "session", so = le.SEVEN_DAYS, Lw = "engine", en = { wc_sessionPropose: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, wa = { min: le.FIVE_MINUTES, max: le.SEVEN_DAYS }, tn = { idle: "IDLE", active: "ACTIVE" }, jw = "request", Dw = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Mw = Object.defineProperty, zw = Object.defineProperties, Uw = Object.getOwnPropertyDescriptors, ed = Object.getOwnPropertySymbols, Vw = Object.prototype.hasOwnProperty, $w = Object.prototype.propertyIsEnumerable, td = (t, e, r) => e in t ? Mw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kt = (t, e) => {
  for (var r in e || (e = {}))
    Vw.call(e, r) && td(t, r, e[r]);
  if (ed)
    for (var r of ed(e))
      $w.call(e, r) && td(t, r, e[r]);
  return t;
}, ds = (t, e) => zw(t, Uw(e));
class qw extends Nm {
  constructor(e) {
    super(e), this.name = Lw, this.events = new Pc(), this.initialized = !1, this.ignoredPayloadTypes = [ss], this.requestQueue = { state: tn.idle, queue: [] }, this.sessionRequestQueue = { state: tn.idle, queue: [] }, this.requestQueueDelay = le.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(en) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, le.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = ds(Kt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: o, sessionProperties: a, relays: l } = n;
      let c = s, d, f = !1;
      if (c && (f = this.client.core.pairing.pairings.get(c).active), !c || !f) {
        const { topic: w, uri: S } = await this.client.core.pairing.create();
        c = w, d = S;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = en.wc_sessionPropose.req.ttl || le.FIVE_MINUTES, v = lr(m), _ = Kt({ requiredNamespaces: i, optionalNamespaces: o, relays: l ?? [{ protocol: Hh }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: v }, a && { sessionProperties: a }), { reject: C, resolve: M, done: b } = hs(m, Nw);
      if (this.events.once(St("session_connect"), async ({ error: w, session: S }) => {
        if (w)
          C(w);
        else if (S) {
          S.self.publicKey = p;
          const y = ds(Kt({}, S), { requiredNamespaces: _.requiredNamespaces, optionalNamespaces: _.optionalNamespaces });
          await this.client.session.set(S.topic, y), await this.setExpiry(S.topic, S.expiry), c && await this.client.core.pairing.updateMetadata({ topic: c, metadata: S.peer.metadata }), M(y);
        }
      }), !c) {
        const { message: w } = X("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
        throw new Error(w);
      }
      const I = await this.sendRequest({ topic: c, method: "wc_sessionPropose", params: _, throwOnFailedPublish: !0 });
      return await this.setProposal(I, Kt({ id: I }, _)), { uri: d, approval: b };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: c, requiredNamespaces: d, optionalNamespaces: f } = a;
      l = l || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = c.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: c.metadata }), await this.sendResult({ id: n, topic: l, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const _ = Kt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: l, controller: { publicKey: p, metadata: this.client.metadata }, expiry: lr(so) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(v);
      const C = ds(Kt({}, _), { topic: v, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: l, acknowledged: !1, self: _.controller, peer: { publicKey: c.publicKey, metadata: c.metadata }, controller: p });
      await this.client.session.set(v, C);
      try {
        await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: _, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(v, _t("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v), M;
      }
      return await this.setExpiry(v, lr(so)), { topic: v, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: o, resolve: a, reject: l } = hs();
      return this.events.once(St("session_update", i), ({ error: c }) => {
        c ? l(c) : a();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: o };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: o, reject: a } = hs();
      return this.events.once(St("session_extend", s), ({ error: l }) => {
        l ? a(l) : o();
      }), await this.setExpiry(n, lr(so)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: o = en.wc_sessionRequest.req.ttl } = r, a = Fc(), { done: l, resolve: c, reject: d } = hs(o, "Request expired. Please try again.");
      return this.events.once(St("session_request", a), ({ error: f, result: p }) => {
        f ? d(f) : c(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: a, topic: i, method: "wc_sessionRequest", params: { request: ds(Kt({}, s), { expiryTimestamp: lr(o) }), chainId: n }, expiry: o, throwOnFailedPublish: !0 }).catch((p) => d(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: a }), f();
      }), new Promise(async (f) => {
        const p = await L0(this.client.core.storage, Xu);
        A0({ id: a, topic: i, wcDeepLink: p }), f();
      }), l()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      rn(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Sr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: o, reject: a } = hs();
        this.events.once(St("session_ping", s), ({ error: l }) => {
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
      if (this.client.session.keys.includes(n))
        await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: _t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n))
        await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: s } = X("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(s);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => J0(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
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
    }, this.deleteSession = async (r) => {
      const { topic: n, expirerHasDeleted: s = !1, emitEvent: i = !0, id: o = 0 } = r, { self: a } = this.client.session.get(n);
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(Xu).catch((l) => this.client.logger.warn(l)), this.getPendingSessionRequests().forEach((l) => {
        l.topic === n && this.deletePendingSessionRequest(l.id, _t("USER_DISCONNECTED"));
      }), i && this.client.events.emit("session_delete", { id: o, topic: n });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, _t("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = tn.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, lr(en.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: n, topic: s, params: i, verifyContext: o } = r, a = i.request.expiryTimestamp || lr(en.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: i, verifyContext: o }), a && this.client.core.expirer.set(n, a);
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: o, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: c } = r, d = ws(s, i, l);
      if (Ls() && Dw.includes(s)) {
        const m = bs(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, d), p = en[s].req;
      return o && (p.ttl = o), a && (p.id = a), this.client.core.history.set(n, d), c ? (p.internal = ds(Kt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), d.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: o } = r, a = Hc(n, i), l = await this.client.core.crypto.encode(s, a), c = await this.client.core.history.get(s, n), d = en[c.request.method].res;
      o ? (d.internal = ds(Kt({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, l, d)) : this.client.core.relayer.publish(s, l, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, s) => {
      const i = Bc(r, s), o = await this.client.core.crypto.encode(n, i), a = await this.client.core.history.get(n, r), l = en[a.request.method].res;
      this.client.core.relayer.publish(n, o, l), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        let i = !1;
        vn(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        vn(s.expiryTimestamp) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === tn.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = tn.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = tn.idle;
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
      const { topic: n } = r, { message: s } = X("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        this.isValidConnect(Kt({}, n.params));
        const o = s.expiryTimestamp || lr(en.wc_sessionPropose.req.ttl), a = Kt({ id: i, pairingTopic: r, expiryTimestamp: o }, s);
        await this.setProposal(i, a);
        const l = bs(JSON.stringify(n)), c = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: a, verifyContext: c });
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (rn(n)) {
        const { result: i } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const o = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const a = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const c = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c });
        const d = await this.client.core.relayer.subscribe(c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Sr(n) && (await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), this.events.emit(St("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: o, controller: a, expiry: l, namespaces: c, sessionProperties: d, pairingTopic: f } = n.params, p = Kt({ topic: r, relay: o, expiry: l, namespaces: c, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, d && { sessionProperties: d });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(St("session_connect"), { session: p }), this.cleanupDuplicatePairings(p);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      rn(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(St("session_approve", s), {})) : Sr(n) && (await this.client.session.delete(r, _t("USER_DISCONNECTED")), this.events.emit(St("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const o = `${r}_session_update`, a = no.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Kt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), no.set(o, i);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_update", s), {}) : Sr(n) && this.events.emit(St("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, lr(so)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_extend", s), {}) : Sr(n) && this.events.emit(St("session_extend", s), { error: n.error });
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
        rn(n) ? this.events.emit(St("session_ping", s), {}) : Sr(n) && this.events.emit(St("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Zt.publish, async () => {
            i(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: _t("USER_DISCONNECTED") })]);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Kt({ topic: r }, i));
        const o = bs(JSON.stringify(ws("wc_sessionRequest", i, s))), a = this.client.session.get(r), l = await this.getVerifyContext(o, a.peer.metadata), c = { id: s, topic: r, params: i, verifyContext: l };
        await this.setPendingSessionRequest(c), this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue();
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_request", s), { result: n.result }) : Sr(n) && this.events.emit(St("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const o = `${r}_session_event_${i.event.name}`, a = no.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Kt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), no.set(o, s);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = tn.idle, this.processSessionRequestQueue();
      }, le.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: n }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i) => i.topic === r && i.request.method === "wc_sessionRequest").forEach((i) => {
        this.events.emit(St("session_request", i.request.id), { error: n });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === tn.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = tn.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, ws("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!sr(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: o, relays: a } = r;
      if (Gt(n) || await this.isValidPairingTopic(n), !u1(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Gt(s) && bo(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Gt(i) && bo(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Gt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = l1(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!sr(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = ga(s, "approve()");
      if (l)
        throw new Error(l.message);
      const c = Iu(a.requiredNamespaces, s, "approve()");
      if (c)
        throw new Error(c.message);
      if (!Nt(i, !0)) {
        const { message: d } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(d);
      }
      Gt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!sr(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !h1(s)) {
        const { message: i } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!sr(r)) {
        const { message: c } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(c);
      }
      const { relay: n, controller: s, namespaces: i, expiry: o } = r;
      if (!Th(n)) {
        const { message: c } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c);
      }
      const a = n1(s, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = ga(i, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (vn(o)) {
        const { message: c } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c);
      }
    }, this.isValidUpdate = async (r) => {
      if (!sr(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), o = ga(s, "update()");
      if (o)
        throw new Error(o.message);
      const a = Iu(i.requiredNamespaces, s, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!sr(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!sr(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: s, chainId: i, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!xu(a, i)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(l);
      }
      if (!f1(s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(l);
      }
      if (!m1(a, i, s.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(l);
      }
      if (o && !b1(o, wa)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${wa.min} and ${wa.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!sr(r)) {
        const { message: o } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(o);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (o) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), o;
      }
      if (!p1(i)) {
        const { message: o } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidPing = async (r) => {
      if (!sr(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!sr(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!xu(o, i)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(a);
      }
      if (!g1(s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
      if (!y1(o, i, s.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!sr(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || ys, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((s) => {
        if (!Nt(s, !1)) {
          const { message: i } = X("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Zt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        Kc(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : ea(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(mr.expired, async (e) => {
      const { topic: r, id: n } = Oh(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ks.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Nt(e, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (vn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = X("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Nt(e, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = X("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (vn(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = X("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Nt(e, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!d1(e)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (vn(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = X("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class Ww extends ra {
  constructor(e, r) {
    super(e, r, Pw, Qc), this.core = e, this.logger = r;
  }
}
class Zw extends ra {
  constructor(e, r) {
    super(e, r, Aw, Qc), this.core = e, this.logger = r;
  }
}
class Fw extends ra {
  constructor(e, r) {
    super(e, r, jw, Qc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Jc extends Pm {
  constructor(e) {
    super(e), this.protocol = Kh, this.version = Yh, this.name = ba.name, this.events = new Lr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || ba.name, this.metadata = (e == null ? void 0 : e.metadata) || O0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Fe.pino(Fe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || ba.logger }));
    this.core = (e == null ? void 0 : e.core) || new Rw(e), this.logger = Fe.generateChildLogger(r, this.name), this.session = new Zw(this.core, this.logger), this.proposal = new Ww(this.core, this.logger), this.pendingRequest = new Fw(this.core, this.logger), this.engine = new qw(this);
  }
  static async init(e) {
    const r = new Jc(e);
    return await r.initialize(), r;
  }
  get context() {
    return Fe.getLoggerContext(this.logger);
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
var Hw = Object.defineProperty, Bw = Object.defineProperties, Kw = Object.getOwnPropertyDescriptors, rd = Object.getOwnPropertySymbols, Yw = Object.prototype.hasOwnProperty, Gw = Object.prototype.propertyIsEnumerable, nd = (t, e, r) => e in t ? Hw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qw = (t, e) => {
  for (var r in e || (e = {}))
    Yw.call(e, r) && nd(t, r, e[r]);
  if (rd)
    for (var r of rd(e))
      Gw.call(e, r) && nd(t, r, e[r]);
  return t;
}, Jw = (t, e) => Bw(t, Kw(e)), Xc = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, ct = (t, e, r) => (Xc(t, e, "read from private field"), r ? r.call(t) : e.get(t)), qn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, So = (t, e, r, n) => (Xc(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), $t = (t, e, r) => (Xc(t, e, "access private method"), r), Wn, fs, Ys, Pt, Ga, Qh, qt, Yt, Qa, sd;
let Xw = class {
  constructor(t) {
    qn(this, Ga), qn(this, qt), qn(this, Qa), qn(this, Wn, void 0), qn(this, fs, void 0), qn(this, Ys, void 0), qn(this, Pt, void 0), So(this, Wn, t), So(this, fs, $t(this, Ga, Qh).call(this)), $t(this, qt, Yt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await $t(this, qt, Yt).call(this);
      const i = ct(this, fs).subscribeModal((l) => {
        l.open || (i(), s(new Error("Modal closed")));
      }), { uri: o, approval: a } = await ct(this, Pt).connect(t);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: c }) => {
          c && c.forEach((d) => l.add(d));
        }), r && Object.values(r).forEach(({ chains: c }) => {
          c && c.forEach((d) => l.add(d));
        }), await ct(this, fs).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await a();
        n(l);
      } catch (l) {
        s(l);
      } finally {
        i(), ct(this, fs).closeModal();
      }
    });
  }
  async disconnect(t) {
    await $t(this, qt, Yt).call(this), await ct(this, Pt).disconnect(t);
  }
  async request(t) {
    return await $t(this, qt, Yt).call(this), await ct(this, Pt).request(t);
  }
  async getSessions() {
    return await $t(this, qt, Yt).call(this), ct(this, Pt).session.getAll();
  }
  async getSession() {
    return await $t(this, qt, Yt).call(this), ct(this, Pt).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).on("session_event", t);
  }
  async offSessionEvent(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).off("session_update", t);
  }
  async onSessionDelete(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await $t(this, qt, Yt).call(this), ct(this, Pt).off("session_expire", t);
  }
};
Wn = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakSet(), Qh = function() {
  const { modalOptions: t, projectId: e } = ct(this, Wn);
  return new eg(Jw(Qw({}, t), { projectId: e }));
}, qt = /* @__PURE__ */ new WeakSet(), Yt = async function() {
  return ct(this, Pt) ? !0 : (!ct(this, Ys) && typeof window < "u" && So(this, Ys, $t(this, Qa, sd).call(this)), ct(this, Ys));
}, Qa = /* @__PURE__ */ new WeakSet(), sd = async function() {
  So(this, Pt, await Jc.init({ metadata: ct(this, Wn).metadata, projectId: ct(this, Wn).projectId, relayUrl: ct(this, Wn).relayUrl }));
  const t = await ct(this, Pt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const e5 = [
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
], el = ["aleo:3"], t5 = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], Jh = "f0aaeffe71b636da453fce042d79d723";
function r5() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const n5 = {
  chains: el,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [Jh]
}, s5 = {
  chains: el,
  enableExplorer: !1,
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
}, id = r5() ? n5 : s5, i5 = "@puzzlehq/sdk-core", o5 = "Puzzle SDK", a5 = "0.2.32-beta.1", c5 = "Your portal to privacy", l5 = "./dist/puzzle.cjs.js", u5 = "./dist/puzzle.es.js", d5 = "./dist/puzzle.umd.js", h5 = "./dist/types/src/index.d.ts", f5 = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, p5 = "module", g5 = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, m5 = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, y5 = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
}, v5 = {
  buffer: "^6.0.3"
}, _5 = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], b5 = "Puzzle", w5 = "ISC", E5 = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, S5 = "https://github.com/puzzlehq/puzzle-sdk#readme", od = {
  name: i5,
  displayName: o5,
  version: a5,
  description: c5,
  main: l5,
  module: u5,
  browser: d5,
  types: h5,
  private: !1,
  exports: f5,
  type: p5,
  scripts: g5,
  repository: m5,
  dependencies: y5,
  peerDependencies: v5,
  keywords: _5,
  author: b5,
  license: w5,
  bugs: E5,
  homepage: S5
}, Qs = new Pc();
let En;
async function x5(t) {
  let e = !1;
  const r = od.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${od.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", id), En = new Xw({
    projectId: t.projectId ?? Jh,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: window ? window.location.hostname : t.dAppUrl ?? "NO URL",
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...id }
  }), e) {
    localStorage.removeItem("puzzle-hasDesktopConnection");
    try {
      I5(En, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  En.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), En.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function I5(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: _t("USER_DISCONNECTED")
  }));
}
async function yr() {
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
const O5 = async (t) => {
  var e;
  if (!((e = window == null ? void 0 : window.aleo) != null && e.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasDesktopConnection", "true"), !0) : (localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1);
  } catch (r) {
    return console.warn(r), localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  }
}, Mi = () => {
  var t;
  return (t = window == null ? void 0 : window.aleo) != null && t.puzzleWalletClient ? localStorage.getItem(
    "puzzle-hasDesktopConnection"
  ) === "true" : !1;
};
var Qe;
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
})(Qe || (Qe = {}));
var Ja;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ja || (Ja = {}));
const ne = Qe.arrayToEnum([
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
]), _n = (t) => {
  switch (typeof t) {
    case "undefined":
      return ne.undefined;
    case "string":
      return ne.string;
    case "number":
      return isNaN(t) ? ne.nan : ne.number;
    case "boolean":
      return ne.boolean;
    case "function":
      return ne.function;
    case "bigint":
      return ne.bigint;
    case "symbol":
      return ne.symbol;
    case "object":
      return Array.isArray(t) ? ne.array : t === null ? ne.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ne.promise : typeof Map < "u" && t instanceof Map ? ne.map : typeof Set < "u" && t instanceof Set ? ne.set : typeof Date < "u" && t instanceof Date ? ne.date : ne.object;
    default:
      return ne.unknown;
  }
}, Y = Qe.arrayToEnum([
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
]), C5 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Cr extends Error {
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
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(r(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Qe.jsonStringifyReplacer, 2);
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
Cr.create = (t) => new Cr(t);
const ri = (t, e) => {
  let r;
  switch (t.code) {
    case Y.invalid_type:
      t.received === ne.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case Y.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Qe.jsonStringifyReplacer)}`;
      break;
    case Y.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Qe.joinValues(t.keys, ", ")}`;
      break;
    case Y.invalid_union:
      r = "Invalid input";
      break;
    case Y.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Qe.joinValues(t.options)}`;
      break;
    case Y.invalid_enum_value:
      r = `Invalid enum value. Expected ${Qe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case Y.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case Y.invalid_return_type:
      r = "Invalid function return type";
      break;
    case Y.invalid_date:
      r = "Invalid date";
      break;
    case Y.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Qe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case Y.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case Y.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case Y.custom:
      r = "Invalid input";
      break;
    case Y.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case Y.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case Y.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Qe.assertNever(t);
  }
  return { message: r };
};
let Xh = ri;
function T5(t) {
  Xh = t;
}
function xo() {
  return Xh;
}
const Io = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, k5 = [];
function ie(t, e) {
  const r = Io({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      xo(),
      ri
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
        return we;
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
        return we;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const we = Object.freeze({
  status: "aborted"
}), ef = (t) => ({ status: "dirty", value: t }), er = (t) => ({ status: "valid", value: t }), Xa = (t) => t.status === "aborted", ec = (t) => t.status === "dirty", Oo = (t) => t.status === "valid", Co = (t) => typeof Promise < "u" && t instanceof Promise;
var he;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(he || (he = {}));
class Fr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ad = (t, e) => {
  if (Oo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Cr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function xe(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
}
class Ne {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return _n(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: _n(e.data),
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
        parsedType: _n(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Co(r))
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
      parsedType: _n(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return ad(s, i);
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
      parsedType: _n(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Co(s) ? s : Promise.resolve(s));
    return ad(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: Y.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Nr({
      schema: this,
      typeName: me.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return on.create(this, this._def);
  }
  nullable() {
    return Gn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Tr.create(this, this._def);
  }
  promise() {
    return Os.create(this, this._def);
  }
  or(e) {
    return oi.create([this, e], this._def);
  }
  and(e) {
    return ai.create(this, e, this._def);
  }
  transform(e) {
    return new Nr({
      ...xe(this._def),
      schema: this,
      typeName: me.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new hi({
      ...xe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: me.ZodDefault
    });
  }
  brand() {
    return new rf({
      typeName: me.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Po({
      ...xe(this._def),
      innerType: this,
      catchValue: r,
      typeName: me.ZodCatch
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
    return zi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const R5 = /^c[^\s-]{8,}$/i, P5 = /^[a-z][a-z0-9]*$/, N5 = /[0-9A-HJKMNP-TV-Z]{26}/, A5 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, L5 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, j5 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), D5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, M5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, z5 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function U5(t, e) {
  return !!((e === "v4" || !e) && D5.test(t) || (e === "v6" || !e) && M5.test(t));
}
class Ir extends Ne {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: Y.invalid_string,
      ...he.errToObj(n)
    }), this.nonempty = (e) => this.min(1, he.errToObj(e)), this.trim = () => new Ir({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Ir({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Ir({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ne.string) {
      const s = this._getOrReturnCtx(e);
      return ie(
        s,
        {
          code: Y.invalid_type,
          expected: ne.string,
          received: s.parsedType
        }
        //
      ), we;
    }
    const r = new Ft();
    let n;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value, o = e.data.length < s.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? ie(n, {
          code: Y.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && ie(n, {
          code: Y.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        L5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "email",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        j5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "emoji",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        A5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "uuid",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        R5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "cuid",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        P5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "cuid2",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        N5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "ulid",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), ie(n, {
            validation: "url",
            code: Y.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "regex",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? z5(s).test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? U5(e.data, s.version) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "ip",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty()) : Qe.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Ir({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...he.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...he.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...he.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...he.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...he.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...he.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...he.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...he.errToObj(e) });
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
      ...he.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...he.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...he.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...he.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...he.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...he.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...he.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...he.errToObj(r)
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
Ir.create = (t) => {
  var e;
  return new Ir({
    checks: [],
    typeName: me.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
function V5(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Cn extends Ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ne.number) {
      const s = this._getOrReturnCtx(e);
      return ie(s, {
        code: Y.invalid_type,
        expected: ne.number,
        received: s.parsedType
      }), we;
    }
    let r;
    const n = new Ft();
    for (const s of this._def.checks)
      s.kind === "int" ? Qe.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? V5(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.not_finite,
        message: s.message
      }), n.dirty()) : Qe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, he.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, he.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, he.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, he.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: he.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Cn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: he.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: he.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: he.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: he.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: he.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: he.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: he.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: he.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: he.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Qe.isInteger(e.value));
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
Cn.create = (t) => new Cn({
  checks: [],
  typeName: me.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Tn extends Ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ne.bigint) {
      const s = this._getOrReturnCtx(e);
      return ie(s, {
        code: Y.invalid_type,
        expected: ne.bigint,
        received: s.parsedType
      }), we;
    }
    let r;
    const n = new Ft();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), ie(r, {
        code: Y.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : Qe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, he.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, he.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, he.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, he.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Tn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: he.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Tn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: he.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: he.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: he.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: he.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: he.toString(r)
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
Tn.create = (t) => {
  var e;
  return new Tn({
    checks: [],
    typeName: me.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
class ni extends Ne {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ne.boolean) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.boolean,
        received: r.parsedType
      }), we;
    }
    return er(e.data);
  }
}
ni.create = (t) => new ni({
  typeName: me.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Kn extends Ne {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ne.date) {
      const s = this._getOrReturnCtx(e);
      return ie(s, {
        code: Y.invalid_type,
        expected: ne.date,
        received: s.parsedType
      }), we;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return ie(s, {
        code: Y.invalid_date
      }), we;
    }
    const r = new Ft();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: Y.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: Y.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : Qe.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Kn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: he.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: he.toString(r)
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
Kn.create = (t) => new Kn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: me.ZodDate,
  ...xe(t)
});
class To extends Ne {
  _parse(e) {
    if (this._getType(e) !== ne.symbol) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.symbol,
        received: r.parsedType
      }), we;
    }
    return er(e.data);
  }
}
To.create = (t) => new To({
  typeName: me.ZodSymbol,
  ...xe(t)
});
class si extends Ne {
  _parse(e) {
    if (this._getType(e) !== ne.undefined) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.undefined,
        received: r.parsedType
      }), we;
    }
    return er(e.data);
  }
}
si.create = (t) => new si({
  typeName: me.ZodUndefined,
  ...xe(t)
});
class ii extends Ne {
  _parse(e) {
    if (this._getType(e) !== ne.null) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.null,
        received: r.parsedType
      }), we;
    }
    return er(e.data);
  }
}
ii.create = (t) => new ii({
  typeName: me.ZodNull,
  ...xe(t)
});
class Is extends Ne {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return er(e.data);
  }
}
Is.create = (t) => new Is({
  typeName: me.ZodAny,
  ...xe(t)
});
class Hn extends Ne {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return er(e.data);
  }
}
Hn.create = (t) => new Hn({
  typeName: me.ZodUnknown,
  ...xe(t)
});
class cn extends Ne {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return ie(r, {
      code: Y.invalid_type,
      expected: ne.never,
      received: r.parsedType
    }), we;
  }
}
cn.create = (t) => new cn({
  typeName: me.ZodNever,
  ...xe(t)
});
class ko extends Ne {
  _parse(e) {
    if (this._getType(e) !== ne.undefined) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.void,
        received: r.parsedType
      }), we;
    }
    return er(e.data);
  }
}
ko.create = (t) => new ko({
  typeName: me.ZodVoid,
  ...xe(t)
});
class Tr extends Ne {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== ne.array)
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.array,
        received: r.parsedType
      }), we;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (ie(r, {
        code: o ? Y.too_big : Y.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (ie(r, {
      code: Y.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (ie(r, {
      code: Y.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Fr(r, o, r.path, a)))).then((o) => Ft.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Fr(r, o, r.path, a)));
    return Ft.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Tr({
      ...this._def,
      minLength: { value: e, message: he.toString(r) }
    });
  }
  max(e, r) {
    return new Tr({
      ...this._def,
      maxLength: { value: e, message: he.toString(r) }
    });
  }
  length(e, r) {
    return new Tr({
      ...this._def,
      exactLength: { value: e, message: he.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Tr.create = (t, e) => new Tr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: me.ZodArray,
  ...xe(e)
});
function ps(t) {
  if (t instanceof ht) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = on.create(ps(n));
    }
    return new ht({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Tr ? new Tr({
      ...t._def,
      type: ps(t.element)
    }) : t instanceof on ? on.create(ps(t.unwrap())) : t instanceof Gn ? Gn.create(ps(t.unwrap())) : t instanceof Hr ? Hr.create(t.items.map((e) => ps(e))) : t;
}
class ht extends Ne {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Qe.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ne.object) {
      const l = this._getOrReturnCtx(e);
      return ie(l, {
        code: Y.invalid_type,
        expected: ne.object,
        received: l.parsedType
      }), we;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof cn && this._def.unknownKeys === "strip"))
      for (const l in n.data)
        i.includes(l) || o.push(l);
    const a = [];
    for (const l of i) {
      const c = s[l], d = n.data[l];
      a.push({
        key: { status: "valid", value: l },
        value: c._parse(new Fr(n, d, n.path, l)),
        alwaysSet: l in n.data
      });
    }
    if (this._def.catchall instanceof cn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const c of o)
          a.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: n.data[c] }
          });
      else if (l === "strict")
        o.length > 0 && (ie(n, {
          code: Y.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const c of o) {
        const d = n.data[c];
        a.push({
          key: { status: "valid", value: c },
          value: l._parse(
            new Fr(n, d, n.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const c of a) {
        const d = await c.key;
        l.push({
          key: d,
          value: await c.value,
          alwaysSet: c.alwaysSet
        });
      }
      return l;
    }).then((l) => Ft.mergeObjectSync(r, l)) : Ft.mergeObjectSync(r, a);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return he.errToObj, new ht({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = he.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new ht({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ht({
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
    return new ht({
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
    return new ht({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: me.ZodObject
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
    return new ht({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Qe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new ht({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new ht({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ps(this);
  }
  partial(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new ht({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof on; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new ht({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return tf(Qe.objectKeys(this.shape));
  }
}
ht.create = (t, e) => new ht({
  shape: () => t,
  unknownKeys: "strip",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...xe(e)
});
ht.strictCreate = (t, e) => new ht({
  shape: () => t,
  unknownKeys: "strict",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...xe(e)
});
ht.lazycreate = (t, e) => new ht({
  shape: t,
  unknownKeys: "strip",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...xe(e)
});
class oi extends Ne {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Cr(a.ctx.common.issues));
      return ie(r, {
        code: Y.invalid_union,
        unionErrors: o
      }), we;
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
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new Cr(l));
      return ie(r, {
        code: Y.invalid_union,
        unionErrors: a
      }), we;
    }
  }
  get options() {
    return this._def.options;
  }
}
oi.create = (t, e) => new oi({
  options: t,
  typeName: me.ZodUnion,
  ...xe(e)
});
const ho = (t) => t instanceof li ? ho(t.schema) : t instanceof Nr ? ho(t.innerType()) : t instanceof ui ? [t.value] : t instanceof kn ? t.options : t instanceof di ? Object.keys(t.enum) : t instanceof hi ? ho(t._def.innerType) : t instanceof si ? [void 0] : t instanceof ii ? [null] : null;
class na extends Ne {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.object)
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.object,
        received: r.parsedType
      }), we;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (ie(r, {
      code: Y.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), we);
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
      const o = ho(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new na({
      typeName: me.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...xe(n)
    });
  }
}
function tc(t, e) {
  const r = _n(t), n = _n(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ne.object && n === ne.object) {
    const s = Qe.objectKeys(e), i = Qe.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const l = tc(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === ne.array && n === ne.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], l = tc(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === ne.date && n === ne.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class ai extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, o) => {
      if (Xa(i) || Xa(o))
        return we;
      const a = tc(i.value, o.value);
      return a.valid ? ((ec(i) || ec(o)) && r.dirty(), { status: r.value, value: a.data }) : (ie(n, {
        code: Y.invalid_intersection_types
      }), we);
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
ai.create = (t, e, r) => new ai({
  left: t,
  right: e,
  typeName: me.ZodIntersection,
  ...xe(r)
});
class Hr extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.array)
      return ie(n, {
        code: Y.invalid_type,
        expected: ne.array,
        received: n.parsedType
      }), we;
    if (n.data.length < this._def.items.length)
      return ie(n, {
        code: Y.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), we;
    !this._def.rest && n.data.length > this._def.items.length && (ie(n, {
      code: Y.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((i, o) => {
      const a = this._def.items[o] || this._def.rest;
      return a ? a._parse(new Fr(n, i, n.path, o)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => Ft.mergeArray(r, i)) : Ft.mergeArray(r, s);
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
    typeName: me.ZodTuple,
    rest: null,
    ...xe(e)
  });
};
class ci extends Ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.object)
      return ie(n, {
        code: Y.invalid_type,
        expected: ne.object,
        received: n.parsedType
      }), we;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Fr(n, a, n.path, a)),
        value: o._parse(new Fr(n, n.data[a], n.path, a))
      });
    return n.common.async ? Ft.mergeObjectAsync(r, s) : Ft.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ne ? new ci({
      keyType: e,
      valueType: r,
      typeName: me.ZodRecord,
      ...xe(n)
    }) : new ci({
      keyType: Ir.create(),
      valueType: e,
      typeName: me.ZodRecord,
      ...xe(r)
    });
  }
}
class Ro extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.map)
      return ie(n, {
        code: Y.invalid_type,
        expected: ne.map,
        received: n.parsedType
      }), we;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, l], c) => ({
      key: s._parse(new Fr(n, a, n.path, [c, "key"])),
      value: i._parse(new Fr(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return we;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return we;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Ro.create = (t, e, r) => new Ro({
  valueType: e,
  keyType: t,
  typeName: me.ZodMap,
  ...xe(r)
});
class Yn extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.set)
      return ie(n, {
        code: Y.invalid_type,
        expected: ne.set,
        received: n.parsedType
      }), we;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (ie(n, {
      code: Y.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (ie(n, {
      code: Y.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return we;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const a = [...n.data.values()].map((l, c) => i._parse(new Fr(n, l, n.path, c)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, r) {
    return new Yn({
      ...this._def,
      minSize: { value: e, message: he.toString(r) }
    });
  }
  max(e, r) {
    return new Yn({
      ...this._def,
      maxSize: { value: e, message: he.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Yn.create = (t, e) => new Yn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: me.ZodSet,
  ...xe(e)
});
class Es extends Ne {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.function)
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.function,
        received: r.parsedType
      }), we;
    function n(a, l) {
      return Io({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xo(),
          ri
        ].filter((c) => !!c),
        issueData: {
          code: Y.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return Io({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xo(),
          ri
        ].filter((c) => !!c),
        issueData: {
          code: Y.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof Os ? er(async (...a) => {
      const l = new Cr([]), c = await this._def.args.parseAsync(a, i).catch((f) => {
        throw l.addIssue(n(a, f)), l;
      }), d = await o(...c);
      return await this._def.returns._def.type.parseAsync(d, i).catch((f) => {
        throw l.addIssue(s(d, f)), l;
      });
    }) : er((...a) => {
      const l = this._def.args.safeParse(a, i);
      if (!l.success)
        throw new Cr([n(a, l.error)]);
      const c = o(...l.data), d = this._def.returns.safeParse(c, i);
      if (!d.success)
        throw new Cr([s(c, d.error)]);
      return d.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Es({
      ...this._def,
      args: Hr.create(e).rest(Hn.create())
    });
  }
  returns(e) {
    return new Es({
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
    return new Es({
      args: e || Hr.create([]).rest(Hn.create()),
      returns: r || Hn.create(),
      typeName: me.ZodFunction,
      ...xe(n)
    });
  }
}
class li extends Ne {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
li.create = (t, e) => new li({
  getter: t,
  typeName: me.ZodLazy,
  ...xe(e)
});
class ui extends Ne {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        received: r.data,
        code: Y.invalid_literal,
        expected: this._def.value
      }), we;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ui.create = (t, e) => new ui({
  value: t,
  typeName: me.ZodLiteral,
  ...xe(e)
});
function tf(t, e) {
  return new kn({
    values: t,
    typeName: me.ZodEnum,
    ...xe(e)
  });
}
class kn extends Ne {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        expected: Qe.joinValues(n),
        received: r.parsedType,
        code: Y.invalid_type
      }), we;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        received: r.data,
        code: Y.invalid_enum_value,
        options: n
      }), we;
    }
    return er(e.data);
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
    return kn.create(e);
  }
  exclude(e) {
    return kn.create(this.options.filter((r) => !e.includes(r)));
  }
}
kn.create = tf;
class di extends Ne {
  _parse(e) {
    const r = Qe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ne.string && n.parsedType !== ne.number) {
      const s = Qe.objectValues(r);
      return ie(n, {
        expected: Qe.joinValues(s),
        received: n.parsedType,
        code: Y.invalid_type
      }), we;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Qe.objectValues(r);
      return ie(n, {
        received: n.data,
        code: Y.invalid_enum_value,
        options: s
      }), we;
    }
    return er(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
di.create = (t, e) => new di({
  values: t,
  typeName: me.ZodNativeEnum,
  ...xe(e)
});
class Os extends Ne {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.promise && r.common.async === !1)
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.promise,
        received: r.parsedType
      }), we;
    const n = r.parsedType === ne.promise ? r.data : Promise.resolve(r.data);
    return er(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Os.create = (t, e) => new Os({
  type: t,
  typeName: me.ZodPromise,
  ...xe(e)
});
class Nr extends Ne {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === me.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        ie(n, o), o.fatal ? r.abort() : r.dirty();
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
        return a.status === "aborted" ? we : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? we : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Oo(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Oo(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Qe.assertNever(s);
  }
}
Nr.create = (t, e, r) => new Nr({
  schema: t,
  typeName: me.ZodEffects,
  effect: e,
  ...xe(r)
});
Nr.createWithPreprocess = (t, e, r) => new Nr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: me.ZodEffects,
  ...xe(r)
});
class on extends Ne {
  _parse(e) {
    return this._getType(e) === ne.undefined ? er(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
on.create = (t, e) => new on({
  innerType: t,
  typeName: me.ZodOptional,
  ...xe(e)
});
class Gn extends Ne {
  _parse(e) {
    return this._getType(e) === ne.null ? er(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Gn.create = (t, e) => new Gn({
  innerType: t,
  typeName: me.ZodNullable,
  ...xe(e)
});
class hi extends Ne {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ne.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
hi.create = (t, e) => new hi({
  innerType: t,
  typeName: me.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...xe(e)
});
class Po extends Ne {
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
    return Co(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Cr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Cr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Po.create = (t, e) => new Po({
  innerType: t,
  typeName: me.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...xe(e)
});
class No extends Ne {
  _parse(e) {
    if (this._getType(e) !== ne.nan) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        code: Y.invalid_type,
        expected: ne.nan,
        received: r.parsedType
      }), we;
    }
    return { status: "valid", value: e.data };
  }
}
No.create = (t) => new No({
  typeName: me.ZodNaN,
  ...xe(t)
});
const $5 = Symbol("zod_brand");
class rf extends Ne {
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
class zi extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? we : s.status === "dirty" ? (r.dirty(), ef(s.value)) : this._def.out._parseAsync({
          data: s.value,
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
      return s.status === "aborted" ? we : s.status === "dirty" ? (r.dirty(), {
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
    return new zi({
      in: e,
      out: r,
      typeName: me.ZodPipeline
    });
  }
}
const nf = (t, e = {}, r) => t ? Is.create().superRefine((n, s) => {
  var i, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, l = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, c = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : Is.create(), q5 = {
  object: ht.lazycreate
};
var me;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(me || (me = {}));
const W5 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => nf((r) => r instanceof t, e), sf = Ir.create, of = Cn.create, Z5 = No.create, F5 = Tn.create, af = ni.create, H5 = Kn.create, B5 = To.create, K5 = si.create, Y5 = ii.create, G5 = Is.create, Q5 = Hn.create, J5 = cn.create, X5 = ko.create, e2 = Tr.create, t2 = ht.create, r2 = ht.strictCreate, n2 = oi.create, s2 = na.create, i2 = ai.create, o2 = Hr.create, a2 = ci.create, c2 = Ro.create, l2 = Yn.create, u2 = Es.create, d2 = li.create, h2 = ui.create, f2 = kn.create, p2 = di.create, g2 = Os.create, cd = Nr.create, m2 = on.create, y2 = Gn.create, v2 = Nr.createWithPreprocess, _2 = zi.create, b2 = () => sf().optional(), w2 = () => of().optional(), E2 = () => af().optional(), S2 = {
  string: (t) => Ir.create({ ...t, coerce: !0 }),
  number: (t) => Cn.create({ ...t, coerce: !0 }),
  boolean: (t) => ni.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Tn.create({ ...t, coerce: !0 }),
  date: (t) => Kn.create({ ...t, coerce: !0 })
}, x2 = we;
var jr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ri,
  setErrorMap: T5,
  getErrorMap: xo,
  makeIssue: Io,
  EMPTY_PATH: k5,
  addIssueToContext: ie,
  ParseStatus: Ft,
  INVALID: we,
  DIRTY: ef,
  OK: er,
  isAborted: Xa,
  isDirty: ec,
  isValid: Oo,
  isAsync: Co,
  get util() {
    return Qe;
  },
  get objectUtil() {
    return Ja;
  },
  ZodParsedType: ne,
  getParsedType: _n,
  ZodType: Ne,
  ZodString: Ir,
  ZodNumber: Cn,
  ZodBigInt: Tn,
  ZodBoolean: ni,
  ZodDate: Kn,
  ZodSymbol: To,
  ZodUndefined: si,
  ZodNull: ii,
  ZodAny: Is,
  ZodUnknown: Hn,
  ZodNever: cn,
  ZodVoid: ko,
  ZodArray: Tr,
  ZodObject: ht,
  ZodUnion: oi,
  ZodDiscriminatedUnion: na,
  ZodIntersection: ai,
  ZodTuple: Hr,
  ZodRecord: ci,
  ZodMap: Ro,
  ZodSet: Yn,
  ZodFunction: Es,
  ZodLazy: li,
  ZodLiteral: ui,
  ZodEnum: kn,
  ZodNativeEnum: di,
  ZodPromise: Os,
  ZodEffects: Nr,
  ZodTransformer: Nr,
  ZodOptional: on,
  ZodNullable: Gn,
  ZodDefault: hi,
  ZodCatch: Po,
  ZodNaN: No,
  BRAND: $5,
  ZodBranded: rf,
  ZodPipeline: zi,
  custom: nf,
  Schema: Ne,
  ZodSchema: Ne,
  late: q5,
  get ZodFirstPartyTypeKind() {
    return me;
  },
  coerce: S2,
  any: G5,
  array: e2,
  bigint: F5,
  boolean: af,
  date: H5,
  discriminatedUnion: s2,
  effect: cd,
  enum: f2,
  function: u2,
  instanceof: W5,
  intersection: i2,
  lazy: d2,
  literal: h2,
  map: c2,
  nan: Z5,
  nativeEnum: p2,
  never: J5,
  null: Y5,
  nullable: y2,
  number: of,
  object: t2,
  oboolean: E2,
  onumber: w2,
  optional: m2,
  ostring: b2,
  pipeline: _2,
  preprocess: v2,
  promise: g2,
  record: a2,
  set: l2,
  strictObject: r2,
  string: sf,
  symbol: B5,
  transformer: cd,
  tuple: o2,
  undefined: K5,
  union: n2,
  unknown: Q5,
  void: X5,
  NEVER: x2,
  ZodIssueCode: Y,
  quotelessJson: C5,
  ZodError: Cr
});
const I2 = /^aleo1[a-z0-9]{58}$/i, O2 = /^AViewKey1[a-z0-9]{44}$/i, C2 = /^APrivateKey1[a-z0-9]{47}$/i, T2 = /^at1[a-z0-9]{58}$/i, k2 = /^\d+field$/, R2 = /^\d+u32$/, P2 = /^\d+u64$/;
jr.string().regex(I2);
jr.string().regex(O2);
jr.string().regex(C2);
jr.string().regex(T2);
jr.string().regex(k2);
jr.string().regex(R2);
jr.string().regex(P2);
var ld;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(ld || (ld = {}));
var rc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(rc || (rc = {}));
var nc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(nc || (nc = {}));
var sc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(sc || (sc = {}));
var ic;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(ic || (ic = {}));
var ud;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(ud || (ud = {}));
jr.nativeEnum(rc);
jr.nativeEnum(nc);
jr.nativeEnum(ic);
jr.nativeEnum(sc);
var oc = { exports: {} }, Ea, dd;
function N2() {
  if (dd)
    return Ea;
  dd = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  Ea = function(d, f) {
    f = f || {};
    var p = typeof d;
    if (p === "string" && d.length > 0)
      return o(d);
    if (p === "number" && isFinite(d))
      return f.long ? l(d) : a(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(d)
    );
  };
  function o(d) {
    if (d = String(d), !(d.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        d
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
  function a(d) {
    var f = Math.abs(d);
    return f >= n ? Math.round(d / n) + "d" : f >= r ? Math.round(d / r) + "h" : f >= e ? Math.round(d / e) + "m" : f >= t ? Math.round(d / t) + "s" : d + "ms";
  }
  function l(d) {
    var f = Math.abs(d);
    return f >= n ? c(d, f, n, "day") : f >= r ? c(d, f, r, "hour") : f >= e ? c(d, f, e, "minute") : f >= t ? c(d, f, t, "second") : d + " ms";
  }
  function c(d, f, p, m) {
    var v = f >= p * 1.5;
    return Math.round(d / p) + " " + m + (v ? "s" : "");
  }
  return Ea;
}
function A2(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = i, r.enable = s, r.enabled = o, r.humanize = N2(), r.destroy = c, Object.keys(t).forEach((d) => {
    r[d] = t[d];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(d) {
    let f = 0;
    for (let p = 0; p < d.length; p++)
      f = (f << 5) - f + d.charCodeAt(p), f |= 0;
    return r.colors[Math.abs(f) % r.colors.length];
  }
  r.selectColor = e;
  function r(d) {
    let f, p = null, m, v;
    function _(...C) {
      if (!_.enabled)
        return;
      const M = _, b = Number(/* @__PURE__ */ new Date()), I = b - (f || b);
      M.diff = I, M.prev = f, M.curr = b, f = b, C[0] = r.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O");
      let w = 0;
      C[0] = C[0].replace(/%([a-zA-Z%])/g, (S, y) => {
        if (S === "%%")
          return "%";
        w++;
        const u = r.formatters[y];
        if (typeof u == "function") {
          const g = C[w];
          S = u.call(M, g), C.splice(w, 1), w--;
        }
        return S;
      }), r.formatArgs.call(M, C), (M.log || r.log).apply(M, C);
    }
    return _.namespace = d, _.useColors = r.useColors(), _.color = r.selectColor(d), _.extend = n, _.destroy = r.destroy, Object.defineProperty(_, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(d)), v),
      set: (C) => {
        p = C;
      }
    }), typeof r.init == "function" && r.init(_), _;
  }
  function n(d, f) {
    const p = r(this.namespace + (typeof f > "u" ? ":" : f) + d);
    return p.log = this.log, p;
  }
  function s(d) {
    r.save(d), r.namespaces = d, r.names = [], r.skips = [];
    let f;
    const p = (typeof d == "string" ? d : "").split(/[\s,]+/), m = p.length;
    for (f = 0; f < m; f++)
      p[f] && (d = p[f].replace(/\*/g, ".*?"), d[0] === "-" ? r.skips.push(new RegExp("^" + d.slice(1) + "$")) : r.names.push(new RegExp("^" + d + "$")));
  }
  function i() {
    const d = [
      ...r.names.map(a),
      ...r.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), d;
  }
  function o(d) {
    if (d[d.length - 1] === "*")
      return !0;
    let f, p;
    for (f = 0, p = r.skips.length; f < p; f++)
      if (r.skips[f].test(d))
        return !1;
    for (f = 0, p = r.names.length; f < p; f++)
      if (r.names[f].test(d))
        return !0;
    return !1;
  }
  function a(d) {
    return d.toString().substring(2, d.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var L2 = A2;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = o(), e.destroy = /* @__PURE__ */ (() => {
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
    const c = "color: " + this.color;
    l.splice(1, 0, c, "color: inherit");
    let d = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (d++, p === "%c" && (f = d));
    }), l.splice(f, 0, c);
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
  t.exports = L2(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(oc, oc.exports);
var j2 = oc.exports;
const D2 = /* @__PURE__ */ Zo(j2), Ui = D2("wallet:sdk");
Ui.enabled = !0;
function cf(t) {
  Pr(() => (yr().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    yr().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function M2(t) {
  Pr(() => (yr().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    yr().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function lf(t) {
  Pr(() => (yr().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    yr().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function vr() {
  const [t, e] = oo(void 0);
  return cf((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), lf((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), M2((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Pr(() => {
    async function r() {
      const s = await (await yr()).getSession();
      e(s);
    }
    return r(), Qs.on("session_change", r), () => {
      Qs.off && Qs.off("session_change", r);
    };
  }, []), t;
}
function Vi(t) {
  Pr(() => (yr().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    yr().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var z2 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function U2(t, e) {
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
const fi = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return fi(n)(r);
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
        return fi(n)(r);
      }
    };
  }
}, V2 = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (C) => C,
    version: 0,
    merge: (C, M) => ({
      ...M,
      ...C
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let c;
  try {
    c = i.getStorage();
  } catch {
  }
  if (!c)
    return t(
      (...C) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...C);
      },
      n,
      s
    );
  const d = fi(i.serialize), f = () => {
    const C = i.partialize({ ...n() });
    let M;
    const b = d({ state: C, version: i.version }).then(
      (I) => c.setItem(i.name, I)
    ).catch((I) => {
      M = I;
    });
    if (M)
      throw M;
    return b;
  }, p = s.setState;
  s.setState = (C, M) => {
    p(C, M), f();
  };
  const m = t(
    (...C) => {
      r(...C), f();
    },
    n,
    s
  );
  let v;
  const _ = () => {
    var C;
    if (!c)
      return;
    o = !1, a.forEach((b) => b(n()));
    const M = ((C = i.onRehydrateStorage) == null ? void 0 : C.call(i, n())) || void 0;
    return fi(c.getItem.bind(c))(i.name).then((b) => {
      if (b)
        return i.deserialize(b);
    }).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              b.state,
              b.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return b.state;
    }).then((b) => {
      var I;
      return v = i.merge(
        b,
        (I = n()) != null ? I : m
      ), r(v, !0), f();
    }).then(() => {
      M == null || M(v, void 0), o = !0, l.forEach((b) => b(v));
    }).catch((b) => {
      M == null || M(void 0, b);
    });
  };
  return s.persist = {
    setOptions: (C) => {
      i = {
        ...i,
        ...C
      }, C.getStorage && (c = C.getStorage());
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (C) => (a.add(C), () => {
      a.delete(C);
    }),
    onFinishHydration: (C) => (l.add(C), () => {
      l.delete(C);
    })
  }, _(), v || m;
}, $2 = (t, e) => (r, n, s) => {
  let i = {
    storage: U2(() => localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, C) => ({
      ...C,
      ..._
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let c = i.storage;
  if (!c)
    return t(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(..._);
      },
      n,
      s
    );
  const d = () => {
    const _ = i.partialize({ ...n() });
    return c.setItem(i.name, {
      state: _,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (_, C) => {
    f(_, C), d();
  };
  const p = t(
    (..._) => {
      r(..._), d();
    },
    n,
    s
  );
  s.getInitialState = () => p;
  let m;
  const v = () => {
    var _, C;
    if (!c)
      return;
    o = !1, a.forEach((b) => {
      var I;
      return b((I = n()) != null ? I : p);
    });
    const M = ((C = i.onRehydrateStorage) == null ? void 0 : C.call(i, (_ = n()) != null ? _ : p)) || void 0;
    return fi(c.getItem.bind(c))(i.name).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              b.state,
              b.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return b.state;
    }).then((b) => {
      var I;
      return m = i.merge(
        b,
        (I = n()) != null ? I : p
      ), r(m, !0), d();
    }).then(() => {
      M == null || M(m, void 0), m = n(), o = !0, l.forEach((b) => b(m));
    }).catch((b) => {
      M == null || M(void 0, b);
    });
  };
  return s.persist = {
    setOptions: (_) => {
      i = {
        ...i,
        ..._
      }, _.storage && (c = _.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => o,
    onHydrate: (_) => (a.add(_), () => {
      a.delete(_);
    }),
    onFinishHydration: (_) => (l.add(_), () => {
      l.delete(_);
    })
  }, i.skipHydration || v(), m || p;
}, q2 = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((z2 ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), V2(t, e)) : $2(t, e), W2 = q2, ln = Op()(
  W2(
    (t, e) => ({
      account: void 0,
      chainId: "aleo:3",
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
        }), Zf.clear(), localStorage.removeItem("puzzle-hasDesktopConnection"), console.log("onDisconnect called!");
      }
    }),
    {
      name: "puzzle-wallet-store"
    }
  )
);
function tl() {
  const [t, e] = oo(void 0), [r, n] = oo(void 0), [s, i] = oo(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function uf(t, e) {
  const n = await (await yr()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function $i({
  queryKey: t,
  wcParams: e,
  enabled: r,
  queryOptions: n,
  fetchFunction: s
}) {
  return Nd(
    t,
    async () => s(e),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function qi({
  queryKey: t,
  wcParams: e,
  enabled: r,
  queryOptions: n
}) {
  return Nd(
    t,
    async () => uf(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Wi(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: o } = tl();
  async function a(l) {
    try {
      o(!0), i(void 0);
      const c = await uf(t ?? l);
      return s(c), c;
    } catch (c) {
      throw i(c), c;
    } finally {
      o(!1);
    }
  }
  return { data: e, error: r, loading: n, request: a };
}
const ac = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", Q6 = () => {
  const t = vr(), [e, r, n] = ln((f) => [
    f.account,
    f.setAccount,
    f.onDisconnect
  ]), s = Mi() ? $i : qi, i = {
    topic: t == null ? void 0 : t.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  }, {
    refetch: o,
    data: a,
    error: l,
    isLoading: c
  } = s({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getSelectedAccount.query(i),
    wcParams: i
  });
  Vi(({ params: f, topic: p }) => {
    if (f.event.name === "accountSelected" && t && t.topic === p) {
      const v = f.event.address ?? f.event.data.address, _ = f.chainId.split(":")[0], C = f.chainId.split(":")[1];
      r({
        network: _,
        chainId: C,
        address: v,
        shortenedAddress: ac(v)
      });
    }
  }), lf(({ params: f, topic: p }) => {
    const m = f.event.address ?? f.event.data.address, v = f.chainId.split(":")[0], _ = f.chainId.split(":")[1];
    r({
      network: v,
      chainId: _,
      address: m,
      shortenedAddress: ac(m)
    });
  }), cf(({ params: f, topic: p }) => {
    n();
  }), Pr(() => {
    t && !c && o();
  }, [t == null ? void 0 : t.topic]), Pr(() => {
    if (a) {
      const f = a, p = f == null ? void 0 : f.account;
      p && r(p);
    }
  }, [a]);
  const d = l ? l.message : a && a.error;
  return {
    account: e,
    error: d,
    loading: c
  };
}, J6 = ({ address: t, multisig: e }) => {
  const r = vr(), [n] = ln((m) => [m.account]), s = Mi() ? $i : qi, i = {
    topic: r == null ? void 0 : r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0,
        address: t
      }
    }
  }, {
    refetch: o,
    data: a,
    error: l,
    isLoading: c
  } = s({
    queryKey: [
      "useBalance",
      t,
      (n == null ? void 0 : n.address) ?? "",
      e,
      r == null ? void 0 : r.topic
    ],
    enabled: !!r && !!n && (e ? !!t : !0),
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getBalance.query(i),
    wcParams: i
  });
  Vi(({ params: m, topic: v }) => {
    const _ = m.event.name, C = m.event.address ?? m.event.data.address;
    (_ === "selectedAccountSynced" && !e || _ === "sharedAccountSynced" && e && C === t) && o();
  }), Pr(() => {
    r && !c && o();
  }, [r == null ? void 0 : r.topic]);
  const d = l ? l.message : a && a.error, f = a;
  return { balances: f == null ? void 0 : f.balances, error: d, loading: c };
};
function X6() {
  const e = !!vr(), { data: r, error: n, loading: s, setData: i, setError: o, setLoading: a } = tl(), [l] = ln((d) => [d.setAccount]);
  async function c() {
    try {
      a(!0), o(void 0);
      const f = await (await yr()).connect({
        requiredNamespaces: {
          aleo: {
            methods: e5,
            chains: el,
            events: t5
          }
        }
      });
      i(f), await O5(f.topic);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return l({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: ac(p[2])
      }), Qs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (d) {
      throw o(d), localStorage.removeItem("puzzle-hasDesktopConnection"), d;
    } finally {
      a(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: c };
}
const eS = () => {
  const t = vr(), {
    request: e,
    data: r,
    error: n,
    loading: s
  } = Wi({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), i = n ? n.message : r && r.error, o = r;
  return { createSharedState: () => {
    t && !s && e();
  }, data: o == null ? void 0 : o.data, loading: s, error: i };
}, tS = (t) => {
  Ui("useDecrypt", t);
  const e = vr(), {
    request: r,
    data: n,
    error: s,
    loading: i
  } = Wi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), o = s ? s.message : n && n.error, a = n;
  return { decrypt: () => {
    t && e && !i && r();
  }, plaintexts: a == null ? void 0 : a.plaintexts, loading: i, error: o };
};
function rS() {
  const t = vr(), [e] = ln((a) => [a.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = tl();
  async function o() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await yr()).disconnect({
          topic: t.topic,
          reason: kc("USER_DISCONNECTED")
        }), Qs.emit("session_change");
      } catch (a) {
        console.warn(a);
      }
      ln.getState().onDisconnect();
    } catch (a) {
      throw s(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: r, loading: n, disconnect: o };
}
const nS = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = vr(), [s] = ln((M) => [M.account]), i = Mi() ? $i : qi, o = {
    topic: n == null ? void 0 : n.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t ?? "",
        address: e
      }
    }
  }, a = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), {
    refetch: l,
    data: c,
    error: d,
    isLoading: f
  } = i({
    queryKey: [
      "useEvent",
      s == null ? void 0 : s.address,
      e,
      r,
      t,
      n == null ? void 0 : n.topic
    ],
    enabled: a,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getEvent.query(o),
    wcParams: o
  });
  Vi(({ params: M, topic: b }) => {
    const I = M.event.name, w = M.event.address ?? M.event.data.address;
    (t && I === "selectedAccountSynced" && !r || I === "sharedAccountSynced" && r && w === e) && l();
  });
  const p = !!n && !!s && !!t && (r ? !!e : !0);
  Pr(() => {
    p && !f && l();
  }, [p]);
  const m = () => {
    p && !f && l();
  }, v = d ? d.message : c && c.error, _ = c, C = _ == null ? void 0 : _.event;
  return { fetchEvent: m, event: C, error: v, loading: f };
}, sS = ({ filter: t, page: e }) => {
  const r = vr(), [n] = ln((C) => [C.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = Mi() ? $i : qi, i = {
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: e
      }
    }
  }, {
    refetch: o,
    data: a,
    error: l,
    isLoading: c
  } = s({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getEvents.query(i),
    wcParams: i
  });
  Vi(({ id: C, params: M, topic: b }) => {
    M.event.name === "selectedAccountSynced" && o();
  });
  const d = !!r && !!n;
  Pr(() => {
    d && !c && o();
  }, [d]);
  const f = () => {
    d && !c && o();
  }, p = l ? l.message : a && a.error, m = a, v = m == null ? void 0 : m.events, _ = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: f, events: v, error: p, loading: c, page: e, pageCount: _ };
}, iS = (t) => {
  const e = vr(), {
    request: r,
    data: n,
    error: s,
    loading: i
  } = Wi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), o = s ? s.message : n && n.error, a = n;
  return { importSharedState: () => {
    e && !i && r();
  }, data: a == null ? void 0 : a.data, loading: i, error: o };
}, oS = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, aS = ({
  address: t,
  multisig: e = !1,
  filter: r,
  page: n
}) => {
  const s = vr(), [i] = ln((b) => [b.account]), o = Mi() ? $i : qi, a = {
    topic: s == null ? void 0 : s.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: r,
        page: n
      }
    }
  }, {
    refetch: l,
    data: c,
    error: d,
    isLoading: f
  } = o({
    queryKey: [
      "useRecords",
      i == null ? void 0 : i.address,
      t,
      e,
      r,
      n,
      s == null ? void 0 : s.topic
    ],
    enabled: (e ? !!t : !0) && !!s && !!i,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getRecords.query(a),
    wcParams: a
  }), p = !!s && !!i && (e ? !!t : !0);
  Vi(({ params: b }) => {
    const I = b.event.name, w = b.event.address ?? b.event.data.address;
    (I === "selectedAccountSynced" && !e || I === "sharedAccountSynced" && e && w === t) && l();
  });
  const m = () => {
    p && !f && (Ui("useRecords refetching...", [t, e, r, n]), l());
  }, v = d ? d.message : c && c.error, _ = c, C = _ == null ? void 0 : _.records, M = (_ == null ? void 0 : _.pageCount) ?? 0;
  return { fetchPage: m, records: C, error: v, loading: f, page: n, pageCount: M };
}, cS = (t) => {
  const e = vr(), r = t == null ? void 0 : t.inputs.map((d) => typeof d == "string" ? d : d.plaintext), {
    request: n,
    data: s,
    error: i,
    loading: o
  } = Wi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
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
    t && e && !o && (Ui("useCreateEvent requesting...", t), n());
  }, eventId: l == null ? void 0 : l.eventId, loading: o, error: a };
};
var Je;
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
})(Je || (Je = {}));
var cc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(cc || (cc = {}));
const se = Je.arrayToEnum([
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
]), bn = (t) => {
  switch (typeof t) {
    case "undefined":
      return se.undefined;
    case "string":
      return se.string;
    case "number":
      return isNaN(t) ? se.nan : se.number;
    case "boolean":
      return se.boolean;
    case "function":
      return se.function;
    case "bigint":
      return se.bigint;
    case "symbol":
      return se.symbol;
    case "object":
      return Array.isArray(t) ? se.array : t === null ? se.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? se.promise : typeof Map < "u" && t instanceof Map ? se.map : typeof Set < "u" && t instanceof Set ? se.set : typeof Date < "u" && t instanceof Date ? se.date : se.object;
    default:
      return se.unknown;
  }
}, G = Je.arrayToEnum([
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
]), Z2 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class kr extends Error {
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
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(r(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Je.jsonStringifyReplacer, 2);
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
kr.create = (t) => new kr(t);
const pi = (t, e) => {
  let r;
  switch (t.code) {
    case G.invalid_type:
      t.received === se.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case G.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Je.jsonStringifyReplacer)}`;
      break;
    case G.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Je.joinValues(t.keys, ", ")}`;
      break;
    case G.invalid_union:
      r = "Invalid input";
      break;
    case G.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Je.joinValues(t.options)}`;
      break;
    case G.invalid_enum_value:
      r = `Invalid enum value. Expected ${Je.joinValues(t.options)}, received '${t.received}'`;
      break;
    case G.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case G.invalid_return_type:
      r = "Invalid function return type";
      break;
    case G.invalid_date:
      r = "Invalid date";
      break;
    case G.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Je.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case G.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case G.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case G.custom:
      r = "Invalid input";
      break;
    case G.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case G.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case G.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Je.assertNever(t);
  }
  return { message: r };
};
let df = pi;
function F2(t) {
  df = t;
}
function Ao() {
  return df;
}
const Lo = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, H2 = [];
function oe(t, e) {
  const r = Lo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ao(),
      pi
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Ht {
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
        return _e;
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
    return Ht.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return _e;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const _e = Object.freeze({
  status: "aborted"
}), hf = (t) => ({ status: "dirty", value: t }), tr = (t) => ({ status: "valid", value: t }), lc = (t) => t.status === "aborted", uc = (t) => t.status === "dirty", jo = (t) => t.status === "valid", Do = (t) => typeof Promise < "u" && t instanceof Promise;
var fe;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(fe || (fe = {}));
class Br {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const hd = (t, e) => {
  if (jo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new kr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function Ie(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class Ae {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return bn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: bn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ht(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: bn(e.data),
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
      parsedType: bn(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return hd(s, i);
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
      parsedType: bn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Do(s) ? s : Promise.resolve(s));
    return hd(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: G.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Ar({
      schema: this,
      typeName: ye.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return an.create(this, this._def);
  }
  nullable() {
    return Xn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Rr.create(this, this._def);
  }
  promise() {
    return Ts.create(this, this._def);
  }
  or(e) {
    return vi.create([this, e], this._def);
  }
  and(e) {
    return _i.create(this, e, this._def);
  }
  transform(e) {
    return new Ar({
      ...Ie(this._def),
      schema: this,
      typeName: ye.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new xi({
      ...Ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ye.ZodDefault
    });
  }
  brand() {
    return new pf({
      typeName: ye.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Vo({
      ...Ie(this._def),
      innerType: this,
      catchValue: r,
      typeName: ye.ZodCatch
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
    return Zi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const B2 = /^c[^\s-]{8,}$/i, K2 = /^[a-z][a-z0-9]*$/, Y2 = /[0-9A-HJKMNP-TV-Z]{26}/, G2 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Q2 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, J2 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), X2 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, eE = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, tE = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function rE(t, e) {
  return !!((e === "v4" || !e) && X2.test(t) || (e === "v6" || !e) && eE.test(t));
}
class Or extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: G.invalid_string,
      ...fe.errToObj(n)
    }), this.nonempty = (e) => this.min(1, fe.errToObj(e)), this.trim = () => new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== se.string) {
      const i = this._getOrReturnCtx(e);
      return oe(
        i,
        {
          code: G.invalid_type,
          expected: se.string,
          received: i.parsedType
        }
        //
      ), _e;
    }
    const n = new Ht();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, a = e.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(e, s), o ? oe(s, {
          code: G.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && oe(s, {
          code: G.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        Q2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "email",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        J2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "emoji",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        G2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "uuid",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        B2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "cuid",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        K2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "cuid2",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        Y2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "ulid",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), oe(s, {
            validation: "url",
            code: G.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "regex",
          code: G.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? tE(i).test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? rE(e.data, i.version) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "ip",
          code: G.invalid_string,
          message: i.message
        }), n.dirty()) : Je.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...fe.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...fe.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...fe.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...fe.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...fe.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...fe.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...fe.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...fe.errToObj(e) });
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
      ...fe.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...fe.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...fe.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...fe.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...fe.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...fe.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...fe.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...fe.errToObj(r)
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
Or.create = (t) => {
  var e;
  return new Or({
    checks: [],
    typeName: ye.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
function nE(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Rn extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== se.number) {
      const i = this._getOrReturnCtx(e);
      return oe(i, {
        code: G.invalid_type,
        expected: se.number,
        received: i.parsedType
      }), _e;
    }
    let n;
    const s = new Ht();
    for (const i of this._def.checks)
      i.kind === "int" ? Je.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? nE(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.not_finite,
        message: i.message
      }), s.dirty()) : Je.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, fe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, fe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, fe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, fe.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Rn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: fe.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Rn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: fe.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: fe.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: fe.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: fe.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: fe.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Je.isInteger(e.value));
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
Rn.create = (t) => new Rn({
  checks: [],
  typeName: ye.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class Pn extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== se.bigint) {
      const i = this._getOrReturnCtx(e);
      return oe(i, {
        code: G.invalid_type,
        expected: se.bigint,
        received: i.parsedType
      }), _e;
    }
    let n;
    const s = new Ht();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), oe(n, {
        code: G.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Je.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, fe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, fe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, fe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, fe.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Pn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: fe.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Pn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: fe.toString(r)
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
Pn.create = (t) => {
  var e;
  return new Pn({
    checks: [],
    typeName: ye.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
class gi extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== se.boolean) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.boolean,
        received: n.parsedType
      }), _e;
    }
    return tr(e.data);
  }
}
gi.create = (t) => new gi({
  typeName: ye.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class Qn extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== se.date) {
      const i = this._getOrReturnCtx(e);
      return oe(i, {
        code: G.invalid_type,
        expected: se.date,
        received: i.parsedType
      }), _e;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return oe(i, {
        code: G.invalid_date
      }), _e;
    }
    const n = new Ht();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), oe(s, {
        code: G.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), oe(s, {
        code: G.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Je.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Qn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: fe.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: fe.toString(r)
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
Qn.create = (t) => new Qn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ye.ZodDate,
  ...Ie(t)
});
class Mo extends Ae {
  _parse(e) {
    if (this._getType(e) !== se.symbol) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.symbol,
        received: n.parsedType
      }), _e;
    }
    return tr(e.data);
  }
}
Mo.create = (t) => new Mo({
  typeName: ye.ZodSymbol,
  ...Ie(t)
});
class mi extends Ae {
  _parse(e) {
    if (this._getType(e) !== se.undefined) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.undefined,
        received: n.parsedType
      }), _e;
    }
    return tr(e.data);
  }
}
mi.create = (t) => new mi({
  typeName: ye.ZodUndefined,
  ...Ie(t)
});
class yi extends Ae {
  _parse(e) {
    if (this._getType(e) !== se.null) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.null,
        received: n.parsedType
      }), _e;
    }
    return tr(e.data);
  }
}
yi.create = (t) => new yi({
  typeName: ye.ZodNull,
  ...Ie(t)
});
class Cs extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return tr(e.data);
  }
}
Cs.create = (t) => new Cs({
  typeName: ye.ZodAny,
  ...Ie(t)
});
class Bn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return tr(e.data);
  }
}
Bn.create = (t) => new Bn({
  typeName: ye.ZodUnknown,
  ...Ie(t)
});
class un extends Ae {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return oe(r, {
      code: G.invalid_type,
      expected: se.never,
      received: r.parsedType
    }), _e;
  }
}
un.create = (t) => new un({
  typeName: ye.ZodNever,
  ...Ie(t)
});
class zo extends Ae {
  _parse(e) {
    if (this._getType(e) !== se.undefined) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.void,
        received: n.parsedType
      }), _e;
    }
    return tr(e.data);
  }
}
zo.create = (t) => new zo({
  typeName: ye.ZodVoid,
  ...Ie(t)
});
class Rr extends Ae {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== se.array)
      return oe(r, {
        code: G.invalid_type,
        expected: se.array,
        received: r.parsedType
      }), _e;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (oe(r, {
        code: o ? G.too_big : G.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (oe(r, {
      code: G.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (oe(r, {
      code: G.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Br(r, o, r.path, a)))).then((o) => Ht.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Br(r, o, r.path, a)));
    return Ht.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Rr({
      ...this._def,
      minLength: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new Rr({
      ...this._def,
      maxLength: { value: e, message: fe.toString(r) }
    });
  }
  length(e, r) {
    return new Rr({
      ...this._def,
      exactLength: { value: e, message: fe.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Rr.create = (t, e) => new Rr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ye.ZodArray,
  ...Ie(e)
});
function gs(t) {
  if (t instanceof ft) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = an.create(gs(n));
    }
    return new ft({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Rr ? new Rr({
      ...t._def,
      type: gs(t.element)
    }) : t instanceof an ? an.create(gs(t.unwrap())) : t instanceof Xn ? Xn.create(gs(t.unwrap())) : t instanceof Kr ? Kr.create(t.items.map((e) => gs(e))) : t;
}
class ft extends Ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Je.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== se.object) {
      const c = this._getOrReturnCtx(e);
      return oe(c, {
        code: G.invalid_type,
        expected: se.object,
        received: c.parsedType
      }), _e;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof un && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const d = i[c], f = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new Br(s, f, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof un) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of a)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (c === "strict")
        a.length > 0 && (oe(s, {
          code: G.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of a) {
        const f = s.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new Br(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of l) {
        const f = await d.key;
        c.push({
          key: f,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Ht.mergeObjectSync(n, c)) : Ht.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return fe.errToObj, new ft({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = fe.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new ft({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ft({
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
    return new ft({
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
    return new ft({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ye.ZodObject
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
    return new ft({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Je.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return gs(this);
  }
  partial(e) {
    const r = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof an; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ff(Je.objectKeys(this.shape));
  }
}
ft.create = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...Ie(e)
});
ft.strictCreate = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strict",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...Ie(e)
});
ft.lazycreate = (t, e) => new ft({
  shape: t,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...Ie(e)
});
class vi extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new kr(a.ctx.common.issues));
      return oe(r, {
        code: G.invalid_union,
        unionErrors: o
      }), _e;
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
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new kr(l));
      return oe(r, {
        code: G.invalid_union,
        unionErrors: a
      }), _e;
    }
  }
  get options() {
    return this._def.options;
  }
}
vi.create = (t, e) => new vi({
  options: t,
  typeName: ye.ZodUnion,
  ...Ie(e)
});
const fo = (t) => t instanceof wi ? fo(t.schema) : t instanceof Ar ? fo(t.innerType()) : t instanceof Ei ? [t.value] : t instanceof Nn ? t.options : t instanceof Si ? Object.keys(t.enum) : t instanceof xi ? fo(t._def.innerType) : t instanceof mi ? [void 0] : t instanceof yi ? [null] : null;
class sa extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== se.object)
      return oe(r, {
        code: G.invalid_type,
        expected: se.object,
        received: r.parsedType
      }), _e;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (oe(r, {
      code: G.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), _e);
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
      const o = fo(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new sa({
      typeName: ye.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...Ie(n)
    });
  }
}
function dc(t, e) {
  const r = bn(t), n = bn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === se.object && n === se.object) {
    const s = Je.objectKeys(e), i = Je.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const l = dc(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === se.array && n === se.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], l = dc(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === se.date && n === se.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class _i extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, o) => {
      if (lc(i) || lc(o))
        return _e;
      const a = dc(i.value, o.value);
      return a.valid ? ((uc(i) || uc(o)) && r.dirty(), { status: r.value, value: a.data }) : (oe(n, {
        code: G.invalid_intersection_types
      }), _e);
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
_i.create = (t, e, r) => new _i({
  left: t,
  right: e,
  typeName: ye.ZodIntersection,
  ...Ie(r)
});
class Kr extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== se.array)
      return oe(n, {
        code: G.invalid_type,
        expected: se.array,
        received: n.parsedType
      }), _e;
    if (n.data.length < this._def.items.length)
      return oe(n, {
        code: G.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), _e;
    !this._def.rest && n.data.length > this._def.items.length && (oe(n, {
      code: G.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Br(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(i).then((o) => Ht.mergeArray(r, o)) : Ht.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Kr({
      ...this._def,
      rest: e
    });
  }
}
Kr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Kr({
    items: t,
    typeName: ye.ZodTuple,
    rest: null,
    ...Ie(e)
  });
};
class bi extends Ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== se.object)
      return oe(n, {
        code: G.invalid_type,
        expected: se.object,
        received: n.parsedType
      }), _e;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Br(n, a, n.path, a)),
        value: o._parse(new Br(n, n.data[a], n.path, a))
      });
    return n.common.async ? Ht.mergeObjectAsync(r, s) : Ht.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ae ? new bi({
      keyType: e,
      valueType: r,
      typeName: ye.ZodRecord,
      ...Ie(n)
    }) : new bi({
      keyType: Or.create(),
      valueType: e,
      typeName: ye.ZodRecord,
      ...Ie(r)
    });
  }
}
class Uo extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== se.map)
      return oe(n, {
        code: G.invalid_type,
        expected: se.map,
        received: n.parsedType
      }), _e;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, l], c) => ({
      key: s._parse(new Br(n, a, n.path, [c, "key"])),
      value: i._parse(new Br(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return _e;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return _e;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Uo.create = (t, e, r) => new Uo({
  valueType: e,
  keyType: t,
  typeName: ye.ZodMap,
  ...Ie(r)
});
class Jn extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== se.set)
      return oe(n, {
        code: G.invalid_type,
        expected: se.set,
        received: n.parsedType
      }), _e;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (oe(n, {
      code: G.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (oe(n, {
      code: G.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return _e;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const a = [...n.data.values()].map((l, c) => i._parse(new Br(n, l, n.path, c)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, r) {
    return new Jn({
      ...this._def,
      minSize: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new Jn({
      ...this._def,
      maxSize: { value: e, message: fe.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Jn.create = (t, e) => new Jn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ye.ZodSet,
  ...Ie(e)
});
class Ss extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== se.function)
      return oe(r, {
        code: G.invalid_type,
        expected: se.function,
        received: r.parsedType
      }), _e;
    function n(a, l) {
      return Lo({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ao(),
          pi
        ].filter((c) => !!c),
        issueData: {
          code: G.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return Lo({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ao(),
          pi
        ].filter((c) => !!c),
        issueData: {
          code: G.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof Ts ? tr(async (...a) => {
      const l = new kr([]), c = await this._def.args.parseAsync(a, i).catch((p) => {
        throw l.addIssue(n(a, p)), l;
      }), d = await o(...c);
      return await this._def.returns._def.type.parseAsync(d, i).catch((p) => {
        throw l.addIssue(s(d, p)), l;
      });
    }) : tr((...a) => {
      const l = this._def.args.safeParse(a, i);
      if (!l.success)
        throw new kr([n(a, l.error)]);
      const c = o(...l.data), d = this._def.returns.safeParse(c, i);
      if (!d.success)
        throw new kr([s(c, d.error)]);
      return d.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Ss({
      ...this._def,
      args: Kr.create(e).rest(Bn.create())
    });
  }
  returns(e) {
    return new Ss({
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
    return new Ss({
      args: e || Kr.create([]).rest(Bn.create()),
      returns: r || Bn.create(),
      typeName: ye.ZodFunction,
      ...Ie(n)
    });
  }
}
class wi extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
wi.create = (t, e) => new wi({
  getter: t,
  typeName: ye.ZodLazy,
  ...Ie(e)
});
class Ei extends Ae {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return oe(r, {
        received: r.data,
        code: G.invalid_literal,
        expected: this._def.value
      }), _e;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ei.create = (t, e) => new Ei({
  value: t,
  typeName: ye.ZodLiteral,
  ...Ie(e)
});
function ff(t, e) {
  return new Nn({
    values: t,
    typeName: ye.ZodEnum,
    ...Ie(e)
  });
}
class Nn extends Ae {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return oe(r, {
        expected: Je.joinValues(n),
        received: r.parsedType,
        code: G.invalid_type
      }), _e;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return oe(r, {
        received: r.data,
        code: G.invalid_enum_value,
        options: n
      }), _e;
    }
    return tr(e.data);
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
    return Nn.create(e);
  }
  exclude(e) {
    return Nn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Nn.create = ff;
class Si extends Ae {
  _parse(e) {
    const r = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== se.string && n.parsedType !== se.number) {
      const s = Je.objectValues(r);
      return oe(n, {
        expected: Je.joinValues(s),
        received: n.parsedType,
        code: G.invalid_type
      }), _e;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Je.objectValues(r);
      return oe(n, {
        received: n.data,
        code: G.invalid_enum_value,
        options: s
      }), _e;
    }
    return tr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Si.create = (t, e) => new Si({
  values: t,
  typeName: ye.ZodNativeEnum,
  ...Ie(e)
});
class Ts extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== se.promise && r.common.async === !1)
      return oe(r, {
        code: G.invalid_type,
        expected: se.promise,
        received: r.parsedType
      }), _e;
    const n = r.parsedType === se.promise ? r.data : Promise.resolve(r.data);
    return tr(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ts.create = (t, e) => new Ts({
  type: t,
  typeName: ye.ZodPromise,
  ...Ie(e)
});
class Ar extends Ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ye.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        oe(n, o), o.fatal ? r.abort() : r.dirty();
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
        return a.status === "aborted" ? _e : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? _e : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!jo(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => jo(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Je.assertNever(s);
  }
}
Ar.create = (t, e, r) => new Ar({
  schema: t,
  typeName: ye.ZodEffects,
  effect: e,
  ...Ie(r)
});
Ar.createWithPreprocess = (t, e, r) => new Ar({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ye.ZodEffects,
  ...Ie(r)
});
class an extends Ae {
  _parse(e) {
    return this._getType(e) === se.undefined ? tr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
an.create = (t, e) => new an({
  innerType: t,
  typeName: ye.ZodOptional,
  ...Ie(e)
});
class Xn extends Ae {
  _parse(e) {
    return this._getType(e) === se.null ? tr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Xn.create = (t, e) => new Xn({
  innerType: t,
  typeName: ye.ZodNullable,
  ...Ie(e)
});
class xi extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === se.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
xi.create = (t, e) => new xi({
  innerType: t,
  typeName: ye.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Ie(e)
});
class Vo extends Ae {
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
    return Do(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new kr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new kr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Vo.create = (t, e) => new Vo({
  innerType: t,
  typeName: ye.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class $o extends Ae {
  _parse(e) {
    if (this._getType(e) !== se.nan) {
      const n = this._getOrReturnCtx(e);
      return oe(n, {
        code: G.invalid_type,
        expected: se.nan,
        received: n.parsedType
      }), _e;
    }
    return { status: "valid", value: e.data };
  }
}
$o.create = (t) => new $o({
  typeName: ye.ZodNaN,
  ...Ie(t)
});
const sE = Symbol("zod_brand");
class pf extends Ae {
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
class Zi extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? _e : i.status === "dirty" ? (r.dirty(), hf(i.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? _e : s.status === "dirty" ? (r.dirty(), {
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
    return new Zi({
      in: e,
      out: r,
      typeName: ye.ZodPipeline
    });
  }
}
const gf = (t, e = {}, r) => t ? Cs.create().superRefine((n, s) => {
  var i, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, l = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, c = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : Cs.create(), iE = {
  object: ft.lazycreate
};
var ye;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ye || (ye = {}));
const oE = (t, e = {
  message: `Input not instance of ${t.name}`
}) => gf((r) => r instanceof t, e), mf = Or.create, yf = Rn.create, aE = $o.create, cE = Pn.create, vf = gi.create, lE = Qn.create, uE = Mo.create, dE = mi.create, hE = yi.create, fE = Cs.create, pE = Bn.create, gE = un.create, mE = zo.create, yE = Rr.create, vE = ft.create, _E = ft.strictCreate, bE = vi.create, wE = sa.create, EE = _i.create, SE = Kr.create, xE = bi.create, IE = Uo.create, OE = Jn.create, CE = Ss.create, TE = wi.create, kE = Ei.create, RE = Nn.create, PE = Si.create, NE = Ts.create, fd = Ar.create, AE = an.create, LE = Xn.create, jE = Ar.createWithPreprocess, DE = Zi.create, ME = () => mf().optional(), zE = () => yf().optional(), UE = () => vf().optional(), VE = {
  string: (t) => Or.create({ ...t, coerce: !0 }),
  number: (t) => Rn.create({ ...t, coerce: !0 }),
  boolean: (t) => gi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Pn.create({ ...t, coerce: !0 }),
  date: (t) => Qn.create({ ...t, coerce: !0 })
}, $E = _e;
var Dr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pi,
  setErrorMap: F2,
  getErrorMap: Ao,
  makeIssue: Lo,
  EMPTY_PATH: H2,
  addIssueToContext: oe,
  ParseStatus: Ht,
  INVALID: _e,
  DIRTY: hf,
  OK: tr,
  isAborted: lc,
  isDirty: uc,
  isValid: jo,
  isAsync: Do,
  get util() {
    return Je;
  },
  get objectUtil() {
    return cc;
  },
  ZodParsedType: se,
  getParsedType: bn,
  ZodType: Ae,
  ZodString: Or,
  ZodNumber: Rn,
  ZodBigInt: Pn,
  ZodBoolean: gi,
  ZodDate: Qn,
  ZodSymbol: Mo,
  ZodUndefined: mi,
  ZodNull: yi,
  ZodAny: Cs,
  ZodUnknown: Bn,
  ZodNever: un,
  ZodVoid: zo,
  ZodArray: Rr,
  ZodObject: ft,
  ZodUnion: vi,
  ZodDiscriminatedUnion: sa,
  ZodIntersection: _i,
  ZodTuple: Kr,
  ZodRecord: bi,
  ZodMap: Uo,
  ZodSet: Jn,
  ZodFunction: Ss,
  ZodLazy: wi,
  ZodLiteral: Ei,
  ZodEnum: Nn,
  ZodNativeEnum: Si,
  ZodPromise: Ts,
  ZodEffects: Ar,
  ZodTransformer: Ar,
  ZodOptional: an,
  ZodNullable: Xn,
  ZodDefault: xi,
  ZodCatch: Vo,
  ZodNaN: $o,
  BRAND: sE,
  ZodBranded: pf,
  ZodPipeline: Zi,
  custom: gf,
  Schema: Ae,
  ZodSchema: Ae,
  late: iE,
  get ZodFirstPartyTypeKind() {
    return ye;
  },
  coerce: VE,
  any: fE,
  array: yE,
  bigint: cE,
  boolean: vf,
  date: lE,
  discriminatedUnion: wE,
  effect: fd,
  enum: RE,
  function: CE,
  instanceof: oE,
  intersection: EE,
  lazy: TE,
  literal: kE,
  map: IE,
  nan: aE,
  nativeEnum: PE,
  never: gE,
  null: hE,
  nullable: LE,
  number: yf,
  object: vE,
  oboolean: UE,
  onumber: zE,
  optional: AE,
  ostring: ME,
  pipeline: DE,
  preprocess: jE,
  promise: NE,
  record: xE,
  set: OE,
  strictObject: _E,
  string: mf,
  symbol: uE,
  transformer: fd,
  tuple: SE,
  undefined: dE,
  union: bE,
  unknown: pE,
  void: mE,
  NEVER: $E,
  ZodIssueCode: G,
  quotelessJson: Z2,
  ZodError: kr
});
const rl = /^aleo1[a-z0-9]{58}$/i, qE = /^AViewKey1[a-z0-9]{44}$/i, WE = /^APrivateKey1[a-z0-9]{47}$/i, ZE = /^at1[a-z0-9]{58}$/i, FE = /^\d+field$/, HE = /^\d+u32$/, BE = /^\d+u64$/, lS = Dr.string().regex(rl), uS = Dr.string().regex(qE), dS = Dr.string().regex(WE), hS = Dr.string().regex(ZE), fS = Dr.string().regex(FE), pS = Dr.string().regex(HE), gS = Dr.string().regex(BE);
var pd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(pd || (pd = {}));
var hc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(hc || (hc = {}));
var fc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(fc || (fc = {}));
var pc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(pc || (pc = {}));
var gc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(gc || (gc = {}));
var gd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(gd || (gd = {}));
const mS = Dr.nativeEnum(hc), yS = Dr.nativeEnum(fc), vS = Dr.nativeEnum(gc), _S = Dr.nativeEnum(pc), bS = (t, e) => {
  const r = vr(), {
    request: n,
    data: s,
    error: i,
    loading: o
  } = Wi({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: rl.test(e ?? "") ? e : void 0
      }
    }
  }), a = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !o && (Ui("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: o, error: a };
};
var mc = { exports: {} }, Fs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md;
function KE() {
  if (md)
    return Fs;
  md = 1;
  var t = Wo, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var d, f = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l)
      n.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: e, type: a, key: p, ref: m, props: f, _owner: s.current };
  }
  return Fs.Fragment = r, Fs.jsx = o, Fs.jsxs = o, Fs;
}
var Hs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function YE() {
  return yd || (yd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Wo, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, _ = "@@iterator";
    function C(x) {
      if (x === null || typeof x != "object")
        return null;
      var V = v && x[v] || x[_];
      return typeof V == "function" ? V : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var V = arguments.length, ee = new Array(V > 1 ? V - 1 : 0), ge = 1; ge < V; ge++)
          ee[ge - 1] = arguments[ge];
        I("error", x, ee);
      }
    }
    function I(x, V, ee) {
      {
        var ge = M.ReactDebugCurrentFrame, Be = ge.getStackAddendum();
        Be !== "" && (V += "%s", ee = ee.concat([Be]));
        var Ve = ee.map(function(qe) {
          return String(qe);
        });
        Ve.unshift("Warning: " + V), Function.prototype.apply.call(console[x], console, Ve);
      }
    }
    var w = !1, S = !1, y = !1, u = !1, g = !1, N;
    N = Symbol.for("react.module.reference");
    function A(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === i || g || x === s || x === c || x === d || u || x === m || w || S || y || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === f || x.$$typeof === o || x.$$typeof === a || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === N || x.getModuleId !== void 0));
    }
    function $(x, V, ee) {
      var ge = x.displayName;
      if (ge)
        return ge;
      var Be = V.displayName || V.name || "";
      return Be !== "" ? ee + "(" + Be + ")" : ee;
    }
    function J(x) {
      return x.displayName || "Context";
    }
    function K(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var V = x;
            return J(V) + ".Consumer";
          case o:
            var ee = x;
            return J(ee._context) + ".Provider";
          case l:
            return $(x, x.render, "ForwardRef");
          case f:
            var ge = x.displayName || null;
            return ge !== null ? ge : K(x.type) || "Memo";
          case p: {
            var Be = x, Ve = Be._payload, qe = Be._init;
            try {
              return K(qe(Ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, k = 0, B, q, z, W, U, H, de;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function ue() {
      {
        if (k === 0) {
          B = console.log, q = console.info, z = console.warn, W = console.error, U = console.group, H = console.groupCollapsed, de = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        k++;
      }
    }
    function te() {
      {
        if (k--, k === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, x, {
              value: B
            }),
            info: T({}, x, {
              value: q
            }),
            warn: T({}, x, {
              value: z
            }),
            error: T({}, x, {
              value: W
            }),
            group: T({}, x, {
              value: U
            }),
            groupCollapsed: T({}, x, {
              value: H
            }),
            groupEnd: T({}, x, {
              value: de
            })
          });
        }
        k < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = M.ReactCurrentDispatcher, D;
    function j(x, V, ee) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (Be) {
            var ge = Be.stack.trim().match(/\n( *(at )?)/);
            D = ge && ge[1] || "";
          }
        return `
` + D + x;
      }
    }
    var R = !1, h;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      h = new O();
    }
    function Q(x, V) {
      if (!x || R)
        return "";
      {
        var ee = h.get(x);
        if (ee !== void 0)
          return ee;
      }
      var ge;
      R = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ve;
      Ve = ce.current, ce.current = null, ue();
      try {
        if (V) {
          var qe = function() {
            throw Error();
          };
          if (Object.defineProperty(qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(qe, []);
            } catch (br) {
              ge = br;
            }
            Reflect.construct(x, [], qe);
          } else {
            try {
              qe.call();
            } catch (br) {
              ge = br;
            }
            x.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (br) {
            ge = br;
          }
          x();
        }
      } catch (br) {
        if (br && ge && typeof br.stack == "string") {
          for (var Me = br.stack.split(`
`), Lt = ge.stack.split(`
`), ut = Me.length - 1, yt = Lt.length - 1; ut >= 1 && yt >= 0 && Me[ut] !== Lt[yt]; )
            yt--;
          for (; ut >= 1 && yt >= 0; ut--, yt--)
            if (Me[ut] !== Lt[yt]) {
              if (ut !== 1 || yt !== 1)
                do
                  if (ut--, yt--, yt < 0 || Me[ut] !== Lt[yt]) {
                    var Ct = `
` + Me[ut].replace(" at new ", " at ");
                    return x.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", x.displayName)), typeof x == "function" && h.set(x, Ct), Ct;
                  }
                while (ut >= 1 && yt >= 0);
              break;
            }
        }
      } finally {
        R = !1, ce.current = Ve, te(), Error.prepareStackTrace = Be;
      }
      var fn = x ? x.displayName || x.name : "", Fi = fn ? j(fn) : "";
      return typeof x == "function" && h.set(x, Fi), Fi;
    }
    function re(x, V, ee) {
      return Q(x, !1);
    }
    function Le(x) {
      var V = x.prototype;
      return !!(V && V.isReactComponent);
    }
    function je(x, V, ee) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Q(x, Le(x));
      if (typeof x == "string")
        return j(x);
      switch (x) {
        case c:
          return j("Suspense");
        case d:
          return j("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return re(x.render);
          case f:
            return je(x.type, V, ee);
          case p: {
            var ge = x, Be = ge._payload, Ve = ge._init;
            try {
              return je(Ve(Be), V, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, We = {}, ot = M.ReactDebugCurrentFrame;
    function et(x) {
      if (x) {
        var V = x._owner, ee = je(x.type, x._source, V ? V.type : null);
        ot.setExtraStackFrame(ee);
      } else
        ot.setExtraStackFrame(null);
    }
    function $e(x, V, ee, ge, Be) {
      {
        var Ve = Function.call.bind(Oe);
        for (var qe in x)
          if (Ve(x, qe)) {
            var Me = void 0;
            try {
              if (typeof x[qe] != "function") {
                var Lt = Error((ge || "React class") + ": " + ee + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Lt.name = "Invariant Violation", Lt;
              }
              Me = x[qe](V, qe, ge, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ut) {
              Me = ut;
            }
            Me && !(Me instanceof Error) && (et(Be), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ee, qe, typeof Me), et(null)), Me instanceof Error && !(Me.message in We) && (We[Me.message] = !0, et(Be), b("Failed %s type: %s", ee, Me.message), et(null));
          }
      }
    }
    var ze = Array.isArray;
    function Ce(x) {
      return ze(x);
    }
    function Re(x) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, ee = V && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ee;
      }
    }
    function Te(x) {
      try {
        return Ee(x), !1;
      } catch {
        return !0;
      }
    }
    function Ee(x) {
      return "" + x;
    }
    function be(x) {
      if (Te(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(x)), Ee(x);
    }
    var pe = M.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, ve, Ue;
    Ue = {};
    function Ze(x) {
      if (Oe.call(x, "ref")) {
        var V = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ke(x) {
      if (Oe.call(x, "key")) {
        var V = Object.getOwnPropertyDescriptor(x, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ye(x, V) {
      if (typeof x.ref == "string" && pe.current && V && pe.current.stateNode !== V) {
        var ee = K(pe.current.type);
        Ue[ee] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(pe.current.type), x.ref), Ue[ee] = !0);
      }
    }
    function He(x, V) {
      {
        var ee = function() {
          De || (De = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ee.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function ar(x, V) {
      {
        var ee = function() {
          ve || (ve = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ee.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var hr = function(x, V, ee, ge, Be, Ve, qe) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: x,
        key: V,
        ref: ee,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: Ve
      };
      return Me._store = {}, Object.defineProperty(Me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function Mr(x, V, ee, ge, Be) {
      {
        var Ve, qe = {}, Me = null, Lt = null;
        ee !== void 0 && (be(ee), Me = "" + ee), Ke(V) && (be(V.key), Me = "" + V.key), Ze(V) && (Lt = V.ref, Ye(V, Be));
        for (Ve in V)
          Oe.call(V, Ve) && !Pe.hasOwnProperty(Ve) && (qe[Ve] = V[Ve]);
        if (x && x.defaultProps) {
          var ut = x.defaultProps;
          for (Ve in ut)
            qe[Ve] === void 0 && (qe[Ve] = ut[Ve]);
        }
        if (Me || Lt) {
          var yt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Me && He(qe, yt), Lt && ar(qe, yt);
        }
        return hr(x, Me, Lt, Be, ge, pe.current, qe);
      }
    }
    var At = M.ReactCurrentOwner, zr = M.ReactDebugCurrentFrame;
    function fr(x) {
      if (x) {
        var V = x._owner, ee = je(x.type, x._source, V ? V.type : null);
        zr.setExtraStackFrame(ee);
      } else
        zr.setExtraStackFrame(null);
    }
    var hn;
    hn = !1;
    function at(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function nt() {
      {
        if (At.current) {
          var x = K(At.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function pt(x) {
      {
        if (x !== void 0) {
          var V = x.fileName.replace(/^.*[\\\/]/, ""), ee = x.lineNumber;
          return `

Check your code at ` + V + ":" + ee + ".";
        }
        return "";
      }
    }
    var lt = {};
    function gt(x) {
      {
        var V = nt();
        if (!V) {
          var ee = typeof x == "string" ? x : x.displayName || x.name;
          ee && (V = `

Check the top-level render call using <` + ee + ">.");
        }
        return V;
      }
    }
    function st(x, V) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ee = gt(V);
        if (lt[ee])
          return;
        lt[ee] = !0;
        var ge = "";
        x && x._owner && x._owner !== At.current && (ge = " It was passed a child from " + K(x._owner.type) + "."), fr(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ge), fr(null);
      }
    }
    function bt(x, V) {
      {
        if (typeof x != "object")
          return;
        if (Ce(x))
          for (var ee = 0; ee < x.length; ee++) {
            var ge = x[ee];
            at(ge) && st(ge, V);
          }
        else if (at(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Be = C(x);
          if (typeof Be == "function" && Be !== x.entries)
            for (var Ve = Be.call(x), qe; !(qe = Ve.next()).done; )
              at(qe.value) && st(qe.value, V);
        }
      }
    }
    function xt(x) {
      {
        var V = x.type;
        if (V == null || typeof V == "string")
          return;
        var ee;
        if (typeof V == "function")
          ee = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === f))
          ee = V.propTypes;
        else
          return;
        if (ee) {
          var ge = K(V);
          $e(ee, x.props, "prop", ge, x);
        } else if (V.PropTypes !== void 0 && !hn) {
          hn = !0;
          var Be = K(V);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function It(x) {
      {
        for (var V = Object.keys(x.props), ee = 0; ee < V.length; ee++) {
          var ge = V[ee];
          if (ge !== "children" && ge !== "key") {
            fr(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), fr(null);
            break;
          }
        }
        x.ref !== null && (fr(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), fr(null));
      }
    }
    function wt(x, V, ee, ge, Be, Ve) {
      {
        var qe = A(x);
        if (!qe) {
          var Me = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Lt = pt(Be);
          Lt ? Me += Lt : Me += nt();
          var ut;
          x === null ? ut = "null" : Ce(x) ? ut = "array" : x !== void 0 && x.$$typeof === e ? (ut = "<" + (K(x.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, Me);
        }
        var yt = Mr(x, V, ee, Be, Ve);
        if (yt == null)
          return yt;
        if (qe) {
          var Ct = V.children;
          if (Ct !== void 0)
            if (ge)
              if (Ce(Ct)) {
                for (var fn = 0; fn < Ct.length; fn++)
                  bt(Ct[fn], x);
                Object.freeze && Object.freeze(Ct);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(Ct, x);
        }
        return x === n ? It(yt) : xt(yt), yt;
      }
    }
    function Ot(x, V, ee) {
      return wt(x, V, ee, !0);
    }
    function Et(x, V, ee) {
      return wt(x, V, ee, !1);
    }
    var mt = Et, tt = Ot;
    Hs.Fragment = n, Hs.jsx = mt, Hs.jsxs = tt;
  }()), Hs;
}
process.env.NODE_ENV === "production" ? mc.exports = KE() : mc.exports = YE();
var vd = mc.exports;
function dn() {
  return dn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, dn.apply(this, arguments);
}
/**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
const _f = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z"
}, GE = Object.keys(_f).join("|"), QE = new RegExp(GE, "g");
function JE(t) {
  return t.replace(QE, (e) => _f[e]);
}
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const ir = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function XE(t, e, r) {
  var n;
  if (r = r || {}, r.threshold = (n = r.threshold) != null ? n : ir.MATCHES, !r.accessors) {
    const o = _d(t, e, r);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: t,
      rank: o,
      accessorIndex: -1,
      accessorThreshold: r.threshold,
      passed: o >= r.threshold
    };
  }
  const s = n3(t, r.accessors), i = {
    rankedValue: t,
    rank: ir.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: r.threshold,
    passed: !1
  };
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    let l = _d(a.itemValue, e, r);
    const {
      minRanking: c,
      maxRanking: d,
      threshold: f = r.threshold
    } = a.attributes;
    l < c && l >= ir.MATCHES ? l = c : l > d && (l = d), l = Math.min(l, d), l >= f && l > i.rank && (i.rank = l, i.passed = !0, i.accessorIndex = o, i.accessorThreshold = f, i.rankedValue = a.itemValue);
  }
  return i;
}
function _d(t, e, r) {
  return t = bd(t, r), e = bd(e, r), e.length > t.length ? ir.NO_MATCH : t === e ? ir.CASE_SENSITIVE_EQUAL : (t = t.toLowerCase(), e = e.toLowerCase(), t === e ? ir.EQUAL : t.startsWith(e) ? ir.STARTS_WITH : t.includes(` ${e}`) ? ir.WORD_STARTS_WITH : t.includes(e) ? ir.CONTAINS : e.length === 1 ? ir.NO_MATCH : e3(t).includes(e) ? ir.ACRONYM : t3(t, e));
}
function e3(t) {
  let e = "";
  return t.split(" ").forEach((n) => {
    n.split("-").forEach((i) => {
      e += i.substr(0, 1);
    });
  }), e;
}
function t3(t, e) {
  let r = 0, n = 0;
  function s(l, c, d) {
    for (let f = d, p = c.length; f < p; f++)
      if (c[f] === l)
        return r += 1, f + 1;
    return -1;
  }
  function i(l) {
    const c = 1 / l, d = r / e.length;
    return ir.MATCHES + d * c;
  }
  const o = s(e[0], t, 0);
  if (o < 0)
    return ir.NO_MATCH;
  n = o;
  for (let l = 1, c = e.length; l < c; l++) {
    const d = e[l];
    if (n = s(d, t, n), !(n > -1))
      return ir.NO_MATCH;
  }
  const a = n - o;
  return i(a);
}
function bd(t, e) {
  let {
    keepDiacritics: r
  } = e;
  return t = `${t}`, r || (t = JE(t)), t;
}
function r3(t, e) {
  let r = e;
  typeof e == "object" && (r = e.accessor);
  const n = r(t);
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function n3(t, e) {
  const r = [];
  for (let n = 0, s = e.length; n < s; n++) {
    const i = e[n], o = s3(i), a = r3(t, i);
    for (let l = 0, c = a.length; l < c; l++)
      r.push({
        itemValue: a[l],
        attributes: o
      });
  }
  return r;
}
const wd = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function s3(t) {
  return typeof t == "function" ? wd : {
    ...wd,
    ...t
  };
}
const i3 = (t) => {
  try {
    const e = localStorage.getItem(t);
    return typeof e == "string" ? JSON.parse(e) : void 0;
  } catch {
    return;
  }
};
function Sn(t, e) {
  const [r, n] = L.useState();
  L.useEffect(() => {
    const i = i3(t);
    n(typeof i > "u" || i === null ? typeof e == "function" ? e() : e : i);
  }, [e, t]);
  const s = L.useCallback((i) => {
    n((o) => {
      let a = i;
      typeof i == "function" && (a = i(o));
      try {
        localStorage.setItem(t, JSON.stringify(a));
      } catch {
      }
      return a;
    });
  }, [t]);
  return [r, s];
}
var o3 = (
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
), bf = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new o3();
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
), a3 = /* @__PURE__ */ function() {
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
}(), c3 = (
  /** @class */
  function(t) {
    a3(e, t);
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
  }(bf)
), l3 = function(t, e) {
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
};
function u3(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function d3(t, e) {
  var r = u3(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function ks(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = l3(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function po(t, e) {
  return t.indexOf(e) !== -1;
}
function Ed(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var h3 = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return d3(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), f3 = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, wf = function(t) {
  return typeof t > "u";
}, p3 = function(t) {
  return t === null;
}, Ii = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, yc = function(t) {
  return Ii(t) && Object.keys(t).length === 0;
}, An = function(t) {
  return Array.isArray(t);
}, g3 = function(t) {
  return typeof t == "string";
}, m3 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, y3 = function(t) {
  return typeof t == "boolean";
}, v3 = function(t) {
  return t instanceof RegExp;
}, Oi = function(t) {
  return t instanceof Map;
}, Ci = function(t) {
  return t instanceof Set;
}, Ef = function(t) {
  return f3(t) === "Symbol";
}, _3 = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, b3 = function(t) {
  return t instanceof Error;
}, Sd = function(t) {
  return typeof t == "number" && isNaN(t);
}, w3 = function(t) {
  return y3(t) || p3(t) || wf(t) || m3(t) || g3(t) || Ef(t);
}, E3 = function(t) {
  return typeof t == "bigint";
}, S3 = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, x3 = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, I3 = function(t) {
  return t instanceof URL;
}, Sf = function(t) {
  return t.replace(/\./g, "\\.");
}, Sa = function(t) {
  return t.map(String).map(Sf).join(".");
}, Js = function(t) {
  for (var e = [], r = "", n = 0; n < t.length; n++) {
    var s = t.charAt(n), i = s === "\\" && t.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var o = s === ".";
    if (o) {
      e.push(r), r = "";
      continue;
    }
    r += s;
  }
  var a = r;
  return e.push(a), e;
}, vc = function() {
  return vc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, vc.apply(this, arguments);
}, _c = function(t, e) {
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
}, bc = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Wr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var xf = [
  Wr(wf, "undefined", function() {
    return null;
  }, function() {
  }),
  Wr(E3, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : (console.error("Please add a BigInt polyfill."), t);
  }),
  Wr(_3, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Wr(b3, "Error", function(t, e) {
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
  Wr(v3, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Wr(
    Ci,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return bc([], _c(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Wr(Oi, "map", function(t) {
    return bc([], _c(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Wr(function(t) {
    return Sd(t) || S3(t);
  }, "number", function(t) {
    return Sd(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Wr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Wr(I3, "URL", function(t) {
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
var If = ia(function(t, e) {
  if (Ef(t)) {
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
}), O3 = [
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
}, {}), Of = ia(x3, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return bc([], _c(t));
}, function(t, e) {
  var r = O3[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function Cf(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Tf = ia(Cf, function(t, e) {
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
}), kf = ia(function(t, e) {
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
}), C3 = [Tf, If, kf, Of], xd = function(t, e) {
  var r = Ed(C3, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Ed(xf, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Rf = {};
xf.forEach(function(t) {
  Rf[t.annotation] = t;
});
var T3 = function(t, e, r) {
  if (An(e))
    switch (e[0]) {
      case "symbol":
        return If.untransform(t, e, r);
      case "class":
        return Tf.untransform(t, e, r);
      case "custom":
        return kf.untransform(t, e, r);
      case "typed-array":
        return Of.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Rf[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, vs = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Pf(t) {
  if (po(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (po(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (po(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var k3 = function(t, e) {
  Pf(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (Ci(t))
      t = vs(t, +n);
    else if (Oi(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", o = vs(t, s);
      switch (i) {
        case "key":
          t = o;
          break;
        case "value":
          t = t.get(o);
          break;
      }
    } else
      t = t[n];
  }
  return t;
}, wc = function(t, e, r) {
  if (Pf(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (An(n)) {
      var o = +i;
      n = n[o];
    } else if (Ii(n))
      n = n[i];
    else if (Ci(n)) {
      var a = +i;
      n = vs(n, a);
    } else if (Oi(n)) {
      var l = s === e.length - 2;
      if (l)
        break;
      var a = +i, c = +e[++s] == 0 ? "key" : "value", d = vs(n, a);
      switch (c) {
        case "key":
          n = d;
          break;
        case "value":
          n = n.get(d);
          break;
      }
    }
  }
  var f = e[e.length - 1];
  if (An(n) ? n[+f] = r(n[+f]) : Ii(n) && (n[f] = r(n[f])), Ci(n)) {
    var p = vs(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Oi(n)) {
    var a = +e[e.length - 2], v = vs(n, a), c = +f == 0 ? "key" : "value";
    switch (c) {
      case "key": {
        var _ = r(v);
        n.set(_, n.get(v)), _ !== v && n.delete(v);
        break;
      }
      case "value": {
        n.set(v, r(n.get(v)));
        break;
      }
    }
  }
  return t;
}, nn = function(t, e) {
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
}, xn = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Ec(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!An(t)) {
      ks(t, function(o, a) {
        return Ec(o, e, xn(xn([], nn(r)), nn(Js(a))));
      });
      return;
    }
    var n = nn(t, 2), s = n[0], i = n[1];
    i && ks(i, function(o, a) {
      Ec(o, e, xn(xn([], nn(r)), nn(Js(a))));
    }), e(s, r);
  }
}
function R3(t, e, r) {
  return Ec(e, function(n, s) {
    t = wc(t, s, function(i) {
      return T3(i, n, r);
    });
  }), t;
}
function P3(t, e) {
  function r(o, a) {
    var l = k3(t, Js(a));
    o.map(Js).forEach(function(c) {
      t = wc(t, c, function() {
        return l;
      });
    });
  }
  if (An(e)) {
    var n = nn(e, 2), s = n[0], i = n[1];
    s.forEach(function(o) {
      t = wc(t, Js(o), function() {
        return t;
      });
    }), i && ks(i, r);
  } else
    ks(e, r);
  return t;
}
var N3 = function(t, e) {
  return Ii(t) || An(t) || Oi(t) || Ci(t) || Cf(t, e);
};
function A3(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function L3(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(l) {
        return l.map(String);
      }).sort(function(l, c) {
        return l.length - c.length;
      }));
      var i = nn(s), o = i[0], a = i.slice(1);
      o.length === 0 ? n = a.map(Sa) : r[Sa(o)] = a.map(Sa);
    }
  }), n ? yc(r) ? [n] : [n, r] : yc(r) ? void 0 : r;
}
var Nf = function(t, e, r, n, s, i, o) {
  var a;
  s === void 0 && (s = []), i === void 0 && (i = []), o === void 0 && (o = /* @__PURE__ */ new Map());
  var l = w3(t);
  if (!l) {
    A3(t, s, e);
    var c = o.get(t);
    if (c)
      return n ? {
        transformedValue: null
      } : c;
  }
  if (!N3(t, r)) {
    var d = xd(t, r), f = d ? {
      transformedValue: d.value,
      annotations: [d.type]
    } : {
      transformedValue: t
    };
    return l || o.set(t, f), f;
  }
  if (po(i, t))
    return {
      transformedValue: null
    };
  var p = xd(t, r), m = (a = p == null ? void 0 : p.value) !== null && a !== void 0 ? a : t, v = An(m) ? [] : {}, _ = {};
  ks(m, function(M, b) {
    var I = Nf(M, e, r, n, xn(xn([], nn(s)), [b]), xn(xn([], nn(i)), [t]), o);
    v[b] = I.transformedValue, An(I.annotations) ? _[b] = I.annotations : Ii(I.annotations) && ks(I.annotations, function(w, S) {
      _[Sf(b) + "." + S] = w;
    });
  });
  var C = yc(_) ? {
    transformedValue: v,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: v,
    annotations: p ? [p.type, _] : _
  };
  return l || o.set(t, C), C;
};
function Af(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Id(t) {
  return Af(t) === "Array";
}
function j3(t) {
  if (Af(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function D3(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Sc(t, e = {}) {
  if (Id(t))
    return t.map((s) => Sc(s, e));
  if (!j3(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Id(e.props) && !e.props.includes(i))
      return s;
    const o = t[i], a = Sc(o, e);
    return D3(s, i, a, t, e.nonenumerable), s;
  }, {});
}
var Zn = function() {
  return Zn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Zn.apply(this, arguments);
}, M3 = function(t, e) {
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
}, z3 = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Lf = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new c3(), this.symbolRegistry = new bf(function(i) {
        var o;
        return (o = i.description) !== null && o !== void 0 ? o : "";
      }), this.customTransformerRegistry = new h3(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Nf(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Zn(Zn({}, s.meta), { values: n.annotations }));
      var i = L3(r, this.dedupe);
      return i && (s.meta = Zn(Zn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = Sc(r);
      return n != null && n.values && (s = R3(s, n.values, this)), n != null && n.referentialEqualities && (s = P3(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Zn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, z3([], M3(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
);
const Ge = {
  background: "#0b1521",
  backgroundAlt: "#132337",
  foreground: "white",
  gray: "#3f4e60",
  grayAlt: "#222e3e",
  inputBackgroundColor: "#fff",
  inputTextColor: "#000",
  success: "#00ab52",
  danger: "#ff0085",
  active: "#006bff",
  paused: "#8c49eb",
  warning: "#ffb200"
}, jf = /* @__PURE__ */ L.createContext(Ge);
function Df({
  theme: t,
  ...e
}) {
  return /* @__PURE__ */ L.createElement(jf.Provider, dn({
    value: t
  }, e));
}
function U3() {
  return L.useContext(jf);
}
function V3(t) {
  const [e, r] = L.useState(() => {
    if (typeof window < "u")
      return window.matchMedia(t).matches;
  });
  return L.useEffect(() => {
    if (typeof window < "u") {
      const n = window.matchMedia(t), s = ({
        matches: i
      }) => r(i);
      return n.addListener(s), () => {
        n.removeListener(s);
      };
    }
  }, [e, t, r]), e;
}
function Mf({
  queryState: t,
  observerCount: e,
  isStale: r,
  theme: n
}) {
  return t.fetchStatus === "fetching" ? n.active : e ? t.fetchStatus === "paused" ? n.paused : r ? n.warning : n.success : n.gray;
}
function ms(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function rr(t, e, r = {}) {
  return /* @__PURE__ */ L.forwardRef(({
    style: n,
    ...s
  }, i) => {
    const o = U3(), a = Object.entries(r).reduce((l, [c, d]) => V3(c) ? {
      ...l,
      ...typeof d == "function" ? d(s, o) : d
    } : l, {});
    return /* @__PURE__ */ L.createElement(t, {
      ...s,
      style: {
        ...typeof e == "function" ? e(s, o) : e,
        ...n,
        ...a
      },
      ref: i
    });
  });
}
function $3() {
  const t = L.useRef(!1), e = L.useCallback(() => t.current, []);
  return L.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), e;
}
const zf = (t, e = !1) => {
  const {
    json: r
  } = Lf.serialize(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, io = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, q3 = (t, e) => t.queryHash.localeCompare(e.queryHash), Uf = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, W3 = (t, e) => io(t) === io(e) ? Uf(t, e) : io(t) > io(e) ? 1 : -1, xa = {
  "Status > Last Updated": W3,
  "Query Hash": q3,
  "Last Updated": Uf
}, xc = 70, Ti = 500, Z3 = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function qo(t) {
  return ["left", "right"].includes(t);
}
function Vf(t) {
  return Z3[t];
}
function nl(t, e) {
  return "" + t + (e.charAt(0).toUpperCase() + e.slice(1));
}
function F3({
  position: t = "bottom",
  height: e,
  width: r,
  devtoolsTheme: n,
  isOpen: s,
  isResizing: i,
  panelStyle: o
}) {
  const a = Vf(t), l = nl("border", a), c = qo(t);
  return {
    ...o,
    direction: "ltr",
    position: "fixed",
    [t]: 0,
    [l]: "1px solid " + n.gray,
    transformOrigin: a,
    boxShadow: "0 0 20px rgba(0,0,0,.3)",
    zIndex: 99999,
    // visibility will be toggled after transitions, but set initial state here
    visibility: s ? "visible" : "hidden",
    ...i ? {
      transition: "none"
    } : {
      transition: "all .2s ease"
    },
    ...s ? {
      opacity: 1,
      pointerEvents: "all",
      transform: c ? "translateX(0) scale(1)" : "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: "none",
      transform: c ? "translateX(15px) scale(1.02)" : "translateY(15px) scale(1.02)"
    },
    ...c ? {
      top: 0,
      height: "100vh",
      maxWidth: "90%",
      width: typeof r == "number" && r >= xc ? r : Ti
    } : {
      left: 0,
      width: "100%",
      maxHeight: "90%",
      height: typeof e == "number" && e >= xc ? e : Ti
    }
  };
}
function H3(t = "bottom") {
  const e = qo(t), r = Vf(t), n = nl("margin", r);
  return {
    position: "absolute",
    cursor: e ? "col-resize" : "row-resize",
    zIndex: 1e5,
    [r]: 0,
    [n]: "-4px",
    ...e ? {
      top: 0,
      height: "100%",
      width: "4px"
    } : {
      width: "100%",
      height: "4px"
    }
  };
}
const B3 = rr("div", (t, e) => ({
  fontSize: "clamp(12px, 1.5vw, 14px)",
  fontFamily: "sans-serif",
  display: "flex",
  backgroundColor: e.background,
  color: e.foreground
}), {
  "(max-width: 700px)": {
    flexDirection: "column"
  },
  "(max-width: 600px)": {
    fontSize: ".9em"
    // flexDirection: 'column',
  }
}), K3 = rr("div", () => ({
  flex: "1 1 500px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "100%"
}), {
  "(max-width: 700px)": (t, e) => ({
    borderTop: "2px solid " + e.gray
  })
}), Zr = rr("button", (t, e) => ({
  appearance: "none",
  fontSize: ".9em",
  fontWeight: "bold",
  background: e.gray,
  border: "0",
  borderRadius: ".3em",
  color: "white",
  padding: ".5em",
  opacity: t.disabled ? ".5" : void 0,
  cursor: "pointer"
})), Y3 = rr("span", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.9em"
}), Bs = rr("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: ".2em .4em",
  fontWeight: "bold",
  textShadow: "0 0 10px black",
  borderRadius: ".2em"
}), sn = rr("code", {
  fontSize: ".9em",
  color: "inherit",
  background: "inherit"
}), G3 = rr("input", (t, e) => ({
  backgroundColor: e.inputBackgroundColor,
  border: 0,
  borderRadius: ".2em",
  color: e.inputTextColor,
  fontSize: ".9em",
  lineHeight: "1.3",
  padding: ".3em .4em"
})), Ic = rr("select", (t, e) => ({
  display: "inline-block",
  fontSize: ".9em",
  fontFamily: "sans-serif",
  fontWeight: "normal",
  lineHeight: "1.3",
  padding: ".3em 1.5em .3em .5em",
  height: "auto",
  border: 0,
  borderRadius: ".2em",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundColor: e.inputBackgroundColor,
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right .55em center",
  backgroundSize: ".65em auto, 100%",
  color: e.inputTextColor
}), {
  "(max-width: 500px)": {
    display: "none"
  }
});
function Oc({
  text: t
}) {
  return /* @__PURE__ */ L.createElement("span", {
    style: {
      position: "absolute",
      width: "0.1px",
      height: "0.1px",
      overflow: "hidden"
    }
  }, t);
}
const Od = rr("div", {
  fontFamily: "Menlo, monospace",
  fontSize: "1em",
  lineHeight: "1.7",
  outline: "none",
  wordBreak: "break-word"
}), Q3 = rr("span", {
  color: "white"
}), J3 = rr("button", {
  cursor: "pointer",
  color: "white"
}), X3 = rr("button", {
  cursor: "pointer",
  color: "inherit",
  font: "inherit",
  outline: "inherit",
  background: "transparent",
  border: "none",
  padding: 0
}), e6 = ({
  value: t
}) => {
  const [e, r] = L.useState("NoCopy");
  return /* @__PURE__ */ L.createElement("button", {
    onClick: e === "NoCopy" ? () => {
      navigator.clipboard.writeText(Lf.stringify(t)).then(() => {
        r("SuccessCopy"), setTimeout(() => {
          r("NoCopy");
        }, 1500);
      }, (n) => {
        console.error("Failed to copy: ", n), r("ErrorCopy"), setTimeout(() => {
          r("NoCopy");
        }, 1500);
      });
    } : void 0,
    style: {
      cursor: "pointer",
      color: "inherit",
      font: "inherit",
      outline: "inherit",
      background: "transparent",
      border: "none",
      padding: 0
    }
  }, e === "NoCopy" ? /* @__PURE__ */ L.createElement(n6, null) : e === "SuccessCopy" ? /* @__PURE__ */ L.createElement(i6, null) : /* @__PURE__ */ L.createElement(s6, null));
}, t6 = rr("span", (t, e) => ({
  color: e.danger
})), Ia = rr("div", {
  marginLeft: ".1em",
  paddingLeft: "1em",
  borderLeft: "2px solid rgba(0,0,0,.15)"
}), r6 = rr("span", {
  color: "grey",
  fontSize: ".7em"
}), Cd = ({
  expanded: t,
  style: e = {}
}) => /* @__PURE__ */ L.createElement("span", {
  style: {
    display: "inline-block",
    transition: "all .1s ease",
    transform: "rotate(" + (t ? 90 : 0) + "deg) " + (e.transform || ""),
    ...e
  }
}, "▶"), n6 = () => /* @__PURE__ */ L.createElement("span", {
  "aria-label": "Copy object to clipboard",
  title: "Copy object to clipboard",
  style: {
    paddingLeft: "1em"
  }
}, /* @__PURE__ */ L.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10"
}, /* @__PURE__ */ L.createElement("path", {
  fill: "currentColor",
  d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
}), /* @__PURE__ */ L.createElement("path", {
  fill: "currentColor",
  d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
}))), s6 = () => /* @__PURE__ */ L.createElement("span", {
  "aria-label": "Failed copying to clipboard",
  title: "Failed copying to clipboard",
  style: {
    paddingLeft: "1em",
    display: "flex",
    alignItems: "center"
  }
}, /* @__PURE__ */ L.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10",
  display: "block"
}, /* @__PURE__ */ L.createElement("path", {
  fill: "red",
  d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
})), /* @__PURE__ */ L.createElement("span", {
  style: {
    color: "red",
    fontSize: "12px",
    paddingLeft: "4px",
    position: "relative",
    top: "2px"
  }
}, "See console")), i6 = () => /* @__PURE__ */ L.createElement("span", {
  "aria-label": "Object copied to clipboard",
  title: "Object copied to clipboard",
  style: {
    paddingLeft: "1em",
    display: "inline-block",
    verticalAlign: "middle"
  }
}, /* @__PURE__ */ L.createElement("svg", {
  height: "16",
  viewBox: "0 0 16 16",
  width: "16",
  display: "block"
}, /* @__PURE__ */ L.createElement("path", {
  fill: "green",
  d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
})));
function o6(t, e) {
  if (e < 1)
    return [];
  let r = 0;
  const n = [];
  for (; r < t.length; )
    n.push(t.slice(r, r + e)), r = r + e;
  return n;
}
const a6 = ({
  handleEntry: t,
  label: e,
  value: r,
  subEntries: n = [],
  subEntryPages: s = [],
  type: i,
  expanded: o = !1,
  copyable: a = !1,
  toggleExpanded: l,
  pageSize: c
}) => {
  const [d, f] = L.useState([]);
  return /* @__PURE__ */ L.createElement(Od, {
    key: e
  }, s.length ? /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(X3, {
    onClick: () => l()
  }, /* @__PURE__ */ L.createElement(Cd, {
    expanded: o
  }), " ", e, " ", /* @__PURE__ */ L.createElement(r6, null, String(i).toLowerCase() === "iterable" ? "(Iterable) " : "", n.length, " ", n.length > 1 ? "items" : "item")), a ? /* @__PURE__ */ L.createElement(e6, {
    value: r
  }) : null, o ? s.length === 1 ? /* @__PURE__ */ L.createElement(Ia, null, n.map(t)) : /* @__PURE__ */ L.createElement(Ia, null, s.map((p, m) => /* @__PURE__ */ L.createElement("div", {
    key: m
  }, /* @__PURE__ */ L.createElement(Od, null, /* @__PURE__ */ L.createElement(J3, {
    onClick: () => f((v) => v.includes(m) ? v.filter((_) => _ !== m) : [...v, m])
  }, /* @__PURE__ */ L.createElement(Cd, {
    expanded: o
  }), " [", m * c, " ...", " ", m * c + c - 1, "]"), d.includes(m) ? /* @__PURE__ */ L.createElement(Ia, null, p.map(t)) : null)))) : null) : /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(Q3, null, e, ":"), " ", /* @__PURE__ */ L.createElement(t6, null, zf(r))));
};
function c6(t) {
  return Symbol.iterator in t;
}
function Cc({
  value: t,
  defaultExpanded: e,
  renderer: r = a6,
  pageSize: n = 100,
  copyable: s = !1,
  ...i
}) {
  const [o, a] = L.useState(!!e), l = L.useCallback(() => a((m) => !m), []);
  let c = typeof t, d = [];
  const f = (m) => {
    const v = e === !0 ? {
      [m.label]: !0
    } : e == null ? void 0 : e[m.label];
    return {
      ...m,
      defaultExpanded: v
    };
  };
  Array.isArray(t) ? (c = "array", d = t.map((m, v) => f({
    label: v.toString(),
    value: m
  }))) : t !== null && typeof t == "object" && c6(t) && typeof t[Symbol.iterator] == "function" ? (c = "Iterable", d = Array.from(t, (m, v) => f({
    label: v.toString(),
    value: m
  }))) : typeof t == "object" && t !== null && (c = "object", d = Object.entries(t).map(([m, v]) => f({
    label: m,
    value: v
  })));
  const p = o6(d, n);
  return r({
    handleEntry: (m) => /* @__PURE__ */ L.createElement(Cc, dn({
      key: m.label,
      value: t,
      renderer: r,
      copyable: s
    }, i, m)),
    type: c,
    subEntries: d,
    subEntryPages: p,
    value: t,
    expanded: o,
    copyable: s,
    toggleExpanded: l,
    pageSize: n,
    ...i
  });
}
function $f(t) {
  return /* @__PURE__ */ L.createElement("svg", dn({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, t), /* @__PURE__ */ L.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /* @__PURE__ */ L.createElement("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}
var Tc = { exports: {} }, Oa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function l6() {
  if (Td)
    return Oa;
  Td = 1;
  var t = Wo;
  function e(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, o = t.useDebugValue;
  function a(f, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), _ = v[0].inst, C = v[1];
    return i(function() {
      _.value = m, _.getSnapshot = p, l(_) && C({ inst: _ });
    }, [f, m, p]), s(function() {
      return l(_) && C({ inst: _ }), f(function() {
        l(_) && C({ inst: _ });
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
  function c(f, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return Oa.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, Oa;
}
var Ca = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function u6() {
  return kd || (kd = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Wo, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(I) {
      {
        for (var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), y = 1; y < w; y++)
          S[y - 1] = arguments[y];
        n("error", I, S);
      }
    }
    function n(I, w, S) {
      {
        var y = e.ReactDebugCurrentFrame, u = y.getStackAddendum();
        u !== "" && (w += "%s", S = S.concat([u]));
        var g = S.map(function(N) {
          return String(N);
        });
        g.unshift("Warning: " + w), Function.prototype.apply.call(console[I], console, g);
      }
    }
    function s(I, w) {
      return I === w && (I !== 0 || 1 / I === 1 / w) || I !== I && w !== w;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = t.useState, a = t.useEffect, l = t.useLayoutEffect, c = t.useDebugValue, d = !1, f = !1;
    function p(I, w, S) {
      d || t.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var y = w();
      if (!f) {
        var u = w();
        i(y, u) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var g = o({
        inst: {
          value: y,
          getSnapshot: w
        }
      }), N = g[0].inst, A = g[1];
      return l(function() {
        N.value = y, N.getSnapshot = w, m(N) && A({
          inst: N
        });
      }, [I, y, w]), a(function() {
        m(N) && A({
          inst: N
        });
        var $ = function() {
          m(N) && A({
            inst: N
          });
        };
        return I($);
      }, [I]), c(y), y;
    }
    function m(I) {
      var w = I.getSnapshot, S = I.value;
      try {
        var y = w();
        return !i(S, y);
      } catch {
        return !0;
      }
    }
    function v(I, w, S) {
      return w();
    }
    var _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C = !_, M = C ? v : p, b = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : M;
    Ca.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ca;
}
process.env.NODE_ENV === "production" ? Tc.exports = l6() : Tc.exports = u6();
var d6 = Tc.exports;
function h6({
  initialIsOpen: t,
  panelProps: e = {},
  closeButtonProps: r = {},
  toggleButtonProps: n = {},
  position: s = "bottom-left",
  containerElement: i = "aside",
  context: o,
  styleNonce: a,
  panelPosition: l = "bottom",
  errorTypes: c = []
}) {
  const d = L.useRef(null), f = L.useRef(null), [p, m] = Sn("reactQueryDevtoolsOpen", t), [v, _] = Sn("reactQueryDevtoolsHeight", Ti), [C, M] = Sn("reactQueryDevtoolsWidth", Ti), [b = "bottom", I] = Sn("reactQueryDevtoolsPanelPosition", l), [w, S] = L.useState(!1), [y, u] = L.useState(!1), g = $3(), N = (B, q) => {
    if (!B || q.button !== 0)
      return;
    const z = qo(b);
    u(!0);
    const {
      height: W,
      width: U
    } = B.getBoundingClientRect(), H = q.clientX, de = q.clientY;
    let F = 0;
    const ue = (ce) => {
      ce.preventDefault(), z ? (F = U + (b === "right" ? H - ce.clientX : ce.clientX - H), M(F)) : (F = W + (b === "bottom" ? de - ce.clientY : ce.clientY - de), _(F)), F < xc ? m(!1) : m(!0);
    }, te = () => {
      y && u(!1), document.removeEventListener("mousemove", ue, !1), document.removeEventListener("mouseUp", te, !1);
    };
    document.addEventListener("mousemove", ue, !1), document.addEventListener("mouseup", te, !1);
  };
  L.useEffect(() => {
    S(p ?? !1);
  }, [p, w, S]), L.useEffect(() => {
    const B = f.current;
    if (B) {
      const q = () => {
        w && (B.style.visibility = "visible");
      }, z = () => {
        w || (B.style.visibility = "hidden");
      };
      return B.addEventListener("transitionstart", q), B.addEventListener("transitionend", z), () => {
        B.removeEventListener("transitionstart", q), B.removeEventListener("transitionend", z);
      };
    }
  }, [w]), L.useEffect(() => {
    var B;
    if (w && (B = d.current) != null && B.parentElement) {
      const {
        parentElement: q
      } = d.current, z = nl("padding", b), W = qo(b), U = (({
        padding: de,
        paddingTop: F,
        paddingBottom: ue,
        paddingLeft: te,
        paddingRight: ce
      }) => ({
        padding: de,
        paddingTop: F,
        paddingBottom: ue,
        paddingLeft: te,
        paddingRight: ce
      }))(q.style), H = () => {
        q.style.padding = "0px", q.style.paddingTop = "0px", q.style.paddingBottom = "0px", q.style.paddingLeft = "0px", q.style.paddingRight = "0px", q.style[z] = (W ? C : v) + "px";
      };
      if (H(), typeof window < "u")
        return window.addEventListener("resize", H), () => {
          window.removeEventListener("resize", H), Object.entries(U).forEach(([de, F]) => {
            q.style[de] = F;
          });
        };
    }
  }, [w, b, v, C]);
  const {
    style: A = {},
    ...$
  } = e, {
    style: J = {},
    onClick: K,
    ...T
  } = n, k = F3({
    position: b,
    devtoolsTheme: Ge,
    isOpen: w,
    height: v,
    width: C,
    isResizing: y,
    panelStyle: A
  });
  return g() ? /* @__PURE__ */ L.createElement(i, {
    ref: d,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /* @__PURE__ */ L.createElement(Df, {
    theme: Ge
  }, /* @__PURE__ */ L.createElement(qf, dn({
    ref: f,
    context: o,
    styleNonce: a,
    position: b,
    onPositionChange: I,
    showCloseButton: !0,
    closeButtonProps: r
  }, $, {
    style: k,
    isOpen: w,
    setIsOpen: m,
    onDragStart: (B) => N(f.current, B),
    errorTypes: c
  }))), w ? null : /* @__PURE__ */ L.createElement("button", dn({
    type: "button"
  }, T, {
    "aria-label": "Open React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: (B) => {
      m(!0), K == null || K(B);
    },
    style: {
      background: "none",
      border: 0,
      padding: 0,
      position: "fixed",
      zIndex: 99999,
      display: "inline-flex",
      fontSize: "1.5em",
      margin: ".5em",
      cursor: "pointer",
      width: "fit-content",
      ...s === "top-right" ? {
        top: "0",
        right: "0"
      } : s === "top-left" ? {
        top: "0",
        left: "0"
      } : s === "bottom-right" ? {
        bottom: "0",
        right: "0"
      } : {
        bottom: "0",
        left: "0"
      },
      ...J
    }
  }), /* @__PURE__ */ L.createElement($f, {
    "aria-hidden": !0
  }), /* @__PURE__ */ L.createElement(Oc, {
    text: "Open React Query Devtools"
  }))) : null;
}
const Qt = (t, e, r = !1) => d6.useSyncExternalStore(L.useCallback((n) => r ? () => {
} : t.subscribe(Tp.batchCalls(n)), [t, r]), e, e), qf = /* @__PURE__ */ L.forwardRef(function(e, r) {
  const {
    isOpen: n = !0,
    styleNonce: s,
    setIsOpen: i,
    context: o,
    onDragStart: a,
    onPositionChange: l,
    showCloseButton: c,
    position: d,
    closeButtonProps: f = {},
    errorTypes: p = [],
    ...m
  } = e, {
    onClick: v,
    ..._
  } = f, C = Cp({
    context: o
  }), M = C.getQueryCache(), [b, I] = Sn("reactQueryDevtoolsSortFn", Object.keys(xa)[0]), [w, S] = Sn("reactQueryDevtoolsFilter", ""), [y, u] = Sn("reactQueryDevtoolsBaseSort", 1), g = L.useMemo(() => xa[b], [b]), N = Qt(M, () => M.getAll().length, !n), [A, $] = Sn("reactQueryDevtoolsActiveQueryHash", ""), J = L.useMemo(() => {
    const k = M.getAll();
    if (N === 0)
      return [];
    const B = w ? k.filter((z) => XE(z.queryHash, w).passed) : [...k];
    return g ? B.sort((z, W) => g(z, W) * y) : B;
  }, [y, g, w, N, M]), [K, T] = L.useState(!1);
  return /* @__PURE__ */ L.createElement(Df, {
    theme: Ge
  }, /* @__PURE__ */ L.createElement(B3, dn({
    ref: r,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, m, {
    style: {
      height: Ti,
      position: "relative",
      ...m.style
    }
  }), /* @__PURE__ */ L.createElement("style", {
    nonce: s,
    dangerouslySetInnerHTML: {
      __html: `
            .ReactQueryDevtoolsPanel * {
              scrollbar-color: ` + Ge.backgroundAlt + " " + Ge.gray + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar, .ReactQueryDevtoolsPanel scrollbar {
              width: 1em;
              height: 1em;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-track, .ReactQueryDevtoolsPanel scrollbar-track {
              background: ` + Ge.backgroundAlt + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactQueryDevtoolsPanel scrollbar-thumb {
              background: ` + Ge.gray + `;
              border-radius: .5em;
              border: 3px solid ` + Ge.backgroundAlt + `;
            }
          `
    }
  }), /* @__PURE__ */ L.createElement("div", {
    style: H3(d),
    onMouseDown: a
  }), n && /* @__PURE__ */ L.createElement("div", {
    style: {
      flex: "1 1 500px",
      minHeight: "40%",
      maxHeight: "100%",
      overflow: "auto",
      borderRight: "1px solid " + Ge.grayAlt,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: ".5em",
      background: Ge.backgroundAlt,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /* @__PURE__ */ L.createElement("button", {
    type: "button",
    "aria-label": "Close React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true",
    onClick: () => i(!1),
    style: {
      display: "inline-flex",
      background: "none",
      border: 0,
      padding: 0,
      marginRight: ".5em",
      cursor: "pointer"
    }
  }, /* @__PURE__ */ L.createElement($f, {
    "aria-hidden": !0
  }), /* @__PURE__ */ L.createElement(Oc, {
    text: "Close React Query Devtools"
  })), /* @__PURE__ */ L.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ L.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".5em"
    }
  }, /* @__PURE__ */ L.createElement(p6, {
    queryCache: M
  }), d && l ? /* @__PURE__ */ L.createElement(Ic, {
    "aria-label": "Panel position",
    value: d,
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (k) => l(k.target.value)
  }, /* @__PURE__ */ L.createElement("option", {
    value: "left"
  }, "Left"), /* @__PURE__ */ L.createElement("option", {
    value: "right"
  }, "Right"), /* @__PURE__ */ L.createElement("option", {
    value: "top"
  }, "Top"), /* @__PURE__ */ L.createElement("option", {
    value: "bottom"
  }, "Bottom")) : null), /* @__PURE__ */ L.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5em"
    }
  }, /* @__PURE__ */ L.createElement(G3, {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: w ?? "",
    onChange: (k) => S(k.target.value),
    onKeyDown: (k) => {
      k.key === "Escape" && S("");
    },
    style: {
      flex: "1",
      width: "100%"
    }
  }), /* @__PURE__ */ L.createElement(Ic, {
    "aria-label": "Sort queries",
    value: b,
    onChange: (k) => I(k.target.value),
    style: {
      flex: "1",
      minWidth: 75,
      marginRight: ".5em"
    }
  }, Object.keys(xa).map((k) => /* @__PURE__ */ L.createElement("option", {
    key: k,
    value: k
  }, "Sort by ", k))), /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => u((k) => k * -1),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, y === 1 ? "⬆ Asc" : "⬇ Desc"), /* @__PURE__ */ L.createElement(Zr, {
    title: "Clear cache",
    "aria-label": "Clear cache",
    type: "button",
    onClick: () => M.clear(),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, "Clear"), /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => {
      K ? (pl.setOnline(void 0), T(!1), window.dispatchEvent(new Event("online"))) : (pl.setOnline(!1), T(!0));
    },
    "aria-label": K ? "Restore offline mock" : "Mock offline behavior",
    title: K ? "Restore offline mock" : "Mock offline behavior",
    style: {
      padding: "0",
      height: "2em"
    }
  }, /* @__PURE__ */ L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "2em",
    height: "2em",
    viewBox: "0 0 24 24",
    stroke: K ? Ge.danger : "currentColor",
    fill: "none"
  }, K ? /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ L.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374"
  }), /* @__PURE__ */ L.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  })) : /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ L.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M6.343 12.343a8 8 0 0 1 11.314 0"
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
  }))), /* @__PURE__ */ L.createElement(Oc, {
    text: K ? "Restore offline mock" : "Mock offline behavior"
  }))))), /* @__PURE__ */ L.createElement("div", {
    style: {
      overflowY: "auto",
      flex: "1"
    }
  }, J.map((k) => /* @__PURE__ */ L.createElement(Wf, {
    queryKey: k.queryKey,
    activeQueryHash: A,
    setActiveQueryHash: $,
    key: k.queryHash,
    queryCache: M
  })))), A && n ? /* @__PURE__ */ L.createElement(f6, {
    activeQueryHash: A,
    queryCache: M,
    queryClient: C,
    errorTypes: p
  }) : null, c ? /* @__PURE__ */ L.createElement(Zr, dn({
    type: "button",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, _, {
    style: {
      position: "absolute",
      zIndex: 99999,
      margin: ".5em",
      bottom: 0,
      left: 0,
      ..._.style
    },
    onClick: (k) => {
      i(!1), v == null || v(k);
    }
  }), "Close") : null));
}), f6 = ({
  queryCache: t,
  activeQueryHash: e,
  queryClient: r,
  errorTypes: n
}) => {
  var s, i;
  const o = Qt(t, () => t.getAll().find((v) => v.queryHash === e)), a = Qt(t, () => {
    var v;
    return (v = t.getAll().find((_) => _.queryHash === e)) == null ? void 0 : v.state;
  }), l = (s = Qt(t, () => {
    var v;
    return (v = t.getAll().find((_) => _.queryHash === e)) == null ? void 0 : v.isStale();
  })) != null ? s : !1, c = (i = Qt(t, () => {
    var v;
    return (v = t.getAll().find((_) => _.queryHash === e)) == null ? void 0 : v.getObserversCount();
  })) != null ? i : 0, d = () => {
    const v = o == null ? void 0 : o.fetch();
    v == null || v.catch(g6);
  }, f = Ip(() => {
    if (o && a != null && a.error) {
      const v = n.find((_) => {
        var C;
        return _.initializer(o).toString() === ((C = a.error) == null ? void 0 : C.toString());
      });
      return v == null ? void 0 : v.name;
    }
  }, [o, a == null ? void 0 : a.error, n]);
  if (!o || !a)
    return null;
  const p = (v) => {
    var _;
    const C = (_ = v == null ? void 0 : v.initializer(o)) != null ? _ : new Error("Unknown error from devtools"), M = o.options;
    o.setState({
      status: "error",
      error: C,
      fetchMeta: {
        ...o.state.fetchMeta,
        __previousQueryOptions: M
      }
    });
  }, m = () => {
    o.fetch(o.state.fetchMeta.__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  return /* @__PURE__ */ L.createElement(K3, null, /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: ".5em",
      background: Ge.backgroundAlt,
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ L.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ L.createElement(sn, {
    style: {
      lineHeight: "1.8em"
    }
  }, /* @__PURE__ */ L.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: "auto"
    }
  }, zf(o.queryKey, !0))), /* @__PURE__ */ L.createElement("span", {
    style: {
      padding: "0.3em .6em",
      borderRadius: "0.4em",
      fontWeight: "bold",
      textShadow: "0 2px 10px black",
      background: Mf({
        queryState: a,
        isStale: l,
        observerCount: c,
        theme: Ge
      }),
      flexShrink: 0
    }
  }, ms(o))), /* @__PURE__ */ L.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Observers: ", /* @__PURE__ */ L.createElement(sn, null, c)), /* @__PURE__ */ L.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Last Updated:", " ", /* @__PURE__ */ L.createElement(sn, null, new Date(a.dataUpdatedAt).toLocaleTimeString()))), /* @__PURE__ */ L.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: "0.5em",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: d,
    disabled: a.fetchStatus === "fetching",
    style: {
      background: Ge.active
    }
  }, "Refetch"), " ", /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => r.invalidateQueries(o),
    style: {
      background: Ge.warning,
      color: Ge.inputTextColor
    }
  }, "Invalidate"), " ", /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => r.resetQueries(o),
    style: {
      background: Ge.gray
    }
  }, "Reset"), " ", /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => r.removeQueries(o),
    style: {
      background: Ge.danger
    }
  }, "Remove"), " ", /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => {
      var v;
      if (!(o.state.fetchStatus === "fetching" && typeof ((v = o.state.fetchMeta) == null ? void 0 : v.__previousQueryOptions) > "u"))
        if (o.state.data === void 0)
          m();
        else {
          const _ = o.options;
          o.fetch({
            ..._,
            queryFn: () => new Promise(() => {
            }),
            cacheTime: -1
          }), o.setState({
            data: void 0,
            status: "loading",
            fetchMeta: {
              ...o.state.fetchMeta,
              __previousQueryOptions: _
            }
          });
        }
    },
    style: {
      background: Ge.paused
    }
  }, o.state.status === "loading" ? "Restore" : "Trigger", " ", "loading"), " ", n.length === 0 || o.state.status === "error" ? /* @__PURE__ */ L.createElement(Zr, {
    type: "button",
    onClick: () => {
      o.state.error ? r.resetQueries(o) : p();
    },
    style: {
      background: Ge.danger
    }
  }, o.state.status === "error" ? "Restore" : "Trigger", " error") : /* @__PURE__ */ L.createElement("label", null, "Trigger error:", /* @__PURE__ */ L.createElement(Ic, {
    value: f ?? "",
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (v) => {
      const _ = n.find((C) => C.name === v.target.value);
      p(_);
    }
  }, /* @__PURE__ */ L.createElement("option", {
    key: "",
    value: ""
  }), n.map((v) => /* @__PURE__ */ L.createElement("option", {
    key: v.name,
    value: v.name
  }, v.name))))), /* @__PURE__ */ L.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ L.createElement(Cc, {
    label: "Data",
    value: a.data,
    defaultExpanded: {},
    copyable: !0
  })), /* @__PURE__ */ L.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /* @__PURE__ */ L.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ L.createElement(Cc, {
    label: "Query",
    value: o,
    defaultExpanded: {
      queryKey: !0
    }
  })));
}, p6 = ({
  queryCache: t
}) => {
  const e = Qt(t, () => t.getAll().filter((o) => ms(o) === "fresh").length), r = Qt(t, () => t.getAll().filter((o) => ms(o) === "fetching").length), n = Qt(t, () => t.getAll().filter((o) => ms(o) === "paused").length), s = Qt(t, () => t.getAll().filter((o) => ms(o) === "stale").length), i = Qt(t, () => t.getAll().filter((o) => ms(o) === "inactive").length);
  return /* @__PURE__ */ L.createElement(Y3, null, /* @__PURE__ */ L.createElement(Bs, {
    style: {
      background: Ge.success,
      opacity: e ? 1 : 0.3
    }
  }, "fresh ", /* @__PURE__ */ L.createElement(sn, null, "(", e, ")")), " ", /* @__PURE__ */ L.createElement(Bs, {
    style: {
      background: Ge.active,
      opacity: r ? 1 : 0.3
    }
  }, "fetching ", /* @__PURE__ */ L.createElement(sn, null, "(", r, ")")), " ", /* @__PURE__ */ L.createElement(Bs, {
    style: {
      background: Ge.paused,
      opacity: n ? 1 : 0.3
    }
  }, "paused ", /* @__PURE__ */ L.createElement(sn, null, "(", n, ")")), " ", /* @__PURE__ */ L.createElement(Bs, {
    style: {
      background: Ge.warning,
      color: "black",
      textShadow: "0",
      opacity: s ? 1 : 0.3
    }
  }, "stale ", /* @__PURE__ */ L.createElement(sn, null, "(", s, ")")), " ", /* @__PURE__ */ L.createElement(Bs, {
    style: {
      background: Ge.gray,
      opacity: i ? 1 : 0.3
    }
  }, "inactive ", /* @__PURE__ */ L.createElement(sn, null, "(", i, ")")));
}, Wf = /* @__PURE__ */ L.memo(({
  queryKey: t,
  setActiveQueryHash: e,
  activeQueryHash: r,
  queryCache: n
}) => {
  var s, i, o, a;
  const l = (s = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.queryHash;
  })) != null ? s : "", c = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.state;
  }), d = (i = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.isStale();
  })) != null ? i : !1, f = (o = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.isDisabled();
  })) != null ? o : !1, p = (a = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.getObserversCount();
  })) != null ? a : 0;
  return c ? /* @__PURE__ */ L.createElement("div", {
    role: "button",
    "aria-label": "Open query details for " + l,
    onClick: () => e(r === l ? "" : l),
    style: {
      display: "flex",
      borderBottom: "solid 1px " + Ge.grayAlt,
      cursor: "pointer",
      background: l === r ? "rgba(255,255,255,.1)" : void 0
    }
  }, /* @__PURE__ */ L.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "2em",
      height: "2em",
      background: Mf({
        queryState: c,
        isStale: d,
        observerCount: p,
        theme: Ge
      }),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      textShadow: d ? "0" : "0 0 10px black",
      color: d ? "black" : "white"
    }
  }, p), f ? /* @__PURE__ */ L.createElement("div", {
    style: {
      flex: "0 0 auto",
      height: "2em",
      background: Ge.gray,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      padding: "0 0.5em"
    }
  }, "disabled") : null, /* @__PURE__ */ L.createElement(sn, {
    style: {
      padding: ".5em"
    }
  }, "" + l)) : null;
});
Wf.displayName = "QueryRow";
function g6() {
}
const m6 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : h6;
process.env.NODE_ENV;
const Zf = new kp(), wS = ({
  dAppName: t,
  dAppDescription: e,
  dAppUrl: r,
  dAppIconURL: n,
  children: s,
  debugQuery: i = !1
}) => (Pr(() => {
  x5({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: ln.getState().onDisconnect
  }), Ad.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ vd.jsxs(Rp, { client: Zf, children: [
  i && /* @__PURE__ */ vd.jsx(m6, { initialIsOpen: !1 }),
  s
] })), Ff = [
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
], oa = ["aleo:3"], Hf = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], Bf = "f0aaeffe71b636da453fce042d79d723";
function y6() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const v6 = {
  chains: oa,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [Bf]
}, _6 = {
  chains: oa,
  enableExplorer: !1,
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
}, Rd = y6() ? v6 : _6, ES = {
  requiredNamespaces: {
    aleo: {
      methods: Ff,
      chains: oa,
      events: Hf
    }
  }
}, b6 = "@puzzlehq/sdk-core", w6 = "Puzzle SDK", E6 = "0.2.32-beta.1", S6 = "Your portal to privacy", x6 = "./dist/puzzle.cjs.js", I6 = "./dist/puzzle.es.js", O6 = "./dist/puzzle.umd.js", C6 = "./dist/types/src/index.d.ts", T6 = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, k6 = "module", R6 = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, P6 = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, N6 = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
}, A6 = {
  buffer: "^6.0.3"
}, L6 = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], j6 = "Puzzle", D6 = "ISC", M6 = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, z6 = "https://github.com/puzzlehq/puzzle-sdk#readme", Pd = {
  name: b6,
  displayName: w6,
  version: E6,
  description: S6,
  main: x6,
  module: I6,
  browser: O6,
  types: C6,
  private: !1,
  exports: T6,
  type: k6,
  scripts: R6,
  repository: P6,
  dependencies: N6,
  peerDependencies: A6,
  keywords: L6,
  author: j6,
  license: D6,
  bugs: M6,
  homepage: z6
}, Kf = new Ad();
let In;
async function SS(t) {
  let e = !1;
  const r = Pd.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${Pd.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", Rd), In = new Pp({
    projectId: t.projectId ?? Bf,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: window ? window.location.hostname : t.dAppUrl ?? "NO URL",
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Rd }
  }), e) {
    localStorage.removeItem("puzzle-hasDesktopConnection");
    try {
      U6(In, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  In.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), In.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function U6(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: kc("USER_DISCONNECTED")
  }));
}
async function _r() {
  return new Promise((t) => {
    if (In)
      t(In);
    else {
      const e = setInterval(() => {
        In && (clearInterval(e), t(In));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const V6 = async (t) => {
  var r;
  if (!!!((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasDesktopConnection", "true"), !0) : (localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1);
  } catch (n) {
    return console.warn(n), localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  }
}, is = () => {
  var r;
  return !((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient) ? !1 : localStorage.getItem(
    "puzzle-hasDesktopConnection"
  ) === "true";
}, xS = async () => {
  const t = await _r(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.getSelectedAccount.query(r);
    } catch (n) {
      return console.error("getAccount error", n), { error: n.message };
    }
  try {
    return await t.request(r);
  } catch (n) {
    return console.error("getAccount error", n), { error: n.message };
  }
}, IS = async ({
  address: t
}) => {
  const e = await _r(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
    topic: r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0,
        address: t
      }
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.getBalance.query(n);
    } catch (s) {
      const i = s.message;
      return console.error("getBalance error", s), { error: i };
    }
  try {
    return await e.request(n);
  } catch (s) {
    const i = s.message;
    return console.error("getBalance error", s), { error: i };
  }
}, OS = async () => {
  const t = await _r();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Ff,
          chains: oa,
          events: Hf
        }
      }
    });
    return Kf.emit("session_change"), r && await V6(r.topic), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r);
  }
}, CS = async (t) => {
  const e = await _r(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:3",
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
    return console.error("createEvent error", s), { error: s.message };
  }
}, TS = async () => {
  const t = await _r(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.createSharedState.mutation(
        r
      );
    } catch (n) {
      return console.error("createSharedState error", n), { error: n.message };
    }
  try {
    return await t.request(r);
  } catch (n) {
    return console.error("createSharedState error", n), { error: n.message };
  }
}, kS = async (t) => {
  const e = await _r(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (n) {
    return console.error("decrypt error", n), { error: n.message };
  }
}, RS = async () => {
  const t = await _r(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: kc("USER_DISCONNECTED"),
        topic: e.topic
      }), localStorage.removeItem("puzzle-hasDesktopConnection"), Kf.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    return console.error("error disconnecting", r), { error: r.message };
  }
}, PS = async ({
  id: t,
  address: e
}) => {
  const r = await _r(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = {
    topic: n.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t,
        address: e
      }
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.getEvent.query(s);
    } catch (o) {
      return console.error("getEvent error", o), { error: o.message };
    }
  const i = async () => await r.request(s);
  try {
    return await i();
  } catch (o) {
    return console.error("getEvents error", o), { error: o.message };
  }
}, NS = async (t) => {
  const e = await _r(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = {
    topic: r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: 0
      }
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.getEvents.query(n);
    } catch (i) {
      return console.error("getEvents error", i), { error: i.message };
    }
  const s = async (i = 0) => await e.request(n);
  try {
    return await s();
  } catch (i) {
    return console.error("getEvents error", i), { error: i.message };
  }
}, AS = async (t) => {
  const e = await _r(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
    topic: r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.importSharedState.mutation(
        n
      );
    } catch (s) {
      return console.error("importSharedState error", s), { error: s.message };
    }
  try {
    return await e.request(n);
  } catch (s) {
    return console.error("importSharedState error", s), { error: s.message };
  }
}, LS = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await _r(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = {
    topic: s.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: r
      }
    }
  };
  if (is())
    try {
      return await window.aleo.puzzleWalletClient.getRecords.query(i);
    } catch (a) {
      return console.error("getRecords error", a), { error: a.message };
    }
  const o = async (a = 0) => await n.request(i);
  try {
    return await o();
  } catch (a) {
    return console.error("getRecords error", a), { error: a.message };
  }
}, jS = async ({
  message: t,
  address: e
}) => {
  const r = await _r(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: rl.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    return console.error("signature error", s), { error: s.message };
  }
}, DS = 20, $6 = Np("wallet:sdk");
$6.enabled = !0;
export {
  _S as $,
  gd as A,
  gc as B,
  rl as C,
  FE as D,
  fc as E,
  WE as F,
  ZE as G,
  HE as H,
  BE as I,
  G6 as J,
  qE as K,
  lS as L,
  yS as M,
  Ld as N,
  mS as O,
  wS as P,
  fS as Q,
  vS as R,
  dS as S,
  hS as T,
  pS as U,
  pc as V,
  xr as W,
  gS as X,
  Y6 as Y,
  xl as Z,
  uS as _,
  J6 as a,
  DS as a0,
  xS as a1,
  IS as a2,
  OS as a3,
  CS as a4,
  TS as a5,
  kS as a6,
  RS as a7,
  PS as a8,
  NS as a9,
  AS as aa,
  LS as ab,
  jS as ac,
  Ff as ad,
  oa as ae,
  Hf as af,
  Bf as ag,
  v6 as ah,
  _6 as ai,
  Rd as aj,
  ES as ak,
  $6 as al,
  V6 as am,
  is as an,
  Kf as ao,
  SS as ap,
  _r as aq,
  Wt as b,
  X6 as c,
  eS as d,
  tS as e,
  xs as f,
  rS as g,
  nS as h,
  sS as i,
  iS as j,
  oS as k,
  aS as l,
  cS as m,
  la as n,
  bS as o,
  cf as p,
  Vi as q,
  M2 as r,
  ac as s,
  Vp as t,
  Q6 as u,
  lf as v,
  vr as w,
  Zf as x,
  ln as y,
  hc as z
};
