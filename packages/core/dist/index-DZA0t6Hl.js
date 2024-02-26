const Bl = Symbol(), Uo = Object.getPrototypeOf, _n = /* @__PURE__ */ new WeakMap(), Kl = (t) => t && (_n.has(t) ? _n.get(t) : Uo(t) === Object.prototype || Uo(t) === Array.prototype), Vl = (t) => Kl(t) && t[Bl] || null, Fo = (t, e = !0) => {
  _n.set(t, e);
};
var Ei = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Xi = (t) => typeof t == "object" && t !== null, wr = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakSet(), Hl = (t = Object.is, e = (l, d) => new Proxy(l, d), r = (l) => Xi(l) && !ci.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), s = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, i = /* @__PURE__ */ new WeakMap(), n = (l, d, f = s) => {
  const y = i.get(l);
  if ((y == null ? void 0 : y[0]) === d)
    return y[1];
  const b = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Fo(b, !0), i.set(l, [d, b]), Reflect.ownKeys(l).forEach((_) => {
    if (Object.getOwnPropertyDescriptor(b, _))
      return;
    const C = Reflect.get(l, _), L = {
      value: C,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (ci.has(C))
      Fo(C, !1);
    else if (C instanceof Promise)
      delete L.value, L.get = () => f(C);
    else if (wr.has(C)) {
      const [F, S] = wr.get(
        C
      );
      L.value = n(
        F,
        S(),
        f
      );
    }
    Object.defineProperty(b, _, L);
  }), Object.preventExtensions(b);
}, c = /* @__PURE__ */ new WeakMap(), o = [1, 1], h = (l) => {
  if (!Xi(l))
    throw new Error("object required");
  const d = c.get(l);
  if (d)
    return d;
  let f = o[0];
  const y = /* @__PURE__ */ new Set(), b = (P, R = ++o[0]) => {
    f !== R && (f = R, y.forEach((U) => U(P, R)));
  };
  let _ = o[1];
  const C = (P = ++o[1]) => (_ !== P && !y.size && (_ = P, F.forEach(([R]) => {
    const U = R[1](P);
    U > f && (f = U);
  })), f), L = (P) => (R, U) => {
    const B = [...R];
    B[1] = [P, ...B[1]], b(B, U);
  }, F = /* @__PURE__ */ new Map(), S = (P, R) => {
    if ((Ei ? "production" : void 0) !== "production" && F.has(P))
      throw new Error("prop listener already exists");
    if (y.size) {
      const U = R[3](L(P));
      F.set(P, [R, U]);
    } else
      F.set(P, [R]);
  }, O = (P) => {
    var R;
    const U = F.get(P);
    U && (F.delete(P), (R = U[1]) == null || R.call(U));
  }, v = (P) => (y.add(P), y.size === 1 && F.forEach(([U, B], G) => {
    if ((Ei ? "production" : void 0) !== "production" && B)
      throw new Error("remove already exists");
    const D = U[3](L(G));
    F.set(G, [U, D]);
  }), () => {
    y.delete(P), y.size === 0 && F.forEach(([U, B], G) => {
      B && (B(), F.set(G, [U]));
    });
  }), E = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), a = e(E, {
    deleteProperty(P, R) {
      const U = Reflect.get(P, R);
      O(R);
      const B = Reflect.deleteProperty(P, R);
      return B && b(["delete", [R], U]), B;
    },
    set(P, R, U, B) {
      const G = Reflect.has(P, R), D = Reflect.get(P, R, B);
      if (G && (t(D, U) || c.has(U) && t(D, c.get(U))))
        return !0;
      O(R), Xi(U) && (U = Vl(U) || U);
      let A = U;
      if (U instanceof Promise)
        U.then((W) => {
          U.status = "fulfilled", U.value = W, b(["resolve", [R], W]);
        }).catch((W) => {
          U.status = "rejected", U.reason = W, b(["reject", [R], W]);
        });
      else {
        !wr.has(U) && r(U) && (A = h(U));
        const W = !ci.has(A) && wr.get(A);
        W && S(R, W);
      }
      return Reflect.set(P, R, A, B), b(["set", [R], U, D]), !0;
    }
  });
  c.set(l, a);
  const p = [
    E,
    C,
    n,
    v
  ];
  return wr.set(a, p), Reflect.ownKeys(l).forEach((P) => {
    const R = Object.getOwnPropertyDescriptor(
      l,
      P
    );
    "value" in R && (a[P] = l[P], delete R.value, delete R.writable), Object.defineProperty(E, P, R);
  }), a;
}) => [
  // public functions
  h,
  // shared state
  wr,
  ci,
  // internal things
  t,
  e,
  r,
  s,
  i,
  n,
  c,
  o
], [Wl] = Hl();
function Cr(t = {}) {
  return Wl(t);
}
function Wr(t, e, r) {
  const s = wr.get(t);
  (Ei ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
  let i;
  const n = [], c = s[3];
  let o = !1;
  const l = c((d) => {
    if (n.push(d), r) {
      e(n.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, o && e(n.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, l();
  };
}
function Zl(t, e) {
  const r = wr.get(t);
  (Ei ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [s, i, n] = r;
  return n(s, i(), e);
}
const at = Cr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Dc = { state: at, subscribe(t) {
  return Wr(at, () => t(at));
}, push(t, e) {
  t !== at.view && (at.view = t, e && (at.data = e), at.history.push(t));
}, reset(t) {
  at.view = t, at.history = [t];
}, replace(t) {
  at.history.length > 1 && (at.history[at.history.length - 1] = t, at.view = t);
}, goBack() {
  if (at.history.length > 1) {
    at.history.pop();
    const [t] = at.history.slice(-1);
    at.view = t;
  }
}, setData(t) {
  at.data = t;
} }, _t = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return _t.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return _t.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (_t.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let s = t;
  s.includes("://") || (s = t.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), this.setWalletConnectDeepLink(s, r);
  const i = encodeURIComponent(e);
  return `${s}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!_t.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let s = t;
  s.endsWith("/") || (s = `${s}/`), this.setWalletConnectDeepLink(s, r);
  const i = encodeURIComponent(e);
  return `${s}wc?uri=${i}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem(_t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(_t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(_t.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(_t.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Dc.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Gl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), yt = Cr({ enabled: Gl, userSessionId: "", events: [], connectedWalletId: void 0 }), Yl = { state: yt, subscribe(t) {
  return Wr(yt.events, () => t(Zl(yt.events[yt.events.length - 1])));
}, initialize() {
  yt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (yt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  yt.connectedWalletId = t;
}, click(t) {
  if (yt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: yt.userSessionId, timestamp: Date.now(), data: t };
    yt.events.push(e);
  }
}, track(t) {
  if (yt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: yt.userSessionId, timestamp: Date.now(), data: t };
    yt.events.push(e);
  }
}, view(t) {
  if (yt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: yt.userSessionId, timestamp: Date.now(), data: t };
    yt.events.push(e);
  }
} }, Xt = Cr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Vt = { state: Xt, subscribe(t) {
  return Wr(Xt, () => t(Xt));
}, setChains(t) {
  Xt.chains = t;
}, setWalletConnectUri(t) {
  Xt.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Xt.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Xt.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Xt.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Xt.isUiLoaded = t;
}, setIsAuth(t) {
  Xt.isAuth = t;
} }, ui = Cr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), cs = { state: ui, subscribe(t) {
  return Wr(ui, () => t(ui));
}, setConfig(t) {
  var e, r;
  Yl.initialize(), Vt.setChains(t.chains), Vt.setIsAuth(!!t.enableAuthMode), Vt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Vt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), _t.setModalVersionInStorage(), Object.assign(ui, t);
} };
var Jl = Object.defineProperty, Mo = Object.getOwnPropertySymbols, Ql = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, $o = (t, e, r) => e in t ? Jl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, eh = (t, e) => {
  for (var r in e || (e = {}))
    Ql.call(e, r) && $o(t, r, e[r]);
  if (Mo)
    for (var r of Mo(e))
      Xl.call(e, r) && $o(t, r, e[r]);
  return t;
};
const wn = "https://explorer-api.walletconnect.com", En = "wcm", Sn = "js-2.6.2";
async function li(t, e) {
  const r = eh({ sdkType: En, sdkVersion: Sn }, e), s = new URL(t, wn);
  return s.searchParams.append("projectId", cs.state.projectId), Object.entries(r).forEach(([i, n]) => {
    n && s.searchParams.append(i, String(n));
  }), (await fetch(s)).json();
}
const Lr = { async getDesktopListings(t) {
  return li("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return li("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return li("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return li("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${wn}/w3m/v1/getWalletImage/${t}?projectId=${cs.state.projectId}&sdkType=${En}&sdkVersion=${Sn}`;
}, getAssetImageUrl(t) {
  return `${wn}/w3m/v1/getAssetImage/${t}?projectId=${cs.state.projectId}&sdkType=${En}&sdkVersion=${Sn}`;
} };
var th = Object.defineProperty, jo = Object.getOwnPropertySymbols, rh = Object.prototype.hasOwnProperty, sh = Object.prototype.propertyIsEnumerable, ko = (t, e, r) => e in t ? th(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ih = (t, e) => {
  for (var r in e || (e = {}))
    rh.call(e, r) && ko(t, r, e[r]);
  if (jo)
    for (var r of jo(e))
      sh.call(e, r) && ko(t, r, e[r]);
  return t;
};
const zo = _t.isMobile(), er = Cr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), R_ = { state: er, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = cs.state;
  if (t === "NONE" || e === "ALL" && !t)
    return er.recomendedWallets;
  if (_t.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: s } = await Lr.getAllListings(r), i = Object.values(s);
    i.sort((n, c) => {
      const o = t.indexOf(n.id), h = t.indexOf(c.id);
      return o - h;
    }), er.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: s } = Vt.state, i = r == null ? void 0 : r.join(","), n = _t.isArray(e), c = { page: 1, sdks: s ? "auth_v1" : void 0, entries: _t.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: n ? e.join(",") : void 0 }, { listings: o } = zo ? await Lr.getMobileListings(c) : await Lr.getDesktopListings(c);
    er.recomendedWallets = Object.values(o);
  }
  return er.recomendedWallets;
}, async getWallets(t) {
  const e = ih({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: s } = cs.state, { recomendedWallets: i } = er;
  if (s === "ALL")
    return er.wallets;
  i.length ? e.excludedIds = i.map((f) => f.id).join(",") : _t.isArray(r) && (e.excludedIds = r.join(",")), _t.isArray(s) && (e.excludedIds = [e.excludedIds, s].filter(Boolean).join(",")), Vt.state.isAuth && (e.sdks = "auth_v1");
  const { page: n, search: c } = t, { listings: o, total: h } = zo ? await Lr.getMobileListings(e) : await Lr.getDesktopListings(e), l = Object.values(o), d = c ? "search" : "wallets";
  return er[d] = { listings: [...er[d].listings, ...l], total: h, page: n ?? 1 }, { listings: l, total: h };
}, getWalletImageUrl(t) {
  return Lr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Lr.getAssetImageUrl(t);
}, resetSearch() {
  er.search = { listings: [], total: 0, page: 1 };
} }, Xr = Cr({ open: !1 }), en = { state: Xr, subscribe(t) {
  return Wr(Xr, () => t(Xr));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: s } = Vt.state;
    if (_t.removeWalletConnectDeepLink(), Vt.setWalletConnectUri(t == null ? void 0 : t.uri), Vt.setChains(t == null ? void 0 : t.chains), Dc.reset("ConnectWallet"), r && s)
      Xr.open = !0, e();
    else {
      const i = setInterval(() => {
        const n = Vt.state;
        n.isUiLoaded && n.isDataLoaded && (clearInterval(i), Xr.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Xr.open = !1;
} };
var nh = Object.defineProperty, qo = Object.getOwnPropertySymbols, oh = Object.prototype.hasOwnProperty, ah = Object.prototype.propertyIsEnumerable, Bo = (t, e, r) => e in t ? nh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ch = (t, e) => {
  for (var r in e || (e = {}))
    oh.call(e, r) && Bo(t, r, e[r]);
  if (qo)
    for (var r of qo(e))
      ah.call(e, r) && Bo(t, r, e[r]);
  return t;
};
function uh() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const vs = Cr({ themeMode: uh() ? "dark" : "light" }), Ko = { state: vs, subscribe(t) {
  return Wr(vs, () => t(vs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (vs.themeMode = e), r && (vs.themeVariables = ch({}, r));
} }, Ur = Cr({ open: !1, message: "", variant: "success" }), P_ = { state: Ur, subscribe(t) {
  return Wr(Ur, () => t(Ur));
}, openToast(t, e) {
  Ur.open = !0, Ur.message = t, Ur.variant = e;
}, closeToast() {
  Ur.open = !1;
} };
let lh = class {
  constructor(e) {
    this.openModal = en.open, this.closeModal = en.close, this.subscribeModal = en.subscribe, this.setTheme = Ko.setThemeConfig, Ko.setThemeConfig(e), cs.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-CHpClWja.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Vt.setIsUiLoaded(!0);
    }
  }
};
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Xn(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var i = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(r, s, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), r;
}
var eo = { exports: {} }, ns = typeof Reflect == "object" ? Reflect : null, Vo = ns && typeof ns.apply == "function" ? ns.apply : function(e, r, s) {
  return Function.prototype.apply.call(e, r, s);
}, gi;
ns && typeof ns.ownKeys == "function" ? gi = ns.ownKeys : Object.getOwnPropertySymbols ? gi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : gi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function hh(t) {
  console && console.warn && console.warn(t);
}
var xc = Number.isNaN || function(e) {
  return e !== e;
};
function Le() {
  Le.init.call(this);
}
eo.exports = Le;
eo.exports.once = gh;
Le.EventEmitter = Le;
Le.prototype._events = void 0;
Le.prototype._eventsCount = 0;
Le.prototype._maxListeners = void 0;
var Ho = 10;
function ji(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Le, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ho;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || xc(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Ho = t;
  }
});
Le.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Le.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || xc(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Ic(t) {
  return t._maxListeners === void 0 ? Le.defaultMaxListeners : t._maxListeners;
}
Le.prototype.getMaxListeners = function() {
  return Ic(this);
};
Le.prototype.emit = function(e) {
  for (var r = [], s = 1; s < arguments.length; s++)
    r.push(arguments[s]);
  var i = e === "error", n = this._events;
  if (n !== void 0)
    i = i && n.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var c;
    if (r.length > 0 && (c = r[0]), c instanceof Error)
      throw c;
    var o = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
    throw o.context = c, o;
  }
  var h = n[e];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    Vo(h, this, r);
  else
    for (var l = h.length, d = Ac(h, l), s = 0; s < l; ++s)
      Vo(d[s], this, r);
  return !0;
};
function Oc(t, e, r, s) {
  var i, n, c;
  if (ji(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), n = t._events), c = n[e]), c === void 0)
    c = n[e] = r, ++t._eventsCount;
  else if (typeof c == "function" ? c = n[e] = s ? [r, c] : [c, r] : s ? c.unshift(r) : c.push(r), i = Ic(t), i > 0 && c.length > i && !c.warned) {
    c.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = c.length, hh(o);
  }
  return t;
}
Le.prototype.addListener = function(e, r) {
  return Oc(this, e, r, !1);
};
Le.prototype.on = Le.prototype.addListener;
Le.prototype.prependListener = function(e, r) {
  return Oc(this, e, r, !0);
};
function dh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Cc(t, e, r) {
  var s = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = dh.bind(s);
  return i.listener = r, s.wrapFn = i, i;
}
Le.prototype.once = function(e, r) {
  return ji(r), this.on(e, Cc(this, e, r)), this;
};
Le.prototype.prependOnceListener = function(e, r) {
  return ji(r), this.prependListener(e, Cc(this, e, r)), this;
};
Le.prototype.removeListener = function(e, r) {
  var s, i, n, c, o;
  if (ji(r), i = this._events, i === void 0)
    return this;
  if (s = i[e], s === void 0)
    return this;
  if (s === r || s.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, s.listener || r));
  else if (typeof s != "function") {
    for (n = -1, c = s.length - 1; c >= 0; c--)
      if (s[c] === r || s[c].listener === r) {
        o = s[c].listener, n = c;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? s.shift() : fh(s, n), s.length === 1 && (i[e] = s[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Le.prototype.off = Le.prototype.removeListener;
Le.prototype.removeAllListeners = function(e) {
  var r, s, i;
  if (s = this._events, s === void 0)
    return this;
  if (s.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(s), c;
    for (i = 0; i < n.length; ++i)
      c = n[i], c !== "removeListener" && this.removeAllListeners(c);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = s[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function Tc(t, e, r) {
  var s = t._events;
  if (s === void 0)
    return [];
  var i = s[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? ph(i) : Ac(i, i.length);
}
Le.prototype.listeners = function(e) {
  return Tc(this, e, !0);
};
Le.prototype.rawListeners = function(e) {
  return Tc(this, e, !1);
};
Le.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Nc.call(t, e);
};
Le.prototype.listenerCount = Nc;
function Nc(t) {
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
Le.prototype.eventNames = function() {
  return this._eventsCount > 0 ? gi(this._events) : [];
};
function Ac(t, e) {
  for (var r = new Array(e), s = 0; s < e; ++s)
    r[s] = t[s];
  return r;
}
function fh(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function ph(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function gh(t, e) {
  return new Promise(function(r, s) {
    function i(c) {
      t.removeListener(e, n), s(c);
    }
    function n() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Rc(t, e, n, { once: !0 }), e !== "error" && yh(t, i, { once: !0 });
  });
}
function yh(t, e, r) {
  typeof t.on == "function" && Rc(t, "error", e, r);
}
function Rc(t, e, r, s) {
  if (typeof t.on == "function")
    s.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(n) {
      s.once && t.removeEventListener(e, i), r(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Yt = eo.exports;
const to = /* @__PURE__ */ Qn(Yt), mh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, vh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, bh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function _h(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    wh(t);
    return;
  }
  return e;
}
function wh(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function hi(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.endsWith('"') && !t.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!bh.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (mh.test(t) || vh.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, _h);
    }
    return JSON.parse(t);
  } catch (s) {
    if (e.strict)
      throw s;
    return t;
  }
}
function Eh(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function ct(t, ...e) {
  try {
    return Eh(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Sh(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Dh(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function yi(t) {
  if (Sh(t))
    return String(t);
  if (Dh(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return yi(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Pc() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Dn = "base64:";
function xh(t) {
  if (typeof t == "string")
    return t;
  Pc();
  const e = Buffer.from(t).toString("base64");
  return Dn + e;
}
function Ih(t) {
  return typeof t != "string" || !t.startsWith(Dn) ? t : (Pc(), Buffer.from(t.slice(Dn.length), "base64"));
}
function Nt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Oh(...t) {
  return Nt(t.join(":"));
}
function di(t) {
  return t = Nt(t), t ? t + ":" : "";
}
const Ch = "memory", Th = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Ch,
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
function Nh(t = {}) {
  const e = {
    mounts: { "": t.driver || Th() },
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
  }, s = (l, d) => e.mountpoints.filter(
    (f) => f.startsWith(l) || d && l.startsWith(f)
  ).map((f) => ({
    relativeBase: l.length > f.length ? l.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), i = (l, d) => {
    if (e.watching) {
      d = Nt(d);
      for (const f of e.watchListeners)
        f(l, d);
    }
  }, n = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const l in e.mounts)
        e.unwatch[l] = await Wo(
          e.mounts[l],
          i,
          l
        );
    }
  }, c = async () => {
    if (e.watching) {
      for (const l in e.unwatch)
        await e.unwatch[l]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (l, d, f) => {
    const y = /* @__PURE__ */ new Map(), b = (_) => {
      let C = y.get(_.base);
      return C || (C = {
        driver: _.driver,
        base: _.base,
        items: []
      }, y.set(_.base, C)), C;
    };
    for (const _ of l) {
      const C = typeof _ == "string", L = Nt(C ? _ : _.key), F = C ? void 0 : _.value, S = C || !_.options ? d : { ...d, ..._.options }, O = r(L);
      b(O).items.push({
        key: L,
        value: F,
        relativeKey: O.relativeKey,
        options: S
      });
    }
    return Promise.all([...y.values()].map((_) => f(_))).then(
      (_) => _.flat()
    );
  }, h = {
    // Item
    hasItem(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return ct(y.hasItem, f, d);
    },
    getItem(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return ct(y.getItem, f, d).then(
        (b) => hi(b)
      );
    },
    getItems(l, d) {
      return o(l, d, (f) => f.driver.getItems ? ct(
        f.driver.getItems,
        f.items.map((y) => ({
          key: y.relativeKey,
          options: y.options
        })),
        d
      ).then(
        (y) => y.map((b) => ({
          key: Oh(f.base, b.key),
          value: hi(b.value)
        }))
      ) : Promise.all(
        f.items.map((y) => ct(
          f.driver.getItem,
          y.relativeKey,
          y.options
        ).then((b) => ({
          key: y.key,
          value: hi(b)
        })))
      ));
    },
    getItemRaw(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return y.getItemRaw ? ct(y.getItemRaw, f, d) : ct(y.getItem, f, d).then(
        (b) => Ih(b)
      );
    },
    async setItem(l, d, f = {}) {
      if (d === void 0)
        return h.removeItem(l);
      l = Nt(l);
      const { relativeKey: y, driver: b } = r(l);
      b.setItem && (await ct(b.setItem, y, yi(d), f), b.watch || i("update", l));
    },
    async setItems(l, d) {
      await o(l, d, async (f) => {
        f.driver.setItems && await ct(
          f.driver.setItems,
          f.items.map((y) => ({
            key: y.relativeKey,
            value: yi(y.value),
            options: y.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((y) => ct(
            f.driver.setItem,
            y.relativeKey,
            yi(y.value),
            y.options
          ))
        );
      });
    },
    async setItemRaw(l, d, f = {}) {
      if (d === void 0)
        return h.removeItem(l, f);
      l = Nt(l);
      const { relativeKey: y, driver: b } = r(l);
      if (b.setItemRaw)
        await ct(b.setItemRaw, y, d, f);
      else if (b.setItem)
        await ct(b.setItem, y, xh(d), f);
      else
        return;
      b.watch || i("update", l);
    },
    async removeItem(l, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      y.removeItem && (await ct(y.removeItem, f, d), (d.removeMeta || d.removeMata) && await ct(y.removeItem, f + "$", d), y.watch || i("remove", l));
    },
    // Meta
    async getMeta(l, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l), b = /* @__PURE__ */ Object.create(null);
      if (y.getMeta && Object.assign(b, await ct(y.getMeta, f, d)), !d.nativeOnly) {
        const _ = await ct(
          y.getItem,
          f + "$",
          d
        ).then((C) => hi(C));
        _ && typeof _ == "object" && (typeof _.atime == "string" && (_.atime = new Date(_.atime)), typeof _.mtime == "string" && (_.mtime = new Date(_.mtime)), Object.assign(b, _));
      }
      return b;
    },
    setMeta(l, d, f = {}) {
      return this.setItem(l + "$", d, f);
    },
    removeMeta(l, d = {}) {
      return this.removeItem(l + "$", d);
    },
    // Keys
    async getKeys(l, d = {}) {
      l = di(l);
      const f = s(l, !0);
      let y = [];
      const b = [];
      for (const _ of f) {
        const L = (await ct(
          _.driver.getKeys,
          _.relativeBase,
          d
        )).map((F) => _.mountpoint + Nt(F)).filter((F) => !y.some((S) => F.startsWith(S)));
        b.push(...L), y = [
          _.mountpoint,
          ...y.filter((F) => !F.startsWith(_.mountpoint))
        ];
      }
      return l ? b.filter((_) => _.startsWith(l) && !_.endsWith("$")) : b.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(l, d = {}) {
      l = di(l), await Promise.all(
        s(l, !1).map(async (f) => {
          if (f.driver.clear)
            return ct(f.driver.clear, f.relativeBase, d);
          if (f.driver.removeItem) {
            const y = await f.driver.getKeys(f.relativeBase || "", d);
            return Promise.all(
              y.map((b) => f.driver.removeItem(b, d))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((l) => Zo(l))
      );
    },
    async watch(l) {
      return await n(), e.watchListeners.push(l), async () => {
        e.watchListeners = e.watchListeners.filter(
          (d) => d !== l
        ), e.watchListeners.length === 0 && await c();
      };
    },
    async unwatch() {
      e.watchListeners = [], await c();
    },
    // Mount
    mount(l, d) {
      if (l = di(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((f, y) => y.length - f.length)), e.mounts[l] = d, e.watching && Promise.resolve(Wo(d, i, l)).then((f) => {
        e.unwatch[l] = f;
      }).catch(console.error), h;
    },
    async unmount(l, d = !0) {
      l = di(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && (e.unwatch[l](), delete e.unwatch[l]), d && await Zo(e.mounts[l]), e.mountpoints = e.mountpoints.filter((f) => f !== l), delete e.mounts[l]);
    },
    getMount(l = "") {
      l = Nt(l) + ":";
      const d = r(l);
      return {
        driver: d.driver,
        base: d.base
      };
    },
    getMounts(l = "", d = {}) {
      return l = Nt(l), s(l, d.parents).map((y) => ({
        driver: y.driver,
        base: y.mountpoint
      }));
    }
  };
  return h;
}
function Wo(t, e, r) {
  return t.watch ? t.watch((s, i) => e(s, r + i)) : () => {
  };
}
async function Zo(t) {
  typeof t.dispose == "function" && await ct(t.dispose);
}
function Zr(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Lc(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const s = Zr(r);
  return (i, n) => s.then((c) => n(c.transaction(e, i).objectStore(e)));
}
let tn;
function Vs() {
  return tn || (tn = Lc("keyval-store", "keyval")), tn;
}
function Go(t, e = Vs()) {
  return e("readonly", (r) => Zr(r.get(t)));
}
function Ah(t, e, r = Vs()) {
  return r("readwrite", (s) => (s.put(e, t), Zr(s.transaction)));
}
function Rh(t, e = Vs()) {
  return e("readwrite", (r) => (r.delete(t), Zr(r.transaction)));
}
function Ph(t = Vs()) {
  return t("readwrite", (e) => (e.clear(), Zr(e.transaction)));
}
function Lh(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Zr(t.transaction);
}
function Uh(t = Vs()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Zr(e.getAllKeys());
    const r = [];
    return Lh(e, (s) => r.push(s.key)).then(() => r);
  });
}
const Fh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Mh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (s, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function ki(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Mh(t);
  } catch {
    return t;
  }
}
function Hs(t) {
  return typeof t == "string" ? t : Fh(t) || "";
}
const $h = "idb-keyval";
var jh = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (i) => e + i;
  let s;
  return t.dbName && t.storeName && (s = Lc(t.dbName, t.storeName)), { name: $h, options: t, async hasItem(i) {
    return !(typeof await Go(r(i), s) > "u");
  }, async getItem(i) {
    return await Go(r(i), s) ?? null;
  }, setItem(i, n) {
    return Ah(r(i), n, s);
  }, removeItem(i) {
    return Rh(r(i), s);
  }, getKeys() {
    return Uh(s);
  }, clear() {
    return Ph(s);
  } };
};
const kh = "WALLET_CONNECT_V2_INDEXED_DB", zh = "keyvaluestorage";
let qh = class {
  constructor() {
    this.indexedDb = Nh({ driver: jh({ dbName: kh, storeName: zh }) });
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
    await this.indexedDb.setItem(e, Hs(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mi = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, s) {
    this[r] = String(s);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(s) {
      r[s] = void 0, delete r[s];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof rn < "u" && rn.localStorage ? mi.exports = rn.localStorage : typeof window < "u" && window.localStorage ? mi.exports = window.localStorage : mi.exports = new e();
})();
function Bh(t) {
  var e;
  return [t[0], ki((e = t[1]) != null ? e : "")];
}
let Kh = class {
  constructor() {
    this.localStorage = mi.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Bh);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return ki(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Hs(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const Vh = "wc_storage_version", Yo = 1, Hh = async (t, e, r) => {
  const s = Vh, i = await e.getItem(s);
  if (i && i >= Yo) {
    r(e);
    return;
  }
  const n = await t.getKeys();
  if (!n.length) {
    r(e);
    return;
  }
  const c = [];
  for (; n.length; ) {
    const o = n.shift();
    if (!o)
      continue;
    const h = o.toLowerCase();
    if (h.includes("wc@") || h.includes("walletconnect") || h.includes("wc_") || h.includes("wallet_connect")) {
      const l = await t.getItem(o);
      await e.setItem(o, l), c.push(o);
    }
  }
  await e.setItem(s, Yo), r(e), Wh(t, c);
}, Wh = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Zh = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Kh();
    this.storage = e;
    try {
      const r = new qh();
      Hh(e, r, this.setInitialized);
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
var hs = {};
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
var xn = function(t, e) {
  return xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var i in s)
      s.hasOwnProperty(i) && (r[i] = s[i]);
  }, xn(t, e);
};
function Gh(t, e) {
  xn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var In = function() {
  return In = Object.assign || function(e) {
    for (var r, s = 1, i = arguments.length; s < i; s++) {
      r = arguments[s];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, In.apply(this, arguments);
};
function Yh(t, e) {
  var r = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (r[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(t); i < s.length; i++)
      e.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[i]) && (r[s[i]] = t[s[i]]);
  return r;
}
function Jh(t, e, r, s) {
  var i = arguments.length, n = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, r) : s, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, r, s);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (c = t[o]) && (n = (i < 3 ? c(n) : i > 3 ? c(e, r, n) : c(e, r)) || n);
  return i > 3 && n && Object.defineProperty(e, r, n), n;
}
function Qh(t, e) {
  return function(r, s) {
    e(r, s, t);
  };
}
function Xh(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function ed(t, e, r, s) {
  function i(n) {
    return n instanceof r ? n : new r(function(c) {
      c(n);
    });
  }
  return new (r || (r = Promise))(function(n, c) {
    function o(d) {
      try {
        l(s.next(d));
      } catch (f) {
        c(f);
      }
    }
    function h(d) {
      try {
        l(s.throw(d));
      } catch (f) {
        c(f);
      }
    }
    function l(d) {
      d.done ? n(d.value) : i(d.value).then(o, h);
    }
    l((s = s.apply(t, e || [])).next());
  });
}
function td(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, s, i, n, c;
  return c = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function o(l) {
    return function(d) {
      return h([l, d]);
    };
  }
  function h(l) {
    if (s)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (s = 1, i && (n = l[0] & 2 ? i.return : l[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, l[1])).done)
          return n;
        switch (i = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
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
      } catch (d) {
        l = [6, d], i = 0;
      } finally {
        s = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function rd(t, e, r, s) {
  s === void 0 && (s = r), t[s] = e[r];
}
function sd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function On(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], s = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Uc(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var s = r.call(t), i, n = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = s.next()).done; )
      n.push(i.value);
  } catch (o) {
    c = { error: o };
  } finally {
    try {
      i && !i.done && (r = s.return) && r.call(s);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return n;
}
function id() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Uc(arguments[e]));
  return t;
}
function nd() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var s = Array(t), i = 0, e = 0; e < r; e++)
    for (var n = arguments[e], c = 0, o = n.length; c < o; c++, i++)
      s[i] = n[c];
  return s;
}
function Ns(t) {
  return this instanceof Ns ? (this.v = t, this) : new Ns(t);
}
function od(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(t, e || []), i, n = [];
  return i = {}, c("next"), c("throw"), c("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function c(y) {
    s[y] && (i[y] = function(b) {
      return new Promise(function(_, C) {
        n.push([y, b, _, C]) > 1 || o(y, b);
      });
    });
  }
  function o(y, b) {
    try {
      h(s[y](b));
    } catch (_) {
      f(n[0][3], _);
    }
  }
  function h(y) {
    y.value instanceof Ns ? Promise.resolve(y.value.v).then(l, d) : f(n[0][2], y);
  }
  function l(y) {
    o("next", y);
  }
  function d(y) {
    o("throw", y);
  }
  function f(y, b) {
    y(b), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function ad(t) {
  var e, r;
  return e = {}, s("next"), s("throw", function(i) {
    throw i;
  }), s("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function s(i, n) {
    e[i] = t[i] ? function(c) {
      return (r = !r) ? { value: Ns(t[i](c)), done: i === "return" } : n ? n(c) : c;
    } : n;
  }
}
function cd(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof On == "function" ? On(t) : t[Symbol.iterator](), r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function s(n) {
    r[n] = t[n] && function(c) {
      return new Promise(function(o, h) {
        c = t[n](c), i(o, h, c.done, c.value);
      });
    };
  }
  function i(n, c, o, h) {
    Promise.resolve(h).then(function(l) {
      n({ value: l, done: o });
    }, c);
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
function dd(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function fd(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return In;
  },
  __asyncDelegator: ad,
  __asyncGenerator: od,
  __asyncValues: cd,
  __await: Ns,
  __awaiter: ed,
  __classPrivateFieldGet: dd,
  __classPrivateFieldSet: fd,
  __createBinding: rd,
  __decorate: Jh,
  __exportStar: sd,
  __extends: Gh,
  __generator: td,
  __importDefault: hd,
  __importStar: ld,
  __makeTemplateObject: ud,
  __metadata: Xh,
  __param: Qh,
  __read: Uc,
  __rest: Yh,
  __spread: id,
  __spreadArrays: nd,
  __values: On
}, Symbol.toStringTag, { value: "Module" })), ar = /* @__PURE__ */ Xn(pd);
var bs = {}, te = {}, sn = {}, _s = {}, Jo;
function gd() {
  if (Jo)
    return _s;
  Jo = 1, Object.defineProperty(_s, "__esModule", { value: !0 }), _s.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return _s.delay = t, _s;
}
var Fr = {}, nn = {}, Mr = {}, Qo;
function yd() {
  return Qo || (Qo = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.ONE_THOUSAND = Mr.ONE_HUNDRED = void 0, Mr.ONE_HUNDRED = 100, Mr.ONE_THOUSAND = 1e3), Mr;
}
var on = {}, Xo;
function md() {
  return Xo || (Xo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(on)), on;
}
var ea;
function Fc() {
  return ea || (ea = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(yd(), t), e.__exportStar(md(), t);
  }(nn)), nn;
}
var ta;
function vd() {
  if (ta)
    return Fr;
  ta = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.fromMiliseconds = Fr.toMiliseconds = void 0;
  const t = Fc();
  function e(s) {
    return s * t.ONE_THOUSAND;
  }
  Fr.toMiliseconds = e;
  function r(s) {
    return Math.floor(s / t.ONE_THOUSAND);
  }
  return Fr.fromMiliseconds = r, Fr;
}
var ra;
function bd() {
  return ra || (ra = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(gd(), t), e.__exportStar(vd(), t);
  }(sn)), sn;
}
var es = {}, sa;
function _d() {
  if (sa)
    return es;
  sa = 1, Object.defineProperty(es, "__esModule", { value: !0 }), es.Watch = void 0;
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
      const s = this.get(r);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const i = Date.now() - s.started;
      this.timestamps.set(r, { started: s.started, elapsed: i });
    }
    get(r) {
      const s = this.timestamps.get(r);
      if (typeof s > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return s;
    }
    elapsed(r) {
      const s = this.get(r);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return es.Watch = t, es.default = t, es;
}
var an = {}, ws = {}, ia;
function wd() {
  if (ia)
    return ws;
  ia = 1, Object.defineProperty(ws, "__esModule", { value: !0 }), ws.IWatch = void 0;
  class t {
  }
  return ws.IWatch = t, ws;
}
var na;
function Ed() {
  return na || (na = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(wd(), t);
  }(an)), an;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(bd(), t), e.__exportStar(_d(), t), e.__exportStar(Ed(), t), e.__exportStar(Fc(), t);
})(te);
var cn = {}, Es = {};
let Gr = class {
};
const Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Gr
}, Symbol.toStringTag, { value: "Module" })), Dd = /* @__PURE__ */ Xn(Sd);
var oa;
function xd() {
  if (oa)
    return Es;
  oa = 1, Object.defineProperty(Es, "__esModule", { value: !0 }), Es.IHeartBeat = void 0;
  const t = Dd;
  class e extends t.IEvents {
    constructor(s) {
      super();
    }
  }
  return Es.IHeartBeat = e, Es;
}
var aa;
function Mc() {
  return aa || (aa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(xd(), t);
  }(cn)), cn;
}
var un = {}, $r = {}, ca;
function Id() {
  if (ca)
    return $r;
  ca = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.HEARTBEAT_EVENTS = $r.HEARTBEAT_INTERVAL = void 0;
  const t = te;
  return $r.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, $r.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, $r;
}
var ua;
function $c() {
  return ua || (ua = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Id(), t);
  }(un)), un;
}
var la;
function Od() {
  if (la)
    return bs;
  la = 1, Object.defineProperty(bs, "__esModule", { value: !0 }), bs.HeartBeat = void 0;
  const t = ar, e = Yt, r = te, s = Mc(), i = $c();
  class n extends s.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const h = new n(o);
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
    on(o, h) {
      this.events.on(o, h);
    }
    once(o, h) {
      this.events.once(o, h);
    }
    off(o, h) {
      this.events.off(o, h);
    }
    removeListener(o, h) {
      this.events.removeListener(o, h);
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
  return bs.HeartBeat = n, bs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(Od(), t), e.__exportStar(Mc(), t), e.__exportStar($c(), t);
})(hs);
var Oe = {}, ln, ha;
function Cd() {
  if (ha)
    return ln;
  ha = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ln = e;
  function e(r, s, i) {
    var n = i && i.stringify || t, c = 1;
    if (typeof r == "object" && r !== null) {
      var o = s.length + c;
      if (o === 1)
        return r;
      var h = new Array(o);
      h[0] = n(r);
      for (var l = 1; l < o; l++)
        h[l] = n(s[l]);
      return h.join(" ");
    }
    if (typeof r != "string")
      return r;
    var d = s.length;
    if (d === 0)
      return r;
    for (var f = "", y = 1 - c, b = -1, _ = r && r.length || 0, C = 0; C < _; ) {
      if (r.charCodeAt(C) === 37 && C + 1 < _) {
        switch (b = b > -1 ? b : 0, r.charCodeAt(C + 1)) {
          case 100:
          case 102:
            if (y >= d || s[y] == null)
              break;
            b < C && (f += r.slice(b, C)), f += Number(s[y]), b = C + 2, C++;
            break;
          case 105:
            if (y >= d || s[y] == null)
              break;
            b < C && (f += r.slice(b, C)), f += Math.floor(Number(s[y])), b = C + 2, C++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= d || s[y] === void 0)
              break;
            b < C && (f += r.slice(b, C));
            var L = typeof s[y];
            if (L === "string") {
              f += "'" + s[y] + "'", b = C + 2, C++;
              break;
            }
            if (L === "function") {
              f += s[y].name || "<anonymous>", b = C + 2, C++;
              break;
            }
            f += n(s[y]), b = C + 2, C++;
            break;
          case 115:
            if (y >= d)
              break;
            b < C && (f += r.slice(b, C)), f += String(s[y]), b = C + 2, C++;
            break;
          case 37:
            b < C && (f += r.slice(b, C)), f += "%", b = C + 2, C++, y--;
            break;
        }
        ++y;
      }
      ++C;
    }
    return b === -1 ? r : (b < _ && (f += r.slice(b)), f);
  }
  return ln;
}
var hn, da;
function Td() {
  if (da)
    return hn;
  da = 1;
  const t = Cd();
  hn = i;
  const e = E().console || {}, r = {
    mapHttpRequest: _,
    mapHttpResponse: _,
    wrapRequestSerializer: C,
    wrapResponseSerializer: C,
    wrapErrorSerializer: C,
    req: _,
    res: _,
    err: y
  };
  function s(g, a) {
    return Array.isArray(g) ? g.filter(function(P) {
      return P !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(a) : !1;
  }
  function i(g) {
    g = g || {}, g.browser = g.browser || {};
    const a = g.browser.transmit;
    if (a && typeof a.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const P = g.serializers || {}, R = s(g.browser.serialize, P);
    let U = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", D = Object.create(p);
    D.log || (D.log = L), Object.defineProperty(D, "levelVal", {
      get: W
    }), Object.defineProperty(D, "level", {
      get: z,
      set: $
    });
    const A = {
      transmit: a,
      serialize: R,
      asObject: g.browser.asObject,
      levels: B,
      timestamp: b(g)
    };
    D.levels = i.levels, D.level = G, D.setMaxListeners = D.getMaxListeners = D.emit = D.addListener = D.on = D.prependListener = D.once = D.prependOnceListener = D.removeListener = D.removeAllListeners = D.listeners = D.listenerCount = D.eventNames = D.write = D.flush = L, D.serializers = P, D._serialize = R, D._stdErrSerialize = U, D.child = k, a && (D._logEvent = f());
    function W() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function $(M) {
      if (M !== "silent" && !this.levels.values[M])
        throw Error("unknown level " + M);
      this._level = M, n(A, D, "error", "log"), n(A, D, "fatal", "error"), n(A, D, "warn", "error"), n(A, D, "info", "log"), n(A, D, "debug", "log"), n(A, D, "trace", "log");
    }
    function k(M, q) {
      if (!M)
        throw new Error("missing bindings for child Pino");
      q = q || {}, R && M.serializers && (q.serializers = M.serializers);
      const oe = q.serializers;
      if (R && oe) {
        var K = Object.assign({}, P, oe), se = g.browser.serialize === !0 ? Object.keys(K) : R;
        delete M.serializers, h([M], se, K, this._stdErrSerialize);
      }
      function X(ne) {
        this._childLevel = (ne._childLevel | 0) + 1, this.error = l(ne, M, "error"), this.fatal = l(ne, M, "fatal"), this.warn = l(ne, M, "warn"), this.info = l(ne, M, "info"), this.debug = l(ne, M, "debug"), this.trace = l(ne, M, "trace"), K && (this.serializers = K, this._serialize = se), a && (this._logEvent = f(
          [].concat(ne._logEvent.bindings, M)
        ));
      }
      return X.prototype = this, new X(this);
    }
    return D;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: F, epochTime: S, unixTime: O, isoTime: v });
  function n(g, a, p, P) {
    const R = Object.getPrototypeOf(a);
    a[p] = a.levelVal > a.levels.values[p] ? L : R[p] ? R[p] : e[p] || e[P] || L, c(g, a, p);
  }
  function c(g, a, p) {
    !g.transmit && a[p] === L || (a[p] = /* @__PURE__ */ function(P) {
      return function() {
        const U = g.timestamp(), B = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var D = 0; D < B.length; D++)
          B[D] = arguments[D];
        if (g.serialize && !g.asObject && h(B, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? P.call(G, o(this, p, B, U)) : P.apply(G, B), g.transmit) {
          const A = g.transmit.level || a.level, W = i.levels.values[A], z = i.levels.values[p];
          if (z < W)
            return;
          d(this, {
            ts: U,
            methodLevel: p,
            methodValue: z,
            transmitLevel: A,
            transmitValue: i.levels.values[g.transmit.level || a.level],
            send: g.transmit.send,
            val: a.levelVal
          }, B);
        }
      };
    }(a[p]));
  }
  function o(g, a, p, P) {
    g._serialize && h(p, g._serialize, g.serializers, g._stdErrSerialize);
    const R = p.slice();
    let U = R[0];
    const B = {};
    P && (B.time = P), B.level = i.levels.values[a];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), U !== null && typeof U == "object") {
      for (; G-- && typeof R[0] == "object"; )
        Object.assign(B, R.shift());
      U = R.length ? t(R.shift(), R) : void 0;
    } else
      typeof U == "string" && (U = t(R.shift(), R));
    return U !== void 0 && (B.msg = U), B;
  }
  function h(g, a, p, P) {
    for (const R in g)
      if (P && g[R] instanceof Error)
        g[R] = i.stdSerializers.err(g[R]);
      else if (typeof g[R] == "object" && !Array.isArray(g[R]))
        for (const U in g[R])
          a && a.indexOf(U) > -1 && U in p && (g[R][U] = p[U](g[R][U]));
  }
  function l(g, a, p) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = a;
      for (var R = 1; R < P.length; R++)
        P[R] = arguments[R - 1];
      return g[p].apply(this, P);
    };
  }
  function d(g, a, p) {
    const P = a.send, R = a.ts, U = a.methodLevel, B = a.methodValue, G = a.val, D = g._logEvent.bindings;
    h(
      p,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = R, g._logEvent.messages = p.filter(function(A) {
      return D.indexOf(A) === -1;
    }), g._logEvent.level.label = U, g._logEvent.level.value = B, P(U, g._logEvent, G), g._logEvent = f(D);
  }
  function f(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 }
    };
  }
  function y(g) {
    const a = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const p in g)
      a[p] === void 0 && (a[p] = g[p]);
    return a;
  }
  function b(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? F : S;
  }
  function _() {
    return {};
  }
  function C(g) {
    return g;
  }
  function L() {
  }
  function F() {
    return !1;
  }
  function S() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function v() {
    return new Date(Date.now()).toISOString();
  }
  function E() {
    function g(a) {
      return typeof a < "u" && a;
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
  return hn;
}
var jr = {}, fa;
function jc() {
  return fa || (fa = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.PINO_CUSTOM_CONTEXT_KEY = jr.PINO_LOGGER_DEFAULTS = void 0, jr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, jr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), jr;
}
var St = {}, pa;
function Nd() {
  if (pa)
    return St;
  pa = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const t = jc();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  St.getDefaultLoggerOptions = e;
  function r(o, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[h] || "";
  }
  St.getBrowserLoggerContext = r;
  function s(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[l] = h, o;
  }
  St.setBrowserLoggerContext = s;
  function i(o, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof o.bindings > "u" ? l = r(o, h) : l = o.bindings().context || "", l;
  }
  St.getLoggerContext = i;
  function n(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = i(o, l);
    return d.trim() ? `${d}/${h}` : h;
  }
  St.formatChildLoggerContext = n;
  function c(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = n(o, h, l), f = o.child({ context: d });
    return s(f, d, l);
  }
  return St.generateChildLogger = c, St;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = ar, r = e.__importDefault(Td());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(jc(), t), e.__exportStar(Nd(), t);
})(Oe);
let Ad = class extends Gr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Rd = class extends Gr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Pd = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Ld = class extends Gr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Ud = class extends Gr {
  constructor(e) {
    super();
  }
}, Fd = class {
  constructor(e, r, s, i) {
    this.core = e, this.logger = r, this.name = s;
  }
};
class Md extends Gr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let $d = class extends Gr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, jd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, kd = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, zd = class {
  constructor(e) {
    this.client = e;
  }
};
var ro = {}, ds = {}, zi = {}, qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.BrowserRandomSource = void 0;
const ga = 65536;
class qd {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let s = 0; s < r.length; s += ga)
      this._crypto.getRandomValues(r.subarray(s, s + Math.min(r.length - s, ga)));
    return r;
  }
}
qi.BrowserRandomSource = qd;
function Bd(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bi = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function Kd(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Ft.wipe = Kd;
const Vd = {}, Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vd
}, Symbol.toStringTag, { value: "Module" })), Wd = /* @__PURE__ */ Xn(Hd);
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.NodeRandomSource = void 0;
const Zd = Ft;
class Gd {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Bd < "u") {
      const e = Wd;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let i = 0; i < s.length; i++)
      s[i] = r[i];
    return (0, Zd.wipe)(r), s;
  }
}
Bi.NodeRandomSource = Gd;
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.SystemRandomSource = void 0;
const Yd = qi, Jd = Bi;
class Qd {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Yd.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Jd.NodeRandomSource(), this._source.isAvailable) {
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
zi.SystemRandomSource = Qd;
var le = {}, kc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, h) {
    var l = o >>> 16 & 65535, d = o & 65535, f = h >>> 16 & 65535, y = h & 65535;
    return d * y + (l * y + d * f << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(o, h) {
    return o + h | 0;
  }
  t.add = r;
  function s(o, h) {
    return o - h | 0;
  }
  t.sub = s;
  function i(o, h) {
    return o << h | o >>> 32 - h;
  }
  t.rotl = i;
  function n(o, h) {
    return o << 32 - h | o >>> h;
  }
  t.rotr = n;
  function c(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || c, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(kc);
Object.defineProperty(le, "__esModule", { value: !0 });
var zc = kc;
function Xd(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
le.readInt16BE = Xd;
function ef(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
le.readUint16BE = ef;
function tf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
le.readInt16LE = tf;
function rf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint16LE = rf;
function qc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
le.writeUint16BE = qc;
le.writeInt16BE = qc;
function Bc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
le.writeUint16LE = Bc;
le.writeInt16LE = Bc;
function Cn(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
le.readInt32BE = Cn;
function Tn(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
le.readUint32BE = Tn;
function Nn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
le.readInt32LE = Nn;
function An(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint32LE = An;
function Si(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
le.writeUint32BE = Si;
le.writeInt32BE = Si;
function Di(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
le.writeUint32LE = Di;
le.writeInt32LE = Di;
function sf(t, e) {
  e === void 0 && (e = 0);
  var r = Cn(t, e), s = Cn(t, e + 4);
  return r * 4294967296 + s - (s >> 31) * 4294967296;
}
le.readInt64BE = sf;
function nf(t, e) {
  e === void 0 && (e = 0);
  var r = Tn(t, e), s = Tn(t, e + 4);
  return r * 4294967296 + s;
}
le.readUint64BE = nf;
function of(t, e) {
  e === void 0 && (e = 0);
  var r = Nn(t, e), s = Nn(t, e + 4);
  return s * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = of;
function af(t, e) {
  e === void 0 && (e = 0);
  var r = An(t, e), s = An(t, e + 4);
  return s * 4294967296 + r;
}
le.readUint64LE = af;
function Kc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Si(t / 4294967296 >>> 0, e, r), Si(t >>> 0, e, r + 4), e;
}
le.writeUint64BE = Kc;
le.writeInt64BE = Kc;
function Vc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Di(t >>> 0, e, r), Di(t / 4294967296 >>> 0, e, r + 4), e;
}
le.writeUint64LE = Vc;
le.writeInt64LE = Vc;
function cf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, i = 1, n = t / 8 + r - 1; n >= r; n--)
    s += e[n] * i, i *= 256;
  return s;
}
le.readUintBE = cf;
function uf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, i = 1, n = r; n < r + t / 8; n++)
    s += e[n] * i, i *= 256;
  return s;
}
le.readUintLE = uf;
function lf(t, e, r, s) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), s === void 0 && (s = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!zc.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, n = t / 8 + s - 1; n >= s; n--)
    r[n] = e / i & 255, i *= 256;
  return r;
}
le.writeUintBE = lf;
function hf(t, e, r, s) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), s === void 0 && (s = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!zc.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, n = s; n < s + t / 8; n++)
    r[n] = e / i & 255, i *= 256;
  return r;
}
le.writeUintLE = hf;
function df(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
le.readFloat32BE = df;
function ff(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
le.readFloat32LE = ff;
function pf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
le.readFloat64BE = pf;
function gf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
le.readFloat64LE = gf;
function yf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(r, t), e;
}
le.writeFloat32BE = yf;
function mf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(r, t, !0), e;
}
le.writeFloat32LE = mf;
function vf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(r, t), e;
}
le.writeFloat64BE = vf;
function bf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(r, t, !0), e;
}
le.writeFloat64LE = bf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = zi, r = le, s = Ft;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(l, d = t.defaultRandomSource) {
    return d.randomBytes(l);
  }
  t.randomBytes = i;
  function n(l = t.defaultRandomSource) {
    const d = i(4, l), f = (0, r.readUint32LE)(d);
    return (0, s.wipe)(d), f;
  }
  t.randomUint32 = n;
  const c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(l, d = c, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const b = d.length, _ = 256 - 256 % b;
    for (; l > 0; ) {
      const C = i(Math.ceil(l * 256 / _), f);
      for (let L = 0; L < C.length && l > 0; L++) {
        const F = C[L];
        F < _ && (y += d.charAt(F % b), l--);
      }
      (0, s.wipe)(C);
    }
    return y;
  }
  t.randomString = o;
  function h(l, d = c, f = t.defaultRandomSource) {
    const y = Math.ceil(l / (Math.log(d.length) / Math.LN2));
    return o(y, d, f);
  }
  t.randomStringForEntropy = h;
})(ds);
var Hc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ft;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var s = (
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
      }, o.prototype.update = function(h, l) {
        if (l === void 0 && (l = h.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = h[d++], l--;
          this._bufferLength === this.blockSize && (n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (d = n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, h, d, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = h[d++], l--;
        return this;
      }, o.prototype.finish = function(h) {
        if (!this._finished) {
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, y = l << 3, b = l % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var _ = d + 1; _ < b - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, b - 8), e.writeUint32BE(y, this._buffer, b - 4), n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, b), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 8; _++)
          e.writeUint32BE(this._stateHi[_], h, _ * 8), e.writeUint32BE(this._stateLo[_], h, _ * 8 + 4);
        return this;
      }, o.prototype.digest = function() {
        var h = new Uint8Array(this.digestLength);
        return this.finish(h), h;
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
      }, o.prototype.restoreState = function(h) {
        return this._stateHi.set(h.stateHi), this._stateLo.set(h.stateLo), this._bufferLength = h.bufferLength, h.buffer && this._buffer.set(h.buffer), this._bytesHashed = h.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(h) {
        r.wipe(h.stateHi), r.wipe(h.stateLo), h.buffer && r.wipe(h.buffer), h.bufferLength = 0, h.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA512 = s;
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
  function n(o, h, l, d, f, y, b) {
    for (var _ = l[0], C = l[1], L = l[2], F = l[3], S = l[4], O = l[5], v = l[6], E = l[7], g = d[0], a = d[1], p = d[2], P = d[3], R = d[4], U = d[5], B = d[6], G = d[7], D, A, W, z, $, k, M, q; b >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var K = 8 * oe + y;
        o[oe] = e.readUint32BE(f, K), h[oe] = e.readUint32BE(f, K + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var se = _, X = C, ne = L, N = F, T = S, x = O, u = v, w = E, H = g, J = a, be = p, xe = P, we = R, Ne = U, Ve = B, ze = G;
        if (D = E, A = G, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = (S >>> 14 | R << 18) ^ (S >>> 18 | R << 14) ^ (R >>> 9 | S << 23), A = (R >>> 14 | S << 18) ^ (R >>> 18 | S << 14) ^ (S >>> 9 | R << 23), $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, D = S & O ^ ~S & v, A = R & U ^ ~R & B, $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, D = i[oe * 2], A = i[oe * 2 + 1], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, D = o[oe % 16], A = h[oe % 16], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, W = M & 65535 | q << 16, z = $ & 65535 | k << 16, D = W, A = z, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = (_ >>> 28 | g << 4) ^ (g >>> 2 | _ << 30) ^ (g >>> 7 | _ << 25), A = (g >>> 28 | _ << 4) ^ (_ >>> 2 | g << 30) ^ (_ >>> 7 | g << 25), $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, D = _ & C ^ _ & L ^ C & L, A = g & a ^ g & p ^ a & p, $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, w = M & 65535 | q << 16, ze = $ & 65535 | k << 16, D = N, A = xe, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = W, A = z, $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, N = M & 65535 | q << 16, xe = $ & 65535 | k << 16, C = se, L = X, F = ne, S = N, O = T, v = x, E = u, _ = w, a = H, p = J, P = be, R = xe, U = we, B = Ne, G = Ve, g = ze, oe % 16 === 15)
          for (var K = 0; K < 16; K++)
            D = o[K], A = h[K], $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = o[(K + 9) % 16], A = h[(K + 9) % 16], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, W = o[(K + 1) % 16], z = h[(K + 1) % 16], D = (W >>> 1 | z << 31) ^ (W >>> 8 | z << 24) ^ W >>> 7, A = (z >>> 1 | W << 31) ^ (z >>> 8 | W << 24) ^ (z >>> 7 | W << 25), $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, W = o[(K + 14) % 16], z = h[(K + 14) % 16], D = (W >>> 19 | z << 13) ^ (z >>> 29 | W << 3) ^ W >>> 6, A = (z >>> 19 | W << 13) ^ (W >>> 29 | z << 3) ^ (z >>> 6 | W << 26), $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, o[K] = M & 65535 | q << 16, h[K] = $ & 65535 | k << 16;
      }
      D = _, A = g, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[0], A = d[0], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[0] = _ = M & 65535 | q << 16, d[0] = g = $ & 65535 | k << 16, D = C, A = a, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[1], A = d[1], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[1] = C = M & 65535 | q << 16, d[1] = a = $ & 65535 | k << 16, D = L, A = p, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[2], A = d[2], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[2] = L = M & 65535 | q << 16, d[2] = p = $ & 65535 | k << 16, D = F, A = P, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[3], A = d[3], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[3] = F = M & 65535 | q << 16, d[3] = P = $ & 65535 | k << 16, D = S, A = R, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[4], A = d[4], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[4] = S = M & 65535 | q << 16, d[4] = R = $ & 65535 | k << 16, D = O, A = U, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[5], A = d[5], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[5] = O = M & 65535 | q << 16, d[5] = U = $ & 65535 | k << 16, D = v, A = B, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[6], A = d[6], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[6] = v = M & 65535 | q << 16, d[6] = B = $ & 65535 | k << 16, D = E, A = G, $ = A & 65535, k = A >>> 16, M = D & 65535, q = D >>> 16, D = l[7], A = d[7], $ += A & 65535, k += A >>> 16, M += D & 65535, q += D >>> 16, k += $ >>> 16, M += k >>> 16, q += M >>> 16, l[7] = E = M & 65535 | q << 16, d[7] = G = $ & 65535 | k << 16, y += 128, b -= 128;
    }
    return y;
  }
  function c(o) {
    var h = new s();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = c;
})(Hc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = ds, r = Hc, s = Ft;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(N) {
    const T = new Float64Array(16);
    if (N)
      for (let x = 0; x < N.length; x++)
        T[x] = N[x];
    return T;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const c = i(), o = i([1]), h = i([
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
  ]), d = i([
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
  ]), f = i([
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
  function b(N, T) {
    for (let x = 0; x < 16; x++)
      N[x] = T[x] | 0;
  }
  function _(N) {
    let T = 1;
    for (let x = 0; x < 16; x++) {
      let u = N[x] + T + 65535;
      T = Math.floor(u / 65536), N[x] = u - T * 65536;
    }
    N[0] += T - 1 + 37 * (T - 1);
  }
  function C(N, T, x) {
    const u = ~(x - 1);
    for (let w = 0; w < 16; w++) {
      const H = u & (N[w] ^ T[w]);
      N[w] ^= H, T[w] ^= H;
    }
  }
  function L(N, T) {
    const x = i(), u = i();
    for (let w = 0; w < 16; w++)
      u[w] = T[w];
    _(u), _(u), _(u);
    for (let w = 0; w < 2; w++) {
      x[0] = u[0] - 65517;
      for (let J = 1; J < 15; J++)
        x[J] = u[J] - 65535 - (x[J - 1] >> 16 & 1), x[J - 1] &= 65535;
      x[15] = u[15] - 32767 - (x[14] >> 16 & 1);
      const H = x[15] >> 16 & 1;
      x[14] &= 65535, C(u, x, 1 - H);
    }
    for (let w = 0; w < 16; w++)
      N[2 * w] = u[w] & 255, N[2 * w + 1] = u[w] >> 8;
  }
  function F(N, T) {
    let x = 0;
    for (let u = 0; u < 32; u++)
      x |= N[u] ^ T[u];
    return (1 & x - 1 >>> 8) - 1;
  }
  function S(N, T) {
    const x = new Uint8Array(32), u = new Uint8Array(32);
    return L(x, N), L(u, T), F(x, u);
  }
  function O(N) {
    const T = new Uint8Array(32);
    return L(T, N), T[0] & 1;
  }
  function v(N, T) {
    for (let x = 0; x < 16; x++)
      N[x] = T[2 * x] + (T[2 * x + 1] << 8);
    N[15] &= 32767;
  }
  function E(N, T, x) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] + x[u];
  }
  function g(N, T, x) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] - x[u];
  }
  function a(N, T, x) {
    let u, w, H = 0, J = 0, be = 0, xe = 0, we = 0, Ne = 0, Ve = 0, ze = 0, De = 0, Ee = 0, _e = 0, me = 0, ye = 0, pe = 0, fe = 0, ce = 0, ve = 0, Se = 0, ue = 0, Ie = 0, Ce = 0, Re = 0, Pe = 0, Ae = 0, zt = 0, Qt = 0, mr = 0, Pt = 0, Nr = 0, gs = 0, ti = 0, He = x[0], qe = x[1], We = x[2], Ze = x[3], Ge = x[4], Be = x[5], Xe = x[6], et = x[7], tt = x[8], rt = x[9], st = x[10], Qe = x[11], Ye = x[12], Me = x[13], it = x[14], nt = x[15];
    u = T[0], H += u * He, J += u * qe, be += u * We, xe += u * Ze, we += u * Ge, Ne += u * Be, Ve += u * Xe, ze += u * et, De += u * tt, Ee += u * rt, _e += u * st, me += u * Qe, ye += u * Ye, pe += u * Me, fe += u * it, ce += u * nt, u = T[1], J += u * He, be += u * qe, xe += u * We, we += u * Ze, Ne += u * Ge, Ve += u * Be, ze += u * Xe, De += u * et, Ee += u * tt, _e += u * rt, me += u * st, ye += u * Qe, pe += u * Ye, fe += u * Me, ce += u * it, ve += u * nt, u = T[2], be += u * He, xe += u * qe, we += u * We, Ne += u * Ze, Ve += u * Ge, ze += u * Be, De += u * Xe, Ee += u * et, _e += u * tt, me += u * rt, ye += u * st, pe += u * Qe, fe += u * Ye, ce += u * Me, ve += u * it, Se += u * nt, u = T[3], xe += u * He, we += u * qe, Ne += u * We, Ve += u * Ze, ze += u * Ge, De += u * Be, Ee += u * Xe, _e += u * et, me += u * tt, ye += u * rt, pe += u * st, fe += u * Qe, ce += u * Ye, ve += u * Me, Se += u * it, ue += u * nt, u = T[4], we += u * He, Ne += u * qe, Ve += u * We, ze += u * Ze, De += u * Ge, Ee += u * Be, _e += u * Xe, me += u * et, ye += u * tt, pe += u * rt, fe += u * st, ce += u * Qe, ve += u * Ye, Se += u * Me, ue += u * it, Ie += u * nt, u = T[5], Ne += u * He, Ve += u * qe, ze += u * We, De += u * Ze, Ee += u * Ge, _e += u * Be, me += u * Xe, ye += u * et, pe += u * tt, fe += u * rt, ce += u * st, ve += u * Qe, Se += u * Ye, ue += u * Me, Ie += u * it, Ce += u * nt, u = T[6], Ve += u * He, ze += u * qe, De += u * We, Ee += u * Ze, _e += u * Ge, me += u * Be, ye += u * Xe, pe += u * et, fe += u * tt, ce += u * rt, ve += u * st, Se += u * Qe, ue += u * Ye, Ie += u * Me, Ce += u * it, Re += u * nt, u = T[7], ze += u * He, De += u * qe, Ee += u * We, _e += u * Ze, me += u * Ge, ye += u * Be, pe += u * Xe, fe += u * et, ce += u * tt, ve += u * rt, Se += u * st, ue += u * Qe, Ie += u * Ye, Ce += u * Me, Re += u * it, Pe += u * nt, u = T[8], De += u * He, Ee += u * qe, _e += u * We, me += u * Ze, ye += u * Ge, pe += u * Be, fe += u * Xe, ce += u * et, ve += u * tt, Se += u * rt, ue += u * st, Ie += u * Qe, Ce += u * Ye, Re += u * Me, Pe += u * it, Ae += u * nt, u = T[9], Ee += u * He, _e += u * qe, me += u * We, ye += u * Ze, pe += u * Ge, fe += u * Be, ce += u * Xe, ve += u * et, Se += u * tt, ue += u * rt, Ie += u * st, Ce += u * Qe, Re += u * Ye, Pe += u * Me, Ae += u * it, zt += u * nt, u = T[10], _e += u * He, me += u * qe, ye += u * We, pe += u * Ze, fe += u * Ge, ce += u * Be, ve += u * Xe, Se += u * et, ue += u * tt, Ie += u * rt, Ce += u * st, Re += u * Qe, Pe += u * Ye, Ae += u * Me, zt += u * it, Qt += u * nt, u = T[11], me += u * He, ye += u * qe, pe += u * We, fe += u * Ze, ce += u * Ge, ve += u * Be, Se += u * Xe, ue += u * et, Ie += u * tt, Ce += u * rt, Re += u * st, Pe += u * Qe, Ae += u * Ye, zt += u * Me, Qt += u * it, mr += u * nt, u = T[12], ye += u * He, pe += u * qe, fe += u * We, ce += u * Ze, ve += u * Ge, Se += u * Be, ue += u * Xe, Ie += u * et, Ce += u * tt, Re += u * rt, Pe += u * st, Ae += u * Qe, zt += u * Ye, Qt += u * Me, mr += u * it, Pt += u * nt, u = T[13], pe += u * He, fe += u * qe, ce += u * We, ve += u * Ze, Se += u * Ge, ue += u * Be, Ie += u * Xe, Ce += u * et, Re += u * tt, Pe += u * rt, Ae += u * st, zt += u * Qe, Qt += u * Ye, mr += u * Me, Pt += u * it, Nr += u * nt, u = T[14], fe += u * He, ce += u * qe, ve += u * We, Se += u * Ze, ue += u * Ge, Ie += u * Be, Ce += u * Xe, Re += u * et, Pe += u * tt, Ae += u * rt, zt += u * st, Qt += u * Qe, mr += u * Ye, Pt += u * Me, Nr += u * it, gs += u * nt, u = T[15], ce += u * He, ve += u * qe, Se += u * We, ue += u * Ze, Ie += u * Ge, Ce += u * Be, Re += u * Xe, Pe += u * et, Ae += u * tt, zt += u * rt, Qt += u * st, mr += u * Qe, Pt += u * Ye, Nr += u * Me, gs += u * it, ti += u * nt, H += 38 * ve, J += 38 * Se, be += 38 * ue, xe += 38 * Ie, we += 38 * Ce, Ne += 38 * Re, Ve += 38 * Pe, ze += 38 * Ae, De += 38 * zt, Ee += 38 * Qt, _e += 38 * mr, me += 38 * Pt, ye += 38 * Nr, pe += 38 * gs, fe += 38 * ti, w = 1, u = H + w + 65535, w = Math.floor(u / 65536), H = u - w * 65536, u = J + w + 65535, w = Math.floor(u / 65536), J = u - w * 65536, u = be + w + 65535, w = Math.floor(u / 65536), be = u - w * 65536, u = xe + w + 65535, w = Math.floor(u / 65536), xe = u - w * 65536, u = we + w + 65535, w = Math.floor(u / 65536), we = u - w * 65536, u = Ne + w + 65535, w = Math.floor(u / 65536), Ne = u - w * 65536, u = Ve + w + 65535, w = Math.floor(u / 65536), Ve = u - w * 65536, u = ze + w + 65535, w = Math.floor(u / 65536), ze = u - w * 65536, u = De + w + 65535, w = Math.floor(u / 65536), De = u - w * 65536, u = Ee + w + 65535, w = Math.floor(u / 65536), Ee = u - w * 65536, u = _e + w + 65535, w = Math.floor(u / 65536), _e = u - w * 65536, u = me + w + 65535, w = Math.floor(u / 65536), me = u - w * 65536, u = ye + w + 65535, w = Math.floor(u / 65536), ye = u - w * 65536, u = pe + w + 65535, w = Math.floor(u / 65536), pe = u - w * 65536, u = fe + w + 65535, w = Math.floor(u / 65536), fe = u - w * 65536, u = ce + w + 65535, w = Math.floor(u / 65536), ce = u - w * 65536, H += w - 1 + 37 * (w - 1), w = 1, u = H + w + 65535, w = Math.floor(u / 65536), H = u - w * 65536, u = J + w + 65535, w = Math.floor(u / 65536), J = u - w * 65536, u = be + w + 65535, w = Math.floor(u / 65536), be = u - w * 65536, u = xe + w + 65535, w = Math.floor(u / 65536), xe = u - w * 65536, u = we + w + 65535, w = Math.floor(u / 65536), we = u - w * 65536, u = Ne + w + 65535, w = Math.floor(u / 65536), Ne = u - w * 65536, u = Ve + w + 65535, w = Math.floor(u / 65536), Ve = u - w * 65536, u = ze + w + 65535, w = Math.floor(u / 65536), ze = u - w * 65536, u = De + w + 65535, w = Math.floor(u / 65536), De = u - w * 65536, u = Ee + w + 65535, w = Math.floor(u / 65536), Ee = u - w * 65536, u = _e + w + 65535, w = Math.floor(u / 65536), _e = u - w * 65536, u = me + w + 65535, w = Math.floor(u / 65536), me = u - w * 65536, u = ye + w + 65535, w = Math.floor(u / 65536), ye = u - w * 65536, u = pe + w + 65535, w = Math.floor(u / 65536), pe = u - w * 65536, u = fe + w + 65535, w = Math.floor(u / 65536), fe = u - w * 65536, u = ce + w + 65535, w = Math.floor(u / 65536), ce = u - w * 65536, H += w - 1 + 37 * (w - 1), N[0] = H, N[1] = J, N[2] = be, N[3] = xe, N[4] = we, N[5] = Ne, N[6] = Ve, N[7] = ze, N[8] = De, N[9] = Ee, N[10] = _e, N[11] = me, N[12] = ye, N[13] = pe, N[14] = fe, N[15] = ce;
  }
  function p(N, T) {
    a(N, T, T);
  }
  function P(N, T) {
    const x = i();
    let u;
    for (u = 0; u < 16; u++)
      x[u] = T[u];
    for (u = 253; u >= 0; u--)
      p(x, x), u !== 2 && u !== 4 && a(x, x, T);
    for (u = 0; u < 16; u++)
      N[u] = x[u];
  }
  function R(N, T) {
    const x = i();
    let u;
    for (u = 0; u < 16; u++)
      x[u] = T[u];
    for (u = 250; u >= 0; u--)
      p(x, x), u !== 1 && a(x, x, T);
    for (u = 0; u < 16; u++)
      N[u] = x[u];
  }
  function U(N, T) {
    const x = i(), u = i(), w = i(), H = i(), J = i(), be = i(), xe = i(), we = i(), Ne = i();
    g(x, N[1], N[0]), g(Ne, T[1], T[0]), a(x, x, Ne), E(u, N[0], N[1]), E(Ne, T[0], T[1]), a(u, u, Ne), a(w, N[3], T[3]), a(w, w, l), a(H, N[2], T[2]), E(H, H, H), g(J, u, x), g(be, H, w), E(xe, H, w), E(we, u, x), a(N[0], J, be), a(N[1], we, xe), a(N[2], xe, be), a(N[3], J, we);
  }
  function B(N, T, x) {
    for (let u = 0; u < 4; u++)
      C(N[u], T[u], x);
  }
  function G(N, T) {
    const x = i(), u = i(), w = i();
    P(w, T[2]), a(x, T[0], w), a(u, T[1], w), L(N, u), N[31] ^= O(x) << 7;
  }
  function D(N, T, x) {
    b(N[0], c), b(N[1], o), b(N[2], o), b(N[3], c);
    for (let u = 255; u >= 0; --u) {
      const w = x[u / 8 | 0] >> (u & 7) & 1;
      B(N, T, w), U(T, N), U(N, N), B(N, T, w);
    }
  }
  function A(N, T) {
    const x = [i(), i(), i(), i()];
    b(x[0], d), b(x[1], f), b(x[2], o), a(x[3], d, f), D(N, x, T);
  }
  function W(N) {
    if (N.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const T = (0, r.hash)(N);
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const x = new Uint8Array(32), u = [i(), i(), i(), i()];
    A(u, T), G(x, u);
    const w = new Uint8Array(64);
    return w.set(N), w.set(x, 32), {
      publicKey: x,
      secretKey: w
    };
  }
  t.generateKeyPairFromSeed = W;
  function z(N) {
    const T = (0, e.randomBytes)(32, N), x = W(T);
    return (0, s.wipe)(T), x;
  }
  t.generateKeyPair = z;
  function $(N) {
    if (N.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(N.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = $;
  const k = new Float64Array([
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
  function M(N, T) {
    let x, u, w, H;
    for (u = 63; u >= 32; --u) {
      for (x = 0, w = u - 32, H = u - 12; w < H; ++w)
        T[w] += x - 16 * T[u] * k[w - (u - 32)], x = Math.floor((T[w] + 128) / 256), T[w] -= x * 256;
      T[w] += x, T[u] = 0;
    }
    for (x = 0, w = 0; w < 32; w++)
      T[w] += x - (T[31] >> 4) * k[w], x = T[w] >> 8, T[w] &= 255;
    for (w = 0; w < 32; w++)
      T[w] -= x * k[w];
    for (u = 0; u < 32; u++)
      T[u + 1] += T[u] >> 8, N[u] = T[u] & 255;
  }
  function q(N) {
    const T = new Float64Array(64);
    for (let x = 0; x < 64; x++)
      T[x] = N[x];
    for (let x = 0; x < 64; x++)
      N[x] = 0;
    M(N, T);
  }
  function oe(N, T) {
    const x = new Float64Array(64), u = [i(), i(), i(), i()], w = (0, r.hash)(N.subarray(0, 32));
    w[0] &= 248, w[31] &= 127, w[31] |= 64;
    const H = new Uint8Array(64);
    H.set(w.subarray(32), 32);
    const J = new r.SHA512();
    J.update(H.subarray(32)), J.update(T);
    const be = J.digest();
    J.clean(), q(be), A(u, be), G(H, u), J.reset(), J.update(H.subarray(0, 32)), J.update(N.subarray(32)), J.update(T);
    const xe = J.digest();
    q(xe);
    for (let we = 0; we < 32; we++)
      x[we] = be[we];
    for (let we = 0; we < 32; we++)
      for (let Ne = 0; Ne < 32; Ne++)
        x[we + Ne] += xe[we] * w[Ne];
    return M(H.subarray(32), x), H;
  }
  t.sign = oe;
  function K(N, T) {
    const x = i(), u = i(), w = i(), H = i(), J = i(), be = i(), xe = i();
    return b(N[2], o), v(N[1], T), p(w, N[1]), a(H, w, h), g(w, w, N[2]), E(H, N[2], H), p(J, H), p(be, J), a(xe, be, J), a(x, xe, w), a(x, x, H), R(x, x), a(x, x, w), a(x, x, H), a(x, x, H), a(N[0], x, H), p(u, N[0]), a(u, u, H), S(u, w) && a(N[0], N[0], y), p(u, N[0]), a(u, u, H), S(u, w) ? -1 : (O(N[0]) === T[31] >> 7 && g(N[0], c, N[0]), a(N[3], N[0], N[1]), 0);
  }
  function se(N, T, x) {
    const u = new Uint8Array(32), w = [i(), i(), i(), i()], H = [i(), i(), i(), i()];
    if (x.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(H, N))
      return !1;
    const J = new r.SHA512();
    J.update(x.subarray(0, 32)), J.update(N), J.update(T);
    const be = J.digest();
    return q(be), D(w, H, be), A(H, x.subarray(32)), U(w, H), G(u, w), !F(x, u);
  }
  t.verify = se;
  function X(N) {
    let T = [i(), i(), i(), i()];
    if (K(T, N))
      throw new Error("Ed25519: invalid public key");
    let x = i(), u = i(), w = T[1];
    E(x, o, w), g(u, o, w), P(u, u), a(x, x, u);
    let H = new Uint8Array(32);
    return L(H, x), H;
  }
  t.convertPublicKeyToX25519 = X;
  function ne(N) {
    const T = (0, r.hash)(N.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const x = new Uint8Array(T.subarray(0, 32));
    return (0, s.wipe)(T), x;
  }
  t.convertSecretKeyToX25519 = ne;
})(ro);
const _f = "EdDSA", wf = "JWT", Wc = ".", Zc = "base64url", Ef = "utf8", Sf = "utf8", Df = ":", xf = "did", If = "key", ya = "base58btc", Of = "z", Cf = "K36", Tf = 32;
function so(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Gc(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? so(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Rn(t, e) {
  e || (e = t.reduce((i, n) => i + n.length, 0));
  const r = Gc(e);
  let s = 0;
  for (const i of t)
    r.set(i, s), s += i.length;
  return so(r);
}
function Nf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), c = n.charCodeAt(0);
    if (r[c] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[c] = i;
  }
  var o = t.length, h = t.charAt(0), l = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var C = 0, L = 0, F = 0, S = _.length; F !== S && _[F] === 0; )
      F++, C++;
    for (var O = (S - F) * d + 1 >>> 0, v = new Uint8Array(O); F !== S; ) {
      for (var E = _[F], g = 0, a = O - 1; (E !== 0 || g < L) && a !== -1; a--, g++)
        E += 256 * v[a] >>> 0, v[a] = E % o >>> 0, E = E / o >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      L = g, F++;
    }
    for (var p = O - L; p !== O && v[p] === 0; )
      p++;
    for (var P = h.repeat(C); p < O; ++p)
      P += t.charAt(v[p]);
    return P;
  }
  function y(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var C = 0;
    if (_[C] !== " ") {
      for (var L = 0, F = 0; _[C] === h; )
        L++, C++;
      for (var S = (_.length - C) * l + 1 >>> 0, O = new Uint8Array(S); _[C]; ) {
        var v = r[_.charCodeAt(C)];
        if (v === 255)
          return;
        for (var E = 0, g = S - 1; (v !== 0 || E < F) && g !== -1; g--, E++)
          v += o * O[g] >>> 0, O[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        F = E, C++;
      }
      if (_[C] !== " ") {
        for (var a = S - F; a !== S && O[a] === 0; )
          a++;
        for (var p = new Uint8Array(L + (S - a)), P = L; a !== S; )
          p[P++] = O[a++];
        return p;
      }
    }
  }
  function b(_) {
    var C = y(_);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: y,
    decode: b
  };
}
var Af = Nf, Rf = Af;
const Pf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Lf = (t) => new TextEncoder().encode(t), Uf = (t) => new TextDecoder().decode(t);
class Ff {
  constructor(e, r, s) {
    this.name = e, this.prefix = r, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Mf {
  constructor(e, r, s) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s;
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
    return Yc(this, e);
  }
}
class $f {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Yc(this, e);
  }
  decode(e) {
    const r = e[0], s = this.decoders[r];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Yc = (t, e) => new $f({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class jf {
  constructor(e, r, s, i) {
    this.name = e, this.prefix = r, this.baseEncode = s, this.baseDecode = i, this.encoder = new Ff(e, r, s), this.decoder = new Mf(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ki = ({ name: t, prefix: e, encode: r, decode: s }) => new jf(t, e, r, s), Ws = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: s, decode: i } = Rf(r, e);
  return Ki({
    prefix: t,
    name: e,
    encode: s,
    decode: (n) => Pf(i(n))
  });
}, kf = (t, e, r, s) => {
  const i = {};
  for (let d = 0; d < e.length; ++d)
    i[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const c = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = i[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${s} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, c[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return c;
}, zf = (t, e, r) => {
  const s = e[e.length - 1] === "=", i = (1 << r) - 1;
  let n = "", c = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], c += 8; c > r; )
      c -= r, n += e[i & o >> c];
  if (c && (n += e[i & o << r - c]), s)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, ft = ({ name: t, prefix: e, bitsPerChar: r, alphabet: s }) => Ki({
  prefix: e,
  name: t,
  encode(i) {
    return zf(i, s, r);
  },
  decode(i) {
    return kf(i, s, r, t);
  }
}), qf = Ki({
  prefix: "\0",
  name: "identity",
  encode: (t) => Uf(t),
  decode: (t) => Lf(t)
}), Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: qf
}, Symbol.toStringTag, { value: "Module" })), Kf = ft({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Kf
}, Symbol.toStringTag, { value: "Module" })), Hf = ft({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Hf
}, Symbol.toStringTag, { value: "Module" })), Zf = Ws({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Zf
}, Symbol.toStringTag, { value: "Module" })), Yf = ft({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Jf = ft({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Yf,
  base16upper: Jf
}, Symbol.toStringTag, { value: "Module" })), Xf = ft({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), ep = ft({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), tp = ft({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), rp = ft({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), sp = ft({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), ip = ft({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), np = ft({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), op = ft({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), ap = ft({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Xf,
  base32hex: sp,
  base32hexpad: np,
  base32hexpadupper: op,
  base32hexupper: ip,
  base32pad: tp,
  base32padupper: rp,
  base32upper: ep,
  base32z: ap
}, Symbol.toStringTag, { value: "Module" })), up = Ws({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), lp = Ws({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: up,
  base36upper: lp
}, Symbol.toStringTag, { value: "Module" })), dp = Ws({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), fp = Ws({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: dp,
  base58flickr: fp
}, Symbol.toStringTag, { value: "Module" })), gp = ft({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), yp = ft({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), mp = ft({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), vp = ft({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: gp,
  base64pad: yp,
  base64url: mp,
  base64urlpad: vp
}, Symbol.toStringTag, { value: "Module" })), Jc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), _p = Jc.reduce((t, e, r) => (t[r] = e, t), []), wp = Jc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Ep(t) {
  return t.reduce((e, r) => (e += _p[r], e), "");
}
function Sp(t) {
  const e = [];
  for (const r of t) {
    const s = wp[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Dp = Ki({
  prefix: "🚀",
  name: "base256emoji",
  encode: Ep,
  decode: Sp
}), xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Dp
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ma = {
  ...Bf,
  ...Vf,
  ...Wf,
  ...Gf,
  ...Qf,
  ...cp,
  ...hp,
  ...pp,
  ...bp,
  ...xp
};
function Qc(t, e, r, s) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: s }
  };
}
const va = Qc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), dn = Qc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Gc(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Xc = {
  utf8: va,
  "utf-8": va,
  hex: ma.base16,
  latin1: dn,
  ascii: dn,
  binary: dn,
  ...ma
};
function Ot(t, e = "utf8") {
  const r = Xc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Rt(t, e = "utf8") {
  const r = Xc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? so(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function xi(t) {
  return Ot(Rt(Hs(t), Ef), Zc);
}
function eu(t) {
  const e = Rt(Cf, ya), r = Of + Ot(Rn([e, t]), ya);
  return [xf, If, r].join(Df);
}
function Ip(t) {
  return Ot(t, Zc);
}
function Op(t) {
  return Rt([xi(t.header), xi(t.payload)].join(Wc), Sf);
}
function Cp(t) {
  return [
    xi(t.header),
    xi(t.payload),
    Ip(t.signature)
  ].join(Wc);
}
function ba(t = ds.randomBytes(Tf)) {
  return ro.generateKeyPairFromSeed(t);
}
async function Tp(t, e, r, s, i = te.fromMiliseconds(Date.now())) {
  const n = { alg: _f, typ: wf }, c = eu(s.publicKey), o = i + r, h = { iss: c, sub: t, aud: e, iat: i, exp: o }, l = Op({ header: n, payload: h }), d = ro.sign(s.secretKey, l);
  return Cp({ header: n, payload: h, signature: d });
}
var io = {}, Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
var mt = le, Pn = Ft, Np = 20;
function Ap(t, e, r) {
  for (var s = 1634760805, i = 857760878, n = 2036477234, c = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], b = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], _ = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], C = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], L = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], S = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = s, v = i, E = n, g = c, a = o, p = h, P = l, R = d, U = f, B = y, G = b, D = _, A = C, W = L, z = F, $ = S, k = 0; k < Np; k += 2)
    O = O + a | 0, A ^= O, A = A >>> 16 | A << 16, U = U + A | 0, a ^= U, a = a >>> 20 | a << 12, v = v + p | 0, W ^= v, W = W >>> 16 | W << 16, B = B + W | 0, p ^= B, p = p >>> 20 | p << 12, E = E + P | 0, z ^= E, z = z >>> 16 | z << 16, G = G + z | 0, P ^= G, P = P >>> 20 | P << 12, g = g + R | 0, $ ^= g, $ = $ >>> 16 | $ << 16, D = D + $ | 0, R ^= D, R = R >>> 20 | R << 12, E = E + P | 0, z ^= E, z = z >>> 24 | z << 8, G = G + z | 0, P ^= G, P = P >>> 25 | P << 7, g = g + R | 0, $ ^= g, $ = $ >>> 24 | $ << 8, D = D + $ | 0, R ^= D, R = R >>> 25 | R << 7, v = v + p | 0, W ^= v, W = W >>> 24 | W << 8, B = B + W | 0, p ^= B, p = p >>> 25 | p << 7, O = O + a | 0, A ^= O, A = A >>> 24 | A << 8, U = U + A | 0, a ^= U, a = a >>> 25 | a << 7, O = O + p | 0, $ ^= O, $ = $ >>> 16 | $ << 16, G = G + $ | 0, p ^= G, p = p >>> 20 | p << 12, v = v + P | 0, A ^= v, A = A >>> 16 | A << 16, D = D + A | 0, P ^= D, P = P >>> 20 | P << 12, E = E + R | 0, W ^= E, W = W >>> 16 | W << 16, U = U + W | 0, R ^= U, R = R >>> 20 | R << 12, g = g + a | 0, z ^= g, z = z >>> 16 | z << 16, B = B + z | 0, a ^= B, a = a >>> 20 | a << 12, E = E + R | 0, W ^= E, W = W >>> 24 | W << 8, U = U + W | 0, R ^= U, R = R >>> 25 | R << 7, g = g + a | 0, z ^= g, z = z >>> 24 | z << 8, B = B + z | 0, a ^= B, a = a >>> 25 | a << 7, v = v + P | 0, A ^= v, A = A >>> 24 | A << 8, D = D + A | 0, P ^= D, P = P >>> 25 | P << 7, O = O + p | 0, $ ^= O, $ = $ >>> 24 | $ << 8, G = G + $ | 0, p ^= G, p = p >>> 25 | p << 7;
  mt.writeUint32LE(O + s | 0, t, 0), mt.writeUint32LE(v + i | 0, t, 4), mt.writeUint32LE(E + n | 0, t, 8), mt.writeUint32LE(g + c | 0, t, 12), mt.writeUint32LE(a + o | 0, t, 16), mt.writeUint32LE(p + h | 0, t, 20), mt.writeUint32LE(P + l | 0, t, 24), mt.writeUint32LE(R + d | 0, t, 28), mt.writeUint32LE(U + f | 0, t, 32), mt.writeUint32LE(B + y | 0, t, 36), mt.writeUint32LE(G + b | 0, t, 40), mt.writeUint32LE(D + _ | 0, t, 44), mt.writeUint32LE(A + C | 0, t, 48), mt.writeUint32LE(W + L | 0, t, 52), mt.writeUint32LE(z + F | 0, t, 56), mt.writeUint32LE($ + S | 0, t, 60);
}
function tu(t, e, r, s, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, c;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    n = new Uint8Array(16), c = n.length - e.length, n.set(e, c);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    n = e, c = i;
  }
  for (var o = new Uint8Array(64), h = 0; h < r.length; h += 64) {
    Ap(o, n, t);
    for (var l = h; l < h + 64 && l < r.length; l++)
      s[l] = r[l] ^ o[l - h];
    Pp(n, 0, c);
  }
  return Pn.wipe(o), i === 0 && Pn.wipe(n), s;
}
Vi.streamXOR = tu;
function Rp(t, e, r, s) {
  return s === void 0 && (s = 0), Pn.wipe(r), tu(t, e, r, r, s);
}
Vi.stream = Rp;
function Pp(t, e, r) {
  for (var s = 1; r--; )
    s = s + (t[e] & 255) | 0, t[e] = s & 255, s >>>= 8, e++;
  if (s > 0)
    throw new Error("ChaCha: counter overflow");
}
var ru = {}, Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
function Lp(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Tr.select = Lp;
function Up(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Tr.lessOrEqual = Up;
function su(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, s = 0; s < t.length; s++)
    r |= t[s] ^ e[s];
  return 1 & r - 1 >>> 8;
}
Tr.compare = su;
function Fp(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : su(t, e) !== 0;
}
Tr.equal = Fp;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Tr, r = Ft;
  t.DIGEST_LENGTH = 16;
  var s = (
    /** @class */
    function() {
      function c(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var h = o[0] | o[1] << 8;
        this._r[0] = h & 8191;
        var l = o[2] | o[3] << 8;
        this._r[1] = (h >>> 13 | l << 3) & 8191;
        var d = o[4] | o[5] << 8;
        this._r[2] = (l >>> 10 | d << 6) & 7939;
        var f = o[6] | o[7] << 8;
        this._r[3] = (d >>> 7 | f << 9) & 8191;
        var y = o[8] | o[9] << 8;
        this._r[4] = (f >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var b = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | b << 2) & 8191;
        var _ = o[12] | o[13] << 8;
        this._r[7] = (b >>> 11 | _ << 5) & 8065;
        var C = o[14] | o[15] << 8;
        this._r[8] = (_ >>> 8 | C << 8) & 8191, this._r[9] = C >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return c.prototype._blocks = function(o, h, l) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], y = this._h[1], b = this._h[2], _ = this._h[3], C = this._h[4], L = this._h[5], F = this._h[6], S = this._h[7], O = this._h[8], v = this._h[9], E = this._r[0], g = this._r[1], a = this._r[2], p = this._r[3], P = this._r[4], R = this._r[5], U = this._r[6], B = this._r[7], G = this._r[8], D = this._r[9]; l >= 16; ) {
          var A = o[h + 0] | o[h + 1] << 8;
          f += A & 8191;
          var W = o[h + 2] | o[h + 3] << 8;
          y += (A >>> 13 | W << 3) & 8191;
          var z = o[h + 4] | o[h + 5] << 8;
          b += (W >>> 10 | z << 6) & 8191;
          var $ = o[h + 6] | o[h + 7] << 8;
          _ += (z >>> 7 | $ << 9) & 8191;
          var k = o[h + 8] | o[h + 9] << 8;
          C += ($ >>> 4 | k << 12) & 8191, L += k >>> 1 & 8191;
          var M = o[h + 10] | o[h + 11] << 8;
          F += (k >>> 14 | M << 2) & 8191;
          var q = o[h + 12] | o[h + 13] << 8;
          S += (M >>> 11 | q << 5) & 8191;
          var oe = o[h + 14] | o[h + 15] << 8;
          O += (q >>> 8 | oe << 8) & 8191, v += oe >>> 5 | d;
          var K = 0, se = K;
          se += f * E, se += y * (5 * D), se += b * (5 * G), se += _ * (5 * B), se += C * (5 * U), K = se >>> 13, se &= 8191, se += L * (5 * R), se += F * (5 * P), se += S * (5 * p), se += O * (5 * a), se += v * (5 * g), K += se >>> 13, se &= 8191;
          var X = K;
          X += f * g, X += y * E, X += b * (5 * D), X += _ * (5 * G), X += C * (5 * B), K = X >>> 13, X &= 8191, X += L * (5 * U), X += F * (5 * R), X += S * (5 * P), X += O * (5 * p), X += v * (5 * a), K += X >>> 13, X &= 8191;
          var ne = K;
          ne += f * a, ne += y * g, ne += b * E, ne += _ * (5 * D), ne += C * (5 * G), K = ne >>> 13, ne &= 8191, ne += L * (5 * B), ne += F * (5 * U), ne += S * (5 * R), ne += O * (5 * P), ne += v * (5 * p), K += ne >>> 13, ne &= 8191;
          var N = K;
          N += f * p, N += y * a, N += b * g, N += _ * E, N += C * (5 * D), K = N >>> 13, N &= 8191, N += L * (5 * G), N += F * (5 * B), N += S * (5 * U), N += O * (5 * R), N += v * (5 * P), K += N >>> 13, N &= 8191;
          var T = K;
          T += f * P, T += y * p, T += b * a, T += _ * g, T += C * E, K = T >>> 13, T &= 8191, T += L * (5 * D), T += F * (5 * G), T += S * (5 * B), T += O * (5 * U), T += v * (5 * R), K += T >>> 13, T &= 8191;
          var x = K;
          x += f * R, x += y * P, x += b * p, x += _ * a, x += C * g, K = x >>> 13, x &= 8191, x += L * E, x += F * (5 * D), x += S * (5 * G), x += O * (5 * B), x += v * (5 * U), K += x >>> 13, x &= 8191;
          var u = K;
          u += f * U, u += y * R, u += b * P, u += _ * p, u += C * a, K = u >>> 13, u &= 8191, u += L * g, u += F * E, u += S * (5 * D), u += O * (5 * G), u += v * (5 * B), K += u >>> 13, u &= 8191;
          var w = K;
          w += f * B, w += y * U, w += b * R, w += _ * P, w += C * p, K = w >>> 13, w &= 8191, w += L * a, w += F * g, w += S * E, w += O * (5 * D), w += v * (5 * G), K += w >>> 13, w &= 8191;
          var H = K;
          H += f * G, H += y * B, H += b * U, H += _ * R, H += C * P, K = H >>> 13, H &= 8191, H += L * p, H += F * a, H += S * g, H += O * E, H += v * (5 * D), K += H >>> 13, H &= 8191;
          var J = K;
          J += f * D, J += y * G, J += b * B, J += _ * U, J += C * R, K = J >>> 13, J &= 8191, J += L * P, J += F * p, J += S * a, J += O * g, J += v * E, K += J >>> 13, J &= 8191, K = (K << 2) + K | 0, K = K + se | 0, se = K & 8191, K = K >>> 13, X += K, f = se, y = X, b = ne, _ = N, C = T, L = x, F = u, S = w, O = H, v = J, h += 16, l -= 16;
        }
        this._h[0] = f, this._h[1] = y, this._h[2] = b, this._h[3] = _, this._h[4] = C, this._h[5] = L, this._h[6] = F, this._h[7] = S, this._h[8] = O, this._h[9] = v;
      }, c.prototype.finish = function(o, h) {
        h === void 0 && (h = 0);
        var l = new Uint16Array(10), d, f, y, b;
        if (this._leftover) {
          for (b = this._leftover, this._buffer[b++] = 1; b < 16; b++)
            this._buffer[b] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, b = 2; b < 10; b++)
          this._h[b] += d, d = this._h[b] >>> 13, this._h[b] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, l[0] = this._h[0] + 5, d = l[0] >>> 13, l[0] &= 8191, b = 1; b < 10; b++)
          l[b] = this._h[b] + d, d = l[b] >>> 13, l[b] &= 8191;
        for (l[9] -= 8192, f = (d ^ 1) - 1, b = 0; b < 10; b++)
          l[b] &= f;
        for (f = ~f, b = 0; b < 10; b++)
          this._h[b] = this._h[b] & f | l[b];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, b = 1; b < 8; b++)
          y = (this._h[b] + this._pad[b] | 0) + (y >>> 16) | 0, this._h[b] = y & 65535;
        return o[h + 0] = this._h[0] >>> 0, o[h + 1] = this._h[0] >>> 8, o[h + 2] = this._h[1] >>> 0, o[h + 3] = this._h[1] >>> 8, o[h + 4] = this._h[2] >>> 0, o[h + 5] = this._h[2] >>> 8, o[h + 6] = this._h[3] >>> 0, o[h + 7] = this._h[3] >>> 8, o[h + 8] = this._h[4] >>> 0, o[h + 9] = this._h[4] >>> 8, o[h + 10] = this._h[5] >>> 0, o[h + 11] = this._h[5] >>> 8, o[h + 12] = this._h[6] >>> 0, o[h + 13] = this._h[6] >>> 8, o[h + 14] = this._h[7] >>> 0, o[h + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, c.prototype.update = function(o) {
        var h = 0, l = o.length, d;
        if (this._leftover) {
          d = 16 - this._leftover, d > l && (d = l);
          for (var f = 0; f < d; f++)
            this._buffer[this._leftover + f] = o[h + f];
          if (l -= d, h += d, this._leftover += d, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (d = l - l % 16, this._blocks(o, h, d), h += d, l -= d), l) {
          for (var f = 0; f < l; f++)
            this._buffer[this._leftover + f] = o[h + f];
          this._leftover += l;
        }
        return this;
      }, c.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var o = new Uint8Array(16);
        return this.finish(o), o;
      }, c.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, c;
    }()
  );
  t.Poly1305 = s;
  function i(c, o) {
    var h = new s(c);
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.oneTimeAuth = i;
  function n(c, o) {
    return c.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(c, o);
  }
  t.equal = n;
})(ru);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Vi, r = ru, s = Ft, i = le, n = Tr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var c = new Uint8Array(16), o = (
    /** @class */
    function() {
      function h(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return h.prototype.seal = function(l, d, f, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var b = new Uint8Array(16);
        b.set(l, b.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, b, _, 4);
        var C = d.length + this.tagLength, L;
        if (y) {
          if (y.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = y;
        } else
          L = new Uint8Array(C);
        return e.streamXOR(this._key, b, d, L, 4), this._authenticate(L.subarray(L.length - this.tagLength, L.length), _, L.subarray(0, L.length - this.tagLength), f), s.wipe(b), L;
      }, h.prototype.open = function(l, d, f, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var b = new Uint8Array(16);
        b.set(l, b.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, b, _, 4);
        var C = new Uint8Array(this.tagLength);
        if (this._authenticate(C, _, d.subarray(0, d.length - this.tagLength), f), !n.equal(C, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var L = d.length - this.tagLength, F;
        if (y) {
          if (y.length !== L)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F = y;
        } else
          F = new Uint8Array(L);
        return e.streamXOR(this._key, b, d.subarray(0, d.length - this.tagLength), F, 4), s.wipe(b), F;
      }, h.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, h.prototype._authenticate = function(l, d, f, y) {
        var b = new r.Poly1305(d);
        y && (b.update(y), y.length % 16 > 0 && b.update(c.subarray(y.length % 16))), b.update(f), f.length % 16 > 0 && b.update(c.subarray(f.length % 16));
        var _ = new Uint8Array(8);
        y && i.writeUint64LE(y.length, _), b.update(_), i.writeUint64LE(f.length, _), b.update(_);
        for (var C = b.digest(), L = 0; L < C.length; L++)
          l[L] = C[L];
        b.clean(), s.wipe(C), s.wipe(_);
      }, h;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(io);
var iu = {}, Zs = {}, no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
function Mp(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
no.isSerializableHash = Mp;
Object.defineProperty(Zs, "__esModule", { value: !0 });
var tr = no, $p = Tr, jp = Ft, nu = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var s = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(s).clean() : s.set(r);
      for (var i = 0; i < s.length; i++)
        s[i] ^= 54;
      this._inner.update(s);
      for (var i = 0; i < s.length; i++)
        s[i] ^= 106;
      this._outer.update(s), tr.isSerializableHash(this._inner) && tr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), jp.wipe(s);
    }
    return t.prototype.reset = function() {
      if (!tr.isSerializableHash(this._inner) || !tr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      tr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), tr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!tr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!tr.isSerializableHash(this._inner) || !tr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!tr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Zs.HMAC = nu;
function kp(t, e, r) {
  var s = new nu(t, e);
  s.update(r);
  var i = s.digest();
  return s.clean(), i;
}
Zs.hmac = kp;
Zs.equal = $p.equal;
Object.defineProperty(iu, "__esModule", { value: !0 });
var _a = Zs, wa = Ft, zp = (
  /** @class */
  function() {
    function t(e, r, s, i) {
      s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var n = _a.hmac(this._hash, s, r);
      this._hmac = new _a.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), s = 0; s < r.length; s++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[s] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), wa.wipe(this._buffer), wa.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), qp = iu.HKDF = zp, Hi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ft;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var s = (
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
      }, o.prototype.update = function(h, l) {
        if (l === void 0 && (l = h.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = h[d++], l--;
          this._bufferLength === this.blockSize && (n(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (d = n(this._temp, this._state, h, d, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = h[d++], l--;
        return this;
      }, o.prototype.finish = function(h) {
        if (!this._finished) {
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, y = l << 3, b = l % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var _ = d + 1; _ < b - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, b - 8), e.writeUint32BE(y, this._buffer, b - 4), n(this._temp, this._state, this._buffer, 0, b), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 4; _++)
          e.writeUint32BE(this._state[_], h, _ * 4);
        return this;
      }, o.prototype.digest = function() {
        var h = new Uint8Array(this.digestLength);
        return this.finish(h), h;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(h) {
        return this._state.set(h.state), this._bufferLength = h.bufferLength, h.buffer && this._buffer.set(h.buffer), this._bytesHashed = h.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(h) {
        r.wipe(h.state), h.buffer && r.wipe(h.buffer), h.bufferLength = 0, h.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA256 = s;
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
  function n(o, h, l, d, f) {
    for (; f >= 64; ) {
      for (var y = h[0], b = h[1], _ = h[2], C = h[3], L = h[4], F = h[5], S = h[6], O = h[7], v = 0; v < 16; v++) {
        var E = d + v * 4;
        o[v] = e.readUint32BE(l, E);
      }
      for (var v = 16; v < 64; v++) {
        var g = o[v - 2], a = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = o[v - 15];
        var p = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        o[v] = (a + o[v - 7] | 0) + (p + o[v - 16] | 0);
      }
      for (var v = 0; v < 64; v++) {
        var a = (((L >>> 6 | L << 26) ^ (L >>> 11 | L << 21) ^ (L >>> 25 | L << 7)) + (L & F ^ ~L & S) | 0) + (O + (i[v] + o[v] | 0) | 0) | 0, p = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & b ^ y & _ ^ b & _) | 0;
        O = S, S = F, F = L, L = C + a | 0, C = _, _ = b, b = y, y = a + p | 0;
      }
      h[0] += y, h[1] += b, h[2] += _, h[3] += C, h[4] += L, h[5] += F, h[6] += S, h[7] += O, d += 64, f -= 64;
    }
    return d;
  }
  function c(o) {
    var h = new s();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = c;
})(Hi);
var oo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = ds, r = Ft;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function s(v) {
    const E = new Float64Array(16);
    if (v)
      for (let g = 0; g < v.length; g++)
        E[g] = v[g];
    return E;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const n = s([56129, 1]);
  function c(v) {
    let E = 1;
    for (let g = 0; g < 16; g++) {
      let a = v[g] + E + 65535;
      E = Math.floor(a / 65536), v[g] = a - E * 65536;
    }
    v[0] += E - 1 + 37 * (E - 1);
  }
  function o(v, E, g) {
    const a = ~(g - 1);
    for (let p = 0; p < 16; p++) {
      const P = a & (v[p] ^ E[p]);
      v[p] ^= P, E[p] ^= P;
    }
  }
  function h(v, E) {
    const g = s(), a = s();
    for (let p = 0; p < 16; p++)
      a[p] = E[p];
    c(a), c(a), c(a);
    for (let p = 0; p < 2; p++) {
      g[0] = a[0] - 65517;
      for (let R = 1; R < 15; R++)
        g[R] = a[R] - 65535 - (g[R - 1] >> 16 & 1), g[R - 1] &= 65535;
      g[15] = a[15] - 32767 - (g[14] >> 16 & 1);
      const P = g[15] >> 16 & 1;
      g[14] &= 65535, o(a, g, 1 - P);
    }
    for (let p = 0; p < 16; p++)
      v[2 * p] = a[p] & 255, v[2 * p + 1] = a[p] >> 8;
  }
  function l(v, E) {
    for (let g = 0; g < 16; g++)
      v[g] = E[2 * g] + (E[2 * g + 1] << 8);
    v[15] &= 32767;
  }
  function d(v, E, g) {
    for (let a = 0; a < 16; a++)
      v[a] = E[a] + g[a];
  }
  function f(v, E, g) {
    for (let a = 0; a < 16; a++)
      v[a] = E[a] - g[a];
  }
  function y(v, E, g) {
    let a, p, P = 0, R = 0, U = 0, B = 0, G = 0, D = 0, A = 0, W = 0, z = 0, $ = 0, k = 0, M = 0, q = 0, oe = 0, K = 0, se = 0, X = 0, ne = 0, N = 0, T = 0, x = 0, u = 0, w = 0, H = 0, J = 0, be = 0, xe = 0, we = 0, Ne = 0, Ve = 0, ze = 0, De = g[0], Ee = g[1], _e = g[2], me = g[3], ye = g[4], pe = g[5], fe = g[6], ce = g[7], ve = g[8], Se = g[9], ue = g[10], Ie = g[11], Ce = g[12], Re = g[13], Pe = g[14], Ae = g[15];
    a = E[0], P += a * De, R += a * Ee, U += a * _e, B += a * me, G += a * ye, D += a * pe, A += a * fe, W += a * ce, z += a * ve, $ += a * Se, k += a * ue, M += a * Ie, q += a * Ce, oe += a * Re, K += a * Pe, se += a * Ae, a = E[1], R += a * De, U += a * Ee, B += a * _e, G += a * me, D += a * ye, A += a * pe, W += a * fe, z += a * ce, $ += a * ve, k += a * Se, M += a * ue, q += a * Ie, oe += a * Ce, K += a * Re, se += a * Pe, X += a * Ae, a = E[2], U += a * De, B += a * Ee, G += a * _e, D += a * me, A += a * ye, W += a * pe, z += a * fe, $ += a * ce, k += a * ve, M += a * Se, q += a * ue, oe += a * Ie, K += a * Ce, se += a * Re, X += a * Pe, ne += a * Ae, a = E[3], B += a * De, G += a * Ee, D += a * _e, A += a * me, W += a * ye, z += a * pe, $ += a * fe, k += a * ce, M += a * ve, q += a * Se, oe += a * ue, K += a * Ie, se += a * Ce, X += a * Re, ne += a * Pe, N += a * Ae, a = E[4], G += a * De, D += a * Ee, A += a * _e, W += a * me, z += a * ye, $ += a * pe, k += a * fe, M += a * ce, q += a * ve, oe += a * Se, K += a * ue, se += a * Ie, X += a * Ce, ne += a * Re, N += a * Pe, T += a * Ae, a = E[5], D += a * De, A += a * Ee, W += a * _e, z += a * me, $ += a * ye, k += a * pe, M += a * fe, q += a * ce, oe += a * ve, K += a * Se, se += a * ue, X += a * Ie, ne += a * Ce, N += a * Re, T += a * Pe, x += a * Ae, a = E[6], A += a * De, W += a * Ee, z += a * _e, $ += a * me, k += a * ye, M += a * pe, q += a * fe, oe += a * ce, K += a * ve, se += a * Se, X += a * ue, ne += a * Ie, N += a * Ce, T += a * Re, x += a * Pe, u += a * Ae, a = E[7], W += a * De, z += a * Ee, $ += a * _e, k += a * me, M += a * ye, q += a * pe, oe += a * fe, K += a * ce, se += a * ve, X += a * Se, ne += a * ue, N += a * Ie, T += a * Ce, x += a * Re, u += a * Pe, w += a * Ae, a = E[8], z += a * De, $ += a * Ee, k += a * _e, M += a * me, q += a * ye, oe += a * pe, K += a * fe, se += a * ce, X += a * ve, ne += a * Se, N += a * ue, T += a * Ie, x += a * Ce, u += a * Re, w += a * Pe, H += a * Ae, a = E[9], $ += a * De, k += a * Ee, M += a * _e, q += a * me, oe += a * ye, K += a * pe, se += a * fe, X += a * ce, ne += a * ve, N += a * Se, T += a * ue, x += a * Ie, u += a * Ce, w += a * Re, H += a * Pe, J += a * Ae, a = E[10], k += a * De, M += a * Ee, q += a * _e, oe += a * me, K += a * ye, se += a * pe, X += a * fe, ne += a * ce, N += a * ve, T += a * Se, x += a * ue, u += a * Ie, w += a * Ce, H += a * Re, J += a * Pe, be += a * Ae, a = E[11], M += a * De, q += a * Ee, oe += a * _e, K += a * me, se += a * ye, X += a * pe, ne += a * fe, N += a * ce, T += a * ve, x += a * Se, u += a * ue, w += a * Ie, H += a * Ce, J += a * Re, be += a * Pe, xe += a * Ae, a = E[12], q += a * De, oe += a * Ee, K += a * _e, se += a * me, X += a * ye, ne += a * pe, N += a * fe, T += a * ce, x += a * ve, u += a * Se, w += a * ue, H += a * Ie, J += a * Ce, be += a * Re, xe += a * Pe, we += a * Ae, a = E[13], oe += a * De, K += a * Ee, se += a * _e, X += a * me, ne += a * ye, N += a * pe, T += a * fe, x += a * ce, u += a * ve, w += a * Se, H += a * ue, J += a * Ie, be += a * Ce, xe += a * Re, we += a * Pe, Ne += a * Ae, a = E[14], K += a * De, se += a * Ee, X += a * _e, ne += a * me, N += a * ye, T += a * pe, x += a * fe, u += a * ce, w += a * ve, H += a * Se, J += a * ue, be += a * Ie, xe += a * Ce, we += a * Re, Ne += a * Pe, Ve += a * Ae, a = E[15], se += a * De, X += a * Ee, ne += a * _e, N += a * me, T += a * ye, x += a * pe, u += a * fe, w += a * ce, H += a * ve, J += a * Se, be += a * ue, xe += a * Ie, we += a * Ce, Ne += a * Re, Ve += a * Pe, ze += a * Ae, P += 38 * X, R += 38 * ne, U += 38 * N, B += 38 * T, G += 38 * x, D += 38 * u, A += 38 * w, W += 38 * H, z += 38 * J, $ += 38 * be, k += 38 * xe, M += 38 * we, q += 38 * Ne, oe += 38 * Ve, K += 38 * ze, p = 1, a = P + p + 65535, p = Math.floor(a / 65536), P = a - p * 65536, a = R + p + 65535, p = Math.floor(a / 65536), R = a - p * 65536, a = U + p + 65535, p = Math.floor(a / 65536), U = a - p * 65536, a = B + p + 65535, p = Math.floor(a / 65536), B = a - p * 65536, a = G + p + 65535, p = Math.floor(a / 65536), G = a - p * 65536, a = D + p + 65535, p = Math.floor(a / 65536), D = a - p * 65536, a = A + p + 65535, p = Math.floor(a / 65536), A = a - p * 65536, a = W + p + 65535, p = Math.floor(a / 65536), W = a - p * 65536, a = z + p + 65535, p = Math.floor(a / 65536), z = a - p * 65536, a = $ + p + 65535, p = Math.floor(a / 65536), $ = a - p * 65536, a = k + p + 65535, p = Math.floor(a / 65536), k = a - p * 65536, a = M + p + 65535, p = Math.floor(a / 65536), M = a - p * 65536, a = q + p + 65535, p = Math.floor(a / 65536), q = a - p * 65536, a = oe + p + 65535, p = Math.floor(a / 65536), oe = a - p * 65536, a = K + p + 65535, p = Math.floor(a / 65536), K = a - p * 65536, a = se + p + 65535, p = Math.floor(a / 65536), se = a - p * 65536, P += p - 1 + 37 * (p - 1), p = 1, a = P + p + 65535, p = Math.floor(a / 65536), P = a - p * 65536, a = R + p + 65535, p = Math.floor(a / 65536), R = a - p * 65536, a = U + p + 65535, p = Math.floor(a / 65536), U = a - p * 65536, a = B + p + 65535, p = Math.floor(a / 65536), B = a - p * 65536, a = G + p + 65535, p = Math.floor(a / 65536), G = a - p * 65536, a = D + p + 65535, p = Math.floor(a / 65536), D = a - p * 65536, a = A + p + 65535, p = Math.floor(a / 65536), A = a - p * 65536, a = W + p + 65535, p = Math.floor(a / 65536), W = a - p * 65536, a = z + p + 65535, p = Math.floor(a / 65536), z = a - p * 65536, a = $ + p + 65535, p = Math.floor(a / 65536), $ = a - p * 65536, a = k + p + 65535, p = Math.floor(a / 65536), k = a - p * 65536, a = M + p + 65535, p = Math.floor(a / 65536), M = a - p * 65536, a = q + p + 65535, p = Math.floor(a / 65536), q = a - p * 65536, a = oe + p + 65535, p = Math.floor(a / 65536), oe = a - p * 65536, a = K + p + 65535, p = Math.floor(a / 65536), K = a - p * 65536, a = se + p + 65535, p = Math.floor(a / 65536), se = a - p * 65536, P += p - 1 + 37 * (p - 1), v[0] = P, v[1] = R, v[2] = U, v[3] = B, v[4] = G, v[5] = D, v[6] = A, v[7] = W, v[8] = z, v[9] = $, v[10] = k, v[11] = M, v[12] = q, v[13] = oe, v[14] = K, v[15] = se;
  }
  function b(v, E) {
    y(v, E, E);
  }
  function _(v, E) {
    const g = s();
    for (let a = 0; a < 16; a++)
      g[a] = E[a];
    for (let a = 253; a >= 0; a--)
      b(g, g), a !== 2 && a !== 4 && y(g, g, E);
    for (let a = 0; a < 16; a++)
      v[a] = g[a];
  }
  function C(v, E) {
    const g = new Uint8Array(32), a = new Float64Array(80), p = s(), P = s(), R = s(), U = s(), B = s(), G = s();
    for (let z = 0; z < 31; z++)
      g[z] = v[z];
    g[31] = v[31] & 127 | 64, g[0] &= 248, l(a, E);
    for (let z = 0; z < 16; z++)
      P[z] = a[z];
    p[0] = U[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = g[z >>> 3] >>> (z & 7) & 1;
      o(p, P, $), o(R, U, $), d(B, p, R), f(p, p, R), d(R, P, U), f(P, P, U), b(U, B), b(G, p), y(p, R, p), y(R, P, B), d(B, p, R), f(p, p, R), b(P, p), f(R, U, G), y(p, R, n), d(p, p, U), y(R, R, p), y(p, U, G), y(U, P, a), b(P, B), o(p, P, $), o(R, U, $);
    }
    for (let z = 0; z < 16; z++)
      a[z + 16] = p[z], a[z + 32] = R[z], a[z + 48] = P[z], a[z + 64] = U[z];
    const D = a.subarray(32), A = a.subarray(16);
    _(D, D), y(A, A, D);
    const W = new Uint8Array(32);
    return h(W, A), W;
  }
  t.scalarMult = C;
  function L(v) {
    return C(v, i);
  }
  t.scalarMultBase = L;
  function F(v) {
    if (v.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const E = new Uint8Array(v);
    return {
      publicKey: L(E),
      secretKey: E
    };
  }
  t.generateKeyPairFromSeed = F;
  function S(v) {
    const E = (0, e.randomBytes)(32, v), g = F(E);
    return (0, r.wipe)(E), g;
  }
  t.generateKeyPair = S;
  function O(v, E, g = !1) {
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (E.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const a = C(v, E);
    if (g) {
      let p = 0;
      for (let P = 0; P < a.length; P++)
        p |= a[P];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return a;
  }
  t.sharedKey = O;
})(oo);
var Ea = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var s = 0, i = e.length, n; s < i; s++)
      (n || !(s in e)) && (n || (n = Array.prototype.slice.call(e, 0, s)), n[s] = e[s]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Bp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, s) {
      this.name = e, this.version = r, this.os = s, this.type = "browser";
    }
    return t;
  }()
), Kp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Vp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, s, i) {
      this.name = e, this.version = r, this.os = s, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Hp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Wp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Zp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Gp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Sa = 3, Yp = [
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
  ["searchbot", Zp]
], Da = [
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
function Jp(t) {
  return t ? xa(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Wp() : typeof navigator < "u" ? xa(navigator.userAgent) : eg();
}
function Qp(t) {
  return t !== "" && Yp.reduce(function(e, r) {
    var s = r[0], i = r[1];
    if (e)
      return e;
    var n = i.exec(t);
    return !!n && [s, n];
  }, !1);
}
function xa(t) {
  var e = Qp(t);
  if (!e)
    return null;
  var r = e[0], s = e[1];
  if (r === "searchbot")
    return new Hp();
  var i = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Sa && (i = Ea(Ea([], i, !0), tg(Sa - i.length), !0)) : i = [];
  var n = i.join("."), c = Xp(t), o = Gp.exec(t);
  return o && o[1] ? new Vp(r, n, c, o[1]) : new Bp(r, n, c);
}
function Xp(t) {
  for (var e = 0, r = Da.length; e < r; e++) {
    var s = Da[e], i = s[0], n = s[1], c = n.exec(t);
    if (c)
      return i;
  }
  return null;
}
function eg() {
  var t = typeof process < "u" && process.version;
  return t ? new Kp(process.version.slice(1)) : null;
}
function tg(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.getLocalStorage = Ue.getLocalStorageOrThrow = Ue.getCrypto = Ue.getCryptoOrThrow = au = Ue.getLocation = Ue.getLocationOrThrow = ao = Ue.getNavigator = Ue.getNavigatorOrThrow = ou = Ue.getDocument = Ue.getDocumentOrThrow = Ue.getFromWindowOrThrow = Ue.getFromWindow = void 0;
function Yr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Ue.getFromWindow = Yr;
function fs(t) {
  const e = Yr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Ue.getFromWindowOrThrow = fs;
function rg() {
  return fs("document");
}
Ue.getDocumentOrThrow = rg;
function sg() {
  return Yr("document");
}
var ou = Ue.getDocument = sg;
function ig() {
  return fs("navigator");
}
Ue.getNavigatorOrThrow = ig;
function ng() {
  return Yr("navigator");
}
var ao = Ue.getNavigator = ng;
function og() {
  return fs("location");
}
Ue.getLocationOrThrow = og;
function ag() {
  return Yr("location");
}
var au = Ue.getLocation = ag;
function cg() {
  return fs("crypto");
}
Ue.getCryptoOrThrow = cg;
function ug() {
  return Yr("crypto");
}
Ue.getCrypto = ug;
function lg() {
  return fs("localStorage");
}
Ue.getLocalStorageOrThrow = lg;
function hg() {
  return Yr("localStorage");
}
Ue.getLocalStorage = hg;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
var cu = co.getWindowMetadata = void 0;
const Ia = Ue;
function dg() {
  let t, e;
  try {
    t = Ia.getDocumentOrThrow(), e = Ia.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const f = t.getElementsByTagName("link"), y = [];
    for (let b = 0; b < f.length; b++) {
      const _ = f[b], C = _.getAttribute("rel");
      if (C && C.toLowerCase().indexOf("icon") > -1) {
        const L = _.getAttribute("href");
        if (L)
          if (L.toLowerCase().indexOf("https:") === -1 && L.toLowerCase().indexOf("http:") === -1 && L.indexOf("//") !== 0) {
            let F = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0)
              F += L;
            else {
              const S = e.pathname.split("/");
              S.pop();
              const O = S.join("/");
              F += O + "/" + L;
            }
            y.push(F);
          } else if (L.indexOf("//") === 0) {
            const F = e.protocol + L;
            y.push(F);
          } else
            y.push(L);
      }
    }
    return y;
  }
  function s(...f) {
    const y = t.getElementsByTagName("meta");
    for (let b = 0; b < y.length; b++) {
      const _ = y[b], C = ["itemprop", "property", "name"].map((L) => _.getAttribute(L)).filter((L) => L ? f.includes(L) : !1);
      if (C.length && C) {
        const L = _.getAttribute("content");
        if (L)
          return L;
      }
    }
    return "";
  }
  function i() {
    let f = s("name", "og:site_name", "og:title", "twitter:title");
    return f || (f = t.title), f;
  }
  function n() {
    return s("description", "og:description", "twitter:description", "keywords");
  }
  const c = i(), o = n(), h = e.origin, l = r();
  return {
    description: o,
    url: h,
    icons: l,
    name: c
  };
}
cu = co.getWindowMetadata = dg;
var As = {}, fg = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), uu = "%[a-f0-9]{2}", Oa = new RegExp("(" + uu + ")|([^%]+?)", "gi"), Ca = new RegExp("(" + uu + ")+", "gi");
function Ln(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), s = t.slice(e);
  return Array.prototype.concat.call([], Ln(r), Ln(s));
}
function pg(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Oa) || [], r = 1; r < e.length; r++)
      t = Ln(e, r).join(""), e = t.match(Oa) || [];
    return t;
  }
}
function gg(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Ca.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var s = pg(r[0]);
      s !== r[0] && (e[r[0]] = s);
    }
    r = Ca.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), n = 0; n < i.length; n++) {
    var c = i[n];
    t = t.replace(new RegExp(c, "g"), e[c]);
  }
  return t;
}
var yg = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return gg(t);
  }
}, mg = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, vg = function(t, e) {
  for (var r = {}, s = Object.keys(t), i = Array.isArray(e), n = 0; n < s.length; n++) {
    var c = s[n], o = t[c];
    (i ? e.indexOf(c) !== -1 : e(c, o, t)) && (r[c] = o);
  }
  return r;
};
(function(t) {
  const e = fg, r = yg, s = mg, i = vg, n = (S) => S == null, c = Symbol("encodeFragmentIdentifier");
  function o(S) {
    switch (S.arrayFormat) {
      case "index":
        return (O) => (v, E) => {
          const g = v.length;
          return E === void 0 || S.skipNull && E === null || S.skipEmptyString && E === "" ? v : E === null ? [...v, [d(O, S), "[", g, "]"].join("")] : [
            ...v,
            [d(O, S), "[", d(g, S), "]=", d(E, S)].join("")
          ];
        };
      case "bracket":
        return (O) => (v, E) => E === void 0 || S.skipNull && E === null || S.skipEmptyString && E === "" ? v : E === null ? [...v, [d(O, S), "[]"].join("")] : [...v, [d(O, S), "[]=", d(E, S)].join("")];
      case "colon-list-separator":
        return (O) => (v, E) => E === void 0 || S.skipNull && E === null || S.skipEmptyString && E === "" ? v : E === null ? [...v, [d(O, S), ":list="].join("")] : [...v, [d(O, S), ":list=", d(E, S)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = S.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (E, g) => g === void 0 || S.skipNull && g === null || S.skipEmptyString && g === "" ? E : (g = g === null ? "" : g, E.length === 0 ? [[d(v, S), O, d(g, S)].join("")] : [[E, d(g, S)].join(S.arrayFormatSeparator)]);
      }
      default:
        return (O) => (v, E) => E === void 0 || S.skipNull && E === null || S.skipEmptyString && E === "" ? v : E === null ? [...v, d(O, S)] : [...v, [d(O, S), "=", d(E, S)].join("")];
    }
  }
  function h(S) {
    let O;
    switch (S.arrayFormat) {
      case "index":
        return (v, E, g) => {
          if (O = /\[(\d*)\]$/.exec(v), v = v.replace(/\[\d*\]$/, ""), !O) {
            g[v] = E;
            return;
          }
          g[v] === void 0 && (g[v] = {}), g[v][O[1]] = E;
        };
      case "bracket":
        return (v, E, g) => {
          if (O = /(\[\])$/.exec(v), v = v.replace(/\[\]$/, ""), !O) {
            g[v] = E;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [E];
            return;
          }
          g[v] = [].concat(g[v], E);
        };
      case "colon-list-separator":
        return (v, E, g) => {
          if (O = /(:list)$/.exec(v), v = v.replace(/:list$/, ""), !O) {
            g[v] = E;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [E];
            return;
          }
          g[v] = [].concat(g[v], E);
        };
      case "comma":
      case "separator":
        return (v, E, g) => {
          const a = typeof E == "string" && E.includes(S.arrayFormatSeparator), p = typeof E == "string" && !a && f(E, S).includes(S.arrayFormatSeparator);
          E = p ? f(E, S) : E;
          const P = a || p ? E.split(S.arrayFormatSeparator).map((R) => f(R, S)) : E === null ? E : f(E, S);
          g[v] = P;
        };
      case "bracket-separator":
        return (v, E, g) => {
          const a = /(\[\])$/.test(v);
          if (v = v.replace(/\[\]$/, ""), !a) {
            g[v] = E && f(E, S);
            return;
          }
          const p = E === null ? [] : E.split(S.arrayFormatSeparator).map((P) => f(P, S));
          if (g[v] === void 0) {
            g[v] = p;
            return;
          }
          g[v] = [].concat(g[v], p);
        };
      default:
        return (v, E, g) => {
          if (g[v] === void 0) {
            g[v] = E;
            return;
          }
          g[v] = [].concat(g[v], E);
        };
    }
  }
  function l(S) {
    if (typeof S != "string" || S.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(S, O) {
    return O.encode ? O.strict ? e(S) : encodeURIComponent(S) : S;
  }
  function f(S, O) {
    return O.decode ? r(S) : S;
  }
  function y(S) {
    return Array.isArray(S) ? S.sort() : typeof S == "object" ? y(Object.keys(S)).sort((O, v) => Number(O) - Number(v)).map((O) => S[O]) : S;
  }
  function b(S) {
    const O = S.indexOf("#");
    return O !== -1 && (S = S.slice(0, O)), S;
  }
  function _(S) {
    let O = "";
    const v = S.indexOf("#");
    return v !== -1 && (O = S.slice(v)), O;
  }
  function C(S) {
    S = b(S);
    const O = S.indexOf("?");
    return O === -1 ? "" : S.slice(O + 1);
  }
  function L(S, O) {
    return O.parseNumbers && !Number.isNaN(Number(S)) && typeof S == "string" && S.trim() !== "" ? S = Number(S) : O.parseBooleans && S !== null && (S.toLowerCase() === "true" || S.toLowerCase() === "false") && (S = S.toLowerCase() === "true"), S;
  }
  function F(S, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), l(O.arrayFormatSeparator);
    const v = h(O), E = /* @__PURE__ */ Object.create(null);
    if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
      return E;
    for (const g of S.split("&")) {
      if (g === "")
        continue;
      let [a, p] = s(O.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? p : f(p, O), v(f(a, O), p, E);
    }
    for (const g of Object.keys(E)) {
      const a = E[g];
      if (typeof a == "object" && a !== null)
        for (const p of Object.keys(a))
          a[p] = L(a[p], O);
      else
        E[g] = L(a, O);
    }
    return O.sort === !1 ? E : (O.sort === !0 ? Object.keys(E).sort() : Object.keys(E).sort(O.sort)).reduce((g, a) => {
      const p = E[a];
      return p && typeof p == "object" && !Array.isArray(p) ? g[a] = y(p) : g[a] = p, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = C, t.parse = F, t.stringify = (S, O) => {
    if (!S)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), l(O.arrayFormatSeparator);
    const v = (p) => O.skipNull && n(S[p]) || O.skipEmptyString && S[p] === "", E = o(O), g = {};
    for (const p of Object.keys(S))
      v(p) || (g[p] = S[p]);
    const a = Object.keys(g);
    return O.sort !== !1 && a.sort(O.sort), a.map((p) => {
      const P = S[p];
      return P === void 0 ? "" : P === null ? d(p, O) : Array.isArray(P) ? P.length === 0 && O.arrayFormat === "bracket-separator" ? d(p, O) + "[]" : P.reduce(E(p), []).join("&") : d(p, O) + "=" + d(P, O);
    }).filter((p) => p.length > 0).join("&");
  }, t.parseUrl = (S, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [v, E] = s(S, "#");
    return Object.assign(
      {
        url: v.split("?")[0] || "",
        query: F(C(S), O)
      },
      O && O.parseFragmentIdentifier && E ? { fragmentIdentifier: f(E, O) } : {}
    );
  }, t.stringifyUrl = (S, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [c]: !0
    }, O);
    const v = b(S.url).split("?")[0] || "", E = t.extract(S.url), g = t.parse(E, { sort: !1 }), a = Object.assign(g, S.query);
    let p = t.stringify(a, O);
    p && (p = `?${p}`);
    let P = _(S.url);
    return S.fragmentIdentifier && (P = `#${O[c] ? d(S.fragmentIdentifier, O) : S.fragmentIdentifier}`), `${v}${p}${P}`;
  }, t.pick = (S, O, v) => {
    v = Object.assign({
      parseFragmentIdentifier: !0,
      [c]: !1
    }, v);
    const { url: E, query: g, fragmentIdentifier: a } = t.parseUrl(S, v);
    return t.stringifyUrl({
      url: E,
      query: i(g, O),
      fragmentIdentifier: a
    }, v);
  }, t.exclude = (S, O, v) => {
    const E = Array.isArray(O) ? (g) => !O.includes(g) : (g, a) => !O(g, a);
    return t.pick(S, E, v);
  };
})(As);
const bg = {
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
function lu(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const hu = "base10", It = "base16", Un = "base64pad", uo = "utf8", du = 0, Jr = 1, _g = 0, Ta = 1, Fn = 12, lo = 32;
function wg() {
  const t = oo.generateKeyPair();
  return { privateKey: Ot(t.secretKey, It), publicKey: Ot(t.publicKey, It) };
}
function Mn() {
  const t = ds.randomBytes(lo);
  return Ot(t, It);
}
function Eg(t, e) {
  const r = oo.sharedKey(Rt(t, It), Rt(e, It)), s = new qp(Hi.SHA256, r).expand(lo);
  return Ot(s, It);
}
function Sg(t) {
  const e = Hi.hash(Rt(t, It));
  return Ot(e, It);
}
function os(t) {
  const e = Hi.hash(Rt(t, uo));
  return Ot(e, It);
}
function Dg(t) {
  return Rt(`${t}`, hu);
}
function Gs(t) {
  return Number(Ot(t, hu));
}
function xg(t) {
  const e = Dg(typeof t.type < "u" ? t.type : du);
  if (Gs(e) === Jr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Rt(t.senderPublicKey, It) : void 0, s = typeof t.iv < "u" ? Rt(t.iv, It) : ds.randomBytes(Fn), i = new io.ChaCha20Poly1305(Rt(t.symKey, It)).seal(s, Rt(t.message, uo));
  return Og({ type: e, sealed: i, iv: s, senderPublicKey: r });
}
function Ig(t) {
  const e = new io.ChaCha20Poly1305(Rt(t.symKey, It)), { sealed: r, iv: s } = Ii(t.encoded), i = e.open(s, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Ot(i, uo);
}
function Og(t) {
  if (Gs(t.type) === Jr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ot(Rn([t.type, t.senderPublicKey, t.iv, t.sealed]), Un);
  }
  return Ot(Rn([t.type, t.iv, t.sealed]), Un);
}
function Ii(t) {
  const e = Rt(t, Un), r = e.slice(_g, Ta), s = Ta;
  if (Gs(r) === Jr) {
    const o = s + lo, h = o + Fn, l = e.slice(s, o), d = e.slice(o, h), f = e.slice(h);
    return { type: r, sealed: f, iv: d, senderPublicKey: l };
  }
  const i = s + Fn, n = e.slice(s, i), c = e.slice(i);
  return { type: r, sealed: c, iv: n };
}
function Cg(t, e) {
  const r = Ii(t);
  return fu({ type: Gs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ot(r.senderPublicKey, It) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function fu(t) {
  const e = (t == null ? void 0 : t.type) || du;
  if (e === Jr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Na(t) {
  return t.type === Jr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Tg = Object.defineProperty, Aa = Object.getOwnPropertySymbols, Ng = Object.prototype.hasOwnProperty, Ag = Object.prototype.propertyIsEnumerable, Ra = (t, e, r) => e in t ? Tg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Pa = (t, e) => {
  for (var r in e || (e = {}))
    Ng.call(e, r) && Ra(t, r, e[r]);
  if (Aa)
    for (var r of Aa(e))
      Ag.call(e, r) && Ra(t, r, e[r]);
  return t;
};
const Rg = "ReactNative", Ut = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Pg = "js";
function ho() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Wi() {
  return !ou() && !!ao() && navigator.product === Rg;
}
function Ys() {
  return !ho() && !!ao();
}
function Js() {
  return Wi() ? Ut.reactNative : ho() ? Ut.node : Ys() ? Ut.browser : Ut.unknown;
}
function Lg(t, e) {
  let r = As.parse(t);
  return r = Pa(Pa({}, r), e), t = As.stringify(r), t;
}
function Ug() {
  return cu() || { name: "", description: "", url: "", icons: [""] };
}
function Fg() {
  if (Js() === Ut.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: s } = global.Platform;
    return [r, s].join("-");
  }
  const t = Jp();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Mg() {
  var t;
  const e = Js();
  return e === Ut.browser ? [e, ((t = au()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function $g(t, e, r) {
  const s = Fg(), i = Mg();
  return [[t, e].join("-"), [Pg, r].join("-"), s, i].join("/");
}
function jg({ protocol: t, version: e, relayUrl: r, sdkVersion: s, auth: i, projectId: n, useOnCloseEvent: c }) {
  const o = r.split("?"), h = $g(t, e, s), l = { auth: i, ua: h, projectId: n, useOnCloseEvent: c || void 0 }, d = Lg(o[1] || "", l);
  return o[0] + "?" + d;
}
function qr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function pu(t) {
  return Object.fromEntries(t.entries());
}
function gu(t) {
  return new Map(Object.entries(t));
}
function ts(t = te.FIVE_MINUTES, e) {
  const r = te.toMiliseconds(t || te.FIVE_MINUTES);
  let s, i, n;
  return { resolve: (c) => {
    n && s && (clearTimeout(n), s(c));
  }, reject: (c) => {
    n && i && (clearTimeout(n), i(c));
  }, done: () => new Promise((c, o) => {
    n = setTimeout(() => {
      o(new Error(e));
    }, r), s = c, i = o;
  }) };
}
function Rs(t, e, r) {
  return new Promise(async (s, i) => {
    const n = setTimeout(() => i(new Error(r)), e);
    try {
      const c = await t;
      s(c);
    } catch (c) {
      i(c);
    }
    clearTimeout(n);
  });
}
function yu(t, e) {
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
function kg(t) {
  return yu("topic", t);
}
function zg(t) {
  return yu("id", t);
}
function mu(t) {
  const [e, r] = t.split(":"), s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    s.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    s.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return s;
}
function Bt(t, e) {
  return te.fromMiliseconds((e || Date.now()) + te.toMiliseconds(t));
}
function Er(t) {
  return Date.now() >= te.toMiliseconds(t);
}
function Je(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function qg({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let i = s == null ? void 0 : s.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const n = `${i}/wc?requestId=${t}&sessionTopic=${e}`, c = Js();
    c === Ut.browser ? n.startsWith("https://") ? window.open(n, "_blank", "noreferrer noopener") : window.open(n, "_self", "noreferrer noopener") : c === Ut.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(n);
  } catch (s) {
    console.error(s);
  }
}
const Bg = "irn";
function $n(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Bg };
}
function vi(t) {
  const e = bg[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Kg = Object.defineProperty, La = Object.getOwnPropertySymbols, Vg = Object.prototype.hasOwnProperty, Hg = Object.prototype.propertyIsEnumerable, Ua = (t, e, r) => e in t ? Kg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Wg = (t, e) => {
  for (var r in e || (e = {}))
    Vg.call(e, r) && Ua(t, r, e[r]);
  if (La)
    for (var r of La(e))
      Hg.call(e, r) && Ua(t, r, e[r]);
  return t;
};
function Zg(t, e = "-") {
  const r = {}, s = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(s)) {
      const n = i.replace(s, ""), c = t[i];
      r[n] = c;
    }
  }), r;
}
function Gg(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, s = t.substring(0, e), i = t.substring(e + 1, r).split("@"), n = typeof r < "u" ? t.substring(r) : "", c = As.parse(n);
  return { protocol: s, topic: Yg(i[0]), version: parseInt(i[1], 10), symKey: c.symKey, relay: Zg(c) };
}
function Yg(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Jg(t, e = "-") {
  const r = "relay", s = {};
  return Object.keys(t).forEach((i) => {
    const n = r + e + i;
    t[i] && (s[n] = t[i]);
  }), s;
}
function Qg(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + As.stringify(Wg({ symKey: t.symKey }, Jg(t.relay)));
}
function ps(t) {
  const e = [];
  return t.forEach((r) => {
    const [s, i] = r.split(":");
    e.push(`${s}:${i}`);
  }), e;
}
function Xg(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...ps(r.accounts));
  }), e;
}
function ey(t, e) {
  const r = [];
  return Object.values(t).forEach((s) => {
    ps(s.accounts).includes(e) && r.push(...s.methods);
  }), r;
}
function ty(t, e) {
  const r = [];
  return Object.values(t).forEach((s) => {
    ps(s.accounts).includes(e) && r.push(...s.events);
  }), r;
}
function ry(t, e) {
  const r = bi(t, e);
  if (r)
    throw new Error(r.message);
  const s = {};
  for (const [i, n] of Object.entries(t))
    s[i] = { methods: n.methods, events: n.events, chains: n.accounts.map((c) => `${c.split(":")[0]}:${c.split(":")[1]}`) };
  return s;
}
const sy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, iy = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Z(t, e) {
  const { message: r, code: s } = iy[t];
  return { message: e ? `${r} ${e}` : r, code: s };
}
function lt(t, e) {
  const { message: r, code: s } = sy[t];
  return { message: e ? `${r} ${e}` : r, code: s };
}
function Qs(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Cs(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function xt(t) {
  return typeof t > "u";
}
function ht(t, e) {
  return e && xt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function fo(t, e) {
  return e && xt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function ny(t, e) {
  const { requiredNamespaces: r } = e, s = Object.keys(t.namespaces), i = Object.keys(r);
  let n = !0;
  return qr(i, s) ? (s.forEach((c) => {
    const { accounts: o, methods: h, events: l } = t.namespaces[c], d = ps(o), f = r[c];
    (!qr(lu(c, f), d) || !qr(f.methods, h) || !qr(f.events, l)) && (n = !1);
  }), n) : !1;
}
function Oi(t) {
  return ht(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function oy(t) {
  if (ht(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Oi(r);
    }
  }
  return !1;
}
function ay(t) {
  if (ht(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function cy(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function uy(t) {
  return t == null ? void 0 : t.topic;
}
function ly(t, e) {
  let r = null;
  return ht(t == null ? void 0 : t.publicKey, !1) || (r = Z("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Fa(t) {
  let e = !0;
  return Qs(t) ? t.length && (e = t.every((r) => ht(r, !1))) : e = !1, e;
}
function hy(t, e, r) {
  let s = null;
  return Qs(e) && e.length ? e.forEach((i) => {
    s || Oi(i) || (s = lt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Oi(t) || (s = lt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function dy(t, e, r) {
  let s = null;
  return Object.entries(t).forEach(([i, n]) => {
    if (s)
      return;
    const c = hy(i, lu(i, n), `${e} ${r}`);
    c && (s = c);
  }), s;
}
function fy(t, e) {
  let r = null;
  return Qs(t) ? t.forEach((s) => {
    r || oy(s) || (r = lt("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = lt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function py(t, e) {
  let r = null;
  return Object.values(t).forEach((s) => {
    if (r)
      return;
    const i = fy(s == null ? void 0 : s.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function gy(t, e) {
  let r = null;
  return Fa(t == null ? void 0 : t.methods) ? Fa(t == null ? void 0 : t.events) || (r = lt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = lt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function vu(t, e) {
  let r = null;
  return Object.values(t).forEach((s) => {
    if (r)
      return;
    const i = gy(s, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function yy(t, e, r) {
  let s = null;
  if (t && Cs(t)) {
    const i = vu(t, e);
    i && (s = i);
    const n = dy(t, e, r);
    n && (s = n);
  } else
    s = Z("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return s;
}
function bi(t, e) {
  let r = null;
  if (t && Cs(t)) {
    const s = vu(t, e);
    s && (r = s);
    const i = py(t, e);
    i && (r = i);
  } else
    r = Z("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function bu(t) {
  return ht(t.protocol, !0);
}
function my(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Qs(t) && t.length && t.forEach((s) => {
    r = bu(s);
  }), r;
}
function vy(t) {
  return typeof t == "number";
}
function At(t) {
  return typeof t < "u" && typeof t !== null;
}
function by(t) {
  return !(!t || typeof t != "object" || !t.code || !fo(t.code, !1) || !t.message || !ht(t.message, !1));
}
function _y(t) {
  return !(xt(t) || !ht(t.method, !1));
}
function wy(t) {
  return !(xt(t) || xt(t.result) && xt(t.error) || !fo(t.id, !1) || !ht(t.jsonrpc, !1));
}
function Ey(t) {
  return !(xt(t) || !ht(t.name, !1));
}
function Ma(t, e) {
  return !(!Oi(e) || !Xg(t).includes(e));
}
function Sy(t, e, r) {
  return ht(r, !1) ? ey(t, e).includes(r) : !1;
}
function Dy(t, e, r) {
  return ht(r, !1) ? ty(t, e).includes(r) : !1;
}
function $a(t, e, r) {
  let s = null;
  const i = xy(t), n = Iy(e), c = Object.keys(i), o = Object.keys(n), h = ja(Object.keys(t)), l = ja(Object.keys(e)), d = h.filter((f) => !l.includes(f));
  return d.length && (s = Z("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), qr(c, o) || (s = Z("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || s)
      return;
    const y = ps(e[f].accounts);
    y.includes(f) || (s = Z("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${y.toString()}`));
  }), c.forEach((f) => {
    s || (qr(i[f].methods, n[f].methods) ? qr(i[f].events, n[f].events) || (s = Z("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : s = Z("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), s;
}
function xy(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var s;
    r.includes(":") ? e[r] = t[r] : (s = t[r].chains) == null || s.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function ja(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Iy(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const s = ps(t[r].accounts);
      s == null || s.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((n) => n.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Oy(t, e) {
  return fo(t, !1) && t <= e.max && t >= e.min;
}
function ka() {
  const t = Js();
  return new Promise((e) => {
    switch (t) {
      case Ut.browser:
        e(Cy());
        break;
      case Ut.reactNative:
        e(Ty());
        break;
      case Ut.node:
        e(Ny());
        break;
      default:
        e(!0);
    }
  });
}
function Cy() {
  return Ys() && (navigator == null ? void 0 : navigator.onLine);
}
async function Ty() {
  if (Wi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Ny() {
  return !0;
}
function Ay(t) {
  switch (Js()) {
    case Ut.browser:
      Ry(t);
      break;
    case Ut.reactNative:
      Py(t);
      break;
  }
}
function Ry(t) {
  Ys() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Py(t) {
  Wi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const fn = {};
let fi = class {
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
const Ly = "PARSE_ERROR", Uy = "INVALID_REQUEST", Fy = "METHOD_NOT_FOUND", My = "INVALID_PARAMS", _u = "INTERNAL_ERROR", po = "SERVER_ERROR", $y = [-32700, -32600, -32601, -32602, -32603], Ts = {
  [Ly]: { code: -32700, message: "Parse error" },
  [Uy]: { code: -32600, message: "Invalid Request" },
  [Fy]: { code: -32601, message: "Method not found" },
  [My]: { code: -32602, message: "Invalid params" },
  [_u]: { code: -32603, message: "Internal error" },
  [po]: { code: -32e3, message: "Server error" }
}, wu = po;
function jy(t) {
  return $y.includes(t);
}
function za(t) {
  return Object.keys(Ts).includes(t) ? Ts[t] : Ts[wu];
}
function ky(t) {
  const e = Object.values(Ts).find((r) => r.code === t);
  return e || Ts[wu];
}
function zy(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Eu = {}, lr = {}, qa;
function qy() {
  if (qa)
    return lr;
  qa = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.isBrowserCryptoAvailable = lr.getSubtleCrypto = lr.getBrowerCrypto = void 0;
  function t() {
    return (ir == null ? void 0 : ir.crypto) || (ir == null ? void 0 : ir.msCrypto) || {};
  }
  lr.getBrowerCrypto = t;
  function e() {
    const s = t();
    return s.subtle || s.webkitSubtle;
  }
  lr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return lr.isBrowserCryptoAvailable = r, lr;
}
var hr = {}, Ba;
function By() {
  if (Ba)
    return hr;
  Ba = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.isBrowser = hr.isNode = hr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  hr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  hr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return hr.isBrowser = r, hr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(qy(), t), e.__exportStar(By(), t);
})(Eu);
function go(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Su(t = 6) {
  return BigInt(go(t));
}
function Ps(t, e, r) {
  return {
    id: r || go(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function yo(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function mo(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Ky(e, r)
  };
}
function Ky(t, e) {
  return typeof t > "u" ? za(_u) : (typeof t == "string" && (t = Object.assign(Object.assign({}, za(po)), { message: t })), typeof e < "u" && (t.data = e), jy(t.code) && (t = ky(t.code)), t);
}
class Vy {
}
class Hy extends Vy {
  constructor() {
    super();
  }
}
class Wy extends Hy {
  constructor(e) {
    super();
  }
}
const Zy = "^wss?:";
function Gy(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Yy(t, e) {
  const r = Gy(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Ka(t) {
  return Yy(t, Zy);
}
function Jy(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Du(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function vo(t) {
  return Du(t) && "method" in t;
}
function Zi(t) {
  return Du(t) && (pr(t) || Kt(t));
}
function pr(t) {
  return "result" in t;
}
function Kt(t) {
  return "error" in t;
}
class Qy extends Wy {
  constructor(e) {
    super(e), this.events = new Yt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Ps(e.method, e.params || [], e.id || Su().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (s, i) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n) {
          i(n);
        }
      this.events.on(`${e.id}`, (n) => {
        Kt(n) ? i(n.error) : s(n.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (n) {
        i(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Zi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const Xy = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {try { return require("ws") } catch (e) { } })(), em = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Va = (t) => t.split("?")[0], Ha = 10, tm = Xy();
class rm {
  constructor(e) {
    if (this.url = e, this.events = new Yt.EventEmitter(), this.registering = !1, !Ka(e))
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
      this.socket.onclose = (s) => {
        this.onClose(s), e();
      }, this.socket.close();
    });
  }
  async send(e, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Hs(e));
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  register(e = this.url) {
    if (!Ka(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, i) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), i(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return i(new Error("WebSocket connection is missing or invalid"));
          s(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, s) => {
      const i = Eu.isReactNative() ? void 0 : { rejectUnauthorized: !Jy(e) }, n = new tm(e, [], i);
      em() ? n.onerror = (c) => {
        const o = c;
        s(this.emitError(o.error));
      } : n.on("error", (c) => {
        s(this.emitError(c));
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
    const r = typeof e.data == "string" ? ki(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const s = this.parseError(r), i = s.message || s.toString(), n = mo(e, i);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return zy(e, Va(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ha && this.events.setMaxListeners(Ha);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Va(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ci = { exports: {} };
Ci.exports;
(function(t, e) {
  var r = 200, s = "__lodash_hash_undefined__", i = 1, n = 2, c = 9007199254740991, o = "[object Arguments]", h = "[object Array]", l = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", y = "[object Error]", b = "[object Function]", _ = "[object GeneratorFunction]", C = "[object Map]", L = "[object Number]", F = "[object Null]", S = "[object Object]", O = "[object Promise]", v = "[object Proxy]", E = "[object RegExp]", g = "[object Set]", a = "[object String]", p = "[object Symbol]", P = "[object Undefined]", R = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", G = "[object Float32Array]", D = "[object Float64Array]", A = "[object Int8Array]", W = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", k = "[object Uint8ClampedArray]", M = "[object Uint16Array]", q = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, se = /^(?:0|[1-9]\d*)$/, X = {};
  X[G] = X[D] = X[A] = X[W] = X[z] = X[$] = X[k] = X[M] = X[q] = !0, X[o] = X[h] = X[U] = X[d] = X[B] = X[f] = X[y] = X[b] = X[C] = X[L] = X[S] = X[E] = X[g] = X[a] = X[R] = !1;
  var ne = typeof ir == "object" && ir && ir.Object === Object && ir, N = typeof self == "object" && self && self.Object === Object && self, T = ne || N || Function("return this")(), x = e && !e.nodeType && e, u = x && !0 && t && !t.nodeType && t, w = u && u.exports === x, H = w && ne.process, J = function() {
    try {
      return H && H.binding && H.binding("util");
    } catch {
    }
  }(), be = J && J.isTypedArray;
  function xe(m, I) {
    for (var j = -1, ee = m == null ? 0 : m.length, Fe = 0, he = []; ++j < ee; ) {
      var Ke = m[j];
      I(Ke, j, m) && (he[Fe++] = Ke);
    }
    return he;
  }
  function we(m, I) {
    for (var j = -1, ee = I.length, Fe = m.length; ++j < ee; )
      m[Fe + j] = I[j];
    return m;
  }
  function Ne(m, I) {
    for (var j = -1, ee = m == null ? 0 : m.length; ++j < ee; )
      if (I(m[j], j, m))
        return !0;
    return !1;
  }
  function Ve(m, I) {
    for (var j = -1, ee = Array(m); ++j < m; )
      ee[j] = I(j);
    return ee;
  }
  function ze(m) {
    return function(I) {
      return m(I);
    };
  }
  function De(m, I) {
    return m.has(I);
  }
  function Ee(m, I) {
    return m == null ? void 0 : m[I];
  }
  function _e(m) {
    var I = -1, j = Array(m.size);
    return m.forEach(function(ee, Fe) {
      j[++I] = [Fe, ee];
    }), j;
  }
  function me(m, I) {
    return function(j) {
      return m(I(j));
    };
  }
  function ye(m) {
    var I = -1, j = Array(m.size);
    return m.forEach(function(ee) {
      j[++I] = ee;
    }), j;
  }
  var pe = Array.prototype, fe = Function.prototype, ce = Object.prototype, ve = T["__core-js_shared__"], Se = fe.toString, ue = ce.hasOwnProperty, Ie = function() {
    var m = /[^.]+$/.exec(ve && ve.keys && ve.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), Ce = ce.toString, Re = RegExp(
    "^" + Se.call(ue).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = w ? T.Buffer : void 0, Ae = T.Symbol, zt = T.Uint8Array, Qt = ce.propertyIsEnumerable, mr = pe.splice, Pt = Ae ? Ae.toStringTag : void 0, Nr = Object.getOwnPropertySymbols, gs = Pe ? Pe.isBuffer : void 0, ti = me(Object.keys, Object), He = Qr(T, "DataView"), qe = Qr(T, "Map"), We = Qr(T, "Promise"), Ze = Qr(T, "Set"), Ge = Qr(T, "WeakMap"), Be = Qr(Object, "create"), Xe = Rr(He), et = Rr(qe), tt = Rr(We), rt = Rr(Ze), st = Rr(Ge), Qe = Ae ? Ae.prototype : void 0, Ye = Qe ? Qe.valueOf : void 0;
  function Me(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function it() {
    this.__data__ = Be ? Be(null) : {}, this.size = 0;
  }
  function nt(m) {
    var I = this.has(m) && delete this.__data__[m];
    return this.size -= I ? 1 : 0, I;
  }
  function rl(m) {
    var I = this.__data__;
    if (Be) {
      var j = I[m];
      return j === s ? void 0 : j;
    }
    return ue.call(I, m) ? I[m] : void 0;
  }
  function sl(m) {
    var I = this.__data__;
    return Be ? I[m] !== void 0 : ue.call(I, m);
  }
  function il(m, I) {
    var j = this.__data__;
    return this.size += this.has(m) ? 0 : 1, j[m] = Be && I === void 0 ? s : I, this;
  }
  Me.prototype.clear = it, Me.prototype.delete = nt, Me.prototype.get = rl, Me.prototype.has = sl, Me.prototype.set = il;
  function cr(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function nl() {
    this.__data__ = [], this.size = 0;
  }
  function ol(m) {
    var I = this.__data__, j = si(I, m);
    if (j < 0)
      return !1;
    var ee = I.length - 1;
    return j == ee ? I.pop() : mr.call(I, j, 1), --this.size, !0;
  }
  function al(m) {
    var I = this.__data__, j = si(I, m);
    return j < 0 ? void 0 : I[j][1];
  }
  function cl(m) {
    return si(this.__data__, m) > -1;
  }
  function ul(m, I) {
    var j = this.__data__, ee = si(j, m);
    return ee < 0 ? (++this.size, j.push([m, I])) : j[ee][1] = I, this;
  }
  cr.prototype.clear = nl, cr.prototype.delete = ol, cr.prototype.get = al, cr.prototype.has = cl, cr.prototype.set = ul;
  function Ar(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function ll() {
    this.size = 0, this.__data__ = {
      hash: new Me(),
      map: new (qe || cr)(),
      string: new Me()
    };
  }
  function hl(m) {
    var I = ii(this, m).delete(m);
    return this.size -= I ? 1 : 0, I;
  }
  function dl(m) {
    return ii(this, m).get(m);
  }
  function fl(m) {
    return ii(this, m).has(m);
  }
  function pl(m, I) {
    var j = ii(this, m), ee = j.size;
    return j.set(m, I), this.size += j.size == ee ? 0 : 1, this;
  }
  Ar.prototype.clear = ll, Ar.prototype.delete = hl, Ar.prototype.get = dl, Ar.prototype.has = fl, Ar.prototype.set = pl;
  function ri(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.__data__ = new Ar(); ++I < j; )
      this.add(m[I]);
  }
  function gl(m) {
    return this.__data__.set(m, s), this;
  }
  function yl(m) {
    return this.__data__.has(m);
  }
  ri.prototype.add = ri.prototype.push = gl, ri.prototype.has = yl;
  function vr(m) {
    var I = this.__data__ = new cr(m);
    this.size = I.size;
  }
  function ml() {
    this.__data__ = new cr(), this.size = 0;
  }
  function vl(m) {
    var I = this.__data__, j = I.delete(m);
    return this.size = I.size, j;
  }
  function bl(m) {
    return this.__data__.get(m);
  }
  function _l(m) {
    return this.__data__.has(m);
  }
  function wl(m, I) {
    var j = this.__data__;
    if (j instanceof cr) {
      var ee = j.__data__;
      if (!qe || ee.length < r - 1)
        return ee.push([m, I]), this.size = ++j.size, this;
      j = this.__data__ = new Ar(ee);
    }
    return j.set(m, I), this.size = j.size, this;
  }
  vr.prototype.clear = ml, vr.prototype.delete = vl, vr.prototype.get = bl, vr.prototype.has = _l, vr.prototype.set = wl;
  function El(m, I) {
    var j = ni(m), ee = !j && Ml(m), Fe = !j && !ee && Qi(m), he = !j && !ee && !Fe && Po(m), Ke = j || ee || Fe || he, ot = Ke ? Ve(m.length, String) : [], dt = ot.length;
    for (var je in m)
      (I || ue.call(m, je)) && !(Ke && // Safari 9 has enumerable `arguments.length` in strict mode.
      (je == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Fe && (je == "offset" || je == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (je == "buffer" || je == "byteLength" || je == "byteOffset") || // Skip index properties.
      Rl(je, dt))) && ot.push(je);
    return ot;
  }
  function si(m, I) {
    for (var j = m.length; j--; )
      if (To(m[j][0], I))
        return j;
    return -1;
  }
  function Sl(m, I, j) {
    var ee = I(m);
    return ni(m) ? ee : we(ee, j(m));
  }
  function ys(m) {
    return m == null ? m === void 0 ? P : F : Pt && Pt in Object(m) ? Nl(m) : Fl(m);
  }
  function xo(m) {
    return ms(m) && ys(m) == o;
  }
  function Io(m, I, j, ee, Fe) {
    return m === I ? !0 : m == null || I == null || !ms(m) && !ms(I) ? m !== m && I !== I : Dl(m, I, j, ee, Io, Fe);
  }
  function Dl(m, I, j, ee, Fe, he) {
    var Ke = ni(m), ot = ni(I), dt = Ke ? h : br(m), je = ot ? h : br(I);
    dt = dt == o ? S : dt, je = je == o ? S : je;
    var Lt = dt == S, qt = je == S, gt = dt == je;
    if (gt && Qi(m)) {
      if (!Qi(I))
        return !1;
      Ke = !0, Lt = !1;
    }
    if (gt && !Lt)
      return he || (he = new vr()), Ke || Po(m) ? Oo(m, I, j, ee, Fe, he) : Cl(m, I, dt, j, ee, Fe, he);
    if (!(j & i)) {
      var Mt = Lt && ue.call(m, "__wrapped__"), $t = qt && ue.call(I, "__wrapped__");
      if (Mt || $t) {
        var _r = Mt ? m.value() : m, ur = $t ? I.value() : I;
        return he || (he = new vr()), Fe(_r, ur, j, ee, he);
      }
    }
    return gt ? (he || (he = new vr()), Tl(m, I, j, ee, Fe, he)) : !1;
  }
  function xl(m) {
    if (!Ro(m) || Ll(m))
      return !1;
    var I = No(m) ? Re : K;
    return I.test(Rr(m));
  }
  function Il(m) {
    return ms(m) && Ao(m.length) && !!X[ys(m)];
  }
  function Ol(m) {
    if (!Ul(m))
      return ti(m);
    var I = [];
    for (var j in Object(m))
      ue.call(m, j) && j != "constructor" && I.push(j);
    return I;
  }
  function Oo(m, I, j, ee, Fe, he) {
    var Ke = j & i, ot = m.length, dt = I.length;
    if (ot != dt && !(Ke && dt > ot))
      return !1;
    var je = he.get(m);
    if (je && he.get(I))
      return je == I;
    var Lt = -1, qt = !0, gt = j & n ? new ri() : void 0;
    for (he.set(m, I), he.set(I, m); ++Lt < ot; ) {
      var Mt = m[Lt], $t = I[Lt];
      if (ee)
        var _r = Ke ? ee($t, Mt, Lt, I, m, he) : ee(Mt, $t, Lt, m, I, he);
      if (_r !== void 0) {
        if (_r)
          continue;
        qt = !1;
        break;
      }
      if (gt) {
        if (!Ne(I, function(ur, Pr) {
          if (!De(gt, Pr) && (Mt === ur || Fe(Mt, ur, j, ee, he)))
            return gt.push(Pr);
        })) {
          qt = !1;
          break;
        }
      } else if (!(Mt === $t || Fe(Mt, $t, j, ee, he))) {
        qt = !1;
        break;
      }
    }
    return he.delete(m), he.delete(I), qt;
  }
  function Cl(m, I, j, ee, Fe, he, Ke) {
    switch (j) {
      case B:
        if (m.byteLength != I.byteLength || m.byteOffset != I.byteOffset)
          return !1;
        m = m.buffer, I = I.buffer;
      case U:
        return !(m.byteLength != I.byteLength || !he(new zt(m), new zt(I)));
      case d:
      case f:
      case L:
        return To(+m, +I);
      case y:
        return m.name == I.name && m.message == I.message;
      case E:
      case a:
        return m == I + "";
      case C:
        var ot = _e;
      case g:
        var dt = ee & i;
        if (ot || (ot = ye), m.size != I.size && !dt)
          return !1;
        var je = Ke.get(m);
        if (je)
          return je == I;
        ee |= n, Ke.set(m, I);
        var Lt = Oo(ot(m), ot(I), ee, Fe, he, Ke);
        return Ke.delete(m), Lt;
      case p:
        if (Ye)
          return Ye.call(m) == Ye.call(I);
    }
    return !1;
  }
  function Tl(m, I, j, ee, Fe, he) {
    var Ke = j & i, ot = Co(m), dt = ot.length, je = Co(I), Lt = je.length;
    if (dt != Lt && !Ke)
      return !1;
    for (var qt = dt; qt--; ) {
      var gt = ot[qt];
      if (!(Ke ? gt in I : ue.call(I, gt)))
        return !1;
    }
    var Mt = he.get(m);
    if (Mt && he.get(I))
      return Mt == I;
    var $t = !0;
    he.set(m, I), he.set(I, m);
    for (var _r = Ke; ++qt < dt; ) {
      gt = ot[qt];
      var ur = m[gt], Pr = I[gt];
      if (ee)
        var Lo = Ke ? ee(Pr, ur, gt, I, m, he) : ee(ur, Pr, gt, m, I, he);
      if (!(Lo === void 0 ? ur === Pr || Fe(ur, Pr, j, ee, he) : Lo)) {
        $t = !1;
        break;
      }
      _r || (_r = gt == "constructor");
    }
    if ($t && !_r) {
      var oi = m.constructor, ai = I.constructor;
      oi != ai && "constructor" in m && "constructor" in I && !(typeof oi == "function" && oi instanceof oi && typeof ai == "function" && ai instanceof ai) && ($t = !1);
    }
    return he.delete(m), he.delete(I), $t;
  }
  function Co(m) {
    return Sl(m, kl, Al);
  }
  function ii(m, I) {
    var j = m.__data__;
    return Pl(I) ? j[typeof I == "string" ? "string" : "hash"] : j.map;
  }
  function Qr(m, I) {
    var j = Ee(m, I);
    return xl(j) ? j : void 0;
  }
  function Nl(m) {
    var I = ue.call(m, Pt), j = m[Pt];
    try {
      m[Pt] = void 0;
      var ee = !0;
    } catch {
    }
    var Fe = Ce.call(m);
    return ee && (I ? m[Pt] = j : delete m[Pt]), Fe;
  }
  var Al = Nr ? function(m) {
    return m == null ? [] : (m = Object(m), xe(Nr(m), function(I) {
      return Qt.call(m, I);
    }));
  } : zl, br = ys;
  (He && br(new He(new ArrayBuffer(1))) != B || qe && br(new qe()) != C || We && br(We.resolve()) != O || Ze && br(new Ze()) != g || Ge && br(new Ge()) != R) && (br = function(m) {
    var I = ys(m), j = I == S ? m.constructor : void 0, ee = j ? Rr(j) : "";
    if (ee)
      switch (ee) {
        case Xe:
          return B;
        case et:
          return C;
        case tt:
          return O;
        case rt:
          return g;
        case st:
          return R;
      }
    return I;
  });
  function Rl(m, I) {
    return I = I ?? c, !!I && (typeof m == "number" || se.test(m)) && m > -1 && m % 1 == 0 && m < I;
  }
  function Pl(m) {
    var I = typeof m;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? m !== "__proto__" : m === null;
  }
  function Ll(m) {
    return !!Ie && Ie in m;
  }
  function Ul(m) {
    var I = m && m.constructor, j = typeof I == "function" && I.prototype || ce;
    return m === j;
  }
  function Fl(m) {
    return Ce.call(m);
  }
  function Rr(m) {
    if (m != null) {
      try {
        return Se.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  function To(m, I) {
    return m === I || m !== m && I !== I;
  }
  var Ml = xo(/* @__PURE__ */ function() {
    return arguments;
  }()) ? xo : function(m) {
    return ms(m) && ue.call(m, "callee") && !Qt.call(m, "callee");
  }, ni = Array.isArray;
  function $l(m) {
    return m != null && Ao(m.length) && !No(m);
  }
  var Qi = gs || ql;
  function jl(m, I) {
    return Io(m, I);
  }
  function No(m) {
    if (!Ro(m))
      return !1;
    var I = ys(m);
    return I == b || I == _ || I == l || I == v;
  }
  function Ao(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= c;
  }
  function Ro(m) {
    var I = typeof m;
    return m != null && (I == "object" || I == "function");
  }
  function ms(m) {
    return m != null && typeof m == "object";
  }
  var Po = be ? ze(be) : Il;
  function kl(m) {
    return $l(m) ? El(m) : Ol(m);
  }
  function zl() {
    return [];
  }
  function ql() {
    return !1;
  }
  t.exports = jl;
})(Ci, Ci.exports);
var sm = Ci.exports;
const im = /* @__PURE__ */ Qn(sm);
function nm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), c = n.charCodeAt(0);
    if (r[c] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[c] = i;
  }
  var o = t.length, h = t.charAt(0), l = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var C = 0, L = 0, F = 0, S = _.length; F !== S && _[F] === 0; )
      F++, C++;
    for (var O = (S - F) * d + 1 >>> 0, v = new Uint8Array(O); F !== S; ) {
      for (var E = _[F], g = 0, a = O - 1; (E !== 0 || g < L) && a !== -1; a--, g++)
        E += 256 * v[a] >>> 0, v[a] = E % o >>> 0, E = E / o >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      L = g, F++;
    }
    for (var p = O - L; p !== O && v[p] === 0; )
      p++;
    for (var P = h.repeat(C); p < O; ++p)
      P += t.charAt(v[p]);
    return P;
  }
  function y(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var C = 0;
    if (_[C] !== " ") {
      for (var L = 0, F = 0; _[C] === h; )
        L++, C++;
      for (var S = (_.length - C) * l + 1 >>> 0, O = new Uint8Array(S); _[C]; ) {
        var v = r[_.charCodeAt(C)];
        if (v === 255)
          return;
        for (var E = 0, g = S - 1; (v !== 0 || E < F) && g !== -1; g--, E++)
          v += o * O[g] >>> 0, O[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        F = E, C++;
      }
      if (_[C] !== " ") {
        for (var a = S - F; a !== S && O[a] === 0; )
          a++;
        for (var p = new Uint8Array(L + (S - a)), P = L; a !== S; )
          p[P++] = O[a++];
        return p;
      }
    }
  }
  function b(_) {
    var C = y(_);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: y, decode: b };
}
var om = nm, am = om;
const xu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, cm = (t) => new TextEncoder().encode(t), um = (t) => new TextDecoder().decode(t);
class lm {
  constructor(e, r, s) {
    this.name = e, this.prefix = r, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class hm {
  constructor(e, r, s) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s;
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
    return Iu(this, e);
  }
}
class dm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Iu(this, e);
  }
  decode(e) {
    const r = e[0], s = this.decoders[r];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Iu = (t, e) => new dm({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class fm {
  constructor(e, r, s, i) {
    this.name = e, this.prefix = r, this.baseEncode = s, this.baseDecode = i, this.encoder = new lm(e, r, s), this.decoder = new hm(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Gi = ({ name: t, prefix: e, encode: r, decode: s }) => new fm(t, e, r, s), Xs = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: s, decode: i } = am(r, e);
  return Gi({ prefix: t, name: e, encode: s, decode: (n) => xu(i(n)) });
}, pm = (t, e, r, s) => {
  const i = {};
  for (let d = 0; d < e.length; ++d)
    i[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const c = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = i[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${s} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, c[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return c;
}, gm = (t, e, r) => {
  const s = e[e.length - 1] === "=", i = (1 << r) - 1;
  let n = "", c = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], c += 8; c > r; )
      c -= r, n += e[i & o >> c];
  if (c && (n += e[i & o << r - c]), s)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: s }) => Gi({ prefix: e, name: t, encode(i) {
  return gm(i, s, r);
}, decode(i) {
  return pm(i, s, r, t);
} }), ym = Gi({ prefix: "\0", name: "identity", encode: (t) => um(t), decode: (t) => cm(t) });
var mm = Object.freeze({ __proto__: null, identity: ym });
const vm = pt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var bm = Object.freeze({ __proto__: null, base2: vm });
const _m = pt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var wm = Object.freeze({ __proto__: null, base8: _m });
const Em = Xs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Sm = Object.freeze({ __proto__: null, base10: Em });
const Dm = pt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), xm = pt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Im = Object.freeze({ __proto__: null, base16: Dm, base16upper: xm });
const Om = pt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Cm = pt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Tm = pt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Nm = pt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Am = pt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Rm = pt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Pm = pt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Lm = pt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Um = pt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Fm = Object.freeze({ __proto__: null, base32: Om, base32upper: Cm, base32pad: Tm, base32padupper: Nm, base32hex: Am, base32hexupper: Rm, base32hexpad: Pm, base32hexpadupper: Lm, base32z: Um });
const Mm = Xs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), $m = Xs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var jm = Object.freeze({ __proto__: null, base36: Mm, base36upper: $m });
const km = Xs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), zm = Xs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var qm = Object.freeze({ __proto__: null, base58btc: km, base58flickr: zm });
const Bm = pt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Km = pt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Vm = pt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Hm = pt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Wm = Object.freeze({ __proto__: null, base64: Bm, base64pad: Km, base64url: Vm, base64urlpad: Hm });
const Ou = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Zm = Ou.reduce((t, e, r) => (t[r] = e, t), []), Gm = Ou.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Ym(t) {
  return t.reduce((e, r) => (e += Zm[r], e), "");
}
function Jm(t) {
  const e = [];
  for (const r of t) {
    const s = Gm[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Qm = Gi({ prefix: "🚀", name: "base256emoji", encode: Ym, decode: Jm });
var Xm = Object.freeze({ __proto__: null, base256emoji: Qm }), e0 = Cu, Wa = 128, t0 = 127, r0 = ~t0, s0 = Math.pow(2, 31);
function Cu(t, e, r) {
  e = e || [], r = r || 0;
  for (var s = r; t >= s0; )
    e[r++] = t & 255 | Wa, t /= 128;
  for (; t & r0; )
    e[r++] = t & 255 | Wa, t >>>= 7;
  return e[r] = t | 0, Cu.bytes = r - s + 1, e;
}
var i0 = jn, n0 = 128, Za = 127;
function jn(t, s) {
  var r = 0, s = s || 0, i = 0, n = s, c, o = t.length;
  do {
    if (n >= o)
      throw jn.bytes = 0, new RangeError("Could not decode varint");
    c = t[n++], r += i < 28 ? (c & Za) << i : (c & Za) * Math.pow(2, i), i += 7;
  } while (c >= n0);
  return jn.bytes = n - s, r;
}
var o0 = Math.pow(2, 7), a0 = Math.pow(2, 14), c0 = Math.pow(2, 21), u0 = Math.pow(2, 28), l0 = Math.pow(2, 35), h0 = Math.pow(2, 42), d0 = Math.pow(2, 49), f0 = Math.pow(2, 56), p0 = Math.pow(2, 63), g0 = function(t) {
  return t < o0 ? 1 : t < a0 ? 2 : t < c0 ? 3 : t < u0 ? 4 : t < l0 ? 5 : t < h0 ? 6 : t < d0 ? 7 : t < f0 ? 8 : t < p0 ? 9 : 10;
}, y0 = { encode: e0, decode: i0, encodingLength: g0 }, Tu = y0;
const Ga = (t, e, r = 0) => (Tu.encode(t, e, r), e), Ya = (t) => Tu.encodingLength(t), kn = (t, e) => {
  const r = e.byteLength, s = Ya(t), i = s + Ya(r), n = new Uint8Array(i + r);
  return Ga(t, n, 0), Ga(r, n, s), n.set(e, i), new m0(t, r, e, n);
};
class m0 {
  constructor(e, r, s, i) {
    this.code = e, this.size = r, this.digest = s, this.bytes = i;
  }
}
const Nu = ({ name: t, code: e, encode: r }) => new v0(t, e, r);
class v0 {
  constructor(e, r, s) {
    this.name = e, this.code = r, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? kn(this.code, r) : r.then((s) => kn(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Au = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), b0 = Nu({ name: "sha2-256", code: 18, encode: Au("SHA-256") }), _0 = Nu({ name: "sha2-512", code: 19, encode: Au("SHA-512") });
var w0 = Object.freeze({ __proto__: null, sha256: b0, sha512: _0 });
const Ru = 0, E0 = "identity", Pu = xu, S0 = (t) => kn(Ru, Pu(t)), D0 = { code: Ru, name: E0, encode: Pu, digest: S0 };
var x0 = Object.freeze({ __proto__: null, identity: D0 });
new TextEncoder(), new TextDecoder();
const Ja = { ...mm, ...bm, ...wm, ...Sm, ...Im, ...Fm, ...jm, ...qm, ...Wm, ...Xm };
({ ...w0, ...x0 });
function Lu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function I0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Lu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Uu(t, e, r, s) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: s } };
}
const Qa = Uu("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), pn = Uu("ascii", "a", (t) => {
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
}), O0 = { utf8: Qa, "utf-8": Qa, hex: Ja.base16, latin1: pn, ascii: pn, binary: pn, ...Ja };
function C0(t, e = "utf8") {
  const r = O0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Lu(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Fu = "wc", T0 = 2, bo = "core", Dr = `${Fu}@2:${bo}:`, N0 = { name: bo, logger: "error" }, A0 = { database: ":memory:" }, R0 = "crypto", Xa = "client_ed25519_seed", P0 = te.ONE_DAY, L0 = "keychain", U0 = "0.3", F0 = "messages", M0 = "0.3", $0 = te.SIX_HOURS, j0 = "publisher", Mu = "irn", k0 = "error", $u = "wss://relay.walletconnect.com", ec = "wss://relay.walletconnect.org", z0 = "relayer", wt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, q0 = "_subscription", dr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, B0 = te.ONE_SECOND, K0 = "2.10.0", V0 = 1e4, H0 = "0.3", W0 = "WALLETCONNECT_CLIENT_ID", sr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Z0 = "subscription", G0 = "0.3", Y0 = te.FIVE_SECONDS * 1e3, J0 = "pairing", Q0 = "0.3", Ss = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, rr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, X0 = "history", ev = "0.3", tv = "expirer", jt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, rv = "0.3", gn = "verify-api", _i = "https://verify.walletconnect.com", tc = "https://verify.walletconnect.org";
class sv {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = L0, this.version = U0, this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, i) => {
      this.isInitialized(), this.keychain.set(s, i), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const i = this.keychain.get(s);
      if (typeof i > "u") {
        const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(n);
      }
      return i;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = Oe.generateChildLogger(r, this.name);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, pu(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? gu(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class iv {
  constructor(e, r, s) {
    this.core = e, this.logger = r, this.name = R0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), n = ba(i);
      return eu(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = wg();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const n = await this.getClientSeed(), c = ba(n), o = Mn();
      return await Tp(o, i, P0, c);
    }, this.generateSharedKey = (i, n, c) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), h = Eg(o, n);
      return this.setSymKey(h, c);
    }, this.setSymKey = async (i, n) => {
      this.isInitialized();
      const c = n || Sg(i);
      return await this.keychain.set(c, i), c;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, n, c) => {
      this.isInitialized();
      const o = fu(c), h = Hs(n);
      if (Na(o)) {
        const y = o.senderPublicKey, b = o.receiverPublicKey;
        i = await this.generateSharedKey(y, b);
      }
      const l = this.getSymKey(i), { type: d, senderPublicKey: f } = o;
      return xg({ type: d, symKey: l, message: h, senderPublicKey: f });
    }, this.decode = async (i, n, c) => {
      this.isInitialized();
      const o = Cg(n, c);
      if (Na(o)) {
        const h = o.receiverPublicKey, l = o.senderPublicKey;
        i = await this.generateSharedKey(h, l);
      }
      try {
        const h = this.getSymKey(i), l = Ig({ symKey: h, encoded: n });
        return ki(l);
      } catch (h) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
      }
    }, this.getPayloadType = (i) => {
      const n = Ii(i);
      return Gs(n.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const n = Ii(i);
      return n.senderPublicKey ? Ot(n.senderPublicKey, It) : void 0;
    }, this.core = e, this.logger = Oe.generateChildLogger(r, this.name), this.keychain = s || new sv(this.core, this.logger);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
      e = this.keychain.get(Xa);
    } catch {
      e = Mn(), await this.keychain.set(Xa, e);
    }
    return C0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class nv extends Pd {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = F0, this.version = M0, this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, i) => {
      this.isInitialized();
      const n = os(i);
      let c = this.messages.get(s);
      return typeof c > "u" && (c = {}), typeof c[n] < "u" || (c[n] = i, this.messages.set(s, c), await this.persist()), n;
    }, this.get = (s) => {
      this.isInitialized();
      let i = this.messages.get(s);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (s, i) => {
      this.isInitialized();
      const n = this.get(s), c = os(i);
      return typeof n[c] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = Oe.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, pu(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? gu(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class ov extends Ld {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Yt.EventEmitter(), this.name = j0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (s, i, n) => {
      var c;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: i, opts: n } });
      try {
        const o = (n == null ? void 0 : n.ttl) || $0, h = $n(n), l = (n == null ? void 0 : n.prompt) || !1, d = (n == null ? void 0 : n.tag) || 0, f = (n == null ? void 0 : n.id) || Su().toString(), y = { topic: s, message: i, opts: { ttl: o, relay: h, prompt: l, tag: d, id: f } }, b = setTimeout(() => this.queue.set(f, y), this.publishTimeout);
        try {
          await await Rs(this.rpcPublish(s, i, o, h, l, d, f), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(f), this.relayer.events.emit(wt.publish, y);
        } catch (_) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (c = n == null ? void 0 : n.internal) != null && c.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), _;
          return;
        } finally {
          clearTimeout(b);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: i, opts: n } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.relayer = e, this.logger = Oe.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, s, i, n, c, o) {
    var h, l, d, f;
    const y = { method: vi(i.protocol).publish, params: { topic: e, message: r, ttl: s, prompt: n, tag: c }, id: o };
    return xt((h = y.params) == null ? void 0 : h.prompt) && ((l = y.params) == null || delete l.prompt), xt((d = y.params) == null ? void 0 : d.tag) && ((f = y.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: s, opts: i } = e;
      await this.publish(r, s, i);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(hs.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(wt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(wt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class av {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const s = this.get(e);
      this.exists(e, r) || this.map.set(e, [...s, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const s = this.get(e);
      if (!this.exists(e, r))
        return;
      const i = s.filter((n) => n !== r);
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
var cv = Object.defineProperty, uv = Object.defineProperties, lv = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, dv = Object.prototype.propertyIsEnumerable, sc = (t, e, r) => e in t ? cv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ds = (t, e) => {
  for (var r in e || (e = {}))
    hv.call(e, r) && sc(t, r, e[r]);
  if (rc)
    for (var r of rc(e))
      dv.call(e, r) && sc(t, r, e[r]);
  return t;
}, yn = (t, e) => uv(t, lv(e));
class fv extends Md {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new av(), this.events = new Yt.EventEmitter(), this.name = Z0, this.version = G0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Dr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i } });
      try {
        const n = $n(i), c = { topic: s, relay: n };
        this.pending.set(s, c);
        const o = await this.rpcSubscribe(s, n);
        return this.onSubscribe(o, c), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i } }), o;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (s, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(s, i.id, i) : await this.unsubscribeByTopic(s, i);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? !0 : await new Promise((i, n) => {
      const c = new te.Watch();
      c.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(o), c.stop(this.pendingSubscriptionWatchLabel), i(!0)), c.elapsed(this.pendingSubscriptionWatchLabel) >= Y0 && (clearInterval(o), c.stop(this.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Oe.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
    let s = !1;
    try {
      s = this.getSubscription(e).topic === r;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (i) => await this.unsubscribeById(e, i, r)));
  }
  async unsubscribeById(e, r, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: s } });
    try {
      const i = $n(s);
      await this.rpcUnsubscribe(e, r, i);
      const n = lt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: s } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const s = { method: vi(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Rs(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(wt.connection_stalled);
    }
    return os(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, s = { method: vi(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Rs(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(wt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, s) {
    const i = { method: vi(s.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, yn(Ds({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Ds({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, s) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, s), await this.relayer.messages.del(e);
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
    this.subscriptions.set(e, Ds({}, r)), this.topicMap.set(r.topic, e), this.events.emit(sr.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: s } = Z("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(sr.deleted, yn(Ds({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(sr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(sr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
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
    Qs(r) && this.onBatchSubscribe(r.map((s, i) => yn(Ds({}, e[i]), { id: s })));
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
    this.relayer.core.heartbeat.on(hs.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(wt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(wt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(sr.created, async (e) => {
      const r = sr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(sr.deleted, async (e) => {
      const r = sr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
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
var pv = Object.defineProperty, ic = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, yv = Object.prototype.propertyIsEnumerable, nc = (t, e, r) => e in t ? pv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, mv = (t, e) => {
  for (var r in e || (e = {}))
    gv.call(e, r) && nc(t, r, e[r]);
  if (ic)
    for (var r of ic(e))
      yv.call(e, r) && nc(t, r, e[r]);
  return t;
};
class vv extends Ud {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Yt.EventEmitter(), this.name = z0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(wt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(wt.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(dr.payload, this.onPayloadHandler), this.provider.on(dr.connect, this.onConnectHandler), this.provider.on(dr.disconnect, this.onDisconnectHandler), this.provider.on(dr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Oe.generateChildLogger(e.logger, this.name) : Oe.pino(Oe.getDefaultLoggerOptions({ level: e.logger || k0 })), this.messages = new nv(this.logger, e.core), this.subscriber = new fv(this, this.logger), this.publisher = new ov(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || $u, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ec}...`), await this.restartTransport(ec);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, V0);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, r, s) {
    this.isInitialized(), await this.publisher.publish(e, r, s), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var s;
    this.isInitialized();
    let i = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    return i || (await Promise.all([new Promise((n) => {
      this.subscriber.once(sr.created, (c) => {
        c.topic === e && n();
      });
    }), new Promise(async (n) => {
      i = await this.subscriber.subscribe(e, r), n();
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Rs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(sr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, s) => {
          try {
            await Rs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (i) {
            s(i);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message))
          throw r;
        this.provider.events.emit(dr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await ka())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Qy(new rm(jg({ sdkVersion: K0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: s } = e;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const i = this.messages.has(r, s);
    return i && this.logger.debug(`Ignoring duplicate message: ${s}`), i;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), vo(e)) {
      if (!e.method.endsWith(q0))
        return;
      const r = e.params, { topic: s, message: i, publishedAt: n } = r.data, c = { topic: s, message: i, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(mv({ type: "event", event: r.id }, c)), this.events.emit(r.id, c), await this.acknowledgePayload(e), await this.onMessageEvent(c);
    } else
      Zi(e) && this.events.emit(wt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(wt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = yo(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(dr.payload, this.onPayloadHandler), this.provider.off(dr.connect, this.onConnectHandler), this.provider.off(dr.disconnect, this.onDisconnectHandler), this.provider.off(dr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(wt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await ka();
    Ay(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(wt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, te.toMiliseconds(B0)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
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
var bv = Object.defineProperty, oc = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, wv = Object.prototype.propertyIsEnumerable, ac = (t, e, r) => e in t ? bv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, cc = (t, e) => {
  for (var r in e || (e = {}))
    _v.call(e, r) && ac(t, r, e[r]);
  if (oc)
    for (var r of oc(e))
      wv.call(e, r) && ac(t, r, e[r]);
  return t;
};
class Yi extends Fd {
  constructor(e, r, s, i = Dr, n = void 0) {
    super(e, r, s, i), this.core = e, this.logger = r, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = H0, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((c) => {
        this.getKey && c !== null && !xt(c) ? this.map.set(this.getKey(c), c) : cy(c) ? this.map.set(c.id, c) : uy(c) && this.map.set(c.topic, c);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (c, o) => {
      this.isInitialized(), this.map.has(c) ? await this.update(c, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: c, value: o }), this.map.set(c, o), await this.persist());
    }, this.get = (c) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: c }), this.getData(c)), this.getAll = (c) => (this.isInitialized(), c ? this.values.filter((o) => Object.keys(c).every((h) => im(o[h], c[h]))) : this.values), this.update = async (c, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: c, update: o });
      const h = cc(cc({}, this.getData(c)), o);
      this.map.set(c, h), await this.persist();
    }, this.delete = async (c, o) => {
      this.isInitialized(), this.map.has(c) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: c, reason: o }), this.map.delete(c), await this.persist());
    }, this.logger = Oe.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = n;
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
      const { message: s } = Z("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
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
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ev {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = J0, this.version = Q0, this.events = new to(), this.initialized = !1, this.storagePrefix = Dr, this.ignoredPayloadTypes = [Jr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = Mn(), i = await this.core.crypto.setSymKey(s), n = Bt(te.FIVE_MINUTES), c = { protocol: Mu }, o = { topic: i, expiry: n, relay: c, active: !1 }, h = Qg({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: s, relay: c });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, n), { topic: i, uri: h };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: i, symKey: n, relay: c } = Gg(s.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const o = Bt(te.FIVE_MINUTES), h = { topic: i, relay: c, expiry: o, active: !1 };
      return await this.pairings.set(i, h), await this.core.crypto.setSymKey(n, i), await this.core.relayer.subscribe(i, { relay: c }), this.core.expirer.set(i, o), s.activatePairing && await this.activate({ topic: i }), h;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const i = Bt(te.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: i }), this.core.expirer.set(s, i);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: i } = s;
      if (this.pairings.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_pairingPing", {}), { done: c, resolve: o, reject: h } = ts();
        this.events.once(Je("pairing_ping", n), ({ error: l }) => {
          l ? h(l) : o();
        }), await c();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: i });
    }, this.updateMetadata = async ({ topic: s, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: i } = s;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", lt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (s, i, n) => {
      const c = Ps(i, n), o = await this.core.crypto.encode(s, c), h = Ss[i].req;
      return this.core.history.set(s, c), this.core.relayer.publish(s, o, h), c.id;
    }, this.sendResult = async (s, i, n) => {
      const c = yo(s, n), o = await this.core.crypto.encode(i, c), h = await this.core.history.get(i, s), l = Ss[h.request.method].res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(c);
    }, this.sendError = async (s, i, n) => {
      const c = mo(s, n), o = await this.core.crypto.encode(i, c), h = await this.core.history.get(i, s), l = Ss[h.request.method] ? Ss[h.request.method].res : Ss.unregistered_method.res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(c);
    }, this.deletePairing = async (s, i) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, lt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), i ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((i) => Er(i.expiry));
      await Promise.all(s.map((i) => this.deletePairing(i.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: i, payload: n } = s;
      switch (n.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i, n);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i, n);
        default:
          return this.onUnknownRpcMethodRequest(i, n);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: i, payload: n } = s, c = (await this.core.history.get(i, n.id)).request.method;
      switch (c) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, n);
        default:
          return this.onUnknownRpcMethodResponse(c);
      }
    }, this.onPairingPingRequest = async (s, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(n, s, !0), this.events.emit("pairing_ping", { id: n, topic: s });
      } catch (c) {
        await this.sendError(n, s, c), this.logger.error(c);
      }
    }, this.onPairingPingResponse = (s, i) => {
      const { id: n } = i;
      setTimeout(() => {
        pr(i) ? this.events.emit(Je("pairing_ping", n), {}) : Kt(i) && this.events.emit(Je("pairing_ping", n), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit("pairing_delete", { id: n, topic: s });
      } catch (c) {
        await this.sendError(n, s, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodRequest = async (s, i) => {
      const { id: n, method: c } = i;
      try {
        if (this.registeredMethods.includes(c))
          return;
        const o = lt("WC_METHOD_UNSUPPORTED", c);
        await this.sendError(n, s, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(lt("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      if (!At(s)) {
        const { message: i } = Z("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(i);
      }
      if (!ay(s.uri)) {
        const { message: i } = Z("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (s) => {
      if (!At(s)) {
        const { message: n } = Z("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(n);
      }
      const { topic: i } = s;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (s) => {
      if (!At(s)) {
        const { message: n } = Z("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(n);
      }
      const { topic: i } = s;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (s) => {
      if (!ht(s, !1)) {
        const { message: i } = Z("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: i } = Z("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(i);
      }
      if (Er(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: i } = Z("EXPIRED", `pairing topic: ${s}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = Oe.generateChildLogger(r, this.name), this.pairings = new Yi(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(wt.message, async (e) => {
      const { topic: r, message: s } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const i = await this.core.crypto.decode(r, s);
      try {
        vo(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Zi(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(jt.expired, async (e) => {
      const { topic: r } = mu(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Sv extends Rd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Yt.EventEmitter(), this.name = X0, this.version = ev, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, i, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: i, chainId: n }), this.records.has(i.id))
        return;
      const c = { id: i.id, topic: s, request: { method: i.method, params: i.params || null }, chainId: n, expiry: Bt(te.THIRTY_DAYS) };
      this.records.set(c.id, c), this.events.emit(rr.created, c);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const i = await this.getRecord(s.id);
      typeof i.response > "u" && (i.response = Kt(s) ? { error: s.error } : { result: s.result }, this.records.set(i.id, i), this.events.emit(rr.updated, i));
    }, this.get = async (s, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: i }), await this.getRecord(i)), this.delete = (s, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((n) => {
        if (n.topic === s) {
          if (typeof i < "u" && n.id !== i)
            return;
          this.records.delete(n.id), this.events.emit(rr.deleted, n);
        }
      });
    }, this.exists = async (s, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === s : !1), this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.logger = Oe.generateChildLogger(r, this.name);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
      const s = { topic: r.topic, request: Ps(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(s);
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
      const { message: s } = Z("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(rr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(rr.created, (e) => {
      const r = rr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(rr.updated, (e) => {
      const r = rr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(rr.deleted, (e) => {
      const r = rr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(hs.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        te.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Dv extends $d {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Yt.EventEmitter(), this.name = tv, this.version = rv, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const i = this.formatTarget(s);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, i) => {
      this.isInitialized();
      const n = this.formatTarget(s), c = { target: n, expiry: i };
      this.expirations.set(n, c), this.checkExpiry(n, c), this.events.emit(jt.created, { target: n, expiration: c });
    }, this.get = (s) => {
      this.isInitialized();
      const i = this.formatTarget(s);
      return this.getExpiration(i);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const i = this.formatTarget(s), n = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(jt.deleted, { target: i, expiration: n });
      }
    }, this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.logger = Oe.generateChildLogger(r, this.name);
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
      return kg(e);
    if (typeof e == "number")
      return zg(e);
    const { message: r } = Z("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(jt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: s } = Z("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: s } = r;
    te.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(jt.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(hs.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(jt.created, (e) => {
      const r = jt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(jt.expired, (e) => {
      const r = jt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(jt.deleted, (e) => {
      const r = jt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class xv extends jd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = gn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || Wi() || !Ys())
        return;
      const i = (s == null ? void 0 : s.verifyUrl) || _i;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (n) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(n);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = tc;
        try {
          await this.createIframe();
        } catch (n) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(n), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const i = (s == null ? void 0 : s.verifyUrl) || _i;
      let n = "";
      try {
        n = await this.fetchAttestation(s.attestationId, i);
      } catch (c) {
        this.logger.warn(`failed to resolve attestation: ${s.attestationId} from url: ${i}`), this.logger.warn(c), n = await this.fetchAttestation(s.attestationId, tc);
      }
      return n;
    }, this.fetchAttestation = async (s, i) => {
      var n;
      this.logger.info(`resolving attestation: ${s} from url: ${i}`);
      const c = this.startAbortTimer(te.ONE_SECOND * 2), o = await fetch(`${i}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(c), o.status === 200 ? (n = await o.json()) == null ? void 0 : n.origin : "";
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var i;
      try {
        if (!this.iframe)
          return;
        (i = this.iframe.contentWindow) == null || i.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const i = (n) => {
        n.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", i), s());
      };
      await Promise.race([new Promise((n) => {
        if (document.getElementById(gn))
          return n();
        window.addEventListener("message", i);
        const c = document.createElement("iframe");
        c.id = gn, c.src = `${this.verifyUrl}/${this.projectId}`, c.style.display = "none", document.body.append(c), this.iframe = c, s = n;
      }), new Promise((n, c) => setTimeout(() => {
        window.removeEventListener("message", i), c("verify iframe load timeout");
      }, te.toMiliseconds(te.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Oe.generateChildLogger(r, this.name), this.verifyUrl = _i, this.abortController = new AbortController(), this.isDevEnv = ho() && process.env.IS_VITEST;
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), te.toMiliseconds(e));
  }
}
var Iv = Object.defineProperty, uc = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, lc = (t, e, r) => e in t ? Iv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hc = (t, e) => {
  for (var r in e || (e = {}))
    Ov.call(e, r) && lc(t, r, e[r]);
  if (uc)
    for (var r of uc(e))
      Cv.call(e, r) && lc(t, r, e[r]);
  return t;
};
class _o extends Ad {
  constructor(e) {
    super(e), this.protocol = Fu, this.version = T0, this.name = bo, this.events = new Yt.EventEmitter(), this.initialized = !1, this.on = (s, i) => this.events.on(s, i), this.once = (s, i) => this.events.once(s, i), this.off = (s, i) => this.events.off(s, i), this.removeListener = (s, i) => this.events.removeListener(s, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || $u;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Oe.pino(Oe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || N0.logger }));
    this.logger = Oe.generateChildLogger(r, this.name), this.heartbeat = new hs.HeartBeat(), this.crypto = new iv(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Sv(this, this.logger), this.expirer = new Dv(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Zh(hc(hc({}, A0), e == null ? void 0 : e.storageOptions)), this.relayer = new vv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ev(this, this.logger), this.verify = new xv(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new _o(e);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(W0, s), r;
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
const Tv = _o, ju = "wc", ku = 2, zu = "client", wo = `${ju}@${ku}:${zu}:`, mn = { name: zu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, dc = "WALLETCONNECT_DEEPLINK_CHOICE", Nv = "proposal", Av = "Proposal expired", Rv = "session", pi = te.SEVEN_DAYS, Pv = "engine", xs = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, vn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, fr = { idle: "IDLE", active: "ACTIVE" }, Lv = "request", Uv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Fv = Object.defineProperty, Mv = Object.defineProperties, $v = Object.getOwnPropertyDescriptors, fc = Object.getOwnPropertySymbols, jv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, pc = (t, e, r) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tt = (t, e) => {
  for (var r in e || (e = {}))
    jv.call(e, r) && pc(t, r, e[r]);
  if (fc)
    for (var r of fc(e))
      kv.call(e, r) && pc(t, r, e[r]);
  return t;
}, Is = (t, e) => Mv(t, $v(e));
class zv extends zd {
  constructor(e) {
    super(e), this.name = Pv, this.events = new to(), this.initialized = !1, this.ignoredPayloadTypes = [Jr], this.requestQueue = { state: fr.idle, queue: [] }, this.sessionRequestQueue = { state: fr.idle, queue: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(xs) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const s = Is(Tt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: c, sessionProperties: o, relays: h } = s;
      let l = i, d, f = !1;
      if (l && (f = this.client.core.pairing.pairings.get(l).active), !l || !f) {
        const { topic: O, uri: v } = await this.client.core.pairing.create();
        l = O, d = v;
      }
      const y = await this.client.core.crypto.generateKeyPair(), b = Tt({ requiredNamespaces: n, optionalNamespaces: c, relays: h ?? [{ protocol: Mu }], proposer: { publicKey: y, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: _, resolve: C, done: L } = ts(te.FIVE_MINUTES, Av);
      if (this.events.once(Je("session_connect"), async ({ error: O, session: v }) => {
        if (O)
          _(O);
        else if (v) {
          v.self.publicKey = y;
          const E = Is(Tt({}, v), { requiredNamespaces: v.requiredNamespaces, optionalNamespaces: v.optionalNamespaces });
          await this.client.session.set(v.topic, E), await this.setExpiry(v.topic, v.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: v.peer.metadata }), C(E);
        }
      }), !l) {
        const { message: O } = Z("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(O);
      }
      const F = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: b }), S = Bt(te.FIVE_MINUTES);
      return await this.setProposal(F, Tt({ id: F, expiry: S }, b)), { uri: d, approval: L };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: s, relayProtocol: i, namespaces: n, sessionProperties: c } = r, o = this.client.proposal.get(s);
      let { pairingTopic: h, proposer: l, requiredNamespaces: d, optionalNamespaces: f } = o;
      h = h || "", Cs(d) || (d = ry(n, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), b = l.publicKey, _ = await this.client.core.crypto.generateSharedKey(y, b);
      h && s && (await this.client.core.pairing.updateMetadata({ topic: h, metadata: l.metadata }), await this.sendResult({ id: s, topic: h, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(s, lt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: h }));
      const C = Tt({ relay: { protocol: i ?? "irn" }, namespaces: n, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: h, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Bt(pi) }, c && { sessionProperties: c });
      await this.client.core.relayer.subscribe(_), await this.sendRequest({ topic: _, method: "wc_sessionSettle", params: C, throwOnFailedPublish: !0 });
      const L = Is(Tt({}, C), { topic: _, pairingTopic: h, acknowledged: !1, self: C.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: y });
      return await this.client.session.set(_, L), await this.setExpiry(_, Bt(pi)), { topic: _, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(_)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: s, reason: i } = r, { pairingTopic: n } = this.client.proposal.get(s);
      n && (await this.sendError(s, n, i), await this.client.proposal.delete(s, lt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: s, namespaces: i } = r, n = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: c, resolve: o, reject: h } = ts();
      return this.events.once(Je("session_update", n), ({ error: l }) => {
        l ? h(l) : o();
      }), await this.client.session.update(s, { namespaces: i }), { acknowledged: c };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: s } = r, i = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: n, resolve: c, reject: o } = ts();
      return this.events.once(Je("session_extend", i), ({ error: h }) => {
        h ? o(h) : c();
      }), await this.setExpiry(s, Bt(pi)), { acknowledged: n };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: s, request: i, topic: n, expiry: c } = r, o = go(), { done: h, resolve: l, reject: d } = ts(c);
      return this.events.once(Je("session_request", o), ({ error: f, result: y }) => {
        f ? d(f) : l(y);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: n, method: "wc_sessionRequest", params: { request: i, chainId: s }, expiry: c, throwOnFailedPublish: !0 }).catch((y) => d(y)), this.client.events.emit("session_request_sent", { topic: n, request: i, chainId: s, id: o }), f();
      }), new Promise(async (f) => {
        const y = await this.client.core.storage.getItem(dc);
        qg({ id: o, topic: n, wcDeepLink: y }), f();
      }), h()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: s, response: i } = r, { id: n } = i;
      pr(i) ? await this.sendResult({ id: n, topic: s, result: i.result, throwOnFailedPublish: !0 }) : Kt(i) && await this.sendError(n, s, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: s } = r;
      if (this.client.session.keys.includes(s)) {
        const i = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: n, resolve: c, reject: o } = ts();
        this.events.once(Je("session_ping", i), ({ error: h }) => {
          h ? o(h) : c();
        }), await n();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: s, event: i, chainId: n } = r;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: i, chainId: n } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: s } = r;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: lt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((s) => ny(s, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((n) => {
            var c, o;
            return ((c = n.peerMetadata) == null ? void 0 : c.url) && ((o = n.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && n.topic && n.topic !== s.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (r, s) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, lt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), s || this.client.core.expirer.del(r), this.client.core.storage.removeItem(dc).catch((n) => this.client.logger.warn(n));
    }, this.deleteProposal = async (r, s) => {
      await Promise.all([this.client.proposal.delete(r, lt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, s, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, s), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== r), i && (this.sessionRequestQueue.state = fr.idle);
    }, this.setExpiry = async (r, s) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: s }), this.client.core.expirer.set(r, s);
    }, this.setProposal = async (r, s) => {
      await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const s = xs.wc_sessionRequest.req.ttl, { id: i, topic: n, params: c } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: n, params: c }), s && this.client.core.expirer.set(i, Bt(s));
    }, this.sendRequest = async (r) => {
      const { topic: s, method: i, params: n, expiry: c, relayRpcId: o, clientRpcId: h, throwOnFailedPublish: l } = r, d = Ps(i, n, h);
      if (Ys() && Uv.includes(i)) {
        const b = os(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: b });
      }
      const f = await this.client.core.crypto.encode(s, d), y = xs[i].req;
      return c && (y.ttl = c), o && (y.id = o), this.client.core.history.set(s, d), l ? (y.internal = Is(Tt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, f, y)) : this.client.core.relayer.publish(s, f, y).catch((b) => this.client.logger.error(b)), d.id;
    }, this.sendResult = async (r) => {
      const { id: s, topic: i, result: n, throwOnFailedPublish: c } = r, o = yo(s, n), h = await this.client.core.crypto.encode(i, o), l = await this.client.core.history.get(i, s), d = xs[l.request.method].res;
      c ? (d.internal = Is(Tt({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, h, d)) : this.client.core.relayer.publish(i, h, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, s, i) => {
      const n = mo(r, i), c = await this.client.core.crypto.encode(s, n), o = await this.client.core.history.get(s, r), h = xs[o.request.method].res;
      this.client.core.relayer.publish(s, c, h), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const r = [], s = [];
      this.client.session.getAll().forEach((i) => {
        Er(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Er(i.expiry) && s.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...s.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === fr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = fr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = fr.idle;
    }, this.processRequest = (r) => {
      const { topic: s, payload: i } = r, n = i.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, i);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, i);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, i);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, i);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, i);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, i);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, i);
        default:
          return this.client.logger.info(`Unsupported request method ${n}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: s, payload: i } = r, n = (await this.client.core.history.get(s, i.id)).request.method;
      switch (n) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, i);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, i);
        default:
          return this.client.logger.info(`Unsupported response method ${n}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: s } = r, { message: i } = Z("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, s) => {
      const { params: i, id: n } = s;
      try {
        this.isValidConnect(Tt({}, s.params));
        const c = Bt(te.FIVE_MINUTES), o = Tt({ id: n, pairingTopic: r, expiry: c }, i);
        await this.setProposal(n, o);
        const h = os(JSON.stringify(s)), l = await this.getVerifyContext(h, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: o, verifyContext: l });
      } catch (c) {
        await this.sendError(n, r, c), this.client.logger.error(c);
      }
    }, this.onSessionProposeResponse = async (r, s) => {
      const { id: i } = s;
      if (pr(s)) {
        const { result: n } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const c = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: c });
        const o = c.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const h = n.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const l = await this.client.core.crypto.generateSharedKey(o, h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const d = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Kt(s) && (await this.client.proposal.delete(i, lt("USER_DISCONNECTED")), this.events.emit(Je("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: c, controller: o, expiry: h, namespaces: l, requiredNamespaces: d, optionalNamespaces: f, sessionProperties: y, pairingTopic: b } = s.params, _ = Tt({ topic: r, relay: c, expiry: h, namespaces: l, acknowledged: !0, pairingTopic: b, requiredNamespaces: d, optionalNamespaces: f, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: s.id, topic: r, result: !0 }), this.events.emit(Je("session_connect"), { session: _ }), this.cleanupDuplicatePairings(_);
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.onSessionSettleResponse = async (r, s) => {
      const { id: i } = s;
      pr(s) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Je("session_approve", i), {})) : Kt(s) && (await this.client.session.delete(r, lt("USER_DISCONNECTED")), this.events.emit(Je("session_approve", i), { error: s.error }));
    }, this.onSessionUpdateRequest = async (r, s) => {
      const { params: i, id: n } = s;
      try {
        const c = `${r}_session_update`, o = fi.get(c);
        if (o && this.isRequestOutOfSync(o, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidUpdate(Tt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_update", { id: n, topic: r, params: i }), fi.set(c, n);
      } catch (c) {
        await this.sendError(n, r, c), this.client.logger.error(c);
      }
    }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
      const { id: i } = s;
      pr(s) ? this.events.emit(Je("session_update", i), {}) : Kt(s) && this.events.emit(Je("session_update", i), { error: s.error });
    }, this.onSessionExtendRequest = async (r, s) => {
      const { id: i } = s;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Bt(pi)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (n) {
        await this.sendError(i, r, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (r, s) => {
      const { id: i } = s;
      pr(s) ? this.events.emit(Je("session_extend", i), {}) : Kt(s) && this.events.emit(Je("session_extend", i), { error: s.error });
    }, this.onSessionPingRequest = async (r, s) => {
      const { id: i } = s;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: i, topic: r });
      } catch (n) {
        await this.sendError(i, r, n), this.client.logger.error(n);
      }
    }, this.onSessionPingResponse = (r, s) => {
      const { id: i } = s;
      setTimeout(() => {
        pr(s) ? this.events.emit(Je("session_ping", i), {}) : Kt(s) && this.events.emit(Je("session_ping", i), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: r, reason: s.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(wt.publish, async () => {
            n(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        this.isValidRequest(Tt({ topic: r }, n)), await this.setPendingSessionRequest({ id: i, topic: r, params: n }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: n }), await this.processSessionRequestQueue();
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.onSessionRequestResponse = (r, s) => {
      const { id: i } = s;
      pr(s) ? this.events.emit(Je("session_request", i), { result: s.result }) : Kt(s) && this.events.emit(Je("session_request", i), { error: s.error });
    }, this.onSessionEventRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        const c = `${r}_session_event_${n.event.name}`, o = fi.get(c);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(Tt({ topic: r }, n)), this.client.events.emit("session_event", { id: i, topic: r, params: n }), fi.set(c, i);
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = fr.idle, this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === fr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: s, topic: i, params: n } = r, c = os(JSON.stringify(Ps("wc_sessionRequest", n, s))), o = this.client.session.get(i), h = await this.getVerifyContext(c, o.peer.metadata);
        this.sessionRequestQueue.state = fr.active, this.client.events.emit("session_request", { id: s, topic: i, params: n, verifyContext: h });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.isValidConnect = async (r) => {
      if (!At(r)) {
        const { message: h } = Z("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: c, relays: o } = r;
      if (xt(s) || await this.isValidPairingTopic(s), !my(o, !0)) {
        const { message: h } = Z("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(h);
      }
      !xt(i) && Cs(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !xt(n) && Cs(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), xt(c) || this.validateSessionProps(c, "sessionProperties");
    }, this.validateNamespaces = (r, s) => {
      const i = yy(r, "connect()", s);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!At(r))
        throw new Error(Z("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: s, namespaces: i, relayProtocol: n, sessionProperties: c } = r;
      await this.isValidProposalId(s);
      const o = this.client.proposal.get(s), h = bi(i, "approve()");
      if (h)
        throw new Error(h.message);
      const l = $a(o.requiredNamespaces, i, "approve()");
      if (l)
        throw new Error(l.message);
      if (!ht(n, !0)) {
        const { message: d } = Z("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(d);
      }
      xt(c) || this.validateSessionProps(c, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!At(r)) {
        const { message: n } = Z("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(n);
      }
      const { id: s, reason: i } = r;
      if (await this.isValidProposalId(s), !by(i)) {
        const { message: n } = Z("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!At(r)) {
        const { message: l } = Z("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: s, controller: i, namespaces: n, expiry: c } = r;
      if (!bu(s)) {
        const { message: l } = Z("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = ly(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const h = bi(n, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      if (Er(c)) {
        const { message: l } = Z("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!At(r)) {
        const { message: h } = Z("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(h);
      }
      const { topic: s, namespaces: i } = r;
      await this.isValidSessionTopic(s);
      const n = this.client.session.get(s), c = bi(i, "update()");
      if (c)
        throw new Error(c.message);
      const o = $a(n.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!At(r)) {
        const { message: i } = Z("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (r) => {
      if (!At(r)) {
        const { message: h } = Z("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(h);
      }
      const { topic: s, request: i, chainId: n, expiry: c } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Ma(o, n)) {
        const { message: h } = Z("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(h);
      }
      if (!_y(i)) {
        const { message: h } = Z("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(h);
      }
      if (!Sy(o, n, i.method)) {
        const { message: h } = Z("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(h);
      }
      if (c && !Oy(c, vn)) {
        const { message: h } = Z("MISSING_OR_INVALID", `request() expiry: ${c}. Expiry must be a number (in seconds) between ${vn.min} and ${vn.max}`);
        throw new Error(h);
      }
    }, this.isValidRespond = async (r) => {
      if (!At(r)) {
        const { message: n } = Z("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(n);
      }
      const { topic: s, response: i } = r;
      if (await this.isValidSessionTopic(s), !wy(i)) {
        const { message: n } = Z("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (r) => {
      if (!At(r)) {
        const { message: i } = Z("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (r) => {
      if (!At(r)) {
        const { message: o } = Z("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: s, event: i, chainId: n } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: c } = this.client.session.get(s);
      if (!Ma(c, n)) {
        const { message: o } = Z("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(o);
      }
      if (!Ey(i)) {
        const { message: o } = Z("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!Dy(c, n, i.name)) {
        const { message: o } = Z("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!At(r)) {
        const { message: i } = Z("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (r, s) => {
      const i = { verified: { verifyUrl: s.verifyUrl || _i, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: s.verifyUrl });
        n && (i.verified.origin = n, i.verified.validation = n === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.error(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, s) => {
      Object.values(r).forEach((i) => {
        if (!ht(i, !1)) {
          const { message: n } = Z("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(n);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = Z("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(wt.message, async (e) => {
      const { topic: r, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const i = await this.client.core.crypto.decode(r, s);
      try {
        vo(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Zi(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (n) {
        this.client.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(jt.expired, async (e) => {
      const { topic: r, id: s } = mu(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, Z("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  isValidPairingTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = Z("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Z("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Er(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Z("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = Z("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Z("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Er(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = Z("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (ht(e, !1)) {
      const { message: r } = Z("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Z("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!vy(e)) {
      const { message: r } = Z("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Z("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Er(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = Z("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class qv extends Yi {
  constructor(e, r) {
    super(e, r, Nv, wo), this.core = e, this.logger = r;
  }
}
class Bv extends Yi {
  constructor(e, r) {
    super(e, r, Rv, wo), this.core = e, this.logger = r;
  }
}
class Kv extends Yi {
  constructor(e, r) {
    super(e, r, Lv, wo, (s) => s.id), this.core = e, this.logger = r;
  }
}
class Eo extends kd {
  constructor(e) {
    super(e), this.protocol = ju, this.version = ku, this.name = mn.name, this.events = new Yt.EventEmitter(), this.on = (s, i) => this.events.on(s, i), this.once = (s, i) => this.events.once(s, i), this.off = (s, i) => this.events.off(s, i), this.removeListener = (s, i) => this.events.removeListener(s, i), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (e == null ? void 0 : e.name) || mn.name, this.metadata = (e == null ? void 0 : e.metadata) || Ug();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Oe.pino(Oe.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || mn.logger }));
    this.core = (e == null ? void 0 : e.core) || new Tv(e), this.logger = Oe.generateChildLogger(r, this.name), this.session = new Bv(this.core, this.logger), this.proposal = new qv(this.core, this.logger), this.pendingRequest = new Kv(this.core, this.logger), this.engine = new zv(this);
  }
  static async init(e) {
    const r = new Eo(e);
    return await r.initialize(), r;
  }
  get context() {
    return Oe.getLoggerContext(this.logger);
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
var Vv = Object.defineProperty, Hv = Object.defineProperties, Wv = Object.getOwnPropertyDescriptors, gc = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, yc = (t, e, r) => e in t ? Vv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yv = (t, e) => {
  for (var r in e || (e = {}))
    Zv.call(e, r) && yc(t, r, e[r]);
  if (gc)
    for (var r of gc(e))
      Gv.call(e, r) && yc(t, r, e[r]);
  return t;
}, Jv = (t, e) => Hv(t, Wv(e)), So = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, $e = (t, e, r) => (So(t, e, "read from private field"), r ? r.call(t) : e.get(t)), kr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ti = (t, e, r, s) => (So(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r), vt = (t, e, r) => (So(t, e, "access private method"), r), zr, rs, Os, ut, zn, qu, bt, Dt, qn, mc;
let Qv = class {
  constructor(e) {
    kr(this, zn), kr(this, bt), kr(this, qn), kr(this, zr, void 0), kr(this, rs, void 0), kr(this, Os, void 0), kr(this, ut, void 0), Ti(this, zr, e), Ti(this, rs, vt(this, zn, qu).call(this)), vt(this, bt, Dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: s } = e;
    return new Promise(async (i, n) => {
      await vt(this, bt, Dt).call(this);
      const c = $e(this, rs).subscribeModal((l) => {
        l.open || (c(), n(new Error("Modal closed")));
      }), { uri: o, approval: h } = await $e(this, ut).connect(e);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), s && Object.values(s).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), await $e(this, rs).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await h();
        i(l);
      } catch (l) {
        n(l);
      } finally {
        c(), $e(this, rs).closeModal();
      }
    });
  }
  async disconnect(e) {
    await vt(this, bt, Dt).call(this), await $e(this, ut).disconnect(e);
  }
  async request(e) {
    return await vt(this, bt, Dt).call(this), await $e(this, ut).request(e);
  }
  async getSessions() {
    return await vt(this, bt, Dt).call(this), $e(this, ut).session.getAll();
  }
  async getSession() {
    return await vt(this, bt, Dt).call(this), $e(this, ut).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).on("session_event", e);
  }
  async offSessionEvent(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).off("session_update", e);
  }
  async onSessionDelete(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await vt(this, bt, Dt).call(this), $e(this, ut).off("session_expire", e);
  }
};
zr = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakSet(), qu = function() {
  const { modalOptions: t, projectId: e } = $e(this, zr);
  return new lh(Jv(Yv({}, t), { projectId: e }));
}, bt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return $e(this, ut) ? !0 : (!$e(this, Os) && typeof window < "u" && Ti(this, Os, vt(this, qn, mc).call(this)), $e(this, Os));
}, qn = /* @__PURE__ */ new WeakSet(), mc = async function() {
  Ti(this, ut, await Eo.init({ metadata: $e(this, zr).metadata, projectId: $e(this, zr).projectId, relayUrl: $e(this, zr).relayUrl }));
  const t = await $e(this, ut).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Bu = [
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
], Do = ["aleo:1"], Ku = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], Xv = "f0aaeffe71b636da453fce042d79d723", eb = {
  standaloneChains: Do,
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
}, J_ = {
  requiredNamespaces: {
    aleo: {
      methods: Bu,
      chains: Do,
      events: Ku
    }
  }
}, tb = "@puzzlehq/sdk-core", rb = "Puzzle SDK", sb = "0.2.18", ib = "Your portal to privacy", nb = "./dist/puzzle.cjs.js", ob = "./dist/puzzle.es.js", ab = "./dist/puzzle.umd.js", cb = "./dist/types/index.d.ts", ub = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, lb = "module", hb = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, db = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, fb = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, pb = {
  buffer: "^6.0.3"
}, gb = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], yb = "Puzzle", mb = "ISC", vb = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, bb = "https://github.com/puzzlehq/puzzle-sdk#readme", vc = {
  name: tb,
  displayName: rb,
  version: sb,
  description: ib,
  main: nb,
  module: ob,
  browser: ab,
  types: cb,
  private: !1,
  exports: ub,
  type: lb,
  scripts: hb,
  repository: db,
  dependencies: fb,
  peerDependencies: pb,
  keywords: gb,
  author: yb,
  license: mb,
  bugs: vb,
  homepage: bb
}, _b = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Vu(t, e) {
  const { message: r, code: s } = _b[t];
  return { message: e ? `${r} ${e}` : r, code: s };
}
const Hu = new to();
let is;
async function Q_(t) {
  let e = !1;
  const r = vc.version, s = localStorage.getItem("puzzle_sdk_version");
  if (r !== s && (console.log(`${vc.name}: Updated from ` + s + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), is = new Qv({
    projectId: Xv,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...eb }
  }), e)
    try {
      wb(is, t.onDisconnect);
    } catch (i) {
      console.error(i);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function wb(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: Vu("USER_DISCONNECTED")
  }));
}
async function kt() {
  return new Promise((t) => {
    if (is)
      t(is);
    else {
      const e = setInterval(() => {
        is && (clearInterval(e), t(is));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const X_ = async () => {
  const t = await kt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
  } catch (r) {
    const s = r.message;
    return console.error("getAccount error", s), { error: s };
  }
}, ew = async ({ address: t }) => {
  const e = await kt(), r = await e.getSession();
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
  } catch (s) {
    const i = s.message;
    return console.error("getBalance error", i), { error: i };
  }
}, tw = async () => {
  const t = await kt();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Bu,
          chains: Do,
          events: Ku
        }
      }
    });
    return Hu.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, rw = async (t) => {
  const e = await kt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const s = t == null ? void 0 : t.inputs.map((i) => typeof i == "string" ? i : i.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: s
        }
      }
    });
  } catch (i) {
    const n = i.message;
    return console.error("createEvent error", n), { error: n };
  }
}, sw = async () => {
  const t = await kt(), e = await (t == null ? void 0 : t.getSession());
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
    const s = r.message;
    return console.error("createSharedState error", s), { error: s };
  }
}, iw = async (t) => {
  const e = await kt(), r = await (e == null ? void 0 : e.getSession());
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
  } catch (s) {
    return console.error("decrypt error", s.message), { error: s.message };
  }
}, nw = async () => {
  const t = await kt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: Vu("USER_DISCONNECTED"),
        topic: e.topic
      }), Hu.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const s = r.message;
    return console.error("error disconnecting", s), { error: s };
  }
}, ow = async ({
  id: t,
  address: e
}) => {
  const r = await kt(), s = await (r == null ? void 0 : r.getSession());
  if (!s || !r)
    return { event: void 0, error: "no session or connection" };
  const i = async () => await r.request({
    topic: s.topic,
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
  } catch (n) {
    const c = n.message;
    return console.error("getEvents error", c), { error: c };
  }
}, aw = async (t) => {
  const e = await kt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = async (i = 0) => await e.request({
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
    return await s();
  } catch (i) {
    const n = i.message;
    return console.error("getEvents error", n), { error: n };
  }
}, cw = async (t) => {
  const e = await kt(), r = await (e == null ? void 0 : e.getSession());
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
  } catch (s) {
    const i = s.message;
    return console.error("importSharedState error", i), { error: i };
  }
}, uw = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const s = await kt(), i = await (s == null ? void 0 : s.getSession());
  if (!i || !s)
    return { error: "no session or connection" };
  const n = async (c = 0) => await s.request({
    topic: i.topic,
    chainId: "aleo:1",
    request: {
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
    return await n();
  } catch (c) {
    const o = c.message;
    return console.error("getRecords error", o), { error: o };
  }
};
var Te;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function r(i) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (i) => {
    const n = {};
    for (const c of i)
      n[c] = c;
    return n;
  }, t.getValidEnumValues = (i) => {
    const n = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), c = {};
    for (const o of n)
      c[o] = i[o];
    return t.objectValues(c);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(n) {
    return i[n];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const n = [];
    for (const c in i)
      Object.prototype.hasOwnProperty.call(i, c) && n.push(c);
    return n;
  }, t.find = (i, n) => {
    for (const c of i)
      if (n(c))
        return c;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function s(i, n = " | ") {
    return i.map((c) => typeof c == "string" ? `'${c}'` : c).join(n);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (i, n) => typeof n == "bigint" ? n.toString() : n;
})(Te || (Te = {}));
var Bn;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Bn || (Bn = {}));
const Y = Te.arrayToEnum([
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
]), Sr = (t) => {
  switch (typeof t) {
    case "undefined":
      return Y.undefined;
    case "string":
      return Y.string;
    case "number":
      return isNaN(t) ? Y.nan : Y.number;
    case "boolean":
      return Y.boolean;
    case "function":
      return Y.function;
    case "bigint":
      return Y.bigint;
    case "symbol":
      return Y.symbol;
    case "object":
      return Array.isArray(t) ? Y.array : t === null ? Y.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? Y.promise : typeof Map < "u" && t instanceof Map ? Y.map : typeof Set < "u" && t instanceof Set ? Y.set : typeof Date < "u" && t instanceof Date ? Y.date : Y.object;
    default:
      return Y.unknown;
  }
}, V = Te.arrayToEnum([
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
]), Eb = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Wt extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(n) {
      return n.message;
    }, s = { _errors: [] }, i = (n) => {
      for (const c of n.issues)
        if (c.code === "invalid_union")
          c.unionErrors.map(i);
        else if (c.code === "invalid_return_type")
          i(c.returnTypeError);
        else if (c.code === "invalid_arguments")
          i(c.argumentsError);
        else if (c.path.length === 0)
          s._errors.push(r(c));
        else {
          let o = s, h = 0;
          for (; h < c.path.length; ) {
            const l = c.path[h];
            h === c.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(c))) : o[l] = o[l] || { _errors: [] }, o = o[l], h++;
          }
        }
    };
    return i(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Te.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, s = [];
    for (const i of this.issues)
      i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : s.push(e(i));
    return { formErrors: s, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Wt.create = (t) => new Wt(t);
const Ls = (t, e) => {
  let r;
  switch (t.code) {
    case V.invalid_type:
      t.received === Y.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case V.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Te.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Te.joinValues(t.keys, ", ")}`;
      break;
    case V.invalid_union:
      r = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Te.joinValues(t.options)}`;
      break;
    case V.invalid_enum_value:
      r = `Invalid enum value. Expected ${Te.joinValues(t.options)}, received '${t.received}'`;
      break;
    case V.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      r = "Invalid function return type";
      break;
    case V.invalid_date:
      r = "Invalid date";
      break;
    case V.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Te.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case V.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case V.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case V.custom:
      r = "Invalid input";
      break;
    case V.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case V.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Te.assertNever(t);
  }
  return { message: r };
};
let Wu = Ls;
function Sb(t) {
  Wu = t;
}
function Ni() {
  return Wu;
}
const Ai = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: i } = t, n = [...r, ...i.path || []], c = {
    ...i,
    path: n
  };
  let o = "";
  const h = s.filter((l) => !!l).slice().reverse();
  for (const l of h)
    o = l(c, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: n,
    message: i.message || o
  };
}, Db = [];
function Q(t, e) {
  const r = Ai({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ni(),
      Ls
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(r);
}
class Et {
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
    const s = [];
    for (const i of r) {
      if (i.status === "aborted")
        return ae;
      i.status === "dirty" && e.dirty(), s.push(i.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, r) {
    const s = [];
    for (const i of r)
      s.push({
        key: await i.key,
        value: await i.value
      });
    return Et.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, r) {
    const s = {};
    for (const i of r) {
      const { key: n, value: c } = i;
      if (n.status === "aborted" || c.status === "aborted")
        return ae;
      n.status === "dirty" && e.dirty(), c.status === "dirty" && e.dirty(), (typeof c.value < "u" || i.alwaysSet) && (s[n.value] = c.value);
    }
    return { status: e.value, value: s };
  }
}
const ae = Object.freeze({
  status: "aborted"
}), Zu = (t) => ({ status: "dirty", value: t }), Ct = (t) => ({ status: "valid", value: t }), Kn = (t) => t.status === "aborted", Vn = (t) => t.status === "dirty", Ri = (t) => t.status === "valid", Pi = (t) => typeof Promise < "u" && t instanceof Promise;
var re;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(re || (re = {}));
class nr {
  constructor(e, r, s, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = s, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const bc = (t, e) => {
  if (Ri(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Wt(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function de(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: s, description: i } = t;
  if (e && (r || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (c, o) => c.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: s ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class ge {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Sr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Sr(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Et(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Sr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Pi(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const s = this.safeParse(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, r) {
    var s;
    const i = {
      common: {
        issues: [],
        async: (s = r == null ? void 0 : r.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Sr(e)
    }, n = this._parseSync({ data: e, path: i.path, parent: i });
    return bc(i, n);
  }
  async parseAsync(e, r) {
    const s = await this.safeParseAsync(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, r) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Sr(e)
    }, i = this._parse({ data: e, path: s.path, parent: s }), n = await (Pi(i) ? i : Promise.resolve(i));
    return bc(s, n);
  }
  refine(e, r) {
    const s = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, n) => {
      const c = e(i), o = () => n.addIssue({
        code: V.custom,
        ...s(i)
      });
      return typeof Promise < "u" && c instanceof Promise ? c.then((h) => h ? !0 : (o(), !1)) : c ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((s, i) => e(s) ? !0 : (i.addIssue(typeof r == "function" ? r(s, i) : r), !1));
  }
  _refinement(e) {
    return new Gt({
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return gr.create(this, this._def);
  }
  nullable() {
    return Hr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Zt.create(this, this._def);
  }
  promise() {
    return ls.create(this, this._def);
  }
  or(e) {
    return $s.create([this, e], this._def);
  }
  and(e) {
    return js.create(this, e, this._def);
  }
  transform(e) {
    return new Gt({
      ...de(this._def),
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ks({
      ...de(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ie.ZodDefault
    });
  }
  brand() {
    return new Yu({
      typeName: ie.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Mi({
      ...de(this._def),
      innerType: this,
      catchValue: r,
      typeName: ie.ZodCatch
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
    return ei.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const xb = /^c[^\s-]{8,}$/i, Ib = /^[a-z][a-z0-9]*$/, Ob = /[0-9A-HJKMNP-TV-Z]{26}/, Cb = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Tb = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Nb = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), Ab = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Rb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Pb = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Lb(t, e) {
  return !!((e === "v4" || !e) && Ab.test(t) || (e === "v6" || !e) && Rb.test(t));
}
class Ht extends ge {
  constructor() {
    super(...arguments), this._regex = (e, r, s) => this.refinement((i) => e.test(i), {
      validation: r,
      code: V.invalid_string,
      ...re.errToObj(s)
    }), this.nonempty = (e) => this.min(1, re.errToObj(e)), this.trim = () => new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== Y.string) {
      const n = this._getOrReturnCtx(e);
      return Q(
        n,
        {
          code: V.invalid_type,
          expected: Y.string,
          received: n.parsedType
        }
        //
      ), ae;
    }
    const s = new Et();
    let i;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value && (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "length") {
        const c = e.data.length > n.value, o = e.data.length < n.value;
        (c || o) && (i = this._getOrReturnCtx(e, i), c ? Q(i, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : o && Q(i, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), s.dirty());
      } else if (n.kind === "email")
        Tb.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "email",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "emoji")
        Nb.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "emoji",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "uuid")
        Cb.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "uuid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid")
        xb.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "cuid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid2")
        Ib.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "cuid2",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "ulid")
        Ob.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "ulid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), Q(i, {
            validation: "url",
            code: V.invalid_string,
            message: n.message
          }), s.dirty();
        }
      else
        n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "regex",
          code: V.invalid_string,
          message: n.message
        }), s.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.invalid_string,
          validation: { includes: n.value, position: n.position },
          message: n.message
        }), s.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.invalid_string,
          validation: { startsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.invalid_string,
          validation: { endsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "datetime" ? Pb(n).test(e.data) || (i = this._getOrReturnCtx(e, i), Q(i, {
          code: V.invalid_string,
          validation: "datetime",
          message: n.message
        }), s.dirty()) : n.kind === "ip" ? Lb(e.data, n.version) || (i = this._getOrReturnCtx(e, i), Q(i, {
          validation: "ip",
          code: V.invalid_string,
          message: n.message
        }), s.dirty()) : Te.assertNever(n);
    return { status: s.value, value: e.data };
  }
  _addCheck(e) {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...re.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...re.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...re.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...re.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...re.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...re.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...re.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...re.errToObj(e) });
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
      ...re.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...re.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...re.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...re.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...re.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...re.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...re.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...re.errToObj(r)
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
Ht.create = (t) => {
  var e;
  return new Ht({
    checks: [],
    typeName: ie.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t)
  });
};
function Ub(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, i = r > s ? r : s, n = parseInt(t.toFixed(i).replace(".", "")), c = parseInt(e.toFixed(i).replace(".", ""));
  return n % c / Math.pow(10, i);
}
class xr extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== Y.number) {
      const n = this._getOrReturnCtx(e);
      return Q(n, {
        code: V.invalid_type,
        expected: Y.number,
        received: n.parsedType
      }), ae;
    }
    let s;
    const i = new Et();
    for (const n of this._def.checks)
      n.kind === "int" ? Te.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), i.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? Ub(e.data, n.value) !== 0 && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.not_finite,
        message: n.message
      }), i.dirty()) : Te.assertNever(n);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, re.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, re.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, re.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, re.toString(r));
  }
  setLimit(e, r, s, i) {
    return new xr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: re.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new xr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: re.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: re.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: re.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: re.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: re.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: re.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: re.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: re.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: re.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Te.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (r === null || s.value > r) && (r = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
xr.create = (t) => new xr({
  checks: [],
  typeName: ie.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Ir extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== Y.bigint) {
      const n = this._getOrReturnCtx(e);
      return Q(n, {
        code: V.invalid_type,
        expected: Y.bigint,
        received: n.parsedType
      }), ae;
    }
    let s;
    const i = new Et();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), Q(s, {
        code: V.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : Te.assertNever(n);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, re.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, re.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, re.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, re.toString(r));
  }
  setLimit(e, r, s, i) {
    return new Ir({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: re.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ir({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: re.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: re.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: re.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: re.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: re.toString(r)
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
Ir.create = (t) => {
  var e;
  return new Ir({
    checks: [],
    typeName: ie.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t)
  });
};
class Us extends ge {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Y.boolean) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.boolean,
        received: s.parsedType
      }), ae;
    }
    return Ct(e.data);
  }
}
Us.create = (t) => new Us({
  typeName: ie.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Kr extends ge {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== Y.date) {
      const n = this._getOrReturnCtx(e);
      return Q(n, {
        code: V.invalid_type,
        expected: Y.date,
        received: n.parsedType
      }), ae;
    }
    if (isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return Q(n, {
        code: V.invalid_date
      }), ae;
    }
    const s = new Et();
    let i;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (i = this._getOrReturnCtx(e, i), Q(i, {
        code: V.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), s.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (i = this._getOrReturnCtx(e, i), Q(i, {
        code: V.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), s.dirty()) : Te.assertNever(n);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Kr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: re.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: re.toString(r)
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
Kr.create = (t) => new Kr({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ie.ZodDate,
  ...de(t)
});
class Li extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.symbol) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.symbol,
        received: s.parsedType
      }), ae;
    }
    return Ct(e.data);
  }
}
Li.create = (t) => new Li({
  typeName: ie.ZodSymbol,
  ...de(t)
});
class Fs extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.undefined,
        received: s.parsedType
      }), ae;
    }
    return Ct(e.data);
  }
}
Fs.create = (t) => new Fs({
  typeName: ie.ZodUndefined,
  ...de(t)
});
class Ms extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.null) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.null,
        received: s.parsedType
      }), ae;
    }
    return Ct(e.data);
  }
}
Ms.create = (t) => new Ms({
  typeName: ie.ZodNull,
  ...de(t)
});
class us extends ge {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ct(e.data);
  }
}
us.create = (t) => new us({
  typeName: ie.ZodAny,
  ...de(t)
});
class Br extends ge {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ct(e.data);
  }
}
Br.create = (t) => new Br({
  typeName: ie.ZodUnknown,
  ...de(t)
});
class yr extends ge {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return Q(r, {
      code: V.invalid_type,
      expected: Y.never,
      received: r.parsedType
    }), ae;
  }
}
yr.create = (t) => new yr({
  typeName: ie.ZodNever,
  ...de(t)
});
class Ui extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.void,
        received: s.parsedType
      }), ae;
    }
    return Ct(e.data);
  }
}
Ui.create = (t) => new Ui({
  typeName: ie.ZodVoid,
  ...de(t)
});
class Zt extends ge {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== Y.array)
      return Q(r, {
        code: V.invalid_type,
        expected: Y.array,
        received: r.parsedType
      }), ae;
    if (i.exactLength !== null) {
      const c = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (c || o) && (Q(r, {
        code: c ? V.too_big : V.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: c ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), s.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (Q(r, {
      code: V.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), s.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (Q(r, {
      code: V.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), s.dirty()), r.common.async)
      return Promise.all([...r.data].map((c, o) => i.type._parseAsync(new nr(r, c, r.path, o)))).then((c) => Et.mergeArray(s, c));
    const n = [...r.data].map((c, o) => i.type._parseSync(new nr(r, c, r.path, o)));
    return Et.mergeArray(s, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Zt({
      ...this._def,
      minLength: { value: e, message: re.toString(r) }
    });
  }
  max(e, r) {
    return new Zt({
      ...this._def,
      maxLength: { value: e, message: re.toString(r) }
    });
  }
  length(e, r) {
    return new Zt({
      ...this._def,
      exactLength: { value: e, message: re.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Zt.create = (t, e) => new Zt({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ie.ZodArray,
  ...de(e)
});
function ss(t) {
  if (t instanceof ke) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = gr.create(ss(s));
    }
    return new ke({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Zt ? new Zt({
      ...t._def,
      type: ss(t.element)
    }) : t instanceof gr ? gr.create(ss(t.unwrap())) : t instanceof Hr ? Hr.create(ss(t.unwrap())) : t instanceof or ? or.create(t.items.map((e) => ss(e))) : t;
}
class ke extends ge {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Te.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== Y.object) {
      const l = this._getOrReturnCtx(e);
      return Q(l, {
        code: V.invalid_type,
        expected: Y.object,
        received: l.parsedType
      }), ae;
    }
    const { status: s, ctx: i } = this._processInputParams(e), { shape: n, keys: c } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof yr && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        c.includes(l) || o.push(l);
    const h = [];
    for (const l of c) {
      const d = n[l], f = i.data[l];
      h.push({
        key: { status: "valid", value: l },
        value: d._parse(new nr(i, f, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof yr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of o)
          h.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (l === "strict")
        o.length > 0 && (Q(i, {
          code: V.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const f = i.data[d];
        h.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new nr(i, f, i.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of h) {
        const f = await d.key;
        l.push({
          key: f,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => Et.mergeObjectSync(s, l)) : Et.mergeObjectSync(s, h);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return re.errToObj, new ke({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, s) => {
          var i, n, c, o;
          const h = (c = (n = (i = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(i, r, s).message) !== null && c !== void 0 ? c : s.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = re.errToObj(e).message) !== null && o !== void 0 ? o : h
          } : {
            message: h
          };
        }
      } : {}
    });
  }
  strip() {
    return new ke({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ke({
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
    return new ke({
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
    return new ke({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ie.ZodObject
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
    return new ke({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Te.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new ke({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new ke({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ss(this);
  }
  partial(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((s) => {
      const i = this.shape[s];
      e && !e[s] ? r[s] = i : r[s] = i.optional();
    }), new ke({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        r[s] = this.shape[s];
      else {
        let n = this.shape[s];
        for (; n instanceof gr; )
          n = n._def.innerType;
        r[s] = n;
      }
    }), new ke({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Gu(Te.objectKeys(this.shape));
  }
}
ke.create = (t, e) => new ke({
  shape: () => t,
  unknownKeys: "strip",
  catchall: yr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
ke.strictCreate = (t, e) => new ke({
  shape: () => t,
  unknownKeys: "strict",
  catchall: yr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
ke.lazycreate = (t, e) => new ke({
  shape: t,
  unknownKeys: "strip",
  catchall: yr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
class $s extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function i(n) {
      for (const o of n)
        if (o.result.status === "valid")
          return o.result;
      for (const o of n)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const c = n.map((o) => new Wt(o.ctx.common.issues));
      return Q(r, {
        code: V.invalid_union,
        unionErrors: c
      }), ae;
    }
    if (r.common.async)
      return Promise.all(s.map(async (n) => {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await n._parseAsync({
            data: r.data,
            path: r.path,
            parent: c
          }),
          ctx: c
        };
      })).then(i);
    {
      let n;
      const c = [];
      for (const h of s) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = h._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !n && (n = { result: d, ctx: l }), l.common.issues.length && c.push(l.common.issues);
      }
      if (n)
        return r.common.issues.push(...n.ctx.common.issues), n.result;
      const o = c.map((h) => new Wt(h));
      return Q(r, {
        code: V.invalid_union,
        unionErrors: o
      }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
$s.create = (t, e) => new $s({
  options: t,
  typeName: ie.ZodUnion,
  ...de(e)
});
const wi = (t) => t instanceof zs ? wi(t.schema) : t instanceof Gt ? wi(t.innerType()) : t instanceof qs ? [t.value] : t instanceof Or ? t.options : t instanceof Bs ? Object.keys(t.enum) : t instanceof Ks ? wi(t._def.innerType) : t instanceof Fs ? [void 0] : t instanceof Ms ? [null] : null;
class Ji extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.object)
      return Q(r, {
        code: V.invalid_type,
        expected: Y.object,
        received: r.parsedType
      }), ae;
    const s = this.discriminator, i = r.data[s], n = this.optionsMap.get(i);
    return n ? r.common.async ? n._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : n._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (Q(r, {
      code: V.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), ae);
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
  static create(e, r, s) {
    const i = /* @__PURE__ */ new Map();
    for (const n of r) {
      const c = wi(n.shape[e]);
      if (!c)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of c) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, n);
      }
    }
    return new Ji({
      typeName: ie.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...de(s)
    });
  }
}
function Hn(t, e) {
  const r = Sr(t), s = Sr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === Y.object && s === Y.object) {
    const i = Te.objectKeys(e), n = Te.objectKeys(t).filter((o) => i.indexOf(o) !== -1), c = { ...t, ...e };
    for (const o of n) {
      const h = Hn(t[o], e[o]);
      if (!h.valid)
        return { valid: !1 };
      c[o] = h.data;
    }
    return { valid: !0, data: c };
  } else if (r === Y.array && s === Y.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let n = 0; n < t.length; n++) {
      const c = t[n], o = e[n], h = Hn(c, o);
      if (!h.valid)
        return { valid: !1 };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  } else
    return r === Y.date && s === Y.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class js extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), i = (n, c) => {
      if (Kn(n) || Kn(c))
        return ae;
      const o = Hn(n.value, c.value);
      return o.valid ? ((Vn(n) || Vn(c)) && r.dirty(), { status: r.value, value: o.data }) : (Q(s, {
        code: V.invalid_intersection_types
      }), ae);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([n, c]) => i(n, c)) : i(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
js.create = (t, e, r) => new js({
  left: t,
  right: e,
  typeName: ie.ZodIntersection,
  ...de(r)
});
class or extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.array)
      return Q(s, {
        code: V.invalid_type,
        expected: Y.array,
        received: s.parsedType
      }), ae;
    if (s.data.length < this._def.items.length)
      return Q(s, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && s.data.length > this._def.items.length && (Q(s, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const n = [...s.data].map((c, o) => {
      const h = this._def.items[o] || this._def.rest;
      return h ? h._parse(new nr(s, c, s.path, o)) : null;
    }).filter((c) => !!c);
    return s.common.async ? Promise.all(n).then((c) => Et.mergeArray(r, c)) : Et.mergeArray(r, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new or({
      ...this._def,
      rest: e
    });
  }
}
or.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new or({
    items: t,
    typeName: ie.ZodTuple,
    rest: null,
    ...de(e)
  });
};
class ks extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.object)
      return Q(s, {
        code: V.invalid_type,
        expected: Y.object,
        received: s.parsedType
      }), ae;
    const i = [], n = this._def.keyType, c = this._def.valueType;
    for (const o in s.data)
      i.push({
        key: n._parse(new nr(s, o, s.path, o)),
        value: c._parse(new nr(s, s.data[o], s.path, o))
      });
    return s.common.async ? Et.mergeObjectAsync(r, i) : Et.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof ge ? new ks({
      keyType: e,
      valueType: r,
      typeName: ie.ZodRecord,
      ...de(s)
    }) : new ks({
      keyType: Ht.create(),
      valueType: e,
      typeName: ie.ZodRecord,
      ...de(r)
    });
  }
}
class Fi extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.map)
      return Q(s, {
        code: V.invalid_type,
        expected: Y.map,
        received: s.parsedType
      }), ae;
    const i = this._def.keyType, n = this._def.valueType, c = [...s.data.entries()].map(([o, h], l) => ({
      key: i._parse(new nr(s, o, s.path, [l, "key"])),
      value: n._parse(new nr(s, h, s.path, [l, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const h of c) {
          const l = await h.key, d = await h.value;
          if (l.status === "aborted" || d.status === "aborted")
            return ae;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const h of c) {
        const l = h.key, d = h.value;
        if (l.status === "aborted" || d.status === "aborted")
          return ae;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Fi.create = (t, e, r) => new Fi({
  valueType: e,
  keyType: t,
  typeName: ie.ZodMap,
  ...de(r)
});
class Vr extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.set)
      return Q(s, {
        code: V.invalid_type,
        expected: Y.set,
        received: s.parsedType
      }), ae;
    const i = this._def;
    i.minSize !== null && s.data.size < i.minSize.value && (Q(s, {
      code: V.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && s.data.size > i.maxSize.value && (Q(s, {
      code: V.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const n = this._def.valueType;
    function c(h) {
      const l = /* @__PURE__ */ new Set();
      for (const d of h) {
        if (d.status === "aborted")
          return ae;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...s.data.values()].map((h, l) => n._parse(new nr(s, h, s.path, l)));
    return s.common.async ? Promise.all(o).then((h) => c(h)) : c(o);
  }
  min(e, r) {
    return new Vr({
      ...this._def,
      minSize: { value: e, message: re.toString(r) }
    });
  }
  max(e, r) {
    return new Vr({
      ...this._def,
      maxSize: { value: e, message: re.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Vr.create = (t, e) => new Vr({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ie.ZodSet,
  ...de(e)
});
class as extends ge {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.function)
      return Q(r, {
        code: V.invalid_type,
        expected: Y.function,
        received: r.parsedType
      }), ae;
    function s(o, h) {
      return Ai({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ni(),
          Ls
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: h
        }
      });
    }
    function i(o, h) {
      return Ai({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ni(),
          Ls
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: h
        }
      });
    }
    const n = { errorMap: r.common.contextualErrorMap }, c = r.data;
    return this._def.returns instanceof ls ? Ct(async (...o) => {
      const h = new Wt([]), l = await this._def.args.parseAsync(o, n).catch((y) => {
        throw h.addIssue(s(o, y)), h;
      }), d = await c(...l);
      return await this._def.returns._def.type.parseAsync(d, n).catch((y) => {
        throw h.addIssue(i(d, y)), h;
      });
    }) : Ct((...o) => {
      const h = this._def.args.safeParse(o, n);
      if (!h.success)
        throw new Wt([s(o, h.error)]);
      const l = c(...h.data), d = this._def.returns.safeParse(l, n);
      if (!d.success)
        throw new Wt([i(l, d.error)]);
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
    return new as({
      ...this._def,
      args: or.create(e).rest(Br.create())
    });
  }
  returns(e) {
    return new as({
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
  static create(e, r, s) {
    return new as({
      args: e || or.create([]).rest(Br.create()),
      returns: r || Br.create(),
      typeName: ie.ZodFunction,
      ...de(s)
    });
  }
}
class zs extends ge {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
zs.create = (t, e) => new zs({
  getter: t,
  typeName: ie.ZodLazy,
  ...de(e)
});
class qs extends ge {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return Q(r, {
        received: r.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
qs.create = (t, e) => new qs({
  value: t,
  typeName: ie.ZodLiteral,
  ...de(e)
});
function Gu(t, e) {
  return new Or({
    values: t,
    typeName: ie.ZodEnum,
    ...de(e)
  });
}
class Or extends ge {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return Q(r, {
        expected: Te.joinValues(s),
        received: r.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return Q(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: s
      }), ae;
    }
    return Ct(e.data);
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
    return Or.create(e);
  }
  exclude(e) {
    return Or.create(this.options.filter((r) => !e.includes(r)));
  }
}
Or.create = Gu;
class Bs extends ge {
  _parse(e) {
    const r = Te.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== Y.string && s.parsedType !== Y.number) {
      const i = Te.objectValues(r);
      return Q(s, {
        expected: Te.joinValues(i),
        received: s.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (r.indexOf(e.data) === -1) {
      const i = Te.objectValues(r);
      return Q(s, {
        received: s.data,
        code: V.invalid_enum_value,
        options: i
      }), ae;
    }
    return Ct(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bs.create = (t, e) => new Bs({
  values: t,
  typeName: ie.ZodNativeEnum,
  ...de(e)
});
class ls extends ge {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.promise && r.common.async === !1)
      return Q(r, {
        code: V.invalid_type,
        expected: Y.promise,
        received: r.parsedType
      }), ae;
    const s = r.parsedType === Y.promise ? r.data : Promise.resolve(r.data);
    return Ct(s.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ls.create = (t, e) => new ls({
  type: t,
  typeName: ie.ZodPromise,
  ...de(e)
});
class Gt extends ge {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ie.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const c = i.transform(s.data);
      return s.common.async ? Promise.resolve(c).then((o) => this._def.schema._parseAsync({
        data: o,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: c,
        path: s.path,
        parent: s
      });
    }
    const n = {
      addIssue: (c) => {
        Q(s, c), c.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), i.type === "refinement") {
      const c = (o) => {
        const h = i.refinement(o, n);
        if (s.common.async)
          return Promise.resolve(h);
        if (h instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), c(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), c(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (s.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!Ri(c))
          return c;
        const o = i.transform(c.value, n);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((c) => Ri(c) ? Promise.resolve(i.transform(c.value, n)).then((o) => ({ status: r.value, value: o })) : c);
    Te.assertNever(i);
  }
}
Gt.create = (t, e, r) => new Gt({
  schema: t,
  typeName: ie.ZodEffects,
  effect: e,
  ...de(r)
});
Gt.createWithPreprocess = (t, e, r) => new Gt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ie.ZodEffects,
  ...de(r)
});
class gr extends ge {
  _parse(e) {
    return this._getType(e) === Y.undefined ? Ct(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gr.create = (t, e) => new gr({
  innerType: t,
  typeName: ie.ZodOptional,
  ...de(e)
});
class Hr extends ge {
  _parse(e) {
    return this._getType(e) === Y.null ? Ct(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hr.create = (t, e) => new Hr({
  innerType: t,
  typeName: ie.ZodNullable,
  ...de(e)
});
class Ks extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let s = r.data;
    return r.parsedType === Y.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ks.create = (t, e) => new Ks({
  innerType: t,
  typeName: ie.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...de(e)
});
class Mi extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return Pi(i) ? i.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Wt(s.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Wt(s.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Mi.create = (t, e) => new Mi({
  innerType: t,
  typeName: ie.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...de(e)
});
class $i extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.nan) {
      const s = this._getOrReturnCtx(e);
      return Q(s, {
        code: V.invalid_type,
        expected: Y.nan,
        received: s.parsedType
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
}
$i.create = (t) => new $i({
  typeName: ie.ZodNaN,
  ...de(t)
});
const Fb = Symbol("zod_brand");
class Yu extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = r.data;
    return this._def.type._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ei extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return n.status === "aborted" ? ae : n.status === "dirty" ? (r.dirty(), Zu(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return i.status === "aborted" ? ae : i.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, r) {
    return new ei({
      in: e,
      out: r,
      typeName: ie.ZodPipeline
    });
  }
}
const Ju = (t, e = {}, r) => t ? us.create().superRefine((s, i) => {
  var n, c;
  if (!t(s)) {
    const o = typeof e == "function" ? e(s) : e, h = (c = (n = o.fatal) !== null && n !== void 0 ? n : r) !== null && c !== void 0 ? c : !0, l = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...l, fatal: h });
  }
}) : us.create(), Mb = {
  object: ke.lazycreate
};
var ie;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ie || (ie = {}));
const $b = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Ju((r) => r instanceof t, e), Qu = Ht.create, Xu = xr.create, jb = $i.create, kb = Ir.create, el = Us.create, zb = Kr.create, qb = Li.create, Bb = Fs.create, Kb = Ms.create, Vb = us.create, Hb = Br.create, Wb = yr.create, Zb = Ui.create, Gb = Zt.create, Yb = ke.create, Jb = ke.strictCreate, Qb = $s.create, Xb = Ji.create, e_ = js.create, t_ = or.create, r_ = ks.create, s_ = Fi.create, i_ = Vr.create, n_ = as.create, o_ = zs.create, a_ = qs.create, c_ = Or.create, u_ = Bs.create, l_ = ls.create, _c = Gt.create, h_ = gr.create, d_ = Hr.create, f_ = Gt.createWithPreprocess, p_ = ei.create, g_ = () => Qu().optional(), y_ = () => Xu().optional(), m_ = () => el().optional(), v_ = {
  string: (t) => Ht.create({ ...t, coerce: !0 }),
  number: (t) => xr.create({ ...t, coerce: !0 }),
  boolean: (t) => Us.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Ir.create({ ...t, coerce: !0 }),
  date: (t) => Kr.create({ ...t, coerce: !0 })
}, b_ = ae;
var Jt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ls,
  setErrorMap: Sb,
  getErrorMap: Ni,
  makeIssue: Ai,
  EMPTY_PATH: Db,
  addIssueToContext: Q,
  ParseStatus: Et,
  INVALID: ae,
  DIRTY: Zu,
  OK: Ct,
  isAborted: Kn,
  isDirty: Vn,
  isValid: Ri,
  isAsync: Pi,
  get util() {
    return Te;
  },
  get objectUtil() {
    return Bn;
  },
  ZodParsedType: Y,
  getParsedType: Sr,
  ZodType: ge,
  ZodString: Ht,
  ZodNumber: xr,
  ZodBigInt: Ir,
  ZodBoolean: Us,
  ZodDate: Kr,
  ZodSymbol: Li,
  ZodUndefined: Fs,
  ZodNull: Ms,
  ZodAny: us,
  ZodUnknown: Br,
  ZodNever: yr,
  ZodVoid: Ui,
  ZodArray: Zt,
  ZodObject: ke,
  ZodUnion: $s,
  ZodDiscriminatedUnion: Ji,
  ZodIntersection: js,
  ZodTuple: or,
  ZodRecord: ks,
  ZodMap: Fi,
  ZodSet: Vr,
  ZodFunction: as,
  ZodLazy: zs,
  ZodLiteral: qs,
  ZodEnum: Or,
  ZodNativeEnum: Bs,
  ZodPromise: ls,
  ZodEffects: Gt,
  ZodTransformer: Gt,
  ZodOptional: gr,
  ZodNullable: Hr,
  ZodDefault: Ks,
  ZodCatch: Mi,
  ZodNaN: $i,
  BRAND: Fb,
  ZodBranded: Yu,
  ZodPipeline: ei,
  custom: Ju,
  Schema: ge,
  ZodSchema: ge,
  late: Mb,
  get ZodFirstPartyTypeKind() {
    return ie;
  },
  coerce: v_,
  any: Vb,
  array: Gb,
  bigint: kb,
  boolean: el,
  date: zb,
  discriminatedUnion: Xb,
  effect: _c,
  enum: c_,
  function: n_,
  instanceof: $b,
  intersection: e_,
  lazy: o_,
  literal: a_,
  map: s_,
  nan: jb,
  nativeEnum: u_,
  never: Wb,
  null: Kb,
  nullable: d_,
  number: Xu,
  object: Yb,
  oboolean: m_,
  onumber: y_,
  optional: h_,
  ostring: g_,
  pipeline: p_,
  preprocess: f_,
  promise: l_,
  record: r_,
  set: i_,
  strictObject: Jb,
  string: Qu,
  symbol: qb,
  transformer: _c,
  tuple: t_,
  undefined: Bb,
  union: Qb,
  unknown: Hb,
  void: Zb,
  NEVER: b_,
  ZodIssueCode: V,
  quotelessJson: Eb,
  ZodError: Wt
});
const tl = /^aleo1[a-z0-9]{58}$/i, __ = /^AViewKey1[a-z0-9]{44}$/i, w_ = /^APrivateKey1[a-z0-9]{47}$/i, E_ = /^at1[a-z0-9]{58}$/i, S_ = /^\d+field$/, D_ = /^\d+u32$/, x_ = /^\d+u64$/, lw = Jt.string().regex(tl), hw = Jt.string().regex(__), dw = Jt.string().regex(w_), fw = Jt.string().regex(E_), pw = Jt.string().regex(S_), gw = Jt.string().regex(D_), yw = Jt.string().regex(x_);
var wc;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(wc || (wc = {}));
var Wn;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Wn || (Wn = {}));
var Zn;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Zn || (Zn = {}));
var Gn;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Gn || (Gn = {}));
var Yn;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Yn || (Yn = {}));
var Ec;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Ec || (Ec = {}));
const mw = Jt.nativeEnum(Wn), vw = Jt.nativeEnum(Zn), bw = Jt.nativeEnum(Yn), _w = Jt.nativeEnum(Gn), ww = async ({
  message: t,
  address: e
}) => {
  const r = await kt(), s = await (r == null ? void 0 : r.getSession());
  if (!s || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: s.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: tl.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (i) {
    const n = i.message;
    return console.error("signature error", n), { error: n };
  }
}, Ew = 20;
var Jn = { exports: {} }, bn, Sc;
function I_() {
  if (Sc)
    return bn;
  Sc = 1;
  var t = 1e3, e = t * 60, r = e * 60, s = r * 24, i = s * 7, n = s * 365.25;
  bn = function(d, f) {
    f = f || {};
    var y = typeof d;
    if (y === "string" && d.length > 0)
      return c(d);
    if (y === "number" && isFinite(d))
      return f.long ? h(d) : o(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(d)
    );
  };
  function c(d) {
    if (d = String(d), !(d.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        d
      );
      if (f) {
        var y = parseFloat(f[1]), b = (f[2] || "ms").toLowerCase();
        switch (b) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * n;
          case "weeks":
          case "week":
          case "w":
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * s;
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
  function o(d) {
    var f = Math.abs(d);
    return f >= s ? Math.round(d / s) + "d" : f >= r ? Math.round(d / r) + "h" : f >= e ? Math.round(d / e) + "m" : f >= t ? Math.round(d / t) + "s" : d + "ms";
  }
  function h(d) {
    var f = Math.abs(d);
    return f >= s ? l(d, f, s, "day") : f >= r ? l(d, f, r, "hour") : f >= e ? l(d, f, e, "minute") : f >= t ? l(d, f, t, "second") : d + " ms";
  }
  function l(d, f, y, b) {
    var _ = f >= y * 1.5;
    return Math.round(d / y) + " " + b + (_ ? "s" : "");
  }
  return bn;
}
function O_(t) {
  r.debug = r, r.default = r, r.coerce = h, r.disable = n, r.enable = i, r.enabled = c, r.humanize = I_(), r.destroy = l, Object.keys(t).forEach((d) => {
    r[d] = t[d];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(d) {
    let f = 0;
    for (let y = 0; y < d.length; y++)
      f = (f << 5) - f + d.charCodeAt(y), f |= 0;
    return r.colors[Math.abs(f) % r.colors.length];
  }
  r.selectColor = e;
  function r(d) {
    let f, y = null, b, _;
    function C(...L) {
      if (!C.enabled)
        return;
      const F = C, S = Number(/* @__PURE__ */ new Date()), O = S - (f || S);
      F.diff = O, F.prev = f, F.curr = S, f = S, L[0] = r.coerce(L[0]), typeof L[0] != "string" && L.unshift("%O");
      let v = 0;
      L[0] = L[0].replace(/%([a-zA-Z%])/g, (g, a) => {
        if (g === "%%")
          return "%";
        v++;
        const p = r.formatters[a];
        if (typeof p == "function") {
          const P = L[v];
          g = p.call(F, P), L.splice(v, 1), v--;
        }
        return g;
      }), r.formatArgs.call(F, L), (F.log || r.log).apply(F, L);
    }
    return C.namespace = d, C.useColors = r.useColors(), C.color = r.selectColor(d), C.extend = s, C.destroy = r.destroy, Object.defineProperty(C, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (b !== r.namespaces && (b = r.namespaces, _ = r.enabled(d)), _),
      set: (L) => {
        y = L;
      }
    }), typeof r.init == "function" && r.init(C), C;
  }
  function s(d, f) {
    const y = r(this.namespace + (typeof f > "u" ? ":" : f) + d);
    return y.log = this.log, y;
  }
  function i(d) {
    r.save(d), r.namespaces = d, r.names = [], r.skips = [];
    let f;
    const y = (typeof d == "string" ? d : "").split(/[\s,]+/), b = y.length;
    for (f = 0; f < b; f++)
      y[f] && (d = y[f].replace(/\*/g, ".*?"), d[0] === "-" ? r.skips.push(new RegExp("^" + d.slice(1) + "$")) : r.names.push(new RegExp("^" + d + "$")));
  }
  function n() {
    const d = [
      ...r.names.map(o),
      ...r.skips.map(o).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), d;
  }
  function c(d) {
    if (d[d.length - 1] === "*")
      return !0;
    let f, y;
    for (f = 0, y = r.skips.length; f < y; f++)
      if (r.skips[f].test(d))
        return !1;
    for (f = 0, y = r.names.length; f < y; f++)
      if (r.names[f].test(d))
        return !0;
    return !1;
  }
  function o(d) {
    return d.toString().substring(2, d.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function h(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var C_ = O_;
(function(t, e) {
  e.formatArgs = s, e.save = i, e.load = n, e.useColors = r, e.storage = c(), e.destroy = /* @__PURE__ */ (() => {
    let h = !1;
    return () => {
      h || (h = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function s(h) {
    if (h[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + h[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    h.splice(1, 0, l, "color: inherit");
    let d = 0, f = 0;
    h[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (d++, y === "%c" && (f = d));
    }), h.splice(f, 0, l);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(h) {
    try {
      h ? e.storage.setItem("debug", h) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function n() {
    let h;
    try {
      h = e.storage.getItem("debug");
    } catch {
    }
    return !h && typeof process < "u" && "env" in process && (h = process.env.DEBUG), h;
  }
  function c() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = C_(e);
  const { formatters: o } = t.exports;
  o.j = function(h) {
    try {
      return JSON.stringify(h);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Jn, Jn.exports);
var T_ = Jn.exports;
const N_ = /* @__PURE__ */ Qn(T_), A_ = N_("wallet:sdk");
A_.enabled = !0;
export {
  Q_ as $,
  Ec as A,
  X_ as B,
  ew as C,
  tw as D,
  Zn as E,
  rw as F,
  sw as G,
  iw as H,
  nw as I,
  ow as J,
  aw as K,
  cw as L,
  uw as M,
  Yn as N,
  ww as O,
  Ew as P,
  Bu as Q,
  Yl as R,
  Do as S,
  Dc as T,
  Ku as U,
  Gn as V,
  Xv as W,
  eb as X,
  J_ as Y,
  A_ as Z,
  Hu as _,
  _t as a,
  kt as a0,
  Wn as b,
  tl as c,
  S_ as d,
  w_ as e,
  E_ as f,
  D_ as g,
  x_ as h,
  __ as i,
  vw as j,
  mw as k,
  pw as l,
  bw as m,
  Ko as n,
  P_ as o,
  Vt as p,
  dw as q,
  fw as r,
  en as s,
  R_ as t,
  gw as u,
  yw as v,
  hw as w,
  _w as x,
  cs as y,
  lw as z
};
