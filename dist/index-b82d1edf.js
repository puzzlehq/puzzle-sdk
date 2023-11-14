import { useEffect as br, useState as yr } from "react";
const wu = Symbol(), wn = Object.getPrototypeOf, ds = /* @__PURE__ */ new WeakMap(), mu = (t) => t && (ds.has(t) ? ds.get(t) : wn(t) === Object.prototype || wn(t) === Array.prototype), vu = (t) => mu(t) && t[wu] || null, mn = (t, e = !0) => {
  ds.set(t, e);
}, Yi = (t) => typeof t == "object" && t !== null, Xt = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakSet(), _u = (t = Object.is, e = (l, p) => new Proxy(l, p), r = (l) => Yi(l) && !mi.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), i = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, s = /* @__PURE__ */ new WeakMap(), n = (l, p, m = i) => {
  const E = s.get(l);
  if ((E == null ? void 0 : E[0]) === p)
    return E[1];
  const _ = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return mn(_, !0), s.set(l, [p, _]), Reflect.ownKeys(l).forEach((x) => {
    if (Object.getOwnPropertyDescriptor(_, x))
      return;
    const R = Reflect.get(l, x), L = {
      value: R,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (mi.has(R))
      mn(R, !1);
    else if (R instanceof Promise)
      delete L.value, L.get = () => m(R);
    else if (Xt.has(R)) {
      const [q, v] = Xt.get(
        R
      );
      L.value = n(
        q,
        v(),
        m
      );
    }
    Object.defineProperty(_, x, L);
  }), Object.preventExtensions(_);
}, u = /* @__PURE__ */ new WeakMap(), c = [1, 1], h = (l) => {
  if (!Yi(l))
    throw new Error("object required");
  const p = u.get(l);
  if (p)
    return p;
  let m = c[0];
  const E = /* @__PURE__ */ new Set(), _ = (P, T = ++c[0]) => {
    m !== T && (m = T, E.forEach((U) => U(P, T)));
  };
  let x = c[1];
  const R = (P = ++c[1]) => (x !== P && !E.size && (x = P, q.forEach(([T]) => {
    const U = T[1](P);
    U > m && (m = U);
  })), m), L = (P) => (T, U) => {
    const H = [...T];
    H[1] = [P, ...H[1]], _(H, U);
  }, q = /* @__PURE__ */ new Map(), v = (P, T) => {
    if (E.size) {
      const U = T[3](L(P));
      q.set(P, [T, U]);
    } else
      q.set(P, [T]);
  }, O = (P) => {
    var T;
    const U = q.get(P);
    U && (q.delete(P), (T = U[1]) == null || T.call(U));
  }, y = (P) => (E.add(P), E.size === 1 && q.forEach(([U, H], G) => {
    const D = U[3](L(G));
    q.set(G, [U, D]);
  }), () => {
    E.delete(P), E.size === 0 && q.forEach(([U, H], G) => {
      H && (H(), q.set(G, [U]));
    });
  }), w = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), o = e(w, {
    deleteProperty(P, T) {
      const U = Reflect.get(P, T);
      O(T);
      const H = Reflect.deleteProperty(P, T);
      return H && _(["delete", [T], U]), H;
    },
    set(P, T, U, H) {
      const G = Reflect.has(P, T), D = Reflect.get(P, T, H);
      if (G && (t(D, U) || u.has(U) && t(D, u.get(U))))
        return !0;
      O(T), Yi(U) && (U = vu(U) || U);
      let N = U;
      if (U instanceof Promise)
        U.then((W) => {
          U.status = "fulfilled", U.value = W, _(["resolve", [T], W]);
        }).catch((W) => {
          U.status = "rejected", U.reason = W, _(["reject", [T], W]);
        });
      else {
        !Xt.has(U) && r(U) && (N = h(U));
        const W = !mi.has(N) && Xt.get(N);
        W && v(T, W);
      }
      return Reflect.set(P, T, N, H), _(["set", [T], U, D]), !0;
    }
  });
  u.set(l, o);
  const f = [
    w,
    R,
    n,
    y
  ];
  return Xt.set(o, f), Reflect.ownKeys(l).forEach((P) => {
    const T = Object.getOwnPropertyDescriptor(
      l,
      P
    );
    "value" in T && (o[P] = l[P], delete T.value, delete T.writable), Object.defineProperty(w, P, T);
  }), o;
}) => [
  // public functions
  h,
  // shared state
  Xt,
  mi,
  // internal things
  t,
  e,
  r,
  i,
  s,
  n,
  u,
  c
], [Eu] = _u();
function tr(t = {}) {
  return Eu(t);
}
function wr(t, e, r) {
  const i = Xt.get(t);
  let s;
  const n = [], u = i[3];
  let c = !1;
  const l = u((p) => {
    if (n.push(p), r) {
      e(n.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, c && e(n.splice(0));
    }));
  });
  return c = !0, () => {
    c = !1, l();
  };
}
function Du(t, e) {
  const r = Xt.get(t), [i, s, n] = r;
  return n(i, s(), e);
}
const Ze = tr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), na = { state: Ze, subscribe(t) {
  return wr(Ze, () => t(Ze));
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
  const s = encodeURIComponent(e);
  return `${i}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!ht.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let i = t;
  i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const s = encodeURIComponent(e);
  return `${i}wc?uri=${s}`;
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
  const e = (t = na.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Su = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), ot = tr({ enabled: Su, userSessionId: "", events: [], connectedWalletId: void 0 }), Iu = { state: ot, subscribe(t) {
  return wr(ot.events, () => t(Du(ot.events[ot.events.length - 1])));
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
} }, Ft = tr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Rt = { state: Ft, subscribe(t) {
  return wr(Ft, () => t(Ft));
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
} }, vi = tr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Nr = { state: vi, subscribe(t) {
  return wr(vi, () => t(vi));
}, setConfig(t) {
  var e, r;
  Iu.initialize(), Rt.setChains(t.chains), Rt.setIsAuth(!!t.enableAuthMode), Rt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Rt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), ht.setModalVersionInStorage(), Object.assign(vi, t);
} };
var xu = Object.defineProperty, vn = Object.getOwnPropertySymbols, Ou = Object.prototype.hasOwnProperty, Au = Object.prototype.propertyIsEnumerable, _n = (t, e, r) => e in t ? xu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cu = (t, e) => {
  for (var r in e || (e = {}))
    Ou.call(e, r) && _n(t, r, e[r]);
  if (vn)
    for (var r of vn(e))
      Au.call(e, r) && _n(t, r, e[r]);
  return t;
};
const ps = "https://explorer-api.walletconnect.com", gs = "wcm", ys = "js-2.6.2";
async function _i(t, e) {
  const r = Cu({ sdkType: gs, sdkVersion: ys }, e), i = new URL(t, ps);
  return i.searchParams.append("projectId", Nr.state.projectId), Object.entries(r).forEach(([s, n]) => {
    n && i.searchParams.append(s, String(n));
  }), (await fetch(i)).json();
}
const ar = { async getDesktopListings(t) {
  return _i("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return _i("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return _i("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return _i("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${ps}/w3m/v1/getWalletImage/${t}?projectId=${Nr.state.projectId}&sdkType=${gs}&sdkVersion=${ys}`;
}, getAssetImageUrl(t) {
  return `${ps}/w3m/v1/getAssetImage/${t}?projectId=${Nr.state.projectId}&sdkType=${gs}&sdkVersion=${ys}`;
} };
var Nu = Object.defineProperty, En = Object.getOwnPropertySymbols, Tu = Object.prototype.hasOwnProperty, Pu = Object.prototype.propertyIsEnumerable, Dn = (t, e, r) => e in t ? Nu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ru = (t, e) => {
  for (var r in e || (e = {}))
    Tu.call(e, r) && Dn(t, r, e[r]);
  if (En)
    for (var r of En(e))
      Pu.call(e, r) && Dn(t, r, e[r]);
  return t;
};
const Sn = ht.isMobile(), Mt = tr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), f1 = { state: Mt, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Nr.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Mt.recomendedWallets;
  if (ht.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: i } = await ar.getAllListings(r), s = Object.values(i);
    s.sort((n, u) => {
      const c = t.indexOf(n.id), h = t.indexOf(u.id);
      return c - h;
    }), Mt.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: i } = Rt.state, s = r == null ? void 0 : r.join(","), n = ht.isArray(e), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: ht.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: n ? e.join(",") : void 0 }, { listings: c } = Sn ? await ar.getMobileListings(u) : await ar.getDesktopListings(u);
    Mt.recomendedWallets = Object.values(c);
  }
  return Mt.recomendedWallets;
}, async getWallets(t) {
  const e = Ru({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Nr.state, { recomendedWallets: s } = Mt;
  if (i === "ALL")
    return Mt.wallets;
  s.length ? e.excludedIds = s.map((m) => m.id).join(",") : ht.isArray(r) && (e.excludedIds = r.join(",")), ht.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Rt.state.isAuth && (e.sdks = "auth_v1");
  const { page: n, search: u } = t, { listings: c, total: h } = Sn ? await ar.getMobileListings(e) : await ar.getDesktopListings(e), l = Object.values(c), p = u ? "search" : "wallets";
  return Mt[p] = { listings: [...Mt[p].listings, ...l], total: h, page: n ?? 1 }, { listings: l, total: h };
}, getWalletImageUrl(t) {
  return ar.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return ar.getAssetImageUrl(t);
}, resetSearch() {
  Mt.search = { listings: [], total: 0, page: 1 };
} }, Dr = tr({ open: !1 }), Ji = { state: Dr, subscribe(t) {
  return wr(Dr, () => t(Dr));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: i } = Rt.state;
    if (ht.removeWalletConnectDeepLink(), Rt.setWalletConnectUri(t == null ? void 0 : t.uri), Rt.setChains(t == null ? void 0 : t.chains), na.reset("ConnectWallet"), r && i)
      Dr.open = !0, e();
    else {
      const s = setInterval(() => {
        const n = Rt.state;
        n.isUiLoaded && n.isDataLoaded && (clearInterval(s), Dr.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Dr.open = !1;
} };
var Lu = Object.defineProperty, In = Object.getOwnPropertySymbols, Uu = Object.prototype.hasOwnProperty, Fu = Object.prototype.propertyIsEnumerable, xn = (t, e, r) => e in t ? Lu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mu = (t, e) => {
  for (var r in e || (e = {}))
    Uu.call(e, r) && xn(t, r, e[r]);
  if (In)
    for (var r of In(e))
      Fu.call(e, r) && xn(t, r, e[r]);
  return t;
};
function $u() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const $r = tr({ themeMode: $u() ? "dark" : "light" }), On = { state: $r, subscribe(t) {
  return wr($r, () => t($r));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && ($r.themeMode = e), r && ($r.themeVariables = Mu({}, r));
} }, cr = tr({ open: !1, message: "", variant: "success" }), d1 = { state: cr, subscribe(t) {
  return wr(cr, () => t(cr));
}, openToast(t, e) {
  cr.open = !0, cr.message = t, cr.variant = e;
}, closeToast() {
  cr.open = !1;
} };
let ju = class {
  constructor(e) {
    this.openModal = Ji.open, this.closeModal = Ji.close, this.subscribeModal = Ji.subscribe, this.setTheme = On.setThemeConfig, On.setThemeConfig(e), Nr.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-de03919a.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Rt.setIsUiLoaded(!0);
    }
  }
};
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Us(t) {
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
    var s = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(r, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[i];
      }
    });
  }), r;
}
var Fs = { exports: {} }, Ar = typeof Reflect == "object" ? Reflect : null, An = Ar && typeof Ar.apply == "function" ? Ar.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, Si;
Ar && typeof Ar.ownKeys == "function" ? Si = Ar.ownKeys : Object.getOwnPropertySymbols ? Si = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Si = function(e) {
  return Object.getOwnPropertyNames(e);
};
function qu(t) {
  console && console.warn && console.warn(t);
}
var aa = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
Fs.exports = Ie;
Fs.exports.once = Hu;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var Cn = 10;
function Fi(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Cn;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || aa(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Cn = t;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || aa(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function ca(t) {
  return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return ca(this);
};
Ie.prototype.emit = function(e) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var s = e === "error", n = this._events;
  if (n !== void 0)
    s = s && n.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var c = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw c.context = u, c;
  }
  var h = n[e];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    An(h, this, r);
  else
    for (var l = h.length, p = da(h, l), i = 0; i < l; ++i)
      An(p[i], this, r);
  return !0;
};
function ua(t, e, r, i) {
  var s, n, u;
  if (Fi(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), n = t._events), u = n[e]), u === void 0)
    u = n[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = n[e] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), s = ca(t), s > 0 && u.length > s && !u.warned) {
    u.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = u.length, qu(c);
  }
  return t;
}
Ie.prototype.addListener = function(e, r) {
  return ua(this, e, r, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
  return ua(this, e, r, !0);
};
function Bu() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ha(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Bu.bind(i);
  return s.listener = r, i.wrapFn = s, s;
}
Ie.prototype.once = function(e, r) {
  return Fi(r), this.on(e, ha(this, e, r)), this;
};
Ie.prototype.prependOnceListener = function(e, r) {
  return Fi(r), this.prependListener(e, ha(this, e, r)), this;
};
Ie.prototype.removeListener = function(e, r) {
  var i, s, n, u, c;
  if (Fi(r), s = this._events, s === void 0)
    return this;
  if (i = s[e], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || r));
  else if (typeof i != "function") {
    for (n = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === r || i[u].listener === r) {
        c = i[u].listener, n = u;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? i.shift() : zu(i, n), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, c || r);
  }
  return this;
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(e) {
  var r, i, s;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(i), u;
    for (s = 0; s < n.length; ++s)
      u = n[s], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function la(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var s = i[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Ku(s) : da(s, s.length);
}
Ie.prototype.listeners = function(e) {
  return la(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return la(this, e, !1);
};
Ie.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : fa.call(t, e);
};
Ie.prototype.listenerCount = fa;
function fa(t) {
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
  return this._eventsCount > 0 ? Si(this._events) : [];
};
function da(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function zu(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Ku(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Hu(t, e) {
  return new Promise(function(r, i) {
    function s(u) {
      t.removeListener(e, n), i(u);
    }
    function n() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    pa(t, e, n, { once: !0 }), e !== "error" && Vu(t, s, { once: !0 });
  });
}
function Vu(t, e, r) {
  typeof t.on == "function" && pa(t, "error", e, r);
}
function pa(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(n) {
      i.once && t.removeEventListener(e, s), r(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Lt = Fs.exports;
const ga = /* @__PURE__ */ oa(Lt);
var Mi = {};
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
var bs = function(t, e) {
  return bs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var s in i)
      i.hasOwnProperty(s) && (r[s] = i[s]);
  }, bs(t, e);
};
function Wu(t, e) {
  bs(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ws = function() {
  return ws = Object.assign || function(e) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(this, arguments);
};
function ku(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (r[i[s]] = t[i[s]]);
  return r;
}
function Gu(t, e, r, i) {
  var s = arguments.length, n = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, r, i);
  else
    for (var c = t.length - 1; c >= 0; c--)
      (u = t[c]) && (n = (s < 3 ? u(n) : s > 3 ? u(e, r, n) : u(e, r)) || n);
  return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function Yu(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function Ju(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Qu(t, e, r, i) {
  function s(n) {
    return n instanceof r ? n : new r(function(u) {
      u(n);
    });
  }
  return new (r || (r = Promise))(function(n, u) {
    function c(p) {
      try {
        l(i.next(p));
      } catch (m) {
        u(m);
      }
    }
    function h(p) {
      try {
        l(i.throw(p));
      } catch (m) {
        u(m);
      }
    }
    function l(p) {
      p.done ? n(p.value) : s(p.value).then(c, h);
    }
    l((i = i.apply(t, e || [])).next());
  });
}
function Xu(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, s, n, u;
  return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function c(l) {
    return function(p) {
      return h([l, p]);
    };
  }
  function h(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (i = 1, s && (n = l[0] & 2 ? s.return : l[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, l[1])).done)
          return n;
        switch (s = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
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
            if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < n[1]) {
              r.label = n[1], n = l;
              break;
            }
            if (n && r.label < n[2]) {
              r.label = n[2], r.ops.push(l);
              break;
            }
            n[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (p) {
        l = [6, p], s = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Zu(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function eh(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function ms(t) {
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
function ya(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var i = r.call(t), s, n = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; )
      n.push(s.value);
  } catch (c) {
    u = { error: c };
  } finally {
    try {
      s && !s.done && (r = i.return) && r.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return n;
}
function th() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(ya(arguments[e]));
  return t;
}
function rh() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), s = 0, e = 0; e < r; e++)
    for (var n = arguments[e], u = 0, c = n.length; u < c; u++, s++)
      i[s] = n[u];
  return i;
}
function ei(t) {
  return this instanceof ei ? (this.v = t, this) : new ei(t);
}
function ih(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), s, n = [];
  return s = {}, u("next"), u("throw"), u("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function u(E) {
    i[E] && (s[E] = function(_) {
      return new Promise(function(x, R) {
        n.push([E, _, x, R]) > 1 || c(E, _);
      });
    });
  }
  function c(E, _) {
    try {
      h(i[E](_));
    } catch (x) {
      m(n[0][3], x);
    }
  }
  function h(E) {
    E.value instanceof ei ? Promise.resolve(E.value.v).then(l, p) : m(n[0][2], E);
  }
  function l(E) {
    c("next", E);
  }
  function p(E) {
    c("throw", E);
  }
  function m(E, _) {
    E(_), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}
function sh(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, n) {
    e[s] = t[s] ? function(u) {
      return (r = !r) ? { value: ei(t[s](u)), done: s === "return" } : n ? n(u) : u;
    } : n;
  }
}
function nh(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ms == "function" ? ms(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(n) {
    r[n] = t[n] && function(u) {
      return new Promise(function(c, h) {
        u = t[n](u), s(c, h, u.done, u.value);
      });
    };
  }
  function s(n, u, c, h) {
    Promise.resolve(h).then(function(l) {
      n({ value: l, done: c });
    }, u);
  }
}
function oh(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function ah(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function ch(t) {
  return t && t.__esModule ? t : { default: t };
}
function uh(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function hh(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return ws;
  },
  __asyncDelegator: sh,
  __asyncGenerator: ih,
  __asyncValues: nh,
  __await: ei,
  __awaiter: Qu,
  __classPrivateFieldGet: uh,
  __classPrivateFieldSet: hh,
  __createBinding: Zu,
  __decorate: Gu,
  __exportStar: eh,
  __extends: Wu,
  __generator: Xu,
  __importDefault: ch,
  __importStar: ah,
  __makeTemplateObject: oh,
  __metadata: Ju,
  __param: Yu,
  __read: ya,
  __rest: ku,
  __spread: th,
  __spreadArrays: rh,
  __values: ms
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ Us(lh);
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
function fh(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
si.safeJsonParse = fh;
function dh(t) {
  return typeof t == "string" ? t : JSON.stringify(t, (e, r) => typeof r > "u" ? null : r);
}
si.safeJsonStringify = dh;
var jr = { exports: {} }, Nn;
function ph() {
  return Nn || (Nn = 1, function() {
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
var Qi = {}, qr = {}, Tn;
function gh() {
  if (Tn)
    return qr;
  Tn = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.IKeyValueStorage = void 0;
  class t {
  }
  return qr.IKeyValueStorage = t, qr;
}
var Br = {}, Pn;
function yh() {
  if (Pn)
    return Br;
  Pn = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.parseEntry = void 0;
  const t = si;
  function e(r) {
    var i;
    return [r[0], t.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return Br.parseEntry = e, Br;
}
var Rn;
function bh() {
  return Rn || (Rn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(gh(), t), e.__exportStar(yh(), t);
  }(Qi)), Qi;
}
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.KeyValueStorage = void 0;
const Ir = At, Ln = si, wh = Ir.__importDefault(ph()), mh = bh();
class ba {
  constructor() {
    this.localStorage = wh.default;
  }
  getKeys() {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(mh.parseEntry);
    });
  }
  getItem(e) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(e);
      if (r !== null)
        return Ln.safeJsonParse(r);
    });
  }
  setItem(e, r) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, Ln.safeJsonStringify(r));
    });
  }
  removeItem(e) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
Mi.KeyValueStorage = ba;
var vh = Mi.default = ba, Tr = {}, zr = {}, X = {}, Xi = {}, Kr = {}, Un;
function _h() {
  if (Un)
    return Kr;
  Un = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Kr.delay = t, Kr;
}
var ur = {}, Zi = {}, hr = {}, Fn;
function Eh() {
  return Fn || (Fn = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.ONE_THOUSAND = hr.ONE_HUNDRED = void 0, hr.ONE_HUNDRED = 100, hr.ONE_THOUSAND = 1e3), hr;
}
var es = {}, Mn;
function Dh() {
  return Mn || (Mn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(es)), es;
}
var $n;
function wa() {
  return $n || ($n = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(Eh(), t), e.__exportStar(Dh(), t);
  }(Zi)), Zi;
}
var jn;
function Sh() {
  if (jn)
    return ur;
  jn = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.fromMiliseconds = ur.toMiliseconds = void 0;
  const t = wa();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  ur.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return ur.fromMiliseconds = r, ur;
}
var qn;
function Ih() {
  return qn || (qn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(_h(), t), e.__exportStar(Sh(), t);
  }(Xi)), Xi;
}
var Sr = {}, Bn;
function xh() {
  if (Bn)
    return Sr;
  Bn = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.Watch = void 0;
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
      const s = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: s });
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
var ts = {}, Hr = {}, zn;
function Oh() {
  if (zn)
    return Hr;
  zn = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.IWatch = void 0;
  class t {
  }
  return Hr.IWatch = t, Hr;
}
var Kn;
function Ah() {
  return Kn || (Kn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(Oh(), t);
  }(ts)), ts;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(Ih(), t), e.__exportStar(xh(), t), e.__exportStar(Ah(), t), e.__exportStar(wa(), t);
})(X);
var rs = {}, Vr = {};
let mr = class {
};
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: mr
}, Symbol.toStringTag, { value: "Module" })), Nh = /* @__PURE__ */ Us(Ch);
var Hn;
function Th() {
  if (Hn)
    return Vr;
  Hn = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.IHeartBeat = void 0;
  const t = Nh;
  class e extends t.IEvents {
    constructor(i) {
      super();
    }
  }
  return Vr.IHeartBeat = e, Vr;
}
var Vn;
function ma() {
  return Vn || (Vn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(Th(), t);
  }(rs)), rs;
}
var is = {}, lr = {}, Wn;
function Ph() {
  if (Wn)
    return lr;
  Wn = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.HEARTBEAT_EVENTS = lr.HEARTBEAT_INTERVAL = void 0;
  const t = X;
  return lr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, lr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, lr;
}
var kn;
function va() {
  return kn || (kn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(Ph(), t);
  }(is)), is;
}
var Gn;
function Rh() {
  if (Gn)
    return zr;
  Gn = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.HeartBeat = void 0;
  const t = At, e = Lt, r = X, i = ma(), s = va();
  class n extends i.IHeartBeat {
    constructor(c) {
      super(c), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (c == null ? void 0 : c.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(c) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const h = new n(c);
        return yield h.init(), h;
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
    on(c, h) {
      this.events.on(c, h);
    }
    once(c, h) {
      this.events.once(c, h);
    }
    off(c, h) {
      this.events.off(c, h);
    }
    removeListener(c, h) {
      this.events.removeListener(c, h);
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
  return zr.HeartBeat = n, zr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(Rh(), t), e.__exportStar(ma(), t), e.__exportStar(va(), t);
})(Tr);
var me = {}, ss, Yn;
function Lh() {
  if (Yn)
    return ss;
  Yn = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ss = e;
  function e(r, i, s) {
    var n = s && s.stringify || t, u = 1;
    if (typeof r == "object" && r !== null) {
      var c = i.length + u;
      if (c === 1)
        return r;
      var h = new Array(c);
      h[0] = n(r);
      for (var l = 1; l < c; l++)
        h[l] = n(i[l]);
      return h.join(" ");
    }
    if (typeof r != "string")
      return r;
    var p = i.length;
    if (p === 0)
      return r;
    for (var m = "", E = 1 - u, _ = -1, x = r && r.length || 0, R = 0; R < x; ) {
      if (r.charCodeAt(R) === 37 && R + 1 < x) {
        switch (_ = _ > -1 ? _ : 0, r.charCodeAt(R + 1)) {
          case 100:
          case 102:
            if (E >= p || i[E] == null)
              break;
            _ < R && (m += r.slice(_, R)), m += Number(i[E]), _ = R + 2, R++;
            break;
          case 105:
            if (E >= p || i[E] == null)
              break;
            _ < R && (m += r.slice(_, R)), m += Math.floor(Number(i[E])), _ = R + 2, R++;
            break;
          case 79:
          case 111:
          case 106:
            if (E >= p || i[E] === void 0)
              break;
            _ < R && (m += r.slice(_, R));
            var L = typeof i[E];
            if (L === "string") {
              m += "'" + i[E] + "'", _ = R + 2, R++;
              break;
            }
            if (L === "function") {
              m += i[E].name || "<anonymous>", _ = R + 2, R++;
              break;
            }
            m += n(i[E]), _ = R + 2, R++;
            break;
          case 115:
            if (E >= p)
              break;
            _ < R && (m += r.slice(_, R)), m += String(i[E]), _ = R + 2, R++;
            break;
          case 37:
            _ < R && (m += r.slice(_, R)), m += "%", _ = R + 2, R++, E--;
            break;
        }
        ++E;
      }
      ++R;
    }
    return _ === -1 ? r : (_ < x && (m += r.slice(_)), m);
  }
  return ss;
}
var ns, Jn;
function Uh() {
  if (Jn)
    return ns;
  Jn = 1;
  const t = Lh();
  ns = s;
  const e = w().console || {}, r = {
    mapHttpRequest: x,
    mapHttpResponse: x,
    wrapRequestSerializer: R,
    wrapResponseSerializer: R,
    wrapErrorSerializer: R,
    req: x,
    res: x,
    err: E
  };
  function i(d, o) {
    return Array.isArray(d) ? d.filter(function(P) {
      return P !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function s(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const f = d.browser.write || e;
    d.browser.write && (d.browser.asObject = !0);
    const P = d.serializers || {}, T = i(d.browser.serialize, P);
    let U = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const H = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof f == "function" && (f.error = f.fatal = f.warn = f.info = f.debug = f.trace = f), d.enabled === !1 && (d.level = "silent");
    const G = d.level || "info", D = Object.create(f);
    D.log || (D.log = L), Object.defineProperty(D, "levelVal", {
      get: W
    }), Object.defineProperty(D, "level", {
      get: B,
      set: M
    });
    const N = {
      transmit: o,
      serialize: T,
      asObject: d.browser.asObject,
      levels: H,
      timestamp: _(d)
    };
    D.levels = s.levels, D.level = G, D.setMaxListeners = D.getMaxListeners = D.emit = D.addListener = D.on = D.prependListener = D.once = D.prependOnceListener = D.removeListener = D.removeAllListeners = D.listeners = D.listenerCount = D.eventNames = D.write = D.flush = L, D.serializers = P, D._serialize = T, D._stdErrSerialize = U, D.child = j, o && (D._logEvent = m());
    function W() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function B() {
      return this._level;
    }
    function M(F) {
      if (F !== "silent" && !this.levels.values[F])
        throw Error("unknown level " + F);
      this._level = F, n(N, D, "error", "log"), n(N, D, "fatal", "error"), n(N, D, "warn", "error"), n(N, D, "info", "log"), n(N, D, "debug", "log"), n(N, D, "trace", "log");
    }
    function j(F, z) {
      if (!F)
        throw new Error("missing bindings for child Pino");
      z = z || {}, T && F.serializers && (z.serializers = F.serializers);
      const te = z.serializers;
      if (T && te) {
        var K = Object.assign({}, P, te), Z = d.browser.serialize === !0 ? Object.keys(K) : T;
        delete F.serializers, h([F], Z, K, this._stdErrSerialize);
      }
      function J(ee) {
        this._childLevel = (ee._childLevel | 0) + 1, this.error = l(ee, F, "error"), this.fatal = l(ee, F, "fatal"), this.warn = l(ee, F, "warn"), this.info = l(ee, F, "info"), this.debug = l(ee, F, "debug"), this.trace = l(ee, F, "trace"), K && (this.serializers = K, this._serialize = Z), o && (this._logEvent = m(
          [].concat(ee._logEvent.bindings, F)
        ));
      }
      return J.prototype = this, new J(this);
    }
    return D;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: q, epochTime: v, unixTime: O, isoTime: y });
  function n(d, o, f, P) {
    const T = Object.getPrototypeOf(o);
    o[f] = o.levelVal > o.levels.values[f] ? L : T[f] ? T[f] : e[f] || e[P] || L, u(d, o, f);
  }
  function u(d, o, f) {
    !d.transmit && o[f] === L || (o[f] = function(P) {
      return function() {
        const U = d.timestamp(), H = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var D = 0; D < H.length; D++)
          H[D] = arguments[D];
        if (d.serialize && !d.asObject && h(H, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? P.call(G, c(this, f, H, U)) : P.apply(G, H), d.transmit) {
          const N = d.transmit.level || o.level, W = s.levels.values[N], B = s.levels.values[f];
          if (B < W)
            return;
          p(this, {
            ts: U,
            methodLevel: f,
            methodValue: B,
            transmitLevel: N,
            transmitValue: s.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, H);
        }
      };
    }(o[f]));
  }
  function c(d, o, f, P) {
    d._serialize && h(f, d._serialize, d.serializers, d._stdErrSerialize);
    const T = f.slice();
    let U = T[0];
    const H = {};
    P && (H.time = P), H.level = s.levels.values[o];
    let G = (d._childLevel | 0) + 1;
    if (G < 1 && (G = 1), U !== null && typeof U == "object") {
      for (; G-- && typeof T[0] == "object"; )
        Object.assign(H, T.shift());
      U = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof U == "string" && (U = t(T.shift(), T));
    return U !== void 0 && (H.msg = U), H;
  }
  function h(d, o, f, P) {
    for (const T in d)
      if (P && d[T] instanceof Error)
        d[T] = s.stdSerializers.err(d[T]);
      else if (typeof d[T] == "object" && !Array.isArray(d[T]))
        for (const U in d[T])
          o && o.indexOf(U) > -1 && U in f && (d[T][U] = f[U](d[T][U]));
  }
  function l(d, o, f) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = o;
      for (var T = 1; T < P.length; T++)
        P[T] = arguments[T - 1];
      return d[f].apply(this, P);
    };
  }
  function p(d, o, f) {
    const P = o.send, T = o.ts, U = o.methodLevel, H = o.methodValue, G = o.val, D = d._logEvent.bindings;
    h(
      f,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = T, d._logEvent.messages = f.filter(function(N) {
      return D.indexOf(N) === -1;
    }), d._logEvent.level.label = U, d._logEvent.level.value = H, P(U, d._logEvent, G), d._logEvent = m(D);
  }
  function m(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function E(d) {
    const o = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const f in d)
      o[f] === void 0 && (o[f] = d[f]);
    return o;
  }
  function _(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? q : v;
  }
  function x() {
    return {};
  }
  function R(d) {
    return d;
  }
  function L() {
  }
  function q() {
    return !1;
  }
  function v() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function y() {
    return new Date(Date.now()).toISOString();
  }
  function w() {
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
  return ns;
}
var fr = {}, Qn;
function _a() {
  return Qn || (Qn = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.PINO_CUSTOM_CONTEXT_KEY = fr.PINO_LOGGER_DEFAULTS = void 0, fr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, fr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), fr;
}
var ft = {}, Xn;
function Fh() {
  if (Xn)
    return ft;
  Xn = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.generateChildLogger = ft.formatChildLoggerContext = ft.getLoggerContext = ft.setBrowserLoggerContext = ft.getBrowserLoggerContext = ft.getDefaultLoggerOptions = void 0;
  const t = _a();
  function e(c) {
    return Object.assign(Object.assign({}, c), { level: (c == null ? void 0 : c.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  ft.getDefaultLoggerOptions = e;
  function r(c, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return c[h] || "";
  }
  ft.getBrowserLoggerContext = r;
  function i(c, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return c[l] = h, c;
  }
  ft.setBrowserLoggerContext = i;
  function s(c, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof c.bindings > "u" ? l = r(c, h) : l = c.bindings().context || "", l;
  }
  ft.getLoggerContext = s;
  function n(c, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const p = s(c, l);
    return p.trim() ? `${p}/${h}` : h;
  }
  ft.formatChildLoggerContext = n;
  function u(c, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const p = n(c, h, l), m = c.child({ context: p });
    return i(m, p, l);
  }
  return ft.generateChildLogger = u, ft;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = At, r = e.__importDefault(Uh());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(_a(), t), e.__exportStar(Fh(), t);
})(me);
let Mh = class extends mr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, $h = class extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, jh = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, qh = class extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Bh = class extends mr {
  constructor(e) {
    super();
  }
}, zh = class {
  constructor(e, r, i, s) {
    this.core = e, this.logger = r, this.name = i;
  }
};
class Kh extends mr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let Hh = class extends mr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Vh = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Wh = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, kh = class {
  constructor(e) {
    this.client = e;
  }
};
const Gh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Yh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Ea(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Yh(t);
  } catch {
    return t;
  }
}
function Ms(t) {
  return typeof t == "string" ? t : Gh(t) || "";
}
var $s = {}, Pr = {}, $i = {}, ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.BrowserRandomSource = void 0;
const Zn = 65536;
class Jh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let i = 0; i < r.length; i += Zn)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, Zn)));
    return r;
  }
}
ji.BrowserRandomSource = Jh;
function Qh(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qi = {}, St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
function Xh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
St.wipe = Xh;
const Zh = {}, el = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zh
}, Symbol.toStringTag, { value: "Module" })), tl = /* @__PURE__ */ Us(el);
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.NodeRandomSource = void 0;
const rl = St;
class il {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Qh < "u") {
      const e = tl;
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
    for (let s = 0; s < i.length; s++)
      i[s] = r[s];
    return (0, rl.wipe)(r), i;
  }
}
qi.NodeRandomSource = il;
Object.defineProperty($i, "__esModule", { value: !0 });
$i.SystemRandomSource = void 0;
const sl = ji, nl = qi;
class ol {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new sl.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new nl.NodeRandomSource(), this._source.isAvailable) {
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
$i.SystemRandomSource = ol;
var se = {}, Da = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(c, h) {
    var l = c >>> 16 & 65535, p = c & 65535, m = h >>> 16 & 65535, E = h & 65535;
    return p * E + (l * E + p * m << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(c, h) {
    return c + h | 0;
  }
  t.add = r;
  function i(c, h) {
    return c - h | 0;
  }
  t.sub = i;
  function s(c, h) {
    return c << h | c >>> 32 - h;
  }
  t.rotl = s;
  function n(c, h) {
    return c << 32 - h | c >>> h;
  }
  t.rotr = n;
  function u(c) {
    return typeof c == "number" && isFinite(c) && Math.floor(c) === c;
  }
  t.isInteger = Number.isInteger || u, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(c) {
    return t.isInteger(c) && c >= -t.MAX_SAFE_INTEGER && c <= t.MAX_SAFE_INTEGER;
  };
})(Da);
Object.defineProperty(se, "__esModule", { value: !0 });
var Sa = Da;
function al(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
se.readInt16BE = al;
function cl(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
se.readUint16BE = cl;
function ul(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
se.readInt16LE = ul;
function hl(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
se.readUint16LE = hl;
function Ia(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
se.writeUint16BE = Ia;
se.writeInt16BE = Ia;
function xa(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
se.writeUint16LE = xa;
se.writeInt16LE = xa;
function vs(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
se.readInt32BE = vs;
function _s(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
se.readUint32BE = _s;
function Es(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
se.readInt32LE = Es;
function Ds(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
se.readUint32LE = Ds;
function Ai(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
se.writeUint32BE = Ai;
se.writeInt32BE = Ai;
function Ci(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
se.writeUint32LE = Ci;
se.writeInt32LE = Ci;
function ll(t, e) {
  e === void 0 && (e = 0);
  var r = vs(t, e), i = vs(t, e + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
se.readInt64BE = ll;
function fl(t, e) {
  e === void 0 && (e = 0);
  var r = _s(t, e), i = _s(t, e + 4);
  return r * 4294967296 + i;
}
se.readUint64BE = fl;
function dl(t, e) {
  e === void 0 && (e = 0);
  var r = Es(t, e), i = Es(t, e + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
se.readInt64LE = dl;
function pl(t, e) {
  e === void 0 && (e = 0);
  var r = Ds(t, e), i = Ds(t, e + 4);
  return i * 4294967296 + r;
}
se.readUint64LE = pl;
function Oa(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ai(t / 4294967296 >>> 0, e, r), Ai(t >>> 0, e, r + 4), e;
}
se.writeUint64BE = Oa;
se.writeInt64BE = Oa;
function Aa(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ci(t >>> 0, e, r), Ci(t / 4294967296 >>> 0, e, r + 4), e;
}
se.writeUint64LE = Aa;
se.writeInt64LE = Aa;
function gl(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = t / 8 + r - 1; n >= r; n--)
    i += e[n] * s, s *= 256;
  return i;
}
se.readUintBE = gl;
function yl(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = r; n < r + t / 8; n++)
    i += e[n] * s, s *= 256;
  return i;
}
se.readUintLE = yl;
function bl(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Sa.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, n = t / 8 + i - 1; n >= i; n--)
    r[n] = e / s & 255, s *= 256;
  return r;
}
se.writeUintBE = bl;
function wl(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Sa.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, n = i; n < i + t / 8; n++)
    r[n] = e / s & 255, s *= 256;
  return r;
}
se.writeUintLE = wl;
function ml(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
se.readFloat32BE = ml;
function vl(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
se.readFloat32LE = vl;
function _l(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
se.readFloat64BE = _l;
function El(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
se.readFloat64LE = El;
function Dl(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t), e;
}
se.writeFloat32BE = Dl;
function Sl(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t, !0), e;
}
se.writeFloat32LE = Sl;
function Il(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t), e;
}
se.writeFloat64BE = Il;
function xl(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t, !0), e;
}
se.writeFloat64LE = xl;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = $i, r = se, i = St;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(l, p = t.defaultRandomSource) {
    return p.randomBytes(l);
  }
  t.randomBytes = s;
  function n(l = t.defaultRandomSource) {
    const p = s(4, l), m = (0, r.readUint32LE)(p);
    return (0, i.wipe)(p), m;
  }
  t.randomUint32 = n;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function c(l, p = u, m = t.defaultRandomSource) {
    if (p.length < 2)
      throw new Error("randomString charset is too short");
    if (p.length > 256)
      throw new Error("randomString charset is too long");
    let E = "";
    const _ = p.length, x = 256 - 256 % _;
    for (; l > 0; ) {
      const R = s(Math.ceil(l * 256 / x), m);
      for (let L = 0; L < R.length && l > 0; L++) {
        const q = R[L];
        q < x && (E += p.charAt(q % _), l--);
      }
      (0, i.wipe)(R);
    }
    return E;
  }
  t.randomString = c;
  function h(l, p = u, m = t.defaultRandomSource) {
    const E = Math.ceil(l / (Math.log(p.length) / Math.LN2));
    return c(E, p, m);
  }
  t.randomStringForEntropy = h;
})(Pr);
var Ca = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = se, r = St;
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
      }, c.prototype.update = function(h, l) {
        if (l === void 0 && (l = h.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = h[p++], l--;
          this._bufferLength === this.blockSize && (n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (p = n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, h, p, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = h[p++], l--;
        return this;
      }, c.prototype.finish = function(h) {
        if (!this._finished) {
          var l = this._bytesHashed, p = this._bufferLength, m = l / 536870912 | 0, E = l << 3, _ = l % 128 < 112 ? 128 : 256;
          this._buffer[p] = 128;
          for (var x = p + 1; x < _ - 8; x++)
            this._buffer[x] = 0;
          e.writeUint32BE(m, this._buffer, _ - 8), e.writeUint32BE(E, this._buffer, _ - 4), n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, _), this._finished = !0;
        }
        for (var x = 0; x < this.digestLength / 8; x++)
          e.writeUint32BE(this._stateHi[x], h, x * 8), e.writeUint32BE(this._stateLo[x], h, x * 8 + 4);
        return this;
      }, c.prototype.digest = function() {
        var h = new Uint8Array(this.digestLength);
        return this.finish(h), h;
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
      }, c.prototype.restoreState = function(h) {
        return this._stateHi.set(h.stateHi), this._stateLo.set(h.stateLo), this._bufferLength = h.bufferLength, h.buffer && this._buffer.set(h.buffer), this._bytesHashed = h.bytesHashed, this._finished = !1, this;
      }, c.prototype.cleanSavedState = function(h) {
        r.wipe(h.stateHi), r.wipe(h.stateLo), h.buffer && r.wipe(h.buffer), h.bufferLength = 0, h.bytesHashed = 0;
      }, c;
    }()
  );
  t.SHA512 = i;
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
  function n(c, h, l, p, m, E, _) {
    for (var x = l[0], R = l[1], L = l[2], q = l[3], v = l[4], O = l[5], y = l[6], w = l[7], d = p[0], o = p[1], f = p[2], P = p[3], T = p[4], U = p[5], H = p[6], G = p[7], D, N, W, B, M, j, F, z; _ >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var K = 8 * te + E;
        c[te] = e.readUint32BE(m, K), h[te] = e.readUint32BE(m, K + 4);
      }
      for (var te = 0; te < 80; te++) {
        var Z = x, J = R, ee = L, C = q, A = v, S = O, a = y, b = w, V = d, Y = o, le = f, be = P, de = T, _e = U, Fe = H, Te = G;
        if (D = w, N = G, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = (v >>> 14 | T << 32 - 14) ^ (v >>> 18 | T << 32 - 18) ^ (T >>> 41 - 32 | v << 32 - (41 - 32)), N = (T >>> 14 | v << 32 - 14) ^ (T >>> 18 | v << 32 - 18) ^ (v >>> 41 - 32 | T << 32 - (41 - 32)), M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, D = v & O ^ ~v & y, N = T & U ^ ~T & H, M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, D = s[te * 2], N = s[te * 2 + 1], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, D = c[te % 16], N = h[te % 16], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, W = F & 65535 | z << 16, B = M & 65535 | j << 16, D = W, N = B, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = (x >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | x << 32 - (34 - 32)) ^ (d >>> 39 - 32 | x << 32 - (39 - 32)), N = (d >>> 28 | x << 32 - 28) ^ (x >>> 34 - 32 | d << 32 - (34 - 32)) ^ (x >>> 39 - 32 | d << 32 - (39 - 32)), M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, D = x & R ^ x & L ^ R & L, N = d & o ^ d & f ^ o & f, M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, b = F & 65535 | z << 16, Te = M & 65535 | j << 16, D = C, N = be, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = W, N = B, M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, C = F & 65535 | z << 16, be = M & 65535 | j << 16, R = Z, L = J, q = ee, v = C, O = A, y = S, w = a, x = b, o = V, f = Y, P = le, T = be, U = de, H = _e, G = Fe, d = Te, te % 16 === 15)
          for (var K = 0; K < 16; K++)
            D = c[K], N = h[K], M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = c[(K + 9) % 16], N = h[(K + 9) % 16], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, W = c[(K + 1) % 16], B = h[(K + 1) % 16], D = (W >>> 1 | B << 32 - 1) ^ (W >>> 8 | B << 32 - 8) ^ W >>> 7, N = (B >>> 1 | W << 32 - 1) ^ (B >>> 8 | W << 32 - 8) ^ (B >>> 7 | W << 32 - 7), M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, W = c[(K + 14) % 16], B = h[(K + 14) % 16], D = (W >>> 19 | B << 32 - 19) ^ (B >>> 61 - 32 | W << 32 - (61 - 32)) ^ W >>> 6, N = (B >>> 19 | W << 32 - 19) ^ (W >>> 61 - 32 | B << 32 - (61 - 32)) ^ (B >>> 6 | W << 32 - 6), M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, c[K] = F & 65535 | z << 16, h[K] = M & 65535 | j << 16;
      }
      D = x, N = d, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[0], N = p[0], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[0] = x = F & 65535 | z << 16, p[0] = d = M & 65535 | j << 16, D = R, N = o, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[1], N = p[1], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[1] = R = F & 65535 | z << 16, p[1] = o = M & 65535 | j << 16, D = L, N = f, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[2], N = p[2], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[2] = L = F & 65535 | z << 16, p[2] = f = M & 65535 | j << 16, D = q, N = P, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[3], N = p[3], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[3] = q = F & 65535 | z << 16, p[3] = P = M & 65535 | j << 16, D = v, N = T, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[4], N = p[4], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[4] = v = F & 65535 | z << 16, p[4] = T = M & 65535 | j << 16, D = O, N = U, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[5], N = p[5], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[5] = O = F & 65535 | z << 16, p[5] = U = M & 65535 | j << 16, D = y, N = H, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[6], N = p[6], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[6] = y = F & 65535 | z << 16, p[6] = H = M & 65535 | j << 16, D = w, N = G, M = N & 65535, j = N >>> 16, F = D & 65535, z = D >>> 16, D = l[7], N = p[7], M += N & 65535, j += N >>> 16, F += D & 65535, z += D >>> 16, j += M >>> 16, F += j >>> 16, z += F >>> 16, l[7] = w = F & 65535 | z << 16, p[7] = G = M & 65535 | j << 16, E += 128, _ -= 128;
    }
    return E;
  }
  function u(c) {
    var h = new i();
    h.update(c);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = u;
})(Ca);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Pr, r = Ca, i = St;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(C) {
    const A = new Float64Array(16);
    if (C)
      for (let S = 0; S < C.length; S++)
        A[S] = C[S];
    return A;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const u = s(), c = s([1]), h = s([
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
  ]), p = s([
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
  ]), m = s([
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
  ]), E = s([
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
  function _(C, A) {
    for (let S = 0; S < 16; S++)
      C[S] = A[S] | 0;
  }
  function x(C) {
    let A = 1;
    for (let S = 0; S < 16; S++) {
      let a = C[S] + A + 65535;
      A = Math.floor(a / 65536), C[S] = a - A * 65536;
    }
    C[0] += A - 1 + 37 * (A - 1);
  }
  function R(C, A, S) {
    const a = ~(S - 1);
    for (let b = 0; b < 16; b++) {
      const V = a & (C[b] ^ A[b]);
      C[b] ^= V, A[b] ^= V;
    }
  }
  function L(C, A) {
    const S = s(), a = s();
    for (let b = 0; b < 16; b++)
      a[b] = A[b];
    x(a), x(a), x(a);
    for (let b = 0; b < 2; b++) {
      S[0] = a[0] - 65517;
      for (let Y = 1; Y < 15; Y++)
        S[Y] = a[Y] - 65535 - (S[Y - 1] >> 16 & 1), S[Y - 1] &= 65535;
      S[15] = a[15] - 32767 - (S[14] >> 16 & 1);
      const V = S[15] >> 16 & 1;
      S[14] &= 65535, R(a, S, 1 - V);
    }
    for (let b = 0; b < 16; b++)
      C[2 * b] = a[b] & 255, C[2 * b + 1] = a[b] >> 8;
  }
  function q(C, A) {
    let S = 0;
    for (let a = 0; a < 32; a++)
      S |= C[a] ^ A[a];
    return (1 & S - 1 >>> 8) - 1;
  }
  function v(C, A) {
    const S = new Uint8Array(32), a = new Uint8Array(32);
    return L(S, C), L(a, A), q(S, a);
  }
  function O(C) {
    const A = new Uint8Array(32);
    return L(A, C), A[0] & 1;
  }
  function y(C, A) {
    for (let S = 0; S < 16; S++)
      C[S] = A[2 * S] + (A[2 * S + 1] << 8);
    C[15] &= 32767;
  }
  function w(C, A, S) {
    for (let a = 0; a < 16; a++)
      C[a] = A[a] + S[a];
  }
  function d(C, A, S) {
    for (let a = 0; a < 16; a++)
      C[a] = A[a] - S[a];
  }
  function o(C, A, S) {
    let a, b, V = 0, Y = 0, le = 0, be = 0, de = 0, _e = 0, Fe = 0, Te = 0, ye = 0, pe = 0, fe = 0, ue = 0, ce = 0, ae = 0, oe = 0, re = 0, he = 0, ge = 0, ie = 0, we = 0, ve = 0, De = 0, Se = 0, Ee = 0, Ct = 0, Ut = 0, Gt = 0, vt = 0, ir = 0, Ur = 0, fi = 0, Me = S[0], Pe = S[1], $e = S[2], je = S[3], qe = S[4], Re = S[5], Ve = S[6], We = S[7], ke = S[8], Ge = S[9], Ye = S[10], Ke = S[11], Be = S[12], Ae = S[13], Je = S[14], Qe = S[15];
    a = A[0], V += a * Me, Y += a * Pe, le += a * $e, be += a * je, de += a * qe, _e += a * Re, Fe += a * Ve, Te += a * We, ye += a * ke, pe += a * Ge, fe += a * Ye, ue += a * Ke, ce += a * Be, ae += a * Ae, oe += a * Je, re += a * Qe, a = A[1], Y += a * Me, le += a * Pe, be += a * $e, de += a * je, _e += a * qe, Fe += a * Re, Te += a * Ve, ye += a * We, pe += a * ke, fe += a * Ge, ue += a * Ye, ce += a * Ke, ae += a * Be, oe += a * Ae, re += a * Je, he += a * Qe, a = A[2], le += a * Me, be += a * Pe, de += a * $e, _e += a * je, Fe += a * qe, Te += a * Re, ye += a * Ve, pe += a * We, fe += a * ke, ue += a * Ge, ce += a * Ye, ae += a * Ke, oe += a * Be, re += a * Ae, he += a * Je, ge += a * Qe, a = A[3], be += a * Me, de += a * Pe, _e += a * $e, Fe += a * je, Te += a * qe, ye += a * Re, pe += a * Ve, fe += a * We, ue += a * ke, ce += a * Ge, ae += a * Ye, oe += a * Ke, re += a * Be, he += a * Ae, ge += a * Je, ie += a * Qe, a = A[4], de += a * Me, _e += a * Pe, Fe += a * $e, Te += a * je, ye += a * qe, pe += a * Re, fe += a * Ve, ue += a * We, ce += a * ke, ae += a * Ge, oe += a * Ye, re += a * Ke, he += a * Be, ge += a * Ae, ie += a * Je, we += a * Qe, a = A[5], _e += a * Me, Fe += a * Pe, Te += a * $e, ye += a * je, pe += a * qe, fe += a * Re, ue += a * Ve, ce += a * We, ae += a * ke, oe += a * Ge, re += a * Ye, he += a * Ke, ge += a * Be, ie += a * Ae, we += a * Je, ve += a * Qe, a = A[6], Fe += a * Me, Te += a * Pe, ye += a * $e, pe += a * je, fe += a * qe, ue += a * Re, ce += a * Ve, ae += a * We, oe += a * ke, re += a * Ge, he += a * Ye, ge += a * Ke, ie += a * Be, we += a * Ae, ve += a * Je, De += a * Qe, a = A[7], Te += a * Me, ye += a * Pe, pe += a * $e, fe += a * je, ue += a * qe, ce += a * Re, ae += a * Ve, oe += a * We, re += a * ke, he += a * Ge, ge += a * Ye, ie += a * Ke, we += a * Be, ve += a * Ae, De += a * Je, Se += a * Qe, a = A[8], ye += a * Me, pe += a * Pe, fe += a * $e, ue += a * je, ce += a * qe, ae += a * Re, oe += a * Ve, re += a * We, he += a * ke, ge += a * Ge, ie += a * Ye, we += a * Ke, ve += a * Be, De += a * Ae, Se += a * Je, Ee += a * Qe, a = A[9], pe += a * Me, fe += a * Pe, ue += a * $e, ce += a * je, ae += a * qe, oe += a * Re, re += a * Ve, he += a * We, ge += a * ke, ie += a * Ge, we += a * Ye, ve += a * Ke, De += a * Be, Se += a * Ae, Ee += a * Je, Ct += a * Qe, a = A[10], fe += a * Me, ue += a * Pe, ce += a * $e, ae += a * je, oe += a * qe, re += a * Re, he += a * Ve, ge += a * We, ie += a * ke, we += a * Ge, ve += a * Ye, De += a * Ke, Se += a * Be, Ee += a * Ae, Ct += a * Je, Ut += a * Qe, a = A[11], ue += a * Me, ce += a * Pe, ae += a * $e, oe += a * je, re += a * qe, he += a * Re, ge += a * Ve, ie += a * We, we += a * ke, ve += a * Ge, De += a * Ye, Se += a * Ke, Ee += a * Be, Ct += a * Ae, Ut += a * Je, Gt += a * Qe, a = A[12], ce += a * Me, ae += a * Pe, oe += a * $e, re += a * je, he += a * qe, ge += a * Re, ie += a * Ve, we += a * We, ve += a * ke, De += a * Ge, Se += a * Ye, Ee += a * Ke, Ct += a * Be, Ut += a * Ae, Gt += a * Je, vt += a * Qe, a = A[13], ae += a * Me, oe += a * Pe, re += a * $e, he += a * je, ge += a * qe, ie += a * Re, we += a * Ve, ve += a * We, De += a * ke, Se += a * Ge, Ee += a * Ye, Ct += a * Ke, Ut += a * Be, Gt += a * Ae, vt += a * Je, ir += a * Qe, a = A[14], oe += a * Me, re += a * Pe, he += a * $e, ge += a * je, ie += a * qe, we += a * Re, ve += a * Ve, De += a * We, Se += a * ke, Ee += a * Ge, Ct += a * Ye, Ut += a * Ke, Gt += a * Be, vt += a * Ae, ir += a * Je, Ur += a * Qe, a = A[15], re += a * Me, he += a * Pe, ge += a * $e, ie += a * je, we += a * qe, ve += a * Re, De += a * Ve, Se += a * We, Ee += a * ke, Ct += a * Ge, Ut += a * Ye, Gt += a * Ke, vt += a * Be, ir += a * Ae, Ur += a * Je, fi += a * Qe, V += 38 * he, Y += 38 * ge, le += 38 * ie, be += 38 * we, de += 38 * ve, _e += 38 * De, Fe += 38 * Se, Te += 38 * Ee, ye += 38 * Ct, pe += 38 * Ut, fe += 38 * Gt, ue += 38 * vt, ce += 38 * ir, ae += 38 * Ur, oe += 38 * fi, b = 1, a = V + b + 65535, b = Math.floor(a / 65536), V = a - b * 65536, a = Y + b + 65535, b = Math.floor(a / 65536), Y = a - b * 65536, a = le + b + 65535, b = Math.floor(a / 65536), le = a - b * 65536, a = be + b + 65535, b = Math.floor(a / 65536), be = a - b * 65536, a = de + b + 65535, b = Math.floor(a / 65536), de = a - b * 65536, a = _e + b + 65535, b = Math.floor(a / 65536), _e = a - b * 65536, a = Fe + b + 65535, b = Math.floor(a / 65536), Fe = a - b * 65536, a = Te + b + 65535, b = Math.floor(a / 65536), Te = a - b * 65536, a = ye + b + 65535, b = Math.floor(a / 65536), ye = a - b * 65536, a = pe + b + 65535, b = Math.floor(a / 65536), pe = a - b * 65536, a = fe + b + 65535, b = Math.floor(a / 65536), fe = a - b * 65536, a = ue + b + 65535, b = Math.floor(a / 65536), ue = a - b * 65536, a = ce + b + 65535, b = Math.floor(a / 65536), ce = a - b * 65536, a = ae + b + 65535, b = Math.floor(a / 65536), ae = a - b * 65536, a = oe + b + 65535, b = Math.floor(a / 65536), oe = a - b * 65536, a = re + b + 65535, b = Math.floor(a / 65536), re = a - b * 65536, V += b - 1 + 37 * (b - 1), b = 1, a = V + b + 65535, b = Math.floor(a / 65536), V = a - b * 65536, a = Y + b + 65535, b = Math.floor(a / 65536), Y = a - b * 65536, a = le + b + 65535, b = Math.floor(a / 65536), le = a - b * 65536, a = be + b + 65535, b = Math.floor(a / 65536), be = a - b * 65536, a = de + b + 65535, b = Math.floor(a / 65536), de = a - b * 65536, a = _e + b + 65535, b = Math.floor(a / 65536), _e = a - b * 65536, a = Fe + b + 65535, b = Math.floor(a / 65536), Fe = a - b * 65536, a = Te + b + 65535, b = Math.floor(a / 65536), Te = a - b * 65536, a = ye + b + 65535, b = Math.floor(a / 65536), ye = a - b * 65536, a = pe + b + 65535, b = Math.floor(a / 65536), pe = a - b * 65536, a = fe + b + 65535, b = Math.floor(a / 65536), fe = a - b * 65536, a = ue + b + 65535, b = Math.floor(a / 65536), ue = a - b * 65536, a = ce + b + 65535, b = Math.floor(a / 65536), ce = a - b * 65536, a = ae + b + 65535, b = Math.floor(a / 65536), ae = a - b * 65536, a = oe + b + 65535, b = Math.floor(a / 65536), oe = a - b * 65536, a = re + b + 65535, b = Math.floor(a / 65536), re = a - b * 65536, V += b - 1 + 37 * (b - 1), C[0] = V, C[1] = Y, C[2] = le, C[3] = be, C[4] = de, C[5] = _e, C[6] = Fe, C[7] = Te, C[8] = ye, C[9] = pe, C[10] = fe, C[11] = ue, C[12] = ce, C[13] = ae, C[14] = oe, C[15] = re;
  }
  function f(C, A) {
    o(C, A, A);
  }
  function P(C, A) {
    const S = s();
    let a;
    for (a = 0; a < 16; a++)
      S[a] = A[a];
    for (a = 253; a >= 0; a--)
      f(S, S), a !== 2 && a !== 4 && o(S, S, A);
    for (a = 0; a < 16; a++)
      C[a] = S[a];
  }
  function T(C, A) {
    const S = s();
    let a;
    for (a = 0; a < 16; a++)
      S[a] = A[a];
    for (a = 250; a >= 0; a--)
      f(S, S), a !== 1 && o(S, S, A);
    for (a = 0; a < 16; a++)
      C[a] = S[a];
  }
  function U(C, A) {
    const S = s(), a = s(), b = s(), V = s(), Y = s(), le = s(), be = s(), de = s(), _e = s();
    d(S, C[1], C[0]), d(_e, A[1], A[0]), o(S, S, _e), w(a, C[0], C[1]), w(_e, A[0], A[1]), o(a, a, _e), o(b, C[3], A[3]), o(b, b, l), o(V, C[2], A[2]), w(V, V, V), d(Y, a, S), d(le, V, b), w(be, V, b), w(de, a, S), o(C[0], Y, le), o(C[1], de, be), o(C[2], be, le), o(C[3], Y, de);
  }
  function H(C, A, S) {
    for (let a = 0; a < 4; a++)
      R(C[a], A[a], S);
  }
  function G(C, A) {
    const S = s(), a = s(), b = s();
    P(b, A[2]), o(S, A[0], b), o(a, A[1], b), L(C, a), C[31] ^= O(S) << 7;
  }
  function D(C, A, S) {
    _(C[0], u), _(C[1], c), _(C[2], c), _(C[3], u);
    for (let a = 255; a >= 0; --a) {
      const b = S[a / 8 | 0] >> (a & 7) & 1;
      H(C, A, b), U(A, C), U(C, C), H(C, A, b);
    }
  }
  function N(C, A) {
    const S = [s(), s(), s(), s()];
    _(S[0], p), _(S[1], m), _(S[2], c), o(S[3], p, m), D(C, S, A);
  }
  function W(C) {
    if (C.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const A = (0, r.hash)(C);
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const S = new Uint8Array(32), a = [s(), s(), s(), s()];
    N(a, A), G(S, a);
    const b = new Uint8Array(64);
    return b.set(C), b.set(S, 32), {
      publicKey: S,
      secretKey: b
    };
  }
  t.generateKeyPairFromSeed = W;
  function B(C) {
    const A = (0, e.randomBytes)(32, C), S = W(A);
    return (0, i.wipe)(A), S;
  }
  t.generateKeyPair = B;
  function M(C) {
    if (C.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(C.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = M;
  const j = new Float64Array([
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
  function F(C, A) {
    let S, a, b, V;
    for (a = 63; a >= 32; --a) {
      for (S = 0, b = a - 32, V = a - 12; b < V; ++b)
        A[b] += S - 16 * A[a] * j[b - (a - 32)], S = Math.floor((A[b] + 128) / 256), A[b] -= S * 256;
      A[b] += S, A[a] = 0;
    }
    for (S = 0, b = 0; b < 32; b++)
      A[b] += S - (A[31] >> 4) * j[b], S = A[b] >> 8, A[b] &= 255;
    for (b = 0; b < 32; b++)
      A[b] -= S * j[b];
    for (a = 0; a < 32; a++)
      A[a + 1] += A[a] >> 8, C[a] = A[a] & 255;
  }
  function z(C) {
    const A = new Float64Array(64);
    for (let S = 0; S < 64; S++)
      A[S] = C[S];
    for (let S = 0; S < 64; S++)
      C[S] = 0;
    F(C, A);
  }
  function te(C, A) {
    const S = new Float64Array(64), a = [s(), s(), s(), s()], b = (0, r.hash)(C.subarray(0, 32));
    b[0] &= 248, b[31] &= 127, b[31] |= 64;
    const V = new Uint8Array(64);
    V.set(b.subarray(32), 32);
    const Y = new r.SHA512();
    Y.update(V.subarray(32)), Y.update(A);
    const le = Y.digest();
    Y.clean(), z(le), N(a, le), G(V, a), Y.reset(), Y.update(V.subarray(0, 32)), Y.update(C.subarray(32)), Y.update(A);
    const be = Y.digest();
    z(be);
    for (let de = 0; de < 32; de++)
      S[de] = le[de];
    for (let de = 0; de < 32; de++)
      for (let _e = 0; _e < 32; _e++)
        S[de + _e] += be[de] * b[_e];
    return F(V.subarray(32), S), V;
  }
  t.sign = te;
  function K(C, A) {
    const S = s(), a = s(), b = s(), V = s(), Y = s(), le = s(), be = s();
    return _(C[2], c), y(C[1], A), f(b, C[1]), o(V, b, h), d(b, b, C[2]), w(V, C[2], V), f(Y, V), f(le, Y), o(be, le, Y), o(S, be, b), o(S, S, V), T(S, S), o(S, S, b), o(S, S, V), o(S, S, V), o(C[0], S, V), f(a, C[0]), o(a, a, V), v(a, b) && o(C[0], C[0], E), f(a, C[0]), o(a, a, V), v(a, b) ? -1 : (O(C[0]) === A[31] >> 7 && d(C[0], u, C[0]), o(C[3], C[0], C[1]), 0);
  }
  function Z(C, A, S) {
    const a = new Uint8Array(32), b = [s(), s(), s(), s()], V = [s(), s(), s(), s()];
    if (S.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(V, C))
      return !1;
    const Y = new r.SHA512();
    Y.update(S.subarray(0, 32)), Y.update(C), Y.update(A);
    const le = Y.digest();
    return z(le), D(b, V, le), N(V, S.subarray(32)), U(b, V), G(a, b), !q(S, a);
  }
  t.verify = Z;
  function J(C) {
    let A = [s(), s(), s(), s()];
    if (K(A, C))
      throw new Error("Ed25519: invalid public key");
    let S = s(), a = s(), b = A[1];
    w(S, c, b), d(a, c, b), P(a, a), o(S, S, a);
    let V = new Uint8Array(32);
    return L(V, S), V;
  }
  t.convertPublicKeyToX25519 = J;
  function ee(C) {
    const A = (0, r.hash)(C.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const S = new Uint8Array(A.subarray(0, 32));
    return (0, i.wipe)(A), S;
  }
  t.convertSecretKeyToX25519 = ee;
})($s);
const Ol = "EdDSA", Al = "JWT", Na = ".", Ta = "base64url", Cl = "utf8", Nl = "utf8", Tl = ":", Pl = "did", Rl = "key", eo = "base58btc", Ll = "z", Ul = "K36", Fl = 32;
function js(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Pa(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? js(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ss(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const r = Pa(e);
  let i = 0;
  for (const s of t)
    r.set(s, i), i += s.length;
  return js(r);
}
function Ml(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), u = n.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[u] = s;
  }
  var c = t.length, h = t.charAt(0), l = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function m(x) {
    if (x instanceof Uint8Array || (ArrayBuffer.isView(x) ? x = new Uint8Array(x.buffer, x.byteOffset, x.byteLength) : Array.isArray(x) && (x = Uint8Array.from(x))), !(x instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (x.length === 0)
      return "";
    for (var R = 0, L = 0, q = 0, v = x.length; q !== v && x[q] === 0; )
      q++, R++;
    for (var O = (v - q) * p + 1 >>> 0, y = new Uint8Array(O); q !== v; ) {
      for (var w = x[q], d = 0, o = O - 1; (w !== 0 || d < L) && o !== -1; o--, d++)
        w += 256 * y[o] >>> 0, y[o] = w % c >>> 0, w = w / c >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      L = d, q++;
    }
    for (var f = O - L; f !== O && y[f] === 0; )
      f++;
    for (var P = h.repeat(R); f < O; ++f)
      P += t.charAt(y[f]);
    return P;
  }
  function E(x) {
    if (typeof x != "string")
      throw new TypeError("Expected String");
    if (x.length === 0)
      return new Uint8Array();
    var R = 0;
    if (x[R] !== " ") {
      for (var L = 0, q = 0; x[R] === h; )
        L++, R++;
      for (var v = (x.length - R) * l + 1 >>> 0, O = new Uint8Array(v); x[R]; ) {
        var y = r[x.charCodeAt(R)];
        if (y === 255)
          return;
        for (var w = 0, d = v - 1; (y !== 0 || w < q) && d !== -1; d--, w++)
          y += c * O[d] >>> 0, O[d] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        q = w, R++;
      }
      if (x[R] !== " ") {
        for (var o = v - q; o !== v && O[o] === 0; )
          o++;
        for (var f = new Uint8Array(L + (v - o)), P = L; o !== v; )
          f[P++] = O[o++];
        return f;
      }
    }
  }
  function _(x) {
    var R = E(x);
    if (R)
      return R;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: m,
    decodeUnsafe: E,
    decode: _
  };
}
var $l = Ml, jl = $l;
const ql = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Bl = (t) => new TextEncoder().encode(t), zl = (t) => new TextDecoder().decode(t);
class Kl {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Hl {
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
    return Ra(this, e);
  }
}
class Vl {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ra(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ra = (t, e) => new Vl({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Wl {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new Kl(e, r, i), this.decoder = new Hl(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Bi = ({ name: t, prefix: e, encode: r, decode: i }) => new Wl(t, e, r, i), ni = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = jl(r, e);
  return Bi({
    prefix: t,
    name: e,
    encode: i,
    decode: (n) => ql(s(n))
  });
}, kl = (t, e, r, i) => {
  const s = {};
  for (let p = 0; p < e.length; ++p)
    s[e[p]] = p;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const u = new Uint8Array(n * r / 8 | 0);
  let c = 0, h = 0, l = 0;
  for (let p = 0; p < n; ++p) {
    const m = s[t[p]];
    if (m === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h = h << r | m, c += r, c >= 8 && (c -= 8, u[l++] = 255 & h >> c);
  }
  if (c >= r || 255 & h << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Gl = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", u = 0, c = 0;
  for (let h = 0; h < t.length; ++h)
    for (c = c << 8 | t[h], u += 8; u > r; )
      u -= r, n += e[s & c >> u];
  if (u && (n += e[s & c << r - u]), i)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, it = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Bi({
  prefix: e,
  name: t,
  encode(s) {
    return Gl(s, i, r);
  },
  decode(s) {
    return kl(s, i, r, t);
  }
}), Yl = Bi({
  prefix: "\0",
  name: "identity",
  encode: (t) => zl(t),
  decode: (t) => Bl(t)
}), Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Yl
}, Symbol.toStringTag, { value: "Module" })), Ql = it({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Ql
}, Symbol.toStringTag, { value: "Module" })), Zl = it({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Zl
}, Symbol.toStringTag, { value: "Module" })), tf = ni({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: tf
}, Symbol.toStringTag, { value: "Module" })), sf = it({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), nf = it({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: sf,
  base16upper: nf
}, Symbol.toStringTag, { value: "Module" })), af = it({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), cf = it({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), uf = it({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), hf = it({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), lf = it({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), ff = it({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), df = it({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), pf = it({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), gf = it({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: af,
  base32hex: lf,
  base32hexpad: df,
  base32hexpadupper: pf,
  base32hexupper: ff,
  base32pad: uf,
  base32padupper: hf,
  base32upper: cf,
  base32z: gf
}, Symbol.toStringTag, { value: "Module" })), bf = ni({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), wf = ni({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: bf,
  base36upper: wf
}, Symbol.toStringTag, { value: "Module" })), vf = ni({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), _f = ni({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: vf,
  base58flickr: _f
}, Symbol.toStringTag, { value: "Module" })), Df = it({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Sf = it({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), If = it({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), xf = it({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Df,
  base64pad: Sf,
  base64url: If,
  base64urlpad: xf
}, Symbol.toStringTag, { value: "Module" })), La = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Af = La.reduce((t, e, r) => (t[r] = e, t), []), Cf = La.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Nf(t) {
  return t.reduce((e, r) => (e += Af[r], e), "");
}
function Tf(t) {
  const e = [];
  for (const r of t) {
    const i = Cf[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Pf = Bi({
  prefix: "🚀",
  name: "base256emoji",
  encode: Nf,
  decode: Tf
}), Rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Pf
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const to = {
  ...Jl,
  ...Xl,
  ...ef,
  ...rf,
  ...of,
  ...yf,
  ...mf,
  ...Ef,
  ...Of,
  ...Rf
};
function Ua(t, e, r, i) {
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
const ro = Ua("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), os = Ua("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Pa(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Fa = {
  utf8: ro,
  "utf-8": ro,
  hex: to.base16,
  latin1: os,
  ascii: os,
  binary: os,
  ...to
};
function yt(t, e = "utf8") {
  const r = Fa[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function mt(t, e = "utf8") {
  const r = Fa[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? js(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ni(t) {
  return yt(mt(Ms(t), Cl), Ta);
}
function Ma(t) {
  const e = mt(Ul, eo), r = Ll + yt(Ss([e, t]), eo);
  return [Pl, Rl, r].join(Tl);
}
function Lf(t) {
  return yt(t, Ta);
}
function Uf(t) {
  return mt([Ni(t.header), Ni(t.payload)].join(Na), Nl);
}
function Ff(t) {
  return [
    Ni(t.header),
    Ni(t.payload),
    Lf(t.signature)
  ].join(Na);
}
function io(t = Pr.randomBytes(Fl)) {
  return $s.generateKeyPairFromSeed(t);
}
async function Mf(t, e, r, i, s = X.fromMiliseconds(Date.now())) {
  const n = { alg: Ol, typ: Al }, u = Ma(i.publicKey), c = s + r, h = { iss: u, sub: t, aud: e, iat: s, exp: c }, l = Uf({ header: n, payload: h }), p = $s.sign(i.secretKey, l);
  return Ff({ header: n, payload: h, signature: p });
}
var qs = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
var at = se, Is = St, $f = 20;
function jf(t, e, r) {
  for (var i = 1634760805, s = 857760878, n = 2036477234, u = 1797285236, c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], p = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], m = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], E = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], _ = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], x = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], R = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], L = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], q = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = i, y = s, w = n, d = u, o = c, f = h, P = l, T = p, U = m, H = E, G = _, D = x, N = R, W = L, B = q, M = v, j = 0; j < $f; j += 2)
    O = O + o | 0, N ^= O, N = N >>> 32 - 16 | N << 16, U = U + N | 0, o ^= U, o = o >>> 32 - 12 | o << 12, y = y + f | 0, W ^= y, W = W >>> 32 - 16 | W << 16, H = H + W | 0, f ^= H, f = f >>> 32 - 12 | f << 12, w = w + P | 0, B ^= w, B = B >>> 32 - 16 | B << 16, G = G + B | 0, P ^= G, P = P >>> 32 - 12 | P << 12, d = d + T | 0, M ^= d, M = M >>> 32 - 16 | M << 16, D = D + M | 0, T ^= D, T = T >>> 32 - 12 | T << 12, w = w + P | 0, B ^= w, B = B >>> 32 - 8 | B << 8, G = G + B | 0, P ^= G, P = P >>> 32 - 7 | P << 7, d = d + T | 0, M ^= d, M = M >>> 32 - 8 | M << 8, D = D + M | 0, T ^= D, T = T >>> 32 - 7 | T << 7, y = y + f | 0, W ^= y, W = W >>> 32 - 8 | W << 8, H = H + W | 0, f ^= H, f = f >>> 32 - 7 | f << 7, O = O + o | 0, N ^= O, N = N >>> 32 - 8 | N << 8, U = U + N | 0, o ^= U, o = o >>> 32 - 7 | o << 7, O = O + f | 0, M ^= O, M = M >>> 32 - 16 | M << 16, G = G + M | 0, f ^= G, f = f >>> 32 - 12 | f << 12, y = y + P | 0, N ^= y, N = N >>> 32 - 16 | N << 16, D = D + N | 0, P ^= D, P = P >>> 32 - 12 | P << 12, w = w + T | 0, W ^= w, W = W >>> 32 - 16 | W << 16, U = U + W | 0, T ^= U, T = T >>> 32 - 12 | T << 12, d = d + o | 0, B ^= d, B = B >>> 32 - 16 | B << 16, H = H + B | 0, o ^= H, o = o >>> 32 - 12 | o << 12, w = w + T | 0, W ^= w, W = W >>> 32 - 8 | W << 8, U = U + W | 0, T ^= U, T = T >>> 32 - 7 | T << 7, d = d + o | 0, B ^= d, B = B >>> 32 - 8 | B << 8, H = H + B | 0, o ^= H, o = o >>> 32 - 7 | o << 7, y = y + P | 0, N ^= y, N = N >>> 32 - 8 | N << 8, D = D + N | 0, P ^= D, P = P >>> 32 - 7 | P << 7, O = O + f | 0, M ^= O, M = M >>> 32 - 8 | M << 8, G = G + M | 0, f ^= G, f = f >>> 32 - 7 | f << 7;
  at.writeUint32LE(O + i | 0, t, 0), at.writeUint32LE(y + s | 0, t, 4), at.writeUint32LE(w + n | 0, t, 8), at.writeUint32LE(d + u | 0, t, 12), at.writeUint32LE(o + c | 0, t, 16), at.writeUint32LE(f + h | 0, t, 20), at.writeUint32LE(P + l | 0, t, 24), at.writeUint32LE(T + p | 0, t, 28), at.writeUint32LE(U + m | 0, t, 32), at.writeUint32LE(H + E | 0, t, 36), at.writeUint32LE(G + _ | 0, t, 40), at.writeUint32LE(D + x | 0, t, 44), at.writeUint32LE(N + R | 0, t, 48), at.writeUint32LE(W + L | 0, t, 52), at.writeUint32LE(B + q | 0, t, 56), at.writeUint32LE(M + v | 0, t, 60);
}
function $a(t, e, r, i, s) {
  if (s === void 0 && (s = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, u;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    n = new Uint8Array(16), u = n.length - e.length, n.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    n = e, u = s;
  }
  for (var c = new Uint8Array(64), h = 0; h < r.length; h += 64) {
    jf(c, n, t);
    for (var l = h; l < h + 64 && l < r.length; l++)
      i[l] = r[l] ^ c[l - h];
    Bf(n, 0, u);
  }
  return Is.wipe(c), s === 0 && Is.wipe(n), i;
}
zi.streamXOR = $a;
function qf(t, e, r, i) {
  return i === void 0 && (i = 0), Is.wipe(r), $a(t, e, r, r, i);
}
zi.stream = qf;
function Bf(t, e, r) {
  for (var i = 1; r--; )
    i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var ja = {}, rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
function zf(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
rr.select = zf;
function Kf(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
rr.lessOrEqual = Kf;
function qa(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, i = 0; i < t.length; i++)
    r |= t[i] ^ e[i];
  return 1 & r - 1 >>> 8;
}
rr.compare = qa;
function Hf(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : qa(t, e) !== 0;
}
rr.equal = Hf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = rr, r = St;
  t.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function u(c) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var h = c[0] | c[1] << 8;
        this._r[0] = h & 8191;
        var l = c[2] | c[3] << 8;
        this._r[1] = (h >>> 13 | l << 3) & 8191;
        var p = c[4] | c[5] << 8;
        this._r[2] = (l >>> 10 | p << 6) & 7939;
        var m = c[6] | c[7] << 8;
        this._r[3] = (p >>> 7 | m << 9) & 8191;
        var E = c[8] | c[9] << 8;
        this._r[4] = (m >>> 4 | E << 12) & 255, this._r[5] = E >>> 1 & 8190;
        var _ = c[10] | c[11] << 8;
        this._r[6] = (E >>> 14 | _ << 2) & 8191;
        var x = c[12] | c[13] << 8;
        this._r[7] = (_ >>> 11 | x << 5) & 8065;
        var R = c[14] | c[15] << 8;
        this._r[8] = (x >>> 8 | R << 8) & 8191, this._r[9] = R >>> 5 & 127, this._pad[0] = c[16] | c[17] << 8, this._pad[1] = c[18] | c[19] << 8, this._pad[2] = c[20] | c[21] << 8, this._pad[3] = c[22] | c[23] << 8, this._pad[4] = c[24] | c[25] << 8, this._pad[5] = c[26] | c[27] << 8, this._pad[6] = c[28] | c[29] << 8, this._pad[7] = c[30] | c[31] << 8;
      }
      return u.prototype._blocks = function(c, h, l) {
        for (var p = this._fin ? 0 : 2048, m = this._h[0], E = this._h[1], _ = this._h[2], x = this._h[3], R = this._h[4], L = this._h[5], q = this._h[6], v = this._h[7], O = this._h[8], y = this._h[9], w = this._r[0], d = this._r[1], o = this._r[2], f = this._r[3], P = this._r[4], T = this._r[5], U = this._r[6], H = this._r[7], G = this._r[8], D = this._r[9]; l >= 16; ) {
          var N = c[h + 0] | c[h + 1] << 8;
          m += N & 8191;
          var W = c[h + 2] | c[h + 3] << 8;
          E += (N >>> 13 | W << 3) & 8191;
          var B = c[h + 4] | c[h + 5] << 8;
          _ += (W >>> 10 | B << 6) & 8191;
          var M = c[h + 6] | c[h + 7] << 8;
          x += (B >>> 7 | M << 9) & 8191;
          var j = c[h + 8] | c[h + 9] << 8;
          R += (M >>> 4 | j << 12) & 8191, L += j >>> 1 & 8191;
          var F = c[h + 10] | c[h + 11] << 8;
          q += (j >>> 14 | F << 2) & 8191;
          var z = c[h + 12] | c[h + 13] << 8;
          v += (F >>> 11 | z << 5) & 8191;
          var te = c[h + 14] | c[h + 15] << 8;
          O += (z >>> 8 | te << 8) & 8191, y += te >>> 5 | p;
          var K = 0, Z = K;
          Z += m * w, Z += E * (5 * D), Z += _ * (5 * G), Z += x * (5 * H), Z += R * (5 * U), K = Z >>> 13, Z &= 8191, Z += L * (5 * T), Z += q * (5 * P), Z += v * (5 * f), Z += O * (5 * o), Z += y * (5 * d), K += Z >>> 13, Z &= 8191;
          var J = K;
          J += m * d, J += E * w, J += _ * (5 * D), J += x * (5 * G), J += R * (5 * H), K = J >>> 13, J &= 8191, J += L * (5 * U), J += q * (5 * T), J += v * (5 * P), J += O * (5 * f), J += y * (5 * o), K += J >>> 13, J &= 8191;
          var ee = K;
          ee += m * o, ee += E * d, ee += _ * w, ee += x * (5 * D), ee += R * (5 * G), K = ee >>> 13, ee &= 8191, ee += L * (5 * H), ee += q * (5 * U), ee += v * (5 * T), ee += O * (5 * P), ee += y * (5 * f), K += ee >>> 13, ee &= 8191;
          var C = K;
          C += m * f, C += E * o, C += _ * d, C += x * w, C += R * (5 * D), K = C >>> 13, C &= 8191, C += L * (5 * G), C += q * (5 * H), C += v * (5 * U), C += O * (5 * T), C += y * (5 * P), K += C >>> 13, C &= 8191;
          var A = K;
          A += m * P, A += E * f, A += _ * o, A += x * d, A += R * w, K = A >>> 13, A &= 8191, A += L * (5 * D), A += q * (5 * G), A += v * (5 * H), A += O * (5 * U), A += y * (5 * T), K += A >>> 13, A &= 8191;
          var S = K;
          S += m * T, S += E * P, S += _ * f, S += x * o, S += R * d, K = S >>> 13, S &= 8191, S += L * w, S += q * (5 * D), S += v * (5 * G), S += O * (5 * H), S += y * (5 * U), K += S >>> 13, S &= 8191;
          var a = K;
          a += m * U, a += E * T, a += _ * P, a += x * f, a += R * o, K = a >>> 13, a &= 8191, a += L * d, a += q * w, a += v * (5 * D), a += O * (5 * G), a += y * (5 * H), K += a >>> 13, a &= 8191;
          var b = K;
          b += m * H, b += E * U, b += _ * T, b += x * P, b += R * f, K = b >>> 13, b &= 8191, b += L * o, b += q * d, b += v * w, b += O * (5 * D), b += y * (5 * G), K += b >>> 13, b &= 8191;
          var V = K;
          V += m * G, V += E * H, V += _ * U, V += x * T, V += R * P, K = V >>> 13, V &= 8191, V += L * f, V += q * o, V += v * d, V += O * w, V += y * (5 * D), K += V >>> 13, V &= 8191;
          var Y = K;
          Y += m * D, Y += E * G, Y += _ * H, Y += x * U, Y += R * T, K = Y >>> 13, Y &= 8191, Y += L * P, Y += q * f, Y += v * o, Y += O * d, Y += y * w, K += Y >>> 13, Y &= 8191, K = (K << 2) + K | 0, K = K + Z | 0, Z = K & 8191, K = K >>> 13, J += K, m = Z, E = J, _ = ee, x = C, R = A, L = S, q = a, v = b, O = V, y = Y, h += 16, l -= 16;
        }
        this._h[0] = m, this._h[1] = E, this._h[2] = _, this._h[3] = x, this._h[4] = R, this._h[5] = L, this._h[6] = q, this._h[7] = v, this._h[8] = O, this._h[9] = y;
      }, u.prototype.finish = function(c, h) {
        h === void 0 && (h = 0);
        var l = new Uint16Array(10), p, m, E, _;
        if (this._leftover) {
          for (_ = this._leftover, this._buffer[_++] = 1; _ < 16; _++)
            this._buffer[_] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (p = this._h[1] >>> 13, this._h[1] &= 8191, _ = 2; _ < 10; _++)
          this._h[_] += p, p = this._h[_] >>> 13, this._h[_] &= 8191;
        for (this._h[0] += p * 5, p = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += p, p = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += p, l[0] = this._h[0] + 5, p = l[0] >>> 13, l[0] &= 8191, _ = 1; _ < 10; _++)
          l[_] = this._h[_] + p, p = l[_] >>> 13, l[_] &= 8191;
        for (l[9] -= 8192, m = (p ^ 1) - 1, _ = 0; _ < 10; _++)
          l[_] &= m;
        for (m = ~m, _ = 0; _ < 10; _++)
          this._h[_] = this._h[_] & m | l[_];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, E = this._h[0] + this._pad[0], this._h[0] = E & 65535, _ = 1; _ < 8; _++)
          E = (this._h[_] + this._pad[_] | 0) + (E >>> 16) | 0, this._h[_] = E & 65535;
        return c[h + 0] = this._h[0] >>> 0, c[h + 1] = this._h[0] >>> 8, c[h + 2] = this._h[1] >>> 0, c[h + 3] = this._h[1] >>> 8, c[h + 4] = this._h[2] >>> 0, c[h + 5] = this._h[2] >>> 8, c[h + 6] = this._h[3] >>> 0, c[h + 7] = this._h[3] >>> 8, c[h + 8] = this._h[4] >>> 0, c[h + 9] = this._h[4] >>> 8, c[h + 10] = this._h[5] >>> 0, c[h + 11] = this._h[5] >>> 8, c[h + 12] = this._h[6] >>> 0, c[h + 13] = this._h[6] >>> 8, c[h + 14] = this._h[7] >>> 0, c[h + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(c) {
        var h = 0, l = c.length, p;
        if (this._leftover) {
          p = 16 - this._leftover, p > l && (p = l);
          for (var m = 0; m < p; m++)
            this._buffer[this._leftover + m] = c[h + m];
          if (l -= p, h += p, this._leftover += p, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (p = l - l % 16, this._blocks(c, h, p), h += p, l -= p), l) {
          for (var m = 0; m < l; m++)
            this._buffer[this._leftover + m] = c[h + m];
          this._leftover += l;
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
  function s(u, c) {
    var h = new i(u);
    h.update(c);
    var l = h.digest();
    return h.clean(), l;
  }
  t.oneTimeAuth = s;
  function n(u, c) {
    return u.length !== t.DIGEST_LENGTH || c.length !== t.DIGEST_LENGTH ? !1 : e.equal(u, c);
  }
  t.equal = n;
})(ja);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = zi, r = ja, i = St, s = se, n = rr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var u = new Uint8Array(16), c = (
    /** @class */
    function() {
      function h(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return h.prototype.seal = function(l, p, m, E) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var _ = new Uint8Array(16);
        _.set(l, _.length - l.length);
        var x = new Uint8Array(32);
        e.stream(this._key, _, x, 4);
        var R = p.length + this.tagLength, L;
        if (E) {
          if (E.length !== R)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = E;
        } else
          L = new Uint8Array(R);
        return e.streamXOR(this._key, _, p, L, 4), this._authenticate(L.subarray(L.length - this.tagLength, L.length), x, L.subarray(0, L.length - this.tagLength), m), i.wipe(_), L;
      }, h.prototype.open = function(l, p, m, E) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (p.length < this.tagLength)
          return null;
        var _ = new Uint8Array(16);
        _.set(l, _.length - l.length);
        var x = new Uint8Array(32);
        e.stream(this._key, _, x, 4);
        var R = new Uint8Array(this.tagLength);
        if (this._authenticate(R, x, p.subarray(0, p.length - this.tagLength), m), !n.equal(R, p.subarray(p.length - this.tagLength, p.length)))
          return null;
        var L = p.length - this.tagLength, q;
        if (E) {
          if (E.length !== L)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          q = E;
        } else
          q = new Uint8Array(L);
        return e.streamXOR(this._key, _, p.subarray(0, p.length - this.tagLength), q, 4), i.wipe(_), q;
      }, h.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, h.prototype._authenticate = function(l, p, m, E) {
        var _ = new r.Poly1305(p);
        E && (_.update(E), E.length % 16 > 0 && _.update(u.subarray(E.length % 16))), _.update(m), m.length % 16 > 0 && _.update(u.subarray(m.length % 16));
        var x = new Uint8Array(8);
        E && s.writeUint64LE(E.length, x), _.update(x), s.writeUint64LE(m.length, x), _.update(x);
        for (var R = _.digest(), L = 0; L < R.length; L++)
          l[L] = R[L];
        _.clean(), i.wipe(R), i.wipe(x);
      }, h;
    }()
  );
  t.ChaCha20Poly1305 = c;
})(qs);
var Ba = {}, oi = {}, Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
function Vf(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Bs.isSerializableHash = Vf;
Object.defineProperty(oi, "__esModule", { value: !0 });
var $t = Bs, Wf = rr, kf = St, za = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(i).clean() : i.set(r);
      for (var s = 0; s < i.length; s++)
        i[s] ^= 54;
      this._inner.update(i);
      for (var s = 0; s < i.length; s++)
        i[s] ^= 106;
      this._outer.update(i), $t.isSerializableHash(this._inner) && $t.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), kf.wipe(i);
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
oi.HMAC = za;
function Gf(t, e, r) {
  var i = new za(t, e);
  i.update(r);
  var s = i.digest();
  return i.clean(), s;
}
oi.hmac = Gf;
oi.equal = Wf.equal;
Object.defineProperty(Ba, "__esModule", { value: !0 });
var so = oi, no = St, Yf = (
  /** @class */
  function() {
    function t(e, r, i, s) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var n = so.hmac(this._hash, i, r);
      this._hmac = new so.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), no.wipe(this._buffer), no.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Jf = Ba.HKDF = Yf, Ki = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = se, r = St;
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
      }, c.prototype.update = function(h, l) {
        if (l === void 0 && (l = h.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var p = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = h[p++], l--;
          this._bufferLength === this.blockSize && (n(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (p = n(this._temp, this._state, h, p, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = h[p++], l--;
        return this;
      }, c.prototype.finish = function(h) {
        if (!this._finished) {
          var l = this._bytesHashed, p = this._bufferLength, m = l / 536870912 | 0, E = l << 3, _ = l % 64 < 56 ? 64 : 128;
          this._buffer[p] = 128;
          for (var x = p + 1; x < _ - 8; x++)
            this._buffer[x] = 0;
          e.writeUint32BE(m, this._buffer, _ - 8), e.writeUint32BE(E, this._buffer, _ - 4), n(this._temp, this._state, this._buffer, 0, _), this._finished = !0;
        }
        for (var x = 0; x < this.digestLength / 4; x++)
          e.writeUint32BE(this._state[x], h, x * 4);
        return this;
      }, c.prototype.digest = function() {
        var h = new Uint8Array(this.digestLength);
        return this.finish(h), h;
      }, c.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, c.prototype.restoreState = function(h) {
        return this._state.set(h.state), this._bufferLength = h.bufferLength, h.buffer && this._buffer.set(h.buffer), this._bytesHashed = h.bytesHashed, this._finished = !1, this;
      }, c.prototype.cleanSavedState = function(h) {
        r.wipe(h.state), h.buffer && r.wipe(h.buffer), h.bufferLength = 0, h.bytesHashed = 0;
      }, c;
    }()
  );
  t.SHA256 = i;
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
  function n(c, h, l, p, m) {
    for (; m >= 64; ) {
      for (var E = h[0], _ = h[1], x = h[2], R = h[3], L = h[4], q = h[5], v = h[6], O = h[7], y = 0; y < 16; y++) {
        var w = p + y * 4;
        c[y] = e.readUint32BE(l, w);
      }
      for (var y = 16; y < 64; y++) {
        var d = c[y - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = c[y - 15];
        var f = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        c[y] = (o + c[y - 7] | 0) + (f + c[y - 16] | 0);
      }
      for (var y = 0; y < 64; y++) {
        var o = (((L >>> 6 | L << 26) ^ (L >>> 11 | L << 21) ^ (L >>> 25 | L << 7)) + (L & q ^ ~L & v) | 0) + (O + (s[y] + c[y] | 0) | 0) | 0, f = ((E >>> 2 | E << 32 - 2) ^ (E >>> 13 | E << 32 - 13) ^ (E >>> 22 | E << 32 - 22)) + (E & _ ^ E & x ^ _ & x) | 0;
        O = v, v = q, q = L, L = R + o | 0, R = x, x = _, _ = E, E = o + f | 0;
      }
      h[0] += E, h[1] += _, h[2] += x, h[3] += R, h[4] += L, h[5] += q, h[6] += v, h[7] += O, p += 64, m -= 64;
    }
    return p;
  }
  function u(c) {
    var h = new i();
    h.update(c);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = u;
})(Ki);
var zs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Pr, r = St;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function i(y) {
    const w = new Float64Array(16);
    if (y)
      for (let d = 0; d < y.length; d++)
        w[d] = y[d];
    return w;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const n = i([56129, 1]);
  function u(y) {
    let w = 1;
    for (let d = 0; d < 16; d++) {
      let o = y[d] + w + 65535;
      w = Math.floor(o / 65536), y[d] = o - w * 65536;
    }
    y[0] += w - 1 + 37 * (w - 1);
  }
  function c(y, w, d) {
    const o = ~(d - 1);
    for (let f = 0; f < 16; f++) {
      const P = o & (y[f] ^ w[f]);
      y[f] ^= P, w[f] ^= P;
    }
  }
  function h(y, w) {
    const d = i(), o = i();
    for (let f = 0; f < 16; f++)
      o[f] = w[f];
    u(o), u(o), u(o);
    for (let f = 0; f < 2; f++) {
      d[0] = o[0] - 65517;
      for (let T = 1; T < 15; T++)
        d[T] = o[T] - 65535 - (d[T - 1] >> 16 & 1), d[T - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const P = d[15] >> 16 & 1;
      d[14] &= 65535, c(o, d, 1 - P);
    }
    for (let f = 0; f < 16; f++)
      y[2 * f] = o[f] & 255, y[2 * f + 1] = o[f] >> 8;
  }
  function l(y, w) {
    for (let d = 0; d < 16; d++)
      y[d] = w[2 * d] + (w[2 * d + 1] << 8);
    y[15] &= 32767;
  }
  function p(y, w, d) {
    for (let o = 0; o < 16; o++)
      y[o] = w[o] + d[o];
  }
  function m(y, w, d) {
    for (let o = 0; o < 16; o++)
      y[o] = w[o] - d[o];
  }
  function E(y, w, d) {
    let o, f, P = 0, T = 0, U = 0, H = 0, G = 0, D = 0, N = 0, W = 0, B = 0, M = 0, j = 0, F = 0, z = 0, te = 0, K = 0, Z = 0, J = 0, ee = 0, C = 0, A = 0, S = 0, a = 0, b = 0, V = 0, Y = 0, le = 0, be = 0, de = 0, _e = 0, Fe = 0, Te = 0, ye = d[0], pe = d[1], fe = d[2], ue = d[3], ce = d[4], ae = d[5], oe = d[6], re = d[7], he = d[8], ge = d[9], ie = d[10], we = d[11], ve = d[12], De = d[13], Se = d[14], Ee = d[15];
    o = w[0], P += o * ye, T += o * pe, U += o * fe, H += o * ue, G += o * ce, D += o * ae, N += o * oe, W += o * re, B += o * he, M += o * ge, j += o * ie, F += o * we, z += o * ve, te += o * De, K += o * Se, Z += o * Ee, o = w[1], T += o * ye, U += o * pe, H += o * fe, G += o * ue, D += o * ce, N += o * ae, W += o * oe, B += o * re, M += o * he, j += o * ge, F += o * ie, z += o * we, te += o * ve, K += o * De, Z += o * Se, J += o * Ee, o = w[2], U += o * ye, H += o * pe, G += o * fe, D += o * ue, N += o * ce, W += o * ae, B += o * oe, M += o * re, j += o * he, F += o * ge, z += o * ie, te += o * we, K += o * ve, Z += o * De, J += o * Se, ee += o * Ee, o = w[3], H += o * ye, G += o * pe, D += o * fe, N += o * ue, W += o * ce, B += o * ae, M += o * oe, j += o * re, F += o * he, z += o * ge, te += o * ie, K += o * we, Z += o * ve, J += o * De, ee += o * Se, C += o * Ee, o = w[4], G += o * ye, D += o * pe, N += o * fe, W += o * ue, B += o * ce, M += o * ae, j += o * oe, F += o * re, z += o * he, te += o * ge, K += o * ie, Z += o * we, J += o * ve, ee += o * De, C += o * Se, A += o * Ee, o = w[5], D += o * ye, N += o * pe, W += o * fe, B += o * ue, M += o * ce, j += o * ae, F += o * oe, z += o * re, te += o * he, K += o * ge, Z += o * ie, J += o * we, ee += o * ve, C += o * De, A += o * Se, S += o * Ee, o = w[6], N += o * ye, W += o * pe, B += o * fe, M += o * ue, j += o * ce, F += o * ae, z += o * oe, te += o * re, K += o * he, Z += o * ge, J += o * ie, ee += o * we, C += o * ve, A += o * De, S += o * Se, a += o * Ee, o = w[7], W += o * ye, B += o * pe, M += o * fe, j += o * ue, F += o * ce, z += o * ae, te += o * oe, K += o * re, Z += o * he, J += o * ge, ee += o * ie, C += o * we, A += o * ve, S += o * De, a += o * Se, b += o * Ee, o = w[8], B += o * ye, M += o * pe, j += o * fe, F += o * ue, z += o * ce, te += o * ae, K += o * oe, Z += o * re, J += o * he, ee += o * ge, C += o * ie, A += o * we, S += o * ve, a += o * De, b += o * Se, V += o * Ee, o = w[9], M += o * ye, j += o * pe, F += o * fe, z += o * ue, te += o * ce, K += o * ae, Z += o * oe, J += o * re, ee += o * he, C += o * ge, A += o * ie, S += o * we, a += o * ve, b += o * De, V += o * Se, Y += o * Ee, o = w[10], j += o * ye, F += o * pe, z += o * fe, te += o * ue, K += o * ce, Z += o * ae, J += o * oe, ee += o * re, C += o * he, A += o * ge, S += o * ie, a += o * we, b += o * ve, V += o * De, Y += o * Se, le += o * Ee, o = w[11], F += o * ye, z += o * pe, te += o * fe, K += o * ue, Z += o * ce, J += o * ae, ee += o * oe, C += o * re, A += o * he, S += o * ge, a += o * ie, b += o * we, V += o * ve, Y += o * De, le += o * Se, be += o * Ee, o = w[12], z += o * ye, te += o * pe, K += o * fe, Z += o * ue, J += o * ce, ee += o * ae, C += o * oe, A += o * re, S += o * he, a += o * ge, b += o * ie, V += o * we, Y += o * ve, le += o * De, be += o * Se, de += o * Ee, o = w[13], te += o * ye, K += o * pe, Z += o * fe, J += o * ue, ee += o * ce, C += o * ae, A += o * oe, S += o * re, a += o * he, b += o * ge, V += o * ie, Y += o * we, le += o * ve, be += o * De, de += o * Se, _e += o * Ee, o = w[14], K += o * ye, Z += o * pe, J += o * fe, ee += o * ue, C += o * ce, A += o * ae, S += o * oe, a += o * re, b += o * he, V += o * ge, Y += o * ie, le += o * we, be += o * ve, de += o * De, _e += o * Se, Fe += o * Ee, o = w[15], Z += o * ye, J += o * pe, ee += o * fe, C += o * ue, A += o * ce, S += o * ae, a += o * oe, b += o * re, V += o * he, Y += o * ge, le += o * ie, be += o * we, de += o * ve, _e += o * De, Fe += o * Se, Te += o * Ee, P += 38 * J, T += 38 * ee, U += 38 * C, H += 38 * A, G += 38 * S, D += 38 * a, N += 38 * b, W += 38 * V, B += 38 * Y, M += 38 * le, j += 38 * be, F += 38 * de, z += 38 * _e, te += 38 * Fe, K += 38 * Te, f = 1, o = P + f + 65535, f = Math.floor(o / 65536), P = o - f * 65536, o = T + f + 65535, f = Math.floor(o / 65536), T = o - f * 65536, o = U + f + 65535, f = Math.floor(o / 65536), U = o - f * 65536, o = H + f + 65535, f = Math.floor(o / 65536), H = o - f * 65536, o = G + f + 65535, f = Math.floor(o / 65536), G = o - f * 65536, o = D + f + 65535, f = Math.floor(o / 65536), D = o - f * 65536, o = N + f + 65535, f = Math.floor(o / 65536), N = o - f * 65536, o = W + f + 65535, f = Math.floor(o / 65536), W = o - f * 65536, o = B + f + 65535, f = Math.floor(o / 65536), B = o - f * 65536, o = M + f + 65535, f = Math.floor(o / 65536), M = o - f * 65536, o = j + f + 65535, f = Math.floor(o / 65536), j = o - f * 65536, o = F + f + 65535, f = Math.floor(o / 65536), F = o - f * 65536, o = z + f + 65535, f = Math.floor(o / 65536), z = o - f * 65536, o = te + f + 65535, f = Math.floor(o / 65536), te = o - f * 65536, o = K + f + 65535, f = Math.floor(o / 65536), K = o - f * 65536, o = Z + f + 65535, f = Math.floor(o / 65536), Z = o - f * 65536, P += f - 1 + 37 * (f - 1), f = 1, o = P + f + 65535, f = Math.floor(o / 65536), P = o - f * 65536, o = T + f + 65535, f = Math.floor(o / 65536), T = o - f * 65536, o = U + f + 65535, f = Math.floor(o / 65536), U = o - f * 65536, o = H + f + 65535, f = Math.floor(o / 65536), H = o - f * 65536, o = G + f + 65535, f = Math.floor(o / 65536), G = o - f * 65536, o = D + f + 65535, f = Math.floor(o / 65536), D = o - f * 65536, o = N + f + 65535, f = Math.floor(o / 65536), N = o - f * 65536, o = W + f + 65535, f = Math.floor(o / 65536), W = o - f * 65536, o = B + f + 65535, f = Math.floor(o / 65536), B = o - f * 65536, o = M + f + 65535, f = Math.floor(o / 65536), M = o - f * 65536, o = j + f + 65535, f = Math.floor(o / 65536), j = o - f * 65536, o = F + f + 65535, f = Math.floor(o / 65536), F = o - f * 65536, o = z + f + 65535, f = Math.floor(o / 65536), z = o - f * 65536, o = te + f + 65535, f = Math.floor(o / 65536), te = o - f * 65536, o = K + f + 65535, f = Math.floor(o / 65536), K = o - f * 65536, o = Z + f + 65535, f = Math.floor(o / 65536), Z = o - f * 65536, P += f - 1 + 37 * (f - 1), y[0] = P, y[1] = T, y[2] = U, y[3] = H, y[4] = G, y[5] = D, y[6] = N, y[7] = W, y[8] = B, y[9] = M, y[10] = j, y[11] = F, y[12] = z, y[13] = te, y[14] = K, y[15] = Z;
  }
  function _(y, w) {
    E(y, w, w);
  }
  function x(y, w) {
    const d = i();
    for (let o = 0; o < 16; o++)
      d[o] = w[o];
    for (let o = 253; o >= 0; o--)
      _(d, d), o !== 2 && o !== 4 && E(d, d, w);
    for (let o = 0; o < 16; o++)
      y[o] = d[o];
  }
  function R(y, w) {
    const d = new Uint8Array(32), o = new Float64Array(80), f = i(), P = i(), T = i(), U = i(), H = i(), G = i();
    for (let B = 0; B < 31; B++)
      d[B] = y[B];
    d[31] = y[31] & 127 | 64, d[0] &= 248, l(o, w);
    for (let B = 0; B < 16; B++)
      P[B] = o[B];
    f[0] = U[0] = 1;
    for (let B = 254; B >= 0; --B) {
      const M = d[B >>> 3] >>> (B & 7) & 1;
      c(f, P, M), c(T, U, M), p(H, f, T), m(f, f, T), p(T, P, U), m(P, P, U), _(U, H), _(G, f), E(f, T, f), E(T, P, H), p(H, f, T), m(f, f, T), _(P, f), m(T, U, G), E(f, T, n), p(f, f, U), E(T, T, f), E(f, U, G), E(U, P, o), _(P, H), c(f, P, M), c(T, U, M);
    }
    for (let B = 0; B < 16; B++)
      o[B + 16] = f[B], o[B + 32] = T[B], o[B + 48] = P[B], o[B + 64] = U[B];
    const D = o.subarray(32), N = o.subarray(16);
    x(D, D), E(N, N, D);
    const W = new Uint8Array(32);
    return h(W, N), W;
  }
  t.scalarMult = R;
  function L(y) {
    return R(y, s);
  }
  t.scalarMultBase = L;
  function q(y) {
    if (y.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(y);
    return {
      publicKey: L(w),
      secretKey: w
    };
  }
  t.generateKeyPairFromSeed = q;
  function v(y) {
    const w = (0, e.randomBytes)(32, y), d = q(w);
    return (0, r.wipe)(w), d;
  }
  t.generateKeyPair = v;
  function O(y, w, d = !1) {
    if (y.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = R(y, w);
    if (d) {
      let f = 0;
      for (let P = 0; P < o.length; P++)
        f |= o[P];
      if (f === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  t.sharedKey = O;
})(zs);
var oo = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, s = e.length, n; i < s; i++)
      (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Qf = (
  /** @class */
  function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Xf = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Zf = (
  /** @class */
  function() {
    function t(e, r, i, s) {
      this.name = e, this.version = r, this.os = i, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), ed = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), td = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), rd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, id = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ao = 3, sd = [
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
  ["searchbot", rd]
], co = [
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
function nd(t) {
  return t ? uo(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new td() : typeof navigator < "u" ? uo(navigator.userAgent) : cd();
}
function od(t) {
  return t !== "" && sd.reduce(function(e, r) {
    var i = r[0], s = r[1];
    if (e)
      return e;
    var n = s.exec(t);
    return !!n && [i, n];
  }, !1);
}
function uo(t) {
  var e = od(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new ed();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < ao && (s = oo(oo([], s, !0), ud(ao - s.length), !0)) : s = [];
  var n = s.join("."), u = ad(t), c = id.exec(t);
  return c && c[1] ? new Zf(r, n, u, c[1]) : new Qf(r, n, u);
}
function ad(t) {
  for (var e = 0, r = co.length; e < r; e++) {
    var i = co[e], s = i[0], n = i[1], u = n.exec(t);
    if (u)
      return s;
  }
  return null;
}
function cd() {
  var t = typeof process < "u" && process.version;
  return t ? new Xf(process.version.slice(1)) : null;
}
function ud(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.getLocalStorage = xe.getLocalStorageOrThrow = xe.getCrypto = xe.getCryptoOrThrow = Ha = xe.getLocation = xe.getLocationOrThrow = Ks = xe.getNavigator = xe.getNavigatorOrThrow = Ka = xe.getDocument = xe.getDocumentOrThrow = xe.getFromWindowOrThrow = xe.getFromWindow = void 0;
function vr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
xe.getFromWindow = vr;
function Rr(t) {
  const e = vr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
xe.getFromWindowOrThrow = Rr;
function hd() {
  return Rr("document");
}
xe.getDocumentOrThrow = hd;
function ld() {
  return vr("document");
}
var Ka = xe.getDocument = ld;
function fd() {
  return Rr("navigator");
}
xe.getNavigatorOrThrow = fd;
function dd() {
  return vr("navigator");
}
var Ks = xe.getNavigator = dd;
function pd() {
  return Rr("location");
}
xe.getLocationOrThrow = pd;
function gd() {
  return vr("location");
}
var Ha = xe.getLocation = gd;
function yd() {
  return Rr("crypto");
}
xe.getCryptoOrThrow = yd;
function bd() {
  return vr("crypto");
}
xe.getCrypto = bd;
function wd() {
  return Rr("localStorage");
}
xe.getLocalStorageOrThrow = wd;
function md() {
  return vr("localStorage");
}
xe.getLocalStorage = md;
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
var Va = Hs.getWindowMetadata = void 0;
const ho = xe;
function vd() {
  let t, e;
  try {
    t = ho.getDocumentOrThrow(), e = ho.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const m = t.getElementsByTagName("link"), E = [];
    for (let _ = 0; _ < m.length; _++) {
      const x = m[_], R = x.getAttribute("rel");
      if (R && R.toLowerCase().indexOf("icon") > -1) {
        const L = x.getAttribute("href");
        if (L)
          if (L.toLowerCase().indexOf("https:") === -1 && L.toLowerCase().indexOf("http:") === -1 && L.indexOf("//") !== 0) {
            let q = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0)
              q += L;
            else {
              const v = e.pathname.split("/");
              v.pop();
              const O = v.join("/");
              q += O + "/" + L;
            }
            E.push(q);
          } else if (L.indexOf("//") === 0) {
            const q = e.protocol + L;
            E.push(q);
          } else
            E.push(L);
      }
    }
    return E;
  }
  function i(...m) {
    const E = t.getElementsByTagName("meta");
    for (let _ = 0; _ < E.length; _++) {
      const x = E[_], R = ["itemprop", "property", "name"].map((L) => x.getAttribute(L)).filter((L) => L ? m.includes(L) : !1);
      if (R.length && R) {
        const L = x.getAttribute("content");
        if (L)
          return L;
      }
    }
    return "";
  }
  function s() {
    let m = i("name", "og:site_name", "og:title", "twitter:title");
    return m || (m = t.title), m;
  }
  function n() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = s(), c = n(), h = e.origin, l = r();
  return {
    description: c,
    url: h,
    icons: l,
    name: u
  };
}
Va = Hs.getWindowMetadata = vd;
var ti = {}, _d = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Wa = "%[a-f0-9]{2}", lo = new RegExp("(" + Wa + ")|([^%]+?)", "gi"), fo = new RegExp("(" + Wa + ")+", "gi");
function xs(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), i = t.slice(e);
  return Array.prototype.concat.call([], xs(r), xs(i));
}
function Ed(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(lo) || [], r = 1; r < e.length; r++)
      t = xs(e, r).join(""), e = t.match(lo) || [];
    return t;
  }
}
function Dd(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = fo.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = Ed(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = fo.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), n = 0; n < s.length; n++) {
    var u = s[n];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var Sd = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Dd(t);
  }
}, Id = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, xd = function(t, e) {
  for (var r = {}, i = Object.keys(t), s = Array.isArray(e), n = 0; n < i.length; n++) {
    var u = i[n], c = t[u];
    (s ? e.indexOf(u) !== -1 : e(u, c, t)) && (r[u] = c);
  }
  return r;
};
(function(t) {
  const e = _d, r = Sd, i = Id, s = xd, n = (v) => v == null, u = Symbol("encodeFragmentIdentifier");
  function c(v) {
    switch (v.arrayFormat) {
      case "index":
        return (O) => (y, w) => {
          const d = y.length;
          return w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, [p(O, v), "[", d, "]"].join("")] : [
            ...y,
            [p(O, v), "[", p(d, v), "]=", p(w, v)].join("")
          ];
        };
      case "bracket":
        return (O) => (y, w) => w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, [p(O, v), "[]"].join("")] : [...y, [p(O, v), "[]=", p(w, v)].join("")];
      case "colon-list-separator":
        return (O) => (y, w) => w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, [p(O, v), ":list="].join("")] : [...y, [p(O, v), ":list=", p(w, v)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = v.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (y) => (w, d) => d === void 0 || v.skipNull && d === null || v.skipEmptyString && d === "" ? w : (d = d === null ? "" : d, w.length === 0 ? [[p(y, v), O, p(d, v)].join("")] : [[w, p(d, v)].join(v.arrayFormatSeparator)]);
      }
      default:
        return (O) => (y, w) => w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, p(O, v)] : [...y, [p(O, v), "=", p(w, v)].join("")];
    }
  }
  function h(v) {
    let O;
    switch (v.arrayFormat) {
      case "index":
        return (y, w, d) => {
          if (O = /\[(\d*)\]$/.exec(y), y = y.replace(/\[\d*\]$/, ""), !O) {
            d[y] = w;
            return;
          }
          d[y] === void 0 && (d[y] = {}), d[y][O[1]] = w;
        };
      case "bracket":
        return (y, w, d) => {
          if (O = /(\[\])$/.exec(y), y = y.replace(/\[\]$/, ""), !O) {
            d[y] = w;
            return;
          }
          if (d[y] === void 0) {
            d[y] = [w];
            return;
          }
          d[y] = [].concat(d[y], w);
        };
      case "colon-list-separator":
        return (y, w, d) => {
          if (O = /(:list)$/.exec(y), y = y.replace(/:list$/, ""), !O) {
            d[y] = w;
            return;
          }
          if (d[y] === void 0) {
            d[y] = [w];
            return;
          }
          d[y] = [].concat(d[y], w);
        };
      case "comma":
      case "separator":
        return (y, w, d) => {
          const o = typeof w == "string" && w.includes(v.arrayFormatSeparator), f = typeof w == "string" && !o && m(w, v).includes(v.arrayFormatSeparator);
          w = f ? m(w, v) : w;
          const P = o || f ? w.split(v.arrayFormatSeparator).map((T) => m(T, v)) : w === null ? w : m(w, v);
          d[y] = P;
        };
      case "bracket-separator":
        return (y, w, d) => {
          const o = /(\[\])$/.test(y);
          if (y = y.replace(/\[\]$/, ""), !o) {
            d[y] = w && m(w, v);
            return;
          }
          const f = w === null ? [] : w.split(v.arrayFormatSeparator).map((P) => m(P, v));
          if (d[y] === void 0) {
            d[y] = f;
            return;
          }
          d[y] = [].concat(d[y], f);
        };
      default:
        return (y, w, d) => {
          if (d[y] === void 0) {
            d[y] = w;
            return;
          }
          d[y] = [].concat(d[y], w);
        };
    }
  }
  function l(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function p(v, O) {
    return O.encode ? O.strict ? e(v) : encodeURIComponent(v) : v;
  }
  function m(v, O) {
    return O.decode ? r(v) : v;
  }
  function E(v) {
    return Array.isArray(v) ? v.sort() : typeof v == "object" ? E(Object.keys(v)).sort((O, y) => Number(O) - Number(y)).map((O) => v[O]) : v;
  }
  function _(v) {
    const O = v.indexOf("#");
    return O !== -1 && (v = v.slice(0, O)), v;
  }
  function x(v) {
    let O = "";
    const y = v.indexOf("#");
    return y !== -1 && (O = v.slice(y)), O;
  }
  function R(v) {
    v = _(v);
    const O = v.indexOf("?");
    return O === -1 ? "" : v.slice(O + 1);
  }
  function L(v, O) {
    return O.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : O.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"), v;
  }
  function q(v, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), l(O.arrayFormatSeparator);
    const y = h(O), w = /* @__PURE__ */ Object.create(null);
    if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""), !v))
      return w;
    for (const d of v.split("&")) {
      if (d === "")
        continue;
      let [o, f] = i(O.decode ? d.replace(/\+/g, " ") : d, "=");
      f = f === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? f : m(f, O), y(m(o, O), f, w);
    }
    for (const d of Object.keys(w)) {
      const o = w[d];
      if (typeof o == "object" && o !== null)
        for (const f of Object.keys(o))
          o[f] = L(o[f], O);
      else
        w[d] = L(o, O);
    }
    return O.sort === !1 ? w : (O.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(O.sort)).reduce((d, o) => {
      const f = w[o];
      return f && typeof f == "object" && !Array.isArray(f) ? d[o] = E(f) : d[o] = f, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = R, t.parse = q, t.stringify = (v, O) => {
    if (!v)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), l(O.arrayFormatSeparator);
    const y = (f) => O.skipNull && n(v[f]) || O.skipEmptyString && v[f] === "", w = c(O), d = {};
    for (const f of Object.keys(v))
      y(f) || (d[f] = v[f]);
    const o = Object.keys(d);
    return O.sort !== !1 && o.sort(O.sort), o.map((f) => {
      const P = v[f];
      return P === void 0 ? "" : P === null ? p(f, O) : Array.isArray(P) ? P.length === 0 && O.arrayFormat === "bracket-separator" ? p(f, O) + "[]" : P.reduce(w(f), []).join("&") : p(f, O) + "=" + p(P, O);
    }).filter((f) => f.length > 0).join("&");
  }, t.parseUrl = (v, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [y, w] = i(v, "#");
    return Object.assign(
      {
        url: y.split("?")[0] || "",
        query: q(R(v), O)
      },
      O && O.parseFragmentIdentifier && w ? { fragmentIdentifier: m(w, O) } : {}
    );
  }, t.stringifyUrl = (v, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, O);
    const y = _(v.url).split("?")[0] || "", w = t.extract(v.url), d = t.parse(w, { sort: !1 }), o = Object.assign(d, v.query);
    let f = t.stringify(o, O);
    f && (f = `?${f}`);
    let P = x(v.url);
    return v.fragmentIdentifier && (P = `#${O[u] ? p(v.fragmentIdentifier, O) : v.fragmentIdentifier}`), `${y}${f}${P}`;
  }, t.pick = (v, O, y) => {
    y = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, y);
    const { url: w, query: d, fragmentIdentifier: o } = t.parseUrl(v, y);
    return t.stringifyUrl({
      url: w,
      query: s(d, O),
      fragmentIdentifier: o
    }, y);
  }, t.exclude = (v, O, y) => {
    const w = Array.isArray(O) ? (d) => !O.includes(d) : (d, o) => !O(d, o);
    return t.pick(v, w, y);
  };
})(ti);
const Od = {
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
function ka(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Ga = "base10", gt = "base16", Os = "base64pad", Vs = "utf8", Ya = 0, _r = 1, Ad = 0, po = 1, As = 12, Ws = 32;
function Cd() {
  const t = zs.generateKeyPair();
  return { privateKey: yt(t.secretKey, gt), publicKey: yt(t.publicKey, gt) };
}
function Cs() {
  const t = Pr.randomBytes(Ws);
  return yt(t, gt);
}
function Nd(t, e) {
  const r = zs.sharedKey(mt(t, gt), mt(e, gt)), i = new Jf(Ki.SHA256, r).expand(Ws);
  return yt(i, gt);
}
function Td(t) {
  const e = Ki.hash(mt(t, gt));
  return yt(e, gt);
}
function Cr(t) {
  const e = Ki.hash(mt(t, Vs));
  return yt(e, gt);
}
function Pd(t) {
  return mt(`${t}`, Ga);
}
function ai(t) {
  return Number(yt(t, Ga));
}
function Rd(t) {
  const e = Pd(typeof t.type < "u" ? t.type : Ya);
  if (ai(e) === _r && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? mt(t.senderPublicKey, gt) : void 0, i = typeof t.iv < "u" ? mt(t.iv, gt) : Pr.randomBytes(As), s = new qs.ChaCha20Poly1305(mt(t.symKey, gt)).seal(i, mt(t.message, Vs));
  return Ud({ type: e, sealed: s, iv: i, senderPublicKey: r });
}
function Ld(t) {
  const e = new qs.ChaCha20Poly1305(mt(t.symKey, gt)), { sealed: r, iv: i } = Ti(t.encoded), s = e.open(i, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return yt(s, Vs);
}
function Ud(t) {
  if (ai(t.type) === _r) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return yt(Ss([t.type, t.senderPublicKey, t.iv, t.sealed]), Os);
  }
  return yt(Ss([t.type, t.iv, t.sealed]), Os);
}
function Ti(t) {
  const e = mt(t, Os), r = e.slice(Ad, po), i = po;
  if (ai(r) === _r) {
    const c = i + Ws, h = c + As, l = e.slice(i, c), p = e.slice(c, h), m = e.slice(h);
    return { type: r, sealed: m, iv: p, senderPublicKey: l };
  }
  const s = i + As, n = e.slice(i, s), u = e.slice(s);
  return { type: r, sealed: u, iv: n };
}
function Fd(t, e) {
  const r = Ti(t);
  return Ja({ type: ai(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? yt(r.senderPublicKey, gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Ja(t) {
  const e = (t == null ? void 0 : t.type) || Ya;
  if (e === _r) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function go(t) {
  return t.type === _r && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Md = Object.defineProperty, yo = Object.getOwnPropertySymbols, $d = Object.prototype.hasOwnProperty, jd = Object.prototype.propertyIsEnumerable, bo = (t, e, r) => e in t ? Md(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wo = (t, e) => {
  for (var r in e || (e = {}))
    $d.call(e, r) && bo(t, r, e[r]);
  if (yo)
    for (var r of yo(e))
      jd.call(e, r) && bo(t, r, e[r]);
  return t;
};
const qd = "ReactNative", Dt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Bd = "js";
function ks() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Hi() {
  return !Ka() && !!Ks() && navigator.product === qd;
}
function ci() {
  return !ks() && !!Ks();
}
function ui() {
  return Hi() ? Dt.reactNative : ks() ? Dt.node : ci() ? Dt.browser : Dt.unknown;
}
function zd(t, e) {
  let r = ti.parse(t);
  return r = wo(wo({}, r), e), t = ti.stringify(r), t;
}
function Kd() {
  return Va() || { name: "", description: "", url: "", icons: [""] };
}
function Hd() {
  if (ui() === Dt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = nd();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Vd() {
  var t;
  const e = ui();
  return e === Dt.browser ? [e, ((t = Ha()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Wd(t, e, r) {
  const i = Hd(), s = Vd();
  return [[t, e].join("-"), [Bd, r].join("-"), i, s].join("/");
}
function kd({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: s, projectId: n, useOnCloseEvent: u }) {
  const c = r.split("?"), h = Wd(t, e, i), l = { auth: s, ua: h, projectId: n, useOnCloseEvent: u || void 0 }, p = zd(c[1] || "", l);
  return c[0] + "?" + p;
}
function gr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Qa(t) {
  return Object.fromEntries(t.entries());
}
function Xa(t) {
  return new Map(Object.entries(t));
}
function xr(t = X.FIVE_MINUTES, e) {
  const r = X.toMiliseconds(t || X.FIVE_MINUTES);
  let i, s, n;
  return { resolve: (u) => {
    n && i && (clearTimeout(n), i(u));
  }, reject: (u) => {
    n && s && (clearTimeout(n), s(u));
  }, done: () => new Promise((u, c) => {
    n = setTimeout(() => {
      c(new Error(e));
    }, r), i = u, s = c;
  }) };
}
function ri(t, e, r) {
  return new Promise(async (i, s) => {
    const n = setTimeout(() => s(new Error(r)), e);
    try {
      const u = await t;
      i(u);
    } catch (u) {
      s(u);
    }
    clearTimeout(n);
  });
}
function Za(t, e) {
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
function Gd(t) {
  return Za("topic", t);
}
function Yd(t) {
  return Za("id", t);
}
function ec(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function Tt(t, e) {
  return X.fromMiliseconds((e || Date.now()) + X.toMiliseconds(t));
}
function Zt(t) {
  return Date.now() >= X.toMiliseconds(t);
}
function ze(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Jd({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let s = i == null ? void 0 : i.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const n = `${s}/wc?requestId=${t}&sessionTopic=${e}`, u = ui();
    u === Dt.browser ? n.startsWith("https://") ? window.open(n, "_blank", "noreferrer noopener") : window.open(n, "_self", "noreferrer noopener") : u === Dt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(n);
  } catch (i) {
    console.error(i);
  }
}
const Qd = "irn";
function Ns(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Qd };
}
function Ii(t) {
  const e = Od[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Xd = Object.defineProperty, mo = Object.getOwnPropertySymbols, Zd = Object.prototype.hasOwnProperty, ep = Object.prototype.propertyIsEnumerable, vo = (t, e, r) => e in t ? Xd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, tp = (t, e) => {
  for (var r in e || (e = {}))
    Zd.call(e, r) && vo(t, r, e[r]);
  if (mo)
    for (var r of mo(e))
      ep.call(e, r) && vo(t, r, e[r]);
  return t;
};
function rp(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(i)) {
      const n = s.replace(i, ""), u = t[s];
      r[n] = u;
    }
  }), r;
}
function ip(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), s = t.substring(e + 1, r).split("@"), n = typeof r < "u" ? t.substring(r) : "", u = ti.parse(n);
  return { protocol: i, topic: sp(s[0]), version: parseInt(s[1], 10), symKey: u.symKey, relay: rp(u) };
}
function sp(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function np(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((s) => {
    const n = r + e + s;
    t[s] && (i[n] = t[s]);
  }), i;
}
function op(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ti.stringify(tp({ symKey: t.symKey }, np(t.relay)));
}
function Lr(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, s] = r.split(":");
    e.push(`${i}:${s}`);
  }), e;
}
function ap(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Lr(r.accounts));
  }), e;
}
function cp(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Lr(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function up(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Lr(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function hp(t, e) {
  const r = xi(t, e);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [s, n] of Object.entries(t))
    i[s] = { methods: n.methods, events: n.events, chains: n.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const lp = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, fp = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function k(t, e) {
  const { message: r, code: i } = fp[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function He(t, e) {
  const { message: r, code: i } = lp[t];
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
function Gs(t, e) {
  return e && pt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function dp(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), s = Object.keys(r);
  let n = !0;
  return gr(s, i) ? (i.forEach((u) => {
    const { accounts: c, methods: h, events: l } = t.namespaces[u], p = Lr(c), m = r[u];
    (!gr(ka(u, m), p) || !gr(m.methods, h) || !gr(m.events, l)) && (n = !1);
  }), n) : !1;
}
function Pi(t) {
  return tt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function pp(t) {
  if (tt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Pi(r);
    }
  }
  return !1;
}
function gp(t) {
  if (tt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function yp(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function bp(t) {
  return t == null ? void 0 : t.topic;
}
function wp(t, e) {
  let r = null;
  return tt(t == null ? void 0 : t.publicKey, !1) || (r = k("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function _o(t) {
  let e = !0;
  return hi(t) ? t.length && (e = t.every((r) => tt(r, !1))) : e = !1, e;
}
function mp(t, e, r) {
  let i = null;
  return hi(e) && e.length ? e.forEach((s) => {
    i || Pi(s) || (i = He("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Pi(t) || (i = He("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function vp(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([s, n]) => {
    if (i)
      return;
    const u = mp(s, ka(s, n), `${e} ${r}`);
    u && (i = u);
  }), i;
}
function _p(t, e) {
  let r = null;
  return hi(t) ? t.forEach((i) => {
    r || pp(i) || (r = He("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = He("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Ep(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const s = _p(i == null ? void 0 : i.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function Dp(t, e) {
  let r = null;
  return _o(t == null ? void 0 : t.methods) ? _o(t == null ? void 0 : t.events) || (r = He("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = He("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function tc(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const s = Dp(i, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function Sp(t, e, r) {
  let i = null;
  if (t && Xr(t)) {
    const s = tc(t, e);
    s && (i = s);
    const n = vp(t, e, r);
    n && (i = n);
  } else
    i = k("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function xi(t, e) {
  let r = null;
  if (t && Xr(t)) {
    const i = tc(t, e);
    i && (r = i);
    const s = Ep(t, e);
    s && (r = s);
  } else
    r = k("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function rc(t) {
  return tt(t.protocol, !0);
}
function Ip(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && hi(t) && t.length && t.forEach((i) => {
    r = rc(i);
  }), r;
}
function xp(t) {
  return typeof t == "number";
}
function wt(t) {
  return typeof t < "u" && typeof t !== null;
}
function Op(t) {
  return !(!t || typeof t != "object" || !t.code || !Gs(t.code, !1) || !t.message || !tt(t.message, !1));
}
function Ap(t) {
  return !(pt(t) || !tt(t.method, !1));
}
function Cp(t) {
  return !(pt(t) || pt(t.result) && pt(t.error) || !Gs(t.id, !1) || !tt(t.jsonrpc, !1));
}
function Np(t) {
  return !(pt(t) || !tt(t.name, !1));
}
function Eo(t, e) {
  return !(!Pi(e) || !ap(t).includes(e));
}
function Tp(t, e, r) {
  return tt(r, !1) ? cp(t, e).includes(r) : !1;
}
function Pp(t, e, r) {
  return tt(r, !1) ? up(t, e).includes(r) : !1;
}
function Do(t, e, r) {
  let i = null;
  const s = Rp(t), n = Lp(e), u = Object.keys(s), c = Object.keys(n), h = So(Object.keys(t)), l = So(Object.keys(e)), p = h.filter((m) => !l.includes(m));
  return p.length && (i = k("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), gr(u, c) || (i = k("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((m) => {
    if (!m.includes(":") || i)
      return;
    const E = Lr(e[m].accounts);
    E.includes(m) || (i = k("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${m}
        Required: ${m}
        Approved: ${E.toString()}`));
  }), u.forEach((m) => {
    i || (gr(s[m].methods, n[m].methods) ? gr(s[m].events, n[m].events) || (i = k("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${m}`)) : i = k("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${m}`));
  }), i;
}
function Rp(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function So(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Lp(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = Lr(t[r].accounts);
      i == null || i.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((n) => n.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Up(t, e) {
  return Gs(t, !1) && t <= e.max && t >= e.min;
}
function Io() {
  const t = ui();
  return new Promise((e) => {
    switch (t) {
      case Dt.browser:
        e(Fp());
        break;
      case Dt.reactNative:
        e(Mp());
        break;
      case Dt.node:
        e($p());
        break;
      default:
        e(!0);
    }
  });
}
function Fp() {
  return ci() && (navigator == null ? void 0 : navigator.onLine);
}
async function Mp() {
  if (Hi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function $p() {
  return !0;
}
function jp(t) {
  switch (ui()) {
    case Dt.browser:
      qp(t);
      break;
    case Dt.reactNative:
      Bp(t);
      break;
  }
}
function qp(t) {
  ci() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Bp(t) {
  Hi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const as = {};
let Ei = class {
  static get(e) {
    return as[e];
  }
  static set(e, r) {
    as[e] = r;
  }
  static delete(e) {
    delete as[e];
  }
};
const zp = "PARSE_ERROR", Kp = "INVALID_REQUEST", Hp = "METHOD_NOT_FOUND", Vp = "INVALID_PARAMS", ic = "INTERNAL_ERROR", Ys = "SERVER_ERROR", Wp = [-32700, -32600, -32601, -32602, -32603], Zr = {
  [zp]: { code: -32700, message: "Parse error" },
  [Kp]: { code: -32600, message: "Invalid Request" },
  [Hp]: { code: -32601, message: "Method not found" },
  [Vp]: { code: -32602, message: "Invalid params" },
  [ic]: { code: -32603, message: "Internal error" },
  [Ys]: { code: -32e3, message: "Server error" }
}, sc = Ys;
function kp(t) {
  return Wp.includes(t);
}
function xo(t) {
  return Object.keys(Zr).includes(t) ? Zr[t] : Zr[sc];
}
function Gp(t) {
  const e = Object.values(Zr).find((r) => r.code === t);
  return e || Zr[sc];
}
function Yp(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var nc = {}, Kt = {}, Oo;
function Jp() {
  if (Oo)
    return Kt;
  Oo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.isBrowserCryptoAvailable = Kt.getSubtleCrypto = Kt.getBrowerCrypto = void 0;
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
var Ht = {}, Ao;
function Qp() {
  if (Ao)
    return Ht;
  Ao = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.isBrowser = Ht.isNode = Ht.isReactNative = void 0;
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
  e.__exportStar(Jp(), t), e.__exportStar(Qp(), t);
})(nc);
function Js(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function oc(t = 6) {
  return BigInt(Js(t));
}
function ii(t, e, r) {
  return {
    id: r || Js(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Qs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Xs(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Xp(e, r)
  };
}
function Xp(t, e) {
  return typeof t > "u" ? xo(ic) : (typeof t == "string" && (t = Object.assign(Object.assign({}, xo(Ys)), { message: t })), typeof e < "u" && (t.data = e), kp(t.code) && (t = Gp(t.code)), t);
}
class Zp {
}
class eg extends Zp {
  constructor() {
    super();
  }
}
class tg extends eg {
  constructor(e) {
    super();
  }
}
const rg = "^wss?:";
function ig(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function sg(t, e) {
  const r = ig(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Co(t) {
  return sg(t, rg);
}
function ng(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function ac(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Zs(t) {
  return ac(t) && "method" in t;
}
function Vi(t) {
  return ac(t) && (kt(t) || Pt(t));
}
function kt(t) {
  return "result" in t;
}
function Pt(t) {
  return "error" in t;
}
class og extends tg {
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
    return this.requestStrict(ii(e.method, e.params || [], e.id || oc().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n) {
          s(n);
        }
      this.events.on(`${e.id}`, (n) => {
        Pt(n) ? s(n.error) : i(n.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (n) {
        s(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Vi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const ag = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), cg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", No = (t) => t.split("?")[0], To = 10, ug = ag();
class hg {
  constructor(e) {
    if (this.url = e, this.events = new Lt.EventEmitter(), this.registering = !1, !Co(e))
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
      this.socket.send(Ms(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Co(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, s) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), s(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return s(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, i) => {
      const s = nc.isReactNative() ? void 0 : { rejectUnauthorized: !ng(e) }, n = new ug(e, [], s);
      cg() ? n.onerror = (u) => {
        const c = u;
        i(this.emitError(c.error));
      } : n.on("error", (u) => {
        i(this.emitError(u));
      }), n.onopen = () => {
        this.onOpen(n), r(n);
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
    const r = typeof e.data == "string" ? Ea(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), s = i.message || i.toString(), n = Xs(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return Yp(e, No(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > To && this.events.setMaxListeners(To);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${No(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ri = { exports: {} };
Ri.exports;
(function(t, e) {
  var r = 200, i = "__lodash_hash_undefined__", s = 1, n = 2, u = 9007199254740991, c = "[object Arguments]", h = "[object Array]", l = "[object AsyncFunction]", p = "[object Boolean]", m = "[object Date]", E = "[object Error]", _ = "[object Function]", x = "[object GeneratorFunction]", R = "[object Map]", L = "[object Number]", q = "[object Null]", v = "[object Object]", O = "[object Promise]", y = "[object Proxy]", w = "[object RegExp]", d = "[object Set]", o = "[object String]", f = "[object Symbol]", P = "[object Undefined]", T = "[object WeakMap]", U = "[object ArrayBuffer]", H = "[object DataView]", G = "[object Float32Array]", D = "[object Float64Array]", N = "[object Int8Array]", W = "[object Int16Array]", B = "[object Int32Array]", M = "[object Uint8Array]", j = "[object Uint8ClampedArray]", F = "[object Uint16Array]", z = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, J = {};
  J[G] = J[D] = J[N] = J[W] = J[B] = J[M] = J[j] = J[F] = J[z] = !0, J[c] = J[h] = J[U] = J[p] = J[H] = J[m] = J[E] = J[_] = J[R] = J[L] = J[v] = J[w] = J[d] = J[o] = J[T] = !1;
  var ee = typeof Et == "object" && Et && Et.Object === Object && Et, C = typeof self == "object" && self && self.Object === Object && self, A = ee || C || Function("return this")(), S = e && !e.nodeType && e, a = S && !0 && t && !t.nodeType && t, b = a && a.exports === S, V = b && ee.process, Y = function() {
    try {
      return V && V.binding && V.binding("util");
    } catch {
    }
  }(), le = Y && Y.isTypedArray;
  function be(g, I) {
    for (var $ = -1, Q = g == null ? 0 : g.length, Oe = 0, ne = []; ++$ < Q; ) {
      var Le = g[$];
      I(Le, $, g) && (ne[Oe++] = Le);
    }
    return ne;
  }
  function de(g, I) {
    for (var $ = -1, Q = I.length, Oe = g.length; ++$ < Q; )
      g[Oe + $] = I[$];
    return g;
  }
  function _e(g, I) {
    for (var $ = -1, Q = g == null ? 0 : g.length; ++$ < Q; )
      if (I(g[$], $, g))
        return !0;
    return !1;
  }
  function Fe(g, I) {
    for (var $ = -1, Q = Array(g); ++$ < g; )
      Q[$] = I($);
    return Q;
  }
  function Te(g) {
    return function(I) {
      return g(I);
    };
  }
  function ye(g, I) {
    return g.has(I);
  }
  function pe(g, I) {
    return g == null ? void 0 : g[I];
  }
  function fe(g) {
    var I = -1, $ = Array(g.size);
    return g.forEach(function(Q, Oe) {
      $[++I] = [Oe, Q];
    }), $;
  }
  function ue(g, I) {
    return function($) {
      return g(I($));
    };
  }
  function ce(g) {
    var I = -1, $ = Array(g.size);
    return g.forEach(function(Q) {
      $[++I] = Q;
    }), $;
  }
  var ae = Array.prototype, oe = Function.prototype, re = Object.prototype, he = A["__core-js_shared__"], ge = oe.toString, ie = re.hasOwnProperty, we = function() {
    var g = /[^.]+$/.exec(he && he.keys && he.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), ve = re.toString, De = RegExp(
    "^" + ge.call(ie).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Se = b ? A.Buffer : void 0, Ee = A.Symbol, Ct = A.Uint8Array, Ut = re.propertyIsEnumerable, Gt = ae.splice, vt = Ee ? Ee.toStringTag : void 0, ir = Object.getOwnPropertySymbols, Ur = Se ? Se.isBuffer : void 0, fi = ue(Object.keys, Object), Me = Er(A, "DataView"), Pe = Er(A, "Map"), $e = Er(A, "Promise"), je = Er(A, "Set"), qe = Er(A, "WeakMap"), Re = Er(Object, "create"), Ve = nr(Me), We = nr(Pe), ke = nr($e), Ge = nr(je), Ye = nr(qe), Ke = Ee ? Ee.prototype : void 0, Be = Ke ? Ke.valueOf : void 0;
  function Ae(g) {
    var I = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++I < $; ) {
      var Q = g[I];
      this.set(Q[0], Q[1]);
    }
  }
  function Je() {
    this.__data__ = Re ? Re(null) : {}, this.size = 0;
  }
  function Qe(g) {
    var I = this.has(g) && delete this.__data__[g];
    return this.size -= I ? 1 : 0, I;
  }
  function Tc(g) {
    var I = this.__data__;
    if (Re) {
      var $ = I[g];
      return $ === i ? void 0 : $;
    }
    return ie.call(I, g) ? I[g] : void 0;
  }
  function Pc(g) {
    var I = this.__data__;
    return Re ? I[g] !== void 0 : ie.call(I, g);
  }
  function Rc(g, I) {
    var $ = this.__data__;
    return this.size += this.has(g) ? 0 : 1, $[g] = Re && I === void 0 ? i : I, this;
  }
  Ae.prototype.clear = Je, Ae.prototype.delete = Qe, Ae.prototype.get = Tc, Ae.prototype.has = Pc, Ae.prototype.set = Rc;
  function Bt(g) {
    var I = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++I < $; ) {
      var Q = g[I];
      this.set(Q[0], Q[1]);
    }
  }
  function Lc() {
    this.__data__ = [], this.size = 0;
  }
  function Uc(g) {
    var I = this.__data__, $ = pi(I, g);
    if ($ < 0)
      return !1;
    var Q = I.length - 1;
    return $ == Q ? I.pop() : Gt.call(I, $, 1), --this.size, !0;
  }
  function Fc(g) {
    var I = this.__data__, $ = pi(I, g);
    return $ < 0 ? void 0 : I[$][1];
  }
  function Mc(g) {
    return pi(this.__data__, g) > -1;
  }
  function $c(g, I) {
    var $ = this.__data__, Q = pi($, g);
    return Q < 0 ? (++this.size, $.push([g, I])) : $[Q][1] = I, this;
  }
  Bt.prototype.clear = Lc, Bt.prototype.delete = Uc, Bt.prototype.get = Fc, Bt.prototype.has = Mc, Bt.prototype.set = $c;
  function sr(g) {
    var I = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++I < $; ) {
      var Q = g[I];
      this.set(Q[0], Q[1]);
    }
  }
  function jc() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (Pe || Bt)(),
      string: new Ae()
    };
  }
  function qc(g) {
    var I = gi(this, g).delete(g);
    return this.size -= I ? 1 : 0, I;
  }
  function Bc(g) {
    return gi(this, g).get(g);
  }
  function zc(g) {
    return gi(this, g).has(g);
  }
  function Kc(g, I) {
    var $ = gi(this, g), Q = $.size;
    return $.set(g, I), this.size += $.size == Q ? 0 : 1, this;
  }
  sr.prototype.clear = jc, sr.prototype.delete = qc, sr.prototype.get = Bc, sr.prototype.has = zc, sr.prototype.set = Kc;
  function di(g) {
    var I = -1, $ = g == null ? 0 : g.length;
    for (this.__data__ = new sr(); ++I < $; )
      this.add(g[I]);
  }
  function Hc(g) {
    return this.__data__.set(g, i), this;
  }
  function Vc(g) {
    return this.__data__.has(g);
  }
  di.prototype.add = di.prototype.push = Hc, di.prototype.has = Vc;
  function Yt(g) {
    var I = this.__data__ = new Bt(g);
    this.size = I.size;
  }
  function Wc() {
    this.__data__ = new Bt(), this.size = 0;
  }
  function kc(g) {
    var I = this.__data__, $ = I.delete(g);
    return this.size = I.size, $;
  }
  function Gc(g) {
    return this.__data__.get(g);
  }
  function Yc(g) {
    return this.__data__.has(g);
  }
  function Jc(g, I) {
    var $ = this.__data__;
    if ($ instanceof Bt) {
      var Q = $.__data__;
      if (!Pe || Q.length < r - 1)
        return Q.push([g, I]), this.size = ++$.size, this;
      $ = this.__data__ = new sr(Q);
    }
    return $.set(g, I), this.size = $.size, this;
  }
  Yt.prototype.clear = Wc, Yt.prototype.delete = kc, Yt.prototype.get = Gc, Yt.prototype.has = Yc, Yt.prototype.set = Jc;
  function Qc(g, I) {
    var $ = yi(g), Q = !$ && fu(g), Oe = !$ && !Q && Gi(g), ne = !$ && !Q && !Oe && yn(g), Le = $ || Q || Oe || ne, Xe = Le ? Fe(g.length, String) : [], rt = Xe.length;
    for (var Ne in g)
      (I || ie.call(g, Ne)) && !(Le && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Oe && (Ne == "offset" || Ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ne && (Ne == "buffer" || Ne == "byteLength" || Ne == "byteOffset") || // Skip index properties.
      au(Ne, rt))) && Xe.push(Ne);
    return Xe;
  }
  function pi(g, I) {
    for (var $ = g.length; $--; )
      if (fn(g[$][0], I))
        return $;
    return -1;
  }
  function Xc(g, I, $) {
    var Q = I(g);
    return yi(g) ? Q : de(Q, $(g));
  }
  function Fr(g) {
    return g == null ? g === void 0 ? P : q : vt && vt in Object(g) ? nu(g) : lu(g);
  }
  function cn(g) {
    return Mr(g) && Fr(g) == c;
  }
  function un(g, I, $, Q, Oe) {
    return g === I ? !0 : g == null || I == null || !Mr(g) && !Mr(I) ? g !== g && I !== I : Zc(g, I, $, Q, un, Oe);
  }
  function Zc(g, I, $, Q, Oe, ne) {
    var Le = yi(g), Xe = yi(I), rt = Le ? h : Jt(g), Ne = Xe ? h : Jt(I);
    rt = rt == c ? v : rt, Ne = Ne == c ? v : Ne;
    var _t = rt == v, Nt = Ne == v, nt = rt == Ne;
    if (nt && Gi(g)) {
      if (!Gi(I))
        return !1;
      Le = !0, _t = !1;
    }
    if (nt && !_t)
      return ne || (ne = new Yt()), Le || yn(g) ? hn(g, I, $, Q, Oe, ne) : iu(g, I, rt, $, Q, Oe, ne);
    if (!($ & s)) {
      var It = _t && ie.call(g, "__wrapped__"), xt = Nt && ie.call(I, "__wrapped__");
      if (It || xt) {
        var Qt = It ? g.value() : g, zt = xt ? I.value() : I;
        return ne || (ne = new Yt()), Oe(Qt, zt, $, Q, ne);
      }
    }
    return nt ? (ne || (ne = new Yt()), su(g, I, $, Q, Oe, ne)) : !1;
  }
  function eu(g) {
    if (!gn(g) || uu(g))
      return !1;
    var I = dn(g) ? De : K;
    return I.test(nr(g));
  }
  function tu(g) {
    return Mr(g) && pn(g.length) && !!J[Fr(g)];
  }
  function ru(g) {
    if (!hu(g))
      return fi(g);
    var I = [];
    for (var $ in Object(g))
      ie.call(g, $) && $ != "constructor" && I.push($);
    return I;
  }
  function hn(g, I, $, Q, Oe, ne) {
    var Le = $ & s, Xe = g.length, rt = I.length;
    if (Xe != rt && !(Le && rt > Xe))
      return !1;
    var Ne = ne.get(g);
    if (Ne && ne.get(I))
      return Ne == I;
    var _t = -1, Nt = !0, nt = $ & n ? new di() : void 0;
    for (ne.set(g, I), ne.set(I, g); ++_t < Xe; ) {
      var It = g[_t], xt = I[_t];
      if (Q)
        var Qt = Le ? Q(xt, It, _t, I, g, ne) : Q(It, xt, _t, g, I, ne);
      if (Qt !== void 0) {
        if (Qt)
          continue;
        Nt = !1;
        break;
      }
      if (nt) {
        if (!_e(I, function(zt, or) {
          if (!ye(nt, or) && (It === zt || Oe(It, zt, $, Q, ne)))
            return nt.push(or);
        })) {
          Nt = !1;
          break;
        }
      } else if (!(It === xt || Oe(It, xt, $, Q, ne))) {
        Nt = !1;
        break;
      }
    }
    return ne.delete(g), ne.delete(I), Nt;
  }
  function iu(g, I, $, Q, Oe, ne, Le) {
    switch ($) {
      case H:
        if (g.byteLength != I.byteLength || g.byteOffset != I.byteOffset)
          return !1;
        g = g.buffer, I = I.buffer;
      case U:
        return !(g.byteLength != I.byteLength || !ne(new Ct(g), new Ct(I)));
      case p:
      case m:
      case L:
        return fn(+g, +I);
      case E:
        return g.name == I.name && g.message == I.message;
      case w:
      case o:
        return g == I + "";
      case R:
        var Xe = fe;
      case d:
        var rt = Q & s;
        if (Xe || (Xe = ce), g.size != I.size && !rt)
          return !1;
        var Ne = Le.get(g);
        if (Ne)
          return Ne == I;
        Q |= n, Le.set(g, I);
        var _t = hn(Xe(g), Xe(I), Q, Oe, ne, Le);
        return Le.delete(g), _t;
      case f:
        if (Be)
          return Be.call(g) == Be.call(I);
    }
    return !1;
  }
  function su(g, I, $, Q, Oe, ne) {
    var Le = $ & s, Xe = ln(g), rt = Xe.length, Ne = ln(I), _t = Ne.length;
    if (rt != _t && !Le)
      return !1;
    for (var Nt = rt; Nt--; ) {
      var nt = Xe[Nt];
      if (!(Le ? nt in I : ie.call(I, nt)))
        return !1;
    }
    var It = ne.get(g);
    if (It && ne.get(I))
      return It == I;
    var xt = !0;
    ne.set(g, I), ne.set(I, g);
    for (var Qt = Le; ++Nt < rt; ) {
      nt = Xe[Nt];
      var zt = g[nt], or = I[nt];
      if (Q)
        var bn = Le ? Q(or, zt, nt, I, g, ne) : Q(zt, or, nt, g, I, ne);
      if (!(bn === void 0 ? zt === or || Oe(zt, or, $, Q, ne) : bn)) {
        xt = !1;
        break;
      }
      Qt || (Qt = nt == "constructor");
    }
    if (xt && !Qt) {
      var bi = g.constructor, wi = I.constructor;
      bi != wi && "constructor" in g && "constructor" in I && !(typeof bi == "function" && bi instanceof bi && typeof wi == "function" && wi instanceof wi) && (xt = !1);
    }
    return ne.delete(g), ne.delete(I), xt;
  }
  function ln(g) {
    return Xc(g, gu, ou);
  }
  function gi(g, I) {
    var $ = g.__data__;
    return cu(I) ? $[typeof I == "string" ? "string" : "hash"] : $.map;
  }
  function Er(g, I) {
    var $ = pe(g, I);
    return eu($) ? $ : void 0;
  }
  function nu(g) {
    var I = ie.call(g, vt), $ = g[vt];
    try {
      g[vt] = void 0;
      var Q = !0;
    } catch {
    }
    var Oe = ve.call(g);
    return Q && (I ? g[vt] = $ : delete g[vt]), Oe;
  }
  var ou = ir ? function(g) {
    return g == null ? [] : (g = Object(g), be(ir(g), function(I) {
      return Ut.call(g, I);
    }));
  } : yu, Jt = Fr;
  (Me && Jt(new Me(new ArrayBuffer(1))) != H || Pe && Jt(new Pe()) != R || $e && Jt($e.resolve()) != O || je && Jt(new je()) != d || qe && Jt(new qe()) != T) && (Jt = function(g) {
    var I = Fr(g), $ = I == v ? g.constructor : void 0, Q = $ ? nr($) : "";
    if (Q)
      switch (Q) {
        case Ve:
          return H;
        case We:
          return R;
        case ke:
          return O;
        case Ge:
          return d;
        case Ye:
          return T;
      }
    return I;
  });
  function au(g, I) {
    return I = I ?? u, !!I && (typeof g == "number" || Z.test(g)) && g > -1 && g % 1 == 0 && g < I;
  }
  function cu(g) {
    var I = typeof g;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? g !== "__proto__" : g === null;
  }
  function uu(g) {
    return !!we && we in g;
  }
  function hu(g) {
    var I = g && g.constructor, $ = typeof I == "function" && I.prototype || re;
    return g === $;
  }
  function lu(g) {
    return ve.call(g);
  }
  function nr(g) {
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
  function fn(g, I) {
    return g === I || g !== g && I !== I;
  }
  var fu = cn(function() {
    return arguments;
  }()) ? cn : function(g) {
    return Mr(g) && ie.call(g, "callee") && !Ut.call(g, "callee");
  }, yi = Array.isArray;
  function du(g) {
    return g != null && pn(g.length) && !dn(g);
  }
  var Gi = Ur || bu;
  function pu(g, I) {
    return un(g, I);
  }
  function dn(g) {
    if (!gn(g))
      return !1;
    var I = Fr(g);
    return I == _ || I == x || I == l || I == y;
  }
  function pn(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= u;
  }
  function gn(g) {
    var I = typeof g;
    return g != null && (I == "object" || I == "function");
  }
  function Mr(g) {
    return g != null && typeof g == "object";
  }
  var yn = le ? Te(le) : tu;
  function gu(g) {
    return du(g) ? Qc(g) : ru(g);
  }
  function yu() {
    return [];
  }
  function bu() {
    return !1;
  }
  t.exports = pu;
})(Ri, Ri.exports);
var lg = Ri.exports;
const fg = /* @__PURE__ */ oa(lg);
function dg(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), u = n.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[u] = s;
  }
  var c = t.length, h = t.charAt(0), l = Math.log(c) / Math.log(256), p = Math.log(256) / Math.log(c);
  function m(x) {
    if (x instanceof Uint8Array || (ArrayBuffer.isView(x) ? x = new Uint8Array(x.buffer, x.byteOffset, x.byteLength) : Array.isArray(x) && (x = Uint8Array.from(x))), !(x instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (x.length === 0)
      return "";
    for (var R = 0, L = 0, q = 0, v = x.length; q !== v && x[q] === 0; )
      q++, R++;
    for (var O = (v - q) * p + 1 >>> 0, y = new Uint8Array(O); q !== v; ) {
      for (var w = x[q], d = 0, o = O - 1; (w !== 0 || d < L) && o !== -1; o--, d++)
        w += 256 * y[o] >>> 0, y[o] = w % c >>> 0, w = w / c >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      L = d, q++;
    }
    for (var f = O - L; f !== O && y[f] === 0; )
      f++;
    for (var P = h.repeat(R); f < O; ++f)
      P += t.charAt(y[f]);
    return P;
  }
  function E(x) {
    if (typeof x != "string")
      throw new TypeError("Expected String");
    if (x.length === 0)
      return new Uint8Array();
    var R = 0;
    if (x[R] !== " ") {
      for (var L = 0, q = 0; x[R] === h; )
        L++, R++;
      for (var v = (x.length - R) * l + 1 >>> 0, O = new Uint8Array(v); x[R]; ) {
        var y = r[x.charCodeAt(R)];
        if (y === 255)
          return;
        for (var w = 0, d = v - 1; (y !== 0 || w < q) && d !== -1; d--, w++)
          y += c * O[d] >>> 0, O[d] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        q = w, R++;
      }
      if (x[R] !== " ") {
        for (var o = v - q; o !== v && O[o] === 0; )
          o++;
        for (var f = new Uint8Array(L + (v - o)), P = L; o !== v; )
          f[P++] = O[o++];
        return f;
      }
    }
  }
  function _(x) {
    var R = E(x);
    if (R)
      return R;
    throw new Error(`Non-${e} character`);
  }
  return { encode: m, decodeUnsafe: E, decode: _ };
}
var pg = dg, gg = pg;
const cc = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, yg = (t) => new TextEncoder().encode(t), bg = (t) => new TextDecoder().decode(t);
class wg {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class mg {
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
class vg {
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
const uc = (t, e) => new vg({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class _g {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new wg(e, r, i), this.decoder = new mg(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Wi = ({ name: t, prefix: e, encode: r, decode: i }) => new _g(t, e, r, i), li = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = gg(r, e);
  return Wi({ prefix: t, name: e, encode: i, decode: (n) => cc(s(n)) });
}, Eg = (t, e, r, i) => {
  const s = {};
  for (let p = 0; p < e.length; ++p)
    s[e[p]] = p;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const u = new Uint8Array(n * r / 8 | 0);
  let c = 0, h = 0, l = 0;
  for (let p = 0; p < n; ++p) {
    const m = s[t[p]];
    if (m === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h = h << r | m, c += r, c >= 8 && (c -= 8, u[l++] = 255 & h >> c);
  }
  if (c >= r || 255 & h << 8 - c)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Dg = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", u = 0, c = 0;
  for (let h = 0; h < t.length; ++h)
    for (c = c << 8 | t[h], u += 8; u > r; )
      u -= r, n += e[s & c >> u];
  if (u && (n += e[s & c << r - u]), i)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, st = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Wi({ prefix: e, name: t, encode(s) {
  return Dg(s, i, r);
}, decode(s) {
  return Eg(s, i, r, t);
} }), Sg = Wi({ prefix: "\0", name: "identity", encode: (t) => bg(t), decode: (t) => yg(t) });
var Ig = Object.freeze({ __proto__: null, identity: Sg });
const xg = st({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Og = Object.freeze({ __proto__: null, base2: xg });
const Ag = st({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Cg = Object.freeze({ __proto__: null, base8: Ag });
const Ng = li({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Tg = Object.freeze({ __proto__: null, base10: Ng });
const Pg = st({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Rg = st({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Lg = Object.freeze({ __proto__: null, base16: Pg, base16upper: Rg });
const Ug = st({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Fg = st({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Mg = st({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), $g = st({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), jg = st({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), qg = st({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Bg = st({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), zg = st({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Kg = st({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Hg = Object.freeze({ __proto__: null, base32: Ug, base32upper: Fg, base32pad: Mg, base32padupper: $g, base32hex: jg, base32hexupper: qg, base32hexpad: Bg, base32hexpadupper: zg, base32z: Kg });
const Vg = li({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Wg = li({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var kg = Object.freeze({ __proto__: null, base36: Vg, base36upper: Wg });
const Gg = li({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Yg = li({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Jg = Object.freeze({ __proto__: null, base58btc: Gg, base58flickr: Yg });
const Qg = st({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Xg = st({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Zg = st({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), e0 = st({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var t0 = Object.freeze({ __proto__: null, base64: Qg, base64pad: Xg, base64url: Zg, base64urlpad: e0 });
const hc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), r0 = hc.reduce((t, e, r) => (t[r] = e, t), []), i0 = hc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function s0(t) {
  return t.reduce((e, r) => (e += r0[r], e), "");
}
function n0(t) {
  const e = [];
  for (const r of t) {
    const i = i0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const o0 = Wi({ prefix: "🚀", name: "base256emoji", encode: s0, decode: n0 });
var a0 = Object.freeze({ __proto__: null, base256emoji: o0 }), c0 = lc, Po = 128, u0 = 127, h0 = ~u0, l0 = Math.pow(2, 31);
function lc(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= l0; )
    e[r++] = t & 255 | Po, t /= 128;
  for (; t & h0; )
    e[r++] = t & 255 | Po, t >>>= 7;
  return e[r] = t | 0, lc.bytes = r - i + 1, e;
}
var f0 = Ts, d0 = 128, Ro = 127;
function Ts(t, i) {
  var r = 0, i = i || 0, s = 0, n = i, u, c = t.length;
  do {
    if (n >= c)
      throw Ts.bytes = 0, new RangeError("Could not decode varint");
    u = t[n++], r += s < 28 ? (u & Ro) << s : (u & Ro) * Math.pow(2, s), s += 7;
  } while (u >= d0);
  return Ts.bytes = n - i, r;
}
var p0 = Math.pow(2, 7), g0 = Math.pow(2, 14), y0 = Math.pow(2, 21), b0 = Math.pow(2, 28), w0 = Math.pow(2, 35), m0 = Math.pow(2, 42), v0 = Math.pow(2, 49), _0 = Math.pow(2, 56), E0 = Math.pow(2, 63), D0 = function(t) {
  return t < p0 ? 1 : t < g0 ? 2 : t < y0 ? 3 : t < b0 ? 4 : t < w0 ? 5 : t < m0 ? 6 : t < v0 ? 7 : t < _0 ? 8 : t < E0 ? 9 : 10;
}, S0 = { encode: c0, decode: f0, encodingLength: D0 }, fc = S0;
const Lo = (t, e, r = 0) => (fc.encode(t, e, r), e), Uo = (t) => fc.encodingLength(t), Ps = (t, e) => {
  const r = e.byteLength, i = Uo(t), s = i + Uo(r), n = new Uint8Array(s + r);
  return Lo(t, n, 0), Lo(r, n, i), n.set(e, s), new I0(t, r, e, n);
};
class I0 {
  constructor(e, r, i, s) {
    this.code = e, this.size = r, this.digest = i, this.bytes = s;
  }
}
const dc = ({ name: t, code: e, encode: r }) => new x0(t, e, r);
class x0 {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Ps(this.code, r) : r.then((i) => Ps(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const pc = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), O0 = dc({ name: "sha2-256", code: 18, encode: pc("SHA-256") }), A0 = dc({ name: "sha2-512", code: 19, encode: pc("SHA-512") });
var C0 = Object.freeze({ __proto__: null, sha256: O0, sha512: A0 });
const gc = 0, N0 = "identity", yc = cc, T0 = (t) => Ps(gc, yc(t)), P0 = { code: gc, name: N0, encode: yc, digest: T0 };
var R0 = Object.freeze({ __proto__: null, identity: P0 });
new TextEncoder(), new TextDecoder();
const Fo = { ...Ig, ...Og, ...Cg, ...Tg, ...Lg, ...Hg, ...kg, ...Jg, ...t0, ...a0 };
({ ...C0, ...R0 });
function bc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function L0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? bc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function wc(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const Mo = wc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), cs = wc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = L0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), U0 = { utf8: Mo, "utf-8": Mo, hex: Fo.base16, latin1: cs, ascii: cs, binary: cs, ...Fo };
function F0(t, e = "utf8") {
  const r = U0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? bc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const mc = "wc", M0 = 2, en = "core", er = `${mc}@2:${en}:`, $0 = { name: en, logger: "error" }, j0 = { database: ":memory:" }, q0 = "crypto", $o = "client_ed25519_seed", B0 = X.ONE_DAY, z0 = "keychain", K0 = "0.3", H0 = "messages", V0 = "0.3", W0 = X.SIX_HOURS, k0 = "publisher", vc = "irn", G0 = "error", _c = "wss://relay.walletconnect.com", jo = "wss://relay.walletconnect.org", Y0 = "relayer", lt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, J0 = "_subscription", Vt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Q0 = X.ONE_SECOND, X0 = "2.10.0", Z0 = 1e4, ey = "0.3", ty = "WALLETCONNECT_CLIENT_ID", qt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ry = "subscription", iy = "0.3", sy = X.FIVE_SECONDS * 1e3, ny = "pairing", oy = "0.3", Wr = { wc_pairingDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 0 } } }, jt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, ay = "history", cy = "0.3", uy = "expirer", Ot = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, hy = "0.3", us = "verify-api", Oi = "https://verify.walletconnect.com", qo = "https://verify.walletconnect.org";
class ly {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = z0, this.version = K0, this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: n } = k("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = me.generateChildLogger(r, this.name);
  }
  get context() {
    return me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Qa(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Xa(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fy {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = q0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n = io(s);
      return Ma(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = Cd();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const n = await this.getClientSeed(), u = io(n), c = Cs();
      return await Mf(c, s, B0, u);
    }, this.generateSharedKey = (s, n, u) => {
      this.isInitialized();
      const c = this.getPrivateKey(s), h = Nd(c, n);
      return this.setSymKey(h, u);
    }, this.setSymKey = async (s, n) => {
      this.isInitialized();
      const u = n || Td(s);
      return await this.keychain.set(u, s), u;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n, u) => {
      this.isInitialized();
      const c = Ja(u), h = Ms(n);
      if (go(c)) {
        const E = c.senderPublicKey, _ = c.receiverPublicKey;
        s = await this.generateSharedKey(E, _);
      }
      const l = this.getSymKey(s), { type: p, senderPublicKey: m } = c;
      return Rd({ type: p, symKey: l, message: h, senderPublicKey: m });
    }, this.decode = async (s, n, u) => {
      this.isInitialized();
      const c = Fd(n, u);
      if (go(c)) {
        const h = c.receiverPublicKey, l = c.senderPublicKey;
        s = await this.generateSharedKey(h, l);
      }
      try {
        const h = this.getSymKey(s), l = Ld({ symKey: h, encoded: n });
        return Ea(l);
      } catch (h) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
      }
    }, this.getPayloadType = (s) => {
      const n = Ti(s);
      return ai(n.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const n = Ti(s);
      return n.senderPublicKey ? yt(n.senderPublicKey, gt) : void 0;
    }, this.core = e, this.logger = me.generateChildLogger(r, this.name), this.keychain = i || new ly(this.core, this.logger);
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
      e = this.keychain.get($o);
    } catch {
      e = Cs(), await this.keychain.set($o, e);
    }
    return F0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class dy extends jh {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = H0, this.version = V0, this.initialized = !1, this.storagePrefix = er, this.init = async () => {
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
    }, this.set = async (i, s) => {
      this.isInitialized();
      const n = Cr(s);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[n] < "u" || (u[n] = s, this.messages.set(i, u), await this.persist()), n;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const n = this.get(i), u = Cr(s);
      return typeof n[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = me.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Qa(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Xa(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class py extends qh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Lt.EventEmitter(), this.name = k0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, s, n) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      try {
        const c = (n == null ? void 0 : n.ttl) || W0, h = Ns(n), l = (n == null ? void 0 : n.prompt) || !1, p = (n == null ? void 0 : n.tag) || 0, m = (n == null ? void 0 : n.id) || oc().toString(), E = { topic: i, message: s, opts: { ttl: c, relay: h, prompt: l, tag: p, id: m } }, _ = setTimeout(() => this.queue.set(m, E), this.publishTimeout);
        try {
          await await ri(this.rpcPublish(i, s, c, h, l, p, m), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(m), this.relayer.events.emit(lt.publish, E);
        } catch (x) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = n == null ? void 0 : n.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(m), x;
          return;
        } finally {
          clearTimeout(_);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      } catch (c) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(c), c;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = me.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return me.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, i, s, n, u, c) {
    var h, l, p, m;
    const E = { method: Ii(s.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: n, tag: u }, id: c };
    return pt((h = E.params) == null ? void 0 : h.prompt) && ((l = E.params) == null || delete l.prompt), pt((p = E.params) == null ? void 0 : p.tag) && ((m = E.params) == null || delete m.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: E }), this.relayer.request(E);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: i, opts: s } = e;
      await this.publish(r, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Tr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(lt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(lt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class gy {
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
      const s = i.filter((n) => n !== r);
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
var yy = Object.defineProperty, by = Object.defineProperties, wy = Object.getOwnPropertyDescriptors, Bo = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, vy = Object.prototype.propertyIsEnumerable, zo = (t, e, r) => e in t ? yy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kr = (t, e) => {
  for (var r in e || (e = {}))
    my.call(e, r) && zo(t, r, e[r]);
  if (Bo)
    for (var r of Bo(e))
      vy.call(e, r) && zo(t, r, e[r]);
  return t;
}, hs = (t, e) => by(t, wy(e));
class _y extends Kh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new gy(), this.events = new Lt.EventEmitter(), this.name = ry, this.version = iy, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = er, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const n = Ns(s), u = { topic: i, relay: n };
        this.pending.set(i, u);
        const c = await this.rpcSubscribe(i, n);
        return this.onSubscribe(c, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } }), c;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((s, n) => {
      const u = new X.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const c = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), s(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= sy && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = me.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, r)));
  }
  async unsubscribeById(e, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    try {
      const s = Ns(i);
      await this.rpcUnsubscribe(e, r, s);
      const n = He("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: Ii(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await ri(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(lt.connection_stalled);
    }
    return Cr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: Ii(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ri(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(lt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, i) {
    const s = { method: Ii(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, hs(kr({}, r), { id: e })), this.pending.delete(r.topic);
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
      const { message: i } = k("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(qt.deleted, hs(kr({}, i), { reason: r }));
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
        const { message: r } = k("RESTORE_WILL_OVERRIDE", this.name);
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
    hi(r) && this.onBatchSubscribe(r.map((i, s) => hs(kr({}, e[s]), { id: i })));
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
    this.relayer.core.heartbeat.on(Tr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(lt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(lt.disconnect, () => {
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
      const { message: e } = k("NOT_INITIALIZED", this.name);
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
var Ey = Object.defineProperty, Ko = Object.getOwnPropertySymbols, Dy = Object.prototype.hasOwnProperty, Sy = Object.prototype.propertyIsEnumerable, Ho = (t, e, r) => e in t ? Ey(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Iy = (t, e) => {
  for (var r in e || (e = {}))
    Dy.call(e, r) && Ho(t, r, e[r]);
  if (Ko)
    for (var r of Ko(e))
      Sy.call(e, r) && Ho(t, r, e[r]);
  return t;
};
class xy extends Bh {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Lt.EventEmitter(), this.name = Y0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(lt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(lt.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Vt.payload, this.onPayloadHandler), this.provider.on(Vt.connect, this.onConnectHandler), this.provider.on(Vt.disconnect, this.onDisconnectHandler), this.provider.on(Vt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? me.generateChildLogger(e.logger, this.name) : me.pino(me.getDefaultLoggerOptions({ level: e.logger || G0 })), this.messages = new dy(this.logger, e.core), this.subscriber = new _y(this, this.logger), this.publisher = new py(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || _c, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${jo}...`), await this.restartTransport(jo);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Z0);
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
    let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
    return s || (await Promise.all([new Promise((n) => {
      this.subscriber.once(qt.created, (u) => {
        u.topic === e && n();
      });
    }), new Promise(async (n) => {
      s = await this.subscriber.subscribe(e, r), n();
    })]), s);
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
          } catch (s) {
            i(s);
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
    if (!await Io())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new og(new hg(kd({ sdkVersion: X0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    const s = this.messages.has(r, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Zs(e)) {
      if (!e.method.endsWith(J0))
        return;
      const r = e.params, { topic: i, message: s, publishedAt: n } = r.data, u = { topic: i, message: s, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Iy({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      Vi(e) && this.events.emit(lt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(lt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Qs(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Vt.payload, this.onPayloadHandler), this.provider.off(Vt.connect, this.onConnectHandler), this.provider.off(Vt.disconnect, this.onDisconnectHandler), this.provider.off(Vt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(lt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Io();
    jp(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(lt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, X.toMiliseconds(Q0)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
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
var Oy = Object.defineProperty, Vo = Object.getOwnPropertySymbols, Ay = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, Wo = (t, e, r) => e in t ? Oy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ko = (t, e) => {
  for (var r in e || (e = {}))
    Ay.call(e, r) && Wo(t, r, e[r]);
  if (Vo)
    for (var r of Vo(e))
      Cy.call(e, r) && Wo(t, r, e[r]);
  return t;
};
class ki extends zh {
  constructor(e, r, i, s = er, n = void 0) {
    super(e, r, i, s), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = ey, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !pt(u) ? this.map.set(this.getKey(u), u) : yp(u) ? this.map.set(u.id, u) : bp(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, c) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: c }), this.map.set(u, c), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((c) => Object.keys(u).every((h) => fg(c[h], u[h]))) : this.values), this.update = async (u, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: c });
      const h = ko(ko({}, this.getData(u)), c);
      this.map.set(u, h), await this.persist();
    }, this.delete = async (u, c) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: c }), this.map.delete(u), await this.persist());
    }, this.logger = me.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = n;
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
      const { message: i } = k("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = k("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ny {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = ny, this.version = oy, this.events = new ga(), this.initialized = !1, this.storagePrefix = er, this.ignoredPayloadTypes = [_r], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = Cs(), s = await this.core.crypto.setSymKey(i), n = Tt(X.FIVE_MINUTES), u = { protocol: vc }, c = { topic: s, expiry: n, relay: u, active: !1 }, h = op({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i, relay: u });
      return await this.pairings.set(s, c), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n), { topic: s, uri: h };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: n, relay: u } = ip(i.uri);
      if (this.pairings.keys.includes(s))
        throw new Error(`Pairing already exists: ${s}`);
      if (this.core.crypto.hasKeys(s))
        throw new Error(`Keychain already exists: ${s}`);
      const c = Tt(X.FIVE_MINUTES), h = { topic: s, relay: u, expiry: c, active: !1 };
      return await this.pairings.set(s, h), await this.core.crypto.setSymKey(n, s), await this.core.relayer.subscribe(s, { relay: u }), this.core.expirer.set(s, c), i.activatePairing && await this.activate({ topic: s }), h;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = Tt(X.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: u, resolve: c, reject: h } = xr();
        this.events.once(ze("pairing_ping", n), ({ error: l }) => {
          l ? h(l) : c();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", He("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, n) => {
      const u = ii(s, n), c = await this.core.crypto.encode(i, u), h = Wr[s].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, c, h), u.id;
    }, this.sendResult = async (i, s, n) => {
      const u = Qs(i, n), c = await this.core.crypto.encode(s, u), h = await this.core.history.get(s, i), l = Wr[h.request.method].res;
      await this.core.relayer.publish(s, c, l), await this.core.history.resolve(u);
    }, this.sendError = async (i, s, n) => {
      const u = Xs(i, n), c = await this.core.crypto.encode(s, u), h = await this.core.history.get(s, i), l = Wr[h.request.method] ? Wr[h.request.method].res : Wr.unregistered_method.res;
      await this.core.relayer.publish(s, c, l), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, He("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => Zt(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: n } = i;
      switch (n.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, n);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, n);
        default:
          return this.onUnknownRpcMethodRequest(s, n);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: n } = i, u = (await this.core.history.get(s, n.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n, i, !0), this.events.emit("pairing_ping", { id: n, topic: i });
      } catch (u) {
        await this.sendError(n, i, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: n } = s;
      setTimeout(() => {
        kt(s) ? this.events.emit(ze("pairing_ping", n), {}) : Pt(s) && this.events.emit(ze("pairing_ping", n), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: n, topic: i });
      } catch (u) {
        await this.sendError(n, i, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: n, method: u } = s;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const c = He("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(n, i, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(n, i, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(He("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!wt(i)) {
        const { message: s } = k("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(s);
      }
      if (!gp(i.uri)) {
        const { message: s } = k("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (i) => {
      if (!wt(i)) {
        const { message: n } = k("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!wt(i)) {
        const { message: n } = k("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!tt(i, !1)) {
        const { message: s } = k("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = k("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (Zt(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = k("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = me.generateChildLogger(r, this.name), this.pairings = new ki(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return me.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(lt.message, async (e) => {
      const { topic: r, message: i } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const s = await this.core.crypto.decode(r, i);
      try {
        Zs(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Vi(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Ot.expired, async (e) => {
      const { topic: r } = ec(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Ty extends $h {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Lt.EventEmitter(), this.name = ay, this.version = cy, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n }), this.records.has(s.id))
        return;
      const u = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n, expiry: Tt(X.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(jt.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = Pt(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.events.emit(jt.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n) => {
        if (n.topic === i) {
          if (typeof s < "u" && n.id !== s)
            return;
          this.records.delete(n.id), this.events.emit(jt.deleted, n);
        }
      });
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = me.generateChildLogger(r, this.name);
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
      const { message: i } = k("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = k("RESTORE_WILL_OVERRIDE", this.name);
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
    }), this.core.heartbeat.on(Tr.HEARTBEAT_EVENTS.pulse, () => {
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
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Py extends Hh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Lt.EventEmitter(), this.name = uy, this.version = hy, this.cached = [], this.initialized = !1, this.storagePrefix = er, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const n = this.formatTarget(i), u = { target: n, expiry: s };
      this.expirations.set(n, u), this.checkExpiry(n, u), this.events.emit(Ot.created, { target: n, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(Ot.deleted, { target: s, expiration: n });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = me.generateChildLogger(r, this.name);
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
      return Gd(e);
    if (typeof e == "number")
      return Yd(e);
    const { message: r } = k("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Ot.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = k("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: i } = k("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: i } = r;
    X.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(Ot.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Tr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Ot.created, (e) => {
      const r = Ot.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Ot.expired, (e) => {
      const r = Ot.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Ot.deleted, (e) => {
      const r = Ot.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ry extends Vh {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = us, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || Hi() || !ci())
        return;
      const s = (i == null ? void 0 : i.verifyUrl) || Oi;
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (n) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(n);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = qo;
        try {
          await this.createIframe();
        } catch (n) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(n), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const s = (i == null ? void 0 : i.verifyUrl) || Oi;
      let n = "";
      try {
        n = await this.fetchAttestation(i.attestationId, s);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.warn(u), n = await this.fetchAttestation(i.attestationId, qo);
      }
      return n;
    }, this.fetchAttestation = async (i, s) => {
      var n;
      this.logger.info(`resolving attestation: ${i} from url: ${s}`);
      const u = this.startAbortTimer(X.ONE_SECOND * 2), c = await fetch(`${s}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(u), c.status === 200 ? (n = await c.json()) == null ? void 0 : n.origin : "";
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var s;
      try {
        if (!this.iframe)
          return;
        (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const s = (n) => {
        n.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), i());
      };
      await Promise.race([new Promise((n) => {
        if (document.getElementById(us))
          return n();
        window.addEventListener("message", s);
        const u = document.createElement("iframe");
        u.id = us, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = n;
      }), new Promise((n, u) => setTimeout(() => {
        window.removeEventListener("message", s), u("verify iframe load timeout");
      }, X.toMiliseconds(X.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = me.generateChildLogger(r, this.name), this.verifyUrl = Oi, this.abortController = new AbortController(), this.isDevEnv = ks() && process.env.IS_VITEST;
  }
  get context() {
    return me.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), X.toMiliseconds(e));
  }
}
var Ly = Object.defineProperty, Go = Object.getOwnPropertySymbols, Uy = Object.prototype.hasOwnProperty, Fy = Object.prototype.propertyIsEnumerable, Yo = (t, e, r) => e in t ? Ly(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jo = (t, e) => {
  for (var r in e || (e = {}))
    Uy.call(e, r) && Yo(t, r, e[r]);
  if (Go)
    for (var r of Go(e))
      Fy.call(e, r) && Yo(t, r, e[r]);
  return t;
};
class tn extends Mh {
  constructor(e) {
    super(e), this.protocol = mc, this.version = M0, this.name = en, this.events = new Lt.EventEmitter(), this.initialized = !1, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || _c;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : me.pino(me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || $0.logger }));
    this.logger = me.generateChildLogger(r, this.name), this.heartbeat = new Tr.HeartBeat(), this.crypto = new fy(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Ty(this, this.logger), this.expirer = new Py(this, this.logger), this.storage = e != null && e.storage ? e.storage : new vh(Jo(Jo({}, j0), e == null ? void 0 : e.storageOptions)), this.relayer = new xy({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ny(this, this.logger), this.verify = new Ry(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new tn(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(ty, i), r;
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
const My = tn, Ec = "wc", Dc = 2, Sc = "client", rn = `${Ec}@${Dc}:${Sc}:`, ls = { name: Sc, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Qo = "WALLETCONNECT_DEEPLINK_CHOICE", $y = "proposal", jy = "Proposal expired", qy = "session", Di = X.SEVEN_DAYS, By = "engine", Gr = { wc_sessionPropose: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, fs = { min: X.FIVE_MINUTES, max: X.SEVEN_DAYS }, Wt = { idle: "IDLE", active: "ACTIVE" }, zy = "request", Ky = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Hy = Object.defineProperty, Vy = Object.defineProperties, Wy = Object.getOwnPropertyDescriptors, Xo = Object.getOwnPropertySymbols, ky = Object.prototype.hasOwnProperty, Gy = Object.prototype.propertyIsEnumerable, Zo = (t, e, r) => e in t ? Hy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bt = (t, e) => {
  for (var r in e || (e = {}))
    ky.call(e, r) && Zo(t, r, e[r]);
  if (Xo)
    for (var r of Xo(e))
      Gy.call(e, r) && Zo(t, r, e[r]);
  return t;
}, Yr = (t, e) => Vy(t, Wy(e));
class Yy extends kh {
  constructor(e) {
    super(e), this.name = By, this.events = new ga(), this.initialized = !1, this.ignoredPayloadTypes = [_r], this.requestQueue = { state: Wt.idle, queue: [] }, this.sessionRequestQueue = { state: Wt.idle, queue: [] }, this.requestQueueDelay = X.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Gr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = Yr(bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: s, requiredNamespaces: n, optionalNamespaces: u, sessionProperties: c, relays: h } = i;
      let l = s, p, m = !1;
      if (l && (m = this.client.core.pairing.pairings.get(l).active), !l || !m) {
        const { topic: O, uri: y } = await this.client.core.pairing.create();
        l = O, p = y;
      }
      const E = await this.client.core.crypto.generateKeyPair(), _ = bt({ requiredNamespaces: n, optionalNamespaces: u, relays: h ?? [{ protocol: vc }], proposer: { publicKey: E, metadata: this.client.metadata } }, c && { sessionProperties: c }), { reject: x, resolve: R, done: L } = xr(X.FIVE_MINUTES, jy);
      if (this.events.once(ze("session_connect"), async ({ error: O, session: y }) => {
        if (O)
          x(O);
        else if (y) {
          y.self.publicKey = E;
          const w = Yr(bt({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
          await this.client.session.set(y.topic, w), await this.setExpiry(y.topic, y.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: y.peer.metadata }), R(w);
        }
      }), !l) {
        const { message: O } = k("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(O);
      }
      const q = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: _ }), v = Tt(X.FIVE_MINUTES);
      return await this.setProposal(q, bt({ id: q, expiry: v }, _)), { uri: p, approval: L };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: s, namespaces: n, sessionProperties: u } = r, c = this.client.proposal.get(i);
      let { pairingTopic: h, proposer: l, requiredNamespaces: p, optionalNamespaces: m } = c;
      h = h || "", Xr(p) || (p = hp(n, "approve()"));
      const E = await this.client.core.crypto.generateKeyPair(), _ = l.publicKey, x = await this.client.core.crypto.generateSharedKey(E, _);
      h && i && (await this.client.core.pairing.updateMetadata({ topic: h, metadata: l.metadata }), await this.sendResult({ id: i, topic: h, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: E } }), await this.client.proposal.delete(i, He("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: h }));
      const R = bt({ relay: { protocol: s ?? "irn" }, namespaces: n, requiredNamespaces: p, optionalNamespaces: m, pairingTopic: h, controller: { publicKey: E, metadata: this.client.metadata }, expiry: Tt(Di) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(x), await this.sendRequest({ topic: x, method: "wc_sessionSettle", params: R, throwOnFailedPublish: !0 });
      const L = Yr(bt({}, R), { topic: x, pairingTopic: h, acknowledged: !1, self: R.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: E });
      return await this.client.session.set(x, L), await this.setExpiry(x, Tt(Di)), { topic: x, acknowledged: () => new Promise((q) => setTimeout(() => q(this.client.session.get(x)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: s } = r, { pairingTopic: n } = this.client.proposal.get(i);
      n && (await this.sendError(i, n, s), await this.client.proposal.delete(i, He("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: s } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: u, resolve: c, reject: h } = xr();
      return this.events.once(ze("session_update", n), ({ error: l }) => {
        l ? h(l) : c();
      }), await this.client.session.update(i, { namespaces: s }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: n, resolve: u, reject: c } = xr();
      return this.events.once(ze("session_extend", s), ({ error: h }) => {
        h ? c(h) : u();
      }), await this.setExpiry(i, Tt(Di)), { acknowledged: n };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: s, topic: n, expiry: u } = r, c = Js(), { done: h, resolve: l, reject: p } = xr(u);
      return this.events.once(ze("session_request", c), ({ error: m, result: E }) => {
        m ? p(m) : l(E);
      }), await Promise.all([new Promise(async (m) => {
        await this.sendRequest({ clientRpcId: c, topic: n, method: "wc_sessionRequest", params: { request: s, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((E) => p(E)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: i, id: c }), m();
      }), new Promise(async (m) => {
        const E = await this.client.core.storage.getItem(Qo);
        Jd({ id: c, topic: n, wcDeepLink: E }), m();
      }), h()]).then((m) => m[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: s } = r, { id: n } = s;
      kt(s) ? await this.sendResult({ id: n, topic: i, result: s.result, throwOnFailedPublish: !0 }) : Pt(s) && await this.sendError(n, i, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const s = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: n, resolve: u, reject: c } = xr();
        this.events.once(ze("session_ping", s), ({ error: h }) => {
          h ? c(h) : u();
        }), await n();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: s, chainId: n } = r;
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: s, chainId: n } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: He("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => dp(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((n) => {
            var u, c;
            return ((u = n.peerMetadata) == null ? void 0 : u.url) && ((c = n.peerMetadata) == null ? void 0 : c.url) === r.peer.metadata.url && n.topic && n.topic !== i.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r, i) => {
      const { self: s } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, He("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Qo).catch((n) => this.client.logger.warn(n));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, He("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== r), s && (this.sessionRequestQueue.state = Wt.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = Gr.wc_sessionRequest.req.ttl, { id: s, topic: n, params: u } = r;
      await this.client.pendingRequest.set(s, { id: s, topic: n, params: u }), i && this.client.core.expirer.set(s, Tt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: s, params: n, expiry: u, relayRpcId: c, clientRpcId: h, throwOnFailedPublish: l } = r, p = ii(s, n, h);
      if (ci() && Ky.includes(s)) {
        const _ = Cr(JSON.stringify(p));
        this.client.core.verify.register({ attestationId: _ });
      }
      const m = await this.client.core.crypto.encode(i, p), E = Gr[s].req;
      return u && (E.ttl = u), c && (E.id = c), this.client.core.history.set(i, p), l ? (E.internal = Yr(bt({}, E.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, m, E)) : this.client.core.relayer.publish(i, m, E).catch((_) => this.client.logger.error(_)), p.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: s, result: n, throwOnFailedPublish: u } = r, c = Qs(i, n), h = await this.client.core.crypto.encode(s, c), l = await this.client.core.history.get(s, i), p = Gr[l.request.method].res;
      u ? (p.internal = Yr(bt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, h, p)) : this.client.core.relayer.publish(s, h, p).catch((m) => this.client.logger.error(m)), await this.client.core.history.resolve(c);
    }, this.sendError = async (r, i, s) => {
      const n = Xs(r, s), u = await this.client.core.crypto.encode(i, n), c = await this.client.core.history.get(i, r), h = Gr[c.request.method].res;
      this.client.core.relayer.publish(i, u, h), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((s) => {
        Zt(s.expiry) && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        Zt(s.expiry) && i.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession(s)), ...i.map((s) => this.deleteProposal(s))]);
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
      const { topic: i, payload: s } = r, n = s.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, s);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, s);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, s);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, s);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, s);
        default:
          return this.client.logger.info(`Unsupported request method ${n}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: i, payload: s } = r, n = (await this.client.core.history.get(i, s.id)).request.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, s);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, s);
        default:
          return this.client.logger.info(`Unsupported response method ${n}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: i } = r, { message: s } = k("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: s, id: n } = i;
      try {
        this.isValidConnect(bt({}, i.params));
        const u = Tt(X.FIVE_MINUTES), c = bt({ id: n, pairingTopic: r, expiry: u }, s);
        await this.setProposal(n, c);
        const h = Cr(JSON.stringify(i)), l = await this.getVerifyContext(h, c.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: c, verifyContext: l });
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: s } = i;
      if (kt(i)) {
        const { result: n } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const u = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const c = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const h = n.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const l = await this.client.core.crypto.generateSharedKey(c, h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const p = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p }), await this.client.core.pairing.activate({ topic: r });
      } else
        Pt(i) && (await this.client.proposal.delete(s, He("USER_DISCONNECTED")), this.events.emit(ze("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: u, controller: c, expiry: h, namespaces: l, requiredNamespaces: p, optionalNamespaces: m, sessionProperties: E, pairingTopic: _ } = i.params, x = bt({ topic: r, relay: u, expiry: h, namespaces: l, acknowledged: !0, pairingTopic: _, requiredNamespaces: p, optionalNamespaces: m, controller: c.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: c.publicKey, metadata: c.metadata } }, E && { sessionProperties: E });
        await this.sendResult({ id: i.id, topic: r, result: !0 }), this.events.emit(ze("session_connect"), { session: x }), this.cleanupDuplicatePairings(x);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: s } = i;
      kt(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(ze("session_approve", s), {})) : Pt(i) && (await this.client.session.delete(r, He("USER_DISCONNECTED")), this.events.emit(ze("session_approve", s), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: s, id: n } = i;
      try {
        const u = `${r}_session_update`, c = Ei.get(u);
        if (c && this.isRequestOutOfSync(c, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidUpdate(bt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_update", { id: n, topic: r, params: s }), Ei.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: s } = i;
      kt(i) ? this.events.emit(ze("session_update", s), {}) : Pt(i) && this.events.emit(ze("session_update", s), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Tt(Di)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (n) {
        await this.sendError(s, r, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: s } = i;
      kt(i) ? this.events.emit(ze("session_extend", s), {}) : Pt(i) && this.events.emit(ze("session_extend", s), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: s, topic: r });
      } catch (n) {
        await this.sendError(s, r, n), this.client.logger.error(n);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: s } = i;
      setTimeout(() => {
        kt(i) ? this.events.emit(ze("session_ping", s), {}) : Pt(i) && this.events.emit(ze("session_ping", s), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(lt.publish, async () => {
            n(await this.deleteSession(r));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: s, topic: r });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        this.isValidRequest(bt({ topic: r }, n)), await this.setPendingSessionRequest({ id: s, topic: r, params: n }), this.addSessionRequestToSessionRequestQueue({ id: s, topic: r, params: n }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: s } = i;
      kt(i) ? this.events.emit(ze("session_request", s), { result: i.result }) : Pt(i) && this.events.emit(ze("session_request", s), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        const u = `${r}_session_event_${n.event.name}`, c = Ei.get(u);
        if (c && this.isRequestOutOfSync(c, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(bt({ topic: r }, n)), this.client.events.emit("session_event", { id: s, topic: r, params: n }), Ei.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
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
        const { id: i, topic: s, params: n } = r, u = Cr(JSON.stringify(ii("wc_sessionRequest", n, i))), c = this.client.session.get(s), h = await this.getVerifyContext(u, c.peer.metadata);
        this.sessionRequestQueue.state = Wt.active, this.client.events.emit("session_request", { id: i, topic: s, params: n, verifyContext: h });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!wt(r)) {
        const { message: h } = k("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: n, sessionProperties: u, relays: c } = r;
      if (pt(i) || await this.isValidPairingTopic(i), !Ip(c, !0)) {
        const { message: h } = k("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(h);
      }
      !pt(s) && Xr(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !pt(n) && Xr(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const s = Sp(r, "connect()", i);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!wt(r))
        throw new Error(k("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: s, relayProtocol: n, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), h = xi(s, "approve()");
      if (h)
        throw new Error(h.message);
      const l = Do(c.requiredNamespaces, s, "approve()");
      if (l)
        throw new Error(l.message);
      if (!tt(n, !0)) {
        const { message: p } = k("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(p);
      }
      pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!wt(r)) {
        const { message: n } = k("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(n);
      }
      const { id: i, reason: s } = r;
      if (await this.isValidProposalId(i), !Op(s)) {
        const { message: n } = k("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!wt(r)) {
        const { message: l } = k("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: i, controller: s, namespaces: n, expiry: u } = r;
      if (!rc(i)) {
        const { message: l } = k("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const c = wp(s, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const h = xi(n, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      if (Zt(u)) {
        const { message: l } = k("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!wt(r)) {
        const { message: h } = k("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, namespaces: s } = r;
      await this.isValidSessionTopic(i);
      const n = this.client.session.get(i), u = xi(s, "update()");
      if (u)
        throw new Error(u.message);
      const c = Do(n.requiredNamespaces, s, "update()");
      if (c)
        throw new Error(c.message);
    }, this.isValidExtend = async (r) => {
      if (!wt(r)) {
        const { message: s } = k("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!wt(r)) {
        const { message: h } = k("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, request: s, chainId: n, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: c } = this.client.session.get(i);
      if (!Eo(c, n)) {
        const { message: h } = k("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(h);
      }
      if (!Ap(s)) {
        const { message: h } = k("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(h);
      }
      if (!Tp(c, n, s.method)) {
        const { message: h } = k("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(h);
      }
      if (u && !Up(u, fs)) {
        const { message: h } = k("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${fs.min} and ${fs.max}`);
        throw new Error(h);
      }
    }, this.isValidRespond = async (r) => {
      if (!wt(r)) {
        const { message: n } = k("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i, response: s } = r;
      if (await this.isValidSessionTopic(i), !Cp(s)) {
        const { message: n } = k("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (r) => {
      if (!wt(r)) {
        const { message: s } = k("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!wt(r)) {
        const { message: c } = k("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(c);
      }
      const { topic: i, event: s, chainId: n } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!Eo(u, n)) {
        const { message: c } = k("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(c);
      }
      if (!Np(s)) {
        const { message: c } = k("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!Pp(u, n, s.name)) {
        const { message: c } = k("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(c);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!wt(r)) {
        const { message: s } = k("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const s = { verified: { verifyUrl: i.verifyUrl || Oi, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        n && (s.verified.origin = n, s.verified.validation = n === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.error(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((s) => {
        if (!tt(s, !1)) {
          const { message: n } = k("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(n);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = k("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(lt.message, async (e) => {
      const { topic: r, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const s = await this.client.core.crypto.decode(r, i);
      try {
        Zs(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Vi(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (n) {
        this.client.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Ot.expired, async (e) => {
      const { topic: r, id: i } = ec(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, k("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = k("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = k("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Zt(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = k("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = k("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = k("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Zt(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = k("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (tt(e, !1)) {
      const { message: r } = k("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = k("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!xp(e)) {
      const { message: r } = k("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = k("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Zt(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = k("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class Jy extends ki {
  constructor(e, r) {
    super(e, r, $y, rn), this.core = e, this.logger = r;
  }
}
class Qy extends ki {
  constructor(e, r) {
    super(e, r, qy, rn), this.core = e, this.logger = r;
  }
}
class Xy extends ki {
  constructor(e, r) {
    super(e, r, zy, rn, (i) => i.id), this.core = e, this.logger = r;
  }
}
class sn extends Wh {
  constructor(e) {
    super(e), this.protocol = Ec, this.version = Dc, this.name = ls.name, this.events = new Lt.EventEmitter(), this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (e == null ? void 0 : e.name) || ls.name, this.metadata = (e == null ? void 0 : e.metadata) || Kd();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : me.pino(me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || ls.logger }));
    this.core = (e == null ? void 0 : e.core) || new My(e), this.logger = me.generateChildLogger(r, this.name), this.session = new Qy(this.core, this.logger), this.proposal = new Jy(this.core, this.logger), this.pendingRequest = new Xy(this.core, this.logger), this.engine = new Yy(this);
  }
  static async init(e) {
    const r = new sn(e);
    return await r.initialize(), r;
  }
  get context() {
    return me.getLoggerContext(this.logger);
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
var Zy = Object.defineProperty, e1 = Object.defineProperties, t1 = Object.getOwnPropertyDescriptors, ea = Object.getOwnPropertySymbols, r1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, ta = (t, e, r) => e in t ? Zy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, s1 = (t, e) => {
  for (var r in e || (e = {}))
    r1.call(e, r) && ta(t, r, e[r]);
  if (ea)
    for (var r of ea(e))
      i1.call(e, r) && ta(t, r, e[r]);
  return t;
}, n1 = (t, e) => e1(t, t1(e)), nn = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Ce = (t, e, r) => (nn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), dr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Li = (t, e, r, i) => (nn(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), ct = (t, e, r) => (nn(t, e, "access private method"), r), pr, Or, Jr, et, Rs, Ic, ut, dt, Ls, ra;
class o1 {
  constructor(e) {
    dr(this, Rs), dr(this, ut), dr(this, Ls), dr(this, pr, void 0), dr(this, Or, void 0), dr(this, Jr, void 0), dr(this, et, void 0), Li(this, pr, e), Li(this, Or, ct(this, Rs, Ic).call(this)), ct(this, ut, dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: i } = e;
    return new Promise(async (s, n) => {
      await ct(this, ut, dt).call(this);
      const u = Ce(this, Or).subscribeModal((l) => {
        l.open || (u(), n(new Error("Modal closed")));
      }), { uri: c, approval: h } = await Ce(this, et).connect(e);
      if (c) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: p }) => {
          p && p.forEach((m) => l.add(m));
        }), i && Object.values(i).forEach(({ chains: p }) => {
          p && p.forEach((m) => l.add(m));
        }), await Ce(this, Or).openModal({ uri: c, chains: Array.from(l) });
      }
      try {
        const l = await h();
        s(l);
      } catch (l) {
        n(l);
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
pr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakSet(), Ic = function() {
  const { modalOptions: t, projectId: e } = Ce(this, pr);
  return new ju(n1(s1({}, t), { projectId: e }));
}, ut = /* @__PURE__ */ new WeakSet(), dt = async function() {
  return Ce(this, et) ? !0 : (!Ce(this, Jr) && typeof window < "u" && Li(this, Jr, ct(this, Ls, ra).call(this)), Ce(this, Jr));
}, Ls = /* @__PURE__ */ new WeakSet(), ra = async function() {
  Li(this, et, await sn.init({ metadata: Ce(this, pr).metadata, projectId: Ce(this, pr).projectId, relayUrl: Ce(this, pr).relayUrl }));
  const t = await Ce(this, et).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const xc = [
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
], on = ["aleo:1"], Oc = ["chainChanged", "accountSelected", "accountSynced"], a1 = "f0aaeffe71b636da453fce042d79d723", ia = "https://walletconnect.puzzle.online/", c1 = {
  standaloneChains: on,
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
        universal: ia
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: ia
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, O1 = {
  requiredNamespaces: {
    aleo: {
      methods: xc,
      chains: on,
      events: Oc
    }
  }
};
function u1(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, r) {
    var i = t.get(e);
    i ? i.push(r) : t.set(e, [r]);
  }, off: function(e, r) {
    var i = t.get(e);
    i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, r) {
    var i = t.get(e);
    i && i.slice().map(function(s) {
      s(r);
    }), (i = t.get("*")) && i.slice().map(function(s) {
      s(e, r);
    });
  } };
}
const Ui = u1();
let Qr;
function A1(t) {
  Qr = new o1({
    projectId: a1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...c1 }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
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
function an(t) {
  br(() => (Ue().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function h1(t) {
  br(() => (Ue().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Ac(t) {
  br(() => (Ue().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Cc() {
  const [t, e] = yr(void 0);
  return an((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Ac((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: i } = r.params, s = { ...t, namespaces: i };
      e(s);
    }
  }), h1((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), br(() => {
    async function r() {
      const s = await (await Ue()).getSession();
      e(s);
    }
    return r(), Ui.on("session_change", r), () => {
      Ui.off("session_change", r);
    };
  }, []), t;
}
function Nc(t) {
  br(() => (Ue().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Ue().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const sa = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, C1 = () => {
  const t = "aleo:1", [e, r] = yr(void 0), [i, s] = yr(void 0), [n, u] = yr(!1), c = Cc(), h = async () => {
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
        r(p.account), s(p.error);
      } catch (l) {
        s(l.message);
      } finally {
        u(!1);
      }
  };
  return Nc(({ params: l, topic: p }) => {
    if (l.event.name === "accountSelected" && c && c.topic === p) {
      const E = l.event.data, _ = l.chainId.split(":")[0], x = l.chainId.split(":")[1];
      r({
        network: _,
        chainId: x,
        address: E,
        shortenedAddress: sa(E)
      });
    }
  }), Ac(({ params: l, topic: p }) => {
    const m = l.event.data, E = l.chainId.split(":")[0], _ = l.chainId.split(":")[1];
    r({
      network: E,
      chainId: _,
      address: m,
      shortenedAddress: sa(m)
    });
  }), an(({ params: l, topic: p }) => {
    r(void 0);
  }), br(() => {
    c && !n && h(), c || r(void 0);
  }, [c]), {
    account: e,
    error: i,
    loading: n
  };
}, N1 = () => {
  const t = "aleo:1", [e, r] = yr(void 0), [i, s] = yr(void 0), [n, u] = yr(!1), c = Cc(), h = async () => {
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
      r(p.balances), s(p.error);
    } catch (l) {
      s(l.message);
    } finally {
      u(!1);
    }
  };
  return Nc(({ params: l, topic: p }) => {
    l.event.name === "accountSynced" && c && c.topic === p && !n && h();
  }), an(({ params: l, topic: p }) => {
    r(void 0);
  }), br(() => {
    c && !n && h(), c || r(void 0);
  }, [c]), { balances: e, error: i, loading: n };
}, T1 = async () => {
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
        method: "getSelectedAccount"
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("getAccount error", s), { error: s };
  }
}, P1 = async () => {
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
    const s = i.message;
    return console.error("getBalance error", s), { error: s };
  }
}, R1 = async () => {
  const t = await Ue();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: xc,
          chains: on,
          events: Oc
        }
      }
    });
    return Ui.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, L1 = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { error: "no session, chainId, or connection" };
  const s = t == null ? void 0 : t.inputs.map((n) => typeof n == "string" ? n : n.plaintext);
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
          inputs: s
        }
      }
    });
  } catch (n) {
    const u = n.message;
    return console.error("createEvent error", u), { error: u };
  }
}, U1 = async () => {
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
    const s = i.message;
    return console.error("createSharedState error", s), { error: s };
  }
}, F1 = async (t) => {
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
  } catch (s) {
    return console.error("decrypt error", s.message), { error: s.message };
  }
}, M1 = async () => {
  const t = await Ue(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: He("USER_DISCONNECTED"),
      topic: e.topic
    }), Ui.emit("session_change"), {};
  } catch (r) {
    const i = r.message;
    return console.error("error disconnecting", i), { error: i };
  }
}, $1 = async (t) => {
  const e = await Ue(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
  if (!r || !i || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = async (n = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: n
      }
    }
  });
  try {
    return await s();
  } catch (n) {
    const u = n.message;
    return console.error("getEvents error", u), { error: u };
  }
}, j1 = async (t) => {
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
  } catch (s) {
    const n = s.message;
    return console.error("importSharedState error", n), { error: n };
  }
}, q1 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const i = await Ue(), s = await (i == null ? void 0 : i.getSession()), n = "aleo:1";
  if (!s || !n || !i)
    return { error: "no session, chainId, or connection" };
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const u = async (c = 0) => await i.request({
    topic: s.topic,
    chainId: n,
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
    const h = c.message;
    return console.error("getRecords error", h), { error: h };
  }
}, B1 = async (t, e) => {
  const r = await Ue(), i = await (r == null ? void 0 : r.getSession()), s = "aleo:1";
  if (!i || !s || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: i.topic,
      chainId: s,
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
  } catch (n) {
    const u = n.message;
    return console.error("signature error", u), { error: u };
  }
}, z1 = 50;
export {
  P1 as A,
  R1 as B,
  L1 as C,
  U1 as D,
  F1 as E,
  M1 as F,
  $1 as G,
  j1 as H,
  q1 as I,
  B1 as J,
  z1 as P,
  Iu as R,
  na as T,
  ht as a,
  on as b,
  A1 as c,
  Oc as d,
  Ui as e,
  a1 as f,
  Ue as g,
  ia as h,
  c1 as i,
  O1 as j,
  sa as k,
  N1 as l,
  an as m,
  On as n,
  d1 as o,
  Rt as p,
  Nc as q,
  h1 as r,
  Ji as s,
  f1 as t,
  C1 as u,
  Ac as v,
  xc as w,
  Cc as x,
  Nr as y,
  T1 as z
};
