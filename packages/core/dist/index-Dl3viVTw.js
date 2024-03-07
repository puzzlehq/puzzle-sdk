const Zl = Symbol(), jo = Object.getPrototypeOf, Dn = /* @__PURE__ */ new WeakMap(), Gl = (t) => t && (Dn.has(t) ? Dn.get(t) : jo(t) === Object.prototype || jo(t) === Array.prototype), Yl = (t) => Gl(t) && t[Zl] || null, ko = (t, e = !0) => {
  Dn.set(t, e);
};
var Si = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const sn = (t) => typeof t == "object" && t !== null, Er = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakSet(), Jl = (t = Object.is, e = (l, d) => new Proxy(l, d), r = (l) => sn(l) && !hi.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), s = (l) => {
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
  const w = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return ko(w, !0), i.set(l, [d, w]), Reflect.ownKeys(l).forEach((_) => {
    if (Object.getOwnPropertyDescriptor(w, _))
      return;
    const O = Reflect.get(l, _), L = {
      value: O,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (hi.has(O))
      ko(O, !1);
    else if (O instanceof Promise)
      delete L.value, L.get = () => f(O);
    else if (Er.has(O)) {
      const [M, S] = Er.get(
        O
      );
      L.value = n(
        M,
        S(),
        f
      );
    }
    Object.defineProperty(w, _, L);
  }), Object.preventExtensions(w);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], h = (l) => {
  if (!sn(l))
    throw new Error("object required");
  const d = a.get(l);
  if (d)
    return d;
  let f = o[0];
  const y = /* @__PURE__ */ new Set(), w = (P, R = ++o[0]) => {
    f !== R && (f = R, y.forEach((F) => F(P, R)));
  };
  let _ = o[1];
  const O = (P = ++o[1]) => (_ !== P && !y.size && (_ = P, M.forEach(([R]) => {
    const F = R[1](P);
    F > f && (f = F);
  })), f), L = (P) => (R, F) => {
    const B = [...R];
    B[1] = [P, ...B[1]], w(B, F);
  }, M = /* @__PURE__ */ new Map(), S = (P, R) => {
    if ((Si ? "production" : void 0) !== "production" && M.has(P))
      throw new Error("prop listener already exists");
    if (y.size) {
      const F = R[3](L(P));
      M.set(P, [R, F]);
    } else
      M.set(P, [R]);
  }, C = (P) => {
    var R;
    const F = M.get(P);
    F && (M.delete(P), (R = F[1]) == null || R.call(F));
  }, v = (P) => (y.add(P), y.size === 1 && M.forEach(([F, B], G) => {
    if ((Si ? "production" : void 0) !== "production" && B)
      throw new Error("remove already exists");
    const x = F[3](L(G));
    M.set(G, [F, x]);
  }), () => {
    y.delete(P), y.size === 0 && M.forEach(([F, B], G) => {
      B && (B(), M.set(G, [F]));
    });
  }), b = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), c = e(b, {
    deleteProperty(P, R) {
      const F = Reflect.get(P, R);
      C(R);
      const B = Reflect.deleteProperty(P, R);
      return B && w(["delete", [R], F]), B;
    },
    set(P, R, F, B) {
      const G = Reflect.has(P, R), x = Reflect.get(P, R, B);
      if (G && (t(x, F) || a.has(F) && t(x, a.get(F))))
        return !0;
      C(R), sn(F) && (F = Yl(F) || F);
      let A = F;
      if (F instanceof Promise)
        F.then((Z) => {
          F.status = "fulfilled", F.value = Z, w(["resolve", [R], Z]);
        }).catch((Z) => {
          F.status = "rejected", F.reason = Z, w(["reject", [R], Z]);
        });
      else {
        !Er.has(F) && r(F) && (A = h(F));
        const Z = !hi.has(A) && Er.get(A);
        Z && S(R, Z);
      }
      return Reflect.set(P, R, A, B), w(["set", [R], F, x]), !0;
    }
  });
  a.set(l, c);
  const p = [
    b,
    O,
    n,
    v
  ];
  return Er.set(c, p), Reflect.ownKeys(l).forEach((P) => {
    const R = Object.getOwnPropertyDescriptor(
      l,
      P
    );
    "value" in R && (c[P] = l[P], delete R.value, delete R.writable), Object.defineProperty(b, P, R);
  }), c;
}) => [
  // public functions
  h,
  // shared state
  Er,
  hi,
  // internal things
  t,
  e,
  r,
  s,
  i,
  n,
  a,
  o
], [Xl] = Jl();
function Nr(t = {}) {
  return Xl(t);
}
function Yr(t, e, r) {
  const s = Er.get(t);
  (Si ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
  let i;
  const n = [], a = s[3];
  let o = !1;
  const l = a((d) => {
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
function Ql(t, e) {
  const r = Er.get(t);
  (Si ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [s, i, n] = r;
  return n(s, i(), e);
}
const ct = Nr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Nc = { state: ct, subscribe(t) {
  return Yr(ct, () => t(ct));
}, push(t, e) {
  t !== ct.view && (ct.view = t, e && (ct.data = e), ct.history.push(t));
}, reset(t) {
  ct.view = t, ct.history = [t];
}, replace(t) {
  ct.history.length > 1 && (ct.history[ct.history.length - 1] = t, ct.view = t);
}, goBack() {
  if (ct.history.length > 1) {
    ct.history.pop();
    const [t] = ct.history.slice(-1);
    ct.view = t;
  }
}, setData(t) {
  ct.data = t;
} }, bt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return bt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return bt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (bt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let s = t;
  s.includes("://") || (s = t.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), this.setWalletConnectDeepLink(s, r);
  const i = encodeURIComponent(e);
  return `${s}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!bt.isHttpUrl(t))
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
    localStorage.setItem(bt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(bt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(bt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(bt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Nc.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, eh = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), yt = Nr({ enabled: eh, userSessionId: "", events: [], connectedWalletId: void 0 }), th = { state: yt, subscribe(t) {
  return Yr(yt.events, () => t(Ql(yt.events[yt.events.length - 1])));
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
} }, er = Nr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Wt = { state: er, subscribe(t) {
  return Yr(er, () => t(er));
}, setChains(t) {
  er.chains = t;
}, setWalletConnectUri(t) {
  er.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  er.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  er.isCustomMobile = t;
}, setIsDataLoaded(t) {
  er.isDataLoaded = t;
}, setIsUiLoaded(t) {
  er.isUiLoaded = t;
}, setIsAuth(t) {
  er.isAuth = t;
} }, di = Nr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), fs = { state: di, subscribe(t) {
  return Yr(di, () => t(di));
}, setConfig(t) {
  var e, r;
  th.initialize(), Wt.setChains(t.chains), Wt.setIsAuth(!!t.enableAuthMode), Wt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Wt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), bt.setModalVersionInStorage(), Object.assign(di, t);
} };
var rh = Object.defineProperty, zo = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, ih = Object.prototype.propertyIsEnumerable, qo = (t, e, r) => e in t ? rh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, nh = (t, e) => {
  for (var r in e || (e = {}))
    sh.call(e, r) && qo(t, r, e[r]);
  if (zo)
    for (var r of zo(e))
      ih.call(e, r) && qo(t, r, e[r]);
  return t;
};
const In = "https://explorer-api.walletconnect.com", On = "wcm", Cn = "js-2.6.2";
async function fi(t, e) {
  const r = nh({ sdkType: On, sdkVersion: Cn }, e), s = new URL(t, In);
  return s.searchParams.append("projectId", fs.state.projectId), Object.entries(r).forEach(([i, n]) => {
    n && s.searchParams.append(i, String(n));
  }), (await fetch(s)).json();
}
const Ur = { async getDesktopListings(t) {
  return fi("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return fi("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return fi("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return fi("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${In}/w3m/v1/getWalletImage/${t}?projectId=${fs.state.projectId}&sdkType=${On}&sdkVersion=${Cn}`;
}, getAssetImageUrl(t) {
  return `${In}/w3m/v1/getAssetImage/${t}?projectId=${fs.state.projectId}&sdkType=${On}&sdkVersion=${Cn}`;
} };
var oh = Object.defineProperty, Bo = Object.getOwnPropertySymbols, ah = Object.prototype.hasOwnProperty, ch = Object.prototype.propertyIsEnumerable, Ko = (t, e, r) => e in t ? oh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, uh = (t, e) => {
  for (var r in e || (e = {}))
    ah.call(e, r) && Ko(t, r, e[r]);
  if (Bo)
    for (var r of Bo(e))
      ch.call(e, r) && Ko(t, r, e[r]);
  return t;
};
const Vo = bt.isMobile(), tr = Nr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Yb = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = fs.state;
  if (t === "NONE" || e === "ALL" && !t)
    return tr.recomendedWallets;
  if (bt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: s } = await Ur.getAllListings(r), i = Object.values(s);
    i.sort((n, a) => {
      const o = t.indexOf(n.id), h = t.indexOf(a.id);
      return o - h;
    }), tr.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: s } = Wt.state, i = r == null ? void 0 : r.join(","), n = bt.isArray(e), a = { page: 1, sdks: s ? "auth_v1" : void 0, entries: bt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: n ? e.join(",") : void 0 }, { listings: o } = Vo ? await Ur.getMobileListings(a) : await Ur.getDesktopListings(a);
    tr.recomendedWallets = Object.values(o);
  }
  return tr.recomendedWallets;
}, async getWallets(t) {
  const e = uh({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: s } = fs.state, { recomendedWallets: i } = tr;
  if (s === "ALL")
    return tr.wallets;
  i.length ? e.excludedIds = i.map((f) => f.id).join(",") : bt.isArray(r) && (e.excludedIds = r.join(",")), bt.isArray(s) && (e.excludedIds = [e.excludedIds, s].filter(Boolean).join(",")), Wt.state.isAuth && (e.sdks = "auth_v1");
  const { page: n, search: a } = t, { listings: o, total: h } = Vo ? await Ur.getMobileListings(e) : await Ur.getDesktopListings(e), l = Object.values(o), d = a ? "search" : "wallets";
  return tr[d] = { listings: [...tr[d].listings, ...l], total: h, page: n ?? 1 }, { listings: l, total: h };
}, getWalletImageUrl(t) {
  return Ur.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Ur.getAssetImageUrl(t);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, rs = Nr({ open: !1 }), nn = { state: rs, subscribe(t) {
  return Yr(rs, () => t(rs));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: s } = Wt.state;
    if (bt.removeWalletConnectDeepLink(), Wt.setWalletConnectUri(t == null ? void 0 : t.uri), Wt.setChains(t == null ? void 0 : t.chains), Nc.reset("ConnectWallet"), r && s)
      rs.open = !0, e();
    else {
      const i = setInterval(() => {
        const n = Wt.state;
        n.isUiLoaded && n.isDataLoaded && (clearInterval(i), rs.open = !0, e());
      }, 200);
    }
  });
}, close() {
  rs.open = !1;
} };
var lh = Object.defineProperty, Wo = Object.getOwnPropertySymbols, hh = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, Ho = (t, e, r) => e in t ? lh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fh = (t, e) => {
  for (var r in e || (e = {}))
    hh.call(e, r) && Ho(t, r, e[r]);
  if (Wo)
    for (var r of Wo(e))
      dh.call(e, r) && Ho(t, r, e[r]);
  return t;
};
function ph() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Ds = Nr({ themeMode: ph() ? "dark" : "light" }), Zo = { state: Ds, subscribe(t) {
  return Yr(Ds, () => t(Ds));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Ds.themeMode = e), r && (Ds.themeVariables = fh({}, r));
} }, $r = Nr({ open: !1, message: "", variant: "success" }), Jb = { state: $r, subscribe(t) {
  return Yr($r, () => t($r));
}, openToast(t, e) {
  $r.open = !0, $r.message = t, $r.variant = e;
}, closeToast() {
  $r.open = !1;
} };
let gh = class {
  constructor(e) {
    this.openModal = nn.open, this.closeModal = nn.close, this.subscribeModal = nn.subscribe, this.setTheme = Zo.setThemeConfig, Zo.setThemeConfig(e), fs.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-B4R013gi.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Wt.setIsUiLoaded(!0);
    }
  }
};
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function qi(t) {
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
var io = { exports: {} }, us = typeof Reflect == "object" ? Reflect : null, Go = us && typeof us.apply == "function" ? us.apply : function(e, r, s) {
  return Function.prototype.apply.call(e, r, s);
}, vi;
us && typeof us.ownKeys == "function" ? vi = us.ownKeys : Object.getOwnPropertySymbols ? vi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : vi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function yh(t) {
  console && console.warn && console.warn(t);
}
var Ac = Number.isNaN || function(e) {
  return e !== e;
};
function Le() {
  Le.init.call(this);
}
io.exports = Le;
io.exports.once = bh;
Le.EventEmitter = Le;
Le.prototype._events = void 0;
Le.prototype._eventsCount = 0;
Le.prototype._maxListeners = void 0;
var Yo = 10;
function Bi(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Le, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Yo;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Ac(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Yo = t;
  }
});
Le.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Le.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Ac(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Rc(t) {
  return t._maxListeners === void 0 ? Le.defaultMaxListeners : t._maxListeners;
}
Le.prototype.getMaxListeners = function() {
  return Rc(this);
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
    var a;
    if (r.length > 0 && (a = r[0]), a instanceof Error)
      throw a;
    var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw o.context = a, o;
  }
  var h = n[e];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    Go(h, this, r);
  else
    for (var l = h.length, d = Uc(h, l), s = 0; s < l; ++s)
      Go(d[s], this, r);
  return !0;
};
function Pc(t, e, r, s) {
  var i, n, a;
  if (Bi(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), n = t._events), a = n[e]), a === void 0)
    a = n[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = n[e] = s ? [r, a] : [a, r] : s ? a.unshift(r) : a.push(r), i = Rc(t), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, yh(o);
  }
  return t;
}
Le.prototype.addListener = function(e, r) {
  return Pc(this, e, r, !1);
};
Le.prototype.on = Le.prototype.addListener;
Le.prototype.prependListener = function(e, r) {
  return Pc(this, e, r, !0);
};
function mh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Lc(t, e, r) {
  var s = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = mh.bind(s);
  return i.listener = r, s.wrapFn = i, i;
}
Le.prototype.once = function(e, r) {
  return Bi(r), this.on(e, Lc(this, e, r)), this;
};
Le.prototype.prependOnceListener = function(e, r) {
  return Bi(r), this.prependListener(e, Lc(this, e, r)), this;
};
Le.prototype.removeListener = function(e, r) {
  var s, i, n, a, o;
  if (Bi(r), i = this._events, i === void 0)
    return this;
  if (s = i[e], s === void 0)
    return this;
  if (s === r || s.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, s.listener || r));
  else if (typeof s != "function") {
    for (n = -1, a = s.length - 1; a >= 0; a--)
      if (s[a] === r || s[a].listener === r) {
        o = s[a].listener, n = a;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? s.shift() : vh(s, n), s.length === 1 && (i[e] = s[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
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
    var n = Object.keys(s), a;
    for (i = 0; i < n.length; ++i)
      a = n[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = s[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function Fc(t, e, r) {
  var s = t._events;
  if (s === void 0)
    return [];
  var i = s[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? wh(i) : Uc(i, i.length);
}
Le.prototype.listeners = function(e) {
  return Fc(this, e, !0);
};
Le.prototype.rawListeners = function(e) {
  return Fc(this, e, !1);
};
Le.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Mc.call(t, e);
};
Le.prototype.listenerCount = Mc;
function Mc(t) {
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
  return this._eventsCount > 0 ? vi(this._events) : [];
};
function Uc(t, e) {
  for (var r = new Array(e), s = 0; s < e; ++s)
    r[s] = t[s];
  return r;
}
function vh(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function wh(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function bh(t, e) {
  return new Promise(function(r, s) {
    function i(a) {
      t.removeListener(e, n), s(a);
    }
    function n() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    $c(t, e, n, { once: !0 }), e !== "error" && _h(t, i, { once: !0 });
  });
}
function _h(t, e, r) {
  typeof t.on == "function" && $c(t, "error", e, r);
}
function $c(t, e, r, s) {
  if (typeof t.on == "function")
    s.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(n) {
      s.once && t.removeEventListener(e, i), r(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Jt = io.exports;
const no = /* @__PURE__ */ zi(Jt), Eh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Sh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, xh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Dh(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Ih(t);
    return;
  }
  return e;
}
function Ih(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function pi(t, e = {}) {
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
  if (!xh.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (Eh.test(t) || Sh.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Dh);
    }
    return JSON.parse(t);
  } catch (s) {
    if (e.strict)
      throw s;
    return t;
  }
}
function Oh(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function ut(t, ...e) {
  try {
    return Oh(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Ch(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Th(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function wi(t) {
  if (Ch(t))
    return String(t);
  if (Th(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return wi(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function jc() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Tn = "base64:";
function Nh(t) {
  if (typeof t == "string")
    return t;
  jc();
  const e = Buffer.from(t).toString("base64");
  return Tn + e;
}
function Ah(t) {
  return typeof t != "string" || !t.startsWith(Tn) ? t : (jc(), Buffer.from(t.slice(Tn.length), "base64"));
}
function Nt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Rh(...t) {
  return Nt(t.join(":"));
}
function gi(t) {
  return t = Nt(t), t ? t + ":" : "";
}
const Ph = "memory", Lh = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Ph,
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
function Fh(t = {}) {
  const e = {
    mounts: { "": t.driver || Lh() },
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
        e.unwatch[l] = await Jo(
          e.mounts[l],
          i,
          l
        );
    }
  }, a = async () => {
    if (e.watching) {
      for (const l in e.unwatch)
        await e.unwatch[l]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (l, d, f) => {
    const y = /* @__PURE__ */ new Map(), w = (_) => {
      let O = y.get(_.base);
      return O || (O = {
        driver: _.driver,
        base: _.base,
        items: []
      }, y.set(_.base, O)), O;
    };
    for (const _ of l) {
      const O = typeof _ == "string", L = Nt(O ? _ : _.key), M = O ? void 0 : _.value, S = O || !_.options ? d : { ...d, ..._.options }, C = r(L);
      w(C).items.push({
        key: L,
        value: M,
        relativeKey: C.relativeKey,
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
      return ut(y.hasItem, f, d);
    },
    getItem(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return ut(y.getItem, f, d).then(
        (w) => pi(w)
      );
    },
    getItems(l, d) {
      return o(l, d, (f) => f.driver.getItems ? ut(
        f.driver.getItems,
        f.items.map((y) => ({
          key: y.relativeKey,
          options: y.options
        })),
        d
      ).then(
        (y) => y.map((w) => ({
          key: Rh(f.base, w.key),
          value: pi(w.value)
        }))
      ) : Promise.all(
        f.items.map((y) => ut(
          f.driver.getItem,
          y.relativeKey,
          y.options
        ).then((w) => ({
          key: y.key,
          value: pi(w)
        })))
      ));
    },
    getItemRaw(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return y.getItemRaw ? ut(y.getItemRaw, f, d) : ut(y.getItem, f, d).then(
        (w) => Ah(w)
      );
    },
    async setItem(l, d, f = {}) {
      if (d === void 0)
        return h.removeItem(l);
      l = Nt(l);
      const { relativeKey: y, driver: w } = r(l);
      w.setItem && (await ut(w.setItem, y, wi(d), f), w.watch || i("update", l));
    },
    async setItems(l, d) {
      await o(l, d, async (f) => {
        f.driver.setItems && await ut(
          f.driver.setItems,
          f.items.map((y) => ({
            key: y.relativeKey,
            value: wi(y.value),
            options: y.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((y) => ut(
            f.driver.setItem,
            y.relativeKey,
            wi(y.value),
            y.options
          ))
        );
      });
    },
    async setItemRaw(l, d, f = {}) {
      if (d === void 0)
        return h.removeItem(l, f);
      l = Nt(l);
      const { relativeKey: y, driver: w } = r(l);
      if (w.setItemRaw)
        await ut(w.setItemRaw, y, d, f);
      else if (w.setItem)
        await ut(w.setItem, y, Nh(d), f);
      else
        return;
      w.watch || i("update", l);
    },
    async removeItem(l, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      y.removeItem && (await ut(y.removeItem, f, d), (d.removeMeta || d.removeMata) && await ut(y.removeItem, f + "$", d), y.watch || i("remove", l));
    },
    // Meta
    async getMeta(l, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l), w = /* @__PURE__ */ Object.create(null);
      if (y.getMeta && Object.assign(w, await ut(y.getMeta, f, d)), !d.nativeOnly) {
        const _ = await ut(
          y.getItem,
          f + "$",
          d
        ).then((O) => pi(O));
        _ && typeof _ == "object" && (typeof _.atime == "string" && (_.atime = new Date(_.atime)), typeof _.mtime == "string" && (_.mtime = new Date(_.mtime)), Object.assign(w, _));
      }
      return w;
    },
    setMeta(l, d, f = {}) {
      return this.setItem(l + "$", d, f);
    },
    removeMeta(l, d = {}) {
      return this.removeItem(l + "$", d);
    },
    // Keys
    async getKeys(l, d = {}) {
      l = gi(l);
      const f = s(l, !0);
      let y = [];
      const w = [];
      for (const _ of f) {
        const L = (await ut(
          _.driver.getKeys,
          _.relativeBase,
          d
        )).map((M) => _.mountpoint + Nt(M)).filter((M) => !y.some((S) => M.startsWith(S)));
        w.push(...L), y = [
          _.mountpoint,
          ...y.filter((M) => !M.startsWith(_.mountpoint))
        ];
      }
      return l ? w.filter((_) => _.startsWith(l) && !_.endsWith("$")) : w.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(l, d = {}) {
      l = gi(l), await Promise.all(
        s(l, !1).map(async (f) => {
          if (f.driver.clear)
            return ut(f.driver.clear, f.relativeBase, d);
          if (f.driver.removeItem) {
            const y = await f.driver.getKeys(f.relativeBase || "", d);
            return Promise.all(
              y.map((w) => f.driver.removeItem(w, d))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((l) => Xo(l))
      );
    },
    async watch(l) {
      return await n(), e.watchListeners.push(l), async () => {
        e.watchListeners = e.watchListeners.filter(
          (d) => d !== l
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(l, d) {
      if (l = gi(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((f, y) => y.length - f.length)), e.mounts[l] = d, e.watching && Promise.resolve(Jo(d, i, l)).then((f) => {
        e.unwatch[l] = f;
      }).catch(console.error), h;
    },
    async unmount(l, d = !0) {
      l = gi(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && (e.unwatch[l](), delete e.unwatch[l]), d && await Xo(e.mounts[l]), e.mountpoints = e.mountpoints.filter((f) => f !== l), delete e.mounts[l]);
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
function Jo(t, e, r) {
  return t.watch ? t.watch((s, i) => e(s, r + i)) : () => {
  };
}
async function Xo(t) {
  typeof t.dispose == "function" && await ut(t.dispose);
}
function Jr(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function kc(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const s = Jr(r);
  return (i, n) => s.then((a) => n(a.transaction(e, i).objectStore(e)));
}
let on;
function Gs() {
  return on || (on = kc("keyval-store", "keyval")), on;
}
function Qo(t, e = Gs()) {
  return e("readonly", (r) => Jr(r.get(t)));
}
function Mh(t, e, r = Gs()) {
  return r("readwrite", (s) => (s.put(e, t), Jr(s.transaction)));
}
function Uh(t, e = Gs()) {
  return e("readwrite", (r) => (r.delete(t), Jr(r.transaction)));
}
function $h(t = Gs()) {
  return t("readwrite", (e) => (e.clear(), Jr(e.transaction)));
}
function jh(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Jr(t.transaction);
}
function kh(t = Gs()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Jr(e.getAllKeys());
    const r = [];
    return jh(e, (s) => r.push(s.key)).then(() => r);
  });
}
const zh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), qh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (s, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Ki(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return qh(t);
  } catch {
    return t;
  }
}
function Ys(t) {
  return typeof t == "string" ? t : zh(t) || "";
}
const Bh = "idb-keyval";
var Kh = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (i) => e + i;
  let s;
  return t.dbName && t.storeName && (s = kc(t.dbName, t.storeName)), { name: Bh, options: t, async hasItem(i) {
    return !(typeof await Qo(r(i), s) > "u");
  }, async getItem(i) {
    return await Qo(r(i), s) ?? null;
  }, setItem(i, n) {
    return Mh(r(i), n, s);
  }, removeItem(i) {
    return Uh(r(i), s);
  }, getKeys() {
    return kh(s);
  }, clear() {
    return $h(s);
  } };
};
const Vh = "WALLET_CONNECT_V2_INDEXED_DB", Wh = "keyvaluestorage";
let Hh = class {
  constructor() {
    this.indexedDb = Fh({ driver: Kh({ dbName: Vh, storeName: Wh }) });
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
    await this.indexedDb.setItem(e, Ys(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bi = { exports: {} };
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
  }), typeof an < "u" && an.localStorage ? bi.exports = an.localStorage : typeof window < "u" && window.localStorage ? bi.exports = window.localStorage : bi.exports = new e();
})();
function Zh(t) {
  var e;
  return [t[0], Ki((e = t[1]) != null ? e : "")];
}
class Gh {
  constructor() {
    this.localStorage = bi.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Zh);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Ki(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Ys(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Yh = "wc_storage_version", ea = 1, Jh = async (t, e, r) => {
  const s = Yh, i = await e.getItem(s);
  if (i && i >= ea) {
    r(e);
    return;
  }
  const n = await t.getKeys();
  if (!n.length) {
    r(e);
    return;
  }
  const a = [];
  for (; n.length; ) {
    const o = n.shift();
    if (!o)
      continue;
    const h = o.toLowerCase();
    if (h.includes("wc@") || h.includes("walletconnect") || h.includes("wc_") || h.includes("wallet_connect")) {
      const l = await t.getItem(o);
      await e.setItem(o, l), a.push(o);
    }
  }
  await e.setItem(s, ea), r(e), Xh(t, a);
}, Xh = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Qh = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Gh();
    this.storage = e;
    try {
      const r = new Hh();
      Jh(e, r, this.setInitialized);
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
var ys = {};
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
  return Nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var i in s)
      s.hasOwnProperty(i) && (r[i] = s[i]);
  }, Nn(t, e);
};
function ed(t, e) {
  Nn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var An = function() {
  return An = Object.assign || function(e) {
    for (var r, s = 1, i = arguments.length; s < i; s++) {
      r = arguments[s];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, An.apply(this, arguments);
};
function td(t, e) {
  var r = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (r[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(t); i < s.length; i++)
      e.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[i]) && (r[s[i]] = t[s[i]]);
  return r;
}
function rd(t, e, r, s) {
  var i = arguments.length, n = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, r) : s, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, r, s);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (n = (i < 3 ? a(n) : i > 3 ? a(e, r, n) : a(e, r)) || n);
  return i > 3 && n && Object.defineProperty(e, r, n), n;
}
function sd(t, e) {
  return function(r, s) {
    e(r, s, t);
  };
}
function id(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function nd(t, e, r, s) {
  function i(n) {
    return n instanceof r ? n : new r(function(a) {
      a(n);
    });
  }
  return new (r || (r = Promise))(function(n, a) {
    function o(d) {
      try {
        l(s.next(d));
      } catch (f) {
        a(f);
      }
    }
    function h(d) {
      try {
        l(s.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function l(d) {
      d.done ? n(d.value) : i(d.value).then(o, h);
    }
    l((s = s.apply(t, e || [])).next());
  });
}
function od(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, s, i, n, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
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
function ad(t, e, r, s) {
  s === void 0 && (s = r), t[s] = e[r];
}
function cd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Rn(t) {
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
function zc(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var s = r.call(t), i, n = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = s.next()).done; )
      n.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = s.return) && r.call(s);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return n;
}
function ud() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(zc(arguments[e]));
  return t;
}
function ld() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var s = Array(t), i = 0, e = 0; e < r; e++)
    for (var n = arguments[e], a = 0, o = n.length; a < o; a++, i++)
      s[i] = n[a];
  return s;
}
function Fs(t) {
  return this instanceof Fs ? (this.v = t, this) : new Fs(t);
}
function hd(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(t, e || []), i, n = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    s[y] && (i[y] = function(w) {
      return new Promise(function(_, O) {
        n.push([y, w, _, O]) > 1 || o(y, w);
      });
    });
  }
  function o(y, w) {
    try {
      h(s[y](w));
    } catch (_) {
      f(n[0][3], _);
    }
  }
  function h(y) {
    y.value instanceof Fs ? Promise.resolve(y.value.v).then(l, d) : f(n[0][2], y);
  }
  function l(y) {
    o("next", y);
  }
  function d(y) {
    o("throw", y);
  }
  function f(y, w) {
    y(w), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function dd(t) {
  var e, r;
  return e = {}, s("next"), s("throw", function(i) {
    throw i;
  }), s("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function s(i, n) {
    e[i] = t[i] ? function(a) {
      return (r = !r) ? { value: Fs(t[i](a)), done: i === "return" } : n ? n(a) : a;
    } : n;
  }
}
function fd(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Rn == "function" ? Rn(t) : t[Symbol.iterator](), r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function s(n) {
    r[n] = t[n] && function(a) {
      return new Promise(function(o, h) {
        a = t[n](a), i(o, h, a.done, a.value);
      });
    };
  }
  function i(n, a, o, h) {
    Promise.resolve(h).then(function(l) {
      n({ value: l, done: o });
    }, a);
  }
}
function pd(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function gd(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function yd(t) {
  return t && t.__esModule ? t : { default: t };
}
function md(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function vd(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return An;
  },
  __asyncDelegator: dd,
  __asyncGenerator: hd,
  __asyncValues: fd,
  __await: Fs,
  __awaiter: nd,
  __classPrivateFieldGet: md,
  __classPrivateFieldSet: vd,
  __createBinding: ad,
  __decorate: rd,
  __exportStar: cd,
  __extends: ed,
  __generator: od,
  __importDefault: yd,
  __importStar: gd,
  __makeTemplateObject: pd,
  __metadata: id,
  __param: sd,
  __read: zc,
  __rest: td,
  __spread: ud,
  __spreadArrays: ld,
  __values: Rn
}, Symbol.toStringTag, { value: "Module" })), ar = /* @__PURE__ */ qi(wd);
var Is = {}, te = {}, cn = {}, Os = {}, ta;
function bd() {
  if (ta)
    return Os;
  ta = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Os.delay = t, Os;
}
var jr = {}, un = {}, kr = {}, ra;
function _d() {
  return ra || (ra = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.ONE_THOUSAND = kr.ONE_HUNDRED = void 0, kr.ONE_HUNDRED = 100, kr.ONE_THOUSAND = 1e3), kr;
}
var ln = {}, sa;
function Ed() {
  return sa || (sa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ln)), ln;
}
var ia;
function qc() {
  return ia || (ia = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(_d(), t), e.__exportStar(Ed(), t);
  }(un)), un;
}
var na;
function Sd() {
  if (na)
    return jr;
  na = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.fromMiliseconds = jr.toMiliseconds = void 0;
  const t = qc();
  function e(s) {
    return s * t.ONE_THOUSAND;
  }
  jr.toMiliseconds = e;
  function r(s) {
    return Math.floor(s / t.ONE_THOUSAND);
  }
  return jr.fromMiliseconds = r, jr;
}
var oa;
function xd() {
  return oa || (oa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(bd(), t), e.__exportStar(Sd(), t);
  }(cn)), cn;
}
var ss = {}, aa;
function Dd() {
  if (aa)
    return ss;
  aa = 1, Object.defineProperty(ss, "__esModule", { value: !0 }), ss.Watch = void 0;
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
  return ss.Watch = t, ss.default = t, ss;
}
var hn = {}, Cs = {}, ca;
function Id() {
  if (ca)
    return Cs;
  ca = 1, Object.defineProperty(Cs, "__esModule", { value: !0 }), Cs.IWatch = void 0;
  class t {
  }
  return Cs.IWatch = t, Cs;
}
var ua;
function Od() {
  return ua || (ua = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Id(), t);
  }(hn)), hn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(xd(), t), e.__exportStar(Dd(), t), e.__exportStar(Od(), t), e.__exportStar(qc(), t);
})(te);
var dn = {}, Ts = {};
let Xr = class {
};
const Cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Xr
}, Symbol.toStringTag, { value: "Module" })), Td = /* @__PURE__ */ qi(Cd);
var la;
function Nd() {
  if (la)
    return Ts;
  la = 1, Object.defineProperty(Ts, "__esModule", { value: !0 }), Ts.IHeartBeat = void 0;
  const t = Td;
  class e extends t.IEvents {
    constructor(s) {
      super();
    }
  }
  return Ts.IHeartBeat = e, Ts;
}
var ha;
function Bc() {
  return ha || (ha = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Nd(), t);
  }(dn)), dn;
}
var fn = {}, zr = {}, da;
function Ad() {
  if (da)
    return zr;
  da = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.HEARTBEAT_EVENTS = zr.HEARTBEAT_INTERVAL = void 0;
  const t = te;
  return zr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, zr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, zr;
}
var fa;
function Kc() {
  return fa || (fa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Ad(), t);
  }(fn)), fn;
}
var pa;
function Rd() {
  if (pa)
    return Is;
  pa = 1, Object.defineProperty(Is, "__esModule", { value: !0 }), Is.HeartBeat = void 0;
  const t = ar, e = Jt, r = te, s = Bc(), i = Kc();
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
  return Is.HeartBeat = n, Is;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(Rd(), t), e.__exportStar(Bc(), t), e.__exportStar(Kc(), t);
})(ys);
var De = {}, pn, ga;
function Pd() {
  if (ga)
    return pn;
  ga = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  pn = e;
  function e(r, s, i) {
    var n = i && i.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = s.length + a;
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
    for (var f = "", y = 1 - a, w = -1, _ = r && r.length || 0, O = 0; O < _; ) {
      if (r.charCodeAt(O) === 37 && O + 1 < _) {
        switch (w = w > -1 ? w : 0, r.charCodeAt(O + 1)) {
          case 100:
          case 102:
            if (y >= d || s[y] == null)
              break;
            w < O && (f += r.slice(w, O)), f += Number(s[y]), w = O + 2, O++;
            break;
          case 105:
            if (y >= d || s[y] == null)
              break;
            w < O && (f += r.slice(w, O)), f += Math.floor(Number(s[y])), w = O + 2, O++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= d || s[y] === void 0)
              break;
            w < O && (f += r.slice(w, O));
            var L = typeof s[y];
            if (L === "string") {
              f += "'" + s[y] + "'", w = O + 2, O++;
              break;
            }
            if (L === "function") {
              f += s[y].name || "<anonymous>", w = O + 2, O++;
              break;
            }
            f += n(s[y]), w = O + 2, O++;
            break;
          case 115:
            if (y >= d)
              break;
            w < O && (f += r.slice(w, O)), f += String(s[y]), w = O + 2, O++;
            break;
          case 37:
            w < O && (f += r.slice(w, O)), f += "%", w = O + 2, O++, y--;
            break;
        }
        ++y;
      }
      ++O;
    }
    return w === -1 ? r : (w < _ && (f += r.slice(w)), f);
  }
  return pn;
}
var gn, ya;
function Ld() {
  if (ya)
    return gn;
  ya = 1;
  const t = Pd();
  gn = i;
  const e = b().console || {}, r = {
    mapHttpRequest: _,
    mapHttpResponse: _,
    wrapRequestSerializer: O,
    wrapResponseSerializer: O,
    wrapErrorSerializer: O,
    req: _,
    res: _,
    err: y
  };
  function s(g, c) {
    return Array.isArray(g) ? g.filter(function(P) {
      return P !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(c) : !1;
  }
  function i(g) {
    g = g || {}, g.browser = g.browser || {};
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const P = g.serializers || {}, R = s(g.browser.serialize, P);
    let F = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (F = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", x = Object.create(p);
    x.log || (x.log = L), Object.defineProperty(x, "levelVal", {
      get: Z
    }), Object.defineProperty(x, "level", {
      get: z,
      set: $
    });
    const A = {
      transmit: c,
      serialize: R,
      asObject: g.browser.asObject,
      levels: B,
      timestamp: w(g)
    };
    x.levels = i.levels, x.level = G, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = L, x.serializers = P, x._serialize = R, x._stdErrSerialize = F, x.child = k, c && (x._logEvent = f());
    function Z() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function $(U) {
      if (U !== "silent" && !this.levels.values[U])
        throw Error("unknown level " + U);
      this._level = U, n(A, x, "error", "log"), n(A, x, "fatal", "error"), n(A, x, "warn", "error"), n(A, x, "info", "log"), n(A, x, "debug", "log"), n(A, x, "trace", "log");
    }
    function k(U, q) {
      if (!U)
        throw new Error("missing bindings for child Pino");
      q = q || {}, R && U.serializers && (q.serializers = U.serializers);
      const oe = q.serializers;
      if (R && oe) {
        var K = Object.assign({}, P, oe), se = g.browser.serialize === !0 ? Object.keys(K) : R;
        delete U.serializers, h([U], se, K, this._stdErrSerialize);
      }
      function Q(ne) {
        this._childLevel = (ne._childLevel | 0) + 1, this.error = l(ne, U, "error"), this.fatal = l(ne, U, "fatal"), this.warn = l(ne, U, "warn"), this.info = l(ne, U, "info"), this.debug = l(ne, U, "debug"), this.trace = l(ne, U, "trace"), K && (this.serializers = K, this._serialize = se), c && (this._logEvent = f(
          [].concat(ne._logEvent.bindings, U)
        ));
      }
      return Q.prototype = this, new Q(this);
    }
    return x;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: S, unixTime: C, isoTime: v });
  function n(g, c, p, P) {
    const R = Object.getPrototypeOf(c);
    c[p] = c.levelVal > c.levels.values[p] ? L : R[p] ? R[p] : e[p] || e[P] || L, a(g, c, p);
  }
  function a(g, c, p) {
    !g.transmit && c[p] === L || (c[p] = /* @__PURE__ */ function(P) {
      return function() {
        const F = g.timestamp(), B = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var x = 0; x < B.length; x++)
          B[x] = arguments[x];
        if (g.serialize && !g.asObject && h(B, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? P.call(G, o(this, p, B, F)) : P.apply(G, B), g.transmit) {
          const A = g.transmit.level || c.level, Z = i.levels.values[A], z = i.levels.values[p];
          if (z < Z)
            return;
          d(this, {
            ts: F,
            methodLevel: p,
            methodValue: z,
            transmitLevel: A,
            transmitValue: i.levels.values[g.transmit.level || c.level],
            send: g.transmit.send,
            val: c.levelVal
          }, B);
        }
      };
    }(c[p]));
  }
  function o(g, c, p, P) {
    g._serialize && h(p, g._serialize, g.serializers, g._stdErrSerialize);
    const R = p.slice();
    let F = R[0];
    const B = {};
    P && (B.time = P), B.level = i.levels.values[c];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), F !== null && typeof F == "object") {
      for (; G-- && typeof R[0] == "object"; )
        Object.assign(B, R.shift());
      F = R.length ? t(R.shift(), R) : void 0;
    } else
      typeof F == "string" && (F = t(R.shift(), R));
    return F !== void 0 && (B.msg = F), B;
  }
  function h(g, c, p, P) {
    for (const R in g)
      if (P && g[R] instanceof Error)
        g[R] = i.stdSerializers.err(g[R]);
      else if (typeof g[R] == "object" && !Array.isArray(g[R]))
        for (const F in g[R])
          c && c.indexOf(F) > -1 && F in p && (g[R][F] = p[F](g[R][F]));
  }
  function l(g, c, p) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = c;
      for (var R = 1; R < P.length; R++)
        P[R] = arguments[R - 1];
      return g[p].apply(this, P);
    };
  }
  function d(g, c, p) {
    const P = c.send, R = c.ts, F = c.methodLevel, B = c.methodValue, G = c.val, x = g._logEvent.bindings;
    h(
      p,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = R, g._logEvent.messages = p.filter(function(A) {
      return x.indexOf(A) === -1;
    }), g._logEvent.level.label = F, g._logEvent.level.value = B, P(F, g._logEvent, G), g._logEvent = f(x);
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
    const c = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const p in g)
      c[p] === void 0 && (c[p] = g[p]);
    return c;
  }
  function w(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? M : S;
  }
  function _() {
    return {};
  }
  function O(g) {
    return g;
  }
  function L() {
  }
  function M() {
    return !1;
  }
  function S() {
    return Date.now();
  }
  function C() {
    return Math.round(Date.now() / 1e3);
  }
  function v() {
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
  return gn;
}
var qr = {}, ma;
function Vc() {
  return ma || (ma = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.PINO_CUSTOM_CONTEXT_KEY = qr.PINO_LOGGER_DEFAULTS = void 0, qr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, qr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), qr;
}
var St = {}, va;
function Fd() {
  if (va)
    return St;
  va = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const t = Vc();
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
  function a(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = n(o, h, l), f = o.child({ context: d });
    return s(f, d, l);
  }
  return St.generateChildLogger = a, St;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = ar, r = e.__importDefault(Ld());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Vc(), t), e.__exportStar(Fd(), t);
})(De);
let Md = class extends Xr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Ud = class extends Xr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, $d = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, jd = class extends Xr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, kd = class extends Xr {
  constructor(e) {
    super();
  }
}, zd = class {
  constructor(e, r, s, i) {
    this.core = e, this.logger = r, this.name = s;
  }
};
class qd extends Xr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Bd extends Xr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let Kd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Vd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Wd = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Hd = class {
  constructor(e) {
    this.client = e;
  }
};
var oo = {}, ms = {}, Vi = {}, Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.BrowserRandomSource = void 0;
const wa = 65536;
class Zd {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let s = 0; s < r.length; s += wa)
      this._crypto.getRandomValues(r.subarray(s, s + Math.min(r.length - s, wa)));
    return r;
  }
}
Wi.BrowserRandomSource = Zd;
function Gd(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Hi = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
function Yd(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Ut.wipe = Yd;
const Jd = {}, Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jd
}, Symbol.toStringTag, { value: "Module" })), Qd = /* @__PURE__ */ qi(Xd);
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.NodeRandomSource = void 0;
const ef = Ut;
class tf {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Gd < "u") {
      const e = Qd;
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
    return (0, ef.wipe)(r), s;
  }
}
Hi.NodeRandomSource = tf;
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.SystemRandomSource = void 0;
const rf = Wi, sf = Hi;
class nf {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new rf.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new sf.NodeRandomSource(), this._source.isAvailable) {
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
Vi.SystemRandomSource = nf;
var le = {}, Wc = {};
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
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(Wc);
Object.defineProperty(le, "__esModule", { value: !0 });
var Hc = Wc;
function of(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
le.readInt16BE = of;
function af(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
le.readUint16BE = af;
function cf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
le.readInt16LE = cf;
function uf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint16LE = uf;
function Zc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
le.writeUint16BE = Zc;
le.writeInt16BE = Zc;
function Gc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
le.writeUint16LE = Gc;
le.writeInt16LE = Gc;
function Pn(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
le.readInt32BE = Pn;
function Ln(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
le.readUint32BE = Ln;
function Fn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
le.readInt32LE = Fn;
function Mn(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint32LE = Mn;
function xi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
le.writeUint32BE = xi;
le.writeInt32BE = xi;
function Di(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
le.writeUint32LE = Di;
le.writeInt32LE = Di;
function lf(t, e) {
  e === void 0 && (e = 0);
  var r = Pn(t, e), s = Pn(t, e + 4);
  return r * 4294967296 + s - (s >> 31) * 4294967296;
}
le.readInt64BE = lf;
function hf(t, e) {
  e === void 0 && (e = 0);
  var r = Ln(t, e), s = Ln(t, e + 4);
  return r * 4294967296 + s;
}
le.readUint64BE = hf;
function df(t, e) {
  e === void 0 && (e = 0);
  var r = Fn(t, e), s = Fn(t, e + 4);
  return s * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = df;
function ff(t, e) {
  e === void 0 && (e = 0);
  var r = Mn(t, e), s = Mn(t, e + 4);
  return s * 4294967296 + r;
}
le.readUint64LE = ff;
function Yc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), xi(t / 4294967296 >>> 0, e, r), xi(t >>> 0, e, r + 4), e;
}
le.writeUint64BE = Yc;
le.writeInt64BE = Yc;
function Jc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Di(t >>> 0, e, r), Di(t / 4294967296 >>> 0, e, r + 4), e;
}
le.writeUint64LE = Jc;
le.writeInt64LE = Jc;
function pf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, i = 1, n = t / 8 + r - 1; n >= r; n--)
    s += e[n] * i, i *= 256;
  return s;
}
le.readUintBE = pf;
function gf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, i = 1, n = r; n < r + t / 8; n++)
    s += e[n] * i, i *= 256;
  return s;
}
le.readUintLE = gf;
function yf(t, e, r, s) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), s === void 0 && (s = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Hc.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, n = t / 8 + s - 1; n >= s; n--)
    r[n] = e / i & 255, i *= 256;
  return r;
}
le.writeUintBE = yf;
function mf(t, e, r, s) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), s === void 0 && (s = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Hc.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, n = s; n < s + t / 8; n++)
    r[n] = e / i & 255, i *= 256;
  return r;
}
le.writeUintLE = mf;
function vf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
le.readFloat32BE = vf;
function wf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
le.readFloat32LE = wf;
function bf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
le.readFloat64BE = bf;
function _f(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
le.readFloat64LE = _f;
function Ef(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(r, t), e;
}
le.writeFloat32BE = Ef;
function Sf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(r, t, !0), e;
}
le.writeFloat32LE = Sf;
function xf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(r, t), e;
}
le.writeFloat64BE = xf;
function Df(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(r, t, !0), e;
}
le.writeFloat64LE = Df;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Vi, r = le, s = Ut;
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
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(l, d = a, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const w = d.length, _ = 256 - 256 % w;
    for (; l > 0; ) {
      const O = i(Math.ceil(l * 256 / _), f);
      for (let L = 0; L < O.length && l > 0; L++) {
        const M = O[L];
        M < _ && (y += d.charAt(M % w), l--);
      }
      (0, s.wipe)(O);
    }
    return y;
  }
  t.randomString = o;
  function h(l, d = a, f = t.defaultRandomSource) {
    const y = Math.ceil(l / (Math.log(d.length) / Math.LN2));
    return o(y, d, f);
  }
  t.randomStringForEntropy = h;
})(ms);
var Xc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ut;
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
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, y = l << 3, w = l % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var _ = d + 1; _ < w - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, w - 8), e.writeUint32BE(y, this._buffer, w - 4), n(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, w), this._finished = !0;
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
  function n(o, h, l, d, f, y, w) {
    for (var _ = l[0], O = l[1], L = l[2], M = l[3], S = l[4], C = l[5], v = l[6], b = l[7], g = d[0], c = d[1], p = d[2], P = d[3], R = d[4], F = d[5], B = d[6], G = d[7], x, A, Z, z, $, k, U, q; w >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var K = 8 * oe + y;
        o[oe] = e.readUint32BE(f, K), h[oe] = e.readUint32BE(f, K + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var se = _, Q = O, ne = L, N = M, T = S, D = C, u = v, E = b, W = g, J = c, we = p, Ie = P, _e = R, Ne = F, We = B, qe = G;
        if (x = b, A = G, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = (S >>> 14 | R << 18) ^ (S >>> 18 | R << 14) ^ (R >>> 9 | S << 23), A = (R >>> 14 | S << 18) ^ (R >>> 18 | S << 14) ^ (S >>> 9 | R << 23), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = S & C ^ ~S & v, A = R & F ^ ~R & B, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = i[oe * 2], A = i[oe * 2 + 1], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = o[oe % 16], A = h[oe % 16], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, Z = U & 65535 | q << 16, z = $ & 65535 | k << 16, x = Z, A = z, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = (_ >>> 28 | g << 4) ^ (g >>> 2 | _ << 30) ^ (g >>> 7 | _ << 25), A = (g >>> 28 | _ << 4) ^ (_ >>> 2 | g << 30) ^ (_ >>> 7 | g << 25), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = _ & O ^ _ & L ^ O & L, A = g & c ^ g & p ^ c & p, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, E = U & 65535 | q << 16, qe = $ & 65535 | k << 16, x = N, A = Ie, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = Z, A = z, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, N = U & 65535 | q << 16, Ie = $ & 65535 | k << 16, O = se, L = Q, M = ne, S = N, C = T, v = D, b = u, _ = E, c = W, p = J, P = we, R = Ie, F = _e, B = Ne, G = We, g = qe, oe % 16 === 15)
          for (var K = 0; K < 16; K++)
            x = o[K], A = h[K], $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = o[(K + 9) % 16], A = h[(K + 9) % 16], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, Z = o[(K + 1) % 16], z = h[(K + 1) % 16], x = (Z >>> 1 | z << 31) ^ (Z >>> 8 | z << 24) ^ Z >>> 7, A = (z >>> 1 | Z << 31) ^ (z >>> 8 | Z << 24) ^ (z >>> 7 | Z << 25), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, Z = o[(K + 14) % 16], z = h[(K + 14) % 16], x = (Z >>> 19 | z << 13) ^ (z >>> 29 | Z << 3) ^ Z >>> 6, A = (z >>> 19 | Z << 13) ^ (Z >>> 29 | z << 3) ^ (z >>> 6 | Z << 26), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, o[K] = U & 65535 | q << 16, h[K] = $ & 65535 | k << 16;
      }
      x = _, A = g, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[0], A = d[0], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[0] = _ = U & 65535 | q << 16, d[0] = g = $ & 65535 | k << 16, x = O, A = c, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[1], A = d[1], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[1] = O = U & 65535 | q << 16, d[1] = c = $ & 65535 | k << 16, x = L, A = p, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[2], A = d[2], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[2] = L = U & 65535 | q << 16, d[2] = p = $ & 65535 | k << 16, x = M, A = P, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[3], A = d[3], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[3] = M = U & 65535 | q << 16, d[3] = P = $ & 65535 | k << 16, x = S, A = R, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[4], A = d[4], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[4] = S = U & 65535 | q << 16, d[4] = R = $ & 65535 | k << 16, x = C, A = F, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[5], A = d[5], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[5] = C = U & 65535 | q << 16, d[5] = F = $ & 65535 | k << 16, x = v, A = B, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[6], A = d[6], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[6] = v = U & 65535 | q << 16, d[6] = B = $ & 65535 | k << 16, x = b, A = G, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[7], A = d[7], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[7] = b = U & 65535 | q << 16, d[7] = G = $ & 65535 | k << 16, y += 128, w -= 128;
    }
    return y;
  }
  function a(o) {
    var h = new s();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = a;
})(Xc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = ms, r = Xc, s = Ut;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(N) {
    const T = new Float64Array(16);
    if (N)
      for (let D = 0; D < N.length; D++)
        T[D] = N[D];
    return T;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const a = i(), o = i([1]), h = i([
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
  function w(N, T) {
    for (let D = 0; D < 16; D++)
      N[D] = T[D] | 0;
  }
  function _(N) {
    let T = 1;
    for (let D = 0; D < 16; D++) {
      let u = N[D] + T + 65535;
      T = Math.floor(u / 65536), N[D] = u - T * 65536;
    }
    N[0] += T - 1 + 37 * (T - 1);
  }
  function O(N, T, D) {
    const u = ~(D - 1);
    for (let E = 0; E < 16; E++) {
      const W = u & (N[E] ^ T[E]);
      N[E] ^= W, T[E] ^= W;
    }
  }
  function L(N, T) {
    const D = i(), u = i();
    for (let E = 0; E < 16; E++)
      u[E] = T[E];
    _(u), _(u), _(u);
    for (let E = 0; E < 2; E++) {
      D[0] = u[0] - 65517;
      for (let J = 1; J < 15; J++)
        D[J] = u[J] - 65535 - (D[J - 1] >> 16 & 1), D[J - 1] &= 65535;
      D[15] = u[15] - 32767 - (D[14] >> 16 & 1);
      const W = D[15] >> 16 & 1;
      D[14] &= 65535, O(u, D, 1 - W);
    }
    for (let E = 0; E < 16; E++)
      N[2 * E] = u[E] & 255, N[2 * E + 1] = u[E] >> 8;
  }
  function M(N, T) {
    let D = 0;
    for (let u = 0; u < 32; u++)
      D |= N[u] ^ T[u];
    return (1 & D - 1 >>> 8) - 1;
  }
  function S(N, T) {
    const D = new Uint8Array(32), u = new Uint8Array(32);
    return L(D, N), L(u, T), M(D, u);
  }
  function C(N) {
    const T = new Uint8Array(32);
    return L(T, N), T[0] & 1;
  }
  function v(N, T) {
    for (let D = 0; D < 16; D++)
      N[D] = T[2 * D] + (T[2 * D + 1] << 8);
    N[15] &= 32767;
  }
  function b(N, T, D) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] + D[u];
  }
  function g(N, T, D) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] - D[u];
  }
  function c(N, T, D) {
    let u, E, W = 0, J = 0, we = 0, Ie = 0, _e = 0, Ne = 0, We = 0, qe = 0, xe = 0, Ee = 0, be = 0, me = 0, ye = 0, pe = 0, fe = 0, ce = 0, ve = 0, Se = 0, ue = 0, Oe = 0, Ce = 0, Re = 0, Pe = 0, Ae = 0, qt = 0, Qt = 0, vr = 0, Pt = 0, Pr = 0, Es = 0, ii = 0, Ze = D[0], Be = D[1], Ge = D[2], Ye = D[3], Je = D[4], Ke = D[5], et = D[6], tt = D[7], rt = D[8], st = D[9], it = D[10], Qe = D[11], Xe = D[12], Ue = D[13], nt = D[14], ot = D[15];
    u = T[0], W += u * Ze, J += u * Be, we += u * Ge, Ie += u * Ye, _e += u * Je, Ne += u * Ke, We += u * et, qe += u * tt, xe += u * rt, Ee += u * st, be += u * it, me += u * Qe, ye += u * Xe, pe += u * Ue, fe += u * nt, ce += u * ot, u = T[1], J += u * Ze, we += u * Be, Ie += u * Ge, _e += u * Ye, Ne += u * Je, We += u * Ke, qe += u * et, xe += u * tt, Ee += u * rt, be += u * st, me += u * it, ye += u * Qe, pe += u * Xe, fe += u * Ue, ce += u * nt, ve += u * ot, u = T[2], we += u * Ze, Ie += u * Be, _e += u * Ge, Ne += u * Ye, We += u * Je, qe += u * Ke, xe += u * et, Ee += u * tt, be += u * rt, me += u * st, ye += u * it, pe += u * Qe, fe += u * Xe, ce += u * Ue, ve += u * nt, Se += u * ot, u = T[3], Ie += u * Ze, _e += u * Be, Ne += u * Ge, We += u * Ye, qe += u * Je, xe += u * Ke, Ee += u * et, be += u * tt, me += u * rt, ye += u * st, pe += u * it, fe += u * Qe, ce += u * Xe, ve += u * Ue, Se += u * nt, ue += u * ot, u = T[4], _e += u * Ze, Ne += u * Be, We += u * Ge, qe += u * Ye, xe += u * Je, Ee += u * Ke, be += u * et, me += u * tt, ye += u * rt, pe += u * st, fe += u * it, ce += u * Qe, ve += u * Xe, Se += u * Ue, ue += u * nt, Oe += u * ot, u = T[5], Ne += u * Ze, We += u * Be, qe += u * Ge, xe += u * Ye, Ee += u * Je, be += u * Ke, me += u * et, ye += u * tt, pe += u * rt, fe += u * st, ce += u * it, ve += u * Qe, Se += u * Xe, ue += u * Ue, Oe += u * nt, Ce += u * ot, u = T[6], We += u * Ze, qe += u * Be, xe += u * Ge, Ee += u * Ye, be += u * Je, me += u * Ke, ye += u * et, pe += u * tt, fe += u * rt, ce += u * st, ve += u * it, Se += u * Qe, ue += u * Xe, Oe += u * Ue, Ce += u * nt, Re += u * ot, u = T[7], qe += u * Ze, xe += u * Be, Ee += u * Ge, be += u * Ye, me += u * Je, ye += u * Ke, pe += u * et, fe += u * tt, ce += u * rt, ve += u * st, Se += u * it, ue += u * Qe, Oe += u * Xe, Ce += u * Ue, Re += u * nt, Pe += u * ot, u = T[8], xe += u * Ze, Ee += u * Be, be += u * Ge, me += u * Ye, ye += u * Je, pe += u * Ke, fe += u * et, ce += u * tt, ve += u * rt, Se += u * st, ue += u * it, Oe += u * Qe, Ce += u * Xe, Re += u * Ue, Pe += u * nt, Ae += u * ot, u = T[9], Ee += u * Ze, be += u * Be, me += u * Ge, ye += u * Ye, pe += u * Je, fe += u * Ke, ce += u * et, ve += u * tt, Se += u * rt, ue += u * st, Oe += u * it, Ce += u * Qe, Re += u * Xe, Pe += u * Ue, Ae += u * nt, qt += u * ot, u = T[10], be += u * Ze, me += u * Be, ye += u * Ge, pe += u * Ye, fe += u * Je, ce += u * Ke, ve += u * et, Se += u * tt, ue += u * rt, Oe += u * st, Ce += u * it, Re += u * Qe, Pe += u * Xe, Ae += u * Ue, qt += u * nt, Qt += u * ot, u = T[11], me += u * Ze, ye += u * Be, pe += u * Ge, fe += u * Ye, ce += u * Je, ve += u * Ke, Se += u * et, ue += u * tt, Oe += u * rt, Ce += u * st, Re += u * it, Pe += u * Qe, Ae += u * Xe, qt += u * Ue, Qt += u * nt, vr += u * ot, u = T[12], ye += u * Ze, pe += u * Be, fe += u * Ge, ce += u * Ye, ve += u * Je, Se += u * Ke, ue += u * et, Oe += u * tt, Ce += u * rt, Re += u * st, Pe += u * it, Ae += u * Qe, qt += u * Xe, Qt += u * Ue, vr += u * nt, Pt += u * ot, u = T[13], pe += u * Ze, fe += u * Be, ce += u * Ge, ve += u * Ye, Se += u * Je, ue += u * Ke, Oe += u * et, Ce += u * tt, Re += u * rt, Pe += u * st, Ae += u * it, qt += u * Qe, Qt += u * Xe, vr += u * Ue, Pt += u * nt, Pr += u * ot, u = T[14], fe += u * Ze, ce += u * Be, ve += u * Ge, Se += u * Ye, ue += u * Je, Oe += u * Ke, Ce += u * et, Re += u * tt, Pe += u * rt, Ae += u * st, qt += u * it, Qt += u * Qe, vr += u * Xe, Pt += u * Ue, Pr += u * nt, Es += u * ot, u = T[15], ce += u * Ze, ve += u * Be, Se += u * Ge, ue += u * Ye, Oe += u * Je, Ce += u * Ke, Re += u * et, Pe += u * tt, Ae += u * rt, qt += u * st, Qt += u * it, vr += u * Qe, Pt += u * Xe, Pr += u * Ue, Es += u * nt, ii += u * ot, W += 38 * ve, J += 38 * Se, we += 38 * ue, Ie += 38 * Oe, _e += 38 * Ce, Ne += 38 * Re, We += 38 * Pe, qe += 38 * Ae, xe += 38 * qt, Ee += 38 * Qt, be += 38 * vr, me += 38 * Pt, ye += 38 * Pr, pe += 38 * Es, fe += 38 * ii, E = 1, u = W + E + 65535, E = Math.floor(u / 65536), W = u - E * 65536, u = J + E + 65535, E = Math.floor(u / 65536), J = u - E * 65536, u = we + E + 65535, E = Math.floor(u / 65536), we = u - E * 65536, u = Ie + E + 65535, E = Math.floor(u / 65536), Ie = u - E * 65536, u = _e + E + 65535, E = Math.floor(u / 65536), _e = u - E * 65536, u = Ne + E + 65535, E = Math.floor(u / 65536), Ne = u - E * 65536, u = We + E + 65535, E = Math.floor(u / 65536), We = u - E * 65536, u = qe + E + 65535, E = Math.floor(u / 65536), qe = u - E * 65536, u = xe + E + 65535, E = Math.floor(u / 65536), xe = u - E * 65536, u = Ee + E + 65535, E = Math.floor(u / 65536), Ee = u - E * 65536, u = be + E + 65535, E = Math.floor(u / 65536), be = u - E * 65536, u = me + E + 65535, E = Math.floor(u / 65536), me = u - E * 65536, u = ye + E + 65535, E = Math.floor(u / 65536), ye = u - E * 65536, u = pe + E + 65535, E = Math.floor(u / 65536), pe = u - E * 65536, u = fe + E + 65535, E = Math.floor(u / 65536), fe = u - E * 65536, u = ce + E + 65535, E = Math.floor(u / 65536), ce = u - E * 65536, W += E - 1 + 37 * (E - 1), E = 1, u = W + E + 65535, E = Math.floor(u / 65536), W = u - E * 65536, u = J + E + 65535, E = Math.floor(u / 65536), J = u - E * 65536, u = we + E + 65535, E = Math.floor(u / 65536), we = u - E * 65536, u = Ie + E + 65535, E = Math.floor(u / 65536), Ie = u - E * 65536, u = _e + E + 65535, E = Math.floor(u / 65536), _e = u - E * 65536, u = Ne + E + 65535, E = Math.floor(u / 65536), Ne = u - E * 65536, u = We + E + 65535, E = Math.floor(u / 65536), We = u - E * 65536, u = qe + E + 65535, E = Math.floor(u / 65536), qe = u - E * 65536, u = xe + E + 65535, E = Math.floor(u / 65536), xe = u - E * 65536, u = Ee + E + 65535, E = Math.floor(u / 65536), Ee = u - E * 65536, u = be + E + 65535, E = Math.floor(u / 65536), be = u - E * 65536, u = me + E + 65535, E = Math.floor(u / 65536), me = u - E * 65536, u = ye + E + 65535, E = Math.floor(u / 65536), ye = u - E * 65536, u = pe + E + 65535, E = Math.floor(u / 65536), pe = u - E * 65536, u = fe + E + 65535, E = Math.floor(u / 65536), fe = u - E * 65536, u = ce + E + 65535, E = Math.floor(u / 65536), ce = u - E * 65536, W += E - 1 + 37 * (E - 1), N[0] = W, N[1] = J, N[2] = we, N[3] = Ie, N[4] = _e, N[5] = Ne, N[6] = We, N[7] = qe, N[8] = xe, N[9] = Ee, N[10] = be, N[11] = me, N[12] = ye, N[13] = pe, N[14] = fe, N[15] = ce;
  }
  function p(N, T) {
    c(N, T, T);
  }
  function P(N, T) {
    const D = i();
    let u;
    for (u = 0; u < 16; u++)
      D[u] = T[u];
    for (u = 253; u >= 0; u--)
      p(D, D), u !== 2 && u !== 4 && c(D, D, T);
    for (u = 0; u < 16; u++)
      N[u] = D[u];
  }
  function R(N, T) {
    const D = i();
    let u;
    for (u = 0; u < 16; u++)
      D[u] = T[u];
    for (u = 250; u >= 0; u--)
      p(D, D), u !== 1 && c(D, D, T);
    for (u = 0; u < 16; u++)
      N[u] = D[u];
  }
  function F(N, T) {
    const D = i(), u = i(), E = i(), W = i(), J = i(), we = i(), Ie = i(), _e = i(), Ne = i();
    g(D, N[1], N[0]), g(Ne, T[1], T[0]), c(D, D, Ne), b(u, N[0], N[1]), b(Ne, T[0], T[1]), c(u, u, Ne), c(E, N[3], T[3]), c(E, E, l), c(W, N[2], T[2]), b(W, W, W), g(J, u, D), g(we, W, E), b(Ie, W, E), b(_e, u, D), c(N[0], J, we), c(N[1], _e, Ie), c(N[2], Ie, we), c(N[3], J, _e);
  }
  function B(N, T, D) {
    for (let u = 0; u < 4; u++)
      O(N[u], T[u], D);
  }
  function G(N, T) {
    const D = i(), u = i(), E = i();
    P(E, T[2]), c(D, T[0], E), c(u, T[1], E), L(N, u), N[31] ^= C(D) << 7;
  }
  function x(N, T, D) {
    w(N[0], a), w(N[1], o), w(N[2], o), w(N[3], a);
    for (let u = 255; u >= 0; --u) {
      const E = D[u / 8 | 0] >> (u & 7) & 1;
      B(N, T, E), F(T, N), F(N, N), B(N, T, E);
    }
  }
  function A(N, T) {
    const D = [i(), i(), i(), i()];
    w(D[0], d), w(D[1], f), w(D[2], o), c(D[3], d, f), x(N, D, T);
  }
  function Z(N) {
    if (N.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const T = (0, r.hash)(N);
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const D = new Uint8Array(32), u = [i(), i(), i(), i()];
    A(u, T), G(D, u);
    const E = new Uint8Array(64);
    return E.set(N), E.set(D, 32), {
      publicKey: D,
      secretKey: E
    };
  }
  t.generateKeyPairFromSeed = Z;
  function z(N) {
    const T = (0, e.randomBytes)(32, N), D = Z(T);
    return (0, s.wipe)(T), D;
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
  function U(N, T) {
    let D, u, E, W;
    for (u = 63; u >= 32; --u) {
      for (D = 0, E = u - 32, W = u - 12; E < W; ++E)
        T[E] += D - 16 * T[u] * k[E - (u - 32)], D = Math.floor((T[E] + 128) / 256), T[E] -= D * 256;
      T[E] += D, T[u] = 0;
    }
    for (D = 0, E = 0; E < 32; E++)
      T[E] += D - (T[31] >> 4) * k[E], D = T[E] >> 8, T[E] &= 255;
    for (E = 0; E < 32; E++)
      T[E] -= D * k[E];
    for (u = 0; u < 32; u++)
      T[u + 1] += T[u] >> 8, N[u] = T[u] & 255;
  }
  function q(N) {
    const T = new Float64Array(64);
    for (let D = 0; D < 64; D++)
      T[D] = N[D];
    for (let D = 0; D < 64; D++)
      N[D] = 0;
    U(N, T);
  }
  function oe(N, T) {
    const D = new Float64Array(64), u = [i(), i(), i(), i()], E = (0, r.hash)(N.subarray(0, 32));
    E[0] &= 248, E[31] &= 127, E[31] |= 64;
    const W = new Uint8Array(64);
    W.set(E.subarray(32), 32);
    const J = new r.SHA512();
    J.update(W.subarray(32)), J.update(T);
    const we = J.digest();
    J.clean(), q(we), A(u, we), G(W, u), J.reset(), J.update(W.subarray(0, 32)), J.update(N.subarray(32)), J.update(T);
    const Ie = J.digest();
    q(Ie);
    for (let _e = 0; _e < 32; _e++)
      D[_e] = we[_e];
    for (let _e = 0; _e < 32; _e++)
      for (let Ne = 0; Ne < 32; Ne++)
        D[_e + Ne] += Ie[_e] * E[Ne];
    return U(W.subarray(32), D), W;
  }
  t.sign = oe;
  function K(N, T) {
    const D = i(), u = i(), E = i(), W = i(), J = i(), we = i(), Ie = i();
    return w(N[2], o), v(N[1], T), p(E, N[1]), c(W, E, h), g(E, E, N[2]), b(W, N[2], W), p(J, W), p(we, J), c(Ie, we, J), c(D, Ie, E), c(D, D, W), R(D, D), c(D, D, E), c(D, D, W), c(D, D, W), c(N[0], D, W), p(u, N[0]), c(u, u, W), S(u, E) && c(N[0], N[0], y), p(u, N[0]), c(u, u, W), S(u, E) ? -1 : (C(N[0]) === T[31] >> 7 && g(N[0], a, N[0]), c(N[3], N[0], N[1]), 0);
  }
  function se(N, T, D) {
    const u = new Uint8Array(32), E = [i(), i(), i(), i()], W = [i(), i(), i(), i()];
    if (D.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(W, N))
      return !1;
    const J = new r.SHA512();
    J.update(D.subarray(0, 32)), J.update(N), J.update(T);
    const we = J.digest();
    return q(we), x(E, W, we), A(W, D.subarray(32)), F(E, W), G(u, E), !M(D, u);
  }
  t.verify = se;
  function Q(N) {
    let T = [i(), i(), i(), i()];
    if (K(T, N))
      throw new Error("Ed25519: invalid public key");
    let D = i(), u = i(), E = T[1];
    b(D, o, E), g(u, o, E), P(u, u), c(D, D, u);
    let W = new Uint8Array(32);
    return L(W, D), W;
  }
  t.convertPublicKeyToX25519 = Q;
  function ne(N) {
    const T = (0, r.hash)(N.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const D = new Uint8Array(T.subarray(0, 32));
    return (0, s.wipe)(T), D;
  }
  t.convertSecretKeyToX25519 = ne;
})(oo);
const If = "EdDSA", Of = "JWT", Qc = ".", eu = "base64url", Cf = "utf8", Tf = "utf8", Nf = ":", Af = "did", Rf = "key", ba = "base58btc", Pf = "z", Lf = "K36", Ff = 32;
function ao(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function tu(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ao(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Un(t, e) {
  e || (e = t.reduce((i, n) => i + n.length, 0));
  const r = tu(e);
  let s = 0;
  for (const i of t)
    r.set(i, s), s += i.length;
  return ao(r);
}
function Mf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), a = n.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, h = t.charAt(0), l = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var O = 0, L = 0, M = 0, S = _.length; M !== S && _[M] === 0; )
      M++, O++;
    for (var C = (S - M) * d + 1 >>> 0, v = new Uint8Array(C); M !== S; ) {
      for (var b = _[M], g = 0, c = C - 1; (b !== 0 || g < L) && c !== -1; c--, g++)
        b += 256 * v[c] >>> 0, v[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      L = g, M++;
    }
    for (var p = C - L; p !== C && v[p] === 0; )
      p++;
    for (var P = h.repeat(O); p < C; ++p)
      P += t.charAt(v[p]);
    return P;
  }
  function y(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var O = 0;
    if (_[O] !== " ") {
      for (var L = 0, M = 0; _[O] === h; )
        L++, O++;
      for (var S = (_.length - O) * l + 1 >>> 0, C = new Uint8Array(S); _[O]; ) {
        var v = r[_.charCodeAt(O)];
        if (v === 255)
          return;
        for (var b = 0, g = S - 1; (v !== 0 || b < M) && g !== -1; g--, b++)
          v += o * C[g] >>> 0, C[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        M = b, O++;
      }
      if (_[O] !== " ") {
        for (var c = S - M; c !== S && C[c] === 0; )
          c++;
        for (var p = new Uint8Array(L + (S - c)), P = L; c !== S; )
          p[P++] = C[c++];
        return p;
      }
    }
  }
  function w(_) {
    var O = y(_);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: y,
    decode: w
  };
}
var Uf = Mf, $f = Uf;
const jf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, kf = (t) => new TextEncoder().encode(t), zf = (t) => new TextDecoder().decode(t);
class qf {
  constructor(e, r, s) {
    this.name = e, this.prefix = r, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Bf {
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
    return ru(this, e);
  }
}
class Kf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ru(this, e);
  }
  decode(e) {
    const r = e[0], s = this.decoders[r];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ru = (t, e) => new Kf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Vf {
  constructor(e, r, s, i) {
    this.name = e, this.prefix = r, this.baseEncode = s, this.baseDecode = i, this.encoder = new qf(e, r, s), this.decoder = new Bf(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Zi = ({ name: t, prefix: e, encode: r, decode: s }) => new Vf(t, e, r, s), Js = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: s, decode: i } = $f(r, e);
  return Zi({
    prefix: t,
    name: e,
    encode: s,
    decode: (n) => jf(i(n))
  });
}, Wf = (t, e, r, s) => {
  const i = {};
  for (let d = 0; d < e.length; ++d)
    i[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const a = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = i[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${s} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Hf = (t, e, r) => {
  const s = e[e.length - 1] === "=", i = (1 << r) - 1;
  let n = "", a = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], a += 8; a > r; )
      a -= r, n += e[i & o >> a];
  if (a && (n += e[i & o << r - a]), s)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, ft = ({ name: t, prefix: e, bitsPerChar: r, alphabet: s }) => Zi({
  prefix: e,
  name: t,
  encode(i) {
    return Hf(i, s, r);
  },
  decode(i) {
    return Wf(i, s, r, t);
  }
}), Zf = Zi({
  prefix: "\0",
  name: "identity",
  encode: (t) => zf(t),
  decode: (t) => kf(t)
}), Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Zf
}, Symbol.toStringTag, { value: "Module" })), Yf = ft({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Yf
}, Symbol.toStringTag, { value: "Module" })), Xf = ft({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Xf
}, Symbol.toStringTag, { value: "Module" })), ep = Js({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: ep
}, Symbol.toStringTag, { value: "Module" })), rp = ft({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), sp = ft({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: rp,
  base16upper: sp
}, Symbol.toStringTag, { value: "Module" })), np = ft({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), op = ft({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), ap = ft({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), cp = ft({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), up = ft({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), lp = ft({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), hp = ft({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), dp = ft({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), fp = ft({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: np,
  base32hex: up,
  base32hexpad: hp,
  base32hexpadupper: dp,
  base32hexupper: lp,
  base32pad: ap,
  base32padupper: cp,
  base32upper: op,
  base32z: fp
}, Symbol.toStringTag, { value: "Module" })), gp = Js({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), yp = Js({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: gp,
  base36upper: yp
}, Symbol.toStringTag, { value: "Module" })), vp = Js({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), wp = Js({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: vp,
  base58flickr: wp
}, Symbol.toStringTag, { value: "Module" })), _p = ft({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ep = ft({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Sp = ft({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), xp = ft({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: _p,
  base64pad: Ep,
  base64url: Sp,
  base64urlpad: xp
}, Symbol.toStringTag, { value: "Module" })), su = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ip = su.reduce((t, e, r) => (t[r] = e, t), []), Op = su.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Cp(t) {
  return t.reduce((e, r) => (e += Ip[r], e), "");
}
function Tp(t) {
  const e = [];
  for (const r of t) {
    const s = Op[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Np = Zi({
  prefix: "🚀",
  name: "base256emoji",
  encode: Cp,
  decode: Tp
}), Ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Np
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const _a = {
  ...Gf,
  ...Jf,
  ...Qf,
  ...tp,
  ...ip,
  ...pp,
  ...mp,
  ...bp,
  ...Dp,
  ...Ap
};
function iu(t, e, r, s) {
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
const Ea = iu("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), yn = iu("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = tu(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), nu = {
  utf8: Ea,
  "utf-8": Ea,
  hex: _a.base16,
  latin1: yn,
  ascii: yn,
  binary: yn,
  ..._a
};
function Ct(t, e = "utf8") {
  const r = nu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Rt(t, e = "utf8") {
  const r = nu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ao(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ii(t) {
  return Ct(Rt(Ys(t), Cf), eu);
}
function ou(t) {
  const e = Rt(Lf, ba), r = Pf + Ct(Un([e, t]), ba);
  return [Af, Rf, r].join(Nf);
}
function Rp(t) {
  return Ct(t, eu);
}
function Pp(t) {
  return Rt([Ii(t.header), Ii(t.payload)].join(Qc), Tf);
}
function Lp(t) {
  return [
    Ii(t.header),
    Ii(t.payload),
    Rp(t.signature)
  ].join(Qc);
}
function Sa(t = ms.randomBytes(Ff)) {
  return oo.generateKeyPairFromSeed(t);
}
async function Fp(t, e, r, s, i = te.fromMiliseconds(Date.now())) {
  const n = { alg: If, typ: Of }, a = ou(s.publicKey), o = i + r, h = { iss: a, sub: t, aud: e, iat: i, exp: o }, l = Pp({ header: n, payload: h }), d = oo.sign(s.secretKey, l);
  return Lp({ header: n, payload: h, signature: d });
}
var co = {}, Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
var mt = le, $n = Ut, Mp = 20;
function Up(t, e, r) {
  for (var s = 1634760805, i = 857760878, n = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], w = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], _ = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], O = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], L = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], S = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], C = s, v = i, b = n, g = a, c = o, p = h, P = l, R = d, F = f, B = y, G = w, x = _, A = O, Z = L, z = M, $ = S, k = 0; k < Mp; k += 2)
    C = C + c | 0, A ^= C, A = A >>> 16 | A << 16, F = F + A | 0, c ^= F, c = c >>> 20 | c << 12, v = v + p | 0, Z ^= v, Z = Z >>> 16 | Z << 16, B = B + Z | 0, p ^= B, p = p >>> 20 | p << 12, b = b + P | 0, z ^= b, z = z >>> 16 | z << 16, G = G + z | 0, P ^= G, P = P >>> 20 | P << 12, g = g + R | 0, $ ^= g, $ = $ >>> 16 | $ << 16, x = x + $ | 0, R ^= x, R = R >>> 20 | R << 12, b = b + P | 0, z ^= b, z = z >>> 24 | z << 8, G = G + z | 0, P ^= G, P = P >>> 25 | P << 7, g = g + R | 0, $ ^= g, $ = $ >>> 24 | $ << 8, x = x + $ | 0, R ^= x, R = R >>> 25 | R << 7, v = v + p | 0, Z ^= v, Z = Z >>> 24 | Z << 8, B = B + Z | 0, p ^= B, p = p >>> 25 | p << 7, C = C + c | 0, A ^= C, A = A >>> 24 | A << 8, F = F + A | 0, c ^= F, c = c >>> 25 | c << 7, C = C + p | 0, $ ^= C, $ = $ >>> 16 | $ << 16, G = G + $ | 0, p ^= G, p = p >>> 20 | p << 12, v = v + P | 0, A ^= v, A = A >>> 16 | A << 16, x = x + A | 0, P ^= x, P = P >>> 20 | P << 12, b = b + R | 0, Z ^= b, Z = Z >>> 16 | Z << 16, F = F + Z | 0, R ^= F, R = R >>> 20 | R << 12, g = g + c | 0, z ^= g, z = z >>> 16 | z << 16, B = B + z | 0, c ^= B, c = c >>> 20 | c << 12, b = b + R | 0, Z ^= b, Z = Z >>> 24 | Z << 8, F = F + Z | 0, R ^= F, R = R >>> 25 | R << 7, g = g + c | 0, z ^= g, z = z >>> 24 | z << 8, B = B + z | 0, c ^= B, c = c >>> 25 | c << 7, v = v + P | 0, A ^= v, A = A >>> 24 | A << 8, x = x + A | 0, P ^= x, P = P >>> 25 | P << 7, C = C + p | 0, $ ^= C, $ = $ >>> 24 | $ << 8, G = G + $ | 0, p ^= G, p = p >>> 25 | p << 7;
  mt.writeUint32LE(C + s | 0, t, 0), mt.writeUint32LE(v + i | 0, t, 4), mt.writeUint32LE(b + n | 0, t, 8), mt.writeUint32LE(g + a | 0, t, 12), mt.writeUint32LE(c + o | 0, t, 16), mt.writeUint32LE(p + h | 0, t, 20), mt.writeUint32LE(P + l | 0, t, 24), mt.writeUint32LE(R + d | 0, t, 28), mt.writeUint32LE(F + f | 0, t, 32), mt.writeUint32LE(B + y | 0, t, 36), mt.writeUint32LE(G + w | 0, t, 40), mt.writeUint32LE(x + _ | 0, t, 44), mt.writeUint32LE(A + O | 0, t, 48), mt.writeUint32LE(Z + L | 0, t, 52), mt.writeUint32LE(z + M | 0, t, 56), mt.writeUint32LE($ + S | 0, t, 60);
}
function au(t, e, r, s, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, a;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    n = new Uint8Array(16), a = n.length - e.length, n.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    n = e, a = i;
  }
  for (var o = new Uint8Array(64), h = 0; h < r.length; h += 64) {
    Up(o, n, t);
    for (var l = h; l < h + 64 && l < r.length; l++)
      s[l] = r[l] ^ o[l - h];
    jp(n, 0, a);
  }
  return $n.wipe(o), i === 0 && $n.wipe(n), s;
}
Gi.streamXOR = au;
function $p(t, e, r, s) {
  return s === void 0 && (s = 0), $n.wipe(r), au(t, e, r, r, s);
}
Gi.stream = $p;
function jp(t, e, r) {
  for (var s = 1; r--; )
    s = s + (t[e] & 255) | 0, t[e] = s & 255, s >>>= 8, e++;
  if (s > 0)
    throw new Error("ChaCha: counter overflow");
}
var cu = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
function kp(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Ar.select = kp;
function zp(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Ar.lessOrEqual = zp;
function uu(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, s = 0; s < t.length; s++)
    r |= t[s] ^ e[s];
  return 1 & r - 1 >>> 8;
}
Ar.compare = uu;
function qp(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : uu(t, e) !== 0;
}
Ar.equal = qp;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Ar, r = Ut;
  t.DIGEST_LENGTH = 16;
  var s = (
    /** @class */
    function() {
      function a(o) {
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
        var w = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | w << 2) & 8191;
        var _ = o[12] | o[13] << 8;
        this._r[7] = (w >>> 11 | _ << 5) & 8065;
        var O = o[14] | o[15] << 8;
        this._r[8] = (_ >>> 8 | O << 8) & 8191, this._r[9] = O >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, h, l) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], y = this._h[1], w = this._h[2], _ = this._h[3], O = this._h[4], L = this._h[5], M = this._h[6], S = this._h[7], C = this._h[8], v = this._h[9], b = this._r[0], g = this._r[1], c = this._r[2], p = this._r[3], P = this._r[4], R = this._r[5], F = this._r[6], B = this._r[7], G = this._r[8], x = this._r[9]; l >= 16; ) {
          var A = o[h + 0] | o[h + 1] << 8;
          f += A & 8191;
          var Z = o[h + 2] | o[h + 3] << 8;
          y += (A >>> 13 | Z << 3) & 8191;
          var z = o[h + 4] | o[h + 5] << 8;
          w += (Z >>> 10 | z << 6) & 8191;
          var $ = o[h + 6] | o[h + 7] << 8;
          _ += (z >>> 7 | $ << 9) & 8191;
          var k = o[h + 8] | o[h + 9] << 8;
          O += ($ >>> 4 | k << 12) & 8191, L += k >>> 1 & 8191;
          var U = o[h + 10] | o[h + 11] << 8;
          M += (k >>> 14 | U << 2) & 8191;
          var q = o[h + 12] | o[h + 13] << 8;
          S += (U >>> 11 | q << 5) & 8191;
          var oe = o[h + 14] | o[h + 15] << 8;
          C += (q >>> 8 | oe << 8) & 8191, v += oe >>> 5 | d;
          var K = 0, se = K;
          se += f * b, se += y * (5 * x), se += w * (5 * G), se += _ * (5 * B), se += O * (5 * F), K = se >>> 13, se &= 8191, se += L * (5 * R), se += M * (5 * P), se += S * (5 * p), se += C * (5 * c), se += v * (5 * g), K += se >>> 13, se &= 8191;
          var Q = K;
          Q += f * g, Q += y * b, Q += w * (5 * x), Q += _ * (5 * G), Q += O * (5 * B), K = Q >>> 13, Q &= 8191, Q += L * (5 * F), Q += M * (5 * R), Q += S * (5 * P), Q += C * (5 * p), Q += v * (5 * c), K += Q >>> 13, Q &= 8191;
          var ne = K;
          ne += f * c, ne += y * g, ne += w * b, ne += _ * (5 * x), ne += O * (5 * G), K = ne >>> 13, ne &= 8191, ne += L * (5 * B), ne += M * (5 * F), ne += S * (5 * R), ne += C * (5 * P), ne += v * (5 * p), K += ne >>> 13, ne &= 8191;
          var N = K;
          N += f * p, N += y * c, N += w * g, N += _ * b, N += O * (5 * x), K = N >>> 13, N &= 8191, N += L * (5 * G), N += M * (5 * B), N += S * (5 * F), N += C * (5 * R), N += v * (5 * P), K += N >>> 13, N &= 8191;
          var T = K;
          T += f * P, T += y * p, T += w * c, T += _ * g, T += O * b, K = T >>> 13, T &= 8191, T += L * (5 * x), T += M * (5 * G), T += S * (5 * B), T += C * (5 * F), T += v * (5 * R), K += T >>> 13, T &= 8191;
          var D = K;
          D += f * R, D += y * P, D += w * p, D += _ * c, D += O * g, K = D >>> 13, D &= 8191, D += L * b, D += M * (5 * x), D += S * (5 * G), D += C * (5 * B), D += v * (5 * F), K += D >>> 13, D &= 8191;
          var u = K;
          u += f * F, u += y * R, u += w * P, u += _ * p, u += O * c, K = u >>> 13, u &= 8191, u += L * g, u += M * b, u += S * (5 * x), u += C * (5 * G), u += v * (5 * B), K += u >>> 13, u &= 8191;
          var E = K;
          E += f * B, E += y * F, E += w * R, E += _ * P, E += O * p, K = E >>> 13, E &= 8191, E += L * c, E += M * g, E += S * b, E += C * (5 * x), E += v * (5 * G), K += E >>> 13, E &= 8191;
          var W = K;
          W += f * G, W += y * B, W += w * F, W += _ * R, W += O * P, K = W >>> 13, W &= 8191, W += L * p, W += M * c, W += S * g, W += C * b, W += v * (5 * x), K += W >>> 13, W &= 8191;
          var J = K;
          J += f * x, J += y * G, J += w * B, J += _ * F, J += O * R, K = J >>> 13, J &= 8191, J += L * P, J += M * p, J += S * c, J += C * g, J += v * b, K += J >>> 13, J &= 8191, K = (K << 2) + K | 0, K = K + se | 0, se = K & 8191, K = K >>> 13, Q += K, f = se, y = Q, w = ne, _ = N, O = T, L = D, M = u, S = E, C = W, v = J, h += 16, l -= 16;
        }
        this._h[0] = f, this._h[1] = y, this._h[2] = w, this._h[3] = _, this._h[4] = O, this._h[5] = L, this._h[6] = M, this._h[7] = S, this._h[8] = C, this._h[9] = v;
      }, a.prototype.finish = function(o, h) {
        h === void 0 && (h = 0);
        var l = new Uint16Array(10), d, f, y, w;
        if (this._leftover) {
          for (w = this._leftover, this._buffer[w++] = 1; w < 16; w++)
            this._buffer[w] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, w = 2; w < 10; w++)
          this._h[w] += d, d = this._h[w] >>> 13, this._h[w] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, l[0] = this._h[0] + 5, d = l[0] >>> 13, l[0] &= 8191, w = 1; w < 10; w++)
          l[w] = this._h[w] + d, d = l[w] >>> 13, l[w] &= 8191;
        for (l[9] -= 8192, f = (d ^ 1) - 1, w = 0; w < 10; w++)
          l[w] &= f;
        for (f = ~f, w = 0; w < 10; w++)
          this._h[w] = this._h[w] & f | l[w];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, w = 1; w < 8; w++)
          y = (this._h[w] + this._pad[w] | 0) + (y >>> 16) | 0, this._h[w] = y & 65535;
        return o[h + 0] = this._h[0] >>> 0, o[h + 1] = this._h[0] >>> 8, o[h + 2] = this._h[1] >>> 0, o[h + 3] = this._h[1] >>> 8, o[h + 4] = this._h[2] >>> 0, o[h + 5] = this._h[2] >>> 8, o[h + 6] = this._h[3] >>> 0, o[h + 7] = this._h[3] >>> 8, o[h + 8] = this._h[4] >>> 0, o[h + 9] = this._h[4] >>> 8, o[h + 10] = this._h[5] >>> 0, o[h + 11] = this._h[5] >>> 8, o[h + 12] = this._h[6] >>> 0, o[h + 13] = this._h[6] >>> 8, o[h + 14] = this._h[7] >>> 0, o[h + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
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
  t.Poly1305 = s;
  function i(a, o) {
    var h = new s(a);
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.oneTimeAuth = i;
  function n(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = n;
})(cu);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Gi, r = cu, s = Ut, i = le, n = Ar;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
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
        var w = new Uint8Array(16);
        w.set(l, w.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, w, _, 4);
        var O = d.length + this.tagLength, L;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = y;
        } else
          L = new Uint8Array(O);
        return e.streamXOR(this._key, w, d, L, 4), this._authenticate(L.subarray(L.length - this.tagLength, L.length), _, L.subarray(0, L.length - this.tagLength), f), s.wipe(w), L;
      }, h.prototype.open = function(l, d, f, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var w = new Uint8Array(16);
        w.set(l, w.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, w, _, 4);
        var O = new Uint8Array(this.tagLength);
        if (this._authenticate(O, _, d.subarray(0, d.length - this.tagLength), f), !n.equal(O, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var L = d.length - this.tagLength, M;
        if (y) {
          if (y.length !== L)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = y;
        } else
          M = new Uint8Array(L);
        return e.streamXOR(this._key, w, d.subarray(0, d.length - this.tagLength), M, 4), s.wipe(w), M;
      }, h.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, h.prototype._authenticate = function(l, d, f, y) {
        var w = new r.Poly1305(d);
        y && (w.update(y), y.length % 16 > 0 && w.update(a.subarray(y.length % 16))), w.update(f), f.length % 16 > 0 && w.update(a.subarray(f.length % 16));
        var _ = new Uint8Array(8);
        y && i.writeUint64LE(y.length, _), w.update(_), i.writeUint64LE(f.length, _), w.update(_);
        for (var O = w.digest(), L = 0; L < O.length; L++)
          l[L] = O[L];
        w.clean(), s.wipe(O), s.wipe(_);
      }, h;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(co);
var lu = {}, Xs = {}, uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
function Bp(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
uo.isSerializableHash = Bp;
Object.defineProperty(Xs, "__esModule", { value: !0 });
var rr = uo, Kp = Ar, Vp = Ut, hu = (
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
      this._outer.update(s), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Vp.wipe(s);
    }
    return t.prototype.reset = function() {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      rr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), rr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Xs.HMAC = hu;
function Wp(t, e, r) {
  var s = new hu(t, e);
  s.update(r);
  var i = s.digest();
  return s.clean(), i;
}
Xs.hmac = Wp;
Xs.equal = Kp.equal;
Object.defineProperty(lu, "__esModule", { value: !0 });
var xa = Xs, Da = Ut, Hp = (
  /** @class */
  function() {
    function t(e, r, s, i) {
      s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var n = xa.hmac(this._hash, s, r);
      this._hmac = new xa.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Da.wipe(this._buffer), Da.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Zp = lu.HKDF = Hp, Yi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ut;
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
          var l = this._bytesHashed, d = this._bufferLength, f = l / 536870912 | 0, y = l << 3, w = l % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var _ = d + 1; _ < w - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, w - 8), e.writeUint32BE(y, this._buffer, w - 4), n(this._temp, this._state, this._buffer, 0, w), this._finished = !0;
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
      for (var y = h[0], w = h[1], _ = h[2], O = h[3], L = h[4], M = h[5], S = h[6], C = h[7], v = 0; v < 16; v++) {
        var b = d + v * 4;
        o[v] = e.readUint32BE(l, b);
      }
      for (var v = 16; v < 64; v++) {
        var g = o[v - 2], c = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = o[v - 15];
        var p = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        o[v] = (c + o[v - 7] | 0) + (p + o[v - 16] | 0);
      }
      for (var v = 0; v < 64; v++) {
        var c = (((L >>> 6 | L << 26) ^ (L >>> 11 | L << 21) ^ (L >>> 25 | L << 7)) + (L & M ^ ~L & S) | 0) + (C + (i[v] + o[v] | 0) | 0) | 0, p = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & w ^ y & _ ^ w & _) | 0;
        C = S, S = M, M = L, L = O + c | 0, O = _, _ = w, w = y, y = c + p | 0;
      }
      h[0] += y, h[1] += w, h[2] += _, h[3] += O, h[4] += L, h[5] += M, h[6] += S, h[7] += C, d += 64, f -= 64;
    }
    return d;
  }
  function a(o) {
    var h = new s();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = a;
})(Yi);
var lo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = ms, r = Ut;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function s(v) {
    const b = new Float64Array(16);
    if (v)
      for (let g = 0; g < v.length; g++)
        b[g] = v[g];
    return b;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const n = s([56129, 1]);
  function a(v) {
    let b = 1;
    for (let g = 0; g < 16; g++) {
      let c = v[g] + b + 65535;
      b = Math.floor(c / 65536), v[g] = c - b * 65536;
    }
    v[0] += b - 1 + 37 * (b - 1);
  }
  function o(v, b, g) {
    const c = ~(g - 1);
    for (let p = 0; p < 16; p++) {
      const P = c & (v[p] ^ b[p]);
      v[p] ^= P, b[p] ^= P;
    }
  }
  function h(v, b) {
    const g = s(), c = s();
    for (let p = 0; p < 16; p++)
      c[p] = b[p];
    a(c), a(c), a(c);
    for (let p = 0; p < 2; p++) {
      g[0] = c[0] - 65517;
      for (let R = 1; R < 15; R++)
        g[R] = c[R] - 65535 - (g[R - 1] >> 16 & 1), g[R - 1] &= 65535;
      g[15] = c[15] - 32767 - (g[14] >> 16 & 1);
      const P = g[15] >> 16 & 1;
      g[14] &= 65535, o(c, g, 1 - P);
    }
    for (let p = 0; p < 16; p++)
      v[2 * p] = c[p] & 255, v[2 * p + 1] = c[p] >> 8;
  }
  function l(v, b) {
    for (let g = 0; g < 16; g++)
      v[g] = b[2 * g] + (b[2 * g + 1] << 8);
    v[15] &= 32767;
  }
  function d(v, b, g) {
    for (let c = 0; c < 16; c++)
      v[c] = b[c] + g[c];
  }
  function f(v, b, g) {
    for (let c = 0; c < 16; c++)
      v[c] = b[c] - g[c];
  }
  function y(v, b, g) {
    let c, p, P = 0, R = 0, F = 0, B = 0, G = 0, x = 0, A = 0, Z = 0, z = 0, $ = 0, k = 0, U = 0, q = 0, oe = 0, K = 0, se = 0, Q = 0, ne = 0, N = 0, T = 0, D = 0, u = 0, E = 0, W = 0, J = 0, we = 0, Ie = 0, _e = 0, Ne = 0, We = 0, qe = 0, xe = g[0], Ee = g[1], be = g[2], me = g[3], ye = g[4], pe = g[5], fe = g[6], ce = g[7], ve = g[8], Se = g[9], ue = g[10], Oe = g[11], Ce = g[12], Re = g[13], Pe = g[14], Ae = g[15];
    c = b[0], P += c * xe, R += c * Ee, F += c * be, B += c * me, G += c * ye, x += c * pe, A += c * fe, Z += c * ce, z += c * ve, $ += c * Se, k += c * ue, U += c * Oe, q += c * Ce, oe += c * Re, K += c * Pe, se += c * Ae, c = b[1], R += c * xe, F += c * Ee, B += c * be, G += c * me, x += c * ye, A += c * pe, Z += c * fe, z += c * ce, $ += c * ve, k += c * Se, U += c * ue, q += c * Oe, oe += c * Ce, K += c * Re, se += c * Pe, Q += c * Ae, c = b[2], F += c * xe, B += c * Ee, G += c * be, x += c * me, A += c * ye, Z += c * pe, z += c * fe, $ += c * ce, k += c * ve, U += c * Se, q += c * ue, oe += c * Oe, K += c * Ce, se += c * Re, Q += c * Pe, ne += c * Ae, c = b[3], B += c * xe, G += c * Ee, x += c * be, A += c * me, Z += c * ye, z += c * pe, $ += c * fe, k += c * ce, U += c * ve, q += c * Se, oe += c * ue, K += c * Oe, se += c * Ce, Q += c * Re, ne += c * Pe, N += c * Ae, c = b[4], G += c * xe, x += c * Ee, A += c * be, Z += c * me, z += c * ye, $ += c * pe, k += c * fe, U += c * ce, q += c * ve, oe += c * Se, K += c * ue, se += c * Oe, Q += c * Ce, ne += c * Re, N += c * Pe, T += c * Ae, c = b[5], x += c * xe, A += c * Ee, Z += c * be, z += c * me, $ += c * ye, k += c * pe, U += c * fe, q += c * ce, oe += c * ve, K += c * Se, se += c * ue, Q += c * Oe, ne += c * Ce, N += c * Re, T += c * Pe, D += c * Ae, c = b[6], A += c * xe, Z += c * Ee, z += c * be, $ += c * me, k += c * ye, U += c * pe, q += c * fe, oe += c * ce, K += c * ve, se += c * Se, Q += c * ue, ne += c * Oe, N += c * Ce, T += c * Re, D += c * Pe, u += c * Ae, c = b[7], Z += c * xe, z += c * Ee, $ += c * be, k += c * me, U += c * ye, q += c * pe, oe += c * fe, K += c * ce, se += c * ve, Q += c * Se, ne += c * ue, N += c * Oe, T += c * Ce, D += c * Re, u += c * Pe, E += c * Ae, c = b[8], z += c * xe, $ += c * Ee, k += c * be, U += c * me, q += c * ye, oe += c * pe, K += c * fe, se += c * ce, Q += c * ve, ne += c * Se, N += c * ue, T += c * Oe, D += c * Ce, u += c * Re, E += c * Pe, W += c * Ae, c = b[9], $ += c * xe, k += c * Ee, U += c * be, q += c * me, oe += c * ye, K += c * pe, se += c * fe, Q += c * ce, ne += c * ve, N += c * Se, T += c * ue, D += c * Oe, u += c * Ce, E += c * Re, W += c * Pe, J += c * Ae, c = b[10], k += c * xe, U += c * Ee, q += c * be, oe += c * me, K += c * ye, se += c * pe, Q += c * fe, ne += c * ce, N += c * ve, T += c * Se, D += c * ue, u += c * Oe, E += c * Ce, W += c * Re, J += c * Pe, we += c * Ae, c = b[11], U += c * xe, q += c * Ee, oe += c * be, K += c * me, se += c * ye, Q += c * pe, ne += c * fe, N += c * ce, T += c * ve, D += c * Se, u += c * ue, E += c * Oe, W += c * Ce, J += c * Re, we += c * Pe, Ie += c * Ae, c = b[12], q += c * xe, oe += c * Ee, K += c * be, se += c * me, Q += c * ye, ne += c * pe, N += c * fe, T += c * ce, D += c * ve, u += c * Se, E += c * ue, W += c * Oe, J += c * Ce, we += c * Re, Ie += c * Pe, _e += c * Ae, c = b[13], oe += c * xe, K += c * Ee, se += c * be, Q += c * me, ne += c * ye, N += c * pe, T += c * fe, D += c * ce, u += c * ve, E += c * Se, W += c * ue, J += c * Oe, we += c * Ce, Ie += c * Re, _e += c * Pe, Ne += c * Ae, c = b[14], K += c * xe, se += c * Ee, Q += c * be, ne += c * me, N += c * ye, T += c * pe, D += c * fe, u += c * ce, E += c * ve, W += c * Se, J += c * ue, we += c * Oe, Ie += c * Ce, _e += c * Re, Ne += c * Pe, We += c * Ae, c = b[15], se += c * xe, Q += c * Ee, ne += c * be, N += c * me, T += c * ye, D += c * pe, u += c * fe, E += c * ce, W += c * ve, J += c * Se, we += c * ue, Ie += c * Oe, _e += c * Ce, Ne += c * Re, We += c * Pe, qe += c * Ae, P += 38 * Q, R += 38 * ne, F += 38 * N, B += 38 * T, G += 38 * D, x += 38 * u, A += 38 * E, Z += 38 * W, z += 38 * J, $ += 38 * we, k += 38 * Ie, U += 38 * _e, q += 38 * Ne, oe += 38 * We, K += 38 * qe, p = 1, c = P + p + 65535, p = Math.floor(c / 65536), P = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = x + p + 65535, p = Math.floor(c / 65536), x = c - p * 65536, c = A + p + 65535, p = Math.floor(c / 65536), A = c - p * 65536, c = Z + p + 65535, p = Math.floor(c / 65536), Z = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = U + p + 65535, p = Math.floor(c / 65536), U = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = K + p + 65535, p = Math.floor(c / 65536), K = c - p * 65536, c = se + p + 65535, p = Math.floor(c / 65536), se = c - p * 65536, P += p - 1 + 37 * (p - 1), p = 1, c = P + p + 65535, p = Math.floor(c / 65536), P = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = x + p + 65535, p = Math.floor(c / 65536), x = c - p * 65536, c = A + p + 65535, p = Math.floor(c / 65536), A = c - p * 65536, c = Z + p + 65535, p = Math.floor(c / 65536), Z = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = U + p + 65535, p = Math.floor(c / 65536), U = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = K + p + 65535, p = Math.floor(c / 65536), K = c - p * 65536, c = se + p + 65535, p = Math.floor(c / 65536), se = c - p * 65536, P += p - 1 + 37 * (p - 1), v[0] = P, v[1] = R, v[2] = F, v[3] = B, v[4] = G, v[5] = x, v[6] = A, v[7] = Z, v[8] = z, v[9] = $, v[10] = k, v[11] = U, v[12] = q, v[13] = oe, v[14] = K, v[15] = se;
  }
  function w(v, b) {
    y(v, b, b);
  }
  function _(v, b) {
    const g = s();
    for (let c = 0; c < 16; c++)
      g[c] = b[c];
    for (let c = 253; c >= 0; c--)
      w(g, g), c !== 2 && c !== 4 && y(g, g, b);
    for (let c = 0; c < 16; c++)
      v[c] = g[c];
  }
  function O(v, b) {
    const g = new Uint8Array(32), c = new Float64Array(80), p = s(), P = s(), R = s(), F = s(), B = s(), G = s();
    for (let z = 0; z < 31; z++)
      g[z] = v[z];
    g[31] = v[31] & 127 | 64, g[0] &= 248, l(c, b);
    for (let z = 0; z < 16; z++)
      P[z] = c[z];
    p[0] = F[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = g[z >>> 3] >>> (z & 7) & 1;
      o(p, P, $), o(R, F, $), d(B, p, R), f(p, p, R), d(R, P, F), f(P, P, F), w(F, B), w(G, p), y(p, R, p), y(R, P, B), d(B, p, R), f(p, p, R), w(P, p), f(R, F, G), y(p, R, n), d(p, p, F), y(R, R, p), y(p, F, G), y(F, P, c), w(P, B), o(p, P, $), o(R, F, $);
    }
    for (let z = 0; z < 16; z++)
      c[z + 16] = p[z], c[z + 32] = R[z], c[z + 48] = P[z], c[z + 64] = F[z];
    const x = c.subarray(32), A = c.subarray(16);
    _(x, x), y(A, A, x);
    const Z = new Uint8Array(32);
    return h(Z, A), Z;
  }
  t.scalarMult = O;
  function L(v) {
    return O(v, i);
  }
  t.scalarMultBase = L;
  function M(v) {
    if (v.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const b = new Uint8Array(v);
    return {
      publicKey: L(b),
      secretKey: b
    };
  }
  t.generateKeyPairFromSeed = M;
  function S(v) {
    const b = (0, e.randomBytes)(32, v), g = M(b);
    return (0, r.wipe)(b), g;
  }
  t.generateKeyPair = S;
  function C(v, b, g = !1) {
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = O(v, b);
    if (g) {
      let p = 0;
      for (let P = 0; P < c.length; P++)
        p |= c[P];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  t.sharedKey = C;
})(lo);
var Ia = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var s = 0, i = e.length, n; s < i; s++)
      (n || !(s in e)) && (n || (n = Array.prototype.slice.call(e, 0, s)), n[s] = e[s]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Gp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, s) {
      this.name = e, this.version = r, this.os = s, this.type = "browser";
    }
    return t;
  }()
), Yp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Jp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, s, i) {
      this.name = e, this.version = r, this.os = s, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Xp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Qp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), eg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, tg = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Oa = 3, rg = [
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
  ["searchbot", eg]
], Ca = [
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
function sg(t) {
  return t ? Ta(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Qp() : typeof navigator < "u" ? Ta(navigator.userAgent) : og();
}
function ig(t) {
  return t !== "" && rg.reduce(function(e, r) {
    var s = r[0], i = r[1];
    if (e)
      return e;
    var n = i.exec(t);
    return !!n && [s, n];
  }, !1);
}
function Ta(t) {
  var e = ig(t);
  if (!e)
    return null;
  var r = e[0], s = e[1];
  if (r === "searchbot")
    return new Xp();
  var i = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Oa && (i = Ia(Ia([], i, !0), ag(Oa - i.length), !0)) : i = [];
  var n = i.join("."), a = ng(t), o = tg.exec(t);
  return o && o[1] ? new Jp(r, n, a, o[1]) : new Gp(r, n, a);
}
function ng(t) {
  for (var e = 0, r = Ca.length; e < r; e++) {
    var s = Ca[e], i = s[0], n = s[1], a = n.exec(t);
    if (a)
      return i;
  }
  return null;
}
function og() {
  var t = typeof process < "u" && process.version;
  return t ? new Yp(process.version.slice(1)) : null;
}
function ag(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.getLocalStorage = Fe.getLocalStorageOrThrow = Fe.getCrypto = Fe.getCryptoOrThrow = du = Fe.getLocation = Fe.getLocationOrThrow = fo = Fe.getNavigator = Fe.getNavigatorOrThrow = ho = Fe.getDocument = Fe.getDocumentOrThrow = Fe.getFromWindowOrThrow = Fe.getFromWindow = void 0;
function Qr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Fe.getFromWindow = Qr;
function vs(t) {
  const e = Qr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Fe.getFromWindowOrThrow = vs;
function cg() {
  return vs("document");
}
Fe.getDocumentOrThrow = cg;
function ug() {
  return Qr("document");
}
var ho = Fe.getDocument = ug;
function lg() {
  return vs("navigator");
}
Fe.getNavigatorOrThrow = lg;
function hg() {
  return Qr("navigator");
}
var fo = Fe.getNavigator = hg;
function dg() {
  return vs("location");
}
Fe.getLocationOrThrow = dg;
function fg() {
  return Qr("location");
}
var du = Fe.getLocation = fg;
function pg() {
  return vs("crypto");
}
Fe.getCryptoOrThrow = pg;
function gg() {
  return Qr("crypto");
}
Fe.getCrypto = gg;
function yg() {
  return vs("localStorage");
}
Fe.getLocalStorageOrThrow = yg;
function mg() {
  return Qr("localStorage");
}
Fe.getLocalStorage = mg;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
var fu = po.getWindowMetadata = void 0;
const Na = Fe;
function vg() {
  let t, e;
  try {
    t = Na.getDocumentOrThrow(), e = Na.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const f = t.getElementsByTagName("link"), y = [];
    for (let w = 0; w < f.length; w++) {
      const _ = f[w], O = _.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const L = _.getAttribute("href");
        if (L)
          if (L.toLowerCase().indexOf("https:") === -1 && L.toLowerCase().indexOf("http:") === -1 && L.indexOf("//") !== 0) {
            let M = e.protocol + "//" + e.host;
            if (L.indexOf("/") === 0)
              M += L;
            else {
              const S = e.pathname.split("/");
              S.pop();
              const C = S.join("/");
              M += C + "/" + L;
            }
            y.push(M);
          } else if (L.indexOf("//") === 0) {
            const M = e.protocol + L;
            y.push(M);
          } else
            y.push(L);
      }
    }
    return y;
  }
  function s(...f) {
    const y = t.getElementsByTagName("meta");
    for (let w = 0; w < y.length; w++) {
      const _ = y[w], O = ["itemprop", "property", "name"].map((L) => _.getAttribute(L)).filter((L) => L ? f.includes(L) : !1);
      if (O.length && O) {
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
  const a = i(), o = n(), h = e.origin, l = r();
  return {
    description: o,
    url: h,
    icons: l,
    name: a
  };
}
fu = po.getWindowMetadata = vg;
var Ms = {}, wg = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), pu = "%[a-f0-9]{2}", Aa = new RegExp("(" + pu + ")|([^%]+?)", "gi"), Ra = new RegExp("(" + pu + ")+", "gi");
function jn(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), s = t.slice(e);
  return Array.prototype.concat.call([], jn(r), jn(s));
}
function bg(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Aa) || [], r = 1; r < e.length; r++)
      t = jn(e, r).join(""), e = t.match(Aa) || [];
    return t;
  }
}
function _g(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Ra.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var s = bg(r[0]);
      s !== r[0] && (e[r[0]] = s);
    }
    r = Ra.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), n = 0; n < i.length; n++) {
    var a = i[n];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var Eg = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return _g(t);
  }
}, Sg = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, xg = function(t, e) {
  for (var r = {}, s = Object.keys(t), i = Array.isArray(e), n = 0; n < s.length; n++) {
    var a = s[n], o = t[a];
    (i ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = wg, r = Eg, s = Sg, i = xg, n = (S) => S == null, a = Symbol("encodeFragmentIdentifier");
  function o(S) {
    switch (S.arrayFormat) {
      case "index":
        return (C) => (v, b) => {
          const g = v.length;
          return b === void 0 || S.skipNull && b === null || S.skipEmptyString && b === "" ? v : b === null ? [...v, [d(C, S), "[", g, "]"].join("")] : [
            ...v,
            [d(C, S), "[", d(g, S), "]=", d(b, S)].join("")
          ];
        };
      case "bracket":
        return (C) => (v, b) => b === void 0 || S.skipNull && b === null || S.skipEmptyString && b === "" ? v : b === null ? [...v, [d(C, S), "[]"].join("")] : [...v, [d(C, S), "[]=", d(b, S)].join("")];
      case "colon-list-separator":
        return (C) => (v, b) => b === void 0 || S.skipNull && b === null || S.skipEmptyString && b === "" ? v : b === null ? [...v, [d(C, S), ":list="].join("")] : [...v, [d(C, S), ":list=", d(b, S)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const C = S.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (b, g) => g === void 0 || S.skipNull && g === null || S.skipEmptyString && g === "" ? b : (g = g === null ? "" : g, b.length === 0 ? [[d(v, S), C, d(g, S)].join("")] : [[b, d(g, S)].join(S.arrayFormatSeparator)]);
      }
      default:
        return (C) => (v, b) => b === void 0 || S.skipNull && b === null || S.skipEmptyString && b === "" ? v : b === null ? [...v, d(C, S)] : [...v, [d(C, S), "=", d(b, S)].join("")];
    }
  }
  function h(S) {
    let C;
    switch (S.arrayFormat) {
      case "index":
        return (v, b, g) => {
          if (C = /\[(\d*)\]$/.exec(v), v = v.replace(/\[\d*\]$/, ""), !C) {
            g[v] = b;
            return;
          }
          g[v] === void 0 && (g[v] = {}), g[v][C[1]] = b;
        };
      case "bracket":
        return (v, b, g) => {
          if (C = /(\[\])$/.exec(v), v = v.replace(/\[\]$/, ""), !C) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "colon-list-separator":
        return (v, b, g) => {
          if (C = /(:list)$/.exec(v), v = v.replace(/:list$/, ""), !C) {
            g[v] = b;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [b];
            return;
          }
          g[v] = [].concat(g[v], b);
        };
      case "comma":
      case "separator":
        return (v, b, g) => {
          const c = typeof b == "string" && b.includes(S.arrayFormatSeparator), p = typeof b == "string" && !c && f(b, S).includes(S.arrayFormatSeparator);
          b = p ? f(b, S) : b;
          const P = c || p ? b.split(S.arrayFormatSeparator).map((R) => f(R, S)) : b === null ? b : f(b, S);
          g[v] = P;
        };
      case "bracket-separator":
        return (v, b, g) => {
          const c = /(\[\])$/.test(v);
          if (v = v.replace(/\[\]$/, ""), !c) {
            g[v] = b && f(b, S);
            return;
          }
          const p = b === null ? [] : b.split(S.arrayFormatSeparator).map((P) => f(P, S));
          if (g[v] === void 0) {
            g[v] = p;
            return;
          }
          g[v] = [].concat(g[v], p);
        };
      default:
        return (v, b, g) => {
          if (g[v] === void 0) {
            g[v] = b;
            return;
          }
          g[v] = [].concat(g[v], b);
        };
    }
  }
  function l(S) {
    if (typeof S != "string" || S.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(S, C) {
    return C.encode ? C.strict ? e(S) : encodeURIComponent(S) : S;
  }
  function f(S, C) {
    return C.decode ? r(S) : S;
  }
  function y(S) {
    return Array.isArray(S) ? S.sort() : typeof S == "object" ? y(Object.keys(S)).sort((C, v) => Number(C) - Number(v)).map((C) => S[C]) : S;
  }
  function w(S) {
    const C = S.indexOf("#");
    return C !== -1 && (S = S.slice(0, C)), S;
  }
  function _(S) {
    let C = "";
    const v = S.indexOf("#");
    return v !== -1 && (C = S.slice(v)), C;
  }
  function O(S) {
    S = w(S);
    const C = S.indexOf("?");
    return C === -1 ? "" : S.slice(C + 1);
  }
  function L(S, C) {
    return C.parseNumbers && !Number.isNaN(Number(S)) && typeof S == "string" && S.trim() !== "" ? S = Number(S) : C.parseBooleans && S !== null && (S.toLowerCase() === "true" || S.toLowerCase() === "false") && (S = S.toLowerCase() === "true"), S;
  }
  function M(S, C) {
    C = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, C), l(C.arrayFormatSeparator);
    const v = h(C), b = /* @__PURE__ */ Object.create(null);
    if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
      return b;
    for (const g of S.split("&")) {
      if (g === "")
        continue;
      let [c, p] = s(C.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(C.arrayFormat) ? p : f(p, C), v(f(c, C), p, b);
    }
    for (const g of Object.keys(b)) {
      const c = b[g];
      if (typeof c == "object" && c !== null)
        for (const p of Object.keys(c))
          c[p] = L(c[p], C);
      else
        b[g] = L(c, C);
    }
    return C.sort === !1 ? b : (C.sort === !0 ? Object.keys(b).sort() : Object.keys(b).sort(C.sort)).reduce((g, c) => {
      const p = b[c];
      return p && typeof p == "object" && !Array.isArray(p) ? g[c] = y(p) : g[c] = p, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = O, t.parse = M, t.stringify = (S, C) => {
    if (!S)
      return "";
    C = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, C), l(C.arrayFormatSeparator);
    const v = (p) => C.skipNull && n(S[p]) || C.skipEmptyString && S[p] === "", b = o(C), g = {};
    for (const p of Object.keys(S))
      v(p) || (g[p] = S[p]);
    const c = Object.keys(g);
    return C.sort !== !1 && c.sort(C.sort), c.map((p) => {
      const P = S[p];
      return P === void 0 ? "" : P === null ? d(p, C) : Array.isArray(P) ? P.length === 0 && C.arrayFormat === "bracket-separator" ? d(p, C) + "[]" : P.reduce(b(p), []).join("&") : d(p, C) + "=" + d(P, C);
    }).filter((p) => p.length > 0).join("&");
  }, t.parseUrl = (S, C) => {
    C = Object.assign({
      decode: !0
    }, C);
    const [v, b] = s(S, "#");
    return Object.assign(
      {
        url: v.split("?")[0] || "",
        query: M(O(S), C)
      },
      C && C.parseFragmentIdentifier && b ? { fragmentIdentifier: f(b, C) } : {}
    );
  }, t.stringifyUrl = (S, C) => {
    C = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, C);
    const v = w(S.url).split("?")[0] || "", b = t.extract(S.url), g = t.parse(b, { sort: !1 }), c = Object.assign(g, S.query);
    let p = t.stringify(c, C);
    p && (p = `?${p}`);
    let P = _(S.url);
    return S.fragmentIdentifier && (P = `#${C[a] ? d(S.fragmentIdentifier, C) : S.fragmentIdentifier}`), `${v}${p}${P}`;
  }, t.pick = (S, C, v) => {
    v = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, v);
    const { url: b, query: g, fragmentIdentifier: c } = t.parseUrl(S, v);
    return t.stringifyUrl({
      url: b,
      query: i(g, C),
      fragmentIdentifier: c
    }, v);
  }, t.exclude = (S, C, v) => {
    const b = Array.isArray(C) ? (g) => !C.includes(g) : (g, c) => !C(g, c);
    return t.pick(S, b, v);
  };
})(Ms);
const Dg = {
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
function gu(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const yu = "base10", Ot = "base16", kn = "base64pad", go = "utf8", mu = 0, es = 1, Ig = 0, Pa = 1, zn = 12, yo = 32;
function Og() {
  const t = lo.generateKeyPair();
  return { privateKey: Ct(t.secretKey, Ot), publicKey: Ct(t.publicKey, Ot) };
}
function qn() {
  const t = ms.randomBytes(yo);
  return Ct(t, Ot);
}
function Cg(t, e) {
  const r = lo.sharedKey(Rt(t, Ot), Rt(e, Ot), !0), s = new Zp(Yi.SHA256, r).expand(yo);
  return Ct(s, Ot);
}
function Tg(t) {
  const e = Yi.hash(Rt(t, Ot));
  return Ct(e, Ot);
}
function ls(t) {
  const e = Yi.hash(Rt(t, go));
  return Ct(e, Ot);
}
function Ng(t) {
  return Rt(`${t}`, yu);
}
function Qs(t) {
  return Number(Ct(t, yu));
}
function Ag(t) {
  const e = Ng(typeof t.type < "u" ? t.type : mu);
  if (Qs(e) === es && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Rt(t.senderPublicKey, Ot) : void 0, s = typeof t.iv < "u" ? Rt(t.iv, Ot) : ms.randomBytes(zn), i = new co.ChaCha20Poly1305(Rt(t.symKey, Ot)).seal(s, Rt(t.message, go));
  return Pg({ type: e, sealed: i, iv: s, senderPublicKey: r });
}
function Rg(t) {
  const e = new co.ChaCha20Poly1305(Rt(t.symKey, Ot)), { sealed: r, iv: s } = Oi(t.encoded), i = e.open(s, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Ct(i, go);
}
function Pg(t) {
  if (Qs(t.type) === es) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ct(Un([t.type, t.senderPublicKey, t.iv, t.sealed]), kn);
  }
  return Ct(Un([t.type, t.iv, t.sealed]), kn);
}
function Oi(t) {
  const e = Rt(t, kn), r = e.slice(Ig, Pa), s = Pa;
  if (Qs(r) === es) {
    const o = s + yo, h = o + zn, l = e.slice(s, o), d = e.slice(o, h), f = e.slice(h);
    return { type: r, sealed: f, iv: d, senderPublicKey: l };
  }
  const i = s + zn, n = e.slice(s, i), a = e.slice(i);
  return { type: r, sealed: a, iv: n };
}
function Lg(t, e) {
  const r = Oi(t);
  return vu({ type: Qs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ct(r.senderPublicKey, Ot) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function vu(t) {
  const e = (t == null ? void 0 : t.type) || mu;
  if (e === es) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function La(t) {
  return t.type === es && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Fg = Object.defineProperty, Fa = Object.getOwnPropertySymbols, Mg = Object.prototype.hasOwnProperty, Ug = Object.prototype.propertyIsEnumerable, Ma = (t, e, r) => e in t ? Fg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ua = (t, e) => {
  for (var r in e || (e = {}))
    Mg.call(e, r) && Ma(t, r, e[r]);
  if (Fa)
    for (var r of Fa(e))
      Ug.call(e, r) && Ma(t, r, e[r]);
  return t;
};
const $g = "ReactNative", Mt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, jg = "js";
function mo() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ws() {
  return !ho() && !!fo() && navigator.product === $g;
}
function bs() {
  return !mo() && !!fo() && !!ho();
}
function ei() {
  return ws() ? Mt.reactNative : mo() ? Mt.node : bs() ? Mt.browser : Mt.unknown;
}
function kg() {
  var t;
  try {
    return ws() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function zg(t, e) {
  let r = Ms.parse(t);
  return r = Ua(Ua({}, r), e), t = Ms.stringify(r), t;
}
function qg() {
  return fu() || { name: "", description: "", url: "", icons: [""] };
}
function Bg() {
  if (ei() === Mt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: s } = global.Platform;
    return [r, s].join("-");
  }
  const t = sg();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Kg() {
  var t;
  const e = ei();
  return e === Mt.browser ? [e, ((t = du()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Vg(t, e, r) {
  const s = Bg(), i = Kg();
  return [[t, e].join("-"), [jg, r].join("-"), s, i].join("/");
}
function Wg({ protocol: t, version: e, relayUrl: r, sdkVersion: s, auth: i, projectId: n, useOnCloseEvent: a, bundleId: o }) {
  const h = r.split("?"), l = Vg(t, e, s), d = { auth: i, ua: l, projectId: n, useOnCloseEvent: a || void 0, origin: o || void 0 }, f = zg(h[1] || "", d);
  return h[0] + "?" + f;
}
function Vr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function wu(t) {
  return Object.fromEntries(t.entries());
}
function bu(t) {
  return new Map(Object.entries(t));
}
function ns(t = te.FIVE_MINUTES, e) {
  const r = te.toMiliseconds(t || te.FIVE_MINUTES);
  let s, i, n;
  return { resolve: (a) => {
    n && s && (clearTimeout(n), s(a));
  }, reject: (a) => {
    n && i && (clearTimeout(n), i(a));
  }, done: () => new Promise((a, o) => {
    n = setTimeout(() => {
      o(new Error(e));
    }, r), s = a, i = o;
  }) };
}
function Us(t, e, r) {
  return new Promise(async (s, i) => {
    const n = setTimeout(() => i(new Error(r)), e);
    try {
      const a = await t;
      s(a);
    } catch (a) {
      i(a);
    }
    clearTimeout(n);
  });
}
function _u(t, e) {
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
function Hg(t) {
  return _u("topic", t);
}
function Zg(t) {
  return _u("id", t);
}
function Eu(t) {
  const [e, r] = t.split(":"), s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    s.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    s.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return s;
}
function Ft(t, e) {
  return te.fromMiliseconds((e || Date.now()) + te.toMiliseconds(t));
}
function Sr(t) {
  return Date.now() >= te.toMiliseconds(t);
}
function He(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Gg({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let i = s == null ? void 0 : s.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const n = `${i}/wc?requestId=${t}&sessionTopic=${e}`, a = ei();
    a === Mt.browser ? n.startsWith("https://") ? window.open(n, "_blank", "noreferrer noopener") : window.open(n, "_self", "noreferrer noopener") : a === Mt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(n);
  } catch (s) {
    console.error(s);
  }
}
async function Yg(t, e) {
  try {
    return await t.getItem(e) || (bs() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const Jg = "irn";
function Bn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Jg };
}
function _i(t) {
  const e = Dg[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Xg = Object.defineProperty, Qg = Object.defineProperties, ey = Object.getOwnPropertyDescriptors, $a = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, ry = Object.prototype.propertyIsEnumerable, ja = (t, e, r) => e in t ? Xg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, sy = (t, e) => {
  for (var r in e || (e = {}))
    ty.call(e, r) && ja(t, r, e[r]);
  if ($a)
    for (var r of $a(e))
      ry.call(e, r) && ja(t, r, e[r]);
  return t;
}, iy = (t, e) => Qg(t, ey(e));
function ny(t, e = "-") {
  const r = {}, s = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(s)) {
      const n = i.replace(s, ""), a = t[i];
      r[n] = a;
    }
  }), r;
}
function ka(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, s = t.substring(0, e), i = t.substring(e + 1, r).split("@"), n = typeof r < "u" ? t.substring(r) : "", a = Ms.parse(n);
  return { protocol: s, topic: oy(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: ny(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function oy(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function ay(t, e = "-") {
  const r = "relay", s = {};
  return Object.keys(t).forEach((i) => {
    const n = r + e + i;
    t[i] && (s[n] = t[i]);
  }), s;
}
function cy(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + Ms.stringify(iy(sy({ symKey: t.symKey }, ay(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function _s(t) {
  const e = [];
  return t.forEach((r) => {
    const [s, i] = r.split(":");
    e.push(`${s}:${i}`);
  }), e;
}
function uy(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(..._s(r.accounts));
  }), e;
}
function ly(t, e) {
  const r = [];
  return Object.values(t).forEach((s) => {
    _s(s.accounts).includes(e) && r.push(...s.methods);
  }), r;
}
function hy(t, e) {
  const r = [];
  return Object.values(t).forEach((s) => {
    _s(s.accounts).includes(e) && r.push(...s.events);
  }), r;
}
const dy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, fy = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function H(t, e) {
  const { message: r, code: s } = fy[t];
  return { message: e ? `${r} ${e}` : r, code: s };
}
function ke(t, e) {
  const { message: r, code: s } = dy[t];
  return { message: e ? `${r} ${e}` : r, code: s };
}
function ti(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Ci(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function It(t) {
  return typeof t > "u";
}
function ht(t, e) {
  return e && It(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function vo(t, e) {
  return e && It(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function py(t, e) {
  const { requiredNamespaces: r } = e, s = Object.keys(t.namespaces), i = Object.keys(r);
  let n = !0;
  return Vr(i, s) ? (s.forEach((a) => {
    const { accounts: o, methods: h, events: l } = t.namespaces[a], d = _s(o), f = r[a];
    (!Vr(gu(a, f), d) || !Vr(f.methods, h) || !Vr(f.events, l)) && (n = !1);
  }), n) : !1;
}
function Ti(t) {
  return ht(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function gy(t) {
  if (ht(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Ti(r);
    }
  }
  return !1;
}
function yy(t) {
  if (ht(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function my(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function vy(t) {
  return t == null ? void 0 : t.topic;
}
function wy(t, e) {
  let r = null;
  return ht(t == null ? void 0 : t.publicKey, !1) || (r = H("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function za(t) {
  let e = !0;
  return ti(t) ? t.length && (e = t.every((r) => ht(r, !1))) : e = !1, e;
}
function by(t, e, r) {
  let s = null;
  return ti(e) && e.length ? e.forEach((i) => {
    s || Ti(i) || (s = ke("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Ti(t) || (s = ke("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function _y(t, e, r) {
  let s = null;
  return Object.entries(t).forEach(([i, n]) => {
    if (s)
      return;
    const a = by(i, gu(i, n), `${e} ${r}`);
    a && (s = a);
  }), s;
}
function Ey(t, e) {
  let r = null;
  return ti(t) ? t.forEach((s) => {
    r || gy(s) || (r = ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Sy(t, e) {
  let r = null;
  return Object.values(t).forEach((s) => {
    if (r)
      return;
    const i = Ey(s == null ? void 0 : s.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function xy(t, e) {
  let r = null;
  return za(t == null ? void 0 : t.methods) ? za(t == null ? void 0 : t.events) || (r = ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Su(t, e) {
  let r = null;
  return Object.values(t).forEach((s) => {
    if (r)
      return;
    const i = xy(s, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function Dy(t, e, r) {
  let s = null;
  if (t && Ci(t)) {
    const i = Su(t, e);
    i && (s = i);
    const n = _y(t, e, r);
    n && (s = n);
  } else
    s = H("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return s;
}
function mn(t, e) {
  let r = null;
  if (t && Ci(t)) {
    const s = Su(t, e);
    s && (r = s);
    const i = Sy(t, e);
    i && (r = i);
  } else
    r = H("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function xu(t) {
  return ht(t.protocol, !0);
}
function Iy(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && ti(t) && t.length && t.forEach((s) => {
    r = xu(s);
  }), r;
}
function Oy(t) {
  return typeof t == "number";
}
function At(t) {
  return typeof t < "u" && typeof t !== null;
}
function Cy(t) {
  return !(!t || typeof t != "object" || !t.code || !vo(t.code, !1) || !t.message || !ht(t.message, !1));
}
function Ty(t) {
  return !(It(t) || !ht(t.method, !1));
}
function Ny(t) {
  return !(It(t) || It(t.result) && It(t.error) || !vo(t.id, !1) || !ht(t.jsonrpc, !1));
}
function Ay(t) {
  return !(It(t) || !ht(t.name, !1));
}
function qa(t, e) {
  return !(!Ti(e) || !uy(t).includes(e));
}
function Ry(t, e, r) {
  return ht(r, !1) ? ly(t, e).includes(r) : !1;
}
function Py(t, e, r) {
  return ht(r, !1) ? hy(t, e).includes(r) : !1;
}
function Ba(t, e, r) {
  let s = null;
  const i = Ly(t), n = Fy(e), a = Object.keys(i), o = Object.keys(n), h = Ka(Object.keys(t)), l = Ka(Object.keys(e)), d = h.filter((f) => !l.includes(f));
  return d.length && (s = H("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Vr(a, o) || (s = H("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || s)
      return;
    const y = _s(e[f].accounts);
    y.includes(f) || (s = H("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${y.toString()}`));
  }), a.forEach((f) => {
    s || (Vr(i[f].methods, n[f].methods) ? Vr(i[f].events, n[f].events) || (s = H("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : s = H("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), s;
}
function Ly(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var s;
    r.includes(":") ? e[r] = t[r] : (s = t[r].chains) == null || s.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Ka(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Fy(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const s = _s(t[r].accounts);
      s == null || s.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((n) => n.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function My(t, e) {
  return vo(t, !1) && t <= e.max && t >= e.min;
}
function Va() {
  const t = ei();
  return new Promise((e) => {
    switch (t) {
      case Mt.browser:
        e(Uy());
        break;
      case Mt.reactNative:
        e($y());
        break;
      case Mt.node:
        e(jy());
        break;
      default:
        e(!0);
    }
  });
}
function Uy() {
  return bs() && (navigator == null ? void 0 : navigator.onLine);
}
async function $y() {
  if (ws() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function jy() {
  return !0;
}
function ky(t) {
  switch (ei()) {
    case Mt.browser:
      zy(t);
      break;
    case Mt.reactNative:
      qy(t);
      break;
  }
}
function zy(t) {
  !ws() && bs() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function qy(t) {
  ws() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const vn = {};
let yi = class {
  static get(e) {
    return vn[e];
  }
  static set(e, r) {
    vn[e] = r;
  }
  static delete(e) {
    delete vn[e];
  }
};
const By = "PARSE_ERROR", Ky = "INVALID_REQUEST", Vy = "METHOD_NOT_FOUND", Wy = "INVALID_PARAMS", Du = "INTERNAL_ERROR", wo = "SERVER_ERROR", Hy = [-32700, -32600, -32601, -32602, -32603], Ls = {
  [By]: { code: -32700, message: "Parse error" },
  [Ky]: { code: -32600, message: "Invalid Request" },
  [Vy]: { code: -32601, message: "Method not found" },
  [Wy]: { code: -32602, message: "Invalid params" },
  [Du]: { code: -32603, message: "Internal error" },
  [wo]: { code: -32e3, message: "Server error" }
}, Iu = wo;
function Zy(t) {
  return Hy.includes(t);
}
function Wa(t) {
  return Object.keys(Ls).includes(t) ? Ls[t] : Ls[Iu];
}
function Gy(t) {
  const e = Object.values(Ls).find((r) => r.code === t);
  return e || Ls[Iu];
}
function Yy(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Ou = {}, lr = {}, Ha;
function Jy() {
  if (Ha)
    return lr;
  Ha = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.isBrowserCryptoAvailable = lr.getSubtleCrypto = lr.getBrowerCrypto = void 0;
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
var hr = {}, Za;
function Xy() {
  if (Za)
    return hr;
  Za = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.isBrowser = hr.isNode = hr.isReactNative = void 0;
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
  e.__exportStar(Jy(), t), e.__exportStar(Xy(), t);
})(Ou);
function bo(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Cu(t = 6) {
  return BigInt(bo(t));
}
function hs(t, e, r) {
  return {
    id: r || bo(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function _o(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Eo(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Qy(e, r)
  };
}
function Qy(t, e) {
  return typeof t > "u" ? Wa(Du) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Wa(wo)), { message: t })), typeof e < "u" && (t.data = e), Zy(t.code) && (t = Gy(t.code)), t);
}
class em {
}
class tm extends em {
  constructor() {
    super();
  }
}
class rm extends tm {
  constructor(e) {
    super();
  }
}
const sm = "^wss?:";
function im(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function nm(t, e) {
  const r = im(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Ga(t) {
  return nm(t, sm);
}
function om(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Tu(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function So(t) {
  return Tu(t) && "method" in t;
}
function Ji(t) {
  return Tu(t) && (gr(t) || Vt(t));
}
function gr(t) {
  return "result" in t;
}
function Vt(t) {
  return "error" in t;
}
class am extends rm {
  constructor(e) {
    super(e), this.events = new Jt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(hs(e.method, e.params || [], e.id || Cu().toString()), r);
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
        Vt(n) ? i(n.error) : s(n.result);
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
    this.events.emit("payload", e), Ji(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const cm = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {try { return require("ws") } catch (e) { } })(), um = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ya = (t) => t.split("?")[0], Ja = 10, lm = cm();
class hm {
  constructor(e) {
    if (this.url = e, this.events = new Jt.EventEmitter(), this.registering = !1, !Ga(e))
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
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ys(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Ga(e))
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
      const i = new URLSearchParams(e).get("origin"), n = Ou.isReactNative() ? { headers: { origin: i } } : { rejectUnauthorized: !om(e) }, a = new lm(e, [], n);
      um() ? a.onerror = (o) => {
        const h = o;
        s(this.emitError(h.error));
      } : a.on("error", (o) => {
        s(this.emitError(o));
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
    const r = typeof e.data == "string" ? Ki(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const s = this.parseError(r), i = s.message || s.toString(), n = Eo(e, i);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return Yy(e, Ya(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ja && this.events.setMaxListeners(Ja);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Ya(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ni = { exports: {} };
Ni.exports;
(function(t, e) {
  var r = 200, s = "__lodash_hash_undefined__", i = 1, n = 2, a = 9007199254740991, o = "[object Arguments]", h = "[object Array]", l = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", y = "[object Error]", w = "[object Function]", _ = "[object GeneratorFunction]", O = "[object Map]", L = "[object Number]", M = "[object Null]", S = "[object Object]", C = "[object Promise]", v = "[object Proxy]", b = "[object RegExp]", g = "[object Set]", c = "[object String]", p = "[object Symbol]", P = "[object Undefined]", R = "[object WeakMap]", F = "[object ArrayBuffer]", B = "[object DataView]", G = "[object Float32Array]", x = "[object Float64Array]", A = "[object Int8Array]", Z = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", k = "[object Uint8ClampedArray]", U = "[object Uint16Array]", q = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, se = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[G] = Q[x] = Q[A] = Q[Z] = Q[z] = Q[$] = Q[k] = Q[U] = Q[q] = !0, Q[o] = Q[h] = Q[F] = Q[d] = Q[B] = Q[f] = Q[y] = Q[w] = Q[O] = Q[L] = Q[S] = Q[b] = Q[g] = Q[c] = Q[R] = !1;
  var ne = typeof ir == "object" && ir && ir.Object === Object && ir, N = typeof self == "object" && self && self.Object === Object && self, T = ne || N || Function("return this")(), D = e && !e.nodeType && e, u = D && !0 && t && !t.nodeType && t, E = u && u.exports === D, W = E && ne.process, J = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), we = J && J.isTypedArray;
  function Ie(m, I) {
    for (var j = -1, ee = m == null ? 0 : m.length, Me = 0, he = []; ++j < ee; ) {
      var Ve = m[j];
      I(Ve, j, m) && (he[Me++] = Ve);
    }
    return he;
  }
  function _e(m, I) {
    for (var j = -1, ee = I.length, Me = m.length; ++j < ee; )
      m[Me + j] = I[j];
    return m;
  }
  function Ne(m, I) {
    for (var j = -1, ee = m == null ? 0 : m.length; ++j < ee; )
      if (I(m[j], j, m))
        return !0;
    return !1;
  }
  function We(m, I) {
    for (var j = -1, ee = Array(m); ++j < m; )
      ee[j] = I(j);
    return ee;
  }
  function qe(m) {
    return function(I) {
      return m(I);
    };
  }
  function xe(m, I) {
    return m.has(I);
  }
  function Ee(m, I) {
    return m == null ? void 0 : m[I];
  }
  function be(m) {
    var I = -1, j = Array(m.size);
    return m.forEach(function(ee, Me) {
      j[++I] = [Me, ee];
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
  var pe = Array.prototype, fe = Function.prototype, ce = Object.prototype, ve = T["__core-js_shared__"], Se = fe.toString, ue = ce.hasOwnProperty, Oe = function() {
    var m = /[^.]+$/.exec(ve && ve.keys && ve.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), Ce = ce.toString, Re = RegExp(
    "^" + Se.call(ue).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = E ? T.Buffer : void 0, Ae = T.Symbol, qt = T.Uint8Array, Qt = ce.propertyIsEnumerable, vr = pe.splice, Pt = Ae ? Ae.toStringTag : void 0, Pr = Object.getOwnPropertySymbols, Es = Pe ? Pe.isBuffer : void 0, ii = me(Object.keys, Object), Ze = ts(T, "DataView"), Be = ts(T, "Map"), Ge = ts(T, "Promise"), Ye = ts(T, "Set"), Je = ts(T, "WeakMap"), Ke = ts(Object, "create"), et = Fr(Ze), tt = Fr(Be), rt = Fr(Ge), st = Fr(Ye), it = Fr(Je), Qe = Ae ? Ae.prototype : void 0, Xe = Qe ? Qe.valueOf : void 0;
  function Ue(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function nt() {
    this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
  }
  function ot(m) {
    var I = this.has(m) && delete this.__data__[m];
    return this.size -= I ? 1 : 0, I;
  }
  function al(m) {
    var I = this.__data__;
    if (Ke) {
      var j = I[m];
      return j === s ? void 0 : j;
    }
    return ue.call(I, m) ? I[m] : void 0;
  }
  function cl(m) {
    var I = this.__data__;
    return Ke ? I[m] !== void 0 : ue.call(I, m);
  }
  function ul(m, I) {
    var j = this.__data__;
    return this.size += this.has(m) ? 0 : 1, j[m] = Ke && I === void 0 ? s : I, this;
  }
  Ue.prototype.clear = nt, Ue.prototype.delete = ot, Ue.prototype.get = al, Ue.prototype.has = cl, Ue.prototype.set = ul;
  function cr(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function ll() {
    this.__data__ = [], this.size = 0;
  }
  function hl(m) {
    var I = this.__data__, j = oi(I, m);
    if (j < 0)
      return !1;
    var ee = I.length - 1;
    return j == ee ? I.pop() : vr.call(I, j, 1), --this.size, !0;
  }
  function dl(m) {
    var I = this.__data__, j = oi(I, m);
    return j < 0 ? void 0 : I[j][1];
  }
  function fl(m) {
    return oi(this.__data__, m) > -1;
  }
  function pl(m, I) {
    var j = this.__data__, ee = oi(j, m);
    return ee < 0 ? (++this.size, j.push([m, I])) : j[ee][1] = I, this;
  }
  cr.prototype.clear = ll, cr.prototype.delete = hl, cr.prototype.get = dl, cr.prototype.has = fl, cr.prototype.set = pl;
  function Lr(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function gl() {
    this.size = 0, this.__data__ = {
      hash: new Ue(),
      map: new (Be || cr)(),
      string: new Ue()
    };
  }
  function yl(m) {
    var I = ai(this, m).delete(m);
    return this.size -= I ? 1 : 0, I;
  }
  function ml(m) {
    return ai(this, m).get(m);
  }
  function vl(m) {
    return ai(this, m).has(m);
  }
  function wl(m, I) {
    var j = ai(this, m), ee = j.size;
    return j.set(m, I), this.size += j.size == ee ? 0 : 1, this;
  }
  Lr.prototype.clear = gl, Lr.prototype.delete = yl, Lr.prototype.get = ml, Lr.prototype.has = vl, Lr.prototype.set = wl;
  function ni(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.__data__ = new Lr(); ++I < j; )
      this.add(m[I]);
  }
  function bl(m) {
    return this.__data__.set(m, s), this;
  }
  function _l(m) {
    return this.__data__.has(m);
  }
  ni.prototype.add = ni.prototype.push = bl, ni.prototype.has = _l;
  function wr(m) {
    var I = this.__data__ = new cr(m);
    this.size = I.size;
  }
  function El() {
    this.__data__ = new cr(), this.size = 0;
  }
  function Sl(m) {
    var I = this.__data__, j = I.delete(m);
    return this.size = I.size, j;
  }
  function xl(m) {
    return this.__data__.get(m);
  }
  function Dl(m) {
    return this.__data__.has(m);
  }
  function Il(m, I) {
    var j = this.__data__;
    if (j instanceof cr) {
      var ee = j.__data__;
      if (!Be || ee.length < r - 1)
        return ee.push([m, I]), this.size = ++j.size, this;
      j = this.__data__ = new Lr(ee);
    }
    return j.set(m, I), this.size = j.size, this;
  }
  wr.prototype.clear = El, wr.prototype.delete = Sl, wr.prototype.get = xl, wr.prototype.has = Dl, wr.prototype.set = Il;
  function Ol(m, I) {
    var j = ci(m), ee = !j && ql(m), Me = !j && !ee && rn(m), he = !j && !ee && !Me && Uo(m), Ve = j || ee || Me || he, at = Ve ? We(m.length, String) : [], dt = at.length;
    for (var je in m)
      (I || ue.call(m, je)) && !(Ve && // Safari 9 has enumerable `arguments.length` in strict mode.
      (je == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Me && (je == "offset" || je == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (je == "buffer" || je == "byteLength" || je == "byteOffset") || // Skip index properties.
      Ul(je, dt))) && at.push(je);
    return at;
  }
  function oi(m, I) {
    for (var j = m.length; j--; )
      if (Po(m[j][0], I))
        return j;
    return -1;
  }
  function Cl(m, I, j) {
    var ee = I(m);
    return ci(m) ? ee : _e(ee, j(m));
  }
  function Ss(m) {
    return m == null ? m === void 0 ? P : M : Pt && Pt in Object(m) ? Fl(m) : zl(m);
  }
  function To(m) {
    return xs(m) && Ss(m) == o;
  }
  function No(m, I, j, ee, Me) {
    return m === I ? !0 : m == null || I == null || !xs(m) && !xs(I) ? m !== m && I !== I : Tl(m, I, j, ee, No, Me);
  }
  function Tl(m, I, j, ee, Me, he) {
    var Ve = ci(m), at = ci(I), dt = Ve ? h : br(m), je = at ? h : br(I);
    dt = dt == o ? S : dt, je = je == o ? S : je;
    var Lt = dt == S, Bt = je == S, gt = dt == je;
    if (gt && rn(m)) {
      if (!rn(I))
        return !1;
      Ve = !0, Lt = !1;
    }
    if (gt && !Lt)
      return he || (he = new wr()), Ve || Uo(m) ? Ao(m, I, j, ee, Me, he) : Pl(m, I, dt, j, ee, Me, he);
    if (!(j & i)) {
      var $t = Lt && ue.call(m, "__wrapped__"), jt = Bt && ue.call(I, "__wrapped__");
      if ($t || jt) {
        var _r = $t ? m.value() : m, ur = jt ? I.value() : I;
        return he || (he = new wr()), Me(_r, ur, j, ee, he);
      }
    }
    return gt ? (he || (he = new wr()), Ll(m, I, j, ee, Me, he)) : !1;
  }
  function Nl(m) {
    if (!Mo(m) || jl(m))
      return !1;
    var I = Lo(m) ? Re : K;
    return I.test(Fr(m));
  }
  function Al(m) {
    return xs(m) && Fo(m.length) && !!Q[Ss(m)];
  }
  function Rl(m) {
    if (!kl(m))
      return ii(m);
    var I = [];
    for (var j in Object(m))
      ue.call(m, j) && j != "constructor" && I.push(j);
    return I;
  }
  function Ao(m, I, j, ee, Me, he) {
    var Ve = j & i, at = m.length, dt = I.length;
    if (at != dt && !(Ve && dt > at))
      return !1;
    var je = he.get(m);
    if (je && he.get(I))
      return je == I;
    var Lt = -1, Bt = !0, gt = j & n ? new ni() : void 0;
    for (he.set(m, I), he.set(I, m); ++Lt < at; ) {
      var $t = m[Lt], jt = I[Lt];
      if (ee)
        var _r = Ve ? ee(jt, $t, Lt, I, m, he) : ee($t, jt, Lt, m, I, he);
      if (_r !== void 0) {
        if (_r)
          continue;
        Bt = !1;
        break;
      }
      if (gt) {
        if (!Ne(I, function(ur, Mr) {
          if (!xe(gt, Mr) && ($t === ur || Me($t, ur, j, ee, he)))
            return gt.push(Mr);
        })) {
          Bt = !1;
          break;
        }
      } else if (!($t === jt || Me($t, jt, j, ee, he))) {
        Bt = !1;
        break;
      }
    }
    return he.delete(m), he.delete(I), Bt;
  }
  function Pl(m, I, j, ee, Me, he, Ve) {
    switch (j) {
      case B:
        if (m.byteLength != I.byteLength || m.byteOffset != I.byteOffset)
          return !1;
        m = m.buffer, I = I.buffer;
      case F:
        return !(m.byteLength != I.byteLength || !he(new qt(m), new qt(I)));
      case d:
      case f:
      case L:
        return Po(+m, +I);
      case y:
        return m.name == I.name && m.message == I.message;
      case b:
      case c:
        return m == I + "";
      case O:
        var at = be;
      case g:
        var dt = ee & i;
        if (at || (at = ye), m.size != I.size && !dt)
          return !1;
        var je = Ve.get(m);
        if (je)
          return je == I;
        ee |= n, Ve.set(m, I);
        var Lt = Ao(at(m), at(I), ee, Me, he, Ve);
        return Ve.delete(m), Lt;
      case p:
        if (Xe)
          return Xe.call(m) == Xe.call(I);
    }
    return !1;
  }
  function Ll(m, I, j, ee, Me, he) {
    var Ve = j & i, at = Ro(m), dt = at.length, je = Ro(I), Lt = je.length;
    if (dt != Lt && !Ve)
      return !1;
    for (var Bt = dt; Bt--; ) {
      var gt = at[Bt];
      if (!(Ve ? gt in I : ue.call(I, gt)))
        return !1;
    }
    var $t = he.get(m);
    if ($t && he.get(I))
      return $t == I;
    var jt = !0;
    he.set(m, I), he.set(I, m);
    for (var _r = Ve; ++Bt < dt; ) {
      gt = at[Bt];
      var ur = m[gt], Mr = I[gt];
      if (ee)
        var $o = Ve ? ee(Mr, ur, gt, I, m, he) : ee(ur, Mr, gt, m, I, he);
      if (!($o === void 0 ? ur === Mr || Me(ur, Mr, j, ee, he) : $o)) {
        jt = !1;
        break;
      }
      _r || (_r = gt == "constructor");
    }
    if (jt && !_r) {
      var ui = m.constructor, li = I.constructor;
      ui != li && "constructor" in m && "constructor" in I && !(typeof ui == "function" && ui instanceof ui && typeof li == "function" && li instanceof li) && (jt = !1);
    }
    return he.delete(m), he.delete(I), jt;
  }
  function Ro(m) {
    return Cl(m, Vl, Ml);
  }
  function ai(m, I) {
    var j = m.__data__;
    return $l(I) ? j[typeof I == "string" ? "string" : "hash"] : j.map;
  }
  function ts(m, I) {
    var j = Ee(m, I);
    return Nl(j) ? j : void 0;
  }
  function Fl(m) {
    var I = ue.call(m, Pt), j = m[Pt];
    try {
      m[Pt] = void 0;
      var ee = !0;
    } catch {
    }
    var Me = Ce.call(m);
    return ee && (I ? m[Pt] = j : delete m[Pt]), Me;
  }
  var Ml = Pr ? function(m) {
    return m == null ? [] : (m = Object(m), Ie(Pr(m), function(I) {
      return Qt.call(m, I);
    }));
  } : Wl, br = Ss;
  (Ze && br(new Ze(new ArrayBuffer(1))) != B || Be && br(new Be()) != O || Ge && br(Ge.resolve()) != C || Ye && br(new Ye()) != g || Je && br(new Je()) != R) && (br = function(m) {
    var I = Ss(m), j = I == S ? m.constructor : void 0, ee = j ? Fr(j) : "";
    if (ee)
      switch (ee) {
        case et:
          return B;
        case tt:
          return O;
        case rt:
          return C;
        case st:
          return g;
        case it:
          return R;
      }
    return I;
  });
  function Ul(m, I) {
    return I = I ?? a, !!I && (typeof m == "number" || se.test(m)) && m > -1 && m % 1 == 0 && m < I;
  }
  function $l(m) {
    var I = typeof m;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? m !== "__proto__" : m === null;
  }
  function jl(m) {
    return !!Oe && Oe in m;
  }
  function kl(m) {
    var I = m && m.constructor, j = typeof I == "function" && I.prototype || ce;
    return m === j;
  }
  function zl(m) {
    return Ce.call(m);
  }
  function Fr(m) {
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
  function Po(m, I) {
    return m === I || m !== m && I !== I;
  }
  var ql = To(/* @__PURE__ */ function() {
    return arguments;
  }()) ? To : function(m) {
    return xs(m) && ue.call(m, "callee") && !Qt.call(m, "callee");
  }, ci = Array.isArray;
  function Bl(m) {
    return m != null && Fo(m.length) && !Lo(m);
  }
  var rn = Es || Hl;
  function Kl(m, I) {
    return No(m, I);
  }
  function Lo(m) {
    if (!Mo(m))
      return !1;
    var I = Ss(m);
    return I == w || I == _ || I == l || I == v;
  }
  function Fo(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= a;
  }
  function Mo(m) {
    var I = typeof m;
    return m != null && (I == "object" || I == "function");
  }
  function xs(m) {
    return m != null && typeof m == "object";
  }
  var Uo = we ? qe(we) : Al;
  function Vl(m) {
    return Bl(m) ? Ol(m) : Rl(m);
  }
  function Wl() {
    return [];
  }
  function Hl() {
    return !1;
  }
  t.exports = Kl;
})(Ni, Ni.exports);
var dm = Ni.exports;
const fm = /* @__PURE__ */ zi(dm);
function pm(t, e) {
  return e = e || {}, new Promise(function(r, s) {
    var i = new XMLHttpRequest(), n = [], a = [], o = {}, h = function() {
      return { ok: (i.status / 100 | 0) == 2, statusText: i.statusText, status: i.status, url: i.responseURL, text: function() {
        return Promise.resolve(i.responseText);
      }, json: function() {
        return Promise.resolve(i.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([i.response]));
      }, clone: h, headers: { keys: function() {
        return n;
      }, entries: function() {
        return a;
      }, get: function(d) {
        return o[d.toLowerCase()];
      }, has: function(d) {
        return d.toLowerCase() in o;
      } } };
    };
    for (var l in i.open(e.method || "get", t, !0), i.onload = function() {
      i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(d, f, y) {
        n.push(f = f.toLowerCase()), a.push([f, y]), o[f] = o[f] ? o[f] + "," + y : y;
      }), r(h());
    }, i.onerror = s, i.withCredentials = e.credentials == "include", e.headers)
      i.setRequestHeader(l, e.headers[l]);
    i.send(e.body || null);
  });
}
const gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" })), Xa = /* @__PURE__ */ qi(gm);
var ym = fetch || (self.fetch = Xa.default || Xa);
const mm = /* @__PURE__ */ zi(ym);
function vm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), a = n.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, h = t.charAt(0), l = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var O = 0, L = 0, M = 0, S = _.length; M !== S && _[M] === 0; )
      M++, O++;
    for (var C = (S - M) * d + 1 >>> 0, v = new Uint8Array(C); M !== S; ) {
      for (var b = _[M], g = 0, c = C - 1; (b !== 0 || g < L) && c !== -1; c--, g++)
        b += 256 * v[c] >>> 0, v[c] = b % o >>> 0, b = b / o >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      L = g, M++;
    }
    for (var p = C - L; p !== C && v[p] === 0; )
      p++;
    for (var P = h.repeat(O); p < C; ++p)
      P += t.charAt(v[p]);
    return P;
  }
  function y(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var O = 0;
    if (_[O] !== " ") {
      for (var L = 0, M = 0; _[O] === h; )
        L++, O++;
      for (var S = (_.length - O) * l + 1 >>> 0, C = new Uint8Array(S); _[O]; ) {
        var v = r[_.charCodeAt(O)];
        if (v === 255)
          return;
        for (var b = 0, g = S - 1; (v !== 0 || b < M) && g !== -1; g--, b++)
          v += o * C[g] >>> 0, C[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        M = b, O++;
      }
      if (_[O] !== " ") {
        for (var c = S - M; c !== S && C[c] === 0; )
          c++;
        for (var p = new Uint8Array(L + (S - c)), P = L; c !== S; )
          p[P++] = C[c++];
        return p;
      }
    }
  }
  function w(_) {
    var O = y(_);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: y, decode: w };
}
var wm = vm, bm = wm;
const Nu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, _m = (t) => new TextEncoder().encode(t), Em = (t) => new TextDecoder().decode(t);
class Sm {
  constructor(e, r, s) {
    this.name = e, this.prefix = r, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class xm {
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
    return Au(this, e);
  }
}
class Dm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Au(this, e);
  }
  decode(e) {
    const r = e[0], s = this.decoders[r];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Au = (t, e) => new Dm({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Im {
  constructor(e, r, s, i) {
    this.name = e, this.prefix = r, this.baseEncode = s, this.baseDecode = i, this.encoder = new Sm(e, r, s), this.decoder = new xm(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Xi = ({ name: t, prefix: e, encode: r, decode: s }) => new Im(t, e, r, s), ri = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: s, decode: i } = bm(r, e);
  return Xi({ prefix: t, name: e, encode: s, decode: (n) => Nu(i(n)) });
}, Om = (t, e, r, s) => {
  const i = {};
  for (let d = 0; d < e.length; ++d)
    i[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const a = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = i[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${s} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Cm = (t, e, r) => {
  const s = e[e.length - 1] === "=", i = (1 << r) - 1;
  let n = "", a = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], a += 8; a > r; )
      a -= r, n += e[i & o >> a];
  if (a && (n += e[i & o << r - a]), s)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: s }) => Xi({ prefix: e, name: t, encode(i) {
  return Cm(i, s, r);
}, decode(i) {
  return Om(i, s, r, t);
} }), Tm = Xi({ prefix: "\0", name: "identity", encode: (t) => Em(t), decode: (t) => _m(t) });
var Nm = Object.freeze({ __proto__: null, identity: Tm });
const Am = pt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Rm = Object.freeze({ __proto__: null, base2: Am });
const Pm = pt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Lm = Object.freeze({ __proto__: null, base8: Pm });
const Fm = ri({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Mm = Object.freeze({ __proto__: null, base10: Fm });
const Um = pt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), $m = pt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var jm = Object.freeze({ __proto__: null, base16: Um, base16upper: $m });
const km = pt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), zm = pt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), qm = pt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Bm = pt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Km = pt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Vm = pt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Wm = pt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Hm = pt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Zm = pt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Gm = Object.freeze({ __proto__: null, base32: km, base32upper: zm, base32pad: qm, base32padupper: Bm, base32hex: Km, base32hexupper: Vm, base32hexpad: Wm, base32hexpadupper: Hm, base32z: Zm });
const Ym = ri({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Jm = ri({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Xm = Object.freeze({ __proto__: null, base36: Ym, base36upper: Jm });
const Qm = ri({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), e0 = ri({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var t0 = Object.freeze({ __proto__: null, base58btc: Qm, base58flickr: e0 });
const r0 = pt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), s0 = pt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), i0 = pt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), n0 = pt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var o0 = Object.freeze({ __proto__: null, base64: r0, base64pad: s0, base64url: i0, base64urlpad: n0 });
const Ru = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), a0 = Ru.reduce((t, e, r) => (t[r] = e, t), []), c0 = Ru.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function u0(t) {
  return t.reduce((e, r) => (e += a0[r], e), "");
}
function l0(t) {
  const e = [];
  for (const r of t) {
    const s = c0[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const h0 = Xi({ prefix: "🚀", name: "base256emoji", encode: u0, decode: l0 });
var d0 = Object.freeze({ __proto__: null, base256emoji: h0 }), f0 = Pu, Qa = 128, p0 = 127, g0 = ~p0, y0 = Math.pow(2, 31);
function Pu(t, e, r) {
  e = e || [], r = r || 0;
  for (var s = r; t >= y0; )
    e[r++] = t & 255 | Qa, t /= 128;
  for (; t & g0; )
    e[r++] = t & 255 | Qa, t >>>= 7;
  return e[r] = t | 0, Pu.bytes = r - s + 1, e;
}
var m0 = Kn, v0 = 128, ec = 127;
function Kn(t, s) {
  var r = 0, s = s || 0, i = 0, n = s, a, o = t.length;
  do {
    if (n >= o)
      throw Kn.bytes = 0, new RangeError("Could not decode varint");
    a = t[n++], r += i < 28 ? (a & ec) << i : (a & ec) * Math.pow(2, i), i += 7;
  } while (a >= v0);
  return Kn.bytes = n - s, r;
}
var w0 = Math.pow(2, 7), b0 = Math.pow(2, 14), _0 = Math.pow(2, 21), E0 = Math.pow(2, 28), S0 = Math.pow(2, 35), x0 = Math.pow(2, 42), D0 = Math.pow(2, 49), I0 = Math.pow(2, 56), O0 = Math.pow(2, 63), C0 = function(t) {
  return t < w0 ? 1 : t < b0 ? 2 : t < _0 ? 3 : t < E0 ? 4 : t < S0 ? 5 : t < x0 ? 6 : t < D0 ? 7 : t < I0 ? 8 : t < O0 ? 9 : 10;
}, T0 = { encode: f0, decode: m0, encodingLength: C0 }, Lu = T0;
const tc = (t, e, r = 0) => (Lu.encode(t, e, r), e), rc = (t) => Lu.encodingLength(t), Vn = (t, e) => {
  const r = e.byteLength, s = rc(t), i = s + rc(r), n = new Uint8Array(i + r);
  return tc(t, n, 0), tc(r, n, s), n.set(e, i), new N0(t, r, e, n);
};
class N0 {
  constructor(e, r, s, i) {
    this.code = e, this.size = r, this.digest = s, this.bytes = i;
  }
}
const Fu = ({ name: t, code: e, encode: r }) => new A0(t, e, r);
class A0 {
  constructor(e, r, s) {
    this.name = e, this.code = r, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Vn(this.code, r) : r.then((s) => Vn(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Mu = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), R0 = Fu({ name: "sha2-256", code: 18, encode: Mu("SHA-256") }), P0 = Fu({ name: "sha2-512", code: 19, encode: Mu("SHA-512") });
var L0 = Object.freeze({ __proto__: null, sha256: R0, sha512: P0 });
const Uu = 0, F0 = "identity", $u = Nu, M0 = (t) => Vn(Uu, $u(t)), U0 = { code: Uu, name: F0, encode: $u, digest: M0 };
var $0 = Object.freeze({ __proto__: null, identity: U0 });
new TextEncoder(), new TextDecoder();
const sc = { ...Nm, ...Rm, ...Lm, ...Mm, ...jm, ...Gm, ...Xm, ...t0, ...o0, ...d0 };
({ ...L0, ...$0 });
function ju(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function j0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ju(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function ku(t, e, r, s) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: s } };
}
const ic = ku("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), wn = ku("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = j0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), k0 = { utf8: ic, "utf-8": ic, hex: sc.base16, latin1: wn, ascii: wn, binary: wn, ...sc };
function z0(t, e = "utf8") {
  const r = k0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ju(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const zu = "wc", q0 = 2, xo = "core", Ir = `${zu}@2:${xo}:`, B0 = { name: xo, logger: "error" }, K0 = { database: ":memory:" }, V0 = "crypto", nc = "client_ed25519_seed", W0 = te.ONE_DAY, H0 = "keychain", Z0 = "0.3", G0 = "messages", Y0 = "0.3", J0 = te.SIX_HOURS, X0 = "publisher", qu = "irn", Q0 = "error", Bu = "wss://relay.walletconnect.com", oc = "wss://relay.walletconnect.org", ev = "relayer", _t = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, tv = "_subscription", dr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, rv = te.ONE_SECOND, sv = "2.11.2", iv = 1e4, nv = "0.3", ov = "WALLETCONNECT_CLIENT_ID", Kt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, av = "subscription", cv = "0.3", uv = te.FIVE_SECONDS * 1e3, lv = "pairing", hv = "0.3", Ns = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, Rs = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, sr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, dv = "history", fv = "0.3", pv = "expirer", kt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, gv = "0.3", bn = "verify-api", cs = "https://verify.walletconnect.com", Wn = "https://verify.walletconnect.org", yv = [cs, Wn], mv = "echo", vv = "https://echo.walletconnect.com";
class wv {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = H0, this.version = Z0, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
        const { message: n } = H("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(n);
      }
      return i;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name);
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, wu(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? bu(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class bv {
  constructor(e, r, s) {
    this.core = e, this.logger = r, this.name = V0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), n = Sa(i);
      return ou(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Og();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const n = await this.getClientSeed(), a = Sa(n), o = qn();
      return await Fp(o, i, W0, a);
    }, this.generateSharedKey = (i, n, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), h = Cg(o, n);
      return this.setSymKey(h, a);
    }, this.setSymKey = async (i, n) => {
      this.isInitialized();
      const a = n || Tg(i);
      return await this.keychain.set(a, i), a;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, n, a) => {
      this.isInitialized();
      const o = vu(a), h = Ys(n);
      if (La(o)) {
        const y = o.senderPublicKey, w = o.receiverPublicKey;
        i = await this.generateSharedKey(y, w);
      }
      const l = this.getSymKey(i), { type: d, senderPublicKey: f } = o;
      return Ag({ type: d, symKey: l, message: h, senderPublicKey: f });
    }, this.decode = async (i, n, a) => {
      this.isInitialized();
      const o = Lg(n, a);
      if (La(o)) {
        const h = o.receiverPublicKey, l = o.senderPublicKey;
        i = await this.generateSharedKey(h, l);
      }
      try {
        const h = this.getSymKey(i), l = Rg({ symKey: h, encoded: n });
        return Ki(l);
      } catch (h) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
      }
    }, this.getPayloadType = (i) => {
      const n = Oi(i);
      return Qs(n.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const n = Oi(i);
      return n.senderPublicKey ? Ct(n.senderPublicKey, Ot) : void 0;
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name), this.keychain = s || new wv(this.core, this.logger);
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
      e = this.keychain.get(nc);
    } catch {
      e = qn(), await this.keychain.set(nc, e);
    }
    return z0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class _v extends $d {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = G0, this.version = Y0, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
      const n = ls(i);
      let a = this.messages.get(s);
      return typeof a > "u" && (a = {}), typeof a[n] < "u" || (a[n] = i, this.messages.set(s, a), await this.persist()), n;
    }, this.get = (s) => {
      this.isInitialized();
      let i = this.messages.get(s);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (s, i) => {
      this.isInitialized();
      const n = this.get(s), a = ls(i);
      return typeof n[a] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = De.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, wu(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? bu(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ev extends jd {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Jt.EventEmitter(), this.name = X0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (s, i, n) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: i, opts: n } });
      try {
        const o = (n == null ? void 0 : n.ttl) || J0, h = Bn(n), l = (n == null ? void 0 : n.prompt) || !1, d = (n == null ? void 0 : n.tag) || 0, f = (n == null ? void 0 : n.id) || Cu().toString(), y = { topic: s, message: i, opts: { ttl: o, relay: h, prompt: l, tag: d, id: f } }, w = setTimeout(() => this.queue.set(f, y), this.publishTimeout);
        try {
          await await Us(this.rpcPublish(s, i, o, h, l, d, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${d}`), this.removeRequestFromQueue(f), this.relayer.events.emit(_t.publish, y);
        } catch (_) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = n == null ? void 0 : n.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), _;
          return;
        } finally {
          clearTimeout(w);
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
    }, this.relayer = e, this.logger = De.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, s, i, n, a, o) {
    var h, l, d, f;
    const y = { method: _i(i.protocol).publish, params: { topic: e, message: r, ttl: s, prompt: n, tag: a }, id: o };
    return It((h = y.params) == null ? void 0 : h.prompt) && ((l = y.params) == null || delete l.prompt), It((d = y.params) == null ? void 0 : d.tag) && ((f = y.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(_t.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(_t.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Sv {
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
var xv = Object.defineProperty, Dv = Object.defineProperties, Iv = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, cc = (t, e, r) => e in t ? xv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, As = (t, e) => {
  for (var r in e || (e = {}))
    Ov.call(e, r) && cc(t, r, e[r]);
  if (ac)
    for (var r of ac(e))
      Cv.call(e, r) && cc(t, r, e[r]);
  return t;
}, _n = (t, e) => Dv(t, Iv(e));
class Tv extends qd {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Sv(), this.events = new Jt.EventEmitter(), this.name = av, this.version = cv, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ir, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i } });
      try {
        const n = Bn(i), a = { topic: s, relay: n };
        this.pending.set(s, a);
        const o = await this.rpcSubscribe(s, n);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i } }), o;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (s, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(s, i.id, i) : await this.unsubscribeByTopic(s, i);
    }, this.isSubscribed = async (s) => {
      if (this.topics.includes(s))
        return !0;
      const i = `${this.pendingSubscriptionWatchLabel}_${s}`;
      return await new Promise((n, a) => {
        const o = new te.Watch();
        o.start(i);
        const h = setInterval(() => {
          !this.pending.has(s) && this.topics.includes(s) && (clearInterval(h), o.stop(i), n(!0)), o.elapsed(i) >= uv && (clearInterval(h), o.stop(i), a(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = De.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
      const i = Bn(s);
      await this.rpcUnsubscribe(e, r, i);
      const n = ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: s } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const s = { method: _i(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Us(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(_t.connection_stalled);
    }
    return ls(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, s = { method: _i(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Us(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(_t.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, s) {
    const i = { method: _i(s.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, _n(As({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, As({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, As({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Kt.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: s } = H("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(Kt.deleted, _n(As({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Kt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
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
        const { message: r } = H("RESTORE_WILL_OVERRIDE", this.name);
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
    ti(r) && this.onBatchSubscribe(r.map((s, i) => _n(As({}, e[i]), { id: s })));
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
    this.relayer.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(_t.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(_t.disconnect, () => {
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
      const { message: e } = H("NOT_INITIALIZED", this.name);
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
var Nv = Object.defineProperty, uc = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Rv = Object.prototype.propertyIsEnumerable, lc = (t, e, r) => e in t ? Nv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Pv = (t, e) => {
  for (var r in e || (e = {}))
    Av.call(e, r) && lc(t, r, e[r]);
  if (uc)
    for (var r of uc(e))
      Rv.call(e, r) && lc(t, r, e[r]);
  return t;
};
class Lv extends kd {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Jt.EventEmitter(), this.name = ev, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const s = r.id;
      try {
        await this.toEstablishConnection();
        const i = this.provider.request(r);
        return this.requestsInFlight.set(s, { promise: i, request: r }), await i;
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      } finally {
        this.requestsInFlight.delete(s);
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(_t.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(_t.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(dr.payload, this.onPayloadHandler), this.provider.on(dr.connect, this.onConnectHandler), this.provider.on(dr.disconnect, this.onDisconnectHandler), this.provider.on(dr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? De.generateChildLogger(e.logger, this.name) : De.pino(De.getDefaultLoggerOptions({ level: e.logger || Q0 })), this.messages = new _v(this.logger, e.core), this.subscriber = new Tv(this, this.logger), this.publisher = new Ev(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Bu, this.projectId = e.projectId, this.bundleId = kg(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${oc}...`), await this.restartTransport(oc);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, iv);
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
    if (i)
      return i;
    let n;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(Kt.created, a), n());
    };
    return await Promise.all([new Promise((o) => {
      n = o, this.subscriber.on(Kt.created, a);
    }), new Promise(async (o) => {
      i = await this.subscriber.subscribe(e, r), o();
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
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Us(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
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
        }), new Promise(async (r, s) => {
          try {
            await Us(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await Va())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new am(new hm(Wg({ sdkVersion: sv, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), So(e)) {
      if (!e.method.endsWith(tv))
        return;
      const r = e.params, { topic: s, message: i, publishedAt: n } = r.data, a = { topic: s, message: i, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Pv({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Ji(e) && this.events.emit(_t.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(_t.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = _o(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(dr.payload, this.onPayloadHandler), this.provider.off(dr.connect, this.onConnectHandler), this.provider.off(dr.disconnect, this.onDisconnectHandler), this.provider.off(dr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(_t.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Va();
    ky(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(_t.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, te.toMiliseconds(rv)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
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
var Fv = Object.defineProperty, hc = Object.getOwnPropertySymbols, Mv = Object.prototype.hasOwnProperty, Uv = Object.prototype.propertyIsEnumerable, dc = (t, e, r) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fc = (t, e) => {
  for (var r in e || (e = {}))
    Mv.call(e, r) && dc(t, r, e[r]);
  if (hc)
    for (var r of hc(e))
      Uv.call(e, r) && dc(t, r, e[r]);
  return t;
};
class Qi extends zd {
  constructor(e, r, s, i = Ir, n = void 0) {
    super(e, r, s, i), this.core = e, this.logger = r, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = nv, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !It(a) ? this.map.set(this.getKey(a), a) : my(a) ? this.map.set(a.id, a) : vy(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((h) => fm(o[h], a[h]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const h = fc(fc({}, this.getData(a)), o);
      this.map.set(a, h), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = De.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = n;
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
      const { message: s } = H("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = H("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class $v {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = lv, this.version = hv, this.events = new no(), this.initialized = !1, this.storagePrefix = Ir, this.ignoredPayloadTypes = [es], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = qn(), i = await this.core.crypto.setSymKey(s), n = Ft(te.FIVE_MINUTES), a = { protocol: qu }, o = { topic: i, expiry: n, relay: a, active: !1 }, h = cy({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: s, relay: a, expiryTimestamp: n });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, n), { topic: i, uri: h };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: i, symKey: n, relay: a, expiryTimestamp: o } = ka(s.uri);
      let h;
      if (this.pairings.keys.includes(i) && (h = this.pairings.get(i), h.active))
        throw new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
      const l = o || Ft(te.FIVE_MINUTES), d = { topic: i, relay: a, expiry: l, active: !1 };
      return await this.pairings.set(i, d), this.core.expirer.set(i, l), s.activatePairing && await this.activate({ topic: i }), this.events.emit(Rs.create, d), this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(n, i), await this.core.relayer.subscribe(i, { relay: a })), d;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const i = Ft(te.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: i }), this.core.expirer.set(s, i);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: i } = s;
      if (this.pairings.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_pairingPing", {}), { done: a, resolve: o, reject: h } = ns();
        this.events.once(He("pairing_ping", n), ({ error: l }) => {
          l ? h(l) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: i });
    }, this.updateMetadata = async ({ topic: s, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: i } = s;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", ke("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (s, i, n) => {
      const a = hs(i, n), o = await this.core.crypto.encode(s, a), h = Ns[i].req;
      return this.core.history.set(s, a), this.core.relayer.publish(s, o, h), a.id;
    }, this.sendResult = async (s, i, n) => {
      const a = _o(s, n), o = await this.core.crypto.encode(i, a), h = await this.core.history.get(i, s), l = Ns[h.request.method].res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (s, i, n) => {
      const a = Eo(s, n), o = await this.core.crypto.encode(i, a), h = await this.core.history.get(i, s), l = Ns[h.request.method] ? Ns[h.request.method].res : Ns.unregistered_method.res;
      await this.core.relayer.publish(i, o, l), await this.core.history.resolve(a);
    }, this.deletePairing = async (s, i) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), i ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((i) => Sr(i.expiry));
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
      const { topic: i, payload: n } = s, a = (await this.core.history.get(i, n.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, n);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (s, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(n, s, !0), this.events.emit(Rs.ping, { id: n, topic: s });
      } catch (a) {
        await this.sendError(n, s, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (s, i) => {
      const { id: n } = i;
      setTimeout(() => {
        gr(i) ? this.events.emit(He("pairing_ping", n), {}) : Vt(i) && this.events.emit(He("pairing_ping", n), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(Rs.delete, { id: n, topic: s });
      } catch (a) {
        await this.sendError(n, s, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (s, i) => {
      const { id: n, method: a } = i;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = ke("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(n, s, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n, s, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(ke("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      var i;
      if (!At(s)) {
        const { message: a } = H("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(a);
      }
      if (!yy(s.uri)) {
        const { message: a } = H("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(a);
      }
      const n = ka(s.uri);
      if (!((i = n == null ? void 0 : n.relay) != null && i.protocol)) {
        const { message: a } = H("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(n != null && n.symKey)) {
        const { message: a } = H("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
      if (n != null && n.expiryTimestamp && te.toMiliseconds(n == null ? void 0 : n.expiryTimestamp) < Date.now()) {
        const { message: a } = H("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }, this.isValidPing = async (s) => {
      if (!At(s)) {
        const { message: n } = H("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(n);
      }
      const { topic: i } = s;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (s) => {
      if (!At(s)) {
        const { message: n } = H("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(n);
      }
      const { topic: i } = s;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (s) => {
      if (!ht(s, !1)) {
        const { message: i } = H("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: i } = H("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(i);
      }
      if (Sr(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: i } = H("EXPIRED", `pairing topic: ${s}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name), this.pairings = new Qi(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(_t.message, async (e) => {
      const { topic: r, message: s } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const i = await this.core.crypto.decode(r, s);
      try {
        So(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Ji(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(kt.expired, async (e) => {
      const { topic: r } = Eu(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Rs.expire, { topic: r }));
    });
  }
}
class jv extends Ud {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = dv, this.version = fv, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, i, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: i, chainId: n }), this.records.has(i.id))
        return;
      const a = { id: i.id, topic: s, request: { method: i.method, params: i.params || null }, chainId: n, expiry: Ft(te.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(sr.created, a);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const i = await this.getRecord(s.id);
      typeof i.response > "u" && (i.response = Vt(s) ? { error: s.error } : { result: s.result }, this.records.set(i.id, i), this.events.emit(sr.updated, i));
    }, this.get = async (s, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: i }), await this.getRecord(i)), this.delete = (s, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((n) => {
        if (n.topic === s) {
          if (typeof i < "u" && n.id !== i)
            return;
          this.records.delete(n.id), this.events.emit(sr.deleted, n);
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
    }, this.logger = De.generateChildLogger(r, this.name);
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
      const s = { topic: r.topic, request: hs(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: s } = H("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(sr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = H("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(sr.created, (e) => {
      const r = sr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(sr.updated, (e) => {
      const r = sr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(sr.deleted, (e) => {
      const r = sr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => {
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
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class kv extends Bd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = pv, this.version = gv, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
      const n = this.formatTarget(s), a = { target: n, expiry: i };
      this.expirations.set(n, a), this.checkExpiry(n, a), this.events.emit(kt.created, { target: n, expiration: a });
    }, this.get = (s) => {
      this.isInitialized();
      const i = this.formatTarget(s);
      return this.getExpiration(i);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const i = this.formatTarget(s), n = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(kt.deleted, { target: i, expiration: n });
      }
    }, this.on = (s, i) => {
      this.events.on(s, i);
    }, this.once = (s, i) => {
      this.events.once(s, i);
    }, this.off = (s, i) => {
      this.events.off(s, i);
    }, this.removeListener = (s, i) => {
      this.events.removeListener(s, i);
    }, this.logger = De.generateChildLogger(r, this.name);
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
      return Hg(e);
    if (typeof e == "number")
      return Zg(e);
    const { message: r } = H("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(kt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = H("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: s } = H("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: s } = r;
    te.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(kt.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(kt.created, (e) => {
      const r = kt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(kt.expired, (e) => {
      const r = kt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(kt.deleted, (e) => {
      const r = kt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class zv extends Kd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = bn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || ws() || !bs())
        return;
      const i = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (n) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Wn;
        try {
          await this.createIframe();
        } catch (n) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const i = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      let n;
      try {
        n = await this.fetchAttestation(s.attestationId, i);
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${i}`), this.logger.info(a), n = await this.fetchAttestation(s.attestationId, Wn);
      }
      return n;
    }, this.fetchAttestation = async (s, i) => {
      this.logger.info(`resolving attestation: ${s} from url: ${i}`);
      const n = this.startAbortTimer(te.ONE_SECOND * 2), a = await fetch(`${i}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(n), a.status === 200 ? await a.json() : void 0;
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
        if (document.getElementById(bn))
          return n();
        window.addEventListener("message", i);
        const a = document.createElement("iframe");
        a.id = bn, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, s = n;
      }), new Promise((n, a) => setTimeout(() => {
        window.removeEventListener("message", i), a("verify iframe load timeout");
      }, te.toMiliseconds(te.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (s) => {
      let i = s || cs;
      return yv.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${cs}`), i = cs), i;
    }, this.logger = De.generateChildLogger(r, this.name), this.verifyUrl = cs, this.abortController = new AbortController(), this.isDevEnv = mo() && process.env.IS_VITEST;
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), te.toMiliseconds(e));
  }
}
class qv extends Vd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = mv, this.registerDeviceToken = async (s) => {
      const { clientId: i, token: n, notificationType: a, enableEncrypted: o = !1 } = s, h = `${vv}/${this.projectId}/clients`;
      await mm(h, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i, type: a, token: n, always_raw: o }) });
    }, this.logger = De.generateChildLogger(r, this.context);
  }
}
var Bv = Object.defineProperty, pc = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, gc = (t, e, r) => e in t ? Bv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yc = (t, e) => {
  for (var r in e || (e = {}))
    Kv.call(e, r) && gc(t, r, e[r]);
  if (pc)
    for (var r of pc(e))
      Vv.call(e, r) && gc(t, r, e[r]);
  return t;
};
class Do extends Md {
  constructor(e) {
    super(e), this.protocol = zu, this.version = q0, this.name = xo, this.events = new Jt.EventEmitter(), this.initialized = !1, this.on = (s, i) => this.events.on(s, i), this.once = (s, i) => this.events.once(s, i), this.off = (s, i) => this.events.off(s, i), this.removeListener = (s, i) => this.events.removeListener(s, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Bu, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : De.pino(De.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || B0.logger }));
    this.logger = De.generateChildLogger(r, this.name), this.heartbeat = new ys.HeartBeat(), this.crypto = new bv(this, this.logger, e == null ? void 0 : e.keychain), this.history = new jv(this, this.logger), this.expirer = new kv(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Qh(yc(yc({}, K0), e == null ? void 0 : e.storageOptions)), this.relayer = new Lv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new $v(this, this.logger), this.verify = new zv(this.projectId || "", this.logger), this.echoClient = new qv(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Do(e);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(ov, s), r;
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
const Wv = Do, Ku = "wc", Vu = 2, Wu = "client", Io = `${Ku}@${Vu}:${Wu}:`, En = { name: Wu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, mc = "WALLETCONNECT_DEEPLINK_CHOICE", Hv = "proposal", Zv = "Proposal expired", Gv = "session", mi = te.SEVEN_DAYS, Yv = "engine", fr = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Sn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, pr = { idle: "IDLE", active: "ACTIVE" }, Jv = "request", Xv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Qv = Object.defineProperty, ew = Object.defineProperties, tw = Object.getOwnPropertyDescriptors, vc = Object.getOwnPropertySymbols, rw = Object.prototype.hasOwnProperty, sw = Object.prototype.propertyIsEnumerable, wc = (t, e, r) => e in t ? Qv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xt = (t, e) => {
  for (var r in e || (e = {}))
    rw.call(e, r) && wc(t, r, e[r]);
  if (vc)
    for (var r of vc(e))
      sw.call(e, r) && wc(t, r, e[r]);
  return t;
}, is = (t, e) => ew(t, tw(e));
class iw extends Hd {
  constructor(e) {
    super(e), this.name = Yv, this.events = new no(), this.initialized = !1, this.ignoredPayloadTypes = [es], this.requestQueue = { state: pr.idle, queue: [] }, this.sessionRequestQueue = { state: pr.idle, queue: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(fr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const s = is(xt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: a, sessionProperties: o, relays: h } = s;
      let l = i, d, f = !1;
      if (l && (f = this.client.core.pairing.pairings.get(l).active), !l || !f) {
        const { topic: v, uri: b } = await this.client.core.pairing.create();
        l = v, d = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), w = fr.wc_sessionPropose.req.ttl || te.FIVE_MINUTES, _ = Ft(w), O = xt({ requiredNamespaces: n, optionalNamespaces: a, relays: h ?? [{ protocol: qu }], proposer: { publicKey: y, metadata: this.client.metadata }, expiryTimestamp: _ }, o && { sessionProperties: o }), { reject: L, resolve: M, done: S } = ns(w, Zv);
      if (this.events.once(He("session_connect"), async ({ error: v, session: b }) => {
        if (v)
          L(v);
        else if (b) {
          b.self.publicKey = y;
          const g = is(xt({}, b), { requiredNamespaces: O.requiredNamespaces, optionalNamespaces: O.optionalNamespaces });
          await this.client.session.set(b.topic, g), await this.setExpiry(b.topic, b.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: b.peer.metadata }), M(g);
        }
      }), !l) {
        const { message: v } = H("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(v);
      }
      const C = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: O, throwOnFailedPublish: !0 });
      return await this.setProposal(C, xt({ id: C }, O)), { uri: d, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: s, relayProtocol: i, namespaces: n, sessionProperties: a } = r, o = this.client.proposal.get(s);
      let { pairingTopic: h, proposer: l, requiredNamespaces: d, optionalNamespaces: f } = o;
      h = h || "";
      const y = await this.client.core.crypto.generateKeyPair(), w = l.publicKey, _ = await this.client.core.crypto.generateSharedKey(y, w);
      h && s && (await this.client.core.pairing.updateMetadata({ topic: h, metadata: l.metadata }), await this.sendResult({ id: s, topic: h, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(s, ke("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: h }));
      const O = xt({ relay: { protocol: i ?? "irn" }, namespaces: n, pairingTopic: h, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Ft(mi) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(_);
      const L = is(xt({}, O), { topic: _, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: h, acknowledged: !1, self: O.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: y });
      await this.client.session.set(_, L);
      try {
        await this.sendRequest({ topic: _, method: "wc_sessionSettle", params: O, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(_, ke("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(_), M;
      }
      return await this.setExpiry(_, Ft(mi)), { topic: _, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(_)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: s, reason: i } = r, { pairingTopic: n } = this.client.proposal.get(s);
      n && (await this.sendError(s, n, i), await this.client.proposal.delete(s, ke("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: s, namespaces: i } = r, n = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: a, resolve: o, reject: h } = ns();
      return this.events.once(He("session_update", n), ({ error: l }) => {
        l ? h(l) : o();
      }), await this.client.session.update(s, { namespaces: i }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: s } = r, i = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: n, resolve: a, reject: o } = ns();
      return this.events.once(He("session_extend", i), ({ error: h }) => {
        h ? o(h) : a();
      }), await this.setExpiry(s, Ft(mi)), { acknowledged: n };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: s, request: i, topic: n, expiry: a = fr.wc_sessionRequest.req.ttl } = r, o = bo(), { done: h, resolve: l, reject: d } = ns(a, "Request expired. Please try again.");
      return this.events.once(He("session_request", o), ({ error: f, result: y }) => {
        f ? d(f) : l(y);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: n, method: "wc_sessionRequest", params: { request: is(xt({}, i), { expiryTimestamp: Ft(a) }), chainId: s }, expiry: a, throwOnFailedPublish: !0 }).catch((y) => d(y)), this.client.events.emit("session_request_sent", { topic: n, request: i, chainId: s, id: o }), f();
      }), new Promise(async (f) => {
        const y = await Yg(this.client.core.storage, mc);
        Gg({ id: o, topic: n, wcDeepLink: y }), f();
      }), h()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: s, response: i } = r, { id: n } = i;
      gr(i) ? await this.sendResult({ id: n, topic: s, result: i.result, throwOnFailedPublish: !0 }) : Vt(i) && await this.sendError(n, s, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: s } = r;
      if (this.client.session.keys.includes(s)) {
        const i = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: n, resolve: a, reject: o } = ns();
        this.events.once(He("session_ping", i), ({ error: h }) => {
          h ? o(h) : a();
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
      if (this.client.session.keys.includes(s))
        await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: ke("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: s, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(s))
        await this.client.core.pairing.disconnect({ topic: s });
      else {
        const { message: i } = H("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
        throw new Error(i);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((s) => py(s, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((n) => {
            var a, o;
            return ((a = n.peerMetadata) == null ? void 0 : a.url) && ((o = n.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && n.topic && n.topic !== s.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (r) => {
      const { topic: s, expirerHasDeleted: i = !1, emitEvent: n = !0, id: a = 0 } = r, { self: o } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, ke("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i || this.client.core.expirer.del(s), this.client.core.storage.removeItem(mc).catch((h) => this.client.logger.warn(h)), this.getPendingSessionRequests().forEach((h) => {
        h.topic === s && this.deletePendingSessionRequest(h.id, ke("USER_DISCONNECTED"));
      }), n && this.client.events.emit("session_delete", { id: a, topic: s });
    }, this.deleteProposal = async (r, s) => {
      await Promise.all([this.client.proposal.delete(r, ke("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, s, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, s), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== r), i && (this.sessionRequestQueue.state = pr.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, s) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: s }), this.client.core.expirer.set(r, s);
    }, this.setProposal = async (r, s) => {
      await this.client.proposal.set(r, s), this.client.core.expirer.set(r, Ft(fr.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: s, topic: i, params: n, verifyContext: a } = r, o = n.request.expiryTimestamp || Ft(fr.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(s, { id: s, topic: i, params: n, verifyContext: a }), o && this.client.core.expirer.set(s, o);
    }, this.sendRequest = async (r) => {
      const { topic: s, method: i, params: n, expiry: a, relayRpcId: o, clientRpcId: h, throwOnFailedPublish: l } = r, d = hs(i, n, h);
      if (bs() && Xv.includes(i)) {
        const w = ls(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: w });
      }
      const f = await this.client.core.crypto.encode(s, d), y = fr[i].req;
      return a && (y.ttl = a), o && (y.id = o), this.client.core.history.set(s, d), l ? (y.internal = is(xt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, f, y)) : this.client.core.relayer.publish(s, f, y).catch((w) => this.client.logger.error(w)), d.id;
    }, this.sendResult = async (r) => {
      const { id: s, topic: i, result: n, throwOnFailedPublish: a } = r, o = _o(s, n), h = await this.client.core.crypto.encode(i, o), l = await this.client.core.history.get(i, s), d = fr[l.request.method].res;
      a ? (d.internal = is(xt({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, h, d)) : this.client.core.relayer.publish(i, h, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, s, i) => {
      const n = Eo(r, i), a = await this.client.core.crypto.encode(s, n), o = await this.client.core.history.get(s, r), h = fr[o.request.method].res;
      this.client.core.relayer.publish(s, a, h), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const r = [], s = [];
      this.client.session.getAll().forEach((i) => {
        let n = !1;
        Sr(i.expiry) && (n = !0), this.client.core.crypto.keychain.has(i.topic) || (n = !0), n && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Sr(i.expiryTimestamp) && s.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession({ topic: i })), ...s.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === pr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = pr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = pr.idle;
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
      const { topic: s } = r, { message: i } = H("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, s) => {
      const { params: i, id: n } = s;
      try {
        this.isValidConnect(xt({}, s.params));
        const a = i.expiryTimestamp || Ft(fr.wc_sessionPropose.req.ttl), o = xt({ id: n, pairingTopic: r, expiryTimestamp: a }, i);
        await this.setProposal(n, o);
        const h = ls(JSON.stringify(s)), l = await this.getVerifyContext(h, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: o, verifyContext: l });
      } catch (a) {
        await this.sendError(n, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, s) => {
      const { id: i } = s;
      if (gr(s)) {
        const { result: n } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const a = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const h = n.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const l = await this.client.core.crypto.generateSharedKey(o, h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const d = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Vt(s) && (await this.client.proposal.delete(i, ke("USER_DISCONNECTED")), this.events.emit(He("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: a, controller: o, expiry: h, namespaces: l, sessionProperties: d, pairingTopic: f } = s.params, y = xt({ topic: r, relay: a, expiry: h, namespaces: l, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, d && { sessionProperties: d });
        await this.sendResult({ id: s.id, topic: r, result: !0 }), this.events.emit(He("session_connect"), { session: y }), this.cleanupDuplicatePairings(y);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, s) => {
      const { id: i } = s;
      gr(s) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(He("session_approve", i), {})) : Vt(s) && (await this.client.session.delete(r, ke("USER_DISCONNECTED")), this.events.emit(He("session_approve", i), { error: s.error }));
    }, this.onSessionUpdateRequest = async (r, s) => {
      const { params: i, id: n } = s;
      try {
        const a = `${r}_session_update`, o = yi.get(a);
        if (o && this.isRequestOutOfSync(o, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidUpdate(xt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_update", { id: n, topic: r, params: i }), yi.set(a, n);
      } catch (a) {
        await this.sendError(n, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
      const { id: i } = s;
      gr(s) ? this.events.emit(He("session_update", i), {}) : Vt(s) && this.events.emit(He("session_update", i), { error: s.error });
    }, this.onSessionExtendRequest = async (r, s) => {
      const { id: i } = s;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ft(mi)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (n) {
        await this.sendError(i, r, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (r, s) => {
      const { id: i } = s;
      gr(s) ? this.events.emit(He("session_extend", i), {}) : Vt(s) && this.events.emit(He("session_extend", i), { error: s.error });
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
        gr(s) ? this.events.emit(He("session_ping", i), {}) : Vt(s) && this.events.emit(He("session_ping", i), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: r, reason: s.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(_t.publish, async () => {
            n(await this.deleteSession({ topic: r, id: i }));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: ke("USER_DISCONNECTED") })]);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        this.isValidRequest(xt({ topic: r }, n));
        const a = ls(JSON.stringify(hs("wc_sessionRequest", n, i))), o = this.client.session.get(r), h = await this.getVerifyContext(a, o.peer.metadata), l = { id: i, topic: r, params: n, verifyContext: h };
        await this.setPendingSessionRequest(l), this.addSessionRequestToSessionRequestQueue(l), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, s) => {
      const { id: i } = s;
      gr(s) ? this.events.emit(He("session_request", i), { result: s.result }) : Vt(s) && this.events.emit(He("session_request", i), { error: s.error });
    }, this.onSessionEventRequest = async (r, s) => {
      const { id: i, params: n } = s;
      try {
        const a = `${r}_session_event_${n.event.name}`, o = yi.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(xt({ topic: r }, n)), this.client.events.emit("session_event", { id: i, topic: r, params: n }), yi.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = pr.idle, this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: s }) => {
      const i = this.client.core.history.pending;
      i.length > 0 && i.filter((n) => n.topic === r && n.request.method === "wc_sessionRequest").forEach((n) => {
        this.events.emit(He("session_request", n.request.id), { error: s });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === pr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = pr.active, this.client.events.emit("session_request", r);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const s = this.client.proposal.getAll().find((i) => i.pairingTopic === r.topic);
      s && this.onSessionProposeRequest(r.topic, hs("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (r) => {
      if (!At(r)) {
        const { message: h } = H("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: a, relays: o } = r;
      if (It(s) || await this.isValidPairingTopic(s), !Iy(o, !0)) {
        const { message: h } = H("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(h);
      }
      !It(i) && Ci(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !It(n) && Ci(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), It(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, s) => {
      const i = Dy(r, "connect()", s);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!At(r))
        throw new Error(H("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: s, namespaces: i, relayProtocol: n, sessionProperties: a } = r;
      await this.isValidProposalId(s);
      const o = this.client.proposal.get(s), h = mn(i, "approve()");
      if (h)
        throw new Error(h.message);
      const l = Ba(o.requiredNamespaces, i, "approve()");
      if (l)
        throw new Error(l.message);
      if (!ht(n, !0)) {
        const { message: d } = H("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(d);
      }
      It(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!At(r)) {
        const { message: n } = H("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(n);
      }
      const { id: s, reason: i } = r;
      if (await this.isValidProposalId(s), !Cy(i)) {
        const { message: n } = H("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!At(r)) {
        const { message: l } = H("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: s, controller: i, namespaces: n, expiry: a } = r;
      if (!xu(s)) {
        const { message: l } = H("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = wy(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const h = mn(n, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      if (Sr(a)) {
        const { message: l } = H("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!At(r)) {
        const { message: h } = H("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(h);
      }
      const { topic: s, namespaces: i } = r;
      await this.isValidSessionTopic(s);
      const n = this.client.session.get(s), a = mn(i, "update()");
      if (a)
        throw new Error(a.message);
      const o = Ba(n.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!At(r)) {
        const { message: i } = H("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (r) => {
      if (!At(r)) {
        const { message: h } = H("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(h);
      }
      const { topic: s, request: i, chainId: n, expiry: a } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!qa(o, n)) {
        const { message: h } = H("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(h);
      }
      if (!Ty(i)) {
        const { message: h } = H("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(h);
      }
      if (!Ry(o, n, i.method)) {
        const { message: h } = H("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(h);
      }
      if (a && !My(a, Sn)) {
        const { message: h } = H("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Sn.min} and ${Sn.max}`);
        throw new Error(h);
      }
    }, this.isValidRespond = async (r) => {
      var s;
      if (!At(r)) {
        const { message: a } = H("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, response: n } = r;
      try {
        await this.isValidSessionTopic(i);
      } catch (a) {
        throw (s = r == null ? void 0 : r.response) != null && s.id && this.cleanupAfterResponse(r), a;
      }
      if (!Ny(n)) {
        const { message: a } = H("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!At(r)) {
        const { message: i } = H("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (r) => {
      if (!At(r)) {
        const { message: o } = H("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: s, event: i, chainId: n } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: a } = this.client.session.get(s);
      if (!qa(a, n)) {
        const { message: o } = H("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(o);
      }
      if (!Ay(i)) {
        const { message: o } = H("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!Py(a, n, i.name)) {
        const { message: o } = H("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!At(r)) {
        const { message: i } = H("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (r, s) => {
      const i = { verified: { verifyUrl: s.verifyUrl || cs, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: s.verifyUrl });
        n && (i.verified.origin = n.origin, i.verified.isScam = n.isScam, i.verified.validation = n.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.info(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, s) => {
      Object.values(r).forEach((i) => {
        if (!ht(i, !1)) {
          const { message: n } = H("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(n);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = H("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(_t.message, async (e) => {
      const { topic: r, message: s } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const i = await this.client.core.crypto.decode(r, s);
      try {
        So(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Ji(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (n) {
        this.client.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(kt.expired, async (e) => {
      const { topic: r, id: s } = Eu(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, H("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Rs.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = H("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = H("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = H("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = H("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = H("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = H("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = H("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (ht(e, !1)) {
      const { message: r } = H("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = H("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!Oy(e)) {
      const { message: r } = H("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = H("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = H("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class nw extends Qi {
  constructor(e, r) {
    super(e, r, Hv, Io), this.core = e, this.logger = r;
  }
}
class ow extends Qi {
  constructor(e, r) {
    super(e, r, Gv, Io), this.core = e, this.logger = r;
  }
}
class aw extends Qi {
  constructor(e, r) {
    super(e, r, Jv, Io, (s) => s.id), this.core = e, this.logger = r;
  }
}
class Oo extends Wd {
  constructor(e) {
    super(e), this.protocol = Ku, this.version = Vu, this.name = En.name, this.events = new Jt.EventEmitter(), this.on = (s, i) => this.events.on(s, i), this.once = (s, i) => this.events.once(s, i), this.off = (s, i) => this.events.off(s, i), this.removeListener = (s, i) => this.events.removeListener(s, i), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
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
    }, this.name = (e == null ? void 0 : e.name) || En.name, this.metadata = (e == null ? void 0 : e.metadata) || qg();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : De.pino(De.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || En.logger }));
    this.core = (e == null ? void 0 : e.core) || new Wv(e), this.logger = De.generateChildLogger(r, this.name), this.session = new ow(this.core, this.logger), this.proposal = new nw(this.core, this.logger), this.pendingRequest = new aw(this.core, this.logger), this.engine = new iw(this);
  }
  static async init(e) {
    const r = new Oo(e);
    return await r.initialize(), r;
  }
  get context() {
    return De.getLoggerContext(this.logger);
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
var cw = Object.defineProperty, uw = Object.defineProperties, lw = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, hw = Object.prototype.hasOwnProperty, dw = Object.prototype.propertyIsEnumerable, _c = (t, e, r) => e in t ? cw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fw = (t, e) => {
  for (var r in e || (e = {}))
    hw.call(e, r) && _c(t, r, e[r]);
  if (bc)
    for (var r of bc(e))
      dw.call(e, r) && _c(t, r, e[r]);
  return t;
}, pw = (t, e) => uw(t, lw(e)), Co = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, $e = (t, e, r) => (Co(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Br = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ai = (t, e, r, s) => (Co(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r), vt = (t, e, r) => (Co(t, e, "access private method"), r), Kr, os, Ps, lt, Hn, Hu, wt, Dt, Zn, Ec;
let gw = class {
  constructor(e) {
    Br(this, Hn), Br(this, wt), Br(this, Zn), Br(this, Kr, void 0), Br(this, os, void 0), Br(this, Ps, void 0), Br(this, lt, void 0), Ai(this, Kr, e), Ai(this, os, vt(this, Hn, Hu).call(this)), vt(this, wt, Dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: s } = e;
    return new Promise(async (i, n) => {
      await vt(this, wt, Dt).call(this);
      const a = $e(this, os).subscribeModal((l) => {
        l.open || (a(), n(new Error("Modal closed")));
      }), { uri: o, approval: h } = await $e(this, lt).connect(e);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), s && Object.values(s).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), await $e(this, os).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await h();
        i(l);
      } catch (l) {
        n(l);
      } finally {
        a(), $e(this, os).closeModal();
      }
    });
  }
  async disconnect(e) {
    await vt(this, wt, Dt).call(this), await $e(this, lt).disconnect(e);
  }
  async request(e) {
    return await vt(this, wt, Dt).call(this), await $e(this, lt).request(e);
  }
  async getSessions() {
    return await vt(this, wt, Dt).call(this), $e(this, lt).session.getAll();
  }
  async getSession() {
    return await vt(this, wt, Dt).call(this), $e(this, lt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await vt(this, wt, Dt).call(this), $e(this, lt).off("session_expire", e);
  }
};
Kr = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakSet(), Hu = function() {
  const { modalOptions: t, projectId: e } = $e(this, Kr);
  return new gh(pw(fw({}, t), { projectId: e }));
}, wt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return $e(this, lt) ? !0 : (!$e(this, Ps) && typeof window < "u" && Ai(this, Ps, vt(this, Zn, Ec).call(this)), $e(this, Ps));
}, Zn = /* @__PURE__ */ new WeakSet(), Ec = async function() {
  Ai(this, lt, await Oo.init({ metadata: $e(this, Kr).metadata, projectId: $e(this, Kr).projectId, relayUrl: $e(this, Kr).relayUrl }));
  const t = await $e(this, lt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Zu = [
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
], en = ["aleo:1"], Gu = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], Yu = "f0aaeffe71b636da453fce042d79d723";
function yw() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const mw = {
  chains: en,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [Yu]
}, vw = {
  chains: en,
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
}, Sc = yw() ? mw : vw, p_ = {
  requiredNamespaces: {
    aleo: {
      methods: Zu,
      chains: en,
      events: Gu
    }
  }
}, ww = "@puzzlehq/sdk-core", bw = "Puzzle SDK", _w = "0.2.32-beta.1", Ew = "Your portal to privacy", Sw = "./dist/puzzle.cjs.js", xw = "./dist/puzzle.es.js", Dw = "./dist/puzzle.umd.js", Iw = "./dist/types/src/index.d.ts", Ow = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, Cw = "module", Tw = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, Nw = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Aw = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0",
  ws: "^8.16.0"
}, Rw = {
  buffer: "^6.0.3"
}, Pw = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], Lw = "Puzzle", Fw = "ISC", Mw = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Uw = "https://github.com/puzzlehq/puzzle-sdk#readme", xc = {
  name: ww,
  displayName: bw,
  version: _w,
  description: Ew,
  main: Sw,
  module: xw,
  browser: Dw,
  types: Iw,
  private: !1,
  exports: Ow,
  type: Cw,
  scripts: Tw,
  repository: Nw,
  dependencies: Aw,
  peerDependencies: Rw,
  keywords: Pw,
  author: Lw,
  license: Fw,
  bugs: Mw,
  homepage: Uw
}, Ju = new no();
let Dr;
async function g_(t) {
  let e = !1;
  const r = xc.version, s = localStorage.getItem("puzzle_sdk_version");
  if (r !== s && (console.log(
    `${xc.name}: Updated from ` + s + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", Sc), Dr = new gw({
    projectId: t.projectId ?? Yu,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: window ? window.location.hostname : t.dAppUrl ?? "NO URL",
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Sc }
  }), e) {
    localStorage.removeItem("puzzle-hasInjectedConnection");
    try {
      $w(Dr, t.onDisconnect);
    } catch (i) {
      console.error(i);
    }
  }
  Dr.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), Dr.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasInjectedConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function $w(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: ke("USER_DISCONNECTED")
  }));
}
async function zt() {
  return new Promise((t) => {
    if (Dr)
      t(Dr);
    else {
      const e = setInterval(() => {
        Dr && (clearInterval(e), t(Dr));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const jw = async (t) => {
  var r;
  if (!!!((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasInjectedConnection", "true"), !0) : (localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1);
  } catch (s) {
    return console.warn(s), localStorage.setItem("puzzle-hasInjectedConnection", "false"), !1;
  }
}, Rr = () => {
  var r;
  return !((r = window == null ? void 0 : window.aleo) != null && r.puzzleWalletClient) ? !1 : localStorage.getItem(
    "puzzle-hasInjectedConnection"
  ) === "true";
}, y_ = async () => {
  const t = await zt(), e = await t.getSession();
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.getSelectedAccount.query(r);
    } catch (s) {
      return console.error("getAccount error", s), { error: s.message };
    }
  try {
    return await t.request(r);
  } catch (s) {
    return console.error("getAccount error", s), { error: s.message };
  }
}, m_ = async ({
  address: t
}) => {
  const e = await zt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  const s = {
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.getBalance.query(s);
    } catch (i) {
      const n = i.message;
      return console.error("getBalance error", i), { error: n };
    }
  try {
    return await e.request(s);
  } catch (i) {
    const n = i.message;
    return console.error("getBalance error", i), { error: n };
  }
}, v_ = async () => {
  const t = await zt();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Zu,
          chains: en,
          events: Gu
        }
      }
    });
    return Ju.emit("session_change"), r && await jw(r.topic), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r);
  }
}, w_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
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
    return console.error("createEvent error", i), { error: i.message };
  }
}, b_ = async () => {
  const t = await zt(), e = await (t == null ? void 0 : t.getSession());
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.createSharedState.mutation(
        r
      );
    } catch (s) {
      return console.error("createSharedState error", s), { error: s.message };
    }
  try {
    return await t.request(r);
  } catch (s) {
    return console.error("createSharedState error", s), { error: s.message };
  }
}, __ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const s = {
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.decrypt.query(s);
    } catch (i) {
      const n = i.message;
      return console.error("decrypt error", i), { error: n };
    }
  try {
    return await e.request(s);
  } catch (i) {
    return console.error("decrypt error", i), { error: i.message };
  }
}, E_ = async () => {
  const t = await zt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: ke("USER_DISCONNECTED"),
        topic: e.topic
      }), localStorage.removeItem("puzzle-hasInjectedConnection"), Ju.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    return console.error("error disconnecting", r), { error: r.message };
  }
}, S_ = async ({
  id: t,
  address: e
}) => {
  const r = await zt(), s = await (r == null ? void 0 : r.getSession());
  if (!s || !r)
    return { event: void 0, error: "no session or connection" };
  const i = {
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
  };
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.getEvent.query(i);
    } catch (a) {
      return console.error("getEvent error", a), { error: a.message };
    }
  const n = async () => await r.request(i);
  try {
    return await n();
  } catch (a) {
    return console.error("getEvents error", a), { error: a.message };
  }
}, x_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const s = {
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.getEvents.query(s);
    } catch (n) {
      return console.error("getEvents error", n), { error: n.message };
    }
  const i = async (n = 0) => await e.request(s);
  try {
    return await i();
  } catch (n) {
    return console.error("getEvents error", n), { error: n.message };
  }
}, D_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const s = {
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.importSharedState.mutation(s);
    } catch (i) {
      return console.error("importSharedState error", i), { error: i.message };
    }
  try {
    return await e.request(s);
  } catch (i) {
    return console.error("importSharedState error", i), { error: i.message };
  }
}, I_ = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const s = await zt(), i = await (s == null ? void 0 : s.getSession());
  if (!i || !s)
    return { error: "no session or connection" };
  const n = {
    topic: i.topic,
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
  if (Rr())
    try {
      return await window.aleo.puzzleWalletClient.getRecords.query(n);
    } catch (o) {
      return console.error("getRecords error", o), { error: o.message };
    }
  const a = async (o = 0) => await s.request(n);
  try {
    return await a();
  } catch (o) {
    return console.error("getRecords error", o), { error: o.message };
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
    for (const a of i)
      n[a] = a;
    return n;
  }, t.getValidEnumValues = (i) => {
    const n = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of n)
      a[o] = i[o];
    return t.objectValues(a);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(n) {
    return i[n];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const n = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && n.push(a);
    return n;
  }, t.find = (i, n) => {
    for (const a of i)
      if (n(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function s(i, n = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(n);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (i, n) => typeof n == "bigint" ? n.toString() : n;
})(Te || (Te = {}));
var Gn;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Gn || (Gn = {}));
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
]), xr = (t) => {
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
]), kw = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Zt extends Error {
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
      for (const a of n.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          s._errors.push(r(a));
        else {
          let o = s, h = 0;
          for (; h < a.path.length; ) {
            const l = a.path[h];
            h === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], h++;
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
Zt.create = (t) => new Zt(t);
const $s = (t, e) => {
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
let Xu = $s;
function zw(t) {
  Xu = t;
}
function Ri() {
  return Xu;
}
const Pi = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: i } = t, n = [...r, ...i.path || []], a = {
    ...i,
    path: n
  };
  let o = "";
  const h = s.filter((l) => !!l).slice().reverse();
  for (const l of h)
    o = l(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: n,
    message: i.message || o
  };
}, qw = [];
function X(t, e) {
  const r = Pi({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ri(),
      $s
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
      const { key: n, value: a } = i;
      if (n.status === "aborted" || a.status === "aborted")
        return ae;
      n.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || i.alwaysSet) && (s[n.value] = a.value);
    }
    return { status: e.value, value: s };
  }
}
const ae = Object.freeze({
  status: "aborted"
}), Qu = (t) => ({ status: "dirty", value: t }), Tt = (t) => ({ status: "valid", value: t }), Yn = (t) => t.status === "aborted", Jn = (t) => t.status === "dirty", Li = (t) => t.status === "valid", Fi = (t) => typeof Promise < "u" && t instanceof Promise;
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
const Dc = (t, e) => {
  if (Li(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Zt(t.common.issues);
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
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: s ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class ge {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return xr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: xr(e.data),
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
        parsedType: xr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Fi(r))
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
      parsedType: xr(e)
    }, n = this._parseSync({ data: e, path: i.path, parent: i });
    return Dc(i, n);
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
      parsedType: xr(e)
    }, i = this._parse({ data: e, path: s.path, parent: s }), n = await (Fi(i) ? i : Promise.resolve(i));
    return Dc(s, n);
  }
  refine(e, r) {
    const s = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, n) => {
      const a = e(i), o = () => n.addIssue({
        code: V.custom,
        ...s(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((h) => h ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((s, i) => e(s) ? !0 : (i.addIssue(typeof r == "function" ? r(s, i) : r), !1));
  }
  _refinement(e) {
    return new Yt({
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return yr.create(this, this._def);
  }
  nullable() {
    return Gr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Gt.create(this, this._def);
  }
  promise() {
    return gs.create(this, this._def);
  }
  or(e) {
    return qs.create([this, e], this._def);
  }
  and(e) {
    return Bs.create(this, e, this._def);
  }
  transform(e) {
    return new Yt({
      ...de(this._def),
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Zs({
      ...de(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ie.ZodDefault
    });
  }
  brand() {
    return new tl({
      typeName: ie.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ji({
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
    return si.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Bw = /^c[^\s-]{8,}$/i, Kw = /^[a-z][a-z0-9]*$/, Vw = /[0-9A-HJKMNP-TV-Z]{26}/, Ww = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Hw = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Zw = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), Gw = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Yw = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Jw = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Xw(t, e) {
  return !!((e === "v4" || !e) && Gw.test(t) || (e === "v6" || !e) && Yw.test(t));
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
      return X(
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
        e.data.length < n.value && (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "length") {
        const a = e.data.length > n.value, o = e.data.length < n.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? X(i, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : o && X(i, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), s.dirty());
      } else if (n.kind === "email")
        Hw.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "email",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "emoji")
        Zw.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "emoji",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "uuid")
        Ww.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "uuid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid")
        Bw.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "cuid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid2")
        Kw.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "cuid2",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "ulid")
        Vw.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "ulid",
          code: V.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), X(i, {
            validation: "url",
            code: V.invalid_string,
            message: n.message
          }), s.dirty();
        }
      else
        n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "regex",
          code: V.invalid_string,
          message: n.message
        }), s.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.invalid_string,
          validation: { includes: n.value, position: n.position },
          message: n.message
        }), s.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.invalid_string,
          validation: { startsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.invalid_string,
          validation: { endsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "datetime" ? Jw(n).test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          code: V.invalid_string,
          validation: "datetime",
          message: n.message
        }), s.dirty()) : n.kind === "ip" ? Xw(e.data, n.version) || (i = this._getOrReturnCtx(e, i), X(i, {
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
function Qw(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, i = r > s ? r : s, n = parseInt(t.toFixed(i).replace(".", "")), a = parseInt(e.toFixed(i).replace(".", ""));
  return n % a / Math.pow(10, i);
}
class Or extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== Y.number) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Y.number,
        received: n.parsedType
      }), ae;
    }
    let s;
    const i = new Et();
    for (const n of this._def.checks)
      n.kind === "int" ? Te.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), i.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? Qw(e.data, n.value) !== 0 && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
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
    return new Or({
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
    return new Or({
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
Or.create = (t) => new Or({
  checks: [],
  typeName: ie.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Cr extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== Y.bigint) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Y.bigint,
        received: n.parsedType
      }), ae;
    }
    let s;
    const i = new Et();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), X(s, {
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
    return new Cr({
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
    return new Cr({
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
Cr.create = (t) => {
  var e;
  return new Cr({
    checks: [],
    typeName: ie.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t)
  });
};
class js extends ge {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Y.boolean) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.boolean,
        received: s.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
js.create = (t) => new js({
  typeName: ie.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Hr extends ge {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== Y.date) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Y.date,
        received: n.parsedType
      }), ae;
    }
    if (isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_date
      }), ae;
    }
    const s = new Et();
    let i;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), s.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (i = this._getOrReturnCtx(e, i), X(i, {
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
    return new Hr({
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
Hr.create = (t) => new Hr({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ie.ZodDate,
  ...de(t)
});
class Mi extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.symbol) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.symbol,
        received: s.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
Mi.create = (t) => new Mi({
  typeName: ie.ZodSymbol,
  ...de(t)
});
class ks extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.undefined,
        received: s.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
ks.create = (t) => new ks({
  typeName: ie.ZodUndefined,
  ...de(t)
});
class zs extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.null) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.null,
        received: s.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
zs.create = (t) => new zs({
  typeName: ie.ZodNull,
  ...de(t)
});
class ps extends ge {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Tt(e.data);
  }
}
ps.create = (t) => new ps({
  typeName: ie.ZodAny,
  ...de(t)
});
class Wr extends ge {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Tt(e.data);
  }
}
Wr.create = (t) => new Wr({
  typeName: ie.ZodUnknown,
  ...de(t)
});
class mr extends ge {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return X(r, {
      code: V.invalid_type,
      expected: Y.never,
      received: r.parsedType
    }), ae;
  }
}
mr.create = (t) => new mr({
  typeName: ie.ZodNever,
  ...de(t)
});
class Ui extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.void,
        received: s.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
Ui.create = (t) => new Ui({
  typeName: ie.ZodVoid,
  ...de(t)
});
class Gt extends ge {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== Y.array)
      return X(r, {
        code: V.invalid_type,
        expected: Y.array,
        received: r.parsedType
      }), ae;
    if (i.exactLength !== null) {
      const a = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (a || o) && (X(r, {
        code: a ? V.too_big : V.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), s.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (X(r, {
      code: V.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), s.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (X(r, {
      code: V.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), s.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => i.type._parseAsync(new nr(r, a, r.path, o)))).then((a) => Et.mergeArray(s, a));
    const n = [...r.data].map((a, o) => i.type._parseSync(new nr(r, a, r.path, o)));
    return Et.mergeArray(s, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Gt({
      ...this._def,
      minLength: { value: e, message: re.toString(r) }
    });
  }
  max(e, r) {
    return new Gt({
      ...this._def,
      maxLength: { value: e, message: re.toString(r) }
    });
  }
  length(e, r) {
    return new Gt({
      ...this._def,
      exactLength: { value: e, message: re.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Gt.create = (t, e) => new Gt({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ie.ZodArray,
  ...de(e)
});
function as(t) {
  if (t instanceof ze) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = yr.create(as(s));
    }
    return new ze({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Gt ? new Gt({
      ...t._def,
      type: as(t.element)
    }) : t instanceof yr ? yr.create(as(t.unwrap())) : t instanceof Gr ? Gr.create(as(t.unwrap())) : t instanceof or ? or.create(t.items.map((e) => as(e))) : t;
}
class ze extends ge {
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
      return X(l, {
        code: V.invalid_type,
        expected: Y.object,
        received: l.parsedType
      }), ae;
    }
    const { status: s, ctx: i } = this._processInputParams(e), { shape: n, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof mr && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        a.includes(l) || o.push(l);
    const h = [];
    for (const l of a) {
      const d = n[l], f = i.data[l];
      h.push({
        key: { status: "valid", value: l },
        value: d._parse(new nr(i, f, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof mr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of o)
          h.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (l === "strict")
        o.length > 0 && (X(i, {
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
    return re.errToObj, new ze({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, s) => {
          var i, n, a, o;
          const h = (a = (n = (i = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(i, r, s).message) !== null && a !== void 0 ? a : s.defaultError;
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
    return new ze({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ze({
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
    return new ze({
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
    return new ze({
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
    return new ze({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Te.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return as(this);
  }
  partial(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((s) => {
      const i = this.shape[s];
      e && !e[s] ? r[s] = i : r[s] = i.optional();
    }), new ze({
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
        for (; n instanceof yr; )
          n = n._def.innerType;
        r[s] = n;
      }
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return el(Te.objectKeys(this.shape));
  }
}
ze.create = (t, e) => new ze({
  shape: () => t,
  unknownKeys: "strip",
  catchall: mr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
ze.strictCreate = (t, e) => new ze({
  shape: () => t,
  unknownKeys: "strict",
  catchall: mr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
ze.lazycreate = (t, e) => new ze({
  shape: t,
  unknownKeys: "strip",
  catchall: mr.create(),
  typeName: ie.ZodObject,
  ...de(e)
});
class qs extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function i(n) {
      for (const o of n)
        if (o.result.status === "valid")
          return o.result;
      for (const o of n)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = n.map((o) => new Zt(o.ctx.common.issues));
      return X(r, {
        code: V.invalid_union,
        unionErrors: a
      }), ae;
    }
    if (r.common.async)
      return Promise.all(s.map(async (n) => {
        const a = {
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
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let n;
      const a = [];
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
        d.status === "dirty" && !n && (n = { result: d, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (n)
        return r.common.issues.push(...n.ctx.common.issues), n.result;
      const o = a.map((h) => new Zt(h));
      return X(r, {
        code: V.invalid_union,
        unionErrors: o
      }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
qs.create = (t, e) => new qs({
  options: t,
  typeName: ie.ZodUnion,
  ...de(e)
});
const Ei = (t) => t instanceof Vs ? Ei(t.schema) : t instanceof Yt ? Ei(t.innerType()) : t instanceof Ws ? [t.value] : t instanceof Tr ? t.options : t instanceof Hs ? Object.keys(t.enum) : t instanceof Zs ? Ei(t._def.innerType) : t instanceof ks ? [void 0] : t instanceof zs ? [null] : null;
class tn extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.object)
      return X(r, {
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
    }) : (X(r, {
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
      const a = Ei(n.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, n);
      }
    }
    return new tn({
      typeName: ie.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...de(s)
    });
  }
}
function Xn(t, e) {
  const r = xr(t), s = xr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === Y.object && s === Y.object) {
    const i = Te.objectKeys(e), n = Te.objectKeys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of n) {
      const h = Xn(t[o], e[o]);
      if (!h.valid)
        return { valid: !1 };
      a[o] = h.data;
    }
    return { valid: !0, data: a };
  } else if (r === Y.array && s === Y.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let n = 0; n < t.length; n++) {
      const a = t[n], o = e[n], h = Xn(a, o);
      if (!h.valid)
        return { valid: !1 };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  } else
    return r === Y.date && s === Y.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Bs extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), i = (n, a) => {
      if (Yn(n) || Yn(a))
        return ae;
      const o = Xn(n.value, a.value);
      return o.valid ? ((Jn(n) || Jn(a)) && r.dirty(), { status: r.value, value: o.data }) : (X(s, {
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
    ]).then(([n, a]) => i(n, a)) : i(this._def.left._parseSync({
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
Bs.create = (t, e, r) => new Bs({
  left: t,
  right: e,
  typeName: ie.ZodIntersection,
  ...de(r)
});
class or extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.array)
      return X(s, {
        code: V.invalid_type,
        expected: Y.array,
        received: s.parsedType
      }), ae;
    if (s.data.length < this._def.items.length)
      return X(s, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && s.data.length > this._def.items.length && (X(s, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const n = [...s.data].map((a, o) => {
      const h = this._def.items[o] || this._def.rest;
      return h ? h._parse(new nr(s, a, s.path, o)) : null;
    }).filter((a) => !!a);
    return s.common.async ? Promise.all(n).then((a) => Et.mergeArray(r, a)) : Et.mergeArray(r, n);
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
class Ks extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.object)
      return X(s, {
        code: V.invalid_type,
        expected: Y.object,
        received: s.parsedType
      }), ae;
    const i = [], n = this._def.keyType, a = this._def.valueType;
    for (const o in s.data)
      i.push({
        key: n._parse(new nr(s, o, s.path, o)),
        value: a._parse(new nr(s, s.data[o], s.path, o))
      });
    return s.common.async ? Et.mergeObjectAsync(r, i) : Et.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof ge ? new Ks({
      keyType: e,
      valueType: r,
      typeName: ie.ZodRecord,
      ...de(s)
    }) : new Ks({
      keyType: Ht.create(),
      valueType: e,
      typeName: ie.ZodRecord,
      ...de(r)
    });
  }
}
class $i extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.map)
      return X(s, {
        code: V.invalid_type,
        expected: Y.map,
        received: s.parsedType
      }), ae;
    const i = this._def.keyType, n = this._def.valueType, a = [...s.data.entries()].map(([o, h], l) => ({
      key: i._parse(new nr(s, o, s.path, [l, "key"])),
      value: n._parse(new nr(s, h, s.path, [l, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const h of a) {
          const l = await h.key, d = await h.value;
          if (l.status === "aborted" || d.status === "aborted")
            return ae;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const h of a) {
        const l = h.key, d = h.value;
        if (l.status === "aborted" || d.status === "aborted")
          return ae;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
$i.create = (t, e, r) => new $i({
  valueType: e,
  keyType: t,
  typeName: ie.ZodMap,
  ...de(r)
});
class Zr extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Y.set)
      return X(s, {
        code: V.invalid_type,
        expected: Y.set,
        received: s.parsedType
      }), ae;
    const i = this._def;
    i.minSize !== null && s.data.size < i.minSize.value && (X(s, {
      code: V.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && s.data.size > i.maxSize.value && (X(s, {
      code: V.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const n = this._def.valueType;
    function a(h) {
      const l = /* @__PURE__ */ new Set();
      for (const d of h) {
        if (d.status === "aborted")
          return ae;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...s.data.values()].map((h, l) => n._parse(new nr(s, h, s.path, l)));
    return s.common.async ? Promise.all(o).then((h) => a(h)) : a(o);
  }
  min(e, r) {
    return new Zr({
      ...this._def,
      minSize: { value: e, message: re.toString(r) }
    });
  }
  max(e, r) {
    return new Zr({
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
Zr.create = (t, e) => new Zr({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ie.ZodSet,
  ...de(e)
});
class ds extends ge {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.function)
      return X(r, {
        code: V.invalid_type,
        expected: Y.function,
        received: r.parsedType
      }), ae;
    function s(o, h) {
      return Pi({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ri(),
          $s
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: h
        }
      });
    }
    function i(o, h) {
      return Pi({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ri(),
          $s
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: h
        }
      });
    }
    const n = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof gs ? Tt(async (...o) => {
      const h = new Zt([]), l = await this._def.args.parseAsync(o, n).catch((y) => {
        throw h.addIssue(s(o, y)), h;
      }), d = await a(...l);
      return await this._def.returns._def.type.parseAsync(d, n).catch((y) => {
        throw h.addIssue(i(d, y)), h;
      });
    }) : Tt((...o) => {
      const h = this._def.args.safeParse(o, n);
      if (!h.success)
        throw new Zt([s(o, h.error)]);
      const l = a(...h.data), d = this._def.returns.safeParse(l, n);
      if (!d.success)
        throw new Zt([i(l, d.error)]);
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
    return new ds({
      ...this._def,
      args: or.create(e).rest(Wr.create())
    });
  }
  returns(e) {
    return new ds({
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
    return new ds({
      args: e || or.create([]).rest(Wr.create()),
      returns: r || Wr.create(),
      typeName: ie.ZodFunction,
      ...de(s)
    });
  }
}
class Vs extends ge {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Vs.create = (t, e) => new Vs({
  getter: t,
  typeName: ie.ZodLazy,
  ...de(e)
});
class Ws extends ge {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return X(r, {
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
Ws.create = (t, e) => new Ws({
  value: t,
  typeName: ie.ZodLiteral,
  ...de(e)
});
function el(t, e) {
  return new Tr({
    values: t,
    typeName: ie.ZodEnum,
    ...de(e)
  });
}
class Tr extends ge {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return X(r, {
        expected: Te.joinValues(s),
        received: r.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return X(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: s
      }), ae;
    }
    return Tt(e.data);
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
    return Tr.create(e);
  }
  exclude(e) {
    return Tr.create(this.options.filter((r) => !e.includes(r)));
  }
}
Tr.create = el;
class Hs extends ge {
  _parse(e) {
    const r = Te.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== Y.string && s.parsedType !== Y.number) {
      const i = Te.objectValues(r);
      return X(s, {
        expected: Te.joinValues(i),
        received: s.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (r.indexOf(e.data) === -1) {
      const i = Te.objectValues(r);
      return X(s, {
        received: s.data,
        code: V.invalid_enum_value,
        options: i
      }), ae;
    }
    return Tt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Hs.create = (t, e) => new Hs({
  values: t,
  typeName: ie.ZodNativeEnum,
  ...de(e)
});
class gs extends ge {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.promise && r.common.async === !1)
      return X(r, {
        code: V.invalid_type,
        expected: Y.promise,
        received: r.parsedType
      }), ae;
    const s = r.parsedType === Y.promise ? r.data : Promise.resolve(r.data);
    return Tt(s.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
gs.create = (t, e) => new gs({
  type: t,
  typeName: ie.ZodPromise,
  ...de(e)
});
class Yt extends ge {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ie.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const a = i.transform(s.data);
      return s.common.async ? Promise.resolve(a).then((o) => this._def.schema._parseAsync({
        data: o,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: a,
        path: s.path,
        parent: s
      });
    }
    const n = {
      addIssue: (a) => {
        X(s, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), i.type === "refinement") {
      const a = (o) => {
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
        return o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (s.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!Li(a))
          return a;
        const o = i.transform(a.value, n);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((a) => Li(a) ? Promise.resolve(i.transform(a.value, n)).then((o) => ({ status: r.value, value: o })) : a);
    Te.assertNever(i);
  }
}
Yt.create = (t, e, r) => new Yt({
  schema: t,
  typeName: ie.ZodEffects,
  effect: e,
  ...de(r)
});
Yt.createWithPreprocess = (t, e, r) => new Yt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ie.ZodEffects,
  ...de(r)
});
class yr extends ge {
  _parse(e) {
    return this._getType(e) === Y.undefined ? Tt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (t, e) => new yr({
  innerType: t,
  typeName: ie.ZodOptional,
  ...de(e)
});
class Gr extends ge {
  _parse(e) {
    return this._getType(e) === Y.null ? Tt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Gr.create = (t, e) => new Gr({
  innerType: t,
  typeName: ie.ZodNullable,
  ...de(e)
});
class Zs extends ge {
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
Zs.create = (t, e) => new Zs({
  innerType: t,
  typeName: ie.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...de(e)
});
class ji extends ge {
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
    return Fi(i) ? i.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Zt(s.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Zt(s.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ji.create = (t, e) => new ji({
  innerType: t,
  typeName: ie.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...de(e)
});
class ki extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.nan) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: V.invalid_type,
        expected: Y.nan,
        received: s.parsedType
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
}
ki.create = (t) => new ki({
  typeName: ie.ZodNaN,
  ...de(t)
});
const eb = Symbol("zod_brand");
class tl extends ge {
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
class si extends ge {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return n.status === "aborted" ? ae : n.status === "dirty" ? (r.dirty(), Qu(n.value)) : this._def.out._parseAsync({
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
    return new si({
      in: e,
      out: r,
      typeName: ie.ZodPipeline
    });
  }
}
const rl = (t, e = {}, r) => t ? ps.create().superRefine((s, i) => {
  var n, a;
  if (!t(s)) {
    const o = typeof e == "function" ? e(s) : e, h = (a = (n = o.fatal) !== null && n !== void 0 ? n : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...l, fatal: h });
  }
}) : ps.create(), tb = {
  object: ze.lazycreate
};
var ie;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ie || (ie = {}));
const rb = (t, e = {
  message: `Input not instance of ${t.name}`
}) => rl((r) => r instanceof t, e), sl = Ht.create, il = Or.create, sb = ki.create, ib = Cr.create, nl = js.create, nb = Hr.create, ob = Mi.create, ab = ks.create, cb = zs.create, ub = ps.create, lb = Wr.create, hb = mr.create, db = Ui.create, fb = Gt.create, pb = ze.create, gb = ze.strictCreate, yb = qs.create, mb = tn.create, vb = Bs.create, wb = or.create, bb = Ks.create, _b = $i.create, Eb = Zr.create, Sb = ds.create, xb = Vs.create, Db = Ws.create, Ib = Tr.create, Ob = Hs.create, Cb = gs.create, Ic = Yt.create, Tb = yr.create, Nb = Gr.create, Ab = Yt.createWithPreprocess, Rb = si.create, Pb = () => sl().optional(), Lb = () => il().optional(), Fb = () => nl().optional(), Mb = {
  string: (t) => Ht.create({ ...t, coerce: !0 }),
  number: (t) => Or.create({ ...t, coerce: !0 }),
  boolean: (t) => js.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Cr.create({ ...t, coerce: !0 }),
  date: (t) => Hr.create({ ...t, coerce: !0 })
}, Ub = ae;
var Xt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: $s,
  setErrorMap: zw,
  getErrorMap: Ri,
  makeIssue: Pi,
  EMPTY_PATH: qw,
  addIssueToContext: X,
  ParseStatus: Et,
  INVALID: ae,
  DIRTY: Qu,
  OK: Tt,
  isAborted: Yn,
  isDirty: Jn,
  isValid: Li,
  isAsync: Fi,
  get util() {
    return Te;
  },
  get objectUtil() {
    return Gn;
  },
  ZodParsedType: Y,
  getParsedType: xr,
  ZodType: ge,
  ZodString: Ht,
  ZodNumber: Or,
  ZodBigInt: Cr,
  ZodBoolean: js,
  ZodDate: Hr,
  ZodSymbol: Mi,
  ZodUndefined: ks,
  ZodNull: zs,
  ZodAny: ps,
  ZodUnknown: Wr,
  ZodNever: mr,
  ZodVoid: Ui,
  ZodArray: Gt,
  ZodObject: ze,
  ZodUnion: qs,
  ZodDiscriminatedUnion: tn,
  ZodIntersection: Bs,
  ZodTuple: or,
  ZodRecord: Ks,
  ZodMap: $i,
  ZodSet: Zr,
  ZodFunction: ds,
  ZodLazy: Vs,
  ZodLiteral: Ws,
  ZodEnum: Tr,
  ZodNativeEnum: Hs,
  ZodPromise: gs,
  ZodEffects: Yt,
  ZodTransformer: Yt,
  ZodOptional: yr,
  ZodNullable: Gr,
  ZodDefault: Zs,
  ZodCatch: ji,
  ZodNaN: ki,
  BRAND: eb,
  ZodBranded: tl,
  ZodPipeline: si,
  custom: rl,
  Schema: ge,
  ZodSchema: ge,
  late: tb,
  get ZodFirstPartyTypeKind() {
    return ie;
  },
  coerce: Mb,
  any: ub,
  array: fb,
  bigint: ib,
  boolean: nl,
  date: nb,
  discriminatedUnion: mb,
  effect: Ic,
  enum: Ib,
  function: Sb,
  instanceof: rb,
  intersection: vb,
  lazy: xb,
  literal: Db,
  map: _b,
  nan: sb,
  nativeEnum: Ob,
  never: hb,
  null: cb,
  nullable: Nb,
  number: il,
  object: pb,
  oboolean: Fb,
  onumber: Lb,
  optional: Tb,
  ostring: Pb,
  pipeline: Rb,
  preprocess: Ab,
  promise: Cb,
  record: bb,
  set: Eb,
  strictObject: gb,
  string: sl,
  symbol: ob,
  transformer: Ic,
  tuple: wb,
  undefined: ab,
  union: yb,
  unknown: lb,
  void: db,
  NEVER: Ub,
  ZodIssueCode: V,
  quotelessJson: kw,
  ZodError: Zt
});
const ol = /^aleo1[a-z0-9]{58}$/i, $b = /^AViewKey1[a-z0-9]{44}$/i, jb = /^APrivateKey1[a-z0-9]{47}$/i, kb = /^at1[a-z0-9]{58}$/i, zb = /^\d+field$/, qb = /^\d+u32$/, Bb = /^\d+u64$/, O_ = Xt.string().regex(ol), C_ = Xt.string().regex($b), T_ = Xt.string().regex(jb), N_ = Xt.string().regex(kb), A_ = Xt.string().regex(zb), R_ = Xt.string().regex(qb), P_ = Xt.string().regex(Bb);
var Oc;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Oc || (Oc = {}));
var Qn;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Qn || (Qn = {}));
var eo;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(eo || (eo = {}));
var to;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(to || (to = {}));
var ro;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(ro || (ro = {}));
var Cc;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Cc || (Cc = {}));
const L_ = Xt.nativeEnum(Qn), F_ = Xt.nativeEnum(eo), M_ = Xt.nativeEnum(ro), U_ = Xt.nativeEnum(to), $_ = async ({
  message: t,
  address: e
}) => {
  const r = await zt(), s = await (r == null ? void 0 : r.getSession());
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
          address: ol.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (i) {
    return console.error("signature error", i), { error: i.message };
  }
}, j_ = 20;
var so = { exports: {} }, xn, Tc;
function Kb() {
  if (Tc)
    return xn;
  Tc = 1;
  var t = 1e3, e = t * 60, r = e * 60, s = r * 24, i = s * 7, n = s * 365.25;
  xn = function(d, f) {
    f = f || {};
    var y = typeof d;
    if (y === "string" && d.length > 0)
      return a(d);
    if (y === "number" && isFinite(d))
      return f.long ? h(d) : o(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(d)
    );
  };
  function a(d) {
    if (d = String(d), !(d.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        d
      );
      if (f) {
        var y = parseFloat(f[1]), w = (f[2] || "ms").toLowerCase();
        switch (w) {
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
  function l(d, f, y, w) {
    var _ = f >= y * 1.5;
    return Math.round(d / y) + " " + w + (_ ? "s" : "");
  }
  return xn;
}
function Vb(t) {
  r.debug = r, r.default = r, r.coerce = h, r.disable = n, r.enable = i, r.enabled = a, r.humanize = Kb(), r.destroy = l, Object.keys(t).forEach((d) => {
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
    let f, y = null, w, _;
    function O(...L) {
      if (!O.enabled)
        return;
      const M = O, S = Number(/* @__PURE__ */ new Date()), C = S - (f || S);
      M.diff = C, M.prev = f, M.curr = S, f = S, L[0] = r.coerce(L[0]), typeof L[0] != "string" && L.unshift("%O");
      let v = 0;
      L[0] = L[0].replace(/%([a-zA-Z%])/g, (g, c) => {
        if (g === "%%")
          return "%";
        v++;
        const p = r.formatters[c];
        if (typeof p == "function") {
          const P = L[v];
          g = p.call(M, P), L.splice(v, 1), v--;
        }
        return g;
      }), r.formatArgs.call(M, L), (M.log || r.log).apply(M, L);
    }
    return O.namespace = d, O.useColors = r.useColors(), O.color = r.selectColor(d), O.extend = s, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (w !== r.namespaces && (w = r.namespaces, _ = r.enabled(d)), _),
      set: (L) => {
        y = L;
      }
    }), typeof r.init == "function" && r.init(O), O;
  }
  function s(d, f) {
    const y = r(this.namespace + (typeof f > "u" ? ":" : f) + d);
    return y.log = this.log, y;
  }
  function i(d) {
    r.save(d), r.namespaces = d, r.names = [], r.skips = [];
    let f;
    const y = (typeof d == "string" ? d : "").split(/[\s,]+/), w = y.length;
    for (f = 0; f < w; f++)
      y[f] && (d = y[f].replace(/\*/g, ".*?"), d[0] === "-" ? r.skips.push(new RegExp("^" + d.slice(1) + "$")) : r.names.push(new RegExp("^" + d + "$")));
  }
  function n() {
    const d = [
      ...r.names.map(o),
      ...r.skips.map(o).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), d;
  }
  function a(d) {
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
var Wb = Vb;
(function(t, e) {
  e.formatArgs = s, e.save = i, e.load = n, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
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
  function a() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Wb(e);
  const { formatters: o } = t.exports;
  o.j = function(h) {
    try {
      return JSON.stringify(h);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(so, so.exports);
var Hb = so.exports;
const Zb = /* @__PURE__ */ zi(Hb), Gb = Zb("wallet:sdk");
Gb.enabled = !0;
export {
  Gb as $,
  Cc as A,
  y_ as B,
  m_ as C,
  v_ as D,
  eo as E,
  w_ as F,
  b_ as G,
  __ as H,
  E_ as I,
  S_ as J,
  x_ as K,
  D_ as L,
  I_ as M,
  ro as N,
  $_ as O,
  j_ as P,
  Zu as Q,
  th as R,
  en as S,
  Nc as T,
  Gu as U,
  to as V,
  Yu as W,
  mw as X,
  vw as Y,
  Sc as Z,
  p_ as _,
  bt as a,
  jw as a0,
  Rr as a1,
  Ju as a2,
  g_ as a3,
  zt as a4,
  Qn as b,
  ol as c,
  zb as d,
  jb as e,
  kb as f,
  qb as g,
  Bb as h,
  $b as i,
  F_ as j,
  L_ as k,
  A_ as l,
  M_ as m,
  Zo as n,
  Jb as o,
  Wt as p,
  T_ as q,
  N_ as r,
  nn as s,
  Yb as t,
  R_ as u,
  P_ as v,
  C_ as w,
  U_ as x,
  fs as y,
  O_ as z
};
