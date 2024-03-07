import * as j from "react";
import Zo, { useEffect as vr, useState as Qs, useMemo as Tp } from "react";
import { create as kp } from "zustand";
import { useQuery as Ld, useQueryClient as Rp, onlineManager as ml, notifyManager as Pp, QueryClient as Np, QueryClientProvider as Ap } from "@tanstack/react-query";
import { getSdkError as Pc } from "@walletconnect/utils";
import { useDebounce as jd } from "use-debounce";
import Dd from "events";
import { WalletConnectModalSign as Lp } from "@walletconnect/modal-sign-html";
import jp from "debug";
const Dp = Symbol(), yl = Object.getPrototypeOf, Pa = /* @__PURE__ */ new WeakMap(), Mp = (t) => t && (Pa.has(t) ? Pa.get(t) : yl(t) === Object.prototype || yl(t) === Array.prototype), zp = (t) => Mp(t) && t[Dp] || null, vl = (t, e = !0) => {
  Pa.set(t, e);
};
var yo = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const da = (t) => typeof t == "object" && t !== null, vn = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakSet(), Up = (t = Object.is, e = (l, d) => new Proxy(l, d), r = (l) => da(l) && !eo.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), n = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (l, d, f = n) => {
  const p = s.get(l);
  if ((p == null ? void 0 : p[0]) === d)
    return p[1];
  const m = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return vl(m, !0), s.set(l, [d, m]), Reflect.ownKeys(l).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const b = Reflect.get(l, v), C = {
      value: b,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (eo.has(b))
      vl(b, !1);
    else if (b instanceof Promise)
      delete C.value, C.get = () => f(b);
    else if (vn.has(b)) {
      const [L, w] = vn.get(
        b
      );
      C.value = i(
        L,
        w(),
        f
      );
    }
    Object.defineProperty(m, v, C);
  }), Object.preventExtensions(m);
}, o = /* @__PURE__ */ new WeakMap(), a = [1, 1], c = (l) => {
  if (!da(l))
    throw new Error("object required");
  const d = o.get(l);
  if (d)
    return d;
  let f = a[0];
  const p = /* @__PURE__ */ new Set(), m = (g, N = ++a[0]) => {
    f !== N && (f = N, p.forEach((A) => A(g, N)));
  };
  let v = a[1];
  const b = (g = ++a[1]) => (v !== g && !p.size && (v = g, L.forEach(([N]) => {
    const A = N[1](g);
    A > f && (f = A);
  })), f), C = (g) => (N, A) => {
    const $ = [...N];
    $[1] = [g, ...$[1]], m($, A);
  }, L = /* @__PURE__ */ new Map(), w = (g, N) => {
    if ((yo ? "production" : void 0) !== "production" && L.has(g))
      throw new Error("prop listener already exists");
    if (p.size) {
      const A = N[3](C(g));
      L.set(g, [N, A]);
    } else
      L.set(g, [N]);
  }, x = (g) => {
    var N;
    const A = L.get(g);
    A && (L.delete(g), (N = A[1]) == null || N.call(A));
  }, _ = (g) => (p.add(g), p.size === 1 && L.forEach(([N, A], $) => {
    if ((yo ? "production" : void 0) !== "production" && A)
      throw new Error("remove already exists");
    const J = N[3](C($));
    L.set($, [N, J]);
  }), () => {
    p.delete(g), p.size === 0 && L.forEach(([N, A], $) => {
      A && (A(), L.set($, [N]));
    });
  }), S = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), y = e(S, {
    deleteProperty(g, N) {
      const A = Reflect.get(g, N);
      x(N);
      const $ = Reflect.deleteProperty(g, N);
      return $ && m(["delete", [N], A]), $;
    },
    set(g, N, A, $) {
      const J = Reflect.has(g, N), K = Reflect.get(g, N, $);
      if (J && (t(K, A) || o.has(A) && t(K, o.get(A))))
        return !0;
      x(N), da(A) && (A = zp(A) || A);
      let T = A;
      if (A instanceof Promise)
        A.then((k) => {
          A.status = "fulfilled", A.value = k, m(["resolve", [N], k]);
        }).catch((k) => {
          A.status = "rejected", A.reason = k, m(["reject", [N], k]);
        });
      else {
        !vn.has(A) && r(A) && (T = c(A));
        const k = !eo.has(T) && vn.get(T);
        k && w(N, k);
      }
      return Reflect.set(g, N, T, $), m(["set", [N], A, K]), !0;
    }
  });
  o.set(l, y);
  const u = [
    S,
    b,
    i,
    _
  ];
  return vn.set(y, u), Reflect.ownKeys(l).forEach((g) => {
    const N = Object.getOwnPropertyDescriptor(
      l,
      g
    );
    "value" in N && (y[g] = l[g], delete N.value, delete N.writable), Object.defineProperty(S, g, N);
  }), y;
}) => [
  // public functions
  c,
  // shared state
  vn,
  eo,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  o,
  a
], [Vp] = Up();
function jn(t = {}) {
  return Vp(t);
}
function rs(t, e, r) {
  const n = vn.get(t);
  (yo ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], o = n[3];
  let a = !1;
  const c = o((l) => {
    if (i.push(l), r) {
      e(i.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, a && e(i.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, c();
  };
}
function $p(t, e) {
  const r = vn.get(t);
  (yo ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const kt = jn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Md = { state: kt, subscribe(t) {
  return rs(kt, () => t(kt));
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
  const e = (t = Md.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, qp = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ut = jn({ enabled: qp, userSessionId: "", events: [], connectedWalletId: void 0 }), Wp = { state: Ut, subscribe(t) {
  return rs(Ut.events, () => t($p(Ut.events[Ut.events.length - 1])));
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
} }, Ur = jn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), xr = { state: Ur, subscribe(t) {
  return rs(Ur, () => t(Ur));
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
} }, to = jn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), xs = { state: to, subscribe(t) {
  return rs(to, () => t(to));
}, setConfig(t) {
  var e, r;
  Wp.initialize(), xr.setChains(t.chains), xr.setIsAuth(!!t.enableAuthMode), xr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), xr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Wt.setModalVersionInStorage(), Object.assign(to, t);
} };
var Fp = Object.defineProperty, _l = Object.getOwnPropertySymbols, Zp = Object.prototype.hasOwnProperty, Hp = Object.prototype.propertyIsEnumerable, bl = (t, e, r) => e in t ? Fp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bp = (t, e) => {
  for (var r in e || (e = {}))
    Zp.call(e, r) && bl(t, r, e[r]);
  if (_l)
    for (var r of _l(e))
      Hp.call(e, r) && bl(t, r, e[r]);
  return t;
};
const Na = "https://explorer-api.walletconnect.com", Aa = "wcm", La = "js-2.6.2";
async function ro(t, e) {
  const r = Bp({ sdkType: Aa, sdkVersion: La }, e), n = new URL(t, Na);
  return n.searchParams.append("projectId", xs.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const Vn = { async getDesktopListings(t) {
  return ro("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return ro("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return ro("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return ro("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Na}/w3m/v1/getWalletImage/${t}?projectId=${xs.state.projectId}&sdkType=${Aa}&sdkVersion=${La}`;
}, getAssetImageUrl(t) {
  return `${Na}/w3m/v1/getAssetImage/${t}?projectId=${xs.state.projectId}&sdkType=${Aa}&sdkVersion=${La}`;
} };
var Kp = Object.defineProperty, wl = Object.getOwnPropertySymbols, Yp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, El = (t, e, r) => e in t ? Kp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qp = (t, e) => {
  for (var r in e || (e = {}))
    Yp.call(e, r) && El(t, r, e[r]);
  if (wl)
    for (var r of wl(e))
      Gp.call(e, r) && El(t, r, e[r]);
  return t;
};
const Sl = Wt.isMobile(), Vr = jn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), X6 = { state: Vr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = xs.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Vr.recomendedWallets;
  if (Wt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Vn.getAllListings(r), s = Object.values(n);
    s.sort((i, o) => {
      const a = t.indexOf(i.id), c = t.indexOf(o.id);
      return a - c;
    }), Vr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = xr.state, s = r == null ? void 0 : r.join(","), i = Wt.isArray(e), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Wt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: a } = Sl ? await Vn.getMobileListings(o) : await Vn.getDesktopListings(o);
    Vr.recomendedWallets = Object.values(a);
  }
  return Vr.recomendedWallets;
}, async getWallets(t) {
  const e = Qp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = xs.state, { recomendedWallets: s } = Vr;
  if (n === "ALL")
    return Vr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Wt.isArray(r) && (e.excludedIds = r.join(",")), Wt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), xr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: o } = t, { listings: a, total: c } = Sl ? await Vn.getMobileListings(e) : await Vn.getDesktopListings(e), l = Object.values(a), d = o ? "search" : "wallets";
  return Vr[d] = { listings: [...Vr[d].listings, ...l], total: c, page: i ?? 1 }, { listings: l, total: c };
}, getWalletImageUrl(t) {
  return Vn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Vn.getAssetImageUrl(t);
}, resetSearch() {
  Vr.search = { listings: [], total: 0, page: 1 };
} }, cs = jn({ open: !1 }), ha = { state: cs, subscribe(t) {
  return rs(cs, () => t(cs));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = xr.state;
    if (Wt.removeWalletConnectDeepLink(), xr.setWalletConnectUri(t == null ? void 0 : t.uri), xr.setChains(t == null ? void 0 : t.chains), Md.reset("ConnectWallet"), r && n)
      cs.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = xr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), cs.open = !0, e());
      }, 200);
    }
  });
}, close() {
  cs.open = !1;
} };
var Jp = Object.defineProperty, Il = Object.getOwnPropertySymbols, Xp = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, xl = (t, e, r) => e in t ? Jp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, tg = (t, e) => {
  for (var r in e || (e = {}))
    Xp.call(e, r) && xl(t, r, e[r]);
  if (Il)
    for (var r of Il(e))
      eg.call(e, r) && xl(t, r, e[r]);
  return t;
};
function rg() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Us = jn({ themeMode: rg() ? "dark" : "light" }), Ol = { state: Us, subscribe(t) {
  return rs(Us, () => t(Us));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Us.themeMode = e), r && (Us.themeVariables = tg({}, r));
} }, $n = jn({ open: !1, message: "", variant: "success" }), eS = { state: $n, subscribe(t) {
  return rs($n, () => t($n));
}, openToast(t, e) {
  $n.open = !0, $n.message = t, $n.variant = e;
}, closeToast() {
  $n.open = !1;
} };
let ng = class {
  constructor(t) {
    this.openModal = ha.open, this.closeModal = ha.close, this.subscribeModal = ha.subscribe, this.setTheme = Ol.setThemeConfig, Ol.setThemeConfig(t), xs.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-B4R013gi-CJf_PHNU.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), xr.setIsUiLoaded(!0);
    }
  }
};
var En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ho(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Bo(t) {
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
var Nc = { exports: {} }, bs = typeof Reflect == "object" ? Reflect : null, Cl = bs && typeof bs.apply == "function" ? bs.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, co;
bs && typeof bs.ownKeys == "function" ? co = bs.ownKeys : Object.getOwnPropertySymbols ? co = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : co = function(t) {
  return Object.getOwnPropertyNames(t);
};
function sg(t) {
  console && console.warn && console.warn(t);
}
var zd = Number.isNaN || function(t) {
  return t !== t;
};
function Xe() {
  Xe.init.call(this);
}
Nc.exports = Xe;
Nc.exports.once = cg;
Xe.EventEmitter = Xe;
Xe.prototype._events = void 0;
Xe.prototype._eventsCount = 0;
Xe.prototype._maxListeners = void 0;
var Tl = 10;
function Ko(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Xe, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Tl;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || zd(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Tl = t;
  }
});
Xe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Xe.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || zd(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Ud(t) {
  return t._maxListeners === void 0 ? Xe.defaultMaxListeners : t._maxListeners;
}
Xe.prototype.getMaxListeners = function() {
  return Ud(this);
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
    Cl(a, this, e);
  else
    for (var c = a.length, l = Fd(a, c), r = 0; r < c; ++r)
      Cl(l[r], this, e);
  return !0;
};
function Vd(t, e, r, n) {
  var s, i, o;
  if (Ko(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), o = i[e]), o === void 0)
    o = i[e] = r, ++t._eventsCount;
  else if (typeof o == "function" ? o = i[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), s = Ud(t), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = o.length, sg(a);
  }
  return t;
}
Xe.prototype.addListener = function(t, e) {
  return Vd(this, t, e, !1);
};
Xe.prototype.on = Xe.prototype.addListener;
Xe.prototype.prependListener = function(t, e) {
  return Vd(this, t, e, !0);
};
function ig() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function $d(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = ig.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
Xe.prototype.once = function(t, e) {
  return Ko(e), this.on(t, $d(this, t, e)), this;
};
Xe.prototype.prependOnceListener = function(t, e) {
  return Ko(e), this.prependListener(t, $d(this, t, e)), this;
};
Xe.prototype.removeListener = function(t, e) {
  var r, n, s, i, o;
  if (Ko(e), n = this._events, n === void 0)
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
    s === 0 ? r.shift() : og(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, o || e);
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
function qd(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? ag(s) : Fd(s, s.length);
}
Xe.prototype.listeners = function(t) {
  return qd(this, t, !0);
};
Xe.prototype.rawListeners = function(t) {
  return qd(this, t, !1);
};
Xe.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Wd.call(t, e);
};
Xe.prototype.listenerCount = Wd;
function Wd(t) {
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
  return this._eventsCount > 0 ? co(this._events) : [];
};
function Fd(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function og(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function ag(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function cg(t, e) {
  return new Promise(function(r, n) {
    function s(o) {
      t.removeListener(e, i), n(o);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Zd(t, e, i, { once: !0 }), e !== "error" && lg(t, s, { once: !0 });
  });
}
function lg(t, e, r) {
  typeof t.on == "function" && Zd(t, "error", e, r);
}
function Zd(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Lr = Nc.exports;
const Ac = /* @__PURE__ */ Ho(Lr), ug = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, dg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, hg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function fg(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    pg(t);
    return;
  }
  return e;
}
function pg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function no(t, e = {}) {
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
  if (!hg.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (ug.test(t) || dg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, fg);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function gg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Rt(t, ...e) {
  try {
    return gg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function mg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function yg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function lo(t) {
  if (mg(t))
    return String(t);
  if (yg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return lo(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Hd() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const ja = "base64:";
function vg(t) {
  if (typeof t == "string")
    return t;
  Hd();
  const e = Buffer.from(t).toString("base64");
  return ja + e;
}
function _g(t) {
  return typeof t != "string" || !t.startsWith(ja) ? t : (Hd(), Buffer.from(t.slice(ja.length), "base64"));
}
function nr(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function bg(...t) {
  return nr(t.join(":"));
}
function so(t) {
  return t = nr(t), t ? t + ":" : "";
}
const wg = "memory", Eg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: wg,
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
function Sg(t = {}) {
  const e = {
    mounts: { "": t.driver || Eg() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (l) => {
    for (const d of e.mountpoints)
      if (l.startsWith(d))
        return {
          base: d,
          relativeKey: l.slice(d.length),
          driver: e.mounts[d]
        };
    return {
      base: "",
      relativeKey: l,
      driver: e.mounts[""]
    };
  }, n = (l, d) => e.mountpoints.filter(
    (f) => f.startsWith(l) || d && l.startsWith(f)
  ).map((f) => ({
    relativeBase: l.length > f.length ? l.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (l, d) => {
    if (e.watching) {
      d = nr(d);
      for (const f of e.watchListeners)
        f(l, d);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const l in e.mounts)
        e.unwatch[l] = await kl(
          e.mounts[l],
          s,
          l
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const l in e.unwatch)
        await e.unwatch[l]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (l, d, f) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let b = p.get(v.base);
      return b || (b = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, b)), b;
    };
    for (const v of l) {
      const b = typeof v == "string", C = nr(b ? v : v.key), L = b ? void 0 : v.value, w = b || !v.options ? d : { ...d, ...v.options }, x = r(C);
      m(x).items.push({
        key: C,
        value: L,
        relativeKey: x.relativeKey,
        options: w
      });
    }
    return Promise.all([...p.values()].map((v) => f(v))).then(
      (v) => v.flat()
    );
  }, c = {
    // Item
    hasItem(l, d = {}) {
      l = nr(l);
      const { relativeKey: f, driver: p } = r(l);
      return Rt(p.hasItem, f, d);
    },
    getItem(l, d = {}) {
      l = nr(l);
      const { relativeKey: f, driver: p } = r(l);
      return Rt(p.getItem, f, d).then(
        (m) => no(m)
      );
    },
    getItems(l, d) {
      return a(l, d, (f) => f.driver.getItems ? Rt(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        d
      ).then(
        (p) => p.map((m) => ({
          key: bg(f.base, m.key),
          value: no(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => Rt(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: no(m)
        })))
      ));
    },
    getItemRaw(l, d = {}) {
      l = nr(l);
      const { relativeKey: f, driver: p } = r(l);
      return p.getItemRaw ? Rt(p.getItemRaw, f, d) : Rt(p.getItem, f, d).then(
        (m) => _g(m)
      );
    },
    async setItem(l, d, f = {}) {
      if (d === void 0)
        return c.removeItem(l);
      l = nr(l);
      const { relativeKey: p, driver: m } = r(l);
      m.setItem && (await Rt(m.setItem, p, lo(d), f), m.watch || s("update", l));
    },
    async setItems(l, d) {
      await a(l, d, async (f) => {
        f.driver.setItems && await Rt(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: lo(p.value),
            options: p.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => Rt(
            f.driver.setItem,
            p.relativeKey,
            lo(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(l, d, f = {}) {
      if (d === void 0)
        return c.removeItem(l, f);
      l = nr(l);
      const { relativeKey: p, driver: m } = r(l);
      if (m.setItemRaw)
        await Rt(m.setItemRaw, p, d, f);
      else if (m.setItem)
        await Rt(m.setItem, p, vg(d), f);
      else
        return;
      m.watch || s("update", l);
    },
    async removeItem(l, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), l = nr(l);
      const { relativeKey: f, driver: p } = r(l);
      p.removeItem && (await Rt(p.removeItem, f, d), (d.removeMeta || d.removeMata) && await Rt(p.removeItem, f + "$", d), p.watch || s("remove", l));
    },
    // Meta
    async getMeta(l, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), l = nr(l);
      const { relativeKey: f, driver: p } = r(l), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await Rt(p.getMeta, f, d)), !d.nativeOnly) {
        const v = await Rt(
          p.getItem,
          f + "$",
          d
        ).then((b) => no(b));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(l, d, f = {}) {
      return this.setItem(l + "$", d, f);
    },
    removeMeta(l, d = {}) {
      return this.removeItem(l + "$", d);
    },
    // Keys
    async getKeys(l, d = {}) {
      l = so(l);
      const f = n(l, !0);
      let p = [];
      const m = [];
      for (const v of f) {
        const b = (await Rt(
          v.driver.getKeys,
          v.relativeBase,
          d
        )).map((C) => v.mountpoint + nr(C)).filter((C) => !p.some((L) => C.startsWith(L)));
        m.push(...b), p = [
          v.mountpoint,
          ...p.filter((C) => !C.startsWith(v.mountpoint))
        ];
      }
      return l ? m.filter((v) => v.startsWith(l) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(l, d = {}) {
      l = so(l), await Promise.all(
        n(l, !1).map(async (f) => {
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
        Object.values(e.mounts).map((l) => Rl(l))
      );
    },
    async watch(l) {
      return await i(), e.watchListeners.push(l), async () => {
        e.watchListeners = e.watchListeners.filter(
          (d) => d !== l
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(l, d) {
      if (l = so(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[l] = d, e.watching && Promise.resolve(kl(d, s, l)).then((f) => {
        e.unwatch[l] = f;
      }).catch(console.error), c;
    },
    async unmount(l, d = !0) {
      l = so(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && (e.unwatch[l](), delete e.unwatch[l]), d && await Rl(e.mounts[l]), e.mountpoints = e.mountpoints.filter((f) => f !== l), delete e.mounts[l]);
    },
    getMount(l = "") {
      l = nr(l) + ":";
      const d = r(l);
      return {
        driver: d.driver,
        base: d.base
      };
    },
    getMounts(l = "", d = {}) {
      return l = nr(l), n(l, d.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    }
  };
  return c;
}
function kl(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Rl(t) {
  typeof t.dispose == "function" && await Rt(t.dispose);
}
function ns(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Bd(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = ns(r);
  return (s, i) => n.then((o) => i(o.transaction(e, s).objectStore(e)));
}
let fa;
function Pi() {
  return fa || (fa = Bd("keyval-store", "keyval")), fa;
}
function Pl(t, e = Pi()) {
  return e("readonly", (r) => ns(r.get(t)));
}
function Ig(t, e, r = Pi()) {
  return r("readwrite", (n) => (n.put(e, t), ns(n.transaction)));
}
function xg(t, e = Pi()) {
  return e("readwrite", (r) => (r.delete(t), ns(r.transaction)));
}
function Og(t = Pi()) {
  return t("readwrite", (e) => (e.clear(), ns(e.transaction)));
}
function Cg(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, ns(t.transaction);
}
function Tg(t = Pi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return ns(e.getAllKeys());
    const r = [];
    return Cg(e, (n) => r.push(n.key)).then(() => r);
  });
}
const kg = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Rg = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Yo(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Rg(t);
  } catch {
    return t;
  }
}
function Ni(t) {
  return typeof t == "string" ? t : kg(t) || "";
}
const Pg = "idb-keyval";
var Ng = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Bd(t.dbName, t.storeName)), { name: Pg, options: t, async hasItem(s) {
    return !(typeof await Pl(r(s), n) > "u");
  }, async getItem(s) {
    return await Pl(r(s), n) ?? null;
  }, setItem(s, i) {
    return Ig(r(s), i, n);
  }, removeItem(s) {
    return xg(r(s), n);
  }, getKeys() {
    return Tg(n);
  }, clear() {
    return Og(n);
  } };
};
const Ag = "WALLET_CONNECT_V2_INDEXED_DB", Lg = "keyvaluestorage";
let jg = class {
  constructor() {
    this.indexedDb = Sg({ driver: Ng({ dbName: Ag, storeName: Lg }) });
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
    await this.indexedDb.setItem(t, Ni(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, uo = { exports: {} };
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
  }), typeof pa < "u" && pa.localStorage ? uo.exports = pa.localStorage : typeof window < "u" && window.localStorage ? uo.exports = window.localStorage : uo.exports = new e();
})();
function Dg(t) {
  var e;
  return [t[0], Yo((e = t[1]) != null ? e : "")];
}
class Mg {
  constructor() {
    this.localStorage = uo.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Dg);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Yo(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Ni(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const zg = "wc_storage_version", Nl = 1, Ug = async (t, e, r) => {
  const n = zg, s = await e.getItem(n);
  if (s && s >= Nl) {
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
    const c = a.toLowerCase();
    if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
      const l = await t.getItem(a);
      await e.setItem(a, l), o.push(a);
    }
  }
  await e.setItem(n, Nl), r(e), Vg(t, o);
}, Vg = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let $g = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new Mg();
    this.storage = t;
    try {
      const e = new jg();
      Ug(t, e, this.setInitialized);
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
var Ps = {};
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
var Da = function(t, e) {
  return Da = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, Da(t, e);
};
function qg(t, e) {
  Da(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ma = function() {
  return Ma = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Ma.apply(this, arguments);
};
function Wg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function Fg(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function Zg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Hg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Bg(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(d) {
      try {
        l(n.next(d));
      } catch (f) {
        o(f);
      }
    }
    function c(d) {
      try {
        l(n.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function l(d) {
      d.done ? i(d.value) : s(d.value).then(a, c);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Kg(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(d) {
      return c([l, d]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = l[0] & 2 ? s.return : l[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, l[1])).done)
          return i;
        switch (s = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, s = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (d) {
        l = [6, d], s = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Yg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Gg(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function za(t) {
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
function Kd(t, e) {
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
function Qg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Kd(arguments[e]));
  return t;
}
function Jg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function ti(t) {
  return this instanceof ti ? (this.v = t, this) : new ti(t);
}
function Xg(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(v, b) {
        i.push([p, m, v, b]) > 1 || a(p, m);
      });
    });
  }
  function a(p, m) {
    try {
      c(n[p](m));
    } catch (v) {
      f(i[0][3], v);
    }
  }
  function c(p) {
    p.value instanceof ti ? Promise.resolve(p.value.v).then(l, d) : f(i[0][2], p);
  }
  function l(p) {
    a("next", p);
  }
  function d(p) {
    a("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function em(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: ti(t[s](o)), done: s === "return" } : i ? i(o) : o;
    } : i;
  }
}
function tm(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof za == "function" ? za(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(o) {
      return new Promise(function(a, c) {
        o = t[i](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(i, o, a, c) {
    Promise.resolve(c).then(function(l) {
      i({ value: l, done: a });
    }, o);
  }
}
function rm(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function nm(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function sm(t) {
  return t && t.__esModule ? t : { default: t };
}
function im(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function om(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ma;
  },
  __asyncDelegator: em,
  __asyncGenerator: Xg,
  __asyncValues: tm,
  __await: ti,
  __awaiter: Bg,
  __classPrivateFieldGet: im,
  __classPrivateFieldSet: om,
  __createBinding: Yg,
  __decorate: Fg,
  __exportStar: Gg,
  __extends: qg,
  __generator: Kg,
  __importDefault: sm,
  __importStar: nm,
  __makeTemplateObject: rm,
  __metadata: Hg,
  __param: Zg,
  __read: Kd,
  __rest: Wg,
  __spread: Qg,
  __spreadArrays: Jg,
  __values: za
}, Symbol.toStringTag, { value: "Module" })), Yr = /* @__PURE__ */ Bo(am);
var Vs = {}, le = {}, Al = {}, $s = {}, Ll;
function cm() {
  if (Ll)
    return $s;
  Ll = 1, Object.defineProperty($s, "__esModule", { value: !0 }), $s.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return $s.delay = t, $s;
}
var qn = {}, jl = {}, ls = {}, Dl;
function lm() {
  return Dl || (Dl = 1, Object.defineProperty(ls, "__esModule", { value: !0 }), ls.ONE_THOUSAND = ls.ONE_HUNDRED = void 0, ls.ONE_HUNDRED = 100, ls.ONE_THOUSAND = 1e3), ls;
}
var Ml = {}, zl;
function um() {
  return zl || (zl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Ml)), Ml;
}
var Ul;
function Yd() {
  return Ul || (Ul = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Yr;
    e.__exportStar(lm(), t), e.__exportStar(um(), t);
  }(jl)), jl;
}
var Vl;
function dm() {
  if (Vl)
    return qn;
  Vl = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.fromMiliseconds = qn.toMiliseconds = void 0;
  const t = Yd();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  qn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return qn.fromMiliseconds = r, qn;
}
var $l;
function hm() {
  return $l || ($l = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Yr;
    e.__exportStar(cm(), t), e.__exportStar(dm(), t);
  }(Al)), Al;
}
var us = {}, ql;
function fm() {
  if (ql)
    return us;
  ql = 1, Object.defineProperty(us, "__esModule", { value: !0 }), us.Watch = void 0;
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
  return us.Watch = t, us.default = t, us;
}
var Wl = {}, qs = {}, Fl;
function pm() {
  if (Fl)
    return qs;
  Fl = 1, Object.defineProperty(qs, "__esModule", { value: !0 }), qs.IWatch = void 0;
  class t {
  }
  return qs.IWatch = t, qs;
}
var Zl;
function gm() {
  return Zl || (Zl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(pm(), t);
  }(Wl)), Wl;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Yr;
  e.__exportStar(hm(), t), e.__exportStar(fm(), t), e.__exportStar(gm(), t), e.__exportStar(Yd(), t);
})(le);
var Hl = {}, Ws = {};
let ss = class {
};
const mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: ss
}, Symbol.toStringTag, { value: "Module" })), ym = /* @__PURE__ */ Bo(mm);
var Bl;
function vm() {
  if (Bl)
    return Ws;
  Bl = 1, Object.defineProperty(Ws, "__esModule", { value: !0 }), Ws.IHeartBeat = void 0;
  const t = ym;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Ws.IHeartBeat = e, Ws;
}
var Kl;
function Gd() {
  return Kl || (Kl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(vm(), t);
  }(Hl)), Hl;
}
var Yl = {}, Wn = {}, Gl;
function _m() {
  if (Gl)
    return Wn;
  Gl = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.HEARTBEAT_EVENTS = Wn.HEARTBEAT_INTERVAL = void 0;
  const t = le;
  return Wn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Wn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Wn;
}
var Ql;
function Qd() {
  return Ql || (Ql = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Yr.__exportStar(_m(), t);
  }(Yl)), Yl;
}
var Jl;
function bm() {
  if (Jl)
    return Vs;
  Jl = 1, Object.defineProperty(Vs, "__esModule", { value: !0 }), Vs.HeartBeat = void 0;
  const t = Yr, e = Lr, r = le, n = Gd(), s = Qd();
  class i extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const c = new i(a);
        return yield c.init(), c;
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
    on(a, c) {
      this.events.on(a, c);
    }
    once(a, c) {
      this.events.once(a, c);
    }
    off(a, c) {
      this.events.off(a, c);
    }
    removeListener(a, c) {
      this.events.removeListener(a, c);
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
  return Vs.HeartBeat = i, Vs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Yr;
  e.__exportStar(bm(), t), e.__exportStar(Gd(), t), e.__exportStar(Qd(), t);
})(Ps);
var Ze = {}, ga, Xl;
function wm() {
  if (Xl)
    return ga;
  Xl = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ga = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var c = new Array(a);
      c[0] = i(r);
      for (var l = 1; l < a; l++)
        c[l] = i(n[l]);
      return c.join(" ");
    }
    if (typeof r != "string")
      return r;
    var d = n.length;
    if (d === 0)
      return r;
    for (var f = "", p = 1 - o, m = -1, v = r && r.length || 0, b = 0; b < v; ) {
      if (r.charCodeAt(b) === 37 && b + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(b + 1)) {
          case 100:
          case 102:
            if (p >= d || n[p] == null)
              break;
            m < b && (f += r.slice(m, b)), f += Number(n[p]), m = b + 2, b++;
            break;
          case 105:
            if (p >= d || n[p] == null)
              break;
            m < b && (f += r.slice(m, b)), f += Math.floor(Number(n[p])), m = b + 2, b++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= d || n[p] === void 0)
              break;
            m < b && (f += r.slice(m, b));
            var C = typeof n[p];
            if (C === "string") {
              f += "'" + n[p] + "'", m = b + 2, b++;
              break;
            }
            if (C === "function") {
              f += n[p].name || "<anonymous>", m = b + 2, b++;
              break;
            }
            f += i(n[p]), m = b + 2, b++;
            break;
          case 115:
            if (p >= d)
              break;
            m < b && (f += r.slice(m, b)), f += String(n[p]), m = b + 2, b++;
            break;
          case 37:
            m < b && (f += r.slice(m, b)), f += "%", m = b + 2, b++, p--;
            break;
        }
        ++p;
      }
      ++b;
    }
    return m === -1 ? r : (m < v && (f += r.slice(m)), f);
  }
  return ga;
}
var ma, eu;
function Em() {
  if (eu)
    return ma;
  eu = 1;
  const t = wm();
  ma = s;
  const e = S().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: b,
    wrapResponseSerializer: b,
    wrapErrorSerializer: b,
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
        var Z = Object.assign({}, N, de), ue = y.browser.serialize === !0 ? Object.keys(Z) : A;
        delete U.serializers, c([U], ue, Z, this._stdErrSerialize);
      }
      function te(ce) {
        this._childLevel = (ce._childLevel | 0) + 1, this.error = l(ce, U, "error"), this.fatal = l(ce, U, "fatal"), this.warn = l(ce, U, "warn"), this.info = l(ce, U, "info"), this.debug = l(ce, U, "debug"), this.trace = l(ce, U, "trace"), Z && (this.serializers = Z, this._serialize = ue), u && (this._logEvent = f(
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: L, epochTime: w, unixTime: x, isoTime: _ });
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
        if (y.serialize && !y.asObject && c($, this._serialize, this.serializers, this._stdErrSerialize), y.asObject ? N.call(J, a(this, g, $, A)) : N.apply(J, $), y.transmit) {
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
    y._serialize && c(g, y._serialize, y.serializers, y._stdErrSerialize);
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
  function c(y, u, g, N) {
    for (const A in y)
      if (N && y[A] instanceof Error)
        y[A] = s.stdSerializers.err(y[A]);
      else if (typeof y[A] == "object" && !Array.isArray(y[A]))
        for (const $ in y[A])
          u && u.indexOf($) > -1 && $ in g && (y[A][$] = g[$](y[A][$]));
  }
  function l(y, u, g) {
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
    c(
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
    return typeof y.timestamp == "function" ? y.timestamp : y.timestamp === !1 ? L : w;
  }
  function v() {
    return {};
  }
  function b(y) {
    return y;
  }
  function C() {
  }
  function L() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function x() {
    return Math.round(Date.now() / 1e3);
  }
  function _() {
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
  return ma;
}
var ds = {}, tu;
function Jd() {
  return tu || (tu = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.PINO_CUSTOM_CONTEXT_KEY = ds.PINO_LOGGER_DEFAULTS = void 0, ds.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, ds.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), ds;
}
var Bt = {}, ru;
function Sm() {
  if (ru)
    return Bt;
  ru = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.generateChildLogger = Bt.formatChildLoggerContext = Bt.getLoggerContext = Bt.setBrowserLoggerContext = Bt.getBrowserLoggerContext = Bt.getDefaultLoggerOptions = void 0;
  const t = Jd();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Bt.getDefaultLoggerOptions = e;
  function r(a, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[c] || "";
  }
  Bt.getBrowserLoggerContext = r;
  function n(a, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] = c, a;
  }
  Bt.setBrowserLoggerContext = n;
  function s(a, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof a.bindings > "u" ? l = r(a, c) : l = a.bindings().context || "", l;
  }
  Bt.getLoggerContext = s;
  function i(a, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = s(a, l);
    return d.trim() ? `${d}/${c}` : c;
  }
  Bt.formatChildLoggerContext = i;
  function o(a, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = i(a, c, l), f = a.child({ context: d });
    return n(f, d, l);
  }
  return Bt.generateChildLogger = o, Bt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Yr, r = e.__importDefault(Em());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Jd(), t), e.__exportStar(Sm(), t);
})(Ze);
let Im = class extends ss {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, xm = class extends ss {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, Om = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, Cm = class extends ss {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, Tm = class extends ss {
  constructor(t) {
    super();
  }
}, km = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class Rm extends ss {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Pm extends ss {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let Nm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Am = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Lm = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, jm = class {
  constructor(t) {
    this.client = t;
  }
};
var Lc = {}, Ns = {}, Go = {}, Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.BrowserRandomSource = void 0;
const nu = 65536;
class Dm {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += nu)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, nu)));
    return r;
  }
}
Qo.BrowserRandomSource = Dm;
function Mm(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Jo = {}, dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
function zm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
dr.wipe = zm;
const Um = {}, Vm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Um
}, Symbol.toStringTag, { value: "Module" })), $m = /* @__PURE__ */ Bo(Vm);
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.NodeRandomSource = void 0;
const qm = dr;
class Wm {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Mm < "u") {
      const e = $m;
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
    return (0, qm.wipe)(r), n;
  }
}
Jo.NodeRandomSource = Wm;
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.SystemRandomSource = void 0;
const Fm = Qo, Zm = Jo;
class Hm {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Fm.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Zm.NodeRandomSource(), this._source.isAvailable) {
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
Go.SystemRandomSource = Hm;
var Se = {}, Xd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, c) {
    var l = a >>> 16 & 65535, d = a & 65535, f = c >>> 16 & 65535, p = c & 65535;
    return d * p + (l * p + d * f << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(a, c) {
    return a + c | 0;
  }
  t.add = r;
  function n(a, c) {
    return a - c | 0;
  }
  t.sub = n;
  function s(a, c) {
    return a << c | a >>> 32 - c;
  }
  t.rotl = s;
  function i(a, c) {
    return a << 32 - c | a >>> c;
  }
  t.rotr = i;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || o, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(Xd);
Object.defineProperty(Se, "__esModule", { value: !0 });
var eh = Xd;
function Bm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = Bm;
function Km(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = Km;
function Ym(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = Ym;
function Gm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = Gm;
function th(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = th;
Se.writeInt16BE = th;
function rh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = rh;
Se.writeInt16LE = rh;
function Ua(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = Ua;
function Va(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = Va;
function $a(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = $a;
function qa(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = qa;
function vo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = vo;
Se.writeInt32BE = vo;
function _o(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = _o;
Se.writeInt32LE = _o;
function Qm(t, e) {
  e === void 0 && (e = 0);
  var r = Ua(t, e), n = Ua(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = Qm;
function Jm(t, e) {
  e === void 0 && (e = 0);
  var r = Va(t, e), n = Va(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = Jm;
function Xm(t, e) {
  e === void 0 && (e = 0);
  var r = $a(t, e), n = $a(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = Xm;
function ey(t, e) {
  e === void 0 && (e = 0);
  var r = qa(t, e), n = qa(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = ey;
function nh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), vo(t / 4294967296 >>> 0, e, r), vo(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = nh;
Se.writeInt64BE = nh;
function sh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), _o(t >>> 0, e, r), _o(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = sh;
Se.writeInt64LE = sh;
function ty(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = ty;
function ry(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = ry;
function ny(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!eh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = ny;
function sy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!eh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = sy;
function iy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = iy;
function oy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = oy;
function ay(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = ay;
function cy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = cy;
function ly(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = ly;
function uy(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = uy;
function dy(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = dy;
function hy(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = hy;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Go, r = Se, n = dr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(l, d = t.defaultRandomSource) {
    return d.randomBytes(l);
  }
  t.randomBytes = s;
  function i(l = t.defaultRandomSource) {
    const d = s(4, l), f = (0, r.readUint32LE)(d);
    return (0, n.wipe)(d), f;
  }
  t.randomUint32 = i;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(l, d = o, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = d.length, v = 256 - 256 % m;
    for (; l > 0; ) {
      const b = s(Math.ceil(l * 256 / v), f);
      for (let C = 0; C < b.length && l > 0; C++) {
        const L = b[C];
        L < v && (p += d.charAt(L % m), l--);
      }
      (0, n.wipe)(b);
    }
    return p;
  }
  t.randomString = a;
  function c(l, d = o, f = t.defaultRandomSource) {
    const p = Math.ceil(l / (Math.log(d.length) / Math.LN2));
    return a(p, d, f);
  }
  t.randomStringForEntropy = c;
})(Ns);
var ih = {};
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
      }, a.prototype.update = function(c, l) {
        if (l === void 0 && (l = c.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = c[d++], l--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (d = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, c, d, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = c[d++], l--;
        return this;
      }, a.prototype.finish = function(c) {
        if (!this._finished) {
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, p = l << 3, m = l % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var v = d + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 8; v++)
          e.writeUint32BE(this._stateHi[v], c, v * 8), e.writeUint32BE(this._stateLo[v], c, v * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
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
      }, a.prototype.restoreState = function(c) {
        return this._stateHi.set(c.stateHi), this._stateLo.set(c.stateLo), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(c) {
        r.wipe(c.stateHi), r.wipe(c.stateLo), c.buffer && r.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
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
  function i(a, c, l, d, f, p, m) {
    for (var v = l[0], b = l[1], C = l[2], L = l[3], w = l[4], x = l[5], _ = l[6], S = l[7], y = d[0], u = d[1], g = d[2], N = d[3], A = d[4], $ = d[5], J = d[6], K = d[7], T, k, B, q, z, W, U, H; m >= 128; ) {
      for (var de = 0; de < 16; de++) {
        var Z = 8 * de + p;
        a[de] = e.readUint32BE(f, Z), c[de] = e.readUint32BE(f, Z + 4);
      }
      for (var de = 0; de < 80; de++) {
        var ue = v, te = b, ce = C, M = L, D = w, R = x, h = _, O = S, Q = y, re = u, Le = g, je = N, Oe = A, We = $, ot = J, et = K;
        if (T = S, k = K, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = (w >>> 14 | A << 18) ^ (w >>> 18 | A << 14) ^ (A >>> 9 | w << 23), k = (A >>> 14 | w << 18) ^ (A >>> 18 | w << 14) ^ (w >>> 9 | A << 23), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = w & x ^ ~w & _, k = A & $ ^ ~A & J, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = s[de * 2], k = s[de * 2 + 1], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = a[de % 16], k = c[de % 16], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, B = U & 65535 | H << 16, q = z & 65535 | W << 16, T = B, k = q, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = (v >>> 28 | y << 4) ^ (y >>> 2 | v << 30) ^ (y >>> 7 | v << 25), k = (y >>> 28 | v << 4) ^ (v >>> 2 | y << 30) ^ (v >>> 7 | y << 25), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, T = v & b ^ v & C ^ b & C, k = y & u ^ y & g ^ u & g, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, O = U & 65535 | H << 16, et = z & 65535 | W << 16, T = M, k = je, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = B, k = q, z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, M = U & 65535 | H << 16, je = z & 65535 | W << 16, b = ue, C = te, L = ce, w = M, x = D, _ = R, S = h, v = O, u = Q, g = re, N = Le, A = je, $ = Oe, J = We, K = ot, y = et, de % 16 === 15)
          for (var Z = 0; Z < 16; Z++)
            T = a[Z], k = c[Z], z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = a[(Z + 9) % 16], k = c[(Z + 9) % 16], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, B = a[(Z + 1) % 16], q = c[(Z + 1) % 16], T = (B >>> 1 | q << 31) ^ (B >>> 8 | q << 24) ^ B >>> 7, k = (q >>> 1 | B << 31) ^ (q >>> 8 | B << 24) ^ (q >>> 7 | B << 25), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, B = a[(Z + 14) % 16], q = c[(Z + 14) % 16], T = (B >>> 19 | q << 13) ^ (q >>> 29 | B << 3) ^ B >>> 6, k = (q >>> 19 | B << 13) ^ (B >>> 29 | q << 3) ^ (q >>> 6 | B << 26), z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, a[Z] = U & 65535 | H << 16, c[Z] = z & 65535 | W << 16;
      }
      T = v, k = y, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[0], k = d[0], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[0] = v = U & 65535 | H << 16, d[0] = y = z & 65535 | W << 16, T = b, k = u, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[1], k = d[1], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[1] = b = U & 65535 | H << 16, d[1] = u = z & 65535 | W << 16, T = C, k = g, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[2], k = d[2], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[2] = C = U & 65535 | H << 16, d[2] = g = z & 65535 | W << 16, T = L, k = N, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[3], k = d[3], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[3] = L = U & 65535 | H << 16, d[3] = N = z & 65535 | W << 16, T = w, k = A, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[4], k = d[4], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[4] = w = U & 65535 | H << 16, d[4] = A = z & 65535 | W << 16, T = x, k = $, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[5], k = d[5], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[5] = x = U & 65535 | H << 16, d[5] = $ = z & 65535 | W << 16, T = _, k = J, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[6], k = d[6], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[6] = _ = U & 65535 | H << 16, d[6] = J = z & 65535 | W << 16, T = S, k = K, z = k & 65535, W = k >>> 16, U = T & 65535, H = T >>> 16, T = l[7], k = d[7], z += k & 65535, W += k >>> 16, U += T & 65535, H += T >>> 16, W += z >>> 16, U += W >>> 16, H += U >>> 16, l[7] = S = U & 65535 | H << 16, d[7] = K = z & 65535 | W << 16, p += 128, m -= 128;
    }
    return p;
  }
  function o(a) {
    var c = new n();
    c.update(a);
    var l = c.digest();
    return c.clean(), l;
  }
  t.hash = o;
})(ih);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Ns, r = ih, n = dr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(M) {
    const D = new Float64Array(16);
    if (M)
      for (let R = 0; R < M.length; R++)
        D[R] = M[R];
    return D;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const o = s(), a = s([1]), c = s([
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
  ]), l = s([
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
  function m(M, D) {
    for (let R = 0; R < 16; R++)
      M[R] = D[R] | 0;
  }
  function v(M) {
    let D = 1;
    for (let R = 0; R < 16; R++) {
      let h = M[R] + D + 65535;
      D = Math.floor(h / 65536), M[R] = h - D * 65536;
    }
    M[0] += D - 1 + 37 * (D - 1);
  }
  function b(M, D, R) {
    const h = ~(R - 1);
    for (let O = 0; O < 16; O++) {
      const Q = h & (M[O] ^ D[O]);
      M[O] ^= Q, D[O] ^= Q;
    }
  }
  function C(M, D) {
    const R = s(), h = s();
    for (let O = 0; O < 16; O++)
      h[O] = D[O];
    v(h), v(h), v(h);
    for (let O = 0; O < 2; O++) {
      R[0] = h[0] - 65517;
      for (let re = 1; re < 15; re++)
        R[re] = h[re] - 65535 - (R[re - 1] >> 16 & 1), R[re - 1] &= 65535;
      R[15] = h[15] - 32767 - (R[14] >> 16 & 1);
      const Q = R[15] >> 16 & 1;
      R[14] &= 65535, b(h, R, 1 - Q);
    }
    for (let O = 0; O < 16; O++)
      M[2 * O] = h[O] & 255, M[2 * O + 1] = h[O] >> 8;
  }
  function L(M, D) {
    let R = 0;
    for (let h = 0; h < 32; h++)
      R |= M[h] ^ D[h];
    return (1 & R - 1 >>> 8) - 1;
  }
  function w(M, D) {
    const R = new Uint8Array(32), h = new Uint8Array(32);
    return C(R, M), C(h, D), L(R, h);
  }
  function x(M) {
    const D = new Uint8Array(32);
    return C(D, M), D[0] & 1;
  }
  function _(M, D) {
    for (let R = 0; R < 16; R++)
      M[R] = D[2 * R] + (D[2 * R + 1] << 8);
    M[15] &= 32767;
  }
  function S(M, D, R) {
    for (let h = 0; h < 16; h++)
      M[h] = D[h] + R[h];
  }
  function y(M, D, R) {
    for (let h = 0; h < 16; h++)
      M[h] = D[h] - R[h];
  }
  function u(M, D, R) {
    let h, O, Q = 0, re = 0, Le = 0, je = 0, Oe = 0, We = 0, ot = 0, et = 0, $e = 0, ze = 0, Ce = 0, Re = 0, Te = 0, Ee = 0, be = 0, pe = 0, Pe = 0, De = 0, ve = 0, Ue = 0, Fe = 0, Ke = 0, Ye = 0, He = 0, ar = 0, fr = 0, Mr = 0, At = 0, zr = 0, pr = 0, fn = 0, at = R[0], nt = R[1], pt = R[2], lt = R[3], gt = R[4], st = R[5], bt = R[6], It = R[7], xt = R[8], wt = R[9], Ot = R[10], Et = R[11], mt = R[12], tt = R[13], I = R[14], V = R[15];
    h = D[0], Q += h * at, re += h * nt, Le += h * pt, je += h * lt, Oe += h * gt, We += h * st, ot += h * bt, et += h * It, $e += h * xt, ze += h * wt, Ce += h * Ot, Re += h * Et, Te += h * mt, Ee += h * tt, be += h * I, pe += h * V, h = D[1], re += h * at, Le += h * nt, je += h * pt, Oe += h * lt, We += h * gt, ot += h * st, et += h * bt, $e += h * It, ze += h * xt, Ce += h * wt, Re += h * Ot, Te += h * Et, Ee += h * mt, be += h * tt, pe += h * I, Pe += h * V, h = D[2], Le += h * at, je += h * nt, Oe += h * pt, We += h * lt, ot += h * gt, et += h * st, $e += h * bt, ze += h * It, Ce += h * xt, Re += h * wt, Te += h * Ot, Ee += h * Et, be += h * mt, pe += h * tt, Pe += h * I, De += h * V, h = D[3], je += h * at, Oe += h * nt, We += h * pt, ot += h * lt, et += h * gt, $e += h * st, ze += h * bt, Ce += h * It, Re += h * xt, Te += h * wt, Ee += h * Ot, be += h * Et, pe += h * mt, Pe += h * tt, De += h * I, ve += h * V, h = D[4], Oe += h * at, We += h * nt, ot += h * pt, et += h * lt, $e += h * gt, ze += h * st, Ce += h * bt, Re += h * It, Te += h * xt, Ee += h * wt, be += h * Ot, pe += h * Et, Pe += h * mt, De += h * tt, ve += h * I, Ue += h * V, h = D[5], We += h * at, ot += h * nt, et += h * pt, $e += h * lt, ze += h * gt, Ce += h * st, Re += h * bt, Te += h * It, Ee += h * xt, be += h * wt, pe += h * Ot, Pe += h * Et, De += h * mt, ve += h * tt, Ue += h * I, Fe += h * V, h = D[6], ot += h * at, et += h * nt, $e += h * pt, ze += h * lt, Ce += h * gt, Re += h * st, Te += h * bt, Ee += h * It, be += h * xt, pe += h * wt, Pe += h * Ot, De += h * Et, ve += h * mt, Ue += h * tt, Fe += h * I, Ke += h * V, h = D[7], et += h * at, $e += h * nt, ze += h * pt, Ce += h * lt, Re += h * gt, Te += h * st, Ee += h * bt, be += h * It, pe += h * xt, Pe += h * wt, De += h * Ot, ve += h * Et, Ue += h * mt, Fe += h * tt, Ke += h * I, Ye += h * V, h = D[8], $e += h * at, ze += h * nt, Ce += h * pt, Re += h * lt, Te += h * gt, Ee += h * st, be += h * bt, pe += h * It, Pe += h * xt, De += h * wt, ve += h * Ot, Ue += h * Et, Fe += h * mt, Ke += h * tt, Ye += h * I, He += h * V, h = D[9], ze += h * at, Ce += h * nt, Re += h * pt, Te += h * lt, Ee += h * gt, be += h * st, pe += h * bt, Pe += h * It, De += h * xt, ve += h * wt, Ue += h * Ot, Fe += h * Et, Ke += h * mt, Ye += h * tt, He += h * I, ar += h * V, h = D[10], Ce += h * at, Re += h * nt, Te += h * pt, Ee += h * lt, be += h * gt, pe += h * st, Pe += h * bt, De += h * It, ve += h * xt, Ue += h * wt, Fe += h * Ot, Ke += h * Et, Ye += h * mt, He += h * tt, ar += h * I, fr += h * V, h = D[11], Re += h * at, Te += h * nt, Ee += h * pt, be += h * lt, pe += h * gt, Pe += h * st, De += h * bt, ve += h * It, Ue += h * xt, Fe += h * wt, Ke += h * Ot, Ye += h * Et, He += h * mt, ar += h * tt, fr += h * I, Mr += h * V, h = D[12], Te += h * at, Ee += h * nt, be += h * pt, pe += h * lt, Pe += h * gt, De += h * st, ve += h * bt, Ue += h * It, Fe += h * xt, Ke += h * wt, Ye += h * Ot, He += h * Et, ar += h * mt, fr += h * tt, Mr += h * I, At += h * V, h = D[13], Ee += h * at, be += h * nt, pe += h * pt, Pe += h * lt, De += h * gt, ve += h * st, Ue += h * bt, Fe += h * It, Ke += h * xt, Ye += h * wt, He += h * Ot, ar += h * Et, fr += h * mt, Mr += h * tt, At += h * I, zr += h * V, h = D[14], be += h * at, pe += h * nt, Pe += h * pt, De += h * lt, ve += h * gt, Ue += h * st, Fe += h * bt, Ke += h * It, Ye += h * xt, He += h * wt, ar += h * Ot, fr += h * Et, Mr += h * mt, At += h * tt, zr += h * I, pr += h * V, h = D[15], pe += h * at, Pe += h * nt, De += h * pt, ve += h * lt, Ue += h * gt, Fe += h * st, Ke += h * bt, Ye += h * It, He += h * xt, ar += h * wt, fr += h * Ot, Mr += h * Et, At += h * mt, zr += h * tt, pr += h * I, fn += h * V, Q += 38 * Pe, re += 38 * De, Le += 38 * ve, je += 38 * Ue, Oe += 38 * Fe, We += 38 * Ke, ot += 38 * Ye, et += 38 * He, $e += 38 * ar, ze += 38 * fr, Ce += 38 * Mr, Re += 38 * At, Te += 38 * zr, Ee += 38 * pr, be += 38 * fn, O = 1, h = Q + O + 65535, O = Math.floor(h / 65536), Q = h - O * 65536, h = re + O + 65535, O = Math.floor(h / 65536), re = h - O * 65536, h = Le + O + 65535, O = Math.floor(h / 65536), Le = h - O * 65536, h = je + O + 65535, O = Math.floor(h / 65536), je = h - O * 65536, h = Oe + O + 65535, O = Math.floor(h / 65536), Oe = h - O * 65536, h = We + O + 65535, O = Math.floor(h / 65536), We = h - O * 65536, h = ot + O + 65535, O = Math.floor(h / 65536), ot = h - O * 65536, h = et + O + 65535, O = Math.floor(h / 65536), et = h - O * 65536, h = $e + O + 65535, O = Math.floor(h / 65536), $e = h - O * 65536, h = ze + O + 65535, O = Math.floor(h / 65536), ze = h - O * 65536, h = Ce + O + 65535, O = Math.floor(h / 65536), Ce = h - O * 65536, h = Re + O + 65535, O = Math.floor(h / 65536), Re = h - O * 65536, h = Te + O + 65535, O = Math.floor(h / 65536), Te = h - O * 65536, h = Ee + O + 65535, O = Math.floor(h / 65536), Ee = h - O * 65536, h = be + O + 65535, O = Math.floor(h / 65536), be = h - O * 65536, h = pe + O + 65535, O = Math.floor(h / 65536), pe = h - O * 65536, Q += O - 1 + 37 * (O - 1), O = 1, h = Q + O + 65535, O = Math.floor(h / 65536), Q = h - O * 65536, h = re + O + 65535, O = Math.floor(h / 65536), re = h - O * 65536, h = Le + O + 65535, O = Math.floor(h / 65536), Le = h - O * 65536, h = je + O + 65535, O = Math.floor(h / 65536), je = h - O * 65536, h = Oe + O + 65535, O = Math.floor(h / 65536), Oe = h - O * 65536, h = We + O + 65535, O = Math.floor(h / 65536), We = h - O * 65536, h = ot + O + 65535, O = Math.floor(h / 65536), ot = h - O * 65536, h = et + O + 65535, O = Math.floor(h / 65536), et = h - O * 65536, h = $e + O + 65535, O = Math.floor(h / 65536), $e = h - O * 65536, h = ze + O + 65535, O = Math.floor(h / 65536), ze = h - O * 65536, h = Ce + O + 65535, O = Math.floor(h / 65536), Ce = h - O * 65536, h = Re + O + 65535, O = Math.floor(h / 65536), Re = h - O * 65536, h = Te + O + 65535, O = Math.floor(h / 65536), Te = h - O * 65536, h = Ee + O + 65535, O = Math.floor(h / 65536), Ee = h - O * 65536, h = be + O + 65535, O = Math.floor(h / 65536), be = h - O * 65536, h = pe + O + 65535, O = Math.floor(h / 65536), pe = h - O * 65536, Q += O - 1 + 37 * (O - 1), M[0] = Q, M[1] = re, M[2] = Le, M[3] = je, M[4] = Oe, M[5] = We, M[6] = ot, M[7] = et, M[8] = $e, M[9] = ze, M[10] = Ce, M[11] = Re, M[12] = Te, M[13] = Ee, M[14] = be, M[15] = pe;
  }
  function g(M, D) {
    u(M, D, D);
  }
  function N(M, D) {
    const R = s();
    let h;
    for (h = 0; h < 16; h++)
      R[h] = D[h];
    for (h = 253; h >= 0; h--)
      g(R, R), h !== 2 && h !== 4 && u(R, R, D);
    for (h = 0; h < 16; h++)
      M[h] = R[h];
  }
  function A(M, D) {
    const R = s();
    let h;
    for (h = 0; h < 16; h++)
      R[h] = D[h];
    for (h = 250; h >= 0; h--)
      g(R, R), h !== 1 && u(R, R, D);
    for (h = 0; h < 16; h++)
      M[h] = R[h];
  }
  function $(M, D) {
    const R = s(), h = s(), O = s(), Q = s(), re = s(), Le = s(), je = s(), Oe = s(), We = s();
    y(R, M[1], M[0]), y(We, D[1], D[0]), u(R, R, We), S(h, M[0], M[1]), S(We, D[0], D[1]), u(h, h, We), u(O, M[3], D[3]), u(O, O, l), u(Q, M[2], D[2]), S(Q, Q, Q), y(re, h, R), y(Le, Q, O), S(je, Q, O), S(Oe, h, R), u(M[0], re, Le), u(M[1], Oe, je), u(M[2], je, Le), u(M[3], re, Oe);
  }
  function J(M, D, R) {
    for (let h = 0; h < 4; h++)
      b(M[h], D[h], R);
  }
  function K(M, D) {
    const R = s(), h = s(), O = s();
    N(O, D[2]), u(R, D[0], O), u(h, D[1], O), C(M, h), M[31] ^= x(R) << 7;
  }
  function T(M, D, R) {
    m(M[0], o), m(M[1], a), m(M[2], a), m(M[3], o);
    for (let h = 255; h >= 0; --h) {
      const O = R[h / 8 | 0] >> (h & 7) & 1;
      J(M, D, O), $(D, M), $(M, M), J(M, D, O);
    }
  }
  function k(M, D) {
    const R = [s(), s(), s(), s()];
    m(R[0], d), m(R[1], f), m(R[2], a), u(R[3], d, f), T(M, R, D);
  }
  function B(M) {
    if (M.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const D = (0, r.hash)(M);
    D[0] &= 248, D[31] &= 127, D[31] |= 64;
    const R = new Uint8Array(32), h = [s(), s(), s(), s()];
    k(h, D), K(R, h);
    const O = new Uint8Array(64);
    return O.set(M), O.set(R, 32), {
      publicKey: R,
      secretKey: O
    };
  }
  t.generateKeyPairFromSeed = B;
  function q(M) {
    const D = (0, e.randomBytes)(32, M), R = B(D);
    return (0, n.wipe)(D), R;
  }
  t.generateKeyPair = q;
  function z(M) {
    if (M.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(M.subarray(32));
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
  function U(M, D) {
    let R, h, O, Q;
    for (h = 63; h >= 32; --h) {
      for (R = 0, O = h - 32, Q = h - 12; O < Q; ++O)
        D[O] += R - 16 * D[h] * W[O - (h - 32)], R = Math.floor((D[O] + 128) / 256), D[O] -= R * 256;
      D[O] += R, D[h] = 0;
    }
    for (R = 0, O = 0; O < 32; O++)
      D[O] += R - (D[31] >> 4) * W[O], R = D[O] >> 8, D[O] &= 255;
    for (O = 0; O < 32; O++)
      D[O] -= R * W[O];
    for (h = 0; h < 32; h++)
      D[h + 1] += D[h] >> 8, M[h] = D[h] & 255;
  }
  function H(M) {
    const D = new Float64Array(64);
    for (let R = 0; R < 64; R++)
      D[R] = M[R];
    for (let R = 0; R < 64; R++)
      M[R] = 0;
    U(M, D);
  }
  function de(M, D) {
    const R = new Float64Array(64), h = [s(), s(), s(), s()], O = (0, r.hash)(M.subarray(0, 32));
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    const Q = new Uint8Array(64);
    Q.set(O.subarray(32), 32);
    const re = new r.SHA512();
    re.update(Q.subarray(32)), re.update(D);
    const Le = re.digest();
    re.clean(), H(Le), k(h, Le), K(Q, h), re.reset(), re.update(Q.subarray(0, 32)), re.update(M.subarray(32)), re.update(D);
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
  function Z(M, D) {
    const R = s(), h = s(), O = s(), Q = s(), re = s(), Le = s(), je = s();
    return m(M[2], a), _(M[1], D), g(O, M[1]), u(Q, O, c), y(O, O, M[2]), S(Q, M[2], Q), g(re, Q), g(Le, re), u(je, Le, re), u(R, je, O), u(R, R, Q), A(R, R), u(R, R, O), u(R, R, Q), u(R, R, Q), u(M[0], R, Q), g(h, M[0]), u(h, h, Q), w(h, O) && u(M[0], M[0], p), g(h, M[0]), u(h, h, Q), w(h, O) ? -1 : (x(M[0]) === D[31] >> 7 && y(M[0], o, M[0]), u(M[3], M[0], M[1]), 0);
  }
  function ue(M, D, R) {
    const h = new Uint8Array(32), O = [s(), s(), s(), s()], Q = [s(), s(), s(), s()];
    if (R.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (Z(Q, M))
      return !1;
    const re = new r.SHA512();
    re.update(R.subarray(0, 32)), re.update(M), re.update(D);
    const Le = re.digest();
    return H(Le), T(O, Q, Le), k(Q, R.subarray(32)), $(O, Q), K(h, O), !L(R, h);
  }
  t.verify = ue;
  function te(M) {
    let D = [s(), s(), s(), s()];
    if (Z(D, M))
      throw new Error("Ed25519: invalid public key");
    let R = s(), h = s(), O = D[1];
    S(R, a, O), y(h, a, O), N(h, h), u(R, R, h);
    let Q = new Uint8Array(32);
    return C(Q, R), Q;
  }
  t.convertPublicKeyToX25519 = te;
  function ce(M) {
    const D = (0, r.hash)(M.subarray(0, 32));
    D[0] &= 248, D[31] &= 127, D[31] |= 64;
    const R = new Uint8Array(D.subarray(0, 32));
    return (0, n.wipe)(D), R;
  }
  t.convertSecretKeyToX25519 = ce;
})(Lc);
const fy = "EdDSA", py = "JWT", oh = ".", ah = "base64url", gy = "utf8", my = "utf8", yy = ":", vy = "did", _y = "key", su = "base58btc", by = "z", wy = "K36", Ey = 32;
function jc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ch(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? jc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Wa(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = ch(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return jc(r);
}
function Sy(t, e) {
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
  var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var b = 0, C = 0, L = 0, w = v.length; L !== w && v[L] === 0; )
      L++, b++;
    for (var x = (w - L) * d + 1 >>> 0, _ = new Uint8Array(x); L !== w; ) {
      for (var S = v[L], y = 0, u = x - 1; (S !== 0 || y < C) && u !== -1; u--, y++)
        S += 256 * _[u] >>> 0, _[u] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      C = y, L++;
    }
    for (var g = x - C; g !== x && _[g] === 0; )
      g++;
    for (var N = c.repeat(b); g < x; ++g)
      N += t.charAt(_[g]);
    return N;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var b = 0;
    if (v[b] !== " ") {
      for (var C = 0, L = 0; v[b] === c; )
        C++, b++;
      for (var w = (v.length - b) * l + 1 >>> 0, x = new Uint8Array(w); v[b]; ) {
        var _ = r[v.charCodeAt(b)];
        if (_ === 255)
          return;
        for (var S = 0, y = w - 1; (_ !== 0 || S < L) && y !== -1; y--, S++)
          _ += a * x[y] >>> 0, x[y] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        L = S, b++;
      }
      if (v[b] !== " ") {
        for (var u = w - L; u !== w && x[u] === 0; )
          u++;
        for (var g = new Uint8Array(C + (w - u)), N = C; u !== w; )
          g[N++] = x[u++];
        return g;
      }
    }
  }
  function m(v) {
    var b = p(v);
    if (b)
      return b;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: p,
    decode: m
  };
}
var Iy = Sy, xy = Iy;
const Oy = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Cy = (t) => new TextEncoder().encode(t), Ty = (t) => new TextDecoder().decode(t);
class ky {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Ry {
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
    return lh(this, e);
  }
}
class Py {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return lh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const lh = (t, e) => new Py({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Ny {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new ky(e, r, n), this.decoder = new Ry(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Xo = ({ name: t, prefix: e, encode: r, decode: n }) => new Ny(t, e, r, n), Ai = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = xy(r, e);
  return Xo({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => Oy(s(i))
  });
}, Ay = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, c = 0, l = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, a += r, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Ly = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c)
    for (a = a << 8 | t[c], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Dt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Xo({
  prefix: e,
  name: t,
  encode(s) {
    return Ly(s, n, r);
  },
  decode(s) {
    return Ay(s, n, r, t);
  }
}), jy = Xo({
  prefix: "\0",
  name: "identity",
  encode: (t) => Ty(t),
  decode: (t) => Cy(t)
}), Dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: jy
}, Symbol.toStringTag, { value: "Module" })), My = Dt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: My
}, Symbol.toStringTag, { value: "Module" })), Uy = Dt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Uy
}, Symbol.toStringTag, { value: "Module" })), $y = Ai({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: $y
}, Symbol.toStringTag, { value: "Module" })), Wy = Dt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Fy = Dt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Wy,
  base16upper: Fy
}, Symbol.toStringTag, { value: "Module" })), Hy = Dt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), By = Dt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Ky = Dt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Yy = Dt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Gy = Dt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Qy = Dt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Jy = Dt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Xy = Dt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), ev = Dt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Hy,
  base32hex: Gy,
  base32hexpad: Jy,
  base32hexpadupper: Xy,
  base32hexupper: Qy,
  base32pad: Ky,
  base32padupper: Yy,
  base32upper: By,
  base32z: ev
}, Symbol.toStringTag, { value: "Module" })), rv = Ai({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), nv = Ai({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: rv,
  base36upper: nv
}, Symbol.toStringTag, { value: "Module" })), iv = Ai({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), ov = Ai({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: iv,
  base58flickr: ov
}, Symbol.toStringTag, { value: "Module" })), cv = Dt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), lv = Dt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), uv = Dt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), dv = Dt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: cv,
  base64pad: lv,
  base64url: uv,
  base64urlpad: dv
}, Symbol.toStringTag, { value: "Module" })), uh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), fv = uh.reduce((t, e, r) => (t[r] = e, t), []), pv = uh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function gv(t) {
  return t.reduce((e, r) => (e += fv[r], e), "");
}
function mv(t) {
  const e = [];
  for (const r of t) {
    const n = pv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const yv = Xo({
  prefix: "🚀",
  name: "base256emoji",
  encode: gv,
  decode: mv
}), vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: yv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const iu = {
  ...Dy,
  ...zy,
  ...Vy,
  ...qy,
  ...Zy,
  ...tv,
  ...sv,
  ...av,
  ...hv,
  ...vv
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
const ou = dh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ya = dh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = ch(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), hh = {
  utf8: ou,
  "utf-8": ou,
  hex: iu.base16,
  latin1: ya,
  ascii: ya,
  binary: ya,
  ...iu
};
function Xt(t, e = "utf8") {
  const r = hh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function or(t, e = "utf8") {
  const r = hh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? jc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function bo(t) {
  return Xt(or(Ni(t), gy), ah);
}
function fh(t) {
  const e = or(wy, su), r = by + Xt(Wa([e, t]), su);
  return [vy, _y, r].join(yy);
}
function _v(t) {
  return Xt(t, ah);
}
function bv(t) {
  return or([bo(t.header), bo(t.payload)].join(oh), my);
}
function wv(t) {
  return [
    bo(t.header),
    bo(t.payload),
    _v(t.signature)
  ].join(oh);
}
function au(t = Ns.randomBytes(Ey)) {
  return Lc.generateKeyPairFromSeed(t);
}
async function Ev(t, e, r, n, s = le.fromMiliseconds(Date.now())) {
  const i = { alg: fy, typ: py }, o = fh(n.publicKey), a = s + r, c = { iss: o, sub: t, aud: e, iat: s, exp: a }, l = bv({ header: i, payload: c }), d = Lc.sign(n.secretKey, l);
  return wv({ header: i, payload: c, signature: d });
}
var Dc = {}, ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
var Vt = Se, Fa = dr, Sv = 20;
function Iv(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], b = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], C = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], L = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], x = n, _ = s, S = i, y = o, u = a, g = c, N = l, A = d, $ = f, J = p, K = m, T = v, k = b, B = C, q = L, z = w, W = 0; W < Sv; W += 2)
    x = x + u | 0, k ^= x, k = k >>> 16 | k << 16, $ = $ + k | 0, u ^= $, u = u >>> 20 | u << 12, _ = _ + g | 0, B ^= _, B = B >>> 16 | B << 16, J = J + B | 0, g ^= J, g = g >>> 20 | g << 12, S = S + N | 0, q ^= S, q = q >>> 16 | q << 16, K = K + q | 0, N ^= K, N = N >>> 20 | N << 12, y = y + A | 0, z ^= y, z = z >>> 16 | z << 16, T = T + z | 0, A ^= T, A = A >>> 20 | A << 12, S = S + N | 0, q ^= S, q = q >>> 24 | q << 8, K = K + q | 0, N ^= K, N = N >>> 25 | N << 7, y = y + A | 0, z ^= y, z = z >>> 24 | z << 8, T = T + z | 0, A ^= T, A = A >>> 25 | A << 7, _ = _ + g | 0, B ^= _, B = B >>> 24 | B << 8, J = J + B | 0, g ^= J, g = g >>> 25 | g << 7, x = x + u | 0, k ^= x, k = k >>> 24 | k << 8, $ = $ + k | 0, u ^= $, u = u >>> 25 | u << 7, x = x + g | 0, z ^= x, z = z >>> 16 | z << 16, K = K + z | 0, g ^= K, g = g >>> 20 | g << 12, _ = _ + N | 0, k ^= _, k = k >>> 16 | k << 16, T = T + k | 0, N ^= T, N = N >>> 20 | N << 12, S = S + A | 0, B ^= S, B = B >>> 16 | B << 16, $ = $ + B | 0, A ^= $, A = A >>> 20 | A << 12, y = y + u | 0, q ^= y, q = q >>> 16 | q << 16, J = J + q | 0, u ^= J, u = u >>> 20 | u << 12, S = S + A | 0, B ^= S, B = B >>> 24 | B << 8, $ = $ + B | 0, A ^= $, A = A >>> 25 | A << 7, y = y + u | 0, q ^= y, q = q >>> 24 | q << 8, J = J + q | 0, u ^= J, u = u >>> 25 | u << 7, _ = _ + N | 0, k ^= _, k = k >>> 24 | k << 8, T = T + k | 0, N ^= T, N = N >>> 25 | N << 7, x = x + g | 0, z ^= x, z = z >>> 24 | z << 8, K = K + z | 0, g ^= K, g = g >>> 25 | g << 7;
  Vt.writeUint32LE(x + n | 0, t, 0), Vt.writeUint32LE(_ + s | 0, t, 4), Vt.writeUint32LE(S + i | 0, t, 8), Vt.writeUint32LE(y + o | 0, t, 12), Vt.writeUint32LE(u + a | 0, t, 16), Vt.writeUint32LE(g + c | 0, t, 20), Vt.writeUint32LE(N + l | 0, t, 24), Vt.writeUint32LE(A + d | 0, t, 28), Vt.writeUint32LE($ + f | 0, t, 32), Vt.writeUint32LE(J + p | 0, t, 36), Vt.writeUint32LE(K + m | 0, t, 40), Vt.writeUint32LE(T + v | 0, t, 44), Vt.writeUint32LE(k + b | 0, t, 48), Vt.writeUint32LE(B + C | 0, t, 52), Vt.writeUint32LE(q + L | 0, t, 56), Vt.writeUint32LE(z + w | 0, t, 60);
}
function ph(t, e, r, n, s) {
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
  for (var a = new Uint8Array(64), c = 0; c < r.length; c += 64) {
    Iv(a, i, t);
    for (var l = c; l < c + 64 && l < r.length; l++)
      n[l] = r[l] ^ a[l - c];
    Ov(i, 0, o);
  }
  return Fa.wipe(a), s === 0 && Fa.wipe(i), n;
}
ea.streamXOR = ph;
function xv(t, e, r, n) {
  return n === void 0 && (n = 0), Fa.wipe(r), ph(t, e, r, r, n);
}
ea.stream = xv;
function Ov(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var gh = {}, Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
function Cv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Dn.select = Cv;
function Tv(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Dn.lessOrEqual = Tv;
function mh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Dn.compare = mh;
function kv(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : mh(t, e) !== 0;
}
Dn.equal = kv;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Dn, r = dr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var c = a[0] | a[1] << 8;
        this._r[0] = c & 8191;
        var l = a[2] | a[3] << 8;
        this._r[1] = (c >>> 13 | l << 3) & 8191;
        var d = a[4] | a[5] << 8;
        this._r[2] = (l >>> 10 | d << 6) & 7939;
        var f = a[6] | a[7] << 8;
        this._r[3] = (d >>> 7 | f << 9) & 8191;
        var p = a[8] | a[9] << 8;
        this._r[4] = (f >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var b = a[14] | a[15] << 8;
        this._r[8] = (v >>> 8 | b << 8) & 8191, this._r[9] = b >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, c, l) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], b = this._h[4], C = this._h[5], L = this._h[6], w = this._h[7], x = this._h[8], _ = this._h[9], S = this._r[0], y = this._r[1], u = this._r[2], g = this._r[3], N = this._r[4], A = this._r[5], $ = this._r[6], J = this._r[7], K = this._r[8], T = this._r[9]; l >= 16; ) {
          var k = a[c + 0] | a[c + 1] << 8;
          f += k & 8191;
          var B = a[c + 2] | a[c + 3] << 8;
          p += (k >>> 13 | B << 3) & 8191;
          var q = a[c + 4] | a[c + 5] << 8;
          m += (B >>> 10 | q << 6) & 8191;
          var z = a[c + 6] | a[c + 7] << 8;
          v += (q >>> 7 | z << 9) & 8191;
          var W = a[c + 8] | a[c + 9] << 8;
          b += (z >>> 4 | W << 12) & 8191, C += W >>> 1 & 8191;
          var U = a[c + 10] | a[c + 11] << 8;
          L += (W >>> 14 | U << 2) & 8191;
          var H = a[c + 12] | a[c + 13] << 8;
          w += (U >>> 11 | H << 5) & 8191;
          var de = a[c + 14] | a[c + 15] << 8;
          x += (H >>> 8 | de << 8) & 8191, _ += de >>> 5 | d;
          var Z = 0, ue = Z;
          ue += f * S, ue += p * (5 * T), ue += m * (5 * K), ue += v * (5 * J), ue += b * (5 * $), Z = ue >>> 13, ue &= 8191, ue += C * (5 * A), ue += L * (5 * N), ue += w * (5 * g), ue += x * (5 * u), ue += _ * (5 * y), Z += ue >>> 13, ue &= 8191;
          var te = Z;
          te += f * y, te += p * S, te += m * (5 * T), te += v * (5 * K), te += b * (5 * J), Z = te >>> 13, te &= 8191, te += C * (5 * $), te += L * (5 * A), te += w * (5 * N), te += x * (5 * g), te += _ * (5 * u), Z += te >>> 13, te &= 8191;
          var ce = Z;
          ce += f * u, ce += p * y, ce += m * S, ce += v * (5 * T), ce += b * (5 * K), Z = ce >>> 13, ce &= 8191, ce += C * (5 * J), ce += L * (5 * $), ce += w * (5 * A), ce += x * (5 * N), ce += _ * (5 * g), Z += ce >>> 13, ce &= 8191;
          var M = Z;
          M += f * g, M += p * u, M += m * y, M += v * S, M += b * (5 * T), Z = M >>> 13, M &= 8191, M += C * (5 * K), M += L * (5 * J), M += w * (5 * $), M += x * (5 * A), M += _ * (5 * N), Z += M >>> 13, M &= 8191;
          var D = Z;
          D += f * N, D += p * g, D += m * u, D += v * y, D += b * S, Z = D >>> 13, D &= 8191, D += C * (5 * T), D += L * (5 * K), D += w * (5 * J), D += x * (5 * $), D += _ * (5 * A), Z += D >>> 13, D &= 8191;
          var R = Z;
          R += f * A, R += p * N, R += m * g, R += v * u, R += b * y, Z = R >>> 13, R &= 8191, R += C * S, R += L * (5 * T), R += w * (5 * K), R += x * (5 * J), R += _ * (5 * $), Z += R >>> 13, R &= 8191;
          var h = Z;
          h += f * $, h += p * A, h += m * N, h += v * g, h += b * u, Z = h >>> 13, h &= 8191, h += C * y, h += L * S, h += w * (5 * T), h += x * (5 * K), h += _ * (5 * J), Z += h >>> 13, h &= 8191;
          var O = Z;
          O += f * J, O += p * $, O += m * A, O += v * N, O += b * g, Z = O >>> 13, O &= 8191, O += C * u, O += L * y, O += w * S, O += x * (5 * T), O += _ * (5 * K), Z += O >>> 13, O &= 8191;
          var Q = Z;
          Q += f * K, Q += p * J, Q += m * $, Q += v * A, Q += b * N, Z = Q >>> 13, Q &= 8191, Q += C * g, Q += L * u, Q += w * y, Q += x * S, Q += _ * (5 * T), Z += Q >>> 13, Q &= 8191;
          var re = Z;
          re += f * T, re += p * K, re += m * J, re += v * $, re += b * A, Z = re >>> 13, re &= 8191, re += C * N, re += L * g, re += w * u, re += x * y, re += _ * S, Z += re >>> 13, re &= 8191, Z = (Z << 2) + Z | 0, Z = Z + ue | 0, ue = Z & 8191, Z = Z >>> 13, te += Z, f = ue, p = te, m = ce, v = M, b = D, C = R, L = h, w = O, x = Q, _ = re, c += 16, l -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = b, this._h[5] = C, this._h[6] = L, this._h[7] = w, this._h[8] = x, this._h[9] = _;
      }, o.prototype.finish = function(a, c) {
        c === void 0 && (c = 0);
        var l = new Uint16Array(10), d, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += d, d = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, l[0] = this._h[0] + 5, d = l[0] >>> 13, l[0] &= 8191, m = 1; m < 10; m++)
          l[m] = this._h[m] + d, d = l[m] >>> 13, l[m] &= 8191;
        for (l[9] -= 8192, f = (d ^ 1) - 1, m = 0; m < 10; m++)
          l[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | l[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return a[c + 0] = this._h[0] >>> 0, a[c + 1] = this._h[0] >>> 8, a[c + 2] = this._h[1] >>> 0, a[c + 3] = this._h[1] >>> 8, a[c + 4] = this._h[2] >>> 0, a[c + 5] = this._h[2] >>> 8, a[c + 6] = this._h[3] >>> 0, a[c + 7] = this._h[3] >>> 8, a[c + 8] = this._h[4] >>> 0, a[c + 9] = this._h[4] >>> 8, a[c + 10] = this._h[5] >>> 0, a[c + 11] = this._h[5] >>> 8, a[c + 12] = this._h[6] >>> 0, a[c + 13] = this._h[6] >>> 8, a[c + 14] = this._h[7] >>> 0, a[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var c = 0, l = a.length, d;
        if (this._leftover) {
          d = 16 - this._leftover, d > l && (d = l);
          for (var f = 0; f < d; f++)
            this._buffer[this._leftover + f] = a[c + f];
          if (l -= d, c += d, this._leftover += d, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (d = l - l % 16, this._blocks(a, c, d), c += d, l -= d), l) {
          for (var f = 0; f < l; f++)
            this._buffer[this._leftover + f] = a[c + f];
          this._leftover += l;
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
    var c = new n(o);
    c.update(a);
    var l = c.digest();
    return c.clean(), l;
  }
  t.oneTimeAuth = s;
  function i(o, a) {
    return o.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(o, a);
  }
  t.equal = i;
})(gh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ea, r = gh, n = dr, s = Se, i = Dn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function c(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return c.prototype.seal = function(l, d, f, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var b = d.length + this.tagLength, C;
        if (p) {
          if (p.length !== b)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          C = p;
        } else
          C = new Uint8Array(b);
        return e.streamXOR(this._key, m, d, C, 4), this._authenticate(C.subarray(C.length - this.tagLength, C.length), v, C.subarray(0, C.length - this.tagLength), f), n.wipe(m), C;
      }, c.prototype.open = function(l, d, f, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var b = new Uint8Array(this.tagLength);
        if (this._authenticate(b, v, d.subarray(0, d.length - this.tagLength), f), !i.equal(b, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var C = d.length - this.tagLength, L;
        if (p) {
          if (p.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = p;
        } else
          L = new Uint8Array(C);
        return e.streamXOR(this._key, m, d.subarray(0, d.length - this.tagLength), L, 4), n.wipe(m), L;
      }, c.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, c.prototype._authenticate = function(l, d, f, p) {
        var m = new r.Poly1305(d);
        p && (m.update(p), p.length % 16 > 0 && m.update(o.subarray(p.length % 16))), m.update(f), f.length % 16 > 0 && m.update(o.subarray(f.length % 16));
        var v = new Uint8Array(8);
        p && s.writeUint64LE(p.length, v), m.update(v), s.writeUint64LE(f.length, v), m.update(v);
        for (var b = m.digest(), C = 0; C < b.length; C++)
          l[C] = b[C];
        m.clean(), n.wipe(b), n.wipe(v);
      }, c;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(Dc);
var yh = {}, Li = {}, Mc = {};
Object.defineProperty(Mc, "__esModule", { value: !0 });
function Rv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Mc.isSerializableHash = Rv;
Object.defineProperty(Li, "__esModule", { value: !0 });
var $r = Mc, Pv = Dn, Nv = dr, vh = (
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
      this._outer.update(n), $r.isSerializableHash(this._inner) && $r.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Nv.wipe(n);
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
Li.HMAC = vh;
function Av(t, e, r) {
  var n = new vh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
Li.hmac = Av;
Li.equal = Pv.equal;
Object.defineProperty(yh, "__esModule", { value: !0 });
var cu = Li, lu = dr, Lv = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = cu.hmac(this._hash, n, r);
      this._hmac = new cu.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), lu.wipe(this._buffer), lu.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), jv = yh.HKDF = Lv, ta = {};
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
      }, a.prototype.update = function(c, l) {
        if (l === void 0 && (l = c.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = c[d++], l--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (d = i(this._temp, this._state, c, d, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = c[d++], l--;
        return this;
      }, a.prototype.finish = function(c) {
        if (!this._finished) {
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, p = l << 3, m = l % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var v = d + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 4; v++)
          e.writeUint32BE(this._state[v], c, v * 4);
        return this;
      }, a.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(c) {
        return this._state.set(c.state), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(c) {
        r.wipe(c.state), c.buffer && r.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
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
  function i(a, c, l, d, f) {
    for (; f >= 64; ) {
      for (var p = c[0], m = c[1], v = c[2], b = c[3], C = c[4], L = c[5], w = c[6], x = c[7], _ = 0; _ < 16; _++) {
        var S = d + _ * 4;
        a[_] = e.readUint32BE(l, S);
      }
      for (var _ = 16; _ < 64; _++) {
        var y = a[_ - 2], u = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = a[_ - 15];
        var g = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        a[_] = (u + a[_ - 7] | 0) + (g + a[_ - 16] | 0);
      }
      for (var _ = 0; _ < 64; _++) {
        var u = (((C >>> 6 | C << 26) ^ (C >>> 11 | C << 21) ^ (C >>> 25 | C << 7)) + (C & L ^ ~C & w) | 0) + (x + (s[_] + a[_] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & v ^ m & v) | 0;
        x = w, w = L, L = C, C = b + u | 0, b = v, v = m, m = p, p = u + g | 0;
      }
      c[0] += p, c[1] += m, c[2] += v, c[3] += b, c[4] += C, c[5] += L, c[6] += w, c[7] += x, d += 64, f -= 64;
    }
    return d;
  }
  function o(a) {
    var c = new n();
    c.update(a);
    var l = c.digest();
    return c.clean(), l;
  }
  t.hash = o;
})(ta);
var zc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Ns, r = dr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(_) {
    const S = new Float64Array(16);
    if (_)
      for (let y = 0; y < _.length; y++)
        S[y] = _[y];
    return S;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function o(_) {
    let S = 1;
    for (let y = 0; y < 16; y++) {
      let u = _[y] + S + 65535;
      S = Math.floor(u / 65536), _[y] = u - S * 65536;
    }
    _[0] += S - 1 + 37 * (S - 1);
  }
  function a(_, S, y) {
    const u = ~(y - 1);
    for (let g = 0; g < 16; g++) {
      const N = u & (_[g] ^ S[g]);
      _[g] ^= N, S[g] ^= N;
    }
  }
  function c(_, S) {
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
      _[2 * g] = u[g] & 255, _[2 * g + 1] = u[g] >> 8;
  }
  function l(_, S) {
    for (let y = 0; y < 16; y++)
      _[y] = S[2 * y] + (S[2 * y + 1] << 8);
    _[15] &= 32767;
  }
  function d(_, S, y) {
    for (let u = 0; u < 16; u++)
      _[u] = S[u] + y[u];
  }
  function f(_, S, y) {
    for (let u = 0; u < 16; u++)
      _[u] = S[u] - y[u];
  }
  function p(_, S, y) {
    let u, g, N = 0, A = 0, $ = 0, J = 0, K = 0, T = 0, k = 0, B = 0, q = 0, z = 0, W = 0, U = 0, H = 0, de = 0, Z = 0, ue = 0, te = 0, ce = 0, M = 0, D = 0, R = 0, h = 0, O = 0, Q = 0, re = 0, Le = 0, je = 0, Oe = 0, We = 0, ot = 0, et = 0, $e = y[0], ze = y[1], Ce = y[2], Re = y[3], Te = y[4], Ee = y[5], be = y[6], pe = y[7], Pe = y[8], De = y[9], ve = y[10], Ue = y[11], Fe = y[12], Ke = y[13], Ye = y[14], He = y[15];
    u = S[0], N += u * $e, A += u * ze, $ += u * Ce, J += u * Re, K += u * Te, T += u * Ee, k += u * be, B += u * pe, q += u * Pe, z += u * De, W += u * ve, U += u * Ue, H += u * Fe, de += u * Ke, Z += u * Ye, ue += u * He, u = S[1], A += u * $e, $ += u * ze, J += u * Ce, K += u * Re, T += u * Te, k += u * Ee, B += u * be, q += u * pe, z += u * Pe, W += u * De, U += u * ve, H += u * Ue, de += u * Fe, Z += u * Ke, ue += u * Ye, te += u * He, u = S[2], $ += u * $e, J += u * ze, K += u * Ce, T += u * Re, k += u * Te, B += u * Ee, q += u * be, z += u * pe, W += u * Pe, U += u * De, H += u * ve, de += u * Ue, Z += u * Fe, ue += u * Ke, te += u * Ye, ce += u * He, u = S[3], J += u * $e, K += u * ze, T += u * Ce, k += u * Re, B += u * Te, q += u * Ee, z += u * be, W += u * pe, U += u * Pe, H += u * De, de += u * ve, Z += u * Ue, ue += u * Fe, te += u * Ke, ce += u * Ye, M += u * He, u = S[4], K += u * $e, T += u * ze, k += u * Ce, B += u * Re, q += u * Te, z += u * Ee, W += u * be, U += u * pe, H += u * Pe, de += u * De, Z += u * ve, ue += u * Ue, te += u * Fe, ce += u * Ke, M += u * Ye, D += u * He, u = S[5], T += u * $e, k += u * ze, B += u * Ce, q += u * Re, z += u * Te, W += u * Ee, U += u * be, H += u * pe, de += u * Pe, Z += u * De, ue += u * ve, te += u * Ue, ce += u * Fe, M += u * Ke, D += u * Ye, R += u * He, u = S[6], k += u * $e, B += u * ze, q += u * Ce, z += u * Re, W += u * Te, U += u * Ee, H += u * be, de += u * pe, Z += u * Pe, ue += u * De, te += u * ve, ce += u * Ue, M += u * Fe, D += u * Ke, R += u * Ye, h += u * He, u = S[7], B += u * $e, q += u * ze, z += u * Ce, W += u * Re, U += u * Te, H += u * Ee, de += u * be, Z += u * pe, ue += u * Pe, te += u * De, ce += u * ve, M += u * Ue, D += u * Fe, R += u * Ke, h += u * Ye, O += u * He, u = S[8], q += u * $e, z += u * ze, W += u * Ce, U += u * Re, H += u * Te, de += u * Ee, Z += u * be, ue += u * pe, te += u * Pe, ce += u * De, M += u * ve, D += u * Ue, R += u * Fe, h += u * Ke, O += u * Ye, Q += u * He, u = S[9], z += u * $e, W += u * ze, U += u * Ce, H += u * Re, de += u * Te, Z += u * Ee, ue += u * be, te += u * pe, ce += u * Pe, M += u * De, D += u * ve, R += u * Ue, h += u * Fe, O += u * Ke, Q += u * Ye, re += u * He, u = S[10], W += u * $e, U += u * ze, H += u * Ce, de += u * Re, Z += u * Te, ue += u * Ee, te += u * be, ce += u * pe, M += u * Pe, D += u * De, R += u * ve, h += u * Ue, O += u * Fe, Q += u * Ke, re += u * Ye, Le += u * He, u = S[11], U += u * $e, H += u * ze, de += u * Ce, Z += u * Re, ue += u * Te, te += u * Ee, ce += u * be, M += u * pe, D += u * Pe, R += u * De, h += u * ve, O += u * Ue, Q += u * Fe, re += u * Ke, Le += u * Ye, je += u * He, u = S[12], H += u * $e, de += u * ze, Z += u * Ce, ue += u * Re, te += u * Te, ce += u * Ee, M += u * be, D += u * pe, R += u * Pe, h += u * De, O += u * ve, Q += u * Ue, re += u * Fe, Le += u * Ke, je += u * Ye, Oe += u * He, u = S[13], de += u * $e, Z += u * ze, ue += u * Ce, te += u * Re, ce += u * Te, M += u * Ee, D += u * be, R += u * pe, h += u * Pe, O += u * De, Q += u * ve, re += u * Ue, Le += u * Fe, je += u * Ke, Oe += u * Ye, We += u * He, u = S[14], Z += u * $e, ue += u * ze, te += u * Ce, ce += u * Re, M += u * Te, D += u * Ee, R += u * be, h += u * pe, O += u * Pe, Q += u * De, re += u * ve, Le += u * Ue, je += u * Fe, Oe += u * Ke, We += u * Ye, ot += u * He, u = S[15], ue += u * $e, te += u * ze, ce += u * Ce, M += u * Re, D += u * Te, R += u * Ee, h += u * be, O += u * pe, Q += u * Pe, re += u * De, Le += u * ve, je += u * Ue, Oe += u * Fe, We += u * Ke, ot += u * Ye, et += u * He, N += 38 * te, A += 38 * ce, $ += 38 * M, J += 38 * D, K += 38 * R, T += 38 * h, k += 38 * O, B += 38 * Q, q += 38 * re, z += 38 * Le, W += 38 * je, U += 38 * Oe, H += 38 * We, de += 38 * ot, Z += 38 * et, g = 1, u = N + g + 65535, g = Math.floor(u / 65536), N = u - g * 65536, u = A + g + 65535, g = Math.floor(u / 65536), A = u - g * 65536, u = $ + g + 65535, g = Math.floor(u / 65536), $ = u - g * 65536, u = J + g + 65535, g = Math.floor(u / 65536), J = u - g * 65536, u = K + g + 65535, g = Math.floor(u / 65536), K = u - g * 65536, u = T + g + 65535, g = Math.floor(u / 65536), T = u - g * 65536, u = k + g + 65535, g = Math.floor(u / 65536), k = u - g * 65536, u = B + g + 65535, g = Math.floor(u / 65536), B = u - g * 65536, u = q + g + 65535, g = Math.floor(u / 65536), q = u - g * 65536, u = z + g + 65535, g = Math.floor(u / 65536), z = u - g * 65536, u = W + g + 65535, g = Math.floor(u / 65536), W = u - g * 65536, u = U + g + 65535, g = Math.floor(u / 65536), U = u - g * 65536, u = H + g + 65535, g = Math.floor(u / 65536), H = u - g * 65536, u = de + g + 65535, g = Math.floor(u / 65536), de = u - g * 65536, u = Z + g + 65535, g = Math.floor(u / 65536), Z = u - g * 65536, u = ue + g + 65535, g = Math.floor(u / 65536), ue = u - g * 65536, N += g - 1 + 37 * (g - 1), g = 1, u = N + g + 65535, g = Math.floor(u / 65536), N = u - g * 65536, u = A + g + 65535, g = Math.floor(u / 65536), A = u - g * 65536, u = $ + g + 65535, g = Math.floor(u / 65536), $ = u - g * 65536, u = J + g + 65535, g = Math.floor(u / 65536), J = u - g * 65536, u = K + g + 65535, g = Math.floor(u / 65536), K = u - g * 65536, u = T + g + 65535, g = Math.floor(u / 65536), T = u - g * 65536, u = k + g + 65535, g = Math.floor(u / 65536), k = u - g * 65536, u = B + g + 65535, g = Math.floor(u / 65536), B = u - g * 65536, u = q + g + 65535, g = Math.floor(u / 65536), q = u - g * 65536, u = z + g + 65535, g = Math.floor(u / 65536), z = u - g * 65536, u = W + g + 65535, g = Math.floor(u / 65536), W = u - g * 65536, u = U + g + 65535, g = Math.floor(u / 65536), U = u - g * 65536, u = H + g + 65535, g = Math.floor(u / 65536), H = u - g * 65536, u = de + g + 65535, g = Math.floor(u / 65536), de = u - g * 65536, u = Z + g + 65535, g = Math.floor(u / 65536), Z = u - g * 65536, u = ue + g + 65535, g = Math.floor(u / 65536), ue = u - g * 65536, N += g - 1 + 37 * (g - 1), _[0] = N, _[1] = A, _[2] = $, _[3] = J, _[4] = K, _[5] = T, _[6] = k, _[7] = B, _[8] = q, _[9] = z, _[10] = W, _[11] = U, _[12] = H, _[13] = de, _[14] = Z, _[15] = ue;
  }
  function m(_, S) {
    p(_, S, S);
  }
  function v(_, S) {
    const y = n();
    for (let u = 0; u < 16; u++)
      y[u] = S[u];
    for (let u = 253; u >= 0; u--)
      m(y, y), u !== 2 && u !== 4 && p(y, y, S);
    for (let u = 0; u < 16; u++)
      _[u] = y[u];
  }
  function b(_, S) {
    const y = new Uint8Array(32), u = new Float64Array(80), g = n(), N = n(), A = n(), $ = n(), J = n(), K = n();
    for (let q = 0; q < 31; q++)
      y[q] = _[q];
    y[31] = _[31] & 127 | 64, y[0] &= 248, l(u, S);
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
    return c(B, k), B;
  }
  t.scalarMult = b;
  function C(_) {
    return b(_, s);
  }
  t.scalarMultBase = C;
  function L(_) {
    if (_.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(_);
    return {
      publicKey: C(S),
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = L;
  function w(_) {
    const S = (0, e.randomBytes)(32, _), y = L(S);
    return (0, r.wipe)(S), y;
  }
  t.generateKeyPair = w;
  function x(_, S, y = !1) {
    if (_.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const u = b(_, S);
    if (y) {
      let g = 0;
      for (let N = 0; N < u.length; N++)
        g |= u[N];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return u;
  }
  t.sharedKey = x;
})(zc);
var uu = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Dv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Mv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), zv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Uv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Vv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), $v = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, qv = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, du = 3, Wv = [
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
  ["searchbot", $v]
], hu = [
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
function Fv(t) {
  return t ? fu(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Vv() : typeof navigator < "u" ? fu(navigator.userAgent) : Bv();
}
function Zv(t) {
  return t !== "" && Wv.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function fu(t) {
  var e = Zv(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Uv();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < du && (s = uu(uu([], s, !0), Kv(du - s.length), !0)) : s = [];
  var i = s.join("."), o = Hv(t), a = qv.exec(t);
  return a && a[1] ? new zv(r, i, o, a[1]) : new Dv(r, i, o);
}
function Hv(t) {
  for (var e = 0, r = hu.length; e < r; e++) {
    var n = hu[e], s = n[0], i = n[1], o = i.exec(t);
    if (o)
      return s;
  }
  return null;
}
function Bv() {
  var t = typeof process < "u" && process.version;
  return t ? new Mv(process.version.slice(1)) : null;
}
function Kv(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.getLocalStorage = rt.getLocalStorageOrThrow = rt.getCrypto = rt.getCryptoOrThrow = _h = rt.getLocation = rt.getLocationOrThrow = Vc = rt.getNavigator = rt.getNavigatorOrThrow = Uc = rt.getDocument = rt.getDocumentOrThrow = rt.getFromWindowOrThrow = rt.getFromWindow = void 0;
function is(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
rt.getFromWindow = is;
function As(t) {
  const e = is(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
rt.getFromWindowOrThrow = As;
function Yv() {
  return As("document");
}
rt.getDocumentOrThrow = Yv;
function Gv() {
  return is("document");
}
var Uc = rt.getDocument = Gv;
function Qv() {
  return As("navigator");
}
rt.getNavigatorOrThrow = Qv;
function Jv() {
  return is("navigator");
}
var Vc = rt.getNavigator = Jv;
function Xv() {
  return As("location");
}
rt.getLocationOrThrow = Xv;
function e0() {
  return is("location");
}
var _h = rt.getLocation = e0;
function t0() {
  return As("crypto");
}
rt.getCryptoOrThrow = t0;
function r0() {
  return is("crypto");
}
rt.getCrypto = r0;
function n0() {
  return As("localStorage");
}
rt.getLocalStorageOrThrow = n0;
function s0() {
  return is("localStorage");
}
rt.getLocalStorage = s0;
var $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
var bh = $c.getWindowMetadata = void 0;
const pu = rt;
function i0() {
  let t, e;
  try {
    t = pu.getDocumentOrThrow(), e = pu.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < d.length; p++) {
      const m = d[p], v = m.getAttribute("rel");
      if (v && v.toLowerCase().indexOf("icon") > -1) {
        const b = m.getAttribute("href");
        if (b)
          if (b.toLowerCase().indexOf("https:") === -1 && b.toLowerCase().indexOf("http:") === -1 && b.indexOf("//") !== 0) {
            let C = e.protocol + "//" + e.host;
            if (b.indexOf("/") === 0)
              C += b;
            else {
              const L = e.pathname.split("/");
              L.pop();
              const w = L.join("/");
              C += w + "/" + b;
            }
            f.push(C);
          } else if (b.indexOf("//") === 0) {
            const C = e.protocol + b;
            f.push(C);
          } else
            f.push(b);
      }
    }
    return f;
  }
  function n(...d) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const m = f[p], v = ["itemprop", "property", "name"].map((b) => m.getAttribute(b)).filter((b) => b ? d.includes(b) : !1);
      if (v.length && v) {
        const b = m.getAttribute("content");
        if (b)
          return b;
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
  const o = s(), a = i(), c = e.origin, l = r();
  return {
    description: a,
    url: c,
    icons: l,
    name: o
  };
}
bh = $c.getWindowMetadata = i0;
var ri = {}, o0 = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), wh = "%[a-f0-9]{2}", gu = new RegExp("(" + wh + ")|([^%]+?)", "gi"), mu = new RegExp("(" + wh + ")+", "gi");
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
function a0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(gu) || [], r = 1; r < e.length; r++)
      t = Za(e, r).join(""), e = t.match(gu) || [];
    return t;
  }
}
function c0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = mu.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = a0(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = mu.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var o = s[i];
    t = t.replace(new RegExp(o, "g"), e[o]);
  }
  return t;
}
var l0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return c0(t);
  }
}, u0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, d0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var o = n[i], a = t[o];
    (s ? e.indexOf(o) !== -1 : e(o, a, t)) && (r[o] = a);
  }
  return r;
};
(function(t) {
  const e = o0, r = l0, n = u0, s = d0, i = (w) => w == null, o = Symbol("encodeFragmentIdentifier");
  function a(w) {
    switch (w.arrayFormat) {
      case "index":
        return (x) => (_, S) => {
          const y = _.length;
          return S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? _ : S === null ? [..._, [d(x, w), "[", y, "]"].join("")] : [
            ..._,
            [d(x, w), "[", d(y, w), "]=", d(S, w)].join("")
          ];
        };
      case "bracket":
        return (x) => (_, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? _ : S === null ? [..._, [d(x, w), "[]"].join("")] : [..._, [d(x, w), "[]=", d(S, w)].join("")];
      case "colon-list-separator":
        return (x) => (_, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? _ : S === null ? [..._, [d(x, w), ":list="].join("")] : [..._, [d(x, w), ":list=", d(S, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const x = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (S, y) => y === void 0 || w.skipNull && y === null || w.skipEmptyString && y === "" ? S : (y = y === null ? "" : y, S.length === 0 ? [[d(_, w), x, d(y, w)].join("")] : [[S, d(y, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (x) => (_, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? _ : S === null ? [..._, d(x, w)] : [..._, [d(x, w), "=", d(S, w)].join("")];
    }
  }
  function c(w) {
    let x;
    switch (w.arrayFormat) {
      case "index":
        return (_, S, y) => {
          if (x = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !x) {
            y[_] = S;
            return;
          }
          y[_] === void 0 && (y[_] = {}), y[_][x[1]] = S;
        };
      case "bracket":
        return (_, S, y) => {
          if (x = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !x) {
            y[_] = S;
            return;
          }
          if (y[_] === void 0) {
            y[_] = [S];
            return;
          }
          y[_] = [].concat(y[_], S);
        };
      case "colon-list-separator":
        return (_, S, y) => {
          if (x = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !x) {
            y[_] = S;
            return;
          }
          if (y[_] === void 0) {
            y[_] = [S];
            return;
          }
          y[_] = [].concat(y[_], S);
        };
      case "comma":
      case "separator":
        return (_, S, y) => {
          const u = typeof S == "string" && S.includes(w.arrayFormatSeparator), g = typeof S == "string" && !u && f(S, w).includes(w.arrayFormatSeparator);
          S = g ? f(S, w) : S;
          const N = u || g ? S.split(w.arrayFormatSeparator).map((A) => f(A, w)) : S === null ? S : f(S, w);
          y[_] = N;
        };
      case "bracket-separator":
        return (_, S, y) => {
          const u = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !u) {
            y[_] = S && f(S, w);
            return;
          }
          const g = S === null ? [] : S.split(w.arrayFormatSeparator).map((N) => f(N, w));
          if (y[_] === void 0) {
            y[_] = g;
            return;
          }
          y[_] = [].concat(y[_], g);
        };
      default:
        return (_, S, y) => {
          if (y[_] === void 0) {
            y[_] = S;
            return;
          }
          y[_] = [].concat(y[_], S);
        };
    }
  }
  function l(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(w, x) {
    return x.encode ? x.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function f(w, x) {
    return x.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((x, _) => Number(x) - Number(_)).map((x) => w[x]) : w;
  }
  function m(w) {
    const x = w.indexOf("#");
    return x !== -1 && (w = w.slice(0, x)), w;
  }
  function v(w) {
    let x = "";
    const _ = w.indexOf("#");
    return _ !== -1 && (x = w.slice(_)), x;
  }
  function b(w) {
    w = m(w);
    const x = w.indexOf("?");
    return x === -1 ? "" : w.slice(x + 1);
  }
  function C(w, x) {
    return x.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : x.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function L(w, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), l(x.arrayFormatSeparator);
    const _ = c(x), S = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return S;
    for (const y of w.split("&")) {
      if (y === "")
        continue;
      let [u, g] = n(x.decode ? y.replace(/\+/g, " ") : y, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? g : f(g, x), _(f(u, x), g, S);
    }
    for (const y of Object.keys(S)) {
      const u = S[y];
      if (typeof u == "object" && u !== null)
        for (const g of Object.keys(u))
          u[g] = C(u[g], x);
      else
        S[y] = C(u, x);
    }
    return x.sort === !1 ? S : (x.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(x.sort)).reduce((y, u) => {
      const g = S[u];
      return g && typeof g == "object" && !Array.isArray(g) ? y[u] = p(g) : y[u] = g, y;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = b, t.parse = L, t.stringify = (w, x) => {
    if (!w)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), l(x.arrayFormatSeparator);
    const _ = (g) => x.skipNull && i(w[g]) || x.skipEmptyString && w[g] === "", S = a(x), y = {};
    for (const g of Object.keys(w))
      _(g) || (y[g] = w[g]);
    const u = Object.keys(y);
    return x.sort !== !1 && u.sort(x.sort), u.map((g) => {
      const N = w[g];
      return N === void 0 ? "" : N === null ? d(g, x) : Array.isArray(N) ? N.length === 0 && x.arrayFormat === "bracket-separator" ? d(g, x) + "[]" : N.reduce(S(g), []).join("&") : d(g, x) + "=" + d(N, x);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (w, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [_, S] = n(w, "#");
    return Object.assign(
      {
        url: _.split("?")[0] || "",
        query: L(b(w), x)
      },
      x && x.parseFragmentIdentifier && S ? { fragmentIdentifier: f(S, x) } : {}
    );
  }, t.stringifyUrl = (w, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, x);
    const _ = m(w.url).split("?")[0] || "", S = t.extract(w.url), y = t.parse(S, { sort: !1 }), u = Object.assign(y, w.query);
    let g = t.stringify(u, x);
    g && (g = `?${g}`);
    let N = v(w.url);
    return w.fragmentIdentifier && (N = `#${x[o] ? d(w.fragmentIdentifier, x) : w.fragmentIdentifier}`), `${_}${g}${N}`;
  }, t.pick = (w, x, _) => {
    _ = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, _);
    const { url: S, query: y, fragmentIdentifier: u } = t.parseUrl(w, _);
    return t.stringifyUrl({
      url: S,
      query: s(y, x),
      fragmentIdentifier: u
    }, _);
  }, t.exclude = (w, x, _) => {
    const S = Array.isArray(x) ? (y) => !x.includes(y) : (y, u) => !x(y, u);
    return t.pick(w, S, _);
  };
})(ri);
const h0 = {
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
function Eh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Sh = "base10", Jt = "base16", Ha = "base64pad", qc = "utf8", Ih = 0, os = 1, f0 = 0, yu = 1, Ba = 12, Wc = 32;
function p0() {
  const t = zc.generateKeyPair();
  return { privateKey: Xt(t.secretKey, Jt), publicKey: Xt(t.publicKey, Jt) };
}
function Ka() {
  const t = Ns.randomBytes(Wc);
  return Xt(t, Jt);
}
function g0(t, e) {
  const r = zc.sharedKey(or(t, Jt), or(e, Jt), !0), n = new jv(ta.SHA256, r).expand(Wc);
  return Xt(n, Jt);
}
function m0(t) {
  const e = ta.hash(or(t, Jt));
  return Xt(e, Jt);
}
function ws(t) {
  const e = ta.hash(or(t, qc));
  return Xt(e, Jt);
}
function y0(t) {
  return or(`${t}`, Sh);
}
function ji(t) {
  return Number(Xt(t, Sh));
}
function v0(t) {
  const e = y0(typeof t.type < "u" ? t.type : Ih);
  if (ji(e) === os && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? or(t.senderPublicKey, Jt) : void 0, n = typeof t.iv < "u" ? or(t.iv, Jt) : Ns.randomBytes(Ba), s = new Dc.ChaCha20Poly1305(or(t.symKey, Jt)).seal(n, or(t.message, qc));
  return b0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function _0(t) {
  const e = new Dc.ChaCha20Poly1305(or(t.symKey, Jt)), { sealed: r, iv: n } = wo(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Xt(s, qc);
}
function b0(t) {
  if (ji(t.type) === os) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Xt(Wa([t.type, t.senderPublicKey, t.iv, t.sealed]), Ha);
  }
  return Xt(Wa([t.type, t.iv, t.sealed]), Ha);
}
function wo(t) {
  const e = or(t, Ha), r = e.slice(f0, yu), n = yu;
  if (ji(r) === os) {
    const a = n + Wc, c = a + Ba, l = e.slice(n, a), d = e.slice(a, c), f = e.slice(c);
    return { type: r, sealed: f, iv: d, senderPublicKey: l };
  }
  const s = n + Ba, i = e.slice(n, s), o = e.slice(s);
  return { type: r, sealed: o, iv: i };
}
function w0(t, e) {
  const r = wo(t);
  return xh({ type: ji(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Xt(r.senderPublicKey, Jt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function xh(t) {
  const e = (t == null ? void 0 : t.type) || Ih;
  if (e === os) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function vu(t) {
  return t.type === os && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var E0 = Object.defineProperty, _u = Object.getOwnPropertySymbols, S0 = Object.prototype.hasOwnProperty, I0 = Object.prototype.propertyIsEnumerable, bu = (t, e, r) => e in t ? E0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wu = (t, e) => {
  for (var r in e || (e = {}))
    S0.call(e, r) && bu(t, r, e[r]);
  if (_u)
    for (var r of _u(e))
      I0.call(e, r) && bu(t, r, e[r]);
  return t;
};
const x0 = "ReactNative", ur = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, O0 = "js";
function Fc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ls() {
  return !Uc() && !!Vc() && navigator.product === x0;
}
function js() {
  return !Fc() && !!Vc() && !!Uc();
}
function Di() {
  return Ls() ? ur.reactNative : Fc() ? ur.node : js() ? ur.browser : ur.unknown;
}
function C0() {
  var t;
  try {
    return Ls() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function T0(t, e) {
  let r = ri.parse(t);
  return r = wu(wu({}, r), e), t = ri.stringify(r), t;
}
function k0() {
  return bh() || { name: "", description: "", url: "", icons: [""] };
}
function R0() {
  if (Di() === ur.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Fv();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function P0() {
  var t;
  const e = Di();
  return e === ur.browser ? [e, ((t = _h()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function N0(t, e, r) {
  const n = R0(), s = P0();
  return [[t, e].join("-"), [O0, r].join("-"), n, s].join("/");
}
function A0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: o, bundleId: a }) {
  const c = r.split("?"), l = N0(t, e, n), d = { auth: s, ua: l, projectId: i, useOnCloseEvent: o || void 0, origin: a || void 0 }, f = T0(c[1] || "", d);
  return c[0] + "?" + f;
}
function Bn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Oh(t) {
  return Object.fromEntries(t.entries());
}
function Ch(t) {
  return new Map(Object.entries(t));
}
function fs(t = le.FIVE_MINUTES, e) {
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
function ni(t, e, r) {
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
function Th(t, e) {
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
function L0(t) {
  return Th("topic", t);
}
function j0(t) {
  return Th("id", t);
}
function kh(t) {
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
function _n(t) {
  return Date.now() >= le.toMiliseconds(t);
}
function St(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function D0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, o = Di();
    o === ur.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : o === ur.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function M0(t, e) {
  try {
    return await t.getItem(e) || (js() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const z0 = "irn";
function Ya(t) {
  return (t == null ? void 0 : t.relay) || { protocol: z0 };
}
function ho(t) {
  const e = h0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var U0 = Object.defineProperty, V0 = Object.defineProperties, $0 = Object.getOwnPropertyDescriptors, Eu = Object.getOwnPropertySymbols, q0 = Object.prototype.hasOwnProperty, W0 = Object.prototype.propertyIsEnumerable, Su = (t, e, r) => e in t ? U0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, F0 = (t, e) => {
  for (var r in e || (e = {}))
    q0.call(e, r) && Su(t, r, e[r]);
  if (Eu)
    for (var r of Eu(e))
      W0.call(e, r) && Su(t, r, e[r]);
  return t;
}, Z0 = (t, e) => V0(t, $0(e));
function H0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), o = t[s];
      r[i] = o;
    }
  }), r;
}
function Iu(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", o = ri.parse(i);
  return { protocol: n, topic: B0(s[0]), version: parseInt(s[1], 10), symKey: o.symKey, relay: H0(o), expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0 };
}
function B0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function K0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function Y0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ri.stringify(Z0(F0({ symKey: t.symKey }, K0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function Ds(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function G0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Ds(r.accounts));
  }), e;
}
function Q0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Ds(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function J0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Ds(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const X0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, e1 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(t, e) {
  const { message: r, code: n } = e1[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _t(t, e) {
  const { message: r, code: n } = X0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Mi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Eo(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Gt(t) {
  return typeof t > "u";
}
function Nt(t, e) {
  return e && Gt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Zc(t, e) {
  return e && Gt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function t1(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Bn(s, n) ? (n.forEach((o) => {
    const { accounts: a, methods: c, events: l } = t.namespaces[o], d = Ds(a), f = r[o];
    (!Bn(Eh(o, f), d) || !Bn(f.methods, c) || !Bn(f.events, l)) && (i = !1);
  }), i) : !1;
}
function So(t) {
  return Nt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function r1(t) {
  if (Nt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && So(r);
    }
  }
  return !1;
}
function n1(t) {
  if (Nt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function s1(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function i1(t) {
  return t == null ? void 0 : t.topic;
}
function o1(t, e) {
  let r = null;
  return Nt(t == null ? void 0 : t.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function xu(t) {
  let e = !0;
  return Mi(t) ? t.length && (e = t.every((r) => Nt(r, !1))) : e = !1, e;
}
function a1(t, e, r) {
  let n = null;
  return Mi(e) && e.length ? e.forEach((s) => {
    n || So(s) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : So(t) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function c1(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const o = a1(s, Eh(s, i), `${e} ${r}`);
    o && (n = o);
  }), n;
}
function l1(t, e) {
  let r = null;
  return Mi(t) ? t.forEach((n) => {
    r || r1(n) || (r = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function u1(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = l1(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function d1(t, e) {
  let r = null;
  return xu(t == null ? void 0 : t.methods) ? xu(t == null ? void 0 : t.events) || (r = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Rh(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = d1(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function h1(t, e, r) {
  let n = null;
  if (t && Eo(t)) {
    const s = Rh(t, e);
    s && (n = s);
    const i = c1(t, e, r);
    i && (n = i);
  } else
    n = X("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function va(t, e) {
  let r = null;
  if (t && Eo(t)) {
    const n = Rh(t, e);
    n && (r = n);
    const s = u1(t, e);
    s && (r = s);
  } else
    r = X("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Ph(t) {
  return Nt(t.protocol, !0);
}
function f1(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Mi(t) && t.length && t.forEach((n) => {
    r = Ph(n);
  }), r;
}
function p1(t) {
  return typeof t == "number";
}
function sr(t) {
  return typeof t < "u" && typeof t !== null;
}
function g1(t) {
  return !(!t || typeof t != "object" || !t.code || !Zc(t.code, !1) || !t.message || !Nt(t.message, !1));
}
function m1(t) {
  return !(Gt(t) || !Nt(t.method, !1));
}
function y1(t) {
  return !(Gt(t) || Gt(t.result) && Gt(t.error) || !Zc(t.id, !1) || !Nt(t.jsonrpc, !1));
}
function v1(t) {
  return !(Gt(t) || !Nt(t.name, !1));
}
function Ou(t, e) {
  return !(!So(e) || !G0(t).includes(e));
}
function _1(t, e, r) {
  return Nt(r, !1) ? Q0(t, e).includes(r) : !1;
}
function b1(t, e, r) {
  return Nt(r, !1) ? J0(t, e).includes(r) : !1;
}
function Cu(t, e, r) {
  let n = null;
  const s = w1(t), i = E1(e), o = Object.keys(s), a = Object.keys(i), c = Tu(Object.keys(t)), l = Tu(Object.keys(e)), d = c.filter((f) => !l.includes(f));
  return d.length && (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Bn(o, a) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = Ds(e[f].accounts);
    p.includes(f) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), o.forEach((f) => {
    n || (Bn(s[f].methods, i[f].methods) ? Bn(s[f].events, i[f].events) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function w1(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Tu(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function E1(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Ds(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function S1(t, e) {
  return Zc(t, !1) && t <= e.max && t >= e.min;
}
function ku() {
  const t = Di();
  return new Promise((e) => {
    switch (t) {
      case ur.browser:
        e(I1());
        break;
      case ur.reactNative:
        e(x1());
        break;
      case ur.node:
        e(O1());
        break;
      default:
        e(!0);
    }
  });
}
function I1() {
  return js() && (navigator == null ? void 0 : navigator.onLine);
}
async function x1() {
  if (Ls() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function O1() {
  return !0;
}
function C1(t) {
  switch (Di()) {
    case ur.browser:
      T1(t);
      break;
    case ur.reactNative:
      k1(t);
      break;
  }
}
function T1(t) {
  !Ls() && js() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function k1(t) {
  Ls() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const _a = {};
let io = class {
  static get(t) {
    return _a[t];
  }
  static set(t, e) {
    _a[t] = e;
  }
  static delete(t) {
    delete _a[t];
  }
};
const R1 = "PARSE_ERROR", P1 = "INVALID_REQUEST", N1 = "METHOD_NOT_FOUND", A1 = "INVALID_PARAMS", Nh = "INTERNAL_ERROR", Hc = "SERVER_ERROR", L1 = [-32700, -32600, -32601, -32602, -32603], Js = {
  [R1]: { code: -32700, message: "Parse error" },
  [P1]: { code: -32600, message: "Invalid Request" },
  [N1]: { code: -32601, message: "Method not found" },
  [A1]: { code: -32602, message: "Invalid params" },
  [Nh]: { code: -32603, message: "Internal error" },
  [Hc]: { code: -32e3, message: "Server error" }
}, Ah = Hc;
function j1(t) {
  return L1.includes(t);
}
function Ru(t) {
  return Object.keys(Js).includes(t) ? Js[t] : Js[Ah];
}
function D1(t) {
  return Object.values(Js).find((r) => r.code === t) || Js[Ah];
}
function M1(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Lh = {}, Qr = {}, Pu;
function z1() {
  if (Pu)
    return Qr;
  Pu = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.isBrowserCryptoAvailable = Qr.getSubtleCrypto = Qr.getBrowerCrypto = void 0;
  function t() {
    return (En == null ? void 0 : En.crypto) || (En == null ? void 0 : En.msCrypto) || {};
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
var Jr = {}, Nu;
function U1() {
  if (Nu)
    return Jr;
  Nu = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.isBrowser = Jr.isNode = Jr.isReactNative = void 0;
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
  e.__exportStar(z1(), t), e.__exportStar(U1(), t);
})(Lh);
function Bc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function jh(t = 6) {
  return BigInt(Bc(t));
}
function Es(t, e, r) {
  return {
    id: r || Bc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Kc(t, e) {
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
    error: V1(e, r)
  };
}
function V1(t, e) {
  return typeof t > "u" ? Ru(Nh) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Ru(Hc)), { message: t })), typeof e < "u" && (t.data = e), j1(t.code) && (t = D1(t.code)), t);
}
class $1 {
}
class q1 extends $1 {
  constructor() {
    super();
  }
}
class W1 extends q1 {
  constructor(e) {
    super();
  }
}
const F1 = "^wss?:";
function Z1(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function H1(t, e) {
  const r = Z1(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Au(t) {
  return H1(t, F1);
}
function B1(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Dh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Gc(t) {
  return Dh(t) && "method" in t;
}
function ra(t) {
  return Dh(t) && (rn(t) || Ir(t));
}
function rn(t) {
  return "result" in t;
}
function Ir(t) {
  return "error" in t;
}
class K1 extends W1 {
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
    return this.requestStrict(Es(e.method, e.params || [], e.id || jh().toString()), r);
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
        Ir(i) ? s(i.error) : n(i.result);
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
    this.events.emit("payload", e), ra(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const Y1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), G1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Lu = (t) => t.split("?")[0], ju = 10, Q1 = Y1();
class J1 {
  constructor(e) {
    if (this.url = e, this.events = new Lr.EventEmitter(), this.registering = !1, !Au(e))
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
      this.socket.send(Ni(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Au(e))
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
      const s = new URLSearchParams(e).get("origin"), i = Lh.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !B1(e) }, o = new Q1(e, [], i);
      G1() ? o.onerror = (a) => {
        const c = a;
        n(this.emitError(c.error));
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
    const r = typeof e.data == "string" ? Yo(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = Yc(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return M1(e, Lu(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ju && this.events.setMaxListeners(ju);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Lu(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Io = { exports: {} };
Io.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", l = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", b = "[object Map]", C = "[object Number]", L = "[object Null]", w = "[object Object]", x = "[object Promise]", _ = "[object Proxy]", S = "[object RegExp]", y = "[object Set]", u = "[object String]", g = "[object Symbol]", N = "[object Undefined]", A = "[object WeakMap]", $ = "[object ArrayBuffer]", J = "[object DataView]", K = "[object Float32Array]", T = "[object Float64Array]", k = "[object Int8Array]", B = "[object Int16Array]", q = "[object Int32Array]", z = "[object Uint8Array]", W = "[object Uint8ClampedArray]", U = "[object Uint16Array]", H = "[object Uint32Array]", de = /[\\^$.*+?()[\]{}|]/g, Z = /^\[object .+?Constructor\]$/, ue = /^(?:0|[1-9]\d*)$/, te = {};
  te[K] = te[T] = te[k] = te[B] = te[q] = te[z] = te[W] = te[U] = te[H] = !0, te[a] = te[c] = te[$] = te[d] = te[J] = te[f] = te[p] = te[m] = te[b] = te[C] = te[w] = te[S] = te[y] = te[u] = te[A] = !1;
  var ce = typeof En == "object" && En && En.Object === Object && En, M = typeof self == "object" && self && self.Object === Object && self, D = ce || M || Function("return this")(), R = e && !e.nodeType && e, h = R && !0 && t && !t.nodeType && t, O = h && h.exports === R, Q = O && ce.process, re = function() {
    try {
      return Q && Q.binding && Q.binding("util");
    } catch {
    }
  }(), Le = re && re.isTypedArray;
  function je(E, P) {
    for (var F = -1, ae = E == null ? 0 : E.length, it = 0, ke = []; ++F < ae; ) {
      var vt = E[F];
      P(vt, F, E) && (ke[it++] = vt);
    }
    return ke;
  }
  function Oe(E, P) {
    for (var F = -1, ae = P.length, it = E.length; ++F < ae; )
      E[it + F] = P[F];
    return E;
  }
  function We(E, P) {
    for (var F = -1, ae = E == null ? 0 : E.length; ++F < ae; )
      if (P(E[F], F, E))
        return !0;
    return !1;
  }
  function ot(E, P) {
    for (var F = -1, ae = Array(E); ++F < E; )
      ae[F] = P(F);
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
    var P = -1, F = Array(E.size);
    return E.forEach(function(ae, it) {
      F[++P] = [it, ae];
    }), F;
  }
  function Re(E, P) {
    return function(F) {
      return E(P(F));
    };
  }
  function Te(E) {
    var P = -1, F = Array(E.size);
    return E.forEach(function(ae) {
      F[++P] = ae;
    }), F;
  }
  var Ee = Array.prototype, be = Function.prototype, pe = Object.prototype, Pe = D["__core-js_shared__"], De = be.toString, ve = pe.hasOwnProperty, Ue = function() {
    var E = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), Fe = pe.toString, Ke = RegExp(
    "^" + De.call(ve).replace(de, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ye = O ? D.Buffer : void 0, He = D.Symbol, ar = D.Uint8Array, fr = pe.propertyIsEnumerable, Mr = Ee.splice, At = He ? He.toStringTag : void 0, zr = Object.getOwnPropertySymbols, pr = Ye ? Ye.isBuffer : void 0, fn = Re(Object.keys, Object), at = as(D, "DataView"), nt = as(D, "Map"), pt = as(D, "Promise"), lt = as(D, "Set"), gt = as(D, "WeakMap"), st = as(Object, "create"), bt = zn(at), It = zn(nt), xt = zn(pt), wt = zn(lt), Ot = zn(gt), Et = He ? He.prototype : void 0, mt = Et ? Et.valueOf : void 0;
  function tt(E) {
    var P = -1, F = E == null ? 0 : E.length;
    for (this.clear(); ++P < F; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function I() {
    this.__data__ = st ? st(null) : {}, this.size = 0;
  }
  function V(E) {
    var P = this.has(E) && delete this.__data__[E];
    return this.size -= P ? 1 : 0, P;
  }
  function ee(E) {
    var P = this.__data__;
    if (st) {
      var F = P[E];
      return F === n ? void 0 : F;
    }
    return ve.call(P, E) ? P[E] : void 0;
  }
  function ge(E) {
    var P = this.__data__;
    return st ? P[E] !== void 0 : ve.call(P, E);
  }
  function Be(E, P) {
    var F = this.__data__;
    return this.size += this.has(E) ? 0 : 1, F[E] = st && P === void 0 ? n : P, this;
  }
  tt.prototype.clear = I, tt.prototype.delete = V, tt.prototype.get = ee, tt.prototype.has = ge, tt.prototype.set = Be;
  function Ve(E) {
    var P = -1, F = E == null ? 0 : E.length;
    for (this.clear(); ++P < F; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function qe() {
    this.__data__ = [], this.size = 0;
  }
  function Me(E) {
    var P = this.__data__, F = Yi(P, E);
    if (F < 0)
      return !1;
    var ae = P.length - 1;
    return F == ae ? P.pop() : Mr.call(P, F, 1), --this.size, !0;
  }
  function Lt(E) {
    var P = this.__data__, F = Yi(P, E);
    return F < 0 ? void 0 : P[F][1];
  }
  function ut(E) {
    return Yi(this.__data__, E) > -1;
  }
  function yt(E, P) {
    var F = this.__data__, ae = Yi(F, E);
    return ae < 0 ? (++this.size, F.push([E, P])) : F[ae][1] = P, this;
  }
  Ve.prototype.clear = qe, Ve.prototype.delete = Me, Ve.prototype.get = Lt, Ve.prototype.has = ut, Ve.prototype.set = yt;
  function Ct(E) {
    var P = -1, F = E == null ? 0 : E.length;
    for (this.clear(); ++P < F; ) {
      var ae = E[P];
      this.set(ae[0], ae[1]);
    }
  }
  function pn() {
    this.size = 0, this.__data__ = {
      hash: new tt(),
      map: new (nt || Ve)(),
      string: new tt()
    };
  }
  function Bi(E) {
    var P = Gi(this, E).delete(E);
    return this.size -= P ? 1 : 0, P;
  }
  function wr(E) {
    return Gi(this, E).get(E);
  }
  function Jf(E) {
    return Gi(this, E).has(E);
  }
  function Xf(E, P) {
    var F = Gi(this, E), ae = F.size;
    return F.set(E, P), this.size += F.size == ae ? 0 : 1, this;
  }
  Ct.prototype.clear = pn, Ct.prototype.delete = Bi, Ct.prototype.get = wr, Ct.prototype.has = Jf, Ct.prototype.set = Xf;
  function Ki(E) {
    var P = -1, F = E == null ? 0 : E.length;
    for (this.__data__ = new Ct(); ++P < F; )
      this.add(E[P]);
  }
  function ep(E) {
    return this.__data__.set(E, n), this;
  }
  function tp(E) {
    return this.__data__.has(E);
  }
  Ki.prototype.add = Ki.prototype.push = ep, Ki.prototype.has = tp;
  function gn(E) {
    var P = this.__data__ = new Ve(E);
    this.size = P.size;
  }
  function rp() {
    this.__data__ = new Ve(), this.size = 0;
  }
  function np(E) {
    var P = this.__data__, F = P.delete(E);
    return this.size = P.size, F;
  }
  function sp(E) {
    return this.__data__.get(E);
  }
  function ip(E) {
    return this.__data__.has(E);
  }
  function op(E, P) {
    var F = this.__data__;
    if (F instanceof Ve) {
      var ae = F.__data__;
      if (!nt || ae.length < r - 1)
        return ae.push([E, P]), this.size = ++F.size, this;
      F = this.__data__ = new Ct(ae);
    }
    return F.set(E, P), this.size = F.size, this;
  }
  gn.prototype.clear = rp, gn.prototype.delete = np, gn.prototype.get = sp, gn.prototype.has = ip, gn.prototype.set = op;
  function ap(E, P) {
    var F = Qi(E), ae = !F && Ep(E), it = !F && !ae && ua(E), ke = !F && !ae && !it && pl(E), vt = F || ae || it || ke, Tt = vt ? ot(E.length, String) : [], jt = Tt.length;
    for (var dt in E)
      (P || ve.call(E, dt)) && !(vt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (dt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      it && (dt == "offset" || dt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (dt == "buffer" || dt == "byteLength" || dt == "byteOffset") || // Skip index properties.
      yp(dt, jt))) && Tt.push(dt);
    return Tt;
  }
  function Yi(E, P) {
    for (var F = E.length; F--; )
      if (ul(E[F][0], P))
        return F;
    return -1;
  }
  function cp(E, P, F) {
    var ae = P(E);
    return Qi(E) ? ae : Oe(ae, F(E));
  }
  function Ms(E) {
    return E == null ? E === void 0 ? N : L : At && At in Object(E) ? gp(E) : wp(E);
  }
  function ol(E) {
    return zs(E) && Ms(E) == a;
  }
  function al(E, P, F, ae, it) {
    return E === P ? !0 : E == null || P == null || !zs(E) && !zs(P) ? E !== E && P !== P : lp(E, P, F, ae, al, it);
  }
  function lp(E, P, F, ae, it, ke) {
    var vt = Qi(E), Tt = Qi(P), jt = vt ? c : mn(E), dt = Tt ? c : mn(P);
    jt = jt == a ? w : jt, dt = dt == a ? w : dt;
    var cr = jt == w, Er = dt == w, zt = jt == dt;
    if (zt && ua(E)) {
      if (!ua(P))
        return !1;
      vt = !0, cr = !1;
    }
    if (zt && !cr)
      return ke || (ke = new gn()), vt || pl(E) ? cl(E, P, F, ae, it, ke) : fp(E, P, jt, F, ae, it, ke);
    if (!(F & s)) {
      var gr = cr && ve.call(E, "__wrapped__"), mr = Er && ve.call(P, "__wrapped__");
      if (gr || mr) {
        var yn = gr ? E.value() : E, Gr = mr ? P.value() : P;
        return ke || (ke = new gn()), it(yn, Gr, F, ae, ke);
      }
    }
    return zt ? (ke || (ke = new gn()), pp(E, P, F, ae, it, ke)) : !1;
  }
  function up(E) {
    if (!fl(E) || _p(E))
      return !1;
    var P = dl(E) ? Ke : Z;
    return P.test(zn(E));
  }
  function dp(E) {
    return zs(E) && hl(E.length) && !!te[Ms(E)];
  }
  function hp(E) {
    if (!bp(E))
      return fn(E);
    var P = [];
    for (var F in Object(E))
      ve.call(E, F) && F != "constructor" && P.push(F);
    return P;
  }
  function cl(E, P, F, ae, it, ke) {
    var vt = F & s, Tt = E.length, jt = P.length;
    if (Tt != jt && !(vt && jt > Tt))
      return !1;
    var dt = ke.get(E);
    if (dt && ke.get(P))
      return dt == P;
    var cr = -1, Er = !0, zt = F & i ? new Ki() : void 0;
    for (ke.set(E, P), ke.set(P, E); ++cr < Tt; ) {
      var gr = E[cr], mr = P[cr];
      if (ae)
        var yn = vt ? ae(mr, gr, cr, P, E, ke) : ae(gr, mr, cr, E, P, ke);
      if (yn !== void 0) {
        if (yn)
          continue;
        Er = !1;
        break;
      }
      if (zt) {
        if (!We(P, function(Gr, Un) {
          if (!$e(zt, Un) && (gr === Gr || it(gr, Gr, F, ae, ke)))
            return zt.push(Un);
        })) {
          Er = !1;
          break;
        }
      } else if (!(gr === mr || it(gr, mr, F, ae, ke))) {
        Er = !1;
        break;
      }
    }
    return ke.delete(E), ke.delete(P), Er;
  }
  function fp(E, P, F, ae, it, ke, vt) {
    switch (F) {
      case J:
        if (E.byteLength != P.byteLength || E.byteOffset != P.byteOffset)
          return !1;
        E = E.buffer, P = P.buffer;
      case $:
        return !(E.byteLength != P.byteLength || !ke(new ar(E), new ar(P)));
      case d:
      case f:
      case C:
        return ul(+E, +P);
      case p:
        return E.name == P.name && E.message == P.message;
      case S:
      case u:
        return E == P + "";
      case b:
        var Tt = Ce;
      case y:
        var jt = ae & s;
        if (Tt || (Tt = Te), E.size != P.size && !jt)
          return !1;
        var dt = vt.get(E);
        if (dt)
          return dt == P;
        ae |= i, vt.set(E, P);
        var cr = cl(Tt(E), Tt(P), ae, it, ke, vt);
        return vt.delete(E), cr;
      case g:
        if (mt)
          return mt.call(E) == mt.call(P);
    }
    return !1;
  }
  function pp(E, P, F, ae, it, ke) {
    var vt = F & s, Tt = ll(E), jt = Tt.length, dt = ll(P), cr = dt.length;
    if (jt != cr && !vt)
      return !1;
    for (var Er = jt; Er--; ) {
      var zt = Tt[Er];
      if (!(vt ? zt in P : ve.call(P, zt)))
        return !1;
    }
    var gr = ke.get(E);
    if (gr && ke.get(P))
      return gr == P;
    var mr = !0;
    ke.set(E, P), ke.set(P, E);
    for (var yn = vt; ++Er < jt; ) {
      zt = Tt[Er];
      var Gr = E[zt], Un = P[zt];
      if (ae)
        var gl = vt ? ae(Un, Gr, zt, P, E, ke) : ae(Gr, Un, zt, E, P, ke);
      if (!(gl === void 0 ? Gr === Un || it(Gr, Un, F, ae, ke) : gl)) {
        mr = !1;
        break;
      }
      yn || (yn = zt == "constructor");
    }
    if (mr && !yn) {
      var Ji = E.constructor, Xi = P.constructor;
      Ji != Xi && "constructor" in E && "constructor" in P && !(typeof Ji == "function" && Ji instanceof Ji && typeof Xi == "function" && Xi instanceof Xi) && (mr = !1);
    }
    return ke.delete(E), ke.delete(P), mr;
  }
  function ll(E) {
    return cp(E, xp, mp);
  }
  function Gi(E, P) {
    var F = E.__data__;
    return vp(P) ? F[typeof P == "string" ? "string" : "hash"] : F.map;
  }
  function as(E, P) {
    var F = ze(E, P);
    return up(F) ? F : void 0;
  }
  function gp(E) {
    var P = ve.call(E, At), F = E[At];
    try {
      E[At] = void 0;
      var ae = !0;
    } catch {
    }
    var it = Fe.call(E);
    return ae && (P ? E[At] = F : delete E[At]), it;
  }
  var mp = zr ? function(E) {
    return E == null ? [] : (E = Object(E), je(zr(E), function(P) {
      return fr.call(E, P);
    }));
  } : Op, mn = Ms;
  (at && mn(new at(new ArrayBuffer(1))) != J || nt && mn(new nt()) != b || pt && mn(pt.resolve()) != x || lt && mn(new lt()) != y || gt && mn(new gt()) != A) && (mn = function(E) {
    var P = Ms(E), F = P == w ? E.constructor : void 0, ae = F ? zn(F) : "";
    if (ae)
      switch (ae) {
        case bt:
          return J;
        case It:
          return b;
        case xt:
          return x;
        case wt:
          return y;
        case Ot:
          return A;
      }
    return P;
  });
  function yp(E, P) {
    return P = P ?? o, !!P && (typeof E == "number" || ue.test(E)) && E > -1 && E % 1 == 0 && E < P;
  }
  function vp(E) {
    var P = typeof E;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? E !== "__proto__" : E === null;
  }
  function _p(E) {
    return !!Ue && Ue in E;
  }
  function bp(E) {
    var P = E && E.constructor, F = typeof P == "function" && P.prototype || pe;
    return E === F;
  }
  function wp(E) {
    return Fe.call(E);
  }
  function zn(E) {
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
  function ul(E, P) {
    return E === P || E !== E && P !== P;
  }
  var Ep = ol(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ol : function(E) {
    return zs(E) && ve.call(E, "callee") && !fr.call(E, "callee");
  }, Qi = Array.isArray;
  function Sp(E) {
    return E != null && hl(E.length) && !dl(E);
  }
  var ua = pr || Cp;
  function Ip(E, P) {
    return al(E, P);
  }
  function dl(E) {
    if (!fl(E))
      return !1;
    var P = Ms(E);
    return P == m || P == v || P == l || P == _;
  }
  function hl(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= o;
  }
  function fl(E) {
    var P = typeof E;
    return E != null && (P == "object" || P == "function");
  }
  function zs(E) {
    return E != null && typeof E == "object";
  }
  var pl = Le ? et(Le) : dp;
  function xp(E) {
    return Sp(E) ? ap(E) : hp(E);
  }
  function Op() {
    return [];
  }
  function Cp() {
    return !1;
  }
  t.exports = Ip;
})(Io, Io.exports);
var X1 = Io.exports;
const e_ = /* @__PURE__ */ Ho(X1);
function t_(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var s = new XMLHttpRequest(), i = [], o = [], a = {}, c = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: c, headers: { keys: function() {
        return i;
      }, entries: function() {
        return o;
      }, get: function(d) {
        return a[d.toLowerCase()];
      }, has: function(d) {
        return d.toLowerCase() in a;
      } } };
    };
    for (var l in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(d, f, p) {
        i.push(f = f.toLowerCase()), o.push([f, p]), a[f] = a[f] ? a[f] + "," + p : p;
      }), r(c());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(l, e.headers[l]);
    s.send(e.body || null);
  });
}
const r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: t_
}, Symbol.toStringTag, { value: "Module" })), Du = /* @__PURE__ */ Bo(r_);
var n_ = fetch || (self.fetch = Du.default || Du);
const s_ = /* @__PURE__ */ Ho(n_);
function i_(t, e) {
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
  var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function f(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var b = 0, C = 0, L = 0, w = v.length; L !== w && v[L] === 0; )
      L++, b++;
    for (var x = (w - L) * d + 1 >>> 0, _ = new Uint8Array(x); L !== w; ) {
      for (var S = v[L], y = 0, u = x - 1; (S !== 0 || y < C) && u !== -1; u--, y++)
        S += 256 * _[u] >>> 0, _[u] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      C = y, L++;
    }
    for (var g = x - C; g !== x && _[g] === 0; )
      g++;
    for (var N = c.repeat(b); g < x; ++g)
      N += t.charAt(_[g]);
    return N;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var b = 0;
    if (v[b] !== " ") {
      for (var C = 0, L = 0; v[b] === c; )
        C++, b++;
      for (var w = (v.length - b) * l + 1 >>> 0, x = new Uint8Array(w); v[b]; ) {
        var _ = r[v.charCodeAt(b)];
        if (_ === 255)
          return;
        for (var S = 0, y = w - 1; (_ !== 0 || S < L) && y !== -1; y--, S++)
          _ += a * x[y] >>> 0, x[y] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        L = S, b++;
      }
      if (v[b] !== " ") {
        for (var u = w - L; u !== w && x[u] === 0; )
          u++;
        for (var g = new Uint8Array(C + (w - u)), N = C; u !== w; )
          g[N++] = x[u++];
        return g;
      }
    }
  }
  function m(v) {
    var b = p(v);
    if (b)
      return b;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: p, decode: m };
}
var o_ = i_, a_ = o_;
const Mh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, c_ = (t) => new TextEncoder().encode(t), l_ = (t) => new TextDecoder().decode(t);
class u_ {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class d_ {
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
    return zh(this, e);
  }
}
class h_ {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return zh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const zh = (t, e) => new h_({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class f_ {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new u_(e, r, n), this.decoder = new d_(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const na = ({ name: t, prefix: e, encode: r, decode: n }) => new f_(t, e, r, n), zi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = a_(r, e);
  return na({ prefix: t, name: e, encode: n, decode: (i) => Mh(s(i)) });
}, p_ = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const o = new Uint8Array(i * r / 8 | 0);
  let a = 0, c = 0, l = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, a += r, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, g_ = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c)
    for (a = a << 8 | t[c], o += 8; o > r; )
      o -= r, i += e[s & a >> o];
  if (o && (i += e[s & a << r - o]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Mt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => na({ prefix: e, name: t, encode(s) {
  return g_(s, n, r);
}, decode(s) {
  return p_(s, n, r, t);
} }), m_ = na({ prefix: "\0", name: "identity", encode: (t) => l_(t), decode: (t) => c_(t) });
var y_ = Object.freeze({ __proto__: null, identity: m_ });
const v_ = Mt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var __ = Object.freeze({ __proto__: null, base2: v_ });
const b_ = Mt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var w_ = Object.freeze({ __proto__: null, base8: b_ });
const E_ = zi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var S_ = Object.freeze({ __proto__: null, base10: E_ });
const I_ = Mt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), x_ = Mt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var O_ = Object.freeze({ __proto__: null, base16: I_, base16upper: x_ });
const C_ = Mt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), T_ = Mt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), k_ = Mt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), R_ = Mt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), P_ = Mt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), N_ = Mt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), A_ = Mt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), L_ = Mt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), j_ = Mt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var D_ = Object.freeze({ __proto__: null, base32: C_, base32upper: T_, base32pad: k_, base32padupper: R_, base32hex: P_, base32hexupper: N_, base32hexpad: A_, base32hexpadupper: L_, base32z: j_ });
const M_ = zi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), z_ = zi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var U_ = Object.freeze({ __proto__: null, base36: M_, base36upper: z_ });
const V_ = zi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), $_ = zi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var q_ = Object.freeze({ __proto__: null, base58btc: V_, base58flickr: $_ });
const W_ = Mt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), F_ = Mt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Z_ = Mt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), H_ = Mt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var B_ = Object.freeze({ __proto__: null, base64: W_, base64pad: F_, base64url: Z_, base64urlpad: H_ });
const Uh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), K_ = Uh.reduce((t, e, r) => (t[r] = e, t), []), Y_ = Uh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function G_(t) {
  return t.reduce((e, r) => (e += K_[r], e), "");
}
function Q_(t) {
  const e = [];
  for (const r of t) {
    const n = Y_[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const J_ = na({ prefix: "🚀", name: "base256emoji", encode: G_, decode: Q_ });
var X_ = Object.freeze({ __proto__: null, base256emoji: J_ }), eb = Vh, Mu = 128, tb = 127, rb = ~tb, nb = Math.pow(2, 31);
function Vh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= nb; )
    e[r++] = t & 255 | Mu, t /= 128;
  for (; t & rb; )
    e[r++] = t & 255 | Mu, t >>>= 7;
  return e[r] = t | 0, Vh.bytes = r - n + 1, e;
}
var sb = Ga, ib = 128, zu = 127;
function Ga(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, o, a = t.length;
  do {
    if (i >= a)
      throw Ga.bytes = 0, new RangeError("Could not decode varint");
    o = t[i++], r += s < 28 ? (o & zu) << s : (o & zu) * Math.pow(2, s), s += 7;
  } while (o >= ib);
  return Ga.bytes = i - n, r;
}
var ob = Math.pow(2, 7), ab = Math.pow(2, 14), cb = Math.pow(2, 21), lb = Math.pow(2, 28), ub = Math.pow(2, 35), db = Math.pow(2, 42), hb = Math.pow(2, 49), fb = Math.pow(2, 56), pb = Math.pow(2, 63), gb = function(t) {
  return t < ob ? 1 : t < ab ? 2 : t < cb ? 3 : t < lb ? 4 : t < ub ? 5 : t < db ? 6 : t < hb ? 7 : t < fb ? 8 : t < pb ? 9 : 10;
}, mb = { encode: eb, decode: sb, encodingLength: gb }, $h = mb;
const Uu = (t, e, r = 0) => ($h.encode(t, e, r), e), Vu = (t) => $h.encodingLength(t), Qa = (t, e) => {
  const r = e.byteLength, n = Vu(t), s = n + Vu(r), i = new Uint8Array(s + r);
  return Uu(t, i, 0), Uu(r, i, n), i.set(e, s), new yb(t, r, e, i);
};
class yb {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const qh = ({ name: t, code: e, encode: r }) => new vb(t, e, r);
class vb {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Qa(this.code, r) : r.then((n) => Qa(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Wh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), _b = qh({ name: "sha2-256", code: 18, encode: Wh("SHA-256") }), bb = qh({ name: "sha2-512", code: 19, encode: Wh("SHA-512") });
var wb = Object.freeze({ __proto__: null, sha256: _b, sha512: bb });
const Fh = 0, Eb = "identity", Zh = Mh, Sb = (t) => Qa(Fh, Zh(t)), Ib = { code: Fh, name: Eb, encode: Zh, digest: Sb };
var xb = Object.freeze({ __proto__: null, identity: Ib });
new TextEncoder(), new TextDecoder();
const $u = { ...y_, ...__, ...w_, ...S_, ...O_, ...D_, ...U_, ...q_, ...B_, ...X_ };
({ ...wb, ...xb });
function Hh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ob(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Hh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Bh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const qu = Bh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ba = Bh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ob(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Cb = { utf8: qu, "utf-8": qu, hex: $u.base16, latin1: ba, ascii: ba, binary: ba, ...$u };
function Tb(t, e = "utf8") {
  const r = Cb[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Hh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Kh = "wc", kb = 2, Qc = "core", Cn = `${Kh}@2:${Qc}:`, Rb = { name: Qc, logger: "error" }, Pb = { database: ":memory:" }, Nb = "crypto", Wu = "client_ed25519_seed", Ab = le.ONE_DAY, Lb = "keychain", jb = "0.3", Db = "messages", Mb = "0.3", zb = le.SIX_HOURS, Ub = "publisher", Yh = "irn", Vb = "error", Gh = "wss://relay.walletconnect.com", Fu = "wss://relay.walletconnect.org", $b = "relayer", Ft = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, qb = "_subscription", Xr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Wb = le.ONE_SECOND, Fb = "2.11.2", Zb = 1e4, Hb = "0.3", Bb = "WALLETCONNECT_CLIENT_ID", Sr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Kb = "subscription", Yb = "0.3", Gb = le.FIVE_SECONDS * 1e3, Qb = "pairing", Jb = "0.3", Fs = { wc_pairingDelete: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 0 } } }, Ys = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, qr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Xb = "history", ew = "0.3", tw = "expirer", yr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, rw = "0.3", wa = "verify-api", vs = "https://verify.walletconnect.com", Ja = "https://verify.walletconnect.org", nw = [vs, Ja], sw = "echo", iw = "https://echo.walletconnect.com";
class ow {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Lb, this.version = jb, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
    }, this.core = e, this.logger = Ze.generateChildLogger(r, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Oh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ch(e) : void 0;
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
class aw {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = Nb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = au(s);
      return fh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = p0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), o = au(i), a = Ka();
      return await Ev(a, s, Ab, o);
    }, this.generateSharedKey = (s, i, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), c = g0(a, i);
      return this.setSymKey(c, o);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const o = i || m0(s);
      return await this.keychain.set(o, s), o;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, o) => {
      this.isInitialized();
      const a = xh(o), c = Ni(i);
      if (vu(a)) {
        const p = a.senderPublicKey, m = a.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const l = this.getSymKey(s), { type: d, senderPublicKey: f } = a;
      return v0({ type: d, symKey: l, message: c, senderPublicKey: f });
    }, this.decode = async (s, i, o) => {
      this.isInitialized();
      const a = w0(i, o);
      if (vu(a)) {
        const c = a.receiverPublicKey, l = a.senderPublicKey;
        s = await this.generateSharedKey(c, l);
      }
      try {
        const c = this.getSymKey(s), l = _0({ symKey: c, encoded: i });
        return Yo(l);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (s) => {
      const i = wo(s);
      return ji(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = wo(s);
      return i.senderPublicKey ? Xt(i.senderPublicKey, Jt) : void 0;
    }, this.core = e, this.logger = Ze.generateChildLogger(r, this.name), this.keychain = n || new ow(this.core, this.logger);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
      e = this.keychain.get(Wu);
    } catch {
      e = Ka(), await this.keychain.set(Wu, e);
    }
    return Tb(e, "base16");
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
class cw extends Om {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Db, this.version = Mb, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      const i = ws(s);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[i] < "u" || (o[i] = s, this.messages.set(n, o), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), o = ws(s);
      return typeof i[o] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Ze.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Oh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ch(e) : void 0;
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
class lw extends Cm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Lr.EventEmitter(), this.name = Ub, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = le.toMiliseconds(le.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const a = (i == null ? void 0 : i.ttl) || zb, c = Ya(i), l = (i == null ? void 0 : i.prompt) || !1, d = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || jh().toString(), p = { topic: n, message: s, opts: { ttl: a, relay: c, prompt: l, tag: d, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await ni(this.rpcPublish(n, s, a, c, l, d, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${d}`), this.removeRequestFromQueue(f), this.relayer.events.emit(Ft.publish, p);
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
    }, this.relayer = e, this.logger = Ze.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, o, a) {
    var c, l, d, f;
    const p = { method: ho(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: o }, id: a };
    return Gt((c = p.params) == null ? void 0 : c.prompt) && ((l = p.params) == null || delete l.prompt), Gt((d = p.params) == null ? void 0 : d.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Ft.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Ft.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class uw {
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
var dw = Object.defineProperty, hw = Object.defineProperties, fw = Object.getOwnPropertyDescriptors, Zu = Object.getOwnPropertySymbols, pw = Object.prototype.hasOwnProperty, gw = Object.prototype.propertyIsEnumerable, Hu = (t, e, r) => e in t ? dw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zs = (t, e) => {
  for (var r in e || (e = {}))
    pw.call(e, r) && Hu(t, r, e[r]);
  if (Zu)
    for (var r of Zu(e))
      gw.call(e, r) && Hu(t, r, e[r]);
  return t;
}, Ea = (t, e) => hw(t, fw(e));
class mw extends Rm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new uw(), this.events = new Lr.EventEmitter(), this.name = Kb, this.version = Yb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = Ya(s), o = { topic: n, relay: i };
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
        const c = setInterval(() => {
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(c), a.stop(s), i(!0)), a.elapsed(s) >= Gb && (clearInterval(c), a.stop(s), o(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = Ze.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
      const s = Ya(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: ho(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await ni(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ft.connection_stalled);
    }
    return ws(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: ho(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await ni(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Ft.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: ho(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ea(Zs({}, r), { id: e })), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Zs({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Sr.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Sr.deleted, Ea(Zs({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Sr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Sr.resubscribed);
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
    Mi(r) && this.onBatchSubscribe(r.map((n, s) => Ea(Zs({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Ft.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Ft.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Sr.created, async (e) => {
      const r = Sr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Sr.deleted, async (e) => {
      const r = Sr.deleted;
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
var yw = Object.defineProperty, Bu = Object.getOwnPropertySymbols, vw = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable, Ku = (t, e, r) => e in t ? yw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bw = (t, e) => {
  for (var r in e || (e = {}))
    vw.call(e, r) && Ku(t, r, e[r]);
  if (Bu)
    for (var r of Bu(e))
      _w.call(e, r) && Ku(t, r, e[r]);
  return t;
};
class ww extends Tm {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Lr.EventEmitter(), this.name = $b, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
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
      this.events.emit(Ft.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Ft.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Xr.payload, this.onPayloadHandler), this.provider.on(Xr.connect, this.onConnectHandler), this.provider.on(Xr.disconnect, this.onDisconnectHandler), this.provider.on(Xr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ze.generateChildLogger(e.logger, this.name) : Ze.pino(Ze.getDefaultLoggerOptions({ level: e.logger || Vb })), this.messages = new cw(this.logger, e.core), this.subscriber = new mw(this, this.logger), this.publisher = new lw(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Gh, this.projectId = e.projectId, this.bundleId = C0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Fu}...`), await this.restartTransport(Fu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Zb);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
      a.topic === e && (this.subscriber.off(Sr.created, o), i());
    };
    return await Promise.all([new Promise((a) => {
      i = a, this.subscriber.on(Sr.created, o);
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
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await ni(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Sr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await ni(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await ku())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new K1(new J1(A0({ sdkVersion: Fb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Gc(e)) {
      if (!e.method.endsWith(qb))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, o = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(bw({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      ra(e) && this.events.emit(Ft.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ft.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Kc(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Xr.payload, this.onPayloadHandler), this.provider.off(Xr.connect, this.onConnectHandler), this.provider.off(Xr.disconnect, this.onDisconnectHandler), this.provider.off(Xr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Ft.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await ku();
    C1(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Ft.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, le.toMiliseconds(Wb)));
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
var Ew = Object.defineProperty, Yu = Object.getOwnPropertySymbols, Sw = Object.prototype.hasOwnProperty, Iw = Object.prototype.propertyIsEnumerable, Gu = (t, e, r) => e in t ? Ew(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qu = (t, e) => {
  for (var r in e || (e = {}))
    Sw.call(e, r) && Gu(t, r, e[r]);
  if (Yu)
    for (var r of Yu(e))
      Iw.call(e, r) && Gu(t, r, e[r]);
  return t;
};
class sa extends km {
  constructor(e, r, n, s = Cn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Hb, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Gt(o) ? this.map.set(this.getKey(o), o) : s1(o) ? this.map.set(o.id, o) : i1(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => e_(a[c], o[c]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = Qu(Qu({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), await this.persist());
    }, this.logger = Ze.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
class xw {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = Qb, this.version = Jb, this.events = new Ac(), this.initialized = !1, this.storagePrefix = Cn, this.ignoredPayloadTypes = [os], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Ka(), s = await this.core.crypto.setSymKey(n), i = lr(le.FIVE_MINUTES), o = { protocol: Yh }, a = { topic: s, expiry: i, relay: o, active: !1 }, c = Y0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: o, expiryTimestamp: i });
      return await this.pairings.set(s, a), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: c };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: o, expiryTimestamp: a } = Iu(n.uri);
      let c;
      if (this.pairings.keys.includes(s) && (c = this.pairings.get(s), c.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const l = a || lr(le.FIVE_MINUTES), d = { topic: s, relay: o, expiry: l, active: !1 };
      return await this.pairings.set(s, d), this.core.expirer.set(s, l), n.activatePairing && await this.activate({ topic: s }), this.events.emit(Ys.create, d), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: o })), d;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = lr(le.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = fs();
        this.events.once(St("pairing_ping", i), ({ error: l }) => {
          l ? c(l) : a();
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
      const o = Es(s, i), a = await this.core.crypto.encode(n, o), c = Fs[s].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
    }, this.sendResult = async (n, s, i) => {
      const o = Kc(n, i), a = await this.core.crypto.encode(s, o), c = await this.core.history.get(s, n), l = Fs[c.request.method].res;
      await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
    }, this.sendError = async (n, s, i) => {
      const o = Yc(n, i), a = await this.core.crypto.encode(s, o), c = await this.core.history.get(s, n), l = Fs[c.request.method] ? Fs[c.request.method].res : Fs.unregistered_method.res;
      await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, _t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => _n(s.expiry));
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(Ys.ping, { id: i, topic: n });
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        rn(s) ? this.events.emit(St("pairing_ping", i), {}) : Ir(s) && this.events.emit(St("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ys.delete, { id: i, topic: n });
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
      if (!n1(n.uri)) {
        const { message: o } = X("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(o);
      }
      const i = Iu(n.uri);
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
      if (_n(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = X("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Ze.generateChildLogger(r, this.name), this.pairings = new sa(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = X("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Ft.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        Gc(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : ra(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(yr.expired, async (e) => {
      const { topic: r } = kh(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ys.expire, { topic: r }));
    });
  }
}
class Ow extends xm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Lr.EventEmitter(), this.name = Xb, this.version = ew, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      typeof s.response > "u" && (s.response = Ir(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(qr.updated, s));
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
    }, this.logger = Ze.generateChildLogger(r, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Es(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    }), this.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, () => {
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
class Cw extends Pm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Lr.EventEmitter(), this.name = tw, this.version = rw, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(yr.created, { target: i, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(yr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Ze.generateChildLogger(r, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
      return L0(e);
    if (typeof e == "number")
      return j0(e);
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
    await this.setExpirations(this.values), this.events.emit(yr.sync);
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
    this.expirations.delete(e), this.events.emit(yr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(yr.created, (e) => {
      const r = yr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(yr.expired, (e) => {
      const r = yr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(yr.deleted, (e) => {
      const r = yr.deleted;
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
class Tw extends Nm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = wa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Ls() || !js())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ja;
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
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(o), i = await this.fetchAttestation(n.attestationId, Ja);
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
        if (document.getElementById(wa))
          return i();
        window.addEventListener("message", s);
        const o = document.createElement("iframe");
        o.id = wa, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, n = i;
      }), new Promise((i, o) => setTimeout(() => {
        window.removeEventListener("message", s), o("verify iframe load timeout");
      }, le.toMiliseconds(le.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || vs;
      return nw.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${vs}`), s = vs), s;
    }, this.logger = Ze.generateChildLogger(r, this.name), this.verifyUrl = vs, this.abortController = new AbortController(), this.isDevEnv = Fc() && process.env.IS_VITEST;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), le.toMiliseconds(e));
  }
}
class kw extends Am {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = sw, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: o, enableEncrypted: a = !1 } = n, c = `${iw}/${this.projectId}/clients`;
      await s_(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: i, always_raw: a }) });
    }, this.logger = Ze.generateChildLogger(r, this.context);
  }
}
var Rw = Object.defineProperty, Ju = Object.getOwnPropertySymbols, Pw = Object.prototype.hasOwnProperty, Nw = Object.prototype.propertyIsEnumerable, Xu = (t, e, r) => e in t ? Rw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ed = (t, e) => {
  for (var r in e || (e = {}))
    Pw.call(e, r) && Xu(t, r, e[r]);
  if (Ju)
    for (var r of Ju(e))
      Nw.call(e, r) && Xu(t, r, e[r]);
  return t;
};
class Jc extends Im {
  constructor(e) {
    super(e), this.protocol = Kh, this.version = kb, this.name = Qc, this.events = new Lr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Gh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ze.pino(Ze.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Rb.logger }));
    this.logger = Ze.generateChildLogger(r, this.name), this.heartbeat = new Ps.HeartBeat(), this.crypto = new aw(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Ow(this, this.logger), this.expirer = new Cw(this, this.logger), this.storage = e != null && e.storage ? e.storage : new $g(ed(ed({}, Pb), e == null ? void 0 : e.storageOptions)), this.relayer = new ww({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new xw(this, this.logger), this.verify = new Tw(this.projectId || "", this.logger), this.echoClient = new kw(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Jc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Bb, n), r;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
const Aw = Jc, Qh = "wc", Jh = 2, Xh = "client", Xc = `${Qh}@${Jh}:${Xh}:`, Sa = { name: Xh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, td = "WALLETCONNECT_DEEPLINK_CHOICE", Lw = "proposal", jw = "Proposal expired", Dw = "session", oo = le.SEVEN_DAYS, Mw = "engine", en = { wc_sessionPropose: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: le.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: le.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: le.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: le.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: le.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ia = { min: le.FIVE_MINUTES, max: le.SEVEN_DAYS }, tn = { idle: "IDLE", active: "ACTIVE" }, zw = "request", Uw = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Vw = Object.defineProperty, $w = Object.defineProperties, qw = Object.getOwnPropertyDescriptors, rd = Object.getOwnPropertySymbols, Ww = Object.prototype.hasOwnProperty, Fw = Object.prototype.propertyIsEnumerable, nd = (t, e, r) => e in t ? Vw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kt = (t, e) => {
  for (var r in e || (e = {}))
    Ww.call(e, r) && nd(t, r, e[r]);
  if (rd)
    for (var r of rd(e))
      Fw.call(e, r) && nd(t, r, e[r]);
  return t;
}, hs = (t, e) => $w(t, qw(e));
class Zw extends jm {
  constructor(e) {
    super(e), this.name = Mw, this.events = new Ac(), this.initialized = !1, this.ignoredPayloadTypes = [os], this.requestQueue = { state: tn.idle, queue: [] }, this.sessionRequestQueue = { state: tn.idle, queue: [] }, this.requestQueueDelay = le.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(en) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, le.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = hs(Kt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: o, sessionProperties: a, relays: c } = n;
      let l = s, d, f = !1;
      if (l && (f = this.client.core.pairing.pairings.get(l).active), !l || !f) {
        const { topic: _, uri: S } = await this.client.core.pairing.create();
        l = _, d = S;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = en.wc_sessionPropose.req.ttl || le.FIVE_MINUTES, v = lr(m), b = Kt({ requiredNamespaces: i, optionalNamespaces: o, relays: c ?? [{ protocol: Yh }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: v }, a && { sessionProperties: a }), { reject: C, resolve: L, done: w } = fs(m, jw);
      if (this.events.once(St("session_connect"), async ({ error: _, session: S }) => {
        if (_)
          C(_);
        else if (S) {
          S.self.publicKey = p;
          const y = hs(Kt({}, S), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(S.topic, y), await this.setExpiry(S.topic, S.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: S.peer.metadata }), L(y);
        }
      }), !l) {
        const { message: _ } = X("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(_);
      }
      const x = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: b, throwOnFailedPublish: !0 });
      return await this.setProposal(x, Kt({ id: x }, b)), { uri: d, approval: w };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: c, proposer: l, requiredNamespaces: d, optionalNamespaces: f } = a;
      c = c || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = l.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      c && n && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: l.metadata }), await this.sendResult({ id: n, topic: c, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c }));
      const b = Kt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: c, controller: { publicKey: p, metadata: this.client.metadata }, expiry: lr(oo) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(v);
      const C = hs(Kt({}, b), { topic: v, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: c, acknowledged: !1, self: b.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: p });
      await this.client.session.set(v, C);
      try {
        await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: b, throwOnFailedPublish: !0 });
      } catch (L) {
        throw this.client.logger.error(L), this.client.session.delete(v, _t("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v), L;
      }
      return await this.setExpiry(v, lr(oo)), { topic: v, acknowledged: () => new Promise((L) => setTimeout(() => L(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: o, resolve: a, reject: c } = fs();
      return this.events.once(St("session_update", i), ({ error: l }) => {
        l ? c(l) : a();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: o };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: o, reject: a } = fs();
      return this.events.once(St("session_extend", s), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(n, lr(oo)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: o = en.wc_sessionRequest.req.ttl } = r, a = Bc(), { done: c, resolve: l, reject: d } = fs(o, "Request expired. Please try again.");
      return this.events.once(St("session_request", a), ({ error: f, result: p }) => {
        f ? d(f) : l(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: a, topic: i, method: "wc_sessionRequest", params: { request: hs(Kt({}, s), { expiryTimestamp: lr(o) }), chainId: n }, expiry: o, throwOnFailedPublish: !0 }).catch((p) => d(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: a }), f();
      }), new Promise(async (f) => {
        const p = await M0(this.client.core.storage, td);
        D0({ id: a, topic: i, wcDeepLink: p }), f();
      }), c()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      rn(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Ir(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: o, reject: a } = fs();
        this.events.once(St("session_ping", s), ({ error: c }) => {
          c ? a(c) : o();
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
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => t1(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(td).catch((c) => this.client.logger.warn(c)), this.getPendingSessionRequests().forEach((c) => {
        c.topic === n && this.deletePendingSessionRequest(c.id, _t("USER_DISCONNECTED"));
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
      const { topic: n, method: s, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l } = r, d = Es(s, i, c);
      if (js() && Uw.includes(s)) {
        const m = ws(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, d), p = en[s].req;
      return o && (p.ttl = o), a && (p.id = a), this.client.core.history.set(n, d), l ? (p.internal = hs(Kt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), d.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: o } = r, a = Kc(n, i), c = await this.client.core.crypto.encode(s, a), l = await this.client.core.history.get(s, n), d = en[l.request.method].res;
      o ? (d.internal = hs(Kt({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, c, d)) : this.client.core.relayer.publish(s, c, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, s) => {
      const i = Yc(r, s), o = await this.client.core.crypto.encode(n, i), a = await this.client.core.history.get(n, r), c = en[a.request.method].res;
      this.client.core.relayer.publish(n, o, c), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        let i = !1;
        _n(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        _n(s.expiryTimestamp) && n.push(s.id);
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
        const c = ws(JSON.stringify(n)), l = await this.getVerifyContext(c, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: a, verifyContext: l });
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
        const c = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: c });
        const l = await this.client.core.crypto.generateSharedKey(a, c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const d = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Ir(n) && (await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), this.events.emit(St("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, pairingTopic: f } = n.params, p = Kt({ topic: r, relay: o, expiry: c, namespaces: l, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, d && { sessionProperties: d });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(St("session_connect"), { session: p }), this.cleanupDuplicatePairings(p);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      rn(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(St("session_approve", s), {})) : Ir(n) && (await this.client.session.delete(r, _t("USER_DISCONNECTED")), this.events.emit(St("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const o = `${r}_session_update`, a = io.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Kt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), io.set(o, i);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_update", s), {}) : Ir(n) && this.events.emit(St("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, lr(oo)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_extend", s), {}) : Ir(n) && this.events.emit(St("session_extend", s), { error: n.error });
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
        rn(n) ? this.events.emit(St("session_ping", s), {}) : Ir(n) && this.events.emit(St("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Ft.publish, async () => {
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
        const o = ws(JSON.stringify(Es("wc_sessionRequest", i, s))), a = this.client.session.get(r), c = await this.getVerifyContext(o, a.peer.metadata), l = { id: s, topic: r, params: i, verifyContext: c };
        await this.setPendingSessionRequest(l), this.addSessionRequestToSessionRequestQueue(l), this.processSessionRequestQueue();
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      rn(n) ? this.events.emit(St("session_request", s), { result: n.result }) : Ir(n) && this.events.emit(St("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const o = `${r}_session_event_${i.event.name}`, a = io.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Kt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), io.set(o, s);
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
      n && this.onSessionProposeRequest(r.topic, Es("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!sr(r)) {
        const { message: c } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: o, relays: a } = r;
      if (Gt(n) || await this.isValidPairingTopic(n), !f1(a, !0)) {
        const { message: c } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(c);
      }
      !Gt(s) && Eo(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Gt(i) && Eo(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Gt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = h1(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!sr(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), c = va(s, "approve()");
      if (c)
        throw new Error(c.message);
      const l = Cu(a.requiredNamespaces, s, "approve()");
      if (l)
        throw new Error(l.message);
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
      if (await this.isValidProposalId(n), !g1(s)) {
        const { message: i } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!sr(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: n, controller: s, namespaces: i, expiry: o } = r;
      if (!Ph(n)) {
        const { message: l } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const a = o1(s, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const c = va(i, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      if (_n(o)) {
        const { message: l } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!sr(r)) {
        const { message: c } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), o = va(s, "update()");
      if (o)
        throw new Error(o.message);
      const a = Cu(i.requiredNamespaces, s, "update()");
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
        const { message: c } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, request: s, chainId: i, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Ou(a, i)) {
        const { message: c } = X("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(c);
      }
      if (!m1(s)) {
        const { message: c } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!_1(a, i, s.method)) {
        const { message: c } = X("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (o && !S1(o, Ia)) {
        const { message: c } = X("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Ia.min} and ${Ia.max}`);
        throw new Error(c);
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
      if (!y1(i)) {
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
      if (!Ou(o, i)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(a);
      }
      if (!v1(s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
      if (!b1(o, i, s.name)) {
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
      const s = { verified: { verifyUrl: n.verifyUrl || vs, validation: "UNKNOWN", origin: n.url || "" } };
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
    this.client.core.relayer.on(Ft.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        Gc(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : ra(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(yr.expired, async (e) => {
      const { topic: r, id: n } = kh(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ys.create, (e) => this.onPairingCreated(e));
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
    if (_n(this.client.core.pairing.pairings.get(e).expiry)) {
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
    if (_n(this.client.session.get(e).expiry)) {
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
    if (!p1(e)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (_n(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = X("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class Hw extends sa {
  constructor(e, r) {
    super(e, r, Lw, Xc), this.core = e, this.logger = r;
  }
}
class Bw extends sa {
  constructor(e, r) {
    super(e, r, Dw, Xc), this.core = e, this.logger = r;
  }
}
class Kw extends sa {
  constructor(e, r) {
    super(e, r, zw, Xc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class el extends Lm {
  constructor(e) {
    super(e), this.protocol = Qh, this.version = Jh, this.name = Sa.name, this.events = new Lr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Sa.name, this.metadata = (e == null ? void 0 : e.metadata) || k0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ze.pino(Ze.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Sa.logger }));
    this.core = (e == null ? void 0 : e.core) || new Aw(e), this.logger = Ze.generateChildLogger(r, this.name), this.session = new Bw(this.core, this.logger), this.proposal = new Hw(this.core, this.logger), this.pendingRequest = new Kw(this.core, this.logger), this.engine = new Zw(this);
  }
  static async init(e) {
    const r = new el(e);
    return await r.initialize(), r;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
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
var Yw = Object.defineProperty, Gw = Object.defineProperties, Qw = Object.getOwnPropertyDescriptors, sd = Object.getOwnPropertySymbols, Jw = Object.prototype.hasOwnProperty, Xw = Object.prototype.propertyIsEnumerable, id = (t, e, r) => e in t ? Yw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, e5 = (t, e) => {
  for (var r in e || (e = {}))
    Jw.call(e, r) && id(t, r, e[r]);
  if (sd)
    for (var r of sd(e))
      Xw.call(e, r) && id(t, r, e[r]);
  return t;
}, t5 = (t, e) => Gw(t, Qw(e)), tl = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, ct = (t, e, r) => (tl(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Fn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, xo = (t, e, r, n) => (tl(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), $t = (t, e, r) => (tl(t, e, "access private method"), r), Zn, ps, Gs, Pt, Xa, ef, qt, Yt, ec, od;
let r5 = class {
  constructor(t) {
    Fn(this, Xa), Fn(this, qt), Fn(this, ec), Fn(this, Zn, void 0), Fn(this, ps, void 0), Fn(this, Gs, void 0), Fn(this, Pt, void 0), xo(this, Zn, t), xo(this, ps, $t(this, Xa, ef).call(this)), $t(this, qt, Yt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await $t(this, qt, Yt).call(this);
      const i = ct(this, ps).subscribeModal((c) => {
        c.open || (i(), s(new Error("Modal closed")));
      }), { uri: o, approval: a } = await ct(this, Pt).connect(t);
      if (o) {
        const c = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: l }) => {
          l && l.forEach((d) => c.add(d));
        }), r && Object.values(r).forEach(({ chains: l }) => {
          l && l.forEach((d) => c.add(d));
        }), await ct(this, ps).openModal({ uri: o, chains: Array.from(c) });
      }
      try {
        const c = await a();
        n(c);
      } catch (c) {
        s(c);
      } finally {
        i(), ct(this, ps).closeModal();
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
Zn = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakSet(), ef = function() {
  const { modalOptions: t, projectId: e } = ct(this, Zn);
  return new ng(t5(e5({}, t), { projectId: e }));
}, qt = /* @__PURE__ */ new WeakSet(), Yt = async function() {
  return ct(this, Pt) ? !0 : (!ct(this, Gs) && typeof window < "u" && xo(this, Gs, $t(this, ec, od).call(this)), ct(this, Gs));
}, ec = /* @__PURE__ */ new WeakSet(), od = async function() {
  xo(this, Pt, await el.init({ metadata: ct(this, Zn).metadata, projectId: ct(this, Zn).projectId, relayUrl: ct(this, Zn).relayUrl }));
  const t = await ct(this, Pt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const n5 = [
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
], rl = ["aleo:1"], s5 = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], tf = "f0aaeffe71b636da453fce042d79d723";
function i5() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const o5 = {
  chains: rl,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [tf]
}, a5 = {
  chains: rl,
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
}, ad = i5() ? o5 : a5, c5 = "@puzzlehq/sdk-core", l5 = "Puzzle SDK", u5 = "0.2.32-beta.1", d5 = "Your portal to privacy", h5 = "./dist/puzzle.cjs.js", f5 = "./dist/puzzle.es.js", p5 = "./dist/puzzle.umd.js", g5 = "./dist/types/src/index.d.ts", m5 = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, y5 = "module", v5 = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, _5 = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, b5 = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
}, w5 = {
  buffer: "^6.0.3"
}, E5 = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], S5 = "Puzzle", I5 = "ISC", x5 = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, O5 = "https://github.com/puzzlehq/puzzle-sdk#readme", cd = {
  name: c5,
  displayName: l5,
  version: u5,
  description: d5,
  main: h5,
  module: f5,
  browser: p5,
  types: g5,
  private: !1,
  exports: m5,
  type: y5,
  scripts: v5,
  repository: _5,
  dependencies: b5,
  peerDependencies: w5,
  keywords: E5,
  author: S5,
  license: I5,
  bugs: x5,
  homepage: O5
}, Xs = new Ac();
let Sn;
async function C5(t) {
  let e = !1;
  const r = cd.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${cd.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", ad), Sn = new r5({
    projectId: t.projectId ?? tf,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: window ? window.location.hostname : t.dAppUrl ?? "NO URL",
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...ad }
  }), e) {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    try {
      T5(Sn, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  Sn.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), Sn.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function T5(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: _t("USER_DISCONNECTED")
  }));
}
async function _r() {
  return new Promise((t) => {
    if (Sn)
      t(Sn);
    else {
      const e = setInterval(() => {
        Sn && (clearInterval(e), t(Sn));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const k5 = async (t) => {
  var e;
  if (!((e = window == null ? void 0 : window.aleo) != null && e.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasInjectedConnection", "true"), !0) : (localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1);
  } catch (r) {
    return console.warn(r), localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  }
}, hn = () => {
  var t;
  return (t = window == null ? void 0 : window.aleo) != null && t.puzzleWalletClient ? localStorage.getItem(
    "puzzle-hasInjectedConnection"
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
var tc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(tc || (tc = {}));
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
]), bn = (t) => {
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
]), R5 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
          let a = n, c = 0;
          for (; c < o.path.length; ) {
            const l = o.path[c];
            c === o.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(r(o))) : a[l] = a[l] || { _errors: [] }, a = a[l], c++;
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
Tr.create = (t) => new Tr(t);
const si = (t, e) => {
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
let rf = si;
function P5(t) {
  rf = t;
}
function Oo() {
  return rf;
}
const Co = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    a = l(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, N5 = [];
function ie(t, e) {
  const r = Co({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Oo(),
      si
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Zt {
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
    return Zt.mergeObjectSync(e, n);
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
}), nf = (t) => ({ status: "dirty", value: t }), er = (t) => ({ status: "valid", value: t }), rc = (t) => t.status === "aborted", nc = (t) => t.status === "dirty", To = (t) => t.status === "valid", ko = (t) => typeof Promise < "u" && t instanceof Promise;
var he;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(he || (he = {}));
class Zr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ld = (t, e) => {
  if (To(e))
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
function Ie(t) {
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
      status: new Zt(),
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
    if (ko(r))
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
    return ld(s, i);
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
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (ko(s) ? s : Promise.resolve(s));
    return ld(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: Y.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
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
    return Jn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return kr.create(this, this._def);
  }
  promise() {
    return Cs.create(this, this._def);
  }
  or(e) {
    return ci.create([this, e], this._def);
  }
  and(e) {
    return li.create(this, e, this._def);
  }
  transform(e) {
    return new Nr({
      ...Ie(this._def),
      schema: this,
      typeName: me.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new pi({
      ...Ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: me.ZodDefault
    });
  }
  brand() {
    return new of({
      typeName: me.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ao({
      ...Ie(this._def),
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
    return Ui.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const A5 = /^c[^\s-]{8,}$/i, L5 = /^[a-z][a-z0-9]*$/, j5 = /[0-9A-HJKMNP-TV-Z]{26}/, D5 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, M5 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, z5 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), U5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, V5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, $5 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function q5(t, e) {
  return !!((e === "v4" || !e) && U5.test(t) || (e === "v6" || !e) && V5.test(t));
}
class Or extends Ne {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: Y.invalid_string,
      ...he.errToObj(n)
    }), this.nonempty = (e) => this.min(1, he.errToObj(e)), this.trim = () => new Or({
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
    const r = new Zt();
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
        M5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "email",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        z5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "emoji",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        D5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "uuid",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        A5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "cuid",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        L5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "cuid2",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        j5.test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
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
        }), r.dirty()) : s.kind === "datetime" ? $5(s).test(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
          code: Y.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? q5(e.data, s.version) || (n = this._getOrReturnCtx(e, n), ie(n, {
          validation: "ip",
          code: Y.invalid_string,
          message: s.message
        }), r.dirty()) : Qe.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Or({
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
Or.create = (t) => {
  var e;
  return new Or({
    checks: [],
    typeName: me.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
function W5(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Tn extends Ne {
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
    const n = new Zt();
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
      }), n.dirty()) : s.kind === "multipleOf" ? W5(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), ie(r, {
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
Tn.create = (t) => new Tn({
  checks: [],
  typeName: me.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class kn extends Ne {
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
    const n = new Zt();
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
    return new kn({
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
    return new kn({
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
kn.create = (t) => {
  var e;
  return new kn({
    checks: [],
    typeName: me.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
class ii extends Ne {
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
ii.create = (t) => new ii({
  typeName: me.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class Gn extends Ne {
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
    const r = new Zt();
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
    return new Gn({
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
Gn.create = (t) => new Gn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: me.ZodDate,
  ...Ie(t)
});
class Ro extends Ne {
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
Ro.create = (t) => new Ro({
  typeName: me.ZodSymbol,
  ...Ie(t)
});
class oi extends Ne {
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
oi.create = (t) => new oi({
  typeName: me.ZodUndefined,
  ...Ie(t)
});
class ai extends Ne {
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
ai.create = (t) => new ai({
  typeName: me.ZodNull,
  ...Ie(t)
});
class Os extends Ne {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return er(e.data);
  }
}
Os.create = (t) => new Os({
  typeName: me.ZodAny,
  ...Ie(t)
});
class Kn extends Ne {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return er(e.data);
  }
}
Kn.create = (t) => new Kn({
  typeName: me.ZodUnknown,
  ...Ie(t)
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
  ...Ie(t)
});
class Po extends Ne {
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
Po.create = (t) => new Po({
  typeName: me.ZodVoid,
  ...Ie(t)
});
class kr extends Ne {
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
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Zr(r, o, r.path, a)))).then((o) => Zt.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Zr(r, o, r.path, a)));
    return Zt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new kr({
      ...this._def,
      minLength: { value: e, message: he.toString(r) }
    });
  }
  max(e, r) {
    return new kr({
      ...this._def,
      maxLength: { value: e, message: he.toString(r) }
    });
  }
  length(e, r) {
    return new kr({
      ...this._def,
      exactLength: { value: e, message: he.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
kr.create = (t, e) => new kr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: me.ZodArray,
  ...Ie(e)
});
function gs(t) {
  if (t instanceof ht) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = on.create(gs(n));
    }
    return new ht({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof kr ? new kr({
      ...t._def,
      type: gs(t.element)
    }) : t instanceof on ? on.create(gs(t.unwrap())) : t instanceof Jn ? Jn.create(gs(t.unwrap())) : t instanceof Hr ? Hr.create(t.items.map((e) => gs(e))) : t;
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
      const c = this._getOrReturnCtx(e);
      return ie(c, {
        code: Y.invalid_type,
        expected: ne.object,
        received: c.parsedType
      }), we;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof cn && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || o.push(c);
    const a = [];
    for (const c of i) {
      const l = s[c], d = n.data[c];
      a.push({
        key: { status: "valid", value: c },
        value: l._parse(new Zr(n, d, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof cn) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of o)
          a.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: n.data[l] }
          });
      else if (c === "strict")
        o.length > 0 && (ie(n, {
          code: Y.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of o) {
        const d = n.data[l];
        a.push({
          key: { status: "valid", value: l },
          value: c._parse(
            new Zr(n, d, n.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const l of a) {
        const d = await l.key;
        c.push({
          key: d,
          value: await l.value,
          alwaysSet: l.alwaysSet
        });
      }
      return c;
    }).then((c) => Zt.mergeObjectSync(r, c)) : Zt.mergeObjectSync(r, a);
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
          const c = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = he.errToObj(e).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
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
    return gs(this);
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
    return sf(Qe.objectKeys(this.shape));
  }
}
ht.create = (t, e) => new ht({
  shape: () => t,
  unknownKeys: "strip",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...Ie(e)
});
ht.strictCreate = (t, e) => new ht({
  shape: () => t,
  unknownKeys: "strict",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...Ie(e)
});
ht.lazycreate = (t, e) => new ht({
  shape: t,
  unknownKeys: "strip",
  catchall: cn.create(),
  typeName: me.ZodObject,
  ...Ie(e)
});
class ci extends Ne {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Tr(a.ctx.common.issues));
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
      for (const c of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: l }), l.common.issues.length && o.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new Tr(c));
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
ci.create = (t, e) => new ci({
  options: t,
  typeName: me.ZodUnion,
  ...Ie(e)
});
const fo = (t) => t instanceof di ? fo(t.schema) : t instanceof Nr ? fo(t.innerType()) : t instanceof hi ? [t.value] : t instanceof Rn ? t.options : t instanceof fi ? Object.keys(t.enum) : t instanceof pi ? fo(t._def.innerType) : t instanceof oi ? [void 0] : t instanceof ai ? [null] : null;
class ia extends Ne {
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
      const o = fo(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new ia({
      typeName: me.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...Ie(n)
    });
  }
}
function sc(t, e) {
  const r = bn(t), n = bn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ne.object && n === ne.object) {
    const s = Qe.objectKeys(e), i = Qe.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const c = sc(t[a], e[a]);
      if (!c.valid)
        return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === ne.array && n === ne.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], c = sc(o, a);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === ne.date && n === ne.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class li extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, o) => {
      if (rc(i) || rc(o))
        return we;
      const a = sc(i.value, o.value);
      return a.valid ? ((nc(i) || nc(o)) && r.dirty(), { status: r.value, value: a.data }) : (ie(n, {
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
li.create = (t, e, r) => new li({
  left: t,
  right: e,
  typeName: me.ZodIntersection,
  ...Ie(r)
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
      return a ? a._parse(new Zr(n, i, n.path, o)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => Zt.mergeArray(r, i)) : Zt.mergeArray(r, s);
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
    ...Ie(e)
  });
};
class ui extends Ne {
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
        key: i._parse(new Zr(n, a, n.path, a)),
        value: o._parse(new Zr(n, n.data[a], n.path, a))
      });
    return n.common.async ? Zt.mergeObjectAsync(r, s) : Zt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ne ? new ui({
      keyType: e,
      valueType: r,
      typeName: me.ZodRecord,
      ...Ie(n)
    }) : new ui({
      keyType: Or.create(),
      valueType: e,
      typeName: me.ZodRecord,
      ...Ie(r)
    });
  }
}
class No extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.map)
      return ie(n, {
        code: Y.invalid_type,
        expected: ne.map,
        received: n.parsedType
      }), we;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, c], l) => ({
      key: s._parse(new Zr(n, a, n.path, [l, "key"])),
      value: i._parse(new Zr(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return we;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(l.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return we;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(l.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
No.create = (t, e, r) => new No({
  valueType: e,
  keyType: t,
  typeName: me.ZodMap,
  ...Ie(r)
});
class Qn extends Ne {
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
    function o(c) {
      const l = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return we;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) => i._parse(new Zr(n, c, n.path, l)));
    return n.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(e, r) {
    return new Qn({
      ...this._def,
      minSize: { value: e, message: he.toString(r) }
    });
  }
  max(e, r) {
    return new Qn({
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
Qn.create = (t, e) => new Qn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: me.ZodSet,
  ...Ie(e)
});
class Ss extends Ne {
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
    function n(a, c) {
      return Co({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Oo(),
          si
        ].filter((l) => !!l),
        issueData: {
          code: Y.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(a, c) {
      return Co({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Oo(),
          si
        ].filter((l) => !!l),
        issueData: {
          code: Y.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof Cs ? er(async (...a) => {
      const c = new Tr([]), l = await this._def.args.parseAsync(a, i).catch((f) => {
        throw c.addIssue(n(a, f)), c;
      }), d = await o(...l);
      return await this._def.returns._def.type.parseAsync(d, i).catch((f) => {
        throw c.addIssue(s(d, f)), c;
      });
    }) : er((...a) => {
      const c = this._def.args.safeParse(a, i);
      if (!c.success)
        throw new Tr([n(a, c.error)]);
      const l = o(...c.data), d = this._def.returns.safeParse(l, i);
      if (!d.success)
        throw new Tr([s(l, d.error)]);
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
      args: Hr.create(e).rest(Kn.create())
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
      args: e || Hr.create([]).rest(Kn.create()),
      returns: r || Kn.create(),
      typeName: me.ZodFunction,
      ...Ie(n)
    });
  }
}
class di extends Ne {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
di.create = (t, e) => new di({
  getter: t,
  typeName: me.ZodLazy,
  ...Ie(e)
});
class hi extends Ne {
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
hi.create = (t, e) => new hi({
  value: t,
  typeName: me.ZodLiteral,
  ...Ie(e)
});
function sf(t, e) {
  return new Rn({
    values: t,
    typeName: me.ZodEnum,
    ...Ie(e)
  });
}
class Rn extends Ne {
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
    return Rn.create(e);
  }
  exclude(e) {
    return Rn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Rn.create = sf;
class fi extends Ne {
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
fi.create = (t, e) => new fi({
  values: t,
  typeName: me.ZodNativeEnum,
  ...Ie(e)
});
class Cs extends Ne {
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
Cs.create = (t, e) => new Cs({
  type: t,
  typeName: me.ZodPromise,
  ...Ie(e)
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
        const c = s.refinement(a, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
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
        if (!To(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => To(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Qe.assertNever(s);
  }
}
Nr.create = (t, e, r) => new Nr({
  schema: t,
  typeName: me.ZodEffects,
  effect: e,
  ...Ie(r)
});
Nr.createWithPreprocess = (t, e, r) => new Nr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: me.ZodEffects,
  ...Ie(r)
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
  ...Ie(e)
});
class Jn extends Ne {
  _parse(e) {
    return this._getType(e) === ne.null ? er(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Jn.create = (t, e) => new Jn({
  innerType: t,
  typeName: me.ZodNullable,
  ...Ie(e)
});
class pi extends Ne {
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
pi.create = (t, e) => new pi({
  innerType: t,
  typeName: me.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Ie(e)
});
class Ao extends Ne {
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
    return ko(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Tr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
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
Ao.create = (t, e) => new Ao({
  innerType: t,
  typeName: me.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class Lo extends Ne {
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
Lo.create = (t) => new Lo({
  typeName: me.ZodNaN,
  ...Ie(t)
});
const F5 = Symbol("zod_brand");
class of extends Ne {
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
class Ui extends Ne {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? we : s.status === "dirty" ? (r.dirty(), nf(s.value)) : this._def.out._parseAsync({
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
    return new Ui({
      in: e,
      out: r,
      typeName: me.ZodPipeline
    });
  }
}
const af = (t, e = {}, r) => t ? Os.create().superRefine((n, s) => {
  var i, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, c = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, l = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Os.create(), Z5 = {
  object: ht.lazycreate
};
var me;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(me || (me = {}));
const H5 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => af((r) => r instanceof t, e), cf = Or.create, lf = Tn.create, B5 = Lo.create, K5 = kn.create, uf = ii.create, Y5 = Gn.create, G5 = Ro.create, Q5 = oi.create, J5 = ai.create, X5 = Os.create, e2 = Kn.create, t2 = cn.create, r2 = Po.create, n2 = kr.create, s2 = ht.create, i2 = ht.strictCreate, o2 = ci.create, a2 = ia.create, c2 = li.create, l2 = Hr.create, u2 = ui.create, d2 = No.create, h2 = Qn.create, f2 = Ss.create, p2 = di.create, g2 = hi.create, m2 = Rn.create, y2 = fi.create, v2 = Cs.create, ud = Nr.create, _2 = on.create, b2 = Jn.create, w2 = Nr.createWithPreprocess, E2 = Ui.create, S2 = () => cf().optional(), I2 = () => lf().optional(), x2 = () => uf().optional(), O2 = {
  string: (t) => Or.create({ ...t, coerce: !0 }),
  number: (t) => Tn.create({ ...t, coerce: !0 }),
  boolean: (t) => ii.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => kn.create({ ...t, coerce: !0 }),
  date: (t) => Gn.create({ ...t, coerce: !0 })
}, C2 = we;
var jr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: si,
  setErrorMap: P5,
  getErrorMap: Oo,
  makeIssue: Co,
  EMPTY_PATH: N5,
  addIssueToContext: ie,
  ParseStatus: Zt,
  INVALID: we,
  DIRTY: nf,
  OK: er,
  isAborted: rc,
  isDirty: nc,
  isValid: To,
  isAsync: ko,
  get util() {
    return Qe;
  },
  get objectUtil() {
    return tc;
  },
  ZodParsedType: ne,
  getParsedType: bn,
  ZodType: Ne,
  ZodString: Or,
  ZodNumber: Tn,
  ZodBigInt: kn,
  ZodBoolean: ii,
  ZodDate: Gn,
  ZodSymbol: Ro,
  ZodUndefined: oi,
  ZodNull: ai,
  ZodAny: Os,
  ZodUnknown: Kn,
  ZodNever: cn,
  ZodVoid: Po,
  ZodArray: kr,
  ZodObject: ht,
  ZodUnion: ci,
  ZodDiscriminatedUnion: ia,
  ZodIntersection: li,
  ZodTuple: Hr,
  ZodRecord: ui,
  ZodMap: No,
  ZodSet: Qn,
  ZodFunction: Ss,
  ZodLazy: di,
  ZodLiteral: hi,
  ZodEnum: Rn,
  ZodNativeEnum: fi,
  ZodPromise: Cs,
  ZodEffects: Nr,
  ZodTransformer: Nr,
  ZodOptional: on,
  ZodNullable: Jn,
  ZodDefault: pi,
  ZodCatch: Ao,
  ZodNaN: Lo,
  BRAND: F5,
  ZodBranded: of,
  ZodPipeline: Ui,
  custom: af,
  Schema: Ne,
  ZodSchema: Ne,
  late: Z5,
  get ZodFirstPartyTypeKind() {
    return me;
  },
  coerce: O2,
  any: X5,
  array: n2,
  bigint: K5,
  boolean: uf,
  date: Y5,
  discriminatedUnion: a2,
  effect: ud,
  enum: m2,
  function: f2,
  instanceof: H5,
  intersection: c2,
  lazy: p2,
  literal: g2,
  map: d2,
  nan: B5,
  nativeEnum: y2,
  never: t2,
  null: J5,
  nullable: b2,
  number: lf,
  object: s2,
  oboolean: x2,
  onumber: I2,
  optional: _2,
  ostring: S2,
  pipeline: E2,
  preprocess: w2,
  promise: v2,
  record: u2,
  set: h2,
  strictObject: i2,
  string: cf,
  symbol: G5,
  transformer: ud,
  tuple: l2,
  undefined: Q5,
  union: o2,
  unknown: e2,
  void: r2,
  NEVER: C2,
  ZodIssueCode: Y,
  quotelessJson: R5,
  ZodError: Tr
});
const T2 = /^aleo1[a-z0-9]{58}$/i, k2 = /^AViewKey1[a-z0-9]{44}$/i, R2 = /^APrivateKey1[a-z0-9]{47}$/i, P2 = /^at1[a-z0-9]{58}$/i, N2 = /^\d+field$/, A2 = /^\d+u32$/, L2 = /^\d+u64$/;
jr.string().regex(T2);
jr.string().regex(k2);
jr.string().regex(R2);
jr.string().regex(P2);
jr.string().regex(N2);
jr.string().regex(A2);
jr.string().regex(L2);
var dd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(dd || (dd = {}));
var ic;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(ic || (ic = {}));
var oc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(oc || (oc = {}));
var ac;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(ac || (ac = {}));
var cc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(cc || (cc = {}));
var hd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(hd || (hd = {}));
jr.nativeEnum(ic);
jr.nativeEnum(oc);
jr.nativeEnum(cc);
jr.nativeEnum(ac);
var lc = { exports: {} }, xa, fd;
function j2() {
  if (fd)
    return xa;
  fd = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  xa = function(d, f) {
    f = f || {};
    var p = typeof d;
    if (p === "string" && d.length > 0)
      return o(d);
    if (p === "number" && isFinite(d))
      return f.long ? c(d) : a(d);
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
  function c(d) {
    var f = Math.abs(d);
    return f >= n ? l(d, f, n, "day") : f >= r ? l(d, f, r, "hour") : f >= e ? l(d, f, e, "minute") : f >= t ? l(d, f, t, "second") : d + " ms";
  }
  function l(d, f, p, m) {
    var v = f >= p * 1.5;
    return Math.round(d / p) + " " + m + (v ? "s" : "");
  }
  return xa;
}
function D2(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = o, r.humanize = j2(), r.destroy = l, Object.keys(t).forEach((d) => {
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
    function b(...C) {
      if (!b.enabled)
        return;
      const L = b, w = Number(/* @__PURE__ */ new Date()), x = w - (f || w);
      L.diff = x, L.prev = f, L.curr = w, f = w, C[0] = r.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O");
      let _ = 0;
      C[0] = C[0].replace(/%([a-zA-Z%])/g, (S, y) => {
        if (S === "%%")
          return "%";
        _++;
        const u = r.formatters[y];
        if (typeof u == "function") {
          const g = C[_];
          S = u.call(L, g), C.splice(_, 1), _--;
        }
        return S;
      }), r.formatArgs.call(L, C), (L.log || r.log).apply(L, C);
    }
    return b.namespace = d, b.useColors = r.useColors(), b.color = r.selectColor(d), b.extend = n, b.destroy = r.destroy, Object.defineProperty(b, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(d)), v),
      set: (C) => {
        p = C;
      }
    }), typeof r.init == "function" && r.init(b), b;
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
  function c(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var M2 = D2;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = o(), e.destroy = /* @__PURE__ */ (() => {
    let c = !1;
    return () => {
      c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function n(c) {
    if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    c.splice(1, 0, l, "color: inherit");
    let d = 0, f = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (d++, p === "%c" && (f = d));
    }), c.splice(f, 0, l);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(c) {
    try {
      c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let c;
    try {
      c = e.storage.getItem("debug");
    } catch {
    }
    return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = M2(e);
  const { formatters: a } = t.exports;
  a.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(lc, lc.exports);
var z2 = lc.exports;
const U2 = /* @__PURE__ */ Ho(z2), Vi = U2("wallet:sdk");
Vi.enabled = !0;
function df(t) {
  vr(() => (_r().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    _r().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function V2(t) {
  vr(() => (_r().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    _r().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function hf(t) {
  vr(() => (_r().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    _r().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function hr() {
  const [t, e] = Qs(void 0);
  return df((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), hf((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), V2((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), vr(() => {
    async function r() {
      const s = await (await _r()).getSession();
      e(s);
    }
    return r(), Xs.on("session_change", r), () => {
      Xs.off && Xs.off("session_change", r);
    };
  }, []), t;
}
function $i(t) {
  vr(() => (_r().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    _r().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var $2 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function q2(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (c) => c === null ? null : JSON.parse(c, e == null ? void 0 : e.reviver), a = (i = r.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => r.setItem(
      s,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (s) => r.removeItem(s)
  };
}
const gi = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return gi(n)(r);
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
        return gi(n)(r);
      }
    };
  }
}, W2 = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (C) => C,
    version: 0,
    merge: (C, L) => ({
      ...L,
      ...C
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l;
  try {
    l = i.getStorage();
  } catch {
  }
  if (!l)
    return t(
      (...C) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...C);
      },
      n,
      s
    );
  const d = gi(i.serialize), f = () => {
    const C = i.partialize({ ...n() });
    let L;
    const w = d({ state: C, version: i.version }).then(
      (x) => l.setItem(i.name, x)
    ).catch((x) => {
      L = x;
    });
    if (L)
      throw L;
    return w;
  }, p = s.setState;
  s.setState = (C, L) => {
    p(C, L), f();
  };
  const m = t(
    (...C) => {
      r(...C), f();
    },
    n,
    s
  );
  let v;
  const b = () => {
    var C;
    if (!l)
      return;
    o = !1, a.forEach((w) => w(n()));
    const L = ((C = i.onRehydrateStorage) == null ? void 0 : C.call(i, n())) || void 0;
    return gi(l.getItem.bind(l))(i.name).then((w) => {
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
      L == null || L(v, void 0), o = !0, c.forEach((w) => w(v));
    }).catch((w) => {
      L == null || L(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (C) => {
      i = {
        ...i,
        ...C
      }, C.getStorage && (l = C.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => b(),
    hasHydrated: () => o,
    onHydrate: (C) => (a.add(C), () => {
      a.delete(C);
    }),
    onFinishHydration: (C) => (c.add(C), () => {
      c.delete(C);
    })
  }, b(), v || m;
}, F2 = (t, e) => (r, n, s) => {
  let i = {
    storage: q2(() => localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, C) => ({
      ...C,
      ...b
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = i.storage;
  if (!l)
    return t(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...b);
      },
      n,
      s
    );
  const d = () => {
    const b = i.partialize({ ...n() });
    return l.setItem(i.name, {
      state: b,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (b, C) => {
    f(b, C), d();
  };
  const p = t(
    (...b) => {
      r(...b), d();
    },
    n,
    s
  );
  s.getInitialState = () => p;
  let m;
  const v = () => {
    var b, C;
    if (!l)
      return;
    o = !1, a.forEach((w) => {
      var x;
      return w((x = n()) != null ? x : p);
    });
    const L = ((C = i.onRehydrateStorage) == null ? void 0 : C.call(i, (b = n()) != null ? b : p)) || void 0;
    return gi(l.getItem.bind(l))(i.name).then((w) => {
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
      ), r(m, !0), d();
    }).then(() => {
      L == null || L(m, void 0), m = n(), o = !0, c.forEach((w) => w(m));
    }).catch((w) => {
      L == null || L(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (b) => {
      i = {
        ...i,
        ...b
      }, b.storage && (l = b.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => o,
    onHydrate: (b) => (a.add(b), () => {
      a.delete(b);
    }),
    onFinishHydration: (b) => (c.add(b), () => {
      c.delete(b);
    })
  }, i.skipHydration || v(), m || p;
}, Z2 = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? (($2 ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), W2(t, e)) : F2(t, e), H2 = Z2, ln = kp()(
  H2(
    (t, e) => ({
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
        }), Bf.clear(), localStorage.removeItem("puzzle-hasInjectedConnection"), console.log("onDisconnect called!");
      }
    }),
    {
      name: "puzzle-wallet-store"
    }
  )
);
function oa() {
  const [t, e] = Qs(void 0), [r, n] = Qs(void 0), [s, i] = Qs(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function ff(t, e) {
  const n = await (await _r()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function qi({
  queryKey: t,
  wcParams: e,
  enabled: r,
  queryOptions: n
}) {
  return Ld(
    t,
    async () => ff(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Wi({
  queryKey: t,
  wcParams: e,
  enabled: r,
  queryOptions: n,
  fetchFunction: s
}) {
  return Ld(
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
function Fi(t, e) {
  const { data: r, error: n, loading: s, setData: i, setError: o, setLoading: a } = oa();
  async function c(l) {
    try {
      a(!0), o(void 0);
      const d = await ff(l ?? t);
      return i(d), d;
    } catch (d) {
      throw o(d), a(!1), d;
    } finally {
      a(!1);
    }
  }
  return { data: r, error: n, loading: s, request: c };
}
function nl(t, e) {
  const { data: r, error: n, loading: s, setData: i, setError: o, setLoading: a } = oa();
  async function c(l) {
    try {
      a(!0), o(void 0);
      const d = await e(l ?? t);
      return i(d), d;
    } catch (d) {
      throw o(d), a(!1), d;
    } finally {
      a(!1);
    }
  }
  return { data: r, error: n, loading: s, request: c };
}
const Zi = ({
  session: t,
  configs: e
}) => {
  vr(() => {
    if (!hn() || !t)
      return;
    const r = e.map(
      ({ subscriptionName: n, condition: s, onData: i }) => window.aleo.puzzleWalletClient[n].subscribe(
        { sessionTopic: t.topic },
        {
          onData(a) {
            s(a) && i(a);
          },
          onError(a) {
            console.error(
              `${n} tRPC subscription error:`,
              a
            );
          }
        }
      )
    );
    return () => {
      r.forEach((n) => n.unsubscribe());
    };
  }, [t == null ? void 0 : t.topic, e]);
}, po = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", tS = () => {
  const t = hr();
  Qs();
  const [e, r, n] = ln((f) => [
    f.account,
    f.setAccount,
    f.onDisconnect
  ]), s = hn() ? Wi : qi, i = {
    topic: t == null ? void 0 : t.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  }, {
    refetch: o,
    data: a,
    error: c,
    isLoading: l
  } = s({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getSelectedAccount.query(i),
    wcParams: i
  });
  Zi({
    session: t,
    configs: [
      {
        subscriptionName: "onAccountSelected",
        condition: (f) => !!(f != null && f.address),
        onData: (f) => {
          var v, b;
          const p = ((v = f.chain) == null ? void 0 : v.split(":")[0]) ?? "aleo", m = ((b = f.chain) == null ? void 0 : b.split(":")[1]) ?? "1";
          r({
            network: p,
            chainId: m,
            address: f.address,
            shortenedAddress: po(f.address)
          });
        }
      }
    ]
  }), $i(({ params: f, topic: p }) => {
    if (f.event.name === "accountSelected" && t && t.topic === p) {
      const v = f.event.address ?? f.event.data.address, b = f.chainId.split(":")[0], C = f.chainId.split(":")[1];
      r({
        network: b,
        chainId: C,
        address: v,
        shortenedAddress: po(v)
      });
    }
  }), hf(({ params: f, topic: p }) => {
    const m = f.event.address ?? f.event.data.address, v = f.chainId.split(":")[0], b = f.chainId.split(":")[1];
    r({
      network: v,
      chainId: b,
      address: m,
      shortenedAddress: po(m)
    });
  }), df(({ params: f, topic: p }) => {
    n();
  }), vr(() => {
    t && !l && o();
  }, [t == null ? void 0 : t.topic]), vr(() => {
    if (a) {
      const f = a, p = f == null ? void 0 : f.account;
      p && r(p);
    }
  }, [a]);
  const d = c ? c.message : a && a.error;
  return {
    account: e,
    error: d,
    loading: l
  };
}, rS = ({ address: t, multisig: e }) => {
  const r = hr(), [n] = ln((m) => [m.account]), s = hn() ? Wi : qi, i = {
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
  }, {
    refetch: o,
    data: a,
    error: c,
    isLoading: l
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
  Zi({
    session: r,
    configs: [
      {
        subscriptionName: "onSelectedAccountSynced",
        condition: () => !e,
        onData: () => o()
      },
      {
        subscriptionName: "onSharedAccountSynced",
        condition: (m) => (console.log("onSharedAccountSynced data", m), !!e && (m == null ? void 0 : m.address) === t),
        onData: () => o()
      }
    ]
  }), $i(({ params: m, topic: v }) => {
    const b = m.event.name, C = m.event.address ?? m.event.data.address;
    (b === "selectedAccountSynced" && !e || b === "sharedAccountSynced" && e && C === t) && o();
  }), vr(() => {
    r && !l && o();
  }, [r == null ? void 0 : r.topic]);
  const d = c ? c.message : a && a.error, f = a;
  return { balances: f == null ? void 0 : f.balances, error: d, loading: l };
};
function nS() {
  const e = !!hr(), { data: r, error: n, loading: s, setData: i, setError: o, setLoading: a } = oa(), [c] = ln((d) => [d.setAccount]);
  async function l() {
    try {
      a(!0), o(void 0);
      const f = await (await _r()).connect({
        requiredNamespaces: {
          aleo: {
            methods: n5,
            chains: rl,
            events: s5
          }
        }
      });
      i(f), await k5(f.topic);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return c({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: po(p[2])
      }), Xs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (d) {
      throw o(d), localStorage.removeItem("puzzle-hasInjectedConnection"), d;
    } finally {
      a(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: l };
}
const sS = () => {
  const t = hr(), e = hn() ? nl : Fi, {
    request: r,
    data: n,
    error: s,
    loading: i
  } = e(
    {
      topic: (t == null ? void 0 : t.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    },
    (l) => window.aleo.puzzleWalletClient.createSharedState.mutate(l)
  ), o = s ? s.message : n && n.error, a = n;
  return { createSharedState: async () => await r(), data: a == null ? void 0 : a.data, loading: i, error: o };
}, iS = (t) => {
  const e = hr(), r = hn() ? nl : Fi, {
    request: n,
    data: s,
    error: i,
    loading: o
  } = r(
    {
      topic: (e == null ? void 0 : e.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    },
    (d) => window.aleo.puzzleWalletClient.decrypt.query(d)
  ), a = i ? i.message : s && s.error, c = s;
  return { decrypt: () => {
    Vi("useDecrypt", t), t && e && !o && n();
  }, plaintexts: c == null ? void 0 : c.plaintexts, loading: o, error: a };
};
function oS() {
  const t = hr(), [e] = ln((a) => [a.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = oa();
  async function o() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await _r()).disconnect({
          topic: t.topic,
          reason: Pc("USER_DISCONNECTED")
        }), Xs.emit("session_change");
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
const aS = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = hr(), [s] = ln((L) => [L.account]), i = hn() ? Wi : qi, o = {
    topic: n == null ? void 0 : n.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t ?? "",
        address: e
      }
    }
  }, a = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), {
    refetch: c,
    data: l,
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
  Zi({
    session: n,
    configs: [
      {
        subscriptionName: "onSelectedAccountSynced",
        condition: () => !!t && !r,
        onData: () => c()
      },
      {
        subscriptionName: "onSharedAccountSynced",
        condition: (L) => (console.log("onSharedAccountSynced data", L), !!t && !!r && (L == null ? void 0 : L.address) === e),
        onData: () => c()
      }
    ]
  }), $i(({ params: L, topic: w }) => {
    const x = L.event.name, _ = L.event.address ?? L.event.data.address;
    (t && x === "selectedAccountSynced" && !r || t && x === "sharedAccountSynced" && r && _ === e) && c();
  });
  const p = !!n && !!s && !!t && (r ? !!e : !0);
  vr(() => {
    p && !f && c();
  }, [p]);
  const m = () => {
    p && !f && c();
  }, v = d ? d.message : l && l.error, b = l, C = b == null ? void 0 : b.event;
  return { fetchEvent: m, event: C, error: v, loading: f };
}, cS = ({ filter: t, page: e }) => {
  const r = hr(), [n] = ln((L) => [L.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = hn() ? Wi : qi, i = {
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
  }, [o] = jd(t, 500), {
    refetch: a,
    data: c,
    error: l,
    isLoading: d
  } = s({
    queryKey: [
      "useEvents",
      n == null ? void 0 : n.address,
      o,
      e,
      r == null ? void 0 : r.topic
    ],
    enabled: !!r && !!n,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getEvents.query(i),
    wcParams: i
  });
  Zi({
    session: r,
    configs: [
      {
        subscriptionName: "onSelectedAccountSynced",
        condition: () => !0,
        onData: () => a()
      }
    ]
  }), $i(({ params: L }) => {
    L.event.name === "selectedAccountSynced" && a();
  });
  const f = !!r && !!n;
  vr(() => {
    f && !d && a();
  }, [f]);
  const p = () => {
    f && !d && a();
  }, m = l ? l.message : c && c.error, v = c, b = v == null ? void 0 : v.events, C = (v == null ? void 0 : v.pageCount) ?? 0;
  return { fetchPage: p, events: b, error: m, loading: d, page: e, pageCount: C };
}, lS = (t) => {
  const e = hr(), r = hn() ? nl : Fi, {
    request: n,
    data: s,
    error: i,
    loading: o
  } = r(
    {
      topic: (e == null ? void 0 : e.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    },
    (d) => {
      var f;
      return (f = window.aleo) == null ? void 0 : f.puzzleWalletClient.importSharedState.mutate(d);
    }
  ), a = i ? i.message : s && s.error, c = s;
  return { importSharedState: async () => {
    if (e && !o)
      return await n();
  }, data: c == null ? void 0 : c.data, loading: o, error: a };
}, uS = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, dS = ({
  address: t,
  multisig: e = !1,
  filter: r,
  page: n
}) => {
  const s = hr(), [i] = ln((x) => [x.account]), o = hn() ? Wi : qi, a = {
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
  }, [c] = jd(r, 500), {
    refetch: l,
    data: d,
    error: f,
    isLoading: p
  } = o({
    queryKey: [
      "useRecords",
      i == null ? void 0 : i.address,
      t,
      e,
      c,
      n,
      s == null ? void 0 : s.topic
    ],
    enabled: (e ? !!t : !0) && !!s && !!i,
    fetchFunction: async () => await window.aleo.puzzleWalletClient.getRecords.query(a),
    wcParams: a
  }), m = !!s && !!i && (e ? !!t : !0);
  Zi({
    session: s,
    configs: [
      {
        subscriptionName: "onSelectedAccountSynced",
        condition: () => !e,
        onData: () => l()
      },
      {
        subscriptionName: "onSharedAccountSynced",
        condition: (x) => (console.log("onSharedAccountSynced data", x), !!e && (x == null ? void 0 : x.address) === t),
        onData: () => l()
      }
    ]
  }), $i(({ params: x }) => {
    const _ = x.event.name, S = x.event.address ?? x.event.data.address;
    (_ === "selectedAccountSynced" && !e || _ === "sharedAccountSynced" && e && S === t) && l();
  });
  const v = () => {
    m && !p && (Vi("useRecords refetching...", [t, e, r, n]), l());
  }, b = f ? f.message : d && d.error, C = d, L = C == null ? void 0 : C.records, w = (C == null ? void 0 : C.pageCount) ?? 0;
  return { fetchPage: v, records: L, error: b, loading: p, page: n, pageCount: w };
}, hS = (t) => {
  const e = hr(), r = t == null ? void 0 : t.inputs.map((d) => typeof d == "string" ? d : d.plaintext), {
    request: n,
    data: s,
    error: i,
    loading: o
  } = Fi({
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
  }), a = i ? i.message : s && s.error, c = s;
  return { createEvent: () => {
    t && e && !o && (Vi("useCreateEvent requesting...", t), n());
  }, eventId: c == null ? void 0 : c.eventId, loading: o, error: a };
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
var uc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(uc || (uc = {}));
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
]), wn = (t) => {
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
]), B2 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Rr extends Error {
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
          let a = n, c = 0;
          for (; c < o.path.length; ) {
            const l = o.path[c];
            c === o.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(r(o))) : a[l] = a[l] || { _errors: [] }, a = a[l], c++;
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
Rr.create = (t) => new Rr(t);
const mi = (t, e) => {
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
let pf = mi;
function K2(t) {
  pf = t;
}
function jo() {
  return pf;
}
const Do = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    a = l(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, Y2 = [];
function oe(t, e) {
  const r = Do({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      jo(),
      mi
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
}), gf = (t) => ({ status: "dirty", value: t }), tr = (t) => ({ status: "valid", value: t }), dc = (t) => t.status === "aborted", hc = (t) => t.status === "dirty", Mo = (t) => t.status === "valid", zo = (t) => typeof Promise < "u" && t instanceof Promise;
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
const pd = (t, e) => {
  if (Mo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Rr(t.common.issues);
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
    return wn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: wn(e.data),
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
        parsedType: wn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (zo(r))
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
      parsedType: wn(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return pd(s, i);
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
      parsedType: wn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (zo(s) ? s : Promise.resolve(s));
    return pd(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: G.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
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
    return ts.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Pr.create(this, this._def);
  }
  promise() {
    return ks.create(this, this._def);
  }
  or(e) {
    return bi.create([this, e], this._def);
  }
  and(e) {
    return wi.create(this, e, this._def);
  }
  transform(e) {
    return new Ar({
      ...xe(this._def),
      schema: this,
      typeName: ye.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Oi({
      ...xe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ye.ZodDefault
    });
  }
  brand() {
    return new yf({
      typeName: ye.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new qo({
      ...xe(this._def),
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
    return Hi.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const G2 = /^c[^\s-]{8,}$/i, Q2 = /^[a-z][a-z0-9]*$/, J2 = /[0-9A-HJKMNP-TV-Z]{26}/, X2 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, eE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, tE = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), rE = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, nE = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, sE = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function iE(t, e) {
  return !!((e === "v4" || !e) && rE.test(t) || (e === "v6" || !e) && nE.test(t));
}
class Cr extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: G.invalid_string,
      ...fe.errToObj(n)
    }), this.nonempty = (e) => this.min(1, fe.errToObj(e)), this.trim = () => new Cr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Cr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Cr({
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
        eE.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "email",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        tE.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "emoji",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        X2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "uuid",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        G2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "cuid",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        Q2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "cuid2",
          code: G.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        J2.test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
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
        }), n.dirty()) : i.kind === "datetime" ? sE(i).test(e.data) || (s = this._getOrReturnCtx(e, s), oe(s, {
          code: G.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? iE(e.data, i.version) || (s = this._getOrReturnCtx(e, s), oe(s, {
          validation: "ip",
          code: G.invalid_string,
          message: i.message
        }), n.dirty()) : Je.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Cr({
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
Cr.create = (t) => {
  var e;
  return new Cr({
    checks: [],
    typeName: ye.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
function oE(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Pn extends Ae {
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
      }), s.dirty()) : i.kind === "multipleOf" ? oE(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), oe(n, {
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
Pn.create = (t) => new Pn({
  checks: [],
  typeName: ye.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Nn extends Ae {
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
    return new Nn({
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
    return new Nn({
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
Nn.create = (t) => {
  var e;
  return new Nn({
    checks: [],
    typeName: ye.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
class yi extends Ae {
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
yi.create = (t) => new yi({
  typeName: ye.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Xn extends Ae {
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
    return new Xn({
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
Xn.create = (t) => new Xn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ye.ZodDate,
  ...xe(t)
});
class Uo extends Ae {
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
Uo.create = (t) => new Uo({
  typeName: ye.ZodSymbol,
  ...xe(t)
});
class vi extends Ae {
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
vi.create = (t) => new vi({
  typeName: ye.ZodUndefined,
  ...xe(t)
});
class _i extends Ae {
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
_i.create = (t) => new _i({
  typeName: ye.ZodNull,
  ...xe(t)
});
class Ts extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return tr(e.data);
  }
}
Ts.create = (t) => new Ts({
  typeName: ye.ZodAny,
  ...xe(t)
});
class Yn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return tr(e.data);
  }
}
Yn.create = (t) => new Yn({
  typeName: ye.ZodUnknown,
  ...xe(t)
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
  ...xe(t)
});
class Vo extends Ae {
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
Vo.create = (t) => new Vo({
  typeName: ye.ZodVoid,
  ...xe(t)
});
class Pr extends Ae {
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
    return new Pr({
      ...this._def,
      minLength: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new Pr({
      ...this._def,
      maxLength: { value: e, message: fe.toString(r) }
    });
  }
  length(e, r) {
    return new Pr({
      ...this._def,
      exactLength: { value: e, message: fe.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Pr.create = (t, e) => new Pr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ye.ZodArray,
  ...xe(e)
});
function ms(t) {
  if (t instanceof ft) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = an.create(ms(n));
    }
    return new ft({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Pr ? new Pr({
      ...t._def,
      type: ms(t.element)
    }) : t instanceof an ? an.create(ms(t.unwrap())) : t instanceof ts ? ts.create(ms(t.unwrap())) : t instanceof Kr ? Kr.create(t.items.map((e) => ms(e))) : t;
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
      const l = this._getOrReturnCtx(e);
      return oe(l, {
        code: G.invalid_type,
        expected: se.object,
        received: l.parsedType
      }), _e;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof un && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const d = i[l], f = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new Br(s, f, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof un) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of a)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (l === "strict")
        a.length > 0 && (oe(s, {
          code: G.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of a) {
        const f = s.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new Br(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const f = await d.key;
        l.push({
          key: f,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => Ht.mergeObjectSync(n, l)) : Ht.mergeObjectSync(n, c);
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
          const c = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = fe.errToObj(e).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
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
    return ms(this);
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
    return mf(Je.objectKeys(this.shape));
  }
}
ft.create = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...xe(e)
});
ft.strictCreate = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strict",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...xe(e)
});
ft.lazycreate = (t, e) => new ft({
  shape: t,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: ye.ZodObject,
  ...xe(e)
});
class bi extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Rr(a.ctx.common.issues));
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
      for (const c of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: l }), l.common.issues.length && o.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new Rr(c));
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
bi.create = (t, e) => new bi({
  options: t,
  typeName: ye.ZodUnion,
  ...xe(e)
});
const go = (t) => t instanceof Si ? go(t.schema) : t instanceof Ar ? go(t.innerType()) : t instanceof Ii ? [t.value] : t instanceof An ? t.options : t instanceof xi ? Object.keys(t.enum) : t instanceof Oi ? go(t._def.innerType) : t instanceof vi ? [void 0] : t instanceof _i ? [null] : null;
class aa extends Ae {
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
      const o = go(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new aa({
      typeName: ye.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...xe(n)
    });
  }
}
function fc(t, e) {
  const r = wn(t), n = wn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === se.object && n === se.object) {
    const s = Je.objectKeys(e), i = Je.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const c = fc(t[a], e[a]);
      if (!c.valid)
        return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === se.array && n === se.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], c = fc(o, a);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === se.date && n === se.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class wi extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, o) => {
      if (dc(i) || dc(o))
        return _e;
      const a = fc(i.value, o.value);
      return a.valid ? ((hc(i) || hc(o)) && r.dirty(), { status: r.value, value: a.data }) : (oe(n, {
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
wi.create = (t, e, r) => new wi({
  left: t,
  right: e,
  typeName: ye.ZodIntersection,
  ...xe(r)
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
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new Br(n, o, n.path, a)) : null;
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
    ...xe(e)
  });
};
class Ei extends Ae {
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
    return r instanceof Ae ? new Ei({
      keyType: e,
      valueType: r,
      typeName: ye.ZodRecord,
      ...xe(n)
    }) : new Ei({
      keyType: Cr.create(),
      valueType: e,
      typeName: ye.ZodRecord,
      ...xe(r)
    });
  }
}
class $o extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== se.map)
      return oe(n, {
        code: G.invalid_type,
        expected: se.map,
        received: n.parsedType
      }), _e;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, c], l) => ({
      key: s._parse(new Br(n, a, n.path, [l, "key"])),
      value: i._parse(new Br(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return _e;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(l.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return _e;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(l.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
$o.create = (t, e, r) => new $o({
  valueType: e,
  keyType: t,
  typeName: ye.ZodMap,
  ...xe(r)
});
class es extends Ae {
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
    function o(c) {
      const l = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return _e;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) => i._parse(new Br(n, c, n.path, l)));
    return n.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(e, r) {
    return new es({
      ...this._def,
      minSize: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new es({
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
es.create = (t, e) => new es({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ye.ZodSet,
  ...xe(e)
});
class Is extends Ae {
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
    function n(a, c) {
      return Do({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          jo(),
          mi
        ].filter((l) => !!l),
        issueData: {
          code: G.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(a, c) {
      return Do({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          jo(),
          mi
        ].filter((l) => !!l),
        issueData: {
          code: G.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof ks ? tr(async (...a) => {
      const c = new Rr([]), l = await this._def.args.parseAsync(a, i).catch((p) => {
        throw c.addIssue(n(a, p)), c;
      }), d = await o(...l);
      return await this._def.returns._def.type.parseAsync(d, i).catch((p) => {
        throw c.addIssue(s(d, p)), c;
      });
    }) : tr((...a) => {
      const c = this._def.args.safeParse(a, i);
      if (!c.success)
        throw new Rr([n(a, c.error)]);
      const l = o(...c.data), d = this._def.returns.safeParse(l, i);
      if (!d.success)
        throw new Rr([s(l, d.error)]);
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
    return new Is({
      ...this._def,
      args: Kr.create(e).rest(Yn.create())
    });
  }
  returns(e) {
    return new Is({
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
    return new Is({
      args: e || Kr.create([]).rest(Yn.create()),
      returns: r || Yn.create(),
      typeName: ye.ZodFunction,
      ...xe(n)
    });
  }
}
class Si extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Si.create = (t, e) => new Si({
  getter: t,
  typeName: ye.ZodLazy,
  ...xe(e)
});
class Ii extends Ae {
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
Ii.create = (t, e) => new Ii({
  value: t,
  typeName: ye.ZodLiteral,
  ...xe(e)
});
function mf(t, e) {
  return new An({
    values: t,
    typeName: ye.ZodEnum,
    ...xe(e)
  });
}
class An extends Ae {
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
    return An.create(e);
  }
  exclude(e) {
    return An.create(this.options.filter((r) => !e.includes(r)));
  }
}
An.create = mf;
class xi extends Ae {
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
xi.create = (t, e) => new xi({
  values: t,
  typeName: ye.ZodNativeEnum,
  ...xe(e)
});
class ks extends Ae {
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
ks.create = (t, e) => new ks({
  type: t,
  typeName: ye.ZodPromise,
  ...xe(e)
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
        const c = s.refinement(a, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
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
        if (!Mo(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Mo(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Je.assertNever(s);
  }
}
Ar.create = (t, e, r) => new Ar({
  schema: t,
  typeName: ye.ZodEffects,
  effect: e,
  ...xe(r)
});
Ar.createWithPreprocess = (t, e, r) => new Ar({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ye.ZodEffects,
  ...xe(r)
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
  ...xe(e)
});
class ts extends Ae {
  _parse(e) {
    return this._getType(e) === se.null ? tr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ts.create = (t, e) => new ts({
  innerType: t,
  typeName: ye.ZodNullable,
  ...xe(e)
});
class Oi extends Ae {
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
Oi.create = (t, e) => new Oi({
  innerType: t,
  typeName: ye.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...xe(e)
});
class qo extends Ae {
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
    return zo(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Rr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Rr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
qo.create = (t, e) => new qo({
  innerType: t,
  typeName: ye.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...xe(e)
});
class Wo extends Ae {
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
Wo.create = (t) => new Wo({
  typeName: ye.ZodNaN,
  ...xe(t)
});
const aE = Symbol("zod_brand");
class yf extends Ae {
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
class Hi extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? _e : i.status === "dirty" ? (r.dirty(), gf(i.value)) : this._def.out._parseAsync({
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
    return new Hi({
      in: e,
      out: r,
      typeName: ye.ZodPipeline
    });
  }
}
const vf = (t, e = {}, r) => t ? Ts.create().superRefine((n, s) => {
  var i, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, c = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, l = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Ts.create(), cE = {
  object: ft.lazycreate
};
var ye;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ye || (ye = {}));
const lE = (t, e = {
  message: `Input not instance of ${t.name}`
}) => vf((r) => r instanceof t, e), _f = Cr.create, bf = Pn.create, uE = Wo.create, dE = Nn.create, wf = yi.create, hE = Xn.create, fE = Uo.create, pE = vi.create, gE = _i.create, mE = Ts.create, yE = Yn.create, vE = un.create, _E = Vo.create, bE = Pr.create, wE = ft.create, EE = ft.strictCreate, SE = bi.create, IE = aa.create, xE = wi.create, OE = Kr.create, CE = Ei.create, TE = $o.create, kE = es.create, RE = Is.create, PE = Si.create, NE = Ii.create, AE = An.create, LE = xi.create, jE = ks.create, gd = Ar.create, DE = an.create, ME = ts.create, zE = Ar.createWithPreprocess, UE = Hi.create, VE = () => _f().optional(), $E = () => bf().optional(), qE = () => wf().optional(), WE = {
  string: (t) => Cr.create({ ...t, coerce: !0 }),
  number: (t) => Pn.create({ ...t, coerce: !0 }),
  boolean: (t) => yi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Nn.create({ ...t, coerce: !0 }),
  date: (t) => Xn.create({ ...t, coerce: !0 })
}, FE = _e;
var Dr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: mi,
  setErrorMap: K2,
  getErrorMap: jo,
  makeIssue: Do,
  EMPTY_PATH: Y2,
  addIssueToContext: oe,
  ParseStatus: Ht,
  INVALID: _e,
  DIRTY: gf,
  OK: tr,
  isAborted: dc,
  isDirty: hc,
  isValid: Mo,
  isAsync: zo,
  get util() {
    return Je;
  },
  get objectUtil() {
    return uc;
  },
  ZodParsedType: se,
  getParsedType: wn,
  ZodType: Ae,
  ZodString: Cr,
  ZodNumber: Pn,
  ZodBigInt: Nn,
  ZodBoolean: yi,
  ZodDate: Xn,
  ZodSymbol: Uo,
  ZodUndefined: vi,
  ZodNull: _i,
  ZodAny: Ts,
  ZodUnknown: Yn,
  ZodNever: un,
  ZodVoid: Vo,
  ZodArray: Pr,
  ZodObject: ft,
  ZodUnion: bi,
  ZodDiscriminatedUnion: aa,
  ZodIntersection: wi,
  ZodTuple: Kr,
  ZodRecord: Ei,
  ZodMap: $o,
  ZodSet: es,
  ZodFunction: Is,
  ZodLazy: Si,
  ZodLiteral: Ii,
  ZodEnum: An,
  ZodNativeEnum: xi,
  ZodPromise: ks,
  ZodEffects: Ar,
  ZodTransformer: Ar,
  ZodOptional: an,
  ZodNullable: ts,
  ZodDefault: Oi,
  ZodCatch: qo,
  ZodNaN: Wo,
  BRAND: aE,
  ZodBranded: yf,
  ZodPipeline: Hi,
  custom: vf,
  Schema: Ae,
  ZodSchema: Ae,
  late: cE,
  get ZodFirstPartyTypeKind() {
    return ye;
  },
  coerce: WE,
  any: mE,
  array: bE,
  bigint: dE,
  boolean: wf,
  date: hE,
  discriminatedUnion: IE,
  effect: gd,
  enum: AE,
  function: RE,
  instanceof: lE,
  intersection: xE,
  lazy: PE,
  literal: NE,
  map: TE,
  nan: uE,
  nativeEnum: LE,
  never: vE,
  null: gE,
  nullable: ME,
  number: bf,
  object: wE,
  oboolean: qE,
  onumber: $E,
  optional: DE,
  ostring: VE,
  pipeline: UE,
  preprocess: zE,
  promise: jE,
  record: CE,
  set: kE,
  strictObject: EE,
  string: _f,
  symbol: fE,
  transformer: gd,
  tuple: OE,
  undefined: pE,
  union: SE,
  unknown: yE,
  void: _E,
  NEVER: FE,
  ZodIssueCode: G,
  quotelessJson: B2,
  ZodError: Rr
});
const sl = /^aleo1[a-z0-9]{58}$/i, ZE = /^AViewKey1[a-z0-9]{44}$/i, HE = /^APrivateKey1[a-z0-9]{47}$/i, BE = /^at1[a-z0-9]{58}$/i, KE = /^\d+field$/, YE = /^\d+u32$/, GE = /^\d+u64$/, fS = Dr.string().regex(sl), pS = Dr.string().regex(ZE), gS = Dr.string().regex(HE), mS = Dr.string().regex(BE), yS = Dr.string().regex(KE), vS = Dr.string().regex(YE), _S = Dr.string().regex(GE);
var md;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(md || (md = {}));
var pc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(pc || (pc = {}));
var gc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(gc || (gc = {}));
var mc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(mc || (mc = {}));
var yc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(yc || (yc = {}));
var yd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(yd || (yd = {}));
const bS = Dr.nativeEnum(pc), wS = Dr.nativeEnum(gc), ES = Dr.nativeEnum(yc), SS = Dr.nativeEnum(mc), IS = (t, e) => {
  const r = hr(), {
    request: n,
    data: s,
    error: i,
    loading: o
  } = Fi({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: sl.test(e ?? "") ? e : void 0
      }
    }
  }), a = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !o && (Vi("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: o, error: a };
};
var vc = { exports: {} }, Hs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function QE() {
  if (vd)
    return Hs;
  vd = 1;
  var t = Zo, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, l) {
    var d, f = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      n.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (a && a.defaultProps)
      for (d in c = a.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: e, type: a, key: p, ref: m, props: f, _owner: s.current };
  }
  return Hs.Fragment = r, Hs.jsx = o, Hs.jsxs = o, Hs;
}
var Bs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function JE() {
  return _d || (_d = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Zo, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function C(I) {
      if (I === null || typeof I != "object")
        return null;
      var V = v && I[v] || I[b];
      return typeof V == "function" ? V : null;
    }
    var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(I) {
      {
        for (var V = arguments.length, ee = new Array(V > 1 ? V - 1 : 0), ge = 1; ge < V; ge++)
          ee[ge - 1] = arguments[ge];
        x("error", I, ee);
      }
    }
    function x(I, V, ee) {
      {
        var ge = L.ReactDebugCurrentFrame, Be = ge.getStackAddendum();
        Be !== "" && (V += "%s", ee = ee.concat([Be]));
        var Ve = ee.map(function(qe) {
          return String(qe);
        });
        Ve.unshift("Warning: " + V), Function.prototype.apply.call(console[I], console, Ve);
      }
    }
    var _ = !1, S = !1, y = !1, u = !1, g = !1, N;
    N = Symbol.for("react.module.reference");
    function A(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === i || g || I === s || I === l || I === d || u || I === m || _ || S || y || typeof I == "object" && I !== null && (I.$$typeof === p || I.$$typeof === f || I.$$typeof === o || I.$$typeof === a || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === N || I.getModuleId !== void 0));
    }
    function $(I, V, ee) {
      var ge = I.displayName;
      if (ge)
        return ge;
      var Be = V.displayName || V.name || "";
      return Be !== "" ? ee + "(" + Be + ")" : ee;
    }
    function J(I) {
      return I.displayName || "Context";
    }
    function K(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case a:
            var V = I;
            return J(V) + ".Consumer";
          case o:
            var ee = I;
            return J(ee._context) + ".Provider";
          case c:
            return $(I, I.render, "ForwardRef");
          case f:
            var ge = I.displayName || null;
            return ge !== null ? ge : K(I.type) || "Memo";
          case p: {
            var Be = I, Ve = Be._payload, qe = Be._init;
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
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function ue() {
      {
        if (k === 0) {
          B = console.log, q = console.info, z = console.warn, W = console.error, U = console.group, H = console.groupCollapsed, de = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        k++;
      }
    }
    function te() {
      {
        if (k--, k === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, I, {
              value: B
            }),
            info: T({}, I, {
              value: q
            }),
            warn: T({}, I, {
              value: z
            }),
            error: T({}, I, {
              value: W
            }),
            group: T({}, I, {
              value: U
            }),
            groupCollapsed: T({}, I, {
              value: H
            }),
            groupEnd: T({}, I, {
              value: de
            })
          });
        }
        k < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = L.ReactCurrentDispatcher, M;
    function D(I, V, ee) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (Be) {
            var ge = Be.stack.trim().match(/\n( *(at )?)/);
            M = ge && ge[1] || "";
          }
        return `
` + M + I;
      }
    }
    var R = !1, h;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      h = new O();
    }
    function Q(I, V) {
      if (!I || R)
        return "";
      {
        var ee = h.get(I);
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
            } catch (wr) {
              ge = wr;
            }
            Reflect.construct(I, [], qe);
          } else {
            try {
              qe.call();
            } catch (wr) {
              ge = wr;
            }
            I.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wr) {
            ge = wr;
          }
          I();
        }
      } catch (wr) {
        if (wr && ge && typeof wr.stack == "string") {
          for (var Me = wr.stack.split(`
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
                    return I.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", I.displayName)), typeof I == "function" && h.set(I, Ct), Ct;
                  }
                while (ut >= 1 && yt >= 0);
              break;
            }
        }
      } finally {
        R = !1, ce.current = Ve, te(), Error.prepareStackTrace = Be;
      }
      var pn = I ? I.displayName || I.name : "", Bi = pn ? D(pn) : "";
      return typeof I == "function" && h.set(I, Bi), Bi;
    }
    function re(I, V, ee) {
      return Q(I, !1);
    }
    function Le(I) {
      var V = I.prototype;
      return !!(V && V.isReactComponent);
    }
    function je(I, V, ee) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return Q(I, Le(I));
      if (typeof I == "string")
        return D(I);
      switch (I) {
        case l:
          return D("Suspense");
        case d:
          return D("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case c:
            return re(I.render);
          case f:
            return je(I.type, V, ee);
          case p: {
            var ge = I, Be = ge._payload, Ve = ge._init;
            try {
              return je(Ve(Be), V, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, We = {}, ot = L.ReactDebugCurrentFrame;
    function et(I) {
      if (I) {
        var V = I._owner, ee = je(I.type, I._source, V ? V.type : null);
        ot.setExtraStackFrame(ee);
      } else
        ot.setExtraStackFrame(null);
    }
    function $e(I, V, ee, ge, Be) {
      {
        var Ve = Function.call.bind(Oe);
        for (var qe in I)
          if (Ve(I, qe)) {
            var Me = void 0;
            try {
              if (typeof I[qe] != "function") {
                var Lt = Error((ge || "React class") + ": " + ee + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Lt.name = "Invariant Violation", Lt;
              }
              Me = I[qe](V, qe, ge, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ut) {
              Me = ut;
            }
            Me && !(Me instanceof Error) && (et(Be), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ee, qe, typeof Me), et(null)), Me instanceof Error && !(Me.message in We) && (We[Me.message] = !0, et(Be), w("Failed %s type: %s", ee, Me.message), et(null));
          }
      }
    }
    var ze = Array.isArray;
    function Ce(I) {
      return ze(I);
    }
    function Re(I) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, ee = V && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return ee;
      }
    }
    function Te(I) {
      try {
        return Ee(I), !1;
      } catch {
        return !0;
      }
    }
    function Ee(I) {
      return "" + I;
    }
    function be(I) {
      if (Te(I))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(I)), Ee(I);
    }
    var pe = L.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, ve, Ue;
    Ue = {};
    function Fe(I) {
      if (Oe.call(I, "ref")) {
        var V = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Ke(I) {
      if (Oe.call(I, "key")) {
        var V = Object.getOwnPropertyDescriptor(I, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function Ye(I, V) {
      if (typeof I.ref == "string" && pe.current && V && pe.current.stateNode !== V) {
        var ee = K(pe.current.type);
        Ue[ee] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(pe.current.type), I.ref), Ue[ee] = !0);
      }
    }
    function He(I, V) {
      {
        var ee = function() {
          De || (De = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ee.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function ar(I, V) {
      {
        var ee = function() {
          ve || (ve = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ee.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var fr = function(I, V, ee, ge, Be, Ve, qe) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: I,
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
    function Mr(I, V, ee, ge, Be) {
      {
        var Ve, qe = {}, Me = null, Lt = null;
        ee !== void 0 && (be(ee), Me = "" + ee), Ke(V) && (be(V.key), Me = "" + V.key), Fe(V) && (Lt = V.ref, Ye(V, Be));
        for (Ve in V)
          Oe.call(V, Ve) && !Pe.hasOwnProperty(Ve) && (qe[Ve] = V[Ve]);
        if (I && I.defaultProps) {
          var ut = I.defaultProps;
          for (Ve in ut)
            qe[Ve] === void 0 && (qe[Ve] = ut[Ve]);
        }
        if (Me || Lt) {
          var yt = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          Me && He(qe, yt), Lt && ar(qe, yt);
        }
        return fr(I, Me, Lt, Be, ge, pe.current, qe);
      }
    }
    var At = L.ReactCurrentOwner, zr = L.ReactDebugCurrentFrame;
    function pr(I) {
      if (I) {
        var V = I._owner, ee = je(I.type, I._source, V ? V.type : null);
        zr.setExtraStackFrame(ee);
      } else
        zr.setExtraStackFrame(null);
    }
    var fn;
    fn = !1;
    function at(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function nt() {
      {
        if (At.current) {
          var I = K(At.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function pt(I) {
      {
        if (I !== void 0) {
          var V = I.fileName.replace(/^.*[\\\/]/, ""), ee = I.lineNumber;
          return `

Check your code at ` + V + ":" + ee + ".";
        }
        return "";
      }
    }
    var lt = {};
    function gt(I) {
      {
        var V = nt();
        if (!V) {
          var ee = typeof I == "string" ? I : I.displayName || I.name;
          ee && (V = `

Check the top-level render call using <` + ee + ">.");
        }
        return V;
      }
    }
    function st(I, V) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var ee = gt(V);
        if (lt[ee])
          return;
        lt[ee] = !0;
        var ge = "";
        I && I._owner && I._owner !== At.current && (ge = " It was passed a child from " + K(I._owner.type) + "."), pr(I), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ge), pr(null);
      }
    }
    function bt(I, V) {
      {
        if (typeof I != "object")
          return;
        if (Ce(I))
          for (var ee = 0; ee < I.length; ee++) {
            var ge = I[ee];
            at(ge) && st(ge, V);
          }
        else if (at(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Be = C(I);
          if (typeof Be == "function" && Be !== I.entries)
            for (var Ve = Be.call(I), qe; !(qe = Ve.next()).done; )
              at(qe.value) && st(qe.value, V);
        }
      }
    }
    function It(I) {
      {
        var V = I.type;
        if (V == null || typeof V == "string")
          return;
        var ee;
        if (typeof V == "function")
          ee = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === f))
          ee = V.propTypes;
        else
          return;
        if (ee) {
          var ge = K(V);
          $e(ee, I.props, "prop", ge, I);
        } else if (V.PropTypes !== void 0 && !fn) {
          fn = !0;
          var Be = K(V);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(I) {
      {
        for (var V = Object.keys(I.props), ee = 0; ee < V.length; ee++) {
          var ge = V[ee];
          if (ge !== "children" && ge !== "key") {
            pr(I), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), pr(null);
            break;
          }
        }
        I.ref !== null && (pr(I), w("Invalid attribute `ref` supplied to `React.Fragment`."), pr(null));
      }
    }
    function wt(I, V, ee, ge, Be, Ve) {
      {
        var qe = A(I);
        if (!qe) {
          var Me = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Lt = pt(Be);
          Lt ? Me += Lt : Me += nt();
          var ut;
          I === null ? ut = "null" : Ce(I) ? ut = "array" : I !== void 0 && I.$$typeof === e ? (ut = "<" + (K(I.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof I, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, Me);
        }
        var yt = Mr(I, V, ee, Be, Ve);
        if (yt == null)
          return yt;
        if (qe) {
          var Ct = V.children;
          if (Ct !== void 0)
            if (ge)
              if (Ce(Ct)) {
                for (var pn = 0; pn < Ct.length; pn++)
                  bt(Ct[pn], I);
                Object.freeze && Object.freeze(Ct);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(Ct, I);
        }
        return I === n ? xt(yt) : It(yt), yt;
      }
    }
    function Ot(I, V, ee) {
      return wt(I, V, ee, !0);
    }
    function Et(I, V, ee) {
      return wt(I, V, ee, !1);
    }
    var mt = Et, tt = Ot;
    Bs.Fragment = n, Bs.jsx = mt, Bs.jsxs = tt;
  }()), Bs;
}
process.env.NODE_ENV === "production" ? vc.exports = QE() : vc.exports = JE();
var bd = vc.exports;
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
const Ef = {
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
}, XE = Object.keys(Ef).join("|"), e3 = new RegExp(XE, "g");
function t3(t) {
  return t.replace(e3, (e) => Ef[e]);
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
function r3(t, e, r) {
  var n;
  if (r = r || {}, r.threshold = (n = r.threshold) != null ? n : ir.MATCHES, !r.accessors) {
    const o = wd(t, e, r);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: t,
      rank: o,
      accessorIndex: -1,
      accessorThreshold: r.threshold,
      passed: o >= r.threshold
    };
  }
  const s = o3(t, r.accessors), i = {
    rankedValue: t,
    rank: ir.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: r.threshold,
    passed: !1
  };
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    let c = wd(a.itemValue, e, r);
    const {
      minRanking: l,
      maxRanking: d,
      threshold: f = r.threshold
    } = a.attributes;
    c < l && c >= ir.MATCHES ? c = l : c > d && (c = d), c = Math.min(c, d), c >= f && c > i.rank && (i.rank = c, i.passed = !0, i.accessorIndex = o, i.accessorThreshold = f, i.rankedValue = a.itemValue);
  }
  return i;
}
function wd(t, e, r) {
  return t = Ed(t, r), e = Ed(e, r), e.length > t.length ? ir.NO_MATCH : t === e ? ir.CASE_SENSITIVE_EQUAL : (t = t.toLowerCase(), e = e.toLowerCase(), t === e ? ir.EQUAL : t.startsWith(e) ? ir.STARTS_WITH : t.includes(` ${e}`) ? ir.WORD_STARTS_WITH : t.includes(e) ? ir.CONTAINS : e.length === 1 ? ir.NO_MATCH : n3(t).includes(e) ? ir.ACRONYM : s3(t, e));
}
function n3(t) {
  let e = "";
  return t.split(" ").forEach((n) => {
    n.split("-").forEach((i) => {
      e += i.substr(0, 1);
    });
  }), e;
}
function s3(t, e) {
  let r = 0, n = 0;
  function s(c, l, d) {
    for (let f = d, p = l.length; f < p; f++)
      if (l[f] === c)
        return r += 1, f + 1;
    return -1;
  }
  function i(c) {
    const l = 1 / c, d = r / e.length;
    return ir.MATCHES + d * l;
  }
  const o = s(e[0], t, 0);
  if (o < 0)
    return ir.NO_MATCH;
  n = o;
  for (let c = 1, l = e.length; c < l; c++) {
    const d = e[c];
    if (n = s(d, t, n), !(n > -1))
      return ir.NO_MATCH;
  }
  const a = n - o;
  return i(a);
}
function Ed(t, e) {
  let {
    keepDiacritics: r
  } = e;
  return t = `${t}`, r || (t = t3(t)), t;
}
function i3(t, e) {
  let r = e;
  typeof e == "object" && (r = e.accessor);
  const n = r(t);
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function o3(t, e) {
  const r = [];
  for (let n = 0, s = e.length; n < s; n++) {
    const i = e[n], o = a3(i), a = i3(t, i);
    for (let c = 0, l = a.length; c < l; c++)
      r.push({
        itemValue: a[c],
        attributes: o
      });
  }
  return r;
}
const Sd = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function a3(t) {
  return typeof t == "function" ? Sd : {
    ...Sd,
    ...t
  };
}
const c3 = (t) => {
  try {
    const e = localStorage.getItem(t);
    return typeof e == "string" ? JSON.parse(e) : void 0;
  } catch {
    return;
  }
};
function In(t, e) {
  const [r, n] = j.useState();
  j.useEffect(() => {
    const i = c3(t);
    n(typeof i > "u" || i === null ? typeof e == "function" ? e() : e : i);
  }, [e, t]);
  const s = j.useCallback((i) => {
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
var l3 = (
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
), Sf = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new l3();
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
), u3 = /* @__PURE__ */ function() {
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
}(), d3 = (
  /** @class */
  function(t) {
    u3(e, t);
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
  }(Sf)
), h3 = function(t, e) {
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
function f3(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function p3(t, e) {
  var r = f3(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function Rs(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = h3(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function mo(t, e) {
  return t.indexOf(e) !== -1;
}
function Id(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var g3 = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return p3(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), m3 = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, If = function(t) {
  return typeof t > "u";
}, y3 = function(t) {
  return t === null;
}, Ci = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, _c = function(t) {
  return Ci(t) && Object.keys(t).length === 0;
}, Ln = function(t) {
  return Array.isArray(t);
}, v3 = function(t) {
  return typeof t == "string";
}, _3 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, b3 = function(t) {
  return typeof t == "boolean";
}, w3 = function(t) {
  return t instanceof RegExp;
}, Ti = function(t) {
  return t instanceof Map;
}, ki = function(t) {
  return t instanceof Set;
}, xf = function(t) {
  return m3(t) === "Symbol";
}, E3 = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, S3 = function(t) {
  return t instanceof Error;
}, xd = function(t) {
  return typeof t == "number" && isNaN(t);
}, I3 = function(t) {
  return b3(t) || y3(t) || If(t) || _3(t) || v3(t) || xf(t);
}, x3 = function(t) {
  return typeof t == "bigint";
}, O3 = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, C3 = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, T3 = function(t) {
  return t instanceof URL;
}, Of = function(t) {
  return t.replace(/\./g, "\\.");
}, Oa = function(t) {
  return t.map(String).map(Of).join(".");
}, ei = function(t) {
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
}, bc = function() {
  return bc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, bc.apply(this, arguments);
}, wc = function(t, e) {
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
}, Ec = function(t, e) {
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
var Cf = [
  Wr(If, "undefined", function() {
    return null;
  }, function() {
  }),
  Wr(x3, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : (console.error("Please add a BigInt polyfill."), t);
  }),
  Wr(E3, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Wr(S3, "Error", function(t, e) {
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
  Wr(w3, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Wr(
    ki,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return Ec([], wc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Wr(Ti, "map", function(t) {
    return Ec([], wc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Wr(function(t) {
    return xd(t) || O3(t);
  }, "number", function(t) {
    return xd(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Wr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Wr(T3, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function ca(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Tf = ca(function(t, e) {
  if (xf(t)) {
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
}), k3 = [
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
}, {}), kf = ca(C3, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return Ec([], wc(t));
}, function(t, e) {
  var r = k3[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function Rf(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Pf = ca(Rf, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return bc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), Nf = ca(function(t, e) {
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
}), R3 = [Pf, Tf, Nf, kf], Od = function(t, e) {
  var r = Id(R3, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Id(Cf, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Af = {};
Cf.forEach(function(t) {
  Af[t.annotation] = t;
});
var P3 = function(t, e, r) {
  if (Ln(e))
    switch (e[0]) {
      case "symbol":
        return Tf.untransform(t, e, r);
      case "class":
        return Pf.untransform(t, e, r);
      case "custom":
        return Nf.untransform(t, e, r);
      case "typed-array":
        return kf.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Af[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, _s = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Lf(t) {
  if (mo(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (mo(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (mo(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var N3 = function(t, e) {
  Lf(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (ki(t))
      t = _s(t, +n);
    else if (Ti(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", o = _s(t, s);
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
}, Sc = function(t, e, r) {
  if (Lf(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (Ln(n)) {
      var o = +i;
      n = n[o];
    } else if (Ci(n))
      n = n[i];
    else if (ki(n)) {
      var a = +i;
      n = _s(n, a);
    } else if (Ti(n)) {
      var c = s === e.length - 2;
      if (c)
        break;
      var a = +i, l = +e[++s] == 0 ? "key" : "value", d = _s(n, a);
      switch (l) {
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
  if (Ln(n) ? n[+f] = r(n[+f]) : Ci(n) && (n[f] = r(n[f])), ki(n)) {
    var p = _s(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Ti(n)) {
    var a = +e[e.length - 2], v = _s(n, a), l = +f == 0 ? "key" : "value";
    switch (l) {
      case "key": {
        var b = r(v);
        n.set(b, n.get(v)), b !== v && n.delete(v);
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
function Ic(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Ln(t)) {
      Rs(t, function(o, a) {
        return Ic(o, e, xn(xn([], nn(r)), nn(ei(a))));
      });
      return;
    }
    var n = nn(t, 2), s = n[0], i = n[1];
    i && Rs(i, function(o, a) {
      Ic(o, e, xn(xn([], nn(r)), nn(ei(a))));
    }), e(s, r);
  }
}
function A3(t, e, r) {
  return Ic(e, function(n, s) {
    t = Sc(t, s, function(i) {
      return P3(i, n, r);
    });
  }), t;
}
function L3(t, e) {
  function r(o, a) {
    var c = N3(t, ei(a));
    o.map(ei).forEach(function(l) {
      t = Sc(t, l, function() {
        return c;
      });
    });
  }
  if (Ln(e)) {
    var n = nn(e, 2), s = n[0], i = n[1];
    s.forEach(function(o) {
      t = Sc(t, ei(o), function() {
        return t;
      });
    }), i && Rs(i, r);
  } else
    Rs(e, r);
  return t;
}
var j3 = function(t, e) {
  return Ci(t) || Ln(t) || Ti(t) || ki(t) || Rf(t, e);
};
function D3(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function M3(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, l) {
        return c.length - l.length;
      }));
      var i = nn(s), o = i[0], a = i.slice(1);
      o.length === 0 ? n = a.map(Oa) : r[Oa(o)] = a.map(Oa);
    }
  }), n ? _c(r) ? [n] : [n, r] : _c(r) ? void 0 : r;
}
var jf = function(t, e, r, n, s, i, o) {
  var a;
  s === void 0 && (s = []), i === void 0 && (i = []), o === void 0 && (o = /* @__PURE__ */ new Map());
  var c = I3(t);
  if (!c) {
    D3(t, s, e);
    var l = o.get(t);
    if (l)
      return n ? {
        transformedValue: null
      } : l;
  }
  if (!j3(t, r)) {
    var d = Od(t, r), f = d ? {
      transformedValue: d.value,
      annotations: [d.type]
    } : {
      transformedValue: t
    };
    return c || o.set(t, f), f;
  }
  if (mo(i, t))
    return {
      transformedValue: null
    };
  var p = Od(t, r), m = (a = p == null ? void 0 : p.value) !== null && a !== void 0 ? a : t, v = Ln(m) ? [] : {}, b = {};
  Rs(m, function(L, w) {
    var x = jf(L, e, r, n, xn(xn([], nn(s)), [w]), xn(xn([], nn(i)), [t]), o);
    v[w] = x.transformedValue, Ln(x.annotations) ? b[w] = x.annotations : Ci(x.annotations) && Rs(x.annotations, function(_, S) {
      b[Of(w) + "." + S] = _;
    });
  });
  var C = _c(b) ? {
    transformedValue: v,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: v,
    annotations: p ? [p.type, b] : b
  };
  return c || o.set(t, C), C;
};
function Df(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Cd(t) {
  return Df(t) === "Array";
}
function z3(t) {
  if (Df(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function U3(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function xc(t, e = {}) {
  if (Cd(t))
    return t.map((s) => xc(s, e));
  if (!z3(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Cd(e.props) && !e.props.includes(i))
      return s;
    const o = t[i], a = xc(o, e);
    return U3(s, i, a, t, e.nonenumerable), s;
  }, {});
}
var Hn = function() {
  return Hn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Hn.apply(this, arguments);
}, V3 = function(t, e) {
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
}, $3 = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Mf = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new d3(), this.symbolRegistry = new Sf(function(i) {
        var o;
        return (o = i.description) !== null && o !== void 0 ? o : "";
      }), this.customTransformerRegistry = new g3(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = jf(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Hn(Hn({}, s.meta), { values: n.annotations }));
      var i = M3(r, this.dedupe);
      return i && (s.meta = Hn(Hn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = xc(r);
      return n != null && n.values && (s = A3(s, n.values, this)), n != null && n.referentialEqualities && (s = L3(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Hn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, $3([], V3(r)));
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
}, zf = /* @__PURE__ */ j.createContext(Ge);
function Uf({
  theme: t,
  ...e
}) {
  return /* @__PURE__ */ j.createElement(zf.Provider, dn({
    value: t
  }, e));
}
function q3() {
  return j.useContext(zf);
}
function W3(t) {
  const [e, r] = j.useState(() => {
    if (typeof window < "u")
      return window.matchMedia(t).matches;
  });
  return j.useEffect(() => {
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
function Vf({
  queryState: t,
  observerCount: e,
  isStale: r,
  theme: n
}) {
  return t.fetchStatus === "fetching" ? n.active : e ? t.fetchStatus === "paused" ? n.paused : r ? n.warning : n.success : n.gray;
}
function ys(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function rr(t, e, r = {}) {
  return /* @__PURE__ */ j.forwardRef(({
    style: n,
    ...s
  }, i) => {
    const o = q3(), a = Object.entries(r).reduce((c, [l, d]) => W3(l) ? {
      ...c,
      ...typeof d == "function" ? d(s, o) : d
    } : c, {});
    return /* @__PURE__ */ j.createElement(t, {
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
function F3() {
  const t = j.useRef(!1), e = j.useCallback(() => t.current, []);
  return j.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), e;
}
const $f = (t, e = !1) => {
  const {
    json: r
  } = Mf.serialize(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, ao = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, Z3 = (t, e) => t.queryHash.localeCompare(e.queryHash), qf = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, H3 = (t, e) => ao(t) === ao(e) ? qf(t, e) : ao(t) > ao(e) ? 1 : -1, Ca = {
  "Status > Last Updated": H3,
  "Query Hash": Z3,
  "Last Updated": qf
}, Oc = 70, Ri = 500, B3 = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function Fo(t) {
  return ["left", "right"].includes(t);
}
function Wf(t) {
  return B3[t];
}
function il(t, e) {
  return "" + t + (e.charAt(0).toUpperCase() + e.slice(1));
}
function K3({
  position: t = "bottom",
  height: e,
  width: r,
  devtoolsTheme: n,
  isOpen: s,
  isResizing: i,
  panelStyle: o
}) {
  const a = Wf(t), c = il("border", a), l = Fo(t);
  return {
    ...o,
    direction: "ltr",
    position: "fixed",
    [t]: 0,
    [c]: "1px solid " + n.gray,
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
      transform: l ? "translateX(0) scale(1)" : "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: "none",
      transform: l ? "translateX(15px) scale(1.02)" : "translateY(15px) scale(1.02)"
    },
    ...l ? {
      top: 0,
      height: "100vh",
      maxWidth: "90%",
      width: typeof r == "number" && r >= Oc ? r : Ri
    } : {
      left: 0,
      width: "100%",
      maxHeight: "90%",
      height: typeof e == "number" && e >= Oc ? e : Ri
    }
  };
}
function Y3(t = "bottom") {
  const e = Fo(t), r = Wf(t), n = il("margin", r);
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
const G3 = rr("div", (t, e) => ({
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
}), Q3 = rr("div", () => ({
  flex: "1 1 500px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "100%"
}), {
  "(max-width: 700px)": (t, e) => ({
    borderTop: "2px solid " + e.gray
  })
}), Fr = rr("button", (t, e) => ({
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
})), J3 = rr("span", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.9em"
}), Ks = rr("span", {
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
}), X3 = rr("input", (t, e) => ({
  backgroundColor: e.inputBackgroundColor,
  border: 0,
  borderRadius: ".2em",
  color: e.inputTextColor,
  fontSize: ".9em",
  lineHeight: "1.3",
  padding: ".3em .4em"
})), Cc = rr("select", (t, e) => ({
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
function Tc({
  text: t
}) {
  return /* @__PURE__ */ j.createElement("span", {
    style: {
      position: "absolute",
      width: "0.1px",
      height: "0.1px",
      overflow: "hidden"
    }
  }, t);
}
const Td = rr("div", {
  fontFamily: "Menlo, monospace",
  fontSize: "1em",
  lineHeight: "1.7",
  outline: "none",
  wordBreak: "break-word"
}), e6 = rr("span", {
  color: "white"
}), t6 = rr("button", {
  cursor: "pointer",
  color: "white"
}), r6 = rr("button", {
  cursor: "pointer",
  color: "inherit",
  font: "inherit",
  outline: "inherit",
  background: "transparent",
  border: "none",
  padding: 0
}), n6 = ({
  value: t
}) => {
  const [e, r] = j.useState("NoCopy");
  return /* @__PURE__ */ j.createElement("button", {
    onClick: e === "NoCopy" ? () => {
      navigator.clipboard.writeText(Mf.stringify(t)).then(() => {
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
  }, e === "NoCopy" ? /* @__PURE__ */ j.createElement(o6, null) : e === "SuccessCopy" ? /* @__PURE__ */ j.createElement(c6, null) : /* @__PURE__ */ j.createElement(a6, null));
}, s6 = rr("span", (t, e) => ({
  color: e.danger
})), Ta = rr("div", {
  marginLeft: ".1em",
  paddingLeft: "1em",
  borderLeft: "2px solid rgba(0,0,0,.15)"
}), i6 = rr("span", {
  color: "grey",
  fontSize: ".7em"
}), kd = ({
  expanded: t,
  style: e = {}
}) => /* @__PURE__ */ j.createElement("span", {
  style: {
    display: "inline-block",
    transition: "all .1s ease",
    transform: "rotate(" + (t ? 90 : 0) + "deg) " + (e.transform || ""),
    ...e
  }
}, "▶"), o6 = () => /* @__PURE__ */ j.createElement("span", {
  "aria-label": "Copy object to clipboard",
  title: "Copy object to clipboard",
  style: {
    paddingLeft: "1em"
  }
}, /* @__PURE__ */ j.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10"
}, /* @__PURE__ */ j.createElement("path", {
  fill: "currentColor",
  d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
}), /* @__PURE__ */ j.createElement("path", {
  fill: "currentColor",
  d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
}))), a6 = () => /* @__PURE__ */ j.createElement("span", {
  "aria-label": "Failed copying to clipboard",
  title: "Failed copying to clipboard",
  style: {
    paddingLeft: "1em",
    display: "flex",
    alignItems: "center"
  }
}, /* @__PURE__ */ j.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10",
  display: "block"
}, /* @__PURE__ */ j.createElement("path", {
  fill: "red",
  d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
})), /* @__PURE__ */ j.createElement("span", {
  style: {
    color: "red",
    fontSize: "12px",
    paddingLeft: "4px",
    position: "relative",
    top: "2px"
  }
}, "See console")), c6 = () => /* @__PURE__ */ j.createElement("span", {
  "aria-label": "Object copied to clipboard",
  title: "Object copied to clipboard",
  style: {
    paddingLeft: "1em",
    display: "inline-block",
    verticalAlign: "middle"
  }
}, /* @__PURE__ */ j.createElement("svg", {
  height: "16",
  viewBox: "0 0 16 16",
  width: "16",
  display: "block"
}, /* @__PURE__ */ j.createElement("path", {
  fill: "green",
  d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
})));
function l6(t, e) {
  if (e < 1)
    return [];
  let r = 0;
  const n = [];
  for (; r < t.length; )
    n.push(t.slice(r, r + e)), r = r + e;
  return n;
}
const u6 = ({
  handleEntry: t,
  label: e,
  value: r,
  subEntries: n = [],
  subEntryPages: s = [],
  type: i,
  expanded: o = !1,
  copyable: a = !1,
  toggleExpanded: c,
  pageSize: l
}) => {
  const [d, f] = j.useState([]);
  return /* @__PURE__ */ j.createElement(Td, {
    key: e
  }, s.length ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(r6, {
    onClick: () => c()
  }, /* @__PURE__ */ j.createElement(kd, {
    expanded: o
  }), " ", e, " ", /* @__PURE__ */ j.createElement(i6, null, String(i).toLowerCase() === "iterable" ? "(Iterable) " : "", n.length, " ", n.length > 1 ? "items" : "item")), a ? /* @__PURE__ */ j.createElement(n6, {
    value: r
  }) : null, o ? s.length === 1 ? /* @__PURE__ */ j.createElement(Ta, null, n.map(t)) : /* @__PURE__ */ j.createElement(Ta, null, s.map((p, m) => /* @__PURE__ */ j.createElement("div", {
    key: m
  }, /* @__PURE__ */ j.createElement(Td, null, /* @__PURE__ */ j.createElement(t6, {
    onClick: () => f((v) => v.includes(m) ? v.filter((b) => b !== m) : [...v, m])
  }, /* @__PURE__ */ j.createElement(kd, {
    expanded: o
  }), " [", m * l, " ...", " ", m * l + l - 1, "]"), d.includes(m) ? /* @__PURE__ */ j.createElement(Ta, null, p.map(t)) : null)))) : null) : /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(e6, null, e, ":"), " ", /* @__PURE__ */ j.createElement(s6, null, $f(r))));
};
function d6(t) {
  return Symbol.iterator in t;
}
function kc({
  value: t,
  defaultExpanded: e,
  renderer: r = u6,
  pageSize: n = 100,
  copyable: s = !1,
  ...i
}) {
  const [o, a] = j.useState(!!e), c = j.useCallback(() => a((m) => !m), []);
  let l = typeof t, d = [];
  const f = (m) => {
    const v = e === !0 ? {
      [m.label]: !0
    } : e == null ? void 0 : e[m.label];
    return {
      ...m,
      defaultExpanded: v
    };
  };
  Array.isArray(t) ? (l = "array", d = t.map((m, v) => f({
    label: v.toString(),
    value: m
  }))) : t !== null && typeof t == "object" && d6(t) && typeof t[Symbol.iterator] == "function" ? (l = "Iterable", d = Array.from(t, (m, v) => f({
    label: v.toString(),
    value: m
  }))) : typeof t == "object" && t !== null && (l = "object", d = Object.entries(t).map(([m, v]) => f({
    label: m,
    value: v
  })));
  const p = l6(d, n);
  return r({
    handleEntry: (m) => /* @__PURE__ */ j.createElement(kc, dn({
      key: m.label,
      value: t,
      renderer: r,
      copyable: s
    }, i, m)),
    type: l,
    subEntries: d,
    subEntryPages: p,
    value: t,
    expanded: o,
    copyable: s,
    toggleExpanded: c,
    pageSize: n,
    ...i
  });
}
function Ff(t) {
  return /* @__PURE__ */ j.createElement("svg", dn({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, t), /* @__PURE__ */ j.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ j.createElement("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /* @__PURE__ */ j.createElement("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}
var Rc = { exports: {} }, ka = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function h6() {
  if (Rd)
    return ka;
  Rd = 1;
  var t = Zo;
  function e(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, o = t.useDebugValue;
  function a(f, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), b = v[0].inst, C = v[1];
    return i(function() {
      b.value = m, b.getSnapshot = p, c(b) && C({ inst: b });
    }, [f, m, p]), s(function() {
      return c(b) && C({ inst: b }), f(function() {
        c(b) && C({ inst: b });
      });
    }, [f]), o(m), m;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var m = p();
      return !r(f, m);
    } catch {
      return !0;
    }
  }
  function l(f, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return ka.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, ka;
}
var Ra = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function f6() {
  return Pd || (Pd = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Zo, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var _ = arguments.length, S = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
          S[y - 1] = arguments[y];
        n("error", x, S);
      }
    }
    function n(x, _, S) {
      {
        var y = e.ReactDebugCurrentFrame, u = y.getStackAddendum();
        u !== "" && (_ += "%s", S = S.concat([u]));
        var g = S.map(function(N) {
          return String(N);
        });
        g.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, g);
      }
    }
    function s(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = t.useState, a = t.useEffect, c = t.useLayoutEffect, l = t.useDebugValue, d = !1, f = !1;
    function p(x, _, S) {
      d || t.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var y = _();
      if (!f) {
        var u = _();
        i(y, u) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var g = o({
        inst: {
          value: y,
          getSnapshot: _
        }
      }), N = g[0].inst, A = g[1];
      return c(function() {
        N.value = y, N.getSnapshot = _, m(N) && A({
          inst: N
        });
      }, [x, y, _]), a(function() {
        m(N) && A({
          inst: N
        });
        var $ = function() {
          m(N) && A({
            inst: N
          });
        };
        return x($);
      }, [x]), l(y), y;
    }
    function m(x) {
      var _ = x.getSnapshot, S = x.value;
      try {
        var y = _();
        return !i(S, y);
      } catch {
        return !0;
      }
    }
    function v(x, _, S) {
      return _();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C = !b, L = C ? v : p, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : L;
    Ra.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ra;
}
process.env.NODE_ENV === "production" ? Rc.exports = h6() : Rc.exports = f6();
var p6 = Rc.exports;
function g6({
  initialIsOpen: t,
  panelProps: e = {},
  closeButtonProps: r = {},
  toggleButtonProps: n = {},
  position: s = "bottom-left",
  containerElement: i = "aside",
  context: o,
  styleNonce: a,
  panelPosition: c = "bottom",
  errorTypes: l = []
}) {
  const d = j.useRef(null), f = j.useRef(null), [p, m] = In("reactQueryDevtoolsOpen", t), [v, b] = In("reactQueryDevtoolsHeight", Ri), [C, L] = In("reactQueryDevtoolsWidth", Ri), [w = "bottom", x] = In("reactQueryDevtoolsPanelPosition", c), [_, S] = j.useState(!1), [y, u] = j.useState(!1), g = F3(), N = (B, q) => {
    if (!B || q.button !== 0)
      return;
    const z = Fo(w);
    u(!0);
    const {
      height: W,
      width: U
    } = B.getBoundingClientRect(), H = q.clientX, de = q.clientY;
    let Z = 0;
    const ue = (ce) => {
      ce.preventDefault(), z ? (Z = U + (w === "right" ? H - ce.clientX : ce.clientX - H), L(Z)) : (Z = W + (w === "bottom" ? de - ce.clientY : ce.clientY - de), b(Z)), Z < Oc ? m(!1) : m(!0);
    }, te = () => {
      y && u(!1), document.removeEventListener("mousemove", ue, !1), document.removeEventListener("mouseUp", te, !1);
    };
    document.addEventListener("mousemove", ue, !1), document.addEventListener("mouseup", te, !1);
  };
  j.useEffect(() => {
    S(p ?? !1);
  }, [p, _, S]), j.useEffect(() => {
    const B = f.current;
    if (B) {
      const q = () => {
        _ && (B.style.visibility = "visible");
      }, z = () => {
        _ || (B.style.visibility = "hidden");
      };
      return B.addEventListener("transitionstart", q), B.addEventListener("transitionend", z), () => {
        B.removeEventListener("transitionstart", q), B.removeEventListener("transitionend", z);
      };
    }
  }, [_]), j.useEffect(() => {
    var B;
    if (_ && (B = d.current) != null && B.parentElement) {
      const {
        parentElement: q
      } = d.current, z = il("padding", w), W = Fo(w), U = (({
        padding: de,
        paddingTop: Z,
        paddingBottom: ue,
        paddingLeft: te,
        paddingRight: ce
      }) => ({
        padding: de,
        paddingTop: Z,
        paddingBottom: ue,
        paddingLeft: te,
        paddingRight: ce
      }))(q.style), H = () => {
        q.style.padding = "0px", q.style.paddingTop = "0px", q.style.paddingBottom = "0px", q.style.paddingLeft = "0px", q.style.paddingRight = "0px", q.style[z] = (W ? C : v) + "px";
      };
      if (H(), typeof window < "u")
        return window.addEventListener("resize", H), () => {
          window.removeEventListener("resize", H), Object.entries(U).forEach(([de, Z]) => {
            q.style[de] = Z;
          });
        };
    }
  }, [_, w, v, C]);
  const {
    style: A = {},
    ...$
  } = e, {
    style: J = {},
    onClick: K,
    ...T
  } = n, k = K3({
    position: w,
    devtoolsTheme: Ge,
    isOpen: _,
    height: v,
    width: C,
    isResizing: y,
    panelStyle: A
  });
  return g() ? /* @__PURE__ */ j.createElement(i, {
    ref: d,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /* @__PURE__ */ j.createElement(Uf, {
    theme: Ge
  }, /* @__PURE__ */ j.createElement(Zf, dn({
    ref: f,
    context: o,
    styleNonce: a,
    position: w,
    onPositionChange: x,
    showCloseButton: !0,
    closeButtonProps: r
  }, $, {
    style: k,
    isOpen: _,
    setIsOpen: m,
    onDragStart: (B) => N(f.current, B),
    errorTypes: l
  }))), _ ? null : /* @__PURE__ */ j.createElement("button", dn({
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
  }), /* @__PURE__ */ j.createElement(Ff, {
    "aria-hidden": !0
  }), /* @__PURE__ */ j.createElement(Tc, {
    text: "Open React Query Devtools"
  }))) : null;
}
const Qt = (t, e, r = !1) => p6.useSyncExternalStore(j.useCallback((n) => r ? () => {
} : t.subscribe(Pp.batchCalls(n)), [t, r]), e, e), Zf = /* @__PURE__ */ j.forwardRef(function(e, r) {
  const {
    isOpen: n = !0,
    styleNonce: s,
    setIsOpen: i,
    context: o,
    onDragStart: a,
    onPositionChange: c,
    showCloseButton: l,
    position: d,
    closeButtonProps: f = {},
    errorTypes: p = [],
    ...m
  } = e, {
    onClick: v,
    ...b
  } = f, C = Rp({
    context: o
  }), L = C.getQueryCache(), [w, x] = In("reactQueryDevtoolsSortFn", Object.keys(Ca)[0]), [_, S] = In("reactQueryDevtoolsFilter", ""), [y, u] = In("reactQueryDevtoolsBaseSort", 1), g = j.useMemo(() => Ca[w], [w]), N = Qt(L, () => L.getAll().length, !n), [A, $] = In("reactQueryDevtoolsActiveQueryHash", ""), J = j.useMemo(() => {
    const k = L.getAll();
    if (N === 0)
      return [];
    const B = _ ? k.filter((z) => r3(z.queryHash, _).passed) : [...k];
    return g ? B.sort((z, W) => g(z, W) * y) : B;
  }, [y, g, _, N, L]), [K, T] = j.useState(!1);
  return /* @__PURE__ */ j.createElement(Uf, {
    theme: Ge
  }, /* @__PURE__ */ j.createElement(G3, dn({
    ref: r,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, m, {
    style: {
      height: Ri,
      position: "relative",
      ...m.style
    }
  }), /* @__PURE__ */ j.createElement("style", {
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
  }), /* @__PURE__ */ j.createElement("div", {
    style: Y3(d),
    onMouseDown: a
  }), n && /* @__PURE__ */ j.createElement("div", {
    style: {
      flex: "1 1 500px",
      minHeight: "40%",
      maxHeight: "100%",
      overflow: "auto",
      borderRight: "1px solid " + Ge.grayAlt,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: ".5em",
      background: Ge.backgroundAlt,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /* @__PURE__ */ j.createElement("button", {
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
  }, /* @__PURE__ */ j.createElement(Ff, {
    "aria-hidden": !0
  }), /* @__PURE__ */ j.createElement(Tc, {
    text: "Close React Query Devtools"
  })), /* @__PURE__ */ j.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ j.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".5em"
    }
  }, /* @__PURE__ */ j.createElement(y6, {
    queryCache: L
  }), d && c ? /* @__PURE__ */ j.createElement(Cc, {
    "aria-label": "Panel position",
    value: d,
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (k) => c(k.target.value)
  }, /* @__PURE__ */ j.createElement("option", {
    value: "left"
  }, "Left"), /* @__PURE__ */ j.createElement("option", {
    value: "right"
  }, "Right"), /* @__PURE__ */ j.createElement("option", {
    value: "top"
  }, "Top"), /* @__PURE__ */ j.createElement("option", {
    value: "bottom"
  }, "Bottom")) : null), /* @__PURE__ */ j.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5em"
    }
  }, /* @__PURE__ */ j.createElement(X3, {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: _ ?? "",
    onChange: (k) => S(k.target.value),
    onKeyDown: (k) => {
      k.key === "Escape" && S("");
    },
    style: {
      flex: "1",
      width: "100%"
    }
  }), /* @__PURE__ */ j.createElement(Cc, {
    "aria-label": "Sort queries",
    value: w,
    onChange: (k) => x(k.target.value),
    style: {
      flex: "1",
      minWidth: 75,
      marginRight: ".5em"
    }
  }, Object.keys(Ca).map((k) => /* @__PURE__ */ j.createElement("option", {
    key: k,
    value: k
  }, "Sort by ", k))), /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => u((k) => k * -1),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, y === 1 ? "⬆ Asc" : "⬇ Desc"), /* @__PURE__ */ j.createElement(Fr, {
    title: "Clear cache",
    "aria-label": "Clear cache",
    type: "button",
    onClick: () => L.clear(),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, "Clear"), /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => {
      K ? (ml.setOnline(void 0), T(!1), window.dispatchEvent(new Event("online"))) : (ml.setOnline(!1), T(!0));
    },
    "aria-label": K ? "Restore offline mock" : "Mock offline behavior",
    title: K ? "Restore offline mock" : "Mock offline behavior",
    style: {
      padding: "0",
      height: "2em"
    }
  }, /* @__PURE__ */ j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "2em",
    height: "2em",
    viewBox: "0 0 24 24",
    stroke: K ? Ge.danger : "currentColor",
    fill: "none"
  }, K ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ j.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374"
  }), /* @__PURE__ */ j.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  })) : /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ j.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M6.343 12.343a8 8 0 0 1 11.314 0"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
  }))), /* @__PURE__ */ j.createElement(Tc, {
    text: K ? "Restore offline mock" : "Mock offline behavior"
  }))))), /* @__PURE__ */ j.createElement("div", {
    style: {
      overflowY: "auto",
      flex: "1"
    }
  }, J.map((k) => /* @__PURE__ */ j.createElement(Hf, {
    queryKey: k.queryKey,
    activeQueryHash: A,
    setActiveQueryHash: $,
    key: k.queryHash,
    queryCache: L
  })))), A && n ? /* @__PURE__ */ j.createElement(m6, {
    activeQueryHash: A,
    queryCache: L,
    queryClient: C,
    errorTypes: p
  }) : null, l ? /* @__PURE__ */ j.createElement(Fr, dn({
    type: "button",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, b, {
    style: {
      position: "absolute",
      zIndex: 99999,
      margin: ".5em",
      bottom: 0,
      left: 0,
      ...b.style
    },
    onClick: (k) => {
      i(!1), v == null || v(k);
    }
  }), "Close") : null));
}), m6 = ({
  queryCache: t,
  activeQueryHash: e,
  queryClient: r,
  errorTypes: n
}) => {
  var s, i;
  const o = Qt(t, () => t.getAll().find((v) => v.queryHash === e)), a = Qt(t, () => {
    var v;
    return (v = t.getAll().find((b) => b.queryHash === e)) == null ? void 0 : v.state;
  }), c = (s = Qt(t, () => {
    var v;
    return (v = t.getAll().find((b) => b.queryHash === e)) == null ? void 0 : v.isStale();
  })) != null ? s : !1, l = (i = Qt(t, () => {
    var v;
    return (v = t.getAll().find((b) => b.queryHash === e)) == null ? void 0 : v.getObserversCount();
  })) != null ? i : 0, d = () => {
    const v = o == null ? void 0 : o.fetch();
    v == null || v.catch(v6);
  }, f = Tp(() => {
    if (o && a != null && a.error) {
      const v = n.find((b) => {
        var C;
        return b.initializer(o).toString() === ((C = a.error) == null ? void 0 : C.toString());
      });
      return v == null ? void 0 : v.name;
    }
  }, [o, a == null ? void 0 : a.error, n]);
  if (!o || !a)
    return null;
  const p = (v) => {
    var b;
    const C = (b = v == null ? void 0 : v.initializer(o)) != null ? b : new Error("Unknown error from devtools"), L = o.options;
    o.setState({
      status: "error",
      error: C,
      fetchMeta: {
        ...o.state.fetchMeta,
        __previousQueryOptions: L
      }
    });
  }, m = () => {
    o.fetch(o.state.fetchMeta.__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  return /* @__PURE__ */ j.createElement(Q3, null, /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: ".5em",
      background: Ge.backgroundAlt,
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ j.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ j.createElement(sn, {
    style: {
      lineHeight: "1.8em"
    }
  }, /* @__PURE__ */ j.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: "auto"
    }
  }, $f(o.queryKey, !0))), /* @__PURE__ */ j.createElement("span", {
    style: {
      padding: "0.3em .6em",
      borderRadius: "0.4em",
      fontWeight: "bold",
      textShadow: "0 2px 10px black",
      background: Vf({
        queryState: a,
        isStale: c,
        observerCount: l,
        theme: Ge
      }),
      flexShrink: 0
    }
  }, ys(o))), /* @__PURE__ */ j.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Observers: ", /* @__PURE__ */ j.createElement(sn, null, l)), /* @__PURE__ */ j.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Last Updated:", " ", /* @__PURE__ */ j.createElement(sn, null, new Date(a.dataUpdatedAt).toLocaleTimeString()))), /* @__PURE__ */ j.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: "0.5em",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: d,
    disabled: a.fetchStatus === "fetching",
    style: {
      background: Ge.active
    }
  }, "Refetch"), " ", /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => r.invalidateQueries(o),
    style: {
      background: Ge.warning,
      color: Ge.inputTextColor
    }
  }, "Invalidate"), " ", /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => r.resetQueries(o),
    style: {
      background: Ge.gray
    }
  }, "Reset"), " ", /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => r.removeQueries(o),
    style: {
      background: Ge.danger
    }
  }, "Remove"), " ", /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => {
      var v;
      if (!(o.state.fetchStatus === "fetching" && typeof ((v = o.state.fetchMeta) == null ? void 0 : v.__previousQueryOptions) > "u"))
        if (o.state.data === void 0)
          m();
        else {
          const b = o.options;
          o.fetch({
            ...b,
            queryFn: () => new Promise(() => {
            }),
            cacheTime: -1
          }), o.setState({
            data: void 0,
            status: "loading",
            fetchMeta: {
              ...o.state.fetchMeta,
              __previousQueryOptions: b
            }
          });
        }
    },
    style: {
      background: Ge.paused
    }
  }, o.state.status === "loading" ? "Restore" : "Trigger", " ", "loading"), " ", n.length === 0 || o.state.status === "error" ? /* @__PURE__ */ j.createElement(Fr, {
    type: "button",
    onClick: () => {
      o.state.error ? r.resetQueries(o) : p();
    },
    style: {
      background: Ge.danger
    }
  }, o.state.status === "error" ? "Restore" : "Trigger", " error") : /* @__PURE__ */ j.createElement("label", null, "Trigger error:", /* @__PURE__ */ j.createElement(Cc, {
    value: f ?? "",
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (v) => {
      const b = n.find((C) => C.name === v.target.value);
      p(b);
    }
  }, /* @__PURE__ */ j.createElement("option", {
    key: "",
    value: ""
  }), n.map((v) => /* @__PURE__ */ j.createElement("option", {
    key: v.name,
    value: v.name
  }, v.name))))), /* @__PURE__ */ j.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ j.createElement(kc, {
    label: "Data",
    value: a.data,
    defaultExpanded: {},
    copyable: !0
  })), /* @__PURE__ */ j.createElement("div", {
    style: {
      background: Ge.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /* @__PURE__ */ j.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ j.createElement(kc, {
    label: "Query",
    value: o,
    defaultExpanded: {
      queryKey: !0
    }
  })));
}, y6 = ({
  queryCache: t
}) => {
  const e = Qt(t, () => t.getAll().filter((o) => ys(o) === "fresh").length), r = Qt(t, () => t.getAll().filter((o) => ys(o) === "fetching").length), n = Qt(t, () => t.getAll().filter((o) => ys(o) === "paused").length), s = Qt(t, () => t.getAll().filter((o) => ys(o) === "stale").length), i = Qt(t, () => t.getAll().filter((o) => ys(o) === "inactive").length);
  return /* @__PURE__ */ j.createElement(J3, null, /* @__PURE__ */ j.createElement(Ks, {
    style: {
      background: Ge.success,
      opacity: e ? 1 : 0.3
    }
  }, "fresh ", /* @__PURE__ */ j.createElement(sn, null, "(", e, ")")), " ", /* @__PURE__ */ j.createElement(Ks, {
    style: {
      background: Ge.active,
      opacity: r ? 1 : 0.3
    }
  }, "fetching ", /* @__PURE__ */ j.createElement(sn, null, "(", r, ")")), " ", /* @__PURE__ */ j.createElement(Ks, {
    style: {
      background: Ge.paused,
      opacity: n ? 1 : 0.3
    }
  }, "paused ", /* @__PURE__ */ j.createElement(sn, null, "(", n, ")")), " ", /* @__PURE__ */ j.createElement(Ks, {
    style: {
      background: Ge.warning,
      color: "black",
      textShadow: "0",
      opacity: s ? 1 : 0.3
    }
  }, "stale ", /* @__PURE__ */ j.createElement(sn, null, "(", s, ")")), " ", /* @__PURE__ */ j.createElement(Ks, {
    style: {
      background: Ge.gray,
      opacity: i ? 1 : 0.3
    }
  }, "inactive ", /* @__PURE__ */ j.createElement(sn, null, "(", i, ")")));
}, Hf = /* @__PURE__ */ j.memo(({
  queryKey: t,
  setActiveQueryHash: e,
  activeQueryHash: r,
  queryCache: n
}) => {
  var s, i, o, a;
  const c = (s = Qt(n, () => {
    var m;
    return (m = n.find(t)) == null ? void 0 : m.queryHash;
  })) != null ? s : "", l = Qt(n, () => {
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
  return l ? /* @__PURE__ */ j.createElement("div", {
    role: "button",
    "aria-label": "Open query details for " + c,
    onClick: () => e(r === c ? "" : c),
    style: {
      display: "flex",
      borderBottom: "solid 1px " + Ge.grayAlt,
      cursor: "pointer",
      background: c === r ? "rgba(255,255,255,.1)" : void 0
    }
  }, /* @__PURE__ */ j.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "2em",
      height: "2em",
      background: Vf({
        queryState: l,
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
  }, p), f ? /* @__PURE__ */ j.createElement("div", {
    style: {
      flex: "0 0 auto",
      height: "2em",
      background: Ge.gray,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      padding: "0 0.5em"
    }
  }, "disabled") : null, /* @__PURE__ */ j.createElement(sn, {
    style: {
      padding: ".5em"
    }
  }, "" + c)) : null;
});
Hf.displayName = "QueryRow";
function v6() {
}
const _6 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : g6;
process.env.NODE_ENV;
const Bf = new Np(), xS = ({
  dAppName: t,
  dAppDescription: e,
  dAppUrl: r,
  dAppIconURL: n,
  children: s,
  debugQuery: i = !1
}) => (vr(() => {
  C5({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: ln.getState().onDisconnect
  }), Dd.defaultMaxListeners = 100;
}, []), hr(), /* @__PURE__ */ bd.jsxs(Ap, { client: Bf, children: [
  i && /* @__PURE__ */ bd.jsx(_6, { initialIsOpen: !1 }),
  s
] })), Kf = [
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
], la = ["aleo:1"], Yf = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], Gf = "f0aaeffe71b636da453fce042d79d723";
function b6() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const w6 = {
  chains: la,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [Gf]
}, E6 = {
  chains: la,
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
}, Nd = b6() ? w6 : E6, OS = {
  requiredNamespaces: {
    aleo: {
      methods: Kf,
      chains: la,
      events: Yf
    }
  }
}, S6 = "@puzzlehq/sdk-core", I6 = "Puzzle SDK", x6 = "0.2.32-beta.1", O6 = "Your portal to privacy", C6 = "./dist/puzzle.cjs.js", T6 = "./dist/puzzle.es.js", k6 = "./dist/puzzle.umd.js", R6 = "./dist/types/src/index.d.ts", P6 = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, N6 = "module", A6 = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, L6 = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, j6 = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
}, D6 = {
  buffer: "^6.0.3"
}, M6 = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], z6 = "Puzzle", U6 = "ISC", V6 = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, $6 = "https://github.com/puzzlehq/puzzle-sdk#readme", Ad = {
  name: S6,
  displayName: I6,
  version: x6,
  description: O6,
  main: C6,
  module: T6,
  browser: k6,
  types: R6,
  private: !1,
  exports: P6,
  type: N6,
  scripts: A6,
  repository: L6,
  dependencies: j6,
  peerDependencies: D6,
  keywords: M6,
  author: z6,
  license: U6,
  bugs: V6,
  homepage: $6
}, Qf = new Dd();
let On;
async function CS(t) {
  let e = !1;
  const r = Ad.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${Ad.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", Nd), On = new Lp({
    projectId: t.projectId ?? Gf,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: window ? window.location.hostname : t.dAppUrl ?? "NO URL",
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Nd }
  }), e) {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    try {
      q6(On, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  On.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), On.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function q6(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: Pc("USER_DISCONNECTED")
  }));
}
async function br() {
  return new Promise((t) => {
    if (On)
      t(On);
    else {
      const e = setInterval(() => {
        On && (clearInterval(e), t(On));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const W6 = async (t) => {
  var r;
  if (!!!((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasInjectedConnection", "true"), !0) : (localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1);
  } catch (n) {
    return console.warn(n), localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  }
}, Mn = () => {
  var r;
  return !((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient) ? !1 : localStorage.getItem(
    "puzzle-hasInjectedConnection"
  ) === "true";
}, TS = async () => {
  const t = await br(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  };
  if (Mn())
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
}, kS = async ({
  address: t
}) => {
  const e = await br(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
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
  };
  if (Mn())
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
}, RS = async () => {
  const t = await br();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Kf,
          chains: la,
          events: Yf
        }
      }
    });
    return Qf.emit("session_change"), r && await W6(r.topic), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r);
  }
}, PS = async (t) => {
  const e = await br(), r = await (e == null ? void 0 : e.getSession());
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
    return console.error("createEvent error", s), { error: s.message };
  }
}, NS = async () => {
  const t = await br(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  };
  if (Mn())
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
}, AS = async (t) => {
  const e = await br(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  };
  if (Mn())
    try {
      return await window.aleo.puzzleWalletClient.decrypt.query(n);
    } catch (s) {
      const i = s.message;
      return console.error("decrypt error", s), { error: i };
    }
  try {
    return await e.request(n);
  } catch (s) {
    return console.error("decrypt error", s), { error: s.message };
  }
}, LS = async () => {
  const t = await br(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: Pc("USER_DISCONNECTED"),
        topic: e.topic
      }), localStorage.removeItem("puzzle-hasInjectedConnection"), Qf.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    return console.error("error disconnecting", r), { error: r.message };
  }
}, jS = async ({
  id: t,
  address: e
}) => {
  const r = await br(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = {
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
  };
  if (Mn())
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
}, DS = async (t) => {
  const e = await br(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = {
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: 0
      }
    }
  };
  if (Mn())
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
}, MS = async (t) => {
  const e = await br(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  };
  if (Mn())
    try {
      return await window.aleo.puzzleWalletClient.importSharedState.mutation(n);
    } catch (s) {
      return console.error("importSharedState error", s), { error: s.message };
    }
  try {
    return await e.request(n);
  } catch (s) {
    return console.error("importSharedState error", s), { error: s.message };
  }
}, zS = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await br(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = {
    topic: s.topic,
    chainId: "aleo:1",
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
  if (Mn())
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
}, US = async ({
  message: t,
  address: e
}) => {
  const r = await br(), n = await (r == null ? void 0 : r.getSession());
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
          address: sl.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    return console.error("signature error", s), { error: s.message };
  }
}, VS = 20, F6 = jp("wallet:sdk");
F6.enabled = !0;
export {
  SS as $,
  yd as A,
  yc as B,
  sl as C,
  KE as D,
  gc as E,
  HE as F,
  BE as G,
  YE as H,
  GE as I,
  eS as J,
  ZE as K,
  fS as L,
  wS as M,
  Md as N,
  bS as O,
  xS as P,
  yS as Q,
  ES as R,
  gS as S,
  mS as T,
  vS as U,
  mc as V,
  xr as W,
  _S as X,
  X6 as Y,
  Ol as Z,
  pS as _,
  rS as a,
  VS as a0,
  TS as a1,
  kS as a2,
  RS as a3,
  PS as a4,
  NS as a5,
  AS as a6,
  LS as a7,
  jS as a8,
  DS as a9,
  MS as aa,
  zS as ab,
  US as ac,
  Kf as ad,
  la as ae,
  Yf as af,
  Gf as ag,
  w6 as ah,
  E6 as ai,
  Nd as aj,
  OS as ak,
  F6 as al,
  W6 as am,
  Mn as an,
  Qf as ao,
  CS as ap,
  br as aq,
  Wt as b,
  nS as c,
  sS as d,
  iS as e,
  xs as f,
  oS as g,
  aS as h,
  cS as i,
  lS as j,
  uS as k,
  dS as l,
  hS as m,
  ha as n,
  IS as o,
  df as p,
  $i as q,
  V2 as r,
  po as s,
  Wp as t,
  tS as u,
  hf as v,
  hr as w,
  Bf as x,
  ln as y,
  pc as z
};
