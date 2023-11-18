import ji, { useDebugValue as Uu, useEffect as br, useState as Lt } from "react";
const Fu = "@puzzlehq/sdk", Mu = "Puzzle SDK", $u = "0.1.31", ju = "Your portal to privacy", qu = "./dist/puzzle.umd.js", zu = "./dist/puzzle.es.js", Bu = "./dist/types/src/index.d.ts", Ku = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, Hu = "module", Vu = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types"
}, Wu = {
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
}, ku = {
  "@puzzlehq/types": "1.0.3",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, Gu = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Yu = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], Ju = "Puzzle", Qu = "ISC", Xu = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Zu = "https://github.com/puzzlehq/puzzle-sdk#readme", el = {
  name: Fu,
  displayName: Mu,
  version: $u,
  description: ju,
  main: qu,
  module: zu,
  types: Bu,
  exports: Ku,
  type: Hu,
  scripts: Vu,
  dependencies: Wu,
  devDependencies: ku,
  repository: Gu,
  keywords: Yu,
  author: Ju,
  license: Qu,
  bugs: Xu,
  homepage: Zu
}, tl = Symbol(), Rs = Object.getPrototypeOf, Sn = /* @__PURE__ */ new WeakMap(), rl = (t) => t && (Sn.has(t) ? Sn.get(t) : Rs(t) === Object.prototype || Rs(t) === Array.prototype), il = (t) => rl(t) && t[tl] || null, Ns = (t, e = !0) => {
  Sn.set(t, e);
}, en = (t) => typeof t == "object" && t !== null, Zt = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakSet(), nl = (t = Object.is, e = (h, p) => new Proxy(h, p), r = (h) => en(h) && !Ei.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), i = (h) => {
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
  return Ns(_, !0), n.set(h, [p, _]), Reflect.ownKeys(h).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(_, D))
      return;
    const I = Reflect.get(h, D), x = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Ei.has(I))
      Ns(I, !1);
    else if (I instanceof Promise)
      delete x.value, x.get = () => b(I);
    else if (Zt.has(I)) {
      const [F, m] = Zt.get(
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
  if (!en(h))
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
      S(R), en(U) && (U = il(U) || U);
      let P = U;
      if (U instanceof Promise)
        U.then((V) => {
          U.status = "fulfilled", U.value = V, _(["resolve", [R], V]);
        }).catch((V) => {
          U.status = "rejected", U.reason = V, _(["reject", [R], V]);
        });
      else {
        !Zt.has(U) && r(U) && (P = l(U));
        const V = !Ei.has(P) && Zt.get(P);
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
  return Zt.set(o, d), Reflect.ownKeys(h).forEach((T) => {
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
  Zt,
  Ei,
  // internal things
  t,
  e,
  r,
  i,
  n,
  s,
  u,
  c
], [sl] = nl();
function rr(t = {}) {
  return sl(t);
}
function mr(t, e, r) {
  const i = Zt.get(t);
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
function ol(t, e) {
  const r = Zt.get(t), [i, n, s] = r;
  return s(i, n(), e);
}
const Ze = rr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ia = { state: Ze, subscribe(t) {
  return mr(Ze, () => t(Ze));
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
  const e = (t = Ia.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, al = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), ot = rr({ enabled: al, userSessionId: "", events: [], connectedWalletId: void 0 }), cl = { state: ot, subscribe(t) {
  return mr(ot.events, () => t(ol(ot.events[ot.events.length - 1])));
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
} }, Mt = rr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Pt = { state: Mt, subscribe(t) {
  return mr(Mt, () => t(Mt));
}, setChains(t) {
  Mt.chains = t;
}, setWalletConnectUri(t) {
  Mt.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Mt.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Mt.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Mt.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Mt.isUiLoaded = t;
}, setIsAuth(t) {
  Mt.isAuth = t;
} }, Si = rr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Tr = { state: Si, subscribe(t) {
  return mr(Si, () => t(Si));
}, setConfig(t) {
  var e, r;
  cl.initialize(), Pt.setChains(t.chains), Pt.setIsAuth(!!t.enableAuthMode), Pt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Pt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), lt.setModalVersionInStorage(), Object.assign(Si, t);
} };
var ul = Object.defineProperty, Ps = Object.getOwnPropertySymbols, ll = Object.prototype.hasOwnProperty, hl = Object.prototype.propertyIsEnumerable, Ls = (t, e, r) => e in t ? ul(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fl = (t, e) => {
  for (var r in e || (e = {}))
    ll.call(e, r) && Ls(t, r, e[r]);
  if (Ps)
    for (var r of Ps(e))
      hl.call(e, r) && Ls(t, r, e[r]);
  return t;
};
const Dn = "https://explorer-api.walletconnect.com", In = "wcm", On = "js-2.6.2";
async function Di(t, e) {
  const r = fl({ sdkType: In, sdkVersion: On }, e), i = new URL(t, Dn);
  return i.searchParams.append("projectId", Tr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const cr = { async getDesktopListings(t) {
  return Di("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Di("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Di("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Di("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Dn}/w3m/v1/getWalletImage/${t}?projectId=${Tr.state.projectId}&sdkType=${In}&sdkVersion=${On}`;
}, getAssetImageUrl(t) {
  return `${Dn}/w3m/v1/getAssetImage/${t}?projectId=${Tr.state.projectId}&sdkType=${In}&sdkVersion=${On}`;
} };
var dl = Object.defineProperty, Us = Object.getOwnPropertySymbols, pl = Object.prototype.hasOwnProperty, gl = Object.prototype.propertyIsEnumerable, Fs = (t, e, r) => e in t ? dl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yl = (t, e) => {
  for (var r in e || (e = {}))
    pl.call(e, r) && Fs(t, r, e[r]);
  if (Us)
    for (var r of Us(e))
      gl.call(e, r) && Fs(t, r, e[r]);
  return t;
};
const Ms = lt.isMobile(), $t = rr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), hb = { state: $t, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Tr.state;
  if (t === "NONE" || e === "ALL" && !t)
    return $t.recomendedWallets;
  if (lt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: i } = await cr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const c = t.indexOf(s.id), l = t.indexOf(u.id);
      return c - l;
    }), $t.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Pt.state, n = r == null ? void 0 : r.join(","), s = lt.isArray(e), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: lt.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: c } = Ms ? await cr.getMobileListings(u) : await cr.getDesktopListings(u);
    $t.recomendedWallets = Object.values(c);
  }
  return $t.recomendedWallets;
}, async getWallets(t) {
  const e = yl({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Tr.state, { recomendedWallets: n } = $t;
  if (i === "ALL")
    return $t.wallets;
  n.length ? e.excludedIds = n.map((b) => b.id).join(",") : lt.isArray(r) && (e.excludedIds = r.join(",")), lt.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Pt.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: u } = t, { listings: c, total: l } = Ms ? await cr.getMobileListings(e) : await cr.getDesktopListings(e), h = Object.values(c), p = u ? "search" : "wallets";
  return $t[p] = { listings: [...$t[p].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(t) {
  return cr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return cr.getAssetImageUrl(t);
}, resetSearch() {
  $t.search = { listings: [], total: 0, page: 1 };
} }, Sr = rr({ open: !1 }), tn = { state: Sr, subscribe(t) {
  return mr(Sr, () => t(Sr));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: i } = Pt.state;
    if (lt.removeWalletConnectDeepLink(), Pt.setWalletConnectUri(t == null ? void 0 : t.uri), Pt.setChains(t == null ? void 0 : t.chains), Ia.reset("ConnectWallet"), r && i)
      Sr.open = !0, e();
    else {
      const n = setInterval(() => {
        const s = Pt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), Sr.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Sr.open = !1;
} };
var bl = Object.defineProperty, $s = Object.getOwnPropertySymbols, ml = Object.prototype.hasOwnProperty, vl = Object.prototype.propertyIsEnumerable, js = (t, e, r) => e in t ? bl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wl = (t, e) => {
  for (var r in e || (e = {}))
    ml.call(e, r) && js(t, r, e[r]);
  if ($s)
    for (var r of $s(e))
      vl.call(e, r) && js(t, r, e[r]);
  return t;
};
function _l() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const jr = rr({ themeMode: _l() ? "dark" : "light" }), qs = { state: jr, subscribe(t) {
  return mr(jr, () => t(jr));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (jr.themeMode = e), r && (jr.themeVariables = wl({}, r));
} }, ur = rr({ open: !1, message: "", variant: "success" }), fb = { state: ur, subscribe(t) {
  return mr(ur, () => t(ur));
}, openToast(t, e) {
  ur.open = !0, ur.message = t, ur.variant = e;
}, closeToast() {
  ur.open = !1;
} };
let El = class {
  constructor(e) {
    this.openModal = tn.open, this.closeModal = tn.close, this.subscribeModal = tn.subscribe, this.setTheme = qs.setThemeConfig, qs.setThemeConfig(e), Tr.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-f609213e.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Pt.setIsUiLoaded(!0);
    }
  }
};
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function kn(t) {
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
var Gn = { exports: {} }, Ar = typeof Reflect == "object" ? Reflect : null, zs = Ar && typeof Ar.apply == "function" ? Ar.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, Ai;
Ar && typeof Ar.ownKeys == "function" ? Ai = Ar.ownKeys : Object.getOwnPropertySymbols ? Ai = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Ai = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Sl(t) {
  console && console.warn && console.warn(t);
}
var Oa = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
Gn.exports = Ie;
Gn.exports.once = xl;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var Bs = 10;
function qi(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Bs;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Oa(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Bs = t;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Oa(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function xa(t) {
  return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return xa(this);
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
    zs(l, this, r);
  else
    for (var h = l.length, p = Na(l, h), i = 0; i < h; ++i)
      zs(p[i], this, r);
  return !0;
};
function Aa(t, e, r, i) {
  var n, s, u;
  if (qi(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), u = s[e]), u === void 0)
    u = s[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = s[e] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = xa(t), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = u.length, Sl(c);
  }
  return t;
}
Ie.prototype.addListener = function(e, r) {
  return Aa(this, e, r, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
  return Aa(this, e, r, !0);
};
function Dl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ca(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, n = Dl.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ie.prototype.once = function(e, r) {
  return qi(r), this.on(e, Ca(this, e, r)), this;
};
Ie.prototype.prependOnceListener = function(e, r) {
  return qi(r), this.prependListener(e, Ca(this, e, r)), this;
};
Ie.prototype.removeListener = function(e, r) {
  var i, n, s, u, c;
  if (qi(r), n = this._events, n === void 0)
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
    s === 0 ? i.shift() : Il(i, s), i.length === 1 && (n[e] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", e, c || r);
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
function Ta(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var n = i[e];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? Ol(n) : Na(n, n.length);
}
Ie.prototype.listeners = function(e) {
  return Ta(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return Ta(this, e, !1);
};
Ie.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ra.call(t, e);
};
Ie.prototype.listenerCount = Ra;
function Ra(t) {
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
  return this._eventsCount > 0 ? Ai(this._events) : [];
};
function Na(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function Il(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Ol(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function xl(t, e) {
  return new Promise(function(r, i) {
    function n(u) {
      t.removeListener(e, s), i(u);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", n), r([].slice.call(arguments));
    }
    Pa(t, e, s, { once: !0 }), e !== "error" && Al(t, n, { once: !0 });
  });
}
function Al(t, e, r) {
  typeof t.on == "function" && Pa(t, "error", e, r);
}
function Pa(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function n(s) {
      i.once && t.removeEventListener(e, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Ut = Gn.exports;
const La = /* @__PURE__ */ Wn(Ut);
var zi = {};
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
  return xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, xn(t, e);
};
function Cl(t, e) {
  xn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var An = function() {
  return An = Object.assign || function(e) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, An.apply(this, arguments);
};
function Tl(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)
      e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
  return r;
}
function Rl(t, e, r, i) {
  var n = arguments.length, s = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, i);
  else
    for (var c = t.length - 1; c >= 0; c--)
      (u = t[c]) && (s = (n < 3 ? u(s) : n > 3 ? u(e, r, s) : u(e, r)) || s);
  return n > 3 && s && Object.defineProperty(e, r, s), s;
}
function Nl(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function Pl(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Ll(t, e, r, i) {
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
function Ul(t, e) {
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
function Fl(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function Ml(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Cn(t) {
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
function Ua(t, e) {
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
function $l() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ua(arguments[e]));
  return t;
}
function jl() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var i = Array(t), n = 0, e = 0; e < r; e++)
    for (var s = arguments[e], u = 0, c = s.length; u < c; u++, n++)
      i[n] = s[u];
  return i;
}
function ti(t) {
  return this instanceof ti ? (this.v = t, this) : new ti(t);
}
function ql(t, e, r) {
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
    w.value instanceof ti ? Promise.resolve(w.value.v).then(h, p) : b(s[0][2], w);
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
function zl(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(n, s) {
    e[n] = t[n] ? function(u) {
      return (r = !r) ? { value: ti(t[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Bl(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Cn == "function" ? Cn(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
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
function Kl(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Hl(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Vl(t) {
  return t && t.__esModule ? t : { default: t };
}
function Wl(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function kl(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return An;
  },
  __asyncDelegator: zl,
  __asyncGenerator: ql,
  __asyncValues: Bl,
  __await: ti,
  __awaiter: Ll,
  __classPrivateFieldGet: Wl,
  __classPrivateFieldSet: kl,
  __createBinding: Fl,
  __decorate: Rl,
  __exportStar: Ml,
  __extends: Cl,
  __generator: Ul,
  __importDefault: Vl,
  __importStar: Hl,
  __makeTemplateObject: Kl,
  __metadata: Pl,
  __param: Nl,
  __read: Ua,
  __rest: Tl,
  __spread: $l,
  __spreadArrays: jl,
  __values: Cn
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ kn(Gl);
var oi = {};
Object.defineProperty(oi, "__esModule", { value: !0 });
function Yl(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
oi.safeJsonParse = Yl;
function Jl(t) {
  return typeof t == "string" ? t : JSON.stringify(t, (e, r) => typeof r > "u" ? null : r);
}
oi.safeJsonStringify = Jl;
var qr = { exports: {} }, Ks;
function Ql() {
  return Ks || (Ks = 1, function() {
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
    }), typeof Et < "u" && Et.localStorage ? qr.exports = Et.localStorage : typeof window < "u" && window.localStorage ? qr.exports = window.localStorage : qr.exports = new e();
  }()), qr.exports;
}
var rn = {}, zr = {}, Hs;
function Xl() {
  if (Hs)
    return zr;
  Hs = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.IKeyValueStorage = void 0;
  class t {
  }
  return zr.IKeyValueStorage = t, zr;
}
var Br = {}, Vs;
function Zl() {
  if (Vs)
    return Br;
  Vs = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.parseEntry = void 0;
  const t = oi;
  function e(r) {
    var i;
    return [r[0], t.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return Br.parseEntry = e, Br;
}
var Ws;
function eh() {
  return Ws || (Ws = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(Xl(), t), e.__exportStar(Zl(), t);
  }(rn)), rn;
}
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.KeyValueStorage = void 0;
const Ir = At, ks = oi, th = Ir.__importDefault(Ql()), rh = eh();
class Fa {
  constructor() {
    this.localStorage = th.default;
  }
  getKeys() {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(rh.parseEntry);
    });
  }
  getItem(e) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(e);
      if (r !== null)
        return ks.safeJsonParse(r);
    });
  }
  setItem(e, r) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, ks.safeJsonStringify(r));
    });
  }
  removeItem(e) {
    return Ir.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
zi.KeyValueStorage = Fa;
var ih = zi.default = Fa, Nr = {}, Kr = {}, X = {}, nn = {}, Hr = {}, Gs;
function nh() {
  if (Gs)
    return Hr;
  Gs = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Hr.delay = t, Hr;
}
var lr = {}, sn = {}, hr = {}, Ys;
function sh() {
  return Ys || (Ys = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.ONE_THOUSAND = hr.ONE_HUNDRED = void 0, hr.ONE_HUNDRED = 100, hr.ONE_THOUSAND = 1e3), hr;
}
var on = {}, Js;
function oh() {
  return Js || (Js = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(on)), on;
}
var Qs;
function Ma() {
  return Qs || (Qs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(sh(), t), e.__exportStar(oh(), t);
  }(sn)), sn;
}
var Xs;
function ah() {
  if (Xs)
    return lr;
  Xs = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.fromMiliseconds = lr.toMiliseconds = void 0;
  const t = Ma();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  lr.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return lr.fromMiliseconds = r, lr;
}
var Zs;
function ch() {
  return Zs || (Zs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = At;
    e.__exportStar(nh(), t), e.__exportStar(ah(), t);
  }(nn)), nn;
}
var Dr = {}, eo;
function uh() {
  if (eo)
    return Dr;
  eo = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.Watch = void 0;
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
  return Dr.Watch = t, Dr.default = t, Dr;
}
var an = {}, Vr = {}, to;
function lh() {
  if (to)
    return Vr;
  to = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.IWatch = void 0;
  class t {
  }
  return Vr.IWatch = t, Vr;
}
var ro;
function hh() {
  return ro || (ro = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(lh(), t);
  }(an)), an;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(ch(), t), e.__exportStar(uh(), t), e.__exportStar(hh(), t), e.__exportStar(Ma(), t);
})(X);
var cn = {}, Wr = {};
let vr = class {
};
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: vr
}, Symbol.toStringTag, { value: "Module" })), dh = /* @__PURE__ */ kn(fh);
var io;
function ph() {
  if (io)
    return Wr;
  io = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.IHeartBeat = void 0;
  const t = dh;
  class e extends t.IEvents {
    constructor(i) {
      super();
    }
  }
  return Wr.IHeartBeat = e, Wr;
}
var no;
function $a() {
  return no || (no = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(ph(), t);
  }(cn)), cn;
}
var un = {}, fr = {}, so;
function gh() {
  if (so)
    return fr;
  so = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.HEARTBEAT_EVENTS = fr.HEARTBEAT_INTERVAL = void 0;
  const t = X;
  return fr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, fr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, fr;
}
var oo;
function ja() {
  return oo || (oo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), At.__exportStar(gh(), t);
  }(un)), un;
}
var ao;
function yh() {
  if (ao)
    return Kr;
  ao = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.HeartBeat = void 0;
  const t = At, e = Ut, r = X, i = $a(), n = ja();
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
  return Kr.HeartBeat = s, Kr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(yh(), t), e.__exportStar($a(), t), e.__exportStar(ja(), t);
})(Nr);
var ve = {}, ln, co;
function bh() {
  if (co)
    return ln;
  co = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ln = e;
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
  return ln;
}
var hn, uo;
function mh() {
  if (uo)
    return hn;
  uo = 1;
  const t = bh();
  hn = n;
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
  return hn;
}
var dr = {}, lo;
function qa() {
  return lo || (lo = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.PINO_CUSTOM_CONTEXT_KEY = dr.PINO_LOGGER_DEFAULTS = void 0, dr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, dr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), dr;
}
var ft = {}, ho;
function vh() {
  if (ho)
    return ft;
  ho = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.generateChildLogger = ft.formatChildLoggerContext = ft.getLoggerContext = ft.setBrowserLoggerContext = ft.getBrowserLoggerContext = ft.getDefaultLoggerOptions = void 0;
  const t = qa();
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
  const e = At, r = e.__importDefault(mh());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(qa(), t), e.__exportStar(vh(), t);
})(ve);
let wh = class extends vr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, _h = class extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Eh = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Sh = class extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Dh = class extends vr {
  constructor(e) {
    super();
  }
}, Ih = class {
  constructor(e, r, i, n) {
    this.core = e, this.logger = r, this.name = i;
  }
};
class Oh extends vr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let xh = class extends vr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Ah = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Ch = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Th = class {
  constructor(e) {
    this.client = e;
  }
};
const Rh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Nh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function za(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Nh(t);
  } catch {
    return t;
  }
}
function Yn(t) {
  return typeof t == "string" ? t : Rh(t) || "";
}
var Jn = {}, Pr = {}, Bi = {}, Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.BrowserRandomSource = void 0;
const fo = 65536;
class Ph {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let i = 0; i < r.length; i += fo)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, fo)));
    return r;
  }
}
Ki.BrowserRandomSource = Ph;
function Lh(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Hi = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
function Uh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Dt.wipe = Uh;
const Fh = {}, Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fh
}, Symbol.toStringTag, { value: "Module" })), $h = /* @__PURE__ */ kn(Mh);
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.NodeRandomSource = void 0;
const jh = Dt;
class qh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Lh < "u") {
      const e = $h;
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
    return (0, jh.wipe)(r), i;
  }
}
Hi.NodeRandomSource = qh;
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.SystemRandomSource = void 0;
const zh = Ki, Bh = Hi;
class Kh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new zh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Bh.NodeRandomSource(), this._source.isAvailable) {
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
Bi.SystemRandomSource = Kh;
var ne = {}, Ba = {};
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
})(Ba);
Object.defineProperty(ne, "__esModule", { value: !0 });
var Ka = Ba;
function Hh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
ne.readInt16BE = Hh;
function Vh(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
ne.readUint16BE = Vh;
function Wh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
ne.readInt16LE = Wh;
function kh(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint16LE = kh;
function Ha(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
ne.writeUint16BE = Ha;
ne.writeInt16BE = Ha;
function Va(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
ne.writeUint16LE = Va;
ne.writeInt16LE = Va;
function Tn(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
ne.readInt32BE = Tn;
function Rn(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
ne.readUint32BE = Rn;
function Nn(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
ne.readInt32LE = Nn;
function Pn(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
ne.readUint32LE = Pn;
function Ni(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
ne.writeUint32BE = Ni;
ne.writeInt32BE = Ni;
function Pi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
ne.writeUint32LE = Pi;
ne.writeInt32LE = Pi;
function Gh(t, e) {
  e === void 0 && (e = 0);
  var r = Tn(t, e), i = Tn(t, e + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
ne.readInt64BE = Gh;
function Yh(t, e) {
  e === void 0 && (e = 0);
  var r = Rn(t, e), i = Rn(t, e + 4);
  return r * 4294967296 + i;
}
ne.readUint64BE = Yh;
function Jh(t, e) {
  e === void 0 && (e = 0);
  var r = Nn(t, e), i = Nn(t, e + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
ne.readInt64LE = Jh;
function Qh(t, e) {
  e === void 0 && (e = 0);
  var r = Pn(t, e), i = Pn(t, e + 4);
  return i * 4294967296 + r;
}
ne.readUint64LE = Qh;
function Wa(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ni(t / 4294967296 >>> 0, e, r), Ni(t >>> 0, e, r + 4), e;
}
ne.writeUint64BE = Wa;
ne.writeInt64BE = Wa;
function ka(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Pi(t >>> 0, e, r), Pi(t / 4294967296 >>> 0, e, r + 4), e;
}
ne.writeUint64LE = ka;
ne.writeInt64LE = ka;
function Xh(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = t / 8 + r - 1; s >= r; s--)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintBE = Xh;
function Zh(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + t / 8; s++)
    i += e[s] * n, n *= 256;
  return i;
}
ne.readUintLE = Zh;
function ef(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ka.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = t / 8 + i - 1; s >= i; s--)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintBE = ef;
function tf(t, e, r, i) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ka.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + t / 8; s++)
    r[s] = e / n & 255, n *= 256;
  return r;
}
ne.writeUintLE = tf;
function rf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
ne.readFloat32BE = rf;
function nf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
ne.readFloat32LE = nf;
function sf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
ne.readFloat64BE = sf;
function of(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
ne.readFloat64LE = of;
function af(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t), e;
}
ne.writeFloat32BE = af;
function cf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(r, t, !0), e;
}
ne.writeFloat32LE = cf;
function uf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t), e;
}
ne.writeFloat64BE = uf;
function lf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(r, t, !0), e;
}
ne.writeFloat64LE = lf;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Bi, r = ne, i = Dt;
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
})(Pr);
var Ga = {};
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
        var Z = D, J = I, ee = x, L = F, N = m, A = S, a = y, E = v, W = f, Y = o, he = d, be = T, de = R, _e = U, Fe = B, Ne = k;
        if (O = v, P = k, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = (m >>> 14 | R << 32 - 14) ^ (m >>> 18 | R << 32 - 18) ^ (R >>> 41 - 32 | m << 32 - (41 - 32)), P = (R >>> 14 | m << 32 - 14) ^ (R >>> 18 | m << 32 - 18) ^ (m >>> 41 - 32 | R << 32 - (41 - 32)), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = m & S ^ ~m & y, P = R & U ^ ~R & B, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = n[te * 2], P = n[te * 2 + 1], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = c[te % 16], P = l[te % 16], $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, V = M & 65535 | K << 16, z = $ & 65535 | q << 16, O = V, P = z, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = (D >>> 28 | f << 32 - 28) ^ (f >>> 34 - 32 | D << 32 - (34 - 32)) ^ (f >>> 39 - 32 | D << 32 - (39 - 32)), P = (f >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | f << 32 - (34 - 32)) ^ (D >>> 39 - 32 | f << 32 - (39 - 32)), $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, O = D & I ^ D & x ^ I & x, P = f & o ^ f & d ^ o & d, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, E = M & 65535 | K << 16, Ne = $ & 65535 | q << 16, O = L, P = be, $ = P & 65535, q = P >>> 16, M = O & 65535, K = O >>> 16, O = V, P = z, $ += P & 65535, q += P >>> 16, M += O & 65535, K += O >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, L = M & 65535 | K << 16, be = $ & 65535 | q << 16, I = Z, x = J, F = ee, m = L, S = N, y = A, v = a, D = E, o = W, d = Y, T = he, R = be, U = de, B = _e, k = Fe, f = Ne, te % 16 === 15)
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
})(Ga);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Pr, r = Ga, i = Dt;
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
    let a, E, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Fe = 0, Ne = 0, ye = 0, pe = 0, fe = 0, ue = 0, ce = 0, ae = 0, oe = 0, re = 0, le = 0, ge = 0, ie = 0, me = 0, we = 0, Se = 0, De = 0, Ee = 0, Ct = 0, Ft = 0, Yt = 0, wt = 0, nr = 0, Fr = 0, gi = 0, Me = A[0], Pe = A[1], $e = A[2], je = A[3], qe = A[4], Le = A[5], Ve = A[6], We = A[7], ke = A[8], Ge = A[9], Ye = A[10], He = A[11], ze = A[12], Ae = A[13], Je = A[14], Qe = A[15];
    a = N[0], W += a * Me, Y += a * Pe, he += a * $e, be += a * je, de += a * qe, _e += a * Le, Fe += a * Ve, Ne += a * We, ye += a * ke, pe += a * Ge, fe += a * Ye, ue += a * He, ce += a * ze, ae += a * Ae, oe += a * Je, re += a * Qe, a = N[1], Y += a * Me, he += a * Pe, be += a * $e, de += a * je, _e += a * qe, Fe += a * Le, Ne += a * Ve, ye += a * We, pe += a * ke, fe += a * Ge, ue += a * Ye, ce += a * He, ae += a * ze, oe += a * Ae, re += a * Je, le += a * Qe, a = N[2], he += a * Me, be += a * Pe, de += a * $e, _e += a * je, Fe += a * qe, Ne += a * Le, ye += a * Ve, pe += a * We, fe += a * ke, ue += a * Ge, ce += a * Ye, ae += a * He, oe += a * ze, re += a * Ae, le += a * Je, ge += a * Qe, a = N[3], be += a * Me, de += a * Pe, _e += a * $e, Fe += a * je, Ne += a * qe, ye += a * Le, pe += a * Ve, fe += a * We, ue += a * ke, ce += a * Ge, ae += a * Ye, oe += a * He, re += a * ze, le += a * Ae, ge += a * Je, ie += a * Qe, a = N[4], de += a * Me, _e += a * Pe, Fe += a * $e, Ne += a * je, ye += a * qe, pe += a * Le, fe += a * Ve, ue += a * We, ce += a * ke, ae += a * Ge, oe += a * Ye, re += a * He, le += a * ze, ge += a * Ae, ie += a * Je, me += a * Qe, a = N[5], _e += a * Me, Fe += a * Pe, Ne += a * $e, ye += a * je, pe += a * qe, fe += a * Le, ue += a * Ve, ce += a * We, ae += a * ke, oe += a * Ge, re += a * Ye, le += a * He, ge += a * ze, ie += a * Ae, me += a * Je, we += a * Qe, a = N[6], Fe += a * Me, Ne += a * Pe, ye += a * $e, pe += a * je, fe += a * qe, ue += a * Le, ce += a * Ve, ae += a * We, oe += a * ke, re += a * Ge, le += a * Ye, ge += a * He, ie += a * ze, me += a * Ae, we += a * Je, Se += a * Qe, a = N[7], Ne += a * Me, ye += a * Pe, pe += a * $e, fe += a * je, ue += a * qe, ce += a * Le, ae += a * Ve, oe += a * We, re += a * ke, le += a * Ge, ge += a * Ye, ie += a * He, me += a * ze, we += a * Ae, Se += a * Je, De += a * Qe, a = N[8], ye += a * Me, pe += a * Pe, fe += a * $e, ue += a * je, ce += a * qe, ae += a * Le, oe += a * Ve, re += a * We, le += a * ke, ge += a * Ge, ie += a * Ye, me += a * He, we += a * ze, Se += a * Ae, De += a * Je, Ee += a * Qe, a = N[9], pe += a * Me, fe += a * Pe, ue += a * $e, ce += a * je, ae += a * qe, oe += a * Le, re += a * Ve, le += a * We, ge += a * ke, ie += a * Ge, me += a * Ye, we += a * He, Se += a * ze, De += a * Ae, Ee += a * Je, Ct += a * Qe, a = N[10], fe += a * Me, ue += a * Pe, ce += a * $e, ae += a * je, oe += a * qe, re += a * Le, le += a * Ve, ge += a * We, ie += a * ke, me += a * Ge, we += a * Ye, Se += a * He, De += a * ze, Ee += a * Ae, Ct += a * Je, Ft += a * Qe, a = N[11], ue += a * Me, ce += a * Pe, ae += a * $e, oe += a * je, re += a * qe, le += a * Le, ge += a * Ve, ie += a * We, me += a * ke, we += a * Ge, Se += a * Ye, De += a * He, Ee += a * ze, Ct += a * Ae, Ft += a * Je, Yt += a * Qe, a = N[12], ce += a * Me, ae += a * Pe, oe += a * $e, re += a * je, le += a * qe, ge += a * Le, ie += a * Ve, me += a * We, we += a * ke, Se += a * Ge, De += a * Ye, Ee += a * He, Ct += a * ze, Ft += a * Ae, Yt += a * Je, wt += a * Qe, a = N[13], ae += a * Me, oe += a * Pe, re += a * $e, le += a * je, ge += a * qe, ie += a * Le, me += a * Ve, we += a * We, Se += a * ke, De += a * Ge, Ee += a * Ye, Ct += a * He, Ft += a * ze, Yt += a * Ae, wt += a * Je, nr += a * Qe, a = N[14], oe += a * Me, re += a * Pe, le += a * $e, ge += a * je, ie += a * qe, me += a * Le, we += a * Ve, Se += a * We, De += a * ke, Ee += a * Ge, Ct += a * Ye, Ft += a * He, Yt += a * ze, wt += a * Ae, nr += a * Je, Fr += a * Qe, a = N[15], re += a * Me, le += a * Pe, ge += a * $e, ie += a * je, me += a * qe, we += a * Le, Se += a * Ve, De += a * We, Ee += a * ke, Ct += a * Ge, Ft += a * Ye, Yt += a * He, wt += a * ze, nr += a * Ae, Fr += a * Je, gi += a * Qe, W += 38 * le, Y += 38 * ge, he += 38 * ie, be += 38 * me, de += 38 * we, _e += 38 * Se, Fe += 38 * De, Ne += 38 * Ee, ye += 38 * Ct, pe += 38 * Ft, fe += 38 * Yt, ue += 38 * wt, ce += 38 * nr, ae += 38 * Fr, oe += 38 * gi, E = 1, a = W + E + 65535, E = Math.floor(a / 65536), W = a - E * 65536, a = Y + E + 65535, E = Math.floor(a / 65536), Y = a - E * 65536, a = he + E + 65535, E = Math.floor(a / 65536), he = a - E * 65536, a = be + E + 65535, E = Math.floor(a / 65536), be = a - E * 65536, a = de + E + 65535, E = Math.floor(a / 65536), de = a - E * 65536, a = _e + E + 65535, E = Math.floor(a / 65536), _e = a - E * 65536, a = Fe + E + 65535, E = Math.floor(a / 65536), Fe = a - E * 65536, a = Ne + E + 65535, E = Math.floor(a / 65536), Ne = a - E * 65536, a = ye + E + 65535, E = Math.floor(a / 65536), ye = a - E * 65536, a = pe + E + 65535, E = Math.floor(a / 65536), pe = a - E * 65536, a = fe + E + 65535, E = Math.floor(a / 65536), fe = a - E * 65536, a = ue + E + 65535, E = Math.floor(a / 65536), ue = a - E * 65536, a = ce + E + 65535, E = Math.floor(a / 65536), ce = a - E * 65536, a = ae + E + 65535, E = Math.floor(a / 65536), ae = a - E * 65536, a = oe + E + 65535, E = Math.floor(a / 65536), oe = a - E * 65536, a = re + E + 65535, E = Math.floor(a / 65536), re = a - E * 65536, W += E - 1 + 37 * (E - 1), E = 1, a = W + E + 65535, E = Math.floor(a / 65536), W = a - E * 65536, a = Y + E + 65535, E = Math.floor(a / 65536), Y = a - E * 65536, a = he + E + 65535, E = Math.floor(a / 65536), he = a - E * 65536, a = be + E + 65535, E = Math.floor(a / 65536), be = a - E * 65536, a = de + E + 65535, E = Math.floor(a / 65536), de = a - E * 65536, a = _e + E + 65535, E = Math.floor(a / 65536), _e = a - E * 65536, a = Fe + E + 65535, E = Math.floor(a / 65536), Fe = a - E * 65536, a = Ne + E + 65535, E = Math.floor(a / 65536), Ne = a - E * 65536, a = ye + E + 65535, E = Math.floor(a / 65536), ye = a - E * 65536, a = pe + E + 65535, E = Math.floor(a / 65536), pe = a - E * 65536, a = fe + E + 65535, E = Math.floor(a / 65536), fe = a - E * 65536, a = ue + E + 65535, E = Math.floor(a / 65536), ue = a - E * 65536, a = ce + E + 65535, E = Math.floor(a / 65536), ce = a - E * 65536, a = ae + E + 65535, E = Math.floor(a / 65536), ae = a - E * 65536, a = oe + E + 65535, E = Math.floor(a / 65536), oe = a - E * 65536, a = re + E + 65535, E = Math.floor(a / 65536), re = a - E * 65536, W += E - 1 + 37 * (E - 1), L[0] = W, L[1] = Y, L[2] = he, L[3] = be, L[4] = de, L[5] = _e, L[6] = Fe, L[7] = Ne, L[8] = ye, L[9] = pe, L[10] = fe, L[11] = ue, L[12] = ce, L[13] = ae, L[14] = oe, L[15] = re;
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
})(Jn);
const hf = "EdDSA", ff = "JWT", Ya = ".", Ja = "base64url", df = "utf8", pf = "utf8", gf = ":", yf = "did", bf = "key", po = "base58btc", mf = "z", vf = "K36", wf = 32;
function Qn(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Qa(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Qn(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ln(t, e) {
  e || (e = t.reduce((n, s) => n + s.length, 0));
  const r = Qa(e);
  let i = 0;
  for (const n of t)
    r.set(n, i), i += n.length;
  return Qn(r);
}
function _f(t, e) {
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
var Ef = _f, Sf = Ef;
const Df = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, If = (t) => new TextEncoder().encode(t), Of = (t) => new TextDecoder().decode(t);
class xf {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Af {
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
    return Xa(this, e);
  }
}
class Cf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Xa(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Xa = (t, e) => new Cf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Tf {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new xf(e, r, i), this.decoder = new Af(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Vi = ({ name: t, prefix: e, encode: r, decode: i }) => new Tf(t, e, r, i), ai = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = Sf(r, e);
  return Vi({
    prefix: t,
    name: e,
    encode: i,
    decode: (s) => Df(n(s))
  });
}, Rf = (t, e, r, i) => {
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
}, Nf = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, c = 0;
  for (let l = 0; l < t.length; ++l)
    for (c = c << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & c >> u];
  if (u && (s += e[n & c << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, it = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Vi({
  prefix: e,
  name: t,
  encode(n) {
    return Nf(n, i, r);
  },
  decode(n) {
    return Rf(n, i, r, t);
  }
}), Pf = Vi({
  prefix: "\0",
  name: "identity",
  encode: (t) => Of(t),
  decode: (t) => If(t)
}), Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Pf
}, Symbol.toStringTag, { value: "Module" })), Uf = it({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Uf
}, Symbol.toStringTag, { value: "Module" })), Mf = it({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Mf
}, Symbol.toStringTag, { value: "Module" })), jf = ai({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: jf
}, Symbol.toStringTag, { value: "Module" })), zf = it({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Bf = it({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: zf,
  base16upper: Bf
}, Symbol.toStringTag, { value: "Module" })), Hf = it({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Vf = it({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Wf = it({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), kf = it({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Gf = it({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Yf = it({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Jf = it({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Qf = it({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Xf = it({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Hf,
  base32hex: Gf,
  base32hexpad: Jf,
  base32hexpadupper: Qf,
  base32hexupper: Yf,
  base32pad: Wf,
  base32padupper: kf,
  base32upper: Vf,
  base32z: Xf
}, Symbol.toStringTag, { value: "Module" })), ed = ai({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), td = ai({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: ed,
  base36upper: td
}, Symbol.toStringTag, { value: "Module" })), id = ai({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), nd = ai({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: id,
  base58flickr: nd
}, Symbol.toStringTag, { value: "Module" })), od = it({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ad = it({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), cd = it({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), ud = it({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: od,
  base64pad: ad,
  base64url: cd,
  base64urlpad: ud
}, Symbol.toStringTag, { value: "Module" })), Za = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), hd = Za.reduce((t, e, r) => (t[r] = e, t), []), fd = Za.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function dd(t) {
  return t.reduce((e, r) => (e += hd[r], e), "");
}
function pd(t) {
  const e = [];
  for (const r of t) {
    const i = fd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const gd = Vi({
  prefix: "🚀",
  name: "base256emoji",
  encode: dd,
  decode: pd
}), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: gd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const go = {
  ...Lf,
  ...Ff,
  ...$f,
  ...qf,
  ...Kf,
  ...Zf,
  ...rd,
  ...sd,
  ...ld,
  ...yd
};
function ec(t, e, r, i) {
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
const yo = ec("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), fn = ec("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Qa(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), tc = {
  utf8: yo,
  "utf-8": yo,
  hex: go.base16,
  latin1: fn,
  ascii: fn,
  binary: fn,
  ...go
};
function yt(t, e = "utf8") {
  const r = tc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function vt(t, e = "utf8") {
  const r = tc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Qn(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Li(t) {
  return yt(vt(Yn(t), df), Ja);
}
function rc(t) {
  const e = vt(vf, po), r = mf + yt(Ln([e, t]), po);
  return [yf, bf, r].join(gf);
}
function bd(t) {
  return yt(t, Ja);
}
function md(t) {
  return vt([Li(t.header), Li(t.payload)].join(Ya), pf);
}
function vd(t) {
  return [
    Li(t.header),
    Li(t.payload),
    bd(t.signature)
  ].join(Ya);
}
function bo(t = Pr.randomBytes(wf)) {
  return Jn.generateKeyPairFromSeed(t);
}
async function wd(t, e, r, i, n = X.fromMiliseconds(Date.now())) {
  const s = { alg: hf, typ: ff }, u = rc(i.publicKey), c = n + r, l = { iss: u, sub: t, aud: e, iat: n, exp: c }, h = md({ header: s, payload: l }), p = Jn.sign(i.secretKey, h);
  return vd({ header: s, payload: l, signature: p });
}
var Xn = {}, Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
var at = ne, Un = Dt, _d = 20;
function Ed(t, e, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], p = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], b = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], w = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], _ = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], x = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], m = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], S = i, y = n, v = s, f = u, o = c, d = l, T = h, R = p, U = b, B = w, k = _, O = D, P = I, V = x, z = F, $ = m, q = 0; q < _d; q += 2)
    S = S + o | 0, P ^= S, P = P >>> 32 - 16 | P << 16, U = U + P | 0, o ^= U, o = o >>> 32 - 12 | o << 12, y = y + d | 0, V ^= y, V = V >>> 32 - 16 | V << 16, B = B + V | 0, d ^= B, d = d >>> 32 - 12 | d << 12, v = v + T | 0, z ^= v, z = z >>> 32 - 16 | z << 16, k = k + z | 0, T ^= k, T = T >>> 32 - 12 | T << 12, f = f + R | 0, $ ^= f, $ = $ >>> 32 - 16 | $ << 16, O = O + $ | 0, R ^= O, R = R >>> 32 - 12 | R << 12, v = v + T | 0, z ^= v, z = z >>> 32 - 8 | z << 8, k = k + z | 0, T ^= k, T = T >>> 32 - 7 | T << 7, f = f + R | 0, $ ^= f, $ = $ >>> 32 - 8 | $ << 8, O = O + $ | 0, R ^= O, R = R >>> 32 - 7 | R << 7, y = y + d | 0, V ^= y, V = V >>> 32 - 8 | V << 8, B = B + V | 0, d ^= B, d = d >>> 32 - 7 | d << 7, S = S + o | 0, P ^= S, P = P >>> 32 - 8 | P << 8, U = U + P | 0, o ^= U, o = o >>> 32 - 7 | o << 7, S = S + d | 0, $ ^= S, $ = $ >>> 32 - 16 | $ << 16, k = k + $ | 0, d ^= k, d = d >>> 32 - 12 | d << 12, y = y + T | 0, P ^= y, P = P >>> 32 - 16 | P << 16, O = O + P | 0, T ^= O, T = T >>> 32 - 12 | T << 12, v = v + R | 0, V ^= v, V = V >>> 32 - 16 | V << 16, U = U + V | 0, R ^= U, R = R >>> 32 - 12 | R << 12, f = f + o | 0, z ^= f, z = z >>> 32 - 16 | z << 16, B = B + z | 0, o ^= B, o = o >>> 32 - 12 | o << 12, v = v + R | 0, V ^= v, V = V >>> 32 - 8 | V << 8, U = U + V | 0, R ^= U, R = R >>> 32 - 7 | R << 7, f = f + o | 0, z ^= f, z = z >>> 32 - 8 | z << 8, B = B + z | 0, o ^= B, o = o >>> 32 - 7 | o << 7, y = y + T | 0, P ^= y, P = P >>> 32 - 8 | P << 8, O = O + P | 0, T ^= O, T = T >>> 32 - 7 | T << 7, S = S + d | 0, $ ^= S, $ = $ >>> 32 - 8 | $ << 8, k = k + $ | 0, d ^= k, d = d >>> 32 - 7 | d << 7;
  at.writeUint32LE(S + i | 0, t, 0), at.writeUint32LE(y + n | 0, t, 4), at.writeUint32LE(v + s | 0, t, 8), at.writeUint32LE(f + u | 0, t, 12), at.writeUint32LE(o + c | 0, t, 16), at.writeUint32LE(d + l | 0, t, 20), at.writeUint32LE(T + h | 0, t, 24), at.writeUint32LE(R + p | 0, t, 28), at.writeUint32LE(U + b | 0, t, 32), at.writeUint32LE(B + w | 0, t, 36), at.writeUint32LE(k + _ | 0, t, 40), at.writeUint32LE(O + D | 0, t, 44), at.writeUint32LE(P + I | 0, t, 48), at.writeUint32LE(V + x | 0, t, 52), at.writeUint32LE(z + F | 0, t, 56), at.writeUint32LE($ + m | 0, t, 60);
}
function ic(t, e, r, i, n) {
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
    Ed(c, s, t);
    for (var h = l; h < l + 64 && h < r.length; h++)
      i[h] = r[h] ^ c[h - l];
    Dd(s, 0, u);
  }
  return Un.wipe(c), n === 0 && Un.wipe(s), i;
}
Wi.streamXOR = ic;
function Sd(t, e, r, i) {
  return i === void 0 && (i = 0), Un.wipe(r), ic(t, e, r, r, i);
}
Wi.stream = Sd;
function Dd(t, e, r) {
  for (var i = 1; r--; )
    i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var nc = {}, ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
function Id(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
ir.select = Id;
function Od(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
ir.lessOrEqual = Od;
function sc(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, i = 0; i < t.length; i++)
    r |= t[i] ^ e[i];
  return 1 & r - 1 >>> 8;
}
ir.compare = sc;
function xd(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : sc(t, e) !== 0;
}
ir.equal = xd;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ir, r = Dt;
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
})(nc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Wi, r = nc, i = Dt, n = ne, s = ir;
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
})(Xn);
var oc = {}, ci = {}, Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
function Ad(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Zn.isSerializableHash = Ad;
Object.defineProperty(ci, "__esModule", { value: !0 });
var jt = Zn, Cd = ir, Td = Dt, ac = (
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
      this._outer.update(i), jt.isSerializableHash(this._inner) && jt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Td.wipe(i);
    }
    return t.prototype.reset = function() {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      jt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), jt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
ci.HMAC = ac;
function Rd(t, e, r) {
  var i = new ac(t, e);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
ci.hmac = Rd;
ci.equal = Cd.equal;
Object.defineProperty(oc, "__esModule", { value: !0 });
var mo = ci, vo = Dt, Nd = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
      var s = mo.hmac(this._hash, i, r);
      this._hmac = new mo.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), vo.wipe(this._buffer), vo.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Pd = oc.HKDF = Nd, ki = {};
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
})(ki);
var es = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Pr, r = Dt;
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
    let o, d, T = 0, R = 0, U = 0, B = 0, k = 0, O = 0, P = 0, V = 0, z = 0, $ = 0, q = 0, M = 0, K = 0, te = 0, H = 0, Z = 0, J = 0, ee = 0, L = 0, N = 0, A = 0, a = 0, E = 0, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Fe = 0, Ne = 0, ye = f[0], pe = f[1], fe = f[2], ue = f[3], ce = f[4], ae = f[5], oe = f[6], re = f[7], le = f[8], ge = f[9], ie = f[10], me = f[11], we = f[12], Se = f[13], De = f[14], Ee = f[15];
    o = v[0], T += o * ye, R += o * pe, U += o * fe, B += o * ue, k += o * ce, O += o * ae, P += o * oe, V += o * re, z += o * le, $ += o * ge, q += o * ie, M += o * me, K += o * we, te += o * Se, H += o * De, Z += o * Ee, o = v[1], R += o * ye, U += o * pe, B += o * fe, k += o * ue, O += o * ce, P += o * ae, V += o * oe, z += o * re, $ += o * le, q += o * ge, M += o * ie, K += o * me, te += o * we, H += o * Se, Z += o * De, J += o * Ee, o = v[2], U += o * ye, B += o * pe, k += o * fe, O += o * ue, P += o * ce, V += o * ae, z += o * oe, $ += o * re, q += o * le, M += o * ge, K += o * ie, te += o * me, H += o * we, Z += o * Se, J += o * De, ee += o * Ee, o = v[3], B += o * ye, k += o * pe, O += o * fe, P += o * ue, V += o * ce, z += o * ae, $ += o * oe, q += o * re, M += o * le, K += o * ge, te += o * ie, H += o * me, Z += o * we, J += o * Se, ee += o * De, L += o * Ee, o = v[4], k += o * ye, O += o * pe, P += o * fe, V += o * ue, z += o * ce, $ += o * ae, q += o * oe, M += o * re, K += o * le, te += o * ge, H += o * ie, Z += o * me, J += o * we, ee += o * Se, L += o * De, N += o * Ee, o = v[5], O += o * ye, P += o * pe, V += o * fe, z += o * ue, $ += o * ce, q += o * ae, M += o * oe, K += o * re, te += o * le, H += o * ge, Z += o * ie, J += o * me, ee += o * we, L += o * Se, N += o * De, A += o * Ee, o = v[6], P += o * ye, V += o * pe, z += o * fe, $ += o * ue, q += o * ce, M += o * ae, K += o * oe, te += o * re, H += o * le, Z += o * ge, J += o * ie, ee += o * me, L += o * we, N += o * Se, A += o * De, a += o * Ee, o = v[7], V += o * ye, z += o * pe, $ += o * fe, q += o * ue, M += o * ce, K += o * ae, te += o * oe, H += o * re, Z += o * le, J += o * ge, ee += o * ie, L += o * me, N += o * we, A += o * Se, a += o * De, E += o * Ee, o = v[8], z += o * ye, $ += o * pe, q += o * fe, M += o * ue, K += o * ce, te += o * ae, H += o * oe, Z += o * re, J += o * le, ee += o * ge, L += o * ie, N += o * me, A += o * we, a += o * Se, E += o * De, W += o * Ee, o = v[9], $ += o * ye, q += o * pe, M += o * fe, K += o * ue, te += o * ce, H += o * ae, Z += o * oe, J += o * re, ee += o * le, L += o * ge, N += o * ie, A += o * me, a += o * we, E += o * Se, W += o * De, Y += o * Ee, o = v[10], q += o * ye, M += o * pe, K += o * fe, te += o * ue, H += o * ce, Z += o * ae, J += o * oe, ee += o * re, L += o * le, N += o * ge, A += o * ie, a += o * me, E += o * we, W += o * Se, Y += o * De, he += o * Ee, o = v[11], M += o * ye, K += o * pe, te += o * fe, H += o * ue, Z += o * ce, J += o * ae, ee += o * oe, L += o * re, N += o * le, A += o * ge, a += o * ie, E += o * me, W += o * we, Y += o * Se, he += o * De, be += o * Ee, o = v[12], K += o * ye, te += o * pe, H += o * fe, Z += o * ue, J += o * ce, ee += o * ae, L += o * oe, N += o * re, A += o * le, a += o * ge, E += o * ie, W += o * me, Y += o * we, he += o * Se, be += o * De, de += o * Ee, o = v[13], te += o * ye, H += o * pe, Z += o * fe, J += o * ue, ee += o * ce, L += o * ae, N += o * oe, A += o * re, a += o * le, E += o * ge, W += o * ie, Y += o * me, he += o * we, be += o * Se, de += o * De, _e += o * Ee, o = v[14], H += o * ye, Z += o * pe, J += o * fe, ee += o * ue, L += o * ce, N += o * ae, A += o * oe, a += o * re, E += o * le, W += o * ge, Y += o * ie, he += o * me, be += o * we, de += o * Se, _e += o * De, Fe += o * Ee, o = v[15], Z += o * ye, J += o * pe, ee += o * fe, L += o * ue, N += o * ce, A += o * ae, a += o * oe, E += o * re, W += o * le, Y += o * ge, he += o * ie, be += o * me, de += o * we, _e += o * Se, Fe += o * De, Ne += o * Ee, T += 38 * J, R += 38 * ee, U += 38 * L, B += 38 * N, k += 38 * A, O += 38 * a, P += 38 * E, V += 38 * W, z += 38 * Y, $ += 38 * he, q += 38 * be, M += 38 * de, K += 38 * _e, te += 38 * Fe, H += 38 * Ne, d = 1, o = T + d + 65535, d = Math.floor(o / 65536), T = o - d * 65536, o = R + d + 65535, d = Math.floor(o / 65536), R = o - d * 65536, o = U + d + 65535, d = Math.floor(o / 65536), U = o - d * 65536, o = B + d + 65535, d = Math.floor(o / 65536), B = o - d * 65536, o = k + d + 65535, d = Math.floor(o / 65536), k = o - d * 65536, o = O + d + 65535, d = Math.floor(o / 65536), O = o - d * 65536, o = P + d + 65535, d = Math.floor(o / 65536), P = o - d * 65536, o = V + d + 65535, d = Math.floor(o / 65536), V = o - d * 65536, o = z + d + 65535, d = Math.floor(o / 65536), z = o - d * 65536, o = $ + d + 65535, d = Math.floor(o / 65536), $ = o - d * 65536, o = q + d + 65535, d = Math.floor(o / 65536), q = o - d * 65536, o = M + d + 65535, d = Math.floor(o / 65536), M = o - d * 65536, o = K + d + 65535, d = Math.floor(o / 65536), K = o - d * 65536, o = te + d + 65535, d = Math.floor(o / 65536), te = o - d * 65536, o = H + d + 65535, d = Math.floor(o / 65536), H = o - d * 65536, o = Z + d + 65535, d = Math.floor(o / 65536), Z = o - d * 65536, T += d - 1 + 37 * (d - 1), d = 1, o = T + d + 65535, d = Math.floor(o / 65536), T = o - d * 65536, o = R + d + 65535, d = Math.floor(o / 65536), R = o - d * 65536, o = U + d + 65535, d = Math.floor(o / 65536), U = o - d * 65536, o = B + d + 65535, d = Math.floor(o / 65536), B = o - d * 65536, o = k + d + 65535, d = Math.floor(o / 65536), k = o - d * 65536, o = O + d + 65535, d = Math.floor(o / 65536), O = o - d * 65536, o = P + d + 65535, d = Math.floor(o / 65536), P = o - d * 65536, o = V + d + 65535, d = Math.floor(o / 65536), V = o - d * 65536, o = z + d + 65535, d = Math.floor(o / 65536), z = o - d * 65536, o = $ + d + 65535, d = Math.floor(o / 65536), $ = o - d * 65536, o = q + d + 65535, d = Math.floor(o / 65536), q = o - d * 65536, o = M + d + 65535, d = Math.floor(o / 65536), M = o - d * 65536, o = K + d + 65535, d = Math.floor(o / 65536), K = o - d * 65536, o = te + d + 65535, d = Math.floor(o / 65536), te = o - d * 65536, o = H + d + 65535, d = Math.floor(o / 65536), H = o - d * 65536, o = Z + d + 65535, d = Math.floor(o / 65536), Z = o - d * 65536, T += d - 1 + 37 * (d - 1), y[0] = T, y[1] = R, y[2] = U, y[3] = B, y[4] = k, y[5] = O, y[6] = P, y[7] = V, y[8] = z, y[9] = $, y[10] = q, y[11] = M, y[12] = K, y[13] = te, y[14] = H, y[15] = Z;
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
})(es);
var wo = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = e.length, s; i < n; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Ld = (
  /** @class */
  function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), Ud = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Fd = (
  /** @class */
  function() {
    function t(e, r, i, n) {
      this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return t;
  }()
), Md = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), $d = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), jd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, qd = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, _o = 3, zd = [
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
  ["searchbot", jd]
], Eo = [
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
function Bd(t) {
  return t ? So(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new $d() : typeof navigator < "u" ? So(navigator.userAgent) : Vd();
}
function Kd(t) {
  return t !== "" && zd.reduce(function(e, r) {
    var i = r[0], n = r[1];
    if (e)
      return e;
    var s = n.exec(t);
    return !!s && [i, s];
  }, !1);
}
function So(t) {
  var e = Kd(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new Md();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < _o && (n = wo(wo([], n, !0), Wd(_o - n.length), !0)) : n = [];
  var s = n.join("."), u = Hd(t), c = qd.exec(t);
  return c && c[1] ? new Fd(r, s, u, c[1]) : new Ld(r, s, u);
}
function Hd(t) {
  for (var e = 0, r = Eo.length; e < r; e++) {
    var i = Eo[e], n = i[0], s = i[1], u = s.exec(t);
    if (u)
      return n;
  }
  return null;
}
function Vd() {
  var t = typeof process < "u" && process.version;
  return t ? new Ud(process.version.slice(1)) : null;
}
function Wd(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = uc = Oe.getLocation = Oe.getLocationOrThrow = ts = Oe.getNavigator = Oe.getNavigatorOrThrow = cc = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function wr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Oe.getFromWindow = wr;
function Lr(t) {
  const e = wr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = Lr;
function kd() {
  return Lr("document");
}
Oe.getDocumentOrThrow = kd;
function Gd() {
  return wr("document");
}
var cc = Oe.getDocument = Gd;
function Yd() {
  return Lr("navigator");
}
Oe.getNavigatorOrThrow = Yd;
function Jd() {
  return wr("navigator");
}
var ts = Oe.getNavigator = Jd;
function Qd() {
  return Lr("location");
}
Oe.getLocationOrThrow = Qd;
function Xd() {
  return wr("location");
}
var uc = Oe.getLocation = Xd;
function Zd() {
  return Lr("crypto");
}
Oe.getCryptoOrThrow = Zd;
function ep() {
  return wr("crypto");
}
Oe.getCrypto = ep;
function tp() {
  return Lr("localStorage");
}
Oe.getLocalStorageOrThrow = tp;
function rp() {
  return wr("localStorage");
}
Oe.getLocalStorage = rp;
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
var lc = rs.getWindowMetadata = void 0;
const Do = Oe;
function ip() {
  let t, e;
  try {
    t = Do.getDocumentOrThrow(), e = Do.getLocationOrThrow();
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
lc = rs.getWindowMetadata = ip;
var ri = {}, np = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), hc = "%[a-f0-9]{2}", Io = new RegExp("(" + hc + ")|([^%]+?)", "gi"), Oo = new RegExp("(" + hc + ")+", "gi");
function Fn(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), i = t.slice(e);
  return Array.prototype.concat.call([], Fn(r), Fn(i));
}
function sp(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Io) || [], r = 1; r < e.length; r++)
      t = Fn(e, r).join(""), e = t.match(Io) || [];
    return t;
  }
}
function op(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Oo.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = sp(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = Oo.exec(t);
  }
  e["%C2"] = "�";
  for (var n = Object.keys(e), s = 0; s < n.length; s++) {
    var u = n[s];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var ap = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return op(t);
  }
}, cp = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, up = function(t, e) {
  for (var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0; s < i.length; s++) {
    var u = i[s], c = t[u];
    (n ? e.indexOf(u) !== -1 : e(u, c, t)) && (r[u] = c);
  }
  return r;
};
(function(t) {
  const e = np, r = ap, i = cp, n = up, s = (m) => m == null, u = Symbol("encodeFragmentIdentifier");
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
})(ri);
const lp = {
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
function fc(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const dc = "base10", gt = "base16", Mn = "base64pad", is = "utf8", pc = 0, _r = 1, hp = 0, xo = 1, $n = 12, ns = 32;
function fp() {
  const t = es.generateKeyPair();
  return { privateKey: yt(t.secretKey, gt), publicKey: yt(t.publicKey, gt) };
}
function jn() {
  const t = Pr.randomBytes(ns);
  return yt(t, gt);
}
function dp(t, e) {
  const r = es.sharedKey(vt(t, gt), vt(e, gt)), i = new Pd(ki.SHA256, r).expand(ns);
  return yt(i, gt);
}
function pp(t) {
  const e = ki.hash(vt(t, gt));
  return yt(e, gt);
}
function Cr(t) {
  const e = ki.hash(vt(t, is));
  return yt(e, gt);
}
function gp(t) {
  return vt(`${t}`, dc);
}
function ui(t) {
  return Number(yt(t, dc));
}
function yp(t) {
  const e = gp(typeof t.type < "u" ? t.type : pc);
  if (ui(e) === _r && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? vt(t.senderPublicKey, gt) : void 0, i = typeof t.iv < "u" ? vt(t.iv, gt) : Pr.randomBytes($n), n = new Xn.ChaCha20Poly1305(vt(t.symKey, gt)).seal(i, vt(t.message, is));
  return mp({ type: e, sealed: n, iv: i, senderPublicKey: r });
}
function bp(t) {
  const e = new Xn.ChaCha20Poly1305(vt(t.symKey, gt)), { sealed: r, iv: i } = Ui(t.encoded), n = e.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return yt(n, is);
}
function mp(t) {
  if (ui(t.type) === _r) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return yt(Ln([t.type, t.senderPublicKey, t.iv, t.sealed]), Mn);
  }
  return yt(Ln([t.type, t.iv, t.sealed]), Mn);
}
function Ui(t) {
  const e = vt(t, Mn), r = e.slice(hp, xo), i = xo;
  if (ui(r) === _r) {
    const c = i + ns, l = c + $n, h = e.slice(i, c), p = e.slice(c, l), b = e.slice(l);
    return { type: r, sealed: b, iv: p, senderPublicKey: h };
  }
  const n = i + $n, s = e.slice(i, n), u = e.slice(n);
  return { type: r, sealed: u, iv: s };
}
function vp(t, e) {
  const r = Ui(t);
  return gc({ type: ui(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? yt(r.senderPublicKey, gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function gc(t) {
  const e = (t == null ? void 0 : t.type) || pc;
  if (e === _r) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Ao(t) {
  return t.type === _r && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var wp = Object.defineProperty, Co = Object.getOwnPropertySymbols, _p = Object.prototype.hasOwnProperty, Ep = Object.prototype.propertyIsEnumerable, To = (t, e, r) => e in t ? wp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ro = (t, e) => {
  for (var r in e || (e = {}))
    _p.call(e, r) && To(t, r, e[r]);
  if (Co)
    for (var r of Co(e))
      Ep.call(e, r) && To(t, r, e[r]);
  return t;
};
const Sp = "ReactNative", St = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Dp = "js";
function ss() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Gi() {
  return !cc() && !!ts() && navigator.product === Sp;
}
function li() {
  return !ss() && !!ts();
}
function hi() {
  return Gi() ? St.reactNative : ss() ? St.node : li() ? St.browser : St.unknown;
}
function Ip(t, e) {
  let r = ri.parse(t);
  return r = Ro(Ro({}, r), e), t = ri.stringify(r), t;
}
function Op() {
  return lc() || { name: "", description: "", url: "", icons: [""] };
}
function xp() {
  if (hi() === St.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = Bd();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Ap() {
  var t;
  const e = hi();
  return e === St.browser ? [e, ((t = uc()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Cp(t, e, r) {
  const i = xp(), n = Ap();
  return [[t, e].join("-"), [Dp, r].join("-"), i, n].join("/");
}
function Tp({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const c = r.split("?"), l = Cp(t, e, i), h = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, p = Ip(c[1] || "", h);
  return c[0] + "?" + p;
}
function yr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function yc(t) {
  return Object.fromEntries(t.entries());
}
function bc(t) {
  return new Map(Object.entries(t));
}
function Or(t = X.FIVE_MINUTES, e) {
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
function ii(t, e, r) {
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
function mc(t, e) {
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
function Rp(t) {
  return mc("topic", t);
}
function Np(t) {
  return mc("id", t);
}
function vc(t) {
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
function er(t) {
  return Date.now() >= X.toMiliseconds(t);
}
function Be(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Pp({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${t}&sessionTopic=${e}`, u = hi();
    u === St.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === St.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const Lp = "irn";
function qn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Lp };
}
function Ci(t) {
  const e = lp[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Up = Object.defineProperty, No = Object.getOwnPropertySymbols, Fp = Object.prototype.hasOwnProperty, Mp = Object.prototype.propertyIsEnumerable, Po = (t, e, r) => e in t ? Up(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, $p = (t, e) => {
  for (var r in e || (e = {}))
    Fp.call(e, r) && Po(t, r, e[r]);
  if (No)
    for (var r of No(e))
      Mp.call(e, r) && Po(t, r, e[r]);
  return t;
};
function jp(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = t[n];
      r[s] = u;
    }
  }), r;
}
function qp(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), n = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", u = ri.parse(s);
  return { protocol: i, topic: zp(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: jp(u) };
}
function zp(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Bp(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((n) => {
    const s = r + e + n;
    t[n] && (i[s] = t[n]);
  }), i;
}
function Kp(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + ri.stringify($p({ symKey: t.symKey }, Bp(t.relay)));
}
function Ur(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, n] = r.split(":");
    e.push(`${i}:${n}`);
  }), e;
}
function Hp(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Ur(r.accounts));
  }), e;
}
function Vp(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Ur(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function Wp(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    Ur(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function kp(t, e) {
  const r = Ti(t, e);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(t))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const Gp = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Yp = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(t, e) {
  const { message: r, code: i } = Yp[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function Ke(t, e) {
  const { message: r, code: i } = Gp[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function fi(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Zr(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function pt(t) {
  return typeof t > "u";
}
function tt(t, e) {
  return e && pt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function os(t, e) {
  return e && pt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Jp(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
  let s = !0;
  return yr(n, i) ? (i.forEach((u) => {
    const { accounts: c, methods: l, events: h } = t.namespaces[u], p = Ur(c), b = r[u];
    (!yr(fc(u, b), p) || !yr(b.methods, l) || !yr(b.events, h)) && (s = !1);
  }), s) : !1;
}
function Fi(t) {
  return tt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Qp(t) {
  if (tt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Fi(r);
    }
  }
  return !1;
}
function Xp(t) {
  if (tt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Zp(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function eg(t) {
  return t == null ? void 0 : t.topic;
}
function tg(t, e) {
  let r = null;
  return tt(t == null ? void 0 : t.publicKey, !1) || (r = G("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Lo(t) {
  let e = !0;
  return fi(t) ? t.length && (e = t.every((r) => tt(r, !1))) : e = !1, e;
}
function rg(t, e, r) {
  let i = null;
  return fi(e) && e.length ? e.forEach((n) => {
    i || Fi(n) || (i = Ke("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : Fi(t) || (i = Ke("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function ig(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([n, s]) => {
    if (i)
      return;
    const u = rg(n, fc(n, s), `${e} ${r}`);
    u && (i = u);
  }), i;
}
function ng(t, e) {
  let r = null;
  return fi(t) ? t.forEach((i) => {
    r || Qp(i) || (r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function sg(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = ng(i == null ? void 0 : i.accounts, `${e} namespace`);
    n && (r = n);
  }), r;
}
function og(t, e) {
  let r = null;
  return Lo(t == null ? void 0 : t.methods) ? Lo(t == null ? void 0 : t.events) || (r = Ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function wc(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r)
      return;
    const n = og(i, `${e}, namespace`);
    n && (r = n);
  }), r;
}
function ag(t, e, r) {
  let i = null;
  if (t && Zr(t)) {
    const n = wc(t, e);
    n && (i = n);
    const s = ig(t, e, r);
    s && (i = s);
  } else
    i = G("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function Ti(t, e) {
  let r = null;
  if (t && Zr(t)) {
    const i = wc(t, e);
    i && (r = i);
    const n = sg(t, e);
    n && (r = n);
  } else
    r = G("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function _c(t) {
  return tt(t.protocol, !0);
}
function cg(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && fi(t) && t.length && t.forEach((i) => {
    r = _c(i);
  }), r;
}
function ug(t) {
  return typeof t == "number";
}
function mt(t) {
  return typeof t < "u" && typeof t !== null;
}
function lg(t) {
  return !(!t || typeof t != "object" || !t.code || !os(t.code, !1) || !t.message || !tt(t.message, !1));
}
function hg(t) {
  return !(pt(t) || !tt(t.method, !1));
}
function fg(t) {
  return !(pt(t) || pt(t.result) && pt(t.error) || !os(t.id, !1) || !tt(t.jsonrpc, !1));
}
function dg(t) {
  return !(pt(t) || !tt(t.name, !1));
}
function Uo(t, e) {
  return !(!Fi(e) || !Hp(t).includes(e));
}
function pg(t, e, r) {
  return tt(r, !1) ? Vp(t, e).includes(r) : !1;
}
function gg(t, e, r) {
  return tt(r, !1) ? Wp(t, e).includes(r) : !1;
}
function Fo(t, e, r) {
  let i = null;
  const n = yg(t), s = bg(e), u = Object.keys(n), c = Object.keys(s), l = Mo(Object.keys(t)), h = Mo(Object.keys(e)), p = l.filter((b) => !h.includes(b));
  return p.length && (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), yr(u, c) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((b) => {
    if (!b.includes(":") || i)
      return;
    const w = Ur(e[b].accounts);
    w.includes(b) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${w.toString()}`));
  }), u.forEach((b) => {
    i || (yr(n[b].methods, s[b].methods) ? yr(n[b].events, s[b].events) || (i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${b}`)) : i = G("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${b}`));
  }), i;
}
function yg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((n) => {
      e[n] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Mo(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function bg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const i = Ur(t[r].accounts);
      i == null || i.forEach((n) => {
        e[n] = { accounts: t[r].accounts.filter((s) => s.includes(`${n}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function mg(t, e) {
  return os(t, !1) && t <= e.max && t >= e.min;
}
function $o() {
  const t = hi();
  return new Promise((e) => {
    switch (t) {
      case St.browser:
        e(vg());
        break;
      case St.reactNative:
        e(wg());
        break;
      case St.node:
        e(_g());
        break;
      default:
        e(!0);
    }
  });
}
function vg() {
  return li() && (navigator == null ? void 0 : navigator.onLine);
}
async function wg() {
  if (Gi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function _g() {
  return !0;
}
function Eg(t) {
  switch (hi()) {
    case St.browser:
      Sg(t);
      break;
    case St.reactNative:
      Dg(t);
      break;
  }
}
function Sg(t) {
  li() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Dg(t) {
  Gi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const dn = {};
let Ii = class {
  static get(e) {
    return dn[e];
  }
  static set(e, r) {
    dn[e] = r;
  }
  static delete(e) {
    delete dn[e];
  }
};
const Ig = "PARSE_ERROR", Og = "INVALID_REQUEST", xg = "METHOD_NOT_FOUND", Ag = "INVALID_PARAMS", Ec = "INTERNAL_ERROR", as = "SERVER_ERROR", Cg = [-32700, -32600, -32601, -32602, -32603], ei = {
  [Ig]: { code: -32700, message: "Parse error" },
  [Og]: { code: -32600, message: "Invalid Request" },
  [xg]: { code: -32601, message: "Method not found" },
  [Ag]: { code: -32602, message: "Invalid params" },
  [Ec]: { code: -32603, message: "Internal error" },
  [as]: { code: -32e3, message: "Server error" }
}, Sc = as;
function Tg(t) {
  return Cg.includes(t);
}
function jo(t) {
  return Object.keys(ei).includes(t) ? ei[t] : ei[Sc];
}
function Rg(t) {
  const e = Object.values(ei).find((r) => r.code === t);
  return e || ei[Sc];
}
function Ng(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Dc = {}, Ht = {}, qo;
function Pg() {
  if (qo)
    return Ht;
  qo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.isBrowserCryptoAvailable = Ht.getSubtleCrypto = Ht.getBrowerCrypto = void 0;
  function t() {
    return (Et == null ? void 0 : Et.crypto) || (Et == null ? void 0 : Et.msCrypto) || {};
  }
  Ht.getBrowerCrypto = t;
  function e() {
    const i = t();
    return i.subtle || i.webkitSubtle;
  }
  Ht.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Ht.isBrowserCryptoAvailable = r, Ht;
}
var Vt = {}, zo;
function Lg() {
  if (zo)
    return Vt;
  zo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.isBrowser = Vt.isNode = Vt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Vt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Vt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Vt.isBrowser = r, Vt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = At;
  e.__exportStar(Pg(), t), e.__exportStar(Lg(), t);
})(Dc);
function cs(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Ic(t = 6) {
  return BigInt(cs(t));
}
function ni(t, e, r) {
  return {
    id: r || cs(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function us(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function ls(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Ug(e, r)
  };
}
function Ug(t, e) {
  return typeof t > "u" ? jo(Ec) : (typeof t == "string" && (t = Object.assign(Object.assign({}, jo(as)), { message: t })), typeof e < "u" && (t.data = e), Tg(t.code) && (t = Rg(t.code)), t);
}
class Fg {
}
class Mg extends Fg {
  constructor() {
    super();
  }
}
class $g extends Mg {
  constructor(e) {
    super();
  }
}
const jg = "^wss?:";
function qg(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function zg(t, e) {
  const r = qg(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Bo(t) {
  return zg(t, jg);
}
function Bg(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Oc(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function hs(t) {
  return Oc(t) && "method" in t;
}
function Yi(t) {
  return Oc(t) && (Gt(t) || Nt(t));
}
function Gt(t) {
  return "result" in t;
}
function Nt(t) {
  return "error" in t;
}
class Kg extends $g {
  constructor(e) {
    super(e), this.events = new Ut.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(ni(e.method, e.params || [], e.id || Ic().toString()), r);
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
    this.events.emit("payload", e), Yi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const Hg = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Vg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ko = (t) => t.split("?")[0], Ho = 10, Wg = Hg();
class kg {
  constructor(e) {
    if (this.url = e, this.events = new Ut.EventEmitter(), this.registering = !1, !Bo(e))
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
      this.socket.send(Yn(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Bo(e))
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
      const n = Dc.isReactNative() ? void 0 : { rejectUnauthorized: !Bg(e) }, s = new Wg(e, [], n);
      Vg() ? s.onerror = (u) => {
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
    const r = typeof e.data == "string" ? za(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = ls(e, n);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Ng(e, Ko(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ho && this.events.setMaxListeners(Ho);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Ko(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Mi = { exports: {} };
Mi.exports;
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
      var Ue = g[j];
      C(Ue, j, g) && (se[xe++] = Ue);
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
  function Ne(g) {
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
  ), De = E ? N.Buffer : void 0, Ee = N.Symbol, Ct = N.Uint8Array, Ft = re.propertyIsEnumerable, Yt = ae.splice, wt = Ee ? Ee.toStringTag : void 0, nr = Object.getOwnPropertySymbols, Fr = De ? De.isBuffer : void 0, gi = ue(Object.keys, Object), Me = Er(N, "DataView"), Pe = Er(N, "Map"), $e = Er(N, "Promise"), je = Er(N, "Set"), qe = Er(N, "WeakMap"), Le = Er(Object, "create"), Ve = or(Me), We = or(Pe), ke = or($e), Ge = or(je), Ye = or(qe), He = Ee ? Ee.prototype : void 0, ze = He ? He.valueOf : void 0;
  function Ae(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function Je() {
    this.__data__ = Le ? Le(null) : {}, this.size = 0;
  }
  function Qe(g) {
    var C = this.has(g) && delete this.__data__[g];
    return this.size -= C ? 1 : 0, C;
  }
  function Gc(g) {
    var C = this.__data__;
    if (Le) {
      var j = C[g];
      return j === i ? void 0 : j;
    }
    return ie.call(C, g) ? C[g] : void 0;
  }
  function Yc(g) {
    var C = this.__data__;
    return Le ? C[g] !== void 0 : ie.call(C, g);
  }
  function Jc(g, C) {
    var j = this.__data__;
    return this.size += this.has(g) ? 0 : 1, j[g] = Le && C === void 0 ? i : C, this;
  }
  Ae.prototype.clear = Je, Ae.prototype.delete = Qe, Ae.prototype.get = Gc, Ae.prototype.has = Yc, Ae.prototype.set = Jc;
  function Bt(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function Qc() {
    this.__data__ = [], this.size = 0;
  }
  function Xc(g) {
    var C = this.__data__, j = bi(C, g);
    if (j < 0)
      return !1;
    var Q = C.length - 1;
    return j == Q ? C.pop() : Yt.call(C, j, 1), --this.size, !0;
  }
  function Zc(g) {
    var C = this.__data__, j = bi(C, g);
    return j < 0 ? void 0 : C[j][1];
  }
  function eu(g) {
    return bi(this.__data__, g) > -1;
  }
  function tu(g, C) {
    var j = this.__data__, Q = bi(j, g);
    return Q < 0 ? (++this.size, j.push([g, C])) : j[Q][1] = C, this;
  }
  Bt.prototype.clear = Qc, Bt.prototype.delete = Xc, Bt.prototype.get = Zc, Bt.prototype.has = eu, Bt.prototype.set = tu;
  function sr(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.clear(); ++C < j; ) {
      var Q = g[C];
      this.set(Q[0], Q[1]);
    }
  }
  function ru() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (Pe || Bt)(),
      string: new Ae()
    };
  }
  function iu(g) {
    var C = mi(this, g).delete(g);
    return this.size -= C ? 1 : 0, C;
  }
  function nu(g) {
    return mi(this, g).get(g);
  }
  function su(g) {
    return mi(this, g).has(g);
  }
  function ou(g, C) {
    var j = mi(this, g), Q = j.size;
    return j.set(g, C), this.size += j.size == Q ? 0 : 1, this;
  }
  sr.prototype.clear = ru, sr.prototype.delete = iu, sr.prototype.get = nu, sr.prototype.has = su, sr.prototype.set = ou;
  function yi(g) {
    var C = -1, j = g == null ? 0 : g.length;
    for (this.__data__ = new sr(); ++C < j; )
      this.add(g[C]);
  }
  function au(g) {
    return this.__data__.set(g, i), this;
  }
  function cu(g) {
    return this.__data__.has(g);
  }
  yi.prototype.add = yi.prototype.push = au, yi.prototype.has = cu;
  function Jt(g) {
    var C = this.__data__ = new Bt(g);
    this.size = C.size;
  }
  function uu() {
    this.__data__ = new Bt(), this.size = 0;
  }
  function lu(g) {
    var C = this.__data__, j = C.delete(g);
    return this.size = C.size, j;
  }
  function hu(g) {
    return this.__data__.get(g);
  }
  function fu(g) {
    return this.__data__.has(g);
  }
  function du(g, C) {
    var j = this.__data__;
    if (j instanceof Bt) {
      var Q = j.__data__;
      if (!Pe || Q.length < r - 1)
        return Q.push([g, C]), this.size = ++j.size, this;
      j = this.__data__ = new sr(Q);
    }
    return j.set(g, C), this.size = j.size, this;
  }
  Jt.prototype.clear = uu, Jt.prototype.delete = lu, Jt.prototype.get = hu, Jt.prototype.has = fu, Jt.prototype.set = du;
  function pu(g, C) {
    var j = vi(g), Q = !j && Cu(g), xe = !j && !Q && Zi(g), se = !j && !Q && !xe && Cs(g), Ue = j || Q || xe || se, Xe = Ue ? Fe(g.length, String) : [], rt = Xe.length;
    for (var Re in g)
      (C || ie.call(g, Re)) && !(Ue && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Re == "offset" || Re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      se && (Re == "buffer" || Re == "byteLength" || Re == "byteOffset") || // Skip index properties.
      Du(Re, rt))) && Xe.push(Re);
    return Xe;
  }
  function bi(g, C) {
    for (var j = g.length; j--; )
      if (Is(g[j][0], C))
        return j;
    return -1;
  }
  function gu(g, C, j) {
    var Q = C(g);
    return vi(g) ? Q : de(Q, j(g));
  }
  function Mr(g) {
    return g == null ? g === void 0 ? T : F : wt && wt in Object(g) ? Eu(g) : Au(g);
  }
  function _s(g) {
    return $r(g) && Mr(g) == c;
  }
  function Es(g, C, j, Q, xe) {
    return g === C ? !0 : g == null || C == null || !$r(g) && !$r(C) ? g !== g && C !== C : yu(g, C, j, Q, Es, xe);
  }
  function yu(g, C, j, Q, xe, se) {
    var Ue = vi(g), Xe = vi(C), rt = Ue ? l : Qt(g), Re = Xe ? l : Qt(C);
    rt = rt == c ? m : rt, Re = Re == c ? m : Re;
    var _t = rt == m, Tt = Re == m, st = rt == Re;
    if (st && Zi(g)) {
      if (!Zi(C))
        return !1;
      Ue = !0, _t = !1;
    }
    if (st && !_t)
      return se || (se = new Jt()), Ue || Cs(g) ? Ss(g, C, j, Q, xe, se) : wu(g, C, rt, j, Q, xe, se);
    if (!(j & n)) {
      var It = _t && ie.call(g, "__wrapped__"), Ot = Tt && ie.call(C, "__wrapped__");
      if (It || Ot) {
        var Xt = It ? g.value() : g, Kt = Ot ? C.value() : C;
        return se || (se = new Jt()), xe(Xt, Kt, j, Q, se);
      }
    }
    return st ? (se || (se = new Jt()), _u(g, C, j, Q, xe, se)) : !1;
  }
  function bu(g) {
    if (!As(g) || Ou(g))
      return !1;
    var C = Os(g) ? Se : H;
    return C.test(or(g));
  }
  function mu(g) {
    return $r(g) && xs(g.length) && !!J[Mr(g)];
  }
  function vu(g) {
    if (!xu(g))
      return gi(g);
    var C = [];
    for (var j in Object(g))
      ie.call(g, j) && j != "constructor" && C.push(j);
    return C;
  }
  function Ss(g, C, j, Q, xe, se) {
    var Ue = j & n, Xe = g.length, rt = C.length;
    if (Xe != rt && !(Ue && rt > Xe))
      return !1;
    var Re = se.get(g);
    if (Re && se.get(C))
      return Re == C;
    var _t = -1, Tt = !0, st = j & s ? new yi() : void 0;
    for (se.set(g, C), se.set(C, g); ++_t < Xe; ) {
      var It = g[_t], Ot = C[_t];
      if (Q)
        var Xt = Ue ? Q(Ot, It, _t, C, g, se) : Q(It, Ot, _t, g, C, se);
      if (Xt !== void 0) {
        if (Xt)
          continue;
        Tt = !1;
        break;
      }
      if (st) {
        if (!_e(C, function(Kt, ar) {
          if (!ye(st, ar) && (It === Kt || xe(It, Kt, j, Q, se)))
            return st.push(ar);
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
  function wu(g, C, j, Q, xe, se, Ue) {
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
        return Is(+g, +C);
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
        var Re = Ue.get(g);
        if (Re)
          return Re == C;
        Q |= s, Ue.set(g, C);
        var _t = Ss(Xe(g), Xe(C), Q, xe, se, Ue);
        return Ue.delete(g), _t;
      case d:
        if (ze)
          return ze.call(g) == ze.call(C);
    }
    return !1;
  }
  function _u(g, C, j, Q, xe, se) {
    var Ue = j & n, Xe = Ds(g), rt = Xe.length, Re = Ds(C), _t = Re.length;
    if (rt != _t && !Ue)
      return !1;
    for (var Tt = rt; Tt--; ) {
      var st = Xe[Tt];
      if (!(Ue ? st in C : ie.call(C, st)))
        return !1;
    }
    var It = se.get(g);
    if (It && se.get(C))
      return It == C;
    var Ot = !0;
    se.set(g, C), se.set(C, g);
    for (var Xt = Ue; ++Tt < rt; ) {
      st = Xe[Tt];
      var Kt = g[st], ar = C[st];
      if (Q)
        var Ts = Ue ? Q(ar, Kt, st, C, g, se) : Q(Kt, ar, st, g, C, se);
      if (!(Ts === void 0 ? Kt === ar || xe(Kt, ar, j, Q, se) : Ts)) {
        Ot = !1;
        break;
      }
      Xt || (Xt = st == "constructor");
    }
    if (Ot && !Xt) {
      var wi = g.constructor, _i = C.constructor;
      wi != _i && "constructor" in g && "constructor" in C && !(typeof wi == "function" && wi instanceof wi && typeof _i == "function" && _i instanceof _i) && (Ot = !1);
    }
    return se.delete(g), se.delete(C), Ot;
  }
  function Ds(g) {
    return gu(g, Nu, Su);
  }
  function mi(g, C) {
    var j = g.__data__;
    return Iu(C) ? j[typeof C == "string" ? "string" : "hash"] : j.map;
  }
  function Er(g, C) {
    var j = pe(g, C);
    return bu(j) ? j : void 0;
  }
  function Eu(g) {
    var C = ie.call(g, wt), j = g[wt];
    try {
      g[wt] = void 0;
      var Q = !0;
    } catch {
    }
    var xe = we.call(g);
    return Q && (C ? g[wt] = j : delete g[wt]), xe;
  }
  var Su = nr ? function(g) {
    return g == null ? [] : (g = Object(g), be(nr(g), function(C) {
      return Ft.call(g, C);
    }));
  } : Pu, Qt = Mr;
  (Me && Qt(new Me(new ArrayBuffer(1))) != B || Pe && Qt(new Pe()) != I || $e && Qt($e.resolve()) != S || je && Qt(new je()) != f || qe && Qt(new qe()) != R) && (Qt = function(g) {
    var C = Mr(g), j = C == m ? g.constructor : void 0, Q = j ? or(j) : "";
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
  function Du(g, C) {
    return C = C ?? u, !!C && (typeof g == "number" || Z.test(g)) && g > -1 && g % 1 == 0 && g < C;
  }
  function Iu(g) {
    var C = typeof g;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? g !== "__proto__" : g === null;
  }
  function Ou(g) {
    return !!me && me in g;
  }
  function xu(g) {
    var C = g && g.constructor, j = typeof C == "function" && C.prototype || re;
    return g === j;
  }
  function Au(g) {
    return we.call(g);
  }
  function or(g) {
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
  function Is(g, C) {
    return g === C || g !== g && C !== C;
  }
  var Cu = _s(function() {
    return arguments;
  }()) ? _s : function(g) {
    return $r(g) && ie.call(g, "callee") && !Ft.call(g, "callee");
  }, vi = Array.isArray;
  function Tu(g) {
    return g != null && xs(g.length) && !Os(g);
  }
  var Zi = Fr || Lu;
  function Ru(g, C) {
    return Es(g, C);
  }
  function Os(g) {
    if (!As(g))
      return !1;
    var C = Mr(g);
    return C == _ || C == D || C == h || C == y;
  }
  function xs(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= u;
  }
  function As(g) {
    var C = typeof g;
    return g != null && (C == "object" || C == "function");
  }
  function $r(g) {
    return g != null && typeof g == "object";
  }
  var Cs = he ? Ne(he) : mu;
  function Nu(g) {
    return Tu(g) ? pu(g) : vu(g);
  }
  function Pu() {
    return [];
  }
  function Lu() {
    return !1;
  }
  t.exports = Ru;
})(Mi, Mi.exports);
var Gg = Mi.exports;
const Yg = /* @__PURE__ */ Wn(Gg);
function Jg(t, e) {
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
var Qg = Jg, Xg = Qg;
const xc = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Zg = (t) => new TextEncoder().encode(t), ey = (t) => new TextDecoder().decode(t);
class ty {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ry {
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
    return Ac(this, e);
  }
}
class iy {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ac(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ac = (t, e) => new iy({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class ny {
  constructor(e, r, i, n) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new ty(e, r, i), this.decoder = new ry(e, r, n);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ji = ({ name: t, prefix: e, encode: r, decode: i }) => new ny(t, e, r, i), di = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: n } = Xg(r, e);
  return Ji({ prefix: t, name: e, encode: i, decode: (s) => xc(n(s)) });
}, sy = (t, e, r, i) => {
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
}, oy = (t, e, r) => {
  const i = e[e.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, c = 0;
  for (let l = 0; l < t.length; ++l)
    for (c = c << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[n & c >> u];
  if (u && (s += e[n & c << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Ji({ prefix: e, name: t, encode(n) {
  return oy(n, i, r);
}, decode(n) {
  return sy(n, i, r, t);
} }), ay = Ji({ prefix: "\0", name: "identity", encode: (t) => ey(t), decode: (t) => Zg(t) });
var cy = Object.freeze({ __proto__: null, identity: ay });
const uy = nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var ly = Object.freeze({ __proto__: null, base2: uy });
const hy = nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var fy = Object.freeze({ __proto__: null, base8: hy });
const dy = di({ prefix: "9", name: "base10", alphabet: "0123456789" });
var py = Object.freeze({ __proto__: null, base10: dy });
const gy = nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yy = nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var by = Object.freeze({ __proto__: null, base16: gy, base16upper: yy });
const my = nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), vy = nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), wy = nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), _y = nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Ey = nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Sy = nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Dy = nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Iy = nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Oy = nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var xy = Object.freeze({ __proto__: null, base32: my, base32upper: vy, base32pad: wy, base32padupper: _y, base32hex: Ey, base32hexupper: Sy, base32hexpad: Dy, base32hexpadupper: Iy, base32z: Oy });
const Ay = di({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Cy = di({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ty = Object.freeze({ __proto__: null, base36: Ay, base36upper: Cy });
const Ry = di({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Ny = di({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Py = Object.freeze({ __proto__: null, base58btc: Ry, base58flickr: Ny });
const Ly = nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Uy = nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Fy = nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), My = nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var $y = Object.freeze({ __proto__: null, base64: Ly, base64pad: Uy, base64url: Fy, base64urlpad: My });
const Cc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), jy = Cc.reduce((t, e, r) => (t[r] = e, t), []), qy = Cc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function zy(t) {
  return t.reduce((e, r) => (e += jy[r], e), "");
}
function By(t) {
  const e = [];
  for (const r of t) {
    const i = qy[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Ky = Ji({ prefix: "🚀", name: "base256emoji", encode: zy, decode: By });
var Hy = Object.freeze({ __proto__: null, base256emoji: Ky }), Vy = Tc, Vo = 128, Wy = 127, ky = ~Wy, Gy = Math.pow(2, 31);
function Tc(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= Gy; )
    e[r++] = t & 255 | Vo, t /= 128;
  for (; t & ky; )
    e[r++] = t & 255 | Vo, t >>>= 7;
  return e[r] = t | 0, Tc.bytes = r - i + 1, e;
}
var Yy = zn, Jy = 128, Wo = 127;
function zn(t, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, c = t.length;
  do {
    if (s >= c)
      throw zn.bytes = 0, new RangeError("Could not decode varint");
    u = t[s++], r += n < 28 ? (u & Wo) << n : (u & Wo) * Math.pow(2, n), n += 7;
  } while (u >= Jy);
  return zn.bytes = s - i, r;
}
var Qy = Math.pow(2, 7), Xy = Math.pow(2, 14), Zy = Math.pow(2, 21), e0 = Math.pow(2, 28), t0 = Math.pow(2, 35), r0 = Math.pow(2, 42), i0 = Math.pow(2, 49), n0 = Math.pow(2, 56), s0 = Math.pow(2, 63), o0 = function(t) {
  return t < Qy ? 1 : t < Xy ? 2 : t < Zy ? 3 : t < e0 ? 4 : t < t0 ? 5 : t < r0 ? 6 : t < i0 ? 7 : t < n0 ? 8 : t < s0 ? 9 : 10;
}, a0 = { encode: Vy, decode: Yy, encodingLength: o0 }, Rc = a0;
const ko = (t, e, r = 0) => (Rc.encode(t, e, r), e), Go = (t) => Rc.encodingLength(t), Bn = (t, e) => {
  const r = e.byteLength, i = Go(t), n = i + Go(r), s = new Uint8Array(n + r);
  return ko(t, s, 0), ko(r, s, i), s.set(e, n), new c0(t, r, e, s);
};
class c0 {
  constructor(e, r, i, n) {
    this.code = e, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Nc = ({ name: t, code: e, encode: r }) => new u0(t, e, r);
class u0 {
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
const Pc = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), l0 = Nc({ name: "sha2-256", code: 18, encode: Pc("SHA-256") }), h0 = Nc({ name: "sha2-512", code: 19, encode: Pc("SHA-512") });
var f0 = Object.freeze({ __proto__: null, sha256: l0, sha512: h0 });
const Lc = 0, d0 = "identity", Uc = xc, p0 = (t) => Bn(Lc, Uc(t)), g0 = { code: Lc, name: d0, encode: Uc, digest: p0 };
var y0 = Object.freeze({ __proto__: null, identity: g0 });
new TextEncoder(), new TextDecoder();
const Yo = { ...cy, ...ly, ...fy, ...py, ...by, ...xy, ...Ty, ...Py, ...$y, ...Hy };
({ ...f0, ...y0 });
function Fc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function b0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Fc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Mc(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const Jo = Mc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), pn = Mc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = b0(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), m0 = { utf8: Jo, "utf-8": Jo, hex: Yo.base16, latin1: pn, ascii: pn, binary: pn, ...Yo };
function v0(t, e = "utf8") {
  const r = m0[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Fc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const $c = "wc", w0 = 2, fs = "core", tr = `${$c}@2:${fs}:`, _0 = { name: fs, logger: "error" }, E0 = { database: ":memory:" }, S0 = "crypto", Qo = "client_ed25519_seed", D0 = X.ONE_DAY, I0 = "keychain", O0 = "0.3", x0 = "messages", A0 = "0.3", C0 = X.SIX_HOURS, T0 = "publisher", jc = "irn", R0 = "error", qc = "wss://relay.walletconnect.com", Xo = "wss://relay.walletconnect.org", N0 = "relayer", ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, P0 = "_subscription", Wt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, L0 = X.ONE_SECOND, U0 = "2.10.0", F0 = 1e4, M0 = "0.3", $0 = "WALLETCONNECT_CLIENT_ID", zt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, j0 = "subscription", q0 = "0.3", z0 = X.FIVE_SECONDS * 1e3, B0 = "pairing", K0 = "0.3", kr = { wc_pairingDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 0 } } }, qt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, H0 = "history", V0 = "0.3", W0 = "expirer", xt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, k0 = "0.3", gn = "verify-api", Ri = "https://verify.walletconnect.com", Zo = "https://verify.walletconnect.org";
class G0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = I0, this.version = O0, this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, yc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? bc(e) : void 0;
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
class Y0 {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.name = S0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = bo(n);
      return rc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = fp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = bo(s), c = jn();
      return await wd(c, n, D0, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const c = this.getPrivateKey(n), l = dp(c, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || pp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const c = gc(u), l = Yn(s);
      if (Ao(c)) {
        const w = c.senderPublicKey, _ = c.receiverPublicKey;
        n = await this.generateSharedKey(w, _);
      }
      const h = this.getSymKey(n), { type: p, senderPublicKey: b } = c;
      return yp({ type: p, symKey: h, message: l, senderPublicKey: b });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const c = vp(s, u);
      if (Ao(c)) {
        const l = c.receiverPublicKey, h = c.senderPublicKey;
        n = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(n), h = bp({ symKey: l, encoded: s });
        return za(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = Ui(n);
      return ui(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Ui(n);
      return s.senderPublicKey ? yt(s.senderPublicKey, gt) : void 0;
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.keychain = i || new G0(this.core, this.logger);
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
      e = this.keychain.get(Qo);
    } catch {
      e = jn(), await this.keychain.set(Qo, e);
    }
    return v0(e, "base16");
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
class J0 extends Eh {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = x0, this.version = A0, this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, yc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? bc(e) : void 0;
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
class Q0 extends Sh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Ut.EventEmitter(), this.name = T0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const c = (s == null ? void 0 : s.ttl) || C0, l = qn(s), h = (s == null ? void 0 : s.prompt) || !1, p = (s == null ? void 0 : s.tag) || 0, b = (s == null ? void 0 : s.id) || Ic().toString(), w = { topic: i, message: n, opts: { ttl: c, relay: l, prompt: h, tag: p, id: b } }, _ = setTimeout(() => this.queue.set(b, w), this.publishTimeout);
        try {
          await await ii(this.rpcPublish(i, n, c, l, h, p, b), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(b), this.relayer.events.emit(ht.publish, w);
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
    const w = { method: Ci(n.protocol).publish, params: { topic: e, message: r, ttl: i, prompt: s, tag: u }, id: c };
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
    this.relayer.core.heartbeat.on(Nr.HEARTBEAT_EVENTS.pulse, () => {
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
class X0 {
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
var Z0 = Object.defineProperty, e1 = Object.defineProperties, t1 = Object.getOwnPropertyDescriptors, ea = Object.getOwnPropertySymbols, r1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, ta = (t, e, r) => e in t ? Z0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gr = (t, e) => {
  for (var r in e || (e = {}))
    r1.call(e, r) && ta(t, r, e[r]);
  if (ea)
    for (var r of ea(e))
      i1.call(e, r) && ta(t, r, e[r]);
  return t;
}, yn = (t, e) => e1(t, t1(e));
class n1 extends Oh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new X0(), this.events = new Ut.EventEmitter(), this.name = j0, this.version = q0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = qn(n), u = { topic: i, relay: s };
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
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= z0 && (clearInterval(c), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
      const n = qn(i);
      await this.rpcUnsubscribe(e, r, n);
      const s = Ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(e, r) {
    const i = { method: Ci(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await ii(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
    return Cr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, i = { method: Ci(r.protocol).batchSubscribe, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ii(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, i) {
    const n = { method: Ci(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, yn(Gr({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Gr({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Gr({}, r)), this.topicMap.set(r.topic, e), this.events.emit(zt.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(zt.deleted, yn(Gr({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(zt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(zt.resubscribed);
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
    fi(r) && this.onBatchSubscribe(r.map((i, n) => yn(Gr({}, e[n]), { id: i })));
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
    this.relayer.core.heartbeat.on(Nr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(ht.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(zt.created, async (e) => {
      const r = zt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(zt.deleted, async (e) => {
      const r = zt.deleted;
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
var s1 = Object.defineProperty, ra = Object.getOwnPropertySymbols, o1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, ia = (t, e, r) => e in t ? s1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, c1 = (t, e) => {
  for (var r in e || (e = {}))
    o1.call(e, r) && ia(t, r, e[r]);
  if (ra)
    for (var r of ra(e))
      a1.call(e, r) && ia(t, r, e[r]);
  return t;
};
class u1 extends Dh {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Ut.EventEmitter(), this.name = N0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
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
      this.provider.on(Wt.payload, this.onPayloadHandler), this.provider.on(Wt.connect, this.onConnectHandler), this.provider.on(Wt.disconnect, this.onDisconnectHandler), this.provider.on(Wt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ve.generateChildLogger(e.logger, this.name) : ve.pino(ve.getDefaultLoggerOptions({ level: e.logger || R0 })), this.messages = new J0(this.logger, e.core), this.subscriber = new n1(this, this.logger), this.publisher = new Q0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || qc, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Xo}...`), await this.restartTransport(Xo);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, F0);
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
      this.subscriber.once(zt.created, (u) => {
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await ii(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(zt.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, i) => {
          try {
            await ii(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Wt.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await $o())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Kg(new kg(Tp({ sdkVersion: U0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), hs(e)) {
      if (!e.method.endsWith(P0))
        return;
      const r = e.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(c1({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      Yi(e) && this.events.emit(ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = us(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Wt.payload, this.onPayloadHandler), this.provider.off(Wt.connect, this.onConnectHandler), this.provider.off(Wt.disconnect, this.onDisconnectHandler), this.provider.off(Wt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await $o();
    Eg(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, X.toMiliseconds(L0)));
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
var l1 = Object.defineProperty, na = Object.getOwnPropertySymbols, h1 = Object.prototype.hasOwnProperty, f1 = Object.prototype.propertyIsEnumerable, sa = (t, e, r) => e in t ? l1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oa = (t, e) => {
  for (var r in e || (e = {}))
    h1.call(e, r) && sa(t, r, e[r]);
  if (na)
    for (var r of na(e))
      f1.call(e, r) && sa(t, r, e[r]);
  return t;
};
class Qi extends Ih {
  constructor(e, r, i, n = tr, s = void 0) {
    super(e, r, i, n), this.core = e, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = M0, this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !pt(u) ? this.map.set(this.getKey(u), u) : Zp(u) ? this.map.set(u.id, u) : eg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, c) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, c) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: c }), this.map.set(u, c), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((c) => Object.keys(u).every((l) => Yg(c[l], u[l]))) : this.values), this.update = async (u, c) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: c });
      const l = oa(oa({}, this.getData(u)), c);
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
class d1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = B0, this.version = K0, this.events = new La(), this.initialized = !1, this.storagePrefix = tr, this.ignoredPayloadTypes = [_r], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = jn(), n = await this.core.crypto.setSymKey(i), s = Rt(X.FIVE_MINUTES), u = { protocol: jc }, c = { topic: n, expiry: s, relay: u, active: !1 }, l = Kp({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, c), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = qp(i.uri);
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
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: c, reject: l } = Or();
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
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", Ke("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = ni(n, s), c = await this.core.crypto.encode(i, u), l = kr[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, c, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = us(i, s), c = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = kr[l.request.method].res;
      await this.core.relayer.publish(n, c, h), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = ls(i, s), c = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), h = kr[l.request.method] ? kr[l.request.method].res : kr.unregistered_method.res;
      await this.core.relayer.publish(n, c, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => er(n.expiry));
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
        Gt(n) ? this.events.emit(Be("pairing_ping", s), {}) : Nt(n) && this.events.emit(Be("pairing_ping", s), { error: n.error });
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
        const c = Ke("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, c), this.logger.error(c);
      } catch (c) {
        await this.sendError(s, i, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(Ke("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!mt(i)) {
        const { message: n } = G("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Xp(i.uri)) {
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
      if (er(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = G("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.pairings = new Qi(this.core, this.logger, this.name, this.storagePrefix);
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
        hs(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Yi(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(xt.expired, async (e) => {
      const { topic: r } = vc(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class p1 extends _h {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Ut.EventEmitter(), this.name = H0, this.version = V0, this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Rt(X.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(qt.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Nt(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(qt.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(qt.deleted, s);
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
      const i = { topic: r.topic, request: ni(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(qt.sync);
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
    this.events.on(qt.created, (e) => {
      const r = qt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(qt.updated, (e) => {
      const r = qt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(qt.deleted, (e) => {
      const r = qt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Nr.HEARTBEAT_EVENTS.pulse, () => {
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
class g1 extends xh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Ut.EventEmitter(), this.name = W0, this.version = k0, this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
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
      return Rp(e);
    if (typeof e == "number")
      return Np(e);
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
    this.core.heartbeat.on(Nr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(xt.created, (e) => {
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
class y1 extends Ah {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = gn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || Gi() || !li())
        return;
      const n = (i == null ? void 0 : i.verifyUrl) || Ri;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Zo;
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
      const n = (i == null ? void 0 : i.verifyUrl) || Ri;
      let s = "";
      try {
        s = await this.fetchAttestation(i.attestationId, n);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.warn(u), s = await this.fetchAttestation(i.attestationId, Zo);
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
        if (document.getElementById(gn))
          return s();
        window.addEventListener("message", n);
        const u = document.createElement("iframe");
        u.id = gn, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", n), u("verify iframe load timeout");
      }, X.toMiliseconds(X.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = ve.generateChildLogger(r, this.name), this.verifyUrl = Ri, this.abortController = new AbortController(), this.isDevEnv = ss() && process.env.IS_VITEST;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), X.toMiliseconds(e));
  }
}
var b1 = Object.defineProperty, aa = Object.getOwnPropertySymbols, m1 = Object.prototype.hasOwnProperty, v1 = Object.prototype.propertyIsEnumerable, ca = (t, e, r) => e in t ? b1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ua = (t, e) => {
  for (var r in e || (e = {}))
    m1.call(e, r) && ca(t, r, e[r]);
  if (aa)
    for (var r of aa(e))
      v1.call(e, r) && ca(t, r, e[r]);
  return t;
};
class ds extends wh {
  constructor(e) {
    super(e), this.protocol = $c, this.version = w0, this.name = fs, this.events = new Ut.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || qc;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || _0.logger }));
    this.logger = ve.generateChildLogger(r, this.name), this.heartbeat = new Nr.HeartBeat(), this.crypto = new Y0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new p1(this, this.logger), this.expirer = new g1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new ih(ua(ua({}, E0), e == null ? void 0 : e.storageOptions)), this.relayer = new u1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new d1(this, this.logger), this.verify = new y1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new ds(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem($0, i), r;
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
const w1 = ds, zc = "wc", Bc = 2, Kc = "client", ps = `${zc}@${Bc}:${Kc}:`, bn = { name: Kc, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, la = "WALLETCONNECT_DEEPLINK_CHOICE", _1 = "proposal", E1 = "Proposal expired", S1 = "session", Oi = X.SEVEN_DAYS, D1 = "engine", Yr = { wc_sessionPropose: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, mn = { min: X.FIVE_MINUTES, max: X.SEVEN_DAYS }, kt = { idle: "IDLE", active: "ACTIVE" }, I1 = "request", O1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var x1 = Object.defineProperty, A1 = Object.defineProperties, C1 = Object.getOwnPropertyDescriptors, ha = Object.getOwnPropertySymbols, T1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, fa = (t, e, r) => e in t ? x1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bt = (t, e) => {
  for (var r in e || (e = {}))
    T1.call(e, r) && fa(t, r, e[r]);
  if (ha)
    for (var r of ha(e))
      R1.call(e, r) && fa(t, r, e[r]);
  return t;
}, Jr = (t, e) => A1(t, C1(e));
class N1 extends Th {
  constructor(e) {
    super(e), this.name = D1, this.events = new La(), this.initialized = !1, this.ignoredPayloadTypes = [_r], this.requestQueue = { state: kt.idle, queue: [] }, this.sessionRequestQueue = { state: kt.idle, queue: [] }, this.requestQueueDelay = X.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Yr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = Jr(bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: c, relays: l } = i;
      let h = n, p, b = !1;
      if (h && (b = this.client.core.pairing.pairings.get(h).active), !h || !b) {
        const { topic: S, uri: y } = await this.client.core.pairing.create();
        h = S, p = y;
      }
      const w = await this.client.core.crypto.generateKeyPair(), _ = bt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: jc }], proposer: { publicKey: w, metadata: this.client.metadata } }, c && { sessionProperties: c }), { reject: D, resolve: I, done: x } = Or(X.FIVE_MINUTES, E1);
      if (this.events.once(Be("session_connect"), async ({ error: S, session: y }) => {
        if (S)
          D(S);
        else if (y) {
          y.self.publicKey = w;
          const v = Jr(bt({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
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
      l = l || "", Zr(p) || (p = kp(s, "approve()"));
      const w = await this.client.core.crypto.generateKeyPair(), _ = h.publicKey, D = await this.client.core.crypto.generateSharedKey(w, _);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult({ id: i, topic: l, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: w } }), await this.client.proposal.delete(i, Ke("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = bt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: p, optionalNamespaces: b, pairingTopic: l, controller: { publicKey: w, metadata: this.client.metadata }, expiry: Rt(Oi) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest({ topic: D, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      const x = Jr(bt({}, I), { topic: D, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: w });
      return await this.client.session.set(D, x), await this.setExpiry(D, Rt(Oi)), { topic: D, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, Ke("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n } }), { done: u, resolve: c, reject: l } = Or();
      return this.events.once(Be("session_update", s), ({ error: h }) => {
        h ? l(h) : c();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: c } = Or();
      return this.events.once(Be("session_extend", n), ({ error: l }) => {
        l ? c(l) : u();
      }), await this.setExpiry(i, Rt(Oi)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, c = cs(), { done: l, resolve: h, reject: p } = Or(u);
      return this.events.once(Be("session_request", c), ({ error: b, result: w }) => {
        b ? p(b) : h(w);
      }), await Promise.all([new Promise(async (b) => {
        await this.sendRequest({ clientRpcId: c, topic: s, method: "wc_sessionRequest", params: { request: n, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((w) => p(w)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: c }), b();
      }), new Promise(async (b) => {
        const w = await this.client.core.storage.getItem(la);
        Pp({ id: c, topic: s, wcDeepLink: w }), b();
      }), l()]).then((b) => b[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      Gt(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Nt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: c } = Or();
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
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: Ke("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Jp(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(la).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, Ke("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = kt.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = Yr.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Rt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: u, relayRpcId: c, clientRpcId: l, throwOnFailedPublish: h } = r, p = ni(n, s, l);
      if (li() && O1.includes(n)) {
        const _ = Cr(JSON.stringify(p));
        this.client.core.verify.register({ attestationId: _ });
      }
      const b = await this.client.core.crypto.encode(i, p), w = Yr[n].req;
      return u && (w.ttl = u), c && (w.id = c), this.client.core.history.set(i, p), h ? (w.internal = Jr(bt({}, w.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, b, w)) : this.client.core.relayer.publish(i, b, w).catch((_) => this.client.logger.error(_)), p.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: u } = r, c = us(i, s), l = await this.client.core.crypto.encode(n, c), h = await this.client.core.history.get(n, i), p = Yr[h.request.method].res;
      u ? (p.internal = Jr(bt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, l, p)) : this.client.core.relayer.publish(n, l, p).catch((b) => this.client.logger.error(b)), await this.client.core.history.resolve(c);
    }, this.sendError = async (r, i, n) => {
      const s = ls(r, n), u = await this.client.core.crypto.encode(i, s), c = await this.client.core.history.get(i, r), l = Yr[c.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        er(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        er(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === kt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = kt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = kt.idle;
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
      if (Gt(i)) {
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
        Nt(i) && (await this.client.proposal.delete(n, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_connect"), { error: i.error }));
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
      Gt(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Be("session_approve", n), {})) : Nt(i) && (await this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const u = `${r}_session_update`, c = Ii.get(u);
        if (c && this.isRequestOutOfSync(c, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(bt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: n }), Ii.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      Gt(i) ? this.events.emit(Be("session_update", n), {}) : Nt(i) && this.events.emit(Be("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Rt(Oi)), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      Gt(i) ? this.events.emit(Be("session_extend", n), {}) : Nt(i) && this.events.emit(Be("session_extend", n), { error: i.error });
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
        Gt(i) ? this.events.emit(Be("session_ping", n), {}) : Nt(i) && this.events.emit(Be("session_ping", n), { error: i.error });
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
      Gt(i) ? this.events.emit(Be("session_request", n), { result: i.result }) : Nt(i) && this.events.emit(Be("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const u = `${r}_session_event_${s.event.name}`, c = Ii.get(u);
        if (c && this.isRequestOutOfSync(c, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(bt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), Ii.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = kt.idle, this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === kt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Cr(JSON.stringify(ni("wc_sessionRequest", s, i))), c = this.client.session.get(n), l = await this.getVerifyContext(u, c.peer.metadata);
        this.sessionRequestQueue.state = kt.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: c } = r;
      if (pt(i) || await this.isValidPairingTopic(i), !cg(c, !0)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(l);
      }
      !pt(n) && Zr(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !pt(s) && Zr(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = ag(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!mt(r))
        throw new Error(G("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), l = Ti(n, "approve()");
      if (l)
        throw new Error(l.message);
      const h = Fo(c.requiredNamespaces, n, "approve()");
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
      if (await this.isValidProposalId(i), !lg(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!mt(r)) {
        const { message: h } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!_c(i)) {
        const { message: h } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const c = tg(n, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      const l = Ti(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (er(u)) {
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
      const s = this.client.session.get(i), u = Ti(n, "update()");
      if (u)
        throw new Error(u.message);
      const c = Fo(s.requiredNamespaces, n, "update()");
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
      if (!Uo(c, s)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!hg(n)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!pg(c, s, n.method)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !mg(u, mn)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${mn.min} and ${mn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!mt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !fg(n)) {
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
      if (!Uo(u, s)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(c);
      }
      if (!dg(n)) {
        const { message: c } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(c);
      }
      if (!gg(u, s, n.name)) {
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
      const n = { verified: { verifyUrl: i.verifyUrl || Ri, validation: "UNKNOWN", origin: i.url || "" } };
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
        hs(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : Yi(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(xt.expired, async (e) => {
      const { topic: r, id: i } = vc(e.target);
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
    if (er(this.client.core.pairing.pairings.get(e).expiry)) {
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
    if (er(this.client.session.get(e).expiry)) {
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
    if (!ug(e)) {
      const { message: r } = G("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (er(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = G("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class P1 extends Qi {
  constructor(e, r) {
    super(e, r, _1, ps), this.core = e, this.logger = r;
  }
}
class L1 extends Qi {
  constructor(e, r) {
    super(e, r, S1, ps), this.core = e, this.logger = r;
  }
}
class U1 extends Qi {
  constructor(e, r) {
    super(e, r, I1, ps, (i) => i.id), this.core = e, this.logger = r;
  }
}
class gs extends Ch {
  constructor(e) {
    super(e), this.protocol = zc, this.version = Bc, this.name = bn.name, this.events = new Ut.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (e == null ? void 0 : e.name) || bn.name, this.metadata = (e == null ? void 0 : e.metadata) || Op();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || bn.logger }));
    this.core = (e == null ? void 0 : e.core) || new w1(e), this.logger = ve.generateChildLogger(r, this.name), this.session = new L1(this.core, this.logger), this.proposal = new P1(this.core, this.logger), this.pendingRequest = new U1(this.core, this.logger), this.engine = new N1(this);
  }
  static async init(e) {
    const r = new gs(e);
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
var F1 = Object.defineProperty, M1 = Object.defineProperties, $1 = Object.getOwnPropertyDescriptors, da = Object.getOwnPropertySymbols, j1 = Object.prototype.hasOwnProperty, q1 = Object.prototype.propertyIsEnumerable, pa = (t, e, r) => e in t ? F1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, z1 = (t, e) => {
  for (var r in e || (e = {}))
    j1.call(e, r) && pa(t, r, e[r]);
  if (da)
    for (var r of da(e))
      q1.call(e, r) && pa(t, r, e[r]);
  return t;
}, B1 = (t, e) => M1(t, $1(e)), ys = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Ce = (t, e, r) => (ys(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, $i = (t, e, r, i) => (ys(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), ct = (t, e, r) => (ys(t, e, "access private method"), r), gr, xr, Qr, et, Kn, Hc, ut, dt, Hn, ga;
class K1 {
  constructor(e) {
    pr(this, Kn), pr(this, ut), pr(this, Hn), pr(this, gr, void 0), pr(this, xr, void 0), pr(this, Qr, void 0), pr(this, et, void 0), $i(this, gr, e), $i(this, xr, ct(this, Kn, Hc).call(this)), ct(this, ut, dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: i } = e;
    return new Promise(async (n, s) => {
      await ct(this, ut, dt).call(this);
      const u = Ce(this, xr).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: c, approval: l } = await Ce(this, et).connect(e);
      if (c) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: p }) => {
          p && p.forEach((b) => h.add(b));
        }), i && Object.values(i).forEach(({ chains: p }) => {
          p && p.forEach((b) => h.add(b));
        }), await Ce(this, xr).openModal({ uri: c, chains: Array.from(h) });
      }
      try {
        const h = await l();
        n(h);
      } catch (h) {
        s(h);
      } finally {
        u(), Ce(this, xr).closeModal();
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
gr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakSet(), Hc = function() {
  const { modalOptions: t, projectId: e } = Ce(this, gr);
  return new El(B1(z1({}, t), { projectId: e }));
}, ut = /* @__PURE__ */ new WeakSet(), dt = async function() {
  return Ce(this, et) ? !0 : (!Ce(this, Qr) && typeof window < "u" && $i(this, Qr, ct(this, Hn, ga).call(this)), Ce(this, Qr));
}, Hn = /* @__PURE__ */ new WeakSet(), ga = async function() {
  $i(this, et, await gs.init({ metadata: Ce(this, gr).metadata, projectId: Ce(this, gr).projectId, relayUrl: Ce(this, gr).relayUrl }));
  const t = await Ce(this, et).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const bs = [
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
], Xi = ["aleo:1"], ms = ["chainChanged", "accountSelected", "accountSynced"], H1 = "f0aaeffe71b636da453fce042d79d723", V1 = {
  standaloneChains: Xi,
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
        // universal: 'https://jigsaw-dev.puzzle.online/',
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
}, Ob = {
  requiredNamespaces: {
    aleo: {
      methods: bs,
      chains: Xi,
      events: ms
    }
  }
};
function W1(t) {
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
const ya = (t) => {
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
}, k1 = (t) => t ? ya(t) : ya;
var Vn = { exports: {} }, vn = {}, xi = { exports: {} }, wn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function G1() {
  if (ba)
    return wn;
  ba = 1;
  var t = ji;
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
  return wn.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p, wn;
}
var _n = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Y1() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = ji, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    _n.useSyncExternalStore = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _n;
}
var va;
function Vc() {
  return va || (va = 1, process.env.NODE_ENV === "production" ? xi.exports = G1() : xi.exports = Y1()), xi.exports;
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
var wa;
function J1() {
  if (wa)
    return vn;
  wa = 1;
  var t = ji, e = Vc();
  function r(h, p) {
    return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, c = t.useMemo, l = t.useDebugValue;
  return vn.useSyncExternalStoreWithSelector = function(h, p, b, w, _) {
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
  }, vn;
}
var En = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Q1() {
  return _a || (_a = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = ji, e = Vc();
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
    En.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), En;
}
process.env.NODE_ENV === "production" ? Vn.exports = J1() : Vn.exports = Q1();
var X1 = Vn.exports;
const Z1 = /* @__PURE__ */ Wn(X1), { useSyncExternalStoreWithSelector: eb } = Z1;
function tb(t, e = t.getState, r) {
  const i = eb(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return Uu(i), i;
}
const Ea = (t) => {
  const e = typeof t == "function" ? k1(t) : t, r = (i, n) => tb(e, i, n);
  return Object.assign(r, e), r;
}, rb = (t) => t ? Ea(t) : Ea;
function ib(t, e) {
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
const si = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(i) {
        return si(i)(r);
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
        return si(i)(r);
      }
    };
  }
}, nb = (t, e) => (r, i, n) => {
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
  const p = si(s.serialize), b = () => {
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
    return si(h.getItem.bind(h))(s.name).then((m) => {
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
}, sb = (t, e) => (r, i, n) => {
  let s = {
    storage: ib(() => localStorage),
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
    return si(h.getItem.bind(h))(s.name).then((m) => {
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
}, ob = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? nb(t, e) : sb(t, e), ab = ob, pi = rb()(
  ab((t, e) => ({
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
), Rr = W1();
let Xr;
function xb(t) {
  Xr = new K1({
    projectId: H1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...V1 }
  }), pi.setState({ account: void 0 }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Te() {
  return new Promise((t) => {
    if (Xr)
      t(Xr);
    else {
      const e = setInterval(() => {
        Xr && (clearInterval(e), t(Xr));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function vs(t) {
  br(() => (Te().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Te().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function cb(t) {
  br(() => (Te().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Te().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Wc(t) {
  br(() => (Te().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Te().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function ws() {
  const [t, e] = Lt(void 0);
  return vs((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Wc((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: i } = r.params, n = { ...t, namespaces: i };
      e(n);
    }
  }), cb((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), br(() => {
    async function r() {
      const n = await (await Te()).getSession();
      e(n);
    }
    return r(), Rr.on("session_change", r), () => {
      Rr.off("session_change", r);
    };
  }, []), t;
}
function kc(t) {
  br(() => (Te().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Te().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const Sa = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, Ab = () => {
  const t = ws(), e = "aleo:1", [r, i] = pi((h) => [h.account, h.setAccount]), [n, s] = Lt(void 0), [u, c] = Lt(!1), l = async () => {
    if (!t) {
      c(!1);
      return;
    }
    try {
      c(!0);
      const p = await (await Te()).request({
        topic: t == null ? void 0 : t.topic,
        chainId: e,
        request: {
          id: 1,
          jsonrpc: "2.0",
          method: "getSelectedAccount"
        }
      });
      i(p.account), s(p.error);
    } catch (h) {
      s(h.message);
    } finally {
      c(!1);
    }
  };
  return kc(({ params: h, topic: p }) => {
    if (h.event.name === "accountSelected" && t && t.topic === p) {
      const w = h.event.data, _ = h.chainId.split(":")[0], D = h.chainId.split(":")[1];
      i({
        network: _,
        chainId: D,
        address: w,
        shortenedAddress: Sa(w)
      });
    }
  }), Wc(({ params: h, topic: p }) => {
    const b = h.event.data, w = h.chainId.split(":")[0], _ = h.chainId.split(":")[1];
    i({
      network: w,
      chainId: _,
      address: b,
      shortenedAddress: Sa(b)
    });
  }), vs(({ params: h, topic: p }) => {
    i(void 0);
  }), br(() => {
    t && !u && l();
  }, [t]), {
    account: r,
    error: n,
    loading: u
  };
}, Cb = () => {
  const t = ws(), e = "aleo:1", [r, i] = Lt(void 0), [n, s] = Lt(void 0), [u, c] = Lt(!1), l = async () => {
    try {
      c(!0);
      const p = await (await Te()).request({
        topic: t == null ? void 0 : t.topic,
        chainId: e,
        request: {
          id: 1,
          jsonrpc: "2.0",
          method: "getBalance",
          params: {
            assetId: void 0
          }
        }
      });
      i(p.balances), s(p.error);
    } catch (h) {
      s(h.message);
    } finally {
      c(!1);
    }
  };
  return kc(({ params: h, topic: p }) => {
    const b = h.event.name;
    (b === "accountSynced" || b === "accountSelected") && t && t.topic === p && !u && l();
  }), vs(({ params: h, topic: p }) => {
    i(void 0);
  }), br(() => {
    t && !u && l(), t || i(void 0);
  }, [t]), { balances: r, error: n, loading: u };
};
function Tb() {
  const [t, e] = Lt(void 0), [r, i] = Lt(), [n, s] = Lt(!1);
  async function u() {
    try {
      s(!0), i(void 0);
      const l = await (await Te()).connect({
        requiredNamespaces: {
          aleo: {
            methods: bs,
            chains: Xi,
            events: ms
          }
        }
      });
      return e(l), Rr.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (c) {
      throw i(c), c;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: n, connect: u };
}
function Rb() {
  const t = ws(), [e, r] = Lt(), [i, n] = Lt(!1);
  async function s() {
    try {
      n(!0), r(void 0), await (await Te()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: Ke("USER_DISCONNECTED")
      }), Rr.emit("session_change"), pi.setState({ account: void 0 });
    } catch (u) {
      throw r(u), u;
    } finally {
      n(!1);
    }
  }
  return { error: e, loading: i, disconnect: s };
}
const Nb = async () => {
  const t = await Te(), e = await t.getSession(), r = "aleo:1";
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
    return pi.setState({ account: i.account }), i;
  } catch (i) {
    const n = i.message;
    return console.error("getAccount error", n), { error: n };
  }
}, Pb = async () => {
  const t = await Te(), e = await t.getSession(), r = "aleo:1";
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
}, Lb = async () => {
  const t = await Te();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: bs,
          chains: Xi,
          events: ms
        }
      }
    });
    return Rr.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, Ub = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, Fb = async () => {
  const t = await Te(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
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
}, Mb = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, $b = async () => {
  const t = await Te(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: Ke("USER_DISCONNECTED"),
      topic: e.topic
    }), Rr.emit("session_change"), pi.setState({ account: void 0 }), {};
  } catch (r) {
    const i = r.message;
    return console.error("error disconnecting", i), { error: i };
  }
}, jb = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, qb = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), i = "aleo:1";
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
}, zb = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const i = await Te(), n = await (i == null ? void 0 : i.getSession()), s = "aleo:1";
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
}, Bb = async ({
  message: t,
  address: e
}) => {
  const r = await Te(), i = await (r == null ? void 0 : r.getSession()), n = "aleo:1";
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
}, Kb = 50, ub = [
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
], Da = el.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Da !== t && (ub.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Da));
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
  Bb as K,
  Kb as P,
  cl as R,
  Ia as T,
  lt as a,
  Xi as b,
  xb as c,
  ms as d,
  Rr as e,
  H1 as f,
  Te as g,
  V1 as h,
  Ob as i,
  Sa as j,
  Cb as k,
  Tb as l,
  Rb as m,
  qs as n,
  fb as o,
  Pt as p,
  vs as q,
  kc as r,
  tn as s,
  hb as t,
  Ab as u,
  cb as v,
  bs as w,
  Wc as x,
  Tr as y,
  ws as z
};
