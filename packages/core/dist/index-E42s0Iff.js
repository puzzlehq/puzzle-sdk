const sh = Symbol(), uc = Object.getPrototypeOf, Ha = /* @__PURE__ */ new WeakMap(), ah = (t) => t && (Ha.has(t) ? Ha.get(t) : uc(t) === Object.prototype || uc(t) === Array.prototype), oh = (t) => ah(t) && t[sh] || null, lc = (t, e = !0) => {
  Ha.set(t, e);
};
var Cs = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const wa = (t) => typeof t == "object" && t !== null, Yr = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakSet(), ch = (t = Object.is, e = (u, h) => new Proxy(u, h), r = (u) => wa(u) && !ds.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), n = (u) => {
  switch (u.status) {
    case "fulfilled":
      return u.value;
    case "rejected":
      throw u.reason;
    default:
      throw u;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (u, h, p = n) => {
  const y = i.get(u);
  if ((y == null ? void 0 : y[0]) === h)
    return y[1];
  const v = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u));
  return lc(v, !0), i.set(u, [h, v]), Reflect.ownKeys(u).forEach((w) => {
    if (Object.getOwnPropertyDescriptor(v, w))
      return;
    const O = Reflect.get(u, w), I = {
      value: O,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (ds.has(O))
      lc(O, !1);
    else if (O instanceof Promise)
      delete I.value, I.get = () => p(O);
    else if (Yr.has(O)) {
      const [j, _] = Yr.get(
        O
      );
      I.value = s(
        j,
        _(),
        p
      );
    }
    Object.defineProperty(v, w, I);
  }), Object.preventExtensions(v);
}, o = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (u) => {
  if (!wa(u))
    throw new Error("object required");
  const h = o.get(u);
  if (h)
    return h;
  let p = a[0];
  const y = /* @__PURE__ */ new Set(), v = (F, $ = ++a[0]) => {
    p !== $ && (p = $, y.forEach((V) => V(F, $)));
  };
  let w = a[1];
  const O = (F = ++a[1]) => (w !== F && !y.size && (w = F, j.forEach(([$]) => {
    const V = $[1](F);
    V > p && (p = V);
  })), p), I = (F) => ($, V) => {
    const Y = [...$];
    Y[1] = [F, ...Y[1]], v(Y, V);
  }, j = /* @__PURE__ */ new Map(), _ = (F, $) => {
    if ((Cs ? "production" : void 0) !== "production" && j.has(F))
      throw new Error("prop listener already exists");
    if (y.size) {
      const V = $[3](I(F));
      j.set(F, [$, V]);
    } else
      j.set(F, [$]);
  }, R = (F) => {
    var $;
    const V = j.get(F);
    V && (j.delete(F), ($ = V[1]) == null || $.call(V));
  }, b = (F) => (y.add(F), y.size === 1 && j.forEach(([V, Y], ee) => {
    if ((Cs ? "production" : void 0) !== "production" && Y)
      throw new Error("remove already exists");
    const P = V[3](I(ee));
    j.set(ee, [V, P]);
  }), () => {
    y.delete(F), y.size === 0 && j.forEach(([V, Y], ee) => {
      Y && (Y(), j.set(ee, [V]));
    });
  }), S = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)), c = e(S, {
    deleteProperty(F, $) {
      const V = Reflect.get(F, $);
      R($);
      const Y = Reflect.deleteProperty(F, $);
      return Y && v(["delete", [$], V]), Y;
    },
    set(F, $, V, Y) {
      const ee = Reflect.has(F, $), P = Reflect.get(F, $, Y);
      if (ee && (t(P, V) || o.has(V) && t(P, o.get(V))))
        return !0;
      R($), wa(V) && (V = oh(V) || V);
      let U = V;
      if (V instanceof Promise)
        V.then((J) => {
          V.status = "fulfilled", V.value = J, v(["resolve", [$], J]);
        }).catch((J) => {
          V.status = "rejected", V.reason = J, v(["reject", [$], J]);
        });
      else {
        !Yr.has(V) && r(V) && (U = l(V));
        const J = !ds.has(U) && Yr.get(U);
        J && _($, J);
      }
      return Reflect.set(F, $, U, Y), v(["set", [$], V, P]), !0;
    }
  });
  o.set(u, c);
  const m = [
    S,
    O,
    s,
    b
  ];
  return Yr.set(c, m), Reflect.ownKeys(u).forEach((F) => {
    const $ = Object.getOwnPropertyDescriptor(
      u,
      F
    );
    "value" in $ && (c[F] = u[F], delete $.value, delete $.writable), Object.defineProperty(S, F, $);
  }), c;
}) => [
  // public functions
  l,
  // shared state
  Yr,
  ds,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  o,
  a
], [uh] = ch();
function sn(t = {}) {
  return uh(t);
}
function In(t, e, r) {
  const n = Yr.get(t);
  (Cs ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let i;
  const s = [], o = n[3];
  let a = !1;
  const u = o((h) => {
    if (s.push(h), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && e(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, u();
  };
}
function lh(t, e) {
  const r = Yr.get(t);
  (Cs ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, i, s] = r;
  return s(n, i(), e);
}
const Lt = sn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), ml = { state: Lt, subscribe(t) {
  return In(Lt, () => t(Lt));
}, push(t, e) {
  t !== Lt.view && (Lt.view = t, e && (Lt.data = e), Lt.history.push(t));
}, reset(t) {
  Lt.view = t, Lt.history = [t];
}, replace(t) {
  Lt.history.length > 1 && (Lt.history[Lt.history.length - 1] = t, Lt.view = t);
}, goBack() {
  if (Lt.history.length > 1) {
    Lt.history.pop();
    const [t] = Lt.history.slice(-1);
    Lt.view = t;
  }
}, setData(t) {
  Lt.data = t;
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
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!Wt.isHttpUrl(t))
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
  const e = (t = ml.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, fh = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), zt = sn({ enabled: fh, userSessionId: "", events: [], connectedWalletId: void 0 }), hh = { state: zt, subscribe(t) {
  return In(zt.events, () => t(lh(zt.events[zt.events.length - 1])));
}, initialize() {
  zt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (zt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  zt.connectedWalletId = t;
}, click(t) {
  if (zt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: zt.userSessionId, timestamp: Date.now(), data: t };
    zt.events.push(e);
  }
}, track(t) {
  if (zt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: zt.userSessionId, timestamp: Date.now(), data: t };
    zt.events.push(e);
  }
}, view(t) {
  if (zt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: zt.userSessionId, timestamp: Date.now(), data: t };
    zt.events.push(e);
  }
} }, Tr = sn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Sr = { state: Tr, subscribe(t) {
  return In(Tr, () => t(Tr));
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
} }, ps = sn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), ei = { state: ps, subscribe(t) {
  return In(ps, () => t(ps));
}, setConfig(t) {
  var e, r;
  hh.initialize(), Sr.setChains(t.chains), Sr.setIsAuth(!!t.enableAuthMode), Sr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Sr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Wt.setModalVersionInStorage(), Object.assign(ps, t);
} };
var dh = Object.defineProperty, fc = Object.getOwnPropertySymbols, ph = Object.prototype.hasOwnProperty, gh = Object.prototype.propertyIsEnumerable, hc = (t, e, r) => e in t ? dh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yh = (t, e) => {
  for (var r in e || (e = {}))
    ph.call(e, r) && hc(t, r, e[r]);
  if (fc)
    for (var r of fc(e))
      gh.call(e, r) && hc(t, r, e[r]);
  return t;
};
const Ga = "https://explorer-api.walletconnect.com", Za = "wcm", Ya = "js-2.6.2";
async function gs(t, e) {
  const r = yh({ sdkType: Za, sdkVersion: Ya }, e), n = new URL(t, Ga);
  return n.searchParams.append("projectId", ei.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const pn = { async getDesktopListings(t) {
  return gs("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return gs("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return gs("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return gs("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Ga}/w3m/v1/getWalletImage/${t}?projectId=${ei.state.projectId}&sdkType=${Za}&sdkVersion=${Ya}`;
}, getAssetImageUrl(t) {
  return `${Ga}/w3m/v1/getAssetImage/${t}?projectId=${ei.state.projectId}&sdkType=${Za}&sdkVersion=${Ya}`;
} };
var mh = Object.defineProperty, dc = Object.getOwnPropertySymbols, vh = Object.prototype.hasOwnProperty, bh = Object.prototype.propertyIsEnumerable, pc = (t, e, r) => e in t ? mh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, _h = (t, e) => {
  for (var r in e || (e = {}))
    vh.call(e, r) && pc(t, r, e[r]);
  if (dc)
    for (var r of dc(e))
      bh.call(e, r) && pc(t, r, e[r]);
  return t;
};
const gc = Wt.isMobile(), Pr = sn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), x1 = { state: Pr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = ei.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Pr.recomendedWallets;
  if (Wt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await pn.getAllListings(r), i = Object.values(n);
    i.sort((s, o) => {
      const a = t.indexOf(s.id), l = t.indexOf(o.id);
      return a - l;
    }), Pr.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Sr.state, i = r == null ? void 0 : r.join(","), s = Wt.isArray(e), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Wt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: a } = gc ? await pn.getMobileListings(o) : await pn.getDesktopListings(o);
    Pr.recomendedWallets = Object.values(a);
  }
  return Pr.recomendedWallets;
}, async getWallets(t) {
  const e = _h({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = ei.state, { recomendedWallets: i } = Pr;
  if (n === "ALL")
    return Pr.wallets;
  i.length ? e.excludedIds = i.map((p) => p.id).join(",") : Wt.isArray(r) && (e.excludedIds = r.join(",")), Wt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Sr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: o } = t, { listings: a, total: l } = gc ? await pn.getMobileListings(e) : await pn.getDesktopListings(e), u = Object.values(a), h = o ? "search" : "wallets";
  return Pr[h] = { listings: [...Pr[h].listings, ...u], total: l, page: s ?? 1 }, { listings: u, total: l };
}, getWalletImageUrl(t) {
  return pn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return pn.getAssetImageUrl(t);
}, resetSearch() {
  Pr.search = { listings: [], total: 0, page: 1 };
} }, zn = sn({ open: !1 }), Ea = { state: zn, subscribe(t) {
  return In(zn, () => t(zn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Sr.state;
    if (Wt.removeWalletConnectDeepLink(), Sr.setWalletConnectUri(t == null ? void 0 : t.uri), Sr.setChains(t == null ? void 0 : t.chains), ml.reset("ConnectWallet"), r && n)
      zn.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = Sr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), zn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  zn.open = !1;
} };
var wh = Object.defineProperty, yc = Object.getOwnPropertySymbols, Eh = Object.prototype.hasOwnProperty, Sh = Object.prototype.propertyIsEnumerable, mc = (t, e, r) => e in t ? wh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Dh = (t, e) => {
  for (var r in e || (e = {}))
    Eh.call(e, r) && mc(t, r, e[r]);
  if (yc)
    for (var r of yc(e))
      Sh.call(e, r) && mc(t, r, e[r]);
  return t;
};
function Oh() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const pi = sn({ themeMode: Oh() ? "dark" : "light" }), vc = { state: pi, subscribe(t) {
  return In(pi, () => t(pi));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (pi.themeMode = e), r && (pi.themeVariables = Dh({}, r));
} }, gn = sn({ open: !1, message: "", variant: "success" }), C1 = { state: gn, subscribe(t) {
  return In(gn, () => t(gn));
}, openToast(t, e) {
  gn.open = !0, gn.message = t, gn.variant = e;
}, closeToast() {
  gn.open = !1;
} };
let xh = class {
  constructor(e) {
    this.openModal = Ea.open, this.closeModal = Ea.close, this.subscribeModal = Ea.subscribe, this.setTheme = vc.setThemeConfig, vc.setThemeConfig(e), ei.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-UbZ0jont.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Sr.setIsUiLoaded(!0);
    }
  }
};
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ni(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ws(t) {
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
var Ao = { exports: {} }, Yn = typeof Reflect == "object" ? Reflect : null, bc = Yn && typeof Yn.apply == "function" ? Yn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Es;
Yn && typeof Yn.ownKeys == "function" ? Es = Yn.ownKeys : Object.getOwnPropertySymbols ? Es = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Es = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Ch(t) {
  console && console.warn && console.warn(t);
}
var vl = Number.isNaN || function(e) {
  return e !== e;
};
function at() {
  at.init.call(this);
}
Ao.exports = at;
Ao.exports.once = Ph;
at.EventEmitter = at;
at.prototype._events = void 0;
at.prototype._eventsCount = 0;
at.prototype._maxListeners = void 0;
var _c = 10;
function Hs(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(at, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return _c;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || vl(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    _c = t;
  }
});
at.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
at.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || vl(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function bl(t) {
  return t._maxListeners === void 0 ? at.defaultMaxListeners : t._maxListeners;
}
at.prototype.getMaxListeners = function() {
  return bl(this);
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
    var o;
    if (r.length > 0 && (o = r[0]), o instanceof Error)
      throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var l = s[e];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    bc(l, this, r);
  else
    for (var u = l.length, h = Dl(l, u), n = 0; n < u; ++n)
      bc(h[n], this, r);
  return !0;
};
function _l(t, e, r, n) {
  var i, s, o;
  if (Hs(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), o = s[e]), o === void 0)
    o = s[e] = r, ++t._eventsCount;
  else if (typeof o == "function" ? o = s[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), i = bl(t), i > 0 && o.length > i && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = o.length, Ch(a);
  }
  return t;
}
at.prototype.addListener = function(e, r) {
  return _l(this, e, r, !1);
};
at.prototype.on = at.prototype.addListener;
at.prototype.prependListener = function(e, r) {
  return _l(this, e, r, !0);
};
function Ih() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function wl(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = Ih.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
at.prototype.once = function(e, r) {
  return Hs(r), this.on(e, wl(this, e, r)), this;
};
at.prototype.prependOnceListener = function(e, r) {
  return Hs(r), this.prependListener(e, wl(this, e, r)), this;
};
at.prototype.removeListener = function(e, r) {
  var n, i, s, o, a;
  if (Hs(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === r || n[o].listener === r) {
        a = n[o].listener, s = o;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Rh(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r);
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
    var s = Object.keys(n), o;
    for (i = 0; i < s.length; ++i)
      o = s[i], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function El(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Th(i) : Dl(i, i.length);
}
at.prototype.listeners = function(e) {
  return El(this, e, !0);
};
at.prototype.rawListeners = function(e) {
  return El(this, e, !1);
};
at.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Sl.call(t, e);
};
at.prototype.listenerCount = Sl;
function Sl(t) {
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
  return this._eventsCount > 0 ? Es(this._events) : [];
};
function Dl(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Rh(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Th(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Ph(t, e) {
  return new Promise(function(r, n) {
    function i(o) {
      t.removeListener(e, s), n(o);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Ol(t, e, s, { once: !0 }), e !== "error" && Ah(t, i, { once: !0 });
  });
}
function Ah(t, e, r) {
  typeof t.on == "function" && Ol(t, "error", e, r);
}
function Ol(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var mr = Ao.exports;
const Gs = /* @__PURE__ */ ni(mr), Nh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Lh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Fh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Mh(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Uh(t);
    return;
  }
  return e;
}
function Uh(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function ys(t, e = {}) {
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
  if (!Fh.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (Nh.test(t) || Lh.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Mh);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function jh(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Ft(t, ...e) {
  try {
    return jh(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function $h(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function kh(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Ss(t) {
  if ($h(t))
    return String(t);
  if (kh(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Ss(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function xl() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Qa = "base64:";
function qh(t) {
  if (typeof t == "string")
    return t;
  xl();
  const e = Buffer.from(t).toString("base64");
  return Qa + e;
}
function zh(t) {
  return typeof t != "string" || !t.startsWith(Qa) ? t : (xl(), Buffer.from(t.slice(Qa.length), "base64"));
}
function ar(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Bh(...t) {
  return ar(t.join(":"));
}
function ms(t) {
  return t = ar(t), t ? t + ":" : "";
}
const Vh = "memory", Kh = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Vh,
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
function Wh(t = {}) {
  const e = {
    mounts: { "": t.driver || Kh() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (u) => {
    for (const h of e.mountpoints)
      if (u.startsWith(h))
        return {
          base: h,
          relativeKey: u.slice(h.length),
          driver: e.mounts[h]
        };
    return {
      base: "",
      relativeKey: u,
      driver: e.mounts[""]
    };
  }, n = (u, h) => e.mountpoints.filter(
    (p) => p.startsWith(u) || h && u.startsWith(p)
  ).map((p) => ({
    relativeBase: u.length > p.length ? u.slice(p.length) : void 0,
    mountpoint: p,
    driver: e.mounts[p]
  })), i = (u, h) => {
    if (e.watching) {
      h = ar(h);
      for (const p of e.watchListeners)
        p(u, h);
    }
  }, s = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const u in e.mounts)
        e.unwatch[u] = await wc(
          e.mounts[u],
          i,
          u
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const u in e.unwatch)
        await e.unwatch[u]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (u, h, p) => {
    const y = /* @__PURE__ */ new Map(), v = (w) => {
      let O = y.get(w.base);
      return O || (O = {
        driver: w.driver,
        base: w.base,
        items: []
      }, y.set(w.base, O)), O;
    };
    for (const w of u) {
      const O = typeof w == "string", I = ar(O ? w : w.key), j = O ? void 0 : w.value, _ = O || !w.options ? h : { ...h, ...w.options }, R = r(I);
      v(R).items.push({
        key: I,
        value: j,
        relativeKey: R.relativeKey,
        options: _
      });
    }
    return Promise.all([...y.values()].map((w) => p(w))).then(
      (w) => w.flat()
    );
  }, l = {
    // Item
    hasItem(u, h = {}) {
      u = ar(u);
      const { relativeKey: p, driver: y } = r(u);
      return Ft(y.hasItem, p, h);
    },
    getItem(u, h = {}) {
      u = ar(u);
      const { relativeKey: p, driver: y } = r(u);
      return Ft(y.getItem, p, h).then(
        (v) => ys(v)
      );
    },
    getItems(u, h) {
      return a(u, h, (p) => p.driver.getItems ? Ft(
        p.driver.getItems,
        p.items.map((y) => ({
          key: y.relativeKey,
          options: y.options
        })),
        h
      ).then(
        (y) => y.map((v) => ({
          key: Bh(p.base, v.key),
          value: ys(v.value)
        }))
      ) : Promise.all(
        p.items.map((y) => Ft(
          p.driver.getItem,
          y.relativeKey,
          y.options
        ).then((v) => ({
          key: y.key,
          value: ys(v)
        })))
      ));
    },
    getItemRaw(u, h = {}) {
      u = ar(u);
      const { relativeKey: p, driver: y } = r(u);
      return y.getItemRaw ? Ft(y.getItemRaw, p, h) : Ft(y.getItem, p, h).then(
        (v) => zh(v)
      );
    },
    async setItem(u, h, p = {}) {
      if (h === void 0)
        return l.removeItem(u);
      u = ar(u);
      const { relativeKey: y, driver: v } = r(u);
      v.setItem && (await Ft(v.setItem, y, Ss(h), p), v.watch || i("update", u));
    },
    async setItems(u, h) {
      await a(u, h, async (p) => {
        p.driver.setItems && await Ft(
          p.driver.setItems,
          p.items.map((y) => ({
            key: y.relativeKey,
            value: Ss(y.value),
            options: y.options
          })),
          h
        ), p.driver.setItem && await Promise.all(
          p.items.map((y) => Ft(
            p.driver.setItem,
            y.relativeKey,
            Ss(y.value),
            y.options
          ))
        );
      });
    },
    async setItemRaw(u, h, p = {}) {
      if (h === void 0)
        return l.removeItem(u, p);
      u = ar(u);
      const { relativeKey: y, driver: v } = r(u);
      if (v.setItemRaw)
        await Ft(v.setItemRaw, y, h, p);
      else if (v.setItem)
        await Ft(v.setItem, y, qh(h), p);
      else
        return;
      v.watch || i("update", u);
    },
    async removeItem(u, h = {}) {
      typeof h == "boolean" && (h = { removeMeta: h }), u = ar(u);
      const { relativeKey: p, driver: y } = r(u);
      y.removeItem && (await Ft(y.removeItem, p, h), (h.removeMeta || h.removeMata) && await Ft(y.removeItem, p + "$", h), y.watch || i("remove", u));
    },
    // Meta
    async getMeta(u, h = {}) {
      typeof h == "boolean" && (h = { nativeOnly: h }), u = ar(u);
      const { relativeKey: p, driver: y } = r(u), v = /* @__PURE__ */ Object.create(null);
      if (y.getMeta && Object.assign(v, await Ft(y.getMeta, p, h)), !h.nativeOnly) {
        const w = await Ft(
          y.getItem,
          p + "$",
          h
        ).then((O) => ys(O));
        w && typeof w == "object" && (typeof w.atime == "string" && (w.atime = new Date(w.atime)), typeof w.mtime == "string" && (w.mtime = new Date(w.mtime)), Object.assign(v, w));
      }
      return v;
    },
    setMeta(u, h, p = {}) {
      return this.setItem(u + "$", h, p);
    },
    removeMeta(u, h = {}) {
      return this.removeItem(u + "$", h);
    },
    // Keys
    async getKeys(u, h = {}) {
      u = ms(u);
      const p = n(u, !0);
      let y = [];
      const v = [];
      for (const w of p) {
        const I = (await Ft(
          w.driver.getKeys,
          w.relativeBase,
          h
        )).map((j) => w.mountpoint + ar(j)).filter((j) => !y.some((_) => j.startsWith(_)));
        v.push(...I), y = [
          w.mountpoint,
          ...y.filter((j) => !j.startsWith(w.mountpoint))
        ];
      }
      return u ? v.filter((w) => w.startsWith(u) && !w.endsWith("$")) : v.filter((w) => !w.endsWith("$"));
    },
    // Utils
    async clear(u, h = {}) {
      u = ms(u), await Promise.all(
        n(u, !1).map(async (p) => {
          if (p.driver.clear)
            return Ft(p.driver.clear, p.relativeBase, h);
          if (p.driver.removeItem) {
            const y = await p.driver.getKeys(p.relativeBase || "", h);
            return Promise.all(
              y.map((v) => p.driver.removeItem(v, h))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((u) => Ec(u))
      );
    },
    async watch(u) {
      return await s(), e.watchListeners.push(u), async () => {
        e.watchListeners = e.watchListeners.filter(
          (h) => h !== u
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(u, h) {
      if (u = ms(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((p, y) => y.length - p.length)), e.mounts[u] = h, e.watching && Promise.resolve(wc(h, i, u)).then((p) => {
        e.unwatch[u] = p;
      }).catch(console.error), l;
    },
    async unmount(u, h = !0) {
      u = ms(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), h && await Ec(e.mounts[u]), e.mountpoints = e.mountpoints.filter((p) => p !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = ar(u) + ":";
      const h = r(u);
      return {
        driver: h.driver,
        base: h.base
      };
    },
    getMounts(u = "", h = {}) {
      return u = ar(u), n(u, h.parents).map((y) => ({
        driver: y.driver,
        base: y.mountpoint
      }));
    }
  };
  return l;
}
function wc(t, e, r) {
  return t.watch ? t.watch((n, i) => e(n, r + i)) : () => {
  };
}
async function Ec(t) {
  typeof t.dispose == "function" && await Ft(t.dispose);
}
function Rn(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Cl(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = Rn(r);
  return (i, s) => n.then((o) => s(o.transaction(e, i).objectStore(e)));
}
let Sa;
function Bi() {
  return Sa || (Sa = Cl("keyval-store", "keyval")), Sa;
}
function Sc(t, e = Bi()) {
  return e("readonly", (r) => Rn(r.get(t)));
}
function Hh(t, e, r = Bi()) {
  return r("readwrite", (n) => (n.put(e, t), Rn(n.transaction)));
}
function Gh(t, e = Bi()) {
  return e("readwrite", (r) => (r.delete(t), Rn(r.transaction)));
}
function Zh(t = Bi()) {
  return t("readwrite", (e) => (e.clear(), Rn(e.transaction)));
}
function Yh(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Rn(t.transaction);
}
function Qh(t = Bi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Rn(e.getAllKeys());
    const r = [];
    return Yh(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Jh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Xh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Zs(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Xh(t);
  } catch {
    return t;
  }
}
function Vi(t) {
  return typeof t == "string" ? t : Jh(t) || "";
}
const ed = "idb-keyval";
var td = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (i) => e + i;
  let n;
  return t.dbName && t.storeName && (n = Cl(t.dbName, t.storeName)), { name: ed, options: t, async hasItem(i) {
    return !(typeof await Sc(r(i), n) > "u");
  }, async getItem(i) {
    return await Sc(r(i), n) ?? null;
  }, setItem(i, s) {
    return Hh(r(i), s, n);
  }, removeItem(i) {
    return Gh(r(i), n);
  }, getKeys() {
    return Qh(n);
  }, clear() {
    return Zh(n);
  } };
};
const rd = "WALLET_CONNECT_V2_INDEXED_DB", nd = "keyvaluestorage";
let id = class {
  constructor() {
    this.indexedDb = Wh({ driver: td({ dbName: rd, storeName: nd }) });
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
    await this.indexedDb.setItem(e, Vi(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ds = { exports: {} };
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
  }), typeof Da < "u" && Da.localStorage ? Ds.exports = Da.localStorage : typeof window < "u" && window.localStorage ? Ds.exports = window.localStorage : Ds.exports = new e();
})();
function sd(t) {
  var e;
  return [t[0], Zs((e = t[1]) != null ? e : "")];
}
class ad {
  constructor() {
    this.localStorage = Ds.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(sd);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Zs(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Vi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const od = "wc_storage_version", Dc = 1, cd = async (t, e, r) => {
  const n = od, i = await e.getItem(n);
  if (i && i >= Dc) {
    r(e);
    return;
  }
  const s = await t.getKeys();
  if (!s.length) {
    r(e);
    return;
  }
  const o = [];
  for (; s.length; ) {
    const a = s.shift();
    if (!a)
      continue;
    const l = a.toLowerCase();
    if (l.includes("wc@") || l.includes("walletconnect") || l.includes("wc_") || l.includes("wallet_connect")) {
      const u = await t.getItem(a);
      await e.setItem(a, u), o.push(a);
    }
  }
  await e.setItem(n, Dc), r(e), ud(t, o);
}, ud = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let ld = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new ad();
    this.storage = e;
    try {
      const r = new id();
      cd(e, r, this.setInitialized);
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
var ii = {};
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
var Ja = function(t, e) {
  return Ja = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, Ja(t, e);
};
function fd(t, e) {
  Ja(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Xa = function() {
  return Xa = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Xa.apply(this, arguments);
};
function hd(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function dd(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function pd(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function gd(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function yd(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        u(n.next(h));
      } catch (p) {
        o(p);
      }
    }
    function l(h) {
      try {
        u(n.throw(h));
      } catch (p) {
        o(p);
      }
    }
    function u(h) {
      h.done ? s(h.value) : i(h.value).then(a, l);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function md(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(h) {
      return l([u, h]);
    };
  }
  function l(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done)
          return s;
        switch (i = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
          case 0:
          case 1:
            s = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = u;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(u);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (h) {
        u = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function vd(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function bd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function eo(t) {
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
function Il(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function _d() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Il(arguments[e]));
  return t;
}
function wd() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Ii(t) {
  return this instanceof Ii ? (this.v = t, this) : new Ii(t);
}
function Ed(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(y) {
    n[y] && (i[y] = function(v) {
      return new Promise(function(w, O) {
        s.push([y, v, w, O]) > 1 || a(y, v);
      });
    });
  }
  function a(y, v) {
    try {
      l(n[y](v));
    } catch (w) {
      p(s[0][3], w);
    }
  }
  function l(y) {
    y.value instanceof Ii ? Promise.resolve(y.value.v).then(u, h) : p(s[0][2], y);
  }
  function u(y) {
    a("next", y);
  }
  function h(y) {
    a("throw", y);
  }
  function p(y, v) {
    y(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Sd(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(o) {
      return (r = !r) ? { value: Ii(t[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function Dd(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof eo == "function" ? eo(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(o) {
      return new Promise(function(a, l) {
        o = t[s](o), i(a, l, o.done, o.value);
      });
    };
  }
  function i(s, o, a, l) {
    Promise.resolve(l).then(function(u) {
      s({ value: u, done: a });
    }, o);
  }
}
function Od(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function xd(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Cd(t) {
  return t && t.__esModule ? t : { default: t };
}
function Id(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Rd(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Xa;
  },
  __asyncDelegator: Sd,
  __asyncGenerator: Ed,
  __asyncValues: Dd,
  __await: Ii,
  __awaiter: yd,
  __classPrivateFieldGet: Id,
  __classPrivateFieldSet: Rd,
  __createBinding: vd,
  __decorate: dd,
  __exportStar: bd,
  __extends: fd,
  __generator: md,
  __importDefault: Cd,
  __importStar: xd,
  __makeTemplateObject: Od,
  __metadata: gd,
  __param: pd,
  __read: Il,
  __rest: hd,
  __spread: _d,
  __spreadArrays: wd,
  __values: eo
}, Symbol.toStringTag, { value: "Module" })), Ur = /* @__PURE__ */ Ws(Td);
var gi = {}, ge = {}, Oa = {}, yi = {}, Oc;
function Pd() {
  if (Oc)
    return yi;
  Oc = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return yi.delay = t, yi;
}
var yn = {}, xa = {}, mn = {}, xc;
function Ad() {
  return xc || (xc = 1, Object.defineProperty(mn, "__esModule", { value: !0 }), mn.ONE_THOUSAND = mn.ONE_HUNDRED = void 0, mn.ONE_HUNDRED = 100, mn.ONE_THOUSAND = 1e3), mn;
}
var Ca = {}, Cc;
function Nd() {
  return Cc || (Cc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Ca)), Ca;
}
var Ic;
function Rl() {
  return Ic || (Ic = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Ur;
    e.__exportStar(Ad(), t), e.__exportStar(Nd(), t);
  }(xa)), xa;
}
var Rc;
function Ld() {
  if (Rc)
    return yn;
  Rc = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.fromMiliseconds = yn.toMiliseconds = void 0;
  const t = Rl();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  yn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return yn.fromMiliseconds = r, yn;
}
var Tc;
function Fd() {
  return Tc || (Tc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Ur;
    e.__exportStar(Pd(), t), e.__exportStar(Ld(), t);
  }(Oa)), Oa;
}
var Bn = {}, Pc;
function Md() {
  if (Pc)
    return Bn;
  Pc = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.Watch = void 0;
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
  return Bn.Watch = t, Bn.default = t, Bn;
}
var Ia = {}, mi = {}, Ac;
function Ud() {
  if (Ac)
    return mi;
  Ac = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.IWatch = void 0;
  class t {
  }
  return mi.IWatch = t, mi;
}
var Nc;
function jd() {
  return Nc || (Nc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Ur.__exportStar(Ud(), t);
  }(Ia)), Ia;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Ur;
  e.__exportStar(Fd(), t), e.__exportStar(Md(), t), e.__exportStar(jd(), t), e.__exportStar(Rl(), t);
})(ge);
var Ra = {}, vi = {};
let Tn = class {
};
const $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Tn
}, Symbol.toStringTag, { value: "Module" })), kd = /* @__PURE__ */ Ws($d);
var Lc;
function qd() {
  if (Lc)
    return vi;
  Lc = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.IHeartBeat = void 0;
  const t = kd;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return vi.IHeartBeat = e, vi;
}
var Fc;
function Tl() {
  return Fc || (Fc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Ur.__exportStar(qd(), t);
  }(Ra)), Ra;
}
var Ta = {}, vn = {}, Mc;
function zd() {
  if (Mc)
    return vn;
  Mc = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.HEARTBEAT_EVENTS = vn.HEARTBEAT_INTERVAL = void 0;
  const t = ge;
  return vn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, vn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, vn;
}
var Uc;
function Pl() {
  return Uc || (Uc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Ur.__exportStar(zd(), t);
  }(Ta)), Ta;
}
var jc;
function Bd() {
  if (jc)
    return gi;
  jc = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.HeartBeat = void 0;
  const t = Ur, e = mr, r = ge, n = Tl(), i = Pl();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
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
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return gi.HeartBeat = s, gi;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Ur;
  e.__exportStar(Bd(), t), e.__exportStar(Tl(), t), e.__exportStar(Pl(), t);
})(ii);
var Ye = {}, Pa, $c;
function Vd() {
  if ($c)
    return Pa;
  $c = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Pa = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var u = 1; u < a; u++)
        l[u] = s(n[u]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var h = n.length;
    if (h === 0)
      return r;
    for (var p = "", y = 1 - o, v = -1, w = r && r.length || 0, O = 0; O < w; ) {
      if (r.charCodeAt(O) === 37 && O + 1 < w) {
        switch (v = v > -1 ? v : 0, r.charCodeAt(O + 1)) {
          case 100:
          case 102:
            if (y >= h || n[y] == null)
              break;
            v < O && (p += r.slice(v, O)), p += Number(n[y]), v = O + 2, O++;
            break;
          case 105:
            if (y >= h || n[y] == null)
              break;
            v < O && (p += r.slice(v, O)), p += Math.floor(Number(n[y])), v = O + 2, O++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= h || n[y] === void 0)
              break;
            v < O && (p += r.slice(v, O));
            var I = typeof n[y];
            if (I === "string") {
              p += "'" + n[y] + "'", v = O + 2, O++;
              break;
            }
            if (I === "function") {
              p += n[y].name || "<anonymous>", v = O + 2, O++;
              break;
            }
            p += s(n[y]), v = O + 2, O++;
            break;
          case 115:
            if (y >= h)
              break;
            v < O && (p += r.slice(v, O)), p += String(n[y]), v = O + 2, O++;
            break;
          case 37:
            v < O && (p += r.slice(v, O)), p += "%", v = O + 2, O++, y--;
            break;
        }
        ++y;
      }
      ++O;
    }
    return v === -1 ? r : (v < w && (p += r.slice(v)), p);
  }
  return Pa;
}
var Aa, kc;
function Kd() {
  if (kc)
    return Aa;
  kc = 1;
  const t = Vd();
  Aa = i;
  const e = S().console || {}, r = {
    mapHttpRequest: w,
    mapHttpResponse: w,
    wrapRequestSerializer: O,
    wrapResponseSerializer: O,
    wrapErrorSerializer: O,
    req: w,
    res: w,
    err: y
  };
  function n(g, c) {
    return Array.isArray(g) ? g.filter(function(F) {
      return F !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(c) : !1;
  }
  function i(g) {
    g = g || {}, g.browser = g.browser || {};
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const m = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const F = g.serializers || {}, $ = n(g.browser.serialize, F);
    let V = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (V = !1);
    const Y = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof m == "function" && (m.error = m.fatal = m.warn = m.info = m.debug = m.trace = m), g.enabled === !1 && (g.level = "silent");
    const ee = g.level || "info", P = Object.create(m);
    P.log || (P.log = I), Object.defineProperty(P, "levelVal", {
      get: J
    }), Object.defineProperty(P, "level", {
      get: z,
      set: W
    });
    const U = {
      transmit: c,
      serialize: $,
      asObject: g.browser.asObject,
      levels: Y,
      timestamp: v(g)
    };
    P.levels = i.levels, P.level = ee, P.setMaxListeners = P.getMaxListeners = P.emit = P.addListener = P.on = P.prependListener = P.once = P.prependOnceListener = P.removeListener = P.removeAllListeners = P.listeners = P.listenerCount = P.eventNames = P.write = P.flush = I, P.serializers = F, P._serialize = $, P._stdErrSerialize = V, P.child = Z, c && (P._logEvent = p());
    function J() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function W(D) {
      if (D !== "silent" && !this.levels.values[D])
        throw Error("unknown level " + D);
      this._level = D, s(U, P, "error", "log"), s(U, P, "fatal", "error"), s(U, P, "warn", "error"), s(U, P, "info", "log"), s(U, P, "debug", "log"), s(U, P, "trace", "log");
    }
    function Z(D, k) {
      if (!D)
        throw new Error("missing bindings for child Pino");
      k = k || {}, $ && D.serializers && (k.serializers = D.serializers);
      const te = k.serializers;
      if ($ && te) {
        var K = Object.assign({}, F, te), ie = g.browser.serialize === !0 ? Object.keys(K) : $;
        delete D.serializers, l([D], ie, K, this._stdErrSerialize);
      }
      function X(ce) {
        this._childLevel = (ce._childLevel | 0) + 1, this.error = u(ce, D, "error"), this.fatal = u(ce, D, "fatal"), this.warn = u(ce, D, "warn"), this.info = u(ce, D, "info"), this.debug = u(ce, D, "debug"), this.trace = u(ce, D, "trace"), K && (this.serializers = K, this._serialize = ie), c && (this._logEvent = p(
          [].concat(ce._logEvent.bindings, D)
        ));
      }
      return X.prototype = this, new X(this);
    }
    return P;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: j, epochTime: _, unixTime: R, isoTime: b });
  function s(g, c, m, F) {
    const $ = Object.getPrototypeOf(c);
    c[m] = c.levelVal > c.levels.values[m] ? I : $[m] ? $[m] : e[m] || e[F] || I, o(g, c, m);
  }
  function o(g, c, m) {
    !g.transmit && c[m] === I || (c[m] = /* @__PURE__ */ function(F) {
      return function() {
        const V = g.timestamp(), Y = new Array(arguments.length), ee = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var P = 0; P < Y.length; P++)
          Y[P] = arguments[P];
        if (g.serialize && !g.asObject && l(Y, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? F.call(ee, a(this, m, Y, V)) : F.apply(ee, Y), g.transmit) {
          const U = g.transmit.level || c.level, J = i.levels.values[U], z = i.levels.values[m];
          if (z < J)
            return;
          h(this, {
            ts: V,
            methodLevel: m,
            methodValue: z,
            transmitLevel: U,
            transmitValue: i.levels.values[g.transmit.level || c.level],
            send: g.transmit.send,
            val: c.levelVal
          }, Y);
        }
      };
    }(c[m]));
  }
  function a(g, c, m, F) {
    g._serialize && l(m, g._serialize, g.serializers, g._stdErrSerialize);
    const $ = m.slice();
    let V = $[0];
    const Y = {};
    F && (Y.time = F), Y.level = i.levels.values[c];
    let ee = (g._childLevel | 0) + 1;
    if (ee < 1 && (ee = 1), V !== null && typeof V == "object") {
      for (; ee-- && typeof $[0] == "object"; )
        Object.assign(Y, $.shift());
      V = $.length ? t($.shift(), $) : void 0;
    } else
      typeof V == "string" && (V = t($.shift(), $));
    return V !== void 0 && (Y.msg = V), Y;
  }
  function l(g, c, m, F) {
    for (const $ in g)
      if (F && g[$] instanceof Error)
        g[$] = i.stdSerializers.err(g[$]);
      else if (typeof g[$] == "object" && !Array.isArray(g[$]))
        for (const V in g[$])
          c && c.indexOf(V) > -1 && V in m && (g[$][V] = m[V](g[$][V]));
  }
  function u(g, c, m) {
    return function() {
      const F = new Array(1 + arguments.length);
      F[0] = c;
      for (var $ = 1; $ < F.length; $++)
        F[$] = arguments[$ - 1];
      return g[m].apply(this, F);
    };
  }
  function h(g, c, m) {
    const F = c.send, $ = c.ts, V = c.methodLevel, Y = c.methodValue, ee = c.val, P = g._logEvent.bindings;
    l(
      m,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = $, g._logEvent.messages = m.filter(function(U) {
      return P.indexOf(U) === -1;
    }), g._logEvent.level.label = V, g._logEvent.level.value = Y, F(V, g._logEvent, ee), g._logEvent = p(P);
  }
  function p(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 }
    };
  }
  function y(g) {
    const c = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const m in g)
      c[m] === void 0 && (c[m] = g[m]);
    return c;
  }
  function v(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? j : _;
  }
  function w() {
    return {};
  }
  function O(g) {
    return g;
  }
  function I() {
  }
  function j() {
    return !1;
  }
  function _() {
    return Date.now();
  }
  function R() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
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
  return Aa;
}
var bn = {}, qc;
function Al() {
  return qc || (qc = 1, Object.defineProperty(bn, "__esModule", { value: !0 }), bn.PINO_CUSTOM_CONTEXT_KEY = bn.PINO_LOGGER_DEFAULTS = void 0, bn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, bn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), bn;
}
var Qt = {}, zc;
function Wd() {
  if (zc)
    return Qt;
  zc = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.generateChildLogger = Qt.formatChildLoggerContext = Qt.getLoggerContext = Qt.setBrowserLoggerContext = Qt.getBrowserLoggerContext = Qt.getDefaultLoggerOptions = void 0;
  const t = Al();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Qt.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  Qt.getBrowserLoggerContext = r;
  function n(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[u] = l, a;
  }
  Qt.setBrowserLoggerContext = n;
  function i(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let u = "";
    return typeof a.bindings > "u" ? u = r(a, l) : u = a.bindings().context || "", u;
  }
  Qt.getLoggerContext = i;
  function s(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const h = i(a, u);
    return h.trim() ? `${h}/${l}` : l;
  }
  Qt.formatChildLoggerContext = s;
  function o(a, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const h = s(a, l, u), p = a.child({ context: h });
    return n(p, h, u);
  }
  return Qt.generateChildLogger = o, Qt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Ur, r = e.__importDefault(Kd());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Al(), t), e.__exportStar(Wd(), t);
})(Ye);
let Hd = class extends Tn {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, N1 = class {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}, Gd = class extends Tn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Zd = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Yd = class extends Tn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Qd = class extends Tn {
  constructor(e) {
    super();
  }
}, Jd = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, k1 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
};
class Xd extends Tn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let z1 = class {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
};
class ep extends Tn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let V1 = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, tp = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, rp = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
};
class G1 extends Gs {
  constructor() {
    super();
  }
}
let np = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Y1 = class extends mr.EventEmitter {
  constructor() {
    super();
  }
}, ip = class {
  constructor(e) {
    this.client = e;
  }
};
var No = {}, si = {}, Ys = {}, Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.BrowserRandomSource = void 0;
const Bc = 65536;
class sp {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Bc)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Bc)));
    return r;
  }
}
Qs.BrowserRandomSource = sp;
function ap(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Js = {}, hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
function op(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
hr.wipe = op;
const cp = {}, up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cp
}, Symbol.toStringTag, { value: "Module" })), lp = /* @__PURE__ */ Ws(up);
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.NodeRandomSource = void 0;
const fp = hr;
class hp {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof ap < "u") {
      const e = lp;
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
    return (0, fp.wipe)(r), n;
  }
}
Js.NodeRandomSource = hp;
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.SystemRandomSource = void 0;
const dp = Qs, pp = Js;
class gp {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new dp.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new pp.NodeRandomSource(), this._source.isAvailable) {
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
Ys.SystemRandomSource = gp;
var Ae = {}, Nl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var u = a >>> 16 & 65535, h = a & 65535, p = l >>> 16 & 65535, y = l & 65535;
    return h * y + (u * y + h * p << 16 >>> 0) | 0;
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
  function i(a, l) {
    return a << l | a >>> 32 - l;
  }
  t.rotl = i;
  function s(a, l) {
    return a << 32 - l | a >>> l;
  }
  t.rotr = s;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || o, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(Nl);
Object.defineProperty(Ae, "__esModule", { value: !0 });
var Ll = Nl;
function yp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Ae.readInt16BE = yp;
function mp(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Ae.readUint16BE = mp;
function vp(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Ae.readInt16LE = vp;
function bp(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Ae.readUint16LE = bp;
function Fl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Ae.writeUint16BE = Fl;
Ae.writeInt16BE = Fl;
function Ml(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Ae.writeUint16LE = Ml;
Ae.writeInt16LE = Ml;
function to(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Ae.readInt32BE = to;
function ro(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Ae.readUint32BE = ro;
function no(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Ae.readInt32LE = no;
function io(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Ae.readUint32LE = io;
function Is(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Ae.writeUint32BE = Is;
Ae.writeInt32BE = Is;
function Rs(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Ae.writeUint32LE = Rs;
Ae.writeInt32LE = Rs;
function _p(t, e) {
  e === void 0 && (e = 0);
  var r = to(t, e), n = to(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Ae.readInt64BE = _p;
function wp(t, e) {
  e === void 0 && (e = 0);
  var r = ro(t, e), n = ro(t, e + 4);
  return r * 4294967296 + n;
}
Ae.readUint64BE = wp;
function Ep(t, e) {
  e === void 0 && (e = 0);
  var r = no(t, e), n = no(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Ae.readInt64LE = Ep;
function Sp(t, e) {
  e === void 0 && (e = 0);
  var r = io(t, e), n = io(t, e + 4);
  return n * 4294967296 + r;
}
Ae.readUint64LE = Sp;
function Ul(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Is(t / 4294967296 >>> 0, e, r), Is(t >>> 0, e, r + 4), e;
}
Ae.writeUint64BE = Ul;
Ae.writeInt64BE = Ul;
function jl(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Rs(t >>> 0, e, r), Rs(t / 4294967296 >>> 0, e, r + 4), e;
}
Ae.writeUint64LE = jl;
Ae.writeInt64LE = jl;
function Dp(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
Ae.readUintBE = Dp;
function Op(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
Ae.readUintLE = Op;
function xp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ll.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Ae.writeUintBE = xp;
function Cp(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ll.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
Ae.writeUintLE = Cp;
function Ip(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Ae.readFloat32BE = Ip;
function Rp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Ae.readFloat32LE = Rp;
function Tp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Ae.readFloat64BE = Tp;
function Pp(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Ae.readFloat64LE = Pp;
function Ap(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Ae.writeFloat32BE = Ap;
function Np(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Ae.writeFloat32LE = Np;
function Lp(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Ae.writeFloat64BE = Lp;
function Fp(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Ae.writeFloat64LE = Fp;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ys, r = Ae, n = hr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(u, h = t.defaultRandomSource) {
    return h.randomBytes(u);
  }
  t.randomBytes = i;
  function s(u = t.defaultRandomSource) {
    const h = i(4, u), p = (0, r.readUint32LE)(h);
    return (0, n.wipe)(h), p;
  }
  t.randomUint32 = s;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(u, h = o, p = t.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const v = h.length, w = 256 - 256 % v;
    for (; u > 0; ) {
      const O = i(Math.ceil(u * 256 / w), p);
      for (let I = 0; I < O.length && u > 0; I++) {
        const j = O[I];
        j < w && (y += h.charAt(j % v), u--);
      }
      (0, n.wipe)(O);
    }
    return y;
  }
  t.randomString = a;
  function l(u, h = o, p = t.defaultRandomSource) {
    const y = Math.ceil(u / (Math.log(h.length) / Math.LN2));
    return a(y, h, p);
  }
  t.randomStringForEntropy = l;
})(si);
var $l = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Ae, r = hr;
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
      }, a.prototype.update = function(l, u) {
        if (u === void 0 && (u = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && u > 0; )
            this._buffer[this._bufferLength++] = l[h++], u--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (h = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, h, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = l[h++], u--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var u = this._bytesHashed, h = this._bufferLength, p = u / 536870912 | 0, y = u << 3, v = u % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var w = h + 1; w < v - 8; w++)
            this._buffer[w] = 0;
          e.writeUint32BE(p, this._buffer, v - 8), e.writeUint32BE(y, this._buffer, v - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, v), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 8; w++)
          e.writeUint32BE(this._stateHi[w], l, w * 8), e.writeUint32BE(this._stateLo[w], l, w * 8 + 4);
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
  function s(a, l, u, h, p, y, v) {
    for (var w = u[0], O = u[1], I = u[2], j = u[3], _ = u[4], R = u[5], b = u[6], S = u[7], g = h[0], c = h[1], m = h[2], F = h[3], $ = h[4], V = h[5], Y = h[6], ee = h[7], P, U, J, z, W, Z, D, k; v >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var K = 8 * te + y;
        a[te] = e.readUint32BE(p, K), l[te] = e.readUint32BE(p, K + 4);
      }
      for (var te = 0; te < 80; te++) {
        var ie = w, X = O, ce = I, L = j, N = _, A = R, f = b, T = S, re = g, oe = c, Me = m, Ue = F, Oe = $, qe = V, ct = Y, Je = ee;
        if (P = S, U = ee, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = (_ >>> 14 | $ << 18) ^ (_ >>> 18 | $ << 14) ^ ($ >>> 9 | _ << 23), U = ($ >>> 14 | _ << 18) ^ ($ >>> 18 | _ << 14) ^ (_ >>> 9 | $ << 23), W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, P = _ & R ^ ~_ & b, U = $ & V ^ ~$ & Y, W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, P = i[te * 2], U = i[te * 2 + 1], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, P = a[te % 16], U = l[te % 16], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, J = D & 65535 | k << 16, z = W & 65535 | Z << 16, P = J, U = z, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = (w >>> 28 | g << 4) ^ (g >>> 2 | w << 30) ^ (g >>> 7 | w << 25), U = (g >>> 28 | w << 4) ^ (w >>> 2 | g << 30) ^ (w >>> 7 | g << 25), W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, P = w & O ^ w & I ^ O & I, U = g & c ^ g & m ^ c & m, W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, T = D & 65535 | k << 16, Je = W & 65535 | Z << 16, P = L, U = Ue, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = J, U = z, W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, L = D & 65535 | k << 16, Ue = W & 65535 | Z << 16, O = ie, I = X, j = ce, _ = L, R = N, b = A, S = f, w = T, c = re, m = oe, F = Me, $ = Ue, V = Oe, Y = qe, ee = ct, g = Je, te % 16 === 15)
          for (var K = 0; K < 16; K++)
            P = a[K], U = l[K], W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = a[(K + 9) % 16], U = l[(K + 9) % 16], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, J = a[(K + 1) % 16], z = l[(K + 1) % 16], P = (J >>> 1 | z << 31) ^ (J >>> 8 | z << 24) ^ J >>> 7, U = (z >>> 1 | J << 31) ^ (z >>> 8 | J << 24) ^ (z >>> 7 | J << 25), W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, J = a[(K + 14) % 16], z = l[(K + 14) % 16], P = (J >>> 19 | z << 13) ^ (z >>> 29 | J << 3) ^ J >>> 6, U = (z >>> 19 | J << 13) ^ (J >>> 29 | z << 3) ^ (z >>> 6 | J << 26), W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, a[K] = D & 65535 | k << 16, l[K] = W & 65535 | Z << 16;
      }
      P = w, U = g, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[0], U = h[0], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[0] = w = D & 65535 | k << 16, h[0] = g = W & 65535 | Z << 16, P = O, U = c, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[1], U = h[1], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[1] = O = D & 65535 | k << 16, h[1] = c = W & 65535 | Z << 16, P = I, U = m, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[2], U = h[2], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[2] = I = D & 65535 | k << 16, h[2] = m = W & 65535 | Z << 16, P = j, U = F, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[3], U = h[3], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[3] = j = D & 65535 | k << 16, h[3] = F = W & 65535 | Z << 16, P = _, U = $, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[4], U = h[4], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[4] = _ = D & 65535 | k << 16, h[4] = $ = W & 65535 | Z << 16, P = R, U = V, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[5], U = h[5], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[5] = R = D & 65535 | k << 16, h[5] = V = W & 65535 | Z << 16, P = b, U = Y, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[6], U = h[6], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[6] = b = D & 65535 | k << 16, h[6] = Y = W & 65535 | Z << 16, P = S, U = ee, W = U & 65535, Z = U >>> 16, D = P & 65535, k = P >>> 16, P = u[7], U = h[7], W += U & 65535, Z += U >>> 16, D += P & 65535, k += P >>> 16, Z += W >>> 16, D += Z >>> 16, k += D >>> 16, u[7] = S = D & 65535 | k << 16, h[7] = ee = W & 65535 | Z << 16, y += 128, v -= 128;
    }
    return y;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.hash = o;
})($l);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = si, r = $l, n = hr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(L) {
    const N = new Float64Array(16);
    if (L)
      for (let A = 0; A < L.length; A++)
        N[A] = L[A];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = i(), a = i([1]), l = i([
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
  ]), u = i([
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
  ]), h = i([
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
  ]), p = i([
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
  function v(L, N) {
    for (let A = 0; A < 16; A++)
      L[A] = N[A] | 0;
  }
  function w(L) {
    let N = 1;
    for (let A = 0; A < 16; A++) {
      let f = L[A] + N + 65535;
      N = Math.floor(f / 65536), L[A] = f - N * 65536;
    }
    L[0] += N - 1 + 37 * (N - 1);
  }
  function O(L, N, A) {
    const f = ~(A - 1);
    for (let T = 0; T < 16; T++) {
      const re = f & (L[T] ^ N[T]);
      L[T] ^= re, N[T] ^= re;
    }
  }
  function I(L, N) {
    const A = i(), f = i();
    for (let T = 0; T < 16; T++)
      f[T] = N[T];
    w(f), w(f), w(f);
    for (let T = 0; T < 2; T++) {
      A[0] = f[0] - 65517;
      for (let oe = 1; oe < 15; oe++)
        A[oe] = f[oe] - 65535 - (A[oe - 1] >> 16 & 1), A[oe - 1] &= 65535;
      A[15] = f[15] - 32767 - (A[14] >> 16 & 1);
      const re = A[15] >> 16 & 1;
      A[14] &= 65535, O(f, A, 1 - re);
    }
    for (let T = 0; T < 16; T++)
      L[2 * T] = f[T] & 255, L[2 * T + 1] = f[T] >> 8;
  }
  function j(L, N) {
    let A = 0;
    for (let f = 0; f < 32; f++)
      A |= L[f] ^ N[f];
    return (1 & A - 1 >>> 8) - 1;
  }
  function _(L, N) {
    const A = new Uint8Array(32), f = new Uint8Array(32);
    return I(A, L), I(f, N), j(A, f);
  }
  function R(L) {
    const N = new Uint8Array(32);
    return I(N, L), N[0] & 1;
  }
  function b(L, N) {
    for (let A = 0; A < 16; A++)
      L[A] = N[2 * A] + (N[2 * A + 1] << 8);
    L[15] &= 32767;
  }
  function S(L, N, A) {
    for (let f = 0; f < 16; f++)
      L[f] = N[f] + A[f];
  }
  function g(L, N, A) {
    for (let f = 0; f < 16; f++)
      L[f] = N[f] - A[f];
  }
  function c(L, N, A) {
    let f, T, re = 0, oe = 0, Me = 0, Ue = 0, Oe = 0, qe = 0, ct = 0, Je = 0, Se = 0, xe = 0, Ce = 0, Te = 0, Ie = 0, we = 0, Ee = 0, ve = 0, Ne = 0, je = 0, _e = 0, Le = 0, We = 0, Ge = 0, Ze = 0, $e = 0, qt = 0, sr = 0, dr = 0, Rt = 0, pr = 0, Zt = 0, gr = 0, tt = A[0], Xe = A[1], dt = A[2], ft = A[3], pt = A[4], ot = A[5], wt = A[6], ut = A[7], gt = A[8], yt = A[9], Ot = A[10], Et = A[11], mt = A[12], st = A[13], x = A[14], H = A[15];
    f = N[0], re += f * tt, oe += f * Xe, Me += f * dt, Ue += f * ft, Oe += f * pt, qe += f * ot, ct += f * wt, Je += f * ut, Se += f * gt, xe += f * yt, Ce += f * Ot, Te += f * Et, Ie += f * mt, we += f * st, Ee += f * x, ve += f * H, f = N[1], oe += f * tt, Me += f * Xe, Ue += f * dt, Oe += f * ft, qe += f * pt, ct += f * ot, Je += f * wt, Se += f * ut, xe += f * gt, Ce += f * yt, Te += f * Ot, Ie += f * Et, we += f * mt, Ee += f * st, ve += f * x, Ne += f * H, f = N[2], Me += f * tt, Ue += f * Xe, Oe += f * dt, qe += f * ft, ct += f * pt, Je += f * ot, Se += f * wt, xe += f * ut, Ce += f * gt, Te += f * yt, Ie += f * Ot, we += f * Et, Ee += f * mt, ve += f * st, Ne += f * x, je += f * H, f = N[3], Ue += f * tt, Oe += f * Xe, qe += f * dt, ct += f * ft, Je += f * pt, Se += f * ot, xe += f * wt, Ce += f * ut, Te += f * gt, Ie += f * yt, we += f * Ot, Ee += f * Et, ve += f * mt, Ne += f * st, je += f * x, _e += f * H, f = N[4], Oe += f * tt, qe += f * Xe, ct += f * dt, Je += f * ft, Se += f * pt, xe += f * ot, Ce += f * wt, Te += f * ut, Ie += f * gt, we += f * yt, Ee += f * Ot, ve += f * Et, Ne += f * mt, je += f * st, _e += f * x, Le += f * H, f = N[5], qe += f * tt, ct += f * Xe, Je += f * dt, Se += f * ft, xe += f * pt, Ce += f * ot, Te += f * wt, Ie += f * ut, we += f * gt, Ee += f * yt, ve += f * Ot, Ne += f * Et, je += f * mt, _e += f * st, Le += f * x, We += f * H, f = N[6], ct += f * tt, Je += f * Xe, Se += f * dt, xe += f * ft, Ce += f * pt, Te += f * ot, Ie += f * wt, we += f * ut, Ee += f * gt, ve += f * yt, Ne += f * Ot, je += f * Et, _e += f * mt, Le += f * st, We += f * x, Ge += f * H, f = N[7], Je += f * tt, Se += f * Xe, xe += f * dt, Ce += f * ft, Te += f * pt, Ie += f * ot, we += f * wt, Ee += f * ut, ve += f * gt, Ne += f * yt, je += f * Ot, _e += f * Et, Le += f * mt, We += f * st, Ge += f * x, Ze += f * H, f = N[8], Se += f * tt, xe += f * Xe, Ce += f * dt, Te += f * ft, Ie += f * pt, we += f * ot, Ee += f * wt, ve += f * ut, Ne += f * gt, je += f * yt, _e += f * Ot, Le += f * Et, We += f * mt, Ge += f * st, Ze += f * x, $e += f * H, f = N[9], xe += f * tt, Ce += f * Xe, Te += f * dt, Ie += f * ft, we += f * pt, Ee += f * ot, ve += f * wt, Ne += f * ut, je += f * gt, _e += f * yt, Le += f * Ot, We += f * Et, Ge += f * mt, Ze += f * st, $e += f * x, qt += f * H, f = N[10], Ce += f * tt, Te += f * Xe, Ie += f * dt, we += f * ft, Ee += f * pt, ve += f * ot, Ne += f * wt, je += f * ut, _e += f * gt, Le += f * yt, We += f * Ot, Ge += f * Et, Ze += f * mt, $e += f * st, qt += f * x, sr += f * H, f = N[11], Te += f * tt, Ie += f * Xe, we += f * dt, Ee += f * ft, ve += f * pt, Ne += f * ot, je += f * wt, _e += f * ut, Le += f * gt, We += f * yt, Ge += f * Ot, Ze += f * Et, $e += f * mt, qt += f * st, sr += f * x, dr += f * H, f = N[12], Ie += f * tt, we += f * Xe, Ee += f * dt, ve += f * ft, Ne += f * pt, je += f * ot, _e += f * wt, Le += f * ut, We += f * gt, Ge += f * yt, Ze += f * Ot, $e += f * Et, qt += f * mt, sr += f * st, dr += f * x, Rt += f * H, f = N[13], we += f * tt, Ee += f * Xe, ve += f * dt, Ne += f * ft, je += f * pt, _e += f * ot, Le += f * wt, We += f * ut, Ge += f * gt, Ze += f * yt, $e += f * Ot, qt += f * Et, sr += f * mt, dr += f * st, Rt += f * x, pr += f * H, f = N[14], Ee += f * tt, ve += f * Xe, Ne += f * dt, je += f * ft, _e += f * pt, Le += f * ot, We += f * wt, Ge += f * ut, Ze += f * gt, $e += f * yt, qt += f * Ot, sr += f * Et, dr += f * mt, Rt += f * st, pr += f * x, Zt += f * H, f = N[15], ve += f * tt, Ne += f * Xe, je += f * dt, _e += f * ft, Le += f * pt, We += f * ot, Ge += f * wt, Ze += f * ut, $e += f * gt, qt += f * yt, sr += f * Ot, dr += f * Et, Rt += f * mt, pr += f * st, Zt += f * x, gr += f * H, re += 38 * Ne, oe += 38 * je, Me += 38 * _e, Ue += 38 * Le, Oe += 38 * We, qe += 38 * Ge, ct += 38 * Ze, Je += 38 * $e, Se += 38 * qt, xe += 38 * sr, Ce += 38 * dr, Te += 38 * Rt, Ie += 38 * pr, we += 38 * Zt, Ee += 38 * gr, T = 1, f = re + T + 65535, T = Math.floor(f / 65536), re = f - T * 65536, f = oe + T + 65535, T = Math.floor(f / 65536), oe = f - T * 65536, f = Me + T + 65535, T = Math.floor(f / 65536), Me = f - T * 65536, f = Ue + T + 65535, T = Math.floor(f / 65536), Ue = f - T * 65536, f = Oe + T + 65535, T = Math.floor(f / 65536), Oe = f - T * 65536, f = qe + T + 65535, T = Math.floor(f / 65536), qe = f - T * 65536, f = ct + T + 65535, T = Math.floor(f / 65536), ct = f - T * 65536, f = Je + T + 65535, T = Math.floor(f / 65536), Je = f - T * 65536, f = Se + T + 65535, T = Math.floor(f / 65536), Se = f - T * 65536, f = xe + T + 65535, T = Math.floor(f / 65536), xe = f - T * 65536, f = Ce + T + 65535, T = Math.floor(f / 65536), Ce = f - T * 65536, f = Te + T + 65535, T = Math.floor(f / 65536), Te = f - T * 65536, f = Ie + T + 65535, T = Math.floor(f / 65536), Ie = f - T * 65536, f = we + T + 65535, T = Math.floor(f / 65536), we = f - T * 65536, f = Ee + T + 65535, T = Math.floor(f / 65536), Ee = f - T * 65536, f = ve + T + 65535, T = Math.floor(f / 65536), ve = f - T * 65536, re += T - 1 + 37 * (T - 1), T = 1, f = re + T + 65535, T = Math.floor(f / 65536), re = f - T * 65536, f = oe + T + 65535, T = Math.floor(f / 65536), oe = f - T * 65536, f = Me + T + 65535, T = Math.floor(f / 65536), Me = f - T * 65536, f = Ue + T + 65535, T = Math.floor(f / 65536), Ue = f - T * 65536, f = Oe + T + 65535, T = Math.floor(f / 65536), Oe = f - T * 65536, f = qe + T + 65535, T = Math.floor(f / 65536), qe = f - T * 65536, f = ct + T + 65535, T = Math.floor(f / 65536), ct = f - T * 65536, f = Je + T + 65535, T = Math.floor(f / 65536), Je = f - T * 65536, f = Se + T + 65535, T = Math.floor(f / 65536), Se = f - T * 65536, f = xe + T + 65535, T = Math.floor(f / 65536), xe = f - T * 65536, f = Ce + T + 65535, T = Math.floor(f / 65536), Ce = f - T * 65536, f = Te + T + 65535, T = Math.floor(f / 65536), Te = f - T * 65536, f = Ie + T + 65535, T = Math.floor(f / 65536), Ie = f - T * 65536, f = we + T + 65535, T = Math.floor(f / 65536), we = f - T * 65536, f = Ee + T + 65535, T = Math.floor(f / 65536), Ee = f - T * 65536, f = ve + T + 65535, T = Math.floor(f / 65536), ve = f - T * 65536, re += T - 1 + 37 * (T - 1), L[0] = re, L[1] = oe, L[2] = Me, L[3] = Ue, L[4] = Oe, L[5] = qe, L[6] = ct, L[7] = Je, L[8] = Se, L[9] = xe, L[10] = Ce, L[11] = Te, L[12] = Ie, L[13] = we, L[14] = Ee, L[15] = ve;
  }
  function m(L, N) {
    c(L, N, N);
  }
  function F(L, N) {
    const A = i();
    let f;
    for (f = 0; f < 16; f++)
      A[f] = N[f];
    for (f = 253; f >= 0; f--)
      m(A, A), f !== 2 && f !== 4 && c(A, A, N);
    for (f = 0; f < 16; f++)
      L[f] = A[f];
  }
  function $(L, N) {
    const A = i();
    let f;
    for (f = 0; f < 16; f++)
      A[f] = N[f];
    for (f = 250; f >= 0; f--)
      m(A, A), f !== 1 && c(A, A, N);
    for (f = 0; f < 16; f++)
      L[f] = A[f];
  }
  function V(L, N) {
    const A = i(), f = i(), T = i(), re = i(), oe = i(), Me = i(), Ue = i(), Oe = i(), qe = i();
    g(A, L[1], L[0]), g(qe, N[1], N[0]), c(A, A, qe), S(f, L[0], L[1]), S(qe, N[0], N[1]), c(f, f, qe), c(T, L[3], N[3]), c(T, T, u), c(re, L[2], N[2]), S(re, re, re), g(oe, f, A), g(Me, re, T), S(Ue, re, T), S(Oe, f, A), c(L[0], oe, Me), c(L[1], Oe, Ue), c(L[2], Ue, Me), c(L[3], oe, Oe);
  }
  function Y(L, N, A) {
    for (let f = 0; f < 4; f++)
      O(L[f], N[f], A);
  }
  function ee(L, N) {
    const A = i(), f = i(), T = i();
    F(T, N[2]), c(A, N[0], T), c(f, N[1], T), I(L, f), L[31] ^= R(A) << 7;
  }
  function P(L, N, A) {
    v(L[0], o), v(L[1], a), v(L[2], a), v(L[3], o);
    for (let f = 255; f >= 0; --f) {
      const T = A[f / 8 | 0] >> (f & 7) & 1;
      Y(L, N, T), V(N, L), V(L, L), Y(L, N, T);
    }
  }
  function U(L, N) {
    const A = [i(), i(), i(), i()];
    v(A[0], h), v(A[1], p), v(A[2], a), c(A[3], h, p), P(L, A, N);
  }
  function J(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(L);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const A = new Uint8Array(32), f = [i(), i(), i(), i()];
    U(f, N), ee(A, f);
    const T = new Uint8Array(64);
    return T.set(L), T.set(A, 32), {
      publicKey: A,
      secretKey: T
    };
  }
  t.generateKeyPairFromSeed = J;
  function z(L) {
    const N = (0, e.randomBytes)(32, L), A = J(N);
    return (0, n.wipe)(N), A;
  }
  t.generateKeyPair = z;
  function W(L) {
    if (L.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = W;
  const Z = new Float64Array([
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
  function D(L, N) {
    let A, f, T, re;
    for (f = 63; f >= 32; --f) {
      for (A = 0, T = f - 32, re = f - 12; T < re; ++T)
        N[T] += A - 16 * N[f] * Z[T - (f - 32)], A = Math.floor((N[T] + 128) / 256), N[T] -= A * 256;
      N[T] += A, N[f] = 0;
    }
    for (A = 0, T = 0; T < 32; T++)
      N[T] += A - (N[31] >> 4) * Z[T], A = N[T] >> 8, N[T] &= 255;
    for (T = 0; T < 32; T++)
      N[T] -= A * Z[T];
    for (f = 0; f < 32; f++)
      N[f + 1] += N[f] >> 8, L[f] = N[f] & 255;
  }
  function k(L) {
    const N = new Float64Array(64);
    for (let A = 0; A < 64; A++)
      N[A] = L[A];
    for (let A = 0; A < 64; A++)
      L[A] = 0;
    D(L, N);
  }
  function te(L, N) {
    const A = new Float64Array(64), f = [i(), i(), i(), i()], T = (0, r.hash)(L.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const re = new Uint8Array(64);
    re.set(T.subarray(32), 32);
    const oe = new r.SHA512();
    oe.update(re.subarray(32)), oe.update(N);
    const Me = oe.digest();
    oe.clean(), k(Me), U(f, Me), ee(re, f), oe.reset(), oe.update(re.subarray(0, 32)), oe.update(L.subarray(32)), oe.update(N);
    const Ue = oe.digest();
    k(Ue);
    for (let Oe = 0; Oe < 32; Oe++)
      A[Oe] = Me[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let qe = 0; qe < 32; qe++)
        A[Oe + qe] += Ue[Oe] * T[qe];
    return D(re.subarray(32), A), re;
  }
  t.sign = te;
  function K(L, N) {
    const A = i(), f = i(), T = i(), re = i(), oe = i(), Me = i(), Ue = i();
    return v(L[2], a), b(L[1], N), m(T, L[1]), c(re, T, l), g(T, T, L[2]), S(re, L[2], re), m(oe, re), m(Me, oe), c(Ue, Me, oe), c(A, Ue, T), c(A, A, re), $(A, A), c(A, A, T), c(A, A, re), c(A, A, re), c(L[0], A, re), m(f, L[0]), c(f, f, re), _(f, T) && c(L[0], L[0], y), m(f, L[0]), c(f, f, re), _(f, T) ? -1 : (R(L[0]) === N[31] >> 7 && g(L[0], o, L[0]), c(L[3], L[0], L[1]), 0);
  }
  function ie(L, N, A) {
    const f = new Uint8Array(32), T = [i(), i(), i(), i()], re = [i(), i(), i(), i()];
    if (A.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(re, L))
      return !1;
    const oe = new r.SHA512();
    oe.update(A.subarray(0, 32)), oe.update(L), oe.update(N);
    const Me = oe.digest();
    return k(Me), P(T, re, Me), U(re, A.subarray(32)), V(T, re), ee(f, T), !j(A, f);
  }
  t.verify = ie;
  function X(L) {
    let N = [i(), i(), i(), i()];
    if (K(N, L))
      throw new Error("Ed25519: invalid public key");
    let A = i(), f = i(), T = N[1];
    S(A, a, T), g(f, a, T), F(f, f), c(A, A, f);
    let re = new Uint8Array(32);
    return I(re, A), re;
  }
  t.convertPublicKeyToX25519 = X;
  function ce(L) {
    const N = (0, r.hash)(L.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const A = new Uint8Array(N.subarray(0, 32));
    return (0, n.wipe)(N), A;
  }
  t.convertSecretKeyToX25519 = ce;
})(No);
const Mp = "EdDSA", Up = "JWT", kl = ".", ql = "base64url", jp = "utf8", $p = "utf8", kp = ":", qp = "did", zp = "key", Vc = "base58btc", Bp = "z", Vp = "K36", Kp = 32;
function Lo(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function zl(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Lo(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function so(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = zl(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return Lo(r);
}
function Wp(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), o = s.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[o] = i;
  }
  var a = t.length, l = t.charAt(0), u = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function p(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var O = 0, I = 0, j = 0, _ = w.length; j !== _ && w[j] === 0; )
      j++, O++;
    for (var R = (_ - j) * h + 1 >>> 0, b = new Uint8Array(R); j !== _; ) {
      for (var S = w[j], g = 0, c = R - 1; (S !== 0 || g < I) && c !== -1; c--, g++)
        S += 256 * b[c] >>> 0, b[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      I = g, j++;
    }
    for (var m = R - I; m !== R && b[m] === 0; )
      m++;
    for (var F = l.repeat(O); m < R; ++m)
      F += t.charAt(b[m]);
    return F;
  }
  function y(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var O = 0;
    if (w[O] !== " ") {
      for (var I = 0, j = 0; w[O] === l; )
        I++, O++;
      for (var _ = (w.length - O) * u + 1 >>> 0, R = new Uint8Array(_); w[O]; ) {
        var b = r[w.charCodeAt(O)];
        if (b === 255)
          return;
        for (var S = 0, g = _ - 1; (b !== 0 || S < j) && g !== -1; g--, S++)
          b += a * R[g] >>> 0, R[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        j = S, O++;
      }
      if (w[O] !== " ") {
        for (var c = _ - j; c !== _ && R[c] === 0; )
          c++;
        for (var m = new Uint8Array(I + (_ - c)), F = I; c !== _; )
          m[F++] = R[c++];
        return m;
      }
    }
  }
  function v(w) {
    var O = y(w);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: p,
    decodeUnsafe: y,
    decode: v
  };
}
var Hp = Wp, Gp = Hp;
const Zp = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Yp = (t) => new TextEncoder().encode(t), Qp = (t) => new TextDecoder().decode(t);
class Jp {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Xp {
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
    return Bl(this, e);
  }
}
class eg {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Bl(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Bl = (t, e) => new eg({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class tg {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Jp(e, r, n), this.decoder = new Xp(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Xs = ({ name: t, prefix: e, encode: r, decode: n }) => new tg(t, e, r, n), Ki = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Gp(r, e);
  return Xs({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => Zp(i(s))
  });
}, rg = (t, e, r, n) => {
  const i = {};
  for (let h = 0; h < e.length; ++h)
    i[e[h]] = h;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, u = 0;
  for (let h = 0; h < s; ++h) {
    const p = i[t[h]];
    if (p === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | p, a += r, a >= 8 && (a -= 8, o[u++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, ng = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, s += e[i & a >> o];
  if (o && (s += e[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, $t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Xs({
  prefix: e,
  name: t,
  encode(i) {
    return ng(i, n, r);
  },
  decode(i) {
    return rg(i, n, r, t);
  }
}), ig = Xs({
  prefix: "\0",
  name: "identity",
  encode: (t) => Qp(t),
  decode: (t) => Yp(t)
}), sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: ig
}, Symbol.toStringTag, { value: "Module" })), ag = $t({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: ag
}, Symbol.toStringTag, { value: "Module" })), cg = $t({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: cg
}, Symbol.toStringTag, { value: "Module" })), lg = Ki({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: lg
}, Symbol.toStringTag, { value: "Module" })), hg = $t({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), dg = $t({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: hg,
  base16upper: dg
}, Symbol.toStringTag, { value: "Module" })), gg = $t({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), yg = $t({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), mg = $t({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), vg = $t({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), bg = $t({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), _g = $t({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), wg = $t({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Eg = $t({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Sg = $t({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: gg,
  base32hex: bg,
  base32hexpad: wg,
  base32hexpadupper: Eg,
  base32hexupper: _g,
  base32pad: mg,
  base32padupper: vg,
  base32upper: yg,
  base32z: Sg
}, Symbol.toStringTag, { value: "Module" })), Og = Ki({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), xg = Ki({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Og,
  base36upper: xg
}, Symbol.toStringTag, { value: "Module" })), Ig = Ki({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Rg = Ki({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Ig,
  base58flickr: Rg
}, Symbol.toStringTag, { value: "Module" })), Pg = $t({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ag = $t({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Ng = $t({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Lg = $t({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Pg,
  base64pad: Ag,
  base64url: Ng,
  base64urlpad: Lg
}, Symbol.toStringTag, { value: "Module" })), Vl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Mg = Vl.reduce((t, e, r) => (t[r] = e, t), []), Ug = Vl.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function jg(t) {
  return t.reduce((e, r) => (e += Mg[r], e), "");
}
function $g(t) {
  const e = [];
  for (const r of t) {
    const n = Ug[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const kg = Xs({
  prefix: "🚀",
  name: "base256emoji",
  encode: jg,
  decode: $g
}), qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: kg
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Kc = {
  ...sg,
  ...og,
  ...ug,
  ...fg,
  ...pg,
  ...Dg,
  ...Cg,
  ...Tg,
  ...Fg,
  ...qg
};
function Kl(t, e, r, n) {
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
const Wc = Kl("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Na = Kl("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = zl(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Wl = {
  utf8: Wc,
  "utf-8": Wc,
  hex: Kc.base16,
  latin1: Na,
  ascii: Na,
  binary: Na,
  ...Kc
};
function nr(t, e = "utf8") {
  const r = Wl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function cr(t, e = "utf8") {
  const r = Wl[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Lo(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ts(t) {
  return nr(cr(Vi(t), jp), ql);
}
function Hl(t) {
  const e = cr(Vp, Vc), r = Bp + nr(so([e, t]), Vc);
  return [qp, zp, r].join(kp);
}
function zg(t) {
  return nr(t, ql);
}
function Bg(t) {
  return cr([Ts(t.header), Ts(t.payload)].join(kl), $p);
}
function Vg(t) {
  return [
    Ts(t.header),
    Ts(t.payload),
    zg(t.signature)
  ].join(kl);
}
function Hc(t = si.randomBytes(Kp)) {
  return No.generateKeyPairFromSeed(t);
}
async function Kg(t, e, r, n, i = ge.fromMiliseconds(Date.now())) {
  const s = { alg: Mp, typ: Up }, o = Hl(n.publicKey), a = i + r, l = { iss: o, sub: t, aud: e, iat: i, exp: a }, u = Bg({ header: s, payload: l }), h = No.sign(n.secretKey, u);
  return Vg({ header: s, payload: l, signature: h });
}
var Fo = {}, ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
var Bt = Ae, ao = hr, Wg = 20;
function Hg(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], p = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], v = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], w = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], O = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], I = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], j = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], _ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], R = n, b = i, S = s, g = o, c = a, m = l, F = u, $ = h, V = p, Y = y, ee = v, P = w, U = O, J = I, z = j, W = _, Z = 0; Z < Wg; Z += 2)
    R = R + c | 0, U ^= R, U = U >>> 16 | U << 16, V = V + U | 0, c ^= V, c = c >>> 20 | c << 12, b = b + m | 0, J ^= b, J = J >>> 16 | J << 16, Y = Y + J | 0, m ^= Y, m = m >>> 20 | m << 12, S = S + F | 0, z ^= S, z = z >>> 16 | z << 16, ee = ee + z | 0, F ^= ee, F = F >>> 20 | F << 12, g = g + $ | 0, W ^= g, W = W >>> 16 | W << 16, P = P + W | 0, $ ^= P, $ = $ >>> 20 | $ << 12, S = S + F | 0, z ^= S, z = z >>> 24 | z << 8, ee = ee + z | 0, F ^= ee, F = F >>> 25 | F << 7, g = g + $ | 0, W ^= g, W = W >>> 24 | W << 8, P = P + W | 0, $ ^= P, $ = $ >>> 25 | $ << 7, b = b + m | 0, J ^= b, J = J >>> 24 | J << 8, Y = Y + J | 0, m ^= Y, m = m >>> 25 | m << 7, R = R + c | 0, U ^= R, U = U >>> 24 | U << 8, V = V + U | 0, c ^= V, c = c >>> 25 | c << 7, R = R + m | 0, W ^= R, W = W >>> 16 | W << 16, ee = ee + W | 0, m ^= ee, m = m >>> 20 | m << 12, b = b + F | 0, U ^= b, U = U >>> 16 | U << 16, P = P + U | 0, F ^= P, F = F >>> 20 | F << 12, S = S + $ | 0, J ^= S, J = J >>> 16 | J << 16, V = V + J | 0, $ ^= V, $ = $ >>> 20 | $ << 12, g = g + c | 0, z ^= g, z = z >>> 16 | z << 16, Y = Y + z | 0, c ^= Y, c = c >>> 20 | c << 12, S = S + $ | 0, J ^= S, J = J >>> 24 | J << 8, V = V + J | 0, $ ^= V, $ = $ >>> 25 | $ << 7, g = g + c | 0, z ^= g, z = z >>> 24 | z << 8, Y = Y + z | 0, c ^= Y, c = c >>> 25 | c << 7, b = b + F | 0, U ^= b, U = U >>> 24 | U << 8, P = P + U | 0, F ^= P, F = F >>> 25 | F << 7, R = R + m | 0, W ^= R, W = W >>> 24 | W << 8, ee = ee + W | 0, m ^= ee, m = m >>> 25 | m << 7;
  Bt.writeUint32LE(R + n | 0, t, 0), Bt.writeUint32LE(b + i | 0, t, 4), Bt.writeUint32LE(S + s | 0, t, 8), Bt.writeUint32LE(g + o | 0, t, 12), Bt.writeUint32LE(c + a | 0, t, 16), Bt.writeUint32LE(m + l | 0, t, 20), Bt.writeUint32LE(F + u | 0, t, 24), Bt.writeUint32LE($ + h | 0, t, 28), Bt.writeUint32LE(V + p | 0, t, 32), Bt.writeUint32LE(Y + y | 0, t, 36), Bt.writeUint32LE(ee + v | 0, t, 40), Bt.writeUint32LE(P + w | 0, t, 44), Bt.writeUint32LE(U + O | 0, t, 48), Bt.writeUint32LE(J + I | 0, t, 52), Bt.writeUint32LE(z + j | 0, t, 56), Bt.writeUint32LE(W + _ | 0, t, 60);
}
function Gl(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, o;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), o = s.length - e.length, s.set(e, o);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, o = i;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Hg(a, s, t);
    for (var u = l; u < l + 64 && u < r.length; u++)
      n[u] = r[u] ^ a[u - l];
    Zg(s, 0, o);
  }
  return ao.wipe(a), i === 0 && ao.wipe(s), n;
}
ea.streamXOR = Gl;
function Gg(t, e, r, n) {
  return n === void 0 && (n = 0), ao.wipe(r), Gl(t, e, r, r, n);
}
ea.stream = Gg;
function Zg(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Zl = {}, an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
function Yg(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
an.select = Yg;
function Qg(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
an.lessOrEqual = Qg;
function Yl(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
an.compare = Yl;
function Jg(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Yl(t, e) !== 0;
}
an.equal = Jg;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = an, r = hr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var u = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | u << 3) & 8191;
        var h = a[4] | a[5] << 8;
        this._r[2] = (u >>> 10 | h << 6) & 7939;
        var p = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | p << 9) & 8191;
        var y = a[8] | a[9] << 8;
        this._r[4] = (p >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var v = a[10] | a[11] << 8;
        this._r[6] = (y >>> 14 | v << 2) & 8191;
        var w = a[12] | a[13] << 8;
        this._r[7] = (v >>> 11 | w << 5) & 8065;
        var O = a[14] | a[15] << 8;
        this._r[8] = (w >>> 8 | O << 8) & 8191, this._r[9] = O >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, l, u) {
        for (var h = this._fin ? 0 : 2048, p = this._h[0], y = this._h[1], v = this._h[2], w = this._h[3], O = this._h[4], I = this._h[5], j = this._h[6], _ = this._h[7], R = this._h[8], b = this._h[9], S = this._r[0], g = this._r[1], c = this._r[2], m = this._r[3], F = this._r[4], $ = this._r[5], V = this._r[6], Y = this._r[7], ee = this._r[8], P = this._r[9]; u >= 16; ) {
          var U = a[l + 0] | a[l + 1] << 8;
          p += U & 8191;
          var J = a[l + 2] | a[l + 3] << 8;
          y += (U >>> 13 | J << 3) & 8191;
          var z = a[l + 4] | a[l + 5] << 8;
          v += (J >>> 10 | z << 6) & 8191;
          var W = a[l + 6] | a[l + 7] << 8;
          w += (z >>> 7 | W << 9) & 8191;
          var Z = a[l + 8] | a[l + 9] << 8;
          O += (W >>> 4 | Z << 12) & 8191, I += Z >>> 1 & 8191;
          var D = a[l + 10] | a[l + 11] << 8;
          j += (Z >>> 14 | D << 2) & 8191;
          var k = a[l + 12] | a[l + 13] << 8;
          _ += (D >>> 11 | k << 5) & 8191;
          var te = a[l + 14] | a[l + 15] << 8;
          R += (k >>> 8 | te << 8) & 8191, b += te >>> 5 | h;
          var K = 0, ie = K;
          ie += p * S, ie += y * (5 * P), ie += v * (5 * ee), ie += w * (5 * Y), ie += O * (5 * V), K = ie >>> 13, ie &= 8191, ie += I * (5 * $), ie += j * (5 * F), ie += _ * (5 * m), ie += R * (5 * c), ie += b * (5 * g), K += ie >>> 13, ie &= 8191;
          var X = K;
          X += p * g, X += y * S, X += v * (5 * P), X += w * (5 * ee), X += O * (5 * Y), K = X >>> 13, X &= 8191, X += I * (5 * V), X += j * (5 * $), X += _ * (5 * F), X += R * (5 * m), X += b * (5 * c), K += X >>> 13, X &= 8191;
          var ce = K;
          ce += p * c, ce += y * g, ce += v * S, ce += w * (5 * P), ce += O * (5 * ee), K = ce >>> 13, ce &= 8191, ce += I * (5 * Y), ce += j * (5 * V), ce += _ * (5 * $), ce += R * (5 * F), ce += b * (5 * m), K += ce >>> 13, ce &= 8191;
          var L = K;
          L += p * m, L += y * c, L += v * g, L += w * S, L += O * (5 * P), K = L >>> 13, L &= 8191, L += I * (5 * ee), L += j * (5 * Y), L += _ * (5 * V), L += R * (5 * $), L += b * (5 * F), K += L >>> 13, L &= 8191;
          var N = K;
          N += p * F, N += y * m, N += v * c, N += w * g, N += O * S, K = N >>> 13, N &= 8191, N += I * (5 * P), N += j * (5 * ee), N += _ * (5 * Y), N += R * (5 * V), N += b * (5 * $), K += N >>> 13, N &= 8191;
          var A = K;
          A += p * $, A += y * F, A += v * m, A += w * c, A += O * g, K = A >>> 13, A &= 8191, A += I * S, A += j * (5 * P), A += _ * (5 * ee), A += R * (5 * Y), A += b * (5 * V), K += A >>> 13, A &= 8191;
          var f = K;
          f += p * V, f += y * $, f += v * F, f += w * m, f += O * c, K = f >>> 13, f &= 8191, f += I * g, f += j * S, f += _ * (5 * P), f += R * (5 * ee), f += b * (5 * Y), K += f >>> 13, f &= 8191;
          var T = K;
          T += p * Y, T += y * V, T += v * $, T += w * F, T += O * m, K = T >>> 13, T &= 8191, T += I * c, T += j * g, T += _ * S, T += R * (5 * P), T += b * (5 * ee), K += T >>> 13, T &= 8191;
          var re = K;
          re += p * ee, re += y * Y, re += v * V, re += w * $, re += O * F, K = re >>> 13, re &= 8191, re += I * m, re += j * c, re += _ * g, re += R * S, re += b * (5 * P), K += re >>> 13, re &= 8191;
          var oe = K;
          oe += p * P, oe += y * ee, oe += v * Y, oe += w * V, oe += O * $, K = oe >>> 13, oe &= 8191, oe += I * F, oe += j * m, oe += _ * c, oe += R * g, oe += b * S, K += oe >>> 13, oe &= 8191, K = (K << 2) + K | 0, K = K + ie | 0, ie = K & 8191, K = K >>> 13, X += K, p = ie, y = X, v = ce, w = L, O = N, I = A, j = f, _ = T, R = re, b = oe, l += 16, u -= 16;
        }
        this._h[0] = p, this._h[1] = y, this._h[2] = v, this._h[3] = w, this._h[4] = O, this._h[5] = I, this._h[6] = j, this._h[7] = _, this._h[8] = R, this._h[9] = b;
      }, o.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var u = new Uint16Array(10), h, p, y, v;
        if (this._leftover) {
          for (v = this._leftover, this._buffer[v++] = 1; v < 16; v++)
            this._buffer[v] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, v = 2; v < 10; v++)
          this._h[v] += h, h = this._h[v] >>> 13, this._h[v] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, u[0] = this._h[0] + 5, h = u[0] >>> 13, u[0] &= 8191, v = 1; v < 10; v++)
          u[v] = this._h[v] + h, h = u[v] >>> 13, u[v] &= 8191;
        for (u[9] -= 8192, p = (h ^ 1) - 1, v = 0; v < 10; v++)
          u[v] &= p;
        for (p = ~p, v = 0; v < 10; v++)
          this._h[v] = this._h[v] & p | u[v];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, v = 1; v < 8; v++)
          y = (this._h[v] + this._pad[v] | 0) + (y >>> 16) | 0, this._h[v] = y & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var l = 0, u = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > u && (h = u);
          for (var p = 0; p < h; p++)
            this._buffer[this._leftover + p] = a[l + p];
          if (u -= h, l += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (u >= 16 && (h = u - u % 16, this._blocks(a, l, h), l += h, u -= h), u) {
          for (var p = 0; p < u; p++)
            this._buffer[this._leftover + p] = a[l + p];
          this._leftover += u;
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
  function i(o, a) {
    var l = new n(o);
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.oneTimeAuth = i;
  function s(o, a) {
    return o.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(o, a);
  }
  t.equal = s;
})(Zl);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ea, r = Zl, n = hr, i = Ae, s = an;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(u) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, u.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(u);
      }
      return l.prototype.seal = function(u, h, p, y) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var v = new Uint8Array(16);
        v.set(u, v.length - u.length);
        var w = new Uint8Array(32);
        e.stream(this._key, v, w, 4);
        var O = h.length + this.tagLength, I;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          I = y;
        } else
          I = new Uint8Array(O);
        return e.streamXOR(this._key, v, h, I, 4), this._authenticate(I.subarray(I.length - this.tagLength, I.length), w, I.subarray(0, I.length - this.tagLength), p), n.wipe(v), I;
      }, l.prototype.open = function(u, h, p, y) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var v = new Uint8Array(16);
        v.set(u, v.length - u.length);
        var w = new Uint8Array(32);
        e.stream(this._key, v, w, 4);
        var O = new Uint8Array(this.tagLength);
        if (this._authenticate(O, w, h.subarray(0, h.length - this.tagLength), p), !s.equal(O, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var I = h.length - this.tagLength, j;
        if (y) {
          if (y.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          j = y;
        } else
          j = new Uint8Array(I);
        return e.streamXOR(this._key, v, h.subarray(0, h.length - this.tagLength), j, 4), n.wipe(v), j;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(u, h, p, y) {
        var v = new r.Poly1305(h);
        y && (v.update(y), y.length % 16 > 0 && v.update(o.subarray(y.length % 16))), v.update(p), p.length % 16 > 0 && v.update(o.subarray(p.length % 16));
        var w = new Uint8Array(8);
        y && i.writeUint64LE(y.length, w), v.update(w), i.writeUint64LE(p.length, w), v.update(w);
        for (var O = v.digest(), I = 0; I < O.length; I++)
          u[I] = O[I];
        v.clean(), n.wipe(O), n.wipe(w);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(Fo);
var Ql = {}, Wi = {}, Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
function Xg(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Mo.isSerializableHash = Xg;
Object.defineProperty(Wi, "__esModule", { value: !0 });
var Ar = Mo, ey = an, ty = hr, Jl = (
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
      this._outer.update(n), Ar.isSerializableHash(this._inner) && Ar.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), ty.wipe(n);
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
Wi.HMAC = Jl;
function ry(t, e, r) {
  var n = new Jl(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Wi.hmac = ry;
Wi.equal = ey.equal;
Object.defineProperty(Ql, "__esModule", { value: !0 });
var Gc = Wi, Zc = hr, ny = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = Gc.hmac(this._hash, n, r);
      this._hmac = new Gc.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Zc.wipe(this._buffer), Zc.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), iy = Ql.HKDF = ny, ta = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Ae, r = hr;
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
      }, a.prototype.update = function(l, u) {
        if (u === void 0 && (u = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && u > 0; )
            this._buffer[this._bufferLength++] = l[h++], u--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (h = s(this._temp, this._state, l, h, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = l[h++], u--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var u = this._bytesHashed, h = this._bufferLength, p = u / 536870912 | 0, y = u << 3, v = u % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var w = h + 1; w < v - 8; w++)
            this._buffer[w] = 0;
          e.writeUint32BE(p, this._buffer, v - 8), e.writeUint32BE(y, this._buffer, v - 4), s(this._temp, this._state, this._buffer, 0, v), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 4; w++)
          e.writeUint32BE(this._state[w], l, w * 4);
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
  function s(a, l, u, h, p) {
    for (; p >= 64; ) {
      for (var y = l[0], v = l[1], w = l[2], O = l[3], I = l[4], j = l[5], _ = l[6], R = l[7], b = 0; b < 16; b++) {
        var S = h + b * 4;
        a[b] = e.readUint32BE(u, S);
      }
      for (var b = 16; b < 64; b++) {
        var g = a[b - 2], c = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = a[b - 15];
        var m = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        a[b] = (c + a[b - 7] | 0) + (m + a[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var c = (((I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7)) + (I & j ^ ~I & _) | 0) + (R + (i[b] + a[b] | 0) | 0) | 0, m = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & v ^ y & w ^ v & w) | 0;
        R = _, _ = j, j = I, I = O + c | 0, O = w, w = v, v = y, y = c + m | 0;
      }
      l[0] += y, l[1] += v, l[2] += w, l[3] += O, l[4] += I, l[5] += j, l[6] += _, l[7] += R, h += 64, p -= 64;
    }
    return h;
  }
  function o(a) {
    var l = new n();
    l.update(a);
    var u = l.digest();
    return l.clean(), u;
  }
  t.hash = o;
})(ta);
var Uo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = si, r = hr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const S = new Float64Array(16);
    if (b)
      for (let g = 0; g < b.length; g++)
        S[g] = b[g];
    return S;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function o(b) {
    let S = 1;
    for (let g = 0; g < 16; g++) {
      let c = b[g] + S + 65535;
      S = Math.floor(c / 65536), b[g] = c - S * 65536;
    }
    b[0] += S - 1 + 37 * (S - 1);
  }
  function a(b, S, g) {
    const c = ~(g - 1);
    for (let m = 0; m < 16; m++) {
      const F = c & (b[m] ^ S[m]);
      b[m] ^= F, S[m] ^= F;
    }
  }
  function l(b, S) {
    const g = n(), c = n();
    for (let m = 0; m < 16; m++)
      c[m] = S[m];
    o(c), o(c), o(c);
    for (let m = 0; m < 2; m++) {
      g[0] = c[0] - 65517;
      for (let $ = 1; $ < 15; $++)
        g[$] = c[$] - 65535 - (g[$ - 1] >> 16 & 1), g[$ - 1] &= 65535;
      g[15] = c[15] - 32767 - (g[14] >> 16 & 1);
      const F = g[15] >> 16 & 1;
      g[14] &= 65535, a(c, g, 1 - F);
    }
    for (let m = 0; m < 16; m++)
      b[2 * m] = c[m] & 255, b[2 * m + 1] = c[m] >> 8;
  }
  function u(b, S) {
    for (let g = 0; g < 16; g++)
      b[g] = S[2 * g] + (S[2 * g + 1] << 8);
    b[15] &= 32767;
  }
  function h(b, S, g) {
    for (let c = 0; c < 16; c++)
      b[c] = S[c] + g[c];
  }
  function p(b, S, g) {
    for (let c = 0; c < 16; c++)
      b[c] = S[c] - g[c];
  }
  function y(b, S, g) {
    let c, m, F = 0, $ = 0, V = 0, Y = 0, ee = 0, P = 0, U = 0, J = 0, z = 0, W = 0, Z = 0, D = 0, k = 0, te = 0, K = 0, ie = 0, X = 0, ce = 0, L = 0, N = 0, A = 0, f = 0, T = 0, re = 0, oe = 0, Me = 0, Ue = 0, Oe = 0, qe = 0, ct = 0, Je = 0, Se = g[0], xe = g[1], Ce = g[2], Te = g[3], Ie = g[4], we = g[5], Ee = g[6], ve = g[7], Ne = g[8], je = g[9], _e = g[10], Le = g[11], We = g[12], Ge = g[13], Ze = g[14], $e = g[15];
    c = S[0], F += c * Se, $ += c * xe, V += c * Ce, Y += c * Te, ee += c * Ie, P += c * we, U += c * Ee, J += c * ve, z += c * Ne, W += c * je, Z += c * _e, D += c * Le, k += c * We, te += c * Ge, K += c * Ze, ie += c * $e, c = S[1], $ += c * Se, V += c * xe, Y += c * Ce, ee += c * Te, P += c * Ie, U += c * we, J += c * Ee, z += c * ve, W += c * Ne, Z += c * je, D += c * _e, k += c * Le, te += c * We, K += c * Ge, ie += c * Ze, X += c * $e, c = S[2], V += c * Se, Y += c * xe, ee += c * Ce, P += c * Te, U += c * Ie, J += c * we, z += c * Ee, W += c * ve, Z += c * Ne, D += c * je, k += c * _e, te += c * Le, K += c * We, ie += c * Ge, X += c * Ze, ce += c * $e, c = S[3], Y += c * Se, ee += c * xe, P += c * Ce, U += c * Te, J += c * Ie, z += c * we, W += c * Ee, Z += c * ve, D += c * Ne, k += c * je, te += c * _e, K += c * Le, ie += c * We, X += c * Ge, ce += c * Ze, L += c * $e, c = S[4], ee += c * Se, P += c * xe, U += c * Ce, J += c * Te, z += c * Ie, W += c * we, Z += c * Ee, D += c * ve, k += c * Ne, te += c * je, K += c * _e, ie += c * Le, X += c * We, ce += c * Ge, L += c * Ze, N += c * $e, c = S[5], P += c * Se, U += c * xe, J += c * Ce, z += c * Te, W += c * Ie, Z += c * we, D += c * Ee, k += c * ve, te += c * Ne, K += c * je, ie += c * _e, X += c * Le, ce += c * We, L += c * Ge, N += c * Ze, A += c * $e, c = S[6], U += c * Se, J += c * xe, z += c * Ce, W += c * Te, Z += c * Ie, D += c * we, k += c * Ee, te += c * ve, K += c * Ne, ie += c * je, X += c * _e, ce += c * Le, L += c * We, N += c * Ge, A += c * Ze, f += c * $e, c = S[7], J += c * Se, z += c * xe, W += c * Ce, Z += c * Te, D += c * Ie, k += c * we, te += c * Ee, K += c * ve, ie += c * Ne, X += c * je, ce += c * _e, L += c * Le, N += c * We, A += c * Ge, f += c * Ze, T += c * $e, c = S[8], z += c * Se, W += c * xe, Z += c * Ce, D += c * Te, k += c * Ie, te += c * we, K += c * Ee, ie += c * ve, X += c * Ne, ce += c * je, L += c * _e, N += c * Le, A += c * We, f += c * Ge, T += c * Ze, re += c * $e, c = S[9], W += c * Se, Z += c * xe, D += c * Ce, k += c * Te, te += c * Ie, K += c * we, ie += c * Ee, X += c * ve, ce += c * Ne, L += c * je, N += c * _e, A += c * Le, f += c * We, T += c * Ge, re += c * Ze, oe += c * $e, c = S[10], Z += c * Se, D += c * xe, k += c * Ce, te += c * Te, K += c * Ie, ie += c * we, X += c * Ee, ce += c * ve, L += c * Ne, N += c * je, A += c * _e, f += c * Le, T += c * We, re += c * Ge, oe += c * Ze, Me += c * $e, c = S[11], D += c * Se, k += c * xe, te += c * Ce, K += c * Te, ie += c * Ie, X += c * we, ce += c * Ee, L += c * ve, N += c * Ne, A += c * je, f += c * _e, T += c * Le, re += c * We, oe += c * Ge, Me += c * Ze, Ue += c * $e, c = S[12], k += c * Se, te += c * xe, K += c * Ce, ie += c * Te, X += c * Ie, ce += c * we, L += c * Ee, N += c * ve, A += c * Ne, f += c * je, T += c * _e, re += c * Le, oe += c * We, Me += c * Ge, Ue += c * Ze, Oe += c * $e, c = S[13], te += c * Se, K += c * xe, ie += c * Ce, X += c * Te, ce += c * Ie, L += c * we, N += c * Ee, A += c * ve, f += c * Ne, T += c * je, re += c * _e, oe += c * Le, Me += c * We, Ue += c * Ge, Oe += c * Ze, qe += c * $e, c = S[14], K += c * Se, ie += c * xe, X += c * Ce, ce += c * Te, L += c * Ie, N += c * we, A += c * Ee, f += c * ve, T += c * Ne, re += c * je, oe += c * _e, Me += c * Le, Ue += c * We, Oe += c * Ge, qe += c * Ze, ct += c * $e, c = S[15], ie += c * Se, X += c * xe, ce += c * Ce, L += c * Te, N += c * Ie, A += c * we, f += c * Ee, T += c * ve, re += c * Ne, oe += c * je, Me += c * _e, Ue += c * Le, Oe += c * We, qe += c * Ge, ct += c * Ze, Je += c * $e, F += 38 * X, $ += 38 * ce, V += 38 * L, Y += 38 * N, ee += 38 * A, P += 38 * f, U += 38 * T, J += 38 * re, z += 38 * oe, W += 38 * Me, Z += 38 * Ue, D += 38 * Oe, k += 38 * qe, te += 38 * ct, K += 38 * Je, m = 1, c = F + m + 65535, m = Math.floor(c / 65536), F = c - m * 65536, c = $ + m + 65535, m = Math.floor(c / 65536), $ = c - m * 65536, c = V + m + 65535, m = Math.floor(c / 65536), V = c - m * 65536, c = Y + m + 65535, m = Math.floor(c / 65536), Y = c - m * 65536, c = ee + m + 65535, m = Math.floor(c / 65536), ee = c - m * 65536, c = P + m + 65535, m = Math.floor(c / 65536), P = c - m * 65536, c = U + m + 65535, m = Math.floor(c / 65536), U = c - m * 65536, c = J + m + 65535, m = Math.floor(c / 65536), J = c - m * 65536, c = z + m + 65535, m = Math.floor(c / 65536), z = c - m * 65536, c = W + m + 65535, m = Math.floor(c / 65536), W = c - m * 65536, c = Z + m + 65535, m = Math.floor(c / 65536), Z = c - m * 65536, c = D + m + 65535, m = Math.floor(c / 65536), D = c - m * 65536, c = k + m + 65535, m = Math.floor(c / 65536), k = c - m * 65536, c = te + m + 65535, m = Math.floor(c / 65536), te = c - m * 65536, c = K + m + 65535, m = Math.floor(c / 65536), K = c - m * 65536, c = ie + m + 65535, m = Math.floor(c / 65536), ie = c - m * 65536, F += m - 1 + 37 * (m - 1), m = 1, c = F + m + 65535, m = Math.floor(c / 65536), F = c - m * 65536, c = $ + m + 65535, m = Math.floor(c / 65536), $ = c - m * 65536, c = V + m + 65535, m = Math.floor(c / 65536), V = c - m * 65536, c = Y + m + 65535, m = Math.floor(c / 65536), Y = c - m * 65536, c = ee + m + 65535, m = Math.floor(c / 65536), ee = c - m * 65536, c = P + m + 65535, m = Math.floor(c / 65536), P = c - m * 65536, c = U + m + 65535, m = Math.floor(c / 65536), U = c - m * 65536, c = J + m + 65535, m = Math.floor(c / 65536), J = c - m * 65536, c = z + m + 65535, m = Math.floor(c / 65536), z = c - m * 65536, c = W + m + 65535, m = Math.floor(c / 65536), W = c - m * 65536, c = Z + m + 65535, m = Math.floor(c / 65536), Z = c - m * 65536, c = D + m + 65535, m = Math.floor(c / 65536), D = c - m * 65536, c = k + m + 65535, m = Math.floor(c / 65536), k = c - m * 65536, c = te + m + 65535, m = Math.floor(c / 65536), te = c - m * 65536, c = K + m + 65535, m = Math.floor(c / 65536), K = c - m * 65536, c = ie + m + 65535, m = Math.floor(c / 65536), ie = c - m * 65536, F += m - 1 + 37 * (m - 1), b[0] = F, b[1] = $, b[2] = V, b[3] = Y, b[4] = ee, b[5] = P, b[6] = U, b[7] = J, b[8] = z, b[9] = W, b[10] = Z, b[11] = D, b[12] = k, b[13] = te, b[14] = K, b[15] = ie;
  }
  function v(b, S) {
    y(b, S, S);
  }
  function w(b, S) {
    const g = n();
    for (let c = 0; c < 16; c++)
      g[c] = S[c];
    for (let c = 253; c >= 0; c--)
      v(g, g), c !== 2 && c !== 4 && y(g, g, S);
    for (let c = 0; c < 16; c++)
      b[c] = g[c];
  }
  function O(b, S) {
    const g = new Uint8Array(32), c = new Float64Array(80), m = n(), F = n(), $ = n(), V = n(), Y = n(), ee = n();
    for (let z = 0; z < 31; z++)
      g[z] = b[z];
    g[31] = b[31] & 127 | 64, g[0] &= 248, u(c, S);
    for (let z = 0; z < 16; z++)
      F[z] = c[z];
    m[0] = V[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const W = g[z >>> 3] >>> (z & 7) & 1;
      a(m, F, W), a($, V, W), h(Y, m, $), p(m, m, $), h($, F, V), p(F, F, V), v(V, Y), v(ee, m), y(m, $, m), y($, F, Y), h(Y, m, $), p(m, m, $), v(F, m), p($, V, ee), y(m, $, s), h(m, m, V), y($, $, m), y(m, V, ee), y(V, F, c), v(F, Y), a(m, F, W), a($, V, W);
    }
    for (let z = 0; z < 16; z++)
      c[z + 16] = m[z], c[z + 32] = $[z], c[z + 48] = F[z], c[z + 64] = V[z];
    const P = c.subarray(32), U = c.subarray(16);
    w(P, P), y(U, U, P);
    const J = new Uint8Array(32);
    return l(J, U), J;
  }
  t.scalarMult = O;
  function I(b) {
    return O(b, i);
  }
  t.scalarMultBase = I;
  function j(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(b);
    return {
      publicKey: I(S),
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = j;
  function _(b) {
    const S = (0, e.randomBytes)(32, b), g = j(S);
    return (0, r.wipe)(S), g;
  }
  t.generateKeyPair = _;
  function R(b, S, g = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = O(b, S);
    if (g) {
      let m = 0;
      for (let F = 0; F < c.length; F++)
        m |= c[F];
      if (m === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = R;
})(Uo);
var Yc = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, sy = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), ay = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), oy = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), cy = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), uy = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), ly = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, fy = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Qc = 3, hy = [
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
  ["searchbot", ly]
], Jc = [
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
function dy(t) {
  return t ? Xc(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new uy() : typeof navigator < "u" ? Xc(navigator.userAgent) : yy();
}
function py(t) {
  return t !== "" && hy.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function Xc(t) {
  var e = py(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new cy();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Qc && (i = Yc(Yc([], i, !0), my(Qc - i.length), !0)) : i = [];
  var s = i.join("."), o = gy(t), a = fy.exec(t);
  return a && a[1] ? new oy(r, s, o, a[1]) : new sy(r, s, o);
}
function gy(t) {
  for (var e = 0, r = Jc.length; e < r; e++) {
    var n = Jc[e], i = n[0], s = n[1], o = s.exec(t);
    if (o)
      return i;
  }
  return null;
}
function yy() {
  var t = typeof process < "u" && process.version;
  return t ? new ay(process.version.slice(1)) : null;
}
function my(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getLocalStorage = lt.getLocalStorageOrThrow = lt.getCrypto = lt.getCryptoOrThrow = Xl = lt.getLocation = lt.getLocationOrThrow = $o = lt.getNavigator = lt.getNavigatorOrThrow = jo = lt.getDocument = lt.getDocumentOrThrow = lt.getFromWindowOrThrow = lt.getFromWindow = void 0;
function Pn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
lt.getFromWindow = Pn;
function ai(t) {
  const e = Pn(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
lt.getFromWindowOrThrow = ai;
function vy() {
  return ai("document");
}
lt.getDocumentOrThrow = vy;
function by() {
  return Pn("document");
}
var jo = lt.getDocument = by;
function _y() {
  return ai("navigator");
}
lt.getNavigatorOrThrow = _y;
function wy() {
  return Pn("navigator");
}
var $o = lt.getNavigator = wy;
function Ey() {
  return ai("location");
}
lt.getLocationOrThrow = Ey;
function Sy() {
  return Pn("location");
}
var Xl = lt.getLocation = Sy;
function Dy() {
  return ai("crypto");
}
lt.getCryptoOrThrow = Dy;
function Oy() {
  return Pn("crypto");
}
lt.getCrypto = Oy;
function xy() {
  return ai("localStorage");
}
lt.getLocalStorageOrThrow = xy;
function Cy() {
  return Pn("localStorage");
}
lt.getLocalStorage = Cy;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
var ef = ko.getWindowMetadata = void 0;
const eu = lt;
function Iy() {
  let t, e;
  try {
    t = eu.getDocumentOrThrow(), e = eu.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const p = t.getElementsByTagName("link"), y = [];
    for (let v = 0; v < p.length; v++) {
      const w = p[v], O = w.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const I = w.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let j = e.protocol + "//" + e.host;
            if (I.indexOf("/") === 0)
              j += I;
            else {
              const _ = e.pathname.split("/");
              _.pop();
              const R = _.join("/");
              j += R + "/" + I;
            }
            y.push(j);
          } else if (I.indexOf("//") === 0) {
            const j = e.protocol + I;
            y.push(j);
          } else
            y.push(I);
      }
    }
    return y;
  }
  function n(...p) {
    const y = t.getElementsByTagName("meta");
    for (let v = 0; v < y.length; v++) {
      const w = y[v], O = ["itemprop", "property", "name"].map((I) => w.getAttribute(I)).filter((I) => I ? p.includes(I) : !1);
      if (O.length && O) {
        const I = w.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function i() {
    let p = n("name", "og:site_name", "og:title", "twitter:title");
    return p || (p = t.title), p;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const o = i(), a = s(), l = e.origin, u = r();
  return {
    description: a,
    url: l,
    icons: u,
    name: o
  };
}
ef = ko.getWindowMetadata = Iy;
var Ri = {}, Ry = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), tf = "%[a-f0-9]{2}", tu = new RegExp("(" + tf + ")|([^%]+?)", "gi"), ru = new RegExp("(" + tf + ")+", "gi");
function oo(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], oo(r), oo(n));
}
function Ty(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(tu) || [], r = 1; r < e.length; r++)
      t = oo(e, r).join(""), e = t.match(tu) || [];
    return t;
  }
}
function Py(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ru.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Ty(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = ru.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var o = i[s];
    t = t.replace(new RegExp(o, "g"), e[o]);
  }
  return t;
}
var Ay = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Py(t);
  }
}, Ny = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, Ly = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var o = n[s], a = t[o];
    (i ? e.indexOf(o) !== -1 : e(o, a, t)) && (r[o] = a);
  }
  return r;
};
(function(t) {
  const e = Ry, r = Ay, n = Ny, i = Ly, s = (_) => _ == null, o = Symbol("encodeFragmentIdentifier");
  function a(_) {
    switch (_.arrayFormat) {
      case "index":
        return (R) => (b, S) => {
          const g = b.length;
          return S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? b : S === null ? [...b, [h(R, _), "[", g, "]"].join("")] : [
            ...b,
            [h(R, _), "[", h(g, _), "]=", h(S, _)].join("")
          ];
        };
      case "bracket":
        return (R) => (b, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? b : S === null ? [...b, [h(R, _), "[]"].join("")] : [...b, [h(R, _), "[]=", h(S, _)].join("")];
      case "colon-list-separator":
        return (R) => (b, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? b : S === null ? [...b, [h(R, _), ":list="].join("")] : [...b, [h(R, _), ":list=", h(S, _)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const R = _.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (S, g) => g === void 0 || _.skipNull && g === null || _.skipEmptyString && g === "" ? S : (g = g === null ? "" : g, S.length === 0 ? [[h(b, _), R, h(g, _)].join("")] : [[S, h(g, _)].join(_.arrayFormatSeparator)]);
      }
      default:
        return (R) => (b, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? b : S === null ? [...b, h(R, _)] : [...b, [h(R, _), "=", h(S, _)].join("")];
    }
  }
  function l(_) {
    let R;
    switch (_.arrayFormat) {
      case "index":
        return (b, S, g) => {
          if (R = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !R) {
            g[b] = S;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][R[1]] = S;
        };
      case "bracket":
        return (b, S, g) => {
          if (R = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !R) {
            g[b] = S;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [S];
            return;
          }
          g[b] = [].concat(g[b], S);
        };
      case "colon-list-separator":
        return (b, S, g) => {
          if (R = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !R) {
            g[b] = S;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [S];
            return;
          }
          g[b] = [].concat(g[b], S);
        };
      case "comma":
      case "separator":
        return (b, S, g) => {
          const c = typeof S == "string" && S.includes(_.arrayFormatSeparator), m = typeof S == "string" && !c && p(S, _).includes(_.arrayFormatSeparator);
          S = m ? p(S, _) : S;
          const F = c || m ? S.split(_.arrayFormatSeparator).map(($) => p($, _)) : S === null ? S : p(S, _);
          g[b] = F;
        };
      case "bracket-separator":
        return (b, S, g) => {
          const c = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !c) {
            g[b] = S && p(S, _);
            return;
          }
          const m = S === null ? [] : S.split(_.arrayFormatSeparator).map((F) => p(F, _));
          if (g[b] === void 0) {
            g[b] = m;
            return;
          }
          g[b] = [].concat(g[b], m);
        };
      default:
        return (b, S, g) => {
          if (g[b] === void 0) {
            g[b] = S;
            return;
          }
          g[b] = [].concat(g[b], S);
        };
    }
  }
  function u(_) {
    if (typeof _ != "string" || _.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(_, R) {
    return R.encode ? R.strict ? e(_) : encodeURIComponent(_) : _;
  }
  function p(_, R) {
    return R.decode ? r(_) : _;
  }
  function y(_) {
    return Array.isArray(_) ? _.sort() : typeof _ == "object" ? y(Object.keys(_)).sort((R, b) => Number(R) - Number(b)).map((R) => _[R]) : _;
  }
  function v(_) {
    const R = _.indexOf("#");
    return R !== -1 && (_ = _.slice(0, R)), _;
  }
  function w(_) {
    let R = "";
    const b = _.indexOf("#");
    return b !== -1 && (R = _.slice(b)), R;
  }
  function O(_) {
    _ = v(_);
    const R = _.indexOf("?");
    return R === -1 ? "" : _.slice(R + 1);
  }
  function I(_, R) {
    return R.parseNumbers && !Number.isNaN(Number(_)) && typeof _ == "string" && _.trim() !== "" ? _ = Number(_) : R.parseBooleans && _ !== null && (_.toLowerCase() === "true" || _.toLowerCase() === "false") && (_ = _.toLowerCase() === "true"), _;
  }
  function j(_, R) {
    R = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, R), u(R.arrayFormatSeparator);
    const b = l(R), S = /* @__PURE__ */ Object.create(null);
    if (typeof _ != "string" || (_ = _.trim().replace(/^[?#&]/, ""), !_))
      return S;
    for (const g of _.split("&")) {
      if (g === "")
        continue;
      let [c, m] = n(R.decode ? g.replace(/\+/g, " ") : g, "=");
      m = m === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(R.arrayFormat) ? m : p(m, R), b(p(c, R), m, S);
    }
    for (const g of Object.keys(S)) {
      const c = S[g];
      if (typeof c == "object" && c !== null)
        for (const m of Object.keys(c))
          c[m] = I(c[m], R);
      else
        S[g] = I(c, R);
    }
    return R.sort === !1 ? S : (R.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(R.sort)).reduce((g, c) => {
      const m = S[c];
      return m && typeof m == "object" && !Array.isArray(m) ? g[c] = y(m) : g[c] = m, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = O, t.parse = j, t.stringify = (_, R) => {
    if (!_)
      return "";
    R = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, R), u(R.arrayFormatSeparator);
    const b = (m) => R.skipNull && s(_[m]) || R.skipEmptyString && _[m] === "", S = a(R), g = {};
    for (const m of Object.keys(_))
      b(m) || (g[m] = _[m]);
    const c = Object.keys(g);
    return R.sort !== !1 && c.sort(R.sort), c.map((m) => {
      const F = _[m];
      return F === void 0 ? "" : F === null ? h(m, R) : Array.isArray(F) ? F.length === 0 && R.arrayFormat === "bracket-separator" ? h(m, R) + "[]" : F.reduce(S(m), []).join("&") : h(m, R) + "=" + h(F, R);
    }).filter((m) => m.length > 0).join("&");
  }, t.parseUrl = (_, R) => {
    R = Object.assign({
      decode: !0
    }, R);
    const [b, S] = n(_, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: j(O(_), R)
      },
      R && R.parseFragmentIdentifier && S ? { fragmentIdentifier: p(S, R) } : {}
    );
  }, t.stringifyUrl = (_, R) => {
    R = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, R);
    const b = v(_.url).split("?")[0] || "", S = t.extract(_.url), g = t.parse(S, { sort: !1 }), c = Object.assign(g, _.query);
    let m = t.stringify(c, R);
    m && (m = `?${m}`);
    let F = w(_.url);
    return _.fragmentIdentifier && (F = `#${R[o] ? h(_.fragmentIdentifier, R) : _.fragmentIdentifier}`), `${b}${m}${F}`;
  }, t.pick = (_, R, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, b);
    const { url: S, query: g, fragmentIdentifier: c } = t.parseUrl(_, b);
    return t.stringifyUrl({
      url: S,
      query: i(g, R),
      fragmentIdentifier: c
    }, b);
  }, t.exclude = (_, R, b) => {
    const S = Array.isArray(R) ? (g) => !R.includes(g) : (g, c) => !R(g, c);
    return t.pick(_, S, b);
  };
})(Ri);
const Fy = {
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
function rf(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const nf = "base10", rr = "base16", co = "base64pad", qo = "utf8", sf = 0, An = 1, My = 0, nu = 1, uo = 12, zo = 32;
function Uy() {
  const t = Uo.generateKeyPair();
  return { privateKey: nr(t.secretKey, rr), publicKey: nr(t.publicKey, rr) };
}
function lo() {
  const t = si.randomBytes(zo);
  return nr(t, rr);
}
function jy(t, e) {
  const r = Uo.sharedKey(cr(t, rr), cr(e, rr), !0), n = new iy(ta.SHA256, r).expand(zo);
  return nr(n, rr);
}
function $y(t) {
  const e = ta.hash(cr(t, rr));
  return nr(e, rr);
}
function Qn(t) {
  const e = ta.hash(cr(t, qo));
  return nr(e, rr);
}
function ky(t) {
  return cr(`${t}`, nf);
}
function Hi(t) {
  return Number(nr(t, nf));
}
function qy(t) {
  const e = ky(typeof t.type < "u" ? t.type : sf);
  if (Hi(e) === An && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? cr(t.senderPublicKey, rr) : void 0, n = typeof t.iv < "u" ? cr(t.iv, rr) : si.randomBytes(uo), i = new Fo.ChaCha20Poly1305(cr(t.symKey, rr)).seal(n, cr(t.message, qo));
  return By({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function zy(t) {
  const e = new Fo.ChaCha20Poly1305(cr(t.symKey, rr)), { sealed: r, iv: n } = Ps(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return nr(i, qo);
}
function By(t) {
  if (Hi(t.type) === An) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return nr(so([t.type, t.senderPublicKey, t.iv, t.sealed]), co);
  }
  return nr(so([t.type, t.iv, t.sealed]), co);
}
function Ps(t) {
  const e = cr(t, co), r = e.slice(My, nu), n = nu;
  if (Hi(r) === An) {
    const a = n + zo, l = a + uo, u = e.slice(n, a), h = e.slice(a, l), p = e.slice(l);
    return { type: r, sealed: p, iv: h, senderPublicKey: u };
  }
  const i = n + uo, s = e.slice(n, i), o = e.slice(i);
  return { type: r, sealed: o, iv: s };
}
function Vy(t, e) {
  const r = Ps(t);
  return af({ type: Hi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? nr(r.senderPublicKey, rr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function af(t) {
  const e = (t == null ? void 0 : t.type) || sf;
  if (e === An) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function iu(t) {
  return t.type === An && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Ky = Object.defineProperty, su = Object.getOwnPropertySymbols, Wy = Object.prototype.hasOwnProperty, Hy = Object.prototype.propertyIsEnumerable, au = (t, e, r) => e in t ? Ky(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ou = (t, e) => {
  for (var r in e || (e = {}))
    Wy.call(e, r) && au(t, r, e[r]);
  if (su)
    for (var r of su(e))
      Hy.call(e, r) && au(t, r, e[r]);
  return t;
};
const Gy = "ReactNative", fr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Zy = "js";
function Bo() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function oi() {
  return !jo() && !!$o() && navigator.product === Gy;
}
function ci() {
  return !Bo() && !!$o() && !!jo();
}
function Gi() {
  return oi() ? fr.reactNative : Bo() ? fr.node : ci() ? fr.browser : fr.unknown;
}
function Yy() {
  var t;
  try {
    return oi() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function Qy(t, e) {
  let r = Ri.parse(t);
  return r = ou(ou({}, r), e), t = Ri.stringify(r), t;
}
function Jy() {
  return ef() || { name: "", description: "", url: "", icons: [""] };
}
function Xy() {
  if (Gi() === fr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = dy();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function em() {
  var t;
  const e = Gi();
  return e === fr.browser ? [e, ((t = Xl()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function tm(t, e, r) {
  const n = Xy(), i = em();
  return [[t, e].join("-"), [Zy, r].join("-"), n, i].join("/");
}
function rm({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: o, bundleId: a }) {
  const l = r.split("?"), u = tm(t, e, n), h = { auth: i, ua: u, projectId: s, useOnCloseEvent: o || void 0, origin: a || void 0 }, p = Qy(l[1] || "", h);
  return l[0] + "?" + p;
}
function En(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function of(t) {
  return Object.fromEntries(t.entries());
}
function cf(t) {
  return new Map(Object.entries(t));
}
function Kn(t = ge.FIVE_MINUTES, e) {
  const r = ge.toMiliseconds(t || ge.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (o) => {
    s && n && (clearTimeout(s), n(o));
  }, reject: (o) => {
    s && i && (clearTimeout(s), i(o));
  }, done: () => new Promise((o, a) => {
    s = setTimeout(() => {
      a(new Error(e));
    }, r), n = o, i = a;
  }) };
}
function Ti(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const o = await t;
      n(o);
    } catch (o) {
      i(o);
    }
    clearTimeout(s);
  });
}
function uf(t, e) {
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
function nm(t) {
  return uf("topic", t);
}
function im(t) {
  return uf("id", t);
}
function lf(t) {
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
  return ge.fromMiliseconds((e || Date.now()) + ge.toMiliseconds(t));
}
function Qr(t) {
  return Date.now() >= ge.toMiliseconds(t);
}
function It(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function sm({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, o = Gi();
    o === fr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === fr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
async function am(t, e) {
  try {
    return await t.getItem(e) || (ci() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const om = "irn";
function fo(t) {
  return (t == null ? void 0 : t.relay) || { protocol: om };
}
function Os(t) {
  const e = Fy[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var cm = Object.defineProperty, um = Object.defineProperties, lm = Object.getOwnPropertyDescriptors, cu = Object.getOwnPropertySymbols, fm = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, uu = (t, e, r) => e in t ? cm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, dm = (t, e) => {
  for (var r in e || (e = {}))
    fm.call(e, r) && uu(t, r, e[r]);
  if (cu)
    for (var r of cu(e))
      hm.call(e, r) && uu(t, r, e[r]);
  return t;
}, pm = (t, e) => um(t, lm(e));
function gm(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), o = t[i];
      r[s] = o;
    }
  }), r;
}
function lu(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", o = Ri.parse(s);
  return { protocol: n, topic: ym(i[0]), version: parseInt(i[1], 10), symKey: o.symKey, relay: gm(o), expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0 };
}
function ym(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function mm(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function vm(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + Ri.stringify(pm(dm({ symKey: t.symKey }, mm(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function ui(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function bm(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...ui(r.accounts));
  }), e;
}
function _m(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ui(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function wm(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    ui(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const Em = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Sm = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function se(t, e) {
  const { message: r, code: n } = Sm[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Ct(t, e) {
  const { message: r, code: n } = Em[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Zi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function As(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function tr(t) {
  return typeof t > "u";
}
function Ut(t, e) {
  return e && tr(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Vo(t, e) {
  return e && tr(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Dm(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return En(i, n) ? (n.forEach((o) => {
    const { accounts: a, methods: l, events: u } = t.namespaces[o], h = ui(a), p = r[o];
    (!En(rf(o, p), h) || !En(p.methods, l) || !En(p.events, u)) && (s = !1);
  }), s) : !1;
}
function Ns(t) {
  return Ut(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Om(t) {
  if (Ut(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Ns(r);
    }
  }
  return !1;
}
function xm(t) {
  if (Ut(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Cm(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Im(t) {
  return t == null ? void 0 : t.topic;
}
function Rm(t, e) {
  let r = null;
  return Ut(t == null ? void 0 : t.publicKey, !1) || (r = se("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function fu(t) {
  let e = !0;
  return Zi(t) ? t.length && (e = t.every((r) => Ut(r, !1))) : e = !1, e;
}
function Tm(t, e, r) {
  let n = null;
  return Zi(e) && e.length ? e.forEach((i) => {
    n || Ns(i) || (n = Ct("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Ns(t) || (n = Ct("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function Pm(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const o = Tm(i, rf(i, s), `${e} ${r}`);
    o && (n = o);
  }), n;
}
function Am(t, e) {
  let r = null;
  return Zi(t) ? t.forEach((n) => {
    r || Om(n) || (r = Ct("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Ct("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Nm(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = Am(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function Lm(t, e) {
  let r = null;
  return fu(t == null ? void 0 : t.methods) ? fu(t == null ? void 0 : t.events) || (r = Ct("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Ct("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function ff(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = Lm(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function Fm(t, e, r) {
  let n = null;
  if (t && As(t)) {
    const i = ff(t, e);
    i && (n = i);
    const s = Pm(t, e, r);
    s && (n = s);
  } else
    n = se("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function La(t, e) {
  let r = null;
  if (t && As(t)) {
    const n = ff(t, e);
    n && (r = n);
    const i = Nm(t, e);
    i && (r = i);
  } else
    r = se("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function hf(t) {
  return Ut(t.protocol, !0);
}
function Mm(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Zi(t) && t.length && t.forEach((n) => {
    r = hf(n);
  }), r;
}
function Um(t) {
  return typeof t == "number";
}
function or(t) {
  return typeof t < "u" && typeof t !== null;
}
function jm(t) {
  return !(!t || typeof t != "object" || !t.code || !Vo(t.code, !1) || !t.message || !Ut(t.message, !1));
}
function $m(t) {
  return !(tr(t) || !Ut(t.method, !1));
}
function km(t) {
  return !(tr(t) || tr(t.result) && tr(t.error) || !Vo(t.id, !1) || !Ut(t.jsonrpc, !1));
}
function qm(t) {
  return !(tr(t) || !Ut(t.name, !1));
}
function hu(t, e) {
  return !(!Ns(e) || !bm(t).includes(e));
}
function zm(t, e, r) {
  return Ut(r, !1) ? _m(t, e).includes(r) : !1;
}
function Bm(t, e, r) {
  return Ut(r, !1) ? wm(t, e).includes(r) : !1;
}
function du(t, e, r) {
  let n = null;
  const i = Vm(t), s = Km(e), o = Object.keys(i), a = Object.keys(s), l = pu(Object.keys(t)), u = pu(Object.keys(e)), h = l.filter((p) => !u.includes(p));
  return h.length && (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(e).toString()}`)), En(o, a) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((p) => {
    if (!p.includes(":") || n)
      return;
    const y = ui(e[p].accounts);
    y.includes(p) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${y.toString()}`));
  }), o.forEach((p) => {
    n || (En(i[p].methods, s[p].methods) ? En(i[p].events, s[p].events) || (n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${p}`)) : n = se("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${p}`));
  }), n;
}
function Vm(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function pu(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Km(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = ui(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Wm(t, e) {
  return Vo(t, !1) && t <= e.max && t >= e.min;
}
function gu() {
  const t = Gi();
  return new Promise((e) => {
    switch (t) {
      case fr.browser:
        e(Hm());
        break;
      case fr.reactNative:
        e(Gm());
        break;
      case fr.node:
        e(Zm());
        break;
      default:
        e(!0);
    }
  });
}
function Hm() {
  return ci() && (navigator == null ? void 0 : navigator.onLine);
}
async function Gm() {
  if (oi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Zm() {
  return !0;
}
function Ym(t) {
  switch (Gi()) {
    case fr.browser:
      Qm(t);
      break;
    case fr.reactNative:
      Jm(t);
      break;
  }
}
function Qm(t) {
  !oi() && ci() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Jm(t) {
  oi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Fa = {};
let vs = class {
  static get(e) {
    return Fa[e];
  }
  static set(e, r) {
    Fa[e] = r;
  }
  static delete(e) {
    delete Fa[e];
  }
};
const Xm = "PARSE_ERROR", ev = "INVALID_REQUEST", tv = "METHOD_NOT_FOUND", rv = "INVALID_PARAMS", df = "INTERNAL_ERROR", Ko = "SERVER_ERROR", nv = [-32700, -32600, -32601, -32602, -32603], Ci = {
  [Xm]: { code: -32700, message: "Parse error" },
  [ev]: { code: -32600, message: "Invalid Request" },
  [tv]: { code: -32601, message: "Method not found" },
  [rv]: { code: -32602, message: "Invalid params" },
  [df]: { code: -32603, message: "Internal error" },
  [Ko]: { code: -32e3, message: "Server error" }
}, pf = Ko;
function iv(t) {
  return nv.includes(t);
}
function yu(t) {
  return Object.keys(Ci).includes(t) ? Ci[t] : Ci[pf];
}
function sv(t) {
  const e = Object.values(Ci).find((r) => r.code === t);
  return e || Ci[pf];
}
function av(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var gf = {}, kr = {}, mu;
function ov() {
  if (mu)
    return kr;
  mu = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.isBrowserCryptoAvailable = kr.getSubtleCrypto = kr.getBrowerCrypto = void 0;
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
var qr = {}, vu;
function cv() {
  if (vu)
    return qr;
  vu = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.isBrowser = qr.isNode = qr.isReactNative = void 0;
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
  const e = Ur;
  e.__exportStar(ov(), t), e.__exportStar(cv(), t);
})(gf);
function Wo(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function yf(t = 6) {
  return BigInt(Wo(t));
}
function Jn(t, e, r) {
  return {
    id: r || Wo(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Ho(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Go(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: uv(e, r)
  };
}
function uv(t, e) {
  return typeof t > "u" ? yu(df) : (typeof t == "string" && (t = Object.assign(Object.assign({}, yu(Ko)), { message: t })), typeof e < "u" && (t.data = e), iv(t.code) && (t = sv(t.code)), t);
}
class lv {
}
class fv extends lv {
  constructor() {
    super();
  }
}
class hv extends fv {
  constructor(e) {
    super();
  }
}
const dv = "^wss?:";
function pv(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function gv(t, e) {
  const r = pv(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function bu(t) {
  return gv(t, dv);
}
function yv(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function mf(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Zo(t) {
  return mf(t) && "method" in t;
}
function ra(t) {
  return mf(t) && (Kr(t) || Er(t));
}
function Kr(t) {
  return "result" in t;
}
function Er(t) {
  return "error" in t;
}
class mv extends hv {
  constructor(e) {
    super(e), this.events = new mr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Jn(e.method, e.params || [], e.id || yf().toString()), r);
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
        Er(s) ? i(s.error) : n(s.result);
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
const vv = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), bv = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", _u = (t) => t.split("?")[0], wu = 10, _v = vv();
class wv {
  constructor(e) {
    if (this.url = e, this.events = new mr.EventEmitter(), this.registering = !1, !bu(e))
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
      this.socket.send(Vi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!bu(e))
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
      const i = new URLSearchParams(e).get("origin"), s = gf.isReactNative() ? { headers: { origin: i } } : { rejectUnauthorized: !yv(e) }, o = new _v(e, [], s);
      bv() ? o.onerror = (a) => {
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
    const r = typeof e.data == "string" ? Zs(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Go(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return av(e, _u(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > wu && this.events.setMaxListeners(wu);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${_u(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ls = { exports: {} };
Ls.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, o = 9007199254740991, a = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", h = "[object Boolean]", p = "[object Date]", y = "[object Error]", v = "[object Function]", w = "[object GeneratorFunction]", O = "[object Map]", I = "[object Number]", j = "[object Null]", _ = "[object Object]", R = "[object Promise]", b = "[object Proxy]", S = "[object RegExp]", g = "[object Set]", c = "[object String]", m = "[object Symbol]", F = "[object Undefined]", $ = "[object WeakMap]", V = "[object ArrayBuffer]", Y = "[object DataView]", ee = "[object Float32Array]", P = "[object Float64Array]", U = "[object Int8Array]", J = "[object Int16Array]", z = "[object Int32Array]", W = "[object Uint8Array]", Z = "[object Uint8ClampedArray]", D = "[object Uint16Array]", k = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, X = {};
  X[ee] = X[P] = X[U] = X[J] = X[z] = X[W] = X[Z] = X[D] = X[k] = !0, X[a] = X[l] = X[V] = X[h] = X[Y] = X[p] = X[y] = X[v] = X[O] = X[I] = X[_] = X[S] = X[g] = X[c] = X[$] = !1;
  var ce = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, L = typeof self == "object" && self && self.Object === Object && self, N = ce || L || Function("return this")(), A = e && !e.nodeType && e, f = A && !0 && t && !t.nodeType && t, T = f && f.exports === A, re = T && ce.process, oe = function() {
    try {
      return re && re.binding && re.binding("util");
    } catch {
    }
  }(), Me = oe && oe.isTypedArray;
  function Ue(E, M) {
    for (var G = -1, le = E == null ? 0 : E.length, rt = 0, Re = []; ++G < le; ) {
      var bt = E[G];
      M(bt, G, E) && (Re[rt++] = bt);
    }
    return Re;
  }
  function Oe(E, M) {
    for (var G = -1, le = M.length, rt = E.length; ++G < le; )
      E[rt + G] = M[G];
    return E;
  }
  function qe(E, M) {
    for (var G = -1, le = E == null ? 0 : E.length; ++G < le; )
      if (M(E[G], G, E))
        return !0;
    return !1;
  }
  function ct(E, M) {
    for (var G = -1, le = Array(E); ++G < E; )
      le[G] = M(G);
    return le;
  }
  function Je(E) {
    return function(M) {
      return E(M);
    };
  }
  function Se(E, M) {
    return E.has(M);
  }
  function xe(E, M) {
    return E == null ? void 0 : E[M];
  }
  function Ce(E) {
    var M = -1, G = Array(E.size);
    return E.forEach(function(le, rt) {
      G[++M] = [rt, le];
    }), G;
  }
  function Te(E, M) {
    return function(G) {
      return E(M(G));
    };
  }
  function Ie(E) {
    var M = -1, G = Array(E.size);
    return E.forEach(function(le) {
      G[++M] = le;
    }), G;
  }
  var we = Array.prototype, Ee = Function.prototype, ve = Object.prototype, Ne = N["__core-js_shared__"], je = Ee.toString, _e = ve.hasOwnProperty, Le = function() {
    var E = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), We = ve.toString, Ge = RegExp(
    "^" + je.call(_e).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ze = T ? N.Buffer : void 0, $e = N.Symbol, qt = N.Uint8Array, sr = ve.propertyIsEnumerable, dr = we.splice, Rt = $e ? $e.toStringTag : void 0, pr = Object.getOwnPropertySymbols, Zt = Ze ? Ze.isBuffer : void 0, gr = Te(Object.keys, Object), tt = jr(N, "DataView"), Xe = jr(N, "Map"), dt = jr(N, "Promise"), ft = jr(N, "Set"), pt = jr(N, "WeakMap"), ot = jr(Object, "create"), wt = $r(tt), ut = $r(Xe), gt = $r(dt), yt = $r(ft), Ot = $r(pt), Et = $e ? $e.prototype : void 0, mt = Et ? Et.valueOf : void 0;
  function st(E) {
    var M = -1, G = E == null ? 0 : E.length;
    for (this.clear(); ++M < G; ) {
      var le = E[M];
      this.set(le[0], le[1]);
    }
  }
  function x() {
    this.__data__ = ot ? ot(null) : {}, this.size = 0;
  }
  function H(E) {
    var M = this.has(E) && delete this.__data__[E];
    return this.size -= M ? 1 : 0, M;
  }
  function ae(E) {
    var M = this.__data__;
    if (ot) {
      var G = M[E];
      return G === n ? void 0 : G;
    }
    return _e.call(M, E) ? M[E] : void 0;
  }
  function de(E) {
    var M = this.__data__;
    return ot ? M[E] !== void 0 : _e.call(M, E);
  }
  function He(E, M) {
    var G = this.__data__;
    return this.size += this.has(E) ? 0 : 1, G[E] = ot && M === void 0 ? n : M, this;
  }
  st.prototype.clear = x, st.prototype.delete = H, st.prototype.get = ae, st.prototype.has = de, st.prototype.set = He;
  function ze(E) {
    var M = -1, G = E == null ? 0 : E.length;
    for (this.clear(); ++M < G; ) {
      var le = E[M];
      this.set(le[0], le[1]);
    }
  }
  function Ve() {
    this.__data__ = [], this.size = 0;
  }
  function ke(E) {
    var M = this.__data__, G = cn(M, E);
    if (G < 0)
      return !1;
    var le = M.length - 1;
    return G == le ? M.pop() : dr.call(M, G, 1), --this.size, !0;
  }
  function At(E) {
    var M = this.__data__, G = cn(M, E);
    return G < 0 ? void 0 : M[G][1];
  }
  function ht(E) {
    return cn(this.__data__, E) > -1;
  }
  function vt(E, M) {
    var G = this.__data__, le = cn(G, E);
    return le < 0 ? (++this.size, G.push([E, M])) : G[le][1] = M, this;
  }
  ze.prototype.clear = Ve, ze.prototype.delete = ke, ze.prototype.get = At, ze.prototype.has = ht, ze.prototype.set = vt;
  function xt(E) {
    var M = -1, G = E == null ? 0 : E.length;
    for (this.clear(); ++M < G; ) {
      var le = E[M];
      this.set(le[0], le[1]);
    }
  }
  function Rr() {
    this.size = 0, this.__data__ = {
      hash: new st(),
      map: new (Xe || ze)(),
      string: new st()
    };
  }
  function Ln(E) {
    var M = fn(this, E).delete(E);
    return this.size -= M ? 1 : 0, M;
  }
  function ur(E) {
    return fn(this, E).get(E);
  }
  function ca(E) {
    return fn(this, E).has(E);
  }
  function ua(E, M) {
    var G = fn(this, E), le = G.size;
    return G.set(E, M), this.size += G.size == le ? 0 : 1, this;
  }
  xt.prototype.clear = Rr, xt.prototype.delete = Ln, xt.prototype.get = ur, xt.prototype.has = ca, xt.prototype.set = ua;
  function Fn(E) {
    var M = -1, G = E == null ? 0 : E.length;
    for (this.__data__ = new xt(); ++M < G; )
      this.add(E[M]);
  }
  function la(E) {
    return this.__data__.set(E, n), this;
  }
  function on(E) {
    return this.__data__.has(E);
  }
  Fn.prototype.add = Fn.prototype.push = la, Fn.prototype.has = on;
  function br(E) {
    var M = this.__data__ = new ze(E);
    this.size = M.size;
  }
  function Ji() {
    this.__data__ = new ze(), this.size = 0;
  }
  function Xi(E) {
    var M = this.__data__, G = M.delete(E);
    return this.size = M.size, G;
  }
  function es(E) {
    return this.__data__.get(E);
  }
  function ts(E) {
    return this.__data__.has(E);
  }
  function rs(E, M) {
    var G = this.__data__;
    if (G instanceof ze) {
      var le = G.__data__;
      if (!Xe || le.length < r - 1)
        return le.push([E, M]), this.size = ++G.size, this;
      G = this.__data__ = new xt(le);
    }
    return G.set(E, M), this.size = G.size, this;
  }
  br.prototype.clear = Ji, br.prototype.delete = Xi, br.prototype.get = es, br.prototype.has = ts, br.prototype.set = rs;
  function ns(E, M) {
    var G = hn(E), le = !G && as(E), rt = !G && !le && qn(E), Re = !G && !le && !rt && dn(E), bt = G || le || rt || Re, Tt = bt ? ct(E.length, String) : [], Nt = Tt.length;
    for (var d in E)
      (M || _e.call(E, d)) && !(bt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      rt && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Re && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
      hi(d, Nt))) && Tt.push(d);
    return Tt;
  }
  function cn(E, M) {
    for (var G = E.length; G--; )
      if (di(E[G][0], M))
        return G;
    return -1;
  }
  function fa(E, M, G) {
    var le = M(E);
    return hn(E) ? le : Oe(le, G(E));
  }
  function un(E) {
    return E == null ? E === void 0 ? F : j : Rt && Rt in Object(E) ? kn(E) : ss(E);
  }
  function Mn(E) {
    return Gr(E) && un(E) == a;
  }
  function Un(E, M, G, le, rt) {
    return E === M ? !0 : E == null || M == null || !Gr(E) && !Gr(M) ? E !== E && M !== M : jn(E, M, G, le, Un, rt);
  }
  function jn(E, M, G, le, rt, Re) {
    var bt = hn(E), Tt = hn(M), Nt = bt ? l : Yt(E), d = Tt ? l : Yt(M);
    Nt = Nt == a ? _ : Nt, d = d == a ? _ : d;
    var C = Nt == _, q = d == _, B = Nt == d;
    if (B && qn(E)) {
      if (!qn(M))
        return !1;
      bt = !0, C = !1;
    }
    if (B && !C)
      return Re || (Re = new br()), bt || dn(E) ? fi(E, M, G, le, rt, Re) : da(E, M, Nt, G, le, rt, Re);
    if (!(G & i)) {
      var Q = C && _e.call(E, "__wrapped__"), pe = q && _e.call(M, "__wrapped__");
      if (Q || pe) {
        var ue = Q ? E.value() : E, ye = pe ? M.value() : M;
        return Re || (Re = new br()), rt(ue, ye, G, le, Re);
      }
    }
    return B ? (Re || (Re = new br()), pa(E, M, G, le, rt, Re)) : !1;
  }
  function li(E) {
    if (!ls(E) || ya(E))
      return !1;
    var M = cs(E) ? Ge : K;
    return M.test($r(E));
  }
  function $n(E) {
    return Gr(E) && us(E.length) && !!X[un(E)];
  }
  function ha(E) {
    if (!ma(E))
      return gr(E);
    var M = [];
    for (var G in Object(E))
      _e.call(E, G) && G != "constructor" && M.push(G);
    return M;
  }
  function fi(E, M, G, le, rt, Re) {
    var bt = G & i, Tt = E.length, Nt = M.length;
    if (Tt != Nt && !(bt && Nt > Tt))
      return !1;
    var d = Re.get(E);
    if (d && Re.get(M))
      return d == M;
    var C = -1, q = !0, B = G & s ? new Fn() : void 0;
    for (Re.set(E, M), Re.set(M, E); ++C < Tt; ) {
      var Q = E[C], pe = M[C];
      if (le)
        var ue = bt ? le(pe, Q, C, M, E, Re) : le(Q, pe, C, E, M, Re);
      if (ue !== void 0) {
        if (ue)
          continue;
        q = !1;
        break;
      }
      if (B) {
        if (!qe(M, function(ye, Pe) {
          if (!Se(B, Pe) && (Q === ye || rt(Q, ye, G, le, Re)))
            return B.push(Pe);
        })) {
          q = !1;
          break;
        }
      } else if (!(Q === pe || rt(Q, pe, G, le, Re))) {
        q = !1;
        break;
      }
    }
    return Re.delete(E), Re.delete(M), q;
  }
  function da(E, M, G, le, rt, Re, bt) {
    switch (G) {
      case Y:
        if (E.byteLength != M.byteLength || E.byteOffset != M.byteOffset)
          return !1;
        E = E.buffer, M = M.buffer;
      case V:
        return !(E.byteLength != M.byteLength || !Re(new qt(E), new qt(M)));
      case h:
      case p:
      case I:
        return di(+E, +M);
      case y:
        return E.name == M.name && E.message == M.message;
      case S:
      case c:
        return E == M + "";
      case O:
        var Tt = Ce;
      case g:
        var Nt = le & i;
        if (Tt || (Tt = Ie), E.size != M.size && !Nt)
          return !1;
        var d = bt.get(E);
        if (d)
          return d == M;
        le |= s, bt.set(E, M);
        var C = fi(Tt(E), Tt(M), le, rt, Re, bt);
        return bt.delete(E), C;
      case m:
        if (mt)
          return mt.call(E) == mt.call(M);
    }
    return !1;
  }
  function pa(E, M, G, le, rt, Re) {
    var bt = G & i, Tt = ln(E), Nt = Tt.length, d = ln(M), C = d.length;
    if (Nt != C && !bt)
      return !1;
    for (var q = Nt; q--; ) {
      var B = Tt[q];
      if (!(bt ? B in M : _e.call(M, B)))
        return !1;
    }
    var Q = Re.get(E);
    if (Q && Re.get(M))
      return Q == M;
    var pe = !0;
    Re.set(E, M), Re.set(M, E);
    for (var ue = bt; ++q < Nt; ) {
      B = Tt[q];
      var ye = E[B], Pe = M[B];
      if (le)
        var et = bt ? le(Pe, ye, B, M, E, Re) : le(ye, Pe, B, E, M, Re);
      if (!(et === void 0 ? ye === Pe || rt(ye, Pe, G, le, Re) : et)) {
        pe = !1;
        break;
      }
      ue || (ue = B == "constructor");
    }
    if (pe && !ue) {
      var nt = E.constructor, it = M.constructor;
      nt != it && "constructor" in E && "constructor" in M && !(typeof nt == "function" && nt instanceof nt && typeof it == "function" && it instanceof it) && (pe = !1);
    }
    return Re.delete(E), Re.delete(M), pe;
  }
  function ln(E) {
    return fa(E, ba, ga);
  }
  function fn(E, M) {
    var G = E.__data__;
    return is(M) ? G[typeof M == "string" ? "string" : "hash"] : G.map;
  }
  function jr(E, M) {
    var G = xe(E, M);
    return li(G) ? G : void 0;
  }
  function kn(E) {
    var M = _e.call(E, Rt), G = E[Rt];
    try {
      E[Rt] = void 0;
      var le = !0;
    } catch {
    }
    var rt = We.call(E);
    return le && (M ? E[Rt] = G : delete E[Rt]), rt;
  }
  var ga = pr ? function(E) {
    return E == null ? [] : (E = Object(E), Ue(pr(E), function(M) {
      return sr.call(E, M);
    }));
  } : Zr, Yt = un;
  (tt && Yt(new tt(new ArrayBuffer(1))) != Y || Xe && Yt(new Xe()) != O || dt && Yt(dt.resolve()) != R || ft && Yt(new ft()) != g || pt && Yt(new pt()) != $) && (Yt = function(E) {
    var M = un(E), G = M == _ ? E.constructor : void 0, le = G ? $r(G) : "";
    if (le)
      switch (le) {
        case wt:
          return Y;
        case ut:
          return O;
        case gt:
          return R;
        case yt:
          return g;
        case Ot:
          return $;
      }
    return M;
  });
  function hi(E, M) {
    return M = M ?? o, !!M && (typeof E == "number" || ie.test(E)) && E > -1 && E % 1 == 0 && E < M;
  }
  function is(E) {
    var M = typeof E;
    return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? E !== "__proto__" : E === null;
  }
  function ya(E) {
    return !!Le && Le in E;
  }
  function ma(E) {
    var M = E && E.constructor, G = typeof M == "function" && M.prototype || ve;
    return E === G;
  }
  function ss(E) {
    return We.call(E);
  }
  function $r(E) {
    if (E != null) {
      try {
        return je.call(E);
      } catch {
      }
      try {
        return E + "";
      } catch {
      }
    }
    return "";
  }
  function di(E, M) {
    return E === M || E !== E && M !== M;
  }
  var as = Mn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Mn : function(E) {
    return Gr(E) && _e.call(E, "callee") && !sr.call(E, "callee");
  }, hn = Array.isArray;
  function va(E) {
    return E != null && us(E.length) && !cs(E);
  }
  var qn = Zt || fs;
  function os(E, M) {
    return Un(E, M);
  }
  function cs(E) {
    if (!ls(E))
      return !1;
    var M = un(E);
    return M == v || M == w || M == u || M == b;
  }
  function us(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= o;
  }
  function ls(E) {
    var M = typeof E;
    return E != null && (M == "object" || M == "function");
  }
  function Gr(E) {
    return E != null && typeof E == "object";
  }
  var dn = Me ? Je(Me) : $n;
  function ba(E) {
    return va(E) ? ns(E) : ha(E);
  }
  function Zr() {
    return [];
  }
  function fs() {
    return !1;
  }
  t.exports = os;
})(Ls, Ls.exports);
var Ev = Ls.exports;
const Sv = /* @__PURE__ */ ni(Ev);
function Dv(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var i = new XMLHttpRequest(), s = [], o = [], a = {}, l = function() {
      return { ok: (i.status / 100 | 0) == 2, statusText: i.statusText, status: i.status, url: i.responseURL, text: function() {
        return Promise.resolve(i.responseText);
      }, json: function() {
        return Promise.resolve(i.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([i.response]));
      }, clone: l, headers: { keys: function() {
        return s;
      }, entries: function() {
        return o;
      }, get: function(h) {
        return a[h.toLowerCase()];
      }, has: function(h) {
        return h.toLowerCase() in a;
      } } };
    };
    for (var u in i.open(e.method || "get", t, !0), i.onload = function() {
      i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(h, p, y) {
        s.push(p = p.toLowerCase()), o.push([p, y]), a[p] = a[p] ? a[p] + "," + y : y;
      }), r(l());
    }, i.onerror = n, i.withCredentials = e.credentials == "include", e.headers)
      i.setRequestHeader(u, e.headers[u]);
    i.send(e.body || null);
  });
}
const Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dv
}, Symbol.toStringTag, { value: "Module" })), Eu = /* @__PURE__ */ Ws(Ov);
var xv = fetch || (self.fetch = Eu.default || Eu);
const Cv = /* @__PURE__ */ ni(xv);
function Iv(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), o = s.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[o] = i;
  }
  var a = t.length, l = t.charAt(0), u = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function p(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var O = 0, I = 0, j = 0, _ = w.length; j !== _ && w[j] === 0; )
      j++, O++;
    for (var R = (_ - j) * h + 1 >>> 0, b = new Uint8Array(R); j !== _; ) {
      for (var S = w[j], g = 0, c = R - 1; (S !== 0 || g < I) && c !== -1; c--, g++)
        S += 256 * b[c] >>> 0, b[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      I = g, j++;
    }
    for (var m = R - I; m !== R && b[m] === 0; )
      m++;
    for (var F = l.repeat(O); m < R; ++m)
      F += t.charAt(b[m]);
    return F;
  }
  function y(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var O = 0;
    if (w[O] !== " ") {
      for (var I = 0, j = 0; w[O] === l; )
        I++, O++;
      for (var _ = (w.length - O) * u + 1 >>> 0, R = new Uint8Array(_); w[O]; ) {
        var b = r[w.charCodeAt(O)];
        if (b === 255)
          return;
        for (var S = 0, g = _ - 1; (b !== 0 || S < j) && g !== -1; g--, S++)
          b += a * R[g] >>> 0, R[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        j = S, O++;
      }
      if (w[O] !== " ") {
        for (var c = _ - j; c !== _ && R[c] === 0; )
          c++;
        for (var m = new Uint8Array(I + (_ - c)), F = I; c !== _; )
          m[F++] = R[c++];
        return m;
      }
    }
  }
  function v(w) {
    var O = y(w);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p, decodeUnsafe: y, decode: v };
}
var Rv = Iv, Tv = Rv;
const vf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Pv = (t) => new TextEncoder().encode(t), Av = (t) => new TextDecoder().decode(t);
class Nv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Lv {
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
    return bf(this, e);
  }
}
class Fv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return bf(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const bf = (t, e) => new Fv({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Mv {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Nv(e, r, n), this.decoder = new Lv(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const na = ({ name: t, prefix: e, encode: r, decode: n }) => new Mv(t, e, r, n), Yi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Tv(r, e);
  return na({ prefix: t, name: e, encode: n, decode: (s) => vf(i(s)) });
}, Uv = (t, e, r, n) => {
  const i = {};
  for (let h = 0; h < e.length; ++h)
    i[e[h]] = h;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, u = 0;
  for (let h = 0; h < s; ++h) {
    const p = i[t[h]];
    if (p === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | p, a += r, a >= 8 && (a -= 8, o[u++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, jv = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], o += 8; o > r; )
      o -= r, s += e[i & a >> o];
  if (o && (s += e[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, kt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => na({ prefix: e, name: t, encode(i) {
  return jv(i, n, r);
}, decode(i) {
  return Uv(i, n, r, t);
} }), $v = na({ prefix: "\0", name: "identity", encode: (t) => Av(t), decode: (t) => Pv(t) });
var kv = Object.freeze({ __proto__: null, identity: $v });
const qv = kt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var zv = Object.freeze({ __proto__: null, base2: qv });
const Bv = kt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Vv = Object.freeze({ __proto__: null, base8: Bv });
const Kv = Yi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Wv = Object.freeze({ __proto__: null, base10: Kv });
const Hv = kt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Gv = kt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Zv = Object.freeze({ __proto__: null, base16: Hv, base16upper: Gv });
const Yv = kt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Qv = kt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Jv = kt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Xv = kt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), e0 = kt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), t0 = kt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), r0 = kt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), n0 = kt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), i0 = kt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var s0 = Object.freeze({ __proto__: null, base32: Yv, base32upper: Qv, base32pad: Jv, base32padupper: Xv, base32hex: e0, base32hexupper: t0, base32hexpad: r0, base32hexpadupper: n0, base32z: i0 });
const a0 = Yi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), o0 = Yi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var c0 = Object.freeze({ __proto__: null, base36: a0, base36upper: o0 });
const u0 = Yi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), l0 = Yi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var f0 = Object.freeze({ __proto__: null, base58btc: u0, base58flickr: l0 });
const h0 = kt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), d0 = kt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), p0 = kt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), g0 = kt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var y0 = Object.freeze({ __proto__: null, base64: h0, base64pad: d0, base64url: p0, base64urlpad: g0 });
const _f = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), m0 = _f.reduce((t, e, r) => (t[r] = e, t), []), v0 = _f.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function b0(t) {
  return t.reduce((e, r) => (e += m0[r], e), "");
}
function _0(t) {
  const e = [];
  for (const r of t) {
    const n = v0[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const w0 = na({ prefix: "🚀", name: "base256emoji", encode: b0, decode: _0 });
var E0 = Object.freeze({ __proto__: null, base256emoji: w0 }), S0 = wf, Su = 128, D0 = 127, O0 = ~D0, x0 = Math.pow(2, 31);
function wf(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= x0; )
    e[r++] = t & 255 | Su, t /= 128;
  for (; t & O0; )
    e[r++] = t & 255 | Su, t >>>= 7;
  return e[r] = t | 0, wf.bytes = r - n + 1, e;
}
var C0 = ho, I0 = 128, Du = 127;
function ho(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, o, a = t.length;
  do {
    if (s >= a)
      throw ho.bytes = 0, new RangeError("Could not decode varint");
    o = t[s++], r += i < 28 ? (o & Du) << i : (o & Du) * Math.pow(2, i), i += 7;
  } while (o >= I0);
  return ho.bytes = s - n, r;
}
var R0 = Math.pow(2, 7), T0 = Math.pow(2, 14), P0 = Math.pow(2, 21), A0 = Math.pow(2, 28), N0 = Math.pow(2, 35), L0 = Math.pow(2, 42), F0 = Math.pow(2, 49), M0 = Math.pow(2, 56), U0 = Math.pow(2, 63), j0 = function(t) {
  return t < R0 ? 1 : t < T0 ? 2 : t < P0 ? 3 : t < A0 ? 4 : t < N0 ? 5 : t < L0 ? 6 : t < F0 ? 7 : t < M0 ? 8 : t < U0 ? 9 : 10;
}, $0 = { encode: S0, decode: C0, encodingLength: j0 }, Ef = $0;
const Ou = (t, e, r = 0) => (Ef.encode(t, e, r), e), xu = (t) => Ef.encodingLength(t), po = (t, e) => {
  const r = e.byteLength, n = xu(t), i = n + xu(r), s = new Uint8Array(i + r);
  return Ou(t, s, 0), Ou(r, s, n), s.set(e, i), new k0(t, r, e, s);
};
class k0 {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Sf = ({ name: t, code: e, encode: r }) => new q0(t, e, r);
class q0 {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? po(this.code, r) : r.then((n) => po(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Df = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), z0 = Sf({ name: "sha2-256", code: 18, encode: Df("SHA-256") }), B0 = Sf({ name: "sha2-512", code: 19, encode: Df("SHA-512") });
var V0 = Object.freeze({ __proto__: null, sha256: z0, sha512: B0 });
const Of = 0, K0 = "identity", xf = vf, W0 = (t) => po(Of, xf(t)), H0 = { code: Of, name: K0, encode: xf, digest: W0 };
var G0 = Object.freeze({ __proto__: null, identity: H0 });
new TextEncoder(), new TextDecoder();
const Cu = { ...kv, ...zv, ...Vv, ...Wv, ...Zv, ...s0, ...c0, ...f0, ...y0, ...E0 };
({ ...V0, ...G0 });
function Cf(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Z0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Cf(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function If(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Iu = If("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ma = If("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Z0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Y0 = { utf8: Iu, "utf-8": Iu, hex: Cu.base16, latin1: Ma, ascii: Ma, binary: Ma, ...Cu };
function Q0(t, e = "utf8") {
  const r = Y0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Cf(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Rf = "wc", J0 = 2, Yo = "core", en = `${Rf}@2:${Yo}:`, X0 = { name: Yo, logger: "error" }, eb = { database: ":memory:" }, tb = "crypto", Ru = "client_ed25519_seed", rb = ge.ONE_DAY, nb = "keychain", ib = "0.3", sb = "messages", ab = "0.3", ob = ge.SIX_HOURS, cb = "publisher", Tf = "irn", ub = "error", Pf = "wss://relay.walletconnect.com", Tu = "wss://relay.walletconnect.org", lb = "relayer", Ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, fb = "_subscription", zr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, hb = ge.ONE_SECOND, db = "2.11.1", pb = 1e4, gb = "0.3", yb = "WALLETCONNECT_CLIENT_ID", _r = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, mb = "subscription", vb = "0.3", bb = ge.FIVE_SECONDS * 1e3, _b = "pairing", wb = "0.3", bi = { wc_pairingDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 } } }, Si = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Nr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Eb = "history", Sb = "0.3", Db = "expirer", yr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Ob = "0.3", Ua = "verify-api", Gn = "https://verify.walletconnect.com", go = "https://verify.walletconnect.org", xb = [Gn, go], Cb = "echo", Ib = "https://echo.walletconnect.com";
class Rb {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = nb, this.version = ib, this.initialized = !1, this.storagePrefix = en, this.init = async () => {
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
        const { message: s } = se("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Ye.generateChildLogger(r, this.name);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, of(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? cf(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Tb {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = tb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Hc(i);
      return Hl(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Uy();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), o = Hc(s), a = lo();
      return await Kg(a, i, rb, o);
    }, this.generateSharedKey = (i, s, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), l = jy(a, s);
      return this.setSymKey(l, o);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const o = s || $y(i);
      return await this.keychain.set(o, i), o;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, o) => {
      this.isInitialized();
      const a = af(o), l = Vi(s);
      if (iu(a)) {
        const y = a.senderPublicKey, v = a.receiverPublicKey;
        i = await this.generateSharedKey(y, v);
      }
      const u = this.getSymKey(i), { type: h, senderPublicKey: p } = a;
      return qy({ type: h, symKey: u, message: l, senderPublicKey: p });
    }, this.decode = async (i, s, o) => {
      this.isInitialized();
      const a = Vy(s, o);
      if (iu(a)) {
        const l = a.receiverPublicKey, u = a.senderPublicKey;
        i = await this.generateSharedKey(l, u);
      }
      try {
        const l = this.getSymKey(i), u = zy({ symKey: l, encoded: s });
        return Zs(u);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (i) => {
      const s = Ps(i);
      return Hi(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = Ps(i);
      return s.senderPublicKey ? nr(s.senderPublicKey, rr) : void 0;
    }, this.core = e, this.logger = Ye.generateChildLogger(r, this.name), this.keychain = n || new Rb(this.core, this.logger);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
      e = this.keychain.get(Ru);
    } catch {
      e = lo(), await this.keychain.set(Ru, e);
    }
    return Q0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Pb extends Zd {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = sb, this.version = ab, this.initialized = !1, this.storagePrefix = en, this.init = async () => {
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
      const s = Qn(i);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[s] < "u" || (o[s] = i, this.messages.set(n, o), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), o = Qn(i);
      return typeof s[o] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Ye.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, of(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? cf(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ab extends Yd {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new mr.EventEmitter(), this.name = cb, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ge.toMiliseconds(ge.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || ob, l = fo(s), u = (s == null ? void 0 : s.prompt) || !1, h = (s == null ? void 0 : s.tag) || 0, p = (s == null ? void 0 : s.id) || yf().toString(), y = { topic: n, message: i, opts: { ttl: a, relay: l, prompt: u, tag: h, id: p } }, v = setTimeout(() => this.queue.set(p, y), this.publishTimeout);
        try {
          await await Ti(this.rpcPublish(n, i, a, l, u, h, p), this.publishTimeout, `Failed to publish payload, please try again. id:${p} tag:${h}`), this.removeRequestFromQueue(p), this.relayer.events.emit(Ht.publish, y);
        } catch (w) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (o = s == null ? void 0 : s.internal) != null && o.throwOnFailedPublish)
            throw this.removeRequestFromQueue(p), w;
          return;
        } finally {
          clearTimeout(v);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = Ye.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, o, a) {
    var l, u, h, p;
    const y = { method: Os(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: o }, id: a };
    return tr((l = y.params) == null ? void 0 : l.prompt) && ((u = y.params) == null || delete u.prompt), tr((h = y.params) == null ? void 0 : h.tag) && ((p = y.params) == null || delete p.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(ii.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Ht.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Ht.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Nb {
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
var Lb = Object.defineProperty, Fb = Object.defineProperties, Mb = Object.getOwnPropertyDescriptors, Pu = Object.getOwnPropertySymbols, Ub = Object.prototype.hasOwnProperty, jb = Object.prototype.propertyIsEnumerable, Au = (t, e, r) => e in t ? Lb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, _i = (t, e) => {
  for (var r in e || (e = {}))
    Ub.call(e, r) && Au(t, r, e[r]);
  if (Pu)
    for (var r of Pu(e))
      jb.call(e, r) && Au(t, r, e[r]);
  return t;
}, ja = (t, e) => Fb(t, Mb(e));
class $b extends Xd {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Nb(), this.events = new mr.EventEmitter(), this.name = mb, this.version = vb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = en, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = fo(i), o = { topic: n, relay: s };
        this.pending.set(n, o);
        const a = await this.rpcSubscribe(n, s);
        return this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => {
      if (this.topics.includes(n))
        return !0;
      const i = `${this.pendingSubscriptionWatchLabel}_${n}`;
      return await new Promise((s, o) => {
        const a = new ge.Watch();
        a.start(i);
        const l = setInterval(() => {
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(l), a.stop(i), s(!0)), a.elapsed(i) >= bb && (clearInterval(l), a.stop(i), o(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Ye.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
    await Promise.all(n.map(async (i) => await this.unsubscribeById(e, i, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const i = fo(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = Ct("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Os(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
    return Qn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Os(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: Os(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, ja(_i({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, _i({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, _i({}, r)), this.topicMap.set(r.topic, e), this.events.emit(_r.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(_r.deleted, ja(_i({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(_r.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(_r.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
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
    Zi(r) && this.onBatchSubscribe(r.map((n, i) => ja(_i({}, e[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(ii.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Ht.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(_r.created, async (e) => {
      const r = _r.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(_r.deleted, async (e) => {
      const r = _r.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
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
var kb = Object.defineProperty, Nu = Object.getOwnPropertySymbols, qb = Object.prototype.hasOwnProperty, zb = Object.prototype.propertyIsEnumerable, Lu = (t, e, r) => e in t ? kb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bb = (t, e) => {
  for (var r in e || (e = {}))
    qb.call(e, r) && Lu(t, r, e[r]);
  if (Nu)
    for (var r of Nu(e))
      zb.call(e, r) && Lu(t, r, e[r]);
  return t;
};
class Vb extends Qd {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new mr.EventEmitter(), this.name = lb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const n = r.id, i = this.provider.request(r);
      this.requestsInFlight.set(n, { promise: i, request: r });
      try {
        return await this.toEstablishConnection(), await i;
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      } finally {
        this.requestsInFlight.delete(n);
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Ht.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(zr.payload, this.onPayloadHandler), this.provider.on(zr.connect, this.onConnectHandler), this.provider.on(zr.disconnect, this.onDisconnectHandler), this.provider.on(zr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ye.generateChildLogger(e.logger, this.name) : Ye.pino(Ye.getDefaultLoggerOptions({ level: e.logger || ub })), this.messages = new Pb(this.logger, e.core), this.subscriber = new $b(this, this.logger), this.publisher = new Ab(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Pf, this.projectId = e.projectId, this.bundleId = Yy(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Tu}...`), await this.restartTransport(Tu);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, pb);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
    if (i)
      return i;
    let s;
    const o = (a) => {
      a.topic === e && (this.subscriber.off(_r.created, o), s());
    };
    return await Promise.all([new Promise((a) => {
      s = a, this.subscriber.on(_r.created, o);
    }), new Promise(async (a) => {
      i = await this.subscriber.subscribe(e, r), a();
    })]), i;
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
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Ti(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(_r.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Ti(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(zr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await gu())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new mv(new wv(rm({ sdkVersion: db, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Zo(e)) {
      if (!e.method.endsWith(fb))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, o = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Bb({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
    } else
      ra(e) && this.events.emit(Ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Ho(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(zr.payload, this.onPayloadHandler), this.provider.off(zr.connect, this.onConnectHandler), this.provider.off(zr.disconnect, this.onDisconnectHandler), this.provider.off(zr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await gu();
    Ym(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ge.toMiliseconds(hb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
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
var Kb = Object.defineProperty, Fu = Object.getOwnPropertySymbols, Wb = Object.prototype.hasOwnProperty, Hb = Object.prototype.propertyIsEnumerable, Mu = (t, e, r) => e in t ? Kb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uu = (t, e) => {
  for (var r in e || (e = {}))
    Wb.call(e, r) && Mu(t, r, e[r]);
  if (Fu)
    for (var r of Fu(e))
      Hb.call(e, r) && Mu(t, r, e[r]);
  return t;
};
class ia extends Jd {
  constructor(e, r, n, i = en, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = gb, this.cached = [], this.initialized = !1, this.storagePrefix = en, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !tr(o) ? this.map.set(this.getKey(o), o) : Cm(o) ? this.map.set(o.id, o) : Im(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((l) => Sv(a[l], o[l]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const l = Uu(Uu({}, this.getData(o)), a);
      this.map.set(o, l), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), await this.persist());
    }, this.logger = Ye.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Gb {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = _b, this.version = wb, this.events = new Gs(), this.initialized = !1, this.storagePrefix = en, this.ignoredPayloadTypes = [An], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = lo(), i = await this.core.crypto.setSymKey(n), s = lr(ge.FIVE_MINUTES), o = { protocol: Tf }, a = { topic: i, expiry: s, relay: o, active: !1 }, l = vm({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: o, expiryTimestamp: s });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: o, expiryTimestamp: a } = lu(n.uri);
      let l;
      if (this.pairings.keys.includes(i) && (l = this.pairings.get(i), l.active))
        throw new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
      const u = a || lr(ge.FIVE_MINUTES), h = { topic: i, relay: o, expiry: u, active: !1 };
      return await this.pairings.set(i, h), this.core.expirer.set(i, u), n.activatePairing && await this.activate({ topic: i }), this.events.emit(Si.create, h), this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: o })), h;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = lr(ge.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: o, resolve: a, reject: l } = Kn();
        this.events.once(It("pairing_ping", s), ({ error: u }) => {
          u ? l(u) : a();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", Ct("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const o = Jn(i, s), a = await this.core.crypto.encode(n, o), l = bi[i].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, l), o.id;
    }, this.sendResult = async (n, i, s) => {
      const o = Ho(n, s), a = await this.core.crypto.encode(i, o), l = await this.core.history.get(i, n), u = bi[l.request.method].res;
      await this.core.relayer.publish(i, a, u), await this.core.history.resolve(o);
    }, this.sendError = async (n, i, s) => {
      const o = Go(n, s), a = await this.core.crypto.encode(i, o), l = await this.core.history.get(i, n), u = bi[l.request.method] ? bi[l.request.method].res : bi.unregistered_method.res;
      await this.core.relayer.publish(i, a, u), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, Ct("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => Qr(i.expiry));
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
      const { topic: i, payload: s } = n, o = (await this.core.history.get(i, s.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit(Si.ping, { id: s, topic: n });
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        Kr(i) ? this.events.emit(It("pairing_ping", s), {}) : Er(i) && this.events.emit(It("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Si.delete, { id: s, topic: n });
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: o } = i;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const a = Ct("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(Ct("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var i;
      if (!or(n)) {
        const { message: o } = se("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(o);
      }
      if (!xm(n.uri)) {
        const { message: o } = se("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(o);
      }
      const s = lu(n.uri);
      if (!((i = s == null ? void 0 : s.relay) != null && i.protocol)) {
        const { message: o } = se("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(o);
      }
      if (!(s != null && s.symKey)) {
        const { message: o } = se("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(o);
      }
      if (s != null && s.expiryTimestamp && ge.toMiliseconds(s == null ? void 0 : s.expiryTimestamp) < Date.now()) {
        const { message: o } = se("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(o);
      }
    }, this.isValidPing = async (n) => {
      if (!or(n)) {
        const { message: s } = se("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!or(n)) {
        const { message: s } = se("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!Ut(n, !1)) {
        const { message: i } = se("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (Qr(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = se("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = Ye.generateChildLogger(r, this.name), this.pairings = new ia(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        Zo(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : ra(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(yr.expired, async (e) => {
      const { topic: r } = lf(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Si.expire, { topic: r }));
    });
  }
}
class Zb extends Gd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new mr.EventEmitter(), this.name = Eb, this.version = Sb, this.cached = [], this.initialized = !1, this.storagePrefix = en, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const o = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: lr(ge.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(Nr.created, o);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = Er(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(Nr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(Nr.deleted, s);
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
    }, this.logger = Ye.generateChildLogger(r, this.name);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Jn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
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
    }), this.core.heartbeat.on(ii.HEARTBEAT_EVENTS.pulse, () => {
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
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Yb extends ep {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new mr.EventEmitter(), this.name = Db, this.version = Ob, this.cached = [], this.initialized = !1, this.storagePrefix = en, this.init = async () => {
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
      const s = this.formatTarget(n), o = { target: s, expiry: i };
      this.expirations.set(s, o), this.checkExpiry(s, o), this.events.emit(yr.created, { target: s, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(yr.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = Ye.generateChildLogger(r, this.name);
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
      return nm(e);
    if (typeof e == "number")
      return im(e);
    const { message: r } = se("UNKNOWN_TYPE", `Target type: ${typeof e}`);
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
        const { message: r } = se("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = se("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    ge.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(yr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ii.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(yr.created, (e) => {
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
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Qb extends tp {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Ua, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || oi() || !ci())
        return;
      const i = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = go;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const i = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      let s;
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (o) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.info(o), s = await this.fetchAttestation(n.attestationId, go);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const s = this.startAbortTimer(ge.ONE_SECOND * 2), o = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(s), o.status === 200 ? await o.json() : void 0;
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
        if (document.getElementById(Ua))
          return s();
        window.addEventListener("message", i);
        const o = document.createElement("iframe");
        o.id = Ua, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, n = s;
      }), new Promise((s, o) => setTimeout(() => {
        window.removeEventListener("message", i), o("verify iframe load timeout");
      }, ge.toMiliseconds(ge.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let i = n || Gn;
      return xb.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Gn}`), i = Gn), i;
    }, this.logger = Ye.generateChildLogger(r, this.name), this.verifyUrl = Gn, this.abortController = new AbortController(), this.isDevEnv = Bo() && process.env.IS_VITEST;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ge.toMiliseconds(e));
  }
}
class Jb extends rp {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = Cb, this.registerDeviceToken = async (n) => {
      const { clientId: i, token: s, notificationType: o, enableEncrypted: a = !1 } = n, l = `${Ib}/${this.projectId}/clients`;
      await Cv(l, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i, type: o, token: s, always_raw: a }) });
    }, this.logger = Ye.generateChildLogger(r, this.context);
  }
}
var Xb = Object.defineProperty, ju = Object.getOwnPropertySymbols, e_ = Object.prototype.hasOwnProperty, t_ = Object.prototype.propertyIsEnumerable, $u = (t, e, r) => e in t ? Xb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ku = (t, e) => {
  for (var r in e || (e = {}))
    e_.call(e, r) && $u(t, r, e[r]);
  if (ju)
    for (var r of ju(e))
      t_.call(e, r) && $u(t, r, e[r]);
  return t;
};
class Qo extends Hd {
  constructor(e) {
    super(e), this.protocol = Rf, this.version = J0, this.name = Yo, this.events = new mr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Pf, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ye.pino(Ye.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || X0.logger }));
    this.logger = Ye.generateChildLogger(r, this.name), this.heartbeat = new ii.HeartBeat(), this.crypto = new Tb(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Zb(this, this.logger), this.expirer = new Yb(this, this.logger), this.storage = e != null && e.storage ? e.storage : new ld(ku(ku({}, eb), e == null ? void 0 : e.storageOptions)), this.relayer = new Vb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Gb(this, this.logger), this.verify = new Qb(this.projectId || "", this.logger), this.echoClient = new Jb(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Qo(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(yb, n), r;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
const r_ = Qo, Af = "wc", Nf = 2, Lf = "client", Jo = `${Af}@${Nf}:${Lf}:`, $a = { name: Lf, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, qu = "WALLETCONNECT_DEEPLINK_CHOICE", n_ = "proposal", i_ = "Proposal expired", s_ = "session", bs = ge.SEVEN_DAYS, a_ = "engine", Br = { wc_sessionPropose: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, ka = { min: ge.FIVE_MINUTES, max: ge.SEVEN_DAYS }, Vr = { idle: "IDLE", active: "ACTIVE" }, o_ = "request", c_ = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var u_ = Object.defineProperty, l_ = Object.defineProperties, f_ = Object.getOwnPropertyDescriptors, zu = Object.getOwnPropertySymbols, h_ = Object.prototype.hasOwnProperty, d_ = Object.prototype.propertyIsEnumerable, Bu = (t, e, r) => e in t ? u_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jt = (t, e) => {
  for (var r in e || (e = {}))
    h_.call(e, r) && Bu(t, r, e[r]);
  if (zu)
    for (var r of zu(e))
      d_.call(e, r) && Bu(t, r, e[r]);
  return t;
}, Vn = (t, e) => l_(t, f_(e));
class p_ extends ip {
  constructor(e) {
    super(e), this.name = a_, this.events = new Gs(), this.initialized = !1, this.ignoredPayloadTypes = [An], this.requestQueue = { state: Vr.idle, queue: [] }, this.sessionRequestQueue = { state: Vr.idle, queue: [] }, this.requestQueueDelay = ge.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Br) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Vn(Jt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: o, sessionProperties: a, relays: l } = n;
      let u = i, h, p = !1;
      if (u && (p = this.client.core.pairing.pairings.get(u).active), !u || !p) {
        const { topic: b, uri: S } = await this.client.core.pairing.create();
        u = b, h = S;
      }
      const y = await this.client.core.crypto.generateKeyPair(), v = Br.wc_sessionPropose.req.ttl || ge.FIVE_MINUTES, w = lr(v), O = Jt({ requiredNamespaces: s, optionalNamespaces: o, relays: l ?? [{ protocol: Tf }], proposer: { publicKey: y, metadata: this.client.metadata }, expiryTimestamp: w }, a && { sessionProperties: a }), { reject: I, resolve: j, done: _ } = Kn(v, i_);
      if (this.events.once(It("session_connect"), async ({ error: b, session: S }) => {
        if (b)
          I(b);
        else if (S) {
          S.self.publicKey = y;
          const g = Vn(Jt({}, S), { requiredNamespaces: O.requiredNamespaces, optionalNamespaces: O.optionalNamespaces });
          await this.client.session.set(S.topic, g), await this.setExpiry(S.topic, S.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: S.peer.metadata }), j(g);
        }
      }), !u) {
        const { message: b } = se("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(b);
      }
      const R = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: O, throwOnFailedPublish: !0 });
      return await this.setProposal(R, Jt({ id: R }, O)), { uri: h, approval: _ };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: u, requiredNamespaces: h, optionalNamespaces: p } = a;
      l = l || "";
      const y = await this.client.core.crypto.generateKeyPair(), v = u.publicKey, w = await this.client.core.crypto.generateSharedKey(y, v);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: u.metadata }), await this.sendResult({ id: n, topic: l, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(n, Ct("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const O = Jt({ relay: { protocol: i ?? "irn" }, namespaces: s, pairingTopic: l, controller: { publicKey: y, metadata: this.client.metadata }, expiry: lr(bs) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(w);
      const I = Vn(Jt({}, O), { topic: w, requiredNamespaces: h, optionalNamespaces: p, pairingTopic: l, acknowledged: !1, self: O.controller, peer: { publicKey: u.publicKey, metadata: u.metadata }, controller: y });
      await this.client.session.set(w, I);
      try {
        await this.sendRequest({ topic: w, method: "wc_sessionSettle", params: O, throwOnFailedPublish: !0 });
      } catch (j) {
        throw this.client.logger.error(j), this.client.session.delete(w, Ct("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(w), j;
      }
      return await this.setExpiry(w, lr(bs)), { topic: w, acknowledged: () => new Promise((j) => setTimeout(() => j(this.client.session.get(w)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, Ct("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: o, resolve: a, reject: l } = Kn();
      return this.events.once(It("session_update", s), ({ error: u }) => {
        u ? l(u) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: o };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: o, reject: a } = Kn();
      return this.events.once(It("session_extend", i), ({ error: l }) => {
        l ? a(l) : o();
      }), await this.setExpiry(n, lr(bs)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: o = Br.wc_sessionRequest.req.ttl } = r, a = Wo(), { done: l, resolve: u, reject: h } = Kn(o, "Request expired. Please try again.");
      return this.events.once(It("session_request", a), ({ error: p, result: y }) => {
        p ? h(p) : u(y);
      }), await Promise.all([new Promise(async (p) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: Vn(Jt({}, i), { expiryTimestamp: lr(o) }), chainId: n }, expiry: o, throwOnFailedPublish: !0 }).catch((y) => h(y)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a }), p();
      }), new Promise(async (p) => {
        const y = await am(this.client.core.storage, qu);
        sm({ id: a, topic: s, wcDeepLink: y }), p();
      }), l()]).then((p) => p[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      Kr(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : Er(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: o, reject: a } = Kn();
        this.events.once(It("session_ping", i), ({ error: l }) => {
          l ? a(l) : o();
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
      if (this.client.session.keys.includes(n))
        await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: Ct("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n))
        await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: i } = se("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(i);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => Dm(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var o, a;
            return ((o = s.peerMetadata) == null ? void 0 : o.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r) => {
      const { topic: n, expirerHasDeleted: i = !1, emitEvent: s = !0, id: o = 0 } = r, { self: a } = this.client.session.get(n);
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, Ct("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), i || this.client.core.expirer.del(n), this.client.core.storage.removeItem(qu).catch((l) => this.client.logger.warn(l)), this.getPendingSessionRequests().forEach((l) => {
        l.topic === n && this.deletePendingSessionRequest(l.id, Ct("USER_DISCONNECTED"));
      }), s && this.client.events.emit("session_delete", { id: o, topic: n });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, Ct("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = Vr.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, lr(Br.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: n, topic: i, params: s, verifyContext: o } = r, a = s.request.expiryTimestamp || lr(Br.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(n, { id: n, topic: i, params: s, verifyContext: o }), a && this.client.core.expirer.set(n, a);
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: o, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: u } = r, h = Jn(i, s, l);
      if (ci() && c_.includes(i)) {
        const v = Qn(JSON.stringify(h));
        this.client.core.verify.register({ attestationId: v });
      }
      const p = await this.client.core.crypto.encode(n, h), y = Br[i].req;
      return o && (y.ttl = o), a && (y.id = a), this.client.core.history.set(n, h), u ? (y.internal = Vn(Jt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, p, y)) : this.client.core.relayer.publish(n, p, y).catch((v) => this.client.logger.error(v)), h.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: o } = r, a = Ho(n, s), l = await this.client.core.crypto.encode(i, a), u = await this.client.core.history.get(i, n), h = Br[u.request.method].res;
      o ? (h.internal = Vn(Jt({}, h.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, l, h)) : this.client.core.relayer.publish(i, l, h).catch((p) => this.client.logger.error(p)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, i) => {
      const s = Go(r, i), o = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), l = Br[a.request.method].res;
      this.client.core.relayer.publish(n, o, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        let s = !1;
        Qr(i.expiry) && (s = !0), this.client.core.crypto.keychain.has(i.topic) || (s = !0), s && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Qr(i.expiryTimestamp) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession({ topic: i })), ...n.map((i) => this.deleteProposal(i))]);
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
      const { topic: n } = r, { message: i } = se("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(Jt({}, n.params));
        const o = i.expiryTimestamp || lr(Br.wc_sessionPropose.req.ttl), a = Jt({ id: s, pairingTopic: r, expiryTimestamp: o }, i);
        await this.setProposal(s, a);
        const l = Qn(JSON.stringify(n)), u = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: u });
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (Kr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const o = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const a = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const u = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: u });
        const h = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h }), await this.client.core.pairing.activate({ topic: r });
      } else
        Er(n) && (await this.client.proposal.delete(i, Ct("USER_DISCONNECTED")), this.events.emit(It("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: o, controller: a, expiry: l, namespaces: u, sessionProperties: h, pairingTopic: p } = n.params, y = Jt({ topic: r, relay: o, expiry: l, namespaces: u, acknowledged: !0, pairingTopic: p, requiredNamespaces: {}, optionalNamespaces: {}, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, h && { sessionProperties: h });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(It("session_connect"), { session: y }), this.cleanupDuplicatePairings(y);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      Kr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(It("session_approve", i), {})) : Er(n) && (await this.client.session.delete(r, Ct("USER_DISCONNECTED")), this.events.emit(It("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const o = `${r}_session_update`, a = vs.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(Jt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), vs.set(o, s);
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      Kr(n) ? this.events.emit(It("session_update", i), {}) : Er(n) && this.events.emit(It("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, lr(bs)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      Kr(n) ? this.events.emit(It("session_extend", i), {}) : Er(n) && this.events.emit(It("session_extend", i), { error: n.error });
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
        Kr(n) ? this.events.emit(It("session_ping", i), {}) : Er(n) && this.events.emit(It("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Ht.publish, async () => {
            s(await this.deleteSession({ topic: r, id: i }));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: Ct("USER_DISCONNECTED") })]);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(Jt({ topic: r }, s));
        const o = Qn(JSON.stringify(Jn("wc_sessionRequest", s, i))), a = this.client.session.get(r), l = await this.getVerifyContext(o, a.peer.metadata), u = { id: i, topic: r, params: s, verifyContext: l };
        await this.setPendingSessionRequest(u), this.addSessionRequestToSessionRequestQueue(u), this.processSessionRequestQueue();
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      Kr(n) ? this.events.emit(It("session_request", i), { result: n.result }) : Er(n) && this.events.emit(It("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const o = `${r}_session_event_${s.event.name}`, a = vs.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(Jt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), vs.set(o, i);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Vr.idle, this.processSessionRequestQueue();
      }, ge.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: n }) => {
      const i = this.client.core.history.pending;
      i.length > 0 && i.filter((s) => s.topic === r && s.request.method === "wc_sessionRequest").forEach((s) => {
        this.events.emit(It("session_request", s.request.id), { error: n });
      });
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
      const n = this.client.proposal.getAll().find((i) => i.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Jn("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!or(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: o, relays: a } = r;
      if (tr(n) || await this.isValidPairingTopic(n), !Mm(a, !0)) {
        const { message: l } = se("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !tr(i) && As(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !tr(s) && As(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), tr(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = Fm(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!or(r))
        throw new Error(se("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = La(i, "approve()");
      if (l)
        throw new Error(l.message);
      const u = du(a.requiredNamespaces, i, "approve()");
      if (u)
        throw new Error(u.message);
      if (!Ut(s, !0)) {
        const { message: h } = se("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(h);
      }
      tr(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!or(r)) {
        const { message: s } = se("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !jm(i)) {
        const { message: s } = se("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!or(r)) {
        const { message: u } = se("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: n, controller: i, namespaces: s, expiry: o } = r;
      if (!hf(n)) {
        const { message: u } = se("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const a = Rm(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = La(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (Qr(o)) {
        const { message: u } = se("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (r) => {
      if (!or(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), o = La(i, "update()");
      if (o)
        throw new Error(o.message);
      const a = du(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!or(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!or(r)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: i, chainId: s, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!hu(a, s)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!$m(i)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(l);
      }
      if (!zm(a, s, i.method)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(l);
      }
      if (o && !Wm(o, ka)) {
        const { message: l } = se("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${ka.min} and ${ka.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!or(r)) {
        const { message: o } = se("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(o);
      }
      const { topic: i, response: s } = r;
      try {
        await this.isValidSessionTopic(i);
      } catch (o) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), o;
      }
      if (!km(s)) {
        const { message: o } = se("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidPing = async (r) => {
      if (!or(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!or(r)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!hu(o, s)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!qm(i)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!Bm(o, s, i.name)) {
        const { message: a } = se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!or(r)) {
        const { message: i } = se("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || Gn, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s.origin, i.verified.isScam = s.isScam, i.verified.validation = s.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.info(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!Ut(i, !1)) {
          const { message: s } = se("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = se("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        Zo(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : ra(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(yr.expired, async (e) => {
      const { topic: r, id: n } = lf(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, se("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Si.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Ut(e, !1)) {
      const { message: r } = se("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Qr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = se("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ut(e, !1)) {
      const { message: r } = se("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Qr(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = se("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = se("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Ut(e, !1)) {
      const { message: r } = se("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = se("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!Um(e)) {
      const { message: r } = se("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = se("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Qr(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = se("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class g_ extends ia {
  constructor(e, r) {
    super(e, r, n_, Jo), this.core = e, this.logger = r;
  }
}
class y_ extends ia {
  constructor(e, r) {
    super(e, r, s_, Jo), this.core = e, this.logger = r;
  }
}
class m_ extends ia {
  constructor(e, r) {
    super(e, r, o_, Jo, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Xo extends np {
  constructor(e) {
    super(e), this.protocol = Af, this.version = Nf, this.name = $a.name, this.events = new mr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || $a.name, this.metadata = (e == null ? void 0 : e.metadata) || Jy();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ye.pino(Ye.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || $a.logger }));
    this.core = (e == null ? void 0 : e.core) || new r_(e), this.logger = Ye.generateChildLogger(r, this.name), this.session = new y_(this.core, this.logger), this.proposal = new g_(this.core, this.logger), this.pendingRequest = new m_(this.core, this.logger), this.engine = new p_(this);
  }
  static async init(e) {
    const r = new Xo(e);
    return await r.initialize(), r;
  }
  get context() {
    return Ye.getLoggerContext(this.logger);
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
var v_ = Object.defineProperty, b_ = Object.defineProperties, __ = Object.getOwnPropertyDescriptors, Vu = Object.getOwnPropertySymbols, w_ = Object.prototype.hasOwnProperty, E_ = Object.prototype.propertyIsEnumerable, Ku = (t, e, r) => e in t ? v_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, S_ = (t, e) => {
  for (var r in e || (e = {}))
    w_.call(e, r) && Ku(t, r, e[r]);
  if (Vu)
    for (var r of Vu(e))
      E_.call(e, r) && Ku(t, r, e[r]);
  return t;
}, D_ = (t, e) => b_(t, __(e)), ec = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, _t = (t, e, r) => (ec(t, e, "read from private field"), r ? r.call(t) : e.get(t)), _n = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Fs = (t, e, r, n) => (ec(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Vt = (t, e, r) => (ec(t, e, "access private method"), r), wn, Wn, Di, Mt, yo, Ff, Kt, Xt, mo, Wu;
let O_ = class {
  constructor(e) {
    _n(this, yo), _n(this, Kt), _n(this, mo), _n(this, wn, void 0), _n(this, Wn, void 0), _n(this, Di, void 0), _n(this, Mt, void 0), Fs(this, wn, e), Fs(this, Wn, Vt(this, yo, Ff).call(this)), Vt(this, Kt, Xt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Vt(this, Kt, Xt).call(this);
      const o = _t(this, Wn).subscribeModal((u) => {
        u.open || (o(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await _t(this, Mt).connect(e);
      if (a) {
        const u = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((p) => u.add(p));
        }), n && Object.values(n).forEach(({ chains: h }) => {
          h && h.forEach((p) => u.add(p));
        }), await _t(this, Wn).openModal({ uri: a, chains: Array.from(u) });
      }
      try {
        const u = await l();
        i(u);
      } catch (u) {
        s(u);
      } finally {
        o(), _t(this, Wn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Vt(this, Kt, Xt).call(this), await _t(this, Mt).disconnect(e);
  }
  async request(e) {
    return await Vt(this, Kt, Xt).call(this), await _t(this, Mt).request(e);
  }
  async getSessions() {
    return await Vt(this, Kt, Xt).call(this), _t(this, Mt).session.getAll();
  }
  async getSession() {
    return await Vt(this, Kt, Xt).call(this), _t(this, Mt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Vt(this, Kt, Xt).call(this), _t(this, Mt).off("session_expire", e);
  }
};
wn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakSet(), Ff = function() {
  const { modalOptions: t, projectId: e } = _t(this, wn);
  return new xh(D_(S_({}, t), { projectId: e }));
}, Kt = /* @__PURE__ */ new WeakSet(), Xt = async function() {
  return _t(this, Mt) ? !0 : (!_t(this, Di) && typeof window < "u" && Fs(this, Di, Vt(this, mo, Wu).call(this)), _t(this, Di));
}, mo = /* @__PURE__ */ new WeakSet(), Wu = async function() {
  Fs(this, Mt, await Xo.init({ metadata: _t(this, wn).metadata, projectId: _t(this, wn).projectId, relayUrl: _t(this, wn).relayUrl }));
  const t = await _t(this, Mt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Mf = [
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
], tc = ["aleo:1"], Uf = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], x_ = "f0aaeffe71b636da453fce042d79d723", C_ = {
  standaloneChains: tc,
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
}, tE = {
  requiredNamespaces: {
    aleo: {
      methods: Mf,
      chains: tc,
      events: Uf
    }
  }
}, jf = new Gs();
let Oi;
function rE(t) {
  Oi = new O_({
    projectId: x_,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...C_ }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function vr() {
  return new Promise((t) => {
    if (Oi)
      t(Oi);
    else {
      const e = setInterval(() => {
        Oi && (clearInterval(e), t(Oi));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var I_ = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Hu = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (l, u) => {
    const h = typeof l == "function" ? l(e) : l;
    if (!Object.is(h, e)) {
      const p = e;
      e = u ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), r.forEach((y) => y(e, p));
    }
  }, i = () => e, a = { setState: n, getState: i, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    (I_ ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return e = t(n, i, a), a;
}, R_ = (t) => t ? Hu(t) : Hu;
var vo = { exports: {} }, xi = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
xi.exports;
var Gu;
function T_() {
  return Gu || (Gu = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.2.0", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), I = Symbol.iterator, j = "@@iterator";
      function _(d) {
        if (d === null || typeof d != "object")
          return null;
        var C = I && d[I] || d[j];
        return typeof C == "function" ? C : null;
      }
      var R = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, b = {
        transition: null
      }, S = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, g = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, c = {}, m = null;
      function F(d) {
        m = d;
      }
      c.setExtraStackFrame = function(d) {
        m = d;
      }, c.getCurrentStack = null, c.getStackAddendum = function() {
        var d = "";
        m && (d += m);
        var C = c.getCurrentStack;
        return C && (d += C() || ""), d;
      };
      var $ = !1, V = !1, Y = !1, ee = !1, P = !1, U = {
        ReactCurrentDispatcher: R,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: g
      };
      U.ReactDebugCurrentFrame = c, U.ReactCurrentActQueue = S;
      function J(d) {
        {
          for (var C = arguments.length, q = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
            q[B - 1] = arguments[B];
          W("warn", d, q);
        }
      }
      function z(d) {
        {
          for (var C = arguments.length, q = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
            q[B - 1] = arguments[B];
          W("error", d, q);
        }
      }
      function W(d, C, q) {
        {
          var B = U.ReactDebugCurrentFrame, Q = B.getStackAddendum();
          Q !== "" && (C += "%s", q = q.concat([Q]));
          var pe = q.map(function(ue) {
            return String(ue);
          });
          pe.unshift("Warning: " + C), Function.prototype.apply.call(console[d], console, pe);
        }
      }
      var Z = {};
      function D(d, C) {
        {
          var q = d.constructor, B = q && (q.displayName || q.name) || "ReactClass", Q = B + "." + C;
          if (Z[Q])
            return;
          z("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, B), Z[Q] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(d) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(d, C, q) {
          D(d, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(d, C, q, B) {
          D(d, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(d, C, q, B) {
          D(d, "setState");
        }
      }, te = Object.assign, K = {};
      Object.freeze(K);
      function ie(d, C, q) {
        this.props = d, this.context = C, this.refs = K, this.updater = q || k;
      }
      ie.prototype.isReactComponent = {}, ie.prototype.setState = function(d, C) {
        if (typeof d != "object" && typeof d != "function" && d != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, C, "setState");
      }, ie.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate");
      };
      {
        var X = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ce = function(d, C) {
          Object.defineProperty(ie.prototype, d, {
            get: function() {
              J("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var L in X)
          X.hasOwnProperty(L) && ce(L, X[L]);
      }
      function N() {
      }
      N.prototype = ie.prototype;
      function A(d, C, q) {
        this.props = d, this.context = C, this.refs = K, this.updater = q || k;
      }
      var f = A.prototype = new N();
      f.constructor = A, te(f, ie.prototype), f.isPureReactComponent = !0;
      function T() {
        var d = {
          current: null
        };
        return Object.seal(d), d;
      }
      var re = Array.isArray;
      function oe(d) {
        return re(d);
      }
      function Me(d) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, q = C && d[Symbol.toStringTag] || d.constructor.name || "Object";
          return q;
        }
      }
      function Ue(d) {
        try {
          return Oe(d), !1;
        } catch {
          return !0;
        }
      }
      function Oe(d) {
        return "" + d;
      }
      function qe(d) {
        if (Ue(d))
          return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(d)), Oe(d);
      }
      function ct(d, C, q) {
        var B = d.displayName;
        if (B)
          return B;
        var Q = C.displayName || C.name || "";
        return Q !== "" ? q + "(" + Q + ")" : q;
      }
      function Je(d) {
        return d.displayName || "Context";
      }
      function Se(d) {
        if (d == null)
          return null;
        if (typeof d.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
          return d.displayName || d.name || null;
        if (typeof d == "string")
          return d;
        switch (d) {
          case s:
            return "Fragment";
          case i:
            return "Portal";
          case a:
            return "Profiler";
          case o:
            return "StrictMode";
          case p:
            return "Suspense";
          case y:
            return "SuspenseList";
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case u:
              var C = d;
              return Je(C) + ".Consumer";
            case l:
              var q = d;
              return Je(q._context) + ".Provider";
            case h:
              return ct(d, d.render, "ForwardRef");
            case v:
              var B = d.displayName || null;
              return B !== null ? B : Se(d.type) || "Memo";
            case w: {
              var Q = d, pe = Q._payload, ue = Q._init;
              try {
                return Se(ue(pe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ce = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Te, Ie, we;
      we = {};
      function Ee(d) {
        if (xe.call(d, "ref")) {
          var C = Object.getOwnPropertyDescriptor(d, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return d.ref !== void 0;
      }
      function ve(d) {
        if (xe.call(d, "key")) {
          var C = Object.getOwnPropertyDescriptor(d, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return d.key !== void 0;
      }
      function Ne(d, C) {
        var q = function() {
          Te || (Te = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        q.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: q,
          configurable: !0
        });
      }
      function je(d, C) {
        var q = function() {
          Ie || (Ie = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        q.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: q,
          configurable: !0
        });
      }
      function _e(d) {
        if (typeof d.ref == "string" && g.current && d.__self && g.current.stateNode !== d.__self) {
          var C = Se(g.current.type);
          we[C] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, d.ref), we[C] = !0);
        }
      }
      var Le = function(d, C, q, B, Q, pe, ue) {
        var ye = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: d,
          key: C,
          ref: q,
          props: ue,
          // Record the component responsible for creating this element.
          _owner: pe
        };
        return ye._store = {}, Object.defineProperty(ye._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ye, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: B
        }), Object.defineProperty(ye, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.freeze && (Object.freeze(ye.props), Object.freeze(ye)), ye;
      };
      function We(d, C, q) {
        var B, Q = {}, pe = null, ue = null, ye = null, Pe = null;
        if (C != null) {
          Ee(C) && (ue = C.ref, _e(C)), ve(C) && (qe(C.key), pe = "" + C.key), ye = C.__self === void 0 ? null : C.__self, Pe = C.__source === void 0 ? null : C.__source;
          for (B in C)
            xe.call(C, B) && !Ce.hasOwnProperty(B) && (Q[B] = C[B]);
        }
        var et = arguments.length - 2;
        if (et === 1)
          Q.children = q;
        else if (et > 1) {
          for (var nt = Array(et), it = 0; it < et; it++)
            nt[it] = arguments[it + 2];
          Object.freeze && Object.freeze(nt), Q.children = nt;
        }
        if (d && d.defaultProps) {
          var St = d.defaultProps;
          for (B in St)
            Q[B] === void 0 && (Q[B] = St[B]);
        }
        if (pe || ue) {
          var Pt = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          pe && Ne(Q, Pt), ue && je(Q, Pt);
        }
        return Le(d, pe, ue, ye, Pe, g.current, Q);
      }
      function Ge(d, C) {
        var q = Le(d.type, C, d.ref, d._self, d._source, d._owner, d.props);
        return q;
      }
      function Ze(d, C, q) {
        if (d == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
        var B, Q = te({}, d.props), pe = d.key, ue = d.ref, ye = d._self, Pe = d._source, et = d._owner;
        if (C != null) {
          Ee(C) && (ue = C.ref, et = g.current), ve(C) && (qe(C.key), pe = "" + C.key);
          var nt;
          d.type && d.type.defaultProps && (nt = d.type.defaultProps);
          for (B in C)
            xe.call(C, B) && !Ce.hasOwnProperty(B) && (C[B] === void 0 && nt !== void 0 ? Q[B] = nt[B] : Q[B] = C[B]);
        }
        var it = arguments.length - 2;
        if (it === 1)
          Q.children = q;
        else if (it > 1) {
          for (var St = Array(it), Pt = 0; Pt < it; Pt++)
            St[Pt] = arguments[Pt + 2];
          Q.children = St;
        }
        return Le(d.type, pe, ue, ye, Pe, et, Q);
      }
      function $e(d) {
        return typeof d == "object" && d !== null && d.$$typeof === n;
      }
      var qt = ".", sr = ":";
      function dr(d) {
        var C = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, B = d.replace(C, function(Q) {
          return q[Q];
        });
        return "$" + B;
      }
      var Rt = !1, pr = /\/+/g;
      function Zt(d) {
        return d.replace(pr, "$&/");
      }
      function gr(d, C) {
        return typeof d == "object" && d !== null && d.key != null ? (qe(d.key), dr("" + d.key)) : C.toString(36);
      }
      function tt(d, C, q, B, Q) {
        var pe = typeof d;
        (pe === "undefined" || pe === "boolean") && (d = null);
        var ue = !1;
        if (d === null)
          ue = !0;
        else
          switch (pe) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (d.$$typeof) {
                case n:
                case i:
                  ue = !0;
              }
          }
        if (ue) {
          var ye = d, Pe = Q(ye), et = B === "" ? qt + gr(ye, 0) : B;
          if (oe(Pe)) {
            var nt = "";
            et != null && (nt = Zt(et) + "/"), tt(Pe, C, nt, "", function(ih) {
              return ih;
            });
          } else
            Pe != null && ($e(Pe) && (Pe.key && (!ye || ye.key !== Pe.key) && qe(Pe.key), Pe = Ge(
              Pe,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Pe.key && (!ye || ye.key !== Pe.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Zt("" + Pe.key) + "/"
              ) : "") + et
            )), C.push(Pe));
          return 1;
        }
        var it, St, Pt = 0, jt = B === "" ? qt : B + sr;
        if (oe(d))
          for (var hs = 0; hs < d.length; hs++)
            it = d[hs], St = jt + gr(it, hs), Pt += tt(it, C, q, St, Q);
        else {
          var _a = _(d);
          if (typeof _a == "function") {
            var ac = d;
            _a === ac.entries && (Rt || J("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Rt = !0);
            for (var rh = _a.call(ac), oc, nh = 0; !(oc = rh.next()).done; )
              it = oc.value, St = jt + gr(it, nh++), Pt += tt(it, C, q, St, Q);
          } else if (pe === "object") {
            var cc = String(d);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Pt;
      }
      function Xe(d, C, q) {
        if (d == null)
          return d;
        var B = [], Q = 0;
        return tt(d, B, "", "", function(pe) {
          return C.call(q, pe, Q++);
        }), B;
      }
      function dt(d) {
        var C = 0;
        return Xe(d, function() {
          C++;
        }), C;
      }
      function ft(d, C, q) {
        Xe(d, function() {
          C.apply(this, arguments);
        }, q);
      }
      function pt(d) {
        return Xe(d, function(C) {
          return C;
        }) || [];
      }
      function ot(d) {
        if (!$e(d))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return d;
      }
      function wt(d) {
        var C = {
          $$typeof: u,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: d,
          _currentValue2: d,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: l,
          _context: C
        };
        var q = !1, B = !1, Q = !1;
        {
          var pe = {
            $$typeof: u,
            _context: C
          };
          Object.defineProperties(pe, {
            Provider: {
              get: function() {
                return B || (B = !0, z("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ue) {
                C.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ue) {
                C._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ue) {
                C._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ue) {
                C._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, z("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ue) {
                Q || (J("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), Q = !0);
              }
            }
          }), C.Consumer = pe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ut = -1, gt = 0, yt = 1, Ot = 2;
      function Et(d) {
        if (d._status === ut) {
          var C = d._result, q = C();
          if (q.then(function(pe) {
            if (d._status === gt || d._status === ut) {
              var ue = d;
              ue._status = yt, ue._result = pe;
            }
          }, function(pe) {
            if (d._status === gt || d._status === ut) {
              var ue = d;
              ue._status = Ot, ue._result = pe;
            }
          }), d._status === ut) {
            var B = d;
            B._status = gt, B._result = q;
          }
        }
        if (d._status === yt) {
          var Q = d._result;
          return Q === void 0 && z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Q), "default" in Q || z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Q), Q.default;
        } else
          throw d._result;
      }
      function mt(d) {
        var C = {
          // We use these fields to store the result.
          _status: ut,
          _result: d
        }, q = {
          $$typeof: w,
          _payload: C,
          _init: Et
        };
        {
          var B, Q;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return B;
              },
              set: function(pe) {
                z("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = pe, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(pe) {
                z("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = pe, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function st(d) {
        d != null && d.$$typeof === v ? z("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof d != "function" ? z("forwardRef requires a render function but was given %s.", d === null ? "null" : typeof d) : d.length !== 0 && d.length !== 2 && z("forwardRef render functions accept exactly two parameters: props and ref. %s", d.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), d != null && (d.defaultProps != null || d.propTypes != null) && z("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: h,
          render: d
        };
        {
          var q;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(B) {
              q = B, !d.name && !d.displayName && (d.displayName = B);
            }
          });
        }
        return C;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function H(d) {
        return !!(typeof d == "string" || typeof d == "function" || d === s || d === a || P || d === o || d === p || d === y || ee || d === O || $ || V || Y || typeof d == "object" && d !== null && (d.$$typeof === w || d.$$typeof === v || d.$$typeof === l || d.$$typeof === u || d.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        d.$$typeof === x || d.getModuleId !== void 0));
      }
      function ae(d, C) {
        H(d) || z("memo: The first argument must be a component. Instead received: %s", d === null ? "null" : typeof d);
        var q = {
          $$typeof: v,
          type: d,
          compare: C === void 0 ? null : C
        };
        {
          var B;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(Q) {
              B = Q, !d.name && !d.displayName && (d.displayName = Q);
            }
          });
        }
        return q;
      }
      function de() {
        var d = R.current;
        return d === null && z(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), d;
      }
      function He(d) {
        var C = de();
        if (d._context !== void 0) {
          var q = d._context;
          q.Consumer === d ? z("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === d && z("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(d);
      }
      function ze(d) {
        var C = de();
        return C.useState(d);
      }
      function Ve(d, C, q) {
        var B = de();
        return B.useReducer(d, C, q);
      }
      function ke(d) {
        var C = de();
        return C.useRef(d);
      }
      function At(d, C) {
        var q = de();
        return q.useEffect(d, C);
      }
      function ht(d, C) {
        var q = de();
        return q.useInsertionEffect(d, C);
      }
      function vt(d, C) {
        var q = de();
        return q.useLayoutEffect(d, C);
      }
      function xt(d, C) {
        var q = de();
        return q.useCallback(d, C);
      }
      function Rr(d, C) {
        var q = de();
        return q.useMemo(d, C);
      }
      function Ln(d, C, q) {
        var B = de();
        return B.useImperativeHandle(d, C, q);
      }
      function ur(d, C) {
        {
          var q = de();
          return q.useDebugValue(d, C);
        }
      }
      function ca() {
        var d = de();
        return d.useTransition();
      }
      function ua(d) {
        var C = de();
        return C.useDeferredValue(d);
      }
      function Fn() {
        var d = de();
        return d.useId();
      }
      function la(d, C, q) {
        var B = de();
        return B.useSyncExternalStore(d, C, q);
      }
      var on = 0, br, Ji, Xi, es, ts, rs, ns;
      function cn() {
      }
      cn.__reactDisabledLog = !0;
      function fa() {
        {
          if (on === 0) {
            br = console.log, Ji = console.info, Xi = console.warn, es = console.error, ts = console.group, rs = console.groupCollapsed, ns = console.groupEnd;
            var d = {
              configurable: !0,
              enumerable: !0,
              value: cn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: d,
              log: d,
              warn: d,
              error: d,
              group: d,
              groupCollapsed: d,
              groupEnd: d
            });
          }
          on++;
        }
      }
      function un() {
        {
          if (on--, on === 0) {
            var d = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, d, {
                value: br
              }),
              info: te({}, d, {
                value: Ji
              }),
              warn: te({}, d, {
                value: Xi
              }),
              error: te({}, d, {
                value: es
              }),
              group: te({}, d, {
                value: ts
              }),
              groupCollapsed: te({}, d, {
                value: rs
              }),
              groupEnd: te({}, d, {
                value: ns
              })
            });
          }
          on < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Mn = U.ReactCurrentDispatcher, Un;
      function jn(d, C, q) {
        {
          if (Un === void 0)
            try {
              throw Error();
            } catch (Q) {
              var B = Q.stack.trim().match(/\n( *(at )?)/);
              Un = B && B[1] || "";
            }
          return `
` + Un + d;
        }
      }
      var li = !1, $n;
      {
        var ha = typeof WeakMap == "function" ? WeakMap : Map;
        $n = new ha();
      }
      function fi(d, C) {
        if (!d || li)
          return "";
        {
          var q = $n.get(d);
          if (q !== void 0)
            return q;
        }
        var B;
        li = !0;
        var Q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var pe;
        pe = Mn.current, Mn.current = null, fa();
        try {
          if (C) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (jt) {
                B = jt;
              }
              Reflect.construct(d, [], ue);
            } else {
              try {
                ue.call();
              } catch (jt) {
                B = jt;
              }
              d.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (jt) {
              B = jt;
            }
            d();
          }
        } catch (jt) {
          if (jt && B && typeof jt.stack == "string") {
            for (var ye = jt.stack.split(`
`), Pe = B.stack.split(`
`), et = ye.length - 1, nt = Pe.length - 1; et >= 1 && nt >= 0 && ye[et] !== Pe[nt]; )
              nt--;
            for (; et >= 1 && nt >= 0; et--, nt--)
              if (ye[et] !== Pe[nt]) {
                if (et !== 1 || nt !== 1)
                  do
                    if (et--, nt--, nt < 0 || ye[et] !== Pe[nt]) {
                      var it = `
` + ye[et].replace(" at new ", " at ");
                      return d.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", d.displayName)), typeof d == "function" && $n.set(d, it), it;
                    }
                  while (et >= 1 && nt >= 0);
                break;
              }
          }
        } finally {
          li = !1, Mn.current = pe, un(), Error.prepareStackTrace = Q;
        }
        var St = d ? d.displayName || d.name : "", Pt = St ? jn(St) : "";
        return typeof d == "function" && $n.set(d, Pt), Pt;
      }
      function da(d, C, q) {
        return fi(d, !1);
      }
      function pa(d) {
        var C = d.prototype;
        return !!(C && C.isReactComponent);
      }
      function ln(d, C, q) {
        if (d == null)
          return "";
        if (typeof d == "function")
          return fi(d, pa(d));
        if (typeof d == "string")
          return jn(d);
        switch (d) {
          case p:
            return jn("Suspense");
          case y:
            return jn("SuspenseList");
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case h:
              return da(d.render);
            case v:
              return ln(d.type, C, q);
            case w: {
              var B = d, Q = B._payload, pe = B._init;
              try {
                return ln(pe(Q), C, q);
              } catch {
              }
            }
          }
        return "";
      }
      var fn = {}, jr = U.ReactDebugCurrentFrame;
      function kn(d) {
        if (d) {
          var C = d._owner, q = ln(d.type, d._source, C ? C.type : null);
          jr.setExtraStackFrame(q);
        } else
          jr.setExtraStackFrame(null);
      }
      function ga(d, C, q, B, Q) {
        {
          var pe = Function.call.bind(xe);
          for (var ue in d)
            if (pe(d, ue)) {
              var ye = void 0;
              try {
                if (typeof d[ue] != "function") {
                  var Pe = Error((B || "React class") + ": " + q + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Pe.name = "Invariant Violation", Pe;
                }
                ye = d[ue](C, ue, B, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (et) {
                ye = et;
              }
              ye && !(ye instanceof Error) && (kn(Q), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", q, ue, typeof ye), kn(null)), ye instanceof Error && !(ye.message in fn) && (fn[ye.message] = !0, kn(Q), z("Failed %s type: %s", q, ye.message), kn(null));
            }
        }
      }
      function Yt(d) {
        if (d) {
          var C = d._owner, q = ln(d.type, d._source, C ? C.type : null);
          F(q);
        } else
          F(null);
      }
      var hi;
      hi = !1;
      function is() {
        if (g.current) {
          var d = Se(g.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
      function ya(d) {
        if (d !== void 0) {
          var C = d.fileName.replace(/^.*[\\\/]/, ""), q = d.lineNumber;
          return `

Check your code at ` + C + ":" + q + ".";
        }
        return "";
      }
      function ma(d) {
        return d != null ? ya(d.__source) : "";
      }
      var ss = {};
      function $r(d) {
        var C = is();
        if (!C) {
          var q = typeof d == "string" ? d : d.displayName || d.name;
          q && (C = `

Check the top-level render call using <` + q + ">.");
        }
        return C;
      }
      function di(d, C) {
        if (!(!d._store || d._store.validated || d.key != null)) {
          d._store.validated = !0;
          var q = $r(C);
          if (!ss[q]) {
            ss[q] = !0;
            var B = "";
            d && d._owner && d._owner !== g.current && (B = " It was passed a child from " + Se(d._owner.type) + "."), Yt(d), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, B), Yt(null);
          }
        }
      }
      function as(d, C) {
        if (typeof d == "object") {
          if (oe(d))
            for (var q = 0; q < d.length; q++) {
              var B = d[q];
              $e(B) && di(B, C);
            }
          else if ($e(d))
            d._store && (d._store.validated = !0);
          else if (d) {
            var Q = _(d);
            if (typeof Q == "function" && Q !== d.entries)
              for (var pe = Q.call(d), ue; !(ue = pe.next()).done; )
                $e(ue.value) && di(ue.value, C);
          }
        }
      }
      function hn(d) {
        {
          var C = d.type;
          if (C == null || typeof C == "string")
            return;
          var q;
          if (typeof C == "function")
            q = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === v))
            q = C.propTypes;
          else
            return;
          if (q) {
            var B = Se(C);
            ga(q, d.props, "prop", B, d);
          } else if (C.PropTypes !== void 0 && !hi) {
            hi = !0;
            var Q = Se(C);
            z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function va(d) {
        {
          for (var C = Object.keys(d.props), q = 0; q < C.length; q++) {
            var B = C[q];
            if (B !== "children" && B !== "key") {
              Yt(d), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Yt(null);
              break;
            }
          }
          d.ref !== null && (Yt(d), z("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
        }
      }
      function qn(d, C, q) {
        var B = H(d);
        if (!B) {
          var Q = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = ma(C);
          pe ? Q += pe : Q += is();
          var ue;
          d === null ? ue = "null" : oe(d) ? ue = "array" : d !== void 0 && d.$$typeof === n ? (ue = "<" + (Se(d.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof d, z("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, Q);
        }
        var ye = We.apply(this, arguments);
        if (ye == null)
          return ye;
        if (B)
          for (var Pe = 2; Pe < arguments.length; Pe++)
            as(arguments[Pe], d);
        return d === s ? va(ye) : hn(ye), ye;
      }
      var os = !1;
      function cs(d) {
        var C = qn.bind(null, d);
        return C.type = d, os || (os = !0, J("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return J("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: d
            }), d;
          }
        }), C;
      }
      function us(d, C, q) {
        for (var B = Ze.apply(this, arguments), Q = 2; Q < arguments.length; Q++)
          as(arguments[Q], B.type);
        return hn(B), B;
      }
      function ls(d, C) {
        var q = b.transition;
        b.transition = {};
        var B = b.transition;
        b.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          d();
        } finally {
          if (b.transition = q, q === null && B._updatedFibers) {
            var Q = B._updatedFibers.size;
            Q > 10 && J("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), B._updatedFibers.clear();
          }
        }
      }
      var Gr = !1, dn = null;
      function ba(d) {
        if (dn === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), q = t && t[C];
            dn = q.call(t, "timers").setImmediate;
          } catch {
            dn = function(Q) {
              Gr === !1 && (Gr = !0, typeof MessageChannel > "u" && z("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var pe = new MessageChannel();
              pe.port1.onmessage = Q, pe.port2.postMessage(void 0);
            };
          }
        return dn(d);
      }
      var Zr = 0, fs = !1;
      function E(d) {
        {
          var C = Zr;
          Zr++, S.current === null && (S.current = []);
          var q = S.isBatchingLegacy, B;
          try {
            if (S.isBatchingLegacy = !0, B = d(), !q && S.didScheduleLegacyUpdate) {
              var Q = S.current;
              Q !== null && (S.didScheduleLegacyUpdate = !1, rt(Q));
            }
          } catch (St) {
            throw M(C), St;
          } finally {
            S.isBatchingLegacy = q;
          }
          if (B !== null && typeof B == "object" && typeof B.then == "function") {
            var pe = B, ue = !1, ye = {
              then: function(St, Pt) {
                ue = !0, pe.then(function(jt) {
                  M(C), Zr === 0 ? G(jt, St, Pt) : St(jt);
                }, function(jt) {
                  M(C), Pt(jt);
                });
              }
            };
            return !fs && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (fs = !0, z("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ye;
          } else {
            var Pe = B;
            if (M(C), Zr === 0) {
              var et = S.current;
              et !== null && (rt(et), S.current = null);
              var nt = {
                then: function(St, Pt) {
                  S.current === null ? (S.current = [], G(Pe, St, Pt)) : St(Pe);
                }
              };
              return nt;
            } else {
              var it = {
                then: function(St, Pt) {
                  St(Pe);
                }
              };
              return it;
            }
          }
        }
      }
      function M(d) {
        d !== Zr - 1 && z("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Zr = d;
      }
      function G(d, C, q) {
        {
          var B = S.current;
          if (B !== null)
            try {
              rt(B), ba(function() {
                B.length === 0 ? (S.current = null, C(d)) : G(d, C, q);
              });
            } catch (Q) {
              q(Q);
            }
          else
            C(d);
        }
      }
      var le = !1;
      function rt(d) {
        if (!le) {
          le = !0;
          var C = 0;
          try {
            for (; C < d.length; C++) {
              var q = d[C];
              do
                q = q(!0);
              while (q !== null);
            }
            d.length = 0;
          } catch (B) {
            throw d = d.slice(C + 1), B;
          } finally {
            le = !1;
          }
        }
      }
      var Re = qn, bt = us, Tt = cs, Nt = {
        map: Xe,
        forEach: ft,
        count: dt,
        toArray: pt,
        only: ot
      };
      e.Children = Nt, e.Component = ie, e.Fragment = s, e.Profiler = a, e.PureComponent = A, e.StrictMode = o, e.Suspense = p, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, e.cloneElement = bt, e.createContext = wt, e.createElement = Re, e.createFactory = Tt, e.createRef = T, e.forwardRef = st, e.isValidElement = $e, e.lazy = mt, e.memo = ae, e.startTransition = ls, e.unstable_act = E, e.useCallback = xt, e.useContext = He, e.useDebugValue = ur, e.useDeferredValue = ua, e.useEffect = At, e.useId = Fn, e.useImperativeHandle = Ln, e.useInsertionEffect = ht, e.useLayoutEffect = vt, e.useMemo = Rr, e.useReducer = Ve, e.useRef = ke, e.useState = ze, e.useSyncExternalStore = la, e.useTransition = ca, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(xi, xi.exports)), xi.exports;
}
var Ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zu;
function P_() {
  if (Zu)
    return Ke;
  Zu = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.iterator;
  function y(D) {
    return D === null || typeof D != "object" ? null : (D = p && D[p] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, O = {};
  function I(D, k, te) {
    this.props = D, this.context = k, this.refs = O, this.updater = te || v;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(D, k) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, k, "setState");
  }, I.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function j() {
  }
  j.prototype = I.prototype;
  function _(D, k, te) {
    this.props = D, this.context = k, this.refs = O, this.updater = te || v;
  }
  var R = _.prototype = new j();
  R.constructor = _, w(R, I.prototype), R.isPureReactComponent = !0;
  var b = Array.isArray, S = Object.prototype.hasOwnProperty, g = { current: null }, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(D, k, te) {
    var K, ie = {}, X = null, ce = null;
    if (k != null)
      for (K in k.ref !== void 0 && (ce = k.ref), k.key !== void 0 && (X = "" + k.key), k)
        S.call(k, K) && !c.hasOwnProperty(K) && (ie[K] = k[K]);
    var L = arguments.length - 2;
    if (L === 1)
      ie.children = te;
    else if (1 < L) {
      for (var N = Array(L), A = 0; A < L; A++)
        N[A] = arguments[A + 2];
      ie.children = N;
    }
    if (D && D.defaultProps)
      for (K in L = D.defaultProps, L)
        ie[K] === void 0 && (ie[K] = L[K]);
    return { $$typeof: t, type: D, key: X, ref: ce, props: ie, _owner: g.current };
  }
  function F(D, k) {
    return { $$typeof: t, type: D.type, key: k, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function $(D) {
    return typeof D == "object" && D !== null && D.$$typeof === t;
  }
  function V(D) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(te) {
      return k[te];
    });
  }
  var Y = /\/+/g;
  function ee(D, k) {
    return typeof D == "object" && D !== null && D.key != null ? V("" + D.key) : k.toString(36);
  }
  function P(D, k, te, K, ie) {
    var X = typeof D;
    (X === "undefined" || X === "boolean") && (D = null);
    var ce = !1;
    if (D === null)
      ce = !0;
    else
      switch (X) {
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case t:
            case e:
              ce = !0;
          }
      }
    if (ce)
      return ce = D, ie = ie(ce), D = K === "" ? "." + ee(ce, 0) : K, b(ie) ? (te = "", D != null && (te = D.replace(Y, "$&/") + "/"), P(ie, k, te, "", function(A) {
        return A;
      })) : ie != null && ($(ie) && (ie = F(ie, te + (!ie.key || ce && ce.key === ie.key ? "" : ("" + ie.key).replace(Y, "$&/") + "/") + D)), k.push(ie)), 1;
    if (ce = 0, K = K === "" ? "." : K + ":", b(D))
      for (var L = 0; L < D.length; L++) {
        X = D[L];
        var N = K + ee(X, L);
        ce += P(X, k, te, N, ie);
      }
    else if (N = y(D), typeof N == "function")
      for (D = N.call(D), L = 0; !(X = D.next()).done; )
        X = X.value, N = K + ee(X, L++), ce += P(X, k, te, N, ie);
    else if (X === "object")
      throw k = String(D), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return ce;
  }
  function U(D, k, te) {
    if (D == null)
      return D;
    var K = [], ie = 0;
    return P(D, K, "", "", function(X) {
      return k.call(te, X, ie++);
    }), K;
  }
  function J(D) {
    if (D._status === -1) {
      var k = D._result;
      k = k(), k.then(function(te) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = te);
      }, function(te) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = te);
      }), D._status === -1 && (D._status = 0, D._result = k);
    }
    if (D._status === 1)
      return D._result.default;
    throw D._result;
  }
  var z = { current: null }, W = { transition: null }, Z = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: W, ReactCurrentOwner: g };
  return Ke.Children = { map: U, forEach: function(D, k, te) {
    U(D, function() {
      k.apply(this, arguments);
    }, te);
  }, count: function(D) {
    var k = 0;
    return U(D, function() {
      k++;
    }), k;
  }, toArray: function(D) {
    return U(D, function(k) {
      return k;
    }) || [];
  }, only: function(D) {
    if (!$(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ke.Component = I, Ke.Fragment = r, Ke.Profiler = i, Ke.PureComponent = _, Ke.StrictMode = n, Ke.Suspense = l, Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, Ke.cloneElement = function(D, k, te) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var K = w({}, D.props), ie = D.key, X = D.ref, ce = D._owner;
    if (k != null) {
      if (k.ref !== void 0 && (X = k.ref, ce = g.current), k.key !== void 0 && (ie = "" + k.key), D.type && D.type.defaultProps)
        var L = D.type.defaultProps;
      for (N in k)
        S.call(k, N) && !c.hasOwnProperty(N) && (K[N] = k[N] === void 0 && L !== void 0 ? L[N] : k[N]);
    }
    var N = arguments.length - 2;
    if (N === 1)
      K.children = te;
    else if (1 < N) {
      L = Array(N);
      for (var A = 0; A < N; A++)
        L[A] = arguments[A + 2];
      K.children = L;
    }
    return { $$typeof: t, type: D.type, key: ie, ref: X, props: K, _owner: ce };
  }, Ke.createContext = function(D) {
    return D = { $$typeof: o, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: s, _context: D }, D.Consumer = D;
  }, Ke.createElement = m, Ke.createFactory = function(D) {
    var k = m.bind(null, D);
    return k.type = D, k;
  }, Ke.createRef = function() {
    return { current: null };
  }, Ke.forwardRef = function(D) {
    return { $$typeof: a, render: D };
  }, Ke.isValidElement = $, Ke.lazy = function(D) {
    return { $$typeof: h, _payload: { _status: -1, _result: D }, _init: J };
  }, Ke.memo = function(D, k) {
    return { $$typeof: u, type: D, compare: k === void 0 ? null : k };
  }, Ke.startTransition = function(D) {
    var k = W.transition;
    W.transition = {};
    try {
      D();
    } finally {
      W.transition = k;
    }
  }, Ke.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ke.useCallback = function(D, k) {
    return z.current.useCallback(D, k);
  }, Ke.useContext = function(D) {
    return z.current.useContext(D);
  }, Ke.useDebugValue = function() {
  }, Ke.useDeferredValue = function(D) {
    return z.current.useDeferredValue(D);
  }, Ke.useEffect = function(D, k) {
    return z.current.useEffect(D, k);
  }, Ke.useId = function() {
    return z.current.useId();
  }, Ke.useImperativeHandle = function(D, k, te) {
    return z.current.useImperativeHandle(D, k, te);
  }, Ke.useInsertionEffect = function(D, k) {
    return z.current.useInsertionEffect(D, k);
  }, Ke.useLayoutEffect = function(D, k) {
    return z.current.useLayoutEffect(D, k);
  }, Ke.useMemo = function(D, k) {
    return z.current.useMemo(D, k);
  }, Ke.useReducer = function(D, k, te) {
    return z.current.useReducer(D, k, te);
  }, Ke.useRef = function(D) {
    return z.current.useRef(D);
  }, Ke.useState = function(D) {
    return z.current.useState(D);
  }, Ke.useSyncExternalStore = function(D, k, te) {
    return z.current.useSyncExternalStore(D, k, te);
  }, Ke.useTransition = function() {
    return z.current.useTransition();
  }, Ke.version = "18.2.0", Ke;
}
process.env.NODE_ENV === "production" ? vo.exports = P_() : vo.exports = T_();
var Nn = vo.exports;
const A_ = /* @__PURE__ */ ni(Nn);
var bo = { exports: {} }, qa = {}, _s = { exports: {} }, za = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function N_() {
  return Yu || (Yu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Nn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var b = arguments.length, S = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          S[g - 1] = arguments[g];
        n("error", R, S);
      }
    }
    function n(R, b, S) {
      {
        var g = e.ReactDebugCurrentFrame, c = g.getStackAddendum();
        c !== "" && (b += "%s", S = S.concat([c]));
        var m = S.map(function(F) {
          return String(F);
        });
        m.unshift("Warning: " + b), Function.prototype.apply.call(console[R], console, m);
      }
    }
    function i(R, b) {
      return R === b && (R !== 0 || 1 / R === 1 / b) || R !== R && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : i, o = t.useState, a = t.useEffect, l = t.useLayoutEffect, u = t.useDebugValue, h = !1, p = !1;
    function y(R, b, S) {
      h || t.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!p) {
        var c = b();
        s(g, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
      }
      var m = o({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), F = m[0].inst, $ = m[1];
      return l(function() {
        F.value = g, F.getSnapshot = b, v(F) && $({
          inst: F
        });
      }, [R, g, b]), a(function() {
        v(F) && $({
          inst: F
        });
        var V = function() {
          v(F) && $({
            inst: F
          });
        };
        return R(V);
      }, [R]), u(g), g;
    }
    function v(R) {
      var b = R.getSnapshot, S = R.value;
      try {
        var g = b();
        return !s(S, g);
      } catch {
        return !0;
      }
    }
    function w(R, b, S) {
      return b();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = !O, j = I ? w : y, _ = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : j;
    za.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), za;
}
var Ba = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qu;
function L_() {
  if (Qu)
    return Ba;
  Qu = 1;
  var t = Nn;
  function e(p, y) {
    return p === y && (p !== 0 || 1 / p === 1 / y) || p !== p && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, o = t.useDebugValue;
  function a(p, y) {
    var v = y(), w = n({ inst: { value: v, getSnapshot: y } }), O = w[0].inst, I = w[1];
    return s(function() {
      O.value = v, O.getSnapshot = y, l(O) && I({ inst: O });
    }, [p, v, y]), i(function() {
      return l(O) && I({ inst: O }), p(function() {
        l(O) && I({ inst: O });
      });
    }, [p]), o(v), v;
  }
  function l(p) {
    var y = p.getSnapshot;
    p = p.value;
    try {
      var v = y();
      return !r(p, v);
    } catch {
      return !0;
    }
  }
  function u(p, y) {
    return y();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return Ba.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : h, Ba;
}
var Ju;
function $f() {
  return Ju || (Ju = 1, process.env.NODE_ENV === "production" ? _s.exports = L_() : _s.exports = N_()), _s.exports;
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
var Xu;
function F_() {
  return Xu || (Xu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Nn, e = $f();
    function r(h, p) {
      return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    function u(h, p, y, v, w) {
      var O = s(null), I;
      O.current === null ? (I = {
        hasValue: !1,
        value: null
      }, O.current = I) : I = O.current;
      var j = a(function() {
        var S = !1, g, c, m = function(Y) {
          if (!S) {
            S = !0, g = Y;
            var ee = v(Y);
            if (w !== void 0 && I.hasValue) {
              var P = I.value;
              if (w(P, ee))
                return c = P, P;
            }
            return c = ee, ee;
          }
          var U = g, J = c;
          if (n(U, Y))
            return J;
          var z = v(Y);
          return w !== void 0 && w(J, z) ? J : (g = Y, c = z, z);
        }, F = y === void 0 ? null : y, $ = function() {
          return m(p());
        }, V = F === null ? void 0 : function() {
          return m(F());
        };
        return [$, V];
      }, [p, y, v, w]), _ = j[0], R = j[1], b = i(h, _, R);
      return o(function() {
        I.hasValue = !0, I.value = b;
      }, [b]), l(b), b;
    }
    qa.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qa;
}
var Va = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function M_() {
  if (el)
    return Va;
  el = 1;
  var t = Nn, e = $f();
  function r(u, h) {
    return u === h && (u !== 0 || 1 / u === 1 / h) || u !== u && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
  return Va.useSyncExternalStoreWithSelector = function(u, h, p, y, v) {
    var w = s(null);
    if (w.current === null) {
      var O = { hasValue: !1, value: null };
      w.current = O;
    } else
      O = w.current;
    w = a(function() {
      function j(g) {
        if (!_) {
          if (_ = !0, R = g, g = y(g), v !== void 0 && O.hasValue) {
            var c = O.value;
            if (v(c, g))
              return b = c;
          }
          return b = g;
        }
        if (c = b, n(R, g))
          return c;
        var m = y(g);
        return v !== void 0 && v(c, m) ? c : (R = g, b = m);
      }
      var _ = !1, R, b, S = p === void 0 ? null : p;
      return [function() {
        return j(h());
      }, S === null ? void 0 : function() {
        return j(S());
      }];
    }, [h, p, y, v]);
    var I = i(u, w[0], w[1]);
    return o(function() {
      O.hasValue = !0, O.value = I;
    }, [I]), l(I), I;
  }, Va;
}
process.env.NODE_ENV === "production" ? bo.exports = M_() : bo.exports = F_();
var U_ = bo.exports;
const j_ = /* @__PURE__ */ ni(U_);
var kf = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: $_ } = A_, { useSyncExternalStoreWithSelector: k_ } = j_;
let tl = !1;
function q_(t, e = t.getState, r) {
  (kf ? "production" : void 0) !== "production" && r && !tl && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), tl = !0);
  const n = k_(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return $_(n), n;
}
const rl = (t) => {
  (kf ? "production" : void 0) !== "production" && typeof t != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof t == "function" ? R_(t) : t, r = (n, i) => q_(e, n, i);
  return Object.assign(r, e), r;
}, z_ = (t) => t ? rl(t) : rl;
var Qe;
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
    for (const o of i)
      s[o] = o;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), o = {};
    for (const a of s)
      o[a] = i[a];
    return t.objectValues(o);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
    return s;
  }, t.find = (i, s) => {
    for (const o of i)
      if (s(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(Qe || (Qe = {}));
var _o;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(_o || (_o = {}));
const fe = Qe.arrayToEnum([
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
]), Xr = (t) => {
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
}, ne = Qe.arrayToEnum([
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
]), B_ = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Or extends Error {
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
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let a = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(r(o))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return i(this), n;
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
    for (const i of this.issues)
      i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : n.push(e(i));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Or.create = (t) => new Or(t);
const Pi = (t, e) => {
  let r;
  switch (t.code) {
    case ne.invalid_type:
      t.received === fe.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case ne.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Qe.jsonStringifyReplacer)}`;
      break;
    case ne.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Qe.joinValues(t.keys, ", ")}`;
      break;
    case ne.invalid_union:
      r = "Invalid input";
      break;
    case ne.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Qe.joinValues(t.options)}`;
      break;
    case ne.invalid_enum_value:
      r = `Invalid enum value. Expected ${Qe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case ne.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case ne.invalid_return_type:
      r = "Invalid function return type";
      break;
    case ne.invalid_date:
      r = "Invalid date";
      break;
    case ne.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Qe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case ne.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case ne.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case ne.custom:
      r = "Invalid input";
      break;
    case ne.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case ne.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case ne.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Qe.assertNever(t);
  }
  return { message: r };
};
let qf = Pi;
function V_(t) {
  qf = t;
}
function Ms() {
  return qf;
}
const Us = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, s = [...r, ...i.path || []], o = {
    ...i,
    path: s
  };
  let a = "";
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(o, { data: e, defaultError: a }).message;
  return {
    ...i,
    path: s,
    message: i.message || a
  };
}, K_ = [];
function he(t, e) {
  const r = Us({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ms(),
      Pi
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Gt {
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
        return De;
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
    return Gt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: s, value: o } = i;
      if (s.status === "aborted" || o.status === "aborted")
        return De;
      s.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), (typeof o.value < "u" || i.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const De = Object.freeze({
  status: "aborted"
}), zf = (t) => ({ status: "dirty", value: t }), ir = (t) => ({ status: "valid", value: t }), wo = (t) => t.status === "aborted", Eo = (t) => t.status === "dirty", js = (t) => t.status === "valid", $s = (t) => typeof Promise < "u" && t instanceof Promise;
var me;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(me || (me = {}));
class Fr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const nl = (t, e) => {
  if (js(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Or(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function Fe(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: i };
}
class Be {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Xr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Xr(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Gt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Xr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if ($s(r))
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
      parsedType: Xr(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return nl(i, s);
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
      parsedType: Xr(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await ($s(i) ? i : Promise.resolve(i));
    return nl(n, s);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, s) => {
      const o = e(i), a = () => s.addIssue({
        code: ne.custom,
        ...n(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new Cr({
      schema: this,
      typeName: be.ZodEffects,
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
    return Cn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return xr.create(this, this._def);
  }
  promise() {
    return ri.create(this, this._def);
  }
  or(e) {
    return Fi.create([this, e], this._def);
  }
  and(e) {
    return Mi.create(this, e, this._def);
  }
  transform(e) {
    return new Cr({
      ...Fe(this._def),
      schema: this,
      typeName: be.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new qi({
      ...Fe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: be.ZodDefault
    });
  }
  brand() {
    return new Vf({
      typeName: be.ZodBranded,
      type: this,
      ...Fe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Bs({
      ...Fe(this._def),
      innerType: this,
      catchValue: r,
      typeName: be.ZodCatch
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
const W_ = /^c[^\s-]{8,}$/i, H_ = /^[a-z][a-z0-9]*$/, G_ = /[0-9A-HJKMNP-TV-Z]{26}/, Z_ = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Y_ = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Q_ = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), J_ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, X_ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ew = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function tw(t, e) {
  return !!((e === "v4" || !e) && J_.test(t) || (e === "v6" || !e) && X_.test(t));
}
class Dr extends Be {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: ne.invalid_string,
      ...me.errToObj(n)
    }), this.nonempty = (e) => this.min(1, me.errToObj(e)), this.trim = () => new Dr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Dr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Dr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== fe.string) {
      const s = this._getOrReturnCtx(e);
      return he(
        s,
        {
          code: ne.invalid_type,
          expected: fe.string,
          received: s.parsedType
        }
        //
      ), De;
    }
    const n = new Gt();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = e.data.length > s.value, a = e.data.length < s.value;
        (o || a) && (i = this._getOrReturnCtx(e, i), o ? he(i, {
          code: ne.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && he(i, {
          code: ne.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Y_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "email",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        Q_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "emoji",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Z_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "uuid",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        W_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "cuid",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        H_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "cuid2",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        G_.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "ulid",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), he(i, {
            validation: "url",
            code: ne.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "regex",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? ew(s).test(e.data) || (i = this._getOrReturnCtx(e, i), he(i, {
          code: ne.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? tw(e.data, s.version) || (i = this._getOrReturnCtx(e, i), he(i, {
          validation: "ip",
          code: ne.invalid_string,
          message: s.message
        }), n.dirty()) : Qe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Dr({
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
Dr.create = (t) => {
  var e;
  return new Dr({
    checks: [],
    typeName: be.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Fe(t)
  });
};
function rw(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, s = parseInt(t.toFixed(i).replace(".", "")), o = parseInt(e.toFixed(i).replace(".", ""));
  return s % o / Math.pow(10, i);
}
class tn extends Be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== fe.number) {
      const s = this._getOrReturnCtx(e);
      return he(s, {
        code: ne.invalid_type,
        expected: fe.number,
        received: s.parsedType
      }), De;
    }
    let n;
    const i = new Gt();
    for (const s of this._def.checks)
      s.kind === "int" ? Qe.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? rw(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.not_finite,
        message: s.message
      }), i.dirty()) : Qe.assertNever(s);
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
    return new tn({
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
    return new tn({
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
tn.create = (t) => new tn({
  checks: [],
  typeName: be.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Fe(t)
});
class rn extends Be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== fe.bigint) {
      const s = this._getOrReturnCtx(e);
      return he(s, {
        code: ne.invalid_type,
        expected: fe.bigint,
        received: s.parsedType
      }), De;
    }
    let n;
    const i = new Gt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), he(n, {
        code: ne.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : Qe.assertNever(s);
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
    return new rn({
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
    return new rn({
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
rn.create = (t) => {
  var e;
  return new rn({
    checks: [],
    typeName: be.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Fe(t)
  });
};
class Ai extends Be {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== fe.boolean) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.boolean,
        received: n.parsedType
      }), De;
    }
    return ir(e.data);
  }
}
Ai.create = (t) => new Ai({
  typeName: be.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Fe(t)
});
class On extends Be {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== fe.date) {
      const s = this._getOrReturnCtx(e);
      return he(s, {
        code: ne.invalid_type,
        expected: fe.date,
        received: s.parsedType
      }), De;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return he(s, {
        code: ne.invalid_date
      }), De;
    }
    const n = new Gt();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), he(i, {
        code: ne.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), he(i, {
        code: ne.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : Qe.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new On({
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
On.create = (t) => new On({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: be.ZodDate,
  ...Fe(t)
});
class ks extends Be {
  _parse(e) {
    if (this._getType(e) !== fe.symbol) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.symbol,
        received: n.parsedType
      }), De;
    }
    return ir(e.data);
  }
}
ks.create = (t) => new ks({
  typeName: be.ZodSymbol,
  ...Fe(t)
});
class Ni extends Be {
  _parse(e) {
    if (this._getType(e) !== fe.undefined) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.undefined,
        received: n.parsedType
      }), De;
    }
    return ir(e.data);
  }
}
Ni.create = (t) => new Ni({
  typeName: be.ZodUndefined,
  ...Fe(t)
});
class Li extends Be {
  _parse(e) {
    if (this._getType(e) !== fe.null) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.null,
        received: n.parsedType
      }), De;
    }
    return ir(e.data);
  }
}
Li.create = (t) => new Li({
  typeName: be.ZodNull,
  ...Fe(t)
});
class ti extends Be {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
ti.create = (t) => new ti({
  typeName: be.ZodAny,
  ...Fe(t)
});
class Dn extends Be {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
Dn.create = (t) => new Dn({
  typeName: be.ZodUnknown,
  ...Fe(t)
});
class Hr extends Be {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return he(r, {
      code: ne.invalid_type,
      expected: fe.never,
      received: r.parsedType
    }), De;
  }
}
Hr.create = (t) => new Hr({
  typeName: be.ZodNever,
  ...Fe(t)
});
class qs extends Be {
  _parse(e) {
    if (this._getType(e) !== fe.undefined) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.void,
        received: n.parsedType
      }), De;
    }
    return ir(e.data);
  }
}
qs.create = (t) => new qs({
  typeName: be.ZodVoid,
  ...Fe(t)
});
class xr extends Be {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== fe.array)
      return he(r, {
        code: ne.invalid_type,
        expected: fe.array,
        received: r.parsedType
      }), De;
    if (i.exactLength !== null) {
      const o = r.data.length > i.exactLength.value, a = r.data.length < i.exactLength.value;
      (o || a) && (he(r, {
        code: o ? ne.too_big : ne.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (he(r, {
      code: ne.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (he(r, {
      code: ne.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => i.type._parseAsync(new Fr(r, o, r.path, a)))).then((o) => Gt.mergeArray(n, o));
    const s = [...r.data].map((o, a) => i.type._parseSync(new Fr(r, o, r.path, a)));
    return Gt.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new xr({
      ...this._def,
      minLength: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new xr({
      ...this._def,
      maxLength: { value: e, message: me.toString(r) }
    });
  }
  length(e, r) {
    return new xr({
      ...this._def,
      exactLength: { value: e, message: me.toString(r) }
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
  typeName: be.ZodArray,
  ...Fe(e)
});
function Hn(t) {
  if (t instanceof Dt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Wr.create(Hn(n));
    }
    return new Dt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof xr ? new xr({
      ...t._def,
      type: Hn(t.element)
    }) : t instanceof Wr ? Wr.create(Hn(t.unwrap())) : t instanceof Cn ? Cn.create(Hn(t.unwrap())) : t instanceof Mr ? Mr.create(t.items.map((e) => Hn(e))) : t;
}
class Dt extends Be {
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
    if (this._getType(e) !== fe.object) {
      const u = this._getOrReturnCtx(e);
      return he(u, {
        code: ne.invalid_type,
        expected: fe.object,
        received: u.parsedType
      }), De;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Hr && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const h = s[u], p = i.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: h._parse(new Fr(i, p, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof Hr) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const h of a)
          l.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: i.data[h] }
          });
      else if (u === "strict")
        a.length > 0 && (he(i, {
          code: ne.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const h of a) {
        const p = i.data[h];
        l.push({
          key: { status: "valid", value: h },
          value: u._parse(
            new Fr(i, p, i.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const h of l) {
        const p = await h.key;
        u.push({
          key: p,
          value: await h.value,
          alwaysSet: h.alwaysSet
        });
      }
      return u;
    }).then((u) => Gt.mergeObjectSync(n, u)) : Gt.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return me.errToObj, new Dt({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, s, o, a;
          const l = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = me.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Dt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Dt({
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
    return new Dt({
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
    return new Dt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: be.ZodObject
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
    return new Dt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Qe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Dt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new Dt({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Hn(this);
  }
  partial(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new Dt({
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
        for (; s instanceof Wr; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new Dt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Bf(Qe.objectKeys(this.shape));
  }
}
Dt.create = (t, e) => new Dt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Hr.create(),
  typeName: be.ZodObject,
  ...Fe(e)
});
Dt.strictCreate = (t, e) => new Dt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Hr.create(),
  typeName: be.ZodObject,
  ...Fe(e)
});
Dt.lazycreate = (t, e) => new Dt({
  shape: t,
  unknownKeys: "strip",
  catchall: Hr.create(),
  typeName: be.ZodObject,
  ...Fe(e)
});
class Fi extends Be {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new Or(a.ctx.common.issues));
      return he(r, {
        code: ne.invalid_union,
        unionErrors: o
      }), De;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const o = {
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
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let s;
      const o = [];
      for (const l of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, h = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !s && (s = { result: h, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((l) => new Or(l));
      return he(r, {
        code: ne.invalid_union,
        unionErrors: a
      }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
Fi.create = (t, e) => new Fi({
  options: t,
  typeName: be.ZodUnion,
  ...Fe(e)
});
const xs = (t) => t instanceof ji ? xs(t.schema) : t instanceof Cr ? xs(t.innerType()) : t instanceof $i ? [t.value] : t instanceof nn ? t.options : t instanceof ki ? Object.keys(t.enum) : t instanceof qi ? xs(t._def.innerType) : t instanceof Ni ? [void 0] : t instanceof Li ? [null] : null;
class sa extends Be {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.object)
      return he(r, {
        code: ne.invalid_type,
        expected: fe.object,
        received: r.parsedType
      }), De;
    const n = this.discriminator, i = r.data[n], s = this.optionsMap.get(i);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (he(r, {
      code: ne.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), De);
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
      const o = xs(s.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        i.set(a, s);
      }
    }
    return new sa({
      typeName: be.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...Fe(n)
    });
  }
}
function So(t, e) {
  const r = Xr(t), n = Xr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === fe.object && n === fe.object) {
    const i = Qe.objectKeys(e), s = Qe.objectKeys(t).filter((a) => i.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of s) {
      const l = So(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === fe.array && n === fe.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], a = e[s], l = So(o, a);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else
    return r === fe.date && n === fe.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Mi extends Be {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, o) => {
      if (wo(s) || wo(o))
        return De;
      const a = So(s.value, o.value);
      return a.valid ? ((Eo(s) || Eo(o)) && r.dirty(), { status: r.value, value: a.data }) : (he(n, {
        code: ne.invalid_intersection_types
      }), De);
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
    ]).then(([s, o]) => i(s, o)) : i(this._def.left._parseSync({
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
Mi.create = (t, e, r) => new Mi({
  left: t,
  right: e,
  typeName: be.ZodIntersection,
  ...Fe(r)
});
class Mr extends Be {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.array)
      return he(n, {
        code: ne.invalid_type,
        expected: fe.array,
        received: n.parsedType
      }), De;
    if (n.data.length < this._def.items.length)
      return he(n, {
        code: ne.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), De;
    !this._def.rest && n.data.length > this._def.items.length && (he(n, {
      code: ne.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Fr(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => Gt.mergeArray(r, o)) : Gt.mergeArray(r, s);
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
    typeName: be.ZodTuple,
    rest: null,
    ...Fe(e)
  });
};
class Ui extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.object)
      return he(n, {
        code: ne.invalid_type,
        expected: fe.object,
        received: n.parsedType
      }), De;
    const i = [], s = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      i.push({
        key: s._parse(new Fr(n, a, n.path, a)),
        value: o._parse(new Fr(n, n.data[a], n.path, a))
      });
    return n.common.async ? Gt.mergeObjectAsync(r, i) : Gt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Be ? new Ui({
      keyType: e,
      valueType: r,
      typeName: be.ZodRecord,
      ...Fe(n)
    }) : new Ui({
      keyType: Dr.create(),
      valueType: e,
      typeName: be.ZodRecord,
      ...Fe(r)
    });
  }
}
class zs extends Be {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.map)
      return he(n, {
        code: ne.invalid_type,
        expected: fe.map,
        received: n.parsedType
      }), De;
    const i = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([a, l], u) => ({
      key: i._parse(new Fr(n, a, n.path, [u, "key"])),
      value: s._parse(new Fr(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, h = await l.value;
          if (u.status === "aborted" || h.status === "aborted")
            return De;
          (u.status === "dirty" || h.status === "dirty") && r.dirty(), a.set(u.value, h.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, h = l.value;
        if (u.status === "aborted" || h.status === "aborted")
          return De;
        (u.status === "dirty" || h.status === "dirty") && r.dirty(), a.set(u.value, h.value);
      }
      return { status: r.value, value: a };
    }
  }
}
zs.create = (t, e, r) => new zs({
  valueType: e,
  keyType: t,
  typeName: be.ZodMap,
  ...Fe(r)
});
class xn extends Be {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== fe.set)
      return he(n, {
        code: ne.invalid_type,
        expected: fe.set,
        received: n.parsedType
      }), De;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (he(n, {
      code: ne.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (he(n, {
      code: ne.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const h of l) {
        if (h.status === "aborted")
          return De;
        h.status === "dirty" && r.dirty(), u.add(h.value);
      }
      return { status: r.value, value: u };
    }
    const a = [...n.data.values()].map((l, u) => s._parse(new Fr(n, l, n.path, u)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, r) {
    return new xn({
      ...this._def,
      minSize: { value: e, message: me.toString(r) }
    });
  }
  max(e, r) {
    return new xn({
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
xn.create = (t, e) => new xn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: be.ZodSet,
  ...Fe(e)
});
class Xn extends Be {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.function)
      return he(r, {
        code: ne.invalid_type,
        expected: fe.function,
        received: r.parsedType
      }), De;
    function n(a, l) {
      return Us({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ms(),
          Pi
        ].filter((u) => !!u),
        issueData: {
          code: ne.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(a, l) {
      return Us({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ms(),
          Pi
        ].filter((u) => !!u),
        issueData: {
          code: ne.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    return this._def.returns instanceof ri ? ir(async (...a) => {
      const l = new Or([]), u = await this._def.args.parseAsync(a, s).catch((y) => {
        throw l.addIssue(n(a, y)), l;
      }), h = await o(...u);
      return await this._def.returns._def.type.parseAsync(h, s).catch((y) => {
        throw l.addIssue(i(h, y)), l;
      });
    }) : ir((...a) => {
      const l = this._def.args.safeParse(a, s);
      if (!l.success)
        throw new Or([n(a, l.error)]);
      const u = o(...l.data), h = this._def.returns.safeParse(u, s);
      if (!h.success)
        throw new Or([i(u, h.error)]);
      return h.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Xn({
      ...this._def,
      args: Mr.create(e).rest(Dn.create())
    });
  }
  returns(e) {
    return new Xn({
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
    return new Xn({
      args: e || Mr.create([]).rest(Dn.create()),
      returns: r || Dn.create(),
      typeName: be.ZodFunction,
      ...Fe(n)
    });
  }
}
class ji extends Be {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
ji.create = (t, e) => new ji({
  getter: t,
  typeName: be.ZodLazy,
  ...Fe(e)
});
class $i extends Be {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return he(r, {
        received: r.data,
        code: ne.invalid_literal,
        expected: this._def.value
      }), De;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
$i.create = (t, e) => new $i({
  value: t,
  typeName: be.ZodLiteral,
  ...Fe(e)
});
function Bf(t, e) {
  return new nn({
    values: t,
    typeName: be.ZodEnum,
    ...Fe(e)
  });
}
class nn extends Be {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return he(r, {
        expected: Qe.joinValues(n),
        received: r.parsedType,
        code: ne.invalid_type
      }), De;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return he(r, {
        received: r.data,
        code: ne.invalid_enum_value,
        options: n
      }), De;
    }
    return ir(e.data);
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
    return nn.create(e);
  }
  exclude(e) {
    return nn.create(this.options.filter((r) => !e.includes(r)));
  }
}
nn.create = Bf;
class ki extends Be {
  _parse(e) {
    const r = Qe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== fe.string && n.parsedType !== fe.number) {
      const i = Qe.objectValues(r);
      return he(n, {
        expected: Qe.joinValues(i),
        received: n.parsedType,
        code: ne.invalid_type
      }), De;
    }
    if (r.indexOf(e.data) === -1) {
      const i = Qe.objectValues(r);
      return he(n, {
        received: n.data,
        code: ne.invalid_enum_value,
        options: i
      }), De;
    }
    return ir(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ki.create = (t, e) => new ki({
  values: t,
  typeName: be.ZodNativeEnum,
  ...Fe(e)
});
class ri extends Be {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== fe.promise && r.common.async === !1)
      return he(r, {
        code: ne.invalid_type,
        expected: fe.promise,
        received: r.parsedType
      }), De;
    const n = r.parsedType === fe.promise ? r.data : Promise.resolve(r.data);
    return ir(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ri.create = (t, e) => new ri({
  type: t,
  typeName: be.ZodPromise,
  ...Fe(e)
});
class Cr extends Be {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === be.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const o = i.transform(n.data);
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
    const s = {
      addIssue: (o) => {
        he(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "refinement") {
      const o = (a) => {
        const l = i.refinement(a, s);
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
        return a.status === "aborted" ? De : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? De : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!js(o))
          return o;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => js(o) ? Promise.resolve(i.transform(o.value, s)).then((a) => ({ status: r.value, value: a })) : o);
    Qe.assertNever(i);
  }
}
Cr.create = (t, e, r) => new Cr({
  schema: t,
  typeName: be.ZodEffects,
  effect: e,
  ...Fe(r)
});
Cr.createWithPreprocess = (t, e, r) => new Cr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: be.ZodEffects,
  ...Fe(r)
});
class Wr extends Be {
  _parse(e) {
    return this._getType(e) === fe.undefined ? ir(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wr.create = (t, e) => new Wr({
  innerType: t,
  typeName: be.ZodOptional,
  ...Fe(e)
});
class Cn extends Be {
  _parse(e) {
    return this._getType(e) === fe.null ? ir(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Cn.create = (t, e) => new Cn({
  innerType: t,
  typeName: be.ZodNullable,
  ...Fe(e)
});
class qi extends Be {
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
qi.create = (t, e) => new qi({
  innerType: t,
  typeName: be.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Fe(e)
});
class Bs extends Be {
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
    return $s(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Or(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Or(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Bs.create = (t, e) => new Bs({
  innerType: t,
  typeName: be.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Fe(e)
});
class Vs extends Be {
  _parse(e) {
    if (this._getType(e) !== fe.nan) {
      const n = this._getOrReturnCtx(e);
      return he(n, {
        code: ne.invalid_type,
        expected: fe.nan,
        received: n.parsedType
      }), De;
    }
    return { status: "valid", value: e.data };
  }
}
Vs.create = (t) => new Vs({
  typeName: be.ZodNaN,
  ...Fe(t)
});
const nw = Symbol("zod_brand");
class Vf extends Be {
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
class Qi extends Be {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? De : s.status === "dirty" ? (r.dirty(), zf(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? De : i.status === "dirty" ? (r.dirty(), {
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
      typeName: be.ZodPipeline
    });
  }
}
const Kf = (t, e = {}, r) => t ? ti.create().superRefine((n, i) => {
  var s, o;
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, l = (o = (s = a.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, u = typeof a == "string" ? { message: a } : a;
    i.addIssue({ code: "custom", ...u, fatal: l });
  }
}) : ti.create(), iw = {
  object: Dt.lazycreate
};
var be;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(be || (be = {}));
const sw = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Kf((r) => r instanceof t, e), Wf = Dr.create, Hf = tn.create, aw = Vs.create, ow = rn.create, Gf = Ai.create, cw = On.create, uw = ks.create, lw = Ni.create, fw = Li.create, hw = ti.create, dw = Dn.create, pw = Hr.create, gw = qs.create, yw = xr.create, mw = Dt.create, vw = Dt.strictCreate, bw = Fi.create, _w = sa.create, ww = Mi.create, Ew = Mr.create, Sw = Ui.create, Dw = zs.create, Ow = xn.create, xw = Xn.create, Cw = ji.create, Iw = $i.create, Rw = nn.create, Tw = ki.create, Pw = ri.create, il = Cr.create, Aw = Wr.create, Nw = Cn.create, Lw = Cr.createWithPreprocess, Fw = Qi.create, Mw = () => Wf().optional(), Uw = () => Hf().optional(), jw = () => Gf().optional(), $w = {
  string: (t) => Dr.create({ ...t, coerce: !0 }),
  number: (t) => tn.create({ ...t, coerce: !0 }),
  boolean: (t) => Ai.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => rn.create({ ...t, coerce: !0 }),
  date: (t) => On.create({ ...t, coerce: !0 })
}, kw = De;
var Ir = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Pi,
  setErrorMap: V_,
  getErrorMap: Ms,
  makeIssue: Us,
  EMPTY_PATH: K_,
  addIssueToContext: he,
  ParseStatus: Gt,
  INVALID: De,
  DIRTY: zf,
  OK: ir,
  isAborted: wo,
  isDirty: Eo,
  isValid: js,
  isAsync: $s,
  get util() {
    return Qe;
  },
  get objectUtil() {
    return _o;
  },
  ZodParsedType: fe,
  getParsedType: Xr,
  ZodType: Be,
  ZodString: Dr,
  ZodNumber: tn,
  ZodBigInt: rn,
  ZodBoolean: Ai,
  ZodDate: On,
  ZodSymbol: ks,
  ZodUndefined: Ni,
  ZodNull: Li,
  ZodAny: ti,
  ZodUnknown: Dn,
  ZodNever: Hr,
  ZodVoid: qs,
  ZodArray: xr,
  ZodObject: Dt,
  ZodUnion: Fi,
  ZodDiscriminatedUnion: sa,
  ZodIntersection: Mi,
  ZodTuple: Mr,
  ZodRecord: Ui,
  ZodMap: zs,
  ZodSet: xn,
  ZodFunction: Xn,
  ZodLazy: ji,
  ZodLiteral: $i,
  ZodEnum: nn,
  ZodNativeEnum: ki,
  ZodPromise: ri,
  ZodEffects: Cr,
  ZodTransformer: Cr,
  ZodOptional: Wr,
  ZodNullable: Cn,
  ZodDefault: qi,
  ZodCatch: Bs,
  ZodNaN: Vs,
  BRAND: nw,
  ZodBranded: Vf,
  ZodPipeline: Qi,
  custom: Kf,
  Schema: Be,
  ZodSchema: Be,
  late: iw,
  get ZodFirstPartyTypeKind() {
    return be;
  },
  coerce: $w,
  any: hw,
  array: yw,
  bigint: ow,
  boolean: Gf,
  date: cw,
  discriminatedUnion: _w,
  effect: il,
  enum: Rw,
  function: xw,
  instanceof: sw,
  intersection: ww,
  lazy: Cw,
  literal: Iw,
  map: Dw,
  nan: aw,
  nativeEnum: Tw,
  never: pw,
  null: fw,
  nullable: Nw,
  number: Hf,
  object: mw,
  oboolean: jw,
  onumber: Uw,
  optional: Aw,
  ostring: Mw,
  pipeline: Fw,
  preprocess: Lw,
  promise: Pw,
  record: Sw,
  set: Ow,
  strictObject: vw,
  string: Wf,
  symbol: uw,
  transformer: il,
  tuple: Ew,
  undefined: lw,
  union: bw,
  unknown: dw,
  void: gw,
  NEVER: kw,
  ZodIssueCode: ne,
  quotelessJson: B_,
  ZodError: Or
});
const Zf = /^aleo1[a-z0-9]{58}$/i, qw = /^AViewKey1[a-z0-9]{44}$/i, zw = /^APrivateKey1[a-z0-9]{47}$/i, Bw = /^at1[a-z0-9]{58}$/i, Vw = /^\d+field$/, Kw = /^\d+u32$/, Ww = /^\d+u64$/, nE = Ir.string().regex(Zf), iE = Ir.string().regex(qw), sE = Ir.string().regex(zw), aE = Ir.string().regex(Bw), oE = Ir.string().regex(Vw), cE = Ir.string().regex(Kw), uE = Ir.string().regex(Ww);
var sl;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(sl || (sl = {}));
var Do;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Do || (Do = {}));
var Oo;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Oo || (Oo = {}));
var xo;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(xo || (xo = {}));
var Co;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Co || (Co = {}));
var al;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(al || (al = {}));
const lE = Ir.nativeEnum(Do), fE = Ir.nativeEnum(Oo), hE = Ir.nativeEnum(Co), dE = Ir.nativeEnum(xo);
class aa {
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
const rc = typeof window > "u" || "Deno" in window;
function wr() {
}
function Hw(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Gw(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Zw(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function ws(t, e, r) {
  return oa(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function Jr(t, e, r) {
  return oa(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function ol(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: o,
    stale: a
  } = t;
  if (oa(o)) {
    if (n) {
      if (e.queryHash !== nc(o, e.options))
        return !1;
    } else if (!Zn(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function cl(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: i,
    mutationKey: s
  } = t;
  if (oa(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Sn(e.options.mutationKey) !== Sn(s))
        return !1;
    } else if (!Zn(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || i && !i(e));
}
function nc(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Sn)(t);
}
function Sn(t) {
  return JSON.stringify(t, (e, r) => Io(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r);
}
function Zn(t, e) {
  return Yf(t, e);
}
function Yf(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Yf(t[r], e[r])) : !1;
}
function Qf(t, e) {
  if (t === e)
    return t;
  const r = ul(t) && ul(e);
  if (r || Io(t) && Io(e)) {
    const n = r ? t.length : Object.keys(t).length, i = r ? e : Object.keys(e), s = i.length, o = r ? [] : {};
    let a = 0;
    for (let l = 0; l < s; l++) {
      const u = r ? l : i[l];
      o[u] = Qf(t[u], e[u]), o[u] === t[u] && a++;
    }
    return n === s && a === n ? t : o;
  }
  return e;
}
function ul(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Io(t) {
  if (!ll(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!ll(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function ll(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function oa(t) {
  return Array.isArray(t);
}
function Jf(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function fl(t) {
  Jf(0).then(t);
}
function Yw() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Qw(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Qf(t, e) : e;
}
class Jw extends aa {
  constructor() {
    super(), this.setup = (e) => {
      if (!rc && window.addEventListener) {
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
const Ro = new Jw(), hl = ["online", "offline"];
class Xw extends aa {
  constructor() {
    super(), this.setup = (e) => {
      if (!rc && window.addEventListener) {
        const r = () => e();
        return hl.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          hl.forEach((n) => {
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
const Ks = new Xw();
function e1(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ic(t) {
  return (t ?? "online") === "online" ? Ks.isOnline() : !0;
}
class Xf {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function Ka(t) {
  return t instanceof Xf;
}
function eh(t) {
  let e = !1, r = 0, n = !1, i, s, o;
  const a = new Promise((I, j) => {
    s = I, o = j;
  }), l = (I) => {
    n || (v(new Xf(I)), t.abort == null || t.abort());
  }, u = () => {
    e = !0;
  }, h = () => {
    e = !1;
  }, p = () => !Ro.isFocused() || t.networkMode !== "always" && !Ks.isOnline(), y = (I) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(I), i == null || i(), s(I));
  }, v = (I) => {
    n || (n = !0, t.onError == null || t.onError(I), i == null || i(), o(I));
  }, w = () => new Promise((I) => {
    i = (j) => {
      const _ = n || !p();
      return _ && I(j), _;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, n || t.onContinue == null || t.onContinue();
  }), O = () => {
    if (n)
      return;
    let I;
    try {
      I = t.fn();
    } catch (j) {
      I = Promise.reject(j);
    }
    Promise.resolve(I).then(y).catch((j) => {
      var _, R;
      if (n)
        return;
      const b = (_ = t.retry) != null ? _ : 3, S = (R = t.retryDelay) != null ? R : e1, g = typeof S == "function" ? S(r, j) : S, c = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, j);
      if (e || !c) {
        v(j);
        return;
      }
      r++, t.onFail == null || t.onFail(r, j), Jf(g).then(() => {
        if (p())
          return w();
      }).then(() => {
        e ? v(j) : O();
      });
    });
  };
  return ic(t.networkMode) ? O() : w().then(O), {
    promise: a,
    cancel: l,
    continue: () => (i == null ? void 0 : i()) ? a : Promise.resolve(),
    cancelRetry: u,
    continueRetry: h
  };
}
const sc = console;
function t1() {
  let t = [], e = 0, r = (h) => {
    h();
  }, n = (h) => {
    h();
  };
  const i = (h) => {
    let p;
    e++;
    try {
      p = h();
    } finally {
      e--, e || a();
    }
    return p;
  }, s = (h) => {
    e ? t.push(h) : fl(() => {
      r(h);
    });
  }, o = (h) => (...p) => {
    s(() => {
      h(...p);
    });
  }, a = () => {
    const h = t;
    t = [], h.length && fl(() => {
      n(() => {
        h.forEach((p) => {
          r(p);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: o,
    schedule: s,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    }
  };
}
const er = t1();
class th {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Gw(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (rc ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class r1 extends th {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || sc, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || n1(this.options), this.state = this.initialState, this.scheduleGc();
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
    const n = Qw(this.state.data, e, this.options);
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
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(wr).catch(wr) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Zw(this.state.dataUpdatedAt, e);
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
      const v = this.observers.find((w) => w.options.queryFn);
      v && this.setOptions(v.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const o = Yw(), a = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, l = (v) => {
      Object.defineProperty(v, "signal", {
        enumerable: !0,
        get: () => {
          if (o)
            return this.abortSignalConsumed = !0, o.signal;
        }
      });
    };
    l(a);
    const u = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), h = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: u
    };
    if (l(h), (n = this.options.behavior) == null || n.onFetch(h), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = h.fetchOptions) == null ? void 0 : i.meta)) {
      var p;
      this.dispatch({
        type: "fetch",
        meta: (p = h.fetchOptions) == null ? void 0 : p.meta
      });
    }
    const y = (v) => {
      if (Ka(v) && v.silent || this.dispatch({
        type: "error",
        error: v
      }), !Ka(v)) {
        var w, O, I, j;
        (w = (O = this.cache.config).onError) == null || w.call(O, v, this), (I = (j = this.cache.config).onSettled) == null || I.call(j, this.state.data, v, this), process.env.NODE_ENV !== "production" && this.logger.error(v);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = eh({
      fn: h.fetchFn,
      abort: o == null ? void 0 : o.abort.bind(o),
      onSuccess: (v) => {
        var w, O, I, j;
        if (typeof v > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), y(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(v), (w = (O = this.cache.config).onSuccess) == null || w.call(O, v, this), (I = (j = this.cache.config).onSettled) == null || I.call(j, v, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: y,
      onFail: (v, w) => {
        this.dispatch({
          type: "failed",
          failureCount: v,
          error: w
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
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode
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
            fetchStatus: ic(this.options.networkMode) ? "fetching" : "paused",
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
          const o = e.error;
          return Ka(o) && o.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...n,
            error: o,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: o,
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
    this.state = r(this.state), er.batch(() => {
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
function n1(t) {
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
class i1 extends aa {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var i;
    const s = r.queryKey, o = (i = r.queryHash) != null ? i : nc(s, r);
    let a = this.get(o);
    return a || (a = new r1({
      cache: this,
      logger: e.getLogger(),
      queryKey: s,
      queryHash: o,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(a)), a;
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
    er.batch(() => {
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
    const [n] = Jr(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => ol(n, i));
  }
  findAll(e, r) {
    const [n] = Jr(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => ol(n, i)) : this.queries;
  }
  notify(e) {
    er.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    er.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    er.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class s1 extends th {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || sc, this.observers = [], this.state = e.state || a1(), this.setOptions(e.options), this.scheduleGc();
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
      return this.retryer = eh({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (m, F) => {
          this.dispatch({
            type: "failed",
            failureCount: m,
            error: F
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
      var n, i, s, o, a, l, u, h;
      if (!r) {
        var p, y, v, w;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((p = (y = this.mutationCache.config).onMutate) == null ? void 0 : p.call(y, this.state.variables, this));
        const m = await ((v = (w = this.options).onMutate) == null ? void 0 : v.call(w, this.state.variables));
        m !== this.state.context && this.dispatch({
          type: "loading",
          context: m,
          variables: this.state.variables
        });
      }
      const c = await e();
      return await ((n = (i = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(i, c, this.state.variables, this.state.context, this)), await ((s = (o = this.options).onSuccess) == null ? void 0 : s.call(o, c, this.state.variables, this.state.context)), await ((a = (l = this.mutationCache.config).onSettled) == null ? void 0 : a.call(l, c, null, this.state.variables, this.state.context, this)), await ((u = (h = this.options).onSettled) == null ? void 0 : u.call(h, c, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: c
      }), c;
    } catch (c) {
      try {
        var O, I, j, _, R, b, S, g;
        throw await ((O = (I = this.mutationCache.config).onError) == null ? void 0 : O.call(I, c, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(c), await ((j = (_ = this.options).onError) == null ? void 0 : j.call(_, c, this.state.variables, this.state.context)), await ((R = (b = this.mutationCache.config).onSettled) == null ? void 0 : R.call(b, void 0, c, this.state.variables, this.state.context, this)), await ((S = (g = this.options).onSettled) == null ? void 0 : S.call(g, void 0, c, this.state.variables, this.state.context)), c;
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
            isPaused: !ic(this.options.networkMode),
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
    this.state = r(this.state), er.batch(() => {
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
function a1() {
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
class o1 extends aa {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const i = new s1({
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
    er.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => cl(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => cl(e, r));
  }
  notify(e) {
    er.batch(() => {
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
      return er.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(wr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function c1() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, i, s, o;
        const a = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, l = (n = t.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore, u = l == null ? void 0 : l.pageParam, h = (l == null ? void 0 : l.direction) === "forward", p = (l == null ? void 0 : l.direction) === "backward", y = ((s = t.state.data) == null ? void 0 : s.pages) || [], v = ((o = t.state.data) == null ? void 0 : o.pageParams) || [];
        let w = v, O = !1;
        const I = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var c;
              if ((c = t.signal) != null && c.aborted)
                O = !0;
              else {
                var m;
                (m = t.signal) == null || m.addEventListener("abort", () => {
                  O = !0;
                });
              }
              return t.signal;
            }
          });
        }, j = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), _ = (g, c, m, F) => (w = F ? [c, ...w] : [...w, c], F ? [m, ...g] : [...g, m]), R = (g, c, m, F) => {
          if (O)
            return Promise.reject("Cancelled");
          if (typeof m > "u" && !c && g.length)
            return Promise.resolve(g);
          const $ = {
            queryKey: t.queryKey,
            pageParam: m,
            meta: t.options.meta
          };
          I($);
          const V = j($);
          return Promise.resolve(V).then((ee) => _(g, m, ee, F));
        };
        let b;
        if (!y.length)
          b = R([]);
        else if (h) {
          const g = typeof u < "u", c = g ? u : dl(t.options, y);
          b = R(y, g, c);
        } else if (p) {
          const g = typeof u < "u", c = g ? u : u1(t.options, y);
          b = R(y, g, c, !0);
        } else {
          w = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (a && y[0] ? a(y[0], 0, y) : !0) ? R([], g, v[0]) : Promise.resolve(_([], v[0], y[0]));
          for (let m = 1; m < y.length; m++)
            b = b.then((F) => {
              if (a && y[m] ? a(y[m], m, y) : !0) {
                const V = g ? v[m] : dl(t.options, F);
                return R(F, g, V);
              }
              return Promise.resolve(_(F, v[m], y[m]));
            });
        }
        return b.then((g) => ({
          pages: g,
          pageParams: w
        }));
      };
    }
  };
}
function dl(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function u1(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class l1 {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new i1(), this.mutationCache = e.mutationCache || new o1(), this.logger = e.logger || sc, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Ro.subscribe(() => {
      Ro.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Ks.subscribe(() => {
      Ks.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = Jr(e, r);
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
    const i = ws(e, r, n), s = this.getQueryData(i.queryKey);
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
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, o = Hw(r, s);
    if (typeof o > "u")
      return;
    const a = ws(e), l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(o, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return er.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = Jr(e, r), i = this.queryCache;
    er.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(e, r, n) {
    const [i, s] = Jr(e, r, n), o = this.queryCache, a = {
      type: "active",
      ...i
    };
    return er.batch(() => (o.findAll(i).forEach((l) => {
      l.reset();
    }), this.refetchQueries(a, s)));
  }
  cancelQueries(e, r, n) {
    const [i, s = {}] = Jr(e, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const o = er.batch(() => this.queryCache.findAll(i).map((a) => a.cancel(s)));
    return Promise.all(o).then(wr).catch(wr);
  }
  invalidateQueries(e, r, n) {
    const [i, s] = Jr(e, r, n);
    return er.batch(() => {
      var o, a;
      if (this.queryCache.findAll(i).forEach((u) => {
        u.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const l = {
        ...i,
        type: (o = (a = i.refetchType) != null ? a : i.type) != null ? o : "active"
      };
      return this.refetchQueries(l, s);
    });
  }
  refetchQueries(e, r, n) {
    const [i, s] = Jr(e, r, n), o = er.batch(() => this.queryCache.findAll(i).filter((l) => !l.isDisabled()).map((l) => {
      var u;
      return l.fetch(void 0, {
        ...s,
        cancelRefetch: (u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let a = Promise.all(o).then(wr);
    return s != null && s.throwOnError || (a = a.catch(wr)), a;
  }
  fetchQuery(e, r, n) {
    const i = ws(e, r, n), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const o = this.queryCache.build(this, s);
    return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(wr).catch(wr);
  }
  fetchInfiniteQuery(e, r, n) {
    const i = ws(e, r, n);
    return i.behavior = c1(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(wr).catch(wr);
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
    const n = this.queryDefaults.find((i) => Sn(e) === Sn(i.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => Zn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Zn(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((i) => Sn(e) === Sn(i.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => Zn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Zn(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
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
    return !r.queryHash && r.queryKey && (r.queryHash = nc(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
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
var To = { exports: {} }, Wa, pl;
function f1() {
  if (pl)
    return Wa;
  pl = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Wa = function(h, p) {
    p = p || {};
    var y = typeof h;
    if (y === "string" && h.length > 0)
      return o(h);
    if (y === "number" && isFinite(h))
      return p.long ? l(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function o(h) {
    if (h = String(h), !(h.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (p) {
        var y = parseFloat(p[1]), v = (p[2] || "ms").toLowerCase();
        switch (v) {
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
  function a(h) {
    var p = Math.abs(h);
    return p >= n ? Math.round(h / n) + "d" : p >= r ? Math.round(h / r) + "h" : p >= e ? Math.round(h / e) + "m" : p >= t ? Math.round(h / t) + "s" : h + "ms";
  }
  function l(h) {
    var p = Math.abs(h);
    return p >= n ? u(h, p, n, "day") : p >= r ? u(h, p, r, "hour") : p >= e ? u(h, p, e, "minute") : p >= t ? u(h, p, t, "second") : h + " ms";
  }
  function u(h, p, y, v) {
    var w = p >= y * 1.5;
    return Math.round(h / y) + " " + v + (w ? "s" : "");
  }
  return Wa;
}
function h1(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = i, r.enabled = o, r.humanize = f1(), r.destroy = u, Object.keys(t).forEach((h) => {
    r[h] = t[h];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(h) {
    let p = 0;
    for (let y = 0; y < h.length; y++)
      p = (p << 5) - p + h.charCodeAt(y), p |= 0;
    return r.colors[Math.abs(p) % r.colors.length];
  }
  r.selectColor = e;
  function r(h) {
    let p, y = null, v, w;
    function O(...I) {
      if (!O.enabled)
        return;
      const j = O, _ = Number(/* @__PURE__ */ new Date()), R = _ - (p || _);
      j.diff = R, j.prev = p, j.curr = _, p = _, I[0] = r.coerce(I[0]), typeof I[0] != "string" && I.unshift("%O");
      let b = 0;
      I[0] = I[0].replace(/%([a-zA-Z%])/g, (g, c) => {
        if (g === "%%")
          return "%";
        b++;
        const m = r.formatters[c];
        if (typeof m == "function") {
          const F = I[b];
          g = m.call(j, F), I.splice(b, 1), b--;
        }
        return g;
      }), r.formatArgs.call(j, I), (j.log || r.log).apply(j, I);
    }
    return O.namespace = h, O.useColors = r.useColors(), O.color = r.selectColor(h), O.extend = n, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (v !== r.namespaces && (v = r.namespaces, w = r.enabled(h)), w),
      set: (I) => {
        y = I;
      }
    }), typeof r.init == "function" && r.init(O), O;
  }
  function n(h, p) {
    const y = r(this.namespace + (typeof p > "u" ? ":" : p) + h);
    return y.log = this.log, y;
  }
  function i(h) {
    r.save(h), r.namespaces = h, r.names = [], r.skips = [];
    let p;
    const y = (typeof h == "string" ? h : "").split(/[\s,]+/), v = y.length;
    for (p = 0; p < v; p++)
      y[p] && (h = y[p].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
  }
  function s() {
    const h = [
      ...r.names.map(a),
      ...r.skips.map(a).map((p) => "-" + p)
    ].join(",");
    return r.enable(""), h;
  }
  function o(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let p, y;
    for (p = 0, y = r.skips.length; p < y; p++)
      if (r.skips[p].test(h))
        return !1;
    for (p = 0, y = r.names.length; p < y; p++)
      if (r.names[p].test(h))
        return !0;
    return !1;
  }
  function a(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var d1 = h1;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = o(), e.destroy = /* @__PURE__ */ (() => {
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
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let h = 0, p = 0;
    l[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (h++, y === "%c" && (p = h));
    }), l.splice(p, 0, u);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(l) {
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
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = d1(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(To, To.exports);
var p1 = To.exports;
const g1 = /* @__PURE__ */ ni(p1), y1 = g1("wallet:sdk");
y1.enabled = !0;
var wi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function m1() {
  return gl || (gl = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Nn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function I(x) {
      if (x === null || typeof x != "object")
        return null;
      var H = w && x[w] || x[O];
      return typeof H == "function" ? H : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(x) {
      {
        for (var H = arguments.length, ae = new Array(H > 1 ? H - 1 : 0), de = 1; de < H; de++)
          ae[de - 1] = arguments[de];
        R("error", x, ae);
      }
    }
    function R(x, H, ae) {
      {
        var de = j.ReactDebugCurrentFrame, He = de.getStackAddendum();
        He !== "" && (H += "%s", ae = ae.concat([He]));
        var ze = ae.map(function(Ve) {
          return String(Ve);
        });
        ze.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, ze);
      }
    }
    var b = !1, S = !1, g = !1, c = !1, m = !1, F;
    F = Symbol.for("react.module.reference");
    function $(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === s || m || x === i || x === u || x === h || c || x === v || b || S || g || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === p || x.$$typeof === o || x.$$typeof === a || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === F || x.getModuleId !== void 0));
    }
    function V(x, H, ae) {
      var de = x.displayName;
      if (de)
        return de;
      var He = H.displayName || H.name || "";
      return He !== "" ? ae + "(" + He + ")" : ae;
    }
    function Y(x) {
      return x.displayName || "Context";
    }
    function ee(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var H = x;
            return Y(H) + ".Consumer";
          case o:
            var ae = x;
            return Y(ae._context) + ".Provider";
          case l:
            return V(x, x.render, "ForwardRef");
          case p:
            var de = x.displayName || null;
            return de !== null ? de : ee(x.type) || "Memo";
          case y: {
            var He = x, ze = He._payload, Ve = He._init;
            try {
              return ee(Ve(ze));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, U = 0, J, z, W, Z, D, k, te;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function ie() {
      {
        if (U === 0) {
          J = console.log, z = console.info, W = console.warn, Z = console.error, D = console.group, k = console.groupCollapsed, te = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: K,
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
        U++;
      }
    }
    function X() {
      {
        if (U--, U === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, x, {
              value: J
            }),
            info: P({}, x, {
              value: z
            }),
            warn: P({}, x, {
              value: W
            }),
            error: P({}, x, {
              value: Z
            }),
            group: P({}, x, {
              value: D
            }),
            groupCollapsed: P({}, x, {
              value: k
            }),
            groupEnd: P({}, x, {
              value: te
            })
          });
        }
        U < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = j.ReactCurrentDispatcher, L;
    function N(x, H, ae) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (He) {
            var de = He.stack.trim().match(/\n( *(at )?)/);
            L = de && de[1] || "";
          }
        return `
` + L + x;
      }
    }
    var A = !1, f;
    {
      var T = typeof WeakMap == "function" ? WeakMap : Map;
      f = new T();
    }
    function re(x, H) {
      if (!x || A)
        return "";
      {
        var ae = f.get(x);
        if (ae !== void 0)
          return ae;
      }
      var de;
      A = !0;
      var He = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ze;
      ze = ce.current, ce.current = null, ie();
      try {
        if (H) {
          var Ve = function() {
            throw Error();
          };
          if (Object.defineProperty(Ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ve, []);
            } catch (ur) {
              de = ur;
            }
            Reflect.construct(x, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (ur) {
              de = ur;
            }
            x.call(Ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ur) {
            de = ur;
          }
          x();
        }
      } catch (ur) {
        if (ur && de && typeof ur.stack == "string") {
          for (var ke = ur.stack.split(`
`), At = de.stack.split(`
`), ht = ke.length - 1, vt = At.length - 1; ht >= 1 && vt >= 0 && ke[ht] !== At[vt]; )
            vt--;
          for (; ht >= 1 && vt >= 0; ht--, vt--)
            if (ke[ht] !== At[vt]) {
              if (ht !== 1 || vt !== 1)
                do
                  if (ht--, vt--, vt < 0 || ke[ht] !== At[vt]) {
                    var xt = `
` + ke[ht].replace(" at new ", " at ");
                    return x.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", x.displayName)), typeof x == "function" && f.set(x, xt), xt;
                  }
                while (ht >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        A = !1, ce.current = ze, X(), Error.prepareStackTrace = He;
      }
      var Rr = x ? x.displayName || x.name : "", Ln = Rr ? N(Rr) : "";
      return typeof x == "function" && f.set(x, Ln), Ln;
    }
    function oe(x, H, ae) {
      return re(x, !1);
    }
    function Me(x) {
      var H = x.prototype;
      return !!(H && H.isReactComponent);
    }
    function Ue(x, H, ae) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return re(x, Me(x));
      if (typeof x == "string")
        return N(x);
      switch (x) {
        case u:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return oe(x.render);
          case p:
            return Ue(x.type, H, ae);
          case y: {
            var de = x, He = de._payload, ze = de._init;
            try {
              return Ue(ze(He), H, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, qe = {}, ct = j.ReactDebugCurrentFrame;
    function Je(x) {
      if (x) {
        var H = x._owner, ae = Ue(x.type, x._source, H ? H.type : null);
        ct.setExtraStackFrame(ae);
      } else
        ct.setExtraStackFrame(null);
    }
    function Se(x, H, ae, de, He) {
      {
        var ze = Function.call.bind(Oe);
        for (var Ve in x)
          if (ze(x, Ve)) {
            var ke = void 0;
            try {
              if (typeof x[Ve] != "function") {
                var At = Error((de || "React class") + ": " + ae + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw At.name = "Invariant Violation", At;
              }
              ke = x[Ve](H, Ve, de, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              ke = ht;
            }
            ke && !(ke instanceof Error) && (Je(He), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", ae, Ve, typeof ke), Je(null)), ke instanceof Error && !(ke.message in qe) && (qe[ke.message] = !0, Je(He), _("Failed %s type: %s", ae, ke.message), Je(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ce(x) {
      return xe(x);
    }
    function Te(x) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, ae = H && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ae;
      }
    }
    function Ie(x) {
      try {
        return we(x), !1;
      } catch {
        return !0;
      }
    }
    function we(x) {
      return "" + x;
    }
    function Ee(x) {
      if (Ie(x))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(x)), we(x);
    }
    var ve = j.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, _e, Le;
    Le = {};
    function We(x) {
      if (Oe.call(x, "ref")) {
        var H = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ge(x) {
      if (Oe.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ze(x, H) {
      if (typeof x.ref == "string" && ve.current && H && ve.current.stateNode !== H) {
        var ae = ee(ve.current.type);
        Le[ae] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(ve.current.type), x.ref), Le[ae] = !0);
      }
    }
    function $e(x, H) {
      {
        var ae = function() {
          je || (je = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ae.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function qt(x, H) {
      {
        var ae = function() {
          _e || (_e = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ae.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var sr = function(x, H, ae, de, He, ze, Ve) {
      var ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: x,
        key: H,
        ref: ae,
        props: Ve,
        // Record the component responsible for creating this element.
        _owner: ze
      };
      return ke._store = {}, Object.defineProperty(ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)), ke;
    };
    function dr(x, H, ae, de, He) {
      {
        var ze, Ve = {}, ke = null, At = null;
        ae !== void 0 && (Ee(ae), ke = "" + ae), Ge(H) && (Ee(H.key), ke = "" + H.key), We(H) && (At = H.ref, Ze(H, He));
        for (ze in H)
          Oe.call(H, ze) && !Ne.hasOwnProperty(ze) && (Ve[ze] = H[ze]);
        if (x && x.defaultProps) {
          var ht = x.defaultProps;
          for (ze in ht)
            Ve[ze] === void 0 && (Ve[ze] = ht[ze]);
        }
        if (ke || At) {
          var vt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ke && $e(Ve, vt), At && qt(Ve, vt);
        }
        return sr(x, ke, At, He, de, ve.current, Ve);
      }
    }
    var Rt = j.ReactCurrentOwner, pr = j.ReactDebugCurrentFrame;
    function Zt(x) {
      if (x) {
        var H = x._owner, ae = Ue(x.type, x._source, H ? H.type : null);
        pr.setExtraStackFrame(ae);
      } else
        pr.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function tt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function Xe() {
      {
        if (Rt.current) {
          var x = ee(Rt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function dt(x) {
      {
        if (x !== void 0) {
          var H = x.fileName.replace(/^.*[\\\/]/, ""), ae = x.lineNumber;
          return `

Check your code at ` + H + ":" + ae + ".";
        }
        return "";
      }
    }
    var ft = {};
    function pt(x) {
      {
        var H = Xe();
        if (!H) {
          var ae = typeof x == "string" ? x : x.displayName || x.name;
          ae && (H = `

Check the top-level render call using <` + ae + ">.");
        }
        return H;
      }
    }
    function ot(x, H) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ae = pt(H);
        if (ft[ae])
          return;
        ft[ae] = !0;
        var de = "";
        x && x._owner && x._owner !== Rt.current && (de = " It was passed a child from " + ee(x._owner.type) + "."), Zt(x), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, de), Zt(null);
      }
    }
    function wt(x, H) {
      {
        if (typeof x != "object")
          return;
        if (Ce(x))
          for (var ae = 0; ae < x.length; ae++) {
            var de = x[ae];
            tt(de) && ot(de, H);
          }
        else if (tt(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var He = I(x);
          if (typeof He == "function" && He !== x.entries)
            for (var ze = He.call(x), Ve; !(Ve = ze.next()).done; )
              tt(Ve.value) && ot(Ve.value, H);
        }
      }
    }
    function ut(x) {
      {
        var H = x.type;
        if (H == null || typeof H == "string")
          return;
        var ae;
        if (typeof H == "function")
          ae = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === p))
          ae = H.propTypes;
        else
          return;
        if (ae) {
          var de = ee(H);
          Se(ae, x.props, "prop", de, x);
        } else if (H.PropTypes !== void 0 && !gr) {
          gr = !0;
          var He = ee(H);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", He || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gt(x) {
      {
        for (var H = Object.keys(x.props), ae = 0; ae < H.length; ae++) {
          var de = H[ae];
          if (de !== "children" && de !== "key") {
            Zt(x), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Zt(null);
            break;
          }
        }
        x.ref !== null && (Zt(x), _("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    function yt(x, H, ae, de, He, ze) {
      {
        var Ve = $(x);
        if (!Ve) {
          var ke = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var At = dt(He);
          At ? ke += At : ke += Xe();
          var ht;
          x === null ? ht = "null" : Ce(x) ? ht = "array" : x !== void 0 && x.$$typeof === e ? (ht = "<" + (ee(x.type) || "Unknown") + " />", ke = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof x, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, ke);
        }
        var vt = dr(x, H, ae, He, ze);
        if (vt == null)
          return vt;
        if (Ve) {
          var xt = H.children;
          if (xt !== void 0)
            if (de)
              if (Ce(xt)) {
                for (var Rr = 0; Rr < xt.length; Rr++)
                  wt(xt[Rr], x);
                Object.freeze && Object.freeze(xt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(xt, x);
        }
        return x === n ? gt(vt) : ut(vt), vt;
      }
    }
    function Ot(x, H, ae) {
      return yt(x, H, ae, !0);
    }
    function Et(x, H, ae) {
      return yt(x, H, ae, !1);
    }
    var mt = Et, st = Ot;
    wi.Fragment = n, wi.jsx = mt, wi.jsxs = st;
  }()), wi;
}
var Ei = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function v1() {
  if (yl)
    return Ei;
  yl = 1;
  var t = Nn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, u) {
    var h, p = {}, y = null, v = null;
    u !== void 0 && (y = "" + u), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      n.call(l, h) && !s.hasOwnProperty(h) && (p[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        p[h] === void 0 && (p[h] = l[h]);
    return { $$typeof: e, type: a, key: y, ref: v, props: p, _owner: i.current };
  }
  return Ei.Fragment = r, Ei.jsx = o, Ei.jsxs = o, Ei;
}
process.env.NODE_ENV === "production" ? v1() : m1();
const b1 = new l1();
var _1 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function w1(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const o = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), a = (s = r.getItem(i)) != null ? s : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const zi = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return zi(n)(r);
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
        return zi(n)(r);
      }
    };
  }
}, E1 = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (I) => I,
    version: 0,
    merge: (I, j) => ({
      ...j,
      ...I
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u;
  try {
    u = s.getStorage();
  } catch {
  }
  if (!u)
    return t(
      (...I) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...I);
      },
      n,
      i
    );
  const h = zi(s.serialize), p = () => {
    const I = s.partialize({ ...n() });
    let j;
    const _ = h({ state: I, version: s.version }).then(
      (R) => u.setItem(s.name, R)
    ).catch((R) => {
      j = R;
    });
    if (j)
      throw j;
    return _;
  }, y = i.setState;
  i.setState = (I, j) => {
    y(I, j), p();
  };
  const v = t(
    (...I) => {
      r(...I), p();
    },
    n,
    i
  );
  let w;
  const O = () => {
    var I;
    if (!u)
      return;
    o = !1, a.forEach((_) => _(n()));
    const j = ((I = s.onRehydrateStorage) == null ? void 0 : I.call(s, n())) || void 0;
    return zi(u.getItem.bind(u))(s.name).then((_) => {
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
      var R;
      return w = s.merge(
        _,
        (R = n()) != null ? R : v
      ), r(w, !0), p();
    }).then(() => {
      j == null || j(w, void 0), o = !0, l.forEach((_) => _(w));
    }).catch((_) => {
      j == null || j(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (I) => {
      s = {
        ...s,
        ...I
      }, I.getStorage && (u = I.getStorage());
    },
    clearStorage: () => {
      u == null || u.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => O(),
    hasHydrated: () => o,
    onHydrate: (I) => (a.add(I), () => {
      a.delete(I);
    }),
    onFinishHydration: (I) => (l.add(I), () => {
      l.delete(I);
    })
  }, O(), w || v;
}, S1 = (t, e) => (r, n, i) => {
  let s = {
    storage: w1(() => localStorage),
    partialize: (O) => O,
    version: 0,
    merge: (O, I) => ({
      ...I,
      ...O
    }),
    ...e
  }, o = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u = s.storage;
  if (!u)
    return t(
      (...O) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...O);
      },
      n,
      i
    );
  const h = () => {
    const O = s.partialize({ ...n() });
    return u.setItem(s.name, {
      state: O,
      version: s.version
    });
  }, p = i.setState;
  i.setState = (O, I) => {
    p(O, I), h();
  };
  const y = t(
    (...O) => {
      r(...O), h();
    },
    n,
    i
  );
  let v;
  const w = () => {
    var O, I;
    if (!u)
      return;
    o = !1, a.forEach((_) => {
      var R;
      return _((R = n()) != null ? R : y);
    });
    const j = ((I = s.onRehydrateStorage) == null ? void 0 : I.call(s, (O = n()) != null ? O : y)) || void 0;
    return zi(u.getItem.bind(u))(s.name).then((_) => {
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
      var R;
      return v = s.merge(
        _,
        (R = n()) != null ? R : y
      ), r(v, !0), h();
    }).then(() => {
      j == null || j(v, void 0), v = n(), o = !0, l.forEach((_) => _(v));
    }).catch((_) => {
      j == null || j(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (O) => {
      s = {
        ...s,
        ...O
      }, O.storage && (u = O.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => w(),
    hasHydrated: () => o,
    onHydrate: (O) => (a.add(O), () => {
      a.delete(O);
    }),
    onFinishHydration: (O) => (l.add(O), () => {
      l.delete(O);
    })
  }, s.skipHydration || w(), v || y;
}, D1 = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((_1 ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), E1(t, e)) : S1(t, e), O1 = D1, Po = z_()(
  O1((t, e) => ({
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
      }), b1.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
), pE = async () => {
  const t = await vr(), e = await t.getSession();
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
    return Po.setState({ account: r.account }), r;
  } catch (r) {
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, gE = async ({ address: t }) => {
  const e = await vr(), r = await e.getSession();
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
    const i = n.message;
    return console.error("getBalance error", i), { error: i };
  }
}, yE = async () => {
  const t = await vr();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Mf,
          chains: tc,
          events: Uf
        }
      }
    });
    return jf.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, mE = async (t) => {
  const e = await vr(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((i) => typeof i == "string" ? i : i.plaintext);
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
  } catch (i) {
    const s = i.message;
    return console.error("createEvent error", s), { error: s };
  }
}, vE = async () => {
  const t = await vr(), e = await (t == null ? void 0 : t.getSession());
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
}, bE = async (t) => {
  const e = await vr(), r = await (e == null ? void 0 : e.getSession());
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
}, _E = async () => {
  const t = await vr(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return e || Po.getState().onDisconnect(), { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: Ct("USER_DISCONNECTED"),
        topic: e.topic
      }), jf.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return Po.getState().onDisconnect(), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, wE = async ({
  id: t,
  address: e
}) => {
  const r = await vr(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const i = async () => await r.request({
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
    return await i();
  } catch (s) {
    const o = s.message;
    return console.error("getEvents error", o), { error: o };
  }
}, EE = async (t) => {
  const e = await vr(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (i = 0) => await e.request({
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: i
      }
    }
  });
  try {
    return await n();
  } catch (i) {
    const s = i.message;
    return console.error("getEvents error", s), { error: s };
  }
}, SE = async (t) => {
  const e = await vr(), r = await (e == null ? void 0 : e.getSession());
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
    const i = n.message;
    return console.error("importSharedState error", i), { error: i };
  }
}, DE = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await vr(), i = await (n == null ? void 0 : n.getSession());
  if (!i || !n)
    return { error: "no session or connection" };
  const s = async (o = 0) => await n.request({
    topic: i.topic,
    chainId: "aleo:1",
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
    return await s();
  } catch (o) {
    const a = o.message;
    return console.error("getRecords error", a), { error: a };
  }
}, OE = async ({
  message: t,
  address: e
}) => {
  const r = await vr(), n = await (r == null ? void 0 : r.getSession());
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
          address: Zf.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("signature error", s), { error: s };
  }
}, xE = 20;
export {
  z1 as $,
  al as A,
  pE as B,
  gE as C,
  yE as D,
  Oo as E,
  mE as F,
  vE as G,
  bE as H,
  _E as I,
  wE as J,
  EE as K,
  SE as L,
  DE as M,
  Co as N,
  OE as O,
  xE as P,
  sl as Q,
  hh as R,
  Hd as S,
  ml as T,
  N1 as U,
  xo as V,
  rp as W,
  ip as X,
  Y1 as Y,
  ep as Z,
  Gd as _,
  Wt as a,
  Zd as a0,
  V1 as a1,
  Yd as a2,
  Qd as a3,
  np as a4,
  G1 as a5,
  Jd as a6,
  Xd as a7,
  k1 as a8,
  tp as a9,
  Mf as aa,
  tc as ab,
  Uf as ac,
  x_ as ad,
  C_ as ae,
  tE as af,
  y1 as ag,
  jf as ah,
  rE as ai,
  vr as aj,
  Do as b,
  Zf as c,
  Vw as d,
  zw as e,
  Bw as f,
  Kw as g,
  Ww as h,
  qw as i,
  fE as j,
  lE as k,
  oE as l,
  hE as m,
  vc as n,
  C1 as o,
  Sr as p,
  sE as q,
  aE as r,
  Ea as s,
  x1 as t,
  cE as u,
  uE as v,
  iE as w,
  dE as x,
  ei as y,
  nE as z
};
