import hs, { useEffect as Cr, useState as Bi, useDebugValue as eh } from "react";
const th = "@puzzlehq/sdk", rh = "Puzzle SDK", nh = "0.1.36", ih = "Your portal to privacy", sh = "./dist/puzzle.umd.js", oh = "./dist/puzzle.es.js", ah = "./dist/types/src/index.d.ts", ch = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, uh = "module", lh = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types",
  "type-check": "tsc --noEmit"
}, hh = {
  "@tanstack/react-query": "^4.29.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.9.0",
  "@walletconnect/utils": "^2.9.0",
  debug: "^4.3.4",
  eventemitter3: "^5.0.1",
  events: "^3.3.0",
  immer: "^9.0.19",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, fh = {
  "@puzzlehq/types": "1.0.7",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, dh = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, ph = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], gh = "Puzzle", yh = "ISC", mh = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, vh = "https://github.com/puzzlehq/puzzle-sdk#readme", bh = {
  patchedDependencies: {
    "@walletconnect/keyvaluestorage@1.0.2": "patches/@walletconnect__keyvaluestorage@1.0.2.patch"
  }
}, _h = {
  name: th,
  displayName: rh,
  version: nh,
  description: ih,
  main: sh,
  module: oh,
  types: ah,
  exports: ch,
  type: uh,
  scripts: lh,
  dependencies: hh,
  devDependencies: fh,
  repository: dh,
  keywords: ph,
  author: gh,
  license: yh,
  bugs: mh,
  homepage: vh,
  pnpm: bh
}, wh = Symbol(), Sa = Object.getPrototypeOf, uo = /* @__PURE__ */ new WeakMap(), Eh = (t) => t && (uo.has(t) ? uo.get(t) : Sa(t) === Object.prototype || Sa(t) === Array.prototype), Sh = (t) => Eh(t) && t[wh] || null, xa = (t, e = !0) => {
  uo.set(t, e);
}, zs = (t) => typeof t == "object" && t !== null, Vr = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakSet(), xh = (t = Object.is, e = (h, f) => new Proxy(h, f), r = (h) => zs(h) && !Fi.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (h, f, d = n) => {
  const y = i.get(h);
  if ((y == null ? void 0 : y[0]) === f)
    return y[1];
  const _ = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return xa(_, !0), i.set(h, [f, _]), Reflect.ownKeys(h).forEach((S) => {
    if (Object.getOwnPropertyDescriptor(_, S))
      return;
    const C = Reflect.get(h, S), D = {
      value: C,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Fi.has(C))
      xa(C, !1);
    else if (C instanceof Promise)
      delete D.value, D.get = () => d(C);
    else if (Vr.has(C)) {
      const [z, w] = Vr.get(
        C
      );
      D.value = s(
        z,
        w(),
        d
      );
    }
    Object.defineProperty(_, S, D);
  }), Object.preventExtensions(_);
}, c = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (h) => {
  if (!zs(h))
    throw new Error("object required");
  const f = c.get(h);
  if (f)
    return f;
  let d = o[0];
  const y = /* @__PURE__ */ new Set(), _ = (R, F = ++o[0]) => {
    d !== F && (d = F, y.forEach((q) => q(R, F)));
  };
  let S = o[1];
  const C = (R = ++o[1]) => (S !== R && !y.size && (S = R, z.forEach(([F]) => {
    const q = F[1](R);
    q > d && (d = q);
  })), d), D = (R) => (F, q) => {
    const W = [...F];
    W[1] = [R, ...W[1]], _(W, q);
  }, z = /* @__PURE__ */ new Map(), w = (R, F) => {
    if (y.size) {
      const q = F[3](D(R));
      z.set(R, [F, q]);
    } else
      z.set(R, [F]);
  }, O = (R) => {
    var F;
    const q = z.get(R);
    q && (z.delete(R), (F = q[1]) == null || F.call(q));
  }, b = (R) => (y.add(R), y.size === 1 && z.forEach(([q, W], ie) => {
    const A = q[3](D(ie));
    z.set(ie, [q, A]);
  }), () => {
    y.delete(R), y.size === 0 && z.forEach(([q, W], ie) => {
      W && (W(), z.set(ie, [q]));
    });
  }), v = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), a = e(v, {
    deleteProperty(R, F) {
      const q = Reflect.get(R, F);
      O(F);
      const W = Reflect.deleteProperty(R, F);
      return W && _(["delete", [F], q]), W;
    },
    set(R, F, q, W) {
      const ie = Reflect.has(R, F), A = Reflect.get(R, F, W);
      if (ie && (t(A, q) || c.has(q) && t(A, c.get(q))))
        return !0;
      O(F), zs(q) && (q = Sh(q) || q);
      let j = q;
      if (q instanceof Promise)
        q.then((ne) => {
          q.status = "fulfilled", q.value = ne, _(["resolve", [F], ne]);
        }).catch((ne) => {
          q.status = "rejected", q.reason = ne, _(["reject", [F], ne]);
        });
      else {
        !Vr.has(q) && r(q) && (j = u(q));
        const ne = !Fi.has(j) && Vr.get(j);
        ne && w(F, ne);
      }
      return Reflect.set(R, F, j, W), _(["set", [F], q, A]), !0;
    }
  });
  c.set(h, a);
  const g = [
    v,
    C,
    s,
    b
  ];
  return Vr.set(a, g), Reflect.ownKeys(h).forEach((R) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      R
    );
    "value" in F && (a[R] = h[R], delete F.value, delete F.writable), Object.defineProperty(v, R, F);
  }), a;
}) => [
  // public functions
  u,
  // shared state
  Vr,
  Fi,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  c,
  o
], [Dh] = xh();
function Jr(t = {}) {
  return Dh(t);
}
function mn(t, e, r) {
  const n = Vr.get(t);
  let i;
  const s = [], c = n[3];
  let o = !1;
  const h = c((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, o && e(s.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, h();
  };
}
function Ih(t, e) {
  const r = Vr.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const It = Jr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), gu = { state: It, subscribe(t) {
  return mn(It, () => t(It));
}, push(t, e) {
  t !== It.view && (It.view = t, e && (It.data = e), It.history.push(t));
}, reset(t) {
  It.view = t, It.history = [t];
}, replace(t) {
  It.history.length > 1 && (It.history[It.history.length - 1] = t, It.view = t);
}, goBack() {
  if (It.history.length > 1) {
    It.history.pop();
    const [t] = It.history.slice(-1);
    It.view = t;
  }
}, setData(t) {
  It.data = t;
} }, jt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return jt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return jt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (jt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!jt.isHttpUrl(t))
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
    localStorage.setItem(jt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(jt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(jt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(jt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = gu.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Oh = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Lt = Jr({ enabled: Oh, userSessionId: "", events: [], connectedWalletId: void 0 }), Ch = { state: Lt, subscribe(t) {
  return mn(Lt.events, () => t(Ih(Lt.events[Lt.events.length - 1])));
}, initialize() {
  Lt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Lt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Lt.connectedWalletId = t;
}, click(t) {
  if (Lt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Lt.userSessionId, timestamp: Date.now(), data: t };
    Lt.events.push(e);
  }
}, track(t) {
  if (Lt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Lt.userSessionId, timestamp: Date.now(), data: t };
    Lt.events.push(e);
  }
}, view(t) {
  if (Lt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Lt.userSessionId, timestamp: Date.now(), data: t };
    Lt.events.push(e);
  }
} }, Er = Jr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), pr = { state: Er, subscribe(t) {
  return mn(Er, () => t(Er));
}, setChains(t) {
  Er.chains = t;
}, setWalletConnectUri(t) {
  Er.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Er.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Er.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Er.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Er.isUiLoaded = t;
}, setIsAuth(t) {
  Er.isAuth = t;
} }, Ui = Jr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Rn = { state: Ui, subscribe(t) {
  return mn(Ui, () => t(Ui));
}, setConfig(t) {
  var e, r;
  Ch.initialize(), pr.setChains(t.chains), pr.setIsAuth(!!t.enableAuthMode), pr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), pr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), jt.setModalVersionInStorage(), Object.assign(Ui, t);
} };
var Th = Object.defineProperty, Da = Object.getOwnPropertySymbols, Ah = Object.prototype.hasOwnProperty, Nh = Object.prototype.propertyIsEnumerable, Ia = (t, e, r) => e in t ? Th(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Rh = (t, e) => {
  for (var r in e || (e = {}))
    Ah.call(e, r) && Ia(t, r, e[r]);
  if (Da)
    for (var r of Da(e))
      Nh.call(e, r) && Ia(t, r, e[r]);
  return t;
};
const lo = "https://explorer-api.walletconnect.com", ho = "wcm", fo = "js-2.6.2";
async function Mi(t, e) {
  const r = Rh({ sdkType: ho, sdkVersion: fo }, e), n = new URL(t, lo);
  return n.searchParams.append("projectId", Rn.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const nn = { async getDesktopListings(t) {
  return Mi("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Mi("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Mi("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Mi("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${lo}/w3m/v1/getWalletImage/${t}?projectId=${Rn.state.projectId}&sdkType=${ho}&sdkVersion=${fo}`;
}, getAssetImageUrl(t) {
  return `${lo}/w3m/v1/getAssetImage/${t}?projectId=${Rn.state.projectId}&sdkType=${ho}&sdkVersion=${fo}`;
} };
var Ph = Object.defineProperty, Oa = Object.getOwnPropertySymbols, Lh = Object.prototype.hasOwnProperty, Fh = Object.prototype.propertyIsEnumerable, Ca = (t, e, r) => e in t ? Ph(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uh = (t, e) => {
  for (var r in e || (e = {}))
    Lh.call(e, r) && Ca(t, r, e[r]);
  if (Oa)
    for (var r of Oa(e))
      Fh.call(e, r) && Ca(t, r, e[r]);
  return t;
};
const Ta = jt.isMobile(), Sr = Jr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), M_ = { state: Sr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Rn.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Sr.recomendedWallets;
  if (jt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await nn.getAllListings(r), i = Object.values(n);
    i.sort((s, c) => {
      const o = t.indexOf(s.id), u = t.indexOf(c.id);
      return o - u;
    }), Sr.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = pr.state, i = r == null ? void 0 : r.join(","), s = jt.isArray(e), c = { page: 1, sdks: n ? "auth_v1" : void 0, entries: jt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: o } = Ta ? await nn.getMobileListings(c) : await nn.getDesktopListings(c);
    Sr.recomendedWallets = Object.values(o);
  }
  return Sr.recomendedWallets;
}, async getWallets(t) {
  const e = Uh({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Rn.state, { recomendedWallets: i } = Sr;
  if (n === "ALL")
    return Sr.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : jt.isArray(r) && (e.excludedIds = r.join(",")), jt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), pr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: c } = t, { listings: o, total: u } = Ta ? await nn.getMobileListings(e) : await nn.getDesktopListings(e), h = Object.values(o), f = c ? "search" : "wallets";
  return Sr[f] = { listings: [...Sr[f].listings, ...h], total: u, page: s ?? 1 }, { listings: h, total: u };
}, getWalletImageUrl(t) {
  return nn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return nn.getAssetImageUrl(t);
}, resetSearch() {
  Sr.search = { listings: [], total: 0, page: 1 };
} }, xn = Jr({ open: !1 }), qs = { state: xn, subscribe(t) {
  return mn(xn, () => t(xn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = pr.state;
    if (jt.removeWalletConnectDeepLink(), pr.setWalletConnectUri(t == null ? void 0 : t.uri), pr.setChains(t == null ? void 0 : t.chains), gu.reset("ConnectWallet"), r && n)
      xn.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = pr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), xn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  xn.open = !1;
} };
var Mh = Object.defineProperty, Aa = Object.getOwnPropertySymbols, jh = Object.prototype.hasOwnProperty, $h = Object.prototype.propertyIsEnumerable, Na = (t, e, r) => e in t ? Mh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kh = (t, e) => {
  for (var r in e || (e = {}))
    jh.call(e, r) && Na(t, r, e[r]);
  if (Aa)
    for (var r of Aa(e))
      $h.call(e, r) && Na(t, r, e[r]);
  return t;
};
function zh() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Vn = Jr({ themeMode: zh() ? "dark" : "light" }), Ra = { state: Vn, subscribe(t) {
  return mn(Vn, () => t(Vn));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Vn.themeMode = e), r && (Vn.themeVariables = kh({}, r));
} }, sn = Jr({ open: !1, message: "", variant: "success" }), j_ = { state: sn, subscribe(t) {
  return mn(sn, () => t(sn));
}, openToast(t, e) {
  sn.open = !0, sn.message = t, sn.variant = e;
}, closeToast() {
  sn.open = !1;
} };
let qh = class {
  constructor(e) {
    this.openModal = qs.open, this.closeModal = qs.close, this.subscribeModal = qs.subscribe, this.setTheme = Ra.setThemeConfig, Ra.setThemeConfig(e), Rn.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-55e051dc.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), pr.setIsUiLoaded(!0);
    }
  }
};
var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function qo(t) {
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
var Bo = { exports: {} }, Tn = typeof Reflect == "object" ? Reflect : null, Pa = Tn && typeof Tn.apply == "function" ? Tn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Vi;
Tn && typeof Tn.ownKeys == "function" ? Vi = Tn.ownKeys : Object.getOwnPropertySymbols ? Vi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Vi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Bh(t) {
  console && console.warn && console.warn(t);
}
var yu = Number.isNaN || function(e) {
  return e !== e;
};
function Ye() {
  Ye.init.call(this);
}
Bo.exports = Ye;
Bo.exports.once = Wh;
Ye.EventEmitter = Ye;
Ye.prototype._events = void 0;
Ye.prototype._eventsCount = 0;
Ye.prototype._maxListeners = void 0;
var La = 10;
function fs(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ye, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return La;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || yu(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    La = t;
  }
});
Ye.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ye.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || yu(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function mu(t) {
  return t._maxListeners === void 0 ? Ye.defaultMaxListeners : t._maxListeners;
}
Ye.prototype.getMaxListeners = function() {
  return mu(this);
};
Ye.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = e === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var c;
    if (r.length > 0 && (c = r[0]), c instanceof Error)
      throw c;
    var o = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
    throw o.context = c, o;
  }
  var u = s[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Pa(u, this, r);
  else
    for (var h = u.length, f = Eu(u, h), n = 0; n < h; ++n)
      Pa(f[n], this, r);
  return !0;
};
function vu(t, e, r, n) {
  var i, s, c;
  if (fs(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), c = s[e]), c === void 0)
    c = s[e] = r, ++t._eventsCount;
  else if (typeof c == "function" ? c = s[e] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), i = mu(t), i > 0 && c.length > i && !c.warned) {
    c.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = c.length, Bh(o);
  }
  return t;
}
Ye.prototype.addListener = function(e, r) {
  return vu(this, e, r, !1);
};
Ye.prototype.on = Ye.prototype.addListener;
Ye.prototype.prependListener = function(e, r) {
  return vu(this, e, r, !0);
};
function Vh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function bu(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = Vh.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Ye.prototype.once = function(e, r) {
  return fs(r), this.on(e, bu(this, e, r)), this;
};
Ye.prototype.prependOnceListener = function(e, r) {
  return fs(r), this.prependListener(e, bu(this, e, r)), this;
};
Ye.prototype.removeListener = function(e, r) {
  var n, i, s, c, o;
  if (fs(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, c = n.length - 1; c >= 0; c--)
      if (n[c] === r || n[c].listener === r) {
        o = n[c].listener, s = c;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Kh(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Ye.prototype.off = Ye.prototype.removeListener;
Ye.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), c;
    for (i = 0; i < s.length; ++i)
      c = s[i], c !== "removeListener" && this.removeAllListeners(c);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function _u(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Hh(i) : Eu(i, i.length);
}
Ye.prototype.listeners = function(e) {
  return _u(this, e, !0);
};
Ye.prototype.rawListeners = function(e) {
  return _u(this, e, !1);
};
Ye.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : wu.call(t, e);
};
Ye.prototype.listenerCount = wu;
function wu(t) {
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
Ye.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Vi(this._events) : [];
};
function Eu(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Kh(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Hh(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Wh(t, e) {
  return new Promise(function(r, n) {
    function i(c) {
      t.removeListener(e, s), n(c);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Su(t, e, s, { once: !0 }), e !== "error" && Gh(t, i, { once: !0 });
  });
}
function Gh(t, e, r) {
  typeof t.on == "function" && Su(t, "error", e, r);
}
function Su(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var cr = Bo.exports;
const Vo = /* @__PURE__ */ _i(cr);
var ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function $i(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var xu = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(t, e) {
  (function(r) {
    t.exports = r();
  })(function() {
    return function r(n, i, s) {
      function c(h, f) {
        if (!i[h]) {
          if (!n[h]) {
            var d = typeof $i == "function" && $i;
            if (!f && d)
              return d(h, !0);
            if (o)
              return o(h, !0);
            var y = new Error("Cannot find module '" + h + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var _ = i[h] = { exports: {} };
          n[h][0].call(_.exports, function(S) {
            var C = n[h][1][S];
            return c(C || S);
          }, _, _.exports, r, n, i, s);
        }
        return i[h].exports;
      }
      for (var o = typeof $i == "function" && $i, u = 0; u < s.length; u++)
        c(s[u]);
      return c;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, o;
        if (c) {
          var u = 0, h = new c(S), f = s.document.createTextNode("");
          h.observe(f, { characterData: !0 }), o = function() {
            f.data = u = ++u % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = S, o = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? o = function() {
            var D = s.document.createElement("script");
            D.onreadystatechange = function() {
              S(), D.onreadystatechange = null, D.parentNode.removeChild(D), D = null;
            }, s.document.documentElement.appendChild(D);
          } : o = function() {
            setTimeout(S, 0);
          };
        var y, _ = [];
        function S() {
          y = !0;
          for (var D, z, w = _.length; w; ) {
            for (z = _, _ = [], D = -1; ++D < w; )
              z[D]();
            w = _.length;
          }
          y = !1;
        }
        n.exports = C;
        function C(D) {
          _.push(D) === 1 && !y && o();
        }
      }).call(this, typeof ji < "u" ? ji : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function c() {
      }
      var o = {}, u = ["REJECTED"], h = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(v) {
        if (typeof v != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, v !== c && C(this, v);
      }
      d.prototype.catch = function(v) {
        return this.then(null, v);
      }, d.prototype.then = function(v, p) {
        if (typeof v != "function" && this.state === h || typeof p != "function" && this.state === u)
          return this;
        var a = new this.constructor(c);
        if (this.state !== f) {
          var g = this.state === h ? v : p;
          _(a, g, this.outcome);
        } else
          this.queue.push(new y(a, v, p));
        return a;
      };
      function y(v, p, a) {
        this.promise = v, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof a == "function" && (this.onRejected = a, this.callRejected = this.otherCallRejected);
      }
      y.prototype.callFulfilled = function(v) {
        o.resolve(this.promise, v);
      }, y.prototype.otherCallFulfilled = function(v) {
        _(this.promise, this.onFulfilled, v);
      }, y.prototype.callRejected = function(v) {
        o.reject(this.promise, v);
      }, y.prototype.otherCallRejected = function(v) {
        _(this.promise, this.onRejected, v);
      };
      function _(v, p, a) {
        s(function() {
          var g;
          try {
            g = p(a);
          } catch (R) {
            return o.reject(v, R);
          }
          g === v ? o.reject(v, new TypeError("Cannot resolve promise with itself")) : o.resolve(v, g);
        });
      }
      o.resolve = function(v, p) {
        var a = D(S, p);
        if (a.status === "error")
          return o.reject(v, a.value);
        var g = a.value;
        if (g)
          C(v, g);
        else {
          v.state = h, v.outcome = p;
          for (var R = -1, F = v.queue.length; ++R < F; )
            v.queue[R].callFulfilled(p);
        }
        return v;
      }, o.reject = function(v, p) {
        v.state = u, v.outcome = p;
        for (var a = -1, g = v.queue.length; ++a < g; )
          v.queue[a].callRejected(p);
        return v;
      };
      function S(v) {
        var p = v && v.then;
        if (v && (typeof v == "object" || typeof v == "function") && typeof p == "function")
          return function() {
            p.apply(v, arguments);
          };
      }
      function C(v, p) {
        var a = !1;
        function g(W) {
          a || (a = !0, o.reject(v, W));
        }
        function R(W) {
          a || (a = !0, o.resolve(v, W));
        }
        function F() {
          p(R, g);
        }
        var q = D(F);
        q.status === "error" && g(q.value);
      }
      function D(v, p) {
        var a = {};
        try {
          a.value = v(p), a.status = "success";
        } catch (g) {
          a.status = "error", a.value = g;
        }
        return a;
      }
      d.resolve = z;
      function z(v) {
        return v instanceof this ? v : o.resolve(new this(c), v);
      }
      d.reject = w;
      function w(v) {
        var p = new this(c);
        return o.reject(p, v);
      }
      d.all = O;
      function O(v) {
        var p = this;
        if (Object.prototype.toString.call(v) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var a = v.length, g = !1;
        if (!a)
          return this.resolve([]);
        for (var R = new Array(a), F = 0, q = -1, W = new this(c); ++q < a; )
          ie(v[q], q);
        return W;
        function ie(A, j) {
          p.resolve(A).then(ne, function(G) {
            g || (g = !0, o.reject(W, G));
          });
          function ne(G) {
            R[j] = G, ++F === a && !g && (g = !0, o.resolve(W, R));
          }
        }
      }
      d.race = b;
      function b(v) {
        var p = this;
        if (Object.prototype.toString.call(v) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var a = v.length, g = !1;
        if (!a)
          return this.resolve([]);
        for (var R = -1, F = new this(c); ++R < a; )
          q(v[R]);
        return F;
        function q(W) {
          p.resolve(W).then(function(ie) {
            g || (g = !0, o.resolve(F, ie));
          }, function(ie) {
            g || (g = !0, o.reject(F, ie));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof ji < "u" ? ji : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
        return typeof m;
      } : function(m) {
        return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
      };
      function c(m, I) {
        if (!(m instanceof I))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var u = o();
      function h() {
        try {
          if (!u || !u.open)
            return !1;
          var m = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), I = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!m || I) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(m, I) {
        m = m || [], I = I || {};
        try {
          return new Blob(m, I);
        } catch (M) {
          if (M.name !== "TypeError")
            throw M;
          for (var x = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, U = new x(), N = 0; N < m.length; N += 1)
            U.append(m[N]);
          return U.getBlob(I.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function y(m, I) {
        I && m.then(function(x) {
          I(null, x);
        }, function(x) {
          I(x);
        });
      }
      function _(m, I, x) {
        typeof I == "function" && m.then(I), typeof x == "function" && m.catch(x);
      }
      function S(m) {
        return typeof m != "string" && (console.warn(m + " used as a key, but it is not a string."), m = String(m)), m;
      }
      function C() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var D = "local-forage-detect-blob-support", z = void 0, w = {}, O = Object.prototype.toString, b = "readonly", v = "readwrite";
      function p(m) {
        for (var I = m.length, x = new ArrayBuffer(I), U = new Uint8Array(x), N = 0; N < I; N++)
          U[N] = m.charCodeAt(N);
        return x;
      }
      function a(m) {
        return new d(function(I) {
          var x = m.transaction(D, v), U = f([""]);
          x.objectStore(D).put(U, "key"), x.onabort = function(N) {
            N.preventDefault(), N.stopPropagation(), I(!1);
          }, x.oncomplete = function() {
            var N = navigator.userAgent.match(/Chrome\/(\d+)/), M = navigator.userAgent.match(/Edge\//);
            I(M || !N || parseInt(N[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function g(m) {
        return typeof z == "boolean" ? d.resolve(z) : a(m).then(function(I) {
          return z = I, z;
        });
      }
      function R(m) {
        var I = w[m.name], x = {};
        x.promise = new d(function(U, N) {
          x.resolve = U, x.reject = N;
        }), I.deferredOperations.push(x), I.dbReady ? I.dbReady = I.dbReady.then(function() {
          return x.promise;
        }) : I.dbReady = x.promise;
      }
      function F(m) {
        var I = w[m.name], x = I.deferredOperations.pop();
        if (x)
          return x.resolve(), x.promise;
      }
      function q(m, I) {
        var x = w[m.name], U = x.deferredOperations.pop();
        if (U)
          return U.reject(I), U.promise;
      }
      function W(m, I) {
        return new d(function(x, U) {
          if (w[m.name] = w[m.name] || ve(), m.db)
            if (I)
              R(m), m.db.close();
            else
              return x(m.db);
          var N = [m.name];
          I && N.push(m.version);
          var M = u.open.apply(u, N);
          I && (M.onupgradeneeded = function(B) {
            var J = M.result;
            try {
              J.createObjectStore(m.storeName), B.oldVersion <= 1 && J.createObjectStore(D);
            } catch (ee) {
              if (ee.name === "ConstraintError")
                console.warn('The database "' + m.name + '" has been upgraded from version ' + B.oldVersion + " to version " + B.newVersion + ', but the storage "' + m.storeName + '" already exists.');
              else
                throw ee;
            }
          }), M.onerror = function(B) {
            B.preventDefault(), U(M.error);
          }, M.onsuccess = function() {
            var B = M.result;
            B.onversionchange = function(J) {
              J.target.close();
            }, x(B), F(m);
          };
        });
      }
      function ie(m) {
        return W(m, !1);
      }
      function A(m) {
        return W(m, !0);
      }
      function j(m, I) {
        if (!m.db)
          return !0;
        var x = !m.db.objectStoreNames.contains(m.storeName), U = m.version < m.db.version, N = m.version > m.db.version;
        if (U && (m.version !== I && console.warn('The database "' + m.name + `" can't be downgraded from version ` + m.db.version + " to version " + m.version + "."), m.version = m.db.version), N || x) {
          if (x) {
            var M = m.db.version + 1;
            M > m.version && (m.version = M);
          }
          return !0;
        }
        return !1;
      }
      function ne(m) {
        return new d(function(I, x) {
          var U = new FileReader();
          U.onerror = x, U.onloadend = function(N) {
            var M = btoa(N.target.result || "");
            I({ __local_forage_encoded_blob: !0, data: M, type: m.type });
          }, U.readAsBinaryString(m);
        });
      }
      function G(m) {
        var I = p(atob(m.data));
        return f([I], { type: m.type });
      }
      function K(m) {
        return m && m.__local_forage_encoded_blob;
      }
      function Z(m) {
        var I = this, x = I._initReady().then(function() {
          var U = w[I._dbInfo.name];
          if (U && U.dbReady)
            return U.dbReady;
        });
        return _(x, m, m), x;
      }
      function V(m) {
        R(m);
        for (var I = w[m.name], x = I.forages, U = 0; U < x.length; U++) {
          var N = x[U];
          N._dbInfo.db && (N._dbInfo.db.close(), N._dbInfo.db = null);
        }
        return m.db = null, ie(m).then(function(M) {
          return m.db = M, j(m) ? A(m) : M;
        }).then(function(M) {
          m.db = I.db = M;
          for (var B = 0; B < x.length; B++)
            x[B]._dbInfo.db = M;
        }).catch(function(M) {
          throw q(m, M), M;
        });
      }
      function Y(m, I, x, U) {
        U === void 0 && (U = 1);
        try {
          var N = m.db.transaction(m.storeName, I);
          x(null, N);
        } catch (M) {
          if (U > 0 && (!m.db || M.name === "InvalidStateError" || M.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!m.db || M.name === "NotFoundError" && !m.db.objectStoreNames.contains(m.storeName) && m.version <= m.db.version)
                return m.db && (m.version = m.db.version + 1), A(m);
            }).then(function() {
              return V(m).then(function() {
                Y(m, I, x, U - 1);
              });
            }).catch(x);
          x(M);
        }
      }
      function ve() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function te(m) {
        var I = this, x = { db: null };
        if (m)
          for (var U in m)
            x[U] = m[U];
        var N = w[x.name];
        N || (N = ve(), w[x.name] = N), N.forages.push(I), I._initReady || (I._initReady = I.ready, I.ready = Z);
        var M = [];
        function B() {
          return d.resolve();
        }
        for (var J = 0; J < N.forages.length; J++) {
          var ee = N.forages[J];
          ee !== I && M.push(ee._initReady().catch(B));
        }
        var X = N.forages.slice(0);
        return d.all(M).then(function() {
          return x.db = N.db, ie(x);
        }).then(function(Q) {
          return x.db = Q, j(x, I._defaultConfig.version) ? A(x) : Q;
        }).then(function(Q) {
          x.db = N.db = Q, I._dbInfo = x;
          for (var de = 0; de < X.length; de++) {
            var Pe = X[de];
            Pe !== I && (Pe._dbInfo.db = x.db, Pe._dbInfo.version = x.version);
          }
        });
      }
      function ge(m, I) {
        var x = this;
        m = S(m);
        var U = new d(function(N, M) {
          x.ready().then(function() {
            Y(x._dbInfo, b, function(B, J) {
              if (B)
                return M(B);
              try {
                var ee = J.objectStore(x._dbInfo.storeName), X = ee.get(m);
                X.onsuccess = function() {
                  var Q = X.result;
                  Q === void 0 && (Q = null), K(Q) && (Q = G(Q)), N(Q);
                }, X.onerror = function() {
                  M(X.error);
                };
              } catch (Q) {
                M(Q);
              }
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function ue(m, I) {
        var x = this, U = new d(function(N, M) {
          x.ready().then(function() {
            Y(x._dbInfo, b, function(B, J) {
              if (B)
                return M(B);
              try {
                var ee = J.objectStore(x._dbInfo.storeName), X = ee.openCursor(), Q = 1;
                X.onsuccess = function() {
                  var de = X.result;
                  if (de) {
                    var Pe = de.value;
                    K(Pe) && (Pe = G(Pe));
                    var Ze = m(Pe, de.key, Q++);
                    Ze !== void 0 ? N(Ze) : de.continue();
                  } else
                    N();
                }, X.onerror = function() {
                  M(X.error);
                };
              } catch (de) {
                M(de);
              }
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function ye(m, I, x) {
        var U = this;
        m = S(m);
        var N = new d(function(M, B) {
          var J;
          U.ready().then(function() {
            return J = U._dbInfo, O.call(I) === "[object Blob]" ? g(J.db).then(function(ee) {
              return ee ? I : ne(I);
            }) : I;
          }).then(function(ee) {
            Y(U._dbInfo, v, function(X, Q) {
              if (X)
                return B(X);
              try {
                var de = Q.objectStore(U._dbInfo.storeName);
                ee === null && (ee = void 0);
                var Pe = de.put(ee, m);
                Q.oncomplete = function() {
                  ee === void 0 && (ee = null), M(ee);
                }, Q.onabort = Q.onerror = function() {
                  var Ze = Pe.error ? Pe.error : Pe.transaction.error;
                  B(Ze);
                };
              } catch (Ze) {
                B(Ze);
              }
            });
          }).catch(B);
        });
        return y(N, x), N;
      }
      function k(m, I) {
        var x = this;
        m = S(m);
        var U = new d(function(N, M) {
          x.ready().then(function() {
            Y(x._dbInfo, v, function(B, J) {
              if (B)
                return M(B);
              try {
                var ee = J.objectStore(x._dbInfo.storeName), X = ee.delete(m);
                J.oncomplete = function() {
                  N();
                }, J.onerror = function() {
                  M(X.error);
                }, J.onabort = function() {
                  var Q = X.error ? X.error : X.transaction.error;
                  M(Q);
                };
              } catch (Q) {
                M(Q);
              }
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function $(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            Y(I._dbInfo, v, function(M, B) {
              if (M)
                return N(M);
              try {
                var J = B.objectStore(I._dbInfo.storeName), ee = J.clear();
                B.oncomplete = function() {
                  U();
                }, B.onabort = B.onerror = function() {
                  var X = ee.error ? ee.error : ee.transaction.error;
                  N(X);
                };
              } catch (X) {
                N(X);
              }
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function P(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            Y(I._dbInfo, b, function(M, B) {
              if (M)
                return N(M);
              try {
                var J = B.objectStore(I._dbInfo.storeName), ee = J.count();
                ee.onsuccess = function() {
                  U(ee.result);
                }, ee.onerror = function() {
                  N(ee.error);
                };
              } catch (X) {
                N(X);
              }
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function l(m, I) {
        var x = this, U = new d(function(N, M) {
          if (m < 0) {
            N(null);
            return;
          }
          x.ready().then(function() {
            Y(x._dbInfo, b, function(B, J) {
              if (B)
                return M(B);
              try {
                var ee = J.objectStore(x._dbInfo.storeName), X = !1, Q = ee.openKeyCursor();
                Q.onsuccess = function() {
                  var de = Q.result;
                  if (!de) {
                    N(null);
                    return;
                  }
                  m === 0 || X ? N(de.key) : (X = !0, de.advance(m));
                }, Q.onerror = function() {
                  M(Q.error);
                };
              } catch (de) {
                M(de);
              }
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function T(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            Y(I._dbInfo, b, function(M, B) {
              if (M)
                return N(M);
              try {
                var J = B.objectStore(I._dbInfo.storeName), ee = J.openKeyCursor(), X = [];
                ee.onsuccess = function() {
                  var Q = ee.result;
                  if (!Q) {
                    U(X);
                    return;
                  }
                  X.push(Q.key), Q.continue();
                }, ee.onerror = function() {
                  N(ee.error);
                };
              } catch (Q) {
                N(Q);
              }
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function se(m, I) {
        I = C.apply(this, arguments);
        var x = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || x.name, m.storeName = m.storeName || x.storeName);
        var U = this, N;
        if (!m.name)
          N = d.reject("Invalid arguments");
        else {
          var M = m.name === x.name && U._dbInfo.db, B = M ? d.resolve(U._dbInfo.db) : ie(m).then(function(J) {
            var ee = w[m.name], X = ee.forages;
            ee.db = J;
            for (var Q = 0; Q < X.length; Q++)
              X[Q]._dbInfo.db = J;
            return J;
          });
          m.storeName ? N = B.then(function(J) {
            if (J.objectStoreNames.contains(m.storeName)) {
              var ee = J.version + 1;
              R(m);
              var X = w[m.name], Q = X.forages;
              J.close();
              for (var de = 0; de < Q.length; de++) {
                var Pe = Q[de];
                Pe._dbInfo.db = null, Pe._dbInfo.version = ee;
              }
              var Ze = new d(function(He, tt) {
                var Ge = u.open(m.name, ee);
                Ge.onerror = function(Zt) {
                  var qn = Ge.result;
                  qn.close(), tt(Zt);
                }, Ge.onupgradeneeded = function() {
                  var Zt = Ge.result;
                  Zt.deleteObjectStore(m.storeName);
                }, Ge.onsuccess = function() {
                  var Zt = Ge.result;
                  Zt.close(), He(Zt);
                };
              });
              return Ze.then(function(He) {
                X.db = He;
                for (var tt = 0; tt < Q.length; tt++) {
                  var Ge = Q[tt];
                  Ge._dbInfo.db = He, F(Ge._dbInfo);
                }
              }).catch(function(He) {
                throw (q(m, He) || d.resolve()).catch(function() {
                }), He;
              });
            }
          }) : N = B.then(function(J) {
            R(m);
            var ee = w[m.name], X = ee.forages;
            J.close();
            for (var Q = 0; Q < X.length; Q++) {
              var de = X[Q];
              de._dbInfo.db = null;
            }
            var Pe = new d(function(Ze, He) {
              var tt = u.deleteDatabase(m.name);
              tt.onerror = function() {
                var Ge = tt.result;
                Ge && Ge.close(), He(tt.error);
              }, tt.onblocked = function() {
                console.warn('dropInstance blocked for database "' + m.name + '" until all open connections are closed');
              }, tt.onsuccess = function() {
                var Ge = tt.result;
                Ge && Ge.close(), Ze(Ge);
              };
            });
            return Pe.then(function(Ze) {
              ee.db = Ze;
              for (var He = 0; He < X.length; He++) {
                var tt = X[He];
                F(tt._dbInfo);
              }
            }).catch(function(Ze) {
              throw (q(m, Ze) || d.resolve()).catch(function() {
              }), Ze;
            });
          });
        }
        return y(N, I), N;
      }
      var ae = { _driver: "asyncStorage", _initStorage: te, _support: h(), iterate: ue, getItem: ge, setItem: ye, removeItem: k, clear: $, length: P, key: l, keys: T, dropInstance: se };
      function Fe() {
        return typeof openDatabase == "function";
      }
      var Se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", je = "~~local_forage_type~", ze = /^~~local_forage_type~([^~]+)~/, Je = "__lfsc__:", Qe = Je.length, Ue = "arbf", Ne = "blob", Re = "si08", Te = "ui08", Ie = "uic8", xe = "si16", Ee = "si32", be = "ur16", Ae = "ui32", Me = "fl32", _e = "fl64", $e = Qe + Ue.length, ke = Object.prototype.toString;
      function Be(m) {
        var I = m.length * 0.75, x = m.length, U, N = 0, M, B, J, ee;
        m[m.length - 1] === "=" && (I--, m[m.length - 2] === "=" && I--);
        var X = new ArrayBuffer(I), Q = new Uint8Array(X);
        for (U = 0; U < x; U += 4)
          M = Se.indexOf(m[U]), B = Se.indexOf(m[U + 1]), J = Se.indexOf(m[U + 2]), ee = Se.indexOf(m[U + 3]), Q[N++] = M << 2 | B >> 4, Q[N++] = (B & 15) << 4 | J >> 2, Q[N++] = (J & 3) << 6 | ee & 63;
        return X;
      }
      function qe(m) {
        var I = new Uint8Array(m), x = "", U;
        for (U = 0; U < I.length; U += 3)
          x += Se[I[U] >> 2], x += Se[(I[U] & 3) << 4 | I[U + 1] >> 4], x += Se[(I[U + 1] & 15) << 2 | I[U + 2] >> 6], x += Se[I[U + 2] & 63];
        return I.length % 3 === 2 ? x = x.substring(0, x.length - 1) + "=" : I.length % 3 === 1 && (x = x.substring(0, x.length - 2) + "=="), x;
      }
      function Ve(m, I) {
        var x = "";
        if (m && (x = ke.call(m)), m && (x === "[object ArrayBuffer]" || m.buffer && ke.call(m.buffer) === "[object ArrayBuffer]")) {
          var U, N = Je;
          m instanceof ArrayBuffer ? (U = m, N += Ue) : (U = m.buffer, x === "[object Int8Array]" ? N += Re : x === "[object Uint8Array]" ? N += Te : x === "[object Uint8ClampedArray]" ? N += Ie : x === "[object Int16Array]" ? N += xe : x === "[object Uint16Array]" ? N += be : x === "[object Int32Array]" ? N += Ee : x === "[object Uint32Array]" ? N += Ae : x === "[object Float32Array]" ? N += Me : x === "[object Float64Array]" ? N += _e : I(new Error("Failed to get type for BinaryArray"))), I(N + qe(U));
        } else if (x === "[object Blob]") {
          var M = new FileReader();
          M.onload = function() {
            var B = je + m.type + "~" + qe(this.result);
            I(Je + Ne + B);
          }, M.readAsArrayBuffer(m);
        } else
          try {
            I(JSON.stringify(m));
          } catch (B) {
            console.error("Couldn't convert value into a JSON string: ", m), I(null, B);
          }
      }
      function Xt(m) {
        if (m.substring(0, Qe) !== Je)
          return JSON.parse(m);
        var I = m.substring($e), x = m.substring(Qe, $e), U;
        if (x === Ne && ze.test(I)) {
          var N = I.match(ze);
          U = N[1], I = I.substring(N[0].length);
        }
        var M = Be(I);
        switch (x) {
          case Ue:
            return M;
          case Ne:
            return f([M], { type: U });
          case Re:
            return new Int8Array(M);
          case Te:
            return new Uint8Array(M);
          case Ie:
            return new Uint8ClampedArray(M);
          case xe:
            return new Int16Array(M);
          case be:
            return new Uint16Array(M);
          case Ee:
            return new Int32Array(M);
          case Ae:
            return new Uint32Array(M);
          case Me:
            return new Float32Array(M);
          case _e:
            return new Float64Array(M);
          default:
            throw new Error("Unkown type: " + x);
        }
      }
      var Gt = { serialize: Ve, deserialize: Xt, stringToBuffer: Be, bufferToString: qe };
      function ur(m, I, x, U) {
        m.executeSql("CREATE TABLE IF NOT EXISTS " + I.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], x, U);
      }
      function zt(m) {
        var I = this, x = { db: null };
        if (m)
          for (var U in m)
            x[U] = typeof m[U] != "string" ? m[U].toString() : m[U];
        var N = new d(function(M, B) {
          try {
            x.db = openDatabase(x.name, String(x.version), x.description, x.size);
          } catch (J) {
            return B(J);
          }
          x.db.transaction(function(J) {
            ur(J, x, function() {
              I._dbInfo = x, M();
            }, function(ee, X) {
              B(X);
            });
          }, B);
        });
        return x.serializer = Gt, N;
      }
      function Rt(m, I, x, U, N, M) {
        m.executeSql(x, U, N, function(B, J) {
          J.code === J.SYNTAX_ERR ? B.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [I.storeName], function(ee, X) {
            X.rows.length ? M(ee, J) : ur(ee, I, function() {
              ee.executeSql(x, U, N, M);
            }, M);
          }, M) : M(B, J);
        }, M);
      }
      function Xr(m, I) {
        var x = this;
        m = S(m);
        var U = new d(function(N, M) {
          x.ready().then(function() {
            var B = x._dbInfo;
            B.db.transaction(function(J) {
              Rt(J, B, "SELECT * FROM " + B.storeName + " WHERE key = ? LIMIT 1", [m], function(ee, X) {
                var Q = X.rows.length ? X.rows.item(0).value : null;
                Q && (Q = B.serializer.deserialize(Q)), N(Q);
              }, function(ee, X) {
                M(X);
              });
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function wn(m, I) {
        var x = this, U = new d(function(N, M) {
          x.ready().then(function() {
            var B = x._dbInfo;
            B.db.transaction(function(J) {
              Rt(J, B, "SELECT * FROM " + B.storeName, [], function(ee, X) {
                for (var Q = X.rows, de = Q.length, Pe = 0; Pe < de; Pe++) {
                  var Ze = Q.item(Pe), He = Ze.value;
                  if (He && (He = B.serializer.deserialize(He)), He = m(He, Ze.key, Pe + 1), He !== void 0) {
                    N(He);
                    return;
                  }
                }
                N();
              }, function(ee, X) {
                M(X);
              });
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function at(m, I, x, U) {
        var N = this;
        m = S(m);
        var M = new d(function(B, J) {
          N.ready().then(function() {
            I === void 0 && (I = null);
            var ee = I, X = N._dbInfo;
            X.serializer.serialize(I, function(Q, de) {
              de ? J(de) : X.db.transaction(function(Pe) {
                Rt(Pe, X, "INSERT OR REPLACE INTO " + X.storeName + " (key, value) VALUES (?, ?)", [m, Q], function() {
                  B(ee);
                }, function(Ze, He) {
                  J(He);
                });
              }, function(Pe) {
                if (Pe.code === Pe.QUOTA_ERR) {
                  if (U > 0) {
                    B(at.apply(N, [m, ee, x, U - 1]));
                    return;
                  }
                  J(Pe);
                }
              });
            });
          }).catch(J);
        });
        return y(M, x), M;
      }
      function nt(m, I, x) {
        return at.apply(this, [m, I, x, 1]);
      }
      function lt(m, I) {
        var x = this;
        m = S(m);
        var U = new d(function(N, M) {
          x.ready().then(function() {
            var B = x._dbInfo;
            B.db.transaction(function(J) {
              Rt(J, B, "DELETE FROM " + B.storeName + " WHERE key = ?", [m], function() {
                N();
              }, function(ee, X) {
                M(X);
              });
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function ht(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            var M = I._dbInfo;
            M.db.transaction(function(B) {
              Rt(B, M, "DELETE FROM " + M.storeName, [], function() {
                U();
              }, function(J, ee) {
                N(ee);
              });
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function ft(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            var M = I._dbInfo;
            M.db.transaction(function(B) {
              Rt(B, M, "SELECT COUNT(key) as c FROM " + M.storeName, [], function(J, ee) {
                var X = ee.rows.item(0).c;
                U(X);
              }, function(J, ee) {
                N(ee);
              });
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function it(m, I) {
        var x = this, U = new d(function(N, M) {
          x.ready().then(function() {
            var B = x._dbInfo;
            B.db.transaction(function(J) {
              Rt(J, B, "SELECT key FROM " + B.storeName + " WHERE id = ? LIMIT 1", [m + 1], function(ee, X) {
                var Q = X.rows.length ? X.rows.item(0).key : null;
                N(Q);
              }, function(ee, X) {
                M(X);
              });
            });
          }).catch(M);
        });
        return y(U, I), U;
      }
      function yt(m) {
        var I = this, x = new d(function(U, N) {
          I.ready().then(function() {
            var M = I._dbInfo;
            M.db.transaction(function(B) {
              Rt(B, M, "SELECT key FROM " + M.storeName, [], function(J, ee) {
                for (var X = [], Q = 0; Q < ee.rows.length; Q++)
                  X.push(ee.rows.item(Q).key);
                U(X);
              }, function(J, ee) {
                N(ee);
              });
            });
          }).catch(N);
        });
        return y(x, m), x;
      }
      function mt(m) {
        return new d(function(I, x) {
          m.transaction(function(U) {
            U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(N, M) {
              for (var B = [], J = 0; J < M.rows.length; J++)
                B.push(M.rows.item(J).name);
              I({ db: m, storeNames: B });
            }, function(N, M) {
              x(M);
            });
          }, function(U) {
            x(U);
          });
        });
      }
      function vt(m, I) {
        I = C.apply(this, arguments);
        var x = this.config();
        m = typeof m != "function" && m || {}, m.name || (m.name = m.name || x.name, m.storeName = m.storeName || x.storeName);
        var U = this, N;
        return m.name ? N = new d(function(M) {
          var B;
          m.name === x.name ? B = U._dbInfo.db : B = openDatabase(m.name, "", "", 0), m.storeName ? M({ db: B, storeNames: [m.storeName] }) : M(mt(B));
        }).then(function(M) {
          return new d(function(B, J) {
            M.db.transaction(function(ee) {
              function X(Ze) {
                return new d(function(He, tt) {
                  ee.executeSql("DROP TABLE IF EXISTS " + Ze, [], function() {
                    He();
                  }, function(Ge, Zt) {
                    tt(Zt);
                  });
                });
              }
              for (var Q = [], de = 0, Pe = M.storeNames.length; de < Pe; de++)
                Q.push(X(M.storeNames[de]));
              d.all(Q).then(function() {
                B();
              }).catch(function(Ze) {
                J(Ze);
              });
            }, function(ee) {
              J(ee);
            });
          });
        }) : N = d.reject("Invalid arguments"), y(N, I), N;
      }
      var bt = { _driver: "webSQLStorage", _initStorage: zt, _support: Fe(), iterate: wn, getItem: Xr, setItem: nt, removeItem: lt, clear: ht, length: ft, key: it, keys: yt, dropInstance: vt };
      function _t() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function dt(m, I) {
        var x = m.name + "/";
        return m.storeName !== I.storeName && (x += m.storeName + "/"), x;
      }
      function pt() {
        var m = "_localforage_support_test";
        try {
          return localStorage.setItem(m, !0), localStorage.removeItem(m), !1;
        } catch {
          return !0;
        }
      }
      function Xe() {
        return !pt() || localStorage.length > 0;
      }
      function wt(m) {
        var I = this, x = {};
        if (m)
          for (var U in m)
            x[U] = m[U];
        return x.keyPrefix = dt(m, I._defaultConfig), Xe() ? (I._dbInfo = x, x.serializer = Gt, d.resolve()) : d.reject();
      }
      function Et(m) {
        var I = this, x = I.ready().then(function() {
          for (var U = I._dbInfo.keyPrefix, N = localStorage.length - 1; N >= 0; N--) {
            var M = localStorage.key(N);
            M.indexOf(U) === 0 && localStorage.removeItem(M);
          }
        });
        return y(x, m), x;
      }
      function Is(m, I) {
        var x = this;
        m = S(m);
        var U = x.ready().then(function() {
          var N = x._dbInfo, M = localStorage.getItem(N.keyPrefix + m);
          return M && (M = N.serializer.deserialize(M)), M;
        });
        return y(U, I), U;
      }
      function Os(m, I) {
        var x = this, U = x.ready().then(function() {
          for (var N = x._dbInfo, M = N.keyPrefix, B = M.length, J = localStorage.length, ee = 1, X = 0; X < J; X++) {
            var Q = localStorage.key(X);
            if (Q.indexOf(M) === 0) {
              var de = localStorage.getItem(Q);
              if (de && (de = N.serializer.deserialize(de)), de = m(de, Q.substring(B), ee++), de !== void 0)
                return de;
            }
          }
        });
        return y(U, I), U;
      }
      function Cs(m, I) {
        var x = this, U = x.ready().then(function() {
          var N = x._dbInfo, M;
          try {
            M = localStorage.key(m);
          } catch {
            M = null;
          }
          return M && (M = M.substring(N.keyPrefix.length)), M;
        });
        return y(U, I), U;
      }
      function lr(m) {
        var I = this, x = I.ready().then(function() {
          for (var U = I._dbInfo, N = localStorage.length, M = [], B = 0; B < N; B++) {
            var J = localStorage.key(B);
            J.indexOf(U.keyPrefix) === 0 && M.push(J.substring(U.keyPrefix.length));
          }
          return M;
        });
        return y(x, m), x;
      }
      function Ts(m) {
        var I = this, x = I.keys().then(function(U) {
          return U.length;
        });
        return y(x, m), x;
      }
      function As(m, I) {
        var x = this;
        m = S(m);
        var U = x.ready().then(function() {
          var N = x._dbInfo;
          localStorage.removeItem(N.keyPrefix + m);
        });
        return y(U, I), U;
      }
      function Ns(m, I, x) {
        var U = this;
        m = S(m);
        var N = U.ready().then(function() {
          I === void 0 && (I = null);
          var M = I;
          return new d(function(B, J) {
            var ee = U._dbInfo;
            ee.serializer.serialize(I, function(X, Q) {
              if (Q)
                J(Q);
              else
                try {
                  localStorage.setItem(ee.keyPrefix + m, X), B(M);
                } catch (de) {
                  (de.name === "QuotaExceededError" || de.name === "NS_ERROR_DOM_QUOTA_REACHED") && J(de), J(de);
                }
            });
          });
        });
        return y(N, x), N;
      }
      function Rs(m, I) {
        if (I = C.apply(this, arguments), m = typeof m != "function" && m || {}, !m.name) {
          var x = this.config();
          m.name = m.name || x.name, m.storeName = m.storeName || x.storeName;
        }
        var U = this, N;
        return m.name ? N = new d(function(M) {
          m.storeName ? M(dt(m, U._defaultConfig)) : M(m.name + "/");
        }).then(function(M) {
          for (var B = localStorage.length - 1; B >= 0; B--) {
            var J = localStorage.key(B);
            J.indexOf(M) === 0 && localStorage.removeItem(J);
          }
        }) : N = d.reject("Invalid arguments"), y(N, I), N;
      }
      var Ps = { _driver: "localStorageWrapper", _initStorage: wt, _support: _t(), iterate: Os, getItem: Is, setItem: Ns, removeItem: As, clear: Et, length: Ts, key: Cs, keys: lr, dropInstance: Rs }, Pr = function(m, I) {
        return m === I || typeof m == "number" && typeof I == "number" && isNaN(m) && isNaN(I);
      }, Ls = function(m, I) {
        for (var x = m.length, U = 0; U < x; ) {
          if (Pr(m[U], I))
            return !0;
          U++;
        }
        return !1;
      }, Ti = Array.isArray || function(m) {
        return Object.prototype.toString.call(m) === "[object Array]";
      }, en = {}, Ai = {}, qr = { INDEXEDDB: ae, WEBSQL: bt, LOCALSTORAGE: Ps }, En = [qr.INDEXEDDB._driver, qr.WEBSQL._driver, qr.LOCALSTORAGE._driver], Sn = ["dropInstance"], kn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Sn), wr = { description: "", driver: En.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
      function Fs(m, I) {
        m[I] = function() {
          var x = arguments;
          return m.ready().then(function() {
            return m[I].apply(m, x);
          });
        };
      }
      function zn() {
        for (var m = 1; m < arguments.length; m++) {
          var I = arguments[m];
          if (I)
            for (var x in I)
              I.hasOwnProperty(x) && (Ti(I[x]) ? arguments[0][x] = I[x].slice() : arguments[0][x] = I[x]);
        }
        return arguments[0];
      }
      var Us = function() {
        function m(I) {
          c(this, m);
          for (var x in qr)
            if (qr.hasOwnProperty(x)) {
              var U = qr[x], N = U._driver;
              this[x] = N, en[N] || this.defineDriver(U);
            }
          this._defaultConfig = zn({}, wr), this._config = zn({}, this._defaultConfig, I), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return m.prototype.config = function(I) {
          if ((typeof I > "u" ? "undefined" : s(I)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var x in I) {
              if (x === "storeName" && (I[x] = I[x].replace(/\W/g, "_")), x === "version" && typeof I[x] != "number")
                return new Error("Database version must be a number.");
              this._config[x] = I[x];
            }
            return "driver" in I && I.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof I == "string" ? this._config[I] : this._config;
        }, m.prototype.defineDriver = function(I, x, U) {
          var N = new d(function(M, B) {
            try {
              var J = I._driver, ee = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!I._driver) {
                B(ee);
                return;
              }
              for (var X = kn.concat("_initStorage"), Q = 0, de = X.length; Q < de; Q++) {
                var Pe = X[Q], Ze = !Ls(Sn, Pe);
                if ((Ze || I[Pe]) && typeof I[Pe] != "function") {
                  B(ee);
                  return;
                }
              }
              var He = function() {
                for (var Ge = function(js) {
                  return function() {
                    var $s = new Error("Method " + js + " is not implemented by the current driver"), Ni = d.reject($s);
                    return y(Ni, arguments[arguments.length - 1]), Ni;
                  };
                }, Zt = 0, qn = Sn.length; Zt < qn; Zt++) {
                  var ir = Sn[Zt];
                  I[ir] || (I[ir] = Ge(ir));
                }
              };
              He();
              var tt = function(Ge) {
                en[J] && console.info("Redefining LocalForage driver: " + J), en[J] = I, Ai[J] = Ge, M();
              };
              "_support" in I ? I._support && typeof I._support == "function" ? I._support().then(tt, B) : tt(!!I._support) : tt(!0);
            } catch (Ge) {
              B(Ge);
            }
          });
          return _(N, x, U), N;
        }, m.prototype.driver = function() {
          return this._driver || null;
        }, m.prototype.getDriver = function(I, x, U) {
          var N = en[I] ? d.resolve(en[I]) : d.reject(new Error("Driver not found."));
          return _(N, x, U), N;
        }, m.prototype.getSerializer = function(I) {
          var x = d.resolve(Gt);
          return _(x, I), x;
        }, m.prototype.ready = function(I) {
          var x = this, U = x._driverSet.then(function() {
            return x._ready === null && (x._ready = x._initDriver()), x._ready;
          });
          return _(U, I, I), U;
        }, m.prototype.setDriver = function(I, x, U) {
          var N = this;
          Ti(I) || (I = [I]);
          var M = this._getSupportedDrivers(I);
          function B() {
            N._config.driver = N.driver();
          }
          function J(Q) {
            return N._extend(Q), B(), N._ready = N._initStorage(N._config), N._ready;
          }
          function ee(Q) {
            return function() {
              var de = 0;
              function Pe() {
                for (; de < Q.length; ) {
                  var Ze = Q[de];
                  return de++, N._dbInfo = null, N._ready = null, N.getDriver(Ze).then(J).catch(Pe);
                }
                B();
                var He = new Error("No available storage method found.");
                return N._driverSet = d.reject(He), N._driverSet;
              }
              return Pe();
            };
          }
          var X = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = X.then(function() {
            var Q = M[0];
            return N._dbInfo = null, N._ready = null, N.getDriver(Q).then(function(de) {
              N._driver = de._driver, B(), N._wrapLibraryMethodsWithReady(), N._initDriver = ee(M);
            });
          }).catch(function() {
            B();
            var Q = new Error("No available storage method found.");
            return N._driverSet = d.reject(Q), N._driverSet;
          }), _(this._driverSet, x, U), this._driverSet;
        }, m.prototype.supports = function(I) {
          return !!Ai[I];
        }, m.prototype._extend = function(I) {
          zn(this, I);
        }, m.prototype._getSupportedDrivers = function(I) {
          for (var x = [], U = 0, N = I.length; U < N; U++) {
            var M = I[U];
            this.supports(M) && x.push(M);
          }
          return x;
        }, m.prototype._wrapLibraryMethodsWithReady = function() {
          for (var I = 0, x = kn.length; I < x; I++)
            Fs(this, kn[I]);
        }, m.prototype.createInstance = function(I) {
          return new m(I);
        }, m;
      }(), Ms = new Us();
      n.exports = Ms;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(xu);
var Yh = xu.exports, Kn = Zh(Yh);
class Jh {
  constructor() {
    this.getKeys = async () => await Kn.keys(), this.getEntries = async () => {
      let e = [];
      return (await this.getKeys()).forEach(async (r) => e.push(await Kn.getItem(r))), e;
    }, this.getItem = async (e) => await Kn.getItem(e) ?? void 0, this.setItem = async (e, r) => {
      await Kn.setItem(e, r);
    }, this.removeItem = async (e) => {
      await Kn.removeItem(e);
    };
  }
}
let Qh = class {
  constructor() {
    const e = new Jh();
    this.storage = e;
  }
  async getKeys() {
    return this.storage.getKeys();
  }
  async getEntries() {
    return this.storage.getEntries();
  }
  async getItem(e) {
    return this.storage.getItem(e);
  }
  async setItem(e, r) {
    return this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return this.storage.removeItem(e);
  }
};
var Un = {};
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
var po = function(t, e) {
  return po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, po(t, e);
};
function Xh(t, e) {
  po(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var go = function() {
  return go = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, go.apply(this, arguments);
};
function ef(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function tf(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (c = t[o]) && (s = (i < 3 ? c(s) : i > 3 ? c(e, r, s) : c(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function rf(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function nf(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function sf(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(c) {
      c(s);
    });
  }
  return new (r || (r = Promise))(function(s, c) {
    function o(f) {
      try {
        h(n.next(f));
      } catch (d) {
        c(d);
      }
    }
    function u(f) {
      try {
        h(n.throw(f));
      } catch (d) {
        c(d);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(o, u);
    }
    h((n = n.apply(t, e || [])).next());
  });
}
function of(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, c;
  return c = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function o(h) {
    return function(f) {
      return u([h, f]);
    };
  }
  function u(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = h[0] & 2 ? i.return : h[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done)
          return s;
        switch (i = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return r.label++, { value: h[1], done: !1 };
          case 5:
            r.label++, i = h[1], h = [0];
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
      } catch (f) {
        h = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function af(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function cf(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function yo(t) {
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
function Du(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    c = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return s;
}
function uf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Du(arguments[e]));
  return t;
}
function lf() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], c = 0, o = s.length; c < o; c++, i++)
      n[i] = s[c];
  return n;
}
function ii(t) {
  return this instanceof ii ? (this.v = t, this) : new ii(t);
}
function hf(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, c("next"), c("throw"), c("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function c(y) {
    n[y] && (i[y] = function(_) {
      return new Promise(function(S, C) {
        s.push([y, _, S, C]) > 1 || o(y, _);
      });
    });
  }
  function o(y, _) {
    try {
      u(n[y](_));
    } catch (S) {
      d(s[0][3], S);
    }
  }
  function u(y) {
    y.value instanceof ii ? Promise.resolve(y.value.v).then(h, f) : d(s[0][2], y);
  }
  function h(y) {
    o("next", y);
  }
  function f(y) {
    o("throw", y);
  }
  function d(y, _) {
    y(_), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function ff(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(c) {
      return (r = !r) ? { value: ii(t[i](c)), done: i === "return" } : s ? s(c) : c;
    } : s;
  }
}
function df(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof yo == "function" ? yo(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(c) {
      return new Promise(function(o, u) {
        c = t[s](c), i(o, u, c.done, c.value);
      });
    };
  }
  function i(s, c, o, u) {
    Promise.resolve(u).then(function(h) {
      s({ value: h, done: o });
    }, c);
  }
}
function pf(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function gf(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function yf(t) {
  return t && t.__esModule ? t : { default: t };
}
function mf(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function vf(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return go;
  },
  __asyncDelegator: ff,
  __asyncGenerator: hf,
  __asyncValues: df,
  __await: ii,
  __awaiter: sf,
  __classPrivateFieldGet: mf,
  __classPrivateFieldSet: vf,
  __createBinding: af,
  __decorate: tf,
  __exportStar: cf,
  __extends: Xh,
  __generator: of,
  __importDefault: yf,
  __importStar: gf,
  __makeTemplateObject: pf,
  __metadata: nf,
  __param: rf,
  __read: Du,
  __rest: ef,
  __spread: uf,
  __spreadArrays: lf,
  __values: yo
}, Symbol.toStringTag, { value: "Module" })), Nr = /* @__PURE__ */ qo(bf);
var Hn = {}, fe = {}, Bs = {}, Wn = {}, Fa;
function _f() {
  if (Fa)
    return Wn;
  Fa = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Wn.delay = t, Wn;
}
var on = {}, Vs = {}, an = {}, Ua;
function wf() {
  return Ua || (Ua = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.ONE_THOUSAND = an.ONE_HUNDRED = void 0, an.ONE_HUNDRED = 100, an.ONE_THOUSAND = 1e3), an;
}
var Ks = {}, Ma;
function Ef() {
  return Ma || (Ma = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Ks)), Ks;
}
var ja;
function Iu() {
  return ja || (ja = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Nr;
    e.__exportStar(wf(), t), e.__exportStar(Ef(), t);
  }(Vs)), Vs;
}
var $a;
function Sf() {
  if ($a)
    return on;
  $a = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.fromMiliseconds = on.toMiliseconds = void 0;
  const t = Iu();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  on.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return on.fromMiliseconds = r, on;
}
var ka;
function xf() {
  return ka || (ka = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Nr;
    e.__exportStar(_f(), t), e.__exportStar(Sf(), t);
  }(Bs)), Bs;
}
var Dn = {}, za;
function Df() {
  if (za)
    return Dn;
  za = 1, Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.Watch = void 0;
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
  return Dn.Watch = t, Dn.default = t, Dn;
}
var Hs = {}, Gn = {}, qa;
function If() {
  if (qa)
    return Gn;
  qa = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.IWatch = void 0;
  class t {
  }
  return Gn.IWatch = t, Gn;
}
var Ba;
function Of() {
  return Ba || (Ba = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Nr.__exportStar(If(), t);
  }(Hs)), Hs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Nr;
  e.__exportStar(xf(), t), e.__exportStar(Df(), t), e.__exportStar(Of(), t), e.__exportStar(Iu(), t);
})(fe);
var Ws = {}, Zn = {};
let rr = class {
};
const Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: rr
}, Symbol.toStringTag, { value: "Module" })), Tf = /* @__PURE__ */ qo(Cf);
var Va;
function Af() {
  if (Va)
    return Zn;
  Va = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.IHeartBeat = void 0;
  const t = Tf;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Zn.IHeartBeat = e, Zn;
}
var Ka;
function Ou() {
  return Ka || (Ka = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Nr.__exportStar(Af(), t);
  }(Ws)), Ws;
}
var Gs = {}, cn = {}, Ha;
function Nf() {
  if (Ha)
    return cn;
  Ha = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.HEARTBEAT_EVENTS = cn.HEARTBEAT_INTERVAL = void 0;
  const t = fe;
  return cn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, cn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, cn;
}
var Wa;
function Cu() {
  return Wa || (Wa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Nr.__exportStar(Nf(), t);
  }(Gs)), Gs;
}
var Ga;
function Rf() {
  if (Ga)
    return Hn;
  Ga = 1, Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.HeartBeat = void 0;
  const t = Nr, e = cr, r = fe, n = Ou(), i = Cu();
  class s extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const u = new s(o);
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
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Hn.HeartBeat = s, Hn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Nr;
  e.__exportStar(Rf(), t), e.__exportStar(Ou(), t), e.__exportStar(Cu(), t);
})(Un);
var Ke = {}, Zs, Za;
function Pf() {
  if (Za)
    return Zs;
  Za = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Zs = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, c = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + c;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = s(r);
      for (var h = 1; h < o; h++)
        u[h] = s(n[h]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", y = 1 - c, _ = -1, S = r && r.length || 0, C = 0; C < S; ) {
      if (r.charCodeAt(C) === 37 && C + 1 < S) {
        switch (_ = _ > -1 ? _ : 0, r.charCodeAt(C + 1)) {
          case 100:
          case 102:
            if (y >= f || n[y] == null)
              break;
            _ < C && (d += r.slice(_, C)), d += Number(n[y]), _ = C + 2, C++;
            break;
          case 105:
            if (y >= f || n[y] == null)
              break;
            _ < C && (d += r.slice(_, C)), d += Math.floor(Number(n[y])), _ = C + 2, C++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || n[y] === void 0)
              break;
            _ < C && (d += r.slice(_, C));
            var D = typeof n[y];
            if (D === "string") {
              d += "'" + n[y] + "'", _ = C + 2, C++;
              break;
            }
            if (D === "function") {
              d += n[y].name || "<anonymous>", _ = C + 2, C++;
              break;
            }
            d += s(n[y]), _ = C + 2, C++;
            break;
          case 115:
            if (y >= f)
              break;
            _ < C && (d += r.slice(_, C)), d += String(n[y]), _ = C + 2, C++;
            break;
          case 37:
            _ < C && (d += r.slice(_, C)), d += "%", _ = C + 2, C++, y--;
            break;
        }
        ++y;
      }
      ++C;
    }
    return _ === -1 ? r : (_ < S && (d += r.slice(_)), d);
  }
  return Zs;
}
var Ys, Ya;
function Lf() {
  if (Ya)
    return Ys;
  Ya = 1;
  const t = Pf();
  Ys = i;
  const e = v().console || {}, r = {
    mapHttpRequest: S,
    mapHttpResponse: S,
    wrapRequestSerializer: C,
    wrapResponseSerializer: C,
    wrapErrorSerializer: C,
    req: S,
    res: S,
    err: y
  };
  function n(p, a) {
    return Array.isArray(p) ? p.filter(function(R) {
      return R !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(a) : !1;
  }
  function i(p) {
    p = p || {}, p.browser = p.browser || {};
    const a = p.browser.transmit;
    if (a && typeof a.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = p.browser.write || e;
    p.browser.write && (p.browser.asObject = !0);
    const R = p.serializers || {}, F = n(p.browser.serialize, R);
    let q = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (q = !1);
    const W = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const ie = p.level || "info", A = Object.create(g);
    A.log || (A.log = D), Object.defineProperty(A, "levelVal", {
      get: ne
    }), Object.defineProperty(A, "level", {
      get: G,
      set: K
    });
    const j = {
      transmit: a,
      serialize: F,
      asObject: p.browser.asObject,
      levels: W,
      timestamp: _(p)
    };
    A.levels = i.levels, A.level = ie, A.setMaxListeners = A.getMaxListeners = A.emit = A.addListener = A.on = A.prependListener = A.once = A.prependOnceListener = A.removeListener = A.removeAllListeners = A.listeners = A.listenerCount = A.eventNames = A.write = A.flush = D, A.serializers = R, A._serialize = F, A._stdErrSerialize = q, A.child = Z, a && (A._logEvent = d());
    function ne() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function G() {
      return this._level;
    }
    function K(V) {
      if (V !== "silent" && !this.levels.values[V])
        throw Error("unknown level " + V);
      this._level = V, s(j, A, "error", "log"), s(j, A, "fatal", "error"), s(j, A, "warn", "error"), s(j, A, "info", "log"), s(j, A, "debug", "log"), s(j, A, "trace", "log");
    }
    function Z(V, Y) {
      if (!V)
        throw new Error("missing bindings for child Pino");
      Y = Y || {}, F && V.serializers && (Y.serializers = V.serializers);
      const ve = Y.serializers;
      if (F && ve) {
        var te = Object.assign({}, R, ve), ge = p.browser.serialize === !0 ? Object.keys(te) : F;
        delete V.serializers, u([V], ge, te, this._stdErrSerialize);
      }
      function ue(ye) {
        this._childLevel = (ye._childLevel | 0) + 1, this.error = h(ye, V, "error"), this.fatal = h(ye, V, "fatal"), this.warn = h(ye, V, "warn"), this.info = h(ye, V, "info"), this.debug = h(ye, V, "debug"), this.trace = h(ye, V, "trace"), te && (this.serializers = te, this._serialize = ge), a && (this._logEvent = d(
          [].concat(ye._logEvent.bindings, V)
        ));
      }
      return ue.prototype = this, new ue(this);
    }
    return A;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: z, epochTime: w, unixTime: O, isoTime: b });
  function s(p, a, g, R) {
    const F = Object.getPrototypeOf(a);
    a[g] = a.levelVal > a.levels.values[g] ? D : F[g] ? F[g] : e[g] || e[R] || D, c(p, a, g);
  }
  function c(p, a, g) {
    !p.transmit && a[g] === D || (a[g] = function(R) {
      return function() {
        const q = p.timestamp(), W = new Array(arguments.length), ie = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var A = 0; A < W.length; A++)
          W[A] = arguments[A];
        if (p.serialize && !p.asObject && u(W, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? R.call(ie, o(this, g, W, q)) : R.apply(ie, W), p.transmit) {
          const j = p.transmit.level || a.level, ne = i.levels.values[j], G = i.levels.values[g];
          if (G < ne)
            return;
          f(this, {
            ts: q,
            methodLevel: g,
            methodValue: G,
            transmitLevel: j,
            transmitValue: i.levels.values[p.transmit.level || a.level],
            send: p.transmit.send,
            val: a.levelVal
          }, W);
        }
      };
    }(a[g]));
  }
  function o(p, a, g, R) {
    p._serialize && u(g, p._serialize, p.serializers, p._stdErrSerialize);
    const F = g.slice();
    let q = F[0];
    const W = {};
    R && (W.time = R), W.level = i.levels.values[a];
    let ie = (p._childLevel | 0) + 1;
    if (ie < 1 && (ie = 1), q !== null && typeof q == "object") {
      for (; ie-- && typeof F[0] == "object"; )
        Object.assign(W, F.shift());
      q = F.length ? t(F.shift(), F) : void 0;
    } else
      typeof q == "string" && (q = t(F.shift(), F));
    return q !== void 0 && (W.msg = q), W;
  }
  function u(p, a, g, R) {
    for (const F in p)
      if (R && p[F] instanceof Error)
        p[F] = i.stdSerializers.err(p[F]);
      else if (typeof p[F] == "object" && !Array.isArray(p[F]))
        for (const q in p[F])
          a && a.indexOf(q) > -1 && q in g && (p[F][q] = g[q](p[F][q]));
  }
  function h(p, a, g) {
    return function() {
      const R = new Array(1 + arguments.length);
      R[0] = a;
      for (var F = 1; F < R.length; F++)
        R[F] = arguments[F - 1];
      return p[g].apply(this, R);
    };
  }
  function f(p, a, g) {
    const R = a.send, F = a.ts, q = a.methodLevel, W = a.methodValue, ie = a.val, A = p._logEvent.bindings;
    u(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = F, p._logEvent.messages = g.filter(function(j) {
      return A.indexOf(j) === -1;
    }), p._logEvent.level.label = q, p._logEvent.level.value = W, R(q, p._logEvent, ie), p._logEvent = d(A);
  }
  function d(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function y(p) {
    const a = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const g in p)
      a[g] === void 0 && (a[g] = p[g]);
    return a;
  }
  function _(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? z : w;
  }
  function S() {
    return {};
  }
  function C(p) {
    return p;
  }
  function D() {
  }
  function z() {
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
  function v() {
    function p(a) {
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
      return p(self) || p(window) || p(this) || {};
    }
  }
  return Ys;
}
var un = {}, Ja;
function Tu() {
  return Ja || (Ja = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.PINO_CUSTOM_CONTEXT_KEY = un.PINO_LOGGER_DEFAULTS = void 0, un.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, un.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), un;
}
var qt = {}, Qa;
function Ff() {
  if (Qa)
    return qt;
  Qa = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.generateChildLogger = qt.formatChildLoggerContext = qt.getLoggerContext = qt.setBrowserLoggerContext = qt.getBrowserLoggerContext = qt.getDefaultLoggerOptions = void 0;
  const t = Tu();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  qt.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  qt.getBrowserLoggerContext = r;
  function n(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[h] = u, o;
  }
  qt.setBrowserLoggerContext = n;
  function i(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof o.bindings > "u" ? h = r(o, u) : h = o.bindings().context || "", h;
  }
  qt.getLoggerContext = i;
  function s(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, h);
    return f.trim() ? `${f}/${u}` : u;
  }
  qt.formatChildLoggerContext = s;
  function c(o, u, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, u, h), d = o.child({ context: f });
    return n(d, f, h);
  }
  return qt.generateChildLogger = c, qt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Nr, r = e.__importDefault(Lf());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Tu(), t), e.__exportStar(Ff(), t);
})(Ke);
let Uf = class extends rr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Mf = class extends rr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, jf = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, $f = class extends rr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, kf = class extends rr {
  constructor(e) {
    super();
  }
}, zf = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, qf = class extends rr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Bf = class extends rr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Vf = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Kf = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Hf = class {
  constructor(e) {
    this.client = e;
  }
};
const Wf = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Gf = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Au(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Gf(t);
  } catch {
    return t;
  }
}
function Ko(t) {
  return typeof t == "string" ? t : Wf(t) || "";
}
var Ho = {}, Mn = {}, ds = {}, ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.BrowserRandomSource = void 0;
const Xa = 65536;
class Zf {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Xa)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Xa)));
    return r;
  }
}
ps.BrowserRandomSource = Zf;
function Yf(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var gs = {}, nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
function Jf(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
nr.wipe = Jf;
const Qf = {}, Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qf
}, Symbol.toStringTag, { value: "Module" })), ed = /* @__PURE__ */ qo(Xf);
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.NodeRandomSource = void 0;
const td = nr;
class rd {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Yf < "u") {
      const e = ed;
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
    return (0, td.wipe)(r), n;
  }
}
gs.NodeRandomSource = rd;
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.SystemRandomSource = void 0;
const nd = ps, id = gs;
class sd {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new nd.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new id.NodeRandomSource(), this._source.isAvailable) {
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
ds.SystemRandomSource = sd;
var De = {}, Nu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var h = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, y = u & 65535;
    return f * y + (h * y + f * d << 16 >>> 0) | 0;
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
  function i(o, u) {
    return o << u | o >>> 32 - u;
  }
  t.rotl = i;
  function s(o, u) {
    return o << 32 - u | o >>> u;
  }
  t.rotr = s;
  function c(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || c, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(Nu);
Object.defineProperty(De, "__esModule", { value: !0 });
var Ru = Nu;
function od(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
De.readInt16BE = od;
function ad(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
De.readUint16BE = ad;
function cd(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
De.readInt16LE = cd;
function ud(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
De.readUint16LE = ud;
function Pu(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
De.writeUint16BE = Pu;
De.writeInt16BE = Pu;
function Lu(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
De.writeUint16LE = Lu;
De.writeInt16LE = Lu;
function mo(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
De.readInt32BE = mo;
function vo(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
De.readUint32BE = vo;
function bo(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
De.readInt32LE = bo;
function _o(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
De.readUint32LE = _o;
function Zi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
De.writeUint32BE = Zi;
De.writeInt32BE = Zi;
function Yi(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
De.writeUint32LE = Yi;
De.writeInt32LE = Yi;
function ld(t, e) {
  e === void 0 && (e = 0);
  var r = mo(t, e), n = mo(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
De.readInt64BE = ld;
function hd(t, e) {
  e === void 0 && (e = 0);
  var r = vo(t, e), n = vo(t, e + 4);
  return r * 4294967296 + n;
}
De.readUint64BE = hd;
function fd(t, e) {
  e === void 0 && (e = 0);
  var r = bo(t, e), n = bo(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
De.readInt64LE = fd;
function dd(t, e) {
  e === void 0 && (e = 0);
  var r = _o(t, e), n = _o(t, e + 4);
  return n * 4294967296 + r;
}
De.readUint64LE = dd;
function Fu(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Zi(t / 4294967296 >>> 0, e, r), Zi(t >>> 0, e, r + 4), e;
}
De.writeUint64BE = Fu;
De.writeInt64BE = Fu;
function Uu(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Yi(t >>> 0, e, r), Yi(t / 4294967296 >>> 0, e, r + 4), e;
}
De.writeUint64LE = Uu;
De.writeInt64LE = Uu;
function pd(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
De.readUintBE = pd;
function gd(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
De.readUintLE = gd;
function yd(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ru.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
De.writeUintBE = yd;
function md(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ru.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
De.writeUintLE = md;
function vd(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
De.readFloat32BE = vd;
function bd(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
De.readFloat32LE = bd;
function _d(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
De.readFloat64BE = _d;
function wd(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
De.readFloat64LE = wd;
function Ed(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
De.writeFloat32BE = Ed;
function Sd(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
De.writeFloat32LE = Sd;
function xd(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
De.writeFloat64BE = xd;
function Dd(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
De.writeFloat64LE = Dd;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = ds, r = De, n = nr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(h, f = t.defaultRandomSource) {
    return f.randomBytes(h);
  }
  t.randomBytes = i;
  function s(h = t.defaultRandomSource) {
    const f = i(4, h), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = s;
  const c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(h, f = c, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const _ = f.length, S = 256 - 256 % _;
    for (; h > 0; ) {
      const C = i(Math.ceil(h * 256 / S), d);
      for (let D = 0; D < C.length && h > 0; D++) {
        const z = C[D];
        z < S && (y += f.charAt(z % _), h--);
      }
      (0, n.wipe)(C);
    }
    return y;
  }
  t.randomString = o;
  function u(h, f = c, d = t.defaultRandomSource) {
    const y = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return o(y, f, d);
  }
  t.randomStringForEntropy = u;
})(Mn);
var Mu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = De, r = nr;
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
      }, o.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, _ = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var S = f + 1; S < _ - 8; S++)
            this._buffer[S] = 0;
          e.writeUint32BE(d, this._buffer, _ - 8), e.writeUint32BE(y, this._buffer, _ - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, _), this._finished = !0;
        }
        for (var S = 0; S < this.digestLength / 8; S++)
          e.writeUint32BE(this._stateHi[S], u, S * 8), e.writeUint32BE(this._stateLo[S], u, S * 8 + 4);
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
  function s(o, u, h, f, d, y, _) {
    for (var S = h[0], C = h[1], D = h[2], z = h[3], w = h[4], O = h[5], b = h[6], v = h[7], p = f[0], a = f[1], g = f[2], R = f[3], F = f[4], q = f[5], W = f[6], ie = f[7], A, j, ne, G, K, Z, V, Y; _ >= 128; ) {
      for (var ve = 0; ve < 16; ve++) {
        var te = 8 * ve + y;
        o[ve] = e.readUint32BE(d, te), u[ve] = e.readUint32BE(d, te + 4);
      }
      for (var ve = 0; ve < 80; ve++) {
        var ge = S, ue = C, ye = D, k = z, $ = w, P = O, l = b, T = v, se = p, ae = a, Fe = g, Se = R, je = F, ze = q, Je = W, Qe = ie;
        if (A = v, j = ie, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = (w >>> 14 | F << 32 - 14) ^ (w >>> 18 | F << 32 - 18) ^ (F >>> 41 - 32 | w << 32 - (41 - 32)), j = (F >>> 14 | w << 32 - 14) ^ (F >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | F << 32 - (41 - 32)), K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, A = w & O ^ ~w & b, j = F & q ^ ~F & W, K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, A = i[ve * 2], j = i[ve * 2 + 1], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, A = o[ve % 16], j = u[ve % 16], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, ne = V & 65535 | Y << 16, G = K & 65535 | Z << 16, A = ne, j = G, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = (S >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | S << 32 - (34 - 32)) ^ (p >>> 39 - 32 | S << 32 - (39 - 32)), j = (p >>> 28 | S << 32 - 28) ^ (S >>> 34 - 32 | p << 32 - (34 - 32)) ^ (S >>> 39 - 32 | p << 32 - (39 - 32)), K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, A = S & C ^ S & D ^ C & D, j = p & a ^ p & g ^ a & g, K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, T = V & 65535 | Y << 16, Qe = K & 65535 | Z << 16, A = k, j = Se, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = ne, j = G, K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, k = V & 65535 | Y << 16, Se = K & 65535 | Z << 16, C = ge, D = ue, z = ye, w = k, O = $, b = P, v = l, S = T, a = se, g = ae, R = Fe, F = Se, q = je, W = ze, ie = Je, p = Qe, ve % 16 === 15)
          for (var te = 0; te < 16; te++)
            A = o[te], j = u[te], K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = o[(te + 9) % 16], j = u[(te + 9) % 16], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, ne = o[(te + 1) % 16], G = u[(te + 1) % 16], A = (ne >>> 1 | G << 32 - 1) ^ (ne >>> 8 | G << 32 - 8) ^ ne >>> 7, j = (G >>> 1 | ne << 32 - 1) ^ (G >>> 8 | ne << 32 - 8) ^ (G >>> 7 | ne << 32 - 7), K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, ne = o[(te + 14) % 16], G = u[(te + 14) % 16], A = (ne >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | ne << 32 - (61 - 32)) ^ ne >>> 6, j = (G >>> 19 | ne << 32 - 19) ^ (ne >>> 61 - 32 | G << 32 - (61 - 32)) ^ (G >>> 6 | ne << 32 - 6), K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, o[te] = V & 65535 | Y << 16, u[te] = K & 65535 | Z << 16;
      }
      A = S, j = p, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[0], j = f[0], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[0] = S = V & 65535 | Y << 16, f[0] = p = K & 65535 | Z << 16, A = C, j = a, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[1], j = f[1], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[1] = C = V & 65535 | Y << 16, f[1] = a = K & 65535 | Z << 16, A = D, j = g, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[2], j = f[2], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[2] = D = V & 65535 | Y << 16, f[2] = g = K & 65535 | Z << 16, A = z, j = R, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[3], j = f[3], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[3] = z = V & 65535 | Y << 16, f[3] = R = K & 65535 | Z << 16, A = w, j = F, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[4], j = f[4], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[4] = w = V & 65535 | Y << 16, f[4] = F = K & 65535 | Z << 16, A = O, j = q, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[5], j = f[5], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[5] = O = V & 65535 | Y << 16, f[5] = q = K & 65535 | Z << 16, A = b, j = W, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[6], j = f[6], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[6] = b = V & 65535 | Y << 16, f[6] = W = K & 65535 | Z << 16, A = v, j = ie, K = j & 65535, Z = j >>> 16, V = A & 65535, Y = A >>> 16, A = h[7], j = f[7], K += j & 65535, Z += j >>> 16, V += A & 65535, Y += A >>> 16, Z += K >>> 16, V += Z >>> 16, Y += V >>> 16, h[7] = v = V & 65535 | Y << 16, f[7] = ie = K & 65535 | Z << 16, y += 128, _ -= 128;
    }
    return y;
  }
  function c(o) {
    var u = new n();
    u.update(o);
    var h = u.digest();
    return u.clean(), h;
  }
  t.hash = c;
})(Mu);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Mn, r = Mu, n = nr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(k) {
    const $ = new Float64Array(16);
    if (k)
      for (let P = 0; P < k.length; P++)
        $[P] = k[P];
    return $;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const c = i(), o = i([1]), u = i([
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
  ]), h = i([
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
  ]), f = i([
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
  ]), d = i([
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
  function _(k, $) {
    for (let P = 0; P < 16; P++)
      k[P] = $[P] | 0;
  }
  function S(k) {
    let $ = 1;
    for (let P = 0; P < 16; P++) {
      let l = k[P] + $ + 65535;
      $ = Math.floor(l / 65536), k[P] = l - $ * 65536;
    }
    k[0] += $ - 1 + 37 * ($ - 1);
  }
  function C(k, $, P) {
    const l = ~(P - 1);
    for (let T = 0; T < 16; T++) {
      const se = l & (k[T] ^ $[T]);
      k[T] ^= se, $[T] ^= se;
    }
  }
  function D(k, $) {
    const P = i(), l = i();
    for (let T = 0; T < 16; T++)
      l[T] = $[T];
    S(l), S(l), S(l);
    for (let T = 0; T < 2; T++) {
      P[0] = l[0] - 65517;
      for (let ae = 1; ae < 15; ae++)
        P[ae] = l[ae] - 65535 - (P[ae - 1] >> 16 & 1), P[ae - 1] &= 65535;
      P[15] = l[15] - 32767 - (P[14] >> 16 & 1);
      const se = P[15] >> 16 & 1;
      P[14] &= 65535, C(l, P, 1 - se);
    }
    for (let T = 0; T < 16; T++)
      k[2 * T] = l[T] & 255, k[2 * T + 1] = l[T] >> 8;
  }
  function z(k, $) {
    let P = 0;
    for (let l = 0; l < 32; l++)
      P |= k[l] ^ $[l];
    return (1 & P - 1 >>> 8) - 1;
  }
  function w(k, $) {
    const P = new Uint8Array(32), l = new Uint8Array(32);
    return D(P, k), D(l, $), z(P, l);
  }
  function O(k) {
    const $ = new Uint8Array(32);
    return D($, k), $[0] & 1;
  }
  function b(k, $) {
    for (let P = 0; P < 16; P++)
      k[P] = $[2 * P] + ($[2 * P + 1] << 8);
    k[15] &= 32767;
  }
  function v(k, $, P) {
    for (let l = 0; l < 16; l++)
      k[l] = $[l] + P[l];
  }
  function p(k, $, P) {
    for (let l = 0; l < 16; l++)
      k[l] = $[l] - P[l];
  }
  function a(k, $, P) {
    let l, T, se = 0, ae = 0, Fe = 0, Se = 0, je = 0, ze = 0, Je = 0, Qe = 0, Ue = 0, Ne = 0, Re = 0, Te = 0, Ie = 0, xe = 0, Ee = 0, be = 0, Ae = 0, Me = 0, _e = 0, $e = 0, ke = 0, Be = 0, qe = 0, Ve = 0, Xt = 0, Gt = 0, ur = 0, zt = 0, Rt = 0, Xr = 0, wn = 0, at = P[0], nt = P[1], lt = P[2], ht = P[3], ft = P[4], it = P[5], yt = P[6], mt = P[7], vt = P[8], bt = P[9], _t = P[10], dt = P[11], pt = P[12], Xe = P[13], wt = P[14], Et = P[15];
    l = $[0], se += l * at, ae += l * nt, Fe += l * lt, Se += l * ht, je += l * ft, ze += l * it, Je += l * yt, Qe += l * mt, Ue += l * vt, Ne += l * bt, Re += l * _t, Te += l * dt, Ie += l * pt, xe += l * Xe, Ee += l * wt, be += l * Et, l = $[1], ae += l * at, Fe += l * nt, Se += l * lt, je += l * ht, ze += l * ft, Je += l * it, Qe += l * yt, Ue += l * mt, Ne += l * vt, Re += l * bt, Te += l * _t, Ie += l * dt, xe += l * pt, Ee += l * Xe, be += l * wt, Ae += l * Et, l = $[2], Fe += l * at, Se += l * nt, je += l * lt, ze += l * ht, Je += l * ft, Qe += l * it, Ue += l * yt, Ne += l * mt, Re += l * vt, Te += l * bt, Ie += l * _t, xe += l * dt, Ee += l * pt, be += l * Xe, Ae += l * wt, Me += l * Et, l = $[3], Se += l * at, je += l * nt, ze += l * lt, Je += l * ht, Qe += l * ft, Ue += l * it, Ne += l * yt, Re += l * mt, Te += l * vt, Ie += l * bt, xe += l * _t, Ee += l * dt, be += l * pt, Ae += l * Xe, Me += l * wt, _e += l * Et, l = $[4], je += l * at, ze += l * nt, Je += l * lt, Qe += l * ht, Ue += l * ft, Ne += l * it, Re += l * yt, Te += l * mt, Ie += l * vt, xe += l * bt, Ee += l * _t, be += l * dt, Ae += l * pt, Me += l * Xe, _e += l * wt, $e += l * Et, l = $[5], ze += l * at, Je += l * nt, Qe += l * lt, Ue += l * ht, Ne += l * ft, Re += l * it, Te += l * yt, Ie += l * mt, xe += l * vt, Ee += l * bt, be += l * _t, Ae += l * dt, Me += l * pt, _e += l * Xe, $e += l * wt, ke += l * Et, l = $[6], Je += l * at, Qe += l * nt, Ue += l * lt, Ne += l * ht, Re += l * ft, Te += l * it, Ie += l * yt, xe += l * mt, Ee += l * vt, be += l * bt, Ae += l * _t, Me += l * dt, _e += l * pt, $e += l * Xe, ke += l * wt, Be += l * Et, l = $[7], Qe += l * at, Ue += l * nt, Ne += l * lt, Re += l * ht, Te += l * ft, Ie += l * it, xe += l * yt, Ee += l * mt, be += l * vt, Ae += l * bt, Me += l * _t, _e += l * dt, $e += l * pt, ke += l * Xe, Be += l * wt, qe += l * Et, l = $[8], Ue += l * at, Ne += l * nt, Re += l * lt, Te += l * ht, Ie += l * ft, xe += l * it, Ee += l * yt, be += l * mt, Ae += l * vt, Me += l * bt, _e += l * _t, $e += l * dt, ke += l * pt, Be += l * Xe, qe += l * wt, Ve += l * Et, l = $[9], Ne += l * at, Re += l * nt, Te += l * lt, Ie += l * ht, xe += l * ft, Ee += l * it, be += l * yt, Ae += l * mt, Me += l * vt, _e += l * bt, $e += l * _t, ke += l * dt, Be += l * pt, qe += l * Xe, Ve += l * wt, Xt += l * Et, l = $[10], Re += l * at, Te += l * nt, Ie += l * lt, xe += l * ht, Ee += l * ft, be += l * it, Ae += l * yt, Me += l * mt, _e += l * vt, $e += l * bt, ke += l * _t, Be += l * dt, qe += l * pt, Ve += l * Xe, Xt += l * wt, Gt += l * Et, l = $[11], Te += l * at, Ie += l * nt, xe += l * lt, Ee += l * ht, be += l * ft, Ae += l * it, Me += l * yt, _e += l * mt, $e += l * vt, ke += l * bt, Be += l * _t, qe += l * dt, Ve += l * pt, Xt += l * Xe, Gt += l * wt, ur += l * Et, l = $[12], Ie += l * at, xe += l * nt, Ee += l * lt, be += l * ht, Ae += l * ft, Me += l * it, _e += l * yt, $e += l * mt, ke += l * vt, Be += l * bt, qe += l * _t, Ve += l * dt, Xt += l * pt, Gt += l * Xe, ur += l * wt, zt += l * Et, l = $[13], xe += l * at, Ee += l * nt, be += l * lt, Ae += l * ht, Me += l * ft, _e += l * it, $e += l * yt, ke += l * mt, Be += l * vt, qe += l * bt, Ve += l * _t, Xt += l * dt, Gt += l * pt, ur += l * Xe, zt += l * wt, Rt += l * Et, l = $[14], Ee += l * at, be += l * nt, Ae += l * lt, Me += l * ht, _e += l * ft, $e += l * it, ke += l * yt, Be += l * mt, qe += l * vt, Ve += l * bt, Xt += l * _t, Gt += l * dt, ur += l * pt, zt += l * Xe, Rt += l * wt, Xr += l * Et, l = $[15], be += l * at, Ae += l * nt, Me += l * lt, _e += l * ht, $e += l * ft, ke += l * it, Be += l * yt, qe += l * mt, Ve += l * vt, Xt += l * bt, Gt += l * _t, ur += l * dt, zt += l * pt, Rt += l * Xe, Xr += l * wt, wn += l * Et, se += 38 * Ae, ae += 38 * Me, Fe += 38 * _e, Se += 38 * $e, je += 38 * ke, ze += 38 * Be, Je += 38 * qe, Qe += 38 * Ve, Ue += 38 * Xt, Ne += 38 * Gt, Re += 38 * ur, Te += 38 * zt, Ie += 38 * Rt, xe += 38 * Xr, Ee += 38 * wn, T = 1, l = se + T + 65535, T = Math.floor(l / 65536), se = l - T * 65536, l = ae + T + 65535, T = Math.floor(l / 65536), ae = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Se + T + 65535, T = Math.floor(l / 65536), Se = l - T * 65536, l = je + T + 65535, T = Math.floor(l / 65536), je = l - T * 65536, l = ze + T + 65535, T = Math.floor(l / 65536), ze = l - T * 65536, l = Je + T + 65535, T = Math.floor(l / 65536), Je = l - T * 65536, l = Qe + T + 65535, T = Math.floor(l / 65536), Qe = l - T * 65536, l = Ue + T + 65535, T = Math.floor(l / 65536), Ue = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = Re + T + 65535, T = Math.floor(l / 65536), Re = l - T * 65536, l = Te + T + 65535, T = Math.floor(l / 65536), Te = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = xe + T + 65535, T = Math.floor(l / 65536), xe = l - T * 65536, l = Ee + T + 65535, T = Math.floor(l / 65536), Ee = l - T * 65536, l = be + T + 65535, T = Math.floor(l / 65536), be = l - T * 65536, se += T - 1 + 37 * (T - 1), T = 1, l = se + T + 65535, T = Math.floor(l / 65536), se = l - T * 65536, l = ae + T + 65535, T = Math.floor(l / 65536), ae = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Se + T + 65535, T = Math.floor(l / 65536), Se = l - T * 65536, l = je + T + 65535, T = Math.floor(l / 65536), je = l - T * 65536, l = ze + T + 65535, T = Math.floor(l / 65536), ze = l - T * 65536, l = Je + T + 65535, T = Math.floor(l / 65536), Je = l - T * 65536, l = Qe + T + 65535, T = Math.floor(l / 65536), Qe = l - T * 65536, l = Ue + T + 65535, T = Math.floor(l / 65536), Ue = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = Re + T + 65535, T = Math.floor(l / 65536), Re = l - T * 65536, l = Te + T + 65535, T = Math.floor(l / 65536), Te = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = xe + T + 65535, T = Math.floor(l / 65536), xe = l - T * 65536, l = Ee + T + 65535, T = Math.floor(l / 65536), Ee = l - T * 65536, l = be + T + 65535, T = Math.floor(l / 65536), be = l - T * 65536, se += T - 1 + 37 * (T - 1), k[0] = se, k[1] = ae, k[2] = Fe, k[3] = Se, k[4] = je, k[5] = ze, k[6] = Je, k[7] = Qe, k[8] = Ue, k[9] = Ne, k[10] = Re, k[11] = Te, k[12] = Ie, k[13] = xe, k[14] = Ee, k[15] = be;
  }
  function g(k, $) {
    a(k, $, $);
  }
  function R(k, $) {
    const P = i();
    let l;
    for (l = 0; l < 16; l++)
      P[l] = $[l];
    for (l = 253; l >= 0; l--)
      g(P, P), l !== 2 && l !== 4 && a(P, P, $);
    for (l = 0; l < 16; l++)
      k[l] = P[l];
  }
  function F(k, $) {
    const P = i();
    let l;
    for (l = 0; l < 16; l++)
      P[l] = $[l];
    for (l = 250; l >= 0; l--)
      g(P, P), l !== 1 && a(P, P, $);
    for (l = 0; l < 16; l++)
      k[l] = P[l];
  }
  function q(k, $) {
    const P = i(), l = i(), T = i(), se = i(), ae = i(), Fe = i(), Se = i(), je = i(), ze = i();
    p(P, k[1], k[0]), p(ze, $[1], $[0]), a(P, P, ze), v(l, k[0], k[1]), v(ze, $[0], $[1]), a(l, l, ze), a(T, k[3], $[3]), a(T, T, h), a(se, k[2], $[2]), v(se, se, se), p(ae, l, P), p(Fe, se, T), v(Se, se, T), v(je, l, P), a(k[0], ae, Fe), a(k[1], je, Se), a(k[2], Se, Fe), a(k[3], ae, je);
  }
  function W(k, $, P) {
    for (let l = 0; l < 4; l++)
      C(k[l], $[l], P);
  }
  function ie(k, $) {
    const P = i(), l = i(), T = i();
    R(T, $[2]), a(P, $[0], T), a(l, $[1], T), D(k, l), k[31] ^= O(P) << 7;
  }
  function A(k, $, P) {
    _(k[0], c), _(k[1], o), _(k[2], o), _(k[3], c);
    for (let l = 255; l >= 0; --l) {
      const T = P[l / 8 | 0] >> (l & 7) & 1;
      W(k, $, T), q($, k), q(k, k), W(k, $, T);
    }
  }
  function j(k, $) {
    const P = [i(), i(), i(), i()];
    _(P[0], f), _(P[1], d), _(P[2], o), a(P[3], f, d), A(k, P, $);
  }
  function ne(k) {
    if (k.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const $ = (0, r.hash)(k);
    $[0] &= 248, $[31] &= 127, $[31] |= 64;
    const P = new Uint8Array(32), l = [i(), i(), i(), i()];
    j(l, $), ie(P, l);
    const T = new Uint8Array(64);
    return T.set(k), T.set(P, 32), {
      publicKey: P,
      secretKey: T
    };
  }
  t.generateKeyPairFromSeed = ne;
  function G(k) {
    const $ = (0, e.randomBytes)(32, k), P = ne($);
    return (0, n.wipe)($), P;
  }
  t.generateKeyPair = G;
  function K(k) {
    if (k.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(k.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = K;
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
  function V(k, $) {
    let P, l, T, se;
    for (l = 63; l >= 32; --l) {
      for (P = 0, T = l - 32, se = l - 12; T < se; ++T)
        $[T] += P - 16 * $[l] * Z[T - (l - 32)], P = Math.floor(($[T] + 128) / 256), $[T] -= P * 256;
      $[T] += P, $[l] = 0;
    }
    for (P = 0, T = 0; T < 32; T++)
      $[T] += P - ($[31] >> 4) * Z[T], P = $[T] >> 8, $[T] &= 255;
    for (T = 0; T < 32; T++)
      $[T] -= P * Z[T];
    for (l = 0; l < 32; l++)
      $[l + 1] += $[l] >> 8, k[l] = $[l] & 255;
  }
  function Y(k) {
    const $ = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      $[P] = k[P];
    for (let P = 0; P < 64; P++)
      k[P] = 0;
    V(k, $);
  }
  function ve(k, $) {
    const P = new Float64Array(64), l = [i(), i(), i(), i()], T = (0, r.hash)(k.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const se = new Uint8Array(64);
    se.set(T.subarray(32), 32);
    const ae = new r.SHA512();
    ae.update(se.subarray(32)), ae.update($);
    const Fe = ae.digest();
    ae.clean(), Y(Fe), j(l, Fe), ie(se, l), ae.reset(), ae.update(se.subarray(0, 32)), ae.update(k.subarray(32)), ae.update($);
    const Se = ae.digest();
    Y(Se);
    for (let je = 0; je < 32; je++)
      P[je] = Fe[je];
    for (let je = 0; je < 32; je++)
      for (let ze = 0; ze < 32; ze++)
        P[je + ze] += Se[je] * T[ze];
    return V(se.subarray(32), P), se;
  }
  t.sign = ve;
  function te(k, $) {
    const P = i(), l = i(), T = i(), se = i(), ae = i(), Fe = i(), Se = i();
    return _(k[2], o), b(k[1], $), g(T, k[1]), a(se, T, u), p(T, T, k[2]), v(se, k[2], se), g(ae, se), g(Fe, ae), a(Se, Fe, ae), a(P, Se, T), a(P, P, se), F(P, P), a(P, P, T), a(P, P, se), a(P, P, se), a(k[0], P, se), g(l, k[0]), a(l, l, se), w(l, T) && a(k[0], k[0], y), g(l, k[0]), a(l, l, se), w(l, T) ? -1 : (O(k[0]) === $[31] >> 7 && p(k[0], c, k[0]), a(k[3], k[0], k[1]), 0);
  }
  function ge(k, $, P) {
    const l = new Uint8Array(32), T = [i(), i(), i(), i()], se = [i(), i(), i(), i()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (te(se, k))
      return !1;
    const ae = new r.SHA512();
    ae.update(P.subarray(0, 32)), ae.update(k), ae.update($);
    const Fe = ae.digest();
    return Y(Fe), A(T, se, Fe), j(se, P.subarray(32)), q(T, se), ie(l, T), !z(P, l);
  }
  t.verify = ge;
  function ue(k) {
    let $ = [i(), i(), i(), i()];
    if (te($, k))
      throw new Error("Ed25519: invalid public key");
    let P = i(), l = i(), T = $[1];
    v(P, o, T), p(l, o, T), R(l, l), a(P, P, l);
    let se = new Uint8Array(32);
    return D(se, P), se;
  }
  t.convertPublicKeyToX25519 = ue;
  function ye(k) {
    const $ = (0, r.hash)(k.subarray(0, 32));
    $[0] &= 248, $[31] &= 127, $[31] |= 64;
    const P = new Uint8Array($.subarray(0, 32));
    return (0, n.wipe)($), P;
  }
  t.convertSecretKeyToX25519 = ye;
})(Ho);
const Id = "EdDSA", Od = "JWT", ju = ".", $u = "base64url", Cd = "utf8", Td = "utf8", Ad = ":", Nd = "did", Rd = "key", ec = "base58btc", Pd = "z", Ld = "K36", Fd = 32;
function Wo(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ku(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Wo(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function wo(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = ku(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return Wo(r);
}
function Ud(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), c = s.charCodeAt(0);
    if (r[c] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[c] = i;
  }
  var o = t.length, u = t.charAt(0), h = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(S) {
    if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0)
      return "";
    for (var C = 0, D = 0, z = 0, w = S.length; z !== w && S[z] === 0; )
      z++, C++;
    for (var O = (w - z) * f + 1 >>> 0, b = new Uint8Array(O); z !== w; ) {
      for (var v = S[z], p = 0, a = O - 1; (v !== 0 || p < D) && a !== -1; a--, p++)
        v += 256 * b[a] >>> 0, b[a] = v % o >>> 0, v = v / o >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      D = p, z++;
    }
    for (var g = O - D; g !== O && b[g] === 0; )
      g++;
    for (var R = u.repeat(C); g < O; ++g)
      R += t.charAt(b[g]);
    return R;
  }
  function y(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return new Uint8Array();
    var C = 0;
    if (S[C] !== " ") {
      for (var D = 0, z = 0; S[C] === u; )
        D++, C++;
      for (var w = (S.length - C) * h + 1 >>> 0, O = new Uint8Array(w); S[C]; ) {
        var b = r[S.charCodeAt(C)];
        if (b === 255)
          return;
        for (var v = 0, p = w - 1; (b !== 0 || v < z) && p !== -1; p--, v++)
          b += o * O[p] >>> 0, O[p] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        z = v, C++;
      }
      if (S[C] !== " ") {
        for (var a = w - z; a !== w && O[a] === 0; )
          a++;
        for (var g = new Uint8Array(D + (w - a)), R = D; a !== w; )
          g[R++] = O[a++];
        return g;
      }
    }
  }
  function _(S) {
    var C = y(S);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: y,
    decode: _
  };
}
var Md = Ud, jd = Md;
const $d = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, kd = (t) => new TextEncoder().encode(t), zd = (t) => new TextDecoder().decode(t);
class qd {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Bd {
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
    return zu(this, e);
  }
}
class Vd {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return zu(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const zu = (t, e) => new Vd({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Kd {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new qd(e, r, n), this.decoder = new Bd(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ys = ({ name: t, prefix: e, encode: r, decode: n }) => new Kd(t, e, r, n), wi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = jd(r, e);
  return ys({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => $d(i(s))
  });
}, Hd = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const c = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, c[h++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return c;
}, Wd = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", c = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], c += 8; c > r; )
      c -= r, s += e[i & o >> c];
  if (c && (s += e[i & o << r - c]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, At = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => ys({
  prefix: e,
  name: t,
  encode(i) {
    return Wd(i, n, r);
  },
  decode(i) {
    return Hd(i, n, r, t);
  }
}), Gd = ys({
  prefix: "\0",
  name: "identity",
  encode: (t) => zd(t),
  decode: (t) => kd(t)
}), Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Gd
}, Symbol.toStringTag, { value: "Module" })), Yd = At({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Yd
}, Symbol.toStringTag, { value: "Module" })), Qd = At({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Qd
}, Symbol.toStringTag, { value: "Module" })), ep = wi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: ep
}, Symbol.toStringTag, { value: "Module" })), rp = At({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), np = At({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: rp,
  base16upper: np
}, Symbol.toStringTag, { value: "Module" })), sp = At({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), op = At({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), ap = At({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), cp = At({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), up = At({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), lp = At({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), hp = At({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), fp = At({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), dp = At({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: sp,
  base32hex: up,
  base32hexpad: hp,
  base32hexpadupper: fp,
  base32hexupper: lp,
  base32pad: ap,
  base32padupper: cp,
  base32upper: op,
  base32z: dp
}, Symbol.toStringTag, { value: "Module" })), gp = wi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), yp = wi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: gp,
  base36upper: yp
}, Symbol.toStringTag, { value: "Module" })), vp = wi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), bp = wi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), _p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: vp,
  base58flickr: bp
}, Symbol.toStringTag, { value: "Module" })), wp = At({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ep = At({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Sp = At({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), xp = At({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: wp,
  base64pad: Ep,
  base64url: Sp,
  base64urlpad: xp
}, Symbol.toStringTag, { value: "Module" })), qu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ip = qu.reduce((t, e, r) => (t[r] = e, t), []), Op = qu.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Cp(t) {
  return t.reduce((e, r) => (e += Ip[r], e), "");
}
function Tp(t) {
  const e = [];
  for (const r of t) {
    const n = Op[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Ap = ys({
  prefix: "🚀",
  name: "base256emoji",
  encode: Cp,
  decode: Tp
}), Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Ap
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const tc = {
  ...Zd,
  ...Jd,
  ...Xd,
  ...tp,
  ...ip,
  ...pp,
  ...mp,
  ..._p,
  ...Dp,
  ...Np
};
function Bu(t, e, r, n) {
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
const rc = Bu("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Js = Bu("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = ku(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Vu = {
  utf8: rc,
  "utf-8": rc,
  hex: tc.base16,
  latin1: Js,
  ascii: Js,
  binary: Js,
  ...tc
};
function Ht(t, e = "utf8") {
  const r = Vu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Qt(t, e = "utf8") {
  const r = Vu[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Wo(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Ji(t) {
  return Ht(Qt(Ko(t), Cd), $u);
}
function Ku(t) {
  const e = Qt(Ld, ec), r = Pd + Ht(wo([e, t]), ec);
  return [Nd, Rd, r].join(Ad);
}
function Rp(t) {
  return Ht(t, $u);
}
function Pp(t) {
  return Qt([Ji(t.header), Ji(t.payload)].join(ju), Td);
}
function Lp(t) {
  return [
    Ji(t.header),
    Ji(t.payload),
    Rp(t.signature)
  ].join(ju);
}
function nc(t = Mn.randomBytes(Fd)) {
  return Ho.generateKeyPairFromSeed(t);
}
async function Fp(t, e, r, n, i = fe.fromMiliseconds(Date.now())) {
  const s = { alg: Id, typ: Od }, c = Ku(n.publicKey), o = i + r, u = { iss: c, sub: t, aud: e, iat: i, exp: o }, h = Pp({ header: s, payload: u }), f = Ho.sign(n.secretKey, h);
  return Lp({ header: s, payload: u, signature: f });
}
var Go = {}, ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
var Ft = De, Eo = nr, Up = 20;
function Mp(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, c = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], _ = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], S = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], C = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], D = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], z = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, b = i, v = s, p = c, a = o, g = u, R = h, F = f, q = d, W = y, ie = _, A = S, j = C, ne = D, G = z, K = w, Z = 0; Z < Up; Z += 2)
    O = O + a | 0, j ^= O, j = j >>> 32 - 16 | j << 16, q = q + j | 0, a ^= q, a = a >>> 32 - 12 | a << 12, b = b + g | 0, ne ^= b, ne = ne >>> 32 - 16 | ne << 16, W = W + ne | 0, g ^= W, g = g >>> 32 - 12 | g << 12, v = v + R | 0, G ^= v, G = G >>> 32 - 16 | G << 16, ie = ie + G | 0, R ^= ie, R = R >>> 32 - 12 | R << 12, p = p + F | 0, K ^= p, K = K >>> 32 - 16 | K << 16, A = A + K | 0, F ^= A, F = F >>> 32 - 12 | F << 12, v = v + R | 0, G ^= v, G = G >>> 32 - 8 | G << 8, ie = ie + G | 0, R ^= ie, R = R >>> 32 - 7 | R << 7, p = p + F | 0, K ^= p, K = K >>> 32 - 8 | K << 8, A = A + K | 0, F ^= A, F = F >>> 32 - 7 | F << 7, b = b + g | 0, ne ^= b, ne = ne >>> 32 - 8 | ne << 8, W = W + ne | 0, g ^= W, g = g >>> 32 - 7 | g << 7, O = O + a | 0, j ^= O, j = j >>> 32 - 8 | j << 8, q = q + j | 0, a ^= q, a = a >>> 32 - 7 | a << 7, O = O + g | 0, K ^= O, K = K >>> 32 - 16 | K << 16, ie = ie + K | 0, g ^= ie, g = g >>> 32 - 12 | g << 12, b = b + R | 0, j ^= b, j = j >>> 32 - 16 | j << 16, A = A + j | 0, R ^= A, R = R >>> 32 - 12 | R << 12, v = v + F | 0, ne ^= v, ne = ne >>> 32 - 16 | ne << 16, q = q + ne | 0, F ^= q, F = F >>> 32 - 12 | F << 12, p = p + a | 0, G ^= p, G = G >>> 32 - 16 | G << 16, W = W + G | 0, a ^= W, a = a >>> 32 - 12 | a << 12, v = v + F | 0, ne ^= v, ne = ne >>> 32 - 8 | ne << 8, q = q + ne | 0, F ^= q, F = F >>> 32 - 7 | F << 7, p = p + a | 0, G ^= p, G = G >>> 32 - 8 | G << 8, W = W + G | 0, a ^= W, a = a >>> 32 - 7 | a << 7, b = b + R | 0, j ^= b, j = j >>> 32 - 8 | j << 8, A = A + j | 0, R ^= A, R = R >>> 32 - 7 | R << 7, O = O + g | 0, K ^= O, K = K >>> 32 - 8 | K << 8, ie = ie + K | 0, g ^= ie, g = g >>> 32 - 7 | g << 7;
  Ft.writeUint32LE(O + n | 0, t, 0), Ft.writeUint32LE(b + i | 0, t, 4), Ft.writeUint32LE(v + s | 0, t, 8), Ft.writeUint32LE(p + c | 0, t, 12), Ft.writeUint32LE(a + o | 0, t, 16), Ft.writeUint32LE(g + u | 0, t, 20), Ft.writeUint32LE(R + h | 0, t, 24), Ft.writeUint32LE(F + f | 0, t, 28), Ft.writeUint32LE(q + d | 0, t, 32), Ft.writeUint32LE(W + y | 0, t, 36), Ft.writeUint32LE(ie + _ | 0, t, 40), Ft.writeUint32LE(A + S | 0, t, 44), Ft.writeUint32LE(j + C | 0, t, 48), Ft.writeUint32LE(ne + D | 0, t, 52), Ft.writeUint32LE(G + z | 0, t, 56), Ft.writeUint32LE(K + w | 0, t, 60);
}
function Hu(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, c;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), c = s.length - e.length, s.set(e, c);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, c = i;
  }
  for (var o = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    Mp(o, s, t);
    for (var h = u; h < u + 64 && h < r.length; h++)
      n[h] = r[h] ^ o[h - u];
    $p(s, 0, c);
  }
  return Eo.wipe(o), i === 0 && Eo.wipe(s), n;
}
ms.streamXOR = Hu;
function jp(t, e, r, n) {
  return n === void 0 && (n = 0), Eo.wipe(r), Hu(t, e, r, r, n);
}
ms.stream = jp;
function $p(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Wu = {}, Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
function kp(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Qr.select = kp;
function zp(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Qr.lessOrEqual = zp;
function Gu(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Qr.compare = Gu;
function qp(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Gu(t, e) !== 0;
}
Qr.equal = qp;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Qr, r = nr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function c(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var h = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | h << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var y = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var _ = o[10] | o[11] << 8;
        this._r[6] = (y >>> 14 | _ << 2) & 8191;
        var S = o[12] | o[13] << 8;
        this._r[7] = (_ >>> 11 | S << 5) & 8065;
        var C = o[14] | o[15] << 8;
        this._r[8] = (S >>> 8 | C << 8) & 8191, this._r[9] = C >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return c.prototype._blocks = function(o, u, h) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], y = this._h[1], _ = this._h[2], S = this._h[3], C = this._h[4], D = this._h[5], z = this._h[6], w = this._h[7], O = this._h[8], b = this._h[9], v = this._r[0], p = this._r[1], a = this._r[2], g = this._r[3], R = this._r[4], F = this._r[5], q = this._r[6], W = this._r[7], ie = this._r[8], A = this._r[9]; h >= 16; ) {
          var j = o[u + 0] | o[u + 1] << 8;
          d += j & 8191;
          var ne = o[u + 2] | o[u + 3] << 8;
          y += (j >>> 13 | ne << 3) & 8191;
          var G = o[u + 4] | o[u + 5] << 8;
          _ += (ne >>> 10 | G << 6) & 8191;
          var K = o[u + 6] | o[u + 7] << 8;
          S += (G >>> 7 | K << 9) & 8191;
          var Z = o[u + 8] | o[u + 9] << 8;
          C += (K >>> 4 | Z << 12) & 8191, D += Z >>> 1 & 8191;
          var V = o[u + 10] | o[u + 11] << 8;
          z += (Z >>> 14 | V << 2) & 8191;
          var Y = o[u + 12] | o[u + 13] << 8;
          w += (V >>> 11 | Y << 5) & 8191;
          var ve = o[u + 14] | o[u + 15] << 8;
          O += (Y >>> 8 | ve << 8) & 8191, b += ve >>> 5 | f;
          var te = 0, ge = te;
          ge += d * v, ge += y * (5 * A), ge += _ * (5 * ie), ge += S * (5 * W), ge += C * (5 * q), te = ge >>> 13, ge &= 8191, ge += D * (5 * F), ge += z * (5 * R), ge += w * (5 * g), ge += O * (5 * a), ge += b * (5 * p), te += ge >>> 13, ge &= 8191;
          var ue = te;
          ue += d * p, ue += y * v, ue += _ * (5 * A), ue += S * (5 * ie), ue += C * (5 * W), te = ue >>> 13, ue &= 8191, ue += D * (5 * q), ue += z * (5 * F), ue += w * (5 * R), ue += O * (5 * g), ue += b * (5 * a), te += ue >>> 13, ue &= 8191;
          var ye = te;
          ye += d * a, ye += y * p, ye += _ * v, ye += S * (5 * A), ye += C * (5 * ie), te = ye >>> 13, ye &= 8191, ye += D * (5 * W), ye += z * (5 * q), ye += w * (5 * F), ye += O * (5 * R), ye += b * (5 * g), te += ye >>> 13, ye &= 8191;
          var k = te;
          k += d * g, k += y * a, k += _ * p, k += S * v, k += C * (5 * A), te = k >>> 13, k &= 8191, k += D * (5 * ie), k += z * (5 * W), k += w * (5 * q), k += O * (5 * F), k += b * (5 * R), te += k >>> 13, k &= 8191;
          var $ = te;
          $ += d * R, $ += y * g, $ += _ * a, $ += S * p, $ += C * v, te = $ >>> 13, $ &= 8191, $ += D * (5 * A), $ += z * (5 * ie), $ += w * (5 * W), $ += O * (5 * q), $ += b * (5 * F), te += $ >>> 13, $ &= 8191;
          var P = te;
          P += d * F, P += y * R, P += _ * g, P += S * a, P += C * p, te = P >>> 13, P &= 8191, P += D * v, P += z * (5 * A), P += w * (5 * ie), P += O * (5 * W), P += b * (5 * q), te += P >>> 13, P &= 8191;
          var l = te;
          l += d * q, l += y * F, l += _ * R, l += S * g, l += C * a, te = l >>> 13, l &= 8191, l += D * p, l += z * v, l += w * (5 * A), l += O * (5 * ie), l += b * (5 * W), te += l >>> 13, l &= 8191;
          var T = te;
          T += d * W, T += y * q, T += _ * F, T += S * R, T += C * g, te = T >>> 13, T &= 8191, T += D * a, T += z * p, T += w * v, T += O * (5 * A), T += b * (5 * ie), te += T >>> 13, T &= 8191;
          var se = te;
          se += d * ie, se += y * W, se += _ * q, se += S * F, se += C * R, te = se >>> 13, se &= 8191, se += D * g, se += z * a, se += w * p, se += O * v, se += b * (5 * A), te += se >>> 13, se &= 8191;
          var ae = te;
          ae += d * A, ae += y * ie, ae += _ * W, ae += S * q, ae += C * F, te = ae >>> 13, ae &= 8191, ae += D * R, ae += z * g, ae += w * a, ae += O * p, ae += b * v, te += ae >>> 13, ae &= 8191, te = (te << 2) + te | 0, te = te + ge | 0, ge = te & 8191, te = te >>> 13, ue += te, d = ge, y = ue, _ = ye, S = k, C = $, D = P, z = l, w = T, O = se, b = ae, u += 16, h -= 16;
        }
        this._h[0] = d, this._h[1] = y, this._h[2] = _, this._h[3] = S, this._h[4] = C, this._h[5] = D, this._h[6] = z, this._h[7] = w, this._h[8] = O, this._h[9] = b;
      }, c.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var h = new Uint16Array(10), f, d, y, _;
        if (this._leftover) {
          for (_ = this._leftover, this._buffer[_++] = 1; _ < 16; _++)
            this._buffer[_] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, _ = 2; _ < 10; _++)
          this._h[_] += f, f = this._h[_] >>> 13, this._h[_] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, _ = 1; _ < 10; _++)
          h[_] = this._h[_] + f, f = h[_] >>> 13, h[_] &= 8191;
        for (h[9] -= 8192, d = (f ^ 1) - 1, _ = 0; _ < 10; _++)
          h[_] &= d;
        for (d = ~d, _ = 0; _ < 10; _++)
          this._h[_] = this._h[_] & d | h[_];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, _ = 1; _ < 8; _++)
          y = (this._h[_] + this._pad[_] | 0) + (y >>> 16) | 0, this._h[_] = y & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, c.prototype.update = function(o) {
        var u = 0, h = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (h -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(o, u, f), u += f, h -= f), h) {
          for (var d = 0; d < h; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += h;
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
  t.Poly1305 = n;
  function i(c, o) {
    var u = new n(c);
    u.update(o);
    var h = u.digest();
    return u.clean(), h;
  }
  t.oneTimeAuth = i;
  function s(c, o) {
    return c.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(c, o);
  }
  t.equal = s;
})(Wu);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ms, r = Wu, n = nr, i = De, s = Qr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var c = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return u.prototype.seal = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var _ = new Uint8Array(16);
        _.set(h, _.length - h.length);
        var S = new Uint8Array(32);
        e.stream(this._key, _, S, 4);
        var C = f.length + this.tagLength, D;
        if (y) {
          if (y.length !== C)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          D = y;
        } else
          D = new Uint8Array(C);
        return e.streamXOR(this._key, _, f, D, 4), this._authenticate(D.subarray(D.length - this.tagLength, D.length), S, D.subarray(0, D.length - this.tagLength), d), n.wipe(_), D;
      }, u.prototype.open = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var _ = new Uint8Array(16);
        _.set(h, _.length - h.length);
        var S = new Uint8Array(32);
        e.stream(this._key, _, S, 4);
        var C = new Uint8Array(this.tagLength);
        if (this._authenticate(C, S, f.subarray(0, f.length - this.tagLength), d), !s.equal(C, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var D = f.length - this.tagLength, z;
        if (y) {
          if (y.length !== D)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          z = y;
        } else
          z = new Uint8Array(D);
        return e.streamXOR(this._key, _, f.subarray(0, f.length - this.tagLength), z, 4), n.wipe(_), z;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(h, f, d, y) {
        var _ = new r.Poly1305(f);
        y && (_.update(y), y.length % 16 > 0 && _.update(c.subarray(y.length % 16))), _.update(d), d.length % 16 > 0 && _.update(c.subarray(d.length % 16));
        var S = new Uint8Array(8);
        y && i.writeUint64LE(y.length, S), _.update(S), i.writeUint64LE(d.length, S), _.update(S);
        for (var C = _.digest(), D = 0; D < C.length; D++)
          h[D] = C[D];
        _.clean(), n.wipe(C), n.wipe(S);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(Go);
var Zu = {}, Ei = {}, Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
function Bp(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Zo.isSerializableHash = Bp;
Object.defineProperty(Ei, "__esModule", { value: !0 });
var xr = Zo, Vp = Qr, Kp = nr, Yu = (
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
      this._outer.update(n), xr.isSerializableHash(this._inner) && xr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Kp.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!xr.isSerializableHash(this._inner) || !xr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      xr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), xr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!xr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!xr.isSerializableHash(this._inner) || !xr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!xr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Ei.HMAC = Yu;
function Hp(t, e, r) {
  var n = new Yu(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Ei.hmac = Hp;
Ei.equal = Vp.equal;
Object.defineProperty(Zu, "__esModule", { value: !0 });
var ic = Ei, sc = nr, Wp = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = ic.hmac(this._hash, n, r);
      this._hmac = new ic.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), sc.wipe(this._buffer), sc.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Gp = Zu.HKDF = Wp, vs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = De, r = nr;
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
      }, o.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, _ = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var S = f + 1; S < _ - 8; S++)
            this._buffer[S] = 0;
          e.writeUint32BE(d, this._buffer, _ - 8), e.writeUint32BE(y, this._buffer, _ - 4), s(this._temp, this._state, this._buffer, 0, _), this._finished = !0;
        }
        for (var S = 0; S < this.digestLength / 4; S++)
          e.writeUint32BE(this._state[S], u, S * 4);
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
  function s(o, u, h, f, d) {
    for (; d >= 64; ) {
      for (var y = u[0], _ = u[1], S = u[2], C = u[3], D = u[4], z = u[5], w = u[6], O = u[7], b = 0; b < 16; b++) {
        var v = f + b * 4;
        o[b] = e.readUint32BE(h, v);
      }
      for (var b = 16; b < 64; b++) {
        var p = o[b - 2], a = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = o[b - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        o[b] = (a + o[b - 7] | 0) + (g + o[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var a = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & z ^ ~D & w) | 0) + (O + (i[b] + o[b] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & _ ^ y & S ^ _ & S) | 0;
        O = w, w = z, z = D, D = C + a | 0, C = S, S = _, _ = y, y = a + g | 0;
      }
      u[0] += y, u[1] += _, u[2] += S, u[3] += C, u[4] += D, u[5] += z, u[6] += w, u[7] += O, f += 64, d -= 64;
    }
    return f;
  }
  function c(o) {
    var u = new n();
    u.update(o);
    var h = u.digest();
    return u.clean(), h;
  }
  t.hash = c;
})(vs);
var Yo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Mn, r = nr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const v = new Float64Array(16);
    if (b)
      for (let p = 0; p < b.length; p++)
        v[p] = b[p];
    return v;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function c(b) {
    let v = 1;
    for (let p = 0; p < 16; p++) {
      let a = b[p] + v + 65535;
      v = Math.floor(a / 65536), b[p] = a - v * 65536;
    }
    b[0] += v - 1 + 37 * (v - 1);
  }
  function o(b, v, p) {
    const a = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const R = a & (b[g] ^ v[g]);
      b[g] ^= R, v[g] ^= R;
    }
  }
  function u(b, v) {
    const p = n(), a = n();
    for (let g = 0; g < 16; g++)
      a[g] = v[g];
    c(a), c(a), c(a);
    for (let g = 0; g < 2; g++) {
      p[0] = a[0] - 65517;
      for (let F = 1; F < 15; F++)
        p[F] = a[F] - 65535 - (p[F - 1] >> 16 & 1), p[F - 1] &= 65535;
      p[15] = a[15] - 32767 - (p[14] >> 16 & 1);
      const R = p[15] >> 16 & 1;
      p[14] &= 65535, o(a, p, 1 - R);
    }
    for (let g = 0; g < 16; g++)
      b[2 * g] = a[g] & 255, b[2 * g + 1] = a[g] >> 8;
  }
  function h(b, v) {
    for (let p = 0; p < 16; p++)
      b[p] = v[2 * p] + (v[2 * p + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, v, p) {
    for (let a = 0; a < 16; a++)
      b[a] = v[a] + p[a];
  }
  function d(b, v, p) {
    for (let a = 0; a < 16; a++)
      b[a] = v[a] - p[a];
  }
  function y(b, v, p) {
    let a, g, R = 0, F = 0, q = 0, W = 0, ie = 0, A = 0, j = 0, ne = 0, G = 0, K = 0, Z = 0, V = 0, Y = 0, ve = 0, te = 0, ge = 0, ue = 0, ye = 0, k = 0, $ = 0, P = 0, l = 0, T = 0, se = 0, ae = 0, Fe = 0, Se = 0, je = 0, ze = 0, Je = 0, Qe = 0, Ue = p[0], Ne = p[1], Re = p[2], Te = p[3], Ie = p[4], xe = p[5], Ee = p[6], be = p[7], Ae = p[8], Me = p[9], _e = p[10], $e = p[11], ke = p[12], Be = p[13], qe = p[14], Ve = p[15];
    a = v[0], R += a * Ue, F += a * Ne, q += a * Re, W += a * Te, ie += a * Ie, A += a * xe, j += a * Ee, ne += a * be, G += a * Ae, K += a * Me, Z += a * _e, V += a * $e, Y += a * ke, ve += a * Be, te += a * qe, ge += a * Ve, a = v[1], F += a * Ue, q += a * Ne, W += a * Re, ie += a * Te, A += a * Ie, j += a * xe, ne += a * Ee, G += a * be, K += a * Ae, Z += a * Me, V += a * _e, Y += a * $e, ve += a * ke, te += a * Be, ge += a * qe, ue += a * Ve, a = v[2], q += a * Ue, W += a * Ne, ie += a * Re, A += a * Te, j += a * Ie, ne += a * xe, G += a * Ee, K += a * be, Z += a * Ae, V += a * Me, Y += a * _e, ve += a * $e, te += a * ke, ge += a * Be, ue += a * qe, ye += a * Ve, a = v[3], W += a * Ue, ie += a * Ne, A += a * Re, j += a * Te, ne += a * Ie, G += a * xe, K += a * Ee, Z += a * be, V += a * Ae, Y += a * Me, ve += a * _e, te += a * $e, ge += a * ke, ue += a * Be, ye += a * qe, k += a * Ve, a = v[4], ie += a * Ue, A += a * Ne, j += a * Re, ne += a * Te, G += a * Ie, K += a * xe, Z += a * Ee, V += a * be, Y += a * Ae, ve += a * Me, te += a * _e, ge += a * $e, ue += a * ke, ye += a * Be, k += a * qe, $ += a * Ve, a = v[5], A += a * Ue, j += a * Ne, ne += a * Re, G += a * Te, K += a * Ie, Z += a * xe, V += a * Ee, Y += a * be, ve += a * Ae, te += a * Me, ge += a * _e, ue += a * $e, ye += a * ke, k += a * Be, $ += a * qe, P += a * Ve, a = v[6], j += a * Ue, ne += a * Ne, G += a * Re, K += a * Te, Z += a * Ie, V += a * xe, Y += a * Ee, ve += a * be, te += a * Ae, ge += a * Me, ue += a * _e, ye += a * $e, k += a * ke, $ += a * Be, P += a * qe, l += a * Ve, a = v[7], ne += a * Ue, G += a * Ne, K += a * Re, Z += a * Te, V += a * Ie, Y += a * xe, ve += a * Ee, te += a * be, ge += a * Ae, ue += a * Me, ye += a * _e, k += a * $e, $ += a * ke, P += a * Be, l += a * qe, T += a * Ve, a = v[8], G += a * Ue, K += a * Ne, Z += a * Re, V += a * Te, Y += a * Ie, ve += a * xe, te += a * Ee, ge += a * be, ue += a * Ae, ye += a * Me, k += a * _e, $ += a * $e, P += a * ke, l += a * Be, T += a * qe, se += a * Ve, a = v[9], K += a * Ue, Z += a * Ne, V += a * Re, Y += a * Te, ve += a * Ie, te += a * xe, ge += a * Ee, ue += a * be, ye += a * Ae, k += a * Me, $ += a * _e, P += a * $e, l += a * ke, T += a * Be, se += a * qe, ae += a * Ve, a = v[10], Z += a * Ue, V += a * Ne, Y += a * Re, ve += a * Te, te += a * Ie, ge += a * xe, ue += a * Ee, ye += a * be, k += a * Ae, $ += a * Me, P += a * _e, l += a * $e, T += a * ke, se += a * Be, ae += a * qe, Fe += a * Ve, a = v[11], V += a * Ue, Y += a * Ne, ve += a * Re, te += a * Te, ge += a * Ie, ue += a * xe, ye += a * Ee, k += a * be, $ += a * Ae, P += a * Me, l += a * _e, T += a * $e, se += a * ke, ae += a * Be, Fe += a * qe, Se += a * Ve, a = v[12], Y += a * Ue, ve += a * Ne, te += a * Re, ge += a * Te, ue += a * Ie, ye += a * xe, k += a * Ee, $ += a * be, P += a * Ae, l += a * Me, T += a * _e, se += a * $e, ae += a * ke, Fe += a * Be, Se += a * qe, je += a * Ve, a = v[13], ve += a * Ue, te += a * Ne, ge += a * Re, ue += a * Te, ye += a * Ie, k += a * xe, $ += a * Ee, P += a * be, l += a * Ae, T += a * Me, se += a * _e, ae += a * $e, Fe += a * ke, Se += a * Be, je += a * qe, ze += a * Ve, a = v[14], te += a * Ue, ge += a * Ne, ue += a * Re, ye += a * Te, k += a * Ie, $ += a * xe, P += a * Ee, l += a * be, T += a * Ae, se += a * Me, ae += a * _e, Fe += a * $e, Se += a * ke, je += a * Be, ze += a * qe, Je += a * Ve, a = v[15], ge += a * Ue, ue += a * Ne, ye += a * Re, k += a * Te, $ += a * Ie, P += a * xe, l += a * Ee, T += a * be, se += a * Ae, ae += a * Me, Fe += a * _e, Se += a * $e, je += a * ke, ze += a * Be, Je += a * qe, Qe += a * Ve, R += 38 * ue, F += 38 * ye, q += 38 * k, W += 38 * $, ie += 38 * P, A += 38 * l, j += 38 * T, ne += 38 * se, G += 38 * ae, K += 38 * Fe, Z += 38 * Se, V += 38 * je, Y += 38 * ze, ve += 38 * Je, te += 38 * Qe, g = 1, a = R + g + 65535, g = Math.floor(a / 65536), R = a - g * 65536, a = F + g + 65535, g = Math.floor(a / 65536), F = a - g * 65536, a = q + g + 65535, g = Math.floor(a / 65536), q = a - g * 65536, a = W + g + 65535, g = Math.floor(a / 65536), W = a - g * 65536, a = ie + g + 65535, g = Math.floor(a / 65536), ie = a - g * 65536, a = A + g + 65535, g = Math.floor(a / 65536), A = a - g * 65536, a = j + g + 65535, g = Math.floor(a / 65536), j = a - g * 65536, a = ne + g + 65535, g = Math.floor(a / 65536), ne = a - g * 65536, a = G + g + 65535, g = Math.floor(a / 65536), G = a - g * 65536, a = K + g + 65535, g = Math.floor(a / 65536), K = a - g * 65536, a = Z + g + 65535, g = Math.floor(a / 65536), Z = a - g * 65536, a = V + g + 65535, g = Math.floor(a / 65536), V = a - g * 65536, a = Y + g + 65535, g = Math.floor(a / 65536), Y = a - g * 65536, a = ve + g + 65535, g = Math.floor(a / 65536), ve = a - g * 65536, a = te + g + 65535, g = Math.floor(a / 65536), te = a - g * 65536, a = ge + g + 65535, g = Math.floor(a / 65536), ge = a - g * 65536, R += g - 1 + 37 * (g - 1), g = 1, a = R + g + 65535, g = Math.floor(a / 65536), R = a - g * 65536, a = F + g + 65535, g = Math.floor(a / 65536), F = a - g * 65536, a = q + g + 65535, g = Math.floor(a / 65536), q = a - g * 65536, a = W + g + 65535, g = Math.floor(a / 65536), W = a - g * 65536, a = ie + g + 65535, g = Math.floor(a / 65536), ie = a - g * 65536, a = A + g + 65535, g = Math.floor(a / 65536), A = a - g * 65536, a = j + g + 65535, g = Math.floor(a / 65536), j = a - g * 65536, a = ne + g + 65535, g = Math.floor(a / 65536), ne = a - g * 65536, a = G + g + 65535, g = Math.floor(a / 65536), G = a - g * 65536, a = K + g + 65535, g = Math.floor(a / 65536), K = a - g * 65536, a = Z + g + 65535, g = Math.floor(a / 65536), Z = a - g * 65536, a = V + g + 65535, g = Math.floor(a / 65536), V = a - g * 65536, a = Y + g + 65535, g = Math.floor(a / 65536), Y = a - g * 65536, a = ve + g + 65535, g = Math.floor(a / 65536), ve = a - g * 65536, a = te + g + 65535, g = Math.floor(a / 65536), te = a - g * 65536, a = ge + g + 65535, g = Math.floor(a / 65536), ge = a - g * 65536, R += g - 1 + 37 * (g - 1), b[0] = R, b[1] = F, b[2] = q, b[3] = W, b[4] = ie, b[5] = A, b[6] = j, b[7] = ne, b[8] = G, b[9] = K, b[10] = Z, b[11] = V, b[12] = Y, b[13] = ve, b[14] = te, b[15] = ge;
  }
  function _(b, v) {
    y(b, v, v);
  }
  function S(b, v) {
    const p = n();
    for (let a = 0; a < 16; a++)
      p[a] = v[a];
    for (let a = 253; a >= 0; a--)
      _(p, p), a !== 2 && a !== 4 && y(p, p, v);
    for (let a = 0; a < 16; a++)
      b[a] = p[a];
  }
  function C(b, v) {
    const p = new Uint8Array(32), a = new Float64Array(80), g = n(), R = n(), F = n(), q = n(), W = n(), ie = n();
    for (let G = 0; G < 31; G++)
      p[G] = b[G];
    p[31] = b[31] & 127 | 64, p[0] &= 248, h(a, v);
    for (let G = 0; G < 16; G++)
      R[G] = a[G];
    g[0] = q[0] = 1;
    for (let G = 254; G >= 0; --G) {
      const K = p[G >>> 3] >>> (G & 7) & 1;
      o(g, R, K), o(F, q, K), f(W, g, F), d(g, g, F), f(F, R, q), d(R, R, q), _(q, W), _(ie, g), y(g, F, g), y(F, R, W), f(W, g, F), d(g, g, F), _(R, g), d(F, q, ie), y(g, F, s), f(g, g, q), y(F, F, g), y(g, q, ie), y(q, R, a), _(R, W), o(g, R, K), o(F, q, K);
    }
    for (let G = 0; G < 16; G++)
      a[G + 16] = g[G], a[G + 32] = F[G], a[G + 48] = R[G], a[G + 64] = q[G];
    const A = a.subarray(32), j = a.subarray(16);
    S(A, A), y(j, j, A);
    const ne = new Uint8Array(32);
    return u(ne, j), ne;
  }
  t.scalarMult = C;
  function D(b) {
    return C(b, i);
  }
  t.scalarMultBase = D;
  function z(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const v = new Uint8Array(b);
    return {
      publicKey: D(v),
      secretKey: v
    };
  }
  t.generateKeyPairFromSeed = z;
  function w(b) {
    const v = (0, e.randomBytes)(32, b), p = z(v);
    return (0, r.wipe)(v), p;
  }
  t.generateKeyPair = w;
  function O(b, v, p = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (v.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const a = C(b, v);
    if (p) {
      let g = 0;
      for (let R = 0; R < a.length; R++)
        g |= a[R];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return a;
  }
  t.sharedKey = O;
})(Yo);
var oc = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Zp = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Yp = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Jp = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Qp = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Xp = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), eg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, tg = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ac = 3, rg = [
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
], cc = [
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
function ng(t) {
  return t ? uc(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Xp() : typeof navigator < "u" ? uc(navigator.userAgent) : og();
}
function ig(t) {
  return t !== "" && rg.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function uc(t) {
  var e = ig(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Qp();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < ac && (i = oc(oc([], i, !0), ag(ac - i.length), !0)) : i = [];
  var s = i.join("."), c = sg(t), o = tg.exec(t);
  return o && o[1] ? new Jp(r, s, c, o[1]) : new Zp(r, s, c);
}
function sg(t) {
  for (var e = 0, r = cc.length; e < r; e++) {
    var n = cc[e], i = n[0], s = n[1], c = s.exec(t);
    if (c)
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
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.getLocalStorage = et.getLocalStorageOrThrow = et.getCrypto = et.getCryptoOrThrow = Qu = et.getLocation = et.getLocationOrThrow = Jo = et.getNavigator = et.getNavigatorOrThrow = Ju = et.getDocument = et.getDocumentOrThrow = et.getFromWindowOrThrow = et.getFromWindow = void 0;
function vn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
et.getFromWindow = vn;
function jn(t) {
  const e = vn(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
et.getFromWindowOrThrow = jn;
function cg() {
  return jn("document");
}
et.getDocumentOrThrow = cg;
function ug() {
  return vn("document");
}
var Ju = et.getDocument = ug;
function lg() {
  return jn("navigator");
}
et.getNavigatorOrThrow = lg;
function hg() {
  return vn("navigator");
}
var Jo = et.getNavigator = hg;
function fg() {
  return jn("location");
}
et.getLocationOrThrow = fg;
function dg() {
  return vn("location");
}
var Qu = et.getLocation = dg;
function pg() {
  return jn("crypto");
}
et.getCryptoOrThrow = pg;
function gg() {
  return vn("crypto");
}
et.getCrypto = gg;
function yg() {
  return jn("localStorage");
}
et.getLocalStorageOrThrow = yg;
function mg() {
  return vn("localStorage");
}
et.getLocalStorage = mg;
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
var Xu = Qo.getWindowMetadata = void 0;
const lc = et;
function vg() {
  let t, e;
  try {
    t = lc.getDocumentOrThrow(), e = lc.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), y = [];
    for (let _ = 0; _ < d.length; _++) {
      const S = d[_], C = S.getAttribute("rel");
      if (C && C.toLowerCase().indexOf("icon") > -1) {
        const D = S.getAttribute("href");
        if (D)
          if (D.toLowerCase().indexOf("https:") === -1 && D.toLowerCase().indexOf("http:") === -1 && D.indexOf("//") !== 0) {
            let z = e.protocol + "//" + e.host;
            if (D.indexOf("/") === 0)
              z += D;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const O = w.join("/");
              z += O + "/" + D;
            }
            y.push(z);
          } else if (D.indexOf("//") === 0) {
            const z = e.protocol + D;
            y.push(z);
          } else
            y.push(D);
      }
    }
    return y;
  }
  function n(...d) {
    const y = t.getElementsByTagName("meta");
    for (let _ = 0; _ < y.length; _++) {
      const S = y[_], C = ["itemprop", "property", "name"].map((D) => S.getAttribute(D)).filter((D) => D ? d.includes(D) : !1);
      if (C.length && C) {
        const D = S.getAttribute("content");
        if (D)
          return D;
      }
    }
    return "";
  }
  function i() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = t.title), d;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const c = i(), o = s(), u = e.origin, h = r();
  return {
    description: o,
    url: u,
    icons: h,
    name: c
  };
}
Xu = Qo.getWindowMetadata = vg;
var si = {}, bg = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), el = "%[a-f0-9]{2}", hc = new RegExp("(" + el + ")|([^%]+?)", "gi"), fc = new RegExp("(" + el + ")+", "gi");
function So(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], So(r), So(n));
}
function _g(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(hc) || [], r = 1; r < e.length; r++)
      t = So(e, r).join(""), e = t.match(hc) || [];
    return t;
  }
}
function wg(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = fc.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = _g(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = fc.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var c = i[s];
    t = t.replace(new RegExp(c, "g"), e[c]);
  }
  return t;
}
var Eg = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return wg(t);
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
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var c = n[s], o = t[c];
    (i ? e.indexOf(c) !== -1 : e(c, o, t)) && (r[c] = o);
  }
  return r;
};
(function(t) {
  const e = bg, r = Eg, n = Sg, i = xg, s = (w) => w == null, c = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (O) => (b, v) => {
          const p = b.length;
          return v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? b : v === null ? [...b, [f(O, w), "[", p, "]"].join("")] : [
            ...b,
            [f(O, w), "[", f(p, w), "]=", f(v, w)].join("")
          ];
        };
      case "bracket":
        return (O) => (b, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? b : v === null ? [...b, [f(O, w), "[]"].join("")] : [...b, [f(O, w), "[]=", f(v, w)].join("")];
      case "colon-list-separator":
        return (O) => (b, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? b : v === null ? [...b, [f(O, w), ":list="].join("")] : [...b, [f(O, w), ":list=", f(v, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (v, p) => p === void 0 || w.skipNull && p === null || w.skipEmptyString && p === "" ? v : (p = p === null ? "" : p, v.length === 0 ? [[f(b, w), O, f(p, w)].join("")] : [[v, f(p, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (O) => (b, v) => v === void 0 || w.skipNull && v === null || w.skipEmptyString && v === "" ? b : v === null ? [...b, f(O, w)] : [...b, [f(O, w), "=", f(v, w)].join("")];
    }
  }
  function u(w) {
    let O;
    switch (w.arrayFormat) {
      case "index":
        return (b, v, p) => {
          if (O = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !O) {
            p[b] = v;
            return;
          }
          p[b] === void 0 && (p[b] = {}), p[b][O[1]] = v;
        };
      case "bracket":
        return (b, v, p) => {
          if (O = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !O) {
            p[b] = v;
            return;
          }
          if (p[b] === void 0) {
            p[b] = [v];
            return;
          }
          p[b] = [].concat(p[b], v);
        };
      case "colon-list-separator":
        return (b, v, p) => {
          if (O = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !O) {
            p[b] = v;
            return;
          }
          if (p[b] === void 0) {
            p[b] = [v];
            return;
          }
          p[b] = [].concat(p[b], v);
        };
      case "comma":
      case "separator":
        return (b, v, p) => {
          const a = typeof v == "string" && v.includes(w.arrayFormatSeparator), g = typeof v == "string" && !a && d(v, w).includes(w.arrayFormatSeparator);
          v = g ? d(v, w) : v;
          const R = a || g ? v.split(w.arrayFormatSeparator).map((F) => d(F, w)) : v === null ? v : d(v, w);
          p[b] = R;
        };
      case "bracket-separator":
        return (b, v, p) => {
          const a = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !a) {
            p[b] = v && d(v, w);
            return;
          }
          const g = v === null ? [] : v.split(w.arrayFormatSeparator).map((R) => d(R, w));
          if (p[b] === void 0) {
            p[b] = g;
            return;
          }
          p[b] = [].concat(p[b], g);
        };
      default:
        return (b, v, p) => {
          if (p[b] === void 0) {
            p[b] = v;
            return;
          }
          p[b] = [].concat(p[b], v);
        };
    }
  }
  function h(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, O) {
    return O.encode ? O.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, O) {
    return O.decode ? r(w) : w;
  }
  function y(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? y(Object.keys(w)).sort((O, b) => Number(O) - Number(b)).map((O) => w[O]) : w;
  }
  function _(w) {
    const O = w.indexOf("#");
    return O !== -1 && (w = w.slice(0, O)), w;
  }
  function S(w) {
    let O = "";
    const b = w.indexOf("#");
    return b !== -1 && (O = w.slice(b)), O;
  }
  function C(w) {
    w = _(w);
    const O = w.indexOf("?");
    return O === -1 ? "" : w.slice(O + 1);
  }
  function D(w, O) {
    return O.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : O.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function z(w, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), h(O.arrayFormatSeparator);
    const b = u(O), v = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return v;
    for (const p of w.split("&")) {
      if (p === "")
        continue;
      let [a, g] = n(O.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? g : d(g, O), b(d(a, O), g, v);
    }
    for (const p of Object.keys(v)) {
      const a = v[p];
      if (typeof a == "object" && a !== null)
        for (const g of Object.keys(a))
          a[g] = D(a[g], O);
      else
        v[p] = D(a, O);
    }
    return O.sort === !1 ? v : (O.sort === !0 ? Object.keys(v).sort() : Object.keys(v).sort(O.sort)).reduce((p, a) => {
      const g = v[a];
      return g && typeof g == "object" && !Array.isArray(g) ? p[a] = y(g) : p[a] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = C, t.parse = z, t.stringify = (w, O) => {
    if (!w)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), h(O.arrayFormatSeparator);
    const b = (g) => O.skipNull && s(w[g]) || O.skipEmptyString && w[g] === "", v = o(O), p = {};
    for (const g of Object.keys(w))
      b(g) || (p[g] = w[g]);
    const a = Object.keys(p);
    return O.sort !== !1 && a.sort(O.sort), a.map((g) => {
      const R = w[g];
      return R === void 0 ? "" : R === null ? f(g, O) : Array.isArray(R) ? R.length === 0 && O.arrayFormat === "bracket-separator" ? f(g, O) + "[]" : R.reduce(v(g), []).join("&") : f(g, O) + "=" + f(R, O);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (w, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [b, v] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: z(C(w), O)
      },
      O && O.parseFragmentIdentifier && v ? { fragmentIdentifier: d(v, O) } : {}
    );
  }, t.stringifyUrl = (w, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [c]: !0
    }, O);
    const b = _(w.url).split("?")[0] || "", v = t.extract(w.url), p = t.parse(v, { sort: !1 }), a = Object.assign(p, w.query);
    let g = t.stringify(a, O);
    g && (g = `?${g}`);
    let R = S(w.url);
    return w.fragmentIdentifier && (R = `#${O[c] ? f(w.fragmentIdentifier, O) : w.fragmentIdentifier}`), `${b}${g}${R}`;
  }, t.pick = (w, O, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [c]: !1
    }, b);
    const { url: v, query: p, fragmentIdentifier: a } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: v,
      query: i(p, O),
      fragmentIdentifier: a
    }, b);
  }, t.exclude = (w, O, b) => {
    const v = Array.isArray(O) ? (p) => !O.includes(p) : (p, a) => !O(p, a);
    return t.pick(w, v, b);
  };
})(si);
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
function tl(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const rl = "base10", Kt = "base16", xo = "base64pad", Xo = "utf8", nl = 0, bn = 1, Ig = 0, dc = 1, Do = 12, ea = 32;
function Og() {
  const t = Yo.generateKeyPair();
  return { privateKey: Ht(t.secretKey, Kt), publicKey: Ht(t.publicKey, Kt) };
}
function Io() {
  const t = Mn.randomBytes(ea);
  return Ht(t, Kt);
}
function Cg(t, e) {
  const r = Yo.sharedKey(Qt(t, Kt), Qt(e, Kt)), n = new Gp(vs.SHA256, r).expand(ea);
  return Ht(n, Kt);
}
function Tg(t) {
  const e = vs.hash(Qt(t, Kt));
  return Ht(e, Kt);
}
function An(t) {
  const e = vs.hash(Qt(t, Xo));
  return Ht(e, Kt);
}
function Ag(t) {
  return Qt(`${t}`, rl);
}
function Si(t) {
  return Number(Ht(t, rl));
}
function Ng(t) {
  const e = Ag(typeof t.type < "u" ? t.type : nl);
  if (Si(e) === bn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? Qt(t.senderPublicKey, Kt) : void 0, n = typeof t.iv < "u" ? Qt(t.iv, Kt) : Mn.randomBytes(Do), i = new Go.ChaCha20Poly1305(Qt(t.symKey, Kt)).seal(n, Qt(t.message, Xo));
  return Pg({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function Rg(t) {
  const e = new Go.ChaCha20Poly1305(Qt(t.symKey, Kt)), { sealed: r, iv: n } = Qi(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Ht(i, Xo);
}
function Pg(t) {
  if (Si(t.type) === bn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ht(wo([t.type, t.senderPublicKey, t.iv, t.sealed]), xo);
  }
  return Ht(wo([t.type, t.iv, t.sealed]), xo);
}
function Qi(t) {
  const e = Qt(t, xo), r = e.slice(Ig, dc), n = dc;
  if (Si(r) === bn) {
    const o = n + ea, u = o + Do, h = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: h };
  }
  const i = n + Do, s = e.slice(n, i), c = e.slice(i);
  return { type: r, sealed: c, iv: s };
}
function Lg(t, e) {
  const r = Qi(t);
  return il({ type: Si(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ht(r.senderPublicKey, Kt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function il(t) {
  const e = (t == null ? void 0 : t.type) || nl;
  if (e === bn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function pc(t) {
  return t.type === bn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Fg = Object.defineProperty, gc = Object.getOwnPropertySymbols, Ug = Object.prototype.hasOwnProperty, Mg = Object.prototype.propertyIsEnumerable, yc = (t, e, r) => e in t ? Fg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, mc = (t, e) => {
  for (var r in e || (e = {}))
    Ug.call(e, r) && yc(t, r, e[r]);
  if (gc)
    for (var r of gc(e))
      Mg.call(e, r) && yc(t, r, e[r]);
  return t;
};
const jg = "ReactNative", tr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, $g = "js";
function ta() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function bs() {
  return !Ju() && !!Jo() && navigator.product === jg;
}
function xi() {
  return !ta() && !!Jo();
}
function Di() {
  return bs() ? tr.reactNative : ta() ? tr.node : xi() ? tr.browser : tr.unknown;
}
function kg(t, e) {
  let r = si.parse(t);
  return r = mc(mc({}, r), e), t = si.stringify(r), t;
}
function zg() {
  return Xu() || { name: "", description: "", url: "", icons: [""] };
}
function qg() {
  if (Di() === tr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = ng();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Bg() {
  var t;
  const e = Di();
  return e === tr.browser ? [e, ((t = Qu()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Vg(t, e, r) {
  const n = qg(), i = Bg();
  return [[t, e].join("-"), [$g, r].join("-"), n, i].join("/");
}
function Kg({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: c }) {
  const o = r.split("?"), u = Vg(t, e, n), h = { auth: i, ua: u, projectId: s, useOnCloseEvent: c || void 0 }, f = kg(o[1] || "", h);
  return o[0] + "?" + f;
}
function fn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function sl(t) {
  return Object.fromEntries(t.entries());
}
function ol(t) {
  return new Map(Object.entries(t));
}
function In(t = fe.FIVE_MINUTES, e) {
  const r = fe.toMiliseconds(t || fe.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (c) => {
    s && n && (clearTimeout(s), n(c));
  }, reject: (c) => {
    s && i && (clearTimeout(s), i(c));
  }, done: () => new Promise((c, o) => {
    s = setTimeout(() => {
      o(new Error(e));
    }, r), n = c, i = o;
  }) };
}
function oi(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const c = await t;
      n(c);
    } catch (c) {
      i(c);
    }
    clearTimeout(s);
  });
}
function al(t, e) {
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
  return al("topic", t);
}
function Wg(t) {
  return al("id", t);
}
function cl(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function fr(t, e) {
  return fe.fromMiliseconds((e || Date.now()) + fe.toMiliseconds(t));
}
function Kr(t) {
  return Date.now() >= fe.toMiliseconds(t);
}
function St(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Gg({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, c = Di();
    c === tr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : c === tr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const Zg = "irn";
function Oo(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Zg };
}
function Ki(t) {
  const e = Dg[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Yg = Object.defineProperty, vc = Object.getOwnPropertySymbols, Jg = Object.prototype.hasOwnProperty, Qg = Object.prototype.propertyIsEnumerable, bc = (t, e, r) => e in t ? Yg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xg = (t, e) => {
  for (var r in e || (e = {}))
    Jg.call(e, r) && bc(t, r, e[r]);
  if (vc)
    for (var r of vc(e))
      Qg.call(e, r) && bc(t, r, e[r]);
  return t;
};
function ey(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), c = t[i];
      r[s] = c;
    }
  }), r;
}
function ty(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", c = si.parse(s);
  return { protocol: n, topic: ry(i[0]), version: parseInt(i[1], 10), symKey: c.symKey, relay: ey(c) };
}
function ry(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function ny(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function iy(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + si.stringify(Xg({ symKey: t.symKey }, ny(t.relay)));
}
function $n(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function sy(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...$n(r.accounts));
  }), e;
}
function oy(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    $n(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function ay(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    $n(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function cy(t, e) {
  const r = Hi(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((c) => `${c.split(":")[0]}:${c.split(":")[1]}`) };
  return n;
}
const uy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, ly = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function oe(t, e) {
  const { message: r, code: n } = ly[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function xt(t, e) {
  const { message: r, code: n } = uy[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Ii(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function ri(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Vt(t) {
  return typeof t > "u";
}
function Ct(t, e) {
  return e && Vt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function ra(t, e) {
  return e && Vt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function hy(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return fn(i, n) ? (n.forEach((c) => {
    const { accounts: o, methods: u, events: h } = t.namespaces[c], f = $n(o), d = r[c];
    (!fn(tl(c, d), f) || !fn(d.methods, u) || !fn(d.events, h)) && (s = !1);
  }), s) : !1;
}
function Xi(t) {
  return Ct(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function fy(t) {
  if (Ct(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Xi(r);
    }
  }
  return !1;
}
function dy(t) {
  if (Ct(t, !1))
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
  return Ct(t == null ? void 0 : t.publicKey, !1) || (r = oe("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function _c(t) {
  let e = !0;
  return Ii(t) ? t.length && (e = t.every((r) => Ct(r, !1))) : e = !1, e;
}
function my(t, e, r) {
  let n = null;
  return Ii(e) && e.length ? e.forEach((i) => {
    n || Xi(i) || (n = xt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : Xi(t) || (n = xt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function vy(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const c = my(i, tl(i, s), `${e} ${r}`);
    c && (n = c);
  }), n;
}
function by(t, e) {
  let r = null;
  return Ii(t) ? t.forEach((n) => {
    r || fy(n) || (r = xt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = xt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function _y(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = by(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function wy(t, e) {
  let r = null;
  return _c(t == null ? void 0 : t.methods) ? _c(t == null ? void 0 : t.events) || (r = xt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = xt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function ul(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = wy(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function Ey(t, e, r) {
  let n = null;
  if (t && ri(t)) {
    const i = ul(t, e);
    i && (n = i);
    const s = vy(t, e, r);
    s && (n = s);
  } else
    n = oe("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Hi(t, e) {
  let r = null;
  if (t && ri(t)) {
    const n = ul(t, e);
    n && (r = n);
    const i = _y(t, e);
    i && (r = i);
  } else
    r = oe("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function ll(t) {
  return Ct(t.protocol, !0);
}
function Sy(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && Ii(t) && t.length && t.forEach((n) => {
    r = ll(n);
  }), r;
}
function xy(t) {
  return typeof t == "number";
}
function Jt(t) {
  return typeof t < "u" && typeof t !== null;
}
function Dy(t) {
  return !(!t || typeof t != "object" || !t.code || !ra(t.code, !1) || !t.message || !Ct(t.message, !1));
}
function Iy(t) {
  return !(Vt(t) || !Ct(t.method, !1));
}
function Oy(t) {
  return !(Vt(t) || Vt(t.result) && Vt(t.error) || !ra(t.id, !1) || !Ct(t.jsonrpc, !1));
}
function Cy(t) {
  return !(Vt(t) || !Ct(t.name, !1));
}
function wc(t, e) {
  return !(!Xi(e) || !sy(t).includes(e));
}
function Ty(t, e, r) {
  return Ct(r, !1) ? oy(t, e).includes(r) : !1;
}
function Ay(t, e, r) {
  return Ct(r, !1) ? ay(t, e).includes(r) : !1;
}
function Ec(t, e, r) {
  let n = null;
  const i = Ny(t), s = Ry(e), c = Object.keys(i), o = Object.keys(s), u = Sc(Object.keys(t)), h = Sc(Object.keys(e)), f = u.filter((d) => !h.includes(d));
  return f.length && (n = oe("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), fn(c, o) || (n = oe("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const y = $n(e[d].accounts);
    y.includes(d) || (n = oe("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${y.toString()}`));
  }), c.forEach((d) => {
    n || (fn(i[d].methods, s[d].methods) ? fn(i[d].events, s[d].events) || (n = oe("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = oe("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function Ny(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Sc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Ry(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = $n(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Py(t, e) {
  return ra(t, !1) && t <= e.max && t >= e.min;
}
function xc() {
  const t = Di();
  return new Promise((e) => {
    switch (t) {
      case tr.browser:
        e(Ly());
        break;
      case tr.reactNative:
        e(Fy());
        break;
      case tr.node:
        e(Uy());
        break;
      default:
        e(!0);
    }
  });
}
function Ly() {
  return xi() && (navigator == null ? void 0 : navigator.onLine);
}
async function Fy() {
  if (bs() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Uy() {
  return !0;
}
function My(t) {
  switch (Di()) {
    case tr.browser:
      jy(t);
      break;
    case tr.reactNative:
      $y(t);
      break;
  }
}
function jy(t) {
  xi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function $y(t) {
  bs() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Qs = {};
let ki = class {
  static get(e) {
    return Qs[e];
  }
  static set(e, r) {
    Qs[e] = r;
  }
  static delete(e) {
    delete Qs[e];
  }
};
const ky = "PARSE_ERROR", zy = "INVALID_REQUEST", qy = "METHOD_NOT_FOUND", By = "INVALID_PARAMS", hl = "INTERNAL_ERROR", na = "SERVER_ERROR", Vy = [-32700, -32600, -32601, -32602, -32603], ni = {
  [ky]: { code: -32700, message: "Parse error" },
  [zy]: { code: -32600, message: "Invalid Request" },
  [qy]: { code: -32601, message: "Method not found" },
  [By]: { code: -32602, message: "Invalid params" },
  [hl]: { code: -32603, message: "Internal error" },
  [na]: { code: -32e3, message: "Server error" }
}, fl = na;
function Ky(t) {
  return Vy.includes(t);
}
function Dc(t) {
  return Object.keys(ni).includes(t) ? ni[t] : ni[fl];
}
function Hy(t) {
  const e = Object.values(ni).find((r) => r.code === t);
  return e || ni[fl];
}
function Wy(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var dl = {}, Fr = {}, Ic;
function Gy() {
  if (Ic)
    return Fr;
  Ic = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.isBrowserCryptoAvailable = Fr.getSubtleCrypto = Fr.getBrowerCrypto = void 0;
  function t() {
    return (Or == null ? void 0 : Or.crypto) || (Or == null ? void 0 : Or.msCrypto) || {};
  }
  Fr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  Fr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Fr.isBrowserCryptoAvailable = r, Fr;
}
var Ur = {}, Oc;
function Zy() {
  if (Oc)
    return Ur;
  Oc = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.isBrowser = Ur.isNode = Ur.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Ur.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Ur.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Ur.isBrowser = r, Ur;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Nr;
  e.__exportStar(Gy(), t), e.__exportStar(Zy(), t);
})(dl);
function ia(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function pl(t = 6) {
  return BigInt(ia(t));
}
function ai(t, e, r) {
  return {
    id: r || ia(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function sa(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function oa(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Yy(e, r)
  };
}
function Yy(t, e) {
  return typeof t > "u" ? Dc(hl) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Dc(na)), { message: t })), typeof e < "u" && (t.data = e), Ky(t.code) && (t = Hy(t.code)), t);
}
class Jy {
}
class Qy extends Jy {
  constructor() {
    super();
  }
}
class Xy extends Qy {
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
function Cc(t) {
  return rm(t, em);
}
function nm(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function gl(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function aa(t) {
  return gl(t) && "method" in t;
}
function _s(t) {
  return gl(t) && ($r(t) || dr(t));
}
function $r(t) {
  return "result" in t;
}
function dr(t) {
  return "error" in t;
}
class im extends Xy {
  constructor(e) {
    super(e), this.events = new cr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(ai(e.method, e.params || [], e.id || pl().toString()), r);
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
        dr(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", e), _s(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const sm = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), om = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Tc = (t) => t.split("?")[0], Ac = 10, am = sm();
class cm {
  constructor(e) {
    if (this.url = e, this.events = new cr.EventEmitter(), this.registering = !1, !Cc(e))
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
  async send(e, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ko(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!Cc(e))
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
      const i = dl.isReactNative() ? void 0 : { rejectUnauthorized: !nm(e) }, s = new am(e, [], i);
      om() ? s.onerror = (c) => {
        const o = c;
        n(this.emitError(o.error));
      } : s.on("error", (c) => {
        n(this.emitError(c));
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
    const r = typeof e.data == "string" ? Au(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = oa(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Wy(e, Tc(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ac && this.events.setMaxListeners(Ac);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Tc(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var es = { exports: {} };
es.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, c = 9007199254740991, o = "[object Arguments]", u = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", _ = "[object Function]", S = "[object GeneratorFunction]", C = "[object Map]", D = "[object Number]", z = "[object Null]", w = "[object Object]", O = "[object Promise]", b = "[object Proxy]", v = "[object RegExp]", p = "[object Set]", a = "[object String]", g = "[object Symbol]", R = "[object Undefined]", F = "[object WeakMap]", q = "[object ArrayBuffer]", W = "[object DataView]", ie = "[object Float32Array]", A = "[object Float64Array]", j = "[object Int8Array]", ne = "[object Int16Array]", G = "[object Int32Array]", K = "[object Uint8Array]", Z = "[object Uint8ClampedArray]", V = "[object Uint16Array]", Y = "[object Uint32Array]", ve = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, ge = /^(?:0|[1-9]\d*)$/, ue = {};
  ue[ie] = ue[A] = ue[j] = ue[ne] = ue[G] = ue[K] = ue[Z] = ue[V] = ue[Y] = !0, ue[o] = ue[u] = ue[q] = ue[f] = ue[W] = ue[d] = ue[y] = ue[_] = ue[C] = ue[D] = ue[w] = ue[v] = ue[p] = ue[a] = ue[F] = !1;
  var ye = typeof Or == "object" && Or && Or.Object === Object && Or, k = typeof self == "object" && self && self.Object === Object && self, $ = ye || k || Function("return this")(), P = e && !e.nodeType && e, l = P && !0 && t && !t.nodeType && t, T = l && l.exports === P, se = T && ye.process, ae = function() {
    try {
      return se && se.binding && se.binding("util");
    } catch {
    }
  }(), Fe = ae && ae.isTypedArray;
  function Se(E, L) {
    for (var H = -1, he = E == null ? 0 : E.length, rt = 0, Oe = []; ++H < he; ) {
      var gt = E[H];
      L(gt, H, E) && (Oe[rt++] = gt);
    }
    return Oe;
  }
  function je(E, L) {
    for (var H = -1, he = L.length, rt = E.length; ++H < he; )
      E[rt + H] = L[H];
    return E;
  }
  function ze(E, L) {
    for (var H = -1, he = E == null ? 0 : E.length; ++H < he; )
      if (L(E[H], H, E))
        return !0;
    return !1;
  }
  function Je(E, L) {
    for (var H = -1, he = Array(E); ++H < E; )
      he[H] = L(H);
    return he;
  }
  function Qe(E) {
    return function(L) {
      return E(L);
    };
  }
  function Ue(E, L) {
    return E.has(L);
  }
  function Ne(E, L) {
    return E == null ? void 0 : E[L];
  }
  function Re(E) {
    var L = -1, H = Array(E.size);
    return E.forEach(function(he, rt) {
      H[++L] = [rt, he];
    }), H;
  }
  function Te(E, L) {
    return function(H) {
      return E(L(H));
    };
  }
  function Ie(E) {
    var L = -1, H = Array(E.size);
    return E.forEach(function(he) {
      H[++L] = he;
    }), H;
  }
  var xe = Array.prototype, Ee = Function.prototype, be = Object.prototype, Ae = $["__core-js_shared__"], Me = Ee.toString, _e = be.hasOwnProperty, $e = function() {
    var E = /[^.]+$/.exec(Ae && Ae.keys && Ae.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), ke = be.toString, Be = RegExp(
    "^" + Me.call(_e).replace(ve, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = T ? $.Buffer : void 0, Ve = $.Symbol, Xt = $.Uint8Array, Gt = be.propertyIsEnumerable, ur = xe.splice, zt = Ve ? Ve.toStringTag : void 0, Rt = Object.getOwnPropertySymbols, Xr = qe ? qe.isBuffer : void 0, wn = Te(Object.keys, Object), at = Ge($, "DataView"), nt = Ge($, "Map"), lt = Ge($, "Promise"), ht = Ge($, "Set"), ft = Ge($, "WeakMap"), it = Ge(Object, "create"), yt = tn(at), mt = tn(nt), vt = tn(lt), bt = tn(ht), _t = tn(ft), dt = Ve ? Ve.prototype : void 0, pt = dt ? dt.valueOf : void 0;
  function Xe(E) {
    var L = -1, H = E == null ? 0 : E.length;
    for (this.clear(); ++L < H; ) {
      var he = E[L];
      this.set(he[0], he[1]);
    }
  }
  function wt() {
    this.__data__ = it ? it(null) : {}, this.size = 0;
  }
  function Et(E) {
    var L = this.has(E) && delete this.__data__[E];
    return this.size -= L ? 1 : 0, L;
  }
  function Is(E) {
    var L = this.__data__;
    if (it) {
      var H = L[E];
      return H === n ? void 0 : H;
    }
    return _e.call(L, E) ? L[E] : void 0;
  }
  function Os(E) {
    var L = this.__data__;
    return it ? L[E] !== void 0 : _e.call(L, E);
  }
  function Cs(E, L) {
    var H = this.__data__;
    return this.size += this.has(E) ? 0 : 1, H[E] = it && L === void 0 ? n : L, this;
  }
  Xe.prototype.clear = wt, Xe.prototype.delete = Et, Xe.prototype.get = Is, Xe.prototype.has = Os, Xe.prototype.set = Cs;
  function lr(E) {
    var L = -1, H = E == null ? 0 : E.length;
    for (this.clear(); ++L < H; ) {
      var he = E[L];
      this.set(he[0], he[1]);
    }
  }
  function Ts() {
    this.__data__ = [], this.size = 0;
  }
  function As(E) {
    var L = this.__data__, H = x(L, E);
    if (H < 0)
      return !1;
    var he = L.length - 1;
    return H == he ? L.pop() : ur.call(L, H, 1), --this.size, !0;
  }
  function Ns(E) {
    var L = this.__data__, H = x(L, E);
    return H < 0 ? void 0 : L[H][1];
  }
  function Rs(E) {
    return x(this.__data__, E) > -1;
  }
  function Ps(E, L) {
    var H = this.__data__, he = x(H, E);
    return he < 0 ? (++this.size, H.push([E, L])) : H[he][1] = L, this;
  }
  lr.prototype.clear = Ts, lr.prototype.delete = As, lr.prototype.get = Ns, lr.prototype.has = Rs, lr.prototype.set = Ps;
  function Pr(E) {
    var L = -1, H = E == null ? 0 : E.length;
    for (this.clear(); ++L < H; ) {
      var he = E[L];
      this.set(he[0], he[1]);
    }
  }
  function Ls() {
    this.size = 0, this.__data__ = {
      hash: new Xe(),
      map: new (nt || lr)(),
      string: new Xe()
    };
  }
  function Ti(E) {
    var L = tt(this, E).delete(E);
    return this.size -= L ? 1 : 0, L;
  }
  function en(E) {
    return tt(this, E).get(E);
  }
  function Ai(E) {
    return tt(this, E).has(E);
  }
  function qr(E, L) {
    var H = tt(this, E), he = H.size;
    return H.set(E, L), this.size += H.size == he ? 0 : 1, this;
  }
  Pr.prototype.clear = Ls, Pr.prototype.delete = Ti, Pr.prototype.get = en, Pr.prototype.has = Ai, Pr.prototype.set = qr;
  function En(E) {
    var L = -1, H = E == null ? 0 : E.length;
    for (this.__data__ = new Pr(); ++L < H; )
      this.add(E[L]);
  }
  function Sn(E) {
    return this.__data__.set(E, n), this;
  }
  function kn(E) {
    return this.__data__.has(E);
  }
  En.prototype.add = En.prototype.push = Sn, En.prototype.has = kn;
  function wr(E) {
    var L = this.__data__ = new lr(E);
    this.size = L.size;
  }
  function Fs() {
    this.__data__ = new lr(), this.size = 0;
  }
  function zn(E) {
    var L = this.__data__, H = L.delete(E);
    return this.size = L.size, H;
  }
  function Us(E) {
    return this.__data__.get(E);
  }
  function Ms(E) {
    return this.__data__.has(E);
  }
  function m(E, L) {
    var H = this.__data__;
    if (H instanceof lr) {
      var he = H.__data__;
      if (!nt || he.length < r - 1)
        return he.push([E, L]), this.size = ++H.size, this;
      H = this.__data__ = new Pr(he);
    }
    return H.set(E, L), this.size = H.size, this;
  }
  wr.prototype.clear = Fs, wr.prototype.delete = zn, wr.prototype.get = Us, wr.prototype.has = Ms, wr.prototype.set = m;
  function I(E, L) {
    var H = Ri(E), he = !H && Gl(E), rt = !H && !he && ks(E), Oe = !H && !he && !rt && wa(E), gt = H || he || rt || Oe, Dt = gt ? Je(E.length, String) : [], Tt = Dt.length;
    for (var ct in E)
      (L || _e.call(E, ct)) && !(gt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ct == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      rt && (ct == "offset" || ct == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Oe && (ct == "buffer" || ct == "byteLength" || ct == "byteOffset") || // Skip index properties.
      js(ct, Tt))) && Dt.push(ct);
    return Dt;
  }
  function x(E, L) {
    for (var H = E.length; H--; )
      if (ma(E[H][0], L))
        return H;
    return -1;
  }
  function U(E, L, H) {
    var he = L(E);
    return Ri(E) ? he : je(he, H(E));
  }
  function N(E) {
    return E == null ? E === void 0 ? R : z : zt && zt in Object(E) ? Zt(E) : Wl(E);
  }
  function M(E) {
    return Bn(E) && N(E) == o;
  }
  function B(E, L, H, he, rt) {
    return E === L ? !0 : E == null || L == null || !Bn(E) && !Bn(L) ? E !== E && L !== L : J(E, L, H, he, B, rt);
  }
  function J(E, L, H, he, rt, Oe) {
    var gt = Ri(E), Dt = Ri(L), Tt = gt ? u : ir(E), ct = Dt ? u : ir(L);
    Tt = Tt == o ? w : Tt, ct = ct == o ? w : ct;
    var er = Tt == w, hr = ct == w, Pt = Tt == ct;
    if (Pt && ks(E)) {
      if (!ks(L))
        return !1;
      gt = !0, er = !1;
    }
    if (Pt && !er)
      return Oe || (Oe = new wr()), gt || wa(E) ? de(E, L, H, he, rt, Oe) : Pe(E, L, Tt, H, he, rt, Oe);
    if (!(H & i)) {
      var sr = er && _e.call(E, "__wrapped__"), or = hr && _e.call(L, "__wrapped__");
      if (sr || or) {
        var Br = sr ? E.value() : E, Lr = or ? L.value() : L;
        return Oe || (Oe = new wr()), rt(Br, Lr, H, he, Oe);
      }
    }
    return Pt ? (Oe || (Oe = new wr()), Ze(E, L, H, he, rt, Oe)) : !1;
  }
  function ee(E) {
    if (!_a(E) || Ni(E))
      return !1;
    var L = va(E) ? Be : te;
    return L.test(tn(E));
  }
  function X(E) {
    return Bn(E) && ba(E.length) && !!ue[N(E)];
  }
  function Q(E) {
    if (!Hl(E))
      return wn(E);
    var L = [];
    for (var H in Object(E))
      _e.call(E, H) && H != "constructor" && L.push(H);
    return L;
  }
  function de(E, L, H, he, rt, Oe) {
    var gt = H & i, Dt = E.length, Tt = L.length;
    if (Dt != Tt && !(gt && Tt > Dt))
      return !1;
    var ct = Oe.get(E);
    if (ct && Oe.get(L))
      return ct == L;
    var er = -1, hr = !0, Pt = H & s ? new En() : void 0;
    for (Oe.set(E, L), Oe.set(L, E); ++er < Dt; ) {
      var sr = E[er], or = L[er];
      if (he)
        var Br = gt ? he(or, sr, er, L, E, Oe) : he(sr, or, er, E, L, Oe);
      if (Br !== void 0) {
        if (Br)
          continue;
        hr = !1;
        break;
      }
      if (Pt) {
        if (!ze(L, function(Lr, rn) {
          if (!Ue(Pt, rn) && (sr === Lr || rt(sr, Lr, H, he, Oe)))
            return Pt.push(rn);
        })) {
          hr = !1;
          break;
        }
      } else if (!(sr === or || rt(sr, or, H, he, Oe))) {
        hr = !1;
        break;
      }
    }
    return Oe.delete(E), Oe.delete(L), hr;
  }
  function Pe(E, L, H, he, rt, Oe, gt) {
    switch (H) {
      case W:
        if (E.byteLength != L.byteLength || E.byteOffset != L.byteOffset)
          return !1;
        E = E.buffer, L = L.buffer;
      case q:
        return !(E.byteLength != L.byteLength || !Oe(new Xt(E), new Xt(L)));
      case f:
      case d:
      case D:
        return ma(+E, +L);
      case y:
        return E.name == L.name && E.message == L.message;
      case v:
      case a:
        return E == L + "";
      case C:
        var Dt = Re;
      case p:
        var Tt = he & i;
        if (Dt || (Dt = Ie), E.size != L.size && !Tt)
          return !1;
        var ct = gt.get(E);
        if (ct)
          return ct == L;
        he |= s, gt.set(E, L);
        var er = de(Dt(E), Dt(L), he, rt, Oe, gt);
        return gt.delete(E), er;
      case g:
        if (pt)
          return pt.call(E) == pt.call(L);
    }
    return !1;
  }
  function Ze(E, L, H, he, rt, Oe) {
    var gt = H & i, Dt = He(E), Tt = Dt.length, ct = He(L), er = ct.length;
    if (Tt != er && !gt)
      return !1;
    for (var hr = Tt; hr--; ) {
      var Pt = Dt[hr];
      if (!(gt ? Pt in L : _e.call(L, Pt)))
        return !1;
    }
    var sr = Oe.get(E);
    if (sr && Oe.get(L))
      return sr == L;
    var or = !0;
    Oe.set(E, L), Oe.set(L, E);
    for (var Br = gt; ++hr < Tt; ) {
      Pt = Dt[hr];
      var Lr = E[Pt], rn = L[Pt];
      if (he)
        var Ea = gt ? he(rn, Lr, Pt, L, E, Oe) : he(Lr, rn, Pt, E, L, Oe);
      if (!(Ea === void 0 ? Lr === rn || rt(Lr, rn, H, he, Oe) : Ea)) {
        or = !1;
        break;
      }
      Br || (Br = Pt == "constructor");
    }
    if (or && !Br) {
      var Pi = E.constructor, Li = L.constructor;
      Pi != Li && "constructor" in E && "constructor" in L && !(typeof Pi == "function" && Pi instanceof Pi && typeof Li == "function" && Li instanceof Li) && (or = !1);
    }
    return Oe.delete(E), Oe.delete(L), or;
  }
  function He(E) {
    return U(E, Jl, qn);
  }
  function tt(E, L) {
    var H = E.__data__;
    return $s(L) ? H[typeof L == "string" ? "string" : "hash"] : H.map;
  }
  function Ge(E, L) {
    var H = Ne(E, L);
    return ee(H) ? H : void 0;
  }
  function Zt(E) {
    var L = _e.call(E, zt), H = E[zt];
    try {
      E[zt] = void 0;
      var he = !0;
    } catch {
    }
    var rt = ke.call(E);
    return he && (L ? E[zt] = H : delete E[zt]), rt;
  }
  var qn = Rt ? function(E) {
    return E == null ? [] : (E = Object(E), Se(Rt(E), function(L) {
      return Gt.call(E, L);
    }));
  } : Ql, ir = N;
  (at && ir(new at(new ArrayBuffer(1))) != W || nt && ir(new nt()) != C || lt && ir(lt.resolve()) != O || ht && ir(new ht()) != p || ft && ir(new ft()) != F) && (ir = function(E) {
    var L = N(E), H = L == w ? E.constructor : void 0, he = H ? tn(H) : "";
    if (he)
      switch (he) {
        case yt:
          return W;
        case mt:
          return C;
        case vt:
          return O;
        case bt:
          return p;
        case _t:
          return F;
      }
    return L;
  });
  function js(E, L) {
    return L = L ?? c, !!L && (typeof E == "number" || ge.test(E)) && E > -1 && E % 1 == 0 && E < L;
  }
  function $s(E) {
    var L = typeof E;
    return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? E !== "__proto__" : E === null;
  }
  function Ni(E) {
    return !!$e && $e in E;
  }
  function Hl(E) {
    var L = E && E.constructor, H = typeof L == "function" && L.prototype || be;
    return E === H;
  }
  function Wl(E) {
    return ke.call(E);
  }
  function tn(E) {
    if (E != null) {
      try {
        return Me.call(E);
      } catch {
      }
      try {
        return E + "";
      } catch {
      }
    }
    return "";
  }
  function ma(E, L) {
    return E === L || E !== E && L !== L;
  }
  var Gl = M(function() {
    return arguments;
  }()) ? M : function(E) {
    return Bn(E) && _e.call(E, "callee") && !Gt.call(E, "callee");
  }, Ri = Array.isArray;
  function Zl(E) {
    return E != null && ba(E.length) && !va(E);
  }
  var ks = Xr || Xl;
  function Yl(E, L) {
    return B(E, L);
  }
  function va(E) {
    if (!_a(E))
      return !1;
    var L = N(E);
    return L == _ || L == S || L == h || L == b;
  }
  function ba(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= c;
  }
  function _a(E) {
    var L = typeof E;
    return E != null && (L == "object" || L == "function");
  }
  function Bn(E) {
    return E != null && typeof E == "object";
  }
  var wa = Fe ? Qe(Fe) : X;
  function Jl(E) {
    return Zl(E) ? I(E) : Q(E);
  }
  function Ql() {
    return [];
  }
  function Xl() {
    return !1;
  }
  t.exports = Yl;
})(es, es.exports);
var um = es.exports;
const lm = /* @__PURE__ */ _i(um);
function hm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), c = s.charCodeAt(0);
    if (r[c] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[c] = i;
  }
  var o = t.length, u = t.charAt(0), h = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(S) {
    if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0)
      return "";
    for (var C = 0, D = 0, z = 0, w = S.length; z !== w && S[z] === 0; )
      z++, C++;
    for (var O = (w - z) * f + 1 >>> 0, b = new Uint8Array(O); z !== w; ) {
      for (var v = S[z], p = 0, a = O - 1; (v !== 0 || p < D) && a !== -1; a--, p++)
        v += 256 * b[a] >>> 0, b[a] = v % o >>> 0, v = v / o >>> 0;
      if (v !== 0)
        throw new Error("Non-zero carry");
      D = p, z++;
    }
    for (var g = O - D; g !== O && b[g] === 0; )
      g++;
    for (var R = u.repeat(C); g < O; ++g)
      R += t.charAt(b[g]);
    return R;
  }
  function y(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return new Uint8Array();
    var C = 0;
    if (S[C] !== " ") {
      for (var D = 0, z = 0; S[C] === u; )
        D++, C++;
      for (var w = (S.length - C) * h + 1 >>> 0, O = new Uint8Array(w); S[C]; ) {
        var b = r[S.charCodeAt(C)];
        if (b === 255)
          return;
        for (var v = 0, p = w - 1; (b !== 0 || v < z) && p !== -1; p--, v++)
          b += o * O[p] >>> 0, O[p] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        z = v, C++;
      }
      if (S[C] !== " ") {
        for (var a = w - z; a !== w && O[a] === 0; )
          a++;
        for (var g = new Uint8Array(D + (w - a)), R = D; a !== w; )
          g[R++] = O[a++];
        return g;
      }
    }
  }
  function _(S) {
    var C = y(S);
    if (C)
      return C;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: y, decode: _ };
}
var fm = hm, dm = fm;
const yl = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, pm = (t) => new TextEncoder().encode(t), gm = (t) => new TextDecoder().decode(t);
class ym {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class mm {
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
    return ml(this, e);
  }
}
class vm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ml(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ml = (t, e) => new vm({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class bm {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new ym(e, r, n), this.decoder = new mm(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ws = ({ name: t, prefix: e, encode: r, decode: n }) => new bm(t, e, r, n), Oi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = dm(r, e);
  return ws({ prefix: t, name: e, encode: n, decode: (s) => yl(i(s)) });
}, _m = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const c = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, c[h++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return c;
}, wm = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", c = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], c += 8; c > r; )
      c -= r, s += e[i & o >> c];
  if (c && (s += e[i & o << r - c]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => ws({ prefix: e, name: t, encode(i) {
  return wm(i, n, r);
}, decode(i) {
  return _m(i, n, r, t);
} }), Em = ws({ prefix: "\0", name: "identity", encode: (t) => gm(t), decode: (t) => pm(t) });
var Sm = Object.freeze({ __proto__: null, identity: Em });
const xm = Nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Dm = Object.freeze({ __proto__: null, base2: xm });
const Im = Nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Om = Object.freeze({ __proto__: null, base8: Im });
const Cm = Oi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Tm = Object.freeze({ __proto__: null, base10: Cm });
const Am = Nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Nm = Nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Rm = Object.freeze({ __proto__: null, base16: Am, base16upper: Nm });
const Pm = Nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Lm = Nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Fm = Nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Um = Nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Mm = Nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), jm = Nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), $m = Nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), km = Nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), zm = Nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var qm = Object.freeze({ __proto__: null, base32: Pm, base32upper: Lm, base32pad: Fm, base32padupper: Um, base32hex: Mm, base32hexupper: jm, base32hexpad: $m, base32hexpadupper: km, base32z: zm });
const Bm = Oi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Vm = Oi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Km = Object.freeze({ __proto__: null, base36: Bm, base36upper: Vm });
const Hm = Oi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Wm = Oi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Gm = Object.freeze({ __proto__: null, base58btc: Hm, base58flickr: Wm });
const Zm = Nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Ym = Nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Jm = Nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Qm = Nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Xm = Object.freeze({ __proto__: null, base64: Zm, base64pad: Ym, base64url: Jm, base64urlpad: Qm });
const vl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), ev = vl.reduce((t, e, r) => (t[r] = e, t), []), tv = vl.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function rv(t) {
  return t.reduce((e, r) => (e += ev[r], e), "");
}
function nv(t) {
  const e = [];
  for (const r of t) {
    const n = tv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const iv = ws({ prefix: "🚀", name: "base256emoji", encode: rv, decode: nv });
var sv = Object.freeze({ __proto__: null, base256emoji: iv }), ov = bl, Nc = 128, av = 127, cv = ~av, uv = Math.pow(2, 31);
function bl(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= uv; )
    e[r++] = t & 255 | Nc, t /= 128;
  for (; t & cv; )
    e[r++] = t & 255 | Nc, t >>>= 7;
  return e[r] = t | 0, bl.bytes = r - n + 1, e;
}
var lv = Co, hv = 128, Rc = 127;
function Co(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, c, o = t.length;
  do {
    if (s >= o)
      throw Co.bytes = 0, new RangeError("Could not decode varint");
    c = t[s++], r += i < 28 ? (c & Rc) << i : (c & Rc) * Math.pow(2, i), i += 7;
  } while (c >= hv);
  return Co.bytes = s - n, r;
}
var fv = Math.pow(2, 7), dv = Math.pow(2, 14), pv = Math.pow(2, 21), gv = Math.pow(2, 28), yv = Math.pow(2, 35), mv = Math.pow(2, 42), vv = Math.pow(2, 49), bv = Math.pow(2, 56), _v = Math.pow(2, 63), wv = function(t) {
  return t < fv ? 1 : t < dv ? 2 : t < pv ? 3 : t < gv ? 4 : t < yv ? 5 : t < mv ? 6 : t < vv ? 7 : t < bv ? 8 : t < _v ? 9 : 10;
}, Ev = { encode: ov, decode: lv, encodingLength: wv }, _l = Ev;
const Pc = (t, e, r = 0) => (_l.encode(t, e, r), e), Lc = (t) => _l.encodingLength(t), To = (t, e) => {
  const r = e.byteLength, n = Lc(t), i = n + Lc(r), s = new Uint8Array(i + r);
  return Pc(t, s, 0), Pc(r, s, n), s.set(e, i), new Sv(t, r, e, s);
};
class Sv {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const wl = ({ name: t, code: e, encode: r }) => new xv(t, e, r);
class xv {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? To(this.code, r) : r.then((n) => To(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const El = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Dv = wl({ name: "sha2-256", code: 18, encode: El("SHA-256") }), Iv = wl({ name: "sha2-512", code: 19, encode: El("SHA-512") });
var Ov = Object.freeze({ __proto__: null, sha256: Dv, sha512: Iv });
const Sl = 0, Cv = "identity", xl = yl, Tv = (t) => To(Sl, xl(t)), Av = { code: Sl, name: Cv, encode: xl, digest: Tv };
var Nv = Object.freeze({ __proto__: null, identity: Av });
new TextEncoder(), new TextDecoder();
const Fc = { ...Sm, ...Dm, ...Om, ...Tm, ...Rm, ...qm, ...Km, ...Gm, ...Xm, ...sv };
({ ...Ov, ...Nv });
function Dl(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Rv(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Dl(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Il(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Uc = Il("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Xs = Il("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Rv(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Pv = { utf8: Uc, "utf-8": Uc, hex: Fc.base16, latin1: Xs, ascii: Xs, binary: Xs, ...Fc };
function Lv(t, e = "utf8") {
  const r = Pv[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Dl(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Ol = "wc", Fv = 2, ca = "core", Wr = `${Ol}@2:${ca}:`, Uv = { name: ca, logger: "error" }, Mv = { database: ":memory:" }, jv = "crypto", Mc = "client_ed25519_seed", $v = fe.ONE_DAY, kv = "keychain", zv = "0.3", qv = "messages", Bv = "0.3", Vv = fe.SIX_HOURS, Kv = "publisher", Cl = "irn", Hv = "error", Tl = "wss://relay.walletconnect.com", jc = "wss://relay.walletconnect.org", Wv = "relayer", $t = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Gv = "_subscription", Mr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Zv = fe.ONE_SECOND, Yv = "2.10.0", Jv = 1e4, Qv = "0.3", Xv = "WALLETCONNECT_CLIENT_ID", Ir = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, e0 = "subscription", t0 = "0.3", r0 = fe.FIVE_SECONDS * 1e3, n0 = "pairing", i0 = "0.3", Yn = { wc_pairingDelete: { req: { ttl: fe.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: fe.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: fe.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: fe.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: fe.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: fe.ONE_DAY, prompt: !1, tag: 0 } } }, Dr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, s0 = "history", o0 = "0.3", a0 = "expirer", ar = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, c0 = "0.3", eo = "verify-api", Wi = "https://verify.walletconnect.com", $c = "https://verify.walletconnect.org";
class u0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = kv, this.version = zv, this.initialized = !1, this.storagePrefix = Wr, this.init = async () => {
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
        const { message: s } = oe("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, sl(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ol(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class l0 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = jv, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = nc(i);
      return Ku(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Og();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), c = nc(s), o = Io();
      return await Fp(o, i, $v, c);
    }, this.generateSharedKey = (i, s, c) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), u = Cg(o, s);
      return this.setSymKey(u, c);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const c = s || Tg(i);
      return await this.keychain.set(c, i), c;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, c) => {
      this.isInitialized();
      const o = il(c), u = Ko(s);
      if (pc(o)) {
        const y = o.senderPublicKey, _ = o.receiverPublicKey;
        i = await this.generateSharedKey(y, _);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: d } = o;
      return Ng({ type: f, symKey: h, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, c) => {
      this.isInitialized();
      const o = Lg(s, c);
      if (pc(o)) {
        const u = o.receiverPublicKey, h = o.senderPublicKey;
        i = await this.generateSharedKey(u, h);
      }
      try {
        const u = this.getSymKey(i), h = Rg({ symKey: u, encoded: s });
        return Au(h);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = Qi(i);
      return Si(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = Qi(i);
      return s.senderPublicKey ? Ht(s.senderPublicKey, Kt) : void 0;
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.keychain = n || new u0(this.core, this.logger);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      e = this.keychain.get(Mc);
    } catch {
      e = Io(), await this.keychain.set(Mc, e);
    }
    return Lv(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class h0 extends jf {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = qv, this.version = Bv, this.initialized = !1, this.storagePrefix = Wr, this.init = async () => {
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
      const s = An(i);
      let c = this.messages.get(n);
      return typeof c > "u" && (c = {}), typeof c[s] < "u" || (c[s] = i, this.messages.set(n, c), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), c = An(i);
      return typeof s[c] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Ke.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, sl(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ol(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class f0 extends $f {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new cr.EventEmitter(), this.name = Kv, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = fe.toMiliseconds(fe.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var c;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || Vv, u = Oo(s), h = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || pl().toString(), y = { topic: n, message: i, opts: { ttl: o, relay: u, prompt: h, tag: f, id: d } }, _ = setTimeout(() => this.queue.set(d, y), this.publishTimeout);
        try {
          await await oi(this.rpcPublish(n, i, o, u, h, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit($t.publish, y);
        } catch (S) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (c = s == null ? void 0 : s.internal) != null && c.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), S;
          return;
        } finally {
          clearTimeout(_);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = Ke.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, c, o) {
    var u, h, f, d;
    const y = { method: Ki(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: c }, id: o };
    return Vt((u = y.params) == null ? void 0 : u.prompt) && ((h = y.params) == null || delete h.prompt), Vt((f = y.params) == null ? void 0 : f.tag) && ((d = y.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit($t.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on($t.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class d0 {
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
var p0 = Object.defineProperty, g0 = Object.defineProperties, y0 = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, m0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, zc = (t, e, r) => e in t ? p0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jn = (t, e) => {
  for (var r in e || (e = {}))
    m0.call(e, r) && zc(t, r, e[r]);
  if (kc)
    for (var r of kc(e))
      v0.call(e, r) && zc(t, r, e[r]);
  return t;
}, to = (t, e) => g0(t, y0(e));
class b0 extends qf {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new d0(), this.events = new cr.EventEmitter(), this.name = e0, this.version = t0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Wr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Oo(i), c = { topic: n, relay: s };
        this.pending.set(n, c);
        const o = await this.rpcSubscribe(n, s);
        return this.onSubscribe(o, c), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), o;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const c = new fe.Watch();
      c.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), c.stop(this.pendingSubscriptionWatchLabel), i(!0)), c.elapsed(this.pendingSubscriptionWatchLabel) >= r0 && (clearInterval(o), c.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Ke.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      const i = Oo(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = xt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Ki(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await oi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit($t.connection_stalled);
    }
    return An(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Ki(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await oi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit($t.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: Ki(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, to(Jn({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Jn({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Jn({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Ir.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Ir.deleted, to(Jn({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Ir.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Ir.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = oe("RESTORE_WILL_OVERRIDE", this.name);
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
    Ii(r) && this.onBatchSubscribe(r.map((n, i) => to(Jn({}, e[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on($t.connect, async () => {
      await this.onConnect();
    }), this.relayer.on($t.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Ir.created, async (e) => {
      const r = Ir.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Ir.deleted, async (e) => {
      const r = Ir.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
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
var _0 = Object.defineProperty, qc = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, E0 = Object.prototype.propertyIsEnumerable, Bc = (t, e, r) => e in t ? _0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, S0 = (t, e) => {
  for (var r in e || (e = {}))
    w0.call(e, r) && Bc(t, r, e[r]);
  if (qc)
    for (var r of qc(e))
      E0.call(e, r) && Bc(t, r, e[r]);
  return t;
};
class x0 extends kf {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new cr.EventEmitter(), this.name = Wv, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit($t.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit($t.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Mr.payload, this.onPayloadHandler), this.provider.on(Mr.connect, this.onConnectHandler), this.provider.on(Mr.disconnect, this.onDisconnectHandler), this.provider.on(Mr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ke.generateChildLogger(e.logger, this.name) : Ke.pino(Ke.getDefaultLoggerOptions({ level: e.logger || Hv })), this.messages = new h0(this.logger, e.core), this.subscriber = new b0(this, this.logger), this.publisher = new f0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Tl, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${jc}...`), await this.restartTransport(jc);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Jv);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
    return i || (await Promise.all([new Promise((s) => {
      this.subscriber.once(Ir.created, (c) => {
        c.topic === e && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(e, r), s();
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await oi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Ir.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await oi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Mr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await xc())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new im(new cm(Kg({ sdkVersion: Yv, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), aa(e)) {
      if (!e.method.endsWith(Gv))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, c = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(S0({ type: "event", event: r.id }, c)), this.events.emit(r.id, c), await this.acknowledgePayload(e), await this.onMessageEvent(c);
    } else
      _s(e) && this.events.emit($t.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit($t.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = sa(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Mr.payload, this.onPayloadHandler), this.provider.off(Mr.connect, this.onConnectHandler), this.provider.off(Mr.disconnect, this.onDisconnectHandler), this.provider.off(Mr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on($t.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await xc();
    My(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit($t.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, fe.toMiliseconds(Zv)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
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
var D0 = Object.defineProperty, Vc = Object.getOwnPropertySymbols, I0 = Object.prototype.hasOwnProperty, O0 = Object.prototype.propertyIsEnumerable, Kc = (t, e, r) => e in t ? D0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Hc = (t, e) => {
  for (var r in e || (e = {}))
    I0.call(e, r) && Kc(t, r, e[r]);
  if (Vc)
    for (var r of Vc(e))
      O0.call(e, r) && Kc(t, r, e[r]);
  return t;
};
class Es extends zf {
  constructor(e, r, n, i = Wr, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Qv, this.cached = [], this.initialized = !1, this.storagePrefix = Wr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((c) => {
        this.getKey && c !== null && !Vt(c) ? this.map.set(this.getKey(c), c) : py(c) ? this.map.set(c.id, c) : gy(c) && this.map.set(c.topic, c);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (c, o) => {
      this.isInitialized(), this.map.has(c) ? await this.update(c, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: c, value: o }), this.map.set(c, o), await this.persist());
    }, this.get = (c) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: c }), this.getData(c)), this.getAll = (c) => (this.isInitialized(), c ? this.values.filter((o) => Object.keys(c).every((u) => lm(o[u], c[u]))) : this.values), this.update = async (c, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: c, update: o });
      const u = Hc(Hc({}, this.getData(c)), o);
      this.map.set(c, u), await this.persist();
    }, this.delete = async (c, o) => {
      this.isInitialized(), this.map.has(c) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: c, reason: o }), this.map.delete(c), await this.persist());
    }, this.logger = Ke.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      const { message: n } = oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = oe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class C0 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = n0, this.version = i0, this.events = new Vo(), this.initialized = !1, this.storagePrefix = Wr, this.ignoredPayloadTypes = [bn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Io(), i = await this.core.crypto.setSymKey(n), s = fr(fe.FIVE_MINUTES), c = { protocol: Cl }, o = { topic: i, expiry: s, relay: c, active: !1 }, u = iy({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: c });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: c } = ty(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const o = fr(fe.FIVE_MINUTES), u = { topic: i, relay: c, expiry: o, active: !1 };
      return await this.pairings.set(i, u), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: c }), this.core.expirer.set(i, o), n.activatePairing && await this.activate({ topic: i }), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = fr(fe.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: c, resolve: o, reject: u } = In();
        this.events.once(St("pairing_ping", s), ({ error: h }) => {
          h ? u(h) : o();
        }), await c();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", xt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const c = ai(i, s), o = await this.core.crypto.encode(n, c), u = Yn[i].req;
      return this.core.history.set(n, c), this.core.relayer.publish(n, o, u), c.id;
    }, this.sendResult = async (n, i, s) => {
      const c = sa(n, s), o = await this.core.crypto.encode(i, c), u = await this.core.history.get(i, n), h = Yn[u.request.method].res;
      await this.core.relayer.publish(i, o, h), await this.core.history.resolve(c);
    }, this.sendError = async (n, i, s) => {
      const c = oa(n, s), o = await this.core.crypto.encode(i, c), u = await this.core.history.get(i, n), h = Yn[u.request.method] ? Yn[u.request.method].res : Yn.unregistered_method.res;
      await this.core.relayer.publish(i, o, h), await this.core.history.resolve(c);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, xt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => Kr(i.expiry));
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
      const { topic: i, payload: s } = n, c = (await this.core.history.get(i, s.id)).request.method;
      switch (c) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(c);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (c) {
        await this.sendError(s, n, c), this.logger.error(c);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        $r(i) ? this.events.emit(St("pairing_ping", s), {}) : dr(i) && this.events.emit(St("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (c) {
        await this.sendError(s, n, c), this.logger.error(c);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: c } = i;
      try {
        if (this.registeredMethods.includes(c))
          return;
        const o = xt("WC_METHOD_UNSUPPORTED", c);
        await this.sendError(s, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(xt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!Jt(n)) {
        const { message: i } = oe("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!dy(n.uri)) {
        const { message: i } = oe("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!Jt(n)) {
        const { message: s } = oe("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!Jt(n)) {
        const { message: s } = oe("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!Ct(n, !1)) {
        const { message: i } = oe("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = oe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (Kr(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = oe("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.pairings = new Es(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on($t.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        aa(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : _s(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(ar.expired, async (e) => {
      const { topic: r } = cl(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class T0 extends Mf {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new cr.EventEmitter(), this.name = s0, this.version = o0, this.cached = [], this.initialized = !1, this.storagePrefix = Wr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const c = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: fr(fe.THIRTY_DAYS) };
      this.records.set(c.id, c), this.events.emit(Dr.created, c);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = dr(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(Dr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(Dr.deleted, s);
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
    }, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: ai(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Dr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = oe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Dr.created, (e) => {
      const r = Dr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Dr.updated, (e) => {
      const r = Dr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Dr.deleted, (e) => {
      const r = Dr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        fe.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class A0 extends Bf {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new cr.EventEmitter(), this.name = a0, this.version = c0, this.cached = [], this.initialized = !1, this.storagePrefix = Wr, this.init = async () => {
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
      const s = this.formatTarget(n), c = { target: s, expiry: i };
      this.expirations.set(s, c), this.checkExpiry(s, c), this.events.emit(ar.created, { target: s, expiration: c });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(ar.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      return Hg(e);
    if (typeof e == "number")
      return Wg(e);
    const { message: r } = oe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(ar.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = oe("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    fe.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(ar.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(ar.created, (e) => {
      const r = ar.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(ar.expired, (e) => {
      const r = ar.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(ar.deleted, (e) => {
      const r = ar.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class N0 extends Vf {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = eo, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || bs() || !xi())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || Wi;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = $c;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const i = (n == null ? void 0 : n.verifyUrl) || Wi;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (c) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(c), s = await this.fetchAttestation(n.attestationId, $c);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      var s;
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const c = this.startAbortTimer(fe.ONE_SECOND * 2), o = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(c), o.status === 200 ? (s = await o.json()) == null ? void 0 : s.origin : "";
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
        if (document.getElementById(eo))
          return s();
        window.addEventListener("message", i);
        const c = document.createElement("iframe");
        c.id = eo, c.src = `${this.verifyUrl}/${this.projectId}`, c.style.display = "none", document.body.append(c), this.iframe = c, n = s;
      }), new Promise((s, c) => setTimeout(() => {
        window.removeEventListener("message", i), c("verify iframe load timeout");
      }, fe.toMiliseconds(fe.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Ke.generateChildLogger(r, this.name), this.verifyUrl = Wi, this.abortController = new AbortController(), this.isDevEnv = ta() && process.env.IS_VITEST;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), fe.toMiliseconds(e));
  }
}
var R0 = Object.defineProperty, Wc = Object.getOwnPropertySymbols, P0 = Object.prototype.hasOwnProperty, L0 = Object.prototype.propertyIsEnumerable, Gc = (t, e, r) => e in t ? R0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zc = (t, e) => {
  for (var r in e || (e = {}))
    P0.call(e, r) && Gc(t, r, e[r]);
  if (Wc)
    for (var r of Wc(e))
      L0.call(e, r) && Gc(t, r, e[r]);
  return t;
};
class ua extends Uf {
  constructor(e) {
    super(e), this.protocol = Ol, this.version = Fv, this.name = ca, this.events = new cr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Tl;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Uv.logger }));
    this.logger = Ke.generateChildLogger(r, this.name), this.heartbeat = new Un.HeartBeat(), this.crypto = new l0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new T0(this, this.logger), this.expirer = new A0(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Qh(Zc(Zc({}, Mv), e == null ? void 0 : e.storageOptions)), this.relayer = new x0({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new C0(this, this.logger), this.verify = new N0(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new ua(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Xv, n), r;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
const F0 = ua, Al = "wc", Nl = 2, Rl = "client", la = `${Al}@${Nl}:${Rl}:`, ro = { name: Rl, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Yc = "WALLETCONNECT_DEEPLINK_CHOICE", U0 = "proposal", M0 = "Proposal expired", j0 = "session", zi = fe.SEVEN_DAYS, $0 = "engine", Qn = { wc_sessionPropose: { req: { ttl: fe.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: fe.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: fe.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: fe.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: fe.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: fe.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: fe.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: fe.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: fe.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: fe.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: fe.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: fe.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: fe.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: fe.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: fe.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: fe.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, no = { min: fe.FIVE_MINUTES, max: fe.SEVEN_DAYS }, jr = { idle: "IDLE", active: "ACTIVE" }, k0 = "request", z0 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var q0 = Object.defineProperty, B0 = Object.defineProperties, V0 = Object.getOwnPropertyDescriptors, Jc = Object.getOwnPropertySymbols, K0 = Object.prototype.hasOwnProperty, H0 = Object.prototype.propertyIsEnumerable, Qc = (t, e, r) => e in t ? q0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yt = (t, e) => {
  for (var r in e || (e = {}))
    K0.call(e, r) && Qc(t, r, e[r]);
  if (Jc)
    for (var r of Jc(e))
      H0.call(e, r) && Qc(t, r, e[r]);
  return t;
}, Xn = (t, e) => B0(t, V0(e));
class W0 extends Hf {
  constructor(e) {
    super(e), this.name = $0, this.events = new Vo(), this.initialized = !1, this.ignoredPayloadTypes = [bn], this.requestQueue = { state: jr.idle, queue: [] }, this.sessionRequestQueue = { state: jr.idle, queue: [] }, this.requestQueueDelay = fe.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Qn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, fe.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Xn(Yt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: c, sessionProperties: o, relays: u } = n;
      let h = i, f, d = !1;
      if (h && (d = this.client.core.pairing.pairings.get(h).active), !h || !d) {
        const { topic: O, uri: b } = await this.client.core.pairing.create();
        h = O, f = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), _ = Yt({ requiredNamespaces: s, optionalNamespaces: c, relays: u ?? [{ protocol: Cl }], proposer: { publicKey: y, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: S, resolve: C, done: D } = In(fe.FIVE_MINUTES, M0);
      if (this.events.once(St("session_connect"), async ({ error: O, session: b }) => {
        if (O)
          S(O);
        else if (b) {
          b.self.publicKey = y;
          const v = Xn(Yt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, v), await this.setExpiry(b.topic, b.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: b.peer.metadata }), C(v);
        }
      }), !h) {
        const { message: O } = oe("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(O);
      }
      const z = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: _ }), w = fr(fe.FIVE_MINUTES);
      return await this.setProposal(z, Yt({ id: z, expiry: w }, _)), { uri: f, approval: D };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: c } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: h, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", ri(f) || (f = cy(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), _ = h.publicKey, S = await this.client.core.crypto.generateSharedKey(y, _);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: h.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(n, xt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const C = Yt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: y, metadata: this.client.metadata }, expiry: fr(zi) }, c && { sessionProperties: c });
      await this.client.core.relayer.subscribe(S), await this.sendRequest({ topic: S, method: "wc_sessionSettle", params: C, throwOnFailedPublish: !0 });
      const D = Xn(Yt({}, C), { topic: S, pairingTopic: u, acknowledged: !1, self: C.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: y });
      return await this.client.session.set(S, D), await this.setExpiry(S, fr(zi)), { topic: S, acknowledged: () => new Promise((z) => setTimeout(() => z(this.client.session.get(S)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, xt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: c, resolve: o, reject: u } = In();
      return this.events.once(St("session_update", s), ({ error: h }) => {
        h ? u(h) : o();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: c };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: c, reject: o } = In();
      return this.events.once(St("session_extend", i), ({ error: u }) => {
        u ? o(u) : c();
      }), await this.setExpiry(n, fr(zi)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: c } = r, o = ia(), { done: u, resolve: h, reject: f } = In(c);
      return this.events.once(St("session_request", o), ({ error: d, result: y }) => {
        d ? f(d) : h(y);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: c, throwOnFailedPublish: !0 }).catch((y) => f(y)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const y = await this.client.core.storage.getItem(Yc);
        Gg({ id: o, topic: s, wcDeepLink: y }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      $r(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : dr(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: c, reject: o } = In();
        this.events.once(St("session_ping", i), ({ error: u }) => {
          u ? o(u) : c();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: xt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => hy(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var c, o;
            return ((c = s.peerMetadata) == null ? void 0 : c.url) && ((o = s.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, xt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Yc).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, xt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = jr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Qn.wc_sessionRequest.req.ttl, { id: i, topic: s, params: c } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: c }), n && this.client.core.expirer.set(i, fr(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: c, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: h } = r, f = ai(i, s, u);
      if (xi() && z0.includes(i)) {
        const _ = An(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: _ });
      }
      const d = await this.client.core.crypto.encode(n, f), y = Qn[i].req;
      return c && (y.ttl = c), o && (y.id = o), this.client.core.history.set(n, f), h ? (y.internal = Xn(Yt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, y)) : this.client.core.relayer.publish(n, d, y).catch((_) => this.client.logger.error(_)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: c } = r, o = sa(n, s), u = await this.client.core.crypto.encode(i, o), h = await this.client.core.history.get(i, n), f = Qn[h.request.method].res;
      c ? (f.internal = Xn(Yt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, i) => {
      const s = oa(r, i), c = await this.client.core.crypto.encode(n, s), o = await this.client.core.history.get(n, r), u = Qn[o.request.method].res;
      this.client.core.relayer.publish(n, c, u), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        Kr(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Kr(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === jr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = jr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = jr.idle;
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
      const { topic: n } = r, { message: i } = oe("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(Yt({}, n.params));
        const c = fr(fe.FIVE_MINUTES), o = Yt({ id: s, pairingTopic: r, expiry: c }, i);
        await this.setProposal(s, o);
        const u = An(JSON.stringify(n)), h = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: o, verifyContext: h });
      } catch (c) {
        await this.sendError(s, r, c), this.client.logger.error(c);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if ($r(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const c = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: c });
        const o = c.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const u = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const h = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        dr(n) && (await this.client.proposal.delete(i, xt("USER_DISCONNECTED")), this.events.emit(St("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: c, controller: o, expiry: u, namespaces: h, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: y, pairingTopic: _ } = n.params, S = Yt({ topic: r, relay: c, expiry: u, namespaces: h, acknowledged: !0, pairingTopic: _, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(St("session_connect"), { session: S }), this.cleanupDuplicatePairings(S);
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      $r(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(St("session_approve", i), {})) : dr(n) && (await this.client.session.delete(r, xt("USER_DISCONNECTED")), this.events.emit(St("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const c = `${r}_session_update`, o = ki.get(c);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(Yt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), ki.set(c, s);
      } catch (c) {
        await this.sendError(s, r, c), this.client.logger.error(c);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      $r(n) ? this.events.emit(St("session_update", i), {}) : dr(n) && this.events.emit(St("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, fr(zi)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      $r(n) ? this.events.emit(St("session_extend", i), {}) : dr(n) && this.events.emit(St("session_extend", i), { error: n.error });
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
        $r(n) ? this.events.emit(St("session_ping", i), {}) : dr(n) && this.events.emit(St("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once($t.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(Yt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      $r(n) ? this.events.emit(St("session_request", i), { result: n.result }) : dr(n) && this.events.emit(St("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const c = `${r}_session_event_${s.event.name}`, o = ki.get(c);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(Yt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), ki.set(c, i);
      } catch (c) {
        await this.sendError(i, r, c), this.client.logger.error(c);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = jr.idle, this.processSessionRequestQueue();
      }, fe.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === jr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, c = An(JSON.stringify(ai("wc_sessionRequest", s, n))), o = this.client.session.get(i), u = await this.getVerifyContext(c, o.peer.metadata);
        this.sessionRequestQueue.state = jr.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: u });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!Jt(r)) {
        const { message: u } = oe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: c, relays: o } = r;
      if (Vt(n) || await this.isValidPairingTopic(n), !Sy(o, !0)) {
        const { message: u } = oe("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !Vt(i) && ri(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !Vt(s) && ri(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Vt(c) || this.validateSessionProps(c, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = Ey(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!Jt(r))
        throw new Error(oe("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: c } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = Hi(i, "approve()");
      if (u)
        throw new Error(u.message);
      const h = Ec(o.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
      if (!Ct(s, !0)) {
        const { message: f } = oe("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      Vt(c) || this.validateSessionProps(c, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Jt(r)) {
        const { message: s } = oe("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !Dy(i)) {
        const { message: s } = oe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Jt(r)) {
        const { message: h } = oe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: c } = r;
      if (!ll(n)) {
        const { message: h } = oe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const o = yy(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = Hi(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (Kr(c)) {
        const { message: h } = oe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Jt(r)) {
        const { message: u } = oe("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), c = Hi(i, "update()");
      if (c)
        throw new Error(c.message);
      const o = Ec(s.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!Jt(r)) {
        const { message: i } = oe("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!Jt(r)) {
        const { message: u } = oe("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: i, chainId: s, expiry: c } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!wc(o, s)) {
        const { message: u } = oe("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!Iy(i)) {
        const { message: u } = oe("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!Ty(o, s, i.method)) {
        const { message: u } = oe("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (c && !Py(c, no)) {
        const { message: u } = oe("MISSING_OR_INVALID", `request() expiry: ${c}. Expiry must be a number (in seconds) between ${no.min} and ${no.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!Jt(r)) {
        const { message: s } = oe("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Oy(i)) {
        const { message: s } = oe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Jt(r)) {
        const { message: i } = oe("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!Jt(r)) {
        const { message: o } = oe("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: c } = this.client.session.get(n);
      if (!wc(c, s)) {
        const { message: o } = oe("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(o);
      }
      if (!Cy(i)) {
        const { message: o } = oe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!Ay(c, s, i.name)) {
        const { message: o } = oe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Jt(r)) {
        const { message: i } = oe("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || Wi, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!Ct(i, !1)) {
          const { message: s } = oe("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = oe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on($t.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        aa(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : _s(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(ar.expired, async (e) => {
      const { topic: r, id: n } = cl(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, oe("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!Ct(e, !1)) {
      const { message: r } = oe("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = oe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Kr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = oe("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ct(e, !1)) {
      const { message: r } = oe("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = oe("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Kr(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = oe("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Ct(e, !1)) {
      const { message: r } = oe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = oe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!xy(e)) {
      const { message: r } = oe("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = oe("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Kr(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = oe("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class G0 extends Es {
  constructor(e, r) {
    super(e, r, U0, la), this.core = e, this.logger = r;
  }
}
class Z0 extends Es {
  constructor(e, r) {
    super(e, r, j0, la), this.core = e, this.logger = r;
  }
}
class Y0 extends Es {
  constructor(e, r) {
    super(e, r, k0, la, (n) => n.id), this.core = e, this.logger = r;
  }
}
class ha extends Kf {
  constructor(e) {
    super(e), this.protocol = Al, this.version = Nl, this.name = ro.name, this.events = new cr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || ro.name, this.metadata = (e == null ? void 0 : e.metadata) || zg();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || ro.logger }));
    this.core = (e == null ? void 0 : e.core) || new F0(e), this.logger = Ke.generateChildLogger(r, this.name), this.session = new Z0(this.core, this.logger), this.proposal = new G0(this.core, this.logger), this.pendingRequest = new Y0(this.core, this.logger), this.engine = new W0(this);
  }
  static async init(e) {
    const r = new ha(e);
    return await r.initialize(), r;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
var J0 = Object.defineProperty, Q0 = Object.defineProperties, X0 = Object.getOwnPropertyDescriptors, Xc = Object.getOwnPropertySymbols, eb = Object.prototype.hasOwnProperty, tb = Object.prototype.propertyIsEnumerable, eu = (t, e, r) => e in t ? J0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, rb = (t, e) => {
  for (var r in e || (e = {}))
    eb.call(e, r) && eu(t, r, e[r]);
  if (Xc)
    for (var r of Xc(e))
      tb.call(e, r) && eu(t, r, e[r]);
  return t;
}, nb = (t, e) => Q0(t, X0(e)), fa = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, st = (t, e, r) => (fa(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ln = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ts = (t, e, r, n) => (fa(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ut = (t, e, r) => (fa(t, e, "access private method"), r), hn, On, ei, Ot, Ao, Pl, Mt, Bt, No, tu;
let ib = class {
  constructor(e) {
    ln(this, Ao), ln(this, Mt), ln(this, No), ln(this, hn, void 0), ln(this, On, void 0), ln(this, ei, void 0), ln(this, Ot, void 0), ts(this, hn, e), ts(this, On, Ut(this, Ao, Pl).call(this)), Ut(this, Mt, Bt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Ut(this, Mt, Bt).call(this);
      const c = st(this, On).subscribeModal((h) => {
        h.open || (c(), s(new Error("Modal closed")));
      }), { uri: o, approval: u } = await st(this, Ot).connect(e);
      if (o) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), await st(this, On).openModal({ uri: o, chains: Array.from(h) });
      }
      try {
        const h = await u();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        c(), st(this, On).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Ut(this, Mt, Bt).call(this), await st(this, Ot).disconnect(e);
  }
  async request(e) {
    return await Ut(this, Mt, Bt).call(this), await st(this, Ot).request(e);
  }
  async getSessions() {
    return await Ut(this, Mt, Bt).call(this), st(this, Ot).session.getAll();
  }
  async getSession() {
    return await Ut(this, Mt, Bt).call(this), st(this, Ot).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Ut(this, Mt, Bt).call(this), st(this, Ot).off("session_expire", e);
  }
};
hn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakSet(), Pl = function() {
  const { modalOptions: t, projectId: e } = st(this, hn);
  return new qh(nb(rb({}, t), { projectId: e }));
}, Mt = /* @__PURE__ */ new WeakSet(), Bt = async function() {
  return st(this, Ot) ? !0 : (!st(this, ei) && typeof window < "u" && ts(this, ei, Ut(this, No, tu).call(this)), st(this, ei));
}, No = /* @__PURE__ */ new WeakSet(), tu = async function() {
  ts(this, Ot, await ha.init({ metadata: st(this, hn).metadata, projectId: st(this, hn).projectId, relayUrl: st(this, hn).relayUrl }));
  const t = await st(this, Ot).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const da = [
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
], Ss = ["aleo:1"], pa = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], sb = "f0aaeffe71b636da453fce042d79d723", ob = {
  standaloneChains: Ss,
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
}, tw = {
  requiredNamespaces: {
    aleo: {
      methods: da,
      chains: Ss,
      events: pa
    }
  }
};
var Ll = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(u, h, f) {
    this.fn = u, this.context = h, this.once = f || !1;
  }
  function s(u, h, f, d, y) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var _ = new i(f, d || u, y), S = r ? r + h : h;
    return u._events[S] ? u._events[S].fn ? u._events[S] = [u._events[S], _] : u._events[S].push(_) : (u._events[S] = _, u._eventsCount++), u;
  }
  function c(u, h) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[h];
  }
  function o() {
    this._events = new n(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var h = [], f, d;
    if (this._eventsCount === 0)
      return h;
    for (d in f = this._events)
      e.call(f, d) && h.push(r ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
  }, o.prototype.listeners = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var y = 0, _ = d.length, S = new Array(_); y < _; y++)
      S[y] = d[y].fn;
    return S;
  }, o.prototype.listenerCount = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    return d ? d.fn ? 1 : d.length : 0;
  }, o.prototype.emit = function(h, f, d, y, _, S) {
    var C = r ? r + h : h;
    if (!this._events[C])
      return !1;
    var D = this._events[C], z = arguments.length, w, O;
    if (D.fn) {
      switch (D.once && this.removeListener(h, D.fn, void 0, !0), z) {
        case 1:
          return D.fn.call(D.context), !0;
        case 2:
          return D.fn.call(D.context, f), !0;
        case 3:
          return D.fn.call(D.context, f, d), !0;
        case 4:
          return D.fn.call(D.context, f, d, y), !0;
        case 5:
          return D.fn.call(D.context, f, d, y, _), !0;
        case 6:
          return D.fn.call(D.context, f, d, y, _, S), !0;
      }
      for (O = 1, w = new Array(z - 1); O < z; O++)
        w[O - 1] = arguments[O];
      D.fn.apply(D.context, w);
    } else {
      var b = D.length, v;
      for (O = 0; O < b; O++)
        switch (D[O].once && this.removeListener(h, D[O].fn, void 0, !0), z) {
          case 1:
            D[O].fn.call(D[O].context);
            break;
          case 2:
            D[O].fn.call(D[O].context, f);
            break;
          case 3:
            D[O].fn.call(D[O].context, f, d);
            break;
          case 4:
            D[O].fn.call(D[O].context, f, d, y);
            break;
          default:
            if (!w)
              for (v = 1, w = new Array(z - 1); v < z; v++)
                w[v - 1] = arguments[v];
            D[O].fn.apply(D[O].context, w);
        }
    }
    return !0;
  }, o.prototype.on = function(h, f, d) {
    return s(this, h, f, d, !1);
  }, o.prototype.once = function(h, f, d) {
    return s(this, h, f, d, !0);
  }, o.prototype.removeListener = function(h, f, d, y) {
    var _ = r ? r + h : h;
    if (!this._events[_])
      return this;
    if (!f)
      return c(this, _), this;
    var S = this._events[_];
    if (S.fn)
      S.fn === f && (!y || S.once) && (!d || S.context === d) && c(this, _);
    else {
      for (var C = 0, D = [], z = S.length; C < z; C++)
        (S[C].fn !== f || y && !S[C].once || d && S[C].context !== d) && D.push(S[C]);
      D.length ? this._events[_] = D.length === 1 ? D[0] : D : c(this, _);
    }
    return this;
  }, o.prototype.removeAllListeners = function(h) {
    var f;
    return h ? (f = r ? r + h : h, this._events[f] && c(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o;
})(Ll);
var ab = Ll.exports;
const cb = /* @__PURE__ */ _i(ab), Pn = new cb();
let ti;
function rw(t) {
  ti = new ib({
    projectId: sb,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...ob }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function ot() {
  return new Promise((t) => {
    if (ti)
      t(ti);
    else {
      const e = setInterval(() => {
        ti && (clearInterval(e), t(ti));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var We;
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
    for (const c of i)
      s[c] = c;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), c = {};
    for (const o of s)
      c[o] = i[o];
    return t.objectValues(c);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const c in i)
      Object.prototype.hasOwnProperty.call(i, c) && s.push(c);
    return s;
  }, t.find = (i, s) => {
    for (const c of i)
      if (s(c))
        return c;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((c) => typeof c == "string" ? `'${c}'` : c).join(s);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(We || (We = {}));
var Ro;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ro || (Ro = {}));
const ce = We.arrayToEnum([
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
]), Hr = (t) => {
  switch (typeof t) {
    case "undefined":
      return ce.undefined;
    case "string":
      return ce.string;
    case "number":
      return isNaN(t) ? ce.nan : ce.number;
    case "boolean":
      return ce.boolean;
    case "function":
      return ce.function;
    case "bigint":
      return ce.bigint;
    case "symbol":
      return ce.symbol;
    case "object":
      return Array.isArray(t) ? ce.array : t === null ? ce.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ce.promise : typeof Map < "u" && t instanceof Map ? ce.map : typeof Set < "u" && t instanceof Set ? ce.set : typeof Date < "u" && t instanceof Date ? ce.date : ce.object;
    default:
      return ce.unknown;
  }
}, re = We.arrayToEnum([
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
]), ub = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class yr extends Error {
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
      for (const c of s.issues)
        if (c.code === "invalid_union")
          c.unionErrors.map(i);
        else if (c.code === "invalid_return_type")
          i(c.returnTypeError);
        else if (c.code === "invalid_arguments")
          i(c.argumentsError);
        else if (c.path.length === 0)
          n._errors.push(r(c));
        else {
          let o = n, u = 0;
          for (; u < c.path.length; ) {
            const h = c.path[u];
            u === c.path.length - 1 ? (o[h] = o[h] || { _errors: [] }, o[h]._errors.push(r(c))) : o[h] = o[h] || { _errors: [] }, o = o[h], u++;
          }
        }
    };
    return i(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, We.jsonStringifyReplacer, 2);
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
yr.create = (t) => new yr(t);
const ci = (t, e) => {
  let r;
  switch (t.code) {
    case re.invalid_type:
      t.received === ce.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case re.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, We.jsonStringifyReplacer)}`;
      break;
    case re.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${We.joinValues(t.keys, ", ")}`;
      break;
    case re.invalid_union:
      r = "Invalid input";
      break;
    case re.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${We.joinValues(t.options)}`;
      break;
    case re.invalid_enum_value:
      r = `Invalid enum value. Expected ${We.joinValues(t.options)}, received '${t.received}'`;
      break;
    case re.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case re.invalid_return_type:
      r = "Invalid function return type";
      break;
    case re.invalid_date:
      r = "Invalid date";
      break;
    case re.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : We.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case re.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case re.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case re.custom:
      r = "Invalid input";
      break;
    case re.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case re.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case re.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, We.assertNever(t);
  }
  return { message: r };
};
let Fl = ci;
function lb(t) {
  Fl = t;
}
function rs() {
  return Fl;
}
const ns = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, s = [...r, ...i.path || []], c = {
    ...i,
    path: s
  };
  let o = "";
  const u = n.filter((h) => !!h).slice().reverse();
  for (const h of u)
    o = h(c, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: i.message || o
  };
}, hb = [];
function le(t, e) {
  const r = ns({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      rs(),
      ci
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class kt {
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
        return we;
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
    return kt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: s, value: c } = i;
      if (s.status === "aborted" || c.status === "aborted")
        return we;
      s.status === "dirty" && e.dirty(), c.status === "dirty" && e.dirty(), (typeof c.value < "u" || i.alwaysSet) && (n[s.value] = c.value);
    }
    return { status: e.value, value: n };
  }
}
const we = Object.freeze({
  status: "aborted"
}), Ul = (t) => ({ status: "dirty", value: t }), Wt = (t) => ({ status: "valid", value: t }), Po = (t) => t.status === "aborted", Lo = (t) => t.status === "dirty", is = (t) => t.status === "valid", ss = (t) => typeof Promise < "u" && t instanceof Promise;
var pe;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(pe || (pe = {}));
class Tr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ru = (t, e) => {
  if (is(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new yr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function Ce(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (c, o) => c.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class Le {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Hr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Hr(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new kt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Hr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (ss(r))
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
      parsedType: Hr(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return ru(i, s);
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
      parsedType: Hr(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (ss(i) ? i : Promise.resolve(i));
    return ru(n, s);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, s) => {
      const c = e(i), o = () => s.addIssue({
        code: re.custom,
        ...n(i)
      });
      return typeof Promise < "u" && c instanceof Promise ? c.then((u) => u ? !0 : (o(), !1)) : c ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new vr({
      schema: this,
      typeName: me.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return kr.create(this, this._def);
  }
  nullable() {
    return yn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return mr.create(this, this._def);
  }
  promise() {
    return Fn.create(this, this._def);
  }
  or(e) {
    return fi.create([this, e], this._def);
  }
  and(e) {
    return di.create(this, e, this._def);
  }
  transform(e) {
    return new vr({
      ...Ce(this._def),
      schema: this,
      typeName: me.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new vi({
      ...Ce(this._def),
      innerType: this,
      defaultValue: r,
      typeName: me.ZodDefault
    });
  }
  brand() {
    return new jl({
      typeName: me.ZodBranded,
      type: this,
      ...Ce(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new us({
      ...Ce(this._def),
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
    return Ci.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const fb = /^c[^\s-]{8,}$/i, db = /^[a-z][a-z0-9]*$/, pb = /[0-9A-HJKMNP-TV-Z]{26}/, gb = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, yb = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, mb = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, vb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, bb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, _b = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function wb(t, e) {
  return !!((e === "v4" || !e) && vb.test(t) || (e === "v6" || !e) && bb.test(t));
}
class gr extends Le {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: re.invalid_string,
      ...pe.errToObj(n)
    }), this.nonempty = (e) => this.min(1, pe.errToObj(e)), this.trim = () => new gr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new gr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new gr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ce.string) {
      const s = this._getOrReturnCtx(e);
      return le(
        s,
        {
          code: re.invalid_type,
          expected: ce.string,
          received: s.parsedType
        }
        //
      ), we;
    }
    const n = new kt();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const c = e.data.length > s.value, o = e.data.length < s.value;
        (c || o) && (i = this._getOrReturnCtx(e, i), c ? le(i, {
          code: re.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && le(i, {
          code: re.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        yb.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "email",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        mb.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "emoji",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        gb.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "uuid",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        fb.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "cuid",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        db.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "cuid2",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        pb.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "ulid",
          code: re.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), le(i, {
            validation: "url",
            code: re.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "regex",
          code: re.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? _b(s).test(e.data) || (i = this._getOrReturnCtx(e, i), le(i, {
          code: re.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? wb(e.data, s.version) || (i = this._getOrReturnCtx(e, i), le(i, {
          validation: "ip",
          code: re.invalid_string,
          message: s.message
        }), n.dirty()) : We.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new gr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...pe.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...pe.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...pe.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...pe.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...pe.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...pe.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...pe.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...pe.errToObj(e) });
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
      ...pe.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...pe.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...pe.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...pe.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...pe.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...pe.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...pe.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...pe.errToObj(r)
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
gr.create = (t) => {
  var e;
  return new gr({
    checks: [],
    typeName: me.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ce(t)
  });
};
function Eb(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, s = parseInt(t.toFixed(i).replace(".", "")), c = parseInt(e.toFixed(i).replace(".", ""));
  return s % c / Math.pow(10, i);
}
class Gr extends Le {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ce.number) {
      const s = this._getOrReturnCtx(e);
      return le(s, {
        code: re.invalid_type,
        expected: ce.number,
        received: s.parsedType
      }), we;
    }
    let n;
    const i = new kt();
    for (const s of this._def.checks)
      s.kind === "int" ? We.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Eb(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.not_finite,
        message: s.message
      }), i.dirty()) : We.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, pe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, pe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, pe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, pe.toString(r));
  }
  setLimit(e, r, n, i) {
    return new Gr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: pe.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Gr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: pe.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: pe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: pe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: pe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: pe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: pe.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: pe.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: pe.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: pe.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && We.isInteger(e.value));
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
Gr.create = (t) => new Gr({
  checks: [],
  typeName: me.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ce(t)
});
class Zr extends Le {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ce.bigint) {
      const s = this._getOrReturnCtx(e);
      return le(s, {
        code: re.invalid_type,
        expected: ce.bigint,
        received: s.parsedType
      }), we;
    }
    let n;
    const i = new kt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), le(n, {
        code: re.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : We.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, pe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, pe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, pe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, pe.toString(r));
  }
  setLimit(e, r, n, i) {
    return new Zr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: pe.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Zr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: pe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: pe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: pe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: pe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: pe.toString(r)
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
Zr.create = (t) => {
  var e;
  return new Zr({
    checks: [],
    typeName: me.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ce(t)
  });
};
class ui extends Le {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ce.boolean) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.boolean,
        received: n.parsedType
      }), we;
    }
    return Wt(e.data);
  }
}
ui.create = (t) => new ui({
  typeName: me.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ce(t)
});
class pn extends Le {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ce.date) {
      const s = this._getOrReturnCtx(e);
      return le(s, {
        code: re.invalid_type,
        expected: ce.date,
        received: s.parsedType
      }), we;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return le(s, {
        code: re.invalid_date
      }), we;
    }
    const n = new kt();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), le(i, {
        code: re.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), le(i, {
        code: re.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : We.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new pn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: pe.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: pe.toString(r)
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
pn.create = (t) => new pn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: me.ZodDate,
  ...Ce(t)
});
class os extends Le {
  _parse(e) {
    if (this._getType(e) !== ce.symbol) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.symbol,
        received: n.parsedType
      }), we;
    }
    return Wt(e.data);
  }
}
os.create = (t) => new os({
  typeName: me.ZodSymbol,
  ...Ce(t)
});
class li extends Le {
  _parse(e) {
    if (this._getType(e) !== ce.undefined) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.undefined,
        received: n.parsedType
      }), we;
    }
    return Wt(e.data);
  }
}
li.create = (t) => new li({
  typeName: me.ZodUndefined,
  ...Ce(t)
});
class hi extends Le {
  _parse(e) {
    if (this._getType(e) !== ce.null) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.null,
        received: n.parsedType
      }), we;
    }
    return Wt(e.data);
  }
}
hi.create = (t) => new hi({
  typeName: me.ZodNull,
  ...Ce(t)
});
class Ln extends Le {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Wt(e.data);
  }
}
Ln.create = (t) => new Ln({
  typeName: me.ZodAny,
  ...Ce(t)
});
class dn extends Le {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Wt(e.data);
  }
}
dn.create = (t) => new dn({
  typeName: me.ZodUnknown,
  ...Ce(t)
});
class zr extends Le {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return le(r, {
      code: re.invalid_type,
      expected: ce.never,
      received: r.parsedType
    }), we;
  }
}
zr.create = (t) => new zr({
  typeName: me.ZodNever,
  ...Ce(t)
});
class as extends Le {
  _parse(e) {
    if (this._getType(e) !== ce.undefined) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.void,
        received: n.parsedType
      }), we;
    }
    return Wt(e.data);
  }
}
as.create = (t) => new as({
  typeName: me.ZodVoid,
  ...Ce(t)
});
class mr extends Le {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== ce.array)
      return le(r, {
        code: re.invalid_type,
        expected: ce.array,
        received: r.parsedType
      }), we;
    if (i.exactLength !== null) {
      const c = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (c || o) && (le(r, {
        code: c ? re.too_big : re.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: c ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (le(r, {
      code: re.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (le(r, {
      code: re.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((c, o) => i.type._parseAsync(new Tr(r, c, r.path, o)))).then((c) => kt.mergeArray(n, c));
    const s = [...r.data].map((c, o) => i.type._parseSync(new Tr(r, c, r.path, o)));
    return kt.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new mr({
      ...this._def,
      minLength: { value: e, message: pe.toString(r) }
    });
  }
  max(e, r) {
    return new mr({
      ...this._def,
      maxLength: { value: e, message: pe.toString(r) }
    });
  }
  length(e, r) {
    return new mr({
      ...this._def,
      exactLength: { value: e, message: pe.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
mr.create = (t, e) => new mr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: me.ZodArray,
  ...Ce(e)
});
function Cn(t) {
  if (t instanceof ut) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = kr.create(Cn(n));
    }
    return new ut({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof mr ? new mr({
      ...t._def,
      type: Cn(t.element)
    }) : t instanceof kr ? kr.create(Cn(t.unwrap())) : t instanceof yn ? yn.create(Cn(t.unwrap())) : t instanceof Ar ? Ar.create(t.items.map((e) => Cn(e))) : t;
}
class ut extends Le {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = We.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ce.object) {
      const h = this._getOrReturnCtx(e);
      return le(h, {
        code: re.invalid_type,
        expected: ce.object,
        received: h.parsedType
      }), we;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: c } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof zr && this._def.unknownKeys === "strip"))
      for (const h in i.data)
        c.includes(h) || o.push(h);
    const u = [];
    for (const h of c) {
      const f = s[h], d = i.data[h];
      u.push({
        key: { status: "valid", value: h },
        value: f._parse(new Tr(i, d, i.path, h)),
        alwaysSet: h in i.data
      });
    }
    if (this._def.catchall instanceof zr) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: i.data[f] }
          });
      else if (h === "strict")
        o.length > 0 && (le(i, {
          code: re.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (h !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const f of o) {
        const d = i.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: h._parse(
            new Tr(i, d, i.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const f of u) {
        const d = await f.key;
        h.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return h;
    }).then((h) => kt.mergeObjectSync(n, h)) : kt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return pe.errToObj, new ut({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, s, c, o;
          const u = (c = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, r, n).message) !== null && c !== void 0 ? c : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = pe.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new ut({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ut({
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
    return new ut({
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
    return new ut({
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
    return new ut({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return We.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new ut({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return We.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new ut({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Cn(this);
  }
  partial(e) {
    const r = {};
    return We.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new ut({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return We.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof kr; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new ut({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ml(We.objectKeys(this.shape));
  }
}
ut.create = (t, e) => new ut({
  shape: () => t,
  unknownKeys: "strip",
  catchall: zr.create(),
  typeName: me.ZodObject,
  ...Ce(e)
});
ut.strictCreate = (t, e) => new ut({
  shape: () => t,
  unknownKeys: "strict",
  catchall: zr.create(),
  typeName: me.ZodObject,
  ...Ce(e)
});
ut.lazycreate = (t, e) => new ut({
  shape: t,
  unknownKeys: "strip",
  catchall: zr.create(),
  typeName: me.ZodObject,
  ...Ce(e)
});
class fi extends Le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const c = s.map((o) => new yr(o.ctx.common.issues));
      return le(r, {
        code: re.invalid_union,
        unionErrors: c
      }), we;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const c = {
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
            parent: c
          }),
          ctx: c
        };
      })).then(i);
    {
      let s;
      const c = [];
      for (const u of n) {
        const h = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: h
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !s && (s = { result: f, ctx: h }), h.common.issues.length && c.push(h.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const o = c.map((u) => new yr(u));
      return le(r, {
        code: re.invalid_union,
        unionErrors: o
      }), we;
    }
  }
  get options() {
    return this._def.options;
  }
}
fi.create = (t, e) => new fi({
  options: t,
  typeName: me.ZodUnion,
  ...Ce(e)
});
const Gi = (t) => t instanceof gi ? Gi(t.schema) : t instanceof vr ? Gi(t.innerType()) : t instanceof yi ? [t.value] : t instanceof Yr ? t.options : t instanceof mi ? Object.keys(t.enum) : t instanceof vi ? Gi(t._def.innerType) : t instanceof li ? [void 0] : t instanceof hi ? [null] : null;
class xs extends Le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ce.object)
      return le(r, {
        code: re.invalid_type,
        expected: ce.object,
        received: r.parsedType
      }), we;
    const n = this.discriminator, i = r.data[n], s = this.optionsMap.get(i);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (le(r, {
      code: re.invalid_union_discriminator,
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
    const i = /* @__PURE__ */ new Map();
    for (const s of r) {
      const c = Gi(s.shape[e]);
      if (!c)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of c) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new xs({
      typeName: me.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...Ce(n)
    });
  }
}
function Fo(t, e) {
  const r = Hr(t), n = Hr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ce.object && n === ce.object) {
    const i = We.objectKeys(e), s = We.objectKeys(t).filter((o) => i.indexOf(o) !== -1), c = { ...t, ...e };
    for (const o of s) {
      const u = Fo(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      c[o] = u.data;
    }
    return { valid: !0, data: c };
  } else if (r === ce.array && n === ce.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const c = t[s], o = e[s], u = Fo(c, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === ce.date && n === ce.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class di extends Le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, c) => {
      if (Po(s) || Po(c))
        return we;
      const o = Fo(s.value, c.value);
      return o.valid ? ((Lo(s) || Lo(c)) && r.dirty(), { status: r.value, value: o.data }) : (le(n, {
        code: re.invalid_intersection_types
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
    ]).then(([s, c]) => i(s, c)) : i(this._def.left._parseSync({
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
di.create = (t, e, r) => new di({
  left: t,
  right: e,
  typeName: me.ZodIntersection,
  ...Ce(r)
});
class Ar extends Le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ce.array)
      return le(n, {
        code: re.invalid_type,
        expected: ce.array,
        received: n.parsedType
      }), we;
    if (n.data.length < this._def.items.length)
      return le(n, {
        code: re.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), we;
    !this._def.rest && n.data.length > this._def.items.length && (le(n, {
      code: re.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((c, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Tr(n, c, n.path, o)) : null;
    }).filter((c) => !!c);
    return n.common.async ? Promise.all(s).then((c) => kt.mergeArray(r, c)) : kt.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Ar({
      ...this._def,
      rest: e
    });
  }
}
Ar.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ar({
    items: t,
    typeName: me.ZodTuple,
    rest: null,
    ...Ce(e)
  });
};
class pi extends Le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ce.object)
      return le(n, {
        code: re.invalid_type,
        expected: ce.object,
        received: n.parsedType
      }), we;
    const i = [], s = this._def.keyType, c = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: s._parse(new Tr(n, o, n.path, o)),
        value: c._parse(new Tr(n, n.data[o], n.path, o))
      });
    return n.common.async ? kt.mergeObjectAsync(r, i) : kt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Le ? new pi({
      keyType: e,
      valueType: r,
      typeName: me.ZodRecord,
      ...Ce(n)
    }) : new pi({
      keyType: gr.create(),
      valueType: e,
      typeName: me.ZodRecord,
      ...Ce(r)
    });
  }
}
class cs extends Le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ce.map)
      return le(n, {
        code: re.invalid_type,
        expected: ce.map,
        received: n.parsedType
      }), we;
    const i = this._def.keyType, s = this._def.valueType, c = [...n.data.entries()].map(([o, u], h) => ({
      key: i._parse(new Tr(n, o, n.path, [h, "key"])),
      value: s._parse(new Tr(n, u, n.path, [h, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of c) {
          const h = await u.key, f = await u.value;
          if (h.status === "aborted" || f.status === "aborted")
            return we;
          (h.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(h.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of c) {
        const h = u.key, f = u.value;
        if (h.status === "aborted" || f.status === "aborted")
          return we;
        (h.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(h.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
cs.create = (t, e, r) => new cs({
  valueType: e,
  keyType: t,
  typeName: me.ZodMap,
  ...Ce(r)
});
class gn extends Le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ce.set)
      return le(n, {
        code: re.invalid_type,
        expected: ce.set,
        received: n.parsedType
      }), we;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (le(n, {
      code: re.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (le(n, {
      code: re.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function c(u) {
      const h = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return we;
        f.status === "dirty" && r.dirty(), h.add(f.value);
      }
      return { status: r.value, value: h };
    }
    const o = [...n.data.values()].map((u, h) => s._parse(new Tr(n, u, n.path, h)));
    return n.common.async ? Promise.all(o).then((u) => c(u)) : c(o);
  }
  min(e, r) {
    return new gn({
      ...this._def,
      minSize: { value: e, message: pe.toString(r) }
    });
  }
  max(e, r) {
    return new gn({
      ...this._def,
      maxSize: { value: e, message: pe.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
gn.create = (t, e) => new gn({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: me.ZodSet,
  ...Ce(e)
});
class Nn extends Le {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ce.function)
      return le(r, {
        code: re.invalid_type,
        expected: ce.function,
        received: r.parsedType
      }), we;
    function n(o, u) {
      return ns({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          rs(),
          ci
        ].filter((h) => !!h),
        issueData: {
          code: re.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return ns({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          rs(),
          ci
        ].filter((h) => !!h),
        issueData: {
          code: re.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, c = r.data;
    return this._def.returns instanceof Fn ? Wt(async (...o) => {
      const u = new yr([]), h = await this._def.args.parseAsync(o, s).catch((y) => {
        throw u.addIssue(n(o, y)), u;
      }), f = await c(...h);
      return await this._def.returns._def.type.parseAsync(f, s).catch((y) => {
        throw u.addIssue(i(f, y)), u;
      });
    }) : Wt((...o) => {
      const u = this._def.args.safeParse(o, s);
      if (!u.success)
        throw new yr([n(o, u.error)]);
      const h = c(...u.data), f = this._def.returns.safeParse(h, s);
      if (!f.success)
        throw new yr([i(h, f.error)]);
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
    return new Nn({
      ...this._def,
      args: Ar.create(e).rest(dn.create())
    });
  }
  returns(e) {
    return new Nn({
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
    return new Nn({
      args: e || Ar.create([]).rest(dn.create()),
      returns: r || dn.create(),
      typeName: me.ZodFunction,
      ...Ce(n)
    });
  }
}
class gi extends Le {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
gi.create = (t, e) => new gi({
  getter: t,
  typeName: me.ZodLazy,
  ...Ce(e)
});
class yi extends Le {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return le(r, {
        received: r.data,
        code: re.invalid_literal,
        expected: this._def.value
      }), we;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
yi.create = (t, e) => new yi({
  value: t,
  typeName: me.ZodLiteral,
  ...Ce(e)
});
function Ml(t, e) {
  return new Yr({
    values: t,
    typeName: me.ZodEnum,
    ...Ce(e)
  });
}
class Yr extends Le {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return le(r, {
        expected: We.joinValues(n),
        received: r.parsedType,
        code: re.invalid_type
      }), we;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return le(r, {
        received: r.data,
        code: re.invalid_enum_value,
        options: n
      }), we;
    }
    return Wt(e.data);
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
    return Yr.create(e);
  }
  exclude(e) {
    return Yr.create(this.options.filter((r) => !e.includes(r)));
  }
}
Yr.create = Ml;
class mi extends Le {
  _parse(e) {
    const r = We.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ce.string && n.parsedType !== ce.number) {
      const i = We.objectValues(r);
      return le(n, {
        expected: We.joinValues(i),
        received: n.parsedType,
        code: re.invalid_type
      }), we;
    }
    if (r.indexOf(e.data) === -1) {
      const i = We.objectValues(r);
      return le(n, {
        received: n.data,
        code: re.invalid_enum_value,
        options: i
      }), we;
    }
    return Wt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
mi.create = (t, e) => new mi({
  values: t,
  typeName: me.ZodNativeEnum,
  ...Ce(e)
});
class Fn extends Le {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ce.promise && r.common.async === !1)
      return le(r, {
        code: re.invalid_type,
        expected: ce.promise,
        received: r.parsedType
      }), we;
    const n = r.parsedType === ce.promise ? r.data : Promise.resolve(r.data);
    return Wt(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Fn.create = (t, e) => new Fn({
  type: t,
  typeName: me.ZodPromise,
  ...Ce(e)
});
class vr extends Le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === me.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const c = i.transform(n.data);
      return n.common.async ? Promise.resolve(c).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: c,
        path: n.path,
        parent: n
      });
    }
    const s = {
      addIssue: (c) => {
        le(n, c), c.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "refinement") {
      const c = (o) => {
        const u = i.refinement(o, s);
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
        return o.status === "aborted" ? we : (o.status === "dirty" && r.dirty(), c(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? we : (o.status === "dirty" && r.dirty(), c(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!is(c))
          return c;
        const o = i.transform(c.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((c) => is(c) ? Promise.resolve(i.transform(c.value, s)).then((o) => ({ status: r.value, value: o })) : c);
    We.assertNever(i);
  }
}
vr.create = (t, e, r) => new vr({
  schema: t,
  typeName: me.ZodEffects,
  effect: e,
  ...Ce(r)
});
vr.createWithPreprocess = (t, e, r) => new vr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: me.ZodEffects,
  ...Ce(r)
});
class kr extends Le {
  _parse(e) {
    return this._getType(e) === ce.undefined ? Wt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kr.create = (t, e) => new kr({
  innerType: t,
  typeName: me.ZodOptional,
  ...Ce(e)
});
class yn extends Le {
  _parse(e) {
    return this._getType(e) === ce.null ? Wt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yn.create = (t, e) => new yn({
  innerType: t,
  typeName: me.ZodNullable,
  ...Ce(e)
});
class vi extends Le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ce.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
vi.create = (t, e) => new vi({
  innerType: t,
  typeName: me.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Ce(e)
});
class us extends Le {
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
    return ss(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new yr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new yr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
us.create = (t, e) => new us({
  innerType: t,
  typeName: me.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ce(e)
});
class ls extends Le {
  _parse(e) {
    if (this._getType(e) !== ce.nan) {
      const n = this._getOrReturnCtx(e);
      return le(n, {
        code: re.invalid_type,
        expected: ce.nan,
        received: n.parsedType
      }), we;
    }
    return { status: "valid", value: e.data };
  }
}
ls.create = (t) => new ls({
  typeName: me.ZodNaN,
  ...Ce(t)
});
const Sb = Symbol("zod_brand");
class jl extends Le {
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
class Ci extends Le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? we : s.status === "dirty" ? (r.dirty(), Ul(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? we : i.status === "dirty" ? (r.dirty(), {
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
    return new Ci({
      in: e,
      out: r,
      typeName: me.ZodPipeline
    });
  }
}
const $l = (t, e = {}, r) => t ? Ln.create().superRefine((n, i) => {
  var s, c;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (c = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && c !== void 0 ? c : !0, h = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...h, fatal: u });
  }
}) : Ln.create(), xb = {
  object: ut.lazycreate
};
var me;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(me || (me = {}));
const Db = (t, e = {
  message: `Input not instance of ${t.name}`
}) => $l((r) => r instanceof t, e), kl = gr.create, zl = Gr.create, Ib = ls.create, Ob = Zr.create, ql = ui.create, Cb = pn.create, Tb = os.create, Ab = li.create, Nb = hi.create, Rb = Ln.create, Pb = dn.create, Lb = zr.create, Fb = as.create, Ub = mr.create, Mb = ut.create, jb = ut.strictCreate, $b = fi.create, kb = xs.create, zb = di.create, qb = Ar.create, Bb = pi.create, Vb = cs.create, Kb = gn.create, Hb = Nn.create, Wb = gi.create, Gb = yi.create, Zb = Yr.create, Yb = mi.create, Jb = Fn.create, nu = vr.create, Qb = kr.create, Xb = yn.create, e_ = vr.createWithPreprocess, t_ = Ci.create, r_ = () => kl().optional(), n_ = () => zl().optional(), i_ = () => ql().optional(), s_ = {
  string: (t) => gr.create({ ...t, coerce: !0 }),
  number: (t) => Gr.create({ ...t, coerce: !0 }),
  boolean: (t) => ui.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Zr.create({ ...t, coerce: !0 }),
  date: (t) => pn.create({ ...t, coerce: !0 })
}, o_ = we;
var br = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ci,
  setErrorMap: lb,
  getErrorMap: rs,
  makeIssue: ns,
  EMPTY_PATH: hb,
  addIssueToContext: le,
  ParseStatus: kt,
  INVALID: we,
  DIRTY: Ul,
  OK: Wt,
  isAborted: Po,
  isDirty: Lo,
  isValid: is,
  isAsync: ss,
  get util() {
    return We;
  },
  get objectUtil() {
    return Ro;
  },
  ZodParsedType: ce,
  getParsedType: Hr,
  ZodType: Le,
  ZodString: gr,
  ZodNumber: Gr,
  ZodBigInt: Zr,
  ZodBoolean: ui,
  ZodDate: pn,
  ZodSymbol: os,
  ZodUndefined: li,
  ZodNull: hi,
  ZodAny: Ln,
  ZodUnknown: dn,
  ZodNever: zr,
  ZodVoid: as,
  ZodArray: mr,
  ZodObject: ut,
  ZodUnion: fi,
  ZodDiscriminatedUnion: xs,
  ZodIntersection: di,
  ZodTuple: Ar,
  ZodRecord: pi,
  ZodMap: cs,
  ZodSet: gn,
  ZodFunction: Nn,
  ZodLazy: gi,
  ZodLiteral: yi,
  ZodEnum: Yr,
  ZodNativeEnum: mi,
  ZodPromise: Fn,
  ZodEffects: vr,
  ZodTransformer: vr,
  ZodOptional: kr,
  ZodNullable: yn,
  ZodDefault: vi,
  ZodCatch: us,
  ZodNaN: ls,
  BRAND: Sb,
  ZodBranded: jl,
  ZodPipeline: Ci,
  custom: $l,
  Schema: Le,
  ZodSchema: Le,
  late: xb,
  get ZodFirstPartyTypeKind() {
    return me;
  },
  coerce: s_,
  any: Rb,
  array: Ub,
  bigint: Ob,
  boolean: ql,
  date: Cb,
  discriminatedUnion: kb,
  effect: nu,
  enum: Zb,
  function: Hb,
  instanceof: Db,
  intersection: zb,
  lazy: Wb,
  literal: Gb,
  map: Vb,
  nan: Ib,
  nativeEnum: Yb,
  never: Lb,
  null: Nb,
  nullable: Xb,
  number: zl,
  object: Mb,
  oboolean: i_,
  onumber: n_,
  optional: Qb,
  ostring: r_,
  pipeline: t_,
  preprocess: e_,
  promise: Jb,
  record: Bb,
  set: Kb,
  strictObject: jb,
  string: kl,
  symbol: Tb,
  transformer: nu,
  tuple: qb,
  undefined: Ab,
  union: $b,
  unknown: Pb,
  void: Fb,
  NEVER: o_,
  ZodIssueCode: re,
  quotelessJson: ub,
  ZodError: yr
});
const a_ = /^aleo1.{58}$/i, c_ = /^AViewKey1.{44}$/i, u_ = /^APrivateKey1.{47}$/i, l_ = /^at1.{60}$/i, h_ = /^\d+field$/, f_ = /^\d+u32$/, d_ = /^\d+u64$/, nw = br.string().regex(a_), iw = br.string().regex(c_), sw = br.string().regex(u_), ow = br.string().regex(l_), aw = br.string().regex(h_), cw = br.string().regex(f_), uw = br.string().regex(d_);
var Uo;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Uo || (Uo = {}));
var Mo;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Mo || (Mo = {}));
var jo;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(jo || (jo = {}));
var $o;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})($o || ($o = {}));
var iu;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(iu || (iu = {}));
const lw = br.nativeEnum(Uo), hw = br.nativeEnum(Mo), fw = br.nativeEnum($o), dw = br.nativeEnum(jo);
class pw extends rr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class gw {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class yw extends rr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class mw {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class vw extends rr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class bw extends rr {
  constructor(e) {
    super();
  }
}
class _w {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class ww {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class Ew extends rr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Sw {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class xw extends rr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class Dw {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class Iw {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class Ow extends Vo {
  constructor() {
    super();
  }
}
class Cw {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Tw extends cr.EventEmitter {
  constructor() {
    super();
  }
}
class Aw {
  constructor(e) {
    this.client = e;
  }
}
function Bl(t) {
  Cr(() => (ot().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    ot().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function p_(t) {
  Cr(() => (ot().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    ot().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function Vl(t) {
  Cr(() => (ot().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    ot().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function _r() {
  const [t, e] = Bi(void 0);
  return Bl((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Vl((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), p_((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Cr(() => {
    async function r() {
      const i = await (await ot()).getSession();
      e(i);
    }
    return r(), Pn.on("session_change", r), () => {
      Pn.off("session_change", r);
    };
  }, []), t;
}
function Ds(t) {
  Cr(() => (ot().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    ot().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const su = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, h) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = h ?? typeof f != "object" ? f : Object.assign({}, e, f), r.forEach((y) => y(e, d));
    }
  }, i = () => e, o = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, o), o;
}, g_ = (t) => t ? su(t) : su;
var ko = { exports: {} }, io = {}, qi = { exports: {} }, so = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ou;
function y_() {
  if (ou)
    return so;
  ou = 1;
  var t = hs;
  function e(d, y) {
    return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, c = t.useDebugValue;
  function o(d, y) {
    var _ = y(), S = n({ inst: { value: _, getSnapshot: y } }), C = S[0].inst, D = S[1];
    return s(function() {
      C.value = _, C.getSnapshot = y, u(C) && D({ inst: C });
    }, [d, _, y]), i(function() {
      return u(C) && D({ inst: C }), d(function() {
        u(C) && D({ inst: C });
      });
    }, [d]), c(_), _;
  }
  function u(d) {
    var y = d.getSnapshot;
    d = d.value;
    try {
      var _ = y();
      return !r(d, _);
    } catch {
      return !0;
    }
  }
  function h(d, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : o;
  return so.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, so;
}
var oo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var au;
function m_() {
  return au || (au = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = hs, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), p = 1; p < b; p++)
          v[p - 1] = arguments[p];
        n("error", O, v);
      }
    }
    function n(O, b, v) {
      {
        var p = e.ReactDebugCurrentFrame, a = p.getStackAddendum();
        a !== "" && (b += "%s", v = v.concat([a]));
        var g = v.map(function(R) {
          return String(R);
        });
        g.unshift("Warning: " + b), Function.prototype.apply.call(console[O], console, g);
      }
    }
    function i(O, b) {
      return O === b && (O !== 0 || 1 / O === 1 / b) || O !== O && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : i, c = t.useState, o = t.useEffect, u = t.useLayoutEffect, h = t.useDebugValue, f = !1, d = !1;
    function y(O, b, v) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = b();
      if (!d) {
        var a = b();
        s(p, a) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = c({
        inst: {
          value: p,
          getSnapshot: b
        }
      }), R = g[0].inst, F = g[1];
      return u(function() {
        R.value = p, R.getSnapshot = b, _(R) && F({
          inst: R
        });
      }, [O, p, b]), o(function() {
        _(R) && F({
          inst: R
        });
        var q = function() {
          _(R) && F({
            inst: R
          });
        };
        return O(q);
      }, [O]), h(p), p;
    }
    function _(O) {
      var b = O.getSnapshot, v = O.value;
      try {
        var p = b();
        return !s(v, p);
      } catch {
        return !0;
      }
    }
    function S(O, b, v) {
      return b();
    }
    var C = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !C, z = D ? S : y, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : z;
    oo.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), oo;
}
var cu;
function Kl() {
  return cu || (cu = 1, process.env.NODE_ENV === "production" ? qi.exports = y_() : qi.exports = m_()), qi.exports;
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
var uu;
function v_() {
  if (uu)
    return io;
  uu = 1;
  var t = hs, e = Kl();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, c = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return io.useSyncExternalStoreWithSelector = function(h, f, d, y, _) {
    var S = s(null);
    if (S.current === null) {
      var C = { hasValue: !1, value: null };
      S.current = C;
    } else
      C = S.current;
    S = o(function() {
      function z(p) {
        if (!w) {
          if (w = !0, O = p, p = y(p), _ !== void 0 && C.hasValue) {
            var a = C.value;
            if (_(a, p))
              return b = a;
          }
          return b = p;
        }
        if (a = b, n(O, p))
          return a;
        var g = y(p);
        return _ !== void 0 && _(a, g) ? a : (O = p, b = g);
      }
      var w = !1, O, b, v = d === void 0 ? null : d;
      return [function() {
        return z(f());
      }, v === null ? void 0 : function() {
        return z(v());
      }];
    }, [f, d, y, _]);
    var D = i(h, S[0], S[1]);
    return c(function() {
      C.hasValue = !0, C.value = D;
    }, [D]), u(D), D;
  }, io;
}
var ao = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu;
function b_() {
  return lu || (lu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = hs, e = Kl();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, c = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function h(f, d, y, _, S) {
      var C = s(null), D;
      C.current === null ? (D = {
        hasValue: !1,
        value: null
      }, C.current = D) : D = C.current;
      var z = o(function() {
        var v = !1, p, a, g = function(W) {
          if (!v) {
            v = !0, p = W;
            var ie = _(W);
            if (S !== void 0 && D.hasValue) {
              var A = D.value;
              if (S(A, ie))
                return a = A, A;
            }
            return a = ie, ie;
          }
          var j = p, ne = a;
          if (n(j, W))
            return ne;
          var G = _(W);
          return S !== void 0 && S(ne, G) ? ne : (p = W, a = G, G);
        }, R = y === void 0 ? null : y, F = function() {
          return g(d());
        }, q = R === null ? void 0 : function() {
          return g(R());
        };
        return [F, q];
      }, [d, y, _, S]), w = z[0], O = z[1], b = i(f, w, O);
      return c(function() {
        D.hasValue = !0, D.value = b;
      }, [b]), u(b), b;
    }
    ao.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ao;
}
process.env.NODE_ENV === "production" ? ko.exports = v_() : ko.exports = b_();
var __ = ko.exports;
const w_ = /* @__PURE__ */ _i(__), { useSyncExternalStoreWithSelector: E_ } = w_;
function S_(t, e = t.getState, r) {
  const n = E_(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return eh(n), n;
}
const hu = (t) => {
  const e = typeof t == "function" ? g_(t) : t, r = (n, i) => S_(e, n, i);
  return Object.assign(r, e), r;
}, x_ = (t) => t ? hu(t) : hu;
function D_(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const c = (u) => u === null ? null : JSON.parse(u, e == null ? void 0 : e.reviver), o = (s = r.getItem(i)) != null ? s : null;
      return o instanceof Promise ? o.then(c) : c(o);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const bi = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return bi(n)(r);
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
        return bi(n)(r);
      }
    };
  }
}, I_ = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (D) => D,
    version: 0,
    merge: (D, z) => ({
      ...z,
      ...D
    }),
    ...e
  }, c = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let h;
  try {
    h = s.getStorage();
  } catch {
  }
  if (!h)
    return t(
      (...D) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...D);
      },
      n,
      i
    );
  const f = bi(s.serialize), d = () => {
    const D = s.partialize({ ...n() });
    let z;
    const w = f({ state: D, version: s.version }).then(
      (O) => h.setItem(s.name, O)
    ).catch((O) => {
      z = O;
    });
    if (z)
      throw z;
    return w;
  }, y = i.setState;
  i.setState = (D, z) => {
    y(D, z), d();
  };
  const _ = t(
    (...D) => {
      r(...D), d();
    },
    n,
    i
  );
  let S;
  const C = () => {
    var D;
    if (!h)
      return;
    c = !1, o.forEach((w) => w(n()));
    const z = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, n())) || void 0;
    return bi(h.getItem.bind(h))(s.name).then((w) => {
      if (w)
        return s.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
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
      return S = s.merge(
        w,
        (O = n()) != null ? O : _
      ), r(S, !0), d();
    }).then(() => {
      z == null || z(S, void 0), c = !0, u.forEach((w) => w(S));
    }).catch((w) => {
      z == null || z(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (D) => {
      s = {
        ...s,
        ...D
      }, D.getStorage && (h = D.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => C(),
    hasHydrated: () => c,
    onHydrate: (D) => (o.add(D), () => {
      o.delete(D);
    }),
    onFinishHydration: (D) => (u.add(D), () => {
      u.delete(D);
    })
  }, C(), S || _;
}, O_ = (t, e) => (r, n, i) => {
  let s = {
    storage: D_(() => localStorage),
    partialize: (C) => C,
    version: 0,
    merge: (C, D) => ({
      ...D,
      ...C
    }),
    ...e
  }, c = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...C) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...C);
      },
      n,
      i
    );
  const f = () => {
    const C = s.partialize({ ...n() });
    return h.setItem(s.name, {
      state: C,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (C, D) => {
    d(C, D), f();
  };
  const y = t(
    (...C) => {
      r(...C), f();
    },
    n,
    i
  );
  let _;
  const S = () => {
    var C, D;
    if (!h)
      return;
    c = !1, o.forEach((w) => {
      var O;
      return w((O = n()) != null ? O : y);
    });
    const z = ((D = s.onRehydrateStorage) == null ? void 0 : D.call(s, (C = n()) != null ? C : y)) || void 0;
    return bi(h.getItem.bind(h))(s.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
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
      return _ = s.merge(
        w,
        (O = n()) != null ? O : y
      ), r(_, !0), f();
    }).then(() => {
      z == null || z(_, void 0), _ = n(), c = !0, u.forEach((w) => w(_));
    }).catch((w) => {
      z == null || z(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (C) => {
      s = {
        ...s,
        ...C
      }, C.storage && (h = C.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => S(),
    hasHydrated: () => c,
    onHydrate: (C) => (o.add(C), () => {
      o.delete(C);
    }),
    onFinishHydration: (C) => (u.add(C), () => {
      u.delete(C);
    })
  }, s.skipHydration || S(), _ || y;
}, C_ = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? I_(t, e) : O_(t, e), T_ = C_, _n = x_()(
  T_((t, e) => ({
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
);
function ga() {
  const [t, e] = Bi(void 0), [r, n] = Bi(void 0), [i, s] = Bi(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
function Rr(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: c } = ga();
  async function o(u) {
    try {
      c(!0), s(void 0);
      const f = await (await ot()).request(u ?? t);
      return i(f), f;
    } catch (h) {
      throw s(h), h;
    } finally {
      c(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const fu = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, Nw = () => {
  const t = _r(), e = "aleo:1", [r, n] = _n((h) => [h.account, h.setAccount]), { request: i, data: s, error: c, loading: o } = Rr({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  Ds(({ params: h, topic: f }) => {
    if (h.event.name === "accountSelected" && t && t.topic === f) {
      const y = h.event.address, _ = h.chainId.split(":")[0], S = h.chainId.split(":")[1];
      n({
        network: _,
        chainId: S,
        address: y,
        shortenedAddress: fu(y)
      });
    }
  }), Vl(({ params: h, topic: f }) => {
    const d = h.event.address, y = h.chainId.split(":")[0], _ = h.chainId.split(":")[1];
    n({
      network: y,
      chainId: _,
      address: d,
      shortenedAddress: fu(d)
    });
  }), Bl(({ params: h, topic: f }) => {
    n(void 0);
  }), Cr(() => {
    t && !o && i();
  }, [t == null ? void 0 : t.topic]), Cr(() => {
    if (s) {
      const h = s, f = h == null ? void 0 : h.account;
      f && n(f);
    }
  }, [s]);
  const u = c ? c.message : s && s.error;
  return {
    account: r,
    error: u,
    loading: o
  };
}, Rw = () => {
  const t = _r(), [e] = _n((f) => [f.account]), r = "aleo:1", { request: n, data: i, error: s, loading: c } = Rr({
    topic: t == null ? void 0 : t.topic,
    chainId: r,
    request: {
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0
      }
    }
  });
  Ds(({ params: f, topic: d }) => {
    const y = f.event.name, _ = f.event.address;
    (y === "selectedAccountSynced" || y === "accountSelected") && t && t.topic === d && _ === (e == null ? void 0 : e.address) && !c && n();
  }), Cr(() => {
    t && !c && n();
  }, [t == null ? void 0 : t.topic]);
  const o = s ? s.message : i && i.error, u = i;
  return { balances: u == null ? void 0 : u.balances, error: o, loading: c };
};
function Pw() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = ga();
  async function c() {
    try {
      s(!0), i(void 0);
      const u = await (await ot()).connect({
        requiredNamespaces: {
          aleo: {
            methods: da,
            chains: Ss,
            events: pa
          }
        }
      });
      return n(u), Pn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), u;
    } catch (o) {
      throw i(o), o;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: c };
}
const Lw = (t) => {
  const e = _r(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: c } = Rr({
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
  }), o = s ? s.message : i && i.error, u = i;
  return { createEvent: () => {
    t && n();
  }, eventID: u == null ? void 0 : u.eventId, loading: c, error: o };
}, Fw = () => {
  const t = _r(), { request: e, data: r, error: n, loading: i } = Rr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = n ? n.message : r && r.error, c = r;
  return { createSharedState: () => {
    e();
  }, data: c == null ? void 0 : c.data, loading: i, error: s };
};
var zo = { exports: {} }, co, du;
function A_() {
  if (du)
    return co;
  du = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  co = function(f, d) {
    d = d || {};
    var y = typeof f;
    if (y === "string" && f.length > 0)
      return c(f);
    if (y === "number" && isFinite(f))
      return d.long ? u(f) : o(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function c(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var y = parseFloat(d[1]), _ = (d[2] || "ms").toLowerCase();
        switch (_) {
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
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? h(f, d, n, "day") : d >= r ? h(f, d, r, "hour") : d >= e ? h(f, d, e, "minute") : d >= t ? h(f, d, t, "second") : f + " ms";
  }
  function h(f, d, y, _) {
    var S = d >= y * 1.5;
    return Math.round(f / y) + " " + _ + (S ? "s" : "");
  }
  return co;
}
function N_(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = c, r.humanize = A_(), r.destroy = h, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let y = 0; y < f.length; y++)
      d = (d << 5) - d + f.charCodeAt(y), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, y = null, _, S;
    function C(...D) {
      if (!C.enabled)
        return;
      const z = C, w = Number(/* @__PURE__ */ new Date()), O = w - (d || w);
      z.diff = O, z.prev = d, z.curr = w, d = w, D[0] = r.coerce(D[0]), typeof D[0] != "string" && D.unshift("%O");
      let b = 0;
      D[0] = D[0].replace(/%([a-zA-Z%])/g, (p, a) => {
        if (p === "%%")
          return "%";
        b++;
        const g = r.formatters[a];
        if (typeof g == "function") {
          const R = D[b];
          p = g.call(z, R), D.splice(b, 1), b--;
        }
        return p;
      }), r.formatArgs.call(z, D), (z.log || r.log).apply(z, D);
    }
    return C.namespace = f, C.useColors = r.useColors(), C.color = r.selectColor(f), C.extend = n, C.destroy = r.destroy, Object.defineProperty(C, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (_ !== r.namespaces && (_ = r.namespaces, S = r.enabled(f)), S),
      set: (D) => {
        y = D;
      }
    }), typeof r.init == "function" && r.init(C), C;
  }
  function n(f, d) {
    const y = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return y.log = this.log, y;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), _ = y.length;
    for (d = 0; d < _; d++)
      y[d] && (f = y[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(o),
      ...r.skips.map(o).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function c(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, y;
    for (d = 0, y = r.skips.length; d < y; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, y = r.names.length; d < y; d++)
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
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var R_ = N_;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = c(), e.destroy = (() => {
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
    const h = "color: " + this.color;
    u.splice(1, 0, h, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (d = f));
    }), u.splice(d, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function c() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = R_(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(zo, zo.exports);
var P_ = zo.exports;
const L_ = /* @__PURE__ */ _i(P_), ya = L_("wallet:sdk");
ya.enabled = !0;
const Uw = (t) => {
  ya("useDecrypt", t);
  const e = _r(), { request: r, data: n, error: i, loading: s } = Rr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), c = i ? i.message : n && n.error, o = n;
  return { decrypt: () => {
    t && r();
  }, plaintexts: o == null ? void 0 : o.plaintexts, loading: s, error: c };
};
function Mw() {
  const t = _r(), { error: e, loading: r, setError: n, setLoading: i } = ga();
  async function s() {
    try {
      i(!0), n(void 0), await (await ot()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: xt("USER_DISCONNECTED")
      }), Pn.emit("session_change"), _n.setState({ account: void 0 });
    } catch (c) {
      throw n(c), c;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: r, disconnect: s };
}
const jw = ({ filter: t, page: e }) => {
  const r = _r(), [n] = _n((S) => [S.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { request: i, data: s, error: c, loading: o } = Rr({
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
  });
  Ds(({ id: S, params: C, topic: D }) => {
    const z = C.event.name, w = C.event.address;
    z === "selectedAccountSynced" && r && r.topic === D && w === (n == null ? void 0 : n.address) && !o && i();
  });
  const u = !!r && !!n;
  Cr(() => {
    u && !o && i();
  }, [u]);
  const h = () => {
    !!r && !!n && !o && i();
  }, f = c ? c.message : s && s.error, d = s, y = d == null ? void 0 : d.events, _ = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: h, events: y, error: f, loading: o, page: e, pageCount: _ };
}, $w = (t) => {
  const e = _r(), { request: r, data: n, error: i, loading: s } = Rr({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), c = i ? i.message : n && n.error, o = n;
  return { importSharedState: () => {
    r();
  }, data: o == null ? void 0 : o.data, loading: s, error: c };
}, kw = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, zw = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const i = _r(), [s, c] = _n((z) => [
    z.chainId,
    z.account
  ]), { request: o, data: u, error: h, loading: f } = Rr({
    topic: i == null ? void 0 : i.topic,
    chainId: s,
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: r,
        page: n
      }
    }
  }), d = !!i && !!c && (e ? !!t : !0);
  Ds(({ params: z, topic: w }) => {
    const O = z.event.name, b = z.event.address;
    (O === "selectedAccountSynced" || O === "accountSelected" || O === "sharedAccountSynced" && b === t) && d && i.topic === w && o();
  }), Cr(() => {
    d && !f && o();
  }, [d]);
  const y = () => {
    d && !f && o();
  }, _ = h ? h.message : u && u.error, S = u, C = S == null ? void 0 : S.records, D = (S == null ? void 0 : S.pageCount) ?? 0;
  return { fetchPage: y, records: C, error: _, loading: f, page: n, pageCount: D };
}, qw = (t) => {
  const e = _r(), r = t == null ? void 0 : t.inputs.map(
    (f) => typeof f == "string" ? f : f.plaintext
  ), { request: n, data: i, error: s, loading: c } = Rr({
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
  }), o = s ? s.message : i && i.error, u = i;
  return { requestCreateEvent: () => {
    t && (ya("useRequestCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, error: o, loading: c };
}, Bw = (t, e) => {
  const r = _r(), { request: n, data: i, error: s, loading: c } = Rr({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: e
      }
    }
  }), o = s ? s.message : i && i.error;
  return { requestSignature: () => {
    n();
  }, response: i, loading: c, error: o };
}, Vw = async () => {
  const t = await ot(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    const n = await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return _n.setState({ account: n.account }), n;
  } catch (n) {
    const i = n.message;
    return console.error("getAccount error", i), { error: i };
  }
}, Kw = async () => {
  const t = await ot(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0
        }
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("getBalance error", i), { error: i };
  }
}, Hw = async () => {
  const t = await ot();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: da,
          chains: Ss,
          events: pa
        }
      }
    });
    return Pn.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, Ww = async (t) => {
  const e = await ot(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  const i = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
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
    const c = s.message;
    return console.error("createEvent error", c), { error: c };
  }
}, Gw = async () => {
  const t = await ot(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: r,
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("createSharedState error", i), { error: i };
  }
}, Zw = async (t) => {
  const e = await ot(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
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
}, Yw = async () => {
  const t = await ot(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: xt("USER_DISCONNECTED"),
      topic: e.topic
    }), Pn.emit("session_change"), _n.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, Jw = async (t) => {
  const e = await ot(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { event: void 0, error: "no session, chainId, or connection" };
  const i = async () => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: n,
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t
      }
    }
  });
  try {
    return await i();
  } catch (s) {
    const c = s.message;
    return console.error("getEvents error", c), { error: c };
  }
}, Qw = async (t) => {
  const e = await ot(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const i = async (s = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: n,
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
    const c = s.message;
    return console.error("getEvents error", c), { error: c };
  }
}, Xw = async (t) => {
  const e = await ot(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: n,
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
}, e1 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await ot(), i = await (n == null ? void 0 : n.getSession()), s = "aleo:1";
  if (!i || !s || !n)
    return { error: "no session, chainId, or connection" };
  const c = async (o = 0) => await n.request({
    topic: i.topic,
    chainId: s,
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
    return await c();
  } catch (o) {
    const u = o.message;
    return console.error("getRecords error", u), { error: u };
  }
}, t1 = async ({
  message: t,
  address: e
}) => {
  const r = await ot(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
  if (!n || !i || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: i,
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: e
        }
      }
    });
  } catch (s) {
    const c = s.message;
    return console.error("signature error", c), { error: c };
  }
}, r1 = 50, F_ = [
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
], pu = _h.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  pu !== t && (F_.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", pu));
} catch (t) {
  console.error(t);
}
export {
  Ss as $,
  iu as A,
  aw as B,
  cw as C,
  uw as D,
  Uo as E,
  pw as F,
  gw as G,
  Tw as H,
  xw as I,
  yw as J,
  Sw as K,
  mw as L,
  Dw as M,
  $o as N,
  vw as O,
  bw as P,
  Cw as Q,
  Ch as R,
  Aw as S,
  gu as T,
  Ow as U,
  jo as V,
  _w as W,
  Ew as X,
  ww as Y,
  Iw as Z,
  da as _,
  jt as a,
  pa as a0,
  sb as a1,
  ob as a2,
  tw as a3,
  fu as a4,
  Nw as a5,
  Rw as a6,
  Pw as a7,
  Lw as a8,
  Fw as a9,
  Uw as aa,
  Mw as ab,
  jw as ac,
  $w as ad,
  kw as ae,
  zw as af,
  qw as ag,
  Bw as ah,
  Bl as ai,
  Ds as aj,
  p_ as ak,
  Vl as al,
  _r as am,
  r1 as an,
  Vw as ao,
  Kw as ap,
  Hw as aq,
  Ww as ar,
  Gw as as,
  Zw as at,
  Yw as au,
  Jw as av,
  Qw as aw,
  Xw as ax,
  e1 as ay,
  t1 as az,
  Mo as b,
  rw as c,
  hw as d,
  Pn as e,
  fw as f,
  ot as g,
  dw as h,
  a_ as i,
  c_ as j,
  u_ as k,
  l_ as l,
  h_ as m,
  Ra as n,
  j_ as o,
  pr as p,
  f_ as q,
  d_ as r,
  qs as s,
  M_ as t,
  nw as u,
  iw as v,
  sw as w,
  ow as x,
  Rn as y,
  lw as z
};
