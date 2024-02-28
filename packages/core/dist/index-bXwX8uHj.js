const Vl = Symbol(), $o = Object.getPrototypeOf, Sn = /* @__PURE__ */ new WeakMap(), Hl = (t) => t && (Sn.has(t) ? Sn.get(t) : $o(t) === Object.prototype || $o(t) === Array.prototype), Wl = (t) => Hl(t) && t[Vl] || null, jo = (t, e = !0) => {
  Sn.set(t, e);
};
var Es = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const tn = (t) => typeof t == "object" && t !== null, Er = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakSet(), Zl = (t = Object.is, e = (l, d) => new Proxy(l, d), r = (l) => tn(l) && !ls.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), i = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, s = /* @__PURE__ */ new WeakMap(), n = (l, d, f = i) => {
  const y = s.get(l);
  if ((y == null ? void 0 : y[0]) === d)
    return y[1];
  const b = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return jo(b, !0), s.set(l, [d, b]), Reflect.ownKeys(l).forEach((_) => {
    if (Object.getOwnPropertyDescriptor(b, _))
      return;
    const O = Reflect.get(l, _), L = {
      value: O,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (ls.has(O))
      jo(O, !1);
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
    Object.defineProperty(b, _, L);
  }), Object.preventExtensions(b);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], h = (l) => {
  if (!tn(l))
    throw new Error("object required");
  const d = a.get(l);
  if (d)
    return d;
  let f = o[0];
  const y = /* @__PURE__ */ new Set(), b = (P, R = ++o[0]) => {
    f !== R && (f = R, y.forEach((F) => F(P, R)));
  };
  let _ = o[1];
  const O = (P = ++o[1]) => (_ !== P && !y.size && (_ = P, M.forEach(([R]) => {
    const F = R[1](P);
    F > f && (f = F);
  })), f), L = (P) => (R, F) => {
    const B = [...R];
    B[1] = [P, ...B[1]], b(B, F);
  }, M = /* @__PURE__ */ new Map(), S = (P, R) => {
    if ((Es ? "production" : void 0) !== "production" && M.has(P))
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
    if ((Es ? "production" : void 0) !== "production" && B)
      throw new Error("remove already exists");
    const x = F[3](L(G));
    M.set(G, [F, x]);
  }), () => {
    y.delete(P), y.size === 0 && M.forEach(([F, B], G) => {
      B && (B(), M.set(G, [F]));
    });
  }), w = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), c = e(w, {
    deleteProperty(P, R) {
      const F = Reflect.get(P, R);
      C(R);
      const B = Reflect.deleteProperty(P, R);
      return B && b(["delete", [R], F]), B;
    },
    set(P, R, F, B) {
      const G = Reflect.has(P, R), x = Reflect.get(P, R, B);
      if (G && (t(x, F) || a.has(F) && t(x, a.get(F))))
        return !0;
      C(R), tn(F) && (F = Wl(F) || F);
      let A = F;
      if (F instanceof Promise)
        F.then((Z) => {
          F.status = "fulfilled", F.value = Z, b(["resolve", [R], Z]);
        }).catch((Z) => {
          F.status = "rejected", F.reason = Z, b(["reject", [R], Z]);
        });
      else {
        !Er.has(F) && r(F) && (A = h(F));
        const Z = !ls.has(A) && Er.get(A);
        Z && S(R, Z);
      }
      return Reflect.set(P, R, A, B), b(["set", [R], F, x]), !0;
    }
  });
  a.set(l, c);
  const p = [
    w,
    O,
    n,
    v
  ];
  return Er.set(c, p), Reflect.ownKeys(l).forEach((P) => {
    const R = Object.getOwnPropertyDescriptor(
      l,
      P
    );
    "value" in R && (c[P] = l[P], delete R.value, delete R.writable), Object.defineProperty(w, P, R);
  }), c;
}) => [
  // public functions
  h,
  // shared state
  Er,
  ls,
  // internal things
  t,
  e,
  r,
  i,
  s,
  n,
  a,
  o
], [Gl] = Zl();
function Tr(t = {}) {
  return Gl(t);
}
function Zr(t, e, r) {
  const i = Er.get(t);
  (Es ? "production" : void 0) !== "production" && !i && console.warn("Please use proxy object");
  let s;
  const n = [], a = i[3];
  let o = !1;
  const l = a((d) => {
    if (n.push(d), r) {
      e(n.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, o && e(n.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, l();
  };
}
function Yl(t, e) {
  const r = Er.get(t);
  (Es ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [i, s, n] = r;
  return n(i, s(), e);
}
const ct = Tr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Cc = { state: ct, subscribe(t) {
  return Zr(ct, () => t(ct));
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
} }, wt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return wt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return wt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (wt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let i = t;
  i.includes("://") || (i = t.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const s = encodeURIComponent(e);
  return `${i}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!wt.isHttpUrl(t))
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
    localStorage.setItem(wt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(wt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(wt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(wt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Cc.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Jl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), yt = Tr({ enabled: Jl, userSessionId: "", events: [], connectedWalletId: void 0 }), Xl = { state: yt, subscribe(t) {
  return Zr(yt.events, () => t(Yl(yt.events[yt.events.length - 1])));
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
} }, er = Tr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Ht = { state: er, subscribe(t) {
  return Zr(er, () => t(er));
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
} }, hs = Tr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), di = { state: hs, subscribe(t) {
  return Zr(hs, () => t(hs));
}, setConfig(t) {
  var e, r;
  Xl.initialize(), Ht.setChains(t.chains), Ht.setIsAuth(!!t.enableAuthMode), Ht.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Ht.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), wt.setModalVersionInStorage(), Object.assign(hs, t);
} };
var Ql = Object.defineProperty, ko = Object.getOwnPropertySymbols, eh = Object.prototype.hasOwnProperty, th = Object.prototype.propertyIsEnumerable, zo = (t, e, r) => e in t ? Ql(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, rh = (t, e) => {
  for (var r in e || (e = {}))
    eh.call(e, r) && zo(t, r, e[r]);
  if (ko)
    for (var r of ko(e))
      th.call(e, r) && zo(t, r, e[r]);
  return t;
};
const xn = "https://explorer-api.walletconnect.com", Dn = "wcm", In = "js-2.6.2";
async function ds(t, e) {
  const r = rh({ sdkType: Dn, sdkVersion: In }, e), i = new URL(t, xn);
  return i.searchParams.append("projectId", di.state.projectId), Object.entries(r).forEach(([s, n]) => {
    n && i.searchParams.append(s, String(n));
  }), (await fetch(i)).json();
}
const Fr = { async getDesktopListings(t) {
  return ds("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return ds("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return ds("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return ds("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${xn}/w3m/v1/getWalletImage/${t}?projectId=${di.state.projectId}&sdkType=${Dn}&sdkVersion=${In}`;
}, getAssetImageUrl(t) {
  return `${xn}/w3m/v1/getAssetImage/${t}?projectId=${di.state.projectId}&sdkType=${Dn}&sdkVersion=${In}`;
} };
var ih = Object.defineProperty, qo = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, nh = Object.prototype.propertyIsEnumerable, Bo = (t, e, r) => e in t ? ih(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oh = (t, e) => {
  for (var r in e || (e = {}))
    sh.call(e, r) && Bo(t, r, e[r]);
  if (qo)
    for (var r of qo(e))
      nh.call(e, r) && Bo(t, r, e[r]);
  return t;
};
const Ko = wt.isMobile(), tr = Tr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Vw = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = di.state;
  if (t === "NONE" || e === "ALL" && !t)
    return tr.recomendedWallets;
  if (wt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: i } = await Fr.getAllListings(r), s = Object.values(i);
    s.sort((n, a) => {
      const o = t.indexOf(n.id), h = t.indexOf(a.id);
      return o - h;
    }), tr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: i } = Ht.state, s = r == null ? void 0 : r.join(","), n = wt.isArray(e), a = { page: 1, sdks: i ? "auth_v1" : void 0, entries: wt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: n ? e.join(",") : void 0 }, { listings: o } = Ko ? await Fr.getMobileListings(a) : await Fr.getDesktopListings(a);
    tr.recomendedWallets = Object.values(o);
  }
  return tr.recomendedWallets;
}, async getWallets(t) {
  const e = oh({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = di.state, { recomendedWallets: s } = tr;
  if (i === "ALL")
    return tr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : wt.isArray(r) && (e.excludedIds = r.join(",")), wt.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Ht.state.isAuth && (e.sdks = "auth_v1");
  const { page: n, search: a } = t, { listings: o, total: h } = Ko ? await Fr.getMobileListings(e) : await Fr.getDesktopListings(e), l = Object.values(o), d = a ? "search" : "wallets";
  return tr[d] = { listings: [...tr[d].listings, ...l], total: h, page: n ?? 1 }, { listings: l, total: h };
}, getWalletImageUrl(t) {
  return Fr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Fr.getAssetImageUrl(t);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, ei = Tr({ open: !1 }), rn = { state: ei, subscribe(t) {
  return Zr(ei, () => t(ei));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: i } = Ht.state;
    if (wt.removeWalletConnectDeepLink(), Ht.setWalletConnectUri(t == null ? void 0 : t.uri), Ht.setChains(t == null ? void 0 : t.chains), Cc.reset("ConnectWallet"), r && i)
      ei.open = !0, e();
    else {
      const s = setInterval(() => {
        const n = Ht.state;
        n.isUiLoaded && n.isDataLoaded && (clearInterval(s), ei.open = !0, e());
      }, 200);
    }
  });
}, close() {
  ei.open = !1;
} };
var ah = Object.defineProperty, Vo = Object.getOwnPropertySymbols, ch = Object.prototype.hasOwnProperty, uh = Object.prototype.propertyIsEnumerable, Ho = (t, e, r) => e in t ? ah(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, lh = (t, e) => {
  for (var r in e || (e = {}))
    ch.call(e, r) && Ho(t, r, e[r]);
  if (Vo)
    for (var r of Vo(e))
      uh.call(e, r) && Ho(t, r, e[r]);
  return t;
};
function hh() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const xi = Tr({ themeMode: hh() ? "dark" : "light" }), Wo = { state: xi, subscribe(t) {
  return Zr(xi, () => t(xi));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (xi.themeMode = e), r && (xi.themeVariables = lh({}, r));
} }, Mr = Tr({ open: !1, message: "", variant: "success" }), Hw = { state: Mr, subscribe(t) {
  return Zr(Mr, () => t(Mr));
}, openToast(t, e) {
  Mr.open = !0, Mr.message = t, Mr.variant = e;
}, closeToast() {
  Mr.open = !1;
} };
let dh = class {
  constructor(e) {
    this.openModal = rn.open, this.closeModal = rn.close, this.subscribeModal = rn.subscribe, this.setTheme = Wo.setThemeConfig, Wo.setThemeConfig(e), di.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-Blqt_wNo.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Ht.setIsUiLoaded(!0);
    }
  }
};
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ks(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function zs(t) {
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
var ro = { exports: {} }, ci = typeof Reflect == "object" ? Reflect : null, Zo = ci && typeof ci.apply == "function" ? ci.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, ms;
ci && typeof ci.ownKeys == "function" ? ms = ci.ownKeys : Object.getOwnPropertySymbols ? ms = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : ms = function(e) {
  return Object.getOwnPropertyNames(e);
};
function fh(t) {
  console && console.warn && console.warn(t);
}
var Tc = Number.isNaN || function(e) {
  return e !== e;
};
function Le() {
  Le.init.call(this);
}
ro.exports = Le;
ro.exports.once = mh;
Le.EventEmitter = Le;
Le.prototype._events = void 0;
Le.prototype._eventsCount = 0;
Le.prototype._maxListeners = void 0;
var Go = 10;
function qs(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Le, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Go;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Tc(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Go = t;
  }
});
Le.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Le.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Tc(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Nc(t) {
  return t._maxListeners === void 0 ? Le.defaultMaxListeners : t._maxListeners;
}
Le.prototype.getMaxListeners = function() {
  return Nc(this);
};
Le.prototype.emit = function(e) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var s = e === "error", n = this._events;
  if (n !== void 0)
    s = s && n.error === void 0;
  else if (!s)
    return !1;
  if (s) {
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
    Zo(h, this, r);
  else
    for (var l = h.length, d = Fc(h, l), i = 0; i < l; ++i)
      Zo(d[i], this, r);
  return !0;
};
function Ac(t, e, r, i) {
  var s, n, a;
  if (qs(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), n = t._events), a = n[e]), a === void 0)
    a = n[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = n[e] = i ? [r, a] : [a, r] : i ? a.unshift(r) : a.push(r), s = Nc(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, fh(o);
  }
  return t;
}
Le.prototype.addListener = function(e, r) {
  return Ac(this, e, r, !1);
};
Le.prototype.on = Le.prototype.addListener;
Le.prototype.prependListener = function(e, r) {
  return Ac(this, e, r, !0);
};
function ph() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Rc(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = ph.bind(i);
  return s.listener = r, i.wrapFn = s, s;
}
Le.prototype.once = function(e, r) {
  return qs(r), this.on(e, Rc(this, e, r)), this;
};
Le.prototype.prependOnceListener = function(e, r) {
  return qs(r), this.prependListener(e, Rc(this, e, r)), this;
};
Le.prototype.removeListener = function(e, r) {
  var i, s, n, a, o;
  if (qs(r), s = this._events, s === void 0)
    return this;
  if (i = s[e], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || r));
  else if (typeof i != "function") {
    for (n = -1, a = i.length - 1; a >= 0; a--)
      if (i[a] === r || i[a].listener === r) {
        o = i[a].listener, n = a;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? i.shift() : gh(i, n), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Le.prototype.off = Le.prototype.removeListener;
Le.prototype.removeAllListeners = function(e) {
  var r, i, s;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(i), a;
    for (s = 0; s < n.length; ++s)
      a = n[s], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function Pc(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var s = i[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? yh(s) : Fc(s, s.length);
}
Le.prototype.listeners = function(e) {
  return Pc(this, e, !0);
};
Le.prototype.rawListeners = function(e) {
  return Pc(this, e, !1);
};
Le.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Lc.call(t, e);
};
Le.prototype.listenerCount = Lc;
function Lc(t) {
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
  return this._eventsCount > 0 ? ms(this._events) : [];
};
function Fc(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function gh(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function yh(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function mh(t, e) {
  return new Promise(function(r, i) {
    function s(a) {
      t.removeListener(e, n), i(a);
    }
    function n() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Mc(t, e, n, { once: !0 }), e !== "error" && vh(t, s, { once: !0 });
  });
}
function vh(t, e, r) {
  typeof t.on == "function" && Mc(t, "error", e, r);
}
function Mc(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(n) {
      i.once && t.removeEventListener(e, s), r(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Jt = ro.exports;
const io = /* @__PURE__ */ ks(Jt), bh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, wh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, _h = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Eh(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Sh(t);
    return;
  }
  return e;
}
function Sh(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function fs(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.endsWith('"') && !t.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const i = r.toLowerCase();
    if (i === "true")
      return !0;
    if (i === "false")
      return !1;
    if (i === "undefined")
      return;
    if (i === "null")
      return null;
    if (i === "nan")
      return Number.NaN;
    if (i === "infinity")
      return Number.POSITIVE_INFINITY;
    if (i === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!_h.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (bh.test(t) || wh.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Eh);
    }
    return JSON.parse(t);
  } catch (i) {
    if (e.strict)
      throw i;
    return t;
  }
}
function xh(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function ut(t, ...e) {
  try {
    return xh(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Dh(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Ih(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function vs(t) {
  if (Dh(t))
    return String(t);
  if (Ih(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return vs(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Uc() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const On = "base64:";
function Oh(t) {
  if (typeof t == "string")
    return t;
  Uc();
  const e = Buffer.from(t).toString("base64");
  return On + e;
}
function Ch(t) {
  return typeof t != "string" || !t.startsWith(On) ? t : (Uc(), Buffer.from(t.slice(On.length), "base64"));
}
function Nt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Th(...t) {
  return Nt(t.join(":"));
}
function ps(t) {
  return t = Nt(t), t ? t + ":" : "";
}
const Nh = "memory", Ah = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Nh,
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
function Rh(t = {}) {
  const e = {
    mounts: { "": t.driver || Ah() },
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
  }, i = (l, d) => e.mountpoints.filter(
    (f) => f.startsWith(l) || d && l.startsWith(f)
  ).map((f) => ({
    relativeBase: l.length > f.length ? l.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (l, d) => {
    if (e.watching) {
      d = Nt(d);
      for (const f of e.watchListeners)
        f(l, d);
    }
  }, n = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const l in e.mounts)
        e.unwatch[l] = await Yo(
          e.mounts[l],
          s,
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
    const y = /* @__PURE__ */ new Map(), b = (_) => {
      let O = y.get(_.base);
      return O || (O = {
        driver: _.driver,
        base: _.base,
        items: []
      }, y.set(_.base, O)), O;
    };
    for (const _ of l) {
      const O = typeof _ == "string", L = Nt(O ? _ : _.key), M = O ? void 0 : _.value, S = O || !_.options ? d : { ...d, ..._.options }, C = r(L);
      b(C).items.push({
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
        (b) => fs(b)
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
        (y) => y.map((b) => ({
          key: Th(f.base, b.key),
          value: fs(b.value)
        }))
      ) : Promise.all(
        f.items.map((y) => ut(
          f.driver.getItem,
          y.relativeKey,
          y.options
        ).then((b) => ({
          key: y.key,
          value: fs(b)
        })))
      ));
    },
    getItemRaw(l, d = {}) {
      l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      return y.getItemRaw ? ut(y.getItemRaw, f, d) : ut(y.getItem, f, d).then(
        (b) => Ch(b)
      );
    },
    async setItem(l, d, f = {}) {
      if (d === void 0)
        return h.removeItem(l);
      l = Nt(l);
      const { relativeKey: y, driver: b } = r(l);
      b.setItem && (await ut(b.setItem, y, vs(d), f), b.watch || s("update", l));
    },
    async setItems(l, d) {
      await o(l, d, async (f) => {
        f.driver.setItems && await ut(
          f.driver.setItems,
          f.items.map((y) => ({
            key: y.relativeKey,
            value: vs(y.value),
            options: y.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((y) => ut(
            f.driver.setItem,
            y.relativeKey,
            vs(y.value),
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
        await ut(b.setItemRaw, y, d, f);
      else if (b.setItem)
        await ut(b.setItem, y, Oh(d), f);
      else
        return;
      b.watch || s("update", l);
    },
    async removeItem(l, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l);
      y.removeItem && (await ut(y.removeItem, f, d), (d.removeMeta || d.removeMata) && await ut(y.removeItem, f + "$", d), y.watch || s("remove", l));
    },
    // Meta
    async getMeta(l, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), l = Nt(l);
      const { relativeKey: f, driver: y } = r(l), b = /* @__PURE__ */ Object.create(null);
      if (y.getMeta && Object.assign(b, await ut(y.getMeta, f, d)), !d.nativeOnly) {
        const _ = await ut(
          y.getItem,
          f + "$",
          d
        ).then((O) => fs(O));
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
      l = ps(l);
      const f = i(l, !0);
      let y = [];
      const b = [];
      for (const _ of f) {
        const L = (await ut(
          _.driver.getKeys,
          _.relativeBase,
          d
        )).map((M) => _.mountpoint + Nt(M)).filter((M) => !y.some((S) => M.startsWith(S)));
        b.push(...L), y = [
          _.mountpoint,
          ...y.filter((M) => !M.startsWith(_.mountpoint))
        ];
      }
      return l ? b.filter((_) => _.startsWith(l) && !_.endsWith("$")) : b.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(l, d = {}) {
      l = ps(l), await Promise.all(
        i(l, !1).map(async (f) => {
          if (f.driver.clear)
            return ut(f.driver.clear, f.relativeBase, d);
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
        Object.values(e.mounts).map((l) => Jo(l))
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
      if (l = ps(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((f, y) => y.length - f.length)), e.mounts[l] = d, e.watching && Promise.resolve(Yo(d, s, l)).then((f) => {
        e.unwatch[l] = f;
      }).catch(console.error), h;
    },
    async unmount(l, d = !0) {
      l = ps(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && (e.unwatch[l](), delete e.unwatch[l]), d && await Jo(e.mounts[l]), e.mountpoints = e.mountpoints.filter((f) => f !== l), delete e.mounts[l]);
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
      return l = Nt(l), i(l, d.parents).map((y) => ({
        driver: y.driver,
        base: y.mountpoint
      }));
    }
  };
  return h;
}
function Yo(t, e, r) {
  return t.watch ? t.watch((i, s) => e(i, r + s)) : () => {
  };
}
async function Jo(t) {
  typeof t.dispose == "function" && await ut(t.dispose);
}
function Gr(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function $c(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const i = Gr(r);
  return (s, n) => i.then((a) => n(a.transaction(e, s).objectStore(e)));
}
let sn;
function Zi() {
  return sn || (sn = $c("keyval-store", "keyval")), sn;
}
function Xo(t, e = Zi()) {
  return e("readonly", (r) => Gr(r.get(t)));
}
function Ph(t, e, r = Zi()) {
  return r("readwrite", (i) => (i.put(e, t), Gr(i.transaction)));
}
function Lh(t, e = Zi()) {
  return e("readwrite", (r) => (r.delete(t), Gr(r.transaction)));
}
function Fh(t = Zi()) {
  return t("readwrite", (e) => (e.clear(), Gr(e.transaction)));
}
function Mh(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Gr(t.transaction);
}
function Uh(t = Zi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Gr(e.getAllKeys());
    const r = [];
    return Mh(e, (i) => r.push(i.key)).then(() => r);
  });
}
const $h = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), jh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Bs(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return jh(t);
  } catch {
    return t;
  }
}
function Gi(t) {
  return typeof t == "string" ? t : $h(t) || "";
}
const kh = "idb-keyval";
var zh = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let i;
  return t.dbName && t.storeName && (i = $c(t.dbName, t.storeName)), { name: kh, options: t, async hasItem(s) {
    return !(typeof await Xo(r(s), i) > "u");
  }, async getItem(s) {
    return await Xo(r(s), i) ?? null;
  }, setItem(s, n) {
    return Ph(r(s), n, i);
  }, removeItem(s) {
    return Lh(r(s), i);
  }, getKeys() {
    return Uh(i);
  }, clear() {
    return Fh(i);
  } };
};
const qh = "WALLET_CONNECT_V2_INDEXED_DB", Bh = "keyvaluestorage";
let Kh = class {
  constructor() {
    this.indexedDb = Rh({ driver: zh({ dbName: qh, storeName: Bh }) });
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
    await this.indexedDb.setItem(e, Gi(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bs = { exports: {} };
(function() {
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
  }), typeof nn < "u" && nn.localStorage ? bs.exports = nn.localStorage : typeof window < "u" && window.localStorage ? bs.exports = window.localStorage : bs.exports = new e();
})();
function Vh(t) {
  var e;
  return [t[0], Bs((e = t[1]) != null ? e : "")];
}
class Hh {
  constructor() {
    this.localStorage = bs.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Vh);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Bs(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Gi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Wh = "wc_storage_version", Qo = 1, Zh = async (t, e, r) => {
  const i = Wh, s = await e.getItem(i);
  if (s && s >= Qo) {
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
  await e.setItem(i, Qo), r(e), Gh(t, a);
}, Gh = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Yh = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Hh();
    this.storage = e;
    try {
      const r = new Kh();
      Zh(e, r, this.setInitialized);
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
var gi = {};
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
var Cn = function(t, e) {
  return Cn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var s in i)
      i.hasOwnProperty(s) && (r[s] = i[s]);
  }, Cn(t, e);
};
function Jh(t, e) {
  Cn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Tn = function() {
  return Tn = Object.assign || function(e) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tn.apply(this, arguments);
};
function Xh(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (r[i[s]] = t[i[s]]);
  return r;
}
function Qh(t, e, r, i) {
  var s = arguments.length, n = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, r, i);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, r, n) : a(e, r)) || n);
  return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function ed(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function td(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function rd(t, e, r, i) {
  function s(n) {
    return n instanceof r ? n : new r(function(a) {
      a(n);
    });
  }
  return new (r || (r = Promise))(function(n, a) {
    function o(d) {
      try {
        l(i.next(d));
      } catch (f) {
        a(f);
      }
    }
    function h(d) {
      try {
        l(i.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function l(d) {
      d.done ? n(d.value) : s(d.value).then(o, h);
    }
    l((i = i.apply(t, e || [])).next());
  });
}
function id(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, s, n, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(l) {
    return function(d) {
      return h([l, d]);
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
      } catch (d) {
        l = [6, d], s = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function sd(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function nd(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Nn(t) {
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
function jc(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var i = r.call(t), s, n = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; )
      n.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = i.return) && r.call(i);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return n;
}
function od() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(jc(arguments[e]));
  return t;
}
function ad() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), s = 0, e = 0; e < r; e++)
    for (var n = arguments[e], a = 0, o = n.length; a < o; a++, s++)
      i[s] = n[a];
  return i;
}
function Li(t) {
  return this instanceof Li ? (this.v = t, this) : new Li(t);
}
function cd(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), s, n = [];
  return s = {}, a("next"), a("throw"), a("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(y) {
    i[y] && (s[y] = function(b) {
      return new Promise(function(_, O) {
        n.push([y, b, _, O]) > 1 || o(y, b);
      });
    });
  }
  function o(y, b) {
    try {
      h(i[y](b));
    } catch (_) {
      f(n[0][3], _);
    }
  }
  function h(y) {
    y.value instanceof Li ? Promise.resolve(y.value.v).then(l, d) : f(n[0][2], y);
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
function ud(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, n) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: Li(t[s](a)), done: s === "return" } : n ? n(a) : a;
    } : n;
  }
}
function ld(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Nn == "function" ? Nn(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(n) {
    r[n] = t[n] && function(a) {
      return new Promise(function(o, h) {
        a = t[n](a), s(o, h, a.done, a.value);
      });
    };
  }
  function s(n, a, o, h) {
    Promise.resolve(h).then(function(l) {
      n({ value: l, done: o });
    }, a);
  }
}
function hd(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function dd(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function fd(t) {
  return t && t.__esModule ? t : { default: t };
}
function pd(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function gd(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Tn;
  },
  __asyncDelegator: ud,
  __asyncGenerator: cd,
  __asyncValues: ld,
  __await: Li,
  __awaiter: rd,
  __classPrivateFieldGet: pd,
  __classPrivateFieldSet: gd,
  __createBinding: sd,
  __decorate: Qh,
  __exportStar: nd,
  __extends: Jh,
  __generator: id,
  __importDefault: fd,
  __importStar: dd,
  __makeTemplateObject: hd,
  __metadata: td,
  __param: ed,
  __read: jc,
  __rest: Xh,
  __spread: od,
  __spreadArrays: ad,
  __values: Nn
}, Symbol.toStringTag, { value: "Module" })), ar = /* @__PURE__ */ zs(yd);
var Di = {}, te = {}, on = {}, Ii = {}, ea;
function md() {
  if (ea)
    return Ii;
  ea = 1, Object.defineProperty(Ii, "__esModule", { value: !0 }), Ii.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Ii.delay = t, Ii;
}
var Ur = {}, an = {}, $r = {}, ta;
function vd() {
  return ta || (ta = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.ONE_THOUSAND = $r.ONE_HUNDRED = void 0, $r.ONE_HUNDRED = 100, $r.ONE_THOUSAND = 1e3), $r;
}
var cn = {}, ra;
function bd() {
  return ra || (ra = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(cn)), cn;
}
var ia;
function kc() {
  return ia || (ia = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(vd(), t), e.__exportStar(bd(), t);
  }(an)), an;
}
var sa;
function wd() {
  if (sa)
    return Ur;
  sa = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.fromMiliseconds = Ur.toMiliseconds = void 0;
  const t = kc();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  Ur.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return Ur.fromMiliseconds = r, Ur;
}
var na;
function _d() {
  return na || (na = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = ar;
    e.__exportStar(md(), t), e.__exportStar(wd(), t);
  }(on)), on;
}
var ti = {}, oa;
function Ed() {
  if (oa)
    return ti;
  oa = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.Watch = void 0;
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
  return ti.Watch = t, ti.default = t, ti;
}
var un = {}, Oi = {}, aa;
function Sd() {
  if (aa)
    return Oi;
  aa = 1, Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.IWatch = void 0;
  class t {
  }
  return Oi.IWatch = t, Oi;
}
var ca;
function xd() {
  return ca || (ca = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Sd(), t);
  }(un)), un;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(_d(), t), e.__exportStar(Ed(), t), e.__exportStar(xd(), t), e.__exportStar(kc(), t);
})(te);
var ln = {}, Ci = {};
let Yr = class {
};
const Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Yr
}, Symbol.toStringTag, { value: "Module" })), Id = /* @__PURE__ */ zs(Dd);
var ua;
function Od() {
  if (ua)
    return Ci;
  ua = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.IHeartBeat = void 0;
  const t = Id;
  class e extends t.IEvents {
    constructor(i) {
      super();
    }
  }
  return Ci.IHeartBeat = e, Ci;
}
var la;
function zc() {
  return la || (la = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Od(), t);
  }(ln)), ln;
}
var hn = {}, jr = {}, ha;
function Cd() {
  if (ha)
    return jr;
  ha = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.HEARTBEAT_EVENTS = jr.HEARTBEAT_INTERVAL = void 0;
  const t = te;
  return jr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, jr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, jr;
}
var da;
function qc() {
  return da || (da = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), ar.__exportStar(Cd(), t);
  }(hn)), hn;
}
var fa;
function Td() {
  if (fa)
    return Di;
  fa = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.HeartBeat = void 0;
  const t = ar, e = Jt, r = te, i = zc(), s = qc();
  class n extends i.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || s.HEARTBEAT_INTERVAL;
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
      this.events.emit(s.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Di.HeartBeat = n, Di;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = ar;
  e.__exportStar(Td(), t), e.__exportStar(zc(), t), e.__exportStar(qc(), t);
})(gi);
var De = {}, dn, pa;
function Nd() {
  if (pa)
    return dn;
  pa = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  dn = e;
  function e(r, i, s) {
    var n = s && s.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = i.length + a;
      if (o === 1)
        return r;
      var h = new Array(o);
      h[0] = n(r);
      for (var l = 1; l < o; l++)
        h[l] = n(i[l]);
      return h.join(" ");
    }
    if (typeof r != "string")
      return r;
    var d = i.length;
    if (d === 0)
      return r;
    for (var f = "", y = 1 - a, b = -1, _ = r && r.length || 0, O = 0; O < _; ) {
      if (r.charCodeAt(O) === 37 && O + 1 < _) {
        switch (b = b > -1 ? b : 0, r.charCodeAt(O + 1)) {
          case 100:
          case 102:
            if (y >= d || i[y] == null)
              break;
            b < O && (f += r.slice(b, O)), f += Number(i[y]), b = O + 2, O++;
            break;
          case 105:
            if (y >= d || i[y] == null)
              break;
            b < O && (f += r.slice(b, O)), f += Math.floor(Number(i[y])), b = O + 2, O++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= d || i[y] === void 0)
              break;
            b < O && (f += r.slice(b, O));
            var L = typeof i[y];
            if (L === "string") {
              f += "'" + i[y] + "'", b = O + 2, O++;
              break;
            }
            if (L === "function") {
              f += i[y].name || "<anonymous>", b = O + 2, O++;
              break;
            }
            f += n(i[y]), b = O + 2, O++;
            break;
          case 115:
            if (y >= d)
              break;
            b < O && (f += r.slice(b, O)), f += String(i[y]), b = O + 2, O++;
            break;
          case 37:
            b < O && (f += r.slice(b, O)), f += "%", b = O + 2, O++, y--;
            break;
        }
        ++y;
      }
      ++O;
    }
    return b === -1 ? r : (b < _ && (f += r.slice(b)), f);
  }
  return dn;
}
var fn, ga;
function Ad() {
  if (ga)
    return fn;
  ga = 1;
  const t = Nd();
  fn = s;
  const e = w().console || {}, r = {
    mapHttpRequest: _,
    mapHttpResponse: _,
    wrapRequestSerializer: O,
    wrapResponseSerializer: O,
    wrapErrorSerializer: O,
    req: _,
    res: _,
    err: y
  };
  function i(g, c) {
    return Array.isArray(g) ? g.filter(function(P) {
      return P !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(c) : !1;
  }
  function s(g) {
    g = g || {}, g.browser = g.browser || {};
    const c = g.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const P = g.serializers || {}, R = i(g.browser.serialize, P);
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
      timestamp: b(g)
    };
    x.levels = s.levels, x.level = G, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = L, x.serializers = P, x._serialize = R, x._stdErrSerialize = F, x.child = k, c && (x._logEvent = f());
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
        var K = Object.assign({}, P, oe), ie = g.browser.serialize === !0 ? Object.keys(K) : R;
        delete U.serializers, h([U], ie, K, this._stdErrSerialize);
      }
      function Q(ne) {
        this._childLevel = (ne._childLevel | 0) + 1, this.error = l(ne, U, "error"), this.fatal = l(ne, U, "fatal"), this.warn = l(ne, U, "warn"), this.info = l(ne, U, "info"), this.debug = l(ne, U, "debug"), this.trace = l(ne, U, "trace"), K && (this.serializers = K, this._serialize = ie), c && (this._logEvent = f(
          [].concat(ne._logEvent.bindings, U)
        ));
      }
      return Q.prototype = this, new Q(this);
    }
    return x;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: S, unixTime: C, isoTime: v });
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
          const A = g.transmit.level || c.level, Z = s.levels.values[A], z = s.levels.values[p];
          if (z < Z)
            return;
          d(this, {
            ts: F,
            methodLevel: p,
            methodValue: z,
            transmitLevel: A,
            transmitValue: s.levels.values[g.transmit.level || c.level],
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
    P && (B.time = P), B.level = s.levels.values[c];
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
        g[R] = s.stdSerializers.err(g[R]);
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
  function b(g) {
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
  function w() {
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
  return fn;
}
var kr = {}, ya;
function Bc() {
  return ya || (ya = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.PINO_CUSTOM_CONTEXT_KEY = kr.PINO_LOGGER_DEFAULTS = void 0, kr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, kr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), kr;
}
var St = {}, ma;
function Rd() {
  if (ma)
    return St;
  ma = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const t = Bc();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  St.getDefaultLoggerOptions = e;
  function r(o, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[h] || "";
  }
  St.getBrowserLoggerContext = r;
  function i(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[l] = h, o;
  }
  St.setBrowserLoggerContext = i;
  function s(o, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof o.bindings > "u" ? l = r(o, h) : l = o.bindings().context || "", l;
  }
  St.getLoggerContext = s;
  function n(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = s(o, l);
    return d.trim() ? `${d}/${h}` : h;
  }
  St.formatChildLoggerContext = n;
  function a(o, h, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = n(o, h, l), f = o.child({ context: d });
    return i(f, d, l);
  }
  return St.generateChildLogger = a, St;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = ar, r = e.__importDefault(Ad());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Bc(), t), e.__exportStar(Rd(), t);
})(De);
let Pd = class extends Yr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Ld = class extends Yr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Fd = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Md = class extends Yr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Ud = class extends Yr {
  constructor(e) {
    super();
  }
}, $d = class {
  constructor(e, r, i, s) {
    this.core = e, this.logger = r, this.name = i;
  }
};
class jd extends Yr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class kd extends Yr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let zd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, qd = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Bd = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Kd = class {
  constructor(e) {
    this.client = e;
  }
};
var so = {}, yi = {}, Ks = {}, Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.BrowserRandomSource = void 0;
const va = 65536;
class Vd {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let i = 0; i < r.length; i += va)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, va)));
    return r;
  }
}
Vs.BrowserRandomSource = Vd;
function Hd(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Hs = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
function Wd(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Ut.wipe = Wd;
const Zd = {}, Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), Yd = /* @__PURE__ */ zs(Gd);
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.NodeRandomSource = void 0;
const Jd = Ut;
class Xd {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Hd < "u") {
      const e = Yd;
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
    return (0, Jd.wipe)(r), i;
  }
}
Hs.NodeRandomSource = Xd;
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.SystemRandomSource = void 0;
const Qd = Vs, ef = Hs;
class tf {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Qd.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new ef.NodeRandomSource(), this._source.isAvailable) {
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
Ks.SystemRandomSource = tf;
var le = {}, Kc = {};
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
  function i(o, h) {
    return o - h | 0;
  }
  t.sub = i;
  function s(o, h) {
    return o << h | o >>> 32 - h;
  }
  t.rotl = s;
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
})(Kc);
Object.defineProperty(le, "__esModule", { value: !0 });
var Vc = Kc;
function rf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
le.readInt16BE = rf;
function sf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
le.readUint16BE = sf;
function nf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
le.readInt16LE = nf;
function of(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint16LE = of;
function Hc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
le.writeUint16BE = Hc;
le.writeInt16BE = Hc;
function Wc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
le.writeUint16LE = Wc;
le.writeInt16LE = Wc;
function An(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
le.readInt32BE = An;
function Rn(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
le.readUint32BE = Rn;
function Pn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
le.readInt32LE = Pn;
function Ln(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
le.readUint32LE = Ln;
function Ss(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
le.writeUint32BE = Ss;
le.writeInt32BE = Ss;
function xs(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
le.writeUint32LE = xs;
le.writeInt32LE = xs;
function af(t, e) {
  e === void 0 && (e = 0);
  var r = An(t, e), i = An(t, e + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = af;
function cf(t, e) {
  e === void 0 && (e = 0);
  var r = Rn(t, e), i = Rn(t, e + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = cf;
function uf(t, e) {
  e === void 0 && (e = 0);
  var r = Pn(t, e), i = Pn(t, e + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = uf;
function lf(t, e) {
  e === void 0 && (e = 0);
  var r = Ln(t, e), i = Ln(t, e + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = lf;
function Zc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ss(t / 4294967296 >>> 0, e, r), Ss(t >>> 0, e, r + 4), e;
}
le.writeUint64BE = Zc;
le.writeInt64BE = Zc;
function Gc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), xs(t >>> 0, e, r), xs(t / 4294967296 >>> 0, e, r + 4), e;
}
le.writeUint64LE = Gc;
le.writeInt64LE = Gc;
function hf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = t / 8 + r - 1; n >= r; n--)
    i += e[n] * s, s *= 256;
  return i;
}
le.readUintBE = hf;
function df(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = r; n < r + t / 8; n++)
    i += e[n] * s, s *= 256;
  return i;
}
le.readUintLE = df;
function ff(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Vc.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, n = t / 8 + i - 1; n >= i; n--)
    r[n] = e / s & 255, s *= 256;
  return r;
}
le.writeUintBE = ff;
function pf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Vc.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, n = i; n < i + t / 8; n++)
    r[n] = e / s & 255, s *= 256;
  return r;
}
le.writeUintLE = pf;
function gf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
le.readFloat32BE = gf;
function yf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
le.readFloat32LE = yf;
function mf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
le.readFloat64BE = mf;
function vf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
le.readFloat64LE = vf;
function bf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t), e;
}
le.writeFloat32BE = bf;
function wf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t, !0), e;
}
le.writeFloat32LE = wf;
function _f(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t), e;
}
le.writeFloat64BE = _f;
function Ef(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t, !0), e;
}
le.writeFloat64LE = Ef;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ks, r = le, i = Ut;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(l, d = t.defaultRandomSource) {
    return d.randomBytes(l);
  }
  t.randomBytes = s;
  function n(l = t.defaultRandomSource) {
    const d = s(4, l), f = (0, r.readUint32LE)(d);
    return (0, i.wipe)(d), f;
  }
  t.randomUint32 = n;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(l, d = a, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const b = d.length, _ = 256 - 256 % b;
    for (; l > 0; ) {
      const O = s(Math.ceil(l * 256 / _), f);
      for (let L = 0; L < O.length && l > 0; L++) {
        const M = O[L];
        M < _ && (y += d.charAt(M % b), l--);
      }
      (0, i.wipe)(O);
    }
    return y;
  }
  t.randomString = o;
  function h(l, d = a, f = t.defaultRandomSource) {
    const y = Math.ceil(l / (Math.log(d.length) / Math.LN2));
    return o(y, d, f);
  }
  t.randomStringForEntropy = h;
})(yi);
var Yc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ut;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var i = (
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
  function n(o, h, l, d, f, y, b) {
    for (var _ = l[0], O = l[1], L = l[2], M = l[3], S = l[4], C = l[5], v = l[6], w = l[7], g = d[0], c = d[1], p = d[2], P = d[3], R = d[4], F = d[5], B = d[6], G = d[7], x, A, Z, z, $, k, U, q; b >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var K = 8 * oe + y;
        o[oe] = e.readUint32BE(f, K), h[oe] = e.readUint32BE(f, K + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = _, Q = O, ne = L, N = M, T = S, D = C, u = v, E = w, H = g, J = c, be = p, Ie = P, _e = R, Ne = F, He = B, qe = G;
        if (x = w, A = G, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = (S >>> 14 | R << 18) ^ (S >>> 18 | R << 14) ^ (R >>> 9 | S << 23), A = (R >>> 14 | S << 18) ^ (R >>> 18 | S << 14) ^ (S >>> 9 | R << 23), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = S & C ^ ~S & v, A = R & F ^ ~R & B, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = s[oe * 2], A = s[oe * 2 + 1], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = o[oe % 16], A = h[oe % 16], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, Z = U & 65535 | q << 16, z = $ & 65535 | k << 16, x = Z, A = z, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = (_ >>> 28 | g << 4) ^ (g >>> 2 | _ << 30) ^ (g >>> 7 | _ << 25), A = (g >>> 28 | _ << 4) ^ (_ >>> 2 | g << 30) ^ (_ >>> 7 | g << 25), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, x = _ & O ^ _ & L ^ O & L, A = g & c ^ g & p ^ c & p, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, E = U & 65535 | q << 16, qe = $ & 65535 | k << 16, x = N, A = Ie, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = Z, A = z, $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, N = U & 65535 | q << 16, Ie = $ & 65535 | k << 16, O = ie, L = Q, M = ne, S = N, C = T, v = D, w = u, _ = E, c = H, p = J, P = be, R = Ie, F = _e, B = Ne, G = He, g = qe, oe % 16 === 15)
          for (var K = 0; K < 16; K++)
            x = o[K], A = h[K], $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = o[(K + 9) % 16], A = h[(K + 9) % 16], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, Z = o[(K + 1) % 16], z = h[(K + 1) % 16], x = (Z >>> 1 | z << 31) ^ (Z >>> 8 | z << 24) ^ Z >>> 7, A = (z >>> 1 | Z << 31) ^ (z >>> 8 | Z << 24) ^ (z >>> 7 | Z << 25), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, Z = o[(K + 14) % 16], z = h[(K + 14) % 16], x = (Z >>> 19 | z << 13) ^ (z >>> 29 | Z << 3) ^ Z >>> 6, A = (z >>> 19 | Z << 13) ^ (Z >>> 29 | z << 3) ^ (z >>> 6 | Z << 26), $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, o[K] = U & 65535 | q << 16, h[K] = $ & 65535 | k << 16;
      }
      x = _, A = g, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[0], A = d[0], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[0] = _ = U & 65535 | q << 16, d[0] = g = $ & 65535 | k << 16, x = O, A = c, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[1], A = d[1], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[1] = O = U & 65535 | q << 16, d[1] = c = $ & 65535 | k << 16, x = L, A = p, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[2], A = d[2], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[2] = L = U & 65535 | q << 16, d[2] = p = $ & 65535 | k << 16, x = M, A = P, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[3], A = d[3], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[3] = M = U & 65535 | q << 16, d[3] = P = $ & 65535 | k << 16, x = S, A = R, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[4], A = d[4], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[4] = S = U & 65535 | q << 16, d[4] = R = $ & 65535 | k << 16, x = C, A = F, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[5], A = d[5], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[5] = C = U & 65535 | q << 16, d[5] = F = $ & 65535 | k << 16, x = v, A = B, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[6], A = d[6], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[6] = v = U & 65535 | q << 16, d[6] = B = $ & 65535 | k << 16, x = w, A = G, $ = A & 65535, k = A >>> 16, U = x & 65535, q = x >>> 16, x = l[7], A = d[7], $ += A & 65535, k += A >>> 16, U += x & 65535, q += x >>> 16, k += $ >>> 16, U += k >>> 16, q += U >>> 16, l[7] = w = U & 65535 | q << 16, d[7] = G = $ & 65535 | k << 16, y += 128, b -= 128;
    }
    return y;
  }
  function a(o) {
    var h = new i();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = a;
})(Yc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = yi, r = Yc, i = Ut;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(N) {
    const T = new Float64Array(16);
    if (N)
      for (let D = 0; D < N.length; D++)
        T[D] = N[D];
    return T;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const a = s(), o = s([1]), h = s([
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
  ]), y = s([
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
      const H = u & (N[E] ^ T[E]);
      N[E] ^= H, T[E] ^= H;
    }
  }
  function L(N, T) {
    const D = s(), u = s();
    for (let E = 0; E < 16; E++)
      u[E] = T[E];
    _(u), _(u), _(u);
    for (let E = 0; E < 2; E++) {
      D[0] = u[0] - 65517;
      for (let J = 1; J < 15; J++)
        D[J] = u[J] - 65535 - (D[J - 1] >> 16 & 1), D[J - 1] &= 65535;
      D[15] = u[15] - 32767 - (D[14] >> 16 & 1);
      const H = D[15] >> 16 & 1;
      D[14] &= 65535, O(u, D, 1 - H);
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
  function w(N, T, D) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] + D[u];
  }
  function g(N, T, D) {
    for (let u = 0; u < 16; u++)
      N[u] = T[u] - D[u];
  }
  function c(N, T, D) {
    let u, E, H = 0, J = 0, be = 0, Ie = 0, _e = 0, Ne = 0, He = 0, qe = 0, xe = 0, Ee = 0, we = 0, me = 0, ye = 0, pe = 0, fe = 0, ce = 0, ve = 0, Se = 0, ue = 0, Oe = 0, Ce = 0, Re = 0, Pe = 0, Ae = 0, qt = 0, Qt = 0, vr = 0, Pt = 0, Ar = 0, _i = 0, is = 0, Ze = D[0], Be = D[1], Ge = D[2], Ye = D[3], Je = D[4], Ke = D[5], et = D[6], tt = D[7], rt = D[8], it = D[9], st = D[10], Qe = D[11], Xe = D[12], Ue = D[13], nt = D[14], ot = D[15];
    u = T[0], H += u * Ze, J += u * Be, be += u * Ge, Ie += u * Ye, _e += u * Je, Ne += u * Ke, He += u * et, qe += u * tt, xe += u * rt, Ee += u * it, we += u * st, me += u * Qe, ye += u * Xe, pe += u * Ue, fe += u * nt, ce += u * ot, u = T[1], J += u * Ze, be += u * Be, Ie += u * Ge, _e += u * Ye, Ne += u * Je, He += u * Ke, qe += u * et, xe += u * tt, Ee += u * rt, we += u * it, me += u * st, ye += u * Qe, pe += u * Xe, fe += u * Ue, ce += u * nt, ve += u * ot, u = T[2], be += u * Ze, Ie += u * Be, _e += u * Ge, Ne += u * Ye, He += u * Je, qe += u * Ke, xe += u * et, Ee += u * tt, we += u * rt, me += u * it, ye += u * st, pe += u * Qe, fe += u * Xe, ce += u * Ue, ve += u * nt, Se += u * ot, u = T[3], Ie += u * Ze, _e += u * Be, Ne += u * Ge, He += u * Ye, qe += u * Je, xe += u * Ke, Ee += u * et, we += u * tt, me += u * rt, ye += u * it, pe += u * st, fe += u * Qe, ce += u * Xe, ve += u * Ue, Se += u * nt, ue += u * ot, u = T[4], _e += u * Ze, Ne += u * Be, He += u * Ge, qe += u * Ye, xe += u * Je, Ee += u * Ke, we += u * et, me += u * tt, ye += u * rt, pe += u * it, fe += u * st, ce += u * Qe, ve += u * Xe, Se += u * Ue, ue += u * nt, Oe += u * ot, u = T[5], Ne += u * Ze, He += u * Be, qe += u * Ge, xe += u * Ye, Ee += u * Je, we += u * Ke, me += u * et, ye += u * tt, pe += u * rt, fe += u * it, ce += u * st, ve += u * Qe, Se += u * Xe, ue += u * Ue, Oe += u * nt, Ce += u * ot, u = T[6], He += u * Ze, qe += u * Be, xe += u * Ge, Ee += u * Ye, we += u * Je, me += u * Ke, ye += u * et, pe += u * tt, fe += u * rt, ce += u * it, ve += u * st, Se += u * Qe, ue += u * Xe, Oe += u * Ue, Ce += u * nt, Re += u * ot, u = T[7], qe += u * Ze, xe += u * Be, Ee += u * Ge, we += u * Ye, me += u * Je, ye += u * Ke, pe += u * et, fe += u * tt, ce += u * rt, ve += u * it, Se += u * st, ue += u * Qe, Oe += u * Xe, Ce += u * Ue, Re += u * nt, Pe += u * ot, u = T[8], xe += u * Ze, Ee += u * Be, we += u * Ge, me += u * Ye, ye += u * Je, pe += u * Ke, fe += u * et, ce += u * tt, ve += u * rt, Se += u * it, ue += u * st, Oe += u * Qe, Ce += u * Xe, Re += u * Ue, Pe += u * nt, Ae += u * ot, u = T[9], Ee += u * Ze, we += u * Be, me += u * Ge, ye += u * Ye, pe += u * Je, fe += u * Ke, ce += u * et, ve += u * tt, Se += u * rt, ue += u * it, Oe += u * st, Ce += u * Qe, Re += u * Xe, Pe += u * Ue, Ae += u * nt, qt += u * ot, u = T[10], we += u * Ze, me += u * Be, ye += u * Ge, pe += u * Ye, fe += u * Je, ce += u * Ke, ve += u * et, Se += u * tt, ue += u * rt, Oe += u * it, Ce += u * st, Re += u * Qe, Pe += u * Xe, Ae += u * Ue, qt += u * nt, Qt += u * ot, u = T[11], me += u * Ze, ye += u * Be, pe += u * Ge, fe += u * Ye, ce += u * Je, ve += u * Ke, Se += u * et, ue += u * tt, Oe += u * rt, Ce += u * it, Re += u * st, Pe += u * Qe, Ae += u * Xe, qt += u * Ue, Qt += u * nt, vr += u * ot, u = T[12], ye += u * Ze, pe += u * Be, fe += u * Ge, ce += u * Ye, ve += u * Je, Se += u * Ke, ue += u * et, Oe += u * tt, Ce += u * rt, Re += u * it, Pe += u * st, Ae += u * Qe, qt += u * Xe, Qt += u * Ue, vr += u * nt, Pt += u * ot, u = T[13], pe += u * Ze, fe += u * Be, ce += u * Ge, ve += u * Ye, Se += u * Je, ue += u * Ke, Oe += u * et, Ce += u * tt, Re += u * rt, Pe += u * it, Ae += u * st, qt += u * Qe, Qt += u * Xe, vr += u * Ue, Pt += u * nt, Ar += u * ot, u = T[14], fe += u * Ze, ce += u * Be, ve += u * Ge, Se += u * Ye, ue += u * Je, Oe += u * Ke, Ce += u * et, Re += u * tt, Pe += u * rt, Ae += u * it, qt += u * st, Qt += u * Qe, vr += u * Xe, Pt += u * Ue, Ar += u * nt, _i += u * ot, u = T[15], ce += u * Ze, ve += u * Be, Se += u * Ge, ue += u * Ye, Oe += u * Je, Ce += u * Ke, Re += u * et, Pe += u * tt, Ae += u * rt, qt += u * it, Qt += u * st, vr += u * Qe, Pt += u * Xe, Ar += u * Ue, _i += u * nt, is += u * ot, H += 38 * ve, J += 38 * Se, be += 38 * ue, Ie += 38 * Oe, _e += 38 * Ce, Ne += 38 * Re, He += 38 * Pe, qe += 38 * Ae, xe += 38 * qt, Ee += 38 * Qt, we += 38 * vr, me += 38 * Pt, ye += 38 * Ar, pe += 38 * _i, fe += 38 * is, E = 1, u = H + E + 65535, E = Math.floor(u / 65536), H = u - E * 65536, u = J + E + 65535, E = Math.floor(u / 65536), J = u - E * 65536, u = be + E + 65535, E = Math.floor(u / 65536), be = u - E * 65536, u = Ie + E + 65535, E = Math.floor(u / 65536), Ie = u - E * 65536, u = _e + E + 65535, E = Math.floor(u / 65536), _e = u - E * 65536, u = Ne + E + 65535, E = Math.floor(u / 65536), Ne = u - E * 65536, u = He + E + 65535, E = Math.floor(u / 65536), He = u - E * 65536, u = qe + E + 65535, E = Math.floor(u / 65536), qe = u - E * 65536, u = xe + E + 65535, E = Math.floor(u / 65536), xe = u - E * 65536, u = Ee + E + 65535, E = Math.floor(u / 65536), Ee = u - E * 65536, u = we + E + 65535, E = Math.floor(u / 65536), we = u - E * 65536, u = me + E + 65535, E = Math.floor(u / 65536), me = u - E * 65536, u = ye + E + 65535, E = Math.floor(u / 65536), ye = u - E * 65536, u = pe + E + 65535, E = Math.floor(u / 65536), pe = u - E * 65536, u = fe + E + 65535, E = Math.floor(u / 65536), fe = u - E * 65536, u = ce + E + 65535, E = Math.floor(u / 65536), ce = u - E * 65536, H += E - 1 + 37 * (E - 1), E = 1, u = H + E + 65535, E = Math.floor(u / 65536), H = u - E * 65536, u = J + E + 65535, E = Math.floor(u / 65536), J = u - E * 65536, u = be + E + 65535, E = Math.floor(u / 65536), be = u - E * 65536, u = Ie + E + 65535, E = Math.floor(u / 65536), Ie = u - E * 65536, u = _e + E + 65535, E = Math.floor(u / 65536), _e = u - E * 65536, u = Ne + E + 65535, E = Math.floor(u / 65536), Ne = u - E * 65536, u = He + E + 65535, E = Math.floor(u / 65536), He = u - E * 65536, u = qe + E + 65535, E = Math.floor(u / 65536), qe = u - E * 65536, u = xe + E + 65535, E = Math.floor(u / 65536), xe = u - E * 65536, u = Ee + E + 65535, E = Math.floor(u / 65536), Ee = u - E * 65536, u = we + E + 65535, E = Math.floor(u / 65536), we = u - E * 65536, u = me + E + 65535, E = Math.floor(u / 65536), me = u - E * 65536, u = ye + E + 65535, E = Math.floor(u / 65536), ye = u - E * 65536, u = pe + E + 65535, E = Math.floor(u / 65536), pe = u - E * 65536, u = fe + E + 65535, E = Math.floor(u / 65536), fe = u - E * 65536, u = ce + E + 65535, E = Math.floor(u / 65536), ce = u - E * 65536, H += E - 1 + 37 * (E - 1), N[0] = H, N[1] = J, N[2] = be, N[3] = Ie, N[4] = _e, N[5] = Ne, N[6] = He, N[7] = qe, N[8] = xe, N[9] = Ee, N[10] = we, N[11] = me, N[12] = ye, N[13] = pe, N[14] = fe, N[15] = ce;
  }
  function p(N, T) {
    c(N, T, T);
  }
  function P(N, T) {
    const D = s();
    let u;
    for (u = 0; u < 16; u++)
      D[u] = T[u];
    for (u = 253; u >= 0; u--)
      p(D, D), u !== 2 && u !== 4 && c(D, D, T);
    for (u = 0; u < 16; u++)
      N[u] = D[u];
  }
  function R(N, T) {
    const D = s();
    let u;
    for (u = 0; u < 16; u++)
      D[u] = T[u];
    for (u = 250; u >= 0; u--)
      p(D, D), u !== 1 && c(D, D, T);
    for (u = 0; u < 16; u++)
      N[u] = D[u];
  }
  function F(N, T) {
    const D = s(), u = s(), E = s(), H = s(), J = s(), be = s(), Ie = s(), _e = s(), Ne = s();
    g(D, N[1], N[0]), g(Ne, T[1], T[0]), c(D, D, Ne), w(u, N[0], N[1]), w(Ne, T[0], T[1]), c(u, u, Ne), c(E, N[3], T[3]), c(E, E, l), c(H, N[2], T[2]), w(H, H, H), g(J, u, D), g(be, H, E), w(Ie, H, E), w(_e, u, D), c(N[0], J, be), c(N[1], _e, Ie), c(N[2], Ie, be), c(N[3], J, _e);
  }
  function B(N, T, D) {
    for (let u = 0; u < 4; u++)
      O(N[u], T[u], D);
  }
  function G(N, T) {
    const D = s(), u = s(), E = s();
    P(E, T[2]), c(D, T[0], E), c(u, T[1], E), L(N, u), N[31] ^= C(D) << 7;
  }
  function x(N, T, D) {
    b(N[0], a), b(N[1], o), b(N[2], o), b(N[3], a);
    for (let u = 255; u >= 0; --u) {
      const E = D[u / 8 | 0] >> (u & 7) & 1;
      B(N, T, E), F(T, N), F(N, N), B(N, T, E);
    }
  }
  function A(N, T) {
    const D = [s(), s(), s(), s()];
    b(D[0], d), b(D[1], f), b(D[2], o), c(D[3], d, f), x(N, D, T);
  }
  function Z(N) {
    if (N.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const T = (0, r.hash)(N);
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const D = new Uint8Array(32), u = [s(), s(), s(), s()];
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
    return (0, i.wipe)(T), D;
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
    let D, u, E, H;
    for (u = 63; u >= 32; --u) {
      for (D = 0, E = u - 32, H = u - 12; E < H; ++E)
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
    const D = new Float64Array(64), u = [s(), s(), s(), s()], E = (0, r.hash)(N.subarray(0, 32));
    E[0] &= 248, E[31] &= 127, E[31] |= 64;
    const H = new Uint8Array(64);
    H.set(E.subarray(32), 32);
    const J = new r.SHA512();
    J.update(H.subarray(32)), J.update(T);
    const be = J.digest();
    J.clean(), q(be), A(u, be), G(H, u), J.reset(), J.update(H.subarray(0, 32)), J.update(N.subarray(32)), J.update(T);
    const Ie = J.digest();
    q(Ie);
    for (let _e = 0; _e < 32; _e++)
      D[_e] = be[_e];
    for (let _e = 0; _e < 32; _e++)
      for (let Ne = 0; Ne < 32; Ne++)
        D[_e + Ne] += Ie[_e] * E[Ne];
    return U(H.subarray(32), D), H;
  }
  t.sign = oe;
  function K(N, T) {
    const D = s(), u = s(), E = s(), H = s(), J = s(), be = s(), Ie = s();
    return b(N[2], o), v(N[1], T), p(E, N[1]), c(H, E, h), g(E, E, N[2]), w(H, N[2], H), p(J, H), p(be, J), c(Ie, be, J), c(D, Ie, E), c(D, D, H), R(D, D), c(D, D, E), c(D, D, H), c(D, D, H), c(N[0], D, H), p(u, N[0]), c(u, u, H), S(u, E) && c(N[0], N[0], y), p(u, N[0]), c(u, u, H), S(u, E) ? -1 : (C(N[0]) === T[31] >> 7 && g(N[0], a, N[0]), c(N[3], N[0], N[1]), 0);
  }
  function ie(N, T, D) {
    const u = new Uint8Array(32), E = [s(), s(), s(), s()], H = [s(), s(), s(), s()];
    if (D.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(H, N))
      return !1;
    const J = new r.SHA512();
    J.update(D.subarray(0, 32)), J.update(N), J.update(T);
    const be = J.digest();
    return q(be), x(E, H, be), A(H, D.subarray(32)), F(E, H), G(u, E), !M(D, u);
  }
  t.verify = ie;
  function Q(N) {
    let T = [s(), s(), s(), s()];
    if (K(T, N))
      throw new Error("Ed25519: invalid public key");
    let D = s(), u = s(), E = T[1];
    w(D, o, E), g(u, o, E), P(u, u), c(D, D, u);
    let H = new Uint8Array(32);
    return L(H, D), H;
  }
  t.convertPublicKeyToX25519 = Q;
  function ne(N) {
    const T = (0, r.hash)(N.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const D = new Uint8Array(T.subarray(0, 32));
    return (0, i.wipe)(T), D;
  }
  t.convertSecretKeyToX25519 = ne;
})(so);
const Sf = "EdDSA", xf = "JWT", Jc = ".", Xc = "base64url", Df = "utf8", If = "utf8", Of = ":", Cf = "did", Tf = "key", ba = "base58btc", Nf = "z", Af = "K36", Rf = 32;
function no(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Qc(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? no(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Fn(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const r = Qc(e);
  let i = 0;
  for (const s of t)
    r.set(s, i), i += s.length;
  return no(r);
}
function Pf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), a = n.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[a] = s;
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
      for (var w = _[M], g = 0, c = C - 1; (w !== 0 || g < L) && c !== -1; c--, g++)
        w += 256 * v[c] >>> 0, v[c] = w % o >>> 0, w = w / o >>> 0;
      if (w !== 0)
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
        for (var w = 0, g = S - 1; (v !== 0 || w < M) && g !== -1; g--, w++)
          v += o * C[g] >>> 0, C[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        M = w, O++;
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
  function b(_) {
    var O = y(_);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: y,
    decode: b
  };
}
var Lf = Pf, Ff = Lf;
const Mf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Uf = (t) => new TextEncoder().encode(t), $f = (t) => new TextDecoder().decode(t);
class jf {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class kf {
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
    return eu(this, e);
  }
}
class zf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return eu(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const eu = (t, e) => new zf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class qf {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new jf(e, r, i), this.decoder = new kf(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ws = ({ name: t, prefix: e, encode: r, decode: i }) => new qf(t, e, r, i), Yi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = Ff(r, e);
  return Ws({
    prefix: t,
    name: e,
    encode: i,
    decode: (n) => Mf(s(n))
  });
}, Bf = (t, e, r, i) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const a = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Kf = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", a = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], a += 8; a > r; )
      a -= r, n += e[s & o >> a];
  if (a && (n += e[s & o << r - a]), i)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, ft = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Ws({
  prefix: e,
  name: t,
  encode(s) {
    return Kf(s, i, r);
  },
  decode(s) {
    return Bf(s, i, r, t);
  }
}), Vf = Ws({
  prefix: "\0",
  name: "identity",
  encode: (t) => $f(t),
  decode: (t) => Uf(t)
}), Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Vf
}, Symbol.toStringTag, { value: "Module" })), Wf = ft({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Wf
}, Symbol.toStringTag, { value: "Module" })), Gf = ft({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Gf
}, Symbol.toStringTag, { value: "Module" })), Jf = Yi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Jf
}, Symbol.toStringTag, { value: "Module" })), Qf = ft({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), ep = ft({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Qf,
  base16upper: ep
}, Symbol.toStringTag, { value: "Module" })), rp = ft({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), ip = ft({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), sp = ft({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), np = ft({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), op = ft({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), ap = ft({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), cp = ft({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), up = ft({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), lp = ft({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: rp,
  base32hex: op,
  base32hexpad: cp,
  base32hexpadupper: up,
  base32hexupper: ap,
  base32pad: sp,
  base32padupper: np,
  base32upper: ip,
  base32z: lp
}, Symbol.toStringTag, { value: "Module" })), dp = Yi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), fp = Yi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: dp,
  base36upper: fp
}, Symbol.toStringTag, { value: "Module" })), gp = Yi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), yp = Yi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: gp,
  base58flickr: yp
}, Symbol.toStringTag, { value: "Module" })), vp = ft({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), bp = ft({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), wp = ft({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), _p = ft({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: vp,
  base64pad: bp,
  base64url: wp,
  base64urlpad: _p
}, Symbol.toStringTag, { value: "Module" })), tu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Sp = tu.reduce((t, e, r) => (t[r] = e, t), []), xp = tu.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Dp(t) {
  return t.reduce((e, r) => (e += Sp[r], e), "");
}
function Ip(t) {
  const e = [];
  for (const r of t) {
    const i = xp[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Op = Ws({
  prefix: "🚀",
  name: "base256emoji",
  encode: Dp,
  decode: Ip
}), Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Op
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const wa = {
  ...Hf,
  ...Zf,
  ...Yf,
  ...Xf,
  ...tp,
  ...hp,
  ...pp,
  ...mp,
  ...Ep,
  ...Cp
};
function ru(t, e, r, i) {
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
const _a = ru("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), pn = ru("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Qc(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), iu = {
  utf8: _a,
  "utf-8": _a,
  hex: wa.base16,
  latin1: pn,
  ascii: pn,
  binary: pn,
  ...wa
};
function Ct(t, e = "utf8") {
  const r = iu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Rt(t, e = "utf8") {
  const r = iu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? no(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ds(t) {
  return Ct(Rt(Gi(t), Df), Xc);
}
function su(t) {
  const e = Rt(Af, ba), r = Nf + Ct(Fn([e, t]), ba);
  return [Cf, Tf, r].join(Of);
}
function Tp(t) {
  return Ct(t, Xc);
}
function Np(t) {
  return Rt([Ds(t.header), Ds(t.payload)].join(Jc), If);
}
function Ap(t) {
  return [
    Ds(t.header),
    Ds(t.payload),
    Tp(t.signature)
  ].join(Jc);
}
function Ea(t = yi.randomBytes(Rf)) {
  return so.generateKeyPairFromSeed(t);
}
async function Rp(t, e, r, i, s = te.fromMiliseconds(Date.now())) {
  const n = { alg: Sf, typ: xf }, a = su(i.publicKey), o = s + r, h = { iss: a, sub: t, aud: e, iat: s, exp: o }, l = Np({ header: n, payload: h }), d = so.sign(i.secretKey, l);
  return Ap({ header: n, payload: h, signature: d });
}
var oo = {}, Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
var mt = le, Mn = Ut, Pp = 20;
function Lp(t, e, r) {
  for (var i = 1634760805, s = 857760878, n = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], b = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], _ = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], O = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], L = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], S = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], C = i, v = s, w = n, g = a, c = o, p = h, P = l, R = d, F = f, B = y, G = b, x = _, A = O, Z = L, z = M, $ = S, k = 0; k < Pp; k += 2)
    C = C + c | 0, A ^= C, A = A >>> 16 | A << 16, F = F + A | 0, c ^= F, c = c >>> 20 | c << 12, v = v + p | 0, Z ^= v, Z = Z >>> 16 | Z << 16, B = B + Z | 0, p ^= B, p = p >>> 20 | p << 12, w = w + P | 0, z ^= w, z = z >>> 16 | z << 16, G = G + z | 0, P ^= G, P = P >>> 20 | P << 12, g = g + R | 0, $ ^= g, $ = $ >>> 16 | $ << 16, x = x + $ | 0, R ^= x, R = R >>> 20 | R << 12, w = w + P | 0, z ^= w, z = z >>> 24 | z << 8, G = G + z | 0, P ^= G, P = P >>> 25 | P << 7, g = g + R | 0, $ ^= g, $ = $ >>> 24 | $ << 8, x = x + $ | 0, R ^= x, R = R >>> 25 | R << 7, v = v + p | 0, Z ^= v, Z = Z >>> 24 | Z << 8, B = B + Z | 0, p ^= B, p = p >>> 25 | p << 7, C = C + c | 0, A ^= C, A = A >>> 24 | A << 8, F = F + A | 0, c ^= F, c = c >>> 25 | c << 7, C = C + p | 0, $ ^= C, $ = $ >>> 16 | $ << 16, G = G + $ | 0, p ^= G, p = p >>> 20 | p << 12, v = v + P | 0, A ^= v, A = A >>> 16 | A << 16, x = x + A | 0, P ^= x, P = P >>> 20 | P << 12, w = w + R | 0, Z ^= w, Z = Z >>> 16 | Z << 16, F = F + Z | 0, R ^= F, R = R >>> 20 | R << 12, g = g + c | 0, z ^= g, z = z >>> 16 | z << 16, B = B + z | 0, c ^= B, c = c >>> 20 | c << 12, w = w + R | 0, Z ^= w, Z = Z >>> 24 | Z << 8, F = F + Z | 0, R ^= F, R = R >>> 25 | R << 7, g = g + c | 0, z ^= g, z = z >>> 24 | z << 8, B = B + z | 0, c ^= B, c = c >>> 25 | c << 7, v = v + P | 0, A ^= v, A = A >>> 24 | A << 8, x = x + A | 0, P ^= x, P = P >>> 25 | P << 7, C = C + p | 0, $ ^= C, $ = $ >>> 24 | $ << 8, G = G + $ | 0, p ^= G, p = p >>> 25 | p << 7;
  mt.writeUint32LE(C + i | 0, t, 0), mt.writeUint32LE(v + s | 0, t, 4), mt.writeUint32LE(w + n | 0, t, 8), mt.writeUint32LE(g + a | 0, t, 12), mt.writeUint32LE(c + o | 0, t, 16), mt.writeUint32LE(p + h | 0, t, 20), mt.writeUint32LE(P + l | 0, t, 24), mt.writeUint32LE(R + d | 0, t, 28), mt.writeUint32LE(F + f | 0, t, 32), mt.writeUint32LE(B + y | 0, t, 36), mt.writeUint32LE(G + b | 0, t, 40), mt.writeUint32LE(x + _ | 0, t, 44), mt.writeUint32LE(A + O | 0, t, 48), mt.writeUint32LE(Z + L | 0, t, 52), mt.writeUint32LE(z + M | 0, t, 56), mt.writeUint32LE($ + S | 0, t, 60);
}
function nu(t, e, r, i, s) {
  if (s === void 0 && (s = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, a;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    n = new Uint8Array(16), a = n.length - e.length, n.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    n = e, a = s;
  }
  for (var o = new Uint8Array(64), h = 0; h < r.length; h += 64) {
    Lp(o, n, t);
    for (var l = h; l < h + 64 && l < r.length; l++)
      i[l] = r[l] ^ o[l - h];
    Mp(n, 0, a);
  }
  return Mn.wipe(o), s === 0 && Mn.wipe(n), i;
}
Zs.streamXOR = nu;
function Fp(t, e, r, i) {
  return i === void 0 && (i = 0), Mn.wipe(r), nu(t, e, r, r, i);
}
Zs.stream = Fp;
function Mp(t, e, r) {
  for (var i = 1; r--; )
    i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var ou = {}, Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
function Up(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Nr.select = Up;
function $p(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Nr.lessOrEqual = $p;
function au(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, i = 0; i < t.length; i++)
    r |= t[i] ^ e[i];
  return 1 & r - 1 >>> 8;
}
Nr.compare = au;
function jp(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : au(t, e) !== 0;
}
Nr.equal = jp;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Nr, r = Ut;
  t.DIGEST_LENGTH = 16;
  var i = (
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
        var b = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | b << 2) & 8191;
        var _ = o[12] | o[13] << 8;
        this._r[7] = (b >>> 11 | _ << 5) & 8065;
        var O = o[14] | o[15] << 8;
        this._r[8] = (_ >>> 8 | O << 8) & 8191, this._r[9] = O >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, h, l) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], y = this._h[1], b = this._h[2], _ = this._h[3], O = this._h[4], L = this._h[5], M = this._h[6], S = this._h[7], C = this._h[8], v = this._h[9], w = this._r[0], g = this._r[1], c = this._r[2], p = this._r[3], P = this._r[4], R = this._r[5], F = this._r[6], B = this._r[7], G = this._r[8], x = this._r[9]; l >= 16; ) {
          var A = o[h + 0] | o[h + 1] << 8;
          f += A & 8191;
          var Z = o[h + 2] | o[h + 3] << 8;
          y += (A >>> 13 | Z << 3) & 8191;
          var z = o[h + 4] | o[h + 5] << 8;
          b += (Z >>> 10 | z << 6) & 8191;
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
          var K = 0, ie = K;
          ie += f * w, ie += y * (5 * x), ie += b * (5 * G), ie += _ * (5 * B), ie += O * (5 * F), K = ie >>> 13, ie &= 8191, ie += L * (5 * R), ie += M * (5 * P), ie += S * (5 * p), ie += C * (5 * c), ie += v * (5 * g), K += ie >>> 13, ie &= 8191;
          var Q = K;
          Q += f * g, Q += y * w, Q += b * (5 * x), Q += _ * (5 * G), Q += O * (5 * B), K = Q >>> 13, Q &= 8191, Q += L * (5 * F), Q += M * (5 * R), Q += S * (5 * P), Q += C * (5 * p), Q += v * (5 * c), K += Q >>> 13, Q &= 8191;
          var ne = K;
          ne += f * c, ne += y * g, ne += b * w, ne += _ * (5 * x), ne += O * (5 * G), K = ne >>> 13, ne &= 8191, ne += L * (5 * B), ne += M * (5 * F), ne += S * (5 * R), ne += C * (5 * P), ne += v * (5 * p), K += ne >>> 13, ne &= 8191;
          var N = K;
          N += f * p, N += y * c, N += b * g, N += _ * w, N += O * (5 * x), K = N >>> 13, N &= 8191, N += L * (5 * G), N += M * (5 * B), N += S * (5 * F), N += C * (5 * R), N += v * (5 * P), K += N >>> 13, N &= 8191;
          var T = K;
          T += f * P, T += y * p, T += b * c, T += _ * g, T += O * w, K = T >>> 13, T &= 8191, T += L * (5 * x), T += M * (5 * G), T += S * (5 * B), T += C * (5 * F), T += v * (5 * R), K += T >>> 13, T &= 8191;
          var D = K;
          D += f * R, D += y * P, D += b * p, D += _ * c, D += O * g, K = D >>> 13, D &= 8191, D += L * w, D += M * (5 * x), D += S * (5 * G), D += C * (5 * B), D += v * (5 * F), K += D >>> 13, D &= 8191;
          var u = K;
          u += f * F, u += y * R, u += b * P, u += _ * p, u += O * c, K = u >>> 13, u &= 8191, u += L * g, u += M * w, u += S * (5 * x), u += C * (5 * G), u += v * (5 * B), K += u >>> 13, u &= 8191;
          var E = K;
          E += f * B, E += y * F, E += b * R, E += _ * P, E += O * p, K = E >>> 13, E &= 8191, E += L * c, E += M * g, E += S * w, E += C * (5 * x), E += v * (5 * G), K += E >>> 13, E &= 8191;
          var H = K;
          H += f * G, H += y * B, H += b * F, H += _ * R, H += O * P, K = H >>> 13, H &= 8191, H += L * p, H += M * c, H += S * g, H += C * w, H += v * (5 * x), K += H >>> 13, H &= 8191;
          var J = K;
          J += f * x, J += y * G, J += b * B, J += _ * F, J += O * R, K = J >>> 13, J &= 8191, J += L * P, J += M * p, J += S * c, J += C * g, J += v * w, K += J >>> 13, J &= 8191, K = (K << 2) + K | 0, K = K + ie | 0, ie = K & 8191, K = K >>> 13, Q += K, f = ie, y = Q, b = ne, _ = N, O = T, L = D, M = u, S = E, C = H, v = J, h += 16, l -= 16;
        }
        this._h[0] = f, this._h[1] = y, this._h[2] = b, this._h[3] = _, this._h[4] = O, this._h[5] = L, this._h[6] = M, this._h[7] = S, this._h[8] = C, this._h[9] = v;
      }, a.prototype.finish = function(o, h) {
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
  t.Poly1305 = i;
  function s(a, o) {
    var h = new i(a);
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.oneTimeAuth = s;
  function n(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = n;
})(ou);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Zs, r = ou, i = Ut, s = le, n = Nr;
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
        var b = new Uint8Array(16);
        b.set(l, b.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, b, _, 4);
        var O = d.length + this.tagLength, L;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = y;
        } else
          L = new Uint8Array(O);
        return e.streamXOR(this._key, b, d, L, 4), this._authenticate(L.subarray(L.length - this.tagLength, L.length), _, L.subarray(0, L.length - this.tagLength), f), i.wipe(b), L;
      }, h.prototype.open = function(l, d, f, y) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var b = new Uint8Array(16);
        b.set(l, b.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, b, _, 4);
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
        return e.streamXOR(this._key, b, d.subarray(0, d.length - this.tagLength), M, 4), i.wipe(b), M;
      }, h.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, h.prototype._authenticate = function(l, d, f, y) {
        var b = new r.Poly1305(d);
        y && (b.update(y), y.length % 16 > 0 && b.update(a.subarray(y.length % 16))), b.update(f), f.length % 16 > 0 && b.update(a.subarray(f.length % 16));
        var _ = new Uint8Array(8);
        y && s.writeUint64LE(y.length, _), b.update(_), s.writeUint64LE(f.length, _), b.update(_);
        for (var O = b.digest(), L = 0; L < O.length; L++)
          l[L] = O[L];
        b.clean(), i.wipe(O), i.wipe(_);
      }, h;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(oo);
var cu = {}, Ji = {}, ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
function kp(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
ao.isSerializableHash = kp;
Object.defineProperty(Ji, "__esModule", { value: !0 });
var rr = ao, zp = Nr, qp = Ut, uu = (
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
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), qp.wipe(i);
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
Ji.HMAC = uu;
function Bp(t, e, r) {
  var i = new uu(t, e);
  i.update(r);
  var s = i.digest();
  return i.clean(), s;
}
Ji.hmac = Bp;
Ji.equal = zp.equal;
Object.defineProperty(cu, "__esModule", { value: !0 });
var Sa = Ji, xa = Ut, Kp = (
  /** @class */
  function() {
    function t(e, r, i, s) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var n = Sa.hmac(this._hash, i, r);
      this._hmac = new Sa.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), xa.wipe(this._buffer), xa.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Vp = cu.HKDF = Kp, Gs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = le, r = Ut;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var i = (
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
  function n(o, h, l, d, f) {
    for (; f >= 64; ) {
      for (var y = h[0], b = h[1], _ = h[2], O = h[3], L = h[4], M = h[5], S = h[6], C = h[7], v = 0; v < 16; v++) {
        var w = d + v * 4;
        o[v] = e.readUint32BE(l, w);
      }
      for (var v = 16; v < 64; v++) {
        var g = o[v - 2], c = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = o[v - 15];
        var p = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        o[v] = (c + o[v - 7] | 0) + (p + o[v - 16] | 0);
      }
      for (var v = 0; v < 64; v++) {
        var c = (((L >>> 6 | L << 26) ^ (L >>> 11 | L << 21) ^ (L >>> 25 | L << 7)) + (L & M ^ ~L & S) | 0) + (C + (s[v] + o[v] | 0) | 0) | 0, p = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & b ^ y & _ ^ b & _) | 0;
        C = S, S = M, M = L, L = O + c | 0, O = _, _ = b, b = y, y = c + p | 0;
      }
      h[0] += y, h[1] += b, h[2] += _, h[3] += O, h[4] += L, h[5] += M, h[6] += S, h[7] += C, d += 64, f -= 64;
    }
    return d;
  }
  function a(o) {
    var h = new i();
    h.update(o);
    var l = h.digest();
    return h.clean(), l;
  }
  t.hash = a;
})(Gs);
var co = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = yi, r = Ut;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function i(v) {
    const w = new Float64Array(16);
    if (v)
      for (let g = 0; g < v.length; g++)
        w[g] = v[g];
    return w;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const n = i([56129, 1]);
  function a(v) {
    let w = 1;
    for (let g = 0; g < 16; g++) {
      let c = v[g] + w + 65535;
      w = Math.floor(c / 65536), v[g] = c - w * 65536;
    }
    v[0] += w - 1 + 37 * (w - 1);
  }
  function o(v, w, g) {
    const c = ~(g - 1);
    for (let p = 0; p < 16; p++) {
      const P = c & (v[p] ^ w[p]);
      v[p] ^= P, w[p] ^= P;
    }
  }
  function h(v, w) {
    const g = i(), c = i();
    for (let p = 0; p < 16; p++)
      c[p] = w[p];
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
  function l(v, w) {
    for (let g = 0; g < 16; g++)
      v[g] = w[2 * g] + (w[2 * g + 1] << 8);
    v[15] &= 32767;
  }
  function d(v, w, g) {
    for (let c = 0; c < 16; c++)
      v[c] = w[c] + g[c];
  }
  function f(v, w, g) {
    for (let c = 0; c < 16; c++)
      v[c] = w[c] - g[c];
  }
  function y(v, w, g) {
    let c, p, P = 0, R = 0, F = 0, B = 0, G = 0, x = 0, A = 0, Z = 0, z = 0, $ = 0, k = 0, U = 0, q = 0, oe = 0, K = 0, ie = 0, Q = 0, ne = 0, N = 0, T = 0, D = 0, u = 0, E = 0, H = 0, J = 0, be = 0, Ie = 0, _e = 0, Ne = 0, He = 0, qe = 0, xe = g[0], Ee = g[1], we = g[2], me = g[3], ye = g[4], pe = g[5], fe = g[6], ce = g[7], ve = g[8], Se = g[9], ue = g[10], Oe = g[11], Ce = g[12], Re = g[13], Pe = g[14], Ae = g[15];
    c = w[0], P += c * xe, R += c * Ee, F += c * we, B += c * me, G += c * ye, x += c * pe, A += c * fe, Z += c * ce, z += c * ve, $ += c * Se, k += c * ue, U += c * Oe, q += c * Ce, oe += c * Re, K += c * Pe, ie += c * Ae, c = w[1], R += c * xe, F += c * Ee, B += c * we, G += c * me, x += c * ye, A += c * pe, Z += c * fe, z += c * ce, $ += c * ve, k += c * Se, U += c * ue, q += c * Oe, oe += c * Ce, K += c * Re, ie += c * Pe, Q += c * Ae, c = w[2], F += c * xe, B += c * Ee, G += c * we, x += c * me, A += c * ye, Z += c * pe, z += c * fe, $ += c * ce, k += c * ve, U += c * Se, q += c * ue, oe += c * Oe, K += c * Ce, ie += c * Re, Q += c * Pe, ne += c * Ae, c = w[3], B += c * xe, G += c * Ee, x += c * we, A += c * me, Z += c * ye, z += c * pe, $ += c * fe, k += c * ce, U += c * ve, q += c * Se, oe += c * ue, K += c * Oe, ie += c * Ce, Q += c * Re, ne += c * Pe, N += c * Ae, c = w[4], G += c * xe, x += c * Ee, A += c * we, Z += c * me, z += c * ye, $ += c * pe, k += c * fe, U += c * ce, q += c * ve, oe += c * Se, K += c * ue, ie += c * Oe, Q += c * Ce, ne += c * Re, N += c * Pe, T += c * Ae, c = w[5], x += c * xe, A += c * Ee, Z += c * we, z += c * me, $ += c * ye, k += c * pe, U += c * fe, q += c * ce, oe += c * ve, K += c * Se, ie += c * ue, Q += c * Oe, ne += c * Ce, N += c * Re, T += c * Pe, D += c * Ae, c = w[6], A += c * xe, Z += c * Ee, z += c * we, $ += c * me, k += c * ye, U += c * pe, q += c * fe, oe += c * ce, K += c * ve, ie += c * Se, Q += c * ue, ne += c * Oe, N += c * Ce, T += c * Re, D += c * Pe, u += c * Ae, c = w[7], Z += c * xe, z += c * Ee, $ += c * we, k += c * me, U += c * ye, q += c * pe, oe += c * fe, K += c * ce, ie += c * ve, Q += c * Se, ne += c * ue, N += c * Oe, T += c * Ce, D += c * Re, u += c * Pe, E += c * Ae, c = w[8], z += c * xe, $ += c * Ee, k += c * we, U += c * me, q += c * ye, oe += c * pe, K += c * fe, ie += c * ce, Q += c * ve, ne += c * Se, N += c * ue, T += c * Oe, D += c * Ce, u += c * Re, E += c * Pe, H += c * Ae, c = w[9], $ += c * xe, k += c * Ee, U += c * we, q += c * me, oe += c * ye, K += c * pe, ie += c * fe, Q += c * ce, ne += c * ve, N += c * Se, T += c * ue, D += c * Oe, u += c * Ce, E += c * Re, H += c * Pe, J += c * Ae, c = w[10], k += c * xe, U += c * Ee, q += c * we, oe += c * me, K += c * ye, ie += c * pe, Q += c * fe, ne += c * ce, N += c * ve, T += c * Se, D += c * ue, u += c * Oe, E += c * Ce, H += c * Re, J += c * Pe, be += c * Ae, c = w[11], U += c * xe, q += c * Ee, oe += c * we, K += c * me, ie += c * ye, Q += c * pe, ne += c * fe, N += c * ce, T += c * ve, D += c * Se, u += c * ue, E += c * Oe, H += c * Ce, J += c * Re, be += c * Pe, Ie += c * Ae, c = w[12], q += c * xe, oe += c * Ee, K += c * we, ie += c * me, Q += c * ye, ne += c * pe, N += c * fe, T += c * ce, D += c * ve, u += c * Se, E += c * ue, H += c * Oe, J += c * Ce, be += c * Re, Ie += c * Pe, _e += c * Ae, c = w[13], oe += c * xe, K += c * Ee, ie += c * we, Q += c * me, ne += c * ye, N += c * pe, T += c * fe, D += c * ce, u += c * ve, E += c * Se, H += c * ue, J += c * Oe, be += c * Ce, Ie += c * Re, _e += c * Pe, Ne += c * Ae, c = w[14], K += c * xe, ie += c * Ee, Q += c * we, ne += c * me, N += c * ye, T += c * pe, D += c * fe, u += c * ce, E += c * ve, H += c * Se, J += c * ue, be += c * Oe, Ie += c * Ce, _e += c * Re, Ne += c * Pe, He += c * Ae, c = w[15], ie += c * xe, Q += c * Ee, ne += c * we, N += c * me, T += c * ye, D += c * pe, u += c * fe, E += c * ce, H += c * ve, J += c * Se, be += c * ue, Ie += c * Oe, _e += c * Ce, Ne += c * Re, He += c * Pe, qe += c * Ae, P += 38 * Q, R += 38 * ne, F += 38 * N, B += 38 * T, G += 38 * D, x += 38 * u, A += 38 * E, Z += 38 * H, z += 38 * J, $ += 38 * be, k += 38 * Ie, U += 38 * _e, q += 38 * Ne, oe += 38 * He, K += 38 * qe, p = 1, c = P + p + 65535, p = Math.floor(c / 65536), P = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = x + p + 65535, p = Math.floor(c / 65536), x = c - p * 65536, c = A + p + 65535, p = Math.floor(c / 65536), A = c - p * 65536, c = Z + p + 65535, p = Math.floor(c / 65536), Z = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = U + p + 65535, p = Math.floor(c / 65536), U = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = K + p + 65535, p = Math.floor(c / 65536), K = c - p * 65536, c = ie + p + 65535, p = Math.floor(c / 65536), ie = c - p * 65536, P += p - 1 + 37 * (p - 1), p = 1, c = P + p + 65535, p = Math.floor(c / 65536), P = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = x + p + 65535, p = Math.floor(c / 65536), x = c - p * 65536, c = A + p + 65535, p = Math.floor(c / 65536), A = c - p * 65536, c = Z + p + 65535, p = Math.floor(c / 65536), Z = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = U + p + 65535, p = Math.floor(c / 65536), U = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = K + p + 65535, p = Math.floor(c / 65536), K = c - p * 65536, c = ie + p + 65535, p = Math.floor(c / 65536), ie = c - p * 65536, P += p - 1 + 37 * (p - 1), v[0] = P, v[1] = R, v[2] = F, v[3] = B, v[4] = G, v[5] = x, v[6] = A, v[7] = Z, v[8] = z, v[9] = $, v[10] = k, v[11] = U, v[12] = q, v[13] = oe, v[14] = K, v[15] = ie;
  }
  function b(v, w) {
    y(v, w, w);
  }
  function _(v, w) {
    const g = i();
    for (let c = 0; c < 16; c++)
      g[c] = w[c];
    for (let c = 253; c >= 0; c--)
      b(g, g), c !== 2 && c !== 4 && y(g, g, w);
    for (let c = 0; c < 16; c++)
      v[c] = g[c];
  }
  function O(v, w) {
    const g = new Uint8Array(32), c = new Float64Array(80), p = i(), P = i(), R = i(), F = i(), B = i(), G = i();
    for (let z = 0; z < 31; z++)
      g[z] = v[z];
    g[31] = v[31] & 127 | 64, g[0] &= 248, l(c, w);
    for (let z = 0; z < 16; z++)
      P[z] = c[z];
    p[0] = F[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = g[z >>> 3] >>> (z & 7) & 1;
      o(p, P, $), o(R, F, $), d(B, p, R), f(p, p, R), d(R, P, F), f(P, P, F), b(F, B), b(G, p), y(p, R, p), y(R, P, B), d(B, p, R), f(p, p, R), b(P, p), f(R, F, G), y(p, R, n), d(p, p, F), y(R, R, p), y(p, F, G), y(F, P, c), b(P, B), o(p, P, $), o(R, F, $);
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
    return O(v, s);
  }
  t.scalarMultBase = L;
  function M(v) {
    if (v.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(v);
    return {
      publicKey: L(w),
      secretKey: w
    };
  }
  t.generateKeyPairFromSeed = M;
  function S(v) {
    const w = (0, e.randomBytes)(32, v), g = M(w);
    return (0, r.wipe)(w), g;
  }
  t.generateKeyPair = S;
  function C(v, w, g = !1) {
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = O(v, w);
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
})(co);
var Da = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, s = e.length, n; i < s; i++)
      (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Hp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Wp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Zp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i, s) {
      this.name = e, this.version = r, this.os = i, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Gp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Yp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Jp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Xp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ia = 3, Qp = [
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
  ["searchbot", Jp]
], Oa = [
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
function eg(t) {
  return t ? Ca(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Yp() : typeof navigator < "u" ? Ca(navigator.userAgent) : ig();
}
function tg(t) {
  return t !== "" && Qp.reduce(function(e, r) {
    var i = r[0], s = r[1];
    if (e)
      return e;
    var n = s.exec(t);
    return !!n && [i, n];
  }, !1);
}
function Ca(t) {
  var e = tg(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new Gp();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Ia && (s = Da(Da([], s, !0), sg(Ia - s.length), !0)) : s = [];
  var n = s.join("."), a = rg(t), o = Xp.exec(t);
  return o && o[1] ? new Zp(r, n, a, o[1]) : new Hp(r, n, a);
}
function rg(t) {
  for (var e = 0, r = Oa.length; e < r; e++) {
    var i = Oa[e], s = i[0], n = i[1], a = n.exec(t);
    if (a)
      return s;
  }
  return null;
}
function ig() {
  var t = typeof process < "u" && process.version;
  return t ? new Wp(process.version.slice(1)) : null;
}
function sg(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.getLocalStorage = Fe.getLocalStorageOrThrow = Fe.getCrypto = Fe.getCryptoOrThrow = lu = Fe.getLocation = Fe.getLocationOrThrow = lo = Fe.getNavigator = Fe.getNavigatorOrThrow = uo = Fe.getDocument = Fe.getDocumentOrThrow = Fe.getFromWindowOrThrow = Fe.getFromWindow = void 0;
function Jr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Fe.getFromWindow = Jr;
function mi(t) {
  const e = Jr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Fe.getFromWindowOrThrow = mi;
function ng() {
  return mi("document");
}
Fe.getDocumentOrThrow = ng;
function og() {
  return Jr("document");
}
var uo = Fe.getDocument = og;
function ag() {
  return mi("navigator");
}
Fe.getNavigatorOrThrow = ag;
function cg() {
  return Jr("navigator");
}
var lo = Fe.getNavigator = cg;
function ug() {
  return mi("location");
}
Fe.getLocationOrThrow = ug;
function lg() {
  return Jr("location");
}
var lu = Fe.getLocation = lg;
function hg() {
  return mi("crypto");
}
Fe.getCryptoOrThrow = hg;
function dg() {
  return Jr("crypto");
}
Fe.getCrypto = dg;
function fg() {
  return mi("localStorage");
}
Fe.getLocalStorageOrThrow = fg;
function pg() {
  return Jr("localStorage");
}
Fe.getLocalStorage = pg;
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
var hu = ho.getWindowMetadata = void 0;
const Ta = Fe;
function gg() {
  let t, e;
  try {
    t = Ta.getDocumentOrThrow(), e = Ta.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const f = t.getElementsByTagName("link"), y = [];
    for (let b = 0; b < f.length; b++) {
      const _ = f[b], O = _.getAttribute("rel");
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
  function i(...f) {
    const y = t.getElementsByTagName("meta");
    for (let b = 0; b < y.length; b++) {
      const _ = y[b], O = ["itemprop", "property", "name"].map((L) => _.getAttribute(L)).filter((L) => L ? f.includes(L) : !1);
      if (O.length && O) {
        const L = _.getAttribute("content");
        if (L)
          return L;
      }
    }
    return "";
  }
  function s() {
    let f = i("name", "og:site_name", "og:title", "twitter:title");
    return f || (f = t.title), f;
  }
  function n() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const a = s(), o = n(), h = e.origin, l = r();
  return {
    description: o,
    url: h,
    icons: l,
    name: a
  };
}
hu = ho.getWindowMetadata = gg;
var Fi = {}, yg = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), du = "%[a-f0-9]{2}", Na = new RegExp("(" + du + ")|([^%]+?)", "gi"), Aa = new RegExp("(" + du + ")+", "gi");
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
function mg(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Na) || [], r = 1; r < e.length; r++)
      t = Un(e, r).join(""), e = t.match(Na) || [];
    return t;
  }
}
function vg(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Aa.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = mg(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = Aa.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), n = 0; n < s.length; n++) {
    var a = s[n];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var bg = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return vg(t);
  }
}, wg = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, _g = function(t, e) {
  for (var r = {}, i = Object.keys(t), s = Array.isArray(e), n = 0; n < i.length; n++) {
    var a = i[n], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = yg, r = bg, i = wg, s = _g, n = (S) => S == null, a = Symbol("encodeFragmentIdentifier");
  function o(S) {
    switch (S.arrayFormat) {
      case "index":
        return (C) => (v, w) => {
          const g = v.length;
          return w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? v : w === null ? [...v, [d(C, S), "[", g, "]"].join("")] : [
            ...v,
            [d(C, S), "[", d(g, S), "]=", d(w, S)].join("")
          ];
        };
      case "bracket":
        return (C) => (v, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? v : w === null ? [...v, [d(C, S), "[]"].join("")] : [...v, [d(C, S), "[]=", d(w, S)].join("")];
      case "colon-list-separator":
        return (C) => (v, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? v : w === null ? [...v, [d(C, S), ":list="].join("")] : [...v, [d(C, S), ":list=", d(w, S)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const C = S.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (w, g) => g === void 0 || S.skipNull && g === null || S.skipEmptyString && g === "" ? w : (g = g === null ? "" : g, w.length === 0 ? [[d(v, S), C, d(g, S)].join("")] : [[w, d(g, S)].join(S.arrayFormatSeparator)]);
      }
      default:
        return (C) => (v, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? v : w === null ? [...v, d(C, S)] : [...v, [d(C, S), "=", d(w, S)].join("")];
    }
  }
  function h(S) {
    let C;
    switch (S.arrayFormat) {
      case "index":
        return (v, w, g) => {
          if (C = /\[(\d*)\]$/.exec(v), v = v.replace(/\[\d*\]$/, ""), !C) {
            g[v] = w;
            return;
          }
          g[v] === void 0 && (g[v] = {}), g[v][C[1]] = w;
        };
      case "bracket":
        return (v, w, g) => {
          if (C = /(\[\])$/.exec(v), v = v.replace(/\[\]$/, ""), !C) {
            g[v] = w;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [w];
            return;
          }
          g[v] = [].concat(g[v], w);
        };
      case "colon-list-separator":
        return (v, w, g) => {
          if (C = /(:list)$/.exec(v), v = v.replace(/:list$/, ""), !C) {
            g[v] = w;
            return;
          }
          if (g[v] === void 0) {
            g[v] = [w];
            return;
          }
          g[v] = [].concat(g[v], w);
        };
      case "comma":
      case "separator":
        return (v, w, g) => {
          const c = typeof w == "string" && w.includes(S.arrayFormatSeparator), p = typeof w == "string" && !c && f(w, S).includes(S.arrayFormatSeparator);
          w = p ? f(w, S) : w;
          const P = c || p ? w.split(S.arrayFormatSeparator).map((R) => f(R, S)) : w === null ? w : f(w, S);
          g[v] = P;
        };
      case "bracket-separator":
        return (v, w, g) => {
          const c = /(\[\])$/.test(v);
          if (v = v.replace(/\[\]$/, ""), !c) {
            g[v] = w && f(w, S);
            return;
          }
          const p = w === null ? [] : w.split(S.arrayFormatSeparator).map((P) => f(P, S));
          if (g[v] === void 0) {
            g[v] = p;
            return;
          }
          g[v] = [].concat(g[v], p);
        };
      default:
        return (v, w, g) => {
          if (g[v] === void 0) {
            g[v] = w;
            return;
          }
          g[v] = [].concat(g[v], w);
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
  function b(S) {
    const C = S.indexOf("#");
    return C !== -1 && (S = S.slice(0, C)), S;
  }
  function _(S) {
    let C = "";
    const v = S.indexOf("#");
    return v !== -1 && (C = S.slice(v)), C;
  }
  function O(S) {
    S = b(S);
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
    const v = h(C), w = /* @__PURE__ */ Object.create(null);
    if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
      return w;
    for (const g of S.split("&")) {
      if (g === "")
        continue;
      let [c, p] = i(C.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(C.arrayFormat) ? p : f(p, C), v(f(c, C), p, w);
    }
    for (const g of Object.keys(w)) {
      const c = w[g];
      if (typeof c == "object" && c !== null)
        for (const p of Object.keys(c))
          c[p] = L(c[p], C);
      else
        w[g] = L(c, C);
    }
    return C.sort === !1 ? w : (C.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(C.sort)).reduce((g, c) => {
      const p = w[c];
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
    const v = (p) => C.skipNull && n(S[p]) || C.skipEmptyString && S[p] === "", w = o(C), g = {};
    for (const p of Object.keys(S))
      v(p) || (g[p] = S[p]);
    const c = Object.keys(g);
    return C.sort !== !1 && c.sort(C.sort), c.map((p) => {
      const P = S[p];
      return P === void 0 ? "" : P === null ? d(p, C) : Array.isArray(P) ? P.length === 0 && C.arrayFormat === "bracket-separator" ? d(p, C) + "[]" : P.reduce(w(p), []).join("&") : d(p, C) + "=" + d(P, C);
    }).filter((p) => p.length > 0).join("&");
  }, t.parseUrl = (S, C) => {
    C = Object.assign({
      decode: !0
    }, C);
    const [v, w] = i(S, "#");
    return Object.assign(
      {
        url: v.split("?")[0] || "",
        query: M(O(S), C)
      },
      C && C.parseFragmentIdentifier && w ? { fragmentIdentifier: f(w, C) } : {}
    );
  }, t.stringifyUrl = (S, C) => {
    C = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, C);
    const v = b(S.url).split("?")[0] || "", w = t.extract(S.url), g = t.parse(w, { sort: !1 }), c = Object.assign(g, S.query);
    let p = t.stringify(c, C);
    p && (p = `?${p}`);
    let P = _(S.url);
    return S.fragmentIdentifier && (P = `#${C[a] ? d(S.fragmentIdentifier, C) : S.fragmentIdentifier}`), `${v}${p}${P}`;
  }, t.pick = (S, C, v) => {
    v = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, v);
    const { url: w, query: g, fragmentIdentifier: c } = t.parseUrl(S, v);
    return t.stringifyUrl({
      url: w,
      query: s(g, C),
      fragmentIdentifier: c
    }, v);
  }, t.exclude = (S, C, v) => {
    const w = Array.isArray(C) ? (g) => !C.includes(g) : (g, c) => !C(g, c);
    return t.pick(S, w, v);
  };
})(Fi);
const Eg = {
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
function fu(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const pu = "base10", Ot = "base16", $n = "base64pad", fo = "utf8", gu = 0, Xr = 1, Sg = 0, Ra = 1, jn = 12, po = 32;
function xg() {
  const t = co.generateKeyPair();
  return { privateKey: Ct(t.secretKey, Ot), publicKey: Ct(t.publicKey, Ot) };
}
function kn() {
  const t = yi.randomBytes(po);
  return Ct(t, Ot);
}
function Dg(t, e) {
  const r = co.sharedKey(Rt(t, Ot), Rt(e, Ot), !0), i = new Vp(Gs.SHA256, r).expand(po);
  return Ct(i, Ot);
}
function Ig(t) {
  const e = Gs.hash(Rt(t, Ot));
  return Ct(e, Ot);
}
function ui(t) {
  const e = Gs.hash(Rt(t, fo));
  return Ct(e, Ot);
}
function Og(t) {
  return Rt(`${t}`, pu);
}
function Xi(t) {
  return Number(Ct(t, pu));
}
function Cg(t) {
  const e = Og(typeof t.type < "u" ? t.type : gu);
  if (Xi(e) === Xr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Rt(t.senderPublicKey, Ot) : void 0, i = typeof t.iv < "u" ? Rt(t.iv, Ot) : yi.randomBytes(jn), s = new oo.ChaCha20Poly1305(Rt(t.symKey, Ot)).seal(i, Rt(t.message, fo));
  return Ng({ type: e, sealed: s, iv: i, senderPublicKey: r });
}
function Tg(t) {
  const e = new oo.ChaCha20Poly1305(Rt(t.symKey, Ot)), { sealed: r, iv: i } = Is(t.encoded), s = e.open(i, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Ct(s, fo);
}
function Ng(t) {
  if (Xi(t.type) === Xr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ct(Fn([t.type, t.senderPublicKey, t.iv, t.sealed]), $n);
  }
  return Ct(Fn([t.type, t.iv, t.sealed]), $n);
}
function Is(t) {
  const e = Rt(t, $n), r = e.slice(Sg, Ra), i = Ra;
  if (Xi(r) === Xr) {
    const o = i + po, h = o + jn, l = e.slice(i, o), d = e.slice(o, h), f = e.slice(h);
    return { type: r, sealed: f, iv: d, senderPublicKey: l };
  }
  const s = i + jn, n = e.slice(i, s), a = e.slice(s);
  return { type: r, sealed: a, iv: n };
}
function Ag(t, e) {
  const r = Is(t);
  return yu({ type: Xi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ct(r.senderPublicKey, Ot) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function yu(t) {
  const e = (t == null ? void 0 : t.type) || gu;
  if (e === Xr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Pa(t) {
  return t.type === Xr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Rg = Object.defineProperty, La = Object.getOwnPropertySymbols, Pg = Object.prototype.hasOwnProperty, Lg = Object.prototype.propertyIsEnumerable, Fa = (t, e, r) => e in t ? Rg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ma = (t, e) => {
  for (var r in e || (e = {}))
    Pg.call(e, r) && Fa(t, r, e[r]);
  if (La)
    for (var r of La(e))
      Lg.call(e, r) && Fa(t, r, e[r]);
  return t;
};
const Fg = "ReactNative", Mt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Mg = "js";
function go() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function vi() {
  return !uo() && !!lo() && navigator.product === Fg;
}
function bi() {
  return !go() && !!lo() && !!uo();
}
function Qi() {
  return vi() ? Mt.reactNative : go() ? Mt.node : bi() ? Mt.browser : Mt.unknown;
}
function Ug() {
  var t;
  try {
    return vi() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function $g(t, e) {
  let r = Fi.parse(t);
  return r = Ma(Ma({}, r), e), t = Fi.stringify(r), t;
}
function jg() {
  return hu() || { name: "", description: "", url: "", icons: [""] };
}
function kg() {
  if (Qi() === Mt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = eg();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function zg() {
  var t;
  const e = Qi();
  return e === Mt.browser ? [e, ((t = lu()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function qg(t, e, r) {
  const i = kg(), s = zg();
  return [[t, e].join("-"), [Mg, r].join("-"), i, s].join("/");
}
function Bg({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: s, projectId: n, useOnCloseEvent: a, bundleId: o }) {
  const h = r.split("?"), l = qg(t, e, i), d = { auth: s, ua: l, projectId: n, useOnCloseEvent: a || void 0, origin: o || void 0 }, f = $g(h[1] || "", d);
  return h[0] + "?" + f;
}
function Br(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function mu(t) {
  return Object.fromEntries(t.entries());
}
function vu(t) {
  return new Map(Object.entries(t));
}
function ii(t = te.FIVE_MINUTES, e) {
  const r = te.toMiliseconds(t || te.FIVE_MINUTES);
  let i, s, n;
  return { resolve: (a) => {
    n && i && (clearTimeout(n), i(a));
  }, reject: (a) => {
    n && s && (clearTimeout(n), s(a));
  }, done: () => new Promise((a, o) => {
    n = setTimeout(() => {
      o(new Error(e));
    }, r), i = a, s = o;
  }) };
}
function Mi(t, e, r) {
  return new Promise(async (i, s) => {
    const n = setTimeout(() => s(new Error(r)), e);
    try {
      const a = await t;
      i(a);
    } catch (a) {
      s(a);
    }
    clearTimeout(n);
  });
}
function bu(t, e) {
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
function Kg(t) {
  return bu("topic", t);
}
function Vg(t) {
  return bu("id", t);
}
function wu(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function Ft(t, e) {
  return te.fromMiliseconds((e || Date.now()) + te.toMiliseconds(t));
}
function Sr(t) {
  return Date.now() >= te.toMiliseconds(t);
}
function We(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Hg({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let s = i == null ? void 0 : i.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const n = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = Qi();
    a === Mt.browser ? n.startsWith("https://") ? window.open(n, "_blank", "noreferrer noopener") : window.open(n, "_self", "noreferrer noopener") : a === Mt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(n);
  } catch (i) {
    console.error(i);
  }
}
async function Wg(t, e) {
  try {
    return await t.getItem(e) || (bi() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const Zg = "irn";
function zn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Zg };
}
function ws(t) {
  const e = Eg[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Gg = Object.defineProperty, Yg = Object.defineProperties, Jg = Object.getOwnPropertyDescriptors, Ua = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Qg = Object.prototype.propertyIsEnumerable, $a = (t, e, r) => e in t ? Gg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ey = (t, e) => {
  for (var r in e || (e = {}))
    Xg.call(e, r) && $a(t, r, e[r]);
  if (Ua)
    for (var r of Ua(e))
      Qg.call(e, r) && $a(t, r, e[r]);
  return t;
}, ty = (t, e) => Yg(t, Jg(e));
function ry(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(i)) {
      const n = s.replace(i, ""), a = t[s];
      r[n] = a;
    }
  }), r;
}
function ja(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), s = t.substring(e + 1, r).split("@"), n = typeof r < "u" ? t.substring(r) : "", a = Fi.parse(n);
  return { protocol: i, topic: iy(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: ry(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function iy(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function sy(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((s) => {
    const n = r + e + s;
    t[s] && (i[n] = t[s]);
  }), i;
}
function ny(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + Fi.stringify(ty(ey({ symKey: t.symKey }, sy(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function wi(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, s] = r.split(":");
    e.push(`${i}:${s}`);
  }), e;
}
function oy(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...wi(r.accounts));
  }), e;
}
function ay(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    wi(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function cy(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    wi(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
const uy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, ly = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function W(t, e) {
  const { message: r, code: i } = ly[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function ke(t, e) {
  const { message: r, code: i } = uy[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function es(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Os(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function It(t) {
  return typeof t > "u";
}
function ht(t, e) {
  return e && It(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function yo(t, e) {
  return e && It(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function hy(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), s = Object.keys(r);
  let n = !0;
  return Br(s, i) ? (i.forEach((a) => {
    const { accounts: o, methods: h, events: l } = t.namespaces[a], d = wi(o), f = r[a];
    (!Br(fu(a, f), d) || !Br(f.methods, h) || !Br(f.events, l)) && (n = !1);
  }), n) : !1;
}
function Cs(t) {
  return ht(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function dy(t) {
  if (ht(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Cs(r);
    }
  }
  return !1;
}
function fy(t) {
  if (ht(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function py(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function gy(t) {
  return t == null ? void 0 : t.topic;
}
function yy(t, e) {
  let r = null;
  return ht(t == null ? void 0 : t.publicKey, !1) || (r = W("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function ka(t) {
  let e = !0;
  return es(t) ? t.length && (e = t.every((r) => ht(r, !1))) : e = !1, e;
}
function my(t, e, r) {
  let i = null;
  return es(e) && e.length ? e.forEach((s) => {
    i || Cs(s) || (i = ke("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Cs(t) || (i = ke("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function vy(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([s, n]) => {
    if (i)
      return;
    const a = my(s, fu(s, n), `${e} ${r}`);
    a && (i = a);
  }), i;
}
function by(t, e) {
  let r = null;
  return es(t) ? t.forEach((i) => {
    r || dy(i) || (r = ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function wy(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const s = by(i == null ? void 0 : i.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function _y(t, e) {
  let r = null;
  return ka(t == null ? void 0 : t.methods) ? ka(t == null ? void 0 : t.events) || (r = ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function _u(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const s = _y(i, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function Ey(t, e, r) {
  let i = null;
  if (t && Os(t)) {
    const s = _u(t, e);
    s && (i = s);
    const n = vy(t, e, r);
    n && (i = n);
  } else
    i = W("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function gn(t, e) {
  let r = null;
  if (t && Os(t)) {
    const i = _u(t, e);
    i && (r = i);
    const s = wy(t, e);
    s && (r = s);
  } else
    r = W("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Eu(t) {
  return ht(t.protocol, !0);
}
function Sy(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && es(t) && t.length && t.forEach((i) => {
    r = Eu(i);
  }), r;
}
function xy(t) {
  return typeof t == "number";
}
function At(t) {
  return typeof t < "u" && typeof t !== null;
}
function Dy(t) {
  return !(!t || typeof t != "object" || !t.code || !yo(t.code, !1) || !t.message || !ht(t.message, !1));
}
function Iy(t) {
  return !(It(t) || !ht(t.method, !1));
}
function Oy(t) {
  return !(It(t) || It(t.result) && It(t.error) || !yo(t.id, !1) || !ht(t.jsonrpc, !1));
}
function Cy(t) {
  return !(It(t) || !ht(t.name, !1));
}
function za(t, e) {
  return !(!Cs(e) || !oy(t).includes(e));
}
function Ty(t, e, r) {
  return ht(r, !1) ? ay(t, e).includes(r) : !1;
}
function Ny(t, e, r) {
  return ht(r, !1) ? cy(t, e).includes(r) : !1;
}
function qa(t, e, r) {
  let i = null;
  const s = Ay(t), n = Ry(e), a = Object.keys(s), o = Object.keys(n), h = Ba(Object.keys(t)), l = Ba(Object.keys(e)), d = h.filter((f) => !l.includes(f));
  return d.length && (i = W("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Br(a, o) || (i = W("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || i)
      return;
    const y = wi(e[f].accounts);
    y.includes(f) || (i = W("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${y.toString()}`));
  }), a.forEach((f) => {
    i || (Br(s[f].methods, n[f].methods) ? Br(s[f].events, n[f].events) || (i = W("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : i = W("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), i;
}
function Ay(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Ba(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Ry(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = wi(t[r].accounts);
      i == null || i.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((n) => n.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Py(t, e) {
  return yo(t, !1) && t <= e.max && t >= e.min;
}
function Ka() {
  const t = Qi();
  return new Promise((e) => {
    switch (t) {
      case Mt.browser:
        e(Ly());
        break;
      case Mt.reactNative:
        e(Fy());
        break;
      case Mt.node:
        e(My());
        break;
      default:
        e(!0);
    }
  });
}
function Ly() {
  return bi() && (navigator == null ? void 0 : navigator.onLine);
}
async function Fy() {
  if (vi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function My() {
  return !0;
}
function Uy(t) {
  switch (Qi()) {
    case Mt.browser:
      $y(t);
      break;
    case Mt.reactNative:
      jy(t);
      break;
  }
}
function $y(t) {
  !vi() && bi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function jy(t) {
  vi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const yn = {};
let gs = class {
  static get(e) {
    return yn[e];
  }
  static set(e, r) {
    yn[e] = r;
  }
  static delete(e) {
    delete yn[e];
  }
};
const ky = "PARSE_ERROR", zy = "INVALID_REQUEST", qy = "METHOD_NOT_FOUND", By = "INVALID_PARAMS", Su = "INTERNAL_ERROR", mo = "SERVER_ERROR", Ky = [-32700, -32600, -32601, -32602, -32603], Pi = {
  [ky]: { code: -32700, message: "Parse error" },
  [zy]: { code: -32600, message: "Invalid Request" },
  [qy]: { code: -32601, message: "Method not found" },
  [By]: { code: -32602, message: "Invalid params" },
  [Su]: { code: -32603, message: "Internal error" },
  [mo]: { code: -32e3, message: "Server error" }
}, xu = mo;
function Vy(t) {
  return Ky.includes(t);
}
function Va(t) {
  return Object.keys(Pi).includes(t) ? Pi[t] : Pi[xu];
}
function Hy(t) {
  const e = Object.values(Pi).find((r) => r.code === t);
  return e || Pi[xu];
}
function Wy(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Du = {}, lr = {}, Ha;
function Zy() {
  if (Ha)
    return lr;
  Ha = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.isBrowserCryptoAvailable = lr.getSubtleCrypto = lr.getBrowerCrypto = void 0;
  function t() {
    return (sr == null ? void 0 : sr.crypto) || (sr == null ? void 0 : sr.msCrypto) || {};
  }
  lr.getBrowerCrypto = t;
  function e() {
    const i = t();
    return i.subtle || i.webkitSubtle;
  }
  lr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return lr.isBrowserCryptoAvailable = r, lr;
}
var hr = {}, Wa;
function Gy() {
  if (Wa)
    return hr;
  Wa = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.isBrowser = hr.isNode = hr.isReactNative = void 0;
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
  e.__exportStar(Zy(), t), e.__exportStar(Gy(), t);
})(Du);
function vo(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Iu(t = 6) {
  return BigInt(vo(t));
}
function li(t, e, r) {
  return {
    id: r || vo(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function bo(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function wo(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Yy(e, r)
  };
}
function Yy(t, e) {
  return typeof t > "u" ? Va(Su) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Va(mo)), { message: t })), typeof e < "u" && (t.data = e), Vy(t.code) && (t = Hy(t.code)), t);
}
class Jy {
}
class Xy extends Jy {
  constructor() {
    super();
  }
}
class Qy extends Xy {
  constructor(e) {
    super();
  }
}
const em = "^wss?:";
function tm(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function rm(t, e) {
  const r = tm(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Za(t) {
  return rm(t, em);
}
function im(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Ou(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function _o(t) {
  return Ou(t) && "method" in t;
}
function Ys(t) {
  return Ou(t) && (gr(t) || Vt(t));
}
function gr(t) {
  return "result" in t;
}
function Vt(t) {
  return "error" in t;
}
class sm extends Qy {
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
    return this.requestStrict(li(e.method, e.params || [], e.id || Iu().toString()), r);
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
        Vt(n) ? s(n.error) : i(n.result);
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
    this.events.emit("payload", e), Ys(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const nm = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {try { return require("ws") } catch (e) { } })(), om = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ga = (t) => t.split("?")[0], Ya = 10, am = nm();
class cm {
  constructor(e) {
    if (this.url = e, this.events = new Jt.EventEmitter(), this.registering = !1, !Za(e))
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
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Gi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!Za(e))
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
      const s = new URLSearchParams(e).get("origin"), n = Du.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !im(e) }, a = new am(e, [], n);
      om() ? a.onerror = (o) => {
        const h = o;
        i(this.emitError(h.error));
      } : a.on("error", (o) => {
        i(this.emitError(o));
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
    const r = typeof e.data == "string" ? Bs(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), s = i.message || i.toString(), n = wo(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return Wy(e, Ga(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ya && this.events.setMaxListeners(Ya);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Ga(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ts = { exports: {} };
Ts.exports;
(function(t, e) {
  var r = 200, i = "__lodash_hash_undefined__", s = 1, n = 2, a = 9007199254740991, o = "[object Arguments]", h = "[object Array]", l = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", y = "[object Error]", b = "[object Function]", _ = "[object GeneratorFunction]", O = "[object Map]", L = "[object Number]", M = "[object Null]", S = "[object Object]", C = "[object Promise]", v = "[object Proxy]", w = "[object RegExp]", g = "[object Set]", c = "[object String]", p = "[object Symbol]", P = "[object Undefined]", R = "[object WeakMap]", F = "[object ArrayBuffer]", B = "[object DataView]", G = "[object Float32Array]", x = "[object Float64Array]", A = "[object Int8Array]", Z = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", k = "[object Uint8ClampedArray]", U = "[object Uint16Array]", q = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[G] = Q[x] = Q[A] = Q[Z] = Q[z] = Q[$] = Q[k] = Q[U] = Q[q] = !0, Q[o] = Q[h] = Q[F] = Q[d] = Q[B] = Q[f] = Q[y] = Q[b] = Q[O] = Q[L] = Q[S] = Q[w] = Q[g] = Q[c] = Q[R] = !1;
  var ne = typeof sr == "object" && sr && sr.Object === Object && sr, N = typeof self == "object" && self && self.Object === Object && self, T = ne || N || Function("return this")(), D = e && !e.nodeType && e, u = D && !0 && t && !t.nodeType && t, E = u && u.exports === D, H = E && ne.process, J = function() {
    try {
      return H && H.binding && H.binding("util");
    } catch {
    }
  }(), be = J && J.isTypedArray;
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
  function He(m, I) {
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
  function we(m) {
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
  ), Pe = E ? T.Buffer : void 0, Ae = T.Symbol, qt = T.Uint8Array, Qt = ce.propertyIsEnumerable, vr = pe.splice, Pt = Ae ? Ae.toStringTag : void 0, Ar = Object.getOwnPropertySymbols, _i = Pe ? Pe.isBuffer : void 0, is = me(Object.keys, Object), Ze = Qr(T, "DataView"), Be = Qr(T, "Map"), Ge = Qr(T, "Promise"), Ye = Qr(T, "Set"), Je = Qr(T, "WeakMap"), Ke = Qr(Object, "create"), et = Pr(Ze), tt = Pr(Be), rt = Pr(Ge), it = Pr(Ye), st = Pr(Je), Qe = Ae ? Ae.prototype : void 0, Xe = Qe ? Qe.valueOf : void 0;
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
  function sl(m) {
    var I = this.__data__;
    if (Ke) {
      var j = I[m];
      return j === i ? void 0 : j;
    }
    return ue.call(I, m) ? I[m] : void 0;
  }
  function nl(m) {
    var I = this.__data__;
    return Ke ? I[m] !== void 0 : ue.call(I, m);
  }
  function ol(m, I) {
    var j = this.__data__;
    return this.size += this.has(m) ? 0 : 1, j[m] = Ke && I === void 0 ? i : I, this;
  }
  Ue.prototype.clear = nt, Ue.prototype.delete = ot, Ue.prototype.get = sl, Ue.prototype.has = nl, Ue.prototype.set = ol;
  function cr(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function al() {
    this.__data__ = [], this.size = 0;
  }
  function cl(m) {
    var I = this.__data__, j = ns(I, m);
    if (j < 0)
      return !1;
    var ee = I.length - 1;
    return j == ee ? I.pop() : vr.call(I, j, 1), --this.size, !0;
  }
  function ul(m) {
    var I = this.__data__, j = ns(I, m);
    return j < 0 ? void 0 : I[j][1];
  }
  function ll(m) {
    return ns(this.__data__, m) > -1;
  }
  function hl(m, I) {
    var j = this.__data__, ee = ns(j, m);
    return ee < 0 ? (++this.size, j.push([m, I])) : j[ee][1] = I, this;
  }
  cr.prototype.clear = al, cr.prototype.delete = cl, cr.prototype.get = ul, cr.prototype.has = ll, cr.prototype.set = hl;
  function Rr(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++I < j; ) {
      var ee = m[I];
      this.set(ee[0], ee[1]);
    }
  }
  function dl() {
    this.size = 0, this.__data__ = {
      hash: new Ue(),
      map: new (Be || cr)(),
      string: new Ue()
    };
  }
  function fl(m) {
    var I = os(this, m).delete(m);
    return this.size -= I ? 1 : 0, I;
  }
  function pl(m) {
    return os(this, m).get(m);
  }
  function gl(m) {
    return os(this, m).has(m);
  }
  function yl(m, I) {
    var j = os(this, m), ee = j.size;
    return j.set(m, I), this.size += j.size == ee ? 0 : 1, this;
  }
  Rr.prototype.clear = dl, Rr.prototype.delete = fl, Rr.prototype.get = pl, Rr.prototype.has = gl, Rr.prototype.set = yl;
  function ss(m) {
    var I = -1, j = m == null ? 0 : m.length;
    for (this.__data__ = new Rr(); ++I < j; )
      this.add(m[I]);
  }
  function ml(m) {
    return this.__data__.set(m, i), this;
  }
  function vl(m) {
    return this.__data__.has(m);
  }
  ss.prototype.add = ss.prototype.push = ml, ss.prototype.has = vl;
  function br(m) {
    var I = this.__data__ = new cr(m);
    this.size = I.size;
  }
  function bl() {
    this.__data__ = new cr(), this.size = 0;
  }
  function wl(m) {
    var I = this.__data__, j = I.delete(m);
    return this.size = I.size, j;
  }
  function _l(m) {
    return this.__data__.get(m);
  }
  function El(m) {
    return this.__data__.has(m);
  }
  function Sl(m, I) {
    var j = this.__data__;
    if (j instanceof cr) {
      var ee = j.__data__;
      if (!Be || ee.length < r - 1)
        return ee.push([m, I]), this.size = ++j.size, this;
      j = this.__data__ = new Rr(ee);
    }
    return j.set(m, I), this.size = j.size, this;
  }
  br.prototype.clear = bl, br.prototype.delete = wl, br.prototype.get = _l, br.prototype.has = El, br.prototype.set = Sl;
  function xl(m, I) {
    var j = as(m), ee = !j && jl(m), Me = !j && !ee && en(m), he = !j && !ee && !Me && Mo(m), Ve = j || ee || Me || he, at = Ve ? He(m.length, String) : [], dt = at.length;
    for (var je in m)
      (I || ue.call(m, je)) && !(Ve && // Safari 9 has enumerable `arguments.length` in strict mode.
      (je == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Me && (je == "offset" || je == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (je == "buffer" || je == "byteLength" || je == "byteOffset") || // Skip index properties.
      Ll(je, dt))) && at.push(je);
    return at;
  }
  function ns(m, I) {
    for (var j = m.length; j--; )
      if (Ro(m[j][0], I))
        return j;
    return -1;
  }
  function Dl(m, I, j) {
    var ee = I(m);
    return as(m) ? ee : _e(ee, j(m));
  }
  function Ei(m) {
    return m == null ? m === void 0 ? P : M : Pt && Pt in Object(m) ? Rl(m) : $l(m);
  }
  function Co(m) {
    return Si(m) && Ei(m) == o;
  }
  function To(m, I, j, ee, Me) {
    return m === I ? !0 : m == null || I == null || !Si(m) && !Si(I) ? m !== m && I !== I : Il(m, I, j, ee, To, Me);
  }
  function Il(m, I, j, ee, Me, he) {
    var Ve = as(m), at = as(I), dt = Ve ? h : wr(m), je = at ? h : wr(I);
    dt = dt == o ? S : dt, je = je == o ? S : je;
    var Lt = dt == S, Bt = je == S, gt = dt == je;
    if (gt && en(m)) {
      if (!en(I))
        return !1;
      Ve = !0, Lt = !1;
    }
    if (gt && !Lt)
      return he || (he = new br()), Ve || Mo(m) ? No(m, I, j, ee, Me, he) : Nl(m, I, dt, j, ee, Me, he);
    if (!(j & s)) {
      var $t = Lt && ue.call(m, "__wrapped__"), jt = Bt && ue.call(I, "__wrapped__");
      if ($t || jt) {
        var _r = $t ? m.value() : m, ur = jt ? I.value() : I;
        return he || (he = new br()), Me(_r, ur, j, ee, he);
      }
    }
    return gt ? (he || (he = new br()), Al(m, I, j, ee, Me, he)) : !1;
  }
  function Ol(m) {
    if (!Fo(m) || Ml(m))
      return !1;
    var I = Po(m) ? Re : K;
    return I.test(Pr(m));
  }
  function Cl(m) {
    return Si(m) && Lo(m.length) && !!Q[Ei(m)];
  }
  function Tl(m) {
    if (!Ul(m))
      return is(m);
    var I = [];
    for (var j in Object(m))
      ue.call(m, j) && j != "constructor" && I.push(j);
    return I;
  }
  function No(m, I, j, ee, Me, he) {
    var Ve = j & s, at = m.length, dt = I.length;
    if (at != dt && !(Ve && dt > at))
      return !1;
    var je = he.get(m);
    if (je && he.get(I))
      return je == I;
    var Lt = -1, Bt = !0, gt = j & n ? new ss() : void 0;
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
        if (!Ne(I, function(ur, Lr) {
          if (!xe(gt, Lr) && ($t === ur || Me($t, ur, j, ee, he)))
            return gt.push(Lr);
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
  function Nl(m, I, j, ee, Me, he, Ve) {
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
        return Ro(+m, +I);
      case y:
        return m.name == I.name && m.message == I.message;
      case w:
      case c:
        return m == I + "";
      case O:
        var at = we;
      case g:
        var dt = ee & s;
        if (at || (at = ye), m.size != I.size && !dt)
          return !1;
        var je = Ve.get(m);
        if (je)
          return je == I;
        ee |= n, Ve.set(m, I);
        var Lt = No(at(m), at(I), ee, Me, he, Ve);
        return Ve.delete(m), Lt;
      case p:
        if (Xe)
          return Xe.call(m) == Xe.call(I);
    }
    return !1;
  }
  function Al(m, I, j, ee, Me, he) {
    var Ve = j & s, at = Ao(m), dt = at.length, je = Ao(I), Lt = je.length;
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
      var ur = m[gt], Lr = I[gt];
      if (ee)
        var Uo = Ve ? ee(Lr, ur, gt, I, m, he) : ee(ur, Lr, gt, m, I, he);
      if (!(Uo === void 0 ? ur === Lr || Me(ur, Lr, j, ee, he) : Uo)) {
        jt = !1;
        break;
      }
      _r || (_r = gt == "constructor");
    }
    if (jt && !_r) {
      var cs = m.constructor, us = I.constructor;
      cs != us && "constructor" in m && "constructor" in I && !(typeof cs == "function" && cs instanceof cs && typeof us == "function" && us instanceof us) && (jt = !1);
    }
    return he.delete(m), he.delete(I), jt;
  }
  function Ao(m) {
    return Dl(m, ql, Pl);
  }
  function os(m, I) {
    var j = m.__data__;
    return Fl(I) ? j[typeof I == "string" ? "string" : "hash"] : j.map;
  }
  function Qr(m, I) {
    var j = Ee(m, I);
    return Ol(j) ? j : void 0;
  }
  function Rl(m) {
    var I = ue.call(m, Pt), j = m[Pt];
    try {
      m[Pt] = void 0;
      var ee = !0;
    } catch {
    }
    var Me = Ce.call(m);
    return ee && (I ? m[Pt] = j : delete m[Pt]), Me;
  }
  var Pl = Ar ? function(m) {
    return m == null ? [] : (m = Object(m), Ie(Ar(m), function(I) {
      return Qt.call(m, I);
    }));
  } : Bl, wr = Ei;
  (Ze && wr(new Ze(new ArrayBuffer(1))) != B || Be && wr(new Be()) != O || Ge && wr(Ge.resolve()) != C || Ye && wr(new Ye()) != g || Je && wr(new Je()) != R) && (wr = function(m) {
    var I = Ei(m), j = I == S ? m.constructor : void 0, ee = j ? Pr(j) : "";
    if (ee)
      switch (ee) {
        case et:
          return B;
        case tt:
          return O;
        case rt:
          return C;
        case it:
          return g;
        case st:
          return R;
      }
    return I;
  });
  function Ll(m, I) {
    return I = I ?? a, !!I && (typeof m == "number" || ie.test(m)) && m > -1 && m % 1 == 0 && m < I;
  }
  function Fl(m) {
    var I = typeof m;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? m !== "__proto__" : m === null;
  }
  function Ml(m) {
    return !!Oe && Oe in m;
  }
  function Ul(m) {
    var I = m && m.constructor, j = typeof I == "function" && I.prototype || ce;
    return m === j;
  }
  function $l(m) {
    return Ce.call(m);
  }
  function Pr(m) {
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
  function Ro(m, I) {
    return m === I || m !== m && I !== I;
  }
  var jl = Co(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Co : function(m) {
    return Si(m) && ue.call(m, "callee") && !Qt.call(m, "callee");
  }, as = Array.isArray;
  function kl(m) {
    return m != null && Lo(m.length) && !Po(m);
  }
  var en = _i || Kl;
  function zl(m, I) {
    return To(m, I);
  }
  function Po(m) {
    if (!Fo(m))
      return !1;
    var I = Ei(m);
    return I == b || I == _ || I == l || I == v;
  }
  function Lo(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= a;
  }
  function Fo(m) {
    var I = typeof m;
    return m != null && (I == "object" || I == "function");
  }
  function Si(m) {
    return m != null && typeof m == "object";
  }
  var Mo = be ? qe(be) : Cl;
  function ql(m) {
    return kl(m) ? xl(m) : Tl(m);
  }
  function Bl() {
    return [];
  }
  function Kl() {
    return !1;
  }
  t.exports = zl;
})(Ts, Ts.exports);
var um = Ts.exports;
const lm = /* @__PURE__ */ ks(um);
function hm(t, e) {
  return e = e || {}, new Promise(function(r, i) {
    var s = new XMLHttpRequest(), n = [], a = [], o = {}, h = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
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
    for (var l in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(d, f, y) {
        n.push(f = f.toLowerCase()), a.push([f, y]), o[f] = o[f] ? o[f] + "," + y : y;
      }), r(h());
    }, s.onerror = i, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(l, e.headers[l]);
    s.send(e.body || null);
  });
}
const dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hm
}, Symbol.toStringTag, { value: "Module" })), Ja = /* @__PURE__ */ zs(dm);
var fm = fetch || (self.fetch = Ja.default || Ja);
const pm = /* @__PURE__ */ ks(fm);
function gm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), a = n.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[a] = s;
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
      for (var w = _[M], g = 0, c = C - 1; (w !== 0 || g < L) && c !== -1; c--, g++)
        w += 256 * v[c] >>> 0, v[c] = w % o >>> 0, w = w / o >>> 0;
      if (w !== 0)
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
        for (var w = 0, g = S - 1; (v !== 0 || w < M) && g !== -1; g--, w++)
          v += o * C[g] >>> 0, C[g] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        M = w, O++;
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
  function b(_) {
    var O = y(_);
    if (O)
      return O;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: y, decode: b };
}
var ym = gm, mm = ym;
const Cu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, vm = (t) => new TextEncoder().encode(t), bm = (t) => new TextDecoder().decode(t);
class wm {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class _m {
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
    return Tu(this, e);
  }
}
class Em {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Tu(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Tu = (t, e) => new Em({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Sm {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new wm(e, r, i), this.decoder = new _m(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Js = ({ name: t, prefix: e, encode: r, decode: i }) => new Sm(t, e, r, i), ts = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = mm(r, e);
  return Js({ prefix: t, name: e, encode: i, decode: (n) => Cu(s(n)) });
}, xm = (t, e, r, i) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const a = new Uint8Array(n * r / 8 | 0);
  let o = 0, h = 0, l = 0;
  for (let d = 0; d < n; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h = h << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & h >> o);
  }
  if (o >= r || 255 & h << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Dm = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", a = 0, o = 0;
  for (let h = 0; h < t.length; ++h)
    for (o = o << 8 | t[h], a += 8; a > r; )
      a -= r, n += e[s & o >> a];
  if (a && (n += e[s & o << r - a]), i)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Js({ prefix: e, name: t, encode(s) {
  return Dm(s, i, r);
}, decode(s) {
  return xm(s, i, r, t);
} }), Im = Js({ prefix: "\0", name: "identity", encode: (t) => bm(t), decode: (t) => vm(t) });
var Om = Object.freeze({ __proto__: null, identity: Im });
const Cm = pt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Tm = Object.freeze({ __proto__: null, base2: Cm });
const Nm = pt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Am = Object.freeze({ __proto__: null, base8: Nm });
const Rm = ts({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Pm = Object.freeze({ __proto__: null, base10: Rm });
const Lm = pt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Fm = pt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Mm = Object.freeze({ __proto__: null, base16: Lm, base16upper: Fm });
const Um = pt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), $m = pt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), jm = pt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), km = pt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), zm = pt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), qm = pt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Bm = pt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Km = pt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Vm = pt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Hm = Object.freeze({ __proto__: null, base32: Um, base32upper: $m, base32pad: jm, base32padupper: km, base32hex: zm, base32hexupper: qm, base32hexpad: Bm, base32hexpadupper: Km, base32z: Vm });
const Wm = ts({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Zm = ts({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Gm = Object.freeze({ __proto__: null, base36: Wm, base36upper: Zm });
const Ym = ts({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Jm = ts({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Xm = Object.freeze({ __proto__: null, base58btc: Ym, base58flickr: Jm });
const Qm = pt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), e0 = pt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), t0 = pt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), r0 = pt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var i0 = Object.freeze({ __proto__: null, base64: Qm, base64pad: e0, base64url: t0, base64urlpad: r0 });
const Nu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), s0 = Nu.reduce((t, e, r) => (t[r] = e, t), []), n0 = Nu.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function o0(t) {
  return t.reduce((e, r) => (e += s0[r], e), "");
}
function a0(t) {
  const e = [];
  for (const r of t) {
    const i = n0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const c0 = Js({ prefix: "🚀", name: "base256emoji", encode: o0, decode: a0 });
var u0 = Object.freeze({ __proto__: null, base256emoji: c0 }), l0 = Au, Xa = 128, h0 = 127, d0 = ~h0, f0 = Math.pow(2, 31);
function Au(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= f0; )
    e[r++] = t & 255 | Xa, t /= 128;
  for (; t & d0; )
    e[r++] = t & 255 | Xa, t >>>= 7;
  return e[r] = t | 0, Au.bytes = r - i + 1, e;
}
var p0 = qn, g0 = 128, Qa = 127;
function qn(t, i) {
  var r = 0, i = i || 0, s = 0, n = i, a, o = t.length;
  do {
    if (n >= o)
      throw qn.bytes = 0, new RangeError("Could not decode varint");
    a = t[n++], r += s < 28 ? (a & Qa) << s : (a & Qa) * Math.pow(2, s), s += 7;
  } while (a >= g0);
  return qn.bytes = n - i, r;
}
var y0 = Math.pow(2, 7), m0 = Math.pow(2, 14), v0 = Math.pow(2, 21), b0 = Math.pow(2, 28), w0 = Math.pow(2, 35), _0 = Math.pow(2, 42), E0 = Math.pow(2, 49), S0 = Math.pow(2, 56), x0 = Math.pow(2, 63), D0 = function(t) {
  return t < y0 ? 1 : t < m0 ? 2 : t < v0 ? 3 : t < b0 ? 4 : t < w0 ? 5 : t < _0 ? 6 : t < E0 ? 7 : t < S0 ? 8 : t < x0 ? 9 : 10;
}, I0 = { encode: l0, decode: p0, encodingLength: D0 }, Ru = I0;
const ec = (t, e, r = 0) => (Ru.encode(t, e, r), e), tc = (t) => Ru.encodingLength(t), Bn = (t, e) => {
  const r = e.byteLength, i = tc(t), s = i + tc(r), n = new Uint8Array(s + r);
  return ec(t, n, 0), ec(r, n, i), n.set(e, s), new O0(t, r, e, n);
};
class O0 {
  constructor(e, r, i, s) {
    this.code = e, this.size = r, this.digest = i, this.bytes = s;
  }
}
const Pu = ({ name: t, code: e, encode: r }) => new C0(t, e, r);
class C0 {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Bn(this.code, r) : r.then((i) => Bn(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Lu = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), T0 = Pu({ name: "sha2-256", code: 18, encode: Lu("SHA-256") }), N0 = Pu({ name: "sha2-512", code: 19, encode: Lu("SHA-512") });
var A0 = Object.freeze({ __proto__: null, sha256: T0, sha512: N0 });
const Fu = 0, R0 = "identity", Mu = Cu, P0 = (t) => Bn(Fu, Mu(t)), L0 = { code: Fu, name: R0, encode: Mu, digest: P0 };
var F0 = Object.freeze({ __proto__: null, identity: L0 });
new TextEncoder(), new TextDecoder();
const rc = { ...Om, ...Tm, ...Am, ...Pm, ...Mm, ...Hm, ...Gm, ...Xm, ...i0, ...u0 };
({ ...A0, ...F0 });
function Uu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function M0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Uu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function $u(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const ic = $u("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), mn = $u("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = M0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), U0 = { utf8: ic, "utf-8": ic, hex: rc.base16, latin1: mn, ascii: mn, binary: mn, ...rc };
function $0(t, e = "utf8") {
  const r = U0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Uu(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const ju = "wc", j0 = 2, Eo = "core", Dr = `${ju}@2:${Eo}:`, k0 = { name: Eo, logger: "error" }, z0 = { database: ":memory:" }, q0 = "crypto", sc = "client_ed25519_seed", B0 = te.ONE_DAY, K0 = "keychain", V0 = "0.3", H0 = "messages", W0 = "0.3", Z0 = te.SIX_HOURS, G0 = "publisher", ku = "irn", Y0 = "error", zu = "wss://relay.walletconnect.com", nc = "wss://relay.walletconnect.org", J0 = "relayer", _t = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, X0 = "_subscription", dr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Q0 = te.ONE_SECOND, ev = "2.11.2", tv = 1e4, rv = "0.3", iv = "WALLETCONNECT_CLIENT_ID", Kt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, sv = "subscription", nv = "0.3", ov = te.FIVE_SECONDS * 1e3, av = "pairing", cv = "0.3", Ti = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, Ai = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, uv = "history", lv = "0.3", hv = "expirer", kt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, dv = "0.3", vn = "verify-api", oi = "https://verify.walletconnect.com", Kn = "https://verify.walletconnect.org", fv = [oi, Kn], pv = "echo", gv = "https://echo.walletconnect.com";
class yv {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = K0, this.version = V0, this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
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
        const { message: n } = W("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name);
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, mu(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? vu(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class mv {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = q0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n = Ea(s);
      return su(n.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = xg();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const n = await this.getClientSeed(), a = Ea(n), o = kn();
      return await Rp(o, s, B0, a);
    }, this.generateSharedKey = (s, n, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), h = Dg(o, n);
      return this.setSymKey(h, a);
    }, this.setSymKey = async (s, n) => {
      this.isInitialized();
      const a = n || Ig(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n, a) => {
      this.isInitialized();
      const o = yu(a), h = Gi(n);
      if (Pa(o)) {
        const y = o.senderPublicKey, b = o.receiverPublicKey;
        s = await this.generateSharedKey(y, b);
      }
      const l = this.getSymKey(s), { type: d, senderPublicKey: f } = o;
      return Cg({ type: d, symKey: l, message: h, senderPublicKey: f });
    }, this.decode = async (s, n, a) => {
      this.isInitialized();
      const o = Ag(n, a);
      if (Pa(o)) {
        const h = o.receiverPublicKey, l = o.senderPublicKey;
        s = await this.generateSharedKey(h, l);
      }
      try {
        const h = this.getSymKey(s), l = Tg({ symKey: h, encoded: n });
        return Bs(l);
      } catch (h) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
      }
    }, this.getPayloadType = (s) => {
      const n = Is(s);
      return Xi(n.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const n = Is(s);
      return n.senderPublicKey ? Ct(n.senderPublicKey, Ot) : void 0;
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name), this.keychain = i || new yv(this.core, this.logger);
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
      e = this.keychain.get(sc);
    } catch {
      e = kn(), await this.keychain.set(sc, e);
    }
    return $0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class vv extends Fd {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = H0, this.version = W0, this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
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
      const n = ui(s);
      let a = this.messages.get(i);
      return typeof a > "u" && (a = {}), typeof a[n] < "u" || (a[n] = s, this.messages.set(i, a), await this.persist()), n;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const n = this.get(i), a = ui(s);
      return typeof n[a] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = De.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, mu(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? vu(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class bv extends Md {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Jt.EventEmitter(), this.name = G0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (i, s, n) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      try {
        const o = (n == null ? void 0 : n.ttl) || Z0, h = zn(n), l = (n == null ? void 0 : n.prompt) || !1, d = (n == null ? void 0 : n.tag) || 0, f = (n == null ? void 0 : n.id) || Iu().toString(), y = { topic: i, message: s, opts: { ttl: o, relay: h, prompt: l, tag: d, id: f } }, b = setTimeout(() => this.queue.set(f, y), this.publishTimeout);
        try {
          await await Mi(this.rpcPublish(i, s, o, h, l, d, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${d}`), this.removeRequestFromQueue(f), this.relayer.events.emit(_t.publish, y);
        } catch (_) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = n == null ? void 0 : n.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), _;
          return;
        } finally {
          clearTimeout(b);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = De.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, i, s, n, a, o) {
    var h, l, d, f;
    const y = { method: ws(s.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: n, tag: a }, id: o };
    return It((h = y.params) == null ? void 0 : h.prompt) && ((l = y.params) == null || delete l.prompt), It((d = y.params) == null ? void 0 : d.tag) && ((f = y.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(gi.HEARTBEAT_EVENTS.pulse, () => {
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
class wv {
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
var _v = Object.defineProperty, Ev = Object.defineProperties, Sv = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, Dv = Object.prototype.propertyIsEnumerable, ac = (t, e, r) => e in t ? _v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ni = (t, e) => {
  for (var r in e || (e = {}))
    xv.call(e, r) && ac(t, r, e[r]);
  if (oc)
    for (var r of oc(e))
      Dv.call(e, r) && ac(t, r, e[r]);
  return t;
}, bn = (t, e) => Ev(t, Sv(e));
class Iv extends jd {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new wv(), this.events = new Jt.EventEmitter(), this.name = sv, this.version = nv, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Dr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const n = zn(s), a = { topic: i, relay: n };
        this.pending.set(i, a);
        const o = await this.rpcSubscribe(i, n);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } }), o;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => {
      if (this.topics.includes(i))
        return !0;
      const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
      return await new Promise((n, a) => {
        const o = new te.Watch();
        o.start(s);
        const h = setInterval(() => {
          !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h), o.stop(s), n(!0)), o.elapsed(s) >= ov && (clearInterval(h), o.stop(s), a(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
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
      const s = zn(i);
      await this.rpcUnsubscribe(e, r, s);
      const n = ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: ws(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await Mi(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(_t.connection_stalled);
    }
    return ui(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: ws(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await Mi(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(_t.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, i) {
    const s = { method: ws(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, bn(Ni({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Ni({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Ni({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Kt.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: i } = W("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Kt.deleted, bn(Ni({}, i), { reason: r }));
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
        const { message: r } = W("RESTORE_WILL_OVERRIDE", this.name);
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
    es(r) && this.onBatchSubscribe(r.map((i, s) => bn(Ni({}, e[s]), { id: i })));
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
    this.relayer.core.heartbeat.on(gi.HEARTBEAT_EVENTS.pulse, async () => {
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
      const { message: e } = W("NOT_INITIALIZED", this.name);
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
var Ov = Object.defineProperty, cc = Object.getOwnPropertySymbols, Cv = Object.prototype.hasOwnProperty, Tv = Object.prototype.propertyIsEnumerable, uc = (t, e, r) => e in t ? Ov(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Nv = (t, e) => {
  for (var r in e || (e = {}))
    Cv.call(e, r) && uc(t, r, e[r]);
  if (cc)
    for (var r of cc(e))
      Tv.call(e, r) && uc(t, r, e[r]);
  return t;
};
class Av extends Ud {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Jt.EventEmitter(), this.name = J0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const i = r.id;
      try {
        await this.toEstablishConnection();
        const s = this.provider.request(r);
        return this.requestsInFlight.set(i, { promise: s, request: r }), await s;
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      } finally {
        this.requestsInFlight.delete(i);
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
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? De.generateChildLogger(e.logger, this.name) : De.pino(De.getDefaultLoggerOptions({ level: e.logger || Y0 })), this.messages = new vv(this.logger, e.core), this.subscriber = new Iv(this, this.logger), this.publisher = new bv(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || zu, this.projectId = e.projectId, this.bundleId = Ug(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${nc}...`), await this.restartTransport(nc);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, tv);
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
  async publish(e, r, i) {
    this.isInitialized(), await this.publisher.publish(e, r, i), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var i;
    this.isInitialized();
    let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
    if (s)
      return s;
    let n;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(Kt.created, a), n());
    };
    return await Promise.all([new Promise((o) => {
      n = o, this.subscriber.on(Kt.created, a);
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
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Mi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
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
            await Mi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await Ka())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new sm(new cm(Bg({ sdkVersion: ev, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), _o(e)) {
      if (!e.method.endsWith(X0))
        return;
      const r = e.params, { topic: i, message: s, publishedAt: n } = r.data, a = { topic: i, message: s, publishedAt: n };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Nv({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Ys(e) && this.events.emit(_t.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(_t.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = bo(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(dr.payload, this.onPayloadHandler), this.provider.off(dr.connect, this.onConnectHandler), this.provider.off(dr.disconnect, this.onDisconnectHandler), this.provider.off(dr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(_t.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Ka();
    Uy(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(_t.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, te.toMiliseconds(Q0)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
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
var Rv = Object.defineProperty, lc = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Lv = Object.prototype.propertyIsEnumerable, hc = (t, e, r) => e in t ? Rv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, dc = (t, e) => {
  for (var r in e || (e = {}))
    Pv.call(e, r) && hc(t, r, e[r]);
  if (lc)
    for (var r of lc(e))
      Lv.call(e, r) && hc(t, r, e[r]);
  return t;
};
class Xs extends $d {
  constructor(e, r, i, s = Dr, n = void 0) {
    super(e, r, i, s), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = rv, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !It(a) ? this.map.set(this.getKey(a), a) : py(a) ? this.map.set(a.id, a) : gy(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((h) => lm(o[h], a[h]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const h = dc(dc({}, this.getData(a)), o);
      this.map.set(a, h), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = De.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = n;
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
      const { message: i } = W("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = W("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Fv {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = av, this.version = cv, this.events = new io(), this.initialized = !1, this.storagePrefix = Dr, this.ignoredPayloadTypes = [Xr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = kn(), s = await this.core.crypto.setSymKey(i), n = Ft(te.FIVE_MINUTES), a = { protocol: ku }, o = { topic: s, expiry: n, relay: a, active: !1 }, h = ny({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i, relay: a, expiryTimestamp: n });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n), { topic: s, uri: h };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: n, relay: a, expiryTimestamp: o } = ja(i.uri);
      let h;
      if (this.pairings.keys.includes(s) && (h = this.pairings.get(s), h.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const l = o || Ft(te.FIVE_MINUTES), d = { topic: s, relay: a, expiry: l, active: !1 };
      return await this.pairings.set(s, d), this.core.expirer.set(s, l), i.activatePairing && await this.activate({ topic: s }), this.events.emit(Ai.create, d), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(n, s), await this.core.relayer.subscribe(s, { relay: a })), d;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = Ft(te.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: h } = ii();
        this.events.once(We("pairing_ping", n), ({ error: l }) => {
          l ? h(l) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", ke("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, n) => {
      const a = li(s, n), o = await this.core.crypto.encode(i, a), h = Ti[s].req;
      return this.core.history.set(i, a), this.core.relayer.publish(i, o, h), a.id;
    }, this.sendResult = async (i, s, n) => {
      const a = bo(i, n), o = await this.core.crypto.encode(s, a), h = await this.core.history.get(s, i), l = Ti[h.request.method].res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (i, s, n) => {
      const a = wo(i, n), o = await this.core.crypto.encode(s, a), h = await this.core.history.get(s, i), l = Ti[h.request.method] ? Ti[h.request.method].res : Ti.unregistered_method.res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => Sr(s.expiry));
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
      const { topic: s, payload: n } = i, a = (await this.core.history.get(s, n.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n, i, !0), this.events.emit(Ai.ping, { id: n, topic: i });
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: n } = s;
      setTimeout(() => {
        gr(s) ? this.events.emit(We("pairing_ping", n), {}) : Vt(s) && this.events.emit(We("pairing_ping", n), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(Ai.delete, { id: n, topic: i });
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: n, method: a } = s;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = ke("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(n, i, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(ke("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      var s;
      if (!At(i)) {
        const { message: a } = W("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(a);
      }
      if (!fy(i.uri)) {
        const { message: a } = W("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(a);
      }
      const n = ja(i.uri);
      if (!((s = n == null ? void 0 : n.relay) != null && s.protocol)) {
        const { message: a } = W("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(n != null && n.symKey)) {
        const { message: a } = W("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
      if (n != null && n.expiryTimestamp && te.toMiliseconds(n == null ? void 0 : n.expiryTimestamp) < Date.now()) {
        const { message: a } = W("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }, this.isValidPing = async (i) => {
      if (!At(i)) {
        const { message: n } = W("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!At(i)) {
        const { message: n } = W("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!ht(i, !1)) {
        const { message: s } = W("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = W("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (Sr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = W("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = De.generateChildLogger(r, this.name), this.pairings = new Xs(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(_t.message, async (e) => {
      const { topic: r, message: i } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const s = await this.core.crypto.decode(r, i);
      try {
        _o(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ys(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(kt.expired, async (e) => {
      const { topic: r } = wu(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ai.expire, { topic: r }));
    });
  }
}
class Mv extends Ld {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = uv, this.version = lv, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n, expiry: Ft(te.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(ir.created, a);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = Vt(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.events.emit(ir.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n) => {
        if (n.topic === i) {
          if (typeof s < "u" && n.id !== s)
            return;
          this.records.delete(n.id), this.events.emit(ir.deleted, n);
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
      const i = { topic: r.topic, request: li(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: i } = W("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ir.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = W("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ir.created, (e) => {
      const r = ir.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(ir.updated, (e) => {
      const r = ir.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(ir.deleted, (e) => {
      const r = ir.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(gi.HEARTBEAT_EVENTS.pulse, () => {
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
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Uv extends kd {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = hv, this.version = dv, this.cached = [], this.initialized = !1, this.storagePrefix = Dr, this.init = async () => {
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
      const n = this.formatTarget(i), a = { target: n, expiry: s };
      this.expirations.set(n, a), this.checkExpiry(n, a), this.events.emit(kt.created, { target: n, expiration: a });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(kt.deleted, { target: s, expiration: n });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
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
      return Kg(e);
    if (typeof e == "number")
      return Vg(e);
    const { message: r } = W("UNKNOWN_TYPE", `Target type: ${typeof e}`);
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
        const { message: r } = W("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: i } = W("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: i } = r;
    te.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(kt.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(gi.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(kt.created, (e) => {
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
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class $v extends zd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = vn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || vi() || !bi())
        return;
      const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (n) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Kn;
        try {
          await this.createIframe();
        } catch (n) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      let n;
      try {
        n = await this.fetchAttestation(i.attestationId, s);
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(a), n = await this.fetchAttestation(i.attestationId, Kn);
      }
      return n;
    }, this.fetchAttestation = async (i, s) => {
      this.logger.info(`resolving attestation: ${i} from url: ${s}`);
      const n = this.startAbortTimer(te.ONE_SECOND * 2), a = await fetch(`${s}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(n), a.status === 200 ? await a.json() : void 0;
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
        if (document.getElementById(vn))
          return n();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = vn, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, i = n;
      }), new Promise((n, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, te.toMiliseconds(te.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (i) => {
      let s = i || oi;
      return fv.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${oi}`), s = oi), s;
    }, this.logger = De.generateChildLogger(r, this.name), this.verifyUrl = oi, this.abortController = new AbortController(), this.isDevEnv = go() && process.env.IS_VITEST;
  }
  get context() {
    return De.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), te.toMiliseconds(e));
  }
}
class jv extends qd {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = pv, this.registerDeviceToken = async (i) => {
      const { clientId: s, token: n, notificationType: a, enableEncrypted: o = !1 } = i, h = `${gv}/${this.projectId}/clients`;
      await pm(h, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: n, always_raw: o }) });
    }, this.logger = De.generateChildLogger(r, this.context);
  }
}
var kv = Object.defineProperty, fc = Object.getOwnPropertySymbols, zv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, pc = (t, e, r) => e in t ? kv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gc = (t, e) => {
  for (var r in e || (e = {}))
    zv.call(e, r) && pc(t, r, e[r]);
  if (fc)
    for (var r of fc(e))
      qv.call(e, r) && pc(t, r, e[r]);
  return t;
};
class So extends Pd {
  constructor(e) {
    super(e), this.protocol = ju, this.version = j0, this.name = Eo, this.events = new Jt.EventEmitter(), this.initialized = !1, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || zu, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : De.pino(De.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || k0.logger }));
    this.logger = De.generateChildLogger(r, this.name), this.heartbeat = new gi.HeartBeat(), this.crypto = new mv(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Mv(this, this.logger), this.expirer = new Uv(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Yh(gc(gc({}, z0), e == null ? void 0 : e.storageOptions)), this.relayer = new Av({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Fv(this, this.logger), this.verify = new $v(this.projectId || "", this.logger), this.echoClient = new jv(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new So(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(iv, i), r;
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
const Bv = So, qu = "wc", Bu = 2, Ku = "client", xo = `${qu}@${Bu}:${Ku}:`, wn = { name: Ku, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, yc = "WALLETCONNECT_DEEPLINK_CHOICE", Kv = "proposal", Vv = "Proposal expired", Hv = "session", ys = te.SEVEN_DAYS, Wv = "engine", fr = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, _n = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, pr = { idle: "IDLE", active: "ACTIVE" }, Zv = "request", Gv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Yv = Object.defineProperty, Jv = Object.defineProperties, Xv = Object.getOwnPropertyDescriptors, mc = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, eb = Object.prototype.propertyIsEnumerable, vc = (t, e, r) => e in t ? Yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xt = (t, e) => {
  for (var r in e || (e = {}))
    Qv.call(e, r) && vc(t, r, e[r]);
  if (mc)
    for (var r of mc(e))
      eb.call(e, r) && vc(t, r, e[r]);
  return t;
}, ri = (t, e) => Jv(t, Xv(e));
class tb extends Kd {
  constructor(e) {
    super(e), this.name = Wv, this.events = new io(), this.initialized = !1, this.ignoredPayloadTypes = [Xr], this.requestQueue = { state: pr.idle, queue: [] }, this.sessionRequestQueue = { state: pr.idle, queue: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(fr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = ri(xt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: s, requiredNamespaces: n, optionalNamespaces: a, sessionProperties: o, relays: h } = i;
      let l = s, d, f = !1;
      if (l && (f = this.client.core.pairing.pairings.get(l).active), !l || !f) {
        const { topic: v, uri: w } = await this.client.core.pairing.create();
        l = v, d = w;
      }
      const y = await this.client.core.crypto.generateKeyPair(), b = fr.wc_sessionPropose.req.ttl || te.FIVE_MINUTES, _ = Ft(b), O = xt({ requiredNamespaces: n, optionalNamespaces: a, relays: h ?? [{ protocol: ku }], proposer: { publicKey: y, metadata: this.client.metadata }, expiryTimestamp: _ }, o && { sessionProperties: o }), { reject: L, resolve: M, done: S } = ii(b, Vv);
      if (this.events.once(We("session_connect"), async ({ error: v, session: w }) => {
        if (v)
          L(v);
        else if (w) {
          w.self.publicKey = y;
          const g = ri(xt({}, w), { requiredNamespaces: O.requiredNamespaces, optionalNamespaces: O.optionalNamespaces });
          await this.client.session.set(w.topic, g), await this.setExpiry(w.topic, w.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: w.peer.metadata }), M(g);
        }
      }), !l) {
        const { message: v } = W("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(v);
      }
      const C = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: O, throwOnFailedPublish: !0 });
      return await this.setProposal(C, xt({ id: C }, O)), { uri: d, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: s, namespaces: n, sessionProperties: a } = r, o = this.client.proposal.get(i);
      let { pairingTopic: h, proposer: l, requiredNamespaces: d, optionalNamespaces: f } = o;
      h = h || "";
      const y = await this.client.core.crypto.generateKeyPair(), b = l.publicKey, _ = await this.client.core.crypto.generateSharedKey(y, b);
      h && i && (await this.client.core.pairing.updateMetadata({ topic: h, metadata: l.metadata }), await this.sendResult({ id: i, topic: h, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(i, ke("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: h }));
      const O = xt({ relay: { protocol: s ?? "irn" }, namespaces: n, pairingTopic: h, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Ft(ys) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(_);
      const L = ri(xt({}, O), { topic: _, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: h, acknowledged: !1, self: O.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: y });
      await this.client.session.set(_, L);
      try {
        await this.sendRequest({ topic: _, method: "wc_sessionSettle", params: O, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(_, ke("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(_), M;
      }
      return await this.setExpiry(_, Ft(ys)), { topic: _, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(_)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: s } = r, { pairingTopic: n } = this.client.proposal.get(i);
      n && (await this.sendError(i, n, s), await this.client.proposal.delete(i, ke("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: s } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: h } = ii();
      return this.events.once(We("session_update", n), ({ error: l }) => {
        l ? h(l) : o();
      }), await this.client.session.update(i, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: n, resolve: a, reject: o } = ii();
      return this.events.once(We("session_extend", s), ({ error: h }) => {
        h ? o(h) : a();
      }), await this.setExpiry(i, Ft(ys)), { acknowledged: n };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: s, topic: n, expiry: a = fr.wc_sessionRequest.req.ttl } = r, o = vo(), { done: h, resolve: l, reject: d } = ii(a, "Request expired. Please try again.");
      return this.events.once(We("session_request", o), ({ error: f, result: y }) => {
        f ? d(f) : l(y);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: n, method: "wc_sessionRequest", params: { request: ri(xt({}, s), { expiryTimestamp: Ft(a) }), chainId: i }, expiry: a, throwOnFailedPublish: !0 }).catch((y) => d(y)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: i, id: o }), f();
      }), new Promise(async (f) => {
        const y = await Wg(this.client.core.storage, yc);
        Hg({ id: o, topic: n, wcDeepLink: y }), f();
      }), h()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: s } = r, { id: n } = s;
      gr(s) ? await this.sendResult({ id: n, topic: i, result: s.result, throwOnFailedPublish: !0 }) : Vt(s) && await this.sendError(n, i, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const s = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: n, resolve: a, reject: o } = ii();
        this.events.once(We("session_ping", s), ({ error: h }) => {
          h ? o(h) : a();
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
      if (this.client.session.keys.includes(i))
        await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: ke("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: i, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(i))
        await this.client.core.pairing.disconnect({ topic: i });
      else {
        const { message: s } = W("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
        throw new Error(s);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => hy(i, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((n) => {
            var a, o;
            return ((a = n.peerMetadata) == null ? void 0 : a.url) && ((o = n.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && n.topic && n.topic !== i.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r) => {
      const { topic: i, expirerHasDeleted: s = !1, emitEvent: n = !0, id: a = 0 } = r, { self: o } = this.client.session.get(i);
      await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, ke("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), s || this.client.core.expirer.del(i), this.client.core.storage.removeItem(yc).catch((h) => this.client.logger.warn(h)), this.getPendingSessionRequests().forEach((h) => {
        h.topic === i && this.deletePendingSessionRequest(h.id, ke("USER_DISCONNECTED"));
      }), n && this.client.events.emit("session_delete", { id: a, topic: i });
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, ke("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== r), s && (this.sessionRequestQueue.state = pr.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, Ft(fr.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: i, topic: s, params: n, verifyContext: a } = r, o = n.request.expiryTimestamp || Ft(fr.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: n, verifyContext: a }), o && this.client.core.expirer.set(i, o);
    }, this.sendRequest = async (r) => {
      const { topic: i, method: s, params: n, expiry: a, relayRpcId: o, clientRpcId: h, throwOnFailedPublish: l } = r, d = li(s, n, h);
      if (bi() && Gv.includes(s)) {
        const b = ui(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: b });
      }
      const f = await this.client.core.crypto.encode(i, d), y = fr[s].req;
      return a && (y.ttl = a), o && (y.id = o), this.client.core.history.set(i, d), l ? (y.internal = ri(xt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, f, y)) : this.client.core.relayer.publish(i, f, y).catch((b) => this.client.logger.error(b)), d.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: s, result: n, throwOnFailedPublish: a } = r, o = bo(i, n), h = await this.client.core.crypto.encode(s, o), l = await this.client.core.history.get(s, i), d = fr[l.request.method].res;
      a ? (d.internal = ri(xt({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, h, d)) : this.client.core.relayer.publish(s, h, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, i, s) => {
      const n = wo(r, s), a = await this.client.core.crypto.encode(i, n), o = await this.client.core.history.get(i, r), h = fr[o.request.method].res;
      this.client.core.relayer.publish(i, a, h), await this.client.core.history.resolve(n);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((s) => {
        let n = !1;
        Sr(s.expiry) && (n = !0), this.client.core.crypto.keychain.has(s.topic) || (n = !0), n && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        Sr(s.expiryTimestamp) && i.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...i.map((s) => this.deleteProposal(s))]);
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
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = pr.idle;
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
      const { topic: i } = r, { message: s } = W("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: s, id: n } = i;
      try {
        this.isValidConnect(xt({}, i.params));
        const a = s.expiryTimestamp || Ft(fr.wc_sessionPropose.req.ttl), o = xt({ id: n, pairingTopic: r, expiryTimestamp: a }, s);
        await this.setProposal(n, o);
        const h = ui(JSON.stringify(i)), l = await this.getVerifyContext(h, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: n, params: o, verifyContext: l });
      } catch (a) {
        await this.sendError(n, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: s } = i;
      if (gr(i)) {
        const { result: n } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: n });
        const a = this.client.proposal.get(s);
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
        Vt(i) && (await this.client.proposal.delete(s, ke("USER_DISCONNECTED")), this.events.emit(We("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: a, controller: o, expiry: h, namespaces: l, sessionProperties: d, pairingTopic: f } = i.params, y = xt({ topic: r, relay: a, expiry: h, namespaces: l, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, d && { sessionProperties: d });
        await this.sendResult({ id: i.id, topic: r, result: !0 }), this.events.emit(We("session_connect"), { session: y }), this.cleanupDuplicatePairings(y);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: s } = i;
      gr(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(We("session_approve", s), {})) : Vt(i) && (await this.client.session.delete(r, ke("USER_DISCONNECTED")), this.events.emit(We("session_approve", s), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: s, id: n } = i;
      try {
        const a = `${r}_session_update`, o = gs.get(a);
        if (o && this.isRequestOutOfSync(o, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidUpdate(xt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_update", { id: n, topic: r, params: s }), gs.set(a, n);
      } catch (a) {
        await this.sendError(n, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: s } = i;
      gr(i) ? this.events.emit(We("session_update", s), {}) : Vt(i) && this.events.emit(We("session_update", s), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ft(ys)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (n) {
        await this.sendError(s, r, n), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: s } = i;
      gr(i) ? this.events.emit(We("session_extend", s), {}) : Vt(i) && this.events.emit(We("session_extend", s), { error: i.error });
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
        gr(i) ? this.events.emit(We("session_ping", s), {}) : Vt(i) && this.events.emit(We("session_ping", s), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((n) => {
          this.client.core.relayer.once(_t.publish, async () => {
            n(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: ke("USER_DISCONNECTED") })]);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        this.isValidRequest(xt({ topic: r }, n));
        const a = ui(JSON.stringify(li("wc_sessionRequest", n, s))), o = this.client.session.get(r), h = await this.getVerifyContext(a, o.peer.metadata), l = { id: s, topic: r, params: n, verifyContext: h };
        await this.setPendingSessionRequest(l), this.addSessionRequestToSessionRequestQueue(l), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: s } = i;
      gr(i) ? this.events.emit(We("session_request", s), { result: i.result }) : Vt(i) && this.events.emit(We("session_request", s), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: s, params: n } = i;
      try {
        const a = `${r}_session_event_${n.event.name}`, o = gs.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(xt({ topic: r }, n)), this.client.events.emit("session_event", { id: s, topic: r, params: n }), gs.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = pr.idle, this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: i }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((n) => n.topic === r && n.request.method === "wc_sessionRequest").forEach((n) => {
        this.events.emit(We("session_request", n.request.id), { error: i });
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
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const i = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      i && this.onSessionProposeRequest(r.topic, li("wc_sessionPropose", { requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer, sessionProperties: i.sessionProperties }, i.id));
    }, this.isValidConnect = async (r) => {
      if (!At(r)) {
        const { message: h } = W("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: n, sessionProperties: a, relays: o } = r;
      if (It(i) || await this.isValidPairingTopic(i), !Sy(o, !0)) {
        const { message: h } = W("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(h);
      }
      !It(s) && Os(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !It(n) && Os(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), It(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const s = Ey(r, "connect()", i);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!At(r))
        throw new Error(W("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: s, relayProtocol: n, sessionProperties: a } = r;
      await this.isValidProposalId(i);
      const o = this.client.proposal.get(i), h = gn(s, "approve()");
      if (h)
        throw new Error(h.message);
      const l = qa(o.requiredNamespaces, s, "approve()");
      if (l)
        throw new Error(l.message);
      if (!ht(n, !0)) {
        const { message: d } = W("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(d);
      }
      It(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!At(r)) {
        const { message: n } = W("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(n);
      }
      const { id: i, reason: s } = r;
      if (await this.isValidProposalId(i), !Dy(s)) {
        const { message: n } = W("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!At(r)) {
        const { message: l } = W("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: i, controller: s, namespaces: n, expiry: a } = r;
      if (!Eu(i)) {
        const { message: l } = W("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = yy(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const h = gn(n, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      if (Sr(a)) {
        const { message: l } = W("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!At(r)) {
        const { message: h } = W("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, namespaces: s } = r;
      await this.isValidSessionTopic(i);
      const n = this.client.session.get(i), a = gn(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = qa(n.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!At(r)) {
        const { message: s } = W("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!At(r)) {
        const { message: h } = W("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(h);
      }
      const { topic: i, request: s, chainId: n, expiry: a } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: o } = this.client.session.get(i);
      if (!za(o, n)) {
        const { message: h } = W("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(h);
      }
      if (!Iy(s)) {
        const { message: h } = W("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(h);
      }
      if (!Ty(o, n, s.method)) {
        const { message: h } = W("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(h);
      }
      if (a && !Py(a, _n)) {
        const { message: h } = W("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${_n.min} and ${_n.max}`);
        throw new Error(h);
      }
    }, this.isValidRespond = async (r) => {
      var i;
      if (!At(r)) {
        const { message: a } = W("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: n } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (i = r == null ? void 0 : r.response) != null && i.id && this.cleanupAfterResponse(r), a;
      }
      if (!Oy(n)) {
        const { message: a } = W("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!At(r)) {
        const { message: s } = W("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!At(r)) {
        const { message: o } = W("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: i, event: s, chainId: n } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!za(a, n)) {
        const { message: o } = W("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(o);
      }
      if (!Cy(s)) {
        const { message: o } = W("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!Ny(a, n, s.name)) {
        const { message: o } = W("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!At(r)) {
        const { message: s } = W("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const s = { verified: { verifyUrl: i.verifyUrl || oi, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const n = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        n && (s.verified.origin = n.origin, s.verified.isScam = n.isScam, s.verified.validation = n.origin === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (n) {
        this.client.logger.info(n);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((s) => {
        if (!ht(s, !1)) {
          const { message: n } = W("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(n);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = W("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(_t.message, async (e) => {
      const { topic: r, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const s = await this.client.core.crypto.decode(r, i);
      try {
        _o(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ys(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (n) {
        this.client.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(kt.expired, async (e) => {
      const { topic: r, id: i } = wu(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, W("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ai.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = W("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = W("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = W("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!ht(e, !1)) {
      const { message: r } = W("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = W("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = W("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = W("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (ht(e, !1)) {
      const { message: r } = W("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = W("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!xy(e)) {
      const { message: r } = W("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = W("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sr(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = W("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class rb extends Xs {
  constructor(e, r) {
    super(e, r, Kv, xo), this.core = e, this.logger = r;
  }
}
class ib extends Xs {
  constructor(e, r) {
    super(e, r, Hv, xo), this.core = e, this.logger = r;
  }
}
class sb extends Xs {
  constructor(e, r) {
    super(e, r, Zv, xo, (i) => i.id), this.core = e, this.logger = r;
  }
}
class Do extends Bd {
  constructor(e) {
    super(e), this.protocol = qu, this.version = Bu, this.name = wn.name, this.events = new Jt.EventEmitter(), this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (e == null ? void 0 : e.name) || wn.name, this.metadata = (e == null ? void 0 : e.metadata) || jg();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : De.pino(De.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || wn.logger }));
    this.core = (e == null ? void 0 : e.core) || new Bv(e), this.logger = De.generateChildLogger(r, this.name), this.session = new ib(this.core, this.logger), this.proposal = new rb(this.core, this.logger), this.pendingRequest = new sb(this.core, this.logger), this.engine = new tb(this);
  }
  static async init(e) {
    const r = new Do(e);
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
var nb = Object.defineProperty, ob = Object.defineProperties, ab = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, cb = Object.prototype.hasOwnProperty, ub = Object.prototype.propertyIsEnumerable, wc = (t, e, r) => e in t ? nb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, lb = (t, e) => {
  for (var r in e || (e = {}))
    cb.call(e, r) && wc(t, r, e[r]);
  if (bc)
    for (var r of bc(e))
      ub.call(e, r) && wc(t, r, e[r]);
  return t;
}, hb = (t, e) => ob(t, ab(e)), Io = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, $e = (t, e, r) => (Io(t, e, "read from private field"), r ? r.call(t) : e.get(t)), zr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ns = (t, e, r, i) => (Io(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), vt = (t, e, r) => (Io(t, e, "access private method"), r), qr, si, Ri, lt, Vn, Vu, bt, Dt, Hn, _c;
let db = class {
  constructor(e) {
    zr(this, Vn), zr(this, bt), zr(this, Hn), zr(this, qr, void 0), zr(this, si, void 0), zr(this, Ri, void 0), zr(this, lt, void 0), Ns(this, qr, e), Ns(this, si, vt(this, Vn, Vu).call(this)), vt(this, bt, Dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: i } = e;
    return new Promise(async (s, n) => {
      await vt(this, bt, Dt).call(this);
      const a = $e(this, si).subscribeModal((l) => {
        l.open || (a(), n(new Error("Modal closed")));
      }), { uri: o, approval: h } = await $e(this, lt).connect(e);
      if (o) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), i && Object.values(i).forEach(({ chains: d }) => {
          d && d.forEach((f) => l.add(f));
        }), await $e(this, si).openModal({ uri: o, chains: Array.from(l) });
      }
      try {
        const l = await h();
        s(l);
      } catch (l) {
        n(l);
      } finally {
        a(), $e(this, si).closeModal();
      }
    });
  }
  async disconnect(e) {
    await vt(this, bt, Dt).call(this), await $e(this, lt).disconnect(e);
  }
  async request(e) {
    return await vt(this, bt, Dt).call(this), await $e(this, lt).request(e);
  }
  async getSessions() {
    return await vt(this, bt, Dt).call(this), $e(this, lt).session.getAll();
  }
  async getSession() {
    return await vt(this, bt, Dt).call(this), $e(this, lt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await vt(this, bt, Dt).call(this), $e(this, lt).off("session_expire", e);
  }
};
qr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakSet(), Vu = function() {
  const { modalOptions: t, projectId: e } = $e(this, qr);
  return new dh(hb(lb({}, t), { projectId: e }));
}, bt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return $e(this, lt) ? !0 : (!$e(this, Ri) && typeof window < "u" && Ns(this, Ri, vt(this, Hn, _c).call(this)), $e(this, Ri));
}, Hn = /* @__PURE__ */ new WeakSet(), _c = async function() {
  Ns(this, lt, await Do.init({ metadata: $e(this, qr).metadata, projectId: $e(this, qr).projectId, relayUrl: $e(this, qr).relayUrl }));
  const t = await $e(this, lt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Hu = [
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
], Oo = ["aleo:3"], Wu = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], fb = "f0aaeffe71b636da453fce042d79d723", pb = {
  standaloneChains: Oo,
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
}, u_ = {
  requiredNamespaces: {
    aleo: {
      methods: Hu,
      chains: Oo,
      events: Wu
    }
  }
}, gb = "@puzzlehq/sdk-core", yb = "Puzzle SDK", mb = "0.2.21", vb = "Your portal to privacy", bb = "./dist/puzzle.cjs.js", wb = "./dist/puzzle.es.js", _b = "./dist/puzzle.umd.js", Eb = "./dist/types/index.d.ts", Sb = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, xb = "module", Db = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, Ib = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Ob = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, Cb = {
  buffer: "^6.0.3"
}, Tb = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], Nb = "Puzzle", Ab = "ISC", Rb = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Pb = "https://github.com/puzzlehq/puzzle-sdk#readme", Ec = {
  name: gb,
  displayName: yb,
  version: mb,
  description: vb,
  main: bb,
  module: wb,
  browser: _b,
  types: Eb,
  private: !1,
  exports: Sb,
  type: xb,
  scripts: Db,
  repository: Ib,
  dependencies: Ob,
  peerDependencies: Cb,
  keywords: Tb,
  author: Nb,
  license: Ab,
  bugs: Rb,
  homepage: Pb
}, Zu = new io();
let ai;
async function l_(t) {
  let e = !1;
  const r = Ec.version, i = localStorage.getItem("puzzle_sdk_version");
  if (r !== i && (console.log(`${Ec.name}: Updated from ` + i + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), ai = new db({
    projectId: fb,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...pb }
  }), e)
    try {
      Lb(ai, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Lb(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: ke("USER_DISCONNECTED")
  }));
}
async function zt() {
  return new Promise((t) => {
    if (ai)
      t(ai);
    else {
      const e = setInterval(() => {
        ai && (clearInterval(e), t(ai));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const h_ = async () => {
  const t = await zt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
  } catch (r) {
    const i = r.message;
    return console.error("getAccount error", i), { error: i };
  }
}, d_ = async ({ address: t }) => {
  const e = await zt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
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
    });
  } catch (i) {
    const s = i.message;
    return console.error("getBalance error", s), { error: s };
  }
}, f_ = async () => {
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
          methods: Hu,
          chains: Oo,
          events: Wu
        }
      }
    });
    return Zu.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, p_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const i = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: i
        }
      }
    });
  } catch (s) {
    const n = s.message;
    return console.error("createEvent error", n), { error: n };
  }
}, g_ = async () => {
  const t = await zt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (r) {
    const i = r.message;
    return console.error("createSharedState error", i), { error: i };
  }
}, y_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
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
  } catch (i) {
    return console.error("decrypt error", i.message), { error: i.message };
  }
}, m_ = async () => {
  const t = await zt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: ke("USER_DISCONNECTED"),
        topic: e.topic
      }), Zu.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const i = r.message;
    return console.error("error disconnecting", i), { error: i };
  }
}, v_ = async ({
  id: t,
  address: e
}) => {
  const r = await zt(), i = await (r == null ? void 0 : r.getSession());
  if (!i || !r)
    return { event: void 0, error: "no session or connection" };
  const s = async () => await r.request({
    topic: i.topic,
    chainId: "aleo:3",
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
  } catch (n) {
    const a = n.message;
    return console.error("getEvents error", a), { error: a };
  }
}, b_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const i = async (s = 0) => await e.request({
    topic: r.topic,
    chainId: "aleo:3",
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
    return await i();
  } catch (s) {
    const n = s.message;
    return console.error("getEvents error", n), { error: n };
  }
}, w_ = async (t) => {
  const e = await zt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, __ = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const i = await zt(), s = await (i == null ? void 0 : i.getSession());
  if (!s || !i)
    return { error: "no session or connection" };
  const n = async (a = 0) => await i.request({
    topic: s.topic,
    chainId: "aleo:3",
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
    return await n();
  } catch (a) {
    const o = a.message;
    return console.error("getRecords error", o), { error: o };
  }
};
var Te;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const n = {};
    for (const a of s)
      n[a] = a;
    return n;
  }, t.getValidEnumValues = (s) => {
    const n = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), a = {};
    for (const o of n)
      a[o] = s[o];
    return t.objectValues(a);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(n) {
    return s[n];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const n = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && n.push(a);
    return n;
  }, t.find = (s, n) => {
    for (const a of s)
      if (n(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function i(s, n = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(n);
  }
  t.joinValues = i, t.jsonStringifyReplacer = (s, n) => typeof n == "bigint" ? n.toString() : n;
})(Te || (Te = {}));
var Wn;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Wn || (Wn = {}));
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
]), Fb = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Zt extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (i) => {
      this.issues = [...this.issues, i];
    }, this.addIssues = (i = []) => {
      this.issues = [...this.issues, ...i];
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
    }, i = { _errors: [] }, s = (n) => {
      for (const a of n.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          i._errors.push(r(a));
        else {
          let o = i, h = 0;
          for (; h < a.path.length; ) {
            const l = a.path[h];
            h === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], h++;
          }
        }
    };
    return s(this), i;
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
    const r = {}, i = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : i.push(e(s));
    return { formErrors: i, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Zt.create = (t) => new Zt(t);
const Ui = (t, e) => {
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
let Gu = Ui;
function Mb(t) {
  Gu = t;
}
function As() {
  return Gu;
}
const Rs = (t) => {
  const { data: e, path: r, errorMaps: i, issueData: s } = t, n = [...r, ...s.path || []], a = {
    ...s,
    path: n
  };
  let o = "";
  const h = i.filter((l) => !!l).slice().reverse();
  for (const l of h)
    o = l(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: n,
    message: s.message || o
  };
}, Ub = [];
function X(t, e) {
  const r = Rs({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      As(),
      Ui
      // then global default map
    ].filter((i) => !!i)
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
    const i = [];
    for (const s of r) {
      if (s.status === "aborted")
        return ae;
      s.status === "dirty" && e.dirty(), i.push(s.value);
    }
    return { status: e.value, value: i };
  }
  static async mergeObjectAsync(e, r) {
    const i = [];
    for (const s of r)
      i.push({
        key: await s.key,
        value: await s.value
      });
    return Et.mergeObjectSync(e, i);
  }
  static mergeObjectSync(e, r) {
    const i = {};
    for (const s of r) {
      const { key: n, value: a } = s;
      if (n.status === "aborted" || a.status === "aborted")
        return ae;
      n.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (i[n.value] = a.value);
    }
    return { status: e.value, value: i };
  }
}
const ae = Object.freeze({
  status: "aborted"
}), Yu = (t) => ({ status: "dirty", value: t }), Tt = (t) => ({ status: "valid", value: t }), Zn = (t) => t.status === "aborted", Gn = (t) => t.status === "dirty", Ps = (t) => t.status === "valid", Ls = (t) => typeof Promise < "u" && t instanceof Promise;
var re;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(re || (re = {}));
class nr {
  constructor(e, r, i, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = i, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Sc = (t, e) => {
  if (Ps(e))
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
  const { errorMap: e, invalid_type_error: r, required_error: i, description: s } = t;
  if (e && (r || i))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: i ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
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
    if (Ls(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const i = this.safeParse(e, r);
    if (i.success)
      return i.data;
    throw i.error;
  }
  safeParse(e, r) {
    var i;
    const s = {
      common: {
        issues: [],
        async: (i = r == null ? void 0 : r.async) !== null && i !== void 0 ? i : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: xr(e)
    }, n = this._parseSync({ data: e, path: s.path, parent: s });
    return Sc(s, n);
  }
  async parseAsync(e, r) {
    const i = await this.safeParseAsync(e, r);
    if (i.success)
      return i.data;
    throw i.error;
  }
  async safeParseAsync(e, r) {
    const i = {
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
    }, s = this._parse({ data: e, path: i.path, parent: i }), n = await (Ls(s) ? s : Promise.resolve(s));
    return Sc(i, n);
  }
  refine(e, r) {
    const i = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, n) => {
      const a = e(s), o = () => n.addIssue({
        code: V.custom,
        ...i(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((h) => h ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((i, s) => e(i) ? !0 : (s.addIssue(typeof r == "function" ? r(i, s) : r), !1));
  }
  _refinement(e) {
    return new Yt({
      schema: this,
      typeName: se.ZodEffects,
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
    return Wr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Gt.create(this, this._def);
  }
  promise() {
    return pi.create(this, this._def);
  }
  or(e) {
    return zi.create([this, e], this._def);
  }
  and(e) {
    return qi.create(this, e, this._def);
  }
  transform(e) {
    return new Yt({
      ...de(this._def),
      schema: this,
      typeName: se.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Wi({
      ...de(this._def),
      innerType: this,
      defaultValue: r,
      typeName: se.ZodDefault
    });
  }
  brand() {
    return new Xu({
      typeName: se.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new $s({
      ...de(this._def),
      innerType: this,
      catchValue: r,
      typeName: se.ZodCatch
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
    return rs.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const $b = /^c[^\s-]{8,}$/i, jb = /^[a-z][a-z0-9]*$/, kb = /[0-9A-HJKMNP-TV-Z]{26}/, zb = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, qb = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Bb = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), Kb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Vb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Hb = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Wb(t, e) {
  return !!((e === "v4" || !e) && Kb.test(t) || (e === "v6" || !e) && Vb.test(t));
}
class Wt extends ge {
  constructor() {
    super(...arguments), this._regex = (e, r, i) => this.refinement((s) => e.test(s), {
      validation: r,
      code: V.invalid_string,
      ...re.errToObj(i)
    }), this.nonempty = (e) => this.min(1, re.errToObj(e)), this.trim = () => new Wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Wt({
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
    const i = new Et();
    let s;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value && (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), i.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), i.dirty());
      else if (n.kind === "length") {
        const a = e.data.length > n.value, o = e.data.length < n.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? X(s, {
          code: V.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : o && X(s, {
          code: V.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), i.dirty());
      } else if (n.kind === "email")
        qb.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "email",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "emoji")
        Bb.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "emoji",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "uuid")
        zb.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "uuid",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "cuid")
        $b.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "cuid",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "cuid2")
        jb.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "cuid2",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "ulid")
        kb.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "ulid",
          code: V.invalid_string,
          message: n.message
        }), i.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), X(s, {
            validation: "url",
            code: V.invalid_string,
            message: n.message
          }), i.dirty();
        }
      else
        n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "regex",
          code: V.invalid_string,
          message: n.message
        }), i.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.invalid_string,
          validation: { includes: n.value, position: n.position },
          message: n.message
        }), i.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.invalid_string,
          validation: { startsWith: n.value },
          message: n.message
        }), i.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.invalid_string,
          validation: { endsWith: n.value },
          message: n.message
        }), i.dirty()) : n.kind === "datetime" ? Hb(n).test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.invalid_string,
          validation: "datetime",
          message: n.message
        }), i.dirty()) : n.kind === "ip" ? Wb(e.data, n.version) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "ip",
          code: V.invalid_string,
          message: n.message
        }), i.dirty()) : Te.assertNever(n);
    return { status: i.value, value: e.data };
  }
  _addCheck(e) {
    return new Wt({
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
Wt.create = (t) => {
  var e;
  return new Wt({
    checks: [],
    typeName: se.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t)
  });
};
function Zb(t, e) {
  const r = (t.toString().split(".")[1] || "").length, i = (e.toString().split(".")[1] || "").length, s = r > i ? r : i, n = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return n % a / Math.pow(10, s);
}
class Ir extends ge {
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
    let i;
    const s = new Et();
    for (const n of this._def.checks)
      n.kind === "int" ? Te.isInteger(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), s.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), s.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), s.dirty()) : n.kind === "multipleOf" ? Zb(e.data, n.value) !== 0 && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), s.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.not_finite,
        message: n.message
      }), s.dirty()) : Te.assertNever(n);
    return { status: s.value, value: e.data };
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
  setLimit(e, r, i, s) {
    return new Ir({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: i,
          message: re.toString(s)
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
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min" ? (r === null || i.value > r) && (r = i.value) : i.kind === "max" && (e === null || i.value < e) && (e = i.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Ir.create = (t) => new Ir({
  checks: [],
  typeName: se.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Or extends ge {
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
    let i;
    const s = new Et();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), s.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), s.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (i = this._getOrReturnCtx(e, i), X(i, {
        code: V.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), s.dirty()) : Te.assertNever(n);
    return { status: s.value, value: e.data };
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
  setLimit(e, r, i, s) {
    return new Or({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: i,
          message: re.toString(s)
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
Or.create = (t) => {
  var e;
  return new Or({
    checks: [],
    typeName: se.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...de(t)
  });
};
class $i extends ge {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Y.boolean) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.boolean,
        received: i.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
$i.create = (t) => new $i({
  typeName: se.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...de(t)
});
class Vr extends ge {
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
    const i = new Et();
    let s;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), i.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), i.dirty()) : Te.assertNever(n);
    return {
      status: i.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Vr({
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
Vr.create = (t) => new Vr({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: se.ZodDate,
  ...de(t)
});
class Fs extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.symbol) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.symbol,
        received: i.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
Fs.create = (t) => new Fs({
  typeName: se.ZodSymbol,
  ...de(t)
});
class ji extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.undefined,
        received: i.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
ji.create = (t) => new ji({
  typeName: se.ZodUndefined,
  ...de(t)
});
class ki extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.null) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.null,
        received: i.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
ki.create = (t) => new ki({
  typeName: se.ZodNull,
  ...de(t)
});
class fi extends ge {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Tt(e.data);
  }
}
fi.create = (t) => new fi({
  typeName: se.ZodAny,
  ...de(t)
});
class Kr extends ge {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Tt(e.data);
  }
}
Kr.create = (t) => new Kr({
  typeName: se.ZodUnknown,
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
  typeName: se.ZodNever,
  ...de(t)
});
class Ms extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.undefined) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.void,
        received: i.parsedType
      }), ae;
    }
    return Tt(e.data);
  }
}
Ms.create = (t) => new Ms({
  typeName: se.ZodVoid,
  ...de(t)
});
class Gt extends ge {
  _parse(e) {
    const { ctx: r, status: i } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== Y.array)
      return X(r, {
        code: V.invalid_type,
        expected: Y.array,
        received: r.parsedType
      }), ae;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (X(r, {
        code: a ? V.too_big : V.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), i.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (X(r, {
      code: V.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), i.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (X(r, {
      code: V.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), i.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new nr(r, a, r.path, o)))).then((a) => Et.mergeArray(i, a));
    const n = [...r.data].map((a, o) => s.type._parseSync(new nr(r, a, r.path, o)));
    return Et.mergeArray(i, n);
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
  typeName: se.ZodArray,
  ...de(e)
});
function ni(t) {
  if (t instanceof ze) {
    const e = {};
    for (const r in t.shape) {
      const i = t.shape[r];
      e[r] = yr.create(ni(i));
    }
    return new ze({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Gt ? new Gt({
      ...t._def,
      type: ni(t.element)
    }) : t instanceof yr ? yr.create(ni(t.unwrap())) : t instanceof Wr ? Wr.create(ni(t.unwrap())) : t instanceof or ? or.create(t.items.map((e) => ni(e))) : t;
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
    const { status: i, ctx: s } = this._processInputParams(e), { shape: n, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof mr && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        a.includes(l) || o.push(l);
    const h = [];
    for (const l of a) {
      const d = n[l], f = s.data[l];
      h.push({
        key: { status: "valid", value: l },
        value: d._parse(new nr(s, f, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof mr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of o)
          h.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (l === "strict")
        o.length > 0 && (X(s, {
          code: V.unrecognized_keys,
          keys: o
        }), i.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const f = s.data[d];
        h.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new nr(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
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
    }).then((l) => Et.mergeObjectSync(i, l)) : Et.mergeObjectSync(i, h);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return re.errToObj, new ze({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, i) => {
          var s, n, a, o;
          const h = (a = (n = (s = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(s, r, i).message) !== null && a !== void 0 ? a : i.defaultError;
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
      typeName: se.ZodObject
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
    return Te.objectKeys(e).forEach((i) => {
      e[i] && this.shape[i] && (r[i] = this.shape[i]);
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((i) => {
      e[i] || (r[i] = this.shape[i]);
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ni(this);
  }
  partial(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((i) => {
      const s = this.shape[i];
      e && !e[i] ? r[i] = s : r[i] = s.optional();
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Te.objectKeys(this.shape).forEach((i) => {
      if (e && !e[i])
        r[i] = this.shape[i];
      else {
        let n = this.shape[i];
        for (; n instanceof yr; )
          n = n._def.innerType;
        r[i] = n;
      }
    }), new ze({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ju(Te.objectKeys(this.shape));
  }
}
ze.create = (t, e) => new ze({
  shape: () => t,
  unknownKeys: "strip",
  catchall: mr.create(),
  typeName: se.ZodObject,
  ...de(e)
});
ze.strictCreate = (t, e) => new ze({
  shape: () => t,
  unknownKeys: "strict",
  catchall: mr.create(),
  typeName: se.ZodObject,
  ...de(e)
});
ze.lazycreate = (t, e) => new ze({
  shape: t,
  unknownKeys: "strip",
  catchall: mr.create(),
  typeName: se.ZodObject,
  ...de(e)
});
class zi extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), i = this._def.options;
    function s(n) {
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
      return Promise.all(i.map(async (n) => {
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
      })).then(s);
    {
      let n;
      const a = [];
      for (const h of i) {
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
zi.create = (t, e) => new zi({
  options: t,
  typeName: se.ZodUnion,
  ...de(e)
});
const _s = (t) => t instanceof Ki ? _s(t.schema) : t instanceof Yt ? _s(t.innerType()) : t instanceof Vi ? [t.value] : t instanceof Cr ? t.options : t instanceof Hi ? Object.keys(t.enum) : t instanceof Wi ? _s(t._def.innerType) : t instanceof ji ? [void 0] : t instanceof ki ? [null] : null;
class Qs extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Y.object)
      return X(r, {
        code: V.invalid_type,
        expected: Y.object,
        received: r.parsedType
      }), ae;
    const i = this.discriminator, s = r.data[i], n = this.optionsMap.get(s);
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
      path: [i]
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
  static create(e, r, i) {
    const s = /* @__PURE__ */ new Map();
    for (const n of r) {
      const a = _s(n.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, n);
      }
    }
    return new Qs({
      typeName: se.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...de(i)
    });
  }
}
function Yn(t, e) {
  const r = xr(t), i = xr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === Y.object && i === Y.object) {
    const s = Te.objectKeys(e), n = Te.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of n) {
      const h = Yn(t[o], e[o]);
      if (!h.valid)
        return { valid: !1 };
      a[o] = h.data;
    }
    return { valid: !0, data: a };
  } else if (r === Y.array && i === Y.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let n = 0; n < t.length; n++) {
      const a = t[n], o = e[n], h = Yn(a, o);
      if (!h.valid)
        return { valid: !1 };
      s.push(h.data);
    }
    return { valid: !0, data: s };
  } else
    return r === Y.date && i === Y.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class qi extends ge {
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e), s = (n, a) => {
      if (Zn(n) || Zn(a))
        return ae;
      const o = Yn(n.value, a.value);
      return o.valid ? ((Gn(n) || Gn(a)) && r.dirty(), { status: r.value, value: o.data }) : (X(i, {
        code: V.invalid_intersection_types
      }), ae);
    };
    return i.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      }),
      this._def.right._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      })
    ]).then(([n, a]) => s(n, a)) : s(this._def.left._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }), this._def.right._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }));
  }
}
qi.create = (t, e, r) => new qi({
  left: t,
  right: e,
  typeName: se.ZodIntersection,
  ...de(r)
});
class or extends ge {
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e);
    if (i.parsedType !== Y.array)
      return X(i, {
        code: V.invalid_type,
        expected: Y.array,
        received: i.parsedType
      }), ae;
    if (i.data.length < this._def.items.length)
      return X(i, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && i.data.length > this._def.items.length && (X(i, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const n = [...i.data].map((a, o) => {
      const h = this._def.items[o] || this._def.rest;
      return h ? h._parse(new nr(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(n).then((a) => Et.mergeArray(r, a)) : Et.mergeArray(r, n);
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
    typeName: se.ZodTuple,
    rest: null,
    ...de(e)
  });
};
class Bi extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e);
    if (i.parsedType !== Y.object)
      return X(i, {
        code: V.invalid_type,
        expected: Y.object,
        received: i.parsedType
      }), ae;
    const s = [], n = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      s.push({
        key: n._parse(new nr(i, o, i.path, o)),
        value: a._parse(new nr(i, i.data[o], i.path, o))
      });
    return i.common.async ? Et.mergeObjectAsync(r, s) : Et.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, i) {
    return r instanceof ge ? new Bi({
      keyType: e,
      valueType: r,
      typeName: se.ZodRecord,
      ...de(i)
    }) : new Bi({
      keyType: Wt.create(),
      valueType: e,
      typeName: se.ZodRecord,
      ...de(r)
    });
  }
}
class Us extends ge {
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e);
    if (i.parsedType !== Y.map)
      return X(i, {
        code: V.invalid_type,
        expected: Y.map,
        received: i.parsedType
      }), ae;
    const s = this._def.keyType, n = this._def.valueType, a = [...i.data.entries()].map(([o, h], l) => ({
      key: s._parse(new nr(i, o, i.path, [l, "key"])),
      value: n._parse(new nr(i, h, i.path, [l, "value"]))
    }));
    if (i.common.async) {
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
Us.create = (t, e, r) => new Us({
  valueType: e,
  keyType: t,
  typeName: se.ZodMap,
  ...de(r)
});
class Hr extends ge {
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e);
    if (i.parsedType !== Y.set)
      return X(i, {
        code: V.invalid_type,
        expected: Y.set,
        received: i.parsedType
      }), ae;
    const s = this._def;
    s.minSize !== null && i.data.size < s.minSize.value && (X(i, {
      code: V.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && i.data.size > s.maxSize.value && (X(i, {
      code: V.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
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
    const o = [...i.data.values()].map((h, l) => n._parse(new nr(i, h, i.path, l)));
    return i.common.async ? Promise.all(o).then((h) => a(h)) : a(o);
  }
  min(e, r) {
    return new Hr({
      ...this._def,
      minSize: { value: e, message: re.toString(r) }
    });
  }
  max(e, r) {
    return new Hr({
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
Hr.create = (t, e) => new Hr({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: se.ZodSet,
  ...de(e)
});
class hi extends ge {
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
    function i(o, h) {
      return Rs({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          As(),
          Ui
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: h
        }
      });
    }
    function s(o, h) {
      return Rs({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          As(),
          Ui
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: h
        }
      });
    }
    const n = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof pi ? Tt(async (...o) => {
      const h = new Zt([]), l = await this._def.args.parseAsync(o, n).catch((y) => {
        throw h.addIssue(i(o, y)), h;
      }), d = await a(...l);
      return await this._def.returns._def.type.parseAsync(d, n).catch((y) => {
        throw h.addIssue(s(d, y)), h;
      });
    }) : Tt((...o) => {
      const h = this._def.args.safeParse(o, n);
      if (!h.success)
        throw new Zt([i(o, h.error)]);
      const l = a(...h.data), d = this._def.returns.safeParse(l, n);
      if (!d.success)
        throw new Zt([s(l, d.error)]);
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
    return new hi({
      ...this._def,
      args: or.create(e).rest(Kr.create())
    });
  }
  returns(e) {
    return new hi({
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
  static create(e, r, i) {
    return new hi({
      args: e || or.create([]).rest(Kr.create()),
      returns: r || Kr.create(),
      typeName: se.ZodFunction,
      ...de(i)
    });
  }
}
class Ki extends ge {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ki.create = (t, e) => new Ki({
  getter: t,
  typeName: se.ZodLazy,
  ...de(e)
});
class Vi extends ge {
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
Vi.create = (t, e) => new Vi({
  value: t,
  typeName: se.ZodLiteral,
  ...de(e)
});
function Ju(t, e) {
  return new Cr({
    values: t,
    typeName: se.ZodEnum,
    ...de(e)
  });
}
class Cr extends ge {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), i = this._def.values;
      return X(r, {
        expected: Te.joinValues(i),
        received: r.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), i = this._def.values;
      return X(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: i
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
    return Cr.create(e);
  }
  exclude(e) {
    return Cr.create(this.options.filter((r) => !e.includes(r)));
  }
}
Cr.create = Ju;
class Hi extends ge {
  _parse(e) {
    const r = Te.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(e);
    if (i.parsedType !== Y.string && i.parsedType !== Y.number) {
      const s = Te.objectValues(r);
      return X(i, {
        expected: Te.joinValues(s),
        received: i.parsedType,
        code: V.invalid_type
      }), ae;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Te.objectValues(r);
      return X(i, {
        received: i.data,
        code: V.invalid_enum_value,
        options: s
      }), ae;
    }
    return Tt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Hi.create = (t, e) => new Hi({
  values: t,
  typeName: se.ZodNativeEnum,
  ...de(e)
});
class pi extends ge {
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
    const i = r.parsedType === Y.promise ? r.data : Promise.resolve(r.data);
    return Tt(i.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
pi.create = (t, e) => new pi({
  type: t,
  typeName: se.ZodPromise,
  ...de(e)
});
class Yt extends ge {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === se.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e), s = this._def.effect || null;
    if (s.type === "preprocess") {
      const a = s.transform(i.data);
      return i.common.async ? Promise.resolve(a).then((o) => this._def.schema._parseAsync({
        data: o,
        path: i.path,
        parent: i
      })) : this._def.schema._parseSync({
        data: a,
        path: i.path,
        parent: i
      });
    }
    const n = {
      addIssue: (a) => {
        X(i, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return i.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), s.type === "refinement") {
      const a = (o) => {
        const h = s.refinement(o, n);
        if (i.common.async)
          return Promise.resolve(h);
        if (h instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (i.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? ae : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!Ps(a))
          return a;
        const o = s.transform(a.value, n);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => Ps(a) ? Promise.resolve(s.transform(a.value, n)).then((o) => ({ status: r.value, value: o })) : a);
    Te.assertNever(s);
  }
}
Yt.create = (t, e, r) => new Yt({
  schema: t,
  typeName: se.ZodEffects,
  effect: e,
  ...de(r)
});
Yt.createWithPreprocess = (t, e, r) => new Yt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: se.ZodEffects,
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
  typeName: se.ZodOptional,
  ...de(e)
});
class Wr extends ge {
  _parse(e) {
    return this._getType(e) === Y.null ? Tt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wr.create = (t, e) => new Wr({
  innerType: t,
  typeName: se.ZodNullable,
  ...de(e)
});
class Wi extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let i = r.data;
    return r.parsedType === Y.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Wi.create = (t, e) => new Wi({
  innerType: t,
  typeName: se.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...de(e)
});
class $s extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), i = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: i.data,
      path: i.path,
      parent: {
        ...i
      }
    });
    return Ls(s) ? s.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Zt(i.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Zt(i.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
$s.create = (t, e) => new $s({
  innerType: t,
  typeName: se.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...de(e)
});
class js extends ge {
  _parse(e) {
    if (this._getType(e) !== Y.nan) {
      const i = this._getOrReturnCtx(e);
      return X(i, {
        code: V.invalid_type,
        expected: Y.nan,
        received: i.parsedType
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
}
js.create = (t) => new js({
  typeName: se.ZodNaN,
  ...de(t)
});
const Gb = Symbol("zod_brand");
class Xu extends ge {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), i = r.data;
    return this._def.type._parse({
      data: i,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class rs extends ge {
  _parse(e) {
    const { status: r, ctx: i } = this._processInputParams(e);
    if (i.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return n.status === "aborted" ? ae : n.status === "dirty" ? (r.dirty(), Yu(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: i.path,
          parent: i
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i
      });
      return s.status === "aborted" ? ae : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: i.path,
        parent: i
      });
    }
  }
  static create(e, r) {
    return new rs({
      in: e,
      out: r,
      typeName: se.ZodPipeline
    });
  }
}
const Qu = (t, e = {}, r) => t ? fi.create().superRefine((i, s) => {
  var n, a;
  if (!t(i)) {
    const o = typeof e == "function" ? e(i) : e, h = (a = (n = o.fatal) !== null && n !== void 0 ? n : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...l, fatal: h });
  }
}) : fi.create(), Yb = {
  object: ze.lazycreate
};
var se;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(se || (se = {}));
const Jb = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Qu((r) => r instanceof t, e), el = Wt.create, tl = Ir.create, Xb = js.create, Qb = Or.create, rl = $i.create, ew = Vr.create, tw = Fs.create, rw = ji.create, iw = ki.create, sw = fi.create, nw = Kr.create, ow = mr.create, aw = Ms.create, cw = Gt.create, uw = ze.create, lw = ze.strictCreate, hw = zi.create, dw = Qs.create, fw = qi.create, pw = or.create, gw = Bi.create, yw = Us.create, mw = Hr.create, vw = hi.create, bw = Ki.create, ww = Vi.create, _w = Cr.create, Ew = Hi.create, Sw = pi.create, xc = Yt.create, xw = yr.create, Dw = Wr.create, Iw = Yt.createWithPreprocess, Ow = rs.create, Cw = () => el().optional(), Tw = () => tl().optional(), Nw = () => rl().optional(), Aw = {
  string: (t) => Wt.create({ ...t, coerce: !0 }),
  number: (t) => Ir.create({ ...t, coerce: !0 }),
  boolean: (t) => $i.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Or.create({ ...t, coerce: !0 }),
  date: (t) => Vr.create({ ...t, coerce: !0 })
}, Rw = ae;
var Xt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ui,
  setErrorMap: Mb,
  getErrorMap: As,
  makeIssue: Rs,
  EMPTY_PATH: Ub,
  addIssueToContext: X,
  ParseStatus: Et,
  INVALID: ae,
  DIRTY: Yu,
  OK: Tt,
  isAborted: Zn,
  isDirty: Gn,
  isValid: Ps,
  isAsync: Ls,
  get util() {
    return Te;
  },
  get objectUtil() {
    return Wn;
  },
  ZodParsedType: Y,
  getParsedType: xr,
  ZodType: ge,
  ZodString: Wt,
  ZodNumber: Ir,
  ZodBigInt: Or,
  ZodBoolean: $i,
  ZodDate: Vr,
  ZodSymbol: Fs,
  ZodUndefined: ji,
  ZodNull: ki,
  ZodAny: fi,
  ZodUnknown: Kr,
  ZodNever: mr,
  ZodVoid: Ms,
  ZodArray: Gt,
  ZodObject: ze,
  ZodUnion: zi,
  ZodDiscriminatedUnion: Qs,
  ZodIntersection: qi,
  ZodTuple: or,
  ZodRecord: Bi,
  ZodMap: Us,
  ZodSet: Hr,
  ZodFunction: hi,
  ZodLazy: Ki,
  ZodLiteral: Vi,
  ZodEnum: Cr,
  ZodNativeEnum: Hi,
  ZodPromise: pi,
  ZodEffects: Yt,
  ZodTransformer: Yt,
  ZodOptional: yr,
  ZodNullable: Wr,
  ZodDefault: Wi,
  ZodCatch: $s,
  ZodNaN: js,
  BRAND: Gb,
  ZodBranded: Xu,
  ZodPipeline: rs,
  custom: Qu,
  Schema: ge,
  ZodSchema: ge,
  late: Yb,
  get ZodFirstPartyTypeKind() {
    return se;
  },
  coerce: Aw,
  any: sw,
  array: cw,
  bigint: Qb,
  boolean: rl,
  date: ew,
  discriminatedUnion: dw,
  effect: xc,
  enum: _w,
  function: vw,
  instanceof: Jb,
  intersection: fw,
  lazy: bw,
  literal: ww,
  map: yw,
  nan: Xb,
  nativeEnum: Ew,
  never: ow,
  null: iw,
  nullable: Dw,
  number: tl,
  object: uw,
  oboolean: Nw,
  onumber: Tw,
  optional: xw,
  ostring: Cw,
  pipeline: Ow,
  preprocess: Iw,
  promise: Sw,
  record: gw,
  set: mw,
  strictObject: lw,
  string: el,
  symbol: tw,
  transformer: xc,
  tuple: pw,
  undefined: rw,
  union: hw,
  unknown: nw,
  void: aw,
  NEVER: Rw,
  ZodIssueCode: V,
  quotelessJson: Fb,
  ZodError: Zt
});
const il = /^aleo1[a-z0-9]{58}$/i, Pw = /^AViewKey1[a-z0-9]{44}$/i, Lw = /^APrivateKey1[a-z0-9]{47}$/i, Fw = /^at1[a-z0-9]{58}$/i, Mw = /^\d+field$/, Uw = /^\d+u32$/, $w = /^\d+u64$/, E_ = Xt.string().regex(il), S_ = Xt.string().regex(Pw), x_ = Xt.string().regex(Lw), D_ = Xt.string().regex(Fw), I_ = Xt.string().regex(Mw), O_ = Xt.string().regex(Uw), C_ = Xt.string().regex($w);
var Dc;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Dc || (Dc = {}));
var Jn;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Jn || (Jn = {}));
var Xn;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Xn || (Xn = {}));
var Qn;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Qn || (Qn = {}));
var eo;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(eo || (eo = {}));
var Ic;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Ic || (Ic = {}));
const T_ = Xt.nativeEnum(Jn), N_ = Xt.nativeEnum(Xn), A_ = Xt.nativeEnum(eo), R_ = Xt.nativeEnum(Qn), P_ = async ({
  message: t,
  address: e
}) => {
  const r = await zt(), i = await (r == null ? void 0 : r.getSession());
  if (!i || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: i.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: il.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const n = s.message;
    return console.error("signature error", n), { error: n };
  }
}, L_ = 20;
var to = { exports: {} }, En, Oc;
function jw() {
  if (Oc)
    return En;
  Oc = 1;
  var t = 1e3, e = t * 60, r = e * 60, i = r * 24, s = i * 7, n = i * 365.25;
  En = function(d, f) {
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
            return y * s;
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
  function o(d) {
    var f = Math.abs(d);
    return f >= i ? Math.round(d / i) + "d" : f >= r ? Math.round(d / r) + "h" : f >= e ? Math.round(d / e) + "m" : f >= t ? Math.round(d / t) + "s" : d + "ms";
  }
  function h(d) {
    var f = Math.abs(d);
    return f >= i ? l(d, f, i, "day") : f >= r ? l(d, f, r, "hour") : f >= e ? l(d, f, e, "minute") : f >= t ? l(d, f, t, "second") : d + " ms";
  }
  function l(d, f, y, b) {
    var _ = f >= y * 1.5;
    return Math.round(d / y) + " " + b + (_ ? "s" : "");
  }
  return En;
}
function kw(t) {
  r.debug = r, r.default = r, r.coerce = h, r.disable = n, r.enable = s, r.enabled = a, r.humanize = jw(), r.destroy = l, Object.keys(t).forEach((d) => {
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
    return O.namespace = d, O.useColors = r.useColors(), O.color = r.selectColor(d), O.extend = i, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (b !== r.namespaces && (b = r.namespaces, _ = r.enabled(d)), _),
      set: (L) => {
        y = L;
      }
    }), typeof r.init == "function" && r.init(O), O;
  }
  function i(d, f) {
    const y = r(this.namespace + (typeof f > "u" ? ":" : f) + d);
    return y.log = this.log, y;
  }
  function s(d) {
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
var zw = kw;
(function(t, e) {
  e.formatArgs = i, e.save = s, e.load = n, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
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
  function i(h) {
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
  function s(h) {
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
  t.exports = zw(e);
  const { formatters: o } = t.exports;
  o.j = function(h) {
    try {
      return JSON.stringify(h);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(to, to.exports);
var qw = to.exports;
const Bw = /* @__PURE__ */ ks(qw), Kw = Bw("wallet:sdk");
Kw.enabled = !0;
export {
  l_ as $,
  Ic as A,
  h_ as B,
  d_ as C,
  f_ as D,
  Xn as E,
  p_ as F,
  g_ as G,
  y_ as H,
  m_ as I,
  v_ as J,
  b_ as K,
  w_ as L,
  __ as M,
  eo as N,
  P_ as O,
  L_ as P,
  Hu as Q,
  Xl as R,
  Oo as S,
  Cc as T,
  Wu as U,
  Qn as V,
  fb as W,
  pb as X,
  u_ as Y,
  Kw as Z,
  Zu as _,
  wt as a,
  zt as a0,
  Jn as b,
  il as c,
  Mw as d,
  Lw as e,
  Fw as f,
  Uw as g,
  $w as h,
  Pw as i,
  N_ as j,
  T_ as k,
  I_ as l,
  A_ as m,
  Wo as n,
  Hw as o,
  Ht as p,
  x_ as q,
  D_ as r,
  rn as s,
  Vw as t,
  O_ as u,
  C_ as v,
  S_ as w,
  R_ as x,
  di as y,
  E_ as z
};
